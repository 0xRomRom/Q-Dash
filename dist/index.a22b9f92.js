var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},d=e.parcelRequire379f;null==d&&((d=function(e){if(e in t)return t[e].exports;if(e in n){var d=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,d.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire379f=d);var o=d("lnoo9");const r=document.querySelector(".lightbox"),i=document.querySelector(".dropshadow"),a=document.querySelector(".fa-x"),c=(document.querySelector(".chart-container"),document.querySelector(".tradingview-widget-container"));let l=document.querySelector(".coin-name");const s=document.querySelectorAll(".card");s.forEach((e=>{e.classList.add("rotater")})),a.addEventListener("click",(()=>{r.classList.add("hidden"),i.classList.add("hidden")})),i.addEventListener("click",(()=>{r.classList.add("hidden"),i.classList.add("hidden")})),s.forEach((e=>{e.addEventListener("click",(()=>{c.classList.add("fadeIn"),l.textContent="",r.classList.remove("hidden"),i.classList.remove("hidden"),l.textContent=e.children[0].textContent,u(e.dataset.id)}))}));const u=e=>{new TradingView.widget({autosize:!0,symbol:o.coinIndex[e],interval:"D",timezone:"Etc/UTC",theme:"dark",style:"1",locale:"en",toolbar_bg:"#f1f3f6",container_id:"chartbox"})};
//# sourceMappingURL=index.a22b9f92.js.map
