import type { Project } from '../data/portfolio'
import { ArrowIcon } from './SiteIcons'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-card-body">
        <span className="project-card-number">{String(index + 1).padStart(2, '0')}</span>
        <p className="project-card-category">{project.discipline}</p>
        <h2>{project.title}</h2>
        <p className="project-card-summary">{project.summary}</p>
        <p className="project-card-scope"><strong>My scope</strong> {project.scope}</p>
        <ul className="project-card-stack" aria-label={`${project.title} technologies`}>
          {project.stack.slice(0, 3).map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
      <div className="project-card-footer">
        {project.links.map((link, linkIndex) => (
          <a
            aria-label={`${project.title}: ${link.label}`}
            className={`project-card-action${linkIndex === 0 ? ' project-card-action-primary' : ''}`}
            href={link.href}
            key={link.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.label}<ArrowIcon />
          </a>
        ))}
      </div>
    </article>
  )
}
