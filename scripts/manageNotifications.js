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
  allowContainer.classList.add("hidden");
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
notifPush.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
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
  if (permission) {
    const notification = new Notification(`${userInput.value}`, {
      body: "This is more text",
    });
    setTimeout(() => {
      notification.close();
    }, 10000);
  }
});

let fetchedCoinPrice = 0;
let expectedCoinPrice = 0;
let userQueriedCoinName = "";
let userSpecifiedChange = ''

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

// Calculate price

calculatePrice.addEventListener("click", () => {
  if (incDecToggle.value === "Increases") {
    let calculateValue = (+userPercentageInput.value + 100) / 100;
    let outputValue = calculateValue * fetchedCoinPrice;
    expectedCoinPrice = outputValue;
    userSpecifiedChange = 'target price has been reached!'
    targetPriceExpected.textContent = `$${+outputValue.toFixed(2)}`;
    alertButton.classList.remove("hidden");
    return;
  }
  if (incDecToggle.value === "Decreases") {
    let calculateValue = (100 - +userPercentageInput.value) / 100;
    let outputValue = calculateValue * fetchedCoinPrice;
    expectedCoinPrice = outputValue;
    targetPriceExpected.textContent = `$${+outputValue.toFixed(2)}`;
    alertButton.classList.remove("hidden");
    return;
  }
});

const intervalFetcher = async () => {
  let fetchedPrice = 0;

  while (fetchedPrice < expectedCoinPrice) {
    setInterval(() => {
        try {
            const response = await fetch(
              `https://api.coingecko.com/api/v3/simple/price?ids=${userQueriedCoinName}&vs_currencies=usd`
            );
            const data = await response.json();
            console.log(data[userQueriedCoinName].usd);
            console.log(expectedCoinPrice);
            fetchedPrice = data[userQueriedCoinName].usd;
          } catch (err) {
            console.log(err);
          }
    }, 60000)  
  }
  if(fetchedPrice > expectedCoinPrice) {
    const notification = new Notification(`${userInput.value}`, {
        body: "This is more text",
      });
      setTimeout(() => {
        notification.close();
      }, 10000);
  }
};

alertButton.addEventListener("click", () => {
  intervalFetcher();
});
