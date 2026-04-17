const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-popup");
const orderButtons = document.querySelectorAll(".order-btn, .hero-btn");

orderButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
  }
});
