(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  true ? path => {
  if (/\.[^/]+\/?$/.test(path)) {
    return removePathTrailingSlash(path);
  } else if (path.endsWith('/')) {
    return path;
  } else {
    return path + '/';
  }
} : 0;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./src/components/Family.js":
/*!**********************************!*\
  !*** ./src/components/Family.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style.module.css */ "./src/styles/style.module.css");
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\work\\Blockchain\\cryptoking-nft\\quidverse-frontend\\src\\components\\Family.js";



function Family() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        color: "white"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().fair),
        style: {
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
          paddingBottom: "16px",
          marginBottom: "0",
          marginTop: "18px"
        },
        children: "PRIZES: ALL TKO MINTERS ELIGIBLE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().border),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          style: {
            fontSize: "20px"
          },
          children: "Three prizes will depend on what you mint. The more you mint the higher your chance will be to get those prestige prizes. Those are ultra rare because they only appear once in the entire collection (i.e. the Rolex attribute). 15 cash prizes for a random NFT-- you can win more than one cash prize. The more you mint the more you can win."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().family)}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid gap-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2 grid-rows-4 mt-12 mb-16 mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-72",
          style: {
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "stretch",
            alignContent: "center"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "font-lg font-bold italic text-white",
            children: "ROLEX TENTACLE PROP:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "assets/images/rolex_asset.png",
            className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().team_member_pic)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().image_description),
            style: {
              color: "white",
              fontSize: "16px"
            },
            children: "Win a $40,000 customized Rolex."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-72",
          style: {
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "stretch",
            alignContent: "center"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "font-lg font-bold italic text-white",
            children: "BEACH BACKGROUND:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "assets/images/beach_background.png",
            className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().team_member_pic)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().image_description),
            style: {
              color: "white",
              fontSize: "16px"
            },
            children: "Win a family vacation worth $10,500."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-72",
          style: {
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "stretch",
            alignContent: "center"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "font-lg font-bold italic text-white",
            children: "ALI V LISTON SCENE:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "assets/images/ali_gloves.png",
            className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().team_member_pic)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().image_description),
            style: {
              color: "white",
              fontSize: "16px"
            },
            children: "Win a signed Muhammad Ali glove."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-72",
          style: {
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "stretch",
            alignContent: "center"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "font-lg font-bold italic text-white",
            children: "15 RANDOM NFTS:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "assets/images/TKO_Game.png",
            className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().team_member_pic)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().image_description),
            style: {
              color: "white",
              fontSize: "16px"
            },
            children: "15 random NFTs win $1,000 each automatically."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Family);

/***/ }),

/***/ "./src/components/Famous.js":
/*!**********************************!*\
  !*** ./src/components/Famous.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style.module.css */ "./src/styles/style.module.css");
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\work\\Blockchain\\cryptoking-nft\\quidverse-frontend\\src\\components\\Famous.js";



const Famous = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().famous)} flex flex-row space-x-12`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full md:w-6/12",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          fontSize: "32px",
          fontWeight: "900",
          color: "#fe6810"
        },
        children: "WELCOME TO THE YOOMOOTA: MINT TO UNLOCK"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          color: "white"
        },
        children: "The YOOMOOTA is the first and only underwater metaverse populated by the fastest growing creature in the ocean-- the squid. In the Squid Metaverse (YOOMOOTA) you can make real money in a virtual world, socially connect, find real world jobs (by connecting), play P2E arcade games, and more. The TKO NFT collection is your key to the metaverse."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "hidden md:block md:w-6/12",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/assets/images/NFT_TKOs.gif",
        className: "w-full h-auto rounded-2xl"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Famous);

/***/ }),

/***/ "./src/components/MintButton.js":
/*!**************************************!*\
  !*** ./src/components/MintButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _abi_JustCubes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abi/JustCubes.json */ "./src/abi/JustCubes.json");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/style.module.css */ "./src/styles/style.module.css");
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\work\\Blockchain\\cryptoking-nft\\quidverse-frontend\\src\\components\\MintButton.js";



 // import Modal from "@material-ui/core/Modal"
// import Backdrop from "@material-ui/core/Backdrop"
// import Fade from "@material-ui/core/Fade"
// import { makeStyles } from "@material-ui/core/styles"
// import { StylesContext } from "@material-ui/styles"

function MintButton({
  web3
}) {
  const {
    0: count,
    1: setCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const {
    0: mintCount,
    1: setMintCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!web3) {
      alert("Please use desktop or DApp browser if you are not already.");
    } else {
      const contractAddress = "0x86ed1D6Fc39500071D6Fb7e3C89D81d705bA7700";
      const contract = new web3.eth.Contract(_abi_JustCubes_json__WEBPACK_IMPORTED_MODULE_2__.abi, contractAddress);

      if (!!contract) {
        contract.methods.totalSupply().call().then(res => {
          setMintCount(res);
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }, [web3]);

  const mintToken = async () => {
    if (!web3) {
      alert("Please use desktop or DApp browser if you are not already.");
    } else {
      const contractAddress = "0x18F398318edD6F84B05866964a0F37a6741E8998";
      const contract = new web3.eth.Contract(_abi_JustCubes_json__WEBPACK_IMPORTED_MODULE_2__.abi, contractAddress);

      const _account = await web3.eth.getAccounts();

      const price = 50000000000000000; // 0.08 eth

      try {
        await contract.methods.mint(count).send({
          from: _account[0],
          value: price * count
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col md:flex-row mt-12 md:space-x-12 md:space-y-0 space-y-12",
      style: {
        display: "flex",
        backgroundColor: "transparent",
        paddingBottom: "20px"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().showItemDiv),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().showItemP),
          children: "LAUNCH"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().showItemInfo),
          children: "1/22/22 @ 12 EST"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().showItemDiv),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().showItemP),
          children: "NFTS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().showItemInfo),
          children: [mintCount, " / 1000"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().showItemDiv),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().showItemP),
          children: "MINT PRICE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().showItemInfo),
          children: "0.05 ETH"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "30px"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "bg-accent2 text-accent1 hover:bg-accent1 hover:text-accent2 transition duration-150 text-3xl md:text-4xl font-black italic",
        onClick: () => mintToken(),
        style: {
          border: "2px #fe6810 solid",
          cursor: "pointer",
          padding: "20px",
          borderRadius: "0",
          width: "36rem"
        },
        children: "MINT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().mintCount)}`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mt-2 italic",
        style: {
          fontSize: "16px"
        },
        children: "MAX 20 PER TX"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-4 rounded-2xl px-4 py-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-white font-semibold uppercase",
          children: "Quantity:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "w-36 outline-none rounded-2xl bg-accent4 text-white font-bold text-center",
          type: "number",
          min: "1",
          max: "20",
          value: count,
          onChange: e => setCount(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MintButton);

/***/ }),

/***/ "./src/components/Project.js":
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style.module.css */ "./src/styles/style.module.css");
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\work\\Blockchain\\cryptoking-nft\\quidverse-frontend\\src\\components\\Project.js";



function Project() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        display: "flex"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "assets/images/sublogo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().subtitle1),
          children: "WHAT ABOUT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().subtitle2),
          children: "THE PROJECT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().projectDetail),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().carousel),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FirstItem, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            style: {
              color: "white",
              fontSize: "20px"
            },
            children: ["Pudgy Penguins launched on July 22, 2021. Each penguin is unique and no two are exactly alike.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, this), "The combination of a Pudgy Penguins aesthetics was randomly generated from over 150 hand drawn traits.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this), "There arer 5 Pudgy Penguins that were created by the artist and do not have randomly generated traits. These 5 Pudgy Penguins are known as the most rare and include a Pudgy Penguin in a banana suit, a shark costume, a pineapple suit, a ghost costume, and one of them is eve facing the opposite direction of all other Penguins."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Famous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Famous */ "./src/components/Famous.js");
/* harmony import */ var _components_Family__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Family */ "./src/components/Family.js");
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Project */ "./src/components/Project.js");
/* harmony import */ var _components_MintButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MintButton */ "./src/components/MintButton.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/style.module.css */ "./src/styles/style.module.css");
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @usedapp/core */ "@usedapp/core");
/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_usedapp_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _util_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/web3 */ "./src/util/web3.js");

var _jsxFileName = "E:\\work\\Blockchain\\cryptoking-nft\\quidverse-frontend\\src\\pages\\index.js";
 // Components














function ConnectBtn({
  web3,
  setWeb3
}) {
  const {
    activateBrowserWallet,
    account: _
  } = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_10__.useEthers)();
  const {
    0: account,
    1: setAccount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_);

  const handleWallet = async walletSource => {
    try {
      if (walletSource === "wc") {
        if (_util_web3__WEBPACK_IMPORTED_MODULE_11__.web3WalletConnectProvider.connected) {
          await _util_web3__WEBPACK_IMPORTED_MODULE_11__.web3WalletConnectProvider.disconnect();
        }

        await _util_web3__WEBPACK_IMPORTED_MODULE_11__.web3WalletConnectProvider.enable();
      } else {}

      activateBrowserWallet();
    } catch (e) {
      _util_web3__WEBPACK_IMPORTED_MODULE_11__.web3WalletConnectProvider.close();
      alert("Unable to connect!");
      window.location.reload();
    }

    web3 = (0,_util_web3__WEBPACK_IMPORTED_MODULE_11__.getWeb3)(walletSource);
    setWeb3(web3);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (async () => {
      if (!web3) {
        alert("Please use desktop or DApp browser if you are not already.");
      } else if (!web3.currentProvider) {
        web3 = (0,_util_web3__WEBPACK_IMPORTED_MODULE_11__.getWeb3)();
      } else {
        web3.eth.getChainId().then(e => {
          if (Number(e) !== 1) {
            alert("Please switch to Ethereum mainnet in your wallet");
          }
        }).catch(err => {
          console.log(err);
        });

        try {
          web3.currentProvider.on("chainChanged", chainId => {
            if (Number(chainId) !== 1) {
              alert("Please switch to Ethereum mainnet in your wallet");
            } else {
              window.location.reload();
            }
          });
          web3.currentProvider.on("accountsChanged", accounts => {
            setAccount(accounts && accounts.length && accounts[0]);
          });
          web3.currentProvider.on("disconnect", (code, reason) => {
            setAccount(null);
            _util_web3__WEBPACK_IMPORTED_MODULE_11__.web3WalletConnectProvider.close();
            window.location.reload();
          });
        } catch (e) {}

        const accounts = await web3.eth.getAccounts();
        setAccount(accounts && accounts.length && accounts[0]);
      }
    })();
  }, [web3]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative block p-1 font-bold display-hover-trigger md:bg-dark text-accent md:rounded-lg hover:bg-accent hover:text-darker",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: `${(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_12___default().btnConnect)} font-bold bg-accent1 hover:text-accent1 hover:bg-accent2 transition duration-150 text-3xl md:text-2xl`,
      children: account ? `${account.slice(0, 6)}...${account.slice(-6)}` : "Connect"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "display-hover-target absolute bg-accent rounded-lg shadow-xl py-1.5 z-50",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: `${(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_12___default().btnConnect)} font-bold bg-accent1 hover:text-accent1 hover:bg-accent2 transition duration-150 text-2xl md:text-xl`,
        onClick: () => handleWallet(null),
        children: "Browser"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: `${(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_12___default().btnConnect)} font-bold bg-accent1 hover:text-accent1 hover:bg-accent2 transition duration-150 text-2xl md:text-xl mt-1`,
        onClick: () => handleWallet("wc"),
        children: "WalletConnect"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

function Home() {
  const {
    0: web3,
    1: setWeb3
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_util_web3__WEBPACK_IMPORTED_MODULE_11__.getWeb3Auto)());
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setWeb3((0,_util_web3__WEBPACK_IMPORTED_MODULE_11__.getWeb3Auto)());
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_usedapp_core__WEBPACK_IMPORTED_MODULE_10__.DAppProvider, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "assets/images/favicon_cir.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Quid TKO v1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "facebook-domain-verification",
        content: "7bq9sgv8kg7l9si53vaf7o01azcb57"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        backgroundColor: "#000014"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_12___default().backDiv),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {
          style: {
            margin: "0 auto",
            padding: "0 30px",
            marginBottom: "0px"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
            className: `${(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_12___default().navbar)}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex flex-row justify-between mt-6",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "hidden sm:flex",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "/assets/images/TKO_2.png",
                  style: {
                    height: "60px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex items-center justify-end space-x-2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "hidden md:inline-block text-accent5 hover:text-accent1 transition duration-150",
                  href: "https://discord.gg/quidika",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "fill-current hover:fill-current transition duration-150",
                    viewBox: "0 0 50 50",
                    width: "24px",
                    height: "24px",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "hidden md:inline-block text-accent5 hover:text-accent1 transition duration-150",
                  href: "https://facebook.com/groups/quidika",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "fill-current hover:fill-current transition duration-150",
                    viewBox: "0 0 50 50",
                    width: "24px",
                    height: "24px",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 207,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 200,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "hidden md:inline-block text-accent5 hover:text-accent1 transition duration-150",
                  href: "https://twitter.com/quidikatoken",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "fill-current hover:fill-current transition duration-150",
                    viewBox: "0 0 30 30",
                    width: "24px",
                    height: "24px",
                    margin: "10px",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectBtn, {
                  web3: web3,
                  setWeb3: setWeb3
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/assets/images/TKO_COVER.jpeg",
            width: "auto",
            className: "w-full h-auto mt-6 mb-12 rounded-2xl"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Famous__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MintButton__WEBPACK_IMPORTED_MODULE_5__.default, {
            web3: web3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mt-16",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  style: {
                    color: "#fe6810",
                    fontSize: "20px",
                    fontStyle: "italic",
                    marginBottom: "0px",
                    marginTop: "0px"
                  },
                  children: "TKO"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_12___default().knockouts),
                  children: "TENTACLE KNOCKOUT:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  style: {
                    color: "#fe6810",
                    fontSize: "29.5px",
                    marginBottom: "0",
                    marginTop: "-20px"
                  },
                  children: "UNLOCK THE YOOMOOTA"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                style: {
                  color: "white",
                  fontSize: "20px",
                  marginTop: "20px"
                },
                children: "1,000 collectible squid versus dog knockout scenes on the Ethereum blockchain. Inspired by Ali vs Liston -- May 25, 1965. Unlock the YOOMOOTA. Made up of 144 traits with a few being one of ones."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              textAlign: "center"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Family__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex flex-col space-y-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                style: {
                  color: "#fe6810",
                  fontSize: "30px",
                  fontStyle: "800",
                  marginBottom: "0px",
                  marginTop: "0px"
                },
                children: "WELCOME TO THE YOOMOOTA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4 pb-16 md:mx-0 mx-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/assets/images/n1.png",
                className: "w-72 h-auto"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/assets/images/n2.png",
                className: "w-72 h-auto"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 295,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/assets/images/n3.png",
                className: "w-72 h-auto"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 296,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/assets/images/n4.png",
                className: "w-72 h-auto"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/util/web3.js":
/*!**************************!*\
  !*** ./src/util/web3.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "web3WalletConnectProvider": () => (/* binding */ web3WalletConnectProvider),
/* harmony export */   "getWeb3Auto": () => (/* binding */ getWeb3Auto),
/* harmony export */   "getWeb3": () => (/* binding */ getWeb3)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @walletconnect/web3-provider */ "@walletconnect/web3-provider");
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_1__);


const web3WalletConnectProvider = new (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_1___default())({
  infuraId: "af2d3ad9d6a44a18bd3eb7296fc044a9"
});
function getWeb3Auto() {
  let web3 = null;

  try {
    let provider = window.ethereum;

    if (!provider && web3WalletConnectProvider.connected) {
      provider = web3WalletConnectProvider;
    }

    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
  } catch (error) {// Ignore
  }

  return web3;
}
function getWeb3(walletType) {
  let provider = window.ethereum;

  if (walletType === 'wc') {
    provider = web3WalletConnectProvider;
  }

  const web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
  return web3;
}

/***/ }),

/***/ "./src/styles/style.module.css":
/*!*************************************!*\
  !*** ./src/styles/style.module.css ***!
  \*************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"section2": "style_section2__2DEA7",
	"panel": "style_panel__22VgW",
	"btnLoginLayout": "style_btnLoginLayout__28HY6",
	"tabmenu": "style_tabmenu__dKb2I",
	"manuBar": "style_manuBar__22Zyi",
	"btnLogin": "style_btnLogin__2BaVp",
	"backDiv": "style_backDiv__1mGd8",
	"tabBtn": "style_tabBtn__3oKzb",
	"tabBtn1": "style_tabBtn1__1WNip",
	"tabPanel": "style_tabPanel__3jyQ_",
	"menuItem": "style_menuItem__2wTKf",
	"loadHidden": "style_loadHidden__xoBP0",
	"navUI": "style_navUI__14xy0",
	"navLabel": "style_navLabel__AxIG3",
	"btnConnect": "style_btnConnect__mDWRt",
	"backimg": "style_backimg__3gXCw",
	"imgWidth": "style_imgWidth__1p-IY",
	"penguinImg": "style_penguinImg__2ukGG",
	"penguinImgTag": "style_penguinImgTag__3AJns",
	"showItemDiv": "style_showItemDiv__2nf6g",
	"inputNumber": "style_inputNumber__14Pgt",
	"showItemP": "style_showItemP__3VeaD",
	"showItemInfo": "style_showItemInfo__3Js95",
	"unlock": "style_unlock__2opbR",
	"knockouts": "style_knockouts__MGB1r",
	"image_description": "style_image_description__2OUnt",
	"famous": "style_famous__7lDgk",
	"border": "style_border__2Mu2b",
	"monkey_width": "style_monkey_width__1CXXa",
	"fair": "style_fair__1zeTN",
	"mintCount": "style_mintCount__L95YV",
	"buy": "style_buy__2ki8O",
	"opening": "style_opening__25tgk",
	"subtitle2": "style_subtitle2__1XWDT",
	"subtitle1": "style_subtitle1__OF1Hi",
	"family": "style_family__3FcbN",
	"team_members": "style_team_members__3jYbO",
	"team_member_pic": "style_team_member_pic__1UbR6",
	"navbar": "style_navbar__Q67Bt"
};


/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "@usedapp/core":
/*!********************************!*\
  !*** external "@usedapp/core" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@usedapp/core");

/***/ }),

/***/ "@walletconnect/web3-provider":
/*!***********************************************!*\
  !*** external "@walletconnect/web3-provider" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@walletconnect/web3-provider");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("reactstrap");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("web3");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./src/abi/JustCubes.json":
/*!********************************!*\
  !*** ./src/abi/JustCubes.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"address":"0x86ed1D6Fc39500071D6Fb7e3C89D81d705bA7700","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"MintedQueryForZeroAddress","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"count","type":"uint256"},{"indexed":false,"internalType":"address","name":"sender","type":"address"}],"name":"Airdrop","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"count","type":"uint256"},{"indexed":false,"internalType":"address","name":"sender","type":"address"}],"name":"ClaimAirdrop","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"count","type":"uint256"},{"indexed":false,"internalType":"address","name":"sender","type":"address"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"live","type":"bool"}],"name":"FreeClaimActive","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"ADDRESS_MAX_MINTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ADDRESS_WL_MAX_MINTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OGMerkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OGprice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OGsaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PUBLIC_MINT_PER_TX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WLMerkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WLprice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WLsaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"airdropList","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_new","type":"uint256"}],"name":"changeSupplyLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"count","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"claimAirdrop","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getOwnershipData","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"}],"internalType":"struct ERC721A.TokenOwnership","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isFreeClaimActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfMints","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfMints","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"mintOGSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfMints","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"mintWLSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"numberMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numberOfWLMintsOnAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"reserveMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reservedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_root","type":"bytes32"}],"name":"setFreeClaimRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_new","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"newMerkleRoot","type":"bytes32"}],"name":"setOGMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_new","type":"address"}],"name":"setProvenance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newSupply","type":"uint256"}],"name":"setSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"newMerkleRoot","type":"bytes32"}],"name":"setWLMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleFreeClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleOGSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleWLSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokenIdOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"viewClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],"transactionHash":"0x2e118a243eb7d0d4cc67ab143ff4971abc5786acff94c478cd4ccd72c513ae1c","receipt":{"to":null,"from":"0xA225a0BDa21EcC6273221003393fD34bBa317e26","contractAddress":"0x86ed1D6Fc39500071D6Fb7e3C89D81d705bA7700","transactionIndex":10,"gasUsed":"3552885","logsBloom":"0x00000000000000000000000000000000000000000000000000800000000000000000000000000000000000000200000000000000000000000000000000001000000000000000000000000000000000000001000001000000000000000000000000000000020000000000000000000800000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000020008000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000","blockHash":"0x2784ecf9a1b0ce2134edc857eb222ad3904b05a75b790fa8dceee90860ae9b87","transactionHash":"0x2e118a243eb7d0d4cc67ab143ff4971abc5786acff94c478cd4ccd72c513ae1c","logs":[{"transactionIndex":10,"blockNumber":10315985,"transactionHash":"0x2e118a243eb7d0d4cc67ab143ff4971abc5786acff94c478cd4ccd72c513ae1c","address":"0x86ed1D6Fc39500071D6Fb7e3C89D81d705bA7700","topics":["0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0","0x0000000000000000000000000000000000000000000000000000000000000000","0x000000000000000000000000a225a0bda21ecc6273221003393fd34bba317e26"],"data":"0x","logIndex":13,"blockHash":"0x2784ecf9a1b0ce2134edc857eb222ad3904b05a75b790fa8dceee90860ae9b87"}],"blockNumber":10315985,"cumulativeGasUsed":"5695357","status":1,"byzantium":true},"args":[],"solcInputHash":"594455e7ad23a1d7e70b85848f96e497","metadata":"{\\"compiler\\":{\\"version\\":\\"0.8.4+commit.c7e474f2\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"inputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"},{\\"inputs\\":[],\\"name\\":\\"ApprovalCallerNotOwnerNorApproved\\",\\"type\\":\\"error\\"},{\\"inputs\\":[],\\"name\\":\\"ApprovalQueryForNonexistentToken\\",\\"type\\":\\"error\\"},{\\"inputs\\":[],\\"name\\":\\"ApprovalToCurrentOwner\\",\\"type\\":\\"error\\"},{\\"inputs\\":[],\\"name\\":\\"ApproveToCaller\\",\\"type\\":\\"error\\"},{\\"inputs\\":[],\\"name\\":\\"BalanceQueryForZeroAddress\\",\\"type\\":\\"error\\"},{\\"inputs\\":[],\\"name\\":\\"MintToZeroAddress\\",\\"type\\":\\"error\\"},{\\"inputs\\":[],\\"name\\":\\"MintZeroQuantity\\",\\"type\\":\\"error\\"},{\\"inputs\\":[],\\"name\\":\\"MintedQueryForZeroAddress\\",\\"type\\":\\"error\\"},{\\"inputs\\":[],\\"name\\":\\"OwnerQueryForNonexistentToken\\",\\"type\\":\\"error\\"},{\\"inputs\\":[],\\"name\\":\\"TransferCallerNotOwnerNorApproved\\",\\"type\\":\\"error\\"},{\\"inputs\\":[],\\"name\\":\\"TransferFromIncorrectOwner\\",\\"type\\":\\"error\\"},{\\"inputs\\":[],\\"name\\":\\"TransferToNonERC721ReceiverImplementer\\",\\"type\\":\\"error\\"},{\\"inputs\\":[],\\"name\\":\\"TransferToZeroAddress\\",\\"type\\":\\"error\\"},{\\"inputs\\":[],\\"name\\":\\"URIQueryForNonexistentToken\\",\\"type\\":\\"error\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"count\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"address\\",\\"name\\":\\"sender\\",\\"type\\":\\"address\\"}],\\"name\\":\\"Airdrop\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"approved\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Approval\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"bool\\",\\"name\\":\\"approved\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"ApprovalForAll\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"count\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"address\\",\\"name\\":\\"sender\\",\\"type\\":\\"address\\"}],\\"name\\":\\"ClaimAirdrop\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"count\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"address\\",\\"name\\":\\"sender\\",\\"type\\":\\"address\\"}],\\"name\\":\\"Claimed\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"bool\\",\\"name\\":\\"live\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"FreeClaimActive\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"previousOwner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"newOwner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"OwnershipTransferred\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Transfer\\",\\"type\\":\\"event\\"},{\\"inputs\\":[],\\"name\\":\\"ADDRESS_MAX_MINTS\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"ADDRESS_WL_MAX_MINTS\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"OGMerkleRoot\\",\\"outputs\\":[{\\"internalType\\":\\"bytes32\\",\\"name\\":\\"\\",\\"type\\":\\"bytes32\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"OGprice\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"OGsaleActive\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"PUBLIC_MINT_PER_TX\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"WLMerkleRoot\\",\\"outputs\\":[{\\"internalType\\":\\"bytes32\\",\\"name\\":\\"\\",\\"type\\":\\"bytes32\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"WLprice\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"WLsaleActive\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"user\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"addAirdrop\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"airdropList\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approve\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"balanceOf\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_new\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"changeSupplyLimit\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"count\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"bytes32[]\\",\\"name\\":\\"proof\\",\\"type\\":\\"bytes32[]\\"}],\\"name\\":\\"claim\\",\\"outputs\\":[],\\"stateMutability\\":\\"payable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"count\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"claimAirdrop\\",\\"outputs\\":[],\\"stateMutability\\":\\"payable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"emergencyWithdraw\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"getApproved\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"getOwnershipData\\",\\"outputs\\":[{\\"components\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"addr\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint64\\",\\"name\\":\\"startTimestamp\\",\\"type\\":\\"uint64\\"},{\\"internalType\\":\\"bool\\",\\"name\\":\\"burned\\",\\"type\\":\\"bool\\"}],\\"internalType\\":\\"struct ERC721A.TokenOwnership\\",\\"name\\":\\"\\",\\"type\\":\\"tuple\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"}],\\"name\\":\\"isApprovedForAll\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"isFreeClaimActive\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"maxSupply\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"numberOfMints\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"mint\\",\\"outputs\\":[],\\"stateMutability\\":\\"payable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"numberOfMints\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"bytes32[]\\",\\"name\\":\\"_merkleProof\\",\\"type\\":\\"bytes32[]\\"}],\\"name\\":\\"mintOGSale\\",\\"outputs\\":[],\\"stateMutability\\":\\"payable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"numberOfMints\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"bytes32[]\\",\\"name\\":\\"_merkleProof\\",\\"type\\":\\"bytes32[]\\"}],\\"name\\":\\"mintWLSale\\",\\"outputs\\":[],\\"stateMutability\\":\\"payable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"name\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"numberMinted\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"numberOfWLMintsOnAddress\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"owner\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"ownerOf\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"price\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"renounceOwnership\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"quantity\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"reserveMint\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"reservedSupply\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"safeTransferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"bytes\\",\\"name\\":\\"_data\\",\\"type\\":\\"bytes\\"}],\\"name\\":\\"safeTransferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"saleActive\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"bool\\",\\"name\\":\\"approved\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"setApprovalForAll\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"baseURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"setBaseURI\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"bytes32\\",\\"name\\":\\"_root\\",\\"type\\":\\"bytes32\\"}],\\"name\\":\\"setFreeClaimRoot\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_new\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"setMintPrice\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"bytes32\\",\\"name\\":\\"newMerkleRoot\\",\\"type\\":\\"bytes32\\"}],\\"name\\":\\"setOGMerkleRoot\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"newPrice\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"setPrice\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_new\\",\\"type\\":\\"address\\"}],\\"name\\":\\"setProvenance\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"newSupply\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"setSupply\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"bytes32\\",\\"name\\":\\"newMerkleRoot\\",\\"type\\":\\"bytes32\\"}],\\"name\\":\\"setWLMerkleRoot\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"bytes4\\",\\"name\\":\\"interfaceId\\",\\"type\\":\\"bytes4\\"}],\\"name\\":\\"supportsInterface\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"symbol\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"toggleFreeClaim\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"toggleOGSale\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"toggleSale\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"toggleWLSale\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_owner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"tokenIdOfOwner\\",\\"outputs\\":[{\\"internalType\\":\\"uint256[]\\",\\"name\\":\\"\\",\\"type\\":\\"uint256[]\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"tokenURI\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"totalClaimed\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"totalSupply\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"newOwner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"transferOwnership\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"account\\",\\"type\\":\\"address\\"}],\\"name\\":\\"viewClaimed\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"withdraw\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"kind\\":\\"dev\\",\\"methods\\":{\\"approve(address,uint256)\\":{\\"details\\":\\"See {IERC721-approve}.\\"},\\"balanceOf(address)\\":{\\"details\\":\\"See {IERC721-balanceOf}.\\"},\\"getApproved(uint256)\\":{\\"details\\":\\"See {IERC721-getApproved}.\\"},\\"isApprovedForAll(address,address)\\":{\\"details\\":\\"See {IERC721-isApprovedForAll}.\\"},\\"name()\\":{\\"details\\":\\"See {IERC721Metadata-name}.\\"},\\"owner()\\":{\\"details\\":\\"Returns the address of the current owner.\\"},\\"ownerOf(uint256)\\":{\\"details\\":\\"See {IERC721-ownerOf}.\\"},\\"renounceOwnership()\\":{\\"details\\":\\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\\"},\\"safeTransferFrom(address,address,uint256)\\":{\\"details\\":\\"See {IERC721-safeTransferFrom}.\\"},\\"safeTransferFrom(address,address,uint256,bytes)\\":{\\"details\\":\\"See {IERC721-safeTransferFrom}.\\"},\\"setApprovalForAll(address,bool)\\":{\\"details\\":\\"See {IERC721-setApprovalForAll}.\\"},\\"supportsInterface(bytes4)\\":{\\"details\\":\\"See {IERC165-supportsInterface}.\\"},\\"symbol()\\":{\\"details\\":\\"See {IERC721Metadata-symbol}.\\"},\\"tokenURI(uint256)\\":{\\"details\\":\\"See {IERC721Metadata-tokenURI}.\\"},\\"totalSupply()\\":{\\"details\\":\\"See {IERC721Enumerable-totalSupply}.Burned tokens are calculated here, use _totalMinted() if you want to count just minted tokens.\\"},\\"transferFrom(address,address,uint256)\\":{\\"details\\":\\"See {IERC721-transferFrom}.\\"},\\"transferOwnership(address)\\":{\\"details\\":\\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\\"}},\\"version\\":1},\\"userdoc\\":{\\"kind\\":\\"user\\",\\"methods\\":{\\"mint(uint256)\\":{\\"notice\\":\\"Public mint\\"},\\"mintOGSale(uint256,bytes32[])\\":{\\"notice\\":\\"OG mint\\"},\\"mintWLSale(uint256,bytes32[])\\":{\\"notice\\":\\"Whitelist mint\\"},\\"reserveMint(uint256)\\":{\\"notice\\":\\"Reserve mint for founders\\"}},\\"notice\\":\\".+------+     +------+     +------+     +------+     +------+. .\' |    .\'|    /|     /|     |      |     |\\\\\\\\     |\\\\\\\\    |`.    | `. +---+--+\'  |   +-+----+ |     +------+     | +----+-+   |  `+--+---+ |   |  |   |   | |    | |     |      |     | |    | |   |   |  |   | |  ,+--+---+   | +----+-+     +------+     +-+----+ |   +---+--+   | |.\'    | .\'    |/     |/      |      |      \\\\\\\\|     \\\\\\\\|    `. |   `. | +------+\'      +------+       +------+       +------+      `+------+ .----------------.  .----------------.  .----------------.  .----------------.  | .--------------. || .--------------. || .--------------. || .--------------. | | |     _____    | || | _____  _____ | || |    _______   | || |  _________   | | | |    |_   _|   | || ||_   _||_   _|| || |   /  ___  |  | || | |  _   _  |  | | | |      | |     | || |  | |    | |  | || |  |  (__ \\\\\\\\_|  | || | |_/ | | \\\\\\\\_|  | | | |   _  | |     | || |  | \'    \' |  | || |   \'.___`-.   | || |     | |      | | | |  | |_\' |     | || |   \\\\\\\\ `--\' /   | || |  |`\\\\\\\\____) |  | || |    _| |_     | | | |  `.___.\'     | || |    `.__.\'    | || |  |_______.\'  | || |   |_____|    | | | |              | || |              | || |              | || |              | | | \'--------------\' || \'--------------\' || \'--------------\' || \'--------------\' | \'----------------\'  \'----------------\'  \'----------------\'  \'----------------\'  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  | .--------------. || .--------------. || .--------------. || .--------------. || .--------------. | | |     ______   | || | _____  _____ | || |   ______     | || |  _________   | || |    _______   | | | |   .\' ___  |  | || ||_   _||_   _|| || |  |_   _ \\\\\\\\    | || | |_   ___  |  | || |   /  ___  |  | | | |  / .\'   \\\\\\\\_|  | || |  | |    | |  | || |    | |_) |   | || |   | |_  \\\\\\\\_|  | || |  |  (__ \\\\\\\\_|  | | | |  | |         | || |  | \'    \' |  | || |    |  __\'.   | || |   |  _|  _   | || |   \'.___`-.   | | | |  \\\\\\\\ `.___.\'\\\\\\\\  | || |   \\\\\\\\ `--\' /   | || |   _| |__) |  | || |  _| |___/ |  | || |  |`\\\\\\\\____) |  | | | |   `._____.\'  | || |    `.__.\'    | || |  |_______/   | || | |_________|  | || |  |_______.\'  | | | |              | || |              | || |              | || |              | || |              | | | \'--------------\' || \'--------------\' || \'--------------\' || \'--------------\' || \'--------------\' | \'----------------\'  \'----------------\'  \'----------------\'  \'----------------\'  \'----------------\' \\",\\"version\\":1}},\\"settings\\":{\\"compilationTarget\\":{\\"contracts/test.sol\\":\\"JustCubes\\"},\\"evmVersion\\":\\"istanbul\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\",\\"useLiteralContent\\":true},\\"optimizer\\":{\\"enabled\\":true,\\"runs\\":500},\\"remappings\\":[]},\\"sources\\":{\\"@openzeppelin/contracts/access/Ownable.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (access/Ownable.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"../utils/Context.sol\\\\\\";\\\\n\\\\n/**\\\\n * @dev Contract module which provides a basic access control mechanism, where\\\\n * there is an account (an owner) that can be granted exclusive access to\\\\n * specific functions.\\\\n *\\\\n * By default, the owner account will be the one that deploys the contract. This\\\\n * can later be changed with {transferOwnership}.\\\\n *\\\\n * This module is used through inheritance. It will make available the modifier\\\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\\\n * the owner.\\\\n */\\\\nabstract contract Ownable is Context {\\\\n    address private _owner;\\\\n\\\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\\\n\\\\n    /**\\\\n     * @dev Initializes the contract setting the deployer as the initial owner.\\\\n     */\\\\n    constructor() {\\\\n        _transferOwnership(_msgSender());\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Returns the address of the current owner.\\\\n     */\\\\n    function owner() public view virtual returns (address) {\\\\n        return _owner;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Throws if called by any account other than the owner.\\\\n     */\\\\n    modifier onlyOwner() {\\\\n        require(owner() == _msgSender(), \\\\\\"Ownable: caller is not the owner\\\\\\");\\\\n        _;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Leaves the contract without owner. It will not be possible to call\\\\n     * `onlyOwner` functions anymore. Can only be called by the current owner.\\\\n     *\\\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\\\n     * thereby removing any functionality that is only available to the owner.\\\\n     */\\\\n    function renounceOwnership() public virtual onlyOwner {\\\\n        _transferOwnership(address(0));\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\\\n     * Can only be called by the current owner.\\\\n     */\\\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\\\n        require(newOwner != address(0), \\\\\\"Ownable: new owner is the zero address\\\\\\");\\\\n        _transferOwnership(newOwner);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\\\n     * Internal function without access restriction.\\\\n     */\\\\n    function _transferOwnership(address newOwner) internal virtual {\\\\n        address oldOwner = _owner;\\\\n        _owner = newOwner;\\\\n        emit OwnershipTransferred(oldOwner, newOwner);\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0x24e0364e503a9bbde94c715d26573a76f14cd2a202d45f96f52134ab806b67b9\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/security/ReentrancyGuard.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (security/ReentrancyGuard.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev Contract module that helps prevent reentrant calls to a function.\\\\n *\\\\n * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\\\\n * available, which can be applied to functions to make sure there are no nested\\\\n * (reentrant) calls to them.\\\\n *\\\\n * Note that because there is a single `nonReentrant` guard, functions marked as\\\\n * `nonReentrant` may not call one another. This can be worked around by making\\\\n * those functions `private`, and then adding `external` `nonReentrant` entry\\\\n * points to them.\\\\n *\\\\n * TIP: If you would like to learn more about reentrancy and alternative ways\\\\n * to protect against it, check out our blog post\\\\n * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\\\\n */\\\\nabstract contract ReentrancyGuard {\\\\n    // Booleans are more expensive than uint256 or any type that takes up a full\\\\n    // word because each write operation emits an extra SLOAD to first read the\\\\n    // slot\'s contents, replace the bits taken up by the boolean, and then write\\\\n    // back. This is the compiler\'s defense against contract upgrades and\\\\n    // pointer aliasing, and it cannot be disabled.\\\\n\\\\n    // The values being non-zero value makes deployment a bit more expensive,\\\\n    // but in exchange the refund on every call to nonReentrant will be lower in\\\\n    // amount. Since refunds are capped to a percentage of the total\\\\n    // transaction\'s gas, it is best to keep them low in cases like this one, to\\\\n    // increase the likelihood of the full refund coming into effect.\\\\n    uint256 private constant _NOT_ENTERED = 1;\\\\n    uint256 private constant _ENTERED = 2;\\\\n\\\\n    uint256 private _status;\\\\n\\\\n    constructor() {\\\\n        _status = _NOT_ENTERED;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Prevents a contract from calling itself, directly or indirectly.\\\\n     * Calling a `nonReentrant` function from another `nonReentrant`\\\\n     * function is not supported. It is possible to prevent this from happening\\\\n     * by making the `nonReentrant` function external, and making it call a\\\\n     * `private` function that does the actual work.\\\\n     */\\\\n    modifier nonReentrant() {\\\\n        // On the first call to nonReentrant, _notEntered will be true\\\\n        require(_status != _ENTERED, \\\\\\"ReentrancyGuard: reentrant call\\\\\\");\\\\n\\\\n        // Any calls to nonReentrant after this point will fail\\\\n        _status = _ENTERED;\\\\n\\\\n        _;\\\\n\\\\n        // By storing the original value once again, a refund is triggered (see\\\\n        // https://eips.ethereum.org/EIPS/eip-2200)\\\\n        _status = _NOT_ENTERED;\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0x0e9621f60b2faabe65549f7ed0f24e8853a45c1b7990d47e8160e523683f3935\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/token/ERC721/IERC721.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"../../utils/introspection/IERC165.sol\\\\\\";\\\\n\\\\n/**\\\\n * @dev Required interface of an ERC721 compliant contract.\\\\n */\\\\ninterface IERC721 is IERC165 {\\\\n    /**\\\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\\\n     */\\\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\\\n\\\\n    /**\\\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\\\n     */\\\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\\\n\\\\n    /**\\\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\\\n     */\\\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\\\n\\\\n    /**\\\\n     * @dev Returns the number of tokens in ``owner``\'s account.\\\\n     */\\\\n    function balanceOf(address owner) external view returns (uint256 balance);\\\\n\\\\n    /**\\\\n     * @dev Returns the owner of the `tokenId` token.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     */\\\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\\\n\\\\n    /**\\\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must exist and be owned by `from`.\\\\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) external;\\\\n\\\\n    /**\\\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\\\n     *\\\\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must be owned by `from`.\\\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function transferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) external;\\\\n\\\\n    /**\\\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\\\n     * The approval is cleared when the token is transferred.\\\\n     *\\\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - The caller must own the token or be an approved operator.\\\\n     * - `tokenId` must exist.\\\\n     *\\\\n     * Emits an {Approval} event.\\\\n     */\\\\n    function approve(address to, uint256 tokenId) external;\\\\n\\\\n    /**\\\\n     * @dev Returns the account approved for `tokenId` token.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     */\\\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\\\n\\\\n    /**\\\\n     * @dev Approve or remove `operator` as an operator for the caller.\\\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - The `operator` cannot be the caller.\\\\n     *\\\\n     * Emits an {ApprovalForAll} event.\\\\n     */\\\\n    function setApprovalForAll(address operator, bool _approved) external;\\\\n\\\\n    /**\\\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\\\n     *\\\\n     * See {setApprovalForAll}\\\\n     */\\\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\\\n\\\\n    /**\\\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must exist and be owned by `from`.\\\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes calldata data\\\\n    ) external;\\\\n}\\\\n\\",\\"keccak256\\":\\"0x516a22876c1fab47f49b1bc22b4614491cd05338af8bd2e7b382da090a079990\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721Receiver.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @title ERC721 token receiver interface\\\\n * @dev Interface for any contract that wants to support safeTransfers\\\\n * from ERC721 asset contracts.\\\\n */\\\\ninterface IERC721Receiver {\\\\n    /**\\\\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\\\\n     * by `operator` from `from`, this function is called.\\\\n     *\\\\n     * It must return its Solidity selector to confirm the token transfer.\\\\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\\\\n     *\\\\n     * The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`.\\\\n     */\\\\n    function onERC721Received(\\\\n        address operator,\\\\n        address from,\\\\n        uint256 tokenId,\\\\n        bytes calldata data\\\\n    ) external returns (bytes4);\\\\n}\\\\n\\",\\"keccak256\\":\\"0xd5fa74b4fb323776fa4a8158800fec9d5ac0fec0d6dd046dd93798632ada265f\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/IERC721Enumerable.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"../IERC721.sol\\\\\\";\\\\n\\\\n/**\\\\n * @title ERC-721 Non-Fungible Token Standard, optional enumeration extension\\\\n * @dev See https://eips.ethereum.org/EIPS/eip-721\\\\n */\\\\ninterface IERC721Enumerable is IERC721 {\\\\n    /**\\\\n     * @dev Returns the total amount of tokens stored by the contract.\\\\n     */\\\\n    function totalSupply() external view returns (uint256);\\\\n\\\\n    /**\\\\n     * @dev Returns a token ID owned by `owner` at a given `index` of its token list.\\\\n     * Use along with {balanceOf} to enumerate all of ``owner``\'s tokens.\\\\n     */\\\\n    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256 tokenId);\\\\n\\\\n    /**\\\\n     * @dev Returns a token ID at a given `index` of all the tokens stored by the contract.\\\\n     * Use along with {totalSupply} to enumerate all tokens.\\\\n     */\\\\n    function tokenByIndex(uint256 index) external view returns (uint256);\\\\n}\\\\n\\",\\"keccak256\\":\\"0x483f88fbbb1d6d75000fbe8ce14279b5e6121cd5a29ff5f1b91fed407735a6c3\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/IERC721Metadata.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"../IERC721.sol\\\\\\";\\\\n\\\\n/**\\\\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\\\\n * @dev See https://eips.ethereum.org/EIPS/eip-721\\\\n */\\\\ninterface IERC721Metadata is IERC721 {\\\\n    /**\\\\n     * @dev Returns the token collection name.\\\\n     */\\\\n    function name() external view returns (string memory);\\\\n\\\\n    /**\\\\n     * @dev Returns the token collection symbol.\\\\n     */\\\\n    function symbol() external view returns (string memory);\\\\n\\\\n    /**\\\\n     * @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token.\\\\n     */\\\\n    function tokenURI(uint256 tokenId) external view returns (string memory);\\\\n}\\\\n\\",\\"keccak256\\":\\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/Address.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/Address.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev Collection of functions related to the address type\\\\n */\\\\nlibrary Address {\\\\n    /**\\\\n     * @dev Returns true if `account` is a contract.\\\\n     *\\\\n     * [IMPORTANT]\\\\n     * ====\\\\n     * It is unsafe to assume that an address for which this function returns\\\\n     * false is an externally-owned account (EOA) and not a contract.\\\\n     *\\\\n     * Among others, `isContract` will return false for the following\\\\n     * types of addresses:\\\\n     *\\\\n     *  - an externally-owned account\\\\n     *  - a contract in construction\\\\n     *  - an address where a contract will be created\\\\n     *  - an address where a contract lived, but was destroyed\\\\n     * ====\\\\n     */\\\\n    function isContract(address account) internal view returns (bool) {\\\\n        // This method relies on extcodesize, which returns 0 for contracts in\\\\n        // construction, since the code is only stored at the end of the\\\\n        // constructor execution.\\\\n\\\\n        uint256 size;\\\\n        assembly {\\\\n            size := extcodesize(account)\\\\n        }\\\\n        return size > 0;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\\\\n     * `recipient`, forwarding all available gas and reverting on errors.\\\\n     *\\\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\\\n     * imposed by `transfer`, making them unable to receive funds via\\\\n     * `transfer`. {sendValue} removes this limitation.\\\\n     *\\\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\\\n     *\\\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\\\n     * taken to not create reentrancy vulnerabilities. Consider using\\\\n     * {ReentrancyGuard} or the\\\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\\\n     */\\\\n    function sendValue(address payable recipient, uint256 amount) internal {\\\\n        require(address(this).balance >= amount, \\\\\\"Address: insufficient balance\\\\\\");\\\\n\\\\n        (bool success, ) = recipient.call{value: amount}(\\\\\\"\\\\\\");\\\\n        require(success, \\\\\\"Address: unable to send value, recipient may have reverted\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Performs a Solidity function call using a low level `call`. A\\\\n     * plain `call` is an unsafe replacement for a function call: use this\\\\n     * function instead.\\\\n     *\\\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\\\n     * function (like regular Solidity function calls).\\\\n     *\\\\n     * Returns the raw returned data. To convert to the expected return value,\\\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `target` must be a contract.\\\\n     * - calling `target` with `data` must not revert.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\\\n        return functionCall(target, data, \\\\\\"Address: low-level call failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCall(\\\\n        address target,\\\\n        bytes memory data,\\\\n        string memory errorMessage\\\\n    ) internal returns (bytes memory) {\\\\n        return functionCallWithValue(target, data, 0, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\\\n     * but also transferring `value` wei to `target`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - the calling contract must have an ETH balance of at least `value`.\\\\n     * - the called Solidity function must be `payable`.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCallWithValue(\\\\n        address target,\\\\n        bytes memory data,\\\\n        uint256 value\\\\n    ) internal returns (bytes memory) {\\\\n        return functionCallWithValue(target, data, value, \\\\\\"Address: low-level call with value failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCallWithValue(\\\\n        address target,\\\\n        bytes memory data,\\\\n        uint256 value,\\\\n        string memory errorMessage\\\\n    ) internal returns (bytes memory) {\\\\n        require(address(this).balance >= value, \\\\\\"Address: insufficient balance for call\\\\\\");\\\\n        require(isContract(target), \\\\\\"Address: call to non-contract\\\\\\");\\\\n\\\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\\\n        return verifyCallResult(success, returndata, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\\\n     * but performing a static call.\\\\n     *\\\\n     * _Available since v3.3._\\\\n     */\\\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\\\n        return functionStaticCall(target, data, \\\\\\"Address: low-level static call failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\\\n     * but performing a static call.\\\\n     *\\\\n     * _Available since v3.3._\\\\n     */\\\\n    function functionStaticCall(\\\\n        address target,\\\\n        bytes memory data,\\\\n        string memory errorMessage\\\\n    ) internal view returns (bytes memory) {\\\\n        require(isContract(target), \\\\\\"Address: static call to non-contract\\\\\\");\\\\n\\\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\\\n        return verifyCallResult(success, returndata, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\\\n     * but performing a delegate call.\\\\n     *\\\\n     * _Available since v3.4._\\\\n     */\\\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\\\n        return functionDelegateCall(target, data, \\\\\\"Address: low-level delegate call failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\\\n     * but performing a delegate call.\\\\n     *\\\\n     * _Available since v3.4._\\\\n     */\\\\n    function functionDelegateCall(\\\\n        address target,\\\\n        bytes memory data,\\\\n        string memory errorMessage\\\\n    ) internal returns (bytes memory) {\\\\n        require(isContract(target), \\\\\\"Address: delegate call to non-contract\\\\\\");\\\\n\\\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\\\n        return verifyCallResult(success, returndata, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\\\\n     * revert reason using the provided one.\\\\n     *\\\\n     * _Available since v4.3._\\\\n     */\\\\n    function verifyCallResult(\\\\n        bool success,\\\\n        bytes memory returndata,\\\\n        string memory errorMessage\\\\n    ) internal pure returns (bytes memory) {\\\\n        if (success) {\\\\n            return returndata;\\\\n        } else {\\\\n            // Look for revert reason and bubble it up if present\\\\n            if (returndata.length > 0) {\\\\n                // The easiest way to bubble the revert reason is using memory via assembly\\\\n\\\\n                assembly {\\\\n                    let returndata_size := mload(returndata)\\\\n                    revert(add(32, returndata), returndata_size)\\\\n                }\\\\n            } else {\\\\n                revert(errorMessage);\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0x51b758a8815ecc9596c66c37d56b1d33883a444631a3f916b9fe65cb863ef7c4\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/Context.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev Provides information about the current execution context, including the\\\\n * sender of the transaction and its data. While these are generally available\\\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\\\n * manner, since when dealing with meta-transactions the account sending and\\\\n * paying for execution may not be the actual sender (as far as an application\\\\n * is concerned).\\\\n *\\\\n * This contract is only required for intermediate, library-like contracts.\\\\n */\\\\nabstract contract Context {\\\\n    function _msgSender() internal view virtual returns (address) {\\\\n        return msg.sender;\\\\n    }\\\\n\\\\n    function _msgData() internal view virtual returns (bytes calldata) {\\\\n        return msg.data;\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/Strings.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/Strings.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev String operations.\\\\n */\\\\nlibrary Strings {\\\\n    bytes16 private constant _HEX_SYMBOLS = \\\\\\"0123456789abcdef\\\\\\";\\\\n\\\\n    /**\\\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\\\n     */\\\\n    function toString(uint256 value) internal pure returns (string memory) {\\\\n        // Inspired by OraclizeAPI\'s implementation - MIT licence\\\\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\\\\n\\\\n        if (value == 0) {\\\\n            return \\\\\\"0\\\\\\";\\\\n        }\\\\n        uint256 temp = value;\\\\n        uint256 digits;\\\\n        while (temp != 0) {\\\\n            digits++;\\\\n            temp /= 10;\\\\n        }\\\\n        bytes memory buffer = new bytes(digits);\\\\n        while (value != 0) {\\\\n            digits -= 1;\\\\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\\\\n            value /= 10;\\\\n        }\\\\n        return string(buffer);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\\\n     */\\\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\\\n        if (value == 0) {\\\\n            return \\\\\\"0x00\\\\\\";\\\\n        }\\\\n        uint256 temp = value;\\\\n        uint256 length = 0;\\\\n        while (temp != 0) {\\\\n            length++;\\\\n            temp >>= 8;\\\\n        }\\\\n        return toHexString(value, length);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\\\n     */\\\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\\\n        bytes memory buffer = new bytes(2 * length + 2);\\\\n        buffer[0] = \\\\\\"0\\\\\\";\\\\n        buffer[1] = \\\\\\"x\\\\\\";\\\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\\\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\\\\n            value >>= 4;\\\\n        }\\\\n        require(value == 0, \\\\\\"Strings: hex length insufficient\\\\\\");\\\\n        return string(buffer);\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0x32c202bd28995dd20c4347b7c6467a6d3241c74c8ad3edcbb610cd9205916c45\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/cryptography/ECDSA.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/cryptography/ECDSA.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"../Strings.sol\\\\\\";\\\\n\\\\n/**\\\\n * @dev Elliptic Curve Digital Signature Algorithm (ECDSA) operations.\\\\n *\\\\n * These functions can be used to verify that a message was signed by the holder\\\\n * of the private keys of a given address.\\\\n */\\\\nlibrary ECDSA {\\\\n    enum RecoverError {\\\\n        NoError,\\\\n        InvalidSignature,\\\\n        InvalidSignatureLength,\\\\n        InvalidSignatureS,\\\\n        InvalidSignatureV\\\\n    }\\\\n\\\\n    function _throwError(RecoverError error) private pure {\\\\n        if (error == RecoverError.NoError) {\\\\n            return; // no error: do nothing\\\\n        } else if (error == RecoverError.InvalidSignature) {\\\\n            revert(\\\\\\"ECDSA: invalid signature\\\\\\");\\\\n        } else if (error == RecoverError.InvalidSignatureLength) {\\\\n            revert(\\\\\\"ECDSA: invalid signature length\\\\\\");\\\\n        } else if (error == RecoverError.InvalidSignatureS) {\\\\n            revert(\\\\\\"ECDSA: invalid signature \'s\' value\\\\\\");\\\\n        } else if (error == RecoverError.InvalidSignatureV) {\\\\n            revert(\\\\\\"ECDSA: invalid signature \'v\' value\\\\\\");\\\\n        }\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Returns the address that signed a hashed message (`hash`) with\\\\n     * `signature` or error string. This address can then be used for verification purposes.\\\\n     *\\\\n     * The `ecrecover` EVM opcode allows for malleable (non-unique) signatures:\\\\n     * this function rejects them by requiring the `s` value to be in the lower\\\\n     * half order, and the `v` value to be either 27 or 28.\\\\n     *\\\\n     * IMPORTANT: `hash` _must_ be the result of a hash operation for the\\\\n     * verification to be secure: it is possible to craft signatures that\\\\n     * recover to arbitrary addresses for non-hashed data. A safe way to ensure\\\\n     * this is by receiving a hash of the original message (which may otherwise\\\\n     * be too long), and then calling {toEthSignedMessageHash} on it.\\\\n     *\\\\n     * Documentation for signature generation:\\\\n     * - with https://web3js.readthedocs.io/en/v1.3.4/web3-eth-accounts.html#sign[Web3.js]\\\\n     * - with https://docs.ethers.io/v5/api/signer/#Signer-signMessage[ethers]\\\\n     *\\\\n     * _Available since v4.3._\\\\n     */\\\\n    function tryRecover(bytes32 hash, bytes memory signature) internal pure returns (address, RecoverError) {\\\\n        // Check the signature length\\\\n        // - case 65: r,s,v signature (standard)\\\\n        // - case 64: r,vs signature (cf https://eips.ethereum.org/EIPS/eip-2098) _Available since v4.1._\\\\n        if (signature.length == 65) {\\\\n            bytes32 r;\\\\n            bytes32 s;\\\\n            uint8 v;\\\\n            // ecrecover takes the signature parameters, and the only way to get them\\\\n            // currently is to use assembly.\\\\n            assembly {\\\\n                r := mload(add(signature, 0x20))\\\\n                s := mload(add(signature, 0x40))\\\\n                v := byte(0, mload(add(signature, 0x60)))\\\\n            }\\\\n            return tryRecover(hash, v, r, s);\\\\n        } else if (signature.length == 64) {\\\\n            bytes32 r;\\\\n            bytes32 vs;\\\\n            // ecrecover takes the signature parameters, and the only way to get them\\\\n            // currently is to use assembly.\\\\n            assembly {\\\\n                r := mload(add(signature, 0x20))\\\\n                vs := mload(add(signature, 0x40))\\\\n            }\\\\n            return tryRecover(hash, r, vs);\\\\n        } else {\\\\n            return (address(0), RecoverError.InvalidSignatureLength);\\\\n        }\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Returns the address that signed a hashed message (`hash`) with\\\\n     * `signature`. This address can then be used for verification purposes.\\\\n     *\\\\n     * The `ecrecover` EVM opcode allows for malleable (non-unique) signatures:\\\\n     * this function rejects them by requiring the `s` value to be in the lower\\\\n     * half order, and the `v` value to be either 27 or 28.\\\\n     *\\\\n     * IMPORTANT: `hash` _must_ be the result of a hash operation for the\\\\n     * verification to be secure: it is possible to craft signatures that\\\\n     * recover to arbitrary addresses for non-hashed data. A safe way to ensure\\\\n     * this is by receiving a hash of the original message (which may otherwise\\\\n     * be too long), and then calling {toEthSignedMessageHash} on it.\\\\n     */\\\\n    function recover(bytes32 hash, bytes memory signature) internal pure returns (address) {\\\\n        (address recovered, RecoverError error) = tryRecover(hash, signature);\\\\n        _throwError(error);\\\\n        return recovered;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Overload of {ECDSA-tryRecover} that receives the `r` and `vs` short-signature fields separately.\\\\n     *\\\\n     * See https://eips.ethereum.org/EIPS/eip-2098[EIP-2098 short signatures]\\\\n     *\\\\n     * _Available since v4.3._\\\\n     */\\\\n    function tryRecover(\\\\n        bytes32 hash,\\\\n        bytes32 r,\\\\n        bytes32 vs\\\\n    ) internal pure returns (address, RecoverError) {\\\\n        bytes32 s;\\\\n        uint8 v;\\\\n        assembly {\\\\n            s := and(vs, 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\\\\n            v := add(shr(255, vs), 27)\\\\n        }\\\\n        return tryRecover(hash, v, r, s);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Overload of {ECDSA-recover} that receives the `r and `vs` short-signature fields separately.\\\\n     *\\\\n     * _Available since v4.2._\\\\n     */\\\\n    function recover(\\\\n        bytes32 hash,\\\\n        bytes32 r,\\\\n        bytes32 vs\\\\n    ) internal pure returns (address) {\\\\n        (address recovered, RecoverError error) = tryRecover(hash, r, vs);\\\\n        _throwError(error);\\\\n        return recovered;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Overload of {ECDSA-tryRecover} that receives the `v`,\\\\n     * `r` and `s` signature fields separately.\\\\n     *\\\\n     * _Available since v4.3._\\\\n     */\\\\n    function tryRecover(\\\\n        bytes32 hash,\\\\n        uint8 v,\\\\n        bytes32 r,\\\\n        bytes32 s\\\\n    ) internal pure returns (address, RecoverError) {\\\\n        // EIP-2 still allows signature malleability for ecrecover(). Remove this possibility and make the signature\\\\n        // unique. Appendix F in the Ethereum Yellow paper (https://ethereum.github.io/yellowpaper/paper.pdf), defines\\\\n        // the valid range for s in (301): 0 < s < secp256k1n \\\\u00f7 2 + 1, and for v in (302): v \\\\u2208 {27, 28}. Most\\\\n        // signatures from current libraries generate a unique signature with an s-value in the lower half order.\\\\n        //\\\\n        // If your library generates malleable signatures, such as s-values in the upper range, calculate a new s-value\\\\n        // with 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141 - s1 and flip v from 27 to 28 or\\\\n        // vice versa. If your library also generates signatures with 0/1 for v instead 27/28, add 27 to v to accept\\\\n        // these malleable signatures as well.\\\\n        if (uint256(s) > 0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0) {\\\\n            return (address(0), RecoverError.InvalidSignatureS);\\\\n        }\\\\n        if (v != 27 && v != 28) {\\\\n            return (address(0), RecoverError.InvalidSignatureV);\\\\n        }\\\\n\\\\n        // If the signature is valid (and not malleable), return the signer address\\\\n        address signer = ecrecover(hash, v, r, s);\\\\n        if (signer == address(0)) {\\\\n            return (address(0), RecoverError.InvalidSignature);\\\\n        }\\\\n\\\\n        return (signer, RecoverError.NoError);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Overload of {ECDSA-recover} that receives the `v`,\\\\n     * `r` and `s` signature fields separately.\\\\n     */\\\\n    function recover(\\\\n        bytes32 hash,\\\\n        uint8 v,\\\\n        bytes32 r,\\\\n        bytes32 s\\\\n    ) internal pure returns (address) {\\\\n        (address recovered, RecoverError error) = tryRecover(hash, v, r, s);\\\\n        _throwError(error);\\\\n        return recovered;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Returns an Ethereum Signed Message, created from a `hash`. This\\\\n     * produces hash corresponding to the one signed with the\\\\n     * https://eth.wiki/json-rpc/API#eth_sign[`eth_sign`]\\\\n     * JSON-RPC method as part of EIP-191.\\\\n     *\\\\n     * See {recover}.\\\\n     */\\\\n    function toEthSignedMessageHash(bytes32 hash) internal pure returns (bytes32) {\\\\n        // 32 is the length in bytes of hash,\\\\n        // enforced by the type signature above\\\\n        return keccak256(abi.encodePacked(\\\\\\"\\\\\\\\x19Ethereum Signed Message:\\\\\\\\n32\\\\\\", hash));\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Returns an Ethereum Signed Message, created from `s`. This\\\\n     * produces hash corresponding to the one signed with the\\\\n     * https://eth.wiki/json-rpc/API#eth_sign[`eth_sign`]\\\\n     * JSON-RPC method as part of EIP-191.\\\\n     *\\\\n     * See {recover}.\\\\n     */\\\\n    function toEthSignedMessageHash(bytes memory s) internal pure returns (bytes32) {\\\\n        return keccak256(abi.encodePacked(\\\\\\"\\\\\\\\x19Ethereum Signed Message:\\\\\\\\n\\\\\\", Strings.toString(s.length), s));\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Returns an Ethereum Signed Typed Data, created from a\\\\n     * `domainSeparator` and a `structHash`. This produces hash corresponding\\\\n     * to the one signed with the\\\\n     * https://eips.ethereum.org/EIPS/eip-712[`eth_signTypedData`]\\\\n     * JSON-RPC method as part of EIP-712.\\\\n     *\\\\n     * See {recover}.\\\\n     */\\\\n    function toTypedDataHash(bytes32 domainSeparator, bytes32 structHash) internal pure returns (bytes32) {\\\\n        return keccak256(abi.encodePacked(\\\\\\"\\\\\\\\x19\\\\\\\\x01\\\\\\", domainSeparator, structHash));\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0xe9e291de7ffe06e66503c6700b1bb84ff6e0989cbb974653628d8994e7c97f03\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/cryptography/MerkleProof.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/cryptography/MerkleProof.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev These functions deal with verification of Merkle Trees proofs.\\\\n *\\\\n * The proofs can be generated using the JavaScript library\\\\n * https://github.com/miguelmota/merkletreejs[merkletreejs].\\\\n * Note: the hashing algorithm should be keccak256 and pair sorting should be enabled.\\\\n *\\\\n * See `test/utils/cryptography/MerkleProof.test.js` for some examples.\\\\n */\\\\nlibrary MerkleProof {\\\\n    /**\\\\n     * @dev Returns true if a `leaf` can be proved to be a part of a Merkle tree\\\\n     * defined by `root`. For this, a `proof` must be provided, containing\\\\n     * sibling hashes on the branch from the leaf to the root of the tree. Each\\\\n     * pair of leaves and each pair of pre-images are assumed to be sorted.\\\\n     */\\\\n    function verify(\\\\n        bytes32[] memory proof,\\\\n        bytes32 root,\\\\n        bytes32 leaf\\\\n    ) internal pure returns (bool) {\\\\n        return processProof(proof, leaf) == root;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Returns the rebuilt hash obtained by traversing a Merklee tree up\\\\n     * from `leaf` using `proof`. A `proof` is valid if and only if the rebuilt\\\\n     * hash matches the root of the tree. When processing the proof, the pairs\\\\n     * of leafs & pre-images are assumed to be sorted.\\\\n     *\\\\n     * _Available since v4.4._\\\\n     */\\\\n    function processProof(bytes32[] memory proof, bytes32 leaf) internal pure returns (bytes32) {\\\\n        bytes32 computedHash = leaf;\\\\n        for (uint256 i = 0; i < proof.length; i++) {\\\\n            bytes32 proofElement = proof[i];\\\\n            if (computedHash <= proofElement) {\\\\n                // Hash(current computed hash + current element of the proof)\\\\n                computedHash = keccak256(abi.encodePacked(computedHash, proofElement));\\\\n            } else {\\\\n                // Hash(current element of the proof + current computed hash)\\\\n                computedHash = keccak256(abi.encodePacked(proofElement, computedHash));\\\\n            }\\\\n        }\\\\n        return computedHash;\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0x9c35727c74a6ffd8d02237b414e7bfb532c0323b1088709def98ea5c628157de\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/introspection/ERC165.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"./IERC165.sol\\\\\\";\\\\n\\\\n/**\\\\n * @dev Implementation of the {IERC165} interface.\\\\n *\\\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\\\n * for the additional interface id that will be supported. For example:\\\\n *\\\\n * ```solidity\\\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\\\n * }\\\\n * ```\\\\n *\\\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\\\n */\\\\nabstract contract ERC165 is IERC165 {\\\\n    /**\\\\n     * @dev See {IERC165-supportsInterface}.\\\\n     */\\\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\\\n        return interfaceId == type(IERC165).interfaceId;\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/introspection/IERC165.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev Interface of the ERC165 standard, as defined in the\\\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\\\n *\\\\n * Implementers can declare support of contract interfaces, which can then be\\\\n * queried by others ({ERC165Checker}).\\\\n *\\\\n * For an implementation, see {ERC165}.\\\\n */\\\\ninterface IERC165 {\\\\n    /**\\\\n     * @dev Returns true if this contract implements the interface defined by\\\\n     * `interfaceId`. See the corresponding\\\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\\\n     * to learn more about how these ids are created.\\\\n     *\\\\n     * This function call must use less than 30 000 gas.\\\\n     */\\\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\\\n}\\\\n\\",\\"keccak256\\":\\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\\",\\"license\\":\\"MIT\\"},\\"contracts/ERC721A.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\r\\\\n// Creator: Chiru Labs\\\\r\\\\n\\\\r\\\\npragma solidity ^0.8.4;\\\\r\\\\n\\\\r\\\\nimport \\\\\\"@openzeppelin/contracts/token/ERC721/IERC721.sol\\\\\\";\\\\r\\\\nimport \\\\\\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\\\\\\";\\\\r\\\\nimport \\\\\\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\\\\\\";\\\\r\\\\nimport \\\\\\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol\\\\\\";\\\\r\\\\nimport \\\\\\"@openzeppelin/contracts/utils/Address.sol\\\\\\";\\\\r\\\\nimport \\\\\\"@openzeppelin/contracts/utils/Context.sol\\\\\\";\\\\r\\\\nimport \\\\\\"@openzeppelin/contracts/utils/Strings.sol\\\\\\";\\\\r\\\\nimport \\\\\\"@openzeppelin/contracts/utils/introspection/ERC165.sol\\\\\\";\\\\r\\\\n\\\\r\\\\nerror ApprovalCallerNotOwnerNorApproved();\\\\r\\\\nerror ApprovalQueryForNonexistentToken();\\\\r\\\\nerror ApproveToCaller();\\\\r\\\\nerror ApprovalToCurrentOwner();\\\\r\\\\nerror BalanceQueryForZeroAddress();\\\\r\\\\nerror MintedQueryForZeroAddress();\\\\r\\\\nerror BurnedQueryForZeroAddress();\\\\r\\\\nerror AuxQueryForZeroAddress();\\\\r\\\\nerror MintToZeroAddress();\\\\r\\\\nerror MintZeroQuantity();\\\\r\\\\nerror OwnerIndexOutOfBounds();\\\\r\\\\nerror OwnerQueryForNonexistentToken();\\\\r\\\\nerror TokenIndexOutOfBounds();\\\\r\\\\nerror TransferCallerNotOwnerNorApproved();\\\\r\\\\nerror TransferFromIncorrectOwner();\\\\r\\\\nerror TransferToNonERC721ReceiverImplementer();\\\\r\\\\nerror TransferToZeroAddress();\\\\r\\\\nerror URIQueryForNonexistentToken();\\\\r\\\\n\\\\r\\\\n/**\\\\r\\\\n * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including\\\\r\\\\n * the Metadata extension. Built to optimize for lower gas during batch mints.\\\\r\\\\n *\\\\r\\\\n * Assumes serials are sequentially minted starting at _startTokenId() (defaults to 0, e.g. 0, 1, 2, 3..).\\\\r\\\\n *\\\\r\\\\n * Assumes that an owner cannot have more than 2**64 - 1 (max value of uint64) of supply.\\\\r\\\\n *\\\\r\\\\n * Assumes that the maximum token id cannot exceed 2**256 - 1 (max value of uint256).\\\\r\\\\n */\\\\r\\\\ncontract ERC721A is Context, ERC165, IERC721, IERC721Metadata {\\\\r\\\\n    using Address for address;\\\\r\\\\n    using Strings for uint256;\\\\r\\\\n\\\\r\\\\n    // Compiler will pack this into a single 256bit word.\\\\r\\\\n    struct TokenOwnership {\\\\r\\\\n        // The address of the owner.\\\\r\\\\n        address addr;\\\\r\\\\n        // Keeps track of the start time of ownership with minimal overhead for tokenomics.\\\\r\\\\n        uint64 startTimestamp;\\\\r\\\\n        // Whether the token has been burned.\\\\r\\\\n        bool burned;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    // Compiler will pack this into a single 256bit word.\\\\r\\\\n    struct AddressData {\\\\r\\\\n        // Realistically, 2**64-1 is more than enough.\\\\r\\\\n        uint64 balance;\\\\r\\\\n        // Keeps track of mint count with minimal overhead for tokenomics.\\\\r\\\\n        uint64 numberMinted;\\\\r\\\\n        // Keeps track of burn count with minimal overhead for tokenomics.\\\\r\\\\n        uint64 numberBurned;\\\\r\\\\n        // For miscellaneous variable(s) pertaining to the address\\\\r\\\\n        // (e.g. number of whitelist mint slots used).\\\\r\\\\n        // If there are multiple variables, please pack them into a uint64.\\\\r\\\\n        uint64 aux;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    // The tokenId of the next token to be minted.\\\\r\\\\n    uint256 internal _currentIndex;\\\\r\\\\n\\\\r\\\\n    // The number of tokens burned.\\\\r\\\\n    uint256 internal _burnCounter;\\\\r\\\\n\\\\r\\\\n    // Token name\\\\r\\\\n    string private _name;\\\\r\\\\n\\\\r\\\\n    // Token symbol\\\\r\\\\n    string private _symbol;\\\\r\\\\n\\\\r\\\\n    // Mapping from token ID to ownership details\\\\r\\\\n    // An empty struct value does not necessarily mean the token is unowned. See ownershipOf implementation for details.\\\\r\\\\n    mapping(uint256 => TokenOwnership) internal _ownerships;\\\\r\\\\n\\\\r\\\\n    // Mapping owner address to address data\\\\r\\\\n    mapping(address => AddressData) private _addressData;\\\\r\\\\n\\\\r\\\\n    // Mapping from token ID to approved address\\\\r\\\\n    mapping(uint256 => address) private _tokenApprovals;\\\\r\\\\n\\\\r\\\\n    // Mapping from owner to operator approvals\\\\r\\\\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\\\\r\\\\n\\\\r\\\\n    constructor(string memory name_, string memory symbol_) {\\\\r\\\\n        _name = name_;\\\\r\\\\n        _symbol = symbol_;\\\\r\\\\n        _currentIndex = _startTokenId();\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * To change the starting tokenId, please override this function.\\\\r\\\\n     */\\\\r\\\\n    function _startTokenId() internal view virtual returns (uint256) {\\\\r\\\\n        return 0;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev See {IERC721Enumerable-totalSupply}.\\\\r\\\\n     * @dev Burned tokens are calculated here, use _totalMinted() if you want to count just minted tokens.\\\\r\\\\n     */\\\\r\\\\n    function totalSupply() public view returns (uint256) {\\\\r\\\\n        // Counter underflow is impossible as _burnCounter cannot be incremented\\\\r\\\\n        // more than _currentIndex - _startTokenId() times\\\\r\\\\n        unchecked {\\\\r\\\\n            return _currentIndex - _burnCounter - _startTokenId();\\\\r\\\\n        }\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * Returns the total amount of tokens minted in the contract.\\\\r\\\\n     */\\\\r\\\\n    function _totalMinted() internal view returns (uint256) {\\\\r\\\\n        // Counter underflow is impossible as _currentIndex does not decrement,\\\\r\\\\n        // and it is initialized to _startTokenId()\\\\r\\\\n        unchecked {\\\\r\\\\n            return _currentIndex - _startTokenId();\\\\r\\\\n        }\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev See {IERC165-supportsInterface}.\\\\r\\\\n     */\\\\r\\\\n    function supportsInterface(bytes4 interfaceId)\\\\r\\\\n        public\\\\r\\\\n        view\\\\r\\\\n        virtual\\\\r\\\\n        override(ERC165, IERC165)\\\\r\\\\n        returns (bool)\\\\r\\\\n    {\\\\r\\\\n        return\\\\r\\\\n            interfaceId == type(IERC721).interfaceId ||\\\\r\\\\n            interfaceId == type(IERC721Metadata).interfaceId ||\\\\r\\\\n            super.supportsInterface(interfaceId);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev See {IERC721-balanceOf}.\\\\r\\\\n     */\\\\r\\\\n    function balanceOf(address owner) public view override returns (uint256) {\\\\r\\\\n        if (owner == address(0)) revert BalanceQueryForZeroAddress();\\\\r\\\\n        return uint256(_addressData[owner].balance);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * Returns the number of tokens minted by `owner`.\\\\r\\\\n     */\\\\r\\\\n    function _numberMinted(address owner) internal view returns (uint256) {\\\\r\\\\n        if (owner == address(0)) revert MintedQueryForZeroAddress();\\\\r\\\\n        return uint256(_addressData[owner].numberMinted);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * Returns the number of tokens burned by or on behalf of `owner`.\\\\r\\\\n     */\\\\r\\\\n    function _numberBurned(address owner) internal view returns (uint256) {\\\\r\\\\n        if (owner == address(0)) revert BurnedQueryForZeroAddress();\\\\r\\\\n        return uint256(_addressData[owner].numberBurned);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * Returns the auxillary data for `owner`. (e.g. number of whitelist mint slots used).\\\\r\\\\n     */\\\\r\\\\n    function _getAux(address owner) internal view returns (uint64) {\\\\r\\\\n        if (owner == address(0)) revert AuxQueryForZeroAddress();\\\\r\\\\n        return _addressData[owner].aux;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * Sets the auxillary data for `owner`. (e.g. number of whitelist mint slots used).\\\\r\\\\n     * If there are multiple variables, please pack them into a uint64.\\\\r\\\\n     */\\\\r\\\\n    function _setAux(address owner, uint64 aux) internal {\\\\r\\\\n        if (owner == address(0)) revert AuxQueryForZeroAddress();\\\\r\\\\n        _addressData[owner].aux = aux;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * Gas spent here starts off proportional to the maximum mint batch size.\\\\r\\\\n     * It gradually moves to O(1) as tokens get transferred around in the collection over time.\\\\r\\\\n     */\\\\r\\\\n    function ownershipOf(uint256 tokenId)\\\\r\\\\n        internal\\\\r\\\\n        view\\\\r\\\\n        returns (TokenOwnership memory)\\\\r\\\\n    {\\\\r\\\\n        uint256 curr = tokenId;\\\\r\\\\n\\\\r\\\\n        unchecked {\\\\r\\\\n            if (_startTokenId() <= curr && curr < _currentIndex) {\\\\r\\\\n                TokenOwnership memory ownership = _ownerships[curr];\\\\r\\\\n                if (!ownership.burned) {\\\\r\\\\n                    if (ownership.addr != address(0)) {\\\\r\\\\n                        return ownership;\\\\r\\\\n                    }\\\\r\\\\n                    // Invariant:\\\\r\\\\n                    // There will always be an ownership that has an address and is not burned\\\\r\\\\n                    // before an ownership that does not have an address and is not burned.\\\\r\\\\n                    // Hence, curr will not underflow.\\\\r\\\\n                    while (true) {\\\\r\\\\n                        curr--;\\\\r\\\\n                        ownership = _ownerships[curr];\\\\r\\\\n                        if (ownership.addr != address(0)) {\\\\r\\\\n                            return ownership;\\\\r\\\\n                        }\\\\r\\\\n                    }\\\\r\\\\n                }\\\\r\\\\n            }\\\\r\\\\n        }\\\\r\\\\n        revert OwnerQueryForNonexistentToken();\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev See {IERC721-ownerOf}.\\\\r\\\\n     */\\\\r\\\\n    function ownerOf(uint256 tokenId) public view override returns (address) {\\\\r\\\\n        return ownershipOf(tokenId).addr;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev See {IERC721Metadata-name}.\\\\r\\\\n     */\\\\r\\\\n    function name() public view virtual override returns (string memory) {\\\\r\\\\n        return _name;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev See {IERC721Metadata-symbol}.\\\\r\\\\n     */\\\\r\\\\n    function symbol() public view virtual override returns (string memory) {\\\\r\\\\n        return _symbol;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev See {IERC721Metadata-tokenURI}.\\\\r\\\\n     */\\\\r\\\\n    function tokenURI(uint256 tokenId)\\\\r\\\\n        public\\\\r\\\\n        view\\\\r\\\\n        virtual\\\\r\\\\n        override\\\\r\\\\n        returns (string memory)\\\\r\\\\n    {\\\\r\\\\n        if (!_exists(tokenId)) revert URIQueryForNonexistentToken();\\\\r\\\\n\\\\r\\\\n        string memory baseURI = _baseURI();\\\\r\\\\n        return\\\\r\\\\n            bytes(baseURI).length != 0\\\\r\\\\n                ? string(abi.encodePacked(baseURI, tokenId.toString()))\\\\r\\\\n                : \\\\\\"\\\\\\";\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each\\\\r\\\\n     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty\\\\r\\\\n     * by default, can be overriden in child contracts.\\\\r\\\\n     */\\\\r\\\\n    function _baseURI() internal view virtual returns (string memory) {\\\\r\\\\n        return \\\\\\"\\\\\\";\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev See {IERC721-approve}.\\\\r\\\\n     */\\\\r\\\\n    function approve(address to, uint256 tokenId) public override {\\\\r\\\\n        address owner = ERC721A.ownerOf(tokenId);\\\\r\\\\n        if (to == owner) revert ApprovalToCurrentOwner();\\\\r\\\\n\\\\r\\\\n        if (_msgSender() != owner && !isApprovedForAll(owner, _msgSender())) {\\\\r\\\\n            revert ApprovalCallerNotOwnerNorApproved();\\\\r\\\\n        }\\\\r\\\\n\\\\r\\\\n        _approve(to, tokenId, owner);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev See {IERC721-getApproved}.\\\\r\\\\n     */\\\\r\\\\n    function getApproved(uint256 tokenId)\\\\r\\\\n        public\\\\r\\\\n        view\\\\r\\\\n        override\\\\r\\\\n        returns (address)\\\\r\\\\n    {\\\\r\\\\n        if (!_exists(tokenId)) revert ApprovalQueryForNonexistentToken();\\\\r\\\\n\\\\r\\\\n        return _tokenApprovals[tokenId];\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev See {IERC721-setApprovalForAll}.\\\\r\\\\n     */\\\\r\\\\n    function setApprovalForAll(address operator, bool approved)\\\\r\\\\n        public\\\\r\\\\n        virtual\\\\r\\\\n        override\\\\r\\\\n    {\\\\r\\\\n        if (operator == _msgSender()) revert ApproveToCaller();\\\\r\\\\n\\\\r\\\\n        _operatorApprovals[_msgSender()][operator] = approved;\\\\r\\\\n        emit ApprovalForAll(_msgSender(), operator, approved);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev See {IERC721-isApprovedForAll}.\\\\r\\\\n     */\\\\r\\\\n    function isApprovedForAll(address owner, address operator)\\\\r\\\\n        public\\\\r\\\\n        view\\\\r\\\\n        virtual\\\\r\\\\n        override\\\\r\\\\n        returns (bool)\\\\r\\\\n    {\\\\r\\\\n        return _operatorApprovals[owner][operator];\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev See {IERC721-transferFrom}.\\\\r\\\\n     */\\\\r\\\\n    function transferFrom(\\\\r\\\\n        address from,\\\\r\\\\n        address to,\\\\r\\\\n        uint256 tokenId\\\\r\\\\n    ) public virtual override {\\\\r\\\\n        _transfer(from, to, tokenId);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev See {IERC721-safeTransferFrom}.\\\\r\\\\n     */\\\\r\\\\n    function safeTransferFrom(\\\\r\\\\n        address from,\\\\r\\\\n        address to,\\\\r\\\\n        uint256 tokenId\\\\r\\\\n    ) public virtual override {\\\\r\\\\n        safeTransferFrom(from, to, tokenId, \\\\\\"\\\\\\");\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev See {IERC721-safeTransferFrom}.\\\\r\\\\n     */\\\\r\\\\n    function safeTransferFrom(\\\\r\\\\n        address from,\\\\r\\\\n        address to,\\\\r\\\\n        uint256 tokenId,\\\\r\\\\n        bytes memory _data\\\\r\\\\n    ) public virtual override {\\\\r\\\\n        _transfer(from, to, tokenId);\\\\r\\\\n        if (\\\\r\\\\n            to.isContract() &&\\\\r\\\\n            !_checkContractOnERC721Received(from, to, tokenId, _data)\\\\r\\\\n        ) {\\\\r\\\\n            revert TransferToNonERC721ReceiverImplementer();\\\\r\\\\n        }\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev Returns whether `tokenId` exists.\\\\r\\\\n     *\\\\r\\\\n     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.\\\\r\\\\n     *\\\\r\\\\n     * Tokens start existing when they are minted (`_mint`),\\\\r\\\\n     */\\\\r\\\\n    function _exists(uint256 tokenId) internal view returns (bool) {\\\\r\\\\n        return\\\\r\\\\n            _startTokenId() <= tokenId &&\\\\r\\\\n            tokenId < _currentIndex &&\\\\r\\\\n            !_ownerships[tokenId].burned;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function _safeMint(address to, uint256 quantity) internal {\\\\r\\\\n        _safeMint(to, quantity, \\\\\\"\\\\\\");\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev Safely mints `quantity` tokens and transfers them to `to`.\\\\r\\\\n     *\\\\r\\\\n     * Requirements:\\\\r\\\\n     *\\\\r\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called for each safe transfer.\\\\r\\\\n     * - `quantity` must be greater than 0.\\\\r\\\\n     *\\\\r\\\\n     * Emits a {Transfer} event.\\\\r\\\\n     */\\\\r\\\\n    function _safeMint(\\\\r\\\\n        address to,\\\\r\\\\n        uint256 quantity,\\\\r\\\\n        bytes memory _data\\\\r\\\\n    ) internal {\\\\r\\\\n        _mint(to, quantity, _data, true);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev Mints `quantity` tokens and transfers them to `to`.\\\\r\\\\n     *\\\\r\\\\n     * Requirements:\\\\r\\\\n     *\\\\r\\\\n     * - `to` cannot be the zero address.\\\\r\\\\n     * - `quantity` must be greater than 0.\\\\r\\\\n     *\\\\r\\\\n     * Emits a {Transfer} event.\\\\r\\\\n     */\\\\r\\\\n    function _mint(\\\\r\\\\n        address to,\\\\r\\\\n        uint256 quantity,\\\\r\\\\n        bytes memory _data,\\\\r\\\\n        bool safe\\\\r\\\\n    ) internal {\\\\r\\\\n        uint256 startTokenId = _currentIndex;\\\\r\\\\n        if (to == address(0)) revert MintToZeroAddress();\\\\r\\\\n        if (quantity == 0) revert MintZeroQuantity();\\\\r\\\\n\\\\r\\\\n        _beforeTokenTransfers(address(0), to, startTokenId, quantity);\\\\r\\\\n\\\\r\\\\n        // Overflows are incredibly unrealistic.\\\\r\\\\n        // balance or numberMinted overflow if current value of either + quantity > 1.8e19 (2**64) - 1\\\\r\\\\n        // updatedIndex overflows if _currentIndex + quantity > 1.2e77 (2**256) - 1\\\\r\\\\n        unchecked {\\\\r\\\\n            _addressData[to].balance += uint64(quantity);\\\\r\\\\n            _addressData[to].numberMinted += uint64(quantity);\\\\r\\\\n\\\\r\\\\n            _ownerships[startTokenId].addr = to;\\\\r\\\\n            _ownerships[startTokenId].startTimestamp = uint64(block.timestamp);\\\\r\\\\n\\\\r\\\\n            uint256 updatedIndex = startTokenId;\\\\r\\\\n            uint256 end = updatedIndex + quantity;\\\\r\\\\n\\\\r\\\\n            if (safe && to.isContract()) {\\\\r\\\\n                do {\\\\r\\\\n                    emit Transfer(address(0), to, updatedIndex);\\\\r\\\\n                    if (\\\\r\\\\n                        !_checkContractOnERC721Received(\\\\r\\\\n                            address(0),\\\\r\\\\n                            to,\\\\r\\\\n                            updatedIndex++,\\\\r\\\\n                            _data\\\\r\\\\n                        )\\\\r\\\\n                    ) {\\\\r\\\\n                        revert TransferToNonERC721ReceiverImplementer();\\\\r\\\\n                    }\\\\r\\\\n                } while (updatedIndex != end);\\\\r\\\\n                // Reentrancy protection\\\\r\\\\n                if (_currentIndex != startTokenId) revert();\\\\r\\\\n            } else {\\\\r\\\\n                do {\\\\r\\\\n                    emit Transfer(address(0), to, updatedIndex++);\\\\r\\\\n                } while (updatedIndex != end);\\\\r\\\\n            }\\\\r\\\\n            _currentIndex = updatedIndex;\\\\r\\\\n        }\\\\r\\\\n        _afterTokenTransfers(address(0), to, startTokenId, quantity);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev Transfers `tokenId` from `from` to `to`.\\\\r\\\\n     *\\\\r\\\\n     * Requirements:\\\\r\\\\n     *\\\\r\\\\n     * - `to` cannot be the zero address.\\\\r\\\\n     * - `tokenId` token must be owned by `from`.\\\\r\\\\n     *\\\\r\\\\n     * Emits a {Transfer} event.\\\\r\\\\n     */\\\\r\\\\n    function _transfer(\\\\r\\\\n        address from,\\\\r\\\\n        address to,\\\\r\\\\n        uint256 tokenId\\\\r\\\\n    ) private {\\\\r\\\\n        TokenOwnership memory prevOwnership = ownershipOf(tokenId);\\\\r\\\\n\\\\r\\\\n        bool isApprovedOrOwner = (_msgSender() == prevOwnership.addr ||\\\\r\\\\n            isApprovedForAll(prevOwnership.addr, _msgSender()) ||\\\\r\\\\n            getApproved(tokenId) == _msgSender());\\\\r\\\\n\\\\r\\\\n        if (!isApprovedOrOwner) revert TransferCallerNotOwnerNorApproved();\\\\r\\\\n        if (prevOwnership.addr != from) revert TransferFromIncorrectOwner();\\\\r\\\\n        if (to == address(0)) revert TransferToZeroAddress();\\\\r\\\\n\\\\r\\\\n        _beforeTokenTransfers(from, to, tokenId, 1);\\\\r\\\\n\\\\r\\\\n        // Clear approvals from the previous owner\\\\r\\\\n        _approve(address(0), tokenId, prevOwnership.addr);\\\\r\\\\n\\\\r\\\\n        // Underflow of the sender\'s balance is impossible because we check for\\\\r\\\\n        // ownership above and the recipient\'s balance can\'t realistically overflow.\\\\r\\\\n        // Counter overflow is incredibly unrealistic as tokenId would have to be 2**256.\\\\r\\\\n        unchecked {\\\\r\\\\n            _addressData[from].balance -= 1;\\\\r\\\\n            _addressData[to].balance += 1;\\\\r\\\\n\\\\r\\\\n            _ownerships[tokenId].addr = to;\\\\r\\\\n            _ownerships[tokenId].startTimestamp = uint64(block.timestamp);\\\\r\\\\n\\\\r\\\\n            // If the ownership slot of tokenId+1 is not explicitly set, that means the transfer initiator owns it.\\\\r\\\\n            // Set the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.\\\\r\\\\n            uint256 nextTokenId = tokenId + 1;\\\\r\\\\n            if (_ownerships[nextTokenId].addr == address(0)) {\\\\r\\\\n                // This will suffice for checking _exists(nextTokenId),\\\\r\\\\n                // as a burned slot cannot contain the zero address.\\\\r\\\\n                if (nextTokenId < _currentIndex) {\\\\r\\\\n                    _ownerships[nextTokenId].addr = prevOwnership.addr;\\\\r\\\\n                    _ownerships[nextTokenId].startTimestamp = prevOwnership\\\\r\\\\n                        .startTimestamp;\\\\r\\\\n                }\\\\r\\\\n            }\\\\r\\\\n        }\\\\r\\\\n\\\\r\\\\n        emit Transfer(from, to, tokenId);\\\\r\\\\n        _afterTokenTransfers(from, to, tokenId, 1);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev Destroys `tokenId`.\\\\r\\\\n     * The approval is cleared when the token is burned.\\\\r\\\\n     *\\\\r\\\\n     * Requirements:\\\\r\\\\n     *\\\\r\\\\n     * - `tokenId` must exist.\\\\r\\\\n     *\\\\r\\\\n     * Emits a {Transfer} event.\\\\r\\\\n     */\\\\r\\\\n    function _burn(uint256 tokenId) internal virtual {\\\\r\\\\n        TokenOwnership memory prevOwnership = ownershipOf(tokenId);\\\\r\\\\n\\\\r\\\\n        _beforeTokenTransfers(prevOwnership.addr, address(0), tokenId, 1);\\\\r\\\\n\\\\r\\\\n        // Clear approvals from the previous owner\\\\r\\\\n        _approve(address(0), tokenId, prevOwnership.addr);\\\\r\\\\n\\\\r\\\\n        // Underflow of the sender\'s balance is impossible because we check for\\\\r\\\\n        // ownership above and the recipient\'s balance can\'t realistically overflow.\\\\r\\\\n        // Counter overflow is incredibly unrealistic as tokenId would have to be 2**256.\\\\r\\\\n        unchecked {\\\\r\\\\n            _addressData[prevOwnership.addr].balance -= 1;\\\\r\\\\n            _addressData[prevOwnership.addr].numberBurned += 1;\\\\r\\\\n\\\\r\\\\n            // Keep track of who burned the token, and the timestamp of burning.\\\\r\\\\n            _ownerships[tokenId].addr = prevOwnership.addr;\\\\r\\\\n            _ownerships[tokenId].startTimestamp = uint64(block.timestamp);\\\\r\\\\n            _ownerships[tokenId].burned = true;\\\\r\\\\n\\\\r\\\\n            // If the ownership slot of tokenId+1 is not explicitly set, that means the burn initiator owns it.\\\\r\\\\n            // Set the slot of tokenId+1 explicitly in storage to maintain correctness for ownerOf(tokenId+1) calls.\\\\r\\\\n            uint256 nextTokenId = tokenId + 1;\\\\r\\\\n            if (_ownerships[nextTokenId].addr == address(0)) {\\\\r\\\\n                // This will suffice for checking _exists(nextTokenId),\\\\r\\\\n                // as a burned slot cannot contain the zero address.\\\\r\\\\n                if (nextTokenId < _currentIndex) {\\\\r\\\\n                    _ownerships[nextTokenId].addr = prevOwnership.addr;\\\\r\\\\n                    _ownerships[nextTokenId].startTimestamp = prevOwnership\\\\r\\\\n                        .startTimestamp;\\\\r\\\\n                }\\\\r\\\\n            }\\\\r\\\\n        }\\\\r\\\\n\\\\r\\\\n        emit Transfer(prevOwnership.addr, address(0), tokenId);\\\\r\\\\n        _afterTokenTransfers(prevOwnership.addr, address(0), tokenId, 1);\\\\r\\\\n\\\\r\\\\n        // Overflow not possible, as _burnCounter cannot be exceed _currentIndex times.\\\\r\\\\n        unchecked {\\\\r\\\\n            _burnCounter++;\\\\r\\\\n        }\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev Approve `to` to operate on `tokenId`\\\\r\\\\n     *\\\\r\\\\n     * Emits a {Approval} event.\\\\r\\\\n     */\\\\r\\\\n    function _approve(\\\\r\\\\n        address to,\\\\r\\\\n        uint256 tokenId,\\\\r\\\\n        address owner\\\\r\\\\n    ) private {\\\\r\\\\n        _tokenApprovals[tokenId] = to;\\\\r\\\\n        emit Approval(owner, to, tokenId);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev Internal function to invoke {IERC721Receiver-onERC721Received} on a target contract.\\\\r\\\\n     *\\\\r\\\\n     * @param from address representing the previous owner of the given token ID\\\\r\\\\n     * @param to target address that will receive the tokens\\\\r\\\\n     * @param tokenId uint256 ID of the token to be transferred\\\\r\\\\n     * @param _data bytes optional data to send along with the call\\\\r\\\\n     * @return bool whether the call correctly returned the expected magic value\\\\r\\\\n     */\\\\r\\\\n    function _checkContractOnERC721Received(\\\\r\\\\n        address from,\\\\r\\\\n        address to,\\\\r\\\\n        uint256 tokenId,\\\\r\\\\n        bytes memory _data\\\\r\\\\n    ) private returns (bool) {\\\\r\\\\n        try\\\\r\\\\n            IERC721Receiver(to).onERC721Received(\\\\r\\\\n                _msgSender(),\\\\r\\\\n                from,\\\\r\\\\n                tokenId,\\\\r\\\\n                _data\\\\r\\\\n            )\\\\r\\\\n        returns (bytes4 retval) {\\\\r\\\\n            return retval == IERC721Receiver(to).onERC721Received.selector;\\\\r\\\\n        } catch (bytes memory reason) {\\\\r\\\\n            if (reason.length == 0) {\\\\r\\\\n                revert TransferToNonERC721ReceiverImplementer();\\\\r\\\\n            } else {\\\\r\\\\n                assembly {\\\\r\\\\n                    revert(add(32, reason), mload(reason))\\\\r\\\\n                }\\\\r\\\\n            }\\\\r\\\\n        }\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev Hook that is called before a set of serially-ordered token ids are about to be transferred. This includes minting.\\\\r\\\\n     * And also called before burning one token.\\\\r\\\\n     *\\\\r\\\\n     * startTokenId - the first token id to be transferred\\\\r\\\\n     * quantity - the amount to be transferred\\\\r\\\\n     *\\\\r\\\\n     * Calling conditions:\\\\r\\\\n     *\\\\r\\\\n     * - When `from` and `to` are both non-zero, `from`\'s `tokenId` will be\\\\r\\\\n     * transferred to `to`.\\\\r\\\\n     * - When `from` is zero, `tokenId` will be minted for `to`.\\\\r\\\\n     * - When `to` is zero, `tokenId` will be burned by `from`.\\\\r\\\\n     * - `from` and `to` are never both zero.\\\\r\\\\n     */\\\\r\\\\n    function _beforeTokenTransfers(\\\\r\\\\n        address from,\\\\r\\\\n        address to,\\\\r\\\\n        uint256 startTokenId,\\\\r\\\\n        uint256 quantity\\\\r\\\\n    ) internal virtual {}\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * @dev Hook that is called after a set of serially-ordered token ids have been transferred. This includes\\\\r\\\\n     * minting.\\\\r\\\\n     * And also called after one token has been burned.\\\\r\\\\n     *\\\\r\\\\n     * startTokenId - the first token id to be transferred\\\\r\\\\n     * quantity - the amount to be transferred\\\\r\\\\n     *\\\\r\\\\n     * Calling conditions:\\\\r\\\\n     *\\\\r\\\\n     * - When `from` and `to` are both non-zero, `from`\'s `tokenId` has been\\\\r\\\\n     * transferred to `to`.\\\\r\\\\n     * - When `from` is zero, `tokenId` has been minted for `to`.\\\\r\\\\n     * - When `to` is zero, `tokenId` has been burned by `from`.\\\\r\\\\n     * - `from` and `to` are never both zero.\\\\r\\\\n     */\\\\r\\\\n    function _afterTokenTransfers(\\\\r\\\\n        address from,\\\\r\\\\n        address to,\\\\r\\\\n        uint256 startTokenId,\\\\r\\\\n        uint256 quantity\\\\r\\\\n    ) internal virtual {}\\\\r\\\\n}\\\\r\\\\n\\",\\"keccak256\\":\\"0x5c111dd61e9b7cf4167ae787e59c4b90c5f22252d97a68958bbbad61dd777a45\\",\\"license\\":\\"MIT\\"},\\"contracts/test.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\r\\\\npragma solidity ^0.8.4;\\\\r\\\\n\\\\r\\\\nimport \\\\\\"./ERC721A.sol\\\\\\";\\\\r\\\\nimport \\\\\\"@openzeppelin/contracts/security/ReentrancyGuard.sol\\\\\\";\\\\r\\\\nimport \\\\\\"@openzeppelin/contracts/utils/Strings.sol\\\\\\";\\\\r\\\\nimport \\\\\\"@openzeppelin/contracts/access/Ownable.sol\\\\\\";\\\\r\\\\nimport \\\\\\"@openzeppelin/contracts/utils/cryptography/MerkleProof.sol\\\\\\";\\\\r\\\\nimport \\\\\\"@openzeppelin/contracts/utils/cryptography/ECDSA.sol\\\\\\";\\\\r\\\\n\\\\r\\\\n/**\\\\r\\\\n\\\\r\\\\n                   .+------+     +------+     +------+     +------+     +------+.\\\\r\\\\n                 .\' |    .\'|    /|     /|     |      |     |\\\\\\\\     |\\\\\\\\    |`.    | `.\\\\r\\\\n                +---+--+\'  |   +-+----+ |     +------+     | +----+-+   |  `+--+---+\\\\r\\\\n                |   |  |   |   | |    | |     |      |     | |    | |   |   |  |   |\\\\r\\\\n                |  ,+--+---+   | +----+-+     +------+     +-+----+ |   +---+--+   |\\\\r\\\\n                |.\'    | .\'    |/     |/      |      |      \\\\\\\\|     \\\\\\\\|    `. |   `. |\\\\r\\\\n                +------+\'      +------+       +------+       +------+      `+------+\\\\r\\\\n\\\\r\\\\n          .----------------.  .----------------.  .----------------.  .----------------. \\\\r\\\\n         | .--------------. || .--------------. || .--------------. || .--------------. |\\\\r\\\\n         | |     _____    | || | _____  _____ | || |    _______   | || |  _________   | |\\\\r\\\\n         | |    |_   _|   | || ||_   _||_   _|| || |   /  ___  |  | || | |  _   _  |  | |\\\\r\\\\n         | |      | |     | || |  | |    | |  | || |  |  (__ \\\\\\\\_|  | || | |_/ | | \\\\\\\\_|  | |\\\\r\\\\n         | |   _  | |     | || |  | \'    \' |  | || |   \'.___`-.   | || |     | |      | |\\\\r\\\\n         | |  | |_\' |     | || |   \\\\\\\\ `--\' /   | || |  |`\\\\\\\\____) |  | || |    _| |_     | |\\\\r\\\\n         | |  `.___.\'     | || |    `.__.\'    | || |  |_______.\'  | || |   |_____|    | |\\\\r\\\\n         | |              | || |              | || |              | || |              | |\\\\r\\\\n         | \'--------------\' || \'--------------\' || \'--------------\' || \'--------------\' |\\\\r\\\\n         \'----------------\'  \'----------------\'  \'----------------\'  \'----------------\' \\\\r\\\\n\\\\r\\\\n .----------------.  .----------------.  .----------------.  .----------------.  .----------------. \\\\r\\\\n| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |\\\\r\\\\n| |     ______   | || | _____  _____ | || |   ______     | || |  _________   | || |    _______   | |\\\\r\\\\n| |   .\' ___  |  | || ||_   _||_   _|| || |  |_   _ \\\\\\\\    | || | |_   ___  |  | || |   /  ___  |  | |\\\\r\\\\n| |  / .\'   \\\\\\\\_|  | || |  | |    | |  | || |    | |_) |   | || |   | |_  \\\\\\\\_|  | || |  |  (__ \\\\\\\\_|  | |\\\\r\\\\n| |  | |         | || |  | \'    \' |  | || |    |  __\'.   | || |   |  _|  _   | || |   \'.___`-.   | |\\\\r\\\\n| |  \\\\\\\\ `.___.\'\\\\\\\\  | || |   \\\\\\\\ `--\' /   | || |   _| |__) |  | || |  _| |___/ |  | || |  |`\\\\\\\\____) |  | |\\\\r\\\\n| |   `._____.\'  | || |    `.__.\'    | || |  |_______/   | || | |_________|  | || |  |_______.\'  | |\\\\r\\\\n| |              | || |              | || |              | || |              | || |              | |\\\\r\\\\n| \'--------------\' || \'--------------\' || \'--------------\' || \'--------------\' || \'--------------\' |\\\\r\\\\n \'----------------\'  \'----------------\'  \'----------------\'  \'----------------\'  \'----------------\' \\\\r\\\\n\\\\r\\\\n\\\\r\\\\n */\\\\r\\\\n\\\\r\\\\ncontract JustCubes is ERC721A, Ownable, ReentrancyGuard {\\\\r\\\\n    using ECDSA for bytes32;\\\\r\\\\n\\\\r\\\\n    mapping(address => uint256) public numberOfWLMintsOnAddress;\\\\r\\\\n    mapping(address => uint256) public totalClaimed;\\\\r\\\\n    mapping(address => uint256) public airdropList;\\\\r\\\\n\\\\r\\\\n    //Sale flags\\\\r\\\\n    bool public OGsaleActive = false;\\\\r\\\\n    bool public WLsaleActive = false;\\\\r\\\\n    bool public saleActive = true;\\\\r\\\\n    bool public isFreeClaimActive = false;\\\\r\\\\n\\\\r\\\\n    //Mint limits\\\\r\\\\n    uint256 public immutable ADDRESS_MAX_MINTS = 5;\\\\r\\\\n    uint256 public immutable ADDRESS_WL_MAX_MINTS = 2;\\\\r\\\\n    uint256 public immutable PUBLIC_MINT_PER_TX = 2;\\\\r\\\\n\\\\r\\\\n    //Supply\\\\r\\\\n    uint256 public maxSupply = 8888;\\\\r\\\\n    uint256 public reservedSupply = 200;\\\\r\\\\n\\\\r\\\\n    //Pricing\\\\r\\\\n    uint256 public OGprice = 0.045 ether;\\\\r\\\\n    uint256 public WLprice = 0.085 ether;\\\\r\\\\n    uint256 public price = 0.09 ether;\\\\r\\\\n\\\\r\\\\n    // Sign Hash\\\\r\\\\n    address private _signer = 0xdeadc0DEDADd13535dC04A830FD313E40385B765;\\\\r\\\\n\\\\r\\\\n    //Pre-reveal IPFS link\\\\r\\\\n    string private _baseTokenURI = \\\\\\"\\\\\\";\\\\r\\\\n\\\\r\\\\n    //Merkle roots\\\\r\\\\n    bytes32 public OGMerkleRoot;\\\\r\\\\n    bytes32 public WLMerkleRoot;\\\\r\\\\n    bytes32 private freeClaim;\\\\r\\\\n\\\\r\\\\n    //Payable addresses\\\\r\\\\n    address private constant AL_ADDRESS =\\\\r\\\\n        0x4Ee72eab8321Fb265Fd9fE6eeFee14D0a1A1906C;\\\\r\\\\n    address private constant CR_ADDRESS =\\\\r\\\\n        0x022c875cda743a687a2669f5515408D7bC6aF755;\\\\r\\\\n    address private constant AD_ADDRESS =\\\\r\\\\n        0xa3712A3C873E06026cbCBE14727Bf6010F671738;\\\\r\\\\n    address private constant PROJ_ADDRESS =\\\\r\\\\n        0x11b2E4Ea2e759da33fB6F35bD4031F6E40046D26;\\\\r\\\\n    address private constant AA_ADDRESS =\\\\r\\\\n        0x5f208bD3AD1e6F67bd68833e04efc8263A51b467;\\\\r\\\\n    address private constant DEV_ADDRESS =\\\\r\\\\n        0xcEB5E5c55bB585CFaEF92aeB1609C4384Ec1890e;\\\\r\\\\n    address private constant SKIN_ADDRESS =\\\\r\\\\n        0xAc839AaE0afc40131fCCaA1FCe5C53e6b13AbA8B;\\\\r\\\\n    address private constant MA_ADDRESS =\\\\r\\\\n        0x29AE4c46dAE9cb298A2398AAb348769426900903;\\\\r\\\\n    address private constant LE_ADDRESS =\\\\r\\\\n        0x30e37464499Deb7681030eCcB33793E33e833402;\\\\r\\\\n    address private constant KY_ADDRESS =\\\\r\\\\n        0x927705920d0E697559718A16E283C458E75975f4;\\\\r\\\\n    address private constant BR_ADDRESS =\\\\r\\\\n        0x5D8906c28a43bD2E99680b7552963d196602bE84;\\\\r\\\\n    address private constant RY_ADDRESS =\\\\r\\\\n        0x55E29AdA6fA377D75cAAB61e391aa5FC188960b2;\\\\r\\\\n    address private constant ZA_ADDRESS =\\\\r\\\\n        0x2b878dcb33490FE671ADf704c6388aBB569F4E18;\\\\r\\\\n    address private constant ML_ADDRESS =\\\\r\\\\n        0xFD43A900AC4380Fd7e39775602B5EE2F341F8Dfe;\\\\r\\\\n\\\\r\\\\n    event Claimed(uint256 count, address sender);\\\\r\\\\n    event FreeClaimActive(bool live);\\\\r\\\\n    event ClaimAirdrop(uint256 count, address sender);\\\\r\\\\n    event Airdrop(uint256 count, address sender);\\\\r\\\\n\\\\r\\\\n    constructor() ERC721A(\\\\\\"JustCubes\\\\\\", \\\\\\"CUBE\\\\\\") {}\\\\r\\\\n\\\\r\\\\n    modifier callerIsUser() {\\\\r\\\\n        require(tx.origin == msg.sender, \\\\\\"The caller is another contract\\\\\\");\\\\r\\\\n        _;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    modifier onlySignedTx(uint256 quantity_, bytes calldata signature_) {\\\\r\\\\n        require(\\\\r\\\\n            keccak256(abi.encodePacked(msg.sender, quantity_))\\\\r\\\\n                .toEthSignedMessageHash()\\\\r\\\\n                .recover(signature_) == _signer,\\\\r\\\\n            \\\\\\"Signature does not correspond\\\\\\"\\\\r\\\\n        );\\\\r\\\\n\\\\r\\\\n        _;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * OG mint\\\\r\\\\n     */\\\\r\\\\n    function mintOGSale(uint256 numberOfMints, bytes32[] calldata _merkleProof)\\\\r\\\\n        external\\\\r\\\\n        payable\\\\r\\\\n    {\\\\r\\\\n        require(OGsaleActive, \\\\\\"Presale must be active to mint\\\\\\");\\\\r\\\\n\\\\r\\\\n        require(\\\\r\\\\n            MerkleProof.verify(\\\\r\\\\n                _merkleProof,\\\\r\\\\n                OGMerkleRoot,\\\\r\\\\n                keccak256(abi.encodePacked(msg.sender))\\\\r\\\\n            ),\\\\r\\\\n            \\\\\\"Invalid proof - Caller not whitelisted\\\\\\"\\\\r\\\\n        );\\\\r\\\\n\\\\r\\\\n        require(numberOfMints > 0, \\\\\\"Sender is trying to mint none\\\\\\");\\\\r\\\\n        require(\\\\r\\\\n            numberMinted(msg.sender) + numberOfMints <= ADDRESS_MAX_MINTS,\\\\r\\\\n            \\\\\\"Sender is trying to mint more than allocated tokens\\\\\\"\\\\r\\\\n        );\\\\r\\\\n        require(\\\\r\\\\n            numberOfWLMintsOnAddress[msg.sender] + numberOfMints <=\\\\r\\\\n                ADDRESS_WL_MAX_MINTS,\\\\r\\\\n            \\\\\\"Sender is trying to mint more than their whitelist amount\\\\\\"\\\\r\\\\n        );\\\\r\\\\n        require(\\\\r\\\\n            totalSupply() + numberOfMints <= maxSupply,\\\\r\\\\n            \\\\\\"This would exceed the max number of mints\\\\\\"\\\\r\\\\n        );\\\\r\\\\n        require(\\\\r\\\\n            msg.value >= numberOfMints * OGprice,\\\\r\\\\n            \\\\\\"Not enough ether to mint\\\\\\"\\\\r\\\\n        );\\\\r\\\\n\\\\r\\\\n        numberOfWLMintsOnAddress[msg.sender] += numberOfMints;\\\\r\\\\n        _safeMint(msg.sender, numberOfMints);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * Whitelist mint\\\\r\\\\n     */\\\\r\\\\n    function mintWLSale(uint256 numberOfMints, bytes32[] calldata _merkleProof)\\\\r\\\\n        external\\\\r\\\\n        payable\\\\r\\\\n    {\\\\r\\\\n        require(WLsaleActive, \\\\\\"Sale must be active to mint\\\\\\");\\\\r\\\\n\\\\r\\\\n        require(\\\\r\\\\n            MerkleProof.verify(\\\\r\\\\n                _merkleProof,\\\\r\\\\n                WLMerkleRoot,\\\\r\\\\n                keccak256(abi.encodePacked(msg.sender))\\\\r\\\\n            ),\\\\r\\\\n            \\\\\\"Invalid proof - Caller not whitelisted\\\\\\"\\\\r\\\\n        );\\\\r\\\\n\\\\r\\\\n        require(numberOfMints > 0, \\\\\\"Sender is trying to mint none\\\\\\");\\\\r\\\\n        require(\\\\r\\\\n            numberMinted(msg.sender) + numberOfMints <= ADDRESS_MAX_MINTS,\\\\r\\\\n            \\\\\\"Sender is trying to mint more than allocated tokens\\\\\\"\\\\r\\\\n        );\\\\r\\\\n        require(\\\\r\\\\n            numberOfWLMintsOnAddress[msg.sender] + numberOfMints <=\\\\r\\\\n                ADDRESS_WL_MAX_MINTS,\\\\r\\\\n            \\\\\\"Sender is trying to mint more than their whitelist amount\\\\\\"\\\\r\\\\n        );\\\\r\\\\n        require(\\\\r\\\\n            totalSupply() + numberOfMints <= maxSupply,\\\\r\\\\n            \\\\\\"Mint would exceed max supply of mints\\\\\\"\\\\r\\\\n        );\\\\r\\\\n        require(\\\\r\\\\n            msg.value >= numberOfMints * WLprice,\\\\r\\\\n            \\\\\\"Amount of ether is not enough\\\\\\"\\\\r\\\\n        );\\\\r\\\\n\\\\r\\\\n        numberOfWLMintsOnAddress[msg.sender] += numberOfMints;\\\\r\\\\n        _safeMint(msg.sender, numberOfMints);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function claim(uint256 count, bytes32[] calldata proof)\\\\r\\\\n        external\\\\r\\\\n        payable\\\\r\\\\n        nonReentrant\\\\r\\\\n    {\\\\r\\\\n        require(isFreeClaimActive, \\\\\\"Not Live\\\\\\");\\\\r\\\\n        require(_claimVerify(_claimLeaf(msg.sender, count), proof), \\\\\\"Invalid\\\\\\");\\\\r\\\\n        require(totalClaimed[msg.sender] != count, \\\\\\"Already claimed\\\\\\");\\\\r\\\\n\\\\r\\\\n        uint256 current = totalSupply();\\\\r\\\\n        require(current + count <= maxSupply, \\\\\\"Sold out\\\\\\");\\\\r\\\\n        _safeMint(msg.sender, count);\\\\r\\\\n        totalClaimed[msg.sender] += count;\\\\r\\\\n        emit Claimed(count, msg.sender);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function viewClaimed(address account) external view returns (uint256) {\\\\r\\\\n        return totalClaimed[account];\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function toggleFreeClaim() external onlyOwner {\\\\r\\\\n        isFreeClaimActive = !isFreeClaimActive;\\\\r\\\\n        emit FreeClaimActive(isFreeClaimActive);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function _claimLeaf(address account, uint256 count)\\\\r\\\\n        internal\\\\r\\\\n        pure\\\\r\\\\n        returns (bytes32)\\\\r\\\\n    {\\\\r\\\\n        return keccak256(abi.encodePacked(count, account));\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function _claimVerify(bytes32 leaf, bytes32[] memory proof)\\\\r\\\\n        internal\\\\r\\\\n        view\\\\r\\\\n        returns (bool)\\\\r\\\\n    {\\\\r\\\\n        return MerkleProof.verify(proof, freeClaim, leaf);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function setFreeClaimRoot(bytes32 _root) external onlyOwner {\\\\r\\\\n        freeClaim = _root;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function claimAirdrop(uint256 count) external payable nonReentrant {\\\\r\\\\n        require(airdropList[msg.sender] >= count, \\\\\\"Exceeds airdrop amount\\\\\\");\\\\r\\\\n\\\\r\\\\n        uint256 current = totalSupply();\\\\r\\\\n        require(current + count <= maxSupply, \\\\\\"Sold out\\\\\\");\\\\r\\\\n        airdropList[msg.sender] -= count;\\\\r\\\\n        _safeMint(msg.sender, count);\\\\r\\\\n        emit ClaimAirdrop(count, msg.sender);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function addAirdrop(address user, uint256 amount) external onlyOwner {\\\\r\\\\n        airdropList[user] += amount;\\\\r\\\\n        emit Airdrop(amount, user);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * Public mint\\\\r\\\\n     */\\\\r\\\\n    function mint(uint256 numberOfMints) external payable callerIsUser {\\\\r\\\\n        require(saleActive, \\\\\\"Sale must be active to mint\\\\\\");\\\\r\\\\n        require(numberOfMints > 0, \\\\\\"Sender is trying to mint none\\\\\\");\\\\r\\\\n        require(\\\\r\\\\n            numberOfMints <= PUBLIC_MINT_PER_TX,\\\\r\\\\n            \\\\\\"Sender is trying to mint too many in a single transaction\\\\\\"\\\\r\\\\n        );\\\\r\\\\n        require(\\\\r\\\\n            numberMinted(msg.sender) + numberOfMints <= ADDRESS_MAX_MINTS,\\\\r\\\\n            \\\\\\"Sender is trying to mint more than allocated tokens\\\\\\"\\\\r\\\\n        );\\\\r\\\\n        require(\\\\r\\\\n            totalSupply() + numberOfMints <= maxSupply,\\\\r\\\\n            \\\\\\"Mint would exceed max supply of mints\\\\\\"\\\\r\\\\n        );\\\\r\\\\n        require(\\\\r\\\\n            msg.value >= numberOfMints * price,\\\\r\\\\n            \\\\\\"Amount of ether is not enough\\\\\\"\\\\r\\\\n        );\\\\r\\\\n\\\\r\\\\n        _safeMint(msg.sender, numberOfMints);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    /**\\\\r\\\\n     * Reserve mint for founders\\\\r\\\\n     */\\\\r\\\\n    function reserveMint(uint256 quantity) external onlyOwner {\\\\r\\\\n        require(\\\\r\\\\n            totalSupply() + quantity <= reservedSupply,\\\\r\\\\n            \\\\\\"Too many minted to public to perform dev mint\\\\\\"\\\\r\\\\n        );\\\\r\\\\n        require(\\\\r\\\\n            quantity % ADDRESS_MAX_MINTS == 0,\\\\r\\\\n            \\\\\\"Must only mint a multiple of the maximum address mints\\\\\\"\\\\r\\\\n        );\\\\r\\\\n\\\\r\\\\n        uint256 numChunks = quantity / ADDRESS_MAX_MINTS;\\\\r\\\\n\\\\r\\\\n        for (uint256 i = 0; i < numChunks; i++) {\\\\r\\\\n            _safeMint(msg.sender, ADDRESS_MAX_MINTS);\\\\r\\\\n        }\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function toggleOGSale() external onlyOwner {\\\\r\\\\n        OGsaleActive = !OGsaleActive;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function toggleWLSale() external onlyOwner {\\\\r\\\\n        WLsaleActive = !WLsaleActive;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function toggleSale() external onlyOwner {\\\\r\\\\n        saleActive = !saleActive;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function setPrice(uint256 newPrice) external onlyOwner {\\\\r\\\\n        price = newPrice;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function setOGMerkleRoot(bytes32 newMerkleRoot) external onlyOwner {\\\\r\\\\n        OGMerkleRoot = newMerkleRoot;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function setWLMerkleRoot(bytes32 newMerkleRoot) external onlyOwner {\\\\r\\\\n        WLMerkleRoot = newMerkleRoot;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function setSupply(uint256 newSupply) external onlyOwner {\\\\r\\\\n        require(newSupply < maxSupply, \\\\\\"Cannot increase supply of tokens\\\\\\");\\\\r\\\\n        maxSupply = newSupply;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function withdraw() external onlyOwner nonReentrant {\\\\r\\\\n        require(address(this).balance > 0, \\\\\\"No balance to withdraw\\\\\\");\\\\r\\\\n        uint256 contractBalance = address(this).balance;\\\\r\\\\n\\\\r\\\\n        _withdraw(AL_ADDRESS, (contractBalance * 19) / 100);\\\\r\\\\n        _withdraw(CR_ADDRESS, (contractBalance * 19) / 100);\\\\r\\\\n        _withdraw(AD_ADDRESS, (contractBalance * 19) / 100);\\\\r\\\\n        _withdraw(PROJ_ADDRESS, (contractBalance * 20) / 100);\\\\r\\\\n        _withdraw(AA_ADDRESS, (contractBalance * 5) / 100);\\\\r\\\\n        _withdraw(DEV_ADDRESS, (contractBalance * 9) / 100);\\\\r\\\\n        _withdraw(SKIN_ADDRESS, (contractBalance * 3) / 100);\\\\r\\\\n        _withdraw(MA_ADDRESS, (contractBalance * 1) / 100);\\\\r\\\\n        _withdraw(LE_ADDRESS, (contractBalance * 1) / 100);\\\\r\\\\n        _withdraw(KY_ADDRESS, (contractBalance * 5) / 1000);\\\\r\\\\n        _withdraw(BR_ADDRESS, (contractBalance * 5) / 1000);\\\\r\\\\n        _withdraw(RY_ADDRESS, (contractBalance * 1) / 100);\\\\r\\\\n        _withdraw(ZA_ADDRESS, (contractBalance * 1) / 100);\\\\r\\\\n        _withdraw(ML_ADDRESS, (contractBalance * 1) / 100);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function _withdraw(address _address, uint256 _amount) private {\\\\r\\\\n        (bool success, ) = _address.call{value: _amount}(\\\\\\"\\\\\\");\\\\r\\\\n        require(success, \\\\\\"Transfer failed.\\\\\\");\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function _baseURI() internal view virtual override returns (string memory) {\\\\r\\\\n        return _baseTokenURI;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function setBaseURI(string calldata baseURI) external onlyOwner {\\\\r\\\\n        _baseTokenURI = baseURI;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function numberMinted(address owner) public view returns (uint256) {\\\\r\\\\n        return _numberMinted(owner);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function tokenIdOfOwner(address _owner)\\\\r\\\\n        external\\\\r\\\\n        view\\\\r\\\\n        returns (uint256[] memory)\\\\r\\\\n    {\\\\r\\\\n        uint256 tokenCount = totalSupply();\\\\r\\\\n\\\\r\\\\n        uint256[] memory tokensId = new uint256[](tokenCount);\\\\r\\\\n        uint256 arrayIndex;\\\\r\\\\n        for (uint256 i; i < tokenCount; i++) {\\\\r\\\\n            TokenOwnership memory owner = ownershipOf(i);\\\\r\\\\n            if (owner.addr == _owner) {\\\\r\\\\n                tokensId[arrayIndex] = i;\\\\r\\\\n                arrayIndex++;\\\\r\\\\n            }\\\\r\\\\n        }\\\\r\\\\n        return tokensId;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function getOwnershipData(uint256 tokenId)\\\\r\\\\n        external\\\\r\\\\n        view\\\\r\\\\n        returns (TokenOwnership memory)\\\\r\\\\n    {\\\\r\\\\n        return ownershipOf(tokenId);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function setProvenance(address _new) external onlyOwner {\\\\r\\\\n        _signer = _new;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function emergencyWithdraw() external onlyOwner {\\\\r\\\\n        payable(owner()).transfer(address(this).balance);\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function changeSupplyLimit(uint256 _new) external onlyOwner {\\\\r\\\\n        maxSupply = _new;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function setMintPrice(uint256 _new) external onlyOwner {\\\\r\\\\n        price = _new;\\\\r\\\\n    }\\\\r\\\\n\\\\r\\\\n    function _verifyWhitelist(address _user, bytes32[] calldata _merkleProof)\\\\r\\\\n        internal\\\\r\\\\n        view\\\\r\\\\n        returns (bool)\\\\r\\\\n    {\\\\r\\\\n        bytes32 leaf = keccak256(abi.encodePacked(_user));\\\\r\\\\n        return MerkleProof.verify(_merkleProof, WLMerkleRoot, leaf);\\\\r\\\\n    }\\\\r\\\\n}\\\\r\\\\n\\",\\"keccak256\\":\\"0xb986af9d7391d448856d4249c3b9ce31c794b0757caf4bf6fa38698c962ba05f\\",\\"license\\":\\"MIT\\"}},\\"version\\":1}","bytecode":"0x600d805463ffffffff1916620100001790556005608052600260a081905260c0526122b8600e5560c8600f55669fdf42f6e4800060105567012dfb0cb5e8800060115567013fbe85edc90000601255601380546001600160a01b03191673deadc0dedadd13535dc04a830fd313e40385b7651790556101006040819052600060e0819052620000919160149162000172565b503480156200009f57600080fd5b5060408051808201825260098152684a757374437562657360b81b6020808301918252835180850190945260048452634355424560e01b908401528151919291620000ed9160029162000172565b5080516200010390600390602084019062000172565b50506000805550620001153362000120565b600160095562000255565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620001809062000218565b90600052602060002090601f016020900481019282620001a45760008555620001ef565b82601f10620001bf57805160ff1916838001178555620001ef565b82800160010185558215620001ef579182015b82811115620001ef578251825591602001919060010190620001d2565b50620001fd92915062000201565b5090565b5b80821115620001fd576000815560010162000202565b600181811c908216806200022d57607f821691505b602082108114156200024f57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c051613aae620002c4600039600081816106740152611d390152600081816104f50152818161179e01526121ef0152600081816104c101528181610db601528181610e5501528181610e8d015281816116ef01528181611dcf01526121400152613aae6000f3fe6080604052600436106103975760003560e01c80638da5cb5b116101dc578063cd5d4a9011610102578063e30d4440116100a0578063ef5d9ae81161006f578063ef5d9ae814610ac1578063f2fde38b14610aee578063f4a0a528146107aa578063fa53cd3814610b0e57600080fd5b8063e30d444014610a2f578063e397950814610a42578063e985e9c514610a58578063ee46699614610aa157600080fd5b8063d5abeb01116100dc578063d5abeb01146109b7578063da87741b146109cd578063db2e21bc146109fa578063dc33e68114610a0f57600080fd5b8063cd5d4a901461096d578063d44e357314610982578063d57f8279146109a257600080fd5b8063a22cb4651161017a578063b88d4fde11610149578063b88d4fde146108dd578063c4fc4246146108fd578063c556da8e14610917578063c87b56dd1461094d57600080fd5b8063a22cb46514610874578063a3a53ccb14610894578063ae269743146108a7578063aea48328146108c757600080fd5b806395d89b41116101b657806395d89b41146108215780639980018514610836578063a035b1fe1461084b578063a0712d681461086157600080fd5b80638da5cb5b1461078c57806391b7f5ed146107aa5780639231ab2a146107ca57600080fd5b806343d0d356116102c157806363665f2e1161025f5780637d44fd111161022e5780637d44fd111461072b5780637d8966e41461074b57806383df8d8d146107605780638babe7661461077657600080fd5b806363665f2e146106b657806368428a1b146106d657806370a08231146106f6578063715018a61461071657600080fd5b806358cf77fa1161029b57806358cf77fa146106225780635d579a091461064f57806363055127146106625780636352211e1461069657600080fd5b806343d0d356146105bf57806344d19d2b146105ec57806355f804b31461060257600080fd5b806318f34b0f116103395780632f52ebb7116103085780632f52ebb7146105575780633b4c4b251461056a5780633ccfd60b1461058a57806342842e0e1461059f57600080fd5b806318f34b0f146104af578063207e2173146104e357806323b872dd1461051757806325c2c0201461053757600080fd5b8063095ea7b311610375578063095ea7b31461042b5780631342ff4c1461044d578063142109ed1461046d57806318160ddd1461048c57600080fd5b806301ffc9a71461039c57806306fdde03146103d1578063081812fc146103f3575b600080fd5b3480156103a857600080fd5b506103bc6103b73660046136fb565b610b2f565b60405190151581526020015b60405180910390f35b3480156103dd57600080fd5b506103e6610b81565b6040516103c891906138f5565b3480156103ff57600080fd5b5061041361040e3660046136e3565b610c13565b6040516001600160a01b0390911681526020016103c8565b34801561043757600080fd5b5061044b6104463660046136ba565b610c57565b005b34801561045957600080fd5b5061044b6104683660046136e3565b610ce5565b34801561047957600080fd5b50600d546103bc90610100900460ff1681565b34801561049857600080fd5b50600154600054035b6040519081526020016103c8565b3480156104bb57600080fd5b506104a17f000000000000000000000000000000000000000000000000000000000000000081565b3480156104ef57600080fd5b506104a17f000000000000000000000000000000000000000000000000000000000000000081565b34801561052357600080fd5b5061044b610532366004613570565b610ec3565b34801561054357600080fd5b5061044b6105523660046136e3565b610ece565b61044b6105653660046137a0565b610f1b565b34801561057657600080fd5b5061044b6105853660046136e3565b61115b565b34801561059657600080fd5b5061044b6111f9565b3480156105ab57600080fd5b5061044b6105ba366004613570565b611506565b3480156105cb57600080fd5b506104a16105da366004613524565b600a6020526000908152604090205481565b3480156105f857600080fd5b506104a1600f5481565b34801561060e57600080fd5b5061044b61061d366004613733565b611521565b34801561062e57600080fd5b506104a161063d366004613524565b600c6020526000908152604090205481565b61044b61065d3660046137a0565b611575565b34801561066e57600080fd5b506104a17f000000000000000000000000000000000000000000000000000000000000000081565b3480156106a257600080fd5b506104136106b13660046136e3565b61193f565b3480156106c257600080fd5b5061044b6106d13660046136ba565b611951565b3480156106e257600080fd5b50600d546103bc9062010000900460ff1681565b34801561070257600080fd5b506104a1610711366004613524565b611a0b565b34801561072257600080fd5b5061044b611a5a565b34801561073757600080fd5b5061044b6107463660046136e3565b611aae565b34801561075757600080fd5b5061044b611afb565b34801561076c57600080fd5b506104a160155481565b34801561078257600080fd5b506104a160105481565b34801561079857600080fd5b506008546001600160a01b0316610413565b3480156107b657600080fd5b5061044b6107c53660046136e3565b611b62565b3480156107d657600080fd5b506107ea6107e53660046136e3565b611baf565b6040805182516001600160a01b0316815260208084015167ffffffffffffffff1690820152918101511515908201526060016103c8565b34801561082d57600080fd5b506103e6611bd5565b34801561084257600080fd5b5061044b611be4565b34801561085757600080fd5b506104a160125481565b61044b61086f3660046136e3565b611c40565b34801561088057600080fd5b5061044b61088f366004613680565b611f4c565b61044b6108a23660046137a0565b611fe2565b3480156108b357600080fd5b5061044b6108c23660046136e3565b612365565b3480156108d357600080fd5b506104a160165481565b3480156108e957600080fd5b5061044b6108f83660046135ab565b6123b2565b34801561090957600080fd5b50600d546103bc9060ff1681565b34801561092357600080fd5b506104a1610932366004613524565b6001600160a01b03166000908152600b602052604090205490565b34801561095957600080fd5b506103e66109683660046136e3565b612403565b34801561097957600080fd5b5061044b612488565b34801561098e57600080fd5b5061044b61099d3660046136e3565b612536565b3480156109ae57600080fd5b5061044b61257e565b3480156109c357600080fd5b506104a1600e5481565b3480156109d957600080fd5b506109ed6109e8366004613524565b6125e3565b6040516103c891906138b1565b348015610a0657600080fd5b5061044b6126d9565b348015610a1b57600080fd5b506104a1610a2a366004613524565b61275a565b61044b610a3d3660046136e3565b612765565b348015610a4e57600080fd5b506104a160115481565b348015610a6457600080fd5b506103bc610a7336600461353e565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b348015610aad57600080fd5b5061044b610abc366004613524565b6128e4565b348015610acd57600080fd5b506104a1610adc366004613524565b600b6020526000908152604090205481565b348015610afa57600080fd5b5061044b610b09366004613524565b61294e565b348015610b1a57600080fd5b50600d546103bc906301000000900460ff1681565b60006001600160e01b031982166380ac58cd60e01b1480610b6057506001600160e01b03198216635b5e139f60e01b145b80610b7b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b606060028054610b9090613996565b80601f0160208091040260200160405190810160405280929190818152602001828054610bbc90613996565b8015610c095780601f10610bde57610100808354040283529160200191610c09565b820191906000526020600020905b815481529060010190602001808311610bec57829003601f168201915b5050505050905090565b6000610c1e82612a04565b610c3b576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b6000610c628261193f565b9050806001600160a01b0316836001600160a01b03161415610c975760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b03821614801590610cb75750610cb58133610a73565b155b15610cd5576040516367d9dca160e11b815260040160405180910390fd5b610ce0838383612a2f565b505050565b6008546001600160a01b03163314610d325760405162461bcd60e51b81526020600482018190526024820152600080516020613a5983398151915260448201526064015b60405180910390fd5b600f5481610d436001546000540390565b610d4d9190613908565b1115610db15760405162461bcd60e51b815260206004820152602d60248201527f546f6f206d616e79206d696e74656420746f207075626c696320746f2070657260448201526c199bdc9b4819195d881b5a5b9d609a1b6064820152608401610d29565b610ddb7f0000000000000000000000000000000000000000000000000000000000000000826139ec565b15610e4e5760405162461bcd60e51b815260206004820152603660248201527f4d757374206f6e6c79206d696e742061206d756c7469706c65206f662074686560448201527f206d6178696d756d2061646472657373206d696e7473000000000000000000006064820152608401610d29565b6000610e7a7f000000000000000000000000000000000000000000000000000000000000000083613920565b905060005b81811015610ce057610eb1337f0000000000000000000000000000000000000000000000000000000000000000612a8b565b80610ebb816139d1565b915050610e7f565b610ce0838383612aa9565b6008546001600160a01b03163314610f165760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b601555565b60026009541415610f6e5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610d29565b6002600955600d546301000000900460ff16610fb75760405162461bcd60e51b81526020600482015260086024820152674e6f74204c69766560c01b6044820152606401610d29565b610ffd610fc43385612cbf565b838380806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250612d0d92505050565b6110335760405162461bcd60e51b8152602060048201526007602482015266125b9d985b1a5960ca1b6044820152606401610d29565b336000908152600b60205260409020548314156110925760405162461bcd60e51b815260206004820152600f60248201527f416c726561647920636c61696d656400000000000000000000000000000000006044820152606401610d29565b60006110a16001546000540390565b600e549091506110b18583613908565b11156110ea5760405162461bcd60e51b815260206004820152600860248201526714dbdb19081bdd5d60c21b6044820152606401610d29565b6110f43385612a8b565b336000908152600b602052604081208054869290611113908490613908565b9091555050604080518581523360208201527f6aa3eac93d079e5e100b1029be716caa33586c96aa4baac390669fb5c2a21212910160405180910390a1505060016009555050565b6008546001600160a01b031633146111a35760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b600e5481106111f45760405162461bcd60e51b815260206004820181905260248201527f43616e6e6f7420696e63726561736520737570706c79206f6620746f6b656e736044820152606401610d29565b600e55565b6008546001600160a01b031633146112415760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b600260095414156112945760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610d29565b6002600955476112e65760405162461bcd60e51b815260206004820152601660248201527f4e6f2062616c616e636520746f207769746864726177000000000000000000006044820152606401610d29565b4761131b734ee72eab8321fb265fd9fe6eefee14d0a1a1906c606461130c846013613934565b6113169190613920565b612d1c565b61134073022c875cda743a687a2669f5515408d7bc6af755606461130c846013613934565b61136573a3712a3c873e06026cbcbe14727bf6010f671738606461130c846013613934565b61138a7311b2e4ea2e759da33fb6f35bd4031f6e40046d26606461130c846014613934565b6113af735f208bd3ad1e6f67bd68833e04efc8263a51b467606461130c846005613934565b6113d473ceb5e5c55bb585cfaef92aeb1609c4384ec1890e606461130c846009613934565b6113f973ac839aae0afc40131fccaa1fce5c53e6b13aba8b606461130c846003613934565b61141e7329ae4c46dae9cb298a2398aab348769426900903606461130c846001613934565b6114437330e37464499deb7681030eccb33793e33e833402606461130c846001613934565b61146973927705920d0e697559718a16e283c458e75975f46103e861130c846005613934565b61148f735d8906c28a43bd2e99680b7552963d196602be846103e861130c846005613934565b6114b47355e29ada6fa377d75caab61e391aa5fc188960b2606461130c846001613934565b6114d9732b878dcb33490fe671adf704c6388abb569f4e18606461130c846001613934565b6114fe73fd43a900ac4380fd7e39775602b5ee2f341f8dfe606461130c846001613934565b506001600955565b610ce0838383604051806020016040528060008152506123b2565b6008546001600160a01b031633146115695760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b610ce06014838361346f565b600d54610100900460ff166115cc5760405162461bcd60e51b815260206004820152601b60248201527f53616c65206d7573742062652061637469766520746f206d696e7400000000006044820152606401610d29565b611642828280806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506016546040516bffffffffffffffffffffffff193360601b16602082015290925060340190505b60405160208183030381529060405280519060200120612dbf565b61169d5760405162461bcd60e51b815260206004820152602660248201527f496e76616c69642070726f6f66202d2043616c6c6572206e6f742077686974656044820152651b1a5cdd195960d21b6064820152608401610d29565b600083116116ed5760405162461bcd60e51b815260206004820152601d60248201527f53656e64657220697320747279696e6720746f206d696e74206e6f6e650000006044820152606401610d29565b7f0000000000000000000000000000000000000000000000000000000000000000836117183361275a565b6117229190613908565b111561178c5760405162461bcd60e51b815260206004820152603360248201527f53656e64657220697320747279696e6720746f206d696e74206d6f7265207468604482015272616e20616c6c6f636174656420746f6b656e7360681b6064820152608401610d29565b336000908152600a60205260409020547f0000000000000000000000000000000000000000000000000000000000000000906117c9908590613908565b111561183d5760405162461bcd60e51b815260206004820152603960248201527f53656e64657220697320747279696e6720746f206d696e74206d6f726520746860448201527f616e2074686569722077686974656c69737420616d6f756e74000000000000006064820152608401610d29565b600e548361184e6001546000540390565b6118589190613908565b11156118b45760405162461bcd60e51b815260206004820152602560248201527f4d696e7420776f756c6420657863656564206d617820737570706c79206f66206044820152646d696e747360d81b6064820152608401610d29565b6011546118c19084613934565b3410156119105760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206f66206574686572206973206e6f7420656e6f7567680000006044820152606401610d29565b336000908152600a60205260408120805485929061192f908490613908565b90915550610ce090503384612a8b565b600061194a82612dd5565b5192915050565b6008546001600160a01b031633146119995760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b6001600160a01b0382166000908152600c6020526040812080548392906119c1908490613908565b9091555050604080518281526001600160a01b03841660208201527f7871e154ac114554d9482c2356ea08c8934e9907ad45c33ca7c3677f2b157383910160405180910390a15050565b60006001600160a01b038216611a34576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205467ffffffffffffffff1690565b6008546001600160a01b03163314611aa25760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b611aac6000612ef1565b565b6008546001600160a01b03163314611af65760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b601655565b6008546001600160a01b03163314611b435760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b600d805462ff0000198116620100009182900460ff1615909102179055565b6008546001600160a01b03163314611baa5760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b601255565b6040805160608101825260008082526020820181905291810191909152610b7b82612dd5565b606060038054610b9090613996565b6008546001600160a01b03163314611c2c5760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b600d805460ff19811660ff90911615179055565b323314611c8f5760405162461bcd60e51b815260206004820152601e60248201527f5468652063616c6c657220697320616e6f7468657220636f6e747261637400006044820152606401610d29565b600d5462010000900460ff16611ce75760405162461bcd60e51b815260206004820152601b60248201527f53616c65206d7573742062652061637469766520746f206d696e7400000000006044820152606401610d29565b60008111611d375760405162461bcd60e51b815260206004820152601d60248201527f53656e64657220697320747279696e6720746f206d696e74206e6f6e650000006044820152606401610d29565b7f0000000000000000000000000000000000000000000000000000000000000000811115611dcd5760405162461bcd60e51b815260206004820152603960248201527f53656e64657220697320747279696e6720746f206d696e7420746f6f206d616e60448201527f7920696e20612073696e676c65207472616e73616374696f6e000000000000006064820152608401610d29565b7f000000000000000000000000000000000000000000000000000000000000000081611df83361275a565b611e029190613908565b1115611e6c5760405162461bcd60e51b815260206004820152603360248201527f53656e64657220697320747279696e6720746f206d696e74206d6f7265207468604482015272616e20616c6c6f636174656420746f6b656e7360681b6064820152608401610d29565b600e5481611e7d6001546000540390565b611e879190613908565b1115611ee35760405162461bcd60e51b815260206004820152602560248201527f4d696e7420776f756c6420657863656564206d617820737570706c79206f66206044820152646d696e747360d81b6064820152608401610d29565b601254611ef09082613934565b341015611f3f5760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206f66206574686572206973206e6f7420656e6f7567680000006044820152606401610d29565b611f493382612a8b565b50565b6001600160a01b038216331415611f765760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b600d5460ff166120345760405162461bcd60e51b815260206004820152601e60248201527f50726573616c65206d7573742062652061637469766520746f206d696e7400006044820152606401610d29565b612093828280806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506015546040516bffffffffffffffffffffffff193360601b1660208201529092506034019050611627565b6120ee5760405162461bcd60e51b815260206004820152602660248201527f496e76616c69642070726f6f66202d2043616c6c6572206e6f742077686974656044820152651b1a5cdd195960d21b6064820152608401610d29565b6000831161213e5760405162461bcd60e51b815260206004820152601d60248201527f53656e64657220697320747279696e6720746f206d696e74206e6f6e650000006044820152606401610d29565b7f0000000000000000000000000000000000000000000000000000000000000000836121693361275a565b6121739190613908565b11156121dd5760405162461bcd60e51b815260206004820152603360248201527f53656e64657220697320747279696e6720746f206d696e74206d6f7265207468604482015272616e20616c6c6f636174656420746f6b656e7360681b6064820152608401610d29565b336000908152600a60205260409020547f00000000000000000000000000000000000000000000000000000000000000009061221a908590613908565b111561228e5760405162461bcd60e51b815260206004820152603960248201527f53656e64657220697320747279696e6720746f206d696e74206d6f726520746860448201527f616e2074686569722077686974656c69737420616d6f756e74000000000000006064820152608401610d29565b600e548361229f6001546000540390565b6122a99190613908565b11156123095760405162461bcd60e51b815260206004820152602960248201527f5468697320776f756c642065786365656420746865206d6178206e756d626572604482015268206f66206d696e747360b81b6064820152608401610d29565b6010546123169084613934565b3410156119105760405162461bcd60e51b815260206004820152601860248201527f4e6f7420656e6f75676820657468657220746f206d696e7400000000000000006044820152606401610d29565b6008546001600160a01b031633146123ad5760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b601755565b6123bd848484612aa9565b6001600160a01b0383163b151580156123df57506123dd84848484612f43565b155b156123fd576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b606061240e82612a04565b61242b57604051630a14c4b560e41b815260040160405180910390fd5b600061243561303b565b90508051600014156124565760405180602001604052806000815250612481565b806124608461304a565b604051602001612471929190613846565b6040516020818303038152906040525b9392505050565b6008546001600160a01b031633146124d05760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b600d805460ff6301000000808304821615810263ff0000001990931692909217928390556040517fae946fdec58f87284b0bba64e6d052746da4c3de85ad8c080b9e03d7f7497a5e9361252c9390049091161515815260200190565b60405180910390a1565b6008546001600160a01b031633146111f45760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b6008546001600160a01b031633146125c65760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b600d805461ff001981166101009182900460ff1615909102179055565b606060006125f46001546000540390565b905060008167ffffffffffffffff81111561261f57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015612648578160200160208202803683370190505b5090506000805b838110156126cf57600061266282612dd5565b9050866001600160a01b031681600001516001600160a01b031614156126bc57818484815181106126a357634e487b7160e01b600052603260045260246000fd5b6020908102919091010152826126b8816139d1565b9350505b50806126c7816139d1565b91505061264f565b5090949350505050565b6008546001600160a01b031633146127215760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b6008546040516001600160a01b03909116904780156108fc02916000818181858888f19350505050158015611f49573d6000803e3d6000fd5b6000610b7b8261317c565b600260095414156127b85760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610d29565b6002600955336000908152600c602052604090205481111561281c5760405162461bcd60e51b815260206004820152601660248201527f457863656564732061697264726f7020616d6f756e74000000000000000000006044820152606401610d29565b600061282b6001546000540390565b600e5490915061283b8383613908565b11156128745760405162461bcd60e51b815260206004820152600860248201526714dbdb19081bdd5d60c21b6044820152606401610d29565b336000908152600c602052604081208054849290612893908490613953565b909155506128a390503383612a8b565b604080518381523360208201527ff0dfaa24f01eff9e095950c354fc0a6b1c7bdfb060aad46746915324d5295218910160405180910390a150506001600955565b6008546001600160a01b0316331461292c5760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b601380546001600160a01b0319166001600160a01b0392909216919091179055565b6008546001600160a01b031633146129965760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b6001600160a01b0381166129fb5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610d29565b611f4981612ef1565b6000805482108015610b7b575050600090815260046020526040902054600160e01b900460ff161590565b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b612aa58282604051806020016040528060008152506131d7565b5050565b6000612ab482612dd5565b80519091506000906001600160a01b0316336001600160a01b03161480612ae257508151612ae29033610a73565b80612afd575033612af284610c13565b6001600160a01b0316145b905080612b1d57604051632ce44b5f60e11b815260040160405180910390fd5b846001600160a01b031682600001516001600160a01b031614612b525760405162a1148160e81b815260040160405180910390fd5b6001600160a01b038416612b7957604051633a954ecd60e21b815260040160405180910390fd5b612b896000848460000151612a2f565b6001600160a01b038581166000908152600560209081526040808320805467ffffffffffffffff1980821667ffffffffffffffff92831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652600490945282852080546001600160e01b031916909417600160a01b429092169190910217909255908601808352912054909116612c7557600054811015612c75578251600082815260046020908152604090912080549186015167ffffffffffffffff16600160a01b026001600160e01b03199092166001600160a01b03909316929092171790555b5082846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45b5050505050565b60008183604051602001612cef92919091825260601b6bffffffffffffffffffffffff1916602082015260340190565b60405160208183030381529060405280519060200120905092915050565b60006124818260175485612dbf565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114612d69576040519150601f19603f3d011682016040523d82523d6000602084013e612d6e565b606091505b5050905080610ce05760405162461bcd60e51b815260206004820152601060248201527f5472616e73666572206661696c65642e000000000000000000000000000000006044820152606401610d29565b600082612dcc85846131e4565b14949350505050565b604080516060810182526000808252602082018190529181019190915281600054811015612ed857600081815260046020908152604091829020825160608101845290546001600160a01b0381168252600160a01b810467ffffffffffffffff1692820192909252600160e01b90910460ff16151591810182905290612ed65780516001600160a01b031615612e6c579392505050565b5060001901600081815260046020908152604091829020825160608101845290546001600160a01b038116808352600160a01b820467ffffffffffffffff1693830193909352600160e01b900460ff1615159281019290925215612ed1579392505050565b612e6c565b505b604051636f96cda160e11b815260040160405180910390fd5b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290612f78903390899088908890600401613875565b602060405180830381600087803b158015612f9257600080fd5b505af1925050508015612fc2575060408051601f3d908101601f19168201909252612fbf91810190613717565b60015b61301d573d808015612ff0576040519150601f19603f3d011682016040523d82523d6000602084013e612ff5565b606091505b508051613015576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490505b949350505050565b606060148054610b9090613996565b60608161306e5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156130985780613082816139d1565b91506130919050600a83613920565b9150613072565b60008167ffffffffffffffff8111156130c157634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156130eb576020820181803683370190505b5090505b841561303357613100600183613953565b915061310d600a866139ec565b613118906030613908565b60f81b81838151811061313b57634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350613175600a86613920565b94506130ef565b60006001600160a01b0382166131a5576040516335ebb31960e01b815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205468010000000000000000900467ffffffffffffffff1690565b610ce0838383600161329e565b600081815b845181101561329657600085828151811061321457634e487b7160e01b600052603260045260246000fd5b60200260200101519050808311613256576040805160208101859052908101829052606001604051602081830303815290604052805190602001209250613283565b60408051602081018390529081018490526060016040516020818303038152906040528051906020012092505b508061328e816139d1565b9150506131e9565b509392505050565b6000546001600160a01b0385166132c757604051622e076360e81b815260040160405180910390fd5b836132e55760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b038516600081815260056020908152604080832080546fffffffffffffffffffffffffffffffff19811667ffffffffffffffff8083168c0181169182176801000000000000000067ffffffffffffffff1990941690921783900481168c01811690920217909155858452600490925290912080546001600160e01b031916909217600160a01b42909216919091021790558080850183801561339757506001600160a01b0387163b15155b15613420575b60405182906001600160a01b038916906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a46133e86000888480600101955088612f43565b613405576040516368d2bf6b60e11b815260040160405180910390fd5b8082141561339d57826000541461341b57600080fd5b613466565b5b6040516001830192906001600160a01b038916906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a480821415613421575b50600055612cb8565b82805461347b90613996565b90600052602060002090601f01602090048101928261349d57600085556134e3565b82601f106134b65782800160ff198235161785556134e3565b828001600101855582156134e3579182015b828111156134e35782358255916020019190600101906134c8565b506134ef9291506134f3565b5090565b5b808211156134ef57600081556001016134f4565b80356001600160a01b038116811461351f57600080fd5b919050565b600060208284031215613535578081fd5b61248182613508565b60008060408385031215613550578081fd5b61355983613508565b915061356760208401613508565b90509250929050565b600080600060608486031215613584578081fd5b61358d84613508565b925061359b60208501613508565b9150604084013590509250925092565b600080600080608085870312156135c0578081fd5b6135c985613508565b93506135d760208601613508565b925060408501359150606085013567ffffffffffffffff808211156135fa578283fd5b818701915087601f83011261360d578283fd5b81358181111561361f5761361f613a2c565b604051601f8201601f19908116603f0116810190838211818310171561364757613647613a2c565b816040528281528a602084870101111561365f578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215613692578182fd5b61369b83613508565b9150602083013580151581146136af578182fd5b809150509250929050565b600080604083850312156136cc578182fd5b6136d583613508565b946020939093013593505050565b6000602082840312156136f4578081fd5b5035919050565b60006020828403121561370c578081fd5b813561248181613a42565b600060208284031215613728578081fd5b815161248181613a42565b60008060208385031215613745578182fd5b823567ffffffffffffffff8082111561375c578384fd5b818501915085601f83011261376f578384fd5b81358181111561377d578485fd5b86602082850101111561378e578485fd5b60209290920196919550909350505050565b6000806000604084860312156137b4578283fd5b83359250602084013567ffffffffffffffff808211156137d2578384fd5b818601915086601f8301126137e5578384fd5b8135818111156137f3578485fd5b8760208260051b8501011115613807578485fd5b6020830194508093505050509250925092565b6000815180845261383281602086016020860161396a565b601f01601f19169290920160200192915050565b6000835161385881846020880161396a565b83519083019061386c81836020880161396a565b01949350505050565b60006001600160a01b038087168352808616602084015250836040830152608060608301526138a7608083018461381a565b9695505050505050565b6020808252825182820181905260009190848201906040850190845b818110156138e9578351835292840192918401916001016138cd565b50909695505050505050565b602081526000612481602083018461381a565b6000821982111561391b5761391b613a00565b500190565b60008261392f5761392f613a16565b500490565b600081600019048311821515161561394e5761394e613a00565b500290565b60008282101561396557613965613a00565b500390565b60005b8381101561398557818101518382015260200161396d565b838111156123fd5750506000910152565b600181811c908216806139aa57607f821691505b602082108114156139cb57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156139e5576139e5613a00565b5060010190565b6000826139fb576139fb613a16565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114611f4957600080fdfe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a26469706673582212209d5ef0f0883c8c384d348fe1caa1121286c9d1bdb0679aa2ab79be21707be1b464736f6c63430008040033","deployedBytecode":"0x6080604052600436106103975760003560e01c80638da5cb5b116101dc578063cd5d4a9011610102578063e30d4440116100a0578063ef5d9ae81161006f578063ef5d9ae814610ac1578063f2fde38b14610aee578063f4a0a528146107aa578063fa53cd3814610b0e57600080fd5b8063e30d444014610a2f578063e397950814610a42578063e985e9c514610a58578063ee46699614610aa157600080fd5b8063d5abeb01116100dc578063d5abeb01146109b7578063da87741b146109cd578063db2e21bc146109fa578063dc33e68114610a0f57600080fd5b8063cd5d4a901461096d578063d44e357314610982578063d57f8279146109a257600080fd5b8063a22cb4651161017a578063b88d4fde11610149578063b88d4fde146108dd578063c4fc4246146108fd578063c556da8e14610917578063c87b56dd1461094d57600080fd5b8063a22cb46514610874578063a3a53ccb14610894578063ae269743146108a7578063aea48328146108c757600080fd5b806395d89b41116101b657806395d89b41146108215780639980018514610836578063a035b1fe1461084b578063a0712d681461086157600080fd5b80638da5cb5b1461078c57806391b7f5ed146107aa5780639231ab2a146107ca57600080fd5b806343d0d356116102c157806363665f2e1161025f5780637d44fd111161022e5780637d44fd111461072b5780637d8966e41461074b57806383df8d8d146107605780638babe7661461077657600080fd5b806363665f2e146106b657806368428a1b146106d657806370a08231146106f6578063715018a61461071657600080fd5b806358cf77fa1161029b57806358cf77fa146106225780635d579a091461064f57806363055127146106625780636352211e1461069657600080fd5b806343d0d356146105bf57806344d19d2b146105ec57806355f804b31461060257600080fd5b806318f34b0f116103395780632f52ebb7116103085780632f52ebb7146105575780633b4c4b251461056a5780633ccfd60b1461058a57806342842e0e1461059f57600080fd5b806318f34b0f146104af578063207e2173146104e357806323b872dd1461051757806325c2c0201461053757600080fd5b8063095ea7b311610375578063095ea7b31461042b5780631342ff4c1461044d578063142109ed1461046d57806318160ddd1461048c57600080fd5b806301ffc9a71461039c57806306fdde03146103d1578063081812fc146103f3575b600080fd5b3480156103a857600080fd5b506103bc6103b73660046136fb565b610b2f565b60405190151581526020015b60405180910390f35b3480156103dd57600080fd5b506103e6610b81565b6040516103c891906138f5565b3480156103ff57600080fd5b5061041361040e3660046136e3565b610c13565b6040516001600160a01b0390911681526020016103c8565b34801561043757600080fd5b5061044b6104463660046136ba565b610c57565b005b34801561045957600080fd5b5061044b6104683660046136e3565b610ce5565b34801561047957600080fd5b50600d546103bc90610100900460ff1681565b34801561049857600080fd5b50600154600054035b6040519081526020016103c8565b3480156104bb57600080fd5b506104a17f000000000000000000000000000000000000000000000000000000000000000081565b3480156104ef57600080fd5b506104a17f000000000000000000000000000000000000000000000000000000000000000081565b34801561052357600080fd5b5061044b610532366004613570565b610ec3565b34801561054357600080fd5b5061044b6105523660046136e3565b610ece565b61044b6105653660046137a0565b610f1b565b34801561057657600080fd5b5061044b6105853660046136e3565b61115b565b34801561059657600080fd5b5061044b6111f9565b3480156105ab57600080fd5b5061044b6105ba366004613570565b611506565b3480156105cb57600080fd5b506104a16105da366004613524565b600a6020526000908152604090205481565b3480156105f857600080fd5b506104a1600f5481565b34801561060e57600080fd5b5061044b61061d366004613733565b611521565b34801561062e57600080fd5b506104a161063d366004613524565b600c6020526000908152604090205481565b61044b61065d3660046137a0565b611575565b34801561066e57600080fd5b506104a17f000000000000000000000000000000000000000000000000000000000000000081565b3480156106a257600080fd5b506104136106b13660046136e3565b61193f565b3480156106c257600080fd5b5061044b6106d13660046136ba565b611951565b3480156106e257600080fd5b50600d546103bc9062010000900460ff1681565b34801561070257600080fd5b506104a1610711366004613524565b611a0b565b34801561072257600080fd5b5061044b611a5a565b34801561073757600080fd5b5061044b6107463660046136e3565b611aae565b34801561075757600080fd5b5061044b611afb565b34801561076c57600080fd5b506104a160155481565b34801561078257600080fd5b506104a160105481565b34801561079857600080fd5b506008546001600160a01b0316610413565b3480156107b657600080fd5b5061044b6107c53660046136e3565b611b62565b3480156107d657600080fd5b506107ea6107e53660046136e3565b611baf565b6040805182516001600160a01b0316815260208084015167ffffffffffffffff1690820152918101511515908201526060016103c8565b34801561082d57600080fd5b506103e6611bd5565b34801561084257600080fd5b5061044b611be4565b34801561085757600080fd5b506104a160125481565b61044b61086f3660046136e3565b611c40565b34801561088057600080fd5b5061044b61088f366004613680565b611f4c565b61044b6108a23660046137a0565b611fe2565b3480156108b357600080fd5b5061044b6108c23660046136e3565b612365565b3480156108d357600080fd5b506104a160165481565b3480156108e957600080fd5b5061044b6108f83660046135ab565b6123b2565b34801561090957600080fd5b50600d546103bc9060ff1681565b34801561092357600080fd5b506104a1610932366004613524565b6001600160a01b03166000908152600b602052604090205490565b34801561095957600080fd5b506103e66109683660046136e3565b612403565b34801561097957600080fd5b5061044b612488565b34801561098e57600080fd5b5061044b61099d3660046136e3565b612536565b3480156109ae57600080fd5b5061044b61257e565b3480156109c357600080fd5b506104a1600e5481565b3480156109d957600080fd5b506109ed6109e8366004613524565b6125e3565b6040516103c891906138b1565b348015610a0657600080fd5b5061044b6126d9565b348015610a1b57600080fd5b506104a1610a2a366004613524565b61275a565b61044b610a3d3660046136e3565b612765565b348015610a4e57600080fd5b506104a160115481565b348015610a6457600080fd5b506103bc610a7336600461353e565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b348015610aad57600080fd5b5061044b610abc366004613524565b6128e4565b348015610acd57600080fd5b506104a1610adc366004613524565b600b6020526000908152604090205481565b348015610afa57600080fd5b5061044b610b09366004613524565b61294e565b348015610b1a57600080fd5b50600d546103bc906301000000900460ff1681565b60006001600160e01b031982166380ac58cd60e01b1480610b6057506001600160e01b03198216635b5e139f60e01b145b80610b7b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b606060028054610b9090613996565b80601f0160208091040260200160405190810160405280929190818152602001828054610bbc90613996565b8015610c095780601f10610bde57610100808354040283529160200191610c09565b820191906000526020600020905b815481529060010190602001808311610bec57829003601f168201915b5050505050905090565b6000610c1e82612a04565b610c3b576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b6000610c628261193f565b9050806001600160a01b0316836001600160a01b03161415610c975760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b03821614801590610cb75750610cb58133610a73565b155b15610cd5576040516367d9dca160e11b815260040160405180910390fd5b610ce0838383612a2f565b505050565b6008546001600160a01b03163314610d325760405162461bcd60e51b81526020600482018190526024820152600080516020613a5983398151915260448201526064015b60405180910390fd5b600f5481610d436001546000540390565b610d4d9190613908565b1115610db15760405162461bcd60e51b815260206004820152602d60248201527f546f6f206d616e79206d696e74656420746f207075626c696320746f2070657260448201526c199bdc9b4819195d881b5a5b9d609a1b6064820152608401610d29565b610ddb7f0000000000000000000000000000000000000000000000000000000000000000826139ec565b15610e4e5760405162461bcd60e51b815260206004820152603660248201527f4d757374206f6e6c79206d696e742061206d756c7469706c65206f662074686560448201527f206d6178696d756d2061646472657373206d696e7473000000000000000000006064820152608401610d29565b6000610e7a7f000000000000000000000000000000000000000000000000000000000000000083613920565b905060005b81811015610ce057610eb1337f0000000000000000000000000000000000000000000000000000000000000000612a8b565b80610ebb816139d1565b915050610e7f565b610ce0838383612aa9565b6008546001600160a01b03163314610f165760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b601555565b60026009541415610f6e5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610d29565b6002600955600d546301000000900460ff16610fb75760405162461bcd60e51b81526020600482015260086024820152674e6f74204c69766560c01b6044820152606401610d29565b610ffd610fc43385612cbf565b838380806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250612d0d92505050565b6110335760405162461bcd60e51b8152602060048201526007602482015266125b9d985b1a5960ca1b6044820152606401610d29565b336000908152600b60205260409020548314156110925760405162461bcd60e51b815260206004820152600f60248201527f416c726561647920636c61696d656400000000000000000000000000000000006044820152606401610d29565b60006110a16001546000540390565b600e549091506110b18583613908565b11156110ea5760405162461bcd60e51b815260206004820152600860248201526714dbdb19081bdd5d60c21b6044820152606401610d29565b6110f43385612a8b565b336000908152600b602052604081208054869290611113908490613908565b9091555050604080518581523360208201527f6aa3eac93d079e5e100b1029be716caa33586c96aa4baac390669fb5c2a21212910160405180910390a1505060016009555050565b6008546001600160a01b031633146111a35760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b600e5481106111f45760405162461bcd60e51b815260206004820181905260248201527f43616e6e6f7420696e63726561736520737570706c79206f6620746f6b656e736044820152606401610d29565b600e55565b6008546001600160a01b031633146112415760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b600260095414156112945760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610d29565b6002600955476112e65760405162461bcd60e51b815260206004820152601660248201527f4e6f2062616c616e636520746f207769746864726177000000000000000000006044820152606401610d29565b4761131b734ee72eab8321fb265fd9fe6eefee14d0a1a1906c606461130c846013613934565b6113169190613920565b612d1c565b61134073022c875cda743a687a2669f5515408d7bc6af755606461130c846013613934565b61136573a3712a3c873e06026cbcbe14727bf6010f671738606461130c846013613934565b61138a7311b2e4ea2e759da33fb6f35bd4031f6e40046d26606461130c846014613934565b6113af735f208bd3ad1e6f67bd68833e04efc8263a51b467606461130c846005613934565b6113d473ceb5e5c55bb585cfaef92aeb1609c4384ec1890e606461130c846009613934565b6113f973ac839aae0afc40131fccaa1fce5c53e6b13aba8b606461130c846003613934565b61141e7329ae4c46dae9cb298a2398aab348769426900903606461130c846001613934565b6114437330e37464499deb7681030eccb33793e33e833402606461130c846001613934565b61146973927705920d0e697559718a16e283c458e75975f46103e861130c846005613934565b61148f735d8906c28a43bd2e99680b7552963d196602be846103e861130c846005613934565b6114b47355e29ada6fa377d75caab61e391aa5fc188960b2606461130c846001613934565b6114d9732b878dcb33490fe671adf704c6388abb569f4e18606461130c846001613934565b6114fe73fd43a900ac4380fd7e39775602b5ee2f341f8dfe606461130c846001613934565b506001600955565b610ce0838383604051806020016040528060008152506123b2565b6008546001600160a01b031633146115695760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b610ce06014838361346f565b600d54610100900460ff166115cc5760405162461bcd60e51b815260206004820152601b60248201527f53616c65206d7573742062652061637469766520746f206d696e7400000000006044820152606401610d29565b611642828280806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506016546040516bffffffffffffffffffffffff193360601b16602082015290925060340190505b60405160208183030381529060405280519060200120612dbf565b61169d5760405162461bcd60e51b815260206004820152602660248201527f496e76616c69642070726f6f66202d2043616c6c6572206e6f742077686974656044820152651b1a5cdd195960d21b6064820152608401610d29565b600083116116ed5760405162461bcd60e51b815260206004820152601d60248201527f53656e64657220697320747279696e6720746f206d696e74206e6f6e650000006044820152606401610d29565b7f0000000000000000000000000000000000000000000000000000000000000000836117183361275a565b6117229190613908565b111561178c5760405162461bcd60e51b815260206004820152603360248201527f53656e64657220697320747279696e6720746f206d696e74206d6f7265207468604482015272616e20616c6c6f636174656420746f6b656e7360681b6064820152608401610d29565b336000908152600a60205260409020547f0000000000000000000000000000000000000000000000000000000000000000906117c9908590613908565b111561183d5760405162461bcd60e51b815260206004820152603960248201527f53656e64657220697320747279696e6720746f206d696e74206d6f726520746860448201527f616e2074686569722077686974656c69737420616d6f756e74000000000000006064820152608401610d29565b600e548361184e6001546000540390565b6118589190613908565b11156118b45760405162461bcd60e51b815260206004820152602560248201527f4d696e7420776f756c6420657863656564206d617820737570706c79206f66206044820152646d696e747360d81b6064820152608401610d29565b6011546118c19084613934565b3410156119105760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206f66206574686572206973206e6f7420656e6f7567680000006044820152606401610d29565b336000908152600a60205260408120805485929061192f908490613908565b90915550610ce090503384612a8b565b600061194a82612dd5565b5192915050565b6008546001600160a01b031633146119995760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b6001600160a01b0382166000908152600c6020526040812080548392906119c1908490613908565b9091555050604080518281526001600160a01b03841660208201527f7871e154ac114554d9482c2356ea08c8934e9907ad45c33ca7c3677f2b157383910160405180910390a15050565b60006001600160a01b038216611a34576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205467ffffffffffffffff1690565b6008546001600160a01b03163314611aa25760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b611aac6000612ef1565b565b6008546001600160a01b03163314611af65760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b601655565b6008546001600160a01b03163314611b435760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b600d805462ff0000198116620100009182900460ff1615909102179055565b6008546001600160a01b03163314611baa5760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b601255565b6040805160608101825260008082526020820181905291810191909152610b7b82612dd5565b606060038054610b9090613996565b6008546001600160a01b03163314611c2c5760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b600d805460ff19811660ff90911615179055565b323314611c8f5760405162461bcd60e51b815260206004820152601e60248201527f5468652063616c6c657220697320616e6f7468657220636f6e747261637400006044820152606401610d29565b600d5462010000900460ff16611ce75760405162461bcd60e51b815260206004820152601b60248201527f53616c65206d7573742062652061637469766520746f206d696e7400000000006044820152606401610d29565b60008111611d375760405162461bcd60e51b815260206004820152601d60248201527f53656e64657220697320747279696e6720746f206d696e74206e6f6e650000006044820152606401610d29565b7f0000000000000000000000000000000000000000000000000000000000000000811115611dcd5760405162461bcd60e51b815260206004820152603960248201527f53656e64657220697320747279696e6720746f206d696e7420746f6f206d616e60448201527f7920696e20612073696e676c65207472616e73616374696f6e000000000000006064820152608401610d29565b7f000000000000000000000000000000000000000000000000000000000000000081611df83361275a565b611e029190613908565b1115611e6c5760405162461bcd60e51b815260206004820152603360248201527f53656e64657220697320747279696e6720746f206d696e74206d6f7265207468604482015272616e20616c6c6f636174656420746f6b656e7360681b6064820152608401610d29565b600e5481611e7d6001546000540390565b611e879190613908565b1115611ee35760405162461bcd60e51b815260206004820152602560248201527f4d696e7420776f756c6420657863656564206d617820737570706c79206f66206044820152646d696e747360d81b6064820152608401610d29565b601254611ef09082613934565b341015611f3f5760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206f66206574686572206973206e6f7420656e6f7567680000006044820152606401610d29565b611f493382612a8b565b50565b6001600160a01b038216331415611f765760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b600d5460ff166120345760405162461bcd60e51b815260206004820152601e60248201527f50726573616c65206d7573742062652061637469766520746f206d696e7400006044820152606401610d29565b612093828280806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506015546040516bffffffffffffffffffffffff193360601b1660208201529092506034019050611627565b6120ee5760405162461bcd60e51b815260206004820152602660248201527f496e76616c69642070726f6f66202d2043616c6c6572206e6f742077686974656044820152651b1a5cdd195960d21b6064820152608401610d29565b6000831161213e5760405162461bcd60e51b815260206004820152601d60248201527f53656e64657220697320747279696e6720746f206d696e74206e6f6e650000006044820152606401610d29565b7f0000000000000000000000000000000000000000000000000000000000000000836121693361275a565b6121739190613908565b11156121dd5760405162461bcd60e51b815260206004820152603360248201527f53656e64657220697320747279696e6720746f206d696e74206d6f7265207468604482015272616e20616c6c6f636174656420746f6b656e7360681b6064820152608401610d29565b336000908152600a60205260409020547f00000000000000000000000000000000000000000000000000000000000000009061221a908590613908565b111561228e5760405162461bcd60e51b815260206004820152603960248201527f53656e64657220697320747279696e6720746f206d696e74206d6f726520746860448201527f616e2074686569722077686974656c69737420616d6f756e74000000000000006064820152608401610d29565b600e548361229f6001546000540390565b6122a99190613908565b11156123095760405162461bcd60e51b815260206004820152602960248201527f5468697320776f756c642065786365656420746865206d6178206e756d626572604482015268206f66206d696e747360b81b6064820152608401610d29565b6010546123169084613934565b3410156119105760405162461bcd60e51b815260206004820152601860248201527f4e6f7420656e6f75676820657468657220746f206d696e7400000000000000006044820152606401610d29565b6008546001600160a01b031633146123ad5760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b601755565b6123bd848484612aa9565b6001600160a01b0383163b151580156123df57506123dd84848484612f43565b155b156123fd576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b606061240e82612a04565b61242b57604051630a14c4b560e41b815260040160405180910390fd5b600061243561303b565b90508051600014156124565760405180602001604052806000815250612481565b806124608461304a565b604051602001612471929190613846565b6040516020818303038152906040525b9392505050565b6008546001600160a01b031633146124d05760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b600d805460ff6301000000808304821615810263ff0000001990931692909217928390556040517fae946fdec58f87284b0bba64e6d052746da4c3de85ad8c080b9e03d7f7497a5e9361252c9390049091161515815260200190565b60405180910390a1565b6008546001600160a01b031633146111f45760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b6008546001600160a01b031633146125c65760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b600d805461ff001981166101009182900460ff1615909102179055565b606060006125f46001546000540390565b905060008167ffffffffffffffff81111561261f57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015612648578160200160208202803683370190505b5090506000805b838110156126cf57600061266282612dd5565b9050866001600160a01b031681600001516001600160a01b031614156126bc57818484815181106126a357634e487b7160e01b600052603260045260246000fd5b6020908102919091010152826126b8816139d1565b9350505b50806126c7816139d1565b91505061264f565b5090949350505050565b6008546001600160a01b031633146127215760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b6008546040516001600160a01b03909116904780156108fc02916000818181858888f19350505050158015611f49573d6000803e3d6000fd5b6000610b7b8261317c565b600260095414156127b85760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610d29565b6002600955336000908152600c602052604090205481111561281c5760405162461bcd60e51b815260206004820152601660248201527f457863656564732061697264726f7020616d6f756e74000000000000000000006044820152606401610d29565b600061282b6001546000540390565b600e5490915061283b8383613908565b11156128745760405162461bcd60e51b815260206004820152600860248201526714dbdb19081bdd5d60c21b6044820152606401610d29565b336000908152600c602052604081208054849290612893908490613953565b909155506128a390503383612a8b565b604080518381523360208201527ff0dfaa24f01eff9e095950c354fc0a6b1c7bdfb060aad46746915324d5295218910160405180910390a150506001600955565b6008546001600160a01b0316331461292c5760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b601380546001600160a01b0319166001600160a01b0392909216919091179055565b6008546001600160a01b031633146129965760405162461bcd60e51b81526020600482018190526024820152600080516020613a598339815191526044820152606401610d29565b6001600160a01b0381166129fb5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610d29565b611f4981612ef1565b6000805482108015610b7b575050600090815260046020526040902054600160e01b900460ff161590565b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b612aa58282604051806020016040528060008152506131d7565b5050565b6000612ab482612dd5565b80519091506000906001600160a01b0316336001600160a01b03161480612ae257508151612ae29033610a73565b80612afd575033612af284610c13565b6001600160a01b0316145b905080612b1d57604051632ce44b5f60e11b815260040160405180910390fd5b846001600160a01b031682600001516001600160a01b031614612b525760405162a1148160e81b815260040160405180910390fd5b6001600160a01b038416612b7957604051633a954ecd60e21b815260040160405180910390fd5b612b896000848460000151612a2f565b6001600160a01b038581166000908152600560209081526040808320805467ffffffffffffffff1980821667ffffffffffffffff92831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652600490945282852080546001600160e01b031916909417600160a01b429092169190910217909255908601808352912054909116612c7557600054811015612c75578251600082815260046020908152604090912080549186015167ffffffffffffffff16600160a01b026001600160e01b03199092166001600160a01b03909316929092171790555b5082846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45b5050505050565b60008183604051602001612cef92919091825260601b6bffffffffffffffffffffffff1916602082015260340190565b60405160208183030381529060405280519060200120905092915050565b60006124818260175485612dbf565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114612d69576040519150601f19603f3d011682016040523d82523d6000602084013e612d6e565b606091505b5050905080610ce05760405162461bcd60e51b815260206004820152601060248201527f5472616e73666572206661696c65642e000000000000000000000000000000006044820152606401610d29565b600082612dcc85846131e4565b14949350505050565b604080516060810182526000808252602082018190529181019190915281600054811015612ed857600081815260046020908152604091829020825160608101845290546001600160a01b0381168252600160a01b810467ffffffffffffffff1692820192909252600160e01b90910460ff16151591810182905290612ed65780516001600160a01b031615612e6c579392505050565b5060001901600081815260046020908152604091829020825160608101845290546001600160a01b038116808352600160a01b820467ffffffffffffffff1693830193909352600160e01b900460ff1615159281019290925215612ed1579392505050565b612e6c565b505b604051636f96cda160e11b815260040160405180910390fd5b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290612f78903390899088908890600401613875565b602060405180830381600087803b158015612f9257600080fd5b505af1925050508015612fc2575060408051601f3d908101601f19168201909252612fbf91810190613717565b60015b61301d573d808015612ff0576040519150601f19603f3d011682016040523d82523d6000602084013e612ff5565b606091505b508051613015576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490505b949350505050565b606060148054610b9090613996565b60608161306e5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156130985780613082816139d1565b91506130919050600a83613920565b9150613072565b60008167ffffffffffffffff8111156130c157634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156130eb576020820181803683370190505b5090505b841561303357613100600183613953565b915061310d600a866139ec565b613118906030613908565b60f81b81838151811061313b57634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350613175600a86613920565b94506130ef565b60006001600160a01b0382166131a5576040516335ebb31960e01b815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205468010000000000000000900467ffffffffffffffff1690565b610ce0838383600161329e565b600081815b845181101561329657600085828151811061321457634e487b7160e01b600052603260045260246000fd5b60200260200101519050808311613256576040805160208101859052908101829052606001604051602081830303815290604052805190602001209250613283565b60408051602081018390529081018490526060016040516020818303038152906040528051906020012092505b508061328e816139d1565b9150506131e9565b509392505050565b6000546001600160a01b0385166132c757604051622e076360e81b815260040160405180910390fd5b836132e55760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b038516600081815260056020908152604080832080546fffffffffffffffffffffffffffffffff19811667ffffffffffffffff8083168c0181169182176801000000000000000067ffffffffffffffff1990941690921783900481168c01811690920217909155858452600490925290912080546001600160e01b031916909217600160a01b42909216919091021790558080850183801561339757506001600160a01b0387163b15155b15613420575b60405182906001600160a01b038916906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a46133e86000888480600101955088612f43565b613405576040516368d2bf6b60e11b815260040160405180910390fd5b8082141561339d57826000541461341b57600080fd5b613466565b5b6040516001830192906001600160a01b038916906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a480821415613421575b50600055612cb8565b82805461347b90613996565b90600052602060002090601f01602090048101928261349d57600085556134e3565b82601f106134b65782800160ff198235161785556134e3565b828001600101855582156134e3579182015b828111156134e35782358255916020019190600101906134c8565b506134ef9291506134f3565b5090565b5b808211156134ef57600081556001016134f4565b80356001600160a01b038116811461351f57600080fd5b919050565b600060208284031215613535578081fd5b61248182613508565b60008060408385031215613550578081fd5b61355983613508565b915061356760208401613508565b90509250929050565b600080600060608486031215613584578081fd5b61358d84613508565b925061359b60208501613508565b9150604084013590509250925092565b600080600080608085870312156135c0578081fd5b6135c985613508565b93506135d760208601613508565b925060408501359150606085013567ffffffffffffffff808211156135fa578283fd5b818701915087601f83011261360d578283fd5b81358181111561361f5761361f613a2c565b604051601f8201601f19908116603f0116810190838211818310171561364757613647613a2c565b816040528281528a602084870101111561365f578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215613692578182fd5b61369b83613508565b9150602083013580151581146136af578182fd5b809150509250929050565b600080604083850312156136cc578182fd5b6136d583613508565b946020939093013593505050565b6000602082840312156136f4578081fd5b5035919050565b60006020828403121561370c578081fd5b813561248181613a42565b600060208284031215613728578081fd5b815161248181613a42565b60008060208385031215613745578182fd5b823567ffffffffffffffff8082111561375c578384fd5b818501915085601f83011261376f578384fd5b81358181111561377d578485fd5b86602082850101111561378e578485fd5b60209290920196919550909350505050565b6000806000604084860312156137b4578283fd5b83359250602084013567ffffffffffffffff808211156137d2578384fd5b818601915086601f8301126137e5578384fd5b8135818111156137f3578485fd5b8760208260051b8501011115613807578485fd5b6020830194508093505050509250925092565b6000815180845261383281602086016020860161396a565b601f01601f19169290920160200192915050565b6000835161385881846020880161396a565b83519083019061386c81836020880161396a565b01949350505050565b60006001600160a01b038087168352808616602084015250836040830152608060608301526138a7608083018461381a565b9695505050505050565b6020808252825182820181905260009190848201906040850190845b818110156138e9578351835292840192918401916001016138cd565b50909695505050505050565b602081526000612481602083018461381a565b6000821982111561391b5761391b613a00565b500190565b60008261392f5761392f613a16565b500490565b600081600019048311821515161561394e5761394e613a00565b500290565b60008282101561396557613965613a00565b500390565b60005b8381101561398557818101518382015260200161396d565b838111156123fd5750506000910152565b600181811c908216806139aa57607f821691505b602082108114156139cb57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156139e5576139e5613a00565b5060010190565b6000826139fb576139fb613a16565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114611f4957600080fdfe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a26469706673582212209d5ef0f0883c8c384d348fe1caa1121286c9d1bdb0679aa2ab79be21707be1b464736f6c63430008040033","devdoc":{"kind":"dev","methods":{"approve(address,uint256)":{"details":"See {IERC721-approve}."},"balanceOf(address)":{"details":"See {IERC721-balanceOf}."},"getApproved(uint256)":{"details":"See {IERC721-getApproved}."},"isApprovedForAll(address,address)":{"details":"See {IERC721-isApprovedForAll}."},"name()":{"details":"See {IERC721Metadata-name}."},"owner()":{"details":"Returns the address of the current owner."},"ownerOf(uint256)":{"details":"See {IERC721-ownerOf}."},"renounceOwnership()":{"details":"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."},"safeTransferFrom(address,address,uint256)":{"details":"See {IERC721-safeTransferFrom}."},"safeTransferFrom(address,address,uint256,bytes)":{"details":"See {IERC721-safeTransferFrom}."},"setApprovalForAll(address,bool)":{"details":"See {IERC721-setApprovalForAll}."},"supportsInterface(bytes4)":{"details":"See {IERC165-supportsInterface}."},"symbol()":{"details":"See {IERC721Metadata-symbol}."},"tokenURI(uint256)":{"details":"See {IERC721Metadata-tokenURI}."},"totalSupply()":{"details":"See {IERC721Enumerable-totalSupply}.Burned tokens are calculated here, use _totalMinted() if you want to count just minted tokens."},"transferFrom(address,address,uint256)":{"details":"See {IERC721-transferFrom}."},"transferOwnership(address)":{"details":"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."}},"version":1},"userdoc":{"kind":"user","methods":{"mint(uint256)":{"notice":"Public mint"},"mintOGSale(uint256,bytes32[])":{"notice":"OG mint"},"mintWLSale(uint256,bytes32[])":{"notice":"Whitelist mint"},"reserveMint(uint256)":{"notice":"Reserve mint for founders"}},"notice":".+------+     +------+     +------+     +------+     +------+. .\' |    .\'|    /|     /|     |      |     |\\\\     |\\\\    |`.    | `. +---+--+\'  |   +-+----+ |     +------+     | +----+-+   |  `+--+---+ |   |  |   |   | |    | |     |      |     | |    | |   |   |  |   | |  ,+--+---+   | +----+-+     +------+     +-+----+ |   +---+--+   | |.\'    | .\'    |/     |/      |      |      \\\\|     \\\\|    `. |   `. | +------+\'      +------+       +------+       +------+      `+------+ .----------------.  .----------------.  .----------------.  .----------------.  | .--------------. || .--------------. || .--------------. || .--------------. | | |     _____    | || | _____  _____ | || |    _______   | || |  _________   | | | |    |_   _|   | || ||_   _||_   _|| || |   /  ___  |  | || | |  _   _  |  | | | |      | |     | || |  | |    | |  | || |  |  (__ \\\\_|  | || | |_/ | | \\\\_|  | | | |   _  | |     | || |  | \'    \' |  | || |   \'.___`-.   | || |     | |      | | | |  | |_\' |     | || |   \\\\ `--\' /   | || |  |`\\\\____) |  | || |    _| |_     | | | |  `.___.\'     | || |    `.__.\'    | || |  |_______.\'  | || |   |_____|    | | | |              | || |              | || |              | || |              | | | \'--------------\' || \'--------------\' || \'--------------\' || \'--------------\' | \'----------------\'  \'----------------\'  \'----------------\'  \'----------------\'  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  | .--------------. || .--------------. || .--------------. || .--------------. || .--------------. | | |     ______   | || | _____  _____ | || |   ______     | || |  _________   | || |    _______   | | | |   .\' ___  |  | || ||_   _||_   _|| || |  |_   _ \\\\    | || | |_   ___  |  | || |   /  ___  |  | | | |  / .\'   \\\\_|  | || |  | |    | |  | || |    | |_) |   | || |   | |_  \\\\_|  | || |  |  (__ \\\\_|  | | | |  | |         | || |  | \'    \' |  | || |    |  __\'.   | || |   |  _|  _   | || |   \'.___`-.   | | | |  \\\\ `.___.\'\\\\  | || |   \\\\ `--\' /   | || |   _| |__) |  | || |  _| |___/ |  | || |  |`\\\\____) |  | | | |   `._____.\'  | || |    `.__.\'    | || |  |_______/   | || | |_________|  | || |  |_______.\'  | | | |              | || |              | || |              | || |              | || |              | | | \'--------------\' || \'--------------\' || \'--------------\' || \'--------------\' || \'--------------\' | \'----------------\'  \'----------------\'  \'----------------\'  \'----------------\'  \'----------------\' ","version":1},"storageLayout":{"storage":[{"astId":1451,"contract":"contracts/test.sol:JustCubes","label":"_currentIndex","offset":0,"slot":"0","type":"t_uint256"},{"astId":1453,"contract":"contracts/test.sol:JustCubes","label":"_burnCounter","offset":0,"slot":"1","type":"t_uint256"},{"astId":1455,"contract":"contracts/test.sol:JustCubes","label":"_name","offset":0,"slot":"2","type":"t_string_storage"},{"astId":1457,"contract":"contracts/test.sol:JustCubes","label":"_symbol","offset":0,"slot":"3","type":"t_string_storage"},{"astId":1462,"contract":"contracts/test.sol:JustCubes","label":"_ownerships","offset":0,"slot":"4","type":"t_mapping(t_uint256,t_struct(TokenOwnership)1440_storage)"},{"astId":1467,"contract":"contracts/test.sol:JustCubes","label":"_addressData","offset":0,"slot":"5","type":"t_mapping(t_address,t_struct(AddressData)1449_storage)"},{"astId":1471,"contract":"contracts/test.sol:JustCubes","label":"_tokenApprovals","offset":0,"slot":"6","type":"t_mapping(t_uint256,t_address)"},{"astId":1477,"contract":"contracts/test.sol:JustCubes","label":"_operatorApprovals","offset":0,"slot":"7","type":"t_mapping(t_address,t_mapping(t_address,t_bool))"},{"astId":7,"contract":"contracts/test.sol:JustCubes","label":"_owner","offset":0,"slot":"8","type":"t_address"},{"astId":115,"contract":"contracts/test.sol:JustCubes","label":"_status","offset":0,"slot":"9","type":"t_uint256"},{"astId":2709,"contract":"contracts/test.sol:JustCubes","label":"numberOfWLMintsOnAddress","offset":0,"slot":"10","type":"t_mapping(t_address,t_uint256)"},{"astId":2713,"contract":"contracts/test.sol:JustCubes","label":"totalClaimed","offset":0,"slot":"11","type":"t_mapping(t_address,t_uint256)"},{"astId":2717,"contract":"contracts/test.sol:JustCubes","label":"airdropList","offset":0,"slot":"12","type":"t_mapping(t_address,t_uint256)"},{"astId":2720,"contract":"contracts/test.sol:JustCubes","label":"OGsaleActive","offset":0,"slot":"13","type":"t_bool"},{"astId":2723,"contract":"contracts/test.sol:JustCubes","label":"WLsaleActive","offset":1,"slot":"13","type":"t_bool"},{"astId":2726,"contract":"contracts/test.sol:JustCubes","label":"saleActive","offset":2,"slot":"13","type":"t_bool"},{"astId":2729,"contract":"contracts/test.sol:JustCubes","label":"isFreeClaimActive","offset":3,"slot":"13","type":"t_bool"},{"astId":2741,"contract":"contracts/test.sol:JustCubes","label":"maxSupply","offset":0,"slot":"14","type":"t_uint256"},{"astId":2744,"contract":"contracts/test.sol:JustCubes","label":"reservedSupply","offset":0,"slot":"15","type":"t_uint256"},{"astId":2747,"contract":"contracts/test.sol:JustCubes","label":"OGprice","offset":0,"slot":"16","type":"t_uint256"},{"astId":2750,"contract":"contracts/test.sol:JustCubes","label":"WLprice","offset":0,"slot":"17","type":"t_uint256"},{"astId":2753,"contract":"contracts/test.sol:JustCubes","label":"price","offset":0,"slot":"18","type":"t_uint256"},{"astId":2756,"contract":"contracts/test.sol:JustCubes","label":"_signer","offset":0,"slot":"19","type":"t_address"},{"astId":2759,"contract":"contracts/test.sol:JustCubes","label":"_baseTokenURI","offset":0,"slot":"20","type":"t_string_storage"},{"astId":2761,"contract":"contracts/test.sol:JustCubes","label":"OGMerkleRoot","offset":0,"slot":"21","type":"t_bytes32"},{"astId":2763,"contract":"contracts/test.sol:JustCubes","label":"WLMerkleRoot","offset":0,"slot":"22","type":"t_bytes32"},{"astId":2765,"contract":"contracts/test.sol:JustCubes","label":"freeClaim","offset":0,"slot":"23","type":"t_bytes32"}],"types":{"t_address":{"encoding":"inplace","label":"address","numberOfBytes":"20"},"t_bool":{"encoding":"inplace","label":"bool","numberOfBytes":"1"},"t_bytes32":{"encoding":"inplace","label":"bytes32","numberOfBytes":"32"},"t_mapping(t_address,t_bool)":{"encoding":"mapping","key":"t_address","label":"mapping(address => bool)","numberOfBytes":"32","value":"t_bool"},"t_mapping(t_address,t_mapping(t_address,t_bool))":{"encoding":"mapping","key":"t_address","label":"mapping(address => mapping(address => bool))","numberOfBytes":"32","value":"t_mapping(t_address,t_bool)"},"t_mapping(t_address,t_struct(AddressData)1449_storage)":{"encoding":"mapping","key":"t_address","label":"mapping(address => struct ERC721A.AddressData)","numberOfBytes":"32","value":"t_struct(AddressData)1449_storage"},"t_mapping(t_address,t_uint256)":{"encoding":"mapping","key":"t_address","label":"mapping(address => uint256)","numberOfBytes":"32","value":"t_uint256"},"t_mapping(t_uint256,t_address)":{"encoding":"mapping","key":"t_uint256","label":"mapping(uint256 => address)","numberOfBytes":"32","value":"t_address"},"t_mapping(t_uint256,t_struct(TokenOwnership)1440_storage)":{"encoding":"mapping","key":"t_uint256","label":"mapping(uint256 => struct ERC721A.TokenOwnership)","numberOfBytes":"32","value":"t_struct(TokenOwnership)1440_storage"},"t_string_storage":{"encoding":"bytes","label":"string","numberOfBytes":"32"},"t_struct(AddressData)1449_storage":{"encoding":"inplace","label":"struct ERC721A.AddressData","members":[{"astId":1442,"contract":"contracts/test.sol:JustCubes","label":"balance","offset":0,"slot":"0","type":"t_uint64"},{"astId":1444,"contract":"contracts/test.sol:JustCubes","label":"numberMinted","offset":8,"slot":"0","type":"t_uint64"},{"astId":1446,"contract":"contracts/test.sol:JustCubes","label":"numberBurned","offset":16,"slot":"0","type":"t_uint64"},{"astId":1448,"contract":"contracts/test.sol:JustCubes","label":"aux","offset":24,"slot":"0","type":"t_uint64"}],"numberOfBytes":"32"},"t_struct(TokenOwnership)1440_storage":{"encoding":"inplace","label":"struct ERC721A.TokenOwnership","members":[{"astId":1435,"contract":"contracts/test.sol:JustCubes","label":"addr","offset":0,"slot":"0","type":"t_address"},{"astId":1437,"contract":"contracts/test.sol:JustCubes","label":"startTimestamp","offset":20,"slot":"0","type":"t_uint64"},{"astId":1439,"contract":"contracts/test.sol:JustCubes","label":"burned","offset":28,"slot":"0","type":"t_bool"}],"numberOfBytes":"32"},"t_uint256":{"encoding":"inplace","label":"uint256","numberOfBytes":"32"},"t_uint64":{"encoding":"inplace","label":"uint64","numberOfBytes":"8"}}}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFRCxRQUFNM0MsSUFBSSxHQUFHLElBQUlxRSw2Q0FBSixDQUFTRyxRQUFULENBQWI7QUFFQSxTQUFPeEUsSUFBUDtBQUNEOzs7Ozs7Ozs7O0FDbkNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWRsYW1wLW5leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL2xlZGxhbXAtbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9sZWRsYW1wLW5leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbGVkbGFtcC1uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL2xlZGxhbXAtbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9sZWRsYW1wLW5leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2xlZGxhbXAtbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2xlZGxhbXAtbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL2xlZGxhbXAtbmV4dC8uL3NyYy9jb21wb25lbnRzL0ZhbWlseS5qcyIsIndlYnBhY2s6Ly9sZWRsYW1wLW5leHQvLi9zcmMvY29tcG9uZW50cy9GYW1vdXMuanMiLCJ3ZWJwYWNrOi8vbGVkbGFtcC1uZXh0Ly4vc3JjL2NvbXBvbmVudHMvTWludEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9sZWRsYW1wLW5leHQvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LmpzIiwid2VicGFjazovL2xlZGxhbXAtbmV4dC8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWRsYW1wLW5leHQvLi9zcmMvdXRpbC93ZWIzLmpzIiwid2VicGFjazovL2xlZGxhbXAtbmV4dC8uL3NyYy9zdHlsZXMvc3R5bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9sZWRsYW1wLW5leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2xlZGxhbXAtbmV4dC9leHRlcm5hbCBcIkB1c2VkYXBwL2NvcmVcIiIsIndlYnBhY2s6Ly9sZWRsYW1wLW5leHQvZXh0ZXJuYWwgXCJAd2FsbGV0Y29ubmVjdC93ZWIzLXByb3ZpZGVyXCIiLCJ3ZWJwYWNrOi8vbGVkbGFtcC1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9sZWRsYW1wLW5leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL2xlZGxhbXAtbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly9sZWRsYW1wLW5leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2xlZGxhbXAtbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbGVkbGFtcC1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly9sZWRsYW1wLW5leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vbGVkbGFtcC1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vbGVkbGFtcC1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly9sZWRsYW1wLW5leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly9sZWRsYW1wLW5leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL2xlZGxhbXAtbmV4dC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2xlZGxhbXAtbmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbGVkbGFtcC1uZXh0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9sZWRsYW1wLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9sZWRsYW1wLW5leHQvZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vbGVkbGFtcC1uZXh0L2V4dGVybmFsIFwid2ViM1wiIiwid2VicGFjazovL2xlZGxhbXAtbmV4dC9pZ25vcmVkfEU6XFx3b3JrXFxCbG9ja2NoYWluXFxjcnlwdG9raW5nLW5mdFxccXVpZHZlcnNlLWZyb250ZW5kXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCJcclxuXHJcbmZ1bmN0aW9uIEZhbWlseSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmFpcn1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjI0cHhcIixcclxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMTZweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMThweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBQUklaRVM6IEFMTCBUS08gTUlOVEVSUyBFTElHSUJMRVxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3JkZXJ9PlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICBUaHJlZSBwcml6ZXMgd2lsbCBkZXBlbmQgb24gd2hhdCB5b3UgbWludC4gVGhlIG1vcmUgeW91IG1pbnQgdGhlXHJcbiAgICAgICAgICAgIGhpZ2hlciB5b3VyIGNoYW5jZSB3aWxsIGJlIHRvIGdldCB0aG9zZSBwcmVzdGlnZSBwcml6ZXMuIFRob3NlIGFyZVxyXG4gICAgICAgICAgICB1bHRyYSByYXJlIGJlY2F1c2UgdGhleSBvbmx5IGFwcGVhciBvbmNlIGluIHRoZSBlbnRpcmUgY29sbGVjdGlvblxyXG4gICAgICAgICAgICAoaS5lLiB0aGUgUm9sZXggYXR0cmlidXRlKS4gMTUgY2FzaCBwcml6ZXMgZm9yIGEgcmFuZG9tIE5GVC0tIHlvdVxyXG4gICAgICAgICAgICBjYW4gd2luIG1vcmUgdGhhbiBvbmUgY2FzaCBwcml6ZS4gVGhlIG1vcmUgeW91IG1pbnQgdGhlIG1vcmUgeW91IGNhblxyXG4gICAgICAgICAgICB3aW4uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmZhbWlseX1gfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1yb3dzLTIgZ3JpZC1yb3dzLTQgbXQtMTIgbWItMTYgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyXCIgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtZXZlbmx5XCIsIGFsaWduSXRlbXM6IFwic3RyZXRjaFwiLCBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbGcgZm9udC1ib2xkIGl0YWxpYyB0ZXh0LXdoaXRlXCI+Uk9MRVggVEVOVEFDTEUgUFJPUDo8L3A+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvaW1hZ2VzL3JvbGV4X2Fzc2V0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGVhbV9tZW1iZXJfcGljfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9kZXNjcmlwdGlvbn0gc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgZm9udFNpemU6IFwiMTZweFwiIH19PlxyXG4gICAgICAgICAgICAgIFdpbiBhICQ0MCwwMDAgY3VzdG9taXplZCBSb2xleC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNzJcIiBzdHlsZT17eyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIiwgYWxpZ25JdGVtczogXCJzdHJldGNoXCIsIGFsaWduQ29udGVudDogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1sZyBmb250LWJvbGQgaXRhbGljIHRleHQtd2hpdGVcIj5CRUFDSCBCQUNLR1JPVU5EOjwvcD5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvYmVhY2hfYmFja2dyb3VuZC5wbmdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRlYW1fbWVtYmVyX3BpY31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfZGVzY3JpcHRpb259IHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIGZvbnRTaXplOiBcIjE2cHhcIiB9fT5cclxuICAgICAgICAgICAgICBXaW4gYSBmYW1pbHkgdmFjYXRpb24gd29ydGggJDEwLDUwMC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNzJcIiBzdHlsZT17eyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIiwgYWxpZ25JdGVtczogXCJzdHJldGNoXCIsIGFsaWduQ29udGVudDogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1sZyBmb250LWJvbGQgaXRhbGljIHRleHQtd2hpdGVcIj5BTEkgViBMSVNUT04gU0NFTkU6PC9wPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ltYWdlcy9hbGlfZ2xvdmVzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGVhbV9tZW1iZXJfcGljfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9kZXNjcmlwdGlvbn0gc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgZm9udFNpemU6IFwiMTZweFwiIH19PlxyXG4gICAgICAgICAgICAgIFdpbiBhIHNpZ25lZCBNdWhhbW1hZCBBbGkgZ2xvdmUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyXCIgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtZXZlbmx5XCIsIGFsaWduSXRlbXM6IFwic3RyZXRjaFwiLCBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbGcgZm9udC1ib2xkIGl0YWxpYyB0ZXh0LXdoaXRlXCI+MTUgUkFORE9NIE5GVFM6PC9wPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ltYWdlcy9US09fR2FtZS5wbmdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRlYW1fbWVtYmVyX3BpY31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfZGVzY3JpcHRpb259IHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIGZvbnRTaXplOiBcIjE2cHhcIiB9fT5cclxuICAgICAgICAgICAgICAxNSByYW5kb20gTkZUcyB3aW4gJDEsMDAwIGVhY2ggYXV0b21hdGljYWxseS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYW1pbHlcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCJcclxuXHJcbmNvbnN0IEZhbW91cyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5mYW1vdXN9IGZsZXggZmxleC1yb3cgc3BhY2UteC0xMmB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTYvMTJcIj5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMzJweFwiLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIjkwMFwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjZmU2ODEwXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFdFTENPTUUgVE8gVEhFIFlPT01PT1RBOiBNSU5UIFRPIFVOTE9DS1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBzdHlsZT17e1xyXG4gICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICB9fT5cclxuICAgICAgICAgIFRoZSBZT09NT09UQSBpcyB0aGUgZmlyc3QgYW5kIG9ubHkgdW5kZXJ3YXRlciBtZXRhdmVyc2UgcG9wdWxhdGVkXHJcbiAgICAgICAgICBieSB0aGUgZmFzdGVzdCBncm93aW5nIGNyZWF0dXJlIGluIHRoZSBvY2Vhbi0tIHRoZSBzcXVpZC4gSW4gdGhlXHJcbiAgICAgICAgICBTcXVpZCBNZXRhdmVyc2UgKFlPT01PT1RBKSB5b3UgY2FuIG1ha2UgcmVhbCBtb25leSBpbiBhIHZpcnR1YWxcclxuICAgICAgICAgIHdvcmxkLCBzb2NpYWxseSBjb25uZWN0LCBmaW5kIHJlYWwgd29ybGQgam9icyAoYnkgY29ubmVjdGluZyksIHBsYXlcclxuICAgICAgICAgIFAyRSBhcmNhZGUgZ2FtZXMsIGFuZCBtb3JlLiBUaGUgVEtPIE5GVCBjb2xsZWN0aW9uIGlzIHlvdXIga2V5IHRvXHJcbiAgICAgICAgICB0aGUgbWV0YXZlcnNlLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrIG1kOnctNi8xMlwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvTkZUX1RLT3MuZ2lmXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byByb3VuZGVkLTJ4bFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYW1vdXNcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSnVzdGN1YmVzIGZyb20gXCIuLi9hYmkvSnVzdEN1YmVzLmpzb25cIlxyXG5pbXBvcnQgeyBSb3csIENvbCwgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIlxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlLm1vZHVsZS5jc3NcIlxyXG4vLyBpbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCJcclxuLy8gaW1wb3J0IEJhY2tkcm9wIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiXHJcbi8vIGltcG9ydCBGYWRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWRlXCJcclxuLy8gaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIlxyXG4vLyBpbXBvcnQgeyBTdHlsZXNDb250ZXh0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIlxyXG5cclxuZnVuY3Rpb24gTWludEJ1dHRvbih7IHdlYjMgfSkge1xyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMSlcclxuICBjb25zdCBbbWludENvdW50LCBzZXRNaW50Q291bnRdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghd2ViMykge1xyXG4gICAgICBhbGVydChcIlBsZWFzZSB1c2UgZGVza3RvcCBvciBEQXBwIGJyb3dzZXIgaWYgeW91IGFyZSBub3QgYWxyZWFkeS5cIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHg4NmVkMUQ2RmMzOTUwMDA3MUQ2RmI3ZTNDODlEODFkNzA1YkE3NzAwXCJcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoSnVzdGN1YmVzLmFiaSwgY29udHJhY3RBZGRyZXNzKVxyXG5cclxuICAgICAgaWYgKCEhY29udHJhY3QpIHtcclxuICAgICAgICBjb250cmFjdC5tZXRob2RzLnRvdGFsU3VwcGx5KCkuY2FsbCgpXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1pbnRDb3VudChyZXMpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFt3ZWIzXSlcclxuXHJcbiAgY29uc3QgbWludFRva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCF3ZWIzKSB7XHJcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIHVzZSBkZXNrdG9wIG9yIERBcHAgYnJvd3NlciBpZiB5b3UgYXJlIG5vdCBhbHJlYWR5LlwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweDE4RjM5ODMxOGVkRDZGODRCMDU4NjY5NjRhMEYzN2E2NzQxRTg5OThcIlxyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChKdXN0Y3ViZXMuYWJpLCBjb250cmFjdEFkZHJlc3MpXHJcbiAgICAgIGNvbnN0IF9hY2NvdW50ID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxyXG4gICAgICBjb25zdCBwcmljZSA9IDUwMDAwMDAwMDAwMDAwMDAwIC8vIDAuMDggZXRoXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMubWludChjb3VudCkuc2VuZCh7XHJcbiAgICAgICAgICBmcm9tOiBfYWNjb3VudFswXSxcclxuICAgICAgICAgIHZhbHVlOiBwcmljZSAqIGNvdW50LFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbXQtMTIgbWQ6c3BhY2UteC0xMiBtZDpzcGFjZS15LTAgc3BhY2UteS0xMlwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIiwgcGFkZGluZ0JvdHRvbTogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93SXRlbURpdn0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zaG93SXRlbVB9PkxBVU5DSDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd0l0ZW1JbmZvfT4xLzIyLzIyIEAgMTIgRVNUPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93SXRlbURpdn0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zaG93SXRlbVB9Pk5GVFM8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3dJdGVtSW5mb30+e21pbnRDb3VudH0gLyAxMDAwPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93SXRlbURpdn0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zaG93SXRlbVB9Pk1JTlQgUFJJQ0U8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3dJdGVtSW5mb30+MC4wNSBFVEg8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIHBhZGRpbmdUb3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWFjY2VudDIgdGV4dC1hY2NlbnQxIGhvdmVyOmJnLWFjY2VudDEgaG92ZXI6dGV4dC1hY2NlbnQyIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIHRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYmxhY2sgaXRhbGljXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1pbnRUb2tlbigpfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCAjZmU2ODEwIHNvbGlkXCIsXHJcbiAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIzNnJlbVwiXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE1JTlQgXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5taW50Q291bnR9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGl0YWxpY1wiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE2cHhcIiB9fT5cclxuICAgICAgICAgIE1BWCAyMCBQRVIgVFhcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNCByb3VuZGVkLTJ4bCBweC00IHB5LTNcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2VcIj5RdWFudGl0eTo8L3A+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy0zNiBvdXRsaW5lLW5vbmUgcm91bmRlZC0yeGwgYmctYWNjZW50NCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgbWF4PVwiMjBcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Y291bnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q291bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pbnRCdXR0b25cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCJcclxuXHJcbmZ1bmN0aW9uIFByb2plY3QoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3N1YmxvZ28ucG5nXCIgLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGUxfT5XSEFUIEFCT1VUPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGUyfT5USEUgUFJPSkVDVDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0RGV0YWlsfT5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWx9PlxyXG4gICAgICAgICAgICA8Rmlyc3RJdGVtIC8+XHJcbiAgICAgICAgICAgIHsvKiA8U2Vjb25kSXRlbSAvPiAqL31cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgZm9udFNpemU6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgIFB1ZGd5IFBlbmd1aW5zIGxhdW5jaGVkIG9uIEp1bHkgMjIsIDIwMjEuIEVhY2ggcGVuZ3VpbiBpcyB1bmlxdWVcclxuICAgICAgICAgICAgICBhbmQgbm8gdHdvIGFyZSBleGFjdGx5IGFsaWtlLlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIFRoZSBjb21iaW5hdGlvbiBvZiBhIFB1ZGd5IFBlbmd1aW5zIGFlc3RoZXRpY3Mgd2FzIHJhbmRvbWx5XHJcbiAgICAgICAgICAgICAgZ2VuZXJhdGVkIGZyb20gb3ZlciAxNTAgaGFuZCBkcmF3biB0cmFpdHMuXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgVGhlcmUgYXJlciA1IFB1ZGd5IFBlbmd1aW5zIHRoYXQgd2VyZSBjcmVhdGVkIGJ5IHRoZSBhcnRpc3QgYW5kIGRvXHJcbiAgICAgICAgICAgICAgbm90IGhhdmUgcmFuZG9tbHkgZ2VuZXJhdGVkIHRyYWl0cy4gVGhlc2UgNSBQdWRneSBQZW5ndWlucyBhcmVcclxuICAgICAgICAgICAgICBrbm93biBhcyB0aGUgbW9zdCByYXJlIGFuZCBpbmNsdWRlIGEgUHVkZ3kgUGVuZ3VpbiBpbiBhIGJhbmFuYVxyXG4gICAgICAgICAgICAgIHN1aXQsIGEgc2hhcmsgY29zdHVtZSwgYSBwaW5lYXBwbGUgc3VpdCwgYSBnaG9zdCBjb3N0dW1lLCBhbmQgb25lXHJcbiAgICAgICAgICAgICAgb2YgdGhlbSBpcyBldmUgZmFjaW5nIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24gb2YgYWxsIG90aGVyXHJcbiAgICAgICAgICAgICAgUGVuZ3VpbnMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBGYW1vdXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmFtb3VzXCI7XHJcbmltcG9ydCBGYW1pbHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmFtaWx5XCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2plY3RcIjtcclxuaW1wb3J0IE1pbnRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWludEJ1dHRvblwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc3R5bGUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgREFwcFByb3ZpZGVyIH0gZnJvbSBcIkB1c2VkYXBwL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlRXRoZXJzIH0gZnJvbSBcIkB1c2VkYXBwL2NvcmVcIjtcclxuaW1wb3J0IHsgZ2V0V2ViM0F1dG8sIGdldFdlYjMsIHdlYjNXYWxsZXRDb25uZWN0UHJvdmlkZXIgfSBmcm9tIFwiLi4vdXRpbC93ZWIzXCI7XHJcblxyXG5mdW5jdGlvbiBDb25uZWN0QnRuKHsgd2ViMywgc2V0V2ViMyB9KSB7XHJcbiAgY29uc3QgeyBhY3RpdmF0ZUJyb3dzZXJXYWxsZXQsIGFjY291bnQ6IF8gfSA9IHVzZUV0aGVycygpO1xyXG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKF8pO1xyXG5cclxuICBjb25zdCBoYW5kbGVXYWxsZXQgPSBhc3luYyAod2FsbGV0U291cmNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAod2FsbGV0U291cmNlID09PSBcIndjXCIpIHtcclxuICAgICAgICBpZiAod2ViM1dhbGxldENvbm5lY3RQcm92aWRlci5jb25uZWN0ZWQpIHtcclxuICAgICAgICAgIGF3YWl0IHdlYjNXYWxsZXRDb25uZWN0UHJvdmlkZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCB3ZWIzV2FsbGV0Q29ubmVjdFByb3ZpZGVyLmVuYWJsZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICB9XHJcbiAgICAgIGFjdGl2YXRlQnJvd3NlcldhbGxldCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB3ZWIzV2FsbGV0Q29ubmVjdFByb3ZpZGVyLmNsb3NlKCk7XHJcbiAgICAgIGFsZXJ0KFwiVW5hYmxlIHRvIGNvbm5lY3QhXCIpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2ViMyA9IGdldFdlYjMod2FsbGV0U291cmNlKTtcclxuXHJcbiAgICBzZXRXZWIzKHdlYjMpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoIXdlYjMpIHtcclxuICAgICAgICBhbGVydChcIlBsZWFzZSB1c2UgZGVza3RvcCBvciBEQXBwIGJyb3dzZXIgaWYgeW91IGFyZSBub3QgYWxyZWFkeS5cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXdlYjMuY3VycmVudFByb3ZpZGVyKSB7XHJcbiAgICAgICAgd2ViMyA9IGdldFdlYjMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3ZWIzLmV0aFxyXG4gICAgICAgICAgLmdldENoYWluSWQoKVxyXG4gICAgICAgICAgLnRoZW4oKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKE51bWJlcihlKSAhPT0gMSkge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIHN3aXRjaCB0byBFdGhlcmV1bSBtYWlubmV0IGluIHlvdXIgd2FsbGV0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgd2ViMy5jdXJyZW50UHJvdmlkZXIub24oXCJjaGFpbkNoYW5nZWRcIiwgKGNoYWluSWQpID0+IHtcclxuICAgICAgICAgICAgaWYgKE51bWJlcihjaGFpbklkKSAhPT0gMSkge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIHN3aXRjaCB0byBFdGhlcmV1bSBtYWlubmV0IGluIHlvdXIgd2FsbGV0XCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgd2ViMy5jdXJyZW50UHJvdmlkZXIub24oXCJhY2NvdW50c0NoYW5nZWRcIiwgKGFjY291bnRzKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEFjY291bnQoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoICYmIGFjY291bnRzWzBdKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHdlYjMuY3VycmVudFByb3ZpZGVyLm9uKFwiZGlzY29ubmVjdFwiLCAoY29kZSwgcmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEFjY291bnQobnVsbCk7XHJcbiAgICAgICAgICAgIHdlYjNXYWxsZXRDb25uZWN0UHJvdmlkZXIuY2xvc2UoKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIHNldEFjY291bnQoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoICYmIGFjY291bnRzWzBdKTtcclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuICB9LCBbd2ViM10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBibG9jayBwLTEgZm9udC1ib2xkIGRpc3BsYXktaG92ZXItdHJpZ2dlciBtZDpiZy1kYXJrIHRleHQtYWNjZW50IG1kOnJvdW5kZWQtbGcgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtZGFya2VyXCI+XHJcbiAgICAgIDxwXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnRuQ29ubmVjdH0gZm9udC1ib2xkIGJnLWFjY2VudDEgaG92ZXI6dGV4dC1hY2NlbnQxIGhvdmVyOmJnLWFjY2VudDIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgdGV4dC0zeGwgbWQ6dGV4dC0yeGxgfVxyXG4gICAgICA+XHJcbiAgICAgICAge2FjY291bnQgPyBgJHthY2NvdW50LnNsaWNlKDAsIDYpfS4uLiR7YWNjb3VudC5zbGljZSgtNil9YCA6IFwiQ29ubmVjdFwifVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheS1ob3Zlci10YXJnZXQgYWJzb2x1dGUgYmctYWNjZW50IHJvdW5kZWQtbGcgc2hhZG93LXhsIHB5LTEuNSB6LTUwXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnRuQ29ubmVjdH0gZm9udC1ib2xkIGJnLWFjY2VudDEgaG92ZXI6dGV4dC1hY2NlbnQxIGhvdmVyOmJnLWFjY2VudDIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgdGV4dC0yeGwgbWQ6dGV4dC14bGB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVXYWxsZXQobnVsbCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQnJvd3NlclxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ0bkNvbm5lY3R9IGZvbnQtYm9sZCBiZy1hY2NlbnQxIGhvdmVyOnRleHQtYWNjZW50MSBob3ZlcjpiZy1hY2NlbnQyIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIHRleHQtMnhsIG1kOnRleHQteGwgbXQtMWB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVXYWxsZXQoXCJ3Y1wiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBXYWxsZXRDb25uZWN0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZShnZXRXZWIzQXV0bygpKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFdlYjMoZ2V0V2ViM0F1dG8oKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERBcHBQcm92aWRlcj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJhc3NldHMvaW1hZ2VzL2Zhdmljb25fY2lyLmljb1wiIC8+XHJcbiAgICAgICAgPHRpdGxlPlF1aWQgVEtPIHYxPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImZhY2Vib29rLWRvbWFpbi12ZXJpZmljYXRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIjdicTlzZ3Y4a2c3bDlzaTUzdmFmN28wMWF6Y2I1N1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDE0XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja0Rpdn0+XHJcbiAgICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAzMHB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YCR7c3R5bGVzLm5hdmJhcn1gfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG10LTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL1RLT18yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjYwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8dWxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uYXZVSX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXNyLWlkPVwiM1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm5hdkxhYmVsfT5Ib21lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGFiZWx9PkFib3V0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGFiZWx9PkJlc3QgTW9tZW50czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm5hdkxhYmVsfT5GYW1pbHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5uYXZMYWJlbH0+RkFRPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPiAqL31cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6aW5saW5lLWJsb2NrIHRleHQtYWNjZW50NSBob3Zlcjp0ZXh0LWFjY2VudDEgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Rpc2NvcmQuZ2cvcXVpZGlrYVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBob3ZlcjpmaWxsLWN1cnJlbnQgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MCA1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0gNDEuNjI1IDEwLjc2OTUzMSBDIDM3LjY0NDUzMSA3LjU2NjQwNiAzMS4zNDc2NTYgNy4wMjM0MzggMzEuMDc4MTI1IDcuMDAzOTA2IEMgMzAuNjYwMTU2IDYuOTY4NzUgMzAuMjYxNzE5IDcuMjAzMTI1IDMwLjA4OTg0NCA3LjU4OTg0NCBDIDMwLjA3NDIxOSA3LjYxMzI4MSAyOS45Mzc1IDcuOTI5Njg4IDI5Ljc4NTE1NiA4LjQyMTg3NSBDIDMyLjQxNzk2OSA4Ljg2NzE4OCAzNS42NTIzNDQgOS43NjE3MTkgMzguNTc4MTI1IDExLjU3ODEyNSBDIDM5LjA0Njg3NSAxMS44NjcxODggMzkuMTkxNDA2IDEyLjQ4NDM3NSAzOC45MDIzNDQgMTIuOTUzMTI1IEMgMzguNzEwOTM4IDEzLjI2MTcxOSAzOC4zODY3MTkgMTMuNDI5Njg4IDM4LjA1MDc4MSAxMy40Mjk2ODggQyAzNy44NzEwOTQgMTMuNDI5Njg4IDM3LjY4NzUgMTMuMzc4OTA2IDM3LjUyMzQzOCAxMy4yNzczNDQgQyAzMi40OTIxODggMTAuMTU2MjUgMjYuMjEwOTM4IDEwIDI1IDEwIEMgMjMuNzg5MDYzIDEwIDE3LjUwMzkwNiAxMC4xNTYyNSAxMi40NzY1NjMgMTMuMjc3MzQ0IEMgMTIuMDA3ODEzIDEzLjU3MDMxMyAxMS4zOTA2MjUgMTMuNDI1NzgxIDExLjEwMTU2MyAxMi45NTcwMzEgQyAxMC44MDg1OTQgMTIuNDg0Mzc1IDEwLjk1MzEyNSAxMS44NzEwOTQgMTEuNDIxODc1IDExLjU3ODEyNSBDIDE0LjM0NzY1NiA5Ljc2NTYyNSAxNy41ODIwMzEgOC44NjcxODggMjAuMjE0ODQ0IDguNDI1NzgxIEMgMjAuMDYyNSA3LjkyOTY4OCAxOS45MjU3ODEgNy42MTcxODggMTkuOTE0MDYzIDcuNTg5ODQ0IEMgMTkuNzM4MjgxIDcuMjAzMTI1IDE5LjM0Mzc1IDYuOTYwOTM4IDE4LjkyMTg3NSA3LjAwMzkwNiBDIDE4LjY1MjM0NCA3LjAyMzQzOCAxMi4zNTU0NjkgNy41NjY0MDYgOC4zMjAzMTMgMTAuODEyNSBDIDYuMjE0ODQ0IDEyLjc2MTcxOSAyIDI0LjE1MjM0NCAyIDM0IEMgMiAzNC4xNzU3ODEgMi4wNDY4NzUgMzQuMzQzNzUgMi4xMzI4MTMgMzQuNDk2MDk0IEMgNS4wMzkwNjMgMzkuNjA1NDY5IDEyLjk3MjY1NiA0MC45NDE0MDYgMTQuNzgxMjUgNDEgQyAxNC43ODkwNjMgNDEgMTQuODAwNzgxIDQxIDE0LjgxMjUgNDEgQyAxNS4xMzI4MTMgNDEgMTUuNDMzNTk0IDQwLjg0NzY1NiAxNS42MjEwOTQgNDAuNTg5ODQ0IEwgMTcuNDQ5MjE5IDM4LjA3NDIxOSBDIDEyLjUxNTYyNSAzNi44MDA3ODEgOS45OTYwOTQgMzQuNjM2NzE5IDkuODUxNTYzIDM0LjUwNzgxMyBDIDkuNDM3NSAzNC4xNDQ1MzEgOS4zOTg0MzggMzMuNTExNzE5IDkuNzY1NjI1IDMzLjA5NzY1NiBDIDEwLjEyODkwNiAzMi42ODM1OTQgMTAuNzYxNzE5IDMyLjY0NDUzMSAxMS4xNzU3ODEgMzMuMDA3ODEzIEMgMTEuMjM0Mzc1IDMzLjA2MjUgMTUuODc1IDM3IDI1IDM3IEMgMzQuMTQwNjI1IDM3IDM4Ljc4MTI1IDMzLjA0Njg3NSAzOC44MjgxMjUgMzMuMDA3ODEzIEMgMzkuMjQyMTg4IDMyLjY0ODQzOCAzOS44NzEwOTQgMzIuNjgzNTk0IDQwLjIzODI4MSAzMy4xMDE1NjMgQyA0MC42MDE1NjMgMzMuNTE1NjI1IDQwLjU2MjUgMzQuMTQ0NTMxIDQwLjE0ODQzOCAzNC41MDc4MTMgQyA0MC4wMDM5MDYgMzQuNjM2NzE5IDM3LjQ4NDM3NSAzNi44MDA3ODEgMzIuNTUwNzgxIDM4LjA3NDIxOSBMIDM0LjM3ODkwNiA0MC41ODk4NDQgQyAzNC41NjY0MDYgNDAuODQ3NjU2IDM0Ljg2NzE4OCA0MSAzNS4xODc1IDQxIEMgMzUuMTk5MjE5IDQxIDM1LjIxMDkzOCA0MSAzNS4yMTg3NSA0MSBDIDM3LjAyNzM0NCA0MC45NDE0MDYgNDQuOTYwOTM4IDM5LjYwNTQ2OSA0Ny44NjcxODggMzQuNDk2MDk0IEMgNDcuOTUzMTI1IDM0LjM0Mzc1IDQ4IDM0LjE3NTc4MSA0OCAzNCBDIDQ4IDI0LjE1MjM0NCA0My43ODUxNTYgMTIuNzYxNzE5IDQxLjYyNSAxMC43Njk1MzEgWiBNIDE4LjUgMzAgQyAxNi41NjY0MDYgMzAgMTUgMjguMjEwOTM4IDE1IDI2IEMgMTUgMjMuNzg5MDYzIDE2LjU2NjQwNiAyMiAxOC41IDIyIEMgMjAuNDMzNTk0IDIyIDIyIDIzLjc4OTA2MyAyMiAyNiBDIDIyIDI4LjIxMDkzOCAyMC40MzM1OTQgMzAgMTguNSAzMCBaIE0gMzEuNSAzMCBDIDI5LjU2NjQwNiAzMCAyOCAyOC4yMTA5MzggMjggMjYgQyAyOCAyMy43ODkwNjMgMjkuNTY2NDA2IDIyIDMxLjUgMjIgQyAzMy40MzM1OTQgMjIgMzUgMjMuNzg5MDYzIDM1IDI2IEMgMzUgMjguMjEwOTM4IDMzLjQzMzU5NCAzMCAzMS41IDMwIFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZS1ibG9jayB0ZXh0LWFjY2VudDUgaG92ZXI6dGV4dC1hY2NlbnQxIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mYWNlYm9vay5jb20vZ3JvdXBzL3F1aWRpa2FcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgaG92ZXI6ZmlsbC1jdXJyZW50IHRyYW5zaXRpb24gZHVyYXRpb24tMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTAgNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjUsM0MxMi44NSwzLDMsMTIuODUsMywyNWMwLDExLjAzLDguMTI1LDIwLjEzNywxOC43MTIsMjEuNzI4VjMwLjgzMWgtNS40NDN2LTUuNzgzaDUuNDQzdi0zLjg0OCBjMC02LjM3MSwzLjEwNC05LjE2OCw4LjM5OS05LjE2OGMyLjUzNiwwLDMuODc3LDAuMTg4LDQuNTEyLDAuMjc0djUuMDQ4aC0zLjYxMmMtMi4yNDgsMC0zLjAzMywyLjEzMS0zLjAzMyw0LjUzM3YzLjE2MWg2LjU4OCBsLTAuODk0LDUuNzgzaC01LjY5NHYxNS45NDRDMzguNzE2LDQ1LjMxOCw0NywzNi4xMzcsNDcsMjVDNDcsMTIuODUsMzcuMTUsMywyNSwzelwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6aW5saW5lLWJsb2NrIHRleHQtYWNjZW50NSBob3Zlcjp0ZXh0LWFjY2VudDEgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3F1aWRpa2F0b2tlblwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBob3ZlcjpmaWxsLWN1cnJlbnQgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMCAzMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCIxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI4LDYuOTM3Yy0wLjk1NywwLjQyNS0xLjk4NSwwLjcxMS0zLjA2NCwwLjg0YzEuMTAyLTAuNjYsMS45NDctMS43MDUsMi4zNDUtMi45NTFjLTEuMDMsMC42MTEtMi4xNzIsMS4wNTUtMy4zODgsMS4yOTUgYy0wLjk3My0xLjAzNy0yLjM1OS0xLjY4NS0zLjg5My0xLjY4NWMtMi45NDYsMC01LjMzNCwyLjM4OS01LjMzNCw1LjMzNGMwLDAuNDE4LDAuMDQ4LDAuODI2LDAuMTM4LDEuMjE1IGMtNC40MzMtMC4yMjItOC4zNjMtMi4zNDYtMTAuOTk1LTUuNTc0QzMuMzUxLDYuMTk5LDMuMDg4LDcuMTE1LDMuMDg4LDguMDk0YzAsMS44NSwwLjk0MSwzLjQ4MywyLjM3Miw0LjQzOSBjLTAuODc0LTAuMDI4LTEuNjk3LTAuMjY4LTIuNDE2LTAuNjY3YzAsMC4wMjMsMCwwLjA0NCwwLDAuMDY3YzAsMi41ODUsMS44MzgsNC43NDEsNC4yNzksNS4yMyBjLTAuNDQ3LDAuMTIyLTAuOTE5LDAuMTg3LTEuNDA2LDAuMTg3Yy0wLjM0MywwLTAuNjc4LTAuMDM0LTEuMDAzLTAuMDk1YzAuNjc5LDIuMTE5LDIuNjQ5LDMuNjYyLDQuOTgzLDMuNzA1IGMtMS44MjUsMS40MzEtNC4xMjUsMi4yODQtNi42MjUsMi4yODRjLTAuNDMsMC0wLjg1NS0wLjAyNS0xLjI3My0wLjA3NWMyLjM2MSwxLjUxMyw1LjE2NCwyLjM5Niw4LjE3NywyLjM5NiBjOS44MTIsMCwxNS4xNzYtOC4xMjgsMTUuMTc2LTE1LjE3N2MwLTAuMjMxLTAuMDA1LTAuNDYxLTAuMDE1LTAuNjlDMjYuMzgsOC45NDUsMjcuMjg1LDguMDA2LDI4LDYuOTM3elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPENvbm5lY3RCdG4gd2ViMz17d2ViM30gc2V0V2ViMz17c2V0V2ViM30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL1RLT19DT1ZFUi5qcGVnXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gbXQtNiBtYi0xMiByb3VuZGVkLTJ4bFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGYW1vdXMgLz5cclxuXHJcbiAgICAgICAgICAgIDxNaW50QnV0dG9uIHdlYjM9e3dlYjN9IC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZlNjgxMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBUS09cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5rbm9ja291dHN9PlRFTlRBQ0xFIEtOT0NLT1VUOjwvcD5cclxuICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZlNjgxMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjkuNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi0yMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFVOTE9DSyBUSEUgWU9PTU9PVEFcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDEsMDAwIGNvbGxlY3RpYmxlIHNxdWlkIHZlcnN1cyBkb2cga25vY2tvdXQgc2NlbmVzIG9uIHRoZVxyXG4gICAgICAgICAgICAgICAgICBFdGhlcmV1bSBibG9ja2NoYWluLiBJbnNwaXJlZCBieSBBbGkgdnMgTGlzdG9uIC0tIE1heSAyNSxcclxuICAgICAgICAgICAgICAgICAgMTk2NS4gVW5sb2NrIHRoZSBZT09NT09UQS4gTWFkZSB1cCBvZiAxNDQgdHJhaXRzIHdpdGggYSBmZXdcclxuICAgICAgICAgICAgICAgICAgYmVpbmcgb25lIG9mIG9uZXMuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT48L2Rpdj5cclxuICAgICAgICAgICAgPEZhbWlseSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZlNjgxMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiODAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgV0VMQ09NRSBUTyBUSEUgWU9PTU9PVEFcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC00IG1kOnNwYWNlLXktMCBzcGFjZS15LTQgcGItMTYgbWQ6bXgtMCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL24xLnBuZ1wiIGNsYXNzTmFtZT1cInctNzIgaC1hdXRvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbjIucG5nXCIgY2xhc3NOYW1lPVwidy03MiBoLWF1dG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9uMy5wbmdcIiBjbGFzc05hbWU9XCJ3LTcyIGgtYXV0b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL240LnBuZ1wiIGNsYXNzTmFtZT1cInctNzIgaC1hdXRvXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0RBcHBQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiXHJcbmltcG9ydCBXYWxsZXRDb25uZWN0UHJvdmlkZXIgZnJvbSBcIkB3YWxsZXRjb25uZWN0L3dlYjMtcHJvdmlkZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHdlYjNXYWxsZXRDb25uZWN0UHJvdmlkZXIgPSBuZXcgV2FsbGV0Q29ubmVjdFByb3ZpZGVyKHtcclxuICBpbmZ1cmFJZDogXCJhZjJkM2FkOWQ2YTQ0YTE4YmQzZWI3Mjk2ZmMwNDRhOVwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWIzQXV0bygpIHtcclxuICBsZXQgd2ViMyA9IG51bGxcclxuXHJcbiAgdHJ5IHtcclxuICAgIGxldCBwcm92aWRlciA9IHdpbmRvdy5ldGhlcmV1bVxyXG5cclxuICAgIGlmICghcHJvdmlkZXIgJiYgd2ViM1dhbGxldENvbm5lY3RQcm92aWRlci5jb25uZWN0ZWQpIHtcclxuICAgICAgcHJvdmlkZXIgPSB3ZWIzV2FsbGV0Q29ubmVjdFByb3ZpZGVyXHJcbiAgICB9XHJcbiAgXHJcbiAgICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIElnbm9yZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHdlYjNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlYjMod2FsbGV0VHlwZSkge1xyXG4gIGxldCBwcm92aWRlciA9IHdpbmRvdy5ldGhlcmV1bVxyXG5cclxuICBpZiAod2FsbGV0VHlwZSA9PT0gJ3djJykge1xyXG4gICAgcHJvdmlkZXIgPSB3ZWIzV2FsbGV0Q29ubmVjdFByb3ZpZGVyXHJcbiAgfVxyXG5cclxuICBjb25zdCB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpXHJcblxyXG4gIHJldHVybiB3ZWIzXHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VjdGlvbjJcIjogXCJzdHlsZV9zZWN0aW9uMl9fMkRFQTdcIixcblx0XCJwYW5lbFwiOiBcInN0eWxlX3BhbmVsX18yMlZnV1wiLFxuXHRcImJ0bkxvZ2luTGF5b3V0XCI6IFwic3R5bGVfYnRuTG9naW5MYXlvdXRfXzI4SFk2XCIsXG5cdFwidGFibWVudVwiOiBcInN0eWxlX3RhYm1lbnVfX2RLYjJJXCIsXG5cdFwibWFudUJhclwiOiBcInN0eWxlX21hbnVCYXJfXzIyWnlpXCIsXG5cdFwiYnRuTG9naW5cIjogXCJzdHlsZV9idG5Mb2dpbl9fMkJhVnBcIixcblx0XCJiYWNrRGl2XCI6IFwic3R5bGVfYmFja0Rpdl9fMW1HZDhcIixcblx0XCJ0YWJCdG5cIjogXCJzdHlsZV90YWJCdG5fXzNvS3piXCIsXG5cdFwidGFiQnRuMVwiOiBcInN0eWxlX3RhYkJ0bjFfXzFXTmlwXCIsXG5cdFwidGFiUGFuZWxcIjogXCJzdHlsZV90YWJQYW5lbF9fM2p5UV9cIixcblx0XCJtZW51SXRlbVwiOiBcInN0eWxlX21lbnVJdGVtX18yd1RLZlwiLFxuXHRcImxvYWRIaWRkZW5cIjogXCJzdHlsZV9sb2FkSGlkZGVuX194b0JQMFwiLFxuXHRcIm5hdlVJXCI6IFwic3R5bGVfbmF2VUlfXzE0eHkwXCIsXG5cdFwibmF2TGFiZWxcIjogXCJzdHlsZV9uYXZMYWJlbF9fQXhJRzNcIixcblx0XCJidG5Db25uZWN0XCI6IFwic3R5bGVfYnRuQ29ubmVjdF9fbURXUnRcIixcblx0XCJiYWNraW1nXCI6IFwic3R5bGVfYmFja2ltZ19fM2dYQ3dcIixcblx0XCJpbWdXaWR0aFwiOiBcInN0eWxlX2ltZ1dpZHRoX18xcC1JWVwiLFxuXHRcInBlbmd1aW5JbWdcIjogXCJzdHlsZV9wZW5ndWluSW1nX18ydWtHR1wiLFxuXHRcInBlbmd1aW5JbWdUYWdcIjogXCJzdHlsZV9wZW5ndWluSW1nVGFnX18zQUpuc1wiLFxuXHRcInNob3dJdGVtRGl2XCI6IFwic3R5bGVfc2hvd0l0ZW1EaXZfXzJuZjZnXCIsXG5cdFwiaW5wdXROdW1iZXJcIjogXCJzdHlsZV9pbnB1dE51bWJlcl9fMTRQZ3RcIixcblx0XCJzaG93SXRlbVBcIjogXCJzdHlsZV9zaG93SXRlbVBfXzNWZWFEXCIsXG5cdFwic2hvd0l0ZW1JbmZvXCI6IFwic3R5bGVfc2hvd0l0ZW1JbmZvX18zSnM5NVwiLFxuXHRcInVubG9ja1wiOiBcInN0eWxlX3VubG9ja19fMm9wYlJcIixcblx0XCJrbm9ja291dHNcIjogXCJzdHlsZV9rbm9ja291dHNfX01HQjFyXCIsXG5cdFwiaW1hZ2VfZGVzY3JpcHRpb25cIjogXCJzdHlsZV9pbWFnZV9kZXNjcmlwdGlvbl9fMk9VbnRcIixcblx0XCJmYW1vdXNcIjogXCJzdHlsZV9mYW1vdXNfXzdsRGdrXCIsXG5cdFwiYm9yZGVyXCI6IFwic3R5bGVfYm9yZGVyX18yTXUyYlwiLFxuXHRcIm1vbmtleV93aWR0aFwiOiBcInN0eWxlX21vbmtleV93aWR0aF9fMUNYWGFcIixcblx0XCJmYWlyXCI6IFwic3R5bGVfZmFpcl9fMXplVE5cIixcblx0XCJtaW50Q291bnRcIjogXCJzdHlsZV9taW50Q291bnRfX0w5NVlWXCIsXG5cdFwiYnV5XCI6IFwic3R5bGVfYnV5X18ya2k4T1wiLFxuXHRcIm9wZW5pbmdcIjogXCJzdHlsZV9vcGVuaW5nX18yNXRna1wiLFxuXHRcInN1YnRpdGxlMlwiOiBcInN0eWxlX3N1YnRpdGxlMl9fMVhXRFRcIixcblx0XCJzdWJ0aXRsZTFcIjogXCJzdHlsZV9zdWJ0aXRsZTFfX09GMUhpXCIsXG5cdFwiZmFtaWx5XCI6IFwic3R5bGVfZmFtaWx5X18zRmNiTlwiLFxuXHRcInRlYW1fbWVtYmVyc1wiOiBcInN0eWxlX3RlYW1fbWVtYmVyc19fM2pZYk9cIixcblx0XCJ0ZWFtX21lbWJlcl9waWNcIjogXCJzdHlsZV90ZWFtX21lbWJlcl9waWNfXzFVYlI2XCIsXG5cdFwibmF2YmFyXCI6IFwic3R5bGVfbmF2YmFyX19RNjdCdFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHVzZWRhcHAvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2FsbGV0Y29ubmVjdC93ZWIzLXByb3ZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsIndhcm4iLCJwIiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwibWFwIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwidiIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsImVudW1lcmFibGUiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInB1c2giLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwibGVuZ3RoIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJob3N0bmFtZSIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJSb3ciLCJDb2wiLCJGYW1pbHkiLCJjb2xvciIsImZhaXIiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiYm9yZGVyIiwiZmFtaWx5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImFsaWduQ29udGVudCIsInRlYW1fbWVtYmVyX3BpYyIsImltYWdlX2Rlc2NyaXB0aW9uIiwiRmFtb3VzIiwiZmFtb3VzIiwiUmVhY3QiLCJKdXN0Y3ViZXMiLCJDb250YWluZXIiLCJNaW50QnV0dG9uIiwid2ViMyIsImNvdW50Iiwic2V0Q291bnQiLCJtaW50Q291bnQiLCJzZXRNaW50Q291bnQiLCJhbGVydCIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0IiwiZXRoIiwiQ29udHJhY3QiLCJhYmkiLCJtZXRob2RzIiwidG90YWxTdXBwbHkiLCJjYWxsIiwibG9nIiwibWludFRva2VuIiwiX2FjY291bnQiLCJnZXRBY2NvdW50cyIsInByaWNlIiwibWludCIsInNlbmQiLCJmcm9tIiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsInNob3dJdGVtRGl2Iiwic2hvd0l0ZW1QIiwic2hvd0l0ZW1JbmZvIiwidGV4dEFsaWduIiwicGFkZGluZ1RvcCIsImN1cnNvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsIlByb2plY3QiLCJzdWJ0aXRsZTEiLCJzdWJ0aXRsZTIiLCJwcm9qZWN0RGV0YWlsIiwiY2Fyb3VzZWwiLCJIZWFkIiwiREFwcFByb3ZpZGVyIiwidXNlRXRoZXJzIiwiZ2V0V2ViM0F1dG8iLCJnZXRXZWIzIiwid2ViM1dhbGxldENvbm5lY3RQcm92aWRlciIsIkNvbm5lY3RCdG4iLCJzZXRXZWIzIiwiYWN0aXZhdGVCcm93c2VyV2FsbGV0IiwiYWNjb3VudCIsInNldEFjY291bnQiLCJoYW5kbGVXYWxsZXQiLCJ3YWxsZXRTb3VyY2UiLCJjb25uZWN0ZWQiLCJlbmFibGUiLCJjbG9zZSIsImN1cnJlbnRQcm92aWRlciIsImdldENoYWluSWQiLCJOdW1iZXIiLCJjaGFpbklkIiwiYWNjb3VudHMiLCJjb2RlIiwicmVhc29uIiwiYnRuQ29ubmVjdCIsIkhvbWUiLCJiYWNrRGl2IiwibWFyZ2luIiwibmF2YmFyIiwiaGVpZ2h0IiwiZm9udFN0eWxlIiwia25vY2tvdXRzIiwiV2ViMyIsIldhbGxldENvbm5lY3RQcm92aWRlciIsImluZnVyYUlkIiwicHJvdmlkZXIiLCJldGhlcmV1bSIsIndhbGxldFR5cGUiXSwic291cmNlUm9vdCI6IiJ9