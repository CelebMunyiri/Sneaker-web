"use strict";
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  const buy = prompt("DO you want to buy the Sneaker");
  if (buy === "yes") {
    button.textContent = "BOUGHT";
  }
});
