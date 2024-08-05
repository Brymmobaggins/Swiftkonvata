/** @format */

// const result = document.getElementById("result");
const input = document.getElementById("amount");
console.log(input);
const currency = document.getElementById("from-currency");
const result = document.getElementById("result");
const convertButton = document.getElementById("convert-button");
const settingsIcon = document.getElementById("settings-icon");
const dropdown = document.getElementById("dropdown")
const API_key = "";
const API_URL = "";

convertButton.addEventListener("click", () => {
  convertRate();
});

function convertRate() {
  const totalAmount = input.value * 5;
  result.textContent = totalAmount;
}

settingsIcon.addEventListener("click", () => {
  dropdown.classList.toggle("hidden")
});
