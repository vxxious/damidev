import { Link } from '@tanstack/react-router'
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
        <Link activeProps={{ 'aria-current': 'page' }} to="/">Home</Link>
        <Link activeProps={{ 'aria-current': 'page' }} to="/projects">Projects</Link>
        <Link activeProps={{ 'aria-current': 'page' }} to="/articles">Articles</Link>
        <Link activeProps={{ 'aria-current': 'page' }} to="/about">About</Link>
        <Link activeProps={{ 'aria-current': 'page' }} to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
