"use strict";

const converter = document.querySelector(".converter");
const converterDiv = document.querySelector(".converter-div");
const dropShadow = document.querySelector(".dropshadow-conv");
const converterClose = document.querySelector(".conv-close");
const converterInnerBox = document.querySelector(".conv-input-box");
const convImgTop = document.querySelector(".conv-img-top");
const convImgBot = document.querySelector(".conv-img-bot");
const topConvertButton = document.querySelector(".conv-top-btn");
const botConvertButton = document.querySelector(".conv-bot-btn");
const topInput = document.querySelector(".conv-top");
const botInput = document.querySelector(".conv-bot");
const topSearchInput = document.querySelector(".search-top");
const topSearchButton = document.querySelector(".search-top-btn");
const botSearchButton = document.querySelector(".search-bot-btn");
const topSearchResultImage = document.querySelector(".top-search-res-img");
const botSearchResultImage = document.querySelector(".bot-search-res-img");
const botSearchInput = document.querySelector(".search-bot");
const topResultBox = document.querySelector(".top-input-conv");
const botResultBox = document.querySelector(".bot-input-conv");
const topSearchBox = document.querySelector(".top-search-conv");
const botSearchBox = document.querySelector(".bot-search-conv");
const convertCurrencies = document.querySelector(".convert-btn");
const swapConversion = document.querySelector(".swap-conversion");

converter.addEventListener("click", () => {
  dropShadow.classList.remove("hidden");
  converterDiv.classList.remove("hidden");
});

dropShadow.addEventListener("click", () => {
  dropShadow.classList.add("hidden");
  converterDiv.classList.add("hidden");
});

converterClose.addEventListener("click", () => {
  dropShadow.classList.add("hidden");
  converterDiv.classList.add("hidden");
});

topConvertButton.addEventListener("click", () => {
  topResultBox.classList.add("hidden");
  topSearchBox.classList.remove("hidden");
  topSearchButton.classList.remove("hidden");
  topSearchInput.focus();
  topSearchResultImage.classList.add("hidden");
  topSearchResultImage.src = "";
});

botConvertButton.addEventListener("click", () => {
  botResultBox.classList.add("hidden");
  botSearchBox.classList.remove("hidden");
  botSearchButton.classList.remove("hidden");
  botSearchInput.focus();
  botSearchResultImage.classList.add("hidden");
  botSearchResultImage.src = "";
});

converterInnerBox.addEventListener("click", (e) => {
  if (e.target.classList[0] === "conv-input-box") {
    console.log(e.target.classList[0]);
    topResultBox.classList.remove("hidden");
    topSearchBox.classList.add("hidden");
    botResultBox.classList.remove("hidden");
    botSearchBox.classList.add("hidden");
  }
});

topInput.addEventListener("click", () => {
  botResultBox.classList.remove("hidden");
  botSearchBox.classList.add("hidden");
});

botInput.addEventListener("click", () => {
  topResultBox.classList.remove("hidden");
  topSearchBox.classList.add("hidden");
});

topSearchButton.addEventListener("click", () => {
  coinSearcherTop();
});

topSearchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    coinSearcherTop();
  }
});

let topImage = "";
let topPrice = 0;

// Used to store user inserted search value
let userValueTop;

// Fetch coin name
const coinSearcherTop = async () => {
  let searchValue = topSearchInput.value.toLowerCase() || "bitcoin";
  userValueTop = searchValue;
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/search?query=${searchValue}`
    );
    const data = await response.json();
    if (data.coins.length === 0) {
      alert("No result, please try again");
      return;
    } else {
      nameChecker(data);
    }
  } catch (err) {
    console.log(err);
  }
};

// Check for match and return right api-id
const nameChecker = (data) => {
  for (let value of Object.values(data.coins)) {
    if (
      value.symbol.toLowerCase() === userValueTop ||
      value.name.toLowerCase() === userValueTop
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
    topSearchInput.value = "";
    topSearchButton.classList.add("hidden");
    topSearchResultImage.classList.remove("hidden");
    topSearchResultImage.src = data[0].image;
    topImage = data[0].image;
    topPrice = data[0].current_price;
    convImgTop.src = topImage;
    topResultBox.classList.remove("hidden");
    topSearchBox.classList.add("hidden");
    topInput.value = "";
  } catch (err) {
    console.log(err);
  }
};

coinSearcherTop();

let botImage = "";
let botPrice = 0;

// Used to store user inserted search value
let userValueBot;

botSearchButton.addEventListener("click", () => {
  coinSearcherBot();
});

botSearchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    coinSearcherBot();
  }
});

// Fetch coin name
const coinSearcherBot = async () => {
  let searchValue = botSearchInput.value.toLowerCase() || "bitcoin";
  userValueBot = searchValue;
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/search?query=${searchValue}`
    );
    const data = await response.json();
    if (data.coins.length === 0) {
      alert("No result, please try again");
      return;
    } else {
      nameCheckerBot(data);
    }
  } catch (err) {
    console.log(err);
  }
};

// Check for match and return right api-id
const nameCheckerBot = (data) => {
  for (let value of Object.values(data.coins)) {
    if (
      value.symbol.toLowerCase() === userValueBot ||
      value.name.toLowerCase() === userValueBot
    ) {
      dataFetcherBot(value.id);
      return;
    }
  }
};

// Re-fetching coin and displaying result
const dataFetcherBot = async (id) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    const data = await response.json();
    botSearchInput.value = "";
    botSearchButton.classList.add("hidden");
    botSearchResultImage.classList.remove("hidden");
    botSearchResultImage.src = data[0].image;
    botImage = data[0].image;
    botPrice = data[0].current_price;
    convImgBot.src = botImage;
    botResultBox.classList.remove("hidden");
    botSearchBox.classList.add("hidden");
    botInput.value = "";
  } catch (err) {
    console.log(err);
  }
};
coinSearcherBot();

convertCurrencies.addEventListener("click", () => {
  if (topInput.value === "") return;
  const output = (+topInput.value * topPrice) / botPrice;
  botInput.value = output > 0.1 ? output.toFixed(3) : output.toFixed(6);
});

let switched = false;

swapConversion.addEventListener("click", () => {
  if (!switched) {
    let tempTopImg = topImage;
    let tempBotImg = botImage;

    let tempTopPrice = topPrice;
    let tempBotPrice = botPrice;

    botPrice = tempTopPrice;
    topPrice = tempBotPrice;
    convImgTop.src = tempBotImg;
    convImgBot.src = tempTopImg;
    switched = true;
    const output = (+topInput.value * topPrice) / botPrice;
    botInput.value = output > 0.1 ? output.toFixed(3) : output.toFixed(6);
    return;
  }
  if (switched) {
    let tempTopImg = topImage;
    let tempBotImg = botImage;

    let tempTopPrice = botPrice;
    let tempBotPrice = topPrice;

    botPrice = tempBotPrice;
    topPrice = tempTopPrice;
    convImgTop.src = tempTopImg;
    convImgBot.src = tempBotImg;
    switched = false;
    const output = (+topInput.value * topPrice) / botPrice;
    botInput.value = output > 0.1 ? output.toFixed(3) : output.toFixed(6);
  }
});
