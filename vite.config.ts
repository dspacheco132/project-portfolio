import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from "vite";
import fs from "fs";

// Plugin para copiar apenas arquivos não-imagem do public durante o build
function copyPublicFilesWithoutImages(): Plugin {
  return {
    name: "copy-public-files-without-images",
    writeBundle() {
      const publicDir = path.resolve(process.cwd(), "public");
      const distDir = path.resolve(process.cwd(), "dist");
      const imageExtensions = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".PNG", ".JPG", ".JPEG", ".WEBP", ".GIF"];
      
      // Arquivos permitidos (não são imagens ou são essenciais)
      const allowedFiles = ["robots.txt", "sitemap.xml", "favicon.ico", "favicon1.ico", "favicon2.ico"];
      
      if (!fs.existsSync(publicDir)) {
        return;
      }
      
      const copyAllowedFiles = (srcDir: string, destDir: string, relativePath: string = "") => {
        if (!fs.existsSync(srcDir)) {
          return;
        }
        
        const files = fs.readdirSync(srcDir);
        
        files.forEach((file) => {
          const srcPath = path.join(srcDir, file);
          const stat = fs.statSync(srcPath);
          const relativeFilePath = path.join(relativePath, file);
          
          if (stat.isDirectory()) {
            // Ignorar a pasta projects que contém apenas imagens
            if (file === "projects" || file === "notuser") {
              return;
            }
            
            const destSubDir = path.join(destDir, file);
            if (!fs.existsSync(destSubDir)) {
              fs.mkdirSync(destSubDir, { recursive: true });
            }
            copyAllowedFiles(srcPath, destSubDir, relativeFilePath);
          } else {
            const ext = path.extname(file).toLowerCase();
            const isImage = imageExtensions.includes(ext);
            const isAllowed = allowedFiles.includes(file) || allowedFiles.some(allowed => file.startsWith(allowed));
            
            // Copiar apenas se não for imagem OU se estiver na lista de arquivos permitidos
            if (!isImage || isAllowed) {
              const destPath = path.join(destDir, file);
              fs.copyFileSync(srcPath, destPath);
              console.log(`Copiado: ${relativeFilePath}`);
            } else {
              console.log(`Ignorado (imagem): ${relativeFilePath}`);
            }
          }
        });
      };
      
      copyAllowedFiles(publicDir, distDir);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    // Copiar apenas arquivos não-imagem do public em produção
    mode === 'production' && copyPublicFilesWithoutImages(),
  ].filter(Boolean),
  // Em produção, desabilitar a cópia automática do publicDir
  // e usar o plugin customizado para controlar o que é copiado
  publicDir: mode === 'production' ? false : 'public',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tabs',
            '@radix-ui/react-tooltip',
          ],
          'animation-vendor': ['framer-motion'],
          'query-vendor': ['@tanstack/react-query'],
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) {
            return `assets/[name]-[hash][extname]`;
          }
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[ext]/[name]-[hash][extname]`;
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: mode === 'development',
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      '@tanstack/react-query',
    ],
  },
}));
