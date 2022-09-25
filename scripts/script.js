"use strict";

import { coinIndex } from "./coinIndex.js";

const lightBox = document.querySelector(".lightbox");
const dropShadow = document.querySelector(".dropshadow");
const lightBoxClose = document.querySelector(".fa-x");
const chartContainer = document.querySelector(".chart-container");
const widgetContainer = document.querySelector(".tradingview-widget-container");
let coinName = document.querySelector(".coin-name");

// Onload rotate animation
const allCards = document.querySelectorAll(".card");
allCards.forEach((card) => {
  card.classList.add("rotater");
});

// Close lightbox
lightBoxClose.addEventListener("click", () => {
  lightBox.classList.add("hidden");
  dropShadow.classList.add("hidden");
});

dropShadow.addEventListener("click", () => {
  lightBox.classList.add("hidden");
  dropShadow.classList.add("hidden");
});

// Render lightbox
allCards.forEach((card) => {
  card.addEventListener("click", () => {
    widgetContainer.classList.add("fadeIn");
    coinName.textContent = "";
    lightBox.classList.remove("hidden");
    dropShadow.classList.remove("hidden");
    coinName.textContent = card.children[0].textContent;
    lightBoxFiller(card.dataset.id);
  });
});

const lightBoxFiller = (key) => {
  new TradingView.widget({
    autosize: true,
    symbol: coinIndex[key],
    interval: "D",
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "en",
    toolbar_bg: "#f1f3f6",
    container_id: "chartbox",
  });
};
