import { createFileRoute, Link } from '@tanstack/react-router'
import { SkillCloud } from '../components/SkillCloud'
import { ArrowIcon } from '../components/SiteIcons'
import { experience } from '../data/portfolio'
import { canonical, pageMeta } from '../data/seo'

export const Route = createFileRoute('/about')({
  head: () => ({ meta: pageMeta('About | Dami', 'About Dami, a full-stack developer working across React, Next.js, Node.js, and data-backed applications.'), links: canonical('/about') }),
  component: About,
})

function About() {
  return (
    <main className="frame" id="main">
      <header className="page-intro graph-paper page-intro-grid about-intro">
        <div className="about-intro-copy">
          <p className="eyebrow">03 / ABOUT</p>
          <h1>I care about <em>how it works.</em></h1>
          <p>I’m Dami, a full-stack developer working across application interfaces, backend services, and the data between them.</p>
        </div>
      </header>
      <section className="about-columns section-space" data-scroll-reveal><p className="eyebrow">PRACTICE</p><div><h2>From the first screen to the last API call.</h2><p>My recent public work includes Next.js applications, NestJS and Express services, document processing, authentication flows, and PostgreSQL and MongoDB data layers. I focus on making the system coherent, not just making one layer look finished.</p><Link className="text-link" to="/projects">See projects <ArrowIcon /></Link></div></section>
      <section aria-labelledby="skills-title" className="skills-section section-space">
        <div className="skills-heading">
          <h2 id="skills-title" className="section-title">Skills &amp; tools.</h2>
          <p>Technologies visible across my public projects and repositories.</p>
        </div>
        <SkillCloud />
      </section>
      <section aria-labelledby="experience-title" className="experience-section section-space"><div className="section-heading"><p className="eyebrow">EXPERIENCE</p></div><h2 id="experience-title" className="section-title">Where I’ve <em>worked.</em></h2><div className="experience-list" data-scroll-reveal>{experience.map((role, index) => <div className="experience-row" key={role.company}><span className="eyebrow">0{index + 1}</span><div><h3>{role.company}</h3><p>{role.title}</p><p className="experience-description">{role.description}</p></div><span>{role.period}</span></div>)}</div></section>
    </main>
  )
}
