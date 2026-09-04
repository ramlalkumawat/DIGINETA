/**
 * DIGITAL NETAGIRI • Interactive Client Logic
 * Pure Vanilla JavaScript • High Performance & Zero Bloat
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initSmoothScroll();
  initChunavSetuDemo();
  initPortfolioLightbox();
  initCtaSelector();
  initScrollReveal();
  initLiveSyncClock();
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
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !drawer) return;

  const toggleMenu = () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    drawer.classList.add('open');
    menuBtn.classList.add('active');
    menuBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    drawer.classList.remove('open');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  menuBtn.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });
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

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
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
    });
  });
}

/* ========================================================
   5. PORTFOLIO LIGHTBOX MODAL
   ======================================================== */
function initPortfolioLightbox() {
  const cards = document.querySelectorAll('.portfolio-card');
  const modal = document.getElementById('lightboxModal');
  const backdrop = document.getElementById('lightboxBackdrop');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');

  if (!cards.length || !modal || !lightboxImg) return;

  const portfolioItems = [
    {
      src: 'assets/portfolio_1.png',
      alt: 'Chunav Setu • Election Management',
      caption: 'Chunav Setu • सम्पूर्ण चुनाव प्रबंधन, रणनीति एवं डैशबोर्ड सिस्टम'
    },
    {
      src: 'assets/portfolio_2.png',
      alt: 'Political Video & Editing',
      caption: 'Political Video & Editing • सोशल मीडिया प्रबंधन, रील्स एवं वायरल कंटेंट'
    },
    {
      src: 'assets/portfolio_3.png',
      alt: 'Hyper Local Meta Ads',
      caption: 'Hyper Local Meta Ads • 8-पिलर डिजिटल मार्केटिंग एवं रीच अभियान'
    },
    {
      src: 'assets/portfolio_4.png',
      alt: 'Digital Election Services',
      caption: 'Digital Election Services • रणनीति, तकनीक एवं ग्राउंड मैनेजमेंट'
    }
  ];

  let currentIndex = 0;

  const showImage = (index) => {
    if (index < 0) index = portfolioItems.length - 1;
    if (index >= portfolioItems.length) index = 0;
    currentIndex = index;

    const item = portfolioItems[currentIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightboxCaption.textContent = item.caption;
  };

  const openLightbox = (index) => {
    showImage(index);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  cards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      openLightbox(idx);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showImage(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showImage(currentIndex + 1);
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });

  // Touch Swipe for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  const handleSwipe = () => {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        showImage(currentIndex - 1);
      } else {
        showImage(currentIndex + 1);
      }
    }
  };
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
