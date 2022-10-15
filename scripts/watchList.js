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
const noCoinFoundTxt = document.querySelector(".no-search-res");
const noCoinFoundTxt2 = document.querySelector(".no-search-res2");
const coinResultLogo = document.querySelector(".coin-result-logo");
const searchResultTitle = document.querySelector(".search-res-title");
const addToWatchList = document.querySelector(".item-result-lower");
const loadSpinner = document.querySelector(".lds-ripple");
const watchListItemsBox = document.querySelector(".watch-low");
const deleteFromWatchList = document.querySelectorAll(".delete-from-watch");

//User specific API url for watchlist

window.addEventListener("load", async () => {
  setTimeout(async () => {
    const getStorage = localStorage.getItem("loggedIn");
    const sendData = await fetch(
      `https://qdash-3fe95-default-rtdb.europe-west1.firebasedatabase.app/${getStorage}/apiLink.json`
    );
    const response = await sendData.json();
    console.log(response);
    if (response.length < 5) {
      localStorage.setItem("userLink", "");
    } else {
      localStorage.setItem("userLink", response);
    }

    await renderWatchList();
  }, 1000);
});

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
  watchListBox.classList.add("hidden");
});

// Open watchlist modal
watchListButton.addEventListener("click", () => {
  const getStorage = localStorage.getItem("loggedIn");
  console.log(getStorage);
  if (!getStorage) {
    window.location.href = "https://www.qdash.net/login.html";
    // window.location.href = "http://localhost:62575/login.html";
  } else {
    renderWatchList();
    watchListDiv.classList.remove("hidden");
    dropShadow.classList.remove("hidden");
  }
});

// Close watchlist modal
dropShadow.addEventListener("click", () => {
  watchListDiv.classList.add("hidden");
  dropShadow.classList.add("hidden");
  addToWatchList.classList.add("hidden");
});

watchListClose.addEventListener("click", () => {
  watchListDiv.classList.add("hidden");
  dropShadow.classList.add("hidden");
  addToWatchList.classList.add("hidden");
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
    renderSearchUI(data[0]);
  } catch (err) {
    console.log(err);
  }
};

//Display coin result modal
const renderSearchUI = (data1) => {
  coinResultLogo.src = data1.image;
  searchResultTitle.textContent = data1.name;
  loadSpinner.classList.add("hidden");
  addToWatchList.classList.remove("hidden");
  searchCoinInput.value = "";
  apiID = data1.id + "%2C";
};

// Search coin
searchInputButton.addEventListener("click", coinSearcher);

// Search by enter key
searchCoinInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    coinSearcher();
  }
});

let apiID = "";

//Beginning of addition to watchlist
const fetchSearchResult = async () => {
  const userLinkLogged = localStorage.getItem("userLink");
  let currentAPI_ID = "";
  // Getting uID from storage for path
  const uID = localStorage.getItem("loggedIn");
  // Fetching current coins
  const response = await fetch(
    `https://qdash-3fe95-default-rtdb.europe-west1.firebasedatabase.app/${uID}/watchlist.json`
  );
  const data = await response.json();
  if (data === null) {
    currentAPI_ID = apiID;
  }
  if (data !== null) {
    if (userLinkLogged.includes(apiID)) {
      alert("Already on watchlist!");
      return;
    }
    currentAPI_ID = Object.values(data).join("") + apiID;
  }
  apiID = "";
  apiID = currentAPI_ID.replace(",", "");
  const sendData = await fetch(
    `https://qdash-3fe95-default-rtdb.europe-west1.firebasedatabase.app/${uID}/watchlist.json`,
    {
      method: "PUT",
      body: JSON.stringify(apiID),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  buildCurrentQuery();
};

const APILeft = `https://api.coingecko.com/api/v3/simple/price?ids=`;
const APIRight = `&vs_currencies=usd&include_24hr_change=true`;
let currentQuery = "";

const buildCurrentQuery = () => {
  currentQuery = "";
  currentQuery = APILeft + apiID + APIRight;
  console.log(currentQuery);
  updateCurrentWatchlist();
};

// Updating current watchlist new coin was added
const updateCurrentWatchlist = async () => {
  const response = await fetch(currentQuery);
  const data = await response.json();
  console.log(data);
  localStorage.removeItem("userLink");
  localStorage.setItem("userLink", currentQuery);
  querySaver();
  renderWatchList();
};

const renderWatchList = async () => {
  try {
    const userLinkLogged = localStorage.getItem("userLink");
    const response = await fetch(userLinkLogged);
    const data = await response.json();

    // if(Object.values(data)[i].usd_24h_change >= 0 ?) {

    // }

    watchListItemsBox.innerHTML = "";
    for (let i = 0; i < Object.values(data).length; i++) {
      watchListItemsBox.innerHTML += `<div class="watch-item">
    <h1 class="watch-title">${(
      Object.keys(data)[i].charAt(0).toUpperCase() +
      Object.keys(data)[i].slice(1)
    ).replace("-", " ")}</h1>
    <h2 class="watch-price">$${Object.values(data)[i].usd}</h2>
    <h2 class="watch-24h-change">24h: <span class="percentage-daily ${
      Object.values(data)[i].usd_24h_change >= 0 ? "" : "daily-down"
    }">${Object.values(data)[i].usd_24h_change >= 0 ? "+" : ""}${Object.values(
        data
      )[i].usd_24h_change.toFixed(2)}%</span></h2>
    <button class="delete-from-watch"><i class="fa-solid fa-circle-minus" data-id="${
      Object.keys(data)[i]
    }"></i></button>
  </div>`;
    }
  } catch (err) {
    console.log(err);
    watchListItemsBox.innerHTML = `<h1 class="no-item-text">Add new items to watchlist</h1>`;
  }
};

addToWatchList.addEventListener("click", () => {
  fetchSearchResult();
  addToWatchList.disabled = true;

  setTimeout(() => {
    addToWatchList.disabled = false;
  }, 1000);
});

const deleteWatchListItem = async (e) => {
  if (!e.target.hasAttribute("data-id")) return;
  const getStorage = localStorage.getItem("loggedIn");
  const fetchIDs = await fetch(
    `https://qdash-3fe95-default-rtdb.europe-west1.firebasedatabase.app/${getStorage}/watchlist.json`
  );
  const fetchResponse = await fetchIDs.json();
  let currentValue = Object.values(fetchResponse).toString().replace(/,/g, "");
  let newValue = currentValue.replace(e.target.dataset.id + "%2C", "");

  const sendData = await fetch(
    `https://qdash-3fe95-default-rtdb.europe-west1.firebasedatabase.app/${getStorage}/watchlist.json`,
    {
      method: "PUT",
      body: JSON.stringify(newValue),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  localStorage.removeItem("userLink");
  localStorage.setItem("userLink", APILeft + newValue + APIRight);
  const getStorageItem = localStorage.getItem("userLink");
  if (getStorageItem.length === 93) {
    localStorage.setItem("userLink", "");
  }
  querySaver();
  await renderWatchList();
};

watchListItemsBox.addEventListener("click", (e) => {
  deleteWatchListItem(e);
});

const querySaver = async () => {
  const getStorage = localStorage.getItem("loggedIn");
  const apiLink = localStorage.getItem("userLink");
  const checked = apiLink.length === 93 ? "" : apiLink;
  const sendData = await fetch(
    `https://qdash-3fe95-default-rtdb.europe-west1.firebasedatabase.app/${getStorage}/apiLink.json`,
    {
      method: "PUT",
      body: JSON.stringify(checked),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
