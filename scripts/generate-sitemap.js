import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://portfolio.swift-ai.pt';
const currentDate = new Date().toISOString().split('T')[0];

// Import projects data
const projectsModule = await import('../src/data/projects.ts');
const { projects } = projectsModule;

// Define static routes
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects', priority: '0.9', changefreq: 'weekly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/resume', priority: '0.8', changefreq: 'monthly' },
];

// Generate project routes
const projectRoutes = projects.map(project => ({
  path: `/project/${project.id}`,
  priority: project.id.startsWith('featured-') ? '0.8' : '0.7',
  changefreq: 'monthly',
}));

// Combine all routes
const allRoutes = [...staticRoutes, ...projectRoutes];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allRoutes
  .map(
    route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

// Write sitemap to public directory
const publicDir = path.join(__dirname, '../public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
console.log(`   Total URLs: ${allRoutes.length}`);

