import { AsteriskIcon } from './SiteIcons'
import { ThemeToggle } from './ThemeToggle'

export function SiteHeader() {
  return (
    <header className="site-header graph-paper">
      <div className="header-top">
        <p className="header-identity"><AsteriskIcon />DAMI / FULL-STACK ENGINEER</p>
        <ThemeToggle />
      </div>
      <nav aria-label="Main navigation" className="main-nav">
        <a href="/#home">Home</a>
        <a href="/#projects">Projects</a>
        <a href="/#articles">Articles</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  )
}
