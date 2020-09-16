module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/notes/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/Note.js":
/*!************************!*\
  !*** ./models/Note.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst NoteSchema = new mongoose.Schema({\n  title: {\n    type: String,\n    required: [true, 'Please add a title'],\n    unique: true,\n    trim: true,\n    maxlength: [40, 'Title cannot be more than 40 characters']\n  },\n  description: {\n    type: String,\n    required: true,\n    maxlength: [500, 'Description cannot be more than 500 characters']\n  }\n});\nmodule.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvTm90ZS5qcz9kMTNkIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIk5vdGVTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsInRyaW0iLCJtYXhsZW5ndGgiLCJkZXNjcmlwdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJOb3RlIiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBRCxDQUF4Qjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsSUFBSUYsUUFBUSxDQUFDRyxNQUFiLENBQW9CO0FBQ3JDQyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFQyxNQUREO0FBRUxDLFlBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyxvQkFBUCxDQUZMO0FBR0xDLFVBQU0sRUFBRSxJQUhIO0FBSUxDLFFBQUksRUFBRSxJQUpEO0FBS0xDLGFBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSyx5Q0FBTDtBQUxOLEdBRDhCO0FBUXJDQyxhQUFXLEVBQUU7QUFDWE4sUUFBSSxFQUFFQyxNQURLO0FBRVhDLFlBQVEsRUFBRSxJQUZDO0FBR1hHLGFBQVMsRUFBRSxDQUFDLEdBQUQsRUFBTSxnREFBTjtBQUhBO0FBUndCLENBQXBCLENBQW5CO0FBZUFFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmIsUUFBUSxDQUFDYyxNQUFULENBQWdCQyxJQUFoQixJQUF3QmYsUUFBUSxDQUFDZ0IsS0FBVCxDQUFlLE1BQWYsRUFBdUJkLFVBQXZCLENBQXpDIiwiZmlsZSI6Ii4vbW9kZWxzL05vdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcblxuY29uc3QgTm90ZVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICB0aXRsZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgYWRkIGEgdGl0bGUnXSxcbiAgICB1bmlxdWU6IHRydWUsXG4gICAgdHJpbTogdHJ1ZSxcbiAgICBtYXhsZW5ndGg6IFs0MCwgJ1RpdGxlIGNhbm5vdCBiZSBtb3JlIHRoYW4gNDAgY2hhcmFjdGVycyddXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIG1heGxlbmd0aDogWzUwMCwgJ0Rlc2NyaXB0aW9uIGNhbm5vdCBiZSBtb3JlIHRoYW4gNTAwIGNoYXJhY3RlcnMnXVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Ob3RlIHx8IG1vbmdvb3NlLm1vZGVsKCdOb3RlJywgTm90ZVNjaGVtYSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/Note.js\n");

/***/ }),

/***/ "./pages/api/notes/[id].js":
/*!*********************************!*\
  !*** ./pages/api/notes/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var _models_Note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Note */ \"./models/Note.js\");\n/* harmony import */ var _models_Note__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Note__WEBPACK_IMPORTED_MODULE_1__);\n\n\nObject(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    query: {\n      id\n    },\n    method\n  } = req;\n\n  switch (method) {\n    case 'GET':\n      try {\n        const note = await _models_Note__WEBPACK_IMPORTED_MODULE_1___default.a.findById(id);\n\n        if (!note) {\n          res.status(400).json({\n            success: false\n          });\n        }\n\n        res.status(200).json({\n          success: true,\n          data: note\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case 'PUT':\n      try {\n        const note = await _models_Note__WEBPACK_IMPORTED_MODULE_1___default.a.findByIdAndUpdate(id, req.body, {\n          new: true,\n          runValidators: true\n        });\n\n        if (!note) {\n          res.status(400).json({\n            success: false\n          });\n        }\n\n        res.status(200).json({\n          success: true,\n          data: note\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case 'DELETE':\n      try {\n        const deletedNote = await _models_Note__WEBPACK_IMPORTED_MODULE_1___default.a.deleteOne({\n          _id: id\n        });\n\n        if (!deletedNote) {\n          res.status(400).json({\n            success: false\n          });\n        }\n\n        res.status(200).json({\n          success: true,\n          data: {}\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    default:\n      res.status(400).json({\n        success: false\n      });\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbm90ZXMvLmpzPzMyZWMiXSwibmFtZXMiOlsiZGJDb25uZWN0IiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsIm1ldGhvZCIsIm5vdGUiLCJOb3RlIiwiZmluZEJ5SWQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsImZpbmRCeUlkQW5kVXBkYXRlIiwiYm9keSIsIm5ldyIsInJ1blZhbGlkYXRvcnMiLCJkZWxldGVkTm90ZSIsImRlbGV0ZU9uZSIsIl9pZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLGdFQUFTO0FBRU0sc0VBQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxRQUFNO0FBQ0pDLFNBQUssRUFBRTtBQUFFQztBQUFGLEtBREg7QUFFSkM7QUFGSSxNQUdGSixHQUhKOztBQUtBLFVBQVFJLE1BQVI7QUFDRSxTQUFLLEtBQUw7QUFDRSxVQUFJO0FBQ0YsY0FBTUMsSUFBSSxHQUFHLE1BQU1DLG1EQUFJLENBQUNDLFFBQUwsQ0FBY0osRUFBZCxDQUFuQjs7QUFFQSxZQUFJLENBQUNFLElBQUwsRUFBVztBQUNUSixhQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxtQkFBTyxFQUFFO0FBQVgsV0FBckI7QUFDRDs7QUFFRFQsV0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRSxJQUFYO0FBQWlCQyxjQUFJLEVBQUVOO0FBQXZCLFNBQXJCO0FBQ0QsT0FSRCxDQVFFLE9BQU9PLEtBQVAsRUFBYztBQUNkWCxXQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFO0FBQVgsU0FBckI7QUFDRDs7QUFDRDs7QUFDRixTQUFLLEtBQUw7QUFDRSxVQUFJO0FBQ0YsY0FBTUwsSUFBSSxHQUFHLE1BQU1DLG1EQUFJLENBQUNPLGlCQUFMLENBQXVCVixFQUF2QixFQUEyQkgsR0FBRyxDQUFDYyxJQUEvQixFQUFxQztBQUN0REMsYUFBRyxFQUFFLElBRGlEO0FBRXREQyx1QkFBYSxFQUFFO0FBRnVDLFNBQXJDLENBQW5COztBQUtBLFlBQUksQ0FBQ1gsSUFBTCxFQUFXO0FBQ1RKLGFBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLG1CQUFPLEVBQUU7QUFBWCxXQUFyQjtBQUNEOztBQUVEVCxXQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJDLGNBQUksRUFBRU47QUFBdkIsU0FBckI7QUFDRCxPQVhELENBV0UsT0FBT08sS0FBUCxFQUFjO0FBQ2RYLFdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFyQjtBQUNEOztBQUNEOztBQUNGLFNBQUssUUFBTDtBQUNFLFVBQUk7QUFDRixjQUFNTyxXQUFXLEdBQUcsTUFBTVgsbURBQUksQ0FBQ1ksU0FBTCxDQUFlO0FBQUVDLGFBQUcsRUFBRWhCO0FBQVAsU0FBZixDQUExQjs7QUFFQSxZQUFJLENBQUNjLFdBQUwsRUFBa0I7QUFDaEJoQixhQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxtQkFBTyxFQUFFO0FBQVgsV0FBckI7QUFDRDs7QUFFRFQsV0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRSxJQUFYO0FBQWlCQyxjQUFJLEVBQUU7QUFBdkIsU0FBckI7QUFDRCxPQVJELENBUUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RYLFdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFyQjtBQUNEOztBQUNEOztBQUNGO0FBQ0VULFNBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUE3Q0o7QUErQ0QsQ0FyREQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbm90ZXMvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGJDb25uZWN0J1xuaW1wb3J0IE5vdGUgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL05vdGUnXG5cbmRiQ29ubmVjdCgpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7XG4gICAgcXVlcnk6IHsgaWQgfSxcbiAgICBtZXRob2RcbiAgfSA9IHJlcVxuXG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSAnR0VUJzpcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG5vdGUgPSBhd2FpdCBOb3RlLmZpbmRCeUlkKGlkKVxuXG4gICAgICAgIGlmICghbm90ZSkge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbm90ZSB9KVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdQVVQnOlxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm90ZSA9IGF3YWl0IE5vdGUuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHJlcS5ib2R5LCB7XG4gICAgICAgICAgbmV3OiB0cnVlLFxuICAgICAgICAgIHJ1blZhbGlkYXRvcnM6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIW5vdGUpIHtcbiAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG5vdGUgfSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSlcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnREVMRVRFJzpcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZWROb3RlID0gYXdhaXQgTm90ZS5kZWxldGVPbmUoeyBfaWQ6IGlkIH0pXG5cbiAgICAgICAgaWYgKCFkZWxldGVkTm90ZSkge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YToge30gfSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSlcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSlcbiAgICAgIGJyZWFrXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/notes/[id].js\n");

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\n\nasync function dbConnect() {\n  if (connection.isConnected) {\n    return;\n  }\n\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.set('useCreateIndex', true);\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\"mongodb+srv://travis123:travis123@mern.wagwc.mongodb.net/<dbname>?retryWrites=true&w=majority\", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useFindAndModify: false\n  });\n  connection.isConnected = db.connections[0].readyState;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYkNvbm5lY3QuanM/NDZlMiJdLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJtb25nb29zZSIsInNldCIsImRiIiwiY29ubmVjdCIsInByb2Nlc3MiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxlQUFlQyxTQUFmLEdBQTJCO0FBQ3pCLE1BQUlELFVBQVUsQ0FBQ0UsV0FBZixFQUE0QjtBQUMxQjtBQUNEOztBQUVEQyxpREFBUSxDQUFDQyxHQUFULENBQWEsZ0JBQWIsRUFBK0IsSUFBL0I7QUFFQSxRQUFNQyxFQUFFLEdBQUcsTUFBTUYsK0NBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsK0ZBQWpCLEVBQXdDO0FBQ3ZEQyxtQkFBZSxFQUFFLElBRHNDO0FBRXZEQyxzQkFBa0IsRUFBRSxJQUZtQztBQUd2REMsb0JBQWdCLEVBQUU7QUFIcUMsR0FBeEMsQ0FBakI7QUFNQVYsWUFBVSxDQUFDRSxXQUFYLEdBQXlCRyxFQUFFLENBQUNNLFdBQUgsQ0FBZSxDQUFmLEVBQWtCQyxVQUEzQztBQUNEOztBQUVjWCx3RUFBZiIsImZpbGUiOiIuL3V0aWxzL2RiQ29ubmVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgY29ubmVjdGlvbiA9IHt9XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG1vbmdvb3NlLnNldCgndXNlQ3JlYXRlSW5kZXgnLCB0cnVlKVxuXG4gIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkksIHtcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlXG4gIH0pXG5cbiAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/dbConnect.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });