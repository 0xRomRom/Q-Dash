"use strict";

const searchContractBox = document.querySelector(".search-contract-box");
const searchContractButton = document.querySelector(".search-contract");
const closeContractSearch = document.querySelector(".light-close2");
const dropShadow = document.querySelector(".dropshadow-contr");
const searchCoinButton = document.querySelector(".seach-coin-btn");
const addressInput = document.querySelector(".contract-input");
const blockchains = document.querySelector(".blockchains");
const errorText = document.querySelector(".error-text");
const resultContainer = document.querySelector(".result-container");
const inputContainer = document.querySelector(".input-container");
const returnResultButton = document.querySelector(".return-result");
const resultTotalSupplyTxt = document.querySelector(".res-total-sup");

const t1 = document.querySelector(".t1a");
const t2 = document.querySelector(".t2a");
const t3 = document.querySelector(".t3a");
const t4 = document.querySelector(".t4a");
const t5 = document.querySelector(".t5a");

closeContractSearch.addEventListener("click", () => {
  errorText.classList.add("inv");
  dropShadow.classList.add("fadeOut");
  searchContractBox.classList.add("fadeOut");
  setTimeout(() => {
    errorText.classList.add("inv");
    dropShadow.classList.add("hidden");
    searchContractBox.classList.add("hidden");
  }, 500);
});

dropShadow.addEventListener("click", () => {
  errorText.classList.add("inv");
  dropShadow.classList.add("fadeOut");
  searchContractBox.classList.add("fadeOut");
  setTimeout(() => {
    errorText.classList.add("inv");
    dropShadow.classList.add("hidden");
    searchContractBox.classList.add("hidden");
  }, 500);
});

searchContractButton.addEventListener("click", () => {
  searchContractBox.classList.remove("hidden");
  dropShadow.classList.remove("hidden");
  searchContractBox.classList.remove("fadeOut");
  dropShadow.classList.remove("fadeOut");
});

// Attempt to find coin
searchCoinButton.addEventListener("click", () => {
  errorText.classList.add("inv");
  coinFetcher();
});

// Test data with blockchain: Solana
// 7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU

const resultModal = (data) => {
  t1.insertAdjacentHTML("beforeend", data.name);
  t2.insertAdjacentHTML("beforeend", ` $${data.market_data.current_price.usd}`);
  t3.insertAdjacentHTML("beforeend", ` ${data.coingecko_rank}`);
  t4.insertAdjacentText(
    "beforeend",
    ` ${
      data.categories.length !== 0 ? data.categories.join(", ") : "Undefined"
    }`
  );
  t5.insertAdjacentHTML("beforeend", `$${data.symbol.toUpperCase()}`);
  resultTotalSupplyTxt.textContent = `${data.market_data.total_supply
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $${data.symbol.toUpperCase()}`;
};

returnResultButton.addEventListener("click", () => {
  inputContainer.classList.remove("slideOutDiv");
  inputContainer.classList.add("slideInDiv");
  blockchains.value = "avalanche";
  addressInput.value = "";
  resultContainer.classList.remove("slideInDiv");
  resultContainer.classList.add("slideOutDiv");

  setTimeout(() => {
    resultContainer.classList.add("hidden");
    inputContainer.classList.remove("slideInDiv");
    t1.textContent = "";
    t2.textContent = "";
    t3.textContent = "";
    t4.textContent = "";
    t5.textContent = "";
  }, 2000);
});

//

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
    resultModal(data);
    console.log(data.market_data.total_supply);
    inputContainer.classList.add("slideOutDiv");
    resultContainer.classList.remove("hidden");
    resultContainer.classList.add("slideInDiv");
  } catch (err) {
    console.log(err);
  }
};
