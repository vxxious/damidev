export const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || 'https://damidev.vercel.app'

export function canonical(path: string) {
  return [{ rel: 'canonical', href: `${siteUrl}${path}` }]
}

export function pageMeta(title: string, description: string) {
  return [
    { title },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
  ]
}
