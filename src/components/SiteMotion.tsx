import { useEffect, useState } from 'react'
import { useRouterState } from '@tanstack/react-router'
import { animate } from 'framer-motion/dom/mini'
import { hover, inView } from 'framer-motion/dom'
import Lenis from 'lenis'

const entrance = [0.23, 1, 0.32, 1] as const
const revealTargets = [
  '.hero-copy', '.hero-portrait',
  '.section-title', '.section-lead', '.project-card', '.article-row',
  '.page-intro h1', '.projects-intro h1',
  '.about-columns', '.skill-mark', '.experience-row',
  '.contact-page h1', '.contact-links', '.home-contact-intro h2', '.home-contact-form',
].join(', ')

export function SiteMotion() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const isLoading = useRouterState({ select: (state) => state.isLoading })
  const [hydrating, setHydrating] = useState(true)

  useEffect(() => setHydrating(false), [])

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, anchors: true, respectReducedMotion: true })
    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const elements = [...document.querySelectorAll<HTMLElement>(revealTargets)]
    const animations: Array<{ stop: () => void }> = []

    for (const element of elements) {
      if (element.getBoundingClientRect().top > window.innerHeight - 60) element.style.opacity = '0'
    }

    const stopInView = inView(elements, (element) => {
      const target = element as HTMLElement
      const hidden = target.style.opacity === '0'
      const animation = animate(target, {
        opacity: [hidden ? 0 : 0.55, 1],
        transform: ['translate3d(0, 18px, 0)', 'translate3d(0, 0, 0)'],
      }, { duration: 0.55, ease: entrance })

      animations.push(animation)
      void animation.then(() => {
        target.style.removeProperty('opacity')
        target.style.removeProperty('transform')
      })
    }, { margin: '0px 0px -60px 0px', amount: 0.1 })

    const stopHover = hover('.main-nav a, .small-link, .text-link, .project-card, .project-card-action, .article-row, .contact-link, .skill-item, .home-contact-submit, .home-contact-email', (element) => {
      const target = element.matches('.main-nav a')
        ? element
        : element.querySelector('.article-arrow, .contact-link-arrow, .contact-icon, .skill-icon, .project-card-body h2, .arrow-icon')
      if (!target) return

      animate(target, { transform: 'translate3d(3px, -3px, 0)' }, { duration: 0.18, ease: entrance })
      return () => { animate(target, { transform: 'translate3d(0, 0, 0)' }, { duration: 0.18, ease: entrance }) }
    })

    return () => {
      stopInView()
      stopHover()
      animations.forEach((animation) => animation.stop())
      elements.forEach((element) => {
        element.style.removeProperty('opacity')
        element.style.removeProperty('transform')
      })
    }
  }, [pathname])

  return isLoading || hydrating ? (
    <div aria-live="polite" className="navigation-loading" role="status">
      <span aria-hidden="true" className="navigation-spinner" />
      Loading page
    </div>
  ) : null
}
