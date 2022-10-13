"use strict";

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

// Toggle to watchlist view
viewWatchlist.addEventListener("click", () => {
  viewWatchlist.classList.remove("fadeColorOut");
  viewWatchlist.classList.add("fadeColorIn");
  viewAssets.classList.add("fadeColorOut");
  watchListBox.classList.remove("hidden");
  watchListBox.classList.add("fadeBoxIn");
  assetsBox.classList.add("fadeBoxOut");
  setTimeout(() => {
    assetsBox.classList.add("hidden");
    assetsBox.classList.remove("fadeBoxOut");
  }, 500);
});

// Toggle to assets view
viewAssets.addEventListener("click", () => {
  viewAssets.classList.remove("fadeColorOut");
  viewAssets.classList.add("fadeColorIn");
  viewWatchlist.classList.add("fadeColorOut");
  assetsBox.classList.remove("hidden");
  assetsBox.classList.add("fadeBoxIn");
  watchListBox.classList.add("fadeBoxOut");
  setTimeout(() => {
    watchListBox.classList.add("hidden");
    watchListBox.classList.remove("fadeBoxOut");
  });
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
  modalDropShadow.classList.remove("hidden");
  addItemDiv.classList.remove("hidden");
});

// Close search modal
modalDropShadow.addEventListener("click", () => {
  modalDropShadow.classList.add("hidden");
  addItemDiv.classList.add("hidden");
});

closeSearchModal.addEventListener("click", () => {
  modalDropShadow.classList.add("hidden");
  addItemDiv.classList.add("hidden");
});

searchInputButton.addEventListener("click", () => {});

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
