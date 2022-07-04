"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/MintButton.js":
/*!**************************************!*\
  !*** ./src/components/MintButton.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _abi_JustCubes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abi/JustCubes.json */ "./src/abi/JustCubes.json");
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/style.module.css */ "./src/styles/style.module.css");
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\work\\Blockchain\\cryptoking-nft\\quidverse-frontend\\src\\components\\MintButton.js",
    _s = $RefreshSig$();




 // import Modal from "@material-ui/core/Modal"
// import Backdrop from "@material-ui/core/Backdrop"
// import Fade from "@material-ui/core/Fade"
// import { makeStyles } from "@material-ui/core/styles"
// import { StylesContext } from "@material-ui/styles"

function MintButton(_ref) {
  _s();

  var web3 = _ref.web3;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1),
      count = _useState[0],
      setCount = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      mintCount = _useState2[0],
      setMintCount = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (!web3) {
      alert("Please use desktop or DApp browser if you are not already.");
    } else {
      var contractAddress = "0x86ed1D6Fc39500071D6Fb7e3C89D81d705bA7700";
      var contract = new web3.eth.Contract(_abi_JustCubes_json__WEBPACK_IMPORTED_MODULE_4__.abi, contractAddress);

      if (!!contract) {
        contract.methods.totalSupply().call().then(function (res) {
          setMintCount(res);
        })["catch"](function (err) {
          console.log(err);
        });
      }
    }
  }, [web3]);

  var mintToken = /*#__PURE__*/function () {
    var _ref2 = (0,E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var contractAddress, contract, _account, price;

      return E_work_Blockchain_cryptoking_nft_quidverse_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (web3) {
                _context.next = 4;
                break;
              }

              alert("Please use desktop or DApp browser if you are not already.");
              _context.next = 18;
              break;

            case 4:
              contractAddress = "0x86ed1D6Fc39500071D6Fb7e3C89D81d705bA7700";
              contract = new web3.eth.Contract(_abi_JustCubes_json__WEBPACK_IMPORTED_MODULE_4__.abi, contractAddress);
              _context.next = 8;
              return web3.eth.getAccounts();

            case 8:
              _account = _context.sent;
              price = 50000000000000000; // 0.08 eth

              _context.prev = 10;
              _context.next = 13;
              return contract.methods.mint(count).send({
                from: _account[0],
                value: price * count
              });

            case 13:
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](10);
              console.log(_context.t0);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[10, 15]]);
    }));

    return function mintToken() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col md:flex-row mt-12 md:space-x-12 md:space-y-0 space-y-12",
      style: {
        display: "flex",
        backgroundColor: "transparent",
        paddingBottom: "20px"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().showItemDiv),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().showItemP),
          children: "LAUNCH"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().showItemInfo),
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
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().showItemDiv),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().showItemP),
          children: "NFTS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().showItemInfo),
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
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().showItemDiv),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().showItemP),
          children: "MINT PRICE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().showItemInfo),
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
        onClick: function onClick() {
          return mintToken();
        },
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
      className: "".concat((_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().mintCount)),
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
          onChange: function onChange(e) {
            return setCount(e.target.value);
          }
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

_s(MintButton, "q2uuEe3b9vPN3ZCFrhwo76cKQnk=");

_c = MintButton;
/* harmony default export */ __webpack_exports__["default"] = (MintButton);

var _c;

$RefreshReg$(_c, "MintButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTU3MjcxY2FmMjAxYTNmNWYxYzUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTUSxVQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLGtCQUNGUCwrQ0FBUSxDQUFDLENBQUQsQ0FETjtBQUFBLE1BQ3JCUSxLQURxQjtBQUFBLE1BQ2RDLFFBRGM7O0FBQUEsbUJBRU1ULCtDQUFRLENBQUMsQ0FBRCxDQUZkO0FBQUEsTUFFckJVLFNBRnFCO0FBQUEsTUFFVkMsWUFGVTs7QUFJNUJaLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ1EsSUFBTCxFQUFXO0FBQ1RLLE1BQUFBLEtBQUssQ0FBQyw0REFBRCxDQUFMO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBTUMsZUFBZSxHQUFHLDRDQUF4QjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxJQUFJUCxJQUFJLENBQUNRLEdBQUwsQ0FBU0MsUUFBYixDQUFzQmYsb0RBQXRCLEVBQXFDWSxlQUFyQyxDQUFqQjs7QUFFQSxVQUFJLENBQUMsQ0FBQ0MsUUFBTixFQUFnQjtBQUNkQSxRQUFBQSxRQUFRLENBQUNJLE9BQVQsQ0FBaUJDLFdBQWpCLEdBQStCQyxJQUEvQixHQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JYLFVBQUFBLFlBQVksQ0FBQ1csR0FBRCxDQUFaO0FBQ0QsU0FISCxXQUlTLFVBQUNDLEdBQUQsRUFBUztBQUNkQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELFNBTkg7QUFPRDtBQUNGO0FBQ0YsR0FqQlEsRUFpQk4sQ0FBQ2hCLElBQUQsQ0FqQk0sQ0FBVDs7QUFtQkEsTUFBTW1CLFNBQVM7QUFBQSw4VkFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ1huQixJQURXO0FBQUE7QUFBQTtBQUFBOztBQUVkSyxjQUFBQSxLQUFLLENBQUMsNERBQUQsQ0FBTDtBQUZjO0FBQUE7O0FBQUE7QUFJUkMsY0FBQUEsZUFKUSxHQUlVLDRDQUpWO0FBS1JDLGNBQUFBLFFBTFEsR0FLRyxJQUFJUCxJQUFJLENBQUNRLEdBQUwsQ0FBU0MsUUFBYixDQUFzQmYsb0RBQXRCLEVBQXFDWSxlQUFyQyxDQUxIO0FBQUE7QUFBQSxxQkFNU04sSUFBSSxDQUFDUSxHQUFMLENBQVNZLFdBQVQsRUFOVDs7QUFBQTtBQU1SQyxjQUFBQSxRQU5RO0FBT1JDLGNBQUFBLEtBUFEsR0FPQSxpQkFQQSxFQU9rQjs7QUFQbEI7QUFBQTtBQUFBLHFCQVVOZixRQUFRLENBQUNJLE9BQVQsQ0FBaUJZLElBQWpCLENBQXNCdEIsS0FBdEIsRUFBNkJ1QixJQUE3QixDQUFrQztBQUN0Q0MsZ0JBQUFBLElBQUksRUFBRUosUUFBUSxDQUFDLENBQUQsQ0FEd0I7QUFFdENLLGdCQUFBQSxLQUFLLEVBQUVKLEtBQUssR0FBR3JCO0FBRnVCLGVBQWxDLENBVk07O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWVaZ0IsY0FBQUEsT0FBTyxDQUFDQyxHQUFSOztBQWZZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVRDLFNBQVM7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUFvQkEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyx1RUFBZjtBQUF1RixXQUFLLEVBQUU7QUFBRVEsUUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJDLFFBQUFBLGVBQWUsRUFBRSxhQUFwQztBQUFtREMsUUFBQUEsYUFBYSxFQUFFO0FBQWxFLE9BQTlGO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFL0IsNkVBQWhCO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFFQSwyRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssbUJBQVMsRUFBRUEsOEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBSyxpQkFBUyxFQUFFQSw2RUFBaEI7QUFBQSxnQ0FDRTtBQUFHLG1CQUFTLEVBQUVBLDJFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFFQSw4RUFBaEI7QUFBQSxxQkFBc0NLLFNBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVNFO0FBQUssaUJBQVMsRUFBRUwsNkVBQWhCO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFFQSwyRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssbUJBQVMsRUFBRUEsOEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBZUU7QUFBSyxXQUFLLEVBQUU7QUFBRTZCLFFBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CTSxRQUFBQSxTQUFTLEVBQUUsUUFBOUI7QUFBd0NDLFFBQUFBLFVBQVUsRUFBRSxRQUFwRDtBQUE4REMsUUFBQUEsY0FBYyxFQUFFLFFBQTlFO0FBQXdGQyxRQUFBQSxVQUFVLEVBQUU7QUFBcEcsT0FBWjtBQUFBLDZCQUNFO0FBQ0UsaUJBQVMsRUFBQyw0SEFEWjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNakIsU0FBUyxFQUFmO0FBQUEsU0FGWDtBQUdFLGFBQUssRUFBRTtBQUNMa0IsVUFBQUEsTUFBTSxFQUFFLG1CQURIO0FBRUxDLFVBQUFBLE1BQU0sRUFBRSxTQUZIO0FBR0xDLFVBQUFBLE9BQU8sRUFBRSxNQUhKO0FBSUxDLFVBQUFBLFlBQVksRUFBRSxHQUpUO0FBS0xDLFVBQUFBLEtBQUssRUFBRTtBQUxGLFNBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsZUErQkU7QUFBSyxlQUFTLFlBQUszQywyRUFBTCxDQUFkO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBNkIsYUFBSyxFQUFFO0FBQUU0QyxVQUFBQSxRQUFRLEVBQUU7QUFBWixTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLG1EQUFmO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDLG9DQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTyxtQkFBUyxFQUFDLDJFQUFqQjtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsYUFBRyxFQUFDLEdBRk47QUFHRSxhQUFHLEVBQUMsSUFITjtBQUlFLGVBQUssRUFBRXpDLEtBSlQ7QUFLRSxrQkFBUSxFQUFFLGtCQUFDMEMsQ0FBRDtBQUFBLG1CQUFPekMsUUFBUSxDQUFDeUMsQ0FBQyxDQUFDQyxNQUFGLENBQVNsQixLQUFWLENBQWY7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUREOztHQTVGUTNCOztLQUFBQTtBQThGVCwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NaW50QnV0dG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEp1c3RjdWJlcyBmcm9tIFwiLi4vYWJpL0p1c3RDdWJlcy5qc29uXCJcclxuaW1wb3J0IHsgUm93LCBDb2wsIENvbnRhaW5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCJcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zdHlsZS5tb2R1bGUuY3NzXCJcclxuLy8gaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiXHJcbi8vIGltcG9ydCBCYWNrZHJvcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIlxyXG4vLyBpbXBvcnQgRmFkZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFkZVwiXHJcbi8vIGltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCJcclxuLy8gaW1wb3J0IHsgU3R5bGVzQ29udGV4dCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCJcclxuXHJcbmZ1bmN0aW9uIE1pbnRCdXR0b24oeyB3ZWIzIH0pIHtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW21pbnRDb3VudCwgc2V0TWludENvdW50XSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXdlYjMpIHtcclxuICAgICAgYWxlcnQoXCJQbGVhc2UgdXNlIGRlc2t0b3Agb3IgREFwcCBicm93c2VyIGlmIHlvdSBhcmUgbm90IGFscmVhZHkuXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4ODZlZDFENkZjMzk1MDAwNzFENkZiN2UzQzg5RDgxZDcwNWJBNzcwMFwiXHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEp1c3RjdWJlcy5hYmksIGNvbnRyYWN0QWRkcmVzcylcclxuXHJcbiAgICAgIGlmICghIWNvbnRyYWN0KSB7XHJcbiAgICAgICAgY29udHJhY3QubWV0aG9kcy50b3RhbFN1cHBseSgpLmNhbGwoKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBzZXRNaW50Q291bnQocmVzKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbd2ViM10pXHJcblxyXG4gIGNvbnN0IG1pbnRUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghd2ViMykge1xyXG4gICAgICBhbGVydChcIlBsZWFzZSB1c2UgZGVza3RvcCBvciBEQXBwIGJyb3dzZXIgaWYgeW91IGFyZSBub3QgYWxyZWFkeS5cIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHg4NmVkMUQ2RmMzOTUwMDA3MUQ2RmI3ZTNDODlEODFkNzA1YkE3NzAwXCJcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoSnVzdGN1YmVzLmFiaSwgY29udHJhY3RBZGRyZXNzKVxyXG4gICAgICBjb25zdCBfYWNjb3VudCA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcclxuICAgICAgY29uc3QgcHJpY2UgPSA1MDAwMDAwMDAwMDAwMDAwMCAvLyAwLjA4IGV0aFxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjb250cmFjdC5tZXRob2RzLm1pbnQoY291bnQpLnNlbmQoe1xyXG4gICAgICAgICAgZnJvbTogX2FjY291bnRbMF0sXHJcbiAgICAgICAgICB2YWx1ZTogcHJpY2UgKiBjb3VudCxcclxuICAgICAgICB9KVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG10LTEyIG1kOnNwYWNlLXgtMTIgbWQ6c3BhY2UteS0wIHNwYWNlLXktMTJcIiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsIHBhZGRpbmdCb3R0b206IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd0l0ZW1EaXZ9PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd0l0ZW1QfT5MQVVOQ0g8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3dJdGVtSW5mb30+MS8yMi8yMiBAIDEyIEVTVDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd0l0ZW1EaXZ9PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd0l0ZW1QfT5ORlRTPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93SXRlbUluZm99PnttaW50Q291bnR9IC8gMTAwMDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd0l0ZW1EaXZ9PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd0l0ZW1QfT5NSU5UIFBSSUNFPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93SXRlbUluZm99PjAuMDUgRVRIPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBwYWRkaW5nVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1hY2NlbnQyIHRleHQtYWNjZW50MSBob3ZlcjpiZy1hY2NlbnQxIGhvdmVyOnRleHQtYWNjZW50MiB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCB0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJsYWNrIGl0YWxpY1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtaW50VG9rZW4oKX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggI2ZlNjgxMCBzb2xpZFwiLFxyXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMzZyZW1cIlxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBNSU5UIFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWludENvdW50fWB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBpdGFsaWNcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxNnB4XCIgfX0+XHJcbiAgICAgICAgICBNQVggMjAgUEVSIFRYXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgcm91bmRlZC0yeGwgcHgtNCBweS0zXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlXCI+UXVhbnRpdHk6PC9wPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctMzYgb3V0bGluZS1ub25lIHJvdW5kZWQtMnhsIGJnLWFjY2VudDQgdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgIG1heD1cIjIwXCJcclxuICAgICAgICAgICAgdmFsdWU9e2NvdW50fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW50QnV0dG9uXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSnVzdGN1YmVzIiwiUm93IiwiQ29sIiwiQ29udGFpbmVyIiwic3R5bGVzIiwiTWludEJ1dHRvbiIsIndlYjMiLCJjb3VudCIsInNldENvdW50IiwibWludENvdW50Iiwic2V0TWludENvdW50IiwiYWxlcnQiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdCIsImV0aCIsIkNvbnRyYWN0IiwiYWJpIiwibWV0aG9kcyIsInRvdGFsU3VwcGx5IiwiY2FsbCIsInRoZW4iLCJyZXMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWludFRva2VuIiwiZ2V0QWNjb3VudHMiLCJfYWNjb3VudCIsInByaWNlIiwibWludCIsInNlbmQiLCJmcm9tIiwidmFsdWUiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ0JvdHRvbSIsInNob3dJdGVtRGl2Iiwic2hvd0l0ZW1QIiwic2hvd0l0ZW1JbmZvIiwidGV4dEFsaWduIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ1RvcCIsImJvcmRlciIsImN1cnNvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImZvbnRTaXplIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=