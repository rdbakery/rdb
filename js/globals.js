// globals.js

// Global App Configuration
const APP_CONFIG = {
  features: {
    popupOnLoad: true,          // Show popup when the page loads or reloads
    celebrationEffects: true,    // Confetti/flower effects when adding items to the cart
    offersRotator: true,         // Display the rotating offers banner at the top
    antiDevTools: true,         // Prevent right-click, F12, and opening DevTools
    showProductDescription: true // Show product description on product cards
  },
  contact: {
    whatsappNumber: '+919760648714'
  }
};

// DOM Elements
const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartIcon = document.getElementById('cart-icon');
const cartPopup = document.getElementById('cart-popup');
const cartBox = document.getElementById('cart');
const whatsappLink = document.getElementById('whatsapp-link');
const clearCartBtn = document.getElementById('clear-cart');
const searchInput = document.getElementById('search');
const bakeryName = document.getElementById('bakery-name');

let selectedCategory = '';
let cart = {}; // key: productName|sizeLabel, value: { name, size, price, discount, quantity }
