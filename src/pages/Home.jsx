import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 1, 0.23, 1] } },
};

const trustPillars = [
  { value: '50+',       label: 'Farms Validated',         sub: 'India & Southeast Asia' },
  { value: '100%',      label: 'Native Indian Strains',   sub: 'isolated from local wetlands' },
  { value: 'GMP',       label: 'Certified Facility',      sub: 'batch CoA on every lot' },
  { value: 'Full',      label: 'Genome Sequenced',        sub: 'every commercial strain' },
];

const howItWorks = [
  {
    step: '01',
    title: 'Apply to Pond or Feed',
    desc: 'Dissolve AQUAKURE directly in pond water or mix GUTKURE into feed. Spores activate on contact within 30 minutes.',
    img: '/images/apply-product.png',
  },
  {
    step: '02',
    title: 'Colonises the System',
    desc: 'Bacillus outcompetes Vibrio and harmful bacteria for nutrients and attachment sites across the water column and pond bottom.',
    img: '/images/blog-spore.png',
  },
  {
    step: '03',
    title: 'Measurable Results',
    desc: 'Water clarity improves. Ammonia drops. FCR improves. Survival rates go up — visible within 3–7 days.',
    img: '/images/shrimp-healthy.png',
  },
];

const testimonials = [
  { quote: 'AQUAKURE improved our water consistency within one cycle. Mortality dropped significantly compared to previous batches.', name: 'Rahul M.', role: 'Shrimp Farmer, Andhra Pradesh' },
  { quote: 'GUTKURE helped feed conversion and survival in the nursery phase. We now use it as a standard input every batch.', name: 'Tran Le', role: 'Hatchery Operator, Vietnam' },
  { quote: 'Results were measurable by week two. The protocol guidance from Ambeza made implementation straightforward.', name: 'Daniel Koh', role: 'Farm Manager, Singapore' },
];

const protocols = [
  {
    product: 'AQUAKURE', tag: 'Pond Application', color: 'aquakure',
    rows: [
      ['Application', 'Dissolve in pond water, broadcast evenly'],
      ['Dose', '500g per acre per application'],
      ['Frequency', 'Bi-weekly or after rain / water exchange'],
      ['Onset', 'Visible water clarity change in 3–7 days'],
      ['CFU Guarantee', '25B or 50B CFU/g — batch CoA issued'],
      ['Shelf Life', '24 months (spore-form stable)'],
      ['Pack Sizes', '1 kg · 5 kg · 25 kg bags'],
    ],
  },
  {
    product: 'GUTKURE', tag: 'Feed Supplement', color: 'gutkure',
    rows: [
      ['Application', 'Mix directly into feed before each feeding'],
      ['Dose', '2g per kg of feed'],
      ['Frequency', 'Every feeding session throughout grow-out'],
      ['Onset', 'FCR improvement measurable from week 2–3'],
      ['CFU Guarantee', '1B min. CFU/g guaranteed per lot'],
      ['Shelf Life', '18 months'],
      ['Pack Sizes', '500g · 2 kg · 10 kg bags'],
    ],
  },
];

const faqs = [
  { q: 'Can AQUAKURE and GUTKURE be used together?', a: 'Yes — and it\'s recommended. AQUAKURE conditions pond ecology while GUTKURE supports gut health from inside. Combined use shows the strongest FCR and survival outcomes across our field trials.' },
  { q: 'How quickly can we expect results in the pond?', a: 'Most farms see visible water clarity and sludge reduction within 3–7 days. Ammonia-N reductions are measurable on water tests from day 5 onwards. FCR improvement with GUTKURE typically shows from week 2–3.' },
  { q: 'What documentation is available for procurement or regulatory review?', a: 'We supply batch-specific Certificates of Analysis (25B and 50B grades), product labels, SDS sheets, and field trial methodology. Download from the Strains page or contact us directly.' },
  { q: 'How do I store these products and what is the shelf life?', a: 'Store below 30°C in a cool, dry location away from direct sunlight. AQUAKURE: 24-month shelf life. GUTKURE: 18-month shelf life. Bacillus endospore form ensures stability under standard farm storage.' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState('');

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
      {/* HERO — split light layout */}
      <section id="home" className="hero-light">
        <div className="container hero-split">
          <motion.div variants={reveal} initial="hidden" animate="show" className="hero-copy-light">
            <div className="hero-trust-badges">
              <span>GMP Certified</span>
              <span>ISO-Aligned</span>
              <span>Field Validated</span>
            </div>
            <h1>Healthier Ponds.<br /><span className="hero-accent">Higher Yields.</span></h1>
            <p className="hero-sub">
              India's most rigorously validated Bacillus probiotics — engineered for intensive shrimp and fish aquaculture. Trusted by farmers across Asia.
            </p>
            <div className="hero-actions-light">
              <a href="#contact" className="btn btn-primary">Request Sample →</a>
              <Link to="/strains" className="btn btn-outline-dark">View Strains</Link>
            </div>
            <div className="hero-certs">
              <span>✓ Batch CoA available</span>
              <span>✓ 24-month shelf life</span>
              <span>✓ Guaranteed CFU count</span>
            </div>
          </motion.div>
          <motion.div variants={reveal} initial="hidden" animate="show" transition={{ delay: 0.15 }} className="hero-img-wrap">
            <img
              src="/images/field-story.png"
              alt="Indian farmer with healthy shrimp harvest"
              className="hero-product-img"
            />
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="proof-bar">
        <div className="container proof-bar-inner">
          {trustPillars.map((s) => (
            <div key={s.label} className="proof-item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
              <small>{s.sub}</small>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="section products-home" id="strains">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Validated Strain Portfolio</p>
            <h2>Two Products. Every Stage of Growth.</h2>
            <p>Developed in-house, field-trialled in Indian pond conditions, manufactured to guaranteed CFU counts with batch-level Certificates of Analysis.</p>
          </div>
          <div className="products-home-grid">
            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="product-home-card">
              <div className="phc-img-wrap">
                <img src="/downloads/aquakure-label.png" alt="AQUAKURE probiotic" loading="lazy" />
                <span className="phc-badge">Pond Application</span>
              </div>
              <div className="phc-body">
                <h3>AQUAKURE</h3>
                <p className="phc-tagline">Pond Microbiome Probiotic</p>
                <p className="phc-desc">Enzymatic degradation of organic sludge, ammonia control, and Vibrio suppression through competitive exclusion — across the full grow-out cycle.</p>
                <div className="phc-specs">
                  <span><strong>25B / 50B</strong> CFU/g</span>
                  <span><strong>Bacillus subtilis</strong> / licheniformis</span>
                  <span><strong>24-month</strong> shelf life</span>
                </div>
                <div className="phc-actions">
                  <a href="#contact" className="btn btn-primary">Request Sample</a>
                  <a href="/downloads/aquakure-brochure.pdf" download className="link-arrow">Brochure ↓</a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.1 }} className="product-home-card">
              <div className="phc-img-wrap">
                <img src="/downloads/gutkure-label.png" alt="GUTKURE probiotic" loading="lazy" />
                <span className="phc-badge gut-badge">Feed Application</span>
              </div>
              <div className="phc-body">
                <h3>GUTKURE</h3>
                <p className="phc-tagline">Gut Health Feed Supplement</p>
                <p className="phc-desc">Multi-strain Bacillus complex improving FCR, gut colonisation, and nursery-phase survival. Mixed directly into feed before each feeding.</p>
                <div className="phc-specs">
                  <span><strong>1B min.</strong> CFU/g guaranteed</span>
                  <span><strong>Multi-strain</strong> Bacillus complex</span>
                  <span><strong>18-month</strong> shelf life</span>
                </div>
                <div className="phc-actions">
                  <a href="#contact" className="btn btn-primary">Request Sample</a>
                  <a href="/downloads/gutkure-brochure.pdf" download className="link-arrow">Brochure ↓</a>
                </div>
              </div>
            </motion.div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/strains" className="link-arrow" style={{ fontSize: '0.95rem' }}>Full product dossiers with CoA downloads →</Link>
          </div>
        </div>
      </section>

      {/* POND AERIAL BANNER */}
      <div className="pond-banner">
        <img src="/images/pond-aerial.png" alt="Aerial view of Ambeza-treated aquaculture ponds" loading="lazy" />
        <div className="pond-banner-overlay">
          <p>"Field-validated across intensive shrimp and fish farms in India and Southeast Asia."</p>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="section how-it-works" id="pipeline">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How It Works</p>
            <h2>From Application to Results</h2>
            <p>Bacillus spores activate on contact with pond water and deliver measurable outcomes within days — not weeks.</p>
          </div>
          <div className="hiw-steps">
            {howItWorks.map((s, i) => (
              <motion.div key={s.step} variants={reveal} initial="hidden" whileInView="show"
                viewport={{ once: true, amount: 0.2 }} transition={{ delay: i * 0.1 }} className="hiw-step">
                <div className="hiw-img-wrap">
                  <img src={s.img} alt={s.title} loading="lazy" />
                </div>
                <div className="hiw-step-body">
                  <span className="hiw-step-num">{s.step}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FIELD TRIAL RESULTS */}
      <section className="section field-trials">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Field Trial Data</p>
            <h2>Numbers from Real Farms. Not a Lab.</h2>
            <p>Every claim on this page is backed by documented trials conducted across commercial shrimp and fish farms in India and Southeast Asia.</p>
          </div>
          <div className="trials-grid">
            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="trial-card">
              <div className="trial-product-tag aquakure-tag">AQUAKURE</div>
              <div className="trial-metric">90<span>%</span></div>
              <h3>Ammonia Reduction</h3>
              <p className="trial-detail">Validated across intensive Litopenaeus vannamei grow-out ponds in Andhra Pradesh. Ammonia-N levels measured weekly over 8-week trial period.</p>
              <ul className="trial-conditions">
                <li><span>Species</span><strong>L. vannamei (White Leg Shrimp)</strong></li>
                <li><span>System</span><strong>Intensive pond, 0.5–1 ha</strong></li>
                <li><span>Dose</span><strong>500g AQUAKURE per acre</strong></li>
                <li><span>Duration</span><strong>8 weeks, bi-weekly dosing</strong></li>
              </ul>
            </motion.div>

            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.08 }} className="trial-card">
              <div className="trial-product-tag gutkure-tag">GUTKURE</div>
              <div className="trial-metric">0.18<span> FCR</span></div>
              <h3>Feed Conversion Improvement</h3>
              <p className="trial-detail">16-week trial across three semi-intensive shrimp farms in Andhra Pradesh. GUTKURE mixed into feed at 2g/kg. FCR measured against matched untreated control ponds.</p>
              <ul className="trial-conditions">
                <li><span>Location</span><strong>Andhra Pradesh, India</strong></li>
                <li><span>Farms</span><strong>3 farms, 6 ponds total</strong></li>
                <li><span>Dose</span><strong>2g GUTKURE per kg feed</strong></li>
                <li><span>Duration</span><strong>16 weeks full grow-out</strong></li>
              </ul>
            </motion.div>

            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.16 }} className="trial-card">
              <div className="trial-product-tag aquakure-tag">AQUAKURE</div>
              <div className="trial-metric">30<span>%</span></div>
              <h3>Higher Survival Rate</h3>
              <p className="trial-detail">Survival rate improvement recorded across 50+ field trials in Indian pond conditions. Competitive exclusion of Vibrio and Aeromonas confirmed via weekly water culture sampling.</p>
              <ul className="trial-conditions">
                <li><span>Trials</span><strong>50+ ponds across India</strong></li>
                <li><span>Pathogen</span><strong>Vibrio &amp; Aeromonas controlled</strong></li>
                <li><span>Onset</span><strong>Visible change in 3–7 days</strong></li>
                <li><span>CoA</span><strong>Available on request</strong></li>
              </ul>
            </motion.div>
          </div>
          <p className="trials-note">Raw data, methodology, and batch Certificates of Analysis available for procurement and regulatory review. <a href="#contact">Request documentation →</a></p>
        </div>
      </section>

      {/* WHY AMBEZA */}
      <section className="section why-ambeza">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why Ambeza</p>
            <h2>What Separates Our Strains from Generic Probiotics</h2>
            <p>Most aquaculture probiotics are repackaged commodity bacteria. Ambeza strains are developed from scratch — isolated, sequenced, and validated in the exact conditions your farm operates in.</p>
          </div>
          <div className="why-grid">
            {[
              {
                num: '01',
                title: 'Native Indian Strain Isolation',
                body: 'Every Ambeza strain is isolated from Indian wetlands, rice fields, and aquatic sediment — not purchased from international culture collections. This means inherent genetic adaptation to 30–38°C tropical pond temperatures before any engineering.',
                tag: 'Genomics',
              },
              {
                num: '02',
                title: 'Spore-Form Stability Advantage',
                body: 'Bacillus endospores survive feed pelleting (90°C), UV exposure, and pH extremes 3–10 that destroy every vegetative cell probiotic on the market. Your product is still viable at the pond bottom — not dead on arrival.',
                tag: 'Formulation',
              },
              {
                num: '03',
                title: 'Full Genomic Characterisation',
                body: 'Every commercial strain undergoes complete genome sequencing, phylogenetic profiling, and bioactive gene cluster identification before scale-up. We know exactly what each strain produces and why it works.',
                tag: 'Science',
              },
              {
                num: '04',
                title: 'Batch-Level Certificate of Analysis',
                body: 'Every production lot is independently tested and issued a Certificate of Analysis guaranteeing CFU count, purity, and absence of pathogens. We do not ship without a CoA. No exceptions.',
                tag: 'Quality',
              },
            ].map((item, i) => (
              <motion.div key={item.num} variants={reveal} initial="hidden" whileInView="show"
                viewport={{ once: true, amount: 0.15 }} transition={{ delay: i * 0.08 }} className="why-card">
                <div className="why-card-top">
                  <span className="why-num">{item.num}</span>
                  <span className="why-tag">{item.tag}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — slim */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">From the Field</p>
            <h2>What Farm Operators Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <motion.article key={t.name} variants={reveal} initial="hidden" whileInView="show"
                viewport={{ once: true, amount: 0.2 }} className="testimonial-card">
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

      {/* PROTOCOL QUICK REFERENCE */}
      <section className="section protocol-ref">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Application Guide</p>
            <h2>Protocol at a Glance</h2>
            <p>Dosage, frequency, pack sizes, and guarantees — everything your procurement or technical team needs to specify Ambeza products.</p>
          </div>
          <div className="protocol-grid">
            {protocols.map((p) => (
              <motion.div key={p.product} variants={reveal} initial="hidden" whileInView="show"
                viewport={{ once: true }} className={`protocol-card pc-${p.color}`}>
                <div className="pc-header">
                  <h3>{p.product}</h3>
                  <span className="pc-tag">{p.tag}</span>
                </div>
                <ul className="pc-table">
                  {p.rows.map(([label, value]) => (
                    <li key={label}>
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-primary pc-cta">Request Sample →</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq" aria-label="Frequently asked questions">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">FAQ</p>
            <h2>Common Questions</h2>
          </div>
          <div className="faq-list" style={{ maxWidth: '840px', marginInline: 'auto' }}>
            {faqs.map((item, i) => (
              <article key={item.q} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-toggle" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i} aria-controls={`faq-panel-${i}`}>
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

      {/* CONTACT */}
      <section className="section contact" id="contact">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Get Started</p>
            <h2>Request a Sample or Consultation</h2>
            <p>Share your farm details and our team will recommend the right strain protocol and send samples for trial.</p>
          </div>
          <div className="contact-grid">
            <form className="contact-form" onSubmit={submitForm} noValidate>
              <label>Full Name<input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /><small>{errors.name}</small></label>
              <label>Email Address<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" /><small>{errors.email}</small></label>
              <label>Phone / WhatsApp<input type="text" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+65 1234 5678" /><small>{errors.phone}</small></label>
              <label>Farm Details / Message<textarea rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Species, pond size, current challenges..." /><small>{errors.message}</small></label>
              <button className="btn btn-primary magnetic" type="submit">Send Inquiry</button>
              <p className="ok-msg">{formSuccess}</p>
            </form>
            <aside className="contact-card">
              <h3>Talk to Our Team</h3>
              <div className="contact-detail"><span>Email</span><span>info@ambeza.com</span></div>
              <div className="contact-detail"><span>Phone / WhatsApp</span><span>+65 1234 5678</span></div>
              <div className="contact-detail"><span>Business Hours</span><span>Mon – Fri, 9:00 AM – 6:00 PM SGT</span></div>
              <div className="download-links">
                <a href="/downloads/aquakure-brochure.pdf" download>↓ AQUAKURE Brochure (PDF)</a>
                <a href="/downloads/gutkure-brochure.pdf" download>↓ GUTKURE Brochure (PDF)</a>
                <a href="/downloads/aquakure-coa-50b.pdf" download>↓ Certificate of Analysis</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
