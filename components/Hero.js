/**
 * Component: Hero Section & Campaign Marquee Ticker
 * Digital Netagiri
 */
window.DN_Components = window.DN_Components || {};

window.DN_Components.Hero = function() {
  return `
    <!-- ========================================================
         2. HERO SECTION
         ======================================================== -->
    <section class="hero-section" id="hero">
      <div class="hero-bg-glow"></div>
      <div class="hero-bg-grid"></div>
      
      <div class="container hero-container">
        
        <!-- Hero Left / Content -->
        <div class="hero-content reveal-on-scroll">
          <div class="hero-eyebrow-pill">
            <span class="pulse-dot"></span>
            <span class="eyebrow-text">DIGITAL CAMPAIGNS • REAL IMPACT</span>
          </div>

          <!-- FutureX Internship Announcement -->
          <div>
            <a href="/internship" class="hero-announcement-banner">
              <span class="badge-mini">NEW</span>
              <span>🎓 FutureX Skill-Oriented Internship Program Live</span>
              <span class="banner-arrow">Apply Now →</span>
            </a>
          </div>

          <h1 class="hero-headline">
            आपका चुनाव,<br>
            <span class="gradient-text-hero">हमारी डिजिटल रणनीति।</span>
          </h1>

          <p class="hero-subtext">
            <strong>Digital Netagiri</strong> के साथ चुनावी प्रचार को स्मार्ट, हाइपर-लोकल और डेटा-ड्रिवन बनाइए। रणनीति से लेकर ग्राउंड इलेक्शन मैनेजमेंट तक — हर कदम पर विजय का भरोसा।
          </p>

          <div class="hero-cta-group">
            <a href="https://wa.me/916375983593?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20Digital%20Netagiri%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%9A%E0%A5%81%E0%A4%A8%E0%A4%BE%E0%A4%B5%E0%A5%80%20%E0%A4%A1%E0%A4%BF%E0%A4%9C%E0%A4%BF%E0%A4%9F%E0%A4%B2%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%9A%E0%A4%BE%E0%A4%B0%20%2F%20Chunav%20Setu%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%87%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%9A%E0%A4%B0%E0%A5%8D%E0%A4%9A%E0%A4%BE%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A5%80%20%E0%A4%B9%E0%A5%88%E0%A5%A4" target="_blank" rel="noopener noreferrer" class="btn btn-primary-hero btn-whatsapp" id="heroWhatsAppBtn">
              <svg viewBox="0 0 24 24" class="btn-icon" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.95 7.42C8.76 7.42 8.46 7.49 8.2 7.77C7.94 8.05 7.21 8.74 7.21 10.14C7.21 11.54 8.23 12.89 8.37 13.08C8.51 13.27 10.37 16.13 13.21 17.36C13.88 17.65 14.41 17.83 14.82 17.96C15.5 18.17 16.12 18.14 16.61 18.07C17.16 17.99 18.29 17.38 18.52 16.73C18.76 16.07 18.76 15.51 18.69 15.39C18.62 15.28 18.43 15.21 18.15 15.07C17.87 14.93 16.49 14.25 16.23 14.16C15.97 14.07 15.79 14.02 15.6 14.3C15.41 14.58 14.88 15.21 14.72 15.39C14.56 15.58 14.39 15.6 14.11 15.46C13.83 15.32 12.94 15.03 11.89 14.09C11.07 13.36 10.51 12.46 10.35 12.18C10.19 11.9 10.33 11.75 10.47 11.61C10.6 11.48 10.76 11.27 10.9 11.11C11.04 10.95 11.09 10.83 11.18 10.65C11.27 10.46 11.23 10.3 11.16 10.16C11.09 10.02 10.53 8.65 10.3 8.09C10.07 7.55 9.84 7.62 9.67 7.61L9.14 7.6C8.95 7.6 8.95 7.42 8.95 7.42Z"/>
              </svg>
              <span>WhatsApp पर बात करें</span>
            </a>
            <a href="#services" class="btn btn-secondary-hero">
              <span>Services देखें</span>
              <svg viewBox="0 0 20 20" class="btn-arrow" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>

          <!-- Quick Service Highlights -->
          <div class="hero-highlights-grid">
            <div class="highlight-item">
              <span class="hl-number">01</span>
              <div class="hl-info">
                <span class="hl-title">Creative Design</span>
                <span class="hl-desc">बैनर, रील्स & पोस्टर्स</span>
              </div>
            </div>
            <div class="highlight-item">
              <span class="hl-number">02</span>
              <div class="hl-info">
                <span class="hl-title">Hyper Local Ads</span>
                <span class="hl-desc">वार्ड/बूथ स्तर टारगेटिंग</span>
              </div>
            </div>
            <div class="highlight-item">
              <span class="hl-number">03</span>
              <div class="hl-info">
                <span class="hl-title">Bulk WhatsApp & SMS</span>
                <span class="hl-desc">सीधा वोटर संवाद</span>
              </div>
            </div>
            <div class="highlight-item">
              <span class="hl-number">04</span>
              <div class="hl-info">
                <span class="hl-title">Election Management</span>
                <span class="hl-desc">Chunav Setu SaaS ऐप</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Hero Right / Dashboard & Smartphone Mockup -->
        <div class="hero-visual reveal-on-scroll">
          <div class="dashboard-mockup-wrapper">
            <div class="mockup-header-bar">
              <div class="window-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <div class="mockup-title-tag">
                <span class="status-live-indicator"></span>
                <span>Chunav Setu • War Room Live</span>
                <span class="demo-badge">DEMO DATA</span>
              </div>
              <div class="mockup-battery-status">98% Synced</div>
            </div>

            <div class="mockup-inner-dashboard">
              <!-- Top Metrics Row -->
              <div class="mockup-kpi-grid">
                <div class="kpi-card accent-purple">
                  <div class="kpi-top">
                    <span class="kpi-label">Total Voters</span>
                    <span class="kpi-badge">+4.2%</span>
                  </div>
                  <div class="kpi-value" id="counterVoters">12,45,000</div>
                  <div class="kpi-sub">Ward 1 to 45 Coverage</div>
                </div>

                <div class="kpi-card accent-orange">
                  <div class="kpi-top">
                    <span class="kpi-label">Active Volunteers</span>
                    <span class="kpi-badge live">Live</span>
                  </div>
                  <div class="kpi-value" id="counterVolunteers">1,120</div>
                  <div class="kpi-sub">On-ground Assigned</div>
                </div>

                <div class="kpi-card accent-navy">
                  <div class="kpi-top">
                    <span class="kpi-label">Booth Coverage</span>
                    <span class="kpi-badge">92%</span>
                  </div>
                  <div class="kpi-value">180 / 195</div>
                  <div class="kpi-progress">
                    <div class="progress-bar-fill" style="width: 92%;"></div>
                  </div>
                </div>
              </div>

              <!-- Center Chart / Activity Row -->
              <div class="mockup-activity-row">
                <div class="activity-chart-box">
                  <div class="box-head">
                    <span class="box-title">Voter Reach Analytics</span>
                    <span class="box-legend"><span class="legend-dot orange"></span> Digital <span class="legend-dot purple"></span> Ground</span>
                  </div>
                  <div class="mini-chart-bars">
                    <div class="bar-col"><div class="bar bar-1" style="height: 48%;"></div><span>W-1</span></div>
                    <div class="bar-col"><div class="bar bar-2" style="height: 75%;"></div><span>W-2</span></div>
                    <div class="bar-col"><div class="bar bar-3" style="height: 92%;"></div><span>W-3</span></div>
                    <div class="bar-col"><div class="bar bar-4" style="height: 64%;"></div><span>W-4</span></div>
                    <div class="bar-col"><div class="bar bar-5" style="height: 88%;"></div><span>W-5</span></div>
                    <div class="bar-col"><div class="bar bar-6" style="height: 96%;"></div><span>W-6</span></div>
                  </div>
                </div>

                <!-- Floating Live Feed Smartphone Card -->
                <div class="mockup-feed-card">
                  <div class="feed-header">
                    <span class="feed-icon">⚡</span>
                    <span>Live Campaign Activity</span>
                  </div>
                  <ul class="feed-list">
                    <li class="feed-item">
                      <span class="feed-dot"></span>
                      <div class="feed-text">
                        <strong>Booth 14:</strong> 340+ voter slips dispatched
                      </div>
                      <span class="feed-time">2m ago</span>
                    </li>
                    <li class="feed-item">
                      <span class="feed-dot"></span>
                      <div class="feed-text">
                        <strong>WhatsApp Broadcast:</strong> 12,000 sent (94% open)
                      </div>
                      <span class="feed-time">5m ago</span>
                    </li>
                    <li class="feed-item">
                      <span class="feed-dot"></span>
                      <div class="feed-text">
                        <strong>Meta Ads:</strong> 85,000 ward impressions
                      </div>
                      <span class="feed-time">12m ago</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Bottom Status Banner -->
              <div class="mockup-bottom-bar">
                <div class="shield-tag">
                  <svg viewBox="0 0 20 20" fill="currentColor" class="shield-icon"><path fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clip-rule="evenodd"/></svg>
                  <span>100% Policy Compliant • Role-based Security</span>
                </div>
                <div class="sync-tag">⚡ Live Sync: Active</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================================
         2.5. AUTO-SCROLLING CAMPAIGN MARQUEE TICKER
         ======================================================== -->
    <div class="marquee-ticker-section" aria-label="Election Campaign Highlights Ticker">
      <div class="marquee-ticker-wrap">
        <div class="marquee-track">
          <div class="marquee-content">
            <span class="m-item"><span class="m-icon">🚩</span> राजस्थान विधानसभा, नगर निगम &amp; पंचायत चुनाव 2026</span>
            <span class="m-sep">•</span>
            <span class="m-item"><span class="m-icon">🏆</span> 50+ विजयी चुनावी अभियान &amp; ब्रांडिंग</span>
            <span class="m-sep">•</span>
            <span class="m-item"><span class="m-icon">📲</span> Chunav Setu SaaS ऐप • लाइव डेमो उपलब्ध</span>
            <span class="m-sep">•</span>
            <span class="m-item"><span class="m-icon">🎯</span> हाइपर-लोकल मेटा ऐड्स &amp; वार्ड-वार टारगेटिंग</span>
            <span class="m-sep">•</span>
            <span class="m-item"><span class="m-icon">⚡</span> 24/7 डिजिटल वॉर रूम &amp; कार्यकर्ता मैनेजमेंट</span>
            <span class="m-sep">•</span>
            <span class="m-item"><span class="m-icon">📊</span> बूथ-वार मतदाता डेटा &amp; डिजिटल पर्ची वितरण</span>
            <span class="m-sep">•</span>
            <span class="m-item"><span class="m-icon">🔒</span> 100% डेटा गोपनीयता &amp; निर्वाचन आयोग नियम अनुपालन</span>
            <span class="m-sep">•</span>
          </div>
          <div class="marquee-content" aria-hidden="true">
            <span class="m-item"><span class="m-icon">🚩</span> राजस्थान विधानसभा, नगर निगम &amp; पंचायत चुनाव 2026</span>
            <span class="m-sep">•</span>
            <span class="m-item"><span class="m-icon">🏆</span> 50+ विजयी चुनावी अभियान &amp; ब्रांडिंग</span>
            <span class="m-sep">•</span>
            <span class="m-item"><span class="m-icon">📲</span> Chunav Setu SaaS ऐप • लाइव डेमो उपलब्ध</span>
            <span class="m-sep">•</span>
            <span class="m-item"><span class="m-icon">🎯</span> हाइपर-लोकल मेटा ऐड्स &amp; वार्ड-वार टारगेटिंग</span>
            <span class="m-sep">•</span>
            <span class="m-item"><span class="m-icon">⚡</span> 24/7 डिजिटल वॉर रूम &amp; कार्यकर्ता मैनेजमेंट</span>
            <span class="m-sep">•</span>
            <span class="m-item"><span class="m-icon">📊</span> बूथ-वार मतदाता डेटा &amp; डिजिटल पर्ची वितरण</span>
            <span class="m-sep">•</span>
            <span class="m-item"><span class="m-icon">🔒</span> 100% डेटा गोपनीयता &amp; निर्वाचन आयोग नियम अनुपालन</span>
            <span class="m-sep">•</span>
          </div>
        </div>
      </div>
    </div>
  `;
};
