

const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartIcon = document.getElementById('cart-icon');
const cartBox = document.getElementById('cart');
const whatsappLink = document.getElementById('whatsapp-link');
const clearCartBtn = document.getElementById('clear-cart');
const searchInput = document.getElementById('search');
const bakeryName = document.getElementById('bakery-name');

let selectedCategory = '';
let cart = {}; // key: productName|sizeLabel, value: { name, size, price, discount, quantity }

// ... your initial variable declarations remain the same

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
        <div class="product-image-wrapper">
          <img src="${p.img}" alt="${p.name}" />
          ${discountBadge}
        </div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        ${sizeOptionsHTML}
        ${discountPrice !== null
          ? `<strong id="price-${p.name}"><span class="original-price">₹${price}</span> ₹${discountPrice}</strong><br>`
          : `<strong id="price-${p.name}">₹${price}</strong><br>`}
        <div id="action-${p.name}">${actionButtonsHTML}</div>
        <div id="bulk-note-${p.name}" class="bulk-discount-note-container"></div>
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

      updateBulkNote(name); // Update bulk discount message when size changes
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

function addToCart(name) {
  const product = products.find(p => p.name === name);
  let size = '';
  let price = product.price;
  let discount = 0;

  if (product.sizes) {
    const select = document.querySelector(`select[data-product="${name}"]`);
    size = select.value;
    price = parseInt(select.options[select.selectedIndex].dataset.price);
    discount = parseInt(select.options[select.selectedIndex].dataset.discount || 0);
  }

  const key = size ? `${name}|${size}` : name;

  if (cart[key]) {
    cart[key].quantity += 1;
  } else {
    cart[key] = { name, size, price, discount, quantity: 1 };
  }

  updateCart();

  const actionDiv = document.getElementById(`action-${name}`);
  actionDiv.innerHTML = `
    <div class="qty-controls">
      <button class="qty-btn" onclick='changeQty("${key}", -1)'>−</button>
      <span>${cart[key].quantity}</span>
      <button class="qty-btn" onclick='changeQty("${key}", 1)'>＋</button>
    </div>`;

  updateBulkNote(name);
}

function changeQty(key, delta) {
  if (cart[key]) {
    cart[key].quantity += delta;
    if (cart[key].quantity <= 0) {
      delete cart[key];
    }

    updateCart();

    const [name, size] = key.split('|');
    const actionDiv = document.getElementById(`action-${name}`);
    if (!cart[key]) {
      actionDiv.innerHTML = `<button onclick='addToCart("${name}")'>Add to Cart</button>`;
    } else {
      actionDiv.innerHTML = `
        <div class="qty-controls">
          <button class="qty-btn" onclick='changeQty("${key}", -1)'>−</button>
          <span>${cart[key].quantity}</span>
          <button class="qty-btn" onclick='changeQty("${key}", 1)'>＋</button>
        </div>`;
    }

    updateBulkNote(name);
  }
}

function isBulkDiscountApplicable(item) {
  const config = BULK_DISCOUNT_PRODUCTS[item.name];
  if (!config) return false;
  if (!item.size || !config.eligibleSizes.includes(item.size)) return false;
  return item.quantity >= config.threshold;
}

function getBulkDiscountRate(item) {
  const config = BULK_DISCOUNT_PRODUCTS[item.name];
  return config ? config.discountRate : 0;
}


function updateBulkNote(productName) {
  const product = products.find(p => p.name === productName);
  const select = document.querySelector(`select[data-product="${productName}"]`);
  const size = select ? select.value : '';
  const key = size ? `${productName}|${size}` : productName;
  const container = document.getElementById(`bulk-note-${productName}`);

  if (cart[key] && isBulkDiscountApplicable(cart[key])) {
    const item = cart[key];
    if (item && isBulkDiscountApplicable(item)) {
      const rate = getBulkDiscountRate(item);
      container.innerHTML = `<div class="bulk-discount-note">Bulk Discount Applied (${rate}% off)</div>`;
    }
  } else {
    container.innerHTML = '';
  }
}

// ... rest of your existing updateCart(), event listeners, image rotation, etc. remain unchanged


function updateCart() {
  cartItems.innerHTML = '';
  let cartCountValue = 0;
  let total = 0;
  let totalDiscount = 0; // To track overall discount including bulk

  let message = 'Order details:\n';

  Object.keys(cart).forEach((key, i) => {
    const item = cart[key];
    cartCountValue += item.quantity;

    const originalPrice = item.price;
    const discountedPricePerUnit = item.price - item.discount;
    let itemTotal = discountedPricePerUnit * item.quantity;

    let bulkDiscountAmount = 0;

    if (isBulkDiscountApplicable(item)) {
      const itemRate = getBulkDiscountRate(item);
      bulkDiscountAmount = (itemTotal * itemRate) / 100;
      itemTotal -= bulkDiscountAmount;
    }

    total += itemTotal;

    // Calculate total discount for this item (discount + bulk discount)
    const itemDiscountTotal = (originalPrice - discountedPricePerUnit) * item.quantity + bulkDiscountAmount;
    totalDiscount += itemDiscountTotal;

    cartItems.innerHTML += `
      <li>
        ${item.name}${item.size ? ` (${item.size})` : ''} x${item.quantity} - ₹${itemTotal.toFixed(2)}
        ${item.discount > 0 ? `<br><small>Unit Price: <s>₹${originalPrice}</s> ₹${discountedPricePerUnit}</small>` : ''}
        ${isBulkDiscountApplicable(item) ? `<div class="bulk-discount-note">Bulk Discount Applied (${getBulkDiscountRate(item)}% off)</div>` : ''}
        <br>
        <button class="qty-btn" onclick='changeQty("${key}", -1)'>−</button>
        <button class="qty-btn" onclick='changeQty("${key}", 1)'>＋</button>
      </li>
    `;

    message += `${i + 1}. ${item.name}${item.size ? ` (${item.size})` : ''} x${item.quantity} - *₹${itemTotal.toFixed(2)}*`;
    if (item.discount > 0) {
      message += ` (Unit Price: ₹${originalPrice} → ₹${discountedPricePerUnit})`;
    }
    if (isBulkDiscountApplicable(item)) {
      message += ` (Includes ${getBulkDiscountRate(item)}% bulk discount)`;
    }    
    message += `\n`;
  });

  cartCount.textContent = cartCountValue;

  if (cartCountValue > 0) {
    message += `*Total: ₹${total.toFixed(2)}*\n`;
    if (totalDiscount > 0) {
      message += `You saved: ₹${totalDiscount.toFixed(2)} on this order! 🎉\n`;
    }
    cartItems.innerHTML += `<li><strong>Total: ₹${total.toFixed(2)}</strong></li>`;
    whatsappLink.href = `https://wa.me/+919760648714?text=${encodeURIComponent(message)}`;
  } else {
    whatsappLink.href = `https://wa.me/+919760648714`;
  }
}


clearCartBtn.addEventListener('click', () => {
  cart = {};
  updateCart();

  document.querySelectorAll('.product').forEach(productEl => {
    const name = productEl.querySelector('h3').innerText;
    const select = productEl.querySelector('select');
    const selectedSize = select ? select.value : '';
    const key = selectedSize ? `${name}|${selectedSize}` : name;

    const actionDiv = document.getElementById(`action-${name}`);
    actionDiv.innerHTML = `<button onclick='addToCart("${name}")'>Add to Cart</button>`;
  });
});

cartIcon.addEventListener('click', () => {
  cartBox.style.display = 'block';
  cartBox.scrollIntoView({ behavior: 'smooth' });
});

searchInput.addEventListener('input', e => {
  renderProducts(e.target.value, selectedCategory);
});

document.querySelectorAll('#category-menu button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#category-menu button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedCategory = btn.dataset.category;
    renderProducts(searchInput.value, selectedCategory);
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    bakeryName.classList.add('fixed');
  } else {
    bakeryName.classList.remove('fixed');
  }
});

// Init
renderProducts();
updateCart();

document.addEventListener("DOMContentLoaded", function () {
  function updateCartVisibility() {
    const count = parseInt(cartCount.textContent, 10);
    cartIcon.style.display = count > 0 ? "inline-block" : "none";
  }

  updateCartVisibility();
  const observer = new MutationObserver(updateCartVisibility);
  observer.observe(cartCount, { childList: true });
});

// Background Image Rotation
const header = document.querySelector('header');

function getRandomImage(folder, prefix, count) {
  const num = String(Math.floor(Math.random() * count) + 1).padStart(2, '0');
  return `img/${folder}/${prefix}${num}.jpg`;
}

const images = [
  getRandomImage('cake', 'C', 40),
  getRandomImage('pizza', 'P', 6),
  getRandomImage('burger', 'B', 2),
  getRandomImage('sandwich', 'S', 2),
  getRandomImage('beverage', 'D', 9)
];

let index = 0;

function rotateBackground() {
  header.style.backgroundImage = `url('${images[index]}')`;
  header.style.backgroundSize = 'cover';
  header.style.backgroundPosition = 'center';
  header.style.transition = 'background-image 1s ease-in-out';
  index = (index + 1) % images.length;
}

rotateBackground();
setInterval(rotateBackground, 3000);
