export const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || 'https://damidev.vercel.app'

export function canonical(path: string) {
  return [{ rel: 'canonical', href: `${siteUrl}${path}` }]
}
