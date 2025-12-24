import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const MAX_WIDTH = 1920; // Largura máxima para imagens grandes
const MAX_HEIGHT = 1920; // Altura máxima para imagens grandes
const QUALITY = 85; // Qualidade WebP (0-100)
const PNG_QUALITY = 90; // Qualidade para PNG (0-100)

// Formatos de imagem suportados
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

// Função para verificar se é uma imagem
function isImageFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

// Função para obter estatísticas do arquivo
async function getFileStats(filePath) {
  try {
    const stats = await fs.stat(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

// Função para otimizar uma imagem
async function optimizeImage(inputPath, outputPath) {
  try {
    const originalSize = await getFileStats(inputPath);
    
    // Obter metadados da imagem
    const metadata = await sharp(inputPath).metadata();
    
    // Calcular novas dimensões mantendo aspect ratio
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > MAX_WIDTH || height > MAX_HEIGHT) {
      if (width > height) {
        width = MAX_WIDTH;
        height = Math.round((metadata.height / metadata.width) * MAX_WIDTH);
      } else {
        height = MAX_HEIGHT;
        width = Math.round((metadata.width / metadata.height) * MAX_HEIGHT);
      }
    }
    
    // Determinar formato de saída baseado na extensão original
    const ext = path.extname(inputPath).toLowerCase();
    const isPng = ext === '.png';
    
    // Criar pipeline de otimização
    let pipeline = sharp(inputPath)
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      });
    
    if (isPng) {
      // Para PNG, converter para WebP com qualidade alta
      pipeline = pipeline.webp({ quality: PNG_QUALITY });
      outputPath = outputPath.replace(/\.(png|PNG)$/, '.webp');
    } else {
      // Para JPEG, converter para WebP
      pipeline = pipeline.webp({ quality: QUALITY });
      outputPath = outputPath.replace(/\.(jpg|jpeg|JPG|JPEG)$/i, '.webp');
    }
    
    // Aplicar otimizações adicionais
    pipeline = pipeline
      .sharpen() // Melhorar nitidez
      .normalise(); // Normalizar brilho
    
    // Salvar imagem otimizada
    await pipeline.toFile(outputPath);
    
    const newSize = await getFileStats(outputPath);
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    return {
      success: true,
      originalSize,
      newSize,
      reduction,
      originalPath: inputPath,
      optimizedPath: outputPath
    };
  } catch (error) {
    console.error(`Erro ao otimizar ${inputPath}:`, error.message);
    return {
      success: false,
      error: error.message,
      originalPath: inputPath
    };
  }
}

// Função recursiva para encontrar todas as imagens
async function findImages(dir, fileList = []) {
  const files = await fs.readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    
    if (stat.isDirectory()) {
      // Ignorar node_modules e outras pastas desnecessárias
      if (!file.startsWith('.') && file !== 'node_modules') {
        await findImages(filePath, fileList);
      }
    } else if (isImageFile(filePath)) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

// Função principal
async function main() {
  console.log('🖼️  Iniciando otimização de imagens...\n');
  
  // Encontrar todas as imagens
  const images = await findImages(PUBLIC_DIR);
  console.log(`📸 Encontradas ${images.length} imagens para otimizar\n`);
  
  if (images.length === 0) {
    console.log('Nenhuma imagem encontrada para otimizar.');
    return;
  }
  
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let successCount = 0;
  let failCount = 0;
  const results = [];
  
  // Processar cada imagem
  for (const imagePath of images) {
    const relativePath = path.relative(PUBLIC_DIR, imagePath);
    console.log(`Processando: ${relativePath}`);
    
    const result = await optimizeImage(imagePath, imagePath);
    results.push(result);
    
    if (result.success) {
      successCount++;
      totalOriginalSize += result.originalSize;
      totalNewSize += result.newSize;
      
      // Remover arquivo original se foi criado um novo arquivo WebP
      if (result.optimizedPath !== result.originalPath) {
        await fs.unlink(result.originalPath);
        console.log(`  ✅ Otimizado: ${result.reduction}% de redução`);
        console.log(`  📁 Novo arquivo: ${path.relative(PUBLIC_DIR, result.optimizedPath)}`);
      } else {
        console.log(`  ✅ Otimizado: ${result.reduction}% de redução`);
      }
    } else {
      failCount++;
      console.log(`  ❌ Erro: ${result.error}`);
    }
    console.log('');
  }
  
  // Resumo
  console.log('\n' + '='.repeat(50));
  console.log('📊 RESUMO DA OTIMIZAÇÃO');
  console.log('='.repeat(50));
  console.log(`Total de imagens processadas: ${images.length}`);
  console.log(`✅ Sucesso: ${successCount}`);
  console.log(`❌ Falhas: ${failCount}`);
  console.log(`\nTamanho original: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Tamanho otimizado: ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Economia total: ${((totalOriginalSize - totalNewSize) / 1024 / 1024).toFixed(2)} MB (${((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1)}%)`);
  console.log('='.repeat(50));
}

// Executar
main().catch(console.error);

