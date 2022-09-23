"use strict";

const bitcoinPrice = document.querySelector(".bitcoin-price");
const bitcoinChange = document.querySelector(".bitcoin-change");
const bitcoinDiv = document.querySelector(".bitcoin-div");

const cardanoPrice = document.querySelector(".cardano-price");
const cardanoChange = document.querySelector(".cardano-change");
const cardanoDiv = document.querySelector(".cardano-div");

const dogePrice = document.querySelector(".doge-price");
const dogeChange = document.querySelector(".doge-change");
const dogeDiv = document.querySelector(".doge-div");

const polkadotPrice = document.querySelector(".polkadot-price");
const polkadotChange = document.querySelector(".polkadot-change");
const polkadotDiv = document.querySelector(".polkadot-div");

const shibaPrice = document.querySelector(".shiba-price");
const shibaChange = document.querySelector(".shiba-change");
const shibaDiv = document.querySelector(".shiba-div");

const polygonPrice = document.querySelector(".polygon-price");
const polygonChange = document.querySelector(".polygon-change");
const polygonDiv = document.querySelector(".polygon-div");

const avaxPrice = document.querySelector(".avax-price");
const avaxChange = document.querySelector(".avax-change");
const avaxDiv = document.querySelector(".avax-div");

const trxPrice = document.querySelector(".trx-price");
const trxChange = document.querySelector(".trx-change");
const trxDiv = document.querySelector(".trx-div");

const leoPrice = document.querySelector(".leo-price");
const leoChange = document.querySelector(".leo-change");
const leoDiv = document.querySelector(".leo-div");

const uniPrice = document.querySelector(".uni-price");
const uniChange = document.querySelector(".uni-change");
const uniDiv = document.querySelector(".uni-div");

const cosmosPrice = document.querySelector(".cosmos-price");
const cosmosChange = document.querySelector(".cosmos-change");
const cosmosDiv = document.querySelector(".cosmos-div");

const eosPrice = document.querySelector(".eos-price");
const eosChange = document.querySelector(".eos-change");
const eosDiv = document.querySelector(".eos-div");

const ethCPrice = document.querySelector(".ethC-price");
const ethCChange = document.querySelector(".ethC-change");
const ethCDiv = document.querySelector(".ethC-div");

const litecoinPrice = document.querySelector(".litecoin-price");
const litecoinChange = document.querySelector(".litecoin-change");
const litecoinDiv = document.querySelector(".litecoin-div");

const okbPrice = document.querySelector(".okb-price");
const okbChange = document.querySelector(".okb-change");
const okbDiv = document.querySelector(".okb-div");

const chainlinkPrice = document.querySelector(".chainlink-price");
const chainlinkChange = document.querySelector(".chainlink-change");
const chainlinkDiv = document.querySelector(".chainlink-div");

const xlmPrice = document.querySelector(".xlm-price");
const xlmChange = document.querySelector(".xlm-change");
const xlmDiv = document.querySelector(".xlm-div");

const ftxPrice = document.querySelector(".ftx-price");
const ftxChange = document.querySelector(".ftx-change");
const ftxDiv = document.querySelector(".ftx-div");

const nearPrice = document.querySelector(".near-price");
const nearChange = document.querySelector(".near-change");
const nearDiv = document.querySelector(".near-div");

const cronosPrice = document.querySelector(".cronos-price");
const cronosChange = document.querySelector(".cronos-change");
const cronosDiv = document.querySelector(".cronos-div");

const algoPrice = document.querySelector(".algo-price");
const algoChange = document.querySelector(".algo-change");
const algoDiv = document.querySelector(".algo-div");

const moneroPrice = document.querySelector(".monero-price");
const moneroChange = document.querySelector(".monero-change");
const moneroDiv = document.querySelector(".monero-div");

const bcashPrice = document.querySelector(".bcash-price");
const bcashChange = document.querySelector(".bcash-change");
const bcashDiv = document.querySelector(".bcash-div");

const vetPrice = document.querySelector(".vet-price");
const vetChange = document.querySelector(".vet-change");
const vetDiv = document.querySelector(".vet-div");

const quantPrice = document.querySelector(".quant-price");
const quantChange = document.querySelector(".quant-change");
const quantDiv = document.querySelector(".quant-div");

const tezosPrice = document.querySelector(".tezos-price");
const tezosChange = document.querySelector(".tezos-change");
const tezosDiv = document.querySelector(".tezos-div");

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
dataFetcher("dogecoin", dogeDiv, dogeChange, dogePrice, 2);
dataFetcher("polkadot", polkadotDiv, polkadotChange, polkadotPrice, 2);
dataFetcher("shiba-inu", shibaDiv, shibaChange, shibaPrice, 7);
dataFetcher("matic-network", polygonDiv, polygonChange, polygonPrice, 2);
dataFetcher("avalanche-2", avaxDiv, avaxChange, avaxPrice, 2);
dataFetcher("tron", trxDiv, trxChange, trxPrice, 2);
dataFetcher("leo-token", leoDiv, leoChange, leoPrice, 2);
dataFetcher("uniswap", uniDiv, uniChange, uniPrice, 2);
dataFetcher("cosmos", cosmosDiv, cosmosChange, cosmosPrice, 2);
dataFetcher("eos", eosDiv, eosChange, eosPrice, 2);
dataFetcher("ethereum-classic", ethCDiv, ethCChange, ethCPrice, 2);
dataFetcher("litecoin", litecoinDiv, litecoinChange, litecoinPrice, 2);
dataFetcher("okb", okbDiv, okbChange, okbPrice, 2);
dataFetcher("chainlink", chainlinkDiv, chainlinkChange, chainlinkPrice, 2);
dataFetcher("stellar", xlmDiv, xlmChange, xlmPrice, 2);
dataFetcher("ftx-token", ftxDiv, ftxChange, ftxPrice, 2);
dataFetcher("near", nearDiv, nearChange, nearPrice, 2);
dataFetcher("crypto-com-chain", cronosDiv, cronosChange, cronosPrice, 2);
dataFetcher("algorand", algoDiv, algoChange, algoPrice, 2);
dataFetcher("monero", moneroDiv, moneroChange, moneroPrice, 1);
dataFetcher("bitcoin-cash", bcashDiv, bcashChange, bcashPrice, 1);
dataFetcher("vechain", vetDiv, vetChange, vetPrice, 4);
dataFetcher("quant-network", quantDiv, quantChange, quantPrice, 2);
dataFetcher("tezos", tezosDiv, tezosChange, tezosPrice, 2);
