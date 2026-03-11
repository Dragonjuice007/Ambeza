import { useState } from 'react';
import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 1, 0.23, 1] } },
};

const articles = [
  {
    slug: 'bacillus-subtilis-ammonia-control',
    image: '/images/blog-ammonia.png',
    category: 'Research',
    date: 'February 2025',
    readTime: '6 min read',
    title: 'How Bacillus subtilis Controls Ammonia in Intensive Shrimp Ponds',
    excerpt: 'Ammonia toxicity is the leading cause of mass mortality events in intensive grow-out. This article examines the enzymatic pathways by which Bacillus subtilis degrades ammonia precursors and how strain selection determines efficacy at tropical pond temperatures.',
    tags: ['Bacillus subtilis', 'Ammonia', 'Water Quality'],
  },
  {
    slug: 'competitive-exclusion-vibrio',
    image: '/images/blog-vibrio.png',
    category: 'Science',
    date: 'January 2025',
    readTime: '8 min read',
    title: 'Competitive Exclusion: The Mechanism Behind Probiotic Pathogen Control',
    excerpt: 'Vibrio harveyi and Vibrio parahaemolyticus cause significant losses in shrimp aquaculture globally. We explore how high-density Bacillus inoculation exploits competitive exclusion to displace Vibrio from colonisation sites in the pond water column and biofloc.',
    tags: ['Vibrio', 'Competitive Exclusion', 'Biosecurity'],
  },
  {
    slug: 'probiotic-fcr-improvement',
    image: '/images/blog-fcr.png',
    category: 'Field Data',
    date: 'December 2024',
    readTime: '5 min read',
    title: 'Feed Conversion Ratio Improvement with Gut Probiotic Supplementation: Field Data from Andhra Pradesh',
    excerpt: 'A 16-week trial across three semi-intensive shrimp farms in Andhra Pradesh recorded a 0.18 average FCR improvement in ponds supplemented with multi-strain Bacillus feed additives, compared to untreated controls. Raw data and methodology presented.',
    tags: ['FCR', 'Field Trial', 'India', 'GUTKURE'],
  },
  {
    slug: 'spore-forming-bacteria-pond-stability',
    image: '/images/blog-spore.png',
    category: 'Science',
    date: 'November 2024',
    readTime: '7 min read',
    title: 'Why Spore-Forming Bacteria Outperform Liquid Probiotics in Aquaculture',
    excerpt: 'Spore formation is not merely a survival mechanism — it is a delivery advantage. Bacillus endospores survive feed pelleting, UV exposure, and pH extremes that destroy vegetative cell probiotics before they reach the pond. We examine the biology and its commercial implications.',
    tags: ['Spore Biology', 'Stability', 'Formulation'],
  },
  {
    slug: 'biofloc-bacillus-integration',
    image: '/images/blog-biofloc.png',
    category: 'Application',
    date: 'October 2024',
    readTime: '9 min read',
    title: 'Integrating Bacillus Probiotics into Biofloc Systems: Protocol and Observations',
    excerpt: 'Biofloc technology creates a unique microbial environment that interacts with introduced Bacillus strains differently than conventional pond water. This guide covers dosage timing, inoculation density, and the observed microbiome stabilisation patterns across six biofloc trial ponds.',
    tags: ['Biofloc', 'Protocol', 'Application Guide'],
  },
  {
    slug: 'indian-aquaculture-probiotic-standards',
    image: '/images/blog-regulation.png',
    category: 'Industry',
    date: 'September 2024',
    readTime: '4 min read',
    title: 'Regulatory Landscape for Aquaculture Probiotics in India: What Manufacturers Must Know',
    excerpt: 'India\'s aquaculture probiotic market is subject to evolving FSSAI and MPEDA guidelines. This overview covers current registration requirements, CFU labelling obligations, and the documentation standards expected by export-market certification bodies.',
    tags: ['Regulation', 'India', 'Compliance', 'FSSAI'],
  },
];

const categories = ['All', 'Research', 'Science', 'Field Data', 'Application', 'Industry'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === 'All' || a.category === activeCategory;
    const matchSearch = !search || a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Science &amp; Insights</p>
          <h1 className="page-hero-title">Blog &amp; Articles</h1>
          <p className="page-hero-desc">
            Research notes, field data, and applied science from Ambeza's R&amp;D team —
            covering Bacillus biology, aquaculture microbiology, and validated field outcomes.
          </p>
        </div>
      </section>

      <section className="section blog-section">
        <div className="container">

          {/* Filters */}
          <div className="blog-filters">
            <div className="blog-categories">
              {categories.map((c) => (
                <button key={c} className={`blog-cat-btn ${activeCategory === c ? 'active' : ''}`}
                  onClick={() => setActiveCategory(c)}>{c}</button>
              ))}
            </div>
            <div className="blog-search">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <circle cx="7" cy="7" r="5" />
                <line x1="11" y1="11" x2="14" y2="14" />
              </svg>
              <input type="search" placeholder="Search articles…" value={search}
                onChange={(e) => setSearch(e.target.value)} aria-label="Search articles" />
            </div>
          </div>

          {/* Article Grid */}
          {filtered.length === 0 ? (
            <p style={{ color: 'var(--text-4)', textAlign: 'center', padding: '4rem 0' }}>No articles found.</p>
          ) : (
            <div className="blog-grid">
              {filtered.map((a, i) => (
                <motion.article key={a.slug} variants={reveal} initial="hidden" whileInView="show"
                  viewport={{ once: true, amount: 0.1 }} transition={{ delay: (i % 3) * 0.07 }}
                  className="blog-card">
                  <img src={a.image} alt={a.title} className="blog-card-img" loading="lazy" />
                  <div className="blog-card-top">
                    <span className="blog-category">{a.category}</span>
                    <span className="blog-meta">{a.date} · {a.readTime}</span>
                  </div>
                  <h2 className="blog-card-title">{a.title}</h2>
                  <p className="blog-card-excerpt">{a.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="blog-tags">
                      {a.tags.map((t) => <span key={t} className="blog-tag">{t}</span>)}
                    </div>
                    <a href="#" className="link-arrow" onClick={(e) => e.preventDefault()} aria-label={`Read ${a.title}`}>
                      Read article →
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* Newsletter CTA */}
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="blog-newsletter">
            <div className="blog-newsletter-copy">
              <h3>Research Updates in Your Inbox</h3>
              <p>New field data, strain development notes, and aquaculture science — delivered monthly.</p>
            </div>
            <form className="blog-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" aria-label="Email for newsletter" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </motion.div>

        </div>
      </section>
    </>
  );
}
