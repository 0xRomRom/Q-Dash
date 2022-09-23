"use strict";

const lightBox = document.querySelector('.lightbox');
const lightBoxClose = document.querySelector('.fa-x');
const rank = document.querySelector('.rank');
const coinName = document.querySelector('.coin-name');

// Onload rotate animation
const allCards = document.querySelectorAll('.card');
allCards.forEach((card) => {
  card.classList.add('rotater');
})


// Close lightbox
lightBoxClose.addEventListener('click', () => {
lightBox.classList.add('hidden');
rank.textContent = '';
});


// Render lightbox
allCards.forEach((card) => {
    card.addEventListener('click', () => {
        lightBox.classList.remove('hidden');
        lightBoxFetcher(card.dataset.id)
    })
})



const lightBoxFiller = (data) => {
    console.log(data)
rank.textContent = `Rank: ${data.coingecko_rank}`;
}

const lightBoxFetcher = async (coinName) => {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinName}`);
        const data = await response.json();
        lightBoxFiller(data)
    } catch(err) {
        console.log(err)
    }
}

