"use strict";

const manageNotification = document.querySelector(".man-notif");
const notificationModal = document.querySelector(".notification-box");
const dropShadow = document.querySelector(".dropshadow");
const closeNotifModal = document.querySelector(".light-close3");
const notifPush = document.querySelector(".notif-push");
const coinSearch = document.querySelector(".coin-search");
const coinFetchPrice = document.querySelector(".coin-fetch-output");
const coinFetchTitle = document.querySelector(".coin-fetch-title");
const coinFetchTitle2 = document.querySelector(".target-price-title");
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
const messageModal = document.querySelector(".msg-modal");

const upperModal = document.querySelector(".result-upper");
const lowerModal = document.querySelector(".result-lower");
const sideModal = document.querySelector(".result-setup-box");

window.addEventListener("load", () => {
  if (Notification.permission === "granted") {
    allowContainer.classList.add("hidden");
    inputContainer.classList.remove("hidden");
  }
});

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
    coinFetchTitle2.textContent =
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

let positiveBool = "";

// Calculate price
calculatePrice.addEventListener("click", () => {
  if (incDecToggle.value === "Increases") {
    let calculateValue = (+userPercentageInput.value + 100) / 100;
    let outputValue = calculateValue * fetchedCoinPrice;
    expectedCoinPrice = outputValue;
    userSpecifiedChange = "surged past your target!";
    targetPriceExpected.textContent = `$${+outputValue.toFixed(2)}`;
    alertButton.classList.remove("hidden");
    positiveBool = true;
    return;
  }
  if (incDecToggle.value === "Decreases") {
    let calculateValue = (100 - +userPercentageInput.value) / 100;
    let outputValue = calculateValue * fetchedCoinPrice;
    expectedCoinPrice = outputValue;
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
        if (fetchedPrice < expectedCoinPrice) {
          const response = await fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=${userQueriedCoinName}&vs_currencies=usd`
          );
          const data = await response.json();
          fetchedPrice = data[userQueriedCoinName].usd;
          console.log(fetchedPrice);
          console.log("Fetched Plus");
          checkResultsMin();
        }
      }

      if (!positiveBool && positiveBool !== "") {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${userQueriedCoinName}&vs_currencies=usd`
        );
        const data = await response.json();
        fetchedPrice = data[userQueriedCoinName].usd;
        console.log(fetchedPrice);
        console.log("Fetched Min");
        checkResultsPlus();
      }
    } catch (err) {
      console.log(err);
    }
  }, 10000);
};
// If expected price is lower
const checkResultsMin = () => {
  if (fetchedPrice !== 0 && fetchedPrice > expectedCoinPrice) {
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
  }
};

// If expected price is higher
const checkResultsPlus = () => {
  if (fetchedPrice !== 0 && fetchedPrice < expectedCoinPrice) {
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
  }
};

const fadeModalsOut = (modal, time) => {
  setTimeout(() => {
    modal.classList.add("fadeModalOut");
  }, time);
};

// Launch alert
alertButton.addEventListener("click", () => {
  intervalFetcher();
  fadeModalsOut(upperModal, 300);
  fadeModalsOut(sideModal, 600);
  fadeModalsOut(lowerModal, 900);
  fadeModalsOut(notificationModal, 1400);
  setTimeout(() => {
    notificationModal.classList.add("hidden");
    notificationModal.classList.remove("fadeModalOut");
    upperModal.classList.remove("fadeModalOut");
    sideModal.classList.remove("fadeModalOut");
    lowerModal.classList.remove("fadeModalOut");
    dropShadow.classList.add("hidden");
    inputContainer.classList.add("hidden");
    resultContainer.classList.add("hidden");
    inputContainer.classList.remove("hidden");
    if (Notification.permission !== "granted") {
      allowContainer.classList.remove("hidden");
    }
    allowContainer.classList.remove("opacityOut");
    inputContainer.classList.remove("opacityOut");
    userInput.value = "";
    coinFetchPrice.textContent = "";
    coinFetchTitle.textContent = "";
    coinFetchTitle2.textContent = "";
    coinNameTitle.textContent = "";
    targetPriceExpected.textContent = "";
    userPercentageInput.value = "";
    incDecToggle.value = "Increases";
  }, 1400);
  setTimeout(() => {
    messageModal.classList.remove("hidden");
    messageModal.classList.add("msgAnimate");
  }, 1600);
  setTimeout(() => {
    messageModal.classList.add("hidden");
  }, 5600);
});
