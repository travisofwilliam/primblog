webpackHotUpdate_N_E("pages/[id]",{

/***/ "./pages/[id]/index.js":
/*!*****************************!*\
  !*** ./pages/[id]/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/traviswilliams/Desktop/mern/pages/[id]/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar Note = function Note(_ref) {\n  _s();\n\n  var note = _ref.note;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isDeleting = _useState[0],\n      setIsDeleting = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  var handleDelete = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var deleteID;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setIsDeleting(true);\n              _context.prev = 1;\n              deleteID = router.query.id;\n              _context.next = 5;\n              return axios[\"delete\"](\"http://localhost/api/notes/\".concat(deleteID));\n\n            case 5:\n              router.push('/');\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](1);\n              console.log(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 8]]);\n    }));\n\n    return function handleDelete() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    className: \"container text-center mt-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, isDeleting ? 'Deleting...' : __jsx(\"div\", {\n    className: \"card\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(\"h4\", {\n    className: \"card-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, note.title), __jsx(\"div\", {\n    className: \"card-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    className: \"card-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  }, note.description), __jsx(\"button\", {\n    className: \"btn btn-danger\",\n    onClick: handleDelete,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, \"Delete\"))), console.log(router));\n};\n\n_s(Note, \"yoMZFUxxsJI/9DNHfV6cCpD0v08=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Note;\n\nNote.getInitialProps = /*#__PURE__*/function () {\n  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3) {\n    var id, res, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            id = _ref3.query.id;\n            _context2.next = 3;\n            return axios.get(\"http://localhost:3000/api/notes/\".concat(id));\n\n          case 3:\n            res = _context2.sent;\n            data = res.data.data;\n            console.log(data);\n            return _context2.abrupt(\"return\", {\n              note: data\n            });\n\n          case 7:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Note);\n\nvar _c;\n\n$RefreshReg$(_c, \"Note\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvL2luZGV4LmpzP2UyZjgiXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiTm90ZSIsIm5vdGUiLCJ1c2VTdGF0ZSIsImlzRGVsZXRpbmciLCJzZXRJc0RlbGV0aW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlRGVsZXRlIiwiZGVsZXRlSUQiLCJxdWVyeSIsImlkIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0IiwicmVzIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUVXQyxzREFBUSxDQUFDLEtBQUQsQ0FGbkI7QUFBQSxNQUVsQkMsVUFGa0I7QUFBQSxNQUVOQyxhQUZNOztBQUd6QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLFlBQVk7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJILDJCQUFhLENBQUMsSUFBRCxDQUFiO0FBRG1CO0FBSVhJLHNCQUpXLEdBSUFILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxFQUpiO0FBQUE7QUFBQSxxQkFLWFosS0FBSyxVQUFMLHNDQUEyQ1UsUUFBM0MsRUFMVzs7QUFBQTtBQU9qQkgsb0JBQU0sQ0FBQ00sSUFBUCxDQUFZLEdBQVo7QUFQaUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTakJDLHFCQUFPLENBQUNDLEdBQVI7O0FBVGlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpOLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBYUEsU0FDRTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlKLFVBQVUsR0FBRyxhQUFILEdBRVI7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZCRixJQUFJLENBQUNhLEtBQWxDLENBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEJiLElBQUksQ0FBQ2MsV0FBL0IsQ0FERixFQUVFO0FBQVEsYUFBUyxFQUFDLGdCQUFsQjtBQUFtQyxXQUFPLEVBQUVSLFlBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixDQUZGLENBSk4sRUFZR0ssT0FBTyxDQUFDQyxHQUFSLENBQVlSLE1BQVosQ0FaSCxDQURGO0FBZ0JELENBbENEOztHQUFNTCxJO1VBR1dNLHFEOzs7S0FIWE4sSTs7QUFvQ05BLElBQUksQ0FBQ2dCLGVBQUw7QUFBQSwrTEFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtCTixjQUFsQixTQUFTRCxLQUFULENBQWtCQyxFQUFsQjtBQUFBO0FBQUEsbUJBQ0haLEtBQUssQ0FBQ21CLEdBQU4sMkNBQTZDUCxFQUE3QyxFQURHOztBQUFBO0FBQ2ZRLGVBRGU7QUFHYkMsZ0JBSGEsR0FHSkQsR0FBRyxDQUFDQyxJQUhBLENBR2JBLElBSGE7QUFJckJQLG1CQUFPLENBQUNDLEdBQVIsQ0FBWU0sSUFBWjtBQUpxQiw4Q0FLZDtBQUFFbEIsa0JBQUksRUFBRWtCO0FBQVIsYUFMYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRZW5CLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW2lkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG5jb25zdCBOb3RlID0gKHsgbm90ZSB9KSA9PiB7XG5cbiAgY29uc3QgW2lzRGVsZXRpbmcsIHNldElzRGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzRGVsZXRpbmcodHJ1ZSlcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBkZWxldGVJRCA9IHJvdXRlci5xdWVyeS5pZFxuICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0L2FwaS9ub3Rlcy8ke2RlbGV0ZUlEfWApXG5cbiAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtY2VudGVyIG10LTMnPlxuICAgICAge1xuICAgICAgICBpc0RlbGV0aW5nID8gJ0RlbGV0aW5nLi4uJ1xuICAgICAgICAgIDpcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPntub3RlLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57bm90ZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWRhbmdlcicgb25DbGljaz17aGFuZGxlRGVsZXRlfT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAge2NvbnNvbGUubG9nKHJvdXRlcil9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTm90ZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeTogeyBpZCB9IH0pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL25vdGVzLyR7aWR9YClcblxuICBjb25zdCB7IGRhdGEgfSA9IHJlcy5kYXRhXG4gIGNvbnNvbGUubG9nKGRhdGEpXG4gIHJldHVybiB7IG5vdGU6IGRhdGEgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id]/index.js\n");

/***/ })

})