/**
 * DIGITAL NETAGIRI • Main Application Entry & Component Orchestrator
 * Pure Vanilla JavaScript • High Performance & Zero Build Dependency
 */
(function() {
  function renderApp() {
    const appContainer = document.getElementById('app');
    if (!appContainer) return;

    const C = window.DN_Components || {};

    // Assemble the complete page structure from modular components
    const headerHtml = (typeof C.Header === 'function') ? C.Header() : '';
    const heroHtml = (typeof C.Hero === 'function') ? C.Hero() : '';
    const servicesHtml = (typeof C.Services === 'function') ? C.Services() : '';
    const chunavSetuHtml = (typeof C.ChunavSetu === 'function') ? C.ChunavSetu() : '';
    const howWeWorkHtml = (typeof C.HowWeWork === 'function') ? C.HowWeWork() : '';
    const whyUsHtml = (typeof C.WhyUs === 'function') ? C.WhyUs() : '';
    const directorHtml = (typeof C.Director === 'function') ? C.Director() : '';
    const teamHtml = (typeof C.Team === 'function') ? C.Team() : '';
    const contactHtml = (typeof C.Contact === 'function') ? C.Contact() : '';
    const footerHtml = (typeof C.Footer === 'function') ? C.Footer() : '';
    const mobileStickyBarHtml = (typeof C.MobileStickyBar === 'function') ? C.MobileStickyBar() : '';
    const scrollToTopHtml = (typeof C.ScrollToTop === 'function') ? C.ScrollToTop() : '';

    appContainer.innerHTML = `
      ${headerHtml}
      <main id="main-content">
        ${heroHtml}
        ${servicesHtml}
        ${chunavSetuHtml}
        ${howWeWorkHtml}
        ${whyUsHtml}
        ${directorHtml}
        ${teamHtml}
        ${contactHtml}
      </main>
      ${footerHtml}
      ${mobileStickyBarHtml}
      ${scrollToTopHtml}
    `;

    // Handle hash navigation if user landed with #team, #services, etc.
    if (window.location.hash) {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }

  // Render immediately if root container is ready, or wait for DOMContentLoaded
  if (typeof document !== 'undefined') {
    if (document.getElementById('app')) {
      renderApp();
    } else if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', renderApp, { once: true });
    } else {
      renderApp();
    }
  }
})();
