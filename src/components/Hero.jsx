import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="social-pill" aria-label="Hamida is available for a call">
        <span className="social-avatar" aria-hidden="true">H<span className="signal-dot" /></span>
        <span className="social-copy">
          <strong>@hamida_jain</strong>
          <small><i className="call-signal" />Available for a call</small>
        </span>
      </div>
      <div className="edge-label edge-label-right" aria-hidden="true">MEDICAL</div>
      <div className="edge-label edge-label-left" aria-hidden="true">SPECIALIST</div>

      <div className="hero-content">
        <div className="treatment-badge"><span>⌁</span>Fast Treatment</div>
        <h1>
          QUICK<br />
          <span className="smart-line">
            <svg className="stethoscope" viewBox="0 0 82 76" aria-hidden="true">
              <path d="M17 8v22c0 13 9 22 22 22s22-9 22-22V8M10 8h14M54 8h14M39 52v5c0 8 7 13 15 13s14-6 14-14v-4" />
              <circle cx="68" cy="47" r="7" />
            </svg>
            SMART
          </span><br />
          MEDIC
        </h1>
        <p>Nuvica is your destination for world-class treatments, compassionate doctors, and precise diagnostics all under one roof.</p>
        <div className="hero-actions">
          <a href="#about" className="explore-btn">Explore More</a>
          <a href="#about" className="explore-arrow" aria-label="Explore more">↗</a>
        </div>
      </div>

      <div className="doctor-visual">
        <div className="doctor-mask">
          <div className="doctor-circle" />
          <video className="doctor-video" autoPlay muted loop playsInline>
            <source src="/videos/doctor.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="experience-card">
          <span className="experience-icon">✚</span>
          <div><strong>22 Years</strong><small>Medical Excellence</small></div>
        </div>
      </div>

      <div className="award-card">
        <strong>490</strong><small>AWARDS</small><span className="award-icon">✚</span>
      </div>

      <div className="lungs-visual">
        <div className="lungs-mask">
          <div className="lungs-circle" />
          <video className="lungs-video" autoPlay muted loop playsInline>
            <source src="/videos/lungs.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="lungs-stat">
          <span className="lungs-icon">◉</span>
          <div><strong>6700</strong><small>Healed Lungs</small></div>
        </div>
      </div>

      <div className="medical-cards">
        <div className="medical-card">
          <img src="/images/brain.png" alt="Brain illustration" className="medical-image" />
          <span className="medical-arrow">↗</span>
          <h3>Brain Health<br />Check</h3>
        </div>
        <div className="medical-card">
          <img src="/images/liver.png" alt="Liver illustration" className="medical-image" />
          <span className="medical-arrow">↗</span>
          <h3>Liver Function<br />Test</h3>
        </div>
        <div className="medical-card kidney-card">
          <img src="/images/kidney.png" alt="Kidney illustration" className="medical-image" />
          <span className="medical-arrow">↗</span>
          <h3>Kidney Health<br />Scan</h3>
        </div>
      </div>
    </section>
  );
}

export default Hero;
