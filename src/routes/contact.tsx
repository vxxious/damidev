import { createFileRoute } from '@tanstack/react-router'
import { HiArrowUpRight, HiOutlineEnvelope } from 'react-icons/hi2'
import { FaLinkedin } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import { AsteriskIcon } from '../components/SiteIcons'
import { canonical, pageMeta } from '../data/seo'

const contactLinks = [
  { label: 'Email', detail: 'damiiyi@gmail.com', href: 'mailto:damiiyi@gmail.com', icon: HiOutlineEnvelope, kind: 'email' },
  { label: 'LinkedIn', detail: 'Dami’s profile', href: 'https://www.linkedin.com/in/dami-adegbemile-a768b6b8', icon: FaLinkedin, kind: 'linkedin' },
  { label: 'GitHub', detail: '@damilola1ade', href: 'https://github.com/damilola1ade', icon: SiGithub, kind: 'github' },
] as const

export const Route = createFileRoute('/contact')({
  head: () => ({ meta: pageMeta('Contact | Dami', 'Contact Dami about full-stack development roles, projects, and collaborations.'), links: canonical('/contact') }),
  component: Contact,
})

function Contact() {
  return (
    <main className="frame" id="main">
      <section className="contact-page graph-paper">
        <p className="eyebrow"><AsteriskIcon /> 04 / CONTACT</p>
        <h1>Let’s make<br /><em>something work.</em></h1>
        <p>For a role, a project, or a conversation about the work, send me a note.</p>
        <nav className="contact-links" aria-label="Ways to contact Dami" data-scroll-reveal>
          {contactLinks.map(({ label, detail, href, icon: Icon, kind }) => (
            <a className="contact-link" href={href} key={label} target={kind === 'email' ? undefined : '_blank'} rel={kind === 'email' ? undefined : 'me noreferrer'}>
              <Icon className={`contact-icon contact-icon-${kind}`} aria-hidden="true" />
              <span className="contact-link-copy"><span>{label}</span><small>{detail}</small></span>
              <HiArrowUpRight className="contact-link-arrow" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </section>
    </main>
  )
}
