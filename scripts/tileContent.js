"use strict";

const tileContainer = document.querySelector(".tile-container");

let mainPage = `<div class="card cardano-div rotater" data-id="cardano">
<h1 class="card-title c-small cardano">Cardano</h1>
<p class="card-price cardano-price"></p>
<p class="card-percentage cardano-change"></p>
</div>
<div class="card doge-div" data-id="doge">
<h1 class="card-title">Doge</h1>
<p class="card-price doge-price"></p>
<p class="card-percentage doge-change"></p>
</div>
<div class="card polkadot-div" data-id="polkadot">
<h1 class="card-title c-small polkadot">Polkadot</h1>
<p class="card-price polkadot-price"></p>
<p class="card-percentage polkadot-change"></p>
</div>
<div class="card shiba-div" data-id="shiba">
<h1 class="card-title c-mid">Shiba</h1>
<p class="card-price shiba-price"></p>
<p class="card-percentage shiba-change"></p>
</div>
<div class="card card-fat bitcoin-div" data-id="bitcoin">
<h1 class="card-title-fat">Bitcoin</h1>
<p class="card-price-fat bitcoin-price"></p>
<p class="card-percentage-fat bitcoin-change"></p>
</div>
<div class="card polygon-div" data-id="polygon">
<h1 class="card-title c-small polygon">Polygon</h1>
<p class="card-price polygon-price"></p>
<p class="card-percentage polygon-change"></p>
</div>
<div class="card avax-div" data-id="avax">
<h1 class="card-title">AVAX</h1>
<p class="card-price avax-price"></p>
<p class="card-percentage avax-change"></p>
</div>
<div class="card trx-div" data-id="tron">
<h1 class="card-title">TRON</h1>
<p class="card-price trx-price"></p>
<p class="card-percentage trx-change"></p>
</div>
<div class="card leo-div" data-id="leo">
<h1 class="card-title c-small2">LEO</h1>
<p class="card-price leo-price"></p>
<p class="card-percentage leo-change"></p>
</div>
<div class="card uni-div" data-id="uniswap">
<h1 class="card-title c-small uniswap">Uniswap</h1>
<p class="card-price uni-price"></p>
<p class="card-percentage uni-change"></p>
</div>
<div class="card cosmos-div" data-id="cosmos">
<h1 class="card-title c-small cosmos">Cosmos</h1>
<p class="card-price cosmos-price"></p>
<p class="card-percentage cosmos-change"></p>
</div>
<div class="card card-wide eos-div" data-id="eos">
<h1 class="card-title-wide">EOS</h1>
<p class="card-price-wide eos-price"></p>
<p class="card-percentage-wide eos-change"></p>
</div>
<div class="card ethC-div" data-id="ethclassic">
<h1 class="card-title c-small2 ethclassic">ETH <br />Classic</h1>
<p class="card-price ethC-price"></p>
<p class="card-percentage ethC-change"></p>
</div>
<div class="card litecoin-div" data-id="litecoin">
<h1 class="card-title c-small">Litecoin</h1>
<p class="card-price litecoin-price"></p>
<p class="card-percentage litecoin-change"></p>
</div>
<div class="card okb-div" data-id="okb">
<h1 class="card-title">OKB</h1>
<p class="card-price okb-price"></p>
<p class="card-percentage okb-change"></p>
</div>
<div class="card chainlink-div" data-id="chainlink">
<h1 class="card-title c-small2 chainlink">Chainlink</h1>
<p class="card-price chainlink-price"></p>
<p class="card-percentage chainlink-change"></p>
</div>
<div class="card xlm-div" data-id="xlm">
<h1 class="card-title">XLM</h1>
<p class="card-price xlm-price"></p>
<p class="card-percentage xlm-change"></p>
</div>
<div class="card ftx-div" data-id="ftx">
<h1 class="card-title">FTX</h1>
<p class="card-price ftx-price"></p>
<p class="card-percentage ftx-change"></p>
</div>
<div class="card near-div" data-id="near">
<h1 class="card-title">NEAR</h1>
<p class="card-price near-price"></p>
<p class="card-percentage near-change"></p>
</div>
<div class="card cronos-div" data-id="cronos">
<h1 class="card-title c-small">Cronos</h1>
<p class="card-price cronos-price"></p>
<p class="card-percentage cronos-change"></p>
</div>
<div class="card algo-div" data-id="algorand">
<h1 class="card-title c-small2 algo">Algorand</h1>
<p class="card-price algo-price"></p>
<p class="card-percentage algo-change"></p>
</div>
<div class="card monero-div" data-id="monero">
<h1 class="card-title c-small">Monero</h1>
<p class="card-price monero-price"></p>
<p class="card-percentage monero-change"></p>
</div>
<div class="card bcash-div" data-id="bitcoincash">
<h1 class="card-title c-small2 bitcoincash">
  Bitcoin <br />
  Cash
</h1>
<p class="card-price bcash-price"></p>
<p class="card-percentage bcash-change"></p>
</div>
<div class="card vet-div" data-id="vechain">
<h1 class="card-title c-small">VeChain</h1>
<p class="card-price vet-price"></p>
<p class="card-percentage vet-change"></p>
</div>
<div class="card quant-div" data-id="quant">
<h1 class="card-title c-mid">Quant</h1>
<p class="card-price quant-price"></p>
<p class="card-percentage quant-change"></p>
</div>
<div class="card tezos-div" data-id="tezos">
<h1 class="card-title">Tezos</h1>
<p class="card-price tezos-price"></p>
<p class="card-percentage tezos-change"></p>
</div>
<div class="card axie-div" data-id="axie">
<h1 class="card-title">Axie</h1>
<p class="card-price axie-price"></p>
<p class="card-percentage axie-change"></p>
</div>
<div class="card theta-div" data-id="theta">
<h1 class="card-title">Theta</h1>
<p class="card-price theta-price"></p>
<p class="card-percentage theta-change"></p>
</div>
<div class="card elrond-div" data-id="elrond">
<h1 class="card-title c-mid">Elrond</h1>
<p class="card-price elrond-price"></p>
<p class="card-percentage elrond-change"></p>
</div>
<div class="card aave-div" data-id="aave">
<h1 class="card-title">Aave</h1>
<p class="card-price aave-price"></p>
<p class="card-percentage aave-change"></p>
</div>
<div class="card kucoin-div" data-id="kucoin">
<h1 class="card-title c-mid">KuCoin</h1>
<p class="card-price kucoin-price"></p>
<p class="card-percentage kucoin-change"></p>
</div>
<div class="card card-tall xrp-div" data-id="xrp">
<h1 class="card-title-tall xrp">XRP</h1>
<p class="card-price-tall xrp-price"></p>
<p class="card-percentage-tall xrp-change"></p>
</div>
<div class="card iota-div" data-id="iota">
<h1 class="card-title">IOTA</h1>
<p class="card-price iota-price"></p>
<p class="card-percentage iota-change"></p>
</div>
<div class="card card-fat eth-div" data-id="ethereum">
<h1 class="card-title-fat eth">Ethereum</h1>
<p class="card-price-fat eth-price"></p>
<p class="card-percentage-fat eth-change"></p>
</div>
<div class="card zcash-div" data-id="zcash">
<h1 class="card-title">Zcash</h1>
<p class="card-price zcash-price"></p>
<p class="card-percentage zcash-change"></p>
</div>
<div class="card huobi-div" data-id="huobi">
<h1 class="card-title">Huobi</h1>
<p class="card-price huobi-price"></p>
<p class="card-percentage huobi-change"></p>
</div>
<div class="card card-wide sol-div" data-id="solana">
<h1 class="card-title-wide">Solana</h1>
<p class="card-price-wide sol-price"></p>
<p class="card-percentage-wide sol-change"></p>
</div>
<div class="card c-last evmos-div" data-id="evmos">
<h1 class="card-title c-mid">Evmos</h1>
<p class="card-price evmos-price"></p>
<p class="card-percentage evmos-change"></p>
</div>
<div class="card c-last celsius-div" data-id="celsius">
<h1 class="card-title c-mid">Celsius</h1>
<p class="card-price celsius-price"></p>
<p class="card-percentage celsius-change"></p>
</div>
<div class="card cake-div" data-id="cake">
<h1 class="card-title">CAKE</h1>
<p class="card-price cake-price"></p>
<p class="card-percentage cake-change"></p>
</div>
<div class="card gate-div" data-id="gate">
<h1 class="card-title">Gate</h1>
<p class="card-price gate-price"></p>
<p class="card-percentage gate-change"></p>
</div>
<div class="card neo-div" data-id="neo">
<h1 class="card-title">NEO</h1>
<p class="card-price neo-price"></p>
<p class="card-percentage neo-change"></p>
</div>
<div class="card maker-div" data-id="maker">
<h1 class="card-title c-mid">Maker</h1>
<p class="card-price maker-price"></p>
<p class="card-percentage maker-change"></p>
</div>
<div class="card helium-div" data-id="helium">
<h1 class="card-title c-mid">Helium</h1>
<p class="card-price helium-price"></p>
<p class="card-percentage helium-change"></p>
</div>
<div class="card fantom-div" data-id="fantom">
<h1 class="card-title c-small">Fantom</h1>
<p class="card-price fantom-price"></p>
<p class="card-percentage fantom-change"></p>
</div>
<div class="card synt-div" data-id="synthetix">
<h1 class="card-title c-small2 synthetix">Synthetix</h1>
<p class="card-price synt-price"></p>
<p class="card-percentage synt-change"></p>
</div>
<div class="card card-fat bnb-div" data-id="bnb">
<h1 class="card-title-fat">BNB</h1>
<p class="card-price-fat bnb-price"></p>
<p class="card-percentage-fat bnb-change"></p>
</div>
<div class="card osmosis-div" data-id="osmosis">
<h1 class="card-title c-small osmosis">Osmosis</h1>
<p class="card-price osmosis-price"></p>
<p class="card-percentage osmosis-change"></p>
</div>
<div class="card nexo-div" data-id="nexo">
<h1 class="card-title">NEXO</h1>
<p class="card-price nexo-price"></p>
<p class="card-percentage nexo-change"></p>
</div>
<div class="card flow-div" data-id="flow">
<h1 class="card-title">Flow</h1>
<p class="card-price flow-price"></p>
<p class="card-percentage flow-change"></p>
</div>
<div class="card arw-div" data-id="arweave">
<h1 class="card-title c-small arweave">Arweave</h1>
<p class="card-price arw-price"></p>
<p class="card-percentage arw-change"></p>
</div>
<div class="card zil-div" data-id="zilliqa">
<h1 class="card-title c-mid">Zilliqa</h1>
<p class="card-price zil-price"></p>
<p class="card-percentage zil-change"></p>
</div>
<div class="card rune-div" data-id="rune">
<h1 class="card-title">RUNE</h1>
<p class="card-price rune-price"></p>
<p class="card-percentage rune-change"></p>
</div>
<div class="card dash-div" data-id="dash">
<h1 class="card-title">Dash</h1>
<p class="card-price dash-price"></p>
<p class="card-percentage dash-change"></p>
</div>
<div class="card c-last2 rocket-div" data-id="rocketpool">
<h1 class="card-title c-small2">Rocket Pool</h1>
<p class="card-price rocket-price"></p>
<p class="card-percentage rocket-change"></p>
</div>
<div class="card c-last2 stacks-div" data-id="stacks">
<h1 class="card-title c-mid">Stacks</h1>
<p class="card-price stacks-price"></p>
<p class="card-percentage stacks-change"></p>
</div>
<div class="card c-last waves-div" data-id="waves">
<h1 class="card-title c-mid">Waves</h1>
<p class="card-price waves-price"></p>
<p class="card-percentage waves-change"></p>
</div>
<div class="card c-last kava-div" data-id="kava">
<h1 class="card-title">Kava</h1>
<p class="card-price kava-price"></p>
<p class="card-percentage kava-change"></p>
</div>
<div class="card c-last xdc-div" data-id="xdc">
<h1 class="card-title">XDC</h1>
<p class="card-price xdc-price"></p>
<p class="card-percentage xdc-change"></p>
</div>
<div class="card c-last comp-div" data-id="compound">
<h1 class="card-title c-small3 compound">Compound</h1>
<p class="card-price comp-price"></p>
<p class="card-percentage comp-change"></p>
</div>`;

////////
//++++++
//++++++
//++++++
//++++++
//++++++
//++++++
//++++++
////////

let memePage = `<div class="card shiba-div" data-id="shiba">
<h1 class="card-title c-mid">Shiba Inu</h1>
<p class="card-price m-pr shiba-price"></p>
<p class="card-percentage shiba-change"></p>
</div>
<div class="card dogelonmars-div" data-id="dogelonmars">
<h1 class="card-title">Dogelon Mars</h1>
<p class="card-price m-pr dogelonmars-price"></p>
<p class="card-percentage dogelonmars-change"></p>
</div>
<div class="card flokiinu-div" data-id="flokiinu">
<h1 class="card-title c-small flokiinu">Floki Inu</h1>
<p class="card-price m-pr flokiinu-price"></p>
<p class="card-percentage flokiinu-change"></p>
</div>
<div class="card tamadoge-div" data-id="tamadoge">
<h1 class="card-title c-mid">Tamadoge</h1>
<p class="card-price m-pr tamadoge-price"></p>
<p class="card-percentage tamadoge-change"></p>
</div>
<div class="card card-fat kishuinu-div" data-id="kishuinu">
<h1 class="card-title-fat">Kishu Inu</h1>
<p class="card-price-fat m-pr kishuinu-price"></p>
<p class="card-percentage-fat kishuinu-change"></p>
</div>
<div class="card leash-div" data-id="leash">
<h1 class="card-title c-small leash">Leash</h1>
<p class="card-price leash-price"></p>
<p class="card-percentage leash-change"></p>
</div>
<div class="card samoyedcoin-div" data-id="samoyedcoin">
<h1 class="card-title">Samoyedcoin</h1>
<p class="card-price samoyedcoin-price"></p>
<p class="card-percentage samoyedcoin-change"></p>
</div>
<div class="card shibapredator-div" data-id="shibapredator">
<h1 class="card-title">Shiba Predator</h1>
<p class="card-price m-pr shibapredator-price"></p>
<p class="card-percentage shibapredator-change"></p>
</div>
<div class="card catecoin-div" data-id="catecoin">
<h1 class="card-title c-small2">Catecoin</h1>
<p class="card-price m-pr catecoin-price"></p>
<p class="card-percentage catecoin-change"></p>
</div>
<div class="card hogefinance-div" data-id="hogefinance">
<h1 class="card-title c-small hogefinance">Hoge Finance</h1>
<p class="card-price m-pr hogefinance-price"></p>
<p class="card-percentage hogefinance-change"></p>
</div>
<div class="card cakemonster-div" data-id="cakemonster">
<h1 class="card-title c-small cakemonster">Cakemonster</h1>
<p class="card-price cakemonster-price"></p>
<p class="card-percentage cakemonster-change"></p>
</div>
<div class="card card-wide vitainu-div" data-id="vitainu">
<h1 class="card-title-wide">Vita Inu</h1>
<p class="card-price-wide vitainu-price"></p>
<p class="card-percentage-wide vitainu-change"></p>
</div>
<div class="card banano-div" data-id="banano">
<h1 class="card-title c-small2 banano">Banano</h1>
<p class="card-price banano-price"></p>
<p class="card-percentage banano-change"></p>
</div>
<div class="card thedogenft-div" data-id="thedogenft">
<h1 class="card-title c-small">The Doge NFT</h1>
<p class="card-price thedogenft-price"></p>
<p class="card-percentage thedogenft-change"></p>
</div>
<div class="card dogebonk-div" data-id="dogebonk">
<h1 class="card-title">Dogebonk</h1>
<p class="card-price m-pr dogebonk-price"></p>
<p class="card-percentage dogebonk-change"></p>
</div>
<div class="card polydoge-div" data-id="polydoge">
<h1 class="card-title c-small2 polydoge">Polydoge</h1>
<p class="card-price m-pr polydoge-price"></p>
<p class="card-percentage polydoge-change"></p>
</div>
<div class="card cumrocket-div" data-id="cumrocket">
<h1 class="card-title">Cumrocket</h1>
<p class="card-price m-pr cumrocket-price"></p>
<p class="card-percentage cumrocket-change"></p>
</div>
<div class="card dogegf-div" data-id="dogegf">
<h1 class="card-title">Dogegf</h1>
<p class="card-price m-pr dogegf-price"></p>
<p class="card-percentage dogegf-change"></p>
</div>
<div class="card woofy-div" data-id="woofy">
<h1 class="card-title">Woofy</h1>
<p class="card-price woofy-price"></p>
<p class="card-percentage woofy-change"></p>
</div>
<div class="card dogsofelon-div" data-id="dogsofelon">
<h1 class="card-title c-small">Dogs Of Elon</h1>
<p class="card-price dogsofelon-price"></p>
<p class="card-percentage dogsofelon-change"></p>
</div>
<div class="card feistydogenft-div" data-id="feistydogenft">
<h1 class="card-title c-small2 algo">Feisty Doge NFT</h1>
<p class="card-price m-pr feistydogenft-price"></p>
<p class="card-percentage feistydogenft-change"></p>
</div>
<div class="card kumainu-div" data-id="kuma-inu">
<h1 class="card-title c-small">Kuma Inu</h1>
<p class="card-price m-pr kumainu-price"></p>
<p class="card-percentage kumainu-change"></p>
</div>
<div class="card elondogetoken-div" data-id="elondogetoken">
<h1 class="card-title c-small2 elondogetoken">
Elon Doge Token
</h1>
<p class="card-price m-pr elondogetoken-price"></p>
<p class="card-percentage elondogetoken-change"></p>
</div>
<div class="card memeinu-div" data-id="memeinu">
<h1 class="card-title c-small">Meme Inu</h1>
<p class="card-price m-pr memeinu-price"></p>
<p class="card-percentage memeinu-change"></p>
</div>
<div class="card safemooninu-div" data-id="safemooninu">
<h1 class="card-title c-mid">Safemoon Inu</h1>
<p class="card-price m-pr safemooninu-price"></p>
<p class="card-percentage safemooninu-change"></p>
</div>
<div class="card wallstreetbetsdapp-div" data-id="wallstreetbetsdapp">
<h1 class="card-title">Wallstreet Bets dApp</h1>
<p class="card-price m-pr wallstreetbetsdapp-price"></p>
<p class="card-percentage wallstreetbetsdapp-change"></p>
</div>
<div class="card poodle-div" data-id="poodle">
<h1 class="card-title">Poodle</h1>
<p class="card-price m-pr poodle-price"></p>
<p class="card-percentage poodle-change"></p>
</div>
<div class="card puliinu-div" data-id="puliinu">
<h1 class="card-title">Puli Inu</h1>
<p class="card-price m-pr puliinu-price"></p>
<p class="card-percentage puliinu-change"></p>
</div>
<div class="card shihtzu-div" data-id="shihtzu">
<h1 class="card-title c-mid">Shihtzu</h1>
<p class="card-price m-pr shihtzu-price"></p>
<p class="card-percentage shihtzu-change"></p>
</div>
<div class="card oneup-div" data-id="oneup">
<h1 class="card-title">1 Up</h1>
<p class="card-price m-pr oneup-price"></p>
<p class="card-percentage oneup-change"></p>
</div>
<div class="card kawakami-div" data-id="kawakami">
<h1 class="card-title c-mid">Kawakami</h1>
<p class="card-price m-pr kawakami-price"></p>
<p class="card-percentage kawakami-change"></p>
</div>
<div class="card card-tall cattoken-div" data-id="cattoken">
<h1 class="card-title-tall cattoken">Cat Token</h1>
<p class="card-price-tall m-pr cattoken-price"></p>
<p class="card-percentage-tall cattoken-change"></p>
</div>
<div class="card metadoge-div" data-id="metadoge">
<h1 class="card-title">Metadoge</h1>
<p class="card-price m-pr metadoge-price"></p>
<p class="card-percentage metadoge-change"></p>
</div>
<div class="card card-fat corgicoin-div" data-id="corgicoin">
<h1 class="card-title-fat corgicoin">CorgiCoin</h1>
<p class="card-price-fat corgicoin-price"></p>
<p class="card-percentage-fat corgicoin-change"></p>
</div>
<div class="card duckereum-div" data-id="duckereum">
<h1 class="card-title">Duckereum</h1>
<p class="card-price m-pr duckereum-price"></p>
<p class="card-percentage duckereum-change"></p>
</div>
<div class="card shibavax-div" data-id="shibavax">
<h1 class="card-title">Shibavax</h1>
<p class="card-price m-pr shibavax-price"></p>
<p class="card-percentage shibavax-change"></p>
</div>
<div class="card card-wide kangal-div" data-id="kangal">
<h1 class="card-title-wide">Kangal</h1>
<p class="card-price-wide kangal-price"></p>
<p class="card-percentage-wide kangal-change"></p>
</div>
<div class="card c-last kittycoin-div" data-id="kittycoin">
<h1 class="card-title c-mid">Kittycoin</h1>
<p class="card-price kittycoin-price"></p>
<p class="card-percentage kittycoin-change"></p>
</div>
<div class="card c-last catbonk-div" data-id="catbonk">
<h1 class="card-title c-mid">Catbonk</h1>
<p class="card-price catbonk-price"></p>
<p class="card-percentage catbonk-change"></p>
</div>
<div class="card bobocash-div" data-id="bobocash">
<h1 class="card-title">Bobo Cash</h1>
<p class="card-price m-pr bobocash-price"></p>
<p class="card-percentage bobocash-change"></p>
</div>
<div class="card updog-div" data-id="updog">
<h1 class="card-title">Updog</h1>
<p class="card-price m-pr updog-price"></p>
<p class="card-percentage updog-change"></p>
</div>
<div class="card solabrador-div" data-id="solabrador">
<h1 class="card-title">Solabrador</h1>
<p class="card-price m-pr solabrador-price"></p>
<p class="card-percentage solabrador-change"></p>
</div>
<div class="card kittycoinsolana-div" data-id="kittycoinsolana">
<h1 class="card-title c-mid">Kitty Coin Solana</h1>
<p class="card-price m-pr kittycoinsolana-price"></p>
<p class="card-percentage kittycoinsolana-change"></p>
</div>
<div class="card safemoon2-div" data-id="safemoon2">
<h1 class="card-title c-mid">Safemoon</h1>
<p class="card-price m-pr safemoon2-price"></p>
<p class="card-percentage safemoon2-change"></p>
</div>
<div class="card babysamocoin-div" data-id="babysamocoin">
<h1 class="card-title c-small">Baby Samo Coin</h1>
<p class="card-price m-pr babysamocoin-price"></p>
<p class="card-percentage babysamocoin-change"></p>
</div>
<div class="card harambe-div" data-id="harambe">
<h1 class="card-title c-small2 harambe">Harambe</h1>
<p class="card-price m-pr harambe-price"></p>
<p class="card-percentage harambe-change"></p>
</div>
<div class="card card-fat chihuahuatoken-div" data-id="chihuahuatoken">
<h1 class="card-title-fat">Chihuahua Token</h1>
<p class="card-price-fat chihuahuatoken-price"></p>
<p class="card-percentage-fat chihuahuatoken-change"></p>
</div>
<div class="card jejudoge-div" data-id="jejudoge">
<h1 class="card-title c-small jejudoge">Jeju Doge</h1>
<p class="card-price m-pr jejudoge-price"></p>
<p class="card-percentage jejudoge-change"></p>
</div>
<div class="card shibakenfinance-div" data-id="shibakenfinance">
<h1 class="card-title">Shibaken Finance</h1>
<p class="card-price m-pr shibakenfinance-price"></p>
<p class="card-percentage shibakenfinance-change"></p>
</div>
<div class="card shibapup-div" data-id="shibapup">
<h1 class="card-title">ShibaPup</h1>
<p class="card-price shibapup-price"></p>
<p class="card-percentage shibapup-change"></p>
</div>
<div class="card akitainu-div" data-id="akitainu">
<h1 class="card-title c-small akita-inueave">Akita Inu</h1>
<p class="card-price m-pr akitainu-price"></p>
<p class="card-percentage akitainu-change"></p>
</div>
<div class="card dogefi-div" data-id="dogefi">
<h1 class="card-title c-mid">DogeFi</h1>
<p class="card-price dogefi-price"></p>
<p class="card-percentage dogefi-change"></p>
</div>
<div class="card yooshibainu-div" data-id="yooshibainu">
<h1 class="card-title">Yooshiba Inu</h1>
<p class="card-price m-pr yooshibainu-price"></p>
<p class="card-percentage yooshibainu-change"></p>
</div>
<div class="card litedoge-div" data-id="litedoge">
<h1 class="card-title">LiteDoge</h1>
<p class="card-price m-pr litedoge-price"></p>
<p class="card-percentage litedoge-change"></p>
</div>
<div class="card c-last2 cato-div" data-id="cato">
<h1 class="card-title c-small2">Cato</h1>
<p class="card-price m-pr cato-price"></p>
<p class="card-percentage cato-change"></p>
</div>
<div class="card c-last2 soldoge-div" data-id="soldoge">
<h1 class="card-title c-mid">SolDoge</h1>
<p class="card-price m-pr soldoge-price"></p>
<p class="card-percentage soldoge-change"></p>
</div>
<div class="card c-last richquack-div" data-id="richquack">
<h1 class="card-title c-mid">Rich Quack</h1>
<p class="card-price richquack-price"></p>
<p class="card-percentage richquack-change"></p>
</div>
<div class="card c-last dogedash-div" data-id="dogedash">
<h1 class="card-title">Doge Dash</h1>
<p class="card-price dogedash-price"></p>
<p class="card-percentage dogedash-change"></p>
</div>`;

tileContainer.innerHTML = memePage;
