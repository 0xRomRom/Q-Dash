const e=document.querySelector(".search-button"),t=document.querySelector(".search-modal"),s=document.querySelector(".search-inner-modal"),c=document.querySelector(".search-inner-result"),o=document.querySelector(".search-modal-title"),a=document.querySelector(".dropshadow-srch"),r=document.querySelector(".light-close4"),n=document.querySelector(".search-coin-input"),d=document.querySelector(".search-coin-btn"),i=document.querySelector(".cant-find"),l=document.querySelector(".cntr-sr-btn"),u=document.querySelector(".search-back"),m=document.querySelectorAll(".out"),p=document.querySelector(".res-img"),h=document.querySelector(".up-down"),L=document.querySelector(".fluctuate"),y=document.querySelector(".coin-title"),v=document.querySelector(".fetched-rank"),g=document.querySelector(".circ-l"),f=document.querySelector(".price-perc-change"),S=document.querySelector(".total-sup"),_=document.querySelector(".mark-price"),x=document.querySelector(".mark-price-high"),C=document.querySelector(".mark-price-low"),q=document.querySelector(".box-s2"),b=document.querySelector(".ath-date"),k=document.querySelector(".circ-count"),$=document.querySelector(".circ-perc-box"),O=document.querySelector(".circ-amount-box"),w=["January","February","March","April","May","June","July","August","September","October","November","December"];let D;$.addEventListener("mouseover",(()=>{O.classList.remove("inv")})),$.addEventListener("mouseleave",(()=>{O.classList.add("inv")})),u.addEventListener("click",(()=>{s.classList.remove("rotateDiv"),c.classList.remove("fadeDivIn"),c.classList.add("rotateDivBack"),o.classList.add("fadeOut"),n.classList.add("fadeOut"),l.classList.add("fadeOut"),n.value="",u.classList.add("hidden"),m.forEach((e=>{e.classList.add("fadeOut")})),setTimeout((()=>{o.classList.remove("fadeOut"),n.classList.remove("fadeOut"),l.classList.remove("fadeOut"),o.classList.add("fadeDivIn"),n.classList.add("fadeDivIn"),l.classList.add("fadeDivIn"),c.classList.remove("rotateDivBack"),c.classList.add("hidden"),L.textContent="",y.textContent="",v.textContent="",g.textContent="",f.textContent="",S.textContent="",_.textContent="",x.textContent="",C.textContent="",b.textContent="",k.textContent="",n.focus(),m.forEach((e=>{e.classList.remove("fadeOut"),e.classList.remove("bg-up"),e.classList.remove("bg-down")}))}),400)})),e.addEventListener("click",(()=>{a.classList.remove("hidden"),a.classList.remove("fadeOut"),t.classList.remove("fadeOut"),t.classList.remove("hidden"),t.classList.remove("fadeOut"),t.classList.remove("hidden"),n.focus()})),a.addEventListener("click",(()=>{a.classList.add("fadeOut"),t.classList.add("fadeOut"),setTimeout((()=>{a.classList.add("hidden"),t.classList.add("hidden")}),500)})),r.addEventListener("click",(()=>{a.classList.add("fadeOut"),t.classList.add("fadeOut"),setTimeout((()=>{a.classList.add("hidden"),t.classList.add("hidden")}),500)})),d.addEventListener("click",(()=>{E()})),n.addEventListener("keyup",(e=>{"Enter"===e.key&&E()}));const E=async()=>{let e=n.value.toLowerCase();D=e;try{const t=await fetch(`https://api.coingecko.com/api/v3/search?query=${e}`),a=await t.json();if(0===a.coins.length)return void i.classList.remove("inv");U(a),s.classList.add("rotateDiv"),u.classList.remove("hidden"),i.classList.add("inv"),o.classList.add("fadeOut"),n.classList.add("fadeOut"),l.classList.add("fadeOut"),c.classList.add("fadeDivIn"),setTimeout((()=>{c.classList.remove("hidden")}),500)}catch(e){console.log(e)}},U=e=>{for(let t of Object.values(e.coins))if(t.symbol.toLowerCase()===D||t.name.toLowerCase()===D)return void F(t.id)},F=async e=>{try{const t=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${e}&order=market_cap_desc&per_page=100&page=1&sparkline=false`),s=await t.json(),c=await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${e}&vs_currencies=usd&include_24hr_change=true`),o=(await c.json())[e].usd_24h_change.toString().slice(0,4);I(s[0],o)}catch(e){console.log(e)}},I=(e,t)=>{let s=e.ath_date.slice(0,10);console.log(e.price_change_24h);g.textContent=e.circulating_supply/e.total_supply==1/0?"∞":`${(e.circulating_supply/e.total_supply).toString().slice(2,4)}%`,p.src=e.image,y.textContent=e.name,v.textContent=`#${e.market_cap_rank}`,f.textContent=`${t>=.01?"+":""}${t}% $${e.symbol.toUpperCase()} ${"$"+t>=.01?"+":""}${e.current_price.toString().length>=8?"":"("+e.price_change_24h.toString().slice(0,6)+" USD)"}`,S.textContent=null===e.total_supply?"∞":e.total_supply.toFixed(0)+" "+e.symbol.toUpperCase(),_.textContent=`$${e.current_price} USD`,x.textContent=`$${e.current_price>1?e.high_24h.toFixed(2):e.high_24h.toFixed(5)} USD`,C.textContent=`$${e.current_price>1?e.low_24h.toFixed(2):e.low_24h.toFixed(5)} USD`,k.textContent=`${e.circulating_supply.toFixed(0)} $${e.symbol.toUpperCase()}`,b.textContent=`${(e=>{let t=+e.slice(5,7);return w[t-1]})(s)} ${e.ath_date.slice(8,10)} ${e.ath_date.slice(0,4)}`,+t>=0&&(L.textContent="UP",L.style.backgroundColor="rgb(79, 159, 88)",f.style.color="rgb(118, 219, 140)",h.src="./img/pump.png",q.classList.add("bg-up")),+t<0&&(L.style.backgroundColor="rgb(188, 67, 63)",L.textContent="DOWN",f.style.color="red",h.src="./img/dump.png",q.classList.add("bg-down"))};
//# sourceMappingURL=index.f55a328e.js.map
