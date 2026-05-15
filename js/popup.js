window.onload = function () {
  const popup = document.getElementById('thank-you-popup');
  if (popup && typeof APP_CONFIG !== 'undefined' && APP_CONFIG.features.popupOnLoad) {
    popup.style.display = 'flex';
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const popupOverlay = document.getElementById('thank-you-popup');
  const popupContent = document.querySelector('.popup-content');

  if (!popupOverlay || !popupContent) return;

  popupOverlay.addEventListener('click', function (e) {
    if (!popupContent.contains(e.target)) {
      popupOverlay.style.display = 'none';
    }
  });

  popupContent.addEventListener('click', function () {
    popupOverlay.style.display = 'none';
  });
});
