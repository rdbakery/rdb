//Bulk offer messages and rotator
// offers.js

function getBulkOfferMessage(productName) {
    const config = BULK_DISCOUNT_PRODUCTS[productName];
    if (!config) return '';
  
    const sizes = config.eligibleSizes.join(' or ');
    return `
      <div class="bulk-offer-message">
        🎉 <strong>Special Offer:</strong> Buy any <strong>${config.threshold}</strong> 
        (<em>${sizes}</em>) and get <strong>${config.discountRate}% OFF</strong>!
      </div>`;
  }
  
  const offers = Object.entries(BULK_DISCOUNT_PRODUCTS).map(([productName, config]) => {
    const sizesText = config.eligibleSizes.join(' or ');
    return `🎉 Buy ${config.threshold} (${sizesText}) of ${productName} and get ${config.discountRate}% OFF!`;
  });
  
  const offerRotator = document.getElementById('offer-rotator');
  let offerIndex = 0;
  
  function rotateOffers() {
    if (offers.length === 0) {
      offerRotator.textContent = "No current offers available.";
      return;
    }
    offerRotator.textContent = offers[offerIndex];
    offerIndex = (offerIndex + 1) % offers.length;
  }
  
  rotateOffers();
  setInterval(rotateOffers, 5000);
  
  offerRotator.addEventListener('click', () => {
    const productList = document.getElementById('product-list');
    if (productList) productList.scrollIntoView({ behavior: 'smooth' });
  });
  