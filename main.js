import { projects } from './gallery_data.js';

// ===== STATE =====
let currentProject = null;
let currentImageIndex = 0;

// ===== RENDER PROJECT CARDS =====
function renderProjects(filter = 'all') {
  const grid = document.getElementById('masonry-grid');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  grid.innerHTML = filtered.map((p, i) => `
    <div class="project-card reveal" style="animation-delay: ${i * 0.08}s" data-project-id="${p.id}">
      <div class="project-card-image-wrapper">
        <img src="${p.cover}" alt="${p.title}" class="project-card-image" loading="lazy">
        <div class="project-card-overlay">
          <span class="project-card-view">Projeyi İncele →</span>
        </div>
      </div>
      <div class="project-card-body">
        <span class="project-card-category">${p.category}</span>
        <h3 class="project-card-title">${p.title}</h3>
        <p class="project-card-desc">${p.description.substring(0, 80)}${p.description.length > 80 ? '...' : ''}</p>
        <div class="project-card-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="project-card-meta">
          <span class="meta-images">${p.images.length} Görsel</span>
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe for reveal animation
  setTimeout(() => {
    document.querySelectorAll('.project-card.reveal').forEach(el => {
      revealObserver.observe(el);
    });
  }, 50);
}

// ===== GALLERY FILTERS =====
function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const filter = e.target.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

// ===== PROJECT MODAL =====
function openProjectModal(projectId) {
  currentProject = projects.find(p => p.id === projectId);
  if (!currentProject) return;

  currentImageIndex = 0;
  const modal = document.getElementById('project-modal');

  document.getElementById('modal-title').textContent = currentProject.title;
  document.getElementById('modal-category').textContent = currentProject.category;
  document.getElementById('modal-description').textContent = currentProject.description;

  // Tags
  document.getElementById('modal-tags').innerHTML = currentProject.tags
    .map(t => `<span class="tag">${t}</span>`).join('');

  // Build image wrapper based on project type
  const wrapper = document.getElementById('modal-image-wrapper');
  if (currentProject.isWebsite) {
    wrapper.className = 'modal-image-wrapper browser-frame';
    wrapper.innerHTML = `
      <div class="browser-bar">
        <span class="browser-dot"></span>
        <span class="browser-dot"></span>
        <span class="browser-dot"></span>
        <span class="browser-url">${currentProject.siteUrl || 'website.com'}</span>
      </div>
      <div class="modal-scroll-area">
        <img id="modal-main-image" src="" alt="Proje Görseli" class="modal-main-image">
      </div>
    `;
  } else {
    wrapper.className = 'modal-image-wrapper';
    wrapper.innerHTML = `<img id="modal-main-image" src="" alt="Proje Görseli" class="modal-main-image">`;
  }

  // Thumbnails
  const thumbsContainer = document.getElementById('modal-thumbnails');
  thumbsContainer.innerHTML = currentProject.images.map((img, i) => `
    <img src="${img}" alt="Thumbnail ${i + 1}" class="modal-thumb ${i === 0 ? 'active' : ''}" data-index="${i}" loading="lazy">
  `).join('');

  updateModalImage();
  updateCounter();

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  currentProject = null;
}

function updateModalImage() {
  if (!currentProject) return;
  const mainImg = document.getElementById('modal-main-image');
  mainImg.src = currentProject.images[currentImageIndex];

  // Update active thumb
  document.querySelectorAll('.modal-thumb').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === currentImageIndex);
  });

  // Scroll active thumb into view
  const activeThumb = document.querySelector('.modal-thumb.active');
  if (activeThumb) {
    activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  updateCounter();
}

function updateCounter() {
  if (!currentProject) return;
  document.getElementById('modal-counter').textContent =
    `${currentImageIndex + 1} / ${currentProject.images.length}`;
}

function nextImage() {
  if (!currentProject) return;
  currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
  updateModalImage();
}

function prevImage() {
  if (!currentProject) return;
  currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
  updateModalImage();
}

function initProjectModal() {
  // Open modal on card click
  document.getElementById('masonry-grid').addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (card) {
      openProjectModal(card.dataset.projectId);
    }
  });

  // Close button
  document.getElementById('modal-close').addEventListener('click', closeProjectModal);

  // Close on backdrop click
  document.getElementById('project-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget || e.target.classList.contains('modal-backdrop')) {
      closeProjectModal();
    }
  });

  // Navigation arrows
  document.getElementById('modal-prev').addEventListener('click', prevImage);
  document.getElementById('modal-next').addEventListener('click', nextImage);

  // Thumbnail clicks
  document.getElementById('modal-thumbnails').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-thumb')) {
      currentImageIndex = parseInt(e.target.dataset.index);
      updateModalImage();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('project-modal');
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeProjectModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });
}

// ===== CURSOR GLOW & MAGNETIC EFFECTS =====
function initCursor() {
  const glow = document.getElementById('cursor-glow');
  const dot = document.getElementById('cursor-dot');
  if (window.innerWidth < 768) return;

  // Follower logic
  document.addEventListener('mousemove', (e) => {
    // Dot follows instantly
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    
    // Glow follows smoothly
    requestAnimationFrame(() => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  });

  // Project Card Hover (Expand cursor)
  document.addEventListener('mouseover', (e) => {
    const card = e.target.closest('.project-card');
    if (card) {
      dot.classList.add('cursor-view');
      dot.textContent = 'İNCELE';
    }
  });
  document.addEventListener('mouseout', (e) => {
    const card = e.target.closest('.project-card');
    if (card) {
      dot.classList.remove('cursor-view');
      dot.textContent = '';
    }
  });

  // Magnetic Buttons
  document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = `translate(0px, 0px)`;
    });
  });
}

// ===== NAVBAR SCROLL =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('mobile-open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('mobile-open');
    });
  });
}

// ===== SCROLL REVEAL =====
let revealObserver;

function initReveal() {
  document.querySelectorAll('.about-grid, .about-info, .skill-category, .contact-link, .contact-lead').forEach(el => {
    el.classList.add('reveal');
  });

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ===== COUNTER ANIMATION =====
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target) {
  let current = 0;
  const increment = target / 30;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, 40);
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#') { e.preventDefault(); return; }
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== BACK TO TOP =====
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initFilters();
  initProjectModal();
  initCursor();
  initNavbar();
  initMobileMenu();
  initReveal();
  initCounters();
  initSmoothScroll();
  initBackToTop();
});
