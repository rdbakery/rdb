function renderProducts(filter = '', category = '') {
  productList.innerHTML = '';

  products
      .filter(p =>
          p.name.toLowerCase().includes(filter.toLowerCase()) &&
          (category === '' || p.category === category)
      )
      .forEach(p => {
          const productName = normalizeProductName(p.name);
          const div = document.createElement('div');
          div.className = 'product';

          const images = Array.isArray(p.img)
              ? p.img
              : Array.isArray(p.images)
                  ? p.images
                  : p.img
                      ? [p.img]
                      : [];

          let sizeOptionsHTML = '';
          let selectedSize = '';
          let price = p.price;
          let discountPrice = null;
          let discountBadge = '';

          if (p.sizes) {
              const firstSize = p.sizes[0];
              selectedSize = firstSize.label;
              price = firstSize.price;
              if (firstSize.discount) {
                  discountPrice = price - firstSize.discount;
                  discountBadge = `<div class="image-discount-badge"><div class="discount-badge">Save ₹${firstSize.discount}</div></div>`;
              }

              sizeOptionsHTML = `
                  <select class="size-select" data-product="${productName}">
                      ${p.sizes.map(s => {
                          const discount = s.discount ? ` data-discount="${s.discount}"` : '';
                          return `<option value="${s.label}" data-price="${s.price}"${discount}>${s.label}</option>`;
                      }).join('')}
                  </select>
              `;
          }

          const key = selectedSize ? `${productName}|${selectedSize}` : productName;
          const itemInCart = cart[key];

          let actionButtonsHTML = itemInCart
              ? `<div class="qty-controls">
                  <button class="qty-btn" onclick='changeQty("${key}", -1)'>−</button>
                  <span>${itemInCart.quantity}</span>
                  <button class="qty-btn" onclick='changeQty("${key}", 1)'>＋</button>
              </div>`
              : `<button onclick='addToCart("${productName}")'>Add to Cart</button>`;

          let priceHTML = '';
          if (sizeOptionsHTML) {
              // Dropdown is available
              priceHTML = `
                  <div class="size-price-wrapper">
                      ${sizeOptionsHTML}
                      ${discountPrice !== null
                          ? `<strong id="price-${productName}"><span class="original-price">₹${price}</span> ₹${discountPrice}</strong>`
                          : `<strong id="price-${productName}">₹${price}</strong>`
                      }
                  </div>
              `;
          } else {
              // No dropdown, price should be centered
              priceHTML = `
                  <div class="price-center">
                      ${discountPrice !== null
                          ? `<strong id="price-${productName}"><span class="original-price">₹${price}</span> ₹${discountPrice}</strong>`
                          : `<strong id="price-${productName}">₹${price}</strong>`
                      }
                  </div>
              `;
          }

          div.innerHTML = `
              <div class="product-content">
                  <div class="product-image-wrapper">
                      <img class="product-main-image" src="${images[0] || ''}" alt="${productName}" data-image-index="0" />
                      ${images.length > 1 ? `<div class="swipe-indicator"><span class="swipe-count">1/${images.length}</span></div>` : ''}
                      ${discountBadge}
                  </div>
                  <div class="product-details">
                      <h3>${productName}</h3>
                      ${priceHTML}
                      <p>${p.desc}</p>
                      <div class="price-and-button">          
                          <div id="action-${productName}">${actionButtonsHTML}</div>
                      </div>
                      <div id="bulk-note-${productName}" class="bulk-discount-note-container"></div>
                  </div>
              </div>
              <div class="offer-below">${getBulkOfferMessage(productName)}</div>
          `;

          const mainImage = div.querySelector('.product-main-image');
          const swipeIndicator = div.querySelector('.swipe-count');
          if (images.length > 1 && mainImage) {
              let touchStartX = 0;

              const updateSwipeCount = (index) => {
                  if (swipeIndicator) {
                      swipeIndicator.textContent = `${index + 1}/${images.length}`;
                  }
              };

              mainImage.addEventListener('click', () => {
                  const index = parseInt(mainImage.dataset.imageIndex, 10) || 0;
                  const nextIndex = (index + 1) % images.length;
                  mainImage.src = images[nextIndex];
                  mainImage.dataset.imageIndex = nextIndex;
                  updateSwipeCount(nextIndex);
              });

              mainImage.addEventListener('touchstart', (e) => {
                  touchStartX = e.changedTouches[0].clientX;
              });

              mainImage.addEventListener('touchend', (e) => {
                  const touchEndX = e.changedTouches[0].clientX;
                  const deltaX = touchEndX - touchStartX;
                  if (Math.abs(deltaX) > 40) {
                      const index = parseInt(mainImage.dataset.imageIndex, 10) || 0;
                      const nextIndex = deltaX < 0
                          ? (index + 1) % images.length
                          : (index - 1 + images.length) % images.length;
                      mainImage.src = images[nextIndex];
                      mainImage.dataset.imageIndex = nextIndex;
                      updateSwipeCount(nextIndex);
                  }
              });
          }

          productList.appendChild(div);
      });

  document.querySelectorAll('.size-select').forEach(select => {
      select.addEventListener('change', function () {
          updatePrice(this);
          const name = this.dataset.product;
          const selectedSize = this.value;
          const key = `${name}|${selectedSize}`;
          const itemInCart = cart[key];
          const actionDiv = document.getElementById(`action-${name}`);

          if (itemInCart) {
              actionDiv.innerHTML = `
                  <div class="qty-controls">
                      <button class="qty-btn" onclick='changeQty("${key}", -1)'>−</button>
                      <span>${itemInCart.quantity}</span>
                      <button class="qty-btn" onclick='changeQty("${key}", 1)'>＋</button>
                  </div>`;
          } else {
              actionDiv.innerHTML = `<button onclick='addToCart("${name}")'>Add to Cart</button>`;
          }

          updateBulkNote(name);
      });

      updatePrice(select);
  });
}

function updatePrice(select) {
  const price = parseInt(select.options[select.selectedIndex].dataset.price);
  const discount = parseInt(select.options[select.selectedIndex].dataset.discount || 0);
  const name = select.dataset.product;

  if (discount > 0) {
      const discountedPrice = price - discount;
      document.getElementById(`price-${name}`).innerHTML =
          `<span class="original-price">₹${price}</span> ₹${discountedPrice}`;
  } else {
      document.getElementById(`price-${name}`).innerText = `₹${price}`;
  }

  const imageWrapper = select.closest('.product').querySelector('.product-image-wrapper');
  const existingBadge = imageWrapper.querySelector('.image-discount-badge');
  if (existingBadge) existingBadge.remove();

  if (discount > 0) {
      const badgeHTML = `<div class="image-discount-badge"><div class="discount-badge">Save ₹${discount}</div></div>`;
      imageWrapper.insertAdjacentHTML('beforeend', badgeHTML);
  }
}
