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
/*! exports provided: Button, Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
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
`;
const FilmInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  text-align: center;
  border: solid white 2px;
`;
const IframeBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].iframe`
  width: ${props => props.width};
  height: 480px;
  border: solid white 3px;
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  text-align: center;
  font-size: 25px;
  width: 80%;
  margin-left: 10%;
  color: white;
  transition: all 0.5s;

  :hover {
    font-size: 27px;
    color: darkred;
  }`;
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
  const [showIframe, setShowIframe] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [openVideoButtonName, setOpenVideoButtonName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Відкрити відео");

  const openVideoHandler = () => {
    setShowIframe(!showIframe);

    if (showIframe) {
      setOpenVideoButtonName("Відкрити відео");
    } else {
      setOpenVideoButtonName("Закрити відео");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilmWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilmInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    onClick: openVideoHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["AiFillPlaySquare"], null), openVideoButtonName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BsFillPersonFill"], null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["FaBookOpen"], null), " ", composition), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), showIframe ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IframeBox, {
    src: videoUrl,
    width: calculatedWidth
  }) : null);
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
    text: `Кузнєцова О.О.- голова журі, доктор філософії, кандидат педагогічних наук, професор кафедри  
                    музично- інструментального виконавства Харківського Національного педагогічного університету імені 
                    Г.Сковороди, заслужений діяч мистецтв України,  "Відмінник освіти України", відзначена орденом 
                    Міністерства культури  України "За досягнення в розвитку  культури  і мистецтв ", секретар 
                    Національної всеукраїнської музичної спілки, голова Асоціації піаністів  Національної  всеукраїнської 
                    музичної спілки,  президент Асоціації піаністів-педагогів України("EPTA" Ukraine), Віце- президент  
                    Асоціації піаністів-педагогів Європи "EPTA" London)`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    text: "\u0417\u0430\u043A\u043E\u043F\u0435\u0446\u044C \u041B.\u0421.- \u0433\u043E\u043B\u043E\u0432\u0430 \u0436\u0443\u0440\u0456, \u0437\u0430\u0441\u043B\u0443\u0436\u0435\u043D\u0438\u0439  \u0434\u0456\u044F\u0447 \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0438, \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447-\u043C\u0435\u0442\u043E\u0434\u0438\u0441\u0442 \u041B\u044C\u0432\u0456\u0432\u0441\u044C\u043A\u043E\u0433\u043E\r \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u043E\u0433\u043E \u043C\u0443\u0437\u0438\u0447\u043D\u043E\u0433\u043E \u043B\u0456\u0446\u0435\u044E \u0456\u043C\u0435\u043D\u0456 \u0421. \u041A\u0440\u0443\u0448\u0435\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u043E\u0457, \u043F\u043E\u0447\u0435\u0441\u043D\u0438\u0439 \u0430\u043C\u0431\u0430\u0441\u0430\u0434\u043E\u0440 \u043C\u0443\u0437\u0438\u0447\u043D\u043E\u0457  \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0438  \u041F\u043E\u043B\u044C\u0449\u0456"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_7__["default"],
    text: "\u0420\u0430\u0439\u0442 \u0406.\u0421., \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442 \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0456\u0447\u043D\u0438\u0445 \u043D\u0430\u0443\u043A,  \u043D\u0430\u0443\u043A\u043E\u0432\u0438\u0439 \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0456\u0457 \u0435\u0441\u0442\u0435\u0442\u0438\u0447\u043D\u043E\u0433\u043E \u0432\u0438\u0445\u043E\u0432\u0430\u043D\u043D\u044F\r \u0442\u0430 \u043C\u0438\u0441\u0442\u0435\u0446\u044C\u043A\u043E\u0457  \u043E\u0441\u0432\u0456\u0442\u0438  \u0406\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0443  \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0432\u0438\u0445\u043E\u0432\u0430\u043D\u043D\u044F  \u041D\u0430\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0457  \u0430\u043A\u0430\u0434\u0435\u043C\u0456\u0457  \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0456\u0447\u043D\u0438\u0445  \u043D\u0430\u0443\u043A \u0423\u043A\u0440\u0430\u0457\u043D\u0438"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_8__["default"],
    text: "\u041E\u0441\u0442\u0430\u043F\u0447\u0443\u043A \u041C. \u041C., \u0434\u043E\u0446\u0435\u043D\u0442 \u043A\u0430\u0444\u0435\u0434\u0440\u0438  \u0433\u0440\u0438 \u043D\u0430  \u043C\u0443\u0437\u0438\u0447\u043D\u0438\u0445 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0445 \u0406\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0443  \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432  \u0420\u0414\u0413\u0423"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_10__["default"],
    text: "\u0417\u0430\u0445\u043E\u0434\u044F\u043A\u0456\u043D \u041E.\u0412., \u0434\u043E\u0446\u0435\u043D\u0442 \u043A\u0430\u0444\u0435\u0434\u0440\u0438 \u0435\u0441\u0442\u0440\u0430\u0434\u043D\u043E\u0457 \u043C\u0443\u0437\u0438\u043A\u0438 \u0406\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0443  \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432  \u0420\u0414\u0413\u0423"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_11__["default"],
    text: "\u0412\u0438\u0448\u043D\u0435\u0432\u0441\u044C\u043A\u0430 \u0406.\u041F., \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447 \u0432\u0438\u0449\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457, \u0433\u043E\u043B\u043E\u0432\u0430 \u0446\u0438\u043A\u043B\u043E\u0432\u043E\u0457 \u043A\u043E\u043C\u0456\u0441\u0456\u0457 \"\u0424\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043E\"\r \u0420\u0456\u0432\u043D\u0435\u043D\u0441\u044C\u043A\u043E\u0433\u043E \u043C\u0443\u0437\u0438\u0447\u043D\u043E\u0433\u043E \u0444\u0430\u0445\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043B\u0435\u0434\u0436\u0443 \u0420\u0414\u0413\u0423"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    text: `Іванова Л.І., викладач першої категорії КЗ "Луцька музична  школа 3"`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_9__["default"],
    text: "\u041C\u0430\u0440\u0446\u0435\u0432\u0430 \u0416.\u041F., \u0441\u0442\u0430\u0440\u0448\u0438\u0439 \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447, \u0437\u0430\u0432\u0456\u0434\u0443\u044E\u0447\u0430 \u0444\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043D\u0438\u043C \u0432\u0456\u0434\u0434\u0456\u043B\u043E\u043C \u0420\u0456\u0432\u043D\u0435\u043D\u0441\u044C\u043A\u043E\u0457 \u0434\u0438\u0442\u044F\u0447\u043E\u0457 \u043C\u0443\u0437\u0438\u0447\u043D\u043E\u0457 \u0448\u043A\u043E\u043B\u0438 \u21161 \u0456\u043C\u0435\u043D\u0456 \u041C. \u041B\u0438\u0441\u0435\u043D\u043A\u0430"
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
/*! exports provided: Button, RegularHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularHeader", function() { return RegularHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/UseWindowDimensions */ "./src/hooks/UseWindowDimensions.jsx");





const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding-top: 8px;
  text-align: center;
  margin-top: 14px;
  font-size: 15px;
  width: 15%;
  border: solid white 2px;
  color: white;
  transition: all 0.5s;

  :hover {
    border: solid darkred 2px;
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
  }, "\u041F\u043E\u0448\u0443\u043A")), error !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null), error, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null)) : null, props.cardCount === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Warn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null), "\u0432\u0456\u0434\u0435\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0456", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null)) : null);
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
let myCards = [{
  "id": {
    "$oid": "609853dc683dda47f8b61307"
  },
  "name": "Агратіна Станіслав, 9 років ",
  "composition": "1)М.Глінка. ''Почуття'',      2)Ю.Щуровський. ''Танок''",
  "videoUrl": "https://drive.google.com/file/d/194yt_sKC5Et3r49zCERsdBZeDQgY-G_i/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61308"
  },
  "name": "Валігура Варвара, 9 років ",
  "composition": "М.Лемішко. ''Коломийка''",
  "videoUrl": "https://drive.google.com/file/d/1c6hTIqDl-cAF3Br3l1c2uwqFZsLVSPTv/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61309"
  },
  "name": "Валігура Варвара, 9 років ",
  "composition": "Т.Максімов. ''Задзеркалля''",
  "videoUrl": "https://drive.google.com/file/d/15Yr6Qxm4rstDOMU2vGn5Jwq5VfUpN2SD/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130a"
  },
  "name": "Василевська Христина,7 років",
  "composition": "1)В.Гіллок.''Самотня бальна зала'',   2)Т.Ростимашенко.''Чаклун''",
  "videoUrl": "https://drive.google.com/file/d/1GtxUKuUkLKAnh5oCf9FluiUTQoJCTbMM/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130b"
  },
  "name": "Волинець Олександр, 8 років",
  "composition": "1)Л.Колодуб. ''Аркан'',2)Ф.Рибіцький. ''Реготушка''",
  "videoUrl": "https://drive.google.com/file/d/1_COPePzwdgS7U_OjExOpv8noz1miTe8c/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130c"
  },
  "name": "Галаган Катерина, 9 років ",
  "composition": "1)Ю.Щуровський. Тема з варіаціями, 2)Г.Кушнаренко. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1oBlUfXWqlh5uDsDFCXbHgc7XGiAJGbLH/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130d"
  },
  "name": "Герасименко Олександра, 9 років",
  "composition": " 1)В.Рачковський. Токатина. 2)В.Косенко. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1DGnsSQGlBu8X_oDPt3YKtKmiVzV-G3qJ/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130e"
  },
  "name": "Голодовська Софія, 7 років",
  "composition": "1)І.Ванхаль.Рондо, 2)М.Дремлюга.''Весела гра''",
  "videoUrl": "https://drive.google.com/file/d/12Kutj-owpsr8helrm_kFZh1yQwMjEC7A/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130f"
  },
  "name": "Голуб Аліна, 9 років ",
  "composition": "1)М.Клементі. Сонатина до мажор, Іч., 2)Б.Дваріонас. Прелюдія",
  "videoUrl": "https://drive.google.com/file/d/1uwhKMKdJZIhRznM3VU5mTqEuKxxTesaO/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61310"
  },
  "name": "Григор'єва Катерина, 8 років",
  "composition": "1)Ю.Щуровський. ''Ранок'',   2)І.Королькова.''Горобчик''",
  "videoUrl": "https://drive.google.com/file/d/1aiMv5LwYV9m2wz-SJMGnxfUqIRT9M_Ew/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61311"
  },
  "name": "Данюк Єлизавета, 7 років",
  "composition": "1)М.Любарський.''Танцювальна'',    2) Д.Кабалевський. Вальс",
  "videoUrl": "https://drive.google.com/file/d/1vTk_mAB_ECh9VDwR6EMasY1y21KWrSYH/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61312"
  },
  "name": "Дроган  Мілана, 5 років",
  "composition": "1)М.Майєр. ''Весела гра'', 2)Д.Баштейн. ''Вальс слоненят''",
  "videoUrl": "https://drive.google.com/file/d/1Xb0gIgFyCnLuCxjn5klaeQ0Ll9DskRPz/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61313"
  },
  "name": "Дроздова Єлизавета, 9 років ",
  "composition": "1)Й.С.Бах.Менует. 2)Г.Классен. Полька",
  "videoUrl": "https://drive.google.com/file/d/1r5_18pR7BLxDSDEnMD7rHNGjR9ziEiGn/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61314"
  },
  "name": "Збір Марія, 8 років",
  "composition": "1)О.Гедіке. Сонатина до мажор,    І ч., 2)Р.Шуман.''Перша втрата''",
  "videoUrl": "https://drive.google.com/file/d/1_7qn3fTutdKGcGdbgv13rKokJ8jxgk3a/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61315"
  },
  "name": "Іваньків Олександра, 9 років",
  "composition": "1)А.Діабеллі. Скерцо,  2)О.Гедіке. ''Маленька п'єса''",
  "videoUrl": "https://drive.google.com/file/d/1vYeVkRaV1mb33uJ1DGMr20qoikFCr9Ay/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61316"
  },
  "name": "Іванюк Маріам, 8 років",
  "composition": "С.Майкапар. ''Маленька прелюдія'' соль мінор",
  "videoUrl": "https://drive.google.com/file/d/1rRlLMJjoWwTVup7_vVMD4D3nl2Y-lspO/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61317"
  },
  "name": "Іванюк Маріам, 8 років",
  "composition": " В.Кирейко. ''Стриб-скок''",
  "videoUrl": "https://drive.google.com/file/d/1ImpPq9ncbMh5T1ScAHfDmz57BDlLZCF2/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61318"
  },
  "name": "Ісупова Алісія, 8 років ",
  "composition": "1)К.Рейнеке. ''Гавот'', 2)Й.С.Бах. ''Маленька прелюдія'' до мінор",
  "videoUrl": "https://drive.google.com/file/d/10g9CCJoXRzeG8CiFhgnEBzTQBLIWDanA/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61319"
  },
  "name": "Коваленко Варвара, 8 років",
  "composition": "1)О.Геталова.''Ранок в лісі'',  2)В.Подвала. ''Капризуля''",
  "videoUrl": "https://drive.google.com/file/d/1S38_oECOBo7KGDV1azJUx3zOYwgQEQIV/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131a"
  },
  "name": "Коренівська Дар'я, 9 років ",
  "composition": "1)Р.Вандал.''Водограй'',         2)П.Захаров.''Знайомий силует''",
  "videoUrl": "https://drive.google.com/file/d/19CAzPCaWrAN_SWzaJFdEpxPIOQw-rfLU/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131b"
  },
  "name": "Костенко Ярослава, 7 років",
  "composition": " В.Косенко. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1CddYcoygTctoabGQF7pT2poRvCupVG_c/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131c"
  },
  "name": "Костенко Ярослава, 7 років ",
  "composition": "Й.Йєнсен.''Чарівний танок''",
  "videoUrl": "https://drive.google.com/file/d/1uB29bTPEiYdugJfLOZl4SQGrFY9nQpr-/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131d"
  },
  "name": "Латковська Єлизавета, 9 років",
  "composition": "1)В.Косенко. Вальс,    2)О.Гречанінов.''Мій коник''",
  "videoUrl": "https://drive.google.com/file/d/16YAw-q7f8F9JBPmfn8tEkpJT81J7EahA/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131e"
  },
  "name": "Лішман Дарина, 9 років",
  "composition": "1)В.Подвала.''Марш-гротеск'',          2)С.Майкапар. ''Колискова''",
  "videoUrl": "https://drive.google.com/file/d/1NsWz3TR0SKiTtcNCAJe059bhhFomt_NE/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131f"
  },
  "name": "Магола Софія, 8 років ",
  "composition": "1)Я.Бобалік.''Святкова полька''; 2)І.Беркович. Сонатина соль мажор",
  "videoUrl": "https://drive.google.com/file/d/1guAxs5g_wbGv_twqiypo0e8FHOwum-Ih/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61320"
  },
  "name": "Мазуренко Майя, 8 років",
  "composition": "1)М. Бобер. ''Агент Х'',          2)І.Іордан. ''Полювання на метелика''",
  "videoUrl": "https://drive.google.com/file/d/1Ie1WCQpgPuLYdKNxVGuLkeIVnYJNZJ9T/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61321"
  },
  "name": "Марченко Єлизавета, 9 років",
  "composition": "1)Й.С.Бах.''Маленька прелюдія'' до мінор, 2)П.Чайковський.''Баба Яга''",
  "videoUrl": "https://drive.google.com/file/d/1ZJo4GULZ9sfcUuApF5jyoHIUV_IKAVrg/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61322"
  },
  "name": "Марчук Максим, 8 років",
  "composition": " Ф. Шпіндлер. Сонатина, тв.157 №4",
  "videoUrl": "https://drive.google.com/file/d/1sC7MUjcknrnZZZ5hfMCXbSvs36KA3ppV/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61323"
  },
  "name": "Марчук Максим, 8 років ",
  "composition": "В. Гіллок. ''Капрічієтто''",
  "videoUrl": "https://drive.google.com/file/d/1YdAihvAQkCT8bbyW44pQi2iZhmX1c3Kz/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61324"
  },
  "name": "Мотузкина Лідія, 9 років ",
  "composition": "О.Білаченко. ''Український танок''",
  "videoUrl": "https://drive.google.com/file/d/1bpO9dHAcbP8KlaWT_1nXXQiZebuD8F0p/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61325"
  },
  "name": "Мотузкина Лідія, 9 років",
  "composition": " В.Моцарт. ''Менует''",
  "videoUrl": "https://drive.google.com/file/d/1C_mxAU65VvvvfiPoRQscKR0oUDWpHDQt/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61326"
  },
  "name": "Новосільська Катерина, 7 років ",
  "composition": "1)М.Клементі. Сонатина тв.36, І-ІІІч., 2)І.Беркович. Прелюдія",
  "videoUrl": "https://drive.google.com/file/d/1Y72CFLOMPibwTUPgWOmsQH3YJPviBjDa/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61327"
  },
  "name": "Ольховська Аніта, 9 років",
  "composition": " І.Павлік. ''Сніжинки''",
  "videoUrl": "https://drive.google.com/file/d/1rs-VgFMnIYZVm9kOjNh6FTl_P0CADRB1/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61328"
  },
  "name": "Ольховська Аніта, 9 років ",
  "composition": "Н. Карпенко. Етюд сі мінор",
  "videoUrl": "https://drive.google.com/file/d/1kS3BqQw4-msMoznO3Nz_iWc5ytlJOFTm/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61329"
  },
  "name": "Остапчук Каріна. 8 років",
  "composition": "1)В.Гіллок ''Дзвіночки'', 2)І.Хуторянський.'''Вогнівочка-стрибунівочка''",
  "videoUrl": "https://drive.google.com/file/d/16RAcN2O6kunKZAFrbgBHsENiZg9iKs4G/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132a"
  },
  "name": "Охрін Ярема, 8 років",
  "composition": "1) Д.Кабалевський. ''Новела'',      2)С.Майкапар.''Токатина''",
  "videoUrl": "https://drive.google.com/file/d/1zw1JK0J4d8Hk-znbv-5oDna-qL3cwREP/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132b"
  },
  "name": "Павленко Стефанія, 7 років ",
  "composition": "1)М.Любарський. ''Пісня'',2) Д.Кабалевський.''Клоуни''",
  "videoUrl": "https://drive.google.com/file/d/1ImnwJj2Deqz-TJfvXACCrZpiZNT3BnKH/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132c"
  },
  "name": "Панькова Анна, 8 років ",
  "composition": "1)Й.С.Бах. ''Маленька прелюдія'' до мінор,        2)Л.Шукайло. ''Інтермецо''",
  "videoUrl": "https://drive.google.com/file/d/1yrAHr6i17NShP5qaImPnWx-xJQjCMMy2/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132d"
  },
  "name": "Парфьонов Дмитро, 9 років",
  "composition": "1)Н.Владикіна-Бачинська.''Щось сумне'', 2)О.Гедіке. ''Танець''",
  "videoUrl": "https://drive.google.com/file/d/1NDdw57RsrmLrE_yWSG0uFJXEjWcGqGmR/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132e"
  },
  "name": "Погорєлов Артем, 9 років",
  "composition": "1)Й.С.Бах. ''Менует'', 2)Н.Нижанківський. ''Коломийка''",
  "videoUrl": "https://drive.google.com/file/d/1ne86iM-NUs6NcioBsvUjfQa6Mn7cSAR7/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132f"
  },
  "name": "Пузанова Марія, 9 років",
  "composition": "1)У. Гіллок. ''Королівський менует'', 2)І.Іордан. «Полювання на метелика»",
  "videoUrl": "https://drive.google.com/file/d/1OGS_fqzJvbB7aNPrexwqDK5x0ls-20CC/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61330"
  },
  "name": "Резнік Тетяна, 9 років",
  "composition": "1)Н.Торопова. Варіації,     2)Д.Кабалевський. ''Маленький жонглер''",
  "videoUrl": "https://drive.google.com/file/d/1xGxNTTtWrhdOu6Y7GueUAgGXvjoLlMBl/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61331"
  },
  "name": "Рибак Анастасія, 8 років",
  "composition": "1).Мелартін.''Ранок'', 2)М.Майєр.''Незвичайна пригода''",
  "videoUrl": "https://drive.google.com/file/d/1uzmVqFVnnQaIGX7o3H-7tNe0kp1ZiUvP/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61332"
  },
  "name": "Ріпний Богдан, 8 років",
  "composition": " 1)І. Беркович. Варіації,     2)Д. Роулі.''В країні гномів''",
  "videoUrl": "https://drive.google.com/file/d/1Qlr1_-pFAlLIixKkhx2-ZxxEYZhAZ9Z7/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61333"
  },
  "name": "Романченко Елисей, 8 років",
  "composition": " 1)Ш.Гуно.''Марш маріонеток'',   2) О.Гречанінов.''Незвичайна пригода''",
  "videoUrl": "https://drive.google.com/file/d/1iI-zjq4QimDL9TLE5BRYurmuAL16fScU/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61334"
  },
  "name": "Сайчук Ярослава, 9 років ",
  "composition": "Т. Максимов.''Баба Яга''",
  "videoUrl": "https://drive.google.com/file/d/1X5C7kfNd3QloZl0TAvN_AQh0-qXtpSSB/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61335"
  },
  "name": "Сайчук Ярослава, 9 років",
  "composition": " К.Роллін. '' Шоколадне печиво''",
  "videoUrl": "https://drive.google.com/file/d/16vYm_EdDx_-3BRHJMyD35k3oC4F2tV56/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61336"
  },
  "name": "Сітшаєва Зарема, 9 років",
  "composition": "1) Л.Бетховен. Сонатина до мажор; 2)К.Слонімський. ''Дюймовочка''",
  "videoUrl": "https://drive.google.com/file/d/1H6edQtsRp0_wcuOYRAEh1lffRz0TXtib/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61337"
  },
  "name": "Смірнова Євгенія, 9 років",
  "composition": "1)В.Квасневський.''Думка'', 2)Д.Александер. ''Зимова рапсодія''",
  "videoUrl": "https://drive.google.com/file/d/16LW9EesPPs1STi6kQpQxdEJzk3PgnHYj/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61338"
  },
  "name": "Стрийська Амелія, 8 років",
  "composition": " 1)В.Косенко.''Дощик'';      2)О.Білаченко. ''Експромт''",
  "videoUrl": "https://drive.google.com/file/d/10h9ONRG2T42vxAlWy4ASP0qga8IU02rv/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61339"
  },
  "name": "Студзинська Єлизавета, 7 років",
  "composition": "1) Л. Моцарт. ''Менует'',    2)У. Гіллок. ''Осінній ескіз''",
  "videoUrl": "https://drive.google.com/file/d/1VdsObub9Z0E7ZM1QYMsfqkaljnnLQ2je/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133a"
  },
  "name": "Сухан Діана, 8 років ",
  "composition": "1)Л.Шукайло.Варіації на тему В.Шаїнського; 2)Р.Фучс.''Маленьке розбите серце''",
  "videoUrl": "https://drive.google.com/file/d/1Gu5ucoCGFhyEnMh3-IDUJ-uF0Tuj37UZ/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133b"
  },
  "name": "Терп'як Аарон, 9 років",
  "composition": "1) І.Беркович. Варіації на українську тему; 2)Т.Остен. ''Маленький ельф''",
  "videoUrl": "https://drive.google.com/file/d/1ZtQbNBBgGmOzMWnnHAF-7_CBsXk3Lw-2/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133c"
  },
  "name": "Тимченко Надія, 8 років ",
  "composition": "1)А.Штогаренко. ''Метелик'', 2)В.Гіллок. ''Місячне сяйво''",
  "videoUrl": "https://drive.google.com/file/d/1PS9AGHyEDqstjqA1MiEbTkp5j1UuShrG/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133d"
  },
  "name": "Тіщенко Вероніка, 7 років",
  "composition": "1)Й.С.Бах. ''Маленька прелюдія'' до мінор, 2)Л. Шукайло. Варіації",
  "videoUrl": "https://drive.google.com/file/d/1Ftrj9k5jhDxVi5ufhXY3THkwOK8Y12Hm/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133e"
  },
  "name": "Тодорова Даяна, 6 років",
  "composition": "1)В.Барвінський. ''Зайчик'',          2)М.Любарський. ''Плясова''",
  "videoUrl": "https://drive.google.com/file/d/1PAzIBtjG0NfqazUI25HsRrFVXjLyz2Bi/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133f"
  },
  "name": "Тонієвич Ксенія, 9 років",
  "composition": "1)О.Спіліоті.''Гуцулята'',   2)В.Гіллок.''У старому Відні''",
  "videoUrl": "https://drive.google.com/file/d/119w3wnHMp6XNWSKKr9VJIoYjVIP9MlAO/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61340"
  },
  "name": "Тютько Володимир, 9 років",
  "composition": "1)Ф.Кулау.Сонатина, тв.55 №3, 2)Р.Лісова.''Веселий настрій''",
  "videoUrl": "https://drive.google.com/file/d/1bg-HK7Lp3UwjGk3MITTdD9eQ7rFdhx1H/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61341"
  },
  "name": "Фесенко Анна, 8 років ",
  "composition": "1)А.Гедіке.Сонатина до мажор,  2)В.Гаврилін. ''Капріччіо''",
  "videoUrl": "https://drive.google.com/file/d/1Ejrq8ZEXBJq_ANfAiY-5jKH7Rs58fLuC/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61342"
  },
  "name": "Чорней Яна, 7 років ",
  "composition": "1)М. Екштейн. ''Каприз гномів'';  2)С.Юферов. ''Ноктюрн''",
  "videoUrl": "https://drive.google.com/file/d/1g6bB7aqWptw5lLnAiXklOFpQl4X0NLKj/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61343"
  },
  "name": "Шкурко Тимофій, 9 років ",
  "composition": "1)Ф.Шопен. ''Вальс'' ля мінор,     2)Л.Шукайло. ''Весела мозаїка''",
  "videoUrl": "https://drive.google.com/file/d/1eJJ44ZbgTrUTdH-tBPKGyc1K_0rryj4_/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61344"
  },
  "name": "Юрчук Яна, 7 років",
  "composition": " 1)М. Клементі. Сонатина, тв.36 №1, І ч.,2)П.Чайковський.''Вранішня молитва''",
  "videoUrl": "https://drive.google.com/file/d/1oPUuH2qzaQULypvuy3M6Q-f7vvhZlAnx/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61345"
  },
  "name": "Аміхалакіоає Ємельян, 10 років",
  "composition": "1)О.Білаченко.''Осінній ескіз'', 2)М.Кармінський.''Гумореска''",
  "videoUrl": " https://drive.google.com/file/d/1zfqkyG6BpZ3_1XXdf_FVYOWFmpakjWWP/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61346"
  },
  "name": "Антонюк Варвара, 12 років ",
  "composition": "І.Плейєль. Сонатина ре мажор",
  "videoUrl": " https://drive.google.com/file/d/1DJeHf3fAuZ55Pf65mMAtw2Pct96dfa-t/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61347"
  },
  "name": "Антонюк Варвара, 12 років ",
  "composition": "С.Майкапар.''В ковальні''",
  "videoUrl": " https://drive.google.com/file/d/1lXyKuwM_JgxYZl6eWkAseU6vNaWz7pYz/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61348"
  },
  "name": "Бабчанік Андрій, 10 років ",
  "composition": "1)Д.Чимароза. Сонатина соль мажор. 2)Ю.Білковський. ''Роздуми''",
  "videoUrl": " https://drive.google.com/file/d/1UHAsNKjcJiBgxAdILOsjDERJKQMzeq7A/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61349"
  },
  "name": "Балута Аліна, 10 років",
  "composition": " 1) Е.Гріг. ''Танець з Йольстера'', 2)Л.Забара.''Ніч яка місячна''",
  "videoUrl": " https://drive.google.com/file/d/1oXGF3m41K-QN8Y1-W_j85DrTjkk88sQX/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134a"
  },
  "name": "Басиста Олександра, 12 років",
  "composition": " 1)Ф.Шопен. Вальс, тв.64 №1, 2)С.Борткевич. Прелюдія, тв.6 №1",
  "videoUrl": " https://drive.google.com/file/d/1sPWZSPn4UMJVdfz73graDwdwIxyXgjBY/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134b"
  },
  "name": "Білінкевич Наталія, 12 років",
  "composition": "1) М.Лисенко. Елегія,2)К.Черні. Етюд №1 тв.740",
  "videoUrl": " https://drive.google.com/file/d/1AR_WW0CFSSCXzVAfrHXuwBAD-_QC8j6W/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134c"
  },
  "name": "Бульковська Марина, 10 років",
  "composition": " Д.Чімароза. Соната соль мажор",
  "videoUrl": " https://drive.google.com/file/d/1boxdtgAdhBIJdtcxdznZHP-q5faqa5QK/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134d"
  },
  "name": "Бульковська Марина, 10 років",
  "composition": "К.Габел. ''Дерево життя''",
  "videoUrl": " https://drive.google.com/file/d/1fXZ6NdsN6u78tI6erKEjX2ofesHB2ebh/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134e"
  },
  "name": "Вакуленко Аріна, 10 років ",
  "composition": "І.Беркович. Варіації на тему грузинської народної пісні ''Світлячок''",
  "videoUrl": " https://drive.google.com/file/d/1CdtXoVzjEl1YqVCdByxKsZdqEjft1hs6/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134f"
  },
  "name": "Вакуленко Аріна, 10 років ",
  "composition": "С.Джоплін.''Артист естради''",
  "videoUrl": " https://drive.google.com/file/d/1GntiYvLzHrUXIsWDfdHp40-tt5yYuigq/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61350"
  },
  "name": "Васильєва Вероніка, 12 років",
  "composition": "1)Р.Глієр. Прелюдія до мінор;2)С.Джербашян.''Швидкий рух''",
  "videoUrl": " https://drive.google.com/file/d/1QBgtdhw2IQeTH6QEYnKLGBalX0K2upN4/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61351"
  },
  "name": "Войтенко Лілія, 10 років",
  "composition": "1) Л. Шукайло.''Поні'', 2)О.Рибалова. ''Непосида''",
  "videoUrl": " https://drive.google.com/file/d/1-L_kJHu1PpkPGRCJ_EfxFLBbmc8fOOwq/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61352"
  },
  "name": "Войченко Владислав, 11 років",
  "composition": " 1) Й.С.Бах.Двоголосна інвенція фа мажор; 2)Ф.Шопен. Ноктюрн до дієз мінор",
  "videoUrl": " https://drive.google.com/file/d/1wu5klXGG7Bh2fPlR3YbeMlSKZBT8PRnN/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61353"
  },
  "name": "Вощинський Ілля, 12 років",
  "composition": "1)Е.Гріг. Ноктюрн, 2)М.Римський-Корсаков. ''Політ джмеля''",
  "videoUrl": " https://drive.google.com/file/d/17lbS0L956aNZ9D0GTI-p-k39z4lpehC7/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61354"
  },
  "name": "Галечев Іван, 11 років",
  "composition": " 1)Обр. Г.Без'язичного. ''Ніч яка місячна'', 2)П.Чайковський. ''Неаполітанська пісенька''",
  "videoUrl": " https://drive.google.com/file/d/14-Z82vYkVF1x2NpnqK1_xhAf2bWuaPQV/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61355"
  },
  "name": "Гамзалієва Зейнаб, 12 років",
  "composition": "Білорус. нар.пісня ''Бульба'', обр.Д.Льва-Компанійця",
  "videoUrl": " https://drive.google.com/file/d/1dQqGFphOGo0VpGoUd4z4U3en9LTc19pk/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61356"
  },
  "name": "Гамзалієва Зейнаб, 12 років ",
  "composition": "Й.Гайдн. Менует",
  "videoUrl": " https://drive.google.com/file/d/1Ww_800JPvH69YtjONECJH8VtZ_eZkkyk/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61357"
  },
  "name": "Гіліна Олександра, 11 років",
  "composition": "1)В.МоцартАрія; 2)Д.Градескі.''Морозиво. Регтайм''",
  "videoUrl": " https://drive.google.com/file/d/1f3K50GVcw8ksdYgRMxV61adRAFH5PKMw/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61358"
  },
  "name": "Горай Ярослав,12 років",
  "composition": "1)М.Скорик ''Мелодія'',         2) П.Базала. ''Потік''",
  "videoUrl": " https://drive.google.com/file/d/1UCbn7xPvEbrHCpMThnCIj5Qtgn6rVS_f/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61359"
  },
  "name": "Гоцуленко Вікторія, 12 років",
  "composition": "1)Й.Бах. Двоголосна інвенція ля мінор, 2) Ф.Шопен. Ноктюрн №21",
  "videoUrl": " https://drive.google.com/file/d/171ICM_7Ghrao1RN6ug0XLoRNJKobaRGQ/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135a"
  },
  "name": "Гукасян Ліана, 10 років",
  "composition": "1)Л.Келлер. Сонатина,          2) А.Хачатурян. ''Андантіно''",
  "videoUrl": " https://drive.google.com/file/d/12IdAfSi_waU6lrNfUvP2H0x0WO78aMGa/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135b"
  },
  "name": "Гуляєва Єва, 11років",
  "composition": "1)П. Захаров.''Елегія'', 2) Г.Валленгаупт. ''Скерцино''",
  "videoUrl": " https://drive.google.com/file/d/1rbcm7F_BfAeqMEzfQhZ6fF3Y21a7rYsw/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135c"
  },
  "name": "Гутник  Кірена, 10 років ",
  "composition": "Л.Шітте.''Танець  гномів''",
  "videoUrl": " https://drive.google.com/file/d/1niDqNiCJu3CLS3EG5BWHuB_Aq7v45Rs3/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135d"
  },
  "name": "Гутник Кірена, 10 років",
  "composition": " О.Соловяненко.''Поні біля цирку''",
  "videoUrl": " https://drive.google.com/file/d/1h7q0YaYiy6A6s6Bpw_TxtzrwwS_Az9Lx/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135e"
  },
  "name": "Дорошенко Юлія, 10 років",
  "composition": "1) М. Клементі. Сонатина, тв.36 №6, І ч; 2) І.Беркович. Прелюдія, тв.46 №15",
  "videoUrl": " https://drive.google.com/file/d/1GlFCLC3x_1tZCOfmNhN0m4T0POJYBTjN/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135f"
  },
  "name": "Дудін Дмитро, 11 років ",
  "composition": "1)Л.Бетховен. Сонатина соль мажор,І-ІІ ч.; 2)С.Прокоф'єв. ''Казочка''",
  "videoUrl": " https://drive.google.com/file/d/1xbm4x-VfzHzuzB4jThbsPh8IaCa94ttB/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61360"
  },
  "name": "Єрмоленко Дарина, 12 років ",
  "composition": "Й.С. Бах. Арія ре мажор",
  "videoUrl": " https://drive.google.com/file/d/1u7M6CXiysUfJuu6M-AvB774Wen0AnuZN/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61361"
  },
  "name": "Єрмоленко Дарина, 12 років",
  "composition": "О. Білаш. ''Баркарола''",
  "videoUrl": " https://drive.google.com/file/d/1hORf4uVvoW54pTCxgK2zImgxYxH47Yoo/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61362"
  },
  "name": "Загаєвська Софія, 12 років ",
  "composition": "1)А.Классен ''Музичний ескіз''№1, 2)О.Кимлик.''Леонтовіана''",
  "videoUrl": " https://drive.google.com/file/d/1w1TPh9JXsAje_KpE9QPp5Iv0EujmvjG-/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61363"
  },
  "name": "Іваннікова Марія, 11 років",
  "composition": "1)В.Моцарт. Соната №16, І частина,  2)О.Грибоєдов. Вальс",
  "videoUrl": " https://drive.google.com/file/d/1X1vhsTIPkI5zis22JHOXxQUDdOBe9A9G/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61364"
  },
  "name": "Іванюк Вірсавія,10 років",
  "composition": "1)О.Ходош.''Червона шапочка'', 2)І.Щербаков.''Елегія київських пагорбів''",
  "videoUrl": " https://drive.google.com/file/d/1M7I1QJbFkWBQHwK1lHKoyoE30l-Wc12m/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61365"
  },
  "name": "Ївженко Ада, 12 років",
  "composition": "1)М.Клементі.Сонатина соль мажор, 2)М.Скорик. ''Народний танець''",
  "videoUrl": " https://drive.google.com/file/d/1kpm6k0MCtujg7sPH9dcodY0kz1BrGEX9/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61366"
  },
  "name": "Каманчи Єлизавета, 12 років",
  "composition": "1)В.Калістратов.''Коник Горбоконик'', 2)Ю.Весняк. ''Ніжність''",
  "videoUrl": " https://drive.google.com/file/d/1mlWaLYsD8fkBQHgdrX-RfNCkd6wRrPkO/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61367"
  },
  "name": "Карашкевич Христина, 11 років ",
  "composition": "1)Й.С.Бах. Триголосна інвенція ре мінор, 2)М.Дремлюга. ''Скерцо''",
  "videoUrl": " https://drive.google.com/file/d/1EBGhNIptJSei0GZLKpsfyaIhi3Uae0cH/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61368"
  },
  "name": "Кіцера Аліна, 11 років",
  "composition": "1)К.Дебюссі ''Романтичний вальс'', 2)Б.Фільц. ''Скерцо''",
  "videoUrl": " https://drive.google.com/file/d/1Novsog_w52pzGkfJ2hZxihv33C2cSf0J/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61369"
  },
  "name": "Король Єлізавета, 10 років ",
  "composition": "1) П.Чайковський.''Пісня жайворонка''; 2)Л.Шукайло. Прелюдія",
  "videoUrl": " https://drive.google.com/file/d/1kbrGl8_IhfqnjkvTvoWh79mgm9pQ5kTJ/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136a"
  },
  "name": "Котляревська Юлія, 11 років",
  "composition": " Й. Гайдн. Соната соль мажор, Іч.",
  "videoUrl": " https://drive.google.com/file/d/1FAWHHKQ5ox0ETJLvurrRgZ2dOm1vtFke/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136b"
  },
  "name": "Котляревська Юлія, 11 років ",
  "composition": "'Гандзя'', обр.Є Веврика",
  "videoUrl": " https://drive.google.com/file/d/1kIvdsvIrxeo816d-_MV5nbbcr-aOZhEp/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136c"
  },
  "name": "Котова Марія, 10 років ",
  "composition": "1)О.Ключарьов.''Шуралє'', 2)Ф.Мендельсон.''Пісня без слів'', тв.19 №2",
  "videoUrl": " https://drive.google.com/file/d/1Y1cW_2ZiwBEN0Yc1KrWWncX376zgaD5B/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136d"
  },
  "name": "Кривобабко Ксенія, 10 років",
  "composition": " Л.Шукайло. ''Весняні  краплинки''",
  "videoUrl": " https://drive.google.com/file/d/1dIJgkLIO2e7lcNpuARjxmudw03xjnc32/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136e"
  },
  "name": "Кривобабко Ксенія, 10 років ",
  "composition": "Н.Карпенко. Етюд  ре мінор",
  "videoUrl": " https://drive.google.com/file/d/1B4-EbRYO-bcCjfuppeHXShv5DQzui9hA/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136f"
  },
  "name": "Кутковська Лариса, 12 років",
  "composition": " 1)Е.Гріг. ''Ноктюрн'', тв.54 №4, 2)Т.Кулієв. ''Лезгінка''",
  "videoUrl": " https://drive.google.com/file/d/11cmQBdsm2epwZS_mUJx3gp1W582ZyWd7/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61370"
  },
  "name": "Лiзогуб Арсен, 10 років",
  "composition": "1)Г.Сасько.''Регтайм'', 2)П.Захаров.''Старовинна балада''",
  "videoUrl": " https://drive.google.com/file/d/11SFkWFvWn_UGNJK7c7Z1LlJ2NasM9Ksg/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61371"
  },
  "name": "Ланський Євген, 10 років ",
  "composition": "1)П.Чайковський.''Ранкова молитва'', тв.39, 2)І.Беркович. Токата ля мінор",
  "videoUrl": " https://drive.google.com/file/d/1VnPFLs5xHCt0TL2sd1E9WWyhTB8kGTuh/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61372"
  },
  "name": "Левандівська Марта, 10 років ",
  "composition": "В.Барвінський. ''Український танець''",
  "videoUrl": " https://drive.google.com/file/d/1FVjxAeB3dOzJpATDXyI-1ABtRizjzjod/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61373"
  },
  "name": "Левандівська Марта, 10 років",
  "composition": " Я. Сібеліус. Етюд тв. 76 №2",
  "videoUrl": " https://drive.google.com/file/d/18K7rgRzjCqZ-_5EWr0EoE5JlnTyhgZS4/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61374"
  },
  "name": "Леза Анна, 11 років ",
  "composition": "1) Ф.Шопен. Ноктюрн №20, 2)П.Захаров. ''Рондо-галоп''",
  "videoUrl": " https://drive.google.com/file/d/1Twf2sJ3_9Ar3oOTmZWKv6q8SMa9fGa-p/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61375"
  },
  "name": "Ликова Варвара, 11 років",
  "composition": "1) В.Гіллок.''Bill bailey'', 2)Ю.Щуровський.''Шарманка''",
  "videoUrl": " https://drive.google.com/file/d/1dE5LcfV-T8QhLXiAfn8sxLEMecvgS-hO/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61376"
  },
  "name": "Лілік Марія-Магдалина, 11 років ",
  "composition": "1)Ф.Шопен. ''Аркуш з альбома'' мі бемоль мажор, 2)М.Колесса. ''Скерцино''",
  "videoUrl": " https://drive.google.com/file/d/1qticduAQQm72Ncy8e-st6nkjqwBrFSTe/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61377"
  },
  "name": "Макаревич Андрій-Олександр, 11 років ",
  "composition": "1)Й.С.Бах. Триголосна інвенція ре мажор, 2)К.Черні. Етюд №5, тв.299",
  "videoUrl": " https://drive.google.com/file/d/1iVuBPfw4HncPJkJn2yNZZw8UXlUXJHVc/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61378"
  },
  "name": "Маціборська Анна, 10 років",
  "composition": "1) Й. Бах. Двоголосна інвенція сі бемоль мажор,    2) Ф. Якименко. ''Елегія''",
  "videoUrl": " https://drive.google.com/file/d/1SrYttJFdizsuBe0yNsKrNDgJUP_AihaN/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61379"
  },
  "name": "Мельник Михайло, 10 років",
  "composition": "1)М.Клементі. сонатина до мажор, 2)В.Косенко. ''Дощик''",
  "videoUrl": " https://drive.google.com/file/d/1c0pWjGogDaEYCRCskzcq9VdUlHy-hshG/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137a"
  },
  "name": "Меркулова Марія, 10 років ",
  "composition": "1) Д.Чімароза.Соната соль мажор; 2) М. Жербін. Вальс",
  "videoUrl": " https://drive.google.com/file/d/1j5pED7wQ3AHP0pNx9VO4Pp8dril9aMzf/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137b"
  },
  "name": "Мигалюк Ріанна, 11 років",
  "composition": "1)Н.Нижанківський. ''Коломийка'',   2)В.Гіллок.''Карнавал в Ріо''",
  "videoUrl": " https://drive.google.com/file/d/1p5SMOeBaUz0jzX8A0l6X4N9yvtwG0w8m/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137c"
  },
  "name": "Миргород Всеволод,12 років",
  "composition": "1)Ф.Кулау. Сонатина фа мажор,І ч.; 2)М.Лисенко. ''Елегія''",
  "videoUrl": " https://drive.google.com/file/d/1kpxsuRJnl3t64lbO8viVgfGsw_aMkRSm/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137d"
  },
  "name": "Морозова Тетяна, 11 років ",
  "composition": "1) Й.Бенда.Сонатина, 2) С.Шевченко.''Вечір''",
  "videoUrl": " https://drive.google.com/file/d/15u4oK4uIv923BbhwHuQxc2kb2zW4DImG/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137e"
  },
  "name": "Мунтян Наталія, 10 років ",
  "composition": "1)Ю.Щуровський. Тема з варіаціями,       2)Л.Шитте.''Іскри''",
  "videoUrl": " https://drive.google.com/file/d/1VjNHcWWgtmbakUXmpc3h7fhoN5gps9RV/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137f"
  },
  "name": "Оборкіна Олександра, 11 років",
  "composition": "1)Е.Гріг.''Мелодія'',    2)Л.Шукайло. ''Багатель'' №5",
  "videoUrl": " https://drive.google.com/file/d/1ch2wvzxtR7ER2-6iDLUgvCAquUiv8dVf/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61380"
  },
  "name": "Пендюр Софія, 11 років",
  "composition": "1) О.Даргомижський.''Вальс'', 2)М.Скорик.''Народний танець''",
  "videoUrl": " https://drive.google.com/file/d/1sDG6wngpKHcMSOaOi_YlUGkucadBApBJ/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61381"
  },
  "name": "Перетятько Анастасія, 10 років ",
  "composition": "Е.Гріг. ''Танець із Йольстера''",
  "videoUrl": " https://drive.google.com/file/d/10_Lgv-fLOd3yPAmNmWCd8YN3lSwXHLKG/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61382"
  },
  "name": "Перетятько Анастасія, 10 років",
  "composition": "М.Клементі. Сонатина №4, тв.36",
  "videoUrl": " https://drive.google.com/file/d/13wsI-ssTPx9ea0qZHFYsvsP2nuPbSDJ7/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61383"
  },
  "name": "Позняк Веніамін, 10 років",
  "composition": "1) Д.Пуленк. Стаккато. 2) Л.Бетховен. Весела-сумна",
  "videoUrl": " https://drive.google.com/file/d/1vsbc2GvHYArggP57-Z5wFlGwchMpNp3E/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61384"
  },
  "name": "Прокопюк Марина, 10 років",
  "composition": " 1)І.Білаченко. Експромт. 2)Ю.Щуровський. Танець",
  "videoUrl": " https://drive.google.com/file/d/1Qn9DQL2NHJeOfGHDHYwauZ62vinrflAy/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61385"
  },
  "name": "Решетнікова Людмила, 11 років",
  "composition": " 1)О.Білаченко.''Осінній ескіз'', 2)О.Польовий.''Полька-бабка''",
  "videoUrl": " https://drive.google.com/file/d/1_XfCK8FK1FLmxbkEB8VTdfa990qJ7xRA/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61386"
  },
  "name": "Ротар Каріна, 10 років ",
  "composition": "1) Ю.Щуровський. ''Баркарола'', 2) Д.Пешетті. ''Престо''",
  "videoUrl": " https://drive.google.com/file/d/17MF-0z6uAkmKWlpYySWGH8sbOiZ--n9J/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61387"
  },
  "name": "Савченко Матвій, 11років ",
  "composition": "1)Л.Бетховен. Соната мі бемоль мажор, І ч., 2)І.Щербаков. '' Елегія київських пагорбів''",
  "videoUrl": " https://drive.google.com/file/d/1J_HQk6IS2PZPZUP9uYOP6wkQtR3opo6B/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61388"
  },
  "name": "Саква Валерія, 11 років ",
  "composition": "1)М.Лансевич.''Прелюдія'', 2)М.Дворжак. ''Джазовий етюд'' ля мажор",
  "videoUrl": " https://drive.google.com/file/d/11tsdLvk25bD8FSDYTXXnypR29gkPtxXs/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61389"
  },
  "name": "Сартанія Давид, 10 років",
  "composition": " 1)Е.Вагнер.Сонатина до мажор,   2) Р.Вандалл.''Водоспад''",
  "videoUrl": " https://drive.google.com/file/d/1mrESYZIiP1iWenGiZDUIOb0usCJK0dT8/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138a"
  },
  "name": "Скороходько Євгенія, 10 років ",
  "composition": "1)Н.Нижанківський. ''Івась грає на чельо'', 2)Ю.Щуровський. ''Токата'' сі мінор",
  "videoUrl": " https://drive.google.com/file/d/1Eif0Z_MiAQVpzbczVSjjbvh1gUxe_E3X/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138b"
  },
  "name": "Солоненко Анна, 10 років ",
  "composition": "В.Косенко. ''Петрушка''",
  "videoUrl": " https://drive.google.com/file/d/1tCxp4UbZFZeFMrw6DYNi9VYHYSvYwNQI/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138c"
  },
  "name": "Солоненко Анна, 10 років",
  "composition": " Ф. Бургмюллер. ''Балада''",
  "videoUrl": " https://drive.google.com/file/d/1EOH6zhwow4aQZfJes28LxiIBsh5HbfGu/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138d"
  },
  "name": "Сорока Марія, 13 років",
  "composition": "1)Д.Циполі. Прелюдія та фуга ре мінор, 2)К.Гурліт. ''Шторм''",
  "videoUrl": " https://drive.google.com/file/d/1tfp_gBRZ1flj-LGqde6EdxQmKTlep0jP/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138e"
  },
  "name": "Стецюк Олександра, 12 років ",
  "composition": "1)К.Дебюссі. ''Doctor Gradus ad Parnasum'', 2)Ф.Шопен. ''Вальс'' №9",
  "videoUrl": " https://drive.google.com/file/d/1zxJWyCms7kZhspNBAlzacUnALW8EJAM7/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138f"
  },
  "name": "Сторожук Станіслав, 12 років",
  "composition": "1)Е.Гріг. ''Поетична картинка'' №1, 2)А.Кос-Анатольський. ''Полонина''",
  "videoUrl": " https://drive.google.com/file/d/1rtK0vUrAoIlGbUJ5HaUGbQPl1zVmTKKJ/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61390"
  },
  "name": "Ткаченко Майя, 12 років",
  "composition": "1)В. А. Моцарт. Соната 16 К 545,Іч.; 2)І.Шамо.'' Веснянка''",
  "videoUrl": " https://drive.google.com/file/d/1m6ZsVarNPrcfymO3BkumdKxLJyBTxx5-/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61391"
  },
  "name": "Унгурян Олександра, 12 років ",
  "composition": "1) О.Грибоєдов. Вальс,          2)М.Сільванський. ''Стрімкий потік''",
  "videoUrl": " https://drive.google.com/file/d/1v2LRVDhFJ2zXN_5wVxAch7X8l0WQ8rOg/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61392"
  },
  "name": "Федорченко Євгенія, 10 років",
  "composition": " Л.Бетховен. ''Багатель'', тв.119",
  "videoUrl": " https://drive.google.com/file/d/1ZPHGQDAyftoAW0aKOT2snfa8MjgalcZQ/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61393"
  },
  "name": "Федорченко Євгенія, 10 років",
  "composition": "О.Білаш.''Скерцо''",
  "videoUrl": " https://drive.google.com/file/d/1h1isGwveW1uiW3U2xeO2WWuFxvSSvQ-L/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61394"
  },
  "name": "Федотова Катерина, 12 років",
  "composition": " 1) С. Борткевич.''Етюд'' фа дієз мінор, 2) Ф.Шопен. ''Ноктюрн''до дієз мінор",
  "videoUrl": " https://drive.google.com/file/d/1eQBXy6khLci4fJNG8BaCM1ZFLkKj0NRw/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61395"
  },
  "name": "Федчук Аліна, 11 років",
  "composition": "1)А. Діабеллі. Сонатина №1, ІІІ.ч; 2)Дж. Ласт.'' Самотній пастух''",
  "videoUrl": " https://drive.google.com/file/d/1jrFbvdgG2NlU-b416-uR0birDrW-PnIH/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61396"
  },
  "name": "Федюк Володимир, 12 років",
  "composition": "1) К.М.Вебер.Сонатина до мажор; 2)О.Гончарук. ''Зелений'' із збірки ''Веселка''",
  "videoUrl": " https://drive.google.com/file/d/1H_Iw89xjf1o27PtP_neQI78ByP65yEvY/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61397"
  },
  "name": "Хоу Жуй, 12 років",
  "composition": "1)П.І.Чайковський. ''Жовтень'', 2)Е.Веврик. ''Гандзя''",
  "videoUrl": " https://drive.google.com/file/d/1XZwWXt6hQASuYftSNr5sTPErstFUV58R/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61398"
  },
  "name": "Чиж Ніна, 10 років ",
  "composition": "1)Й.Гайдн Соната №4, Іч; 2)Л.Дьяконенко. ''Пробачення у мами''",
  "videoUrl": " https://drive.google.com/file/d/1aIUr0h-N5290B6KaImXkJHmSDik_Uawe/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61399"
  },
  "name": "Чідера Самуель Умех, 10 років",
  "composition": "1)  П.Чайковський. ''Старовинна французька пісенька''. 2) Д.Кабалевський.''Клоуни''",
  "videoUrl": " https://drive.google.com/file/d/1pLYAmRBXwzIn1x3XHhvLre_ANZJT2p8w/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6139a"
  },
  "name": "Шаталова Ілона, 10 років",
  "composition": "1)Ф. Гіллер. ''Маленьке рондо''; 2)В. Косенко. ''Вальс'' сі мінор",
  "videoUrl": " https://drive.google.com/file/d/1Ug56cbY1CUBhO1-tZfucRAuAHbIFKz9c/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6139b"
  },
  "name": "Шевченко Маргарита, 10 років ",
  "composition": "1)С.Баландін. Варіації,          2)Т.Браун. ''Танець вітру''",
  "videoUrl": " https://drive.google.com/file/d/1pkBBqfS-pmFxb5nNdAch9WXUpGqsUxa8/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6139c"
  },
  "name": "Шепетько Олександр, 11 років ",
  "composition": "1) Ф.Шопен. Мазурка,тв.67 № 4, 2)Е.Гріг. ''Танець із Йольстера''",
  "videoUrl": " https://drive.google.com/file/d/1VbhVjWrUitTo--83I5FWNydQrPC3YGyR/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6139d"
  },
  "name": "Шумська Надія, 12 років",
  "composition": "1)С.Борткевич.''Темна кімната'', 2)В.Неугасімов.Скерцо",
  "videoUrl": " https://drive.google.com/file/d/1k66-Wry63S8x7t48GWUjY0e6O1xqeUot/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b6139e"
  },
  "name": "Арутюнян Ліда, 14 років",
  "composition": " 1)Й.Гайдн. Соната №20, Іч.; 2)Л.Шукайло.''Ємеля''",
  "videoUrl": " https://drive.google.com/file/d/1Bj568cnRdDZMKrMYfLT8kCbHm4yfXb2k/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b6139f"
  },
  "name": "Базилюк Наталія, 16 років",
  "composition": " 1)Я.Сібеліус. Прелюдія ля мінор,2)І.Беркович.Прелюдія фа дієз мінор",
  "videoUrl": " https://drive.google.com/file/d/1GaWeZbKc6SiIudiYQVBgFxaiOO9SEskA/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a0"
  },
  "name": "Білогуб Антон, 13 років ",
  "composition": "Л.Бетховен. Легка соната фа мінор, І ч.",
  "videoUrl": " https://drive.google.com/file/d/1fHUmtMWOjGN9p5xaSrcIOvQEu-koTGaT/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a1"
  },
  "name": "Білогуб Антон, 13 років",
  "composition": " О.Строк. ''Місячна рапсодія''",
  "videoUrl": " https://drive.google.com/file/d/1fqnNOFvNnVUcI1LUZ-TqgFzCl5XFE_si/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a2"
  },
  "name": "Бірук Таміла, 14 років",
  "composition": "1)М.Клементі.Сонатина, тв.26№3, 2)Я.Сібеліус. ''Ялина''",
  "videoUrl": " https://drive.google.com/file/d/14_B26LPyzQjk_aBZxGFWIq8Rz6KRCBnX/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a3"
  },
  "name": "Боровікова Єлизавета, 15 років",
  "composition": " 1)М.Бобер. ''Діамантова рапсодія'', 2)Ф.Сай. ''Чорна земля''",
  "videoUrl": " https://drive.google.com/file/d/1pO1FGqB-K6tth8pPRMBCal_rsceSMx20/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a4"
  },
  "name": "Бурухіна Катерина, 13 років",
  "composition": "1) Й.Гайдн. Соната мі мінор, Іч., 2) С.Нікітін.''Наспів''",
  "videoUrl": " https://drive.google.com/file/d/1rpLH63SzNTHeMyXHk7rCheswScKu9_cH/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a5"
  },
  "name": "Вашуріна В., 13 років ",
  "composition": "1) В.Косенко. ''Поема-Легенда'', 2) О.Саратський.''Коломийка''",
  "videoUrl": " https://drive.google.com/file/d/1y9kusgtqXgIgfFc16l_5qvgF_Jy62vX7/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a6"
  },
  "name": "Вишневська Анна, 13 років ",
  "composition": "Ж. Бізе.''Дзига''",
  "videoUrl": " https://drive.google.com/file/d/1YN-2yp1ocRVE1RdXq2L7sj9q_A8yv5PO/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a7"
  },
  "name": "Вишневська Анна, 13 років",
  "composition": "К. Лавалле. ''Метелик''",
  "videoUrl": " https://drive.google.com/file/d/161tFqTFJoja2OVDvHKTtIWPjNQ-2Lfx1/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a8"
  },
  "name": "Герасимчук Мілєна, 15 років ",
  "composition": "М.Таравердієв. ''Спогад''",
  "videoUrl": " https://drive.google.com/file/d/1Ao0wOx50UcKLaX8gpE3W9t65DC6KphrM/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a9"
  },
  "name": "Герасимчук Мілєна, 15 років",
  "composition": " О.Білаш.''Танець ляльок''",
  "videoUrl": " https://drive.google.com/file/d/1xnbfjBmzclN4-tl6t9EGDm3yjLGjwpR5/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613aa"
  },
  "name": "Гордієнко Єлизавета, 19 років",
  "composition": "1)Й.С.Бах.Прелюдія і фуга ре мінор, ДТК-І, 2)С.Борткевич. Прелюдія до дієз мінор",
  "videoUrl": " https://drive.google.com/file/d/1oxBe6N3altFp3UktF5FdGYFrdXyHDHWf/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ab"
  },
  "name": "Грещак Марія, 14 років",
  "composition": "1)К.Черні. Етюд ля мажор; 2)Ю.Щуровський.''Елегічний прелюд''",
  "videoUrl": " https://drive.google.com/file/d/1IwuLrdPakxH1f6ZPfmw7d7vGchKjoU6m/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ac"
  },
  "name": "Дейнега Каріна, 14 років",
  "composition": "1) Л.Бетховен. Соната №14, І ч.; 2) С.Жданов. ''Прелюд''",
  "videoUrl": " https://drive.google.com/file/d/1c5iWC9b5J3Tw3OWTDKSwM95CFTFBly4t/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ad"
  },
  "name": "Дячук Зоряна, 13 років ",
  "composition": "1)Ю.Щуровський. ''Ранок'', 2)Н.Нижанківський. ''Коломийка''",
  "videoUrl": " https://drive.google.com/file/d/1SsVrIFRfitLvzM37-UWnfGNcsj07Ou_2/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ae"
  },
  "name": "Іщук Катерина, 15 років",
  "composition": " К.Черні. Етюд №1,тв.740",
  "videoUrl": " https://drive.google.com/file/d/1nscqS5e1pUwtdIOSOIeXAVHRGjFu_3Mn/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613af"
  },
  "name": "Іщук Катерина, 15 років",
  "composition": "Ф.Шопен.''Ларго''",
  "videoUrl": " https://drive.google.com/file/d/1EoKeSr7BIeLw0KsjCtp1DEDJ_8Xggxnq/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b0"
  },
  "name": "Іваночко Антоніна, 13 років.",
  "composition": " 1)Й.С.Бах. Прелюдія і фуга до дієз мінор ДТК-І, 2) К.Черні. Етюд №6 тв.740",
  "videoUrl": " https://drive.google.com/file/d/1uTqORJIxI65uKq4-2RqOXnVuXjoQPKkS/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b1"
  },
  "name": "Кареліна Крістіна, 13 років",
  "composition": "Й.С. Бах.Прелюдія і фуга ре мінор, ДТК-ІІ",
  "videoUrl": " https://drive.google.com/file/d/1FmhW2Ol9tl-fV7ROatz3mEnb1C0VwAbx/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b2"
  },
  "name": "Кареліна Крістіна, 13 років",
  "composition": " В.А. Моцарт. Соната №8, Іч.",
  "videoUrl": " https://drive.google.com/file/d/1jFt0zknGa8vvXxDRKQo5x1Ydzcr-IxHR/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b3"
  },
  "name": "Каськів Андрій, 14 років ",
  "composition": "А.Лешгорн. Етюд фа дієз мінор",
  "videoUrl": " https://drive.google.com/file/d/14uKZUG7l1REwDkXkvR6fYBjQiTPZC3ko/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b4"
  },
  "name": "Каськів Андрій, 14 років",
  "composition": " К.Дебюссі. ''Місячне сяйво''",
  "videoUrl": " https://drive.google.com/file/d/1SPNLI8VvFhKzpRwN9-iBRuTddPfJuUe-/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b5"
  },
  "name": "Кирилова Олександра, 13 років ",
  "composition": "1) Т.Браун. ''Шторм, що наближається'', 2) П.Захаров. ''Рондо-галоп''",
  "videoUrl": " https://drive.google.com/file/d/1WHj--haYnE7pWtfHBoypXnhm7i0insvG/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b6"
  },
  "name": "Кондратюк Аліна, 14 років",
  "composition": "1) О.Дюбюк. Варіації, 2) О.Білаш.''Роздум''",
  "videoUrl": " https://drive.google.com/file/d/1RwfSQtTfwWpLDzYyGfmFyOKdy_SrK7SZ/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b7"
  },
  "name": "Косенко Аліса, 13 років",
  "composition": "1) А.Караманов. ''Зруйнований храм'', 2)С.Рахманінов. Прелюдія №7, тв.23",
  "videoUrl": " https://drive.google.com/file/d/1-6kYrtQuHZNk5ChAaWLv7IRZzk22Wddh/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b8"
  },
  "name": "Кочубей Ярослав, 14 років",
  "composition": "Обр. Є.Веврика.''Молдавські наспіви''",
  "videoUrl": " https://drive.google.com/file/d/19KjKHfI-uij6j3mNCYZ26LLZMoBbYk9r/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b9"
  },
  "name": "Кочубей Ярослав, 14 років ",
  "composition": "Ф.Кулау. Сонатина №55",
  "videoUrl": " https://drive.google.com/file/d/1R7HwXpLbO1tiz3KzMg35t4N3Bmx7ABOL/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ba"
  },
  "name": "Куліковська Катерина, 14 років",
  "composition": "1) Й.С.Бах. Прелюдія і фуга фа дієз мажор, ДТК-І, 2) С.Борткевич. Етюд №9, тв.15",
  "videoUrl": " https://drive.google.com/file/d/1zQjsqGpWqWYkejPYN_TG-E0mMA8cSj-r/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613bb"
  },
  "name": "Макаревич Наталія, 15 років ",
  "composition": "1)Й.С.Бах. Прелюдія і фуга ре мінор, ДТК-І, 2)О.Бордюгова. ''Український романс''",
  "videoUrl": " https://drive.google.com/file/d/1irVBVS0WDufWZC2YEB57uUMLWbw8BLnR/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613bc"
  },
  "name": "Малярчук Єлізавета, 13 років ",
  "composition": "1)С.Борткевич. Етюд №9, тв.15, 2)Ф.Шопен.''Гулянка''",
  "videoUrl": " https://drive.google.com/file/d/1om0hfVgra-VSx6YXhJbpZwLRbe0a8BE-/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613bd"
  },
  "name": "Опанасюк Тарас, 13 років",
  "composition": "1) П.Захаров. ''Токата-прелюдія'', 2) Е.Гріг. ''Ноктюрн''",
  "videoUrl": " https://drive.google.com/file/d/1gghwyH2Ax-AeVuelbSWsS0oIoAxS_uJD/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613be"
  },
  "name": "Ослам  Єлизавета, 14 років",
  "composition": "1) П.Чайковський.''Лютий'' із циклу''Пори року'',     2) Н.Лагодюг. ''Танго мрій''",
  "videoUrl": " https://drive.google.com/file/d/1mq4-ZBYZmlnGPzJY1jR_QVr0Gz75aMlX/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613bf"
  },
  "name": "Панімаш Ірина, 15 років",
  "composition": "1) Й.Гайдн.Соната до мажор (№50), І ч.; 2) С.Рахманінов.''Музичний момент'', тв.16 №4",
  "videoUrl": " https://drive.google.com/file/d/1h_KQ_WpvmjZFsXE4XT_Mdf23sk4K9GTs/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c0"
  },
  "name": "Петрусь Наталія, 13 років",
  "composition": "1)Ф.Ліст.''Романс'',     2)Е.Гіллок.''Вальс-етюд''",
  "videoUrl": " https://drive.google.com/file/d/1O15_CujwttaF1BxXgW844w6ABUQkujfb/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c1"
  },
  "name": "Прищепа Анна, 14 років",
  "composition": "1) М.Шмітц. Джазова інвенція №13,  2) О.Девіс.''Щасливий день''",
  "videoUrl": " https://drive.google.com/file/d/1JKMIlun3RehERqKaSHpl6SJ6eyuuq3aW/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c2"
  },
  "name": "Прокопчук Олександра, 17 років",
  "composition": " В.Верменич. ''Чорнобривці''",
  "videoUrl": " https://drive.google.com/file/d/1FNL7e6qh8SOKlUxMoRtA7rSY8NhanlX-/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c3"
  },
  "name": "Прокопчук Олександра, 17 років",
  "composition": " Ф.Шпиндлер. Сонатина,ІІІ ч.",
  "videoUrl": " https://drive.google.com/file/d/1KGMCcN6_BWPdiwzrRIuA3NdxUeJbwI1j/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c4"
  },
  "name": "Пучко Софія, 13років ",
  "composition": "1)М. Дворжак. Етюд 2 (2-й зошит), 2)В. Верменич. ''Чорнобривці''",
  "videoUrl": " https://drive.google.com/file/d/14WfsFv4An2FbV_uFjhqREI87-IfzQUb8/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c5"
  },
  "name": "Радковська Аліна, 13 років ",
  "composition": "Е. Гріг. Етюд пам'яті Ф.Шопена",
  "videoUrl": " https://drive.google.com/file/d/1_aBN8JgrmFmVfuVYW4s0leNNYxfP59So/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c6"
  },
  "name": "Радковська Аліна, 13 років",
  "composition": " Ф.Ліст. ''Сумний степ''",
  "videoUrl": " https://drive.google.com/file/d/1n2mSaPNwrVjlcPAohViYro24WziktB0j/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c7"
  },
  "name": "Рибкіна Олександра, 15 років",
  "composition": "1) М. Терещук. ''Фуга Lockdown''; 2)М.Бобер.''Опівнічна рапсодія''",
  "videoUrl": " https://drive.google.com/file/d/1sPVEB2VIt_oDZM0pmBUQ5jUoUBNivTwe/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c8"
  },
  "name": "Руссу Ганна, 14 років",
  "composition": "1)Г.Волленгаупт. ''Характерна п'єса у формі етюда'', 2)Ю.Щуровський. ''Елегія''",
  "videoUrl": " https://drive.google.com/file/d/1aEeFiUX_AvRcRMG-4hBA3i8c45EsZH9m/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c9"
  },
  "name": "Рущинська Ксенія, 14 років",
  "composition": "Е.Гріг. ''Мелодія''",
  "videoUrl": " https://drive.google.com/file/d/1072JNwvEm6CduA_GePsABu5_Yk6M02zH/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ca"
  },
  "name": "Рущинська Ксенія, 14 років ",
  "composition": "Й.С. Бах.''Маленька прелюдія'' до мінор",
  "videoUrl": " https://drive.google.com/file/d/1NDk_jKO5SHbnsaXATA1-YwgKe4bAmIdn/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613cb"
  },
  "name": "Свинцицька Емілія, 14 років",
  "composition": "1)В.Квасневський.''Думка''; 2)Д.Крамер. ''Танцюючий скрипаль''",
  "videoUrl": " https://drive.google.com/file/d/1algz_oukRxT2kPAFyXoX-QjIA34pICcm/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613cc"
  },
  "name": "Свиридюк Денис, 16 років",
  "composition": "1)Й.С.Бах. Триголосна інвенція №12, 2)Г.Галинін. ''Арія''",
  "videoUrl": " https://drive.google.com/file/d/146GFgHaXL3xHVFZw-hrHrxk4977lrNgh/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613cd"
  },
  "name": "Селіванова Анна, 14 років",
  "composition": "1)Ю.Щуровський. ''Елегічний прелюд'' сі мінор, 2)М.Дворжак.''Джазовий етюд'' №6 (2 зошит)",
  "videoUrl": " https://drive.google.com/file/d/1JucNtO1D93kqL8woJbk_BJiDjdgGxsQ6/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ce"
  },
  "name": "Семенов Іван, 15 років ",
  "composition": "Е.Дога. ''Сонет''",
  "videoUrl": " https://drive.google.com/file/d/1L0U_HouKRP4y3gPZbVLkzumyYD2ezE2D/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613cf"
  },
  "name": "Семенов Іван, 15 років ",
  "composition": "І.Мошeлeс. Eтюд №8,тв.70",
  "videoUrl": " https://drive.google.com/file/d/1_fwY3rkpcIlWjc1Ry_Ytihu-owWp2mgk/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d0"
  },
  "name": "Симоненко Таміла, 13 років ",
  "composition": "1) Л.Бетховен. Соната №19 тв.49, І частина, 2)П.Чайковський .''Підсніжник'' з циклу ''Пори року''",
  "videoUrl": " https://drive.google.com/file/d/1PmEjgOV2YYZiRIUBpTDIHjur-lzR_flv/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d1"
  },
  "name": "Снігур Анна, 13 років",
  "composition": "1)БХаваші. ''Шторм'', 2)Ф.Сай. Варіації",
  "videoUrl": " https://drive.google.com/file/d/1hm_xDHOZTzUCS4UZIso7MHZ3ibkvAIbb/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d2"
  },
  "name": "Тернова Ксенія, 14 років ",
  "composition": "1) І.Беркович. Прелюдія №10, 2)Е.Гріг. ''Похід гномів''",
  "videoUrl": " https://drive.google.com/file/d/1jJoY8kdzeUKl5zU5gLe5du8lhGalBIYB/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d3"
  },
  "name": "Ткачук Вікторія,  14 років",
  "composition": "1) Ф. Мендельсон.  ''Пісня без слів'', 2) В. Гіллок  ''Вальс-етюд''",
  "videoUrl": " https://drive.google.com/file/d/1Ki5C-tanjxy2My7kZ6kWgYEWMAOEYFc9/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d4"
  },
  "name": "Трачук Олександр, 13 років",
  "composition": "П. Захаров.  ''Рондо-галоп''",
  "videoUrl": " https://drive.google.com/file/d/18DlN1b4K1sXrdvvb3A8pHmJFvXwbzYrd/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d5"
  },
  "name": "Трачук Олександр, 13 років",
  "composition": " Д.Фільд. ''Ноктюрн'' №5",
  "videoUrl": " https://drive.google.com/file/d/1L3JxoWPr6jxM5Q3pxO0BBX2U4UiFnE_H/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d6"
  },
  "name": "Федонюк Олександр, 13 років",
  "composition": "1)Й.Гайдн. Соната №23, фа мажор, Іч.; 2)Й.С.Бах. Прелюдія і фуга №23, ДТК-І",
  "videoUrl": " https://drive.google.com/file/d/1i2fuOPVMqQfINCT2ZJbTJXccz5Afb_h5/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d7"
  },
  "name": "Хвостова Олександра, 13 років",
  "composition": "1)Ф.Ліст.Юнацький етюд №2, 2)О.Козаренко-А.Кос-Анатольський. ''Ой ти, дівчино, з горіха зерня''",
  "videoUrl": " https://drive.google.com/file/d/1GnsAZsugdqBLL6hKCGlleA8ZK_qT18Fj/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d8"
  },
  "name": "Храменкова Анастасія, 13 років ",
  "composition": "1)В.Коровіцин.''Русалонька'', 2)М.Скорик.''Жартівлива п'єса''",
  "videoUrl": " https://drive.google.com/file/d/1C0uSpeSybfdaIXYlmYwMrZ5JUsdb7Rb9/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d9"
  },
  "name": "Хелман Віолета, 13 років",
  "composition": "1)УГіллок.''Пурхаючи в хмарках'', 2)В.Ходош.''Червона шапочка''",
  "videoUrl": " https://drive.google.com/file/d/1zuyEGt3cvZ3sVjKnA3CJTZVL2vEVgXWy/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613da"
  },
  "name": "Шибанова Варвара, 13 років ",
  "composition": "Ф.Шопен. Ноктюрн №2, тв.9",
  "videoUrl": " https://drive.google.com/file/d/1r1jURFKC555wKMR7ClSymtTG_DWwvgvZ/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985428683dda47f8b613db"
  },
  "name": "Шибанова Варвара, 13 років",
  "composition": " С.Борткевич.Етюд №7, тв.29",
  "videoUrl": " https://drive.google.com/file/d/1KTUYP3gWn4PTTGG1Y__FKrI1s5GkXBoO/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613dc"
  },
  "name": "Антонюк Марія, 21 рік",
  "composition": "1) М.Метнер. ''Дві казки'', 2)І.Шамо. ''Токата''",
  "videoUrl": "https://drive.google.com/file/d/1AFVEG3M3gU1yIaIc5YncRhUIAlwf8AVj/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613dd"
  },
  "name": "Бобрішова Інеса, 16 років",
  "composition": " 1) Й.Гайдн. Соната ре мажор, І ч.;   2) С.Прокоф'єв. ''Сарказм'',тв.17 №1",
  "videoUrl": "https://drive.google.com/file/d/19JHuESQVHM6bpupPsvdUn4elQRbgO23e/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613de"
  },
  "name": "Бянова Дарина, 16 років",
  "composition": "1)Ф.Шопен. Ноктюрн, тв.27№2,      2)Д.Задор. Етюд до мінор",
  "videoUrl": "https://drive.google.com/file/d/1-CBceHEbKge32X6ND1F_zFVQ-2Rb44Yw/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613df"
  },
  "name": "Вознюк Ангеліна, 17 років",
  "composition": "1)Я.Степовий. Прелюдія,       2)Я.Сібеліус. Етюд",
  "videoUrl": "https://drive.google.com/file/d/1y7QHtGukJoocS0B_diwzJu-VQY8WB9op/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e0"
  },
  "name": "Гук Софія, 16 років",
  "composition": " С.Рахманінов. ''Гумореска''",
  "videoUrl": "https://drive.google.com/file/d/1kPQT_uTxaIlalqx_aapSpid2SZgP7jq6/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e1"
  },
  "name": "Гук Софія, 16 років",
  "composition": " М. Лисенко. ''Журба''",
  "videoUrl": "https://drive.google.com/file/d/1NuhdlOqXePr8exdMp0gXTAl6FfkgkDuN/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e2"
  },
  "name": "Гулова Ангеліна, 18 років ",
  "composition": "1)Ф. Шопен. Ноктюрн тв.48 №1,     2)П. Санкан. Токата",
  "videoUrl": "https://drive.google.com/file/d/1znh9RU-pCp3rHxqyVuP44D4CkYm59GjN/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e3"
  },
  "name": "Дановська Ольга, 17 років ",
  "composition": " В.Барвінський Прелюдія №4 ''Хорал''",
  "videoUrl": "https://drive.google.com/file/d/1YLd2FP5IxDneIcOMWgWTgCfubBOYJQPr/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e4"
  },
  "name": "Дановська Ольга, 17 років",
  "composition": "К.Лядов Прелюдія, тв.39 №4",
  "videoUrl": "https://drive.google.com/file/d/1wogVZv8WVyQtLFsopwaRBx1RQOxlzCFI/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e5"
  },
  "name": "Дудник Дар'я, 17 років",
  "composition": " В.Барвінський.''Листок з альбома''",
  "videoUrl": "https://drive.google.com/file/d/1l_HE3r0O5usjOHcNuMpNDYg_g6d2S35t/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e6"
  },
  "name": "Дудник Дар'я, 17 років ",
  "composition": "К.Дебюссі. '' Романтичний вальс''",
  "videoUrl": "https://drive.google.com/file/d/1qLgq9AfD6YXCyPQyFejlyZ8BONuSoN_4/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e7"
  },
  "name": "Крюкова Марія, 15 років ",
  "composition": "1)С.Борткевич. ''Примхи моря'', 2)Ф.Шопен.Етюд тв.10 №4",
  "videoUrl": "https://drive.google.com/file/d/1-cbo3BZ1EPNYm6NS1eCMm_2HTzHJ7Bek/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e8"
  },
  "name": "Куліш Поліна, 15 років ",
  "composition": "1)Е.Гріг.''Колискова'', 2)І.Падеревський.''Скерцино''",
  "videoUrl": "https://drive.google.com/file/d/1NamVVFfAdRfaFuA1uKjlt9QIWgMiSBy6/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e9"
  },
  "name": "Музиченко Марія, 19 років ",
  "composition": "1)Й.Гайдн. Соната №31, 1ч.; 2)Ф.Шопен.Етюд,тв.10 №5",
  "videoUrl": "https://drive.google.com/file/d/1O-ahfYJNbFf5fSOwSSpffIWWpniBubK8/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613ea"
  },
  "name": "Олійник Олександр, 18 років",
  "composition": "1)Ж.Бізе-В.Горовіц. Варіації на тему з опери ''Кармен'', 2)Л.Ревуцький. Прелюдія фа дієз мінор",
  "videoUrl": "https://drive.google.com/file/d/13JylPdDWgVz6QSHRGVJt7FhdaRelCHSD/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613eb"
  },
  "name": "Смик Анна, 17 років ",
  "composition": "С.Рахманінов. Етюд-картина тв.33 №5, соль мінор",
  "videoUrl": "https://drive.google.com/file/d/1k7okBuyMsFaRt4GwwXUSgYCh5DdY6MN9/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613ec"
  },
  "name": "Смик Анна, 17 років ",
  "composition": "С.Рахманінов. Прелюдія, тв. 32 №12, соль дієз мінор",
  "videoUrl": "https://drive.google.com/file/d/1LYHHVKuUIisadE2fmzwYzmwsS-UwVxVR/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613ed"
  },
  "name": "Тіхонок Єгор, 17 років",
  "composition": "1)С.Борткевич.''Скелі ущелини Уч-Кош'' з сюїти ''Кримські нариси''.тв.8, 2)Ф.Ліст.Трансцендентний етюд №10, фа мінор",
  "videoUrl": "https://drive.google.com/file/d/1xn3TfNH6GFBBQo1vZZNnRRVqbtjGGug2/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613ee"
  },
  "name": "Фащевський Тарас",
  "composition": "С.Рахманінов. ''Етюд-картина'', тв.33 (5)",
  "videoUrl": "https://drive.google.com/file/d/1eqTPXl_RhZQOdVr-lhUQmlOM8coC6FoK/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613ef"
  },
  "name": "Фащевський Тарас",
  "composition": "Л.Ревуцький. Прелюдія, тв.4 (2)",
  "videoUrl": "https://drive.google.com/file/d/1-_boMnoYnk74xDzQy6QlCqVxIP3j4sHx/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f0"
  },
  "name": "Фесик Назарій, 16 років",
  "composition": "1)С.Борткевич.''Lyrica Nova'',тв.59 №3,4; 2)Ф.Ліст.Трансцендентний етюд №8 ''Дике полювання''",
  "videoUrl": "https://drive.google.com/file/d/1c0sj4AMuDxHApmGT9WShmjJHbEHRzJdC/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f1"
  },
  "name": "Юзлова Любов, 17 років",
  "composition": " 1) К.Дебюссі. ''Арабеска''№1, 2) Й.Брамс.''Інтермеццо'', тв.117 №2",
  "videoUrl": "https://drive.google.com/file/d/1LADInWpm-jhc1FbRudgqwCMGtzXQDBMS/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f2"
  },
  "name": "Заєць Марина",
  "composition": "М. Скорик.''Вальс'' з Партити №5",
  "videoUrl": "https://drive.google.com/file/d/11mlZznZboxhzxEBTJ4gUmEtE0JYgQgdh/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f3"
  },
  "name": "Заєць Марина",
  "composition": "П.Чайковський. ''Думка'', тв.59",
  "videoUrl": "https://drive.google.com/file/d/1PaUp-aqQdCqBt35662yNwJkhaNOAXN_h/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f4"
  },
  "name": "Логвиновський Євгеній",
  "composition": "Д.Притскер. ''Блюз Пікассо''",
  "videoUrl": "https://drive.google.com/file/d/1e2_4isQzlucLR7kBZX-CHxgqYrBxJRZw/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f5"
  },
  "name": "Логвиновський Євгеній",
  "composition": "С.Прокоф'єв. Соната №3, тв.28",
  "videoUrl": "https://drive.google.com/file/d/1DLhT9YwR5I9cZxzdNoe22FwS8jpI4YVs/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f6"
  },
  "name": "Микитюк Анастасія",
  "composition": "М.Раков. ''Концертний етюд''",
  "videoUrl": "https://drive.google.com/file/d/1C8a6TPRM2caQfTOA6zGHvuIjGSoL7C1b/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f7"
  },
  "name": "Микитюк Анастасія",
  "composition": " Й.С.Бах. Прелюдія і фуга до мінор, ДТК -ІІ",
  "videoUrl": "https://drive.google.com/file/d/1wrqdb_ke2Kch_CfBcmNRH2M580PtZQA1/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f8"
  },
  "name": "Назаренко Ксенія",
  "composition": "І.Волкова. ''Настрої''",
  "videoUrl": "https://drive.google.com/file/d/1OA8rvN6wwdpOVy1DVDt1zq-4pkeiSr3x/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f9"
  },
  "name": "Назаренко Ксенія",
  "composition": "Й.Бах. Алеманда",
  "videoUrl": "https://drive.google.com/file/d/10qtURWd3aascq2gwNHxM-FETyQHLB8tD/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613fa"
  },
  "name": "Серов Владислав",
  "composition": "1)Й.С. Бах. Прелюдія і фуга до мінор, ДТК-ІІ, 2)Ф.Шопен. Балада №1, тв.23",
  "videoUrl": "https://drive.google.com/file/d/1atn5yiEcXgjVnFKfM4QWAUS4z_UVTJ_q/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613fb"
  },
  "name": "Тарасов Владислав",
  "composition": "1)С.Рахманінов. ''Етюд-картина'', тв.39 №9, 2)Ф.Шопен. ''Балада'', тв.23 №1",
  "videoUrl": "https://drive.google.com/file/d/19NZ_tEy0O2nRXjCltd_vdWL3SMuBNaCM/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613fc"
  },
  "name": "Гребенюк Г.О.",
  "composition": "1)С.Прокофьев. Соната №2,І ч.;2)   Ф.Ліст.''Етюд за каприсами Паганіні''",
  "videoUrl": "https://drive.google.com/file/d/1ShUYIYP9ngoQZehmCbzP5F3bJAKFh3sN/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613fd"
  },
  "name": "Кондратюк М.О. ",
  "composition": "1)Р.Шуман. ''Романс'', тв.28, 2)В.Косенко. ''Куранта''",
  "videoUrl": "https://drive.google.com/file/d/1FOb41PsmqWO4nyODkOdoMT4SsPp4HX9x/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985441683dda47f8b613fe"
  },
  "name": "Опанасенко А.О. ",
  "composition": "1)С.Рахманінов. Прелюдія соль дієз мінор, 2)В.Філіпенко. Токата",
  "videoUrl": "https://drive.google.com/file/d/1VLXELuZcI6Qi2grlwaU-uEwlLv1eSEkX/preview",
  "group": "Номінація \"Фортепіано соло\""
}];
let concertmasters = [{
  "id": {
    "$oid": "6098c8f6683dda47f8b613ff"
  },
  "name": "Кобзар Ніколь, 14 років",
  "composition": "Ф.Крейслер.''Маленький Віденський марш''",
  "videoUrl": "https://drive.google.com/file/d/1kuSR0VmOMiqIj9YR0u3lvOzq4JG5aLY8/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61400"
  },
  "name": "Кобзар Ніколь, 14 років",
  "composition": "Е.Ельгар.''Салют кохання''",
  "videoUrl": "https://drive.google.com/file/d/11gI7Xlj_SLQql2Pi6ETAhSAZTKLMjkBn/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61401"
  },
  "name": "Сабо Нестор, 10 років ",
  "composition": "1)В.Кролл. ''Полька віслючка'', 2)В.Цибін(перекл.А.Царенко). ''Листок з альбома''",
  "videoUrl": "https://drive.google.com/file/d/14PR5evrUIRaS1VFUvu0s69HMH7xS3WiI/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61402"
  },
  "name": "Смірнова Євгенія, 9 років ",
  "composition": "Л.Бетховен. ''Бабак'',обр. А. Шувалова",
  "videoUrl": "https://drive.google.com/file/d/1ir2aRKco82NwzR2FQH6ApZVHQZYr0L7y/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61403"
  },
  "name": "Смірнова Євгенія, 9 років ",
  "composition": "О.Бец. ''Подільські викрутаси''",
  "videoUrl": "https://drive.google.com/file/d/1qJQ9AIWj48pJTMBWfo3h7z6JlKJH980n/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61404"
  },
  "name": "Старцев Бенжамін, 11 років ",
  "composition": "1) Ж.Массне. ''Роздум''; 2)Е.Рибкін. ''Формула 1''",
  "videoUrl": "https://drive.google.com/file/d/1L6bxDysN0y2GDSNnRXqGEFbHR7eS-ixs/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61405"
  },
  "name": "Власюк Назар, 18 років ",
  "composition": "1)С.Доноті. Арія''O del mio amato ben'',2)Е.Гріг,Г.Х. Андерсен ''Jeg elsker dig''",
  "videoUrl": "https://drive.google.com/file/d/12_MFPU39btJQKvSt2RYzjiU0HaYsa4Og/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61406"
  },
  "name": "Дячек Іоанна, 17років ",
  "composition": "1)В.А.Моцарт.Арія''Ridente la calma'', 2)Ф.Надененко, І.Франко.Романс ''Чого являєшся мені у сні''",
  "videoUrl": "https://drive.google.com/file/d/1EQbQKbWivCb-gOQkccICL5APQjgWle9w/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61407"
  },
  "name": "Кваша Яна, 16 років",
  "composition": "1)Й.Кванц. Соната ре мажор, І-ІІ ч.; 2)В.Попп. ''Русский вечер''",
  "videoUrl": "https://drive.google.com/file/d/1opL41mLH10Bnr1eMyzOExswFJoTZ_8cS/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61408"
  },
  "name": "Колодій Антон, 18 років",
  "composition": "1) П.Чайковський. Романс''Горними тихо летела душа небесами'', 2)С.Рахманінов. ''Елегія'',тв.3№1, обробка для віолончелі та ф-но",
  "videoUrl": "https://drive.google.com/file/d/1lQIzDOiZp-EdXly10SVm4diOj5WCSk3Z/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61409"
  },
  "name": "Конюшек Софія, 21 рік",
  "composition": "О.Тактакішвілі. Соната для флейти і фортепіано.",
  "videoUrl": "https://drive.google.com/file/d/1HXE-WblU0-HywgVzCunQniQUCUNXGlNN/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140a"
  },
  "name": "Конюшек Софія, 21 рік ",
  "composition": "Ф.Комлев. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/14q78XKpdFg66VSWkAZq0VeRuKaTcJUpu/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140b"
  },
  "name": "Пчелінцева Адріана, 15 років",
  "composition": "1)В.Моцарт. Арія Блондхен з опери''Викрадення із Сераля'', 2)Р.Глієр.''В порыве нежности сердечной''",
  "videoUrl": "https://drive.google.com/file/d/17mRVxV06v5Mv6_P3C183oMgON-R_u-qO/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140c"
  },
  "name": "Фесик Назарій, 16 років ",
  "composition": "1)Дж.Пуччіні. Арія Тоски; 2)М.де Фалья.''Хота''",
  "videoUrl": "https://drive.google.com/file/d/1BJNsTp4WDxZbAdAnjMLP3hbD63T2eIwY/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140d"
  },
  "name": "Ярошенко Валерія, 19 років",
  "composition": "1)К.Стеценко. ''Сотояла я і слухала весну''; 2)В.Власов. Скерцо для домри та фор",
  "videoUrl": "https://drive.google.com/file/d/1OuDlacDb3i94xNxkowk-jsNktxuQK71L/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140e"
  },
  "name": "Козак Ірина",
  "composition": "Є.Бозза.''Дитячі мрії''",
  "videoUrl": "https://drive.google.com/file/d/1PsoyOIr17OCyN_GhRU_q7IpS4HWwHWUB/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140f"
  },
  "name": "Козак Ірина",
  "composition": "'Ніч яка місячна'', обр. Ю.Островського ",
  "videoUrl": "https://drive.google.com/file/d/1TJKQFEm3a3wziYvI3QfihGxzV2U5QH2n/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61410"
  },
  "name": "Микитюк Анастасія ",
  "composition": "1)Н.Бакланов. ''Концертіно'',      2)З.Багіров. ''Романс''",
  "videoUrl": "https://drive.google.com/file/d/1j8_mvZEGTgYI0LFGWFoLbQAgCHpI5C0Z/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61411"
  },
  "name": "Сав'юк Власта",
  "composition": "1)В.А. Моцарт. Концерт для фагота з оркестром сі бемоль мажор, Іч.; 2)А.Тансман.Сонатина для фагота і фортепіано,ІІІч.",
  "videoUrl": "https://drive.google.com/file/d/130aZO1nxV4E8HX7hxWaNvVT4bfgkhx4M/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61412"
  },
  "name": "Сасюк Юлія",
  "composition": "1)Г.Форе. ''Пробудження'', 2) Б.Барток. ''Шість румунських танців''",
  "videoUrl": "https://drive.google.com/file/d/1ods3tvUDXZdo1yedIVXYcc9Mn77bjh25/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61413"
  },
  "name": "Іванова Т.В.",
  "composition": "Е.Северн. ''Польський танець''",
  "videoUrl": "https://drive.google.com/file/d/1xXtvOSAunv56RfAxgV1q7m4iKa09sWH1/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61414"
  },
  "name": "Іванова Т.В.",
  "composition": "І.Тамарин ''Старовинний гобелен''",
  "videoUrl": "https://drive.google.com/file/d/149vlM07Gd8S9Cz4tDZ2KyKkguJzyB1uB/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61415"
  },
  "name": "Гачик О.А.",
  "composition": "1)Р.Глієр.''Романс'', 2)О.Циганков.''Інтродукція та Чардаш''",
  "videoUrl": "https://drive.google.com/file/d/1Ngs85qpEODEv67a8-daJxZoH6Ko7SUWk/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61416"
  },
  "name": "Гриців О.М.",
  "composition": "1)Ф. Крейслер.''Маленький віденський марш'', 2)Л. Ревуцький. ''Інтермецо''",
  "videoUrl": "https://drive.google.com/file/d/1nXkybPZHPOWWUzBED_KKeGF3kO2Ecabj/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61417"
  },
  "name": "Кірчанова І.В. ",
  "composition": "1)М.Відмонте.''Par zilo un raibo pasaku'', 2)Губаренко В. Концерт для флейти з камерним оркестром,тв.10",
  "videoUrl": "https://drive.google.com/file/d/1zpMjCauUpbJdufWXfb5Ofm7P9sAYj-iP/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61418"
  },
  "name": "Кекух О.В.",
  "composition": "1)І.Вимер. ''Гуцульська рапсодія'', 2)Укр.нар. танець в обр.В.Солонського ''Вечорниці''",
  "videoUrl": "https://drive.google.com/file/d/1dfPx15WQKHfPVtMPWWAAw9sy9UYw5S1e/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61419"
  },
  "name": "Лобода Л. М., ",
  "composition": "1)Л.Бетховен, Т.Шевченко. ''Зоре моя вечірняя'', 2)Лемківська народна пісня ''В темну нічку убочи''",
  "videoUrl": "https://drive.google.com/file/d/10gZo53X6EhHwEMpXKwpB2tW2_irVo290/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141a"
  },
  "name": "Любченко М.С. ",
  "composition": "Й.С.Бах. Концерт для скрипки з оркестром ля мінор",
  "videoUrl": "https://drive.google.com/file/d/1wfhuitXL2MwtYdrUHIkVdMxQZpht6jNl/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141b"
  },
  "name": "Любченко М.С.",
  "composition": "Н.Стецюн.    ''Болеро''",
  "videoUrl": "https://drive.google.com/file/d/1bHWUriqKvSTnVnIm47mmLedSi0Nh-XQs/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141c"
  },
  "name": "Михайлова М.В. ",
  "composition": "1)Й.Тамарин.''Старовинний гобелен'', 2)А.Солтан. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1EoES2mTrWCy9CQcqd9qu366Z1tz6IpRQ/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141d"
  },
  "name": "Мялькіна Н.О.",
  "composition": "Дж.Вільямс. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1iM_EF0Vx9-w4DS6HR_ZHRJ-mqJwA-FGp/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141e"
  },
  "name": "Мялькіна Н.О.",
  "composition": "С.Цинцадзе. ''Сачідао''",
  "videoUrl": "https://drive.google.com/file/d/159djSrzI1AvL5pkCl0vnYDsHQLTnd5lo/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141f"
  },
  "name": "Нікітіна І.Р.",
  "composition": "Б.Лятошинський. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1yQyO0Q65WvHnvY28xBl3shW-Htdu4239/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61420"
  },
  "name": "Нікітіна І.Р.",
  "composition": "Сл. А.М'ястківського, муз.В.Верменича ''Підкручу я чорнії вуса''",
  "videoUrl": "https://drive.google.com/file/d/1u_7UQDuOCDqJJj1q5lhEFPEoxd_PU3jY/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61421"
  },
  "name": "Саєнко Т.Ю. ",
  "composition": "Ж.Массне. ''Роздум''",
  "videoUrl": "https://drive.google.com/file/d/1JlAoY-AAJEyI-rIRDCu7UnywxvrWEBBw/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61422"
  },
  "name": "Саєнко Т.Ю., ",
  "composition": "Т.Чупак. ''Весняний рок-н-ролл''",
  "videoUrl": "https://drive.google.com/file/d/1T5-IUNUuQmUvFVWYlY6SAVej-TIqmbrq/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61423"
  },
  "name": "Савчук Т.І.  ",
  "composition": "1)Дж.Вільямс, аранж.А.Теплицької.''Колискова для ангела'',2)В.Козлов,перекл. для домри Є.Жукова.''П'єса у стилі фламенко''",
  "videoUrl": "https://drive.google.com/file/d/17Tgiuogivsh3xwjFXi5a1oRU-okkP960/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61424"
  },
  "name": "Смірнова І.Ю.",
  "composition": "А. Шумакова. ''Танго Евіти''",
  "videoUrl": "https://drive.google.com/file/d/11CkziRvYJvniW7cia7y9EkI85snLJw7x/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61425"
  },
  "name": "Смірнова І.Ю.",
  "composition": "В.Гомоляка. ''Іспанський танець''",
  "videoUrl": "https://drive.google.com/file/d/1iOUJN21BvDdzsL0oP0atvsEmoqgUdpYC/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61426"
  },
  "name": "Смолянінова С.М. ",
  "composition": "1)А.Дворжак. Концерт для скрипки ля мінор, І ч.; 2)М.Скорик. ''Карпатська рапсодія''",
  "videoUrl": "https://drive.google.com/file/d/1tlsrMkQp0UVq0ywtJ01LpHKPsmFOpHnO/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61427"
  },
  "name": "Старинська М.А. ",
  "composition": "1)Ю.Шинкаренко.Варіації; 2)Е.Боцца.''Арія''",
  "videoUrl": "https://drive.google.com/file/d/1LsWzV_Lt1z0gGXULSegouckY9RZroG7h/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61428"
  },
  "name": "Трепак М.І.",
  "composition": "1)Ж.Демерссман. Фантазія, 2)П.Ітурральде. ''Маленький чардаш''",
  "videoUrl": "https://drive.google.com/file/d/1TMSKHpEcmM3K7hiZzyY3g4K_8MtHbH9L/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61429"
  },
  "name": "Єрьоміна О.Г. ",
  "composition": "1) М.Дремлюга. Поема-рапсодія, 2) С.Орфеєв.''Веснянка''",
  "videoUrl": "https://drive.google.com/file/d/1Y6OKUOoJb1ju3VzS4FCtO4guBLHD910P/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6142a"
  },
  "name": "Кадук Т.Ю.",
  "composition": " 1)К.М.Вебер.Концерт для кларнета №1,І ч.; 2) Я.Мединьш. Романс",
  "videoUrl": "https://drive.google.com/file/d/1kWBHYUYRmXpm5BCGW9bnt8y9rixgPQZ4/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6142b"
  },
  "name": "Новікова М.М.",
  "composition": "Обр. Д.Задора. ''Серед села дичка''",
  "videoUrl": "https://drive.google.com/file/d/10aWVlOe3F-ssQhTVqkFng8GJKGJEwU80/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6142c"
  },
  "name": "Новікова М.М. ",
  "composition": "П.І.Чайковський.''Забыть так скоро''",
  "videoUrl": "https://drive.google.com/file/d/1tw5MNU-5fuXQoSOHpWtaGvGjZxcfMAfm/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6142d"
  },
  "name": "Сирота О.М.",
  "composition": "1)К.Кудрявцев. ''Один день з життя дятла'', 2)О.Бец.''Українське інтермецо''",
  "videoUrl": "https://drive.google.com/file/d/1SejB1id_PU7Xg-w5fzKUvJ0EoOnFsDMC/preview",
  "group": "Номінація \"Концертмейстер\""
}];
myCards = myCards.concat(concertmasters);
let ensemble = [{
  "id": {
    "$oid": "6098d647683dda47f8b61437"
  },
  "name": "Ф-ний дует (Журавель С., Артеменко С.)",
  "composition": "1)Ю.Щуровський. ''Іспанський танець'', 2)Обр.М.Попова. ''Єврейські мотиви''",
  "videoUrl": "https://drive.google.com/file/d/1KvcEE7qPS0raOCqd8saMEHo-y0UDIpCh/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61438"
  },
  "name": "Ф-ний дует  (Пилипчук Н., Кавун Є.)",
  "composition": "1) В.Алексеєв.'' На прогулянці'', 2)О.Петрова. ''Цирк''",
  "videoUrl": "https://drive.google.com/file/d/1nELotwqAz9C7d09G4NVBVvbRyKL958rs/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61439"
  },
  "name": "Ф-ний дует  (Радковська А., Кузьмич). ",
  "composition": "А.Шнітке. ''Шинель''",
  "videoUrl": "https://drive.google.com/file/d/1M4pazNI_Tyv2sDMW9oB9Qem36I5DRZuR/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143a"
  },
  "name": "Ф-ний дует  (Радковська А., Кузьмич). ",
  "composition": "О. Науменко.''Час великих очікувань''",
  "videoUrl": "https://drive.google.com/file/d/1LBOe_wFlC_yzt_FfkRbC8-90cVu3stVO/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143b"
  },
  "name": "Ф-ний дует  (Сікора Р. Черепущак М.). ",
  "composition": "1)О.Науменко. ''Коломийка'', 2)Е.Гріг-Г.Фіртич.''Танець Анітри''",
  "videoUrl": "https://drive.google.com/file/d/1ORTzw-plehQvAAOinOrdqnHtnU_oCZj5/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143c"
  },
  "name": "Ф-ний дует ''Mycraft'' (Єрмоленко Д., Шибанова В.) ",
  "composition": "1)М.Скорик. ''Мелодія'',         2)О.Хромушин. ''Друкарська машинка''",
  "videoUrl": "https://drive.google.com/file/d/1Auvo44aBYTG3vKxsT2hQD0hmkg1Edla7/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143d"
  },
  "name": "Ф-ний дует (Бондаренко М., Слінченко Ю.) ",
  "composition": "О.Секрет.''Прогулянка Добермана''",
  "videoUrl": "https://drive.google.com/file/d/11QSAdkwn3iu54kR3hxnh3Hg0C_zpP-ZU/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143e"
  },
  "name": "Ф-ний дует (Бондаренко М., Слінченко Ю.) ",
  "composition": "П.Чайковський.'' Італійська пісенька''",
  "videoUrl": "https://drive.google.com/file/d/1ZT-3uCrzbGJtMc0oLwtgJqTorz9jDYes/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143f"
  },
  "name": "Ф-ний дует (Вашуріна В., Єжонков А.).",
  "composition": "1) Г.Бєлов.''Урасіма і Чарівна Черепаха'', 2)О. Польовий. ''Подорож в Альпи''",
  "videoUrl": "https://drive.google.com/file/d/1jChvMBrDwyxKk3AJEECSBE7Y_kCLRh8s/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61440"
  },
  "name": "Ф-ний дует (Гембицька О., Кузло К.).",
  "composition": "1)К.Ховард. ''Чарльстон'', 2)Дж. Шірінг. ''Колискова''",
  "videoUrl": "https://drive.google.com/file/d/1tLNVlhurZUdHx44MchS4qm251eS39roQ/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61441"
  },
  "name": "Ф-ний дует (Дерябіна С. та Васильєва В.).",
  "composition": "1)А.Діабеллі. Соната ре мажор, 2)Л.Шукайло. ''Гумореска''",
  "videoUrl": "https://drive.google.com/file/d/1yJQBfg7c_BoQqXMmAYqNYQCnYtawZ9To/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61442"
  },
  "name": "Ф-ний дует (Кришталович М., Кришталович І.) ",
  "composition": "Дж.Гершвін. ''Clap you hand''",
  "videoUrl": "https://drive.google.com/file/d/1MAJeBVnftEdhcio47nDnUgcjGGTwK8Cj/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61443"
  },
  "name": "Ф-ний дует (Кришталович М., Кришталович І.)",
  "composition": "'Колядка'', обр. О.Закалюжної",
  "videoUrl": "https://drive.google.com/file/d/1pqxYZTvFyrrj6dTpT58UUPSOPHM-hZte/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61444"
  },
  "name": "Ф-ний дует (Ланський Є., Ланська О.)",
  "composition": "1)Е.Гріг. Арія із сюїти ''З часів Хольберга'', 2)В.Птушкін. ''Бренфордська відьма''",
  "videoUrl": "https://drive.google.com/file/d/18OUsCGQBs3IhlX6it-s3Txuo07M3Ns0H/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61445"
  },
  "name": "Ф-ний дует (Симоненко Т., Федина А.)",
  "composition": "1) Дж.Гершвін.''Коханий мій''; 2) П.Моріа. ''Манует''",
  "videoUrl": "https://drive.google.com/file/d/1hVekh8_5MOUJDgJtXI8i4GBdRQwCAekt/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61446"
  },
  "name": "Ф-ний дует (Скопець А., Мурзак Ю.). ",
  "composition": "Т.Остен.''Танець ляльок''",
  "videoUrl": "https://drive.google.com/file/d/1EFzyijuwAFNj8v-TlraiI_PkuHGqX94E/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61447"
  },
  "name": "Ф-ний дует (Скопець А. Мурзак Ю.) ",
  "composition": "Л. Жульєва.''Прогулянка з татом''",
  "videoUrl": "https://drive.google.com/file/d/1VZr2V-Hv8MIF8KWgZGfJAyuEE7maqWop/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61448"
  },
  "name": "Ф-ний дует (Троценко А., Якуніна О.В.)",
  "composition": "1)К.М.Вебер. Соната до мажор, І ч.; 2)А.Комлікова. ''Спогад''",
  "videoUrl": "https://drive.google.com/file/d/1aYNB8jH0Jy4SP3ufAceQ-mJ29lPr_rTw/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61449"
  },
  "name": "Ф-ний дует (Філіпов І., Марченко Л.)",
  "composition": "1)Й.С.Бах.''Жарт'' 2)М.Леонтович.''Щедрик''",
  "videoUrl": "https://drive.google.com/file/d/1phWTyIJb7FzqNQFeUqE5x1lYFZ59Wugz/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144a"
  },
  "name": "Ф-ний дует (Хелман В., Хелман В.)",
  "composition": "1)У.Гіллок.''На паризькому бульварі'', 2)Н.Смірнова.''Бразильський карнавал''",
  "videoUrl": "https://drive.google.com/file/d/17c32CI0m_kNJXZkrHkXQe52TdfHWPl6O/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144b"
  },
  "name": "Ф-ний квартет ''Sforzando''.",
  "composition": " О.Циганков. ''Тустеп''",
  "videoUrl": "https://drive.google.com/file/d/1UQkZ11UGVlqhR3sradpboQpK9EEyaiqo/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144c"
  },
  "name": "Ф-ний квартет ''Sforzando''.",
  "composition": "Е. Гріг.''В печері гірського короля''",
  "videoUrl": "https://drive.google.com/file/d/1STLnt8IU5nlY-G1dqfbKuRa1B_Z8TSkY/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144d"
  },
  "name": "Ф-ний дует (Вихрист М., Фєдосєєв Н.)",
  "composition": "1)С.Прокоф'єв. Марш, 2)В.Лютославський. Варіації на тему Паганіні",
  "videoUrl": "https://drive.google.com/file/d/1nzRHXJKtAbdx7PwbB5d4XFGxBNctpNEk/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144e"
  },
  "name": "Ф-ний дует (Вітюк В, Березовська Є.)",
  "composition": "1)Й.Бах (Вівальді). Концерт для органа ля мінор, 2)А.П'яцолла. ''Лібертанго''",
  "videoUrl": "https://drive.google.com/file/d/1nf01Ef6OVOyLAJUUjBYyIKNs3MZe_PFv/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144f"
  },
  "name": "Ф-ний дует (Боровець О., ілюстратор)",
  "composition": "Й.С.Бах.''Арія'' (''Страсті за Матвієм'')",
  "videoUrl": "https://drive.google.com/file/d/1H1akQUdR7QKRO4P3hDY6_tZtmdSrk0J1/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61450"
  },
  "name": "Ф-ний дует (Боровець О.,ілюстратор). ",
  "composition": "К.Орф.''О,Фортуно'' (''Карміна Бурана'')",
  "videoUrl": "https://drive.google.com/file/d/19kOIBTdIKKQZ6nXVgPiZH3Y8mycWpwBy/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61451"
  },
  "name": "Ф-ний дует (Клименко М., Діордієва М.)",
  "composition": "1) С.Рахманінов. ''Вокаліз'', 2)Д.Мійо.''Бразильєра''",
  "videoUrl": "https://drive.google.com/file/d/1u81dAAtlDofq4pnyDtYg-SxGB4jGB3sE/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61452"
  },
  "name": "Ф-ний дует (Козак І., Таєр-Ульянова К.). ",
  "composition": "A.  П'яццола. ''Лібертанго''",
  "videoUrl": "https://drive.google.com/file/d/1y6YqFtBPGMlXzEQL8uu3BL4UkrMze4jb/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61453"
  },
  "name": "Ф-ний дует (Козак І. та Таєр-Ульянова К.). ",
  "composition": "Е. Гріг. ''Норвежський танець''",
  "videoUrl": "https://drive.google.com/file/d/1Ttfi4m7P1ouNJEHDXiJna7X3beQPzrfu/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61454"
  },
  "name": "Ф-ний дует (Костечко А., Кондратюк М. ).",
  "composition": "М. К.Дебюссі. ''У човні''",
  "videoUrl": "https://drive.google.com/file/d/1hRWzCLXIUU6XpDWZ3EisI7Q5NZHzDdio/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61455"
  },
  "name": "Ф-ний дует (Костечко А., Кондратюк М.).",
  "composition": "Ю.Весняк. ''Карлсон''",
  "videoUrl": "https://drive.google.com/file/d/1A31VrR5d5dXT8kQWtNyGkxfy7bKI5MDU/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61456"
  },
  "name": "Ф-ний дует (Мацієвсьа М., Папієва К.). ",
  "composition": "1)М.Метнер.''Російський хоровод'', 2)А.П'яццола.''Велике танго''",
  "videoUrl": "https://drive.google.com/file/d/16AngsasGuAshoDZyg9idljB8xoMDv4vC/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61457"
  },
  "name": "Ф-ний дует  (Касяненко О.В., Гордієнко І.О.) ",
  "composition": "1) А.Бабаджанян. ''Ноктюрн'', 2)Ю. Щуровський. ''Гумористичний танець''",
  "videoUrl": "https://drive.google.com/file/d/1_SXAFQDw_Bm4YK-qcy6Xs4kFoW4H3DaI/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61458"
  },
  "name": "Ф-ний дует ''Елегія''",
  "composition": " 1)М.Скорик. ''Мелодія'', 2)Л.Карпенко.''Віночок улюблених мелодій''",
  "videoUrl": "https://drive.google.com/file/d/1ckZw0HssiyEdbSSHBqOyawqSftAk1wUj/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61459"
  },
  "name": "Ф-ний дует (Григор'єва Г.А. , Якуніна О.В.)",
  "composition": "1)Ф.Шуберт.''Військовий марш'' 2)А.Комлікова. ''На маскараді''",
  "videoUrl": "https://drive.google.com/file/d/1UCaJ_qYUapyM-HBhruWb-h7IFySqk_sU/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145a"
  },
  "name": "Ф-ний дует (Косенко О.В., Касумова О.Д.).",
  "composition": "1)А. Цфасман. ''Ліричний вальс'', 2)М.Мінков. ''Старий рояль''",
  "videoUrl": "https://drive.google.com/file/d/1zGOKunxIoHd3Uj5FHvdWyN-rvWF7n6V-/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145b"
  },
  "name": "Ф-ний квартет  (Васенко С., Васенко М., Хавалко Т.,Бичков'як К.). ",
  "composition": "1)А.Вівальді.''Зима''; 2)Ф.Мерк'юра.''Богемна рапсодія''",
  "videoUrl": "https://drive.google.com/file/d/1B96nEC3vKYRd8OgTXgPiVVX8VB-MSSdY/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145c"
  },
  "name": "Ф-ний квартет ''ALLA BREVE''.",
  "composition": "І.Стравінський.Фрагмент із балету ''Петрушка''",
  "videoUrl": "https://drive.google.com/file/d/1bifW8OBv1E61qd184EaJjsvOtrXrRrkV/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145d"
  },
  "name": "Ф-ний квартет ''ALLA BREVE''.",
  "composition": "К.Гурлітт.''Віденський вальс''",
  "videoUrl": "https://drive.google.com/file/d/1QjBrKWTkCbiS9Ej5k4pHbHRDsN2D1caM/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145e"
  },
  "name": "Фортепіанний ансамбль ''ЕКСПРЕСІЯ''.",
  "composition": "О.Науменко. 1)''Часи великих сподівань'', 2)А.П'яццола. ''Лібертанго''",
  "videoUrl": "https://drive.google.com/file/d/1iUlYKrIKsJ1inuCqAOS0MY4LqGrmcp_k/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145f"
  },
  "name": "Фортепіанний квартет (Щукіна О.,Сердюк Г., Шаповал О., Максименко В.)",
  "composition": "1) Л.Лавіньяк.''Галоп-марш''; 2)Г.Гурліт. Ноктюрн",
  "videoUrl": "https://drive.google.com/file/d/1IYbNIC2Ex6NxxM8ymbCtL2muPAQ4RhMg/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61460"
  },
  "name": "Ф-ний ансамбль ( Смик Л.Ю.,Шекель О.О.). ",
  "composition": "К. Гуаставіно. ''Романс''",
  "videoUrl": "https://drive.google.com/file/d/1dHBznDmpE-0vWyryMf86XCkFb8sP_HY_/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61461"
  },
  "name": "Ф-ний ансамбль (Смик Л.Ю., Шекель О.О.). ",
  "composition": "О.Цфасман.''Сніжинки''",
  "videoUrl": "https://drive.google.com/file/d/19PTe-J_cS6DTSO6iZFixgb5g4ZxpazRT/preview",
  "group": "Номінація \"Фортепіанний ансамбль\""
}];
myCards = myCards.concat(ensemble);
/** CODE **/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzExNjMwMjMucG5nIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZm9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVndWxhckhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzdWx0c0ZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0IbQstCw0L3QvtCy0LAg0Jsu0IYucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CS0LjRiNC90LXQstGB0YzQutCwLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0JfQsNGF0L7QtNGP0LrRltC9LTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9Ca0YPQt9C90ZTRhtC+0LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QnNCw0YDRhtC10LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QntGB0YLQsNC/0YfRg9C6INCcLiDQnC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0KDQsNC50YIg0IYu0KEucG5nIiwid2VicGFjazovLy8uL3NyYy9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9DYXJkU3RvcmUuanN4Il0sIm5hbWVzIjpbIkFwcCIsImNhcmRTdG9yZSIsIkZpbG1XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiRmlsbUluZm8iLCJJZnJhbWVCb3giLCJpZnJhbWUiLCJwcm9wcyIsIndpZHRoIiwiQnV0dG9uIiwiQ2FyZCIsImhlaWdodCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJjYWxjdWxhdGVkV2lkdGgiLCJzZXRDYWxjdWxhdGVkV2lkdGgiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm5hbWUiLCJjb21wb3NpdGlvbiIsInZpZGVvVXJsIiwic2hvd0lmcmFtZSIsInNldFNob3dJZnJhbWUiLCJvcGVuVmlkZW9CdXR0b25OYW1lIiwic2V0T3BlblZpZGVvQnV0dG9uTmFtZSIsIm9wZW5WaWRlb0hhbmRsZXIiLCJXcmFwcGVyIiwibG9nbyIsIlBlcnNvbkluZm9TZWN0aW9uIiwiUGVyc29uIiwiQ29udGFpbmVyIiwiVGV4dFNlY3Rpb24iLCJJbWFnZSIsImltZyIsImltZ1VybCIsInRleHQiLCJEaXYiLCJBIiwiYSIsIlAiLCJJbmZvUGFnZSIsInBlcnNvbjIiLCJwZXJzb24xIiwicGVyc29uNCIsInBlcnNvbjUiLCJwZXJzb243IiwicGVyc29uOCIsInBlcnNvbjMiLCJwZXJzb242IiwiQ29tbW9uV3JhcHBlciIsIk1haW5TZWN0aW9uRmxleCIsIk1haW5TZWN0aW9uIiwiY2FyZHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiaXNEYXRhSW5QbGFjZSIsImNhcmRDb3VudCIsInNlY3Rpb25zRm9yRmlsdGVyIiwibWFwIiwiY2FyZCIsImlkIiwiJG9pZCIsIklucHV0IiwiaW5wdXQiLCJpbnB1dENvbG9yIiwiSW5wdXRTdHlsZSIsIklucHV0V3JhcGVyIiwiU3R5bGVkU3BhbiIsInNwYW4iLCJFcnJvciIsIldhcm4iLCJSZWd1bGFySGVhZGVyIiwic2VhcmNoRmllbGQiLCJ1c2VSZWYiLCJlcnJvciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJoYW5kbGVyIiwic3RyIiwiU3RyaW5nIiwiY3VycmVudCIsInZhbHVlIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJ0eXBlIiwibXNnIiwicXVlcnkiLCJoYW5kbGVLZXlQcmVzcyIsImV2ZW50Iiwia2V5IiwiRmlsdGVyQ29udGFpbmVyIiwiRmlsdGVyU2VjdGlvbiIsIkRpdlRoaW5MaW5lIiwiU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXIiLCJncm93XzAiLCJrZXlmcmFtZXMiLCJsZWZ0IiwiZ3Jvd18xIiwiVGhpbkxpbmVJbm5lckRpdiIsImFuaW1hdGlvbiIsIlJlc3VsdHNGaWx0ZXIiLCJzZWN0aW9ucyIsInJlZExpbmVXaWR0aCIsInNldFJlZExpbmVXaWR0aCIsInJlZExpbmVMZWZ0Iiwic2V0UmVkTGluZUxlZnQiLCJzZXRBbmltYXRpb24iLCJtYXJrZWRTZWN0aW9uUmVmIiwicmVSZW5kZXJSZWRMaW4iLCJ0YXJnZXQiLCJjdXJyZW50U2VjdGlvbldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY3VycmVudFNlY3Rpb25MZWZ0IiwiY291bnRlciIsIm9uRmlsdGVyU2VjdGlvbkNsaWNrIiwic2VsZWN0ZWRTZWN0aW9uIiwic2VsZWN0ZWRTZWN0aW9uU3RyaW5nIiwic2VjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJJbmZvUGFnZSIsInJlbmRlcmVkU2VjdGlvbnMiLCJlIiwiZ2V0V2luZG93RGltZW5zaW9ucyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIndpbmRvdyIsIndpbmRvd0RpbWVuc2lvbnMiLCJzZXRXaW5kb3dEaW1lbnNpb25zIiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJncm91cDEiLCJncm91cDIiLCJncm91cDMiLCJteUNhcmRzIiwiY29uY2VydG1hc3RlcnMiLCJjb25jYXQiLCJlbnNlbWJsZSIsImZpbG1SZWR1Y2VyIiwiYWN0aW9uIiwibmV3Q2FyZHMiLCJmaWx0ZXIiLCJncm91cCIsInNsaWNlIiwibmV3Q2FyZHMxIiwibmV3Q2FyZHMyIiwicSIsInRvTG93ZXJDYXNlIiwibmV3Q2FyZHMzIiwiY2FyZE5hbWUiLCJib29sIiwic3RhcnRzV2l0aCIsImNyZWF0ZVN0b3JlIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxn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QUlIQyxpQkFBUyxFQUFFaUcsU0FBUyxDQUFDdkUsTUFKbEI7QUFLSFIsYUFBSyxFQUFFO0FBTEosT0FBUDs7QUFPSixTQUNBLE9BREE7QUFHSTRDLGFBQU8sQ0FBQ0MsR0FBUixDQUFhLFdBQWI7QUFDQSxhQUFPO0FBRUg3QyxhQUFLLEVBQUVzRSxNQUFNLENBQUMzRDtBQUZYLE9BQVA7O0FBSUo7QUFDSSxhQUFPO0FBQ0hqQyxhQUFLLEVBQUV1RixPQURKO0FBRUhwRixxQkFBYSxFQUFFLElBRlo7QUFHSEMsaUJBQVMsRUFBRW1GLE9BQU8sQ0FBQ3pELE1BSGhCO0FBSUhSLGFBQUssRUFBRTtBQUpKLE9BQVA7QUFqRVI7QUF3RUg7O0FBRU0sTUFBTXpFLFNBQVMsR0FBRzRKLHlEQUFXLENBQUNkLFdBQUQsQ0FBN0I7QUFFUDlJLFNBQVMsQ0FBQzZKLFNBQVYsQ0FBb0IsTUFDaEJ4QyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvREFBb0R0SCxTQUFTLENBQUM4SixRQUFWLEdBQXFCdkcsU0FBckYsQ0FESixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzeFwiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy8xMTYzMDIzLnBuZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TWFpblNlY3Rpb259IGZyb20gJy4vY29tcG9uZW50cy9NYWluU2VjdGlvbic7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2NhcmRTdG9yZX0gZnJvbSBcIi4vc3RvcmUvQ2FyZFN0b3JlXCI7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cclxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtjYXJkU3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgPE1haW5TZWN0aW9uLz5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICA8L1JlYWN0LlN0cmljdE1vZGU+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0FpRmlsbFBsYXlTcXVhcmUsIEJzRmlsbFBlcnNvbkZpbGwsIEZhQm9va09wZW59IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuXHJcbmNvbnN0IEZpbG1XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmNvbnN0IEZpbG1JbmZvID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgSWZyYW1lQm94ID0gc3R5bGVkLmlmcmFtZWBcclxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XHJcbiAgaGVpZ2h0OiA0ODBweDtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gIH1gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICBjb25zdCBbY2FsY3VsYXRlZFdpZHRoLCBzZXRDYWxjdWxhdGVkV2lkdGhdID0gdXNlU3RhdGUoNjQwKTtcclxuXHJcbiAgICAvL2hhbmRsaW5nIHJlc2l6ZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAod2lkdGggPCAxMDAwKSBzZXRDYWxjdWxhdGVkV2lkdGgod2lkdGggLSA1MCk7XHJcbiAgICAgICAgZWxzZSBzZXRDYWxjdWxhdGVkV2lkdGgoNjQwKTtcclxuICAgIH0sIFt3aWR0aF0pO1xyXG5cclxuICAgIGNvbnN0IFtuYW1lLF0gPSB1c2VTdGF0ZShwcm9wcy5uYW1lKTtcclxuICAgIGNvbnN0IFtjb21wb3NpdGlvbixdID0gdXNlU3RhdGUocHJvcHMuY29tcG9zaXRpb24pO1xyXG4gICAgY29uc3QgW3ZpZGVvVXJsLF0gPSB1c2VTdGF0ZShwcm9wcy52aWRlb1VybCk7XHJcbiAgICBjb25zdCBbc2hvd0lmcmFtZSwgc2V0U2hvd0lmcmFtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BlblZpZGVvQnV0dG9uTmFtZSwgc2V0T3BlblZpZGVvQnV0dG9uTmFtZV0gPSB1c2VTdGF0ZShcItCS0ZbQtNC60YDQuNGC0Lgg0LLRltC00LXQvlwiKTtcclxuXHJcbiAgICBjb25zdCBvcGVuVmlkZW9IYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dJZnJhbWUoIXNob3dJZnJhbWUpO1xyXG4gICAgICAgIGlmIChzaG93SWZyYW1lKSB7XHJcbiAgICAgICAgICAgIHNldE9wZW5WaWRlb0J1dHRvbk5hbWUoXCLQktGW0LTQutGA0LjRgtC4INCy0ZbQtNC10L5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T3BlblZpZGVvQnV0dG9uTmFtZShcItCX0LDQutGA0LjRgtC4INCy0ZbQtNC10L5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZpbG1XcmFwcGVyPlxyXG4gICAgICAgICAgICA8RmlsbUluZm8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29wZW5WaWRlb0hhbmRsZXJ9PjxBaUZpbGxQbGF5U3F1YXJlLz57b3BlblZpZGVvQnV0dG9uTmFtZX08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj48QnNGaWxsUGVyc29uRmlsbC8+IDxiPntuYW1lfTwvYj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PEZhQm9va09wZW4vPiB7Y29tcG9zaXRpb259PC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgIDwvRmlsbUluZm8+XHJcbiAgICAgICAgICAgIHtzaG93SWZyYW1lID8gPElmcmFtZUJveCBzcmM9e3ZpZGVvVXJsfSB3aWR0aD17Y2FsY3VsYXRlZFdpZHRofS8+IDogbnVsbH1cclxuICAgICAgICA8L0ZpbG1XcmFwcGVyPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QmlMaW5rRXh0ZXJuYWx9IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLzExNjMwMjMucG5nXCI7XHJcbmltcG9ydCBwZXJzb24xIGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjIgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0JrRg9C30L3RlNGG0L7QstCwLTEucG5nXCI7XHJcbmltcG9ydCBwZXJzb24zIGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9CG0LLQsNC90L7QstCwINCbLtCGLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uNCBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/QoNCw0LnRgiDQhi7QoS5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjUgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0J7RgdGC0LDQv9GH0YPQuiDQnC4g0JwucG5nXCI7XHJcbmltcG9ydCBwZXJzb242IGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9Cc0LDRgNGG0LXQstCwLTEucG5nXCI7XHJcbmltcG9ydCBwZXJzb243IGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9CX0LDRhdC+0LTRj9C60ZbQvS0xLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uOCBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/QktC40YjQvdC10LLRgdGM0LrQsC0xLnBuZ1wiO1xyXG5cclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7bG9nb31cIik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgUGVyc29uSW5mb1NlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcblxyXG5jb25zdCBQZXJzb24gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGA7XHJcblxyXG4gICAgY29uc3QgVGV4dFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogODUwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XHJcbiAgICBgO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKDxDb250YWluZXI+PEltYWdlIHNyYz17cHJvcHMuaW1nVXJsfS8+PFRleHRTZWN0aW9uPntwcm9wcy50ZXh0fTwvVGV4dFNlY3Rpb24+PC9Db250YWluZXI+KTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5gO1xyXG5cclxuY29uc3QgQSA9IHN0eWxlZC5hYFxyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggZGFya3JlZDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQID0gc3R5bGVkLmRpdmBcclxuICBsZWZ0OiA0MDBweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9QYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8V3JhcHBlcj48RGl2PlxyXG5cclxuICAgICAgICA8QSBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa2E3R3VWYzBtaEh6UjVqcTFxaFRDSG5sTmEwSGNYbUIvdmlldz91c3A9c2hhcmluZ1wiPiA8QmlMaW5rRXh0ZXJuYWwvPtCf0L7Qu9C+0LbQtdC90L3RjzwvQT5cclxuICAgICAgICA8QSBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcWR5TDBtWGFmb3dJODg4c1BKTHlNN3l1aFlKTlI3MGIvdmlldz91c3A9c2hhcmluZ1wiPiA8QmlMaW5rRXh0ZXJuYWwvPlxyXG4gICAgICAgICAgICDQntGA0LPQsNC90ZbQt9Cw0YbRltC50L3QuNC5INC60L7QvNGW0YLQtdGCINC60L7QvdC60YPRgNGB0YMgPC9BPlxyXG4gICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2c3owdXU1NjRCbDdsOVktYnFNT18tZ0xQcVR1REJZQy92aWV3P3VzcD1zaGFyaW5nXCI+IDxCaUxpbmtFeHRlcm5hbC8+0JDRhNGW0YjQsDwvQT5cclxuICAgIDwvRGl2PlxyXG4gICAgICAgIDxQPtCh0LrQu9Cw0LQg0LbRg9GA0ZY6PC9QPlxyXG4gICAgICAgIDxQZXJzb25JbmZvU2VjdGlvbj5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17YNCa0YPQt9C90ZTRhtC+0LLQsCDQni7Qni4tINCz0L7Qu9C+0LLQsCDQttGD0YDRliwg0LTQvtC60YLQvtGAINGE0ZbQu9C+0YHQvtGE0ZbRlywg0LrQsNC90LTQuNC00LDRgiDQv9C10LTQsNCz0L7Qs9GW0YfQvdC40YUg0L3QsNGD0LosINC/0YDQvtGE0LXRgdC+0YAg0LrQsNGE0LXQtNGA0LggIFxyXG4gICAgICAgICAgICAgICAgICAgINC80YPQt9C40YfQvdC+LSDRltC90YHRgtGA0YPQvNC10L3RgtCw0LvRjNC90L7Qs9C+INCy0LjQutC+0L3QsNCy0YHRgtCy0LAg0KXQsNGA0LrRltCy0YHRjNC60L7Qs9C+INCd0LDRhtGW0L7QvdCw0LvRjNC90L7Qs9C+INC/0LXQtNCw0LPQvtCz0ZbRh9C90L7Qs9C+INGD0L3RltCy0LXRgNGB0LjRgtC10YLRgyDRltC80LXQvdGWIFxyXG4gICAgICAgICAgICAgICAgICAgINCTLtCh0LrQvtCy0L7RgNC+0LTQuCwg0LfQsNGB0LvRg9C20LXQvdC40Lkg0LTRltGP0Ycg0LzQuNGB0YLQtdGG0YLQsiDQo9C60YDQsNGX0L3QuCwgIFwi0JLRltC00LzRltC90L3QuNC6INC+0YHQstGW0YLQuCDQo9C60YDQsNGX0L3QuFwiLCDQstGW0LTQt9C90LDRh9C10L3QsCDQvtGA0LTQtdC90L7QvCBcclxuICAgICAgICAgICAgICAgICAgICDQnNGW0L3RltGB0YLQtdGA0YHRgtCy0LAg0LrRg9C70YzRgtGD0YDQuCAg0KPQutGA0LDRl9C90LggXCLQl9CwINC00L7RgdGP0LPQvdC10L3QvdGPINCyINGA0L7Qt9Cy0LjRgtC60YMgINC60YPQu9GM0YLRg9GA0LggINGWINC80LjRgdGC0LXRhtGC0LIgXCIsINGB0LXQutGA0LXRgtCw0YAgXHJcbiAgICAgICAgICAgICAgICAgICAg0J3QsNGG0ZbQvtC90LDQu9GM0L3QvtGXINCy0YHQtdGD0LrRgNCw0ZfQvdGB0YzQutC+0Zcg0LzRg9C30LjRh9C90L7RlyDRgdC/0ZbQu9C60LgsINCz0L7Qu9C+0LLQsCDQkNGB0L7RhtGW0LDRhtGW0Zcg0L/RltCw0L3RltGB0YLRltCyICDQndCw0YbRltC+0L3QsNC70YzQvdC+0ZcgINCy0YHQtdGD0LrRgNCw0ZfQvdGB0YzQutC+0ZcgXHJcbiAgICAgICAgICAgICAgICAgICAg0LzRg9C30LjRh9C90L7RlyDRgdC/0ZbQu9C60LgsICDQv9GA0LXQt9C40LTQtdC90YIg0JDRgdC+0YbRltCw0YbRltGXINC/0ZbQsNC90ZbRgdGC0ZbQsi3Qv9C10LTQsNCz0L7Qs9GW0LIg0KPQutGA0LDRl9C90LgoXCJFUFRBXCIgVWtyYWluZSksINCS0ZbRhtC1LSDQv9GA0LXQt9C40LTQtdC90YIgIFxyXG4gICAgICAgICAgICAgICAgICAgINCQ0YHQvtGG0ZbQsNGG0ZbRlyDQv9GW0LDQvdGW0YHRgtGW0LIt0L/QtdC00LDQs9C+0LPRltCyINCE0LLRgNC+0L/QuCBcIkVQVEFcIiBMb25kb24pYH0vPlxyXG5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjF9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cItCX0LDQutC+0L/QtdGG0Ywg0Jsu0KEuLSDQs9C+0LvQvtCy0LAg0LbRg9GA0ZYsINC30LDRgdC70YPQttC10L3QuNC5ICDQtNGW0Y/RhyDQvNC40YHRgtC10YbRgtCyINCj0LrRgNCw0ZfQvdC4LCDQstC40LrQu9Cw0LTQsNGHLdC80LXRgtC+0LTQuNGB0YIg0JvRjNCy0ZbQstGB0YzQutC+0LPQvlxyXG4gICAgICAgICAgICAgICAgICAgINC00LXRgNC20LDQstC90L7Qs9C+INC80YPQt9C40YfQvdC+0LPQviDQu9GW0YbQtdGOINGW0LzQtdC90ZYg0KEuINCa0YDRg9GI0LXQu9GM0L3QuNGG0YzQutC+0ZcsINC/0L7Rh9C10YHQvdC40Lkg0LDQvNCx0LDRgdCw0LTQvtGAINC80YPQt9C40YfQvdC+0ZcgINC60YPQu9GM0YLRg9GA0LggINCf0L7Qu9GM0YnRllwiLz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb240fVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCLQoNCw0LnRgiDQhi7QoS4sINC60LDQvdC00LjQtNCw0YIg0L/QtdC00LDQs9C+0LPRltGH0L3QuNGFINC90LDRg9C6LCAg0L3QsNGD0LrQvtCy0LjQuSDRgdC/0ZbQstGA0L7QsdGW0YLQvdC40Log0LvQsNCx0L7RgNCw0YLQvtGA0ZbRlyDQtdGB0YLQtdGC0LjRh9C90L7Qs9C+INCy0LjRhdC+0LLQsNC90L3Rj1xyXG4gICAgICAgICAgICAgICAgICAgINGC0LAg0LzQuNGB0YLQtdGG0YzQutC+0ZcgINC+0YHQstGW0YLQuCAg0IbQvdGB0YLQuNGC0YPRgtGDICDQv9GA0L7QsdC70LXQvCDQstC40YXQvtCy0LDQvdC90Y8gINCd0LDRhtGW0L7QvdCw0LvRjNC90L7RlyAg0LDQutCw0LTQtdC80ZbRlyAg0L/QtdC00LDQs9C+0LPRltGH0L3QuNGFICDQvdCw0YPQuiDQo9C60YDQsNGX0L3QuFwiLz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb241fVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCLQntGB0YLQsNC/0YfRg9C6INCcLiDQnC4sINC00L7RhtC10L3RgiDQutCw0YTQtdC00YDQuCAg0LPRgNC4INC90LAgINC80YPQt9C40YfQvdC40YUg0ZbQvdGB0YLRgNGD0LzQtdC90YLQsNGFINCG0L3RgdGC0LjRgtGD0YLRgyAg0LzQuNGB0YLQtdGG0YLQsiAg0KDQlNCT0KNcIi8+XHJcblxyXG4gICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uN30gdGV4dD1cItCX0LDRhdC+0LTRj9C60ZbQvSDQni7Qki4sINC00L7RhtC10L3RgiDQutCw0YTQtdC00YDQuCDQtdGB0YLRgNCw0LTQvdC+0Zcg0LzRg9C30LjQutC4INCG0L3RgdGC0LjRgtGD0YLRgyAg0LzQuNGB0YLQtdGG0YLQsiAg0KDQlNCT0KNcIi8+XHJcblxyXG4gICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uOH1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PSfQktC40YjQvdC10LLRgdGM0LrQsCDQhi7Qny4sINCy0LjQutC70LDQtNCw0Ycg0LLQuNGJ0L7RlyDQutCw0YLQtdCz0L7RgNGW0ZcsINCz0L7Qu9C+0LLQsCDRhtC40LrQu9C+0LLQvtGXINC60L7QvNGW0YHRltGXIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L5cIlxyXG4gICAgICAgICAgICAgICAgICAgINCg0ZbQstC90LXQvdGB0YzQutC+0LPQviDQvNGD0LfQuNGH0L3QvtCz0L4g0YTQsNGF0L7QstC+0LPQviDQutC+0LvQtdC00LbRgyDQoNCU0JPQoycvPlxyXG5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjN9IHRleHQ9e2DQhtCy0LDQvdC+0LLQsCDQmy7Qhi4sINCy0LjQutC70LDQtNCw0Ycg0L/QtdGA0YjQvtGXINC60LDRgtC10LPQvtGA0ZbRlyDQmtCXIFwi0JvRg9GG0YzQutCwINC80YPQt9C40YfQvdCwICDRiNC60L7Qu9CwIDNcImB9Lz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb242fVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCLQnNCw0YDRhtC10LLQsCDQli7Qny4sINGB0YLQsNGA0YjQuNC5INCy0LjQutC70LDQtNCw0YcsINC30LDQstGW0LTRg9GO0YfQsCDRhNC+0YDRgtC10L/RltCw0L3QvdC40Lwg0LLRltC00LTRltC70L7QvCDQoNGW0LLQvdC10L3RgdGM0LrQvtGXINC00LjRgtGP0YfQvtGXINC80YPQt9C40YfQvdC+0Zcg0YjQutC+0LvQuCDihJYxINGW0LzQtdC90ZYg0JwuINCb0LjRgdC10L3QutCwXCIvPlxyXG4gICAgICAgIDwvUGVyc29uSW5mb1NlY3Rpb24+XHJcbiAgICA8L1dyYXBwZXI+KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7UmVzdWx0c0ZpbHRlcn0gZnJvbSBcIi4vUmVzdWx0c0ZpbHRlclwiO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7UmVndWxhckhlYWRlcn0gZnJvbSBcIi4vUmVndWxhckhlYWRlclwiO1xyXG5pbXBvcnQge0luZm9QYWdlfSBmcm9tIFwiLi9JbmZvUGFnZVwiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vMTE2MzAyMy5wbmdcIjtcclxuXHJcbmNvbnN0IENvbW1vbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7bG9nb31cIik7XHJcbmA7XHJcblxyXG5jb25zdCBNYWluU2VjdGlvbkZsZXggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpblNlY3Rpb24gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2FyZHMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXJkcyk7XHJcbiAgICBjb25zdCBpc0RhdGFJblBsYWNlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuaXNEYXRhSW5QbGFjZSk7XHJcbiAgICBjb25zdCBjYXJkQ291bnQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXJkQ291bnQpO1xyXG4gICAgY29uc3Qgc2VjdGlvbnNGb3JGaWx0ZXIgPSBbYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XCJgLCBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcImAsIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXCJgLGDQo9GB0ZYg0LLRltC00LXQvmAsYNCf0YDQviDQutC+0L3QutGD0YDRgWBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbW1vbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxSZWd1bGFySGVhZGVyIGNhcmRDb3VudD17Y2FyZENvdW50fS8+XHJcbiAgICAgICAgICAgIDxSZXN1bHRzRmlsdGVyIHNlY3Rpb25zPXtzZWN0aW9uc0ZvckZpbHRlcn0vPlxyXG4gICAgICAgICAgICB7aXNEYXRhSW5QbGFjZSA/IChcclxuICAgICAgICAgICAgICAgIDxNYWluU2VjdGlvbkZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhcmRzLm1hcChjYXJkID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2NhcmQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvVXJsPXtjYXJkLnZpZGVvVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9zaXRpb249e2NhcmQuY29tcG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NhcmQuaWQuJG9pZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfTwvTWFpblNlY3Rpb25GbGV4PikgOiAoPEluZm9QYWdlLz4pfTwvQ29tbW9uV3JhcHBlcj4pO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0FpT3V0bGluZUZpbGVTZWFyY2gsIEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlfSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgYm9yZGVyOiBzb2xpZCBkYXJrcmVkIDJweDtcclxuICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gIH1gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaW5wdXRDb2xvciB8fCBcInBhbGV2aW9sZXRyZWRcIn07XHJcbmA7XHJcblxyXG5cclxuY29uc3QgSW5wdXRTdHlsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRXcmFwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuYFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuYDtcclxuXHJcbmNvbnN0IEVycm9yID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtgXHJcblxyXG5jb25zdCBXYXJuID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogeWVsbG93O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtgXHJcblxyXG5leHBvcnQgY29uc3QgUmVndWxhckhlYWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaEZpZWxkID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmVycm9yKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHtoZWlnaHQsIHdpZHRofSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xyXG4gICAgICAgIGxldCBzdHIgPSBTdHJpbmcoc2VhcmNoRmllbGQuY3VycmVudC52YWx1ZSk7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPCAzIHx8IHN0ci5pbmNsdWRlcyhcIiBcIikpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiRVJST1JcIiwgbXNnOiBcItCR0YPQtNCx0Ywg0LvQsNGB0LrQsCDQstCy0LXQtNGW0YLRjCDQsdGW0LvRjNGI0LUgMyDRgdC40LzQstC+0LvRltCyINGWINC90LUg0LLQuNC60L7RgNC40YHRgtC+0LLRg9C50YLQtSDQv9GA0L7QsdGW0LtcIn0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIlNFQVJDSFwiLCBxdWVyeTogc3RyfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBoYW5kbGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPElucHV0V3JhcGVyPlxyXG4gICAgICAgICAgICAgICAgPElucHV0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4+PEFpT3V0bGluZUZpbGVTZWFyY2gvPtCf0L7RiNGD0Log0LLRltC00LXQviDQv9C+INC/0YDRltC30LLQuNGJ0YMg0YPRh9Cw0YHQvdC40LrQsCA8L1N0eWxlZFNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfSByZWY9e3NlYXJjaEZpZWxkfSB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTRltGC0Ywg0L/RgNGW0LfQstC40YnQtSDRg9GH0LDRgdC90LjQutCwLi4uXCIgaW5wdXRDb2xvcj1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIlwiIG9uQ2xpY2s9e2hhbmRsZXJ9PtCf0L7RiNGD0Lo8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9JbnB1dFdyYXBlcj5cclxuICAgICAgICAgICAge2Vycm9yICE9PSBcIlwiID8gPEVycm9yPjxIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZS8+e2Vycm9yfTxIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZS8+PC9FcnJvcj4gOiBudWxsfVxyXG4gICAgICAgICAgICB7cHJvcHMuY2FyZENvdW50ID09PSAwID9cclxuICAgICAgICAgICAgICAgIDxXYXJuPjxIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZS8+0LLRltC00LXQviDQvdC1INC30L3QsNC50LTQtdC90ZY8SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPjwvV2Fybj4gOiBudWxsfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQsIHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7RmFGb2xkZXIsIEZhVW5pdmVyc2l0eX0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xyXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vaG9va3MvVXNlV2luZG93RGltZW5zaW9uc1wiO1xyXG5cclxuY29uc3QgRmlsdGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBmbGV4LXdyYXA6IHdyYXA7YDtcclxuXHJcbmNvbnN0IEZpbHRlclNlY3Rpb24gPSBzdHlsZWQoRmlsdGVyQ29udGFpbmVyKWBcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IGRhcmtyZWQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRGl2VGhpbkxpbmUgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogZ3JheSBzb2xpZCAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBoZWlnaHQ6IDIlO1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBncm93XzAgPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xyXG4gIH1cclxuICAwJSB7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ3Jvd18xID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcclxuICB9XHJcbiAgMCUge1xyXG4gICAgbGVmdDogMXB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBUaGluTGluZUlubmVyRGl2ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XHJcbiAgbGVmdDogJHtwcm9wcyA9PiBwcm9wcy5sZWZ0fTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBoZWlnaHQ6IDElO1xyXG4gIGFuaW1hdGlvbjogJHtwcm9wcyA9PiAocHJvcHMuYW5pbWF0aW9uICUgMiA9PT0gMCkgPyBncm93XzAgOiBncm93XzF9IDAuNXMgbGluZWFyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlc3VsdHNGaWx0ZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2VjdGlvbnMsXSA9IHVzZVN0YXRlKHByb3BzLnNlY3Rpb25zKTtcclxuXHJcbiAgICBjb25zdCBbcmVkTGluZVdpZHRoLCBzZXRSZWRMaW5lV2lkdGhdID0gdXNlU3RhdGUoXCIxMHB4XCIpO1xyXG4gICAgY29uc3QgW3JlZExpbmVMZWZ0LCBzZXRSZWRMaW5lTGVmdF0gPSB1c2VTdGF0ZShcIjEwcHhcIik7XHJcbiAgICBjb25zdCBbYW5pbWF0aW9uLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICBjb25zdCBtYXJrZWRTZWN0aW9uUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gICAgLy9oYW5kbGluZyByZWRMaW5lIG9uIHJlc2l6ZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZVJlbmRlclJlZExpbih7dGFyZ2V0Om1hcmtlZFNlY3Rpb25SZWYuY3VycmVudH0pXHJcbiAgICB9LCBbd2lkdGhdKTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVSZW5kZXJSZWRMaW4oZXZlbnQpIHtcclxuICAgICAgICBtYXJrZWRTZWN0aW9uUmVmLmN1cnJlbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTZWN0aW9uV2lkdGggPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTZWN0aW9uTGVmdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gMTA7XHJcbiAgICAgICAgc2V0UmVkTGluZVdpZHRoKGN1cnJlbnRTZWN0aW9uV2lkdGggKyBcInB4XCIpO1xyXG4gICAgICAgIHNldFJlZExpbmVMZWZ0KGN1cnJlbnRTZWN0aW9uTGVmdCArIFwicHhcIik7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBhbmltYXRpb24gKyAxO1xyXG4gICAgICAgIHNldEFuaW1hdGlvbihjb3VudGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkZpbHRlclNlY3Rpb25DbGljayhzZWxlY3RlZFNlY3Rpb24sIGV2ZW50KSB7XHJcbiAgICAgICAgcmVSZW5kZXJSZWRMaW4oZXZlbnQpO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFNlY3Rpb25TdHJpbmcgPSBzZWxlY3RlZFNlY3Rpb24uc2VjdGlvbjtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFNlY3Rpb25TdHJpbmcpO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRTZWN0aW9uU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGNhc2UgYNCj0YHRliDQstGW0LTQtdC+YDpcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIkFMTFwifSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImA6XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJncm91cC0xXCJ9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFwiYDpcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTJcIn0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcImA6XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJncm91cC0zXCJ9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJJbmZvUGFnZShldmVudCkge1xyXG4gICAgICAgIHJlUmVuZGVyUmVkTGluKGV2ZW50KTtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJJTkZPX1BBR0VcIn0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZW5kZXJlZFNlY3Rpb25zID0gc2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXHJcbiAgICAgICAgc2VjdGlvbiA9PT0gXCLQn9GA0L4g0LrQvtC90LrRg9GA0YFcIiA/XHJcbiAgICAgICAgICAgIDxGaWx0ZXJTZWN0aW9uICBvbkNsaWNrPXtyZW5kZXJJbmZvUGFnZX0ga2V5PXtzZWN0aW9ufT4gPEZhVW5pdmVyc2l0eS8+e3NlY3Rpb259IDwvRmlsdGVyU2VjdGlvbj5cclxuICAgICAgICAgICAgOiA8RmlsdGVyU2VjdGlvbiAgcmVmPXttYXJrZWRTZWN0aW9uUmVmfSBvbkNsaWNrPXsoZSkgPT4gb25GaWx0ZXJTZWN0aW9uQ2xpY2soe3NlY3Rpb259LCBlKX0ga2V5PXtzZWN0aW9ufT4gPEZhRm9sZGVyLz57c2VjdGlvbn08L0ZpbHRlclNlY3Rpb24+XHJcbiAgICApKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTdHlsZWRSZXN1bHRzRmlsdGVyV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJDb250YWluZXIgY2hpbGRyZW49e3JlbmRlcmVkU2VjdGlvbnN9Lz5cclxuICAgICAgICAgICAgPC9TdHlsZWRSZXN1bHRzRmlsdGVyV3JhcHBlcj5cclxuICAgICAgICAgICAgPERpdlRoaW5MaW5lPjxUaGluTGluZUlubmVyRGl2IHdpZHRoPXtyZWRMaW5lV2lkdGh9IGxlZnQ9e3JlZExpbmVMZWZ0fSBhbmltYXRpb249e2FuaW1hdGlvbn0vPjwvRGl2VGhpbkxpbmU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9CG0LLQsNC90L7QstCwINCbLtCGLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0JLQuNGI0L3QtdCy0YHRjNC60LAtMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9CX0LDRhdC+0LTRj9C60ZbQvS0xLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0JrRg9C30L3RlNGG0L7QstCwLTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/QnNCw0YDRhtC10LLQsC0xLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0J7RgdGC0LDQv9GH0YPQuiDQnC4g0JwucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/QoNCw0LnRgiDQhi7QoS5wbmdcIjsiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93RGltZW5zaW9ucygpIHtcclxuICAgIGNvbnN0IHsgaW5uZXJXaWR0aDogd2lkdGgsIGlubmVySGVpZ2h0OiBoZWlnaHQgfSA9IHdpbmRvdztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VXaW5kb3dEaW1lbnNpb25zKCkge1xyXG4gICAgY29uc3QgW3dpbmRvd0RpbWVuc2lvbnMsIHNldFdpbmRvd0RpbWVuc2lvbnNdID0gdXNlU3RhdGUoZ2V0V2luZG93RGltZW5zaW9ucygpKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgICAgICAgc2V0V2luZG93RGltZW5zaW9ucyhnZXRXaW5kb3dEaW1lbnNpb25zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB3aW5kb3dEaW1lbnNpb25zO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xyXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0JykpO1xyXG4iLCJpbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCdcclxuXHJcbmNvbnN0IGdyb3VwMSA9IGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlwiYDtcclxuY29uc3QgZ3JvdXAyID0gYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXCJgO1xyXG5jb25zdCBncm91cDMgPSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFwiYDtcclxuXHJcbmxldCBteUNhcmRzID0gW3tcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JDQs9GA0LDRgtGW0L3QsCDQodGC0LDQvdGW0YHQu9Cw0LIsIDkg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCT0LvRltC90LrQsC4gJyfQn9C+0YfRg9GC0YLRjycnLCAgICAgIDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0KLQsNC90L7QuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOTR5dF9zS0M1RXQzcjQ5ekNFUnNkQlplRFFnWS1HX2kvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMDhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0LDQu9GW0LPRg9GA0LAg0JLQsNGA0LLQsNGA0LAsIDkg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC7Qm9C10LzRltGI0LrQvi4gJyfQmtC+0LvQvtC80LjQudC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWM2aFRJcURsLWNBRjNCcjNsMWMydXdxRlpzTFZTUFR2L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzA5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktCw0LvRltCz0YPRgNCwINCS0LDRgNCy0LDRgNCwLCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIu0JzQsNC60YHRltC80L7Qsi4gJyfQl9Cw0LTQt9C10YDQutCw0LvQu9GPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE1WXI2UXhtNHJzdERPTVUydkduNUp3cTVWZlVwTjJTRC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQsNGB0LjQu9C10LLRgdGM0LrQsCDQpdGA0LjRgdGC0LjQvdCwLDcg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JPRltC70LvQvtC6Licn0KHQsNC80L7RgtC90Y8g0LHQsNC70YzQvdCwINC30LDQu9CwJycsICAgMinQoi7QoNC+0YHRgtC40LzQsNGI0LXQvdC60L4uJyfQp9Cw0LrQu9GD0L0nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUd0eFVLdVVrTEtBbmg1b0NmOUZsdWlVVFFvSkNUYk1NL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzBiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktC+0LvQuNC90LXRhtGMINCe0LvQtdC60YHQsNC90LTRgCwgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmy7QmtC+0LvQvtC00YPQsS4gJyfQkNGA0LrQsNC9JycsMinQpC7QoNC40LHRltGG0YzQutC40LkuICcn0KDQtdCz0L7RgtGD0YjQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfQ09QZVB6d2RnUzdVX09qRXhPcHY4bm96MW1pVGU4Yy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQsNC70LDQs9Cw0L0g0JrQsNGC0LXRgNC40L3QsCwgOSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuINCi0LXQvNCwINC3INCy0LDRgNGW0LDRhtGW0Y/QvNC4LCAyKdCTLtCa0YPRiNC90LDRgNC10L3QutC+LiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvQmxVZlhXcWxoNXVEc0RGQ1hiSGdjN1hHaUFKR2JMSC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQtdGA0LDRgdC40LzQtdC90LrQviDQntC70LXQutGB0LDQvdC00YDQsCwgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JIu0KDQsNGH0LrQvtCy0YHRjNC60LjQuS4g0KLQvtC60LDRgtC40L3QsC4gMinQki7QmtC+0YHQtdC90LrQvi4gJyfQnNC10LvQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xREduc1NRR2xCdThYX29EUHQzWUt0S21pVnpWLUczcUovcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0L7Qu9C+0LTQvtCy0YHRjNC60LAg0KHQvtGE0ZbRjywgNyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQhi7QktCw0L3RhdCw0LvRjC7QoNC+0L3QtNC+LCAyKdCcLtCU0YDQtdC80LvRjtCz0LAuJyfQktC10YHQtdC70LAg0LPRgNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEyS3V0ai1vd3BzcjhoZWxybV9rRlpoMXlRd01qRUM3QS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQvtC70YPQsSDQkNC70ZbQvdCwLCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwg0IbRhy4sIDIp0JEu0JTQstCw0YDRltC+0L3QsNGBLiDQn9GA0LXQu9GO0LTRltGPXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdXdoS01LZEpaSWhSem5NM1ZVNW1UcUV1S3h4VGVzYU8vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0YDQuNCz0L7RgCfRlNCy0LAg0JrQsNGC0LXRgNC40L3QsCwgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQoNCw0L3QvtC6JycsICAgMinQhi7QmtC+0YDQvtC70YzQutC+0LLQsC4nJ9CT0L7RgNC+0LHRh9C40LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFpTXY1THdZVjltMnd6LVNKTUdueGZVcUlSVDlNX0V3L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzExXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNCw0L3RjtC6INCE0LvQuNC30LDQstC10YLQsCwgNyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7Qm9GO0LHQsNGA0YHRjNC60LjQuS4nJ9Ci0LDQvdGG0Y7QstCw0LvRjNC90LAnJywgICAgMikg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5LiDQktCw0LvRjNGBXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdlRrX21BQl9FQ2g5VkR3UjZFTWFzWTF5MjFLV3JTWUgvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0YDQvtCz0LDQvSAg0JzRltC70LDQvdCwLCA1INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCc0LDQudGU0YAuICcn0JLQtdGB0LXQu9CwINCz0YDQsCcnLCAyKdCULtCR0LDRiNGC0LXQudC9LiAnJ9CS0LDQu9GM0YEg0YHQu9C+0L3QtdC90Y/RgicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWGIwZ0lnRnlDbkx1Q3hqbjVrbGFlUTBMbDlEc2tSUHovcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0YDQvtC30LTQvtCy0LAg0ITQu9C40LfQsNCy0LXRgtCwLCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUu0JzQtdC90YPQtdGCLiAyKdCTLtCa0LvQsNGB0YHQtdC9LiDQn9C+0LvRjNC60LBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyNV8xOHBSN0JMeERTREVuTUQ3ckhOR2pSOXppRWlHbi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxNFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JfQsdGW0YAg0JzQsNGA0ZbRjywgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7Qk9C10LTRltC60LUuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCAgICDQhiDRhy4sIDIp0KAu0KjRg9C80LDQvS4nJ9Cf0LXRgNGI0LAg0LLRgtGA0LDRgtCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfN3FuM2ZUdXRkS0djR2RiZ3YxM3JLb2tKOGp4Z2szYS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjNC60ZbQsiDQntC70LXQutGB0LDQvdC00YDQsCwgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QlNGW0LDQsdC10LvQu9GWLiDQodC60LXRgNGG0L4sICAyKdCeLtCT0LXQtNGW0LrQtS4gJyfQnNCw0LvQtdC90YzQutCwINC/J9GU0YHQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdlllVmtSYVYxbWIzM3VKMURHTXIyMHFvaWtGQ3I5QXkvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQnNCw0YDRltCw0LwsIDgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCc0LDQudC60LDQv9Cw0YAuICcn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0YHQvtC70Ywg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJSbExNSmpvV3dUVnVwN192Vk1ENEQzbmwyWS1sc3BPL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JzQsNGA0ZbQsNC8LCA4INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JrQuNGA0LXQudC60L4uICcn0KHRgtGA0LjQsS3RgdC60L7QuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSW1wUHE5bmNiTWg1VDFTY0FIZkRtejU3QkRsTFpDRjIvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMThcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0YHRg9C/0L7QstCwINCQ0LvRltGB0ZbRjywgOCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0KDQtdC50L3QtdC60LUuICcn0JPQsNCy0L7RgicnLCAyKdCZLtChLtCR0LDRhS4gJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDQtNC+INC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwZzlDQ0pvWFJ6ZUc4Q2lGaGduRUJ6VFFCTElXRGFuQS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtCy0LDQu9C10L3QutC+INCS0LDRgNCy0LDRgNCwLCA4INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCT0LXRgtCw0LvQvtCy0LAuJyfQoNCw0L3QvtC6INCyINC70ZbRgdGWJycsICAyKdCSLtCf0L7QtNCy0LDQu9CwLiAnJ9Ca0LDQv9GA0LjQt9GD0LvRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUzM4X29FQ09CbzdLR0RWMWF6SlV4M3pPWXdnUUVRSVYvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7RgNC10L3RltCy0YHRjNC60LAg0JTQsNGAJ9GPLCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoC7QktCw0L3QtNCw0LsuJyfQktC+0LTQvtCz0YDQsNC5JycsICAgICAgICAgMinQny7Ql9Cw0YXQsNGA0L7Qsi4nJ9CX0L3QsNC50L7QvNC40Lkg0YHQuNC70YPQtdGCJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5Q0F6UENhV3JBTl9TV3phSkZkRXB4UElPUXctcmZMVS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGB0YLQtdC90LrQviDQr9GA0L7RgdC70LDQstCwLCA3INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JrQvtGB0LXQvdC60L4uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNkZFljb3lnVGN0b2FiR1FGN3BUMnBvUnZDdXBWR19jL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzFjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0YHRgtC10L3QutC+INCv0YDQvtGB0LvQsNCy0LAsIDcg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QmdGU0L3RgdC10L0uJyfQp9Cw0YDRltCy0L3QuNC5INGC0LDQvdC+0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXVCMjliVFBFaVlkdWdKZkxPWmw0U1FHckZZOW5RcHItL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzFkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9Cw0YLQutC+0LLRgdGM0LrQsCDQhNC70LjQt9Cw0LLQtdGC0LAsIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQvtGB0LXQvdC60L4uINCS0LDQu9GM0YEsICAgIDIp0J4u0JPRgNC10YfQsNC90ZbQvdC+0LIuJyfQnNGW0Lkg0LrQvtC90LjQuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNllBdy1xN2Y4RjlKQlBtZm44dEVrcEpUODFKN0VhaEEvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCb0ZbRiNC80LDQvSDQlNCw0YDQuNC90LAsIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0J/QvtC00LLQsNC70LAuJyfQnNCw0YDRiC3Qs9GA0L7RgtC10YHQuicnLCAgICAgICAgICAyKdChLtCc0LDQudC60LDQv9Cw0YAuICcn0JrQvtC70LjRgdC60L7QstCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOc1d6M1RSMFNLaVR0Y05DQUplMDU5YmhoRm9tdF9ORS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNCz0L7Qu9CwINCh0L7RhNGW0Y8sIDgg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCvLtCR0L7QsdCw0LvRltC6Licn0KHQstGP0YLQutC+0LLQsCDQv9C+0LvRjNC60LAnJzsgMinQhi7QkdC10YDQutC+0LLQuNGHLiDQodC+0L3QsNGC0LjQvdCwINGB0L7Qu9GMINC80LDQttC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFndUF4czVnX3diR3ZfdHdxaXlwbzBlOEZIT3d1bS1JaC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNC30YPRgNC10L3QutC+INCc0LDQudGPLCA4INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLiDQkdC+0LHQtdGALiAnJ9CQ0LPQtdC90YIg0KUnJywgICAgICAgICAgMinQhi7QhtC+0YDQtNCw0L0uICcn0J/QvtC70Y7QstCw0L3QvdGPINC90LAg0LzQtdGC0LXQu9C40LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSWUxV0NRcGdQdUxZZEtOeFZHdUxrZUlWbllKTlpKOVQvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDRgNGH0LXQvdC60L4g0ITQu9C40LfQsNCy0LXRgtCwLCA5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4nJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINC00L4g0LzRltC90L7RgCwgMinQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0JHQsNCx0LAg0K/Qs9CwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFaSm80R1VMWjlzZmNVdUFwRjVqeW9ISVVWX0lLQVZyZy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNGA0YfRg9C6INCc0LDQutGB0LjQvCwgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCkLiDQqNC/0ZbQvdC00LvQtdGALiDQodC+0L3QsNGC0LjQvdCwLCDRgtCyLjE1NyDihJY0XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xc0M3TVVqY2tucm5aWlo1aGZNQ1hiU3ZzMzZLQTNwcFYvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDRgNGH0YPQuiDQnNCw0LrRgdC40LwsIDgg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JPRltC70LvQvtC6LiAnJ9Ca0LDQv9GA0ZbRh9GW0ZTRgtGC0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVlkQWlodkFRa0NUOGJieVc0NHBRaTJpWmhtWDFjM0t6L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC+0YLRg9C30LrQuNC90LAg0JvRltC00ZbRjywgOSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCR0ZbQu9Cw0YfQtdC90LrQvi4gJyfQo9C60YDQsNGX0L3RgdGM0LrQuNC5INGC0LDQvdC+0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJwTzlkSEFjYlA4S2xhV1RfMW5YWFFpWmVidUQ4RjBwL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC+0YLRg9C30LrQuNC90LAg0JvRltC00ZbRjywgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCc0L7RhtCw0YDRgi4gJyfQnNC10L3Rg9C10YInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNfbXhBVTY1VnZ2dmZpUG9SUXNjS1Iwb1VEV3BIRFF0L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQndC+0LLQvtGB0ZbQu9GM0YHRjNC60LAg0JrQsNGC0LXRgNC40L3QsCwgNyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCDRgtCyLjM2LCDQhi3QhtCG0IbRhy4sIDIp0IYu0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRj1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVk3MkNGTE9NUGlid1RVUGdXT21zUUgzWUpQdmlCakRhL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQntC70YzRhdC+0LLRgdGM0LrQsCDQkNC90ZbRgtCwLCA5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0IYu0J/QsNCy0LvRltC6LiAnJ9Ch0L3RltC20LjQvdC60LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJzLVZnRk1uSVlaVm05a09qTmg2RlRsX1AwQ0FEUkIxL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQntC70YzRhdC+0LLRgdGM0LrQsCDQkNC90ZbRgtCwLCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J0uINCa0LDRgNC/0LXQvdC60L4uINCV0YLRjtC0INGB0ZYg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtTM0JxUXc0LW1zTW96bk8zTnpfaVdjNXl0bEpPRlRtL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQntGB0YLQsNC/0YfRg9C6INCa0LDRgNGW0L3QsC4gOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7Qk9GW0LvQu9C+0LogJyfQlNC30LLRltC90L7Rh9C60LgnJywgMinQhi7QpdGD0YLQvtGA0Y/QvdGB0YzQutC40LkuJycn0JLQvtCz0L3RltCy0L7Rh9C60LAt0YHRgtGA0LjQsdGD0L3RltCy0L7Rh9C60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZSQWNOMk82a3VuS1pBRnJiZ0JIc0VOaVpnOWlLczRHL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQntGF0YDRltC9INCv0YDQtdC80LAsIDgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4gJyfQndC+0LLQtdC70LAnJywgICAgICAyKdChLtCc0LDQudC60LDQv9Cw0YAuJyfQotC+0LrQsNGC0LjQvdCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6dzFKSzBKNGQ4SGstem5idi01b0RuYS1xTDNjd1JFUC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/QsNCy0LvQtdC90LrQviDQodGC0LXRhNCw0L3RltGPLCA3INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7Qm9GO0LHQsNGA0YHRjNC60LjQuS4gJyfQn9GW0YHQvdGPJycsMikg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5Licn0JrQu9C+0YPQvdC4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJbW53SmoyRGVxei1USmZ2WEFDQ3JacGlaTlQzQm5LSC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/QsNC90YzQutC+0LLQsCDQkNC90L3QsCwgOCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiAnJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINC00L4g0LzRltC90L7RgCwgICAgICAgIDIp0Jsu0KjRg9C60LDQudC70L4uICcn0IbQvdGC0LXRgNC80LXRhtC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5ckFIcjZpMTdOU2hQNXFhSW1Qbld4LXhKUWpDTU15Mi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/QsNGA0YTRjNC+0L3QvtCyINCU0LzQuNGC0YDQviwgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QktC70LDQtNC40LrRltC90LAt0JHQsNGH0LjQvdGB0YzQutCwLicn0KnQvtGB0Ywg0YHRg9C80L3QtScnLCAyKdCeLtCT0LXQtNGW0LrQtS4gJyfQotCw0L3QtdGG0YwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5EZHc1N1Jzcm1MckVfeVdTRzB1RkpYRWpXY0dxR21SL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9C+0LPQvtGA0ZTQu9C+0LIg0JDRgNGC0LXQvCwgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuICcn0JzQtdC90YPQtdGCJycsIDIp0J0u0J3QuNC20LDQvdC60ZbQstGB0YzQutC40LkuICcn0JrQvtC70L7QvNC40LnQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuZTg2aU0tTlVzNk5jaW9Cc3ZVamZRYTZNbjdjU0FSNy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/Rg9C30LDQvdC+0LLQsCDQnNCw0YDRltGPLCA5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCjLiDQk9GW0LvQu9C+0LouICcn0JrQvtGA0L7Qu9GW0LLRgdGM0LrQuNC5INC80LXQvdGD0LXRgicnLCAyKdCGLtCG0L7RgNC00LDQvS4gwqvQn9C+0LvRjtCy0LDQvdC90Y8g0L3QsCDQvNC10YLQtdC70LjQutCwwrtcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPR1NfZnF6SnZiQjdhTlByZXh3cURLNXgwbHMtMjBDQy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDQtdC30L3RltC6INCi0LXRgtGP0L3QsCwgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QotC+0YDQvtC/0L7QstCwLiDQktCw0YDRltCw0YbRltGXLCAgICAgMinQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuICcn0JzQsNC70LXQvdGM0LrQuNC5INC20L7QvdCz0LvQtdGAJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4R3hOVFR0V3JoZE91Nlk3R3VlVUFnR1h2am9MbE1CbC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDQuNCx0LDQuiDQkNC90LDRgdGC0LDRgdGW0Y8sIDgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpLtCc0LXQu9Cw0YDRgtGW0L0uJyfQoNCw0L3QvtC6JycsIDIp0Jwu0JzQsNC50ZTRgC4nJ9Cd0LXQt9Cy0LjRh9Cw0LnQvdCwINC/0YDQuNCz0L7QtNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1em1WcUZWbm5RYUlHWDdvM0gtN3ROZTBrcDFaaVV2UC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDRltC/0L3QuNC5INCR0L7Qs9C00LDQvSwgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0IYuINCR0LXRgNC60L7QstC40YcuINCS0LDRgNGW0LDRhtGW0ZcsICAgICAyKdCULiDQoNC+0YPQu9GWLicn0JIg0LrRgNCw0ZfQvdGWINCz0L3QvtC80ZbQsicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUWxyMV8tcEZBbExJaXhLa2h4Mi1aeHhFWVpoQVo5WjcvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0L7QvNCw0L3Rh9C10L3QutC+INCV0LvQuNGB0LXQuSwgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Kgu0JPRg9C90L4uJyfQnNCw0YDRiCDQvNCw0YDRltC+0L3QtdGC0L7QuicnLCAgIDIpINCeLtCT0YDQtdGH0LDQvdGW0L3QvtCyLicn0J3QtdC30LLQuNGH0LDQudC90LAg0L/RgNC40LPQvtC00LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlJLXpqcTRRaW1ETDlUTEU1QlJZdXJtdUFMMTZmU2NVL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCw0LnRh9GD0Log0K/RgNC+0YHQu9Cw0LLQsCwgOSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCiLiDQnNCw0LrRgdC40LzQvtCyLicn0JHQsNCx0LAg0K/Qs9CwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYNUM3a2ZOZDNRbG9abDBUQXZOX0FRaDAtcVh0cFNTQi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQsNC50YfRg9C6INCv0YDQvtGB0LvQsNCy0LAsIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmi7QoNC+0LvQu9GW0L0uICcnINCo0L7QutC+0LvQsNC00L3QtSDQv9C10YfQuNCy0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZ2WW1fRWREeF8tM0JSSEpNeUQzNWszb0M0RjJ0VjU2L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodGW0YLRiNCw0ZTQstCwINCX0LDRgNC10LzQsCwgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YA7IDIp0Jou0KHQu9C+0L3RltC80YHRjNC60LjQuS4gJyfQlNGO0LnQvNC+0LLQvtGH0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSDZlZFF0c1JwMF93Y3VPWVJBRWgxbGZmUnowVFh0aWIvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0ITQstCz0LXQvdGW0Y8sIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQstCw0YHQvdC10LLRgdGM0LrQuNC5Licn0JTRg9C80LrQsCcnLCAyKdCULtCQ0LvQtdC60YHQsNC90LTQtdGALiAnJ9CX0LjQvNC+0LLQsCDRgNCw0L/RgdC+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2TFc5RWVzUFBzMVNUaTZrUXBReGRFSnprM1BnbkhZai9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHRgtGA0LjQudGB0YzQutCwINCQ0LzQtdC70ZbRjywgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JIu0JrQvtGB0LXQvdC60L4uJyfQlNC+0YnQuNC6Jyc7ICAgICAgMinQni7QkdGW0LvQsNGH0LXQvdC60L4uICcn0JXQutGB0L/RgNC+0LzRgicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMGg5T05SRzJUNDJ2eEFsV3k0QVNQMHFnYThJVTAycnYvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0YLRg9C00LfQuNC90YHRjNC60LAg0ITQu9C40LfQsNCy0LXRgtCwLCA3INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy4g0JzQvtGG0LDRgNGCLiAnJ9Cc0LXQvdGD0LXRgicnLCAgICAyKdCjLiDQk9GW0LvQu9C+0LouICcn0J7RgdGW0L3QvdGW0Lkg0LXRgdC60ZbQtycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVmRzT2J1YjlaMEU3Wk0xUVlNc2Zxa2Fsam5uTFEyamUvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzM2FcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0YPRhdCw0L0g0JTRltCw0L3QsCwgOCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0KjRg9C60LDQudC70L4u0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGC0LXQvNGDINCSLtCo0LDRl9C90YHRjNC60L7Qs9C+OyAyKdCgLtCk0YPRh9GBLicn0JzQsNC70LXQvdGM0LrQtSDRgNC+0LfQsdC40YLQtSDRgdC10YDRhtC1JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHdTV1Y29DR0ZoeUVuTWgzLUlEVUotdUYwVHVqMzdVWi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQtdGA0L8n0Y/QuiDQkNCw0YDQvtC9LCA5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQhi7QkdC10YDQutC+0LLQuNGHLiDQktCw0YDRltCw0YbRltGXINC90LAg0YPQutGA0LDRl9C90YHRjNC60YMg0YLQtdC80YM7IDIp0KIu0J7RgdGC0LXQvS4gJyfQnNCw0LvQtdC90YzQutC40Lkg0LXQu9GM0YQnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVp0UWJOQkJnR21Pek1Xbm5IQUYtN19DQnNYazNMdy0yL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotC40LzRh9C10L3QutC+INCd0LDQtNGW0Y8sIDgg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCo0YLQvtCz0LDRgNC10L3QutC+LiAnJ9Cc0LXRgtC10LvQuNC6JycsIDIp0JIu0JPRltC70LvQvtC6LiAnJ9Cc0ZbRgdGP0YfQvdC1INGB0Y/QudCy0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBTOUFHSHlFRHFzdGpxQTFNaUViVGtwNWoxVXVTaHJHL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotGW0YnQtdC90LrQviDQktC10YDQvtC90ZbQutCwLCA3INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4gJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDQtNC+INC80ZbQvdC+0YAsIDIp0JsuINCo0YPQutCw0LnQu9C+LiDQktCw0YDRltCw0YbRltGXXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRnRyajlrNWpoRHhWaTV1ZmhYWTNUSGt3T0s4WTEySG0vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzM2VcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0L7QtNC+0YDQvtCy0LAg0JTQsNGP0L3QsCwgNiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QkdCw0YDQstGW0L3RgdGM0LrQuNC5LiAnJ9CX0LDQudGH0LjQuicnLCAgICAgICAgICAyKdCcLtCb0Y7QsdCw0YDRgdGM0LrQuNC5LiAnJ9Cf0LvRj9GB0L7QstCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFQQXpJQnRqRzBOZnFhelVJMjVIc1JyRlZYakx5ejJCaS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQvtC90ZbRlNCy0LjRhyDQmtGB0LXQvdGW0Y8sIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0KHQv9GW0LvRltC+0YLRli4nJ9CT0YPRhtGD0LvRj9GC0LAnJywgICAyKdCSLtCT0ZbQu9C70L7Qui4nJ9CjINGB0YLQsNGA0L7QvNGDINCS0ZbQtNC90ZYnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTE5dzN3bkhNcDZYTldTS0tyOVZKSW9ZalZJUDlNbEFPL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzQwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotGO0YLRjNC60L4g0JLQvtC70L7QtNC40LzQuNGALCA5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCa0YPQu9Cw0YMu0KHQvtC90LDRgtC40L3QsCwg0YLQsi41NSDihJYzLCAyKdCgLtCb0ZbRgdC+0LLQsC4nJ9CS0LXRgdC10LvQuNC5INC90LDRgdGC0YDRltC5JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFiZy1ISzdMcDNVd2pHazNNSVRUZEQ5ZVE3ckZkaHgxSC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0MVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KTQtdGB0LXQvdC60L4g0JDQvdC90LAsIDgg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCT0LXQtNGW0LrQtS7QodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwgIDIp0JIu0JPQsNCy0YDQuNC70ZbQvS4gJyfQmtCw0L/RgNGW0YfRh9GW0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVqcnE4WkVYQkpxX0FOZkFpWS01aktIN1JzNThmTHVDL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzQyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQp9C+0YDQvdC10Lkg0K/QvdCwLCA3INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC4g0JXQutGI0YLQtdC50L0uICcn0JrQsNC/0YDQuNC3INCz0L3QvtC80ZbQsicnOyAgMinQoS7QrtGE0LXRgNC+0LIuICcn0J3QvtC60YLRjtGA0L0nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWc2YkI3YXFXcHR3NWxMbkFpWGtsT0ZwUWw0WDBOTEtqL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzQzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQqNC60YPRgNC60L4g0KLQuNC80L7RhNGW0LksIDkg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCo0L7Qv9C10L0uICcn0JLQsNC70YzRgScnINC70Y8g0LzRltC90L7RgCwgICAgIDIp0Jsu0KjRg9C60LDQudC70L4uICcn0JLQtdGB0LXQu9CwINC80L7Qt9Cw0ZfQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFlSko0NFpiZ1RyVVRkSC10QlBLR3ljMUtfMHJyeWo0Xy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0NFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0K7RgNGH0YPQuiDQr9C90LAsIDcg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCcLiDQmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwLCDRgtCyLjM2IOKEljEsINCGINGHLiwyKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQktGA0LDQvdGW0YjQvdGPINC80L7Qu9C40YLQstCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvUFV1SDJxemFRVUx5cHZ1eTNNNlEtZjd2dmhabEFueC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0NVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JDQvNGW0YXQsNC70LDQutGW0L7QsNGUINCE0LzQtdC70YzRj9C9LCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QkdGW0LvQsNGH0LXQvdC60L4uJyfQntGB0ZbQvdC90ZbQuSDQtdGB0LrRltC3JycsIDIp0Jwu0JrQsNGA0LzRltC90YHRjNC60LjQuS4nJ9CT0YPQvNC+0YDQtdGB0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpmcWt5RzZCcFozXzFYWGRmX0ZWWU9XRm1wYWtqV1dQL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0NlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JDQvdGC0L7QvdGO0Log0JLQsNGA0LLQsNGA0LAsIDEyINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0J/Qu9C10LnRlNC70YwuINCh0L7QvdCw0YLQuNC90LAg0YDQtSDQvNCw0LbQvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMURKZUhmM2ZBdVo1NVBmNjVtTUF0dzJQY3Q5NmRmYS10L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0N1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JDQvdGC0L7QvdGO0Log0JLQsNGA0LLQsNGA0LAsIDEyINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0JzQsNC50LrQsNC/0LDRgC4nJ9CSINC60L7QstCw0LvRjNC90ZYnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsWHlLdXdNX0pneFlabDZlV2tBc2VVNnZOYVd6N3BZei9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNDhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCR0LDQsdGH0LDQvdGW0Log0JDQvdC00YDRltC5LCAxMCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JQu0KfQuNC80LDRgNC+0LfQsC4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALiAyKdCuLtCR0ZbQu9C60L7QstGB0YzQutC40LkuICcn0KDQvtC30LTRg9C80LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFVSEFzTktqY0ppQmd4QWRJTE9zakRFUkpLUU16ZXE3QS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNDlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCR0LDQu9GD0YLQsCDQkNC70ZbQvdCwLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEpINCVLtCT0YDRltCzLiAnJ9Ci0LDQvdC10YbRjCDQtyDQmdC+0LvRjNGB0YLQtdGA0LAnJywgMinQmy7Ql9Cw0LHQsNGA0LAuJyfQndGW0Ycg0Y/QutCwINC80ZbRgdGP0YfQvdCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb1hHRjNtNDFLLVFOOFkxLVdfajg1RHJUamtrODhzUVgvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzRhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkdCw0YHQuNGB0YLQsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCkLtCo0L7Qv9C10L0uINCS0LDQu9GM0YEsINGC0LIuNjQg4oSWMSwgMinQoS7QkdC+0YDRgtC60LXQstC40YcuINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuNiDihJYxXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXNQV1pTUG40VU1KVmRmejczZ3JhRHdkd0l4eVhnakJZL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0YlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JHRltC70ZbQvdC60LXQstC40Ycg0J3QsNGC0LDQu9GW0Y8sIDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC7Qm9C40YHQtdC90LrQvi4g0JXQu9C10LPRltGPLDIp0Jou0KfQtdGA0L3Rli4g0JXRgtGO0LQg4oSWMSDRgtCyLjc0MFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFBUl9XVzBDRlNTQ1h6VkFmckhYdXdCQUQtX1FDOGo2Vy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCR0YPQu9GM0LrQvtCy0YHRjNC60LAg0JzQsNGA0LjQvdCwLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCULtCn0ZbQvNCw0YDQvtC30LAuINCh0L7QvdCw0YLQsCDRgdC+0LvRjCDQvNCw0LbQvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJveGR0Z0FkaEJJSmR0Y3hkem5aSFAtcTVmYXFhNVFLL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0ZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JHRg9C70YzQutC+0LLRgdGM0LrQsCDQnNCw0YDQuNC90LAsIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi7Qk9Cw0LHQtdC7LiAnJ9CU0LXRgNC10LLQviDQttC40YLRgtGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZlhaNk5kc042dTc4dEk2ZXJLRWpYMm9mZXNIQjJlYmgvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzRlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktCw0LrRg9C70LXQvdC60L4g0JDRgNGW0L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QkdC10YDQutC+0LLQuNGHLiDQktCw0YDRltCw0YbRltGXINC90LAg0YLQtdC80YMg0LPRgNGD0LfQuNC90YHRjNC60L7RlyDQvdCw0YDQvtC00L3QvtGXINC/0ZbRgdC90ZYgJyfQodCy0ZbRgtC70Y/Rh9C+0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDZHRYb1Z6akVsMVlxVkNkQnl4S3NaZHFFamZ0MWhzNi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0LDQutGD0LvQtdC90LrQviDQkNGA0ZbQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCU0LbQvtC/0LvRltC9Licn0JDRgNGC0LjRgdGCINC10YHRgtGA0LDQtNC4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR250aVl2THpIclVYSXNXRGZkSHA0MC10dDV5WXVpZ3EvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzUwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktCw0YHQuNC70YzRlNCy0LAg0JLQtdGA0L7QvdGW0LrQsCwgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KAu0JPQu9GW0ZTRgC4g0J/RgNC10LvRjtC00ZbRjyDQtNC+INC80ZbQvdC+0YA7MinQoS7QlNC20LXRgNCx0LDRiNGP0L0uJyfQqNCy0LjQtNC60LjQuSDRgNGD0YUnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFRQmd0ZGh3MklRZVRINlFFWW5LTEdCYWxYMEsydXBONC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0L7QudGC0LXQvdC60L4g0JvRltC70ZbRjywgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLiDQqNGD0LrQsNC50LvQvi4nJ9Cf0L7QvdGWJycsIDIp0J4u0KDQuNCx0LDQu9C+0LLQsC4gJyfQndC10L/QvtGB0LjQtNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLUxfa0pIdTFQcGtQR1JDSl9FZnhGTEJibWM4Zk9Pd3EvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzUyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktC+0LnRh9C10L3QutC+INCS0LvQsNC00LjRgdC70LDQsiwgMTEg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKSDQmS7QoS7QkdCw0YUu0JTQstC+0LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDRhNCwINC80LDQttC+0YA7IDIp0KQu0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0g0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXd1NWtsWEdHN0JoMmZQbFIzWWJlTWxTS1pCVDhQUm5OL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1M1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQvtGJ0LjQvdGB0YzQutC40Lkg0IbQu9C70Y8sIDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCVLtCT0YDRltCzLiDQndC+0LrRgtGO0YDQvSwgMinQnC7QoNC40LzRgdGM0LrQuNC5LdCa0L7RgNGB0LDQutC+0LIuICcn0J/QvtC70ZbRgiDQtNC20LzQtdC70Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3bGJTMEw5NTZhTlo5RDBHVEktcC1rMzl6NGxwZWhDNy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0LDQu9C10YfQtdCyINCG0LLQsNC9LCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0J7QsdGALiDQky7QkdC10Lcn0Y/Qt9C40YfQvdC+0LPQvi4gJyfQndGW0Ycg0Y/QutCwINC80ZbRgdGP0YfQvdCwJycsIDIp0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4gJyfQndC10LDQv9C+0LvRltGC0LDQvdGB0YzQutCwINC/0ZbRgdC10L3RjNC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0LVo4MnZZa1ZGMXgyTnBucUsxX3hoQWYyYld1YVBRVi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0LDQvNC30LDQu9GW0ZTQstCwINCX0LXQudC90LDQsSwgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCR0ZbQu9C+0YDRg9GBLiDQvdCw0YAu0L/RltGB0L3RjyAnJ9CR0YPQu9GM0LHQsCcnLCDQvtCx0YAu0JQu0JvRjNCy0LAt0JrQvtC80L/QsNC90ZbQudGG0Y9cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZFFxR0ZwaE9HbzBWcEdvVWQ0ejRVM2VuOUxUYzE5cGsvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9Cw0LzQt9Cw0LvRltGU0LLQsCDQl9C10LnQvdCw0LEsIDEyINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JPQsNC50LTQvS4g0JzQtdC90YPQtdGCXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVd3XzgwMEpQdkg2OVl0ak9ORUNKSDhWdFpfZVpra3lrL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1N1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPRltC70ZbQvdCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QnNC+0YbQsNGA0YLQkNGA0ZbRjzsgMinQlC7Qk9GA0LDQtNC10YHQutGWLicn0JzQvtGA0L7Qt9C40LLQvi4g0KDQtdCz0YLQsNC50LwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmM0s1MEdWY3c4a3NkWWdSTXhWNjFhZFJBRkg1UEtNdy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNThcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0L7RgNCw0Lkg0K/RgNC+0YHQu9Cw0LIsMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0KHQutC+0YDQuNC6ICcn0JzQtdC70L7QtNGW0Y8nJywgICAgICAgICAyKSDQny7QkdCw0LfQsNC70LAuICcn0J/QvtGC0ZbQuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVDYm43eFB2RWJySENwTVRobkNJajVRdGduNnJWU19mL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1OVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQvtGG0YPQu9C10L3QutC+INCS0ZbQutGC0L7RgNGW0Y8sIDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtCR0LDRhS4g0JTQstC+0LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDQu9GPINC80ZbQvdC+0YAsIDIpINCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9IOKEljIxXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTcxSUNNXzdHaHJhbzFSTjZ1ZzBYTG9STkpLb2JhUkdRL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1YVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPRg9C60LDRgdGP0L0g0JvRltCw0L3QsCwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0JrQtdC70LvQtdGALiDQodC+0L3QsNGC0LjQvdCwLCAgICAgICAgICAyKSDQkC7QpdCw0YfQsNGC0YPRgNGP0L0uICcn0JDQvdC00LDQvdGC0ZbQvdC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMklkQWZTaV93YVU2bHJOZlV2UDJIMHgwV083OGFNR2EvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzViXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9GD0LvRj9GU0LLQsCDQhNCy0LAsIDEx0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J8uINCX0LDRhdCw0YDQvtCyLicn0JXQu9C10LPRltGPJycsIDIpINCTLtCS0LDQu9C70LXQvdCz0LDRg9C/0YIuICcn0KHQutC10YDRhtC40L3QvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJiY203Rl9CZkFlcU1FemZRaFo2ZkYzWTIxYTdyWXN3L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1Y1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPRg9GC0L3QuNC6ICDQmtGW0YDQtdC90LAsIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0KjRltGC0YLQtS4nJ9Ci0LDQvdC10YbRjCAg0LPQvdC+0LzRltCyJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbmlEcU5pQ0p1M0NMUzNFRzVCV0h1Ql9BcTd2NDVSczMvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9GD0YLQvdC40Log0JrRltGA0LXQvdCwLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCeLtCh0L7Qu9C+0LLRj9C90LXQvdC60L4uJyfQn9C+0L3RliDQsdGW0LvRjyDRhtC40YDQutGDJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaDdxMFlhWWl5NkE2czZCcHdfVHh0enJ3d1NfQXo5THgvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNC+0YDQvtGI0LXQvdC60L4g0K7Qu9GW0Y8sIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC4g0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCwg0YLQsi4zNiDihJY2LCDQhiDRhzsgMikg0IYu0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjywg0YLQsi40NiDihJYxNVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHbEZDTEMzeF8xdFpDT2ZtTmhOMG00VDBQT0pZQlRqTi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0YPQtNGW0L0g0JTQvNC40YLRgNC+LCAxMSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALNCGLdCG0IYg0YcuOyAyKdChLtCf0YDQvtC60L7RhCfRlNCyLiAnJ9Ca0LDQt9C+0YfQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeGJtNHgtVmZ6SHp1ekI0alRoYnNQaDhJYUNhOTR0dEIvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzYwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhNGA0LzQvtC70LXQvdC60L4g0JTQsNGA0LjQvdCwLCAxMiDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuINCQ0YDRltGPINGA0LUg0LzQsNC20L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1N002Q1hpeXNVZkp1dTZNLUF2Qjc3NFdlbjBBbnVaTi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCE0YDQvNC+0LvQtdC90LrQviDQlNCw0YDQuNC90LAsIDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JHRltC70LDRiC4gJyfQkdCw0YDQutCw0YDQvtC70LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoT1JmNHVWdm9XNTRwVEN4Z0syekltZ3hZeEg0N1lvby9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCX0LDQs9Cw0ZTQstGB0YzQutCwINCh0L7RhNGW0Y8sIDEyINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QmtC70LDRgdGB0LXQvSAnJ9Cc0YPQt9C40YfQvdC40Lkg0LXRgdC60ZbQtycn4oSWMSwgMinQni7QmtC40LzQu9C40LouJyfQm9C10L7QvdGC0L7QstGW0LDQvdCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdzFUUGg5SlhzQWplX0twRTlRUHA1SXYwRXVqbXZqRy0vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzYzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC90ZbQutC+0LLQsCDQnNCw0YDRltGPLCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QnNC+0YbQsNGA0YIuINCh0L7QvdCw0YLQsCDihJYxNiwg0IYg0YfQsNGB0YLQuNC90LAsICAyKdCeLtCT0YDQuNCx0L7RlNC00L7Qsi4g0JLQsNC70YzRgVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYMXZoc1RJUGtJNXppczIySkhPWHhRVURkT0JlOUE5Ry9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQktGW0YDRgdCw0LLRltGPLDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCl0L7QtNC+0YguJyfQp9C10YDQstC+0L3QsCDRiNCw0L/QvtGH0LrQsCcnLCAyKdCGLtCp0LXRgNCx0LDQutC+0LIuJyfQldC70LXQs9GW0Y8g0LrQuNGX0LLRgdGM0LrQuNGFINC/0LDQs9C+0YDQsdGW0LInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFNN0kxUUpiRmtXQlFId0sxbEhLb3lvRTMwbC1XYzEybS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCH0LLQttC10L3QutC+INCQ0LTQsCwgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli7QodC+0L3QsNGC0LjQvdCwINGB0L7Qu9GMINC80LDQttC+0YAsIDIp0Jwu0KHQutC+0YDQuNC6LiAnJ9Cd0LDRgNC+0LTQvdC40Lkg0YLQsNC90LXRhtGMJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa3BtNmswTUN0dWpnN3NQSDlkY29kWTBrejFCckdFWDkvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtCw0LzQsNC90YfQuCDQhNC70LjQt9Cw0LLQtdGC0LAsIDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0LDQu9GW0YHRgtGA0LDRgtC+0LIuJyfQmtC+0L3QuNC6INCT0L7RgNCx0L7QutC+0L3QuNC6JycsIDIp0K4u0JLQtdGB0L3Rj9C6LiAnJ9Cd0ZbQttC90ZbRgdGC0YwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFtbFdhTFlzRDhma0JRSGdkclgtUmZOQ2tkNndSclBrTy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0LDRgNCw0YjQutC10LLQuNGHINCl0YDQuNGB0YLQuNC90LAsIDExINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YDQtSDQvNGW0L3QvtGALCAyKdCcLtCU0YDQtdC80LvRjtCz0LAuICcn0KHQutC10YDRhtC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRUJHaE5JcHRKU2VpMEdaTEtwc2Z5YUloaTNVYWUwY0gvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtGW0YbQtdGA0LAg0JDQu9GW0L3QsCwgMTEg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0JTQtdCx0Y7RgdGB0ZYgJyfQoNC+0LzQsNC90YLQuNGH0L3QuNC5INCy0LDQu9GM0YEnJywgMinQkS7QpNGW0LvRjNGGLiAnJ9Ch0LrQtdGA0YbQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5vdnNvZ193NTJwekdrZkoyaFp4aWh2MzNDMmNTZjBKL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2OVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGA0L7Qu9GMINCE0LvRltC30LDQstC10YLQsCwgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0J/RltGB0L3RjyDQttCw0LnQstC+0YDQvtC90LrQsCcnOyAyKdCbLtCo0YPQutCw0LnQu9C+LiDQn9GA0LXQu9GO0LTRltGPXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtickdsOF9JaGZxbmprdlR2b1doNzltZ205cFE1a1RKL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2YVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGC0LvRj9GA0LXQstGB0YzQutCwINCu0LvRltGPLCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCZLiDQk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg0YHQvtC70Ywg0LzQsNC20L7RgCwg0IbRhy5cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRkFXSEhLUTVveDBFVEpMdnVyclJnWjJkT20xdnRGa2UvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0YLQu9GP0YDQtdCy0YHRjNC60LAg0K7Qu9GW0Y8sIDExINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiJ9CT0LDQvdC00LfRjycnLCDQvtCx0YAu0IQg0JLQtdCy0YDQuNC60LBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa0l2ZHN2SXJ4ZW84MTZkLV9NVjVuYmJjci1hT1poRXAvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0YLQvtCy0LAg0JzQsNGA0ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCa0LvRjtGH0LDRgNGM0L7Qsi4nJ9Co0YPRgNCw0LvRlCcnLCAyKdCkLtCc0LXQvdC00LXQu9GM0YHQvtC9Licn0J/RltGB0L3RjyDQsdC10Lcg0YHQu9GW0LInJywg0YLQsi4xOSDihJYyXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVkxY1dfMlppd0JFTjBZYzFLcldXbmNYMzc2emdhRDVCL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2ZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrRgNC40LLQvtCx0LDQsdC60L4g0JrRgdC10L3RltGPLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCbLtCo0YPQutCw0LnQu9C+LiAnJ9CS0LXRgdC90Y/QvdGWICDQutGA0LDQv9C70LjQvdC60LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFkSUpna0xJTzJlN2xjTnB1QVJqeG11ZHcwM3hqbmMzMi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0YDQuNCy0L7QsdCw0LHQutC+INCa0YHQtdC90ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnS7QmtCw0YDQv9C10L3QutC+LiDQldGC0Y7QtCAg0YDQtSDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUI0LUViUllPLWJjQ2pmdXBwZUhYU2h2NURRenVpOWhBL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2ZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrRg9GC0LrQvtCy0YHRjNC60LAg0JvQsNGA0LjRgdCwLCAxMiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JUu0JPRgNGW0LMuICcn0J3QvtC60YLRjtGA0L0nJywg0YLQsi41NCDihJY0LCAyKdCiLtCa0YPQu9GW0ZTQsi4gJyfQm9C10LfQs9GW0L3QutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMWNtUUJkc20yZXB3WlNfbVVKeDNncDFXNTgyWnlXZDcvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzcwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm2nQt9C+0LPRg9CxINCQ0YDRgdC10L0sIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCTLtCh0LDRgdGM0LrQvi4nJ9Cg0LXQs9GC0LDQudC8JycsIDIp0J8u0JfQsNGF0LDRgNC+0LIuJyfQodGC0LDRgNC+0LLQuNC90L3QsCDQsdCw0LvQsNC00LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExU0ZrV0Z2V25fVUdOSks3YzdaMUxsSjJOYXNNOUtzZy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCb0LDQvdGB0YzQutC40Lkg0ITQstCz0LXQvSwgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQoNCw0L3QutC+0LLQsCDQvNC+0LvQuNGC0LLQsCcnLCDRgtCyLjM5LCAyKdCGLtCR0LXRgNC60L7QstC40YcuINCi0L7QutCw0YLQsCDQu9GPINC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVm5QRkxzNXhIQ3QwVEwyc2QxRTlXV3loVEI4a0dUdWgvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzcyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9C10LLQsNC90LTRltCy0YHRjNC60LAg0JzQsNGA0YLQsCwgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQki7QkdCw0YDQstGW0L3RgdGM0LrQuNC5LiAnJ9Cj0LrRgNCw0ZfQvdGB0YzQutC40Lkg0YLQsNC90LXRhtGMJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRlZqeEFlQjNkT3pKcEFURFh5SS0xQUJ0Uml6anpqb2QvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzczXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9C10LLQsNC90LTRltCy0YHRjNC60LAg0JzQsNGA0YLQsCwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQry4g0KHRltCx0LXQu9GW0YPRgS4g0JXRgtGO0LQg0YLQsi4gNzYg4oSWMlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE4SzdyZ1J6akNxWi1fNUVXcjBFb0U1SmxuVHloZ1pTNC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCb0LXQt9CwINCQ0L3QvdCwLCAxMSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9IOKEljIwLCAyKdCfLtCX0LDRhdCw0YDQvtCyLiAnJ9Cg0L7QvdC00L4t0LPQsNC70L7QvycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVR3ZjJzSjNfOUFyM29PVG1aV0t2NnE4U01hOWZHYS1wL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3NVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JvQuNC60L7QstCwINCS0LDRgNCy0LDRgNCwLCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JIu0JPRltC70LvQvtC6LicnQmlsbCBiYWlsZXknJywgMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4nJ9Co0LDRgNC80LDQvdC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFkRTVMY2ZWLVQ4UWhMWGlBZm44c3hMRU1lY3ZnUy1oTy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCb0ZbQu9GW0Log0JzQsNGA0ZbRjy3QnNCw0LPQtNCw0LvQuNC90LAsIDExINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNC+0L/QtdC9LiAnJ9CQ0YDQutGD0Ygg0Lcg0LDQu9GM0LHQvtC80LAnJyDQvNGWINCx0LXQvNC+0LvRjCDQvNCw0LbQvtGALCAyKdCcLtCa0L7Qu9C10YHRgdCwLiAnJ9Ch0LrQtdGA0YbQuNC90L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFxdGljZHVBUVFtNzJOY3k4ZS1zdDZua2pxd0JyRlNUZS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDQutCw0YDQtdCy0LjRhyDQkNC90LTRgNGW0Lkt0J7Qu9C10LrRgdCw0L3QtNGALCAxMSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGA0LUg0LzQsNC20L7RgCwgMinQmi7Qp9C10YDQvdGWLiDQldGC0Y7QtCDihJY1LCDRgtCyLjI5OVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpVnVCUGZ3NEhuY1BKa0puMnlOWlp3OFVYbFVYSkhWYy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDRhtGW0LHQvtGA0YHRjNC60LAg0JDQvdC90LAsIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmS4g0JHQsNGFLiDQlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGB0ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YAsICAgIDIpINCkLiDQr9C60LjQvNC10L3QutC+LiAnJ9CV0LvQtdCz0ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNyWXR0SkZkaXpzdUJlMHlOc0tyTkRnSlVQX0FpaGFOL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3OVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQtdC70YzQvdC40Log0JzQuNGF0LDQudC70L4sIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYuINGB0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCAyKdCSLtCa0L7RgdC10L3QutC+LiAnJ9CU0L7RidC40LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjMHBXakdvZ0RhRVlDUkNza3pjcTlWZFVsSHktaHNoRy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2FcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LXRgNC60YPQu9C+0LLQsCDQnNCw0YDRltGPLCAxMCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCULtCn0ZbQvNCw0YDQvtC30LAu0KHQvtC90LDRgtCwINGB0L7Qu9GMINC80LDQttC+0YA7IDIpINCcLiDQltC10YDQsdGW0L0uINCS0LDQu9GM0YFcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xajVwRUQ3d1EzQUhQMHBOeDlWTzRQcDhkcmlsOWFNemYvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC40LPQsNC70Y7QuiDQoNGW0LDQvdC90LAsIDExINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnLCAgIDIp0JIu0JPRltC70LvQvtC6Licn0JrQsNGA0L3QsNCy0LDQuyDQsiDQoNGW0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwNVNNT2VCYVV6MGp6WDhBMGw2WDROOXl2dHdHMHc4bS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2NcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LjRgNCz0L7RgNC+0LQg0JLRgdC10LLQvtC70L7QtCwxMiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QmtGD0LvQsNGDLiDQodC+0L3QsNGC0LjQvdCwINGE0LAg0LzQsNC20L7RgCzQhiDRhy47IDIp0Jwu0JvQuNGB0LXQvdC60L4uICcn0JXQu9C10LPRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa3B4c3VSSm5sM3Q2NGxiTzh2aVZnZkdzd19hTWtSU20vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC+0YDQvtC30L7QstCwINCi0LXRgtGP0L3QsCwgMTEg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmS7QkdC10L3QtNCwLtCh0L7QvdCw0YLQuNC90LAsIDIpINChLtCo0LXQstGH0LXQvdC60L4uJyfQktC10YfRltGAJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNXU0b0s0dUl2OTIzQmJod0h1UXhjMmtiMnpXNERJbUcvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNGD0L3RgtGP0L0g0J3QsNGC0LDQu9GW0Y8sIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQtdC80LAg0Lcg0LLQsNGA0ZbQsNGG0ZbRj9C80LgsICAgICAgIDIp0Jsu0KjQuNGC0YLQtS4nJ9CG0YHQutGA0LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWak5IY1dXZ3RtYmFrVVhtcGMzaDdmaG9ONWdwczlSVi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2ZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCe0LHQvtGA0LrRltC90LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDExINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCVLtCT0YDRltCzLicn0JzQtdC70L7QtNGW0Y8nJywgICAgMinQmy7QqNGD0LrQsNC50LvQvi4gJyfQkdCw0LPQsNGC0LXQu9GMJycg4oSWNVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjaDJ3dnp4dFI3RVIyLTZpRExVZ3ZDQXF1VWl2OGRWZi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0LXQvdC00Y7RgCDQodC+0YTRltGPLCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J4u0JTQsNGA0LPQvtC80LjQttGB0YzQutC40LkuJyfQktCw0LvRjNGBJycsIDIp0Jwu0KHQutC+0YDQuNC6Licn0J3QsNGA0L7QtNC90LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFzREc2d25ncEtIY01TT2FPaV9ZbFVHa3VjYWRCQXBCSi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0LXRgNC10YLRj9GC0YzQutC+INCQ0L3QsNGB0YLQsNGB0ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS7Qk9GA0ZbQsy4gJyfQotCw0L3QtdGG0Ywg0ZbQtyDQmdC+0LvRjNGB0YLQtdGA0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwX0xndi1mTE9kM3lQQW1ObVdDZDhZTjNsU3dYSExLRy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0LXRgNC10YLRj9GC0YzQutC+INCQ0L3QsNGB0YLQsNGB0ZbRjywgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCcLtCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAg4oSWNCwg0YLQsi4zNlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEzd3NJLXNzVFB4OWVhMHFaSEZZc3ZzUDJudVBiU0RKNy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0L7Qt9C90Y/QuiDQktC10L3RltCw0LzRltC9LCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JQu0J/Rg9C70LXQvdC6LiDQodGC0LDQutC60LDRgtC+LiAyKSDQmy7QkdC10YLRhdC+0LLQtdC9LiDQktC10YHQtdC70LAt0YHRg9C80L3QsFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF2c2JjMkd2SFlBcmdnUDU3LVo1d0ZsR3djaE1wTnAzRS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0YDQvtC60L7Qv9GO0Log0JzQsNGA0LjQvdCwLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0IYu0JHRltC70LDRh9C10L3QutC+LiDQldC60YHQv9GA0L7QvNGCLiAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiDQotCw0L3QtdGG0YxcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUW45RFFMMk5ISmVPZkdIREhZd2F1WjYydmlucmZsQXkvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQoNC10YjQtdGC0L3RltC60L7QstCwINCb0Y7QtNC80LjQu9CwLCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0J4u0JHRltC70LDRh9C10L3QutC+Licn0J7RgdGW0L3QvdGW0Lkg0LXRgdC60ZbQtycnLCAyKdCeLtCf0L7Qu9GM0L7QstC40LkuJyfQn9C+0LvRjNC60LAt0LHQsNCx0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV9YZkNLOEZLMUZMbXhia0VCOFZUZGZhOTkwcUo3eFJBL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4NlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDQvtGC0LDRgCDQmtCw0YDRltC90LAsIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0JHQsNGA0LrQsNGA0L7Qu9CwJycsIDIpINCULtCf0LXRiNC10YLRgtGWLiAnJ9Cf0YDQtdGB0YLQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTdNRi0wejZ1QWttS1dscFl5U1dHSDhzYk9pWi0tbjlKL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4N1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQsNCy0YfQtdC90LrQviDQnNCw0YLQstGW0LksIDEx0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQsCDQvNGWINCx0LXQvNC+0LvRjCDQvNCw0LbQvtGALCDQhiDRhy4sIDIp0IYu0KnQtdGA0LHQsNC60L7Qsi4gJycg0JXQu9C10LPRltGPINC60LjRl9Cy0YHRjNC60LjRhSDQv9Cw0LPQvtGA0LHRltCyJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSl9IUWs2SVMyUFpQWlVQOXVZT1A2d2tRdFIzb3BvNkIvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCw0LrQstCwINCS0LDQu9C10YDRltGPLCAxMSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JvQsNC90YHQtdCy0LjRhy4nJ9Cf0YDQtdC70Y7QtNGW0Y8nJywgMinQnC7QlNCy0L7RgNC20LDQui4gJyfQlNC20LDQt9C+0LLQuNC5INC10YLRjtC0Jycg0LvRjyDQvNCw0LbQvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTF0c2RMdmsyNWJEOEZTRFlUWFhueXBSMjlna1B0eFhzL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4OVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQsNGA0YLQsNC90ZbRjyDQlNCw0LLQuNC0LCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JUu0JLQsNCz0L3QtdGALtCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCAgIDIpINCgLtCS0LDQvdC00LDQu9C7Licn0JLQvtC00L7RgdC/0LDQtCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW1yRVNZWklpUDFpV2VuR2laRFVJT2IwdXNDSkswZFQ4L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4YVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQutC+0YDQvtGF0L7QtNGM0LrQviDQhNCy0LPQtdC90ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiAnJ9CG0LLQsNGB0Ywg0LPRgNCw0ZQg0L3QsCDRh9C10LvRjNC+JycsIDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0KLQvtC60LDRgtCwJycg0YHRliDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVpZjBaX01pQVFWcHpiY3pWU2pqYnZoMWdVeGVfRTNYL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4YlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQvtC70L7QvdC10L3QutC+INCQ0L3QvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCSLtCa0L7RgdC10L3QutC+LiAnJ9Cf0LXRgtGA0YPRiNC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0Q3hwNFViWkZaZUZNcnc2RFlOaTlWWUhZU3ZZd05RSS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0L7Qu9C+0L3QtdC90LrQviDQkNC90L3QsCwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQpC4g0JHRg9GA0LPQvNGO0LvQu9C10YAuICcn0JHQsNC70LDQtNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRU9INnpod293NGFRWmZKZXMyOEx4aUlCc2g1SGJmR3UvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzhkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC+0YDQvtC60LAg0JzQsNGA0ZbRjywgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JQu0KbQuNC/0L7Qu9GWLiDQn9GA0LXQu9GO0LTRltGPINGC0LAg0YTRg9Cz0LAg0YDQtSDQvNGW0L3QvtGALCAyKdCaLtCT0YPRgNC70ZbRgi4gJyfQqNGC0L7RgNC8JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdGZwX2dCUloxZmxqLUxHcWRlNkVkeFFtS1RsZXAwalAvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzhlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodGC0LXRhtGO0Log0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDEyINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QlNC10LHRjtGB0YHRli4gJydEb2N0b3IgR3JhZHVzIGFkIFBhcm5hc3VtJycsIDIp0KQu0KjQvtC/0LXQvS4gJyfQktCw0LvRjNGBJycg4oSWOVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6eEpXeUNtczdrWmhzcE5CQWx6YWNVbkFMVzhFSkFNNy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0YLQvtGA0L7QttGD0Log0KHRgtCw0L3RltGB0LvQsNCyLCAxMiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlS7Qk9GA0ZbQsy4gJyfQn9C+0LXRgtC40YfQvdCwINC60LDRgNGC0LjQvdC60LAnJyDihJYxLCAyKdCQLtCa0L7RgS3QkNC90LDRgtC+0LvRjNGB0YzQutC40LkuICcn0J/QvtC70L7QvdC40L3QsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJ0SzB2VXJBb0lsR2JVSjVIYVVHYlFQbDF6Vm1US0tKL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5MFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQutCw0YfQtdC90LrQviDQnNCw0LnRjywgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIuINCQLiDQnNC+0YbQsNGA0YIuINCh0L7QvdCw0YLQsCAxNiDQmiA1NDUs0IbRhy47IDIp0IYu0KjQsNC80L4uJycg0JLQtdGB0L3Rj9C90LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW02WnNWYXJOUHJjZnltTzNCa3VtZEt4TEp5QlR4eDUtL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5MVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KPQvdCz0YPRgNGP0L0g0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDEyINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J4u0JPRgNC40LHQvtGU0LTQvtCyLiDQktCw0LvRjNGBLCAgICAgICAgICAyKdCcLtCh0ZbQu9GM0LLQsNC90YHRjNC60LjQuS4gJyfQodGC0YDRltC80LrQuNC5INC/0L7RgtGW0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF2MkxSVkRoRkoyelhOXzV3VnhBY2g3WDhsMFdROHJPZy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0YDRh9C10L3QutC+INCE0LLQs9C10L3RltGPLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCbLtCR0LXRgtGF0L7QstC10L0uICcn0JHQsNCz0LDRgtC10LvRjCcnLCDRgtCyLjExOVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFaUEhHUURBeWZ0b0FXMGFLT1Qyc25mYThNamdhbGNaUS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0YDRh9C10L3QutC+INCE0LLQs9C10L3RltGPLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0JHRltC70LDRiC4nJ9Ch0LrQtdGA0YbQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWgxaXNHd3ZlVzF1aVczVTJ4ZU8yV1d1Rnh2U1N2US1ML3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5NFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KTQtdC00L7RgtC+0LLQsCDQmtCw0YLQtdGA0LjQvdCwLCAxMiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEpINChLiDQkdC+0YDRgtC60LXQstC40YcuJyfQldGC0Y7QtCcnINGE0LAg0LTRltGU0Lcg0LzRltC90L7RgCwgMikg0KQu0KjQvtC/0LXQvS4gJyfQndC+0LrRgtGO0YDQvScn0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWVRQlh5NmtoTGNpNGZKTkc4QmFDTTFaRkxrS2owTlJ3L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5NVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KTQtdC00YfRg9C6INCQ0LvRltC90LAsIDExINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLiDQlNGW0LDQsdC10LvQu9GWLiDQodC+0L3QsNGC0LjQvdCwIOKEljEsINCG0IbQhi7RhzsgMinQlNC2LiDQm9Cw0YHRgi4nJyDQodCw0LzQvtGC0L3RltC5INC/0LDRgdGC0YPRhScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWpyRmJ2ZGdHMk5sVS1iNDE2LXVSMGJpckRyVy1QbklIL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5NlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KTQtdC00Y7QuiDQktC+0LvQvtC00LjQvNC40YAsIDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmi7QnC7QktC10LHQtdGALtCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGAOyAyKdCeLtCT0L7QvdGH0LDRgNGD0LouICcn0JfQtdC70LXQvdC40LknJyDRltC3INC30LHRltGA0LrQuCAnJ9CS0LXRgdC10LvQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSF9Jdzg5eGpmMW8yN1B0UF9uZVFJNzhCeVA2NXlFdlkvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzk3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpdC+0YMg0JbRg9C5LCAxMiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQny7Qhi7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9CW0L7QstGC0LXQvdGMJycsIDIp0JUu0JLQtdCy0YDQuNC6LiAnJ9CT0LDQvdC00LfRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVhad1dYdDZoUUFTdVlmdFNOcjVzVFBFcnN0RlVWNThSL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5OFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KfQuNC2INCd0ZbQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JPQsNC50LTQvSDQodC+0L3QsNGC0LAg4oSWNCwg0IbRhzsgMinQmy7QlNGM0Y/QutC+0L3QtdC90LrQvi4gJyfQn9GA0L7QsdCw0YfQtdC90L3RjyDRgyDQvNCw0LzQuCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFJVXIwaC1ONTI5MEI2S2FJbVhrSkhtU0Rpa19VYXdlL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5OVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KfRltC00LXRgNCwINCh0LDQvNGD0LXQu9GMINCj0LzQtdGFLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkgINCfLtCn0LDQudC60L7QstGB0YzQutC40LkuICcn0KHRgtCw0YDQvtCy0LjQvdC90LAg0YTRgNCw0L3RhtGD0LfRjNC60LAg0L/RltGB0LXQvdGM0LrQsCcnLiAyKSDQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuJyfQmtC70L7Rg9C90LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwTFlBbVJCWHd6SW4xeDNYSGh2THJlX0FOWkpUMnA4dy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOWFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCo0LDRgtCw0LvQvtCy0LAg0IbQu9C+0L3QsCwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQuINCT0ZbQu9C70LXRgC4gJyfQnNCw0LvQtdC90YzQutC1INGA0L7QvdC00L4nJzsgMinQki4g0JrQvtGB0LXQvdC60L4uICcn0JLQsNC70YzRgScnINGB0ZYg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFVZzU2Y2JZMUNVQmhPMS10WmZ1Y1JBdUFIYklGS3o5Yy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOWJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCo0LXQstGH0LXQvdC60L4g0JzQsNGA0LPQsNGA0LjRgtCwLCAxMCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQsNC70LDQvdC00ZbQvS4g0JLQsNGA0ZbQsNGG0ZbRlywgICAgICAgICAgMinQoi7QkdGA0LDRg9C9LiAnJ9Ci0LDQvdC10YbRjCDQstGW0YLRgNGDJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcGtCQnFmUy1wbUZ4YjVuTmRBY2g5V1hVcEdxc1V4YTgvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzljXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQqNC10L/QtdGC0YzQutC+INCe0LvQtdC60YHQsNC90LTRgCwgMTEg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQpC7QqNC+0L/QtdC9LiDQnNCw0LfRg9GA0LrQsCzRgtCyLjY3IOKEliA0LCAyKdCVLtCT0YDRltCzLiAnJ9Ci0LDQvdC10YbRjCDRltC3INCZ0L7Qu9GM0YHRgtC10YDQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZiaFZqV3JVaXRUby0tODNJNUZXTnlkUXJQQzNZR3lSL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5ZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KjRg9C80YHRjNC60LAg0J3QsNC00ZbRjywgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLicn0KLQtdC80L3QsCDQutGW0LzQvdCw0YLQsCcnLCAyKdCSLtCd0LXRg9Cz0LDRgdGW0LzQvtCyLtCh0LrQtdGA0YbQvlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrNjYtV3J5NjNTOHg3dDQ4R1dValkwZTZPMXhxZVVvdC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzOWVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCQ0YDRg9GC0Y7QvdGP0L0g0JvRltC00LAsIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg4oSWMjAsINCG0YcuOyAyKdCbLtCo0YPQutCw0LnQu9C+Licn0ITQvNC10LvRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUJqNTY4Y25SZERaTUtyTVlmTFQ4a0NiSG00eWZYYjJrL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTM5ZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JHQsNC30LjQu9GO0Log0J3QsNGC0LDQu9GW0Y8sIDE2INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQry7QodGW0LHQtdC70ZbRg9GBLiDQn9GA0LXQu9GO0LTRltGPINC70Y8g0LzRltC90L7RgCwyKdCGLtCR0LXRgNC60L7QstC40Ycu0J/RgNC10LvRjtC00ZbRjyDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR2FXZVpiS2M2U2lJdWRpWVFWQmdGeGFpT085U0Vza0EvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2EwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkdGW0LvQvtCz0YPQsSDQkNC90YLQvtC9LCAxMyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCbLtCR0LXRgtGF0L7QstC10L0uINCb0LXQs9C60LAg0YHQvtC90LDRgtCwINGE0LAg0LzRltC90L7RgCwg0IYg0YcuXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWZIVW10TVdPakdOOXA1eGFTcmNJT3ZRRXUta29UR2FUL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JHRltC70L7Qs9GD0LEg0JDQvdGC0L7QvSwgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQni7QodGC0YDQvtC6LiAnJ9Cc0ZbRgdGP0YfQvdCwINGA0LDQv9GB0L7QtNGW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmcW5OT0Z2Tm5WVWNJMUxVWi1UcWdGekNsNVhGRV9zaS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCR0ZbRgNGD0Log0KLQsNC80ZbQu9CwLCAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLtCh0L7QvdCw0YLQuNC90LAsINGC0LIuMjbihJYzLCAyKdCvLtCh0ZbQsdC10LvRltGD0YEuICcn0K/Qu9C40L3QsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTRfQjI2TFB5elFqa19hQlp4R0ZXSXE4Uno2S1JDQm5YL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhM1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JHQvtGA0L7QstGW0LrQvtCy0LAg0ITQu9C40LfQsNCy0LXRgtCwLCAxNSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Jwu0JHQvtCx0LXRgC4gJyfQlNGW0LDQvNCw0L3RgtC+0LLQsCDRgNCw0L/RgdC+0LTRltGPJycsIDIp0KQu0KHQsNC5LiAnJ9Cn0L7RgNC90LAg0LfQtdC80LvRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXBPMUZHcUItSzZ0dGg4cFBSTUJDYWxfcnNjZVNNeDIwL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhNFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JHRg9GA0YPRhdGW0L3QsCDQmtCw0YLQtdGA0LjQvdCwLCAxMyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jku0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINC80ZYg0LzRltC90L7RgCwg0IbRhy4sIDIpINChLtCd0ZbQutGW0YLRltC9Licn0J3QsNGB0L/RltCyJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcnBMSDYzU3pOVEhlTXlYSGs3ckNoZXN3U2NLdTlfY0gvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktCw0YjRg9GA0ZbQvdCwINCSLiwgMTMg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQki7QmtC+0YHQtdC90LrQvi4gJyfQn9C+0LXQvNCwLdCb0LXQs9C10L3QtNCwJycsIDIpINCeLtCh0LDRgNCw0YLRgdGM0LrQuNC5Licn0JrQvtC70L7QvNC40LnQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeTlrdXNndHFYZ0lnZkZjMTZsXzVxdmdGX0p5NjJ2WDcvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktC40YjQvdC10LLRgdGM0LrQsCDQkNC90L3QsCwgMTMg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQli4g0JHRltC30LUuJyfQlNC30LjQs9CwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWU4tMnlwMW9jUlZFMVJkWHEyTDdzajlxX0E4eXY1UE8vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktC40YjQvdC10LLRgdGM0LrQsCDQkNC90L3QsCwgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQm9Cw0LLQsNC70LvQtS4gJyfQnNC10YLQtdC70LjQuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTYxdEZxVEZKb2phMk9WRHZIS1R0SVdQak5RLTJMZngxL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQtdGA0LDRgdC40LzRh9GD0Log0JzRltC70ZTQvdCwLCAxNSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCcLtCi0LDRgNCw0LLQtdGA0LTRltGU0LIuICcn0KHQv9C+0LPQsNC0JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQW8wd094NTBVY0tMYVg4Z3BFM1c5dDY1REM2S3Bock0vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9C10YDQsNGB0LjQvNGH0YPQuiDQnNGW0LvRlNC90LAsIDE1INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0J4u0JHRltC70LDRiC4nJ9Ci0LDQvdC10YbRjCDQu9GP0LvRjNC+0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4bmJmakJtemNsTjQtdGw2dDlFR0RtM3lqTEdqd3BSNS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0L7RgNC00ZbRlNC90LrQviDQhNC70LjQt9Cw0LLQtdGC0LAsIDE5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS7Qn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINGA0LUg0LzRltC90L7RgCwg0JTQotCaLdCGLCAyKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjyDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb3hCZTZOM2FsdEZwM1VrdEY1RmRHWUZyZFh5SERIV2YvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9GA0LXRidCw0Log0JzQsNGA0ZbRjywgMTQg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0KfQtdGA0L3Rli4g0JXRgtGO0LQg0LvRjyDQvNCw0LbQvtGAOyAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5Licn0JXQu9C10LPRltGH0L3QuNC5INC/0YDQtdC70Y7QtCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUl3dUxyZFBha3hIMWY2WlBmbXc3ZDd2R2NoS2pvVTZtL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JTQtdC50L3QtdCz0LAg0JrQsNGA0ZbQvdCwLCAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtCwIOKEljE0LCDQhiDRhy47IDIpINChLtCW0LTQsNC90L7Qsi4gJyfQn9GA0LXQu9GO0LQnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjNWlXQzliNUozVHczT1dUREtTd005NUNGVEZCbHk0dC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0Y/Rh9GD0Log0JfQvtGA0Y/QvdCwLCAxMyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0KDQsNC90L7QuicnLCAyKdCdLtCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNzVnJJRlJmaXRMdnpNMzctVVduZkdOY3NqMDdPdV8yL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0IbRidGD0Log0JrQsNGC0LXRgNC40L3QsCwgMTUg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmi7Qp9C10YDQvdGWLiDQldGC0Y7QtCDihJYxLNGC0LIuNzQwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5zY3FTNWUxcFV3dGRJT1NPSWVYQVZIUkdqRnVfM01uL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0IbRidGD0Log0JrQsNGC0LXRgNC40L3QsCwgMTUg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCkLtCo0L7Qv9C10L0uJyfQm9Cw0YDQs9C+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRW9LZVNyN0JJZUx3MEtzakN0cDFERURKXzhYZ2d4bnEvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2IwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC+0YfQutC+INCQ0L3RgtC+0L3RltC90LAsIDEzINGA0L7QutGW0LIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Jku0KEu0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINC00L4g0LTRltGU0Lcg0LzRltC90L7RgCDQlNCi0Jot0IYsIDIpINCaLtCn0LXRgNC90ZYuINCV0YLRjtC0IOKEljYg0YLQsi43NDBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdVRxT1JKSXhJNjV1S3E0LTJScU9YblZ1WGpvUVBLa1MvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2IxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtCw0YDQtdC70ZbQvdCwINCa0YDRltGB0YLRltC90LAsIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLtCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0YDQtSDQvNGW0L3QvtGALCDQlNCi0Jot0IbQhlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGbWhXMk9sOXRsLWZWN1JPYXR6M21FbmIxQzBWd0FieC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0LDRgNC10LvRltC90LAg0JrRgNGW0YHRgtGW0L3QsCwgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QkC4g0JzQvtGG0LDRgNGCLiDQodC+0L3QsNGC0LAg4oSWOCwg0IbRhy5cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xakZ0MHprbkdhOHZ2WHhEUktRbzV4MVlkemNyLUl4SFIvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2IzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtCw0YHRjNC60ZbQsiDQkNC90LTRgNGW0LksIDE0INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAu0JvQtdGI0LPQvtGA0L0uINCV0YLRjtC0INGE0LAg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0dUtaVUc3bDFSRXdEa1hrdlI2ZllCalFpVFBaQzNrby9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0LDRgdGM0LrRltCyINCQ0L3QtNGA0ZbQuSwgMTQg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmi7QlNC10LHRjtGB0YHRli4gJyfQnNGW0YHRj9GH0L3QtSDRgdGP0LnQstC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU1BOTEk4VnZGaEt6cFJ3TjktaUJSdVRkZFBmSnVVZS0vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2I1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC40YDQuNC70L7QstCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxMyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCiLtCR0YDQsNGD0L0uICcn0KjRgtC+0YDQvCwg0YnQviDQvdCw0LHQu9C40LbQsNGU0YLRjNGB0Y8nJywgMikg0J8u0JfQsNGF0LDRgNC+0LIuICcn0KDQvtC90LTQvi3Qs9Cw0LvQvtC/JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xV0hqLS1oYVluRTdwV3RmSEJveXBYbmhtN2kwaW5zdkcvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2I2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0L3QtNGA0LDRgtGO0Log0JDQu9GW0L3QsCwgMTQg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCeLtCU0Y7QsdGO0LouINCS0LDRgNGW0LDRhtGW0ZcsIDIpINCeLtCR0ZbQu9Cw0YguJyfQoNC+0LfQtNGD0LwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFSd2ZTUXRUZndXcExEell5R2ZtRnlPS2R5X1NySzdTWi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7RgdC10L3QutC+INCQ0LvRltGB0LAsIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQkC7QmtCw0YDQsNC80LDQvdC+0LIuICcn0JfRgNGD0LnQvdC+0LLQsNC90LjQuSDRhdGA0LDQvCcnLCAyKdChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiDQn9GA0LXQu9GO0LTRltGPIOKEljcsINGC0LIuMjNcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLTZrWXJ0UXVIWk5rNUNoQWFXTHY3SVJaemsyMldkZGgvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2I4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0YfRg9Cx0LXQuSDQr9GA0L7RgdC70LDQsiwgMTQg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCe0LHRgC4g0IQu0JLQtdCy0YDQuNC60LAuJyfQnNC+0LvQtNCw0LLRgdGM0LrRliDQvdCw0YHQv9GW0LLQuCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlLaktIZkktdWlqNmozbU5DWVoyNkxMWk1vQmJZazlyL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGH0YPQsdC10Lkg0K/RgNC+0YHQu9Cw0LIsIDE0INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQu0JrRg9C70LDRgy4g0KHQvtC90LDRgtC40L3QsCDihJY1NVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFSN0h3WHBMYk8xdGl6M0t6TWczNXQ0TjNCbXg3QUJPTC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0YPQu9GW0LrQvtCy0YHRjNC60LAg0JrQsNGC0LXRgNC40L3QsCwgMTQg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDRhNCwINC00ZbRlNC3INC80LDQttC+0YAsINCU0KLQmi3QhiwgMikg0KEu0JHQvtGA0YLQutC10LLQuNGHLiDQldGC0Y7QtCDihJY5LCDRgtCyLjE1XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpRanNxR3BXcVdZa2VqUFlOX1RHLUUwbU1BOGNTai1yL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNC60LDRgNC10LLQuNGHINCd0LDRgtCw0LvRltGPLCAxNSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINGA0LUg0LzRltC90L7RgCwg0JTQotCaLdCGLCAyKdCeLtCR0L7RgNC00Y7Qs9C+0LLQsC4gJyfQo9C60YDQsNGX0L3RgdGM0LrQuNC5INGA0L7QvNCw0L3RgScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlyVkJWUzBXRHVmV1pDMllFQjU3dVVNTFdidzhCTG5SL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNC70Y/RgNGH0YPQuiDQhNC70ZbQt9Cw0LLQtdGC0LAsIDEzINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QkdC+0YDRgtC60LXQstC40YcuINCV0YLRjtC0IOKEljksINGC0LIuMTUsIDIp0KQu0KjQvtC/0LXQvS4nJ9CT0YPQu9GP0L3QutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb20waGZWZ3JhLVZTeDZZWGhKYnBad0xSYmUwYThCRS0vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2JkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQntC/0LDQvdCw0YHRjtC6INCi0LDRgNCw0YEsIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQny7Ql9Cw0YXQsNGA0L7Qsi4gJyfQotC+0LrQsNGC0LAt0L/RgNC10LvRjtC00ZbRjycnLCAyKSDQlS7Qk9GA0ZbQsy4gJyfQndC+0LrRgtGO0YDQvScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWdnaHd5SDJBeC1BZVZ1ZWxiU1dzUzBvSW9BeFNfdUpEL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J7RgdC70LDQvCAg0ITQu9C40LfQsNCy0LXRgtCwLCAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJ9Cb0Y7RgtC40LknJyDRltC3INGG0LjQutC70YMnJ9Cf0L7RgNC4INGA0L7QutGDJycsICAgICAyKSDQnS7Qm9Cw0LPQvtC00Y7Qsy4gJyfQotCw0L3Qs9C+INC80YDRltC5JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbXE0LVpCWVptbG5HUHpKWTFqUl9RVnIwR3o3NWFNbFgvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2JmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9Cw0L3RltC80LDRiCDQhtGA0LjQvdCwLCAxNSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jku0JPQsNC50LTQvS7QodC+0L3QsNGC0LAg0LTQviDQvNCw0LbQvtGAICjihJY1MCksINCGINGHLjsgMikg0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuJyfQnNGD0LfQuNGH0L3QuNC5INC80L7QvNC10L3RgicnLCDRgtCyLjE2IOKEljRcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaF9LUV9XcHZtalpGc1hFNFhUX01kZjIzc2s0SzlHVHMvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2MwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9C10YLRgNGD0YHRjCDQndCw0YLQsNC70ZbRjywgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0JvRltGB0YIuJyfQoNC+0LzQsNC90YEnJywgICAgIDIp0JUu0JPRltC70LvQvtC6Licn0JLQsNC70YzRgS3QtdGC0Y7QtCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU8xNV9DdWp3dHRhRjFCeFhnVzg0NHc2QUJVUWt1amZiL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/RgNC40YnQtdC/0LAg0JDQvdC90LAsIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC7QqNC80ZbRgtGGLiDQlNC20LDQt9C+0LLQsCDRltC90LLQtdC90YbRltGPIOKEljEzLCAgMikg0J4u0JTQtdCy0ZbRgS4nJ9Cp0LDRgdC70LjQstC40Lkg0LTQtdC90YwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFKS01JbHVuM1JlaEVScUthU0hwbDZTSjZleXV1cTNhVy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0YDQvtC60L7Qv9GH0YPQuiDQntC70LXQutGB0LDQvdC00YDQsCwgMTcg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QktC10YDQvNC10L3QuNGHLiAnJ9Cn0L7RgNC90L7QsdGA0LjQstGG0ZYnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGTkw3ZTZxaDhTT0tsVXhNb1J0QTdyU1k4TmhhbmxYLS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0YDQvtC60L7Qv9GH0YPQuiDQntC70LXQutGB0LDQvdC00YDQsCwgMTcg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQpC7QqNC/0LjQvdC00LvQtdGALiDQodC+0L3QsNGC0LjQvdCwLNCG0IbQhiDRhy5cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xS0dNQ2NONl9CV1BkaXd6clJJdUEzTmR4VWVKYndJMWovcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9GD0YfQutC+INCh0L7RhNGW0Y8sIDEz0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLiDQlNCy0L7RgNC20LDQui4g0JXRgtGO0LQgMiAoMi3QuSDQt9C+0YjQuNGCKSwgMinQki4g0JLQtdGA0LzQtdC90LjRhy4gJyfQp9C+0YDQvdC+0LHRgNC40LLRhtGWJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNFdmc0Z2NEFuMkZiVl91RmpocVJFSTg3LUlmelFVYjgvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQoNCw0LTQutC+0LLRgdGM0LrQsCDQkNC70ZbQvdCwLCAxMyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQk9GA0ZbQsy4g0JXRgtGO0LQg0L/QsNC8J9GP0YLRliDQpC7QqNC+0L/QtdC90LBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX2FCTjhKZ3JtRm1WZnVWWVc0czBsZU5OWXhmUDU5U28vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQoNCw0LTQutC+0LLRgdGM0LrQsCDQkNC70ZbQvdCwLCAxMyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCkLtCb0ZbRgdGCLiAnJ9Ch0YPQvNC90LjQuSDRgdGC0LXQvycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW4ybVNhUE53clZqbGNQQW9oVmlZcm8yNFd6aWt0QjBqL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDQuNCx0LrRltC90LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDE1INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC4g0KLQtdGA0LXRidGD0LouICcn0KTRg9Cz0LAgTG9ja2Rvd24nJzsgMinQnC7QkdC+0LHQtdGALicn0J7Qv9GW0LLQvdGW0YfQvdCwINGA0LDQv9GB0L7QtNGW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFzUFZFQjJWSXRfb0RaTTBwbUJVUTVqVW9VQk5pdlR3ZS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0YPRgdGB0YMg0JPQsNC90L3QsCwgMTQg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JMu0JLQvtC70LvQtdC90LPQsNGD0L/Rgi4gJyfQpdCw0YDQsNC60YLQtdGA0L3QsCDQvyfRlNGB0LAg0YMg0YTQvtGA0LzRliDQtdGC0Y7QtNCwJycsIDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0JXQu9C10LPRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYUVlRmlVWF9BdlJjUk1HLTRoQkEzaThjNDVFc1pIOW0vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQoNGD0YnQuNC90YHRjNC60LAg0JrRgdC10L3RltGPLCAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0JPRgNGW0LMuICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwNzJKTnd2RW02Q2R1QV9HZVBzQUJ1NV9ZazZNMDJ6SC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2FcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0YPRidC40L3RgdGM0LrQsCDQmtGB0LXQvdGW0Y8sIDE0INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEuINCR0LDRhS4nJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINC00L4g0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFORGtfaktPNVNIYm5zYVhBVEExLVl3Z0tlNGJBbUlkbi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2JcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LLQuNC90YbQuNGG0YzQutCwINCV0LzRltC70ZbRjywgMTQg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQstCw0YHQvdC10LLRgdGM0LrQuNC5Licn0JTRg9C80LrQsCcnOyAyKdCULtCa0YDQsNC80LXRgC4gJyfQotCw0L3RhtGO0Y7Rh9C40Lkg0YHQutGA0LjQv9Cw0LvRjCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFsZ3pfb3VrUnhUMmtQQUZ5WG9YLVFqSUEzNHBJQ2NtL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQstC40YDQuNC00Y7QuiDQlNC10L3QuNGBLCAxNiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g4oSWMTIsIDIp0JMu0JPQsNC70LjQvdGW0L0uICcn0JDRgNGW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0NkdGZ0hhWEwzeEhWRlp3LWhySHJ4azQ5Nzdsck5naC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2RcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LXQu9GW0LLQsNC90L7QstCwINCQ0L3QvdCwLCAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQldC70LXQs9GW0YfQvdC40Lkg0L/RgNC10LvRjtC0Jycg0YHRliDQvNGW0L3QvtGALCAyKdCcLtCU0LLQvtGA0LbQsNC6Licn0JTQttCw0LfQvtCy0LjQuSDQtdGC0Y7QtCcnIOKEljYgKDIg0LfQvtGI0LjRgilcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSnVjTnRPMUQ5M2txTDh3b0pia19CSmlEamRnR3hzUTYvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC10LzQtdC90L7QsiDQhtCy0LDQvSwgMTUg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS7QlNC+0LPQsC4gJyfQodC+0L3QtdGCJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTDBVX0hvdUtSUDR5M2dQWmJWTGt6dW15WUQyZXpFMkQvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC10LzQtdC90L7QsiDQhtCy0LDQvSwgMTUg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QnNC+0Yhl0Ltl0YEuIEXRgtGO0LQg4oSWOCzRgtCyLjcwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV9md1kzcmtwY0lsV2pjMVJ5X1l0aWh1LW93V3AybWdrL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQuNC80L7QvdC10L3QutC+INCi0LDQvNGW0LvQsCwgMTMg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy7QkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LAg4oSWMTkg0YLQsi40OSwg0IYg0YfQsNGB0YLQuNC90LAsIDIp0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuSAuJyfQn9GW0LTRgdC90ZbQttC90LjQuicnINC3INGG0LjQutC70YMgJyfQn9C+0YDQuCDRgNC+0LrRgycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBtRWpnT1YyWVlaaVJJVUJwVERJSGp1ci1selJfZmx2L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQvdGW0LPRg9GAINCQ0L3QvdCwLCAxMyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkdCl0LDQstCw0YjRli4gJyfQqNGC0L7RgNC8JycsIDIp0KQu0KHQsNC5LiDQktCw0YDRltCw0YbRltGXXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWhtX3hESE9aVHpVQ1M0VVpJc283TUhaM2lia3ZBSWJiL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQtdGA0L3QvtCy0LAg0JrRgdC10L3RltGPLCAxNCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCGLtCR0LXRgNC60L7QstC40YcuINCf0YDQtdC70Y7QtNGW0Y8g4oSWMTAsIDIp0JUu0JPRgNGW0LMuICcn0J/QvtGF0ZbQtCDQs9C90L7QvNGW0LInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqSm9ZOGtkemVVS2w1elU1Z0xlNWR1OGxoR2FsQklZQi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0LrQsNGH0YPQuiDQktGW0LrRgtC+0YDRltGPLCAgMTQg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCkLiDQnNC10L3QtNC10LvRjNGB0L7QvS4gICcn0J/RltGB0L3RjyDQsdC10Lcg0YHQu9GW0LInJywgMikg0JIuINCT0ZbQu9C70L7QuiAgJyfQktCw0LvRjNGBLdC10YLRjtC0JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xS2k1Qy10YW5qeHkyTXk3a1o2a1dnWUVXTUFPRVlGYzkvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotGA0LDRh9GD0Log0J7Qu9C10LrRgdCw0L3QtNGALCAxMyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8uINCX0LDRhdCw0YDQvtCyLiAgJyfQoNC+0L3QtNC+LdCz0LDQu9C+0L8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE4RGxOMWI0SzFzWHJkdnZiM0E4cEhtSkZ2WHdiellyZC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0YDQsNGH0YPQuiDQntC70LXQutGB0LDQvdC00YAsIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JQu0KTRltC70YzQtC4gJyfQndC+0LrRgtGO0YDQvScnIOKEljVcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTDNKeG9XUHI2anhNNVEzcHhPMEJCWDJVNFVpRm5FX0gvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpNC10LTQvtC90Y7QuiDQntC70LXQutGB0LDQvdC00YAsIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDihJYyMywg0YTQsCDQvNCw0LbQvtGALCDQhtGHLjsgMinQmS7QoS7QkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg4oSWMjMsINCU0KLQmi3QhlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpMmZ1T1BWTXFRZklOQ1QyWkpiVEpYY2N6NUFmYl9oNS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCl0LLQvtGB0YLQvtCy0LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCb0ZbRgdGCLtCu0L3QsNGG0YzQutC40Lkg0LXRgtGO0LQg4oSWMiwgMinQni7QmtC+0LfQsNGA0LXQvdC60L4t0JAu0JrQvtGBLdCQ0L3QsNGC0L7Qu9GM0YHRjNC60LjQuS4gJyfQntC5INGC0LgsINC00ZbQstGH0LjQvdC+LCDQtyDQs9C+0YDRltGF0LAg0LfQtdGA0L3RjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUduc0Fac3VnZHFCTEw2aEtDR2xsZUE4WktfcVQxOEZqL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KXRgNCw0LzQtdC90LrQvtCy0LAg0JDQvdCw0YHRgtCw0YHRltGPLCAxMyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQvtGA0L7QstGW0YbQuNC9Licn0KDRg9GB0LDQu9C+0L3RjNC60LAnJywgMinQnC7QodC60L7RgNC40LouJyfQltCw0YDRgtGW0LLQu9C40LLQsCDQvyfRlNGB0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDMHVTcGVTeWJmZGFJWFlsbVl3TXJaNUpVc2RiN1JiOS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCl0LXQu9C80LDQvSDQktGW0L7Qu9C10YLQsCwgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KPQk9GW0LvQu9C+0LouJyfQn9GD0YDRhdCw0Y7Rh9C4INCyINGF0LzQsNGA0LrQsNGFJycsIDIp0JIu0KXQvtC00L7RiC4nJ9Cn0LXRgNCy0L7QvdCwINGI0LDQv9C+0YfQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xenV5RUd0M2N2WjNzVmpLbkEzQ0pUWlZMMnZFVmdYV3kvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2RhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQqNC40LHQsNC90L7QstCwINCS0LDRgNCy0LDRgNCwLCAxMyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9IOKEljIsINGC0LIuOVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyMWpVUkZLQzU1NXdLTVI3Q2xTeW10VEdfRFd3dmd2Wi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZGJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCo0LjQsdCw0L3QvtCy0LAg0JLQsNGA0LLQsNGA0LAsIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0KEu0JHQvtGA0YLQutC10LLQuNGHLtCV0YLRjtC0IOKEljcsINGC0LIuMjlcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xS1RVWVAzZ1duNFBUVEdHMVlfX0ZLckkxczVHa1hCb08vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2RjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkNC90YLQvtC90Y7QuiDQnNCw0YDRltGPLCAyMSDRgNGW0LpcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC7QnNC10YLQvdC10YAuICcn0JTQstGWINC60LDQt9C60LgnJywgMinQhi7QqNCw0LzQvi4gJyfQotC+0LrQsNGC0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUFGVkVHM00zZ1UxeUlhSWM1WW5jUmhVSUFsd2Y4QVZqL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2RkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkdC+0LHRgNGW0YjQvtCy0LAg0IbQvdC10YHQsCwgMTYg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKSDQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg0YDQtSDQvNCw0LbQvtGALCDQhiDRhy47ICAgMikg0KEu0J/RgNC+0LrQvtGEJ9GU0LIuICcn0KHQsNGA0LrQsNC30LwnJyzRgtCyLjE3IOKEljFcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5Skh1RVNRVkhNNmJwdXBQc3ZkVW40ZWxRUmJnTzIzZS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNkZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JHRj9C90L7QstCwINCU0LDRgNC40L3QsCwgMTYg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0sINGC0LIuMjfihJYyLCAgICAgIDIp0JQu0JfQsNC00L7RgC4g0JXRgtGO0LQg0LTQviDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLUNCY2VIRWJLZ2UzMlg2TkQxRl96RlZRLTJSYjQ0WXcvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZGZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0L7Qt9C90Y7QuiDQkNC90LPQtdC70ZbQvdCwLCAxNyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQry7QodGC0LXQv9C+0LLQuNC5LiDQn9GA0LXQu9GO0LTRltGPLCAgICAgICAyKdCvLtCh0ZbQsdC10LvRltGD0YEuINCV0YLRjtC0XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeTdRSHRHdWtKb29jUzBCX2Rpd3pKdS1WUVk4V0I5b3AvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0YPQuiDQodC+0YTRltGPLCAxNiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CT0YPQvNC+0YDQtdGB0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa1BRVF91VHhhSWxhbHF4X2FhcFNwaWQyU1pnUDdqcTYvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0YPQuiDQodC+0YTRltGPLCAxNiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCcLiDQm9C40YHQtdC90LrQvi4gJyfQltGD0YDQsdCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOdWhkbE9xWGVQcjhleGRNcDBnWFRBbDZGZmtna0R1Ti9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPRg9C70L7QstCwINCQ0L3Qs9C10LvRltC90LAsIDE4INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC4g0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0g0YLQsi40OCDihJYxLCAgICAgMinQny4g0KHQsNC90LrQsNC9LiDQotC+0LrQsNGC0LBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6bmg5UlUtcENwM3JIeHF5VnVQNDRENENrWW01OUdqTi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlM1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JTQsNC90L7QstGB0YzQutCwINCe0LvRjNCz0LAsIDE3INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCR0LDRgNCy0ZbQvdGB0YzQutC40Lkg0J/RgNC10LvRjtC00ZbRjyDihJY0ICcn0KXQvtGA0LDQuycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWUxkMkZQNUl4RG5lSWNPTVdnV1RnQ2Z1YkJPWUpRUHIvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0LDQvdC+0LLRgdGM0LrQsCDQntC70YzQs9CwLCAxNyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0JvRj9C00L7QsiDQn9GA0LXQu9GO0LTRltGPLCDRgtCyLjM5IOKEljRcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF3b2dWWnY4V1Z5UXRMRnNvcHdhUkJ4MVJRT3hsekNGSS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JTRg9C00L3QuNC6INCU0LDRgCfRjywgMTcg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QkdCw0YDQstGW0L3RgdGM0LrQuNC5Licn0JvQuNGB0YLQvtC6INC3INCw0LvRjNCx0L7QvNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsX0hFM3IwTzV1c2pPSGNOdU1wTkRZZ19nNmQyUzM1dC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlNlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JTRg9C00L3QuNC6INCU0LDRgCfRjywgMTcg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi7QlNC10LHRjtGB0YHRli4gJycg0KDQvtC80LDQvdGC0LjRh9C90LjQuSDQstCw0LvRjNGBJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFxTGdxOUFmRDZZWEN5UFF5RmVqbHlaOEJPTnVTb05fNC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrRgNGO0LrQvtCy0LAg0JzQsNGA0ZbRjywgMTUg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4gJyfQn9GA0LjQvNGF0Lgg0LzQvtGA0Y8nJywgMinQpC7QqNC+0L/QtdC9LtCV0YLRjtC0INGC0LIuMTAg4oSWNFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMS1jYm8zQloxRVBOWW02TlMxZUNNbV8ySFR6SEo3QmVrL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2U4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtGD0LvRltGIINCf0L7Qu9GW0L3QsCwgMTUg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCVLtCT0YDRltCzLicn0JrQvtC70LjRgdC60L7QstCwJycsIDIp0IYu0J/QsNC00LXRgNC10LLRgdGM0LrQuNC5Licn0KHQutC10YDRhtC40L3QvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTmFtVlZGZkFkUmZhRnVBMXVLamx0OVFJV2dNaVNCeTYvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0YPQt9C40YfQtdC90LrQviDQnNCw0YDRltGPLCAxOSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwIOKEljMxLCAx0YcuOyAyKdCkLtCo0L7Qv9C10L0u0JXRgtGO0LQs0YLQsi4xMCDihJY1XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTy1haGZZSk5iRmY1ZlNPd1NTcGZmSVdXcG5pQnViSzgvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCe0LvRltC50L3QuNC6INCe0LvQtdC60YHQsNC90LTRgCwgMTgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JYu0JHRltC30LUt0JIu0JPQvtGA0L7QstGW0YYuINCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRgtC10LzRgyDQtyDQvtC/0LXRgNC4ICcn0JrQsNGA0LzQtdC9JycsIDIp0Jsu0KDQtdCy0YPRhtGM0LrQuNC5LiDQn9GA0LXQu9GO0LTRltGPINGE0LAg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTNKeWxQZERXZ1Z6NlFTSFJHVkp0N0ZoZGFSZWxDSFNEL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ViXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC80LjQuiDQkNC90L3QsCwgMTcg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4g0JXRgtGO0LQt0LrQsNGA0YLQuNC90LAg0YLQsi4zMyDihJY1LCDRgdC+0LvRjCDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xazdva0J1eU1zRmFSdDRHd3dYVVNnWUNoNURkWTZNTjkvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LzQuNC6INCQ0L3QvdCwLCAxNyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiDQn9GA0LXQu9GO0LTRltGPLCDRgtCyLiAzMiDihJYxMiwg0YHQvtC70Ywg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUxZSEhWS3VVSWlzYWRFMmZtendZem13c1MtVXdWeFZSL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotGW0YXQvtC90L7QuiDQhNCz0L7RgCwgMTcg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLicn0KHQutC10LvRliDRg9GJ0LXQu9C40L3QuCDQo9GHLdCa0L7RiCcnINC3INGB0Y7Rl9GC0LggJyfQmtGA0LjQvNGB0YzQutGWINC90LDRgNC40YHQuCcnLtGC0LIuOCwgMinQpC7Qm9GW0YHRgi7QotGA0LDQvdGB0YbQtdC90LTQtdC90YLQvdC40Lkg0LXRgtGO0LQg4oSWMTAsINGE0LAg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhuM1RmTkg2R0ZCQlFvMXZaWk5uUlJWcWJ0akdHdWcyL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpNCw0YnQtdCy0YHRjNC60LjQuSDQotCw0YDQsNGBXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuICcn0JXRgtGO0LQt0LrQsNGA0YLQuNC90LAnJywg0YLQsi4zMyAoNSlcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFlcVRQWGxfUmhaUU9kVnItbGhVUW1sT004Y29DNkZvSy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KTQsNGJ0LXQstGB0YzQutC40Lkg0KLQsNGA0LDRgVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCbLtCg0LXQstGD0YbRjNC60LjQuS4g0J/RgNC10LvRjtC00ZbRjywg0YLQsi40ICgyKVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMS1fYm9Nbm9Zbms3NHhEelF5NlFsQ3FWeElQM2o0c0h4L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2YwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpNC10YHQuNC6INCd0LDQt9Cw0YDRltC5LCAxNiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QkdC+0YDRgtC60LXQstC40YcuJydMeXJpY2EgTm92YScnLNGC0LIuNTkg4oSWMyw0OyAyKdCkLtCb0ZbRgdGCLtCi0YDQsNC90YHRhtC10L3QtNC10L3RgtC90LjQuSDQtdGC0Y7QtCDihJY4ICcn0JTQuNC60LUg0L/QvtC70Y7QstCw0L3QvdGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjMHNqNEFNdUR4SEFwbUdUOVdTaG1qSkhiRUhSekpkQy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0K7Qt9C70L7QstCwINCb0Y7QsdC+0LIsIDE3INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSkg0Jou0JTQtdCx0Y7RgdGB0ZYuICcn0JDRgNCw0LHQtdGB0LrQsCcn4oSWMSwgMikg0Jku0JHRgNCw0LzRgS4nJ9CG0L3RgtC10YDQvNC10YbRhtC+JycsINGC0LIuMTE3IOKEljJcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMQURJbldwbS1qaGMxRmJSdWRncXdDTUd0elhRREJNUy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JfQsNGU0YbRjCDQnNCw0YDQuNC90LBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KHQutC+0YDQuNC6Licn0JLQsNC70YzRgScnINC3INCf0LDRgNGC0LjRgtC4IOKEljVcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExbWxaem5aYm94aHp4RUJUSjRnVW1FdEUwSllnUWdkaC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmM1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JfQsNGU0YbRjCDQnNCw0YDQuNC90LBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9CU0YPQvNC60LAnJywg0YLQsi41OVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBhVXAtYXFRZENxQnQzNTY2MnlOd0praGFOT0FYTl9oL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9C+0LPQstC40L3QvtCy0YHRjNC60LjQuSDQhNCy0LPQtdC90ZbQuVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCULtCf0YDQuNGC0YHQutC10YAuICcn0JHQu9GO0Lcg0J/RltC60LDRgdGB0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWUyXzRpc1F6bHVjTFI3a0JaWC1DSHhncVlyQnhKUlp3L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9C+0LPQstC40L3QvtCy0YHRjNC60LjQuSDQhNCy0LPQtdC90ZbQuVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCf0YDQvtC60L7RhCfRlNCyLiDQodC+0L3QsNGC0LAg4oSWMywg0YLQsi4yOFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMURMaFQ5WXdSNUk5Y1p4emROb2UyMkZ3UzhqcEk0WVZzL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC40LrQuNGC0Y7QuiDQkNC90LDRgdGC0LDRgdGW0Y9cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC7QoNCw0LrQvtCyLiAnJ9Ca0L7QvdGG0LXRgNGC0L3QuNC5INC10YLRjtC0JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDOGE2VFBSTTJjYVFmVE9BNnpHSHZ1SWpHU29MN0MxYi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQuNC60LjRgtGO0Log0JDQvdCw0YHRgtCw0YHRltGPXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDQtNC+INC80ZbQvdC+0YAsINCU0KLQmiAt0IbQhlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXdycWRiX2tlMktjaF9DZkJjbU5SSDJNNTgwUHRaUUExL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQndCw0LfQsNGA0LXQvdC60L4g0JrRgdC10L3RltGPXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0JLQvtC70LrQvtCy0LAuICcn0J3QsNGB0YLRgNC+0ZcnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU9BOHJ2TjZ3d2RwT1Z5MURWRHQxenEtNHBrZWlTcjN4L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQndCw0LfQsNGA0LXQvdC60L4g0JrRgdC10L3RltGPXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JHQsNGFLiDQkNC70LXQvNCw0L3QtNCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMHF0VVJXZDNhYXNjcTJnd05IeE0tRkVUeVFITEI4dEQvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LXRgNC+0LIg0JLQu9Cw0LTQuNGB0LvQsNCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS4g0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINC00L4g0LzRltC90L7RgCwg0JTQotCaLdCG0IYsIDIp0KQu0KjQvtC/0LXQvS4g0JHQsNC70LDQtNCwIOKEljEsINGC0LIuMjNcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhdG41eWlFY1hnalZuRktmTTRRV0FVUzR6X1VWVEpfcS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQsNGA0LDRgdC+0LIg0JLQu9Cw0LTQuNGB0LvQsNCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4gJyfQldGC0Y7QtC3QutCw0YDRgtC40L3QsCcnLCDRgtCyLjM5IOKEljksIDIp0KQu0KjQvtC/0LXQvS4gJyfQkdCw0LvQsNC00LAnJywg0YLQsi4yMyDihJYxXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOU5aX3RFeTBPMm5SWGpDbHRkX3ZkV0wzU011Qk5hQ00vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0YDQtdCx0LXQvdGO0Log0JMu0J4uXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7Qn9GA0L7QutC+0YTRjNC10LIuINCh0L7QvdCw0YLQsCDihJYyLNCGINGHLjsyKSAgINCkLtCb0ZbRgdGCLicn0JXRgtGO0LQg0LfQsCDQutCw0L/RgNC40YHQsNC80Lgg0J/QsNCz0LDQvdGW0L3RlicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU2hVWUlZUDluZ29RWmVobUNielA1RjNiSkFLRmgzc04vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7QvdC00YDQsNGC0Y7QuiDQnC7Qni4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoC7QqNGD0LzQsNC9LiAnJ9Cg0L7QvNCw0L3RgScnLCDRgtCyLjI4LCAyKdCSLtCa0L7RgdC10L3QutC+LiAnJ9Ca0YPRgNCw0L3RgtCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGT2I0MVBzbXFXTzRueU9Ea09kb01UNFNzUHA0SFg5eC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0L3QsNGB0LXQvdC60L4g0JAu0J4uIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuINCf0YDQtdC70Y7QtNGW0Y8g0YHQvtC70Ywg0LTRltGU0Lcg0LzRltC90L7RgCwgMinQki7QpNGW0LvRltC/0LXQvdC60L4uINCi0L7QutCw0YLQsFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZMWEVMdVpjSTZRaTJncmx3YVUtdUV3bEx2MWVTRWtYL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn1dO1xyXG5cclxubGV0IGNvbmNlcnRtYXN0ZXJzID0gW3tcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTNmZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtCx0LfQsNGAINCd0ZbQutC+0LvRjCwgMTQg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCkLtCa0YDQtdC50YHQu9C10YAuJyfQnNCw0LvQtdC90YzQutC40Lkg0JLRltC00LXQvdGB0YzQutC40Lkg0LzQsNGA0YgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWt1U1IwVm1PTWlxSWo5WVIwdTNsdk96cTRKRzVhTFk4L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7QsdC30LDRgCDQndGW0LrQvtC70YwsIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS7QldC70YzQs9Cw0YAuJyfQodCw0LvRjtGCINC60L7RhdCw0L3QvdGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExZ0k3WGxqX1NMUXFsMlBpNkVUQWhTQVpUS0xNamtCbi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDAxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCw0LHQviDQndC10YHRgtC+0YAsIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtGA0L7Qu9C7LiAnJ9Cf0L7Qu9GM0LrQsCDQstGW0YHQu9GO0YfQutCwJycsIDIp0JIu0KbQuNCx0ZbQvSjQv9C10YDQtdC60Lsu0JAu0KbQsNGA0LXQvdC60L4pLiAnJ9Cb0LjRgdGC0L7QuiDQtyDQsNC70YzQsdC+0LzQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNFBSNWV2clVJUmFTMVZGVXZ1MHM2OUhNSDd4UzNXaUkvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQhNCy0LPQtdC90ZbRjywgOSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCbLtCR0LXRgtGF0L7QstC10L0uICcn0JHQsNCx0LDQuicnLNC+0LHRgC4g0JAuINCo0YPQstCw0LvQvtCy0LBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpcjJhUktjbzgyTnd6UjJGUUg2QXBaVkhRWllyMEw3eS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDAzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCE0LLQs9C10L3RltGPLCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0JHQtdGGLiAnJ9Cf0L7QtNGW0LvRjNGB0YzQutGWINCy0LjQutGA0YPRgtCw0YHQuCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcUpROUFJV2o0OHBKVE1CV2ZvM2g3ejZKbEtKSDk4MG4vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwNFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHRgtCw0YDRhtC10LIg0JHQtdC90LbQsNC80ZbQvSwgMTEg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQli7QnNCw0YHRgdC90LUuICcn0KDQvtC30LTRg9C8Jyc7IDIp0JUu0KDQuNCx0LrRltC9LiAnJ9Ck0L7RgNC80YPQu9CwIDEnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUw2YnhEeXNOMHkyR0RTTm5SWHFHRUZiSFI3ZVMtaXhzL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0LvQsNGB0Y7QuiDQndCw0LfQsNGALCAxOCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JTQvtC90L7RgtGWLiDQkNGA0ZbRjycnTyBkZWwgbWlvIGFtYXRvIGJlbicnLDIp0JUu0JPRgNGW0LMs0JMu0KUuINCQ0L3QtNC10YDRgdC10L0gJydKZWcgZWxza2VyIGRpZycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMl9NRlBVMzlidEpRS3ZTdDJSWXpqaVUwSGFZc2E0T2cvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwNlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JTRj9GH0LXQuiDQhtC+0LDQvdC90LAsIDE30YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCQLtCc0L7RhtCw0YDRgi7QkNGA0ZbRjycnUmlkZW50ZSBsYSBjYWxtYScnLCAyKdCkLtCd0LDQtNC10L3QtdC90LrQviwg0IYu0KTRgNCw0L3QutC+LtCg0L7QvNCw0L3RgSAnJ9Cn0L7Qs9C+INGP0LLQu9GP0ZTRiNGB0Y8g0LzQtdC90ZYg0YMg0YHQvdGWJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFUWJRS2JXaXZDYi1nT1FrY2NJQ0w1QVBRamdXbGU5dy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtCy0LDRiNCwINCv0L3QsCwgMTYg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JrQstCw0L3Rhi4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwg0IYt0IbQhiDRhy47IDIp0JIu0J/QvtC/0L8uICcn0KDRg9GB0YHQutC40Lkg0LLQtdGH0LXRgCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb3BMNDFtTEgxMEJucjFlTXl6T0V4c3dGSm9UWl84Y1MvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtC70L7QtNGW0Lkg0JDQvdGC0L7QvSwgMTgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCfLtCn0LDQudC60L7QstGB0YzQutC40LkuINCg0L7QvNCw0L3RgScn0JPQvtGA0L3QuNC80Lgg0YLQuNGF0L4g0LvQtdGC0LXQu9CwINC00YPRiNCwINC90LXQsdC10YHQsNC80LgnJywgMinQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4gJyfQldC70LXQs9GW0Y8nJyzRgtCyLjPihJYxLCDQvtCx0YDQvtCx0LrQsCDQtNC70Y8g0LLRltC+0LvQvtC90YfQtdC70ZYg0YLQsCDRhC3QvdC+XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbFFJekRPaVpwLUVkWGx5MTBTVm00ZGlPajVXQ1NrM1ovcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtC90Y7RiNC10Log0KHQvtGE0ZbRjywgMjEg0YDRltC6XCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0KLQsNC60YLQsNC60ZbRiNCy0ZbQu9GWLiDQodC+0L3QsNGC0LAg0LTQu9GPINGE0LvQtdC50YLQuCDRliDRhNC+0YDRgtC10L/RltCw0L3Qvi5cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFIWEUtV2JsVTAtSHl3Z1Z6Q3VuUW5pUVVDVU5YR2xOTi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0L3RjtGI0LXQuiDQodC+0YTRltGPLCAyMSDRgNGW0LogXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQu0JrQvtC80LvQtdCyLiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0cTc4WEtwZEZnNjZWU1drQVpxMFZlUnVLYVRjSlVwdS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9GH0LXQu9GW0L3RhtC10LLQsCDQkNC00YDRltCw0L3QsCwgMTUg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JzQvtGG0LDRgNGCLiDQkNGA0ZbRjyDQkdC70L7QvdC00YXQtdC9INC3INC+0L/QtdGA0LgnJ9CS0LjQutGA0LDQtNC10L3QvdGPINGW0Lcg0KHQtdGA0LDQu9GPJycsIDIp0KAu0JPQu9GW0ZTRgC4nJ9CSINC/0L7RgNGL0LLQtSDQvdC10LbQvdC+0YHRgtC4INGB0LXRgNC00LXRh9C90L7QuScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN21SVnhWMDZ2NU12Nl9QM0MxODNvTWdPTi1SX3UtcU8vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KTQtdGB0LjQuiDQndCw0LfQsNGA0ZbQuSwgMTYg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCU0LYu0J/Rg9GH0YfRltC90ZYuINCQ0YDRltGPINCi0L7RgdC60Lg7IDIp0Jwu0LTQtSDQpNCw0LvRjNGPLicn0KXQvtGC0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUJKTnNUcDRXRHhaYkFkQW5qTUxQM2hiRDYzVDJlSXdZL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCv0YDQvtGI0LXQvdC60L4g0JLQsNC70LXRgNGW0Y8sIDE5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCh0YLQtdGG0LXQvdC60L4uICcn0KHQvtGC0L7Rj9C70LAg0Y8g0ZYg0YHQu9GD0YXQsNC70LAg0LLQtdGB0L3RgycnOyAyKdCSLtCS0LvQsNGB0L7Qsi4g0KHQutC10YDRhtC+INC00LvRjyDQtNC+0LzRgNC4INGC0LAg0YTQvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xT3VEbGFjRGIzaTk0eE54a293ay1qc05rdHh1UUs3MUwvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtC30LDQuiDQhtGA0LjQvdCwXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IQu0JHQvtC30LfQsC4nJ9CU0LjRgtGP0YfRliDQvNGA0ZbRlycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUHNveU9JcjE3T0N5Tl9HaFJVX3E3SXBTNEhXd0hXVUIvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtC30LDQuiDQhtGA0LjQvdCwXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiJ9Cd0ZbRhyDRj9C60LAg0LzRltGB0Y/Rh9C90LAnJywg0L7QsdGALiDQri7QntGB0YLRgNC+0LLRgdGM0LrQvtCz0L4gXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVEpLUUZFbTNhM3d6aVl2STNRZmloR3h6VjJVNVFIMm4vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQuNC60LjRgtGO0Log0JDQvdCw0YHRgtCw0YHRltGPIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J0u0JHQsNC60LvQsNC90L7Qsi4gJyfQmtC+0L3RhtC10YDRgtGW0L3QvicnLCAgICAgIDIp0Jcu0JHQsNCz0ZbRgNC+0LIuICcn0KDQvtC80LDQvdGBJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqOF9tdlpFR1RnWUkwTEZHV0ZvTGJRQWdDSHBJNUMwWi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDExXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCw0LIn0Y7QuiDQktC70LDRgdGC0LBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCQLiDQnNC+0YbQsNGA0YIuINCa0L7QvdGG0LXRgNGCINC00LvRjyDRhNCw0LPQvtGC0LAg0Lcg0L7RgNC60LXRgdGC0YDQvtC8INGB0ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YAsINCG0YcuOyAyKdCQLtCi0LDQvdGB0LzQsNC9LtCh0L7QvdCw0YLQuNC90LAg0LTQu9GPINGE0LDQs9C+0YLQsCDRliDRhNC+0YDRgtC10L/RltCw0L3QvizQhtCG0IbRhy5cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEzMGFaTzFueFY0RThIWDdoeFdhTnZWVDRiZmdraHg0TS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDEyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCw0YHRjtC6INCu0LvRltGPXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQky7QpNC+0YDQtS4gJyfQn9GA0L7QsdGD0LTQttC10L3QvdGPJycsIDIpINCRLtCR0LDRgNGC0L7Qui4gJyfQqNGW0YHRgtGMINGA0YPQvNGD0L3RgdGM0LrQuNGFINGC0LDQvdGG0ZbQsicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb2RzM3R2VURYWmRvMXllZElWWFljYzlNbjc3YmpoMjUvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxM1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0IbQstCw0L3QvtCy0LAg0KIu0JIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0KHQtdCy0LXRgNC9LiAnJ9Cf0L7Qu9GM0YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhYdHZPU0F1bnY1NlJmQXhnVjFxN200aUthMDlzV0gxL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90L7QstCwINCiLtCSLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCGLtCi0LDQvNCw0YDQuNC9ICcn0KHRgtCw0YDQvtCy0LjQvdC90LjQuSDQs9C+0LHQtdC70LXQvScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNDl2bE0wN0dkOFM5Q3o0dERaMkt5S2tndUp6eUIxdUIvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQsNGH0LjQuiDQni7QkC5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCgLtCT0LvRltGU0YAuJyfQoNC+0LzQsNC90YEnJywgMinQni7QptC40LPQsNC90LrQvtCyLicn0IbQvdGC0YDQvtC00YPQutGG0ZbRjyDRgtCwINCn0LDRgNC00LDRiCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTmdzODVxcEVPREV2NjdhOC1kYUp4Wm9INktvN1NVV2svcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxNlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPRgNC40YbRltCyINCeLtCcLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQuINCa0YDQtdC50YHQu9C10YAuJyfQnNCw0LvQtdC90YzQutC40Lkg0LLRltC00LXQvdGB0YzQutC40Lkg0LzQsNGA0YgnJywgMinQmy4g0KDQtdCy0YPRhtGM0LrQuNC5LiAnJ9CG0L3RgtC10YDQvNC10YbQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xblhreWJQWkhQT1dXVXpCRURfS0tlR0Yza08yRWNhYmovcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrRltGA0YfQsNC90L7QstCwINCGLtCSLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCS0ZbQtNC80L7QvdGC0LUuJydQYXIgemlsbyB1biByYWlibyBwYXNha3UnJywgMinQk9GD0LHQsNGA0LXQvdC60L4g0JIuINCa0L7QvdGG0LXRgNGCINC00LvRjyDRhNC70LXQudGC0Lgg0Lcg0LrQsNC80LXRgNC90LjQvCDQvtGA0LrQtdGB0YLRgNC+0Lws0YLQsi4xMFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpwTWpDYXVVcGJKZHVmV1hmYjVPZm03UDlzQVlqLWlQL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MThcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0LXQutGD0YUg0J4u0JIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQhi7QktC40LzQtdGALiAnJ9CT0YPRhtGD0LvRjNGB0YzQutCwINGA0LDQv9GB0L7QtNGW0Y8nJywgMinQo9C60YAu0L3QsNGALiDRgtCw0L3QtdGG0Ywg0LIg0L7QsdGALtCSLtCh0L7Qu9C+0L3RgdGM0LrQvtCz0L4gJyfQktC10YfQvtGA0L3QuNGG0ZYnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWRmUHgxNVdRS0hmUFZ0TVBXV0FBdzlzeTlVWXc1UzFlL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCb0L7QsdC+0LTQsCDQmy4g0JwuLCBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCR0LXRgtGF0L7QstC10L0sINCiLtCo0LXQstGH0LXQvdC60L4uICcn0JfQvtGA0LUg0LzQvtGPINCy0LXRh9GW0YDQvdGP0Y8nJywgMinQm9C10LzQutGW0LLRgdGM0LrQsCDQvdCw0YDQvtC00L3QsCDQv9GW0YHQvdGPICcn0JIg0YLQtdC80L3RgyDQvdGW0YfQutGDINGD0LHQvtGH0LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBnWm81M1g2RWhId0VNcFhLd3BCMnRXMl9pclZvMjkwL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCb0Y7QsdGH0LXQvdC60L4g0Jwu0KEuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLtCR0LDRhS4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINGB0LrRgNC40L/QutC4INC3INC+0YDQutC10YHRgtGA0L7QvCDQu9GPINC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF3Zmh1aXRYTDJNd3RZZHJVSElrVmRNeFFacGh0NmpObC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDFiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9GO0LHRh9C10L3QutC+INCcLtChLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCdLtCh0YLQtdGG0Y7QvS4gICAgJyfQkdC+0LvQtdGA0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJIV1VyaXFLdlNUblZuSW00N21tTGVkU2kwTmgtWFFzL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LjRhdCw0LnQu9C+0LLQsCDQnC7Qki4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QotCw0LzQsNGA0LjQvS4nJ9Ch0YLQsNGA0L7QstC40L3QvdC40Lkg0LPQvtCx0LXQu9C10L0nJywgMinQkC7QodC+0LvRgtCw0L0uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVvRVMybVRyV0N5OUNRY3FkOXF1MzY2WjF0ejZJcFJRL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0Y/Qu9GM0LrRltC90LAg0J0u0J4uXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JTQti7QktGW0LvRjNGP0LzRgS4gJyfQnNC10LvQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaU1fRUYwVng5LXc0RFM2SFJfWkhSSi1tcUp3QS1GR3AvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzRj9C70YzQutGW0L3QsCDQnS7Qni5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QptC40L3RhtCw0LTQt9C1LiAnJ9Ch0LDRh9GW0LTQsNC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE1OWRqU3J6STFBdkw1cGtDbDB2bllEc0hRTFRuZDVsby9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDFmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQndGW0LrRltGC0ZbQvdCwINCGLtCgLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCRLtCb0Y/RgtC+0YjQuNC90YHRjNC60LjQuS4gJyfQnNC10LvQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeVF5TzBRNjVXdkhudlkyOHhCbDNzaFctSHRkdTQyMzkvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J3RltC60ZbRgtGW0L3QsCDQhi7QoC5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQodC7LiDQkC7QnCfRj9GB0YLQutGW0LLRgdGM0LrQvtCz0L4sINC80YPQty7Qki7QktC10YDQvNC10L3QuNGH0LAgJyfQn9GW0LTQutGA0YPRh9GDINGPINGH0L7RgNC90ZbRlyDQstGD0YHQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdV83VVFEdU9DRHFKSmoxcTVsaEVGUEVveGRfUFUzalkvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQsNGU0L3QutC+INCiLtCuLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQli7QnNCw0YHRgdC90LUuICcn0KDQvtC30LTRg9C8JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFKbEFvWS1BQUpFeUktcklSREN1N1VueXd4dnJXRUJCdy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDIyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCw0ZTQvdC60L4g0KIu0K4uLCBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi7Qp9GD0L/QsNC6LiAnJ9CS0LXRgdC90Y/QvdC40Lkg0YDQvtC6LdC9LdGA0L7Qu9C7JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUNS1JVU5VdVFtVXZGVldZbFk2U0FWZWotVElxbWJycS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDIzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCw0LLRh9GD0Log0KIu0IYuICBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCU0LYu0JLRltC70YzRj9C80YEsINCw0YDQsNC90LYu0JAu0KLQtdC/0LvQuNGG0YzQutC+0ZcuJyfQmtC+0LvQuNGB0LrQvtCy0LAg0LTQu9GPINCw0L3Qs9C10LvQsCcnLDIp0JIu0JrQvtC30LvQvtCyLNC/0LXRgNC10LrQuy4g0LTQu9GPINC00L7QvNGA0Lgg0IQu0JbRg9C60L7QstCwLicn0J8n0ZTRgdCwINGDINGB0YLQuNC70ZYg0YTQu9Cw0LzQtdC90LrQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN1RnaXVvZ2l2c2gzeHdqRlhpNWExb1JVLW9ra1A5NjAvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyNFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQhi7Qri5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC4g0KjRg9C80LDQutC+0LLQsC4gJyfQotCw0L3Qs9C+INCV0LLRltGC0LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFDa3ppUnZZSnZuaVc3Y2lhN3k5RWtJODVzbkxKdzd4L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0IYu0K4uXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIu0JPQvtC80L7Qu9GP0LrQsC4gJyfQhtGB0L/QsNC90YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlPVUpOMjFCdkRkenNMMG9QMGF0dnNFbW9xZ1VkcFlDL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LzQvtC70Y/QvdGW0L3QvtCy0LAg0KEu0JwuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JTQstC+0YDQttCw0LouINCa0L7QvdGG0LXRgNGCINC00LvRjyDRgdC60YDQuNC/0LrQuCDQu9GPINC80ZbQvdC+0YAsINCGINGHLjsgMinQnC7QodC60L7RgNC40LouICcn0JrQsNGA0L/QsNGC0YHRjNC60LAg0YDQsNC/0YHQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdGxzck1rUXAwVVZxMHl3dEowMUxwSEtQc21GT3BIbk8vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHRgtCw0YDQuNC90YHRjNC60LAg0Jwu0JAuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KjQuNC90LrQsNGA0LXQvdC60L4u0JLQsNGA0ZbQsNGG0ZbRlzsgMinQlS7QkdC+0YbRhtCwLicn0JDRgNGW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUxzV3pWX0x0MXowZ0dYVUxTZWdvdWNrWTlSWnJvRzdoL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0YDQtdC/0LDQuiDQnC7Qhi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCWLtCU0LXQvNC10YDRgdGB0LzQsNC9LiDQpNCw0L3RgtCw0LfRltGPLCAyKdCfLtCG0YLRg9GA0YDQsNC70YzQtNC1LiAnJ9Cc0LDQu9C10L3RjNC60LjQuSDRh9Cw0YDQtNCw0YgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVRNU0tIcEVjbU0zSzdoaVp6eVkzZzRLXzhNdEhiSDlML3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCE0YDRjNC+0LzRltC90LAg0J4u0JMuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLtCU0YDQtdC80LvRjtCz0LAuINCf0L7QtdC80LAt0YDQsNC/0YHQvtC00ZbRjywgMikg0KEu0J7RgNGE0LXRlNCyLicn0JLQtdGB0L3Rj9C90LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWTZPS1VPb0piMWp1M1Z6UzRGQ3RPNGd1QkxIRDkxMFAvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQsNC00YPQuiDQoi7Qri5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQmi7QnC7QktC10LHQtdGALtCa0L7QvdGG0LXRgNGCINC00LvRjyDQutC70LDRgNC90LXRgtCwIOKEljEs0IYg0YcuOyAyKSDQry7QnNC10LTQuNC90YzRiC4g0KDQvtC80LDQvdGBXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa1dCSFlVWVJtWHBtNUJDR1c5Ym50OHk5cml4Z1BRWjQvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J3QvtCy0ZbQutC+0LLQsCDQnC7QnC5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQntCx0YAuINCULtCX0LDQtNC+0YDQsC4gJyfQodC10YDQtdC0INGB0LXQu9CwINC00LjRh9C60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBhV1ZsT2UzRi1zc1FoVFZxa0ZuZzhHSktHSkV3VTgwL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MmNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCd0L7QstGW0LrQvtCy0LAg0Jwu0JwuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCfLtCGLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQl9Cw0LHRi9GC0Ywg0YLQsNC6INGB0LrQvtGA0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXR3NU1OVS01ZnVYUW9TT0hwV3RhR3ZHalp4Y2ZNQWZtL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MmRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LjRgNC+0YLQsCDQni7QnC5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCa0YPQtNGA0Y/QstGG0LXQsi4gJyfQntC00LjQvSDQtNC10L3RjCDQtyDQttC40YLRgtGPINC00Y/RgtC70LAnJywgMinQni7QkdC10YYuJyfQo9C60YDQsNGX0L3RgdGM0LrQtSDRltC90YLQtdGA0LzQtdGG0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNlakIxaWRfUFU3WGctdzVmektVdkowRW9PbkZzRE1DL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufV07XHJcblxyXG5teUNhcmRzID0gbXlDYXJkcy5jb25jYXQoY29uY2VydG1hc3RlcnMpO1xyXG5cclxubGV0IGVuc2VtYmxlID0gW3tcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQltGD0YDQsNCy0LXQu9GMINChLiwg0JDRgNGC0LXQvNC10L3QutC+INChLilcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9CG0YHQv9Cw0L3RgdGM0LrQuNC5INGC0LDQvdC10YbRjCcnLCAyKdCe0LHRgC7QnC7Qn9C+0L/QvtCy0LAuICcn0ITQstGA0LXQudGB0YzQutGWINC80L7RgtC40LLQuCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xS3ZjRUU3cVBTMHJhT0NxZDhzYU1FSG8teTBVRElwQ2gvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0MzhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCf0LjQu9C40L/Rh9GD0Log0J0uLCDQmtCw0LLRg9C9INCELilcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQki7QkNC70LXQutGB0LXRlNCyLicnINCd0LAg0L/RgNC+0LPRg9C70Y/QvdGG0ZYnJywgMinQni7Qn9C10YLRgNC+0LLQsC4gJyfQptC40YDQuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbkVMb3R3cUF6OUM3ZDA5RzROVkJWdmJSeUtMOTU4cnMvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0MzlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCg0LDQtNC60L7QstGB0YzQutCwINCQLiwg0JrRg9C30YzQvNC40YcpLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC7QqNC90ZbRgtC60LUuICcn0KjQuNC90LXQu9GMJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFNNHBhek5JX1R5djJzRE1XOW9COVFlbTM2STVEUlp1Ui9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICAo0KDQsNC00LrQvtCy0YHRjNC60LAg0JAuLCDQmtGD0LfRjNC80LjRhykuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQndCw0YPQvNC10L3QutC+Licn0KfQsNGBINCy0LXQu9C40LrQuNGFINC+0YfRltC60YPQstCw0L3RjCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTEJPZV93RmxDX3l6dF9GZmtSYkM4LTkwY1Z1M3N0Vk8vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0M2JcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCh0ZbQutC+0YDQsCDQoC4g0KfQtdGA0LXQv9GD0YnQsNC6INCcLikuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0J3QsNGD0LzQtdC90LrQvi4gJyfQmtC+0LvQvtC80LjQudC60LAnJywgMinQlS7Qk9GA0ZbQsy3Qky7QpNGW0YDRgtC40YcuJyfQotCw0L3QtdGG0Ywg0JDQvdGW0YLRgNC4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPUlR6dy1wbGVoUXZBQU9pbk9yZHFuSHRuVV9vQ1pqNS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICcnTXljcmFmdCcnICjQhNGA0LzQvtC70LXQvdC60L4g0JQuLCDQqNC40LHQsNC90L7QstCwINCSLikgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QodC60L7RgNC40LouICcn0JzQtdC70L7QtNGW0Y8nJywgICAgICAgICAyKdCeLtCl0YDQvtC80YPRiNC40L0uICcn0JTRgNGD0LrQsNGA0YHRjNC60LAg0LzQsNGI0LjQvdC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUF1dm80NGFCWVRHM3ZLeHNUMmhRRDBobWtnMUVkbGE3L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCR0L7QvdC00LDRgNC10L3QutC+INCcLiwg0KHQu9GW0L3Rh9C10L3QutC+INCuLikgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0KHQtdC60YDQtdGCLicn0J/RgNC+0LPRg9C70Y/QvdC60LAg0JTQvtCx0LXRgNC80LDQvdCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExUVNBZGt3bjNpdTU0a1IzaHhuaDNIZzBDX3pwUC1aVS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQkdC+0L3QtNCw0YDQtdC90LrQviDQnC4sINCh0LvRltC90YfQtdC90LrQviDQri4pIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJycg0IbRgtCw0LvRltC50YHRjNC60LAg0L/RltGB0LXQvdGM0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWlQtM3VDcnpiR0p0TWMwb0x3dGdKcVRvcno5akRZZXMvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0M2ZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JLQsNGI0YPRgNGW0L3QsCDQki4sINCE0LbQvtC90LrQvtCyINCQLikuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JMu0JHRlNC70L7Qsi4nJ9Cj0YDQsNGB0ZbQvNCwINGWINCn0LDRgNGW0LLQvdCwINCn0LXRgNC10L/QsNGF0LAnJywgMinQni4g0J/QvtC70YzQvtCy0LjQuS4gJyfQn9C+0LTQvtGA0L7QtiDQsiDQkNC70YzQv9C4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqQ2h2TUJyRHd5eEtrM0FKRUVDU0JFN1lfa0NMUmg4cy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0MFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQk9C10LzQsdC40YbRjNC60LAg0J4uLCDQmtGD0LfQu9C+INCaLikuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QpdC+0LLQsNGA0LQuICcn0KfQsNGA0LvRjNGB0YLQvtC9JycsIDIp0JTQti4g0KjRltGA0ZbQvdCzLiAnJ9Ca0L7Qu9C40YHQutC+0LLQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdExOVmxodXJaVWRIeDQ0TWNoUzRxbTI1MWVTMzlyb1EvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JTQtdGA0Y/QsdGW0L3QsCDQoS4g0YLQsCDQktCw0YHQuNC70YzRlNCy0LAg0JIuKS5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCU0ZbQsNCx0LXQu9C70ZYuINCh0L7QvdCw0YLQsCDRgNC1INC80LDQttC+0YAsIDIp0Jsu0KjRg9C60LDQudC70L4uICcn0JPRg9C80L7RgNC10YHQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5SlFCZmc3Y19Cb1FxWE1tQVlxTllRQ25ZdGF3WjlUby9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0MlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtGA0LjRiNGC0LDQu9C+0LLQuNGHINCcLiwg0JrRgNC40YjRgtCw0LvQvtCy0LjRhyDQhi4pIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCU0LYu0JPQtdGA0YjQstGW0L0uICcnQ2xhcCB5b3UgaGFuZCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTUFKZUJWbmZ0RWRoY2lvNDduRG5VZ2NqR0dUd0s4Q2ovcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrRgNC40YjRgtCw0LvQvtCy0LjRhyDQnC4sINCa0YDQuNGI0YLQsNC70L7QstC40Ycg0IYuKVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIifQmtC+0LvRj9C00LrQsCcnLCDQvtCx0YAuINCeLtCX0LDQutCw0LvRjtC20L3QvtGXXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcHF4WVpUdkZ5cnJqNmRUcFQ1OFVVUFNPUEhNLWhadGUvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JvQsNC90YHRjNC60LjQuSDQhC4sINCb0LDQvdGB0YzQutCwINCeLilcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCVLtCT0YDRltCzLiDQkNGA0ZbRjyDRltC3INGB0Y7Rl9GC0LggJyfQlyDRh9Cw0YHRltCyINCl0L7Qu9GM0LHQtdGA0LPQsCcnLCAyKdCSLtCf0YLRg9GI0LrRltC9LiAnJ9CR0YDQtdC90YTQvtGA0LTRgdGM0LrQsCDQstGW0LTRjNC80LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMThPVXNDR1FCczNJaGxYNml0LXMzVHh1bzA3TTNOczBIL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQ1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCh0LjQvNC+0L3QtdC90LrQviDQoi4sINCk0LXQtNC40L3QsCDQkC4pXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JTQti7Qk9C10YDRiNCy0ZbQvS4nJ9Ca0L7RhdCw0L3QuNC5INC80ZbQuScnOyAyKSDQny7QnNC+0YDRltCwLiAnJ9Cc0LDQvdGD0LXRgicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaFZla2g4XzVNT1VKRGdKdFhJOGk0R0JkUlF3Q0Fla3QvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KHQutC+0L/QtdGG0Ywg0JAuLCDQnNGD0YDQt9Cw0Log0K4uKS4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIu0J7RgdGC0LXQvS4nJ9Ci0LDQvdC10YbRjCDQu9GP0LvRjNC+0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVGenlpanV3QUZOajh2LVRscmFpSV9Qa3VIR3FYOTRFL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQ3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCh0LrQvtC/0LXRhtGMINCQLiDQnNGD0YDQt9Cw0Log0K4uKSBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0JbRg9C70YzRlNCy0LAuJyfQn9GA0L7Qs9GD0LvRj9C90LrQsCDQtyDRgtCw0YLQvtC8JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWWnIyVi1IdjhNSUY4S1dnWkdmSkF5dUVFN21hcVdvcC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0OFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQotGA0L7RhtC10L3QutC+INCQLiwg0K/QutGD0L3RltC90LAg0J4u0JIuKVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0Jwu0JLQtdCx0LXRgC4g0KHQvtC90LDRgtCwINC00L4g0LzQsNC20L7RgCwg0IYg0YcuOyAyKdCQLtCa0L7QvNC70ZbQutC+0LLQsC4gJyfQodC/0L7Qs9Cw0LQnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFZTkI4akgwSnk0U1AzdWZBY2VRLW1KMjlsUHJfclR3L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQ5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCk0ZbQu9GW0L/QvtCyINCGLiwg0JzQsNGA0YfQtdC90LrQviDQmy4pXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuJyfQltCw0YDRgicnIDIp0Jwu0JvQtdC+0L3RgtC+0LLQuNGHLicn0KnQtdC00YDQuNC6JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwaFdUeUlKYjdGenFOUUZlVXFFNXgxbFlGWjU5V3Vnei9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0YVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQpdC10LvQvNCw0L0g0JIuLCDQpdC10LvQvNCw0L0g0JIuKVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KMu0JPRltC70LvQvtC6Licn0J3QsCDQv9Cw0YDQuNC30YzQutC+0LzRgyDQsdGD0LvRjNCy0LDRgNGWJycsIDIp0J0u0KHQvNGW0YDQvdC+0LLQsC4nJ9CR0YDQsNC30LjQu9GM0YHRjNC60LjQuSDQutCw0YDQvdCw0LLQsNC7JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3YzMyQ0kwbV9rTkpYWmtySGtYUWU1MlRkZkhXUGw2Ty9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0YlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC60LLQsNGA0YLQtdGCICcnU2ZvcnphbmRvJycuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCeLtCm0LjQs9Cw0L3QutC+0LIuICcn0KLRg9GB0YLQtdC/JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFVUWtaMTFVR1ZscWhSM3NyYWRwYm9RcEs5RUV5YWlxby9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0Y1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC60LLQsNGA0YLQtdGCICcnU2ZvcnphbmRvJycuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCT0YDRltCzLicn0JIg0L/QtdGH0LXRgNGWINCz0ZbRgNGB0YzQutC+0LPQviDQutC+0YDQvtC70Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNUTG50OElVNW5sWS1HMWRxZmJLdVJhMUJfWjhUU2tZL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCS0LjRhdGA0LjRgdGCINCcLiwg0KTRlNC00L7RgdGU0ZTQsiDQnS4pXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7Qn9GA0L7QutC+0YQn0ZTQsi4g0JzQsNGA0YgsIDIp0JIu0JvRjtGC0L7RgdC70LDQstGB0YzQutC40LkuINCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRgtC10LzRgyDQn9Cw0LPQsNC90ZbQvdGWXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbnpSSFhKS3RBYmR4N1B3YkI1ZDRYRkd4Qk5jdHBORWsvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JLRltGC0Y7QuiDQkiwg0JHQtdGA0LXQt9C+0LLRgdGM0LrQsCDQhC4pXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QkdCw0YUgKNCS0ZbQstCw0LvRjNC00ZYpLiDQmtC+0L3RhtC10YDRgiDQtNC70Y8g0L7RgNCz0LDQvdCwINC70Y8g0LzRltC90L7RgCwgMinQkC7QnyfRj9GG0L7Qu9C70LAuICcn0JvRltCx0LXRgNGC0LDQvdCz0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5mMDFFZjZPVk95TEFKVVVqQll5SUtOczNNWmVfUEZ2L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCR0L7RgNC+0LLQtdGG0Ywg0J4uLCDRltC70Y7RgdGC0YDQsNGC0L7RgClcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS7QkdCw0YUuJyfQkNGA0ZbRjycnICgnJ9Ch0YLRgNCw0YHRgtGWINC30LAg0JzQsNGC0LLRltGU0LwnJylcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFIMWFrUVVkUjdRS1JPNFAzaERZNl90WnRtZFNyazBKMS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1MFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQkdC+0YDQvtCy0LXRhtGMINCeLizRltC70Y7RgdGC0YDQsNGC0L7RgCkuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCaLtCe0YDRhC4nJ9CeLNCk0L7RgNGC0YPQvdC+JycgKCcn0JrQsNGA0LzRltC90LAg0JHRg9GA0LDQvdCwJycpXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOWtPSUJUZElLS1FaNm5YVmdQaVpIM1k4bXljV3B3QnkvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQu9C40LzQtdC90LrQviDQnC4sINCU0ZbQvtGA0LTRltGU0LLQsCDQnC4pXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuICcn0JLQvtC60LDQu9GW0LcnJywgMinQlC7QnNGW0LnQvi4nJ9CR0YDQsNC30LjQu9GM0ZTRgNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1ODFkQUF0bERvZnE0cG55RHRZZy1TeEdCNGpHQjNzRS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1MlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC+0LfQsNC6INCGLiwg0KLQsNGU0YAt0KPQu9GM0Y/QvdC+0LLQsCDQmi4pLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCJBLiAg0J8n0Y/RhtGG0L7Qu9CwLiAnJ9Cb0ZbQsdC10YDRgtCw0L3Qs9C+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5NllxRnRCUEdNbFh6RVFMOHV1M0JMNFVrck16ZTRqYi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1M1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC+0LfQsNC6INCGLiDRgtCwINCi0LDRlNGALdCj0LvRjNGP0L3QvtCy0LAg0JouKS4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCT0YDRltCzLiAnJ9Cd0L7RgNCy0LXQttGB0YzQutC40Lkg0YLQsNC90LXRhtGMJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUdGZpNG03UDFvdU5KRUhEWGlKbmE3WDNiZVFQenJmdS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1NFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC+0YHRgtC10YfQutC+INCQLiwg0JrQvtC90LTRgNCw0YLRjtC6INCcLiApLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQmi7QlNC10LHRjtGB0YHRli4gJyfQoyDRh9C+0LLQvdGWJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoUld6Q0xYSVVVNlhwRFdaM0Vpc0k3UTVOWkh6RGRpby9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1NVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC+0YHRgtC10YfQutC+INCQLiwg0JrQvtC90LTRgNCw0YLRjtC6INCcLikuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K4u0JLQtdGB0L3Rj9C6LiAnJ9Ca0LDRgNC70YHQvtC9JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFBMzFWclI1ZDVkWFQ4a1FXdE55R2t4Znk3YktJNU1EVS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1NlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQnNCw0YbRltGU0LLRgdGM0LAg0JwuLCDQn9Cw0L/RltGU0LLQsCDQmi4pLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCc0LXRgtC90LXRgC4nJ9Cg0L7RgdGW0LnRgdGM0LrQuNC5INGF0L7RgNC+0LLQvtC0JycsIDIp0JAu0J8n0Y/RhtGG0L7Qu9CwLicn0JLQtdC70LjQutC1INGC0LDQvdCz0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZBbmdzYXNHdUFzaG9EWnlnOWlkbGpCOHhvTUR2NHZDL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgICjQmtCw0YHRj9C90LXQvdC60L4g0J4u0JIuLCDQk9C+0YDQtNGW0ZTQvdC60L4g0IYu0J4uKSBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQkC7QkdCw0LHQsNC00LbQsNC90Y/QvS4gJyfQndC+0LrRgtGO0YDQvScnLCAyKdCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQk9GD0LzQvtGA0LjRgdGC0LjRh9C90LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV9TWEFGUUR3X0JtNFlLLXFjeTZYczRrRm9XNEgzRGFJL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgJyfQldC70LXQs9GW0Y8nJ1wiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCcLtCh0LrQvtGA0LjQui4gJyfQnNC10LvQvtC00ZbRjycnLCAyKdCbLtCa0LDRgNC/0LXQvdC60L4uJyfQktGW0L3QvtGH0L7QuiDRg9C70Y7QsdC70LXQvdC40YUg0LzQtdC70L7QtNGW0LknJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWNrWncwSHNzaXlFZGJTU0hCcU95YXdxU2Z0QWsxd1VqL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCT0YDQuNCz0L7RgCfRlNCy0LAg0JMu0JAuICwg0K/QutGD0L3RltC90LAg0J4u0JIuKVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0KjRg9Cx0LXRgNGCLicn0JLRltC50YHRjNC60L7QstC40Lkg0LzQsNGA0YgnJyAyKdCQLtCa0L7QvNC70ZbQutC+0LLQsC4gJyfQndCwINC80LDRgdC60LDRgNCw0LTRlicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVUNhSl9xWVVhcHlNLUhCaHJ1V2ItaDdJRnlTcWtfc1UvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQvtGB0LXQvdC60L4g0J4u0JIuLCDQmtCw0YHRg9C80L7QstCwINCeLtCULikuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC4g0KbRhNCw0YHQvNCw0L0uICcn0JvRltGA0LjRh9C90LjQuSDQstCw0LvRjNGBJycsIDIp0Jwu0JzRltC90LrQvtCyLiAnJ9Ch0YLQsNGA0LjQuSDRgNC+0Y/Qu9GMJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6R09LdW54SW9IZDNVajVGSHZkV3lOLXJ2V0Y3bjZWLS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1YlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC60LLQsNGA0YLQtdGCICAo0JLQsNGB0LXQvdC60L4g0KEuLCDQktCw0YHQtdC90LrQviDQnC4sINCl0LDQstCw0LvQutC+INCiLizQkdC40YfQutC+0LIn0Y/QuiDQmi4pLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCS0ZbQstCw0LvRjNC00ZYuJyfQl9C40LzQsCcnOyAyKdCkLtCc0LXRgNC6J9GO0YDQsC4nJ9CR0L7Qs9C10LzQvdCwINGA0LDQv9GB0L7QtNGW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUI5Nm5FQzN2S1lSZDhPZ1RYZ1BpVlZYOFZCLU1TU2RZL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDVjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgJydBTExBIEJSRVZFJycuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0KHRgtGA0LDQstGW0L3RgdGM0LrQuNC5LtCk0YDQsNCz0LzQtdC90YIg0ZbQtyDQsdCw0LvQtdGC0YMgJyfQn9C10YLRgNGD0YjQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFiaWZXOE9CdjFFNjFxZDE4NEVhSmpzdk90clhyUnJrVi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1ZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC60LLQsNGA0YLQtdGCICcnQUxMQSBCUkVWRScnLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCaLtCT0YPRgNC70ZbRgtGCLicn0JLRltC00LXQvdGB0YzQutC40Lkg0LLQsNC70YzRgScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUWpCcktXVGtDYmlTOUVqNWs0cEhiSFJEc04yRDFjYU0vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMICcn0JXQmtCh0J/QoNCV0KHQhtCvJycuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0J3QsNGD0LzQtdC90LrQvi4gMSknJ9Cn0LDRgdC4INCy0LXQu9C40LrQuNGFINGB0L/QvtC00ZbQstCw0L3RjCcnLCAyKdCQLtCfJ9GP0YbRhtC+0LvQsC4gJyfQm9GW0LHQtdGA0YLQsNC90LPQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaVVsWUtySUtzSjFpbnVDcUFPUzBNWTRMcUdybWNwX2svcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQutCy0LDRgNGC0LXRgiAo0KnRg9C60ZbQvdCwINCeLizQodC10YDQtNGO0Log0JMuLCDQqNCw0L/QvtCy0LDQuyDQni4sINCc0LDQutGB0LjQvNC10L3QutC+INCSLilcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy7Qm9Cw0LLRltC90YzRj9C6Licn0JPQsNC70L7Qvy3QvNCw0YDRiCcnOyAyKdCTLtCT0YPRgNC70ZbRgi4g0J3QvtC60YLRjtGA0L1cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJWWJOSUMyRXg2Tnh4TTh5bWJDdEwybXVQQVE0UmhNZy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ2MFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INCw0L3RgdCw0LzQsdC70YwgKCDQodC80LjQuiDQmy7Qri4s0KjQtdC60LXQu9GMINCeLtCeLikuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQk9GD0LDRgdGC0LDQstGW0L3Qvi4gJyfQoNC+0LzQsNC90YEnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWRIQnpuRG1wRS0wdld5cnlNZjg2WENrRmI4c1BfSFlfL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDYxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjCAo0KHQvNC40Log0Jsu0K4uLCDQqNC10LrQtdC70Ywg0J4u0J4uKS4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0KbRhNCw0YHQvNCw0L0uJyfQodC90ZbQttC40L3QutC4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5UFRlLUpfY1M2RFRTTzZpWkZpeGdiNWc0WnhwYXpSVC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59XTtcclxuXHJcbm15Q2FyZHMgPSBteUNhcmRzLmNvbmNhdChlbnNlbWJsZSk7XHJcblxyXG4vKiogQ09ERSAqKi9cclxuZnVuY3Rpb24gZmlsbVJlZHVjZXIoc3RhdGUgPSB7Y2FyZENvdW50OiBteUNhcmRzLmxlbmd0aCwgY2FyZHM6IG15Q2FyZHMsIGlzRGF0YUluUGxhY2U6IHRydWUsIGVycm9yOiBcIlwifSwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnSU5GT19QQUdFJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogLTEsXHJcbiAgICAgICAgICAgICAgICBjYXJkczogW10sXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnQUxMJzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI+INCj0YHRliDQstGW0LTQtdC+XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZHM6IG15Q2FyZHMsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBteUNhcmRzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnZ3JvdXAtMSc6XHJcbiAgICAgICAgICAgIGxldCBuZXdDYXJkcyA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5ncm91cCA9PT0gZ3JvdXAxKS5zbGljZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZHM6IG5ld0NhcmRzLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2dyb3VwLTInOlxyXG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMxID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDIpLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMxLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHMxLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdncm91cC0zJzpcclxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzMiA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5ncm91cCA9PT0gZ3JvdXAzKS5zbGljZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZHM6IG5ld0NhcmRzMixcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzMi5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ1NFQVJDSCc6XHJcbiAgICAgICAgICAgIGxldCBxID0gYWN0aW9uLnF1ZXJ5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGA+INCf0L7RiNGD0Lo6ICR7cX1gKTtcclxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzMyA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhcmROYW1lID0gY2FyZC5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9vbCA9IChjYXJkTmFtZS5zdGFydHNXaXRoKHEpIHx8IGNhcmROYW1lLmluY2x1ZGVzKHEpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUZXN0aW5nICR7Y2FyZE5hbWV9IG9uIHF1ZXJ5ICR7cX0sIHJlc3VsdCBpcyAke2Jvb2x9YClcclxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2FyZHM6IG5ld0NhcmRzMyxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzMy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZVxyXG4gICAgICAgICdFUlJPUidcclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGA+INCf0L7QvNC40LvQutCwYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5tc2dcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbXlDYXJkcyxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG15Q2FyZHMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2FyZFN0b3JlID0gY3JlYXRlU3RvcmUoZmlsbVJlZHVjZXIpO1xyXG5cclxuY2FyZFN0b3JlLnN1YnNjcmliZSgoKSA9PlxyXG4gICAgY29uc29sZS5sb2coXCJGaWxtc1N0b3JlIHN0YXRlIHdhcyBjaGFuZ2VkLCBudW1iZXIgb2YgY2FyZHM6IFwiICsgY2FyZFN0b3JlLmdldFN0YXRlKCkuY2FyZENvdW50KVxyXG4pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=