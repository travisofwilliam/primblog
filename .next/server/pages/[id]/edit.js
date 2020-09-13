module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[id]/edit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/[id]/edit.js":
/*!****************************!*\
  !*** ./pages/[id]/edit.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/mern/pages/[id]/edit.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst axios = __webpack_require__(/*! axios */ \"axios\");\n\nconst Edit = ({\n  note\n}) => {\n  const {\n    0: form,\n    1: setForm\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    title: note.title,\n    description: note.description\n  });\n  const {\n    0: errors,\n    1: setErrors\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const {\n    0: isSubmitting,\n    1: setIsSubmitting\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (isSubmitting) {\n      if (Object.keys(errors).length === 0) {\n        updateNote();\n      } else {\n        setIsSubmitting(false);\n      }\n    }\n  }, [errors]);\n\n  const updateNote = async () => {\n    try {\n      await axios.put(`http://localhost:3000/api/notes/${router.query.id}`, form);\n      router.push('/');\n    } catch (error) {\n      console.log(error);\n    }\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    let errs = validate();\n    setErrors(errs);\n    setIsSubmitting(true);\n  };\n\n  const handleChange = e => {\n    setForm(_objectSpread(_objectSpread({}, form), {}, {\n      [e.target.name]: e.target.value\n    }));\n\n    if (errors[e.target.name]) {\n      delete errors[e.target.name];\n    }\n  };\n\n  const validate = () => {\n    let err = {};\n\n    if (!form.title) {\n      err.title = 'Title is required';\n    }\n\n    if (!form.description) {\n      err.body = 'Body is required';\n    }\n\n    return err;\n  };\n\n  return __jsx(\"div\", {\n    className: \"container text-center\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    className: \"mt-3\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, \"Edit Post\"), __jsx(\"div\", {\n    className: \"card\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"card-header\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, \"Edit Post\"), __jsx(\"div\", {\n    className: \"card-body\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, isSubmitting ? 'Loading...' : __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 15\n    }\n  }, __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }\n  }, \"Title:\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"title\",\n    className: \"mb-3\",\n    value: form.title,\n    onChange: handleChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 32\n    }\n  }), errors.title && __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 35\n    }\n  }, __jsx(\"i\", {\n    className: \"text-danger\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 38\n    }\n  }, errors.title)), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 17\n    }\n  }), __jsx(\"hr\", {\n    className: \"w-60\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 17\n    }\n  }), __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 17\n    }\n  }, \"Description:\"), __jsx(\"textarea\", {\n    onChange: handleChange,\n    name: \"description\",\n    value: form.description,\n    cols: \"30\",\n    rows: \"10\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 17\n    }\n  }), errors.body && __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 34\n    }\n  }, __jsx(\"i\", {\n    className: \"text-danger\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 37\n    }\n  }, errors.body)), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 17\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 17\n    }\n  }, \"Update\")))));\n};\n\nEdit.getInitialProps = async ({\n  query: {\n    id\n  }\n}) => {\n  const res = await axios.get(`http://localhost:3000/api/notes/${id}`);\n  const {\n    data\n  } = res.data;\n  return {\n    note: data\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy8vZWRpdC5qcz80NTQ3Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsIkVkaXQiLCJub3RlIiwiZm9ybSIsInNldEZvcm0iLCJ1c2VTdGF0ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidXBkYXRlTm90ZSIsInB1dCIsInF1ZXJ5IiwiaWQiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZXJycyIsInZhbGlkYXRlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZXJyIiwiYm9keSIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImdldCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsTUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLG9CQUFELENBQXJCOztBQUVBLE1BQU1DLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBRXpCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQztBQUFFQyxTQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FBZDtBQUFxQkMsZUFBVyxFQUFFTCxJQUFJLENBQUNLO0FBQXZDLEdBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JKLHNEQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDSyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ04sc0RBQVEsQ0FBQyxLQUFELENBQWhEO0FBQ0EsUUFBTU8sTUFBTSxH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Q0FBVyxtQ0FBa0NsQixFQUFHLEVBQWhELENBQWxCO0FBRUEsUUFBTTtBQUFFbUI7QUFBRixNQUFXRixHQUFHLENBQUNFLElBQXJCO0FBRUEsU0FBTztBQUFFdEMsUUFBSSxFQUFFc0M7QUFBUixHQUFQO0FBQ0QsQ0FORDs7QUFRZXZDLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW2lkXS9lZGl0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcblxuY29uc3QgRWRpdCA9ICh7IG5vdGUgfSkgPT4ge1xuXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHsgdGl0bGU6IG5vdGUudGl0bGUsIGRlc2NyaXB0aW9uOiBub3RlLmRlc2NyaXB0aW9uIH0pXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzU3VibWl0dGluZykge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHVwZGF0ZU5vdGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2Vycm9yc10pXG5cbiAgY29uc3QgdXBkYXRlTm90ZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXhpb3MucHV0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL25vdGVzLyR7cm91dGVyLnF1ZXJ5LmlkfWAsIGZvcm0pXG5cbiAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgZXJycyA9IHZhbGlkYXRlKClcbiAgICBzZXRFcnJvcnMoZXJycylcbiAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Rm9ybSh7XG4gICAgICAuLi5mb3JtLFxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gICAgaWYgKGVycm9yc1tlLnRhcmdldC5uYW1lXSkge1xuICAgICAgZGVsZXRlIGVycm9yc1tlLnRhcmdldC5uYW1lXVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICAgIGxldCBlcnIgPSB7fVxuXG4gICAgaWYgKCFmb3JtLnRpdGxlKSB7XG4gICAgICBlcnIudGl0bGUgPSAnVGl0bGUgaXMgcmVxdWlyZWQnXG4gICAgfVxuICAgIGlmICghZm9ybS5kZXNjcmlwdGlvbikge1xuICAgICAgZXJyLmJvZHkgPSAnQm9keSBpcyByZXF1aXJlZCdcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXInPlxuICAgICAgPGgzIGNsYXNzTmFtZT0nbXQtMyc+RWRpdCBQb3N0PC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgRWRpdCBQb3N0XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzU3VibWl0dGluZyA/ICdMb2FkaW5nLi4uJ1xuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxoND5UaXRsZTo8L2g0PjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGNsYXNzTmFtZT0nbWItMycgdmFsdWU9e2Zvcm0udGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZXJyb3JzLnRpdGxlICYmIDxwPjxpIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMudGl0bGV9PC9pPjwvcD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT0ndy02MCcgLz5cbiAgICAgICAgICAgICAgICA8aDQ+RGVzY3JpcHRpb246PC9oND5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImRlc2NyaXB0aW9uXCIgdmFsdWU9e2Zvcm0uZGVzY3JpcHRpb259IGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZXJyb3JzLmJvZHkgJiYgPHA+PGkgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5ib2R5fTwvaT48L3A+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5Jz5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5FZGl0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5OiB7IGlkIH0gfSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbm90ZXMvJHtpZH1gKVxuXG4gIGNvbnN0IHsgZGF0YSB9ID0gcmVzLmRhdGFcblxuICByZXR1cm4geyBub3RlOiBkYXRhIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[id]/edit.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });