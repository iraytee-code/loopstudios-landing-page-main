// Burger functionality
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
   burger.classList.toggle("open");
   menu.classList.toggle("menu-open");
   body.classList.toggle("no-scroll");
});