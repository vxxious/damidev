import { createFileRoute } from '@tanstack/react-router'
import { ArticleList } from '../components/ArticleList'
import { articles } from '../data/portfolio'
import { canonical, pageMeta } from '../data/seo'

export const Route = createFileRoute('/articles')({
  head: () => ({
    meta: pageMeta('Articles | Dami', 'Technical articles by Dami on NestJS, React, APIs, data, and deployment.'),
    links: canonical('/articles'),
  }),
  component: Articles,
})

function Articles() {
  return (
    <main className="frame" id="main">
      <header className="page-intro graph-paper page-intro-grid">
        <p className="eyebrow">02 / ARTICLES</p>
        <h1>Notes from the work.</h1>
        <p>Five published pieces on the details behind web applications, from React interfaces to NestJS services and deployment.</p>
      </header>
      <section aria-label="Published articles" className="articles-page-list section-space">
        <ArticleList items={articles} />
      </section>
    </main>
  )
}
