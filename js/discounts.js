//Discount logic (bulk discount, fixed discount notes)
// discounts.js

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
    container.innerHTML = '';
  
    const item = cart[key];
    if (!item) return;
  
    let messages = '';
  
    if (item.discount && item.discount > 0) {
      const totalDiscount = item.discount * item.quantity;
      messages += `<div class="bulk-discount-note">Fixed Discount Applied: ₹${totalDiscount} off</div>`;
    }
  
    if (isBulkDiscountApplicable(item)) {
      const rate = getBulkDiscountRate(item);
      const priceAfterFixed = item.price - item.discount;
      const discountAmount = Math.round(priceAfterFixed * item.quantity * (rate / 100));
      messages += `<div class="bulk-discount-note">Bulk Discount Applied (${rate}% off): ₹${discountAmount} off</div>`;
    }
  
    container.innerHTML = messages;
  }
  