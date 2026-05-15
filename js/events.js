//DOM event listeners (clicks, input, scroll, clear cart)
// events.js

clearCartBtn.addEventListener('click', () => {
  document.querySelectorAll('.bulk-discount-note, .bulk-discount-message').forEach(el => el.remove());
  
  cart = {};
  updateCart();

  // Clear local storage
  localStorage.removeItem('bakeryCart');

  // Close cart popup after clearing
  closeCartPopup();

  document.querySelectorAll('.product').forEach(productEl => {
    const name = productEl.querySelector('h3').innerText;
    const select = productEl.querySelector('select');
    const selectedSize = select ? select.value : '';
    const key = selectedSize ? `${name}|${selectedSize}` : name;

    const actionDiv = document.getElementById(`action-${name}`);
    actionDiv.innerHTML = `<button onclick='addToCart("${name}")'>Add to Cart</button>`;
  });
});

function closeCartPopup() {
  if (cartPopup) {
    cartPopup.style.display = 'none';
    document.body.style.overflow = '';
  }
}

cartIcon.addEventListener('click', () => {
  if (cartPopup) {
    cartPopup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
});

const closeCartPopupBtn = document.getElementById('close-cart-popup');
if (closeCartPopupBtn) {
  closeCartPopupBtn.addEventListener('click', closeCartPopup);
}

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

window.scrollToProduct = function(productName, targetSize = null) {
  const product = products.find(p => {
    const pName = typeof normalizeProductName === 'function' ? normalizeProductName(p.name) : p.name;
    const targetName = typeof normalizeProductName === 'function' ? normalizeProductName(productName) : productName;
    return pName === targetName;
  });

  if (product) {
    if (typeof searchInput !== 'undefined' && searchInput) searchInput.value = '';
    
    if (typeof selectedCategory !== 'undefined' && selectedCategory !== product.category && typeof selectCategory === 'function') {
      selectCategory(product.category);
    } else if (typeof renderProducts === 'function') {
      renderProducts('', typeof selectedCategory !== 'undefined' ? selectedCategory : '');
    }

    setTimeout(() => {
      const productCards = document.querySelectorAll('.product');
      for (let card of productCards) {
        const title = card.querySelector('h3');
        if (title) {
            const tName = typeof normalizeProductName === 'function' ? normalizeProductName(title.innerText) : title.innerText;
            const targetName = typeof normalizeProductName === 'function' ? normalizeProductName(productName) : productName;
            
            if (tName === targetName) {
              if (targetSize) {
                  const select = card.querySelector('select.size-select');
                  if (select) {
                      for (let i = 0; i < select.options.length; i++) {
                          if (select.options[i].value === targetSize) {
                              select.selectedIndex = i;
                              select.dispatchEvent(new Event('change'));
                              break;
                          }
                      }
                  }
              }

              if (typeof closeCartPopup === 'function') closeCartPopup();

              card.scrollIntoView({ behavior: 'smooth', block: 'center' });
              const originalTransition = card.style.transition;
              const originalBoxShadow = card.style.boxShadow;
              card.style.transition = 'box-shadow 0.5s ease-in-out';
              card.style.boxShadow = '0 0 15px 4px rgba(255, 140, 0, 0.7)';
              setTimeout(() => {
                card.style.boxShadow = originalBoxShadow;
                setTimeout(() => { card.style.transition = originalTransition; }, 500);
              }, 2000);
              break;
            }
        }
      }
    }, 150);
  }
};

window.applyBulkOffer = function(productName, targetSize = null) {
  // First, scroll to the product and select the target size
  if (typeof window.scrollToProduct === 'function') {
    window.scrollToProduct(productName, targetSize);
  }

  // After the UI updates, apply the required quantity to the cart
  setTimeout(() => {
    if (typeof BULK_DISCOUNT_PRODUCTS !== 'undefined' && typeof addToCart === 'function') {
      const pName = typeof normalizeProductName === 'function' ? normalizeProductName(productName) : productName;
      
      let config = BULK_DISCOUNT_PRODUCTS[productName];
      if (!config) {
        const foundKey = Object.keys(BULK_DISCOUNT_PRODUCTS).find(
          k => (typeof normalizeProductName === 'function' ? normalizeProductName(k) : k) === pName
        );
        if (foundKey) config = BULK_DISCOUNT_PRODUCTS[foundKey];
      }

      if (config) {
        const key = targetSize ? `${pName}|${targetSize}` : pName;
        const currentQty = (typeof cart !== 'undefined' && cart[key]) ? cart[key].quantity : 0;
        const needed = config.threshold - currentQty;
        
        if (needed > 0) {
          for (let i = 0; i < needed; i++) {
            addToCart(pName); // Adds item (reads DOM select updated by scrollToProduct)
          }
        } else if (currentQty === 0) {
          addToCart(pName);
        }
      }
    }
  }, 350); 
};
