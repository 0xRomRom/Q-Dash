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
const returnResultButton = document.querySelector(".return-result");

const t1 = document.querySelector(".t1a");
const t2 = document.querySelector(".t2a");
const t3 = document.querySelector(".t3a");
const t4 = document.querySelector(".t4a");
const t5 = document.querySelector(".t5a");

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

const resultModal = (data) => {
  console.log(data);
  t1.insertAdjacentHTML("beforeend", data.name);
  t2.insertAdjacentHTML(
    "beforeend",
    ` $${data.market_data.current_price.usd.toFixed(5)}`
  );
  t3.insertAdjacentHTML("beforeend", ` ${data.coingecko_rank}`);
  t4.insertAdjacentHTML("beforeend", ` ${data.categories.join(", ")}`);
  t5.insertAdjacentHTML("beforeend", `$${data.symbol}`);
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
    inputContainer.classList.add("slideOutDiv");
    resultContainer.classList.remove("hidden");
    resultContainer.classList.add("slideInDiv");
  } catch (err) {
    console.log(err);
  }
};
