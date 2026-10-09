import { createRootRoute, HeadContent, Link, Outlet, Scripts } from '@tanstack/react-router'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { SiteMotion } from '../components/SiteMotion'
import { ArrowIcon } from '../components/SiteIcons'
import { siteUrl } from '../data/seo'
import appCss from '../styles.css?url'

const siteTitle = 'Dami | Full-Stack Engineer'
const siteDescription = 'Dami is a full-stack engineer building React and Next.js applications, Node.js APIs, and the data systems behind them.'
const themeScript = "try{if(localStorage.getItem('dami-theme')==='dark')document.documentElement.dataset.theme='dark'}catch{}"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#f8f7f4' },
      { title: siteTitle },
      { name: 'description', content: siteDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: siteTitle },
      { property: 'og:description', content: siteDescription },
      { property: 'og:image', content: `${siteUrl}/og-image.jpg` },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Dami, Full-Stack Engineer' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${siteUrl}/og-image.jpg` },
    ],
    links: [{ rel: 'stylesheet', href: appCss }, { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Dami', jobTitle: 'Full-Stack Engineer', email: 'mailto:damiiyi@gmail.com', sameAs: ['https://github.com/damilola1ade', 'https://www.linkedin.com/in/dami-adegbemile-a768b6b8'] }) }],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
})

function RootComponent() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><HeadContent /><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <noscript><style>{'.navigation-loading{display:none}'}</style></noscript>
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="site-shell">
          <SiteHeader />
          <SiteMotion />
          <Outlet />
          <SiteFooter />
        </div>
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <main className="frame not-found" id="main">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>Page not found.</h1>
      <p>That address doesn’t match a page on this site. You can head home or browse the projects.</p>
      <div className="not-found-actions">
        <Link className="hero-action hero-action-primary" to="/">Back home <ArrowIcon /></Link>
        <Link className="hero-action" to="/projects">View projects <ArrowIcon /></Link>
      </div>
    </main>
  )
}
