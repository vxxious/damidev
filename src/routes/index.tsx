import { useState, type FormEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { FaLinkedin } from 'react-icons/fa'
import { HiArrowUpRight, HiOutlineEnvelope } from 'react-icons/hi2'
import { SiGithub } from 'react-icons/si'
import { ArticleList } from '../components/ArticleList'
import { ProjectCard } from '../components/ProjectCard'
import { SkillCloud } from '../components/SkillCloud'
import { ArrowIcon, AsteriskIcon } from '../components/SiteIcons'
import { articles, experience, projects } from '../data/portfolio'
import { canonical } from '../data/seo'

export const Route = createFileRoute('/')({ head: () => ({ links: canonical('/') }), component: Home })

const contactLinks = [
  { label: 'Email', detail: 'damiiyi@gmail.com', href: 'mailto:damiiyi@gmail.com', icon: HiOutlineEnvelope, kind: 'email' },
  { label: 'LinkedIn', detail: 'Dami’s profile', href: 'https://www.linkedin.com/in/dami-adegbemile-a768b6b8', icon: FaLinkedin, kind: 'linkedin' },
  { label: 'GitHub', detail: '@damilola1ade', href: 'https://github.com/damilola1ade', icon: SiGithub, kind: 'github' },
] as const

function Home() {
  const [formMessage, setFormMessage] = useState('')

  function openEmailDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const name = String(fields.get('name') ?? '').trim()
    const email = String(fields.get('email') ?? '').trim()
    const message = String(fields.get('message') ?? '').trim()
    if (!name || !email || !message) {
      setFormMessage('Please complete all three fields.')
      return
    }
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`)
    setFormMessage('Your email app should open with the draft ready to review.')
    window.location.href = `mailto:damiiyi@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main id="main">
      <section aria-labelledby="home-heading" className="hero" id="home">
        <div className="hero-inner frame">
          <div className="hero-copy">
            <h1 id="home-heading">Hi, I’m Dami.</h1>
            <p className="hero-description">I build web applications from the interface to the API and data layer, making the parts work together.</p>
            <p className="hero-bio">I’m a full-stack engineer who builds and refines interfaces with React and TypeScript. I work with Node.js and PostgreSQL behind them, connecting the UI, API, and data in one product.</p>
            <div className="hero-actions">
              <a className="hero-action hero-action-primary" href="#projects">Explore projects <ArrowIcon /></a>
              <a className="hero-action" href="#contact">Get in touch <ArrowIcon /></a>
            </div>
          </div>
          <figure className="hero-portrait">
            <img alt="Portrait of Dami" decoding="async" fetchPriority="high" height="512" src="/dami-portrait.jpg" width="512" />
            <figcaption><dl className="hero-portrait-meta">
              <div><dt>Role</dt><dd>Full-Stack Engineer</dd></div>
              <div><dt>Location</dt><dd>County Dublin, Ireland</dd></div>
              <div><dt>Availability</dt><dd>Open to work</dd></div>
            </dl></figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="projects-heading" className="portfolio-section frame section-space" id="projects">
        <header className="section-intro">
          <p className="eyebrow">SELECTED LIVE WORK</p>
          <h2 className="section-title" id="projects-heading">Projects.</h2>
          <p className="section-lead">Live projects spanning product interfaces, web applications, and motion-led websites.</p>
        </header>
        <div className="project-grid" data-scroll-reveal>{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </section>

      <section aria-labelledby="articles-heading" className="portfolio-section portfolio-section-lined frame section-space" id="articles">
        <header className="section-intro">
          <p className="eyebrow">WRITING</p>
          <h2 className="section-title" id="articles-heading">Notes from the work.</h2>
          <p className="section-lead">Five published pieces on the details behind web applications, from React interfaces to NestJS services and deployment.</p>
        </header>
        <ArticleList items={articles} />
      </section>

      <section aria-labelledby="about-heading" className="portfolio-section portfolio-section-lined frame section-space" id="about">
        <header className="section-intro about-section-intro">
          <div>
            <p className="eyebrow">ABOUT</p>
            <h2 className="section-title" id="about-heading">I care about <em>how it works.</em></h2>
            <p className="section-lead">I’m Dami, a full-stack developer working across application interfaces, backend services, and the data between them.</p>
          </div>
          <a className="cv-link" href="/dami-adegbemile-cv.pdf" rel="noopener" target="_blank" type="application/pdf">View CV <ArrowIcon /></a>
        </header>
        <div className="about-columns about-practice" data-scroll-reveal>
          <p className="eyebrow">PRACTICE</p>
          <div><h3>From the first screen to the last API call.</h3><p>My recent public work includes Next.js applications, NestJS and Express services, document processing, authentication flows, and PostgreSQL and MongoDB data layers. I focus on making the system coherent across every layer.</p><a className="text-link" href="#projects">See projects <ArrowIcon /></a></div>
        </div>
        <div aria-labelledby="skills-title" className="skills-section about-subsection">
          <div className="skills-heading"><h3 id="skills-title" className="section-title">Skills &amp; tools.</h3><p>Technologies visible across my public projects and repositories.</p></div>
          <SkillCloud />
        </div>
        <div aria-labelledby="experience-title" className="experience-section about-subsection">
          <p className="eyebrow">EXPERIENCE</p>
          <h3 id="experience-title" className="section-title">Where I’ve <em>worked.</em></h3>
          <div className="experience-list" data-scroll-reveal>{experience.map((role, index) => <div className="experience-row" key={role.company}><span className="eyebrow">0{index + 1}</span><div><h4>{role.company}</h4><p>{role.title}</p><p className="experience-description">{role.description}</p></div><span>{role.period}</span></div>)}</div>
        </div>
      </section>

      <section aria-labelledby="contact-heading" className="portfolio-section portfolio-section-lined frame section-space" id="contact">
        <div className="home-contact">
          <div className="home-contact-intro">
            <AsteriskIcon />
            <h2 id="contact-heading">Get in touch.</h2>
            <p>Have a project, a role, or a question about the work? Send me a note.</p>
            <a className="home-contact-email" href="mailto:damiiyi@gmail.com">damiiyi@gmail.com <ArrowIcon /></a>
          </div>
          <form action="mailto:damiiyi@gmail.com" className="home-contact-form" encType="text/plain" method="post" onSubmit={openEmailDraft}>
            <div className="home-contact-fields">
              <label htmlFor="contact-name">Your name<input autoComplete="name" id="contact-name" maxLength={80} name="name" placeholder="Your name" required type="text" /></label>
              <label htmlFor="contact-email">Your email<input autoComplete="email" id="contact-email" maxLength={254} name="email" placeholder="you@example.com" required type="email" /></label>
              <label className="home-contact-message" htmlFor="contact-message">Your message<textarea id="contact-message" maxLength={2000} name="message" placeholder="Tell me a little about it…" required rows={4} /></label>
            </div>
            <div className="home-contact-submit-row"><button className="home-contact-submit" type="submit">Open email draft <ArrowIcon /></button><p>Opens your email app for review. Nothing is sent automatically.</p></div>
            {formMessage && <p aria-live="polite" className="home-contact-status" role={formMessage.startsWith('Please') ? 'alert' : 'status'}>{formMessage}</p>}
          </form>
        </div>
        <nav className="contact-links contact-links-inline" aria-label="Ways to contact Dami" data-scroll-reveal>
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
