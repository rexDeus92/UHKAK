const burgerBtn = document.querySelector(".burger-btn");
const burgerBtnSvg = document.querySelectorAll(".burger-btn svg");
const burgerContainer = document.querySelector(".burger-container");

burgerBtn.addEventListener("click", () => {
  burgerBtnSvg.forEach((svg) => {
    svg.classList.toggle("hidden");
  });
  burgerContainer.classList.toggle("burger-container-active");
});