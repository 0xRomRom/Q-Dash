"use strict";

const searchButton = document.querySelector('.search-button');
const searchModal = document.querySelector('.search-modal');
const dropBg = document.querySelector('.dropshadow-srch');

searchButton.addEventListener('click', () => {
    dropBg.classList.remove('hidden');
    searchModal.classList.remove('hidden');
});