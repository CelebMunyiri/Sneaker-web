"use strict";
const button = document.querySelector(".btn");
let cart = {};
const product = [
  {
    id: 0,
    image: image / gg - 1,
    title: "Z Flip foldable",
    price: 120,
  },
  {
    id: 1,
    image: image / gg - 2,
  },
  {
    id: 2,
    image: image / gg - 3,
  },
];
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
