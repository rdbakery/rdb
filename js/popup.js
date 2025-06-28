window.addEventListener('load', function () {
    const popup = document.getElementById('thank-you-popup');
    const closeBtn = document.getElementById('popup-close-btn');
    if (popup) popup.style.display = 'flex';
    if (closeBtn) {
      closeBtn.addEventListener('click', () => popup.style.display = 'none');
    }
  });
  