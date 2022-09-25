"use strict";

const COINGECKOAPI =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ccardano%2Cdogecoin%2Cpolkadot%2Cshiba-inu%2Cmatic-network%2Cavalanche-2%2Ctron%2Cleo-token%2Cuniswap%2Ccosmos%2Ceos%2Cethereum-classic%2Clitecoin%2Cokb%2Cchainlink%2Cstellar%2Cftx-token%2Cnear%2Ccrypto-com-chain%2Calgorand%2Cmonero%2Cbitcoin-cash%2Cvechain%2Cquant-network%2Ctezos%2Caxie-infinity%2Ctheta-token%2Celrond-erd-2%2Caave%2Ckucoin-shares%2Cripple%2Ciota%2Cethereum%2Czcash%2Chuobi-token%2Csolana%2Cevmos%2Ccelsius-degree-token%2Cpancakeswap-token%2Cgatechain-token%2Cneo%2Cmaker%2Chelium%2Cfantom%2Chavven%2Cbinancecoin%2Cosmosis%2Cnexo%2Ccompound-ether%2Carweave%2Czilliqa%2Cthorchain%2Cdash%2Crocket-pool%2Cblockstack%2Cwaves%2Ckava%2Cxdce-crowd-sale%2Ccompound-governance-token&vs_currencies=usd&include_24hr_change=true";

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

const axiePrice = document.querySelector(".axie-price");
const axieChange = document.querySelector(".axie-change");
const axieDiv = document.querySelector(".axie-div");

const thetaPrice = document.querySelector(".theta-price");
const thetaChange = document.querySelector(".theta-change");
const thetaDiv = document.querySelector(".theta-div");

const elrondPrice = document.querySelector(".elrond-price");
const elrondChange = document.querySelector(".elrond-change");
const elrondDiv = document.querySelector(".elrond-div");

const aavePrice = document.querySelector(".aave-price");
const aaveChange = document.querySelector(".aave-change");
const aaveDiv = document.querySelector(".aave-div");

const kucoinPrice = document.querySelector(".kucoin-price");
const kucoinChange = document.querySelector(".kucoin-change");
const kucoinDiv = document.querySelector(".kucoin-div");

const xrpPrice = document.querySelector(".xrp-price");
const xrpChange = document.querySelector(".xrp-change");
const xrpDiv = document.querySelector(".xrp-div");

const iotaPrice = document.querySelector(".iota-price");
const iotaChange = document.querySelector(".iota-change");
const iotaDiv = document.querySelector(".iota-div");

const ethPrice = document.querySelector(".eth-price");
const ethChange = document.querySelector(".eth-change");
const ethDiv = document.querySelector(".eth-div");

const zcashPrice = document.querySelector(".zcash-price");
const zcashChange = document.querySelector(".zcash-change");
const zcashDiv = document.querySelector(".zcash-div");

const huobiPrice = document.querySelector(".huobi-price");
const huobiChange = document.querySelector(".huobi-change");
const huobiDiv = document.querySelector(".huobi-div");

const solPrice = document.querySelector(".sol-price");
const solChange = document.querySelector(".sol-change");
const solDiv = document.querySelector(".sol-div");

const evmosPrice = document.querySelector(".evmos-price");
const evmosChange = document.querySelector(".evmos-change");
const evmosDiv = document.querySelector(".evmos-div");

const celsiusPrice = document.querySelector(".celsius-price");
const celsiusChange = document.querySelector(".celsius-change");
const celsiusDiv = document.querySelector(".celsius-div");

const cakePrice = document.querySelector(".cake-price");
const cakeChange = document.querySelector(".cake-change");
const cakeDiv = document.querySelector(".cake-div");

const gatePrice = document.querySelector(".gate-price");
const gateChange = document.querySelector(".gate-change");
const gateDiv = document.querySelector(".gate-div");

const neoPrice = document.querySelector(".neo-price");
const neoChange = document.querySelector(".neo-change");
const neoDiv = document.querySelector(".neo-div");

const makerPrice = document.querySelector(".maker-price");
const makerChange = document.querySelector(".maker-change");
const makerDiv = document.querySelector(".maker-div");

const heliumPrice = document.querySelector(".helium-price");
const heliumChange = document.querySelector(".helium-change");
const heliumDiv = document.querySelector(".helium-div");

const fantomPrice = document.querySelector(".fantom-price");
const fantomChange = document.querySelector(".fantom-change");
const fantomDiv = document.querySelector(".fantom-div");

const syntPrice = document.querySelector(".synt-price");
const syntChange = document.querySelector(".synt-change");
const syntDiv = document.querySelector(".synt-div");

const bnbPrice = document.querySelector(".bnb-price");
const bnbChange = document.querySelector(".bnb-change");
const bnbDiv = document.querySelector(".bnb-div");

const osmosisPrice = document.querySelector(".osmosis-price");
const osmosisChange = document.querySelector(".osmosis-change");
const osmosisDiv = document.querySelector(".osmosis-div");

const nexoPrice = document.querySelector(".nexo-price");
const nexoChange = document.querySelector(".nexo-change");
const nexoDiv = document.querySelector(".nexo-div");

const cethPrice = document.querySelector(".ceth-price");
const cethChange = document.querySelector(".ceth-change");
const cethDiv = document.querySelector(".ceth-div");

const arwPrice = document.querySelector(".arw-price");
const arwChange = document.querySelector(".arw-change");
const arwDiv = document.querySelector(".arw-div");

const zilPrice = document.querySelector(".zil-price");
const zilChange = document.querySelector(".zil-change");
const zilDiv = document.querySelector(".zil-div");

const runePrice = document.querySelector(".rune-price");
const runeChange = document.querySelector(".rune-change");
const runeDiv = document.querySelector(".rune-div");

const dashPrice = document.querySelector(".dash-price");
const dashChange = document.querySelector(".dash-change");
const dashDiv = document.querySelector(".dash-div");

const rocketPrice = document.querySelector(".rocket-price");
const rocketChange = document.querySelector(".rocket-change");
const rocketDiv = document.querySelector(".rocket-div");

const stacksPrice = document.querySelector(".stacks-price");
const stacksChange = document.querySelector(".stacks-change");
const stacksDiv = document.querySelector(".stacks-div");

const wavesPrice = document.querySelector(".waves-price");
const wavesChange = document.querySelector(".waves-change");
const wavesDiv = document.querySelector(".waves-div");

const kavaPrice = document.querySelector(".kava-price");
const kavaChange = document.querySelector(".kava-change");
const kavaDiv = document.querySelector(".kava-div");

const xdcPrice = document.querySelector(".xdc-price");
const xdcChange = document.querySelector(".xdc-change");
const xdcDiv = document.querySelector(".xdc-div");

const compPrice = document.querySelector(".comp-price");
const compChange = document.querySelector(".comp-change");
const compDiv = document.querySelector(".comp-div");

window.addEventListener("load", async () => {
  await dataFetcher();
  uiUpdater("bitcoin", bitcoinDiv, bitcoinChange, bitcoinPrice, 0);
  uiUpdater("cardano", cardanoDiv, cardanoChange, cardanoPrice, 2);
  uiUpdater("dogecoin", dogeDiv, dogeChange, dogePrice, 4);
  uiUpdater("polkadot", polkadotDiv, polkadotChange, polkadotPrice, 2);
  uiUpdater("shiba-inu", shibaDiv, shibaChange, shibaPrice, 7);
  uiUpdater("matic-network", polygonDiv, polygonChange, polygonPrice, 2);
  uiUpdater("avalanche-2", avaxDiv, avaxChange, avaxPrice, 2);
  uiUpdater("tron", trxDiv, trxChange, trxPrice, 2);
  uiUpdater("leo-token", leoDiv, leoChange, leoPrice, 2);
  uiUpdater("uniswap", uniDiv, uniChange, uniPrice, 2);
  uiUpdater("cosmos", cosmosDiv, cosmosChange, cosmosPrice, 2);
  uiUpdater("eos", eosDiv, eosChange, eosPrice, 2);
  uiUpdater("ethereum-classic", ethCDiv, ethCChange, ethCPrice, 2);
  uiUpdater("litecoin", litecoinDiv, litecoinChange, litecoinPrice, 2);
  uiUpdater("okb", okbDiv, okbChange, okbPrice, 2);
  uiUpdater("chainlink", chainlinkDiv, chainlinkChange, chainlinkPrice, 2);
  uiUpdater("stellar", xlmDiv, xlmChange, xlmPrice, 2);
  uiUpdater("ftx-token", ftxDiv, ftxChange, ftxPrice, 2);
  uiUpdater("near", nearDiv, nearChange, nearPrice, 2);
  uiUpdater("crypto-com-chain", cronosDiv, cronosChange, cronosPrice, 2);
  uiUpdater("algorand", algoDiv, algoChange, algoPrice, 2);
  uiUpdater("monero", moneroDiv, moneroChange, moneroPrice, 1);
  uiUpdater("bitcoin-cash", bcashDiv, bcashChange, bcashPrice, 1);
  uiUpdater("vechain", vetDiv, vetChange, vetPrice, 4);
  uiUpdater("quant-network", quantDiv, quantChange, quantPrice, 2);
  uiUpdater("tezos", tezosDiv, tezosChange, tezosPrice, 2);
  uiUpdater("axie-infinity", axieDiv, axieChange, axiePrice, 2);
  uiUpdater("theta-token", thetaDiv, thetaChange, thetaPrice, 2);
  uiUpdater("elrond-erd-2", elrondDiv, elrondChange, elrondPrice, 2);
  uiUpdater("aave", aaveDiv, aaveChange, aavePrice, 2);
  uiUpdater("kucoin-shares", kucoinDiv, kucoinChange, kucoinPrice, 2);
  uiUpdater("ripple", xrpDiv, xrpChange, xrpPrice, 2);
  uiUpdater("iota", iotaDiv, iotaChange, iotaPrice, 2);
  uiUpdater("ethereum", ethDiv, ethChange, ethPrice, 0);
  uiUpdater("zcash", zcashDiv, zcashChange, zcashPrice, 2);
  uiUpdater("huobi-token", huobiDiv, huobiChange, huobiPrice, 2);
  uiUpdater("solana", solDiv, solChange, solPrice, 2);
  uiUpdater("evmos", evmosDiv, evmosChange, evmosPrice, 2);
  uiUpdater("celsius-degree-token", celsiusDiv, celsiusChange, celsiusPrice, 2);
  uiUpdater("pancakeswap-token", cakeDiv, cakeChange, cakePrice, 2);
  uiUpdater("gatechain-token", gateDiv, gateChange, gatePrice, 2);
  uiUpdater("neo", neoDiv, neoChange, neoPrice, 2);
  uiUpdater("maker", makerDiv, makerChange, makerPrice, 0);
  uiUpdater("helium", heliumDiv, heliumChange, heliumPrice, 2);
  uiUpdater("fantom", fantomDiv, fantomChange, fantomPrice, 2);
  uiUpdater("havven", syntDiv, syntChange, syntPrice, 2);
  uiUpdater("binancecoin", bnbDiv, bnbChange, bnbPrice, 2);
  uiUpdater("osmosis", osmosisDiv, osmosisChange, osmosisPrice, 2);
  uiUpdater("nexo", nexoDiv, nexoChange, nexoPrice, 2);
  uiUpdater("compound-ether", cethDiv, cethChange, cethPrice, 2);
  uiUpdater("arweave", arwDiv, arwChange, arwPrice, 2);
  uiUpdater("zilliqa", zilDiv, zilChange, zilPrice, 4);
  uiUpdater("thorchain", runeDiv, runeChange, runePrice, 2);
  uiUpdater("dash", dashDiv, dashChange, dashPrice, 2);
  uiUpdater("rocket-pool", rocketDiv, rocketChange, rocketPrice, 2);
  uiUpdater("blockstack", stacksDiv, stacksChange, stacksPrice, 3);
  uiUpdater("waves", wavesDiv, wavesChange, wavesPrice, 2);
  uiUpdater("kava", kavaDiv, kavaChange, kavaPrice, 2);
  uiUpdater("xdce-crowd-sale", xdcDiv, xdcChange, xdcPrice, 4);
  uiUpdater("compound-governance-token", compDiv, compChange, compPrice, 2);
});

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

let responseObject = {};

const uiUpdater = (coinName, changeDiv, changeTxt, priceTxt, fixedParam) => {
  const price = responseObject[coinName].usd.toFixed(fixedParam);
  const change = responseObject[coinName].usd_24h_change.toFixed(2);
  priceTxt.textContent = "";
  changeTxt.textContent = "";
  priceTxt.textContent = `$${price}`;
  changeTxt.textContent = `${change}%`;
  classChecker(changeDiv, change);
};

const dataFetcher = async () => {
  const response = await fetch(COINGECKOAPI);
  const data = await response.json();
  responseObject = data;
};
