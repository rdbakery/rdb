//DOM event listeners (clicks, input, scroll, clear cart)
// events.js

clearCartBtn.addEventListener('click', () => {
  document.querySelectorAll('.bulk-discount-note, .bulk-discount-message').forEach(el => el.remove());
  
  cart = {};
  updateCart();

  // Clear local storage
  localStorage.removeItem('bakeryCart');

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
  
      setTimeout(() => {
        Object.keys(cart).forEach(key => {
          const [name, size] = key.split('|');
          updateBulkNote(name);
        });
      }, 0);
    });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      bakeryName.classList.add('fixed');
    } else {
      bakeryName.classList.remove('fixed');
    }
  });
  

  function selectCategory(category) {
    selectedCategory = category;
  
    // Update active button styling
    document.querySelectorAll('#category-menu button').forEach(b => b.classList.remove('active'));
    const targetBtn = document.querySelector(`#category-menu button[data-category="${category}"]`);
    if (targetBtn) {
      targetBtn.classList.add('active');
    }
  
    // Render products
    renderProducts(searchInput.value, selectedCategory);
  
    // Restore bulk notes after rendering
    setTimeout(() => {
      Object.keys(cart).forEach(key => {
        const [name, size] = key.split('|');
        updateBulkNote(name);
      });
    }, 0);
  }


// Auto-select 'All' category after everything is ready
window.addEventListener('load', () => {
  selectCategory(''); // Select "All" category on load
});
