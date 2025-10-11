// app/sitemap.xml/route.ts
import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  // Base URL for your site
  const baseUrl = 'https://westchesterlimousine.net'

  // Path to blog folder
  const blogDir = path.join(process.cwd(), 'app/blog')

  // Get all blog folders that contain a page.tsx, and add the main blog page
  const blogPaths = fs.readdirSync(blogDir)
    .filter(folder => fs.existsSync(path.join(blogDir, folder, 'page.tsx')))
    .map(folder => `/blog/${folder}`)

  // Path to services folder
  const servicesDir = path.join(process.cwd(), 'app/services')

  // Get all service folders that contain a page.tsx
  const servicePaths = fs.readdirSync(servicesDir)
    .filter(folder => fs.existsSync(path.join(servicesDir, folder, 'page.tsx')))
    .map(folder => `/services/${folder}`)

  // Add any other static pages you want in sitemap, including the main blog page
  const staticPaths = ['/', '/about', '/contact', '/fleet', '/booking', '/blog']

  // Combine all paths
  const allPaths = [...staticPaths, ...blogPaths, ...servicePaths]

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPaths.map(url => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod> // Added lastmod for better SEO
      <changefreq>weekly</changefreq> // Example change frequency, adjust as needed
      <priority>${url === '/' ? '1.0' : url.includes('/blog/') || url.includes('/services/') ? '0.9' : '0.8'}</priority> // Example priorities
    </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}