var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},d={},n=e.parcelRequire379f;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in d){var n=d[e];delete d[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){d[e]=t},e.parcelRequire379f=n);var o=n("lnoo9");const r=document.querySelector(".lightbox"),i=document.querySelector(".dropshadow"),a=document.querySelector(".fa-x"),c=document.querySelector(".tradingview-widget-container"),s=document.querySelector(".search-contract-box");let l=document.querySelector(".coin-name");const u=document.querySelectorAll(".card");u.forEach((e=>{e.classList.add("rotater")})),a.addEventListener("click",(()=>{r.classList.add("hidden"),i.classList.add("hidden")})),i.addEventListener("click",(()=>{r.classList.add("hidden"),i.classList.add("hidden"),s.classList.add("hidden")})),u.forEach((e=>{e.addEventListener("click",(()=>{c.classList.add("fadeIn"),l.textContent="",l.classList.add("dropIn"),r.classList.remove("hidden"),i.classList.remove("hidden"),l.textContent=e.children[0].textContent,f(e.dataset.id)}))}));const f=e=>{new TradingView.widget({autosize:!0,symbol:o.coinIndex[e],interval:"D",timezone:"Etc/UTC",theme:"dark",style:"1",locale:"en",toolbar_bg:"#f1f3f6",container_id:"chartbox"})};
//# sourceMappingURL=index.f556c0b3.js.map
