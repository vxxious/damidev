export function SiteFooter() {
  return (
    <footer className="site-footer frame">
      <div className="footer-bottom">
        <div className="footer-signoff">
          <img alt="Dami’s signature" className="footer-signature" decoding="async" height="169" loading="lazy" src="/dami-signature.png" width="499" />
          <span>Full-Stack Engineer</span>
        </div>
        <span>Copyright {new Date().getFullYear()} Dami</span>
      </div>
    </footer>
  )
}
