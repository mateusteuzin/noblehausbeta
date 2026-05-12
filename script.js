// NobleHaus — interactions & animations

// Loader
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 400);
});

// Header scroll
const header = document.getElementById('header');
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 30);
  backTop.classList.toggle('show', y > 600);
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Mobile nav
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = e.target.dataset.delay || 0;
      e.target.style.setProperty('--d', delay + 'ms');
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Counter animation
const counters = document.querySelectorAll('.stat-num');
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || 0);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const dur = 1800; const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = (target * eased).toFixed(decimals);
      el.textContent = prefix + val + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: 0.4 });
counters.forEach(c => counterIO.observe(c));

// Hero parallax (mouse)
const heroVisual = document.getElementById('heroVisual');
const heroImage = document.getElementById('heroImage');
if (heroVisual && heroImage) {
  heroVisual.addEventListener('mousemove', (e) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    heroImage.style.transform = `rotateY(${x * 3}deg) rotateX(${-y * 3}deg) translateZ(0)`;
  });
  heroVisual.addEventListener('mouseleave', () => heroImage.style.transform = 'none');
}

// Tilt on cards
document.querySelectorAll('.tilt').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});

// Favorite toggle
document.querySelectorAll('.fav').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
    btn.style.color = btn.textContent === '♥' ? '#D4AF37' : '';
  });
});

const propertyCatalog = {
  alphaville: {
    title: 'Casa Alphaville Fortaleza',
    location: 'Alphaville Fortaleza — CE',
    price: 'R$ 8.750.000',
    hero: 'assets/aphaville.png',
    gallery: ['assets/aphavillepisina.png', 'assets/aphavillesuite1.png', 'assets/aphavillecozinha.png', 'assets/aplhavillebanheiro.png'],
    features: [
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15 8H22L17 12L19 18L12 14L5 18L7 12L2 8H9L12 2Z"/></svg>', label: 'Área total', value: '560m²' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4H22V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4Z"/><line x1="2" y1="7" x2="22" y2="7"/><line x1="7" y1="11" x2="7" y2="15"/><line x1="17" y1="11" x2="17" y2="15"/></svg>', label: 'Suítes', value: '5' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6H22V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V6Z"/><circle cx="6" cy="10" r="1.5"/><circle cx="18" cy="10" r="1.5"/></svg>', label: 'Banheiros', value: '7' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6H21M5 10V18C5 20.2 6.8 22 9 22H15C17.2 22 19 20.2 19 18V10M8 10V6C8 4.9 8.9 4 10 4H14C15.1 4 16 4.9 16 6V10"/></svg>', label: 'Vagas', value: '6' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/><path d="M12 5V12L17 17" fill="none"/></svg>', label: 'Piscina', value: 'Sim' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9V13M16 13H12"/></svg>', label: 'Academia', value: 'Sim' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C9.23 2 7 4.23 7 7V10C7 13 8.5 14.5 9 15.5V22H15V15.5C15.5 14.5 17 13 17 10V7C17 4.23 14.77 2 12 2Z"/><line x1="9" y1="6" x2="15" y2="6"/></svg>', label: 'Automação', value: 'Residencial' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L22 8V16L12 22L2 16V8L12 2Z"/></svg>', label: 'Vista', value: 'Panorâmica' },
    ],
    coords: [-3.8260, -38.4640],
    points: [
      { title: 'Praia do Futuro', description: '10 min de carro' },
      { title: 'Shopping Iguatemi', description: '12 min de carro' },
      { title: 'Escola Internacional', description: '8 min de carro' },
      { title: 'Hospital de Excelência', description: '9 min de carro' },
    ]
  },
  meireles: {
    title: 'Apartamento Meireles',
    location: 'Meireles, Fortaleza — CE',
    price: 'R$ 4.980.000',
    hero: 'assets/apartamentomeireles.png',
    gallery: ['assets/meirelesvaranda.png', 'assets/meirelessuite.png', 'assets/meirelessaladeestar.png', 'assets/meirelesbanheiro.png'],
    features: [
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15 8H22L17 12L19 18L12 14L5 18L7 12L2 8H9L12 2Z"/></svg>', label: 'Área total', value: '280m²' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4H22V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4Z"/><line x1="2" y1="7" x2="22" y2="7"/><line x1="7" y1="11" x2="7" y2="15"/><line x1="17" y1="11" x2="17" y2="15"/></svg>', label: 'Suítes', value: '4' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6H22V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V6Z"/><circle cx="6" cy="10" r="1.5"/><circle cx="18" cy="10" r="1.5"/></svg>', label: 'Banheiros', value: '5' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6H21M5 10V18C5 20.2 6.8 22 9 22H15C17.2 22 19 20.2 19 18V10M8 10V6C8 4.9 8.9 4 10 4H14C15.1 4 16 4.9 16 6V10"/></svg>', label: 'Vagas', value: '4' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/><path d="M12 5V12L17 17" fill="none"/></svg>', label: 'Piscina', value: 'Sim' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9V13M16 13H12"/></svg>', label: 'Academia', value: 'Sim' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C9.23 2 7 4.23 7 7V10C7 13 8.5 14.5 9 15.5V22H15V15.5C15.5 14.5 17 13 17 10V7C17 4.23 14.77 2 12 2Z"/><line x1="9" y1="6" x2="15" y2="6"/></svg>', label: 'Automação', value: 'Residencial' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L22 8V16L12 22L2 16V8L12 2Z"/></svg>', label: 'Vista', value: 'Mar' },
    ],
    coords: [-3.7280, -38.4970],
    points: [
      { title: 'Beira Mar', description: '3 min a pé' },
      { title: 'Café gourmet', description: '5 min a pé' },
      { title: 'Shopping RioMar', description: '11 min de carro' },
      { title: 'Clinica premium', description: '7 min de carro' },
    ]
  },
  porto: {
    title: 'Mansão no Porto das Dunas',
    location: 'Porto das Dunas, Aquiraz — CE',
    price: 'R$ 12.900.000',
    hero: 'assets/praiadunas.png',
    gallery: ['assets/praiadunas.png', 'assets/dunassuite.png', 'assets/dunassala.png', 'assets/dunasbanheiro.png'],
    features: [
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15 8H22L17 12L19 18L12 14L5 18L7 12L2 8H9L12 2Z"/></svg>', label: 'Área total', value: '780m²' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4H22V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4Z"/><line x1="2" y1="7" x2="22" y2="7"/><line x1="7" y1="11" x2="7" y2="15"/><line x1="17" y1="11" x2="17" y2="15"/></svg>', label: 'Suítes', value: '6' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6H22V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V6Z"/><circle cx="6" cy="10" r="1.5"/><circle cx="18" cy="10" r="1.5"/></svg>', label: 'Banheiros', value: '8' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6H21M5 10V18C5 20.2 6.8 22 9 22H15C17.2 22 19 20.2 19 18V10M8 10V6C8 4.9 8.9 4 10 4H14C15.1 4 16 4.9 16 6V10"/></svg>', label: 'Vagas', value: '8' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/><path d="M12 5V12L17 17" fill="none"/></svg>', label: 'Piscina', value: 'Infinity' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9V13M16 13H12"/></svg>', label: 'Academia', value: 'Sim' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C9.23 2 7 4.23 7 7V10C7 13 8.5 14.5 9 15.5V22H15V15.5C15.5 14.5 17 13 17 10V7C17 4.23 14.77 2 12 2Z"/><line x1="9" y1="6" x2="15" y2="6"/></svg>', label: 'Automação', value: 'Completa' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L22 8V16L12 22L2 16V8L12 2Z"/></svg>', label: 'Vista', value: 'Oceânica' },
    ],
    coords: [-3.8330, -38.3950],
    points: [
      { title: 'Dunas Privadas', description: '2 min de carro' },
      { title: 'Marina Beach Club', description: '5 min de carro' },
      { title: 'Restaurante de luxo', description: '4 min de carro' },
      { title: 'Hospital Internacional', description: '10 min de carro' },
    ]
  }
};

const propertyModal = document.getElementById('propertyModal');
const detailHeroImage = document.getElementById('detailHeroImage');
const detailTitle = document.getElementById('detailTitle');
const detailLocation = document.getElementById('detailLocation');
const detailPrice = document.getElementById('detailPrice');
const detailGallery = document.getElementById('detailGallery');
const detailInfoGrid = document.getElementById('detailInfoGrid');
const detailMapInfo = document.getElementById('detailMapInfo');
const detailHeroMedia = document.getElementById('detailHeroMedia');
const detailWhatsapp = document.querySelector('.detail-whatsapp');
const galleryLightbox = document.getElementById('galleryLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightbox = document.getElementById('closeLightbox');
const prevLightbox = document.getElementById('prevLightbox');
const nextLightbox = document.getElementById('nextLightbox');
const closePropertyModal = document.getElementById('closePropertyModal');
const detailTourPlay = document.querySelector('.detail-tour-play');
let currentGallery = [];
let currentGalleryIndex = 0;
let detailMap;
let detailMarker;

function animateModalSections() {
  const reveals = propertyModal.querySelectorAll('.reveal');
  reveals.forEach((el, index) => {
    el.classList.remove('in');
    setTimeout(() => el.classList.add('in'), 120 * index);
  });
}

function initDetailMap(coords) {
  if (!detailMap) {
    detailMap = L.map('detailMap', { scrollWheelZoom: false, zoomControl: false }).setView(coords, 13);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '© OpenStreetMap, © CARTO', maxZoom: 18,
    }).addTo(detailMap);
    detailMarker = L.circleMarker(coords, { radius: 10, color: '#b69838', fillColor: '#caa836', fillOpacity: 0.8 }).addTo(detailMap);
  } else {
    detailMap.setView(coords, 13, { animate: true, duration: 0.9 });
    detailMarker.setLatLng(coords);
  }
}

function openPropertyModal(id) {
  console.log('[debug] openPropertyModal', id);

  const propertyModal = document.getElementById('propertyModal');
  if (!propertyModal) {
    console.error('Modal #propertyModal não encontrado');
    return;
  }

  propertyModal.classList.add('open');
  propertyModal.style.display = 'flex';
  propertyModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  const property = propertyCatalog[id];
  if (!property) {
    console.warn('[debug] property not found', id);
    return;
  }

  detailTitle.textContent = property.title;
  detailLocation.textContent = property.location;
  detailPrice.textContent = property.price;
  detailHeroImage.src = property.hero;
  detailHeroImage.alt = property.title;
  if (detailWhatsapp) {
    detailWhatsapp.href = `https://wa.me/5585999999999?text=${encodeURIComponent('Olá, quero saber mais sobre ' + property.title)}`;
  }

  currentGallery = property.gallery;
  detailGallery.innerHTML = '';

  // Textos premium por ambiente (índice do gallery)
  // Mantém o funcionamento/IDs/listeners do modal e do lightbox.
  const galleryMetaByIndex = {
    0: { badge: 'Design Exclusivo', title: 'Master Suite Privativa' },
    1: { badge: 'Acabamento Premium', title: 'Sala de Banho Premium' },
    2: { badge: 'Vista Privilegiada', title: 'Cozinha Gourmet Integrada' },
    3: { badge: 'Alto Padrão', title: 'Varanda Panorâmica' },
  };

  const gallerySubtitleByIndex = {
    0: 'SUÍTE MASTER',
    1: 'BANHEIRO',
    2: 'COZINHA',
    3: 'VARANDA / ÁREA EXTERNA',
  };

  property.gallery.forEach((src, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `detail-gallery-item ${index === 0 ? 'large' : ''}`;

    const meta = galleryMetaByIndex[index] || galleryMetaByIndex[3];
    const subtitle = gallerySubtitleByIndex[index] || gallerySubtitleByIndex[3];

    button.innerHTML = `
      <img src="${src}" alt="${property.title} imagem ${index + 1}" loading="lazy" />
      <div class="gallery-overlay" aria-hidden="true">
        <div class="gallery-badge">${meta.badge}</div>
        <div class="gallery-info">
          <small>${subtitle}</small>
          <h3>${meta.title}</h3>
        </div>
      </div>
    `;

    button.addEventListener('click', () => openLightbox(index));
    detailGallery.appendChild(button);
  });

  detailInfoGrid.innerHTML = '';
  property.features.forEach(feature => {
    const card = document.createElement('div');
    card.className = 'detail-info-card';
    card.innerHTML = `<div class="info-icon">${feature.icon}</div><h4>${feature.label}</h4><p>${feature.value}</p>`;
    detailInfoGrid.appendChild(card);
  });

  detailMapInfo.innerHTML = property.points.map(point => `
    <div class="map-point">
      <h4>${point.title}</h4>
      <p>${point.description}</p>
    </div>
  `).join('');

  openModal(property.coords);
}

function openModal(coords) {
  propertyModal.classList.add('open');
  propertyModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  if (coords) initDetailMap(coords);
  animateModalSections();
}

function closeModal() {
  propertyModal.classList.remove('open');
  propertyModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function openLightbox(index) {
  currentGalleryIndex = index;
  lightboxImage.src = currentGallery[index];
  galleryLightbox.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeGalleryLightbox() {
  galleryLightbox.classList.remove('open');
  if (propertyModal.classList.contains('open')) document.body.classList.add('modal-open');
  else document.body.classList.remove('modal-open');
}

function changeLightbox(delta) {
  currentGalleryIndex = (currentGalleryIndex + delta + currentGallery.length) % currentGallery.length;
  lightboxImage.src = currentGallery[currentGalleryIndex];
}

// (fix) clique via botão com classe view-details
// Buttons no HTML: <button class="btn btn-outline view-details" data-property="alphaville">Ver detalhes</button>
document.querySelectorAll('.view-details').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const id = btn.dataset?.property;
    if (!id) return;
    openPropertyModal(id);
  });
});

closePropertyModal.addEventListener('click', closeModal);
if (propertyModal.querySelector('.property-modal-bg')) {
  propertyModal.querySelector('.property-modal-bg').addEventListener('click', closeModal);
}

closeLightbox.addEventListener('click', closeGalleryLightbox);
if (galleryLightbox.querySelector('.lightbox-bg')) {
  galleryLightbox.querySelector('.lightbox-bg').addEventListener('click', closeGalleryLightbox);
}
prevLightbox.addEventListener('click', () => changeLightbox(-1));
nextLightbox.addEventListener('click', () => changeLightbox(1));

detailHeroMedia.addEventListener('mousemove', (e) => {
  const rect = detailHeroMedia.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  detailHeroImage.style.transform = `scale(1.08) translate(${x * 15}px, ${y * 15}px)`;
});
detailHeroMedia.addEventListener('mouseleave', () => {
  detailHeroImage.style.transform = 'scale(1.06) translate(0, 0)';
});

const tourModal = document.getElementById('tourModal');
const tourVideo = document.getElementById('tourVideo');

function openTourModal() {
  tourModal.classList.add('open');
  document.body.classList.add('modal-open');
  if (tourVideo) {
    tourVideo.load();
    tourVideo.currentTime = 0;
    tourVideo.play().catch(() => {
      console.log('Autoplay bloqueado, usuário pode clicar no play.');
    });
  }
}

function closeTourModal() {
  tourModal.classList.remove('open');
  document.body.classList.remove('modal-open');
  if (tourVideo) {
    tourVideo.pause();
    tourVideo.currentTime = 0;
  }
}

detailTourPlay.addEventListener('click', openTourModal);
document.getElementById('openTour').addEventListener('click', openTourModal);
document.getElementById('closeTour').addEventListener('click', closeTourModal);
tourModal.querySelector('.modal-bg').addEventListener('click', closeTourModal);

// Map
const neighborhoods = [
  { name: 'Meireles', coords: [-3.7280, -38.4970], count: 18, from: 1800000 },
  { name: 'Aldeota', coords: [-3.7400, -38.5050], count: 22, from: 1500000 },
  { name: 'Cocó', coords: [-3.7530, -38.4830], count: 14, from: 1200000 },
  { name: 'Guararapes', coords: [-3.7560, -38.4920], count: 11, from: 1900000 },
  { name: 'Alphaville Fortaleza', coords: [-3.8260, -38.4640], count: 12, from: 3500000 },
  { name: 'Porto das Dunas', coords: [-3.8330, -38.3950], count: 9, from: 4200000 },
  { name: 'Eusébio', coords: [-3.8900, -38.4500], count: 8, from: 1700000 },
  { name: 'Praia do Futuro', coords: [-3.7480, -38.4570], count: 16, from: 2100000 },
];

function fmtBRL(n) { return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }); }

const map = L.map('map', { scrollWheelZoom: false, zoomControl: true }).setView([-3.78, -38.48], 11);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap, © CARTO', maxZoom: 19,
}).addTo(map);

const goldIcon = L.divIcon({ className: 'gold-pin', iconSize: [18, 18] });
const hoodList = document.getElementById('hoodList');

neighborhoods.forEach(h => {
  const popup = `<h5>${h.name}</h5>
    <div class="pop-meta">${h.count} imóveis disponíveis</div>
    <div class="pop-price">A partir de ${fmtBRL(h.from)}</div>
    <a href="#imoveis">Ver imóveis →</a>`;
  const marker = L.marker(h.coords, { icon: goldIcon }).addTo(map).bindPopup(popup);

  const li = document.createElement('li');
  li.innerHTML = `<span class="hood-name">${h.name}</span>
    <span class="hood-meta">${h.count} imóveis · de ${fmtBRL(h.from)}</span>`;
  li.addEventListener('click', () => {
    map.flyTo(h.coords, 13, { duration: 0.8 });
    setTimeout(() => marker.openPopup(), 600);
  });
  hoodList.appendChild(li);
});

/* =========================
   NOBLEHAUS PROPERTY MODAL
========================= */

document.addEventListener("DOMContentLoaded", () => {

  const propertyModal = document.getElementById("propertyModal");

  const propertyButtons = document.querySelectorAll(".view-details");

  const closeButtons = document.querySelectorAll(
    ".property-close, .property-modal-bg"
  );

  console.log("Modal encontrado:", propertyModal);
  console.log("Botões encontrados:", propertyButtons.length);

  /* OPEN */
  propertyButtons.forEach((button) => {

    button.addEventListener("click", function (e) {

      e.preventDefault();

      const propertyId = this.dataset.property;

      console.log("[debug] openPropertyModal", propertyId);

      if (!propertyModal) {
        console.error("ERRO: #propertyModal não encontrado");
        return;
      }

      propertyModal.classList.add("open");

      propertyModal.style.display = "flex";

      document.body.classList.add("modal-open");

    });

  });

  /* CLOSE */
  closeButtons.forEach((button) => {

    button.addEventListener("click", () => {

      propertyModal.classList.remove("open");

      propertyModal.style.display = "none";

      document.body.classList.remove("modal-open");

    });

  });

  /* ESC CLOSE */
  document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

      propertyModal.classList.remove("open");

      propertyModal.style.display = "none";

      document.body.classList.remove("modal-open");

    }

  });

});

/* =========================
   TOUR VIDEO MODAL
========================= */

document.addEventListener("DOMContentLoaded", () => {

  const tourModal = document.getElementById("tourModal");

  const tourOpenBtn = document.querySelector(".play-btn");

  const tourCloseBtn = document.querySelector(".modal-close");

  const tourBg = document.querySelector(".modal-bg");

  const tourVideo = document.getElementById("tourVideo");

  if (tourOpenBtn) {

    tourOpenBtn.addEventListener("click", () => {

      if (!tourModal) return;

      tourModal.classList.add("open");

      document.body.classList.add("modal-open");

      if (tourVideo) {

        tourVideo.currentTime = 0;

        tourVideo.play().catch(() => {

          console.log("Autoplay bloqueado");

        });

      }

    });

  }

  function closeTourModal() {

    if (!tourModal) return;

    tourModal.classList.remove("open");

    document.body.classList.remove("modal-open");

    if (tourVideo) {

      tourVideo.pause();

      tourVideo.currentTime = 0;

    }

  }

  if (tourCloseBtn) {
    tourCloseBtn.addEventListener("click", closeTourModal);
  }

  if (tourBg) {
    tourBg.addEventListener("click", closeTourModal);
  }

});

