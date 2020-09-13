module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/new.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/new.js":
/*!**********************!*\
  !*** ./pages/new.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/mern/pages/new.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst axios = __webpack_require__(/*! axios */ \"axios\");\n\nconst NewPost = () => {\n  const {\n    0: form,\n    1: setForm\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    title: '',\n    description: ''\n  });\n  const {\n    0: errors,\n    1: setErrors\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const {\n    0: isSubmitting,\n    1: setIsSubmitting\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (isSubmitting) {\n      if (Object.keys(errors).length === 0) {\n        createNote();\n      } else {\n        setIsSubmitting(false);\n      }\n    }\n  }, [errors]);\n\n  const createNote = async () => {\n    try {\n      await axios.post('http://localhost:3000/api/notes', form);\n      router.push('/');\n    } catch (error) {\n      console.log(error);\n    }\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    let errs = validate();\n    setErrors(errs);\n    setIsSubmitting(true);\n  };\n\n  const handleChange = e => {\n    setForm(_objectSpread(_objectSpread({}, form), {}, {\n      [e.target.name]: e.target.value\n    }));\n\n    if (errors[e.target.name]) {\n      delete errors[e.target.name];\n    }\n  };\n\n  const validate = () => {\n    let err = {};\n\n    if (!form.title) {\n      err.title = 'Title is required';\n    }\n\n    if (!form.description) {\n      err.body = 'Body is required';\n    }\n\n    return err;\n  };\n\n  return __jsx(\"div\", {\n    className: \"container text-center\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    className: \"mt-3\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, \"Create New Post\"), __jsx(\"div\", {\n    className: \"card\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"card-header\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, \"New Post\"), __jsx(\"div\", {\n    className: \"card-body\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, isSubmitting ? 'Loading...' : __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 15\n    }\n  }, __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }\n  }, \"Title:\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"title\",\n    className: \"mb-3\",\n    onChange: handleChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 32\n    }\n  }), errors.title && __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 35\n    }\n  }, __jsx(\"i\", {\n    className: \"text-danger\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 38\n    }\n  }, errors.title)), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 17\n    }\n  }), __jsx(\"hr\", {\n    className: \"w-60\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 17\n    }\n  }), __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 17\n    }\n  }, \"Description:\"), __jsx(\"textarea\", {\n    onChange: handleChange,\n    name: \"description\",\n    id: \"\",\n    cols: \"30\",\n    rows: \"10\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 17\n    }\n  }), errors.body && __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 34\n    }\n  }, __jsx(\"i\", {\n    className: \"text-danger\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 37\n    }\n  }, errors.body)), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 17\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 17\n    }\n  }, \"Create\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPost);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9uZXcuanM/OWViOCJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJOZXdQb3N0IiwiZm9ybSIsInNldEZvcm0iLCJ1c2VTdGF0ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY3JlYXRlTm90ZSIsInBvc3QiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZXJycyIsInZhbGlkYXRlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZXJyIiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0JBQUQsQ0FBckI7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLE1BQU07QUFFcEIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDO0FBQUVDLFNBQUssRUFBRSxFQUFUO0FBQWFDLGVBQVcsRUFBRTtBQUExQixHQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NOLHNEQUFRLENBQUMsS0FBRCxDQUFoRDtBQUNBLFFBQU1PLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUosWUFBSixFQUFrQjtBQUNoQixVQUFJSyxNQUFNLENBQUNDLElBQVAsQ0FBWVIsTUFBWixFQUFvQlMsTUFBcEIsS0FBK0IsQ0FBbkMsRUFBc0M7QUFDcENDLGtCQUFVO0FBQ1gsT0FGRCxNQUVPO0FBQ0xQLHVCQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0Q7QUFDRjtBQUNGLEdBUlEsRUFRTixDQUFDSCxNQUFELENBUk0sQ0FBVDs7QUFVQSxRQUFNVSxVQUFVLEdBQUcsWUFBWTtBQUM3QixRQUFJO0FBQ0YsWUFBTWxCLEtBQUssQ0FBQ21CLElBQU4sQ0FBVyxpQ0FBWCxFQUE4Q2hCLElBQTlDLENBQU47QUFFQVMsWUFBTSxDQUFDUSxJQUFQLENBQVksR0FBWjtBQUNELEtBSkQsQ0FJRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRDtBQUNGLEdBUkQ7O0FBVUEsUUFBTUcsWUFBWSxHQUFJQyxDQUFELElBQU87QUFDMUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUlDLElBQUksR0FBR0MsUUFBUSxFQUFuQjtBQUNBbkIsYUFBUyxDQUFDa0IsSUFBRCxDQUFUO0FBQ0FoQixtQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNELEdBTEQ7O0FBT0EsUUFBTWtCLFlBQVksR0FBSUosQ0FBRCxJQUFPO0FBQzFCckIsV0FBTyxpQ0FDRkQsSUFERTtBQUVMLE9BQUNzQixDQUFDLENBQUNLLE1BQUYsQ0FBU0MsSUFBVixHQUFpQk4sQ0FBQyxDQUFDSyxNQUFGLENBQVNFO0FBRnJCLE9BQVA7O0FBSUEsUUFBSXhCLE1BQU0sQ0FBQ2lCLENBQUMsQ0FBQ0ssTUFBRixDQUFTQyxJQUFWLENBQVYsRUFBMkI7QUFDekIsYUFBT3ZCLE1BQU0sQ0FBQ2lCLENBQUMsQ0FBQ0ssTUFBRixDQUFTQyxJQUFWLENBQWI7QUFDRDtBQUNGLEdBUkQ7O0FBVUEsUUFBTUgsUUFBUSxHQUFHLE1BQU07QUFDckIsUUFBSUssR0FBRyxHQUFHLEVBQVY7O0FBRUEsUUFBSSxDQUFDOUIsSUFBSSxDQUFDRyxLQUFWLEVBQWlCO0FBQ2YyQixTQUFHLENBQUMzQixLQUFKLEdBQVksbUJBQVo7QUFDRDs7QUFDRCxRQUFJLENBQUNILElBQUksQ0FBQ0ksV0FBVixFQUF1QjtBQUNyQjBCLFNBQUcsQ0FBQ0MsSUFBSixHQUFXLGtCQUFYO0FBQ0Q7O0FBRUQsV0FBT0QsR0FBUDtBQUNELEdBWEQ7O0FBYUEsU0FDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUl2QixZQUFZLEdBQUcsWUFBSCxHQUVWO0FBQU0sWUFBUSxFQUFFYyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBQ2lCO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLE9BQXhCO0FBQWdDLGFBQVMsRUFBQyxNQUExQztBQUFpRCxZQUFRLEVBQUVLLFlBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEakIsRUFHSXJCLE1BQU0sQ0FBQ0YsS0FBUCxJQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCRSxNQUFNLENBQUNGLEtBQW5DLENBQUgsQ0FIcEIsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEYsRUFRRTtBQUFVLFlBQVEsRUFBRXVCLFlBQXBCO0FBQWtDLFFBQUksRUFBQyxhQUF2QztBQUFxRCxNQUFFLEVBQUMsRUFBeEQ7QUFBMkQsUUFBSSxFQUFDLElBQWhFO0FBQXFFLFFBQUksRUFBQyxJQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFVSXJCLE1BQU0sQ0FBQzBCLElBQVAsSUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCMUIsTUFBTSxDQUFDMEIsSUFBbkMsQ0FBSCxDQVZuQixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixFQWFFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDLGlCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsQ0FKTixDQUpGLENBRkYsQ0FERjtBQStCRCxDQXhGRDs7QUEwRmVoQyxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL25ldy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXG5cbmNvbnN0IE5ld1Bvc3QgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoeyB0aXRsZTogJycsIGRlc2NyaXB0aW9uOiAnJyB9KVxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1N1Ym1pdHRpbmcpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjcmVhdGVOb3RlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtlcnJvcnNdKVxuXG4gIGNvbnN0IGNyZWF0ZU5vdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbm90ZXMnLCBmb3JtKVxuXG4gICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IGVycnMgPSB2YWxpZGF0ZSgpXG4gICAgc2V0RXJyb3JzKGVycnMpXG4gICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldEZvcm0oe1xuICAgICAgLi4uZm9ybSxcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICB9KVxuICAgIGlmIChlcnJvcnNbZS50YXJnZXQubmFtZV0pIHtcbiAgICAgIGRlbGV0ZSBlcnJvcnNbZS50YXJnZXQubmFtZV1cbiAgICB9XG4gIH1cblxuICBjb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgICBsZXQgZXJyID0ge31cblxuICAgIGlmICghZm9ybS50aXRsZSkge1xuICAgICAgZXJyLnRpdGxlID0gJ1RpdGxlIGlzIHJlcXVpcmVkJ1xuICAgIH1cbiAgICBpZiAoIWZvcm0uZGVzY3JpcHRpb24pIHtcbiAgICAgIGVyci5ib2R5ID0gJ0JvZHkgaXMgcmVxdWlyZWQnXG4gICAgfVxuXG4gICAgcmV0dXJuIGVyclxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtY2VudGVyJz5cbiAgICAgIDxoMyBjbGFzc05hbWU9J210LTMnPkNyZWF0ZSBOZXcgUG9zdDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgIE5ldyBQb3N0XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzU3VibWl0dGluZyA/ICdMb2FkaW5nLi4uJ1xuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxoND5UaXRsZTo8L2g0PjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGNsYXNzTmFtZT0nbWItMycgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBlcnJvcnMudGl0bGUgJiYgPHA+PGkgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy50aXRsZX08L2k+PC9wPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPSd3LTYwJyAvPlxuICAgICAgICAgICAgICAgIDxoND5EZXNjcmlwdGlvbjo8L2g0PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZXJyb3JzLmJvZHkgJiYgPHA+PGkgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5ib2R5fTwvaT48L3A+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5Jz5DcmVhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/new.js\n");

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