var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=e.parcelRequire379f;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){o[e]=t},e.parcelRequire379f=a);var n=a("fXOuZ"),d=a("1tHc5");const s=(0,n.initializeApp)({apiKey:"AIzaSyBjUBG1uVjtOrbC7dU2_yJD46tmCpDffNs",authDomain:"qdash-3fe95.firebaseapp.com",projectId:"qdash-3fe95",storageBucket:"qdash-3fe95.appspot.com",messagingSenderId:"741731808915",appId:"1:741731808915:web:8a5095c180e8509969ff66",measurementId:"G-YJYQ20T6BW"}),i=(0,d.getAuth)(s),r=document.querySelector(".login-btn"),l=document.querySelector(".logout-btn");(async()=>{(0,d.onAuthStateChanged)(i,(e=>{e?(r.classList.add("hidden"),l.classList.remove("hidden"),localStorage.setItem("loggedIn",e.uid)):(r.classList.remove("hidden"),l.classList.add("hidden"),console.log("No user"),localStorage.clear())}))})();l.addEventListener("click",(async()=>{try{await(0,d.signOut)(i),l.classList.add("hidden")}catch(e){console.log(e)}}));
//# sourceMappingURL=index.7efb9599.js.map