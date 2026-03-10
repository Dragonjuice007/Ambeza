import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 1, 0.23, 1] } },
};

const credentials = [
  { value: '10,000+', label: 'Farms Supported' },
  { value: '25+', label: 'Countries' },
  { value: '100%', label: 'Natural Inputs' },
];

const processSteps = [
  {
    num: '01',
    title: 'Spore Activation',
    desc: 'Dormant Bacillus spores activate within minutes of contact with pond water, independent of temperature range.',
    result: '< 30 min activation',
  },
  {
    num: '02',
    title: 'Pond Colonization',
    desc: 'Bacteria multiply rapidly and colonize the water column and pond bottom, competing against harmful pathogens for nutrients.',
    result: '24–48 hr colonization',
  },
  {
    num: '03',
    title: 'Waste Degradation',
    desc: 'Organic sludge, ammonia, and nitrites are enzymatically broken down, reducing toxic buildup and oxygen demand.',
    result: '90% ammonia reduction',
  },
  {
    num: '04',
    title: 'Stable Ecology',
    desc: 'A balanced microbial environment is maintained through the grow-out cycle, supporting consistent water quality and stock health.',
    result: '30% higher survival',
  },
];

const testimonials = [
  {
    quote: 'AQUAKURE improved our water consistency within one cycle. Mortality dropped significantly compared to previous batches.',
    name: 'Rahul M.',
    role: 'Shrimp Farmer, Andhra Pradesh',
  },
  {
    quote: 'GUTKURE helped feed conversion and survival in the nursery phase. We now use it as a standard input every batch.',
    name: 'Tran Le',
    role: 'Hatchery Operator, Vietnam',
  },
  {
    quote: 'The field support and protocol clarity from Ambeza made implementation straightforward. Results were measurable by week two.',
    name: 'Daniel Koh',
    role: 'Farm Manager, Singapore',
  },
];

const faqs = [
  {
    q: 'Can AQUAKURE and GUTKURE be used together?',
    a: 'Yes. AQUAKURE conditions pond ecology while GUTKURE supports gut health. Combined use is recommended in most farm programs.',
  },
  {
    q: 'How quickly can we expect changes in water quality?',
    a: 'Most farms observe visible water and sludge changes within 3–7 days depending on organic load and aeration capacity.',
  },
  {
    q: 'Are these products safe for shrimp and fish?',
    a: 'Both are Bacillus-based probiotic solutions specifically designed for aquaculture use at recommended dosages.',
  },
  {
    q: 'Can we apply during stress conditions?',
    a: 'Yes. Probiotics are most effective during stress windows to stabilize microbial balance and support animal resilience.',
  },
  {
    q: 'What documentation is available for procurement?',
    a: 'We provide Certificates of Analysis (25B and 50B), product labels, and brochures. All available for download in the Documentation section.',
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState('');
  const [activeMap, setActiveMap] = useState('asia');

  const heroRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

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

  const validate = () => {
    const next = {};
    if (!form.name.trim() || form.name.trim().length < 2) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) next.email = 'Please enter a valid email.';
    if (!/^\+?[\d\s-]{7,15}$/.test(form.phone)) next.phone = 'Please enter a valid phone number.';
    if (!form.message.trim() || form.message.trim().length < 10) next.message = 'Message must be at least 10 characters.';
    return next;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    setFormSuccess('');
    if (Object.keys(next).length === 0) {
      setFormSuccess('Received. Our technical team will contact you shortly.');
      setForm({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <>
      {/* Loader */}
      <div className="loader" aria-hidden={!loading} data-hidden={!loading}>
        <div className="loader-mark" />
        <p style={{ color: '#637585', fontSize: '0.875rem', textAlign: 'center' }}>AMBEZA</p>
      </div>

      {/* Scroll progress */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      {/* Header */}
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-shell">
          <a href="#home" className="brand" aria-label="Ambeza home">
            <span className="brand-icon" aria-hidden="true" />
            <span>AMBEZA</span>
          </a>

          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`hamburger ${menuOpen ? 'open' : ''}`} aria-hidden="true" />
          </button>

          <nav id="main-menu" className={`menu ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            <a href="#process" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
            <a href="#resources" onClick={() => setMenuOpen(false)}>Documentation</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Request Sample</a>
          </nav>
        </div>
      </header>

      {/* Cert strip */}
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

      <main>
        {/* ── HERO ── */}
        <section id="home" className="hero" ref={heroRef}>
          <div className="hero-bg" role="img" aria-label="Commercial aquaculture shrimp pond" />
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="show"
              className="hero-copy"
            >
              <p className="eyebrow light">Bacillus-Based Probiotic Manufacturer</p>
              <h1>
                Cleaner Ponds.<br />
                <span className="accent">Healthier Harvests.</span>
              </h1>
              <p>
                Industrial-grade Bacillus probiotics for commercial shrimp and fish aquaculture.
                GMP manufactured. Batch-tested. Proven across intensive grow-out cycles in Asia, India, and beyond.
              </p>
              <div className="hero-actions">
                <a href="#products" className="btn btn-primary magnetic">View Products</a>
                <a href="#contact" className="btn btn-outline magnetic">Request Sample</a>
              </div>
              <div className="hero-credentials" aria-label="Company credentials">
                {credentials.map((c) => (
                  <div key={c.label} className="hero-cred">
                    <strong>{c.value}</strong>
                    <span>{c.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FIELD STORY ── */}
        <section className="section field-story">
          <div className="container story-layout">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="story-media"
              role="img"
              aria-label="Ambeza field operations in commercial aquaculture ponds"
            />
            <motion.article
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="story-copy"
            >
              <p className="eyebrow">Field-Tested, Not Lab-Only</p>
              <h2>Built for Real Ponds, Real Constraints, Real Harvest Cycles</h2>
              <p>
                Ambeza protocols are designed around daily farm realities — variable dissolved oxygen,
                fluctuating salinity, and high organic load. Our formulations perform in the field,
                not just in controlled trial conditions.
              </p>
              <ul className="story-list">
                <li>Optimized for intensive and semi-intensive pond systems</li>
                <li>Compatible with existing pond management routines</li>
                <li>Focused on measurable outcomes: water parameters, FCR, survival rate</li>
              </ul>
            </motion.article>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">The Science</p>
              <h2>How It Works</h2>
              <p>
                Bacillus spores activate on contact with water, establishing a stable pond microbiome
                that suppresses harmful pathogens and accelerates organic waste breakdown.
              </p>
            </div>

            <div className="process-steps">
              {processSteps.map((step) => (
                <motion.div
                  key={step.num}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="process-step"
                >
                  <span className="step-num">{step.num}</span>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                    <span className="step-result">→ {step.result}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="process-results">
              <div className="process-result-item">
                <strong>5×</strong>
                <span>Faster Waste Breakdown</span>
              </div>
              <div className="process-result-item">
                <strong>90%</strong>
                <span>Ammonia Reduction</span>
              </div>
              <div className="process-result-item">
                <strong>30%</strong>
                <span>Higher Survival Rate</span>
              </div>
              <div className="process-result-item">
                <strong>3–7</strong>
                <span>Days to Visible Change</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section className="section products" id="products">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Product Range</p>
              <h2>Our Products</h2>
              <p>
                Two formulations. Distinct applications. Both manufactured to consistent CFU counts
                under controlled GMP production conditions with batch-level Certificates of Analysis.
              </p>
            </div>

            {/* AQUAKURE */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="product-row"
            >
              <div className="product-row-img">
                <img src="downloads/aquakure-label.jpg" alt="AQUAKURE product label" loading="lazy" />
              </div>
              <div className="product-row-body">
                <div className="product-header">
                  <div>
                    <h3>AQUAKURE</h3>
                    <p className="product-tagline">Pond Water Probiotic</p>
                  </div>
                  <span className="product-badge">Pond Application</span>
                </div>
                <div className="product-specs">
                  <div className="spec-row"><span>CFU Count</span><strong>25 Billion / 50 Billion per g</strong></div>
                  <div className="spec-row"><span>Active Strain</span><strong>Bacillus subtilis / licheniformis</strong></div>
                  <div className="spec-row"><span>Application Method</span><strong>Direct pond water dosing</strong></div>
                  <div className="spec-row"><span>Pack Size</span><strong>1 kg · 5 kg · 25 kg</strong></div>
                  <div className="spec-row"><span>Shelf Life</span><strong>24 months from manufacture date</strong></div>
                  <div className="spec-row"><span>Storage</span><strong>Cool, dry, away from direct sunlight</strong></div>
                </div>
                <ul className="product-features">
                  <li>Rapidly degrades organic sludge and pond bottom waste</li>
                  <li>Reduces ammonia and nitrite to safe production levels</li>
                  <li>Stabilizes beneficial microbial ecology through grow-out</li>
                </ul>
                <div className="product-actions">
                  <a href="downloads/aquakure-brochure.pdf" download className="btn btn-primary magnetic">Download Brochure</a>
                  <a href="downloads/aquakure-coa-50b.pdf" download className="link-arrow">CoA 50B ↓</a>
                  <a href="downloads/aquakure-coa-25b.pdf" download className="link-arrow">CoA 25B ↓</a>
                </div>
              </div>
            </motion.div>

            {/* GUTKURE */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="product-row"
            >
              <div className="product-row-img">
                <img src="downloads/gutkure-label.jpg" alt="GUTKURE product label" loading="lazy" />
              </div>
              <div className="product-row-body">
                <div className="product-header">
                  <div>
                    <h3>GUTKURE</h3>
                    <p className="product-tagline">Feed Probiotic</p>
                  </div>
                  <span className="product-badge gut-badge">Feed Application</span>
                </div>
                <div className="product-specs">
                  <div className="spec-row"><span>CFU Count</span><strong>1 Billion per g (minimum guaranteed)</strong></div>
                  <div className="spec-row"><span>Active Strain</span><strong>Multi-strain Bacillus complex</strong></div>
                  <div className="spec-row"><span>Application Method</span><strong>Mixed into feed before feeding</strong></div>
                  <div className="spec-row"><span>Pack Size</span><strong>1 kg · 5 kg</strong></div>
                  <div className="spec-row"><span>Shelf Life</span><strong>18 months from manufacture date</strong></div>
                  <div className="spec-row"><span>Storage</span><strong>Cool, dry — avoid high humidity</strong></div>
                </div>
                <ul className="product-features">
                  <li>Supports gut microbiome balance and nutrient absorption</li>
                  <li>Improves feed conversion ratio (FCR) across grow-out phases</li>
                  <li>Builds stress resilience and reduces nursery mortality</li>
                </ul>
                <div className="product-actions">
                  <a href="downloads/gutkure-brochure.pdf" download className="btn btn-primary magnetic">Download Brochure</a>
                  <a href="downloads/gutkure-label.jpg" download className="link-arrow">Label ↓</a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="section testimonials" id="about">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">From the Field</p>
              <h2>What Farm Operators Say</h2>
              <p>Direct feedback from commercial production cycles across Asia.</p>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((t) => (
                <motion.article
                  key={t.name}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="testimonial-card"
                >
                  <p className="testimonial-quote">"{t.quote}"</p>
                  <footer className="testimonial-author">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </footer>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── DOCUMENTATION ── */}
        <section className="section resources" id="resources">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Downloads</p>
              <h2>Technical Documentation</h2>
              <p>
                Product brochures, Certificates of Analysis, and label files for farm teams,
                hatcheries, and procurement departments.
              </p>
            </div>
            <div className="doc-grid">
              <motion.article variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="doc-card">
                <h3>AQUAKURE Brochure</h3>
                <p>Application protocol, dosage framework, and documented field outcomes for pond water treatment.</p>
                <a href="downloads/aquakure-brochure.pdf" download className="btn btn-primary">Download PDF</a>
              </motion.article>
              <motion.article variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="doc-card">
                <h3>GUTKURE Brochure</h3>
                <p>Digestive protocol guidance for nursery phase, grow-out, and stress management applications.</p>
                <a href="downloads/gutkure-brochure.pdf" download className="btn btn-primary">Download PDF</a>
              </motion.article>
              <motion.article variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="doc-card">
                <h3>Certificates &amp; Labels</h3>
                <p>Batch-level CoA documents and official product labels for compliance and procurement use.</p>
                <ul>
                  <li><a href="downloads/aquakure-coa-25b.pdf" download>AQUAKURE CoA — 25 Billion CFU/g</a></li>
                  <li><a href="downloads/aquakure-coa-50b.pdf" download>AQUAKURE CoA — 50 Billion CFU/g</a></li>
                  <li><a href="downloads/aquakure-label.jpg" download>AQUAKURE Product Label</a></li>
                  <li><a href="downloads/gutkure-label.jpg" download>GUTKURE Product Label</a></li>
                </ul>
              </motion.article>
            </div>
          </div>
        </section>

        {/* ── MAP ── */}
        <section className="section map-section">
          <div className="container">
            <div className="section-head center">
              <p className="eyebrow">Coverage</p>
              <h2>Global Farm Footprint</h2>
              <p>Regions where Ambeza protocols are in active commercial use.</p>
            </div>
            <div className="map-grid">
              <div className="map-panel" role="img" aria-label="Regional usage map">
                <svg viewBox="0 0 800 380" aria-hidden="true">
                  <path d="M52 175h140l35-42h110l68 20 76-31 120 12 86 46-24 52-108 28-140-8-95 26-70-16-69-7-82-32Z" fill="#EEF2EE" stroke="#1A8C7A" strokeWidth="2" />
                  <circle className={`pin ${activeMap === 'asia'  ? 'active' : ''}`} cx="520" cy="178" r="8" />
                  <circle className={`pin ${activeMap === 'india' ? 'active' : ''}`} cx="468" cy="210" r="8" />
                  <circle className={`pin ${activeMap === 'latam' ? 'active' : ''}`} cx="244" cy="258" r="8" />
                  <circle className={`pin ${activeMap === 'mena'  ? 'active' : ''}`} cx="410" cy="172" r="8" />
                </svg>
              </div>
              <div className="map-list" role="list" aria-label="Region details">
                {[
                  ['asia',  'Southeast Asia',  'Shrimp grow-out + hatchery programs'],
                  ['india', 'India',           'Intensive pond remediation protocols'],
                  ['mena',  'MENA',            'Salinity-variant deployment support'],
                  ['latam', 'Latin America',   'Biosecurity-centered farm upgrades'],
                ].map(([id, title, text]) => (
                  <button
                    key={id}
                    className={activeMap === id ? 'active' : ''}
                    onMouseEnter={() => setActiveMap(id)}
                    onFocus={() => setActiveMap(id)}
                    onClick={() => setActiveMap(id)}
                  >
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section faq" aria-label="Frequently asked questions">
          <div className="container">
            <div className="section-head center">
              <p className="eyebrow">FAQ</p>
              <h2>Common Questions</h2>
            </div>
            <div className="faq-list" style={{ maxWidth: '840px', marginInline: 'auto' }}>
              {faqs.map((item, i) => (
                <article key={item.q} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button
                    className="faq-toggle"
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span>{item.q}</span>
                    <span aria-hidden="true">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  <div id={`faq-panel-${i}`} className="faq-panel">
                    <p>{item.a}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="section contact" id="contact">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Get in Touch</p>
              <h2>Contact Ambeza</h2>
              <p>Share your farm details and our technical team will recommend a probiotic protocol for your operation.</p>
            </div>
            <div className="contact-grid">
              <form className="contact-form" onSubmit={submitForm} noValidate>
                <label>
                  Full Name
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                  <small>{errors.name}</small>
                </label>
                <label>
                  Email Address
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
                  <small>{errors.email}</small>
                </label>
                <label>
                  Phone / WhatsApp
                  <input type="text" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+65 1234 5678" />
                  <small>{errors.phone}</small>
                </label>
                <label>
                  Farm Details / Message
                  <textarea rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Species, pond size, current issues..." />
                  <small>{errors.message}</small>
                </label>
                <button className="btn btn-primary magnetic" type="submit">Send Inquiry</button>
                <p className="ok-msg">{formSuccess}</p>
              </form>

              <aside className="contact-card">
                <h3>Regional Office</h3>
                <div className="contact-detail">
                  <span>Address</span>
                  <span>123 Marina Innovation Park, Singapore 018989</span>
                </div>
                <div className="contact-detail">
                  <span>Email</span>
                  <span>info@ambeza.com</span>
                </div>
                <div className="contact-detail">
                  <span>Phone / WhatsApp</span>
                  <span>+65 1234 5678</span>
                </div>
                <div className="contact-detail">
                  <span>Business Hours</span>
                  <span>Mon – Fri, 9:00 AM – 6:00 PM SGT</span>
                </div>
                <div className="download-links">
                  <a href="downloads/aquakure-brochure.pdf" download>↓ AQUAKURE Brochure (PDF)</a>
                  <a href="downloads/gutkure-brochure.pdf" download>↓ GUTKURE Brochure (PDF)</a>
                  <a href="downloads/aquakure-coa-50b.pdf" download>↓ Certificate of Analysis</a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* Back to top */}
      <button
        className={`back-top ${showTop ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <a href="#home" className="brand" style={{ color: 'white', marginBottom: '0.75rem' }}>
              <span className="brand-icon" aria-hidden="true" />
              <span>AMBEZA</span>
            </a>
            <p>Industrial-grade Bacillus probiotic manufacturer for commercial aquaculture. GMP certified. Field validated.</p>
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>info@ambeza.com · www.ambeza.com</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Products</h4>
              <a href="#products">AQUAKURE</a>
              <a href="#products">GUTKURE</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#process">How It Works</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Downloads</h4>
              <a href="downloads/aquakure-brochure.pdf" download>AQUAKURE Brochure</a>
              <a href="downloads/gutkure-brochure.pdf" download>GUTKURE Brochure</a>
              <a href="downloads/aquakure-coa-50b.pdf" download>Certificate of Analysis</a>
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
