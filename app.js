"use strict";
const button = document.querySelector(".btn");
button.addEventListener("click", function () {
  if (prompt("Do you want to buy this").valueOf === "yes") {
    button.textContent = "BOUGHT";
  }
});
