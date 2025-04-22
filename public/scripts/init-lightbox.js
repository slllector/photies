if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const lightbox = GLightbox({
      selector: '.glightbox',
      auto_caption:	false,
      touchNavigation: true,
      loop: true
    });
  });
}
