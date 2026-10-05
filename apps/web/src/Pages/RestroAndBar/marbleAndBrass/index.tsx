import { useEffect } from 'react';
import './MarbleAndBrass.css';

export default function MarbleAndBrassPage() {
  useEffect(() => {
    const eventController = new AbortController();
    const observers: IntersectionObserver[] = [];
    let loadTimer: ReturnType<typeof setTimeout> | undefined;
    let toastTimer: ReturnType<typeof setTimeout> | undefined;
    let resetTimer: ReturnType<typeof setTimeout> | undefined;
    let scrollRaf: ReturnType<typeof requestAnimationFrame> | null = null;

    const board = document.getElementById('preloadBoard');
    if (board) {
      for (let i = 0; i < 48; i++) {
        const t = document.createElement('div');
        t.style.animationDelay = (i * 0.018) + 's';
        board.appendChild(t);
      }
    }
    function hidePreloader() {
      const p = document.getElementById('preloader');
      if (p) p.classList.add('hide');
    }
    function onWindowLoad() {
      loadTimer = setTimeout(hidePreloader, 1700);
    }
    window.addEventListener('load', onWindowLoad, { signal: eventController.signal });
    const preloaderTimer = setTimeout(hidePreloader, 3200);

    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) {
      heroVideo.addEventListener('canplay', () => heroVideo.classList.add('ready'), { signal: eventController.signal });
    }

    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
      navToggle.addEventListener('click', () => navLinks.classList.toggle('open'), { signal: eventController.signal });
      navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open'), { signal: eventController.signal }));
    }

    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 30);
    }, { signal: eventController.signal });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    observers.push(revealObserver);
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    function animateCounter(el: HTMLElement) {
      const target = parseFloat(el.dataset.target || '0');
      const suffix = el.dataset.suffix || '';
      const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals, 10) : 0;
      const duration = 1600;
      const start = performance.now();
      function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = (target * eased).toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target.toFixed(decimals) + suffix;
      }
      requestAnimationFrame(tick);
    }
    const statsRow = document.querySelector('.stats-row');
    if (statsRow) {
      const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.stat-num').forEach(animateCounter);
            statObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      observers.push(statObserver);
      statObserver.observe(statsRow);
    }

    let reservationBodyDefault = '';
    function openModal(id: string) {
      const modal = document.getElementById(id);
      if (modal) { modal.classList.add('open'); document.body.style.overflow = 'hidden'; }
    }
    function closeModal(id: string) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        if (id === 'reservationModal') {
          const reservationBodyEl = document.getElementById('reservationBody');
          if (reservationBodyEl) {
            resetTimer = setTimeout(() => { reservationBodyEl.innerHTML = reservationBodyDefault; attachReservationHandler(); }, 300);
          }
        }
      }
    }
    const reservationBodyEl = document.getElementById('reservationBody');
    if (reservationBodyEl) reservationBodyDefault = reservationBodyEl.innerHTML;

    function attachReservationHandler() {
      const form = document.getElementById('reservationForm');
      if (!form) return;
      const dateInput = document.getElementById('resDate') as HTMLInputElement;
      if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
      form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const name = (document.getElementById('resName') as HTMLInputElement)?.value.trim() || '';
        const phone = (document.getElementById('resPhone') as HTMLInputElement)?.value.replace(/\D/g, '') || '';
        const date = (document.getElementById('resDate') as HTMLInputElement)?.value || '';
        const time = (document.getElementById('resTime') as HTMLInputElement)?.value || '';
        const guests = (document.getElementById('resGuests') as HTMLInputElement)?.value || '';
        const notes = (document.getElementById('resNotes') as HTMLTextAreaElement)?.value.trim() || '';
        if (!name || phone.length < 10 || !date || !time || !guests) {
          showToast('Please fill in all required fields');
          return;
        }
        await saveLead({ name, phone, date, time, guests, notes, type: 'reservation', ts: Date.now() });
        const waMsg = encodeURIComponent('Hi! I would like to confirm a reservation for ' + guests + ' guest(s) on ' + date + ' at ' + time + '. My name is ' + name + '.');
        if (reservationBodyEl) {
          reservationBodyEl.replaceChildren();
          const resultEmoji = document.createElement('div');
          resultEmoji.className = 'result-emoji';
          resultEmoji.textContent = '\u2705';
          const heading = document.createElement('h3');
          heading.style.textAlign = 'center';
          heading.textContent = `Thank you, ${name}!`;
          const message = document.createElement('p');
          message.style.textAlign = 'center';
          message.style.opacity = '.75';
          message.textContent = `We have received your request for ${guests} guest(s) on ${date} at ${time}. Our team will confirm shortly or tap below to confirm instantly on WhatsApp.`;
          const whatsappLink = document.createElement('a');
          whatsappLink.className = 'btn btn-whatsapp btn-block';
          whatsappLink.target = '_blank';
          whatsappLink.rel = 'noopener';
          whatsappLink.href = `https://wa.me/910000000000?text=${waMsg}`;
          whatsappLink.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Confirm on WhatsApp';
          reservationBodyEl.append(resultEmoji, heading, message, whatsappLink);
        }
      }, { signal: eventController.signal });
    }
    if (reservationBodyEl) attachReservationHandler();

    document.querySelectorAll('[data-open]').forEach(btn => {
      btn.addEventListener('click', (e) => { e.preventDefault(); openModal((btn as HTMLElement).dataset.open || ''); }, { signal: eventController.signal });
    });
    document.querySelectorAll('[data-close]').forEach(btn => {
      btn.addEventListener('click', () => { closeModal((btn as HTMLElement).dataset.close || ''); }, { signal: eventController.signal });
    });
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(overlay.id); }, { signal: eventController.signal });
    });

    function showToast(msg: string) {
      const toast = document.getElementById('toast');
      if (toast) { toast.textContent = msg; toast.classList.add('show'); if (toastTimer) clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 3000); }
    }

    async function saveLead(entry: Record<string, string | number>) {
      try {
        const key = `lead:${Date.now()}:${Math.random().toString(36).slice(2, 7)}`;
        window.localStorage.setItem(key, JSON.stringify(entry));
      } catch (err) { console.warn('Storage unavailable', err); }
    }

    const menuDrawer = document.getElementById('menuDrawer');
    const drawerOverlay = document.getElementById('drawerOverlay');
    function openDrawer() {
      if (menuDrawer && drawerOverlay) { menuDrawer.classList.add('open'); drawerOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
    }
    function closeDrawer() {
      if (menuDrawer && drawerOverlay) { menuDrawer.classList.remove('open'); drawerOverlay.classList.remove('open'); document.body.style.overflow = ''; }
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
        if (menuDrawer?.classList.contains('open')) closeDrawer();
      }
    }, { signal: eventController.signal });

    const track = document.getElementById('carTrack');
    const cards = track ? Array.from(track.querySelectorAll<HTMLElement>('.dish-card')) : [];
    const dotsWrap = document.getElementById('carDots');
    if (dotsWrap && cards.length > 0) {
      cards.forEach((_, i) => {
        const dot = document.createElement('span');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => { if (track) track.scrollTo({ left: cards[i].offsetLeft - track.offsetLeft, behavior: 'smooth' }); }, { signal: eventController.signal });
        dotsWrap.appendChild(dot);
      });
    }
    const carPrev = document.getElementById('carPrev');
    const carNext = document.getElementById('carNext');
    if (carPrev && track) carPrev.addEventListener('click', () => track.scrollBy({ left: -312, behavior: 'smooth' }), { signal: eventController.signal });
    if (carNext && track) carNext.addEventListener('click', () => track.scrollBy({ left: 312, behavior: 'smooth' }), { signal: eventController.signal });
    if (track) {
      track.addEventListener('scroll', () => {
        if (scrollRaf) return;
        scrollRaf = requestAnimationFrame(() => {
          let closest = 0, minDist = Infinity;
          cards.forEach((card, i) => {
            const dist = Math.abs(card.offsetLeft - track.scrollLeft - track.offsetLeft);
            if (dist < minDist) { minDist = dist; closest = i; }
          });
          if (dotsWrap) dotsWrap.querySelectorAll('span').forEach((d, i) => d.classList.toggle('active', i === closest));
          scrollRaf = null;
        });
      }, { signal: eventController.signal });
    }

    function openDishModal(card: HTMLElement) {
      const d = card.dataset;
      const dishModalVisual = document.getElementById('dishModalVisual');
      const dishModalEmoji = document.getElementById('dishModalEmoji');
      const tagEl = document.getElementById('dishModalTag');
      const dishModalDiet = document.getElementById('dishModalDiet');
      const dishModalName = document.getElementById('dishModalName');
      const dishModalDesc = document.getElementById('dishModalDesc');
      const dishModalPrice = document.getElementById('dishModalPrice');
      const dishModalSpice = document.getElementById('dishModalSpice');
      if (dishModalVisual && d.visual) dishModalVisual.style.background = d.visual;
      if (dishModalEmoji && d.emoji) dishModalEmoji.textContent = d.emoji;
      if (tagEl) { tagEl.textContent = d.tag || ''; tagEl.style.display = d.tag ? 'inline-block' : 'none'; }
      if (dishModalDiet && d.diet) dishModalDiet.className = 'diet-dot ' + d.diet;
      if (dishModalName && d.name) dishModalName.textContent = d.name;
      if (dishModalDesc && d.desc) dishModalDesc.textContent = d.desc;
      if (dishModalPrice && d.price) dishModalPrice.textContent = d.price;
      if (dishModalSpice && d.spice) {
        const spiceLevel = parseInt(d.spice, 10);
        dishModalSpice.textContent = spiceLevel > 0 ? '\u263A\uFE0F'.repeat(spiceLevel) : '';
      }
      openModal('dishModal');
    }
    document.querySelectorAll('.dish-card').forEach(card => { card.addEventListener('click', () => openDishModal(card as HTMLElement), { signal: eventController.signal }); });

    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const email = (document.getElementById('newsEmail') as HTMLInputElement)?.value.trim() || '';
        if (!email || !email.includes('@')) { showToast('Please enter a valid email'); return; }
        await saveLead({ email, type: 'newsletter', ts: Date.now() });
        if (newsletterForm) newsletterForm.style.display = 'none';
        const newsletterSuccess = document.getElementById('newsletterSuccess');
        if (newsletterSuccess) newsletterSuccess.style.display = 'block';
      }, { signal: eventController.signal });
    }

    const fabStack = document.getElementById('fabStack');
    const fabMain = document.getElementById('fabMain');
    if (fabMain && fabStack) {
      fabMain.addEventListener('click', () => fabStack.classList.toggle('open'), { signal: eventController.signal });
      document.querySelectorAll('.fab-item a, .fab-item button').forEach(el => {
        el.addEventListener('click', () => setTimeout(() => fabStack.classList.remove('open'), 200), { signal: eventController.signal });
      });
      document.addEventListener('click', (e) => {
        if (fabStack.classList.contains('open') && !fabStack.contains(e.target as Node)) fabStack.classList.remove('open');
      }, { signal: eventController.signal });
    }

    const fabMenuBtn = document.getElementById('fabMenuBtn');
    const drawerClose = document.getElementById('drawerClose');
    if (fabMenuBtn) fabMenuBtn.addEventListener('click', openDrawer, { signal: eventController.signal });
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer, { signal: eventController.signal });
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer, { signal: eventController.signal });
    document.querySelectorAll('.drawer-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.drawer-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.drawer-panel').forEach(p => {
          p.classList.toggle('active', (p as HTMLElement).dataset.cat === (tab as HTMLElement).dataset.cat);
        });
      }, { signal: eventController.signal });
    });

    return () => {
      eventController.abort();
      observers.forEach(observer => observer.disconnect());
      clearTimeout(preloaderTimer);
      if (loadTimer) clearTimeout(loadTimer);
      if (toastTimer) clearTimeout(toastTimer);
      if (resetTimer) clearTimeout(resetTimer);
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1F3A2E" />
        <title>Marble & Brass — Bar & Kitchen</title>
        <meta name="description" content="Bombay-style cafe by morning, cocktail bar by night. Reserve a table, browse the menu, and find us - powered by Knectaa." />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>%E2%99%A6</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Schibsted+Grotesk:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

      <div id="preloader">
        <div className="preload-board" id="preloadBoard"></div>
        <div className="preload-word">Marble <span>&amp;</span> Brass</div>
      </div>

      <nav className="navbar" id="mainNav">
        <div className="container nav-inner">
          <a href="#home" className="logo">Marble <span>&</span> Brass<small className="logo-sub">BAR & KITCHEN</small></a>
          <ul className="nav-links" id="navLinks">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#story">Story</a></li>
            <li><a href="#" className="nav-cta" data-open="reservationModal">Reserve</a></li>
          </ul>
          <button className="nav-toggle" id="navToggle" aria-label="Toggle menu"><i className="fa-solid fa-bars"></i></button>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-glow" aria-hidden="true"><span></span><span></span></div>
        <video className="hero-video" id="heroVideo" autoPlay muted loop playsInline preload="none" aria-hidden="true">
          <source src="hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-scrim" aria-hidden="true"></div>
        <div className="hero-content">
          <span className="tag on-dark">Bombay-Style Café &amp; Bar</span>
          <h1 className="hero-title">
            <span className="line1">Chai by Morning.</span>
            <span className="line2">Cocktails by Night.</span>
          </h1>
          <p className="sub">Marble tables, brass fittings, and a menu that does not choose sides from filter kaapi at 8am to a smoked negroni at 11pm.</p>
          <div className="hero-ctas">
            <a href="#" className="btn btn-primary" data-open="reservationModal"><i className="fa-solid fa-calendar-check"></i> Reserve a Table</a>
            <a href="#menu" className="btn btn-ghost"><i className="fa-solid fa-book-open"></i> See the Menu</a>
          </div>
        </div>
        <a href="#menu" className="scroll-cue" aria-label="Scroll down"><i className="fa-solid fa-chevron-down"></i></a>
      </section>

      <div className="checker-strip" aria-hidden="true"></div>

      <section className="section on-bottle" id="menu">
        <div className="container">
          <div className="section-head reveal">
            <span className="tag on-dark">Signatures</span>
            <h2>From The Kitchen</h2>
            <p>A taste of the room, morning and night. Tap any dish for a closer look.</p>
          </div>
        </div>
        <div className="carousel-wrap">
          <button className="carousel-arrow prev" id="carPrev" aria-label="Previous dish"><i className="fa-solid fa-chevron-left"></i></button>
          <div className="carousel-track" id="carTrack">
            <div className="dish-card" data-name="Filter Kaapi" data-desc="Slow-filtered, frothed tableside the old way." data-price="₹90" data-diet="veg" data-spice="0" data-tag="Morning" data-visual="linear-gradient(160deg,var(--bottle-deep),var(--brass))" data-emoji="☕">
              <div className="dish-visual" style={{ background: 'linear-gradient(160deg,var(--bottle-deep),var(--brass))' }}>
                <span className="dish-tag">Morning</span>
                <span className="diet-dot veg" title="Vegetarian"></span>
                <span className="dish-emoji">☕</span>
                <button className="dish-quickview" aria-label="Quick view"><i className="fa-solid fa-plus"></i></button>
              </div>
              <div className="dish-info">
                <h4>Filter Kaapi</h4>
                <p>Slow-filtered, frothed tableside the old way</p>
                <div className="dish-footer"><span className="dish-price">₹90</span></div>
              </div>
            </div>
            <div className="dish-card" data-name="Akuri on Toast" data-desc="Parsi-spiced scrambled eggs on buttered toast." data-price="₹260" data-diet="egg" data-spice="1" data-tag="Morning" data-visual="linear-gradient(160deg,var(--bottle-deep),#8a6a2f)" data-emoji="🍳">
              <div className="dish-visual" style={{ background: 'linear-gradient(160deg,var(--bottle-deep),#8a6a2f)' }}>
                <span className="dish-tag">Morning</span>
                <span className="diet-dot egg" title="Contains egg"></span>
                <span className="dish-emoji">🍳</span>
                <button className="dish-quickview" aria-label="Quick view"><i className="fa-solid fa-plus"></i></button>
              </div>
              <div className="dish-info">
                <h4>Akuri on Toast</h4>
                <p>Parsi-spiced scrambled eggs, buttered toast</p>
                <div className="dish-footer"><span className="dish-price">₹260</span><span className="spice-level">🌶️</span></div>
              </div>
            </div>
            <div className="dish-card" data-name="Dal Ghotala" data-desc="The Irani café classic dal and rice, mashed together, ghee-finished." data-price="₹380" data-diet="veg" data-spice="1" data-tag="Bestseller" data-visual="linear-gradient(160deg,var(--bottle-deep),var(--brass-light))" data-emoji="🍲">
              <div className="dish-visual" style={{ background: 'linear-gradient(160deg,var(--bottle-deep),var(--brass-light))' }}>
                <span className="dish-tag">Bestseller</span>
                <span className="diet-dot veg" title="Vegetarian"></span>
                <span className="dish-emoji">🍲</span>
                <button className="dish-quickview" aria-label="Quick view"><i className="fa-solid fa-plus"></i></button>
              </div>
              <div className="dish-info">
                <h4>Dal Ghotala</h4>
                <p>Dal and rice mashed together, ghee-finished</p>
                <div className="dish-footer"><span className="dish-price">₹380</span><span className="spice-level">🌶️</span></div>
              </div>
            </div>
            <div className="dish-card" data-name="Bombay Duck Rava Fry" data-desc="Semolina-crusted, pan-fried a true Bombay coast specialty." data-price="₹560" data-diet="nonveg" data-spice="2" data-tag="Bestseller" data-visual="linear-gradient(160deg,var(--bottle-deep),var(--rust))" data-emoji="🐟">
              <div className="dish-visual" style={{ background: 'linear-gradient(160deg,var(--bottle-deep),var(--rust))' }}>
                <span className="dish-tag">Bestseller</span>
                <span className="diet-dot nonveg" title="Non-Vegetarian"></span>
                <span className="dish-emoji">🐟</span>
                <button className="dish-quickview" aria-label="Quick view"><i className="fa-solid fa-plus"></i></button>
              </div>
              <div className="dish-info">
                <h4>Bombay Duck Rava Fry</h4>
                <p>Semolina-crusted, pan-fried coast specialty</p>
                <div className="dish-footer"><span className="dish-price">₹560</span><span className="spice-level">🌶️🌶️</span></div>
              </div>
            </div>
            <div className="dish-card" data-name="Railway Mutton Curry" data-desc="A recipe born on the Great Indian Peninsula Railway, slow-simmered." data-price="₹680" data-diet="nonveg" data-spice="2" data-tag="Night" data-visual="linear-gradient(160deg,var(--bottle-deep),#7a2f22)" data-emoji="🍛">
              <div className="dish-visual" style={{ background: 'linear-gradient(160deg,var(--bottle-deep),#7a2f22)' }}>
                <span className="dish-tag">Night</span>
                <span className="diet-dot nonveg" title="Non-Vegetarian"></span>
                <span className="dish-emoji">🍛</span>
                <button className="dish-quickview" aria-label="Quick view"><i className="fa-solid fa-plus"></i></button>
              </div>
              <div className="dish-info">
                <h4>Railway Mutton Curry</h4>
                <p>Slow-simmered, born on the old railway lines</p>
                <div className="dish-footer"><span className="dish-price">₹680</span><span className="spice-level">🌶️🌶️</span></div>
              </div>
            </div>
            <div className="dish-card" data-name="Cutting Chai Martini" data-desc="Vodka, cardamom, and a nod to the corner chai stall." data-price="₹780" data-diet="none" data-spice="0" data-tag="New" data-visual="linear-gradient(160deg,var(--bottle-deep),#4a3a1f)" data-emoji="🍸">
              <div className="dish-visual" style={{ background: 'linear-gradient(160deg,var(--bottle-deep),#4a3a1f)' }}>
                <span className="dish-tag">New</span>
                <span className="diet-dot none"></span>
                <span className="dish-emoji">🍸</span>
                <button className="dish-quickview" aria-label="Quick view"><i className="fa-solid fa-plus"></i></button>
              </div>
              <div className="dish-info">
                <h4>Cutting Chai Martini</h4>
                <p>Vodka, cardamom, a nod to the corner stall</p>
                <div className="dish-footer"><span className="dish-price">₹780</span></div>
              </div>
            </div>
          </div>
          <button className="carousel-arrow next" id="carNext" aria-label="Next dish"><i className="fa-solid fa-chevron-right"></i></button>
        </div>
        <div className="carousel-dots" id="carDots"></div>
      </section>

      <div className="checker-strip" aria-hidden="true"></div>

      <section className="section on-marble" id="location">
        <div className="container">
          <div className="section-head reveal">
            <span className="tag">Find Us</span>
            <h2>Come For Either. Stay For Both.</h2>
          </div>
          <div className="location-grid">
            <div className="location-map reveal">
              <iframe src="https://maps.google.com/maps?q=Marble%20and%20Brass%20Bar%20Kitchen&t=&z=15&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location map"></iframe>
              <a className="btn btn-dark btn-block" style={{ marginTop: '16px' }} target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=Marble+and+Brass+Bar+Kitchen"><i className="fa-solid fa-location-dot"></i> Get Directions</a>
            </div>
            <div className="location-info reveal">
              <div className="info-row"><i className="fa-solid fa-location-dot"></i><div><h4>Address</h4><p>[Your street address], [City], [State] [PIN]</p></div></div>
              <div className="info-row"><i className="fa-solid fa-clock"></i><div><h4>Hours</h4><p>Café: 8:00 AM - 6:00 PM<br />Bar &amp; Dinner: 6:00 PM - 1:00 AM<br />Sunday Brunch: 10:00 AM - 3:00 PM</p></div></div>
              <div className="info-row"><i className="fa-solid fa-square-parking"></i><div><h4>Parking &amp; Access</h4><p>Valet available after 7 PM Self-parking next door Step-free entrance &amp; accessible restrooms</p></div></div>
              <div className="quick-links-row">
                <button className="pill-link" data-open="reservationModal"><i className="fa-solid fa-calendar-check"></i> Reserve a Table</button>
                <a className="pill-link" target="_blank" rel="noopener" href="https://www.google.com/search?q=write+a+review+for+Marble+and+Brass+restaurant"><i className="fa-solid fa-star"></i> 4.8 Reviews</a>
                <a className="pill-link" href="#story"><i className="fa-solid fa-book"></i> Our Story</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="checker-strip" aria-hidden="true"></div>

      <section className="section on-marble" id="story">
        <div className="container story-grid">
          <div className="story-copy reveal">
            <span className="tag">The Story</span>
            <h2>One Room, <em>Two Moods</em></h2>
            <p className="pull-quote">Marble by day feels like a Bombay Irani café. Under brass light after dark, it is a different room entirely.</p>
            <p>Marble &amp; Brass began as a love letter to the Irani cafés of old Bombay checkerboard floors, bentwood chairs, a chai that never runs cold. Somewhere after sunset, the same room turns into a bar with proper cocktails and a kitchen that does not stop for anyone.</p>
            <p>Same tables. Same staff. Two very different nights out.</p>
            <div className="stats-row">
              <div className="stat-box"><span className="stat-num" data-target="18" data-suffix="-Hr">0-Hr</span><span className="stat-label">Kitchen, Day To Night</span></div>
              <div className="stat-box"><span className="stat-num" data-target="40" data-suffix="+">0+</span><span className="stat-label">Dishes On Rotation</span></div>
              <div className="stat-box"><span className="stat-num" data-target="4.8" data-decimals="1" data-suffix="★">0★</span><span className="stat-label">Guest Rating</span></div>
              <div className="stat-box"><span className="stat-num" data-target="2" data-suffix="">0</span><span className="stat-label">Menus, One Room</span></div>
            </div>
            <a href="#" className="link-arrow" data-open="reservationModal">Reserve a table <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="reveal">
            <div className="material-card">
              <div className="material-swatch"></div>
              <p className="material-label">Marble No. 4 x Brass No. 2</p>
            </div>
          </div>
        </div>
      </section>

      <div className="checker-strip" aria-hidden="true"></div>

      <footer className="on-bottle" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3 style={{ fontSize: '1.4rem' }}>Marble <span style={{ color: 'var(--brass-light)', fontStyle: 'italic' }}>&amp;</span> Brass</h3>
              <p>An all-day café by morning, a cocktail bar by night one room, two very different evenings.</p>
              <div className="footer-social">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://wa.me/910000000000" target="_blank" rel="noopener" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://www.google.com/search?q=Marble+and+Brass+restaurant" target="_blank" rel="noopener" aria-label="Google"><i className="fa-brands fa-google"></i></a>
                <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="#story">Our Story</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#location">Location</a></li>
                <li><a href="#" data-open="reservationModal">Reserve</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><i className="fa-solid fa-location-dot"></i> [Your address here]</li>
                <li><i className="fa-solid fa-phone"></i> +91 [your number]</li>
                <li><i className="fa-solid fa-envelope"></i> hello@[yourdomain].com</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Stay In The Loop</h4>
              <p style={{ fontSize: '.85rem', opacity: '.75' }}>New menus, events &amp; offers.</p>
              <form id="newsletterForm" className="newsletter-form">
                <input type="email" id="newsEmail" placeholder="Your email" required />
                <button type="submit" aria-label="Subscribe"><i className="fa-solid fa-paper-plane"></i></button>
              </form>
              <p className="newsletter-success" id="newsletterSuccess" style={{ display: 'none' }}><span style={{ fontSize: '.86rem', color: 'var(--brass-light)' }}>You are on the list.</span></p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>2026 Marble &amp; Brass. All rights reserved.</span>
            <span className="powered-badge"><span className="shimmer-text">POWERED BY KNECTAA</span></span>
          </div>
        </div>
      </footer>

      <div className="fab-stack" id="fabStack">
        <div className="fab-item" data-tip="WhatsApp Us"><a href="https://wa.me/910000000000?text=Hi!%20I%27d%20like%20to%20know%20more%20About%20Marble%20%26%20Brass." target="_blank" rel="noopener" className="fab-btn fab-wa" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a></div>
        <div className="fab-item" data-tip="Call Us"><a href="tel:+910000000000" className="fab-btn fab-call" aria-label="Call"><i className="fa-solid fa-phone"></i></a></div>
        <div className="fab-item" data-tip="View Menu"><button className="fab-btn fab-menu" id="fabMenuBtn" aria-label="Open menu"><i className="fa-solid fa-book-open"></i></button></div>
        <div className="fab-item" data-tip="Instagram"><a href="https://www.instagram.com/" target="_blank" rel="noopener" className="fab-btn fab-insta" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a></div>
        <button className="fab-main" id="fabMain" aria-label="Quick actions"><i className="fa-solid fa-plus"></i></button>
      </div>

      <div className="drawer-overlay" id="drawerOverlay"></div>
      <div className="menu-drawer" id="menuDrawer">
        <div className="drawer-header">
          <h3>The Full Menu</h3>
          <button className="drawer-close" id="drawerClose" aria-label="Close menu"><i className="fa-solid fa-xmark"></i></button>
        </div>
        <div className="drawer-legend">
          <span><span className="diet-dot veg"></span> Veg</span>
          <span><span className="diet-dot egg"></span> Egg</span>
          <span><span className="diet-dot nonveg"></span> Non-Veg</span>
        </div>
        <div className="drawer-tabs">
          <button className="drawer-tab active" data-cat="morning">Morning</button>
          <button className="drawer-tab" data-cat="allday">All Day</button>
          <button className="drawer-tab" data-cat="mains">Mains</button>
          <button className="drawer-tab" data-cat="bar">Bar</button>
          <button className="drawer-tab" data-cat="sweet">Sweet</button>
        </div>
        <div className="drawer-body">
          <div className="drawer-panel active" data-cat="morning">
            <p className="drawer-note">Served till noon</p>
            <div className="drawer-item"><span className="diet-dot veg"></span><div className="drawer-item-info"><h5>Filter Kaapi</h5><p>Slow-filtered, frothed tableside</p></div><span className="drawer-price">₹90</span></div>
            <div className="drawer-item"><span className="diet-dot veg"></span><div className="drawer-item-info"><h5>Irani Chai</h5><p>Strong, sweet, malai on top</p></div><span className="drawer-price">₹80</span></div>
            <div className="drawer-item"><span className="diet-dot veg"></span><div className="drawer-item-info"><h5>Bun Maska</h5><p>Soft bun, a generous butter slab</p></div><span className="drawer-price">₹120</span></div>
            <div className="drawer-item"><span className="diet-dot egg"></span><div className="drawer-item-info"><h5>Akuri on Toast</h5><p>Parsi-spiced scrambled eggs</p></div><span className="drawer-price">₹260</span></div>
            <div className="drawer-item"><span className="diet-dot nonveg"></span><div className="drawer-item-info"><h5>Keema Pav</h5><p>Minced mutton, buttered pav</p></div><span className="drawer-price">₹280</span></div>
            <div className="drawer-item"><span className="diet-dot veg"></span><div className="drawer-item-info"><h5>Sheermal French Toast</h5><p>Saffron flatbread, reinvented</p></div><span className="drawer-price">₹240</span></div>
          </div>
          <div className="drawer-panel" data-cat="allday">
            <div className="drawer-item"><span className="diet-dot veg"></span><div className="drawer-item-info"><h5>Charred Corn Bhel</h5><p>Puffed rice, tamarind, lime</p></div><span className="drawer-price">₹320</span></div>
            <div className="drawer-item"><span className="diet-dot nonveg"></span><div className="drawer-item-info"><h5>Chicken 65 Tacos</h5><p>Curry-leaf slaw, mint yogurt</p></div><span className="drawer-price">₹420</span></div>
            <div className="drawer-item"><span className="diet-dot nonveg"></span><div className="drawer-item-info"><h5>Prawn Koliwada</h5><p>Coastal spice, deep-fried crisp</p></div><span className="drawer-price">₹480</span></div>
            <div className="drawer-item"><span className="diet-dot veg"></span><div className="drawer-item-info"><h5>Beetroot &amp; Feta Chaat</h5><p>Pomegranate, mint, sev</p></div><span className="drawer-price">₹340</span></div>
            <div className="drawer-item"><span className="diet-dot nonveg"></span><div className="drawer-item-info"><h5>Mutton Seekh Sliders</h5><p>Brioche bun, pickled onion</p></div><span className="drawer-price">₹460</span></div>
          </div>
          <div className="drawer-panel" data-cat="mains">
            <div className="drawer-item"><span className="diet-dot nonveg"></span><div className="drawer-item-info"><h5>Masala Fish &amp; Chips</h5><p>Beer-battered, tamarind ketchup</p></div><span className="drawer-price">₹620</span></div>
            <div className="drawer-item"><span className="diet-dot nonveg"></span><div className="drawer-item-info"><h5>Charred Chicken Malai Tikka</h5><p>Creamy marinade, char-grilled</p></div><span className="drawer-price">₹580</span></div>
            <div className="drawer-item"><span className="diet-dot nonveg"></span><div className="drawer-item-info"><h5>Railway Mutton Curry</h5><p>Slow-simmered, colonial-era recipe</p></div><span className="drawer-price">₹680</span></div>
            <div className="drawer-item"><span className="diet-dot veg"></span><div className="drawer-item-info"><h5>Paneer Chettinad</h5><p>Roasted spice, curry leaf</p></div><span className="drawer-price">₹520</span></div>
            <div className="drawer-item"><span className="diet-dot nonveg"></span><div className="drawer-item-info"><h5>Bombay Duck Rava Fry</h5><p>Semolina-crusted coast specialty</p></div><span className="drawer-price">₹560</span></div>
            <div className="drawer-item"><span className="diet-dot veg"></span><div className="drawer-item-info"><h5>Dal Ghotala</h5><p>The Irani café classic, mashed &amp; buttered</p></div><span className="drawer-price">₹380</span></div>
          </div>
          <div className="drawer-panel" data-cat="bar">
            <div className="drawer-item"><span className="diet-dot" style={{ visibility: 'hidden' }}></span><div className="drawer-item-info"><h5>Smoked Negroni</h5><p>Gin, campari, applewood smoke</p></div><span className="drawer-price">₹850</span></div>
            <div className="drawer-item"><span className="diet-dot" style={{ visibility: 'hidden' }}></span><div className="drawer-item-info"><h5>Cutting Chai Martini</h5><p>Vodka, cardamom, corner-stall nod</p></div><span className="drawer-price">₹780</span></div>
            <div className="drawer-item"><span className="diet-dot" style={{ visibility: 'hidden' }}></span><div className="drawer-item-info"><h5>Bombay Sapphire &amp; Curry Leaf Tonic</h5><p>Botanical gin, fresh curry leaf</p></div><span className="drawer-price">₹650</span></div>
            <div className="drawer-item"><span className="diet-dot" style={{ visibility: 'hidden' }}></span><div className="drawer-item-info"><h5>Kokum Cooler (Mocktail)</h5><p>Tangy, chilled, no alcohol</p></div><span className="drawer-price">₹380</span></div>
            <div className="drawer-item"><span className="diet-dot" style={{ visibility: 'hidden' }}></span><div className="drawer-item-info"><h5>Craft Beer, Rotating Tap</h5><p>Ask your server what is pouring</p></div><span className="drawer-price">₹350</span></div>
          </div>
          <div className="drawer-panel" data-cat="sweet">
            <div className="drawer-item"><span className="diet-dot veg"></span><div className="drawer-item-info"><h5>Caramel Custard</h5><p>The Irani café classic</p></div><span className="drawer-price">₹280</span></div>
            <div className="drawer-item"><span className="diet-dot veg"></span><div className="drawer-item-info"><h5>Mawa Cake</h5><p>Dense, cardamom-scented bakery cake</p></div><span className="drawer-price">₹260</span></div>
            <div className="drawer-item"><span className="diet-dot veg"></span><div className="drawer-item-info"><h5>Kulfi Falooda</h5><p>Layered, rose, vermicelli, nuts</p></div><span className="drawer-price">₹320</span></div>
          </div>
        </div>
      </div>

      <div className="modal-overlay" id="dishModal">
        <div className="modal-card">
          <button className="modal-close" data-close="dishModal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
          <div className="dish-modal-visual" id="dishModalVisual">
            <span className="dish-modal-tag" id="dishModalTag"></span>
            <span className="diet-dot" id="dishModalDiet"></span>
            <span id="dishModalEmoji" style={{ fontSize: '3.6rem' }}></span>
          </div>
          <h3 id="dishModalName"></h3>
          <p id="dishModalDesc" style={{ textAlign: 'center', opacity: '.75' }}></p>
          <div className="dish-modal-footer">
            <span id="dishModalPrice" className="dish-price" style={{ color: 'var(--rust)', fontSize: '1.15rem' }}></span>
            <span id="dishModalSpice"></span>
          </div>
          <a href="#" className="btn btn-primary btn-block" data-open="reservationModal" style={{ marginTop: '14px' }}>Reserve To Try This</a>
        </div>
      </div>

      <div className="modal-overlay" id="reservationModal">
        <div className="modal-card">
          <button className="modal-close" data-close="reservationModal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
          <div id="reservationBody">
            <span className="tag" style={{ display: 'block', textAlign: 'center', marginBottom: '6px' }}>Reserve A Table</span>
            <h3>We would Love To Host You</h3>
            <form id="reservationForm">
              <div className="form-row"><input type="text" id="resName" placeholder="Full name" required /><input type="tel" id="resPhone" placeholder="Phone number" required /></div>
              <div className="form-row"><input type="date" id="resDate" required /><input type="time" id="resTime" required /></div>
              <input type="number" id="resGuests" placeholder="Party size" min="1" max="20" required />
              <textarea id="resNotes" placeholder="Special requests (optional)" rows={3}></textarea>
              <button type="submit" className="btn btn-primary btn-block">Request Reservation</button>
            </form>
          </div>
        </div>
      </div>

      <div className="toast" id="toast"></div>
    </>
  );
}
