/**
 * Component: Director Profile & Leadership Section
 * Digital Netagiri
 */
window.DN_Components = window.DN_Components || {};

window.DN_Components.Director = function() {
  return `
    <!-- ========================================================
         8. LEADERSHIP & DIRECTOR PROFILE
         ======================================================== -->
    <section class="director-section" id="director">
      <div class="container">
        
        <div class="section-header text-center reveal-on-scroll">
          <div class="section-eyebrow">LEADERSHIP & VISION</div>
          <h2 class="section-title">
            डायरेक्टर प्रोफाइल एवं <span class="gradient-text">चुनावी विजन</span>
          </h2>
          <p class="section-desc">
            तकनीक, डेटा और ज़मीनी राजनीतिक समझ के संयोजन से हर चुनाव को एक सुव्यवस्थित और विजयी अभियान में बदलने का दृष्टिकोण।
          </p>
        </div>

        <div class="director-card-wrapper reveal-on-scroll">
          <div class="director-bg-glow"></div>
          
          <div class="director-card-grid">
            
            <!-- Left: Director Photo & Identity Card -->
            <div class="director-photo-col">
              <div class="director-image-card">
                <div class="director-img-container">
                  <img src="assets/ramlal_kumawat.jpg" alt="Ramlal Kumawat - Director & Lead Political Strategist" class="director-img" loading="lazy">
                  <div class="director-badge-floating">
                    <span class="badge-dot"></span>
                    <span>Founder & Director</span>
                  </div>
                  <div class="director-brand-stamp">
                    <span>Digital Netagiri</span>
                    <span class="stamp-sub">by CampaignX</span>
                  </div>
                </div>

                <div class="director-quick-contact">
                  <a href="https://wa.me/916375983593?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20Ramlal%20Kumawat%20Sir%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%9A%E0%A5%81%E0%A4%A8%E0%A4%BE%E0%A4%B5%E0%A5%80%20%E0%A4%B0%E0%A4%A3%E0%A4%A8%E0%A5%80%E0%A4%A4%E0%A4%BF%20%26%20%E0%A4%A1%E0%A4%BF%E0%A4%9C%E0%A4%BF%E0%A4%9F%E0%A4%B2%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%9A%E0%A4%BE%E0%A4%B0%20%E0%A4%95%E0%A5%87%20%E0%A4%B8%E0%A4%82%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AD%20%E0%A4%AE%E0%A5%87%E0%A4%82%20Direct%20Consultation%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4" target="_blank" rel="noopener noreferrer" class="btn btn-director-wa">
                    <svg viewBox="0 0 24 24" class="btn-icon" fill="currentColor">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.95 7.42C8.76 7.42 8.46 7.49 8.2 7.77C7.94 8.05 7.21 8.74 7.21 10.14C7.21 11.54 8.23 12.89 8.37 13.08C8.51 13.27 10.37 16.13 13.21 17.36C13.88 17.65 14.41 17.83 14.82 17.96C15.5 18.17 16.12 18.14 16.61 18.07C17.16 17.99 18.29 17.38 18.52 16.73C18.76 16.07 18.76 15.51 18.69 15.39C18.62 15.28 18.43 15.21 18.15 15.07C17.87 14.93 16.49 14.25 16.23 14.16C15.97 14.07 15.79 14.02 15.6 14.3C15.41 14.58 14.88 15.21 14.72 15.39C14.56 15.58 14.39 15.6 14.11 15.46C13.83 15.32 12.94 15.03 11.89 14.09C11.07 13.36 10.51 12.46 10.35 12.18C10.19 11.9 10.33 11.75 10.47 11.61C11.27 10.46 11.23 10.3 11.16 10.16C11.09 10.02 10.53 8.65 10.3 8.09C10.07 7.55 9.84 7.62 9.67 7.61L9.14 7.6C8.95 7.6 8.95 7.42 8.95 7.42Z"/>
                    </svg>
                    <span>डायरेक्टर से WhatsApp संवाद</span>
                  </a>
                  <a href="tel:+916375983593" class="btn btn-director-call">
                    <svg viewBox="0 0 24 24" class="btn-icon" fill="currentColor">
                      <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                    </svg>
                    <span>Direct Call: 6375983593</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Right: Bio, Vision, Experience & Pillars -->
            <div class="director-details-col">
              
              <div class="director-name-block">
                <div class="director-role-tag">
                  <span class="role-icon">🎖️</span>
                  <span>LEAD POLITICAL STRATEGIST & TECH ARCHITECT</span>
                </div>
                <h3 class="director-name">रामलाल कुमावत <span class="en-name">(Ramlal Kumawat)</span></h3>
                <div class="director-designation">
                  <strong>Director & Founder</strong> • Digital Netagiri & CampaignX
                </div>
              </div>

              <!-- Vision Quote Box -->
              <div class="director-quote-box">
                <div class="quote-mark">“</div>
                <p class="quote-text">
                  आज के आधुनिक दौर में चुनाव केवल रैलियों और भाषणों से नहीं, बल्कि <strong>सटीक डेटा एनालिटिक्स, हाइपर-लोकल डिजिटल वॉर रूम और पारदर्शी बूथ मैनेजमेंट</strong> से जीते जाते हैं। हमारा उद्देश्य हर राजनीतिक दल और उम्मीदवार को ऐसी तकनीक व रणनीति देना है, जो मतदाताओं के दिल तक पहुंचे और विजय सुनिश्चित करे।
                </p>
                <div class="quote-author">— रामलाल कुमावत (Director)</div>
              </div>

              <!-- Strategic Expertise Grid -->
              <div class="director-expertise-title">मुख्य रणनीतिक विशेषज्ञता (Core Expertise):</div>
              <div class="director-expertise-grid">
                
                <div class="exp-card">
                  <div class="exp-icon">🎯</div>
                  <div class="exp-info">
                    <h4 class="exp-title">Political Campaign Strategy</h4>
                    <p class="exp-desc">विधानसभा, नगर निगम, परिषद एवं पंचायत चुनावों के लिए बूथ-स्तरीय माइक्रो प्लानिंग एवं रणनीति निर्माण।</p>
                  </div>
                </div>

                <div class="exp-card">
                  <div class="exp-icon">💻</div>
                  <div class="exp-info">
                    <h4 class="exp-title">Chunav Setu SaaS Architecture</h4>
                    <p class="exp-desc">मतदाता पर्ची, कार्यकर्ता समन्वय और पोलिंग डे ऑपरेशन्स के लिए रियल-टाइम इलेक्शन टेक्नोलॉजी प्लेटफॉर्म।</p>
                  </div>
                </div>

                <div class="exp-card">
                  <div class="exp-icon">📡</div>
                  <div class="exp-info">
                    <h4 class="exp-title">Hyper-Local Digital Ads & War Room</h4>
                    <p class="exp-desc">पिन-कोड व वार्ड आधारित मेटा विज्ञापन, सोशल मीडिया ट्रेंडिंग और 24/7 लाइव वॉर रूम मॉनिटरिंग।</p>
                  </div>
                </div>

                <div class="exp-card">
                  <div class="exp-icon">👑</div>
                  <div class="exp-info">
                    <h4 class="exp-title">Candidate Personal Branding</h4>
                    <p class="exp-desc">उम्मीदवार की व्यक्तिगत साख, जनहितैषी छवि, विजन डाक्यूमेंट और प्रभावशाली पब्लिक नैरेटिव का निर्माण।</p>
                  </div>
                </div>

              </div>

              <!-- Director Stats Counter Strip -->
              <div class="director-stats-row">
                <div class="d-stat-item">
                  <div class="d-stat-val">7+</div>
                  <div class="d-stat-lbl">Years Campaign Exp.</div>
                </div>
                <div class="d-stat-item">
                  <div class="d-stat-val">50+</div>
                  <div class="d-stat-lbl">Elections & Wards</div>
                </div>
                <div class="d-stat-item">
                  <div class="d-stat-val">10M+</div>
                  <div class="d-stat-lbl">Voter Digital Reach</div>
                </div>
                <div class="d-stat-item highlight">
                  <div class="d-stat-val">100%</div>
                  <div class="d-stat-lbl">Data Confidentiality</div>
                </div>
              </div>

              <!-- Personal Consultation Action -->
              <div class="director-cta-bar">
                <div class="d-cta-text">
                  <strong>अपने चुनाव के लिए पर्सनलाइज्ड स्ट्रैटेजी मीटिंग बुक करें</strong>
                  <span>जयपुर हेड ऑफिस या वीडियो कॉल पर वन-ऑन-वन चर्चा</span>
                </div>
                <a href="https://wa.me/916375983593?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20Ramlal%20Kumawat%20Sir%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%86%E0%A4%AA%E0%A4%95%E0%A5%87%20%E0%A4%B8%E0%A4%BE%E0%A4%A5%20%E0%A4%9A%E0%A5%81%E0%A4%A8%E0%A4%BE%E0%A4%B5%E0%A5%80%20%E0%A4%B0%E0%A4%A3%E0%A4%A8%E0%A5%80%E0%A4%A4%E0%A4%BF%20%E0%A4%AA%E0%A4%B0%20One-on-One%20Meeting%20%2F%20Discussion%20Schedule%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%B9%E0%A5%88%E0%A5%A4" target="_blank" rel="noopener noreferrer" class="btn btn-primary-hero">
                  <span>Schedule Consultation</span>
                  <svg viewBox="0 0 20 20" class="btn-arrow" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  `;
};
