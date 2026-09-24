/**
 * Component: Header & Mobile Drawer Navigation
 * Digital Netagiri
 */
window.DN_Components = window.DN_Components || {};

window.DN_Components.Header = function() {
  return `
  <!-- ========================================================
       1. HEADER & NAVIGATION (DESKTOP + MOBILE DRAWER)
       ======================================================== -->
  <header class="site-header" id="header">
    <div class="container header-container">
      <!-- Brand Logo -->
      <a href="#hero" class="brand-logo" aria-label="Digital Netagiri Homepage">
        <div class="brand-badge-icon">
          <svg viewBox="0 0 40 40" fill="none" class="logo-svg">
            <rect width="40" height="40" rx="10" fill="url(#logo-grad)"/>
            <path d="M12 28V12L22 20L12 28Z" fill="#FFA500"/>
            <path d="M20 12L28 12C31.3137 12 34 14.6863 34 18C34 21.3137 31.3137 24 28 24H22" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round"/>
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2D0B4E"/>
                <stop offset="1" stop-color="#0E162B"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="brand-text">
          <div class="brand-main">
            <span class="brand-name">DIGITAL NETAGIRI</span>
          </div>
          <div class="brand-sub">
            <span class="sub-badge">by CampaignX</span>
            <span class="sub-dot">•</span>
            <span class="sub-tag">Election Tech</span>
          </div>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav" aria-label="Primary Navigation">
        <ul class="nav-list">
          <li><a href="#services" class="nav-link">Services</a></li>
          <li><a href="#chunav-setu" class="nav-link nav-highlight">Chunav Setu <span class="nav-pill">App</span></a></li>
          <li><a href="/internship" class="nav-link nav-internship-item">🎓 Internship <span class="nav-pill">New</span></a></li>
          <li><a href="#how-we-work" class="nav-link">How We Work</a></li>
          <li><a href="#why-us" class="nav-link">Why Us</a></li>
          <li><a href="#team" class="nav-link">Team</a></li>
          <li><a href="#director" class="nav-link">Director</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <!-- Header Action -->
      <div class="header-action">
        <a href="/internship" class="btn btn-internship-header" id="headerInternshipBtn">
          <svg viewBox="0 0 24 24" class="btn-icon" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
          <span class="btn-text-full">🎓 Internship</span>
          <span class="btn-text-short">🎓 Apply</span>
        </a>
        <a href="https://wa.me/916375983593?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20Digital%20Netagiri%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%9A%E0%A5%81%E0%A4%A8%E0%A4%BE%E0%A4%B5%E0%A5%80%20%E0%A4%A1%E0%A4%BF%E0%A4%9C%E0%A4%BF%E0%A4%9F%E0%A4%B2%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%9A%E0%A4%BE%E0%A4%B0%20%2F%20Chunav%20Setu%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%87%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp-header" id="headerWhatsAppBtn">
          <svg viewBox="0 0 24 24" class="btn-icon" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.95 7.42C8.76 7.42 8.46 7.49 8.2 7.77C7.94 8.05 7.21 8.74 7.21 10.14C7.21 11.54 8.23 12.89 8.37 13.08C8.51 13.27 10.37 16.13 13.21 17.36C13.88 17.65 14.41 17.83 14.82 17.96C15.5 18.17 16.12 18.14 16.61 18.07C17.16 17.99 18.29 17.38 18.52 16.73C18.76 16.07 18.76 15.51 18.69 15.39C18.62 15.28 18.43 15.21 18.15 15.07C17.87 14.93 16.49 14.25 16.23 14.16C15.97 14.07 15.79 14.02 15.6 14.3C15.41 14.58 14.88 15.21 14.72 15.39C14.56 15.58 14.39 15.6 14.11 15.46C13.83 15.32 12.94 15.03 11.89 14.09C11.07 13.36 10.51 12.46 10.35 12.18C10.19 11.9 10.33 11.75 10.47 11.61C10.6 11.48 10.76 11.27 10.9 11.11C11.04 10.95 11.09 10.83 11.18 10.65C11.27 10.46 11.23 10.3 11.16 10.16C11.09 10.02 10.53 8.65 10.3 8.09C10.07 7.55 9.84 7.62 9.67 7.61L9.14 7.6C8.95 7.6 8.95 7.42 8.95 7.42Z"/>
          </svg>
          <span class="btn-text-full">WhatsApp Chat</span>
          <span class="btn-text-short">WhatsApp</span>
        </a>

        <!-- Mobile Menu Toggle Button (Hamburger ☰) -->
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open Navigation Menu" aria-expanded="false" aria-controls="mobileDrawer">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Slide Drawer -->
    <div class="mobile-drawer" id="mobileDrawer" aria-hidden="true">
      <div class="mobile-drawer-content">
        <div class="mobile-drawer-header">
          <div>
            <div class="mobile-brand-title">Digital Netagiri</div>
            <div class="mobile-brand-sub">by CampaignX</div>
          </div>
          <!-- Explicit Close Button -->
          <button class="mobile-drawer-close-btn" id="mobileDrawerCloseBtn" aria-label="Close Navigation Menu" title="Close Menu">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Featured Mobile Internship Card -->
        <a href="/internship" class="mobile-featured-internship-box">
          <div class="m-int-tag">ADMISSIONS OPEN • UG & PG</div>
          <div class="m-int-title">🎓 FutureX Internship Program</div>
          <div class="m-int-desc">100% Remote • Mentor-Guided • Real Projects</div>
          <span class="m-int-cta">Apply for Internship →</span>
        </a>

        <ul class="mobile-nav-list">
          <li><a href="#hero" class="mobile-nav-link">Home</a></li>
          <li><a href="#services" class="mobile-nav-link">Services</a></li>
          <li><a href="#chunav-setu" class="mobile-nav-link">Chunav Setu App <span class="badge-mini">Live</span></a></li>
          <li><a href="/internship" class="mobile-nav-link" style="color: var(--orange-light); font-weight: 700; border-color: rgba(255, 122, 0, 0.4);">🎓 Internship Program <span class="badge-mini">Apply</span></a></li>
          <li><a href="#how-we-work" class="mobile-nav-link">How We Work</a></li>
          <li><a href="#why-us" class="mobile-nav-link">Why Digital Netagiri</a></li>
          <li><a href="#team" class="mobile-nav-link">Team</a></li>
          <li><a href="#director" class="mobile-nav-link">Director Profile</a></li>
          <li><a href="#contact" class="mobile-nav-link">Contact Us</a></li>
        </ul>
        <div class="mobile-drawer-footer">
          <a href="tel:+916375983593" class="btn btn-call-mobile">
            <svg viewBox="0 0 24 24" class="btn-icon" fill="currentColor">
              <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
            </svg>
            <span>Call: 6375983593</span>
          </a>
          <a href="https://wa.me/916375983593?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20Digital%20Netagiri%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%9A%E0%A5%81%E0%A4%A8%E0%A4%BE%E0%A4%B5%E0%A5%80%20%E0%A4%A1%E0%A4%BF%E0%A4%9C%E0%A4%BF%E0%A4%9F%E0%A4%B2%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%9A%E0%A4%BE%E0%A4%B0%20%2F%20Chunav%20Setu%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%87%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
            <span>WhatsApp पर मैसेज करें</span>
          </a>
        </div>
      </div>
    </div>
  </header>
  `;
};
