import { createFileRoute } from '@tanstack/react-router'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/portfolio'
import { canonical, pageMeta } from '../data/seo'

export const Route = createFileRoute('/projects')({
  head: () => ({ meta: pageMeta('Projects | Dami', 'Selected full-stack projects by Dami, including APIs, web applications, and product interfaces.'), links: canonical('/projects') }),
  component: Projects,
})

function Projects() {
  return (
    <main className="frame" id="main">
      <header className="projects-intro">
        <p className="eyebrow">RECENT AND EARLIER WORK</p>
        <h1>Projects</h1>
        <p>Recent code and projects from my previous portfolio, from interfaces to APIs and data.</p>
      </header>
      <section aria-label="Projects" className="projects-list">
        <div className="project-grid" data-scroll-reveal>{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </section>
    </main>
  )
}
