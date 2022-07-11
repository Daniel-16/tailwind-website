const button = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

button.addEventListener("click", () => {
  //   nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
  nav.classList.toggle("flex");
});
