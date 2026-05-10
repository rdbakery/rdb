// Cart management (add, remove, quantity, update UI)
// cart.js

// Celebration effects for product card
function createCelebrationEffect(productElement) {
  if (!productElement) return;

  const rect = productElement.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Create confetti/particles
  for (let i = 0; i < 12; i++) {
    const particle = document.createElement('div');
    particle.className = 'celebration-particle';
    particle.innerHTML = ['🎉', '🎊', '🎈', '✨', '💫', '⭐'][Math.floor(Math.random() * 6)];

    const delay = Math.random() * 0.3;
    const duration = 2 + Math.random() * 0.5;

    particle.style.left = `${centerX}px`;
    particle.style.top = `${centerY}px`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;

    document.body.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => particle.remove(), (duration + delay) * 1000);
  }

  // Create floating flowers
  for (let i = 0; i < 5; i++) {
    const flower = document.createElement('div');
    flower.className = 'celebration-flower';
    flower.innerHTML = ['🌸', '🌺', '🌼', '🌻', '🌷'][i];

    const xPos = rect.left + Math.random() * rect.width;
    const delay = Math.random() * 0.2;

    flower.style.left = `${xPos}px`;
    flower.style.top = `${rect.top - 20}px`;
    flower.style.animationDelay = `${delay}s`;

    document.body.appendChild(flower);

    // Remove flower after animation
    setTimeout(() => flower.remove(), 2500);
  }

  // Create floating balloons
  for (let i = 0; i < 4; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'celebration-balloon';
    balloon.innerHTML = '🎈';

    const xPos = rect.left + 20 + Math.random() * (rect.width - 40);
    const delay = Math.random() * 0.4;
    const duration = 3 + Math.random() * 0.5;

    balloon.style.left = `${xPos}px`;
    balloon.style.top = `${rect.bottom - 20}px`;
    balloon.style.animationDelay = `${delay}s`;
    balloon.style.animationDuration = `${duration}s`;

    document.body.appendChild(balloon);

    // Remove balloon after animation
    setTimeout(() => balloon.remove(), (duration + delay) * 1000);
  }
}

function loadCartFromLocalStorage() {
  const storedCart = localStorage.getItem('bakeryCart');
  if (storedCart) {
    cart = JSON.parse(storedCart);

    // Normalize any legacy keys with whitespace
    Object.keys(cart).forEach(oldKey => {
      const [rawName, size] = oldKey.split('|');
      const name = normalizeProductName(rawName);
      const newKey = size ? `${name}|${size}` : name;
      if (newKey !== oldKey) {
        cart[newKey] = cart[oldKey];
        delete cart[oldKey];
      }
    });

    updateCart();

    // Update UI buttons
    Object.keys(cart).forEach(key => {
      const [rawName, size] = key.split('|');
      const name = normalizeProductName(rawName);
      const actionDiv = document.getElementById(`action-${name}`);
      if (actionDiv) {
        actionDiv.innerHTML = `
          <div class="qty-controls">
            <button class="qty-btn" onclick='changeQty("${key}", -1)'>−</button>
            <span>${cart[key].quantity}</span>
            <button class="qty-btn" onclick='changeQty("${key}", 1)'>＋</button>
          </div>`;
      }
    });
  }
}

// Save cart to local storage
function saveCartToLocalStorage() {
  localStorage.setItem('bakeryCart', JSON.stringify(cart));
}

function addToCart(name) {
  name = normalizeProductName(name);
  const product = products.find(p => normalizeProductName(p.name) === name);
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
  saveCartToLocalStorage(); // Save cart after adding

  const actionDiv = document.getElementById(`action-${name}`);
  actionDiv.innerHTML = `
    <div class="qty-controls">
      <button class="qty-btn" onclick='changeQty("${key}", -1)'>−</button>
      <span>${cart[key].quantity}</span>
      <button class="qty-btn" onclick='changeQty("${key}", 1)'>＋</button>
    </div>`;

  // Find and trigger celebration on the specific product card
  const productCards = document.querySelectorAll('.product');
  productCards.forEach(card => {
    const productName = card.querySelector('h3')?.innerText;
    if (productName === name) {
      createCelebrationEffect(card);
    }
  });

  updateBulkNote(name);
}

function changeQty(key, delta) {
  if (cart[key]) {
    cart[key].quantity += delta;
    if (cart[key].quantity <= 0) {
      delete cart[key];
    }

    updateCart();
    saveCartToLocalStorage(); // Save cart after quantity change

    const [rawName, size] = key.split('|');
    const name = normalizeProductName(rawName);
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
      
      // Trigger celebration when quantity is increased
      if (delta > 0) {
        const normalizedName = normalizeProductName(name);

        // Celebrate on product card only
        const productCards = document.querySelectorAll('.product');
        productCards.forEach(card => {
          const productName = normalizeProductName(card.querySelector('h3')?.innerText);
          if (productName === normalizedName) {
            createCelebrationEffect(card);
          }
        });
      }
    }
    updateBulkNote(name);
  }
}

