const aside = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener("click", () => {
  aside.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  aside.style.display = "none";
});
