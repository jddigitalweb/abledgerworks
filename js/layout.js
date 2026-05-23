/* ═══════════════════════════════════════
   AB LEDGERWORKS — SHARED LAYOUT
   Injects nav, footer, and shared JS
   across all pages automatically.
═══════════════════════════════════════ */

(function () {

  /* ─── NAV HTML ─── */
  const navHTML = `
<div class="scroll-progress" id="scrollProgress"></div>

<nav id="navbar">
  <div class="container">
    <a href="index.html" class="nav-logo">
      <img src="logo.png" alt="AB LedgerWorks" class="nav-logo-img">
    </a>

    <ul class="nav-links">
      <li class="nav-item"><a href="index.html">Home</a></li>
      <li class="nav-item"><a href="about.html">About Us</a></li>
      <li class="nav-item">
        <a href="services.html" class="dropdown-toggle">Services</a>
        <div class="dropdown-menu">
          <div class="dropdown-title">Core Services</div>
          <a href="services.html#svc-bookkeeping">Bookkeeping &amp; Accounting</a>
          <a href="services.html#svc-reporting">Financial Reporting &amp; Compliance</a>
          <a href="services.html#svc-cfo">Virtual CFO Services</a>
          <a href="services.html#svc-advisory">Advisory Services</a>
          <a href="services.html#svc-payroll">Payroll Services</a>
          <a href="services.html#svc-analytics">Data &amp; Business Analytics</a>
          <a href="services.html#svc-adhoc">Adhoc Projects &amp; Custom Engagements</a>
        </div>
      </li>
      <li class="nav-item"><a href="pricing.html">Pricing</a></li>
      <li class="nav-item"><a href="contact.html">Contact Us</a></li>
    </ul>

    <div class="nav-cta">
      <a href="contact.html" class="btn btn-primary" style="padding:13px 32px;font-size:0.82rem;">Schedule a Meeting</a>
    </div>

    <button class="hamburger" id="hamburger">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Home</a>
  <a href="about.html">About Us</a>
  <button class="mobile-dropdown-toggle" id="mobileServicesToggle">
    Services
    <span class="mobile-arrow" style="display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid rgba(255,255,255,0.6);transition:transform 0.3s;"></span>
  </button>
  <div class="mobile-dropdown-menu" id="servicesDropdown">
    <a href="services.html#svc-bookkeeping">Bookkeeping &amp; Accounting</a>
    <a href="services.html#svc-reporting">Financial Reporting &amp; Compliance</a>
    <a href="services.html#svc-cfo">Virtual CFO Services</a>
    <a href="services.html#svc-advisory">Advisory Services</a>
    <a href="services.html#svc-payroll">Payroll Services</a>
    <a href="services.html#svc-analytics">Data &amp; Business Analytics</a>
    <a href="services.html#svc-adhoc">Adhoc Projects &amp; Custom Engagements</a>
  </div>
  <a href="pricing.html">Pricing</a>
  <a href="contact.html">Contact Us</a>
  <a href="contact.html" style="background:rgba(43,68,148,0.35);color:rgba(255,255,255,0.92);">Schedule a Meeting →</a>
</div>`;

  /* ─── FOOTER HTML ─── */
  const footerHTML = `
<footer>
  <div class="container">
    <div class="footer-top">

      <div>
        <img src="logo.png" alt="AB LedgerWorks" class="footer-logo-img">
        <p class="footer-brand-desc">Your offshore finance partner — delivering precision accounting, CFO-level advisory, and scalable financial solutions to US and global businesses.</p>
        <div class="footer-social">
          <a href="https://www.linkedin.com/company/ab-ledgerworks-llp/" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="mailto:hello@abledgerworks.com" title="Email" aria-label="Email"><i class="fa-regular fa-envelope"></i></a>
        </div>
      </div>

      <div>
        <div class="footer-col-title">Services</div>
        <ul class="footer-links">
          <li><a href="services.html#svc-bookkeeping">Bookkeeping &amp; Accounting</a></li>
          <li><a href="services.html#svc-reporting">Financial Reporting &amp; Compliance</a></li>
          <li><a href="services.html#svc-cfo">Virtual CFO Services</a></li>
          <li><a href="services.html#svc-advisory">Advisory Services</a></li>
          <li><a href="services.html#svc-payroll">Payroll Services</a></li>
          <li><a href="services.html#svc-analytics">Data &amp; Business Analytics</a></li>
          <li><a href="services.html#svc-adhoc">Adhoc &amp; Custom Engagements</a></li>
        </ul>
      </div>

      <div>
        <div class="footer-col-title">Company</div>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <div class="footer-col-title">Contact</div>
        <div class="footer-contact-item">
          <i class="fa-solid fa-envelope contact-icon"></i>
          <a href="mailto:hello@abledgerworks.com">hello@abledgerworks.com</a>
        </div>
        <div class="footer-contact-item">
          <i class="fa-brands fa-whatsapp contact-icon"></i>
          <a href="https://wa.me/" target="_blank">+1 (XXX) XXX-XXXX</a>
        </div>
        <div class="footer-contact-item">
          <i class="fa-solid fa-location-dot contact-icon"></i>
          <span>Surat, India</span>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <div class="footer-copy">© 2026 AB LedgerWorks. All rights reserved.</div>
      <div class="footer-credit">Made by <a href="https://www.jddigitalweb.in/" target="_blank">JDDigitalWeb</a></div>
    </div>
  </div>
</footer>`;

  /* ─── INJECT ─── */
  document.addEventListener('DOMContentLoaded', function () {

    // Inject nav at top of body
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Inject footer at bottom of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    /* ─── ACTIVE NAV LINK ─── */
    const path = window.location.pathname.replace(/\/$/, '') || '/index.html';
    document.querySelectorAll('.nav-links .nav-item > a:not(.dropdown-toggle)').forEach(link => {
      const href = new URL(link.href).pathname.replace(/\/$/, '');
      if (href === path || (path === '' && href === '/index.html')) {
        link.classList.add('active');
      }
    });

    /* ─── SCROLL: navbar shrink + progress bar ─── */
    const navbar = document.getElementById('navbar');
    const progress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
      if (progress) {
        const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progress.style.width = pct + '%';
      }
    });

    /* ─── HAMBURGER MENU ─── */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    function toggleMenu() {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggleMenu);

    // Close mobile menu on nav link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });

    // Services mobile dropdown
    const mobileServicesToggle = document.getElementById('mobileServicesToggle');
    const servicesDropdown = document.getElementById('servicesDropdown');
    mobileServicesToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      servicesDropdown.classList.toggle('active');
      const arrow = this.querySelector('.mobile-arrow');
      if (arrow) arrow.style.transform = servicesDropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    });

    // Click outside closes mobile menu
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target) && !mobileMenu.contains(e.target) && mobileMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    });

    /* ─── SMOOTH SCROLL for anchor links ─── */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });

    /* ─── PAGE TRANSITION: fade out before navigating ─── */
    document.addEventListener('click', function(e) {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || /^https?:\/\//.test(href) || link.target === '_blank') return;
      e.preventDefault();
      document.body.style.transition = 'opacity 0.25s ease';
      document.body.style.opacity = '0';
      setTimeout(() => { window.location.href = href; }, 260);
    });

  });

})();
