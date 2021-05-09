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
    if (width < 700) setCalculatedWidth(width - 50);else setCalculatedWidth(640);
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





const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input`
  margin-top: 14px;
  font-size: 10px;
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
    type: "submit",
    value: "\u041F\u041E\u0428\u0423\u041A",
    onClick: handler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["AiOutlineFileSearch"], null)), error !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null), error, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null)) : null, props.cardCount === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Warn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null), "\u0432\u0456\u0434\u0435\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0456", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null)) : null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzExNjMwMjMucG5nIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZm9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVndWxhckhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzdWx0c0ZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0IbQstCw0L3QvtCy0LAg0Jsu0IYucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CS0LjRiNC90LXQstGB0YzQutCwLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0JfQsNGF0L7QtNGP0LrRltC9LTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9Ca0YPQt9C90ZTRhtC+0LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QnNCw0YDRhtC10LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QntGB0YLQsNC/0YfRg9C6INCcLiDQnC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0KDQsNC50YIg0IYu0KEucG5nIiwid2VicGFjazovLy8uL3NyYy9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9DYXJkU3RvcmUuanN4Il0sIm5hbWVzIjpbIkFwcCIsImNhcmRTdG9yZSIsIkZpbG1XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiRmlsbUluZm8iLCJJZnJhbWVCb3giLCJpZnJhbWUiLCJwcm9wcyIsIndpZHRoIiwiQ2FyZCIsImhlaWdodCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJjYWxjdWxhdGVkV2lkdGgiLCJzZXRDYWxjdWxhdGVkV2lkdGgiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm5hbWUiLCJjb21wb3NpdGlvbiIsInZpZGVvVXJsIiwiV3JhcHBlciIsImxvZ28iLCJQZXJzb25JbmZvU2VjdGlvbiIsIlBlcnNvbiIsIkNvbnRhaW5lciIsIlRleHRTZWN0aW9uIiwiSW1hZ2UiLCJpbWciLCJpbWdVcmwiLCJ0ZXh0IiwiRGl2IiwiQSIsImEiLCJQIiwiSW5mb1BhZ2UiLCJwZXJzb24yIiwicGVyc29uMSIsInBlcnNvbjQiLCJwZXJzb241IiwicGVyc29uNyIsInBlcnNvbjgiLCJwZXJzb24zIiwicGVyc29uNiIsIkNvbW1vbldyYXBwZXIiLCJNYWluU2VjdGlvbkZsZXgiLCJNYWluU2VjdGlvbiIsImNhcmRzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImlzRGF0YUluUGxhY2UiLCJjYXJkQ291bnQiLCJzZWN0aW9uc0ZvckZpbHRlciIsIm1hcCIsImNhcmQiLCJpZCIsIiRvaWQiLCJCdXR0b24iLCJpbnB1dCIsIklucHV0IiwiaW5wdXRDb2xvciIsIklucHV0U3R5bGUiLCJJbnB1dFdyYXBlciIsIlN0eWxlZFNwYW4iLCJzcGFuIiwiRXJyb3IiLCJXYXJuIiwiUmVndWxhckhlYWRlciIsInNlYXJjaEZpZWxkIiwidXNlUmVmIiwiZXJyb3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaGFuZGxlciIsInN0ciIsIlN0cmluZyIsImN1cnJlbnQiLCJ2YWx1ZSIsImxlbmd0aCIsImluY2x1ZGVzIiwidHlwZSIsIm1zZyIsInF1ZXJ5IiwiaGFuZGxlS2V5UHJlc3MiLCJldmVudCIsImtleSIsIkZpbHRlckNvbnRhaW5lciIsIkZpbHRlclNlY3Rpb24iLCJEaXZUaGluTGluZSIsIlN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyIiwiZ3Jvd18wIiwia2V5ZnJhbWVzIiwibGVmdCIsImdyb3dfMSIsIlRoaW5MaW5lSW5uZXJEaXYiLCJhbmltYXRpb24iLCJSZXN1bHRzRmlsdGVyIiwic2VjdGlvbnMiLCJyZWRMaW5lV2lkdGgiLCJzZXRSZWRMaW5lV2lkdGgiLCJyZWRMaW5lTGVmdCIsInNldFJlZExpbmVMZWZ0Iiwic2V0QW5pbWF0aW9uIiwibWFya2VkU2VjdGlvblJlZiIsInJlUmVuZGVyUmVkTGluIiwidGFyZ2V0IiwiY3VycmVudFNlY3Rpb25XaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImN1cnJlbnRTZWN0aW9uTGVmdCIsImNvdW50ZXIiLCJvbkZpbHRlclNlY3Rpb25DbGljayIsInNlbGVjdGVkU2VjdGlvbiIsInNlbGVjdGVkU2VjdGlvblN0cmluZyIsInNlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwicmVuZGVySW5mb1BhZ2UiLCJyZW5kZXJlZFNlY3Rpb25zIiwiZSIsImdldFdpbmRvd0RpbWVuc2lvbnMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aW5kb3ciLCJ3aW5kb3dEaW1lbnNpb25zIiwic2V0V2luZG93RGltZW5zaW9ucyIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ3JvdXAxIiwiZ3JvdXAyIiwiZ3JvdXAzIiwibXlDYXJkcyIsImZpbG1SZWR1Y2VyIiwiYWN0aW9uIiwibmV3Q2FyZHMiLCJmaWx0ZXIiLCJncm91cCIsInNsaWNlIiwibmV3Q2FyZHMxIiwibmV3Q2FyZHMyIiwicSIsInRvTG93ZXJDYXNlIiwibmV3Q2FyZHMzIiwiY2FyZE5hbWUiLCJib29sIiwic3RhcnRzV2l0aCIsImNyZWF0ZVN0b3JlIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFF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QUFFbUUsTUFBTSxDQUFDeEQ7QUFGWCxPQUFQOztBQUlKO0FBQ0ksYUFBTztBQUNIbEMsYUFBSyxFQUFFd0YsT0FESjtBQUVIckYscUJBQWEsRUFBRSxJQUZaO0FBR0hDLGlCQUFTLEVBQUVvRixPQUFPLENBQUN6RCxNQUhoQjtBQUlIUixhQUFLLEVBQUU7QUFKSixPQUFQO0FBcEVSO0FBMkVIOztBQUVNLE1BQU1wRSxTQUFTLEdBQUdvSix5REFBVyxDQUFDZCxXQUFELENBQTdCO0FBRVB0SSxTQUFTLENBQUNxSixTQUFWLENBQW9CLE1BQ2hCckMsT0FBTyxDQUFDQyxHQUFSLENBQVksb0RBQW9EakgsU0FBUyxDQUFDc0osUUFBVixHQUFxQnJHLFNBQXJGLENBREosRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc3hcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvMTE2MzAyMy5wbmdcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge01haW5TZWN0aW9ufSBmcm9tICcuL2NvbXBvbmVudHMvTWFpblNlY3Rpb24nO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtjYXJkU3RvcmV9IGZyb20gXCIuL3N0b3JlL0NhcmRTdG9yZVwiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LlN0cmljdE1vZGU+XHJcbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17Y2FyZFN0b3JlfT5cclxuICAgICAgICAgICAgICAgIDxNYWluU2VjdGlvbi8+XHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtCc0ZpbGxQZXJzb25GaWxsLCBGYUJvb2tPcGVufSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XHJcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zXCI7XHJcblxyXG5jb25zdCBGaWxtV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHRyYW5zaXRpb246IGFsbDtcclxuYDtcclxuXHJcbmNvbnN0IEZpbG1JbmZvID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgSWZyYW1lQm94ID0gc3R5bGVkLmlmcmFtZWBcclxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XHJcbiAgaGVpZ2h0OiA0ODBweDtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2hlaWdodCwgd2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xyXG4gICAgY29uc3QgW2NhbGN1bGF0ZWRXaWR0aCwgc2V0Q2FsY3VsYXRlZFdpZHRoXSA9IHVzZVN0YXRlKDY0MCk7XHJcblxyXG4gICAgLy9oYW5kbGluZyByZXNpemVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpZHRoPDcwMCkgc2V0Q2FsY3VsYXRlZFdpZHRoKHdpZHRoIC0gNTApO1xyXG4gICAgICAgIGVsc2Ugc2V0Q2FsY3VsYXRlZFdpZHRoKDY0MCk7XHJcbiAgICB9LCBbd2lkdGhdKTtcclxuXHJcbiAgICBjb25zdCBbbmFtZSxdID0gdXNlU3RhdGUocHJvcHMubmFtZSk7XHJcbiAgICBjb25zdCBbY29tcG9zaXRpb24sXSA9IHVzZVN0YXRlKHByb3BzLmNvbXBvc2l0aW9uKTtcclxuICAgIGNvbnN0IFt2aWRlb1VybCxdID0gdXNlU3RhdGUocHJvcHMudmlkZW9VcmwpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZpbG1XcmFwcGVyPlxyXG4gICAgICAgICAgICA8SWZyYW1lQm94IHNyYz17dmlkZW9Vcmx9IHdpZHRoPXtjYWxjdWxhdGVkV2lkdGh9Lz5cclxuICAgICAgICAgICAgPEZpbG1JbmZvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PEJzRmlsbFBlcnNvbkZpbGwvPiA8Yj57bmFtZX08L2I+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjxGYUJvb2tPcGVuLz4ge2NvbXBvc2l0aW9ufTwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICA8L0ZpbG1JbmZvPlxyXG4gICAgICAgIDwvRmlsbVdyYXBwZXI+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCaUxpbmtFeHRlcm5hbH0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vMTE2MzAyMy5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjEgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0JfQsNC60L7Qv9C10YbRjC0xLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uMiBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/QmtGD0LfQvdGU0YbQvtCy0LAtMS5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjMgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0IbQstCw0L3QvtCy0LAg0Jsu0IYucG5nXCI7XHJcbmltcG9ydCBwZXJzb240IGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9Cg0LDQudGCINCGLtChLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uNSBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/QntGB0YLQsNC/0YfRg9C6INCcLiDQnC5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjYgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0JzQsNGA0YbQtdCy0LAtMS5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjcgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0JfQsNGF0L7QtNGP0LrRltC9LTEucG5nXCI7XHJcbmltcG9ydCBwZXJzb244IGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9CS0LjRiNC90LXQstGB0YzQutCwLTEucG5nXCI7XHJcblxyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtsb2dvfVwiKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBQZXJzb25JbmZvU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFBlcnNvbiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBUZXh0U2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogODBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4NTA7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGA7XHJcblxyXG4gICAgY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDJweDtcclxuICAgIGA7XHJcblxyXG5cclxuICAgIHJldHVybiAoPENvbnRhaW5lcj48SW1hZ2Ugc3JjPXtwcm9wcy5pbWdVcmx9Lz48VGV4dFNlY3Rpb24+e3Byb3BzLnRleHR9PC9UZXh0U2VjdGlvbj48L0NvbnRhaW5lcj4pO1xyXG5cclxufVxyXG5cclxuY29uc3QgRGl2ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmA7XHJcblxyXG5jb25zdCBBID0gc3R5bGVkLmFgXHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IGRhcmtyZWQ7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCBkYXJrcmVkO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFAgPSBzdHlsZWQuZGl2YFxyXG4gIGxlZnQ6IDQwMHB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSW5mb1BhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxXcmFwcGVyPjxEaXY+XHJcblxyXG4gICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrYTdHdVZjMG1oSHpSNWpxMXFoVENIbmxOYTBIY1htQi92aWV3P3VzcD1zaGFyaW5nXCI+IDxCaUxpbmtFeHRlcm5hbC8+0J/QvtC70L7QttC10L3QvdGPPC9BPlxyXG4gICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFxZHlMMG1YYWZvd0k4ODhzUEpMeU03eXVoWUpOUjcwYi92aWV3P3VzcD1zaGFyaW5nXCI+IDxCaUxpbmtFeHRlcm5hbC8+XHJcbiAgICAgICAgICAgINCe0YDQs9Cw0L3RltC30LDRhtGW0LnQvdC40Lkg0LrQvtC80ZbRgtC10YIg0LrQvtC90LrRg9GA0YHRgyA8L0E+XHJcbiAgICAgICAgPEEgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZzejB1dTU2NEJsN2w5WS1icU1PXy1nTFBxVHVEQllDL3ZpZXc/dXNwPXNoYXJpbmdcIj4gPEJpTGlua0V4dGVybmFsLz7QkNGE0ZbRiNCwPC9BPlxyXG4gICAgPC9EaXY+XHJcbiAgICAgICAgPFA+0KHQutC70LDQtCDQttGD0YDRljo8L1A+XHJcbiAgICAgICAgPFBlcnNvbkluZm9TZWN0aW9uPlxyXG4gICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uMn1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtg0JrRg9C30L3RlNGG0L7QstCwINCeLtCeLi0g0LPQvtC70L7QstCwINC20YPRgNGWLCDQtNC+0LrRgtC+0YAg0YTRltC70L7RgdC+0YTRltGXLCDQutCw0L3QtNC40LTQsNGCINC/0LXQtNCw0LPQvtCz0ZbRh9C90LjRhSDQvdCw0YPQuiwg0L/RgNC+0YTQtdGB0L7RgCDQutCw0YTQtdC00YDQuCAg0LzRg9C30LjRh9C90L4tINGW0L3RgdGC0YDRg9C80LXQvdGC0LDQu9GM0L3QvtCz0L4g0LLQuNC60L7QvdCw0LLRgdGC0LLQsCDQpdCw0YDQutGW0LLRgdGM0LrQvtCz0L4g0J3QsNGG0ZbQvtC90LDQu9GM0L3QvtCz0L4g0L/QtdC00LDQs9C+0LPRltGH0L3QvtCz0L4g0YPQvdGW0LLQtdGA0YHQuNGC0LXRgtGDINGW0LzQtdC90ZYg0JMu0KHQutC+0LLQvtGA0L7QtNC4LCDQt9Cw0YHQu9GD0LbQtdC90LjQuSDQtNGW0Y/RhyDQvNC40YHRgtC10YbRgtCyINCj0LrRgNCw0ZfQvdC4LCAgXCLQktGW0LTQvNGW0L3QvdC40Log0L7RgdCy0ZbRgtC4INCj0LrRgNCw0ZfQvdC4XCIsINCy0ZbQtNC30L3QsNGH0LXQvdCwINC+0YDQtNC10L3QvtC8INCc0ZbQvdGW0YHRgtC10YDRgdGC0LLQsCDQutGD0LvRjNGC0YPRgNC4ICDQo9C60YDQsNGX0L3QuCBcItCX0LAg0LTQvtGB0Y/Qs9C90LXQvdC90Y8g0LIg0YDQvtC30LLQuNGC0LrRgyAg0LrRg9C70YzRgtGD0YDQuCAg0ZYg0LzQuNGB0YLQtdGG0YLQsiBcIiwg0YHQtdC60YDQtdGC0LDRgCDQndCw0YbRltC+0L3QsNC70YzQvdC+0Zcg0LLRgdC10YPQutGA0LDRl9C90YHRjNC60L7RlyDQvNGD0LfQuNGH0L3QvtGXINGB0L/RltC70LrQuCwg0LPQvtC70L7QstCwINCQ0YHQvtGG0ZbQsNGG0ZbRlyDQv9GW0LDQvdGW0YHRgtGW0LIgINCd0LDRhtGW0L7QvdCw0LvRjNC90L7RlyAg0LLRgdC10YPQutGA0LDRl9C90YHRjNC60L7RlyDQvNGD0LfQuNGH0L3QvtGXINGB0L/RltC70LrQuCwgINC/0YDQtdC30LjQtNC10L3RgiDQkNGB0L7RhtGW0LDRhtGW0Zcg0L/RltCw0L3RltGB0YLRltCyLdC/0LXQtNCw0LPQvtCz0ZbQsiDQo9C60YDQsNGX0L3QuChcIkVQVEFcIiBVa3JhaW5lKSwg0JLRltGG0LUtINC/0YDQtdC30LjQtNC10L3RgiAg0JDRgdC+0YbRltCw0YbRltGXINC/0ZbQsNC90ZbRgdGC0ZbQsi3Qv9C10LTQsNCz0L7Qs9GW0LIg0ITQstGA0L7Qv9C4IFwiRVBUQVwiIExvbmRvbikuYH0vPlxyXG5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjF9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cItCX0LDQutC+0L/QtdGG0Ywg0Jsu0KEuLSDQs9C+0LvQvtCy0LAg0LbRg9GA0ZYsINC30LDRgdC70YPQttC10L3QuNC5ICDQtNGW0Y/RhyDQvNC40YHRgtC10YbRgtCyINCj0LrRgNCw0ZfQvdC4LCDQstC40LrQu9Cw0LTQsNGHLdC80LXRgtC+0LTQuNGB0YIg0JvRjNCy0ZbQstGB0YzQutC+0LPQviDQtNC10YDQttCw0LLQvdC+0LPQviDQvNGD0LfQuNGH0L3QvtCz0L4g0LvRltGG0LXRjiDRltC80LXQvdGWINChLiDQmtGA0YPRiNC10LvRjNC90LjRhtGM0LrQvtGXLCDQv9C+0YfQtdGB0L3QuNC5INCw0LzQsdCw0YHQsNC00L7RgCDQvNGD0LfQuNGH0L3QvtGXICDQutGD0LvRjNGC0YPRgNC4ICDQn9C+0LvRjNGJ0ZZcIi8+XHJcblxyXG4gICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uNH1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwi0KDQsNC50YIg0IYu0KEuLCDQutCw0L3QtNC40LTQsNGCINC/0LXQtNCw0LPQvtCz0ZbRh9C90LjRhSDQvdCw0YPQuiwgINC90LDRg9C60L7QstC40Lkg0YHQv9GW0LLRgNC+0LHRltGC0L3QuNC6INC70LDQsdC+0YDQsNGC0L7RgNGW0Zcg0LXRgdGC0LXRgtC40YfQvdC+0LPQviDQstC40YXQvtCy0LDQvdC90Y8g0YLQsCDQvNC40YHRgtC10YbRjNC60L7RlyAg0L7RgdCy0ZbRgtC4ICDQhtC90YHRgtC40YLRg9GC0YMgINC/0YDQvtCx0LvQtdC8INCy0LjRhdC+0LLQsNC90L3RjyAg0J3QsNGG0ZbQvtC90LDQu9GM0L3QvtGXICDQsNC60LDQtNC10LzRltGXICDQv9C10LTQsNCz0L7Qs9GW0YfQvdC40YUgINC90LDRg9C6INCj0LrRgNCw0ZfQvdC4LlwiLz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb241fVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCLQntGB0YLQsNC/0YfRg9C6INCcLiDQnC4sINC00L7RhtC10L3RgiDQutCw0YTQtdC00YDQuCAg0LPRgNC4INC90LAgINC80YPQt9C40YfQvdC40YUg0ZbQvdGB0YLRgNGD0LzQtdC90YLQsNGFINCG0L3RgdGC0LjRgtGD0YLRgyAg0LzQuNGB0YLQtdGG0YLQsiAg0KDQlNCT0KMuXCIvPlxyXG5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjd9IHRleHQ9XCLQl9Cw0YXQvtC00Y/QutGW0L0g0J4u0JIuLCDQtNC+0YbQtdC90YIg0LrQsNGE0LXQtNGA0Lgg0LXRgdGC0YDQsNC00L3QvtGXINC80YPQt9C40LrQuCDQhtC90YHRgtC40YLRg9GC0YMgINC80LjRgdGC0LXRhtGC0LIgINCg0JTQk9CjLlwiLz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb244fVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9J9CS0LjRiNC90LXQstGB0YzQutCwINCGLtCfLiwg0LLQuNC60LvQsNC00LDRhyDQstC40YnQvtGXINC60LDRgtC10LPQvtGA0ZbRlywg0LPQvtC70L7QstCwINGG0LjQutC70L7QstC+0Zcg0LrQvtC80ZbRgdGW0ZcgXCLQpNC+0YDRgtC10L/RltCw0L3QvlwiINCg0ZbQstC90LXQvdGB0YzQutC+0LPQviDQvNGD0LfQuNGH0L3QvtCz0L4g0YTQsNGF0L7QstC+0LPQviDQutC+0LvQtdC00LbRgyDQoNCU0JPQoy4nLz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb24zfSB0ZXh0PVwi0IbQstCw0L3QvtCy0LAg0Jsu0IYuLCDQstC40LrQu9Cw0LTQsNGHINC/0LXRgNGI0L7RlyDQutCw0YLQtdCz0L7RgNGW0Zcg0JrQlyAn0JvRg9GG0YzQutCwINC80YPQt9C40YfQvdCwICDRiNC60L7Qu9CwIDMnLlwiLz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb242fVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCLQnNCw0YDRhtC10LLQsCDQli7Qny4sINGB0YLQsNGA0YjQuNC5INCy0LjQutC70LDQtNCw0YcsINC30LDQstGW0LTRg9GO0YfQsCDRhNC+0YDRgtC10L/RltCw0L3QvdC40Lwg0LLRltC00LTRltC70L7QvCDQoNGW0LLQvdC10L3RgdGM0LrQvtGXINC00LjRgtGP0YfQvtGXINC80YPQt9C40YfQvdC+0Zcg0YjQutC+0LvQuCDihJYxINGW0LzQtdC90ZYg0JwuINCb0LjRgdC10L3QutCwLlwiLz5cclxuXHJcblxyXG4gICAgICAgICAgICAnLz5cclxuICAgICAgICA8L1BlcnNvbkluZm9TZWN0aW9uPlxyXG4gICAgPC9XcmFwcGVyPik7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1Jlc3VsdHNGaWx0ZXJ9IGZyb20gXCIuL1Jlc3VsdHNGaWx0ZXJcIjtcclxuaW1wb3J0IHtDYXJkfSBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1JlZ3VsYXJIZWFkZXJ9IGZyb20gXCIuL1JlZ3VsYXJIZWFkZXJcIjtcclxuaW1wb3J0IHtJbmZvUGFnZX0gZnJvbSBcIi4vSW5mb1BhZ2VcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLzExNjMwMjMucG5nXCI7XHJcblxyXG5jb25zdCBDb21tb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke2xvZ299XCIpO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpblNlY3Rpb25GbGV4ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5TZWN0aW9uID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNhcmRzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2FyZHMpO1xyXG4gICAgY29uc3QgaXNEYXRhSW5QbGFjZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzRGF0YUluUGxhY2UpO1xyXG4gICAgY29uc3QgY2FyZENvdW50ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2FyZENvdW50KTtcclxuICAgIGNvbnN0IHNlY3Rpb25zRm9yRmlsdGVyID0gW2DQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlwiYCwgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXCJgLCBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFwiYCxg0KPRgdGWINCy0ZbQtNC10L5gLGDQn9GA0L4g0LrQvtC90LrRg9GA0YFgXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb21tb25XcmFwcGVyPlxyXG4gICAgICAgICAgICA8UmVndWxhckhlYWRlciBjYXJkQ291bnQ9e2NhcmRDb3VudH0vPlxyXG4gICAgICAgICAgICA8UmVzdWx0c0ZpbHRlciBzZWN0aW9ucz17c2VjdGlvbnNGb3JGaWx0ZXJ9Lz5cclxuICAgICAgICAgICAge2lzRGF0YUluUGxhY2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8TWFpblNlY3Rpb25GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXJkcy5tYXAoY2FyZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjYXJkLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1VybD17Y2FyZC52aWRlb1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvc2l0aW9uPXtjYXJkLmNvbXBvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXJkLmlkLiRvaWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICApKX08L01haW5TZWN0aW9uRmxleD4pIDogKDxJbmZvUGFnZS8+KX08L0NvbW1vbldyYXBwZXI+KTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtBaU91dGxpbmVGaWxlU2VhcmNoLCBIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zXCI7XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuaW5wdXRgXHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgd2lkdGg6IDE1JTtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlIDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogZGFya3JlZDtcclxuICB9YDtcclxuXHJcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmlucHV0Q29sb3IgfHwgXCJwYWxldmlvbGV0cmVkXCJ9O1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IElucHV0U3R5bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0V3JhcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogNjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogd2hpdGU7XHJcbmA7XHJcblxyXG5jb25zdCBFcnJvciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7YFxyXG5cclxuY29uc3QgV2FybiA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6IHllbGxvdztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7YFxyXG5cclxuZXhwb3J0IGNvbnN0IFJlZ3VsYXJIZWFkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hGaWVsZCA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5lcnJvcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcclxuICAgICAgICBsZXQgc3RyID0gU3RyaW5nKHNlYXJjaEZpZWxkLmN1cnJlbnQudmFsdWUpO1xyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoIDwgMyB8fCBzdHIuaW5jbHVkZXMoXCIgXCIpKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIkVSUk9SXCIsIG1zZzogXCLQkdGD0LTQsdGMINC70LDRgdC60LAg0LLQstC10LTRltGC0Ywg0LHRltC70YzRiNC1IDMg0YHQuNC80LLQvtC70ZbQsiDRliDQvdC1INCy0LjQutC+0YDQuNGB0YLQvtCy0YPQudGC0LUg0L/RgNC+0LHRltC7XCJ9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJTRUFSQ0hcIiwgcXVlcnk6IHN0cn0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgaGFuZGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxJbnB1dFdyYXBlcj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuPjxBaU91dGxpbmVGaWxlU2VhcmNoLz7Qn9C+0YjRg9C6INCy0ZbQtNC10L4g0L/QviDQv9GA0ZbQt9Cy0LjRidGDINGD0YfQsNGB0L3QuNC60LAgPC9TdHlsZWRTcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc30gcmVmPXtzZWFyY2hGaWVsZH0gdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00ZbRgtGMINC/0YDRltC30LLQuNGJ0LUg0YPRh9Cw0YHQvdC40LrQsC4uLlwiIGlucHV0Q29sb3I9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi0J/QntCo0KPQmlwiIG9uQ2xpY2s9e2hhbmRsZXJ9Lz48QWlPdXRsaW5lRmlsZVNlYXJjaC8+XHJcbiAgICAgICAgICAgIDwvSW5wdXRXcmFwZXI+XHJcbiAgICAgICAgICAgIHtlcnJvciAhPT0gXCJcIiA/IDxFcnJvcj48SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPntlcnJvcn08SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPjwvRXJyb3I+IDogbnVsbH1cclxuICAgICAgICAgICAge3Byb3BzLmNhcmRDb3VudCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICA8V2Fybj48SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPtCy0ZbQtNC10L4g0L3QtSDQt9C90LDQudC00LXQvdGWPEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz48L1dhcm4+IDogbnVsbH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge0ZhRm9sZGVyLCBGYVVuaXZlcnNpdHl9IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuXHJcbmNvbnN0IEZpbHRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO2A7XHJcblxyXG5jb25zdCBGaWx0ZXJTZWN0aW9uID0gc3R5bGVkKEZpbHRlckNvbnRhaW5lcilgXHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERpdlRoaW5MaW5lID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IGdyYXkgc29saWQgMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgaGVpZ2h0OiAyJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgZ3Jvd18wID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcclxuICB9XHJcbiAgMCUge1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdyb3dfMSA9IGtleWZyYW1lc2BcclxuICAwJSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XHJcbiAgfVxyXG4gIDAlIHtcclxuICAgIGxlZnQ6IDFweDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy5sZWZ0fTtcclxuICB9XHJcbmA7XHJcblxyXG5cclxuY29uc3QgVGhpbkxpbmVJbm5lckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xyXG4gIGxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogcmVkIHNvbGlkIDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgaGVpZ2h0OiAxJTtcclxuICBhbmltYXRpb246ICR7cHJvcHMgPT4gKHByb3BzLmFuaW1hdGlvbiAlIDIgPT09IDApID8gZ3Jvd18wIDogZ3Jvd18xfSAwLjVzIGxpbmVhcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXN1bHRzRmlsdGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3NlY3Rpb25zLF0gPSB1c2VTdGF0ZShwcm9wcy5zZWN0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgW3JlZExpbmVXaWR0aCwgc2V0UmVkTGluZVdpZHRoXSA9IHVzZVN0YXRlKFwiMTBweFwiKTtcclxuICAgIGNvbnN0IFtyZWRMaW5lTGVmdCwgc2V0UmVkTGluZUxlZnRdID0gdXNlU3RhdGUoXCIxMHB4XCIpO1xyXG4gICAgY29uc3QgW2FuaW1hdGlvbiwgc2V0QW5pbWF0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qge2hlaWdodCwgd2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xyXG4gICAgY29uc3QgbWFya2VkU2VjdGlvblJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIC8vaGFuZGxpbmcgcmVkTGluZSBvbiByZXNpemVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcmVSZW5kZXJSZWRMaW4oe3RhcmdldDptYXJrZWRTZWN0aW9uUmVmLmN1cnJlbnR9KVxyXG4gICAgfSwgW3dpZHRoXSk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlUmVuZGVyUmVkTGluKGV2ZW50KSB7XHJcbiAgICAgICAgbWFya2VkU2VjdGlvblJlZi5jdXJyZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGxldCBjdXJyZW50U2VjdGlvbldpZHRoID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgIGxldCBjdXJyZW50U2VjdGlvbkxlZnQgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIDEwO1xyXG4gICAgICAgIHNldFJlZExpbmVXaWR0aChjdXJyZW50U2VjdGlvbldpZHRoICsgXCJweFwiKTtcclxuICAgICAgICBzZXRSZWRMaW5lTGVmdChjdXJyZW50U2VjdGlvbkxlZnQgKyBcInB4XCIpO1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gYW5pbWF0aW9uICsgMTtcclxuICAgICAgICBzZXRBbmltYXRpb24oY291bnRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25GaWx0ZXJTZWN0aW9uQ2xpY2soc2VsZWN0ZWRTZWN0aW9uLCBldmVudCkge1xyXG4gICAgICAgIHJlUmVuZGVyUmVkTGluKGV2ZW50KTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRTZWN0aW9uU3RyaW5nID0gc2VsZWN0ZWRTZWN0aW9uLnNlY3Rpb247XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRTZWN0aW9uU3RyaW5nKTtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkU2VjdGlvblN0cmluZykge1xyXG4gICAgICAgICAgICBjYXNlIGDQo9GB0ZYg0LLRltC00LXQvmA6XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJBTExcIn0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XCJgOlxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZ3JvdXAtMVwifSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcImA6XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJncm91cC0yXCJ9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXCJgOlxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZ3JvdXAtM1wifSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVySW5mb1BhZ2UoZXZlbnQpIHtcclxuICAgICAgICByZVJlbmRlclJlZExpbihldmVudCk7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiSU5GT19QQUdFXCJ9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVuZGVyZWRTZWN0aW9ucyA9IHNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxyXG4gICAgICAgIHNlY3Rpb24gPT09IFwi0J/RgNC+INC60L7QvdC60YPRgNGBXCIgP1xyXG4gICAgICAgICAgICA8RmlsdGVyU2VjdGlvbiAgb25DbGljaz17cmVuZGVySW5mb1BhZ2V9IGtleT17c2VjdGlvbn0+IDxGYVVuaXZlcnNpdHkvPntzZWN0aW9ufSA8L0ZpbHRlclNlY3Rpb24+XHJcbiAgICAgICAgICAgIDogPEZpbHRlclNlY3Rpb24gIHJlZj17bWFya2VkU2VjdGlvblJlZn0gb25DbGljaz17KGUpID0+IG9uRmlsdGVyU2VjdGlvbkNsaWNrKHtzZWN0aW9ufSwgZSl9IGtleT17c2VjdGlvbn0+IDxGYUZvbGRlci8+e3NlY3Rpb259PC9GaWx0ZXJTZWN0aW9uPlxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyQ29udGFpbmVyIGNoaWxkcmVuPXtyZW5kZXJlZFNlY3Rpb25zfS8+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxEaXZUaGluTGluZT48VGhpbkxpbmVJbm5lckRpdiB3aWR0aD17cmVkTGluZVdpZHRofSBsZWZ0PXtyZWRMaW5lTGVmdH0gYW5pbWF0aW9uPXthbmltYXRpb259Lz48L0RpdlRoaW5MaW5lPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/QhtCy0LDQvdC+0LLQsCDQmy7Qhi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9CS0LjRiNC90LXQstGB0YzQutCwLTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/Ql9Cw0LrQvtC/0LXRhtGMLTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/Ql9Cw0YXQvtC00Y/QutGW0L0tMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9Ca0YPQt9C90ZTRhtC+0LLQsC0xLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0JzQsNGA0YbQtdCy0LAtMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9Ce0YHRgtCw0L/Rh9GD0Log0JwuINCcLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0KDQsNC50YIg0IYu0KEucG5nXCI7IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIGdldFdpbmRvd0RpbWVuc2lvbnMoKSB7XHJcbiAgICBjb25zdCB7IGlubmVyV2lkdGg6IHdpZHRoLCBpbm5lckhlaWdodDogaGVpZ2h0IH0gPSB3aW5kb3c7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2luZG93RGltZW5zaW9ucygpIHtcclxuICAgIGNvbnN0IFt3aW5kb3dEaW1lbnNpb25zLCBzZXRXaW5kb3dEaW1lbnNpb25zXSA9IHVzZVN0YXRlKGdldFdpbmRvd0RpbWVuc2lvbnMoKSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgICAgICAgIHNldFdpbmRvd0RpbWVuc2lvbnMoZ2V0V2luZG93RGltZW5zaW9ucygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gd2luZG93RGltZW5zaW9ucztcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldCcpKTtcclxuIiwiaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnXHJcblxyXG5jb25zdCBncm91cDEgPSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImA7XHJcbmNvbnN0IGdyb3VwMiA9IGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFwiYDtcclxuY29uc3QgZ3JvdXAzID0gYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcImA7XHJcblxyXG5jb25zdCBteUNhcmRzID0gW3tcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNhNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JDQs9GA0LDRgtGW0L3QsCDQodGC0LDQvdGW0YHQu9Cw0LIsIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jwu0JPQu9GW0L3QutCwLiDQn9C+0YfRg9GC0YLRjywgMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQsNC90L7QulwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTk0eXRfc0tDNUV0M3I0OXpDRVJzZEJaZURRZ1ktR19pL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYTZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0LDQu9GW0LPRg9GA0LAg0JLQsNGA0LLQsNGA0LAsIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jwu0JvQtdC80ZbRiNC60L4uINCa0L7Qu9C+0LzQuNC50LrQsFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWM2aFRJcURsLWNBRjNCcjNsMWMydXdxRlpzTFZTUFR2L3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYTdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0LDQu9GW0LPRg9GA0LAg0JLQsNGA0LLQsNGA0LAsIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIu0JzQsNC60YHRltC80L7Qsi4gJyfQl9Cw0LTQt9C10YDQutCw0LvQu9GPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE1WXI2UXhtNHJzdERPTVUydkduNUp3cTVWZlVwTjJTRC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2E4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktCw0YHQuNC70LXQstGB0YzQutCwINCl0YDQuNGB0YLQuNC90LAsNyDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JPRltC70LvQvtC6Licn0KHQsNC80L7RgtC90Y8g0LHQsNC70YzQvdCwINC30LDQu9CwJycuIDIp0KIu0KDQvtGB0YLQuNC80LDRiNC10L3QutC+Licn0KfQsNC60LvRg9C9JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHdHhVS3VVa0xLQW5oNW9DZjlGbHVpVVRRb0pDVGJNTS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2E5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktC+0LvQuNC90LXRhtGMINCe0LvQtdC60YHQsNC90LTRgCwgOCDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCa0L7Qu9C+0LTRg9CxLiDQkNGA0LrQsNC9LiAyKdCkLtCg0LjQsdGW0YbRjNC60LjQuS4gJyfQoNC10LPQvtGC0YPRiNC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV9DT1BlUHp3ZGdTN1VfT2pFeE9wdjhub3oxbWlUZThjL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYWFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0LDQu9Cw0LPQsNC9INCa0LDRgtC10YDQuNC90LAsIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQtdC80LAg0Lcg0LLQsNGA0ZbQsNGG0ZbRj9C80Lg7IDIp0JMu0JrRg9GI0L3QsNGA0LXQvdC60L4uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9CbFVmWFdxbGg1dURzREZDWGJIZ2M3WEdpQUpHYkxIL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYWJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0LXRgNCw0YHQuNC80LXQvdC60L4g0J7Qu9C10LrRgdCw0L3QtNGA0LAsOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCSLtCg0LDRh9C60L7QstGB0YzQutC40LkuINCi0L7QutCw0YLQuNC90LA7MinQki7QmtC+0YHQtdC90LrQvi4gJyfQnNC10LvQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xREduc1NRR2xCdThYX29EUHQzWUt0S21pVnpWLUczcUovcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNhY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQvtC70L7QtNC+0LLRgdGM0LrQsCDQodC+0YTRltGPLDcg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCGLtCS0LDQvdGF0LDQu9GMLtCg0L7QvdC00L47MinQnC7QlNGA0LXQvNC70Y7Qs9CwLicn0JLQtdGB0LXQu9CwINCz0YDQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMkt1dGotb3dwc3I4aGVscm1fa0ZaaDF5UXdNakVDN0EvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNhZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQvtC70YPQsSDQkNC70ZbQvdCwLCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwg0IbRhy4sIDIp0JEu0JTQstCw0YDRltC+0L3QsNGBLiDQn9GA0LXQu9GO0LTRltGPXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdXdoS01LZEpaSWhSem5NM1ZVNW1UcUV1S3h4VGVzYU8vcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNhZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPRgNC40LPQvtGAJ9GU0LLQsCDQmtCw0YLQtdGA0LjQvdCwLCA4INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQoNCw0L3QvtC6Jyc7MinQhi7QmtC+0YDQvtC70YzQutC+0LLQsC4nJ9CT0L7RgNC+0LHRh9C40LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFpTXY1THdZVjltMnd6LVNKTUdueGZVcUlSVDlNX0V3L3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYWZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0LDQvdGO0Log0ITQu9C40LfQsNCy0LXRgtCwLDcg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCb0Y7QsdCw0YDRgdGM0LrQuNC5Licn0KLQsNC90YbRjtCy0LDQu9GM0L3QsCcnOyAyKSDQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40Lku0JLQsNC70YzRgVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXZUa19tQUJfRUNoOVZEd1I2RU1hc1kxeTIxS1dyU1lIL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYjBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0YDQvtCz0LDQvSAg0JzRltC70LDQvdCwLCA1INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QnNCw0LnRlNGALiAnJ9CS0LXRgdC10LvQsCDQs9GA0LAnJzsgMinQlC7QkdCw0YjRgtC10LnQvS4gJyfQktCw0LvRjNGBINGB0LvQvtC90LXQvdGP0YInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVhiMGdJZ0Z5Q25MdUN4am41a2xhZVEwTGw5RHNrUlB6L3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYjFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0YDQvtC30LTQvtCy0LAg0ITQu9C40LfQsNCy0LXRgtCwLCA5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLtCc0LXQvdGD0LXRgi4gMinQky7QmtC70LDRgdGB0LXQvS4g0J/QvtC70YzQutCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcjVfMThwUjdCTHhEU0RFbk1EN3JITkdqUjl6aUVpR24vcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JfQsdGW0YAg0JzQsNGA0ZbRjyw4INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7Qk9C10LTRltC60LUuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCDQhiDRhy4sMinQoC7QqNGD0LzQsNC9Licn0J/QtdGA0YjQsCDQstGC0YDQsNGC0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV83cW4zZlR1dGRLR2NHZGJndjEzcktva0o4anhnazNhL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYjNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90YzQutGW0LIg0J7Qu9C10LrRgdCw0L3QtNGA0LAuIDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCU0ZbQsNCx0LXQu9C70ZYuINCh0LrQtdGA0YbQvjsgMinQni7Qk9C10LTRltC60LUuINCc0LDQu9C10L3RjNC60LAg0L8n0ZTRgdCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdlllVmtSYVYxbWIzM3VKMURHTXIyMHFvaWtGQ3I5QXkvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiNFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjtC6INCc0LDRgNGW0LDQvCwgOCDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QnNCw0LnQutCw0L/QsNGALiAnJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINGB0L7Qu9GMINC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyUmxMTUpqb1d3VFZ1cDdfdlZNRDREM25sMlktbHNwTy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2I1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JzQsNGA0ZbQsNC8LiA4INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCa0LjRgNC10LnQutC+LiAnJ9Ch0YLRgNC40LEt0YHQutC+0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUltcFBxOW5jYk1oNVQxU2NBSGZEbXo1N0JEbExaQ0YyL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYjZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0YHRg9C/0L7QstCwINCQ0LvRltGB0ZbRjywgOCDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCg0LXQudC90LXQutC1LiDQk9Cw0LLQvtGCLDsyKdCZLtChLtCR0LDRhS4g0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPINC00L4g0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBnOUNDSm9YUnplRzhDaUZoZ25FQnpUUUJMSVdEYW5BL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYjdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7QstCw0LvQtdC90LrQviDQktCw0YDQstCw0YDQsCw4INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7Qk9C10YLQsNC70L7QstCwLicn0KDQsNC90L7QuiDQsiDQu9GW0YHRlicnOzIp0JIu0J/QvtC00LLQsNC70LAuICcn0JrQsNC/0YDQuNC30YPQu9GPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTMzhfb0VDT0JvN0tHRFYxYXpKVXgzek9Zd2dRRVFJVi9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2I4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0YDQtdC90ZbQstGB0YzQutCwINCU0LDRgCfRjywgOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCgLtCS0LDQvdC00LDQuy4nJ9CS0L7QtNC+0LPRgNCw0LknJzsyKdCfLtCX0LDRhdCw0YDQvtCyLicn0JfQvdCw0LnQvtC80LjQuSDRgdC40LvRg9C10YInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlDQXpQQ2FXckFOX1NXemFKRmRFcHhQSU9Rdy1yZkxVL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYjlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7RgdGC0LXQvdC60L4g0K/RgNC+0YHQu9Cw0LLQsCwgNyDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QmtC+0YHQtdC90LrQvi4g0JzQtdC70L7QtNGW0Y9cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDZGRZY295Z1RjdG9hYkdRRjdwVDJwb1J2Q3VwVkdfYy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2JhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0YHRgtC10L3QutC+INCv0YDQvtGB0LvQsNCy0LAuIDcg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JnRlNC90YHQtdC9Licn0KfQsNGA0ZbQstC90LjQuSDRgtCw0L3QvtC6JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1QjI5YlRQRWlZZHVnSmZMT1psNFNRR3JGWTluUXByLS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2JiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9Cw0YLQutC+0LLRgdGM0LrQsCDQhNC70LjQt9Cw0LLQtdGC0LAsOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0L7RgdC10L3QutC+LiDQstCw0LvRjNGBOyAyKdCeLtCT0YDQtdGH0LDQvdGW0L3QvtCyLicn0JzRltC5INC60L7QvdC40LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZZQXctcTdmOEY5SkJQbWZuOHRFa3BKVDgxSjdFYWhBL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYmNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCb0ZbRiNC80LDQvSDQlNCw0YDQuNC90LAsOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0J/QvtC00LLQsNC70LAuJyfQnNCw0YDRiC3Qs9GA0L7RgtC10YHQuicnLiAyKdChLtCc0LDQudC60LDQv9Cw0YAu0JrQvtC70LjRgdC60L7QstCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTnNXejNUUjBTS2lUdGNOQ0FKZTA1OWJoaEZvbXRfTkUvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNCz0L7Qu9CwINCh0L7RhNGW0Y8sIDgg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQry7QkdC+0LHQsNC70ZbQui4nJ9Ch0LLRj9GC0LrQvtCy0LAg0L/QvtC70YzQutCwJyc7IDIp0IYu0JHQtdGA0LrQvtCy0LjRhy4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZ3VBeHM1Z193Ykd2X3R3cWl5cG8wZThGSE93dW0tSWgvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNC30YPRgNC10L3QutC+INCc0LDQudGPLCA4INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JwuINCR0L7QsdC10YAuICcn0JDQs9C10L3RgiDQpScnLCAyKdCGLtCG0L7RgNC00LDQvS4gJyfQn9C+0LvRjtCy0LDQvdC90Y8g0L3QsCDQvNC10YLQtdC70LjQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJZTFXQ1FwZ1B1TFlkS054Vkd1TGtlSVZuWUpOWko5VC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2JmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNCw0YDRh9C10L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLtC80LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjyDQtNC+INC80ZbQvdC+0YA7IDIp0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJ9CR0LDQsdCwINCv0LPQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWkpvNEdVTFo5c2ZjVXVBcEY1anlvSElVVl9JS0FWcmcvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNGA0YfRg9C6INCc0LDQutGB0LjQvCwgOCDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQpC4g0KjQv9GW0L3QtNC70LXRgC4g0KHQvtC90LDRgtC40L3QsCwg0YLQsi4xNTcg4oSWNFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXNDN01VamNrbnJuWlpaNWhmTUNYYlN2czM2S0EzcHBWL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYzFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDRgNGH0YPQuiDQnNCw0LrRgdC40LwuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQk9GW0LvQu9C+0LouICcn0JrQsNC/0YDRltGH0ZbRlNGC0YLQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWWRBaWh2QVFrQ1Q4YmJ5VzQ0cFFpMmlaaG1YMWMzS3ovcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQvtGC0YPQt9C60LjQvdCwINCb0ZbQtNGW0Y8sIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0JHRltC70LDRh9C10L3QutC+LiDQo9C60YDQsNGX0L3RgdGM0LrQuNC5INGC0LDQvdC+0LpcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFicE85ZEhBY2JQOEtsYVdUXzFuWFhRaVplYnVEOEYwcC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2MzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC+0YLRg9C30LrQuNC90LAg0JvRltC00ZbRjyw5INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCc0L7RhtCw0YDRgi7QnNC10L3Rg9C10YJcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDX214QVU2NVZ2dnZmaVBvUlFzY0tSMG9VRFdwSERRdC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2M0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQndC+0LLQvtGB0ZbQu9GM0YHRjNC60LAg0JrQsNGC0LXRgNC40L3QsCwgNyDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYu0KHQvtC90LDRgtC40L3QsCDRgtCyLjM2LCDQhi3QhtCG0IbRhy4sIDIp0IYu0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRj1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVk3MkNGTE9NUGlid1RVUGdXT21zUUgzWUpQdmlCakRhL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYzVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCe0LvRjNGF0L7QstGB0YzQutCwINCQ0L3RltGC0LAsIDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0IYu0J/QsNCy0LvRltC6LiAnJ9Ch0L3RltC20LjQvdC60LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJzLVZnRk1uSVlaVm05a09qTmg2RlRsX1AwQ0FEUkIxL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYzZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCe0LvRjNGF0L7QstGB0YzQutCwINCQ0L3RltGC0LAsIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J0uINCa0LDRgNC/0LXQvdC60L4uINCV0YLRjtC0INGB0ZYg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtTM0JxUXc0LW1zTW96bk8zTnpfaVdjNXl0bEpPRlRtL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYzdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCe0YHRgtCw0L/Rh9GD0Log0JrQsNGA0ZbQvdCwLiA4INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7Qk9GW0LvQu9C+0LogJyfQlNC30LLRltC90L7Rh9C60LgnJzsgMinQhi7QpdGD0YLQvtGA0Y/QvdGB0YzQutC40LkuJycn0JLQvtCz0L3RltCy0L7Rh9C60LAt0YHRgtGA0LjQsdGD0L3RltCy0L7Rh9C60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZSQWNOMk82a3VuS1pBRnJiZ0JIc0VOaVpnOWlLczRHL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYzhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCe0YXRgNGW0L0g0K/RgNC10LzQsCwgOCDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuINCd0L7QstC10LvQsC4gMinQoS7QnNCw0LnQutCw0L/QsNGALtCi0L7QutCw0YLQuNC90LBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6dzFKSzBKNGQ4SGstem5idi01b0RuYS1xTDNjd1JFUC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2M5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9Cw0LLQu9C10L3QutC+INCh0YLQtdGE0LDQvdGW0Y8sIDcg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7Qm9GO0LHQsNGA0YHRjNC60LjQuS7Qn9GW0YHQvdGPOyAyKSDQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuJyfQmtC70L7Rg9C90LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUltbndKajJEZXF6LVRKZnZYQUNDclpwaVpOVDNCbktIL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzY2FcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0LDQvdGM0LrQvtCy0LAg0JDQvdC90LAsIDgg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjyDQtNC+INC80ZbQvdC+0YA7IDIp0Jsu0KjRg9C60LDQudC70L4uINCG0L3RgtC10YDQvNC10YbQvlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXlyQUhyNmkxN05TaFA1cWFJbVBuV3gteEpRakNNTXkyL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzY2JcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0LDRgNGE0YzQvtC90L7QsiDQlNC80LjRgtGA0L4sIDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCS0LvQsNC00LjQutGW0L3QsC3QkdCw0YfQuNC90YHRjNC60LAuJyfQqdC+0YHRjCDRgdGD0LzQvdC1Jyc7IDIp0J4u0JPQtdC00ZbQutC1LtCi0LDQvdC10YbRjFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5EZHc1N1Jzcm1MckVfeVdTRzB1RkpYRWpXY0dxR21SL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzY2NcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0L7Qs9C+0YDRlNC70L7QsiDQkNGA0YLQtdC8LCA5INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCc0LXQvdGD0LXRgjsgMinQnS7QndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4g0JrQvtC70L7QvNC40LnQutCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbmU4NmlNLU5VczZOY2lvQnN2VWpmUWE2TW43Y1NBUjcvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/Rg9C30LDQvdC+0LLQsCDQnNCw0YDRltGPLDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCjLiDQk9GW0LvQu9C+0LouICcn0JrQvtGA0L7Qu9GW0LLRgdGM0LrQuNC5INC80LXQvdGD0LXRgicnOyAyKdCGLtCG0L7RgNC00LDQvS4gwqvQn9C+0LvRjtCy0LDQvdC90Y8g0L3QsCDQvNC10YLQtdC70LjQutCwwrtcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPR1NfZnF6SnZiQjdhTlByZXh3cURLNXgwbHMtMjBDQy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2NlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQoNC10LfQvdGW0Log0KLQtdGC0Y/QvdCwLCA5INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QotC+0YDQvtC/0L7QstCwLiDQktCw0YDRltCw0YbRltGXICcn0KLRgNC4INC/0L7RgNC+0YHRjycnLDIp0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5LiAnJ9Cc0LDQu9C10L3RjNC60LjQuSDQttC+0L3Qs9C70LXRgCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeEd4TlRUdFdyaGRPdTZZN0d1ZVVBZ0dYdmpvTGxNQmwvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDQuNCx0LDQuiDQkNC90LDRgdGC0LDRgdGW0Y8sOCDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpLtCc0LXQu9Cw0YDRgtGW0L0uJyfQoNCw0L3QvtC6JycsMinQnC7QnNCw0LnRlNGALicn0J3QtdC30LLQuNGH0LDQudC90LAg0L/RgNC40LPQvtC00LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXV6bVZxRlZublFhSUdYN28zSC03dE5lMGtwMVppVXZQL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZDBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0ZbQv9C90LjQuSDQkdC+0LPQtNCw0L0sIDgg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQhi4g0JHQtdGA0LrQvtCy0LjRhy4g0JLQsNGA0ZbQsNGG0ZbRlzsgMinQlC4g0KDQvtGD0LvRli4nJ9CSINC60YDQsNGX0L3RliDQs9C90L7QvNGW0LInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVFscjFfLXBGQWxMSWl4S2toeDItWnh4RVlaaEFaOVo3L3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZDFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0L7QvNCw0L3Rh9C10L3QutC+INCV0LvQuNGB0LXQuSwgOCDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCoLtCT0YPQvdC+Licn0JzQsNGA0Ygg0LzQsNGA0ZbQvtC90LXRgtC+0LonJzsyKSDQni7Qk9GA0LXRh9Cw0L3RltC90L7Qsi4nJ9Cd0LXQt9Cy0LjRh9Cw0LnQvdCwINC/0YDQuNCz0L7QtNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpSS16anE0UWltREw5VExFNUJSWXVybXVBTDE2ZlNjVS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2QyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCw0LnRh9GD0Log0K/RgNC+0YHQu9Cw0LLQsCwgOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi4g0JzQsNC60YHQuNC80L7Qsi4nJ9CR0LDQsdCwINCv0LPQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWDVDN2tmTmQzUWxvWmwwVEF2Tl9BUWgwLXFYdHBTU0IvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkM1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQsNC50YfRg9C6INCv0YDQvtGB0LvQsNCy0LAsOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmi7QoNC+0LvQu9GW0L0uICcnINCo0L7QutC+0LvQsNC00L3QtSDQv9C10YfQuNCy0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZ2WW1fRWREeF8tM0JSSEpNeUQzNWszb0M0RjJ0VjU2L3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZDRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0ZbRgtGI0LDRlNCy0LAg0JfQsNGA0LXQvNCwLDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy7QkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgDsgMinQmi7QodC70L7QvdGW0LzRgdGM0LrQuNC5LiAnJ9CU0Y7QudC80L7QstC+0YfQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFINmVkUXRzUnAwX3djdU9ZUkFFaDFsZmZSejBUWHRpYi9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2Q1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCE0LLQs9C10L3RltGPLCA5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQstCw0YHQvdC10LLRgdGM0LrQuNC5Licn0JTRg9C80LrQsCcnLCAyKdCULtCQ0LvQtdC60YHQsNC90LTQtdGALiAnJ9CX0LjQvNC+0LLQsCDRgNCw0L/RgdC+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2TFc5RWVzUFBzMVNUaTZrUXBReGRFSnprM1BnbkhZai9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2Q2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodGC0YDQuNC50YHRjNC60LAg0JDQvNC10LvRltGPLCA4INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JIu0JrQvtGB0LXQvdC60L4uJyfQlNC+0YnQuNC6Jyc7IDIp0J4u0JHRltC70LDRh9C10L3QutC+LiDQldC60YHQv9GA0L7QvNGCXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMGg5T05SRzJUNDJ2eEFsV3k0QVNQMHFnYThJVTAycnYvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHRgtGD0LTQt9C40L3RgdGM0LrQsCDQhNC70LjQt9Cw0LLQtdGC0LAsNyDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLiDQnNC+0YbQsNGA0YIuINCc0LXQvdGD0LXRgiwgMinQoy4g0JPRltC70LvQvtC6LiAgICAgICcn0J7RgdGW0L3QvdGW0Lkg0LXRgdC60ZbQtycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVmRzT2J1YjlaMEU3Wk0xUVlNc2Zxa2Fsam5uTFEyamUvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHRg9GF0LDQvSDQlNGW0LDQvdCwLCA4INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0KjRg9C60LDQudC70L4u0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGC0LXQvNGDINCSLtCo0LDRl9C90YHRjNC60L7Qs9C+OyAyKdCgLtCk0YPRh9GBLicn0JzQsNC70LXQvdGM0LrQtSDRgNC+0LfQsdC40YLQtSDRgdC10YDRhtC1JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHdTV1Y29DR0ZoeUVuTWgzLUlEVUotdUYwVHVqMzdVWi9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2Q5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotC10YDQvyfRj9C6INCQ0LDRgNC+0L0sIDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQhi7QkdC10YDQutC+0LLQuNGHLiDQktCw0YDRltCw0YbRltGXINC90LAg0YPQutGA0LDRl9C90YHRjNC60YMg0YLQtdC80YM7IDIp0KIu0J7RgdGC0LXQvS4gJyfQnNCw0LvQtdC90YzQutC40Lkg0LXQu9GM0YQnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVp0UWJOQkJnR21Pek1Xbm5IQUYtN19DQnNYazNMdy0yL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZGFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0LjQvNGH0LXQvdC60L4g0J3QsNC00ZbRjywgOCDRgNC+0LrRltCyLCBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCo0YLQvtCz0LDRgNC10L3QutC+LiAnJ9Cc0LXRgtC10LvQuNC6Jyc7IDIp0JIu0JPRltC70LvQvtC6LiAnJ9Cc0ZbRgdGP0YfQvdC1INGB0Y/QudCy0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBTOUFHSHlFRHFzdGpxQTFNaUViVGtwNWoxVXVTaHJHL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZGJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0ZbRidC10L3QutC+INCS0LXRgNC+0L3RltC60LAsIDcg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4g0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPINC00L4g0LzRltC90L7RgDsuIDIp0JsuINCo0YPQutCw0LnQu9C+LiDQktCw0YDRltCw0YbRltGXXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRnRyajlrNWpoRHhWaTV1ZmhYWTNUSGt3T0s4WTEySG0vcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQvtC00L7RgNC+0LLQsCDQlNCw0Y/QvdCwLCA2INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JHQsNGA0LLRltC90YHRjNC60LjQuS4gJyfQl9Cw0LnRh9C40LonJywgMinQnC7Qm9GO0LHQsNGA0YHRjNC60LjQuS4gJyfQn9C70Y/RgdC+0LLQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUEF6SUJ0akcwTmZxYXpVSTI1SHNSckZWWGpMeXoyQmkvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQvtC90ZbRlNCy0LjRhyDQmtGB0LXQvdGW0Y8sIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QodC/0ZbQu9GW0L7RgtGWJyfQk9GD0YbRg9C70Y/RgtCwJyc7MinQki7Qk9GW0LvQu9C+0LouJyfQoyDRgdGC0LDRgNC+0LzRgyDQktGW0LTQvdGWJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExOXczd25ITXA2WE5XU0tLcjlWSklvWWpWSVA5TWxBTy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2RlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotGO0YLRjNC60L4g0JLQvtC70L7QtNC40LzQuNGALCA5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0JrRg9C70LDRgy7QodC+0L3QsNGC0LjQvdCwLCDRgtCyLjU1IOKEljM7IDIp0KAu0JvRltGB0L7QstCwLicn0JLQtdGB0LXQu9C40Lkg0L3QsNGB0YLRgNGW0LknJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJnLUhLN0xwM1V3akdrM01JVFRkRDllUTdyRmRoeDFIL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZGZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCk0LXRgdC10L3QutC+INCQ0L3QvdCwLDgg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7Qk9C10LTRltC60LUu0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsIDIp0JIu0JPQsNCy0YDQuNC70ZbQvS4gJyfQmtCw0L/RgNGW0YfRh9GW0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVqcnE4WkVYQkpxX0FOZkFpWS01aktIN1JzNThmTHVDL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZTBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCn0L7RgNC90LXQuSDQr9C90LAsIDcg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC4g0JXQutGI0YLQtdC50L0uICcn0JrQsNC/0YDQuNC3INCz0L3QvtC80ZbQsicnOyAyKdChLtCu0YTQtdGA0L7Qsi4g0J3QvtC60YLRjtGA0L1cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFnNmJCN2FxV3B0dzVsTG5BaVhrbE9GcFFsNFgwTkxLai9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2UxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQqNC60YPRgNC60L4g0KLQuNC80L7RhNGW0LksIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNC+0L/QtdC9LiDQktCw0LvRjNGBINC70Y8g0LzRltC90L7RgDsgMinQmy7QqNGD0LrQsNC50LvQvi4gJyfQktC10YHQtdC70LAg0LzQvtC30LDRl9C60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWVKSjQ0WmJnVHJVVGRILXRCUEtHeWMxS18wcnJ5ajRfL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZTJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCu0YDRh9GD0Log0K/QvdCwLCA3INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JwuINCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAsINGC0LIuMzYg4oSWMSwg0IYg0YcuOyAyKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQktGA0LDQvdGW0YjQvdGPINC80L7Qu9C40YLQstCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvUFV1SDJxemFRVUx5cHZ1eTNNNlEtZjd2dmhabEFueC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufV07XHJcblxyXG5mdW5jdGlvbiBmaWxtUmVkdWNlcihzdGF0ZSA9IHtjYXJkQ291bnQ6IG15Q2FyZHMubGVuZ3RoLCBjYXJkczogbXlDYXJkcywgaXNEYXRhSW5QbGFjZTogdHJ1ZSwgZXJyb3I6IFwiXCJ9LCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdJTkZPX1BBR0UnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiAtMSxcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBbXSxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdBTEwnOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4g0KPRgdGWINCy0ZbQtNC10L5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbXlDYXJkcyxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG15Q2FyZHMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdncm91cC0xJzpcclxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDEpLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnZ3JvdXAtMic6XHJcbiAgICAgICAgICAgIGxldCBuZXdDYXJkczEgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQuZ3JvdXAgPT09IGdyb3VwMikuc2xpY2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkczEsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkczEubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2dyb3VwLTMnOlxyXG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMyID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDMpLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMyLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHMyLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnU0VBUkNIJzpcclxuICAgICAgICAgICAgbGV0IHEgPSBhY3Rpb24ucXVlcnkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYD4g0J/QvtGI0YPQujogJHtxfWApO1xyXG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMzID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FyZE5hbWUgPSBjYXJkLm5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIGxldCBib29sID0gKGNhcmROYW1lLnN0YXJ0c1dpdGgocSkgfHwgY2FyZE5hbWUuaW5jbHVkZXMocSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRlc3RpbmcgJHtjYXJkTmFtZX0gb24gcXVlcnkgJHtxfSwgcmVzdWx0IGlzICR7Ym9vbH1gKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2w7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Q2FyZHMzKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkczMsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkczMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2VcclxuICAgICAgICAnRVJST1InXHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgPiDQn9C+0LzQuNC70LrQsGApO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ubXNnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZHM6IG15Q2FyZHMsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBteUNhcmRzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNhcmRTdG9yZSA9IGNyZWF0ZVN0b3JlKGZpbG1SZWR1Y2VyKTtcclxuXHJcbmNhcmRTdG9yZS5zdWJzY3JpYmUoKCkgPT5cclxuICAgIGNvbnNvbGUubG9nKFwiRmlsbXNTdG9yZSBzdGF0ZSB3YXMgY2hhbmdlZCwgbnVtYmVyIG9mIGNhcmRzOiBcIiArIGNhcmRTdG9yZS5nZXRTdGF0ZSgpLmNhcmRDb3VudClcclxuKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9