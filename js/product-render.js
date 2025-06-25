//Product rendering and filtering

// product-render.js

function renderProducts(filter = '', category = '') {
    productList.innerHTML = '';
  
    products
      .filter(p =>
        p.name.toLowerCase().includes(filter.toLowerCase()) &&
        (category === '' || p.category === category)
      )
      .forEach(p => {
        const div = document.createElement('div');
        div.className = 'product';
  
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
            <select class="size-select" data-product="${p.name}">
              ${p.sizes.map(s => {
                const discount = s.discount ? ` data-discount="${s.discount}"` : '';
                return `<option value="${s.label}" data-price="${s.price}"${discount}>${s.label}</option>`;
              }).join('')}
            </select>
          `;
        }
  
        const key = selectedSize ? `${p.name}|${selectedSize}` : p.name;
        const itemInCart = cart[key];
  
        let actionButtonsHTML = itemInCart
          ? `<div class="qty-controls">
              <button class="qty-btn" onclick='changeQty("${key}", -1)'>−</button>
              <span>${itemInCart.quantity}</span>
              <button class="qty-btn" onclick='changeQty("${key}", 1)'>＋</button>
            </div>`
          : `<button onclick='addToCart("${p.name}")'>Add to Cart</button>`;
  
          div.innerHTML = `
          <div class="product-content">
            <div class="product-image-wrapper">
              <img src="${p.img}" alt="${p.name}" />
              ${discountBadge}
            </div>
            <div class="product-details">
              <h3>${p.name}</h3>
              ${sizeOptionsHTML}
              <p>${p.desc}</p>
              <div class="price-and-button">
                ${discountPrice !== null
                  ? `<strong id="price-${p.name}"><span class="original-price">₹${price}</span> ₹${discountPrice}</strong>`
                  : `<strong id="price-${p.name}">₹${price}</strong>`
                }
                <div id="action-${p.name}">${actionButtonsHTML}</div>
              </div>
              <div id="bulk-note-${p.name}" class="bulk-discount-note-container"></div>
            </div>
          </div>
          <div class="offer-below">${getBulkOfferMessage(p.name)}</div>
        `;
        
        
        
        
  
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
  