const e=document.querySelector(".man-notif"),t=document.querySelector(".notification-box"),s=document.querySelector(".dropshadow"),c=document.querySelector(".light-close3"),i=document.querySelector(".notif-push"),o=document.querySelector(".coin-search"),a=document.querySelector(".coin-fetch-output"),n=document.querySelector(".coin-fetch-title"),d=document.querySelector(".target-price-title"),r=document.querySelector(".user-coin-query"),l=document.querySelector(".notif-anim-container"),u=document.querySelector(".notif-anim-container2"),m=document.querySelector(".notif-anim-container3"),p=document.querySelector(".error-text2"),v=document.querySelector(".state-coinname"),h=(document.querySelector(".target-price-title"),document.querySelector(".target-price-expected")),L=document.querySelector(".calculate-price"),y=document.querySelector(".user-percentage-input"),f=document.querySelector(".coin-param"),q=document.querySelector(".alert-button"),S=document.querySelector(".msg-modal"),g=document.querySelector(".result-upper"),C=document.querySelector(".result-lower"),$=document.querySelector(".result-setup-box");window.addEventListener("load",(()=>{"granted"===Notification.permission&&(l.classList.add("hidden"),u.classList.remove("hidden"))})),e.addEventListener("click",(()=>{t.classList.remove("hidden"),s.classList.remove("hidden")})),c.addEventListener("click",(()=>{t.classList.add("hidden"),s.classList.add("hidden")})),s.addEventListener("click",(()=>{t.classList.add("hidden"),s.classList.add("hidden")})),i.addEventListener("click",(async()=>{await Notification.requestPermission().then((e=>{"granted"===e&&(l.classList.add("opacityOut"),setTimeout((()=>{l.classList.add("hidden"),u.classList.remove("hidden")}),2e3))}))})),o.addEventListener("click",(()=>{O()}));let x=0,w=0,k="",A="";const O=async()=>{try{p.classList.add("inv");const e=await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${r.value}&vs_currencies=usd`),t=await e.json();k=r.value,x=t[r.value].usd,a.textContent=`$${t[r.value].usd}`,n.textContent=r.value.charAt(0).toUpperCase()+r.value.slice(1),d.textContent=r.value.charAt(0).toUpperCase()+r.value.slice(1),u.classList.add("opacityOut"),v.textContent=`If ${r.value.charAt(0).toUpperCase()+r.value.slice(1)}'s price`,console.log(x),setTimeout((()=>{u.classList.add("hidden"),m.classList.remove("hidden")}),2e3)}catch(e){p.classList.remove("inv")}};let E="";L.addEventListener("click",(()=>{if("Increases"===f.value){let e=(+y.value+100)/100*x;return w=e,A="surged past your target!",h.textContent="$"+ +e.toFixed(2),q.classList.remove("hidden"),void(E=!0)}if("Decreases"===f.value){let e=(100-+y.value)/100*x;return w=e,A="dropped past your target!",h.textContent="$"+ +e.toFixed(2),q.classList.remove("hidden"),void(E=!1)}}));let U=0;const M=()=>{if(0!==U&&U>w){alert("Alert!");new Notification(`${k.charAt(0).toUpperCase()+r.value.slice(1)}'s price ${A}`,{body:`${k.charAt(0).toUpperCase()+r.value.slice(1)}'s price is $${w}`})}},T=()=>{if(0!==U&&U<w){alert("Alert!");new Notification(`${k.charAt(0).toUpperCase()+r.value.slice(1)}'s price ${A}`,{body:`${k.charAt(0).toUpperCase()+r.value.slice(1)}'s price is $${w}`})}},b=(e,t)=>{setTimeout((()=>{e.classList.add("fadeModalOut")}),t)};q.addEventListener("click",(()=>{setInterval((async()=>{try{if(E&&U<w){const e=await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${k}&vs_currencies=usd`),t=await e.json();U=t[k].usd,console.log(U),console.log("Fetched Plus"),M()}if(!E&&""!==E){const e=await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${k}&vs_currencies=usd`),t=await e.json();U=t[k].usd,console.log(U),console.log("Fetched Min"),T()}}catch(e){console.log(e)}}),1e4),b(g,300),b($,600),b(C,900),b(t,1400),setTimeout((()=>{t.classList.add("hidden"),t.classList.remove("fadeModalOut"),g.classList.remove("fadeModalOut"),$.classList.remove("fadeModalOut"),C.classList.remove("fadeModalOut"),s.classList.add("hidden"),u.classList.add("hidden"),m.classList.add("hidden"),u.classList.remove("hidden"),"granted"!==Notification.permission&&l.classList.remove("hidden"),l.classList.remove("opacityOut"),u.classList.remove("opacityOut"),r.value="",a.textContent="",n.textContent="",d.textContent="",v.textContent="",h.textContent="",y.value="",f.value="Increases"}),1400),setTimeout((()=>{S.classList.remove("hidden"),S.classList.add("msgAnimate")}),1600),setTimeout((()=>{S.classList.add("hidden")}),5600)}));
//# sourceMappingURL=index.67dd95ff.js.map
