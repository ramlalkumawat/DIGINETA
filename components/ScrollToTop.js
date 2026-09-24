/**
 * Component: Floating Scroll To Top Button
 * Digital Netagiri
 */
window.DN_Components = window.DN_Components || {};

window.DN_Components.ScrollToTop = function() {
  return `
  <!-- ========================================================
       11. FLOATING SCROLL TO TOP BUTTON
       ======================================================== -->
  <button class="scroll-to-top-btn" id="scrollToTopBtn" aria-label="ऊपर स्क्रॉल करें (Scroll to top)" title="Scroll to top">
    <svg viewBox="0 0 24 24" class="top-icon" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="18 15 12 9 6 15"/>
    </svg>
    <span class="top-tooltip">Top</span>
  </button>
  `;
};
