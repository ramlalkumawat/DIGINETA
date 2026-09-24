/**
 * Component: Team Section (Visible on ALL devices)
 * Digital Netagiri
 */
window.DN_Components = window.DN_Components || {};

window.DN_Components.Team = function() {
  return `
    <!-- ========================================================
         8B. TEAM SECTION (Visible & Accessible on ALL Devices)
         ======================================================== -->
    <section class="team-section" id="team">
      <div class="container">
        
        <div class="section-header text-center reveal-on-scroll">
          <div class="section-eyebrow">OUR SPECIALIZED CAMPAIGN SQUAD</div>
          <h2 class="section-title">
            विशेषज्ञ चुनावी <span class="gradient-text">स्ट्रैटेजी & टेक टीम</span>
          </h2>
          <p class="section-desc">
            ग्राउंड पॉलिटिक्स, डेटा एनालिटिक्स, इलेक्शन टेक्नोलॉजी और डिजिटल वॉर रूम के महारथियों की समर्पित टीम — जो आपके अभियान को बूथ स्तर पर मजबूत बनाती है।
          </p>
        </div>

        <div class="team-grid reveal-on-scroll">
          
          <!-- Team Card 1 -->
          <div class="team-card">
            <div class="team-card-top">
              <div class="team-avatar-box">
                <span class="team-avatar-icon">🎯</span>
              </div>
              <span class="team-role-tag">FIELD OPERATIONS</span>
            </div>
            <div class="team-info">
              <h3 class="team-name">दिलीप सैनी <span class="team-en-name">(Dilip Saini)</span></h3>
              <div class="team-designation">Chief Field Strategist & Booth Operations</div>
              <p class="team-bio">
                45+ विधानसभा व निकाय चुनावों में बूथ-स्तरीय माइक्रो प्लानिंग, ग्राउंड कार्यकर्ता ट्रेनिंग और पोलिंग डे ऑपरेशन्स का समृद्ध अनुभव।
              </p>
              <div class="team-tags">
                <span class="team-tag-pill">बूथ मैनेजमेंट</span>
                <span class="team-tag-pill">कार्यकर्ता ट्रेनिंग</span>
                <span class="team-tag-pill">ग्राउंड सर्वे</span>
              </div>
            </div>
            <div class="team-card-footer">
              <div class="team-stat-highlight">
                <strong>45+</strong> चुनाव अभियान
              </div>
              <div class="team-status-dot">
                <span class="dot-live"></span> Active Field Lead
              </div>
            </div>
          </div>

          <!-- Team Card 2 -->
          <div class="team-card">
            <div class="team-card-top">
              <div class="team-avatar-box">
                <span class="team-avatar-icon">💻</span>
              </div>
              <span class="team-role-tag">TECH ARCHITECTURE</span>
            </div>
            <div class="team-info">
              <h3 class="team-name">अमित चौधरी <span class="team-en-name">(Amit Choudhary)</span></h3>
              <div class="team-designation">Head of Election Technology & SaaS</div>
              <p class="team-bio">
                Chunav Setu SaaS ऐप आर्किटेक्चर, WhatsApp ऑटोमेशन, क्लाउड इन्फ्रास्ट्रक्चर और 100% गोपनीय वोटर डेटाबेस सिक्योरिटी के विशेषज्ञ।
              </p>
              <div class="team-tags">
                <span class="team-tag-pill">Chunav Setu App</span>
                <span class="team-tag-pill">डेटा एनालिटिक्स</span>
                <span class="team-tag-pill">वोटर स्लिप सिस्टम</span>
              </div>
            </div>
            <div class="team-card-footer">
              <div class="team-stat-highlight">
                <strong>10M+</strong> वोटर रिकॉर्ड्स
              </div>
              <div class="team-status-dot">
                <span class="dot-live"></span> 99.9% Tech Uptime
              </div>
            </div>
          </div>

          <!-- Team Card 3 -->
          <div class="team-card">
            <div class="team-card-top">
              <div class="team-avatar-box">
                <span class="team-avatar-icon">📡</span>
              </div>
              <span class="team-role-tag">DIGITAL WAR ROOM</span>
            </div>
            <div class="team-info">
              <h3 class="team-name">विकास शर्मा <span class="team-en-name">(Vikas Sharma)</span></h3>
              <div class="team-designation">Digital Media Director & War Room Lead</div>
              <p class="team-bio">
                हाइपर-लोकल मेटा विज्ञापन, पिनकोड-स्तरीय टारगेटिंग, 24/7 लाइव वॉर रूम मॉनिटरिंग और सोशल नैरेटिव बिल्डिंग के विशेषज्ञ।
              </p>
              <div class="team-tags">
                <span class="team-tag-pill">हाइपर-लोकल एड्स</span>
                <span class="team-tag-pill">वॉर रूम 24/7</span>
                <span class="team-tag-pill">नैरेटिव काउंटर</span>
              </div>
            </div>
            <div class="team-card-footer">
              <div class="team-stat-highlight">
                <strong>50M+</strong> डिजिटल रीच
              </div>
              <div class="team-status-dot">
                <span class="dot-live"></span> Meta Verified
              </div>
            </div>
          </div>

          <!-- Team Card 4 -->
          <div class="team-card">
            <div class="team-card-top">
              <div class="team-avatar-box">
                <span class="team-avatar-icon">👑</span>
              </div>
              <span class="team-role-tag">CREATIVE BRANDING</span>
            </div>
            <div class="team-info">
              <h3 class="team-name">संगीता कुमावत <span class="team-en-name">(Sangeeta Kumawat)</span></h3>
              <div class="team-designation">Director - Public Relations & Content Strategy</div>
              <p class="team-bio">
                उम्मीदवार की व्यक्तिगत ब्रांडिंग, जनसभा भाषण, चुनावी घोषणा पत्र (Manifesto), प्रभावशाली वीडियो नैरेटिव और प्रेस संबंध।
              </p>
              <div class="team-tags">
                <span class="team-tag-pill">भाषण & स्लोगन</span>
                <span class="team-tag-pill">कैंडिडेट ब्रांडिंग</span>
                <span class="team-tag-pill">पब्लिक नैरेटिव</span>
              </div>
            </div>
            <div class="team-card-footer">
              <div class="team-stat-highlight">
                <strong>120+</strong> भाषण व मेनिफेस्टो
              </div>
              <div class="team-status-dot">
                <span class="dot-live"></span> Brand Architect
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
};
