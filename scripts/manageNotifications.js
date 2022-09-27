"use strict";

const manageNotification = document.querySelector(".man-notif");
const notificationModal = document.querySelector(".notification-box");
const dropShadow = document.querySelector(".dropshadow");
const closeNotifModal = document.querySelector(".light-close3");
const notifPush = document.querySelector(".notif-push");
const notifSearch = document.querySelector(".notif-search");
const coinFetchPrice = document.querySelector(".coin-fetch-output");
const userInput = document.querySelector(".user-notif-coin");

let permission = false;

manageNotification.addEventListener("click", () => {
  notificationModal.classList.remove("hidden");
  dropShadow.classList.remove("hidden");
});

closeNotifModal.addEventListener("click", () => {
  notificationModal.classList.add("hidden");
  dropShadow.classList.add("hidden");
});

dropShadow.addEventListener("click", () => {
  notificationModal.classList.add("hidden");
  dropShadow.classList.add("hidden");
});

notifPush.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      permission = true;
    }
  });
});

notifSearch.addEventListener("click", () => {
  fetchCoinAlert(userInput.value);
  if (permission) {
    const notification = new Notification("Example Notification", {
      body: "This is more text",
    });
  }
});

const fetchCoinAlert = async () => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${userInput.value}&vs_currencies=usd`
  );
  const data = await response.json();
  console.log(data[userInput.value].usd);
  coinFetchPrice.textContent = `$${data[userInput.value].usd}`;
};
