window.addEventListener('load', function () {
    const popup = document.getElementById('thank-you-popup');
    const closeBtn = document.getElementById('popup-close-btn');
    if (popup) popup.style.display = 'flex';
    if (closeBtn) {
      closeBtn.addEventListener('click', () => popup.style.display = 'none');
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('thank-you-popup');
    const popupContent = document.querySelector('.popup-content');
    const closeBtn = document.getElementById('popup-close-btn');
  
    // Close when clicking outside content
    popupOverlay.addEventListener('click', function (e) {
      if (!popupContent.contains(e.target)) {
        popupOverlay.style.display = 'none';
      }
    });
  
    // Close when clicking close button
    closeBtn.addEventListener('click', function () {
      popupOverlay.style.display = 'none';
    });
  });

  document.getElementById('thank-you-popup').style.display = 'flex';
