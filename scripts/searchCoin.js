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
const upDown = document.querySelector(".up-down");
const fluctuate = document.querySelector(".fluctuate");
const SearchCoinTitle = document.querySelector(".coin-title");
const fetchedRank = document.querySelector(".fetched-rank");
const circulatingPercentage = document.querySelector(".circ-l");
const pricePercentageChange = document.querySelector(".price-perc-change");
const totalSupply = document.querySelector(".total-sup");
const markPrice = document.querySelector(".mark-price");
const markPriceHigh = document.querySelector(".mark-price-high");
const markPriceLow = document.querySelector(".mark-price-low");
const box2 = document.querySelector(".box-s2");
const athDate = document.querySelector(".ath-date");

// Date array

const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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
const dataFetcher = async (id = "dogecoin") => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    const data = await response.json();
    const response2 = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd&include_24hr_change=true`
    );
    const data2 = await response2.json();
    const resultPercentage = data2[id].usd_24h_change.toString().slice(0, 4);
    console.log(data[0]);
    console.log(data2[id]);
    displayUI(data[0], resultPercentage);
  } catch (err) {
    console.log(err);
  }
};
dataFetcher();

const dateConverter = (month) => {
  let slicedMonth = +month.slice(5, 7);
  return monthsArray[slicedMonth - 1];
};

const displayUI = (data, percentage) => {
  let date = data.ath_date.slice(0, 10);
  circulatingPercentage.textContent =
    data.circulating_supply / data.max_supply === Infinity
      ? "∞"
      : `${(data.circulating_supply / data.max_supply)
          .toString()
          .slice(2, 4)}%`;

  responseImage.src = data.image;
  SearchCoinTitle.textContent = data.name;
  fetchedRank.textContent = `#${data.market_cap_rank}`;
  pricePercentageChange.textContent = `${
    percentage >= 0 ? "+" : ""
  }${percentage}% $${data.symbol.toUpperCase()} ($${
    percentage >= 0 ? "+" : ""
  }${data.price_change_24h.toString().slice(0, 7)})`;
  totalSupply.textContent =
    data.total_supply === null ? "∞" : data.total_supply.toFixed(0);

  markPrice.textContent = `$${data.current_price} USD`;
  markPriceHigh.textContent = `$${data.high_24h} USD`;
  markPriceLow.textContent = `$${data.low_24h} USD`;

  athDate.textContent = `${dateConverter(date)} ${data.ath_date.slice(
    8,
    10
  )} ${data.ath_date.slice(0, 4)}`;
  if (+percentage >= 0) {
    fluctuate.textContent = "UP";
    fluctuate.style.backgroundColor = "rgb(79, 159, 88)";
    pricePercentageChange.style.color = "rgb(118, 219, 140)";
    upDown.src = "./img/pump.png";
    box2.classList.add("bg-up");
  }
  if (+percentage < 0) {
    fluctuate.style.backgroundColor = "rgb(188, 67, 63)";
    fluctuate.textContent = "DOWN";
    pricePercentageChange.style.color = "red";
    upDown.src = "./img/dump.png";
    box2.classList.add("bg-down");
  }
};
