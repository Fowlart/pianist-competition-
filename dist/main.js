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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzExNjMwMjMucG5nIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZm9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVndWxhckhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzdWx0c0ZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0IbQstCw0L3QvtCy0LAg0Jsu0IYucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CS0LjRiNC90LXQstGB0YzQutCwLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0JfQsNGF0L7QtNGP0LrRltC9LTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9Ca0YPQt9C90ZTRhtC+0LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QnNCw0YDRhtC10LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QntGB0YLQsNC/0YfRg9C6INCcLiDQnC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0KDQsNC50YIg0IYu0KEucG5nIiwid2VicGFjazovLy8uL3NyYy9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9DYXJkU3RvcmUuanN4Il0sIm5hbWVzIjpbIkFwcCIsImNhcmRTdG9yZSIsIkZpbG1XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiRmlsbUluZm8iLCJJZnJhbWVCb3giLCJpZnJhbWUiLCJwcm9wcyIsIndpZHRoIiwiQ2FyZCIsImhlaWdodCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJjYWxjdWxhdGVkV2lkdGgiLCJzZXRDYWxjdWxhdGVkV2lkdGgiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm5hbWUiLCJjb21wb3NpdGlvbiIsInZpZGVvVXJsIiwiV3JhcHBlciIsImxvZ28iLCJQZXJzb25JbmZvU2VjdGlvbiIsIlBlcnNvbiIsIkNvbnRhaW5lciIsIlRleHRTZWN0aW9uIiwiSW1hZ2UiLCJpbWciLCJpbWdVcmwiLCJ0ZXh0IiwiRGl2IiwiQSIsImEiLCJQIiwiSW5mb1BhZ2UiLCJwZXJzb24yIiwicGVyc29uMSIsInBlcnNvbjQiLCJwZXJzb241IiwicGVyc29uNyIsInBlcnNvbjgiLCJwZXJzb24zIiwicGVyc29uNiIsIk1haW5TZWN0aW9uRmxleCIsIk1haW5TZWN0aW9uIiwiY2FyZHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiaXNEYXRhSW5QbGFjZSIsImNhcmRDb3VudCIsInNlY3Rpb25zRm9yRmlsdGVyIiwibWFwIiwiY2FyZCIsImlkIiwiJG9pZCIsIkJ1dHRvbiIsImlucHV0IiwiSW5wdXQiLCJpbnB1dENvbG9yIiwiSW5wdXRTdHlsZSIsIklucHV0V3JhcGVyIiwiU3R5bGVkU3BhbiIsInNwYW4iLCJFcnJvciIsIldhcm4iLCJSZWd1bGFySGVhZGVyIiwic2VhcmNoRmllbGQiLCJ1c2VSZWYiLCJlcnJvciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJoYW5kbGVyIiwic3RyIiwiU3RyaW5nIiwiY3VycmVudCIsInZhbHVlIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJ0eXBlIiwibXNnIiwicXVlcnkiLCJoYW5kbGVLZXlQcmVzcyIsImV2ZW50Iiwia2V5IiwiRmlsdGVyQ29udGFpbmVyIiwiRmlsdGVyU2VjdGlvbiIsIkRpdlRoaW5MaW5lIiwiU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXIiLCJncm93XzAiLCJrZXlmcmFtZXMiLCJsZWZ0IiwiZ3Jvd18xIiwiVGhpbkxpbmVJbm5lckRpdiIsImFuaW1hdGlvbiIsIlJlc3VsdHNGaWx0ZXIiLCJzZWN0aW9ucyIsInJlZExpbmVXaWR0aCIsInNldFJlZExpbmVXaWR0aCIsInJlZExpbmVMZWZ0Iiwic2V0UmVkTGluZUxlZnQiLCJzZXRBbmltYXRpb24iLCJtYXJrZWRTZWN0aW9uUmVmIiwicmVSZW5kZXJSZWRMaW4iLCJ0YXJnZXQiLCJjdXJyZW50U2VjdGlvbldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY3VycmVudFNlY3Rpb25MZWZ0IiwiY291bnRlciIsIm9uRmlsdGVyU2VjdGlvbkNsaWNrIiwic2VsZWN0ZWRTZWN0aW9uIiwic2VsZWN0ZWRTZWN0aW9uU3RyaW5nIiwic2VjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJJbmZvUGFnZSIsInJlbmRlcmVkU2VjdGlvbnMiLCJlIiwiZ2V0V2luZG93RGltZW5zaW9ucyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIndpbmRvdyIsIndpbmRvd0RpbWVuc2lvbnMiLCJzZXRXaW5kb3dEaW1lbnNpb25zIiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJncm91cDEiLCJncm91cDIiLCJncm91cDMiLCJteUNhcmRzIiwiZmlsbVJlZHVjZXIiLCJhY3Rpb24iLCJuZXdDYXJkcyIsImZpbHRlciIsImdyb3VwIiwic2xpY2UiLCJuZXdDYXJkczEiLCJuZXdDYXJkczIiLCJxIiwidG9Mb3dlckNhc2UiLCJuZXdDYXJkczMiLCJjYXJkTmFtZSIsImJvb2wiLCJzdGFydHNXaXRoIiwiY3JlYXRlU3RvcmUiLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FB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RixxQkFBYSxFQUFFLElBRlo7QUFHSEMsaUJBQVMsRUFBRW9GLE9BQU8sQ0FBQ3pELE1BSGhCO0FBSUhSLGFBQUssRUFBRTtBQUpKLE9BQVA7QUFwRVI7QUEyRUg7O0FBRU0sTUFBTW5FLFNBQVMsR0FBR21KLHlEQUFXLENBQUNkLFdBQUQsQ0FBN0I7QUFFUHJJLFNBQVMsQ0FBQ29KLFNBQVYsQ0FBb0IsTUFDaEJyQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvREFBb0RoSCxTQUFTLENBQUNxSixRQUFWLEdBQXFCckcsU0FBckYsQ0FESixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzeFwiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy8xMTYzMDIzLnBuZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TWFpblNlY3Rpb259IGZyb20gJy4vY29tcG9uZW50cy9NYWluU2VjdGlvbic7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2NhcmRTdG9yZX0gZnJvbSBcIi4vc3RvcmUvQ2FyZFN0b3JlXCI7XHJcbmltcG9ydCB7UmVndWxhckhlYWRlcn0gZnJvbSBcIi4vY29tcG9uZW50cy9SZWd1bGFySGVhZGVyXCI7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cclxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtjYXJkU3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgPE1haW5TZWN0aW9uLz5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICA8L1JlYWN0LlN0cmljdE1vZGU+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0JzRmlsbFBlcnNvbkZpbGwsIEZhQm9va09wZW59IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuXHJcbmNvbnN0IEZpbG1XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsO1xyXG5gO1xyXG5cclxuY29uc3QgRmlsbUluZm8gPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgSWZyYW1lQm94ID0gc3R5bGVkLmlmcmFtZWBcclxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XHJcbiAgaGVpZ2h0OiA0ODBweDtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2hlaWdodCwgd2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xyXG4gICAgY29uc3QgW2NhbGN1bGF0ZWRXaWR0aCwgc2V0Q2FsY3VsYXRlZFdpZHRoXSA9IHVzZVN0YXRlKDY0MCk7XHJcblxyXG4gICAgLy9oYW5kbGluZyByZXNpemVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpZHRoPDcwMCkgc2V0Q2FsY3VsYXRlZFdpZHRoKHdpZHRoIC0gNTApO1xyXG4gICAgICAgIGVsc2Ugc2V0Q2FsY3VsYXRlZFdpZHRoKDY0MCk7XHJcbiAgICB9LCBbd2lkdGhdKTtcclxuXHJcbiAgICBjb25zdCBbbmFtZSxdID0gdXNlU3RhdGUocHJvcHMubmFtZSk7XHJcbiAgICBjb25zdCBbY29tcG9zaXRpb24sXSA9IHVzZVN0YXRlKHByb3BzLmNvbXBvc2l0aW9uKTtcclxuICAgIGNvbnN0IFt2aWRlb1VybCxdID0gdXNlU3RhdGUocHJvcHMudmlkZW9VcmwpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZpbG1XcmFwcGVyPlxyXG4gICAgICAgICAgICA8SWZyYW1lQm94IHNyYz17dmlkZW9Vcmx9IHdpZHRoPXtjYWxjdWxhdGVkV2lkdGh9Lz5cclxuICAgICAgICAgICAgPEZpbG1JbmZvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PEJzRmlsbFBlcnNvbkZpbGwvPiA8Yj57bmFtZX08L2I+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjxGYUJvb2tPcGVuLz4ge2NvbXBvc2l0aW9ufTwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICA8L0ZpbG1JbmZvPlxyXG4gICAgICAgIDwvRmlsbVdyYXBwZXI+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCaUxpbmtFeHRlcm5hbH0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vMTE2MzAyMy5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjEgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0JfQsNC60L7Qv9C10YbRjC0xLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uMiBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/QmtGD0LfQvdGU0YbQvtCy0LAtMS5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjMgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0IbQstCw0L3QvtCy0LAg0Jsu0IYucG5nXCI7XHJcbmltcG9ydCBwZXJzb240IGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9Cg0LDQudGCINCGLtChLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uNSBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/QntGB0YLQsNC/0YfRg9C6INCcLiDQnC5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjYgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0JzQsNGA0YbQtdCy0LAtMS5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjcgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0JfQsNGF0L7QtNGP0LrRltC9LTEucG5nXCI7XHJcbmltcG9ydCBwZXJzb244IGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9CS0LjRiNC90LXQstGB0YzQutCwLTEucG5nXCI7XHJcblxyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtsb2dvfVwiKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBQZXJzb25JbmZvU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFBlcnNvbiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBUZXh0U2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogODBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4NTA7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGA7XHJcblxyXG4gICAgY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDJweDtcclxuICAgIGA7XHJcblxyXG5cclxuICAgIHJldHVybiAoPENvbnRhaW5lcj48SW1hZ2Ugc3JjPXtwcm9wcy5pbWdVcmx9Lz48VGV4dFNlY3Rpb24+e3Byb3BzLnRleHR9PC9UZXh0U2VjdGlvbj48L0NvbnRhaW5lcj4pO1xyXG5cclxufVxyXG5cclxuY29uc3QgRGl2ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmA7XHJcblxyXG5jb25zdCBBID0gc3R5bGVkLmFgXHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IGRhcmtyZWQ7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCBkYXJrcmVkO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFAgPSBzdHlsZWQuZGl2YFxyXG4gIGxlZnQ6IDQwMHB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSW5mb1BhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxXcmFwcGVyPjxEaXY+XHJcblxyXG4gICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrYTdHdVZjMG1oSHpSNWpxMXFoVENIbmxOYTBIY1htQi92aWV3P3VzcD1zaGFyaW5nXCI+IDxCaUxpbmtFeHRlcm5hbC8+0J/QvtC70L7QttC10L3QvdGPPC9BPlxyXG4gICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFxZHlMMG1YYWZvd0k4ODhzUEpMeU03eXVoWUpOUjcwYi92aWV3P3VzcD1zaGFyaW5nXCI+IDxCaUxpbmtFeHRlcm5hbC8+XHJcbiAgICAgICAgICAgINCe0YDQs9Cw0L3RltC30LDRhtGW0LnQvdC40Lkg0LrQvtC80ZbRgtC10YIg0LrQvtC90LrRg9GA0YHRgyA8L0E+XHJcbiAgICAgICAgPEEgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZzejB1dTU2NEJsN2w5WS1icU1PXy1nTFBxVHVEQllDL3ZpZXc/dXNwPXNoYXJpbmdcIj4gPEJpTGlua0V4dGVybmFsLz7QkNGE0ZbRiNCwPC9BPlxyXG4gICAgPC9EaXY+XHJcbiAgICAgICAgPFA+0KHQutC70LDQtCDQttGD0YDRljo8L1A+XHJcbiAgICAgICAgPFBlcnNvbkluZm9TZWN0aW9uPlxyXG4gICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uMn1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtg0JrRg9C30L3RlNGG0L7QstCwINCeLtCeLi0g0LPQvtC70L7QstCwINC20YPRgNGWLCDQtNC+0LrRgtC+0YAg0YTRltC70L7RgdC+0YTRltGXLCDQutCw0L3QtNC40LTQsNGCINC/0LXQtNCw0LPQvtCz0ZbRh9C90LjRhSDQvdCw0YPQuiwg0L/RgNC+0YTQtdGB0L7RgCDQutCw0YTQtdC00YDQuCAg0LzRg9C30LjRh9C90L4tINGW0L3RgdGC0YDRg9C80LXQvdGC0LDQu9GM0L3QvtCz0L4g0LLQuNC60L7QvdCw0LLRgdGC0LLQsCDQpdCw0YDQutGW0LLRgdGM0LrQvtCz0L4g0J3QsNGG0ZbQvtC90LDQu9GM0L3QvtCz0L4g0L/QtdC00LDQs9C+0LPRltGH0L3QvtCz0L4g0YPQvdGW0LLQtdGA0YHQuNGC0LXRgtGDINGW0LzQtdC90ZYg0JMu0KHQutC+0LLQvtGA0L7QtNC4LCDQt9Cw0YHQu9GD0LbQtdC90LjQuSDQtNGW0Y/RhyDQvNC40YHRgtC10YbRgtCyINCj0LrRgNCw0ZfQvdC4LCAgXCLQktGW0LTQvNGW0L3QvdC40Log0L7RgdCy0ZbRgtC4INCj0LrRgNCw0ZfQvdC4XCIsINCy0ZbQtNC30L3QsNGH0LXQvdCwINC+0YDQtNC10L3QvtC8INCc0ZbQvdGW0YHRgtC10YDRgdGC0LLQsCDQutGD0LvRjNGC0YPRgNC4ICDQo9C60YDQsNGX0L3QuCBcItCX0LAg0LTQvtGB0Y/Qs9C90LXQvdC90Y8g0LIg0YDQvtC30LLQuNGC0LrRgyAg0LrRg9C70YzRgtGD0YDQuCAg0ZYg0LzQuNGB0YLQtdGG0YLQsiBcIiwg0YHQtdC60YDQtdGC0LDRgCDQndCw0YbRltC+0L3QsNC70YzQvdC+0Zcg0LLRgdC10YPQutGA0LDRl9C90YHRjNC60L7RlyDQvNGD0LfQuNGH0L3QvtGXINGB0L/RltC70LrQuCwg0LPQvtC70L7QstCwINCQ0YHQvtGG0ZbQsNGG0ZbRlyDQv9GW0LDQvdGW0YHRgtGW0LIgINCd0LDRhtGW0L7QvdCw0LvRjNC90L7RlyAg0LLRgdC10YPQutGA0LDRl9C90YHRjNC60L7RlyDQvNGD0LfQuNGH0L3QvtGXINGB0L/RltC70LrQuCwgINC/0YDQtdC30LjQtNC10L3RgiDQkNGB0L7RhtGW0LDRhtGW0Zcg0L/RltCw0L3RltGB0YLRltCyLdC/0LXQtNCw0LPQvtCz0ZbQsiDQo9C60YDQsNGX0L3QuChcIkVQVEFcIiBVa3JhaW5lKSwg0JLRltGG0LUtINC/0YDQtdC30LjQtNC10L3RgiAg0JDRgdC+0YbRltCw0YbRltGXINC/0ZbQsNC90ZbRgdGC0ZbQsi3Qv9C10LTQsNCz0L7Qs9GW0LIg0ITQstGA0L7Qv9C4IFwiRVBUQVwiIExvbmRvbikuYH0vPlxyXG5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjF9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cItCX0LDQutC+0L/QtdGG0Ywg0Jsu0KEuLSDQs9C+0LvQvtCy0LAg0LbRg9GA0ZYsINC30LDRgdC70YPQttC10L3QuNC5ICDQtNGW0Y/RhyDQvNC40YHRgtC10YbRgtCyINCj0LrRgNCw0ZfQvdC4LCDQstC40LrQu9Cw0LTQsNGHLdC80LXRgtC+0LTQuNGB0YIg0JvRjNCy0ZbQstGB0YzQutC+0LPQviDQtNC10YDQttCw0LLQvdC+0LPQviDQvNGD0LfQuNGH0L3QvtCz0L4g0LvRltGG0LXRjiDRltC80LXQvdGWINChLiDQmtGA0YPRiNC10LvRjNC90LjRhtGM0LrQvtGXLCDQv9C+0YfQtdGB0L3QuNC5INCw0LzQsdCw0YHQsNC00L7RgCDQvNGD0LfQuNGH0L3QvtGXICDQutGD0LvRjNGC0YPRgNC4ICDQn9C+0LvRjNGJ0ZZcIi8+XHJcblxyXG4gICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uNH1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwi0KDQsNC50YIg0IYu0KEuLCDQutCw0L3QtNC40LTQsNGCINC/0LXQtNCw0LPQvtCz0ZbRh9C90LjRhSDQvdCw0YPQuiwgINC90LDRg9C60L7QstC40Lkg0YHQv9GW0LLRgNC+0LHRltGC0L3QuNC6INC70LDQsdC+0YDQsNGC0L7RgNGW0Zcg0LXRgdGC0LXRgtC40YfQvdC+0LPQviDQstC40YXQvtCy0LDQvdC90Y8g0YLQsCDQvNC40YHRgtC10YbRjNC60L7RlyAg0L7RgdCy0ZbRgtC4ICDQhtC90YHRgtC40YLRg9GC0YMgINC/0YDQvtCx0LvQtdC8INCy0LjRhdC+0LLQsNC90L3RjyAg0J3QsNGG0ZbQvtC90LDQu9GM0L3QvtGXICDQsNC60LDQtNC10LzRltGXICDQv9C10LTQsNCz0L7Qs9GW0YfQvdC40YUgINC90LDRg9C6INCj0LrRgNCw0ZfQvdC4LlwiLz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb241fVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCLQntGB0YLQsNC/0YfRg9C6INCcLiDQnC4sINC00L7RhtC10L3RgiDQutCw0YTQtdC00YDQuCAg0LPRgNC4INC90LAgINC80YPQt9C40YfQvdC40YUg0ZbQvdGB0YLRgNGD0LzQtdC90YLQsNGFINCG0L3RgdGC0LjRgtGD0YLRgyAg0LzQuNGB0YLQtdGG0YLQsiAg0KDQlNCT0KMuXCIvPlxyXG5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjd9IHRleHQ9XCLQl9Cw0YXQvtC00Y/QutGW0L0g0J4u0JIuLCDQtNC+0YbQtdC90YIg0LrQsNGE0LXQtNGA0Lgg0LXRgdGC0YDQsNC00L3QvtGXINC80YPQt9C40LrQuCDQhtC90YHRgtC40YLRg9GC0YMgINC80LjRgdGC0LXRhtGC0LIgINCg0JTQk9CjLlwiLz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb244fVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9J9CS0LjRiNC90LXQstGB0YzQutCwINCGLtCfLiwg0LLQuNC60LvQsNC00LDRhyDQstC40YnQvtGXINC60LDRgtC10LPQvtGA0ZbRlywg0LPQvtC70L7QstCwINGG0LjQutC70L7QstC+0Zcg0LrQvtC80ZbRgdGW0ZcgXCLQpNC+0YDRgtC10L/RltCw0L3QvlwiINCg0ZbQstC90LXQvdGB0YzQutC+0LPQviDQvNGD0LfQuNGH0L3QvtCz0L4g0YTQsNGF0L7QstC+0LPQviDQutC+0LvQtdC00LbRgyDQoNCU0JPQoy4nLz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb24zfSB0ZXh0PVwi0IbQstCw0L3QvtCy0LAg0Jsu0IYuLCDQstC40LrQu9Cw0LTQsNGHINC/0LXRgNGI0L7RlyDQutCw0YLQtdCz0L7RgNGW0Zcg0JrQlyAn0JvRg9GG0YzQutCwINC80YPQt9C40YfQvdCwICDRiNC60L7Qu9CwIDMnLlwiLz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb242fVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCLQnNCw0YDRhtC10LLQsCDQli7Qny4sINGB0YLQsNGA0YjQuNC5INCy0LjQutC70LDQtNCw0YcsINC30LDQstGW0LTRg9GO0YfQsCDRhNC+0YDRgtC10L/RltCw0L3QvdC40Lwg0LLRltC00LTRltC70L7QvCDQoNGW0LLQvdC10L3RgdGM0LrQvtGXINC00LjRgtGP0YfQvtGXINC80YPQt9C40YfQvdC+0Zcg0YjQutC+0LvQuCDihJYxINGW0LzQtdC90ZYg0JwuINCb0LjRgdC10L3QutCwLlwiLz5cclxuXHJcblxyXG4gICAgICAgICAgICAnLz5cclxuICAgICAgICA8L1BlcnNvbkluZm9TZWN0aW9uPlxyXG4gICAgPC9XcmFwcGVyPik7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1Jlc3VsdHNGaWx0ZXJ9IGZyb20gXCIuL1Jlc3VsdHNGaWx0ZXJcIjtcclxuaW1wb3J0IHtDYXJkfSBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1JlZ3VsYXJIZWFkZXJ9IGZyb20gXCIuL1JlZ3VsYXJIZWFkZXJcIjtcclxuaW1wb3J0IHtJbmZvUGFnZX0gZnJvbSBcIi4vSW5mb1BhZ2VcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLzExNjMwMjMucG5nXCI7XHJcblxyXG5jb25zdCBNYWluU2VjdGlvbkZsZXggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7bG9nb31cIik7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpblNlY3Rpb24gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2FyZHMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXJkcyk7XHJcbiAgICBjb25zdCBpc0RhdGFJblBsYWNlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuaXNEYXRhSW5QbGFjZSk7XHJcbiAgICBjb25zdCBjYXJkQ291bnQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXJkQ291bnQpO1xyXG4gICAgY29uc3Qgc2VjdGlvbnNGb3JGaWx0ZXIgPSBbYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XCJgLCBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcImAsIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXCJgLGDQo9GB0ZYg0LLRltC00LXQvmAsYNCf0YDQviDQutC+0L3QutGD0YDRgWBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFJlZ3VsYXJIZWFkZXIgY2FyZENvdW50PXtjYXJkQ291bnR9Lz5cclxuICAgICAgICAgICAgPFJlc3VsdHNGaWx0ZXIgc2VjdGlvbnM9e3NlY3Rpb25zRm9yRmlsdGVyfS8+XHJcbiAgICAgICAgICAgIHtpc0RhdGFJblBsYWNlID8gKFxyXG4gICAgICAgICAgICAgICAgPE1haW5TZWN0aW9uRmxleD5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FyZHMubWFwKGNhcmQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y2FyZC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9Vcmw9e2NhcmQudmlkZW9Vcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb3NpdGlvbj17Y2FyZC5jb21wb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2FyZC5pZC4kb2lkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9PC9NYWluU2VjdGlvbkZsZXg+KSA6ICg8SW5mb1BhZ2UvPil9PC8+KTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtBaU91dGxpbmVGaWxlU2VhcmNoLCBIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zXCI7XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuaW5wdXRgXHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgd2lkdGg6IDE1JTtcclxuIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gIH1gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaW5wdXRDb2xvciB8fCBcInBhbGV2aW9sZXRyZWRcIn07XHJcbmA7XHJcblxyXG5cclxuY29uc3QgSW5wdXRTdHlsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRXcmFwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuYFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuYDtcclxuXHJcbmNvbnN0IEVycm9yID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtgXHJcblxyXG5jb25zdCBXYXJuID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogeWVsbG93O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtgXHJcblxyXG5leHBvcnQgY29uc3QgUmVndWxhckhlYWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaEZpZWxkID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmVycm9yKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHtoZWlnaHQsIHdpZHRofSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xyXG4gICAgICAgIGxldCBzdHIgPSBTdHJpbmcoc2VhcmNoRmllbGQuY3VycmVudC52YWx1ZSk7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPCAzIHx8IHN0ci5pbmNsdWRlcyhcIiBcIikpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiRVJST1JcIiwgbXNnOiBcItCR0YPQtNCx0Ywg0LvQsNGB0LrQsCDQstCy0LXQtNGW0YLRjCDQsdGW0LvRjNGI0LUgMyDRgdC40LzQstC+0LvRltCyINGWINC90LUg0LLQuNC60L7RgNC40YHRgtC+0LLRg9C50YLQtSDQv9GA0L7QsdGW0LtcIn0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIlNFQVJDSFwiLCBxdWVyeTogc3RyfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBoYW5kbGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPElucHV0V3JhcGVyPlxyXG4gICAgICAgICAgICAgICAgPElucHV0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4+PEFpT3V0bGluZUZpbGVTZWFyY2gvPtCf0L7RiNGD0Log0LLRltC00LXQviDQv9C+INC/0YDRltC30LLQuNGJ0YMg0YPRh9Cw0YHQvdC40LrQsCA8L1N0eWxlZFNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfSByZWY9e3NlYXJjaEZpZWxkfSB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTRltGC0Ywg0L/RgNGW0LfQstC40YnQtSDRg9GH0LDRgdC90LjQutCwLi4uXCIgaW5wdXRDb2xvcj1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cItCf0L7RiNGD0LpcIiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17aGFuZGxlcn0vPlxyXG4gICAgICAgICAgICA8L0lucHV0V3JhcGVyPlxyXG4gICAgICAgICAgICB7ZXJyb3IgIT09IFwiXCIgPyA8RXJyb3I+PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz57ZXJyb3J9PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz48L0Vycm9yPiA6IG51bGx9XHJcbiAgICAgICAgICAgIHtwcm9wcy5jYXJkQ291bnQgPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgPFdhcm4+PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz7QstGW0LTQtdC+INC90LUg0LfQvdCw0LnQtNC10L3RljxIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZS8+PC9XYXJuPiA6IG51bGx9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCwge2tleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtGYUZvbGRlciwgRmFVbml2ZXJzaXR5fSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XHJcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zXCI7XHJcblxyXG5jb25zdCBGaWx0ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO2A7XHJcblxyXG5jb25zdCBGaWx0ZXJTZWN0aW9uID0gc3R5bGVkKEZpbHRlckNvbnRhaW5lcilgXHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERpdlRoaW5MaW5lID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IGdyYXkgc29saWQgMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgaGVpZ2h0OiAyJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBncm93XzAgPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xyXG4gIH1cclxuICAwJSB7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ3Jvd18xID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcclxuICB9XHJcbiAgMCUge1xyXG4gICAgbGVmdDogMXB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBUaGluTGluZUlubmVyRGl2ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XHJcbiAgbGVmdDogJHtwcm9wcyA9PiBwcm9wcy5sZWZ0fTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBoZWlnaHQ6IDElO1xyXG4gIGFuaW1hdGlvbjogJHtwcm9wcyA9PiAocHJvcHMuYW5pbWF0aW9uICUgMiA9PT0gMCkgPyBncm93XzAgOiBncm93XzF9IDAuNXMgbGluZWFyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlc3VsdHNGaWx0ZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2VjdGlvbnMsXSA9IHVzZVN0YXRlKHByb3BzLnNlY3Rpb25zKTtcclxuXHJcbiAgICBjb25zdCBbcmVkTGluZVdpZHRoLCBzZXRSZWRMaW5lV2lkdGhdID0gdXNlU3RhdGUoXCIxMHB4XCIpO1xyXG4gICAgY29uc3QgW3JlZExpbmVMZWZ0LCBzZXRSZWRMaW5lTGVmdF0gPSB1c2VTdGF0ZShcIjEwcHhcIik7XHJcbiAgICBjb25zdCBbYW5pbWF0aW9uLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICBjb25zdCBtYXJrZWRTZWN0aW9uUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gICAgLy9oYW5kbGluZyByZWRMaW5lIG9uIHJlc2l6ZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZVJlbmRlclJlZExpbih7dGFyZ2V0Om1hcmtlZFNlY3Rpb25SZWYuY3VycmVudH0pXHJcbiAgICB9LCBbd2lkdGhdKTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVSZW5kZXJSZWRMaW4oZXZlbnQpIHtcclxuICAgICAgICBtYXJrZWRTZWN0aW9uUmVmLmN1cnJlbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTZWN0aW9uV2lkdGggPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTZWN0aW9uTGVmdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gMTA7XHJcbiAgICAgICAgc2V0UmVkTGluZVdpZHRoKGN1cnJlbnRTZWN0aW9uV2lkdGggKyBcInB4XCIpO1xyXG4gICAgICAgIHNldFJlZExpbmVMZWZ0KGN1cnJlbnRTZWN0aW9uTGVmdCArIFwicHhcIik7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBhbmltYXRpb24gKyAxO1xyXG4gICAgICAgIHNldEFuaW1hdGlvbihjb3VudGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkZpbHRlclNlY3Rpb25DbGljayhzZWxlY3RlZFNlY3Rpb24sIGV2ZW50KSB7XHJcbiAgICAgICAgcmVSZW5kZXJSZWRMaW4oZXZlbnQpO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFNlY3Rpb25TdHJpbmcgPSBzZWxlY3RlZFNlY3Rpb24uc2VjdGlvbjtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFNlY3Rpb25TdHJpbmcpO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRTZWN0aW9uU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGNhc2UgYNCj0YHRliDQstGW0LTQtdC+YDpcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIkFMTFwifSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImA6XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJncm91cC0xXCJ9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFwiYDpcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTJcIn0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcImA6XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJncm91cC0zXCJ9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJJbmZvUGFnZShldmVudCkge1xyXG4gICAgICAgIHJlUmVuZGVyUmVkTGluKGV2ZW50KTtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJJTkZPX1BBR0VcIn0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZW5kZXJlZFNlY3Rpb25zID0gc2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXHJcbiAgICAgICAgc2VjdGlvbiA9PT0gXCLQn9GA0L4g0LrQvtC90LrRg9GA0YFcIiA/XHJcbiAgICAgICAgICAgIDxGaWx0ZXJTZWN0aW9uICBvbkNsaWNrPXtyZW5kZXJJbmZvUGFnZX0ga2V5PXtzZWN0aW9ufT4gPEZhVW5pdmVyc2l0eS8+e3NlY3Rpb259IDwvRmlsdGVyU2VjdGlvbj5cclxuICAgICAgICAgICAgOiA8RmlsdGVyU2VjdGlvbiAgcmVmPXttYXJrZWRTZWN0aW9uUmVmfSBvbkNsaWNrPXsoZSkgPT4gb25GaWx0ZXJTZWN0aW9uQ2xpY2soe3NlY3Rpb259LCBlKX0ga2V5PXtzZWN0aW9ufT4gPEZhRm9sZGVyLz57c2VjdGlvbn08L0ZpbHRlclNlY3Rpb24+XHJcbiAgICApKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTdHlsZWRSZXN1bHRzRmlsdGVyV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJDb250YWluZXIgY2hpbGRyZW49e3JlbmRlcmVkU2VjdGlvbnN9Lz5cclxuICAgICAgICAgICAgPC9TdHlsZWRSZXN1bHRzRmlsdGVyV3JhcHBlcj5cclxuICAgICAgICAgICAgPERpdlRoaW5MaW5lPjxUaGluTGluZUlubmVyRGl2IHdpZHRoPXtyZWRMaW5lV2lkdGh9IGxlZnQ9e3JlZExpbmVMZWZ0fSBhbmltYXRpb249e2FuaW1hdGlvbn0vPjwvRGl2VGhpbkxpbmU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9CG0LLQsNC90L7QstCwINCbLtCGLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0JLQuNGI0L3QtdCy0YHRjNC60LAtMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9CX0LDRhdC+0LTRj9C60ZbQvS0xLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0JrRg9C30L3RlNGG0L7QstCwLTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/QnNCw0YDRhtC10LLQsC0xLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0J7RgdGC0LDQv9GH0YPQuiDQnC4g0JwucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/QoNCw0LnRgiDQhi7QoS5wbmdcIjsiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93RGltZW5zaW9ucygpIHtcclxuICAgIGNvbnN0IHsgaW5uZXJXaWR0aDogd2lkdGgsIGlubmVySGVpZ2h0OiBoZWlnaHQgfSA9IHdpbmRvdztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VXaW5kb3dEaW1lbnNpb25zKCkge1xyXG4gICAgY29uc3QgW3dpbmRvd0RpbWVuc2lvbnMsIHNldFdpbmRvd0RpbWVuc2lvbnNdID0gdXNlU3RhdGUoZ2V0V2luZG93RGltZW5zaW9ucygpKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgICAgICAgc2V0V2luZG93RGltZW5zaW9ucyhnZXRXaW5kb3dEaW1lbnNpb25zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB3aW5kb3dEaW1lbnNpb25zO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xyXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0JykpO1xyXG4iLCJpbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCdcclxuXHJcbmNvbnN0IGdyb3VwMSA9IGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlwiYDtcclxuY29uc3QgZ3JvdXAyID0gYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXCJgO1xyXG5jb25zdCBncm91cDMgPSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFwiYDtcclxuXHJcbmNvbnN0IG15Q2FyZHMgPSBbe1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2E1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkNCz0YDQsNGC0ZbQvdCwINCh0YLQsNC90ZbRgdC70LDQsiwgOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC7Qk9C70ZbQvdC60LAuINCf0L7Rh9GD0YLRgtGPLCAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiDQotCw0L3QvtC6XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOTR5dF9zS0M1RXQzcjQ5ekNFUnNkQlplRFFnWS1HX2kvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNhNlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQsNC70ZbQs9GD0YDQsCDQktCw0YDQstCw0YDQsCwgOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC7Qm9C10LzRltGI0LrQvi4g0JrQvtC70L7QvNC40LnQutCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYzZoVElxRGwtY0FGM0JyM2wxYzJ1d3FGWnNMVlNQVHYvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNhN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQsNC70ZbQs9GD0YDQsCDQktCw0YDQstCw0YDQsCwgOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi7QnNCw0LrRgdGW0LzQvtCyLiAnJ9CX0LDQtNC30LXRgNC60LDQu9C70Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTVZcjZReG00cnN0RE9NVTJ2R241SndxNVZmVXBOMlNEL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYThcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0LDRgdC40LvQtdCy0YHRjNC60LAg0KXRgNC40YHRgtC40L3QsCw3INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7Qk9GW0LvQu9C+0LouJyfQodCw0LzQvtGC0L3RjyDQsdCw0LvRjNC90LAg0LfQsNC70LAnJy4gMinQoi7QoNC+0YHRgtC40LzQsNGI0LXQvdC60L4uJyfQp9Cw0LrQu9GD0L0nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUd0eFVLdVVrTEtBbmg1b0NmOUZsdWlVVFFvSkNUYk1NL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYTlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0L7Qu9C40L3QtdGG0Ywg0J7Qu9C10LrRgdCw0L3QtNGALCA4INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0JrQvtC70L7QtNGD0LEuINCQ0YDQutCw0L0uIDIp0KQu0KDQuNCx0ZbRhtGM0LrQuNC5LiAnJ9Cg0LXQs9C+0YLRg9GI0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX0NPUGVQendkZ1M3VV9PakV4T3B2OG5vejFtaVRlOGMvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNhYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQsNC70LDQs9Cw0L0g0JrQsNGC0LXRgNC40L3QsCwgOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiDQotC10LzQsCDQtyDQstCw0YDRltCw0YbRltGP0LzQuDsgMinQky7QmtGD0YjQvdCw0YDQtdC90LrQvi4gJyfQnNC10LvQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb0JsVWZYV3FsaDV1RHNERkNYYkhnYzdYR2lBSkdiTEgvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNhYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQtdGA0LDRgdC40LzQtdC90LrQviDQntC70LXQutGB0LDQvdC00YDQsCw5INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JIu0KDQsNGH0LrQvtCy0YHRjNC60LjQuS4g0KLQvtC60LDRgtC40L3QsDsyKdCSLtCa0L7RgdC10L3QutC+LiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFER25zU1FHbEJ1OFhfb0RQdDNZS3RLbWlWelYtRzNxSi9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2FjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9C+0LvQvtC00L7QstGB0YzQutCwINCh0L7RhNGW0Y8sNyDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0IYu0JLQsNC90YXQsNC70Ywu0KDQvtC90LTQvjsyKdCcLtCU0YDQtdC80LvRjtCz0LAuJyfQktC10YHQtdC70LAg0LPRgNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEyS3V0ai1vd3BzcjhoZWxybV9rRlpoMXlRd01qRUM3QS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2FkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9C+0LvRg9CxINCQ0LvRltC90LAsIDkg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCDQhtGHLiwgMinQkS7QlNCy0LDRgNGW0L7QvdCw0YEuINCf0YDQtdC70Y7QtNGW0Y9cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1d2hLTUtkSlpJaFJ6bk0zVlU1bVRxRXVLeHhUZXNhTy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2FlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9GA0LjQs9C+0YAn0ZTQstCwINCa0LDRgtC10YDQuNC90LAsIDgg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Cg0LDQvdC+0LonJzsyKdCGLtCa0L7RgNC+0LvRjNC60L7QstCwLicn0JPQvtGA0L7QsdGH0LjQuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYWlNdjVMd1lWOW0yd3otU0pNR254ZlVxSVJUOU1fRXcvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNhZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JTQsNC90Y7QuiDQhNC70LjQt9Cw0LLQtdGC0LAsNyDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JvRjtCx0LDRgNGB0YzQutC40LkuJyfQotCw0L3RhtGO0LLQsNC70YzQvdCwJyc7IDIpINCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS7QktCw0LvRjNGBXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdlRrX21BQl9FQ2g5VkR3UjZFTWFzWTF5MjFLV3JTWUgvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JTRgNC+0LPQsNC9ICDQnNGW0LvQsNC90LAsIDUg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCc0LDQudGU0YAuICcn0JLQtdGB0LXQu9CwINCz0YDQsCcnOyAyKdCULtCR0LDRiNGC0LXQudC9LiAnJ9CS0LDQu9GM0YEg0YHQu9C+0L3QtdC90Y/RgicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWGIwZ0lnRnlDbkx1Q3hqbjVrbGFlUTBMbDlEc2tSUHovcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JTRgNC+0LfQtNC+0LLQsCDQhNC70LjQt9Cw0LLQtdGC0LAsIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUu0JzQtdC90YPQtdGCLiAyKdCTLtCa0LvQsNGB0YHQtdC9LiDQn9C+0LvRjNC60LBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyNV8xOHBSN0JMeERTREVuTUQ3ckhOR2pSOXppRWlHbi9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2IyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQl9Cx0ZbRgCDQnNCw0YDRltGPLDgg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCT0LXQtNGW0LrQtS4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsINCGINGHLiwyKdCgLtCo0YPQvNCw0L0uJyfQn9C10YDRiNCwINCy0YLRgNCw0YLQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xXzdxbjNmVHV0ZEtHY0dkYmd2MTNyS29rSjhqeGdrM2EvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiM1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjNC60ZbQsiDQntC70LXQutGB0LDQvdC00YDQsC4gOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JTRltCw0LHQtdC70LvRli4g0KHQutC10YDRhtC+OyAyKdCeLtCT0LXQtNGW0LrQtS4g0JzQsNC70LXQvdGM0LrQsCDQvyfRlNGB0LBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF2WWVWa1JhVjFtYjMzdUoxREdNcjIwcW9pa0ZDcjlBeS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2I0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JzQsNGA0ZbQsNC8LCA4INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCc0LDQudC60LDQv9Cw0YAuICcn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0YHQvtC70Ywg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJSbExNSmpvV3dUVnVwN192Vk1ENEQzbmwyWS1sc3BPL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYjVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQnNCw0YDRltCw0LwuIDgg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JrQuNGA0LXQudC60L4uICcn0KHRgtGA0LjQsS3RgdC60L7QuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSW1wUHE5bmNiTWg1VDFTY0FIZkRtejU3QkRsTFpDRjIvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiNlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0IbRgdGD0L/QvtCy0LAg0JDQu9GW0YHRltGPLCA4INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0KDQtdC50L3QtdC60LUuINCT0LDQstC+0YIsOzIp0Jku0KEu0JHQsNGFLiDQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8g0LTQviDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMGc5Q0NKb1hSemVHOENpRmhnbkVCelRRQkxJV0RhbkEvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtCy0LDQu9C10L3QutC+INCS0LDRgNCy0LDRgNCwLDgg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCT0LXRgtCw0LvQvtCy0LAuJyfQoNCw0L3QvtC6INCyINC70ZbRgdGWJyc7MinQki7Qn9C+0LTQstCw0LvQsC4gJyfQmtCw0L/RgNC40LfRg9C70Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVMzOF9vRUNPQm83S0dEVjFhekpVeDN6T1l3Z1FFUUlWL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYjhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7RgNC10L3RltCy0YHRjNC60LAg0JTQsNGAJ9GPLCA5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KAu0JLQsNC90LTQsNC7Licn0JLQvtC00L7Qs9GA0LDQuScnOzIp0J8u0JfQsNGF0LDRgNC+0LIuJyfQl9C90LDQudC+0LzQuNC5INGB0LjQu9GD0LXRgicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOUNBelBDYVdyQU5fU1d6YUpGZEVweFBJT1F3LXJmTFUvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGB0YLQtdC90LrQviDQr9GA0L7RgdC70LDQstCwLCA3INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCa0L7RgdC10L3QutC+LiDQnNC10LvQvtC00ZbRj1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNkZFljb3lnVGN0b2FiR1FGN3BUMnBvUnZDdXBWR19jL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYmFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7RgdGC0LXQvdC60L4g0K/RgNC+0YHQu9Cw0LLQsC4gNyDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QmdGU0L3RgdC10L0uJyfQp9Cw0YDRltCy0L3QuNC5INGC0LDQvdC+0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXVCMjliVFBFaVlkdWdKZkxPWmw0U1FHckZZOW5RcHItL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYmJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCb0LDRgtC60L7QstGB0YzQutCwINCE0LvQuNC30LDQstC10YLQsCw5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQvtGB0LXQvdC60L4uINCy0LDQu9GM0YE7IDIp0J4u0JPRgNC10YfQsNC90ZbQvdC+0LIuJyfQnNGW0Lkg0LrQvtC90LjQuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNllBdy1xN2Y4RjlKQlBtZm44dEVrcEpUODFKN0VhaEEvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNiY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JvRltGI0LzQsNC9INCU0LDRgNC40L3QsCw5INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7Qn9C+0LTQstCw0LvQsC4nJ9Cc0LDRgNGILdCz0YDQvtGC0LXRgdC6JycuIDIp0KEu0JzQsNC50LrQsNC/0LDRgC7QmtC+0LvQuNGB0LrQvtCy0LBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOc1d6M1RSMFNLaVR0Y05DQUplMDU5YmhoRm9tdF9ORS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2JkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNCw0LPQvtC70LAg0KHQvtGE0ZbRjywgOCDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCvLtCR0L7QsdCw0LvRltC6Licn0KHQstGP0YLQutC+0LLQsCDQv9C+0LvRjNC60LAnJzsgMinQhi7QkdC10YDQutC+0LLQuNGHLiDQodC+0L3QsNGC0LjQvdCwINGB0L7Qu9GMINC80LDQttC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFndUF4czVnX3diR3ZfdHdxaXlwbzBlOEZIT3d1bS1JaC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2JlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNCw0LfRg9GA0LXQvdC60L4g0JzQsNC50Y8sIDgg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC4g0JHQvtCx0LXRgC4gJyfQkNCz0LXQvdGCINClJycsIDIp0IYu0IbQvtGA0LTQsNC9LiAnJ9Cf0L7Qu9GO0LLQsNC90L3RjyDQvdCwINC80LXRgtC10LvQuNC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUllMVdDUXBnUHVMWWRLTnhWR3VMa2VJVm5ZSk5aSjlUL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYmZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDRgNGH0LXQvdC60L4g0ITQu9C40LfQsNCy0LXRgtCwLCA5INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUu0LzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPINC00L4g0LzRltC90L7RgDsgMinQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0JHQsNCx0LAg0K/Qs9CwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFaSm80R1VMWjlzZmNVdUFwRjVqeW9ISVVWX0lLQVZyZy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2MwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNCw0YDRh9GD0Log0JzQsNC60YHQuNC8LCA4INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCkLiDQqNC/0ZbQvdC00LvQtdGALiDQodC+0L3QsNGC0LjQvdCwLCDRgtCyLjE1NyDihJY0XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xc0M3TVVqY2tucm5aWlo1aGZNQ1hiU3ZzMzZLQTNwcFYvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNGA0YfRg9C6INCc0LDQutGB0LjQvC4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCT0ZbQu9C70L7Qui4gJyfQmtCw0L/RgNGW0YfRltGU0YLRgtC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZZEFpaHZBUWtDVDhiYnlXNDRwUWkyaVpobVgxYzNLei9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2MyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC+0YLRg9C30LrQuNC90LAg0JvRltC00ZbRjywgOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QkdGW0LvQsNGH0LXQvdC60L4uINCj0LrRgNCw0ZfQvdGB0YzQutC40Lkg0YLQsNC90L7QulwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJwTzlkSEFjYlA4S2xhV1RfMW5YWFFpWmVidUQ4RjBwL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYzNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0L7RgtGD0LfQutC40L3QsCDQm9GW0LTRltGPLDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JzQvtGG0LDRgNGCLtCc0LXQvdGD0LXRglwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNfbXhBVTY1VnZ2dmZpUG9SUXNjS1Iwb1VEV3BIRFF0L3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYzRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCd0L7QstC+0YHRltC70YzRgdGM0LrQsCDQmtCw0YLQtdGA0LjQvdCwLCA3INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli7QodC+0L3QsNGC0LjQvdCwINGC0LIuMzYsINCGLdCG0IbQhtGHLiwgMinQhi7QkdC10YDQutC+0LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWTcyQ0ZMT01QaWJ3VFVQZ1dPbXNRSDNZSlB2aUJqRGEvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J7Qu9GM0YXQvtCy0YHRjNC60LAg0JDQvdGW0YLQsCwgOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQhi7Qn9Cw0LLQu9GW0LouICcn0KHQvdGW0LbQuNC90LrQuCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcnMtVmdGTW5JWVpWbTlrT2pOaDZGVGxfUDBDQURSQjEvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjNlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J7Qu9GM0YXQvtCy0YHRjNC60LAg0JDQvdGW0YLQsCwgOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnS4g0JrQsNGA0L/QtdC90LrQvi4g0JXRgtGO0LQg0YHRliDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa1MzQnFRdzQtbXNNb3puTzNOel9pV2M1eXRsSk9GVG0vcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J7RgdGC0LDQv9GH0YPQuiDQmtCw0YDRltC90LAuIDgg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCT0ZbQu9C70L7QuiAnJ9CU0LfQstGW0L3QvtGH0LrQuCcnOyAyKdCGLtCl0YPRgtC+0YDRj9C90YHRjNC60LjQuS4nJyfQktC+0LPQvdGW0LLQvtGH0LrQsC3RgdGC0YDQuNCx0YPQvdGW0LLQvtGH0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNlJBY04yTzZrdW5LWkFGcmJnQkhzRU5pWmc5aUtzNEcvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J7RhdGA0ZbQvSDQr9GA0LXQvNCwLCA4INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4g0J3QvtCy0LXQu9CwLiAyKdChLtCc0LDQudC60LDQv9Cw0YAu0KLQvtC60LDRgtC40L3QsFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXp3MUpLMEo0ZDhIay16bmJ2LTVvRG5hLXFMM2N3UkVQL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzYzlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0LDQstC70LXQvdC60L4g0KHRgtC10YTQsNC90ZbRjywgNyDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCb0Y7QsdCw0YDRgdGM0LrQuNC5LtCf0ZbRgdC90Y87IDIpINCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4nJ9Ca0LvQvtGD0L3QuCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSW1ud0pqMkRlcXotVEpmdlhBQ0NyWnBpWk5UM0JuS0gvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/QsNC90YzQutC+0LLQsCDQkNC90L3QsCwgOCDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4g0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPINC00L4g0LzRltC90L7RgDsgMinQmy7QqNGD0LrQsNC50LvQvi4g0IbQvdGC0LXRgNC80LXRhtC+XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeXJBSHI2aTE3TlNoUDVxYUltUG5XeC14SlFqQ01NeTIvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/QsNGA0YTRjNC+0L3QvtCyINCU0LzQuNGC0YDQviwgOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J0u0JLQu9Cw0LTQuNC60ZbQvdCwLdCR0LDRh9C40L3RgdGM0LrQsC4nJ9Cp0L7RgdGMINGB0YPQvNC90LUnJzsgMinQni7Qk9C10LTRltC60LUu0KLQsNC90LXRhtGMXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTkRkdzU3UnNybUxyRV95V1NHMHVGSlhFaldjR3FHbVIvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNjY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/QvtCz0L7RgNGU0LvQvtCyINCQ0YDRgtC10LwsIDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4g0JzQtdC90YPQtdGCOyAyKdCdLtCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiDQmtC+0LvQvtC80LjQudC60LBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuZTg2aU0tTlVzNk5jaW9Cc3ZVamZRYTZNbjdjU0FSNy9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2NkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9GD0LfQsNC90L7QstCwINCc0LDRgNGW0Y8sOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KMuINCT0ZbQu9C70L7Qui4gJyfQmtC+0YDQvtC70ZbQstGB0YzQutC40Lkg0LzQtdC90YPQtdGCJyc7IDIp0IYu0IbQvtGA0LTQsNC9LiDCq9Cf0L7Qu9GO0LLQsNC90L3RjyDQvdCwINC80LXRgtC10LvQuNC60LDCu1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU9HU19mcXpKdmJCN2FOUHJleHdxREs1eDBscy0yMENDL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzY2VcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0LXQt9C90ZbQuiDQotC10YLRj9C90LAsIDkg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCi0L7RgNC+0L/QvtCy0LAuINCS0LDRgNGW0LDRhtGW0ZcgJyfQotGA0Lgg0L/QvtGA0L7RgdGPJycsMinQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuICcn0JzQsNC70LXQvdGM0LrQuNC5INC20L7QvdCz0LvQtdGAJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4R3hOVFR0V3JoZE91Nlk3R3VlVUFnR1h2am9MbE1CbC9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2NmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQoNC40LHQsNC6INCQ0L3QsNGB0YLQsNGB0ZbRjyw4INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSku0JzQtdC70LDRgNGC0ZbQvS4nJ9Cg0LDQvdC+0LonJywyKdCcLtCc0LDQudGU0YAuJyfQndC10LfQstC40YfQsNC50L3QsCDQv9GA0LjQs9C+0LTQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdXptVnFGVm5uUWFJR1g3bzNILTd0TmUwa3AxWmlVdlAvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDRltC/0L3QuNC5INCR0L7Qs9C00LDQvSwgOCDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCGLiDQkdC10YDQutC+0LLQuNGHLiDQktCw0YDRltCw0YbRltGXOyAyKdCULiDQoNC+0YPQu9GWLicn0JIg0LrRgNCw0ZfQvdGWINCz0L3QvtC80ZbQsicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUWxyMV8tcEZBbExJaXhLa2h4Mi1aeHhFWVpoQVo5WjcvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDQvtC80LDQvdGH0LXQvdC60L4g0JXQu9C40YHQtdC5LCA4INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Kgu0JPRg9C90L4uJyfQnNCw0YDRiCDQvNCw0YDRltC+0L3QtdGC0L7QuicnOzIpINCeLtCT0YDQtdGH0LDQvdGW0L3QvtCyLicn0J3QtdC30LLQuNGH0LDQudC90LAg0L/RgNC40LPQvtC00LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlJLXpqcTRRaW1ETDlUTEU1QlJZdXJtdUFMMTZmU2NVL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZDJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LDQudGH0YPQuiDQr9GA0L7RgdC70LDQstCwLCA5INGA0L7QutGW0LIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCiLiDQnNCw0LrRgdC40LzQvtCyLicn0JHQsNCx0LAg0K/Qs9CwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYNUM3a2ZOZDNRbG9abDBUQXZOX0FRaDAtcVh0cFNTQi9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2QzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCw0LnRh9GD0Log0K/RgNC+0YHQu9Cw0LLQsCw5INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCaLtCg0L7Qu9C70ZbQvS4gJycg0KjQvtC60L7Qu9Cw0LTQvdC1INC/0LXRh9C40LLQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNnZZbV9FZER4Xy0zQlJISk15RDM1azNvQzRGMnRWNTYvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkNFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHRltGC0YjQsNGU0LLQsCDQl9Cw0YDQtdC80LAsOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLtCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGAOyAyKdCaLtCh0LvQvtC90ZbQvNGB0YzQutC40LkuICcn0JTRjtC50LzQvtCy0L7Rh9C60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUg2ZWRRdHNScDBfd2N1T1lSQUVoMWxmZlJ6MFRYdGliL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZDVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0ITQstCz0LXQvdGW0Y8sIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtCy0LDRgdC90LXQstGB0YzQutC40LkuJyfQlNGD0LzQutCwJycsIDIp0JQu0JDQu9C10LrRgdCw0L3QtNC10YAuICcn0JfQuNC80L7QstCwINGA0LDQv9GB0L7QtNGW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZMVzlFZXNQUHMxU1RpNmtRcFF4ZEVKemszUGduSFlqL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZDZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0YLRgNC40LnRgdGM0LrQsCDQkNC80LXQu9GW0Y8sIDgg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQki7QmtC+0YHQtdC90LrQvi4nJ9CU0L7RidC40LonJzsgMinQni7QkdGW0LvQsNGH0LXQvdC60L4uINCV0LrRgdC/0YDQvtC80YJcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwaDlPTlJHMlQ0MnZ4QWxXeTRBU1AwcWdhOElVMDJydi9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2Q3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodGC0YPQtNC30LjQvdGB0YzQutCwINCE0LvQuNC30LDQstC10YLQsCw3INGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JsuINCc0L7RhtCw0YDRgi4g0JzQtdC90YPQtdGCLCAyKdCjLiDQk9GW0LvQu9C+0LouICAgICAgJyfQntGB0ZbQvdC90ZbQuSDQtdGB0LrRltC3JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWZHNPYnViOVowRTdaTTFRWU1zZnFrYWxqbm5MUTJqZS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2Q4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodGD0YXQsNC9INCU0ZbQsNC90LAsIDgg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmy7QqNGD0LrQsNC50LvQvi7QktCw0YDRltCw0YbRltGXINC90LAg0YLQtdC80YMg0JIu0KjQsNGX0L3RgdGM0LrQvtCz0L47IDIp0KAu0KTRg9GH0YEuJyfQnNCw0LvQtdC90YzQutC1INGA0L7Qt9Cx0LjRgtC1INGB0LXRgNGG0LUnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUd1NXVjb0NHRmh5RW5NaDMtSURVSi11RjBUdWozN1VaL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZDlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0LXRgNC/J9GP0Log0JDQsNGA0L7QvSwgOSDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCGLtCR0LXRgNC60L7QstC40YcuINCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRg9C60YDQsNGX0L3RgdGM0LrRgyDRgtC10LzRgzsgMinQoi7QntGB0YLQtdC9LiAnJ9Cc0LDQu9C10L3RjNC60LjQuSDQtdC70YzRhCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWnRRYk5CQmdHbU96TVdubkhBRi03X0NCc1hrM0x3LTIvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQuNC80YfQtdC90LrQviDQndCw0LTRltGPLCA4INGA0L7QutGW0LIsIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0KjRgtC+0LPQsNGA0LXQvdC60L4uICcn0JzQtdGC0LXQu9C40LonJzsgMinQki7Qk9GW0LvQu9C+0LouICcn0JzRltGB0Y/Rh9C90LUg0YHRj9C50LLQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUFM5QUdIeUVEcXN0anFBMU1pRWJUa3A1ajFVdVNockcvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLRltGJ0LXQvdC60L4g0JLQtdGA0L7QvdGW0LrQsCwgNyDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiDQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8g0LTQviDQvNGW0L3QvtGAOy4gMinQmy4g0KjRg9C60LDQudC70L4uINCS0LDRgNGW0LDRhtGW0ZdcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGdHJqOWs1amhEeFZpNXVmaFhZM1RIa3dPSzhZMTJIbS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2RjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotC+0LTQvtGA0L7QstCwINCU0LDRj9C90LAsIDYg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QkdCw0YDQstGW0L3RgdGM0LrQuNC5LiAnJ9CX0LDQudGH0LjQuicnLCAyKdCcLtCb0Y7QsdCw0YDRgdGM0LrQuNC5LiAnJ9Cf0LvRj9GB0L7QstCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFQQXpJQnRqRzBOZnFhelVJMjVIc1JyRlZYakx5ejJCaS9wcmV2aWV3XCIsXHJcblxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSwge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5N2EwMmI2YmNmNzcyMDM4YjliM2RkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotC+0L3RltGU0LLQuNGHINCa0YHQtdC90ZbRjywgOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCh0L/RltC70ZbQvtGC0ZYnJ9CT0YPRhtGD0LvRj9GC0LAnJzsyKdCSLtCT0ZbQu9C70L7Qui4nJ9CjINGB0YLQsNGA0L7QvNGDINCS0ZbQtNC90ZYnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTE5dzN3bkhNcDZYTldTS0tyOVZKSW9ZalZJUDlNbEFPL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZGVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0Y7RgtGM0LrQviDQktC+0LvQvtC00LjQvNC40YAsIDkg0YDQvtC60ZbQsi4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QmtGD0LvQsNGDLtCh0L7QvdCw0YLQuNC90LAsINGC0LIuNTUg4oSWMzsgMinQoC7Qm9GW0YHQvtCy0LAuJyfQktC10YHQtdC70LjQuSDQvdCw0YHRgtGA0ZbQuScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYmctSEs3THAzVXdqR2szTUlUVGREOWVRN3JGZGh4MUgvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNkZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KTQtdGB0LXQvdC60L4g0JDQvdC90LAsOCDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCT0LXQtNGW0LrQtS7QodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwgMinQki7Qk9Cw0LLRgNC40LvRltC9LiAnJ9Ca0LDQv9GA0ZbRh9GH0ZbQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRWpycThaRVhCSnFfQU5mQWlZLTVqS0g3UnM1OGZMdUMvcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNlMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KfQvtGA0L3QtdC5INCv0L3QsCwgNyDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLiDQldC60YjRgtC10LnQvS4gJyfQmtCw0L/RgNC40Lcg0LPQvdC+0LzRltCyJyc7IDIp0KEu0K7RhNC10YDQvtCyLiDQndC+0LrRgtGO0YDQvVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWc2YkI3YXFXcHR3NWxMbkFpWGtsT0ZwUWw0WDBOTEtqL3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LCB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk3YTAyYjZiY2Y3NzIwMzhiOWIzZTFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCo0LrRg9GA0LrQviDQotC40LzQvtGE0ZbQuSwgOSDRgNC+0LrRltCyLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCo0L7Qv9C10L0uINCS0LDQu9GM0YEg0LvRjyDQvNGW0L3QvtGAOyAyKdCbLtCo0YPQutCw0LnQu9C+LiAnJ9CS0LXRgdC10LvQsCDQvNC+0LfQsNGX0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZUpKNDRaYmdUclVUZEgtdEJQS0d5YzFLXzBycnlqNF8vcHJldmlld1wiLFxyXG5cclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sIHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTdhMDJiNmJjZjc3MjAzOGI5YjNlMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0K7RgNGH0YPQuiDQr9C90LAsIDcg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQnC4g0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCwg0YLQsi4zNiDihJYxLCDQhiDRhy47IDIp0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJ9CS0YDQsNC90ZbRiNC90Y8g0LzQvtC70LjRgtCy0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9QVXVIMnF6YVFVTHlwdnV5M002US1mN3Z2aFpsQW54L3ByZXZpZXdcIixcclxuXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59XTtcclxuXHJcbmZ1bmN0aW9uIGZpbG1SZWR1Y2VyKHN0YXRlID0ge2NhcmRDb3VudDogbXlDYXJkcy5sZW5ndGgsIGNhcmRzOiBteUNhcmRzLCBpc0RhdGFJblBsYWNlOiB0cnVlLCBlcnJvcjogXCJcIn0sIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0lORk9fUEFHRSc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgY2FyZHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0FMTCc6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPiDQo9GB0ZYg0LLRltC00LXQvlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBteUNhcmRzLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbXlDYXJkcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ2dyb3VwLTEnOlxyXG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQuZ3JvdXAgPT09IGdyb3VwMSkuc2xpY2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkcyxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdncm91cC0yJzpcclxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzMSA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5ncm91cCA9PT0gZ3JvdXAyKS5zbGljZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZHM6IG5ld0NhcmRzMSxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzMS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnZ3JvdXAtMyc6XHJcbiAgICAgICAgICAgIGxldCBuZXdDYXJkczIgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQuZ3JvdXAgPT09IGdyb3VwMykuc2xpY2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkczIsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkczIubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdTRUFSQ0gnOlxyXG4gICAgICAgICAgICBsZXQgcSA9IGFjdGlvbi5xdWVyeS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgPiDQn9C+0YjRg9C6OiAke3F9YCk7XHJcbiAgICAgICAgICAgIGxldCBuZXdDYXJkczMgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYXJkTmFtZSA9IGNhcmQubmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvb2wgPSAoY2FyZE5hbWUuc3RhcnRzV2l0aChxKSB8fCBjYXJkTmFtZS5pbmNsdWRlcyhxKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGVzdGluZyAke2NhcmROYW1lfSBvbiBxdWVyeSAke3F9LCByZXN1bHQgaXMgJHtib29sfWApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdDYXJkczMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2FyZHM6IG5ld0NhcmRzMyxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzMy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZVxyXG4gICAgICAgICdFUlJPUidcclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGA+INCf0L7QvNC40LvQutCwYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5tc2dcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbXlDYXJkcyxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG15Q2FyZHMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2FyZFN0b3JlID0gY3JlYXRlU3RvcmUoZmlsbVJlZHVjZXIpO1xyXG5cclxuY2FyZFN0b3JlLnN1YnNjcmliZSgoKSA9PlxyXG4gICAgY29uc29sZS5sb2coXCJGaWxtc1N0b3JlIHN0YXRlIHdhcyBjaGFuZ2VkLCBudW1iZXIgb2YgY2FyZHM6IFwiICsgY2FyZFN0b3JlLmdldFN0YXRlKCkuY2FyZENvdW50KVxyXG4pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=