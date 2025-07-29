// Dynamic Sitemap Generator for ViQantAI
// Run this script to automatically generate sitemap.xml

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  baseUrl: 'https://www.viqantai.com',
  outputPath: path.join(__dirname, '../public/sitemap.xml'),
  lastmod: new Date().toISOString().split('T')[0], // Today's date in YYYY-MM-DD format
};

// Static pages configuration
const staticPages = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    url: '/about-us',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: '/services',
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '/contact-us',
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: '/portfolio',
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    url: '/blog',
    changefreq: 'daily',
    priority: '0.8'
  },
  {
    url: '/web-development',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: '/app-development',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: '/thank-you',
    changefreq: 'yearly',
    priority: '0.3'
  }
];

// Service pages (add your actual service slugs here)
const servicePages = [
  'ai-consulting',
  'web-development',
  'app-development',
  'machine-learning',
  'custom-software',
  'digital-transformation',
  'ai-automation',
  'data-analytics'
];

// Function to generate XML sitemap
function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

`;

  // Add static pages
  staticPages.forEach(page => {
    xml += `  <url>
    <loc>${config.baseUrl}${page.url}</loc>
    <lastmod>${config.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>

`;
  });

  // Add service detail pages
  servicePages.forEach(service => {
    xml += `  <url>
    <loc>${config.baseUrl}/services/${service}</loc>
    <lastmod>${config.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

`;
  });

  // Add blog posts (if you have a blog data source)
  // This is a placeholder - you would typically read from your blog data
  const blogPosts = getBlogPosts(); // Implement this function based on your blog data source
  blogPosts.forEach(post => {
    xml += `  <url>
    <loc>${config.baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.lastmod || config.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

`;
  });

  xml += `</urlset>`;

  return xml;
}

// Function to get blog posts (implement based on your data source)
function getBlogPosts() {
  // This is a placeholder function
  // In a real implementation, you would:
  // 1. Read from your blog data file (JSON, markdown files, etc.)
  // 2. Query your CMS API
  // 3. Read from your database
  
  // Example static blog posts
  return [
    {
      slug: 'ai-trends-2024',
      lastmod: '2024-12-19'
    },
    {
      slug: 'web-development-best-practices',
      lastmod: '2024-12-18'
    },
    {
      slug: 'machine-learning-business-applications',
      lastmod: '2024-12-17'
    }
  ];
}

// Function to write sitemap to file
function writeSitemap() {
  try {
    const sitemapXML = generateSitemap();
    
    // Ensure the public directory exists
    const publicDir = path.dirname(config.outputPath);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Write the sitemap file
    fs.writeFileSync(config.outputPath, sitemapXML, 'utf8');
    
    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: ${config.outputPath}`);
    console.log(`🔗 URL: ${config.baseUrl}/sitemap.xml`);
    console.log(`📅 Last Modified: ${config.lastmod}`);
    
    // Count URLs
    const urlCount = (sitemapXML.match(/<url>/g) || []).length;
    console.log(`📊 Total URLs: ${urlCount}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  console.log('🚀 Generating sitemap for ViQantAI...');
  writeSitemap();
}

module.exports = {
  generateSitemap,
  writeSitemap,
  config
};