"use strict";

const bitcoinPrice = document.querySelector(".bitcoin-price");
const bitcoinChange = document.querySelector(".bitcoin-change");
const bitcoinDiv = document.querySelector(".bitcoin-div");

const cardanoPrice = document.querySelector(".cardano-price");
const cardanoChange = document.querySelector(".cardano-change");
const cardanoDiv = document.querySelector(".cardano-div");

const classChecker = (coinDiv, change) => {
  if (change > -2.5 && change < 2.5) {
    coinDiv.classList.add("neutral");
  }
  if (change > 0 && change < 7.5) {
    coinDiv.classList.add("u1");
  }
  if (change > 7.5) {
    coinDiv.classList.add("u2");
  }
  if (change < -2.5) {
    coinDiv.classList.add("d1");
  }
  if (change < -7.5) {
    coinDiv.classList.add("d2");
  }
};

const dataUpdater = (
  data,
  changeDiv,
  coinName,
  changeTxt,
  priceTxt,
  fixedParam
) => {
  const price = data[coinName].usd.toFixed(fixedParam);
  const change = data[coinName].usd_24h_change.toFixed(2);
  priceTxt.textContent = `$${price}`;
  changeTxt.textContent = `${change}%`;
  classChecker(changeDiv, change);
};

const dataFetcher = async (
  coinName,
  changeDiv,
  changeTxt,
  priceTxt,
  fixedParam
) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=usd&include_24hr_change=true`
  );
  const data = await response.json();
  dataUpdater(data, changeDiv, coinName, changeTxt, priceTxt, fixedParam);
};
dataFetcher("bitcoin", bitcoinDiv, bitcoinChange, bitcoinPrice, 0);
dataFetcher("cardano", cardanoDiv, cardanoChange, cardanoPrice, 2);
