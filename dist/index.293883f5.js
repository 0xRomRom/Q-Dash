// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8BNRe":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "84c21e9f293883f5";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hwjhP":[function(require,module,exports) {
"use strict";
const searchModalButton = document.querySelector(".search-button");
const searchModal = document.querySelector(".search-modal");
const searchModalInner = document.querySelector(".search-inner-modal");
const searchModalResult = document.querySelector(".search-inner-result");
const searchModalTitle = document.querySelector(".search-modal-title");
const dropBg = document.querySelector(".dropshadow-srch");
const closeSearchModal = document.querySelector(".light-close4");
const searchInput = document.querySelector(".search-coin-input");
const searchButton = document.querySelector(".search-coin-btn");
const cantFindText = document.querySelector(".cant-find");
const buttonBox = document.querySelector(".cntr-sr-btn");
const searchBackButton = document.querySelector(".search-back");
const resultBoxes = document.querySelectorAll(".out");
const responseImage = document.querySelector(".res-img");
const upDown = document.querySelector(".up-down");
const upDown2 = document.querySelector(".up-down2");
const fluctuate = document.querySelector(".fluctuate");
const SearchCoinTitle = document.querySelector(".coin-title");
const fetchedRank = document.querySelector(".fetched-rank");
const circulatingPercentage = document.querySelector(".circ-l");
const pricePercentageChange = document.querySelector(".price-perc-change");
const totalSupply = document.querySelector(".total-sup");
const markPrice = document.querySelector(".mark-price");
const markPriceHigh = document.querySelector(".mark-price-high");
const markPriceLow = document.querySelector(".mark-price-low");
const box2 = document.querySelector(".box-s2");
const athDate = document.querySelector(".ath-date");
const circulatingCount = document.querySelector(".circ-count");
const circulatingPercentageBox = document.querySelector(".circ-perc-box");
const circulatingCountBox = document.querySelector(".circ-amount-box");
// Date array
const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December", 
];
// Toggle display of circulating supply
circulatingPercentageBox.addEventListener("mouseover", ()=>{
    circulatingCountBox.classList.remove("inv");
});
circulatingPercentageBox.addEventListener("mouseleave", ()=>{
    circulatingCountBox.classList.add("inv");
});
// Back from search result
searchBackButton.addEventListener("click", ()=>{
    searchModalInner.classList.remove("rotateDiv");
    searchModalResult.classList.remove("fadeDivIn");
    searchModalResult.classList.add("rotateDivBack");
    searchModalTitle.classList.add("fadeOut");
    searchInput.classList.add("fadeOut");
    buttonBox.classList.add("fadeOut");
    searchInput.value = "";
    searchBackButton.classList.add("hidden");
    upDown.classList.add("hidden");
    upDown2.classList.add("hidden");
    resultBoxes.forEach((item)=>{
        item.classList.add("fadeOut");
    });
    setTimeout(()=>{
        searchModalTitle.classList.remove("fadeOut");
        searchInput.classList.remove("fadeOut");
        buttonBox.classList.remove("fadeOut");
        searchModalTitle.classList.add("fadeDivIn");
        searchInput.classList.add("fadeDivIn");
        buttonBox.classList.add("fadeDivIn");
        searchModalResult.classList.remove("rotateDivBack");
        searchModalResult.classList.add("hidden");
        fluctuate.textContent = "";
        SearchCoinTitle.textContent = "";
        fetchedRank.textContent = "";
        circulatingPercentage.textContent = "";
        pricePercentageChange.textContent = "";
        totalSupply.textContent = "";
        markPrice.textContent = "";
        markPriceHigh.textContent = "";
        markPriceLow.textContent = "";
        athDate.textContent = "";
        circulatingCount.textContent = "";
        searchInput.focus();
        resultBoxes.forEach((item)=>{
            item.classList.remove("fadeOut");
            item.classList.remove("bg-up");
            item.classList.remove("bg-down");
        });
    }, 400);
});
//Open search modal
searchModalButton.addEventListener("click", ()=>{
    dropBg.classList.remove("hidden");
    dropBg.classList.remove("fadeOut");
    searchModal.classList.remove("fadeOut");
    searchModal.classList.remove("hidden");
    searchModal.classList.remove("fadeOut");
    searchModal.classList.remove("hidden");
    searchInput.focus();
});
//Close search modal
dropBg.addEventListener("click", ()=>{
    dropBg.classList.add("fadeOut");
    searchModal.classList.add("fadeOut");
    setTimeout(()=>{
        dropBg.classList.add("hidden");
        searchModal.classList.add("hidden");
    }, 500);
});
closeSearchModal.addEventListener("click", ()=>{
    dropBg.classList.add("fadeOut");
    searchModal.classList.add("fadeOut");
    setTimeout(()=>{
        dropBg.classList.add("hidden");
        searchModal.classList.add("hidden");
    }, 500);
});
//Search coin
searchButton.addEventListener("click", ()=>{
    coinSearcher();
});
searchInput.addEventListener("keyup", (e)=>{
    if (e.key === "Enter") coinSearcher();
});
// Used to store user inserted search value
let userValue;
// Fetch coin name
const coinSearcher = async ()=>{
    let searchValue = searchInput.value.toLowerCase();
    userValue = searchValue;
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${searchValue}`);
        const data = await response.json();
        if (data.coins.length === 0) {
            cantFindText.classList.remove("inv");
            return;
        } else {
            nameChecker(data);
            searchModalInner.classList.add("rotateDiv");
            searchBackButton.classList.remove("hidden");
            cantFindText.classList.add("inv");
            searchModalTitle.classList.add("fadeOut");
            searchInput.classList.add("fadeOut");
            buttonBox.classList.add("fadeOut");
            searchModalResult.classList.add("fadeDivIn");
            setTimeout(()=>{
                searchModalResult.classList.remove("hidden");
            }, 500);
        }
    } catch (err) {
        console.log(err);
    }
};
// Check for match and return right api-id
const nameChecker = (data)=>{
    for (let value of Object.values(data.coins))if (value.symbol.toLowerCase() === userValue || value.name.toLowerCase() === userValue) {
        dataFetcher(value.id);
        return;
    }
};
// Re-fetching coin and displaying result
const dataFetcher = async (id)=>{
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
        const data = await response.json();
        const response2 = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd&include_24hr_change=true`);
        const data2 = await response2.json();
        const resultPercentage = data2[id].usd_24h_change.toString().slice(0, 4);
        displayUI(data[0], resultPercentage);
    } catch (err) {
        console.log(err);
    }
};
const dateConverter = (month)=>{
    let slicedMonth = +month.slice(5, 7);
    return monthsArray[slicedMonth - 1];
};
const displayUI = (data, percentage)=>{
    let date = data.ath_date.slice(0, 10);
    console.log(data.circulating_supply / data.total_supply);
    console.log(data.circulating_supply);
    circulatingPercentage.textContent = data.circulating_supply / data.total_supply === Infinity ? "∞" : `${(data.circulating_supply / data.total_supply).toString().slice(2, 4)}%`;
    if (data.circulating_supply / data.total_supply === 1) circulatingPercentage.textContent = "∞";
    responseImage.src = data.image;
    SearchCoinTitle.textContent = data.name;
    fetchedRank.textContent = `#${data.market_cap_rank === null ? "N/A" : data.market_cap_rank}`;
    pricePercentageChange.textContent = `${percentage >= 0.01 ? "+" : ""}${percentage}% $${data.symbol.toUpperCase()} ${"$" + percentage >= 0.01 ? "+" : ""}${data.current_price.toString().length >= 8 ? "" : "(" + data.price_change_24h.toString().slice(0, 6) + " USD" + ")"}`;
    totalSupply.textContent = data.total_supply === null ? "∞" : data.total_supply.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    data.symbol.toUpperCase();
    markPrice.textContent = `$${data.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`;
    markPriceHigh.textContent = `$${data.current_price > 1 ? data.high_24h.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : data.high_24h.toFixed(5).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`;
    markPriceLow.textContent = `$${data.current_price > 1 ? data.low_24h.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : data.low_24h.toFixed(5).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`;
    circulatingCount.textContent = `${data.circulating_supply.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $${data.symbol.toUpperCase()}`;
    athDate.textContent = `${dateConverter(date)} ${data.ath_date.slice(8, 10)} ${data.ath_date.slice(0, 4)}`;
    if (+percentage >= 0.01) {
        fluctuate.textContent = "UP";
        fluctuate.style.backgroundColor = "rgb(79, 159, 88)";
        pricePercentageChange.style.color = "rgb(118, 219, 140)";
        upDown.classList.remove("hidden");
        upDown2.classList.add("hidden");
        box2.classList.add("bg-up");
    }
    if (+percentage < 0) {
        fluctuate.style.backgroundColor = "rgb(188, 67, 63)";
        fluctuate.textContent = "DOWN";
        pricePercentageChange.style.color = "red";
        upDown2.classList.remove("hidden");
        upDown.classList.add("hidden");
        box2.classList.add("bg-down");
    }
    if (data.circulating_supply === 0) {
        circulatingCount.textContent = "N/A";
        circulatingPercentage.textContent = "N/A";
    }
};

},{}]},["8BNRe","hwjhP"], "hwjhP", "parcelRequire379f")

//# sourceMappingURL=index.293883f5.js.map
