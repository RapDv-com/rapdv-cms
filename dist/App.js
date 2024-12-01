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
})({"4vsWu":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "957da39d6b7013ff";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"786KC":[function(require,module,exports) {
"use strict";
module.exports = require("96622d495519d4e");

},{"96622d495519d4e":"hdge7"}],"hdge7":[function(require,module,exports) {
/** @license React v0.9.0
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    "use strict";
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    var REACT_FRAGMENT_TYPE = 0xeacb;
    var REACT_STRICT_MODE_TYPE = 0xeacc;
    var REACT_PROFILER_TYPE = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    var REACT_SUSPENSE_TYPE = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_SCOPE_TYPE = 0xead7;
    var REACT_OPAQUE_ID_TYPE = 0xeae0;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_OFFSCREEN_TYPE = 0xeae2;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
    if (typeof Symbol === "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element");
        REACT_PORTAL_TYPE = symbolFor("react.portal");
        REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
        REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
        REACT_PROFILER_TYPE = symbolFor("react.profiler");
        REACT_PROVIDER_TYPE = symbolFor("react.provider");
        REACT_CONTEXT_TYPE = symbolFor("react.context");
        REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
        REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
        REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
        REACT_MEMO_TYPE = symbolFor("react.memo");
        REACT_LAZY_TYPE = symbolFor("react.lazy");
        REACT_BLOCK_TYPE = symbolFor("react.block");
        REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
        REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
        REACT_SCOPE_TYPE = symbolFor("react.scope");
        REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
        REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
        REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
    }
    var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = typeof WeakMap === "function" ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
        if (signature.fullKey !== null) return signature.fullKey;
        var fullKey = signature.ownKey;
        var hooks;
        try {
            hooks = signature.getCustomHooks();
        } catch (err) {
            // This can happen in an edge case, e.g. if expression like Foo.useSomething
            // depends on Foo which is lazily initialized during rendering.
            // In that case just assume we'll have to remount.
            signature.forceReset = true;
            signature.fullKey = fullKey;
            return fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if (typeof hook !== "function") {
                // Something's wrong. Assume we need to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            var nestedHookSignature = allSignaturesByType.get(hook);
            if (nestedHookSignature === undefined) continue;
            var nestedHookKey = computeFullKey(nestedHookSignature);
            if (nestedHookSignature.forceReset) signature.forceReset = true;
            fullKey += "\n---\n" + nestedHookKey;
        }
        signature.fullKey = fullKey;
        return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
        var prevSignature = allSignaturesByType.get(prevType);
        var nextSignature = allSignaturesByType.get(nextType);
        if (prevSignature === undefined && nextSignature === undefined) return true;
        if (prevSignature === undefined || nextSignature === undefined) return false;
        if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) return false;
        if (nextSignature.forceReset) return false;
        return true;
    }
    function isReactClass(type) {
        return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
        if (isReactClass(prevType) || isReactClass(nextType)) return false;
        if (haveEqualSignatures(prevType, nextType)) return true;
        return false;
    }
    function resolveFamily(type) {
        // Only check updated types to keep lookups fast.
        return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function performReactRefresh() {
        if (pendingUpdates.length === 0) return null;
        if (isPerformingRefresh) return null;
        isPerformingRefresh = true;
        try {
            var staleFamilies = new Set();
            var updatedFamilies = new Set();
            var updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0], nextType = _ref[1];
                // Now that we got a real edit, we can create associations
                // that will be read by the React reconciler.
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(nextType, family);
                family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                if (canPreserveStateBetween(prevType, nextType)) updatedFamilies.add(family);
                else staleFamilies.add(family);
            }); // TODO: rename these fields to something more meaningful.
            var update = {
                updatedFamilies: updatedFamilies,
                // Families that will re-render preserving state
                staleFamilies: staleFamilies // Families that will be remounted
            };
            helpersByRendererID.forEach(function(helpers) {
                // Even if there are no roots, set the handler on first update.
                // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = false;
            var firstError = null; // We snapshot maps and sets that are mutated during commits.
            // If we don't do this, there is a risk they will be mutated while
            // we iterate over them. For example, trying to recover a failed root
            // may cause another root to be added to the failed list -- an infinite loop.
            var failedRootsSnapshot = cloneSet(failedRoots);
            var mountedRootsSnapshot = cloneSet(mountedRoots);
            var helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                failedRoots.has(root);
                if (rootElements === null) return;
                if (!rootElements.has(root)) return;
                var element = rootElements.get(root);
                try {
                    helpers.scheduleRoot(root, element);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = false;
        }
    }
    function register(type, id) {
        if (type === null) return;
        if (typeof type !== "function" && typeof type !== "object") return;
         // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) return;
         // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
            family = {
                current: type
            };
            allFamiliesByID.set(id, family);
        } else pendingUpdates.push([
            family,
            type
        ]);
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
        if (typeof type === "object" && type !== null) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                register(type.render, id + "$render");
                break;
            case REACT_MEMO_TYPE:
                register(type.type, id + "$type");
                break;
        }
    }
    function setSignature(type, key) {
        var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
        allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) computeFullKey(signature);
    }
    function getFamilyByID(id) {
        return allFamiliesByID.get(id);
    }
    function getFamilyByType(type) {
        return allFamiliesByType.get(type);
    }
    function findAffectedHostInstances(families) {
        var affectedInstances = new Set();
        mountedRoots.forEach(function(root) {
            var helpers = helpersByRoot.get(root);
            if (helpers === undefined) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
            var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
            instancesForRoot.forEach(function(inst) {
                affectedInstances.add(inst);
            });
        });
        return affectedInstances;
    }
    function injectIntoGlobalHook(globalObject) {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
            // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
            // Note that in this case it's important that renderer code runs *after* this method call.
            // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: true,
                inject: function(injected) {
                    return nextID++;
                },
                onScheduleFiberRoot: function(id, root, children) {},
                onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {},
                onCommitFiberUnmount: function() {}
            };
        } // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function(injected) {
            var id = oldInject.apply(this, arguments);
            if (typeof injected.scheduleRefresh === "function" && typeof injected.setRefreshHandler === "function") // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
            return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function(injected, id) {
            if (typeof injected.scheduleRefresh === "function" && typeof injected.setRefreshHandler === "function") // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
        }); // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {};
        hook.onScheduleFiberRoot = function(id, root, children) {
            if (!isPerformingRefresh) {
                // If it was intentionally scheduled, don't attempt to restore.
                // This includes intentionally scheduled unmounts.
                failedRoots.delete(root);
                if (rootElements !== null) rootElements.set(root, children);
            }
            return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
            var helpers = helpersByRendererID.get(id);
            if (helpers === undefined) return;
            helpersByRoot.set(root, helpers);
            var current = root.current;
            var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
            // This logic is copy-pasted from similar logic in the DevTools backend.
            // If this breaks with some refactoring, you'll want to update DevTools too.
            if (alternate !== null) {
                var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
                var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                if (!wasMounted && isMounted) {
                    // Mount a new root.
                    mountedRoots.add(root);
                    failedRoots.delete(root);
                } else if (wasMounted && isMounted) ;
                else if (wasMounted && !isMounted) {
                    // Unmount an existing root.
                    mountedRoots.delete(root);
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                    else helpersByRoot.delete(root);
                } else if (!wasMounted && !isMounted) {
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                }
            } else // Mount a new root.
            mountedRoots.add(root);
            return oldOnCommitFiberRoot.apply(this, arguments);
        };
    }
    function hasUnrecoverableErrors() {
        // TODO: delete this after removing dependency in RN.
        return false;
    } // Exposed for testing.
    function _getMountedRootCount() {
        return mountedRoots.size;
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Second call triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* First call specifies the signature: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
        // We'll fill in the signature in two steps.
        // First, we'll know the signature itself. This happens outside the component.
        // Then, we'll know the references to custom Hooks. This happens inside the component.
        // After that, the returned function will be a fast path no-op.
        var status = "needsSignature";
        var savedType;
        var hasCustomHooks;
        return function(type, key, forceReset, getCustomHooks) {
            switch(status){
                case "needsSignature":
                    if (type !== undefined) {
                        // If we received an argument, this is the initial registration call.
                        savedType = type;
                        hasCustomHooks = typeof getCustomHooks === "function";
                        setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.
                        status = "needsCustomHooks";
                    }
                    break;
                case "needsCustomHooks":
                    if (hasCustomHooks) collectCustomHooksForSignature(savedType);
                    status = "resolved";
                    break;
            }
            return type;
        };
    }
    function isLikelyComponentType(type) {
        switch(typeof type){
            case "function":
                // First, deal with classes.
                if (type.prototype != null) {
                    if (type.prototype.isReactComponent) // React class.
                    return true;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (ownNames.length > 1 || ownNames[0] !== "constructor") // This looks like a class.
                    return false;
                     // eslint-disable-next-line no-proto
                    if (type.prototype.__proto__ !== Object.prototype) // It has a superclass.
                    return false;
                     // Pass through.
                // This looks like a regular function with empty prototype.
                } // For plain functions and arrows, use name as a heuristic.
                var name = type.name || type.displayName;
                return typeof name === "string" && /^[A-Z]/.test(name);
            case "object":
                if (type != null) switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        // Definitely React components.
                        return true;
                    default:
                        return false;
                }
                return false;
            default:
                return false;
        }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"1dldy":[function(require,module,exports) {
var process = require("d1546958eb39fdcf");
!function(e, t) {
    module.exports = t();
}(window, function() {
    return function(e) {
        var t = {};
        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            });
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for(var o in e)r.d(n, o, (function(t) {
                return e[t];
            }).bind(null, o));
            return n;
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return r.d(t, "a", t), t;
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, r.p = "", r(r.s = 15);
    }([
        function(e, t, r) {
            e.exports = r(8);
        },
        function(e, t) {
            t.getArg = function(e, t, r) {
                if (t in e) return e[t];
                if (3 === arguments.length) return r;
                throw new Error('"' + t + '" is a required argument.');
            };
            var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/, n = /^data:.+\,.+$/;
            function o(e) {
                var t = e.match(r);
                return t ? {
                    scheme: t[1],
                    auth: t[2],
                    host: t[3],
                    port: t[4],
                    path: t[5]
                } : null;
            }
            function a(e) {
                var t = "";
                return e.scheme && (t += e.scheme + ":"), t += "//", e.auth && (t += e.auth + "@"), e.host && (t += e.host), e.port && (t += ":" + e.port), e.path && (t += e.path), t;
            }
            function i(e) {
                var r = e, n = o(e);
                if (n) {
                    if (!n.path) return e;
                    r = n.path;
                }
                for(var i, l = t.isAbsolute(r), u = r.split(/\/+/), c = 0, s = u.length - 1; s >= 0; s--)"." === (i = u[s]) ? u.splice(s, 1) : ".." === i ? c++ : c > 0 && ("" === i ? (u.splice(s + 1, c), c = 0) : (u.splice(s, 2), c--));
                return "" === (r = u.join("/")) && (r = l ? "/" : "."), n ? (n.path = r, a(n)) : r;
            }
            t.urlParse = o, t.urlGenerate = a, t.normalize = i, t.join = function(e, t) {
                "" === e && (e = "."), "" === t && (t = ".");
                var r = o(t), l = o(e);
                if (l && (e = l.path || "/"), r && !r.scheme) return l && (r.scheme = l.scheme), a(r);
                if (r || t.match(n)) return t;
                if (l && !l.host && !l.path) return l.host = t, a(l);
                var u = "/" === t.charAt(0) ? t : i(e.replace(/\/+$/, "") + "/" + t);
                return l ? (l.path = u, a(l)) : u;
            }, t.isAbsolute = function(e) {
                return "/" === e.charAt(0) || !!e.match(r);
            }, t.relative = function(e, t) {
                "" === e && (e = "."), e = e.replace(/\/$/, "");
                for(var r = 0; 0 !== t.indexOf(e + "/");){
                    var n = e.lastIndexOf("/");
                    if (n < 0) return t;
                    if ((e = e.slice(0, n)).match(/^([^\/]+:\/)?\/*$/)) return t;
                    ++r;
                }
                return Array(r + 1).join("../") + t.substr(e.length + 1);
            };
            var l = !("__proto__" in Object.create(null));
            function u(e) {
                return e;
            }
            function c(e) {
                if (!e) return !1;
                var t = e.length;
                if (t < 9) return !1;
                if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) return !1;
                for(var r = t - 10; r >= 0; r--)if (36 !== e.charCodeAt(r)) return !1;
                return !0;
            }
            function s(e, t) {
                return e === t ? 0 : e > t ? 1 : -1;
            }
            t.toSetString = l ? u : function(e) {
                return c(e) ? "$" + e : e;
            }, t.fromSetString = l ? u : function(e) {
                return c(e) ? e.slice(1) : e;
            }, t.compareByOriginalPositions = function(e, t, r) {
                var n = e.source - t.source;
                return 0 !== n ? n : 0 !== (n = e.originalLine - t.originalLine) ? n : 0 !== (n = e.originalColumn - t.originalColumn) || r ? n : 0 !== (n = e.generatedColumn - t.generatedColumn) ? n : 0 !== (n = e.generatedLine - t.generatedLine) ? n : e.name - t.name;
            }, t.compareByGeneratedPositionsDeflated = function(e, t, r) {
                var n = e.generatedLine - t.generatedLine;
                return 0 !== n ? n : 0 !== (n = e.generatedColumn - t.generatedColumn) || r ? n : 0 !== (n = e.source - t.source) ? n : 0 !== (n = e.originalLine - t.originalLine) ? n : 0 !== (n = e.originalColumn - t.originalColumn) ? n : e.name - t.name;
            }, t.compareByGeneratedPositionsInflated = function(e, t) {
                var r = e.generatedLine - t.generatedLine;
                return 0 !== r ? r : 0 !== (r = e.generatedColumn - t.generatedColumn) ? r : 0 !== (r = s(e.source, t.source)) ? r : 0 !== (r = e.originalLine - t.originalLine) ? r : 0 !== (r = e.originalColumn - t.originalColumn) ? r : s(e.name, t.name);
            };
        },
        function(e, t) {
            function r(e, t) {
                for(var r = 0, n = e.length - 1; n >= 0; n--){
                    var o = e[n];
                    "." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--);
                }
                if (t) for(; r--; r)e.unshift("..");
                return e;
            }
            function n(e, t) {
                if (e.filter) return e.filter(t);
                for(var r = [], n = 0; n < e.length; n++)t(e[n], n, e) && r.push(e[n]);
                return r;
            }
            t.resolve = function() {
                for(var e = "", t = !1, o = arguments.length - 1; o >= -1 && !t; o--){
                    var a = o >= 0 ? arguments[o] : process.cwd();
                    if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                    a && (e = a + "/" + e, t = "/" === a.charAt(0));
                }
                return (t ? "/" : "") + (e = r(n(e.split("/"), function(e) {
                    return !!e;
                }), !t).join("/")) || ".";
            }, t.normalize = function(e) {
                var a = t.isAbsolute(e), i = "/" === o(e, -1);
                return (e = r(n(e.split("/"), function(e) {
                    return !!e;
                }), !a).join("/")) || a || (e = "."), e && i && (e += "/"), (a ? "/" : "") + e;
            }, t.isAbsolute = function(e) {
                return "/" === e.charAt(0);
            }, t.join = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return t.normalize(n(e, function(e, t) {
                    if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                    return e;
                }).join("/"));
            }, t.relative = function(e, r) {
                function n(e) {
                    for(var t = 0; t < e.length && "" === e[t]; t++);
                    for(var r = e.length - 1; r >= 0 && "" === e[r]; r--);
                    return t > r ? [] : e.slice(t, r - t + 1);
                }
                e = t.resolve(e).substr(1), r = t.resolve(r).substr(1);
                for(var o = n(e.split("/")), a = n(r.split("/")), i = Math.min(o.length, a.length), l = i, u = 0; u < i; u++)if (o[u] !== a[u]) {
                    l = u;
                    break;
                }
                var c = [];
                for(u = l; u < o.length; u++)c.push("..");
                return (c = c.concat(a.slice(l))).join("/");
            }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
                if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
                for(var t = e.charCodeAt(0), r = 47 === t, n = -1, o = !0, a = e.length - 1; a >= 1; --a)if (47 === (t = e.charCodeAt(a))) {
                    if (!o) {
                        n = a;
                        break;
                    }
                } else o = !1;
                return -1 === n ? r ? "/" : "." : r && 1 === n ? "/" : e.slice(0, n);
            }, t.basename = function(e, t) {
                var r = function(e) {
                    "string" != typeof e && (e += "");
                    var t, r = 0, n = -1, o = !0;
                    for(t = e.length - 1; t >= 0; --t)if (47 === e.charCodeAt(t)) {
                        if (!o) {
                            r = t + 1;
                            break;
                        }
                    } else -1 === n && (o = !1, n = t + 1);
                    return -1 === n ? "" : e.slice(r, n);
                }(e);
                return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)), r;
            }, t.extname = function(e) {
                "string" != typeof e && (e += "");
                for(var t = -1, r = 0, n = -1, o = !0, a = 0, i = e.length - 1; i >= 0; --i){
                    var l = e.charCodeAt(i);
                    if (47 !== l) -1 === n && (o = !1, n = i + 1), 46 === l ? -1 === t ? t = i : 1 !== a && (a = 1) : -1 !== t && (a = -1);
                    else if (!o) {
                        r = i + 1;
                        break;
                    }
                }
                return -1 === t || -1 === n || 0 === a || 1 === a && t === n - 1 && t === r + 1 ? "" : e.slice(t, n);
            };
            var o = "b" === "ab".substr(-1) ? function(e, t, r) {
                return e.substr(t, r);
            } : function(e, t, r) {
                return t < 0 && (t = e.length + t), e.substr(t, r);
            };
        },
        function(e, t, r) {
            t.SourceMapGenerator = r(4).SourceMapGenerator, t.SourceMapConsumer = r(11).SourceMapConsumer, t.SourceNode = r(14).SourceNode;
        },
        function(e, t, r) {
            var n = r(5), o = r(1), a = r(6).ArraySet, i = r(10).MappingList;
            function l(e) {
                e || (e = {}), this._file = o.getArg(e, "file", null), this._sourceRoot = o.getArg(e, "sourceRoot", null), this._skipValidation = o.getArg(e, "skipValidation", !1), this._sources = new a, this._names = new a, this._mappings = new i, this._sourcesContents = null;
            }
            l.prototype._version = 3, l.fromSourceMap = function(e) {
                var t = e.sourceRoot, r = new l({
                    file: e.file,
                    sourceRoot: t
                });
                return e.eachMapping(function(e) {
                    var n = {
                        generated: {
                            line: e.generatedLine,
                            column: e.generatedColumn
                        }
                    };
                    null != e.source && (n.source = e.source, null != t && (n.source = o.relative(t, n.source)), n.original = {
                        line: e.originalLine,
                        column: e.originalColumn
                    }, null != e.name && (n.name = e.name)), r.addMapping(n);
                }), e.sources.forEach(function(t) {
                    var n = e.sourceContentFor(t);
                    null != n && r.setSourceContent(t, n);
                }), r;
            }, l.prototype.addMapping = function(e) {
                var t = o.getArg(e, "generated"), r = o.getArg(e, "original", null), n = o.getArg(e, "source", null), a = o.getArg(e, "name", null);
                this._skipValidation || this._validateMapping(t, r, n, a), null != n && (n = String(n), this._sources.has(n) || this._sources.add(n)), null != a && (a = String(a), this._names.has(a) || this._names.add(a)), this._mappings.add({
                    generatedLine: t.line,
                    generatedColumn: t.column,
                    originalLine: null != r && r.line,
                    originalColumn: null != r && r.column,
                    source: n,
                    name: a
                });
            }, l.prototype.setSourceContent = function(e, t) {
                var r = e;
                null != this._sourceRoot && (r = o.relative(this._sourceRoot, r)), null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[o.toSetString(r)] = t) : this._sourcesContents && (delete this._sourcesContents[o.toSetString(r)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null));
            }, l.prototype.applySourceMap = function(e, t, r) {
                var n = t;
                if (null == t) {
                    if (null == e.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
                    n = e.file;
                }
                var i = this._sourceRoot;
                null != i && (n = o.relative(i, n));
                var l = new a, u = new a;
                this._mappings.unsortedForEach(function(t) {
                    if (t.source === n && null != t.originalLine) {
                        var a = e.originalPositionFor({
                            line: t.originalLine,
                            column: t.originalColumn
                        });
                        null != a.source && (t.source = a.source, null != r && (t.source = o.join(r, t.source)), null != i && (t.source = o.relative(i, t.source)), t.originalLine = a.line, t.originalColumn = a.column, null != a.name && (t.name = a.name));
                    }
                    var c = t.source;
                    null == c || l.has(c) || l.add(c);
                    var s = t.name;
                    null == s || u.has(s) || u.add(s);
                }, this), this._sources = l, this._names = u, e.sources.forEach(function(t) {
                    var n = e.sourceContentFor(t);
                    null != n && (null != r && (t = o.join(r, t)), null != i && (t = o.relative(i, t)), this.setSourceContent(t, n));
                }, this);
            }, l.prototype._validateMapping = function(e, t, r, n) {
                if (t && "number" != typeof t.line && "number" != typeof t.column) throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
                if ((!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0) || t || r || n) && !(e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && r)) throw new Error("Invalid mapping: " + JSON.stringify({
                    generated: e,
                    source: r,
                    original: t,
                    name: n
                }));
            }, l.prototype._serializeMappings = function() {
                for(var e, t, r, a, i = 0, l = 1, u = 0, c = 0, s = 0, f = 0, d = "", p = this._mappings.toArray(), h = 0, g = p.length; h < g; h++){
                    if (e = "", (t = p[h]).generatedLine !== l) for(i = 0; t.generatedLine !== l;)e += ";", l++;
                    else if (h > 0) {
                        if (!o.compareByGeneratedPositionsInflated(t, p[h - 1])) continue;
                        e += ",";
                    }
                    e += n.encode(t.generatedColumn - i), i = t.generatedColumn, null != t.source && (a = this._sources.indexOf(t.source), e += n.encode(a - f), f = a, e += n.encode(t.originalLine - 1 - c), c = t.originalLine - 1, e += n.encode(t.originalColumn - u), u = t.originalColumn, null != t.name && (r = this._names.indexOf(t.name), e += n.encode(r - s), s = r)), d += e;
                }
                return d;
            }, l.prototype._generateSourcesContent = function(e, t) {
                return e.map(function(e) {
                    if (!this._sourcesContents) return null;
                    null != t && (e = o.relative(t, e));
                    var r = o.toSetString(e);
                    return Object.prototype.hasOwnProperty.call(this._sourcesContents, r) ? this._sourcesContents[r] : null;
                }, this);
            }, l.prototype.toJSON = function() {
                var e = {
                    version: this._version,
                    sources: this._sources.toArray(),
                    names: this._names.toArray(),
                    mappings: this._serializeMappings()
                };
                return null != this._file && (e.file = this._file), null != this._sourceRoot && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e;
            }, l.prototype.toString = function() {
                return JSON.stringify(this.toJSON());
            }, t.SourceMapGenerator = l;
        },
        function(e, t, r) {
            var n = r(9);
            t.encode = function(e) {
                var t, r = "", o = function(e) {
                    return e < 0 ? 1 + (-e << 1) : 0 + (e << 1);
                }(e);
                do t = 31 & o, (o >>>= 5) > 0 && (t |= 32), r += n.encode(t);
                while (o > 0);
                return r;
            }, t.decode = function(e, t, r) {
                var o, a, i, l, u = e.length, c = 0, s = 0;
                do {
                    if (t >= u) throw new Error("Expected more digits in base 64 VLQ value.");
                    if (-1 === (a = n.decode(e.charCodeAt(t++)))) throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
                    o = !!(32 & a), c += (a &= 31) << s, s += 5;
                }while (o);
                r.value = (l = (i = c) >> 1, 1 == (1 & i) ? -l : l), r.rest = t;
            };
        },
        function(e, t, r) {
            var n = r(1), o = Object.prototype.hasOwnProperty, a = "undefined" != typeof Map;
            function i() {
                this._array = [], this._set = a ? new Map : Object.create(null);
            }
            i.fromArray = function(e, t) {
                for(var r = new i, n = 0, o = e.length; n < o; n++)r.add(e[n], t);
                return r;
            }, i.prototype.size = function() {
                return a ? this._set.size : Object.getOwnPropertyNames(this._set).length;
            }, i.prototype.add = function(e, t) {
                var r = a ? e : n.toSetString(e), i = a ? this.has(e) : o.call(this._set, r), l = this._array.length;
                i && !t || this._array.push(e), i || (a ? this._set.set(e, l) : this._set[r] = l);
            }, i.prototype.has = function(e) {
                if (a) return this._set.has(e);
                var t = n.toSetString(e);
                return o.call(this._set, t);
            }, i.prototype.indexOf = function(e) {
                if (a) {
                    var t = this._set.get(e);
                    if (t >= 0) return t;
                } else {
                    var r = n.toSetString(e);
                    if (o.call(this._set, r)) return this._set[r];
                }
                throw new Error('"' + e + '" is not in the set.');
            }, i.prototype.at = function(e) {
                if (e >= 0 && e < this._array.length) return this._array[e];
                throw new Error("No element indexed by " + e);
            }, i.prototype.toArray = function() {
                return this._array.slice();
            }, t.ArraySet = i;
        },
        function(e, t, r) {
            "use strict";
            function n(e) {
                return Array.isArray(e) || (e = [
                    e
                ]), Promise.all(e.map(function(e) {
                    return e.then(function(e) {
                        return {
                            isFulfilled: !0,
                            isRejected: !1,
                            value: e
                        };
                    }).catch(function(e) {
                        return {
                            isFulfilled: !1,
                            isRejected: !0,
                            reason: e
                        };
                    });
                }));
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.settle = n, t.default = n;
        },
        function(e, t, r) {
            var n = function(e) {
                "use strict";
                var t, r = Object.prototype, n = r.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, a = o.iterator || "@@iterator", i = o.asyncIterator || "@@asyncIterator", l = o.toStringTag || "@@toStringTag";
                function u(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t];
                }
                try {
                    u({}, "");
                } catch (e) {
                    u = function(e, t, r) {
                        return e[t] = r;
                    };
                }
                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof m ? t : m, a = Object.create(o.prototype), i = new T(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = f;
                        return function(o, a) {
                            if (n === p) throw new Error("Generator is already running");
                            if (n === h) {
                                if ("throw" === o) throw a;
                                return L();
                            }
                            for(r.method = o, r.arg = a;;){
                                var i = r.delegate;
                                if (i) {
                                    var l = _(i, r);
                                    if (l) {
                                        if (l === g) continue;
                                        return l;
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if (n === f) throw n = h, r.arg;
                                    r.dispatchException(r.arg);
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = p;
                                var u = s(e, t, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? h : d, u.arg === g) continue;
                                    return {
                                        value: u.arg,
                                        done: r.done
                                    };
                                }
                                "throw" === u.type && (n = h, r.method = "throw", r.arg = u.arg);
                            }
                        };
                    }(e, r, i), a;
                }
                function s(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        };
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        };
                    }
                }
                e.wrap = c;
                var f = "suspendedStart", d = "suspendedYield", p = "executing", h = "completed", g = {};
                function m() {}
                function v() {}
                function y() {}
                var b = {};
                b[a] = function() {
                    return this;
                };
                var w = Object.getPrototypeOf, k = w && w(w(P([])));
                k && k !== r && n.call(k, a) && (b = k);
                var E = y.prototype = m.prototype = Object.create(b);
                function S(e) {
                    [
                        "next",
                        "throw",
                        "return"
                    ].forEach(function(t) {
                        u(e, t, function(e) {
                            return this._invoke(t, e);
                        });
                    });
                }
                function x(e, t) {
                    var r;
                    this._invoke = function(o, a) {
                        function i() {
                            return new t(function(r, i) {
                                !function r(o, a, i, l) {
                                    var u = s(e[o], e, a);
                                    if ("throw" !== u.type) {
                                        var c = u.arg, f = c.value;
                                        return f && "object" == typeof f && n.call(f, "__await") ? t.resolve(f.__await).then(function(e) {
                                            r("next", e, i, l);
                                        }, function(e) {
                                            r("throw", e, i, l);
                                        }) : t.resolve(f).then(function(e) {
                                            c.value = e, i(c);
                                        }, function(e) {
                                            return r("throw", e, i, l);
                                        });
                                    }
                                    l(u.arg);
                                }(o, a, r, i);
                            });
                        }
                        return r = r ? r.then(i, i) : i();
                    };
                }
                function _(e, r) {
                    var n = e.iterator[r.method];
                    if (n === t) {
                        if (r.delegate = null, "throw" === r.method) {
                            if (e.iterator.return && (r.method = "return", r.arg = t, _(e, r), "throw" === r.method)) return g;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
                        }
                        return g;
                    }
                    var o = s(n, e.iterator, r.arg);
                    if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, g;
                    var a = o.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, g) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g);
                }
                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
                }
                function O(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t;
                }
                function T(e) {
                    this.tryEntries = [
                        {
                            tryLoc: "root"
                        }
                    ], e.forEach(C, this), this.reset(!0);
                }
                function P(e) {
                    if (e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1, i = function r() {
                                for(; ++o < e.length;)if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                                return r.value = t, r.done = !0, r;
                            };
                            return i.next = i;
                        }
                    }
                    return {
                        next: L
                    };
                }
                function L() {
                    return {
                        value: t,
                        done: !0
                    };
                }
                return v.prototype = E.constructor = y, y.constructor = v, v.displayName = u(y, l, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, u(e, l, "GeneratorFunction")), e.prototype = Object.create(E), e;
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    };
                }, S(x.prototype), x.prototype[i] = function() {
                    return this;
                }, e.AsyncIterator = x, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new x(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then(function(e) {
                        return e.done ? e.value : i.next();
                    });
                }, S(E), u(E, l, "Generator"), E[a] = function() {
                    return this;
                }, E.toString = function() {
                    return "[object Generator]";
                }, e.keys = function(e) {
                    var t = [];
                    for(var r in e)t.push(r);
                    return t.reverse(), function r() {
                        for(; t.length;){
                            var n = t.pop();
                            if (n in e) return r.value = n, r.done = !1, r;
                        }
                        return r.done = !0, r;
                    };
                }, e.values = P, T.prototype = {
                    constructor: T,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(O), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;
                        function o(n, o) {
                            return l.type = "throw", l.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
                        }
                        for(var a = this.tryEntries.length - 1; a >= 0; --a){
                            var i = this.tryEntries[a], l = i.completion;
                            if ("root" === i.tryLoc) return o("end");
                            if (i.tryLoc <= this.prev) {
                                var u = n.call(i, "catchLoc"), c = n.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for(var r = this.tryEntries.length - 1; r >= 0; --r){
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break;
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, g) : this.complete(i);
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g;
                    },
                    finish: function(e) {
                        for(var t = this.tryEntries.length - 1; t >= 0; --t){
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), g;
                        }
                    },
                    catch: function(e) {
                        for(var t = this.tryEntries.length - 1; t >= 0; --t){
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    O(r);
                                }
                                return o;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: P(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), g;
                    }
                }, e;
            }(e.exports);
            try {
                regeneratorRuntime = n;
            } catch (e) {
                Function("r", "regeneratorRuntime = r")(n);
            }
        },
        function(e, t) {
            var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
            t.encode = function(e) {
                if (0 <= e && e < r.length) return r[e];
                throw new TypeError("Must be between 0 and 63: " + e);
            }, t.decode = function(e) {
                return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1;
            };
        },
        function(e, t, r) {
            var n = r(1);
            function o() {
                this._array = [], this._sorted = !0, this._last = {
                    generatedLine: -1,
                    generatedColumn: 0
                };
            }
            o.prototype.unsortedForEach = function(e, t) {
                this._array.forEach(e, t);
            }, o.prototype.add = function(e) {
                var t, r, o, a, i, l;
                t = this._last, r = e, o = t.generatedLine, a = r.generatedLine, i = t.generatedColumn, l = r.generatedColumn, a > o || a == o && l >= i || n.compareByGeneratedPositionsInflated(t, r) <= 0 ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e));
            }, o.prototype.toArray = function() {
                return this._sorted || (this._array.sort(n.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
            }, t.MappingList = o;
        },
        function(e, t, r) {
            var n = r(1), o = r(12), a = r(6).ArraySet, i = r(5), l = r(13).quickSort;
            function u(e) {
                var t = e;
                return "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, ""))), null != t.sections ? new f(t) : new c(t);
            }
            function c(e) {
                var t = e;
                "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
                var r = n.getArg(t, "version"), o = n.getArg(t, "sources"), i = n.getArg(t, "names", []), l = n.getArg(t, "sourceRoot", null), u = n.getArg(t, "sourcesContent", null), c = n.getArg(t, "mappings"), s = n.getArg(t, "file", null);
                if (r != this._version) throw new Error("Unsupported version: " + r);
                o = o.map(String).map(n.normalize).map(function(e) {
                    return l && n.isAbsolute(l) && n.isAbsolute(e) ? n.relative(l, e) : e;
                }), this._names = a.fromArray(i.map(String), !0), this._sources = a.fromArray(o, !0), this.sourceRoot = l, this.sourcesContent = u, this._mappings = c, this.file = s;
            }
            function s() {
                this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
            }
            function f(e) {
                var t = e;
                "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
                var r = n.getArg(t, "version"), o = n.getArg(t, "sections");
                if (r != this._version) throw new Error("Unsupported version: " + r);
                this._sources = new a, this._names = new a;
                var i = {
                    line: -1,
                    column: 0
                };
                this._sections = o.map(function(e) {
                    if (e.url) throw new Error("Support for url field in sections not implemented.");
                    var t = n.getArg(e, "offset"), r = n.getArg(t, "line"), o = n.getArg(t, "column");
                    if (r < i.line || r === i.line && o < i.column) throw new Error("Section offsets must be ordered and non-overlapping.");
                    return i = t, {
                        generatedOffset: {
                            generatedLine: r + 1,
                            generatedColumn: o + 1
                        },
                        consumer: new u(n.getArg(e, "map"))
                    };
                });
            }
            u.fromSourceMap = function(e) {
                return c.fromSourceMap(e);
            }, u.prototype._version = 3, u.prototype.__generatedMappings = null, Object.defineProperty(u.prototype, "_generatedMappings", {
                get: function() {
                    return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
                }
            }), u.prototype.__originalMappings = null, Object.defineProperty(u.prototype, "_originalMappings", {
                get: function() {
                    return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
                }
            }), u.prototype._charIsMappingSeparator = function(e, t) {
                var r = e.charAt(t);
                return ";" === r || "," === r;
            }, u.prototype._parseMappings = function(e, t) {
                throw new Error("Subclasses must implement _parseMappings");
            }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(e, t, r) {
                var o, a = t || null;
                switch(r || u.GENERATED_ORDER){
                    case u.GENERATED_ORDER:
                        o = this._generatedMappings;
                        break;
                    case u.ORIGINAL_ORDER:
                        o = this._originalMappings;
                        break;
                    default:
                        throw new Error("Unknown order of iteration.");
                }
                var i = this.sourceRoot;
                o.map(function(e) {
                    var t = null === e.source ? null : this._sources.at(e.source);
                    return null != t && null != i && (t = n.join(i, t)), {
                        source: t,
                        generatedLine: e.generatedLine,
                        generatedColumn: e.generatedColumn,
                        originalLine: e.originalLine,
                        originalColumn: e.originalColumn,
                        name: null === e.name ? null : this._names.at(e.name)
                    };
                }, this).forEach(e, a);
            }, u.prototype.allGeneratedPositionsFor = function(e) {
                var t = n.getArg(e, "line"), r = {
                    source: n.getArg(e, "source"),
                    originalLine: t,
                    originalColumn: n.getArg(e, "column", 0)
                };
                if (null != this.sourceRoot && (r.source = n.relative(this.sourceRoot, r.source)), !this._sources.has(r.source)) return [];
                r.source = this._sources.indexOf(r.source);
                var a = [], i = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", n.compareByOriginalPositions, o.LEAST_UPPER_BOUND);
                if (i >= 0) {
                    var l = this._originalMappings[i];
                    if (void 0 === e.column) for(var u = l.originalLine; l && l.originalLine === u;)a.push({
                        line: n.getArg(l, "generatedLine", null),
                        column: n.getArg(l, "generatedColumn", null),
                        lastColumn: n.getArg(l, "lastGeneratedColumn", null)
                    }), l = this._originalMappings[++i];
                    else for(var c = l.originalColumn; l && l.originalLine === t && l.originalColumn == c;)a.push({
                        line: n.getArg(l, "generatedLine", null),
                        column: n.getArg(l, "generatedColumn", null),
                        lastColumn: n.getArg(l, "lastGeneratedColumn", null)
                    }), l = this._originalMappings[++i];
                }
                return a;
            }, t.SourceMapConsumer = u, c.prototype = Object.create(u.prototype), c.prototype.consumer = u, c.fromSourceMap = function(e) {
                var t = Object.create(c.prototype), r = t._names = a.fromArray(e._names.toArray(), !0), o = t._sources = a.fromArray(e._sources.toArray(), !0);
                t.sourceRoot = e._sourceRoot, t.sourcesContent = e._generateSourcesContent(t._sources.toArray(), t.sourceRoot), t.file = e._file;
                for(var i = e._mappings.toArray().slice(), u = t.__generatedMappings = [], f = t.__originalMappings = [], d = 0, p = i.length; d < p; d++){
                    var h = i[d], g = new s;
                    g.generatedLine = h.generatedLine, g.generatedColumn = h.generatedColumn, h.source && (g.source = o.indexOf(h.source), g.originalLine = h.originalLine, g.originalColumn = h.originalColumn, h.name && (g.name = r.indexOf(h.name)), f.push(g)), u.push(g);
                }
                return l(t.__originalMappings, n.compareByOriginalPositions), t;
            }, c.prototype._version = 3, Object.defineProperty(c.prototype, "sources", {
                get: function() {
                    return this._sources.toArray().map(function(e) {
                        return null != this.sourceRoot ? n.join(this.sourceRoot, e) : e;
                    }, this);
                }
            }), c.prototype._parseMappings = function(e, t) {
                for(var r, o, a, u, c, f = 1, d = 0, p = 0, h = 0, g = 0, m = 0, v = e.length, y = 0, b = {}, w = {}, k = [], E = []; y < v;)if (";" === e.charAt(y)) f++, y++, d = 0;
                else if ("," === e.charAt(y)) y++;
                else {
                    for((r = new s).generatedLine = f, u = y; u < v && !this._charIsMappingSeparator(e, u); u++);
                    if (a = b[o = e.slice(y, u)]) y += o.length;
                    else {
                        for(a = []; y < u;)i.decode(e, y, w), c = w.value, y = w.rest, a.push(c);
                        if (2 === a.length) throw new Error("Found a source, but no line and column");
                        if (3 === a.length) throw new Error("Found a source and line, but no column");
                        b[o] = a;
                    }
                    r.generatedColumn = d + a[0], d = r.generatedColumn, a.length > 1 && (r.source = g + a[1], g += a[1], r.originalLine = p + a[2], p = r.originalLine, r.originalLine += 1, r.originalColumn = h + a[3], h = r.originalColumn, a.length > 4 && (r.name = m + a[4], m += a[4])), E.push(r), "number" == typeof r.originalLine && k.push(r);
                }
                l(E, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = E, l(k, n.compareByOriginalPositions), this.__originalMappings = k;
            }, c.prototype._findMapping = function(e, t, r, n, a, i) {
                if (e[r] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + e[r]);
                if (e[n] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + e[n]);
                return o.search(e, t, a, i);
            }, c.prototype.computeColumnSpans = function() {
                for(var e = 0; e < this._generatedMappings.length; ++e){
                    var t = this._generatedMappings[e];
                    if (e + 1 < this._generatedMappings.length) {
                        var r = this._generatedMappings[e + 1];
                        if (t.generatedLine === r.generatedLine) {
                            t.lastGeneratedColumn = r.generatedColumn - 1;
                            continue;
                        }
                    }
                    t.lastGeneratedColumn = 1 / 0;
                }
            }, c.prototype.originalPositionFor = function(e) {
                var t = {
                    generatedLine: n.getArg(e, "line"),
                    generatedColumn: n.getArg(e, "column")
                }, r = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", n.compareByGeneratedPositionsDeflated, n.getArg(e, "bias", u.GREATEST_LOWER_BOUND));
                if (r >= 0) {
                    var o = this._generatedMappings[r];
                    if (o.generatedLine === t.generatedLine) {
                        var a = n.getArg(o, "source", null);
                        null !== a && (a = this._sources.at(a), null != this.sourceRoot && (a = n.join(this.sourceRoot, a)));
                        var i = n.getArg(o, "name", null);
                        return null !== i && (i = this._names.at(i)), {
                            source: a,
                            line: n.getArg(o, "originalLine", null),
                            column: n.getArg(o, "originalColumn", null),
                            name: i
                        };
                    }
                }
                return {
                    source: null,
                    line: null,
                    column: null,
                    name: null
                };
            }, c.prototype.hasContentsOfAllSources = function() {
                return !!this.sourcesContent && this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(e) {
                    return null == e;
                });
            }, c.prototype.sourceContentFor = function(e, t) {
                if (!this.sourcesContent) return null;
                if (null != this.sourceRoot && (e = n.relative(this.sourceRoot, e)), this._sources.has(e)) return this.sourcesContent[this._sources.indexOf(e)];
                var r;
                if (null != this.sourceRoot && (r = n.urlParse(this.sourceRoot))) {
                    var o = e.replace(/^file:\/\//, "");
                    if ("file" == r.scheme && this._sources.has(o)) return this.sourcesContent[this._sources.indexOf(o)];
                    if ((!r.path || "/" == r.path) && this._sources.has("/" + e)) return this.sourcesContent[this._sources.indexOf("/" + e)];
                }
                if (t) return null;
                throw new Error('"' + e + '" is not in the SourceMap.');
            }, c.prototype.generatedPositionFor = function(e) {
                var t = n.getArg(e, "source");
                if (null != this.sourceRoot && (t = n.relative(this.sourceRoot, t)), !this._sources.has(t)) return {
                    line: null,
                    column: null,
                    lastColumn: null
                };
                var r = {
                    source: t = this._sources.indexOf(t),
                    originalLine: n.getArg(e, "line"),
                    originalColumn: n.getArg(e, "column")
                }, o = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", n.compareByOriginalPositions, n.getArg(e, "bias", u.GREATEST_LOWER_BOUND));
                if (o >= 0) {
                    var a = this._originalMappings[o];
                    if (a.source === r.source) return {
                        line: n.getArg(a, "generatedLine", null),
                        column: n.getArg(a, "generatedColumn", null),
                        lastColumn: n.getArg(a, "lastGeneratedColumn", null)
                    };
                }
                return {
                    line: null,
                    column: null,
                    lastColumn: null
                };
            }, t.BasicSourceMapConsumer = c, f.prototype = Object.create(u.prototype), f.prototype.constructor = u, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
                get: function() {
                    for(var e = [], t = 0; t < this._sections.length; t++)for(var r = 0; r < this._sections[t].consumer.sources.length; r++)e.push(this._sections[t].consumer.sources[r]);
                    return e;
                }
            }), f.prototype.originalPositionFor = function(e) {
                var t = {
                    generatedLine: n.getArg(e, "line"),
                    generatedColumn: n.getArg(e, "column")
                }, r = o.search(t, this._sections, function(e, t) {
                    var r = e.generatedLine - t.generatedOffset.generatedLine;
                    return r || e.generatedColumn - t.generatedOffset.generatedColumn;
                }), a = this._sections[r];
                return a ? a.consumer.originalPositionFor({
                    line: t.generatedLine - (a.generatedOffset.generatedLine - 1),
                    column: t.generatedColumn - (a.generatedOffset.generatedLine === t.generatedLine ? a.generatedOffset.generatedColumn - 1 : 0),
                    bias: e.bias
                }) : {
                    source: null,
                    line: null,
                    column: null,
                    name: null
                };
            }, f.prototype.hasContentsOfAllSources = function() {
                return this._sections.every(function(e) {
                    return e.consumer.hasContentsOfAllSources();
                });
            }, f.prototype.sourceContentFor = function(e, t) {
                for(var r = 0; r < this._sections.length; r++){
                    var n = this._sections[r].consumer.sourceContentFor(e, !0);
                    if (n) return n;
                }
                if (t) return null;
                throw new Error('"' + e + '" is not in the SourceMap.');
            }, f.prototype.generatedPositionFor = function(e) {
                for(var t = 0; t < this._sections.length; t++){
                    var r = this._sections[t];
                    if (-1 !== r.consumer.sources.indexOf(n.getArg(e, "source"))) {
                        var o = r.consumer.generatedPositionFor(e);
                        if (o) return {
                            line: o.line + (r.generatedOffset.generatedLine - 1),
                            column: o.column + (r.generatedOffset.generatedLine === o.line ? r.generatedOffset.generatedColumn - 1 : 0)
                        };
                    }
                }
                return {
                    line: null,
                    column: null
                };
            }, f.prototype._parseMappings = function(e, t) {
                this.__generatedMappings = [], this.__originalMappings = [];
                for(var r = 0; r < this._sections.length; r++)for(var o = this._sections[r], a = o.consumer._generatedMappings, i = 0; i < a.length; i++){
                    var u = a[i], c = o.consumer._sources.at(u.source);
                    null !== o.consumer.sourceRoot && (c = n.join(o.consumer.sourceRoot, c)), this._sources.add(c), c = this._sources.indexOf(c);
                    var s = o.consumer._names.at(u.name);
                    this._names.add(s), s = this._names.indexOf(s);
                    var f = {
                        source: c,
                        generatedLine: u.generatedLine + (o.generatedOffset.generatedLine - 1),
                        generatedColumn: u.generatedColumn + (o.generatedOffset.generatedLine === u.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
                        originalLine: u.originalLine,
                        originalColumn: u.originalColumn,
                        name: s
                    };
                    this.__generatedMappings.push(f), "number" == typeof f.originalLine && this.__originalMappings.push(f);
                }
                l(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), l(this.__originalMappings, n.compareByOriginalPositions);
            }, t.IndexedSourceMapConsumer = f;
        },
        function(e, t) {
            t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2, t.search = function(e, r, n, o) {
                if (0 === r.length) return -1;
                var a = function e(r, n, o, a, i, l) {
                    var u = Math.floor((n - r) / 2) + r, c = i(o, a[u], !0);
                    return 0 === c ? u : c > 0 ? n - u > 1 ? e(u, n, o, a, i, l) : l == t.LEAST_UPPER_BOUND ? n < a.length ? n : -1 : u : u - r > 1 ? e(r, u, o, a, i, l) : l == t.LEAST_UPPER_BOUND ? u : r < 0 ? -1 : r;
                }(-1, r.length, e, r, n, o || t.GREATEST_LOWER_BOUND);
                if (a < 0) return -1;
                for(; a - 1 >= 0 && 0 === n(r[a], r[a - 1], !0);)--a;
                return a;
            };
        },
        function(e, t) {
            function r(e, t, r) {
                var n = e[t];
                e[t] = e[r], e[r] = n;
            }
            function n(e, t, o, a) {
                if (o < a) {
                    var i = o - 1;
                    r(e, (s = o, f = a, Math.round(s + Math.random() * (f - s))), a);
                    for(var l = e[a], u = o; u < a; u++)t(e[u], l) <= 0 && r(e, i += 1, u);
                    r(e, i + 1, u);
                    var c = i + 1;
                    n(e, t, o, c - 1), n(e, t, c + 1, a);
                }
                var s, f;
            }
            t.quickSort = function(e, t) {
                n(e, t, 0, e.length - 1);
            };
        },
        function(e, t, r) {
            var n = r(4).SourceMapGenerator, o = r(1), a = /(\r?\n)/, i = "$$$isSourceNode$$$";
            function l(e, t, r, n, o) {
                this.children = [], this.sourceContents = {}, this.line = null == e ? null : e, this.column = null == t ? null : t, this.source = null == r ? null : r, this.name = null == o ? null : o, this[i] = !0, null != n && this.add(n);
            }
            l.fromStringWithSourceMap = function(e, t, r) {
                var n = new l, i = e.split(a), u = 0, c = function() {
                    return e() + (e() || "");
                    function e() {
                        return u < i.length ? i[u++] : void 0;
                    }
                }, s = 1, f = 0, d = null;
                return t.eachMapping(function(e) {
                    if (null !== d) {
                        if (!(s < e.generatedLine)) {
                            var t = (r = i[u]).substr(0, e.generatedColumn - f);
                            return i[u] = r.substr(e.generatedColumn - f), f = e.generatedColumn, p(d, t), void (d = e);
                        }
                        p(d, c()), s++, f = 0;
                    }
                    for(; s < e.generatedLine;)n.add(c()), s++;
                    if (f < e.generatedColumn) {
                        var r = i[u];
                        n.add(r.substr(0, e.generatedColumn)), i[u] = r.substr(e.generatedColumn), f = e.generatedColumn;
                    }
                    d = e;
                }, this), u < i.length && (d && p(d, c()), n.add(i.splice(u).join(""))), t.sources.forEach(function(e) {
                    var a = t.sourceContentFor(e);
                    null != a && (null != r && (e = o.join(r, e)), n.setSourceContent(e, a));
                }), n;
                function p(e, t) {
                    if (null === e || void 0 === e.source) n.add(t);
                    else {
                        var a = r ? o.join(r, e.source) : e.source;
                        n.add(new l(e.originalLine, e.originalColumn, a, t, e.name));
                    }
                }
            }, l.prototype.add = function(e) {
                if (Array.isArray(e)) e.forEach(function(e) {
                    this.add(e);
                }, this);
                else {
                    if (!e[i] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
                    e && this.children.push(e);
                }
                return this;
            }, l.prototype.prepend = function(e) {
                if (Array.isArray(e)) for(var t = e.length - 1; t >= 0; t--)this.prepend(e[t]);
                else {
                    if (!e[i] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
                    this.children.unshift(e);
                }
                return this;
            }, l.prototype.walk = function(e) {
                for(var t, r = 0, n = this.children.length; r < n; r++)(t = this.children[r])[i] ? t.walk(e) : "" !== t && e(t, {
                    source: this.source,
                    line: this.line,
                    column: this.column,
                    name: this.name
                });
            }, l.prototype.join = function(e) {
                var t, r, n = this.children.length;
                if (n > 0) {
                    for(t = [], r = 0; r < n - 1; r++)t.push(this.children[r]), t.push(e);
                    t.push(this.children[r]), this.children = t;
                }
                return this;
            }, l.prototype.replaceRight = function(e, t) {
                var r = this.children[this.children.length - 1];
                return r[i] ? r.replaceRight(e, t) : "string" == typeof r ? this.children[this.children.length - 1] = r.replace(e, t) : this.children.push("".replace(e, t)), this;
            }, l.prototype.setSourceContent = function(e, t) {
                this.sourceContents[o.toSetString(e)] = t;
            }, l.prototype.walkSourceContents = function(e) {
                for(var t = 0, r = this.children.length; t < r; t++)this.children[t][i] && this.children[t].walkSourceContents(e);
                var n = Object.keys(this.sourceContents);
                for(t = 0, r = n.length; t < r; t++)e(o.fromSetString(n[t]), this.sourceContents[n[t]]);
            }, l.prototype.toString = function() {
                var e = "";
                return this.walk(function(t) {
                    e += t;
                }), e;
            }, l.prototype.toStringWithSourceMap = function(e) {
                var t = {
                    code: "",
                    line: 1,
                    column: 0
                }, r = new n(e), o = !1, a = null, i = null, l = null, u = null;
                return this.walk(function(e, n) {
                    t.code += e, null !== n.source && null !== n.line && null !== n.column ? (a === n.source && i === n.line && l === n.column && u === n.name || r.addMapping({
                        source: n.source,
                        original: {
                            line: n.line,
                            column: n.column
                        },
                        generated: {
                            line: t.line,
                            column: t.column
                        },
                        name: n.name
                    }), a = n.source, i = n.line, l = n.column, u = n.name, o = !0) : o && (r.addMapping({
                        generated: {
                            line: t.line,
                            column: t.column
                        }
                    }), a = null, o = !1);
                    for(var c = 0, s = e.length; c < s; c++)10 === e.charCodeAt(c) ? (t.line++, t.column = 0, c + 1 === s ? (a = null, o = !1) : o && r.addMapping({
                        source: n.source,
                        original: {
                            line: n.line,
                            column: n.column
                        },
                        generated: {
                            line: t.line,
                            column: t.column
                        },
                        name: n.name
                    })) : t.column++;
                }), this.walkSourceContents(function(e, t) {
                    r.setSourceContent(e, t);
                }), {
                    code: t.code,
                    map: r
                };
            }, t.SourceNode = l;
        },
        function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "setEditorHandler", function() {
                return ue;
            }), r.d(t, "reportBuildError", function() {
                return ce;
            }), r.d(t, "reportRuntimeError", function() {
                return se;
            }), r.d(t, "dismissBuildError", function() {
                return fe;
            }), r.d(t, "startReportingRuntimeErrors", function() {
                return de;
            }), r.d(t, "dismissRuntimeErrors", function() {
                return he;
            }), r.d(t, "stopReportingRuntimeErrors", function() {
                return ge;
            });
            var n = null;
            function o(e, t) {
                if (t.error) {
                    var r = t.error;
                    r instanceof Error ? e(r) : e(new Error(r));
                }
            }
            function a(e, t) {
                null === n && (n = o.bind(void 0, t), e.addEventListener("error", n));
            }
            var i = null;
            function l(e, t) {
                if (null == t || null == t.reason) return e(new Error("Unknown"));
                var r = t.reason;
                return r instanceof Error ? e(r) : e(new Error(r));
            }
            function u(e, t) {
                null === i && (i = l.bind(void 0, t), e.addEventListener("unhandledrejection", i));
            }
            var c = !1, s = 10, f = 50;
            var d = [], p = function() {
                "undefined" != typeof console && (console.reactStack = function(e) {
                    return d.push(e);
                }, console.reactStackEnd = function(e) {
                    return d.pop();
                });
            }, h = function() {
                "undefined" != typeof console && (console.reactStack = void 0, console.reactStackEnd = void 0);
            }, g = function(e, t) {
                if ("undefined" != typeof console) {
                    var r = console[e];
                    "function" == typeof r && (console[e] = function() {
                        try {
                            var e = arguments[0];
                            "string" == typeof e && d.length > 0 && t(e, d[d.length - 1]);
                        } catch (e) {
                            setTimeout(function() {
                                throw e;
                            });
                        }
                        return r.apply(this, arguments);
                    });
                }
            };
            function m(e, t) {
                return (m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function v(e, t, r) {
                return (v = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }() ? Reflect.construct : function(e, t, r) {
                    var n = [
                        null
                    ];
                    n.push.apply(n, t);
                    var o = new (Function.bind.apply(e, n));
                    return r && m(o, r.prototype), o;
                }).apply(null, arguments);
            }
            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for(var r = 0, n = new Array(t); r < t; r++)n[r] = e[r];
                return n;
            }
            function b(e) {
                return function(e) {
                    if (Array.isArray(e)) return y(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return y(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? y(e, t) : void 0;
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function w(e, t) {
                for(var r = 0; r < t.length; r++){
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function k(e, t, r) {
                return t && w(e.prototype, t), r && w(e, r), e;
            }
            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            var S = function e(t, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                E(this, e), this.lineNumber = t, this.content = r, this.highlight = n;
            }, x = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null, s = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
                    E(this, e), t && 0 === t.indexOf("Object.") && (t = t.slice(7)), "friendlySyntaxErrorLabel" !== t && "exports.__esModule" !== t && "<anonymous>" !== t && t || (t = null), this.functionName = t, this.fileName = r, this.lineNumber = n, this.columnNumber = o, this._originalFunctionName = i, this._originalFileName = l, this._originalLineNumber = u, this._originalColumnNumber = c, this._scriptCode = a, this._originalScriptCode = s;
                }
                return k(e, [
                    {
                        key: "getFunctionName",
                        value: function() {
                            return this.functionName || "(anonymous function)";
                        }
                    },
                    {
                        key: "getSource",
                        value: function() {
                            var e = "";
                            return null != this.fileName && (e += this.fileName + ":"), null != this.lineNumber && (e += this.lineNumber + ":"), null != this.columnNumber && (e += this.columnNumber + ":"), e.slice(0, -1);
                        }
                    },
                    {
                        key: "toString",
                        value: function() {
                            var e = this.getFunctionName(), t = this.getSource();
                            return "".concat(e).concat(t ? " (".concat(t, ")") : "");
                        }
                    }
                ]), e;
            }(), _ = /\(?(.+?)(?::(\d+))?(?::(\d+))?\)?$/;
            function C(e) {
                return _.exec(e).slice(1).map(function(e) {
                    var t = Number(e);
                    return isNaN(t) ? e : t;
                });
            }
            var O = /^\s*(at|in)\s.+(:\d+)/, T = /(^|@)\S+:\d+|.+line\s+\d+\s+>\s+(eval|Function).+/;
            function P(e) {
                return e.filter(function(e) {
                    return O.test(e) || T.test(e);
                }).map(function(e) {
                    if (T.test(e)) {
                        var t = !1;
                        / > (eval|Function)/.test(e) && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > (eval|Function):\d+:\d+/g, ":$1"), t = !0);
                        var r = e.split(/[@]/g), n = r.pop();
                        return v(x, [
                            r.join("@") || (t ? "eval" : null)
                        ].concat(b(C(n))));
                    }
                    -1 !== e.indexOf("(eval ") && (e = e.replace(/(\(eval at [^()]*)|(\),.*$)/g, "")), -1 !== e.indexOf("(at ") && (e = e.replace(/\(at /, "("));
                    var o = e.trim().split(/\s+/g).slice(1), a = o.pop();
                    return v(x, [
                        o.join(" ") || null
                    ].concat(b(C(a))));
                });
            }
            function L(e) {
                if (null == e) throw new Error("You cannot pass a null object.");
                if ("string" == typeof e) return P(e.split("\n"));
                if (Array.isArray(e)) return P(e);
                if ("string" == typeof e.stack) return P(e.stack.split("\n"));
                throw new Error("The error you provided does not contain a stack trace.");
            }
            var R = r(0), A = r.n(R);
            function N(e, t, r, n, o, a, i) {
                try {
                    var l = e[a](i), u = l.value;
                } catch (e) {
                    return void r(e);
                }
                l.done ? t(u) : Promise.resolve(u).then(n, o);
            }
            function j(e) {
                return function() {
                    var t = this, r = arguments;
                    return new Promise(function(n, o) {
                        var a = e.apply(t, r);
                        function i(e) {
                            N(a, n, o, i, l, "next", e);
                        }
                        function l(e) {
                            N(a, n, o, i, l, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var M = r(3), I = function() {
                function e(t) {
                    E(this, e), this.__source_map = t;
                }
                return k(e, [
                    {
                        key: "getOriginalPosition",
                        value: function(e, t) {
                            var r = this.__source_map.originalPositionFor({
                                line: e,
                                column: t
                            });
                            return {
                                line: r.line,
                                column: r.column,
                                source: r.source
                            };
                        }
                    },
                    {
                        key: "getGeneratedPosition",
                        value: function(e, t, r) {
                            var n = this.__source_map.generatedPositionFor({
                                source: e,
                                line: t,
                                column: r
                            });
                            return {
                                line: n.line,
                                column: n.column
                            };
                        }
                    },
                    {
                        key: "getSource",
                        value: function(e) {
                            return this.__source_map.sourceContentFor(e);
                        }
                    },
                    {
                        key: "getSources",
                        value: function() {
                            return this.__source_map.sources;
                        }
                    }
                ]), e;
            }();
            function D(e, t) {
                for(var r = /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/gm, n = null;;){
                    var o = r.exec(t);
                    if (null == o) break;
                    n = o;
                }
                return n && n[1] ? Promise.resolve(n[1].toString()) : Promise.reject("Cannot find a source map directive for ".concat(e, "."));
            }
            function z(e, t) {
                return q.apply(this, arguments);
            }
            function q() {
                return (q = j(A.a.mark(function e(t, r) {
                    var n, o, a, i, l, u;
                    return A.a.wrap(function(e) {
                        for(;;)switch(e.prev = e.next){
                            case 0:
                                return e.next = 2, D(t, r);
                            case 2:
                                if (0 !== (n = e.sent).indexOf("data:")) {
                                    e.next = 14;
                                    break;
                                }
                                if (o = /^data:application\/json;([\w=:"-]+;)*base64,/, a = n.match(o)) {
                                    e.next = 8;
                                    break;
                                }
                                throw new Error("Sorry, non-base64 inline source-map encoding is not supported.");
                            case 8:
                                return n = n.substring(a[0].length), n = window.atob(n), n = JSON.parse(n), e.abrupt("return", new I(new M.SourceMapConsumer(n)));
                            case 14:
                                return i = t.lastIndexOf("/"), l = t.substring(0, i + 1) + n, e.next = 18, fetch(l).then(function(e) {
                                    return e.json();
                                });
                            case 18:
                                return u = e.sent, e.abrupt("return", new I(new M.SourceMapConsumer(u)));
                            case 20:
                            case "end":
                                return e.stop();
                        }
                    }, e);
                }))).apply(this, arguments);
            }
            function F(e, t, r) {
                "string" == typeof r && (r = r.split("\n"));
                for(var n = [], o = Math.max(0, e - 1 - t); o <= Math.min(r.length - 1, e - 1 + t); ++o)n.push(new S(o + 1, r[o], o === e - 1));
                return n;
            }
            var U = r(7);
            function B(e) {
                return H.apply(this, arguments);
            }
            function H() {
                return (H = j(A.a.mark(function e(t) {
                    var r, n, o, a = arguments;
                    return A.a.wrap(function(e) {
                        for(;;)switch(e.prev = e.next){
                            case 0:
                                return r = a.length > 1 && void 0 !== a[1] ? a[1] : 3, n = {}, o = [], t.forEach(function(e) {
                                    var t = e.fileName;
                                    null != t && -1 === o.indexOf(t) && o.push(t);
                                }), e.next = 6, Object(U.settle)(o.map(function() {
                                    var e = j(A.a.mark(function e(t) {
                                        var r, o, a;
                                        return A.a.wrap(function(e) {
                                            for(;;)switch(e.prev = e.next){
                                                case 0:
                                                    return r = 0 === t.indexOf("webpack-internal:") ? "/__get-internal-source?fileName=".concat(encodeURIComponent(t)) : t, e.next = 3, fetch(r).then(function(e) {
                                                        return e.text();
                                                    });
                                                case 3:
                                                    return o = e.sent, e.next = 6, z(t, o);
                                                case 6:
                                                    a = e.sent, n[t] = {
                                                        fileSource: o,
                                                        map: a
                                                    };
                                                case 8:
                                                case "end":
                                                    return e.stop();
                                            }
                                        }, e);
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments);
                                    };
                                }()));
                            case 6:
                                return e.abrupt("return", t.map(function(e) {
                                    var t = e.functionName, o = e.fileName, a = e.lineNumber, i = e.columnNumber, l = n[o] || {}, u = l.map, c = l.fileSource;
                                    if (null == u || null == a) return e;
                                    var s = u.getOriginalPosition(a, i), f = s.source, d = s.line, p = s.column, h = null == f ? [] : u.getSource(f);
                                    return new x(t, o, a, i, F(a, r, c), t, f, d, p, F(d, r, h));
                                }));
                            case 7:
                            case "end":
                                return e.stop();
                        }
                    }, e);
                }))).apply(this, arguments);
            }
            var $ = r(2), V = r.n($);
            function W(e, t) {
                var r = -1, n = -1;
                do ++r, n = t.indexOf(e, n + 1);
                while (-1 !== n);
                return r;
            }
            function G(e, t) {
                return Q.apply(this, arguments);
            }
            function Q() {
                return (Q = j(A.a.mark(function e(t, r) {
                    var n, o, a, i, l = arguments;
                    return A.a.wrap(function(e) {
                        for(;;)switch(e.prev = e.next){
                            case 0:
                                if (n = l.length > 2 && void 0 !== l[2] ? l[2] : 3, o = "object" == typeof t ? t.contents : null, a = "object" == typeof t ? t.uri : t, null != o) {
                                    e.next = 7;
                                    break;
                                }
                                return e.next = 6, fetch(a).then(function(e) {
                                    return e.text();
                                });
                            case 6:
                                o = e.sent;
                            case 7:
                                return e.next = 9, z(a, o);
                            case 9:
                                return i = e.sent, e.abrupt("return", r.map(function(e) {
                                    var t = e.functionName, r = e.lineNumber, l = e.columnNumber;
                                    if (null != e._originalLineNumber) return e;
                                    var u = e.fileName;
                                    if (u && (u = V.a.normalize(u.replace(/[\\]+/g, "/"))), null == u) return e;
                                    var c = u, s = i.getSources().map(function(e) {
                                        return e.replace(/[\\]+/g, "/");
                                    }).filter(function(e) {
                                        var t = (e = V.a.normalize(e)).lastIndexOf(c);
                                        return -1 !== t && t === e.length - c.length;
                                    }).map(function(e) {
                                        return {
                                            token: e,
                                            seps: W(V.a.sep, V.a.normalize(e)),
                                            penalties: W("node_modules", e) + W("~", e)
                                        };
                                    }).sort(function(e, t) {
                                        var r = Math.sign(e.seps - t.seps);
                                        return 0 !== r ? r : Math.sign(e.penalties - t.penalties);
                                    });
                                    if (s.length < 1 || null == r) return new x(null, null, null, null, null, t, c, r, l, null);
                                    var f = s[0].token, d = i.getGeneratedPosition(f, r, l), p = d.line, h = d.column, g = i.getSource(f);
                                    return new x(t, a, p, h || null, F(p, n, o || []), t, c, r, l, F(r, n, g));
                                }));
                            case 11:
                            case "end":
                                return e.stop();
                        }
                    }, e);
                }))).apply(this, arguments);
            }
            var Y = function(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3, r = L(e);
                return (e.__unmap_source ? G(e.__unmap_source, r, t) : B(r, t)).then(function(e) {
                    return 0 === e.map(function(e) {
                        return e._originalFileName;
                    }).filter(function(e) {
                        return null != e && -1 === e.indexOf("node_modules");
                    }).length ? null : e.filter(function(e) {
                        var t = e.functionName;
                        return null == t || -1 === t.indexOf("__stack_frame_overlay_proxy_console__");
                    });
                });
            }, X = function(e) {
                return function(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    Y(t, r, 3).then(function(n) {
                        null != n && e({
                            error: t,
                            unhandledRejection: r,
                            contextSize: 3,
                            stackFrames: n
                        });
                    }).catch(function(e) {
                        console.log("Could not get the stack frames of error:", e);
                    });
                };
            };
            function K(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/static/js/bundle.js", r = X(e);
                return a(window, function(e) {
                    return r(e, !1);
                }), u(window, function(e) {
                    return r(e, !0);
                }), function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f;
                    if (!c) try {
                        s = Error.stackTraceLimit, Error.stackTraceLimit = e, c = !0;
                    } catch (e) {}
                }(), p(), g("error", function(e, n) {
                    var o = function(e, t) {
                        for(var r, n, o = function(e) {
                            return e.split("\n").filter(function(e) {
                                return !e.match(/^\s*in/);
                            }).join("\n");
                        }(e), a = "", i = 0; i < t.length; ++i){
                            var l = t[i], u = l.fileName, c = l.lineNumber;
                            if (null != u && null != c && !(u === r && "number" == typeof c && "number" == typeof n && Math.abs(c - n) < 3)) {
                                r = u, n = c;
                                var s = t[i].name;
                                a += "in ".concat(s = s || "(anonymous function)", " (at ").concat(u, ":").concat(c, ")\n");
                            }
                        }
                        return {
                            message: o,
                            stack: a
                        };
                    }(e, n);
                    r({
                        message: o.message,
                        stack: o.stack,
                        __unmap_source: t
                    }, !1);
                }), function() {
                    var e;
                    !function() {
                        if (c) try {
                            Error.stackTraceLimit = s, c = !1;
                        } catch (e) {}
                    }(), e = window, null !== i && (e.removeEventListener("unhandledrejection", i), i = null), function(e) {
                        null !== n && (e.removeEventListener("error", n), n = null);
                    }(window), h();
                };
            }
            var J = {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                border: "none",
                "z-index": 2147483647
            };
            var Z = '/*! For license information please see iframe-bundle.js.LICENSE.txt */\n!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=208)}([function(e,t,r){"use strict";e.exports=r(183)},function(e,t,r){var n=r(8),o=r(35).f,a=r(18),i=r(21),l=r(38),u=r(60),c=r(64);e.exports=function(e,t){var r,s,f,d,p,h=e.target,g=e.global,v=e.stat;if(r=g?n:v?n[h]||l(h,{}):(n[h]||{}).prototype)for(s in t){if(d=t[s],f=e.noTargetGet?(p=o(r,s))&&p.value:r[s],!c(g?s:h+(v?".":"#")+s,e.forced)&&void 0!==f){if(typeof d===typeof f)continue;u(d,f)}(e.sham||f&&f.sham)&&a(d,"sham",!0),i(r,s,d,e)}}},function(e,t,r){var n=r(13);e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t){e.exports=!1},function(e,t,r){var n=r(2),o=r(66),a=r(26),i=r(7),l=r(45),u=r(69),c=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,r){var s,f,d,p,h,g,v,m=r&&r.that,y=!(!r||!r.AS_ENTRIES),b=!(!r||!r.IS_ITERATOR),w=!(!r||!r.INTERRUPTED),k=i(t,m,1+y+w),E=function(e){return s&&u(s),new c(!0,e)},x=function(e){return y?(n(e),w?k(e[0],e[1],E):k(e[0],e[1])):w?k(e,E):k(e)};if(b)s=e;else{if("function"!=typeof(f=l(e)))throw TypeError("Target is not iterable");if(o(f)){for(d=0,p=a(e.length);p>d;d++)if((h=x(e[d]))&&h instanceof c)return h;return new c(!1)}s=f.call(e)}for(g=s.next;!(v=g.call(s)).done;){try{h=x(v.value)}catch(e){throw u(s),e}if("object"==typeof h&&h&&h instanceof c)return h}return new c(!1)}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,r){var n=r(8),o=r(40),a=r(11),i=r(31),l=r(44),u=r(67),c=o("wks"),s=n.Symbol,f=u?s:s&&s.withoutSetter||i;e.exports=function(e){return a(c,e)||(l&&a(s,e)?c[e]=s[e]:c[e]=f("Symbol."+e)),c[e]}},function(e,t,r){var n=r(5);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,r){(function(t){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,r(34))},function(e,t,r){var n=r(61),o=r(11),a=r(82),i=r(14).f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});o(t,e)||i(t,e,{value:a.f(e)})}},function(e,t,r){var n=r(61),o=r(8),a=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?a(n[e])||a(o[e]):n[e]&&n[e][t]||o[e]&&o[e][t]}},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},function(e,t,r){var n=r(16),o=r(57),a=r(2),i=r(29),l=Object.defineProperty;t.f=n?l:function(e,t,r){if(a(e),t=i(t,!0),a(r),o)try{return l(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){var n=r(3),o=r(48);e.exports=n?o:function(e){return Map.prototype.entries.call(e)}},function(e,t,r){var n=r(12);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(e,t,r){var n=r(2),o=r(5),a=r(6)("species");e.exports=function(e,t){var r,i=n(e).constructor;return void 0===i||void 0==(r=n(i)[a])?t:o(r)}},function(e,t,r){var n=r(16),o=r(14),a=r(23);e.exports=n?function(e,t,r){return o.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){var n=r(3),o=r(48);e.exports=n?o:function(e){return Set.prototype.values.call(e)}},function(e,t,r){var n=r(56),o=r(37);e.exports=function(e){return n(o(e))}},function(e,t,r){var n=r(8),o=r(18),a=r(11),i=r(38),l=r(59),u=r(24),c=u.get,s=u.enforce,f=String(String).split("String");(e.exports=function(e,t,r,l){var u,c=!!l&&!!l.unsafe,d=!!l&&!!l.enumerable,p=!!l&&!!l.noTargetGet;"function"==typeof r&&("string"!=typeof t||a(r,"name")||o(r,"name",t),(u=s(r)).source||(u.source=f.join("string"==typeof t?t:""))),e!==n?(c?!p&&e[t]&&(d=!0):delete e[t],d?e[t]=r:o(e,t,r)):d?e[t]=r:i(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||l(this)}))},function(e,t,r){var n=r(14).f,o=r(11),a=r(6)("toStringTag");e.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,a)&&n(e,a,{configurable:!0,value:t})}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n,o,a,i=r(92),l=r(8),u=r(13),c=r(18),s=r(11),f=r(39),d=r(30),p=r(25),h=l.WeakMap;if(i){var g=f.state||(f.state=new h),v=g.get,m=g.has,y=g.set;n=function(e,t){return t.facade=e,y.call(g,e,t),t},o=function(e){return v.call(g,e)||{}},a=function(e){return m.call(g,e)}}else{var b=d("state");p[b]=!0,n=function(e,t){return t.facade=e,c(e,b,t),t},o=function(e){return s(e,b)?e[b]:{}},a=function(e){return s(e,b)}}e.exports={set:n,get:o,has:a,enforce:function(e){return a(e)?o(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!u(t)||(r=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}},function(e,t){e.exports={}},function(e,t,r){var n=r(42),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},function(e,t){e.exports={}},function(e,t,r){var n=r(37);e.exports=function(e){return Object(n(e))}},function(e,t,r){var n=r(13);e.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can\'t convert object to primitive value")}},function(e,t,r){var n=r(40),o=r(31),a=n("keys");e.exports=function(e){return a[e]||(a[e]=o(e))}},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++r+n).toString(36)}},function(e,t,r){var n,o=r(2),a=r(99),i=r(43),l=r(25),u=r(100),c=r(58),s=r(30),f=s("IE_PROTO"),d=function(){},p=function(e){return"<script>"+e+"</"+"script>"},h=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;h=n?function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t}(n):((t=c("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F);for(var r=i.length;r--;)delete h.prototype[i[r]];return h()};l[f]=!0,e.exports=Object.create||function(e,t){var r;return null!==e?(d.prototype=o(e),r=new d,d.prototype=null,r[f]=e):r=h(),void 0===t?r:a(r,t)}},function(e,t,r){"use strict";var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=[[{color:"0, 0, 0",class:"ansi-black"},{color:"187, 0, 0",class:"ansi-red"},{color:"0, 187, 0",class:"ansi-green"},{color:"187, 187, 0",class:"ansi-yellow"},{color:"0, 0, 187",class:"ansi-blue"},{color:"187, 0, 187",class:"ansi-magenta"},{color:"0, 187, 187",class:"ansi-cyan"},{color:"255,255,255",class:"ansi-white"}],[{color:"85, 85, 85",class:"ansi-bright-black"},{color:"255, 85, 85",class:"ansi-bright-red"},{color:"0, 255, 0",class:"ansi-bright-green"},{color:"255, 255, 85",class:"ansi-bright-yellow"},{color:"85, 85, 255",class:"ansi-bright-blue"},{color:"255, 85, 255",class:"ansi-bright-magenta"},{color:"85, 255, 255",class:"ansi-bright-cyan"},{color:"255, 255, 255",class:"ansi-bright-white"}]],a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fg=this.bg=this.fg_truecolor=this.bg_truecolor=null,this.bright=0}return n(e,null,[{key:"escapeForHtml",value:function(t){return(new e).escapeForHtml(t)}},{key:"linkify",value:function(t){return(new e).linkify(t)}},{key:"ansiToHtml",value:function(t,r){return(new e).ansiToHtml(t,r)}},{key:"ansiToJson",value:function(t,r){return(new e).ansiToJson(t,r)}},{key:"ansiToText",value:function(t){return(new e).ansiToText(t)}}]),n(e,[{key:"setupPalette",value:function(){this.PALETTE_COLORS=[];for(var e=0;e<2;++e)for(var t=0;t<8;++t)this.PALETTE_COLORS.push(o[e][t].color);for(var r=[0,95,135,175,215,255],n=function(e,t,n){return r[e]+", "+r[t]+", "+r[n]},a=0;a<6;++a)for(var i=0;i<6;++i)for(var l=0;l<6;++l)this.PALETTE_COLORS.push(n(a,i,l));for(var u=8,c=0;c<24;++c,u+=10)this.PALETTE_COLORS.push(n(u,u,u))}},{key:"escapeForHtml",value:function(e){return e.replace(/[&<>]/gm,(function(e){return"&"==e?"&amp;":"<"==e?"&lt;":">"==e?"&gt;":""}))}},{key:"linkify",value:function(e){return e.replace(/(https?:\\/\\/[^\\s]+)/gm,(function(e){return\'<a href="\'+e+\'">\'+e+"</a>"}))}},{key:"ansiToHtml",value:function(e,t){return this.process(e,t,!0)}},{key:"ansiToJson",value:function(e,t){return(t=t||{}).json=!0,t.clearLine=!1,this.process(e,t,!0)}},{key:"ansiToText",value:function(e){return this.process(e,{},!1)}},{key:"process",value:function(e,t,r){var n=this,o=e.split(/\\033\\[/),a=o.shift();void 0!==t&&null!==t||(t={}),t.clearLine=/\\r/.test(e);var i=o.map((function(e){return n.processChunk(e,t,r)}));if(t&&t.json){var l=this.processChunkJson("");return l.content=a,l.clearLine=t.clearLine,i.unshift(l),t.remove_empty&&(i=i.filter((function(e){return!e.isEmpty()}))),i}return i.unshift(a),i.join("")}},{key:"processChunkJson",value:function(e,t,r){var n=(t="undefined"==typeof t?{}:t).use_classes="undefined"!=typeof t.use_classes&&t.use_classes,a=t.key=n?"class":"color",i={content:e,fg:null,bg:null,fg_truecolor:null,bg_truecolor:null,clearLine:t.clearLine,decoration:null,was_processed:!1,isEmpty:function(){return!i.content}},l=e.match(/^([!\\x3c-\\x3f]*)([\\d;]*)([\\x20-\\x2c]*[\\x40-\\x7e])([\\s\\S]*)/m);if(!l)return i;i.content=l[4];var u=l[2].split(";");if(""!==l[1]||"m"!==l[3])return i;if(!r)return i;var c=this;for(c.decoration=null;u.length>0;){var s=u.shift(),f=parseInt(s);if(isNaN(f)||0===f)c.fg=c.bg=c.decoration=null;else if(1===f)c.decoration="bold";else if(2===f)c.decoration="dim";else if(3==f)c.decoration="italic";else if(4==f)c.decoration="underline";else if(5==f)c.decoration="blink";else if(7===f)c.decoration="reverse";else if(8===f)c.decoration="hidden";else if(9===f)c.decoration="strikethrough";else if(39==f)c.fg=null;else if(49==f)c.bg=null;else if(f>=30&&f<38)c.fg=o[0][f%10][a];else if(f>=90&&f<98)c.fg=o[1][f%10][a];else if(f>=40&&f<48)c.bg=o[0][f%10][a];else if(f>=100&&f<108)c.bg=o[1][f%10][a];else if(38===f||48===f){var d=38===f;if(u.length>=1){var p=u.shift();if("5"===p&&u.length>=1){var h=parseInt(u.shift());if(h>=0&&h<=255)if(n){var g=h>=16?"ansi-palette-"+h:o[h>7?1:0][h%8].class;d?c.fg=g:c.bg=g}else this.PALETTE_COLORS||c.setupPalette(),d?c.fg=this.PALETTE_COLORS[h]:c.bg=this.PALETTE_COLORS[h]}else if("2"===p&&u.length>=3){var v=parseInt(u.shift()),m=parseInt(u.shift()),y=parseInt(u.shift());if(v>=0&&v<=255&&m>=0&&m<=255&&y>=0&&y<=255){var b=v+", "+m+", "+y;n?d?(c.fg="ansi-truecolor",c.fg_truecolor=b):(c.bg="ansi-truecolor",c.bg_truecolor=b):d?c.fg=b:c.bg=b}}}}}if(null===c.fg&&null===c.bg&&null===c.decoration)return i;return i.fg=c.fg,i.bg=c.bg,i.fg_truecolor=c.fg_truecolor,i.bg_truecolor=c.bg_truecolor,i.decoration=c.decoration,i.was_processed=!0,i}},{key:"processChunk",value:function(e,t,r){var n=this;t=t||{};var o=this.processChunkJson(e,t,r);if(t.json)return o;if(o.isEmpty())return"";if(!o.was_processed)return o.content;var a=t.use_classes,i=[],l=[],u={},c=function(e){var t=[],r=void 0;for(r in e)e.hasOwnProperty(r)&&t.push("data-"+r+\'="\'+n.escapeForHtml(e[r])+\'"\');return t.length>0?" "+t.join(" "):""};return o.fg&&(a?(l.push(o.fg+"-fg"),null!==o.fg_truecolor&&(u["ansi-truecolor-fg"]=o.fg_truecolor,o.fg_truecolor=null)):i.push("color:rgb("+o.fg+")")),o.bg&&(a?(l.push(o.bg+"-bg"),null!==o.bg_truecolor&&(u["ansi-truecolor-bg"]=o.bg_truecolor,o.bg_truecolor=null)):i.push("background-color:rgb("+o.bg+")")),o.decoration&&(a?l.push("ansi-"+o.decoration):"bold"===o.decoration?i.push("font-weight:bold"):"dim"===o.decoration?i.push("opacity:0.5"):"italic"===o.decoration?i.push("font-style:italic"):"reverse"===o.decoration?i.push("filter:invert(100%)"):"hidden"===o.decoration?i.push("visibility:hidden"):"strikethrough"===o.decoration?i.push("text-decoration:line-through"):i.push("text-decoration:"+o.decoration)),a?\'<span class="\'+l.join(" ")+\'"\'+c(u)+">"+o.content+"</span>":\'<span style="\'+i.join(";")+\'"\'+c(u)+">"+o.content+"</span>"}}]),e}();e.exports=a},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===typeof window&&(r=window)}e.exports=r},function(e,t,r){var n=r(16),o=r(55),a=r(23),i=r(20),l=r(29),u=r(11),c=r(57),s=Object.getOwnPropertyDescriptor;t.f=n?s:function(e,t){if(e=i(e),t=l(t,!0),c)try{return s(e,t)}catch(e){}if(u(e,t))return a(!o.f.call(e,t),e[t])}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can\'t call method on "+e);return e}},function(e,t,r){var n=r(8),o=r(18);e.exports=function(e,t){try{o(n,e,t)}catch(r){n[e]=t}return t}},function(e,t,r){var n=r(8),o=r(38),a="__core-js_shared__",i=n[a]||o(a,{});e.exports=i},function(e,t,r){var n=r(3),o=r(39);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.8.3",mode:n?"pure":"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})},function(e,t,r){var n=r(62),o=r(43).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t,r){var n=r(12);e.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(e,t,r){var n=r(68),o=r(27),a=r(6)("iterator");e.exports=function(e){if(void 0!=e)return e[a]||e["@@iterator"]||o[n(e)]}},function(e,t,r){var n={};n[r(6)("toStringTag")]="z",e.exports="[object z]"===String(n)},function(e,t,r){"use strict";var n=r(1),o=r(102),a=r(76),i=r(72),l=r(22),u=r(18),c=r(21),s=r(6),f=r(3),d=r(27),p=r(75),h=p.IteratorPrototype,g=p.BUGGY_SAFARI_ITERATORS,v=s("iterator"),m="keys",y="values",b="entries",w=function(){return this};e.exports=function(e,t,r,s,p,k,E){o(r,t,s);var x,S,_,T=function(e){if(e===p&&N)return N;if(!g&&e in P)return P[e];switch(e){case m:case y:case b:return function(){return new r(this,e)}}return function(){return new r(this)}},C=t+" Iterator",O=!1,P=e.prototype,R=P[v]||P["@@iterator"]||p&&P[p],N=!g&&R||T(p),L="Array"==t&&P.entries||R;if(L&&(x=a(L.call(new e)),h!==Object.prototype&&x.next&&(f||a(x)===h||(i?i(x,h):"function"!=typeof x[v]&&u(x,v,w)),l(x,C,!0,!0),f&&(d[C]=w))),p==y&&R&&R.name!==y&&(O=!0,N=function(){return R.call(this)}),f&&!E||P[v]===N||u(P,v,N),d[t]=N,p)if(S={values:T(y),keys:k?N:T(m),entries:T(b)},E)for(_ in S)(g||O||!(_ in P))&&c(P,_,S[_]);else n({target:t,proto:!0,forced:g||O},S);return S}},function(e,t,r){var n=r(2),o=r(45);e.exports=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return n(t.call(e))}},function(e,t,r){var n=r(36);e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,l,u=i(e),c=1;c<arguments.length;c++){for(var s in r=Object(arguments[c]))o.call(r,s)&&(u[s]=r[s]);if(n){l=n(r);for(var f=0;f<l.length;f++)a.call(r,l[f])&&(u[l[f]]=r[l[f]])}}return u}},function(e,t){var r,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u,c=[],s=!1,f=-1;function d(){s&&u&&(s=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!s){var e=l(d);s=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||s||l(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){var n=r(191);e.exports=function(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(u)throw i}}}}},function(e,t,r){"use strict";!function e(){if("undefined"!==typeof{}&&"function"===typeof{}.checkDCE)try{({}).checkDCE(e)}catch(e){console.error(e)}}(),e.exports=r(184)},function(e,t,r){"use strict";var n=r(1),o=r(8),a=r(64),i=r(21),l=r(65),u=r(4),c=r(70),s=r(13),f=r(12),d=r(71),p=r(22),h=r(97);e.exports=function(e,t,r){var g=-1!==e.indexOf("Map"),v=-1!==e.indexOf("Weak"),m=g?"set":"add",y=o[e],b=y&&y.prototype,w=y,k={},E=function(e){var t=b[e];i(b,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(v&&!s(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return v&&!s(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(v&&!s(e))&&t.call(this,0===e?0:e)}:function(e,r){return t.call(this,0===e?0:e,r),this})};if(a(e,"function"!=typeof y||!(v||b.forEach&&!f((function(){(new y).entries().next()})))))w=r.getConstructor(t,e,g,m),l.REQUIRED=!0;else if(a(e,!0)){var x=new w,S=x[m](v?{}:-0,1)!=x,_=f((function(){x.has(1)})),T=d((function(e){new y(e)})),C=!v&&f((function(){for(var e=new y,t=5;t--;)e[m](t,t);return!e.has(-0)}));T||((w=t((function(t,r){c(t,w,e);var n=h(new y,t,w);return void 0!=r&&u(r,n[m],{that:n,AS_ENTRIES:g}),n}))).prototype=b,b.constructor=w),(_||C)&&(E("delete"),E("has"),g&&E("get")),(C||S)&&E(m),v&&b.clear&&delete b.clear}return k[e]=w,n({global:!0,forced:w!=y},k),p(w,e),v||r.setStrong(w,e,g),w}},function(e,t,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!n.call({1:2},1);t.f=a?function(e){var t=o(this,e);return!!t&&t.enumerable}:n},function(e,t,r){var n=r(12),o=r(36),a="".split;e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a.call(e,""):Object(e)}:Object},function(e,t,r){var n=r(16),o=r(12),a=r(58);e.exports=!n&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},function(e,t,r){var n=r(8),o=r(13),a=n.document,i=o(a)&&o(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},function(e,t,r){var n=r(39),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(e){return o.call(e)}),e.exports=n.inspectSource},function(e,t,r){var n=r(11),o=r(93),a=r(35),i=r(14);e.exports=function(e,t){for(var r=o(t),l=i.f,u=a.f,c=0;c<r.length;c++){var s=r[c];n(e,s)||l(e,s,u(t,s))}}},function(e,t,r){var n=r(8);e.exports=n},function(e,t,r){var n=r(11),o=r(20),a=r(94).indexOf,i=r(25);e.exports=function(e,t){var r,l=o(e),u=0,c=[];for(r in l)!n(i,r)&&n(l,r)&&c.push(r);for(;t.length>u;)n(l,r=t[u++])&&(~a(c,r)||c.push(r));return c}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,r){var n=r(12),o=/#|\\.prototype\\./,a=function(e,t){var r=l[i(e)];return r==c||r!=u&&("function"==typeof t?n(t):!!t)},i=a.normalize=function(e){return String(e).replace(o,".").toLowerCase()},l=a.data={},u=a.NATIVE="N",c=a.POLYFILL="P";e.exports=a},function(e,t,r){var n=r(25),o=r(13),a=r(11),i=r(14).f,l=r(31),u=r(96),c=l("meta"),s=0,f=Object.isExtensible||function(){return!0},d=function(e){i(e,c,{value:{objectID:"O"+ ++s,weakData:{}}})},p=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,c)){if(!f(e))return"F";if(!t)return"E";d(e)}return e[c].objectID},getWeakData:function(e,t){if(!a(e,c)){if(!f(e))return!0;if(!t)return!1;d(e)}return e[c].weakData},onFreeze:function(e){return u&&p.REQUIRED&&f(e)&&!a(e,c)&&d(e),e}};n[c]=!0},function(e,t,r){var n=r(6),o=r(27),a=n("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||i[a]===e)}},function(e,t,r){var n=r(44);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,t,r){var n=r(46),o=r(36),a=r(6)("toStringTag"),i="Arguments"==o(function(){return arguments}());e.exports=n?o:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),a))?r:i?o(t):"Object"==(n=o(t))&&"function"==typeof t.callee?"Arguments":n}},function(e,t,r){var n=r(2);e.exports=function(e){var t=e.return;if(void 0!==t)return n(t.call(e)).value}},function(e,t){e.exports=function(e,t,r){if(!(e instanceof t))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return e}},function(e,t,r){var n=r(6)("iterator"),o=!1;try{var a=0,i={next:function(){return{done:!!a++}},return:function(){o=!0}};i[n]=function(){return this},Array.from(i,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var a={};a[n]=function(){return{next:function(){return{done:r=!0}}}},e(a)}catch(e){}return r}},function(e,t,r){var n=r(2),o=r(98);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),t=r instanceof Array}catch(e){}return function(r,a){return n(r),o(a),t?e.call(r,a):r.__proto__=a,r}}():void 0)},function(e,t,r){"use strict";var n=r(14).f,o=r(32),a=r(101),i=r(7),l=r(70),u=r(4),c=r(47),s=r(104),f=r(16),d=r(65).fastKey,p=r(24),h=p.set,g=p.getterFor;e.exports={getConstructor:function(e,t,r,c){var s=e((function(e,n){l(e,s,t),h(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),f||(e.size=0),void 0!=n&&u(n,e[c],{that:e,AS_ENTRIES:r})})),p=g(t),v=function(e,t,r){var n,o,a=p(e),i=m(e,t);return i?i.value=r:(a.last=i={index:o=d(t,!0),key:t,value:r,previous:n=a.last,next:void 0,removed:!1},a.first||(a.first=i),n&&(n.next=i),f?a.size++:e.size++,"F"!==o&&(a.index[o]=i)),e},m=function(e,t){var r,n=p(e),o=d(t);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==t)return r};return a(s.prototype,{clear:function(){for(var e=p(this),t=e.index,r=e.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete t[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:this.size=0},delete:function(e){var t=this,r=p(t),n=m(t,e);if(n){var o=n.next,a=n.previous;delete r.index[n.index],n.removed=!0,a&&(a.next=o),o&&(o.previous=a),r.first==n&&(r.first=o),r.last==n&&(r.last=a),f?r.size--:t.size--}return!!n},forEach:function(e){for(var t,r=p(this),n=i(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:r.first;)for(n(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!m(this,e)}}),a(s.prototype,r?{get:function(e){var t=m(this,e);return t&&t.value},set:function(e,t){return v(this,0===e?0:e,t)}}:{add:function(e){return v(this,e=0===e?0:e,e)}}),f&&n(s.prototype,"size",{get:function(){return p(this).size}}),s},setStrong:function(e,t,r){var n=t+" Iterator",o=g(t),a=g(n);c(e,t,(function(e,t){h(this,{type:n,target:e,state:o(e),kind:t,last:void 0})}),(function(){for(var e=a(this),t=e.kind,r=e.last;r&&r.removed;)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),s(t)}}},function(e,t,r){var n=r(62),o=r(43);e.exports=Object.keys||function(e){return n(e,o)}},function(e,t,r){"use strict";var n,o,a,i=r(12),l=r(76),u=r(18),c=r(11),s=r(6),f=r(3),d=s("iterator"),p=!1;[].keys&&("next"in(a=[].keys())?(o=l(l(a)))!==Object.prototype&&(n=o):p=!0);var h=void 0==n||i((function(){var e={};return n[d].call(e)!==e}));h&&(n={}),f&&!h||c(n,d)||u(n,d,(function(){return this})),e.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p}},function(e,t,r){var n=r(11),o=r(28),a=r(30),i=r(103),l=a("IE_PROTO"),u=Object.prototype;e.exports=i?Object.getPrototypeOf:function(e){return e=o(e),n(e,l)?e[l]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},function(e,t,r){var n=r(46),o=r(21),a=r(105);n||o(Object.prototype,"toString",a,{unsafe:!0})},function(e,t,r){"use strict";var n=r(107).charAt,o=r(24),a=r(47),i="String Iterator",l=o.set,u=o.getterFor(i);a(String,"String",(function(e){l(this,{type:i,string:String(e),index:0})}),(function(){var e,t=u(this),r=t.string,o=t.index;return o>=r.length?{value:void 0,done:!0}:(e=n(r,o),t.index+=e.length,{value:e,done:!1})}))},function(e,t,r){"use strict";var n=r(2),o=r(5);e.exports=function(){for(var e,t=n(this),r=o(t.delete),a=!0,i=0,l=arguments.length;i<l;i++)e=r.call(t,arguments[i]),a=a&&e;return!!a}},function(e,t,r){"use strict";var n=r(5),o=r(7),a=r(4);e.exports=function(e){var t,r,i,l,u=arguments.length,c=u>1?arguments[1]:void 0;return n(this),(t=void 0!==c)&&n(c),void 0==e?new this:(r=[],t?(i=0,l=o(c,u>2?arguments[2]:void 0,2),a(e,(function(e){r.push(l(e,i++))}))):a(e,r.push,{that:r}),new this(r))}},function(e,t,r){"use strict";e.exports=function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}},function(e,t,r){var n=r(6);t.f=n},function(e,t,r){var n=r(13),o=r(49),a=r(6)("species");e.exports=function(e,t){var r;return o(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[a])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},function(e,t,r){"use strict";var n=r(29),o=r(14),a=r(23);e.exports=function(e,t,r){var i=n(t);i in e?o.f(e,i,a(0,r)):e[i]=r}},function(e,t,r){var n,o,a=r(8),i=r(168),l=a.process,u=l&&l.versions,c=u&&u.v8;c?o=(n=c.split("."))[0]+n[1]:i&&(!(n=i.match(/Edge\\/(\\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\\/(\\d+)/))&&(o=n[1]),e.exports=o&&+o},function(e,t,r){"use strict";var n=r(178);function o(){}var a=null,i={};function l(e){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof e)throw new TypeError("Promise constructor\'s argument is not a function");this._U=0,this._V=0,this._W=null,this._X=null,e!==o&&p(e,this)}function u(e,t){for(;3===e._V;)e=e._W;if(l._Y&&l._Y(e),0===e._V)return 0===e._U?(e._U=1,void(e._X=t)):1===e._U?(e._U=2,void(e._X=[e._X,t])):void e._X.push(t);!function(e,t){n((function(){var r=1===e._V?t.onFulfilled:t.onRejected;if(null!==r){var n=function(e,t){try{return e(t)}catch(e){return a=e,i}}(r,e._W);n===i?s(t.promise,a):c(t.promise,n)}else 1===e._V?c(t.promise,e._W):s(t.promise,e._W)}))}(e,t)}function c(e,t){if(t===e)return s(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"===typeof t||"function"===typeof t)){var r=function(e){try{return e.then}catch(e){return a=e,i}}(t);if(r===i)return s(e,a);if(r===e.then&&t instanceof l)return e._V=3,e._W=t,void f(e);if("function"===typeof r)return void p(r.bind(t),e)}e._V=1,e._W=t,f(e)}function s(e,t){e._V=2,e._W=t,l._Z&&l._Z(e,t),f(e)}function f(e){if(1===e._U&&(u(e,e._X),e._X=null),2===e._U){for(var t=0;t<e._X.length;t++)u(e,e._X[t]);e._X=null}}function d(e,t,r){this.onFulfilled="function"===typeof e?e:null,this.onRejected="function"===typeof t?t:null,this.promise=r}function p(e,t){var r=!1,n=function(e,t,r){try{e(t,r)}catch(e){return a=e,i}}(e,(function(e){r||(r=!0,c(t,e))}),(function(e){r||(r=!0,s(t,e))}));r||n!==i||(r=!0,s(t,a))}e.exports=l,l._Y=null,l._Z=null,l._0=o,l.prototype.then=function(e,t){if(this.constructor!==l)return function(e,t,r){return new e.constructor((function(n,a){var i=new l(o);i.then(n,a),u(e,new d(t,r,i))}))}(this,e,t);var r=new l(o);return u(this,new d(e,t,r)),r}},function(e,t,r){var n=r(204),o={};for(var a in n)n.hasOwnProperty(a)&&(o[n[a]]=a);var i=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var l in i)if(i.hasOwnProperty(l)){if(!("channels"in i[l]))throw new Error("missing channels property: "+l);if(!("labels"in i[l]))throw new Error("missing channel labels property: "+l);if(i[l].labels.length!==i[l].channels)throw new Error("channel and label counts mismatch: "+l);var u=i[l].channels,c=i[l].labels;delete i[l].channels,delete i[l].labels,Object.defineProperty(i[l],"channels",{value:u}),Object.defineProperty(i[l],"labels",{value:c})}i.rgb.hsl=function(e){var t,r,n=e[0]/255,o=e[1]/255,a=e[2]/255,i=Math.min(n,o,a),l=Math.max(n,o,a),u=l-i;return l===i?t=0:n===l?t=(o-a)/u:o===l?t=2+(a-n)/u:a===l&&(t=4+(n-o)/u),(t=Math.min(60*t,360))<0&&(t+=360),r=(i+l)/2,[t,100*(l===i?0:r<=.5?u/(l+i):u/(2-l-i)),100*r]},i.rgb.hsv=function(e){var t,r,n,o,a,i=e[0]/255,l=e[1]/255,u=e[2]/255,c=Math.max(i,l,u),s=c-Math.min(i,l,u),f=function(e){return(c-e)/6/s+.5};return 0===s?o=a=0:(a=s/c,t=f(i),r=f(l),n=f(u),i===c?o=n-r:l===c?o=1/3+t-n:u===c&&(o=2/3+r-t),o<0?o+=1:o>1&&(o-=1)),[360*o,100*a,100*c]},i.rgb.hwb=function(e){var t=e[0],r=e[1],n=e[2];return[i.rgb.hsl(e)[0],100*(1/255*Math.min(t,Math.min(r,n))),100*(n=1-1/255*Math.max(t,Math.max(r,n)))]},i.rgb.cmyk=function(e){var t,r=e[0]/255,n=e[1]/255,o=e[2]/255;return[100*((1-r-(t=Math.min(1-r,1-n,1-o)))/(1-t)||0),100*((1-n-t)/(1-t)||0),100*((1-o-t)/(1-t)||0),100*t]},i.rgb.keyword=function(e){var t=o[e];if(t)return t;var r,a,i,l=1/0;for(var u in n)if(n.hasOwnProperty(u)){var c=n[u],s=(a=e,i=c,Math.pow(a[0]-i[0],2)+Math.pow(a[1]-i[1],2)+Math.pow(a[2]-i[2],2));s<l&&(l=s,r=u)}return r},i.keyword.rgb=function(e){return n[e]},i.rgb.xyz=function(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255;return[100*(.4124*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.3576*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*t+.7152*r+.0722*n),100*(.0193*t+.1192*r+.9505*n)]},i.rgb.lab=function(e){var t=i.rgb.xyz(e),r=t[0],n=t[1],o=t[2];return n/=100,o/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(r-n),200*(n-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]},i.hsl.rgb=function(e){var t,r,n,o,a,i=e[0]/360,l=e[1]/100,u=e[2]/100;if(0===l)return[a=255*u,a,a];t=2*u-(r=u<.5?u*(1+l):u+l-u*l),o=[0,0,0];for(var c=0;c<3;c++)(n=i+1/3*-(c-1))<0&&n++,n>1&&n--,a=6*n<1?t+6*(r-t)*n:2*n<1?r:3*n<2?t+(r-t)*(2/3-n)*6:t,o[c]=255*a;return o},i.hsl.hsv=function(e){var t=e[0],r=e[1]/100,n=e[2]/100,o=r,a=Math.max(n,.01);return r*=(n*=2)<=1?n:2-n,o*=a<=1?a:2-a,[t,100*(0===n?2*o/(a+o):2*r/(n+r)),100*((n+r)/2)]},i.hsv.rgb=function(e){var t=e[0]/60,r=e[1]/100,n=e[2]/100,o=Math.floor(t)%6,a=t-Math.floor(t),i=255*n*(1-r),l=255*n*(1-r*a),u=255*n*(1-r*(1-a));switch(n*=255,o){case 0:return[n,u,i];case 1:return[l,n,i];case 2:return[i,n,u];case 3:return[i,l,n];case 4:return[u,i,n];case 5:return[n,i,l]}},i.hsv.hsl=function(e){var t,r,n,o=e[0],a=e[1]/100,i=e[2]/100,l=Math.max(i,.01);return n=(2-a)*i,r=a*l,[o,100*(r=(r/=(t=(2-a)*l)<=1?t:2-t)||0),100*(n/=2)]},i.hwb.rgb=function(e){var t,r,n,o,a,i,l,u=e[0]/360,c=e[1]/100,s=e[2]/100,f=c+s;switch(f>1&&(c/=f,s/=f),n=6*u-(t=Math.floor(6*u)),0!==(1&t)&&(n=1-n),o=c+n*((r=1-s)-c),t){default:case 6:case 0:a=r,i=o,l=c;break;case 1:a=o,i=r,l=c;break;case 2:a=c,i=r,l=o;break;case 3:a=c,i=o,l=r;break;case 4:a=o,i=c,l=r;break;case 5:a=r,i=c,l=o}return[255*a,255*i,255*l]},i.cmyk.rgb=function(e){var t=e[0]/100,r=e[1]/100,n=e[2]/100,o=e[3]/100;return[255*(1-Math.min(1,t*(1-o)+o)),255*(1-Math.min(1,r*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o))]},i.xyz.rgb=function(e){var t,r,n,o=e[0]/100,a=e[1]/100,i=e[2]/100;return r=-.9689*o+1.8758*a+.0415*i,n=.0557*o+-.204*a+1.057*i,t=(t=3.2406*o+-1.5372*a+-.4986*i)>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,[255*(t=Math.min(Math.max(0,t),1)),255*(r=Math.min(Math.max(0,r),1)),255*(n=Math.min(Math.max(0,n),1))]},i.xyz.lab=function(e){var t=e[0],r=e[1],n=e[2];return r/=100,n/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(t-r),200*(r-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},i.lab.xyz=function(e){var t,r,n,o=e[0];t=e[1]/500+(r=(o+16)/116),n=r-e[2]/200;var a=Math.pow(r,3),i=Math.pow(t,3),l=Math.pow(n,3);return r=a>.008856?a:(r-16/116)/7.787,t=i>.008856?i:(t-16/116)/7.787,n=l>.008856?l:(n-16/116)/7.787,[t*=95.047,r*=100,n*=108.883]},i.lab.lch=function(e){var t,r=e[0],n=e[1],o=e[2];return(t=360*Math.atan2(o,n)/2/Math.PI)<0&&(t+=360),[r,Math.sqrt(n*n+o*o),t]},i.lch.lab=function(e){var t,r=e[0],n=e[1];return t=e[2]/360*2*Math.PI,[r,n*Math.cos(t),n*Math.sin(t)]},i.rgb.ansi16=function(e){var t=e[0],r=e[1],n=e[2],o=1 in arguments?arguments[1]:i.rgb.hsv(e)[2];if(0===(o=Math.round(o/50)))return 30;var a=30+(Math.round(n/255)<<2|Math.round(r/255)<<1|Math.round(t/255));return 2===o&&(a+=60),a},i.hsv.ansi16=function(e){return i.rgb.ansi16(i.hsv.rgb(e),e[2])},i.rgb.ansi256=function(e){var t=e[0],r=e[1],n=e[2];return t===r&&r===n?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},i.ansi16.rgb=function(e){var t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),[t=t/10.5*255,t,t];var r=.5*(1+~~(e>50));return[(1&t)*r*255,(t>>1&1)*r*255,(t>>2&1)*r*255]},i.ansi256.rgb=function(e){if(e>=232){var t=10*(e-232)+8;return[t,t,t]}var r;return e-=16,[Math.floor(e/36)/5*255,Math.floor((r=e%36)/6)/5*255,r%6/5*255]},i.rgb.hex=function(e){var t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},i.hex.rgb=function(e){var t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];var r=t[0];3===t[0].length&&(r=r.split("").map((function(e){return e+e})).join(""));var n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},i.rgb.hcg=function(e){var t,r=e[0]/255,n=e[1]/255,o=e[2]/255,a=Math.max(Math.max(r,n),o),i=Math.min(Math.min(r,n),o),l=a-i;return t=l<=0?0:a===r?(n-o)/l%6:a===n?2+(o-r)/l:4+(r-n)/l+4,t/=6,[360*(t%=1),100*l,100*(l<1?i/(1-l):0)]},i.hsl.hcg=function(e){var t=e[1]/100,r=e[2]/100,n=1,o=0;return(n=r<.5?2*t*r:2*t*(1-r))<1&&(o=(r-.5*n)/(1-n)),[e[0],100*n,100*o]},i.hsv.hcg=function(e){var t=e[1]/100,r=e[2]/100,n=t*r,o=0;return n<1&&(o=(r-n)/(1-n)),[e[0],100*n,100*o]},i.hcg.rgb=function(e){var t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];var o,a=[0,0,0],i=t%1*6,l=i%1,u=1-l;switch(Math.floor(i)){case 0:a[0]=1,a[1]=l,a[2]=0;break;case 1:a[0]=u,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=l;break;case 3:a[0]=0,a[1]=u,a[2]=1;break;case 4:a[0]=l,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=u}return o=(1-r)*n,[255*(r*a[0]+o),255*(r*a[1]+o),255*(r*a[2]+o)]},i.hcg.hsv=function(e){var t=e[1]/100,r=t+e[2]/100*(1-t),n=0;return r>0&&(n=t/r),[e[0],100*n,100*r]},i.hcg.hsl=function(e){var t=e[1]/100,r=e[2]/100*(1-t)+.5*t,n=0;return r>0&&r<.5?n=t/(2*r):r>=.5&&r<1&&(n=t/(2*(1-r))),[e[0],100*n,100*r]},i.hcg.hwb=function(e){var t=e[1]/100,r=t+e[2]/100*(1-t);return[e[0],100*(r-t),100*(1-r)]},i.hwb.hcg=function(e){var t=e[1]/100,r=1-e[2]/100,n=r-t,o=0;return n<1&&(o=(r-n)/(1-n)),[e[0],100*n,100*o]},i.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},i.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},i.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},i.gray.hsl=i.gray.hsv=function(e){return[0,0,e[0]]},i.gray.hwb=function(e){return[0,100,e[0]]},i.gray.cmyk=function(e){return[0,0,0,e[0]]},i.gray.lab=function(e){return[e[0],0,0]},i.gray.hex=function(e){var t=255&Math.round(e[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},i.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(187);t.XmlEntities=n.XmlEntities;var o=r(188);t.Html4Entities=o.Html4Entities;var a=r(189);t.Html5Entities=a.Html5Entities,t.AllHtmlEntities=a.Html5Entities},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.codeFrameColumns=c,t.default=function(t,r,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!a){a=!0;var i="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if(e.emitWarning)e.emitWarning(i,"DeprecationWarning");else{var l=new Error(i);l.name="DeprecationWarning",console.warn(new Error(i))}}var u={start:{column:n=Math.max(n,0),line:r}};return c(t,u,o)};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=n?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(190));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}var a=!1;function i(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}var l=/\\r\\n|[\\n\\r\\u2028\\u2029]/;function u(e,t,r){var n=Object.assign({column:0,line:-1},e.start),o=Object.assign({},n,e.end),a=r||{},i=a.linesAbove,l=void 0===i?2:i,u=a.linesBelow,c=void 0===u?3:u,s=n.line,f=n.column,d=o.line,p=o.column,h=Math.max(s-(l+1),0),g=Math.min(t.length,d+c);-1===s&&(h=0),-1===d&&(g=t.length);var v=d-s,m={};if(v)for(var y=0;y<=v;y++){var b=y+s;if(f)if(0===y){var w=t[b-1].length;m[b]=[f,w-f+1]}else if(y===v)m[b]=[0,p];else{var k=t[b-y].length;m[b]=[0,k]}else m[b]=!0}else m[s]=f===p?!f||[f,0]:[f,p-f];return{start:h,end:g,markerLines:m}}function c(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=(r.highlightCode||r.forceColor)&&(0,n.shouldHighlight)(r),a=(0,n.getChalk)(r),c=i(a),s=function(e,t){return o?e(t):t},f=e.split(l),d=u(t,f,r),p=d.start,h=d.end,g=d.markerLines,v=t.start&&"number"===typeof t.start.column,m=String(h).length,y=o?(0,n.default)(e,r):e,b=y.split(l).slice(p,h).map((function(e,t){var n=p+1+t,o=" ".concat(n).slice(-m),a=" ".concat(o," | "),i=g[n],l=!g[n+1];if(i){var u="";if(Array.isArray(i)){var f=e.slice(0,Math.max(i[0]-1,0)).replace(/[^\\t]/g," "),d=i[1]||1;u=["\\n ",s(c.gutter,a.replace(/\\d/g," ")),f,s(c.marker,"^").repeat(d)].join(""),l&&r.message&&(u+=" "+s(c.message,r.message))}return[s(c.marker,">"),s(c.gutter,a),e,u].join("")}return" ".concat(s(c.gutter,a)).concat(e)})).join("\\n");return r.message&&!v&&(b="".concat(" ".repeat(m+1)).concat(r.message,"\\n").concat(b)),o?a.reset(b):b}}).call(this,r(51))},function(e,t,r){"use strict";r(91),r(77),r(106),r(78),r(108),r(109),r(110),r(111),r(112),r(113),r(114),r(115),r(117),r(118),r(119),r(120),r(121),r(122),r(123),r(124),r(125),r(126),r(128),r(129),r(130),r(131),r(132),r(133),r(134),r(135),r(136),r(137),r(138),r(139),r(140),r(141),r(142),r(143),r(144),r(145),r(149),r(181).polyfill()},function(e,t,r){"use strict";var n=r(54),o=r(73);e.exports=n("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),o)},function(e,t,r){var n=r(8),o=r(59),a=n.WeakMap;e.exports="function"===typeof a&&/native code/.test(o(a))},function(e,t,r){var n=r(10),o=r(41),a=r(63),i=r(2);e.exports=n("Reflect","ownKeys")||function(e){var t=o.f(i(e)),r=a.f;return r?t.concat(r(e)):t}},function(e,t,r){var n=r(20),o=r(26),a=r(95),i=function(e){return function(t,r,i){var l,u=n(t),c=o(u.length),s=a(i,c);if(e&&r!=r){for(;c>s;)if((l=u[s++])!=l)return!0}else for(;c>s;s++)if((e||s in u)&&u[s]===r)return e||s||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},function(e,t,r){var n=r(42),o=Math.max,a=Math.min;e.exports=function(e,t){var r=n(e);return r<0?o(r+t,0):a(r,t)}},function(e,t,r){var n=r(12);e.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(e,t,r){var n=r(13),o=r(72);e.exports=function(e,t,r){var a,i;return o&&"function"==typeof(a=t.constructor)&&a!==r&&n(i=a.prototype)&&i!==r.prototype&&o(e,i),e}},function(e,t,r){var n=r(13);e.exports=function(e){if(!n(e)&&null!==e)throw TypeError("Can\'t set "+String(e)+" as a prototype");return e}},function(e,t,r){var n=r(16),o=r(14),a=r(2),i=r(74);e.exports=n?Object.defineProperties:function(e,t){a(e);for(var r,n=i(t),l=n.length,u=0;l>u;)o.f(e,r=n[u++],t[r]);return e}},function(e,t,r){var n=r(10);e.exports=n("document","documentElement")},function(e,t,r){var n=r(21);e.exports=function(e,t,r){for(var o in t)n(e,o,t[o],r);return e}},function(e,t,r){"use strict";var n=r(75).IteratorPrototype,o=r(32),a=r(23),i=r(22),l=r(27),u=function(){return this};e.exports=function(e,t,r){var c=t+" Iterator";return e.prototype=o(n,{next:a(1,r)}),i(e,c,!1,!0),l[c]=u,e}},function(e,t,r){var n=r(12);e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},function(e,t,r){"use strict";var n=r(10),o=r(14),a=r(6),i=r(16),l=a("species");e.exports=function(e){var t=n(e),r=o.f;i&&t&&!t[l]&&r(t,l,{configurable:!0,get:function(){return this}})}},function(e,t,r){"use strict";var n=r(46),o=r(68);e.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},function(e,t,r){"use strict";var n=r(54),o=r(73);e.exports=n("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),o)},function(e,t,r){var n=r(42),o=r(37),a=function(e){return function(t,r){var a,i,l=String(o(t)),u=n(r),c=l.length;return u<0||u>=c?e?"":void 0:(a=l.charCodeAt(u))<55296||a>56319||u+1===c||(i=l.charCodeAt(u+1))<56320||i>57343?e?l.charAt(u):a:e?l.slice(u,u+2):i-56320+(a-55296<<10)+65536}};e.exports={codeAt:a(!1),charAt:a(!0)}},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(79);n({target:"Map",proto:!0,real:!0,forced:o},{deleteAll:function(){return a.apply(this,arguments)}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(15),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{every:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return!u(r,(function(e,r,o){if(!n(r,e,t))return o()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(7),c=r(17),s=r(15),f=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{filter:function(e){var t=i(this),r=s(t),n=u(e,arguments.length>1?arguments[1]:void 0,3),o=new(c(t,a("Map"))),d=l(o.set);return f(r,(function(e,r){n(r,e,t)&&d.call(o,e,r)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(15),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{find:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return u(r,(function(e,r,o){if(n(r,e,t))return o(r)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(15),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return u(r,(function(e,r,o){if(n(r,e,t))return o(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},function(e,t,r){r(1)({target:"Map",stat:!0},{from:r(80)})},function(e,t,r){"use strict";var n=r(1),o=r(4),a=r(5);n({target:"Map",stat:!0},{groupBy:function(e,t){var r=new this;a(t);var n=a(r.has),i=a(r.get),l=a(r.set);return o(e,(function(e){var o=t(e);n.call(r,o)?i.call(r,o).push(e):l.call(r,o,[e])})),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(15),l=r(116),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{includes:function(e){return u(i(a(this)),(function(t,r,n){if(l(r,e))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,r){"use strict";var n=r(1),o=r(4),a=r(5);n({target:"Map",stat:!0},{keyBy:function(e,t){var r=new this;a(t);var n=a(r.set);return o(e,(function(e){n.call(r,t(e),e)})),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(15),l=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(e){return l(i(a(this)),(function(t,r,n){if(r===e)return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(7),c=r(17),s=r(15),f=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{mapKeys:function(e){var t=i(this),r=s(t),n=u(e,arguments.length>1?arguments[1]:void 0,3),o=new(c(t,a("Map"))),d=l(o.set);return f(r,(function(e,r){d.call(o,n(r,e,t),r)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(7),c=r(17),s=r(15),f=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{mapValues:function(e){var t=i(this),r=s(t),n=u(e,arguments.length>1?arguments[1]:void 0,3),o=new(c(t,a("Map"))),d=l(o.set);return f(r,(function(e,r){d.call(o,e,n(r,e,t))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5),l=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{merge:function(e){for(var t=a(this),r=i(t.set),n=0;n<arguments.length;)l(arguments[n++],r,{that:t,AS_ENTRIES:!0});return t}})},function(e,t,r){r(1)({target:"Map",stat:!0},{of:r(81)})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5),l=r(15),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{reduce:function(e){var t=a(this),r=l(t),n=arguments.length<2,o=n?void 0:arguments[1];if(i(e),u(r,(function(r,a){n?(n=!1,o=a):o=e(o,a,r,t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty map with no initial value");return o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(15),u=r(4);n({target:"Map",proto:!0,real:!0,forced:o},{some:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return u(r,(function(e,r,o){if(n(r,e,t))return o()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5);n({target:"Map",proto:!0,real:!0,forced:o},{update:function(e,t){var r=a(this),n=arguments.length;i(t);var o=r.has(e);if(!o&&n<3)throw TypeError("Updating absent value");var l=o?r.get(e):i(n>2?arguments[2]:void 0)(e,r);return r.set(e,t(l,e,r)),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(127);n({target:"Set",proto:!0,real:!0,forced:o},{addAll:function(){return a.apply(this,arguments)}})},function(e,t,r){"use strict";var n=r(2),o=r(5);e.exports=function(){for(var e=n(this),t=o(e.add),r=0,a=arguments.length;r<a;r++)t.call(e,arguments[r]);return e}},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(79);n({target:"Set",proto:!0,real:!0,forced:o},{deleteAll:function(){return a.apply(this,arguments)}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(17),c=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{difference:function(e){var t=i(this),r=new(u(t,a("Set")))(t),n=l(r.delete);return c(e,(function(e){n.call(r,e)})),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(19),u=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{every:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return!u(r,(function(e,r){if(!n(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(7),c=r(17),s=r(19),f=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{filter:function(e){var t=i(this),r=s(t),n=u(e,arguments.length>1?arguments[1]:void 0,3),o=new(c(t,a("Set"))),d=l(o.add);return f(r,(function(e){n(e,e,t)&&d.call(o,e)}),{IS_ITERATOR:!0}),o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(19),u=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{find:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return u(r,(function(e,r){if(n(e,e,t))return r(e)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},function(e,t,r){r(1)({target:"Set",stat:!0},{from:r(80)})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(17),c=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{intersection:function(e){var t=i(this),r=new(u(t,a("Set"))),n=l(t.has),o=l(r.add);return c(e,(function(e){n.call(t,e)&&o.call(r,e)})),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5),l=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:function(e){var t=a(this),r=i(t.has);return!l(e,(function(e,n){if(!0===r.call(t,e))return n()}),{INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(48),c=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:function(e){var t=u(this),r=i(e),n=r.has;return"function"!=typeof n&&(r=new(a("Set"))(e),n=l(r.has)),!c(t,(function(e,t){if(!1===n.call(r,e))return t()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5),l=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:function(e){var t=a(this),r=i(t.has);return!l(e,(function(e,n){if(!1===r.call(t,e))return n()}),{INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(19),l=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{join:function(e){var t=a(this),r=i(t),n=void 0===e?",":String(e),o=[];return l(r,o.push,{that:o,IS_ITERATOR:!0}),o.join(n)}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(7),c=r(17),s=r(19),f=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{map:function(e){var t=i(this),r=s(t),n=u(e,arguments.length>1?arguments[1]:void 0,3),o=new(c(t,a("Set"))),d=l(o.add);return f(r,(function(e){d.call(o,n(e,e,t))}),{IS_ITERATOR:!0}),o}})},function(e,t,r){r(1)({target:"Set",stat:!0},{of:r(81)})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(5),l=r(19),u=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{reduce:function(e){var t=a(this),r=l(t),n=arguments.length<2,o=n?void 0:arguments[1];if(i(e),u(r,(function(r){n?(n=!1,o=r):o=e(o,r,r,t)}),{IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty set with no initial value");return o}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(2),i=r(7),l=r(19),u=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{some:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0,3);return u(r,(function(e,r){if(n(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(17),c=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{symmetricDifference:function(e){var t=i(this),r=new(u(t,a("Set")))(t),n=l(r.delete),o=l(r.add);return c(e,(function(e){n.call(r,e)||o.call(r,e)})),r}})},function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(10),i=r(2),l=r(5),u=r(17),c=r(4);n({target:"Set",proto:!0,real:!0,forced:o},{union:function(e){var t=i(this),r=new(u(t,a("Set")))(t);return c(e,l(r.add),{that:r}),r}})},function(e,t,r){var n=r(8),o=r(146),a=r(147),i=r(18),l=r(6),u=l("iterator"),c=l("toStringTag"),s=a.values;for(var f in o){var d=n[f],p=d&&d.prototype;if(p){if(p[u]!==s)try{i(p,u,s)}catch(e){p[u]=s}if(p[c]||i(p,c,f),o[f])for(var h in a)if(p[h]!==a[h])try{i(p,h,a[h])}catch(e){p[h]=a[h]}}}},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,r){"use strict";var n=r(20),o=r(148),a=r(27),i=r(24),l=r(47),u="Array Iterator",c=i.set,s=i.getterFor(u);e.exports=l(Array,"Array",(function(e,t){c(this,{type:u,target:n(e),index:0,kind:t})}),(function(){var e=s(this),t=e.target,r=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values"),a.Arguments=a.Array,o("keys"),o("values"),o("entries")},function(e,t,r){var n=r(6),o=r(32),a=r(14),i=n("unscopables"),l=Array.prototype;void 0==l[i]&&a.f(l,i,{configurable:!0,value:o(null)}),e.exports=function(e){l[i][e]=!0}},function(e,t,r){"use strict";r(150),r(153),r(154),r(155),r(156),r(157),r(158),r(159),r(160),r(161),r(162),r(163),r(164),r(165),r(166),r(169),r(172),r(173),r(77),r(78),r(174),r(175),r(176),"undefined"===typeof Promise&&(r(177).enable(),self.Promise=r(179)),"undefined"!==typeof window&&r(180),Object.assign=r(50)},function(e,t,r){"use strict";var n=r(1),o=r(8),a=r(10),i=r(3),l=r(16),u=r(44),c=r(67),s=r(12),f=r(11),d=r(49),p=r(13),h=r(2),g=r(28),v=r(20),m=r(29),y=r(23),b=r(32),w=r(74),k=r(41),E=r(151),x=r(63),S=r(35),_=r(14),T=r(55),C=r(18),O=r(21),P=r(40),R=r(30),N=r(25),L=r(31),A=r(6),I=r(82),j=r(9),M=r(22),D=r(24),q=r(152).forEach,z=R("hidden"),U="Symbol",F=A("toPrimitive"),B=D.set,V=D.getterFor(U),H=Object.prototype,W=o.Symbol,$=a("JSON","stringify"),G=S.f,Q=_.f,Y=E.f,K=T.f,X=P("symbols"),J=P("op-symbols"),Z=P("string-to-symbol-registry"),ee=P("symbol-to-string-registry"),te=P("wks"),re=o.QObject,ne=!re||!re.prototype||!re.prototype.findChild,oe=l&&s((function(){return 7!=b(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=G(H,t);n&&delete H[t],Q(e,t,r),n&&e!==H&&Q(H,t,n)}:Q,ae=function(e,t){var r=X[e]=b(W.prototype);return B(r,{type:U,tag:e,description:t}),l||(r.description=t),r},ie=c?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof W},le=function(e,t,r){e===H&&le(J,t,r),h(e);var n=m(t,!0);return h(r),f(X,n)?(r.enumerable?(f(e,z)&&e[z][n]&&(e[z][n]=!1),r=b(r,{enumerable:y(0,!1)})):(f(e,z)||Q(e,z,y(1,{})),e[z][n]=!0),oe(e,n,r)):Q(e,n,r)},ue=function(e,t){h(e);var r=v(t),n=w(r).concat(de(r));return q(n,(function(t){l&&!ce.call(r,t)||le(e,t,r[t])})),e},ce=function(e){var t=m(e,!0),r=K.call(this,t);return!(this===H&&f(X,t)&&!f(J,t))&&(!(r||!f(this,t)||!f(X,t)||f(this,z)&&this[z][t])||r)},se=function(e,t){var r=v(e),n=m(t,!0);if(r!==H||!f(X,n)||f(J,n)){var o=G(r,n);return!o||!f(X,n)||f(r,z)&&r[z][n]||(o.enumerable=!0),o}},fe=function(e){var t=Y(v(e)),r=[];return q(t,(function(e){f(X,e)||f(N,e)||r.push(e)})),r},de=function(e){var t=e===H,r=Y(t?J:v(e)),n=[];return q(r,(function(e){!f(X,e)||t&&!f(H,e)||n.push(X[e])})),n};(u||(O((W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=L(e),r=function e(r){this===H&&e.call(J,r),f(this,z)&&f(this[z],t)&&(this[z][t]=!1),oe(this,t,y(1,r))};return l&&ne&&oe(H,t,{configurable:!0,set:r}),ae(t,e)}).prototype,"toString",(function(){return V(this).tag})),O(W,"withoutSetter",(function(e){return ae(L(e),e)})),T.f=ce,_.f=le,S.f=se,k.f=E.f=fe,x.f=de,I.f=function(e){return ae(A(e),e)},l&&(Q(W.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),i||O(H,"propertyIsEnumerable",ce,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:W}),q(w(te),(function(e){j(e)})),n({target:U,stat:!0,forced:!u},{for:function(e){var t=String(e);if(f(Z,t))return Z[t];var r=W(t);return Z[t]=r,ee[r]=t,r},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(f(ee,e))return ee[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!l},{create:function(e,t){return void 0===t?b(e):ue(b(e),t)},defineProperty:le,defineProperties:ue,getOwnPropertyDescriptor:se}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:fe,getOwnPropertySymbols:de}),n({target:"Object",stat:!0,forced:s((function(){x.f(1)}))},{getOwnPropertySymbols:function(e){return x.f(g(e))}}),$)&&n({target:"JSON",stat:!0,forced:!u||s((function(){var e=W();return"[null]"!=$([e])||"{}"!=$({a:e})||"{}"!=$(Object(e))}))},{stringify:function(e,t,r){for(var n,o=[e],a=1;arguments.length>a;)o.push(arguments[a++]);if(n=t,(p(t)||void 0!==e)&&!ie(e))return d(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!ie(t))return t}),o[1]=t,$.apply(null,o)}});W.prototype[F]||C(W.prototype,F,W.prototype.valueOf),M(W,U),N[z]=!0},function(e,t,r){var n=r(20),o=r(41).f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==a.call(e)?function(e){try{return o(e)}catch(e){return i.slice()}}(e):o(n(e))}},function(e,t,r){var n=r(7),o=r(56),a=r(28),i=r(26),l=r(83),u=[].push,c=function(e){var t=1==e,r=2==e,c=3==e,s=4==e,f=6==e,d=7==e,p=5==e||f;return function(h,g,v,m){for(var y,b,w=a(h),k=o(w),E=n(g,v,3),x=i(k.length),S=0,_=m||l,T=t?_(h,x):r||d?_(h,0):void 0;x>S;S++)if((p||S in k)&&(b=E(y=k[S],S,w),e))if(t)T[S]=b;else if(b)switch(e){case 3:return!0;case 5:return y;case 6:return S;case 2:u.call(T,y)}else switch(e){case 4:return!1;case 7:u.call(T,y)}return f?-1:c||s?s:T}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},function(e,t,r){"use strict";var n=r(1),o=r(16),a=r(8),i=r(11),l=r(13),u=r(14).f,c=r(60),s=a.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var f={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new s(e):void 0===e?s():s(e);return""===e&&(f[t]=!0),t};c(d,s);var p=d.prototype=s.prototype;p.constructor=d;var h=p.toString,g="Symbol(test)"==String(s("test")),v=/^Symbol\\((.*)\\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=h.call(e);if(i(f,e))return"";var r=g?t.slice(7,-1):t.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},function(e,t,r){r(9)("asyncIterator")},function(e,t,r){r(9)("hasInstance")},function(e,t,r){r(9)("isConcatSpreadable")},function(e,t,r){r(9)("iterator")},function(e,t,r){r(9)("match")},function(e,t,r){r(9)("replace")},function(e,t,r){r(9)("search")},function(e,t,r){r(9)("species")},function(e,t,r){r(9)("split")},function(e,t,r){r(9)("toPrimitive")},function(e,t,r){r(9)("toStringTag")},function(e,t,r){r(9)("unscopables")},function(e,t,r){"use strict";var n=r(1),o=r(12),a=r(49),i=r(13),l=r(28),u=r(26),c=r(84),s=r(83),f=r(167),d=r(6),p=r(85),h=d("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",m=p>=51||!o((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),y=f("concat"),b=function(e){if(!i(e))return!1;var t=e[h];return void 0!==t?!!t:a(e)};n({target:"Array",proto:!0,forced:!m||!y},{concat:function(e){var t,r,n,o,a,i=l(this),f=s(i,0),d=0;for(t=-1,n=arguments.length;t<n;t++)if(b(a=-1===t?i:arguments[t])){if(d+(o=u(a.length))>g)throw TypeError(v);for(r=0;r<o;r++,d++)r in a&&c(f,d,a[r])}else{if(d>=g)throw TypeError(v);c(f,d++,a)}return f.length=d,f}})},function(e,t,r){var n=r(12),o=r(6),a=r(85),i=o("species");e.exports=function(e){return a>=51||!n((function(){var t=[];return(t.constructor={})[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},function(e,t,r){var n=r(10);e.exports=n("navigator","userAgent")||""},function(e,t,r){var n=r(1),o=r(170);n({target:"Array",stat:!0,forced:!r(71)((function(e){Array.from(e)}))},{from:o})},function(e,t,r){"use strict";var n=r(7),o=r(28),a=r(171),i=r(66),l=r(26),u=r(84),c=r(45);e.exports=function(e){var t,r,s,f,d,p,h=o(e),g="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,y=void 0!==m,b=c(h),w=0;if(y&&(m=n(m,v>2?arguments[2]:void 0,2)),void 0==b||g==Array&&i(b))for(r=new g(t=l(h.length));t>w;w++)p=y?m(h[w],w):h[w],u(r,w,p);else for(d=(f=b.call(h)).next,r=new g;!(s=d.call(f)).done;w++)p=y?a(f,m,[s.value,w],!0):s.value,u(r,w,p);return r.length=w,r}},function(e,t,r){var n=r(2),o=r(69);e.exports=function(e,t,r,a){try{return a?t(n(r)[0],r[1]):t(r)}catch(t){throw o(e),t}}},function(e,t,r){var n=r(8);r(22)(n.JSON,"JSON",!0)},function(e,t,r){r(22)(Math,"Math",!0)},function(e,t,r){r(9)("dispose")},function(e,t,r){r(9)("observable")},function(e,t,r){r(9)("patternMatch")},function(e,t,r){"use strict";var n=r(86),o=[ReferenceError,TypeError,RangeError],a=!1;function i(){a=!1,n._Y=null,n._Z=null}function l(e,t){return t.some((function(t){return e instanceof t}))}t.disable=i,t.enable=function(e){e=e||{},a&&i();a=!0;var t=0,r=0,u={};function c(t){(e.allRejections||l(u[t].error,e.whitelist||o))&&(u[t].displayId=r++,e.onUnhandled?(u[t].logged=!0,e.onUnhandled(u[t].displayId,u[t].error)):(u[t].logged=!0,function(e,t){console.warn("Possible Unhandled Promise Rejection (id: "+e+"):"),((t&&(t.stack||t))+"").split("\\n").forEach((function(e){console.warn("  "+e)}))}(u[t].displayId,u[t].error)))}n._Y=function(t){2===t._V&&u[t._1]&&(u[t._1].logged?function(t){u[t].logged&&(e.onHandled?e.onHandled(u[t].displayId,u[t].error):u[t].onUnhandled||(console.warn("Promise Rejection Handled (id: "+u[t].displayId+"):"),console.warn(\'  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id \'+u[t].displayId+".")))}(t._1):clearTimeout(u[t._1].timeout),delete u[t._1])},n._Z=function(e,r){0===e._U&&(e._1=t++,u[e._1]={displayId:null,error:r,timeout:setTimeout(c.bind(null,e._1),l(r,o)?100:2e3),logged:!1})}}},function(e,t,r){"use strict";(function(t){function r(e){o.length||(n(),!0),o[o.length]=e}e.exports=r;var n,o=[],a=0;function i(){for(;a<o.length;){var e=a;if(a+=1,o[e].call(),a>1024){for(var t=0,r=o.length-a;t<r;t++)o[t]=o[t+a];o.length-=a,a=0}}o.length=0,a=0,!1}var l,u,c,s="undefined"!==typeof t?t:self,f=s.MutationObserver||s.WebKitMutationObserver;function d(e){return function(){var t=setTimeout(n,0),r=setInterval(n,50);function n(){clearTimeout(t),clearInterval(r),e()}}}"function"===typeof f?(l=1,u=new f(i),c=document.createTextNode(""),u.observe(c,{characterData:!0}),n=function(){l=-l,c.data=l}):n=d(i),r.requestFlush=n,r.makeRequestCallFromTimer=d}).call(this,r(34))},function(e,t,r){"use strict";var n=r(86);e.exports=n;var o=s(!0),a=s(!1),i=s(null),l=s(void 0),u=s(0),c=s("");function s(e){var t=new n(n._0);return t._V=1,t._W=e,t}n.resolve=function(e){if(e instanceof n)return e;if(null===e)return i;if(void 0===e)return l;if(!0===e)return o;if(!1===e)return a;if(0===e)return u;if(""===e)return c;if("object"===typeof e||"function"===typeof e)try{var t=e.then;if("function"===typeof t)return new n(t.bind(e))}catch(e){return new n((function(t,r){r(e)}))}return s(e)};var f=function(e){return"function"===typeof Array.from?(f=Array.from,Array.from(e)):(f=function(e){return Array.prototype.slice.call(e)},Array.prototype.slice.call(e))};n.all=function(e){var t=f(e);return new n((function(e,r){if(0===t.length)return e([]);var o=t.length;function a(i,l){if(l&&("object"===typeof l||"function"===typeof l)){if(l instanceof n&&l.then===n.prototype.then){for(;3===l._V;)l=l._W;return 1===l._V?a(i,l._W):(2===l._V&&r(l._W),void l.then((function(e){a(i,e)}),r))}var u=l.then;if("function"===typeof u)return void new n(u.bind(l)).then((function(e){a(i,e)}),r)}t[i]=l,0===--o&&e(t)}for(var i=0;i<t.length;i++)a(i,t[i])}))},n.reject=function(e){return new n((function(t,r){r(e)}))},n.race=function(e){return new n((function(t,r){f(e).forEach((function(e){n.resolve(e).then(t,r)}))}))},n.prototype.catch=function(e){return this.then(null,e)}},function(e,t,r){"use strict";r.r(t),r.d(t,"Headers",(function(){return h})),r.d(t,"Request",(function(){return k})),r.d(t,"Response",(function(){return x})),r.d(t,"DOMException",(function(){return _})),r.d(t,"fetch",(function(){return T}));var n="undefined"!==typeof globalThis&&globalThis||"undefined"!==typeof self&&self||"undefined"!==typeof n&&n,o="URLSearchParams"in n,a="Symbol"in n&&"iterator"in Symbol,i="FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(e){return!1}}(),l="FormData"in n,u="ArrayBuffer"in n;if(u)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(e){return e&&c.indexOf(Object.prototype.toString.call(e))>-1};function f(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\\-#$%&\'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function d(e){return"string"!==typeof e&&(e=String(e)),e}function p(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return a&&(t[Symbol.iterator]=function(){return t}),t}function h(e){this.map={},e instanceof h?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function g(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function v(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function m(e){var t=new FileReader,r=v(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"===typeof e?this._bodyText=e:i&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:l&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:o&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u&&i&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(e)||s(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var e=g(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=g(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(m)}),this.text=function(){var e,t,r,n=g(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=v(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},l&&(this.formData=function(){return this.text().then(E)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(e,t){e=f(e),t=d(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},h.prototype.delete=function(e){delete this.map[f(e)]},h.prototype.get=function(e){return e=f(e),this.has(e)?this.map[e]:null},h.prototype.has=function(e){return this.map.hasOwnProperty(f(e))},h.prototype.set=function(e,t){this.map[f(e)]=d(t)},h.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},h.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),p(e)},h.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),p(e)},h.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),p(e)},a&&(h.prototype[Symbol.iterator]=h.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function k(e,t){if(!(this instanceof k))throw new TypeError(\'Please use the "new" operator, this DOM object constructor cannot be called as a function.\');var r,n,o=(t=t||{}).body;if(e instanceof k){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new h(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new h(t.headers)),this.method=(r=t.method||this.method||"GET",n=r.toUpperCase(),w.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),("GET"===this.method||"HEAD"===this.method)&&("no-store"===t.cache||"no-cache"===t.cache)){var a=/([?&])_=[^&]*/;if(a.test(this.url))this.url=this.url.replace(a,"$1_="+(new Date).getTime());else{this.url+=(/\\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function E(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\\+/g," "),o=r.join("=").replace(/\\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function x(e,t){if(!(this instanceof x))throw new TypeError(\'Please use the "new" operator, this DOM object constructor cannot be called as a function.\');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"",this.headers=new h(t.headers),this.url=t.url||"",this._initBody(e)}k.prototype.clone=function(){return new k(this,{body:this._bodyInit})},b.call(k.prototype),b.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},x.error=function(){var e=new x(null,{status:0,statusText:""});return e.type="error",e};var S=[301,302,303,307,308];x.redirect=function(e,t){if(-1===S.indexOf(t))throw new RangeError("Invalid status code");return new x(null,{status:t,headers:{location:e}})};var _=n.DOMException;try{new _}catch(e){(_=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),_.prototype.constructor=_}function T(e,t){return new Promise((function(r,o){var a=new k(e,t);if(a.signal&&a.signal.aborted)return o(new _("Aborted","AbortError"));var l=new XMLHttpRequest;function c(){l.abort()}l.onload=function(){var e,t,n={status:l.status,statusText:l.statusText,headers:(e=l.getAllResponseHeaders()||"",t=new h,e.replace(/\\r?\\n[\\t ]+/g," ").split("\\r").map((function(e){return 0===e.indexOf("\\n")?e.substr(1,e.length):e})).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}})),t)};n.url="responseURL"in l?l.responseURL:n.headers.get("X-Request-URL");var o="response"in l?l.response:l.responseText;setTimeout((function(){r(new x(o,n))}),0)},l.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},l.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},l.onabort=function(){setTimeout((function(){o(new _("Aborted","AbortError"))}),0)},l.open(a.method,function(e){try{return""===e&&n.location.href?n.location.href:e}catch(t){return e}}(a.url),!0),"include"===a.credentials?l.withCredentials=!0:"omit"===a.credentials&&(l.withCredentials=!1),"responseType"in l&&(i?l.responseType="blob":u&&a.headers.get("Content-Type")&&-1!==a.headers.get("Content-Type").indexOf("application/octet-stream")&&(l.responseType="arraybuffer")),!t||"object"!==typeof t.headers||t.headers instanceof h?a.headers.forEach((function(e,t){l.setRequestHeader(t,e)})):Object.getOwnPropertyNames(t.headers).forEach((function(e){l.setRequestHeader(e,d(t.headers[e]))})),a.signal&&(a.signal.addEventListener("abort",c),l.onreadystatechange=function(){4===l.readyState&&a.signal.removeEventListener("abort",c)}),l.send("undefined"===typeof a._bodyInit?null:a._bodyInit)}))}T.polyfill=!0,n.fetch||(n.fetch=T,n.Headers=h,n.Request=k,n.Response=x)},function(e,t,r){(function(t){for(var n=r(182),o="undefined"===typeof window?t:window,a=["moz","webkit"],i="AnimationFrame",l=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],c=0;!l&&c<a.length;c++)l=o[a[c]+"Request"+i],u=o[a[c]+"Cancel"+i]||o[a[c]+"CancelRequest"+i];if(!l||!u){var s=0,f=0,d=[];l=function(e){if(0===d.length){var t=n(),r=Math.max(0,16.666666666666668-(t-s));s=r+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(s)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(r))}return d.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return l.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=l,e.cancelAnimationFrame=u}}).call(this,r(34))},function(e,t,r){(function(t){(function(){var r,n,o,a,i,l;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(r()-i)/1e6},n=t.hrtime,a=(r=function(){var e;return 1e9*(e=n())[0]+e[1]})(),l=1e9*t.uptime(),i=a-l):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,r(51))},function(e,t,r){"use strict";var n=r(50),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,l=60110,u=60112;t.Suspense=60113;var c=60115,s=60116;if("function"===typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),i=f("react.provider"),l=f("react.context"),u=f("react.forward_ref"),t.Suspense=f("react.suspense"),c=f("react.memo"),s=f("react.lazy")}var d="function"===typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function m(){}function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=v.prototype;var b=y.prototype=new m;b.constructor=y,n(b,v.prototype),b.isPureReactComponent=!0;var w={current:null},k=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,a={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!E.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];a.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:w.current}}function S(e){return"object"===typeof e&&null!==e&&e.$$typeof===o}var _=/\\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return i=i(u=e),e=""===n?"."+T(u,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),C(i,t,r,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=n+T(l=e[c],c);u+=C(l,t,r,s,i)}else if("function"===typeof(s=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),c=0;!(l=e.next()).done;)u+=C(l=l.value,t,r,s=n+T(l,c++),i);else if("object"===l)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function O(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function N(){var e=R.current;if(null===e)throw Error(p(321));return e}var L={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(p(143));return e}},t.Component=v,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error(p(267,e));var a=n({},e.props),i=e.key,l=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,u=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)k.call(t,s)&&!E.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];a.children=c}return{$$typeof:o,type:e.type,key:i,ref:l,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return N().useCallback(e,t)},t.useContext=function(e,t){return N().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return N().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return N().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return N().useLayoutEffect(e,t)},t.useMemo=function(e,t){return N().useMemo(e,t)},t.useReducer=function(e,t,r){return N().useReducer(e,t,r)},t.useRef=function(e){return N().useRef(e)},t.useState=function(e){return N().useState(e)},t.version="17.0.1"},function(e,t,r){"use strict";var n=r(0),o=r(50),a=r(185);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!n)throw Error(i(227));var l=new Set,u={};function c(e,t){s(e,t),s(e+"Capture",t)}function s(e,t){for(u[e]=t,e=0;e<t.length;e++)l.add(t[e])}var f=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=/^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$/,p=Object.prototype.hasOwnProperty,h={},g={};function v(e,t,r,n,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){m[e]=new v(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];m[t]=new v(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){m[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){m[e]=new v(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){m[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){m[e]=new v(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){m[e]=new v(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){m[e]=new v(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){m[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)}));var y=/[\\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function w(e,t,r,n){var o=m.hasOwnProperty(t)?m[t]:null;(null!==o?0===o.type:!n&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,r,n){if(null===t||"undefined"===typeof t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,o,n)&&(r=null),n||null===o?function(e){return!!p.call(g,e)||!p.call(h,e)&&(d.test(e)?g[e]=!0:(h[e]=!0,!1))}(t)&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=null===r?3!==o.type&&"":r:(t=o.attributeName,n=o.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(o=o.type)||4===o&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(y,b);m[t]=new v(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(y,b);m[t]=new v(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(y,b);m[t]=new v(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){m[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)})),m.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){m[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)}));var k=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E=60103,x=60106,S=60107,_=60108,T=60114,C=60109,O=60110,P=60112,R=60113,N=60120,L=60115,A=60116,I=60121,j=60128,M=60129,D=60130,q=60131;if("function"===typeof Symbol&&Symbol.for){var z=Symbol.for;E=z("react.element"),x=z("react.portal"),S=z("react.fragment"),_=z("react.strict_mode"),T=z("react.profiler"),C=z("react.provider"),O=z("react.context"),P=z("react.forward_ref"),R=z("react.suspense"),N=z("react.suspense_list"),L=z("react.memo"),A=z("react.lazy"),I=z("react.block"),z("react.scope"),j=z("react.opaque.id"),M=z("react.debug_trace_mode"),D=z("react.offscreen"),q=z("react.legacy_hidden")}var U,F="function"===typeof Symbol&&Symbol.iterator;function B(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=F&&e[F]||e["@@iterator"])?e:null}function V(e){if(void 0===U)try{throw Error()}catch(e){var t=e.stack.trim().match(/\\n( *(at )?)/);U=t&&t[1]||""}return"\\n"+U+e}var H=!1;function W(e,t){if(!e||H)return"";H=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var n=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){n=e}e.call(t.prototype)}else{try{throw Error()}catch(e){n=e}e()}}catch(e){if(e&&n&&"string"===typeof e.stack){for(var o=e.stack.split("\\n"),a=n.stack.split("\\n"),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(1!==i||1!==l)do{if(i--,0>--l||o[i]!==a[l])return"\\n"+o[i].replace(" at new "," at ")}while(1<=i&&0<=l);break}}}finally{H=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?V(e):""}function $(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=W(e.type,!1);case 11:return e=W(e.type.render,!1);case 22:return e=W(e.type._render,!1);case 1:return e=W(e.type,!0);default:return""}}function G(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case x:return"Portal";case T:return"Profiler";case _:return"StrictMode";case R:return"Suspense";case N:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case O:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case L:return G(e.type);case I:return G(e._render);case A:t=e._payload,e=e._init;try{return G(e(t))}catch(e){}}return null}function Q(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Y(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=Y(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var o=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){n=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function X(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Y(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function J(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Z(e,t){var r=t.checked;return o({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function ee(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=Q(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function te(e,t){null!=(t=t.checked)&&w(e,"checked",t,!1)}function re(e,t){te(e,t);var r=Q(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?oe(e,t.type,r):t.hasOwnProperty("defaultValue")&&oe(e,t.type,Q(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ne(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function oe(e,t,r){"number"===t&&J(e.ownerDocument)===e||(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}function ae(e,t){return e=o({children:void 0},t),(t=function(e){var t="";return n.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function ie(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Q(r),t=null,o=0;o<e.length;o++){if(e[o].value===r)return e[o].selected=!0,void(n&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function le(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return o({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ue(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(i(92));if(Array.isArray(r)){if(!(1>=r.length))throw Error(i(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:Q(r)}}function ce(e,t){var r=Q(t.value),n=Q(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function se(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var fe="http://www.w3.org/1999/xhtml",de="http://www.w3.org/2000/svg";function pe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?pe(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ge,ve,me=(ve=function(e,t){if(e.namespaceURI!==de||"innerHTML"in e)e.innerHTML=t;else{for((ge=ge||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ge.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction((function(){return ve(e,t)}))}:ve);function ye(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var be={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},we=["Webkit","ms","Moz","O"];function ke(e,t,r){return null==t||"boolean"===typeof t||""===t?"":r||"number"!==typeof t||0===t||be.hasOwnProperty(e)&&be[e]?(""+t).trim():t+"px"}function Ee(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),o=ke(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}Object.keys(be).forEach((function(e){we.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),be[t]=be[e]}))}));var xe=o({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Se(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function _e(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Te(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Ce=null,Oe=null,Pe=null;function Re(e){if(e=eo(e)){if("function"!==typeof Ce)throw Error(i(280));var t=e.stateNode;t&&(t=ro(t),Ce(e.stateNode,e.type,t))}}function Ne(e){Oe?Pe?Pe.push(e):Pe=[e]:Oe=e}function Le(){if(Oe){var e=Oe,t=Pe;if(Pe=Oe=null,Re(e),t)for(e=0;e<t.length;e++)Re(t[e])}}function Ae(e,t){return e(t)}function Ie(e,t,r,n,o){return e(t,r,n,o)}function je(){}var Me=Ae,De=!1,qe=!1;function ze(){null===Oe&&null===Pe||(je(),Le())}function Ue(e,t){var r=e.stateNode;if(null===r)return null;var n=ro(r);if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(i(231,t,typeof r));return r}var Fe=!1;if(f)try{var Be={};Object.defineProperty(Be,"passive",{get:function(){Fe=!0}}),window.addEventListener("test",Be,Be),window.removeEventListener("test",Be,Be)}catch(ve){Fe=!1}function Ve(e,t,r,n,o,a,i,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(e){this.onError(e)}}var He=!1,We=null,$e=!1,Ge=null,Qe={onError:function(e){He=!0,We=e}};function Ye(e,t,r,n,o,a,i,l,u){He=!1,We=null,Ve.apply(Qe,arguments)}function Ke(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(1026&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function Xe(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Je(e){if(Ke(e)!==e)throw Error(i(188))}function Ze(e){if(!(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ke(e)))throw Error(i(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(n=o.return)){r=n;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===r)return Je(o),e;if(a===n)return Je(o),t;a=a.sibling}throw Error(i(188))}if(r.return!==n.return)r=o,n=a;else{for(var l=!1,u=o.child;u;){if(u===r){l=!0,r=o,n=a;break}if(u===n){l=!0,n=o,r=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===r){l=!0,r=a,n=o;break}if(u===n){l=!0,n=a,r=o;break}u=u.sibling}if(!l)throw Error(i(189))}}if(r.alternate!==n)throw Error(i(190))}if(3!==r.tag)throw Error(i(188));return r.stateNode.current===r?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function et(e,t){for(var r=e.alternate;null!==t;){if(t===e||t===r)return!0;t=t.return}return!1}var tt,rt,nt,ot,at=!1,it=[],lt=null,ut=null,ct=null,st=new Map,ft=new Map,dt=[],pt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ht(e,t,r,n,o){return{blockedOn:e,domEventName:t,eventSystemFlags:16|r,nativeEvent:o,targetContainers:[n]}}function gt(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":st.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ft.delete(t.pointerId)}}function vt(e,t,r,n,o,a){return null===e||e.nativeEvent!==a?(e=ht(t,r,n,o,a),null!==t&&(null!==(t=eo(t))&&rt(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function mt(e){var t=Zn(e.target);if(null!==t){var r=Ke(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=Xe(r)))return e.blockedOn=t,void ot(e.lanePriority,(function(){a.unstable_runWithPriority(e.priority,(function(){nt(r)}))}))}else if(3===t&&r.stateNode.hydrate)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function yt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=Zt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=eo(r))&&rt(t),e.blockedOn=r,!1;t.shift()}return!0}function bt(e,t,r){yt(e)&&r.delete(t)}function wt(){for(at=!1;0<it.length;){var e=it[0];if(null!==e.blockedOn){null!==(e=eo(e.blockedOn))&&tt(e);break}for(var t=e.targetContainers;0<t.length;){var r=Zt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r){e.blockedOn=r;break}t.shift()}null===e.blockedOn&&it.shift()}null!==lt&&yt(lt)&&(lt=null),null!==ut&&yt(ut)&&(ut=null),null!==ct&&yt(ct)&&(ct=null),st.forEach(bt),ft.forEach(bt)}function kt(e,t){e.blockedOn===t&&(e.blockedOn=null,at||(at=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,wt)))}function Et(e){function t(t){return kt(t,e)}if(0<it.length){kt(it[0],e);for(var r=1;r<it.length;r++){var n=it[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==lt&&kt(lt,e),null!==ut&&kt(ut,e),null!==ct&&kt(ct,e),st.forEach(t),ft.forEach(t),r=0;r<dt.length;r++)(n=dt[r]).blockedOn===e&&(n.blockedOn=null);for(;0<dt.length&&null===(r=dt[0]).blockedOn;)mt(r),null===r.blockedOn&&dt.shift()}function xt(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var St={animationend:xt("Animation","AnimationEnd"),animationiteration:xt("Animation","AnimationIteration"),animationstart:xt("Animation","AnimationStart"),transitionend:xt("Transition","TransitionEnd")},_t={},Tt={};function Ct(e){if(_t[e])return _t[e];if(!St[e])return e;var t,r=St[e];for(t in r)if(r.hasOwnProperty(t)&&t in Tt)return _t[e]=r[t];return e}f&&(Tt=document.createElement("div").style,"AnimationEvent"in window||(delete St.animationend.animation,delete St.animationiteration.animation,delete St.animationstart.animation),"TransitionEvent"in window||delete St.transitionend.transition);var Ot=Ct("animationend"),Pt=Ct("animationiteration"),Rt=Ct("animationstart"),Nt=Ct("transitionend"),Lt=new Map,At=new Map,It=["abort","abort",Ot,"animationEnd",Pt,"animationIteration",Rt,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Nt,"transitionEnd","waiting","waiting"];function jt(e,t){for(var r=0;r<e.length;r+=2){var n=e[r],o=e[r+1];o="on"+(o[0].toUpperCase()+o.slice(1)),At.set(n,t),Lt.set(n,o),c(o,[n])}}(0,a.unstable_now)();var Mt=8;function Dt(e){if(0!==(1&e))return Mt=15,1;if(0!==(2&e))return Mt=14,2;if(0!==(4&e))return Mt=13,4;var t=24&e;return 0!==t?(Mt=12,t):0!==(32&e)?(Mt=11,32):0!==(t=192&e)?(Mt=10,t):0!==(256&e)?(Mt=9,256):0!==(t=3584&e)?(Mt=8,t):0!==(4096&e)?(Mt=7,4096):0!==(t=4186112&e)?(Mt=6,t):0!==(t=62914560&e)?(Mt=5,t):67108864&e?(Mt=4,67108864):0!==(134217728&e)?(Mt=3,134217728):0!==(t=805306368&e)?(Mt=2,t):0!==(1073741824&e)?(Mt=1,1073741824):(Mt=8,e)}function qt(e,t){var r=e.pendingLanes;if(0===r)return Mt=0;var n=0,o=0,a=e.expiredLanes,i=e.suspendedLanes,l=e.pingedLanes;if(0!==a)n=a,o=Mt=15;else if(0!==(a=134217727&r)){var u=a&~i;0!==u?(n=Dt(u),o=Mt):0!==(l&=a)&&(n=Dt(l),o=Mt)}else 0!==(a=r&~i)?(n=Dt(a),o=Mt):0!==l&&(n=Dt(l),o=Mt);if(0===n)return 0;if(n=r&((0>(n=31-Ht(n))?0:1<<n)<<1)-1,0!==t&&t!==n&&0===(t&i)){if(Dt(t),o<=Mt)return t;Mt=o}if(0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)o=1<<(r=31-Ht(t)),n|=e[r],t&=~o;return n}function zt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Ut(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return 0===(e=Ft(24&~t))?Ut(10,t):e;case 10:return 0===(e=Ft(192&~t))?Ut(8,t):e;case 8:return 0===(e=Ft(3584&~t))&&(0===(e=Ft(4186112&~t))&&(e=512)),e;case 2:return 0===(t=Ft(805306368&~t))&&(t=268435456),t}throw Error(i(358,e))}function Ft(e){return e&-e}function Bt(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Vt(e,t,r){e.pendingLanes|=t;var n=t-1;e.suspendedLanes&=n,e.pingedLanes&=n,(e=e.eventTimes)[t=31-Ht(t)]=r}var Ht=Math.clz32?Math.clz32:function(e){return 0===e?32:31-(Wt(e)/$t|0)|0},Wt=Math.log,$t=Math.LN2;var Gt=a.unstable_UserBlockingPriority,Qt=a.unstable_runWithPriority,Yt=!0;function Kt(e,t,r,n){De||je();var o=Jt,a=De;De=!0;try{Ie(o,e,t,r,n)}finally{(De=a)||ze()}}function Xt(e,t,r,n){Qt(Gt,Jt.bind(null,e,t,r,n))}function Jt(e,t,r,n){var o;if(Yt)if((o=0===(4&t))&&0<it.length&&-1<pt.indexOf(e))e=ht(null,e,t,r,n),it.push(e);else{var a=Zt(e,t,r,n);if(null===a)o&&gt(e,n);else{if(o){if(-1<pt.indexOf(e))return e=ht(a,e,t,r,n),void it.push(e);if(function(e,t,r,n,o){switch(t){case"focusin":return lt=vt(lt,e,t,r,n,o),!0;case"dragenter":return ut=vt(ut,e,t,r,n,o),!0;case"mouseover":return ct=vt(ct,e,t,r,n,o),!0;case"pointerover":var a=o.pointerId;return st.set(a,vt(st.get(a)||null,e,t,r,n,o)),!0;case"gotpointercapture":return a=o.pointerId,ft.set(a,vt(ft.get(a)||null,e,t,r,n,o)),!0}return!1}(a,e,t,r,n))return;gt(e,n)}Ln(e,t,n,null,r)}}}function Zt(e,t,r,n){var o=Te(n);if(null!==(o=Zn(o))){var a=Ke(o);if(null===a)o=null;else{var i=a.tag;if(13===i){if(null!==(o=Xe(a)))return o;o=null}else if(3===i){if(a.stateNode.hydrate)return 3===a.tag?a.stateNode.containerInfo:null;o=null}else a!==o&&(o=null)}}return Ln(e,t,n,o,r),null}var er=null,tr=null,rr=null;function nr(){if(rr)return rr;var e,t,r=tr,n=r.length,o="value"in er?er.value:er.textContent,a=o.length;for(e=0;e<n&&r[e]===o[e];e++);var i=n-e;for(t=1;t<=i&&r[n-t]===o[a-t];t++);return rr=o.slice(e,1<t?1-t:void 0)}function or(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function ar(){return!0}function ir(){return!1}function lr(e){function t(t,r,n,o,a){for(var i in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?ar:ir,this.isPropagationStopped=ir,this}return o(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var ur,cr,sr,fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dr=lr(fr),pr=o({},fr,{view:0,detail:0}),hr=lr(pr),gr=o({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&"mousemove"===e.type?(ur=e.screenX-sr.screenX,cr=e.screenY-sr.screenY):cr=ur=0,sr=e),ur)},movementY:function(e){return"movementY"in e?e.movementY:cr}}),vr=lr(gr),mr=lr(o({},gr,{dataTransfer:0})),yr=lr(o({},pr,{relatedTarget:0})),br=lr(o({},fr,{animationName:0,elapsedTime:0,pseudoElement:0})),wr=lr(o({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),kr=lr(o({},fr,{data:0})),Er={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _r(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sr[e])&&!!t[e]}function Tr(){return _r}var Cr=lr(o({},pr,{key:function(e){if(e.key){var t=Er[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=or(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?xr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(e){return"keypress"===e.type?or(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?or(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),Or=lr(o({},gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pr=lr(o({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr})),Rr=lr(o({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nr=lr(o({},gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Lr=[9,13,27,32],Ar=f&&"CompositionEvent"in window,Ir=null;f&&"documentMode"in document&&(Ir=document.documentMode);var jr=f&&"TextEvent"in window&&!Ir,Mr=f&&(!Ar||Ir&&8<Ir&&11>=Ir),Dr=String.fromCharCode(32),qr=!1;function zr(e,t){switch(e){case"keyup":return-1!==Lr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ur(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Fr=!1;var Br={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Br[e.type]:"textarea"===t}function Hr(e,t,r,n){Ne(n),0<(t=In(t,"onChange")).length&&(r=new dr("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Wr=null,$r=null;function Gr(e){Tn(e,0)}function Qr(e){if(X(to(e)))return e}function Yr(e,t){if("change"===e)return t}var Kr=!1;if(f){var Xr;if(f){var Jr="oninput"in document;if(!Jr){var Zr=document.createElement("div");Zr.setAttribute("oninput","return;"),Jr="function"===typeof Zr.oninput}Xr=Jr}else Xr=!1;Kr=Xr&&(!document.documentMode||9<document.documentMode)}function en(){Wr&&(Wr.detachEvent("onpropertychange",tn),$r=Wr=null)}function tn(e){if("value"===e.propertyName&&Qr($r)){var t=[];if(Hr(t,$r,e,Te(e)),e=Gr,De)e(t);else{De=!0;try{Ae(e,t)}finally{De=!1,ze()}}}}function rn(e,t,r){"focusin"===e?(en(),$r=r,(Wr=t).attachEvent("onpropertychange",tn)):"focusout"===e&&en()}function nn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qr($r)}function on(e,t){if("click"===e)return Qr(t)}function an(e,t){if("input"===e||"change"===e)return Qr(t)}var ln="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},un=Object.prototype.hasOwnProperty;function cn(e,t){if(ln(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++)if(!un.call(t,r[n])||!ln(e[r[n]],t[r[n]]))return!1;return!0}function sn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fn(e,t){var r,n=sn(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sn(n)}}function dn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pn(){for(var e=window,t=J();t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(e){r=!1}if(!r)break;t=J((e=t.contentWindow).document)}return t}function hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var gn=f&&"documentMode"in document&&11>=document.documentMode,vn=null,mn=null,yn=null,bn=!1;function wn(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;bn||null==vn||vn!==J(n)||("selectionStart"in(n=vn)&&hn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},yn&&cn(yn,n)||(yn=n,0<(n=In(mn,"onSelect")).length&&(t=new dr("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=vn)))}jt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),jt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),jt(It,2);for(var kn="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),En=0;En<kn.length;En++)At.set(kn[En],0);s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sn=new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));function _n(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,o,a,l,u,c){if(Ye.apply(this,arguments),He){if(!He)throw Error(i(198));var s=We;He=!1,We=null,$e||($e=!0,Ge=s)}}(n,t,void 0,e),e.currentTarget=null}function Tn(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==a&&o.isPropagationStopped())break e;_n(o,l,c),a=u}else for(i=0;i<n.length;i++){if(u=(l=n[i]).instance,c=l.currentTarget,l=l.listener,u!==a&&o.isPropagationStopped())break e;_n(o,l,c),a=u}}}if($e)throw e=Ge,$e=!1,Ge=null,e}function Cn(e,t){var r=no(t),n=e+"__bubble";r.has(n)||(Nn(t,e,2,!1),r.add(n))}var On="_reactListening"+Math.random().toString(36).slice(2);function Pn(e){e[On]||(e[On]=!0,l.forEach((function(t){Sn.has(t)||Rn(t,!1,e,null),Rn(t,!0,e,null)})))}function Rn(e,t,r,n){var o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,a=r;if("selectionchange"===e&&9!==r.nodeType&&(a=r.ownerDocument),null!==n&&!t&&Sn.has(e)){if("scroll"!==e)return;o|=2,a=n}var i=no(a),l=e+"__"+(t?"capture":"bubble");i.has(l)||(t&&(o|=4),Nn(a,e,o,t),i.add(l))}function Nn(e,t,r,n){var o=At.get(t);switch(void 0===o?2:o){case 0:o=Kt;break;case 1:o=Xt;break;default:o=Jt}r=o.bind(null,t,r,e),o=void 0,!Fe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),n?void 0!==o?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):void 0!==o?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Ln(e,t,r,n,o){var a=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var i=n.tag;if(3===i||4===i){var l=n.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===i)for(i=n.return;null!==i;){var u=i.tag;if((3===u||4===u)&&((u=i.stateNode.containerInfo)===o||8===u.nodeType&&u.parentNode===o))return;i=i.return}for(;null!==l;){if(null===(i=Zn(l)))return;if(5===(u=i.tag)||6===u){n=a=i;continue e}l=l.parentNode}}n=n.return}!function(e,t,r){if(qe)return e(t,r);qe=!0;try{Me(e,t,r)}finally{qe=!1,ze()}}((function(){var n=a,o=Te(r),i=[];e:{var l=Lt.get(e);if(void 0!==l){var u=dr,c=e;switch(e){case"keypress":if(0===or(r))break e;case"keydown":case"keyup":u=Cr;break;case"focusin":c="focus",u=yr;break;case"focusout":c="blur",u=yr;break;case"beforeblur":case"afterblur":u=yr;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=vr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=mr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=Pr;break;case Ot:case Pt:case Rt:u=br;break;case Nt:u=Rr;break;case"scroll":u=hr;break;case"wheel":u=Nr;break;case"copy":case"cut":case"paste":u=wr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=Or}var s=0!==(4&t),f=!s&&"scroll"===e,d=s?null!==l?l+"Capture":null:l;s=[];for(var p,h=n;null!==h;){var g=(p=h).stateNode;if(5===p.tag&&null!==g&&(p=g,null!==d&&(null!=(g=Ue(h,d))&&s.push(An(h,g,p)))),f)break;h=h.return}0<s.length&&(l=new u(l,c,null,r,o),i.push({event:l,listeners:s}))}}if(0===(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||0!==(16&t)||!(c=r.relatedTarget||r.fromElement)||!Zn(c)&&!c[Xn])&&(u||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,u?(u=n,null!==(c=(c=r.relatedTarget||r.toElement)?Zn(c):null)&&(c!==(f=Ke(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(u=null,c=n),u!==c)){if(s=vr,g="onMouseLeave",d="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(s=Or,g="onPointerLeave",d="onPointerEnter",h="pointer"),f=null==u?l:to(u),p=null==c?l:to(c),(l=new s(g,h+"leave",u,r,o)).target=f,l.relatedTarget=p,g=null,Zn(o)===n&&((s=new s(d,h+"enter",c,r,o)).target=p,s.relatedTarget=f,g=s),f=g,u&&c)e:{for(d=c,h=0,p=s=u;p;p=jn(p))h++;for(p=0,g=d;g;g=jn(g))p++;for(;0<h-p;)s=jn(s),h--;for(;0<p-h;)d=jn(d),p--;for(;h--;){if(s===d||null!==d&&s===d.alternate)break e;s=jn(s),d=jn(d)}s=null}else s=null;null!==u&&Mn(i,l,u,s,!1),null!==c&&null!==f&&Mn(i,f,c,s,!0)}if("select"===(u=(l=n?to(n):window).nodeName&&l.nodeName.toLowerCase())||"input"===u&&"file"===l.type)var v=Yr;else if(Vr(l))if(Kr)v=an;else{v=nn;var m=rn}else(u=l.nodeName)&&"input"===u.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(v=on);switch(v&&(v=v(e,n))?Hr(i,v,r,o):(m&&m(e,l,n),"focusout"===e&&(m=l._wrapperState)&&m.controlled&&"number"===l.type&&oe(l,"number",l.value)),m=n?to(n):window,e){case"focusin":(Vr(m)||"true"===m.contentEditable)&&(vn=m,mn=n,yn=null);break;case"focusout":yn=mn=vn=null;break;case"mousedown":bn=!0;break;case"contextmenu":case"mouseup":case"dragend":bn=!1,wn(i,r,o);break;case"selectionchange":if(gn)break;case"keydown":case"keyup":wn(i,r,o)}var y;if(Ar)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Fr?zr(e,r)&&(b="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(b="onCompositionStart");b&&(Mr&&"ko"!==r.locale&&(Fr||"onCompositionStart"!==b?"onCompositionEnd"===b&&Fr&&(y=nr()):(tr="value"in(er=o)?er.value:er.textContent,Fr=!0)),0<(m=In(n,b)).length&&(b=new kr(b,e,null,r,o),i.push({event:b,listeners:m}),y?b.data=y:null!==(y=Ur(r))&&(b.data=y))),(y=jr?function(e,t){switch(e){case"compositionend":return Ur(t);case"keypress":return 32!==t.which?null:(qr=!0,Dr);case"textInput":return(e=t.data)===Dr&&qr?null:e;default:return null}}(e,r):function(e,t){if(Fr)return"compositionend"===e||!Ar&&zr(e,t)?(e=nr(),rr=tr=er=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mr&&"ko"!==t.locale?null:t.data;default:return null}}(e,r))&&(0<(n=In(n,"onBeforeInput")).length&&(o=new kr("onBeforeInput","beforeinput",null,r,o),i.push({event:o,listeners:n}),o.data=y))}Tn(i,t)}))}function An(e,t,r){return{instance:e,listener:t,currentTarget:r}}function In(e,t){for(var r=t+"Capture",n=[];null!==e;){var o=e,a=o.stateNode;5===o.tag&&null!==a&&(o=a,null!=(a=Ue(e,r))&&n.unshift(An(e,a,o)),null!=(a=Ue(e,t))&&n.push(An(e,a,o))),e=e.return}return n}function jn(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Mn(e,t,r,n,o){for(var a=t._reactName,i=[];null!==r&&r!==n;){var l=r,u=l.alternate,c=l.stateNode;if(null!==u&&u===n)break;5===l.tag&&null!==c&&(l=c,o?null!=(u=Ue(r,a))&&i.unshift(An(r,u,l)):o||null!=(u=Ue(r,a))&&i.push(An(r,u,l))),r=r.return}0!==i.length&&e.push({event:t,listeners:i})}function Dn(){}var qn=null,zn=null;function Un(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Fn(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Bn="function"===typeof setTimeout?setTimeout:void 0,Vn="function"===typeof clearTimeout?clearTimeout:void 0;function Hn(e){1===e.nodeType?e.textContent="":9===e.nodeType&&(null!=(e=e.body)&&(e.textContent=""))}function Wn(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function $n(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var Gn=0;var Qn=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Qn,Kn="__reactProps$"+Qn,Xn="__reactContainer$"+Qn,Jn="__reactEvents$"+Qn;function Zn(e){var t=e[Yn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Xn]||r[Yn]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=$n(e);null!==e;){if(r=e[Yn])return r;e=$n(e)}return t}r=(e=r).parentNode}return null}function eo(e){return!(e=e[Yn]||e[Xn])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function to(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function ro(e){return e[Kn]||null}function no(e){var t=e[Jn];return void 0===t&&(t=e[Jn]=new Set),t}var oo=[],ao=-1;function io(e){return{current:e}}function lo(e){0>ao||(e.current=oo[ao],oo[ao]=null,ao--)}function uo(e,t){ao++,oo[ao]=e.current,e.current=t}var co={},so=io(co),fo=io(!1),po=co;function ho(e,t){var r=e.type.contextTypes;if(!r)return co;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in r)a[o]=t[o];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function go(e){return null!==(e=e.childContextTypes)&&void 0!==e}function vo(){lo(fo),lo(so)}function mo(e,t,r){if(so.current!==co)throw Error(i(168));uo(so,t),uo(fo,r)}function yo(e,t,r){var n=e.stateNode;if(e=t.childContextTypes,"function"!==typeof n.getChildContext)return r;for(var a in n=n.getChildContext())if(!(a in e))throw Error(i(108,G(t)||"Unknown",a));return o({},r,n)}function bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||co,po=so.current,uo(so,e),uo(fo,fo.current),!0}function wo(e,t,r){var n=e.stateNode;if(!n)throw Error(i(169));r?(e=yo(e,t,po),n.__reactInternalMemoizedMergedChildContext=e,lo(fo),lo(so),uo(so,e)):lo(fo),uo(fo,r)}var ko=null,Eo=null,xo=a.unstable_runWithPriority,So=a.unstable_scheduleCallback,_o=a.unstable_cancelCallback,To=a.unstable_shouldYield,Co=a.unstable_requestPaint,Oo=a.unstable_now,Po=a.unstable_getCurrentPriorityLevel,Ro=a.unstable_ImmediatePriority,No=a.unstable_UserBlockingPriority,Lo=a.unstable_NormalPriority,Ao=a.unstable_LowPriority,Io=a.unstable_IdlePriority,jo={},Mo=void 0!==Co?Co:function(){},Do=null,qo=null,zo=!1,Uo=Oo(),Fo=1e4>Uo?Oo:function(){return Oo()-Uo};function Bo(){switch(Po()){case Ro:return 99;case No:return 98;case Lo:return 97;case Ao:return 96;case Io:return 95;default:throw Error(i(332))}}function Vo(e){switch(e){case 99:return Ro;case 98:return No;case 97:return Lo;case 96:return Ao;case 95:return Io;default:throw Error(i(332))}}function Ho(e,t){return e=Vo(e),xo(e,t)}function Wo(e,t,r){return e=Vo(e),So(e,t,r)}function $o(){if(null!==qo){var e=qo;qo=null,_o(e)}Go()}function Go(){if(!zo&&null!==Do){zo=!0;var e=0;try{var t=Do;Ho(99,(function(){for(;e<t.length;e++){var r=t[e];do{r=r(!0)}while(null!==r)}})),Do=null}catch(t){throw null!==Do&&(Do=Do.slice(e+1)),So(Ro,$o),t}finally{zo=!1}}}var Qo=k.ReactCurrentBatchConfig;function Yo(e,t){if(e&&e.defaultProps){for(var r in t=o({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}return t}var Ko=io(null),Xo=null,Jo=null,Zo=null;function ea(){Zo=Jo=Xo=null}function ta(e){var t=Ko.current;lo(Ko),e.type._context._currentValue=t}function ra(e,t){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)===t){if(null===r||(r.childLanes&t)===t)break;r.childLanes|=t}else e.childLanes|=t,null!==r&&(r.childLanes|=t);e=e.return}}function na(e,t){Xo=e,Zo=Jo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(Ii=!0),e.firstContext=null)}function oa(e,t){if(Zo!==e&&!1!==t&&0!==t)if("number"===typeof t&&1073741823!==t||(Zo=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Jo){if(null===Xo)throw Error(i(308));Jo=t,Xo.dependencies={lanes:0,firstContext:t,responders:null}}else Jo=Jo.next=t;return e._currentValue}var aa=!1;function ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function la(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ua(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ca(e,t){if(null!==(e=e.updateQueue)){var r=(e=e.shared).pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}}function sa(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var o=null,a=null;if(null!==(r=r.firstBaseUpdate)){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===a?o=a=i:a=a.next=i,r=r.next}while(null!==r);null===a?o=a=t:a=a.next=t}else o=a=t;return r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:n.shared,effects:n.effects},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function fa(e,t,r,n){var a=e.updateQueue;aa=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,u=a.shared.pending;if(null!==u){a.shared.pending=null;var c=u,s=c.next;c.next=null,null===l?i=s:l.next=s,l=c;var f=e.alternate;if(null!==f){var d=(f=f.updateQueue).lastBaseUpdate;d!==l&&(null===d?f.firstBaseUpdate=s:d.next=s,f.lastBaseUpdate=c)}}if(null!==i){for(d=a.baseState,l=0,f=s=c=null;;){u=i.lane;var p=i.eventTime;if((n&u)===u){null!==f&&(f=f.next={eventTime:p,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var h=e,g=i;switch(u=t,p=r,g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(p,d,u);break e}d=h;break e;case 3:h.flags=-4097&h.flags|64;case 0:if(null===(u="function"===typeof(h=g.payload)?h.call(p,d,u):h)||void 0===u)break e;d=o({},d,u);break e;case 2:aa=!0}}null!==i.callback&&(e.flags|=32,null===(u=a.effects)?a.effects=[i]:u.push(i))}else p={eventTime:p,lane:u,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===f?(s=f=p,c=d):f=f.next=p,l|=u;if(null===(i=i.next)){if(null===(u=a.shared.pending))break;i=u.next,u.next=null,a.lastBaseUpdate=u,a.shared.pending=null}}null===f&&(c=d),a.baseState=c,a.firstBaseUpdate=s,a.lastBaseUpdate=f,ql|=l,e.lanes=l,e.memoizedState=d}}function da(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(null!==o){if(n.callback=null,n=r,"function"!==typeof o)throw Error(i(191,o));o.call(n)}}}var pa=(new n.Component).refs;function ha(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:o({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var ga={isMounted:function(e){return!!(e=e._reactInternals)&&Ke(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=cu(),o=su(e),a=ua(n,o);a.payload=t,void 0!==r&&null!==r&&(a.callback=r),ca(e,a),fu(e,o,n)},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=cu(),o=su(e),a=ua(n,o);a.tag=1,a.payload=t,void 0!==r&&null!==r&&(a.callback=r),ca(e,a),fu(e,o,n)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=cu(),n=su(e),o=ua(r,n);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),ca(e,o),fu(e,n,r)}};function va(e,t,r,n,o,a,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,a,i):!t.prototype||!t.prototype.isPureReactComponent||(!cn(r,n)||!cn(o,a))}function ma(e,t,r){var n=!1,o=co,a=t.contextType;return"object"===typeof a&&null!==a?a=oa(a):(o=go(t)?po:so.current,a=(n=null!==(n=t.contextTypes)&&void 0!==n)?ho(e,o):co),t=new t(r,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ga,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ya(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ga.enqueueReplaceState(t,t.state,null)}function ba(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=pa,ia(e);var a=t.contextType;"object"===typeof a&&null!==a?o.context=oa(a):(a=go(t)?po:so.current,o.context=ho(e,a)),fa(e,r,o,n),o.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(ha(e,t,a,r),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ga.enqueueReplaceState(o,o.state,null),fa(e,r,o,n),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4)}var wa=Array.isArray;function ka(e,t,r){if(null!==(e=r.ref)&&"function"!==typeof e&&"object"!==typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(i(309));var n=r.stateNode}if(!n)throw Error(i(147,e));var o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:((t=function(e){var t=n.refs;t===pa&&(t=n.refs={}),null===e?delete t[o]:t[o]=e})._stringRef=o,t)}if("string"!==typeof e)throw Error(i(284));if(!r._owner)throw Error(i(290,e))}return e}function Ea(e,t){if("textarea"!==e.type)throw Error(i(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function xa(e){function t(t,r){if(e){var n=t.lastEffect;null!==n?(n.nextEffect=r,t.lastEffect=r):t.firstEffect=t.lastEffect=r,r.nextEffect=null,r.flags=8}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Vu(e,t)).index=0,e.sibling=null,e}function a(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags=2,r):n:(t.flags=2,r):r}function l(t){return e&&null===t.alternate&&(t.flags=2),t}function u(e,t,r,n){return null===t||6!==t.tag?((t=Gu(r,e.mode,n)).return=e,t):((t=o(t,r)).return=e,t)}function c(e,t,r,n){return null!==t&&t.elementType===r.type?((n=o(t,r.props)).ref=ka(e,t,r),n.return=e,n):((n=Hu(r.type,r.key,r.props,null,e.mode,n)).ref=ka(e,t,r),n.return=e,n)}function s(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Qu(r,e.mode,n)).return=e,t):((t=o(t,r.children||[])).return=e,t)}function f(e,t,r,n,a){return null===t||7!==t.tag?((t=Wu(r,e.mode,n,a)).return=e,t):((t=o(t,r)).return=e,t)}function d(e,t,r){if("string"===typeof t||"number"===typeof t)return(t=Gu(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case E:return(r=Hu(t.type,t.key,t.props,null,e.mode,r)).ref=ka(e,null,t),r.return=e,r;case x:return(t=Qu(t,e.mode,r)).return=e,t}if(wa(t)||B(t))return(t=Wu(t,e.mode,r,null)).return=e,t;Ea(e,t)}return null}function p(e,t,r,n){var o=null!==t?t.key:null;if("string"===typeof r||"number"===typeof r)return null!==o?null:u(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case E:return r.key===o?r.type===S?f(e,t,r.props.children,n,o):c(e,t,r,n):null;case x:return r.key===o?s(e,t,r,n):null}if(wa(r)||B(r))return null!==o?null:f(e,t,r,n,null);Ea(e,r)}return null}function h(e,t,r,n,o){if("string"===typeof n||"number"===typeof n)return u(t,e=e.get(r)||null,""+n,o);if("object"===typeof n&&null!==n){switch(n.$$typeof){case E:return e=e.get(null===n.key?r:n.key)||null,n.type===S?f(t,e,n.props.children,o,n.key):c(t,e,n,o);case x:return s(t,e=e.get(null===n.key?r:n.key)||null,n,o)}if(wa(n)||B(n))return f(t,e=e.get(r)||null,n,o,null);Ea(t,n)}return null}function g(o,i,l,u){for(var c=null,s=null,f=i,g=i=0,v=null;null!==f&&g<l.length;g++){f.index>g?(v=f,f=null):v=f.sibling;var m=p(o,f,l[g],u);if(null===m){null===f&&(f=v);break}e&&f&&null===m.alternate&&t(o,f),i=a(m,i,g),null===s?c=m:s.sibling=m,s=m,f=v}if(g===l.length)return r(o,f),c;if(null===f){for(;g<l.length;g++)null!==(f=d(o,l[g],u))&&(i=a(f,i,g),null===s?c=f:s.sibling=f,s=f);return c}for(f=n(o,f);g<l.length;g++)null!==(v=h(f,o,g,l[g],u))&&(e&&null!==v.alternate&&f.delete(null===v.key?g:v.key),i=a(v,i,g),null===s?c=v:s.sibling=v,s=v);return e&&f.forEach((function(e){return t(o,e)})),c}function v(o,l,u,c){var s=B(u);if("function"!==typeof s)throw Error(i(150));if(null==(u=s.call(u)))throw Error(i(151));for(var f=s=null,g=l,v=l=0,m=null,y=u.next();null!==g&&!y.done;v++,y=u.next()){g.index>v?(m=g,g=null):m=g.sibling;var b=p(o,g,y.value,c);if(null===b){null===g&&(g=m);break}e&&g&&null===b.alternate&&t(o,g),l=a(b,l,v),null===f?s=b:f.sibling=b,f=b,g=m}if(y.done)return r(o,g),s;if(null===g){for(;!y.done;v++,y=u.next())null!==(y=d(o,y.value,c))&&(l=a(y,l,v),null===f?s=y:f.sibling=y,f=y);return s}for(g=n(o,g);!y.done;v++,y=u.next())null!==(y=h(g,o,v,y.value,c))&&(e&&null!==y.alternate&&g.delete(null===y.key?v:y.key),l=a(y,l,v),null===f?s=y:f.sibling=y,f=y);return e&&g.forEach((function(e){return t(o,e)})),s}return function(e,n,a,u){var c="object"===typeof a&&null!==a&&a.type===S&&null===a.key;c&&(a=a.props.children);var s="object"===typeof a&&null!==a;if(s)switch(a.$$typeof){case E:e:{for(s=a.key,c=n;null!==c;){if(c.key===s){switch(c.tag){case 7:if(a.type===S){r(e,c.sibling),(n=o(c,a.props.children)).return=e,e=n;break e}break;default:if(c.elementType===a.type){r(e,c.sibling),(n=o(c,a.props)).ref=ka(e,c,a),n.return=e,e=n;break e}}r(e,c);break}t(e,c),c=c.sibling}a.type===S?((n=Wu(a.props.children,e.mode,u,a.key)).return=e,e=n):((u=Hu(a.type,a.key,a.props,null,e.mode,u)).ref=ka(e,n,a),u.return=e,e=u)}return l(e);case x:e:{for(c=a.key;null!==n;){if(n.key===c){if(4===n.tag&&n.stateNode.containerInfo===a.containerInfo&&n.stateNode.implementation===a.implementation){r(e,n.sibling),(n=o(n,a.children||[])).return=e,e=n;break e}r(e,n);break}t(e,n),n=n.sibling}(n=Qu(a,e.mode,u)).return=e,e=n}return l(e)}if("string"===typeof a||"number"===typeof a)return a=""+a,null!==n&&6===n.tag?(r(e,n.sibling),(n=o(n,a)).return=e,e=n):(r(e,n),(n=Gu(a,e.mode,u)).return=e,e=n),l(e);if(wa(a))return g(e,n,a,u);if(B(a))return v(e,n,a,u);if(s&&Ea(e,a),"undefined"===typeof a&&!c)switch(e.tag){case 1:case 22:case 0:case 11:case 15:throw Error(i(152,G(e.type)||"Component"))}return r(e,n)}}var Sa=xa(!0),_a=xa(!1),Ta={},Ca=io(Ta),Oa=io(Ta),Pa=io(Ta);function Ra(e){if(e===Ta)throw Error(i(174));return e}function Na(e,t){switch(uo(Pa,t),uo(Oa,e),uo(Ca,Ta),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:he(null,"");break;default:t=he(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}lo(Ca),uo(Ca,t)}function La(){lo(Ca),lo(Oa),lo(Pa)}function Aa(e){Ra(Pa.current);var t=Ra(Ca.current),r=he(t,e.type);t!==r&&(uo(Oa,e),uo(Ca,r))}function Ia(e){Oa.current===e&&(lo(Ca),lo(Oa))}var ja=io(0);function Ma(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(64&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Da=null,qa=null,za=!1;function Ua(e,t){var r=Fu(5,null,null,0);r.elementType="DELETED",r.type="DELETED",r.stateNode=t,r.return=e,r.flags=8,null!==e.lastEffect?(e.lastEffect.nextEffect=r,e.lastEffect=r):e.firstEffect=e.lastEffect=r}function Fa(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function Ba(e){if(za){var t=qa;if(t){var r=t;if(!Fa(e,t)){if(!(t=Wn(r.nextSibling))||!Fa(e,t))return e.flags=-1025&e.flags|2,za=!1,void(Da=e);Ua(Da,r)}Da=e,qa=Wn(t.firstChild)}else e.flags=-1025&e.flags|2,za=!1,Da=e}}function Va(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;Da=e}function Ha(e){if(e!==Da)return!1;if(!za)return Va(e),za=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!Fn(t,e.memoizedProps))for(t=qa;t;)Ua(e,t),t=Wn(t.nextSibling);if(Va(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){qa=Wn(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}qa=null}}else qa=Da?Wn(e.stateNode.nextSibling):null;return!0}function Wa(){qa=Da=null,za=!1}var $a=[];function Ga(){for(var e=0;e<$a.length;e++)$a[e]._workInProgressVersionPrimary=null;$a.length=0}var Qa=k.ReactCurrentDispatcher,Ya=k.ReactCurrentBatchConfig,Ka=0,Xa=null,Ja=null,Za=null,ei=!1,ti=!1;function ri(){throw Error(i(321))}function ni(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ln(e[r],t[r]))return!1;return!0}function oi(e,t,r,n,o,a){if(Ka=a,Xa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qa.current=null===e||null===e.memoizedState?Ri:Ni,e=r(n,o),ti){a=0;do{if(ti=!1,!(25>a))throw Error(i(301));a+=1,Za=Ja=null,t.updateQueue=null,Qa.current=Li,e=r(n,o)}while(ti)}if(Qa.current=Pi,t=null!==Ja&&null!==Ja.next,Ka=0,Za=Ja=Xa=null,ei=!1,t)throw Error(i(300));return e}function ai(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Za?Xa.memoizedState=Za=e:Za=Za.next=e,Za}function ii(){if(null===Ja){var e=Xa.alternate;e=null!==e?e.memoizedState:null}else e=Ja.next;var t=null===Za?Xa.memoizedState:Za.next;if(null!==t)Za=t,Ja=e;else{if(null===e)throw Error(i(310));e={memoizedState:(Ja=e).memoizedState,baseState:Ja.baseState,baseQueue:Ja.baseQueue,queue:Ja.queue,next:null},null===Za?Xa.memoizedState=Za=e:Za=Za.next=e}return Za}function li(e,t){return"function"===typeof t?t(e):t}function ui(e){var t=ii(),r=t.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=e;var n=Ja,o=n.baseQueue,a=r.pending;if(null!==a){if(null!==o){var l=o.next;o.next=a.next,a.next=l}n.baseQueue=o=a,r.pending=null}if(null!==o){o=o.next,n=n.baseState;var u=l=a=null,c=o;do{var s=c.lane;if((Ka&s)===s)null!==u&&(u=u.next={lane:0,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null}),n=c.eagerReducer===e?c.eagerState:e(n,c.action);else{var f={lane:s,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null};null===u?(l=u=f,a=n):u=u.next=f,Xa.lanes|=s,ql|=s}c=c.next}while(null!==c&&c!==o);null===u?a=n:u.next=l,ln(n,t.memoizedState)||(Ii=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=u,r.lastRenderedState=n}return[t.memoizedState,r.dispatch]}function ci(e){var t=ii(),r=t.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,a=t.memoizedState;if(null!==o){r.pending=null;var l=o=o.next;do{a=e(a,l.action),l=l.next}while(l!==o);ln(a,t.memoizedState)||(Ii=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function si(e,t,r){var n=t._getVersion;n=n(t._source);var o=t._workInProgressVersionPrimary;if(null!==o?e=o===n:(e=e.mutableReadLanes,(e=(Ka&e)===e)&&(t._workInProgressVersionPrimary=n,$a.push(t))),e)return r(t._source);throw $a.push(t),Error(i(350))}function fi(e,t,r,n){var o=Rl;if(null===o)throw Error(i(349));var a=t._getVersion,l=a(t._source),u=Qa.current,c=u.useState((function(){return si(o,t,r)})),s=c[1],f=c[0];c=Za;var d=e.memoizedState,p=d.refs,h=p.getSnapshot,g=d.source;d=d.subscribe;var v=Xa;return e.memoizedState={refs:p,source:t,subscribe:n},u.useEffect((function(){p.getSnapshot=r,p.setSnapshot=s;var e=a(t._source);if(!ln(l,e)){e=r(t._source),ln(f,e)||(s(e),e=su(v),o.mutableReadLanes|=e&o.pendingLanes),e=o.mutableReadLanes,o.entangledLanes|=e;for(var n=o.entanglements,i=e;0<i;){var u=31-Ht(i),c=1<<u;n[u]|=e,i&=~c}}}),[r,t,n]),u.useEffect((function(){return n(t._source,(function(){var e=p.getSnapshot,r=p.setSnapshot;try{r(e(t._source));var n=su(v);o.mutableReadLanes|=n&o.pendingLanes}catch(e){r((function(){throw e}))}}))}),[t,n]),ln(h,r)&&ln(g,t)&&ln(d,n)||((e={pending:null,dispatch:null,lastRenderedReducer:li,lastRenderedState:f}).dispatch=s=Oi.bind(null,Xa,e),c.queue=e,c.baseQueue=null,f=si(o,t,r),c.memoizedState=c.baseState=f),f}function di(e,t,r){return fi(ii(),e,t,r)}function pi(e){var t=ai();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:li,lastRenderedState:e}).dispatch=Oi.bind(null,Xa,e),[t.memoizedState,e]}function hi(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=Xa.updateQueue)?(t={lastEffect:null},Xa.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function gi(e){return e={current:e},ai().memoizedState=e}function vi(){return ii().memoizedState}function mi(e,t,r,n){var o=ai();Xa.flags|=e,o.memoizedState=hi(1|t,r,void 0,void 0===n?null:n)}function yi(e,t,r,n){var o=ii();n=void 0===n?null:n;var a=void 0;if(null!==Ja){var i=Ja.memoizedState;if(a=i.destroy,null!==n&&ni(n,i.deps))return void hi(t,r,a,n)}Xa.flags|=e,o.memoizedState=hi(1|t,r,a,n)}function bi(e,t){return mi(516,4,e,t)}function wi(e,t){return yi(516,4,e,t)}function ki(e,t){return yi(4,2,e,t)}function Ei(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function xi(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,yi(4,2,Ei.bind(null,t,e),r)}function Si(){}function _i(e,t){var r=ii();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&ni(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Ti(e,t){var r=ii();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&ni(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Ci(e,t){var r=Bo();Ho(98>r?98:r,(function(){e(!0)})),Ho(97<r?97:r,(function(){var r=Ya.transition;Ya.transition=1;try{e(!1),t()}finally{Ya.transition=r}}))}function Oi(e,t,r){var n=cu(),o=su(e),a={lane:o,action:r,eagerReducer:null,eagerState:null,next:null},i=t.pending;if(null===i?a.next=a:(a.next=i.next,i.next=a),t.pending=a,i=e.alternate,e===Xa||null!==i&&i===Xa)ti=ei=!0;else{if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var l=t.lastRenderedState,u=i(l,r);if(a.eagerReducer=i,a.eagerState=u,ln(u,l))return}catch(e){}fu(e,o,n)}}var Pi={readContext:oa,useCallback:ri,useContext:ri,useEffect:ri,useImperativeHandle:ri,useLayoutEffect:ri,useMemo:ri,useReducer:ri,useRef:ri,useState:ri,useDebugValue:ri,useDeferredValue:ri,useTransition:ri,useMutableSource:ri,useOpaqueIdentifier:ri,unstable_isNewReconciler:!1},Ri={readContext:oa,useCallback:function(e,t){return ai().memoizedState=[e,void 0===t?null:t],e},useContext:oa,useEffect:bi,useImperativeHandle:function(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,mi(4,2,Ei.bind(null,t,e),r)},useLayoutEffect:function(e,t){return mi(4,2,e,t)},useMemo:function(e,t){var r=ai();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=ai();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e=(e=n.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=Oi.bind(null,Xa,e),[n.memoizedState,e]},useRef:gi,useState:pi,useDebugValue:Si,useDeferredValue:function(e){var t=pi(e),r=t[0],n=t[1];return bi((function(){var t=Ya.transition;Ya.transition=1;try{n(e)}finally{Ya.transition=t}}),[e]),r},useTransition:function(){var e=pi(!1),t=e[0];return gi(e=Ci.bind(null,e[1])),[e,t]},useMutableSource:function(e,t,r){var n=ai();return n.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:r},fi(n,e,t,r)},useOpaqueIdentifier:function(){if(za){var e=!1,t=function(e){return{$$typeof:j,toString:e,valueOf:e}}((function(){throw e||(e=!0,r("r:"+(Gn++).toString(36))),Error(i(355))})),r=pi(t)[1];return 0===(2&Xa.mode)&&(Xa.flags|=516,hi(5,(function(){r("r:"+(Gn++).toString(36))}),void 0,null)),t}return pi(t="r:"+(Gn++).toString(36)),t},unstable_isNewReconciler:!1},Ni={readContext:oa,useCallback:_i,useContext:oa,useEffect:wi,useImperativeHandle:xi,useLayoutEffect:ki,useMemo:Ti,useReducer:ui,useRef:vi,useState:function(){return ui(li)},useDebugValue:Si,useDeferredValue:function(e){var t=ui(li),r=t[0],n=t[1];return wi((function(){var t=Ya.transition;Ya.transition=1;try{n(e)}finally{Ya.transition=t}}),[e]),r},useTransition:function(){var e=ui(li)[0];return[vi().current,e]},useMutableSource:di,useOpaqueIdentifier:function(){return ui(li)[0]},unstable_isNewReconciler:!1},Li={readContext:oa,useCallback:_i,useContext:oa,useEffect:wi,useImperativeHandle:xi,useLayoutEffect:ki,useMemo:Ti,useReducer:ci,useRef:vi,useState:function(){return ci(li)},useDebugValue:Si,useDeferredValue:function(e){var t=ci(li),r=t[0],n=t[1];return wi((function(){var t=Ya.transition;Ya.transition=1;try{n(e)}finally{Ya.transition=t}}),[e]),r},useTransition:function(){var e=ci(li)[0];return[vi().current,e]},useMutableSource:di,useOpaqueIdentifier:function(){return ci(li)[0]},unstable_isNewReconciler:!1},Ai=k.ReactCurrentOwner,Ii=!1;function ji(e,t,r,n){t.child=null===e?_a(t,null,r,n):Sa(t,e.child,r,n)}function Mi(e,t,r,n,o){r=r.render;var a=t.ref;return na(t,o),n=oi(e,t,r,n,a,o),null===e||Ii?(t.flags|=1,ji(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,rl(e,t,o))}function Di(e,t,r,n,o,a){if(null===e){var i=r.type;return"function"!==typeof i||Bu(i)||void 0!==i.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=Hu(r.type,null,n,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,qi(e,t,i,n,o,a))}return i=e.child,0===(o&a)&&(o=i.memoizedProps,(r=null!==(r=r.compare)?r:cn)(o,n)&&e.ref===t.ref)?rl(e,t,a):(t.flags|=1,(e=Vu(i,n)).ref=t.ref,e.return=t,t.child=e)}function qi(e,t,r,n,o,a){if(null!==e&&cn(e.memoizedProps,n)&&e.ref===t.ref){if(Ii=!1,0===(a&o))return t.lanes=e.lanes,rl(e,t,a);0!==(16384&e.flags)&&(Ii=!0)}return Fi(e,t,r,n,a)}function zi(e,t,r){var n=t.pendingProps,o=n.children,a=null!==e?e.memoizedState:null;if("hidden"===n.mode||"unstable-defer-without-hiding"===n.mode)if(0===(4&t.mode))t.memoizedState={baseLanes:0},bu(t,r);else{if(0===(1073741824&r))return e=null!==a?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},bu(t,e),null;t.memoizedState={baseLanes:0},bu(t,null!==a?a.baseLanes:r)}else null!==a?(n=a.baseLanes|r,t.memoizedState=null):n=r,bu(t,n);return ji(e,t,o,r),t.child}function Ui(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=128)}function Fi(e,t,r,n,o){var a=go(r)?po:so.current;return a=ho(t,a),na(t,o),r=oi(e,t,r,n,a,o),null===e||Ii?(t.flags|=1,ji(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,rl(e,t,o))}function Bi(e,t,r,n,o){if(go(r)){var a=!0;bo(t)}else a=!1;if(na(t,o),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),ma(t,r,n),ba(t,r,n,o),n=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var u=i.context,c=r.contextType;"object"===typeof c&&null!==c?c=oa(c):c=ho(t,c=go(r)?po:so.current);var s=r.getDerivedStateFromProps,f="function"===typeof s||"function"===typeof i.getSnapshotBeforeUpdate;f||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==n||u!==c)&&ya(t,i,n,c),aa=!1;var d=t.memoizedState;i.state=d,fa(t,n,i,o),u=t.memoizedState,l!==n||d!==u||fo.current||aa?("function"===typeof s&&(ha(t,r,s,n),u=t.memoizedState),(l=aa||va(t,r,l,n,d,u,c))?(f||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4)):("function"===typeof i.componentDidMount&&(t.flags|=4),t.memoizedProps=n,t.memoizedState=u),i.props=n,i.state=u,i.context=c,n=l):("function"===typeof i.componentDidMount&&(t.flags|=4),n=!1)}else{i=t.stateNode,la(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Yo(t.type,l),i.props=c,f=t.pendingProps,d=i.context,"object"===typeof(u=r.contextType)&&null!==u?u=oa(u):u=ho(t,u=go(r)?po:so.current);var p=r.getDerivedStateFromProps;(s="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==f||d!==u)&&ya(t,i,n,u),aa=!1,d=t.memoizedState,i.state=d,fa(t,n,i,o);var h=t.memoizedState;l!==f||d!==h||fo.current||aa?("function"===typeof p&&(ha(t,r,p,n),h=t.memoizedState),(c=aa||va(t,r,c,n,d,h,u))?(s||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(n,h,u),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(n,h,u)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=256)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),t.memoizedProps=n,t.memoizedState=h),i.props=n,i.state=h,i.context=u,n=c):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),n=!1)}return Vi(e,t,r,n,a,o)}function Vi(e,t,r,n,o,a){Ui(e,t);var i=0!==(64&t.flags);if(!n&&!i)return o&&wo(t,r,!1),rl(e,t,a);n=t.stateNode,Ai.current=t;var l=i&&"function"!==typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&i?(t.child=Sa(t,e.child,null,a),t.child=Sa(t,null,l,a)):ji(e,t,l,a),t.memoizedState=n.state,o&&wo(t,r,!0),t.child}function Hi(e){var t=e.stateNode;t.pendingContext?mo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&mo(0,t.context,!1),Na(e,t.containerInfo)}var Wi,$i,Gi,Qi={dehydrated:null,retryLane:0};function Yi(e,t,r){var n,o=t.pendingProps,a=ja.current,i=!1;return(n=0!==(64&t.flags))||(n=(null===e||null!==e.memoizedState)&&0!==(2&a)),n?(i=!0,t.flags&=-65):null!==e&&null===e.memoizedState||void 0===o.fallback||!0===o.unstable_avoidThisFallback||(a|=1),uo(ja,1&a),null===e?(void 0!==o.fallback&&Ba(t),e=o.children,a=o.fallback,i?(e=Ki(t,e,a,r),t.child.memoizedState={baseLanes:r},t.memoizedState=Qi,e):"number"===typeof o.unstable_expectedLoadTime?(e=Ki(t,e,a,r),t.child.memoizedState={baseLanes:r},t.memoizedState=Qi,t.lanes=33554432,e):((r=$u({mode:"visible",children:e},t.mode,r,null)).return=t,t.child=r)):(e.memoizedState,i?(o=Ji(e,t,o.children,o.fallback,r),i=t.child,a=e.child.memoizedState,i.memoizedState=null===a?{baseLanes:r}:{baseLanes:a.baseLanes|r},i.childLanes=e.childLanes&~r,t.memoizedState=Qi,o):(r=Xi(e,t,o.children,r),t.memoizedState=null,r))}function Ki(e,t,r,n){var o=e.mode,a=e.child;return t={mode:"hidden",children:t},0===(2&o)&&null!==a?(a.childLanes=0,a.pendingProps=t):a=$u(t,o,0,null),r=Wu(r,o,n,null),a.return=e,r.return=e,a.sibling=r,e.child=a,r}function Xi(e,t,r,n){var o=e.child;return e=o.sibling,r=Vu(o,{mode:"visible",children:r}),0===(2&t.mode)&&(r.lanes=n),r.return=t,r.sibling=null,null!==e&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=r}function Ji(e,t,r,n,o){var a=t.mode,i=e.child;e=i.sibling;var l={mode:"hidden",children:r};return 0===(2&a)&&t.child!==i?((r=t.child).childLanes=0,r.pendingProps=l,null!==(i=r.lastEffect)?(t.firstEffect=r.firstEffect,t.lastEffect=i,i.nextEffect=null):t.firstEffect=t.lastEffect=null):r=Vu(i,l),null!==e?n=Vu(e,n):(n=Wu(n,a,o,null)).flags|=2,n.return=t,r.return=t,r.sibling=n,t.child=r,n}function Zi(e,t){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),ra(e.return,t)}function el(e,t,r,n,o,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o,lastEffect:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o,i.lastEffect=a)}function tl(e,t,r){var n=t.pendingProps,o=n.revealOrder,a=n.tail;if(ji(e,t,n.children,r),0!==(2&(n=ja.current)))n=1&n|2,t.flags|=64;else{if(null!==e&&0!==(64&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Zi(e,r);else if(19===e.tag)Zi(e,r);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(uo(ja,n),0===(2&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;null!==r;)null!==(e=r.alternate)&&null===Ma(e)&&(o=r),r=r.sibling;null===(r=o)?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),el(t,!1,o,r,a,t.lastEffect);break;case"backwards":for(r=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===Ma(e)){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}el(t,!0,r,null,a,t.lastEffect);break;case"together":el(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function rl(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),ql|=t.lanes,0!==(r&t.childLanes)){if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(r=Vu(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Vu(e,e.pendingProps)).return=t;r.sibling=null}return t.child}return null}function nl(e,t){if(!za)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ol(e,t,r){var n=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return go(t.type)&&vo(),null;case 3:return La(),lo(fo),lo(so),Ga(),(n=t.stateNode).pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(Ha(t)?t.flags|=4:n.hydrate||(t.flags|=256)),null;case 5:Ia(t);var a=Ra(Pa.current);if(r=t.type,null!==e&&null!=t.stateNode)$i(e,t,r,n),e.ref!==t.ref&&(t.flags|=128);else{if(!n){if(null===t.stateNode)throw Error(i(166));return null}if(e=Ra(Ca.current),Ha(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[Yn]=t,n[Kn]=l,r){case"dialog":Cn("cancel",n),Cn("close",n);break;case"iframe":case"object":case"embed":Cn("load",n);break;case"video":case"audio":for(e=0;e<xn.length;e++)Cn(xn[e],n);break;case"source":Cn("error",n);break;case"img":case"image":case"link":Cn("error",n),Cn("load",n);break;case"details":Cn("toggle",n);break;case"input":ee(n,l),Cn("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},Cn("invalid",n);break;case"textarea":ue(n,l),Cn("invalid",n)}for(var c in Se(r,l),e=null,l)l.hasOwnProperty(c)&&(a=l[c],"children"===c?"string"===typeof a?n.textContent!==a&&(e=["children",a]):"number"===typeof a&&n.textContent!==""+a&&(e=["children",""+a]):u.hasOwnProperty(c)&&null!=a&&"onScroll"===c&&Cn("scroll",n));switch(r){case"input":K(n),ne(n,l,!0);break;case"textarea":K(n),se(n);break;case"select":case"option":break;default:"function"===typeof l.onClick&&(n.onclick=Dn)}n=e,t.updateQueue=n,null!==n&&(t.flags|=4)}else{switch(c=9===a.nodeType?a:a.ownerDocument,e===fe&&(e=pe(r)),e===fe?"script"===r?((e=c.createElement("div")).innerHTML="<script><\\/script>",e=e.removeChild(e.firstChild)):"string"===typeof n.is?e=c.createElement(r,{is:n.is}):(e=c.createElement(r),"select"===r&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,r),e[Yn]=t,e[Kn]=n,Wi(e,t),t.stateNode=e,c=_e(r,n),r){case"dialog":Cn("cancel",e),Cn("close",e),a=n;break;case"iframe":case"object":case"embed":Cn("load",e),a=n;break;case"video":case"audio":for(a=0;a<xn.length;a++)Cn(xn[a],e);a=n;break;case"source":Cn("error",e),a=n;break;case"img":case"image":case"link":Cn("error",e),Cn("load",e),a=n;break;case"details":Cn("toggle",e),a=n;break;case"input":ee(e,n),a=Z(e,n),Cn("invalid",e);break;case"option":a=ae(e,n);break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=o({},n,{value:void 0}),Cn("invalid",e);break;case"textarea":ue(e,n),a=le(e,n),Cn("invalid",e);break;default:a=n}Se(r,a);var s=a;for(l in s)if(s.hasOwnProperty(l)){var f=s[l];"style"===l?Ee(e,f):"dangerouslySetInnerHTML"===l?null!=(f=f?f.__html:void 0)&&me(e,f):"children"===l?"string"===typeof f?("textarea"!==r||""!==f)&&ye(e,f):"number"===typeof f&&ye(e,""+f):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(u.hasOwnProperty(l)?null!=f&&"onScroll"===l&&Cn("scroll",e):null!=f&&w(e,l,f,c))}switch(r){case"input":K(e),ne(e,n,!1);break;case"textarea":K(e),se(e);break;case"option":null!=n.value&&e.setAttribute("value",""+Q(n.value));break;case"select":e.multiple=!!n.multiple,null!=(l=n.value)?ie(e,!!n.multiple,l,!1):null!=n.defaultValue&&ie(e,!!n.multiple,n.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Dn)}Un(r,n)&&(t.flags|=4)}null!==t.ref&&(t.flags|=128)}return null;case 6:if(e&&null!=t.stateNode)Gi(0,t,e.memoizedProps,n);else{if("string"!==typeof n&&null===t.stateNode)throw Error(i(166));r=Ra(Pa.current),Ra(Ca.current),Ha(t)?(n=t.stateNode,r=t.memoizedProps,n[Yn]=t,n.nodeValue!==r&&(t.flags|=4)):((n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[Yn]=t,t.stateNode=n)}return null;case 13:return lo(ja),n=t.memoizedState,0!==(64&t.flags)?(t.lanes=r,t):(n=null!==n,r=!1,null===e?void 0!==t.memoizedProps.fallback&&Ha(t):r=null!==e.memoizedState,n&&!r&&0!==(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!==(1&ja.current)?0===jl&&(jl=3):(0!==jl&&3!==jl||(jl=4),null===Rl||0===(134217727&ql)&&0===(134217727&zl)||gu(Rl,Ll))),(n||r)&&(t.flags|=4),null);case 4:return La(),null===e&&Pn(t.stateNode.containerInfo),null;case 10:return ta(t),null;case 17:return go(t.type)&&vo(),null;case 19:if(lo(ja),null===(n=t.memoizedState))return null;if(l=0!==(64&t.flags),null===(c=n.rendering))if(l)nl(n,!1);else{if(0!==jl||null!==e&&0!==(64&e.flags))for(e=t.child;null!==e;){if(null!==(c=Ma(e))){for(t.flags|=64,nl(n,!1),null!==(l=c.updateQueue)&&(t.updateQueue=l,t.flags|=4),null===n.lastEffect&&(t.firstEffect=null),t.lastEffect=n.lastEffect,n=r,r=t.child;null!==r;)e=n,(l=r).flags&=2,l.nextEffect=null,l.firstEffect=null,l.lastEffect=null,null===(c=l.alternate)?(l.childLanes=0,l.lanes=e,l.child=null,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return uo(ja,1&ja.current|2),t.child}e=e.sibling}null!==n.tail&&Fo()>Vl&&(t.flags|=64,l=!0,nl(n,!1),t.lanes=33554432)}else{if(!l)if(null!==(e=Ma(c))){if(t.flags|=64,l=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),nl(n,!0),null===n.tail&&"hidden"===n.tailMode&&!c.alternate&&!za)return null!==(t=t.lastEffect=n.lastEffect)&&(t.nextEffect=null),null}else 2*Fo()-n.renderingStartTime>Vl&&1073741824!==r&&(t.flags|=64,l=!0,nl(n,!1),t.lanes=33554432);n.isBackwards?(c.sibling=t.child,t.child=c):(null!==(r=n.last)?r.sibling=c:t.child=c,n.last=c)}return null!==n.tail?(r=n.tail,n.rendering=r,n.tail=r.sibling,n.lastEffect=t.lastEffect,n.renderingStartTime=Fo(),r.sibling=null,t=ja.current,uo(ja,l?1&t|2:1&t),r):null;case 23:case 24:return wu(),null!==e&&null!==e.memoizedState!==(null!==t.memoizedState)&&"unstable-defer-without-hiding"!==n.mode&&(t.flags|=4),null}throw Error(i(156,t.tag))}function al(e){switch(e.tag){case 1:go(e.type)&&vo();var t=e.flags;return 4096&t?(e.flags=-4097&t|64,e):null;case 3:if(La(),lo(fo),lo(so),Ga(),0!==(64&(t=e.flags)))throw Error(i(285));return e.flags=-4097&t|64,e;case 5:return Ia(e),null;case 13:return lo(ja),4096&(t=e.flags)?(e.flags=-4097&t|64,e):null;case 19:return lo(ja),null;case 4:return La(),null;case 10:return ta(e),null;case 23:case 24:return wu(),null;default:return null}}function il(e,t){try{var r="",n=t;do{r+=$(n),n=n.return}while(n);var o=r}catch(e){o="\\nError generating stack: "+e.message+"\\n"+e.stack}return{value:e,source:t,stack:o}}function ll(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}Wi=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},$i=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,Ra(Ca.current);var i,l=null;switch(r){case"input":a=Z(e,a),n=Z(e,n),l=[];break;case"option":a=ae(e,a),n=ae(e,n),l=[];break;case"select":a=o({},a,{value:void 0}),n=o({},n,{value:void 0}),l=[];break;case"textarea":a=le(e,a),n=le(e,n),l=[];break;default:"function"!==typeof a.onClick&&"function"===typeof n.onClick&&(e.onclick=Dn)}for(f in Se(r,n),r=null,a)if(!n.hasOwnProperty(f)&&a.hasOwnProperty(f)&&null!=a[f])if("style"===f){var c=a[f];for(i in c)c.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else"dangerouslySetInnerHTML"!==f&&"children"!==f&&"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(u.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in n){var s=n[f];if(c=null!=a?a[f]:void 0,n.hasOwnProperty(f)&&s!==c&&(null!=s||null!=c))if("style"===f)if(c){for(i in c)!c.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in s)s.hasOwnProperty(i)&&c[i]!==s[i]&&(r||(r={}),r[i]=s[i])}else r||(l||(l=[]),l.push(f,r)),r=s;else"dangerouslySetInnerHTML"===f?(s=s?s.__html:void 0,c=c?c.__html:void 0,null!=s&&c!==s&&(l=l||[]).push(f,s)):"children"===f?"string"!==typeof s&&"number"!==typeof s||(l=l||[]).push(f,""+s):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&(u.hasOwnProperty(f)?(null!=s&&"onScroll"===f&&Cn("scroll",e),l||c===s||(l=[])):"object"===typeof s&&null!==s&&s.$$typeof===j?s.toString():(l=l||[]).push(f,s))}r&&(l=l||[]).push("style",r);var f=l;(t.updateQueue=f)&&(t.flags|=4)}},Gi=function(e,t,r,n){r!==n&&(t.flags|=4)};var ul="function"===typeof WeakMap?WeakMap:Map;function cl(e,t,r){(r=ua(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Gl||(Gl=!0,Ql=n),ll(0,t)},r}function sl(e,t,r){(r=ua(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"===typeof n){var o=t.value;r.payload=function(){return ll(0,t),n(o)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(r.callback=function(){"function"!==typeof n&&(null===Yl?Yl=new Set([this]):Yl.add(this),ll(0,t));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),r}var fl="function"===typeof WeakSet?WeakSet:Set;function dl(e){var t=e.ref;if(null!==t)if("function"===typeof t)try{t(null)}catch(t){Du(e,t)}else t.current=null}function pl(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(256&t.flags&&null!==e){var r=e.memoizedProps,n=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?r:Yo(t.type,r),n),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:return void(256&t.flags&&Hn(t.stateNode.containerInfo));case 5:case 6:case 4:case 17:return}throw Error(i(163))}function hl(e,t,r){switch(r.tag){case 0:case 11:case 15:case 22:if(null!==(t=null!==(t=r.updateQueue)?t.lastEffect:null)){e=t=t.next;do{if(3===(3&e.tag)){var n=e.create;e.destroy=n()}e=e.next}while(e!==t)}if(null!==(t=null!==(t=r.updateQueue)?t.lastEffect:null)){e=t=t.next;do{var o=e;n=o.next,0!==(4&(o=o.tag))&&0!==(1&o)&&(Iu(r,e),Au(r,e)),e=n}while(e!==t)}return;case 1:return e=r.stateNode,4&r.flags&&(null===t?e.componentDidMount():(n=r.elementType===r.type?t.memoizedProps:Yo(r.type,t.memoizedProps),e.componentDidUpdate(n,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),void(null!==(t=r.updateQueue)&&da(r,t,e));case 3:if(null!==(t=r.updateQueue)){if(e=null,null!==r.child)switch(r.child.tag){case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}da(r,t,e)}return;case 5:return e=r.stateNode,void(null===t&&4&r.flags&&Un(r.type,r.memoizedProps)&&e.focus());case 6:case 4:case 12:return;case 13:return void(null===r.memoizedState&&(r=r.alternate,null!==r&&(r=r.memoizedState,null!==r&&(r=r.dehydrated,null!==r&&Et(r)))));case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(i(163))}function gl(e,t){for(var r=e;;){if(5===r.tag){var n=r.stateNode;if(t)"function"===typeof(n=n.style).setProperty?n.setProperty("display","none","important"):n.display="none";else{n=r.stateNode;var o=r.memoizedProps.style;o=void 0!==o&&null!==o&&o.hasOwnProperty("display")?o.display:null,n.style.display=ke("display",o)}}else if(6===r.tag)r.stateNode.nodeValue=t?"":r.memoizedProps;else if((23!==r.tag&&24!==r.tag||null===r.memoizedState||r===e)&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===e)break;for(;null===r.sibling;){if(null===r.return||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function vl(e,t){if(Eo&&"function"===typeof Eo.onCommitFiberUnmount)try{Eo.onCommitFiberUnmount(ko,t)}catch(e){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var r=e=e.next;do{var n=r,o=n.destroy;if(n=n.tag,void 0!==o)if(0!==(4&n))Iu(t,r);else{n=t;try{o()}catch(e){Du(n,e)}}r=r.next}while(r!==e)}break;case 1:if(dl(t),"function"===typeof(e=t.stateNode).componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){Du(t,e)}break;case 5:dl(t);break;case 4:El(e,t)}}function ml(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function yl(e){return 5===e.tag||3===e.tag||4===e.tag}function bl(e){e:{for(var t=e.return;null!==t;){if(yl(t))break e;t=t.return}throw Error(i(160))}var r=t;switch(t=r.stateNode,r.tag){case 5:var n=!1;break;case 3:case 4:t=t.containerInfo,n=!0;break;default:throw Error(i(161))}16&r.flags&&(ye(t,""),r.flags&=-17);e:t:for(r=e;;){for(;null===r.sibling;){if(null===r.return||yl(r.return)){r=null;break e}r=r.return}for(r.sibling.return=r.return,r=r.sibling;5!==r.tag&&6!==r.tag&&18!==r.tag;){if(2&r.flags)continue t;if(null===r.child||4===r.tag)continue t;r.child.return=r,r=r.child}if(!(2&r.flags)){r=r.stateNode;break e}}n?wl(e,r,t):kl(e,r,t)}function wl(e,t,r){var n=e.tag,o=5===n||6===n;if(o)e=o?e.stateNode:e.stateNode.instance,t?8===r.nodeType?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(8===r.nodeType?(t=r.parentNode).insertBefore(e,r):(t=r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=Dn));else if(4!==n&&null!==(e=e.child))for(wl(e,t,r),e=e.sibling;null!==e;)wl(e,t,r),e=e.sibling}function kl(e,t,r){var n=e.tag,o=5===n||6===n;if(o)e=o?e.stateNode:e.stateNode.instance,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&null!==(e=e.child))for(kl(e,t,r),e=e.sibling;null!==e;)kl(e,t,r),e=e.sibling}function El(e,t){for(var r,n,o=t,a=!1;;){if(!a){a=o.return;e:for(;;){if(null===a)throw Error(i(160));switch(r=a.stateNode,a.tag){case 5:n=!1;break e;case 3:case 4:r=r.containerInfo,n=!0;break e}a=a.return}a=!0}if(5===o.tag||6===o.tag){e:for(var l=e,u=o,c=u;;)if(vl(l,c),null!==c.child&&4!==c.tag)c.child.return=c,c=c.child;else{if(c===u)break e;for(;null===c.sibling;){if(null===c.return||c.return===u)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n?(l=r,u=o.stateNode,8===l.nodeType?l.parentNode.removeChild(u):l.removeChild(u)):r.removeChild(o.stateNode)}else if(4===o.tag){if(null!==o.child){r=o.stateNode.containerInfo,n=!0,o.child.return=o,o=o.child;continue}}else if(vl(e,o),null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break;for(;null===o.sibling;){if(null===o.return||o.return===t)return;4===(o=o.return).tag&&(a=!1)}o.sibling.return=o.return,o=o.sibling}}function xl(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var n=r=r.next;do{3===(3&n.tag)&&(e=n.destroy,n.destroy=void 0,void 0!==e&&e()),n=n.next}while(n!==r)}return;case 1:return;case 5:if(null!=(r=t.stateNode)){n=t.memoizedProps;var o=null!==e?e.memoizedProps:n;e=t.type;var a=t.updateQueue;if(t.updateQueue=null,null!==a){for(r[Kn]=n,"input"===e&&"radio"===n.type&&null!=n.name&&te(r,n),_e(e,o),t=_e(e,n),o=0;o<a.length;o+=2){var l=a[o],u=a[o+1];"style"===l?Ee(r,u):"dangerouslySetInnerHTML"===l?me(r,u):"children"===l?ye(r,u):w(r,l,u,t)}switch(e){case"input":re(r,n);break;case"textarea":ce(r,n);break;case"select":e=r._wrapperState.wasMultiple,r._wrapperState.wasMultiple=!!n.multiple,null!=(a=n.value)?ie(r,!!n.multiple,a,!1):e!==!!n.multiple&&(null!=n.defaultValue?ie(r,!!n.multiple,n.defaultValue,!0):ie(r,!!n.multiple,n.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(i(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((r=t.stateNode).hydrate&&(r.hydrate=!1,Et(r.containerInfo)));case 12:return;case 13:return null!==t.memoizedState&&(Bl=Fo(),gl(t.child,!0)),void Sl(t);case 19:return void Sl(t);case 17:return;case 23:case 24:return void gl(t,null!==t.memoizedState)}throw Error(i(163))}function Sl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new fl),t.forEach((function(t){var n=zu.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))}))}}function _l(e,t){return null!==e&&(null===(e=e.memoizedState)||null!==e.dehydrated)&&(null!==(t=t.memoizedState)&&null===t.dehydrated)}var Tl=Math.ceil,Cl=k.ReactCurrentDispatcher,Ol=k.ReactCurrentOwner,Pl=0,Rl=null,Nl=null,Ll=0,Al=0,Il=io(0),jl=0,Ml=null,Dl=0,ql=0,zl=0,Ul=0,Fl=null,Bl=0,Vl=1/0;function Hl(){Vl=Fo()+500}var Wl,$l=null,Gl=!1,Ql=null,Yl=null,Kl=!1,Xl=null,Jl=90,Zl=[],eu=[],tu=null,ru=0,nu=null,ou=-1,au=0,iu=0,lu=null,uu=!1;function cu(){return 0!==(48&Pl)?Fo():-1!==ou?ou:ou=Fo()}function su(e){if(0===(2&(e=e.mode)))return 1;if(0===(4&e))return 99===Bo()?1:2;if(0===au&&(au=Dl),0!==Qo.transition){0!==iu&&(iu=null!==Fl?Fl.pendingLanes:0),e=au;var t=4186112&~iu;return 0===(t&=-t)&&(0===(t=(e=4186112&~e)&-e)&&(t=8192)),t}return e=Bo(),0!==(4&Pl)&&98===e?e=Ut(12,au):e=Ut(e=function(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}(e),au),e}function fu(e,t,r){if(50<ru)throw ru=0,nu=null,Error(i(185));if(null===(e=du(e,t)))return null;Vt(e,t,r),e===Rl&&(zl|=t,4===jl&&gu(e,Ll));var n=Bo();1===t?0!==(8&Pl)&&0===(48&Pl)?vu(e):(pu(e,r),0===Pl&&(Hl(),$o())):(0===(4&Pl)||98!==n&&99!==n||(null===tu?tu=new Set([e]):tu.add(e)),pu(e,r)),Fl=e}function du(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}function pu(e,t){for(var r=e.callbackNode,n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-Ht(l),c=1<<u,s=a[u];if(-1===s){if(0===(c&n)||0!==(c&o)){s=t,Dt(c);var f=Mt;a[u]=10<=f?s+250:6<=f?s+5e3:-1}}else s<=t&&(e.expiredLanes|=c);l&=~c}if(n=qt(e,e===Rl?Ll:0),t=Mt,0===n)null!==r&&(r!==jo&&_o(r),e.callbackNode=null,e.callbackPriority=0);else{if(null!==r){if(e.callbackPriority===t)return;r!==jo&&_o(r)}15===t?(r=vu.bind(null,e),null===Do?(Do=[r],qo=So(Ro,Go)):Do.push(r),r=jo):14===t?r=Wo(99,vu.bind(null,e)):r=Wo(r=function(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(i(358,e))}}(t),hu.bind(null,e)),e.callbackPriority=t,e.callbackNode=r}}function hu(e){if(ou=-1,iu=au=0,0!==(48&Pl))throw Error(i(327));var t=e.callbackNode;if(Lu()&&e.callbackNode!==t)return null;var r=qt(e,e===Rl?Ll:0);if(0===r)return null;var n=r,o=Pl;Pl|=16;var a=xu();for(Rl===e&&Ll===n||(Hl(),ku(e,n));;)try{Tu();break}catch(t){Eu(e,t)}if(ea(),Cl.current=a,Pl=o,null!==Nl?n=0:(Rl=null,Ll=0,n=jl),0!==(Dl&zl))ku(e,0);else if(0!==n){if(2===n&&(Pl|=64,e.hydrate&&(e.hydrate=!1,Hn(e.containerInfo)),0!==(r=zt(e))&&(n=Su(e,r))),1===n)throw t=Ml,ku(e,0),gu(e,r),pu(e,Fo()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=r,n){case 0:case 1:throw Error(i(345));case 2:Pu(e);break;case 3:if(gu(e,r),(62914560&r)===r&&10<(n=Bl+500-Fo())){if(0!==qt(e,0))break;if(((o=e.suspendedLanes)&r)!==r){cu(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Bn(Pu.bind(null,e),n);break}Pu(e);break;case 4:if(gu(e,r),(4186112&r)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-Ht(r);a=1<<l,(l=n[l])>o&&(o=l),r&=~a}if(r=o,10<(r=(120>(r=Fo()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tl(r/1960))-r)){e.timeoutHandle=Bn(Pu.bind(null,e),r);break}Pu(e);break;case 5:Pu(e);break;default:throw Error(i(329))}}return pu(e,Fo()),e.callbackNode===t?hu.bind(null,e):null}function gu(e,t){for(t&=~Ul,t&=~zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ht(t),n=1<<r;e[r]=-1,t&=~n}}function vu(e){if(0!==(48&Pl))throw Error(i(327));if(Lu(),e===Rl&&0!==(e.expiredLanes&Ll)){var t=Ll,r=Su(e,t);0!==(Dl&zl)&&(r=Su(e,t=qt(e,t)))}else r=Su(e,t=qt(e,0));if(0!==e.tag&&2===r&&(Pl|=64,e.hydrate&&(e.hydrate=!1,Hn(e.containerInfo)),0!==(t=zt(e))&&(r=Su(e,t))),1===r)throw r=Ml,ku(e,0),gu(e,t),pu(e,Fo()),r;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pu(e),pu(e,Fo()),null}function mu(e,t){var r=Pl;Pl|=1;try{return e(t)}finally{0===(Pl=r)&&(Hl(),$o())}}function yu(e,t){var r=Pl;Pl&=-2,Pl|=8;try{return e(t)}finally{0===(Pl=r)&&(Hl(),$o())}}function bu(e,t){uo(Il,Al),Al|=t,Dl|=t}function wu(){Al=Il.current,lo(Il)}function ku(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,Vn(r)),null!==Nl)for(r=Nl.return;null!==r;){var n=r;switch(n.tag){case 1:null!==(n=n.type.childContextTypes)&&void 0!==n&&vo();break;case 3:La(),lo(fo),lo(so),Ga();break;case 5:Ia(n);break;case 4:La();break;case 13:case 19:lo(ja);break;case 10:ta(n);break;case 23:case 24:wu()}r=r.return}Rl=e,Nl=Vu(e.current,null),Ll=Al=Dl=t,jl=0,Ml=null,Ul=zl=ql=0}function Eu(e,t){for(;;){var r=Nl;try{if(ea(),Qa.current=Pi,ei){for(var n=Xa.memoizedState;null!==n;){var o=n.queue;null!==o&&(o.pending=null),n=n.next}ei=!1}if(Ka=0,Za=Ja=Xa=null,ti=!1,Ol.current=null,null===r||null===r.return){jl=1,Ml=t,Nl=null;break}e:{var a=e,i=r.return,l=r,u=t;if(t=Ll,l.flags|=2048,l.firstEffect=l.lastEffect=null,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u;if(0===(2&l.mode)){var s=l.alternate;s?(l.updateQueue=s.updateQueue,l.memoizedState=s.memoizedState,l.lanes=s.lanes):(l.updateQueue=null,l.memoizedState=null)}var f=0!==(1&ja.current),d=i;do{var p;if(p=13===d.tag){var h=d.memoizedState;if(null!==h)p=null!==h.dehydrated;else{var g=d.memoizedProps;p=void 0!==g.fallback&&(!0!==g.unstable_avoidThisFallback||!f)}}if(p){var v=d.updateQueue;if(null===v){var m=new Set;m.add(c),d.updateQueue=m}else v.add(c);if(0===(2&d.mode)){if(d.flags|=64,l.flags|=16384,l.flags&=-2981,1===l.tag)if(null===l.alternate)l.tag=17;else{var y=ua(-1,1);y.tag=2,ca(l,y)}l.lanes|=1;break e}u=void 0,l=t;var b=a.pingCache;if(null===b?(b=a.pingCache=new ul,u=new Set,b.set(c,u)):void 0===(u=b.get(c))&&(u=new Set,b.set(c,u)),!u.has(l)){u.add(l);var w=qu.bind(null,a,c,l);c.then(w,w)}d.flags|=4096,d.lanes=t;break e}d=d.return}while(null!==d);u=Error((G(l.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\\n\\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==jl&&(jl=2),u=il(u,l),d=i;do{switch(d.tag){case 3:a=u,d.flags|=4096,t&=-t,d.lanes|=t,sa(d,cl(0,a,t));break e;case 1:a=u;var k=d.type,E=d.stateNode;if(0===(64&d.flags)&&("function"===typeof k.getDerivedStateFromError||null!==E&&"function"===typeof E.componentDidCatch&&(null===Yl||!Yl.has(E)))){d.flags|=4096,t&=-t,d.lanes|=t,sa(d,sl(d,a,t));break e}}d=d.return}while(null!==d)}Ou(r)}catch(e){t=e,Nl===r&&null!==r&&(Nl=r=r.return);continue}break}}function xu(){var e=Cl.current;return Cl.current=Pi,null===e?Pi:e}function Su(e,t){var r=Pl;Pl|=16;var n=xu();for(Rl===e&&Ll===t||ku(e,t);;)try{_u();break}catch(t){Eu(e,t)}if(ea(),Pl=r,Cl.current=n,null!==Nl)throw Error(i(261));return Rl=null,Ll=0,jl}function _u(){for(;null!==Nl;)Cu(Nl)}function Tu(){for(;null!==Nl&&!To();)Cu(Nl)}function Cu(e){var t=Wl(e.alternate,e,Al);e.memoizedProps=e.pendingProps,null===t?Ou(e):Nl=t,Ol.current=null}function Ou(e){var t=e;do{var r=t.alternate;if(e=t.return,0===(2048&t.flags)){if(null!==(r=ol(r,t,Al)))return void(Nl=r);if(24!==(r=t).tag&&23!==r.tag||null===r.memoizedState||0!==(1073741824&Al)||0===(4&r.mode)){for(var n=0,o=r.child;null!==o;)n|=o.lanes|o.childLanes,o=o.sibling;r.childLanes=n}null!==e&&0===(2048&e.flags)&&(null===e.firstEffect&&(e.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(null!==e.lastEffect?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(null!==(r=al(t)))return r.flags&=2047,void(Nl=r);null!==e&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(null!==(t=t.sibling))return void(Nl=t);Nl=t=e}while(null!==t);0===jl&&(jl=5)}function Pu(e){var t=Bo();return Ho(99,Ru.bind(null,e,t)),null}function Ru(e,t){do{Lu()}while(null!==Xl);if(0!==(48&Pl))throw Error(i(327));var r=e.finishedWork;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(i(177));e.callbackNode=null;var n=r.lanes|r.childLanes,o=n,a=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;for(var l=e.eventTimes,u=e.expirationTimes;0<a;){var c=31-Ht(a),s=1<<c;o[c]=0,l[c]=-1,u[c]=-1,a&=~s}if(null!==tu&&0===(24&n)&&tu.has(e)&&tu.delete(e),e===Rl&&(Nl=Rl=null,Ll=0),1<r.flags?null!==r.lastEffect?(r.lastEffect.nextEffect=r,n=r.firstEffect):n=r:n=r.firstEffect,null!==n){if(o=Pl,Pl|=32,Ol.current=null,qn=Yt,hn(l=pn())){if("selectionStart"in l)u={start:l.selectionStart,end:l.selectionEnd};else e:if(u=(u=l.ownerDocument)&&u.defaultView||window,(s=u.getSelection&&u.getSelection())&&0!==s.rangeCount){u=s.anchorNode,a=s.anchorOffset,c=s.focusNode,s=s.focusOffset;try{u.nodeType,c.nodeType}catch(e){u=null;break e}var f=0,d=-1,p=-1,h=0,g=0,v=l,m=null;t:for(;;){for(var y;v!==u||0!==a&&3!==v.nodeType||(d=f+a),v!==c||0!==s&&3!==v.nodeType||(p=f+s),3===v.nodeType&&(f+=v.nodeValue.length),null!==(y=v.firstChild);)m=v,v=y;for(;;){if(v===l)break t;if(m===u&&++h===a&&(d=f),m===c&&++g===s&&(p=f),null!==(y=v.nextSibling))break;m=(v=m).parentNode}v=y}u=-1===d||-1===p?null:{start:d,end:p}}else u=null;u=u||{start:0,end:0}}else u=null;zn={focusedElem:l,selectionRange:u},Yt=!1,lu=null,uu=!1,$l=n;do{try{Nu()}catch(e){if(null===$l)throw Error(i(330));Du($l,e),$l=$l.nextEffect}}while(null!==$l);lu=null,$l=n;do{try{for(l=e;null!==$l;){var b=$l.flags;if(16&b&&ye($l.stateNode,""),128&b){var w=$l.alternate;if(null!==w){var k=w.ref;null!==k&&("function"===typeof k?k(null):k.current=null)}}switch(1038&b){case 2:bl($l),$l.flags&=-3;break;case 6:bl($l),$l.flags&=-3,xl($l.alternate,$l);break;case 1024:$l.flags&=-1025;break;case 1028:$l.flags&=-1025,xl($l.alternate,$l);break;case 4:xl($l.alternate,$l);break;case 8:El(l,u=$l);var E=u.alternate;ml(u),null!==E&&ml(E)}$l=$l.nextEffect}}catch(e){if(null===$l)throw Error(i(330));Du($l,e),$l=$l.nextEffect}}while(null!==$l);if(k=zn,w=pn(),b=k.focusedElem,l=k.selectionRange,w!==b&&b&&b.ownerDocument&&dn(b.ownerDocument.documentElement,b)){null!==l&&hn(b)&&(w=l.start,void 0===(k=l.end)&&(k=w),"selectionStart"in b?(b.selectionStart=w,b.selectionEnd=Math.min(k,b.value.length)):(k=(w=b.ownerDocument||document)&&w.defaultView||window).getSelection&&(k=k.getSelection(),u=b.textContent.length,E=Math.min(l.start,u),l=void 0===l.end?E:Math.min(l.end,u),!k.extend&&E>l&&(u=l,l=E,E=u),u=fn(b,E),a=fn(b,l),u&&a&&(1!==k.rangeCount||k.anchorNode!==u.node||k.anchorOffset!==u.offset||k.focusNode!==a.node||k.focusOffset!==a.offset)&&((w=w.createRange()).setStart(u.node,u.offset),k.removeAllRanges(),E>l?(k.addRange(w),k.extend(a.node,a.offset)):(w.setEnd(a.node,a.offset),k.addRange(w))))),w=[];for(k=b;k=k.parentNode;)1===k.nodeType&&w.push({element:k,left:k.scrollLeft,top:k.scrollTop});for("function"===typeof b.focus&&b.focus(),b=0;b<w.length;b++)(k=w[b]).element.scrollLeft=k.left,k.element.scrollTop=k.top}Yt=!!qn,zn=qn=null,e.current=r,$l=n;do{try{for(b=e;null!==$l;){var x=$l.flags;if(36&x&&hl(b,$l.alternate,$l),128&x){w=void 0;var S=$l.ref;if(null!==S){var _=$l.stateNode;switch($l.tag){case 5:w=_;break;default:w=_}"function"===typeof S?S(w):S.current=w}}$l=$l.nextEffect}}catch(e){if(null===$l)throw Error(i(330));Du($l,e),$l=$l.nextEffect}}while(null!==$l);$l=null,Mo(),Pl=o}else e.current=r;if(Kl)Kl=!1,Xl=e,Jl=t;else for($l=n;null!==$l;)t=$l.nextEffect,$l.nextEffect=null,8&$l.flags&&((x=$l).sibling=null,x.stateNode=null),$l=t;if(0===(n=e.pendingLanes)&&(Yl=null),1===n?e===nu?ru++:(ru=0,nu=e):ru=0,r=r.stateNode,Eo&&"function"===typeof Eo.onCommitFiberRoot)try{Eo.onCommitFiberRoot(ko,r,void 0,64===(64&r.current.flags))}catch(e){}if(pu(e,Fo()),Gl)throw Gl=!1,e=Ql,Ql=null,e;return 0!==(8&Pl)||$o(),null}function Nu(){for(;null!==$l;){var e=$l.alternate;uu||null===lu||(0!==(8&$l.flags)?et($l,lu)&&(uu=!0):13===$l.tag&&_l(e,$l)&&et($l,lu)&&(uu=!0));var t=$l.flags;0!==(256&t)&&pl(e,$l),0===(512&t)||Kl||(Kl=!0,Wo(97,(function(){return Lu(),null}))),$l=$l.nextEffect}}function Lu(){if(90!==Jl){var e=97<Jl?97:Jl;return Jl=90,Ho(e,ju)}return!1}function Au(e,t){Zl.push(t,e),Kl||(Kl=!0,Wo(97,(function(){return Lu(),null})))}function Iu(e,t){eu.push(t,e),Kl||(Kl=!0,Wo(97,(function(){return Lu(),null})))}function ju(){if(null===Xl)return!1;var e=Xl;if(Xl=null,0!==(48&Pl))throw Error(i(331));var t=Pl;Pl|=32;var r=eu;eu=[];for(var n=0;n<r.length;n+=2){var o=r[n],a=r[n+1],l=o.destroy;if(o.destroy=void 0,"function"===typeof l)try{l()}catch(e){if(null===a)throw Error(i(330));Du(a,e)}}for(r=Zl,Zl=[],n=0;n<r.length;n+=2){o=r[n],a=r[n+1];try{var u=o.create;o.destroy=u()}catch(e){if(null===a)throw Error(i(330));Du(a,e)}}for(u=e.current.firstEffect;null!==u;)e=u.nextEffect,u.nextEffect=null,8&u.flags&&(u.sibling=null,u.stateNode=null),u=e;return Pl=t,$o(),!0}function Mu(e,t,r){ca(e,t=cl(0,t=il(r,t),1)),t=cu(),null!==(e=du(e,1))&&(Vt(e,1,t),pu(e,t))}function Du(e,t){if(3===e.tag)Mu(e,e,t);else for(var r=e.return;null!==r;){if(3===r.tag){Mu(r,e,t);break}if(1===r.tag){var n=r.stateNode;if("function"===typeof r.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===Yl||!Yl.has(n))){var o=sl(r,e=il(t,e),1);if(ca(r,o),o=cu(),null!==(r=du(r,1)))Vt(r,1,o),pu(r,o);else if("function"===typeof n.componentDidCatch&&(null===Yl||!Yl.has(n)))try{n.componentDidCatch(t,e)}catch(e){}break}}r=r.return}}function qu(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=cu(),e.pingedLanes|=e.suspendedLanes&r,Rl===e&&(Ll&r)===r&&(4===jl||3===jl&&(62914560&Ll)===Ll&&500>Fo()-Bl?ku(e,0):Ul|=r),pu(e,t)}function zu(e,t){var r=e.stateNode;null!==r&&r.delete(t),0===(t=0)&&(0===(2&(t=e.mode))?t=1:0===(4&t)?t=99===Bo()?1:2:(0===au&&(au=Dl),0===(t=Ft(62914560&~au))&&(t=4194304))),r=cu(),null!==(e=du(e,t))&&(Vt(e,t,r),pu(e,r))}function Uu(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Fu(e,t,r,n){return new Uu(e,t,r,n)}function Bu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Vu(e,t){var r=e.alternate;return null===r?((r=Fu(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null),r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Hu(e,t,r,n,o,a){var l=2;if(n=e,"function"===typeof e)Bu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Wu(r.children,o,a,t);case M:l=8,o|=16;break;case _:l=8,o|=1;break;case T:return(e=Fu(12,r,t,8|o)).elementType=T,e.type=T,e.lanes=a,e;case R:return(e=Fu(13,r,t,o)).type=R,e.elementType=R,e.lanes=a,e;case N:return(e=Fu(19,r,t,o)).elementType=N,e.lanes=a,e;case D:return $u(r,o,a,t);case q:return(e=Fu(24,r,t,o)).elementType=q,e.lanes=a,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case O:l=9;break e;case P:l=11;break e;case L:l=14;break e;case A:l=16,n=null;break e;case I:l=22;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Fu(l,r,t,o)).elementType=e,t.type=n,t.lanes=a,t}function Wu(e,t,r,n){return(e=Fu(7,e,n,t)).lanes=r,e}function $u(e,t,r,n){return(e=Fu(23,e,n,t)).elementType=D,e.lanes=r,e}function Gu(e,t,r){return(e=Fu(6,e,null,t)).lanes=r,e}function Qu(e,t,r){return(t=Fu(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yu(e,t,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=r,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Bt(0),this.expirationTimes=Bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.mutableSourceEagerHydrationData=null}function Ku(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:x,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}function Xu(e,t,r,n){var o=t.current,a=cu(),l=su(o);e:if(r){t:{if(Ke(r=r._reactInternals)!==r||1!==r.tag)throw Error(i(170));var u=r;do{switch(u.tag){case 3:u=u.stateNode.context;break t;case 1:if(go(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break t}}u=u.return}while(null!==u);throw Error(i(171))}if(1===r.tag){var c=r.type;if(go(c)){r=yo(r,c,u);break e}}r=u}else r=co;return null===t.context?t.context=r:t.pendingContext=r,(t=ua(a,l)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),ca(o,t),fu(o,l,a),l}function Ju(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function Zu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function ec(e,t){Zu(e,t),(e=e.alternate)&&Zu(e,t)}function tc(e,t,r){var n=null!=r&&null!=r.hydrationOptions&&r.hydrationOptions.mutableSources||null;if(r=new Yu(e,t,null!=r&&!0===r.hydrate),t=Fu(3,null,null,2===t?7:1===t?3:0),r.current=t,t.stateNode=r,ia(t),e[Xn]=r.current,Pn(8===e.nodeType?e.parentNode:e),n)for(e=0;e<n.length;e++){var o=(t=n[e])._getVersion;o=o(t._source),null==r.mutableSourceEagerHydrationData?r.mutableSourceEagerHydrationData=[t,o]:r.mutableSourceEagerHydrationData.push(t,o)}this._internalRoot=r}function rc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function nc(e,t,r,n,o){var a=r._reactRootContainer;if(a){var i=a._internalRoot;if("function"===typeof o){var l=o;o=function(){var e=Ju(i);l.call(e)}}Xu(t,i,e,o)}else{if(a=r._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var r;r=e.lastChild;)e.removeChild(r);return new tc(e,0,t?{hydrate:!0}:void 0)}(r,n),i=a._internalRoot,"function"===typeof o){var u=o;o=function(){var e=Ju(i);u.call(e)}}yu((function(){Xu(t,i,e,o)}))}return Ju(i)}function oc(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rc(t))throw Error(i(200));return Ku(e,t,null,r)}Wl=function(e,t,r){var n=t.lanes;if(null!==e)if(e.memoizedProps!==t.pendingProps||fo.current)Ii=!0;else{if(0===(r&n)){switch(Ii=!1,t.tag){case 3:Hi(t),Wa();break;case 5:Aa(t);break;case 1:go(t.type)&&bo(t);break;case 4:Na(t,t.stateNode.containerInfo);break;case 10:n=t.memoizedProps.value;var o=t.type._context;uo(Ko,o._currentValue),o._currentValue=n;break;case 13:if(null!==t.memoizedState)return 0!==(r&t.child.childLanes)?Yi(e,t,r):(uo(ja,1&ja.current),null!==(t=rl(e,t,r))?t.sibling:null);uo(ja,1&ja.current);break;case 19:if(n=0!==(r&t.childLanes),0!==(64&e.flags)){if(n)return tl(e,t,r);t.flags|=64}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),uo(ja,ja.current),n)break;return null;case 23:case 24:return t.lanes=0,zi(e,t,r)}return rl(e,t,r)}Ii=0!==(16384&e.flags)}else Ii=!1;switch(t.lanes=0,t.tag){case 2:if(n=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=ho(t,so.current),na(t,r),o=oi(null,t,n,e,o,r),t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,go(n)){var a=!0;bo(t)}else a=!1;t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,ia(t);var l=n.getDerivedStateFromProps;"function"===typeof l&&ha(t,n,l,e),o.updater=ga,t.stateNode=o,o._reactInternals=t,ba(t,n,e,r),t=Vi(null,t,n,!0,a,r)}else t.tag=0,ji(null,t,o,r),t=t.child;return t;case 16:o=t.elementType;e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=(a=o._init)(o._payload),t.type=o,a=t.tag=function(e){if("function"===typeof e)return Bu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===L)return 14}return 2}(o),e=Yo(o,e),a){case 0:t=Fi(null,t,o,e,r);break e;case 1:t=Bi(null,t,o,e,r);break e;case 11:t=Mi(null,t,o,e,r);break e;case 14:t=Di(null,t,o,Yo(o.type,e),n,r);break e}throw Error(i(306,o,""))}return t;case 0:return n=t.type,o=t.pendingProps,Fi(e,t,n,o=t.elementType===n?o:Yo(n,o),r);case 1:return n=t.type,o=t.pendingProps,Bi(e,t,n,o=t.elementType===n?o:Yo(n,o),r);case 3:if(Hi(t),n=t.updateQueue,null===e||null===n)throw Error(i(282));if(n=t.pendingProps,o=null!==(o=t.memoizedState)?o.element:null,la(e,t),fa(t,n,null,r),(n=t.memoizedState.element)===o)Wa(),t=rl(e,t,r);else{if((a=(o=t.stateNode).hydrate)&&(qa=Wn(t.stateNode.containerInfo.firstChild),Da=t,a=za=!0),a){if(null!=(e=o.mutableSourceEagerHydrationData))for(o=0;o<e.length;o+=2)(a=e[o])._workInProgressVersionPrimary=e[o+1],$a.push(a);for(r=_a(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|1024,r=r.sibling}else ji(e,t,n,r),Wa();t=t.child}return t;case 5:return Aa(t),null===e&&Ba(t),n=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,l=o.children,Fn(n,o)?l=null:null!==a&&Fn(n,a)&&(t.flags|=16),Ui(e,t),ji(e,t,l,r),t.child;case 6:return null===e&&Ba(t),null;case 13:return Yi(e,t,r);case 4:return Na(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=Sa(t,null,n,r):ji(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,Mi(e,t,n,o=t.elementType===n?o:Yo(n,o),r);case 7:return ji(e,t,t.pendingProps,r),t.child;case 8:case 12:return ji(e,t,t.pendingProps.children,r),t.child;case 10:e:{n=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value;var u=t.type._context;if(uo(Ko,u._currentValue),u._currentValue=a,null!==l)if(u=l.value,0===(a=ln(u,a)?0:0|("function"===typeof n._calculateChangedBits?n._calculateChangedBits(u,a):1073741823))){if(l.children===o.children&&!fo.current){t=rl(e,t,r);break e}}else for(null!==(u=t.child)&&(u.return=t);null!==u;){var c=u.dependencies;if(null!==c){l=u.child;for(var s=c.firstContext;null!==s;){if(s.context===n&&0!==(s.observedBits&a)){1===u.tag&&((s=ua(-1,r&-r)).tag=2,ca(u,s)),u.lanes|=r,null!==(s=u.alternate)&&(s.lanes|=r),ra(u.return,r),c.lanes|=r;break}s=s.next}}else l=10===u.tag&&u.type===t.type?null:u.child;if(null!==l)l.return=u;else for(l=u;null!==l;){if(l===t){l=null;break}if(null!==(u=l.sibling)){u.return=l.return,l=u;break}l=l.return}u=l}ji(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=(a=t.pendingProps).children,na(t,r),n=n(o=oa(o,a.unstable_observedBits)),t.flags|=1,ji(e,t,n,r),t.child;case 14:return a=Yo(o=t.type,t.pendingProps),Di(e,t,o,a=Yo(o.type,a),n,r);case 15:return qi(e,t,t.type,t.pendingProps,n,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Yo(n,o),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,go(n)?(e=!0,bo(t)):e=!1,na(t,r),ma(t,n,o),ba(t,n,o,r),Vi(null,t,n,!0,e,r);case 19:return tl(e,t,r);case 23:case 24:return zi(e,t,r)}throw Error(i(156,t.tag))},tc.prototype.render=function(e){Xu(e,this._internalRoot,null,null)},tc.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Xu(null,e,null,(function(){t[Xn]=null}))},tt=function(e){13===e.tag&&(fu(e,4,cu()),ec(e,4))},rt=function(e){13===e.tag&&(fu(e,67108864,cu()),ec(e,67108864))},nt=function(e){if(13===e.tag){var t=cu(),r=su(e);fu(e,r,t),ec(e,r)}},ot=function(e,t){return t()},Ce=function(e,t,r){switch(t){case"input":if(re(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+\'][type="radio"]\'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=ro(n);if(!o)throw Error(i(90));X(n),re(n,o)}}}break;case"textarea":ce(e,r);break;case"select":null!=(t=r.value)&&ie(e,!!r.multiple,t,!1)}},Ae=mu,Ie=function(e,t,r,n,o){var a=Pl;Pl|=4;try{return Ho(98,e.bind(null,t,r,n,o))}finally{0===(Pl=a)&&(Hl(),$o())}},je=function(){0===(49&Pl)&&(function(){if(null!==tu){var e=tu;tu=null,e.forEach((function(e){e.expiredLanes|=24&e.pendingLanes,pu(e,Fo())}))}$o()}(),Lu())},Me=function(e,t){var r=Pl;Pl|=2;try{return e(t)}finally{0===(Pl=r)&&(Hl(),$o())}};var ac={Events:[eo,to,ro,Ne,Le,Lu,{current:!1}]},ic={findFiberByHostInstance:Zn,bundleType:0,version:"17.0.1",rendererPackageName:"react-dom"},lc={bundleType:ic.bundleType,version:ic.version,rendererPackageName:ic.rendererPackageName,rendererConfig:ic.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:k.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ze(e))?null:e.stateNode},findFiberByHostInstance:ic.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof{}){var uc={};if(!uc.isDisabled&&uc.supportsFiber)try{ko=uc.inject(lc),Eo=uc}catch(ve){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ac,t.createPortal=oc,t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw Error(i(268,Object.keys(e)))}return e=null===(e=Ze(t))?null:e.stateNode},t.flushSync=function(e,t){var r=Pl;if(0!==(48&r))return e(t);Pl|=1;try{if(e)return Ho(99,e.bind(null,t))}finally{Pl=r,$o()}},t.hydrate=function(e,t,r){if(!rc(t))throw Error(i(200));return nc(null,e,t,!0,r)},t.render=function(e,t,r){if(!rc(t))throw Error(i(200));return nc(null,e,t,!1,r)},t.unmountComponentAtNode=function(e){if(!rc(e))throw Error(i(40));return!!e._reactRootContainer&&(yu((function(){nc(null,null,e,!1,(function(){e._reactRootContainer=null,e[Xn]=null}))})),!0)},t.unstable_batchedUpdates=mu,t.unstable_createPortal=function(e,t){return oc(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},t.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!rc(r))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return nc(e,t,r,!1,n)},t.version="17.0.1"},function(e,t,r){"use strict";e.exports=r(186)},function(e,t,r){"use strict";var n,o,a,i;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;t.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();t.unstable_now=function(){return u.now()-c}}if("undefined"===typeof window||"function"!==typeof MessageChannel){var s=null,f=null,d=function e(){if(null!==s)try{var r=t.unstable_now();s(!0,r),s=null}catch(t){throw setTimeout(e,0),t}};n=function(e){null!==s?setTimeout(n,0,e):(s=e,setTimeout(d,0))},o=function(e,t){f=setTimeout(e,t)},a=function(){clearTimeout(f)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,h=window.clearTimeout;if("undefined"!==typeof console){var g=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn\'t support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!==typeof g&&console.error("This browser doesn\'t support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var v=!1,m=null,y=-1,b=5,w=0;t.unstable_shouldYield=function(){return t.unstable_now()>=w},i=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<e?Math.floor(1e3/e):5};var k=new MessageChannel,E=k.port2;k.port1.onmessage=function(){if(null!==m){var e=t.unstable_now();w=e+b;try{m(!0,e)?E.postMessage(null):(v=!1,m=null)}catch(e){throw E.postMessage(null),e}}else v=!1},n=function(e){m=e,v||(v=!0,E.postMessage(null))},o=function(e,r){y=p((function(){e(t.unstable_now())}),r)},a=function(){h(y),y=-1}}function x(e,t){var r=e.length;e.push(t);e:for(;;){var n=r-1>>>1,o=e[n];if(!(void 0!==o&&0<T(o,t)))break e;e[n]=t,e[r]=o,r=n}}function S(e){return void 0===(e=e[0])?null:e}function _(e){var t=e[0];if(void 0!==t){var r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length;n<o;){var a=2*(n+1)-1,i=e[a],l=a+1,u=e[l];if(void 0!==i&&0>T(i,r))void 0!==u&&0>T(u,i)?(e[n]=u,e[l]=r,n=l):(e[n]=i,e[a]=r,n=a);else{if(!(void 0!==u&&0>T(u,r)))break e;e[n]=u,e[l]=r,n=l}}}return t}return null}function T(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}var C=[],O=[],P=1,R=null,N=3,L=!1,A=!1,I=!1;function j(e){for(var t=S(O);null!==t;){if(null===t.callback)_(O);else{if(!(t.startTime<=e))break;_(O),t.sortIndex=t.expirationTime,x(C,t)}t=S(O)}}function M(e){if(I=!1,j(e),!A)if(null!==S(C))A=!0,n(D);else{var t=S(O);null!==t&&o(M,t.startTime-e)}}function D(e,r){A=!1,I&&(I=!1,a()),L=!0;var n=N;try{for(j(r),R=S(C);null!==R&&(!(R.expirationTime>r)||e&&!t.unstable_shouldYield());){var i=R.callback;if("function"===typeof i){R.callback=null,N=R.priorityLevel;var l=i(R.expirationTime<=r);r=t.unstable_now(),"function"===typeof l?R.callback=l:R===S(C)&&_(C),j(r)}else _(C);R=S(C)}if(null!==R)var u=!0;else{var c=S(O);null!==c&&o(M,c.startTime-r),u=!1}return u}finally{R=null,N=n,L=!1}}var q=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){A||L||(A=!0,n(D))},t.unstable_getCurrentPriorityLevel=function(){return N},t.unstable_getFirstCallbackNode=function(){return S(C)},t.unstable_next=function(e){switch(N){case 1:case 2:case 3:var t=3;break;default:t=N}var r=N;N=t;try{return e()}finally{N=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=q,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=N;N=e;try{return t()}finally{N=r}},t.unstable_scheduleCallback=function(e,r,i){var l=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?l+i:l:i=l,e){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return e={id:P++,callback:r,priorityLevel:e,startTime:i,expirationTime:u=i+u,sortIndex:-1},i>l?(e.sortIndex=i,x(O,e),null===S(C)&&e===S(O)&&(I?a():I=!0,o(M,i-l))):(e.sortIndex=u,x(C,e),A||L||(A=!0,n(D))),e},t.unstable_wrapCallback=function(e){var t=N;return function(){var r=N;N=t;try{return e.apply(this,arguments)}finally{N=r}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={"&lt":"<","&gt":">","&quot":\'"\',"&apos":"\'","&amp":"&","&lt;":"<","&gt;":">","&quot;":\'"\',"&apos;":"\'","&amp;":"&"},o={60:"lt",62:"gt",34:"quot",39:"apos",38:"amp"},a={"<":"&lt;",">":"&gt;",\'"\':"&quot;","\'":"&apos;","&":"&amp;"},i=function(){function e(){}return e.prototype.encode=function(e){return e&&e.length?e.replace(/[<>"\'&]/g,(function(e){return a[e]})):""},e.encode=function(t){return(new e).encode(t)},e.prototype.decode=function(e){return e&&e.length?e.replace(/&#?[0-9a-zA-Z]+;?/g,(function(e){if("#"===e.charAt(1)){var t="x"===e.charAt(2).toLowerCase()?parseInt(e.substr(3),16):parseInt(e.substr(2));return isNaN(t)||t<-32768||t>65535?"":String.fromCharCode(t)}return n[e]||e})):""},e.decode=function(t){return(new e).decode(t)},e.prototype.encodeNonUTF=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var a=e.charCodeAt(n),i=o[a];i?(r+="&"+i+";",n++):(r+=a<32||a>126?"&#"+a+";":e.charAt(n),n++)}return r},e.encodeNonUTF=function(t){return(new e).encodeNonUTF(t)},e.prototype.encodeNonASCII=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=e.charCodeAt(n);o<=255?r+=e[n++]:(r+="&#"+o+";",n++)}return r},e.encodeNonASCII=function(t){return(new e).encodeNonASCII(t)},e}();t.XmlEntities=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["apos","nbsp","iexcl","cent","pound","curren","yen","brvbar","sect","uml","copy","ordf","laquo","not","shy","reg","macr","deg","plusmn","sup2","sup3","acute","micro","para","middot","cedil","sup1","ordm","raquo","frac14","frac12","frac34","iquest","Agrave","Aacute","Acirc","Atilde","Auml","Aring","Aelig","Ccedil","Egrave","Eacute","Ecirc","Euml","Igrave","Iacute","Icirc","Iuml","ETH","Ntilde","Ograve","Oacute","Ocirc","Otilde","Ouml","times","Oslash","Ugrave","Uacute","Ucirc","Uuml","Yacute","THORN","szlig","agrave","aacute","acirc","atilde","auml","aring","aelig","ccedil","egrave","eacute","ecirc","euml","igrave","iacute","icirc","iuml","eth","ntilde","ograve","oacute","ocirc","otilde","ouml","divide","oslash","ugrave","uacute","ucirc","uuml","yacute","thorn","yuml","quot","amp","lt","gt","OElig","oelig","Scaron","scaron","Yuml","circ","tilde","ensp","emsp","thinsp","zwnj","zwj","lrm","rlm","ndash","mdash","lsquo","rsquo","sbquo","ldquo","rdquo","bdquo","dagger","Dagger","permil","lsaquo","rsaquo","euro","fnof","Alpha","Beta","Gamma","Delta","Epsilon","Zeta","Eta","Theta","Iota","Kappa","Lambda","Mu","Nu","Xi","Omicron","Pi","Rho","Sigma","Tau","Upsilon","Phi","Chi","Psi","Omega","alpha","beta","gamma","delta","epsilon","zeta","eta","theta","iota","kappa","lambda","mu","nu","xi","omicron","pi","rho","sigmaf","sigma","tau","upsilon","phi","chi","psi","omega","thetasym","upsih","piv","bull","hellip","prime","Prime","oline","frasl","weierp","image","real","trade","alefsym","larr","uarr","rarr","darr","harr","crarr","lArr","uArr","rArr","dArr","hArr","forall","part","exist","empty","nabla","isin","notin","ni","prod","sum","minus","lowast","radic","prop","infin","ang","and","or","cap","cup","int","there4","sim","cong","asymp","ne","equiv","le","ge","sub","sup","nsub","sube","supe","oplus","otimes","perp","sdot","lceil","rceil","lfloor","rfloor","lang","rang","loz","spades","clubs","hearts","diams"],o=[39,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,34,38,60,62,338,339,352,353,376,710,732,8194,8195,8201,8204,8205,8206,8207,8211,8212,8216,8217,8218,8220,8221,8222,8224,8225,8240,8249,8250,8364,402,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,931,932,933,934,935,936,937,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,977,978,982,8226,8230,8242,8243,8254,8260,8472,8465,8476,8482,8501,8592,8593,8594,8595,8596,8629,8656,8657,8658,8659,8660,8704,8706,8707,8709,8711,8712,8713,8715,8719,8721,8722,8727,8730,8733,8734,8736,8743,8744,8745,8746,8747,8756,8764,8773,8776,8800,8801,8804,8805,8834,8835,8836,8838,8839,8853,8855,8869,8901,8968,8969,8970,8971,9001,9002,9674,9824,9827,9829,9830],a={},i={};!function(){for(var e=0,t=n.length;e<t;){var r=n[e],l=o[e];a[r]=String.fromCharCode(l),i[l]=r,e++}}();var l=function(){function e(){}return e.prototype.decode=function(e){return e&&e.length?e.replace(/&(#?[\\w\\d]+);?/g,(function(e,t){var r;if("#"===t.charAt(0)){var n="x"===t.charAt(1).toLowerCase()?parseInt(t.substr(2),16):parseInt(t.substr(1));isNaN(n)||n<-32768||n>65535||(r=String.fromCharCode(n))}else r=a[t];return r||e})):""},e.decode=function(t){return(new e).decode(t)},e.prototype.encode=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=i[e.charCodeAt(n)];r+=o?"&"+o+";":e.charAt(n),n++}return r},e.encode=function(t){return(new e).encode(t)},e.prototype.encodeNonUTF=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=e.charCodeAt(n),a=i[o];r+=a?"&"+a+";":o<32||o>126?"&#"+o+";":e.charAt(n),n++}return r},e.encodeNonUTF=function(t){return(new e).encodeNonUTF(t)},e.prototype.encodeNonASCII=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=e.charCodeAt(n);o<=255?r+=e[n++]:(r+="&#"+o+";",n++)}return r},e.encodeNonASCII=function(t){return(new e).encodeNonASCII(t)},e}();t.Html4Entities=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[["Aacute",[193]],["aacute",[225]],["Abreve",[258]],["abreve",[259]],["ac",[8766]],["acd",[8767]],["acE",[8766,819]],["Acirc",[194]],["acirc",[226]],["acute",[180]],["Acy",[1040]],["acy",[1072]],["AElig",[198]],["aelig",[230]],["af",[8289]],["Afr",[120068]],["afr",[120094]],["Agrave",[192]],["agrave",[224]],["alefsym",[8501]],["aleph",[8501]],["Alpha",[913]],["alpha",[945]],["Amacr",[256]],["amacr",[257]],["amalg",[10815]],["amp",[38]],["AMP",[38]],["andand",[10837]],["And",[10835]],["and",[8743]],["andd",[10844]],["andslope",[10840]],["andv",[10842]],["ang",[8736]],["ange",[10660]],["angle",[8736]],["angmsdaa",[10664]],["angmsdab",[10665]],["angmsdac",[10666]],["angmsdad",[10667]],["angmsdae",[10668]],["angmsdaf",[10669]],["angmsdag",[10670]],["angmsdah",[10671]],["angmsd",[8737]],["angrt",[8735]],["angrtvb",[8894]],["angrtvbd",[10653]],["angsph",[8738]],["angst",[197]],["angzarr",[9084]],["Aogon",[260]],["aogon",[261]],["Aopf",[120120]],["aopf",[120146]],["apacir",[10863]],["ap",[8776]],["apE",[10864]],["ape",[8778]],["apid",[8779]],["apos",[39]],["ApplyFunction",[8289]],["approx",[8776]],["approxeq",[8778]],["Aring",[197]],["aring",[229]],["Ascr",[119964]],["ascr",[119990]],["Assign",[8788]],["ast",[42]],["asymp",[8776]],["asympeq",[8781]],["Atilde",[195]],["atilde",[227]],["Auml",[196]],["auml",[228]],["awconint",[8755]],["awint",[10769]],["backcong",[8780]],["backepsilon",[1014]],["backprime",[8245]],["backsim",[8765]],["backsimeq",[8909]],["Backslash",[8726]],["Barv",[10983]],["barvee",[8893]],["barwed",[8965]],["Barwed",[8966]],["barwedge",[8965]],["bbrk",[9141]],["bbrktbrk",[9142]],["bcong",[8780]],["Bcy",[1041]],["bcy",[1073]],["bdquo",[8222]],["becaus",[8757]],["because",[8757]],["Because",[8757]],["bemptyv",[10672]],["bepsi",[1014]],["bernou",[8492]],["Bernoullis",[8492]],["Beta",[914]],["beta",[946]],["beth",[8502]],["between",[8812]],["Bfr",[120069]],["bfr",[120095]],["bigcap",[8898]],["bigcirc",[9711]],["bigcup",[8899]],["bigodot",[10752]],["bigoplus",[10753]],["bigotimes",[10754]],["bigsqcup",[10758]],["bigstar",[9733]],["bigtriangledown",[9661]],["bigtriangleup",[9651]],["biguplus",[10756]],["bigvee",[8897]],["bigwedge",[8896]],["bkarow",[10509]],["blacklozenge",[10731]],["blacksquare",[9642]],["blacktriangle",[9652]],["blacktriangledown",[9662]],["blacktriangleleft",[9666]],["blacktriangleright",[9656]],["blank",[9251]],["blk12",[9618]],["blk14",[9617]],["blk34",[9619]],["block",[9608]],["bne",[61,8421]],["bnequiv",[8801,8421]],["bNot",[10989]],["bnot",[8976]],["Bopf",[120121]],["bopf",[120147]],["bot",[8869]],["bottom",[8869]],["bowtie",[8904]],["boxbox",[10697]],["boxdl",[9488]],["boxdL",[9557]],["boxDl",[9558]],["boxDL",[9559]],["boxdr",[9484]],["boxdR",[9554]],["boxDr",[9555]],["boxDR",[9556]],["boxh",[9472]],["boxH",[9552]],["boxhd",[9516]],["boxHd",[9572]],["boxhD",[9573]],["boxHD",[9574]],["boxhu",[9524]],["boxHu",[9575]],["boxhU",[9576]],["boxHU",[9577]],["boxminus",[8863]],["boxplus",[8862]],["boxtimes",[8864]],["boxul",[9496]],["boxuL",[9563]],["boxUl",[9564]],["boxUL",[9565]],["boxur",[9492]],["boxuR",[9560]],["boxUr",[9561]],["boxUR",[9562]],["boxv",[9474]],["boxV",[9553]],["boxvh",[9532]],["boxvH",[9578]],["boxVh",[9579]],["boxVH",[9580]],["boxvl",[9508]],["boxvL",[9569]],["boxVl",[9570]],["boxVL",[9571]],["boxvr",[9500]],["boxvR",[9566]],["boxVr",[9567]],["boxVR",[9568]],["bprime",[8245]],["breve",[728]],["Breve",[728]],["brvbar",[166]],["bscr",[119991]],["Bscr",[8492]],["bsemi",[8271]],["bsim",[8765]],["bsime",[8909]],["bsolb",[10693]],["bsol",[92]],["bsolhsub",[10184]],["bull",[8226]],["bullet",[8226]],["bump",[8782]],["bumpE",[10926]],["bumpe",[8783]],["Bumpeq",[8782]],["bumpeq",[8783]],["Cacute",[262]],["cacute",[263]],["capand",[10820]],["capbrcup",[10825]],["capcap",[10827]],["cap",[8745]],["Cap",[8914]],["capcup",[10823]],["capdot",[10816]],["CapitalDifferentialD",[8517]],["caps",[8745,65024]],["caret",[8257]],["caron",[711]],["Cayleys",[8493]],["ccaps",[10829]],["Ccaron",[268]],["ccaron",[269]],["Ccedil",[199]],["ccedil",[231]],["Ccirc",[264]],["ccirc",[265]],["Cconint",[8752]],["ccups",[10828]],["ccupssm",[10832]],["Cdot",[266]],["cdot",[267]],["cedil",[184]],["Cedilla",[184]],["cemptyv",[10674]],["cent",[162]],["centerdot",[183]],["CenterDot",[183]],["cfr",[120096]],["Cfr",[8493]],["CHcy",[1063]],["chcy",[1095]],["check",[10003]],["checkmark",[10003]],["Chi",[935]],["chi",[967]],["circ",[710]],["circeq",[8791]],["circlearrowleft",[8634]],["circlearrowright",[8635]],["circledast",[8859]],["circledcirc",[8858]],["circleddash",[8861]],["CircleDot",[8857]],["circledR",[174]],["circledS",[9416]],["CircleMinus",[8854]],["CirclePlus",[8853]],["CircleTimes",[8855]],["cir",[9675]],["cirE",[10691]],["cire",[8791]],["cirfnint",[10768]],["cirmid",[10991]],["cirscir",[10690]],["ClockwiseContourIntegral",[8754]],["clubs",[9827]],["clubsuit",[9827]],["colon",[58]],["Colon",[8759]],["Colone",[10868]],["colone",[8788]],["coloneq",[8788]],["comma",[44]],["commat",[64]],["comp",[8705]],["compfn",[8728]],["complement",[8705]],["complexes",[8450]],["cong",[8773]],["congdot",[10861]],["Congruent",[8801]],["conint",[8750]],["Conint",[8751]],["ContourIntegral",[8750]],["copf",[120148]],["Copf",[8450]],["coprod",[8720]],["Coproduct",[8720]],["copy",[169]],["COPY",[169]],["copysr",[8471]],["CounterClockwiseContourIntegral",[8755]],["crarr",[8629]],["cross",[10007]],["Cross",[10799]],["Cscr",[119966]],["cscr",[119992]],["csub",[10959]],["csube",[10961]],["csup",[10960]],["csupe",[10962]],["ctdot",[8943]],["cudarrl",[10552]],["cudarrr",[10549]],["cuepr",[8926]],["cuesc",[8927]],["cularr",[8630]],["cularrp",[10557]],["cupbrcap",[10824]],["cupcap",[10822]],["CupCap",[8781]],["cup",[8746]],["Cup",[8915]],["cupcup",[10826]],["cupdot",[8845]],["cupor",[10821]],["cups",[8746,65024]],["curarr",[8631]],["curarrm",[10556]],["curlyeqprec",[8926]],["curlyeqsucc",[8927]],["curlyvee",[8910]],["curlywedge",[8911]],["curren",[164]],["curvearrowleft",[8630]],["curvearrowright",[8631]],["cuvee",[8910]],["cuwed",[8911]],["cwconint",[8754]],["cwint",[8753]],["cylcty",[9005]],["dagger",[8224]],["Dagger",[8225]],["daleth",[8504]],["darr",[8595]],["Darr",[8609]],["dArr",[8659]],["dash",[8208]],["Dashv",[10980]],["dashv",[8867]],["dbkarow",[10511]],["dblac",[733]],["Dcaron",[270]],["dcaron",[271]],["Dcy",[1044]],["dcy",[1076]],["ddagger",[8225]],["ddarr",[8650]],["DD",[8517]],["dd",[8518]],["DDotrahd",[10513]],["ddotseq",[10871]],["deg",[176]],["Del",[8711]],["Delta",[916]],["delta",[948]],["demptyv",[10673]],["dfisht",[10623]],["Dfr",[120071]],["dfr",[120097]],["dHar",[10597]],["dharl",[8643]],["dharr",[8642]],["DiacriticalAcute",[180]],["DiacriticalDot",[729]],["DiacriticalDoubleAcute",[733]],["DiacriticalGrave",[96]],["DiacriticalTilde",[732]],["diam",[8900]],["diamond",[8900]],["Diamond",[8900]],["diamondsuit",[9830]],["diams",[9830]],["die",[168]],["DifferentialD",[8518]],["digamma",[989]],["disin",[8946]],["div",[247]],["divide",[247]],["divideontimes",[8903]],["divonx",[8903]],["DJcy",[1026]],["djcy",[1106]],["dlcorn",[8990]],["dlcrop",[8973]],["dollar",[36]],["Dopf",[120123]],["dopf",[120149]],["Dot",[168]],["dot",[729]],["DotDot",[8412]],["doteq",[8784]],["doteqdot",[8785]],["DotEqual",[8784]],["dotminus",[8760]],["dotplus",[8724]],["dotsquare",[8865]],["doublebarwedge",[8966]],["DoubleContourIntegral",[8751]],["DoubleDot",[168]],["DoubleDownArrow",[8659]],["DoubleLeftArrow",[8656]],["DoubleLeftRightArrow",[8660]],["DoubleLeftTee",[10980]],["DoubleLongLeftArrow",[10232]],["DoubleLongLeftRightArrow",[10234]],["DoubleLongRightArrow",[10233]],["DoubleRightArrow",[8658]],["DoubleRightTee",[8872]],["DoubleUpArrow",[8657]],["DoubleUpDownArrow",[8661]],["DoubleVerticalBar",[8741]],["DownArrowBar",[10515]],["downarrow",[8595]],["DownArrow",[8595]],["Downarrow",[8659]],["DownArrowUpArrow",[8693]],["DownBreve",[785]],["downdownarrows",[8650]],["downharpoonleft",[8643]],["downharpoonright",[8642]],["DownLeftRightVector",[10576]],["DownLeftTeeVector",[10590]],["DownLeftVectorBar",[10582]],["DownLeftVector",[8637]],["DownRightTeeVector",[10591]],["DownRightVectorBar",[10583]],["DownRightVector",[8641]],["DownTeeArrow",[8615]],["DownTee",[8868]],["drbkarow",[10512]],["drcorn",[8991]],["drcrop",[8972]],["Dscr",[119967]],["dscr",[119993]],["DScy",[1029]],["dscy",[1109]],["dsol",[10742]],["Dstrok",[272]],["dstrok",[273]],["dtdot",[8945]],["dtri",[9663]],["dtrif",[9662]],["duarr",[8693]],["duhar",[10607]],["dwangle",[10662]],["DZcy",[1039]],["dzcy",[1119]],["dzigrarr",[10239]],["Eacute",[201]],["eacute",[233]],["easter",[10862]],["Ecaron",[282]],["ecaron",[283]],["Ecirc",[202]],["ecirc",[234]],["ecir",[8790]],["ecolon",[8789]],["Ecy",[1069]],["ecy",[1101]],["eDDot",[10871]],["Edot",[278]],["edot",[279]],["eDot",[8785]],["ee",[8519]],["efDot",[8786]],["Efr",[120072]],["efr",[120098]],["eg",[10906]],["Egrave",[200]],["egrave",[232]],["egs",[10902]],["egsdot",[10904]],["el",[10905]],["Element",[8712]],["elinters",[9191]],["ell",[8467]],["els",[10901]],["elsdot",[10903]],["Emacr",[274]],["emacr",[275]],["empty",[8709]],["emptyset",[8709]],["EmptySmallSquare",[9723]],["emptyv",[8709]],["EmptyVerySmallSquare",[9643]],["emsp13",[8196]],["emsp14",[8197]],["emsp",[8195]],["ENG",[330]],["eng",[331]],["ensp",[8194]],["Eogon",[280]],["eogon",[281]],["Eopf",[120124]],["eopf",[120150]],["epar",[8917]],["eparsl",[10723]],["eplus",[10865]],["epsi",[949]],["Epsilon",[917]],["epsilon",[949]],["epsiv",[1013]],["eqcirc",[8790]],["eqcolon",[8789]],["eqsim",[8770]],["eqslantgtr",[10902]],["eqslantless",[10901]],["Equal",[10869]],["equals",[61]],["EqualTilde",[8770]],["equest",[8799]],["Equilibrium",[8652]],["equiv",[8801]],["equivDD",[10872]],["eqvparsl",[10725]],["erarr",[10609]],["erDot",[8787]],["escr",[8495]],["Escr",[8496]],["esdot",[8784]],["Esim",[10867]],["esim",[8770]],["Eta",[919]],["eta",[951]],["ETH",[208]],["eth",[240]],["Euml",[203]],["euml",[235]],["euro",[8364]],["excl",[33]],["exist",[8707]],["Exists",[8707]],["expectation",[8496]],["exponentiale",[8519]],["ExponentialE",[8519]],["fallingdotseq",[8786]],["Fcy",[1060]],["fcy",[1092]],["female",[9792]],["ffilig",[64259]],["fflig",[64256]],["ffllig",[64260]],["Ffr",[120073]],["ffr",[120099]],["filig",[64257]],["FilledSmallSquare",[9724]],["FilledVerySmallSquare",[9642]],["fjlig",[102,106]],["flat",[9837]],["fllig",[64258]],["fltns",[9649]],["fnof",[402]],["Fopf",[120125]],["fopf",[120151]],["forall",[8704]],["ForAll",[8704]],["fork",[8916]],["forkv",[10969]],["Fouriertrf",[8497]],["fpartint",[10765]],["frac12",[189]],["frac13",[8531]],["frac14",[188]],["frac15",[8533]],["frac16",[8537]],["frac18",[8539]],["frac23",[8532]],["frac25",[8534]],["frac34",[190]],["frac35",[8535]],["frac38",[8540]],["frac45",[8536]],["frac56",[8538]],["frac58",[8541]],["frac78",[8542]],["frasl",[8260]],["frown",[8994]],["fscr",[119995]],["Fscr",[8497]],["gacute",[501]],["Gamma",[915]],["gamma",[947]],["Gammad",[988]],["gammad",[989]],["gap",[10886]],["Gbreve",[286]],["gbreve",[287]],["Gcedil",[290]],["Gcirc",[284]],["gcirc",[285]],["Gcy",[1043]],["gcy",[1075]],["Gdot",[288]],["gdot",[289]],["ge",[8805]],["gE",[8807]],["gEl",[10892]],["gel",[8923]],["geq",[8805]],["geqq",[8807]],["geqslant",[10878]],["gescc",[10921]],["ges",[10878]],["gesdot",[10880]],["gesdoto",[10882]],["gesdotol",[10884]],["gesl",[8923,65024]],["gesles",[10900]],["Gfr",[120074]],["gfr",[120100]],["gg",[8811]],["Gg",[8921]],["ggg",[8921]],["gimel",[8503]],["GJcy",[1027]],["gjcy",[1107]],["gla",[10917]],["gl",[8823]],["glE",[10898]],["glj",[10916]],["gnap",[10890]],["gnapprox",[10890]],["gne",[10888]],["gnE",[8809]],["gneq",[10888]],["gneqq",[8809]],["gnsim",[8935]],["Gopf",[120126]],["gopf",[120152]],["grave",[96]],["GreaterEqual",[8805]],["GreaterEqualLess",[8923]],["GreaterFullEqual",[8807]],["GreaterGreater",[10914]],["GreaterLess",[8823]],["GreaterSlantEqual",[10878]],["GreaterTilde",[8819]],["Gscr",[119970]],["gscr",[8458]],["gsim",[8819]],["gsime",[10894]],["gsiml",[10896]],["gtcc",[10919]],["gtcir",[10874]],["gt",[62]],["GT",[62]],["Gt",[8811]],["gtdot",[8919]],["gtlPar",[10645]],["gtquest",[10876]],["gtrapprox",[10886]],["gtrarr",[10616]],["gtrdot",[8919]],["gtreqless",[8923]],["gtreqqless",[10892]],["gtrless",[8823]],["gtrsim",[8819]],["gvertneqq",[8809,65024]],["gvnE",[8809,65024]],["Hacek",[711]],["hairsp",[8202]],["half",[189]],["hamilt",[8459]],["HARDcy",[1066]],["hardcy",[1098]],["harrcir",[10568]],["harr",[8596]],["hArr",[8660]],["harrw",[8621]],["Hat",[94]],["hbar",[8463]],["Hcirc",[292]],["hcirc",[293]],["hearts",[9829]],["heartsuit",[9829]],["hellip",[8230]],["hercon",[8889]],["hfr",[120101]],["Hfr",[8460]],["HilbertSpace",[8459]],["hksearow",[10533]],["hkswarow",[10534]],["hoarr",[8703]],["homtht",[8763]],["hookleftarrow",[8617]],["hookrightarrow",[8618]],["hopf",[120153]],["Hopf",[8461]],["horbar",[8213]],["HorizontalLine",[9472]],["hscr",[119997]],["Hscr",[8459]],["hslash",[8463]],["Hstrok",[294]],["hstrok",[295]],["HumpDownHump",[8782]],["HumpEqual",[8783]],["hybull",[8259]],["hyphen",[8208]],["Iacute",[205]],["iacute",[237]],["ic",[8291]],["Icirc",[206]],["icirc",[238]],["Icy",[1048]],["icy",[1080]],["Idot",[304]],["IEcy",[1045]],["iecy",[1077]],["iexcl",[161]],["iff",[8660]],["ifr",[120102]],["Ifr",[8465]],["Igrave",[204]],["igrave",[236]],["ii",[8520]],["iiiint",[10764]],["iiint",[8749]],["iinfin",[10716]],["iiota",[8489]],["IJlig",[306]],["ijlig",[307]],["Imacr",[298]],["imacr",[299]],["image",[8465]],["ImaginaryI",[8520]],["imagline",[8464]],["imagpart",[8465]],["imath",[305]],["Im",[8465]],["imof",[8887]],["imped",[437]],["Implies",[8658]],["incare",[8453]],["in",[8712]],["infin",[8734]],["infintie",[10717]],["inodot",[305]],["intcal",[8890]],["int",[8747]],["Int",[8748]],["integers",[8484]],["Integral",[8747]],["intercal",[8890]],["Intersection",[8898]],["intlarhk",[10775]],["intprod",[10812]],["InvisibleComma",[8291]],["InvisibleTimes",[8290]],["IOcy",[1025]],["iocy",[1105]],["Iogon",[302]],["iogon",[303]],["Iopf",[120128]],["iopf",[120154]],["Iota",[921]],["iota",[953]],["iprod",[10812]],["iquest",[191]],["iscr",[119998]],["Iscr",[8464]],["isin",[8712]],["isindot",[8949]],["isinE",[8953]],["isins",[8948]],["isinsv",[8947]],["isinv",[8712]],["it",[8290]],["Itilde",[296]],["itilde",[297]],["Iukcy",[1030]],["iukcy",[1110]],["Iuml",[207]],["iuml",[239]],["Jcirc",[308]],["jcirc",[309]],["Jcy",[1049]],["jcy",[1081]],["Jfr",[120077]],["jfr",[120103]],["jmath",[567]],["Jopf",[120129]],["jopf",[120155]],["Jscr",[119973]],["jscr",[119999]],["Jsercy",[1032]],["jsercy",[1112]],["Jukcy",[1028]],["jukcy",[1108]],["Kappa",[922]],["kappa",[954]],["kappav",[1008]],["Kcedil",[310]],["kcedil",[311]],["Kcy",[1050]],["kcy",[1082]],["Kfr",[120078]],["kfr",[120104]],["kgreen",[312]],["KHcy",[1061]],["khcy",[1093]],["KJcy",[1036]],["kjcy",[1116]],["Kopf",[120130]],["kopf",[120156]],["Kscr",[119974]],["kscr",[12e4]],["lAarr",[8666]],["Lacute",[313]],["lacute",[314]],["laemptyv",[10676]],["lagran",[8466]],["Lambda",[923]],["lambda",[955]],["lang",[10216]],["Lang",[10218]],["langd",[10641]],["langle",[10216]],["lap",[10885]],["Laplacetrf",[8466]],["laquo",[171]],["larrb",[8676]],["larrbfs",[10527]],["larr",[8592]],["Larr",[8606]],["lArr",[8656]],["larrfs",[10525]],["larrhk",[8617]],["larrlp",[8619]],["larrpl",[10553]],["larrsim",[10611]],["larrtl",[8610]],["latail",[10521]],["lAtail",[10523]],["lat",[10923]],["late",[10925]],["lates",[10925,65024]],["lbarr",[10508]],["lBarr",[10510]],["lbbrk",[10098]],["lbrace",[123]],["lbrack",[91]],["lbrke",[10635]],["lbrksld",[10639]],["lbrkslu",[10637]],["Lcaron",[317]],["lcaron",[318]],["Lcedil",[315]],["lcedil",[316]],["lceil",[8968]],["lcub",[123]],["Lcy",[1051]],["lcy",[1083]],["ldca",[10550]],["ldquo",[8220]],["ldquor",[8222]],["ldrdhar",[10599]],["ldrushar",[10571]],["ldsh",[8626]],["le",[8804]],["lE",[8806]],["LeftAngleBracket",[10216]],["LeftArrowBar",[8676]],["leftarrow",[8592]],["LeftArrow",[8592]],["Leftarrow",[8656]],["LeftArrowRightArrow",[8646]],["leftarrowtail",[8610]],["LeftCeiling",[8968]],["LeftDoubleBracket",[10214]],["LeftDownTeeVector",[10593]],["LeftDownVectorBar",[10585]],["LeftDownVector",[8643]],["LeftFloor",[8970]],["leftharpoondown",[8637]],["leftharpoonup",[8636]],["leftleftarrows",[8647]],["leftrightarrow",[8596]],["LeftRightArrow",[8596]],["Leftrightarrow",[8660]],["leftrightarrows",[8646]],["leftrightharpoons",[8651]],["leftrightsquigarrow",[8621]],["LeftRightVector",[10574]],["LeftTeeArrow",[8612]],["LeftTee",[8867]],["LeftTeeVector",[10586]],["leftthreetimes",[8907]],["LeftTriangleBar",[10703]],["LeftTriangle",[8882]],["LeftTriangleEqual",[8884]],["LeftUpDownVector",[10577]],["LeftUpTeeVector",[10592]],["LeftUpVectorBar",[10584]],["LeftUpVector",[8639]],["LeftVectorBar",[10578]],["LeftVector",[8636]],["lEg",[10891]],["leg",[8922]],["leq",[8804]],["leqq",[8806]],["leqslant",[10877]],["lescc",[10920]],["les",[10877]],["lesdot",[10879]],["lesdoto",[10881]],["lesdotor",[10883]],["lesg",[8922,65024]],["lesges",[10899]],["lessapprox",[10885]],["lessdot",[8918]],["lesseqgtr",[8922]],["lesseqqgtr",[10891]],["LessEqualGreater",[8922]],["LessFullEqual",[8806]],["LessGreater",[8822]],["lessgtr",[8822]],["LessLess",[10913]],["lesssim",[8818]],["LessSlantEqual",[10877]],["LessTilde",[8818]],["lfisht",[10620]],["lfloor",[8970]],["Lfr",[120079]],["lfr",[120105]],["lg",[8822]],["lgE",[10897]],["lHar",[10594]],["lhard",[8637]],["lharu",[8636]],["lharul",[10602]],["lhblk",[9604]],["LJcy",[1033]],["ljcy",[1113]],["llarr",[8647]],["ll",[8810]],["Ll",[8920]],["llcorner",[8990]],["Lleftarrow",[8666]],["llhard",[10603]],["lltri",[9722]],["Lmidot",[319]],["lmidot",[320]],["lmoustache",[9136]],["lmoust",[9136]],["lnap",[10889]],["lnapprox",[10889]],["lne",[10887]],["lnE",[8808]],["lneq",[10887]],["lneqq",[8808]],["lnsim",[8934]],["loang",[10220]],["loarr",[8701]],["lobrk",[10214]],["longleftarrow",[10229]],["LongLeftArrow",[10229]],["Longleftarrow",[10232]],["longleftrightarrow",[10231]],["LongLeftRightArrow",[10231]],["Longleftrightarrow",[10234]],["longmapsto",[10236]],["longrightarrow",[10230]],["LongRightArrow",[10230]],["Longrightarrow",[10233]],["looparrowleft",[8619]],["looparrowright",[8620]],["lopar",[10629]],["Lopf",[120131]],["lopf",[120157]],["loplus",[10797]],["lotimes",[10804]],["lowast",[8727]],["lowbar",[95]],["LowerLeftArrow",[8601]],["LowerRightArrow",[8600]],["loz",[9674]],["lozenge",[9674]],["lozf",[10731]],["lpar",[40]],["lparlt",[10643]],["lrarr",[8646]],["lrcorner",[8991]],["lrhar",[8651]],["lrhard",[10605]],["lrm",[8206]],["lrtri",[8895]],["lsaquo",[8249]],["lscr",[120001]],["Lscr",[8466]],["lsh",[8624]],["Lsh",[8624]],["lsim",[8818]],["lsime",[10893]],["lsimg",[10895]],["lsqb",[91]],["lsquo",[8216]],["lsquor",[8218]],["Lstrok",[321]],["lstrok",[322]],["ltcc",[10918]],["ltcir",[10873]],["lt",[60]],["LT",[60]],["Lt",[8810]],["ltdot",[8918]],["lthree",[8907]],["ltimes",[8905]],["ltlarr",[10614]],["ltquest",[10875]],["ltri",[9667]],["ltrie",[8884]],["ltrif",[9666]],["ltrPar",[10646]],["lurdshar",[10570]],["luruhar",[10598]],["lvertneqq",[8808,65024]],["lvnE",[8808,65024]],["macr",[175]],["male",[9794]],["malt",[10016]],["maltese",[10016]],["Map",[10501]],["map",[8614]],["mapsto",[8614]],["mapstodown",[8615]],["mapstoleft",[8612]],["mapstoup",[8613]],["marker",[9646]],["mcomma",[10793]],["Mcy",[1052]],["mcy",[1084]],["mdash",[8212]],["mDDot",[8762]],["measuredangle",[8737]],["MediumSpace",[8287]],["Mellintrf",[8499]],["Mfr",[120080]],["mfr",[120106]],["mho",[8487]],["micro",[181]],["midast",[42]],["midcir",[10992]],["mid",[8739]],["middot",[183]],["minusb",[8863]],["minus",[8722]],["minusd",[8760]],["minusdu",[10794]],["MinusPlus",[8723]],["mlcp",[10971]],["mldr",[8230]],["mnplus",[8723]],["models",[8871]],["Mopf",[120132]],["mopf",[120158]],["mp",[8723]],["mscr",[120002]],["Mscr",[8499]],["mstpos",[8766]],["Mu",[924]],["mu",[956]],["multimap",[8888]],["mumap",[8888]],["nabla",[8711]],["Nacute",[323]],["nacute",[324]],["nang",[8736,8402]],["nap",[8777]],["napE",[10864,824]],["napid",[8779,824]],["napos",[329]],["napprox",[8777]],["natural",[9838]],["naturals",[8469]],["natur",[9838]],["nbsp",[160]],["nbump",[8782,824]],["nbumpe",[8783,824]],["ncap",[10819]],["Ncaron",[327]],["ncaron",[328]],["Ncedil",[325]],["ncedil",[326]],["ncong",[8775]],["ncongdot",[10861,824]],["ncup",[10818]],["Ncy",[1053]],["ncy",[1085]],["ndash",[8211]],["nearhk",[10532]],["nearr",[8599]],["neArr",[8663]],["nearrow",[8599]],["ne",[8800]],["nedot",[8784,824]],["NegativeMediumSpace",[8203]],["NegativeThickSpace",[8203]],["NegativeThinSpace",[8203]],["NegativeVeryThinSpace",[8203]],["nequiv",[8802]],["nesear",[10536]],["nesim",[8770,824]],["NestedGreaterGreater",[8811]],["NestedLessLess",[8810]],["nexist",[8708]],["nexists",[8708]],["Nfr",[120081]],["nfr",[120107]],["ngE",[8807,824]],["nge",[8817]],["ngeq",[8817]],["ngeqq",[8807,824]],["ngeqslant",[10878,824]],["nges",[10878,824]],["nGg",[8921,824]],["ngsim",[8821]],["nGt",[8811,8402]],["ngt",[8815]],["ngtr",[8815]],["nGtv",[8811,824]],["nharr",[8622]],["nhArr",[8654]],["nhpar",[10994]],["ni",[8715]],["nis",[8956]],["nisd",[8954]],["niv",[8715]],["NJcy",[1034]],["njcy",[1114]],["nlarr",[8602]],["nlArr",[8653]],["nldr",[8229]],["nlE",[8806,824]],["nle",[8816]],["nleftarrow",[8602]],["nLeftarrow",[8653]],["nleftrightarrow",[8622]],["nLeftrightarrow",[8654]],["nleq",[8816]],["nleqq",[8806,824]],["nleqslant",[10877,824]],["nles",[10877,824]],["nless",[8814]],["nLl",[8920,824]],["nlsim",[8820]],["nLt",[8810,8402]],["nlt",[8814]],["nltri",[8938]],["nltrie",[8940]],["nLtv",[8810,824]],["nmid",[8740]],["NoBreak",[8288]],["NonBreakingSpace",[160]],["nopf",[120159]],["Nopf",[8469]],["Not",[10988]],["not",[172]],["NotCongruent",[8802]],["NotCupCap",[8813]],["NotDoubleVerticalBar",[8742]],["NotElement",[8713]],["NotEqual",[8800]],["NotEqualTilde",[8770,824]],["NotExists",[8708]],["NotGreater",[8815]],["NotGreaterEqual",[8817]],["NotGreaterFullEqual",[8807,824]],["NotGreaterGreater",[8811,824]],["NotGreaterLess",[8825]],["NotGreaterSlantEqual",[10878,824]],["NotGreaterTilde",[8821]],["NotHumpDownHump",[8782,824]],["NotHumpEqual",[8783,824]],["notin",[8713]],["notindot",[8949,824]],["notinE",[8953,824]],["notinva",[8713]],["notinvb",[8951]],["notinvc",[8950]],["NotLeftTriangleBar",[10703,824]],["NotLeftTriangle",[8938]],["NotLeftTriangleEqual",[8940]],["NotLess",[8814]],["NotLessEqual",[8816]],["NotLessGreater",[8824]],["NotLessLess",[8810,824]],["NotLessSlantEqual",[10877,824]],["NotLessTilde",[8820]],["NotNestedGreaterGreater",[10914,824]],["NotNestedLessLess",[10913,824]],["notni",[8716]],["notniva",[8716]],["notnivb",[8958]],["notnivc",[8957]],["NotPrecedes",[8832]],["NotPrecedesEqual",[10927,824]],["NotPrecedesSlantEqual",[8928]],["NotReverseElement",[8716]],["NotRightTriangleBar",[10704,824]],["NotRightTriangle",[8939]],["NotRightTriangleEqual",[8941]],["NotSquareSubset",[8847,824]],["NotSquareSubsetEqual",[8930]],["NotSquareSuperset",[8848,824]],["NotSquareSupersetEqual",[8931]],["NotSubset",[8834,8402]],["NotSubsetEqual",[8840]],["NotSucceeds",[8833]],["NotSucceedsEqual",[10928,824]],["NotSucceedsSlantEqual",[8929]],["NotSucceedsTilde",[8831,824]],["NotSuperset",[8835,8402]],["NotSupersetEqual",[8841]],["NotTilde",[8769]],["NotTildeEqual",[8772]],["NotTildeFullEqual",[8775]],["NotTildeTilde",[8777]],["NotVerticalBar",[8740]],["nparallel",[8742]],["npar",[8742]],["nparsl",[11005,8421]],["npart",[8706,824]],["npolint",[10772]],["npr",[8832]],["nprcue",[8928]],["nprec",[8832]],["npreceq",[10927,824]],["npre",[10927,824]],["nrarrc",[10547,824]],["nrarr",[8603]],["nrArr",[8655]],["nrarrw",[8605,824]],["nrightarrow",[8603]],["nRightarrow",[8655]],["nrtri",[8939]],["nrtrie",[8941]],["nsc",[8833]],["nsccue",[8929]],["nsce",[10928,824]],["Nscr",[119977]],["nscr",[120003]],["nshortmid",[8740]],["nshortparallel",[8742]],["nsim",[8769]],["nsime",[8772]],["nsimeq",[8772]],["nsmid",[8740]],["nspar",[8742]],["nsqsube",[8930]],["nsqsupe",[8931]],["nsub",[8836]],["nsubE",[10949,824]],["nsube",[8840]],["nsubset",[8834,8402]],["nsubseteq",[8840]],["nsubseteqq",[10949,824]],["nsucc",[8833]],["nsucceq",[10928,824]],["nsup",[8837]],["nsupE",[10950,824]],["nsupe",[8841]],["nsupset",[8835,8402]],["nsupseteq",[8841]],["nsupseteqq",[10950,824]],["ntgl",[8825]],["Ntilde",[209]],["ntilde",[241]],["ntlg",[8824]],["ntriangleleft",[8938]],["ntrianglelefteq",[8940]],["ntriangleright",[8939]],["ntrianglerighteq",[8941]],["Nu",[925]],["nu",[957]],["num",[35]],["numero",[8470]],["numsp",[8199]],["nvap",[8781,8402]],["nvdash",[8876]],["nvDash",[8877]],["nVdash",[8878]],["nVDash",[8879]],["nvge",[8805,8402]],["nvgt",[62,8402]],["nvHarr",[10500]],["nvinfin",[10718]],["nvlArr",[10498]],["nvle",[8804,8402]],["nvlt",[60,8402]],["nvltrie",[8884,8402]],["nvrArr",[10499]],["nvrtrie",[8885,8402]],["nvsim",[8764,8402]],["nwarhk",[10531]],["nwarr",[8598]],["nwArr",[8662]],["nwarrow",[8598]],["nwnear",[10535]],["Oacute",[211]],["oacute",[243]],["oast",[8859]],["Ocirc",[212]],["ocirc",[244]],["ocir",[8858]],["Ocy",[1054]],["ocy",[1086]],["odash",[8861]],["Odblac",[336]],["odblac",[337]],["odiv",[10808]],["odot",[8857]],["odsold",[10684]],["OElig",[338]],["oelig",[339]],["ofcir",[10687]],["Ofr",[120082]],["ofr",[120108]],["ogon",[731]],["Ograve",[210]],["ograve",[242]],["ogt",[10689]],["ohbar",[10677]],["ohm",[937]],["oint",[8750]],["olarr",[8634]],["olcir",[10686]],["olcross",[10683]],["oline",[8254]],["olt",[10688]],["Omacr",[332]],["omacr",[333]],["Omega",[937]],["omega",[969]],["Omicron",[927]],["omicron",[959]],["omid",[10678]],["ominus",[8854]],["Oopf",[120134]],["oopf",[120160]],["opar",[10679]],["OpenCurlyDoubleQuote",[8220]],["OpenCurlyQuote",[8216]],["operp",[10681]],["oplus",[8853]],["orarr",[8635]],["Or",[10836]],["or",[8744]],["ord",[10845]],["order",[8500]],["orderof",[8500]],["ordf",[170]],["ordm",[186]],["origof",[8886]],["oror",[10838]],["orslope",[10839]],["orv",[10843]],["oS",[9416]],["Oscr",[119978]],["oscr",[8500]],["Oslash",[216]],["oslash",[248]],["osol",[8856]],["Otilde",[213]],["otilde",[245]],["otimesas",[10806]],["Otimes",[10807]],["otimes",[8855]],["Ouml",[214]],["ouml",[246]],["ovbar",[9021]],["OverBar",[8254]],["OverBrace",[9182]],["OverBracket",[9140]],["OverParenthesis",[9180]],["para",[182]],["parallel",[8741]],["par",[8741]],["parsim",[10995]],["parsl",[11005]],["part",[8706]],["PartialD",[8706]],["Pcy",[1055]],["pcy",[1087]],["percnt",[37]],["period",[46]],["permil",[8240]],["perp",[8869]],["pertenk",[8241]],["Pfr",[120083]],["pfr",[120109]],["Phi",[934]],["phi",[966]],["phiv",[981]],["phmmat",[8499]],["phone",[9742]],["Pi",[928]],["pi",[960]],["pitchfork",[8916]],["piv",[982]],["planck",[8463]],["planckh",[8462]],["plankv",[8463]],["plusacir",[10787]],["plusb",[8862]],["pluscir",[10786]],["plus",[43]],["plusdo",[8724]],["plusdu",[10789]],["pluse",[10866]],["PlusMinus",[177]],["plusmn",[177]],["plussim",[10790]],["plustwo",[10791]],["pm",[177]],["Poincareplane",[8460]],["pointint",[10773]],["popf",[120161]],["Popf",[8473]],["pound",[163]],["prap",[10935]],["Pr",[10939]],["pr",[8826]],["prcue",[8828]],["precapprox",[10935]],["prec",[8826]],["preccurlyeq",[8828]],["Precedes",[8826]],["PrecedesEqual",[10927]],["PrecedesSlantEqual",[8828]],["PrecedesTilde",[8830]],["preceq",[10927]],["precnapprox",[10937]],["precneqq",[10933]],["precnsim",[8936]],["pre",[10927]],["prE",[10931]],["precsim",[8830]],["prime",[8242]],["Prime",[8243]],["primes",[8473]],["prnap",[10937]],["prnE",[10933]],["prnsim",[8936]],["prod",[8719]],["Product",[8719]],["profalar",[9006]],["profline",[8978]],["profsurf",[8979]],["prop",[8733]],["Proportional",[8733]],["Proportion",[8759]],["propto",[8733]],["prsim",[8830]],["prurel",[8880]],["Pscr",[119979]],["pscr",[120005]],["Psi",[936]],["psi",[968]],["puncsp",[8200]],["Qfr",[120084]],["qfr",[120110]],["qint",[10764]],["qopf",[120162]],["Qopf",[8474]],["qprime",[8279]],["Qscr",[119980]],["qscr",[120006]],["quaternions",[8461]],["quatint",[10774]],["quest",[63]],["questeq",[8799]],["quot",[34]],["QUOT",[34]],["rAarr",[8667]],["race",[8765,817]],["Racute",[340]],["racute",[341]],["radic",[8730]],["raemptyv",[10675]],["rang",[10217]],["Rang",[10219]],["rangd",[10642]],["range",[10661]],["rangle",[10217]],["raquo",[187]],["rarrap",[10613]],["rarrb",[8677]],["rarrbfs",[10528]],["rarrc",[10547]],["rarr",[8594]],["Rarr",[8608]],["rArr",[8658]],["rarrfs",[10526]],["rarrhk",[8618]],["rarrlp",[8620]],["rarrpl",[10565]],["rarrsim",[10612]],["Rarrtl",[10518]],["rarrtl",[8611]],["rarrw",[8605]],["ratail",[10522]],["rAtail",[10524]],["ratio",[8758]],["rationals",[8474]],["rbarr",[10509]],["rBarr",[10511]],["RBarr",[10512]],["rbbrk",[10099]],["rbrace",[125]],["rbrack",[93]],["rbrke",[10636]],["rbrksld",[10638]],["rbrkslu",[10640]],["Rcaron",[344]],["rcaron",[345]],["Rcedil",[342]],["rcedil",[343]],["rceil",[8969]],["rcub",[125]],["Rcy",[1056]],["rcy",[1088]],["rdca",[10551]],["rdldhar",[10601]],["rdquo",[8221]],["rdquor",[8221]],["CloseCurlyDoubleQuote",[8221]],["rdsh",[8627]],["real",[8476]],["realine",[8475]],["realpart",[8476]],["reals",[8477]],["Re",[8476]],["rect",[9645]],["reg",[174]],["REG",[174]],["ReverseElement",[8715]],["ReverseEquilibrium",[8651]],["ReverseUpEquilibrium",[10607]],["rfisht",[10621]],["rfloor",[8971]],["rfr",[120111]],["Rfr",[8476]],["rHar",[10596]],["rhard",[8641]],["rharu",[8640]],["rharul",[10604]],["Rho",[929]],["rho",[961]],["rhov",[1009]],["RightAngleBracket",[10217]],["RightArrowBar",[8677]],["rightarrow",[8594]],["RightArrow",[8594]],["Rightarrow",[8658]],["RightArrowLeftArrow",[8644]],["rightarrowtail",[8611]],["RightCeiling",[8969]],["RightDoubleBracket",[10215]],["RightDownTeeVector",[10589]],["RightDownVectorBar",[10581]],["RightDownVector",[8642]],["RightFloor",[8971]],["rightharpoondown",[8641]],["rightharpoonup",[8640]],["rightleftarrows",[8644]],["rightleftharpoons",[8652]],["rightrightarrows",[8649]],["rightsquigarrow",[8605]],["RightTeeArrow",[8614]],["RightTee",[8866]],["RightTeeVector",[10587]],["rightthreetimes",[8908]],["RightTriangleBar",[10704]],["RightTriangle",[8883]],["RightTriangleEqual",[8885]],["RightUpDownVector",[10575]],["RightUpTeeVector",[10588]],["RightUpVectorBar",[10580]],["RightUpVector",[8638]],["RightVectorBar",[10579]],["RightVector",[8640]],["ring",[730]],["risingdotseq",[8787]],["rlarr",[8644]],["rlhar",[8652]],["rlm",[8207]],["rmoustache",[9137]],["rmoust",[9137]],["rnmid",[10990]],["roang",[10221]],["roarr",[8702]],["robrk",[10215]],["ropar",[10630]],["ropf",[120163]],["Ropf",[8477]],["roplus",[10798]],["rotimes",[10805]],["RoundImplies",[10608]],["rpar",[41]],["rpargt",[10644]],["rppolint",[10770]],["rrarr",[8649]],["Rrightarrow",[8667]],["rsaquo",[8250]],["rscr",[120007]],["Rscr",[8475]],["rsh",[8625]],["Rsh",[8625]],["rsqb",[93]],["rsquo",[8217]],["rsquor",[8217]],["CloseCurlyQuote",[8217]],["rthree",[8908]],["rtimes",[8906]],["rtri",[9657]],["rtrie",[8885]],["rtrif",[9656]],["rtriltri",[10702]],["RuleDelayed",[10740]],["ruluhar",[10600]],["rx",[8478]],["Sacute",[346]],["sacute",[347]],["sbquo",[8218]],["scap",[10936]],["Scaron",[352]],["scaron",[353]],["Sc",[10940]],["sc",[8827]],["sccue",[8829]],["sce",[10928]],["scE",[10932]],["Scedil",[350]],["scedil",[351]],["Scirc",[348]],["scirc",[349]],["scnap",[10938]],["scnE",[10934]],["scnsim",[8937]],["scpolint",[10771]],["scsim",[8831]],["Scy",[1057]],["scy",[1089]],["sdotb",[8865]],["sdot",[8901]],["sdote",[10854]],["searhk",[10533]],["searr",[8600]],["seArr",[8664]],["searrow",[8600]],["sect",[167]],["semi",[59]],["seswar",[10537]],["setminus",[8726]],["setmn",[8726]],["sext",[10038]],["Sfr",[120086]],["sfr",[120112]],["sfrown",[8994]],["sharp",[9839]],["SHCHcy",[1065]],["shchcy",[1097]],["SHcy",[1064]],["shcy",[1096]],["ShortDownArrow",[8595]],["ShortLeftArrow",[8592]],["shortmid",[8739]],["shortparallel",[8741]],["ShortRightArrow",[8594]],["ShortUpArrow",[8593]],["shy",[173]],["Sigma",[931]],["sigma",[963]],["sigmaf",[962]],["sigmav",[962]],["sim",[8764]],["simdot",[10858]],["sime",[8771]],["simeq",[8771]],["simg",[10910]],["simgE",[10912]],["siml",[10909]],["simlE",[10911]],["simne",[8774]],["simplus",[10788]],["simrarr",[10610]],["slarr",[8592]],["SmallCircle",[8728]],["smallsetminus",[8726]],["smashp",[10803]],["smeparsl",[10724]],["smid",[8739]],["smile",[8995]],["smt",[10922]],["smte",[10924]],["smtes",[10924,65024]],["SOFTcy",[1068]],["softcy",[1100]],["solbar",[9023]],["solb",[10692]],["sol",[47]],["Sopf",[120138]],["sopf",[120164]],["spades",[9824]],["spadesuit",[9824]],["spar",[8741]],["sqcap",[8851]],["sqcaps",[8851,65024]],["sqcup",[8852]],["sqcups",[8852,65024]],["Sqrt",[8730]],["sqsub",[8847]],["sqsube",[8849]],["sqsubset",[8847]],["sqsubseteq",[8849]],["sqsup",[8848]],["sqsupe",[8850]],["sqsupset",[8848]],["sqsupseteq",[8850]],["square",[9633]],["Square",[9633]],["SquareIntersection",[8851]],["SquareSubset",[8847]],["SquareSubsetEqual",[8849]],["SquareSuperset",[8848]],["SquareSupersetEqual",[8850]],["SquareUnion",[8852]],["squarf",[9642]],["squ",[9633]],["squf",[9642]],["srarr",[8594]],["Sscr",[119982]],["sscr",[120008]],["ssetmn",[8726]],["ssmile",[8995]],["sstarf",[8902]],["Star",[8902]],["star",[9734]],["starf",[9733]],["straightepsilon",[1013]],["straightphi",[981]],["strns",[175]],["sub",[8834]],["Sub",[8912]],["subdot",[10941]],["subE",[10949]],["sube",[8838]],["subedot",[10947]],["submult",[10945]],["subnE",[10955]],["subne",[8842]],["subplus",[10943]],["subrarr",[10617]],["subset",[8834]],["Subset",[8912]],["subseteq",[8838]],["subseteqq",[10949]],["SubsetEqual",[8838]],["subsetneq",[8842]],["subsetneqq",[10955]],["subsim",[10951]],["subsub",[10965]],["subsup",[10963]],["succapprox",[10936]],["succ",[8827]],["succcurlyeq",[8829]],["Succeeds",[8827]],["SucceedsEqual",[10928]],["SucceedsSlantEqual",[8829]],["SucceedsTilde",[8831]],["succeq",[10928]],["succnapprox",[10938]],["succneqq",[10934]],["succnsim",[8937]],["succsim",[8831]],["SuchThat",[8715]],["sum",[8721]],["Sum",[8721]],["sung",[9834]],["sup1",[185]],["sup2",[178]],["sup3",[179]],["sup",[8835]],["Sup",[8913]],["supdot",[10942]],["supdsub",[10968]],["supE",[10950]],["supe",[8839]],["supedot",[10948]],["Superset",[8835]],["SupersetEqual",[8839]],["suphsol",[10185]],["suphsub",[10967]],["suplarr",[10619]],["supmult",[10946]],["supnE",[10956]],["supne",[8843]],["supplus",[10944]],["supset",[8835]],["Supset",[8913]],["supseteq",[8839]],["supseteqq",[10950]],["supsetneq",[8843]],["supsetneqq",[10956]],["supsim",[10952]],["supsub",[10964]],["supsup",[10966]],["swarhk",[10534]],["swarr",[8601]],["swArr",[8665]],["swarrow",[8601]],["swnwar",[10538]],["szlig",[223]],["Tab",[9]],["target",[8982]],["Tau",[932]],["tau",[964]],["tbrk",[9140]],["Tcaron",[356]],["tcaron",[357]],["Tcedil",[354]],["tcedil",[355]],["Tcy",[1058]],["tcy",[1090]],["tdot",[8411]],["telrec",[8981]],["Tfr",[120087]],["tfr",[120113]],["there4",[8756]],["therefore",[8756]],["Therefore",[8756]],["Theta",[920]],["theta",[952]],["thetasym",[977]],["thetav",[977]],["thickapprox",[8776]],["thicksim",[8764]],["ThickSpace",[8287,8202]],["ThinSpace",[8201]],["thinsp",[8201]],["thkap",[8776]],["thksim",[8764]],["THORN",[222]],["thorn",[254]],["tilde",[732]],["Tilde",[8764]],["TildeEqual",[8771]],["TildeFullEqual",[8773]],["TildeTilde",[8776]],["timesbar",[10801]],["timesb",[8864]],["times",[215]],["timesd",[10800]],["tint",[8749]],["toea",[10536]],["topbot",[9014]],["topcir",[10993]],["top",[8868]],["Topf",[120139]],["topf",[120165]],["topfork",[10970]],["tosa",[10537]],["tprime",[8244]],["trade",[8482]],["TRADE",[8482]],["triangle",[9653]],["triangledown",[9663]],["triangleleft",[9667]],["trianglelefteq",[8884]],["triangleq",[8796]],["triangleright",[9657]],["trianglerighteq",[8885]],["tridot",[9708]],["trie",[8796]],["triminus",[10810]],["TripleDot",[8411]],["triplus",[10809]],["trisb",[10701]],["tritime",[10811]],["trpezium",[9186]],["Tscr",[119983]],["tscr",[120009]],["TScy",[1062]],["tscy",[1094]],["TSHcy",[1035]],["tshcy",[1115]],["Tstrok",[358]],["tstrok",[359]],["twixt",[8812]],["twoheadleftarrow",[8606]],["twoheadrightarrow",[8608]],["Uacute",[218]],["uacute",[250]],["uarr",[8593]],["Uarr",[8607]],["uArr",[8657]],["Uarrocir",[10569]],["Ubrcy",[1038]],["ubrcy",[1118]],["Ubreve",[364]],["ubreve",[365]],["Ucirc",[219]],["ucirc",[251]],["Ucy",[1059]],["ucy",[1091]],["udarr",[8645]],["Udblac",[368]],["udblac",[369]],["udhar",[10606]],["ufisht",[10622]],["Ufr",[120088]],["ufr",[120114]],["Ugrave",[217]],["ugrave",[249]],["uHar",[10595]],["uharl",[8639]],["uharr",[8638]],["uhblk",[9600]],["ulcorn",[8988]],["ulcorner",[8988]],["ulcrop",[8975]],["ultri",[9720]],["Umacr",[362]],["umacr",[363]],["uml",[168]],["UnderBar",[95]],["UnderBrace",[9183]],["UnderBracket",[9141]],["UnderParenthesis",[9181]],["Union",[8899]],["UnionPlus",[8846]],["Uogon",[370]],["uogon",[371]],["Uopf",[120140]],["uopf",[120166]],["UpArrowBar",[10514]],["uparrow",[8593]],["UpArrow",[8593]],["Uparrow",[8657]],["UpArrowDownArrow",[8645]],["updownarrow",[8597]],["UpDownArrow",[8597]],["Updownarrow",[8661]],["UpEquilibrium",[10606]],["upharpoonleft",[8639]],["upharpoonright",[8638]],["uplus",[8846]],["UpperLeftArrow",[8598]],["UpperRightArrow",[8599]],["upsi",[965]],["Upsi",[978]],["upsih",[978]],["Upsilon",[933]],["upsilon",[965]],["UpTeeArrow",[8613]],["UpTee",[8869]],["upuparrows",[8648]],["urcorn",[8989]],["urcorner",[8989]],["urcrop",[8974]],["Uring",[366]],["uring",[367]],["urtri",[9721]],["Uscr",[119984]],["uscr",[120010]],["utdot",[8944]],["Utilde",[360]],["utilde",[361]],["utri",[9653]],["utrif",[9652]],["uuarr",[8648]],["Uuml",[220]],["uuml",[252]],["uwangle",[10663]],["vangrt",[10652]],["varepsilon",[1013]],["varkappa",[1008]],["varnothing",[8709]],["varphi",[981]],["varpi",[982]],["varpropto",[8733]],["varr",[8597]],["vArr",[8661]],["varrho",[1009]],["varsigma",[962]],["varsubsetneq",[8842,65024]],["varsubsetneqq",[10955,65024]],["varsupsetneq",[8843,65024]],["varsupsetneqq",[10956,65024]],["vartheta",[977]],["vartriangleleft",[8882]],["vartriangleright",[8883]],["vBar",[10984]],["Vbar",[10987]],["vBarv",[10985]],["Vcy",[1042]],["vcy",[1074]],["vdash",[8866]],["vDash",[8872]],["Vdash",[8873]],["VDash",[8875]],["Vdashl",[10982]],["veebar",[8891]],["vee",[8744]],["Vee",[8897]],["veeeq",[8794]],["vellip",[8942]],["verbar",[124]],["Verbar",[8214]],["vert",[124]],["Vert",[8214]],["VerticalBar",[8739]],["VerticalLine",[124]],["VerticalSeparator",[10072]],["VerticalTilde",[8768]],["VeryThinSpace",[8202]],["Vfr",[120089]],["vfr",[120115]],["vltri",[8882]],["vnsub",[8834,8402]],["vnsup",[8835,8402]],["Vopf",[120141]],["vopf",[120167]],["vprop",[8733]],["vrtri",[8883]],["Vscr",[119985]],["vscr",[120011]],["vsubnE",[10955,65024]],["vsubne",[8842,65024]],["vsupnE",[10956,65024]],["vsupne",[8843,65024]],["Vvdash",[8874]],["vzigzag",[10650]],["Wcirc",[372]],["wcirc",[373]],["wedbar",[10847]],["wedge",[8743]],["Wedge",[8896]],["wedgeq",[8793]],["weierp",[8472]],["Wfr",[120090]],["wfr",[120116]],["Wopf",[120142]],["wopf",[120168]],["wp",[8472]],["wr",[8768]],["wreath",[8768]],["Wscr",[119986]],["wscr",[120012]],["xcap",[8898]],["xcirc",[9711]],["xcup",[8899]],["xdtri",[9661]],["Xfr",[120091]],["xfr",[120117]],["xharr",[10231]],["xhArr",[10234]],["Xi",[926]],["xi",[958]],["xlarr",[10229]],["xlArr",[10232]],["xmap",[10236]],["xnis",[8955]],["xodot",[10752]],["Xopf",[120143]],["xopf",[120169]],["xoplus",[10753]],["xotime",[10754]],["xrarr",[10230]],["xrArr",[10233]],["Xscr",[119987]],["xscr",[120013]],["xsqcup",[10758]],["xuplus",[10756]],["xutri",[9651]],["xvee",[8897]],["xwedge",[8896]],["Yacute",[221]],["yacute",[253]],["YAcy",[1071]],["yacy",[1103]],["Ycirc",[374]],["ycirc",[375]],["Ycy",[1067]],["ycy",[1099]],["yen",[165]],["Yfr",[120092]],["yfr",[120118]],["YIcy",[1031]],["yicy",[1111]],["Yopf",[120144]],["yopf",[120170]],["Yscr",[119988]],["yscr",[120014]],["YUcy",[1070]],["yucy",[1102]],["yuml",[255]],["Yuml",[376]],["Zacute",[377]],["zacute",[378]],["Zcaron",[381]],["zcaron",[382]],["Zcy",[1047]],["zcy",[1079]],["Zdot",[379]],["zdot",[380]],["zeetrf",[8488]],["ZeroWidthSpace",[8203]],["Zeta",[918]],["zeta",[950]],["zfr",[120119]],["Zfr",[8488]],["ZHcy",[1046]],["zhcy",[1078]],["zigrarr",[8669]],["zopf",[120171]],["Zopf",[8484]],["Zscr",[119989]],["zscr",[120015]],["zwj",[8205]],["zwnj",[8204]]],o={},a={};!function(e,t){var r=n.length;for(;r--;){var o=n[r],a=o[0],i=o[1],l=i[0],u=l<32||l>126||62===l||60===l||38===l||34===l||39===l,c=void 0;if(u&&(c=t[l]=t[l]||{}),i[1]){var s=i[1];e[a]=String.fromCharCode(l)+String.fromCharCode(s),u&&(c[s]=a)}else e[a]=String.fromCharCode(l),u&&(c[""]=a)}}(o,a);var i=function(){function e(){}return e.prototype.decode=function(e){return e&&e.length?e.replace(/&(#?[\\w\\d]+);?/g,(function(e,t){var r;if("#"===t.charAt(0)){var n="x"===t.charAt(1)?parseInt(t.substr(2).toLowerCase(),16):parseInt(t.substr(1));isNaN(n)||n<-32768||n>65535||(r=String.fromCharCode(n))}else r=o[t];return r||e})):""},e.decode=function(t){return(new e).decode(t)},e.prototype.encode=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=a[e.charCodeAt(n)];if(o){var i=o[e.charCodeAt(n+1)];if(i?n++:i=o[""],i){r+="&"+i+";",n++;continue}}r+=e.charAt(n),n++}return r},e.encode=function(t){return(new e).encode(t)},e.prototype.encodeNonUTF=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=e.charCodeAt(n),i=a[o];if(i){var l=i[e.charCodeAt(n+1)];if(l?n++:l=i[""],l){r+="&"+l+";",n++;continue}}r+=o<32||o>126?"&#"+o+";":e.charAt(n),n++}return r},e.encodeNonUTF=function(t){return(new e).encodeNonUTF(t)},e.prototype.encodeNonASCII=function(e){if(!e||!e.length)return"";for(var t=e.length,r="",n=0;n<t;){var o=e.charCodeAt(n);o<=255?r+=e[n++]:(r+="&#"+o+";",n++)}return r},e.encodeNonASCII=function(t){return(new e).encodeNonASCII(t)},e}();t.Html5Entities=i},function(e,t,r){"use strict";var n=r(52),o=r(193);Object.defineProperty(t,"__esModule",{value:!0}),t.shouldHighlight=b,t.getChalk=w,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(b(t)){var r=w(t),n=f(r);return y(n,e)}return e};var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(195)),l=r(196),u=(a=r(199))&&a.__esModule?a:{default:a};function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}var s=new Set(["as","async","from","get","of","set"]);function f(e){return{keyword:e.cyan,capitalized:e.yellow,jsxIdentifier:e.yellow,punctuator:e.yellow,number:e.magenta,string:e.green,regex:e.magenta,comment:e.grey,invalid:e.white.bgRed.bold}}var d,p=/\\r\\n|[\\n\\r\\u2028\\u2029]/,h=/^[()[\\]{}]$/,g=i.matchToToken,v=/^[a-z][\\w-]*$/i,m=function(e,t,r){if("name"===e.type){if((0,l.isKeyword)(e.value)||(0,l.isStrictReservedWord)(e.value,!0)||s.has(e.value))return"keyword";if(v.test(e.value)&&("<"===r[t-1]||"</"==r.substr(t-2,2)))return"jsxIdentifier";if(e.value[0]!==e.value[0].toLowerCase())return"capitalized"}return"punctuator"===e.type&&h.test(e.value)?"bracket":"invalid"!==e.type||"@"!==e.value&&"#"!==e.value?e.type:"punctuator"};function y(e,t){var r,o="",a=n(d(t));try{var i=function(){var t=r.value,n=t.type,a=t.value,i=e[n];o+=i?a.split(p).map((function(e){return i(e)})).join("\\n"):a};for(a.s();!(r=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}return o}function b(e){return u.default.supportsColor||e.forceColor}function w(e){var t=u.default;return e.forceColor&&(t=new u.default.constructor({enabled:!0,level:1})),t}d=o.mark((function e(t){var r,n;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=i.default.exec(t))){e.next=6;break}return n=g(r),e.next=4,{type:m(n,r.index,t),value:n.value};case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)}))},function(e,t,r){var n=r(192);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},function(e,t,r){e.exports=r(194)},function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return R()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=_(i,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(e,t,r);if("normal"===u.type){if(n=r.done?h:d,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,k=w&&w(w(P([])));k&&k!==r&&n.call(k,a)&&(b=k);var E=y.prototype=v.prototype=Object.create(b);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(o,a,i,l){var u=s(e[o],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"===typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(f).then((function(e){c.value=e,i(c)}),(function(e){return r("throw",e,i,l)}))}l(u.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function _(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a \'throw\' method")}return g}var o=s(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:R}}function R(){return{value:t,done:!0}}return m.prototype=E.constructor=y,y.constructor=m,m.displayName=u(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},x(S.prototype),S.prototype[i]=function(){return this},e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(E),u(E,l,"Generator"),E[a]=function(){return this},E.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=/(([\'"])(?:(?!\\2|\\\\).|\\\\(?:\\r\\n|[\\s\\S]))*(\\2)?|`(?:[^`\\\\$]|\\\\[\\s\\S]|\\$(?!\\{)|\\$\\{(?:[^{}]|\\{[^}]*\\}?)*\\}?)*(`)?)|(\\/\\/.*)|(\\/\\*(?:[^*]|\\*(?!\\/))*(\\*\\/)?)|(\\/(?!\\*)(?:\\[(?:(?![\\]\\\\]).|\\\\.)*\\]|(?![\\/\\]\\\\]).|\\\\.)+\\/(?:(?!\\s*(?:\\b|[\\u0080-\\uFFFF$\\\\\'"~({]|[+\\-!](?!=)|\\.?\\d))|[gmiyus]{1,6}\\b(?![\\u0080-\\uFFFF$\\\\]|\\s*(?:[+\\-*%&|^<>!=?({]|\\/(?![\\/*])))))|(0[xX][\\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][+-]?\\d+)?)|((?!\\d)(?:(?!\\s)[$\\w\\u0080-\\uFFFF]|\\\\u[\\da-fA-F]{4}|\\\\u\\{[\\da-fA-F]+\\})+)|(--|\\+\\+|&&|\\|\\||=>|\\.{3}|(?:[+\\-\\/%&|^]|\\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\\](){}])|(\\s+)|(^$|[\\s\\S])/g,t.matchToToken=function(e){var t={type:"invalid",value:e[0],closed:void 0};return e[1]?(t.type="string",t.closed=!(!e[3]&&!e[4])):e[5]?t.type="comment":e[6]?(t.type="comment",t.closed=!!e[7]):e[8]?t.type="regex":e[9]?t.type="number":e[10]?t.type="name":e[11]?t.type="punctuator":e[12]&&(t.type="whitespace"),t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isIdentifierName",{enumerable:!0,get:function(){return n.isIdentifierName}}),Object.defineProperty(t,"isIdentifierChar",{enumerable:!0,get:function(){return n.isIdentifierChar}}),Object.defineProperty(t,"isIdentifierStart",{enumerable:!0,get:function(){return n.isIdentifierStart}}),Object.defineProperty(t,"isReservedWord",{enumerable:!0,get:function(){return o.isReservedWord}}),Object.defineProperty(t,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return o.isStrictBindOnlyReservedWord}}),Object.defineProperty(t,"isStrictBindReservedWord",{enumerable:!0,get:function(){return o.isStrictBindReservedWord}}),Object.defineProperty(t,"isStrictReservedWord",{enumerable:!0,get:function(){return o.isStrictReservedWord}}),Object.defineProperty(t,"isKeyword",{enumerable:!0,get:function(){return o.isKeyword}});var n=r(197),o=r(198)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIdentifierStart=s,t.isIdentifierChar=f,t.isIdentifierName=function(e){for(var t=!0,r=0,n=Array.from(e);r<n.length;r++){var o=n[r].codePointAt(0);if(t){if(!s(o))return!1;t=!1}else if(!f(o))return!1}return!t};var n="\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",o="\u200C\u200D\xb7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F",a=new RegExp("["+n+"]"),i=new RegExp("["+n+o+"]");n=o=null;var l=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938],u=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];function c(e,t){for(var r=65536,n=0,o=t.length;n<o;n+=2){if((r+=t[n])>e)return!1;if((r+=t[n+1])>=e)return!0}return!1}function s(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&a.test(String.fromCharCode(e)):c(e,l)))}function f(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&i.test(String.fromCharCode(e)):c(e,l)||c(e,u))))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isReservedWord=u,t.isStrictReservedWord=c,t.isStrictBindOnlyReservedWord=s,t.isStrictBindReservedWord=function(e,t){return c(e,t)||s(e)},t.isKeyword=function(e){return a.has(e)};var n=["implements","interface","let","package","private","protected","public","static","yield"],o=["eval","arguments"],a=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"]),i=new Set(n),l=new Set(o);function u(e,t){return t&&"await"===e||"enum"===e}function c(e,t){return u(e,t)||i.has(e)}function s(e){return l.has(e)}},function(e,t,r){"use strict";(function(t){var n=r(52),o=r(200),a=r(201),i=r(206).stdout,l=r(207),u="win32"===t.platform&&!(Object({NODE_ENV:"production"}).TERM||"").toLowerCase().startsWith("xterm"),c=["ansi","ansi","ansi256","ansi16m"],s=new Set(["gray"]),f=Object.create(null);function d(e,t){t=t||{};var r=i?i.level:0;e.level=void 0===t.level?r:t.level,e.enabled="enabled"in t?t.enabled:e.level>0}function p(e){if(!this||!(this instanceof p)||this.template){var t={};return d(t,e),t.template=function(){var e=[].slice.call(arguments);return T.apply(null,[t.template].concat(e))},Object.setPrototypeOf(t,p.prototype),Object.setPrototypeOf(t.template,t),t.template.constructor=p,t.template}d(this,e)}u&&(a.blue.open="\x1b[94m");for(var h=function(){var e=v[g];a[e].closeRe=new RegExp(o(a[e].close),"g"),f[e]={get:function(){var t=a[e];return S.call(this,this._styles?this._styles.concat(t):[t],this._empty,e)}}},g=0,v=Object.keys(a);g<v.length;g++)h();f.visible={get:function(){return S.call(this,this._styles||[],!0,"visible")}},a.color.closeRe=new RegExp(o(a.color.close),"g");for(var m=function(){var e=b[y];if(s.has(e))return"continue";f[e]={get:function(){var t=this.level;return function(){var r=a.color[c[t]][e].apply(null,arguments),n={open:r,close:a.color.close,closeRe:a.color.closeRe};return S.call(this,this._styles?this._styles.concat(n):[n],this._empty,e)}}}},y=0,b=Object.keys(a.color.ansi);y<b.length;y++)m();a.bgColor.closeRe=new RegExp(o(a.bgColor.close),"g");for(var w=function(){var e=E[k];if(s.has(e))return"continue";var t="bg"+e[0].toUpperCase()+e.slice(1);f[t]={get:function(){var t=this.level;return function(){var r=a.bgColor[c[t]][e].apply(null,arguments),n={open:r,close:a.bgColor.close,closeRe:a.bgColor.closeRe};return S.call(this,this._styles?this._styles.concat(n):[n],this._empty,e)}}}},k=0,E=Object.keys(a.bgColor.ansi);k<E.length;k++)w();var x=Object.defineProperties((function(){}),f);function S(e,t,r){var n=function e(){return _.apply(e,arguments)};n._styles=e,n._empty=t;var o=this;return Object.defineProperty(n,"level",{enumerable:!0,get:function(){return o.level},set:function(e){o.level=e}}),Object.defineProperty(n,"enabled",{enumerable:!0,get:function(){return o.enabled},set:function(e){o.enabled=e}}),n.hasGrey=this.hasGrey||"gray"===r||"grey"===r,n.__proto__=x,n}function _(){var e=arguments,t=e.length,r=String(arguments[0]);if(0===t)return"";if(t>1)for(var o=1;o<t;o++)r+=" "+e[o];if(!this.enabled||this.level<=0||!r)return this._empty?"":r;var i=a.dim.open;u&&this.hasGrey&&(a.dim.open="");var l,c=n(this._styles.slice().reverse());try{for(c.s();!(l=c.n()).done;){var s=l.value;r=(r=s.open+r.replace(s.closeRe,s.open)+s.close).replace(/\\r?\\n/g,"".concat(s.close,"$&").concat(s.open))}}catch(e){c.e(e)}finally{c.f()}return a.dim.open=i,r}function T(e,t){if(!Array.isArray(t))return[].slice.call(arguments,1).join(" ");for(var r=[].slice.call(arguments,2),n=[t.raw[0]],o=1;o<t.length;o++)n.push(String(r[o-1]).replace(/[{}\\\\]/g,"\\\\$&")),n.push(String(t.raw[o]));return l(e,n.join(""))}Object.defineProperties(p.prototype,f),e.exports=p(),e.exports.supportsColor=i,e.exports.default=e.exports}).call(this,r(51))},function(e,t,r){"use strict";var n=/[|\\\\{}()[\\]^$+*?.]/g;e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected a string");return e.replace(n,"\\\\$&")}},function(e,t,r){"use strict";(function(e){var t=r(203),n=function(e,r){return function(){var n=e.apply(t,arguments);return"\x1b[".concat(n+r,"m")}},o=function(e,r){return function(){var n=e.apply(t,arguments);return"\x1b[".concat(38+r,";5;").concat(n,"m")}},a=function(e,r){return function(){var n=e.apply(t,arguments);return"\x1b[".concat(38+r,";2;").concat(n[0],";").concat(n[1],";").concat(n[2],"m")}};Object.defineProperty(e,"exports",{enumerable:!0,get:function(){var e=new Map,r={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};r.color.grey=r.color.gray;for(var i=0,l=Object.keys(r);i<l.length;i++){for(var u=l[i],c=r[u],s=0,f=Object.keys(c);s<f.length;s++){var d=f[s],p=c[d];r[d]={open:"\x1b[".concat(p[0],"m"),close:"\x1b[".concat(p[1],"m")},c[d]=r[d],e.set(p[0],p[1])}Object.defineProperty(r,u,{value:c,enumerable:!1}),Object.defineProperty(r,"codes",{value:e,enumerable:!1})}var h=function(e){return e},g=function(e,t,r){return[e,t,r]};r.color.close="\x1b[39m",r.bgColor.close="\x1b[49m",r.color.ansi={ansi:n(h,0)},r.color.ansi256={ansi256:o(h,0)},r.color.ansi16m={rgb:a(g,0)},r.bgColor.ansi={ansi:n(h,10)},r.bgColor.ansi256={ansi256:o(h,10)},r.bgColor.ansi16m={rgb:a(g,10)};for(var v=0,m=Object.keys(t);v<m.length;v++){var y=m[v];if("object"===typeof t[y]){var b=t[y];"ansi16"===y&&(y="ansi"),"ansi16"in b&&(r.color.ansi[y]=n(b.ansi16,0),r.bgColor.ansi[y]=n(b.ansi16,10)),"ansi256"in b&&(r.color.ansi256[y]=o(b.ansi256,0),r.bgColor.ansi256[y]=o(b.ansi256,10)),"rgb"in b&&(r.color.ansi16m[y]=a(b.rgb,0),r.bgColor.ansi16m[y]=a(b.rgb,10))}}return r}})}).call(this,r(202)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){var n=r(87),o=r(205),a={};Object.keys(n).forEach((function(e){a[e]={},Object.defineProperty(a[e],"channels",{value:n[e].channels}),Object.defineProperty(a[e],"labels",{value:n[e].labels});var t=o(e);Object.keys(t).forEach((function(r){var n=t[r];a[e][r]=function(e){var t=function(t){if(void 0===t||null===t)return t;arguments.length>1&&(t=Array.prototype.slice.call(arguments));var r=e(t);if("object"===typeof r)for(var n=r.length,o=0;o<n;o++)r[o]=Math.round(r[o]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}(n),a[e][r].raw=function(e){var t=function(t){return void 0===t||null===t?t:(arguments.length>1&&(t=Array.prototype.slice.call(arguments)),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(n)}))})),e.exports=a},function(e,t,r){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(e,t,r){var n=r(87);function o(e){var t=function(){for(var e={},t=Object.keys(n),r=t.length,o=0;o<r;o++)e[t[o]]={distance:-1,parent:null};return e}(),r=[e];for(t[e].distance=0;r.length;)for(var o=r.pop(),a=Object.keys(n[o]),i=a.length,l=0;l<i;l++){var u=a[l],c=t[u];-1===c.distance&&(c.distance=t[o].distance+1,c.parent=o,r.unshift(u))}return t}function a(e,t){return function(r){return t(e(r))}}function i(e,t){for(var r=[t[e].parent,e],o=n[t[e].parent][e],i=t[e].parent;t[i].parent;)r.unshift(t[i].parent),o=a(n[t[i].parent][i],o),i=t[i].parent;return o.conversion=r,o}e.exports=function(e){for(var t=o(e),r={},n=Object.keys(t),a=n.length,l=0;l<a;l++){var u=n[l];null!==t[u].parent&&(r[u]=i(u,t))}return r}},function(e,t,r){"use strict";e.exports={stdout:!1,stderr:!1}},function(e,t,r){"use strict";var n=r(52),o=/(?:\\\\(u[a-f\\d]{4}|x[a-f\\d]{2}|.))|(?:\\{(~)?(\\w+(?:\\([^)]*\\))?(?:\\.\\w+(?:\\([^)]*\\))?)*)(?:[ \\t]|(?=\\r?\\n)))|(\\})|((?:.|[\\r\\n\\f])+?)/gi,a=/(?:^|\\.)(\\w+)(?:\\(([^)]*)\\))?/g,i=/^([\'"])((?:\\\\.|(?!\\1)[^\\\\])*)\\1$/,l=/\\\\(u[a-f\\d]{4}|x[a-f\\d]{2}|.)|([^\\\\])/gi,u=new Map([["n","\\n"],["r","\\r"],["t","\\t"],["b","\\b"],["f","\\f"],["v","\\v"],["0","\\0"],["\\\\","\\\\"],["e","\x1b"],["a","\x07"]]);function c(e){return"u"===e[0]&&5===e.length||"x"===e[0]&&3===e.length?String.fromCharCode(parseInt(e.slice(1),16)):u.get(e)||e}function s(e,t){var r,o,a=[],u=t.trim().split(/\\s*,\\s*/g),s=n(u);try{for(s.s();!(o=s.n()).done;){var f=o.value;if(isNaN(f)){if(!(r=f.match(i)))throw new Error("Invalid Chalk template style argument: ".concat(f," (in style \'").concat(e,"\')"));a.push(r[2].replace(l,(function(e,t,r){return t?c(t):r})))}else a.push(Number(f))}}catch(e){s.e(e)}finally{s.f()}return a}function f(e){a.lastIndex=0;for(var t,r=[];null!==(t=a.exec(e));){var n=t[1];if(t[2]){var o=s(n,t[2]);r.push([n].concat(o))}else r.push([n])}return r}function d(e,t){var r,o={},a=n(t);try{for(a.s();!(r=a.n()).done;){var i,l=r.value,u=n(l.styles);try{for(u.s();!(i=u.n()).done;){var c=i.value;o[c[0]]=l.inverse?null:c.slice(1)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){a.e(e)}finally{a.f()}for(var s=e,f=0,d=Object.keys(o);f<d.length;f++){var p=d[f];if(Array.isArray(o[p])){if(!(p in s))throw new Error("Unknown Chalk style: ".concat(p));s=o[p].length>0?s[p].apply(s,o[p]):s[p]}}return s}e.exports=function(e,t){var r=[],n=[],a=[];if(t.replace(o,(function(t,o,i,l,u,s){if(o)a.push(c(o));else if(l){var p=a.join("");a=[],n.push(0===r.length?p:d(e,r)(p)),r.push({inverse:i,styles:f(l)})}else if(u){if(0===r.length)throw new Error("Found extraneous } in Chalk template literal");n.push(d(e,r)(a.join(""))),a=[],r.pop()}else a.push(s)})),n.push(a.join("")),r.length>0){var i="Chalk template literal is missing ".concat(r.length," closing bracket").concat(1===r.length?"":"s"," (`}`)");throw new Error(i)}return n.join("")}},function(e,t,r){"use strict";r.r(t),r.d(t,"ThemeContext",(function(){return me}));r(90);var n=r(0),o=r.n(n),a=r(53),i=r.n(a),l=function(e){return{position:"relative",display:"inline-flex",flexDirection:"column",height:"100%",width:"1024px",maxWidth:"100%",overflowX:"hidden",overflowY:"auto",padding:"0.5rem",boxSizing:"border-box",textAlign:"left",fontFamily:"Consolas, Menlo, monospace",fontSize:"11px",whiteSpace:"pre-wrap",wordBreak:"break-word",lineHeight:1.5,color:e.color}},u=null;var c=function(e){var t=Object(n.useContext)(me),r=e.shortcutHandler;return Object(n.useEffect)((function(){var e=function(e){r&&r(e.key)};return window.addEventListener("keydown",e),u&&u.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e),u&&u.removeEventListener("keydown",e)}}),[r]),o.a.createElement("div",{style:l(t),ref:function(e){if(e){var t=e.ownerDocument;u=t.defaultView}}},e.children)},s=function(e){return{fontFamily:"sans-serif",color:e.footer,marginTop:"0.5rem",flex:"0 0 auto"}};var f=function(e){var t=Object(n.useContext)(me);return o.a.createElement("div",{style:s(t)},e.line1,o.a.createElement("br",null),e.line2)},d=function(e){return{fontSize:"2em",fontFamily:"sans-serif",color:e.headerColor,whiteSpace:"pre-wrap",margin:"0 2rem 0.75rem 0",flex:"0 0 auto",maxHeight:"50%",overflow:"auto"}};var p=function(e){var t=Object(n.useContext)(me);return o.a.createElement("div",{style:d(t)},e.headerText)};function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={position:"relative",display:"block",padding:"0.5em",marginTop:"0.5em",marginBottom:"0.5em",overflowX:"auto",whiteSpace:"pre-wrap",borderRadius:"0.25rem"},y={fontFamily:"Consolas, Menlo, monospace"};var b=function(e){var t=e.main,r=e.codeHTML,a=Object(n.useContext)(me),i=v(v({},m),{},{backgroundColor:a.primaryPreBackground,color:a.primaryPreColor}),l=v(v({},m),{},{backgroundColor:a.secondaryPreBackground,color:a.secondaryPreColor}),u=t?i:l,c={__html:r};return o.a.createElement("pre",{style:u},o.a.createElement("code",{style:y,dangerouslySetInnerHTML:c}))},w=r(33),k=r.n(w),E=new(r(88).AllHtmlEntities),x=function(e){return{reset:[e.base05,"transparent"],black:e.base05,red:e.base08,green:e.base0B,yellow:e.base08,blue:e.base0C,magenta:e.base0C,cyan:e.base0E,gray:e.base03,lightgrey:e.base01,darkgrey:e.base03}},S={"ansi-bright-black":"black","ansi-bright-yellow":"yellow","ansi-yellow":"yellow","ansi-bright-green":"green","ansi-green":"green","ansi-bright-cyan":"cyan","ansi-cyan":"cyan","ansi-bright-red":"red","ansi-red":"red","ansi-bright-magenta":"magenta","ansi-magenta":"magenta","ansi-white":"darkgrey"};var _=function(e,t){for(var r=(new k.a).ansiToJson(E.encode(e),{use_classes:!0}),n="",o=!1,a=0;a<r.length;++a)for(var i=r[a],l=i.content,u=i.fg,c=l.split("\\n"),s=0;s<c.length;++s){o||(n+=\'<span data-ansi-line="true">\',o=!0);var f=c[s].replace("\\r",""),d=x(t)[S[u]];null!=d?n+=\'<span style="color: \'+d+\';">\'+f+"</span>":(null!=u&&console.log("Missing color mapping: ",u),n+="<span>"+f+"</span>"),s<c.length-1&&(n+="</span>",o=!1,n+="<br/>")}return o&&(n+="</span>",o=!1),n},T=/^\\.(\\/[^/\\n ]+)+\\.[^/\\n ]+$/,C=[/^.*\\((\\d+):(\\d+)\\)$/,/^Line (\\d+):.+$/];var O=function(e){for(var t=e.split("\\n"),r="",n=0,o=0,a=0;a<t.length;a++){var i=k.a.ansiToText(t[a]).trim();if(i){!r&&i.match(T)&&(r=i);for(var l=0;l<C.length;){var u=i.match(C[l]);if(u){n=parseInt(u[1],10),o=parseInt(u[2],10)+1||1;break}l++}if(r&&n)break}}return r&&n?{fileName:r,lineNumber:n,colNumber:o}:null},P={cursor:"pointer"};var R=function(e){var t=Object(n.useContext)(me),r=e.error,a=e.editorHandler,i=O(r),l=null!==i&&null!==a;return o.a.createElement(c,null,o.a.createElement(p,{headerText:"Failed to compile"}),o.a.createElement("div",{onClick:l&&i?function(){return a(i)}:null,style:l?P:null},o.a.createElement(b,{main:!0,codeHTML:_(r,t)})),o.a.createElement(f,{line1:"This error occurred during the build time and cannot be dismissed."}))};function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t,r){return t&&L(e.prototype,t),r&&L(e,r),e}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e){return(D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){return!t||"object"!==D(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called");return e}(e):t}function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=M(e);if(t){var o=M(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return q(this,r)}}var U=function(e){return{color:e.closeColor,lineHeight:"1rem",fontSize:"1.5rem",padding:"1rem",cursor:"pointer",position:"absolute",right:0,top:0}};var F=function(e){var t=e.close,r=Object(n.useContext)(me);return o.a.createElement("span",{title:"Click or press Escape to dismiss.",onClick:t,style:U(r)},"\xd7")},B={marginBottom:"0.5rem"},V={marginRight:"1em"},H={border:"none",borderRadius:"4px",padding:"3px 6px",cursor:"pointer"},W=function(e){return v(v({},H),{},{backgroundColor:e.navBackground,color:e.navArrow,borderTopRightRadius:"0px",borderBottomRightRadius:"0px",marginRight:"1px"})},$=function(e){return v(v({},H),{},{backgroundColor:e.navBackground,color:e.navArrow,borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px"})};var G=function(e){var t=Object(n.useContext)(me),r=e.currentError,a=e.totalErrors,i=e.previous,l=e.next;return o.a.createElement("div",{style:B},o.a.createElement("span",{style:V},o.a.createElement("button",{onClick:i,style:W(t)},"\u2190"),o.a.createElement("button",{onClick:l,style:$(t)},"\u2192")),"".concat(r," of ").concat(a," errors on the page"))};function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return Q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){for(;null!=t&&"br"!==t.tagName.toLowerCase();)t=t.nextElementSibling;null!=t&&e.removeChild(t)}var X=r(89);var J=function(e){var t=Object(n.useContext)(me),r=e.lines,a=e.lineNum,i=e.columnNum,l=e.contextSize,u=e.main,c=[],s=1/0;r.forEach((function(e){var t=e.content,r=t.match(/^\\s*/);""!==t&&(s=r&&r[0]?Math.min(s,r[0].length):0)})),r.forEach((function(e){var t=e.content,r=e.lineNumber;isFinite(s)&&(t=t.substring(s)),c[r-1]=t}));var f=Object(X.codeFrameColumns)(c.join("\\n"),{start:{line:a,column:null==i?0:i-(isFinite(s)?s:0)}},{forceColor:!0,linesAbove:l,linesBelow:l}),d=_(f,t),p=document.createElement("code");p.innerHTML=d,function(e){for(var t=e.childNodes,r=0;r<t.length;++r){var n=t[r];if("span"===n.tagName.toLowerCase()){var o=n.innerText;null!=o&&"|^"===o.replace(/\\s/g,"")&&(n.style.position="absolute",K(e,n))}}}(p);var h=p.childNodes;e:for(var g=0;g<h.length;++g)for(var v=h[g].childNodes,m=0;m<v.length;++m){var y=v[m].innerText;if(null!=y&&-1!==y.indexOf(" "+a+" |"))break e}return o.a.createElement(b,{main:u,codeHTML:p.innerHTML})};function Z(e,t,r,n,o,a,i){var l;if(!i&&e&&"number"===typeof t){var u=/^[/|\\\\].*?[/|\\\\]((src|node_modules)[/|\\\\].*)/.exec(e);l=u&&u[1]?u[1]:e,l+=":"+t,r&&(l+=":"+r)}else n&&"number"===typeof o?(l=n+":"+o,a&&(l+=":"+a)):l="unknown";return l.replace("webpack://",".")}var ee=function(e){return{textDecoration:"none",color:e.anchorColor,cursor:"pointer"}},te=function(e){return{marginBottom:"1.5em",color:e.toggleColor,cursor:"pointer",border:"none",display:"block",width:"100%",textAlign:"left",background:e.toggleBackground,fontFamily:"Consolas, Menlo, monospace",fontSize:"1em",padding:"0px",lineHeight:"1.5"}};var re=function(e){var t=Object(n.useContext)(me),r=Y(Object(n.useState)(!1),2),a=r[0],i=r[1],l=function(){var t=e.frame,r=t._originalFileName,n=t._originalLineNumber;return r?-1!==r.trim().indexOf(" ")?null:{fileName:r,lineNumber:n||1}:null},u=function(){var t=l();t&&e.editorHandler(t)},c=e.frame,s=e.contextSize,f=e.critical,d=e.showCode,p=c.fileName,h=c.lineNumber,g=c.columnNumber,v=c._scriptCode,m=c._originalFileName,y=c._originalLineNumber,b=c._originalColumnNumber,w=c._originalScriptCode,k=c.getFunctionName(),E=Z(m,y,b,p,h,g,a),x=null;d&&(a&&v&&0!==v.length&&null!=h?x={lines:v,lineNum:h,columnNum:g,contextSize:s,main:f}:!a&&w&&0!==w.length&&null!=y&&(x={lines:w,lineNum:y,columnNum:b,contextSize:s,main:f}));var S=null!==l()&&null!==e.editorHandler;return o.a.createElement("div",null,o.a.createElement("div",null,k),o.a.createElement("div",{style:{fontSize:"0.9em",marginBottom:"0.9em"}},o.a.createElement("span",{style:S?ee(t):null,onClick:S?u:null,onKeyDown:S?function(e){"Enter"===e.key&&u()}:null,tabIndex:S?"0":null},E)),x&&o.a.createElement("span",null,o.a.createElement("span",{onClick:S?u:null,style:S?{cursor:"pointer"}:null},o.a.createElement(J,x)),o.a.createElement("button",{style:te(t),onClick:function(){i(!a)}},"View "+(a?"source":"compiled"))))},ne={cursor:"pointer",border:"none",display:"block",width:"100%",textAlign:"left",fontFamily:"Consolas, Menlo, monospace",fontSize:"1em",padding:"0px",lineHeight:"1.5"},oe=function(e){return v(v({},ne),{},{color:e.color,background:e.background,marginBottom:"1.5em"})},ae=function(e){return v(v({},ne),{},{color:e.color,background:e.background,marginBottom:"0.6em"})};var ie=function(e){var t=Object(n.useContext)(me),r=Y(Object(n.useState)(!0),2),a=r[0],i=r[1],l=function(){i(!a)},u=e.children.length;return o.a.createElement("div",null,o.a.createElement("button",{onClick:l,style:a?oe(t):ae(t)},(a?"\u25B6":"\u25BC")+" ".concat(u," stack frames were ")+(a?"collapsed.":"expanded.")),o.a.createElement("div",{style:{display:a?"none":"block"}},e.children,o.a.createElement("button",{onClick:l,style:ae(t)},"\u25B2 ".concat(u," stack frames were expanded."))))};function le(e){switch(e){case"EvalError":case"InternalError":case"RangeError":case"ReferenceError":case"SyntaxError":case"TypeError":case"URIError":return!0;default:return!1}}var ue={fontSize:"1em",flex:"0 1 auto",minHeight:"0px",overflow:"auto"},ce=function(e){j(r,e);var t=z(r);function r(){return N(this,r),t.apply(this,arguments)}return A(r,[{key:"renderFrames",value:function(){var e=this.props,t=e.stackFrames,r=e.errorName,n=e.contextSize,a=e.editorHandler,i=[],l=!1,u=[],c=0;return t.forEach((function(e,s){var f=e.fileName,d=function(e,t){return null==e||""===e||-1!==e.indexOf("/~/")||-1!==e.indexOf("/node_modules/")||-1!==e.trim().indexOf(" ")||null==t||""===t}(e._originalFileName,f),p=!le(r),h=d&&(p||l);d||(l=!0);var g=o.a.createElement(re,{key:"frame-"+s,frame:e,contextSize:n,critical:0===s,showCode:!h,editorHandler:a}),v=s===t.length-1;h&&u.push(g),h&&!v||(1===u.length?i.push(u[0]):u.length>1&&(c++,i.push(o.a.createElement(ie,{key:"bundle-"+c},u))),u=[]),h||i.push(g)})),i}},{key:"render",value:function(){return o.a.createElement("div",{style:ue},this.renderFrames())}}]),r}(n.Component),se={display:"flex",flexDirection:"column"};var fe=function(e){var t=e.errorRecord,r=e.editorHandler,n=t.error,a=t.unhandledRejection,i=t.contextSize,l=t.stackFrames,u=a?"Unhandled Rejection ("+n.name+")":n.name,c=n.message,s=c.match(/^\\w*:/)||!u?c:u+": "+c;return s=s.replace(/^Invariant Violation:\\s*/,"").replace(/^Warning:\\s*/,"").replace(" Check the render method","\\n\\nCheck the render method").replace(" Check your code at","\\n\\nCheck your code at"),o.a.createElement("div",{style:se},o.a.createElement(p,{headerText:s}),o.a.createElement(ce,{stackFrames:l,errorName:u,contextSize:i,editorHandler:r}))},de=function(e){j(r,e);var t=z(r);function r(){var e;N(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={currentIndex:0},e.previous=function(){e.setState((function(e,t){return{currentIndex:e.currentIndex>0?e.currentIndex-1:t.errorRecords.length-1}}))},e.next=function(){e.setState((function(e,t){return{currentIndex:e.currentIndex<t.errorRecords.length-1?e.currentIndex+1:0}}))},e.shortcutHandler=function(t){"Escape"===t?e.props.close():"ArrowLeft"===t?e.previous():"ArrowRight"===t&&e.next()},e}return A(r,[{key:"render",value:function(){var e=this.props,t=e.errorRecords,r=e.close,n=t.length;return o.a.createElement(c,{shortcutHandler:this.shortcutHandler},o.a.createElement(F,{close:r}),n>1&&o.a.createElement(G,{currentError:this.state.currentIndex+1,totalErrors:n,previous:this.previous,next:this.next}),o.a.createElement(fe,{errorRecord:t[this.state.currentIndex],editorHandler:this.props.editorHandler}),o.a.createElement(f,{line1:"This screen is visible only in development. It will not appear if the app crashes in production.",line2:"Open your browser\u2019s developer console to further inspect this error.  Click the \'X\' or hit ESC to dismiss this message."}))}}]),r}(n.PureComponent),pe={background:"white",color:"black",headerColor:"#ce1126",primaryPreBackground:"rgba(206, 17, 38, 0.05)",primaryPreColor:"inherit",secondaryPreBackground:"rgba(251, 245, 180, 0.3)",secondaryPreColor:"inherit",footer:"#878e91",anchorColor:"#878e91",toggleBackground:"transparent",toggleColor:"#878e91",closeColor:"#293238",navBackground:"rgba(206, 17, 38, 0.05)",navArrow:"#ce1126",base01:"#f5f5f5",base03:"#6e6e6e",base05:"#333333",base08:"#881280",base0B:"#1155cc",base0C:"#994500",base0E:"#c80000"},he={background:"#353535",color:"white",headerColor:"#e83b46",primaryPreBackground:"rgba(206, 17, 38, 0.1)",primaryPreColor:"#fccfcf",secondaryPreBackground:"rgba(251, 245, 180, 0.1)",secondaryPreColor:"#fbf5b4",footer:"#878e91",anchorColor:"#878e91",toggleBackground:"transparent",toggleColor:"#878e91",closeColor:"#ffffff",navBackground:"rgba(206, 17, 38, 0.2)",navArrow:"#ce1126",base01:"#282a2e",base03:"#969896",base05:"#c5c8c6",base08:"#cc6666",base0B:"#b5bd68",base0C:"#8abeb7",base0E:"#b294bb"};var ge=null,ve=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?he:pe,me=Object(n.createContext)();window.updateContent=function(e){var t,r,n,a,l,u=(r=(t=e).currentBuildError,n=t.currentRuntimeErrorRecords,a=t.dismissRuntimeErrors,l=t.editorHandler,r?o.a.createElement(me.Provider,{value:ve},o.a.createElement(R,{error:r,editorHandler:l})):n.length>0?o.a.createElement(me.Provider,{value:ve},o.a.createElement(de,{errorRecords:n,close:a,editorHandler:l})):null);return null===u?(i.a.unmountComponentAtNode(ge),!1):(i.a.render(u,ge),!0)},document.body.style.margin="0",document.body.style["max-width"]="100vw",function(e,t){for(var r in e.setAttribute("style",""),t)t.hasOwnProperty(r)&&(e.style[r]=t[r])}(ge=document.createElement("div"),{width:"100%",height:"100%","box-sizing":"border-box","text-align":"center","background-color":ve.background}),document.body.appendChild(ge),window.parent.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.iframeReady()}]);', ee = null, te = !1, re = !1, ne = null, oe = null, ae = [], ie = null, le = null;
            function ue(e) {
                ne = e, ee && me();
            }
            function ce(e) {
                oe = e, me();
            }
            function se(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ie = t, X(pe(t))(e);
            }
            function fe() {
                oe = null, me();
            }
            function de(e) {
                if (null !== le) throw new Error("Already listening");
                e.launchEditorEndpoint && console.warn("Warning: `startReportingRuntimeErrors` doesn\u2019t accept `launchEditorEndpoint` argument anymore. Use `listenToOpenInEditor` instead with your own implementation to open errors in editor "), ie = e, le = K(pe(e), e.filename);
            }
            var pe = function(e) {
                return function(t) {
                    try {
                        "function" == typeof e.onError && e.onError.call(null);
                    } finally{
                        if (ae.some(function(e) {
                            return e.error === t.error;
                        })) return;
                        ae = ae.concat([
                            t
                        ]), me();
                    }
                };
            };
            function he() {
                ae = [], me();
            }
            function ge() {
                if (null === le) throw new Error("Not currently listening");
                ie = null;
                try {
                    le();
                } finally{
                    le = null;
                }
            }
            function me() {
                if (!te) {
                    if (re) ve();
                    else {
                        te = !0;
                        var e = window.document.createElement("iframe");
                        !function(e, t) {
                            for(var r in e.setAttribute("style", ""), t)t.hasOwnProperty(r) && (e.style[r] = t[r]);
                        }(e, J), e.onload = function() {
                            var t = e.contentDocument;
                            if (null != t && null != t.body) {
                                ee = e;
                                var r = e.contentWindow.document.createElement("script");
                                r.type = "text/javascript", r.innerHTML = Z, t.body.appendChild(r);
                            }
                        }, window.document.body.appendChild(e);
                    }
                }
            }
            function ve() {
                if (!ie) throw new Error("Expected options to be injected.");
                if (!ee) throw new Error("Iframe has not been created yet.");
                ee.contentWindow.updateContent({
                    currentBuildError: oe,
                    currentRuntimeErrorRecords: ae,
                    dismissRuntimeErrors: he,
                    editorHandler: ne
                }) || (window.document.body.removeChild(ee), ee = null, re = !1);
            }
            window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__ = window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__ || {}, window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.iframeReady = function() {
                re = !0, te = !1, ve();
            };
        }
    ]);
});

},{"d1546958eb39fdcf":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"846Bb":[function(require,module,exports) {
var _appClient = require("../submodules/rapdv/client/app/AppClient");
var _pageEditPost = require("./pages/PageEditPost");
var _pageLogin = require("./pages/PageLogin");
var _styleScss = require("./styles/style.scss");
const pages = [];
pages.push(new (0, _pageEditPost.PageEditPost)());
pages.push(new (0, _pageLogin.PageLogin)());
const app = new (0, _appClient.AppClient)();
app.start(pages);

},{"../submodules/rapdv/client/app/AppClient":"7SZo4","./styles/style.scss":"5NKOb","./pages/PageEditPost":"a7dli","./pages/PageLogin":"iKTAJ"}],"7SZo4":[function(require,module,exports) {
// Copyright (C) Digital Jetty Konrad Gadzinowski
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AppClient", ()=>AppClient);
var _pjax = require("pjax");
var _pjaxDefault = parcelHelpers.interopDefault(_pjax);
var _bootstrapCss = require("bootstrap/dist/css/bootstrap.css");
var _bootstrapJs = require("bootstrap/dist/js/bootstrap.js");
var _bootstrapIconsCss = require("bootstrap-icons/font/bootstrap-icons.css");
var _nprogressCss = require("nprogress/nprogress.css");
var _nprogressJs = require("nprogress/nprogress.js");
var _nprogressJsDefault = parcelHelpers.interopDefault(_nprogressJs);
var _pagesCtrl = require("../elements/PagesCtrl");
var _form = require("../elements/Form");
var _mainScss = require("./styles/main.scss");
var _sizingScss = require("./styles/sizing.scss");
class AppClient {
    constructor(onPageLoaded){
        this.initiated = false;
        this.start = (pages)=>{
            if (this.initiated) return;
            this.initiated = true;
            this.setupPjax();
            this.pagesCtrl = new (0, _pagesCtrl.PagesCtrl)();
            if (!!pages) for (const page of pages)this.pagesCtrl.addPage(page);
        };
        this.setupPjax = ()=>{
            document.addEventListener("DOMContentLoaded", ()=>{
                this.pjax = new (0, _pjaxDefault.default)({
                    elements: 'a:not([target="_blank"]):not(.noPjax)[href], form.pjax',
                    selectors: [
                        "title",
                        "header",
                        "main",
                        "style"
                    ],
                    cacheBust: false
                });
                (0, _nprogressJsDefault.default).configure({
                    parent: "body",
                    showSpinner: false
                });
                this.pagesCtrl.setPjax(this.pjax);
                this.pagesCtrl.setupPage();
                (0, _form.Form).setupForms();
                if (!!this.onPageLoaded) this.onPageLoaded();
            });
            document.addEventListener("pjax:send", ()=>{
                (0, _nprogressJsDefault.default).start();
            });
            document.addEventListener("pjax:complete", ()=>{
                (0, _nprogressJsDefault.default).done();
            });
            document.addEventListener("pjax:error", ()=>{
                (0, _nprogressJsDefault.default).done();
            });
            document.addEventListener("pjax:success", ()=>{
                (0, _nprogressJsDefault.default).done();
                this.pagesCtrl.setupPage();
                (0, _form.Form).setupForms();
                if (!!this.onPageLoaded) this.onPageLoaded();
            });
        };
        this.onPageLoaded = onPageLoaded;
    }
}

},{"pjax":"2FVbS","bootstrap/dist/css/bootstrap.css":"jJvnD","bootstrap/dist/js/bootstrap.js":"9AxfY","bootstrap-icons/font/bootstrap-icons.css":"87yWV","nprogress/nprogress.css":"kXs5O","nprogress/nprogress.js":"1tCWG","../elements/PagesCtrl":"jcT59","../elements/Form":"gCcLc","./styles/main.scss":"kNC6N","./styles/sizing.scss":"362eY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2FVbS":[function(require,module,exports) {
var executeScripts = require("394437ca2ca90c98");
var forEachEls = require("93501a25dd8442a9");
var parseOptions = require("67cec987bd1abbb0");
var switches = require("fad1ecd62d446c57");
var newUid = require("bbb7edfa53a19ab6");
var on = require("2a51474b265f0ad3");
var trigger = require("6608193d0fa3d5d1");
var clone = require("ce130b1c3ab828de");
var contains = require("288a0343c38bea94");
var extend = require("d3d4864d8bfd4099");
var noop = require("5afbb02b775d8e60");
var Pjax = function(options) {
    this.state = {
        numPendingSwitches: 0,
        href: null,
        options: null
    };
    this.options = parseOptions(options);
    this.log("Pjax options", this.options);
    if (this.options.scrollRestoration && "scrollRestoration" in history) history.scrollRestoration = "manual";
    this.maxUid = this.lastUid = newUid();
    this.parseDOM(document);
    on(window, "popstate", (function(st) {
        if (st.state) {
            var opt = clone(this.options);
            opt.url = st.state.url;
            opt.title = st.state.title;
            // Since state already exists, prevent it from being pushed again
            opt.history = false;
            opt.scrollPos = st.state.scrollPos;
            if (st.state.uid < this.lastUid) opt.backward = true;
            else opt.forward = true;
            this.lastUid = st.state.uid;
            // @todo implement history cache here, based on uid
            this.loadUrl(st.state.url, opt);
        }
    }).bind(this));
};
Pjax.switches = switches;
Pjax.prototype = {
    log: require("3a399435376b707"),
    getElements: function(el) {
        return el.querySelectorAll(this.options.elements);
    },
    parseDOM: function(el) {
        var parseElement = require("d28e85b6589b95d7");
        forEachEls(this.getElements(el), parseElement, this);
    },
    refresh: function(el) {
        this.parseDOM(el || document);
    },
    reload: function() {
        window.location.reload();
    },
    attachLink: require("23bcaf5c3c9ae023"),
    attachForm: require("69623daa15162418"),
    forEachSelectors: function(cb, context, DOMcontext) {
        return require("c1ceafa3c60cc44e").bind(this)(this.options.selectors, cb, context, DOMcontext);
    },
    switchSelectors: function(selectors, fromEl, toEl, options) {
        return require("814992063669e3a5").bind(this)(this.options.switches, this.options.switchesOptions, selectors, fromEl, toEl, options);
    },
    latestChance: function(href) {
        window.location = href;
    },
    onSwitch: function() {
        trigger(window, "resize scroll");
        this.state.numPendingSwitches--;
        // debounce calls, so we only run this once after all switches are finished.
        if (this.state.numPendingSwitches === 0) this.afterAllSwitches();
    },
    loadContent: function(html, options) {
        if (typeof html !== "string") {
            trigger(document, "pjax:complete pjax:error", options);
            return;
        }
        var tmpEl = document.implementation.createHTMLDocument("pjax");
        // parse HTML attributes to copy them
        // since we are forced to use documentElement.innerHTML (outerHTML can't be used for <html>)
        var htmlRegex = /<html[^>]+>/gi;
        var htmlAttribsRegex = /\s?[a-z:]+(?:=['"][^'">]+['"])*/gi;
        var matches = html.match(htmlRegex);
        if (matches && matches.length) {
            matches = matches[0].match(htmlAttribsRegex);
            if (matches.length) {
                matches.shift();
                matches.forEach(function(htmlAttrib) {
                    var attr = htmlAttrib.trim().split("=");
                    if (attr.length === 1) tmpEl.documentElement.setAttribute(attr[0], true);
                    else tmpEl.documentElement.setAttribute(attr[0], attr[1].slice(1, -1));
                });
            }
        }
        tmpEl.documentElement.innerHTML = html;
        this.log("load content", tmpEl.documentElement.attributes, tmpEl.documentElement.innerHTML.length);
        // Clear out any focused controls before inserting new page contents.
        if (document.activeElement && contains(document, this.options.selectors, document.activeElement)) try {
            document.activeElement.blur();
        } catch (e) {} // eslint-disable-line no-empty
        this.switchSelectors(this.options.selectors, tmpEl, document, options);
    },
    abortRequest: require("595594b509297f78"),
    doRequest: require("9297ced7bfabd0e5"),
    handleResponse: require("b094d7982ee4bc08"),
    loadUrl: function(href, options) {
        options = typeof options === "object" ? extend({}, this.options, options) : clone(this.options);
        this.log("load href", href, options);
        // Abort any previous request
        this.abortRequest(this.request);
        trigger(document, "pjax:send", options);
        // Do the request
        this.request = this.doRequest(href, options, this.handleResponse.bind(this));
    },
    afterAllSwitches: function() {
        // FF bug: Won’t autofocus fields that are inserted via JS.
        // This behavior is incorrect. So if theres no current focus, autofocus
        // the last field.
        //
        // http://www.w3.org/html/wg/drafts/html/master/forms.html
        var autofocusEl = Array.prototype.slice.call(document.querySelectorAll("[autofocus]")).pop();
        if (autofocusEl && document.activeElement !== autofocusEl) autofocusEl.focus();
        // execute scripts when DOM have been completely updated
        this.options.selectors.forEach(function(selector) {
            forEachEls(document.querySelectorAll(selector), function(el) {
                executeScripts(el);
            });
        });
        var state = this.state;
        if (state.options.history) {
            if (!window.history.state) {
                this.lastUid = this.maxUid = newUid();
                window.history.replaceState({
                    url: window.location.href,
                    title: document.title,
                    uid: this.maxUid,
                    scrollPos: [
                        0,
                        0
                    ]
                }, document.title);
            }
            // Update browser history
            this.lastUid = this.maxUid = newUid();
            window.history.pushState({
                url: state.href,
                title: state.options.title,
                uid: this.maxUid,
                scrollPos: [
                    0,
                    0
                ]
            }, state.options.title, state.href);
        }
        this.forEachSelectors(function(el) {
            this.parseDOM(el);
        }, this);
        // Fire Events
        trigger(document, "pjax:complete pjax:success", state.options);
        if (typeof state.options.analytics === "function") state.options.analytics();
        if (state.options.history) {
            // First parse url and check for hash to override scroll
            var a = document.createElement("a");
            a.href = this.state.href;
            if (a.hash) {
                var name = a.hash.slice(1);
                name = decodeURIComponent(name);
                var curtop = 0;
                var target = document.getElementById(name) || document.getElementsByName(name)[0];
                if (target) {
                    // http://stackoverflow.com/questions/8111094/cross-browser-javascript-function-to-find-actual-position-of-an-element-in-page
                    if (target.offsetParent) do {
                        curtop += target.offsetTop;
                        target = target.offsetParent;
                    }while (target);
                }
                window.scrollTo(0, curtop);
            } else if (state.options.scrollTo !== false) {
                // Scroll page to top on new page load
                if (state.options.scrollTo.length > 1) window.scrollTo(state.options.scrollTo[0], state.options.scrollTo[1]);
                else window.scrollTo(0, state.options.scrollTo);
            }
        } else if (state.options.scrollRestoration && state.options.scrollPos) window.scrollTo(state.options.scrollPos[0], state.options.scrollPos[1]);
        this.state = {
            numPendingSwitches: 0,
            href: null,
            options: null
        };
    }
};
Pjax.isSupported = require("1d6c6121a186f9d4");
// arguably could do `if( require("./lib/is-supported")()) {` but that might be a little to simple
if (Pjax.isSupported()) module.exports = Pjax;
else {
    var stupidPjax = noop;
    for(var key in Pjax.prototype)if (Pjax.prototype.hasOwnProperty(key) && typeof Pjax.prototype[key] === "function") stupidPjax[key] = noop;
    module.exports = stupidPjax;
}

},{"394437ca2ca90c98":"bbtkt","93501a25dd8442a9":"hvSry","67cec987bd1abbb0":"5blr2","fad1ecd62d446c57":"jRpUx","bbb7edfa53a19ab6":"8EpeP","2a51474b265f0ad3":"8U5jz","6608193d0fa3d5d1":"jQw9u","ce130b1c3ab828de":"btm8d","288a0343c38bea94":"emZsR","d3d4864d8bfd4099":"52Q6F","5afbb02b775d8e60":"f0MwM","3a399435376b707":"4mgzE","d28e85b6589b95d7":"65vNQ","23bcaf5c3c9ae023":"6cfcK","69623daa15162418":"7xbaU","c1ceafa3c60cc44e":"gFxjB","814992063669e3a5":"8HTQL","595594b509297f78":"4hLfU","9297ced7bfabd0e5":"lWopb","b094d7982ee4bc08":"dIRGH","1d6c6121a186f9d4":"egYX4"}],"bbtkt":[function(require,module,exports) {
var forEachEls = require("2eb5a84e87ee43a1");
var evalScript = require("a0e21cc56cc6ef59");
// Finds and executes scripts (used for newly added elements)
// Needed since innerHTML does not run scripts
module.exports = function(el) {
    if (el.tagName.toLowerCase() === "script") evalScript(el);
    forEachEls(el.querySelectorAll("script"), function(script) {
        if (!script.type || script.type.toLowerCase() === "text/javascript") {
            if (script.parentNode) script.parentNode.removeChild(script);
            evalScript(script);
        }
    });
};

},{"2eb5a84e87ee43a1":"hvSry","a0e21cc56cc6ef59":"2TZDE"}],"hvSry":[function(require,module,exports) {
/* global HTMLCollection: true */ module.exports = function(els, fn, context) {
    if (els instanceof HTMLCollection || els instanceof NodeList || els instanceof Array) return Array.prototype.forEach.call(els, fn, context);
    // assume simple DOM element
    return fn.call(context, els);
};

},{}],"2TZDE":[function(require,module,exports) {
module.exports = function(el) {
    var code = el.text || el.textContent || el.innerHTML || "";
    var src = el.src || "";
    var parent = el.parentNode || document.querySelector("head") || document.documentElement;
    var script = document.createElement("script");
    if (code.match("document.write")) {
        if (console && console.log) console.log("Script contains document.write. Can\u2019t be executed correctly. Code skipped ", el);
        return false;
    }
    script.type = "text/javascript";
    script.id = el.id;
    /* istanbul ignore if */ if (src !== "") {
        script.src = src;
        script.async = false; // force synchronous loading of peripheral JS
    }
    if (code !== "") try {
        script.appendChild(document.createTextNode(code));
    } catch (e) {
        /* istanbul ignore next */ // old IEs have funky script nodes
        script.text = code;
    }
    // execute
    parent.appendChild(script);
    // avoid pollution only in head or body tags
    if ((parent instanceof HTMLHeadElement || parent instanceof HTMLBodyElement) && parent.contains(script)) parent.removeChild(script);
    return true;
};

},{}],"5blr2":[function(require,module,exports) {
/* global _gaq: true, ga: true */ var defaultSwitches = require("ceffbee9d41db7e9");
module.exports = function(options) {
    options = options || {};
    options.elements = options.elements || "a[href], form[action]";
    options.selectors = options.selectors || [
        "title",
        ".js-Pjax"
    ];
    options.switches = options.switches || {};
    options.switchesOptions = options.switchesOptions || {};
    options.history = typeof options.history === "undefined" ? true : options.history;
    options.analytics = typeof options.analytics === "function" || options.analytics === false ? options.analytics : defaultAnalytics;
    options.scrollTo = typeof options.scrollTo === "undefined" ? 0 : options.scrollTo;
    options.scrollRestoration = typeof options.scrollRestoration !== "undefined" ? options.scrollRestoration : true;
    options.cacheBust = typeof options.cacheBust === "undefined" ? true : options.cacheBust;
    options.debug = options.debug || false;
    options.timeout = options.timeout || 0;
    options.currentUrlFullReload = typeof options.currentUrlFullReload === "undefined" ? false : options.currentUrlFullReload;
    // We can’t replace body.outerHTML or head.outerHTML.
    // It creates a bug where a new body or head are created in the DOM.
    // If you set head.outerHTML, a new body tag is appended, so the DOM has 2 body nodes, and vice versa
    if (!options.switches.head) options.switches.head = defaultSwitches.switchElementsAlt;
    if (!options.switches.body) options.switches.body = defaultSwitches.switchElementsAlt;
    return options;
};
/* istanbul ignore next */ function defaultAnalytics() {
    if (window._gaq) _gaq.push([
        "_trackPageview"
    ]);
    if (window.ga) ga("send", "pageview", {
        page: location.pathname,
        title: document.title
    });
}

},{"ceffbee9d41db7e9":"jRpUx"}],"jRpUx":[function(require,module,exports) {
var on = require("7d09c490acacd7df");
module.exports = {
    outerHTML: function(oldEl, newEl) {
        oldEl.outerHTML = newEl.outerHTML;
        this.onSwitch();
    },
    innerHTML: function(oldEl, newEl) {
        oldEl.innerHTML = newEl.innerHTML;
        if (newEl.className === "") oldEl.removeAttribute("class");
        else oldEl.className = newEl.className;
        this.onSwitch();
    },
    switchElementsAlt: function(oldEl, newEl) {
        oldEl.innerHTML = newEl.innerHTML;
        // Copy attributes from the new element to the old one
        if (newEl.hasAttributes()) {
            var attrs = newEl.attributes;
            for(var i = 0; i < attrs.length; i++)oldEl.attributes.setNamedItem(attrs[i].cloneNode());
        }
        this.onSwitch();
    },
    // Equivalent to outerHTML(), but doesn't require switchElementsAlt() for <head> and <body>
    replaceNode: function(oldEl, newEl) {
        oldEl.parentNode.replaceChild(newEl, oldEl);
        this.onSwitch();
    },
    sideBySide: function(oldEl, newEl, options, switchOptions) {
        var forEach = Array.prototype.forEach;
        var elsToRemove = [];
        var elsToAdd = [];
        var fragToAppend = document.createDocumentFragment();
        var animationEventNames = "animationend webkitAnimationEnd MSAnimationEnd oanimationend";
        var animatedElsNumber = 0;
        var sexyAnimationEnd = (function(e) {
            if (e.target !== e.currentTarget) // end triggered by an animation on a child
            return;
            animatedElsNumber--;
            if (animatedElsNumber <= 0 && elsToRemove) {
                elsToRemove.forEach(function(el) {
                    // browsing quickly can make the el
                    // already removed by last page update ?
                    if (el.parentNode) el.parentNode.removeChild(el);
                });
                elsToAdd.forEach(function(el) {
                    el.className = el.className.replace(el.getAttribute("data-pjax-classes"), "");
                    el.removeAttribute("data-pjax-classes");
                });
                elsToAdd = null; // free memory
                elsToRemove = null; // free memory
                // this is to trigger some repaint (example: picturefill)
                this.onSwitch();
            }
        }).bind(this);
        switchOptions = switchOptions || {};
        forEach.call(oldEl.childNodes, function(el) {
            elsToRemove.push(el);
            if (el.classList && !el.classList.contains("js-Pjax-remove")) {
                // for fast switch, clean element that just have been added, & not cleaned yet.
                if (el.hasAttribute("data-pjax-classes")) {
                    el.className = el.className.replace(el.getAttribute("data-pjax-classes"), "");
                    el.removeAttribute("data-pjax-classes");
                }
                el.classList.add("js-Pjax-remove");
                if (switchOptions.callbacks && switchOptions.callbacks.removeElement) switchOptions.callbacks.removeElement(el);
                if (switchOptions.classNames) el.className += " " + switchOptions.classNames.remove + " " + (options.backward ? switchOptions.classNames.backward : switchOptions.classNames.forward);
                animatedElsNumber++;
                on(el, animationEventNames, sexyAnimationEnd, true);
            }
        });
        forEach.call(newEl.childNodes, function(el) {
            if (el.classList) {
                var addClasses = "";
                if (switchOptions.classNames) addClasses = " js-Pjax-add " + switchOptions.classNames.add + " " + (options.backward ? switchOptions.classNames.forward : switchOptions.classNames.backward);
                if (switchOptions.callbacks && switchOptions.callbacks.addElement) switchOptions.callbacks.addElement(el);
                el.className += addClasses;
                el.setAttribute("data-pjax-classes", addClasses);
                elsToAdd.push(el);
                fragToAppend.appendChild(el);
                animatedElsNumber++;
                on(el, animationEventNames, sexyAnimationEnd, true);
            }
        });
        // pass all className of the parent
        oldEl.className = newEl.className;
        oldEl.appendChild(fragToAppend);
    }
};

},{"7d09c490acacd7df":"8U5jz"}],"8U5jz":[function(require,module,exports) {
var forEachEls = require("d68a54180d93b47");
module.exports = function(els, events, listener, useCapture) {
    events = typeof events === "string" ? events.split(" ") : events;
    events.forEach(function(e) {
        forEachEls(els, function(el) {
            el.addEventListener(e, listener, useCapture);
        });
    });
};

},{"d68a54180d93b47":"hvSry"}],"8EpeP":[function(require,module,exports) {
module.exports = function() {
    var counter = 0;
    return function() {
        var id = "pjax" + new Date().getTime() + "_" + counter;
        counter++;
        return id;
    };
}();

},{}],"jQw9u":[function(require,module,exports) {
var forEachEls = require("f36574ebcd7e42ab");
module.exports = function(els, events, opts) {
    events = typeof events === "string" ? events.split(" ") : events;
    events.forEach(function(e) {
        var event;
        event = document.createEvent("HTMLEvents");
        event.initEvent(e, true, true);
        event.eventName = e;
        if (opts) Object.keys(opts).forEach(function(key) {
            event[key] = opts[key];
        });
        forEachEls(els, function(el) {
            var domFix = false;
            if (!el.parentNode && el !== document && el !== window) {
                // THANK YOU IE (9/10/11)
                // dispatchEvent doesn't work if the element is not in the DOM
                domFix = true;
                document.body.appendChild(el);
            }
            el.dispatchEvent(event);
            if (domFix) el.parentNode.removeChild(el);
        });
    });
};

},{"f36574ebcd7e42ab":"hvSry"}],"btm8d":[function(require,module,exports) {
module.exports = function(obj) {
    /* istanbul ignore if */ if (null === obj || "object" !== typeof obj) return obj;
    var copy = obj.constructor();
    for(var attr in obj)if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    return copy;
};

},{}],"emZsR":[function(require,module,exports) {
module.exports = function contains(doc, selectors, el) {
    for(var i = 0; i < selectors.length; i++){
        var selectedEls = doc.querySelectorAll(selectors[i]);
        for(var j = 0; j < selectedEls.length; j++){
            if (selectedEls[j].contains(el)) return true;
        }
    }
    return false;
};

},{}],"52Q6F":[function(require,module,exports) {
module.exports = function(target) {
    if (target == null) return null;
    var to = Object(target);
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        if (source != null) {
            for(var key in source)// Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(source, key)) to[key] = source[key];
        }
    }
    return to;
};

},{}],"f0MwM":[function(require,module,exports) {
module.exports = function() {};

},{}],"4mgzE":[function(require,module,exports) {
module.exports = function() {
    if (this.options.debug && console) {
        if (typeof console.log === "function") console.log.apply(console, arguments);
        else if (console.log) console.log(arguments);
    }
};

},{}],"65vNQ":[function(require,module,exports) {
var attrState = "data-pjax-state";
module.exports = function(el) {
    switch(el.tagName.toLowerCase()){
        case "a":
            // only attach link if el does not already have link attached
            if (!el.hasAttribute(attrState)) this.attachLink(el);
            break;
        case "form":
            // only attach link if el does not already have link attached
            if (!el.hasAttribute(attrState)) this.attachForm(el);
            break;
        default:
            throw "Pjax can only be applied on <a> or <form> submit";
    }
};

},{}],"6cfcK":[function(require,module,exports) {
var on = require("1f059c3d714d63b");
var clone = require("cb4056db0303cff4");
var attrState = "data-pjax-state";
var linkAction = function(el, event) {
    if (isDefaultPrevented(event)) return;
    // Since loadUrl modifies options and we may add our own modifications below,
    // clone it so the changes don't persist
    var options = clone(this.options);
    var attrValue = checkIfShouldAbort(el, event);
    if (attrValue) {
        el.setAttribute(attrState, attrValue);
        return;
    }
    event.preventDefault();
    // don’t do "nothing" if user try to reload the page by clicking the same link twice
    if (this.options.currentUrlFullReload && el.href === window.location.href.split("#")[0]) {
        el.setAttribute(attrState, "reload");
        this.reload();
        return;
    }
    el.setAttribute(attrState, "load");
    options.triggerElement = el;
    this.loadUrl(el.href, options);
};
function checkIfShouldAbort(el, event) {
    // Don’t break browser special behavior on links (like page in new window)
    if (event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return "modifier";
    // we do test on href now to prevent unexpected behavior if for some reason
    // user have href that can be dynamically updated
    // Ignore external links.
    if (el.protocol !== window.location.protocol || el.host !== window.location.host) return "external";
    // Ignore anchors on the same page (keep native behavior)
    if (el.hash && el.href.replace(el.hash, "") === window.location.href.replace(location.hash, "")) return "anchor";
    // Ignore empty anchor "foo.html#"
    if (el.href === window.location.href.split("#")[0] + "#") return "anchor-empty";
}
var isDefaultPrevented = function(event) {
    return event.defaultPrevented || event.returnValue === false;
};
module.exports = function(el) {
    var that = this;
    el.setAttribute(attrState, "");
    on(el, "click", function(event) {
        linkAction.call(that, el, event);
    });
    on(el, "keyup", (function(event) {
        if (event.keyCode === 13) linkAction.call(that, el, event);
    }).bind(this));
};

},{"1f059c3d714d63b":"8U5jz","cb4056db0303cff4":"btm8d"}],"7xbaU":[function(require,module,exports) {
var on = require("39fa04fa8bfd4178");
var clone = require("e71ed65b9d0828dc");
var attrState = "data-pjax-state";
var formAction = function(el, event) {
    if (isDefaultPrevented(event)) return;
    // Since loadUrl modifies options and we may add our own modifications below,
    // clone it so the changes don't persist
    var options = clone(this.options);
    // Initialize requestOptions
    options.requestOptions = {
        requestUrl: el.getAttribute("action") || window.location.href,
        requestMethod: el.getAttribute("method") || "GET"
    };
    // create a testable virtual link of the form action
    var virtLinkElement = document.createElement("a");
    virtLinkElement.setAttribute("href", options.requestOptions.requestUrl);
    var attrValue = checkIfShouldAbort(virtLinkElement, options);
    if (attrValue) {
        el.setAttribute(attrState, attrValue);
        return;
    }
    event.preventDefault();
    if (el.enctype === "multipart/form-data") options.requestOptions.formData = new FormData(el);
    else options.requestOptions.requestParams = parseFormElements(el);
    el.setAttribute(attrState, "submit");
    options.triggerElement = el;
    this.loadUrl(virtLinkElement.href, options);
};
function parseFormElements(el) {
    var requestParams = [];
    var formElements = el.elements;
    for(var i = 0; i < formElements.length; i++){
        var element = formElements[i];
        var tagName = element.tagName.toLowerCase();
        // jscs:disable disallowImplicitTypeConversion
        if (!!element.name && element.attributes !== undefined && tagName !== "button") {
            // jscs:enable disallowImplicitTypeConversion
            var type = element.attributes.type;
            if (!type || type.value !== "checkbox" && type.value !== "radio" || element.checked) {
                // Build array of values to submit
                var values = [];
                if (tagName === "select") {
                    var opt;
                    for(var j = 0; j < element.options.length; j++){
                        opt = element.options[j];
                        if (opt.selected && !opt.disabled) values.push(opt.hasAttribute("value") ? opt.value : opt.text);
                    }
                } else values.push(element.value);
                for(var k = 0; k < values.length; k++)requestParams.push({
                    name: encodeURIComponent(element.name),
                    value: encodeURIComponent(values[k])
                });
            }
        }
    }
    return requestParams;
}
function checkIfShouldAbort(virtLinkElement, options) {
    // Ignore external links.
    if (virtLinkElement.protocol !== window.location.protocol || virtLinkElement.host !== window.location.host) return "external";
    // Ignore click if we are on an anchor on the same page
    if (virtLinkElement.hash && virtLinkElement.href.replace(virtLinkElement.hash, "") === window.location.href.replace(location.hash, "")) return "anchor";
    // Ignore empty anchor "foo.html#"
    if (virtLinkElement.href === window.location.href.split("#")[0] + "#") return "anchor-empty";
    // if declared as a full reload, just normally submit the form
    if (options.currentUrlFullReload && virtLinkElement.href === window.location.href.split("#")[0]) return "reload";
}
var isDefaultPrevented = function(event) {
    return event.defaultPrevented || event.returnValue === false;
};
module.exports = function(el) {
    var that = this;
    el.setAttribute(attrState, "");
    on(el, "submit", function(event) {
        formAction.call(that, el, event);
    });
};

},{"39fa04fa8bfd4178":"8U5jz","e71ed65b9d0828dc":"btm8d"}],"gFxjB":[function(require,module,exports) {
var forEachEls = require("97b6f49db5cfd70f");
module.exports = function(selectors, cb, context, DOMcontext) {
    DOMcontext = DOMcontext || document;
    selectors.forEach(function(selector) {
        forEachEls(DOMcontext.querySelectorAll(selector), cb, context);
    });
};

},{"97b6f49db5cfd70f":"hvSry"}],"8HTQL":[function(require,module,exports) {
var forEachEls = require("d576c74aa405d9a0");
var defaultSwitches = require("55f1ae30485a4805");
module.exports = function(switches, switchesOptions, selectors, fromEl, toEl, options) {
    var switchesQueue = [];
    selectors.forEach(function(selector) {
        var newEls = fromEl.querySelectorAll(selector);
        var oldEls = toEl.querySelectorAll(selector);
        if (this.log) this.log("Pjax switch", selector, newEls, oldEls);
        if (newEls.length !== oldEls.length) throw "DOM doesn\u2019t look the same on new loaded page: \u2019" + selector + "\u2019 - new " + newEls.length + ", old " + oldEls.length;
        forEachEls(newEls, function(newEl, i) {
            var oldEl = oldEls[i];
            if (this.log) this.log("newEl", newEl, "oldEl", oldEl);
            var callback = switches[selector] ? switches[selector].bind(this, oldEl, newEl, options, switchesOptions[selector]) : defaultSwitches.outerHTML.bind(this, oldEl, newEl, options);
            switchesQueue.push(callback);
        }, this);
    }, this);
    this.state.numPendingSwitches = switchesQueue.length;
    switchesQueue.forEach(function(queuedSwitch) {
        queuedSwitch();
    });
};

},{"d576c74aa405d9a0":"hvSry","55f1ae30485a4805":"jRpUx"}],"4hLfU":[function(require,module,exports) {
var noop = require("1af7cd47b691b80");
module.exports = function(request) {
    if (request && request.readyState < 4) {
        request.onreadystatechange = noop;
        request.abort();
    }
};

},{"1af7cd47b691b80":"f0MwM"}],"lWopb":[function(require,module,exports) {
var updateQueryString = require("ac4ea95f4afad0e5");
module.exports = function(location, options, callback) {
    options = options || {};
    var queryString;
    var requestOptions = options.requestOptions || {};
    var requestMethod = (requestOptions.requestMethod || "GET").toUpperCase();
    var requestParams = requestOptions.requestParams || null;
    var formData = requestOptions.formData || null;
    var requestPayload = null;
    var request = new XMLHttpRequest();
    var timeout = options.timeout || 0;
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 200) callback(request.responseText, request, location, options);
            else if (request.status !== 0) callback(null, request, location, options);
        }
    };
    request.onerror = function(e) {
        console.log(e);
        callback(null, request, location, options);
    };
    request.ontimeout = function() {
        callback(null, request, location, options);
    };
    // Prepare the request payload for forms, if available
    if (requestParams && requestParams.length) {
        // Build query string
        queryString = requestParams.map(function(param) {
            return param.name + "=" + param.value;
        }).join("&");
        switch(requestMethod){
            case "GET":
                // Reset query string to avoid an issue with repeat submissions where checkboxes that were
                // previously checked are incorrectly preserved
                location = location.split("?")[0];
                // Append new query string
                location += "?" + queryString;
                break;
            case "POST":
                // Send query string as request payload
                requestPayload = queryString;
                break;
        }
    } else if (formData) requestPayload = formData;
    // Add a timestamp as part of the query string if cache busting is enabled
    if (options.cacheBust) location = updateQueryString(location, "t", Date.now());
    request.open(requestMethod, location, true);
    request.timeout = timeout;
    request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    request.setRequestHeader("X-PJAX", "true");
    request.setRequestHeader("X-PJAX-Selectors", JSON.stringify(options.selectors));
    // Send the proper header information for POST forms
    if (requestPayload && requestMethod === "POST" && !formData) request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(requestPayload);
    return request;
};

},{"ac4ea95f4afad0e5":"kORhL"}],"kORhL":[function(require,module,exports) {
module.exports = function(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf("?") !== -1 ? "&" : "?";
    if (uri.match(re)) return uri.replace(re, "$1" + key + "=" + value + "$2");
    else return uri + separator + key + "=" + value;
};

},{}],"dIRGH":[function(require,module,exports) {
var clone = require("dbde721dff5d1e7e");
var newUid = require("fc8c17fd10ff0b0b");
var trigger = require("f9a14e6d301c7956");
module.exports = function(responseText, request, href, options) {
    options = clone(options || this.options);
    options.request = request;
    // Fail if unable to load HTML via AJAX
    if (responseText === false) {
        trigger(document, "pjax:complete pjax:error", options);
        return;
    }
    // push scroll position to history
    var currentState = window.history.state || {};
    window.history.replaceState({
        url: currentState.url || window.location.href,
        title: currentState.title || document.title,
        uid: currentState.uid || newUid(),
        scrollPos: [
            document.documentElement.scrollLeft || document.body.scrollLeft,
            document.documentElement.scrollTop || document.body.scrollTop
        ]
    }, document.title, window.location.href);
    // Check for redirects
    var oldHref = href;
    if (request.responseURL) {
        if (href !== request.responseURL) href = request.responseURL;
    } else if (request.getResponseHeader("X-PJAX-URL")) href = request.getResponseHeader("X-PJAX-URL");
    else if (request.getResponseHeader("X-XHR-Redirected-To")) href = request.getResponseHeader("X-XHR-Redirected-To");
    // Add back the hash if it was removed
    var a = document.createElement("a");
    a.href = oldHref;
    var oldHash = a.hash;
    a.href = href;
    if (oldHash && !a.hash) {
        a.hash = oldHash;
        href = a.href;
    }
    this.state.href = href;
    this.state.options = options;
    try {
        this.loadContent(responseText, options);
    } catch (e) {
        trigger(document, "pjax:error", options);
        if (!this.options.debug) {
            if (console && console.error) console.error("Pjax switch fail: ", e);
            return this.latestChance(href);
        } else throw e;
    }
};

},{"dbde721dff5d1e7e":"btm8d","fc8c17fd10ff0b0b":"8EpeP","f9a14e6d301c7956":"jQw9u"}],"egYX4":[function(require,module,exports) {
module.exports = function() {
    // Borrowed wholesale from https://github.com/defunkt/jquery-pjax
    return window.history && window.history.pushState && window.history.replaceState && // pushState isn’t reliable on iOS until 5.
    !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/);
};

},{}],"jJvnD":[function() {},{}],"9AxfY":[function(require,module,exports) {
/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ (function(global, factory) {
    module.exports = factory(require("43de83584db53a32"));
})(this, function(Popper) {
    "use strict";
    function _interopNamespaceDefault(e) {
        const n = Object.create(null, {
            [Symbol.toStringTag]: {
                value: "Module"
            }
        });
        if (e) {
            for(const k in e)if (k !== "default") {
                const d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: ()=>e[k]
                });
            }
        }
        n.default = e;
        return Object.freeze(n);
    }
    const Popper__namespace = /*#__PURE__*/ _interopNamespaceDefault(Popper);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const elementMap = new Map();
    const Data = {
        set (element, key, instance) {
            if (!elementMap.has(element)) elementMap.set(element, new Map());
            const instanceMap = elementMap.get(element);
            // make it clear we only want one instance per element
            // can be removed later when multiple key/instances are fine to be used
            if (!instanceMap.has(key) && instanceMap.size !== 0) {
                // eslint-disable-next-line no-console
                console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
                return;
            }
            instanceMap.set(key, instance);
        },
        get (element, key) {
            if (elementMap.has(element)) return elementMap.get(element).get(key) || null;
            return null;
        },
        remove (element, key) {
            if (!elementMap.has(element)) return;
            const instanceMap = elementMap.get(element);
            instanceMap.delete(key);
            // free up element references if there are no instances left for an element
            if (instanceMap.size === 0) elementMap.delete(element);
        }
    };
    /**
   * --------------------------------------------------------------------------
   * Bootstrap util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ const MAX_UID = 1000000;
    const MILLISECONDS_MULTIPLIER = 1000;
    const TRANSITION_END = "transitionend";
    /**
   * Properly escape IDs selectors to handle weird IDs
   * @param {string} selector
   * @returns {string}
   */ const parseSelector = (selector)=>{
        if (selector && window.CSS && window.CSS.escape) // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
        selector = selector.replace(/#([^\s"#']+)/g, (match, id)=>`#${CSS.escape(id)}`);
        return selector;
    };
    // Shout-out Angus Croll (https://goo.gl/pxwQGp)
    const toType = (object)=>{
        if (object === null || object === undefined) return `${object}`;
        return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
    };
    /**
   * Public Util API
   */ const getUID = (prefix)=>{
        do prefix += Math.floor(Math.random() * MAX_UID);
        while (document.getElementById(prefix));
        return prefix;
    };
    const getTransitionDurationFromElement = (element)=>{
        if (!element) return 0;
        // Get transition-duration of the element
        let { transitionDuration, transitionDelay } = window.getComputedStyle(element);
        const floatTransitionDuration = Number.parseFloat(transitionDuration);
        const floatTransitionDelay = Number.parseFloat(transitionDelay);
        // Return 0 if element or transition duration is not found
        if (!floatTransitionDuration && !floatTransitionDelay) return 0;
        // If multiple durations are defined, take the first
        transitionDuration = transitionDuration.split(",")[0];
        transitionDelay = transitionDelay.split(",")[0];
        return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    };
    const triggerTransitionEnd = (element)=>{
        element.dispatchEvent(new Event(TRANSITION_END));
    };
    const isElement = (object)=>{
        if (!object || typeof object !== "object") return false;
        if (typeof object.jquery !== "undefined") object = object[0];
        return typeof object.nodeType !== "undefined";
    };
    const getElement = (object)=>{
        // it's a jQuery object or a node element
        if (isElement(object)) return object.jquery ? object[0] : object;
        if (typeof object === "string" && object.length > 0) return document.querySelector(parseSelector(object));
        return null;
    };
    const isVisible = (element)=>{
        if (!isElement(element) || element.getClientRects().length === 0) return false;
        const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
        // Handle `details` element as its content may falsie appear visible when it is closed
        const closedDetails = element.closest("details:not([open])");
        if (!closedDetails) return elementIsVisible;
        if (closedDetails !== element) {
            const summary = element.closest("summary");
            if (summary && summary.parentNode !== closedDetails) return false;
            if (summary === null) return false;
        }
        return elementIsVisible;
    };
    const isDisabled = (element)=>{
        if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
        if (element.classList.contains("disabled")) return true;
        if (typeof element.disabled !== "undefined") return element.disabled;
        return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
    };
    const findShadowRoot = (element)=>{
        if (!document.documentElement.attachShadow) return null;
        // Can find the shadow root otherwise it'll return the document
        if (typeof element.getRootNode === "function") {
            const root = element.getRootNode();
            return root instanceof ShadowRoot ? root : null;
        }
        if (element instanceof ShadowRoot) return element;
        // when we don't find a shadow root
        if (!element.parentNode) return null;
        return findShadowRoot(element.parentNode);
    };
    const noop = ()=>{};
    /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */ const reflow = (element)=>{
        element.offsetHeight; // eslint-disable-line no-unused-expressions
    };
    const getjQuery = ()=>{
        if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) return window.jQuery;
        return null;
    };
    const DOMContentLoadedCallbacks = [];
    const onDOMContentLoaded = (callback)=>{
        if (document.readyState === "loading") {
            // add listener on the first call when the document is in loading state
            if (!DOMContentLoadedCallbacks.length) document.addEventListener("DOMContentLoaded", ()=>{
                for (const callback of DOMContentLoadedCallbacks)callback();
            });
            DOMContentLoadedCallbacks.push(callback);
        } else callback();
    };
    const isRTL = ()=>document.documentElement.dir === "rtl";
    const defineJQueryPlugin = (plugin)=>{
        onDOMContentLoaded(()=>{
            const $ = getjQuery();
            /* istanbul ignore if */ if ($) {
                const name = plugin.NAME;
                const JQUERY_NO_CONFLICT = $.fn[name];
                $.fn[name] = plugin.jQueryInterface;
                $.fn[name].Constructor = plugin;
                $.fn[name].noConflict = ()=>{
                    $.fn[name] = JQUERY_NO_CONFLICT;
                    return plugin.jQueryInterface;
                };
            }
        });
    };
    const execute = (possibleCallback, args = [], defaultValue = possibleCallback)=>{
        return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
    };
    const executeAfterTransition = (callback, transitionElement, waitForTransition = true)=>{
        if (!waitForTransition) {
            execute(callback);
            return;
        }
        const durationPadding = 5;
        const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
        let called = false;
        const handler = ({ target })=>{
            if (target !== transitionElement) return;
            called = true;
            transitionElement.removeEventListener(TRANSITION_END, handler);
            execute(callback);
        };
        transitionElement.addEventListener(TRANSITION_END, handler);
        setTimeout(()=>{
            if (!called) triggerTransitionEnd(transitionElement);
        }, emulatedDuration);
    };
    /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */ const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed)=>{
        const listLength = list.length;
        let index = list.indexOf(activeElement);
        // if the element does not exist in the list return an element
        // depending on the direction and if cycle is allowed
        if (index === -1) return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
        index += shouldGetNext ? 1 : -1;
        if (isCycleAllowed) index = (index + listLength) % listLength;
        return list[Math.max(0, Math.min(index, listLength - 1))];
    };
    /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
    const stripNameRegex = /\..*/;
    const stripUidRegex = /::\d+$/;
    const eventRegistry = {}; // Events storage
    let uidEvent = 1;
    const customEvents = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    const nativeEvents = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
    ]);
    /**
   * Private methods
   */ function makeEventUid(element, uid) {
        return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
    }
    function getElementEvents(element) {
        const uid = makeEventUid(element);
        element.uidEvent = uid;
        eventRegistry[uid] = eventRegistry[uid] || {};
        return eventRegistry[uid];
    }
    function bootstrapHandler(element, fn) {
        return function handler(event) {
            hydrateObj(event, {
                delegateTarget: element
            });
            if (handler.oneOff) EventHandler.off(element, event.type, fn);
            return fn.apply(element, [
                event
            ]);
        };
    }
    function bootstrapDelegationHandler(element, selector, fn) {
        return function handler(event) {
            const domElements = element.querySelectorAll(selector);
            for(let { target } = event; target && target !== this; target = target.parentNode)for (const domElement of domElements){
                if (domElement !== target) continue;
                hydrateObj(event, {
                    delegateTarget: target
                });
                if (handler.oneOff) EventHandler.off(element, event.type, selector, fn);
                return fn.apply(target, [
                    event
                ]);
            }
        };
    }
    function findHandler(events, callable, delegationSelector = null) {
        return Object.values(events).find((event)=>event.callable === callable && event.delegationSelector === delegationSelector);
    }
    function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
        const isDelegated = typeof handler === "string";
        // TODO: tooltip passes `false` instead of selector, so we need to check
        const callable = isDelegated ? delegationFunction : handler || delegationFunction;
        let typeEvent = getTypeEvent(originalTypeEvent);
        if (!nativeEvents.has(typeEvent)) typeEvent = originalTypeEvent;
        return [
            isDelegated,
            callable,
            typeEvent
        ];
    }
    function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
        if (typeof originalTypeEvent !== "string" || !element) return;
        let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
        // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
        // this prevents the handler from being dispatched the same way as mouseover or mouseout does
        if (originalTypeEvent in customEvents) {
            const wrapFunction = (fn)=>{
                return function(event) {
                    if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) return fn.call(this, event);
                };
            };
            callable = wrapFunction(callable);
        }
        const events = getElementEvents(element);
        const handlers = events[typeEvent] || (events[typeEvent] = {});
        const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
        if (previousFunction) {
            previousFunction.oneOff = previousFunction.oneOff && oneOff;
            return;
        }
        const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
        const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
        fn.delegationSelector = isDelegated ? handler : null;
        fn.callable = callable;
        fn.oneOff = oneOff;
        fn.uidEvent = uid;
        handlers[uid] = fn;
        element.addEventListener(typeEvent, fn, isDelegated);
    }
    function removeHandler(element, events, typeEvent, handler, delegationSelector) {
        const fn = findHandler(events[typeEvent], handler, delegationSelector);
        if (!fn) return;
        element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
        delete events[typeEvent][fn.uidEvent];
    }
    function removeNamespacedHandlers(element, events, typeEvent, namespace) {
        const storeElementEvent = events[typeEvent] || {};
        for (const [handlerKey, event] of Object.entries(storeElementEvent))if (handlerKey.includes(namespace)) removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
    function getTypeEvent(event) {
        // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
        event = event.replace(stripNameRegex, "");
        return customEvents[event] || event;
    }
    const EventHandler = {
        on (element, event, handler, delegationFunction) {
            addHandler(element, event, handler, delegationFunction, false);
        },
        one (element, event, handler, delegationFunction) {
            addHandler(element, event, handler, delegationFunction, true);
        },
        off (element, originalTypeEvent, handler, delegationFunction) {
            if (typeof originalTypeEvent !== "string" || !element) return;
            const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
            const inNamespace = typeEvent !== originalTypeEvent;
            const events = getElementEvents(element);
            const storeElementEvent = events[typeEvent] || {};
            const isNamespace = originalTypeEvent.startsWith(".");
            if (typeof callable !== "undefined") {
                // Simplest case: handler is passed, remove that listener ONLY.
                if (!Object.keys(storeElementEvent).length) return;
                removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
                return;
            }
            if (isNamespace) for (const elementEvent of Object.keys(events))removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
            for (const [keyHandlers, event] of Object.entries(storeElementEvent)){
                const handlerKey = keyHandlers.replace(stripUidRegex, "");
                if (!inNamespace || originalTypeEvent.includes(handlerKey)) removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
            }
        },
        trigger (element, event, args) {
            if (typeof event !== "string" || !element) return null;
            const $ = getjQuery();
            const typeEvent = getTypeEvent(event);
            const inNamespace = event !== typeEvent;
            let jQueryEvent = null;
            let bubbles = true;
            let nativeDispatch = true;
            let defaultPrevented = false;
            if (inNamespace && $) {
                jQueryEvent = $.Event(event, args);
                $(element).trigger(jQueryEvent);
                bubbles = !jQueryEvent.isPropagationStopped();
                nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
                defaultPrevented = jQueryEvent.isDefaultPrevented();
            }
            const evt = hydrateObj(new Event(event, {
                bubbles,
                cancelable: true
            }), args);
            if (defaultPrevented) evt.preventDefault();
            if (nativeDispatch) element.dispatchEvent(evt);
            if (evt.defaultPrevented && jQueryEvent) jQueryEvent.preventDefault();
            return evt;
        }
    };
    function hydrateObj(obj, meta = {}) {
        for (const [key, value] of Object.entries(meta))try {
            obj[key] = value;
        } catch (_unused) {
            Object.defineProperty(obj, key, {
                configurable: true,
                get () {
                    return value;
                }
            });
        }
        return obj;
    }
    /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ function normalizeData(value) {
        if (value === "true") return true;
        if (value === "false") return false;
        if (value === Number(value).toString()) return Number(value);
        if (value === "" || value === "null") return null;
        if (typeof value !== "string") return value;
        try {
            return JSON.parse(decodeURIComponent(value));
        } catch (_unused) {
            return value;
        }
    }
    function normalizeDataKey(key) {
        return key.replace(/[A-Z]/g, (chr)=>`-${chr.toLowerCase()}`);
    }
    const Manipulator = {
        setDataAttribute (element, key, value) {
            element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
        },
        removeDataAttribute (element, key) {
            element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
        },
        getDataAttributes (element) {
            if (!element) return {};
            const attributes = {};
            const bsKeys = Object.keys(element.dataset).filter((key)=>key.startsWith("bs") && !key.startsWith("bsConfig"));
            for (const key of bsKeys){
                let pureKey = key.replace(/^bs/, "");
                pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
                attributes[pureKey] = normalizeData(element.dataset[key]);
            }
            return attributes;
        },
        getDataAttribute (element, key) {
            return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
        }
    };
    /**
   * --------------------------------------------------------------------------
   * Bootstrap util/config.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Class definition
   */ class Config {
        // Getters
        static get Default() {
            return {};
        }
        static get DefaultType() {
            return {};
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(config) {
            config = this._mergeConfigObj(config);
            config = this._configAfterMerge(config);
            this._typeCheckConfig(config);
            return config;
        }
        _configAfterMerge(config) {
            return config;
        }
        _mergeConfigObj(config, element) {
            const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, "config") : {}; // try to parse
            return {
                ...this.constructor.Default,
                ...typeof jsonConfig === "object" ? jsonConfig : {},
                ...isElement(element) ? Manipulator.getDataAttributes(element) : {},
                ...typeof config === "object" ? config : {}
            };
        }
        _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
            for (const [property, expectedTypes] of Object.entries(configTypes)){
                const value = config[property];
                const valueType = isElement(value) ? "element" : toType(value);
                if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
            }
        }
    }
    /**
   * --------------------------------------------------------------------------
   * Bootstrap base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const VERSION = "5.3.3";
    /**
   * Class definition
   */ class BaseComponent extends Config {
        constructor(element, config){
            super();
            element = getElement(element);
            if (!element) return;
            this._element = element;
            this._config = this._getConfig(config);
            Data.set(this._element, this.constructor.DATA_KEY, this);
        }
        // Public
        dispose() {
            Data.remove(this._element, this.constructor.DATA_KEY);
            EventHandler.off(this._element, this.constructor.EVENT_KEY);
            for (const propertyName of Object.getOwnPropertyNames(this))this[propertyName] = null;
        }
        _queueCallback(callback, element, isAnimated = true) {
            executeAfterTransition(callback, element, isAnimated);
        }
        _getConfig(config) {
            config = this._mergeConfigObj(config, this._element);
            config = this._configAfterMerge(config);
            this._typeCheckConfig(config);
            return config;
        }
        // Static
        static getInstance(element) {
            return Data.get(getElement(element), this.DATA_KEY);
        }
        static getOrCreateInstance(element, config = {}) {
            return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
        }
        static get VERSION() {
            return VERSION;
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
        static eventName(name) {
            return `${name}${this.EVENT_KEY}`;
        }
    }
    /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ const getSelector = (element)=>{
        let selector = element.getAttribute("data-bs-target");
        if (!selector || selector === "#") {
            let hrefAttribute = element.getAttribute("href");
            // The only valid content that could double as a selector are IDs or classes,
            // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
            // `document.querySelector` will rightfully complain it is invalid.
            // See https://github.com/twbs/bootstrap/issues/32273
            if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) return null;
            // Just in case some CMS puts out a full URL with the anchor appended
            if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
            selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
        }
        return selector ? selector.split(",").map((sel)=>parseSelector(sel)).join(",") : null;
    };
    const SelectorEngine = {
        find (selector, element = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
        },
        findOne (selector, element = document.documentElement) {
            return Element.prototype.querySelector.call(element, selector);
        },
        children (element, selector) {
            return [].concat(...element.children).filter((child)=>child.matches(selector));
        },
        parents (element, selector) {
            const parents = [];
            let ancestor = element.parentNode.closest(selector);
            while(ancestor){
                parents.push(ancestor);
                ancestor = ancestor.parentNode.closest(selector);
            }
            return parents;
        },
        prev (element, selector) {
            let previous = element.previousElementSibling;
            while(previous){
                if (previous.matches(selector)) return [
                    previous
                ];
                previous = previous.previousElementSibling;
            }
            return [];
        },
        // TODO: this is now unused; remove later along with prev()
        next (element, selector) {
            let next = element.nextElementSibling;
            while(next){
                if (next.matches(selector)) return [
                    next
                ];
                next = next.nextElementSibling;
            }
            return [];
        },
        focusableChildren (element) {
            const focusables = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]'
            ].map((selector)=>`${selector}:not([tabindex^="-"])`).join(",");
            return this.find(focusables, element).filter((el)=>!isDisabled(el) && isVisible(el));
        },
        getSelectorFromElement (element) {
            const selector = getSelector(element);
            if (selector) return SelectorEngine.findOne(selector) ? selector : null;
            return null;
        },
        getElementFromSelector (element) {
            const selector = getSelector(element);
            return selector ? SelectorEngine.findOne(selector) : null;
        },
        getMultipleElementsFromSelector (element) {
            const selector = getSelector(element);
            return selector ? SelectorEngine.find(selector) : [];
        }
    };
    /**
   * --------------------------------------------------------------------------
   * Bootstrap util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ const enableDismissTrigger = (component, method = "hide")=>{
        const clickEvent = `click.dismiss${component.EVENT_KEY}`;
        const name = component.NAME;
        EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
            if ([
                "A",
                "AREA"
            ].includes(this.tagName)) event.preventDefault();
            if (isDisabled(this)) return;
            const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
            const instance = component.getOrCreateInstance(target);
            // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
            instance[method]();
        });
    };
    /**
   * --------------------------------------------------------------------------
   * Bootstrap alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const NAME$f = "alert";
    const DATA_KEY$a = "bs.alert";
    const EVENT_KEY$b = `.${DATA_KEY$a}`;
    const EVENT_CLOSE = `close${EVENT_KEY$b}`;
    const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
    const CLASS_NAME_FADE$5 = "fade";
    const CLASS_NAME_SHOW$8 = "show";
    /**
   * Class definition
   */ class Alert extends BaseComponent {
        // Getters
        static get NAME() {
            return NAME$f;
        }
        // Public
        close() {
            const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
            if (closeEvent.defaultPrevented) return;
            this._element.classList.remove(CLASS_NAME_SHOW$8);
            const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
            this._queueCallback(()=>this._destroyElement(), this._element, isAnimated);
        }
        // Private
        _destroyElement() {
            this._element.remove();
            EventHandler.trigger(this._element, EVENT_CLOSED);
            this.dispose();
        }
        // Static
        static jQueryInterface(config) {
            return this.each(function() {
                const data = Alert.getOrCreateInstance(this);
                if (typeof config !== "string") return;
                if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                data[config](this);
            });
        }
    }
    /**
   * Data API implementation
   */ enableDismissTrigger(Alert, "close");
    /**
   * jQuery
   */ defineJQueryPlugin(Alert);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const NAME$e = "button";
    const DATA_KEY$9 = "bs.button";
    const EVENT_KEY$a = `.${DATA_KEY$9}`;
    const DATA_API_KEY$6 = ".data-api";
    const CLASS_NAME_ACTIVE$3 = "active";
    const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
    const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
    /**
   * Class definition
   */ class Button extends BaseComponent {
        // Getters
        static get NAME() {
            return NAME$e;
        }
        // Public
        toggle() {
            // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
            this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
        }
        // Static
        static jQueryInterface(config) {
            return this.each(function() {
                const data = Button.getOrCreateInstance(this);
                if (config === "toggle") data[config]();
            });
        }
    }
    /**
   * Data API implementation
   */ EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event)=>{
        event.preventDefault();
        const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
        const data = Button.getOrCreateInstance(button);
        data.toggle();
    });
    /**
   * jQuery
   */ defineJQueryPlugin(Button);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap util/swipe.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const NAME$d = "swipe";
    const EVENT_KEY$9 = ".bs.swipe";
    const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
    const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
    const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
    const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
    const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
    const POINTER_TYPE_TOUCH = "touch";
    const POINTER_TYPE_PEN = "pen";
    const CLASS_NAME_POINTER_EVENT = "pointer-event";
    const SWIPE_THRESHOLD = 40;
    const Default$c = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    };
    const DefaultType$c = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    /**
   * Class definition
   */ class Swipe extends Config {
        constructor(element, config){
            super();
            this._element = element;
            if (!element || !Swipe.isSupported()) return;
            this._config = this._getConfig(config);
            this._deltaX = 0;
            this._supportPointerEvents = Boolean(window.PointerEvent);
            this._initEvents();
        }
        // Getters
        static get Default() {
            return Default$c;
        }
        static get DefaultType() {
            return DefaultType$c;
        }
        static get NAME() {
            return NAME$d;
        }
        // Public
        dispose() {
            EventHandler.off(this._element, EVENT_KEY$9);
        }
        // Private
        _start(event) {
            if (!this._supportPointerEvents) {
                this._deltaX = event.touches[0].clientX;
                return;
            }
            if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX;
        }
        _end(event) {
            if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX - this._deltaX;
            this._handleSwipe();
            execute(this._config.endCallback);
        }
        _move(event) {
            this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
            const absDeltaX = Math.abs(this._deltaX);
            if (absDeltaX <= SWIPE_THRESHOLD) return;
            const direction = absDeltaX / this._deltaX;
            this._deltaX = 0;
            if (!direction) return;
            execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
            if (this._supportPointerEvents) {
                EventHandler.on(this._element, EVENT_POINTERDOWN, (event)=>this._start(event));
                EventHandler.on(this._element, EVENT_POINTERUP, (event)=>this._end(event));
                this._element.classList.add(CLASS_NAME_POINTER_EVENT);
            } else {
                EventHandler.on(this._element, EVENT_TOUCHSTART, (event)=>this._start(event));
                EventHandler.on(this._element, EVENT_TOUCHMOVE, (event)=>this._move(event));
                EventHandler.on(this._element, EVENT_TOUCHEND, (event)=>this._end(event));
            }
        }
        _eventIsPointerPenTouch(event) {
            return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
        }
        // Static
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
    }
    /**
   * --------------------------------------------------------------------------
   * Bootstrap carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const NAME$c = "carousel";
    const DATA_KEY$8 = "bs.carousel";
    const EVENT_KEY$8 = `.${DATA_KEY$8}`;
    const DATA_API_KEY$5 = ".data-api";
    const ARROW_LEFT_KEY$1 = "ArrowLeft";
    const ARROW_RIGHT_KEY$1 = "ArrowRight";
    const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
    const ORDER_NEXT = "next";
    const ORDER_PREV = "prev";
    const DIRECTION_LEFT = "left";
    const DIRECTION_RIGHT = "right";
    const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
    const EVENT_SLID = `slid${EVENT_KEY$8}`;
    const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
    const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
    const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
    const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
    const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
    const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
    const CLASS_NAME_CAROUSEL = "carousel";
    const CLASS_NAME_ACTIVE$2 = "active";
    const CLASS_NAME_SLIDE = "slide";
    const CLASS_NAME_END = "carousel-item-end";
    const CLASS_NAME_START = "carousel-item-start";
    const CLASS_NAME_NEXT = "carousel-item-next";
    const CLASS_NAME_PREV = "carousel-item-prev";
    const SELECTOR_ACTIVE = ".active";
    const SELECTOR_ITEM = ".carousel-item";
    const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
    const SELECTOR_ITEM_IMG = ".carousel-item img";
    const SELECTOR_INDICATORS = ".carousel-indicators";
    const SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
    const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
    const KEY_TO_DIRECTION = {
        [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
        [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
    };
    const Default$b = {
        interval: 5000,
        keyboard: true,
        pause: "hover",
        ride: false,
        touch: true,
        wrap: true
    };
    const DefaultType$b = {
        interval: "(number|boolean)",
        // TODO:v6 remove boolean support
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    /**
   * Class definition
   */ class Carousel extends BaseComponent {
        constructor(element, config){
            super(element, config);
            this._interval = null;
            this._activeElement = null;
            this._isSliding = false;
            this.touchTimeout = null;
            this._swipeHelper = null;
            this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
            this._addEventListeners();
            if (this._config.ride === CLASS_NAME_CAROUSEL) this.cycle();
        }
        // Getters
        static get Default() {
            return Default$b;
        }
        static get DefaultType() {
            return DefaultType$b;
        }
        static get NAME() {
            return NAME$c;
        }
        // Public
        next() {
            this._slide(ORDER_NEXT);
        }
        nextWhenVisible() {
            // FIXME TODO use `document.visibilityState`
            // Don't call next when the page isn't visible
            // or the carousel or its parent isn't visible
            if (!document.hidden && isVisible(this._element)) this.next();
        }
        prev() {
            this._slide(ORDER_PREV);
        }
        pause() {
            if (this._isSliding) triggerTransitionEnd(this._element);
            this._clearInterval();
        }
        cycle() {
            this._clearInterval();
            this._updateInterval();
            this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval);
        }
        _maybeEnableCycle() {
            if (!this._config.ride) return;
            if (this._isSliding) {
                EventHandler.one(this._element, EVENT_SLID, ()=>this.cycle());
                return;
            }
            this.cycle();
        }
        to(index) {
            const items = this._getItems();
            if (index > items.length - 1 || index < 0) return;
            if (this._isSliding) {
                EventHandler.one(this._element, EVENT_SLID, ()=>this.to(index));
                return;
            }
            const activeIndex = this._getItemIndex(this._getActive());
            if (activeIndex === index) return;
            const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
            this._slide(order, items[index]);
        }
        dispose() {
            if (this._swipeHelper) this._swipeHelper.dispose();
            super.dispose();
        }
        // Private
        _configAfterMerge(config) {
            config.defaultInterval = config.interval;
            return config;
        }
        _addEventListeners() {
            if (this._config.keyboard) EventHandler.on(this._element, EVENT_KEYDOWN$1, (event)=>this._keydown(event));
            if (this._config.pause === "hover") {
                EventHandler.on(this._element, EVENT_MOUSEENTER$1, ()=>this.pause());
                EventHandler.on(this._element, EVENT_MOUSELEAVE$1, ()=>this._maybeEnableCycle());
            }
            if (this._config.touch && Swipe.isSupported()) this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element))EventHandler.on(img, EVENT_DRAG_START, (event)=>event.preventDefault());
            const endCallBack = ()=>{
                if (this._config.pause !== "hover") return;
                // If it's a touch-enabled device, mouseenter/leave are fired as
                // part of the mouse compatibility events on first tap - the carousel
                // would stop cycling until user tapped out of it;
                // here, we listen for touchend, explicitly pause the carousel
                // (as if it's the second time we tap on it, mouseenter compat event
                // is NOT fired) and after a timeout (to allow for mouse compatibility
                // events to fire) we explicitly restart cycling
                this.pause();
                if (this.touchTimeout) clearTimeout(this.touchTimeout);
                this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
            };
            const swipeConfig = {
                leftCallback: ()=>this._slide(this._directionToOrder(DIRECTION_LEFT)),
                rightCallback: ()=>this._slide(this._directionToOrder(DIRECTION_RIGHT)),
                endCallback: endCallBack
            };
            this._swipeHelper = new Swipe(this._element, swipeConfig);
        }
        _keydown(event) {
            if (/input|textarea/i.test(event.target.tagName)) return;
            const direction = KEY_TO_DIRECTION[event.key];
            if (direction) {
                event.preventDefault();
                this._slide(this._directionToOrder(direction));
            }
        }
        _getItemIndex(element) {
            return this._getItems().indexOf(element);
        }
        _setActiveIndicatorElement(index) {
            if (!this._indicatorsElement) return;
            const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
            activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
            activeIndicator.removeAttribute("aria-current");
            const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
            if (newActiveIndicator) {
                newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
                newActiveIndicator.setAttribute("aria-current", "true");
            }
        }
        _updateInterval() {
            const element = this._activeElement || this._getActive();
            if (!element) return;
            const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
            this._config.interval = elementInterval || this._config.defaultInterval;
        }
        _slide(order, element = null) {
            if (this._isSliding) return;
            const activeElement = this._getActive();
            const isNext = order === ORDER_NEXT;
            const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
            if (nextElement === activeElement) return;
            const nextElementIndex = this._getItemIndex(nextElement);
            const triggerEvent = (eventName)=>{
                return EventHandler.trigger(this._element, eventName, {
                    relatedTarget: nextElement,
                    direction: this._orderToDirection(order),
                    from: this._getItemIndex(activeElement),
                    to: nextElementIndex
                });
            };
            const slideEvent = triggerEvent(EVENT_SLIDE);
            if (slideEvent.defaultPrevented) return;
            if (!activeElement || !nextElement) // Some weirdness is happening, so we bail
            // TODO: change tests that use empty divs to avoid this check
            return;
            const isCycling = Boolean(this._interval);
            this.pause();
            this._isSliding = true;
            this._setActiveIndicatorElement(nextElementIndex);
            this._activeElement = nextElement;
            const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
            const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
            nextElement.classList.add(orderClassName);
            reflow(nextElement);
            activeElement.classList.add(directionalClassName);
            nextElement.classList.add(directionalClassName);
            const completeCallBack = ()=>{
                nextElement.classList.remove(directionalClassName, orderClassName);
                nextElement.classList.add(CLASS_NAME_ACTIVE$2);
                activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
                this._isSliding = false;
                triggerEvent(EVENT_SLID);
            };
            this._queueCallback(completeCallBack, activeElement, this._isAnimated());
            if (isCycling) this.cycle();
        }
        _isAnimated() {
            return this._element.classList.contains(CLASS_NAME_SLIDE);
        }
        _getActive() {
            return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
        }
        _getItems() {
            return SelectorEngine.find(SELECTOR_ITEM, this._element);
        }
        _clearInterval() {
            if (this._interval) {
                clearInterval(this._interval);
                this._interval = null;
            }
        }
        _directionToOrder(direction) {
            if (isRTL()) return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
            return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
        }
        _orderToDirection(order) {
            if (isRTL()) return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
            return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
        }
        // Static
        static jQueryInterface(config) {
            return this.each(function() {
                const data = Carousel.getOrCreateInstance(this, config);
                if (typeof config === "number") {
                    data.to(config);
                    return;
                }
                if (typeof config === "string") {
                    if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                    data[config]();
                }
            });
        }
    }
    /**
   * Data API implementation
   */ EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
        const target = SelectorEngine.getElementFromSelector(this);
        if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) return;
        event.preventDefault();
        const carousel = Carousel.getOrCreateInstance(target);
        const slideIndex = this.getAttribute("data-bs-slide-to");
        if (slideIndex) {
            carousel.to(slideIndex);
            carousel._maybeEnableCycle();
            return;
        }
        if (Manipulator.getDataAttribute(this, "slide") === "next") {
            carousel.next();
            carousel._maybeEnableCycle();
            return;
        }
        carousel.prev();
        carousel._maybeEnableCycle();
    });
    EventHandler.on(window, EVENT_LOAD_DATA_API$3, ()=>{
        const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
        for (const carousel of carousels)Carousel.getOrCreateInstance(carousel);
    });
    /**
   * jQuery
   */ defineJQueryPlugin(Carousel);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const NAME$b = "collapse";
    const DATA_KEY$7 = "bs.collapse";
    const EVENT_KEY$7 = `.${DATA_KEY$7}`;
    const DATA_API_KEY$4 = ".data-api";
    const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
    const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
    const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
    const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
    const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
    const CLASS_NAME_SHOW$7 = "show";
    const CLASS_NAME_COLLAPSE = "collapse";
    const CLASS_NAME_COLLAPSING = "collapsing";
    const CLASS_NAME_COLLAPSED = "collapsed";
    const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
    const CLASS_NAME_HORIZONTAL = "collapse-horizontal";
    const WIDTH = "width";
    const HEIGHT = "height";
    const SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
    const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
    const Default$a = {
        parent: null,
        toggle: true
    };
    const DefaultType$a = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    /**
   * Class definition
   */ class Collapse extends BaseComponent {
        constructor(element, config){
            super(element, config);
            this._isTransitioning = false;
            this._triggerArray = [];
            const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
            for (const elem of toggleList){
                const selector = SelectorEngine.getSelectorFromElement(elem);
                const filterElement = SelectorEngine.find(selector).filter((foundElement)=>foundElement === this._element);
                if (selector !== null && filterElement.length) this._triggerArray.push(elem);
            }
            this._initializeChildren();
            if (!this._config.parent) this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
            if (this._config.toggle) this.toggle();
        }
        // Getters
        static get Default() {
            return Default$a;
        }
        static get DefaultType() {
            return DefaultType$a;
        }
        static get NAME() {
            return NAME$b;
        }
        // Public
        toggle() {
            if (this._isShown()) this.hide();
            else this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let activeChildren = [];
            // find active children
            if (this._config.parent) activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element)=>element !== this._element).map((element)=>Collapse.getOrCreateInstance(element, {
                    toggle: false
                }));
            if (activeChildren.length && activeChildren[0]._isTransitioning) return;
            const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
            if (startEvent.defaultPrevented) return;
            for (const activeInstance of activeChildren)activeInstance.hide();
            const dimension = this._getDimension();
            this._element.classList.remove(CLASS_NAME_COLLAPSE);
            this._element.classList.add(CLASS_NAME_COLLAPSING);
            this._element.style[dimension] = 0;
            this._addAriaAndCollapsedClass(this._triggerArray, true);
            this._isTransitioning = true;
            const complete = ()=>{
                this._isTransitioning = false;
                this._element.classList.remove(CLASS_NAME_COLLAPSING);
                this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
                this._element.style[dimension] = "";
                EventHandler.trigger(this._element, EVENT_SHOWN$6);
            };
            const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
            const scrollSize = `scroll${capitalizedDimension}`;
            this._queueCallback(complete, this._element, true);
            this._element.style[dimension] = `${this._element[scrollSize]}px`;
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
            if (startEvent.defaultPrevented) return;
            const dimension = this._getDimension();
            this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
            reflow(this._element);
            this._element.classList.add(CLASS_NAME_COLLAPSING);
            this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
            for (const trigger of this._triggerArray){
                const element = SelectorEngine.getElementFromSelector(trigger);
                if (element && !this._isShown(element)) this._addAriaAndCollapsedClass([
                    trigger
                ], false);
            }
            this._isTransitioning = true;
            const complete = ()=>{
                this._isTransitioning = false;
                this._element.classList.remove(CLASS_NAME_COLLAPSING);
                this._element.classList.add(CLASS_NAME_COLLAPSE);
                EventHandler.trigger(this._element, EVENT_HIDDEN$6);
            };
            this._element.style[dimension] = "";
            this._queueCallback(complete, this._element, true);
        }
        _isShown(element = this._element) {
            return element.classList.contains(CLASS_NAME_SHOW$7);
        }
        // Private
        _configAfterMerge(config) {
            config.toggle = Boolean(config.toggle); // Coerce string values
            config.parent = getElement(config.parent);
            return config;
        }
        _getDimension() {
            return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
            for (const element of children){
                const selected = SelectorEngine.getElementFromSelector(element);
                if (selected) this._addAriaAndCollapsedClass([
                    element
                ], this._isShown(selected));
            }
        }
        _getFirstLevelChildren(selector) {
            const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
            // remove children if greater depth
            return SelectorEngine.find(selector, this._config.parent).filter((element)=>!children.includes(element));
        }
        _addAriaAndCollapsedClass(triggerArray, isOpen) {
            if (!triggerArray.length) return;
            for (const element of triggerArray){
                element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
                element.setAttribute("aria-expanded", isOpen);
            }
        }
        // Static
        static jQueryInterface(config) {
            const _config = {};
            if (typeof config === "string" && /show|hide/.test(config)) _config.toggle = false;
            return this.each(function() {
                const data = Collapse.getOrCreateInstance(this, _config);
                if (typeof config === "string") {
                    if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                    data[config]();
                }
            });
        }
    }
    /**
   * Data API implementation
   */ EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
        // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
        if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") event.preventDefault();
        for (const element of SelectorEngine.getMultipleElementsFromSelector(this))Collapse.getOrCreateInstance(element, {
            toggle: false
        }).toggle();
    });
    /**
   * jQuery
   */ defineJQueryPlugin(Collapse);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const NAME$a = "dropdown";
    const DATA_KEY$6 = "bs.dropdown";
    const EVENT_KEY$6 = `.${DATA_KEY$6}`;
    const DATA_API_KEY$3 = ".data-api";
    const ESCAPE_KEY$2 = "Escape";
    const TAB_KEY$1 = "Tab";
    const ARROW_UP_KEY$1 = "ArrowUp";
    const ARROW_DOWN_KEY$1 = "ArrowDown";
    const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
    const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
    const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
    const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
    const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
    const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
    const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
    const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
    const CLASS_NAME_SHOW$6 = "show";
    const CLASS_NAME_DROPUP = "dropup";
    const CLASS_NAME_DROPEND = "dropend";
    const CLASS_NAME_DROPSTART = "dropstart";
    const CLASS_NAME_DROPUP_CENTER = "dropup-center";
    const CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
    const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
    const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
    const SELECTOR_MENU = ".dropdown-menu";
    const SELECTOR_NAVBAR = ".navbar";
    const SELECTOR_NAVBAR_NAV = ".navbar-nav";
    const SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
    const PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
    const PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
    const PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
    const PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
    const PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
    const PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
    const PLACEMENT_TOPCENTER = "top";
    const PLACEMENT_BOTTOMCENTER = "bottom";
    const Default$9 = {
        autoClose: true,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [
            0,
            2
        ],
        popperConfig: null,
        reference: "toggle"
    };
    const DefaultType$9 = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    /**
   * Class definition
   */ class Dropdown extends BaseComponent {
        constructor(element, config){
            super(element, config);
            this._popper = null;
            this._parent = this._element.parentNode; // dropdown wrapper
            // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
            this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
            this._inNavbar = this._detectNavbar();
        }
        // Getters
        static get Default() {
            return Default$9;
        }
        static get DefaultType() {
            return DefaultType$9;
        }
        static get NAME() {
            return NAME$a;
        }
        // Public
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (isDisabled(this._element) || this._isShown()) return;
            const relatedTarget = {
                relatedTarget: this._element
            };
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
            if (showEvent.defaultPrevented) return;
            this._createPopper();
            // If this is a touch-enabled device we add extra
            // empty mouseover listeners to the body's immediate children;
            // only needed because of broken event delegation on iOS
            // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
            if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) for (const element of [].concat(...document.body.children))EventHandler.on(element, "mouseover", noop);
            this._element.focus();
            this._element.setAttribute("aria-expanded", true);
            this._menu.classList.add(CLASS_NAME_SHOW$6);
            this._element.classList.add(CLASS_NAME_SHOW$6);
            EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
        }
        hide() {
            if (isDisabled(this._element) || !this._isShown()) return;
            const relatedTarget = {
                relatedTarget: this._element
            };
            this._completeHide(relatedTarget);
        }
        dispose() {
            if (this._popper) this._popper.destroy();
            super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar();
            if (this._popper) this._popper.update();
        }
        // Private
        _completeHide(relatedTarget) {
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
            if (hideEvent.defaultPrevented) return;
            // If this is a touch-enabled device we remove the extra
            // empty mouseover listeners we added for iOS support
            if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))EventHandler.off(element, "mouseover", noop);
            if (this._popper) this._popper.destroy();
            this._menu.classList.remove(CLASS_NAME_SHOW$6);
            this._element.classList.remove(CLASS_NAME_SHOW$6);
            this._element.setAttribute("aria-expanded", "false");
            Manipulator.removeDataAttribute(this._menu, "popper");
            EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
        }
        _getConfig(config) {
            config = super._getConfig(config);
            if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") // Popper virtual elements require a getBoundingClientRect method
            throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return config;
        }
        _createPopper() {
            if (typeof Popper__namespace === "undefined") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let referenceElement = this._element;
            if (this._config.reference === "parent") referenceElement = this._parent;
            else if (isElement(this._config.reference)) referenceElement = getElement(this._config.reference);
            else if (typeof this._config.reference === "object") referenceElement = this._config.reference;
            const popperConfig = this._getPopperConfig();
            this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
        }
        _isShown() {
            return this._menu.classList.contains(CLASS_NAME_SHOW$6);
        }
        _getPlacement() {
            const parentDropdown = this._parent;
            if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) return PLACEMENT_RIGHT;
            if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) return PLACEMENT_LEFT;
            if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) return PLACEMENT_TOPCENTER;
            if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) return PLACEMENT_BOTTOMCENTER;
            // We need to trim the value because custom properties can also include spaces
            const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
            if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
            return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
        }
        _detectNavbar() {
            return this._element.closest(SELECTOR_NAVBAR) !== null;
        }
        _getOffset() {
            const { offset } = this._config;
            if (typeof offset === "string") return offset.split(",").map((value)=>Number.parseInt(value, 10));
            if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
            return offset;
        }
        _getPopperConfig() {
            const defaultBsPopperConfig = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            };
            // Disable Popper if we have a static display or Dropdown is in Navbar
            if (this._inNavbar || this._config.display === "static") {
                Manipulator.setDataAttribute(this._menu, "popper", "static"); // TODO: v6 remove
                defaultBsPopperConfig.modifiers = [
                    {
                        name: "applyStyles",
                        enabled: false
                    }
                ];
            }
            return {
                ...defaultBsPopperConfig,
                ...execute(this._config.popperConfig, [
                    defaultBsPopperConfig
                ])
            };
        }
        _selectMenuItem({ key, target }) {
            const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element)=>isVisible(element));
            if (!items.length) return;
            // if target isn't included in items (e.g. when expanding the dropdown)
            // allow cycling to get the last item in case key equals ARROW_UP_KEY
            getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
        }
        // Static
        static jQueryInterface(config) {
            return this.each(function() {
                const data = Dropdown.getOrCreateInstance(this, config);
                if (typeof config !== "string") return;
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config]();
            });
        }
        static clearMenus(event) {
            if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) return;
            const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
            for (const toggle of openToggles){
                const context = Dropdown.getInstance(toggle);
                if (!context || context._config.autoClose === false) continue;
                const composedPath = event.composedPath();
                const isMenuTarget = composedPath.includes(context._menu);
                if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) continue;
                // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
                if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) continue;
                const relatedTarget = {
                    relatedTarget: context._element
                };
                if (event.type === "click") relatedTarget.clickEvent = event;
                context._completeHide(relatedTarget);
            }
        }
        static dataApiKeydownHandler(event) {
            // If not an UP | DOWN | ESCAPE key => not a dropdown command
            // If input/textarea && if key is other than ESCAPE => not a dropdown command
            const isInput = /input|textarea/i.test(event.target.tagName);
            const isEscapeEvent = event.key === ESCAPE_KEY$2;
            const isUpOrDownEvent = [
                ARROW_UP_KEY$1,
                ARROW_DOWN_KEY$1
            ].includes(event.key);
            if (!isUpOrDownEvent && !isEscapeEvent) return;
            if (isInput && !isEscapeEvent) return;
            event.preventDefault();
            // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
            const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
            const instance = Dropdown.getOrCreateInstance(getToggleButton);
            if (isUpOrDownEvent) {
                event.stopPropagation();
                instance.show();
                instance._selectMenuItem(event);
                return;
            }
            if (instance._isShown()) {
                // else is escape and we check if it is shown
                event.stopPropagation();
                instance.hide();
                getToggleButton.focus();
            }
        }
    }
    /**
   * Data API implementation
   */ EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
    EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
    EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
    EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
    EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
        event.preventDefault();
        Dropdown.getOrCreateInstance(this).toggle();
    });
    /**
   * jQuery
   */ defineJQueryPlugin(Dropdown);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const NAME$9 = "backdrop";
    const CLASS_NAME_FADE$4 = "fade";
    const CLASS_NAME_SHOW$5 = "show";
    const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
    const Default$8 = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: false,
        isVisible: true,
        // if false, we use the backdrop helper without adding any element to the dom
        rootElement: "body" // give the choice to place backdrop under different elements
    };
    const DefaultType$8 = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    /**
   * Class definition
   */ class Backdrop extends Config {
        constructor(config){
            super();
            this._config = this._getConfig(config);
            this._isAppended = false;
            this._element = null;
        }
        // Getters
        static get Default() {
            return Default$8;
        }
        static get DefaultType() {
            return DefaultType$8;
        }
        static get NAME() {
            return NAME$9;
        }
        // Public
        show(callback) {
            if (!this._config.isVisible) {
                execute(callback);
                return;
            }
            this._append();
            const element = this._getElement();
            if (this._config.isAnimated) reflow(element);
            element.classList.add(CLASS_NAME_SHOW$5);
            this._emulateAnimation(()=>{
                execute(callback);
            });
        }
        hide(callback) {
            if (!this._config.isVisible) {
                execute(callback);
                return;
            }
            this._getElement().classList.remove(CLASS_NAME_SHOW$5);
            this._emulateAnimation(()=>{
                this.dispose();
                execute(callback);
            });
        }
        dispose() {
            if (!this._isAppended) return;
            EventHandler.off(this._element, EVENT_MOUSEDOWN);
            this._element.remove();
            this._isAppended = false;
        }
        // Private
        _getElement() {
            if (!this._element) {
                const backdrop = document.createElement("div");
                backdrop.className = this._config.className;
                if (this._config.isAnimated) backdrop.classList.add(CLASS_NAME_FADE$4);
                this._element = backdrop;
            }
            return this._element;
        }
        _configAfterMerge(config) {
            // use getElement() with the default "body" to get a fresh Element on each instantiation
            config.rootElement = getElement(config.rootElement);
            return config;
        }
        _append() {
            if (this._isAppended) return;
            const element = this._getElement();
            this._config.rootElement.append(element);
            EventHandler.on(element, EVENT_MOUSEDOWN, ()=>{
                execute(this._config.clickCallback);
            });
            this._isAppended = true;
        }
        _emulateAnimation(callback) {
            executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
        }
    }
    /**
   * --------------------------------------------------------------------------
   * Bootstrap util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const NAME$8 = "focustrap";
    const DATA_KEY$5 = "bs.focustrap";
    const EVENT_KEY$5 = `.${DATA_KEY$5}`;
    const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
    const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
    const TAB_KEY = "Tab";
    const TAB_NAV_FORWARD = "forward";
    const TAB_NAV_BACKWARD = "backward";
    const Default$7 = {
        autofocus: true,
        trapElement: null // The element to trap focus inside of
    };
    const DefaultType$7 = {
        autofocus: "boolean",
        trapElement: "element"
    };
    /**
   * Class definition
   */ class FocusTrap extends Config {
        constructor(config){
            super();
            this._config = this._getConfig(config);
            this._isActive = false;
            this._lastTabNavDirection = null;
        }
        // Getters
        static get Default() {
            return Default$7;
        }
        static get DefaultType() {
            return DefaultType$7;
        }
        static get NAME() {
            return NAME$8;
        }
        // Public
        activate() {
            if (this._isActive) return;
            if (this._config.autofocus) this._config.trapElement.focus();
            EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
            EventHandler.on(document, EVENT_FOCUSIN$2, (event)=>this._handleFocusin(event));
            EventHandler.on(document, EVENT_KEYDOWN_TAB, (event)=>this._handleKeydown(event));
            this._isActive = true;
        }
        deactivate() {
            if (!this._isActive) return;
            this._isActive = false;
            EventHandler.off(document, EVENT_KEY$5);
        }
        // Private
        _handleFocusin(event) {
            const { trapElement } = this._config;
            if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) return;
            const elements = SelectorEngine.focusableChildren(trapElement);
            if (elements.length === 0) trapElement.focus();
            else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) elements[elements.length - 1].focus();
            else elements[0].focus();
        }
        _handleKeydown(event) {
            if (event.key !== TAB_KEY) return;
            this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
        }
    }
    /**
   * --------------------------------------------------------------------------
   * Bootstrap util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
    const SELECTOR_STICKY_CONTENT = ".sticky-top";
    const PROPERTY_PADDING = "padding-right";
    const PROPERTY_MARGIN = "margin-right";
    /**
   * Class definition
   */ class ScrollBarHelper {
        constructor(){
            this._element = document.body;
        }
        // Public
        getWidth() {
            // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
            const documentWidth = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - documentWidth);
        }
        hide() {
            const width = this.getWidth();
            this._disableOverFlow();
            // give padding to element to balance the hidden scrollbar width
            this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue)=>calculatedValue + width);
            // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
            this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue)=>calculatedValue + width);
            this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue)=>calculatedValue - width);
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow");
            this._resetElementAttributes(this._element, PROPERTY_PADDING);
            this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
            this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
        // Private
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow");
            this._element.style.overflow = "hidden";
        }
        _setElementAttributes(selector, styleProperty, callback) {
            const scrollbarWidth = this.getWidth();
            const manipulationCallBack = (element)=>{
                if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) return;
                this._saveInitialAttribute(element, styleProperty);
                const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
                element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
            };
            this._applyManipulationCallback(selector, manipulationCallBack);
        }
        _saveInitialAttribute(element, styleProperty) {
            const actualValue = element.style.getPropertyValue(styleProperty);
            if (actualValue) Manipulator.setDataAttribute(element, styleProperty, actualValue);
        }
        _resetElementAttributes(selector, styleProperty) {
            const manipulationCallBack = (element)=>{
                const value = Manipulator.getDataAttribute(element, styleProperty);
                // We only want to remove the property if the value is `null`; the value can also be zero
                if (value === null) {
                    element.style.removeProperty(styleProperty);
                    return;
                }
                Manipulator.removeDataAttribute(element, styleProperty);
                element.style.setProperty(styleProperty, value);
            };
            this._applyManipulationCallback(selector, manipulationCallBack);
        }
        _applyManipulationCallback(selector, callBack) {
            if (isElement(selector)) {
                callBack(selector);
                return;
            }
            for (const sel of SelectorEngine.find(selector, this._element))callBack(sel);
        }
    }
    /**
   * --------------------------------------------------------------------------
   * Bootstrap modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const NAME$7 = "modal";
    const DATA_KEY$4 = "bs.modal";
    const EVENT_KEY$4 = `.${DATA_KEY$4}`;
    const DATA_API_KEY$2 = ".data-api";
    const ESCAPE_KEY$1 = "Escape";
    const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
    const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
    const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
    const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
    const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
    const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
    const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
    const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
    const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
    const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
    const CLASS_NAME_OPEN = "modal-open";
    const CLASS_NAME_FADE$3 = "fade";
    const CLASS_NAME_SHOW$4 = "show";
    const CLASS_NAME_STATIC = "modal-static";
    const OPEN_SELECTOR$1 = ".modal.show";
    const SELECTOR_DIALOG = ".modal-dialog";
    const SELECTOR_MODAL_BODY = ".modal-body";
    const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
    const Default$6 = {
        backdrop: true,
        focus: true,
        keyboard: true
    };
    const DefaultType$6 = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    /**
   * Class definition
   */ class Modal extends BaseComponent {
        constructor(element, config){
            super(element, config);
            this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
            this._backdrop = this._initializeBackDrop();
            this._focustrap = this._initializeFocusTrap();
            this._isShown = false;
            this._isTransitioning = false;
            this._scrollBar = new ScrollBarHelper();
            this._addEventListeners();
        }
        // Getters
        static get Default() {
            return Default$6;
        }
        static get DefaultType() {
            return DefaultType$6;
        }
        static get NAME() {
            return NAME$7;
        }
        // Public
        toggle(relatedTarget) {
            return this._isShown ? this.hide() : this.show(relatedTarget);
        }
        show(relatedTarget) {
            if (this._isShown || this._isTransitioning) return;
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
                relatedTarget
            });
            if (showEvent.defaultPrevented) return;
            this._isShown = true;
            this._isTransitioning = true;
            this._scrollBar.hide();
            document.body.classList.add(CLASS_NAME_OPEN);
            this._adjustDialog();
            this._backdrop.show(()=>this._showElement(relatedTarget));
        }
        hide() {
            if (!this._isShown || this._isTransitioning) return;
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
            if (hideEvent.defaultPrevented) return;
            this._isShown = false;
            this._isTransitioning = true;
            this._focustrap.deactivate();
            this._element.classList.remove(CLASS_NAME_SHOW$4);
            this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated());
        }
        dispose() {
            EventHandler.off(window, EVENT_KEY$4);
            EventHandler.off(this._dialog, EVENT_KEY$4);
            this._backdrop.dispose();
            this._focustrap.deactivate();
            super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        // Private
        _initializeBackDrop() {
            return new Backdrop({
                isVisible: Boolean(this._config.backdrop),
                // 'static' option will be translated to true, and booleans will keep their value,
                isAnimated: this._isAnimated()
            });
        }
        _initializeFocusTrap() {
            return new FocusTrap({
                trapElement: this._element
            });
        }
        _showElement(relatedTarget) {
            // try to append dynamic modal
            if (!document.body.contains(this._element)) document.body.append(this._element);
            this._element.style.display = "block";
            this._element.removeAttribute("aria-hidden");
            this._element.setAttribute("aria-modal", true);
            this._element.setAttribute("role", "dialog");
            this._element.scrollTop = 0;
            const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
            if (modalBody) modalBody.scrollTop = 0;
            reflow(this._element);
            this._element.classList.add(CLASS_NAME_SHOW$4);
            const transitionComplete = ()=>{
                if (this._config.focus) this._focustrap.activate();
                this._isTransitioning = false;
                EventHandler.trigger(this._element, EVENT_SHOWN$4, {
                    relatedTarget
                });
            };
            this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
        }
        _addEventListeners() {
            EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event)=>{
                if (event.key !== ESCAPE_KEY$1) return;
                if (this._config.keyboard) {
                    this.hide();
                    return;
                }
                this._triggerBackdropTransition();
            });
            EventHandler.on(window, EVENT_RESIZE$1, ()=>{
                if (this._isShown && !this._isTransitioning) this._adjustDialog();
            });
            EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event)=>{
                // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
                EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2)=>{
                    if (this._element !== event.target || this._element !== event2.target) return;
                    if (this._config.backdrop === "static") {
                        this._triggerBackdropTransition();
                        return;
                    }
                    if (this._config.backdrop) this.hide();
                });
            });
        }
        _hideModal() {
            this._element.style.display = "none";
            this._element.setAttribute("aria-hidden", true);
            this._element.removeAttribute("aria-modal");
            this._element.removeAttribute("role");
            this._isTransitioning = false;
            this._backdrop.hide(()=>{
                document.body.classList.remove(CLASS_NAME_OPEN);
                this._resetAdjustments();
                this._scrollBar.reset();
                EventHandler.trigger(this._element, EVENT_HIDDEN$4);
            });
        }
        _isAnimated() {
            return this._element.classList.contains(CLASS_NAME_FADE$3);
        }
        _triggerBackdropTransition() {
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
            if (hideEvent.defaultPrevented) return;
            const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
            const initialOverflowY = this._element.style.overflowY;
            // return if the following background transition hasn't yet completed
            if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) return;
            if (!isModalOverflowing) this._element.style.overflowY = "hidden";
            this._element.classList.add(CLASS_NAME_STATIC);
            this._queueCallback(()=>{
                this._element.classList.remove(CLASS_NAME_STATIC);
                this._queueCallback(()=>{
                    this._element.style.overflowY = initialOverflowY;
                }, this._dialog);
            }, this._dialog);
            this._element.focus();
        }
        /**
     * The following methods are used to handle overflowing modals
     */ _adjustDialog() {
            const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
            const scrollbarWidth = this._scrollBar.getWidth();
            const isBodyOverflowing = scrollbarWidth > 0;
            if (isBodyOverflowing && !isModalOverflowing) {
                const property = isRTL() ? "paddingLeft" : "paddingRight";
                this._element.style[property] = `${scrollbarWidth}px`;
            }
            if (!isBodyOverflowing && isModalOverflowing) {
                const property = isRTL() ? "paddingRight" : "paddingLeft";
                this._element.style[property] = `${scrollbarWidth}px`;
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "";
            this._element.style.paddingRight = "";
        }
        // Static
        static jQueryInterface(config, relatedTarget) {
            return this.each(function() {
                const data = Modal.getOrCreateInstance(this, config);
                if (typeof config !== "string") return;
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config](relatedTarget);
            });
        }
    }
    /**
   * Data API implementation
   */ EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
        const target = SelectorEngine.getElementFromSelector(this);
        if ([
            "A",
            "AREA"
        ].includes(this.tagName)) event.preventDefault();
        EventHandler.one(target, EVENT_SHOW$4, (showEvent)=>{
            if (showEvent.defaultPrevented) // only register focus restorer if modal will actually get shown
            return;
            EventHandler.one(target, EVENT_HIDDEN$4, ()=>{
                if (isVisible(this)) this.focus();
            });
        });
        // avoid conflict when clicking modal toggler while another one is open
        const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
        if (alreadyOpen) Modal.getInstance(alreadyOpen).hide();
        const data = Modal.getOrCreateInstance(target);
        data.toggle(this);
    });
    enableDismissTrigger(Modal);
    /**
   * jQuery
   */ defineJQueryPlugin(Modal);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const NAME$6 = "offcanvas";
    const DATA_KEY$3 = "bs.offcanvas";
    const EVENT_KEY$3 = `.${DATA_KEY$3}`;
    const DATA_API_KEY$1 = ".data-api";
    const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
    const ESCAPE_KEY = "Escape";
    const CLASS_NAME_SHOW$3 = "show";
    const CLASS_NAME_SHOWING$1 = "showing";
    const CLASS_NAME_HIDING = "hiding";
    const CLASS_NAME_BACKDROP = "offcanvas-backdrop";
    const OPEN_SELECTOR = ".offcanvas.show";
    const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
    const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
    const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
    const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
    const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
    const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
    const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
    const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
    const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
    const Default$5 = {
        backdrop: true,
        keyboard: true,
        scroll: false
    };
    const DefaultType$5 = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    /**
   * Class definition
   */ class Offcanvas extends BaseComponent {
        constructor(element, config){
            super(element, config);
            this._isShown = false;
            this._backdrop = this._initializeBackDrop();
            this._focustrap = this._initializeFocusTrap();
            this._addEventListeners();
        }
        // Getters
        static get Default() {
            return Default$5;
        }
        static get DefaultType() {
            return DefaultType$5;
        }
        static get NAME() {
            return NAME$6;
        }
        // Public
        toggle(relatedTarget) {
            return this._isShown ? this.hide() : this.show(relatedTarget);
        }
        show(relatedTarget) {
            if (this._isShown) return;
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
                relatedTarget
            });
            if (showEvent.defaultPrevented) return;
            this._isShown = true;
            this._backdrop.show();
            if (!this._config.scroll) new ScrollBarHelper().hide();
            this._element.setAttribute("aria-modal", true);
            this._element.setAttribute("role", "dialog");
            this._element.classList.add(CLASS_NAME_SHOWING$1);
            const completeCallBack = ()=>{
                if (!this._config.scroll || this._config.backdrop) this._focustrap.activate();
                this._element.classList.add(CLASS_NAME_SHOW$3);
                this._element.classList.remove(CLASS_NAME_SHOWING$1);
                EventHandler.trigger(this._element, EVENT_SHOWN$3, {
                    relatedTarget
                });
            };
            this._queueCallback(completeCallBack, this._element, true);
        }
        hide() {
            if (!this._isShown) return;
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
            if (hideEvent.defaultPrevented) return;
            this._focustrap.deactivate();
            this._element.blur();
            this._isShown = false;
            this._element.classList.add(CLASS_NAME_HIDING);
            this._backdrop.hide();
            const completeCallback = ()=>{
                this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
                this._element.removeAttribute("aria-modal");
                this._element.removeAttribute("role");
                if (!this._config.scroll) new ScrollBarHelper().reset();
                EventHandler.trigger(this._element, EVENT_HIDDEN$3);
            };
            this._queueCallback(completeCallback, this._element, true);
        }
        dispose() {
            this._backdrop.dispose();
            this._focustrap.deactivate();
            super.dispose();
        }
        // Private
        _initializeBackDrop() {
            const clickCallback = ()=>{
                if (this._config.backdrop === "static") {
                    EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
                    return;
                }
                this.hide();
            };
            // 'static' option will be translated to true, and booleans will keep their value
            const isVisible = Boolean(this._config.backdrop);
            return new Backdrop({
                className: CLASS_NAME_BACKDROP,
                isVisible,
                isAnimated: true,
                rootElement: this._element.parentNode,
                clickCallback: isVisible ? clickCallback : null
            });
        }
        _initializeFocusTrap() {
            return new FocusTrap({
                trapElement: this._element
            });
        }
        _addEventListeners() {
            EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event)=>{
                if (event.key !== ESCAPE_KEY) return;
                if (this._config.keyboard) {
                    this.hide();
                    return;
                }
                EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
            });
        }
        // Static
        static jQueryInterface(config) {
            return this.each(function() {
                const data = Offcanvas.getOrCreateInstance(this, config);
                if (typeof config !== "string") return;
                if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                data[config](this);
            });
        }
    }
    /**
   * Data API implementation
   */ EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
        const target = SelectorEngine.getElementFromSelector(this);
        if ([
            "A",
            "AREA"
        ].includes(this.tagName)) event.preventDefault();
        if (isDisabled(this)) return;
        EventHandler.one(target, EVENT_HIDDEN$3, ()=>{
            // focus on trigger when it is closed
            if (isVisible(this)) this.focus();
        });
        // avoid conflict when clicking a toggler of an offcanvas, while another is open
        const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
        if (alreadyOpen && alreadyOpen !== target) Offcanvas.getInstance(alreadyOpen).hide();
        const data = Offcanvas.getOrCreateInstance(target);
        data.toggle(this);
    });
    EventHandler.on(window, EVENT_LOAD_DATA_API$2, ()=>{
        for (const selector of SelectorEngine.find(OPEN_SELECTOR))Offcanvas.getOrCreateInstance(selector).show();
    });
    EventHandler.on(window, EVENT_RESIZE, ()=>{
        for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]"))if (getComputedStyle(element).position !== "fixed") Offcanvas.getOrCreateInstance(element).hide();
    });
    enableDismissTrigger(Offcanvas);
    /**
   * jQuery
   */ defineJQueryPlugin(Offcanvas);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ // js-docs-start allow-list
    const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
    const DefaultAllowlist = {
        // Global attributes allowed on any supplied element below.
        "*": [
            "class",
            "dir",
            "id",
            "lang",
            "role",
            ARIA_ATTRIBUTE_PATTERN
        ],
        a: [
            "target",
            "href",
            "title",
            "rel"
        ],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        dd: [],
        div: [],
        dl: [],
        dt: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: [
            "src",
            "srcset",
            "alt",
            "title",
            "width",
            "height"
        ],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    };
    // js-docs-end allow-list
    const uriAttributes = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ]);
    /**
   * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation
   * contexts.
   *
   * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
   */ // eslint-disable-next-line unicorn/better-regex
    const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
    const allowedAttribute = (attribute, allowedAttributeList)=>{
        const attributeName = attribute.nodeName.toLowerCase();
        if (allowedAttributeList.includes(attributeName)) {
            if (uriAttributes.has(attributeName)) return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
            return true;
        }
        // Check if a regular expression validates the attribute.
        return allowedAttributeList.filter((attributeRegex)=>attributeRegex instanceof RegExp).some((regex)=>regex.test(attributeName));
    };
    function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
        if (!unsafeHtml.length) return unsafeHtml;
        if (sanitizeFunction && typeof sanitizeFunction === "function") return sanitizeFunction(unsafeHtml);
        const domParser = new window.DOMParser();
        const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
        const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
        for (const element of elements){
            const elementName = element.nodeName.toLowerCase();
            if (!Object.keys(allowList).includes(elementName)) {
                element.remove();
                continue;
            }
            const attributeList = [].concat(...element.attributes);
            const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
            for (const attribute of attributeList)if (!allowedAttribute(attribute, allowedAttributes)) element.removeAttribute(attribute.nodeName);
        }
        return createdDocument.body.innerHTML;
    }
    /**
   * --------------------------------------------------------------------------
   * Bootstrap util/template-factory.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const NAME$5 = "TemplateFactory";
    const Default$4 = {
        allowList: DefaultAllowlist,
        content: {},
        // { selector : text ,  selector2 : text2 , }
        extraClass: "",
        html: false,
        sanitize: true,
        sanitizeFn: null,
        template: "<div></div>"
    };
    const DefaultType$4 = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    };
    const DefaultContentType = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    /**
   * Class definition
   */ class TemplateFactory extends Config {
        constructor(config){
            super();
            this._config = this._getConfig(config);
        }
        // Getters
        static get Default() {
            return Default$4;
        }
        static get DefaultType() {
            return DefaultType$4;
        }
        static get NAME() {
            return NAME$5;
        }
        // Public
        getContent() {
            return Object.values(this._config.content).map((config)=>this._resolvePossibleFunction(config)).filter(Boolean);
        }
        hasContent() {
            return this.getContent().length > 0;
        }
        changeContent(content) {
            this._checkContent(content);
            this._config.content = {
                ...this._config.content,
                ...content
            };
            return this;
        }
        toHtml() {
            const templateWrapper = document.createElement("div");
            templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
            for (const [selector, text] of Object.entries(this._config.content))this._setContent(templateWrapper, text, selector);
            const template = templateWrapper.children[0];
            const extraClass = this._resolvePossibleFunction(this._config.extraClass);
            if (extraClass) template.classList.add(...extraClass.split(" "));
            return template;
        }
        // Private
        _typeCheckConfig(config) {
            super._typeCheckConfig(config);
            this._checkContent(config.content);
        }
        _checkContent(arg) {
            for (const [selector, content] of Object.entries(arg))super._typeCheckConfig({
                selector,
                entry: content
            }, DefaultContentType);
        }
        _setContent(template, content, selector) {
            const templateElement = SelectorEngine.findOne(selector, template);
            if (!templateElement) return;
            content = this._resolvePossibleFunction(content);
            if (!content) {
                templateElement.remove();
                return;
            }
            if (isElement(content)) {
                this._putElementInTemplate(getElement(content), templateElement);
                return;
            }
            if (this._config.html) {
                templateElement.innerHTML = this._maybeSanitize(content);
                return;
            }
            templateElement.textContent = content;
        }
        _maybeSanitize(arg) {
            return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
        }
        _resolvePossibleFunction(arg) {
            return execute(arg, [
                this
            ]);
        }
        _putElementInTemplate(element, templateElement) {
            if (this._config.html) {
                templateElement.innerHTML = "";
                templateElement.append(element);
                return;
            }
            templateElement.textContent = element.textContent;
        }
    }
    /**
   * --------------------------------------------------------------------------
   * Bootstrap tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const NAME$4 = "tooltip";
    const DISALLOWED_ATTRIBUTES = new Set([
        "sanitize",
        "allowList",
        "sanitizeFn"
    ]);
    const CLASS_NAME_FADE$2 = "fade";
    const CLASS_NAME_MODAL = "modal";
    const CLASS_NAME_SHOW$2 = "show";
    const SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
    const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
    const EVENT_MODAL_HIDE = "hide.bs.modal";
    const TRIGGER_HOVER = "hover";
    const TRIGGER_FOCUS = "focus";
    const TRIGGER_CLICK = "click";
    const TRIGGER_MANUAL = "manual";
    const EVENT_HIDE$2 = "hide";
    const EVENT_HIDDEN$2 = "hidden";
    const EVENT_SHOW$2 = "show";
    const EVENT_SHOWN$2 = "shown";
    const EVENT_INSERTED = "inserted";
    const EVENT_CLICK$1 = "click";
    const EVENT_FOCUSIN$1 = "focusin";
    const EVENT_FOCUSOUT$1 = "focusout";
    const EVENT_MOUSEENTER = "mouseenter";
    const EVENT_MOUSELEAVE = "mouseleave";
    const AttachmentMap = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: isRTL() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: isRTL() ? "right" : "left"
    };
    const Default$3 = {
        allowList: DefaultAllowlist,
        animation: true,
        boundary: "clippingParents",
        container: false,
        customClass: "",
        delay: 0,
        fallbackPlacements: [
            "top",
            "right",
            "bottom",
            "left"
        ],
        html: false,
        offset: [
            0,
            6
        ],
        placement: "top",
        popperConfig: null,
        sanitize: true,
        sanitizeFn: null,
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    };
    const DefaultType$3 = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    /**
   * Class definition
   */ class Tooltip extends BaseComponent {
        constructor(element, config){
            if (typeof Popper__namespace === "undefined") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(element, config);
            // Private
            this._isEnabled = true;
            this._timeout = 0;
            this._isHovered = null;
            this._activeTrigger = {};
            this._popper = null;
            this._templateFactory = null;
            this._newContent = null;
            // Protected
            this.tip = null;
            this._setListeners();
            if (!this._config.selector) this._fixTitle();
        }
        // Getters
        static get Default() {
            return Default$3;
        }
        static get DefaultType() {
            return DefaultType$3;
        }
        static get NAME() {
            return NAME$4;
        }
        // Public
        enable() {
            this._isEnabled = true;
        }
        disable() {
            this._isEnabled = false;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle() {
            if (!this._isEnabled) return;
            this._activeTrigger.click = !this._activeTrigger.click;
            if (this._isShown()) {
                this._leave();
                return;
            }
            this._enter();
        }
        dispose() {
            clearTimeout(this._timeout);
            EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
            if (this._element.getAttribute("data-bs-original-title")) this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
            this._disposePopper();
            super.dispose();
        }
        show() {
            if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
            if (!(this._isWithContent() && this._isEnabled)) return;
            const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
            const shadowRoot = findShadowRoot(this._element);
            const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
            if (showEvent.defaultPrevented || !isInTheDom) return;
            // TODO: v6 remove this or make it optional
            this._disposePopper();
            const tip = this._getTipElement();
            this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
            const { container } = this._config;
            if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
                container.append(tip);
                EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
            }
            this._popper = this._createPopper(tip);
            tip.classList.add(CLASS_NAME_SHOW$2);
            // If this is a touch-enabled device we add extra
            // empty mouseover listeners to the body's immediate children;
            // only needed because of broken event delegation on iOS
            // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
            if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))EventHandler.on(element, "mouseover", noop);
            const complete = ()=>{
                EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
                if (this._isHovered === false) this._leave();
                this._isHovered = false;
            };
            this._queueCallback(complete, this.tip, this._isAnimated());
        }
        hide() {
            if (!this._isShown()) return;
            const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
            if (hideEvent.defaultPrevented) return;
            const tip = this._getTipElement();
            tip.classList.remove(CLASS_NAME_SHOW$2);
            // If this is a touch-enabled device we remove the extra
            // empty mouseover listeners we added for iOS support
            if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))EventHandler.off(element, "mouseover", noop);
            this._activeTrigger[TRIGGER_CLICK] = false;
            this._activeTrigger[TRIGGER_FOCUS] = false;
            this._activeTrigger[TRIGGER_HOVER] = false;
            this._isHovered = null; // it is a trick to support manual triggering
            const complete = ()=>{
                if (this._isWithActiveTrigger()) return;
                if (!this._isHovered) this._disposePopper();
                this._element.removeAttribute("aria-describedby");
                EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
            };
            this._queueCallback(complete, this.tip, this._isAnimated());
        }
        update() {
            if (this._popper) this._popper.update();
        }
        // Protected
        _isWithContent() {
            return Boolean(this._getTitle());
        }
        _getTipElement() {
            if (!this.tip) this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
            return this.tip;
        }
        _createTipElement(content) {
            const tip = this._getTemplateFactory(content).toHtml();
            // TODO: remove this check in v6
            if (!tip) return null;
            tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
            // TODO: v6 the following can be achieved with CSS only
            tip.classList.add(`bs-${this.constructor.NAME}-auto`);
            const tipId = getUID(this.constructor.NAME).toString();
            tip.setAttribute("id", tipId);
            if (this._isAnimated()) tip.classList.add(CLASS_NAME_FADE$2);
            return tip;
        }
        setContent(content) {
            this._newContent = content;
            if (this._isShown()) {
                this._disposePopper();
                this.show();
            }
        }
        _getTemplateFactory(content) {
            if (this._templateFactory) this._templateFactory.changeContent(content);
            else this._templateFactory = new TemplateFactory({
                ...this._config,
                // the `content` var has to be after `this._config`
                // to override config.content in case of popover
                content,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            });
            return this._templateFactory;
        }
        _getContentForTemplate() {
            return {
                [SELECTOR_TOOLTIP_INNER]: this._getTitle()
            };
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        // Private
        _initializeOnDelegatedTarget(event) {
            return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
        }
        _createPopper(tip) {
            const placement = execute(this._config.placement, [
                this,
                tip,
                this._element
            ]);
            const attachment = AttachmentMap[placement.toUpperCase()];
            return Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
        }
        _getOffset() {
            const { offset } = this._config;
            if (typeof offset === "string") return offset.split(",").map((value)=>Number.parseInt(value, 10));
            if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
            return offset;
        }
        _resolvePossibleFunction(arg) {
            return execute(arg, [
                this._element
            ]);
        }
        _getPopperConfig(attachment) {
            const defaultBsPopperConfig = {
                placement: attachment,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "preSetPlacement",
                        enabled: true,
                        phase: "beforeMain",
                        fn: (data)=>{
                            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
                            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
                            this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
                        }
                    }
                ]
            };
            return {
                ...defaultBsPopperConfig,
                ...execute(this._config.popperConfig, [
                    defaultBsPopperConfig
                ])
            };
        }
        _setListeners() {
            const triggers = this._config.trigger.split(" ");
            for (const trigger of triggers){
                if (trigger === "click") EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context.toggle();
                });
                else if (trigger !== TRIGGER_MANUAL) {
                    const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
                    const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
                    EventHandler.on(this._element, eventIn, this._config.selector, (event)=>{
                        const context = this._initializeOnDelegatedTarget(event);
                        context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
                        context._enter();
                    });
                    EventHandler.on(this._element, eventOut, this._config.selector, (event)=>{
                        const context = this._initializeOnDelegatedTarget(event);
                        context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                        context._leave();
                    });
                }
            }
            this._hideModalHandler = ()=>{
                if (this._element) this.hide();
            };
            EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
        }
        _fixTitle() {
            const title = this._element.getAttribute("title");
            if (!title) return;
            if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) this._element.setAttribute("aria-label", title);
            this._element.setAttribute("data-bs-original-title", title); // DO NOT USE IT. Is only for backwards compatibility
            this._element.removeAttribute("title");
        }
        _enter() {
            if (this._isShown() || this._isHovered) {
                this._isHovered = true;
                return;
            }
            this._isHovered = true;
            this._setTimeout(()=>{
                if (this._isHovered) this.show();
            }, this._config.delay.show);
        }
        _leave() {
            if (this._isWithActiveTrigger()) return;
            this._isHovered = false;
            this._setTimeout(()=>{
                if (!this._isHovered) this.hide();
            }, this._config.delay.hide);
        }
        _setTimeout(handler, timeout) {
            clearTimeout(this._timeout);
            this._timeout = setTimeout(handler, timeout);
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(true);
        }
        _getConfig(config) {
            const dataAttributes = Manipulator.getDataAttributes(this._element);
            for (const dataAttribute of Object.keys(dataAttributes))if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) delete dataAttributes[dataAttribute];
            config = {
                ...dataAttributes,
                ...typeof config === "object" && config ? config : {}
            };
            config = this._mergeConfigObj(config);
            config = this._configAfterMerge(config);
            this._typeCheckConfig(config);
            return config;
        }
        _configAfterMerge(config) {
            config.container = config.container === false ? document.body : getElement(config.container);
            if (typeof config.delay === "number") config.delay = {
                show: config.delay,
                hide: config.delay
            };
            if (typeof config.title === "number") config.title = config.title.toString();
            if (typeof config.content === "number") config.content = config.content.toString();
            return config;
        }
        _getDelegateConfig() {
            const config = {};
            for (const [key, value] of Object.entries(this._config))if (this.constructor.Default[key] !== value) config[key] = value;
            config.selector = false;
            config.trigger = "manual";
            // In the future can be replaced with:
            // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
            // `Object.fromEntries(keysWithDifferentValues)`
            return config;
        }
        _disposePopper() {
            if (this._popper) {
                this._popper.destroy();
                this._popper = null;
            }
            if (this.tip) {
                this.tip.remove();
                this.tip = null;
            }
        }
        // Static
        static jQueryInterface(config) {
            return this.each(function() {
                const data = Tooltip.getOrCreateInstance(this, config);
                if (typeof config !== "string") return;
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config]();
            });
        }
    }
    /**
   * jQuery
   */ defineJQueryPlugin(Tooltip);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const NAME$3 = "popover";
    const SELECTOR_TITLE = ".popover-header";
    const SELECTOR_CONTENT = ".popover-body";
    const Default$2 = {
        ...Tooltip.Default,
        content: "",
        offset: [
            0,
            8
        ],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    };
    const DefaultType$2 = {
        ...Tooltip.DefaultType,
        content: "(null|string|element|function)"
    };
    /**
   * Class definition
   */ class Popover extends Tooltip {
        // Getters
        static get Default() {
            return Default$2;
        }
        static get DefaultType() {
            return DefaultType$2;
        }
        static get NAME() {
            return NAME$3;
        }
        // Overrides
        _isWithContent() {
            return this._getTitle() || this._getContent();
        }
        // Private
        _getContentForTemplate() {
            return {
                [SELECTOR_TITLE]: this._getTitle(),
                [SELECTOR_CONTENT]: this._getContent()
            };
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        // Static
        static jQueryInterface(config) {
            return this.each(function() {
                const data = Popover.getOrCreateInstance(this, config);
                if (typeof config !== "string") return;
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config]();
            });
        }
    }
    /**
   * jQuery
   */ defineJQueryPlugin(Popover);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const NAME$2 = "scrollspy";
    const DATA_KEY$2 = "bs.scrollspy";
    const EVENT_KEY$2 = `.${DATA_KEY$2}`;
    const DATA_API_KEY = ".data-api";
    const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
    const EVENT_CLICK = `click${EVENT_KEY$2}`;
    const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
    const CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
    const CLASS_NAME_ACTIVE$1 = "active";
    const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
    const SELECTOR_TARGET_LINKS = "[href]";
    const SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
    const SELECTOR_NAV_LINKS = ".nav-link";
    const SELECTOR_NAV_ITEMS = ".nav-item";
    const SELECTOR_LIST_ITEMS = ".list-group-item";
    const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
    const SELECTOR_DROPDOWN = ".dropdown";
    const SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
    const Default$1 = {
        offset: null,
        // TODO: v6 @deprecated, keep it for backwards compatibility reasons
        rootMargin: "0px 0px -25%",
        smoothScroll: false,
        target: null,
        threshold: [
            0.1,
            0.5,
            1
        ]
    };
    const DefaultType$1 = {
        offset: "(number|null)",
        // TODO v6 @deprecated, keep it for backwards compatibility reasons
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    /**
   * Class definition
   */ class ScrollSpy extends BaseComponent {
        constructor(element, config){
            super(element, config);
            // this._element is the observablesContainer and config.target the menu links wrapper
            this._targetLinks = new Map();
            this._observableSections = new Map();
            this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
            this._activeTarget = null;
            this._observer = null;
            this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            };
            this.refresh(); // initialize
        }
        // Getters
        static get Default() {
            return Default$1;
        }
        static get DefaultType() {
            return DefaultType$1;
        }
        static get NAME() {
            return NAME$2;
        }
        // Public
        refresh() {
            this._initializeTargetsAndObservables();
            this._maybeEnableSmoothScroll();
            if (this._observer) this._observer.disconnect();
            else this._observer = this._getNewObserver();
            for (const section of this._observableSections.values())this._observer.observe(section);
        }
        dispose() {
            this._observer.disconnect();
            super.dispose();
        }
        // Private
        _configAfterMerge(config) {
            // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
            config.target = getElement(config.target) || document.body;
            // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
            config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
            if (typeof config.threshold === "string") config.threshold = config.threshold.split(",").map((value)=>Number.parseFloat(value));
            return config;
        }
        _maybeEnableSmoothScroll() {
            if (!this._config.smoothScroll) return;
            // unregister any previous listeners
            EventHandler.off(this._config.target, EVENT_CLICK);
            EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event)=>{
                const observableSection = this._observableSections.get(event.target.hash);
                if (observableSection) {
                    event.preventDefault();
                    const root = this._rootElement || window;
                    const height = observableSection.offsetTop - this._element.offsetTop;
                    if (root.scrollTo) {
                        root.scrollTo({
                            top: height,
                            behavior: "smooth"
                        });
                        return;
                    }
                    // Chrome 60 doesn't support `scrollTo`
                    root.scrollTop = height;
                }
            });
        }
        _getNewObserver() {
            const options = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((entries)=>this._observerCallback(entries), options);
        }
        // The logic of selection
        _observerCallback(entries) {
            const targetElement = (entry)=>this._targetLinks.get(`#${entry.target.id}`);
            const activate = (entry)=>{
                this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
                this._process(targetElement(entry));
            };
            const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
            const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = parentScrollTop;
            for (const entry of entries){
                if (!entry.isIntersecting) {
                    this._activeTarget = null;
                    this._clearActiveClass(targetElement(entry));
                    continue;
                }
                const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                // if we are scrolling down, pick the bigger offsetTop
                if (userScrollsDown && entryIsLowerThanPrevious) {
                    activate(entry);
                    // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
                    if (!parentScrollTop) return;
                    continue;
                }
                // if we are scrolling up, pick the smallest offsetTop
                if (!userScrollsDown && !entryIsLowerThanPrevious) activate(entry);
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map();
            this._observableSections = new Map();
            const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
            for (const anchor of targetLinks){
                // ensure that the anchor has an id and is not disabled
                if (!anchor.hash || isDisabled(anchor)) continue;
                const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
                // ensure that the observableSection exists & is visible
                if (isVisible(observableSection)) {
                    this._targetLinks.set(decodeURI(anchor.hash), anchor);
                    this._observableSections.set(anchor.hash, observableSection);
                }
            }
        }
        _process(target) {
            if (this._activeTarget === target) return;
            this._clearActiveClass(this._config.target);
            this._activeTarget = target;
            target.classList.add(CLASS_NAME_ACTIVE$1);
            this._activateParents(target);
            EventHandler.trigger(this._element, EVENT_ACTIVATE, {
                relatedTarget: target
            });
        }
        _activateParents(target) {
            // Activate dropdown parents
            if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
                SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
                return;
            }
            for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP))// Set triggered links parents as active
            // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
            for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS))item.classList.add(CLASS_NAME_ACTIVE$1);
        }
        _clearActiveClass(parent) {
            parent.classList.remove(CLASS_NAME_ACTIVE$1);
            const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
            for (const node of activeNodes)node.classList.remove(CLASS_NAME_ACTIVE$1);
        }
        // Static
        static jQueryInterface(config) {
            return this.each(function() {
                const data = ScrollSpy.getOrCreateInstance(this, config);
                if (typeof config !== "string") return;
                if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                data[config]();
            });
        }
    }
    /**
   * Data API implementation
   */ EventHandler.on(window, EVENT_LOAD_DATA_API$1, ()=>{
        for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY))ScrollSpy.getOrCreateInstance(spy);
    });
    /**
   * jQuery
   */ defineJQueryPlugin(ScrollSpy);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const NAME$1 = "tab";
    const DATA_KEY$1 = "bs.tab";
    const EVENT_KEY$1 = `.${DATA_KEY$1}`;
    const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
    const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
    const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
    const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
    const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
    const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
    const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
    const ARROW_LEFT_KEY = "ArrowLeft";
    const ARROW_RIGHT_KEY = "ArrowRight";
    const ARROW_UP_KEY = "ArrowUp";
    const ARROW_DOWN_KEY = "ArrowDown";
    const HOME_KEY = "Home";
    const END_KEY = "End";
    const CLASS_NAME_ACTIVE = "active";
    const CLASS_NAME_FADE$1 = "fade";
    const CLASS_NAME_SHOW$1 = "show";
    const CLASS_DROPDOWN = "dropdown";
    const SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
    const SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
    const NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
    const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
    const SELECTOR_OUTER = ".nav-item, .list-group-item";
    const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
    const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // TODO: could only be `tab` in v6
    const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
    const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
    /**
   * Class definition
   */ class Tab extends BaseComponent {
        constructor(element){
            super(element);
            this._parent = this._element.closest(SELECTOR_TAB_PANEL);
            if (!this._parent) return;
            // Set up initial aria attributes
            this._setInitialAttributes(this._parent, this._getChildren());
            EventHandler.on(this._element, EVENT_KEYDOWN, (event)=>this._keydown(event));
        }
        // Getters
        static get NAME() {
            return NAME$1;
        }
        // Public
        show() {
            // Shows this elem and deactivate the active sibling if exists
            const innerElem = this._element;
            if (this._elemIsActive(innerElem)) return;
            // Search for active tab on same parent to deactivate it
            const active = this._getActiveElem();
            const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
                relatedTarget: innerElem
            }) : null;
            const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
                relatedTarget: active
            });
            if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) return;
            this._deactivate(active, innerElem);
            this._activate(innerElem, active);
        }
        // Private
        _activate(element, relatedElem) {
            if (!element) return;
            element.classList.add(CLASS_NAME_ACTIVE);
            this._activate(SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section
            const complete = ()=>{
                if (element.getAttribute("role") !== "tab") {
                    element.classList.add(CLASS_NAME_SHOW$1);
                    return;
                }
                element.removeAttribute("tabindex");
                element.setAttribute("aria-selected", true);
                this._toggleDropDown(element, true);
                EventHandler.trigger(element, EVENT_SHOWN$1, {
                    relatedTarget: relatedElem
                });
            };
            this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
        }
        _deactivate(element, relatedElem) {
            if (!element) return;
            element.classList.remove(CLASS_NAME_ACTIVE);
            element.blur();
            this._deactivate(SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too
            const complete = ()=>{
                if (element.getAttribute("role") !== "tab") {
                    element.classList.remove(CLASS_NAME_SHOW$1);
                    return;
                }
                element.setAttribute("aria-selected", false);
                element.setAttribute("tabindex", "-1");
                this._toggleDropDown(element, false);
                EventHandler.trigger(element, EVENT_HIDDEN$1, {
                    relatedTarget: relatedElem
                });
            };
            this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
        }
        _keydown(event) {
            if (![
                ARROW_LEFT_KEY,
                ARROW_RIGHT_KEY,
                ARROW_UP_KEY,
                ARROW_DOWN_KEY,
                HOME_KEY,
                END_KEY
            ].includes(event.key)) return;
            event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
            event.preventDefault();
            const children = this._getChildren().filter((element)=>!isDisabled(element));
            let nextActiveElement;
            if ([
                HOME_KEY,
                END_KEY
            ].includes(event.key)) nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
            else {
                const isNext = [
                    ARROW_RIGHT_KEY,
                    ARROW_DOWN_KEY
                ].includes(event.key);
                nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
            }
            if (nextActiveElement) {
                nextActiveElement.focus({
                    preventScroll: true
                });
                Tab.getOrCreateInstance(nextActiveElement).show();
            }
        }
        _getChildren() {
            // collection of inner elements
            return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
        }
        _getActiveElem() {
            return this._getChildren().find((child)=>this._elemIsActive(child)) || null;
        }
        _setInitialAttributes(parent, children) {
            this._setAttributeIfNotExists(parent, "role", "tablist");
            for (const child of children)this._setInitialAttributesOnChild(child);
        }
        _setInitialAttributesOnChild(child) {
            child = this._getInnerElement(child);
            const isActive = this._elemIsActive(child);
            const outerElem = this._getOuterElement(child);
            child.setAttribute("aria-selected", isActive);
            if (outerElem !== child) this._setAttributeIfNotExists(outerElem, "role", "presentation");
            if (!isActive) child.setAttribute("tabindex", "-1");
            this._setAttributeIfNotExists(child, "role", "tab");
            // set attributes to the related panel too
            this._setInitialAttributesOnTargetPanel(child);
        }
        _setInitialAttributesOnTargetPanel(child) {
            const target = SelectorEngine.getElementFromSelector(child);
            if (!target) return;
            this._setAttributeIfNotExists(target, "role", "tabpanel");
            if (child.id) this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
        }
        _toggleDropDown(element, open) {
            const outerElem = this._getOuterElement(element);
            if (!outerElem.classList.contains(CLASS_DROPDOWN)) return;
            const toggle = (selector, className)=>{
                const element = SelectorEngine.findOne(selector, outerElem);
                if (element) element.classList.toggle(className, open);
            };
            toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
            toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
            outerElem.setAttribute("aria-expanded", open);
        }
        _setAttributeIfNotExists(element, attribute, value) {
            if (!element.hasAttribute(attribute)) element.setAttribute(attribute, value);
        }
        _elemIsActive(elem) {
            return elem.classList.contains(CLASS_NAME_ACTIVE);
        }
        // Try to get the inner element (usually the .nav-link)
        _getInnerElement(elem) {
            return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
        }
        // Try to get the outer element (usually the .nav-item)
        _getOuterElement(elem) {
            return elem.closest(SELECTOR_OUTER) || elem;
        }
        // Static
        static jQueryInterface(config) {
            return this.each(function() {
                const data = Tab.getOrCreateInstance(this);
                if (typeof config !== "string") return;
                if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                data[config]();
            });
        }
    }
    /**
   * Data API implementation
   */ EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
        if ([
            "A",
            "AREA"
        ].includes(this.tagName)) event.preventDefault();
        if (isDisabled(this)) return;
        Tab.getOrCreateInstance(this).show();
    });
    /**
   * Initialize on focus
   */ EventHandler.on(window, EVENT_LOAD_DATA_API, ()=>{
        for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE))Tab.getOrCreateInstance(element);
    });
    /**
   * jQuery
   */ defineJQueryPlugin(Tab);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * Constants
   */ const NAME = "toast";
    const DATA_KEY = "bs.toast";
    const EVENT_KEY = `.${DATA_KEY}`;
    const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
    const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
    const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
    const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
    const EVENT_HIDE = `hide${EVENT_KEY}`;
    const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
    const EVENT_SHOW = `show${EVENT_KEY}`;
    const EVENT_SHOWN = `shown${EVENT_KEY}`;
    const CLASS_NAME_FADE = "fade";
    const CLASS_NAME_HIDE = "hide"; // @deprecated - kept here only for backwards compatibility
    const CLASS_NAME_SHOW = "show";
    const CLASS_NAME_SHOWING = "showing";
    const DefaultType = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    };
    const Default = {
        animation: true,
        autohide: true,
        delay: 5000
    };
    /**
   * Class definition
   */ class Toast extends BaseComponent {
        constructor(element, config){
            super(element, config);
            this._timeout = null;
            this._hasMouseInteraction = false;
            this._hasKeyboardInteraction = false;
            this._setListeners();
        }
        // Getters
        static get Default() {
            return Default;
        }
        static get DefaultType() {
            return DefaultType;
        }
        static get NAME() {
            return NAME;
        }
        // Public
        show() {
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
            if (showEvent.defaultPrevented) return;
            this._clearTimeout();
            if (this._config.animation) this._element.classList.add(CLASS_NAME_FADE);
            const complete = ()=>{
                this._element.classList.remove(CLASS_NAME_SHOWING);
                EventHandler.trigger(this._element, EVENT_SHOWN);
                this._maybeScheduleHide();
            };
            this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
            reflow(this._element);
            this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
            this._queueCallback(complete, this._element, this._config.animation);
        }
        hide() {
            if (!this.isShown()) return;
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
            if (hideEvent.defaultPrevented) return;
            const complete = ()=>{
                this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
                this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
                EventHandler.trigger(this._element, EVENT_HIDDEN);
            };
            this._element.classList.add(CLASS_NAME_SHOWING);
            this._queueCallback(complete, this._element, this._config.animation);
        }
        dispose() {
            this._clearTimeout();
            if (this.isShown()) this._element.classList.remove(CLASS_NAME_SHOW);
            super.dispose();
        }
        isShown() {
            return this._element.classList.contains(CLASS_NAME_SHOW);
        }
        // Private
        _maybeScheduleHide() {
            if (!this._config.autohide) return;
            if (this._hasMouseInteraction || this._hasKeyboardInteraction) return;
            this._timeout = setTimeout(()=>{
                this.hide();
            }, this._config.delay);
        }
        _onInteraction(event, isInteracting) {
            switch(event.type){
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = isInteracting;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = isInteracting;
                    break;
            }
            if (isInteracting) {
                this._clearTimeout();
                return;
            }
            const nextElement = event.relatedTarget;
            if (this._element === nextElement || this._element.contains(nextElement)) return;
            this._maybeScheduleHide();
        }
        _setListeners() {
            EventHandler.on(this._element, EVENT_MOUSEOVER, (event)=>this._onInteraction(event, true));
            EventHandler.on(this._element, EVENT_MOUSEOUT, (event)=>this._onInteraction(event, false));
            EventHandler.on(this._element, EVENT_FOCUSIN, (event)=>this._onInteraction(event, true));
            EventHandler.on(this._element, EVENT_FOCUSOUT, (event)=>this._onInteraction(event, false));
        }
        _clearTimeout() {
            clearTimeout(this._timeout);
            this._timeout = null;
        }
        // Static
        static jQueryInterface(config) {
            return this.each(function() {
                const data = Toast.getOrCreateInstance(this, config);
                if (typeof config === "string") {
                    if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                    data[config](this);
                }
            });
        }
    }
    /**
   * Data API implementation
   */ enableDismissTrigger(Toast);
    /**
   * jQuery
   */ defineJQueryPlugin(Toast);
    /**
   * --------------------------------------------------------------------------
   * Bootstrap index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */ const index_umd = {
        Alert,
        Button,
        Carousel,
        Collapse,
        Dropdown,
        Modal,
        Offcanvas,
        Popover,
        ScrollSpy,
        Tab,
        Toast,
        Tooltip
    };
    return index_umd;
});

},{"43de83584db53a32":"7unqC"}],"7unqC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
parcelHelpers.export(exports, "createPopperBase", ()=>(0, _createPopperJs.createPopper));
parcelHelpers.export(exports, "createPopper", ()=>(0, _popperJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper));
var _enumsJs = require("./enums.js");
parcelHelpers.exportAll(_enumsJs, exports);
var _indexJs = require("./modifiers/index.js"); // eslint-disable-next-line import/no-unused-modules
parcelHelpers.exportAll(_indexJs, exports);
var _createPopperJs = require("./createPopper.js");
var _popperJs = require("./popper.js");
var _popperLiteJs = require("./popper-lite.js");

},{"./enums.js":"lCAq5","./modifiers/index.js":"cap3W","./createPopper.js":"cHuNp","./popper.js":"1PuRF","./popper-lite.js":"gKW1N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCAq5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top);
parcelHelpers.export(exports, "bottom", ()=>bottom);
parcelHelpers.export(exports, "right", ()=>right);
parcelHelpers.export(exports, "left", ()=>left);
parcelHelpers.export(exports, "auto", ()=>auto);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "end", ()=>end);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents);
parcelHelpers.export(exports, "viewport", ()=>viewport);
parcelHelpers.export(exports, "popper", ()=>popper);
parcelHelpers.export(exports, "reference", ()=>reference);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements);
parcelHelpers.export(exports, "placements", ()=>placements);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead);
parcelHelpers.export(exports, "read", ()=>read);
parcelHelpers.export(exports, "afterRead", ()=>afterRead);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain);
parcelHelpers.export(exports, "main", ()=>main);
parcelHelpers.export(exports, "afterMain", ()=>afterMain);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite);
parcelHelpers.export(exports, "write", ()=>write);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead"; // pure-logic modifiers
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain"; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cap3W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyles", ()=>(0, _applyStylesJsDefault.default));
parcelHelpers.export(exports, "arrow", ()=>(0, _arrowJsDefault.default));
parcelHelpers.export(exports, "computeStyles", ()=>(0, _computeStylesJsDefault.default));
parcelHelpers.export(exports, "eventListeners", ()=>(0, _eventListenersJsDefault.default));
parcelHelpers.export(exports, "flip", ()=>(0, _flipJsDefault.default));
parcelHelpers.export(exports, "hide", ()=>(0, _hideJsDefault.default));
parcelHelpers.export(exports, "offset", ()=>(0, _offsetJsDefault.default));
parcelHelpers.export(exports, "popperOffsets", ()=>(0, _popperOffsetsJsDefault.default));
parcelHelpers.export(exports, "preventOverflow", ()=>(0, _preventOverflowJsDefault.default));
var _applyStylesJs = require("./applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _arrowJs = require("./arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _computeStylesJs = require("./computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _eventListenersJs = require("./eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _hideJs = require("./hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _offsetJs = require("./offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _popperOffsetsJs = require("./popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _preventOverflowJs = require("./preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);

},{"./applyStyles.js":"4iMn4","./arrow.js":"31HFW","./computeStyles.js":"gDlm2","./eventListeners.js":"hBKsL","./flip.js":"fv5wq","./hide.js":"2g4OF","./offset.js":"3GKVY","./popperOffsets.js":"6I679","./preventOverflow.js":"1AMhb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4iMn4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? "" : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = "";
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect,
    requires: [
        "computeStyles"
    ]
};

},{"../dom-utils/getNodeName.js":"a2Qom","../dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2Qom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeName);
function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYFUC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === "undefined") return false;
    var OwnElement = (0, _getWindowJsDefault.default)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2SkOo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindow);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31HFW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _containsJs = require("../dom-utils/contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _withinJs = require("../utils/within.js");
var _mergePaddingObjectJs = require("../utils/mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("../utils/expandToHashMap.js");
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var axis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var isVertical = [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = (0, _getLayoutRectJsDefault.default)(arrowElement);
    var minProp = axis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
    var maxProp = axis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, _getOffsetParentJsDefault.default)(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, _withinJs.within)(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!(0, _containsJsDefault.default)(state.elements.popper, arrowElement)) return;
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect,
    requires: [
        "popperOffsets"
    ],
    requiresIfExists: [
        "preventOverflow"
    ]
};

},{"../utils/getBasePlacement.js":"59Wp3","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/contains.js":"4QxRR","../dom-utils/getOffsetParent.js":"laoYw","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/within.js":"3glSz","../utils/mergePaddingObject.js":"lEIf9","../utils/expandToHashMap.js":"iQlH5","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59Wp3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBasePlacement);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split("-")[0];
}

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvjuf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getLayoutRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = (0, _getBoundingClientRectJsDefault.default)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}

},{"./getBoundingClientRect.js":"9CFSQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9CFSQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBoundingClientRect);
var _instanceOfJs = require("./instanceOf.js");
var _mathJs = require("../utils/math.js");
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, _instanceOfJs.isHTMLElement)(element)) {
        scaleX = element.offsetWidth > 0 ? (0, _mathJs.round)(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, _mathJs.round)(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, _instanceOfJs.isElement)(element) ? (0, _getWindowJsDefault.default)(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, _isLayoutViewportJsDefault.default)() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}

},{"./instanceOf.js":"gYFUC","../utils/math.js":"gQqVe","./getWindow.js":"2SkOo","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQqVe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "round", ()=>round);
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ipHv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isLayoutViewport);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test((0, _userAgentJsDefault.default)());
}

},{"../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hEx0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getUAString);
function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
    }).join(" ");
    return navigator.userAgent;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QxRR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>contains);
var _instanceOfJs = require("./instanceOf.js");
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && (0, _instanceOfJs.isShadowRoot)(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    } // Give up, the result is false
    return false;
}

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"laoYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOffsetParent);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function getTrueOffsetParent(element) {
    if (!(0, _instanceOfJs.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, _getComputedStyleJsDefault.default)(element).position === "fixed") return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, _userAgentJsDefault.default)());
    var isIE = /Trident/i.test((0, _userAgentJsDefault.default)());
    if (isIE && (0, _instanceOfJs.isHTMLElement)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, _getComputedStyleJsDefault.default)(element);
        if (elementCss.position === "fixed") return null;
    }
    var currentNode = (0, _getParentNodeJsDefault.default)(element);
    if ((0, _instanceOfJs.isShadowRoot)(currentNode)) currentNode = currentNode.host;
    while((0, _instanceOfJs.isHTMLElement)(currentNode) && [
        "html",
        "body"
    ].indexOf((0, _getNodeNameJsDefault.default)(currentNode)) < 0){
        var css = (0, _getComputedStyleJsDefault.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [
            "transform",
            "perspective"
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = (0, _getWindowJsDefault.default)(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && (0, _isTableElementJsDefault.default)(offsetParent) && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, _getNodeNameJsDefault.default)(offsetParent) === "html" || (0, _getNodeNameJsDefault.default)(offsetParent) === "body" && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")) return window;
    return offsetParent || getContainingBlock(element) || window;
}

},{"./getWindow.js":"2SkOo","./getNodeName.js":"a2Qom","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./isTableElement.js":"2qBb7","./getParentNode.js":"bIHpd","../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3mZjB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getComputedStyle);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return (0, _getWindowJsDefault.default)(element).getComputedStyle(element);
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qBb7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isTableElement);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        "table",
        "td",
        "th"
    ].indexOf((0, _getNodeNameJsDefault.default)(element)) >= 0;
}

},{"./getNodeName.js":"a2Qom","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bIHpd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getParentNode);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if ((0, _getNodeNameJsDefault.default)(element) === "html") return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, _instanceOfJs.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElementJsDefault.default)(element) // fallback
    );
}

},{"./getNodeName.js":"a2Qom","./getDocumentElement.js":"eJ9Y1","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJ9Y1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentElement);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, _instanceOfJs.isElement)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Xlom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getMainAxisFromPlacement);
function getMainAxisFromPlacement(placement) {
    return [
        "top",
        "bottom"
    ].indexOf(placement) >= 0 ? "x" : "y";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3glSz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "within", ()=>within);
parcelHelpers.export(exports, "withinMaxClamp", ()=>withinMaxClamp);
var _mathJs = require("./math.js");
function within(min, value, max) {
    return (0, _mathJs.max)(min, (0, _mathJs.min)(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}

},{"./math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEIf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergePaddingObject);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({}, (0, _getFreshSideObjectJsDefault.default)(), paddingObject);
}

},{"./getFreshSideObject.js":"g4xOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4xOt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getFreshSideObject);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQlH5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>expandToHashMap);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDlm2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles);
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _mathJs = require("../utils/math.js"); // eslint-disable-next-line import/no-unused-modules
var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, _mathJs.round)(x * dpr) / dpr || 0,
        y: (0, _mathJs.round)(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = (0, _enumsJs.left);
    var sideY = (0, _enumsJs.top);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, _getOffsetParentJsDefault.default)(popper);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === (0, _getWindowJsDefault.default)(popper)) {
            offsetParent = (0, _getDocumentElementJsDefault.default)(popper);
            if ((0, _getComputedStyleJsDefault.default)(offsetParent).position !== "static" && position === "absolute") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, _enumsJs.top) || (placement === (0, _enumsJs.left) || placement === (0, _enumsJs.right)) && variation === (0, _enumsJs.end)) {
            sideY = (0, _enumsJs.bottom);
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, _enumsJs.left) || (placement === (0, _enumsJs.top) || placement === (0, _enumsJs.bottom)) && variation === (0, _enumsJs.end)) {
            sideX = (0, _enumsJs.right);
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }, (0, _getWindowJsDefault.default)(popper)) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
        placement: (0, _getBasePlacementJsDefault.default)(state.placement),
        variation: (0, _getVariationJsDefault.default)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
};

},{"../enums.js":"lCAq5","../dom-utils/getOffsetParent.js":"laoYw","../dom-utils/getWindow.js":"2SkOo","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getComputedStyle.js":"3mZjB","../utils/getBasePlacement.js":"59Wp3","../utils/getVariation.js":"hIo7Y","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hIo7Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getVariation);
function getVariation(placement) {
    return placement.split("-")[1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBKsL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, _getWindowJsDefault.default)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
    });
    if (resize) window.addEventListener("resize", instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
        });
        if (resize) window.removeEventListener("resize", instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {},
    effect: effect,
    data: {}
};

},{"../dom-utils/getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fv5wq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOppositePlacementJs = require("../utils/getOppositePlacement.js");
var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getOppositeVariationPlacementJs = require("../utils/getOppositeVariationPlacement.js");
var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(_getOppositeVariationPlacementJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _computeAutoPlacementJs = require("../utils/computeAutoPlacement.js");
var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs);
var _enumsJs = require("../enums.js");
var _getVariationJs = require("../utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
function getExpandedFallbackPlacements(placement) {
    if ((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto)) return [];
    var oppositePlacement = (0, _getOppositePlacementJsDefault.default)(placement);
    return [
        (0, _getOppositeVariationPlacementJsDefault.default)(placement),
        oppositePlacement,
        (0, _getOppositeVariationPlacementJsDefault.default)(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, _getOppositePlacementJsDefault.default)(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto) ? (0, _computeAutoPlacementJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
        var isStartVariation = (0, _getVariationJsDefault.default)(placement) === (0, _enumsJs.start);
        var isVertical = [
            (0, _enumsJs.top),
            (0, _enumsJs.bottom)
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? (0, _enumsJs.right) : (0, _enumsJs.left) : isStartVariation ? (0, _enumsJs.bottom) : (0, _enumsJs.top);
        if (referenceRect[len] > popperRect[len]) mainVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var altVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: [
        "offset"
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"a8CY0","../utils/getBasePlacement.js":"59Wp3","../utils/getOppositeVariationPlacement.js":"bKTLC","../utils/detectOverflow.js":"ltCuw","../utils/computeAutoPlacement.js":"gytMj","../enums.js":"lCAq5","../utils/getVariation.js":"hIo7Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8CY0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOppositePlacement);
var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bKTLC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOppositeVariationPlacement);
var hash = {
    start: "end",
    end: "start"
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ltCuw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>detectOverflow);
var _getClippingRectJs = require("../dom-utils/getClippingRect.js");
var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getBoundingClientRectJs = require("../dom-utils/getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _computeOffsetsJs = require("./computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
var _rectToClientRectJs = require("./rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js");
var _mergePaddingObjectJs = require("./mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("./expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
function detectOverflow(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? (0, _enumsJs.clippingParents) : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? (0, _enumsJs.viewport) : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? (0, _enumsJs.popper) : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
    var altContext = elementContext === (0, _enumsJs.popper) ? (0, _enumsJs.reference) : (0, _enumsJs.popper);
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, _getClippingRectJsDefault.default)((0, _instanceOfJs.isElement)(element) ? element : element.contextElement || (0, _getDocumentElementJsDefault.default)(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = (0, _getBoundingClientRectJsDefault.default)(state.elements.reference);
    var popperOffsets = (0, _computeOffsetsJsDefault.default)({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement: placement
    });
    var popperClientRect = (0, _rectToClientRectJsDefault.default)(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === (0, _enumsJs.popper) ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === (0, _enumsJs.popper) && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                (0, _enumsJs.right),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                (0, _enumsJs.top),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}

},{"../dom-utils/getClippingRect.js":"eeg2s","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getBoundingClientRect.js":"9CFSQ","./computeOffsets.js":"7jtXk","./rectToClientRect.js":"cQ3tg","../enums.js":"lCAq5","../dom-utils/instanceOf.js":"gYFUC","./mergePaddingObject.js":"lEIf9","./expandToHashMap.js":"iQlH5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eeg2s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getClippingRect);
var _enumsJs = require("../enums.js");
var _getViewportRectJs = require("./getViewportRect.js");
var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs);
var _getDocumentRectJs = require("./getDocumentRect.js");
var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs);
var _listScrollParentsJs = require("./listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _rectToClientRectJs = require("../utils/rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _mathJs = require("../utils/math.js");
function getInnerBoundingClientRect(element, strategy) {
    var rect = (0, _getBoundingClientRectJsDefault.default)(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === (0, _enumsJs.viewport) ? (0, _rectToClientRectJsDefault.default)((0, _getViewportRectJsDefault.default)(element, strategy)) : (0, _instanceOfJs.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0, _rectToClientRectJsDefault.default)((0, _getDocumentRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = (0, _listScrollParentsJsDefault.default)((0, _getParentNodeJsDefault.default)(element));
    var canEscapeClipping = [
        "absolute",
        "fixed"
    ].indexOf((0, _getComputedStyleJsDefault.default)(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, _instanceOfJs.isHTMLElement)(element) ? (0, _getOffsetParentJsDefault.default)(element) : element;
    if (!(0, _instanceOfJs.isElement)(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, _instanceOfJs.isElement)(clippingParent) && (0, _containsJsDefault.default)(clippingParent, clipperElement) && (0, _getNodeNameJsDefault.default)(clippingParent) !== "body";
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = (0, _mathJs.max)(rect.top, accRect.top);
        accRect.right = (0, _mathJs.min)(rect.right, accRect.right);
        accRect.bottom = (0, _mathJs.min)(rect.bottom, accRect.bottom);
        accRect.left = (0, _mathJs.max)(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}

},{"../enums.js":"lCAq5","./getViewportRect.js":"cnH2G","./getDocumentRect.js":"d94SC","./listScrollParents.js":"2di3T","./getOffsetParent.js":"laoYw","./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./getBoundingClientRect.js":"9CFSQ","./getParentNode.js":"bIHpd","./contains.js":"4QxRR","./getNodeName.js":"a2Qom","../utils/rectToClientRect.js":"cQ3tg","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnH2G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getViewportRect);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getViewportRect(element, strategy) {
    var win = (0, _getWindowJsDefault.default)(element);
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = (0, _isLayoutViewportJsDefault.default)();
        if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, _getWindowScrollBarXJsDefault.default)(element),
        y: y
    };
}

},{"./getWindow.js":"2SkOo","./getDocumentElement.js":"eJ9Y1","./getWindowScrollBarX.js":"sz4Ld","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sz4Ld":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScrollBarX);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, _getBoundingClientRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)).left + (0, _getWindowScrollJsDefault.default)(element).scrollLeft;
}

},{"./getBoundingClientRect.js":"9CFSQ","./getDocumentElement.js":"eJ9Y1","./getWindowScroll.js":"1XUtN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XUtN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScroll);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = (0, _getWindowJsDefault.default)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d94SC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentRect);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _mathJs = require("../utils/math.js"); // Gets the entire size of the scrollable document area, even extending outside
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var winScroll = (0, _getWindowScrollJsDefault.default)(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, _mathJs.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, _mathJs.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, _getWindowScrollBarXJsDefault.default)(element);
    var y = -winScroll.scrollTop;
    if ((0, _getComputedStyleJsDefault.default)(body || html).direction === "rtl") x += (0, _mathJs.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}

},{"./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./getWindowScrollBarX.js":"sz4Ld","./getWindowScroll.js":"1XUtN","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2di3T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>listScrollParents);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, _getScrollParentJsDefault.default)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, _getWindowJsDefault.default)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, _isScrollParentJsDefault.default)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents((0, _getParentNodeJsDefault.default)(target)));
}

},{"./getScrollParent.js":"jy4ZS","./getParentNode.js":"bIHpd","./getWindow.js":"2SkOo","./isScrollParent.js":"9rLGO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jy4ZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getScrollParent);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        "html",
        "body",
        "#document"
    ].indexOf((0, _getNodeNameJsDefault.default)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, _instanceOfJs.isHTMLElement)(node) && (0, _isScrollParentJsDefault.default)(node)) return node;
    return getScrollParent((0, _getParentNodeJsDefault.default)(node));
}

},{"./getParentNode.js":"bIHpd","./isScrollParent.js":"9rLGO","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rLGO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isScrollParent);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

},{"./getComputedStyle.js":"3mZjB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQ3tg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rectToClientRect);
function rectToClientRect(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jtXk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeOffsets);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, _getBasePlacementJsDefault.default)(placement) : null;
    var variation = placement ? (0, _getVariationJsDefault.default)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch(variation){
            case 0, _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}

},{"./getBasePlacement.js":"59Wp3","./getVariation.js":"hIo7Y","./getMainAxisFromPlacement.js":"1Xlom","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gytMj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeAutoPlacement);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("./detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? (0, _enumsJs.placements) : _options$allowedAutoP;
    var variation = (0, _getVariationJsDefault.default)(placement);
    var placements = variation ? flipVariations ? (0, _enumsJs.variationPlacements) : (0, _enumsJs.variationPlacements).filter(function(placement) {
        return (0, _getVariationJsDefault.default)(placement) === variation;
    }) : (0, _enumsJs.basePlacements);
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) allowedPlacements = placements;
     // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, _getBasePlacementJsDefault.default)(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}

},{"./getVariation.js":"hIo7Y","../enums.js":"lCAq5","./detectOverflow.js":"ltCuw","./getBasePlacement.js":"59Wp3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2g4OF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        (0, _enumsJs.top),
        (0, _enumsJs.right),
        (0, _enumsJs.bottom),
        (0, _enumsJs.left)
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, _detectOverflowJsDefault.default)(state, {
        elementContext: "reference"
    });
    var popperAltOverflow = (0, _detectOverflowJsDefault.default)(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
        "preventOverflow"
    ],
    fn: hide
};

},{"../enums.js":"lCAq5","../utils/detectOverflow.js":"ltCuw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GKVY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distanceAndSkiddingToXY", ()=>distanceAndSkiddingToXY);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
    var invertDistance = [
        (0, _enumsJs.left),
        (0, _enumsJs.top)
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = (0, _enumsJs.placements).reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
        "popperOffsets"
    ],
    fn: offset
};

},{"../utils/getBasePlacement.js":"59Wp3","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6I679":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, _computeOffsetsJsDefault.default)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
};

},{"../utils/computeOffsets.js":"7jtXk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1AMhb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _getAltAxisJs = require("../utils/getAltAxis.js");
var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs);
var _withinJs = require("../utils/within.js");
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getFreshSideObjectJs = require("../utils/getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
var _mathJs = require("../utils/math.js");
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, _detectOverflowJsDefault.default)(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var variation = (0, _getVariationJsDefault.default)(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var altAxis = (0, _getAltAxisJsDefault.default)(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var altSide = mainAxis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var len = mainAxis === "y" ? "height" : "width";
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === (0, _enumsJs.start) ? referenceRect[len] : popperRect[len];
        var maxLen = variation === (0, _enumsJs.start) ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, _getLayoutRectJsDefault.default)(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : (0, _getFreshSideObjectJsDefault.default)();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, _withinJs.within)(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParentJsDefault.default)(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, _withinJs.within)(tether ? (0, _mathJs.min)(min, tetherMin) : min, offset, tether ? (0, _mathJs.max)(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var _altSide = mainAxis === "x" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            (0, _enumsJs.top),
            (0, _enumsJs.left)
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, _withinJs.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0, _withinJs.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: [
        "offset"
    ]
};

},{"../enums.js":"lCAq5","../utils/getBasePlacement.js":"59Wp3","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/getAltAxis.js":"59FWE","../utils/within.js":"3glSz","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/getOffsetParent.js":"laoYw","../utils/detectOverflow.js":"ltCuw","../utils/getVariation.js":"hIo7Y","../utils/getFreshSideObject.js":"g4xOt","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59FWE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getAltAxis);
function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cHuNp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _detectOverflowJsDefault.default));
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, _instanceOfJs.isElement)(reference) ? (0, _listScrollParentsJsDefault.default)(reference) : reference.contextElement ? (0, _listScrollParentsJsDefault.default)(reference.contextElement) : [],
                    popper: (0, _listScrollParentsJsDefault.default)(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, _orderModifiersJsDefault.default)((0, _mergeByNameJsDefault.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                });
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) return;
                 // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, _getCompositeRectJsDefault.default)(reference, (0, _getOffsetParentJsDefault.default)(popper), state.options.strategy === "fixed"),
                    popper: (0, _getLayoutRectJsDefault.default)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === "function") state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, _debounceJsDefault.default)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference, popper)) return instance;
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref) {
                var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                if (typeof effect === "function") {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

},{"./dom-utils/getCompositeRect.js":"ijPls","./dom-utils/getLayoutRect.js":"jvjuf","./dom-utils/listScrollParents.js":"2di3T","./dom-utils/getOffsetParent.js":"laoYw","./utils/orderModifiers.js":"N0VO0","./utils/debounce.js":"g6Chr","./utils/mergeByName.js":"2zTVN","./utils/detectOverflow.js":"ltCuw","./dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijPls":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getCompositeRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _mathJs = require("../utils/math.js");
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, _mathJs.round)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, _mathJs.round)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, _instanceOfJs.isHTMLElement)(offsetParent);
    var offsetParentIsScaled = (0, _instanceOfJs.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
    var documentElement = (0, _getDocumentElementJsDefault.default)(offsetParent);
    var rect = (0, _getBoundingClientRectJsDefault.default)(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _getNodeNameJsDefault.default)(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
        (0, _isScrollParentJsDefault.default)(documentElement)) scroll = (0, _getNodeScrollJsDefault.default)(offsetParent);
        if ((0, _instanceOfJs.isHTMLElement)(offsetParent)) {
            offsets = (0, _getBoundingClientRectJsDefault.default)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, _getWindowScrollBarXJsDefault.default)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}

},{"./getBoundingClientRect.js":"9CFSQ","./getNodeScroll.js":"bBjCr","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","./getWindowScrollBarX.js":"sz4Ld","./getDocumentElement.js":"eJ9Y1","./isScrollParent.js":"9rLGO","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBjCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeScroll);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === (0, _getWindowJsDefault.default)(node) || !(0, _instanceOfJs.isHTMLElement)(node)) return (0, _getWindowScrollJsDefault.default)(node);
    else return (0, _getHTMLElementScrollJsDefault.default)(node);
}

},{"./getWindowScroll.js":"1XUtN","./getWindow.js":"2SkOo","./instanceOf.js":"gYFUC","./getHTMLElementScroll.js":"6pwY2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pwY2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getHTMLElementScroll);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"N0VO0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>orderModifiers);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return (0, _enumsJs.modifierPhases).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6Chr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>debounce);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zTVN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeByName);
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1PuRF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopper", ()=>createPopper) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _offsetJs = require("./modifiers/offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _flipJs = require("./modifiers/flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _preventOverflowJs = require("./modifiers/preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);
var _arrowJs = require("./modifiers/arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _hideJs = require("./modifiers/hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _popperLiteJs = require("./popper-lite.js");
var _indexJs = require("./modifiers/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default),
    (0, _offsetJsDefault.default),
    (0, _flipJsDefault.default),
    (0, _preventOverflowJsDefault.default),
    (0, _arrowJsDefault.default),
    (0, _hideJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"cHuNp","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","./modifiers/offset.js":"3GKVY","./modifiers/flip.js":"fv5wq","./modifiers/preventOverflow.js":"1AMhb","./modifiers/arrow.js":"31HFW","./modifiers/hide.js":"2g4OF","./popper-lite.js":false,"./modifiers/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gKW1N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"cHuNp","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"87yWV":[function() {},{}],"kXs5O":[function() {},{}],"1tCWG":[function(require,module,exports) {
(function(root, factory) {
    if (typeof define === "function" && define.amd) define(factory);
    else module.exports = factory();
})(this, function() {
    var NProgress = {};
    NProgress.version = "0.2.0";
    var Settings = NProgress.settings = {
        minimum: 0.08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: true,
        trickleRate: 0.02,
        trickleSpeed: 800,
        showSpinner: true,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */ NProgress.configure = function(options) {
        var key, value;
        for(key in options){
            value = options[key];
            if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
        }
        return this;
    };
    /**
   * Last number.
   */ NProgress.status = null;
    /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */ NProgress.set = function(n) {
        var started = NProgress.isStarted();
        n = clamp(n, Settings.minimum, 1);
        NProgress.status = n === 1 ? null : n;
        var progress = NProgress.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
        progress.offsetWidth; /* Repaint */ 
        queue(function(next) {
            // Set positionUsing if it hasn't already been set
            if (Settings.positionUsing === "") Settings.positionUsing = NProgress.getPositioningCSS();
            // Add transition
            css(bar, barPositionCSS(n, speed, ease));
            if (n === 1) {
                // Fade out
                css(progress, {
                    transition: "none",
                    opacity: 1
                });
                progress.offsetWidth; /* Repaint */ 
                setTimeout(function() {
                    css(progress, {
                        transition: "all " + speed + "ms linear",
                        opacity: 0
                    });
                    setTimeout(function() {
                        NProgress.remove();
                        next();
                    }, speed);
                }, speed);
            } else setTimeout(next, speed);
        });
        return this;
    };
    NProgress.isStarted = function() {
        return typeof NProgress.status === "number";
    };
    /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */ NProgress.start = function() {
        if (!NProgress.status) NProgress.set(0);
        var work = function() {
            setTimeout(function() {
                if (!NProgress.status) return;
                NProgress.trickle();
                work();
            }, Settings.trickleSpeed);
        };
        if (Settings.trickle) work();
        return this;
    };
    /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */ NProgress.done = function(force) {
        if (!force && !NProgress.status) return this;
        return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
    };
    /**
   * Increments by a random amount.
   */ NProgress.inc = function(amount) {
        var n = NProgress.status;
        if (!n) return NProgress.start();
        else {
            if (typeof amount !== "number") amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
            n = clamp(n + amount, 0, 0.994);
            return NProgress.set(n);
        }
    };
    NProgress.trickle = function() {
        return NProgress.inc(Math.random() * Settings.trickleRate);
    };
    /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */ (function() {
        var initial = 0, current = 0;
        NProgress.promise = function($promise) {
            if (!$promise || $promise.state() === "resolved") return this;
            if (current === 0) NProgress.start();
            initial++;
            current++;
            $promise.always(function() {
                current--;
                if (current === 0) {
                    initial = 0;
                    NProgress.done();
                } else NProgress.set((initial - current) / initial);
            });
            return this;
        };
    })();
    /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */ NProgress.render = function(fromStart) {
        if (NProgress.isRendered()) return document.getElementById("nprogress");
        addClass(document.documentElement, "nprogress-busy");
        var progress = document.createElement("div");
        progress.id = "nprogress";
        progress.innerHTML = Settings.template;
        var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress.status || 0), parent = document.querySelector(Settings.parent), spinner;
        css(bar, {
            transition: "all 0 linear",
            transform: "translate3d(" + perc + "%,0,0)"
        });
        if (!Settings.showSpinner) {
            spinner = progress.querySelector(Settings.spinnerSelector);
            spinner && removeElement(spinner);
        }
        if (parent != document.body) addClass(parent, "nprogress-custom-parent");
        parent.appendChild(progress);
        return progress;
    };
    /**
   * Removes the element. Opposite of render().
   */ NProgress.remove = function() {
        removeClass(document.documentElement, "nprogress-busy");
        removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
        var progress = document.getElementById("nprogress");
        progress && removeElement(progress);
    };
    /**
   * Checks if the progress bar is rendered.
   */ NProgress.isRendered = function() {
        return !!document.getElementById("nprogress");
    };
    /**
   * Determine which positioning CSS rule to use.
   */ NProgress.getPositioningCSS = function() {
        // Sniff on document.body.style
        var bodyStyle = document.body.style;
        // Sniff prefixes
        var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
        if (vendorPrefix + "Perspective" in bodyStyle) // Modern browsers with 3D support, e.g. Webkit, IE10
        return "translate3d";
        else if (vendorPrefix + "Transform" in bodyStyle) // Browsers without 3D support, e.g. IE9
        return "translate";
        else // Browsers without translate() support, e.g. IE7-8
        return "margin";
    };
    /**
   * Helpers
   */ function clamp(n, min, max) {
        if (n < min) return min;
        if (n > max) return max;
        return n;
    }
    /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */ function toBarPerc(n) {
        return (-1 + n) * 100;
    }
    /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */ function barPositionCSS(n, speed, ease) {
        var barCSS;
        if (Settings.positionUsing === "translate3d") barCSS = {
            transform: "translate3d(" + toBarPerc(n) + "%,0,0)"
        };
        else if (Settings.positionUsing === "translate") barCSS = {
            transform: "translate(" + toBarPerc(n) + "%,0)"
        };
        else barCSS = {
            "margin-left": toBarPerc(n) + "%"
        };
        barCSS.transition = "all " + speed + "ms " + ease;
        return barCSS;
    }
    /**
   * (Internal) Queues a function to be executed.
   */ var queue = function() {
        var pending = [];
        function next() {
            var fn = pending.shift();
            if (fn) fn(next);
        }
        return function(fn) {
            pending.push(fn);
            if (pending.length == 1) next();
        };
    }();
    /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */ var css = function() {
        var cssPrefixes = [
            "Webkit",
            "O",
            "Moz",
            "ms"
        ], cssProps = {};
        function camelCase(string) {
            return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
                return letter.toUpperCase();
            });
        }
        function getVendorProp(name) {
            var style = document.body.style;
            if (name in style) return name;
            var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
            while(i--){
                vendorName = cssPrefixes[i] + capName;
                if (vendorName in style) return vendorName;
            }
            return name;
        }
        function getStyleProp(name) {
            name = camelCase(name);
            return cssProps[name] || (cssProps[name] = getVendorProp(name));
        }
        function applyCss(element, prop, value) {
            prop = getStyleProp(prop);
            element.style[prop] = value;
        }
        return function(element, properties) {
            var args = arguments, prop, value;
            if (args.length == 2) for(prop in properties){
                value = properties[prop];
                if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
            }
            else applyCss(element, args[1], args[2]);
        };
    }();
    /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */ function hasClass(element, name) {
        var list = typeof element == "string" ? element : classList(element);
        return list.indexOf(" " + name + " ") >= 0;
    }
    /**
   * (Internal) Adds a class to an element.
   */ function addClass(element, name) {
        var oldList = classList(element), newList = oldList + name;
        if (hasClass(oldList, name)) return;
        // Trim the opening space.
        element.className = newList.substring(1);
    }
    /**
   * (Internal) Removes a class from an element.
   */ function removeClass(element, name) {
        var oldList = classList(element), newList;
        if (!hasClass(element, name)) return;
        // Replace the class name.
        newList = oldList.replace(" " + name + " ", " ");
        // Trim the opening and closing spaces.
        element.className = newList.substring(1, newList.length - 1);
    }
    /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */ function classList(element) {
        return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
    }
    /**
   * (Internal) Removes an element from the DOM.
   */ function removeElement(element) {
        element && element.parentNode && element.parentNode.removeChild(element);
    }
    return NProgress;
});

},{}],"jcT59":[function(require,module,exports) {
// Copyright (C) Digital Jetty Konrad Gadzinowski
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PagesCtrl", ()=>PagesCtrl);
class PagesCtrl {
    constructor(){
        this.pages = new Array();
        this.addPage = (page)=>{
            this.pages.push(page);
        };
        this.setPjax = (pjax)=>{
            this.pjax = pjax;
        };
        this.getCurrentPageId = ()=>{
            if (!this.currentPage) return "";
            return this.currentPage.getPageId();
        };
        this.setupPage = ()=>{
            this.closePage();
            let page = this.executeCurrentPageLogic();
            if (page) this.currentPage = page;
        };
        this.closePage = ()=>{
            if (this.currentPage) {
                this.currentPage.onPageClose();
                this.currentPage = null;
            }
        };
        this.executeCurrentPageLogic = ()=>{
            const pageIdElement = document.querySelector("#pageId");
            if (!pageIdElement) return;
            const pageId = pageIdElement.innerText;
            pageIdElement.parentNode.removeChild(pageIdElement);
            if (!pageId || pageId.length === 0) return;
            for(let i = 0; i < this.pages.length; i++){
                let page = this.pages[i];
                if (pageId == page.getPageId()) {
                    page.execute(this.pjax);
                    return page;
                }
            }
            return null;
        };
        this.pages = new Array();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gCcLc":[function(require,module,exports) {
// Copyright (C) Digital Jetty Konrad Gadzinowski
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Form", ()=>Form);
class Form {
    static #_ = this.setupForms = ()=>{
        // Validate forms
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll(".needs-validation");
        // Loop over them and prevent submission
        for (const form of forms){
            // In Firefox, check validity on submit button click. You can't prevent form submit event on Firefox.
            const submitButtons = form.querySelectorAll("button[type=submit]") ?? [];
            for (const button of submitButtons)// Handle submit event
            button.addEventListener("click", (event)=>{
                form.classList.add("was-validated");
                // Validate form
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                }
                return true;
            }, true);
            // Handle submit event
            form.addEventListener("submit", (event)=>{
                form.classList.add("was-validated");
                // Validate form
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                }
                // If valid block all submit buttons, so that they can't be clicked again
                const submitButtons = form.querySelectorAll("button[type=submit]");
                for (const button of submitButtons){
                    button.type = "button";
                    button.disabled = "true";
                }
            }, true);
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kNC6N":[function() {},{}],"362eY":[function() {},{}],"5NKOb":[function() {},{}],"a7dli":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PageEditPost", ()=>PageEditPost);
var _mediumEditorMinJs = require("medium-editor/dist/js/medium-editor.min.js");
var _mediumEditorMinJsDefault = parcelHelpers.interopDefault(_mediumEditorMinJs);
var _mediumEditorMinCss = require("medium-editor/dist/css/medium-editor.min.css");
var _beagleMinCss = require("medium-editor/dist/css/themes/beagle.min.css");
class PageEditPost {
    constructor(){
        this.getPageId = ()=>"edit-post";
        this.execute = ()=>{
            new (0, _mediumEditorMinJsDefault.default)('textarea[name="description"]', {});
            new (0, _mediumEditorMinJsDefault.default)('textarea[name="content"]', {});
        };
        this.onPageClose = ()=>{};
    }
}

},{"medium-editor/dist/js/medium-editor.min.js":"4EszY","medium-editor/dist/css/medium-editor.min.css":"8VANX","medium-editor/dist/css/themes/beagle.min.css":"hEPkU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4EszY":[function(require,module,exports) {
var process = require("23048dfa5b63f62d");
"classList" in document.createElement("_") || !function(a) {
    "use strict";
    if ("Element" in a) {
        var b = "classList", c = "prototype", d = a.Element[c], e = Object, f = String[c].trim || function() {
            return this.replace(/^\s+|\s+$/g, "");
        }, g = Array[c].indexOf || function(a) {
            for(var b = 0, c = this.length; c > b; b++)if (b in this && this[b] === a) return b;
            return -1;
        }, h = function(a, b) {
            this.name = a, this.code = DOMException[a], this.message = b;
        }, i = function(a, b) {
            if ("" === b) throw new h("SYNTAX_ERR", "An invalid or illegal string was specified");
            if (/\s/.test(b)) throw new h("INVALID_CHARACTER_ERR", "String contains an invalid character");
            return g.call(a, b);
        }, j = function(a) {
            for(var b = f.call(a.getAttribute("class") || ""), c = b ? b.split(/\s+/) : [], d = 0, e = c.length; e > d; d++)this.push(c[d]);
            this._updateClassName = function() {
                a.setAttribute("class", this.toString());
            };
        }, k = j[c] = [], l = function() {
            return new j(this);
        };
        if (h[c] = Error[c], k.item = function(a) {
            return this[a] || null;
        }, k.contains = function(a) {
            return a += "", -1 !== i(this, a);
        }, k.add = function() {
            var a, b = arguments, c = 0, d = b.length, e = !1;
            do a = b[c] + "", -1 === i(this, a) && (this.push(a), e = !0);
            while (++c < d);
            e && this._updateClassName();
        }, k.remove = function() {
            var a, b, c = arguments, d = 0, e = c.length, f = !1;
            do for(a = c[d] + "", b = i(this, a); -1 !== b;)this.splice(b, 1), f = !0, b = i(this, a);
            while (++d < e);
            f && this._updateClassName();
        }, k.toggle = function(a, b) {
            a += "";
            var c = this.contains(a), d = c ? b !== !0 && "remove" : b !== !1 && "add";
            return d && this[d](a), b === !0 || b === !1 ? b : !c;
        }, k.toString = function() {
            return this.join(" ");
        }, e.defineProperty) {
            var m = {
                get: l,
                enumerable: !0,
                configurable: !0
            };
            try {
                e.defineProperty(d, b, m);
            } catch (n) {
                -2146823252 === n.number && (m.enumerable = !1, e.defineProperty(d, b, m));
            }
        } else e[c].__defineGetter__ && d.__defineGetter__(b, l);
    }
}(self), function(a) {
    "use strict";
    if (a.URL = a.URL || a.webkitURL, a.Blob && a.URL) try {
        return void new Blob;
    } catch (b) {}
    var c = a.BlobBuilder || a.WebKitBlobBuilder || a.MozBlobBuilder || function(a) {
        var b = function(a) {
            return Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1];
        }, c = function() {
            this.data = [];
        }, d = function(a, b, c) {
            this.data = a, this.size = a.length, this.type = b, this.encoding = c;
        }, e = c.prototype, f = d.prototype, g = a.FileReaderSync, h = function(a) {
            this.code = this[this.name = a];
        }, i = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "), j = i.length, k = a.URL || a.webkitURL || a, l = k.createObjectURL, m = k.revokeObjectURL, n = k, o = a.btoa, p = a.atob, q = a.ArrayBuffer, r = a.Uint8Array, s = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
        for(d.fake = f.fake = !0; j--;)h.prototype[i[j]] = j + 1;
        return k.createObjectURL || (n = a.URL = function(a) {
            var b, c = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
            return c.href = a, "origin" in c || ("data:" === c.protocol.toLowerCase() ? c.origin = null : (b = a.match(s), c.origin = b && b[1])), c;
        }), n.createObjectURL = function(a) {
            var b, c = a.type;
            return null === c && (c = "application/octet-stream"), a instanceof d ? (b = "data:" + c, "base64" === a.encoding ? b + ";base64," + a.data : "URI" === a.encoding ? b + "," + decodeURIComponent(a.data) : o ? b + ";base64," + o(a.data) : b + "," + encodeURIComponent(a.data)) : l ? l.call(k, a) : void 0;
        }, n.revokeObjectURL = function(a) {
            "data:" !== a.substring(0, 5) && m && m.call(k, a);
        }, e.append = function(a) {
            var c = this.data;
            if (r && (a instanceof q || a instanceof r)) {
                for(var e = "", f = new r(a), i = 0, j = f.length; j > i; i++)e += String.fromCharCode(f[i]);
                c.push(e);
            } else if ("Blob" === b(a) || "File" === b(a)) {
                if (!g) throw new h("NOT_READABLE_ERR");
                var k = new g;
                c.push(k.readAsBinaryString(a));
            } else a instanceof d ? "base64" === a.encoding && p ? c.push(p(a.data)) : "URI" === a.encoding ? c.push(decodeURIComponent(a.data)) : "raw" === a.encoding && c.push(a.data) : ("string" != typeof a && (a += ""), c.push(unescape(encodeURIComponent(a))));
        }, e.getBlob = function(a) {
            return arguments.length || (a = null), new d(this.data.join(""), a, "raw");
        }, e.toString = function() {
            return "[object BlobBuilder]";
        }, f.slice = function(a, b, c) {
            var e = arguments.length;
            return 3 > e && (c = null), new d(this.data.slice(a, e > 1 ? b : this.data.length), c, this.encoding);
        }, f.toString = function() {
            return "[object Blob]";
        }, f.close = function() {
            this.size = 0, delete this.data;
        }, c;
    }(a);
    a.Blob = function(a, b) {
        var d = b ? b.type || "" : "", e = new c;
        if (a) for(var f = 0, g = a.length; g > f; f++)Uint8Array && a[f] instanceof Uint8Array ? e.append(a[f].buffer) : e.append(a[f]);
        var h = e.getBlob(d);
        return !h.slice && h.webkitSlice && (h.slice = h.webkitSlice), h;
    };
    var d = Object.getPrototypeOf || function(a) {
        return a.__proto__;
    };
    a.Blob.prototype = d(new a.Blob);
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content || this), function(a, b) {
    "use strict";
    var c = "undefined" != typeof process && process && process.versions && process.versions.electron;
    c || false ? "function" == typeof define && define.amd ? define(function() {
        return b;
    }) : a.MediumEditor = b : module.exports = b;
}(this, function() {
    "use strict";
    function a(a, b) {
        return this.init(a, b);
    }
    return a.extensions = {}, function(b) {
        function c(a, b) {
            var c, d = Array.prototype.slice.call(arguments, 2);
            b = b || {};
            for(var e = 0; e < d.length; e++){
                var f = d[e];
                if (f) for(c in f)f.hasOwnProperty(c) && "undefined" != typeof f[c] && (a || b.hasOwnProperty(c) === !1) && (b[c] = f[c]);
            }
            return b;
        }
        var d = !1;
        try {
            var e = document.createElement("div"), f = document.createTextNode(" ");
            e.appendChild(f), d = e.contains(f);
        } catch (g) {}
        var h = {
            isIE: "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && null !== new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent),
            isEdge: null !== /Edge\/\d+/.exec(navigator.userAgent),
            isFF: navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
            isMac: b.navigator.platform.toUpperCase().indexOf("MAC") >= 0,
            keyCode: {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                ESCAPE: 27,
                SPACE: 32,
                DELETE: 46,
                K: 75,
                M: 77,
                V: 86
            },
            isMetaCtrlKey: function(a) {
                return !!(h.isMac && a.metaKey || !h.isMac && a.ctrlKey);
            },
            isKey: function(a, b) {
                var c = h.getKeyCode(a);
                return !1 === Array.isArray(b) ? c === b : -1 !== b.indexOf(c);
            },
            getKeyCode: function(a) {
                var b = a.which;
                return null === b && (b = null !== a.charCode ? a.charCode : a.keyCode), b;
            },
            blockContainerElementNames: [
                "p",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "blockquote",
                "pre",
                "ul",
                "li",
                "ol",
                "address",
                "article",
                "aside",
                "audio",
                "canvas",
                "dd",
                "dl",
                "dt",
                "fieldset",
                "figcaption",
                "figure",
                "footer",
                "form",
                "header",
                "hgroup",
                "main",
                "nav",
                "noscript",
                "output",
                "section",
                "video",
                "table",
                "thead",
                "tbody",
                "tfoot",
                "tr",
                "th",
                "td"
            ],
            emptyElementNames: [
                "br",
                "col",
                "colgroup",
                "hr",
                "img",
                "input",
                "source",
                "wbr"
            ],
            extend: function() {
                var a = [
                    !0
                ].concat(Array.prototype.slice.call(arguments));
                return c.apply(this, a);
            },
            defaults: function() {
                var a = [
                    !1
                ].concat(Array.prototype.slice.call(arguments));
                return c.apply(this, a);
            },
            createLink: function(a, b, c, d) {
                var e = a.createElement("a");
                return h.moveTextRangeIntoElement(b[0], b[b.length - 1], e), e.setAttribute("href", c), d && ("_blank" === d && e.setAttribute("rel", "noopener noreferrer"), e.setAttribute("target", d)), e;
            },
            findOrCreateMatchingTextNodes: function(a, b, c) {
                for(var d = a.createTreeWalker(b, NodeFilter.SHOW_ALL, null, !1), e = [], f = 0, g = !1, i = null, j = null; null !== (i = d.nextNode());)if (!(i.nodeType > 3)) {
                    if (3 === i.nodeType) {
                        if (!g && c.start < f + i.nodeValue.length && (g = !0, j = h.splitStartNodeIfNeeded(i, c.start, f)), g && h.splitEndNodeIfNeeded(i, j, c.end, f), g && f === c.end) break;
                        if (g && f > c.end + 1) throw new Error("PerformLinking overshot the target!");
                        g && e.push(j || i), f += i.nodeValue.length, null !== j && (f += j.nodeValue.length, d.nextNode()), j = null;
                    } else "img" === i.tagName.toLowerCase() && (!g && c.start <= f && (g = !0), g && e.push(i));
                }
                return e;
            },
            splitStartNodeIfNeeded: function(a, b, c) {
                return b !== c ? a.splitText(b - c) : null;
            },
            splitEndNodeIfNeeded: function(a, b, c, d) {
                var e, f;
                e = d + a.nodeValue.length + (b ? b.nodeValue.length : 0) - 1, f = c - d - (b ? a.nodeValue.length : 0), e >= c && d !== e && 0 !== f && (b || a).splitText(f);
            },
            splitByBlockElements: function(b) {
                if (3 !== b.nodeType && 1 !== b.nodeType) return [];
                var c = [], d = a.util.blockContainerElementNames.join(",");
                if (3 === b.nodeType || 0 === b.querySelectorAll(d).length) return [
                    b
                ];
                for(var e = 0; e < b.childNodes.length; e++){
                    var f = b.childNodes[e];
                    if (3 === f.nodeType) c.push(f);
                    else if (1 === f.nodeType) {
                        var g = f.querySelectorAll(d);
                        0 === g.length ? c.push(f) : c = c.concat(a.util.splitByBlockElements(f));
                    }
                }
                return c;
            },
            findAdjacentTextNodeWithContent: function(a, b, c) {
                var d, e = !1, f = c.createNodeIterator(a, NodeFilter.SHOW_TEXT, null, !1);
                for(d = f.nextNode(); d;){
                    if (d === b) e = !0;
                    else if (e && 3 === d.nodeType && d.nodeValue && d.nodeValue.trim().length > 0) break;
                    d = f.nextNode();
                }
                return d;
            },
            findPreviousSibling: function(a) {
                if (!a || h.isMediumEditorElement(a)) return !1;
                for(var b = a.previousSibling; !b && !h.isMediumEditorElement(a.parentNode);)a = a.parentNode, b = a.previousSibling;
                return b;
            },
            isDescendant: function(a, b, c) {
                if (!a || !b) return !1;
                if (a === b) return !!c;
                if (1 !== a.nodeType) return !1;
                if (d || 3 !== b.nodeType) return a.contains(b);
                for(var e = b.parentNode; null !== e;){
                    if (e === a) return !0;
                    e = e.parentNode;
                }
                return !1;
            },
            isElement: function(a) {
                return !(!a || 1 !== a.nodeType);
            },
            throttle: function(a, b) {
                var c, d, e, f = 50, g = null, h = 0, i = function() {
                    h = Date.now(), g = null, e = a.apply(c, d), g || (c = d = null);
                };
                return b || 0 === b || (b = f), function() {
                    var f = Date.now(), j = b - (f - h);
                    return c = this, d = arguments, 0 >= j || j > b ? (g && (clearTimeout(g), g = null), h = f, e = a.apply(c, d), g || (c = d = null)) : g || (g = setTimeout(i, j)), e;
                };
            },
            traverseUp: function(a, b) {
                if (!a) return !1;
                do {
                    if (1 === a.nodeType) {
                        if (b(a)) return a;
                        if (h.isMediumEditorElement(a)) return !1;
                    }
                    a = a.parentNode;
                }while (a);
                return !1;
            },
            htmlEntities: function(a) {
                return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
            },
            insertHTMLCommand: function(b, c) {
                var d, e, f, g, i, j, k, l = !1, m = [
                    "insertHTML",
                    !1,
                    c
                ];
                if (!a.util.isEdge && b.queryCommandSupported("insertHTML")) try {
                    return b.execCommand.apply(b, m);
                } catch (n) {}
                if (d = b.getSelection(), d.rangeCount) {
                    if (e = d.getRangeAt(0), k = e.commonAncestorContainer, h.isMediumEditorElement(k) && !k.firstChild) e.selectNode(k.appendChild(b.createTextNode("")));
                    else if (3 === k.nodeType && 0 === e.startOffset && e.endOffset === k.nodeValue.length || 3 !== k.nodeType && k.innerHTML === e.toString()) {
                        for(; !h.isMediumEditorElement(k) && k.parentNode && 1 === k.parentNode.childNodes.length && !h.isMediumEditorElement(k.parentNode);)k = k.parentNode;
                        e.selectNode(k);
                    }
                    for(e.deleteContents(), f = b.createElement("div"), f.innerHTML = c, g = b.createDocumentFragment(); f.firstChild;)i = f.firstChild, j = g.appendChild(i);
                    e.insertNode(g), j && (e = e.cloneRange(), e.setStartAfter(j), e.collapse(!0), a.selection.selectRange(b, e)), l = !0;
                }
                return b.execCommand.callListeners && b.execCommand.callListeners(m, l), l;
            },
            execFormatBlock: function(b, c) {
                var d, e = h.getTopBlockContainer(a.selection.getSelectionStart(b));
                if ("blockquote" === c) {
                    if (e && (d = Array.prototype.slice.call(e.childNodes), d.some(function(a) {
                        return h.isBlockContainer(a);
                    }))) return b.execCommand("outdent", !1, null);
                    if (h.isIE) return b.execCommand("indent", !1, c);
                }
                if (e && c === e.nodeName.toLowerCase() && (c = "p"), h.isIE && (c = "<" + c + ">"), e && "blockquote" === e.nodeName.toLowerCase()) {
                    if (h.isIE && "<p>" === c) return b.execCommand("outdent", !1, c);
                    if ((h.isFF || h.isEdge) && "p" === c) return d = Array.prototype.slice.call(e.childNodes), d.some(function(a) {
                        return !h.isBlockContainer(a);
                    }) && b.execCommand("formatBlock", !1, c), b.execCommand("outdent", !1, c);
                }
                return b.execCommand("formatBlock", !1, c);
            },
            setTargetBlank: function(a, b) {
                var c, d = b || !1;
                if ("a" === a.nodeName.toLowerCase()) a.target = "_blank", a.rel = "noopener noreferrer";
                else for(a = a.getElementsByTagName("a"), c = 0; c < a.length; c += 1)!1 !== d && d !== a[c].attributes.href.value || (a[c].target = "_blank", a[c].rel = "noopener noreferrer");
            },
            removeTargetBlank: function(a, b) {
                var c;
                if ("a" === a.nodeName.toLowerCase()) a.removeAttribute("target"), a.removeAttribute("rel");
                else for(a = a.getElementsByTagName("a"), c = 0; c < a.length; c += 1)b === a[c].attributes.href.value && (a[c].removeAttribute("target"), a[c].removeAttribute("rel"));
            },
            addClassToAnchors: function(a, b) {
                var c, d, e = b.split(" ");
                if ("a" === a.nodeName.toLowerCase()) for(d = 0; d < e.length; d += 1)a.classList.add(e[d]);
                else {
                    var f = a.getElementsByTagName("a");
                    if (0 === f.length) {
                        var g = h.getClosestTag(a, "a");
                        a = g ? [
                            g
                        ] : [];
                    } else a = f;
                    for(c = 0; c < a.length; c += 1)for(d = 0; d < e.length; d += 1)a[c].classList.add(e[d]);
                }
            },
            isListItem: function(a) {
                if (!a) return !1;
                if ("li" === a.nodeName.toLowerCase()) return !0;
                for(var b = a.parentNode, c = b.nodeName.toLowerCase(); "li" === c || !h.isBlockContainer(b) && "div" !== c;){
                    if ("li" === c) return !0;
                    if (b = b.parentNode, !b) return !1;
                    c = b.nodeName.toLowerCase();
                }
                return !1;
            },
            cleanListDOM: function(b, c) {
                if ("li" === c.nodeName.toLowerCase()) {
                    var d = c.parentElement;
                    "p" === d.parentElement.nodeName.toLowerCase() && (h.unwrap(d.parentElement, b), a.selection.moveCursor(b, c.firstChild, c.firstChild.textContent.length));
                }
            },
            splitOffDOMTree: function(a, b, c) {
                for(var d = b, e = null, f = !c; d !== a;){
                    var g, h = d.parentNode, i = h.cloneNode(!1), j = f ? d : h.firstChild;
                    for(e && (f ? i.appendChild(e) : g = e), e = i; j;){
                        var k = j.nextSibling;
                        j === d ? (j.hasChildNodes() ? j = j.cloneNode(!1) : j.parentNode.removeChild(j), j.textContent && e.appendChild(j), j = f ? k : null) : (j.parentNode.removeChild(j), (j.hasChildNodes() || j.textContent) && e.appendChild(j), j = k);
                    }
                    g && e.appendChild(g), d = h;
                }
                return e;
            },
            moveTextRangeIntoElement: function(a, b, c) {
                if (!a || !b) return !1;
                var d = h.findCommonRoot(a, b);
                if (!d) return !1;
                if (b === a) {
                    var e = a.parentNode, f = a.nextSibling;
                    return e.removeChild(a), c.appendChild(a), f ? e.insertBefore(c, f) : e.appendChild(c), c.hasChildNodes();
                }
                for(var g, i, j, k = [], l = 0; l < d.childNodes.length; l++)if (j = d.childNodes[l], g) {
                    if (h.isDescendant(j, b, !0)) {
                        i = j;
                        break;
                    }
                    k.push(j);
                } else h.isDescendant(j, a, !0) && (g = j);
                var m = i.nextSibling, n = d.ownerDocument.createDocumentFragment();
                return g === a ? (g.parentNode.removeChild(g), n.appendChild(g)) : n.appendChild(h.splitOffDOMTree(g, a)), k.forEach(function(a) {
                    a.parentNode.removeChild(a), n.appendChild(a);
                }), i === b ? (i.parentNode.removeChild(i), n.appendChild(i)) : n.appendChild(h.splitOffDOMTree(i, b, !0)), c.appendChild(n), i.parentNode === d ? d.insertBefore(c, i) : m ? d.insertBefore(c, m) : d.appendChild(c), c.hasChildNodes();
            },
            depthOfNode: function(a) {
                for(var b = 0, c = a; null !== c.parentNode;)c = c.parentNode, b++;
                return b;
            },
            findCommonRoot: function(a, b) {
                for(var c = h.depthOfNode(a), d = h.depthOfNode(b), e = a, f = b; c !== d;)c > d ? (e = e.parentNode, c -= 1) : (f = f.parentNode, d -= 1);
                for(; e !== f;)e = e.parentNode, f = f.parentNode;
                return e;
            },
            isElementAtBeginningOfBlock: function(a) {
                for(var b, c; !h.isBlockContainer(a) && !h.isMediumEditorElement(a);){
                    for(c = a; c = c.previousSibling;)if (b = 3 === c.nodeType ? c.nodeValue : c.textContent, b.length > 0) return !1;
                    a = a.parentNode;
                }
                return !0;
            },
            isMediumEditorElement: function(a) {
                return a && a.getAttribute && !!a.getAttribute("data-medium-editor-element");
            },
            getContainerEditorElement: function(a) {
                return h.traverseUp(a, function(a) {
                    return h.isMediumEditorElement(a);
                });
            },
            isBlockContainer: function(a) {
                return a && 3 !== a.nodeType && -1 !== h.blockContainerElementNames.indexOf(a.nodeName.toLowerCase());
            },
            getClosestBlockContainer: function(a) {
                return h.traverseUp(a, function(a) {
                    return h.isBlockContainer(a) || h.isMediumEditorElement(a);
                });
            },
            getTopBlockContainer: function(a) {
                var b = h.isBlockContainer(a) ? a : !1;
                return h.traverseUp(a, function(a) {
                    return h.isBlockContainer(a) && (b = a), !b && h.isMediumEditorElement(a) ? (b = a, !0) : !1;
                }), b;
            },
            getFirstSelectableLeafNode: function(a) {
                for(; a && a.firstChild;)a = a.firstChild;
                if (a = h.traverseUp(a, function(a) {
                    return -1 === h.emptyElementNames.indexOf(a.nodeName.toLowerCase());
                }), "table" === a.nodeName.toLowerCase()) {
                    var b = a.querySelector("th, td");
                    b && (a = b);
                }
                return a;
            },
            getFirstTextNode: function(a) {
                return h.warn("getFirstTextNode is deprecated and will be removed in version 6.0.0"), h._getFirstTextNode(a);
            },
            _getFirstTextNode: function(a) {
                if (3 === a.nodeType) return a;
                for(var b = 0; b < a.childNodes.length; b++){
                    var c = h._getFirstTextNode(a.childNodes[b]);
                    if (null !== c) return c;
                }
                return null;
            },
            ensureUrlHasProtocol: function(a) {
                return -1 === a.indexOf("://") ? "http://" + a : a;
            },
            warn: function() {
                void 0 !== b.console && "function" == typeof b.console.warn && b.console.warn.apply(b.console, arguments);
            },
            deprecated: function(a, b, c) {
                var d = a + " is deprecated, please use " + b + " instead.";
                c && (d += " Will be removed in " + c), h.warn(d);
            },
            deprecatedMethod: function(a, b, c, d) {
                h.deprecated(a, b, d), "function" == typeof this[b] && this[b].apply(this, c);
            },
            cleanupAttrs: function(a, b) {
                b.forEach(function(b) {
                    a.removeAttribute(b);
                });
            },
            cleanupTags: function(a, b) {
                -1 !== b.indexOf(a.nodeName.toLowerCase()) && a.parentNode.removeChild(a);
            },
            unwrapTags: function(b, c) {
                -1 !== c.indexOf(b.nodeName.toLowerCase()) && a.util.unwrap(b, document);
            },
            getClosestTag: function(a, b) {
                return h.traverseUp(a, function(a) {
                    return a.nodeName.toLowerCase() === b.toLowerCase();
                });
            },
            unwrap: function(a, b) {
                for(var c = b.createDocumentFragment(), d = Array.prototype.slice.call(a.childNodes), e = 0; e < d.length; e++)c.appendChild(d[e]);
                c.childNodes.length ? a.parentNode.replaceChild(c, a) : a.parentNode.removeChild(a);
            },
            guid: function() {
                function a() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                }
                return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a();
            }
        };
        a.util = h;
    }(window), function() {
        var b = function(b) {
            a.util.extend(this, b);
        };
        b.extend = function(b) {
            var c, d = this;
            c = b && b.hasOwnProperty("constructor") ? b.constructor : function() {
                return d.apply(this, arguments);
            }, a.util.extend(c, d);
            var e = function() {
                this.constructor = c;
            };
            return e.prototype = d.prototype, c.prototype = new e, b && a.util.extend(c.prototype, b), c;
        }, b.prototype = {
            init: function() {},
            base: void 0,
            name: void 0,
            checkState: void 0,
            destroy: void 0,
            queryCommandState: void 0,
            isActive: void 0,
            isAlreadyApplied: void 0,
            setActive: void 0,
            setInactive: void 0,
            getInteractionElements: void 0,
            window: void 0,
            document: void 0,
            getEditorElements: function() {
                return this.base.elements;
            },
            getEditorId: function() {
                return this.base.id;
            },
            getEditorOption: function(a) {
                return this.base.options[a];
            }
        }, [
            "execAction",
            "on",
            "off",
            "subscribe",
            "trigger"
        ].forEach(function(a) {
            b.prototype[a] = function() {
                return this.base[a].apply(this.base, arguments);
            };
        }), a.Extension = b;
    }(), function() {
        function b(b) {
            return a.util.isBlockContainer(b) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
        var c = {
            findMatchingSelectionParent: function(b, c) {
                var d, e, f = c.getSelection();
                return 0 === f.rangeCount ? !1 : (d = f.getRangeAt(0), e = d.commonAncestorContainer, a.util.traverseUp(e, b));
            },
            getSelectionElement: function(b) {
                return this.findMatchingSelectionParent(function(b) {
                    return a.util.isMediumEditorElement(b);
                }, b);
            },
            exportSelection: function(a, b) {
                if (!a) return null;
                var c = null, d = b.getSelection();
                if (d.rangeCount > 0) {
                    var e, f = d.getRangeAt(0), g = f.cloneRange();
                    g.selectNodeContents(a), g.setEnd(f.startContainer, f.startOffset), e = g.toString().length, c = {
                        start: e,
                        end: e + f.toString().length
                    }, this.doesRangeStartWithImages(f, b) && (c.startsWithImage = !0);
                    var h = this.getTrailingImageCount(a, c, f.endContainer, f.endOffset);
                    if (h && (c.trailingImageCount = h), 0 !== e) {
                        var i = this.getIndexRelativeToAdjacentEmptyBlocks(b, a, f.startContainer, f.startOffset);
                        -1 !== i && (c.emptyBlocksIndex = i);
                    }
                }
                return c;
            },
            importSelection: function(a, b, c, d) {
                if (a && b) {
                    var e = c.createRange();
                    e.setStart(b, 0), e.collapse(!0);
                    var f, g = b, h = [], i = 0, j = !1, k = !1, l = 0, m = !1, n = !1, o = null;
                    for((d || a.startsWithImage || "undefined" != typeof a.emptyBlocksIndex) && (n = !0); !m && g;)if (g.nodeType > 3) g = h.pop();
                    else {
                        if (3 !== g.nodeType || k) {
                            if (a.trailingImageCount && k && ("img" === g.nodeName.toLowerCase() && l++, l === a.trailingImageCount)) {
                                for(var p = 0; g.parentNode.childNodes[p] !== g;)p++;
                                e.setEnd(g.parentNode, p + 1), m = !0;
                            }
                            if (!m && 1 === g.nodeType) for(var q = g.childNodes.length - 1; q >= 0;)h.push(g.childNodes[q]), q -= 1;
                        } else f = i + g.length, !j && a.start >= i && a.start <= f && (n || a.start < f ? (e.setStart(g, a.start - i), j = !0) : o = g), j && a.end >= i && a.end <= f && (a.trailingImageCount ? k = !0 : (e.setEnd(g, a.end - i), m = !0)), i = f;
                        m || (g = h.pop());
                    }
                    !j && o && (e.setStart(o, o.length), e.setEnd(o, o.length)), "undefined" != typeof a.emptyBlocksIndex && (e = this.importSelectionMoveCursorPastBlocks(c, b, a.emptyBlocksIndex, e)), d && (e = this.importSelectionMoveCursorPastAnchor(a, e)), this.selectRange(c, e);
                }
            },
            importSelectionMoveCursorPastAnchor: function(b, c) {
                var d = function(a) {
                    return "a" === a.nodeName.toLowerCase();
                };
                if (b.start === b.end && 3 === c.startContainer.nodeType && c.startOffset === c.startContainer.nodeValue.length && a.util.traverseUp(c.startContainer, d)) {
                    for(var e = c.startContainer, f = c.startContainer.parentNode; null !== f && "a" !== f.nodeName.toLowerCase();)f.childNodes[f.childNodes.length - 1] !== e ? f = null : (e = f, f = f.parentNode);
                    if (null !== f && "a" === f.nodeName.toLowerCase()) {
                        for(var g = null, h = 0; null === g && h < f.parentNode.childNodes.length; h++)f.parentNode.childNodes[h] === f && (g = h);
                        c.setStart(f.parentNode, g + 1), c.collapse(!0);
                    }
                }
                return c;
            },
            importSelectionMoveCursorPastBlocks: function(c, d, e, f) {
                var g, h, i = c.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, b, !1), j = f.startContainer, k = 0;
                for(e = e || 1, g = 3 === j.nodeType && a.util.isBlockContainer(j.previousSibling) ? j.previousSibling : a.util.getClosestBlockContainer(j); i.nextNode();)if (h) {
                    if (h = i.currentNode, k++, k === e) break;
                    if (h.textContent.length > 0) break;
                } else g === i.currentNode && (h = i.currentNode);
                return h || (h = g), f.setStart(a.util.getFirstSelectableLeafNode(h), 0), f;
            },
            getIndexRelativeToAdjacentEmptyBlocks: function(c, d, e, f) {
                if (e.textContent.length > 0 && f > 0) return -1;
                var g = e;
                if (3 !== g.nodeType && (g = e.childNodes[f]), g) {
                    if (!a.util.isElementAtBeginningOfBlock(g)) return -1;
                    var h = a.util.findPreviousSibling(g);
                    if (!h) return -1;
                    if (h.nodeValue) return -1;
                }
                for(var i = a.util.getClosestBlockContainer(e), j = c.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, b, !1), k = 0; j.nextNode();){
                    var l = "" === j.currentNode.textContent;
                    if ((l || k > 0) && (k += 1), j.currentNode === i) return k;
                    l || (k = 0);
                }
                return k;
            },
            doesRangeStartWithImages: function(a, b) {
                if (0 !== a.startOffset || 1 !== a.startContainer.nodeType) return !1;
                if ("img" === a.startContainer.nodeName.toLowerCase()) return !0;
                var c = a.startContainer.querySelector("img");
                if (!c) return !1;
                for(var d = b.createTreeWalker(a.startContainer, NodeFilter.SHOW_ALL, null, !1); d.nextNode();){
                    var e = d.currentNode;
                    if (e === c) break;
                    if (e.nodeValue) return !1;
                }
                return !0;
            },
            getTrailingImageCount: function(a, b, c, d) {
                if (0 === d || 1 !== c.nodeType) return 0;
                if ("img" !== c.nodeName.toLowerCase() && !c.querySelector("img")) return 0;
                for(var e = c.childNodes[d - 1]; e.hasChildNodes();)e = e.lastChild;
                for(var f, g = a, h = [], i = 0, j = !1, k = !1, l = !1, m = 0; !l && g;)if (g.nodeType > 3) g = h.pop();
                else {
                    if (3 !== g.nodeType || k) {
                        if ("img" === g.nodeName.toLowerCase() && m++, g === e) l = !0;
                        else if (1 === g.nodeType) for(var n = g.childNodes.length - 1; n >= 0;)h.push(g.childNodes[n]), n -= 1;
                    } else m = 0, f = i + g.length, !j && b.start >= i && b.start <= f && (j = !0), j && b.end >= i && b.end <= f && (k = !0), i = f;
                    l || (g = h.pop());
                }
                return m;
            },
            selectionContainsContent: function(a) {
                var b = a.getSelection();
                if (!b || b.isCollapsed || !b.rangeCount) return !1;
                if ("" !== b.toString().trim()) return !0;
                var c = this.getSelectedParentElement(b.getRangeAt(0));
                return !(!c || !("img" === c.nodeName.toLowerCase() || 1 === c.nodeType && c.querySelector("img")));
            },
            selectionInContentEditableFalse: function(a) {
                var b, c = this.findMatchingSelectionParent(function(a) {
                    var c = a && a.getAttribute("contenteditable");
                    return "true" === c && (b = !0), "#text" !== a.nodeName && "false" === c;
                }, a);
                return !b && c;
            },
            getSelectionHtml: function(a) {
                var b, c, d, e = "", f = a.getSelection();
                if (f.rangeCount) {
                    for(d = a.createElement("div"), b = 0, c = f.rangeCount; c > b; b += 1)d.appendChild(f.getRangeAt(b).cloneContents());
                    e = d.innerHTML;
                }
                return e;
            },
            getCaretOffsets: function(a, b) {
                var c, d;
                return b || (b = window.getSelection().getRangeAt(0)), c = b.cloneRange(), d = b.cloneRange(), c.selectNodeContents(a), c.setEnd(b.endContainer, b.endOffset), d.selectNodeContents(a), d.setStart(b.endContainer, b.endOffset), {
                    left: c.toString().length,
                    right: d.toString().length
                };
            },
            rangeSelectsSingleNode: function(a) {
                var b = a.startContainer;
                return b === a.endContainer && b.hasChildNodes() && a.endOffset === a.startOffset + 1;
            },
            getSelectedParentElement: function(a) {
                return a ? this.rangeSelectsSingleNode(a) && 3 !== a.startContainer.childNodes[a.startOffset].nodeType ? a.startContainer.childNodes[a.startOffset] : 3 === a.startContainer.nodeType ? a.startContainer.parentNode : a.startContainer : null;
            },
            getSelectedElements: function(a) {
                var b, c, d, e = a.getSelection();
                if (!e.rangeCount || e.isCollapsed || !e.getRangeAt(0).commonAncestorContainer) return [];
                if (b = e.getRangeAt(0), 3 === b.commonAncestorContainer.nodeType) {
                    for(c = [], d = b.commonAncestorContainer; d.parentNode && 1 === d.parentNode.childNodes.length;)c.push(d.parentNode), d = d.parentNode;
                    return c;
                }
                return [].filter.call(b.commonAncestorContainer.getElementsByTagName("*"), function(a) {
                    return "function" == typeof e.containsNode ? e.containsNode(a, !0) : !0;
                });
            },
            selectNode: function(a, b) {
                var c = b.createRange();
                c.selectNodeContents(a), this.selectRange(b, c);
            },
            select: function(a, b, c, d, e) {
                var f = a.createRange();
                return f.setStart(b, c), d ? f.setEnd(d, e) : f.collapse(!0), this.selectRange(a, f), f;
            },
            clearSelection: function(a, b) {
                b ? a.getSelection().collapseToStart() : a.getSelection().collapseToEnd();
            },
            moveCursor: function(a, b, c) {
                this.select(a, b, c);
            },
            getSelectionRange: function(a) {
                var b = a.getSelection();
                return 0 === b.rangeCount ? null : b.getRangeAt(0);
            },
            selectRange: function(a, b) {
                var c = a.getSelection();
                c.removeAllRanges(), c.addRange(b);
            },
            getSelectionStart: function(a) {
                var b = a.getSelection().anchorNode, c = b && 3 === b.nodeType ? b.parentNode : b;
                return c;
            }
        };
        a.selection = c;
    }(), function() {
        function b(b, c) {
            return b ? b.some(function(b) {
                if ("function" != typeof b.getInteractionElements) return !1;
                var d = b.getInteractionElements();
                return d ? (Array.isArray(d) || (d = [
                    d
                ]), d.some(function(b) {
                    return a.util.isDescendant(b, c, !0);
                })) : !1;
            }) : !1;
        }
        var c = function(a) {
            this.base = a, this.options = this.base.options, this.events = [], this.disabledEvents = {}, this.customEvents = {}, this.listeners = {};
        };
        c.prototype = {
            InputEventOnContenteditableSupported: !a.util.isIE && !a.util.isEdge,
            attachDOMEvent: function(b, c, d, e) {
                var f = this.base.options.contentWindow, g = this.base.options.ownerDocument;
                b = a.util.isElement(b) || [
                    f,
                    g
                ].indexOf(b) > -1 ? [
                    b
                ] : b, Array.prototype.forEach.call(b, (function(a) {
                    a.addEventListener(c, d, e), this.events.push([
                        a,
                        c,
                        d,
                        e
                    ]);
                }).bind(this));
            },
            detachDOMEvent: function(b, c, d, e) {
                var f, g, h = this.base.options.contentWindow, i = this.base.options.ownerDocument;
                b && (b = a.util.isElement(b) || [
                    h,
                    i
                ].indexOf(b) > -1 ? [
                    b
                ] : b, Array.prototype.forEach.call(b, (function(a) {
                    f = this.indexOfListener(a, c, d, e), -1 !== f && (g = this.events.splice(f, 1)[0], g[0].removeEventListener(g[1], g[2], g[3]));
                }).bind(this)));
            },
            indexOfListener: function(a, b, c, d) {
                var e, f, g;
                for(e = 0, f = this.events.length; f > e; e += 1)if (g = this.events[e], g[0] === a && g[1] === b && g[2] === c && g[3] === d) return e;
                return -1;
            },
            detachAllDOMEvents: function() {
                for(var a = this.events.pop(); a;)a[0].removeEventListener(a[1], a[2], a[3]), a = this.events.pop();
            },
            detachAllEventsFromElement: function(a) {
                for(var b = this.events.filter(function(b) {
                    return b && b[0].getAttribute && b[0].getAttribute("medium-editor-index") === a.getAttribute("medium-editor-index");
                }), c = 0, d = b.length; d > c; c++){
                    var e = b[c];
                    this.detachDOMEvent(e[0], e[1], e[2], e[3]);
                }
            },
            attachAllEventsToElement: function(a) {
                this.listeners.editableInput && (this.contentCache[a.getAttribute("medium-editor-index")] = a.innerHTML), this.eventsCache && this.eventsCache.forEach(function(b) {
                    this.attachDOMEvent(a, b.name, b.handler.bind(this));
                }, this);
            },
            enableCustomEvent: function(a) {
                void 0 !== this.disabledEvents[a] && delete this.disabledEvents[a];
            },
            disableCustomEvent: function(a) {
                this.disabledEvents[a] = !0;
            },
            attachCustomEvent: function(a, b) {
                this.setupListener(a), this.customEvents[a] || (this.customEvents[a] = []), this.customEvents[a].push(b);
            },
            detachCustomEvent: function(a, b) {
                var c = this.indexOfCustomListener(a, b);
                -1 !== c && this.customEvents[a].splice(c, 1);
            },
            indexOfCustomListener: function(a, b) {
                return this.customEvents[a] && this.customEvents[a].length ? this.customEvents[a].indexOf(b) : -1;
            },
            detachAllCustomEvents: function() {
                this.customEvents = {};
            },
            triggerCustomEvent: function(a, b, c) {
                this.customEvents[a] && !this.disabledEvents[a] && this.customEvents[a].forEach(function(a) {
                    a(b, c);
                });
            },
            destroy: function() {
                this.detachAllDOMEvents(), this.detachAllCustomEvents(), this.detachExecCommand(), this.base.elements && this.base.elements.forEach(function(a) {
                    a.removeAttribute("data-medium-focused");
                });
            },
            attachToExecCommand: function() {
                this.execCommandListener || (this.execCommandListener = (function(a) {
                    this.handleDocumentExecCommand(a);
                }).bind(this), this.wrapExecCommand(), this.options.ownerDocument.execCommand.listeners.push(this.execCommandListener));
            },
            detachExecCommand: function() {
                var a = this.options.ownerDocument;
                if (this.execCommandListener && a.execCommand.listeners) {
                    var b = a.execCommand.listeners.indexOf(this.execCommandListener);
                    -1 !== b && a.execCommand.listeners.splice(b, 1), a.execCommand.listeners.length || this.unwrapExecCommand();
                }
            },
            wrapExecCommand: function() {
                var a = this.options.ownerDocument;
                if (!a.execCommand.listeners) {
                    var b = function(b, c) {
                        a.execCommand.listeners && a.execCommand.listeners.forEach(function(a) {
                            a({
                                command: b[0],
                                value: b[2],
                                args: b,
                                result: c
                            });
                        });
                    }, c = function() {
                        var c = a.execCommand.orig.apply(this, arguments);
                        if (!a.execCommand.listeners) return c;
                        var d = Array.prototype.slice.call(arguments);
                        return b(d, c), c;
                    };
                    c.orig = a.execCommand, c.listeners = [], c.callListeners = b, a.execCommand = c;
                }
            },
            unwrapExecCommand: function() {
                var a = this.options.ownerDocument;
                a.execCommand.orig && (a.execCommand = a.execCommand.orig);
            },
            setupListener: function(a) {
                if (!this.listeners[a]) {
                    switch(a){
                        case "externalInteraction":
                            this.attachDOMEvent(this.options.ownerDocument.body, "mousedown", this.handleBodyMousedown.bind(this), !0), this.attachDOMEvent(this.options.ownerDocument.body, "click", this.handleBodyClick.bind(this), !0), this.attachDOMEvent(this.options.ownerDocument.body, "focus", this.handleBodyFocus.bind(this), !0);
                            break;
                        case "blur":
                            this.setupListener("externalInteraction");
                            break;
                        case "focus":
                            this.setupListener("externalInteraction");
                            break;
                        case "editableInput":
                            this.contentCache = {}, this.base.elements.forEach(function(a) {
                                this.contentCache[a.getAttribute("medium-editor-index")] = a.innerHTML;
                            }, this), this.InputEventOnContenteditableSupported && this.attachToEachElement("input", this.handleInput), this.InputEventOnContenteditableSupported || (this.setupListener("editableKeypress"), this.keypressUpdateInput = !0, this.attachDOMEvent(document, "selectionchange", this.handleDocumentSelectionChange.bind(this)), this.attachToExecCommand());
                            break;
                        case "editableClick":
                            this.attachToEachElement("click", this.handleClick);
                            break;
                        case "editableBlur":
                            this.attachToEachElement("blur", this.handleBlur);
                            break;
                        case "editableKeypress":
                            this.attachToEachElement("keypress", this.handleKeypress);
                            break;
                        case "editableKeyup":
                            this.attachToEachElement("keyup", this.handleKeyup);
                            break;
                        case "editableKeydown":
                            this.attachToEachElement("keydown", this.handleKeydown);
                            break;
                        case "editableKeydownSpace":
                            this.setupListener("editableKeydown");
                            break;
                        case "editableKeydownEnter":
                            this.setupListener("editableKeydown");
                            break;
                        case "editableKeydownTab":
                            this.setupListener("editableKeydown");
                            break;
                        case "editableKeydownDelete":
                            this.setupListener("editableKeydown");
                            break;
                        case "editableMouseover":
                            this.attachToEachElement("mouseover", this.handleMouseover);
                            break;
                        case "editableDrag":
                            this.attachToEachElement("dragover", this.handleDragging), this.attachToEachElement("dragleave", this.handleDragging);
                            break;
                        case "editableDrop":
                            this.attachToEachElement("drop", this.handleDrop);
                            break;
                        case "editablePaste":
                            this.attachToEachElement("paste", this.handlePaste);
                    }
                    this.listeners[a] = !0;
                }
            },
            attachToEachElement: function(a, b) {
                this.eventsCache || (this.eventsCache = []), this.base.elements.forEach(function(c) {
                    this.attachDOMEvent(c, a, b.bind(this));
                }, this), this.eventsCache.push({
                    name: a,
                    handler: b
                });
            },
            cleanupElement: function(a) {
                var b = a.getAttribute("medium-editor-index");
                b && (this.detachAllEventsFromElement(a), this.contentCache && delete this.contentCache[b]);
            },
            focusElement: function(a) {
                a.focus(), this.updateFocus(a, {
                    target: a,
                    type: "focus"
                });
            },
            updateFocus: function(c, d) {
                var e, f = this.base.getFocusedElement();
                f && "click" === d.type && this.lastMousedownTarget && (a.util.isDescendant(f, this.lastMousedownTarget, !0) || b(this.base.extensions, this.lastMousedownTarget)) && (e = f), e || this.base.elements.some(function(b) {
                    return !e && a.util.isDescendant(b, c, !0) && (e = b), !!e;
                }, this);
                var g = !a.util.isDescendant(f, c, !0) && !b(this.base.extensions, c);
                e !== f && (f && g && (f.removeAttribute("data-medium-focused"), this.triggerCustomEvent("blur", d, f)), e && (e.setAttribute("data-medium-focused", !0), this.triggerCustomEvent("focus", d, e))), g && this.triggerCustomEvent("externalInteraction", d);
            },
            updateInput: function(a, b) {
                if (this.contentCache) {
                    var c = a.getAttribute("medium-editor-index"), d = a.innerHTML;
                    d !== this.contentCache[c] && this.triggerCustomEvent("editableInput", b, a), this.contentCache[c] = d;
                }
            },
            handleDocumentSelectionChange: function(b) {
                if (b.currentTarget && b.currentTarget.activeElement) {
                    var c, d = b.currentTarget.activeElement;
                    this.base.elements.some(function(b) {
                        return a.util.isDescendant(b, d, !0) ? (c = b, !0) : !1;
                    }, this), c && this.updateInput(c, {
                        target: d,
                        currentTarget: c
                    });
                }
            },
            handleDocumentExecCommand: function() {
                var a = this.base.getFocusedElement();
                a && this.updateInput(a, {
                    target: a,
                    currentTarget: a
                });
            },
            handleBodyClick: function(a) {
                this.updateFocus(a.target, a);
            },
            handleBodyFocus: function(a) {
                this.updateFocus(a.target, a);
            },
            handleBodyMousedown: function(a) {
                this.lastMousedownTarget = a.target;
            },
            handleInput: function(a) {
                this.updateInput(a.currentTarget, a);
            },
            handleClick: function(a) {
                this.triggerCustomEvent("editableClick", a, a.currentTarget);
            },
            handleBlur: function(a) {
                this.triggerCustomEvent("editableBlur", a, a.currentTarget);
            },
            handleKeypress: function(a) {
                if (this.triggerCustomEvent("editableKeypress", a, a.currentTarget), this.keypressUpdateInput) {
                    var b = {
                        target: a.target,
                        currentTarget: a.currentTarget
                    };
                    setTimeout((function() {
                        this.updateInput(b.currentTarget, b);
                    }).bind(this), 0);
                }
            },
            handleKeyup: function(a) {
                this.triggerCustomEvent("editableKeyup", a, a.currentTarget);
            },
            handleMouseover: function(a) {
                this.triggerCustomEvent("editableMouseover", a, a.currentTarget);
            },
            handleDragging: function(a) {
                this.triggerCustomEvent("editableDrag", a, a.currentTarget);
            },
            handleDrop: function(a) {
                this.triggerCustomEvent("editableDrop", a, a.currentTarget);
            },
            handlePaste: function(a) {
                this.triggerCustomEvent("editablePaste", a, a.currentTarget);
            },
            handleKeydown: function(b) {
                return this.triggerCustomEvent("editableKeydown", b, b.currentTarget), a.util.isKey(b, a.util.keyCode.SPACE) ? this.triggerCustomEvent("editableKeydownSpace", b, b.currentTarget) : a.util.isKey(b, a.util.keyCode.ENTER) || b.ctrlKey && a.util.isKey(b, a.util.keyCode.M) ? this.triggerCustomEvent("editableKeydownEnter", b, b.currentTarget) : a.util.isKey(b, a.util.keyCode.TAB) ? this.triggerCustomEvent("editableKeydownTab", b, b.currentTarget) : a.util.isKey(b, [
                    a.util.keyCode.DELETE,
                    a.util.keyCode.BACKSPACE
                ]) ? this.triggerCustomEvent("editableKeydownDelete", b, b.currentTarget) : void 0;
            }
        }, a.Events = c;
    }(), function() {
        var b = a.Extension.extend({
            action: void 0,
            aria: void 0,
            tagNames: void 0,
            style: void 0,
            useQueryState: void 0,
            contentDefault: void 0,
            contentFA: void 0,
            classList: void 0,
            attrs: void 0,
            constructor: function(c) {
                b.isBuiltInButton(c) ? a.Extension.call(this, this.defaults[c]) : a.Extension.call(this, c);
            },
            init: function() {
                a.Extension.prototype.init.apply(this, arguments), this.button = this.createButton(), this.on(this.button, "click", this.handleClick.bind(this));
            },
            getButton: function() {
                return this.button;
            },
            getAction: function() {
                return "function" == typeof this.action ? this.action(this.base.options) : this.action;
            },
            getAria: function() {
                return "function" == typeof this.aria ? this.aria(this.base.options) : this.aria;
            },
            getTagNames: function() {
                return "function" == typeof this.tagNames ? this.tagNames(this.base.options) : this.tagNames;
            },
            createButton: function() {
                var a = this.document.createElement("button"), b = this.contentDefault, c = this.getAria(), d = this.getEditorOption("buttonLabels");
                return a.classList.add("medium-editor-action"), a.classList.add("medium-editor-action-" + this.name), this.classList && this.classList.forEach(function(b) {
                    a.classList.add(b);
                }), a.setAttribute("data-action", this.getAction()), c && (a.setAttribute("title", c), a.setAttribute("aria-label", c)), this.attrs && Object.keys(this.attrs).forEach(function(b) {
                    a.setAttribute(b, this.attrs[b]);
                }, this), "fontawesome" === d && this.contentFA && (b = this.contentFA), a.innerHTML = b, a;
            },
            handleClick: function(a) {
                a.preventDefault(), a.stopPropagation();
                var b = this.getAction();
                b && this.execAction(b);
            },
            isActive: function() {
                return this.button.classList.contains(this.getEditorOption("activeButtonClass"));
            },
            setInactive: function() {
                this.button.classList.remove(this.getEditorOption("activeButtonClass")), delete this.knownState;
            },
            setActive: function() {
                this.button.classList.add(this.getEditorOption("activeButtonClass")), delete this.knownState;
            },
            queryCommandState: function() {
                var a = null;
                return this.useQueryState && (a = this.base.queryCommandState(this.getAction())), a;
            },
            isAlreadyApplied: function(a) {
                var b, c, d = !1, e = this.getTagNames();
                return this.knownState === !1 || this.knownState === !0 ? this.knownState : (e && e.length > 0 && (d = -1 !== e.indexOf(a.nodeName.toLowerCase())), !d && this.style && (b = this.style.value.split("|"), c = this.window.getComputedStyle(a, null).getPropertyValue(this.style.prop), b.forEach(function(a) {
                    this.knownState || (d = -1 !== c.indexOf(a), (d || "text-decoration" !== this.style.prop) && (this.knownState = d));
                }, this)), d);
            }
        });
        b.isBuiltInButton = function(b) {
            return "string" == typeof b && a.extensions.button.prototype.defaults.hasOwnProperty(b);
        }, a.extensions.button = b;
    }(), function() {
        a.extensions.button.prototype.defaults = {
            bold: {
                name: "bold",
                action: "bold",
                aria: "bold",
                tagNames: [
                    "b",
                    "strong"
                ],
                style: {
                    prop: "font-weight",
                    value: "700|bold"
                },
                useQueryState: !0,
                contentDefault: "<b>B</b>",
                contentFA: '<i class="fa fa-bold"></i>'
            },
            italic: {
                name: "italic",
                action: "italic",
                aria: "italic",
                tagNames: [
                    "i",
                    "em"
                ],
                style: {
                    prop: "font-style",
                    value: "italic"
                },
                useQueryState: !0,
                contentDefault: "<b><i>I</i></b>",
                contentFA: '<i class="fa fa-italic"></i>'
            },
            underline: {
                name: "underline",
                action: "underline",
                aria: "underline",
                tagNames: [
                    "u"
                ],
                style: {
                    prop: "text-decoration",
                    value: "underline"
                },
                useQueryState: !0,
                contentDefault: "<b><u>U</u></b>",
                contentFA: '<i class="fa fa-underline"></i>'
            },
            strikethrough: {
                name: "strikethrough",
                action: "strikethrough",
                aria: "strike through",
                tagNames: [
                    "strike"
                ],
                style: {
                    prop: "text-decoration",
                    value: "line-through"
                },
                useQueryState: !0,
                contentDefault: "<s>A</s>",
                contentFA: '<i class="fa fa-strikethrough"></i>'
            },
            superscript: {
                name: "superscript",
                action: "superscript",
                aria: "superscript",
                tagNames: [
                    "sup"
                ],
                contentDefault: "<b>x<sup>1</sup></b>",
                contentFA: '<i class="fa fa-superscript"></i>'
            },
            subscript: {
                name: "subscript",
                action: "subscript",
                aria: "subscript",
                tagNames: [
                    "sub"
                ],
                contentDefault: "<b>x<sub>1</sub></b>",
                contentFA: '<i class="fa fa-subscript"></i>'
            },
            image: {
                name: "image",
                action: "image",
                aria: "image",
                tagNames: [
                    "img"
                ],
                contentDefault: "<b>image</b>",
                contentFA: '<i class="fa fa-picture-o"></i>'
            },
            html: {
                name: "html",
                action: "html",
                aria: "evaluate html",
                tagNames: [
                    "iframe",
                    "object"
                ],
                contentDefault: "<b>html</b>",
                contentFA: '<i class="fa fa-code"></i>'
            },
            orderedlist: {
                name: "orderedlist",
                action: "insertorderedlist",
                aria: "ordered list",
                tagNames: [
                    "ol"
                ],
                useQueryState: !0,
                contentDefault: "<b>1.</b>",
                contentFA: '<i class="fa fa-list-ol"></i>'
            },
            unorderedlist: {
                name: "unorderedlist",
                action: "insertunorderedlist",
                aria: "unordered list",
                tagNames: [
                    "ul"
                ],
                useQueryState: !0,
                contentDefault: "<b>&bull;</b>",
                contentFA: '<i class="fa fa-list-ul"></i>'
            },
            indent: {
                name: "indent",
                action: "indent",
                aria: "indent",
                tagNames: [],
                contentDefault: "<b>&rarr;</b>",
                contentFA: '<i class="fa fa-indent"></i>'
            },
            outdent: {
                name: "outdent",
                action: "outdent",
                aria: "outdent",
                tagNames: [],
                contentDefault: "<b>&larr;</b>",
                contentFA: '<i class="fa fa-outdent"></i>'
            },
            justifyCenter: {
                name: "justifyCenter",
                action: "justifyCenter",
                aria: "center justify",
                tagNames: [],
                style: {
                    prop: "text-align",
                    value: "center"
                },
                contentDefault: "<b>C</b>",
                contentFA: '<i class="fa fa-align-center"></i>'
            },
            justifyFull: {
                name: "justifyFull",
                action: "justifyFull",
                aria: "full justify",
                tagNames: [],
                style: {
                    prop: "text-align",
                    value: "justify"
                },
                contentDefault: "<b>J</b>",
                contentFA: '<i class="fa fa-align-justify"></i>'
            },
            justifyLeft: {
                name: "justifyLeft",
                action: "justifyLeft",
                aria: "left justify",
                tagNames: [],
                style: {
                    prop: "text-align",
                    value: "left"
                },
                contentDefault: "<b>L</b>",
                contentFA: '<i class="fa fa-align-left"></i>'
            },
            justifyRight: {
                name: "justifyRight",
                action: "justifyRight",
                aria: "right justify",
                tagNames: [],
                style: {
                    prop: "text-align",
                    value: "right"
                },
                contentDefault: "<b>R</b>",
                contentFA: '<i class="fa fa-align-right"></i>'
            },
            removeFormat: {
                name: "removeFormat",
                aria: "remove formatting",
                action: "removeFormat",
                contentDefault: "<b>X</b>",
                contentFA: '<i class="fa fa-eraser"></i>'
            },
            quote: {
                name: "quote",
                action: "append-blockquote",
                aria: "blockquote",
                tagNames: [
                    "blockquote"
                ],
                contentDefault: "<b>&ldquo;</b>",
                contentFA: '<i class="fa fa-quote-right"></i>'
            },
            pre: {
                name: "pre",
                action: "append-pre",
                aria: "preformatted text",
                tagNames: [
                    "pre"
                ],
                contentDefault: "<b>0101</b>",
                contentFA: '<i class="fa fa-code fa-lg"></i>'
            },
            h1: {
                name: "h1",
                action: "append-h1",
                aria: "header type one",
                tagNames: [
                    "h1"
                ],
                contentDefault: "<b>H1</b>",
                contentFA: '<i class="fa fa-header"><sup>1</sup>'
            },
            h2: {
                name: "h2",
                action: "append-h2",
                aria: "header type two",
                tagNames: [
                    "h2"
                ],
                contentDefault: "<b>H2</b>",
                contentFA: '<i class="fa fa-header"><sup>2</sup>'
            },
            h3: {
                name: "h3",
                action: "append-h3",
                aria: "header type three",
                tagNames: [
                    "h3"
                ],
                contentDefault: "<b>H3</b>",
                contentFA: '<i class="fa fa-header"><sup>3</sup>'
            },
            h4: {
                name: "h4",
                action: "append-h4",
                aria: "header type four",
                tagNames: [
                    "h4"
                ],
                contentDefault: "<b>H4</b>",
                contentFA: '<i class="fa fa-header"><sup>4</sup>'
            },
            h5: {
                name: "h5",
                action: "append-h5",
                aria: "header type five",
                tagNames: [
                    "h5"
                ],
                contentDefault: "<b>H5</b>",
                contentFA: '<i class="fa fa-header"><sup>5</sup>'
            },
            h6: {
                name: "h6",
                action: "append-h6",
                aria: "header type six",
                tagNames: [
                    "h6"
                ],
                contentDefault: "<b>H6</b>",
                contentFA: '<i class="fa fa-header"><sup>6</sup>'
            }
        };
    }(), function() {
        var b = a.extensions.button.extend({
            init: function() {
                a.extensions.button.prototype.init.apply(this, arguments);
            },
            formSaveLabel: "&#10003;",
            formCloseLabel: "&times;",
            activeClass: "medium-editor-toolbar-form-active",
            hasForm: !0,
            getForm: function() {},
            isDisplayed: function() {
                return this.hasForm ? this.getForm().classList.contains(this.activeClass) : !1;
            },
            showForm: function() {
                this.hasForm && this.getForm().classList.add(this.activeClass);
            },
            hideForm: function() {
                this.hasForm && this.getForm().classList.remove(this.activeClass);
            },
            showToolbarDefaultActions: function() {
                var a = this.base.getExtensionByName("toolbar");
                a && a.showToolbarDefaultActions();
            },
            hideToolbarDefaultActions: function() {
                var a = this.base.getExtensionByName("toolbar");
                a && a.hideToolbarDefaultActions();
            },
            setToolbarPosition: function() {
                var a = this.base.getExtensionByName("toolbar");
                a && a.setToolbarPosition();
            }
        });
        a.extensions.form = b;
    }(), function() {
        var b = a.extensions.form.extend({
            customClassOption: null,
            customClassOptionText: "Button",
            linkValidation: !1,
            placeholderText: "Paste or type a link",
            targetCheckbox: !1,
            targetCheckboxText: "Open in new window",
            name: "anchor",
            action: "createLink",
            aria: "link",
            tagNames: [
                "a"
            ],
            contentDefault: "<b>#</b>",
            contentFA: '<i class="fa fa-link"></i>',
            init: function() {
                a.extensions.form.prototype.init.apply(this, arguments), this.subscribe("editableKeydown", this.handleKeydown.bind(this));
            },
            handleClick: function(b) {
                b.preventDefault(), b.stopPropagation();
                var c = a.selection.getSelectionRange(this.document);
                return "a" === c.startContainer.nodeName.toLowerCase() || "a" === c.endContainer.nodeName.toLowerCase() || a.util.getClosestTag(a.selection.getSelectedParentElement(c), "a") ? this.execAction("unlink") : (this.isDisplayed() || this.showForm(), !1);
            },
            handleKeydown: function(b) {
                a.util.isKey(b, a.util.keyCode.K) && a.util.isMetaCtrlKey(b) && !b.shiftKey && this.handleClick(b);
            },
            getForm: function() {
                return this.form || (this.form = this.createForm()), this.form;
            },
            getTemplate: function() {
                var a = [
                    '<input type="text" class="medium-editor-toolbar-input" placeholder="',
                    this.placeholderText,
                    '">'
                ];
                return a.push('<a href="#" class="medium-editor-toolbar-save">', "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>' : this.formSaveLabel, "</a>"), a.push('<a href="#" class="medium-editor-toolbar-close">', "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>' : this.formCloseLabel, "</a>"), this.targetCheckbox && a.push('<div class="medium-editor-toolbar-form-row">', '<input type="checkbox" class="medium-editor-toolbar-anchor-target" id="medium-editor-toolbar-anchor-target-field-' + this.getEditorId() + '">', '<label for="medium-editor-toolbar-anchor-target-field-' + this.getEditorId() + '">', this.targetCheckboxText, "</label>", "</div>"), this.customClassOption && a.push('<div class="medium-editor-toolbar-form-row">', '<input type="checkbox" class="medium-editor-toolbar-anchor-button">', "<label>", this.customClassOptionText, "</label>", "</div>"), a.join("");
            },
            isDisplayed: function() {
                return a.extensions.form.prototype.isDisplayed.apply(this);
            },
            hideForm: function() {
                a.extensions.form.prototype.hideForm.apply(this), this.getInput().value = "";
            },
            showForm: function(b) {
                var c = this.getInput(), d = this.getAnchorTargetCheckbox(), e = this.getAnchorButtonCheckbox();
                if (b = b || {
                    value: ""
                }, "string" == typeof b && (b = {
                    value: b
                }), this.base.saveSelection(), this.hideToolbarDefaultActions(), a.extensions.form.prototype.showForm.apply(this), this.setToolbarPosition(), c.value = b.value, c.focus(), d && (d.checked = "_blank" === b.target), e) {
                    var f = b.buttonClass ? b.buttonClass.split(" ") : [];
                    e.checked = -1 !== f.indexOf(this.customClassOption);
                }
            },
            destroy: function() {
                return this.form ? (this.form.parentNode && this.form.parentNode.removeChild(this.form), void delete this.form) : !1;
            },
            getFormOpts: function() {
                var a = this.getAnchorTargetCheckbox(), b = this.getAnchorButtonCheckbox(), c = {
                    value: this.getInput().value.trim()
                };
                return this.linkValidation && (c.value = this.checkLinkFormat(c.value)), c.target = "_self", a && a.checked && (c.target = "_blank"), b && b.checked && (c.buttonClass = this.customClassOption), c;
            },
            doFormSave: function() {
                var a = this.getFormOpts();
                this.completeFormSave(a);
            },
            completeFormSave: function(a) {
                this.base.restoreSelection(), this.execAction(this.action, a), this.base.checkSelection();
            },
            ensureEncodedUri: function(a) {
                return a === decodeURI(a) ? encodeURI(a) : a;
            },
            ensureEncodedUriComponent: function(a) {
                return a === decodeURIComponent(a) ? encodeURIComponent(a) : a;
            },
            ensureEncodedParam: function(a) {
                var b = a.split("="), c = b[0], d = b[1];
                return c + (void 0 === d ? "" : "=" + this.ensureEncodedUriComponent(d));
            },
            ensureEncodedQuery: function(a) {
                return a.split("&").map(this.ensureEncodedParam.bind(this)).join("&");
            },
            checkLinkFormat: function(a) {
                var b = /^([a-z]+:)?\/\/|^(mailto|tel|maps):|^\#/i, c = b.test(a), d = "", e = /^\+?\s?\(?(?:\d\s?\-?\)?){3,20}$/, f = a.match(/^(.*?)(?:\?(.*?))?(?:#(.*))?$/), g = f[1], h = f[2], i = f[3];
                if (e.test(a)) return "tel:" + a;
                if (!c) {
                    var j = g.split("/")[0];
                    (j.match(/.+(\.|:).+/) || "localhost" === j) && (d = "http://");
                }
                return d + this.ensureEncodedUri(g) + (void 0 === h ? "" : "?" + this.ensureEncodedQuery(h)) + (void 0 === i ? "" : "#" + i);
            },
            doFormCancel: function() {
                this.base.restoreSelection(), this.base.checkSelection();
            },
            attachFormEvents: function(a) {
                var b = a.querySelector(".medium-editor-toolbar-close"), c = a.querySelector(".medium-editor-toolbar-save"), d = a.querySelector(".medium-editor-toolbar-input");
                this.on(a, "click", this.handleFormClick.bind(this)), this.on(d, "keyup", this.handleTextboxKeyup.bind(this)), this.on(b, "click", this.handleCloseClick.bind(this)), this.on(c, "click", this.handleSaveClick.bind(this), !0);
            },
            createForm: function() {
                var a = this.document, b = a.createElement("div");
                return b.className = "medium-editor-toolbar-form", b.id = "medium-editor-toolbar-form-anchor-" + this.getEditorId(), b.innerHTML = this.getTemplate(), this.attachFormEvents(b), b;
            },
            getInput: function() {
                return this.getForm().querySelector("input.medium-editor-toolbar-input");
            },
            getAnchorTargetCheckbox: function() {
                return this.getForm().querySelector(".medium-editor-toolbar-anchor-target");
            },
            getAnchorButtonCheckbox: function() {
                return this.getForm().querySelector(".medium-editor-toolbar-anchor-button");
            },
            handleTextboxKeyup: function(b) {
                return b.keyCode === a.util.keyCode.ENTER ? (b.preventDefault(), void this.doFormSave()) : void (b.keyCode === a.util.keyCode.ESCAPE && (b.preventDefault(), this.doFormCancel()));
            },
            handleFormClick: function(a) {
                a.stopPropagation();
            },
            handleSaveClick: function(a) {
                a.preventDefault(), this.doFormSave();
            },
            handleCloseClick: function(a) {
                a.preventDefault(), this.doFormCancel();
            }
        });
        a.extensions.anchor = b;
    }(), function() {
        var b = a.Extension.extend({
            name: "anchor-preview",
            hideDelay: 500,
            previewValueSelector: "a",
            showWhenToolbarIsVisible: !1,
            showOnEmptyLinks: !0,
            init: function() {
                this.anchorPreview = this.createPreview(), this.getEditorOption("elementsContainer").appendChild(this.anchorPreview), this.attachToEditables();
            },
            getInteractionElements: function() {
                return this.getPreviewElement();
            },
            getPreviewElement: function() {
                return this.anchorPreview;
            },
            createPreview: function() {
                var a = this.document.createElement("div");
                return a.id = "medium-editor-anchor-preview-" + this.getEditorId(), a.className = "medium-editor-anchor-preview", a.innerHTML = this.getTemplate(), this.on(a, "click", this.handleClick.bind(this)), a;
            },
            getTemplate: function() {
                return '<div class="medium-editor-toolbar-anchor-preview" id="medium-editor-toolbar-anchor-preview">    <a class="medium-editor-toolbar-anchor-preview-inner"></a></div>';
            },
            destroy: function() {
                this.anchorPreview && (this.anchorPreview.parentNode && this.anchorPreview.parentNode.removeChild(this.anchorPreview), delete this.anchorPreview);
            },
            hidePreview: function() {
                this.anchorPreview && this.anchorPreview.classList.remove("medium-editor-anchor-preview-active"), this.activeAnchor = null;
            },
            showPreview: function(a) {
                return this.anchorPreview.classList.contains("medium-editor-anchor-preview-active") || a.getAttribute("data-disable-preview") ? !0 : (this.previewValueSelector && (this.anchorPreview.querySelector(this.previewValueSelector).textContent = a.attributes.href.value, this.anchorPreview.querySelector(this.previewValueSelector).href = a.attributes.href.value), this.anchorPreview.classList.add("medium-toolbar-arrow-over"), this.anchorPreview.classList.remove("medium-toolbar-arrow-under"), this.anchorPreview.classList.contains("medium-editor-anchor-preview-active") || this.anchorPreview.classList.add("medium-editor-anchor-preview-active"), this.activeAnchor = a, this.positionPreview(), this.attachPreviewHandlers(), this);
            },
            positionPreview: function(a) {
                a = a || this.activeAnchor;
                var b, c, d, e, f, g = this.window.innerWidth, h = this.anchorPreview.offsetHeight, i = a.getBoundingClientRect(), j = this.diffLeft, k = this.diffTop, l = this.getEditorOption("elementsContainer"), m = [
                    "absolute",
                    "fixed"
                ].indexOf(window.getComputedStyle(l).getPropertyValue("position")) > -1, n = {};
                b = this.anchorPreview.offsetWidth / 2;
                var o = this.base.getExtensionByName("toolbar");
                o && (j = o.diffLeft, k = o.diffTop), c = j - b, m ? (e = l.getBoundingClientRect(), [
                    "top",
                    "left"
                ].forEach(function(a) {
                    n[a] = i[a] - e[a];
                }), n.width = i.width, n.height = i.height, i = n, g = e.width, f = l.scrollTop) : f = this.window.pageYOffset, d = i.left + i.width / 2, f += h + i.top + i.height - k - this.anchorPreview.offsetHeight, this.anchorPreview.style.top = Math.round(f) + "px", this.anchorPreview.style.right = "initial", b > d ? (this.anchorPreview.style.left = c + b + "px", this.anchorPreview.style.right = "initial") : b > g - d ? (this.anchorPreview.style.left = "auto", this.anchorPreview.style.right = 0) : (this.anchorPreview.style.left = c + d + "px", this.anchorPreview.style.right = "initial");
            },
            attachToEditables: function() {
                this.subscribe("editableMouseover", this.handleEditableMouseover.bind(this)), this.subscribe("positionedToolbar", this.handlePositionedToolbar.bind(this));
            },
            handlePositionedToolbar: function() {
                this.showWhenToolbarIsVisible || this.hidePreview();
            },
            handleClick: function(a) {
                var b = this.base.getExtensionByName("anchor"), c = this.activeAnchor;
                b && c && (a.preventDefault(), this.base.selectElement(this.activeAnchor), this.base.delay((function() {
                    if (c) {
                        var a = {
                            value: c.attributes.href.value,
                            target: c.getAttribute("target"),
                            buttonClass: c.getAttribute("class")
                        };
                        b.showForm(a), c = null;
                    }
                }).bind(this))), this.hidePreview();
            },
            handleAnchorMouseout: function() {
                this.anchorToPreview = null, this.off(this.activeAnchor, "mouseout", this.instanceHandleAnchorMouseout), this.instanceHandleAnchorMouseout = null;
            },
            handleEditableMouseover: function(b) {
                var c = a.util.getClosestTag(b.target, "a");
                if (!1 !== c) {
                    if (!this.showOnEmptyLinks && (!/href=["']\S+["']/.test(c.outerHTML) || /href=["']#\S+["']/.test(c.outerHTML))) return !0;
                    var d = this.base.getExtensionByName("toolbar");
                    if (!this.showWhenToolbarIsVisible && d && d.isDisplayed && d.isDisplayed()) return !0;
                    this.activeAnchor && this.activeAnchor !== c && this.detachPreviewHandlers(), this.anchorToPreview = c, this.instanceHandleAnchorMouseout = this.handleAnchorMouseout.bind(this), this.on(this.anchorToPreview, "mouseout", this.instanceHandleAnchorMouseout), this.base.delay((function() {
                        this.anchorToPreview && this.showPreview(this.anchorToPreview);
                    }).bind(this));
                }
            },
            handlePreviewMouseover: function() {
                this.lastOver = (new Date).getTime(), this.hovering = !0;
            },
            handlePreviewMouseout: function(a) {
                a.relatedTarget && /anchor-preview/.test(a.relatedTarget.className) || (this.hovering = !1);
            },
            updatePreview: function() {
                if (this.hovering) return !0;
                var a = (new Date).getTime() - this.lastOver;
                a > this.hideDelay && this.detachPreviewHandlers();
            },
            detachPreviewHandlers: function() {
                clearInterval(this.intervalTimer), this.instanceHandlePreviewMouseover && (this.off(this.anchorPreview, "mouseover", this.instanceHandlePreviewMouseover), this.off(this.anchorPreview, "mouseout", this.instanceHandlePreviewMouseout), this.activeAnchor && (this.off(this.activeAnchor, "mouseover", this.instanceHandlePreviewMouseover), this.off(this.activeAnchor, "mouseout", this.instanceHandlePreviewMouseout))), this.hidePreview(), this.hovering = this.instanceHandlePreviewMouseover = this.instanceHandlePreviewMouseout = null;
            },
            attachPreviewHandlers: function() {
                this.lastOver = (new Date).getTime(), this.hovering = !0, this.instanceHandlePreviewMouseover = this.handlePreviewMouseover.bind(this), this.instanceHandlePreviewMouseout = this.handlePreviewMouseout.bind(this), this.intervalTimer = setInterval(this.updatePreview.bind(this), 200), this.on(this.anchorPreview, "mouseover", this.instanceHandlePreviewMouseover), this.on(this.anchorPreview, "mouseout", this.instanceHandlePreviewMouseout), this.on(this.activeAnchor, "mouseover", this.instanceHandlePreviewMouseover), this.on(this.activeAnchor, "mouseout", this.instanceHandlePreviewMouseout);
            }
        });
        a.extensions.anchorPreview = b;
    }(), function() {
        function b(b) {
            return !a.util.getClosestTag(b, "a");
        }
        var c, d, e, f, g;
        c = [
            " ",
            "	",
            "\n",
            "\r",
            "\xa0",
            "\u2000",
            "\u2001",
            "\u2002",
            "\u2003",
            "\u2028",
            "\u2029"
        ], d = "com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw", e = "(((?:(https?://|ftps?://|nntp://)|www\\d{0,3}[.]|[a-z0-9.\\-]+[.](" + d + ")\\/)\\S+(?:[^\\s`!\\[\\]{};:'\".,?\xab\xbb\u201C\u201D\u2018\u2019])))|(([a-z0-9\\-]+\\.)?[a-z0-9\\-]+\\.(" + d + "))", f = new RegExp("^(" + d + ")$", "i"), g = new RegExp(e, "gi");
        var h = a.Extension.extend({
            init: function() {
                a.Extension.prototype.init.apply(this, arguments), this.disableEventHandling = !1, this.subscribe("editableKeypress", this.onKeypress.bind(this)), this.subscribe("editableBlur", this.onBlur.bind(this)), this.document.execCommand("AutoUrlDetect", !1, !1);
            },
            isLastInstance: function() {
                for(var a = 0, b = 0; b < this.window._mediumEditors.length; b++){
                    var c = this.window._mediumEditors[b];
                    null !== c && void 0 !== c.getExtensionByName("autoLink") && a++;
                }
                return 1 === a;
            },
            destroy: function() {
                this.document.queryCommandSupported("AutoUrlDetect") && this.isLastInstance() && this.document.execCommand("AutoUrlDetect", !1, !0);
            },
            onBlur: function(a, b) {
                this.performLinking(b);
            },
            onKeypress: function(b) {
                this.disableEventHandling || a.util.isKey(b, [
                    a.util.keyCode.SPACE,
                    a.util.keyCode.ENTER
                ]) && (clearTimeout(this.performLinkingTimeout), this.performLinkingTimeout = setTimeout((function() {
                    try {
                        var a = this.base.exportSelection();
                        this.performLinking(b.target) && this.base.importSelection(a, !0);
                    } catch (c) {
                        window.console && window.console.error("Failed to perform linking", c), this.disableEventHandling = !0;
                    }
                }).bind(this), 0));
            },
            performLinking: function(b) {
                var c = a.util.splitByBlockElements(b), d = !1;
                0 === c.length && (c = [
                    b
                ]);
                for(var e = 0; e < c.length; e++)d = this.removeObsoleteAutoLinkSpans(c[e]) || d, d = this.performLinkingWithinElement(c[e]) || d;
                return this.base.events.updateInput(b, {
                    target: b,
                    currentTarget: b
                }), d;
            },
            removeObsoleteAutoLinkSpans: function(c) {
                if (!c || 3 === c.nodeType) return !1;
                for(var d = c.querySelectorAll('span[data-auto-link="true"]'), e = !1, f = 0; f < d.length; f++){
                    var g = d[f].textContent;
                    if (-1 === g.indexOf("://") && (g = a.util.ensureUrlHasProtocol(g)), d[f].getAttribute("data-href") !== g && b(d[f])) {
                        e = !0;
                        var h = g.replace(/\s+$/, "");
                        if (d[f].getAttribute("data-href") === h) {
                            var i = g.length - h.length, j = a.util.splitOffDOMTree(d[f], this.splitTextBeforeEnd(d[f], i));
                            d[f].parentNode.insertBefore(j, d[f].nextSibling);
                        } else a.util.unwrap(d[f], this.document);
                    }
                }
                return e;
            },
            splitTextBeforeEnd: function(a, b) {
                for(var c = this.document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1), d = !0; d;)d = null !== c.lastChild();
                for(var e, f, g; b > 0 && null !== g;)e = c.currentNode, f = e.nodeValue, f.length > b ? (g = e.splitText(f.length - b), b = 0) : (g = c.previousNode(), b -= f.length);
                return g;
            },
            performLinkingWithinElement: function(b) {
                for(var c = this.findLinkableText(b), d = !1, e = 0; e < c.length; e++){
                    var f = a.util.findOrCreateMatchingTextNodes(this.document, b, c[e]);
                    this.shouldNotLink(f) || this.createAutoLink(f, c[e].href);
                }
                return d;
            },
            shouldNotLink: function(b) {
                for(var c = !1, d = 0; d < b.length && c === !1; d++)c = !!a.util.traverseUp(b[d], function(a) {
                    return "a" === a.nodeName.toLowerCase() || a.getAttribute && "true" === a.getAttribute("data-auto-link");
                });
                return c;
            },
            findLinkableText: function(a) {
                for(var b = a.textContent, d = null, e = []; null !== (d = g.exec(b));){
                    var h = !0, i = d.index + d[0].length;
                    h = !(0 !== d.index && -1 === c.indexOf(b[d.index - 1]) || i !== b.length && -1 === c.indexOf(b[i])), h = h && (-1 !== d[0].indexOf("/") || f.test(d[0].split(".").pop().split("?").shift())), h && e.push({
                        href: d[0],
                        start: d.index,
                        end: i
                    });
                }
                return e;
            },
            createAutoLink: function(b, c) {
                c = a.util.ensureUrlHasProtocol(c);
                var d = a.util.createLink(this.document, b, c, this.getEditorOption("targetBlank") ? "_blank" : null), e = this.document.createElement("span");
                for(e.setAttribute("data-auto-link", "true"), e.setAttribute("data-href", c), d.insertBefore(e, d.firstChild); d.childNodes.length > 1;)e.appendChild(d.childNodes[1]);
            }
        });
        a.extensions.autoLink = h;
    }(), function() {
        function b(b) {
            var d = a.util.getContainerEditorElement(b), e = Array.prototype.slice.call(d.parentElement.querySelectorAll("." + c));
            e.forEach(function(a) {
                a.classList.remove(c);
            });
        }
        var c = "medium-editor-dragover", d = a.Extension.extend({
            name: "fileDragging",
            allowedTypes: [
                "image"
            ],
            init: function() {
                a.Extension.prototype.init.apply(this, arguments), this.subscribe("editableDrag", this.handleDrag.bind(this)), this.subscribe("editableDrop", this.handleDrop.bind(this));
            },
            handleDrag: function(a) {
                a.preventDefault(), a.dataTransfer.dropEffect = "copy";
                var d = a.target.classList ? a.target : a.target.parentElement;
                b(d), "dragover" === a.type && d.classList.add(c);
            },
            handleDrop: function(a) {
                a.preventDefault(), a.stopPropagation(), this.base.selectElement(a.target);
                var c = this.base.exportSelection();
                c.start = c.end, this.base.importSelection(c), a.dataTransfer.files && Array.prototype.slice.call(a.dataTransfer.files).forEach(function(a) {
                    this.isAllowedFile(a) && a.type.match("image") && this.insertImageFile(a);
                }, this), b(a.target);
            },
            isAllowedFile: function(a) {
                return this.allowedTypes.some(function(b) {
                    return !!a.type.match(b);
                });
            },
            insertImageFile: function(b) {
                if ("function" == typeof FileReader) {
                    var c = new FileReader;
                    c.readAsDataURL(b), c.addEventListener("load", (function(b) {
                        var c = this.document.createElement("img");
                        c.src = b.target.result, a.util.insertHTMLCommand(this.document, c.outerHTML);
                    }).bind(this));
                }
            }
        });
        a.extensions.fileDragging = d;
    }(), function() {
        var b = a.Extension.extend({
            name: "keyboard-commands",
            commands: [
                {
                    command: "bold",
                    key: "B",
                    meta: !0,
                    shift: !1,
                    alt: !1
                },
                {
                    command: "italic",
                    key: "I",
                    meta: !0,
                    shift: !1,
                    alt: !1
                },
                {
                    command: "underline",
                    key: "U",
                    meta: !0,
                    shift: !1,
                    alt: !1
                }
            ],
            init: function() {
                a.Extension.prototype.init.apply(this, arguments), this.subscribe("editableKeydown", this.handleKeydown.bind(this)), this.keys = {}, this.commands.forEach(function(a) {
                    var b = a.key.charCodeAt(0);
                    this.keys[b] || (this.keys[b] = []), this.keys[b].push(a);
                }, this);
            },
            handleKeydown: function(b) {
                var c = a.util.getKeyCode(b);
                if (this.keys[c]) {
                    var d = a.util.isMetaCtrlKey(b), e = !!b.shiftKey, f = !!b.altKey;
                    this.keys[c].forEach(function(a) {
                        a.meta !== d || a.shift !== e || a.alt !== f && void 0 !== a.alt || (b.preventDefault(), b.stopPropagation(), "function" == typeof a.command ? a.command.apply(this) : !1 !== a.command && this.execAction(a.command));
                    }, this);
                }
            }
        });
        a.extensions.keyboardCommands = b;
    }(), function() {
        var b = a.extensions.form.extend({
            name: "fontname",
            action: "fontName",
            aria: "change font name",
            contentDefault: "&#xB1;",
            contentFA: '<i class="fa fa-font"></i>',
            fonts: [
                "",
                "Arial",
                "Verdana",
                "Times New Roman"
            ],
            init: function() {
                a.extensions.form.prototype.init.apply(this, arguments);
            },
            handleClick: function(a) {
                if (a.preventDefault(), a.stopPropagation(), !this.isDisplayed()) {
                    var b = this.document.queryCommandValue("fontName") + "";
                    this.showForm(b);
                }
                return !1;
            },
            getForm: function() {
                return this.form || (this.form = this.createForm()), this.form;
            },
            isDisplayed: function() {
                return "block" === this.getForm().style.display;
            },
            hideForm: function() {
                this.getForm().style.display = "none", this.getSelect().value = "";
            },
            showForm: function(a) {
                var b = this.getSelect();
                this.base.saveSelection(), this.hideToolbarDefaultActions(), this.getForm().style.display = "block", this.setToolbarPosition(), b.value = a || "", b.focus();
            },
            destroy: function() {
                return this.form ? (this.form.parentNode && this.form.parentNode.removeChild(this.form), void delete this.form) : !1;
            },
            doFormSave: function() {
                this.base.restoreSelection(), this.base.checkSelection();
            },
            doFormCancel: function() {
                this.base.restoreSelection(), this.clearFontName(), this.base.checkSelection();
            },
            createForm: function() {
                var a, b = this.document, c = b.createElement("div"), d = b.createElement("select"), e = b.createElement("a"), f = b.createElement("a");
                c.className = "medium-editor-toolbar-form", c.id = "medium-editor-toolbar-form-fontname-" + this.getEditorId(), this.on(c, "click", this.handleFormClick.bind(this));
                for(var g = 0; g < this.fonts.length; g++)a = b.createElement("option"), a.innerHTML = this.fonts[g], a.value = this.fonts[g], d.appendChild(a);
                return d.className = "medium-editor-toolbar-select", c.appendChild(d), this.on(d, "change", this.handleFontChange.bind(this)), f.setAttribute("href", "#"), f.className = "medium-editor-toobar-save", f.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>' : "&#10003;", c.appendChild(f), this.on(f, "click", this.handleSaveClick.bind(this), !0), e.setAttribute("href", "#"), e.className = "medium-editor-toobar-close", e.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>' : "&times;", c.appendChild(e), this.on(e, "click", this.handleCloseClick.bind(this)), c;
            },
            getSelect: function() {
                return this.getForm().querySelector("select.medium-editor-toolbar-select");
            },
            clearFontName: function() {
                a.selection.getSelectedElements(this.document).forEach(function(a) {
                    "font" === a.nodeName.toLowerCase() && a.hasAttribute("face") && a.removeAttribute("face");
                });
            },
            handleFontChange: function() {
                var a = this.getSelect().value;
                "" === a ? this.clearFontName() : this.execAction("fontName", {
                    value: a
                });
            },
            handleFormClick: function(a) {
                a.stopPropagation();
            },
            handleSaveClick: function(a) {
                a.preventDefault(), this.doFormSave();
            },
            handleCloseClick: function(a) {
                a.preventDefault(), this.doFormCancel();
            }
        });
        a.extensions.fontName = b;
    }(), function() {
        var b = a.extensions.form.extend({
            name: "fontsize",
            action: "fontSize",
            aria: "increase/decrease font size",
            contentDefault: "&#xB1;",
            contentFA: '<i class="fa fa-text-height"></i>',
            init: function() {
                a.extensions.form.prototype.init.apply(this, arguments);
            },
            handleClick: function(a) {
                if (a.preventDefault(), a.stopPropagation(), !this.isDisplayed()) {
                    var b = this.document.queryCommandValue("fontSize") + "";
                    this.showForm(b);
                }
                return !1;
            },
            getForm: function() {
                return this.form || (this.form = this.createForm()), this.form;
            },
            isDisplayed: function() {
                return "block" === this.getForm().style.display;
            },
            hideForm: function() {
                this.getForm().style.display = "none", this.getInput().value = "";
            },
            showForm: function(a) {
                var b = this.getInput();
                this.base.saveSelection(), this.hideToolbarDefaultActions(), this.getForm().style.display = "block", this.setToolbarPosition(), b.value = a || "", b.focus();
            },
            destroy: function() {
                return this.form ? (this.form.parentNode && this.form.parentNode.removeChild(this.form), void delete this.form) : !1;
            },
            doFormSave: function() {
                this.base.restoreSelection(), this.base.checkSelection();
            },
            doFormCancel: function() {
                this.base.restoreSelection(), this.clearFontSize(), this.base.checkSelection();
            },
            createForm: function() {
                var a = this.document, b = a.createElement("div"), c = a.createElement("input"), d = a.createElement("a"), e = a.createElement("a");
                return b.className = "medium-editor-toolbar-form", b.id = "medium-editor-toolbar-form-fontsize-" + this.getEditorId(), this.on(b, "click", this.handleFormClick.bind(this)), c.setAttribute("type", "range"), c.setAttribute("min", "1"), c.setAttribute("max", "7"), c.className = "medium-editor-toolbar-input", b.appendChild(c), this.on(c, "change", this.handleSliderChange.bind(this)), e.setAttribute("href", "#"), e.className = "medium-editor-toobar-save", e.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>' : "&#10003;", b.appendChild(e), this.on(e, "click", this.handleSaveClick.bind(this), !0), d.setAttribute("href", "#"), d.className = "medium-editor-toobar-close", d.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>' : "&times;", b.appendChild(d), this.on(d, "click", this.handleCloseClick.bind(this)), b;
            },
            getInput: function() {
                return this.getForm().querySelector("input.medium-editor-toolbar-input");
            },
            clearFontSize: function() {
                a.selection.getSelectedElements(this.document).forEach(function(a) {
                    "font" === a.nodeName.toLowerCase() && a.hasAttribute("size") && a.removeAttribute("size");
                });
            },
            handleSliderChange: function() {
                var a = this.getInput().value;
                "4" === a ? this.clearFontSize() : this.execAction("fontSize", {
                    value: a
                });
            },
            handleFormClick: function(a) {
                a.stopPropagation();
            },
            handleSaveClick: function(a) {
                a.preventDefault(), this.doFormSave();
            },
            handleCloseClick: function(a) {
                a.preventDefault(), this.doFormCancel();
            }
        });
        a.extensions.fontSize = b;
    }(), function() {
        function b() {
            return [
                [
                    new RegExp(/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/g),
                    ""
                ],
                [
                    new RegExp(/<!--StartFragment-->|<!--EndFragment-->/g),
                    ""
                ],
                [
                    new RegExp(/<br>$/i),
                    ""
                ],
                [
                    new RegExp(/<[^>]*docs-internal-guid[^>]*>/gi),
                    ""
                ],
                [
                    new RegExp(/<\/b>(<br[^>]*>)?$/gi),
                    ""
                ],
                [
                    new RegExp(/<span class="Apple-converted-space">\s+<\/span>/g),
                    " "
                ],
                [
                    new RegExp(/<br class="Apple-interchange-newline">/g),
                    "<br>"
                ],
                [
                    new RegExp(/<span[^>]*(font-style:italic;font-weight:(bold|700)|font-weight:(bold|700);font-style:italic)[^>]*>/gi),
                    '<span class="replace-with italic bold">'
                ],
                [
                    new RegExp(/<span[^>]*font-style:italic[^>]*>/gi),
                    '<span class="replace-with italic">'
                ],
                [
                    new RegExp(/<span[^>]*font-weight:(bold|700)[^>]*>/gi),
                    '<span class="replace-with bold">'
                ],
                [
                    new RegExp(/&lt;(\/?)(i|b|a)&gt;/gi),
                    "<$1$2>"
                ],
                [
                    new RegExp(/&lt;a(?:(?!href).)+href=(?:&quot;|&rdquo;|&ldquo;|"|“|”)(((?!&quot;|&rdquo;|&ldquo;|"|“|”).)*)(?:&quot;|&rdquo;|&ldquo;|"|“|”)(?:(?!&gt;).)*&gt;/gi),
                    '<a href="$1">'
                ],
                [
                    new RegExp(/<\/p>\n+/gi),
                    "</p>"
                ],
                [
                    new RegExp(/\n+<p/gi),
                    "<p"
                ],
                [
                    new RegExp(/<\/?o:[a-z]*>/gi),
                    ""
                ],
                [
                    new RegExp(/<!\[if !supportLists\]>(((?!<!).)*)<!\[endif]\>/gi),
                    "$1"
                ]
            ];
        }
        function c(a, b, c) {
            var d = a.clipboardData || b.clipboardData || c.dataTransfer, e = {};
            if (!d) return e;
            if (d.getData) {
                var f = d.getData("Text");
                f && f.length > 0 && (e["text/plain"] = f);
            }
            if (d.types) for(var g = 0; g < d.types.length; g++){
                var h = d.types[g];
                e[h] = d.getData(h);
            }
            return e;
        }
        var d = "%ME_PASTEBIN%", e = null, f = null, g = function(a) {
            a.stopPropagation();
        }, h = a.Extension.extend({
            forcePlainText: !0,
            cleanPastedHTML: !1,
            preCleanReplacements: [],
            cleanReplacements: [],
            cleanAttrs: [
                "class",
                "style",
                "dir"
            ],
            cleanTags: [
                "meta"
            ],
            unwrapTags: [],
            init: function() {
                a.Extension.prototype.init.apply(this, arguments), (this.forcePlainText || this.cleanPastedHTML) && (this.subscribe("editableKeydown", this.handleKeydown.bind(this)), this.getEditorElements().forEach(function(a) {
                    this.on(a, "paste", this.handlePaste.bind(this));
                }, this), this.subscribe("addElement", this.handleAddElement.bind(this)));
            },
            handleAddElement: function(a, b) {
                this.on(b, "paste", this.handlePaste.bind(this));
            },
            destroy: function() {
                (this.forcePlainText || this.cleanPastedHTML) && this.removePasteBin();
            },
            handlePaste: function(a, b) {
                if (!a.defaultPrevented) {
                    var d = c(a, this.window, this.document), e = d["text/html"], f = d["text/plain"];
                    this.window.clipboardData && void 0 === a.clipboardData && !e && (e = f), (e || f) && (a.preventDefault(), this.doPaste(e, f, b));
                }
            },
            doPaste: function(b, c, d) {
                var e, f, g = "";
                if (this.cleanPastedHTML && b) return this.cleanPaste(b);
                if (c) {
                    if (this.getEditorOption("disableReturn") || d && d.getAttribute("data-disable-return")) g = a.util.htmlEntities(c);
                    else if (e = c.split(/[\r\n]+/g), e.length > 1) for(f = 0; f < e.length; f += 1)"" !== e[f] && (g += "<p>" + a.util.htmlEntities(e[f]) + "</p>");
                    else g = a.util.htmlEntities(e[0]);
                    a.util.insertHTMLCommand(this.document, g);
                }
            },
            handlePasteBinPaste: function(a) {
                if (a.defaultPrevented) return void this.removePasteBin();
                var b = c(a, this.window, this.document), d = b["text/html"], e = b["text/plain"], g = f;
                return !this.cleanPastedHTML || d ? (a.preventDefault(), this.removePasteBin(), this.doPaste(d, e, g), void this.trigger("editablePaste", {
                    currentTarget: g,
                    target: g
                }, g)) : void setTimeout((function() {
                    this.cleanPastedHTML && (d = this.getPasteBinHtml()), this.removePasteBin(), this.doPaste(d, e, g), this.trigger("editablePaste", {
                        currentTarget: g,
                        target: g
                    }, g);
                }).bind(this), 0);
            },
            handleKeydown: function(b, c) {
                a.util.isKey(b, a.util.keyCode.V) && a.util.isMetaCtrlKey(b) && (b.stopImmediatePropagation(), this.removePasteBin(), this.createPasteBin(c));
            },
            createPasteBin: function(b) {
                var c, h = a.selection.getSelectionRange(this.document), i = this.window.pageYOffset;
                f = b, h && (c = h.getClientRects(), i += c.length ? c[0].top : void 0 !== h.startContainer.getBoundingClientRect ? h.startContainer.getBoundingClientRect().top : h.getBoundingClientRect().top), e = h;
                var j = this.document.createElement("div");
                j.id = this.pasteBinId = "medium-editor-pastebin-" + +Date.now(), j.setAttribute("style", "border: 1px red solid; position: absolute; top: " + i + "px; width: 10px; height: 10px; overflow: hidden; opacity: 0"), j.setAttribute("contentEditable", !0), j.innerHTML = d, this.document.body.appendChild(j), this.on(j, "focus", g), this.on(j, "focusin", g), this.on(j, "focusout", g), j.focus(), a.selection.selectNode(j, this.document), this.boundHandlePaste || (this.boundHandlePaste = this.handlePasteBinPaste.bind(this)), this.on(j, "paste", this.boundHandlePaste);
            },
            removePasteBin: function() {
                null !== e && (a.selection.selectRange(this.document, e), e = null), null !== f && (f = null);
                var b = this.getPasteBin();
                b && b && (this.off(b, "focus", g), this.off(b, "focusin", g), this.off(b, "focusout", g), this.off(b, "paste", this.boundHandlePaste), b.parentElement.removeChild(b));
            },
            getPasteBin: function() {
                return this.document.getElementById(this.pasteBinId);
            },
            getPasteBinHtml: function() {
                var a = this.getPasteBin();
                if (!a) return !1;
                if (a.firstChild && "mcepastebin" === a.firstChild.id) return !1;
                var b = a.innerHTML;
                return b && b !== d ? b : !1;
            },
            cleanPaste: function(a) {
                var c, d, e, f, g = /<p|<br|<div/.test(a), h = [].concat(this.preCleanReplacements || [], b(), this.cleanReplacements || []);
                for(c = 0; c < h.length; c += 1)a = a.replace(h[c][0], h[c][1]);
                if (!g) return this.pasteHTML(a);
                for(e = this.document.createElement("div"), e.innerHTML = "<p>" + a.split("<br><br>").join("</p><p>") + "</p>", d = e.querySelectorAll("a,p,div,br"), c = 0; c < d.length; c += 1)switch(f = d[c], f.innerHTML = f.innerHTML.replace(/\n/gi, " "), f.nodeName.toLowerCase()){
                    case "p":
                    case "div":
                        this.filterCommonBlocks(f);
                        break;
                    case "br":
                        this.filterLineBreak(f);
                }
                this.pasteHTML(e.innerHTML);
            },
            pasteHTML: function(b, c) {
                c = a.util.defaults({}, c, {
                    cleanAttrs: this.cleanAttrs,
                    cleanTags: this.cleanTags,
                    unwrapTags: this.unwrapTags
                });
                var d, e, f, g, h = this.document.createDocumentFragment();
                for(h.appendChild(this.document.createElement("body")), g = h.querySelector("body"), g.innerHTML = b, this.cleanupSpans(g), d = g.querySelectorAll("*"), f = 0; f < d.length; f += 1)e = d[f], "a" === e.nodeName.toLowerCase() && this.getEditorOption("targetBlank") && a.util.setTargetBlank(e), a.util.cleanupAttrs(e, c.cleanAttrs), a.util.cleanupTags(e, c.cleanTags), a.util.unwrapTags(e, c.unwrapTags);
                a.util.insertHTMLCommand(this.document, g.innerHTML.replace(/&nbsp;/g, " "));
            },
            isCommonBlock: function(a) {
                return a && ("p" === a.nodeName.toLowerCase() || "div" === a.nodeName.toLowerCase());
            },
            filterCommonBlocks: function(a) {
                /^\s*$/.test(a.textContent) && a.parentNode && a.parentNode.removeChild(a);
            },
            filterLineBreak: function(a) {
                this.isCommonBlock(a.previousElementSibling) ? this.removeWithParent(a) : !this.isCommonBlock(a.parentNode) || a.parentNode.firstChild !== a && a.parentNode.lastChild !== a ? a.parentNode && 1 === a.parentNode.childElementCount && "" === a.parentNode.textContent && this.removeWithParent(a) : this.removeWithParent(a);
            },
            removeWithParent: function(a) {
                a && a.parentNode && (a.parentNode.parentNode && 1 === a.parentNode.childElementCount ? a.parentNode.parentNode.removeChild(a.parentNode) : a.parentNode.removeChild(a));
            },
            cleanupSpans: function(b) {
                var c, d, e, f = b.querySelectorAll(".replace-with"), g = function(a) {
                    return a && "#text" !== a.nodeName && "false" === a.getAttribute("contenteditable");
                };
                for(c = 0; c < f.length; c += 1)d = f[c], e = this.document.createElement(d.classList.contains("bold") ? "b" : "i"), d.classList.contains("bold") && d.classList.contains("italic") ? e.innerHTML = "<i>" + d.innerHTML + "</i>" : e.innerHTML = d.innerHTML, d.parentNode.replaceChild(e, d);
                for(f = b.querySelectorAll("span"), c = 0; c < f.length; c += 1){
                    if (d = f[c], a.util.traverseUp(d, g)) return !1;
                    a.util.unwrap(d, this.document);
                }
            }
        });
        a.extensions.paste = h;
    }(), function() {
        var b = a.Extension.extend({
            name: "placeholder",
            text: "Type your text",
            hideOnClick: !0,
            init: function() {
                a.Extension.prototype.init.apply(this, arguments), this.initPlaceholders(), this.attachEventHandlers();
            },
            initPlaceholders: function() {
                this.getEditorElements().forEach(this.initElement, this);
            },
            handleAddElement: function(a, b) {
                this.initElement(b);
            },
            initElement: function(a) {
                a.getAttribute("data-placeholder") || a.setAttribute("data-placeholder", this.text), this.updatePlaceholder(a);
            },
            destroy: function() {
                this.getEditorElements().forEach(this.cleanupElement, this);
            },
            handleRemoveElement: function(a, b) {
                this.cleanupElement(b);
            },
            cleanupElement: function(a) {
                a.getAttribute("data-placeholder") === this.text && a.removeAttribute("data-placeholder");
            },
            showPlaceholder: function(b) {
                b && (a.util.isFF && 0 === b.childNodes.length ? (b.classList.add("medium-editor-placeholder-relative"), b.classList.remove("medium-editor-placeholder")) : (b.classList.add("medium-editor-placeholder"), b.classList.remove("medium-editor-placeholder-relative")));
            },
            hidePlaceholder: function(a) {
                a && (a.classList.remove("medium-editor-placeholder"), a.classList.remove("medium-editor-placeholder-relative"));
            },
            updatePlaceholder: function(a, b) {
                return a.querySelector("img, blockquote, ul, ol, table") || "" !== a.textContent.replace(/^\s+|\s+$/g, "") ? this.hidePlaceholder(a) : void (b || this.showPlaceholder(a));
            },
            attachEventHandlers: function() {
                this.hideOnClick && this.subscribe("focus", this.handleFocus.bind(this)), this.subscribe("editableInput", this.handleInput.bind(this)), this.subscribe("blur", this.handleBlur.bind(this)), this.subscribe("addElement", this.handleAddElement.bind(this)), this.subscribe("removeElement", this.handleRemoveElement.bind(this));
            },
            handleInput: function(a, b) {
                var c = this.hideOnClick && b === this.base.getFocusedElement();
                this.updatePlaceholder(b, c);
            },
            handleFocus: function(a, b) {
                this.hidePlaceholder(b);
            },
            handleBlur: function(a, b) {
                this.updatePlaceholder(b);
            }
        });
        a.extensions.placeholder = b;
    }(), function() {
        var b = a.Extension.extend({
            name: "toolbar",
            align: "center",
            allowMultiParagraphSelection: !0,
            buttons: [
                "bold",
                "italic",
                "underline",
                "anchor",
                "h2",
                "h3",
                "quote"
            ],
            diffLeft: 0,
            diffTop: -10,
            firstButtonClass: "medium-editor-button-first",
            lastButtonClass: "medium-editor-button-last",
            standardizeSelectionStart: !1,
            "static": !1,
            sticky: !1,
            stickyTopOffset: 0,
            updateOnEmptySelection: !1,
            relativeContainer: null,
            init: function() {
                a.Extension.prototype.init.apply(this, arguments), this.initThrottledMethods(), this.relativeContainer ? this.relativeContainer.appendChild(this.getToolbarElement()) : this.getEditorOption("elementsContainer").appendChild(this.getToolbarElement());
            },
            forEachExtension: function(a, b) {
                return this.base.extensions.forEach(function(c) {
                    return c !== this ? a.apply(b || this, arguments) : void 0;
                }, this);
            },
            createToolbar: function() {
                var a = this.document.createElement("div");
                return a.id = "medium-editor-toolbar-" + this.getEditorId(), a.className = "medium-editor-toolbar", this["static"] ? a.className += " static-toolbar" : this.relativeContainer ? a.className += " medium-editor-relative-toolbar" : a.className += " medium-editor-stalker-toolbar", a.appendChild(this.createToolbarButtons()), this.forEachExtension(function(b) {
                    b.hasForm && a.appendChild(b.getForm());
                }), this.attachEventHandlers(), a;
            },
            createToolbarButtons: function() {
                var b, c, d, e, f, g, h = this.document.createElement("ul");
                return h.id = "medium-editor-toolbar-actions" + this.getEditorId(), h.className = "medium-editor-toolbar-actions", h.style.display = "block", this.buttons.forEach(function(d) {
                    "string" == typeof d ? (f = d, g = null) : (f = d.name, g = d), e = this.base.addBuiltInExtension(f, g), e && "function" == typeof e.getButton && (c = e.getButton(this.base), b = this.document.createElement("li"), a.util.isElement(c) ? b.appendChild(c) : b.innerHTML = c, h.appendChild(b));
                }, this), d = h.querySelectorAll("button"), d.length > 0 && (d[0].classList.add(this.firstButtonClass), d[d.length - 1].classList.add(this.lastButtonClass)), h;
            },
            destroy: function() {
                this.toolbar && (this.toolbar.parentNode && this.toolbar.parentNode.removeChild(this.toolbar), delete this.toolbar);
            },
            getInteractionElements: function() {
                return this.getToolbarElement();
            },
            getToolbarElement: function() {
                return this.toolbar || (this.toolbar = this.createToolbar()), this.toolbar;
            },
            getToolbarActionsElement: function() {
                return this.getToolbarElement().querySelector(".medium-editor-toolbar-actions");
            },
            initThrottledMethods: function() {
                this.throttledPositionToolbar = a.util.throttle((function() {
                    this.base.isActive && this.positionToolbarIfShown();
                }).bind(this));
            },
            attachEventHandlers: function() {
                this.subscribe("blur", this.handleBlur.bind(this)), this.subscribe("focus", this.handleFocus.bind(this)), this.subscribe("editableClick", this.handleEditableClick.bind(this)), this.subscribe("editableKeyup", this.handleEditableKeyup.bind(this)), this.on(this.document.documentElement, "mouseup", this.handleDocumentMouseup.bind(this)), this["static"] && this.sticky && this.on(this.window, "scroll", this.handleWindowScroll.bind(this), !0), this.on(this.window, "resize", this.handleWindowResize.bind(this));
            },
            handleWindowScroll: function() {
                this.positionToolbarIfShown();
            },
            handleWindowResize: function() {
                this.throttledPositionToolbar();
            },
            handleDocumentMouseup: function(b) {
                return b && b.target && a.util.isDescendant(this.getToolbarElement(), b.target) ? !1 : void this.checkState();
            },
            handleEditableClick: function() {
                setTimeout((function() {
                    this.checkState();
                }).bind(this), 0);
            },
            handleEditableKeyup: function() {
                this.checkState();
            },
            handleBlur: function() {
                clearTimeout(this.hideTimeout), clearTimeout(this.delayShowTimeout), this.hideTimeout = setTimeout((function() {
                    this.hideToolbar();
                }).bind(this), 1);
            },
            handleFocus: function() {
                this.checkState();
            },
            isDisplayed: function() {
                return this.getToolbarElement().classList.contains("medium-editor-toolbar-active");
            },
            showToolbar: function() {
                clearTimeout(this.hideTimeout), this.isDisplayed() || (this.getToolbarElement().classList.add("medium-editor-toolbar-active"), this.trigger("showToolbar", {}, this.base.getFocusedElement()));
            },
            hideToolbar: function() {
                this.isDisplayed() && (this.getToolbarElement().classList.remove("medium-editor-toolbar-active"), this.trigger("hideToolbar", {}, this.base.getFocusedElement()));
            },
            isToolbarDefaultActionsDisplayed: function() {
                return "block" === this.getToolbarActionsElement().style.display;
            },
            hideToolbarDefaultActions: function() {
                this.isToolbarDefaultActionsDisplayed() && (this.getToolbarActionsElement().style.display = "none");
            },
            showToolbarDefaultActions: function() {
                this.hideExtensionForms(), this.isToolbarDefaultActionsDisplayed() || (this.getToolbarActionsElement().style.display = "block"), this.delayShowTimeout = this.base.delay((function() {
                    this.showToolbar();
                }).bind(this));
            },
            hideExtensionForms: function() {
                this.forEachExtension(function(a) {
                    a.hasForm && a.isDisplayed() && a.hideForm();
                });
            },
            multipleBlockElementsSelected: function() {
                var b = /<[^\/>][^>]*><\/[^>]+>/gim, c = new RegExp("<(" + a.util.blockContainerElementNames.join("|") + ")[^>]*>", "g"), d = a.selection.getSelectionHtml(this.document).replace(b, ""), e = d.match(c);
                return !!e && e.length > 1;
            },
            modifySelection: function() {
                var b = this.window.getSelection(), c = b.getRangeAt(0);
                if (this.standardizeSelectionStart && c.startContainer.nodeValue && c.startOffset === c.startContainer.nodeValue.length) {
                    var d = a.util.findAdjacentTextNodeWithContent(a.selection.getSelectionElement(this.window), c.startContainer, this.document);
                    if (d) {
                        for(var e = 0; 0 === d.nodeValue.substr(e, 1).trim().length;)e += 1;
                        c = a.selection.select(this.document, d, e, c.endContainer, c.endOffset);
                    }
                }
            },
            checkState: function() {
                if (!this.base.preventSelectionUpdates) {
                    if (!this.base.getFocusedElement() || a.selection.selectionInContentEditableFalse(this.window)) return this.hideToolbar();
                    var b = a.selection.getSelectionElement(this.window);
                    return !b || -1 === this.getEditorElements().indexOf(b) || b.getAttribute("data-disable-toolbar") ? this.hideToolbar() : this.updateOnEmptySelection && this["static"] ? this.showAndUpdateToolbar() : !a.selection.selectionContainsContent(this.document) || this.allowMultiParagraphSelection === !1 && this.multipleBlockElementsSelected() ? this.hideToolbar() : void this.showAndUpdateToolbar();
                }
            },
            showAndUpdateToolbar: function() {
                this.modifySelection(), this.setToolbarButtonStates(), this.trigger("positionToolbar", {}, this.base.getFocusedElement()), this.showToolbarDefaultActions(), this.setToolbarPosition();
            },
            setToolbarButtonStates: function() {
                this.forEachExtension(function(a) {
                    "function" == typeof a.isActive && "function" == typeof a.setInactive && a.setInactive();
                }), this.checkActiveButtons();
            },
            checkActiveButtons: function() {
                var b, c = [], d = null, e = a.selection.getSelectionRange(this.document), f = function(a) {
                    "function" == typeof a.checkState ? a.checkState(b) : "function" == typeof a.isActive && "function" == typeof a.isAlreadyApplied && "function" == typeof a.setActive && !a.isActive() && a.isAlreadyApplied(b) && a.setActive();
                };
                if (e && (this.forEachExtension(function(a) {
                    return "function" == typeof a.queryCommandState && (d = a.queryCommandState(), null !== d) ? void (d && "function" == typeof a.setActive && a.setActive()) : void c.push(a);
                }), b = a.selection.getSelectedParentElement(e), this.getEditorElements().some(function(c) {
                    return a.util.isDescendant(c, b, !0);
                }))) for(; b && (c.forEach(f), !a.util.isMediumEditorElement(b));)b = b.parentNode;
            },
            positionToolbarIfShown: function() {
                this.isDisplayed() && this.setToolbarPosition();
            },
            setToolbarPosition: function() {
                var a = this.base.getFocusedElement(), b = this.window.getSelection();
                return a ? void (!this["static"] && b.isCollapsed || (this.showToolbar(), this.relativeContainer || (this["static"] ? this.positionStaticToolbar(a) : this.positionToolbar(b)), this.trigger("positionedToolbar", {}, this.base.getFocusedElement()))) : this;
            },
            positionStaticToolbar: function(a) {
                this.getToolbarElement().style.left = "0";
                var b, c = this.document.documentElement && this.document.documentElement.scrollTop || this.document.body.scrollTop, d = this.window.innerWidth, e = this.getToolbarElement(), f = a.getBoundingClientRect(), g = f.top + c, h = f.left + f.width / 2, i = e.offsetHeight, j = e.offsetWidth, k = j / 2;
                switch(this.sticky ? c > g + a.offsetHeight - i - this.stickyTopOffset ? (e.style.top = g + a.offsetHeight - i + "px", e.classList.remove("medium-editor-sticky-toolbar")) : c > g - i - this.stickyTopOffset ? (e.classList.add("medium-editor-sticky-toolbar"), e.style.top = this.stickyTopOffset + "px") : (e.classList.remove("medium-editor-sticky-toolbar"), e.style.top = g - i + "px") : e.style.top = g - i + "px", this.align){
                    case "left":
                        b = f.left;
                        break;
                    case "right":
                        b = f.right - j;
                        break;
                    case "center":
                        b = h - k;
                }
                0 > b ? b = 0 : b + j > d && (b = d - Math.ceil(j) - 1), e.style.left = b + "px";
            },
            positionToolbar: function(a) {
                this.getToolbarElement().style.left = "0", this.getToolbarElement().style.right = "initial";
                var b = a.getRangeAt(0), c = b.getBoundingClientRect();
                (!c || 0 === c.height && 0 === c.width && b.startContainer === b.endContainer) && (c = 1 === b.startContainer.nodeType && b.startContainer.querySelector("img") ? b.startContainer.querySelector("img").getBoundingClientRect() : b.startContainer.getBoundingClientRect());
                var d, e, f = this.window.innerWidth, g = this.getToolbarElement(), h = g.offsetHeight, i = g.offsetWidth, j = i / 2, k = 50, l = this.diffLeft - j, m = this.getEditorOption("elementsContainer"), n = [
                    "absolute",
                    "fixed"
                ].indexOf(window.getComputedStyle(m).getPropertyValue("position")) > -1, o = {}, p = {};
                n ? (e = m.getBoundingClientRect(), [
                    "top",
                    "left"
                ].forEach(function(a) {
                    p[a] = c[a] - e[a];
                }), p.width = c.width, p.height = c.height, c = p, f = e.width, o.top = m.scrollTop) : o.top = this.window.pageYOffset, d = c.left + c.width / 2, o.top += c.top - h, c.top < k ? (g.classList.add("medium-toolbar-arrow-over"), g.classList.remove("medium-toolbar-arrow-under"), o.top += k + c.height - this.diffTop) : (g.classList.add("medium-toolbar-arrow-under"), g.classList.remove("medium-toolbar-arrow-over"), o.top += this.diffTop), j > d ? (o.left = l + j, o.right = "initial") : j > f - d ? (o.left = "auto", o.right = 0) : (o.left = l + d, o.right = "initial"), [
                    "top",
                    "left",
                    "right"
                ].forEach(function(a) {
                    g.style[a] = o[a] + (isNaN(o[a]) ? "" : "px");
                });
            }
        });
        a.extensions.toolbar = b;
    }(), function() {
        var b = a.Extension.extend({
            init: function() {
                a.Extension.prototype.init.apply(this, arguments), this.subscribe("editableDrag", this.handleDrag.bind(this)), this.subscribe("editableDrop", this.handleDrop.bind(this));
            },
            handleDrag: function(a) {
                var b = "medium-editor-dragover";
                a.preventDefault(), a.dataTransfer.dropEffect = "copy", "dragover" === a.type ? a.target.classList.add(b) : "dragleave" === a.type && a.target.classList.remove(b);
            },
            handleDrop: function(b) {
                var c, d = "medium-editor-dragover";
                b.preventDefault(), b.stopPropagation(), b.dataTransfer.files && (c = Array.prototype.slice.call(b.dataTransfer.files, 0), c.some((function(b) {
                    if (b.type.match("image")) {
                        var c, d;
                        c = new FileReader, c.readAsDataURL(b), d = "medium-img-" + +new Date, a.util.insertHTMLCommand(this.document, '<img class="medium-editor-image-loading" id="' + d + '" />'), c.onload = (function() {
                            var a = this.document.getElementById(d);
                            a && (a.removeAttribute("id"), a.removeAttribute("class"), a.src = c.result);
                        }).bind(this);
                    }
                }).bind(this))), b.target.classList.remove(d);
            }
        });
        a.extensions.imageDragging = b;
    }(), function() {
        function b(b) {
            var c = a.selection.getSelectionStart(this.options.ownerDocument), d = c.textContent, e = a.selection.getCaretOffsets(c);
            (void 0 === d[e.left - 1] || "" === d[e.left - 1].trim() || void 0 !== d[e.left] && "" === d[e.left].trim()) && b.preventDefault();
        }
        function c(b, c) {
            if (this.options.disableReturn || c.getAttribute("data-disable-return")) b.preventDefault();
            else if (this.options.disableDoubleReturn || c.getAttribute("data-disable-double-return")) {
                var d = a.selection.getSelectionStart(this.options.ownerDocument);
                (d && "" === d.textContent.trim() && "li" !== d.nodeName.toLowerCase() || d.previousElementSibling && "br" !== d.previousElementSibling.nodeName.toLowerCase() && "" === d.previousElementSibling.textContent.trim()) && b.preventDefault();
            }
        }
        function d(b) {
            var c = a.selection.getSelectionStart(this.options.ownerDocument), d = c && c.nodeName.toLowerCase();
            "pre" === d && (b.preventDefault(), a.util.insertHTMLCommand(this.options.ownerDocument, "    ")), a.util.isListItem(c) && (b.preventDefault(), b.shiftKey ? this.options.ownerDocument.execCommand("outdent", !1, null) : this.options.ownerDocument.execCommand("indent", !1, null));
        }
        function e(b) {
            var c, d = a.selection.getSelectionStart(this.options.ownerDocument), e = d.nodeName.toLowerCase(), f = /^(\s+|<br\/?>)?$/i, g = /h\d/i;
            a.util.isKey(b, [
                a.util.keyCode.BACKSPACE,
                a.util.keyCode.ENTER
            ]) && d.previousElementSibling && g.test(e) && 0 === a.selection.getCaretOffsets(d).left ? a.util.isKey(b, a.util.keyCode.BACKSPACE) && f.test(d.previousElementSibling.innerHTML) ? (d.previousElementSibling.parentNode.removeChild(d.previousElementSibling), b.preventDefault()) : !this.options.disableDoubleReturn && a.util.isKey(b, a.util.keyCode.ENTER) && (c = this.options.ownerDocument.createElement("p"), c.innerHTML = "<br>", d.previousElementSibling.parentNode.insertBefore(c, d), b.preventDefault()) : a.util.isKey(b, a.util.keyCode.DELETE) && d.nextElementSibling && d.previousElementSibling && !g.test(e) && f.test(d.innerHTML) && g.test(d.nextElementSibling.nodeName.toLowerCase()) ? (a.selection.moveCursor(this.options.ownerDocument, d.nextElementSibling), d.previousElementSibling.parentNode.removeChild(d), b.preventDefault()) : a.util.isKey(b, a.util.keyCode.BACKSPACE) && "li" === e && f.test(d.innerHTML) && !d.previousElementSibling && !d.parentElement.previousElementSibling && d.nextElementSibling && "li" === d.nextElementSibling.nodeName.toLowerCase() ? (c = this.options.ownerDocument.createElement("p"), c.innerHTML = "<br>", d.parentElement.parentElement.insertBefore(c, d.parentElement), a.selection.moveCursor(this.options.ownerDocument, c), d.parentElement.removeChild(d), b.preventDefault()) : a.util.isKey(b, a.util.keyCode.BACKSPACE) && a.util.getClosestTag(d, "blockquote") !== !1 && 0 === a.selection.getCaretOffsets(d).left ? (b.preventDefault(), a.util.execFormatBlock(this.options.ownerDocument, "p")) : a.util.isKey(b, a.util.keyCode.ENTER) && a.util.getClosestTag(d, "blockquote") !== !1 && 0 === a.selection.getCaretOffsets(d).right ? (c = this.options.ownerDocument.createElement("p"), c.innerHTML = "<br>", d.parentElement.insertBefore(c, d.nextSibling), a.selection.moveCursor(this.options.ownerDocument, c), b.preventDefault()) : a.util.isKey(b, a.util.keyCode.BACKSPACE) && a.util.isMediumEditorElement(d.parentElement) && !d.previousElementSibling && d.nextElementSibling && f.test(d.innerHTML) && (b.preventDefault(), a.selection.moveCursor(this.options.ownerDocument, d.nextSibling), d.parentElement.removeChild(d));
        }
        function f(b) {
            var c, d = a.selection.getSelectionStart(this.options.ownerDocument);
            d && (a.util.isMediumEditorElement(d) && 0 === d.children.length && !a.util.isBlockContainer(d) && this.options.ownerDocument.execCommand("formatBlock", !1, "p"), !a.util.isKey(b, a.util.keyCode.ENTER) || a.util.isListItem(d) || a.util.isBlockContainer(d) || (c = d.nodeName.toLowerCase(), "a" === c ? this.options.ownerDocument.execCommand("unlink", !1, null) : b.shiftKey || b.ctrlKey || this.options.ownerDocument.execCommand("formatBlock", !1, "p")));
        }
        function g(a, b) {
            var c = b.parentNode.querySelector('textarea[medium-editor-textarea-id="' + b.getAttribute("medium-editor-textarea-id") + '"]');
            c && (c.value = b.innerHTML.trim());
        }
        function h(a) {
            a._mediumEditors || (a._mediumEditors = [
                null
            ]), this.id || (this.id = a._mediumEditors.length), a._mediumEditors[this.id] = this;
        }
        function i(a) {
            a._mediumEditors && a._mediumEditors[this.id] && (a._mediumEditors[this.id] = null);
        }
        function j(b, c, d) {
            var e = [];
            if (b || (b = []), "string" == typeof b && (b = c.querySelectorAll(b)), a.util.isElement(b) && (b = [
                b
            ]), d) for(var f = 0; f < b.length; f++){
                var g = b[f];
                !a.util.isElement(g) || g.getAttribute("data-medium-editor-element") || g.getAttribute("medium-editor-textarea-id") || e.push(g);
            }
            else e = Array.prototype.slice.apply(b);
            return e;
        }
        function k(a) {
            var b = a.parentNode.querySelector('textarea[medium-editor-textarea-id="' + a.getAttribute("medium-editor-textarea-id") + '"]');
            b && (b.classList.remove("medium-editor-hidden"), b.removeAttribute("medium-editor-textarea-id")), a.parentNode && a.parentNode.removeChild(a);
        }
        function l(a, b) {
            return Object.keys(b).forEach(function(c) {
                void 0 === a[c] && (a[c] = b[c]);
            }), a;
        }
        function m(a, b, c) {
            var d = {
                window: c.options.contentWindow,
                document: c.options.ownerDocument,
                base: c
            };
            return a = l(a, d), "function" == typeof a.init && a.init(), a.name || (a.name = b), a;
        }
        function n() {
            return this.elements.every(function(a) {
                return !!a.getAttribute("data-disable-toolbar");
            }) ? !1 : this.options.toolbar !== !1;
        }
        function o() {
            return n.call(this) ? this.options.anchorPreview !== !1 : !1;
        }
        function p() {
            return this.options.placeholder !== !1;
        }
        function q() {
            return this.options.autoLink !== !1;
        }
        function r() {
            return this.options.imageDragging !== !1;
        }
        function s() {
            return this.options.keyboardCommands !== !1;
        }
        function t() {
            return !this.options.extensions.imageDragging;
        }
        function u(a) {
            for(var b = this.options.ownerDocument.createElement("div"), c = Date.now(), d = "medium-editor-" + c, e = a.attributes; this.options.ownerDocument.getElementById(d);)c++, d = "medium-editor-" + c;
            b.className = a.className, b.id = d, b.innerHTML = a.value, a.setAttribute("medium-editor-textarea-id", d);
            for(var f = 0, g = e.length; g > f; f++)b.hasAttribute(e[f].nodeName) || b.setAttribute(e[f].nodeName, e[f].value);
            return a.form && this.on(a.form, "reset", (function(a) {
                a.defaultPrevented || this.resetContent(this.options.ownerDocument.getElementById(d));
            }).bind(this)), a.classList.add("medium-editor-hidden"), a.parentNode.insertBefore(b, a), b;
        }
        function v(b, d) {
            if (!b.getAttribute("data-medium-editor-element")) {
                "textarea" === b.nodeName.toLowerCase() && (b = u.call(this, b), this.instanceHandleEditableInput || (this.instanceHandleEditableInput = g.bind(this), this.subscribe("editableInput", this.instanceHandleEditableInput))), this.options.disableEditing || b.getAttribute("data-disable-editing") || (b.setAttribute("contentEditable", !0), b.setAttribute("spellcheck", this.options.spellcheck)), this.instanceHandleEditableKeydownEnter || (b.getAttribute("data-disable-return") || b.getAttribute("data-disable-double-return")) && (this.instanceHandleEditableKeydownEnter = c.bind(this), this.subscribe("editableKeydownEnter", this.instanceHandleEditableKeydownEnter)), this.options.disableReturn || b.getAttribute("data-disable-return") || this.on(b, "keyup", f.bind(this));
                var e = a.util.guid();
                b.setAttribute("data-medium-editor-element", !0), b.classList.add("medium-editor-element"), b.setAttribute("role", "textbox"), b.setAttribute("aria-multiline", !0), b.setAttribute("data-medium-editor-editor-index", d), b.setAttribute("medium-editor-index", e), B[e] = b.innerHTML, this.events.attachAllEventsToElement(b);
            }
            return b;
        }
        function w() {
            this.subscribe("editableKeydownTab", d.bind(this)), this.subscribe("editableKeydownDelete", e.bind(this)), this.subscribe("editableKeydownEnter", e.bind(this)), this.options.disableExtraSpaces && this.subscribe("editableKeydownSpace", b.bind(this)), this.instanceHandleEditableKeydownEnter || (this.options.disableReturn || this.options.disableDoubleReturn) && (this.instanceHandleEditableKeydownEnter = c.bind(this), this.subscribe("editableKeydownEnter", this.instanceHandleEditableKeydownEnter));
        }
        function x() {
            if (this.extensions = [], Object.keys(this.options.extensions).forEach(function(a) {
                "toolbar" !== a && this.options.extensions[a] && this.extensions.push(m(this.options.extensions[a], a, this));
            }, this), t.call(this)) {
                var b = this.options.fileDragging;
                b || (b = {}, r.call(this) || (b.allowedTypes = [])), this.addBuiltInExtension("fileDragging", b);
            }
            var c = {
                paste: !0,
                "anchor-preview": o.call(this),
                autoLink: q.call(this),
                keyboardCommands: s.call(this),
                placeholder: p.call(this)
            };
            Object.keys(c).forEach(function(a) {
                c[a] && this.addBuiltInExtension(a);
            }, this);
            var d = this.options.extensions.toolbar;
            if (!d && n.call(this)) {
                var e = a.util.extend({}, this.options.toolbar, {
                    allowMultiParagraphSelection: this.options.allowMultiParagraphSelection
                });
                d = new a.extensions.toolbar(e);
            }
            d && this.extensions.push(m(d, "toolbar", this));
        }
        function y(b, c) {
            var d = [
                [
                    "allowMultiParagraphSelection",
                    "toolbar.allowMultiParagraphSelection"
                ]
            ];
            return c && d.forEach(function(b) {
                c.hasOwnProperty(b[0]) && void 0 !== c[b[0]] && a.util.deprecated(b[0], b[1], "v6.0.0");
            }), a.util.defaults({}, c, b);
        }
        function z(b, c) {
            var d, e, f = /^append-(.+)$/gi, g = /justify([A-Za-z]*)$/g;
            if (d = f.exec(b)) return a.util.execFormatBlock(this.options.ownerDocument, d[1]);
            if ("fontSize" === b) return c.size && a.util.deprecated(".size option for fontSize command", ".value", "6.0.0"), e = c.value || c.size, this.options.ownerDocument.execCommand("fontSize", !1, e);
            if ("fontName" === b) return c.name && a.util.deprecated(".name option for fontName command", ".value", "6.0.0"), e = c.value || c.name, this.options.ownerDocument.execCommand("fontName", !1, e);
            if ("createLink" === b) return this.createLink(c);
            if ("image" === b) {
                var h = this.options.contentWindow.getSelection().toString().trim();
                return this.options.ownerDocument.execCommand("insertImage", !1, h);
            }
            if ("html" === b) {
                var i = this.options.contentWindow.getSelection().toString().trim();
                return a.util.insertHTMLCommand(this.options.ownerDocument, i);
            }
            if (g.exec(b)) {
                var j = this.options.ownerDocument.execCommand(b, !1, null), k = a.selection.getSelectedParentElement(a.selection.getSelectionRange(this.options.ownerDocument));
                return k && A.call(this, a.util.getTopBlockContainer(k)), j;
            }
            return e = c && c.value, this.options.ownerDocument.execCommand(b, !1, e);
        }
        function A(b) {
            if (b) {
                var c, d = Array.prototype.slice.call(b.childNodes).filter(function(a) {
                    var b = "div" === a.nodeName.toLowerCase();
                    return b && !c && (c = a.style.textAlign), b;
                });
                d.length && (this.saveSelection(), d.forEach(function(b) {
                    if (b.style.textAlign === c) {
                        var d = b.lastChild;
                        if (d) {
                            a.util.unwrap(b, this.options.ownerDocument);
                            var e = this.options.ownerDocument.createElement("BR");
                            d.parentNode.insertBefore(e, d.nextSibling);
                        }
                    }
                }, this), b.style.textAlign = c, this.restoreSelection());
            }
        }
        var B = {};
        a.prototype = {
            init: function(a, b) {
                return this.options = y.call(this, this.defaults, b), this.origElements = a, this.options.elementsContainer || (this.options.elementsContainer = this.options.ownerDocument.body), this.setup();
            },
            setup: function() {
                this.isActive || (h.call(this, this.options.contentWindow), this.events = new a.Events(this), this.elements = [], this.addElements(this.origElements), 0 !== this.elements.length && (this.isActive = !0, x.call(this), w.call(this)));
            },
            destroy: function() {
                this.isActive && (this.isActive = !1, this.extensions.forEach(function(a) {
                    "function" == typeof a.destroy && a.destroy();
                }, this), this.events.destroy(), this.elements.forEach(function(a) {
                    this.options.spellcheck && (a.innerHTML = a.innerHTML), a.removeAttribute("contentEditable"), a.removeAttribute("spellcheck"), a.removeAttribute("data-medium-editor-element"), a.classList.remove("medium-editor-element"), a.removeAttribute("role"), a.removeAttribute("aria-multiline"), a.removeAttribute("medium-editor-index"), a.removeAttribute("data-medium-editor-editor-index"), a.getAttribute("medium-editor-textarea-id") && k(a);
                }, this), this.elements = [], this.instanceHandleEditableKeydownEnter = null, this.instanceHandleEditableInput = null, i.call(this, this.options.contentWindow));
            },
            on: function(a, b, c, d) {
                return this.events.attachDOMEvent(a, b, c, d), this;
            },
            off: function(a, b, c, d) {
                return this.events.detachDOMEvent(a, b, c, d), this;
            },
            subscribe: function(a, b) {
                return this.events.attachCustomEvent(a, b), this;
            },
            unsubscribe: function(a, b) {
                return this.events.detachCustomEvent(a, b), this;
            },
            trigger: function(a, b, c) {
                return this.events.triggerCustomEvent(a, b, c), this;
            },
            delay: function(a) {
                var b = this;
                return setTimeout(function() {
                    b.isActive && a();
                }, this.options.delay);
            },
            serialize: function() {
                var a, b, c = {}, d = this.elements.length;
                for(a = 0; d > a; a += 1)b = "" !== this.elements[a].id ? this.elements[a].id : "element-" + a, c[b] = {
                    value: this.elements[a].innerHTML.trim()
                };
                return c;
            },
            getExtensionByName: function(a) {
                var b;
                return this.extensions && this.extensions.length && this.extensions.some(function(c) {
                    return c.name === a ? (b = c, !0) : !1;
                }), b;
            },
            addBuiltInExtension: function(b, c) {
                var d, e = this.getExtensionByName(b);
                if (e) return e;
                switch(b){
                    case "anchor":
                        d = a.util.extend({}, this.options.anchor, c), e = new a.extensions.anchor(d);
                        break;
                    case "anchor-preview":
                        e = new a.extensions.anchorPreview(this.options.anchorPreview);
                        break;
                    case "autoLink":
                        e = new a.extensions.autoLink;
                        break;
                    case "fileDragging":
                        e = new a.extensions.fileDragging(c);
                        break;
                    case "fontname":
                        e = new a.extensions.fontName(this.options.fontName);
                        break;
                    case "fontsize":
                        e = new a.extensions.fontSize(c);
                        break;
                    case "keyboardCommands":
                        e = new a.extensions.keyboardCommands(this.options.keyboardCommands);
                        break;
                    case "paste":
                        e = new a.extensions.paste(this.options.paste);
                        break;
                    case "placeholder":
                        e = new a.extensions.placeholder(this.options.placeholder);
                        break;
                    default:
                        a.extensions.button.isBuiltInButton(b) && (c ? (d = a.util.defaults({}, c, a.extensions.button.prototype.defaults[b]), e = new a.extensions.button(d)) : e = new a.extensions.button(b));
                }
                return e && this.extensions.push(m(e, b, this)), e;
            },
            stopSelectionUpdates: function() {
                this.preventSelectionUpdates = !0;
            },
            startSelectionUpdates: function() {
                this.preventSelectionUpdates = !1;
            },
            checkSelection: function() {
                var a = this.getExtensionByName("toolbar");
                return a && a.checkState(), this;
            },
            queryCommandState: function(a) {
                var b, c = /^full-(.+)$/gi, d = null;
                b = c.exec(a), b && (a = b[1]);
                try {
                    d = this.options.ownerDocument.queryCommandState(a);
                } catch (e) {
                    d = null;
                }
                return d;
            },
            execAction: function(b, c) {
                var d, e, f = /^full-(.+)$/gi;
                return d = f.exec(b), d ? (this.saveSelection(), this.selectAllContents(), e = z.call(this, d[1], c), this.restoreSelection()) : e = z.call(this, b, c), "insertunorderedlist" !== b && "insertorderedlist" !== b || a.util.cleanListDOM(this.options.ownerDocument, this.getSelectedParentElement()), this.checkSelection(), e;
            },
            getSelectedParentElement: function(b) {
                return void 0 === b && (b = this.options.contentWindow.getSelection().getRangeAt(0)), a.selection.getSelectedParentElement(b);
            },
            selectAllContents: function() {
                var b = a.selection.getSelectionElement(this.options.contentWindow);
                if (b) {
                    for(; 1 === b.children.length;)b = b.children[0];
                    this.selectElement(b);
                }
            },
            selectElement: function(b) {
                a.selection.selectNode(b, this.options.ownerDocument);
                var c = a.selection.getSelectionElement(this.options.contentWindow);
                c && this.events.focusElement(c);
            },
            getFocusedElement: function() {
                var a;
                return this.elements.some(function(b) {
                    return !a && b.getAttribute("data-medium-focused") && (a = b), !!a;
                }, this), a;
            },
            exportSelection: function() {
                var b = a.selection.getSelectionElement(this.options.contentWindow), c = this.elements.indexOf(b), d = null;
                return c >= 0 && (d = a.selection.exportSelection(b, this.options.ownerDocument)), null !== d && 0 !== c && (d.editableElementIndex = c), d;
            },
            saveSelection: function() {
                this.selectionState = this.exportSelection();
            },
            importSelection: function(b, c) {
                if (b) {
                    var d = this.elements[b.editableElementIndex || 0];
                    a.selection.importSelection(b, d, this.options.ownerDocument, c);
                }
            },
            restoreSelection: function() {
                this.importSelection(this.selectionState);
            },
            createLink: function(b) {
                var c, d = a.selection.getSelectionElement(this.options.contentWindow), e = {};
                if (-1 !== this.elements.indexOf(d)) {
                    try {
                        if (this.events.disableCustomEvent("editableInput"), b.url && a.util.deprecated(".url option for createLink", ".value", "6.0.0"), c = b.url || b.value, c && c.trim().length > 0) {
                            var f = this.options.contentWindow.getSelection();
                            if (f) {
                                var g, h, i, j, k = f.getRangeAt(0), l = k.commonAncestorContainer;
                                if (3 === k.endContainer.nodeType && 3 !== k.startContainer.nodeType && 0 === k.startOffset && k.startContainer.firstChild === k.endContainer && (l = k.endContainer), h = a.util.getClosestBlockContainer(k.startContainer), i = a.util.getClosestBlockContainer(k.endContainer), 3 !== l.nodeType && 0 !== l.textContent.length && h === i) {
                                    var m = h || d, n = this.options.ownerDocument.createDocumentFragment();
                                    this.execAction("unlink"), g = this.exportSelection(), n.appendChild(m.cloneNode(!0)), d === m ? a.selection.select(this.options.ownerDocument, m.firstChild, 0, m.lastChild, 3 === m.lastChild.nodeType ? m.lastChild.nodeValue.length : m.lastChild.childNodes.length) : a.selection.select(this.options.ownerDocument, m, 0, m, m.childNodes.length);
                                    var o = this.exportSelection();
                                    j = a.util.findOrCreateMatchingTextNodes(this.options.ownerDocument, n, {
                                        start: g.start - o.start,
                                        end: g.end - o.start,
                                        editableElementIndex: g.editableElementIndex
                                    }), 0 === j.length && (n = this.options.ownerDocument.createDocumentFragment(), n.appendChild(l.cloneNode(!0)), j = [
                                        n.firstChild.firstChild,
                                        n.firstChild.lastChild
                                    ]), a.util.createLink(this.options.ownerDocument, j, c.trim());
                                    var p = (n.firstChild.innerHTML.match(/^\s+/) || [
                                        ""
                                    ])[0].length;
                                    a.util.insertHTMLCommand(this.options.ownerDocument, n.firstChild.innerHTML.replace(/^\s+/, "")), g.start -= p, g.end -= p, this.importSelection(g);
                                } else this.options.ownerDocument.execCommand("createLink", !1, c);
                                this.options.targetBlank || "_blank" === b.target ? a.util.setTargetBlank(a.selection.getSelectionStart(this.options.ownerDocument), c) : a.util.removeTargetBlank(a.selection.getSelectionStart(this.options.ownerDocument), c), b.buttonClass && a.util.addClassToAnchors(a.selection.getSelectionStart(this.options.ownerDocument), b.buttonClass);
                            }
                        }
                        if (this.options.targetBlank || "_blank" === b.target || b.buttonClass) {
                            e = this.options.ownerDocument.createEvent("HTMLEvents"), e.initEvent("input", !0, !0, this.options.contentWindow);
                            for(var q = 0, r = this.elements.length; r > q; q += 1)this.elements[q].dispatchEvent(e);
                        }
                    } finally{
                        this.events.enableCustomEvent("editableInput");
                    }
                    this.events.triggerCustomEvent("editableInput", e, d);
                }
            },
            cleanPaste: function(a) {
                this.getExtensionByName("paste").cleanPaste(a);
            },
            pasteHTML: function(a, b) {
                this.getExtensionByName("paste").pasteHTML(a, b);
            },
            setContent: function(a, b) {
                if (b = b || 0, this.elements[b]) {
                    var c = this.elements[b];
                    c.innerHTML = a, this.checkContentChanged(c);
                }
            },
            getContent: function(a) {
                return a = a || 0, this.elements[a] ? this.elements[a].innerHTML.trim() : null;
            },
            checkContentChanged: function(b) {
                b = b || a.selection.getSelectionElement(this.options.contentWindow), this.events.updateInput(b, {
                    target: b,
                    currentTarget: b
                });
            },
            resetContent: function(a) {
                if (a) {
                    var b = this.elements.indexOf(a);
                    return void (-1 !== b && this.setContent(B[a.getAttribute("medium-editor-index")], b));
                }
                this.elements.forEach(function(a, b) {
                    this.setContent(B[a.getAttribute("medium-editor-index")], b);
                }, this);
            },
            addElements: function(a) {
                var b = j(a, this.options.ownerDocument, !0);
                return 0 === b.length ? !1 : void b.forEach(function(a) {
                    a = v.call(this, a, this.id), this.elements.push(a), this.trigger("addElement", {
                        target: a,
                        currentTarget: a
                    }, a);
                }, this);
            },
            removeElements: function(a) {
                var b = j(a, this.options.ownerDocument), c = b.map(function(a) {
                    return a.getAttribute("medium-editor-textarea-id") && a.parentNode ? a.parentNode.querySelector('div[medium-editor-textarea-id="' + a.getAttribute("medium-editor-textarea-id") + '"]') : a;
                });
                this.elements = this.elements.filter(function(a) {
                    return -1 !== c.indexOf(a) ? (this.events.cleanupElement(a), a.getAttribute("medium-editor-textarea-id") && k(a), this.trigger("removeElement", {
                        target: a,
                        currentTarget: a
                    }, a), !1) : !0;
                }, this);
            }
        }, a.getEditorFromElement = function(a) {
            var b = a.getAttribute("data-medium-editor-editor-index"), c = a && a.ownerDocument && (a.ownerDocument.defaultView || a.ownerDocument.parentWindow);
            return c && c._mediumEditors && c._mediumEditors[b] ? c._mediumEditors[b] : null;
        };
    }(), function() {
        a.prototype.defaults = {
            activeButtonClass: "medium-editor-button-active",
            buttonLabels: !1,
            delay: 0,
            disableReturn: !1,
            disableDoubleReturn: !1,
            disableExtraSpaces: !1,
            disableEditing: !1,
            autoLink: !1,
            elementsContainer: !1,
            contentWindow: window,
            ownerDocument: document,
            targetBlank: !1,
            extensions: {},
            spellcheck: !0
        };
    }(), a.parseVersionString = function(a) {
        var b = a.split("-"), c = b[0].split("."), d = b.length > 1 ? b[1] : "";
        return {
            major: parseInt(c[0], 10),
            minor: parseInt(c[1], 10),
            revision: parseInt(c[2], 10),
            preRelease: d,
            toString: function() {
                return [
                    c[0],
                    c[1],
                    c[2]
                ].join(".") + (d ? "-" + d : "");
            }
        };
    }, a.version = a.parseVersionString.call(this, "5.23.3"), a;
}());

},{"23048dfa5b63f62d":"d5jf4"}],"8VANX":[function() {},{}],"hEPkU":[function() {},{}],"iKTAJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PageLogin", ()=>PageLogin);
var _cloudflareTurnstileClient = require("../../submodules/rapdv/client/elements/CloudflareTurnstileClient");
class PageLogin {
    constructor(){
        this.getPageId = ()=>"login";
        this.execute = ()=>{
            (0, _cloudflareTurnstileClient.CloudflareTurnstileClient).init();
        };
        this.onPageClose = ()=>{};
    }
}

},{"../../submodules/rapdv/client/elements/CloudflareTurnstileClient":"ltTHB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ltTHB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CloudflareTurnstileClient", ()=>CloudflareTurnstileClient);
class CloudflareTurnstileClient {
    static #_ = this.theme = "light";
    static init(theme = "light") {
        CloudflareTurnstileClient.theme = theme;
        if ("0x4AAAAAAA01yp6rq0rRMZgw"?.trim().length === 0) return;
        window.onloadTurnstileCallback = ()=>{
            this.initCloudflareTurnslide();
        };
    }
    static initCloudflareTurnslide() {
        turnstile.render("#cloudFlareTurnslide", {
            sitekey: "0x4AAAAAAA01yp6rq0rRMZgw",
            theme: CloudflareTurnstileClient.theme,
            callback: (token)=>{
            // Challenge completed successfuly
            }
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4vsWu","1xC6H","846Bb"], "846Bb", "parcelRequireef69")

//# sourceMappingURL=App.js.map
