var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},d={},n=e.parcelRequire379f;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in d){var n=d[e];delete d[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){d[e]=t},e.parcelRequire379f=n);var o=n("lnoo9");const i=document.querySelector(".lightbox"),r=document.querySelector(".dropshadow"),a=document.querySelector(".fa-x"),s=document.querySelector(".tradingview-widget-container"),c=document.querySelector(".coin-name"),l=document.querySelectorAll(".card");l.forEach((e=>{e.classList.add("rotater")})),a.addEventListener("click",(()=>{i.classList.add("hidden"),r.classList.add("hidden")})),r.addEventListener("click",(()=>{i.classList.add("hidden"),r.classList.add("hidden")})),l.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("block")||(s.classList.add("fadeIn"),c.textContent="",c.classList.add("dropIn"),a.classList.add("dropIn"),i.classList.remove("hidden"),r.classList.remove("hidden"),c.textContent=e.children[0].textContent,u(e.dataset.id))}))}));const u=e=>{new TradingView.widget({autosize:!0,symbol:o.coinIndex[e],interval:"D",timezone:"Etc/UTC",theme:"dark",style:"1",locale:"en",toolbar_bg:"#f1f3f6",container_id:"chartbox"})};
//# sourceMappingURL=index.6ca95383.js.map
