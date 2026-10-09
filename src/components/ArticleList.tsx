import type { Article } from '../data/portfolio'
import { ArrowIcon } from './SiteIcons'

export function ArticleList({ items }: { items: Article[] }) {
  return (
    <div className="article-list" data-scroll-reveal>
      {items.map((article) => (
        <a className="article-row" href={article.href} key={article.href} rel="noopener noreferrer" target="_blank">
          <span className="article-meta"><span>{article.topic}</span><time dateTime={article.date}>{article.displayDate}</time></span>
          <span className="article-title">{article.title}</span>
          <ArrowIcon className="article-arrow" />
        </a>
      ))}
    </div>
  )
}
