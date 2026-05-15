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
const safeName = normalizeProductName(productName);
  const product = products.find(p => normalizeProductName(p.name) === safeName);
  const select = document.querySelector(`select[data-product="${safeName}"]`);
  const size = select ? select.value : '';
  const key = size ? `${safeName}|${size}` : safeName;
  const container = document.getElementById(`bulk-note-${safeName}`);
  const offerContainer = document.getElementById(`offer-${safeName}`);

  
    const item = cart[key];
  
    let messages = '';
    let isApplied = false;
  
    if (item) {
      if (item.discount && item.discount > 0) {
        const totalDiscount = item.discount * item.quantity;
        messages += `<div class="bulk-discount-note">✔️ Fixed Discount: ₹${totalDiscount}</div>`;
      }
    
      if (isBulkDiscountApplicable(item)) {
        isApplied = true;
        const rate = getBulkDiscountRate(item);
        const priceAfterFixed = item.price - item.discount;
        const discountAmount = Math.round(priceAfterFixed * item.quantity * (rate / 100));
        messages += `<div class="bulk-discount-note">🎉 Bulk Discount (${rate}%): ₹${discountAmount}</div>`;
      }
    }

    if (container) {
      container.innerHTML = messages;
    }
    
    if (offerContainer && typeof getBulkOfferMessage === 'function') {
      const originalName = product ? product.name : safeName;
      offerContainer.innerHTML = getBulkOfferMessage(originalName, isApplied);
    }
  }
  