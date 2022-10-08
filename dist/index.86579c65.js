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
})({"ep8yO":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c9cac62a86579c65";
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

},{}],"clfFL":[function(require,module,exports) {
"use strict";
const tileContainer = document.querySelector(".tile-container");
let mainPage = `<div class="card cardano-div rotater" data-id="cardano">
<h1 class="card-title c-small cardano">Cardano</h1>
<p class="card-price cardano-price"></p>
<p class="card-percentage cardano-change"></p>
</div>
<div class="card doge-div" data-id="doge">
<h1 class="card-title">Doge</h1>
<p class="card-price doge-price"></p>
<p class="card-percentage doge-change"></p>
</div>
<div class="card polkadot-div" data-id="polkadot">
<h1 class="card-title c-small polkadot">Polkadot</h1>
<p class="card-price polkadot-price"></p>
<p class="card-percentage polkadot-change"></p>
</div>
<div class="card shiba-div" data-id="shiba">
<h1 class="card-title c-mid">Shiba</h1>
<p class="card-price shiba-price"></p>
<p class="card-percentage shiba-change"></p>
</div>
<div class="card card-fat bitcoin-div" data-id="bitcoin">
<h1 class="card-title-fat">Bitcoin</h1>
<p class="card-price-fat bitcoin-price"></p>
<p class="card-percentage-fat bitcoin-change"></p>
</div>
<div class="card polygon-div" data-id="polygon">
<h1 class="card-title c-small polygon">Polygon</h1>
<p class="card-price polygon-price"></p>
<p class="card-percentage polygon-change"></p>
</div>
<div class="card avax-div" data-id="avax">
<h1 class="card-title">AVAX</h1>
<p class="card-price avax-price"></p>
<p class="card-percentage avax-change"></p>
</div>
<div class="card trx-div" data-id="tron">
<h1 class="card-title">TRON</h1>
<p class="card-price trx-price"></p>
<p class="card-percentage trx-change"></p>
</div>
<div class="card leo-div" data-id="leo">
<h1 class="card-title c-small2">LEO</h1>
<p class="card-price leo-price"></p>
<p class="card-percentage leo-change"></p>
</div>
<div class="card uni-div" data-id="uniswap">
<h1 class="card-title c-small uniswap">Uniswap</h1>
<p class="card-price uni-price"></p>
<p class="card-percentage uni-change"></p>
</div>
<div class="card cosmos-div" data-id="cosmos">
<h1 class="card-title c-small cosmos">Cosmos</h1>
<p class="card-price cosmos-price"></p>
<p class="card-percentage cosmos-change"></p>
</div>
<div class="card card-wide eos-div" data-id="eos">
<h1 class="card-title-wide">EOS</h1>
<p class="card-price-wide eos-price"></p>
<p class="card-percentage-wide eos-change"></p>
</div>
<div class="card ethC-div" data-id="ethclassic">
<h1 class="card-title c-small2 ethclassic">ETH <br />Classic</h1>
<p class="card-price ethC-price"></p>
<p class="card-percentage ethC-change"></p>
</div>
<div class="card litecoin-div" data-id="litecoin">
<h1 class="card-title c-small">Litecoin</h1>
<p class="card-price litecoin-price"></p>
<p class="card-percentage litecoin-change"></p>
</div>
<div class="card okb-div" data-id="okb">
<h1 class="card-title">OKB</h1>
<p class="card-price okb-price"></p>
<p class="card-percentage okb-change"></p>
</div>
<div class="card chainlink-div" data-id="chainlink">
<h1 class="card-title c-small2 chainlink">Chainlink</h1>
<p class="card-price chainlink-price"></p>
<p class="card-percentage chainlink-change"></p>
</div>
<div class="card xlm-div" data-id="xlm">
<h1 class="card-title">XLM</h1>
<p class="card-price xlm-price"></p>
<p class="card-percentage xlm-change"></p>
</div>
<div class="card ftx-div" data-id="ftx">
<h1 class="card-title">FTX</h1>
<p class="card-price ftx-price"></p>
<p class="card-percentage ftx-change"></p>
</div>
<div class="card near-div" data-id="near">
<h1 class="card-title">NEAR</h1>
<p class="card-price near-price"></p>
<p class="card-percentage near-change"></p>
</div>
<div class="card cronos-div" data-id="cronos">
<h1 class="card-title c-small">Cronos</h1>
<p class="card-price cronos-price"></p>
<p class="card-percentage cronos-change"></p>
</div>
<div class="card algo-div" data-id="algorand">
<h1 class="card-title c-small2 algo">Algorand</h1>
<p class="card-price algo-price"></p>
<p class="card-percentage algo-change"></p>
</div>
<div class="card monero-div" data-id="monero">
<h1 class="card-title c-small">Monero</h1>
<p class="card-price monero-price"></p>
<p class="card-percentage monero-change"></p>
</div>
<div class="card bcash-div" data-id="bitcoincash">
<h1 class="card-title c-small2 bitcoincash">
  Bitcoin <br />
  Cash
</h1>
<p class="card-price bcash-price"></p>
<p class="card-percentage bcash-change"></p>
</div>
<div class="card vet-div" data-id="vechain">
<h1 class="card-title c-small">VeChain</h1>
<p class="card-price vet-price"></p>
<p class="card-percentage vet-change"></p>
</div>
<div class="card quant-div" data-id="quant">
<h1 class="card-title c-mid">Quant</h1>
<p class="card-price quant-price"></p>
<p class="card-percentage quant-change"></p>
</div>
<div class="card tezos-div" data-id="tezos">
<h1 class="card-title">Tezos</h1>
<p class="card-price tezos-price"></p>
<p class="card-percentage tezos-change"></p>
</div>
<div class="card axie-div" data-id="axie">
<h1 class="card-title">Axie</h1>
<p class="card-price axie-price"></p>
<p class="card-percentage axie-change"></p>
</div>
<div class="card theta-div" data-id="theta">
<h1 class="card-title">Theta</h1>
<p class="card-price theta-price"></p>
<p class="card-percentage theta-change"></p>
</div>
<div class="card elrond-div" data-id="elrond">
<h1 class="card-title c-mid">Elrond</h1>
<p class="card-price elrond-price"></p>
<p class="card-percentage elrond-change"></p>
</div>
<div class="card aave-div" data-id="aave">
<h1 class="card-title">Aave</h1>
<p class="card-price aave-price"></p>
<p class="card-percentage aave-change"></p>
</div>
<div class="card kucoin-div" data-id="kucoin">
<h1 class="card-title c-mid">KuCoin</h1>
<p class="card-price kucoin-price"></p>
<p class="card-percentage kucoin-change"></p>
</div>
<div class="card card-tall xrp-div" data-id="xrp">
<h1 class="card-title-tall xrp">XRP</h1>
<p class="card-price-tall xrp-price"></p>
<p class="card-percentage-tall xrp-change"></p>
</div>
<div class="card iota-div" data-id="iota">
<h1 class="card-title">IOTA</h1>
<p class="card-price iota-price"></p>
<p class="card-percentage iota-change"></p>
</div>
<div class="card card-fat eth-div" data-id="ethereum">
<h1 class="card-title-fat eth">Ethereum</h1>
<p class="card-price-fat eth-price"></p>
<p class="card-percentage-fat eth-change"></p>
</div>
<div class="card zcash-div" data-id="zcash">
<h1 class="card-title">Zcash</h1>
<p class="card-price zcash-price"></p>
<p class="card-percentage zcash-change"></p>
</div>
<div class="card huobi-div" data-id="huobi">
<h1 class="card-title">Huobi</h1>
<p class="card-price huobi-price"></p>
<p class="card-percentage huobi-change"></p>
</div>
<div class="card card-wide sol-div" data-id="solana">
<h1 class="card-title-wide">Solana</h1>
<p class="card-price-wide sol-price"></p>
<p class="card-percentage-wide sol-change"></p>
</div>
<div class="card c-last evmos-div" data-id="evmos">
<h1 class="card-title c-mid">Evmos</h1>
<p class="card-price evmos-price"></p>
<p class="card-percentage evmos-change"></p>
</div>
<div class="card c-last celsius-div" data-id="celsius">
<h1 class="card-title c-mid">Celsius</h1>
<p class="card-price celsius-price"></p>
<p class="card-percentage celsius-change"></p>
</div>
<div class="card cake-div" data-id="cake">
<h1 class="card-title">CAKE</h1>
<p class="card-price cake-price"></p>
<p class="card-percentage cake-change"></p>
</div>
<div class="card gate-div" data-id="gate">
<h1 class="card-title">Gate</h1>
<p class="card-price gate-price"></p>
<p class="card-percentage gate-change"></p>
</div>
<div class="card neo-div" data-id="neo">
<h1 class="card-title">NEO</h1>
<p class="card-price neo-price"></p>
<p class="card-percentage neo-change"></p>
</div>
<div class="card maker-div" data-id="maker">
<h1 class="card-title c-mid">Maker</h1>
<p class="card-price maker-price"></p>
<p class="card-percentage maker-change"></p>
</div>
<div class="card helium-div" data-id="helium">
<h1 class="card-title c-mid">Helium</h1>
<p class="card-price helium-price"></p>
<p class="card-percentage helium-change"></p>
</div>
<div class="card fantom-div" data-id="fantom">
<h1 class="card-title c-small">Fantom</h1>
<p class="card-price fantom-price"></p>
<p class="card-percentage fantom-change"></p>
</div>
<div class="card synt-div" data-id="synthetix">
<h1 class="card-title c-small2 synthetix">Synthetix</h1>
<p class="card-price synt-price"></p>
<p class="card-percentage synt-change"></p>
</div>
<div class="card card-fat bnb-div" data-id="bnb">
<h1 class="card-title-fat">BNB</h1>
<p class="card-price-fat bnb-price"></p>
<p class="card-percentage-fat bnb-change"></p>
</div>
<div class="card osmosis-div" data-id="osmosis">
<h1 class="card-title c-small osmosis">Osmosis</h1>
<p class="card-price osmosis-price"></p>
<p class="card-percentage osmosis-change"></p>
</div>
<div class="card nexo-div" data-id="nexo">
<h1 class="card-title">NEXO</h1>
<p class="card-price nexo-price"></p>
<p class="card-percentage nexo-change"></p>
</div>
<div class="card flow-div" data-id="flow">
<h1 class="card-title">Flow</h1>
<p class="card-price flow-price"></p>
<p class="card-percentage flow-change"></p>
</div>
<div class="card arw-div" data-id="arweave">
<h1 class="card-title c-small arweave">Arweave</h1>
<p class="card-price arw-price"></p>
<p class="card-percentage arw-change"></p>
</div>
<div class="card zil-div" data-id="zilliqa">
<h1 class="card-title c-mid">Zilliqa</h1>
<p class="card-price zil-price"></p>
<p class="card-percentage zil-change"></p>
</div>
<div class="card rune-div" data-id="rune">
<h1 class="card-title">RUNE</h1>
<p class="card-price rune-price"></p>
<p class="card-percentage rune-change"></p>
</div>
<div class="card dash-div" data-id="dash">
<h1 class="card-title">Dash</h1>
<p class="card-price dash-price"></p>
<p class="card-percentage dash-change"></p>
</div>
<div class="card c-last2 rocket-div" data-id="rocketpool">
<h1 class="card-title c-small2">Rocket Pool</h1>
<p class="card-price rocket-price"></p>
<p class="card-percentage rocket-change"></p>
</div>
<div class="card c-last2 stacks-div" data-id="stacks">
<h1 class="card-title c-mid">Stacks</h1>
<p class="card-price stacks-price"></p>
<p class="card-percentage stacks-change"></p>
</div>
<div class="card c-last waves-div" data-id="waves">
<h1 class="card-title c-mid">Waves</h1>
<p class="card-price waves-price"></p>
<p class="card-percentage waves-change"></p>
</div>
<div class="card c-last kava-div" data-id="kava">
<h1 class="card-title">Kava</h1>
<p class="card-price kava-price"></p>
<p class="card-percentage kava-change"></p>
</div>
<div class="card c-last xdc-div" data-id="xdc">
<h1 class="card-title">XDC</h1>
<p class="card-price xdc-price"></p>
<p class="card-percentage xdc-change"></p>
</div>
<div class="card c-last comp-div" data-id="compound">
<h1 class="card-title c-small3 compound">Compound</h1>
<p class="card-price comp-price"></p>
<p class="card-percentage comp-change"></p>
</div>`;
////////
//++++++
//++++++
//++++++
//++++++
//++++++
//++++++
//++++++
////////
let memePage = `<div class="card corgicoin-div" data-id="corgicoin">
<h1 class="card-title-fat m-tr corgicoin">CorgiCoin</h1>
<p class="card-price m-pr corgicoin-price"></p>
<p class="card-percentage corgicoin-change"></p>
</div>
<div class="card dogelonmars-div" data-id="dogelonmars">
<h1 class="card-title m-tr">Dogelon Mars</h1>
<p class="card-price m-pr dogelonmars-price"></p>
<p class="card-percentage dogelonmars-change"></p>
</div>
<div class="card flokiinu-div" data-id="flokiinu">
<h1 class="card-title c-small m-tr1 flokiinu">Floki Inu</h1>
<p class="card-price m-pr flokiinu-price"></p>
<p class="card-percentage flokiinu-change"></p>
</div>
<div class="card tamadoge-div" data-id="tamadoge">
<h1 class="card-title m-tr1 c-mid">Tamadoge</h1>
<p class="card-price m-pr tamadoge-price"></p>
<p class="card-percentage tamadoge-change"></p>
</div>
<div class="card card-fat babysamocoin-div" data-id="babysamocoin">
<h1 class="card-title-fat m-tr2 ">Baby Samo Coin</h1>
<p class="card-price-fat m-pr babysamocoin-price"></p>
<p class="card-percentage-fat babysamocoin-change"></p>
</div>
<div class="card leash-div" data-id="leash">
<h1 class="card-title c-small leash">Leash</h1>
<p class="card-price leash-price"></p>
<p class="card-percentage leash-change"></p>
</div>
<div class="card kishuinu-div" data-id="kishuinu">
<h1 class="card-title m-pr">Kishu Inu</h1>
<p class="card-price kishuinu-price m-prs"></p>
<p class="card-percentage kishuinu-change"></p>
</div>
<div class="card shibapredator-div" data-id="shibapredator">
<h1 class="card-title m-tr1">Shiba Predator</h1>
<p class="card-price m-pr shibapredator-price"></p>
<p class="card-percentage shibapredator-change"></p>
</div>
<div class="card catecoin-div" data-id="catecoin">
<h1 class="card-title c-small2">Catecoin</h1>
<p class="card-price m-pr catecoin-price"></p>
<p class="card-percentage catecoin-change"></p>
</div>
<div class="card hogefinance-div" data-id="hogefinance">
<h1 class="card-title c-small m-tr1 hogefinance">Hoge Finance</h1>
<p class="card-price m-pr hogefinance-price"></p>
<p class="card-percentage hogefinance-change"></p>
</div>
<div class="card cakemonster-div" data-id="cakemonster">
<h1 class="card-title c-small m-pr1 cakemonster">Cakemonster</h1>
<p class="card-price cakemonster-price"></p>
<p class="card-percentage cakemonster-change"></p>
</div>
<div class="card card-wide safemoon2-div" data-id="safemoon2">
<h1 class="m-tr3">Safemoon</h1>
<p class="card-price-wide safemoon2-price"></p>
<p class="card-percentage-wide safemoon2-change"></p>
</div>
<div class="card banano-div" data-id="banano">
<h1 class="card-title c-small2 banano">Banano</h1>
<p class="card-price banano-price"></p>
<p class="card-percentage banano-change"></p>
</div>
<div class="card thedogenft-div" data-id="thedogenft">
<h1 class="card-title c-small m-pr">The Doge NFT</h1>
<p class="card-price thedogenft-price"></p>
<p class="card-percentage thedogenft-change"></p>
</div>
<div class="card dogebonk-div" data-id="dogebonk">
<h1 class="card-title m-tr">Dogebonk</h1>
<p class="card-price m-pr dogebonk-price"></p>
<p class="card-percentage dogebonk-change"></p>
</div>
<div class="card polydoge-div" data-id="polydoge">
<h1 class="card-title c-small2 m-tr polydoge">Polydoge</h1>
<p class="card-price m-pr polydoge-price"></p>
<p class="card-percentage polydoge-change"></p>
</div>
<div class="card cumrocket-div" data-id="cumrocket">
<h1 class="card-title m-tr">Cumrocket</h1>
<p class="card-price m-pr cumrocket-price"></p>
<p class="card-percentage cumrocket-change"></p>
</div>
<div class="card dogegf-div" data-id="dogegf">
<h1 class="card-title">Dogegf</h1>
<p class="card-price m-pr dogegf-price"></p>
<p class="card-percentage dogegf-change"></p>
</div>
<div class="card woofy-div" data-id="woofy">
<h1 class="card-title">Woofy</h1>
<p class="card-price woofy-price"></p>
<p class="card-percentage woofy-change"></p>
</div>
<div class="card dogsofelon-div" data-id="dogsofelon">
<h1 class="card-title c-small m-tr">Dogs Of Elon</h1>
<p class="card-price dogsofelon-price"></p>
<p class="card-percentage dogsofelon-change"></p>
</div>
<div class="card feistydogenft-div" data-id="feistydogenft">
<h1 class="card-title c-small2 algo">Feisty Doge NFT</h1>
<p class="card-price m-pr feistydogenft-price"></p>
<p class="card-percentage feistydogenft-change"></p>
</div>
<div class="card kumainu-div" data-id="kuma-inu">
<h1 class="card-title c-small m-tr">Kuma Inu</h1>
<p class="card-price m-pr kumainu-price"></p>
<p class="card-percentage kumainu-change"></p>
</div>
<div class="card elondogetoken-div" data-id="elondogetoken">
<h1 class="card-title c-small2 elondogetoken m-tr">
Elon Doge Token
</h1>
<p class="card-price m-pr elondogetoken-price"></p>
<p class="card-percentage elondogetoken-change"></p>
</div>
<div class="card memeinu-div" data-id="memeinu">
<h1 class="card-title c-small m-tr">Meme Inu</h1>
<p class="card-price m-pr memeinu-price"></p>
<p class="card-percentage memeinu-change"></p>
</div>
<div class="card vitainu-div" data-id="vitainu">
<h1 class="card-title c-mid m-tr1">Vita Inu</h1>
<p class="card-price vitainu-price m-pr"></p>
<p class="card-percentage vitainu-change"></p>
</div>
<div class="card wallstreetbetsdapp-div" data-id="wallstreetbetsdapp">
<h1 class="card-title m-pr2">Wallstreet Bets dApp</h1>
<p class="card-price m-pr wallstreetbetsdapp-price"></p>
<p class="card-percentage wallstreetbetsdapp-change"></p>
</div>
<div class="card poodle-div" data-id="poodle">
<h1 class="card-title">Poodle</h1>
<p class="card-price m-pr poodle-price"></p>
<p class="card-percentage poodle-change"></p>
</div>
<div class="card puliinu-div" data-id="puliinu">
<h1 class="card-title">Puli Inu</h1>
<p class="card-price m-pr puliinu-price"></p>
<p class="card-percentage puliinu-change"></p>
</div>
<div class="card shihtzu-div" data-id="shihtzu">
<h1 class="card-title c-mid">Shihtzu</h1>
<p class="card-price m-pr shihtzu-price"></p>
<p class="card-percentage shihtzu-change"></p>
</div>
<div class="card oneup-div" data-id="oneup">
<h1 class="card-title">1 Up</h1>
<p class="card-price m-pr oneup-price"></p>
<p class="card-percentage oneup-change"></p>
</div>
<div class="card kawakami-div" data-id="kawakami">
<h1 class="card-title c-mid m-tr">Kawakami</h1>
<p class="card-price m-pr kawakami-price"></p>
<p class="card-percentage kawakami-change"></p>
</div>
<div class="card card-tall cattoken-div" data-id="cattoken">
<h1 class="card-title-tall cattoken m-tr2">Cat Token</h1>
<p class="card-price-tall m-pr cattoken-price"></p>
<p class="card-percentage-tall cattoken-change"></p>
</div>
<div class="card metadoge-div" data-id="metadoge">
<h1 class="card-title m-tr">Metadoge</h1>
<p class="card-price m-prs metadoge-price"></p>
<p class="card-percentage metadoge-change"></p>
</div>
<div class="card card-fat shiba-div" data-id="shiba">
<h1 class="card-title-fat c-mid">Shiba Inu</h1>
<p class="card-price-fat m-pr shiba-price"></p>
<p class="card-percentage-fat shiba-change"></p>
</div>
<div class="card duckereum-div" data-id="duckereum">
<h1 class="card-title m-tr">Duckereum</h1>
<p class="card-price m-pr duckereum-price"></p>
<p class="card-percentage duckereum-change"></p>
</div>
<div class="card shibavax-div" data-id="shibavax">
<h1 class="card-title m-tr1">Shibavax</h1>
<p class="card-price m-pr shibavax-price"></p>
<p class="card-percentage shibavax-change"></p>
</div>
<div class="card card-wide samoyedcoin-div" data-id="samoyedcoin">
<h1 class="card-title-wide samoy-title">Samoyedcoin</h1>
<p class="card-price-wide samoyedcoin-price"></p>
<p class="card-percentage-wide samoyedcoin-change"></p>
</div>
<div class="card c-last kittycoin-div" data-id="kittycoin">
<h1 class="card-title c-mid">Kittycoin</h1>
<p class="card-price kittycoin-price"></p>
<p class="card-percentage kittycoin-change"></p>
</div>
<div class="card c-last catbonk-div" data-id="catbonk">
<h1 class="card-title c-mid">Catbonk</h1>
<p class="card-price catbonk-price"></p>
<p class="card-percentage catbonk-change"></p>
</div>
<div class="card bobocash-div" data-id="bobocash">
<h1 class="card-title m-r">Bobo Cash</h1>
<p class="card-price m-pr bobocash-price"></p>
<p class="card-percentage bobocash-change"></p>
</div>
<div class="card updog-div" data-id="updog">
<h1 class="card-title">Updog</h1>
<p class="card-price m-pr updog-price"></p>
<p class="card-percentage updog-change"></p>
</div>
<div class="card solabrador-div" data-id="solabrador">
<h1 class="card-title m-tr">Solabrador</h1>
<p class="card-price m-pr solabrador-price"></p>
<p class="card-percentage solabrador-change"></p>
</div>
<div class="card kittycoinsolana-div" data-id="kittycoinsolana">
<h1 class="card-title c-mid m-tr">Kitty Coin Solana</h1>
<p class="card-price m-pr kittycoinsolana-price"></p>
<p class="card-percentage kittycoinsolana-change"></p>
</div>
<div class="card safemooninu-div" data-id="safemooninu">
<h1 class="card-title m-tr1">Safemoon Inu</h1>
<p class="card-price m-pr safemooninu-price"></p>
<p class="card-percentage safemooninu-change"></p>
</div>
<div class="card kangal-div" data-id="kangal">
<h1 class="card-title c-small2">Kangal</h1>
<p class="card-price m-pr kangal-price"></p>
<p class="card-percentage kangal-change"></p>
</div>
<div class="card harambe-div" data-id="harambe">
<h1 class="card-title c-small2 harambe">Harambe</h1>
<p class="card-price m-pr harambe-price"></p>
<p class="card-percentage harambe-change"></p>
</div>
<div class="card card-fat chihuahuatoken-div" data-id="chihuahuatoken">
<h1 class="card-title-fat m-tr1">Chihuahua Token</h1>
<p class="card-price-fat chihuahuatoken-price"></p>
<p class="card-percentage-fat chihuahuatoken-change"></p>
</div>
<div class="card jejudoge-div" data-id="jejudoge">
<h1 class="card-title c-small jejudoge m-tr1">Jeju Doge</h1>
<p class="card-price m-pr jejudoge-price"></p>
<p class="card-percentage jejudoge-change"></p>
</div>
<div class="card shibakenfinance-div" data-id="shibakenfinance">
<h1 class="card-title m-tr">Shibaken Finance</h1>
<p class="card-price m-prs shibakenfinance-price"></p>
<p class="card-percentage shibakenfinance-change"></p>
</div>
<div class="card shibapup-div" data-id="shibapup">
<h1 class="card-title m-tr">ShibaPup</h1>
<p class="card-price shibapup-price"></p>
<p class="card-percentage shibapup-change"></p>
</div>
<div class="card akitainu-div" data-id="akitainu">
<h1 class="card-title c-small akita-inueave m-tr">Akita Inu</h1>
<p class="card-price m-pr akitainu-price"></p>
<p class="card-percentage akitainu-change"></p>
</div>
<div class="card dogefi-div" data-id="dogefi">
<h1 class="card-title c-mid">DogeFi</h1>
<p class="card-price dogefi-price"></p>
<p class="card-percentage dogefi-change"></p>
</div>
<div class="card yooshibainu-div" data-id="yooshibainu">
<h1 class="card-title m-tr">Yooshiba Inu</h1>
<p class="card-price m-pr yooshibainu-price"></p>
<p class="card-percentage yooshibainu-change"></p>
</div>
<div class="card litedoge-div" data-id="litedoge">
<h1 class="card-title m-tr1">LiteDoge</h1>
<p class="card-price m-pr litedoge-price"></p>
<p class="card-percentage litedoge-change"></p>
</div>
<div class="card c-last2 cato-div" data-id="cato">
<h1 class="card-title c-small2">Cato</h1>
<p class="card-price m-pr cato-price"></p>
<p class="card-percentage cato-change"></p>
</div>
<div class="card c-last2 soldoge-div" data-id="soldoge">
<h1 class="card-title c-mid">SolDoge</h1>
<p class="card-price m-pr soldoge-price"></p>
<p class="card-percentage soldoge-change"></p>
</div>
<div class="card c-last richquack-div" data-id="richquack">
<h1 class="card-title c-mid">Rich Quack</h1>
<p class="card-price richquack-price"></p>
<p class="card-percentage richquack-change"></p>
</div>
<div class="card c-last dogedash-div" data-id="dogedash">
<h1 class="card-title">Doge Dash</h1>
<p class="card-price dogedash-price"></p>
<p class="card-percentage dogedash-change"></p>
</div>`;
tileContainer.innerHTML = memePage;

},{}]},["ep8yO","clfFL"], "clfFL", "parcelRequire379f")

//# sourceMappingURL=index.86579c65.js.map
