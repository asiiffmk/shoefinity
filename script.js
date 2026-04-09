let count = 0;

function addToCart() {
  count++;
  document.getElementById("cart-count").innerText = count;
}
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
});