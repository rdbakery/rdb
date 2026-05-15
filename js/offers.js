//Bulk offer messages and rotator
// offers.js

function getBulkOfferMessage(productName) {
    const config = BULK_DISCOUNT_PRODUCTS[productName];
    if (!config) return '';
  
    const sizes = config.eligibleSizes.join(' or ');
    return `
      <div class="bulk-offer-message" style="cursor: pointer; border: 1px dashed #f7a072; padding: 8px; border-radius: 6px; text-align: center; background-color: #fff9f2; margin-top: 10px; transition: background-color 0.3s ease;" onclick="scrollToProduct('${productName.replace(/'/g, "\\'")}', '${config.eligibleSizes[0].replace(/'/g, "\\'")}')" title="Click to view offer">
        🎉 <strong>Special Offer:</strong> Buy <strong>${config.threshold}</strong> 
        (<em>${sizes}</em>) and get <strong style="color: #d35400;">${config.discountRate}% OFF</strong>! <br><span style="font-size: 0.85em; text-decoration: underline; color: #e67e22; font-weight: bold; cursor: pointer;" onclick="event.stopPropagation(); applyBulkOffer('${productName.replace(/'/g, "\\'")}', '${config.eligibleSizes[0].replace(/'/g, "\\'")}')" title="Click to apply offer">Click to Apply</span>
      </div>`;
  }
  
  const offers = Object.entries(BULK_DISCOUNT_PRODUCTS).map(([productName, config]) => {
    const sizesText = config.eligibleSizes.join(' or ');
    return {
      text: `🎉 Buy ${config.threshold} (${sizesText}) ${productName} and get ${config.discountRate}% OFF!`,
      productName: productName,
      targetSize: config.eligibleSizes[0] // Select first eligible size when clicked
    };
  });
  
  const offerRotator = document.getElementById('offer-rotator');
  let offerIndex = 0;
  
  function rotateOffers() {
    if (offers.length === 0) {
      offerRotator.textContent = "No current offers available.";
      return;
    }
    const offer = offers[offerIndex];
    offerRotator.innerHTML = `<span style="cursor: pointer; text-decoration: underline;" title="Click to view offer">${offer.text}</span>`;
    offerRotator.dataset.product = offer.productName;
    offerRotator.dataset.size = offer.targetSize;
    offerIndex = (offerIndex + 1) % offers.length;
  }
  
  rotateOffers();
  setInterval(rotateOffers, 5000);
  
  offerRotator.addEventListener('click', () => {
    const productName = offerRotator.dataset.product;
    const targetSize = offerRotator.dataset.size;
    if (productName && typeof window.scrollToProduct === 'function') {
      window.scrollToProduct(productName, targetSize);
    } else {
      const productList = document.getElementById('product-list');
      if (productList) productList.scrollIntoView({ behavior: 'smooth' });
    }
  });
  