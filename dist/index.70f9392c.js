const e=document.querySelector(".man-notif"),t=document.querySelector(".notification-box"),s=document.querySelector(".dropshadow"),i=document.querySelector(".light-close3"),c=document.querySelector(".notif-push"),o=document.querySelector(".coin-search"),a=document.querySelector(".coin-fetch-output"),d=document.querySelector(".coin-fetch-title"),n=document.querySelector(".target-price-title"),r=document.querySelector(".user-coin-query"),l=document.querySelector(".notif-anim-container"),u=document.querySelector(".notif-anim-container2"),m=document.querySelector(".notif-anim-container3"),p=document.querySelector(".error-text2"),v=document.querySelector(".state-coinname"),h=(document.querySelector(".target-price-title"),document.querySelector(".target-price-expected")),L=document.querySelector(".calculate-price"),y=document.querySelector(".user-percentage-input"),q=document.querySelector(".coin-param"),f=document.querySelector(".alert-button"),S=document.querySelector(".msg-modal"),g=document.querySelector(".not-working"),C=document.querySelector(".reset-img"),$=document.querySelector(".result-upper"),x=document.querySelector(".result-lower"),w=document.querySelector(".result-setup-box");window.addEventListener("load",(()=>{"granted"===Notification.permission&&(l.classList.add("hidden"),u.classList.remove("hidden"))})),e.addEventListener("click",(()=>{t.classList.remove("hidden"),s.classList.remove("hidden")})),i.addEventListener("click",(()=>{t.classList.add("hidden"),s.classList.add("hidden"),C.classList.add("hidden")})),s.addEventListener("click",(()=>{t.classList.add("hidden"),s.classList.add("hidden"),C.classList.add("hidden")})),c.addEventListener("click",(async()=>{await Notification.requestPermission().then((e=>{"granted"===e&&(l.classList.add("opacityOut"),C.classList.add("hidden"),setTimeout((()=>{l.classList.add("hidden"),u.classList.remove("hidden")}),2e3))}))})),o.addEventListener("click",(()=>{U()}));let k=0,A=0,E="",O="";const U=async()=>{try{p.classList.add("inv");const e=await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${r.value}&vs_currencies=usd`),t=await e.json();E=r.value,console.log(t[r.value].usd.toString().length),k=t[r.value].usd,a.textContent=`$${k}`,d.textContent=r.value.charAt(0).toUpperCase()+r.value.slice(1),n.textContent=r.value.charAt(0).toUpperCase()+r.value.slice(1),u.classList.add("opacityOut"),v.textContent=`If ${r.value.charAt(0).toUpperCase()+r.value.slice(1)}'s price`,console.log(k),setTimeout((()=>{u.classList.add("hidden"),m.classList.remove("hidden")}),2e3)}catch(e){p.classList.remove("inv")}};let T="";L.addEventListener("click",(()=>{if("Increases"===q.value){let e=(+y.value+100)/100*k;return A=e,O="surged past your target!",h.textContent="$"+ +e.toFixed(6),f.classList.remove("hidden"),void(T=!0)}if("Decreases"===q.value){let e=(100-+y.value)/100*k;return A=e,O="dropped past your target!",h.textContent="$"+ +e.toFixed(6),f.classList.remove("hidden"),void(T=!1)}}));let b=0;const M=()=>{if(0!==b&&b>A){alert("Alert!");new Notification(`${E.charAt(0).toUpperCase()+r.value.slice(1)}'s price ${O}`,{body:`${E.charAt(0).toUpperCase()+r.value.slice(1)}'s price is $${A}`})}},N=()=>{if(0!==b&&b<A){alert("Alert!");new Notification(`${E.charAt(0).toUpperCase()+r.value.slice(1)}'s price ${O}`,{body:`${E.charAt(0).toUpperCase()+r.value.slice(1)}'s price is $${A}`})}},I=(e,t)=>{setTimeout((()=>{e.classList.add("fadeModalOut")}),t)};f.addEventListener("click",(()=>{setInterval((async()=>{try{if(T&&b<A){const e=await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${E}&vs_currencies=usd`),t=await e.json();b=t[E].usd,M()}if(!T&&""!==T){const e=await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${E}&vs_currencies=usd`),t=await e.json();b=t[E].usd,N()}}catch(e){console.log(e)}}),1e4),I($,300),I(w,600),I(x,900),I(t,1400),setTimeout((()=>{t.classList.add("hidden"),t.classList.remove("fadeModalOut"),$.classList.remove("fadeModalOut"),w.classList.remove("fadeModalOut"),x.classList.remove("fadeModalOut"),s.classList.add("hidden"),u.classList.add("hidden"),m.classList.add("hidden"),u.classList.remove("hidden"),"granted"!==Notification.permission&&l.classList.remove("hidden"),l.classList.remove("opacityOut"),u.classList.remove("opacityOut"),r.value="",a.textContent="",d.textContent="",n.textContent="",v.textContent="",h.textContent="",y.value="",q.value="Increases"}),1400),setTimeout((()=>{S.classList.remove("hidden"),S.classList.add("msgAnimate")}),1600),setTimeout((()=>{S.classList.add("hidden")}),5600)})),g.addEventListener("click",(()=>{C.classList.toggle("hidden")}));
//# sourceMappingURL=index.70f9392c.js.map
