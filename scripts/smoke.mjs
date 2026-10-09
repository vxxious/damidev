import assert from 'node:assert/strict'

const origin = process.env.SMOKE_ORIGIN || 'http://127.0.0.1:3001'
const paths = [
  '/', '/projects', '/articles', '/about', '/contact',
]

for (const path of paths) {
  const response = await fetch(`${origin}${path}`)
  const html = await response.text()
  assert.equal(response.status, 200, `${path} should load`)
  assert.match(html, /<title>[^<]+<\/title>/, `${path} needs a title`)
  assert.match(html, /name="description"/, `${path} needs a description`)
  assert.match(html, /<main[^>]*id="main"/, `${path} needs a main landmark`)
  assert.doesNotMatch(html, /\p{Extended_Pictographic}/u, `${path} should not render emoji-capable characters`)
  console.log(`OK ${path}`)
}

const homeHtml = await (await fetch(origin)).text()
const articlesHtml = await (await fetch(`${origin}/articles`)).text()
const projectsHtml = await (await fetch(`${origin}/projects`)).text()
const aboutHtml = await (await fetch(`${origin}/about`)).text()
assert.doesNotMatch(homeHtml, /class="project-card"|class="article-row"|approach-strip/, 'Home should remain a focused introduction')
assert.match(homeHtml, /id="home-heading"/, 'Home should introduce Dami')
assert.match(homeHtml, /property="og:image" content="https:\/\/damidev\.vercel\.app\/og-image\.jpg"/, 'Open Graph image should use an absolute URL')
assert.match(homeHtml, /name="twitter:card" content="summary_large_image"/, 'Social cards should use the large image format')
assert.doesNotMatch(homeHtml, /hero-role/, 'Home hero should not repeat the role above Dami')
assert.match(homeHtml, /I build web applications from the interface/, 'Home should keep the original introduction')
assert.match(homeHtml, /I’m a full-stack engineer who builds and refines interfaces/, 'Home should include the full-stack introduction')
assert.match(homeHtml, /Explore projects/, 'Home should link to projects')
assert.match(homeHtml, /Get in touch/, 'Home should link to contact')
assert.match(homeHtml, /County Dublin, Ireland/, 'Home should show Dami’s confirmed location')
assert.match(homeHtml, /Open to work/, 'Home should show Dami’s confirmed availability')
assert.match(homeHtml, /src="\/dami-portrait\.jpg"/, 'Home should show Dami’s portrait')
assert.match(homeHtml, /id="contact-form"/, 'Home should contain a contact form')
assert.match(homeHtml, /class="theme-toggle"/, 'The theme switch should be available on every page')
assert.match(homeHtml, /dami-theme/, 'The saved theme should be restored before the page paints')
assert.match(homeHtml, /name="name"/, 'Contact form should ask for a name')
assert.match(homeHtml, /name="email"/, 'Contact form should ask for an email')
assert.match(homeHtml, /name="message"/, 'Contact form should ask for a message')
assert.match(homeHtml, /id="contact-message"[^>]*rows="4"/, 'Message field should use the compact height')
assert.equal((articlesHtml.match(/class="article-row"/g) || []).length, 5, 'Articles should list all five published pieces')
assert.equal((projectsHtml.match(/class="project-card"/g) || []).length, 5, 'Projects should show the five live projects')
for (const title of ['OurBank', 'Metaversus', 'CryptoWorld', 'MyKrypt', 'Realtor']) {
  assert.match(projectsHtml, new RegExp(title), `Projects should include ${title}`)
}
assert.doesNotMatch(projectsHtml, /Project link unavailable/, 'Projects should all have live links')
assert.doesNotMatch(projectsHtml, /cruud\.com|dlordmaseli\.org|tensfer-website\.onrender\.com|artificialx\.vercel\.app/, 'Projects should not link to unavailable legacy sites')
assert.doesNotMatch(projectsHtml, /href="\/work\//, 'Projects should not link to case-study pages')
assert.equal((aboutHtml.match(/class="skill-icon"/g) || []).length, 18, 'About should show 18 brand icons')
assert.doesNotMatch(aboutHtml, /src="\/dami-portrait\.jpg"/, 'About should not duplicate Dami’s portrait')
assert.match(homeHtml, /src="\/dami-signature\.png"/, 'Footer should show Dami’s signature')
assert.doesNotMatch(homeHtml, /Have something worth building|Let’s talk/, 'Footer should not repeat the removed contact CTA')
console.log('OK article, project, and skill lists')

for (const asset of ['/dami-portrait.jpg', '/dami-signature.png']) {
  assert.equal((await fetch(`${origin}${asset}`)).status, 200, `${asset} should load`)
}

const missing = await fetch(`${origin}/missing`)
assert.equal(missing.status, 404, 'Unknown pages should return 404')
const missingHtml = await missing.text()
assert.match(missingHtml, /Page not found\./, '404 page should explain the missing route')
assert.match(missingHtml, /href="\/projects"/, '404 page should offer a way to browse projects')
console.log('OK 404')

const ogImage = await fetch(`${origin}/og-image.jpg`)
assert.equal(ogImage.status, 200, 'Social sharing image should load')
assert.match(ogImage.headers.get('content-type') ?? '', /image\/jpeg/, 'Social sharing image should be a JPEG')

const robots = await fetch(`${origin}/robots.txt`)
assert.equal(robots.status, 200, 'robots.txt should be available')
assert.match(await robots.text(), /Allow: \//)
console.log('OK robots.txt')
