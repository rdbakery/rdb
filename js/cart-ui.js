//Cart UI updates (cart list, cart icon visibility, WhatsApp message)
// cart-ui.js

function updateCart() {
    cartItems.innerHTML = '';
    let cartCountValue = 0;
    let total = 0;
    let totalDiscount = 0;
  
    let message = 'Order details:\n';
  
    Object.keys(cart).forEach((key, i) => {
      const item = cart[key];
      cartCountValue += item.quantity;
  
      const originalPrice = item.price;
      const fixedDiscount = item.discount;
      const priceAfterFixedDiscount = originalPrice - fixedDiscount;
      let itemTotal = priceAfterFixedDiscount * item.quantity;
  
      let bulkDiscountAmount = 0;
      let bulkDiscountRate = 0;
      if (isBulkDiscountApplicable(item)) {
        bulkDiscountRate = getBulkDiscountRate(item);
        bulkDiscountAmount = (itemTotal * bulkDiscountRate) / 100;
        itemTotal -= bulkDiscountAmount;
      }
  
      total += itemTotal;
      const itemDiscountTotal = (fixedDiscount * item.quantity) + bulkDiscountAmount;
      totalDiscount += itemDiscountTotal;
  
      const product = products.find(p => p.name === item.name);
      const imgSrc = product?.img || '';
  
      cartItems.innerHTML += `
        <li class="cart-item-with-image">
          <div class="cart-img-wrapper">
            <img src="${imgSrc}" alt="${item.name}" class="cart-img-thumb" />
          </div>
          <div class="cart-item-details">
            <strong>${item.name}${item.size ? ` (${item.size})` : ''}</strong> x${item.quantity} - ₹${itemTotal.toFixed(2)}
            <br>
            <small>Unit Price: ₹${originalPrice.toFixed(2)}</small>
            ${fixedDiscount > 0 ? `<br><small class="bulk-discount-note">(Fixed Discount: ₹${fixedDiscount} × ${item.quantity} = -₹${(fixedDiscount * item.quantity).toFixed(2)})</small>` : ''}
            ${bulkDiscountRate > 0
              ? `<br><small class="bulk-discount-note">(Bulk Discount: ${bulkDiscountRate}% = -₹${bulkDiscountAmount.toFixed(2)})</small>`
              : ''}
            
            <br>
            <button class="qty-btn" onclick='changeQty("${key}", -1)'>-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" onclick='changeQty("${key}", 1)'>+</button>
          </div>
        </li>
      `;
  
      message += `${i + 1}. ${item.name}${item.size ? ` (${item.size})` : ''} x${item.quantity} - *₹${itemTotal.toFixed(2)}*\n`;
      message += `   • Unit Price: ₹${originalPrice.toFixed(2)}\n`;
  
      if (fixedDiscount > 0) {
        message += `   • - Fixed Discount: ₹${fixedDiscount} × ${item.quantity} = ₹${(fixedDiscount * item.quantity).toFixed(2)}\n`;
      }
      if (bulkDiscountRate > 0) {
        message += `   • - Bulk Discount (${bulkDiscountRate}%): ₹${bulkDiscountAmount.toFixed(2)}\n`;
      }
  
      message += `\n`;
    });
  
    cartCount.textContent = cartCountValue;
  
    if (cartCountValue > 0) {
      message += `\n🧮 *Total: ₹${total.toFixed(2)}*\n`;
      if (totalDiscount > 0) {
        message += `🎉 *You saved: ₹${totalDiscount.toFixed(2)} on this order!*\n`;
      }
      cartItems.innerHTML += `
        <li><strong>Total: ₹${total.toFixed(2)}</strong></li>
        ${totalDiscount > 0 ? `<li class="cart-savings">🎉 You saved ₹${totalDiscount.toFixed(2)} on this order!</li>` : ''}
      `;
  
      whatsappLink.href = `https://wa.me/+919760648714?text=${encodeURIComponent(message)}`;
    } else {
      whatsappLink.href = `https://wa.me/+919760648714`;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    function updateCartVisibility() {
      const count = parseInt(cartCount.textContent, 10);
      cartIcon.style.display = count > 0 ? "inline-block" : "none";
    }
  
    updateCartVisibility();
    const observer = new MutationObserver(updateCartVisibility);
    observer.observe(cartCount, { childList: true });
  });
  