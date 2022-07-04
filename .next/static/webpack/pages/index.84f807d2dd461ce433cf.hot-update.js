"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Famous__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Famous */ "./src/components/Famous.js");
/* harmony import */ var _components_Family__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Family */ "./src/components/Family.js");
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Project */ "./src/components/Project.js");
/* harmony import */ var _components_MintButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MintButton */ "./src/components/MintButton.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/style.module.css */ "./src/styles/style.module.css");
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @usedapp/core */ "./node_modules/@usedapp/core/dist/esm/src/index.js");
/* harmony import */ var _util_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/web3 */ "./src/util/web3.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\work\\Blockchain\\cryptoking-nft\\quidverse-frontend\\src\\pages\\index.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

 // Components














function ConnectBtn(_ref) {
  _s();

  var web3 = _ref.web3,
      setWeb3 = _ref.setWeb3;

  var _useEthers = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_12__.useEthers)(),
      activateBrowserWallet = _useEthers.activateBrowserWallet,
      _ = _useEthers.account;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_),
      account = _useState[0],
      setAccount = _useState[1];

  var handleWallet = /*#__PURE__*/function () {
    var _ref2 = (0,E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(walletSource) {
      return E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(walletSource === "wc")) {
                _context.next = 9;
                break;
              }

              if (!_util_web3__WEBPACK_IMPORTED_MODULE_11__.web3WalletConnectProvider.connected) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return _util_web3__WEBPACK_IMPORTED_MODULE_11__.web3WalletConnectProvider.disconnect();

            case 5:
              _context.next = 7;
              return _util_web3__WEBPACK_IMPORTED_MODULE_11__.web3WalletConnectProvider.enable();

            case 7:
              _context.next = 9;
              break;

            case 9:
              activateBrowserWallet();
              _context.next = 17;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              _util_web3__WEBPACK_IMPORTED_MODULE_11__.web3WalletConnectProvider.close();
              alert("Unable to connect!");
              window.location.reload();

            case 17:
              web3 = (0,_util_web3__WEBPACK_IMPORTED_MODULE_11__.getWeb3)(walletSource);
              setWeb3(web3);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function handleWallet(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    (0,E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var accounts;
      return E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (web3) {
                _context2.next = 4;
                break;
              }

              alert("Please use desktop or DApp browser if you are not already.");
              _context2.next = 14;
              break;

            case 4:
              if (web3.currentProvider) {
                _context2.next = 8;
                break;
              }

              web3 = (0,_util_web3__WEBPACK_IMPORTED_MODULE_11__.getWeb3)();
              _context2.next = 14;
              break;

            case 8:
              web3.eth.getChainId().then(function (e) {
                if (Number(e) !== 1) {
                  alert("Please switch to Ethereum mainnet in your wallet");
                }
              })["catch"](function (err) {
                console.log(err);
              });

              try {
                web3.currentProvider.on("chainChanged", function (chainId) {
                  if (Number(chainId) !== 1) {
                    alert("Please switch to Ethereum mainnet in your wallet");
                  } else {
                    window.location.reload();
                  }
                });
                web3.currentProvider.on("accountsChanged", function (accounts) {
                  setAccount(accounts && accounts.length && accounts[0]);
                });
                web3.currentProvider.on("disconnect", function (code, reason) {
                  setAccount(null);
                  _util_web3__WEBPACK_IMPORTED_MODULE_11__.web3WalletConnectProvider.close();
                  window.location.reload();
                });
              } catch (e) {}

              _context2.next = 12;
              return web3.eth.getAccounts();

            case 12:
              accounts = _context2.sent;
              setAccount(accounts && accounts.length && accounts[0]);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }, [web3]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative block p-1 font-bold display-hover-trigger md:bg-dark text-accent md:rounded-lg hover:bg-accent hover:text-darker",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "".concat((_styles_style_module_css__WEBPACK_IMPORTED_MODULE_13___default().btnConnect), " font-bold bg-accent1 hover:text-accent1 hover:bg-accent2 transition duration-150 text-3xl md:text-2xl"),
      children: account ? "".concat(account.slice(0, 6), "...").concat(account.slice(-6)) : "Connect"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "display-hover-target absolute bg-accent rounded-lg shadow-xl py-1.5 z-50",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "".concat((_styles_style_module_css__WEBPACK_IMPORTED_MODULE_13___default().btnConnect), " font-bold bg-accent1 hover:text-accent1 hover:bg-accent2 transition duration-150 text-2xl md:text-xl"),
        onClick: function onClick() {
          return handleWallet(null);
        },
        children: "Browser"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "".concat((_styles_style_module_css__WEBPACK_IMPORTED_MODULE_13___default().btnConnect), " font-bold bg-accent1 hover:text-accent1 hover:bg-accent2 transition duration-150 text-2xl md:text-xl mt-1"),
        onClick: function onClick() {
          return handleWallet("wc");
        },
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

_s(ConnectBtn, "X3ocvb3LwhpfBKouGOLc7IMWjJw=", false, function () {
  return [_usedapp_core__WEBPACK_IMPORTED_MODULE_12__.useEthers];
});

_c = ConnectBtn;

function Home() {
  _s2();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,_util_web3__WEBPACK_IMPORTED_MODULE_11__.getWeb3Auto)()),
      web3 = _useState2[0],
      setWeb3 = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    setWeb3((0,_util_web3__WEBPACK_IMPORTED_MODULE_11__.getWeb3Auto)());
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_usedapp_core__WEBPACK_IMPORTED_MODULE_12__.DAppProvider, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
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
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_13___default().backDiv),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_14__.Container, {
          style: {
            margin: "0 auto",
            padding: "0 30px",
            marginBottom: "0px"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
            className: "".concat((_styles_style_module_css__WEBPACK_IMPORTED_MODULE_13___default().navbar)),
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Famous__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MintButton__WEBPACK_IMPORTED_MODULE_7__.default, {
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
                  className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_13___default().knockouts),
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Family__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
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

_s2(Home, "jLPzvnOByCaQtaoaDPb2YSQpesA=");

_c2 = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c, _c2;

$RefreshReg$(_c, "ConnectBtn");
$RefreshReg$(_c2, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODRmODA3ZDJkZDQ2MWNlNDMzY2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTaUIsVUFBVCxPQUF1QztBQUFBOztBQUFBLE1BQWpCQyxJQUFpQixRQUFqQkEsSUFBaUI7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQUEsbUJBQ1NOLHlEQUFTLEVBRGxCO0FBQUEsTUFDN0JPLHFCQUQ2QixjQUM3QkEscUJBRDZCO0FBQUEsTUFDR0MsQ0FESCxjQUNOQyxPQURNOztBQUFBLGtCQUVQckIsK0NBQVEsQ0FBQ29CLENBQUQsQ0FGRDtBQUFBLE1BRTlCQyxPQUY4QjtBQUFBLE1BRXJCQyxVQUZxQjs7QUFJckMsTUFBTUMsWUFBWTtBQUFBLDhWQUFHLGlCQUFPQyxZQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQkFFYkEsWUFBWSxLQUFLLElBRko7QUFBQTtBQUFBO0FBQUE7O0FBQUEsbUJBR1hULDRFQUhXO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBSVBBLDZFQUFBLEVBSk87O0FBQUE7QUFBQTtBQUFBLHFCQU1UQSx5RUFBQSxFQU5TOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQVNqQkksY0FBQUEscUJBQXFCO0FBVEo7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFXakJKLGNBQUFBLHdFQUFBO0FBQ0FjLGNBQUFBLEtBQUssQ0FBQyxvQkFBRCxDQUFMO0FBQ0FDLGNBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7O0FBYmlCO0FBZ0JuQmYsY0FBQUEsSUFBSSxHQUFHSCxvREFBTyxDQUFDVSxZQUFELENBQWQ7QUFFQU4sY0FBQUEsT0FBTyxDQUFDRCxJQUFELENB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QUFBO0FBQUE7QUFBQSxvQkFERixlQWNFO0FBQUssdUJBQVMsRUFBQyxxRkFBZjtBQUFBLHNDQUNFO0FBQUssbUJBQUcsRUFBQyx1QkFBVDtBQUFpQyx5QkFBUyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRTtBQUFLLG1CQUFHLEVBQUMsdUJBQVQ7QUFBaUMseUJBQVMsRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLGVBR0U7QUFBSyxtQkFBRyxFQUFDLHVCQUFUO0FBQWlDLHlCQUFTLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRixlQUlFO0FBQUssbUJBQUcsRUFBQyx1QkFBVDtBQUFpQyx5QkFBUyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEvSUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlMRDs7SUFoTVFYOztNQUFBQTtBQWtNVCwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgRmFtb3VzIGZyb20gXCIuLi9jb21wb25lbnRzL0ZhbW91c1wiO1xyXG5pbXBvcnQgRmFtaWx5IGZyb20gXCIuLi9jb21wb25lbnRzL0ZhbWlseVwiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0XCI7XHJcbmltcG9ydCBNaW50QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL01pbnRCdXR0b25cIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIENvbnRhaW5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IERBcHBQcm92aWRlciB9IGZyb20gXCJAdXNlZGFwcC9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZUV0aGVycyB9IGZyb20gXCJAdXNlZGFwcC9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFdlYjNBdXRvLCBnZXRXZWIzLCB3ZWIzV2FsbGV0Q29ubmVjdFByb3ZpZGVyIH0gZnJvbSBcIi4uL3V0aWwvd2ViM1wiO1xyXG5cclxuZnVuY3Rpb24gQ29ubmVjdEJ0bih7IHdlYjMsIHNldFdlYjMgfSkge1xyXG4gIGNvbnN0IHsgYWN0aXZhdGVCcm93c2VyV2FsbGV0LCBhY2NvdW50OiBfIH0gPSB1c2VFdGhlcnMoKTtcclxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShfKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlV2FsbGV0ID0gYXN5bmMgKHdhbGxldFNvdXJjZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHdhbGxldFNvdXJjZSA9PT0gXCJ3Y1wiKSB7XHJcbiAgICAgICAgaWYgKHdlYjNXYWxsZXRDb25uZWN0UHJvdmlkZXIuY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICBhd2FpdCB3ZWIzV2FsbGV0Q29ubmVjdFByb3ZpZGVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgd2ViM1dhbGxldENvbm5lY3RQcm92aWRlci5lbmFibGUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgfVxyXG4gICAgICBhY3RpdmF0ZUJyb3dzZXJXYWxsZXQoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgd2ViM1dhbGxldENvbm5lY3RQcm92aWRlci5jbG9zZSgpO1xyXG4gICAgICBhbGVydChcIlVuYWJsZSB0byBjb25uZWN0IVwiKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHdlYjMgPSBnZXRXZWIzKHdhbGxldFNvdXJjZSk7XHJcblxyXG4gICAgc2V0V2ViMyh3ZWIzKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCF3ZWIzKSB7XHJcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgdXNlIGRlc2t0b3Agb3IgREFwcCBicm93c2VyIGlmIHlvdSBhcmUgbm90IGFscmVhZHkuXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKCF3ZWIzLmN1cnJlbnRQcm92aWRlcikge1xyXG4gICAgICAgIHdlYjMgPSBnZXRXZWIzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2ViMy5ldGhcclxuICAgICAgICAgIC5nZXRDaGFpbklkKClcclxuICAgICAgICAgIC50aGVuKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChOdW1iZXIoZSkgIT09IDEpIHtcclxuICAgICAgICAgICAgICBhbGVydChcIlBsZWFzZSBzd2l0Y2ggdG8gRXRoZXJldW0gbWFpbm5ldCBpbiB5b3VyIHdhbGxldFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHdlYjMuY3VycmVudFByb3ZpZGVyLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIChjaGFpbklkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChOdW1iZXIoY2hhaW5JZCkgIT09IDEpIHtcclxuICAgICAgICAgICAgICBhbGVydChcIlBsZWFzZSBzd2l0Y2ggdG8gRXRoZXJldW0gbWFpbm5ldCBpbiB5b3VyIHdhbGxldFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHdlYjMuY3VycmVudFByb3ZpZGVyLm9uKFwiYWNjb3VudHNDaGFuZ2VkXCIsIChhY2NvdW50cykgPT4ge1xyXG4gICAgICAgICAgICBzZXRBY2NvdW50KGFjY291bnRzICYmIGFjY291bnRzLmxlbmd0aCAmJiBhY2NvdW50c1swXSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB3ZWIzLmN1cnJlbnRQcm92aWRlci5vbihcImRpc2Nvbm5lY3RcIiwgKGNvZGUsIHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICBzZXRBY2NvdW50KG51bGwpO1xyXG4gICAgICAgICAgICB3ZWIzV2FsbGV0Q29ubmVjdFByb3ZpZGVyLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcblxyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICBzZXRBY2NvdW50KGFjY291bnRzICYmIGFjY291bnRzLmxlbmd0aCAmJiBhY2NvdW50c1swXSk7XHJcbiAgICAgIH1cclxuICAgIH0pKCk7XHJcbiAgfSwgW3dlYjNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmxvY2sgcC0xIGZvbnQtYm9sZCBkaXNwbGF5LWhvdmVyLXRyaWdnZXIgbWQ6YmctZGFyayB0ZXh0LWFjY2VudCBtZDpyb3VuZGVkLWxnIGhvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWRhcmtlclwiPlxyXG4gICAgICA8cFxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ0bkNvbm5lY3R9IGZvbnQtYm9sZCBiZy1hY2NlbnQxIGhvdmVyOnRleHQtYWNjZW50MSBob3ZlcjpiZy1hY2NlbnQyIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIHRleHQtM3hsIG1kOnRleHQtMnhsYH1cclxuICAgICAgPlxyXG4gICAgICAgIHthY2NvdW50ID8gYCR7YWNjb3VudC5zbGljZSgwLCA2KX0uLi4ke2FjY291bnQuc2xpY2UoLTYpfWAgOiBcIkNvbm5lY3RcIn1cclxuICAgICAgPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXktaG92ZXItdGFyZ2V0IGFic29sdXRlIGJnLWFjY2VudCByb3VuZGVkLWxnIHNoYWRvdy14bCBweS0xLjUgei01MFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ0bkNvbm5lY3R9IGZvbnQtYm9sZCBiZy1hY2NlbnQxIGhvdmVyOnRleHQtYWNjZW50MSBob3ZlcjpiZy1hY2NlbnQyIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIHRleHQtMnhsIG1kOnRleHQteGxgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlV2FsbGV0KG51bGwpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEJyb3dzZXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5idG5Db25uZWN0fSBmb250LWJvbGQgYmctYWNjZW50MSBob3Zlcjp0ZXh0LWFjY2VudDEgaG92ZXI6YmctYWNjZW50MiB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCB0ZXh0LTJ4bCBtZDp0ZXh0LXhsIG10LTFgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlV2FsbGV0KFwid2NcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgV2FsbGV0Q29ubmVjdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUoZ2V0V2ViM0F1dG8oKSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRXZWIzKGdldFdlYjNBdXRvKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEQXBwUHJvdmlkZXI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiYXNzZXRzL2ltYWdlcy9mYXZpY29uX2Npci5pY29cIiAvPlxyXG4gICAgICAgIDx0aXRsZT5RdWlkIFRLTyB2MTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJmYWNlYm9vay1kb21haW4tdmVyaWZpY2F0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCI3YnE5c2d2OGtnN2w5c2k1M3ZhZjdvMDFhemNiNTdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDAxNFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tEaXZ9PlxyXG4gICAgICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgMzBweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIwcHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZiYXJ9YH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBtdC02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTpmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9US09fMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI2MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHVsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmF2VUl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1zci1pZD1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5uYXZMYWJlbH0+SG9tZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm5hdkxhYmVsfT5BYm91dDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm5hdkxhYmVsfT5CZXN0IE1vbWVudHM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5uYXZMYWJlbH0+RmFtaWx5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGFiZWx9PkZBUTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZS1ibG9jayB0ZXh0LWFjY2VudDUgaG92ZXI6dGV4dC1hY2NlbnQxIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kaXNjb3JkLmdnL3F1aWRpa2FcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgaG92ZXI6ZmlsbC1jdXJyZW50IHRyYW5zaXRpb24gZHVyYXRpb24tMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTAgNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDQxLjYyNSAxMC43Njk1MzEgQyAzNy42NDQ1MzEgNy41NjY0MDYgMzEuMzQ3NjU2IDcuMDIzNDM4IDMxLjA3ODEyNSA3LjAwMzkwNiBDIDMwLjY2MDE1NiA2Ljk2ODc1IDMwLjI2MTcxOSA3LjIwMzEyNSAzMC4wODk4NDQgNy41ODk4NDQgQyAzMC4wNzQyMTkgNy42MTMyODEgMjkuOTM3NSA3LjkyOTY4OCAyOS43ODUxNTYgOC40MjE4NzUgQyAzMi40MTc5NjkgOC44NjcxODggMzUuNjUyMzQ0IDkuNzYxNzE5IDM4LjU3ODEyNSAxMS41NzgxMjUgQyAzOS4wNDY4NzUgMTEuODY3MTg4IDM5LjE5MTQwNiAxMi40ODQzNzUgMzguOTAyMzQ0IDEyLjk1MzEyNSBDIDM4LjcxMDkzOCAxMy4yNjE3MTkgMzguMzg2NzE5IDEzLjQyOTY4OCAzOC4wNTA3ODEgMTMuNDI5Njg4IEMgMzcuODcxMDk0IDEzLjQyOTY4OCAzNy42ODc1IDEzLjM3ODkwNiAzNy41MjM0MzggMTMuMjc3MzQ0IEMgMzIuNDkyMTg4IDEwLjE1NjI1IDI2LjIxMDkzOCAxMCAyNSAxMCBDIDIzLjc4OTA2MyAxMCAxNy41MDM5MDYgMTAuMTU2MjUgMTIuNDc2NTYzIDEzLjI3NzM0NCBDIDEyLjAwNzgxMyAxMy41NzAzMTMgMTEuMzkwNjI1IDEzLjQyNTc4MSAxMS4xMDE1NjMgMTIuOTU3MDMxIEMgMTAuODA4NTk0IDEyLjQ4NDM3NSAxMC45NTMxMjUgMTEuODcxMDk0IDExLjQyMTg3NSAxMS41NzgxMjUgQyAxNC4zNDc2NTYgOS43NjU2MjUgMTcuNTgyMDMxIDguODY3MTg4IDIwLjIxNDg0NCA4LjQyNTc4MSBDIDIwLjA2MjUgNy45Mjk2ODggMTkuOTI1NzgxIDcuNjE3MTg4IDE5LjkxNDA2MyA3LjU4OTg0NCBDIDE5LjczODI4MSA3LjIwMzEyNSAxOS4zNDM3NSA2Ljk2MDkzOCAxOC45MjE4NzUgNy4wMDM5MDYgQyAxOC42NTIzNDQgNy4wMjM0MzggMTIuMzU1NDY5IDcuNTY2NDA2IDguMzIwMzEzIDEwLjgxMjUgQyA2LjIxNDg0NCAxMi43NjE3MTkgMiAyNC4xNTIzNDQgMiAzNCBDIDIgMzQuMTc1NzgxIDIuMDQ2ODc1IDM0LjM0Mzc1IDIuMTMyODEzIDM0LjQ5NjA5NCBDIDUuMDM5MDYzIDM5LjYwNTQ2OSAxMi45NzI2NTYgNDAuOTQxNDA2IDE0Ljc4MTI1IDQxIEMgMTQuNzg5MDYzIDQxIDE0LjgwMDc4MSA0MSAxNC44MTI1IDQxIEMgMTUuMTMyODEzIDQxIDE1LjQzMzU5NCA0MC44NDc2NTYgMTUuNjIxMDk0IDQwLjU4OTg0NCBMIDE3LjQ0OTIxOSAzOC4wNzQyMTkgQyAxMi41MTU2MjUgMzYuODAwNzgxIDkuOTk2MDk0IDM0LjYzNjcxOSA5Ljg1MTU2MyAzNC41MDc4MTMgQyA5LjQzNzUgMzQuMTQ0NTMxIDkuMzk4NDM4IDMzLjUxMTcxOSA5Ljc2NTYyNSAzMy4wOTc2NTYgQyAxMC4xMjg5MDYgMzIuNjgzNTk0IDEwLjc2MTcxOSAzMi42NDQ1MzEgMTEuMTc1NzgxIDMzLjAwNzgxMyBDIDExLjIzNDM3NSAzMy4wNjI1IDE1Ljg3NSAzNyAyNSAzNyBDIDM0LjE0MDYyNSAzNyAzOC43ODEyNSAzMy4wNDY4NzUgMzguODI4MTI1IDMzLjAwNzgxMyBDIDM5LjI0MjE4OCAzMi42NDg0MzggMzkuODcxMDk0IDMyLjY4MzU5NCA0MC4yMzgyODEgMzMuMTAxNTYzIEMgNDAuNjAxNTYzIDMzLjUxNTYyNSA0MC41NjI1IDM0LjE0NDUzMSA0MC4xNDg0MzggMzQuNTA3ODEzIEMgNDAuMDAzOTA2IDM0LjYzNjcxOSAzNy40ODQzNzUgMzYuODAwNzgxIDMyLjU1MDc4MSAzOC4wNzQyMTkgTCAzNC4zNzg5MDYgNDAuNTg5ODQ0IEMgMzQuNTY2NDA2IDQwLjg0NzY1NiAzNC44NjcxODggNDEgMzUuMTg3NSA0MSBDIDM1LjE5OTIxOSA0MSAzNS4yMTA5MzggNDEgMzUuMjE4NzUgNDEgQyAzNy4wMjczNDQgNDAuOTQxNDA2IDQ0Ljk2MDkzOCAzOS42MDU0NjkgNDcuODY3MTg4IDM0LjQ5NjA5NCBDIDQ3Ljk1MzEyNSAzNC4zNDM3NSA0OCAzNC4xNzU3ODEgNDggMzQgQyA0OCAyNC4xNTIzNDQgNDMuNzg1MTU2IDEyLjc2MTcxOSA0MS42MjUgMTAuNzY5NTMxIFogTSAxOC41IDMwIEMgMTYuNTY2NDA2IDMwIDE1IDI4LjIxMDkzOCAxNSAyNiBDIDE1IDIzLjc4OTA2MyAxNi41NjY0MDYgMjIgMTguNSAyMiBDIDIwLjQzMzU5NCAyMiAyMiAyMy43ODkwNjMgMjIgMjYgQyAyMiAyOC4yMTA5MzggMjAuNDMzNTk0IDMwIDE4LjUgMzAgWiBNIDMxLjUgMzAgQyAyOS41NjY0MDYgMzAgMjggMjguMjEwOTM4IDI4IDI2IEMgMjggMjMuNzg5MDYzIDI5LjU2NjQwNiAyMiAzMS41IDIyIEMgMzMuNDMzNTk0IDIyIDM1IDIzLjc4OTA2MyAzNSAyNiBDIDM1IDI4LjIxMDkzOCAzMy40MzM1OTQgMzAgMzEuNSAzMCBaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBtZDppbmxpbmUtYmxvY2sgdGV4dC1hY2NlbnQ1IGhvdmVyOnRleHQtYWNjZW50MSB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZmFjZWJvb2suY29tL2dyb3Vwcy9xdWlkaWthXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGhvdmVyOmZpbGwtY3VycmVudCB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUwIDUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNHB4XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI1LDNDMTIuODUsMywzLDEyLjg1LDMsMjVjMCwxMS4wMyw4LjEyNSwyMC4xMzcsMTguNzEyLDIxLjcyOFYzMC44MzFoLTUuNDQzdi01Ljc4M2g1LjQ0M3YtMy44NDggYzAtNi4zNzEsMy4xMDQtOS4xNjgsOC4zOTktOS4xNjhjMi41MzYsMCwzLjg3NywwLjE4OCw0LjUxMiwwLjI3NHY1LjA0OGgtMy42MTJjLTIuMjQ4LDAtMy4wMzMsMi4xMzEtMy4wMzMsNC41MzN2My4xNjFoNi41ODggbC0wLjg5NCw1Ljc4M2gtNS42OTR2MTUuOTQ0QzM4LjcxNiw0NS4zMTgsNDcsMzYuMTM3LDQ3LDI1QzQ3LDEyLjg1LDM3LjE1LDMsMjUsM3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZS1ibG9jayB0ZXh0LWFjY2VudDUgaG92ZXI6dGV4dC1hY2NlbnQxIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9xdWlkaWthdG9rZW5cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgaG92ZXI6ZmlsbC1jdXJyZW50IHRyYW5zaXRpb24gZHVyYXRpb24tMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yOCw2LjkzN2MtMC45NTcsMC40MjUtMS45ODUsMC43MTEtMy4wNjQsMC44NGMxLjEwMi0wLjY2LDEuOTQ3LTEuNzA1LDIuMzQ1LTIuOTUxYy0xLjAzLDAuNjExLTIuMTcyLDEuMDU1LTMuMzg4LDEuMjk1IGMtMC45NzMtMS4wMzctMi4zNTktMS42ODUtMy44OTMtMS42ODVjLTIuOTQ2LDAtNS4zMzQsMi4zODktNS4zMzQsNS4zMzRjMCwwLjQxOCwwLjA0OCwwLjgyNiwwLjEzOCwxLjIxNSBjLTQuNDMzLTAuMjIyLTguMzYzLTIuMzQ2LTEwLjk5NS01LjU3NEMzLjM1MSw2LjE5OSwzLjA4OCw3LjExNSwzLjA4OCw4LjA5NGMwLDEuODUsMC45NDEsMy40ODMsMi4zNzIsNC40MzkgYy0wLjg3NC0wLjAyOC0xLjY5Ny0wLjI2OC0yLjQxNi0wLjY2N2MwLDAuMDIzLDAsMC4wNDQsMCwwLjA2N2MwLDIuNTg1LDEuODM4LDQuNzQxLDQuMjc5LDUuMjMgYy0wLjQ0NywwLjEyMi0wLjkxOSwwLjE4Ny0xLjQwNiwwLjE4N2MtMC4zNDMsMC0wLjY3OC0wLjAzNC0xLjAwMy0wLjA5NWMwLjY3OSwyLjExOSwyLjY0OSwzLjY2Miw0Ljk4MywzLjcwNSBjLTEuODI1LDEuNDMxLTQuMTI1LDIuMjg0LTYuNjI1LDIuMjg0Yy0wLjQzLDAtMC44NTUtMC4wMjUtMS4yNzMtMC4wNzVjMi4zNjEsMS41MTMsNS4xNjQsMi4zOTYsOC4xNzcsMi4zOTYgYzkuODEyLDAsMTUuMTc2LTguMTI4LDE1LjE3Ni0xNS4xNzdjMC0wLjIzMS0wLjAwNS0wLjQ2MS0wLjAxNS0wLjY5QzI2LjM4LDguOTQ1LDI3LjI4NSw4LjAwNiwyOCw2LjkzN3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxDb25uZWN0QnRuIHdlYjM9e3dlYjN9IHNldFdlYjM9e3NldFdlYjN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9US09fQ09WRVIuanBlZ1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCJhdXRvXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG10LTYgbWItMTIgcm91bmRlZC0yeGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RmFtb3VzIC8+XHJcblxyXG4gICAgICAgICAgICA8TWludEJ1dHRvbiB3ZWIzPXt3ZWIzfSAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZTY4MTBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVEtPXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMua25vY2tvdXRzfT5URU5UQUNMRSBLTk9DS09VVDo8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZTY4MTBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjI5LjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCItMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBVTkxPQ0sgVEhFIFlPT01PT1RBXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAxLDAwMCBjb2xsZWN0aWJsZSBzcXVpZCB2ZXJzdXMgZG9nIGtub2Nrb3V0IHNjZW5lcyBvbiB0aGVcclxuICAgICAgICAgICAgICAgICAgRXRoZXJldW0gYmxvY2tjaGFpbi4gSW5zcGlyZWQgYnkgQWxpIHZzIExpc3RvbiAtLSBNYXkgMjUsXHJcbiAgICAgICAgICAgICAgICAgIDE5NjUuIFVubG9jayB0aGUgWU9PTU9PVEEuIE1hZGUgdXAgb2YgMTQ0IHRyYWl0cyB3aXRoIGEgZmV3XHJcbiAgICAgICAgICAgICAgICAgIGJlaW5nIG9uZSBvZiBvbmVzLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxGYW1pbHkgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZTY4MTBcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIjgwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFdFTENPTUUgVE8gVEhFIFlPT01PT1RBXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtNCBtZDpzcGFjZS15LTAgc3BhY2UteS00IHBiLTE2IG1kOm14LTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9uMS5wbmdcIiBjbGFzc05hbWU9XCJ3LTcyIGgtYXV0b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL24yLnBuZ1wiIGNsYXNzTmFtZT1cInctNzIgaC1hdXRvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbjMucG5nXCIgY2xhc3NOYW1lPVwidy03MiBoLWF1dG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9uNC5wbmdcIiBjbGFzc05hbWU9XCJ3LTcyIGgtYXV0b1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9EQXBwUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmFtb3VzIiwiRmFtaWx5IiwiUHJvamVjdCIsIk1pbnRCdXR0b24iLCJSb3ciLCJDb2wiLCJDb250YWluZXIiLCJIZWFkIiwiTGluayIsInN0eWxlcyIsIkRBcHBQcm92aWRlciIsInVzZUV0aGVycyIsImdldFdlYjNBdXRvIiwiZ2V0V2ViMyIsIndlYjNXYWxsZXRDb25uZWN0UHJvdmlkZXIiLCJDb25uZWN0QnRuIiwid2ViMyIsInNldFdlYjMiLCJhY3RpdmF0ZUJyb3dzZXJXYWxsZXQiLCJfIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJoYW5kbGVXYWxsZXQiLCJ3YWxsZXRTb3VyY2UiLCJjb25uZWN0ZWQiLCJkaXNjb25uZWN0IiwiZW5hYmxlIiwiY2xvc2UiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiY3VycmVudFByb3ZpZGVyIiwiZXRoIiwiZ2V0Q2hhaW5JZCIsInRoZW4iLCJlIiwiTnVtYmVyIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm9uIiwiY2hhaW5JZCIsImFjY291bnRzIiwibGVuZ3RoIiwiY29kZSIsInJlYXNvbiIsImdldEFjY291bnRzIiwiYnRuQ29ubmVjdCIsInNsaWNlIiwiSG9tZSIsImJhY2tncm91bmRDb2xvciIsImJhY2tEaXYiLCJtYXJnaW4iLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwibmF2YmFyIiwiaGVpZ2h0IiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRTdHlsZSIsIm1hcmdpblRvcCIsImtub2Nrb3V0cyIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=