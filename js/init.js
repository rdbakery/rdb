//Initial setup and DOM ready functions
// init.js

renderProducts();
updateCart();

const goToMenuBtn = document.getElementById("go-to-menu");
const menuSection = document.getElementById("category-menu");

const observer = new IntersectionObserver(
  ([entry]) => {
    goToMenuBtn.style.display = entry.isIntersecting ? "none" : "block";
  },
  {
    root: null,
    threshold: 0.1
  }
);

if (menuSection) observer.observe(menuSection);

goToMenuBtn.addEventListener("click", () => {
  menuSection.scrollIntoView({ behavior: "smooth" });
});
