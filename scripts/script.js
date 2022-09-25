"use strict";

const lightBox = document.querySelector(".lightbox");
const lightBoxClose = document.querySelector(".fa-x");
let coinName = document.querySelector(".coin-name");
const chartContainer = document.querySelector(".chart-container");

// Onload rotate animation
const allCards = document.querySelectorAll(".card");
allCards.forEach((card) => {
  card.classList.add("rotater");
});

// Close lightbox
lightBoxClose.addEventListener("click", () => {
  lightBox.classList.add("hidden");
});

const coinIndex = {
  bitcoin: "BINANCE:BTCUSDT",
  cardano: "BINANCE:ADAUSDT",
  doge: "DOGEUSDT",
  polkadot: "DOTUSDT",
  shiba: "SHIBUSDT",
  polygon: "MATICUSDT",
  avax: "AVAXUSD",
  tron: "TRXUSDT",
  leo: "LEOUSDT",
  uniswap: "UNIUSDT",
  cosmos: "ATOMUSDT",
  eos: "EOSUSDT",
  ethclassic: "ETCUSDT",
  litecoin: "LTCUSDT",
  okb: "OKBUSDT",
  chainlink: "LINKUSDT",
  xlm: "XLMUSDT",
  ftx: "FTTUSDT",
  near: "NEARUSDT",
  cronos: "CROUSDT",
  algorand: "ALGOUSDT",
  monero: "XMRUSDT",
  bitcoincash: "BCHUSDT",
  vechain: "VETUSDT",
  quant: "QNTUSDT",
  tezos: "XTZUSDT",
  axie: "AXSUSDT",
  theta: "THETAUSDT",
  elrond: "EGLDUSDT",
  aave: "AAVEUSDT",
  kucoin: "KCSUSDT",
  xrp: "XRPUSDT",
  iota: "IOTAUSDT",
  ethereum: "ETHUSDT",
  zcash: "ZECUSDT",
  huobi: "HTUSDT",
  solana: "SOLUSDT",
  evmos: "EVMOSUSDT",
  celsius: "CELUSDT",
  cake: "CAKEUSDT",
  gate: "GTUSDT",
  neo: "NEOUSDT",
  maker: "MKRUSDT",
  helium: "HNTUSDT",
  fantom: "FTMUSDT",
  synthetix: "SNXUSDT",
  bnb: "BNBUSDT",
  osmosis: "OSMOUSDT",
  nexo: "NEXOUSDT",
  flow: "FLOWUSDT",
  arweave: "ARUSDT",
  zilliqa: "ZILUSDT",
  rune: "RUNEUSDT",
  dash: "DASHUSDT",
  rocketpool: "RPLUSDT",
  stacks: "STXUSDT",
  waves: "WAVESUSDT",
  kava: "KAVAUSDT",
  xdc: "XDCUSDT",
  compound: "COMPUSDT",
};

// Render lightbox
allCards.forEach((card) => {
  card.addEventListener("click", () => {
    coinName.textContent = "";
    lightBox.classList.remove("hidden");
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
