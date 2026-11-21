import { projectsData } from './projects-data.js';

// DOM Elements
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Modal Elements
const projectModal = document.getElementById('project-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalClose = document.getElementById('modal-close');
const modalCategory = document.getElementById('modal-category');
const modalTitle = document.getElementById('modal-title');
const modalGallery = document.getElementById('modal-gallery');
const modalDescription = document.getElementById('modal-description');
const modalDetails = document.getElementById('modal-details');
const modalTags = document.getElementById('modal-tags');
const galleryControls = document.getElementById('gallery-controls');
const prevImgBtn = document.getElementById('prev-img');
const nextImgBtn = document.getElementById('next-img');

// Lightbox Elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

// State
let currentProject = null;
let currentImageIndex = 0;
let currentLightboxImages = [];
let currentLightboxIndex = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  initNavScroll();
  initMobileMenu();
  initFilterButtons();
  initScrollAnimations();
  initModalAndLightbox();
  initContactForm();
});

// Render Projects Cards
function renderProjects(filter) {
  if (!projectsGrid) return;

  const filtered = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.categories.includes(filter));

  projectsGrid.innerHTML = filtered.map((project, idx) => `
    <article class="project-card group reveal" style="animation-delay: ${idx * 0.1}s">
      <div class="project-card-image-wrap">
        <img 
          src="${project.coverImage}" 
          alt="${project.title}"
          class="project-card-image"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        <div class="absolute top-4 left-4">
          <span class="inline-block px-3 py-1 text-2xs font-bold uppercase tracking-widest bg-navy-900/85 text-white backdrop-blur-sm rounded-sm">
            ${project.category.toUpperCase()}
          </span>
        </div>
        <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
          <span class="text-xs font-mono text-slate-300">${project.year}</span>
          <span class="text-xs text-gold-400 font-medium">${project.images.length} Drawings & Boards</span>
        </div>
      </div>

      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="font-display font-bold text-xl text-navy-900 group-hover:text-navy-700 transition-colors mb-2">
            ${project.title}
          </h3>
          <p class="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
            ${project.location}
          </p>
          <p class="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
            ${project.summary}
          </p>
        </div>

        <div>
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${project.tools.slice(0, 3).map(tool => `
              <span class="text-3xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-sm">${tool}</span>
            `).join('')}
          </div>

          <div class="flex items-center gap-2 pt-4 border-t border-slate-100">
            <button 
              type="button" 
              class="open-modal-btn flex-1 text-center py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-navy-800 bg-navy-50 hover:bg-navy-800 hover:text-white rounded-sm transition-all"
              data-project-id="${project.id}"
            >
              Quick View
            </button>
            <a 
              href="${project.pageUrl}" 
              class="flex items-center justify-center py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-navy-800 hover:bg-navy-900 rounded-sm transition-all"
              title="Full Project Page"
            >
              Details →
            </a>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  // Re-bind modal buttons
  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-project-id');
      openModal(id);
    });
  });

  // Re-trigger scroll animation check
  checkScroll();
}

// Navigation Scroll Effect
function initNavScroll() {
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-1');
      navbar.classList.remove('py-2');
      document.querySelectorAll('.nav-brand-name').forEach(el => el.classList.remove('text-white'));
      document.querySelectorAll('.nav-brand-name').forEach(el => el.classList.add('text-navy-900'));
    } else {
      navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-1');
      navbar.classList.add('py-2');
    }

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);

      if (link) {
        if (scrollPos >= top && scrollPos < top + height) {
          link.classList.add('active', 'text-navy-900');
          link.classList.remove('text-slate-600');
        } else {
          link.classList.remove('active', 'text-navy-900');
          link.classList.add('text-slate-600');
        }
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// Mobile Menu
function initMobileMenu() {
  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener('click', () => {
    const isExpanded = mobileMenu.classList.toggle('hidden');
    if (menuIcon && closeIcon) {
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    }
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      if (menuIcon && closeIcon) {
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });
  });
}

// Filter Buttons
function initFilterButtons() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

// Scroll Animations
function initScrollAnimations() {
  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();
}

function checkScroll() {
  const reveals = document.querySelectorAll('.reveal:not(.active), .reveal-left:not(.active), .reveal-right:not(.active)');
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
}

// Modal & Lightbox Logic
function initModalAndLightbox() {
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightbox && !lightbox.classList.contains('hidden')) {
        closeLightbox();
      } else if (projectModal && !projectModal.classList.contains('hidden')) {
        closeModal();
      }
    } else if (e.key === 'ArrowRight') {
      if (lightbox && !lightbox.classList.contains('hidden')) {
        nextLightboxImage();
      } else if (projectModal && !projectModal.classList.contains('hidden')) {
        nextModalImage();
      }
    } else if (e.key === 'ArrowLeft') {
      if (lightbox && !lightbox.classList.contains('hidden')) {
        prevLightboxImage();
      } else if (projectModal && !projectModal.classList.contains('hidden')) {
        prevModalImage();
      }
    }
  });

  if (prevImgBtn) prevImgBtn.addEventListener('click', prevModalImage);
  if (nextImgBtn) nextImgBtn.addEventListener('click', nextModalImage);

  // Lightbox controls
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightboxImage);
  if (lightboxNext) lightboxNext.addEventListener('click', nextLightboxImage);
}

function openModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project || !projectModal) return;

  currentProject = project;
  currentImageIndex = 0;

  modalCategory.textContent = project.category.toUpperCase();
  modalTitle.textContent = project.title;

  // Build Gallery
  renderModalGallery();

  // Overview / Description
  modalDescription.innerHTML = `
    <p class="mb-4">${project.overview.replace(/\n\n/g, '</p><p class="mb-4">')}</p>
    <div class="mt-6">
      <h5 class="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3">Key Highlights</h5>
      <ul class="space-y-2">
        ${project.keyHighlights.map(h => `
          <li class="flex items-start gap-2.5 text-sm text-slate-700">
            <span class="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
            <span>${h}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;

  // Details column
  modalDetails.innerHTML = `
    <div class="bg-slate-50 p-5 rounded-sm border border-slate-100 space-y-3 text-sm">
      <div>
        <div class="text-2xs font-semibold text-slate-400 uppercase tracking-wider">Location</div>
        <div class="text-navy-900 font-medium">${project.location}</div>
      </div>
      <div>
        <div class="text-2xs font-semibold text-slate-400 uppercase tracking-wider">Role</div>
        <div class="text-navy-900 font-medium">${project.role}</div>
      </div>
      <div>
        <div class="text-2xs font-semibold text-slate-400 uppercase tracking-wider">Timeline / Year</div>
        <div class="text-navy-900 font-medium">${project.year}</div>
      </div>
      <div>
        <div class="text-2xs font-semibold text-slate-400 uppercase tracking-wider">Tools Used</div>
        <div class="flex flex-wrap gap-1 mt-1">
          ${project.tools.map(t => `<span class="text-3xs bg-white border border-slate-200 px-2 py-0.5 rounded-sm font-medium text-slate-700">${t}</span>`).join('')}
        </div>
      </div>
      <div class="pt-3 border-t border-slate-200">
        <a href="${project.pageUrl}" class="btn-primary w-full text-center py-2.5 text-xs uppercase tracking-wider">
          Open Dedicated Project Page →
        </a>
      </div>
    </div>
  `;

  // Tags
  modalTags.innerHTML = project.tools.map(tool => `
    <span class="expertise-tag">${tool}</span>
  `).join('');

  projectModal.classList.remove('hidden');
  projectModal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function renderModalGallery() {
  if (!currentProject || !modalGallery) return;

  const images = currentProject.images;
  if (!images || images.length === 0) return;

  const current = images[currentImageIndex];

  modalGallery.innerHTML = `
    <div class="relative max-h-[55vh] flex items-center justify-center p-4 bg-navy-950/95 overflow-hidden group">
      <img 
        id="modal-active-img"
        src="${current.src}" 
        alt="${current.title}"
        class="max-h-[50vh] max-w-full object-contain cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
      />
      <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300 pointer-events-none">
        <div class="bg-black/60 px-3 py-1.5 rounded-sm backdrop-blur-sm pointer-events-auto">
          <span class="font-semibold text-white">${current.title}</span> – ${current.caption}
        </div>
        <div class="bg-black/60 px-2.5 py-1.5 rounded-sm backdrop-blur-sm pointer-events-auto">
          ${currentImageIndex + 1} / ${images.length}
        </div>
      </div>
      <button 
        id="zoom-modal-img" 
        class="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-sm backdrop-blur-sm transition-all"
        title="View Full Size in Lightbox"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      </button>
    </div>

    <!-- Thumbnails strip -->
    <div class="p-3 bg-navy-900 border-t border-navy-800 flex gap-2 overflow-x-auto">
      ${images.map((img, i) => `
        <button 
          class="thumb-btn flex-shrink-0 w-20 h-14 rounded-xs overflow-hidden border-2 transition-all ${i === currentImageIndex ? 'border-gold-400 opacity-100' : 'border-transparent opacity-60 hover:opacity-90'}"
          data-index="${i}"
        >
          <img src="${img.src}" alt="${img.title}" class="w-full h-full object-cover" />
        </button>
      `).join('')}
    </div>
  `;

  // Bind clicks
  const activeImg = document.getElementById('modal-active-img');
  const zoomBtn = document.getElementById('zoom-modal-img');
  if (activeImg) {
    activeImg.addEventListener('click', () => {
      openLightbox(images.map(img => img.src), currentImageIndex);
    });
  }
  if (zoomBtn) {
    zoomBtn.addEventListener('click', () => {
      openLightbox(images.map(img => img.src), currentImageIndex);
    });
  }

  document.querySelectorAll('.thumb-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      currentImageIndex = idx;
      renderModalGallery();
    });
  });

  // Controls visibility
  if (galleryControls) {
    if (images.length > 1) {
      galleryControls.classList.remove('hidden');
    } else {
      galleryControls.classList.add('hidden');
    }
  }
}

function nextModalImage() {
  if (!currentProject) return;
  currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
  renderModalGallery();
}

function prevModalImage() {
  if (!currentProject) return;
  currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
  renderModalGallery();
}

function closeModal() {
  if (!projectModal) return;
  projectModal.classList.add('hidden');
  projectModal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Lightbox
export function openLightbox(images, startIndex = 0) {
  if (!lightbox || !lightboxImg) return;
  currentLightboxImages = images;
  currentLightboxIndex = startIndex;

  lightboxImg.src = currentLightboxImages[currentLightboxIndex];
  lightbox.classList.remove('hidden');
  lightbox.classList.add('flex');
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.add('hidden');
  lightbox.classList.remove('flex');
}

function nextLightboxImage() {
  if (currentLightboxImages.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
  lightboxImg.src = currentLightboxImages[currentLightboxIndex];
}

function prevLightboxImage() {
  if (currentLightboxImages.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
  lightboxImg.src = currentLightboxImages[currentLightboxIndex];
}

// Contact Form
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fields = new FormData(form);
    const subject = fields.get('subject').trim();
    const phoneVal = fields.get('phone') ? fields.get('phone').trim() : '';
    const bodyLines = [
      `Name: ${fields.get('name').trim()}`,
      `Email: ${fields.get('email').trim()}`,
    ];
    if (phoneVal) bodyLines.push(`Phone: ${phoneVal}`);
    bodyLines.push('', fields.get('message').trim());
    const body = bodyLines.join('\n');
    const mailto = `mailto:amrsaeed.urban@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    if (successMsg) successMsg.classList.remove('hidden');
  });
}
