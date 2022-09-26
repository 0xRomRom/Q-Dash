"use strict";

const searchContractBox = document.querySelector(".search-contract-box");
const searchContractButton = document.querySelector(".search-contract");
const closeContractSearch = document.querySelector(".light-close2");
const dropShadow = document.querySelector(".dropshadow");
const searchCoinButton = document.querySelector(".seach-coin-btn");
const addressInput = document.querySelector(".contract-input");
const blockchains = document.querySelector(".blockchains");
const errorText = document.querySelector(".error-text");
const resultContainer = document.querySelector(".result-container");
const inputContainer = document.querySelector(".input-container");

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

// 7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU

const resultModal = (data) => {};

const coinFetcher = async () => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${blockchains.value}/contract/${addressInput.value}`
    );
    const data = await response.json();
    if (!response.ok) {
      errorText.classList.remove("inv");
      return;
    }
    inputContainer.classList.add("slideOutDiv");
    resultContainer.classList.remove("hidden");
    resultContainer.classList.add("slideInDiv");
  } catch (err) {
    console.log(err);
  }
};
