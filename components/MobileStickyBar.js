/**
 * Component: Mobile Sticky Bottom Action Bar
 * Digital Netagiri
 */
window.DN_Components = window.DN_Components || {};

window.DN_Components.MobileStickyBar = function() {
  return `
  <!-- ========================================================
       10. MOBILE CALL + WHATSAPP BAR (Fixed Bottom)
       ======================================================== -->
  <div class="mobile-sticky-bar" id="mobileStickyBar" aria-label="Quick Mobile Actions">
    <a href="/internship" class="mobile-bar-btn btn-internship-bar" id="mobileBarInternshipBtn">
      <svg viewBox="0 0 24 24" class="btn-icon" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
      <span>Internship</span>
    </a>
    <a href="tel:+916375983593" class="mobile-bar-btn btn-call" id="mobileBarCallBtn">
      <svg viewBox="0 0 24 24" class="btn-icon" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      <span>Call Now</span>
    </a>
    <a href="https://wa.me/916375983593?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20Digital%20Netagiri%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%9A%E0%A5%81%E0%A4%A8%E0%A4%BE%E0%A4%B5%E0%A5%80%20%E0%A4%A1%E0%A4%BF%E0%A4%9C%E0%A4%BF%E0%A4%9F%E0%A4%B2%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%9A%E0%A4%BE%E0%A4%B0%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%87%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4" target="_blank" rel="noopener noreferrer" class="mobile-bar-btn btn-wa" id="mobileBarWhatsAppBtn">
      <svg viewBox="0 0 24 24" class="btn-icon" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.95 7.42C8.76 7.42 8.46 7.49 8.2 7.77C7.94 8.05 7.21 8.74 7.21 10.14C7.21 11.54 8.23 12.89 8.37 13.08C8.51 13.27 10.37 16.13 13.21 17.36C13.88 17.65 14.41 17.83 14.82 17.96C15.5 18.17 16.12 18.14 16.61 18.07C17.16 17.99 18.29 17.38 18.52 16.73C18.76 16.07 18.76 15.51 18.69 15.39C18.62 15.28 18.43 15.21 18.15 15.07C17.87 14.93 16.49 14.25 16.23 14.16C15.97 14.07 15.79 14.02 15.6 14.3C15.41 14.58 14.88 15.21 14.72 15.39C14.56 15.58 14.39 15.6 14.11 15.46C13.83 15.32 12.94 15.03 11.89 14.09C11.07 13.36 10.51 12.46 10.35 12.18C10.19 11.9 10.33 11.75 10.47 11.61C10.6 11.48 10.76 11.27 10.9 11.11C11.04 10.95 11.09 10.83 11.18 10.65C11.27 10.46 11.23 10.3 11.16 10.16C11.09 10.02 10.53 8.65 10.3 8.09C10.07 7.55 9.84 7.62 9.67 7.61L9.14 7.6C8.95 7.6 8.95 7.42 8.95 7.42Z"/>
      </svg>
      <span>WhatsApp</span>
    </a>
  </div>
  `;
};
