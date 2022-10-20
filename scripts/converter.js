"use strict";

const converter = document.querySelector(".converter");
const converterDiv = document.querySelector(".converter-div");
const dropShadow = document.querySelector(".dropshadow-conv");
const converterClose = document.querySelector(".conv-close");
const converterInnerBox = document.querySelector(".conv-input-box");
const topConvertButton = document.querySelector(".conv-top-btn");
const botConvertButton = document.querySelector(".conv-bot-btn");
const topInput = document.querySelector(".conv-top");
const botInput = document.querySelector(".conv-bot");
const topSearchInput = document.querySelector(".search-top");
const botSearchInput = document.querySelector(".search-bot");
const topResultBox = document.querySelector(".top-input-conv");
const botResultBox = document.querySelector(".bot-input-conv");
const topSearchBox = document.querySelector(".top-search-conv");
const botSearchBox = document.querySelector(".bot-search-conv");

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
  topSearchInput.focus();
});

botConvertButton.addEventListener("click", () => {
  botResultBox.classList.add("hidden");
  botSearchBox.classList.remove("hidden");
  botSearchInput.focus();
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
