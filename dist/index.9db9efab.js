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
})({"iU07B":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "444c7f249db9efab";
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

},{}],"3X4BY":[function(require,module,exports) {
"use strict";
const watchListButton = document.querySelector(".watchlist");
const watchListClose = document.querySelector(".watch-close");
const watchListDiv = document.querySelector(".watchlist-div");
const dropShadow = document.querySelector(".dropshadow");
const viewWatchlist = document.querySelector(".view-watchlist");
const watchListBox = document.querySelector(".watchlist-box");
const viewAssets = document.querySelector(".view-assets");
const assetsBox = document.querySelector(".assets-box");
const addItemToWatchlist = document.querySelector(".add-to-watchlist");
const modalDropShadow = document.querySelector(".modal-dropshadow");
const closeSearchModal = document.querySelector(".inner-search-close");
const addItemDiv = document.querySelector(".add-item-div");
const searchInputButton = document.querySelector(".add-search-button");
const searchCoinInput = document.querySelector(".coin-search-input");
const noCoinFoundTxt = document.querySelector(".no-search-res");
const noCoinFoundTxt2 = document.querySelector(".no-search-res2");
const coinResultLogo = document.querySelector(".coin-result-logo");
const searchResultTitle = document.querySelector(".search-res-title");
const addToWatchList = document.querySelector(".item-result-lower");
const loadSpinner = document.querySelector(".lds-ripple");
const watchListItemsBox = document.querySelector(".watch-low");
const deleteFromWatchList = document.querySelectorAll(".delete-from-watch");
//User specific API url for watchlist
window.addEventListener("load", async ()=>{
    setTimeout(async ()=>{
        const getStorage = localStorage.getItem("loggedIn");
        const sendData = await fetch(`https://qdash-3fe95-default-rtdb.europe-west1.firebasedatabase.app/${getStorage}/apiLink.json`);
        const response = await sendData.json();
        console.log(response);
        if (response.length < 5) localStorage.setItem("userLink", "");
        else localStorage.setItem("userLink", response);
        await renderWatchList();
    }, 1000);
});
// Toggle to watchlist view
viewWatchlist.addEventListener("click", ()=>{
    viewWatchlist.classList.remove("fadeColorOut");
    viewWatchlist.classList.add("fadeColorIn");
    viewAssets.classList.add("fadeColorOut");
    watchListBox.classList.remove("hidden");
    watchListBox.classList.add("fadeBoxIn");
    assetsBox.classList.add("hidden");
    setTimeout(()=>{
        watchListBox.classList.remove("fadeBoxIn");
    }, 500);
});
// Toggle to assets view
viewAssets.addEventListener("click", ()=>{
    viewAssets.classList.remove("fadeColorOut");
    viewAssets.classList.add("fadeColorIn");
    viewWatchlist.classList.add("fadeColorOut");
    assetsBox.classList.remove("hidden");
    assetsBox.classList.add("fadeBoxIn");
    watchListBox.classList.add("hidden");
});
// Open watchlist modal
watchListButton.addEventListener("click", ()=>{
    const getStorage = localStorage.getItem("loggedIn");
    console.log(getStorage);
    if (!getStorage) window.location.href = "https://qdash.net/login.html";
    else {
        renderWatchList();
        watchListDiv.classList.remove("hidden");
        dropShadow.classList.remove("hidden");
    }
});
// Close watchlist modal
dropShadow.addEventListener("click", ()=>{
    watchListDiv.classList.add("hidden");
    dropShadow.classList.add("hidden");
});
watchListClose.addEventListener("click", ()=>{
    watchListDiv.classList.add("hidden");
    dropShadow.classList.add("hidden");
});
// Open search modal
addItemToWatchlist.addEventListener("click", ()=>{
    addItemDiv.classList.remove("hidden");
    addToWatchList.classList.add("hidden");
    modalDropShadow.classList.remove("hidden");
    searchCoinInput.focus();
});
// Close search modal
modalDropShadow.addEventListener("click", ()=>{
    addItemDiv.classList.add("hidden");
    modalDropShadow.classList.add("hidden");
});
closeSearchModal.addEventListener("click", ()=>{
    addItemDiv.classList.add("hidden");
    modalDropShadow.classList.add("hidden");
});
// Used to store user inserted search value
let userValue;
// Search for user input (1/3)
const coinSearcher = async ()=>{
    noCoinFoundTxt2.classList.add("hidden");
    if (searchCoinInput.value === "") {
        noCoinFoundTxt2.classList.remove("hidden");
        return;
    }
    loadSpinner.classList.remove("hidden");
    addToWatchList.classList.add("hidden");
    let searchValue = searchCoinInput.value.toLowerCase();
    userValue = searchValue;
    noCoinFoundTxt.classList.add("hidden");
    const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${searchValue}`);
    const data = await response.json();
    if (data.coins.length === 0) {
        noCoinFoundTxt.classList.remove("hidden");
        return;
    } else nameChecker(data);
};
// Check for match and return right api-id (2/3)
const nameChecker = (data)=>{
    for (let value of Object.values(data.coins))if (value.symbol.toLowerCase() === userValue || value.name.toLowerCase() === userValue) {
        dataFetcher(value.id);
        return;
    }
};
// Re-fetching coin and displaying result (3/3)
const dataFetcher = async (id)=>{
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
        const data = await response.json();
        renderSearchUI(data[0]);
    } catch (err) {
        console.log(err);
    }
};
//Display coin result modal
const renderSearchUI = (data1)=>{
    coinResultLogo.src = data1.image;
    searchResultTitle.textContent = data1.name;
    loadSpinner.classList.add("hidden");
    addToWatchList.classList.remove("hidden");
    searchCoinInput.value = "";
    apiID = data1.id + "%2C";
};
// Search coin
searchInputButton.addEventListener("click", coinSearcher);
// Search by enter key
searchCoinInput.addEventListener("keyup", (e)=>{
    if (e.key === "Enter") coinSearcher();
});
let apiID = "";
//Beginning of addition to watchlist
const fetchSearchResult = async ()=>{
    const userLinkLogged = localStorage.getItem("userLink");
    let currentAPI_ID = "";
    // Getting uID from storage for path
    const uID = localStorage.getItem("loggedIn");
    // Fetching current coins
    const response = await fetch(`https://qdash-3fe95-default-rtdb.europe-west1.firebasedatabase.app/${uID}/watchlist.json`);
    const data = await response.json();
    if (data === null) currentAPI_ID = apiID;
    if (data !== null) {
        if (userLinkLogged.includes(apiID)) {
            alert("Already on watchlist!");
            return;
        }
        currentAPI_ID = Object.values(data).join("") + apiID;
    }
    apiID = "";
    apiID = currentAPI_ID.replace(",", "");
    const sendData = await fetch(`https://qdash-3fe95-default-rtdb.europe-west1.firebasedatabase.app/${uID}/watchlist.json`, {
        method: "PUT",
        body: JSON.stringify(apiID),
        headers: {
            "Content-Type": "application/json"
        }
    });
    buildCurrentQuery();
};
const APILeft = `https://api.coingecko.com/api/v3/simple/price?ids=`;
const APIRight = `&vs_currencies=usd&include_24hr_change=true`;
let currentQuery = "";
const buildCurrentQuery = ()=>{
    currentQuery = "";
    currentQuery = APILeft + apiID + APIRight;
    console.log(currentQuery);
    updateCurrentWatchlist();
};
// Updating current watchlist new coin was added
const updateCurrentWatchlist = async ()=>{
    const response = await fetch(currentQuery);
    const data = await response.json();
    console.log(data);
    localStorage.removeItem("userLink");
    localStorage.setItem("userLink", currentQuery);
    querySaver();
    renderWatchList();
};
const renderWatchList = async ()=>{
    try {
        const userLinkLogged = localStorage.getItem("userLink");
        const response = await fetch(userLinkLogged);
        const data = await response.json();
        // if(Object.values(data)[i].usd_24h_change >= 0 ?) {
        // }
        watchListItemsBox.innerHTML = "";
        for(let i = 0; i < Object.values(data).length; i++)watchListItemsBox.innerHTML += `<div class="watch-item">
    <h1 class="watch-title">${(Object.keys(data)[i].charAt(0).toUpperCase() + Object.keys(data)[i].slice(1)).replace("-", " ")}</h1>
    <h2 class="watch-price">$${Object.values(data)[i].usd}</h2>
    <h2 class="watch-24h-change">24h: <span class="percentage-daily ${Object.values(data)[i].usd_24h_change >= 0 ? "" : "daily-down"}">${Object.values(data)[i].usd_24h_change >= 0 ? "+" : ""}${Object.values(data)[i].usd_24h_change.toFixed(2)}%</span></h2>
    <button class="delete-from-watch"><i class="fa-solid fa-circle-minus" data-id="${Object.keys(data)[i]}"></i></button>
  </div>`;
    } catch (err) {
        console.log(err);
        watchListItemsBox.innerHTML = `<h1 class="no-item-text">Add new items to watchlist</h1>`;
    }
};
addToWatchList.addEventListener("click", ()=>{
    fetchSearchResult();
    addToWatchList.disabled = true;
    setTimeout(()=>{
        addToWatchList.disabled = false;
    }, 1000);
});
const deleteWatchListItem = async (e)=>{
    if (!e.target.hasAttribute("data-id")) return;
    const getStorage = localStorage.getItem("loggedIn");
    const fetchIDs = await fetch(`https://qdash-3fe95-default-rtdb.europe-west1.firebasedatabase.app/${getStorage}/watchlist.json`);
    const fetchResponse = await fetchIDs.json();
    let currentValue = Object.values(fetchResponse).toString().replace(/,/g, "");
    let newValue = currentValue.replace(e.target.dataset.id + "%2C", "");
    const sendData = await fetch(`https://qdash-3fe95-default-rtdb.europe-west1.firebasedatabase.app/${getStorage}/watchlist.json`, {
        method: "PUT",
        body: JSON.stringify(newValue),
        headers: {
            "Content-Type": "application/json"
        }
    });
    localStorage.removeItem("userLink");
    localStorage.setItem("userLink", APILeft + newValue + APIRight);
    const getStorageItem = localStorage.getItem("userLink");
    if (getStorageItem.length === 93) localStorage.setItem("userLink", "");
    querySaver();
    await renderWatchList();
};
watchListItemsBox.addEventListener("click", (e)=>{
    deleteWatchListItem(e);
});
const querySaver = async ()=>{
    const getStorage = localStorage.getItem("loggedIn");
    const apiLink = localStorage.getItem("userLink");
    const checked = apiLink.length === 93 ? "" : apiLink;
    const sendData = await fetch(`https://qdash-3fe95-default-rtdb.europe-west1.firebasedatabase.app/${getStorage}/apiLink.json`, {
        method: "PUT",
        body: JSON.stringify(checked),
        headers: {
            "Content-Type": "application/json"
        }
    });
};

},{}]},["iU07B","3X4BY"], "3X4BY", "parcelRequire379f")

//# sourceMappingURL=index.9db9efab.js.map
