// Cart management (add, remove, quantity, update UI)
// cart.js

// Celebration effects for product card
function createCelebrationEffect(productElement) {
  if (!productElement) return;
  
  // Create confetti/particles
  for (let i = 0; i < 12; i++) {
    const particle = document.createElement('div');
    particle.className = 'celebration-particle';
    particle.innerHTML = ['🎉', '🎊', '🎈', '✨', '💫', '⭐'][Math.floor(Math.random() * 6)];
    
    const xPos = Math.random() * 100;
    const delay = Math.random() * 0.3;
    const duration = 2 + Math.random() * 0.5;
    
    particle.style.left = xPos + '%';
    particle.style.animationDelay = delay + 's';
    particle.style.animationDuration = duration + 's';
    
    productElement.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => particle.remove(), (duration + delay) * 1000);
  }
  
  // Create floating flowers
  for (let i = 0; i < 5; i++) {
    const flower = document.createElement('div');
    flower.className = 'celebration-flower';
    flower.innerHTML = ['🌸', '🌺', '🌼', '🌻', '🌷'][i];
    
    const xPos = Math.random() * 100;
    const delay = Math.random() * 0.2;
    
    flower.style.left = xPos + '%';
    flower.style.animationDelay = delay + 's';
    
    productElement.appendChild(flower);
    
    // Remove flower after animation
    setTimeout(() => flower.remove(), 2500);
  }
  
  // Create floating balloons
  for (let i = 0; i < 4; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'celebration-balloon';
    balloon.innerHTML = '🎈';
    
    const xPos = 20 + Math.random() * 60;
    const delay = Math.random() * 0.4;
    const duration = 3 + Math.random() * 0.5;
    
    balloon.style.left = xPos + '%';
    balloon.style.animationDelay = delay + 's';
    balloon.style.animationDuration = duration + 's';
    
    productElement.appendChild(balloon);
    
    // Remove balloon after animation
    setTimeout(() => balloon.remove(), (duration + delay) * 1000);
  }
  
  // Shake effect on the product card
  productElement.style.animation = 'celebrationShake 0.6s ease-in-out';
  setTimeout(() => {
    productElement.style.animation = '';
  }, 600);
}

function loadCartFromLocalStorage() {
  const storedCart = localStorage.getItem('bakeryCart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
    updateCart();

    // Update UI buttons
    Object.keys(cart).forEach(key => {
      const [name, size] = key.split('|');
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
      
      // Trigger celebration when quantity is increased
      if (delta > 0) {
        // Celebrate on product card
        const productCards = document.querySelectorAll('.product');
        productCards.forEach(card => {
          const productName = card.querySelector('h3')?.innerText;
          if (productName === name) {
            createCelebrationEffect(card);
          }
        });
        
        // Celebrate on cart item
        const cartItems = document.querySelectorAll('.cart-item-with-image');
        cartItems.forEach(cartItem => {
          const cartItemName = cartItem.querySelector('.cart-item-details strong')?.innerText.split('(')[0].trim();
          if (cartItemName === name) {
            createCelebrationEffect(cartItem);
          }
        });
      }
    }
    updateBulkNote(name);
  }
}

