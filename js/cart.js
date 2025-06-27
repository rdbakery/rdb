// Cart management (add, remove, quantity, update UI)
// cart.js


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
    }
    updateBulkNote(name);
  }
}

