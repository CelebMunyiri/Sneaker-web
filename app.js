"use strict";
const button = document.querySelector(".btn");
function buy() {
  prompt("DO you want to buy the Sneaker");
}
button.addEventListener("click", function () {
  buy();
  if (buy() === "yes") {
    button.textContent = "BOUGHT";
  }
});
