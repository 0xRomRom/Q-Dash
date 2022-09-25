"use strict";

const lightBox = document.querySelector(".lightbox");
const lightBoxClose = document.querySelector(".fa-x");
const coinName = document.querySelector(".coin-name");
const chartContainer = document.querySelector(".chart-container");

let query1 = `<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div id="tradingview_f60a1"></div>
  <div class="tradingview-widget-copyright">
    <a
      href="https://www.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE"
      rel="noopener"
      target="_blank"
      ><span class="blue-text">BTCUSDT Chart</span></a
    >
    by TradingView
  </div>
  <script
    type="text/javascript"
    src="https://s3.tradingview.com/tv.js"
  ></script>
  <script type="text/javascript">
    new TradingView.widget({
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_f60a1",
    });
  </script>
</div>
<!-- TradingView Widget END -->`;

// Onload rotate animation
const allCards = document.querySelectorAll(".card");
allCards.forEach((card) => {
  card.classList.add("rotater");
});

// Close lightbox
lightBoxClose.addEventListener("click", () => {
  lightBox.classList.add("hidden");
});

// Render lightbox
allCards.forEach((card) => {
  card.addEventListener("click", () => {
    lightBox.classList.remove("hidden");
    // lightBoxFiller();
  });
});

const lightBoxFiller = () => {
  chartContainer.innerHTML = "";
  chartContainer.innerHTML += query1;
};
