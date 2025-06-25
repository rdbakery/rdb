//Utility functions like random image selector, bulk offer messages
// utils.js

function getRandomImage(folder, prefix, count) {
    const num = String(Math.floor(Math.random() * count) + 1).padStart(2, '0');
    return `img/${folder}/${prefix}${num}.jpg`;
  }
  