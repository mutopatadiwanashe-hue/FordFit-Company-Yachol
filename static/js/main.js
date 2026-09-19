document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  /* mobile menu */
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = header.classList.toggle('open');
      menu.setAttribute('aria-expanded', open);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => header.classList.remove('open')));
  }

  /* header turns solid after scrolling + light hero parallax */
  const stage = document.querySelector('.car-stage');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 30);
    if (stage && !reduce && y < 900 && window.innerWidth > 1000) stage.style.setProperty('--py', (y * 0.08) + 'px');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* scroll reveal */
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('seen'); obs.unobserve(e.target); }
    }), { threshold: .12 });
    items.forEach(el => obs.observe(el));
  } else {
    items.forEach(el => el.classList.add('seen'));
  }

  /* footer year */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* product filter */
  const filters = document.querySelectorAll('.filter-btn');
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.toggle('active', b === btn));
    const f = btn.dataset.filter;
    document.querySelectorAll('.product-page article').forEach(card => {
      card.classList.toggle('hidden', f !== 'all' && card.dataset.cat !== f);
    });
  }));

  /* gallery lightbox — shows the photo at its natural size and ratio */
  const gallery = document.querySelectorAll('.gallery-item');
  if (gallery.length && typeof HTMLDialogElement !== 'undefined') {
    const dlg = document.createElement('dialog');
    dlg.className = 'lightbox';
    dlg.innerHTML = '<button type="button" aria-label="Close">×</button><img alt="">';
    document.body.appendChild(dlg);
    const big = dlg.querySelector('img');
    dlg.querySelector('button').addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
    gallery.forEach(fig => {
      if (fig.classList.contains('ceo')) return;
      fig.addEventListener('click', () => {
        const img = fig.querySelector('img');
        big.src = img.src; big.alt = img.alt;
        dlg.showModal();
      });
    });
  }

  /* enquiry form -> WhatsApp */
  const form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const d = new FormData(form);
      const name = (d.get('name') || '').toString().trim();
      if (!name) { form.querySelector('#f-name').focus(); return; }
      const lines = [
        'Hello FordFit Company Yachol,',
        'My name is ' + name + '.',
        d.get('vehicle') ? 'Vehicle: ' + d.get('vehicle') : '',
        'I need help with: ' + d.get('topic'),
        d.get('message') ? d.get('message') : ''
      ].filter(Boolean);
      window.open('https://wa.me/263780129773?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    });
  }
});
