import { writeFileSync } from 'node:fs'

const siteUrl = (process.env.VITE_SITE_URL?.trim() || 'https://damidev.vercel.app').replace(/\/$/, '')

const url = new URL(siteUrl)
if (!['http:', 'https:'].includes(url.protocol) || url.pathname !== '/' || url.search || url.hash) {
  throw new Error('VITE_SITE_URL must be an absolute site origin without a path.')
}

const entries = `  <url><loc>${url.origin}/</loc></url>`
writeFileSync('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`)
writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${url.origin}/sitemap.xml\n`)
