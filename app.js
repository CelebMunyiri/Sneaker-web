"use strict";
const button = document.querySelector(".btn");
let cart = {};

//A function to add items tothe cart
function addCart(item, quantity) {}

button.addEventListener("click", function () {
  const buy = prompt("DO you want to buy the Sneaker");

  if (buy === "yes") {
    button.textContent = "BOUGHT";
  }
});
document.addEventListener("keyup", (e) => {
  if (e.key === "PrintScreen") {
    navigator.clipboard.writeText("");
    alert("Screenshot is denied in this site");
  }
});
