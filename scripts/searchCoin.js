"use strict";

const searchModalButton = document.querySelector(".search-button");
const searchModal = document.querySelector(".search-modal");
const searchModalInner = document.querySelector(".search-inner-modal");
const dropBg = document.querySelector(".dropshadow-srch");
const closeSearchModal = document.querySelector(".light-close4");
const searchInput = document.querySelector(".search-coin-input");
const searchButton = document.querySelector(".search-coin-btn");
const cantFindText = document.querySelector(".cant-find");

const responseImage = document.querySelector(".res-img");

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

// Used to store user inserted search value
let userValue;

// Fetch coin name
const coinSearcher = async () => {
  let searchValue = searchInput.value.toLowerCase();
  userValue = searchValue;
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/search?query=${searchValue}`
    );
    const data = await response.json();
    if (data.coins.length === 0) {
      cantFindText.classList.remove("inv");
    } else {
      nameChecker(data);
      searchModalInner.classList.add("rotateDiv");
      cantFindText.classList.add("inv");
    }
  } catch (err) {
    console.log(err);
  }
};

// Check for match and return right api-id
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

// Re-fetching coin and displaying result
const dataFetcher = async (id = "bitcoin") => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    const data = await response.json();
    console.log(data[0]);
    displayUI(data[0]);
  } catch (err) {
    console.log(err);
  }
};
dataFetcher();

const displayUI = (data) => {
  responseImage.src = data.image;
};
