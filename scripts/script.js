"use strict";

const lightBox = document.querySelector('.lightbox');
const lightBoxClose = document.querySelector('.fa-x');

// Onload rotate animation
const allCards = document.querySelectorAll('.card');
allCards.forEach((card) => {
  card.classList.add('rotater');
  card.addEventListener('click', (e) => {
    console.log(e.target.offsetParent.dataset.id);

  })
})


// Close lightbox
lightBoxClose.addEventListener('click', () => {
lightBox.classList.add('hidden');
});

allCards.forEach((card) => {
    card.addEventListener('click', () => {
        lightBox.classList.remove('hidden');
    })
})