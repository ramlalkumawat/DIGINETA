/**
 * Component: Contact & Interactive Action Selector Section
 * Digital Netagiri
 */
window.DN_Components = window.DN_Components || {};

window.DN_Components.Contact = function() {
  return `
    <!-- ========================================================
         9. CONTACT / CTA
         ======================================================== -->
    <section class="contact-section" id="contact">
      <div class="container">
        
        <div class="contact-cta-wrapper reveal-on-scroll">
          <div class="cta-bg-glow"></div>
          
          <div class="cta-header text-center">
            <div class="section-eyebrow light">LET'S BUILD YOUR WINNING STRATEGY</div>
            <h2 class="cta-main-title">
              आपका चुनावी लक्ष्य क्या है?
            </h2>
            <p class="cta-subtext">
              एक call में campaign requirement discuss करें और सही digital plan तय करें।
            </p>
          </div>

          <!-- Interactive Election Level Quick Selector -->
          <div class="election-selector-box">
            <span class="selector-title">अपने चुनाव या सेवा का चयन करें:</span>
            <div class="selector-chips" id="selectorChips">
              <button class="chip active" data-type="नगर पालिका / परिषद / निगम">नगर पालिका / परिषद / निगम</button>
              <button class="chip" data-type="ग्राम पंचायत / सरपंच">ग्राम पंचायत / सरपंच</button>
              <button class="chip" data-type="विधानसभा / लोकसभा">विधानसभा / लोकसभा</button>
              <button class="chip" data-type="Chunav Setu App Demo">Chunav Setu App Demo</button>
              <button class="chip" data-type="कैंडिडेट ब्रांडिंग & पोस्टर्स">कैंडिडेट ब्रांडिंग & पोस्टर्स</button>
              <button class="chip" data-type="बल्क व्हाट्सऐप & ऐड्स">बल्क व्हाट्सऐप & ऐड्स</button>
            </div>
          </div>

          <!-- Direct CTA Buttons -->
          <div class="cta-buttons-row">
            <a href="tel:+916375983593" class="btn btn-cta-phone" id="ctaPhoneBtn">
              <svg viewBox="0 0 24 24" class="btn-icon" fill="currentColor">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
              </svg>
              <span>☎ 6375983593</span>
            </a>

            <a href="https://wa.me/916375983593?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20Digital%20Netagiri%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%9A%E0%A5%81%E0%A4%A8%E0%A4%BE%E0%A4%B5%E0%A5%80%20%E0%A4%A1%E0%A4%BF%E0%A4%9C%E0%A4%BF%E0%A4%9F%E0%A4%B2%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%9A%E0%A4%BE%E0%A4%B0%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%20%E0%A4%9A%E0%A4%B0%E0%A5%8D%E0%A4%9A%E0%A4%BE%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A5%80%20%E0%A4%B9%E0%A5%88%E0%A5%A4" target="_blank" rel="noopener noreferrer" class="btn btn-cta-whatsapp" id="ctaDynamicWhatsAppBtn">
              <svg viewBox="0 0 24 24" class="btn-icon" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.95 7.42C8.76 7.42 8.46 7.49 8.2 7.77C7.94 8.05 7.21 8.74 7.21 10.14C7.21 11.54 8.23 12.89 8.37 13.08C8.51 13.27 10.37 16.13 13.21 17.36C13.88 17.65 14.41 17.83 14.82 17.96C15.5 18.17 16.12 18.14 16.61 18.07C17.16 17.99 18.29 17.38 18.52 16.73C18.76 16.07 18.76 15.51 18.69 15.39C18.62 15.28 18.43 15.21 18.15 15.07C17.87 14.93 16.49 14.25 16.23 14.16C15.97 14.07 15.79 14.02 15.6 14.3C15.41 14.58 14.88 15.21 14.72 15.39C14.56 15.58 14.39 15.6 14.11 15.46C13.83 15.32 12.94 15.03 11.89 14.09C11.07 13.36 10.51 12.46 10.35 12.18C10.19 11.9 10.33 11.75 10.47 11.61C10.6 11.48 10.76 11.27 10.9 11.11C11.04 10.95 11.09 10.83 11.18 10.65C11.27 10.46 11.23 10.3 11.16 10.16C11.09 10.02 10.53 8.65 10.3 8.09C10.07 7.55 9.84 7.62 9.67 7.61L9.14 7.6C8.95 7.6 8.95 7.42 8.95 7.42Z"/>
              </svg>
              <span>WhatsApp ↗</span>
            </a>
          </div>

          <!-- Quick office info inside CTA -->
          <div class="cta-office-strip">
            <span>📍 <strong>Jaipur:</strong> 104, Gurjar Ki Thadi, Mansarovar</span>
            <span class="office-sep">•</span>
            <span>📍 <strong>Bhilwara:</strong> Patel Nagar, Bhilwara</span>
            <span class="office-sep">•</span>
            <span>✉️ hello.campaginx@gmail.com</span>
          </div>

        </div>

      </div>
    </section>
  `;
};
