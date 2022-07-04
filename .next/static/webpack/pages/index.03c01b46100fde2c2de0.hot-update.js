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
              price = 250000000000000000; // 0.08 eth

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDNjMDFiNDYxMDBmZGUyYzJkZTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTUSxVQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLGtCQUNGUCwrQ0FBUSxDQUFDLENBQUQsQ0FETjtBQUFBLE1BQ3JCUSxLQURxQjtBQUFBLE1BQ2RDLFFBRGM7O0FBQUEsbUJBRU1ULCtDQUFRLENBQUMsQ0FBRCxDQUZkO0FBQUEsTUFFckJVLFNBRnFCO0FBQUEsTUFFVkMsWUFGVTs7QUFJNUJaLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ1EsSUFBTCxFQUFXO0FBQ1RLLE1BQUFBLEtBQUssQ0FBQyw0REFBRCxDQUFMO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBTUMsZUFBZSxHQUFHLDRDQUF4QjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxJQUFJUCxJQUFJLENBQUNRLEdBQUwsQ0FBU0MsUUFBYixDQUFzQmYsb0RBQXRCLEVBQXFDWSxlQUFyQyxDQUFqQjs7QUFFQSxVQUFJLENBQUMsQ0FBQ0MsUUFBTixFQUFnQjtBQUNkQSxRQUFBQSxRQUFRLENBQUNJLE9BQVQsQ0FBaUJDLFdBQWpCLEdBQStCQyxJQUEvQixHQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JYLFVBQUFBLFlBQVksQ0FBQ1csR0FBRCxDQUFaO0FBQ0QsU0FISCxXQUlTLFVBQUNDLEdBQUQsRUFBUztBQUNkQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELFNBTkg7QUFPRDtBQUNGO0FBQ0YsR0FqQlEsRUFpQk4sQ0FBQ2hCLElBQUQsQ0FqQk0sQ0FBVDs7QUFtQkEsTUFBTW1CLFNBQVM7QUFBQSw4VkFBRztBQUFBOztBQUFBO0FB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QUpUO0FBS0xDLFVBQUFBLEtBQUssRUFBRTtBQUxGLFNBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsZUErQkU7QUFBSyxlQUFTLFlBQUszQywyRUFBTCxDQUFkO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBNkIsYUFBSyxFQUFFO0FBQUU0QyxVQUFBQSxRQUFRLEVBQUU7QUFBWixTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLG1EQUFmO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDLG9DQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTyxtQkFBUyxFQUFDLDJFQUFqQjtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsYUFBRyxFQUFDLEdBRk47QUFHRSxhQUFHLEVBQUMsSUFITjtBQUlFLGVBQUssRUFBRXpDLEtBSlQ7QUFLRSxrQkFBUSxFQUFFLGtCQUFDMEMsQ0FBRDtBQUFBLG1CQUFPekMsUUFBUSxDQUFDeUMsQ0FBQyxDQUFDQyxNQUFGLENBQVNsQixLQUFWLENBQWY7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUREOztHQTVGUTNCOztLQUFBQTtBQThGVCwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NaW50QnV0dG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEp1c3RjdWJlcyBmcm9tIFwiLi4vYWJpL0p1c3RDdWJlcy5qc29uXCJcclxuaW1wb3J0IHsgUm93LCBDb2wsIENvbnRhaW5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCJcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zdHlsZS5tb2R1bGUuY3NzXCJcclxuLy8gaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiXHJcbi8vIGltcG9ydCBCYWNrZHJvcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIlxyXG4vLyBpbXBvcnQgRmFkZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFkZVwiXHJcbi8vIGltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCJcclxuLy8gaW1wb3J0IHsgU3R5bGVzQ29udGV4dCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCJcclxuXHJcbmZ1bmN0aW9uIE1pbnRCdXR0b24oeyB3ZWIzIH0pIHtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW21pbnRDb3VudCwgc2V0TWludENvdW50XSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXdlYjMpIHtcclxuICAgICAgYWxlcnQoXCJQbGVhc2UgdXNlIGRlc2t0b3Agb3IgREFwcCBicm93c2VyIGlmIHlvdSBhcmUgbm90IGFscmVhZHkuXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4ODZlZDFENkZjMzk1MDAwNzFENkZiN2UzQzg5RDgxZDcwNWJBNzcwMFwiXHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEp1c3RjdWJlcy5hYmksIGNvbnRyYWN0QWRkcmVzcylcclxuXHJcbiAgICAgIGlmICghIWNvbnRyYWN0KSB7XHJcbiAgICAgICAgY29udHJhY3QubWV0aG9kcy50b3RhbFN1cHBseSgpLmNhbGwoKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBzZXRNaW50Q291bnQocmVzKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbd2ViM10pXHJcblxyXG4gIGNvbnN0IG1pbnRUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghd2ViMykge1xyXG4gICAgICBhbGVydChcIlBsZWFzZSB1c2UgZGVza3RvcCBvciBEQXBwIGJyb3dzZXIgaWYgeW91IGFyZSBub3QgYWxyZWFkeS5cIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHg4NmVkMUQ2RmMzOTUwMDA3MUQ2RmI3ZTNDODlEODFkNzA1YkE3NzAwXCJcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoSnVzdGN1YmVzLmFiaSwgY29udHJhY3RBZGRyZXNzKVxyXG4gICAgICBjb25zdCBfYWNjb3VudCA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcclxuICAgICAgY29uc3QgcHJpY2UgPSAyNTAwMDAwMDAwMDAwMDAwMDAgLy8gMC4wOCBldGhcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgY29udHJhY3QubWV0aG9kcy5taW50KGNvdW50KS5zZW5kKHtcclxuICAgICAgICAgIGZyb206IF9hY2NvdW50WzBdLFxyXG4gICAgICAgICAgdmFsdWU6IHByaWNlICogY291bnQsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtdC0xMiBtZDpzcGFjZS14LTEyIG1kOnNwYWNlLXktMCBzcGFjZS15LTEyXCIgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLCBwYWRkaW5nQm90dG9tOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3dJdGVtRGl2fT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnNob3dJdGVtUH0+TEFVTkNIPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93SXRlbUluZm99PjEvMjIvMjIgQCAxMiBFU1Q8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3dJdGVtRGl2fT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnNob3dJdGVtUH0+TkZUUzwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd0l0ZW1JbmZvfT57bWludENvdW50fSAvIDEwMDA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3dJdGVtRGl2fT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnNob3dJdGVtUH0+TUlOVCBQUklDRTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd0l0ZW1JbmZvfT4wLjA1IEVUSDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgcGFkZGluZ1RvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYWNjZW50MiB0ZXh0LWFjY2VudDEgaG92ZXI6YmctYWNjZW50MSBob3Zlcjp0ZXh0LWFjY2VudDIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgdGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ibGFjayBpdGFsaWNcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbWludFRva2VuKCl9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4ICNmZTY4MTAgc29saWRcIixcclxuICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjM2cmVtXCJcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTUlOVCBcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1pbnRDb3VudH1gfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgaXRhbGljXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMTZweFwiIH19PlxyXG4gICAgICAgICAgTUFYIDIwIFBFUiBUWFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00IHJvdW5kZWQtMnhsIHB4LTQgcHktM1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHVwcGVyY2FzZVwiPlF1YW50aXR5OjwvcD5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTM2IG91dGxpbmUtbm9uZSByb3VuZGVkLTJ4bCBiZy1hY2NlbnQ0IHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICBtYXg9XCIyMFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb3VudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWludEJ1dHRvblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkp1c3RjdWJlcyIsIlJvdyIsIkNvbCIsIkNvbnRhaW5lciIsInN0eWxlcyIsIk1pbnRCdXR0b24iLCJ3ZWIzIiwiY291bnQiLCJzZXRDb3VudCIsIm1pbnRDb3VudCIsInNldE1pbnRDb3VudCIsImFsZXJ0IiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3QiLCJldGgiLCJDb250cmFjdCIsImFiaSIsIm1ldGhvZHMiLCJ0b3RhbFN1cHBseSIsImNhbGwiLCJ0aGVuIiwicmVzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1pbnRUb2tlbiIsImdldEFjY291bnRzIiwiX2FjY291bnQiLCJwcmljZSIsIm1pbnQiLCJzZW5kIiwiZnJvbSIsInZhbHVlIiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmdCb3R0b20iLCJzaG93SXRlbURpdiIsInNob3dJdGVtUCIsInNob3dJdGVtSW5mbyIsInRleHRBbGlnbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmdUb3AiLCJib3JkZXIiLCJjdXJzb3IiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJmb250U2l6ZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9