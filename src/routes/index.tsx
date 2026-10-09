import { useState, type FormEvent } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { canonical } from '../data/seo'
import { ArrowIcon, AsteriskIcon } from '../components/SiteIcons'

export const Route = createFileRoute('/')({ head: () => ({ links: canonical('/') }), component: Home })

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
      <section aria-labelledby="home-heading" className="hero">
        <div className="hero-inner frame">
          <div className="hero-copy">
            <h1 id="home-heading">Hi, I’m Dami.</h1>
            <p className="hero-description">I build web applications from the interface to the API and data layer, making the parts work together.</p>
            <p className="hero-bio">I’m a full-stack engineer who builds and refines interfaces with React and TypeScript. I work with Node.js and PostgreSQL behind them, connecting the UI, API, and data in one product.</p>
            <div className="hero-actions">
              <Link className="hero-action hero-action-primary" to="/projects">Explore projects <ArrowIcon /></Link>
              <a className="hero-action" href="#contact-form">Get in touch <ArrowIcon /></a>
            </div>
          </div>
          <figure className="hero-portrait">
            <img alt="Portrait of Dami" decoding="async" fetchPriority="high" height="512" src="/dami-portrait.jpg" width="512" />
            <figcaption>
              <dl className="hero-portrait-meta">
                <div><dt>Role</dt><dd>Full-Stack Engineer</dd></div>
                <div><dt>Location</dt><dd>County Dublin, Ireland</dd></div>
                <div><dt>Availability</dt><dd>Open to work</dd></div>
              </dl>
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="home-contact-heading" className="home-contact frame section-space" id="contact-form">
        <div className="home-contact-intro">
          <AsteriskIcon />
          <h2 id="home-contact-heading">Get in touch.</h2>
          <p>Have a project, a role, or a question about the work? Send me a note.</p>
          <a className="home-contact-email" href="mailto:damiiyi@gmail.com">damiiyi@gmail.com <ArrowIcon /></a>
        </div>

        <form action="mailto:damiiyi@gmail.com" className="home-contact-form" encType="text/plain" method="post" onSubmit={openEmailDraft}>
          <div className="home-contact-fields">
            <label htmlFor="contact-name">Your name
              <input autoComplete="name" id="contact-name" maxLength={80} name="name" placeholder="Your name" required type="text" />
            </label>
            <label htmlFor="contact-email">Your email
              <input autoComplete="email" id="contact-email" maxLength={254} name="email" placeholder="you@example.com" required type="email" />
            </label>
            <label className="home-contact-message" htmlFor="contact-message">Your message
              <textarea id="contact-message" maxLength={2000} name="message" placeholder="Tell me a little about it…" required rows={4} />
            </label>
          </div>
          <div className="home-contact-submit-row">
            <button className="home-contact-submit" type="submit">Open email draft <ArrowIcon /></button>
            <p>Opens your email app for review. Nothing is sent automatically.</p>
          </div>
          {formMessage && <p aria-live="polite" className="home-contact-status" role={formMessage.startsWith('Please') ? 'alert' : 'status'}>{formMessage}</p>}
        </form>
      </section>
    </main>
  )
}
