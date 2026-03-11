import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 1, 0.23, 1] } },
};

export default function Products() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Validated Strain Portfolio</p>
          <h1 className="page-hero-title">Our Strains</h1>
          <p className="page-hero-desc">
            Each Ambeza strain is developed in-house, field-trialled in Indian pond conditions,
            and manufactured to guaranteed CFU counts with batch-level Certificates of Analysis.
          </p>
        </div>
      </section>

      <section className="section products" style={{ paddingTop: '3rem' }}>
        <div className="container">

          {/* AQUAKURE */}
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="product-row">
            <div className="product-row-img">
              <img src="/downloads/aquakure-label.png" alt="AQUAKURE product label" loading="lazy" />
            </div>
            <div className="product-row-body">
              <div className="product-header">
                <div>
                  <h3>AQUAKURE</h3>
                  <p className="product-tagline">Pond Microbiome Strain | Water Column Treatment</p>
                </div>
                <span className="product-badge">Pond Application</span>
              </div>
              <div className="product-specs">
                <div className="spec-row"><span>CFU Count</span><strong>25 Billion / 50 Billion per g</strong></div>
                <div className="spec-row"><span>Active Strain</span><strong>Bacillus subtilis / licheniformis</strong></div>
                <div className="spec-row"><span>Application</span><strong>Direct pond water dosing</strong></div>
                <div className="spec-row"><span>Pack Size</span><strong>1 kg · 5 kg · 25 kg</strong></div>
                <div className="spec-row"><span>Shelf Life</span><strong>24 months from manufacture date</strong></div>
                <div className="spec-row"><span>Storage</span><strong>Cool, dry, away from direct sunlight</strong></div>
              </div>
              <ul className="product-features">
                <li>Enzymatically degrades organic sludge — validated 90% ammonia reduction in trials</li>
                <li>Outcompetes Vibrio and Aeromonas via competitive exclusion at pond bottom</li>
                <li>Stabilises pond microbiome through the full grow-out cycle</li>
              </ul>
              <div className="product-actions">
                <a href="/downloads/aquakure-brochure.pdf" download className="btn btn-primary magnetic">Download Brochure</a>
                <a href="/downloads/aquakure-coa-50b.pdf" download className="link-arrow">CoA 50B ↓</a>
                <a href="/downloads/aquakure-coa-25b.pdf" download className="link-arrow">CoA 25B ↓</a>
              </div>
            </div>
          </motion.div>

          {/* GUTKURE */}
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="product-row">
            <div className="product-row-img">
              <img src="/downloads/gutkure-label.png" alt="GUTKURE product label" loading="lazy" />
            </div>
            <div className="product-row-body">
              <div className="product-header">
                <div>
                  <h3>GUTKURE</h3>
                  <p className="product-tagline">Gut Health Strain | Feed Supplementation</p>
                </div>
                <span className="product-badge gut-badge">Feed Application</span>
              </div>
              <div className="product-specs">
                <div className="spec-row"><span>CFU Count</span><strong>1 Billion per g (minimum guaranteed)</strong></div>
                <div className="spec-row"><span>Active Strain</span><strong>Multi-strain Bacillus complex</strong></div>
                <div className="spec-row"><span>Application</span><strong>Mixed into feed before feeding</strong></div>
                <div className="spec-row"><span>Pack Size</span><strong>1 kg · 5 kg</strong></div>
                <div className="spec-row"><span>Shelf Life</span><strong>18 months from manufacture date</strong></div>
                <div className="spec-row"><span>Storage</span><strong>Cool, dry — avoid high humidity</strong></div>
              </div>
              <ul className="product-features">
                <li>Multi-strain complex validated for gut colonisation and enzyme secretion</li>
                <li>Improves feed conversion ratio (FCR) — measurable within 2–3 weeks</li>
                <li>Builds pathogen resilience and reduces nursery-phase mortality</li>
              </ul>
              <div className="product-actions">
                <a href="/downloads/gutkure-brochure.pdf" download className="btn btn-primary magnetic">Download Brochure</a>
                <a href="/downloads/gutkure-label.png" download className="link-arrow">Label ↓</a>
              </div>
            </div>
          </motion.div>

          {/* COMING SOON placeholder */}
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="strain-coming-soon">
            <div className="coming-soon-inner">
              <span className="coming-soon-label">Coming Soon</span>
              <h3>More Strains in Pipeline</h3>
              <p>
                Three additional Bacillus strains are currently in pond-scale trial phase.
                Register your interest to receive priority access and trial data.
              </p>
              <a href="/#contact" className="btn btn-primary">Register Interest</a>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
