/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.jsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/1163023.png":
/*!*************************!*\
  !*** ./src/1163023.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/1163023.png");

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MainSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MainSection */ "./src/components/MainSection.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_CardStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/CardStore */ "./src/store/CardStore.jsx");
/* harmony import */ var _components_RegularHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/RegularHeader */ "./src/components/RegularHeader.jsx");






function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _store_CardStore__WEBPACK_IMPORTED_MODULE_3__["cardStore"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainSection__WEBPACK_IMPORTED_MODULE_1__["MainSection"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Card.jsx":
/*!*********************************!*\
  !*** ./src/components/Card.jsx ***!
  \*********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var _hooks_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/UseWindowDimensions */ "./src/hooks/UseWindowDimensions.jsx");




const FilmWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  font-size: 19px;
  font-family: "Segoe UI", serif;
  font-weight: 700;
  color: white;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all;
`;
const FilmInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  height: 10%;
  text-align: left;
`;
const IframeBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].iframe`
  width: ${props => props.width};
  height: 480px;
  border: solid white 3px;
`;
const Card = props => {
  const {
    height,
    width
  } = Object(_hooks_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [calculatedWidth, setCalculatedWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(640); //handling resize

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (width < 700) setCalculatedWidth(width - 50);else setCalculatedWidth(640);
  }, [width]);
  const [name] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.name);
  const [composition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.composition);
  const [videoUrl] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.videoUrl);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilmWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IframeBox, {
    src: videoUrl,
    width: calculatedWidth
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilmInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["FaBookOpen"], null), " ", composition), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BsFillPersonFill"], null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, name))));
};

/***/ }),

/***/ "./src/components/InfoPage.jsx":
/*!*************************************!*\
  !*** ./src/components/InfoPage.jsx ***!
  \*************************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var _1163023_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../1163023.png */ "./src/1163023.png");
/* harmony import */ var _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-page-imgs/Закопець-1.png */ "./src/components/info-page-imgs/Закопець-1.png");
/* harmony import */ var _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-page-imgs/Кузнєцова-1.png */ "./src/components/info-page-imgs/Кузнєцова-1.png");
/* harmony import */ var _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-page-imgs/Іванова Л.І.png */ "./src/components/info-page-imgs/Іванова Л.І.png");
/* harmony import */ var _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info-page-imgs/Райт І.С.png */ "./src/components/info-page-imgs/Райт І.С.png");
/* harmony import */ var _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info-page-imgs/Остапчук М. М.png */ "./src/components/info-page-imgs/Остапчук М. М.png");
/* harmony import */ var _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./info-page-imgs/Марцева-1.png */ "./src/components/info-page-imgs/Марцева-1.png");
/* harmony import */ var _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./info-page-imgs/Заходякін-1.png */ "./src/components/info-page-imgs/Заходякін-1.png");
/* harmony import */ var _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./info-page-imgs/Вишневська-1.png */ "./src/components/info-page-imgs/Вишневська-1.png");












const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  background-image: url("${_1163023_png__WEBPACK_IMPORTED_MODULE_3__["default"]}");
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const PersonInfoSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
`;

const Person = props => {
  const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
      display: flex;
      flex-direction: column;
      justify-content: center;
    `;
  const TextSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
      color: white;
      margin-left: 10px;
      font-family: "Segoe UI", serif;
      font-weight: 600;
      text-align: left;
      font-size: 17px;
    `;
  const Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
      margin-right: 20%;
      margin-top: 5px;
      margin-left: 20%;
      border: solid white 2px;
    `;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), props.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Image, {
    src: props.imgUrl
  }));
};

const Div = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  text-align: left;
`;
const A = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a`
  font-family: "Segoe UI", serif;
  font-style: oblique;
  font-weight: 600;
  margin-top: 20px;
  font-size: 20px;
  color: white;
  text-decoration: none;
  transition: all 0.5s;
  :hover {
    color: darkred;
  }
`;
const InfoPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://drive.google.com/file/d/1qdyL0mXafowI888sPJLyM7yuhYJNR70b/view?usp=sharing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), "\u0421\u043A\u043B\u0430\u0434 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0439\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u0456\u0442\u0435\u0442\u0443 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://drive.google.com/file/d/1ka7GuVc0mhHzR5jq1qhTCHnlNa0HcXmB/view?usp=sharing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://drive.google.com/file/d/16sz0uu564Bl7l9Y-bqMO_-gLPqTuDBYC/view?usp=sharing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), "\u0410\u0444\u0456\u0448\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PersonInfoSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    text: "\u0417\u0430\u043A\u043E\u043F\u0435\u0446\u044C \u041B.\u0421.- \u0433\u043E\u043B\u043E\u0432\u0430 \u0436\u0443\u0440\u0456, \u0437\u0430\u0441\u043B\u0443\u0436\u0435\u043D\u0438\u0439  \u0434\u0456\u044F\u0447 \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0438, \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447-\u043C\u0435\u0442\u043E\u0434\u0438\u0441\u0442 \u041B\u044C\u0432\u0456\u0432\u0441\u044C\u043A\u043E\u0433\u043E \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u043E\u0433\u043E \u043C\u0443\u0437\u0438\u0447\u043D\u043E\u0433\u043E \u043B\u0456\u0446\u0435\u044E \u0456\u043C\u0435\u043D\u0456 \u0421. \u041A\u0440\u0443\u0448\u0435\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u043E\u0457, \u043F\u043E\u0447\u0435\u0441\u043D\u0438\u0439 \u0430\u043C\u0431\u0430\u0441\u0430\u0434\u043E\u0440 \u043C\u0443\u0437\u0438\u0447\u043D\u043E\u0457  \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0438  \u041F\u043E\u043B\u044C\u0449\u0456"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    text: `Кузнєцова О.О.- голова журі, доктор філософії, кандидат педагогічних наук, професор кафедри  музично- інструментального виконавства Харківського Національного педагогічного університету імені Г.Сковороди, заслужений діяч мистецтв України,  "Відмінник освіти України", відзначена орденом Міністерства культури  України "За досягнення в розвитку  культури  і мистецтв ", секретар Національної всеукраїнської музичної спілки, голова Асоціації піаністів  Національної  всеукраїнської музичної спілки,  президент Асоціації піаністів-педагогів України("EPTA" Ukraine), Віце- президент  Асоціації піаністів-педагогів Європи "EPTA" London).`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    text: "\u0406\u0432\u0430\u043D\u043E\u0432\u0430 \u041B.\u0406., \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447 \u043F\u0435\u0440\u0448\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u041A\u0417 '\u041B\u0443\u0446\u044C\u043A\u0430 \u043C\u0443\u0437\u0438\u0447\u043D\u0430  \u0448\u043A\u043E\u043B\u0430 3'."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_7__["default"],
    text: "\u0420\u0430\u0439\u0442 \u0406.\u0421., \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442 \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0456\u0447\u043D\u0438\u0445 \u043D\u0430\u0443\u043A,  \u043D\u0430\u0443\u043A\u043E\u0432\u0438\u0439 \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0456\u0457 \u0435\u0441\u0442\u0435\u0442\u0438\u0447\u043D\u043E\u0433\u043E \u0432\u0438\u0445\u043E\u0432\u0430\u043D\u043D\u044F \u0442\u0430 \u043C\u0438\u0441\u0442\u0435\u0446\u044C\u043A\u043E\u0457  \u043E\u0441\u0432\u0456\u0442\u0438  \u0406\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0443  \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0432\u0438\u0445\u043E\u0432\u0430\u043D\u043D\u044F  \u041D\u0430\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0457  \u0430\u043A\u0430\u0434\u0435\u043C\u0456\u0457  \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0456\u0447\u043D\u0438\u0445  \u043D\u0430\u0443\u043A \u0423\u043A\u0440\u0430\u0457\u043D\u0438."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_9__["default"],
    text: "\u041C\u0430\u0440\u0446\u0435\u0432\u0430 \u0416.\u041F., \u0441\u0442\u0430\u0440\u0448\u0438\u0439 \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447, \u0437\u0430\u0432\u0456\u0434\u0443\u044E\u0447\u0430 \u0444\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043D\u0438\u043C \u0432\u0456\u0434\u0434\u0456\u043B\u043E\u043C \u0420\u0456\u0432\u043D\u0435\u043D\u0441\u044C\u043A\u043E\u0457 \u0434\u0438\u0442\u044F\u0447\u043E\u0457 \u043C\u0443\u0437\u0438\u0447\u043D\u043E\u0457 \u0448\u043A\u043E\u043B\u0438 \u21161 \u0456\u043C\u0435\u043D\u0456 \u041C. \u041B\u0438\u0441\u0435\u043D\u043A\u0430."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_8__["default"],
    text: "\u041E\u0441\u0442\u0430\u043F\u0447\u0443\u043A \u041C. \u041C., \u0434\u043E\u0446\u0435\u043D\u0442 \u043A\u0430\u0444\u0435\u0434\u0440\u0438  \u0433\u0440\u0438 \u043D\u0430  \u043C\u0443\u0437\u0438\u0447\u043D\u0438\u0445 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0445 \u0406\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0443  \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432  \u0420\u0414\u0413\u0423."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_10__["default"],
    text: "\u0417\u0430\u0445\u043E\u0434\u044F\u043A\u0456\u043D \u041E.\u0412., \u0434\u043E\u0446\u0435\u043D\u0442 \u043A\u0430\u0444\u0435\u0434\u0440\u0438 \u0435\u0441\u0442\u0440\u0430\u0434\u043D\u043E\u0457 \u043C\u0443\u0437\u0438\u043A\u0438 \u0406\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0443  \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432  \u0420\u0414\u0413\u0423."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_11__["default"],
    text: "\u0412\u0438\u0448\u043D\u0435\u0432\u0441\u044C\u043A\u0430 \u0406.\u041F., \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447 \u0432\u0438\u0449\u043E\u0457  \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457, \u0433\u043E\u043B\u043E\u0432\u0430 \u0446\u0438\u043A\u043B\u043E\u0432\u043E\u0457 \u043A\u043E\u043C\u0456\u0441\u0456\u0457 ,,\u0424\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043E\" \u0420\u0456\u0432\u043D\u0435\u043D\u0441\u044C\u043A\u043E\u0433\u043E \u043C\u0443\u0437\u0438\u0447\u043D\u043E\u0433\u043E \u0443\u0447\u0438\u043B\u0438\u0449\u0430 \u0420\u0414\u0413\u0423."
  })));
};

/***/ }),

/***/ "./src/components/MainSection.jsx":
/*!****************************************!*\
  !*** ./src/components/MainSection.jsx ***!
  \****************************************/
/*! exports provided: MainSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSection", function() { return MainSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ResultsFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResultsFilter */ "./src/components/ResultsFilter.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ "./src/components/Card.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _RegularHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RegularHeader */ "./src/components/RegularHeader.jsx");
/* harmony import */ var _InfoPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InfoPage */ "./src/components/InfoPage.jsx");
/* harmony import */ var _1163023_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../1163023.png */ "./src/1163023.png");








const MainSectionFlex = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: bisque;
  background-image: url("${_1163023_png__WEBPACK_IMPORTED_MODULE_7__["default"]}");
`;
const MainSection = () => {
  const cards = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.cards);
  const isDataInPlace = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.isDataInPlace);
  const cardCount = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.cardCount);
  const sectionsForFilter = [`Номінація "Фортепіано соло"`, `Номінація "Фортепіанний ансамбль"`, `Номінація "Концертмейстер"`, `Усі відео`, `Про конкурс`];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegularHeader__WEBPACK_IMPORTED_MODULE_5__["RegularHeader"], {
    cardCount: cardCount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResultsFilter__WEBPACK_IMPORTED_MODULE_2__["ResultsFilter"], {
    sections: sectionsForFilter
  }), isDataInPlace ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainSectionFlex, null, cards.map(card => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    name: card.name,
    videoUrl: card.videoUrl,
    composition: card.composition,
    key: card.id.$oid
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoPage__WEBPACK_IMPORTED_MODULE_6__["InfoPage"], null));
};

/***/ }),

/***/ "./src/components/RegularHeader.jsx":
/*!******************************************!*\
  !*** ./src/components/RegularHeader.jsx ***!
  \******************************************/
/*! exports provided: RegularHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularHeader", function() { return RegularHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/UseWindowDimensions */ "./src/hooks/UseWindowDimensions.jsx");





const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input`
  margin-top: 14px;
  font-size: 15px;
  width: 15%;
 border: solid white 2px;
  background-color: black;
  color: white;
  transition: all 0.5s;

  :hover {
    color: darkred;
  }`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input`
  font-size: 15px;
  flex-direction: column;
  color: ${props => props.inputColor || "palevioletred"};
`;
const InputStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 50%;
`;
const InputWraper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 60px;
`;
const StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  color: white;
`;
const Error = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 17px;
  font-size: 18px;
  color: red;
  text-align: center;`;
const Warn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 17px;
  font-size: 18px;
  color: yellow;
  text-align: center;`;
const RegularHeader = props => {
  const searchField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const error = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.error);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    height,
    width
  } = Object(_hooks_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_4__["default"])();

  function handler() {
    let str = String(searchField.current.value);

    if (str.length < 3 || str.includes(" ")) {
      dispatch({
        type: "ERROR",
        msg: "Будбь ласка введіть більше 3 символів і не використовуйте пробіл"
      });
    } else {
      dispatch({
        type: "SEARCH",
        query: str
      });
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handler();
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputWraper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputStyle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSpan, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["AiOutlineFileSearch"], null), "\u041F\u043E\u0448\u0443\u043A \u0432\u0456\u0434\u0435\u043E \u043F\u043E \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0443 \u0443\u0447\u0430\u0441\u043D\u0438\u043A\u0430 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    onKeyPress: handleKeyPress,
    ref: searchField,
    type: "text",
    placeholder: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u0443\u0447\u0430\u0441\u043D\u0438\u043A\u0430...",
    inputColor: "black"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    value: "\u041F\u043E\u0448\u0443\u043A",
    type: "submit",
    onClick: handler
  })), error !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null), error, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null)) : null, props.cardCount === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Warn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null), "\u0432\u0456\u0434\u0435\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0456", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null)) : null);
};

/***/ }),

/***/ "./src/components/ResultsFilter.jsx":
/*!******************************************!*\
  !*** ./src/components/ResultsFilter.jsx ***!
  \******************************************/
/*! exports provided: ResultsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsFilter", function() { return ResultsFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var _hooks_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/UseWindowDimensions */ "./src/hooks/UseWindowDimensions.jsx");





const FilterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  font-size: 15px;
  font-family: "Segoe UI", serif;
  background-color: #232323;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;`;
const FilterSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterContainer)`
  align-self: center;
  margin: 10px;
  color: white;
  transition: all 0.5s;
  :hover {
    color: darkred;
  }
`;
const DivThinLine = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 100%;
  border: gray solid 1px;
  background-color: gray;
  height: 2%;
  transition: all ease;
`;
const StyledResultsFilterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: space-between;
  background-color: #232323;
  margin-top: 15px;
`;
const grow_0 = styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  0% {
    width: 100%;
  }
  100% {
    width: ${props => props.width};
  }
  0% {
    left: 0px;
  }
  100% {
    width: ${props => props.left};
  }
`;
const grow_1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  0% {
    width: 100%;
  }
  100% {
    width: ${props => props.width};
  }
  0% {
    left: 1px;
  }
  100% {
    width: ${props => props.left};
  }
`;
const ThinLineInnerDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: ${props => props.width};
  left: ${props => props.left};
  position: relative;
  border: red solid 1px;
  background-color: red;
  height: 1%;
  animation: ${props => props.animation % 2 === 0 ? grow_0 : grow_1} 0.5s linear;
`;
const ResultsFilter = props => {
  const [sections] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.sections);
  const [redLineWidth, setRedLineWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("10px");
  const [redLineLeft, setRedLineLeft] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("10px");
  const [animation, setAnimation] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    height,
    width
  } = Object(_hooks_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const markedSectionRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); //handling redLine on resize

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    reRenderRedLin({
      target: markedSectionRef.current
    });
  }, [width]);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  function reRenderRedLin(event) {
    markedSectionRef.current = event.target;
    let currentSectionWidth = event.target.getBoundingClientRect().width;
    let currentSectionLeft = event.target.getBoundingClientRect().left - 10;
    setRedLineWidth(currentSectionWidth + "px");
    setRedLineLeft(currentSectionLeft + "px");
    let counter = animation + 1;
    setAnimation(counter);
  }

  function onFilterSectionClick(selectedSection, event) {
    reRenderRedLin(event);
    let selectedSectionString = selectedSection.section;
    console.log(selectedSectionString);

    switch (selectedSectionString) {
      case `Усі відео`:
        dispatch({
          type: "ALL"
        });
        break;

      case `Номінація "Фортепіано соло"`:
        dispatch({
          type: "group-1"
        });
        break;

      case `Номінація "Фортепіанний ансамбль"`:
        dispatch({
          type: "group-2"
        });
        break;

      case `Номінація "Концертмейстер"`:
        dispatch({
          type: "group-3"
        });
        break;
    }
  }

  function renderInfoPage(event) {
    reRenderRedLin(event);
    dispatch({
      type: "INFO_PAGE"
    });
  }

  let renderedSections = sections.map(section => section === "Про конкурс" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilterSection, {
    onClick: renderInfoPage,
    key: section
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_3__["FaUniversity"], null), section, " ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilterSection, {
    ref: markedSectionRef,
    onClick: e => onFilterSectionClick({
      section
    }, e),
    key: section
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_3__["FaFolder"], null), section));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledResultsFilterWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilterContainer, {
    children: renderedSections
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DivThinLine, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThinLineInnerDiv, {
    width: redLineWidth,
    left: redLineLeft,
    animation: animation
  })));
};

/***/ }),

/***/ "./src/components/info-page-imgs/Іванова Л.І.png":
/*!*******************************************************!*\
  !*** ./src/components/info-page-imgs/Іванова Л.І.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/Іванова Л.І.png");

/***/ }),

/***/ "./src/components/info-page-imgs/Вишневська-1.png":
/*!********************************************************!*\
  !*** ./src/components/info-page-imgs/Вишневська-1.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/Вишневська-1.png");

/***/ }),

/***/ "./src/components/info-page-imgs/Закопець-1.png":
/*!******************************************************!*\
  !*** ./src/components/info-page-imgs/Закопець-1.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/Закопець-1.png");

/***/ }),

/***/ "./src/components/info-page-imgs/Заходякін-1.png":
/*!*******************************************************!*\
  !*** ./src/components/info-page-imgs/Заходякін-1.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/Заходякін-1.png");

/***/ }),

/***/ "./src/components/info-page-imgs/Кузнєцова-1.png":
/*!*******************************************************!*\
  !*** ./src/components/info-page-imgs/Кузнєцова-1.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/Кузнєцова-1.png");

/***/ }),

/***/ "./src/components/info-page-imgs/Марцева-1.png":
/*!*****************************************************!*\
  !*** ./src/components/info-page-imgs/Марцева-1.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/Марцева-1.png");

/***/ }),

/***/ "./src/components/info-page-imgs/Остапчук М. М.png":
/*!*********************************************************!*\
  !*** ./src/components/info-page-imgs/Остапчук М. М.png ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/Остапчук М. М.png");

/***/ }),

/***/ "./src/components/info-page-imgs/Райт І.С.png":
/*!****************************************************!*\
  !*** ./src/components/info-page-imgs/Райт І.С.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/Райт І.С.png");

/***/ }),

/***/ "./src/hooks/UseWindowDimensions.jsx":
/*!*******************************************!*\
  !*** ./src/hooks/UseWindowDimensions.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWindowDimensions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height
  } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getWindowDimensions());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.jsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('target'));

/***/ }),

/***/ "./src/store/CardStore.jsx":
/*!*********************************!*\
  !*** ./src/store/CardStore.jsx ***!
  \*********************************/
/*! exports provided: cardStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardStore", function() { return cardStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

const group1 = `Номінація "Фортепіано соло"`;
const group2 = `Номінація "Фортепіанний ансамбль"`;
const group3 = `Номінація "Концертмейстер"`;
const myCards = [{
  "id": {
    "$oid": "6097a02b6bcf772038b9b3a5"
  },
  "name": "Агратіна Станіслав, 9 років. ",
  "composition": "1) М.Глінка. Почуття, 2)Ю.Щуровський. Танок",
  "videoUrl": "https://drive.google.com/file/d/194yt_sKC5Et3r49zCERsdBZeDQgY-G_i/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3a6"
  },
  "name": "Валігура Варвара, 9 років. ",
  "composition": "М.Лемішко. Коломийка",
  "videoUrl": "https://drive.google.com/file/d/1c6hTIqDl-cAF3Br3l1c2uwqFZsLVSPTv/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3a7"
  },
  "name": "Валігура Варвара, 9 років. ",
  "composition": "Т.Максімов. ''Задзеркалля''",
  "videoUrl": "https://drive.google.com/file/d/15Yr6Qxm4rstDOMU2vGn5Jwq5VfUpN2SD/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3a8"
  },
  "name": "Василевська Христина,7 років.",
  "composition": "1)В.Гіллок.''Самотня бальна зала''. 2)Т.Ростимашенко.''Чаклун''",
  "videoUrl": "https://drive.google.com/file/d/1GtxUKuUkLKAnh5oCf9FluiUTQoJCTbMM/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3a9"
  },
  "name": "Волинець Олександр, 8 років. ",
  "composition": "1)Л.Колодуб. Аркан. 2)Ф.Рибіцький. ''Реготушка''",
  "videoUrl": "https://drive.google.com/file/d/1_COPePzwdgS7U_OjExOpv8noz1miTe8c/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3aa"
  },
  "name": "Галаган Катерина, 9 років. ",
  "composition": "1)Ю.Щуровський. Тема з варіаціями; 2)Г.Кушнаренко. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1oBlUfXWqlh5uDsDFCXbHgc7XGiAJGbLH/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3ab"
  },
  "name": "Герасименко Олександра,9 років.",
  "composition": " 1)В.Рачковський. Токатина;2)В.Косенко. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1DGnsSQGlBu8X_oDPt3YKtKmiVzV-G3qJ/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3ac"
  },
  "name": "Голодовська Софія,7 років.",
  "composition": "1)І.Ванхаль.Рондо;2)М.Дремлюга.''Весела гра''",
  "videoUrl": "https://drive.google.com/file/d/12Kutj-owpsr8helrm_kFZh1yQwMjEC7A/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3ad"
  },
  "name": "Голуб Аліна, 9 років ",
  "composition": "1)М.Клементі. Сонатина до мажор, Іч., 2)Б.Дваріонас. Прелюдія",
  "videoUrl": "https://drive.google.com/file/d/1uwhKMKdJZIhRznM3VU5mTqEuKxxTesaO/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3ae"
  },
  "name": "Григор'єва Катерина, 8 років.",
  "composition": "1)Ю.Щуровський. ''Ранок'';2)І.Королькова.''Горобчик''",
  "videoUrl": "https://drive.google.com/file/d/1aiMv5LwYV9m2wz-SJMGnxfUqIRT9M_Ew/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3af"
  },
  "name": "Данюк Єлизавета,7 років.",
  "composition": "1)М.Любарський.''Танцювальна''; 2) Д.Кабалевський.Вальс",
  "videoUrl": "https://drive.google.com/file/d/1vTk_mAB_ECh9VDwR6EMasY1y21KWrSYH/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3b0"
  },
  "name": "Дроган  Мілана, 5 років.",
  "composition": "1)М.Майєр. ''Весела гра''; 2)Д.Баштейн. ''Вальс слоненят''",
  "videoUrl": "https://drive.google.com/file/d/1Xb0gIgFyCnLuCxjn5klaeQ0Ll9DskRPz/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3b1"
  },
  "name": "Дроздова Єлизавета, 9 років. ",
  "composition": "1)Й.С.Бах.Менует. 2)Г.Классен. Полька",
  "videoUrl": "https://drive.google.com/file/d/1r5_18pR7BLxDSDEnMD7rHNGjR9ziEiGn/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3b2"
  },
  "name": "Збір Марія,8 років.",
  "composition": "1)О.Гедіке. Сонатина до мажор, І ч.,2)Р.Шуман.''Перша втрата''",
  "videoUrl": "https://drive.google.com/file/d/1_7qn3fTutdKGcGdbgv13rKokJ8jxgk3a/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3b3"
  },
  "name": "Іваньків Олександра. 9 років.",
  "composition": "1)А.Діабеллі. Скерцо; 2)О.Гедіке. Маленька п'єса",
  "videoUrl": "https://drive.google.com/file/d/1vYeVkRaV1mb33uJ1DGMr20qoikFCr9Ay/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3b4"
  },
  "name": "Іванюк Маріам, 8 років. ",
  "composition": "С.Майкапар. ''Маленька прелюдія'' соль мінор",
  "videoUrl": "https://drive.google.com/file/d/1rRlLMJjoWwTVup7_vVMD4D3nl2Y-lspO/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3b5"
  },
  "name": "Іванюк Маріам. 8 років.",
  "composition": " В.Кирейко. ''Стриб-скок''",
  "videoUrl": "https://drive.google.com/file/d/1ImpPq9ncbMh5T1ScAHfDmz57BDlLZCF2/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3b6"
  },
  "name": "Ісупова Алісія, 8 років. ",
  "composition": "1)К.Рейнеке. Гавот,;2)Й.С.Бах. Маленька прелюдія до мінор",
  "videoUrl": "https://drive.google.com/file/d/10g9CCJoXRzeG8CiFhgnEBzTQBLIWDanA/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3b7"
  },
  "name": "Коваленко Варвара,8 років.",
  "composition": "1)О.Геталова.''Ранок в лісі'';2)В.Подвала. ''Капризуля''",
  "videoUrl": "https://drive.google.com/file/d/1S38_oECOBo7KGDV1azJUx3zOYwgQEQIV/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3b8"
  },
  "name": "Коренівська Дар'я, 9 років. ",
  "composition": "1)Р.Вандал.''Водограй'';2)П.Захаров.''Знайомий силует''",
  "videoUrl": "https://drive.google.com/file/d/19CAzPCaWrAN_SWzaJFdEpxPIOQw-rfLU/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3b9"
  },
  "name": "Костенко Ярослава, 7 років.",
  "composition": " В.Косенко. Мелодія",
  "videoUrl": "https://drive.google.com/file/d/1CddYcoygTctoabGQF7pT2poRvCupVG_c/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3ba"
  },
  "name": "Костенко Ярослава. 7 років. ",
  "composition": "Й.Йєнсен.''Чарівний танок''",
  "videoUrl": "https://drive.google.com/file/d/1uB29bTPEiYdugJfLOZl4SQGrFY9nQpr-/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3bb"
  },
  "name": "Латковська Єлизавета,9 років. ",
  "composition": "1)В.Косенко. вальс; 2)О.Гречанінов.''Мій коник''",
  "videoUrl": "https://drive.google.com/file/d/16YAw-q7f8F9JBPmfn8tEkpJT81J7EahA/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3bc"
  },
  "name": "Лішман Дарина,9 років.",
  "composition": "1)В.Подвала.''Марш-гротеск''. 2)С.Майкапар.Колискова",
  "videoUrl": "https://drive.google.com/file/d/1NsWz3TR0SKiTtcNCAJe059bhhFomt_NE/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3bd"
  },
  "name": "Магола Софія, 8 років. ",
  "composition": "1)Я.Бобалік.''Святкова полька''; 2)І.Беркович. Сонатина соль мажор",
  "videoUrl": "https://drive.google.com/file/d/1guAxs5g_wbGv_twqiypo0e8FHOwum-Ih/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3be"
  },
  "name": "Мазуренко Майя, 8 років. ",
  "composition": "1)М. Бобер. ''Агент Х'', 2)І.Іордан. ''Полювання на метелика''",
  "videoUrl": "https://drive.google.com/file/d/1Ie1WCQpgPuLYdKNxVGuLkeIVnYJNZJ9T/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3bf"
  },
  "name": "Марченко Єлизавета, 9 років.",
  "composition": "1)Й.С.Бах.маленька прелюдія до мінор; 2)П.Чайковський.''Баба Яга''",
  "videoUrl": "https://drive.google.com/file/d/1ZJo4GULZ9sfcUuApF5jyoHIUV_IKAVrg/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3c0"
  },
  "name": "Марчук Максим, 8 років.",
  "composition": " Ф. Шпіндлер. Сонатина, тв.157 №4",
  "videoUrl": "https://drive.google.com/file/d/1sC7MUjcknrnZZZ5hfMCXbSvs36KA3ppV/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3c1"
  },
  "name": "Марчук Максим. ",
  "composition": "В. Гіллок. ''Капрічієтто''",
  "videoUrl": "https://drive.google.com/file/d/1YdAihvAQkCT8bbyW44pQi2iZhmX1c3Kz/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3c2"
  },
  "name": "Мотузкина Лідія, 9 років. ",
  "composition": "О.Білаченко. Український танок",
  "videoUrl": "https://drive.google.com/file/d/1bpO9dHAcbP8KlaWT_1nXXQiZebuD8F0p/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3c3"
  },
  "name": "Мотузкина Лідія,9 років.",
  "composition": " В.Моцарт.Менует",
  "videoUrl": "https://drive.google.com/file/d/1C_mxAU65VvvvfiPoRQscKR0oUDWpHDQt/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3c4"
  },
  "name": "Новосільська Катерина, 7 років. ",
  "composition": "1)М.Клементі.Сонатина тв.36, І-ІІІч., 2)І.Беркович. Прелюдія",
  "videoUrl": "https://drive.google.com/file/d/1Y72CFLOMPibwTUPgWOmsQH3YJPviBjDa/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3c5"
  },
  "name": "Ольховська Аніта, 9 років.",
  "composition": " І.Павлік. ''Сніжинки''",
  "videoUrl": "https://drive.google.com/file/d/1rs-VgFMnIYZVm9kOjNh6FTl_P0CADRB1/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3c6"
  },
  "name": "Ольховська Аніта, 9 років. ",
  "composition": "Н. Карпенко. Етюд сі мінор",
  "videoUrl": "https://drive.google.com/file/d/1kS3BqQw4-msMoznO3Nz_iWc5ytlJOFTm/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3c7"
  },
  "name": "Остапчук Каріна. 8 років.",
  "composition": "1)В.Гіллок ''Дзвіночки''; 2)І.Хуторянський.'''Вогнівочка-стрибунівочка''",
  "videoUrl": "https://drive.google.com/file/d/16RAcN2O6kunKZAFrbgBHsENiZg9iKs4G/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3c8"
  },
  "name": "Охрін Ярема, 8 років. ",
  "composition": "1) Д.Кабалевський. Новела. 2)С.Майкапар.Токатина",
  "videoUrl": "https://drive.google.com/file/d/1zw1JK0J4d8Hk-znbv-5oDna-qL3cwREP/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3c9"
  },
  "name": "Павленко Стефанія, 7 років. ",
  "composition": "1)М.Любарський.Пісня; 2) Д.Кабалевський.''Клоуни''",
  "videoUrl": "https://drive.google.com/file/d/1ImnwJj2Deqz-TJfvXACCrZpiZNT3BnKH/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3ca"
  },
  "name": "Панькова Анна, 8 років. ",
  "composition": "1)Й.С.Бах. Маленька прелюдія до мінор; 2)Л.Шукайло. Інтермецо",
  "videoUrl": "https://drive.google.com/file/d/1yrAHr6i17NShP5qaImPnWx-xJQjCMMy2/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3cb"
  },
  "name": "Парфьонов Дмитро, 9 років.",
  "composition": "1)Н.Владикіна-Бачинська.''Щось сумне''; 2)О.Гедіке.Танець",
  "videoUrl": "https://drive.google.com/file/d/1NDdw57RsrmLrE_yWSG0uFJXEjWcGqGmR/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3cc"
  },
  "name": "Погорєлов Артем, 9 років.",
  "composition": "1)Й.С.Бах. Менует; 2)Н.Нижанківський. Коломийка",
  "videoUrl": "https://drive.google.com/file/d/1ne86iM-NUs6NcioBsvUjfQa6Mn7cSAR7/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3cd"
  },
  "name": "Пузанова Марія,9 років.",
  "composition": "1)У. Гіллок. ''Королівський менует''; 2)І.Іордан. «Полювання на метелика»",
  "videoUrl": "https://drive.google.com/file/d/1OGS_fqzJvbB7aNPrexwqDK5x0ls-20CC/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3ce"
  },
  "name": "Резнік Тетяна, 9 років.",
  "composition": "1)Н.Торопова. Варіації ''Три порося'',2)Д.Кабалевський. ''Маленький жонглер''",
  "videoUrl": "https://drive.google.com/file/d/1xGxNTTtWrhdOu6Y7GueUAgGXvjoLlMBl/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3cf"
  },
  "name": "Рибак Анастасія,8 років.",
  "composition": "1).Мелартін.''Ранок'',2)М.Майєр.''Незвичайна пригода''",
  "videoUrl": "https://drive.google.com/file/d/1uzmVqFVnnQaIGX7o3H-7tNe0kp1ZiUvP/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3d0"
  },
  "name": "Ріпний Богдан, 8 років.",
  "composition": " 1)І. Беркович. Варіації; 2)Д. Роулі.''В країні гномів''",
  "videoUrl": "https://drive.google.com/file/d/1Qlr1_-pFAlLIixKkhx2-ZxxEYZhAZ9Z7/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3d1"
  },
  "name": "Романченко Елисей, 8 років.",
  "composition": " 1)Ш.Гуно.''Марш маріонеток'';2) О.Гречанінов.''Незвичайна пригода''",
  "videoUrl": "https://drive.google.com/file/d/1iI-zjq4QimDL9TLE5BRYurmuAL16fScU/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3d2"
  },
  "name": "Сайчук Ярослава, 9 років. ",
  "composition": "Т. Максимов.''Баба Яга''",
  "videoUrl": "https://drive.google.com/file/d/1X5C7kfNd3QloZl0TAvN_AQh0-qXtpSSB/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3d3"
  },
  "name": "Сайчук Ярослава,9 років.",
  "composition": " К.Роллін. '' Шоколадне печиво''",
  "videoUrl": "https://drive.google.com/file/d/16vYm_EdDx_-3BRHJMyD35k3oC4F2tV56/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3d4"
  },
  "name": "Сітшаєва Зарема,9 років.",
  "composition": "1) Л.Бетховен. Сонатина до мажор; 2)К.Слонімський. ''Дюймовочка''",
  "videoUrl": "https://drive.google.com/file/d/1H6edQtsRp0_wcuOYRAEh1lffRz0TXtib/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3d5"
  },
  "name": "Смірнова Євгенія, 9 років. ",
  "composition": "1)В.Квасневський.''Думка'', 2)Д.Александер. ''Зимова рапсодія''",
  "videoUrl": "https://drive.google.com/file/d/16LW9EesPPs1STi6kQpQxdEJzk3PgnHYj/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3d6"
  },
  "name": "Стрийська Амелія, 8 років.",
  "composition": " 1)В.Косенко.''Дощик''; 2)О.Білаченко. Експромт",
  "videoUrl": "https://drive.google.com/file/d/10h9ONRG2T42vxAlWy4ASP0qga8IU02rv/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3d7"
  },
  "name": "Студзинська Єлизавета,7 років.",
  "composition": "1) Л. Моцарт. Менует, 2)У. Гіллок.      ''Осінній ескіз''",
  "videoUrl": "https://drive.google.com/file/d/1VdsObub9Z0E7ZM1QYMsfqkaljnnLQ2je/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3d8"
  },
  "name": "Сухан Діана, 8 років. ",
  "composition": "1)Л.Шукайло.Варіації на тему В.Шаїнського; 2)Р.Фучс.''Маленьке розбите серце''",
  "videoUrl": "https://drive.google.com/file/d/1Gu5ucoCGFhyEnMh3-IDUJ-uF0Tuj37UZ/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3d9"
  },
  "name": "Терп'як Аарон, 9 років.",
  "composition": "1) І.Беркович. Варіації на українську тему; 2)Т.Остен. ''Маленький ельф''",
  "videoUrl": "https://drive.google.com/file/d/1ZtQbNBBgGmOzMWnnHAF-7_CBsXk3Lw-2/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3da"
  },
  "name": "Тимченко Надія, 8 років, ",
  "composition": "1)А.Штогаренко. ''Метелик''; 2)В.Гіллок. ''Місячне сяйво''",
  "videoUrl": "https://drive.google.com/file/d/1PS9AGHyEDqstjqA1MiEbTkp5j1UuShrG/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3db"
  },
  "name": "Тіщенко Вероніка, 7 років.",
  "composition": "1)Й.С.Бах. Маленька прелюдія до мінор;. 2)Л. Шукайло. Варіації",
  "videoUrl": "https://drive.google.com/file/d/1Ftrj9k5jhDxVi5ufhXY3THkwOK8Y12Hm/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3dc"
  },
  "name": "Тодорова Даяна, 6 років. ",
  "composition": "1)В.Барвінський. ''Зайчик'', 2)М.Любарський. ''Плясова''",
  "videoUrl": "https://drive.google.com/file/d/1PAzIBtjG0NfqazUI25HsRrFVXjLyz2Bi/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3dd"
  },
  "name": "Тонієвич Ксенія, 9 років. ",
  "composition": "1)О.Спіліоті''Гуцулята'';2)В.Гіллок.''У старому Відні''",
  "videoUrl": "https://drive.google.com/file/d/119w3wnHMp6XNWSKKr9VJIoYjVIP9MlAO/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3de"
  },
  "name": "Тютько Володимир, 9 років. ",
  "composition": "1)Ф.Кулау.Сонатина, тв.55 №3; 2)Р.Лісова.''Веселий настрій''",
  "videoUrl": "https://drive.google.com/file/d/1bg-HK7Lp3UwjGk3MITTdD9eQ7rFdhx1H/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3df"
  },
  "name": "Фесенко Анна,8 років. ",
  "composition": "1)А.Гедіке.Сонатина до мажор, 2)В.Гаврилін. ''Капріччіо''",
  "videoUrl": "https://drive.google.com/file/d/1Ejrq8ZEXBJq_ANfAiY-5jKH7Rs58fLuC/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3e0"
  },
  "name": "Чорней Яна, 7 років. ",
  "composition": "1)М. Екштейн. ''Каприз гномів''; 2)С.Юферов. Ноктюрн",
  "videoUrl": "https://drive.google.com/file/d/1g6bB7aqWptw5lLnAiXklOFpQl4X0NLKj/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3e1"
  },
  "name": "Шкурко Тимофій, 9 років. ",
  "composition": "1)Ф.Шопен. Вальс ля мінор; 2)Л.Шукайло. ''Весела мозаїка''",
  "videoUrl": "https://drive.google.com/file/d/1eJJ44ZbgTrUTdH-tBPKGyc1K_0rryj4_/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "6097a02b6bcf772038b9b3e2"
  },
  "name": "Юрчук Яна, 7 років.",
  "composition": " 1)М. Клементі. Сонатина, тв.36 №1, І ч.; 2)П.Чайковський.''Вранішня молитва''",
  "videoUrl": "https://drive.google.com/file/d/1oPUuH2qzaQULypvuy3M6Q-f7vvhZlAnx/preview",
  "group": "Номінація \"Фортепіано соло\""
}];

function filmReducer(state = {
  cardCount: myCards.length,
  cards: myCards,
  isDataInPlace: true,
  error: ""
}, action) {
  switch (action.type) {
    case 'INFO_PAGE':
      return {
        cardCount: -1,
        cards: [],
        isDataInPlace: false,
        error: ""
      };

    case 'ALL':
      console.log("> Усі відео");
      return {
        cards: myCards,
        isDataInPlace: true,
        cardCount: myCards.length,
        error: ""
      };

    case 'group-1':
      let newCards = myCards.filter(card => card.group === group1).slice();
      return {
        cards: newCards,
        isDataInPlace: true,
        cardCount: newCards.length,
        error: ""
      };

    case 'group-2':
      let newCards1 = myCards.filter(card => card.group === group2).slice();
      return {
        cards: newCards1,
        isDataInPlace: true,
        cardCount: newCards1.length,
        error: ""
      };

    case 'group-3':
      let newCards2 = myCards.filter(card => card.group === group3).slice();
      return {
        cards: newCards2,
        isDataInPlace: true,
        cardCount: newCards2.length,
        error: ""
      };

    case 'SEARCH':
      let q = action.query.toLowerCase();
      console.log(`> Пошук: ${q}`);
      let newCards3 = myCards.filter(card => {
        let cardName = card.name.toLowerCase();
        let bool = cardName.startsWith(q) || cardName.includes(q);
        console.log(`Testing ${cardName} on query ${q}, result is ${bool}`);
        return bool;
      });
      console.log(newCards3);
      return { ...state,
        cards: newCards3,
        isDataInPlace: true,
        cardCount: newCards3.length,
        error: ""
      };

    case 'ERROR':
      console.log(`> Помилка`);
      return {
        error: action.msg
      };

    default:
      return {
        cards: myCards,
        isDataInPlace: true,
        cardCount: myCards.length,
        error: ""
      };
  }
}

const cardStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(filmReducer);
cardStore.subscribe(() => console.log("FilmsStore state was changed, number of cards: " + cardStore.getState().cardCount));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzExNjMwMjMucG5nIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZm9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVndWxhckhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzdWx0c0ZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0IbQstCw0L3QvtCy0LAg0Jsu0IYucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CS0LjRiNC90LXQstGB0YzQutCwLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0JfQsNGF0L7QtNGP0LrRltC9LTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9Ca0YPQt9C90ZTRhtC+0LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QnNCw0YDRhtC10LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QntGB0YLQsNC/0YfRg9C6INCcLiDQnC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0KDQsNC50YIg0IYu0KEucG5nIiwid2VicGFjazovLy8uL3NyYy9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9DYXJkU3RvcmUuanN4Il0sIm5hbWVzIjpbIkFwcCIsImNhcmRTdG9yZSIsIkZpbG1XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiRmlsbUluZm8iLCJJZnJhbWVCb3giLCJpZnJhbWUiLCJwcm9wcyIsIndpZHRoIiwiQ2FyZCIsImhlaWdodCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJjYWxjdWxhdGVkV2lkdGgiLCJzZXRDYWxjdWxhdGVkV2lkdGgiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm5hbWUiLCJjb21wb3NpdGlvbiIsInZpZGVvVXJsIiwiV3JhcHBlciIsImxvZ28iLCJQZXJzb25JbmZvU2VjdGlvbiIsIlBlcnNvbiIsIkNvbnRhaW5lciIsIlRleHRTZWN0aW9uIiwiSW1hZ2UiLCJpbWciLCJ0ZXh0IiwiaW1nVXJsIiwiRGl2IiwiQSIsImEiLCJJbmZvUGFnZSIsInBlcnNvbjEiLCJwZXJzb24yIiwicGVyc29uMyIsInBlcnNvbjQiLCJwZXJzb242IiwicGVyc29uNSIsInBlcnNvbjciLCJwZXJzb244IiwiTWFpblNlY3Rpb25GbGV4IiwiTWFpblNlY3Rpb24iLCJjYXJkcyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJpc0RhdGFJblBsYWNlIiwiY2FyZENvdW50Iiwic2VjdGlvbnNGb3JGaWx0ZXIiLCJtYXAiLCJjYXJkIiwiaWQiLCIkb2lkIiwiQnV0dG9uIiwiaW5wdXQiLCJJbnB1dCIsImlucHV0Q29sb3IiLCJJbnB1dFN0eWxlIiwiSW5wdXRXcmFwZXIiLCJTdHlsZWRTcGFuIiwic3BhbiIsIkVycm9yIiwiV2FybiIsIlJlZ3VsYXJIZWFkZXIiLCJzZWFyY2hGaWVsZCIsInVzZVJlZiIsImVycm9yIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZXIiLCJzdHIiLCJTdHJpbmciLCJjdXJyZW50IiwidmFsdWUiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInR5cGUiLCJtc2ciLCJxdWVyeSIsImhhbmRsZUtleVByZXNzIiwiZXZlbnQiLCJrZXkiLCJGaWx0ZXJDb250YWluZXIiLCJGaWx0ZXJTZWN0aW9uIiwiRGl2VGhpbkxpbmUiLCJTdHlsZWRSZXN1bHRzRmlsdGVyV3JhcHBlciIsImdyb3dfMCIsImtleWZyYW1lcyIsImxlZnQiLCJncm93XzEiLCJUaGluTGluZUlubmVyRGl2IiwiYW5pbWF0aW9uIiwiUmVzdWx0c0ZpbHRlciIsInNlY3Rpb25zIiwicmVkTGluZVdpZHRoIiwic2V0UmVkTGluZVdpZHRoIiwicmVkTGluZUxlZnQiLCJzZXRSZWRMaW5lTGVmdCIsInNldEFuaW1hdGlvbiIsIm1hcmtlZFNlY3Rpb25SZWYiLCJyZVJlbmRlclJlZExpbiIsInRhcmdldCIsImN1cnJlbnRTZWN0aW9uV2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjdXJyZW50U2VjdGlvbkxlZnQiLCJjb3VudGVyIiwib25GaWx0ZXJTZWN0aW9uQ2xpY2siLCJzZWxlY3RlZFNlY3Rpb24iLCJzZWxlY3RlZFNlY3Rpb25TdHJpbmciLCJzZWN0aW9uIiwiY29uc29sZSIsImxvZyIsInJlbmRlckluZm9QYWdlIiwicmVuZGVyZWRTZWN0aW9ucyIsImUiLCJnZXRXaW5kb3dEaW1lbnNpb25zIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwid2luZG93Iiwid2luZG93RGltZW5zaW9ucyIsInNldFdpbmRvd0RpbWVuc2lvbnMiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdyb3VwMSIsImdyb3VwMiIsImdyb3VwMyIsIm15Q2FyZHMiLCJmaWxtUmVkdWNlciIsImFjdGlvbiIsIm5ld0NhcmRzIiwiZmlsdGVyIiwiZ3JvdXAiLCJzbGljZSIsIm5ld0NhcmRzMSIsIm5ld0NhcmRzMiIsInEiLCJ0b0xvd2VyQ2FzZSIsIm5ld0NhcmRzMyIsImNhcmROYW1lIiwiYm9vbCIsInN0YXJ0c1dpdGgiLCJjcmVhdGVTdG9yZSIsInN1YnNjcmliZSIsImdldFN0YXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtR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LFNBQVMsR0FBR2tKLHlEQUFXLENBQUNkLFdBQUQsQ0FBN0I7QUFFUHBJLFNBQVMsQ0FBQ21KLFNBQVYsQ0FBb0IsTUFDaEJyQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvREFBb0QvRyxTQUFTLENBQUNvSixRQUFWLEdBQXFCckcsU0FBckYsQ0FESixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzeFwiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy8xMTYzMDIzLnBuZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TWFpblNlY3Rpb259IGZyb20gJy4vY29tcG9uZW50cy9NYWluU2VjdGlvbic7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2NhcmRTdG9yZX0gZnJvbSBcIi4vc3RvcmUvQ2FyZFN0b3JlXCI7XHJcbmltcG9ydCB7UmVndWxhckhlYWRlcn0gZnJvbSBcIi4vY29tcG9uZW50cy9SZWd1bGFySGVhZGVyXCI7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cclxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtjYXJkU3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgPE1haW5TZWN0aW9uLz5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICA8L1JlYWN0LlN0cmljdE1vZGU+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0JzRmlsbFBlcnNvbkZpbGwsIEZhQm9va09wZW59IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuXHJcbmNvbnN0IEZpbG1XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsO1xyXG5gO1xyXG5cclxuY29uc3QgRmlsbUluZm8gPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgSWZyYW1lQm94ID0gc3R5bGVkLmlmcmFtZWBcclxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XHJcbiAgaGVpZ2h0OiA0ODBweDtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2hlaWdodCwgd2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xyXG4gICAgY29uc3QgW2NhbGN1bGF0ZWRXaWR0aCwgc2V0Q2FsY3VsYXRlZFdpZHRoXSA9IHVzZVN0YXRlKDY0MCk7XHJcblxyXG4gICAgLy9oYW5kbGluZyByZXNpemVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpZHRoPDcwMCkgc2V0Q2FsY3VsYXRlZFdpZHRoKHdpZHRoIC0gNTApO1xyXG4gICAgICAgIGVsc2Ugc2V0Q2FsY3VsYXRlZFdpZHRoKDY0MCk7XHJcbiAgICB9LCBbd2lkdGhdKTtcclxuXHJcbiAgICBjb25zdCBbbmFtZSxdID0gdXNlU3RhdGUocHJvcHMubmFtZSk7XHJcbiAgICBjb25zdCBbY29tcG9zaXRpb24sXSA9IHVzZVN0YXRlKHByb3BzLmNvbXBvc2l0aW9uKTtcclxuICAgIGNvbnN0IFt2aWRlb1VybCxdID0gdXNlU3RhdGUocHJvcHMudmlkZW9VcmwpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZpbG1XcmFwcGVyPlxyXG4gICAgICAgICAgICA8SWZyYW1lQm94IHNyYz17dmlkZW9Vcmx9IHdpZHRoPXtjYWxjdWxhdGVkV2lkdGh9Lz5cclxuICAgICAgICAgICAgPEZpbG1JbmZvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PEZhQm9va09wZW4vPiB7Y29tcG9zaXRpb259PC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj48QnNGaWxsUGVyc29uRmlsbC8+IDxiPntuYW1lfTwvYj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvRmlsbUluZm8+XHJcbiAgICAgICAgPC9GaWxtV3JhcHBlcj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0JpTGlua0V4dGVybmFsfSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8xMTYzMDIzLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uMSBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/Ql9Cw0LrQvtC/0LXRhtGMLTEucG5nXCI7XHJcbmltcG9ydCBwZXJzb24yIGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9Ca0YPQt9C90ZTRhtC+0LLQsC0xLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uMyBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/QhtCy0LDQvdC+0LLQsCDQmy7Qhi5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjQgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0KDQsNC50YIg0IYu0KEucG5nXCI7XHJcbmltcG9ydCBwZXJzb241IGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9Ce0YHRgtCw0L/Rh9GD0Log0JwuINCcLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uNiBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/QnNCw0YDRhtC10LLQsC0xLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uNyBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/Ql9Cw0YXQvtC00Y/QutGW0L0tMS5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjggZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0JLQuNGI0L3QtdCy0YHRjNC60LAtMS5wbmdcIjtcclxuXHJcblxyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtsb2dvfVwiKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBQZXJzb25JbmZvU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFBlcnNvbiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBUZXh0U2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XHJcbiAgICBgO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKDxDb250YWluZXI+PFRleHRTZWN0aW9uPjxici8+PGJyLz48YnIvPntwcm9wcy50ZXh0fTwvVGV4dFNlY3Rpb24+PEltYWdlIHNyYz17cHJvcHMuaW1nVXJsfS8+PC9Db250YWluZXI+KTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuYDtcclxuXHJcbmNvbnN0IEEgPSBzdHlsZWQuYWBcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IGRhcmtyZWQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvUGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPFdyYXBwZXI+PERpdj5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPEEgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXFkeUwwbVhhZm93STg4OHNQSkx5TTd5dWhZSk5SNzBiL3ZpZXc/dXNwPXNoYXJpbmdcIj48QmlMaW5rRXh0ZXJuYWwvPlxyXG4gICAgICAgICAgICDQodC60LvQsNC0INC+0YDQs9Cw0L3RltC30LDRhtGW0LnQvdC+0LPQviDQutC+0LzRltGC0LXRgtGDIDwvQT5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrYTdHdVZjMG1oSHpSNWpxMXFoVENIbmxOYTBIY1htQi92aWV3P3VzcD1zaGFyaW5nXCI+PEJpTGlua0V4dGVybmFsLz7Qn9C+0LvQvtC20LXQvdC90Y88L0E+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8QSBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNnN6MHV1NTY0Qmw3bDlZLWJxTU9fLWdMUHFUdURCWUMvdmlldz91c3A9c2hhcmluZ1wiPjxCaUxpbmtFeHRlcm5hbC8+0JDRhNGW0YjQsDwvQT5cclxuICAgIDwvRGl2PlxyXG4gICAgICAgIDxQZXJzb25JbmZvU2VjdGlvbj5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjF9IHRleHQ9XCLQl9Cw0LrQvtC/0LXRhtGMINCbLtChLi0g0LPQvtC70L7QstCwINC20YPRgNGWLCDQt9Cw0YHQu9GD0LbQtdC90LjQuSAg0LTRltGP0Ycg0LzQuNGB0YLQtdGG0YLQsiDQo9C60YDQsNGX0L3QuCwg0LLQuNC60LvQsNC00LDRhy3QvNC10YLQvtC00LjRgdGCINCb0YzQstGW0LLRgdGM0LrQvtCz0L4g0LTQtdGA0LbQsNCy0L3QvtCz0L4g0LzRg9C30LjRh9C90L7Qs9C+INC70ZbRhtC10Y4g0ZbQvNC10L3RliDQoS4g0JrRgNGD0YjQtdC70YzQvdC40YbRjNC60L7Rlywg0L/QvtGH0LXRgdC90LjQuSDQsNC80LHQsNGB0LDQtNC+0YAg0LzRg9C30LjRh9C90L7RlyAg0LrRg9C70YzRgtGD0YDQuCAg0J/QvtC70YzRidGWXCIvPlxyXG4gICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uMn0gdGV4dD17YNCa0YPQt9C90ZTRhtC+0LLQsCDQni7Qni4tINCz0L7Qu9C+0LLQsCDQttGD0YDRliwg0LTQvtC60YLQvtGAINGE0ZbQu9C+0YHQvtGE0ZbRlywg0LrQsNC90LTQuNC00LDRgiDQv9C10LTQsNCz0L7Qs9GW0YfQvdC40YUg0L3QsNGD0LosINC/0YDQvtGE0LXRgdC+0YAg0LrQsNGE0LXQtNGA0LggINC80YPQt9C40YfQvdC+LSDRltC90YHRgtGA0YPQvNC10L3RgtCw0LvRjNC90L7Qs9C+INCy0LjQutC+0L3QsNCy0YHRgtCy0LAg0KXQsNGA0LrRltCy0YHRjNC60L7Qs9C+INCd0LDRhtGW0L7QvdCw0LvRjNC90L7Qs9C+INC/0LXQtNCw0LPQvtCz0ZbRh9C90L7Qs9C+INGD0L3RltCy0LXRgNGB0LjRgtC10YLRgyDRltC80LXQvdGWINCTLtCh0LrQvtCy0L7RgNC+0LTQuCwg0LfQsNGB0LvRg9C20LXQvdC40Lkg0LTRltGP0Ycg0LzQuNGB0YLQtdGG0YLQsiDQo9C60YDQsNGX0L3QuCwgIFwi0JLRltC00LzRltC90L3QuNC6INC+0YHQstGW0YLQuCDQo9C60YDQsNGX0L3QuFwiLCDQstGW0LTQt9C90LDRh9C10L3QsCDQvtGA0LTQtdC90L7QvCDQnNGW0L3RltGB0YLQtdGA0YHRgtCy0LAg0LrRg9C70YzRgtGD0YDQuCAg0KPQutGA0LDRl9C90LggXCLQl9CwINC00L7RgdGP0LPQvdC10L3QvdGPINCyINGA0L7Qt9Cy0LjRgtC60YMgINC60YPQu9GM0YLRg9GA0LggINGWINC80LjRgdGC0LXRhtGC0LIgXCIsINGB0LXQutGA0LXRgtCw0YAg0J3QsNGG0ZbQvtC90LDQu9GM0L3QvtGXINCy0YHQtdGD0LrRgNCw0ZfQvdGB0YzQutC+0Zcg0LzRg9C30LjRh9C90L7RlyDRgdC/0ZbQu9C60LgsINCz0L7Qu9C+0LLQsCDQkNGB0L7RhtGW0LDRhtGW0Zcg0L/RltCw0L3RltGB0YLRltCyICDQndCw0YbRltC+0L3QsNC70YzQvdC+0ZcgINCy0YHQtdGD0LrRgNCw0ZfQvdGB0YzQutC+0Zcg0LzRg9C30LjRh9C90L7RlyDRgdC/0ZbQu9C60LgsICDQv9GA0LXQt9C40LTQtdC90YIg0JDRgdC+0YbRltCw0YbRltGXINC/0ZbQsNC90ZbRgdGC0ZbQsi3Qv9C10LTQsNCz0L7Qs9GW0LIg0KPQutGA0LDRl9C90LgoXCJFUFRBXCIgVWtyYWluZSksINCS0ZbRhtC1LSDQv9GA0LXQt9C40LTQtdC90YIgINCQ0YHQvtGG0ZbQsNGG0ZbRlyDQv9GW0LDQvdGW0YHRgtGW0LIt0L/QtdC00LDQs9C+0LPRltCyINCE0LLRgNC+0L/QuCBcIkVQVEFcIiBMb25kb24pLmB9Lz5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjN9IHRleHQ9XCLQhtCy0LDQvdC+0LLQsCDQmy7Qhi4sINCy0LjQutC70LDQtNCw0Ycg0L/QtdGA0YjQvtGXINC60LDRgtC10LPQvtGA0ZbRlyDQmtCXICfQm9GD0YbRjNC60LAg0LzRg9C30LjRh9C90LAgINGI0LrQvtC70LAgMycuXCIvPlxyXG4gICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uNH0gdGV4dD1cItCg0LDQudGCINCGLtChLiwg0LrQsNC90LTQuNC00LDRgiDQv9C10LTQsNCz0L7Qs9GW0YfQvdC40YUg0L3QsNGD0LosICDQvdCw0YPQutC+0LLQuNC5INGB0L/RltCy0YDQvtCx0ZbRgtC90LjQuiDQu9Cw0LHQvtGA0LDRgtC+0YDRltGXINC10YHRgtC10YLQuNGH0L3QvtCz0L4g0LLQuNGF0L7QstCw0L3QvdGPINGC0LAg0LzQuNGB0YLQtdGG0YzQutC+0ZcgINC+0YHQstGW0YLQuCAg0IbQvdGB0YLQuNGC0YPRgtGDICDQv9GA0L7QsdC70LXQvCDQstC40YXQvtCy0LDQvdC90Y8gINCd0LDRhtGW0L7QvdCw0LvRjNC90L7RlyAg0LDQutCw0LTQtdC80ZbRlyAg0L/QtdC00LDQs9C+0LPRltGH0L3QuNGFICDQvdCw0YPQuiDQo9C60YDQsNGX0L3QuC5cIi8+XHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb242fSB0ZXh0PVwi0JzQsNGA0YbQtdCy0LAg0JYu0J8uLCDRgdGC0LDRgNGI0LjQuSDQstC40LrQu9Cw0LTQsNGHLCDQt9Cw0LLRltC00YPRjtGH0LAg0YTQvtGA0YLQtdC/0ZbQsNC90L3QuNC8INCy0ZbQtNC00ZbQu9C+0Lwg0KDRltCy0L3QtdC90YHRjNC60L7RlyDQtNC40YLRj9GH0L7RlyDQvNGD0LfQuNGH0L3QvtGXINGI0LrQvtC70Lgg4oSWMSDRltC80LXQvdGWINCcLiDQm9C40YHQtdC90LrQsC5cIi8+XHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb241fSB0ZXh0PVwi0J7RgdGC0LDQv9GH0YPQuiDQnC4g0JwuLCDQtNC+0YbQtdC90YIg0LrQsNGE0LXQtNGA0LggINCz0YDQuCDQvdCwICDQvNGD0LfQuNGH0L3QuNGFINGW0L3RgdGC0YDRg9C80LXQvdGC0LDRhSDQhtC90YHRgtC40YLRg9GC0YMgINC80LjRgdGC0LXRhtGC0LIgINCg0JTQk9CjLlwiLz5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjd9IHRleHQ9XCLQl9Cw0YXQvtC00Y/QutGW0L0g0J4u0JIuLCDQtNC+0YbQtdC90YIg0LrQsNGE0LXQtNGA0Lgg0LXRgdGC0YDQsNC00L3QvtGXINC80YPQt9C40LrQuCDQhtC90YHRgtC40YLRg9GC0YMgINC80LjRgdGC0LXRhtGC0LIgINCg0JTQk9CjLlwiLz5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjh9IHRleHQ9J9CS0LjRiNC90LXQstGB0YzQutCwINCGLtCfLiwg0LLQuNC60LvQsNC00LDRhyDQstC40YnQvtGXICDQutCw0YLQtdCz0L7RgNGW0ZcsINCz0L7Qu9C+0LLQsCDRhtC40LrQu9C+0LLQvtGXINC60L7QvNGW0YHRltGXICws0KTQvtGA0YLQtdC/0ZbQsNC90L5cIiDQoNGW0LLQvdC10L3RgdGM0LrQvtCz0L4g0LzRg9C30LjRh9C90L7Qs9C+INGD0YfQuNC70LjRidCwINCg0JTQk9CjLicvPlxyXG4gICAgICAgIDwvUGVyc29uSW5mb1NlY3Rpb24+XHJcbiAgICA8L1dyYXBwZXI+KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7UmVzdWx0c0ZpbHRlcn0gZnJvbSBcIi4vUmVzdWx0c0ZpbHRlclwiO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7UmVndWxhckhlYWRlcn0gZnJvbSBcIi4vUmVndWxhckhlYWRlclwiO1xyXG5pbXBvcnQge0luZm9QYWdlfSBmcm9tIFwiLi9JbmZvUGFnZVwiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vMTE2MzAyMy5wbmdcIjtcclxuXHJcbmNvbnN0IE1haW5TZWN0aW9uRmxleCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtsb2dvfVwiKTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluU2VjdGlvbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjYXJkcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhcmRzKTtcclxuICAgIGNvbnN0IGlzRGF0YUluUGxhY2UgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5pc0RhdGFJblBsYWNlKTtcclxuICAgIGNvbnN0IGNhcmRDb3VudCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhcmRDb3VudCk7XHJcbiAgICBjb25zdCBzZWN0aW9uc0ZvckZpbHRlciA9IFtg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImAsIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFwiYCwgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcImAsYNCj0YHRliDQstGW0LTQtdC+YCxg0J/RgNC+INC60L7QvdC60YPRgNGBYF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8UmVndWxhckhlYWRlciBjYXJkQ291bnQ9e2NhcmRDb3VudH0vPlxyXG4gICAgICAgICAgICA8UmVzdWx0c0ZpbHRlciBzZWN0aW9ucz17c2VjdGlvbnNGb3JGaWx0ZXJ9Lz5cclxuICAgICAgICAgICAge2lzRGF0YUluUGxhY2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8TWFpblNlY3Rpb25GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXJkcy5tYXAoY2FyZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjYXJkLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1VybD17Y2FyZC52aWRlb1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvc2l0aW9uPXtjYXJkLmNvbXBvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXJkLmlkLiRvaWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICApKX08L01haW5TZWN0aW9uRmxleD4pIDogKDxJbmZvUGFnZS8+KX08Lz4pO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0FpT3V0bGluZUZpbGVTZWFyY2gsIEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlfSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5pbnB1dGBcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB3aWR0aDogMTUlO1xyXG4gYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IGRhcmtyZWQ7XHJcbiAgfWA7XHJcblxyXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5pbnB1dENvbG9yIHx8IFwicGFsZXZpb2xldHJlZFwifTtcclxuYDtcclxuXHJcblxyXG5jb25zdCBJbnB1dFN0eWxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dFdyYXBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDYwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW5gXHJcbiAgY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5cclxuY29uc3QgRXJyb3IgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO2BcclxuXHJcbmNvbnN0IFdhcm4gPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO2BcclxuXHJcbmV4cG9ydCBjb25zdCBSZWd1bGFySGVhZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoRmllbGQgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZXJyb3IpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge2hlaWdodCwgd2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IFN0cmluZyhzZWFyY2hGaWVsZC5jdXJyZW50LnZhbHVlKTtcclxuICAgICAgICBpZiAoc3RyLmxlbmd0aCA8IDMgfHwgc3RyLmluY2x1ZGVzKFwiIFwiKSkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJFUlJPUlwiLCBtc2c6IFwi0JHRg9C00LHRjCDQu9Cw0YHQutCwINCy0LLQtdC00ZbRgtGMINCx0ZbQu9GM0YjQtSAzINGB0LjQvNCy0L7Qu9GW0LIg0ZYg0L3QtSDQstC40LrQvtGA0LjRgdGC0L7QstGD0LnRgtC1INC/0YDQvtCx0ZbQu1wifSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiU0VBUkNIXCIsIHF1ZXJ5OiBzdHJ9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SW5wdXRXcmFwZXI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3Bhbj48QWlPdXRsaW5lRmlsZVNlYXJjaC8+0J/QvtGI0YPQuiDQstGW0LTQtdC+INC/0L4g0L/RgNGW0LfQstC40YnRgyDRg9GH0LDRgdC90LjQutCwIDwvU3R5bGVkU3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9IHJlZj17c2VhcmNoRmllbGR9IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNGW0YLRjCDQv9GA0ZbQt9Cy0LjRidC1INGD0YfQsNGB0L3QuNC60LAuLi5cIiBpbnB1dENvbG9yPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwi0J/QvtGI0YPQulwiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtoYW5kbGVyfS8+XHJcbiAgICAgICAgICAgIDwvSW5wdXRXcmFwZXI+XHJcbiAgICAgICAgICAgIHtlcnJvciAhPT0gXCJcIiA/IDxFcnJvcj48SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPntlcnJvcn08SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPjwvRXJyb3I+IDogbnVsbH1cclxuICAgICAgICAgICAge3Byb3BzLmNhcmRDb3VudCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICA8V2Fybj48SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPtCy0ZbQtNC10L4g0L3QtSDQt9C90LDQudC00LXQvdGWPEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz48L1dhcm4+IDogbnVsbH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge0ZhRm9sZGVyLCBGYVVuaXZlcnNpdHl9IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuXHJcbmNvbnN0IEZpbHRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBmbGV4LXdyYXA6IHdyYXA7YDtcclxuXHJcbmNvbnN0IEZpbHRlclNlY3Rpb24gPSBzdHlsZWQoRmlsdGVyQ29udGFpbmVyKWBcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IGRhcmtyZWQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRGl2VGhpbkxpbmUgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogZ3JheSBzb2xpZCAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBoZWlnaHQ6IDIlO1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IGdyb3dfMCA9IGtleWZyYW1lc2BcclxuICAwJSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XHJcbiAgfVxyXG4gIDAlIHtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy5sZWZ0fTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBncm93XzEgPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xyXG4gIH1cclxuICAwJSB7XHJcbiAgICBsZWZ0OiAxcHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH07XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFRoaW5MaW5lSW5uZXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcclxuICBsZWZ0OiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IHJlZCBzb2xpZCAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGhlaWdodDogMSU7XHJcbiAgYW5pbWF0aW9uOiAke3Byb3BzID0+IChwcm9wcy5hbmltYXRpb24gJSAyID09PSAwKSA/IGdyb3dfMCA6IGdyb3dfMX0gMC41cyBsaW5lYXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUmVzdWx0c0ZpbHRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzZWN0aW9ucyxdID0gdXNlU3RhdGUocHJvcHMuc2VjdGlvbnMpO1xyXG5cclxuICAgIGNvbnN0IFtyZWRMaW5lV2lkdGgsIHNldFJlZExpbmVXaWR0aF0gPSB1c2VTdGF0ZShcIjEwcHhcIik7XHJcbiAgICBjb25zdCBbcmVkTGluZUxlZnQsIHNldFJlZExpbmVMZWZ0XSA9IHVzZVN0YXRlKFwiMTBweFwiKTtcclxuICAgIGNvbnN0IFthbmltYXRpb24sIHNldEFuaW1hdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHtoZWlnaHQsIHdpZHRofSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcclxuICAgIGNvbnN0IG1hcmtlZFNlY3Rpb25SZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgICAvL2hhbmRsaW5nIHJlZExpbmUgb24gcmVzaXplXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJlUmVuZGVyUmVkTGluKHt0YXJnZXQ6bWFya2VkU2VjdGlvblJlZi5jdXJyZW50fSlcclxuICAgIH0sIFt3aWR0aF0pO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBmdW5jdGlvbiByZVJlbmRlclJlZExpbihldmVudCkge1xyXG4gICAgICAgIG1hcmtlZFNlY3Rpb25SZWYuY3VycmVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBsZXQgY3VycmVudFNlY3Rpb25XaWR0aCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgICAgICBsZXQgY3VycmVudFNlY3Rpb25MZWZ0ID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSAxMDtcclxuICAgICAgICBzZXRSZWRMaW5lV2lkdGgoY3VycmVudFNlY3Rpb25XaWR0aCArIFwicHhcIik7XHJcbiAgICAgICAgc2V0UmVkTGluZUxlZnQoY3VycmVudFNlY3Rpb25MZWZ0ICsgXCJweFwiKTtcclxuICAgICAgICBsZXQgY291bnRlciA9IGFuaW1hdGlvbiArIDE7XHJcbiAgICAgICAgc2V0QW5pbWF0aW9uKGNvdW50ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uRmlsdGVyU2VjdGlvbkNsaWNrKHNlbGVjdGVkU2VjdGlvbiwgZXZlbnQpIHtcclxuICAgICAgICByZVJlbmRlclJlZExpbihldmVudCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU2VjdGlvblN0cmluZyA9IHNlbGVjdGVkU2VjdGlvbi5zZWN0aW9uO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkU2VjdGlvblN0cmluZyk7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZFNlY3Rpb25TdHJpbmcpIHtcclxuICAgICAgICAgICAgY2FzZSBg0KPRgdGWINCy0ZbQtNC10L5gOlxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiQUxMXCJ9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlwiYDpcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTFcIn0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXCJgOlxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZ3JvdXAtMlwifSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFwiYDpcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTNcIn0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlckluZm9QYWdlKGV2ZW50KSB7XHJcbiAgICAgICAgcmVSZW5kZXJSZWRMaW4oZXZlbnQpO1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIklORk9fUEFHRVwifSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlbmRlcmVkU2VjdGlvbnMgPSBzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcclxuICAgICAgICBzZWN0aW9uID09PSBcItCf0YDQviDQutC+0L3QutGD0YDRgVwiID9cclxuICAgICAgICAgICAgPEZpbHRlclNlY3Rpb24gIG9uQ2xpY2s9e3JlbmRlckluZm9QYWdlfSBrZXk9e3NlY3Rpb259PiA8RmFVbml2ZXJzaXR5Lz57c2VjdGlvbn0gPC9GaWx0ZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICA6IDxGaWx0ZXJTZWN0aW9uICByZWY9e21hcmtlZFNlY3Rpb25SZWZ9IG9uQ2xpY2s9eyhlKSA9PiBvbkZpbHRlclNlY3Rpb25DbGljayh7c2VjdGlvbn0sIGUpfSBrZXk9e3NlY3Rpb259PiA8RmFGb2xkZXIvPntzZWN0aW9ufTwvRmlsdGVyU2VjdGlvbj5cclxuICAgICkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckNvbnRhaW5lciBjaGlsZHJlbj17cmVuZGVyZWRTZWN0aW9uc30vPlxyXG4gICAgICAgICAgICA8L1N0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyPlxyXG4gICAgICAgICAgICA8RGl2VGhpbkxpbmU+PFRoaW5MaW5lSW5uZXJEaXYgd2lkdGg9e3JlZExpbmVXaWR0aH0gbGVmdD17cmVkTGluZUxlZnR9IGFuaW1hdGlvbj17YW5pbWF0aW9ufS8+PC9EaXZUaGluTGluZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0IbQstCw0L3QvtCy0LAg0Jsu0IYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/QktC40YjQvdC10LLRgdGM0LrQsC0xLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0JfQsNC60L7Qv9C10YbRjC0xLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0JfQsNGF0L7QtNGP0LrRltC9LTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/QmtGD0LfQvdGU0YbQvtCy0LAtMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9Cc0LDRgNGG0LXQstCwLTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/QntGB0YLQsNC/0YfRg9C6INCcLiDQnC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9Cg0LDQudGCINCGLtChLnBuZ1wiOyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kb3dEaW1lbnNpb25zKCkge1xyXG4gICAgY29uc3QgeyBpbm5lcldpZHRoOiB3aWR0aCwgaW5uZXJIZWlnaHQ6IGhlaWdodCB9ID0gd2luZG93O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHRcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVdpbmRvd0RpbWVuc2lvbnMoKSB7XHJcbiAgICBjb25zdCBbd2luZG93RGltZW5zaW9ucywgc2V0V2luZG93RGltZW5zaW9uc10gPSB1c2VTdGF0ZShnZXRXaW5kb3dEaW1lbnNpb25zKCkpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICAgICAgICBzZXRXaW5kb3dEaW1lbnNpb25zKGdldFdpbmRvd0RpbWVuc2lvbnMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHdpbmRvd0RpbWVuc2lvbnM7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XHJcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXJnZXQnKSk7XHJcbiIsImltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J1xyXG5cclxuY29uc3QgZ3JvdXAxID0gYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XCJgO1xyXG5jb25zdCBncm91cDIgPSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcImA7XHJcbmNvbnN0IGdyb3VwMyA9IGDQndC+0LzRltC90LDRhtGW0Y8gXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXCJgO1xyXG5cclxuY29uc3QgbXlDYXJkcyA9IFt7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYTVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCQ0LPRgNCw0YLRltC90LAg0KHRgtCw0L3RltGB0LvQsNCyLCA5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLtCT0LvRltC90LrQsC4g0J/QvtGH0YPRgtGC0Y8sIDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuINCi0LDQvdC+0LpcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5NHl0X3NLQzVFdDNyNDl6Q0VSc2RCWmVEUWdZLUdfaS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2E2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktCw0LvRltCz0YPRgNCwINCS0LDRgNCy0LDRgNCwLCA5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCcLtCb0LXQvNGW0YjQutC+LiDQmtC+0LvQvtC80LjQudC60LBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjNmhUSXFEbC1jQUYzQnIzbDFjMnV3cUZac0xWU1BUdi9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2E3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktCw0LvRltCz0YPRgNCwINCS0LDRgNCy0LDRgNCwLCA5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCiLtCc0LDQutGB0ZbQvNC+0LIuICcn0JfQsNC00LfQtdGA0LrQsNC70LvRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNVlyNlF4bTRyc3RET01VMnZHbjVKd3E1VmZVcE4yU0QvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNhOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQsNGB0LjQu9C10LLRgdGM0LrQsCDQpdGA0LjRgdGC0LjQvdCwLDcg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCT0ZbQu9C70L7Qui4nJ9Ch0LDQvNC+0YLQvdGPINCx0LDQu9GM0L3QsCDQt9Cw0LvQsCcnLiAyKdCiLtCg0L7RgdGC0LjQvNCw0YjQtdC90LrQvi4nJ9Cn0LDQutC70YPQvScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR3R4VUt1VWtMS0FuaDVvQ2Y5Rmx1aVVUUW9KQ1RiTU0vcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNhOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQvtC70LjQvdC10YbRjCDQntC70LXQutGB0LDQvdC00YAsIDgg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmy7QmtC+0LvQvtC00YPQsS4g0JDRgNC60LDQvS4gMinQpC7QoNC40LHRltGG0YzQutC40LkuICcn0KDQtdCz0L7RgtGD0YjQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfQ09QZVB6d2RnUzdVX09qRXhPcHY4bm96MW1pVGU4Yy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2FhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9Cw0LvQsNCz0LDQvSDQmtCw0YLQtdGA0LjQvdCwLCA5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuINCi0LXQvNCwINC3INCy0LDRgNGW0LDRhtGW0Y/QvNC4OyAyKdCTLtCa0YPRiNC90LDRgNC10L3QutC+LiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvQmxVZlhXcWxoNXVEc0RGQ1hiSGdjN1hHaUFKR2JMSC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2FiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9C10YDQsNGB0LjQvNC10L3QutC+INCe0LvQtdC60YHQsNC90LTRgNCwLDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQki7QoNCw0YfQutC+0LLRgdGM0LrQuNC5LiDQotC+0LrQsNGC0LjQvdCwOzIp0JIu0JrQvtGB0LXQvdC60L4uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMURHbnNTUUdsQnU4WF9vRFB0M1lLdEttaVZ6Vi1HM3FKL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYWNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0L7Qu9C+0LTQvtCy0YHRjNC60LAg0KHQvtGE0ZbRjyw3INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQhi7QktCw0L3RhdCw0LvRjC7QoNC+0L3QtNC+OzIp0Jwu0JTRgNC10LzQu9GO0LPQsC4nJ9CS0LXRgdC10LvQsCDQs9GA0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTJLdXRqLW93cHNyOGhlbHJtX2tGWmgxeVF3TWpFQzdBL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYWRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0L7Qu9GD0LEg0JDQu9GW0L3QsCwgOSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsINCG0YcuLCAyKdCRLtCU0LLQsNGA0ZbQvtC90LDRgS4g0J/RgNC10LvRjtC00ZbRj1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXV3aEtNS2RKWkloUnpuTTNWVTVtVHFFdUt4eFRlc2FPL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYWVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0YDQuNCz0L7RgCfRlNCy0LAg0JrQsNGC0LXRgNC40L3QsCwgOCDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0KDQsNC90L7QuicnOzIp0IYu0JrQvtGA0L7Qu9GM0LrQvtCy0LAuJyfQk9C+0YDQvtCx0YfQuNC6JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhaU12NUx3WVY5bTJ3ei1TSk1HbnhmVXFJUlQ5TV9Fdy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2FmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNCw0L3RjtC6INCE0LvQuNC30LDQstC10YLQsCw3INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7Qm9GO0LHQsNGA0YHRjNC60LjQuS4nJ9Ci0LDQvdGG0Y7QstCw0LvRjNC90LAnJzsgMikg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5LtCS0LDQu9GM0YFcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF2VGtfbUFCX0VDaDlWRHdSNkVNYXNZMXkyMUtXclNZSC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2IwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNGA0L7Qs9Cw0L0gINCc0ZbQu9Cw0L3QsCwgNSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JzQsNC50ZTRgC4gJyfQktC10YHQtdC70LAg0LPRgNCwJyc7IDIp0JQu0JHQsNGI0YLQtdC50L0uICcn0JLQsNC70YzRgSDRgdC70L7QvdC10L3Rj9GCJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYYjBnSWdGeUNuTHVDeGpuNWtsYWVRMExsOURza1JQei9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2IxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNGA0L7Qt9C00L7QstCwINCE0LvQuNC30LDQstC10YLQsCwgOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS7QnNC10L3Rg9C10YIuIDIp0JMu0JrQu9Cw0YHRgdC10L0uINCf0L7Qu9GM0LrQsFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXI1XzE4cFI3Qkx4RFNERW5NRDdySE5HalI5emlFaUduL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYjJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCX0LHRltGAINCc0LDRgNGW0Y8sOCDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0JPQtdC00ZbQutC1LiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwg0IYg0YcuLDIp0KAu0KjRg9C80LDQvS4nJ9Cf0LXRgNGI0LAg0LLRgtGA0LDRgtCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfN3FuM2ZUdXRkS0djR2RiZ3YxM3JLb2tKOGp4Z2szYS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2IzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGM0LrRltCyINCe0LvQtdC60YHQsNC90LTRgNCwLiA5INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QlNGW0LDQsdC10LvQu9GWLiDQodC60LXRgNGG0L47IDIp0J4u0JPQtdC00ZbQutC1LiDQnNCw0LvQtdC90YzQutCwINC/J9GU0YHQsFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXZZZVZrUmFWMW1iMzN1SjFER01yMjBxb2lrRkNyOUF5L3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYjRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQnNCw0YDRltCw0LwsIDgg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0JzQsNC50LrQsNC/0LDRgC4gJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDRgdC+0LvRjCDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xclJsTE1Kam9Xd1RWdXA3X3ZWTUQ0RDNubDJZLWxzcE8vcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjtC6INCc0LDRgNGW0LDQvC4gOCDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QmtC40YDQtdC50LrQvi4gJyfQodGC0YDQuNCxLdGB0LrQvtC6JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJbXBQcTluY2JNaDVUMVNjQUhmRG16NTdCRGxMWkNGMi9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2I2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtGB0YPQv9C+0LLQsCDQkNC70ZbRgdGW0Y8sIDgg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QoNC10LnQvdC10LrQtS4g0JPQsNCy0L7Rgiw7MinQmS7QoS7QkdCw0YUuINCc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjyDQtNC+INC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwZzlDQ0pvWFJ6ZUc4Q2lGaGduRUJ6VFFCTElXRGFuQS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2I3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0LLQsNC70LXQvdC60L4g0JLQsNGA0LLQsNGA0LAsOCDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0JPQtdGC0LDQu9C+0LLQsC4nJ9Cg0LDQvdC+0Log0LIg0LvRltGB0ZYnJzsyKdCSLtCf0L7QtNCy0LDQu9CwLiAnJ9Ca0LDQv9GA0LjQt9GD0LvRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUzM4X29FQ09CbzdLR0RWMWF6SlV4M3pPWXdnUUVRSVYvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGA0LXQvdGW0LLRgdGM0LrQsCDQlNCw0YAn0Y8sIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoC7QktCw0L3QtNCw0LsuJyfQktC+0LTQvtCz0YDQsNC5Jyc7MinQny7Ql9Cw0YXQsNGA0L7Qsi4nJ9CX0L3QsNC50L7QvNC40Lkg0YHQuNC70YPQtdGCJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5Q0F6UENhV3JBTl9TV3phSkZkRXB4UElPUXctcmZMVS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2I5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0YHRgtC10L3QutC+INCv0YDQvtGB0LvQsNCy0LAsIDcg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JrQvtGB0LXQvdC60L4uINCc0LXQu9C+0LTRltGPXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQ2RkWWNveWdUY3RvYWJHUUY3cFQycG9SdkN1cFZHX2MvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGB0YLQtdC90LrQviDQr9GA0L7RgdC70LDQstCwLiA3INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtCZ0ZTQvdGB0LXQvS4nJ9Cn0LDRgNGW0LLQvdC40Lkg0YLQsNC90L7QuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdUIyOWJUUEVpWWR1Z0pmTE9abDRTUUdyRlk5blFwci0vcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JvQsNGC0LrQvtCy0YHRjNC60LAg0ITQu9C40LfQsNCy0LXRgtCwLDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtC+0YHQtdC90LrQvi4g0LLQsNC70YzRgTsgMinQni7Qk9GA0LXRh9Cw0L3RltC90L7Qsi4nJ9Cc0ZbQuSDQutC+0L3QuNC6JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2WUF3LXE3ZjhGOUpCUG1mbjh0RWtwSlQ4MUo3RWFoQS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2JjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9GW0YjQvNCw0L0g0JTQsNGA0LjQvdCwLDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCf0L7QtNCy0LDQu9CwLicn0JzQsNGA0Ygt0LPRgNC+0YLQtdGB0LonJy4gMinQoS7QnNCw0LnQutCw0L/QsNGALtCa0L7Qu9C40YHQutC+0LLQsFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5zV3ozVFIwU0tpVHRjTkNBSmUwNTliaGhGb210X05FL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYmRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDQs9C+0LvQsCDQodC+0YTRltGPLCA4INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K8u0JHQvtCx0LDQu9GW0LouJyfQodCy0Y/RgtC60L7QstCwINC/0L7Qu9GM0LrQsCcnOyAyKdCGLtCR0LXRgNC60L7QstC40YcuINCh0L7QvdCw0YLQuNC90LAg0YHQvtC70Ywg0LzQsNC20L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWd1QXhzNWdfd2JHdl90d3FpeXBvMGU4RkhPd3VtLUloL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYmVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDQt9GD0YDQtdC90LrQviDQnNCw0LnRjywgOCDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLiDQkdC+0LHQtdGALiAnJ9CQ0LPQtdC90YIg0KUnJywgMinQhi7QhtC+0YDQtNCw0L0uICcn0J/QvtC70Y7QstCw0L3QvdGPINC90LAg0LzQtdGC0LXQu9C40LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSWUxV0NRcGdQdUxZZEtOeFZHdUxrZUlWbllKTlpKOVQvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNGA0YfQtdC90LrQviDQhNC70LjQt9Cw0LLQtdGC0LAsIDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS7QvNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8g0LTQviDQvNGW0L3QvtGAOyAyKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQkdCw0LHQsCDQr9Cz0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVpKbzRHVUxaOXNmY1V1QXBGNWp5b0hJVVZfSUtBVnJnL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYzBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDRgNGH0YPQuiDQnNCw0LrRgdC40LwsIDgg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0KQuINCo0L/RltC90LTQu9C10YAuINCh0L7QvdCw0YLQuNC90LAsINGC0LIuMTU3IOKEljRcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFzQzdNVWpja25yblpaWjVoZk1DWGJTdnMzNktBM3BwVi9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2MxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNCw0YDRh9GD0Log0JzQsNC60YHQuNC8LiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JPRltC70LvQvtC6LiAnJ9Ca0LDQv9GA0ZbRh9GW0ZTRgtGC0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVlkQWlodkFRa0NUOGJieVc0NHBRaTJpWmhtWDFjM0t6L3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYzJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0L7RgtGD0LfQutC40L3QsCDQm9GW0LTRltGPLCA5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCR0ZbQu9Cw0YfQtdC90LrQvi4g0KPQutGA0LDRl9C90YHRjNC60LjQuSDRgtCw0L3QvtC6XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYnBPOWRIQWNiUDhLbGFXVF8xblhYUWlaZWJ1RDhGMHAvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjM1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQvtGC0YPQt9C60LjQvdCwINCb0ZbQtNGW0Y8sOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QnNC+0YbQsNGA0YIu0JzQtdC90YPQtdGCXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQ19teEFVNjVWdnZ2ZmlQb1JRc2NLUjBvVURXcEhEUXQvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjNFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J3QvtCy0L7RgdGW0LvRjNGB0YzQutCwINCa0LDRgtC10YDQuNC90LAsIDcg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLtCh0L7QvdCw0YLQuNC90LAg0YLQsi4zNiwg0IYt0IbQhtCG0YcuLCAyKdCGLtCR0LXRgNC60L7QstC40YcuINCf0YDQtdC70Y7QtNGW0Y9cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZNzJDRkxPTVBpYndUVVBnV09tc1FIM1lKUHZpQmpEYS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2M1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQntC70YzRhdC+0LLRgdGM0LrQsCDQkNC90ZbRgtCwLCA5INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCGLtCf0LDQstC70ZbQui4gJyfQodC90ZbQttC40L3QutC4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFycy1WZ0ZNbklZWlZtOWtPak5oNkZUbF9QMENBRFJCMS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2M2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQntC70YzRhdC+0LLRgdGM0LrQsCDQkNC90ZbRgtCwLCA5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCdLiDQmtCw0YDQv9C10L3QutC+LiDQldGC0Y7QtCDRgdGWINC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrUzNCcVF3NC1tc01vem5PM056X2lXYzV5dGxKT0ZUbS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2M3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQntGB0YLQsNC/0YfRg9C6INCa0LDRgNGW0L3QsC4gOCDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JPRltC70LvQvtC6ICcn0JTQt9Cy0ZbQvdC+0YfQutC4Jyc7IDIp0IYu0KXRg9GC0L7RgNGP0L3RgdGM0LrQuNC5LicnJ9CS0L7Qs9C90ZbQstC+0YfQutCwLdGB0YLRgNC40LHRg9C90ZbQstC+0YfQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2UkFjTjJPNmt1bktaQUZyYmdCSHNFTmlaZzlpS3M0Ry9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2M4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQntGF0YDRltC9INCv0YDQtdC80LAsIDgg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5LiDQndC+0LLQtdC70LAuIDIp0KEu0JzQsNC50LrQsNC/0LDRgC7QotC+0LrQsNGC0LjQvdCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xencxSkswSjRkOEhrLXpuYnYtNW9EbmEtcUwzY3dSRVAvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/QsNCy0LvQtdC90LrQviDQodGC0LXRhNCw0L3RltGPLCA3INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JvRjtCx0LDRgNGB0YzQutC40Lku0J/RltGB0L3RjzsgMikg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5Licn0JrQu9C+0YPQvdC4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJbW53SmoyRGVxei1USmZ2WEFDQ3JacGlaTlQzQm5LSC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2NhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9Cw0L3RjNC60L7QstCwINCQ0L3QvdCwLCA4INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiDQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8g0LTQviDQvNGW0L3QvtGAOyAyKdCbLtCo0YPQutCw0LnQu9C+LiDQhtC90YLQtdGA0LzQtdGG0L5cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5ckFIcjZpMTdOU2hQNXFhSW1Qbld4LXhKUWpDTU15Mi9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2NiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9Cw0YDRhNGM0L7QvdC+0LIg0JTQvNC40YLRgNC+LCA5INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QktC70LDQtNC40LrRltC90LAt0JHQsNGH0LjQvdGB0YzQutCwLicn0KnQvtGB0Ywg0YHRg9C80L3QtScnOyAyKdCeLtCT0LXQtNGW0LrQtS7QotCw0L3QtdGG0YxcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFORGR3NTdSc3JtTHJFX3lXU0cwdUZKWEVqV2NHcUdtUi9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2NjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9C+0LPQvtGA0ZTQu9C+0LIg0JDRgNGC0LXQvCwgOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiDQnNC10L3Rg9C10YI7IDIp0J0u0J3QuNC20LDQvdC60ZbQstGB0YzQutC40LkuINCa0L7Qu9C+0LzQuNC50LrQsFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5lODZpTS1OVXM2TmNpb0JzdlVqZlFhNk1uN2NTQVI3L3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzY2RcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0YPQt9Cw0L3QvtCy0LAg0JzQsNGA0ZbRjyw5INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoy4g0JPRltC70LvQvtC6LiAnJ9Ca0L7RgNC+0LvRltCy0YHRjNC60LjQuSDQvNC10L3Rg9C10YInJzsgMinQhi7QhtC+0YDQtNCw0L0uIMKr0J/QvtC70Y7QstCw0L3QvdGPINC90LAg0LzQtdGC0LXQu9C40LrQsMK7XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xT0dTX2Zxekp2YkI3YU5QcmV4d3FESzV4MGxzLTIwQ0MvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDQtdC30L3RltC6INCi0LXRgtGP0L3QsCwgOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J0u0KLQvtGA0L7Qv9C+0LLQsC4g0JLQsNGA0ZbQsNGG0ZbRlyAnJ9Ci0YDQuCDQv9C+0YDQvtGB0Y8nJywyKdCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4gJyfQnNCw0LvQtdC90YzQutC40Lkg0LbQvtC90LPQu9C10YAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhHeE5UVHRXcmhkT3U2WTdHdWVVQWdHWHZqb0xsTUJsL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzY2ZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0LjQsdCw0Log0JDQvdCw0YHRgtCw0YHRltGPLDgg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKS7QnNC10LvQsNGA0YLRltC9Licn0KDQsNC90L7QuicnLDIp0Jwu0JzQsNC50ZTRgC4nJ9Cd0LXQt9Cy0LjRh9Cw0LnQvdCwINC/0YDQuNCz0L7QtNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1em1WcUZWbm5RYUlHWDdvM0gtN3ROZTBrcDFaaVV2UC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2QwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQoNGW0L/QvdC40Lkg0JHQvtCz0LTQsNC9LCA4INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0IYuINCR0LXRgNC60L7QstC40YcuINCS0LDRgNGW0LDRhtGW0Zc7IDIp0JQuINCg0L7Rg9C70ZYuJyfQkiDQutGA0LDRl9C90ZYg0LPQvdC+0LzRltCyJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFRbHIxXy1wRkFsTElpeEtraHgyLVp4eEVZWmhBWjlaNy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2QxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQoNC+0LzQsNC90YfQtdC90LrQviDQldC70LjRgdC10LksIDgg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQqC7Qk9GD0L3Qvi4nJ9Cc0LDRgNGIINC80LDRgNGW0L7QvdC10YLQvtC6Jyc7Mikg0J4u0JPRgNC10YfQsNC90ZbQvdC+0LIuJyfQndC10LfQstC40YfQsNC50L3QsCDQv9GA0LjQs9C+0LTQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaUktempxNFFpbURMOVRMRTVCUll1cm11QUwxNmZTY1UvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQsNC50YfRg9C6INCv0YDQvtGB0LvQsNCy0LAsIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIuINCc0LDQutGB0LjQvNC+0LIuJyfQkdCw0LHQsCDQr9Cz0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVg1QzdrZk5kM1Fsb1psMFRBdk5fQVFoMC1xWHRwU1NCL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZDNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LDQudGH0YPQuiDQr9GA0L7RgdC70LDQstCwLDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0Jou0KDQvtC70LvRltC9LiAnJyDQqNC+0LrQvtC70LDQtNC90LUg0L/QtdGH0LjQstC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2dlltX0VkRHhfLTNCUkhKTXlEMzVrM29DNEYydFY1Ni9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2Q0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodGW0YLRiNCw0ZTQstCwINCX0LDRgNC10LzQsCw5INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YA7IDIp0Jou0KHQu9C+0L3RltC80YHRjNC60LjQuS4gJyfQlNGO0LnQvNC+0LLQvtGH0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSDZlZFF0c1JwMF93Y3VPWVJBRWgxbGZmUnowVFh0aWIvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQhNCy0LPQtdC90ZbRjywgOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0LLQsNGB0L3QtdCy0YHRjNC60LjQuS4nJ9CU0YPQvNC60LAnJywgMinQlC7QkNC70LXQutGB0LDQvdC00LXRgC4gJyfQl9C40LzQvtCy0LAg0YDQsNC/0YHQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNkxXOUVlc1BQczFTVGk2a1FwUXhkRUp6azNQZ25IWWovcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkNlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHRgtGA0LjQudGB0YzQutCwINCQ0LzQtdC70ZbRjywgOCDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCSLtCa0L7RgdC10L3QutC+Licn0JTQvtGJ0LjQuicnOyAyKdCeLtCR0ZbQu9Cw0YfQtdC90LrQvi4g0JXQutGB0L/RgNC+0LzRglwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBoOU9OUkcyVDQydnhBbFd5NEFTUDBxZ2E4SVUwMnJ2L3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZDdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0YLRg9C00LfQuNC90YHRjNC60LAg0ITQu9C40LfQsNCy0LXRgtCwLDcg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy4g0JzQvtGG0LDRgNGCLiDQnNC10L3Rg9C10YIsIDIp0KMuINCT0ZbQu9C70L7Qui4gICAgICAnJ9Ce0YHRltC90L3RltC5INC10YHQutGW0LcnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZkc09idWI5WjBFN1pNMVFZTXNmcWthbGpubkxRMmplL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZDhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0YPRhdCw0L0g0JTRltCw0L3QsCwgOCDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCo0YPQutCw0LnQu9C+LtCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRgtC10LzRgyDQki7QqNCw0ZfQvdGB0YzQutC+0LPQvjsgMinQoC7QpNGD0YfRgS4nJ9Cc0LDQu9C10L3RjNC60LUg0YDQvtC30LHQuNGC0LUg0YHQtdGA0YbQtScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR3U1dWNvQ0dGaHlFbk1oMy1JRFVKLXVGMFR1ajM3VVovcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQtdGA0L8n0Y/QuiDQkNCw0YDQvtC9LCA5INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0IYu0JHQtdGA0LrQvtCy0LjRhy4g0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGD0LrRgNCw0ZfQvdGB0YzQutGDINGC0LXQvNGDOyAyKdCiLtCe0YHRgtC10L0uICcn0JzQsNC70LXQvdGM0LrQuNC5INC10LvRjNGEJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFadFFiTkJCZ0dtT3pNV25uSEFGLTdfQ0JzWGszTHctMi9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2RhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotC40LzRh9C10L3QutC+INCd0LDQtNGW0Y8sIDgg0YDQvtC60ZbQsiwgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QqNGC0L7Qs9Cw0YDQtdC90LrQvi4gJyfQnNC10YLQtdC70LjQuicnOyAyKdCSLtCT0ZbQu9C70L7Qui4gJyfQnNGW0YHRj9GH0L3QtSDRgdGP0LnQstC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFQUzlBR0h5RURxc3RqcUExTWlFYlRrcDVqMVV1U2hyRy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2RiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotGW0YnQtdC90LrQviDQktC10YDQvtC90ZbQutCwLCA3INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjyDQtNC+INC80ZbQvdC+0YA7LiAyKdCbLiDQqNGD0LrQsNC50LvQvi4g0JLQsNGA0ZbQsNGG0ZbRl1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZ0cmo5azVqaER4Vmk1dWZoWFkzVEhrd09LOFkxMkhtL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZGNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0L7QtNC+0YDQvtCy0LAg0JTQsNGP0L3QsCwgNiDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCR0LDRgNCy0ZbQvdGB0YzQutC40LkuICcn0JfQsNC50YfQuNC6JycsIDIp0Jwu0JvRjtCx0LDRgNGB0YzQutC40LkuICcn0J/Qu9GP0YHQvtCy0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBBeklCdGpHME5mcWF6VUkyNUhzUnJGVlhqTHl6MkJpL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZGRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0L7QvdGW0ZTQstC40Ycg0JrRgdC10L3RltGPLCA5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0KHQv9GW0LvRltC+0YLRlicn0JPRg9GG0YPQu9GP0YLQsCcnOzIp0JIu0JPRltC70LvQvtC6Licn0KMg0YHRgtCw0YDQvtC80YMg0JLRltC00L3RlicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMTl3M3duSE1wNlhOV1NLS3I5VkpJb1lqVklQOU1sQU8vcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLRjtGC0YzQutC+INCS0L7Qu9C+0LTQuNC80LjRgCwgOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCa0YPQu9Cw0YMu0KHQvtC90LDRgtC40L3QsCwg0YLQsi41NSDihJYzOyAyKdCgLtCb0ZbRgdC+0LLQsC4nJ9CS0LXRgdC10LvQuNC5INC90LDRgdGC0YDRltC5JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFiZy1ISzdMcDNVd2pHazNNSVRUZEQ5ZVE3ckZkaHgxSC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2RmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpNC10YHQtdC90LrQviDQkNC90L3QsCw4INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JPQtdC00ZbQutC1LtCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCAyKdCSLtCT0LDQstGA0LjQu9GW0L0uICcn0JrQsNC/0YDRltGH0YfRltC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFanJxOFpFWEJKcV9BTmZBaVktNWpLSDdSczU4Zkx1Qy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2UwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQp9C+0YDQvdC10Lkg0K/QvdCwLCA3INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JwuINCV0LrRiNGC0LXQudC9LiAnJ9Ca0LDQv9GA0LjQtyDQs9C90L7QvNGW0LInJzsgMinQoS7QrtGE0LXRgNC+0LIuINCd0L7QutGC0Y7RgNC9XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZzZiQjdhcVdwdHc1bExuQWlYa2xPRnBRbDRYME5MS2ovcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNlMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KjQutGD0YDQutC+INCi0LjQvNC+0YTRltC5LCA5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0KjQvtC/0LXQvS4g0JLQsNC70YzRgSDQu9GPINC80ZbQvdC+0YA7IDIp0Jsu0KjRg9C60LDQudC70L4uICcn0JLQtdGB0LXQu9CwINC80L7Qt9Cw0ZfQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFlSko0NFpiZ1RyVVRkSC10QlBLR3ljMUtfMHJyeWo0Xy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2UyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQrtGA0YfRg9C6INCv0L3QsCwgNyDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCcLiDQmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwLCDRgtCyLjM2IOKEljEsINCGINGHLjsgMinQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0JLRgNCw0L3RltGI0L3RjyDQvNC+0LvQuNGC0LLQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb1BVdUgycXphUVVMeXB2dXkzTTZRLWY3dnZoWmxBbngvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn1dO1xyXG5cclxuZnVuY3Rpb24gZmlsbVJlZHVjZXIoc3RhdGUgPSB7Y2FyZENvdW50OiBteUNhcmRzLmxlbmd0aCwgY2FyZHM6IG15Q2FyZHMsIGlzRGF0YUluUGxhY2U6IHRydWUsIGVycm9yOiBcIlwifSwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnSU5GT19QQUdFJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogLTEsXHJcbiAgICAgICAgICAgICAgICBjYXJkczogW10sXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnQUxMJzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI+INCj0YHRliDQstGW0LTQtdC+XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZHM6IG15Q2FyZHMsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBteUNhcmRzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnZ3JvdXAtMSc6XHJcbiAgICAgICAgICAgIGxldCBuZXdDYXJkcyA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5ncm91cCA9PT0gZ3JvdXAxKS5zbGljZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZHM6IG5ld0NhcmRzLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2dyb3VwLTInOlxyXG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMxID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDIpLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMxLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHMxLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdncm91cC0zJzpcclxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzMiA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5ncm91cCA9PT0gZ3JvdXAzKS5zbGljZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZHM6IG5ld0NhcmRzMixcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzMi5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ1NFQVJDSCc6XHJcbiAgICAgICAgICAgIGxldCBxID0gYWN0aW9uLnF1ZXJ5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGA+INCf0L7RiNGD0Lo6ICR7cX1gKTtcclxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzMyA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhcmROYW1lID0gY2FyZC5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9vbCA9IChjYXJkTmFtZS5zdGFydHNXaXRoKHEpIHx8IGNhcmROYW1lLmluY2x1ZGVzKHEpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUZXN0aW5nICR7Y2FyZE5hbWV9IG9uIHF1ZXJ5ICR7cX0sIHJlc3VsdCBpcyAke2Jvb2x9YClcclxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld0NhcmRzMyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMzLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHMzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlXHJcbiAgICAgICAgJ0VSUk9SJ1xyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYD4g0J/QvtC80LjQu9C60LBgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLm1zZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBteUNhcmRzLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbXlDYXJkcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjYXJkU3RvcmUgPSBjcmVhdGVTdG9yZShmaWxtUmVkdWNlcik7XHJcblxyXG5jYXJkU3RvcmUuc3Vic2NyaWJlKCgpID0+XHJcbiAgICBjb25zb2xlLmxvZyhcIkZpbG1zU3RvcmUgc3RhdGUgd2FzIGNoYW5nZWQsIG51bWJlciBvZiBjYXJkczogXCIgKyBjYXJkU3RvcmUuZ2V0U3RhdGUoKS5jYXJkQ291bnQpXHJcbik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==