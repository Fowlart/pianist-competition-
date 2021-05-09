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
  text-align: center;
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
    if (width < 1000) setCalculatedWidth(width - 50);else setCalculatedWidth(640);
  }, [width]);
  const [name] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.name);
  const [composition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.composition);
  const [videoUrl] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.videoUrl);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilmWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IframeBox, {
    src: videoUrl,
    width: calculatedWidth
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilmInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BsFillPersonFill"], null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["FaBookOpen"], null), " ", composition), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)));
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
  justify-content: space-around;
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
      margin-top: 10px;
      margin-bottom: 80px;
      margin-left: 80px;
      margin-right: 80px;
      font-family: "Segoe UI", serif;
      font-weight: 850;
      text-align: left;
      font-size: 20px;
    `;
  const Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
      margin-right: 20%;
      margin-top: 5px;
      margin-left: 20%;
      border: solid white 2px;
    `;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Image, {
    src: props.imgUrl
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextSection, null, props.text));
};

const Div = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const A = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a`
  margin-left: 10px;
  margin-right: 10px;
  font-family: "Segoe UI", serif;
  font-style: oblique;
  font-weight: 600;
  margin-top: 20px;
  font-size: 20px;
  color: white;
  text-decoration: none;
  border: solid 2px white;
  transition: all 0.5s;

  :hover {
    color: darkred;
    border: solid 2px darkred;
  }
`;
const P = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  left: 400px;
  font-size: 40px;
  font-family: "Segoe UI", serif;
  font-style: oblique;
  font-weight: 600;
  color: white;
  text-align: center;
`;
const InfoPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://drive.google.com/file/d/1ka7GuVc0mhHzR5jq1qhTCHnlNa0HcXmB/view?usp=sharing"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://drive.google.com/file/d/1qdyL0mXafowI888sPJLyM7yuhYJNR70b/view?usp=sharing"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), "\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043A\u043E\u043C\u0456\u0442\u0435\u0442 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0443 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://drive.google.com/file/d/16sz0uu564Bl7l9Y-bqMO_-gLPqTuDBYC/view?usp=sharing"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), "\u0410\u0444\u0456\u0448\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, null, "\u0421\u043A\u043B\u0430\u0434 \u0436\u0443\u0440\u0456:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PersonInfoSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    text: `Кузнєцова О.О.- голова журі, доктор філософії, кандидат педагогічних наук, професор кафедри  музично- інструментального виконавства Харківського Національного педагогічного університету імені Г.Сковороди, заслужений діяч мистецтв України,  "Відмінник освіти України", відзначена орденом Міністерства культури  України "За досягнення в розвитку  культури  і мистецтв ", секретар Національної всеукраїнської музичної спілки, голова Асоціації піаністів  Національної  всеукраїнської музичної спілки,  президент Асоціації піаністів-педагогів України("EPTA" Ukraine), Віце- президент  Асоціації піаністів-педагогів Європи "EPTA" London).`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    text: "\u0417\u0430\u043A\u043E\u043F\u0435\u0446\u044C \u041B.\u0421.- \u0433\u043E\u043B\u043E\u0432\u0430 \u0436\u0443\u0440\u0456, \u0437\u0430\u0441\u043B\u0443\u0436\u0435\u043D\u0438\u0439  \u0434\u0456\u044F\u0447 \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0438, \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447-\u043C\u0435\u0442\u043E\u0434\u0438\u0441\u0442 \u041B\u044C\u0432\u0456\u0432\u0441\u044C\u043A\u043E\u0433\u043E \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u043E\u0433\u043E \u043C\u0443\u0437\u0438\u0447\u043D\u043E\u0433\u043E \u043B\u0456\u0446\u0435\u044E \u0456\u043C\u0435\u043D\u0456 \u0421. \u041A\u0440\u0443\u0448\u0435\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u043E\u0457, \u043F\u043E\u0447\u0435\u0441\u043D\u0438\u0439 \u0430\u043C\u0431\u0430\u0441\u0430\u0434\u043E\u0440 \u043C\u0443\u0437\u0438\u0447\u043D\u043E\u0457  \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0438  \u041F\u043E\u043B\u044C\u0449\u0456"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_7__["default"],
    text: "\u0420\u0430\u0439\u0442 \u0406.\u0421., \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442 \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0456\u0447\u043D\u0438\u0445 \u043D\u0430\u0443\u043A,  \u043D\u0430\u0443\u043A\u043E\u0432\u0438\u0439 \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0456\u0457 \u0435\u0441\u0442\u0435\u0442\u0438\u0447\u043D\u043E\u0433\u043E \u0432\u0438\u0445\u043E\u0432\u0430\u043D\u043D\u044F \u0442\u0430 \u043C\u0438\u0441\u0442\u0435\u0446\u044C\u043A\u043E\u0457  \u043E\u0441\u0432\u0456\u0442\u0438  \u0406\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0443  \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0432\u0438\u0445\u043E\u0432\u0430\u043D\u043D\u044F  \u041D\u0430\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0457  \u0430\u043A\u0430\u0434\u0435\u043C\u0456\u0457  \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0456\u0447\u043D\u0438\u0445  \u043D\u0430\u0443\u043A \u0423\u043A\u0440\u0430\u0457\u043D\u0438."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_8__["default"],
    text: "\u041E\u0441\u0442\u0430\u043F\u0447\u0443\u043A \u041C. \u041C., \u0434\u043E\u0446\u0435\u043D\u0442 \u043A\u0430\u0444\u0435\u0434\u0440\u0438  \u0433\u0440\u0438 \u043D\u0430  \u043C\u0443\u0437\u0438\u0447\u043D\u0438\u0445 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0445 \u0406\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0443  \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432  \u0420\u0414\u0413\u0423."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_10__["default"],
    text: "\u0417\u0430\u0445\u043E\u0434\u044F\u043A\u0456\u043D \u041E.\u0412., \u0434\u043E\u0446\u0435\u043D\u0442 \u043A\u0430\u0444\u0435\u0434\u0440\u0438 \u0435\u0441\u0442\u0440\u0430\u0434\u043D\u043E\u0457 \u043C\u0443\u0437\u0438\u043A\u0438 \u0406\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0443  \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432  \u0420\u0414\u0413\u0423."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_11__["default"],
    text: "\u0412\u0438\u0448\u043D\u0435\u0432\u0441\u044C\u043A\u0430 \u0406.\u041F., \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447 \u0432\u0438\u0449\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457, \u0433\u043E\u043B\u043E\u0432\u0430 \u0446\u0438\u043A\u043B\u043E\u0432\u043E\u0457 \u043A\u043E\u043C\u0456\u0441\u0456\u0457 \"\u0424\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043E\" \u0420\u0456\u0432\u043D\u0435\u043D\u0441\u044C\u043A\u043E\u0433\u043E \u043C\u0443\u0437\u0438\u0447\u043D\u043E\u0433\u043E \u0444\u0430\u0445\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043B\u0435\u0434\u0436\u0443 \u0420\u0414\u0413\u0423."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    text: "\u0406\u0432\u0430\u043D\u043E\u0432\u0430 \u041B.\u0406., \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447 \u043F\u0435\u0440\u0448\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u041A\u0417 '\u041B\u0443\u0446\u044C\u043A\u0430 \u043C\u0443\u0437\u0438\u0447\u043D\u0430  \u0448\u043A\u043E\u043B\u0430 3'."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_9__["default"],
    text: "\u041C\u0430\u0440\u0446\u0435\u0432\u0430 \u0416.\u041F., \u0441\u0442\u0430\u0440\u0448\u0438\u0439 \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447, \u0437\u0430\u0432\u0456\u0434\u0443\u044E\u0447\u0430 \u0444\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043D\u0438\u043C \u0432\u0456\u0434\u0434\u0456\u043B\u043E\u043C \u0420\u0456\u0432\u043D\u0435\u043D\u0441\u044C\u043A\u043E\u0457 \u0434\u0438\u0442\u044F\u0447\u043E\u0457 \u043C\u0443\u0437\u0438\u0447\u043D\u043E\u0457 \u0448\u043A\u043E\u043B\u0438 \u21161 \u0456\u043C\u0435\u043D\u0456 \u041C. \u041B\u0438\u0441\u0435\u043D\u043A\u0430."
  }), "'/>"));
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








const CommonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  background-image: url("${_1163023_png__WEBPACK_IMPORTED_MODULE_7__["default"]}");
`;
const MainSectionFlex = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const MainSection = () => {
  const cards = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.cards);
  const isDataInPlace = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.isDataInPlace);
  const cardCount = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.cardCount);
  const sectionsForFilter = [`Номінація "Фортепіано соло"`, `Номінація "Фортепіанний ансамбль"`, `Номінація "Концертмейстер"`, `Усі відео`, `Про конкурс`];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommonWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegularHeader__WEBPACK_IMPORTED_MODULE_5__["RegularHeader"], {
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





const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  margin-top: 14px;
  font-size: 25px;
  width: 15%;
  border: solid white 2px;
  color: white;
  background-color: black;
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
    value: "",
    onClick: handler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["AiOutlineFileSearch"], null))), error !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null), error, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null)) : null, props.cardCount === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Warn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null), "\u0432\u0456\u0434\u0435\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0456", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null)) : null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzExNjMwMjMucG5nIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZm9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVndWxhckhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzdWx0c0ZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0IbQstCw0L3QvtCy0LAg0Jsu0IYucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CS0LjRiNC90LXQstGB0YzQutCwLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0JfQsNGF0L7QtNGP0LrRltC9LTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9Ca0YPQt9C90ZTRhtC+0LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QnNCw0YDRhtC10LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QntGB0YLQsNC/0YfRg9C6INCcLiDQnC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0KDQsNC50YIg0IYu0KEucG5nIiwid2VicGFjazovLy8uL3NyYy9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9DYXJkU3RvcmUuanN4Il0sIm5hbWVzIjpbIkFwcCIsImNhcmRTdG9yZSIsIkZpbG1XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiRmlsbUluZm8iLCJJZnJhbWVCb3giLCJpZnJhbWUiLCJwcm9wcyIsIndpZHRoIiwiQ2FyZCIsImhlaWdodCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJjYWxjdWxhdGVkV2lkdGgiLCJzZXRDYWxjdWxhdGVkV2lkdGgiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm5hbWUiLCJjb21wb3NpdGlvbiIsInZpZGVvVXJsIiwiV3JhcHBlciIsImxvZ28iLCJQZXJzb25JbmZvU2VjdGlvbiIsIlBlcnNvbiIsIkNvbnRhaW5lciIsIlRleHRTZWN0aW9uIiwiSW1hZ2UiLCJpbWciLCJpbWdVcmwiLCJ0ZXh0IiwiRGl2IiwiQSIsImEiLCJQIiwiSW5mb1BhZ2UiLCJwZXJzb24yIiwicGVyc29uMSIsInBlcnNvbjQiLCJwZXJzb241IiwicGVyc29uNyIsInBlcnNvbjgiLCJwZXJzb24zIiwicGVyc29uNiIsIkNvbW1vbldyYXBwZXIiLCJNYWluU2VjdGlvbkZsZXgiLCJNYWluU2VjdGlvbiIsImNhcmRzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImlzRGF0YUluUGxhY2UiLCJjYXJkQ291bnQiLCJzZWN0aW9uc0ZvckZpbHRlciIsIm1hcCIsImNhcmQiLCJpZCIsIiRvaWQiLCJCdXR0b24iLCJidXR0b24iLCJJbnB1dCIsImlucHV0IiwiaW5wdXRDb2xvciIsIklucHV0U3R5bGUiLCJJbnB1dFdyYXBlciIsIlN0eWxlZFNwYW4iLCJzcGFuIiwiRXJyb3IiLCJXYXJuIiwiUmVndWxhckhlYWRlciIsInNlYXJjaEZpZWxkIiwidXNlUmVmIiwiZXJyb3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaGFuZGxlciIsInN0ciIsIlN0cmluZyIsImN1cnJlbnQiLCJ2YWx1ZSIsImxlbmd0aCIsImluY2x1ZGVzIiwidHlwZSIsIm1zZyIsInF1ZXJ5IiwiaGFuZGxlS2V5UHJlc3MiLCJldmVudCIsImtleSIsIkZpbHRlckNvbnRhaW5lciIsIkZpbHRlclNlY3Rpb24iLCJEaXZUaGluTGluZSIsIlN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyIiwiZ3Jvd18wIiwia2V5ZnJhbWVzIiwibGVmdCIsImdyb3dfMSIsIlRoaW5MaW5lSW5uZXJEaXYiLCJhbmltYXRpb24iLCJSZXN1bHRzRmlsdGVyIiwic2VjdGlvbnMiLCJyZWRMaW5lV2lkdGgiLCJzZXRSZWRMaW5lV2lkdGgiLCJyZWRMaW5lTGVmdCIsInNldFJlZExpbmVMZWZ0Iiwic2V0QW5pbWF0aW9uIiwibWFya2VkU2VjdGlvblJlZiIsInJlUmVuZGVyUmVkTGluIiwidGFyZ2V0IiwiY3VycmVudFNlY3Rpb25XaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImN1cnJlbnRTZWN0aW9uTGVmdCIsImNvdW50ZXIiLCJvbkZpbHRlclNlY3Rpb25DbGljayIsInNlbGVjdGVkU2VjdGlvbiIsInNlbGVjdGVkU2VjdGlvblN0cmluZyIsInNlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwicmVuZGVySW5mb1BhZ2UiLCJyZW5kZXJlZFNlY3Rpb25zIiwiZSIsImdldFdpbmRvd0RpbWVuc2lvbnMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aW5kb3ciLCJ3aW5kb3dEaW1lbnNpb25zIiwic2V0V2luZG93RGltZW5zaW9ucyIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ3JvdXAxIiwiZ3JvdXAyIiwiZ3JvdXAzIiwibXlDYXJkcyIsImZpbG1SZWR1Y2VyIiwiYWN0aW9uIiwibmV3Q2FyZHMiLCJmaWx0ZXIiLCJncm91cCIsInNsaWNlIiwibmV3Q2FyZHMxIiwibmV3Q2FyZHMyIiwicSIsInRvTG93ZXJDYXNlIiwibmV3Q2FyZHMzIiwiY2FyZE5hbWUiLCJib29sIiwic3RhcnRzV2l0aCIsImNyZWF0ZVN0b3JlIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtE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Q0FBQ3hEO0FBRlgsT0FBUDs7QUFJSjtBQUNJLGFBQU87QUFDSG5DLGFBQUssRUFBRXlGLE9BREo7QUFFSHRGLHFCQUFhLEVBQUUsSUFGWjtBQUdIQyxpQkFBUyxFQUFFcUYsT0FBTyxDQUFDekQsTUFIaEI7QUFJSFIsYUFBSyxFQUFFO0FBSkosT0FBUDtBQXBFUjtBQTJFSDs7QUFFTSxNQUFNckUsU0FBUyxHQUFHcUoseURBQVcsQ0FBQ2QsV0FBRCxDQUE3QjtBQUVQdkksU0FBUyxDQUFDc0osU0FBVixDQUFvQixNQUNoQnJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9EQUFvRGxILFNBQVMsQ0FBQ3VKLFFBQVYsR0FBcUJ0RyxTQUFyRixDQURKLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanN4XCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzExNjMwMjMucG5nXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtNYWluU2VjdGlvbn0gZnJvbSAnLi9jb21wb25lbnRzL01haW5TZWN0aW9uJztcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7Y2FyZFN0b3JlfSBmcm9tIFwiLi9zdG9yZS9DYXJkU3RvcmVcIjtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e2NhcmRTdG9yZX0+XHJcbiAgICAgICAgICAgICAgICA8TWFpblNlY3Rpb24vPlxyXG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7QnNGaWxsUGVyc29uRmlsbCwgRmFCb29rT3Blbn0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xyXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vaG9va3MvVXNlV2luZG93RGltZW5zaW9uc1wiO1xyXG5cclxuY29uc3QgRmlsbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB0cmFuc2l0aW9uOiBhbGw7XHJcbmA7XHJcblxyXG5jb25zdCBGaWxtSW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IElmcmFtZUJveCA9IHN0eWxlZC5pZnJhbWVgXHJcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xyXG4gIGhlaWdodDogNDgwcHg7XHJcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtoZWlnaHQsIHdpZHRofSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcclxuICAgIGNvbnN0IFtjYWxjdWxhdGVkV2lkdGgsIHNldENhbGN1bGF0ZWRXaWR0aF0gPSB1c2VTdGF0ZSg2NDApO1xyXG5cclxuICAgIC8vaGFuZGxpbmcgcmVzaXplXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aWR0aDwxMDAwKSBzZXRDYWxjdWxhdGVkV2lkdGgod2lkdGggLSA1MCk7XHJcbiAgICAgICAgZWxzZSBzZXRDYWxjdWxhdGVkV2lkdGgoNjQwKTtcclxuICAgIH0sIFt3aWR0aF0pO1xyXG5cclxuICAgIGNvbnN0IFtuYW1lLF0gPSB1c2VTdGF0ZShwcm9wcy5uYW1lKTtcclxuICAgIGNvbnN0IFtjb21wb3NpdGlvbixdID0gdXNlU3RhdGUocHJvcHMuY29tcG9zaXRpb24pO1xyXG4gICAgY29uc3QgW3ZpZGVvVXJsLF0gPSB1c2VTdGF0ZShwcm9wcy52aWRlb1VybCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmlsbVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxJZnJhbWVCb3ggc3JjPXt2aWRlb1VybH0gd2lkdGg9e2NhbGN1bGF0ZWRXaWR0aH0vPlxyXG4gICAgICAgICAgICA8RmlsbUluZm8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj48QnNGaWxsUGVyc29uRmlsbC8+IDxiPntuYW1lfTwvYj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PEZhQm9va09wZW4vPiB7Y29tcG9zaXRpb259PC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgIDwvRmlsbUluZm8+XHJcbiAgICAgICAgPC9GaWxtV3JhcHBlcj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0JpTGlua0V4dGVybmFsfSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8xMTYzMDIzLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uMSBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/Ql9Cw0LrQvtC/0LXRhtGMLTEucG5nXCI7XHJcbmltcG9ydCBwZXJzb24yIGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9Ca0YPQt9C90ZTRhtC+0LLQsC0xLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uMyBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/QhtCy0LDQvdC+0LLQsCDQmy7Qhi5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjQgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0KDQsNC50YIg0IYu0KEucG5nXCI7XHJcbmltcG9ydCBwZXJzb241IGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9Ce0YHRgtCw0L/Rh9GD0Log0JwuINCcLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uNiBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/QnNCw0YDRhtC10LLQsC0xLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uNyBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/Ql9Cw0YXQvtC00Y/QutGW0L0tMS5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjggZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0JLQuNGI0L3QtdCy0YHRjNC60LAtMS5wbmdcIjtcclxuXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke2xvZ299XCIpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFBlcnNvbkluZm9TZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5cclxuY29uc3QgUGVyc29uID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IFRleHRTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDg1MDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xyXG4gICAgYDtcclxuXHJcblxyXG4gICAgcmV0dXJuICg8Q29udGFpbmVyPjxJbWFnZSBzcmM9e3Byb3BzLmltZ1VybH0vPjxUZXh0U2VjdGlvbj57cHJvcHMudGV4dH08L1RleHRTZWN0aW9uPjwvQ29udGFpbmVyPik7XHJcblxyXG59XHJcblxyXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuYDtcclxuXHJcbmNvbnN0IEEgPSBzdHlsZWQuYWBcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogZGFya3JlZDtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IGRhcmtyZWQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUCA9IHN0eWxlZC5kaXZgXHJcbiAgbGVmdDogNDAwcHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvUGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPFdyYXBwZXI+PERpdj5cclxuXHJcbiAgICAgICAgPEEgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWthN0d1VmMwbWhIelI1anExcWhUQ0hubE5hMEhjWG1CL3ZpZXc/dXNwPXNoYXJpbmdcIj4gPEJpTGlua0V4dGVybmFsLz7Qn9C+0LvQvtC20LXQvdC90Y88L0E+XHJcbiAgICAgICAgPEEgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXFkeUwwbVhhZm93STg4OHNQSkx5TTd5dWhZSk5SNzBiL3ZpZXc/dXNwPXNoYXJpbmdcIj4gPEJpTGlua0V4dGVybmFsLz5cclxuICAgICAgICAgICAg0J7RgNCz0LDQvdGW0LfQsNGG0ZbQudC90LjQuSDQutC+0LzRltGC0LXRgiDQutC+0L3QutGD0YDRgdGDIDwvQT5cclxuICAgICAgICA8QSBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNnN6MHV1NTY0Qmw3bDlZLWJxTU9fLWdMUHFUdURCWUMvdmlldz91c3A9c2hhcmluZ1wiPiA8QmlMaW5rRXh0ZXJuYWwvPtCQ0YTRltGI0LA8L0E+XHJcbiAgICA8L0Rpdj5cclxuICAgICAgICA8UD7QodC60LvQsNC0INC20YPRgNGWOjwvUD5cclxuICAgICAgICA8UGVyc29uSW5mb1NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb24yfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e2DQmtGD0LfQvdGU0YbQvtCy0LAg0J4u0J4uLSDQs9C+0LvQvtCy0LAg0LbRg9GA0ZYsINC00L7QutGC0L7RgCDRhNGW0LvQvtGB0L7RhNGW0ZcsINC60LDQvdC00LjQtNCw0YIg0L/QtdC00LDQs9C+0LPRltGH0L3QuNGFINC90LDRg9C6LCDQv9GA0L7RhNC10YHQvtGAINC60LDRhNC10LTRgNC4ICDQvNGD0LfQuNGH0L3Qvi0g0ZbQvdGB0YLRgNGD0LzQtdC90YLQsNC70YzQvdC+0LPQviDQstC40LrQvtC90LDQstGB0YLQstCwINCl0LDRgNC60ZbQstGB0YzQutC+0LPQviDQndCw0YbRltC+0L3QsNC70YzQvdC+0LPQviDQv9C10LTQsNCz0L7Qs9GW0YfQvdC+0LPQviDRg9C90ZbQstC10YDRgdC40YLQtdGC0YMg0ZbQvNC10L3RliDQky7QodC60L7QstC+0YDQvtC00LgsINC30LDRgdC70YPQttC10L3QuNC5INC00ZbRj9GHINC80LjRgdGC0LXRhtGC0LIg0KPQutGA0LDRl9C90LgsICBcItCS0ZbQtNC80ZbQvdC90LjQuiDQvtGB0LLRltGC0Lgg0KPQutGA0LDRl9C90LhcIiwg0LLRltC00LfQvdCw0YfQtdC90LAg0L7RgNC00LXQvdC+0Lwg0JzRltC90ZbRgdGC0LXRgNGB0YLQstCwINC60YPQu9GM0YLRg9GA0LggINCj0LrRgNCw0ZfQvdC4IFwi0JfQsCDQtNC+0YHRj9Cz0L3QtdC90L3RjyDQsiDRgNC+0LfQstC40YLQutGDICDQutGD0LvRjNGC0YPRgNC4ICDRliDQvNC40YHRgtC10YbRgtCyIFwiLCDRgdC10LrRgNC10YLQsNGAINCd0LDRhtGW0L7QvdCw0LvRjNC90L7RlyDQstGB0LXRg9C60YDQsNGX0L3RgdGM0LrQvtGXINC80YPQt9C40YfQvdC+0Zcg0YHQv9GW0LvQutC4LCDQs9C+0LvQvtCy0LAg0JDRgdC+0YbRltCw0YbRltGXINC/0ZbQsNC90ZbRgdGC0ZbQsiAg0J3QsNGG0ZbQvtC90LDQu9GM0L3QvtGXICDQstGB0LXRg9C60YDQsNGX0L3RgdGM0LrQvtGXINC80YPQt9C40YfQvdC+0Zcg0YHQv9GW0LvQutC4LCAg0L/RgNC10LfQuNC00LXQvdGCINCQ0YHQvtGG0ZbQsNGG0ZbRlyDQv9GW0LDQvdGW0YHRgtGW0LIt0L/QtdC00LDQs9C+0LPRltCyINCj0LrRgNCw0ZfQvdC4KFwiRVBUQVwiIFVrcmFpbmUpLCDQktGW0YbQtS0g0L/RgNC10LfQuNC00LXQvdGCICDQkNGB0L7RhtGW0LDRhtGW0Zcg0L/RltCw0L3RltGB0YLRltCyLdC/0LXQtNCw0LPQvtCz0ZbQsiDQhNCy0YDQvtC/0LggXCJFUFRBXCIgTG9uZG9uKS5gfS8+XHJcblxyXG4gICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uMX1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwi0JfQsNC60L7Qv9C10YbRjCDQmy7QoS4tINCz0L7Qu9C+0LLQsCDQttGD0YDRliwg0LfQsNGB0LvRg9C20LXQvdC40LkgINC00ZbRj9GHINC80LjRgdGC0LXRhtGC0LIg0KPQutGA0LDRl9C90LgsINCy0LjQutC70LDQtNCw0Yct0LzQtdGC0L7QtNC40YHRgiDQm9GM0LLRltCy0YHRjNC60L7Qs9C+INC00LXRgNC20LDQstC90L7Qs9C+INC80YPQt9C40YfQvdC+0LPQviDQu9GW0YbQtdGOINGW0LzQtdC90ZYg0KEuINCa0YDRg9GI0LXQu9GM0L3QuNGG0YzQutC+0ZcsINC/0L7Rh9C10YHQvdC40Lkg0LDQvNCx0LDRgdCw0LTQvtGAINC80YPQt9C40YfQvdC+0ZcgINC60YPQu9GM0YLRg9GA0LggINCf0L7Qu9GM0YnRllwiLz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb240fVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCLQoNCw0LnRgiDQhi7QoS4sINC60LDQvdC00LjQtNCw0YIg0L/QtdC00LDQs9C+0LPRltGH0L3QuNGFINC90LDRg9C6LCAg0L3QsNGD0LrQvtCy0LjQuSDRgdC/0ZbQstGA0L7QsdGW0YLQvdC40Log0LvQsNCx0L7RgNCw0YLQvtGA0ZbRlyDQtdGB0YLQtdGC0LjRh9C90L7Qs9C+INCy0LjRhdC+0LLQsNC90L3RjyDRgtCwINC80LjRgdGC0LXRhtGM0LrQvtGXICDQvtGB0LLRltGC0LggINCG0L3RgdGC0LjRgtGD0YLRgyAg0L/RgNC+0LHQu9C10Lwg0LLQuNGF0L7QstCw0L3QvdGPICDQndCw0YbRltC+0L3QsNC70YzQvdC+0ZcgINCw0LrQsNC00LXQvNGW0ZcgINC/0LXQtNCw0LPQvtCz0ZbRh9C90LjRhSAg0L3QsNGD0Log0KPQutGA0LDRl9C90LguXCIvPlxyXG5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjV9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cItCe0YHRgtCw0L/Rh9GD0Log0JwuINCcLiwg0LTQvtGG0LXQvdGCINC60LDRhNC10LTRgNC4ICDQs9GA0Lgg0L3QsCAg0LzRg9C30LjRh9C90LjRhSDRltC90YHRgtGA0YPQvNC10L3RgtCw0YUg0IbQvdGB0YLQuNGC0YPRgtGDICDQvNC40YHRgtC10YbRgtCyICDQoNCU0JPQoy5cIi8+XHJcblxyXG4gICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uN30gdGV4dD1cItCX0LDRhdC+0LTRj9C60ZbQvSDQni7Qki4sINC00L7RhtC10L3RgiDQutCw0YTQtdC00YDQuCDQtdGB0YLRgNCw0LTQvdC+0Zcg0LzRg9C30LjQutC4INCG0L3RgdGC0LjRgtGD0YLRgyAg0LzQuNGB0YLQtdGG0YLQsiAg0KDQlNCT0KMuXCIvPlxyXG5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjh9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD0n0JLQuNGI0L3QtdCy0YHRjNC60LAg0IYu0J8uLCDQstC40LrQu9Cw0LTQsNGHINCy0LjRidC+0Zcg0LrQsNGC0LXQs9C+0YDRltGXLCDQs9C+0LvQvtCy0LAg0YbQuNC60LvQvtCy0L7RlyDQutC+0LzRltGB0ZbRlyBcItCk0L7RgNGC0LXQv9GW0LDQvdC+XCIg0KDRltCy0L3QtdC90YHRjNC60L7Qs9C+INC80YPQt9C40YfQvdC+0LPQviDRhNCw0YXQvtCy0L7Qs9C+INC60L7Qu9C10LTQttGDINCg0JTQk9CjLicvPlxyXG5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjN9IHRleHQ9XCLQhtCy0LDQvdC+0LLQsCDQmy7Qhi4sINCy0LjQutC70LDQtNCw0Ycg0L/QtdGA0YjQvtGXINC60LDRgtC10LPQvtGA0ZbRlyDQmtCXICfQm9GD0YbRjNC60LAg0LzRg9C30LjRh9C90LAgINGI0LrQvtC70LAgMycuXCIvPlxyXG5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjZ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cItCc0LDRgNGG0LXQstCwINCWLtCfLiwg0YHRgtCw0YDRiNC40Lkg0LLQuNC60LvQsNC00LDRhywg0LfQsNCy0ZbQtNGD0Y7Rh9CwINGE0L7RgNGC0LXQv9GW0LDQvdC90LjQvCDQstGW0LTQtNGW0LvQvtC8INCg0ZbQstC90LXQvdGB0YzQutC+0Zcg0LTQuNGC0Y/Rh9C+0Zcg0LzRg9C30LjRh9C90L7RlyDRiNC60L7Qu9C4IOKEljEg0ZbQvNC10L3RliDQnC4g0JvQuNGB0LXQvdC60LAuXCIvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICcvPlxyXG4gICAgICAgIDwvUGVyc29uSW5mb1NlY3Rpb24+XHJcbiAgICA8L1dyYXBwZXI+KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7UmVzdWx0c0ZpbHRlcn0gZnJvbSBcIi4vUmVzdWx0c0ZpbHRlclwiO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7UmVndWxhckhlYWRlcn0gZnJvbSBcIi4vUmVndWxhckhlYWRlclwiO1xyXG5pbXBvcnQge0luZm9QYWdlfSBmcm9tIFwiLi9JbmZvUGFnZVwiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vMTE2MzAyMy5wbmdcIjtcclxuXHJcbmNvbnN0IENvbW1vbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7bG9nb31cIik7XHJcbmA7XHJcblxyXG5jb25zdCBNYWluU2VjdGlvbkZsZXggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpblNlY3Rpb24gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2FyZHMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXJkcyk7XHJcbiAgICBjb25zdCBpc0RhdGFJblBsYWNlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuaXNEYXRhSW5QbGFjZSk7XHJcbiAgICBjb25zdCBjYXJkQ291bnQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXJkQ291bnQpO1xyXG4gICAgY29uc3Qgc2VjdGlvbnNGb3JGaWx0ZXIgPSBbYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XCJgLCBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcImAsIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXCJgLGDQo9GB0ZYg0LLRltC00LXQvmAsYNCf0YDQviDQutC+0L3QutGD0YDRgWBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbW1vbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxSZWd1bGFySGVhZGVyIGNhcmRDb3VudD17Y2FyZENvdW50fS8+XHJcbiAgICAgICAgICAgIDxSZXN1bHRzRmlsdGVyIHNlY3Rpb25zPXtzZWN0aW9uc0ZvckZpbHRlcn0vPlxyXG4gICAgICAgICAgICB7aXNEYXRhSW5QbGFjZSA/IChcclxuICAgICAgICAgICAgICAgIDxNYWluU2VjdGlvbkZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhcmRzLm1hcChjYXJkID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2NhcmQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvVXJsPXtjYXJkLnZpZGVvVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9zaXRpb249e2NhcmQuY29tcG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NhcmQuaWQuJG9pZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfTwvTWFpblNlY3Rpb25GbGV4PikgOiAoPEluZm9QYWdlLz4pfTwvQ29tbW9uV3JhcHBlcj4pO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0FpT3V0bGluZUZpbGVTZWFyY2gsIEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlfSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgd2lkdGg6IDE1JTtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlIDJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogZGFya3JlZDtcclxuICB9YDtcclxuXHJcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmlucHV0Q29sb3IgfHwgXCJwYWxldmlvbGV0cmVkXCJ9O1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IElucHV0U3R5bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0V3JhcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogNjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogd2hpdGU7XHJcbmA7XHJcblxyXG5jb25zdCBFcnJvciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7YFxyXG5cclxuY29uc3QgV2FybiA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6IHllbGxvdztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7YFxyXG5cclxuZXhwb3J0IGNvbnN0IFJlZ3VsYXJIZWFkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hGaWVsZCA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5lcnJvcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcclxuICAgICAgICBsZXQgc3RyID0gU3RyaW5nKHNlYXJjaEZpZWxkLmN1cnJlbnQudmFsdWUpO1xyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoIDwgMyB8fCBzdHIuaW5jbHVkZXMoXCIgXCIpKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIkVSUk9SXCIsIG1zZzogXCLQkdGD0LTQsdGMINC70LDRgdC60LAg0LLQstC10LTRltGC0Ywg0LHRltC70YzRiNC1IDMg0YHQuNC80LLQvtC70ZbQsiDRliDQvdC1INCy0LjQutC+0YDQuNGB0YLQvtCy0YPQudGC0LUg0L/RgNC+0LHRltC7XCJ9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJTRUFSQ0hcIiwgcXVlcnk6IHN0cn0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgaGFuZGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxJbnB1dFdyYXBlcj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuPjxBaU91dGxpbmVGaWxlU2VhcmNoLz7Qn9C+0YjRg9C6INCy0ZbQtNC10L4g0L/QviDQv9GA0ZbQt9Cy0LjRidGDINGD0YfQsNGB0L3QuNC60LAgPC9TdHlsZWRTcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc30gcmVmPXtzZWFyY2hGaWVsZH0gdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00ZbRgtGMINC/0YDRltC30LLQuNGJ0LUg0YPRh9Cw0YHQvdC40LrQsC4uLlwiIGlucHV0Q29sb3I9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCJcIiBvbkNsaWNrPXtoYW5kbGVyfT48QWlPdXRsaW5lRmlsZVNlYXJjaC8+PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvSW5wdXRXcmFwZXI+XHJcbiAgICAgICAgICAgIHtlcnJvciAhPT0gXCJcIiA/IDxFcnJvcj48SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPntlcnJvcn08SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPjwvRXJyb3I+IDogbnVsbH1cclxuICAgICAgICAgICAge3Byb3BzLmNhcmRDb3VudCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICA8V2Fybj48SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPtCy0ZbQtNC10L4g0L3QtSDQt9C90LDQudC00LXQvdGWPEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz48L1dhcm4+IDogbnVsbH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge0ZhRm9sZGVyLCBGYVVuaXZlcnNpdHl9IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuXHJcbmNvbnN0IEZpbHRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO2A7XHJcblxyXG5jb25zdCBGaWx0ZXJTZWN0aW9uID0gc3R5bGVkKEZpbHRlckNvbnRhaW5lcilgXHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERpdlRoaW5MaW5lID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IGdyYXkgc29saWQgMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgaGVpZ2h0OiAyJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgZ3Jvd18wID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcclxuICB9XHJcbiAgMCUge1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdyb3dfMSA9IGtleWZyYW1lc2BcclxuICAwJSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XHJcbiAgfVxyXG4gIDAlIHtcclxuICAgIGxlZnQ6IDFweDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy5sZWZ0fTtcclxuICB9XHJcbmA7XHJcblxyXG5cclxuY29uc3QgVGhpbkxpbmVJbm5lckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xyXG4gIGxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogcmVkIHNvbGlkIDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgaGVpZ2h0OiAxJTtcclxuICBhbmltYXRpb246ICR7cHJvcHMgPT4gKHByb3BzLmFuaW1hdGlvbiAlIDIgPT09IDApID8gZ3Jvd18wIDogZ3Jvd18xfSAwLjVzIGxpbmVhcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXN1bHRzRmlsdGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3NlY3Rpb25zLF0gPSB1c2VTdGF0ZShwcm9wcy5zZWN0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgW3JlZExpbmVXaWR0aCwgc2V0UmVkTGluZVdpZHRoXSA9IHVzZVN0YXRlKFwiMTBweFwiKTtcclxuICAgIGNvbnN0IFtyZWRMaW5lTGVmdCwgc2V0UmVkTGluZUxlZnRdID0gdXNlU3RhdGUoXCIxMHB4XCIpO1xyXG4gICAgY29uc3QgW2FuaW1hdGlvbiwgc2V0QW5pbWF0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qge2hlaWdodCwgd2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xyXG4gICAgY29uc3QgbWFya2VkU2VjdGlvblJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIC8vaGFuZGxpbmcgcmVkTGluZSBvbiByZXNpemVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcmVSZW5kZXJSZWRMaW4oe3RhcmdldDptYXJrZWRTZWN0aW9uUmVmLmN1cnJlbnR9KVxyXG4gICAgfSwgW3dpZHRoXSk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlUmVuZGVyUmVkTGluKGV2ZW50KSB7XHJcbiAgICAgICAgbWFya2VkU2VjdGlvblJlZi5jdXJyZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGxldCBjdXJyZW50U2VjdGlvbldpZHRoID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgIGxldCBjdXJyZW50U2VjdGlvbkxlZnQgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIDEwO1xyXG4gICAgICAgIHNldFJlZExpbmVXaWR0aChjdXJyZW50U2VjdGlvbldpZHRoICsgXCJweFwiKTtcclxuICAgICAgICBzZXRSZWRMaW5lTGVmdChjdXJyZW50U2VjdGlvbkxlZnQgKyBcInB4XCIpO1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gYW5pbWF0aW9uICsgMTtcclxuICAgICAgICBzZXRBbmltYXRpb24oY291bnRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25GaWx0ZXJTZWN0aW9uQ2xpY2soc2VsZWN0ZWRTZWN0aW9uLCBldmVudCkge1xyXG4gICAgICAgIHJlUmVuZGVyUmVkTGluKGV2ZW50KTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRTZWN0aW9uU3RyaW5nID0gc2VsZWN0ZWRTZWN0aW9uLnNlY3Rpb247XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRTZWN0aW9uU3RyaW5nKTtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkU2VjdGlvblN0cmluZykge1xyXG4gICAgICAgICAgICBjYXNlIGDQo9GB0ZYg0LLRltC00LXQvmA6XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJBTExcIn0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XCJgOlxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZ3JvdXAtMVwifSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcImA6XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJncm91cC0yXCJ9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXCJgOlxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZ3JvdXAtM1wifSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVySW5mb1BhZ2UoZXZlbnQpIHtcclxuICAgICAgICByZVJlbmRlclJlZExpbihldmVudCk7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiSU5GT19QQUdFXCJ9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVuZGVyZWRTZWN0aW9ucyA9IHNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxyXG4gICAgICAgIHNlY3Rpb24gPT09IFwi0J/RgNC+INC60L7QvdC60YPRgNGBXCIgP1xyXG4gICAgICAgICAgICA8RmlsdGVyU2VjdGlvbiAgb25DbGljaz17cmVuZGVySW5mb1BhZ2V9IGtleT17c2VjdGlvbn0+IDxGYVVuaXZlcnNpdHkvPntzZWN0aW9ufSA8L0ZpbHRlclNlY3Rpb24+XHJcbiAgICAgICAgICAgIDogPEZpbHRlclNlY3Rpb24gIHJlZj17bWFya2VkU2VjdGlvblJlZn0gb25DbGljaz17KGUpID0+IG9uRmlsdGVyU2VjdGlvbkNsaWNrKHtzZWN0aW9ufSwgZSl9IGtleT17c2VjdGlvbn0+IDxGYUZvbGRlci8+e3NlY3Rpb259PC9GaWx0ZXJTZWN0aW9uPlxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyQ29udGFpbmVyIGNoaWxkcmVuPXtyZW5kZXJlZFNlY3Rpb25zfS8+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxEaXZUaGluTGluZT48VGhpbkxpbmVJbm5lckRpdiB3aWR0aD17cmVkTGluZVdpZHRofSBsZWZ0PXtyZWRMaW5lTGVmdH0gYW5pbWF0aW9uPXthbmltYXRpb259Lz48L0RpdlRoaW5MaW5lPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/QhtCy0LDQvdC+0LLQsCDQmy7Qhi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9CS0LjRiNC90LXQstGB0YzQutCwLTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/Ql9Cw0LrQvtC/0LXRhtGMLTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/Ql9Cw0YXQvtC00Y/QutGW0L0tMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9Ca0YPQt9C90ZTRhtC+0LLQsC0xLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0JzQsNGA0YbQtdCy0LAtMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9Ce0YHRgtCw0L/Rh9GD0Log0JwuINCcLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0KDQsNC50YIg0IYu0KEucG5nXCI7IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIGdldFdpbmRvd0RpbWVuc2lvbnMoKSB7XHJcbiAgICBjb25zdCB7IGlubmVyV2lkdGg6IHdpZHRoLCBpbm5lckhlaWdodDogaGVpZ2h0IH0gPSB3aW5kb3c7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2luZG93RGltZW5zaW9ucygpIHtcclxuICAgIGNvbnN0IFt3aW5kb3dEaW1lbnNpb25zLCBzZXRXaW5kb3dEaW1lbnNpb25zXSA9IHVzZVN0YXRlKGdldFdpbmRvd0RpbWVuc2lvbnMoKSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgICAgICAgIHNldFdpbmRvd0RpbWVuc2lvbnMoZ2V0V2luZG93RGltZW5zaW9ucygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gd2luZG93RGltZW5zaW9ucztcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldCcpKTtcclxuIiwiaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnXHJcblxyXG5jb25zdCBncm91cDEgPSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImA7XHJcbmNvbnN0IGdyb3VwMiA9IGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFwiYDtcclxuY29uc3QgZ3JvdXAzID0gYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcImA7XHJcblxyXG5jb25zdCBteUNhcmRzID0gW3tcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNhNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JDQs9GA0LDRgtGW0L3QsCDQodGC0LDQvdGW0YHQu9Cw0LIsIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jwu0JPQu9GW0L3QutCwLiDQn9C+0YfRg9GC0YLRjywgMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQsNC90L7QulwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTk0eXRfc0tDNUV0M3I0OXpDRVJzZEJaZURRZ1ktR19pL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYTZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0LDQu9GW0LPRg9GA0LAg0JLQsNGA0LLQsNGA0LAsIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jwu0JvQtdC80ZbRiNC60L4uINCa0L7Qu9C+0LzQuNC50LrQsFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWM2aFRJcURsLWNBRjNCcjNsMWMydXdxRlpzTFZTUFR2L3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYTdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0LDQu9GW0LPRg9GA0LAg0JLQsNGA0LLQsNGA0LAsIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIu0JzQsNC60YHRltC80L7Qsi4gJyfQl9Cw0LTQt9C10YDQutCw0LvQu9GPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE1WXI2UXhtNHJzdERPTVUydkduNUp3cTVWZlVwTjJTRC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2E4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktCw0YHQuNC70LXQstGB0YzQutCwINCl0YDQuNGB0YLQuNC90LAsNyDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JPRltC70LvQvtC6Licn0KHQsNC80L7RgtC90Y8g0LHQsNC70YzQvdCwINC30LDQu9CwJycuIDIp0KIu0KDQvtGB0YLQuNC80LDRiNC10L3QutC+Licn0KfQsNC60LvRg9C9JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHdHhVS3VVa0xLQW5oNW9DZjlGbHVpVVRRb0pDVGJNTS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2E5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktC+0LvQuNC90LXRhtGMINCe0LvQtdC60YHQsNC90LTRgCwgOCDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCa0L7Qu9C+0LTRg9CxLiDQkNGA0LrQsNC9LiAyKdCkLtCg0LjQsdGW0YbRjNC60LjQuS4gJyfQoNC10LPQvtGC0YPRiNC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV9DT1BlUHp3ZGdTN1VfT2pFeE9wdjhub3oxbWlUZThjL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYWFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0LDQu9Cw0LPQsNC9INCa0LDRgtC10YDQuNC90LAsIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQtdC80LAg0Lcg0LLQsNGA0ZbQsNGG0ZbRj9C80Lg7IDIp0JMu0JrRg9GI0L3QsNGA0LXQvdC60L4uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9CbFVmWFdxbGg1dURzREZDWGJIZ2M3WEdpQUpHYkxIL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYWJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0LXRgNCw0YHQuNC80LXQvdC60L4g0J7Qu9C10LrRgdCw0L3QtNGA0LAsOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCSLtCg0LDRh9C60L7QstGB0YzQutC40LkuINCi0L7QutCw0YLQuNC90LA7MinQki7QmtC+0YHQtdC90LrQvi4gJyfQnNC10LvQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xREduc1NRR2xCdThYX29EUHQzWUt0S21pVnpWLUczcUovcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNhY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQvtC70L7QtNC+0LLRgdGM0LrQsCDQodC+0YTRltGPLDcg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCGLtCS0LDQvdGF0LDQu9GMLtCg0L7QvdC00L47MinQnC7QlNGA0LXQvNC70Y7Qs9CwLicn0JLQtdGB0LXQu9CwINCz0YDQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMkt1dGotb3dwc3I4aGVscm1fa0ZaaDF5UXdNakVDN0EvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNhZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQvtC70YPQsSDQkNC70ZbQvdCwLCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwg0IbRhy4sIDIp0JEu0JTQstCw0YDRltC+0L3QsNGBLiDQn9GA0LXQu9GO0LTRltGPXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdXdoS01LZEpaSWhSem5NM1ZVNW1UcUV1S3h4VGVzYU8vcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNhZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPRgNC40LPQvtGAJ9GU0LLQsCDQmtCw0YLQtdGA0LjQvdCwLCA4INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQoNCw0L3QvtC6Jyc7MinQhi7QmtC+0YDQvtC70YzQutC+0LLQsC4nJ9CT0L7RgNC+0LHRh9C40LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFpTXY1THdZVjltMnd6LVNKTUdueGZVcUlSVDlNX0V3L3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYWZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0LDQvdGO0Log0ITQu9C40LfQsNCy0LXRgtCwLDcg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCb0Y7QsdCw0YDRgdGM0LrQuNC5Licn0KLQsNC90YbRjtCy0LDQu9GM0L3QsCcnOyAyKSDQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40Lku0JLQsNC70YzRgVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXZUa19tQUJfRUNoOVZEd1I2RU1hc1kxeTIxS1dyU1lIL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYjBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0YDQvtCz0LDQvSAg0JzRltC70LDQvdCwLCA1INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QnNCw0LnRlNGALiAnJ9CS0LXRgdC10LvQsCDQs9GA0LAnJzsgMinQlC7QkdCw0YjRgtC10LnQvS4gJyfQktCw0LvRjNGBINGB0LvQvtC90LXQvdGP0YInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVhiMGdJZ0Z5Q25MdUN4am41a2xhZVEwTGw5RHNrUlB6L3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYjFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0YDQvtC30LTQvtCy0LAg0ITQu9C40LfQsNCy0LXRgtCwLCA5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLtCc0LXQvdGD0LXRgi4gMinQky7QmtC70LDRgdGB0LXQvS4g0J/QvtC70YzQutCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcjVfMThwUjdCTHhEU0RFbk1EN3JITkdqUjl6aUVpR24vcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JfQsdGW0YAg0JzQsNGA0ZbRjyw4INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7Qk9C10LTRltC60LUuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCDQhiDRhy4sMinQoC7QqNGD0LzQsNC9Licn0J/QtdGA0YjQsCDQstGC0YDQsNGC0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV83cW4zZlR1dGRLR2NHZGJndjEzcktva0o4anhnazNhL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYjNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90YzQutGW0LIg0J7Qu9C10LrRgdCw0L3QtNGA0LAuIDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCU0ZbQsNCx0LXQu9C70ZYuINCh0LrQtdGA0YbQvjsgMinQni7Qk9C10LTRltC60LUuINCc0LDQu9C10L3RjNC60LAg0L8n0ZTRgdCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdlllVmtSYVYxbWIzM3VKMURHTXIyMHFvaWtGQ3I5QXkvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiNFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjtC6INCc0LDRgNGW0LDQvCwgOCDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QnNCw0LnQutCw0L/QsNGALiAnJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINGB0L7Qu9GMINC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyUmxMTUpqb1d3VFZ1cDdfdlZNRDREM25sMlktbHNwTy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2I1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JzQsNGA0ZbQsNC8LiA4INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCa0LjRgNC10LnQutC+LiAnJ9Ch0YLRgNC40LEt0YHQutC+0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUltcFBxOW5jYk1oNVQxU2NBSGZEbXo1N0JEbExaQ0YyL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYjZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0YHRg9C/0L7QstCwINCQ0LvRltGB0ZbRjywgOCDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCg0LXQudC90LXQutC1LiDQk9Cw0LLQvtGCLDsyKdCZLtChLtCR0LDRhS4g0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPINC00L4g0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBnOUNDSm9YUnplRzhDaUZoZ25FQnpUUUJMSVdEYW5BL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYjdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7QstCw0LvQtdC90LrQviDQktCw0YDQstCw0YDQsCw4INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7Qk9C10YLQsNC70L7QstCwLicn0KDQsNC90L7QuiDQsiDQu9GW0YHRlicnOzIp0JIu0J/QvtC00LLQsNC70LAuICcn0JrQsNC/0YDQuNC30YPQu9GPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTMzhfb0VDT0JvN0tHRFYxYXpKVXgzek9Zd2dRRVFJVi9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2I4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0YDQtdC90ZbQstGB0YzQutCwINCU0LDRgCfRjywgOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCgLtCS0LDQvdC00LDQuy4nJ9CS0L7QtNC+0LPRgNCw0LknJzsyKdCfLtCX0LDRhdCw0YDQvtCyLicn0JfQvdCw0LnQvtC80LjQuSDRgdC40LvRg9C10YInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlDQXpQQ2FXckFOX1NXemFKRmRFcHhQSU9Rdy1yZkxVL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYjlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7RgdGC0LXQvdC60L4g0K/RgNC+0YHQu9Cw0LLQsCwgNyDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QmtC+0YHQtdC90LrQvi4g0JzQtdC70L7QtNGW0Y9cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDZGRZY295Z1RjdG9hYkdRRjdwVDJwb1J2Q3VwVkdfYy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2JhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0YHRgtC10L3QutC+INCv0YDQvtGB0LvQsNCy0LAuIDcg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JnRlNC90YHQtdC9Licn0KfQsNGA0ZbQstC90LjQuSDRgtCw0L3QvtC6JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1QjI5YlRQRWlZZHVnSmZMT1psNFNRR3JGWTluUXByLS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2JiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9Cw0YLQutC+0LLRgdGM0LrQsCDQhNC70LjQt9Cw0LLQtdGC0LAsOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0L7RgdC10L3QutC+LiDQstCw0LvRjNGBOyAyKdCeLtCT0YDQtdGH0LDQvdGW0L3QvtCyLicn0JzRltC5INC60L7QvdC40LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZZQXctcTdmOEY5SkJQbWZuOHRFa3BKVDgxSjdFYWhBL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYmNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCb0ZbRiNC80LDQvSDQlNCw0YDQuNC90LAsOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0J/QvtC00LLQsNC70LAuJyfQnNCw0YDRiC3Qs9GA0L7RgtC10YHQuicnLiAyKdChLtCc0LDQudC60LDQv9Cw0YAu0JrQvtC70LjRgdC60L7QstCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTnNXejNUUjBTS2lUdGNOQ0FKZTA1OWJoaEZvbXRfTkUvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNCz0L7Qu9CwINCh0L7RhNGW0Y8sIDgg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQry7QkdC+0LHQsNC70ZbQui4nJ9Ch0LLRj9GC0LrQvtCy0LAg0L/QvtC70YzQutCwJyc7IDIp0IYu0JHQtdGA0LrQvtCy0LjRhy4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZ3VBeHM1Z193Ykd2X3R3cWl5cG8wZThGSE93dW0tSWgvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNC30YPRgNC10L3QutC+INCc0LDQudGPLCA4INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JwuINCR0L7QsdC10YAuICcn0JDQs9C10L3RgiDQpScnLCAyKdCGLtCG0L7RgNC00LDQvS4gJyfQn9C+0LvRjtCy0LDQvdC90Y8g0L3QsCDQvNC10YLQtdC70LjQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJZTFXQ1FwZ1B1TFlkS054Vkd1TGtlSVZuWUpOWko5VC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2JmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNCw0YDRh9C10L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLtC80LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjyDQtNC+INC80ZbQvdC+0YA7IDIp0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJ9CR0LDQsdCwINCv0LPQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWkpvNEdVTFo5c2ZjVXVBcEY1anlvSElVVl9JS0FWcmcvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNGA0YfRg9C6INCc0LDQutGB0LjQvCwgOCDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQpC4g0KjQv9GW0L3QtNC70LXRgC4g0KHQvtC90LDRgtC40L3QsCwg0YLQsi4xNTcg4oSWNFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXNDN01VamNrbnJuWlpaNWhmTUNYYlN2czM2S0EzcHBWL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYzFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDRgNGH0YPQuiDQnNCw0LrRgdC40LwuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQk9GW0LvQu9C+0LouICcn0JrQsNC/0YDRltGH0ZbRlNGC0YLQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWWRBaWh2QVFrQ1Q4YmJ5VzQ0cFFpMmlaaG1YMWMzS3ovcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQvtGC0YPQt9C60LjQvdCwINCb0ZbQtNGW0Y8sIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0JHRltC70LDRh9C10L3QutC+LiDQo9C60YDQsNGX0L3RgdGM0LrQuNC5INGC0LDQvdC+0LpcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFicE85ZEhBY2JQOEtsYVdUXzFuWFhRaVplYnVEOEYwcC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2MzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC+0YLRg9C30LrQuNC90LAg0JvRltC00ZbRjyw5INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCc0L7RhtCw0YDRgi7QnNC10L3Rg9C10YJcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDX214QVU2NVZ2dnZmaVBvUlFzY0tSMG9VRFdwSERRdC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2M0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQndC+0LLQvtGB0ZbQu9GM0YHRjNC60LAg0JrQsNGC0LXRgNC40L3QsCwgNyDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYu0KHQvtC90LDRgtC40L3QsCDRgtCyLjM2LCDQhi3QhtCG0IbRhy4sIDIp0IYu0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRj1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVk3MkNGTE9NUGlid1RVUGdXT21zUUgzWUpQdmlCakRhL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYzVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCe0LvRjNGF0L7QstGB0YzQutCwINCQ0L3RltGC0LAsIDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0IYu0J/QsNCy0LvRltC6LiAnJ9Ch0L3RltC20LjQvdC60LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJzLVZnRk1uSVlaVm05a09qTmg2RlRsX1AwQ0FEUkIxL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYzZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCe0LvRjNGF0L7QstGB0YzQutCwINCQ0L3RltGC0LAsIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J0uINCa0LDRgNC/0LXQvdC60L4uINCV0YLRjtC0INGB0ZYg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtTM0JxUXc0LW1zTW96bk8zTnpfaVdjNXl0bEpPRlRtL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYzdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCe0YHRgtCw0L/Rh9GD0Log0JrQsNGA0ZbQvdCwLiA4INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7Qk9GW0LvQu9C+0LogJyfQlNC30LLRltC90L7Rh9C60LgnJzsgMinQhi7QpdGD0YLQvtGA0Y/QvdGB0YzQutC40LkuJycn0JLQvtCz0L3RltCy0L7Rh9C60LAt0YHRgtGA0LjQsdGD0L3RltCy0L7Rh9C60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZSQWNOMk82a3VuS1pBRnJiZ0JIc0VOaVpnOWlLczRHL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYzhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCe0YXRgNGW0L0g0K/RgNC10LzQsCwgOCDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuINCd0L7QstC10LvQsC4gMinQoS7QnNCw0LnQutCw0L/QsNGALtCi0L7QutCw0YLQuNC90LBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6dzFKSzBKNGQ4SGstem5idi01b0RuYS1xTDNjd1JFUC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2M5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9Cw0LLQu9C10L3QutC+INCh0YLQtdGE0LDQvdGW0Y8sIDcg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7Qm9GO0LHQsNGA0YHRjNC60LjQuS7Qn9GW0YHQvdGPOyAyKSDQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuJyfQmtC70L7Rg9C90LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUltbndKajJEZXF6LVRKZnZYQUNDclpwaVpOVDNCbktIL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzY2FcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0LDQvdGM0LrQvtCy0LAg0JDQvdC90LAsIDgg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjyDQtNC+INC80ZbQvdC+0YA7IDIp0Jsu0KjRg9C60LDQudC70L4uINCG0L3RgtC10YDQvNC10YbQvlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXlyQUhyNmkxN05TaFA1cWFJbVBuV3gteEpRakNNTXkyL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzY2JcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0LDRgNGE0YzQvtC90L7QsiDQlNC80LjRgtGA0L4sIDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCS0LvQsNC00LjQutGW0L3QsC3QkdCw0YfQuNC90YHRjNC60LAuJyfQqdC+0YHRjCDRgdGD0LzQvdC1Jyc7IDIp0J4u0JPQtdC00ZbQutC1LtCi0LDQvdC10YbRjFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5EZHc1N1Jzcm1MckVfeVdTRzB1RkpYRWpXY0dxR21SL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzY2NcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0L7Qs9C+0YDRlNC70L7QsiDQkNGA0YLQtdC8LCA5INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCc0LXQvdGD0LXRgjsgMinQnS7QndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4g0JrQvtC70L7QvNC40LnQutCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbmU4NmlNLU5VczZOY2lvQnN2VWpmUWE2TW43Y1NBUjcvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/Rg9C30LDQvdC+0LLQsCDQnNCw0YDRltGPLDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCjLiDQk9GW0LvQu9C+0LouICcn0JrQvtGA0L7Qu9GW0LLRgdGM0LrQuNC5INC80LXQvdGD0LXRgicnOyAyKdCGLtCG0L7RgNC00LDQvS4gwqvQn9C+0LvRjtCy0LDQvdC90Y8g0L3QsCDQvNC10YLQtdC70LjQutCwwrtcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPR1NfZnF6SnZiQjdhTlByZXh3cURLNXgwbHMtMjBDQy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2NlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQoNC10LfQvdGW0Log0KLQtdGC0Y/QvdCwLCA5INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QotC+0YDQvtC/0L7QstCwLiDQktCw0YDRltCw0YbRltGXICcn0KLRgNC4INC/0L7RgNC+0YHRjycnLDIp0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5LiAnJ9Cc0LDQu9C10L3RjNC60LjQuSDQttC+0L3Qs9C70LXRgCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeEd4TlRUdFdyaGRPdTZZN0d1ZVVBZ0dYdmpvTGxNQmwvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDQuNCx0LDQuiDQkNC90LDRgdGC0LDRgdGW0Y8sOCDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpLtCc0LXQu9Cw0YDRgtGW0L0uJyfQoNCw0L3QvtC6JycsMinQnC7QnNCw0LnRlNGALicn0J3QtdC30LLQuNGH0LDQudC90LAg0L/RgNC40LPQvtC00LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXV6bVZxRlZublFhSUdYN28zSC03dE5lMGtwMVppVXZQL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZDBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0ZbQv9C90LjQuSDQkdC+0LPQtNCw0L0sIDgg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQhi4g0JHQtdGA0LrQvtCy0LjRhy4g0JLQsNGA0ZbQsNGG0ZbRlzsgMinQlC4g0KDQvtGD0LvRli4nJ9CSINC60YDQsNGX0L3RliDQs9C90L7QvNGW0LInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVFscjFfLXBGQWxMSWl4S2toeDItWnh4RVlaaEFaOVo3L3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZDFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0L7QvNCw0L3Rh9C10L3QutC+INCV0LvQuNGB0LXQuSwgOCDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCoLtCT0YPQvdC+Licn0JzQsNGA0Ygg0LzQsNGA0ZbQvtC90LXRgtC+0LonJzsyKSDQni7Qk9GA0LXRh9Cw0L3RltC90L7Qsi4nJ9Cd0LXQt9Cy0LjRh9Cw0LnQvdCwINC/0YDQuNCz0L7QtNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpSS16anE0UWltREw5VExFNUJSWXVybXVBTDE2ZlNjVS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2QyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCw0LnRh9GD0Log0K/RgNC+0YHQu9Cw0LLQsCwgOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi4g0JzQsNC60YHQuNC80L7Qsi4nJ9CR0LDQsdCwINCv0LPQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWDVDN2tmTmQzUWxvWmwwVEF2Tl9BUWgwLXFYdHBTU0IvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkM1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQsNC50YfRg9C6INCv0YDQvtGB0LvQsNCy0LAsOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmi7QoNC+0LvQu9GW0L0uICcnINCo0L7QutC+0LvQsNC00L3QtSDQv9C10YfQuNCy0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZ2WW1fRWREeF8tM0JSSEpNeUQzNWszb0M0RjJ0VjU2L3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZDRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0ZbRgtGI0LDRlNCy0LAg0JfQsNGA0LXQvNCwLDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy7QkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgDsgMinQmi7QodC70L7QvdGW0LzRgdGM0LrQuNC5LiAnJ9CU0Y7QudC80L7QstC+0YfQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFINmVkUXRzUnAwX3djdU9ZUkFFaDFsZmZSejBUWHRpYi9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2Q1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCE0LLQs9C10L3RltGPLCA5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQstCw0YHQvdC10LLRgdGM0LrQuNC5Licn0JTRg9C80LrQsCcnLCAyKdCULtCQ0LvQtdC60YHQsNC90LTQtdGALiAnJ9CX0LjQvNC+0LLQsCDRgNCw0L/RgdC+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2TFc5RWVzUFBzMVNUaTZrUXBReGRFSnprM1BnbkhZai9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2Q2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodGC0YDQuNC50YHRjNC60LAg0JDQvNC10LvRltGPLCA4INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JIu0JrQvtGB0LXQvdC60L4uJyfQlNC+0YnQuNC6Jyc7IDIp0J4u0JHRltC70LDRh9C10L3QutC+LiDQldC60YHQv9GA0L7QvNGCXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMGg5T05SRzJUNDJ2eEFsV3k0QVNQMHFnYThJVTAycnYvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHRgtGD0LTQt9C40L3RgdGM0LrQsCDQhNC70LjQt9Cw0LLQtdGC0LAsNyDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLiDQnNC+0YbQsNGA0YIuINCc0LXQvdGD0LXRgiwgMinQoy4g0JPRltC70LvQvtC6LiAgICAgICcn0J7RgdGW0L3QvdGW0Lkg0LXRgdC60ZbQtycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVmRzT2J1YjlaMEU3Wk0xUVlNc2Zxa2Fsam5uTFEyamUvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHRg9GF0LDQvSDQlNGW0LDQvdCwLCA4INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0KjRg9C60LDQudC70L4u0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGC0LXQvNGDINCSLtCo0LDRl9C90YHRjNC60L7Qs9C+OyAyKdCgLtCk0YPRh9GBLicn0JzQsNC70LXQvdGM0LrQtSDRgNC+0LfQsdC40YLQtSDRgdC10YDRhtC1JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHdTV1Y29DR0ZoeUVuTWgzLUlEVUotdUYwVHVqMzdVWi9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2Q5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotC10YDQvyfRj9C6INCQ0LDRgNC+0L0sIDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQhi7QkdC10YDQutC+0LLQuNGHLiDQktCw0YDRltCw0YbRltGXINC90LAg0YPQutGA0LDRl9C90YHRjNC60YMg0YLQtdC80YM7IDIp0KIu0J7RgdGC0LXQvS4gJyfQnNCw0LvQtdC90YzQutC40Lkg0LXQu9GM0YQnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVp0UWJOQkJnR21Pek1Xbm5IQUYtN19DQnNYazNMdy0yL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZGFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0LjQvNGH0LXQvdC60L4g0J3QsNC00ZbRjywgOCDRgNC+0LrRltCyLCBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCo0YLQvtCz0LDRgNC10L3QutC+LiAnJ9Cc0LXRgtC10LvQuNC6Jyc7IDIp0JIu0JPRltC70LvQvtC6LiAnJ9Cc0ZbRgdGP0YfQvdC1INGB0Y/QudCy0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBTOUFHSHlFRHFzdGpxQTFNaUViVGtwNWoxVXVTaHJHL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZGJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0ZbRidC10L3QutC+INCS0LXRgNC+0L3RltC60LAsIDcg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4g0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPINC00L4g0LzRltC90L7RgDsuIDIp0JsuINCo0YPQutCw0LnQu9C+LiDQktCw0YDRltCw0YbRltGXXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRnRyajlrNWpoRHhWaTV1ZmhYWTNUSGt3T0s4WTEySG0vcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQvtC00L7RgNC+0LLQsCDQlNCw0Y/QvdCwLCA2INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JHQsNGA0LLRltC90YHRjNC60LjQuS4gJyfQl9Cw0LnRh9C40LonJywgMinQnC7Qm9GO0LHQsNGA0YHRjNC60LjQuS4gJyfQn9C70Y/RgdC+0LLQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUEF6SUJ0akcwTmZxYXpVSTI1SHNSckZWWGpMeXoyQmkvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQvtC90ZbRlNCy0LjRhyDQmtGB0LXQvdGW0Y8sIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QodC/0ZbQu9GW0L7RgtGWJyfQk9GD0YbRg9C70Y/RgtCwJyc7MinQki7Qk9GW0LvQu9C+0LouJyfQoyDRgdGC0LDRgNC+0LzRgyDQktGW0LTQvdGWJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExOXczd25ITXA2WE5XU0tLcjlWSklvWWpWSVA5TWxBTy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2RlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotGO0YLRjNC60L4g0JLQvtC70L7QtNC40LzQuNGALCA5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0JrRg9C70LDRgy7QodC+0L3QsNGC0LjQvdCwLCDRgtCyLjU1IOKEljM7IDIp0KAu0JvRltGB0L7QstCwLicn0JLQtdGB0LXQu9C40Lkg0L3QsNGB0YLRgNGW0LknJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJnLUhLN0xwM1V3akdrM01JVFRkRDllUTdyRmRoeDFIL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZGZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCk0LXRgdC10L3QutC+INCQ0L3QvdCwLDgg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7Qk9C10LTRltC60LUu0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsIDIp0JIu0JPQsNCy0YDQuNC70ZbQvS4gJyfQmtCw0L/RgNGW0YfRh9GW0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVqcnE4WkVYQkpxX0FOZkFpWS01aktIN1JzNThmTHVDL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZTBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCn0L7RgNC90LXQuSDQr9C90LAsIDcg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC4g0JXQutGI0YLQtdC50L0uICcn0JrQsNC/0YDQuNC3INCz0L3QvtC80ZbQsicnOyAyKdChLtCu0YTQtdGA0L7Qsi4g0J3QvtC60YLRjtGA0L1cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFnNmJCN2FxV3B0dzVsTG5BaVhrbE9GcFFsNFgwTkxLai9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2UxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQqNC60YPRgNC60L4g0KLQuNC80L7RhNGW0LksIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNC+0L/QtdC9LiDQktCw0LvRjNGBINC70Y8g0LzRltC90L7RgDsgMinQmy7QqNGD0LrQsNC50LvQvi4gJyfQktC10YHQtdC70LAg0LzQvtC30LDRl9C60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWVKSjQ0WmJnVHJVVGRILXRCUEtHeWMxS18wcnJ5ajRfL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZTJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCu0YDRh9GD0Log0K/QvdCwLCA3INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JwuINCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAsINGC0LIuMzYg4oSWMSwg0IYg0YcuOyAyKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQktGA0LDQvdGW0YjQvdGPINC80L7Qu9C40YLQstCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvUFV1SDJxemFRVUx5cHZ1eTNNNlEtZjd2dmhabEFueC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufV07XHJcblxyXG5mdW5jdGlvbiBmaWxtUmVkdWNlcihzdGF0ZSA9IHtjYXJkQ291bnQ6IG15Q2FyZHMubGVuZ3RoLCBjYXJkczogbXlDYXJkcywgaXNEYXRhSW5QbGFjZTogdHJ1ZSwgZXJyb3I6IFwiXCJ9LCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdJTkZPX1BBR0UnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiAtMSxcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBbXSxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdBTEwnOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4g0KPRgdGWINCy0ZbQtNC10L5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbXlDYXJkcyxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG15Q2FyZHMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdncm91cC0xJzpcclxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDEpLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnZ3JvdXAtMic6XHJcbiAgICAgICAgICAgIGxldCBuZXdDYXJkczEgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQuZ3JvdXAgPT09IGdyb3VwMikuc2xpY2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkczEsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkczEubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2dyb3VwLTMnOlxyXG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMyID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDMpLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMyLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHMyLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnU0VBUkNIJzpcclxuICAgICAgICAgICAgbGV0IHEgPSBhY3Rpb24ucXVlcnkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYD4g0J/QvtGI0YPQujogJHtxfWApO1xyXG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMzID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FyZE5hbWUgPSBjYXJkLm5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIGxldCBib29sID0gKGNhcmROYW1lLnN0YXJ0c1dpdGgocSkgfHwgY2FyZE5hbWUuaW5jbHVkZXMocSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRlc3RpbmcgJHtjYXJkTmFtZX0gb24gcXVlcnkgJHtxfSwgcmVzdWx0IGlzICR7Ym9vbH1gKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2w7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Q2FyZHMzKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkczMsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkczMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2VcclxuICAgICAgICAnRVJST1InXHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgPiDQn9C+0LzQuNC70LrQsGApO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ubXNnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZHM6IG15Q2FyZHMsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBteUNhcmRzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNhcmRTdG9yZSA9IGNyZWF0ZVN0b3JlKGZpbG1SZWR1Y2VyKTtcclxuXHJcbmNhcmRTdG9yZS5zdWJzY3JpYmUoKCkgPT5cclxuICAgIGNvbnNvbGUubG9nKFwiRmlsbXNTdG9yZSBzdGF0ZSB3YXMgY2hhbmdlZCwgbnVtYmVyIG9mIGNhcmRzOiBcIiArIGNhcmRTdG9yZS5nZXRTdGF0ZSgpLmNhcmRDb3VudClcclxuKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9