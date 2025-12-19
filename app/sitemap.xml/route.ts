// app/sitemap.xml/route.ts
import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
import { areaData, getAllCities } from '@/lib/service-areas-data'

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

  // Get all service area paths
  const serviceAreaPaths = Object.keys(areaData).map(area => `/service-areas/${area}`)

  // Get all city paths
  const cityPaths = getAllCities().map(({ area, city }) => `/service-areas/${area}/${city}`)

  // Add any other static pages you want in sitemap, including the main blog page
  const staticPaths = ['/', '/about', '/contact', '/fleet', '/booking', '/blog', '/service-areas']

  // Combine all paths
  const allPaths = [...staticPaths, ...blogPaths, ...servicePaths, ...serviceAreaPaths, ...cityPaths]

  // Helper function to determine priority
  const getPriority = (url: string): string => {
    if (url === '/') return '1.0'
    if (url.includes('/blog/') || url.includes('/services/')) return '0.9'
    if (url.includes('/service-areas/') && url.split('/').length === 4) return '0.8' // Service areas
    if (url.includes('/service-areas/') && url.split('/').length === 5) return '0.7' // Cities
    return '0.8'
  }

  // Helper function to determine change frequency
  const getChangeFreq = (url: string): string => {
    if (url.includes('/service-areas/')) return 'monthly'
    if (url.includes('/blog/')) return 'weekly'
    return 'weekly'
  }

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPaths.map(url => `
    <url>
      <loc>${baseUrl}${url}/</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${getChangeFreq(url)}</changefreq>
      <priority>${getPriority(url)}</priority>
    </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}