import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Blog from './pages/Blog.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle('lock-scroll', menuOpen);
    return () => document.body.classList.remove('lock-scroll');
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(top > 32);
      setShowTop(top > 500);
      setProgress(height > 0 ? (top / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isHome = location.pathname === '/';
  const active = (path) => location.pathname === path ? 'nav-active' : '';

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-shell">

          {/* Brand */}
          <Link to="/" className="brand" aria-label="Ambeza home">
            <span className="brand-icon" aria-hidden="true" />
            <span className="brand-text">
              <span className="brand-name">AMBEZA</span>
              <span className="brand-sub">Aquaculture Science</span>
            </span>
          </Link>

            {/* Desktop nav — pill group */}
          <nav className="nav-pill-group" aria-label="Main navigation">
            {isHome
              ? <a href="#pipeline" className="nav-link">R&amp;D Foundry</a>
              : <Link to="/" className={`nav-link ${active('/')}`}>R&amp;D Foundry</Link>}
            <Link to="/strains" className={`nav-link ${active('/strains')}`}>Strains</Link>
            <Link to="/blog" className={`nav-link ${active('/blog')}`}>Blog</Link>
            {isHome
              ? <a href="#contact" className="nav-link">Contact</a>
              : <Link to="/" className="nav-link">Contact</Link>}
          </nav>

          {/* Right side: CTA + hamburger always grouped together */}
          <div className="nav-end">
            <Link to="/strains" className="nav-cta btn btn-primary">Request Sample</Link>
            <button
              className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drop-down panel */}
      <div
        id="mobile-menu"
        className={`mobile-overlay ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        <nav className="mobile-nav" aria-label="Mobile navigation" onClick={(e) => e.stopPropagation()}>
          {isHome
            ? <a href="#pipeline" className="mobile-link" onClick={() => setMenuOpen(false)}><span className="ml-arrow">→</span>R&amp;D Foundry</a>
            : <Link to="/" className="mobile-link" onClick={() => setMenuOpen(false)}><span className="ml-arrow">→</span>R&amp;D Foundry</Link>}
          <Link to="/strains" className="mobile-link" onClick={() => setMenuOpen(false)}><span className="ml-arrow">→</span>Strains</Link>
          <Link to="/blog" className="mobile-link" onClick={() => setMenuOpen(false)}><span className="ml-arrow">→</span>Blog</Link>
          {isHome
            ? <a href="#contact" className="mobile-link" onClick={() => setMenuOpen(false)}><span className="ml-arrow">→</span>Contact</a>
            : <Link to="/" className="mobile-link" onClick={() => setMenuOpen(false)}><span className="ml-arrow">→</span>Contact</Link>}
          <Link to="/strains" className="btn btn-primary mobile-cta" onClick={() => setMenuOpen(false)}>Request Sample →</Link>
        </nav>
        <p className="mobile-tagline">India's Bacillus Research Foundry</p>
      </div>

      <div className="cert-strip" aria-label="Certifications and standards">
        <span>GMP Certified Facility</span>
        <span aria-hidden="true">·</span>
        <span>Bacillus-Based Formula</span>
        <span aria-hidden="true">·</span>
        <span>Certificate of Analysis Available</span>
        <span aria-hidden="true">·</span>
        <span>ISO-Aligned Quality Control</span>
        <span aria-hidden="true">·</span>
        <span>Field-Validated Protocols</span>
      </div>

      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/strains" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

      <button
        className={`back-top ${showTop ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Link to="/" className="brand" style={{ color: 'white', marginBottom: '0.75rem' }}>
              <span className="brand-icon" aria-hidden="true" />
              <span>AMBEZA</span>
            </Link>
            <p>India's Bacillus research foundry — isolating, validating, and commercialising probiotic strains for aquaculture. GMP certified. Field proven.</p>
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>info@ambeza.com · www.ambeza.com</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Strains</h4>
              <Link to="/strains">AQUAKURE</Link>
              <Link to="/strains">GUTKURE</Link>
            </div>
            <div className="footer-col">
              <h4>Science</h4>
              <a href="/#pipeline">R&amp;D Foundry</a>
              <a href="/#process">Mechanism of Action</a>
              <a href="/#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Downloads</h4>
              <a href="downloads/aquakure-brochure.pdf" download>AQUAKURE Brochure</a>
              <a href="downloads/gutkure-brochure.pdf" download>GUTKURE Brochure</a>
              <a href="downloads/aquakure-coa-50b.pdf" download>Certificate of Analysis</a>
            </div>
            <div className="footer-col">
              <h4>Content</h4>
              <Link to="/blog">Blog &amp; Articles</Link>
              <a href="/#resources">Documentation</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <span>© 2025 Ambeza. All rights reserved.</span>
            <span>GMP Certified · ISO-Aligned · Field Validated</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
