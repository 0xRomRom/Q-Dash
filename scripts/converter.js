"use strict";

const converter = document.querySelector(".converter");
const converterDiv = document.querySelector(".converter-div");
const dropShadow = document.querySelector(".dropshadow-conv");
const converterClose = document.querySelector(".conv-close");

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
