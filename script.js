/**
 * DIGITAL NETAGIRI • Interactive Client Logic
 * Pure Vanilla JavaScript • High Performance & Zero Bloat
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initSmoothScroll();
  initChunavSetuDemo();
  initChunavSetuAutoCycle();
  initHeroFeedTicker();
  initScrollToTop();
  initCtaSelector();
  initScrollReveal();
  initLiveSyncClock();
  initFaqAccordion();
});

/* ========================================================
   1. STICKY HEADER
   ======================================================== */
function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ========================================================
   2. MOBILE DRAWER NAVIGATION
   ======================================================== */
function initMobileDrawer() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('mobileDrawerCloseBtn');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !drawer) return;

  const openMenu = () => {
    drawer.classList.add('open');
    menuBtn.classList.add('active');
    menuBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    drawer.classList.remove('open');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');
    document.body.style.overflow = '';
  };

  const toggleMenu = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // 1. Hamburger button toggles menu (CLOSED -> click -> OPEN, OPEN -> click -> CLOSED)
  menuBtn.addEventListener('click', toggleMenu);

  // 2. Dedicated close button inside drawer header
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  }

  // 3. Navigation links: close menu only when an item is explicitly clicked to navigate
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // 4. Keyboard accessibility: close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });

  // Strict Rule: NO automatic timeouts, NO outside-click auto-dismissal, NO delayed state resets.
  // The menu remains open indefinitely until the user explicitly closes it.
}

/* ========================================================
   3. SMOOTH SCROLLING FOR INTERNAL LINKS
   ======================================================== */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ========================================================
   4. CHUNAV SETU INTERACTIVE SAAS DEMO
   ======================================================== */
function initChunavSetuDemo() {
  const filterBtns = document.querySelectorAll('#wardFilterBtns .filter-btn');
  const saasVoters = document.getElementById('saasVoters');
  const saasVolunteers = document.getElementById('saasVolunteers');
  const saasBooths = document.getElementById('saasBooths');
  const saasHealth = document.getElementById('saasHealth');
  const tableBody = document.getElementById('boothTableBody');

  if (!filterBtns.length || !tableBody) return;

  const wardData = {
    all: {
      voters: '12,45,000',
      volunteers: '1,120',
      booths: '180 / 195',
      health: '98.4%',
      rows: [
        { booth: '#01', loc: 'राजकीय विद्यालय कक्ष 1', incharge: 'महेश शर्मा', voters: '940', status: 'Ready (100%)', type: 'ready' },
        { booth: '#02', loc: 'सामुदायिक केंद्र, मुख्य मार्ग', incharge: 'सुरेश कुमार', voters: '1,120', status: 'Ready (95%)', type: 'ready' },
        { booth: '#03', loc: 'वार्ड कार्यालय परिसर', incharge: 'राकेश वर्मा', voters: '850', status: 'In Progress', type: 'progress' },
        { booth: '#04', loc: 'आदर्श बाल विद्या मंदिर', incharge: 'अनिल जोशी', voters: '1,030', status: 'Ready (98%)', type: 'ready' }
      ]
    },
    central: {
      voters: '4,20,500',
      volunteers: '380',
      booths: '60 / 65',
      health: '99.1%',
      rows: [
        { booth: '#02', loc: 'सामुदायिक केंद्र, मुख्य मार्ग', incharge: 'सुरेश कुमार', voters: '1,120', status: 'Ready (95%)', type: 'ready' },
        { booth: '#05', loc: 'नगर पालिका प्राथमिक भवन', incharge: 'दिलीप सैनी', voters: '890', status: 'Ready (100%)', type: 'ready' },
        { booth: '#08', loc: 'गांधी पुस्तकालय हॉल', incharge: 'विकास चौधरी', voters: '760', status: 'Ready (94%)', type: 'ready' },
        { booth: '#11', loc: 'सिविल लाइन्स क्लब रूम', incharge: 'अमित मिश्रा', voters: '980', status: 'In Progress', type: 'progress' }
      ]
    },
    east: {
      voters: '3,95,000',
      volunteers: '345',
      booths: '58 / 65',
      health: '97.8%',
      rows: [
        { booth: '#16', loc: 'किसान भवन सभाकक्ष', incharge: 'कैलाश गुर्जर', voters: '1,050', status: 'Ready (96%)', type: 'ready' },
        { booth: '#19', loc: 'राजकीय कन्या उच्च माध्यमिक', incharge: 'संगीता शर्मा', voters: '820', status: 'Ready (100%)', type: 'ready' },
        { booth: '#23', loc: 'वार्ड 23 विकास समिति कक्ष', incharge: 'प्रमोद यादव', voters: '910', status: 'In Progress', type: 'progress' },
        { booth: '#28', loc: 'रेलवे कॉलोनी सामुदायिक भवन', incharge: 'दीपक राठौड़', voters: '1,140', status: 'Ready (99%)', type: 'ready' }
      ]
    },
    west: {
      voters: '4,29,500',
      volunteers: '395',
      booths: '62 / 65',
      health: '98.5%',
      rows: [
        { booth: '#31', loc: 'मॉडल पब्लिक स्कूल', incharge: 'नरेंद्र सिंह', voters: '1,200', status: 'Ready (100%)', type: 'ready' },
        { booth: '#36', loc: 'व्यापार मंडल भवन', incharge: 'गोविंद कुमावत', voters: '970', status: 'Ready (97%)', type: 'ready' },
        { booth: '#40', loc: 'पंचायत समिति सभागार', incharge: 'भगवान सहाय', voters: '840', status: 'Ready (95%)', type: 'ready' },
        { booth: '#44', loc: 'विवेकानंद केंद्र', incharge: 'हेमंत शर्मा', voters: '1,010', status: 'In Progress', type: 'progress' }
      ]
    }
  };

  window.updateChunavSetuWard = (btn) => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const wardKey = btn.getAttribute('data-ward') || 'all';
    const data = wardData[wardKey];
    if (!data) return;

    // Animate updates
    saasVoters.textContent = data.voters;
    saasVolunteers.textContent = data.volunteers;
    saasBooths.textContent = data.booths;
    saasHealth.textContent = data.health;

    // Render table rows
    tableBody.innerHTML = data.rows.map(row => `
      <tr>
        <td><strong>${row.booth}</strong></td>
        <td>${row.loc}</td>
        <td>${row.incharge}</td>
        <td>${row.voters}</td>
        <td><span class="status-pill ${row.type === 'ready' ? 'status-ready' : 'status-progress'}">${row.status}</span></td>
      </tr>
    `).join('');
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (typeof window.updateChunavSetuWard === 'function') {
        window.updateChunavSetuWard(btn);
      }
    });
  });
}



/* ========================================================
   6. CONTACT INTERACTIVE CHIP SELECTOR & WHATSAPP GENERATOR
   ======================================================== */
function initCtaSelector() {
  const chips = document.querySelectorAll('#selectorChips .chip');
  const dynamicBtn = document.getElementById('ctaDynamicWhatsAppBtn');
  if (!chips.length || !dynamicBtn) return;

  const basePhone = '916375983593';

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const electionType = chip.getAttribute('data-type') || 'चुनावी डिजिटल प्रचार';
      const customMessage = `नमस्ते Digital Netagiri, मुझे *${electionType}* के लिए चुनावी डिजिटल रणनीति एवं पैकेज के बारे में चर्चा करनी है।`;
      const encodedMsg = encodeURIComponent(customMessage);

      dynamicBtn.href = `https://wa.me/${basePhone}?text=${encodedMsg}`;
    });
  });
}

/* ========================================================
   7. SCROLL REVEAL (INTERSECTION OBSERVER)
   ======================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('revealed'));
  }
}

/* ========================================================
   8. LIVE SYNC CLOCK SIMULATOR
   ======================================================== */
function initLiveSyncClock() {
  const syncTimerEl = document.getElementById('liveSyncTimer');
  if (!syncTimerEl) return;

  const updateTime = () => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    syncTimerEl.textContent = timeStr;
  };

  updateTime();
  setInterval(updateTime, 10000);
}

/* ========================================================
   9. CHUNAV SETU SAAS AUTO-CYCLE DEMO
   ======================================================== */
function initChunavSetuAutoCycle() {
  const filterBtns = document.querySelectorAll('#wardFilterBtns .filter-btn');
  const saasWindow = document.querySelector('.saas-window');
  if (!filterBtns.length || !saasWindow) return;

  let currentBtnIdx = 0;
  let autoCycleTimer = null;
  let isUserInteracting = false;
  let resumeTimeout = null;

  const drawer = document.getElementById('mobileDrawer');

  const cycleNext = () => {
    if (isUserInteracting) return;
    // Do not cycle while mobile drawer is open
    if (drawer && drawer.classList.contains('open')) return;

    currentBtnIdx = (currentBtnIdx + 1) % filterBtns.length;
    const targetBtn = filterBtns[currentBtnIdx];
    if (targetBtn && typeof window.updateChunavSetuWard === 'function') {
      window.updateChunavSetuWard(targetBtn);
    }
  };

  const startAutoCycle = () => {
    if (autoCycleTimer) clearInterval(autoCycleTimer);
    autoCycleTimer = setInterval(cycleNext, 4500);
  };

  const pauseAutoCycle = () => {
    if (autoCycleTimer) {
      clearInterval(autoCycleTimer);
      autoCycleTimer = null;
    }
  };

  // When user clicks any tab manually, pause auto-cycling for 12 seconds
  filterBtns.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
      if (!e.isTrusted) return; // Ignore programmatic clicks
      currentBtnIdx = idx;
      isUserInteracting = true;
      pauseAutoCycle();

      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        isUserInteracting = false;
        startAutoCycle();
      }, 12000);
    });
  });

  // Pause on hover
  saasWindow.addEventListener('mouseenter', pauseAutoCycle);
  saasWindow.addEventListener('mouseleave', () => {
    if (!isUserInteracting) startAutoCycle();
  });

  startAutoCycle();
}

/* ========================================================
   10. HERO ACTIVITY FEED AUTO-TICKER
   ======================================================== */
function initHeroFeedTicker() {
  const feedList = document.querySelector('.feed-list');
  if (!feedList) return;

  const extraFeedItems = [
    { booth: 'Ward 24 Booth 08', text: '512 WhatsApp voter slips delivered', time: '1m ago' },
    { booth: 'Central War Room', text: 'Ground volunteer check-in completed (98%)', time: '3m ago' },
    { booth: 'Hyper Local Ads', text: '1,45,000+ targeted impressions recorded', time: '4m ago' },
    { booth: 'Ward 12 In-charge', text: 'Voter rally live video streamed (18k views)', time: '7m ago' }
  ];

  const drawer = document.getElementById('mobileDrawer');

  setInterval(() => {
    if (drawer && drawer.classList.contains('open')) return;
    const itemData = extraFeedItems[feedIdx];
    feedIdx = (feedIdx + 1) % extraFeedItems.length;

    const li = document.createElement('li');
    li.className = 'feed-item feed-item-new';
    li.innerHTML = `
      <span class="feed-dot"></span>
      <div class="feed-text">
        <strong>${itemData.booth}:</strong> ${itemData.text}
      </div>
      <span class="feed-time">${itemData.time}</span>
    `;

    feedList.insertBefore(li, feedList.firstChild);

    // Keep max 3 items
    while (feedList.children.length > 3) {
      feedList.removeChild(feedList.lastChild);
    }
  }, 4000);
}

/* ========================================================
   11. FLOATING SCROLL TO TOP BUTTON
   ======================================================== */
function initScrollToTop() {
  const scrollBtn = document.getElementById('scrollToTopBtn');
  if (!scrollBtn) return;

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ========================================================
   12. INTERNSHIP FAQ ACCORDION
   ======================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other open FAQ items for a clean single-open accordion feel
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}


