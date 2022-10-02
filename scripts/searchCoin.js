"use strict";

const searchModalButton = document.querySelector(".search-button");
const searchModal = document.querySelector(".search-modal");
const dropBg = document.querySelector(".dropshadow-srch");
const closeSearchModal = document.querySelector(".light-close4");
const searchInput = document.querySelector(".search-coin-input");
const searchButton = document.querySelector(".search-coin-btn");
const cantFindText = document.querySelector(".cant-find");

//Open search modal
searchModalButton.addEventListener("click", () => {
  dropBg.classList.remove("hidden");
  dropBg.classList.remove("fadeOut");
  searchModal.classList.remove("fadeOut");
  searchModal.classList.remove("hidden");
  searchModal.classList.remove("fadeOut");
  searchModal.classList.remove("hidden");
});

//Close search modal
dropBg.addEventListener("click", () => {
  dropBg.classList.add("fadeOut");
  searchModal.classList.add("fadeOut");
  setTimeout(() => {
    dropBg.classList.add("hidden");
    searchModal.classList.add("hidden");
  }, 500);
});

closeSearchModal.addEventListener("click", () => {
  dropBg.classList.add("fadeOut");
  searchModal.classList.add("fadeOut");
  setTimeout(() => {
    dropBg.classList.add("hidden");
    searchModal.classList.add("hidden");
  }, 500);
});

//Search coin
searchButton.addEventListener("click", () => {
  coinSearcher();
});

searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    coinSearcher();
  }
});

const responseHandler = (data) => {
  console.log(data[0]);
};

// Fetch coindata
const coinSearcher = async () => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${searchInput.value}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    const data = await response.json();
    responseHandler(data);
    data[0] === undefined
      ? cantFindText.classList.remove("inv")
      : cantFindText.classList.add("inv");
  } catch (err) {
    console.log(err);
  }
};
