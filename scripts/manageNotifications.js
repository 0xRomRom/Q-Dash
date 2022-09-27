"use strict";

const manageNotification = document.querySelector(".man-notif");
const notificationModal = document.querySelector(".notification-box");
const dropShadow = document.querySelector(".dropshadow");
const closeNotifModal = document.querySelector(".light-close3");
const notifPush = document.querySelector(".notif-push");
const coinSearch = document.querySelector(".coin-search");
const coinFetchPrice = document.querySelector(".coin-fetch-output");
const coinFetchTitle = document.querySelector(".coin-fetch-title");
const userInput = document.querySelector(".user-coin-query");
const allowContainer = document.querySelector(".notif-anim-container");
const inputContainer = document.querySelector(".notif-anim-container2");
const resultContainer = document.querySelector(".notif-anim-container3");
const noCoinErrorTxt = document.querySelector(".error-text2");
const coinNameTitle = document.querySelector(".state-coinname");
const targetPriceTxt = document.querySelector(".target-price-title");
const targetPriceExpected = document.querySelector(".target-price-expected");
const calculatePrice = document.querySelector(".calculate-price");
const userPercentageInput = document.querySelector(".user-percentage-input");
const incDecToggle = document.querySelector(".coin-param");
const alertButton = document.querySelector(".alert-button");

let permission = false;
if (!permission) {
  allowContainer.classList.remove("hidden");
}

// Open notification modal
manageNotification.addEventListener("click", () => {
  notificationModal.classList.remove("hidden");
  dropShadow.classList.remove("hidden");
});

// Close notification modal
closeNotifModal.addEventListener("click", () => {
  notificationModal.classList.add("hidden");
  dropShadow.classList.add("hidden");
});

dropShadow.addEventListener("click", () => {
  notificationModal.classList.add("hidden");
  dropShadow.classList.add("hidden");
});

// Ask for permission
notifPush.addEventListener("click", async () => {
  await Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      permission = true;
      allowContainer.classList.add("opacityOut");
      setTimeout(() => {
        allowContainer.classList.add("hidden");
        inputContainer.classList.remove("hidden");
      }, 2000);
    }
  });
});

// User input search
coinSearch.addEventListener("click", () => {
  fetchCoinAlert();
});

let fetchedCoinPrice = 0;
let expectedCoinPrice = 0;
let userQueriedCoinName = "";
let userSpecifiedChange = "";

// Fetch data
const fetchCoinAlert = async () => {
  try {
    noCoinErrorTxt.classList.add("inv");
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${userInput.value}&vs_currencies=usd`
    );
    const data = await response.json();
    userQueriedCoinName = userInput.value;
    fetchedCoinPrice = data[userInput.value].usd;
    coinFetchPrice.textContent = `$${data[userInput.value].usd}`;
    coinFetchTitle.textContent =
      userInput.value.charAt(0).toUpperCase() + userInput.value.slice(1);
    inputContainer.classList.add("opacityOut");
    coinNameTitle.textContent = `If ${
      userInput.value.charAt(0).toUpperCase() + userInput.value.slice(1)
    }'s price`;
    console.log(fetchedCoinPrice);
    setTimeout(() => {
      inputContainer.classList.add("hidden");
      resultContainer.classList.remove("hidden");
    }, 2000);
  } catch (err) {
    noCoinErrorTxt.classList.remove("inv");
  }
};

let positiveBool = true;

// Calculate price
calculatePrice.addEventListener("click", () => {
  if (incDecToggle.value === "Increases") {
    let calculateValue = (+userPercentageInput.value + 100) / 100;
    let outputValue = calculateValue * fetchedCoinPrice;
    // expectedCoinPrice = outputValue;
    userSpecifiedChange = "surged past your target!";
    targetPriceExpected.textContent = `$${+outputValue.toFixed(2)}`;
    alertButton.classList.remove("hidden");
    positiveBool = true;
    return;
  }
  if (incDecToggle.value === "Decreases") {
    let calculateValue = (100 - +userPercentageInput.value) / 100;
    let outputValue = calculateValue * fetchedCoinPrice;
    // expectedCoinPrice = outputValue;
    userSpecifiedChange = "dropped past your target!";
    targetPriceExpected.textContent = `$${+outputValue.toFixed(2)}`;
    alertButton.classList.remove("hidden");
    positiveBool = false;
    return;
  }
});

let fetchedPrice = 0;

const intervalFetcher = () => {
  setInterval(async () => {
    try {
      if (positiveBool) {
        while (fetchedPrice < expectedCoinPrice) {
          const response = await fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=${userQueriedCoinName}&vs_currencies=usd`
          );
          const data = await response.json();
          fetchedPrice = data[userQueriedCoinName].usd;
          console.log("Positive Fetched");
          console.log(fetchedPrice);
          checkResultsMin();
        }
      } else {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${userQueriedCoinName}&vs_currencies=usd`
        );
        const data = await response.json();
        fetchedPrice = data[userQueriedCoinName].usd;
        console.log("Negative Fetched");
        console.log(fetchedPrice);
        checkResultsPlus();
      }
    } catch (err) {
      console.log(err);
    }
  }, 10000);
};

let matchResult = true;

// If expected price is lower
const checkResultsMin = () => {
  if (fetchedPrice !== 0 && fetchedPrice > expectedCoinPrice && matchResult) {
    alert("Alert!");
    const notification = new Notification(
      `${
        userQueriedCoinName.charAt(0).toUpperCase() + userInput.value.slice(1)
      }'s price ${userSpecifiedChange}`,
      {
        body: `${
          userQueriedCoinName.charAt(0).toUpperCase() + userInput.value.slice(1)
        }'s price is $${expectedCoinPrice}`,
      }
    );
    matchResult = false;
  }
};

let newPrice = 0;

// If expected price is higher
const checkResultsPlus = () => {
  if (fetchedPrice !== 0 && fetchedPrice < expectedCoinPrice && matchResult) {
    alert("Alert!");
    const notification = new Notification(
      `${
        userQueriedCoinName.charAt(0).toUpperCase() + userInput.value.slice(1)
      }'s price ${userSpecifiedChange}`,
      {
        body: `${
          userQueriedCoinName.charAt(0).toUpperCase() + userInput.value.slice(1)
        }'s price is $${expectedCoinPrice}`,
      }
    );
    matchResult = false;
  }
};

// Launnch alert
alertButton.addEventListener("click", () => {
  intervalFetcher();
});
