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
})({"cjnog":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0c8103e172af17b3";
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

},{}],"jWrRo":[function(require,module,exports) {
"use strict";
const COINGECKOAPI = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ccardano%2Cdogecoin%2Cpolkadot%2Cshiba-inu%2Cmatic-network%2Cavalanche-2%2Ctron%2Cleo-token%2Cuniswap%2Ccosmos%2Ceos%2Cflow%2Clitecoin%2Cokb%2Cchainlink%2Cstellar%2Cftx-token%2Cnear%2Ccrypto-com-chain%2Calgorand%2Cmonero%2Cbitcoin-cash%2Cvechain%2Cquant-network%2Ctezos%2Caxie-infinity%2Ctheta-token%2Celrond-erd-2%2Caave%2Ckucoin-shares%2Cripple%2Ciota%2Cethereum%2Czcash%2Chuobi-token%2Csolana%2Cevmos%2Ccelsius-degree-token%2Cpancakeswap-token%2Cgatechain-token%2Cneo%2Cmaker%2Chelium%2Cfantom%2Chavven%2Cbinancecoin%2Cosmosis%2Cnexo%2Ccompound-ether%2Carweave%2Czilliqa%2Cthorchain%2Cdash%2Crocket-pool%2Cblockstack%2Cwaves%2Ckava%2Cxdce-crowd-sale%2Ccompound-governance-token%2Cethereum-classic&vs_currencies=usd&include_24hr_change=true`;
const bitcoinPrice = document.querySelector(".bitcoin-price");
const bitcoinChange = document.querySelector(".bitcoin-change");
const bitcoinDiv = document.querySelector(".bitcoin-div");
const cardanoPrice = document.querySelector(".cardano-price");
const cardanoChange = document.querySelector(".cardano-change");
const cardanoDiv = document.querySelector(".cardano-div");
const dogePrice = document.querySelector(".doge-price");
const dogeChange = document.querySelector(".doge-change");
const dogeDiv = document.querySelector(".doge-div");
const polkadotPrice = document.querySelector(".polkadot-price");
const polkadotChange = document.querySelector(".polkadot-change");
const polkadotDiv = document.querySelector(".polkadot-div");
const shibaPrice = document.querySelector(".shiba-price");
const shibaChange = document.querySelector(".shiba-change");
const shibaDiv = document.querySelector(".shiba-div");
const polygonPrice = document.querySelector(".polygon-price");
const polygonChange = document.querySelector(".polygon-change");
const polygonDiv = document.querySelector(".polygon-div");
const avaxPrice = document.querySelector(".avax-price");
const avaxChange = document.querySelector(".avax-change");
const avaxDiv = document.querySelector(".avax-div");
const trxPrice = document.querySelector(".trx-price");
const trxChange = document.querySelector(".trx-change");
const trxDiv = document.querySelector(".trx-div");
const leoPrice = document.querySelector(".leo-price");
const leoChange = document.querySelector(".leo-change");
const leoDiv = document.querySelector(".leo-div");
const uniPrice = document.querySelector(".uni-price");
const uniChange = document.querySelector(".uni-change");
const uniDiv = document.querySelector(".uni-div");
const cosmosPrice = document.querySelector(".cosmos-price");
const cosmosChange = document.querySelector(".cosmos-change");
const cosmosDiv = document.querySelector(".cosmos-div");
const eosPrice = document.querySelector(".eos-price");
const eosChange = document.querySelector(".eos-change");
const eosDiv = document.querySelector(".eos-div");
const ethCPrice = document.querySelector(".ethC-price");
const ethCChange = document.querySelector(".ethC-change");
const ethCDiv = document.querySelector(".ethC-div");
const litecoinPrice = document.querySelector(".litecoin-price");
const litecoinChange = document.querySelector(".litecoin-change");
const litecoinDiv = document.querySelector(".litecoin-div");
const okbPrice = document.querySelector(".okb-price");
const okbChange = document.querySelector(".okb-change");
const okbDiv = document.querySelector(".okb-div");
const chainlinkPrice = document.querySelector(".chainlink-price");
const chainlinkChange = document.querySelector(".chainlink-change");
const chainlinkDiv = document.querySelector(".chainlink-div");
const xlmPrice = document.querySelector(".xlm-price");
const xlmChange = document.querySelector(".xlm-change");
const xlmDiv = document.querySelector(".xlm-div");
const ftxPrice = document.querySelector(".ftx-price");
const ftxChange = document.querySelector(".ftx-change");
const ftxDiv = document.querySelector(".ftx-div");
const nearPrice = document.querySelector(".near-price");
const nearChange = document.querySelector(".near-change");
const nearDiv = document.querySelector(".near-div");
const cronosPrice = document.querySelector(".cronos-price");
const cronosChange = document.querySelector(".cronos-change");
const cronosDiv = document.querySelector(".cronos-div");
const algoPrice = document.querySelector(".algo-price");
const algoChange = document.querySelector(".algo-change");
const algoDiv = document.querySelector(".algo-div");
const moneroPrice = document.querySelector(".monero-price");
const moneroChange = document.querySelector(".monero-change");
const moneroDiv = document.querySelector(".monero-div");
const bcashPrice = document.querySelector(".bcash-price");
const bcashChange = document.querySelector(".bcash-change");
const bcashDiv = document.querySelector(".bcash-div");
const vetPrice = document.querySelector(".vet-price");
const vetChange = document.querySelector(".vet-change");
const vetDiv = document.querySelector(".vet-div");
const quantPrice = document.querySelector(".quant-price");
const quantChange = document.querySelector(".quant-change");
const quantDiv = document.querySelector(".quant-div");
const tezosPrice = document.querySelector(".tezos-price");
const tezosChange = document.querySelector(".tezos-change");
const tezosDiv = document.querySelector(".tezos-div");
const axiePrice = document.querySelector(".axie-price");
const axieChange = document.querySelector(".axie-change");
const axieDiv = document.querySelector(".axie-div");
const thetaPrice = document.querySelector(".theta-price");
const thetaChange = document.querySelector(".theta-change");
const thetaDiv = document.querySelector(".theta-div");
const elrondPrice = document.querySelector(".elrond-price");
const elrondChange = document.querySelector(".elrond-change");
const elrondDiv = document.querySelector(".elrond-div");
const aavePrice = document.querySelector(".aave-price");
const aaveChange = document.querySelector(".aave-change");
const aaveDiv = document.querySelector(".aave-div");
const kucoinPrice = document.querySelector(".kucoin-price");
const kucoinChange = document.querySelector(".kucoin-change");
const kucoinDiv = document.querySelector(".kucoin-div");
const xrpPrice = document.querySelector(".xrp-price");
const xrpChange = document.querySelector(".xrp-change");
const xrpDiv = document.querySelector(".xrp-div");
const iotaPrice = document.querySelector(".iota-price");
const iotaChange = document.querySelector(".iota-change");
const iotaDiv = document.querySelector(".iota-div");
const ethPrice = document.querySelector(".eth-price");
const ethChange = document.querySelector(".eth-change");
const ethDiv = document.querySelector(".eth-div");
const zcashPrice = document.querySelector(".zcash-price");
const zcashChange = document.querySelector(".zcash-change");
const zcashDiv = document.querySelector(".zcash-div");
const huobiPrice = document.querySelector(".huobi-price");
const huobiChange = document.querySelector(".huobi-change");
const huobiDiv = document.querySelector(".huobi-div");
const solPrice = document.querySelector(".sol-price");
const solChange = document.querySelector(".sol-change");
const solDiv = document.querySelector(".sol-div");
const evmosPrice = document.querySelector(".evmos-price");
const evmosChange = document.querySelector(".evmos-change");
const evmosDiv = document.querySelector(".evmos-div");
const celsiusPrice = document.querySelector(".celsius-price");
const celsiusChange = document.querySelector(".celsius-change");
const celsiusDiv = document.querySelector(".celsius-div");
const cakePrice = document.querySelector(".cake-price");
const cakeChange = document.querySelector(".cake-change");
const cakeDiv = document.querySelector(".cake-div");
const gatePrice = document.querySelector(".gate-price");
const gateChange = document.querySelector(".gate-change");
const gateDiv = document.querySelector(".gate-div");
const neoPrice = document.querySelector(".neo-price");
const neoChange = document.querySelector(".neo-change");
const neoDiv = document.querySelector(".neo-div");
const makerPrice = document.querySelector(".maker-price");
const makerChange = document.querySelector(".maker-change");
const makerDiv = document.querySelector(".maker-div");
const heliumPrice = document.querySelector(".helium-price");
const heliumChange = document.querySelector(".helium-change");
const heliumDiv = document.querySelector(".helium-div");
const fantomPrice = document.querySelector(".fantom-price");
const fantomChange = document.querySelector(".fantom-change");
const fantomDiv = document.querySelector(".fantom-div");
const syntPrice = document.querySelector(".synt-price");
const syntChange = document.querySelector(".synt-change");
const syntDiv = document.querySelector(".synt-div");
const bnbPrice = document.querySelector(".bnb-price");
const bnbChange = document.querySelector(".bnb-change");
const bnbDiv = document.querySelector(".bnb-div");
const osmosisPrice = document.querySelector(".osmosis-price");
const osmosisChange = document.querySelector(".osmosis-change");
const osmosisDiv = document.querySelector(".osmosis-div");
const nexoPrice = document.querySelector(".nexo-price");
const nexoChange = document.querySelector(".nexo-change");
const nexoDiv = document.querySelector(".nexo-div");
const flowPrice = document.querySelector(".flow-price");
const flowChange = document.querySelector(".flow-change");
const flowDiv = document.querySelector(".flow-div");
const arwPrice = document.querySelector(".arw-price");
const arwChange = document.querySelector(".arw-change");
const arwDiv = document.querySelector(".arw-div");
const zilPrice = document.querySelector(".zil-price");
const zilChange = document.querySelector(".zil-change");
const zilDiv = document.querySelector(".zil-div");
const runePrice = document.querySelector(".rune-price");
const runeChange = document.querySelector(".rune-change");
const runeDiv = document.querySelector(".rune-div");
const dashPrice = document.querySelector(".dash-price");
const dashChange = document.querySelector(".dash-change");
const dashDiv = document.querySelector(".dash-div");
const rocketPrice = document.querySelector(".rocket-price");
const rocketChange = document.querySelector(".rocket-change");
const rocketDiv = document.querySelector(".rocket-div");
const stacksPrice = document.querySelector(".stacks-price");
const stacksChange = document.querySelector(".stacks-change");
const stacksDiv = document.querySelector(".stacks-div");
const wavesPrice = document.querySelector(".waves-price");
const wavesChange = document.querySelector(".waves-change");
const wavesDiv = document.querySelector(".waves-div");
const kavaPrice = document.querySelector(".kava-price");
const kavaChange = document.querySelector(".kava-change");
const kavaDiv = document.querySelector(".kava-div");
const xdcPrice = document.querySelector(".xdc-price");
const xdcChange = document.querySelector(".xdc-change");
const xdcDiv = document.querySelector(".xdc-div");
const compPrice = document.querySelector(".comp-price");
const compChange = document.querySelector(".comp-change");
const compDiv = document.querySelector(".comp-div");
const refreshArrow = document.querySelector(".refresh-button");
const allCards = document.querySelectorAll(".card");
// Initial render
window.addEventListener("load", async ()=>{
    updateUI();
});
setInterval(()=>{
    updateUI();
    allCards.forEach((card)=>{
        card.classList.add("rotater");
        setTimeout(()=>{
            card.classList.remove("rotater");
        }, 1100);
    });
}, 180000);
// Refresh/Refetch
refreshArrow.addEventListener("click", ()=>{
    refreshArrow.disabled = true;
    updateUI();
    refreshArrow.classList.add("refreshRotate");
    allCards.forEach((card)=>{
        card.classList.add("rotater");
        setTimeout(()=>{
            refreshArrow.classList.remove("refreshRotate");
            card.classList.remove("rotater");
            refreshArrow.disabled = false;
        }, 1100);
    });
});
let responseObject = {};
allCards.forEach((card)=>{
    card.classList.add("rotater");
    setTimeout(()=>{
        card.classList.remove("rotater");
    }, 1100);
});
const updateUI = async ()=>{
    await dataFetcher();
    uiUpdater("bitcoin", bitcoinDiv, bitcoinChange, bitcoinPrice, 0);
    uiUpdater("cardano", cardanoDiv, cardanoChange, cardanoPrice, 2);
    uiUpdater("dogecoin", dogeDiv, dogeChange, dogePrice, 4);
    uiUpdater("polkadot", polkadotDiv, polkadotChange, polkadotPrice, 2);
    uiUpdater("shiba-inu", shibaDiv, shibaChange, shibaPrice, 7);
    uiUpdater("matic-network", polygonDiv, polygonChange, polygonPrice, 2);
    uiUpdater("avalanche-2", avaxDiv, avaxChange, avaxPrice, 2);
    uiUpdater("tron", trxDiv, trxChange, trxPrice, 2);
    uiUpdater("leo-token", leoDiv, leoChange, leoPrice, 2);
    uiUpdater("uniswap", uniDiv, uniChange, uniPrice, 2);
    uiUpdater("cosmos", cosmosDiv, cosmosChange, cosmosPrice, 2);
    uiUpdater("eos", eosDiv, eosChange, eosPrice, 2);
    uiUpdater("ethereum-classic", ethCDiv, ethCChange, ethCPrice, 2);
    uiUpdater("flow", flowDiv, flowChange, flowPrice, 2);
    uiUpdater("litecoin", litecoinDiv, litecoinChange, litecoinPrice, 2);
    uiUpdater("okb", okbDiv, okbChange, okbPrice, 2);
    uiUpdater("chainlink", chainlinkDiv, chainlinkChange, chainlinkPrice, 2);
    uiUpdater("stellar", xlmDiv, xlmChange, xlmPrice, 2);
    uiUpdater("ftx-token", ftxDiv, ftxChange, ftxPrice, 2);
    uiUpdater("near", nearDiv, nearChange, nearPrice, 2);
    uiUpdater("crypto-com-chain", cronosDiv, cronosChange, cronosPrice, 2);
    uiUpdater("algorand", algoDiv, algoChange, algoPrice, 2);
    uiUpdater("monero", moneroDiv, moneroChange, moneroPrice, 1);
    uiUpdater("bitcoin-cash", bcashDiv, bcashChange, bcashPrice, 1);
    uiUpdater("vechain", vetDiv, vetChange, vetPrice, 4);
    uiUpdater("quant-network", quantDiv, quantChange, quantPrice, 2);
    uiUpdater("tezos", tezosDiv, tezosChange, tezosPrice, 2);
    uiUpdater("axie-infinity", axieDiv, axieChange, axiePrice, 2);
    uiUpdater("theta-token", thetaDiv, thetaChange, thetaPrice, 2);
    uiUpdater("elrond-erd-2", elrondDiv, elrondChange, elrondPrice, 2);
    uiUpdater("aave", aaveDiv, aaveChange, aavePrice, 2);
    uiUpdater("kucoin-shares", kucoinDiv, kucoinChange, kucoinPrice, 2);
    uiUpdater("ripple", xrpDiv, xrpChange, xrpPrice, 2);
    uiUpdater("iota", iotaDiv, iotaChange, iotaPrice, 2);
    uiUpdater("ethereum", ethDiv, ethChange, ethPrice, 0);
    uiUpdater("zcash", zcashDiv, zcashChange, zcashPrice, 2);
    uiUpdater("huobi-token", huobiDiv, huobiChange, huobiPrice, 2);
    uiUpdater("solana", solDiv, solChange, solPrice, 2);
    uiUpdater("evmos", evmosDiv, evmosChange, evmosPrice, 2);
    uiUpdater("celsius-degree-token", celsiusDiv, celsiusChange, celsiusPrice, 2);
    uiUpdater("pancakeswap-token", cakeDiv, cakeChange, cakePrice, 2);
    uiUpdater("gatechain-token", gateDiv, gateChange, gatePrice, 2);
    uiUpdater("neo", neoDiv, neoChange, neoPrice, 2);
    uiUpdater("maker", makerDiv, makerChange, makerPrice, 0);
    uiUpdater("helium", heliumDiv, heliumChange, heliumPrice, 2);
    uiUpdater("fantom", fantomDiv, fantomChange, fantomPrice, 2);
    uiUpdater("havven", syntDiv, syntChange, syntPrice, 2);
    uiUpdater("binancecoin", bnbDiv, bnbChange, bnbPrice, 2);
    uiUpdater("osmosis", osmosisDiv, osmosisChange, osmosisPrice, 2);
    uiUpdater("nexo", nexoDiv, nexoChange, nexoPrice, 2);
    uiUpdater("arweave", arwDiv, arwChange, arwPrice, 2);
    uiUpdater("zilliqa", zilDiv, zilChange, zilPrice, 4);
    uiUpdater("thorchain", runeDiv, runeChange, runePrice, 2);
    uiUpdater("dash", dashDiv, dashChange, dashPrice, 2);
    uiUpdater("rocket-pool", rocketDiv, rocketChange, rocketPrice, 2);
    uiUpdater("blockstack", stacksDiv, stacksChange, stacksPrice, 3);
    uiUpdater("waves", wavesDiv, wavesChange, wavesPrice, 2);
    uiUpdater("kava", kavaDiv, kavaChange, kavaPrice, 2);
    uiUpdater("xdce-crowd-sale", xdcDiv, xdcChange, xdcPrice, 4);
    uiUpdater("compound-governance-token", compDiv, compChange, compPrice, 2);
};
const classChecker = (coinDiv, change)=>{
    if (change >= -2.5 && change <= 2.5) coinDiv.classList.add("neutral");
    if (change >= 0 && change <= 7.5) coinDiv.classList.add("u1");
    if (change >= 7.5) coinDiv.classList.add("u2");
    if (change < -2.5) coinDiv.classList.add("d1");
    if (change < -7.5) coinDiv.classList.add("d2");
};
const uiUpdater = (coinName, changeDiv, changeTxt, priceTxt, fixedParam)=>{
    const price = responseObject[coinName].usd.toFixed(fixedParam);
    const change = responseObject[coinName].usd_24h_change.toFixed(2);
    priceTxt.textContent = "";
    changeTxt.textContent = "";
    priceTxt.textContent = `$${price}`;
    changeTxt.textContent = `${change}%`;
    classChecker(changeDiv, change);
};
const dataFetcher = async ()=>{
    const response = await fetch(COINGECKOAPI);
    const data = await response.json();
    responseObject = data;
};

},{}]},["cjnog","jWrRo"], "jWrRo", "parcelRequire379f")

//# sourceMappingURL=index.72af17b3.js.map
