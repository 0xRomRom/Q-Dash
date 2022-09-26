"use strict";

const searchContractBox = document.querySelector(".search-contract-box");
const searchContractButton = document.querySelector(".search-contract");
const closeContractSearch = document.querySelector(".light-close2");
const dropShadow = document.querySelector(".dropshadow");
const searchCoinButton = document.querySelector(".seach-coin-btn");
const addressInput = document.querySelector(".contract-input");
const blockchains = document.querySelector(".blockchains");
const errorText = document.querySelector(".error-text");

closeContractSearch.addEventListener("click", () => {
  searchContractBox.classList.add("hidden");
  dropShadow.classList.add("hidden");
});

searchContractButton.addEventListener("click", () => {
  searchContractBox.classList.remove("hidden");
  dropShadow.classList.remove("hidden");
});

searchCoinButton.addEventListener("click", () => {
  errorText.classList.add("inv");
  coinFetcher();
});

const coinFetcher = async () => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${blockchains.value}/contract/${addressInput.value}`
    );
    const data = await response.json();
    if (data.error) {
      errorText.classList.remove("inv");
    }
  } catch (err) {
    console.log(err);
  }
};
