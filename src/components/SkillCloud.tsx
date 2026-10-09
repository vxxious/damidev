import {
  SiDocker,
  SiExpo,
  SiExpress,
  SiFlydotio,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

const skills = [
  { name: 'React', kind: 'library', icon: SiReact, color: '#149eca' },
  { name: 'PostgreSQL', kind: 'database', icon: SiPostgresql, color: '#4169e1' },
  { name: 'GitHub', kind: 'tool', icon: SiGithub, color: 'var(--ink)' },
  { name: 'Next.js', kind: 'framework', icon: SiNextdotjs, color: 'var(--ink)' },
  { name: 'Supabase', kind: 'platform', icon: SiSupabase, color: '#2baf78' },
  { name: 'TypeScript', kind: 'language', icon: SiTypescript, color: '#3178c6' },
  { name: 'Docker', kind: 'tool', icon: SiDocker, color: '#2496ed' },
  { name: 'NestJS', kind: 'framework', icon: SiNestjs, color: '#e0234e' },
  { name: 'Tailwind CSS', kind: 'styling', icon: SiTailwindcss, color: '#0891b2' },
  { name: 'MongoDB', kind: 'database', icon: SiMongodb, color: '#47a248' },
  { name: 'Git', kind: 'tool', icon: SiGit, color: '#f05032' },
  { name: 'Express', kind: 'framework', icon: SiExpress, color: 'var(--ink)' },
  { name: 'Prisma', kind: 'ORM', icon: SiPrisma, color: 'var(--ink)' },
  { name: 'Node.js', kind: 'runtime', icon: SiNodedotjs, color: '#5fa04e' },
  { name: 'JavaScript', kind: 'language', icon: SiJavascript, color: '#a37f00' },
  { name: 'Redux Toolkit', kind: 'state', icon: SiRedux, color: '#764abc' },
  { name: 'Expo', kind: 'framework', icon: SiExpo, color: 'var(--ink)' },
  { name: 'Fly.io', kind: 'deployment', icon: SiFlydotio, color: '#6b5ac7' },
]

export function SkillCloud() {
  return (
    <ul className="skill-cloud graph-paper" data-scroll-reveal>
      {skills.map(({ name, kind, icon: Icon, color }) => (
        <li className="skill-item" key={name}>
          <div className="skill-mark">
            <Icon aria-hidden="true" className="skill-icon" style={{ color }} />
            <span>{name}</span>
          </div>
          <span className="skill-kind">{kind}</span>
        </li>
      ))}
    </ul>
  )
}
