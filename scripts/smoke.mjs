import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const origin = process.env.SMOKE_ORIGIN || 'http://127.0.0.1:3001'
const response = await fetch(origin)
const html = await response.text()

assert.equal(response.status, 200, 'Home should load')
assert.match(html, /<title>[^<]+<\/title>/, 'Home needs a title')
assert.match(html, /name="description"/, 'Home needs a description')
assert.match(html, /<main[^>]*id="main"/, 'Home needs a main landmark')
assert.match(html, /property="og:image" content="https:\/\/damidev\.vercel\.app\/og-image\.jpg"/, 'Social image should use an absolute URL')
assert.match(html, /name="twitter:card" content="summary_large_image"/, 'Social cards should use the large image format')
assert.doesNotMatch(html, /\p{Extended_Pictographic}/u, 'Home should not render emoji-capable characters')

for (const section of ['home', 'projects', 'articles', 'about', 'contact']) {
  assert.match(html, new RegExp(`id="${section}"`), `${section} section should be on the homepage`)
  assert.match(html, new RegExp(`href="\\/#${section}"`), `${section} should be reachable from navigation`)
}
assert.equal((html.match(/class="project-card"/g) || []).length, 5, 'Show the five live projects')
assert.equal((html.match(/class="article-row"/g) || []).length, 5, 'Show all five published articles')
assert.equal((html.match(/class="skill-icon"/g) || []).length, 18, 'Show the established skill icons')
for (const name of ['OurBank', 'Metaversus', 'CryptoWorld', 'MyKrypt', 'Realtor', 'Playfull', 'Tensfer', 'Revolut', 'BuyPower']) {
  assert.match(html, new RegExp(name), `Include ${name}`)
}
assert.match(html, /href="\/dami-adegbemile-cv\.pdf"/, 'View CV link should be present')
assert.match(html, /County Dublin, Ireland/, 'Location should remain visible')
assert.match(html, /Open to work/, 'Availability should remain visible')
assert.match(html, /name="name"/, 'Contact form should ask for a name')
assert.match(html, /name="email"/, 'Contact form should ask for an email')
assert.match(html, /name="message"/, 'Contact form should ask for a message')
assert.match(html, /class="theme-toggle"/, 'Theme control should remain available')
assert.match(html, /src="\/dami-portrait\.jpg"/, 'Portrait should load')
assert.match(html, /src="\/dami-signature\.png"/, 'Signature should remain')
console.log('OK one-page content and navigation')

for (const asset of ['/dami-portrait.jpg', '/dami-signature.png', '/og-image.jpg']) {
  assert.equal((await fetch(`${origin}${asset}`)).status, 200, `${asset} should load`)
}
const cv = await fetch(`${origin}/dami-adegbemile-cv.pdf`)
assert.equal(cv.status, 200, 'CV should load')
assert.match(cv.headers.get('content-type') ?? '', /application\/pdf/, 'CV should be served as PDF')
assert.equal(Buffer.compare(Buffer.from(await cv.arrayBuffer()), readFileSync('public/dami-adegbemile-cv.pdf')), 0, 'CV should match the supplied file')
console.log('OK assets and CV')

const missing = await fetch(`${origin}/missing`)
assert.equal(missing.status, 404, 'Unknown paths should return 404')
assert.match(await missing.text(), /href="\/#projects"/, '404 page should point to the Projects section')

const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text()
assert.equal((sitemap.match(/<url>/g) || []).length, 1, 'Sitemap should list one page')
assert.match(sitemap, /https:\/\/damidev\.vercel\.app\/<\/loc>/, 'Sitemap should list the homepage')
console.log('OK 404 and sitemap')
