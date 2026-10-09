import { createFileRoute } from '@tanstack/react-router'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/portfolio'
import { canonical, pageMeta } from '../data/seo'

export const Route = createFileRoute('/projects')({
  head: () => ({ meta: pageMeta('Projects | Dami', 'Selected live projects by Dami, from product interfaces to animated websites.'), links: canonical('/projects') }),
  component: Projects,
})

function Projects() {
  return (
    <main className="frame" id="main">
      <header className="projects-intro">
        <p className="eyebrow">SELECTED LIVE WORK</p>
        <h1>Projects</h1>
        <p>Live projects spanning product interfaces, web applications, and motion-led websites.</p>
      </header>
      <section aria-label="Projects" className="projects-list">
        <div className="project-grid" data-scroll-reveal>{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </section>
    </main>
  )
}
