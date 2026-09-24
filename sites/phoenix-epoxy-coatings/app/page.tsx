const services = [
  { title: "Garage Floor Coatings", icon: "⌂", pos: "0%" },
  { title: "Polyaspartic Coatings", icon: "◇", pos: "25%" },
  { title: "Metallic Epoxy Floors", icon: "✦", pos: "50%" },
  { title: "Commercial Flooring", icon: "▥", pos: "75%" },
  { title: "Concrete Sealing", icon: "◯", pos: "100%" },
];

const proofItems = [
  ["◷", "Fast Turnaround", "Schedule based"],
  ["♙", "Phoenix Metro Focus", "Local project intake"],
  ["◇", "Prep-First Systems", "Slab before coating"],
];

export default function Page() {
  return (
    <main className="v2-page">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Phoenix Epoxy Coatings">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-sun" />
            <span className="brand-mountain" />
            <span className="brand-cactus" />
          </span>
          <span className="brand-copy">
            <strong>PHOENIX</strong>
            <small>EPOXY COATINGS</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#top">Home</a>
          <a href="#services">Services <span>⌄</span></a>
          <a href="#about">About</a>
          <a href="#work">Our Work</a>
          <a href="#areas">Service Areas</a>
          <a href="#resources">Resources <span>⌄</span></a>
        </nav>

        <div className="header-actions">
          <span className="metro-label">Phoenix Metro</span>
          <a className="primary-cta header-cta" href="#estimate">Get a Free Estimate <span>→</span></a>
        </div>

        <button className="mobile-menu" type="button" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-wash" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow">Premium epoxy flooring & concrete coatings</p>
          <h1>Stronger Floors<br />for a Brighter<br /><span>Phoenix</span></h1>
          <p className="hero-lead">
            Durable. Beautiful. Built for Arizona. Professional epoxy flooring and concrete coatings
            for homes and businesses across the Phoenix metro area.
          </p>

          <div className="hero-actions">
            <a className="primary-cta" href="#estimate">Get a Free Estimate <span>→</span></a>
            <a className="secondary-cta" href="#work"><span className="play">▶</span> See Our Work</a>
          </div>

          <div className="hero-proofs">
            {proofItems.map(([icon, title, sub]) => (
              <div className="proof-item" key={title}>
                <span className="proof-icon">{icon}</span>
                <span>
                  <b>{title}</b>
                  <small>{sub}</small>
                </span>
              </div>
            ))}
          </div>
        </div>

        <aside className="ai-card" aria-label="AI estimate assistant preview">
          <span className="ai-spark">✦</span>
          <div>
            <h2>AI Estimate Assistant</h2>
            <p>Get an instant ballpark estimate based on your space and local Phoenix pricing inputs.</p>
            <a className="primary-cta ai-button" href="#estimate">Try It Now <span>→</span></a>
          </div>
        </aside>
      </section>

      <section className="trust-strip" aria-label="Trust proof placeholders pending verification">
        <div className="trust-summary">
          <b>Trusted project planning signals</b>
          <span className="stars">★★★★★</span>
          <small>Proof badges activate only after verification</small>
        </div>
        <div><strong className="google">Google</strong><small>Reviews after verification</small></div>
        <div><strong className="facebook">facebook</strong><small>Community references</small></div>
        <div><strong className="neutral">BBB</strong><small>Status not claimed</small></div>
        <div><strong className="neutral">HomeAdvisor</strong><small>Status not claimed</small></div>
        <div><strong className="angi">Angi</strong><small>Status not claimed</small></div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <div>
            <h2><span className="desktop-service-title">Our Epoxy Flooring & Concrete Coating Services</span><span className="mobile-service-title">Our Services</span></h2>
            <p>Premium solutions for residential, commercial, and industrial spaces in Phoenix.</p>
          </div>
          <a className="orange-link" href="#estimate">View All Services <span>→</span></a>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article className={"service-card service-" + (index + 1)} key={service.title}>
              <div className="service-photo" style={{ backgroundPosition: service.pos }} />
              <div className="service-copy">
                <div className="service-title">
                  <span>{service.icon}</span>
                  <h3>{service.title}</h3>
                </div>
                <p>{[
                  "Transform your garage with durable, clean-looking coating systems.",
                  "UV-resistant, fast-curing options for Arizona heat and demanding spaces.",
                  "Statement finishes with depth and movement for premium interiors.",
                  "High-performance floors for shops, service areas, retail, and facilities.",
                  "Protect and extend the life of concrete with professionally selected sealers.",
                ][index]}</p>
                <a href="#estimate">Learn More <span>→</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-grid" id="work">
        <article className="results-panel">
          <div className="results-copy">
            <h2>Real Transformations.<br />Real Results.</h2>
            <p>From worn concrete to show-stopping spaces. See the difference a well-planned coating system can make.</p>
            <a className="primary-cta compact-cta" href="#estimate">View Our Project Gallery <span>→</span></a>
          </div>
          <div className="before-after" aria-label="Before and after floor preview">
            <span className="before-label">BEFORE</span>
            <span className="after-label">AFTER</span>
            <span className="ba-divider" />
            <span className="ba-handle">↔</span>
          </div>
        </article>

        <article className="service-area-panel" id="areas">
          <div className="area-overlay" />
          <div className="area-copy">
            <span className="pin">●</span>
            <h2>Proudly Serving<br />Phoenix & Surrounding Areas</h2>
            <p>Project intake is designed for Phoenix and the surrounding metro area.</p>
            <a className="light-cta" href="#estimate">View Service Areas <span>→</span></a>
          </div>
        </article>
      </section>

      <section className="intel-strip" id="about">
        <article><span className="intel-icon">▥</span><div><h3>Local Pricing Intelligence</h3><p>Market-aware ranges based on actual project conditions.</p></div></article>
        <article><span className="intel-icon">▣</span><div><h3>AI-Powered Estimates</h3><p>Structured intake using scope, footage, and slab signals.</p></div></article>
        <article><span className="intel-icon">◎</span><div><h3>Competitive Insights</h3><p>Research-backed positioning without copying competitors.</p></div></article>
      </section>

      <section className="estimate-gate" id="estimate">
        <div>
          <p className="eyebrow">Visual rebuild gate</p>
          <h2>Lead capture stays off until the visual build passes.</h2>
          <p>This preview intentionally does not submit or persist customer data.</p>
        </div>
        <button className="primary-cta disabled-cta" type="button" aria-disabled="true">
          Estimate Intake Activates After Validation
        </button>
      </section>

      <div id="resources" className="preview-spacer" />
    </main>
  );
}
