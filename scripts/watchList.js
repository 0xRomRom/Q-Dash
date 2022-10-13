"use strict";

// const sendData = fetch(
//   `https://qdash-3fe95-default-rtdb.europe-west1.firebasedatabase.app/${getStorage}.json`,
//   {
//     method: "POST",
//     body: JSON.stringify(someInput.value),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }
// );

const watchListButton = document.querySelector(".watchlist");
const watchListClose = document.querySelector(".watch-close");
const watchListDiv = document.querySelector(".watchlist-div");
const dropShadow = document.querySelector(".dropshadow");
const viewWatchlist = document.querySelector(".view-watchlist");
const watchListBox = document.querySelector(".watchlist-box");
const viewAssets = document.querySelector(".view-assets");
const assetsBox = document.querySelector(".assets-box");
const addItemToWatchlist = document.querySelector(".add-to-watchlist");
const modalDropShadow = document.querySelector(".modal-dropshadow");
const closeSearchModal = document.querySelector(".inner-search-close");
const addItemDiv = document.querySelector(".add-item-div");
const searchInputButton = document.querySelector(".add-search-button");
const searchCoinInput = document.querySelector(".coin-search-input");
const noCoinFoundTxt = document.querySelector(".no-search-res");
const noCoinFoundTxt2 = document.querySelector(".no-search-res2");
const coinResultLogo = document.querySelector(".coin-result-logo");
const searchResultTitle = document.querySelector(".search-res-title");
const addToWatchList = document.querySelector(".item-result-lower");
const loadSpinner = document.querySelector(".lds-ripple");

// Toggle to watchlist view
viewWatchlist.addEventListener("click", () => {
  viewWatchlist.classList.remove("fadeColorOut");
  viewWatchlist.classList.add("fadeColorIn");
  viewAssets.classList.add("fadeColorOut");
  watchListBox.classList.remove("hidden");
  watchListBox.classList.add("fadeBoxIn");
  assetsBox.classList.add("hidden");

  setTimeout(() => {
    watchListBox.classList.remove("fadeBoxIn");
  }, 500);
});

// Toggle to assets view
viewAssets.addEventListener("click", () => {
  viewAssets.classList.remove("fadeColorOut");
  viewAssets.classList.add("fadeColorIn");
  viewWatchlist.classList.add("fadeColorOut");
  assetsBox.classList.remove("hidden");
  assetsBox.classList.add("fadeBoxIn");
  //   watchListBox.classList.add("fadeBoxOut");

  watchListBox.classList.add("hidden");
  //   watchListBox.classList.remove("fadeBoxOut");
});

// Open watchlist modal
watchListButton.addEventListener("click", () => {
  const getStorage = localStorage.getItem("loggedIn");
  if (!getStorage) {
    window.location.href = "https://www.qdash.net/login.html";
  } else {
    watchListDiv.classList.remove("hidden");
    dropShadow.classList.remove("hidden");
  }
});

// Close watchlist modal
dropShadow.addEventListener("click", () => {
  watchListDiv.classList.add("hidden");
  dropShadow.classList.add("hidden");
});

watchListClose.addEventListener("click", () => {
  watchListDiv.classList.add("hidden");
  dropShadow.classList.add("hidden");
});

// Open search modal
addItemToWatchlist.addEventListener("click", () => {
  addItemDiv.classList.remove("hidden");
  modalDropShadow.classList.remove("hidden");
  searchCoinInput.focus();
});

// Close search modal
modalDropShadow.addEventListener("click", () => {
  addItemDiv.classList.add("hidden");
  modalDropShadow.classList.add("hidden");
});

closeSearchModal.addEventListener("click", () => {
  addItemDiv.classList.add("hidden");
  modalDropShadow.classList.add("hidden");
});

// Used to store user inserted search value
let userValue;

// Search for user input (1/3)
const coinSearcher = async () => {
  noCoinFoundTxt2.classList.add("hidden");
  if (searchCoinInput.value === "") {
    noCoinFoundTxt2.classList.remove("hidden");
    return;
  }
  loadSpinner.classList.remove("hidden");
  addToWatchList.classList.add("hidden");
  let searchValue = searchCoinInput.value.toLowerCase();
  userValue = searchValue;
  noCoinFoundTxt.classList.add("hidden");
  const response = await fetch(
    `https://api.coingecko.com/api/v3/search?query=${searchValue}`
  );
  const data = await response.json();
  if (data.coins.length === 0) {
    noCoinFoundTxt.classList.remove("hidden");
    return;
  } else {
    nameChecker(data);
    console.log(data);
  }
};

// Check for match and return right api-id (2/3)
const nameChecker = (data) => {
  for (let value of Object.values(data.coins)) {
    if (
      value.symbol.toLowerCase() === userValue ||
      value.name.toLowerCase() === userValue
    ) {
      dataFetcher(value.id);
      return;
    }
  }
};

// Re-fetching coin and displaying result (3/3)
const dataFetcher = async (id) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    const data = await response.json();

    const response3 = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    const data2 = await response3.json();
    console.log(data[0]);
    console.log(data2);
    renderUI(data[0], data2);
  } catch (err) {
    console.log(err);
  }
};

const renderUI = (data1, data2) => {
  coinResultLogo.src = data1.image;
  searchResultTitle.textContent = data1.name;
  loadSpinner.classList.add("hidden");
  addToWatchList.classList.remove("hidden");
  searchCoinInput.value = "";
};

// Search coin
searchInputButton.addEventListener("click", coinSearcher);

// Search by enter key
searchCoinInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    coinSearcher();
  }
});

// addToWatchList.addEventListener("click", coinSearcher);
