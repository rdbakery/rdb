window.onload = function () {
  const popup = document.getElementById('thank-you-popup');
  if (popup && typeof APP_CONFIG !== 'undefined' && APP_CONFIG.features.popupOnLoad) {
    popup.style.display = 'flex';
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const popupOverlay = document.getElementById('thank-you-popup');
  const closeBtn = document.querySelector('.popup-close-btn');

  if (!popupOverlay || !closeBtn) return;

  closeBtn.addEventListener('click', function () {
    popupOverlay.style.display = 'none';
  });
});
