"use strict";

const searchModalButton = document.querySelector(".search-button");
const searchModal = document.querySelector(".search-modal");
const searchModalInner = document.querySelector(".search-inner-modal");
const searchModalResult = document.querySelector(".search-inner-result");
const searchModalTitle = document.querySelector(".search-modal-title");
const dropBg = document.querySelector(".dropshadow-srch");
const closeSearchModal = document.querySelector(".light-close4");
const searchInput = document.querySelector(".search-coin-input");
const searchButton = document.querySelector(".search-coin-btn");
const cantFindText = document.querySelector(".cant-find");
const buttonBox = document.querySelector(".cntr-sr-btn");
const searchBackButton = document.querySelector(".search-back");
const resultBoxes = document.querySelectorAll(".out");

const responseImage = document.querySelector(".res-img");
const upDown = document.querySelector(".up-down");
const upDown2 = document.querySelector(".up-down2");
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
const circulatingCount = document.querySelector(".circ-count");
const circulatingPercentageBox = document.querySelector(".circ-perc-box");
const circulatingCountBox = document.querySelector(".circ-amount-box");
const websiteHref = document.querySelector(".website-hook");

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

// Toggle display of circulating supply
circulatingPercentageBox.addEventListener("mouseover", () => {
  circulatingCountBox.classList.remove("inv");
});
circulatingPercentageBox.addEventListener("mouseleave", () => {
  circulatingCountBox.classList.add("inv");
});

// Back from search result
searchBackButton.addEventListener("click", () => {
  searchModalInner.classList.remove("rotateDiv");
  searchModalResult.classList.remove("fadeDivIn");
  searchModalResult.classList.add("rotateDivBack");
  searchModalTitle.classList.add("fadeOut");
  searchInput.classList.add("fadeOut");
  buttonBox.classList.add("fadeOut");
  searchInput.value = "";
  searchBackButton.classList.add("hidden");
  upDown.classList.add("hidden");
  upDown2.classList.add("hidden");
  resultBoxes.forEach((item) => {
    item.classList.add("fadeOut");
  });
  setTimeout(() => {
    searchModalTitle.classList.remove("fadeOut");
    searchInput.classList.remove("fadeOut");
    buttonBox.classList.remove("fadeOut");
    searchModalTitle.classList.add("fadeDivIn");
    searchInput.classList.add("fadeDivIn");
    buttonBox.classList.add("fadeDivIn");
    searchModalResult.classList.remove("rotateDivBack");
    searchModalResult.classList.add("hidden");

    fluctuate.textContent = "";
    SearchCoinTitle.textContent = "";
    fetchedRank.textContent = "";
    circulatingPercentage.textContent = "";
    pricePercentageChange.textContent = "";
    totalSupply.textContent = "";
    markPrice.textContent = "";
    markPriceHigh.textContent = "";
    markPriceLow.textContent = "";
    athDate.textContent = "";
    circulatingCount.textContent = "";

    searchInput.focus();
    resultBoxes.forEach((item) => {
      item.classList.remove("fadeOut");
      item.classList.remove("bg-up");
      item.classList.remove("bg-down");
    });
  }, 400);
});

//Open search modal
searchModalButton.addEventListener("click", () => {
  dropBg.classList.remove("hidden");
  dropBg.classList.remove("fadeOut");
  searchModal.classList.remove("fadeOut");
  searchModal.classList.remove("hidden");
  searchModal.classList.remove("fadeOut");
  searchModal.classList.remove("hidden");
  searchInput.focus();
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
      return;
    } else {
      nameChecker(data);
      searchModalInner.classList.add("rotateDiv");
      searchBackButton.classList.remove("hidden");
      cantFindText.classList.add("inv");
      searchModalTitle.classList.add("fadeOut");
      searchInput.classList.add("fadeOut");
      buttonBox.classList.add("fadeOut");
      searchModalResult.classList.add("fadeDivIn");
      setTimeout(() => {
        searchModalResult.classList.remove("hidden");
      }, 500);
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
    console.log(
      data2.market_data.price_change_percentage_24h.toString().slice(0, 4)
    );
    console.log(data2.links.homepage[0]);
    const website = data2.links.homepage[0];
    const resultPercentage = data2.market_data.price_change_percentage_24h
      .toString()
      .slice(0, 4);
    displayUI(data[0], resultPercentage, website);
  } catch (err) {
    console.log(err);
  }
};

const dateConverter = (month) => {
  let slicedMonth = +month.slice(5, 7);
  return monthsArray[slicedMonth - 1];
};

const displayUI = (data, percentage, site) => {
  let date = data.ath_date.slice(0, 10);
  websiteHref.textContent = site;
  websiteHref.href = site;
  circulatingPercentage.textContent =
    data.circulating_supply / data.total_supply === Infinity
      ? "∞"
      : `${(data.circulating_supply / data.total_supply)
          .toString()
          .slice(2, 4)}%`;
  if (data.circulating_supply / data.total_supply === 1) {
    circulatingPercentage.textContent = "∞";
  }

  responseImage.src = data.image;
  SearchCoinTitle.textContent = data.name;
  fetchedRank.textContent = `#${
    data.market_cap_rank === null ? "N/A" : data.market_cap_rank
  }`;

  pricePercentageChange.textContent = `${
    percentage >= 0.01 ? "+" : ""
  }${percentage}% $${data.symbol.toUpperCase()} ${
    "$" + percentage >= 0.01 ? "+" : ""
  }${
    +data.current_price < 0.1
      ? ""
      : "(" + data.price_change_24h.toString().slice(0, 6) + " USD" + ")"
  }`;

  totalSupply.textContent =
    data.total_supply === null
      ? "∞"
      : data.total_supply
          .toFixed(0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
        " " +
        data.symbol.toUpperCase();
  circulatingCount.textContent = `${data.circulating_supply
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $${data.symbol.toUpperCase()}`;
  ///

  if (data.current_price > 0.5) {
    markPrice.textContent = `$${data.current_price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`;
    markPriceHigh.textContent = `$${
      data.current_price > 1
        ? data.high_24h
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : data.high_24h
            .toFixed(5)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    } USD`;
    markPriceLow.textContent = `$${
      data.current_price > 1
        ? data.low_24h
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : data.low_24h
            .toFixed(5)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    } USD`;
  } else {
    markPrice.textContent = `$${data.current_price.toString()} USD`;
    markPriceHigh.textContent = `$${
      data.current_price > 1
        ? data.high_24h.toFixed(2).toString()
        : data.high_24h.toFixed(8).toString()
    } USD`;
    markPriceLow.textContent = `$${
      data.current_price > 1
        ? data.low_24h.toFixed(2).toString()
        : data.low_24h.toFixed(8).toString()
    } USD`;
  }

  athDate.textContent = `${dateConverter(date)} ${data.ath_date.slice(
    8,
    10
  )} ${data.ath_date.slice(0, 4)}`;
  if (+percentage >= 0.01) {
    fluctuate.textContent = "UP";
    fluctuate.style.backgroundColor = "rgb(79, 159, 88)";
    pricePercentageChange.style.color = "rgb(118, 219, 140)";
    upDown.classList.remove("hidden");
    upDown2.classList.add("hidden");
    box2.classList.add("bg-up");
  }
  if (+percentage <= 0) {
    fluctuate.style.backgroundColor = "rgb(188, 67, 63)";
    fluctuate.textContent = "DOWN";
    pricePercentageChange.style.color = "red";
    upDown2.classList.remove("hidden");
    upDown.classList.add("hidden");
    box2.classList.add("bg-down");
  }
  if (data.circulating_supply === 0) {
    circulatingCount.textContent = "N/A";
    circulatingPercentage.textContent = "N/A";
  }
};
