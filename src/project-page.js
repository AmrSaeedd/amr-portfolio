import { projectsData } from './projects-data.js';

document.addEventListener('DOMContentLoaded', () => {
  // Setup Lightbox for Project Detail Page
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  const galleryItems = Array.from(document.querySelectorAll('.gallery-zoom-target'));
  const imageUrls = galleryItems.map(item => item.getAttribute('data-full-src') || item.getAttribute('src'));
  let activeIndex = 0;

  function openLightbox(index) {
    if (!lightbox || !lightboxImg) return;
    activeIndex = index;
    lightboxImg.src = imageUrls[activeIndex];
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = '';
  }

  function nextImage() {
    activeIndex = (activeIndex + 1) % imageUrls.length;
    lightboxImg.src = imageUrls[activeIndex];
  }

  function prevImage() {
    activeIndex = (activeIndex - 1 + imageUrls.length) % imageUrls.length;
    lightboxImg.src = imageUrls[activeIndex];
  }

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => openLightbox(idx));
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);

  window.addEventListener('keydown', (e) => {
    if (!lightbox || lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });

  // Mobile menu on project pages
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
