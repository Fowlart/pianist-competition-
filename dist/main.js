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
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  justify-content: center;
`;
const FilmInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  text-align: center;
`;
const IframeBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].iframe`
  width: ${props => props.width};
  height: 480px;
  border: solid white 3px;
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  color: white;
  transition: all 0.5s;
  background-color: black;
  font-size: 30px;
  padding-top: 6px;
  :hover {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilmWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilmInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BsFillPersonFill"], null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["FaBookOpen"], null), " ", composition), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    onClick: openVideoHandler,
    value: openVideoButtonName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["AiFillPlaySquare"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, openVideoButtonName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), showIframe ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IframeBox, {
    src: videoUrl,
    width: calculatedWidth
  }) : null));
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
const Div1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Div)`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction:column;
`;
const A = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a`
  text-align: center;
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div1, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
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
  min-height: 1000px;
`;
const MainSectionFlex = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
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
/*! exports provided: DivThinLine, ThinLineInnerDiv, ResultsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivThinLine", function() { return DivThinLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThinLineInnerDiv", function() { return ThinLineInnerDiv; });
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
  "composition": "1)М.Любарський.''Танцювальна'', 2) Д.Кабалевський. Вальс",
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
  "composition": "1)В.Гіллок ''Дзвіночки'', 2)І.Хуторянський. ''Вогнівочка-стрибунівочка''",
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
  "composition": " 1)М. Клементі. Сонатина, тв.36 №1, І ч.,2)П.Чайковський. ''Вранішня молитва''",
  "videoUrl": "https://drive.google.com/file/d/1oPUuH2qzaQULypvuy3M6Q-f7vvhZlAnx/preview",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b61345"
  },
  "name": "Аміхалакіоає Ємельян, 10 років",
  "composition": "1)О.Білаченко.''Осінній ескіз'', 2)М.Кармінський. ''Гумореска''",
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
  "composition": "1)Р.Глієр. Прелюдія до мінор;2)С.Джербашян. ''Швидкий рух''",
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
  "composition": "А.Хачатурян. \"Андантіно\"",
  "videoUrl": " https://drive.google.com/file/d/12IdAfSi_waU6lrNfUvP2H0x0WO78aMGa/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135aa"
  },
  "name": "Гукасян Ліана, 10 років",
  "composition": "Л.Хеллер. Сонатина",
  "videoUrl": " https://drive.google.com/file/d/1ktOVC3TR_AE4uRbG62OxNKVjoNJqiuPm/preview ",
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
  "composition": "1) В.Гіллок.''Bill bailey'', 2)Ю.Щуровський. ''Шарманка''",
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
  "composition": "Й.Бенда.Сонатина",
  "videoUrl": " https://drive.google.com/file/d/15u4oK4uIv923BbhwHuQxc2kb2zW4DImG/preview ",
  "group": "Номінація \"Фортепіано соло\""
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137dd"
  },
  "name": "Морозова Тетяна, 11 років ",
  "composition": "С.Шевченко \"Вечір\"",
  "videoUrl": " https://drive.google.com/file/d/1Fy-L04EAfcq7I1bRpx5pE8lydIByT3SF/preview ",
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
  "composition": " 1)Я.Сібеліус. Прелюдія ля мінор,2)І.Беркович. Прелюдія фа дієз мінор",
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
  "composition": "1)Е.Гріг.''Колискова'', 2)І.Падеревський. ''Скерцино''",
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
    "$oid": "6098c8f6683dda47f8b613ffaasd"
  },
  "name": "Шевельова Єлізавета, 20 років.",
  "composition": "1) П.Чайковський. Арія Ленського, 2) Г.Хазанова. \" Уздовж вулиці ходу я\"",
  "videoUrl": "https://www.youtube.com/embed/CWX0eRPTCYY",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b613ffaas"
  },
  "name": "Закалюжна О.Б",
  "composition": "Г.Венявський. Концертний полонез ре мажор",
  "videoUrl": "https://www.youtube.com/embed/s3clXLT34hY",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b613ffaas1"
  },
  "name": "Закалюжна О.Б",
  "composition": "Ж.Масне.\"Роздум\"",
  "videoUrl": "https://www.youtube.com/embed/gDyUCbaneBk",
  "group": "Номінація \"Концертмейстер\""
}, {
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
  "name": "Михайлова М.В.",
  "composition": "А.Солтан. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1EoES2mTrWCy9CQcqd9qu366Z1tz6IpRQ/preview",
  "group": "Номінація \"Концертмейстер\""
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b613ffaasda"
  },
  "name": "Михайлова М.В.",
  "composition": "Й. Тамарин. \"Старовинний гобелен\"",
  "videoUrl": "https://drive.google.com/file/d/1u4xJ0vK6deR2XJwGLXFh6sBRePvxGUNr/preview",
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
  "composition": "1)Дж.Вільямс, аранж.А.Теплицької.''Колискова для ангела'', 2)В.Козлов,перекл. для домри Є.Жукова. ''П'єса у стилі фламенко''",
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
        error: action.msg,
        cardCount: 1,
        cards: [],
        isDataInPlace: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzExNjMwMjMucG5nIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZm9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVndWxhckhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzdWx0c0ZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0IbQstCw0L3QvtCy0LAg0Jsu0IYucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CS0LjRiNC90LXQstGB0YzQutCwLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0JfQsNGF0L7QtNGP0LrRltC9LTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9Ca0YPQt9C90ZTRhtC+0LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QnNCw0YDRhtC10LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QntGB0YLQsNC/0YfRg9C6INCcLiDQnC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0KDQsNC50YIg0IYu0KEucG5nIiwid2VicGFjazovLy8uL3NyYy9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9DYXJkU3RvcmUuanN4Il0sIm5hbWVzIjpbIkFwcCIsImNhcmRTdG9yZSIsIkZpbG1XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiRmlsbUluZm8iLCJJZnJhbWVCb3giLCJpZnJhbWUiLCJwcm9wcyIsIndpZHRoIiwiQnV0dG9uIiwiYnV0dG9uIiwiQ2FyZCIsImhlaWdodCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJjYWxjdWxhdGVkV2lkdGgiLCJzZXRDYWxjdWxhdGVkV2lkdGgiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm5hbWUiLCJjb21wb3NpdGlvbiIsInZpZGVvVXJsIiwic2hvd0lmcmFtZSIsInNldFNob3dJZnJhbWUiLCJvcGVuVmlkZW9CdXR0b25OYW1lIiwic2V0T3BlblZpZGVvQnV0dG9uTmFtZSIsIm9wZW5WaWRlb0hhbmRsZXIiLCJXcmFwcGVyIiwibG9nbyIsIlBlcnNvbkluZm9TZWN0aW9uIiwiUGVyc29uIiwiQ29udGFpbmVyIiwiVGV4dFNlY3Rpb24iLCJJbWFnZSIsImltZyIsImltZ1VybCIsInRleHQiLCJEaXYiLCJEaXYxIiwiQSIsImEiLCJQIiwiSW5mb1BhZ2UiLCJwZXJzb24yIiwicGVyc29uMSIsInBlcnNvbjQiLCJwZXJzb241IiwicGVyc29uNyIsInBlcnNvbjgiLCJwZXJzb24zIiwicGVyc29uNiIsIkNvbW1vbldyYXBwZXIiLCJNYWluU2VjdGlvbkZsZXgiLCJNYWluU2VjdGlvbiIsImNhcmRzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImlzRGF0YUluUGxhY2UiLCJjYXJkQ291bnQiLCJzZWN0aW9uc0ZvckZpbHRlciIsIm1hcCIsImNhcmQiLCJpZCIsIiRvaWQiLCJJbnB1dCIsImlucHV0IiwiaW5wdXRDb2xvciIsIklucHV0U3R5bGUiLCJJbnB1dFdyYXBlciIsIlN0eWxlZFNwYW4iLCJzcGFuIiwiRXJyb3IiLCJXYXJuIiwiUmVndWxhckhlYWRlciIsInNlYXJjaEZpZWxkIiwidXNlUmVmIiwiZXJyb3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaGFuZGxlciIsInN0ciIsIlN0cmluZyIsImN1cnJlbnQiLCJ2YWx1ZSIsImxlbmd0aCIsImluY2x1ZGVzIiwidHlwZSIsIm1zZyIsInF1ZXJ5IiwiaGFuZGxlS2V5UHJlc3MiLCJldmVudCIsImtleSIsIkZpbHRlckNvbnRhaW5lciIsIkZpbHRlclNlY3Rpb24iLCJEaXZUaGluTGluZSIsIlN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyIiwiZ3Jvd18wIiwia2V5ZnJhbWVzIiwibGVmdCIsImdyb3dfMSIsIlRoaW5MaW5lSW5uZXJEaXYiLCJhbmltYXRpb24iLCJSZXN1bHRzRmlsdGVyIiwic2VjdGlvbnMiLCJyZWRMaW5lV2lkdGgiLCJzZXRSZWRMaW5lV2lkdGgiLCJyZWRMaW5lTGVmdCIsInNldFJlZExpbmVMZWZ0Iiwic2V0QW5pbWF0aW9uIiwibWFya2VkU2VjdGlvblJlZiIsInJlUmVuZGVyUmVkTGluIiwidGFyZ2V0IiwiY3VycmVudFNlY3Rpb25XaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImN1cnJlbnRTZWN0aW9uTGVmdCIsImNvdW50ZXIiLCJvbkZpbHRlclNlY3Rpb25DbGljayIsInNlbGVjdGVkU2VjdGlvbiIsInNlbGVjdGVkU2VjdGlvblN0cmluZyIsInNlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwicmVuZGVySW5mb1BhZ2UiLCJyZW5kZXJlZFNlY3Rpb25zIiwiZSIsImdldFdpbmRvd0RpbWVuc2lvbnMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aW5kb3ciLCJ3aW5kb3dEaW1lbnNpb25zIiwic2V0V2luZG93RGltZW5zaW9ucyIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ3JvdXAxIiwiZ3JvdXAyIiwiZ3JvdXAzIiwibXlDYXJkcyIsImNvbmNlcnRtYXN0ZXJzIiwiY29uY2F0IiwiZW5zZW1ibGUiLCJmaWxtUmVkdWNlciIsImFjdGlvbiIsIm5ld0NhcmRzIiwiZmlsdGVyIiwiZ3JvdXAiLCJzbGljZSIsIm5ld0NhcmRzMSIsIm5ld0NhcmRzMiIsInEiLCJ0b0xvd2VyQ2FzZSIsIm5ld0NhcmRzMyIsImNhcmROYW1lIiwiYm9vbCIsInN0YXJ0c1dpdGgiLCJjcmVhdGVTdG9yZSIsInN1YnNjcmliZSIsImdldFN0YXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5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QzNELEdBRFg7QUFFSDdCLGlCQUFTLEVBQUUsQ0FGUjtBQUdISixhQUFLLEVBQUUsRUFISjtBQUlIRyxxQkFBYSxFQUFFO0FBSlosT0FBUDs7QUFNSjtBQUNJLGFBQU87QUFDSEgsYUFBSyxFQUFFdUYsT0FESjtBQUVIcEYscUJBQWEsRUFBRSxJQUZaO0FBR0hDLGlCQUFTLEVBQUVtRixPQUFPLENBQUN6RCxNQUhoQjtBQUlIUixhQUFLLEVBQUU7QUFKSixPQUFQO0FBakVSO0FBd0VIOztBQUVNLE1BQU0zRSxTQUFTLEdBQUc4Six5REFBVyxDQUFDZCxXQUFELENBQTdCO0FBRVBoSixTQUFTLENBQUMrSixTQUFWLENBQW9CLE1BQ2hCeEMsT0FBTyxDQUFDQyxHQUFSLENBQVksb0RBQW9EeEgsU0FBUyxDQUFDZ0ssUUFBVixHQUFxQnZHLFNBQXJGLENBREosRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc3hcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvMTE2MzAyMy5wbmdcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge01haW5TZWN0aW9ufSBmcm9tICcuL2NvbXBvbmVudHMvTWFpblNlY3Rpb24nO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtjYXJkU3RvcmV9IGZyb20gXCIuL3N0b3JlL0NhcmRTdG9yZVwiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LlN0cmljdE1vZGU+XHJcbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17Y2FyZFN0b3JlfT5cclxuICAgICAgICAgICAgICAgIDxNYWluU2VjdGlvbi8+XHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtBaUZpbGxQbGF5U3F1YXJlLCBCc0ZpbGxQZXJzb25GaWxsLCBGYUJvb2tPcGVufSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XHJcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zXCI7XHJcblxyXG5jb25zdCBGaWxtV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgRmlsbUluZm8gPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcblxyXG5jb25zdCBJZnJhbWVCb3ggPSBzdHlsZWQuaWZyYW1lYFxyXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcclxuICBoZWlnaHQ6IDQ4MHB4O1xyXG4gIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogZGFya3JlZDtcclxuICB9YDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2hlaWdodCwgd2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xyXG4gICAgY29uc3QgW2NhbGN1bGF0ZWRXaWR0aCwgc2V0Q2FsY3VsYXRlZFdpZHRoXSA9IHVzZVN0YXRlKDY0MCk7XHJcblxyXG4gICAgLy9oYW5kbGluZyByZXNpemVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpZHRoIDwgMTAwMCkgc2V0Q2FsY3VsYXRlZFdpZHRoKHdpZHRoIC0gNTApO1xyXG4gICAgICAgIGVsc2Ugc2V0Q2FsY3VsYXRlZFdpZHRoKDY0MCk7XHJcbiAgICB9LCBbd2lkdGhdKTtcclxuXHJcbiAgICBjb25zdCBbbmFtZSxdID0gdXNlU3RhdGUocHJvcHMubmFtZSk7XHJcbiAgICBjb25zdCBbY29tcG9zaXRpb24sXSA9IHVzZVN0YXRlKHByb3BzLmNvbXBvc2l0aW9uKTtcclxuICAgIGNvbnN0IFt2aWRlb1VybCxdID0gdXNlU3RhdGUocHJvcHMudmlkZW9VcmwpO1xyXG4gICAgY29uc3QgW3Nob3dJZnJhbWUsIHNldFNob3dJZnJhbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW29wZW5WaWRlb0J1dHRvbk5hbWUsIHNldE9wZW5WaWRlb0J1dHRvbk5hbWVdID0gdXNlU3RhdGUoXCLQktGW0LTQutGA0LjRgtC4INCy0ZbQtNC10L5cIik7XHJcblxyXG4gICAgY29uc3Qgb3BlblZpZGVvSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93SWZyYW1lKCFzaG93SWZyYW1lKTtcclxuICAgICAgICBpZiAoc2hvd0lmcmFtZSkge1xyXG4gICAgICAgICAgICBzZXRPcGVuVmlkZW9CdXR0b25OYW1lKFwi0JLRltC00LrRgNC40YLQuCDQstGW0LTQtdC+XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9wZW5WaWRlb0J1dHRvbk5hbWUoXCLQl9Cw0LrRgNC40YLQuCDQstGW0LTQtdC+XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGaWxtV3JhcHBlcj5cclxuICAgICAgICAgICAgPEZpbG1JbmZvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PEJzRmlsbFBlcnNvbkZpbGwvPiA8Yj57bmFtZX08L2I+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjxGYUJvb2tPcGVuLz4ge2NvbXBvc2l0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29wZW5WaWRlb0hhbmRsZXJ9IHZhbHVlPXtvcGVuVmlkZW9CdXR0b25OYW1lfT48QWlGaWxsUGxheVNxdWFyZS8+PC9CdXR0b24+PHNwYW4+e29wZW5WaWRlb0J1dHRvbk5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIHtzaG93SWZyYW1lID8gPElmcmFtZUJveCBzcmM9e3ZpZGVvVXJsfSB3aWR0aD17Y2FsY3VsYXRlZFdpZHRofS8+IDogbnVsbH1cclxuICAgICAgICAgICAgPC9GaWxtSW5mbz5cclxuICAgICAgICA8L0ZpbG1XcmFwcGVyPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QmlMaW5rRXh0ZXJuYWx9IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLzExNjMwMjMucG5nXCI7XHJcbmltcG9ydCBwZXJzb24xIGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjIgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0JrRg9C30L3RlNGG0L7QstCwLTEucG5nXCI7XHJcbmltcG9ydCBwZXJzb24zIGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9CG0LLQsNC90L7QstCwINCbLtCGLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uNCBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/QoNCw0LnRgiDQhi7QoS5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjUgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0J7RgdGC0LDQv9GH0YPQuiDQnC4g0JwucG5nXCI7XHJcbmltcG9ydCBwZXJzb242IGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9Cc0LDRgNGG0LXQstCwLTEucG5nXCI7XHJcbmltcG9ydCBwZXJzb243IGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9CX0LDRhdC+0LTRj9C60ZbQvS0xLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uOCBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/QktC40YjQvdC10LLRgdGM0LrQsC0xLnBuZ1wiO1xyXG5cclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7bG9nb31cIik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgUGVyc29uSW5mb1NlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcblxyXG5jb25zdCBQZXJzb24gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGA7XHJcblxyXG4gICAgY29uc3QgVGV4dFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogODUwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XHJcbiAgICBgO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKDxDb250YWluZXI+PEltYWdlIHNyYz17cHJvcHMuaW1nVXJsfS8+PFRleHRTZWN0aW9uPntwcm9wcy50ZXh0fTwvVGV4dFNlY3Rpb24+PC9Db250YWluZXI+KTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5gO1xyXG5cclxuY29uc3QgRGl2MSA9IHN0eWxlZChEaXYpYFxyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmA7XHJcblxyXG5jb25zdCBBID0gc3R5bGVkLmFgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IGRhcmtyZWQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUCA9IHN0eWxlZC5kaXZgXHJcbiAgbGVmdDogNDAwcHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvUGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPFdyYXBwZXI+PERpdjE+XHJcblxyXG4gICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrYTdHdVZjMG1oSHpSNWpxMXFoVENIbmxOYTBIY1htQi92aWV3P3VzcD1zaGFyaW5nXCI+IDxCaUxpbmtFeHRlcm5hbC8+0J/QvtC70L7QttC10L3QvdGPPC9BPlxyXG4gICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFxZHlMMG1YYWZvd0k4ODhzUEpMeU03eXVoWUpOUjcwYi92aWV3P3VzcD1zaGFyaW5nXCI+IDxCaUxpbmtFeHRlcm5hbC8+XHJcbiAgICAgICAgICAgINCe0YDQs9Cw0L3RltC30LDRhtGW0LnQvdC40Lkg0LrQvtC80ZbRgtC10YIg0LrQvtC90LrRg9GA0YHRgyA8L0E+XHJcbiAgICAgICAgPEEgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZzejB1dTU2NEJsN2w5WS1icU1PXy1nTFBxVHVEQllDL3ZpZXc/dXNwPXNoYXJpbmdcIj4gPEJpTGlua0V4dGVybmFsLz7QkNGE0ZbRiNCwPC9BPlxyXG4gICAgPC9EaXYxPlxyXG4gICAgICAgIDxQPtCh0LrQu9Cw0LQg0LbRg9GA0ZY6PC9QPlxyXG4gICAgICAgIDxQZXJzb25JbmZvU2VjdGlvbj5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17YNCa0YPQt9C90ZTRhtC+0LLQsCDQni7Qni4tINCz0L7Qu9C+0LLQsCDQttGD0YDRliwg0LTQvtC60YLQvtGAINGE0ZbQu9C+0YHQvtGE0ZbRlywg0LrQsNC90LTQuNC00LDRgiDQv9C10LTQsNCz0L7Qs9GW0YfQvdC40YUg0L3QsNGD0LosINC/0YDQvtGE0LXRgdC+0YAg0LrQsNGE0LXQtNGA0LggIFxyXG4gICAgICAgICAgICAgICAgICAgINC80YPQt9C40YfQvdC+LSDRltC90YHRgtGA0YPQvNC10L3RgtCw0LvRjNC90L7Qs9C+INCy0LjQutC+0L3QsNCy0YHRgtCy0LAg0KXQsNGA0LrRltCy0YHRjNC60L7Qs9C+INCd0LDRhtGW0L7QvdCw0LvRjNC90L7Qs9C+INC/0LXQtNCw0LPQvtCz0ZbRh9C90L7Qs9C+INGD0L3RltCy0LXRgNGB0LjRgtC10YLRgyDRltC80LXQvdGWIFxyXG4gICAgICAgICAgICAgICAgICAgINCTLtCh0LrQvtCy0L7RgNC+0LTQuCwg0LfQsNGB0LvRg9C20LXQvdC40Lkg0LTRltGP0Ycg0LzQuNGB0YLQtdGG0YLQsiDQo9C60YDQsNGX0L3QuCwgIFwi0JLRltC00LzRltC90L3QuNC6INC+0YHQstGW0YLQuCDQo9C60YDQsNGX0L3QuFwiLCDQstGW0LTQt9C90LDRh9C10L3QsCDQvtGA0LTQtdC90L7QvCBcclxuICAgICAgICAgICAgICAgICAgICDQnNGW0L3RltGB0YLQtdGA0YHRgtCy0LAg0LrRg9C70YzRgtGD0YDQuCAg0KPQutGA0LDRl9C90LggXCLQl9CwINC00L7RgdGP0LPQvdC10L3QvdGPINCyINGA0L7Qt9Cy0LjRgtC60YMgINC60YPQu9GM0YLRg9GA0LggINGWINC80LjRgdGC0LXRhtGC0LIgXCIsINGB0LXQutGA0LXRgtCw0YAgXHJcbiAgICAgICAgICAgICAgICAgICAg0J3QsNGG0ZbQvtC90LDQu9GM0L3QvtGXINCy0YHQtdGD0LrRgNCw0ZfQvdGB0YzQutC+0Zcg0LzRg9C30LjRh9C90L7RlyDRgdC/0ZbQu9C60LgsINCz0L7Qu9C+0LLQsCDQkNGB0L7RhtGW0LDRhtGW0Zcg0L/RltCw0L3RltGB0YLRltCyICDQndCw0YbRltC+0L3QsNC70YzQvdC+0ZcgINCy0YHQtdGD0LrRgNCw0ZfQvdGB0YzQutC+0ZcgXHJcbiAgICAgICAgICAgICAgICAgICAg0LzRg9C30LjRh9C90L7RlyDRgdC/0ZbQu9C60LgsICDQv9GA0LXQt9C40LTQtdC90YIg0JDRgdC+0YbRltCw0YbRltGXINC/0ZbQsNC90ZbRgdGC0ZbQsi3Qv9C10LTQsNCz0L7Qs9GW0LIg0KPQutGA0LDRl9C90LgoXCJFUFRBXCIgVWtyYWluZSksINCS0ZbRhtC1LSDQv9GA0LXQt9C40LTQtdC90YIgIFxyXG4gICAgICAgICAgICAgICAgICAgINCQ0YHQvtGG0ZbQsNGG0ZbRlyDQv9GW0LDQvdGW0YHRgtGW0LIt0L/QtdC00LDQs9C+0LPRltCyINCE0LLRgNC+0L/QuCBcIkVQVEFcIiBMb25kb24pYH0vPlxyXG5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjF9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cItCX0LDQutC+0L/QtdGG0Ywg0Jsu0KEuLSDQs9C+0LvQvtCy0LAg0LbRg9GA0ZYsINC30LDRgdC70YPQttC10L3QuNC5ICDQtNGW0Y/RhyDQvNC40YHRgtC10YbRgtCyINCj0LrRgNCw0ZfQvdC4LCDQstC40LrQu9Cw0LTQsNGHLdC80LXRgtC+0LTQuNGB0YIg0JvRjNCy0ZbQstGB0YzQutC+0LPQvlxyXG4gICAgICAgICAgICAgICAgICAgINC00LXRgNC20LDQstC90L7Qs9C+INC80YPQt9C40YfQvdC+0LPQviDQu9GW0YbQtdGOINGW0LzQtdC90ZYg0KEuINCa0YDRg9GI0LXQu9GM0L3QuNGG0YzQutC+0ZcsINC/0L7Rh9C10YHQvdC40Lkg0LDQvNCx0LDRgdCw0LTQvtGAINC80YPQt9C40YfQvdC+0ZcgINC60YPQu9GM0YLRg9GA0LggINCf0L7Qu9GM0YnRllwiLz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb240fVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCLQoNCw0LnRgiDQhi7QoS4sINC60LDQvdC00LjQtNCw0YIg0L/QtdC00LDQs9C+0LPRltGH0L3QuNGFINC90LDRg9C6LCAg0L3QsNGD0LrQvtCy0LjQuSDRgdC/0ZbQstGA0L7QsdGW0YLQvdC40Log0LvQsNCx0L7RgNCw0YLQvtGA0ZbRlyDQtdGB0YLQtdGC0LjRh9C90L7Qs9C+INCy0LjRhdC+0LLQsNC90L3Rj1xyXG4gICAgICAgICAgICAgICAgICAgINGC0LAg0LzQuNGB0YLQtdGG0YzQutC+0ZcgINC+0YHQstGW0YLQuCAg0IbQvdGB0YLQuNGC0YPRgtGDICDQv9GA0L7QsdC70LXQvCDQstC40YXQvtCy0LDQvdC90Y8gINCd0LDRhtGW0L7QvdCw0LvRjNC90L7RlyAg0LDQutCw0LTQtdC80ZbRlyAg0L/QtdC00LDQs9C+0LPRltGH0L3QuNGFICDQvdCw0YPQuiDQo9C60YDQsNGX0L3QuFwiLz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb241fVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCLQntGB0YLQsNC/0YfRg9C6INCcLiDQnC4sINC00L7RhtC10L3RgiDQutCw0YTQtdC00YDQuCAg0LPRgNC4INC90LAgINC80YPQt9C40YfQvdC40YUg0ZbQvdGB0YLRgNGD0LzQtdC90YLQsNGFINCG0L3RgdGC0LjRgtGD0YLRgyAg0LzQuNGB0YLQtdGG0YLQsiAg0KDQlNCT0KNcIi8+XHJcblxyXG4gICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uN30gdGV4dD1cItCX0LDRhdC+0LTRj9C60ZbQvSDQni7Qki4sINC00L7RhtC10L3RgiDQutCw0YTQtdC00YDQuCDQtdGB0YLRgNCw0LTQvdC+0Zcg0LzRg9C30LjQutC4INCG0L3RgdGC0LjRgtGD0YLRgyAg0LzQuNGB0YLQtdGG0YLQsiAg0KDQlNCT0KNcIi8+XHJcblxyXG4gICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uOH1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PSfQktC40YjQvdC10LLRgdGM0LrQsCDQhi7Qny4sINCy0LjQutC70LDQtNCw0Ycg0LLQuNGJ0L7RlyDQutCw0YLQtdCz0L7RgNGW0ZcsINCz0L7Qu9C+0LLQsCDRhtC40LrQu9C+0LLQvtGXINC60L7QvNGW0YHRltGXIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L5cIlxyXG4gICAgICAgICAgICAgICAgICAgINCg0ZbQstC90LXQvdGB0YzQutC+0LPQviDQvNGD0LfQuNGH0L3QvtCz0L4g0YTQsNGF0L7QstC+0LPQviDQutC+0LvQtdC00LbRgyDQoNCU0JPQoycvPlxyXG5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjN9IHRleHQ9e2DQhtCy0LDQvdC+0LLQsCDQmy7Qhi4sINCy0LjQutC70LDQtNCw0Ycg0L/QtdGA0YjQvtGXINC60LDRgtC10LPQvtGA0ZbRlyDQmtCXIFwi0JvRg9GG0YzQutCwINC80YPQt9C40YfQvdCwICDRiNC60L7Qu9CwIDNcImB9Lz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb242fVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCLQnNCw0YDRhtC10LLQsCDQli7Qny4sINGB0YLQsNGA0YjQuNC5INCy0LjQutC70LDQtNCw0YcsINC30LDQstGW0LTRg9GO0YfQsCDRhNC+0YDRgtC10L/RltCw0L3QvdC40Lwg0LLRltC00LTRltC70L7QvCDQoNGW0LLQvdC10L3RgdGM0LrQvtGXINC00LjRgtGP0YfQvtGXINC80YPQt9C40YfQvdC+0Zcg0YjQutC+0LvQuCDihJYxINGW0LzQtdC90ZYg0JwuINCb0LjRgdC10L3QutCwXCIvPlxyXG4gICAgICAgIDwvUGVyc29uSW5mb1NlY3Rpb24+XHJcbiAgICA8L1dyYXBwZXI+KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7UmVzdWx0c0ZpbHRlcn0gZnJvbSBcIi4vUmVzdWx0c0ZpbHRlclwiO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7UmVndWxhckhlYWRlcn0gZnJvbSBcIi4vUmVndWxhckhlYWRlclwiO1xyXG5pbXBvcnQge0luZm9QYWdlfSBmcm9tIFwiLi9JbmZvUGFnZVwiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vMTE2MzAyMy5wbmdcIjtcclxuXHJcbmNvbnN0IENvbW1vbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7bG9nb31cIik7XHJcbiAgbWluLWhlaWdodDogMTAwMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTWFpblNlY3Rpb25GbGV4ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5TZWN0aW9uID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNhcmRzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2FyZHMpO1xyXG4gICAgY29uc3QgaXNEYXRhSW5QbGFjZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzRGF0YUluUGxhY2UpO1xyXG4gICAgY29uc3QgY2FyZENvdW50ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2FyZENvdW50KTtcclxuICAgIGNvbnN0IHNlY3Rpb25zRm9yRmlsdGVyID0gW2DQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlwiYCwgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXCJgLCBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFwiYCxg0KPRgdGWINCy0ZbQtNC10L5gLGDQn9GA0L4g0LrQvtC90LrRg9GA0YFgXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb21tb25XcmFwcGVyPlxyXG4gICAgICAgICAgICA8UmVndWxhckhlYWRlciBjYXJkQ291bnQ9e2NhcmRDb3VudH0vPlxyXG4gICAgICAgICAgICA8UmVzdWx0c0ZpbHRlciBzZWN0aW9ucz17c2VjdGlvbnNGb3JGaWx0ZXJ9Lz5cclxuICAgICAgICAgICAge2lzRGF0YUluUGxhY2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8TWFpblNlY3Rpb25GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXJkcy5tYXAoY2FyZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjYXJkLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1VybD17Y2FyZC52aWRlb1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvc2l0aW9uPXtjYXJkLmNvbXBvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXJkLmlkLiRvaWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICApKX08L01haW5TZWN0aW9uRmxleD4pIDogKDxJbmZvUGFnZS8+KX08L0NvbW1vbldyYXBwZXI+KTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtBaU91dGxpbmVGaWxlU2VhcmNoLCBIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB3aWR0aDogMTUlO1xyXG4gIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGJvcmRlcjogc29saWQgZGFya3JlZCAycHg7XHJcbiAgICBjb2xvcjogZGFya3JlZDtcclxuICB9YDtcclxuXHJcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmlucHV0Q29sb3IgfHwgXCJwYWxldmlvbGV0cmVkXCJ9O1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IElucHV0U3R5bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0V3JhcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogNjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogd2hpdGU7XHJcbmA7XHJcblxyXG5jb25zdCBFcnJvciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7YFxyXG5cclxuY29uc3QgV2FybiA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6IHllbGxvdztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7YFxyXG5cclxuZXhwb3J0IGNvbnN0IFJlZ3VsYXJIZWFkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hGaWVsZCA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5lcnJvcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcclxuICAgICAgICBsZXQgc3RyID0gU3RyaW5nKHNlYXJjaEZpZWxkLmN1cnJlbnQudmFsdWUpO1xyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoIDwgMyB8fCBzdHIuaW5jbHVkZXMoXCIgXCIpKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIkVSUk9SXCIsIG1zZzogXCLQkdGD0LTQsdGMINC70LDRgdC60LAg0LLQstC10LTRltGC0Ywg0LHRltC70YzRiNC1IDMg0YHQuNC80LLQvtC70ZbQsiDRliDQvdC1INCy0LjQutC+0YDQuNGB0YLQvtCy0YPQudGC0LUg0L/RgNC+0LHRltC7XCJ9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJTRUFSQ0hcIiwgcXVlcnk6IHN0cn0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgaGFuZGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxJbnB1dFdyYXBlcj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuPjxBaU91dGxpbmVGaWxlU2VhcmNoLz7Qn9C+0YjRg9C6INCy0ZbQtNC10L4g0L/QviDQv9GA0ZbQt9Cy0LjRidGDINGD0YfQsNGB0L3QuNC60LAgPC9TdHlsZWRTcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc30gcmVmPXtzZWFyY2hGaWVsZH0gdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00ZbRgtGMINC/0YDRltC30LLQuNGJ0LUg0YPRh9Cw0YHQvdC40LrQsC4uLlwiIGlucHV0Q29sb3I9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCJcIiBvbkNsaWNrPXtoYW5kbGVyfT7Qn9C+0YjRg9C6PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvSW5wdXRXcmFwZXI+XHJcbiAgICAgICAgICAgIHtlcnJvciAhPT0gXCJcIiA/IDxFcnJvcj48SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPntlcnJvcn08SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPjwvRXJyb3I+IDogbnVsbH1cclxuICAgICAgICAgICAge3Byb3BzLmNhcmRDb3VudCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICA8V2Fybj48SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPtCy0ZbQtNC10L4g0L3QtSDQt9C90LDQudC00LXQvdGWPEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz48L1dhcm4+IDogbnVsbH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge0ZhRm9sZGVyLCBGYVVuaXZlcnNpdHl9IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuXHJcbmNvbnN0IEZpbHRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO2A7XHJcblxyXG5jb25zdCBGaWx0ZXJTZWN0aW9uID0gc3R5bGVkKEZpbHRlckNvbnRhaW5lcilgXHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEaXZUaGluTGluZSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBncmF5IHNvbGlkIDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGhlaWdodDogMiU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2U7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRSZXN1bHRzRmlsdGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IGdyb3dfMCA9IGtleWZyYW1lc2BcclxuICAwJSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XHJcbiAgfVxyXG4gIDAlIHtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy5sZWZ0fTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBncm93XzEgPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xyXG4gIH1cclxuICAwJSB7XHJcbiAgICBsZWZ0OiAxcHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH07XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBUaGluTGluZUlubmVyRGl2ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XHJcbiAgbGVmdDogJHtwcm9wcyA9PiBwcm9wcy5sZWZ0fTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBoZWlnaHQ6IDElO1xyXG4gIGFuaW1hdGlvbjogJHtwcm9wcyA9PiAocHJvcHMuYW5pbWF0aW9uICUgMiA9PT0gMCkgPyBncm93XzAgOiBncm93XzF9IDAuNXMgbGluZWFyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlc3VsdHNGaWx0ZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2VjdGlvbnMsXSA9IHVzZVN0YXRlKHByb3BzLnNlY3Rpb25zKTtcclxuXHJcbiAgICBjb25zdCBbcmVkTGluZVdpZHRoLCBzZXRSZWRMaW5lV2lkdGhdID0gdXNlU3RhdGUoXCIxMHB4XCIpO1xyXG4gICAgY29uc3QgW3JlZExpbmVMZWZ0LCBzZXRSZWRMaW5lTGVmdF0gPSB1c2VTdGF0ZShcIjEwcHhcIik7XHJcbiAgICBjb25zdCBbYW5pbWF0aW9uLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICBjb25zdCBtYXJrZWRTZWN0aW9uUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gICAgLy9oYW5kbGluZyByZWRMaW5lIG9uIHJlc2l6ZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZVJlbmRlclJlZExpbih7dGFyZ2V0Om1hcmtlZFNlY3Rpb25SZWYuY3VycmVudH0pXHJcbiAgICB9LCBbd2lkdGhdKTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVSZW5kZXJSZWRMaW4oZXZlbnQpIHtcclxuICAgICAgICBtYXJrZWRTZWN0aW9uUmVmLmN1cnJlbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTZWN0aW9uV2lkdGggPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTZWN0aW9uTGVmdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gMTA7XHJcbiAgICAgICAgc2V0UmVkTGluZVdpZHRoKGN1cnJlbnRTZWN0aW9uV2lkdGggKyBcInB4XCIpO1xyXG4gICAgICAgIHNldFJlZExpbmVMZWZ0KGN1cnJlbnRTZWN0aW9uTGVmdCArIFwicHhcIik7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBhbmltYXRpb24gKyAxO1xyXG4gICAgICAgIHNldEFuaW1hdGlvbihjb3VudGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkZpbHRlclNlY3Rpb25DbGljayhzZWxlY3RlZFNlY3Rpb24sIGV2ZW50KSB7XHJcbiAgICAgICAgcmVSZW5kZXJSZWRMaW4oZXZlbnQpO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFNlY3Rpb25TdHJpbmcgPSBzZWxlY3RlZFNlY3Rpb24uc2VjdGlvbjtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFNlY3Rpb25TdHJpbmcpO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRTZWN0aW9uU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGNhc2UgYNCj0YHRliDQstGW0LTQtdC+YDpcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIkFMTFwifSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImA6XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJncm91cC0xXCJ9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFwiYDpcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTJcIn0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcImA6XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJncm91cC0zXCJ9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJJbmZvUGFnZShldmVudCkge1xyXG4gICAgICAgIHJlUmVuZGVyUmVkTGluKGV2ZW50KTtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJJTkZPX1BBR0VcIn0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZW5kZXJlZFNlY3Rpb25zID0gc2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXHJcbiAgICAgICAgc2VjdGlvbiA9PT0gXCLQn9GA0L4g0LrQvtC90LrRg9GA0YFcIiA/XHJcbiAgICAgICAgICAgIDxGaWx0ZXJTZWN0aW9uICBvbkNsaWNrPXtyZW5kZXJJbmZvUGFnZX0ga2V5PXtzZWN0aW9ufT4gPEZhVW5pdmVyc2l0eS8+e3NlY3Rpb259IDwvRmlsdGVyU2VjdGlvbj5cclxuICAgICAgICAgICAgOiA8RmlsdGVyU2VjdGlvbiAgcmVmPXttYXJrZWRTZWN0aW9uUmVmfSBvbkNsaWNrPXsoZSkgPT4gb25GaWx0ZXJTZWN0aW9uQ2xpY2soe3NlY3Rpb259LCBlKX0ga2V5PXtzZWN0aW9ufT4gPEZhRm9sZGVyLz57c2VjdGlvbn08L0ZpbHRlclNlY3Rpb24+XHJcbiAgICApKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTdHlsZWRSZXN1bHRzRmlsdGVyV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJDb250YWluZXIgY2hpbGRyZW49e3JlbmRlcmVkU2VjdGlvbnN9Lz5cclxuICAgICAgICAgICAgPC9TdHlsZWRSZXN1bHRzRmlsdGVyV3JhcHBlcj5cclxuICAgICAgICAgICAgPERpdlRoaW5MaW5lPjxUaGluTGluZUlubmVyRGl2IHdpZHRoPXtyZWRMaW5lV2lkdGh9IGxlZnQ9e3JlZExpbmVMZWZ0fSBhbmltYXRpb249e2FuaW1hdGlvbn0vPjwvRGl2VGhpbkxpbmU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9CG0LLQsNC90L7QstCwINCbLtCGLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0JLQuNGI0L3QtdCy0YHRjNC60LAtMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9CX0LDRhdC+0LTRj9C60ZbQvS0xLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0JrRg9C30L3RlNGG0L7QstCwLTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/QnNCw0YDRhtC10LLQsC0xLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0J7RgdGC0LDQv9GH0YPQuiDQnC4g0JwucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/QoNCw0LnRgiDQhi7QoS5wbmdcIjsiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93RGltZW5zaW9ucygpIHtcclxuICAgIGNvbnN0IHsgaW5uZXJXaWR0aDogd2lkdGgsIGlubmVySGVpZ2h0OiBoZWlnaHQgfSA9IHdpbmRvdztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VXaW5kb3dEaW1lbnNpb25zKCkge1xyXG4gICAgY29uc3QgW3dpbmRvd0RpbWVuc2lvbnMsIHNldFdpbmRvd0RpbWVuc2lvbnNdID0gdXNlU3RhdGUoZ2V0V2luZG93RGltZW5zaW9ucygpKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgICAgICAgc2V0V2luZG93RGltZW5zaW9ucyhnZXRXaW5kb3dEaW1lbnNpb25zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB3aW5kb3dEaW1lbnNpb25zO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xyXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0JykpO1xyXG4iLCJpbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCdcclxuXHJcbmNvbnN0IGdyb3VwMSA9IGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlwiYDtcclxuY29uc3QgZ3JvdXAyID0gYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXCJgO1xyXG5jb25zdCBncm91cDMgPSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFwiYDtcclxuXHJcbmxldCBteUNhcmRzID0gW3tcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JDQs9GA0LDRgtGW0L3QsCDQodGC0LDQvdGW0YHQu9Cw0LIsIDkg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCT0LvRltC90LrQsC4gJyfQn9C+0YfRg9GC0YLRjycnLCAgICAgIDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0KLQsNC90L7QuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOTR5dF9zS0M1RXQzcjQ5ekNFUnNkQlplRFFnWS1HX2kvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMDhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0LDQu9GW0LPRg9GA0LAg0JLQsNGA0LLQsNGA0LAsIDkg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC7Qm9C10LzRltGI0LrQvi4gJyfQmtC+0LvQvtC80LjQudC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWM2aFRJcURsLWNBRjNCcjNsMWMydXdxRlpzTFZTUFR2L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzA5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktCw0LvRltCz0YPRgNCwINCS0LDRgNCy0LDRgNCwLCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIu0JzQsNC60YHRltC80L7Qsi4gJyfQl9Cw0LTQt9C10YDQutCw0LvQu9GPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE1WXI2UXhtNHJzdERPTVUydkduNUp3cTVWZlVwTjJTRC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQsNGB0LjQu9C10LLRgdGM0LrQsCDQpdGA0LjRgdGC0LjQvdCwLDcg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JPRltC70LvQvtC6Licn0KHQsNC80L7RgtC90Y8g0LHQsNC70YzQvdCwINC30LDQu9CwJycsICAgMinQoi7QoNC+0YHRgtC40LzQsNGI0LXQvdC60L4uJyfQp9Cw0LrQu9GD0L0nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUd0eFVLdVVrTEtBbmg1b0NmOUZsdWlVVFFvSkNUYk1NL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzBiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktC+0LvQuNC90LXRhtGMINCe0LvQtdC60YHQsNC90LTRgCwgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmy7QmtC+0LvQvtC00YPQsS4gJyfQkNGA0LrQsNC9JycsMinQpC7QoNC40LHRltGG0YzQutC40LkuICcn0KDQtdCz0L7RgtGD0YjQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfQ09QZVB6d2RnUzdVX09qRXhPcHY4bm96MW1pVGU4Yy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQsNC70LDQs9Cw0L0g0JrQsNGC0LXRgNC40L3QsCwgOSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuINCi0LXQvNCwINC3INCy0LDRgNGW0LDRhtGW0Y/QvNC4LCAyKdCTLtCa0YPRiNC90LDRgNC10L3QutC+LiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvQmxVZlhXcWxoNXVEc0RGQ1hiSGdjN1hHaUFKR2JMSC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQtdGA0LDRgdC40LzQtdC90LrQviDQntC70LXQutGB0LDQvdC00YDQsCwgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JIu0KDQsNGH0LrQvtCy0YHRjNC60LjQuS4g0KLQvtC60LDRgtC40L3QsC4gMinQki7QmtC+0YHQtdC90LrQvi4gJyfQnNC10LvQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xREduc1NRR2xCdThYX29EUHQzWUt0S21pVnpWLUczcUovcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0L7Qu9C+0LTQvtCy0YHRjNC60LAg0KHQvtGE0ZbRjywgNyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQhi7QktCw0L3RhdCw0LvRjC7QoNC+0L3QtNC+LCAyKdCcLtCU0YDQtdC80LvRjtCz0LAuJyfQktC10YHQtdC70LAg0LPRgNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEyS3V0ai1vd3BzcjhoZWxybV9rRlpoMXlRd01qRUM3QS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQvtC70YPQsSDQkNC70ZbQvdCwLCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwg0IbRhy4sIDIp0JEu0JTQstCw0YDRltC+0L3QsNGBLiDQn9GA0LXQu9GO0LTRltGPXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdXdoS01LZEpaSWhSem5NM1ZVNW1UcUV1S3h4VGVzYU8vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0YDQuNCz0L7RgCfRlNCy0LAg0JrQsNGC0LXRgNC40L3QsCwgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQoNCw0L3QvtC6JycsICAgMinQhi7QmtC+0YDQvtC70YzQutC+0LLQsC4nJ9CT0L7RgNC+0LHRh9C40LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFpTXY1THdZVjltMnd6LVNKTUdueGZVcUlSVDlNX0V3L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzExXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNCw0L3RjtC6INCE0LvQuNC30LDQstC10YLQsCwgNyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7Qm9GO0LHQsNGA0YHRjNC60LjQuS4nJ9Ci0LDQvdGG0Y7QstCw0LvRjNC90LAnJywgMikg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5LiDQktCw0LvRjNGBXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdlRrX21BQl9FQ2g5VkR3UjZFTWFzWTF5MjFLV3JTWUgvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0YDQvtCz0LDQvSAg0JzRltC70LDQvdCwLCA1INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCc0LDQudGU0YAuICcn0JLQtdGB0LXQu9CwINCz0YDQsCcnLCAyKdCULtCR0LDRiNGC0LXQudC9LiAnJ9CS0LDQu9GM0YEg0YHQu9C+0L3QtdC90Y/RgicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWGIwZ0lnRnlDbkx1Q3hqbjVrbGFlUTBMbDlEc2tSUHovcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0YDQvtC30LTQvtCy0LAg0ITQu9C40LfQsNCy0LXRgtCwLCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUu0JzQtdC90YPQtdGCLiAyKdCTLtCa0LvQsNGB0YHQtdC9LiDQn9C+0LvRjNC60LBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyNV8xOHBSN0JMeERTREVuTUQ3ckhOR2pSOXppRWlHbi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxNFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JfQsdGW0YAg0JzQsNGA0ZbRjywgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7Qk9C10LTRltC60LUuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCAgICDQhiDRhy4sIDIp0KAu0KjRg9C80LDQvS4nJ9Cf0LXRgNGI0LAg0LLRgtGA0LDRgtCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfN3FuM2ZUdXRkS0djR2RiZ3YxM3JLb2tKOGp4Z2szYS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjNC60ZbQsiDQntC70LXQutGB0LDQvdC00YDQsCwgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QlNGW0LDQsdC10LvQu9GWLiDQodC60LXRgNGG0L4sICAyKdCeLtCT0LXQtNGW0LrQtS4gJyfQnNCw0LvQtdC90YzQutCwINC/J9GU0YHQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdlllVmtSYVYxbWIzM3VKMURHTXIyMHFvaWtGQ3I5QXkvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQnNCw0YDRltCw0LwsIDgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCc0LDQudC60LDQv9Cw0YAuICcn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0YHQvtC70Ywg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJSbExNSmpvV3dUVnVwN192Vk1ENEQzbmwyWS1sc3BPL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JzQsNGA0ZbQsNC8LCA4INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JrQuNGA0LXQudC60L4uICcn0KHRgtGA0LjQsS3RgdC60L7QuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSW1wUHE5bmNiTWg1VDFTY0FIZkRtejU3QkRsTFpDRjIvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMThcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0YHRg9C/0L7QstCwINCQ0LvRltGB0ZbRjywgOCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0KDQtdC50L3QtdC60LUuICcn0JPQsNCy0L7RgicnLCAyKdCZLtChLtCR0LDRhS4gJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDQtNC+INC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwZzlDQ0pvWFJ6ZUc4Q2lGaGduRUJ6VFFCTElXRGFuQS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtCy0LDQu9C10L3QutC+INCS0LDRgNCy0LDRgNCwLCA4INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCT0LXRgtCw0LvQvtCy0LAuJyfQoNCw0L3QvtC6INCyINC70ZbRgdGWJycsICAyKdCSLtCf0L7QtNCy0LDQu9CwLiAnJ9Ca0LDQv9GA0LjQt9GD0LvRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUzM4X29FQ09CbzdLR0RWMWF6SlV4M3pPWXdnUUVRSVYvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7RgNC10L3RltCy0YHRjNC60LAg0JTQsNGAJ9GPLCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoC7QktCw0L3QtNCw0LsuJyfQktC+0LTQvtCz0YDQsNC5JycsICAgICAgICAgMinQny7Ql9Cw0YXQsNGA0L7Qsi4nJ9CX0L3QsNC50L7QvNC40Lkg0YHQuNC70YPQtdGCJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5Q0F6UENhV3JBTl9TV3phSkZkRXB4UElPUXctcmZMVS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGB0YLQtdC90LrQviDQr9GA0L7RgdC70LDQstCwLCA3INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JrQvtGB0LXQvdC60L4uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNkZFljb3lnVGN0b2FiR1FGN3BUMnBvUnZDdXBWR19jL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzFjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0YHRgtC10L3QutC+INCv0YDQvtGB0LvQsNCy0LAsIDcg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QmdGU0L3RgdC10L0uJyfQp9Cw0YDRltCy0L3QuNC5INGC0LDQvdC+0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXVCMjliVFBFaVlkdWdKZkxPWmw0U1FHckZZOW5RcHItL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzFkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9Cw0YLQutC+0LLRgdGM0LrQsCDQhNC70LjQt9Cw0LLQtdGC0LAsIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQvtGB0LXQvdC60L4uINCS0LDQu9GM0YEsICAgIDIp0J4u0JPRgNC10YfQsNC90ZbQvdC+0LIuJyfQnNGW0Lkg0LrQvtC90LjQuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNllBdy1xN2Y4RjlKQlBtZm44dEVrcEpUODFKN0VhaEEvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCb0ZbRiNC80LDQvSDQlNCw0YDQuNC90LAsIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0J/QvtC00LLQsNC70LAuJyfQnNCw0YDRiC3Qs9GA0L7RgtC10YHQuicnLCAgICAgICAgICAyKdChLtCc0LDQudC60LDQv9Cw0YAuICcn0JrQvtC70LjRgdC60L7QstCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOc1d6M1RSMFNLaVR0Y05DQUplMDU5YmhoRm9tdF9ORS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNCz0L7Qu9CwINCh0L7RhNGW0Y8sIDgg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCvLtCR0L7QsdCw0LvRltC6Licn0KHQstGP0YLQutC+0LLQsCDQv9C+0LvRjNC60LAnJzsgMinQhi7QkdC10YDQutC+0LLQuNGHLiDQodC+0L3QsNGC0LjQvdCwINGB0L7Qu9GMINC80LDQttC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFndUF4czVnX3diR3ZfdHdxaXlwbzBlOEZIT3d1bS1JaC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNC30YPRgNC10L3QutC+INCc0LDQudGPLCA4INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLiDQkdC+0LHQtdGALiAnJ9CQ0LPQtdC90YIg0KUnJywgICAgICAgICAgMinQhi7QhtC+0YDQtNCw0L0uICcn0J/QvtC70Y7QstCw0L3QvdGPINC90LAg0LzQtdGC0LXQu9C40LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSWUxV0NRcGdQdUxZZEtOeFZHdUxrZUlWbllKTlpKOVQvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDRgNGH0LXQvdC60L4g0ITQu9C40LfQsNCy0LXRgtCwLCA5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4nJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINC00L4g0LzRltC90L7RgCwgMinQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0JHQsNCx0LAg0K/Qs9CwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFaSm80R1VMWjlzZmNVdUFwRjVqeW9ISVVWX0lLQVZyZy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNGA0YfRg9C6INCc0LDQutGB0LjQvCwgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCkLiDQqNC/0ZbQvdC00LvQtdGALiDQodC+0L3QsNGC0LjQvdCwLCDRgtCyLjE1NyDihJY0XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xc0M3TVVqY2tucm5aWlo1aGZNQ1hiU3ZzMzZLQTNwcFYvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDRgNGH0YPQuiDQnNCw0LrRgdC40LwsIDgg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JPRltC70LvQvtC6LiAnJ9Ca0LDQv9GA0ZbRh9GW0ZTRgtGC0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVlkQWlodkFRa0NUOGJieVc0NHBRaTJpWmhtWDFjM0t6L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC+0YLRg9C30LrQuNC90LAg0JvRltC00ZbRjywgOSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCR0ZbQu9Cw0YfQtdC90LrQvi4gJyfQo9C60YDQsNGX0L3RgdGM0LrQuNC5INGC0LDQvdC+0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJwTzlkSEFjYlA4S2xhV1RfMW5YWFFpWmVidUQ4RjBwL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC+0YLRg9C30LrQuNC90LAg0JvRltC00ZbRjywgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCc0L7RhtCw0YDRgi4gJyfQnNC10L3Rg9C10YInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNfbXhBVTY1VnZ2dmZpUG9SUXNjS1Iwb1VEV3BIRFF0L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQndC+0LLQvtGB0ZbQu9GM0YHRjNC60LAg0JrQsNGC0LXRgNC40L3QsCwgNyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCDRgtCyLjM2LCDQhi3QhtCG0IbRhy4sIDIp0IYu0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRj1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVk3MkNGTE9NUGlid1RVUGdXT21zUUgzWUpQdmlCakRhL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQntC70YzRhdC+0LLRgdGM0LrQsCDQkNC90ZbRgtCwLCA5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0IYu0J/QsNCy0LvRltC6LiAnJ9Ch0L3RltC20LjQvdC60LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJzLVZnRk1uSVlaVm05a09qTmg2RlRsX1AwQ0FEUkIxL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQntC70YzRhdC+0LLRgdGM0LrQsCDQkNC90ZbRgtCwLCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J0uINCa0LDRgNC/0LXQvdC60L4uINCV0YLRjtC0INGB0ZYg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtTM0JxUXc0LW1zTW96bk8zTnpfaVdjNXl0bEpPRlRtL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQntGB0YLQsNC/0YfRg9C6INCa0LDRgNGW0L3QsC4gOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7Qk9GW0LvQu9C+0LogJyfQlNC30LLRltC90L7Rh9C60LgnJywgMinQhi7QpdGD0YLQvtGA0Y/QvdGB0YzQutC40LkuICcn0JLQvtCz0L3RltCy0L7Rh9C60LAt0YHRgtGA0LjQsdGD0L3RltCy0L7Rh9C60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZSQWNOMk82a3VuS1pBRnJiZ0JIc0VOaVpnOWlLczRHL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQntGF0YDRltC9INCv0YDQtdC80LAsIDgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4gJyfQndC+0LLQtdC70LAnJywgICAgICAyKdChLtCc0LDQudC60LDQv9Cw0YAuJyfQotC+0LrQsNGC0LjQvdCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6dzFKSzBKNGQ4SGstem5idi01b0RuYS1xTDNjd1JFUC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/QsNCy0LvQtdC90LrQviDQodGC0LXRhNCw0L3RltGPLCA3INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7Qm9GO0LHQsNGA0YHRjNC60LjQuS4gJyfQn9GW0YHQvdGPJycsMikg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5Licn0JrQu9C+0YPQvdC4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJbW53SmoyRGVxei1USmZ2WEFDQ3JacGlaTlQzQm5LSC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/QsNC90YzQutC+0LLQsCDQkNC90L3QsCwgOCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiAnJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINC00L4g0LzRltC90L7RgCwgICAgICAgIDIp0Jsu0KjRg9C60LDQudC70L4uICcn0IbQvdGC0LXRgNC80LXRhtC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5ckFIcjZpMTdOU2hQNXFhSW1Qbld4LXhKUWpDTU15Mi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/QsNGA0YTRjNC+0L3QvtCyINCU0LzQuNGC0YDQviwgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QktC70LDQtNC40LrRltC90LAt0JHQsNGH0LjQvdGB0YzQutCwLicn0KnQvtGB0Ywg0YHRg9C80L3QtScnLCAyKdCeLtCT0LXQtNGW0LrQtS4gJyfQotCw0L3QtdGG0YwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5EZHc1N1Jzcm1MckVfeVdTRzB1RkpYRWpXY0dxR21SL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9C+0LPQvtGA0ZTQu9C+0LIg0JDRgNGC0LXQvCwgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuICcn0JzQtdC90YPQtdGCJycsIDIp0J0u0J3QuNC20LDQvdC60ZbQstGB0YzQutC40LkuICcn0JrQvtC70L7QvNC40LnQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuZTg2aU0tTlVzNk5jaW9Cc3ZVamZRYTZNbjdjU0FSNy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/Rg9C30LDQvdC+0LLQsCDQnNCw0YDRltGPLCA5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCjLiDQk9GW0LvQu9C+0LouICcn0JrQvtGA0L7Qu9GW0LLRgdGM0LrQuNC5INC80LXQvdGD0LXRgicnLCAyKdCGLtCG0L7RgNC00LDQvS4gwqvQn9C+0LvRjtCy0LDQvdC90Y8g0L3QsCDQvNC10YLQtdC70LjQutCwwrtcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPR1NfZnF6SnZiQjdhTlByZXh3cURLNXgwbHMtMjBDQy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDQtdC30L3RltC6INCi0LXRgtGP0L3QsCwgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QotC+0YDQvtC/0L7QstCwLiDQktCw0YDRltCw0YbRltGXLCAgICAgMinQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuICcn0JzQsNC70LXQvdGM0LrQuNC5INC20L7QvdCz0LvQtdGAJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4R3hOVFR0V3JoZE91Nlk3R3VlVUFnR1h2am9MbE1CbC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDQuNCx0LDQuiDQkNC90LDRgdGC0LDRgdGW0Y8sIDgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpLtCc0LXQu9Cw0YDRgtGW0L0uJyfQoNCw0L3QvtC6JycsIDIp0Jwu0JzQsNC50ZTRgC4nJ9Cd0LXQt9Cy0LjRh9Cw0LnQvdCwINC/0YDQuNCz0L7QtNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1em1WcUZWbm5RYUlHWDdvM0gtN3ROZTBrcDFaaVV2UC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDRltC/0L3QuNC5INCR0L7Qs9C00LDQvSwgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0IYuINCR0LXRgNC60L7QstC40YcuINCS0LDRgNGW0LDRhtGW0ZcsICAgICAyKdCULiDQoNC+0YPQu9GWLicn0JIg0LrRgNCw0ZfQvdGWINCz0L3QvtC80ZbQsicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUWxyMV8tcEZBbExJaXhLa2h4Mi1aeHhFWVpoQVo5WjcvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0L7QvNCw0L3Rh9C10L3QutC+INCV0LvQuNGB0LXQuSwgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Kgu0JPRg9C90L4uJyfQnNCw0YDRiCDQvNCw0YDRltC+0L3QtdGC0L7QuicnLCAgIDIpINCeLtCT0YDQtdGH0LDQvdGW0L3QvtCyLicn0J3QtdC30LLQuNGH0LDQudC90LAg0L/RgNC40LPQvtC00LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlJLXpqcTRRaW1ETDlUTEU1QlJZdXJtdUFMMTZmU2NVL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCw0LnRh9GD0Log0K/RgNC+0YHQu9Cw0LLQsCwgOSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCiLiDQnNCw0LrRgdC40LzQvtCyLicn0JHQsNCx0LAg0K/Qs9CwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYNUM3a2ZOZDNRbG9abDBUQXZOX0FRaDAtcVh0cFNTQi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQsNC50YfRg9C6INCv0YDQvtGB0LvQsNCy0LAsIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmi7QoNC+0LvQu9GW0L0uICcnINCo0L7QutC+0LvQsNC00L3QtSDQv9C10YfQuNCy0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZ2WW1fRWREeF8tM0JSSEpNeUQzNWszb0M0RjJ0VjU2L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodGW0YLRiNCw0ZTQstCwINCX0LDRgNC10LzQsCwgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YA7IDIp0Jou0KHQu9C+0L3RltC80YHRjNC60LjQuS4gJyfQlNGO0LnQvNC+0LLQvtGH0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSDZlZFF0c1JwMF93Y3VPWVJBRWgxbGZmUnowVFh0aWIvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0ITQstCz0LXQvdGW0Y8sIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQstCw0YHQvdC10LLRgdGM0LrQuNC5Licn0JTRg9C80LrQsCcnLCAyKdCULtCQ0LvQtdC60YHQsNC90LTQtdGALiAnJ9CX0LjQvNC+0LLQsCDRgNCw0L/RgdC+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2TFc5RWVzUFBzMVNUaTZrUXBReGRFSnprM1BnbkhZai9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHRgtGA0LjQudGB0YzQutCwINCQ0LzQtdC70ZbRjywgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JIu0JrQvtGB0LXQvdC60L4uJyfQlNC+0YnQuNC6Jyc7ICAgICAgMinQni7QkdGW0LvQsNGH0LXQvdC60L4uICcn0JXQutGB0L/RgNC+0LzRgicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMGg5T05SRzJUNDJ2eEFsV3k0QVNQMHFnYThJVTAycnYvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0YLRg9C00LfQuNC90YHRjNC60LAg0ITQu9C40LfQsNCy0LXRgtCwLCA3INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy4g0JzQvtGG0LDRgNGCLiAnJ9Cc0LXQvdGD0LXRgicnLCAgICAyKdCjLiDQk9GW0LvQu9C+0LouICcn0J7RgdGW0L3QvdGW0Lkg0LXRgdC60ZbQtycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVmRzT2J1YjlaMEU3Wk0xUVlNc2Zxa2Fsam5uTFEyamUvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzM2FcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0YPRhdCw0L0g0JTRltCw0L3QsCwgOCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0KjRg9C60LDQudC70L4u0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGC0LXQvNGDINCSLtCo0LDRl9C90YHRjNC60L7Qs9C+OyAyKdCgLtCk0YPRh9GBLicn0JzQsNC70LXQvdGM0LrQtSDRgNC+0LfQsdC40YLQtSDRgdC10YDRhtC1JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHdTV1Y29DR0ZoeUVuTWgzLUlEVUotdUYwVHVqMzdVWi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQtdGA0L8n0Y/QuiDQkNCw0YDQvtC9LCA5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQhi7QkdC10YDQutC+0LLQuNGHLiDQktCw0YDRltCw0YbRltGXINC90LAg0YPQutGA0LDRl9C90YHRjNC60YMg0YLQtdC80YM7IDIp0KIu0J7RgdGC0LXQvS4gJyfQnNCw0LvQtdC90YzQutC40Lkg0LXQu9GM0YQnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVp0UWJOQkJnR21Pek1Xbm5IQUYtN19DQnNYazNMdy0yL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotC40LzRh9C10L3QutC+INCd0LDQtNGW0Y8sIDgg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCo0YLQvtCz0LDRgNC10L3QutC+LiAnJ9Cc0LXRgtC10LvQuNC6JycsIDIp0JIu0JPRltC70LvQvtC6LiAnJ9Cc0ZbRgdGP0YfQvdC1INGB0Y/QudCy0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBTOUFHSHlFRHFzdGpxQTFNaUViVGtwNWoxVXVTaHJHL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotGW0YnQtdC90LrQviDQktC10YDQvtC90ZbQutCwLCA3INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4gJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDQtNC+INC80ZbQvdC+0YAsIDIp0JsuINCo0YPQutCw0LnQu9C+LiDQktCw0YDRltCw0YbRltGXXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRnRyajlrNWpoRHhWaTV1ZmhYWTNUSGt3T0s4WTEySG0vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzM2VcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0L7QtNC+0YDQvtCy0LAg0JTQsNGP0L3QsCwgNiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QkdCw0YDQstGW0L3RgdGM0LrQuNC5LiAnJ9CX0LDQudGH0LjQuicnLCAgICAgICAgICAyKdCcLtCb0Y7QsdCw0YDRgdGM0LrQuNC5LiAnJ9Cf0LvRj9GB0L7QstCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFQQXpJQnRqRzBOZnFhelVJMjVIc1JyRlZYakx5ejJCaS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQvtC90ZbRlNCy0LjRhyDQmtGB0LXQvdGW0Y8sIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0KHQv9GW0LvRltC+0YLRli4nJ9CT0YPRhtGD0LvRj9GC0LAnJywgICAyKdCSLtCT0ZbQu9C70L7Qui4nJ9CjINGB0YLQsNGA0L7QvNGDINCS0ZbQtNC90ZYnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTE5dzN3bkhNcDZYTldTS0tyOVZKSW9ZalZJUDlNbEFPL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzQwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotGO0YLRjNC60L4g0JLQvtC70L7QtNC40LzQuNGALCA5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCa0YPQu9Cw0YMu0KHQvtC90LDRgtC40L3QsCwg0YLQsi41NSDihJYzLCAyKdCgLtCb0ZbRgdC+0LLQsC4nJ9CS0LXRgdC10LvQuNC5INC90LDRgdGC0YDRltC5JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFiZy1ISzdMcDNVd2pHazNNSVRUZEQ5ZVE3ckZkaHgxSC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0MVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KTQtdGB0LXQvdC60L4g0JDQvdC90LAsIDgg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCT0LXQtNGW0LrQtS7QodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwgIDIp0JIu0JPQsNCy0YDQuNC70ZbQvS4gJyfQmtCw0L/RgNGW0YfRh9GW0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVqcnE4WkVYQkpxX0FOZkFpWS01aktIN1JzNThmTHVDL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzQyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQp9C+0YDQvdC10Lkg0K/QvdCwLCA3INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC4g0JXQutGI0YLQtdC50L0uICcn0JrQsNC/0YDQuNC3INCz0L3QvtC80ZbQsicnOyAgMinQoS7QrtGE0LXRgNC+0LIuICcn0J3QvtC60YLRjtGA0L0nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWc2YkI3YXFXcHR3NWxMbkFpWGtsT0ZwUWw0WDBOTEtqL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzQzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQqNC60YPRgNC60L4g0KLQuNC80L7RhNGW0LksIDkg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCo0L7Qv9C10L0uICcn0JLQsNC70YzRgScnINC70Y8g0LzRltC90L7RgCwgICAgIDIp0Jsu0KjRg9C60LDQudC70L4uICcn0JLQtdGB0LXQu9CwINC80L7Qt9Cw0ZfQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFlSko0NFpiZ1RyVVRkSC10QlBLR3ljMUtfMHJyeWo0Xy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0NFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0K7RgNGH0YPQuiDQr9C90LAsIDcg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCcLiDQmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwLCDRgtCyLjM2IOKEljEsINCGINGHLiwyKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuICcn0JLRgNCw0L3RltGI0L3RjyDQvNC+0LvQuNGC0LLQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb1BVdUgycXphUVVMeXB2dXkzTTZRLWY3dnZoWmxBbngvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNDVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCQ0LzRltGF0LDQu9Cw0LrRltC+0LDRlCDQhNC80LXQu9GM0Y/QvSwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0JHRltC70LDRh9C10L3QutC+Licn0J7RgdGW0L3QvdGW0Lkg0LXRgdC60ZbQtycnLCAyKdCcLtCa0LDRgNC80ZbQvdGB0YzQutC40LkuICcn0JPRg9C80L7RgNC10YHQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xemZxa3lHNkJwWjNfMVhYZGZfRlZZT1dGbXBha2pXV1AvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzQ2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkNC90YLQvtC90Y7QuiDQktCw0YDQstCw0YDQsCwgMTIg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7Qn9C70LXQudGU0LvRjC4g0KHQvtC90LDRgtC40L3QsCDRgNC1INC80LDQttC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xREplSGYzZkF1WjU1UGY2NW1NQXR3MlBjdDk2ZGZhLXQvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzQ3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkNC90YLQvtC90Y7QuiDQktCw0YDQstCw0YDQsCwgMTIg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QnNCw0LnQutCw0L/QsNGALicn0JIg0LrQvtCy0LDQu9GM0L3RlicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWxYeUt1d01fSmd4WVpsNmVXa0FzZVU2dk5hV3o3cFl6L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0OFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JHQsNCx0YfQsNC90ZbQuiDQkNC90LTRgNGW0LksIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlC7Qp9C40LzQsNGA0L7Qt9CwLiDQodC+0L3QsNGC0LjQvdCwINGB0L7Qu9GMINC80LDQttC+0YAuIDIp0K4u0JHRltC70LrQvtCy0YHRjNC60LjQuS4gJyfQoNC+0LfQtNGD0LzQuCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVIQXNOS2pjSmlCZ3hBZElMT3NqREVSSktRTXplcTdBL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0OVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JHQsNC70YPRgtCwINCQ0LvRltC90LAsIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSkg0JUu0JPRgNGW0LMuICcn0KLQsNC90LXRhtGMINC3INCZ0L7Qu9GM0YHRgtC10YDQsCcnLCAyKdCbLtCX0LDQsdCw0YDQsC4nJ9Cd0ZbRhyDRj9C60LAg0LzRltGB0Y/Rh9C90LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvWEdGM200MUstUU44WTEtV19qODVEclRqa2s4OHNRWC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCR0LDRgdC40YHRgtCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxMiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0KQu0KjQvtC/0LXQvS4g0JLQsNC70YzRgSwg0YLQsi42NCDihJYxLCAyKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjywg0YLQsi42IOKEljFcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xc1BXWlNQbjRVTUpWZGZ6NzNncmFEd2R3SXh5WGdqQlkvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzRiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkdGW0LvRltC90LrQtdCy0LjRhyDQndCw0YLQsNC70ZbRjywgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLtCb0LjRgdC10L3QutC+LiDQldC70LXQs9GW0Y8sMinQmi7Qp9C10YDQvdGWLiDQldGC0Y7QtCDihJYxINGC0LIuNzQwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUFSX1dXMENGU1NDWHpWQWZySFh1d0JBRC1fUUM4ajZXL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0Y1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JHRg9C70YzQutC+0LLRgdGM0LrQsCDQnNCw0YDQuNC90LAsIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JQu0KfRltC80LDRgNC+0LfQsC4g0KHQvtC90LDRgtCwINGB0L7Qu9GMINC80LDQttC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYm94ZHRnQWRoQklKZHRjeGR6blpIUC1xNWZhcWE1UUsvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzRkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkdGD0LvRjNC60L7QstGB0YzQutCwINCc0LDRgNC40L3QsCwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCaLtCT0LDQsdC10LsuICcn0JTQtdGA0LXQstC+INC20LjRgtGC0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmWFo2TmRzTjZ1Nzh0STZlcktFalgyb2Zlc0hCMmViaC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0LDQutGD0LvQtdC90LrQviDQkNGA0ZbQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCGLtCR0LXRgNC60L7QstC40YcuINCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRgtC10LzRgyDQs9GA0YPQt9C40L3RgdGM0LrQvtGXINC90LDRgNC+0LTQvdC+0Zcg0L/RltGB0L3RliAnJ9Ch0LLRltGC0LvRj9GH0L7QuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNkdFhvVnpqRWwxWXFWQ2RCeXhLc1pkcUVqZnQxaHM2L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0ZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQsNC60YPQu9C10L3QutC+INCQ0YDRltC90LAsIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0JTQttC+0L/Qu9GW0L0uJyfQkNGA0YLQuNGB0YIg0LXRgdGC0YDQsNC00LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHbnRpWXZMekhyVVhJc1dEZmRIcDQwLXR0NXlZdWlncS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0LDRgdC40LvRjNGU0LLQsCDQktC10YDQvtC90ZbQutCwLCAxMiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoC7Qk9C70ZbRlNGALiDQn9GA0LXQu9GO0LTRltGPINC00L4g0LzRltC90L7RgDsyKdChLtCU0LbQtdGA0LHQsNGI0Y/QvS4gJyfQqNCy0LjQtNC60LjQuSDRgNGD0YUnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFRQmd0ZGh3MklRZVRINlFFWW5LTEdCYWxYMEsydXBONC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0L7QudGC0LXQvdC60L4g0JvRltC70ZbRjywgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLiDQqNGD0LrQsNC50LvQvi4nJ9Cf0L7QvdGWJycsIDIp0J4u0KDQuNCx0LDQu9C+0LLQsC4gJyfQndC10L/QvtGB0LjQtNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLUxfa0pIdTFQcGtQR1JDSl9FZnhGTEJibWM4Zk9Pd3EvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzUyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktC+0LnRh9C10L3QutC+INCS0LvQsNC00LjRgdC70LDQsiwgMTEg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKSDQmS7QoS7QkdCw0YUu0JTQstC+0LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDRhNCwINC80LDQttC+0YA7IDIp0KQu0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0g0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXd1NWtsWEdHN0JoMmZQbFIzWWJlTWxTS1pCVDhQUm5OL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1M1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQvtGJ0LjQvdGB0YzQutC40Lkg0IbQu9C70Y8sIDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCVLtCT0YDRltCzLiDQndC+0LrRgtGO0YDQvSwgMinQnC7QoNC40LzRgdGM0LrQuNC5LdCa0L7RgNGB0LDQutC+0LIuICcn0J/QvtC70ZbRgiDQtNC20LzQtdC70Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3bGJTMEw5NTZhTlo5RDBHVEktcC1rMzl6NGxwZWhDNy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0LDQu9C10YfQtdCyINCG0LLQsNC9LCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0J7QsdGALiDQky7QkdC10Lcn0Y/Qt9C40YfQvdC+0LPQvi4gJyfQndGW0Ycg0Y/QutCwINC80ZbRgdGP0YfQvdCwJycsIDIp0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4gJyfQndC10LDQv9C+0LvRltGC0LDQvdGB0YzQutCwINC/0ZbRgdC10L3RjNC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0LVo4MnZZa1ZGMXgyTnBucUsxX3hoQWYyYld1YVBRVi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0LDQvNC30LDQu9GW0ZTQstCwINCX0LXQudC90LDQsSwgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCR0ZbQu9C+0YDRg9GBLiDQvdCw0YAu0L/RltGB0L3RjyAnJ9CR0YPQu9GM0LHQsCcnLCDQvtCx0YAu0JQu0JvRjNCy0LAt0JrQvtC80L/QsNC90ZbQudGG0Y9cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZFFxR0ZwaE9HbzBWcEdvVWQ0ejRVM2VuOUxUYzE5cGsvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9Cw0LzQt9Cw0LvRltGU0LLQsCDQl9C10LnQvdCw0LEsIDEyINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JPQsNC50LTQvS4g0JzQtdC90YPQtdGCXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVd3XzgwMEpQdkg2OVl0ak9ORUNKSDhWdFpfZVpra3lrL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1N1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPRltC70ZbQvdCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QnNC+0YbQsNGA0YLQkNGA0ZbRjzsgMinQlC7Qk9GA0LDQtNC10YHQutGWLicn0JzQvtGA0L7Qt9C40LLQvi4g0KDQtdCz0YLQsNC50LwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmM0s1MEdWY3c4a3NkWWdSTXhWNjFhZFJBRkg1UEtNdy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNThcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0L7RgNCw0Lkg0K/RgNC+0YHQu9Cw0LIsMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0KHQutC+0YDQuNC6ICcn0JzQtdC70L7QtNGW0Y8nJywgICAgICAgICAyKSDQny7QkdCw0LfQsNC70LAuICcn0J/QvtGC0ZbQuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVDYm43eFB2RWJySENwTVRobkNJajVRdGduNnJWU19mL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1OVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQvtGG0YPQu9C10L3QutC+INCS0ZbQutGC0L7RgNGW0Y8sIDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtCR0LDRhS4g0JTQstC+0LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDQu9GPINC80ZbQvdC+0YAsIDIpINCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9IOKEljIxXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTcxSUNNXzdHaHJhbzFSTjZ1ZzBYTG9STkpLb2JhUkdRL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1YVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPRg9C60LDRgdGP0L0g0JvRltCw0L3QsCwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCQLtCl0LDRh9Cw0YLRg9GA0Y/QvS4gXFxcItCQ0L3QtNCw0L3RgtGW0L3QvlxcXCJcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMklkQWZTaV93YVU2bHJOZlV2UDJIMHgwV083OGFNR2EvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiB7XHJcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1YWFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRg9C60LDRgdGP0L0g0JvRltCw0L3QsCwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy7QpdC10LvQu9C10YAuINCh0L7QvdCw0YLQuNC90LBcIixcclxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWt0T1ZDM1RSX0FFNHVSYkc2Mk94TktWam9OSnFpdVBtL3ByZXZpZXcgXCIsXHJcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxuICAgIH0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzViXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9GD0LvRj9GU0LLQsCDQhNCy0LAsIDEx0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J8uINCX0LDRhdCw0YDQvtCyLicn0JXQu9C10LPRltGPJycsIDIpINCTLtCS0LDQu9C70LXQvdCz0LDRg9C/0YIuICcn0KHQutC10YDRhtC40L3QvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJiY203Rl9CZkFlcU1FemZRaFo2ZkYzWTIxYTdyWXN3L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1Y1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPRg9GC0L3QuNC6ICDQmtGW0YDQtdC90LAsIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0KjRltGC0YLQtS4nJ9Ci0LDQvdC10YbRjCAg0LPQvdC+0LzRltCyJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbmlEcU5pQ0p1M0NMUzNFRzVCV0h1Ql9BcTd2NDVSczMvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9GD0YLQvdC40Log0JrRltGA0LXQvdCwLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCeLtCh0L7Qu9C+0LLRj9C90LXQvdC60L4uJyfQn9C+0L3RliDQsdGW0LvRjyDRhtC40YDQutGDJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaDdxMFlhWWl5NkE2czZCcHdfVHh0enJ3d1NfQXo5THgvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNC+0YDQvtGI0LXQvdC60L4g0K7Qu9GW0Y8sIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC4g0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCwg0YLQsi4zNiDihJY2LCDQhiDRhzsgMikg0IYu0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjywg0YLQsi40NiDihJYxNVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHbEZDTEMzeF8xdFpDT2ZtTmhOMG00VDBQT0pZQlRqTi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0YPQtNGW0L0g0JTQvNC40YLRgNC+LCAxMSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALNCGLdCG0IYg0YcuOyAyKdChLtCf0YDQvtC60L7RhCfRlNCyLiAnJ9Ca0LDQt9C+0YfQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeGJtNHgtVmZ6SHp1ekI0alRoYnNQaDhJYUNhOTR0dEIvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzYwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhNGA0LzQvtC70LXQvdC60L4g0JTQsNGA0LjQvdCwLCAxMiDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuINCQ0YDRltGPINGA0LUg0LzQsNC20L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1N002Q1hpeXNVZkp1dTZNLUF2Qjc3NFdlbjBBbnVaTi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCE0YDQvNC+0LvQtdC90LrQviDQlNCw0YDQuNC90LAsIDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JHRltC70LDRiC4gJyfQkdCw0YDQutCw0YDQvtC70LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoT1JmNHVWdm9XNTRwVEN4Z0syekltZ3hZeEg0N1lvby9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCX0LDQs9Cw0ZTQstGB0YzQutCwINCh0L7RhNGW0Y8sIDEyINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QmtC70LDRgdGB0LXQvSAnJ9Cc0YPQt9C40YfQvdC40Lkg0LXRgdC60ZbQtycn4oSWMSwgMinQni7QmtC40LzQu9C40LouJyfQm9C10L7QvdGC0L7QstGW0LDQvdCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdzFUUGg5SlhzQWplX0twRTlRUHA1SXYwRXVqbXZqRy0vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzYzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC90ZbQutC+0LLQsCDQnNCw0YDRltGPLCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QnNC+0YbQsNGA0YIuINCh0L7QvdCw0YLQsCDihJYxNiwg0IYg0YfQsNGB0YLQuNC90LAsICAyKdCeLtCT0YDQuNCx0L7RlNC00L7Qsi4g0JLQsNC70YzRgVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYMXZoc1RJUGtJNXppczIySkhPWHhRVURkT0JlOUE5Ry9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQktGW0YDRgdCw0LLRltGPLDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCl0L7QtNC+0YguJyfQp9C10YDQstC+0L3QsCDRiNCw0L/QvtGH0LrQsCcnLCAyKdCGLtCp0LXRgNCx0LDQutC+0LIuJyfQldC70LXQs9GW0Y8g0LrQuNGX0LLRgdGM0LrQuNGFINC/0LDQs9C+0YDQsdGW0LInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFNN0kxUUpiRmtXQlFId0sxbEhLb3lvRTMwbC1XYzEybS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCH0LLQttC10L3QutC+INCQ0LTQsCwgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli7QodC+0L3QsNGC0LjQvdCwINGB0L7Qu9GMINC80LDQttC+0YAsIDIp0Jwu0KHQutC+0YDQuNC6LiAnJ9Cd0LDRgNC+0LTQvdC40Lkg0YLQsNC90LXRhtGMJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa3BtNmswTUN0dWpnN3NQSDlkY29kWTBrejFCckdFWDkvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtCw0LzQsNC90YfQuCDQhNC70LjQt9Cw0LLQtdGC0LAsIDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0LDQu9GW0YHRgtGA0LDRgtC+0LIuJyfQmtC+0L3QuNC6INCT0L7RgNCx0L7QutC+0L3QuNC6JycsIDIp0K4u0JLQtdGB0L3Rj9C6LiAnJ9Cd0ZbQttC90ZbRgdGC0YwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFtbFdhTFlzRDhma0JRSGdkclgtUmZOQ2tkNndSclBrTy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0LDRgNCw0YjQutC10LLQuNGHINCl0YDQuNGB0YLQuNC90LAsIDExINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YDQtSDQvNGW0L3QvtGALCAyKdCcLtCU0YDQtdC80LvRjtCz0LAuICcn0KHQutC10YDRhtC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRUJHaE5JcHRKU2VpMEdaTEtwc2Z5YUloaTNVYWUwY0gvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtGW0YbQtdGA0LAg0JDQu9GW0L3QsCwgMTEg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0JTQtdCx0Y7RgdGB0ZYgJyfQoNC+0LzQsNC90YLQuNGH0L3QuNC5INCy0LDQu9GM0YEnJywgMinQkS7QpNGW0LvRjNGGLiAnJ9Ch0LrQtdGA0YbQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5vdnNvZ193NTJwekdrZkoyaFp4aWh2MzNDMmNTZjBKL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2OVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGA0L7Qu9GMINCE0LvRltC30LDQstC10YLQsCwgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0J/RltGB0L3RjyDQttCw0LnQstC+0YDQvtC90LrQsCcnOyAyKdCbLtCo0YPQutCw0LnQu9C+LiDQn9GA0LXQu9GO0LTRltGPXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtickdsOF9JaGZxbmprdlR2b1doNzltZ205cFE1a1RKL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2YVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGC0LvRj9GA0LXQstGB0YzQutCwINCu0LvRltGPLCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCZLiDQk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg0YHQvtC70Ywg0LzQsNC20L7RgCwg0IbRhy5cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRkFXSEhLUTVveDBFVEpMdnVyclJnWjJkT20xdnRGa2UvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0YLQu9GP0YDQtdCy0YHRjNC60LAg0K7Qu9GW0Y8sIDExINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiJ9CT0LDQvdC00LfRjycnLCDQvtCx0YAu0IQg0JLQtdCy0YDQuNC60LBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa0l2ZHN2SXJ4ZW84MTZkLV9NVjVuYmJjci1hT1poRXAvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0YLQvtCy0LAg0JzQsNGA0ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCa0LvRjtGH0LDRgNGM0L7Qsi4nJ9Co0YPRgNCw0LvRlCcnLCAyKdCkLtCc0LXQvdC00LXQu9GM0YHQvtC9Licn0J/RltGB0L3RjyDQsdC10Lcg0YHQu9GW0LInJywg0YLQsi4xOSDihJYyXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVkxY1dfMlppd0JFTjBZYzFLcldXbmNYMzc2emdhRDVCL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2ZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrRgNC40LLQvtCx0LDQsdC60L4g0JrRgdC10L3RltGPLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCbLtCo0YPQutCw0LnQu9C+LiAnJ9CS0LXRgdC90Y/QvdGWICDQutGA0LDQv9C70LjQvdC60LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFkSUpna0xJTzJlN2xjTnB1QVJqeG11ZHcwM3hqbmMzMi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0YDQuNCy0L7QsdCw0LHQutC+INCa0YHQtdC90ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnS7QmtCw0YDQv9C10L3QutC+LiDQldGC0Y7QtCAg0YDQtSDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUI0LUViUllPLWJjQ2pmdXBwZUhYU2h2NURRenVpOWhBL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2ZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrRg9GC0LrQvtCy0YHRjNC60LAg0JvQsNGA0LjRgdCwLCAxMiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JUu0JPRgNGW0LMuICcn0J3QvtC60YLRjtGA0L0nJywg0YLQsi41NCDihJY0LCAyKdCiLtCa0YPQu9GW0ZTQsi4gJyfQm9C10LfQs9GW0L3QutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMWNtUUJkc20yZXB3WlNfbVVKeDNncDFXNTgyWnlXZDcvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzcwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm2nQt9C+0LPRg9CxINCQ0YDRgdC10L0sIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCTLtCh0LDRgdGM0LrQvi4nJ9Cg0LXQs9GC0LDQudC8JycsIDIp0J8u0JfQsNGF0LDRgNC+0LIuJyfQodGC0LDRgNC+0LLQuNC90L3QsCDQsdCw0LvQsNC00LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExU0ZrV0Z2V25fVUdOSks3YzdaMUxsSjJOYXNNOUtzZy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCb0LDQvdGB0YzQutC40Lkg0ITQstCz0LXQvSwgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQoNCw0L3QutC+0LLQsCDQvNC+0LvQuNGC0LLQsCcnLCDRgtCyLjM5LCAyKdCGLtCR0LXRgNC60L7QstC40YcuINCi0L7QutCw0YLQsCDQu9GPINC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVm5QRkxzNXhIQ3QwVEwyc2QxRTlXV3loVEI4a0dUdWgvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzcyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9C10LLQsNC90LTRltCy0YHRjNC60LAg0JzQsNGA0YLQsCwgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQki7QkdCw0YDQstGW0L3RgdGM0LrQuNC5LiAnJ9Cj0LrRgNCw0ZfQvdGB0YzQutC40Lkg0YLQsNC90LXRhtGMJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRlZqeEFlQjNkT3pKcEFURFh5SS0xQUJ0Uml6anpqb2QvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzczXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9C10LLQsNC90LTRltCy0YHRjNC60LAg0JzQsNGA0YLQsCwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQry4g0KHRltCx0LXQu9GW0YPRgS4g0JXRgtGO0LQg0YLQsi4gNzYg4oSWMlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE4SzdyZ1J6akNxWi1fNUVXcjBFb0U1SmxuVHloZ1pTNC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCb0LXQt9CwINCQ0L3QvdCwLCAxMSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9IOKEljIwLCAyKdCfLtCX0LDRhdCw0YDQvtCyLiAnJ9Cg0L7QvdC00L4t0LPQsNC70L7QvycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVR3ZjJzSjNfOUFyM29PVG1aV0t2NnE4U01hOWZHYS1wL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3NVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JvQuNC60L7QstCwINCS0LDRgNCy0LDRgNCwLCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JIu0JPRltC70LvQvtC6LicnQmlsbCBiYWlsZXknJywgMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQqNCw0YDQvNCw0L3QutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZEU1TGNmVi1UOFFoTFhpQWZuOHN4TEVNZWN2Z1MtaE8vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9GW0LvRltC6INCc0LDRgNGW0Y8t0JzQsNCz0LTQsNC70LjQvdCwLCAxMSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0KjQvtC/0LXQvS4gJyfQkNGA0LrRg9GIINC3INCw0LvRjNCx0L7QvNCwJycg0LzRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwgMinQnC7QmtC+0LvQtdGB0YHQsC4gJyfQodC60LXRgNGG0LjQvdC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcXRpY2R1QVFRbTcyTmN5OGUtc3Q2bmtqcXdCckZTVGUvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNCw0LrQsNGA0LXQstC40Ycg0JDQvdC00YDRltC5LdCe0LvQtdC60YHQsNC90LTRgCwgMTEg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4g0KLRgNC40LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDRgNC1INC80LDQttC+0YAsIDIp0Jou0KfQtdGA0L3Rli4g0JXRgtGO0LQg4oSWNSwg0YLQsi4yOTlcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaVZ1QlBmdzRIbmNQSmtKbjJ5TlpadzhVWGxVWEpIVmMvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNCw0YbRltCx0L7RgNGB0YzQutCwINCQ0L3QvdCwLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JkuINCR0LDRhS4g0JTQstC+0LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDRgdGWINCx0LXQvNC+0LvRjCDQvNCw0LbQvtGALCAgICAyKSDQpC4g0K/QutC40LzQtdC90LrQvi4gJyfQldC70LXQs9GW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTcll0dEpGZGl6c3VCZTB5TnNLck5EZ0pVUF9BaWhhTi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LXQu9GM0L3QuNC6INCc0LjRhdCw0LnQu9C+LCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLiDRgdC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwgMinQki7QmtC+0YHQtdC90LrQvi4gJyfQlNC+0YnQuNC6JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYzBwV2pHb2dEYUVZQ1JDc2t6Y3E5VmRVbEh5LWhzaEcvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC10YDQutGD0LvQvtCy0LAg0JzQsNGA0ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQlC7Qp9GW0LzQsNGA0L7Qt9CwLtCh0L7QvdCw0YLQsCDRgdC+0LvRjCDQvNCw0LbQvtGAOyAyKSDQnC4g0JbQtdGA0LHRltC9LiDQktCw0LvRjNGBXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWo1cEVEN3dRM0FIUDBwTng5Vk80UHA4ZHJpbDlhTXpmL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3YlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQuNCz0LDQu9GO0Log0KDRltCw0L3QvdCwLCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4gJyfQmtC+0LvQvtC80LjQudC60LAnJywgICAyKdCSLtCT0ZbQu9C70L7Qui4nJ9Ca0LDRgNC90LDQstCw0Lsg0LIg0KDRltC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcDVTTU9lQmFVejBqelg4QTBsNlg0Tjl5dnR3RzB3OG0vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC40YDQs9C+0YDQvtC0INCS0YHQtdCy0L7Qu9C+0LQsMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0JrRg9C70LDRgy4g0KHQvtC90LDRgtC40L3QsCDRhNCwINC80LDQttC+0YAs0IYg0YcuOyAyKdCcLtCb0LjRgdC10L3QutC+LiAnJ9CV0LvQtdCz0ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtweHN1UkpubDN0NjRsYk84dmlWZ2ZHc3dfYU1rUlNtL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3ZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQvtGA0L7Qt9C+0LLQsCDQotC10YLRj9C90LAsIDExINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JHQtdC90LTQsC7QodC+0L3QsNGC0LjQvdCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTV1NG9LNHVJdjkyM0JiaHdIdVF4YzJrYjJ6VzRESW1HL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgICAgICBcImlkXCI6IHtcclxuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdkZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm5hbWVcIjogXCLQnNC+0YDQvtC30L7QstCwINCi0LXRgtGP0L3QsCwgMTEg0YDQvtC60ZbQsiBcIixcclxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0KjQtdCy0YfQtdC90LrQviBcXFwi0JLQtdGH0ZbRgFxcXCJcIixcclxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZ5LUwwNEVBZmNxN0kxYlJweDVwRThseWRJQnlUM1NGL3ByZXZpZXcgXCIsXHJcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxuICAgIH0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNGD0L3RgtGP0L0g0J3QsNGC0LDQu9GW0Y8sIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQtdC80LAg0Lcg0LLQsNGA0ZbQsNGG0ZbRj9C80LgsICAgICAgIDIp0Jsu0KjQuNGC0YLQtS4nJ9CG0YHQutGA0LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWak5IY1dXZ3RtYmFrVVhtcGMzaDdmaG9ONWdwczlSVi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2ZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCe0LHQvtGA0LrRltC90LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDExINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCVLtCT0YDRltCzLicn0JzQtdC70L7QtNGW0Y8nJywgICAgMinQmy7QqNGD0LrQsNC50LvQvi4gJyfQkdCw0LPQsNGC0LXQu9GMJycg4oSWNVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjaDJ3dnp4dFI3RVIyLTZpRExVZ3ZDQXF1VWl2OGRWZi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0LXQvdC00Y7RgCDQodC+0YTRltGPLCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J4u0JTQsNGA0LPQvtC80LjQttGB0YzQutC40LkuJyfQktCw0LvRjNGBJycsIDIp0Jwu0KHQutC+0YDQuNC6Licn0J3QsNGA0L7QtNC90LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFzREc2d25ncEtIY01TT2FPaV9ZbFVHa3VjYWRCQXBCSi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0LXRgNC10YLRj9GC0YzQutC+INCQ0L3QsNGB0YLQsNGB0ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS7Qk9GA0ZbQsy4gJyfQotCw0L3QtdGG0Ywg0ZbQtyDQmdC+0LvRjNGB0YLQtdGA0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwX0xndi1mTE9kM3lQQW1ObVdDZDhZTjNsU3dYSExLRy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0LXRgNC10YLRj9GC0YzQutC+INCQ0L3QsNGB0YLQsNGB0ZbRjywgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCcLtCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAg4oSWNCwg0YLQsi4zNlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEzd3NJLXNzVFB4OWVhMHFaSEZZc3ZzUDJudVBiU0RKNy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0L7Qt9C90Y/QuiDQktC10L3RltCw0LzRltC9LCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JQu0J/Rg9C70LXQvdC6LiDQodGC0LDQutC60LDRgtC+LiAyKSDQmy7QkdC10YLRhdC+0LLQtdC9LiDQktC10YHQtdC70LAt0YHRg9C80L3QsFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF2c2JjMkd2SFlBcmdnUDU3LVo1d0ZsR3djaE1wTnAzRS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0YDQvtC60L7Qv9GO0Log0JzQsNGA0LjQvdCwLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0IYu0JHRltC70LDRh9C10L3QutC+LiDQldC60YHQv9GA0L7QvNGCLiAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiDQotCw0L3QtdGG0YxcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUW45RFFMMk5ISmVPZkdIREhZd2F1WjYydmlucmZsQXkvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQoNC10YjQtdGC0L3RltC60L7QstCwINCb0Y7QtNC80LjQu9CwLCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0J4u0JHRltC70LDRh9C10L3QutC+Licn0J7RgdGW0L3QvdGW0Lkg0LXRgdC60ZbQtycnLCAyKdCeLtCf0L7Qu9GM0L7QstC40LkuJyfQn9C+0LvRjNC60LAt0LHQsNCx0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV9YZkNLOEZLMUZMbXhia0VCOFZUZGZhOTkwcUo3eFJBL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4NlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDQvtGC0LDRgCDQmtCw0YDRltC90LAsIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0JHQsNGA0LrQsNGA0L7Qu9CwJycsIDIpINCULtCf0LXRiNC10YLRgtGWLiAnJ9Cf0YDQtdGB0YLQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTdNRi0wejZ1QWttS1dscFl5U1dHSDhzYk9pWi0tbjlKL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4N1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQsNCy0YfQtdC90LrQviDQnNCw0YLQstGW0LksIDEx0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQsCDQvNGWINCx0LXQvNC+0LvRjCDQvNCw0LbQvtGALCDQhiDRhy4sIDIp0IYu0KnQtdGA0LHQsNC60L7Qsi4gJycg0JXQu9C10LPRltGPINC60LjRl9Cy0YHRjNC60LjRhSDQv9Cw0LPQvtGA0LHRltCyJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSl9IUWs2SVMyUFpQWlVQOXVZT1A2d2tRdFIzb3BvNkIvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCw0LrQstCwINCS0LDQu9C10YDRltGPLCAxMSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JvQsNC90YHQtdCy0LjRhy4nJ9Cf0YDQtdC70Y7QtNGW0Y8nJywgMinQnC7QlNCy0L7RgNC20LDQui4gJyfQlNC20LDQt9C+0LLQuNC5INC10YLRjtC0Jycg0LvRjyDQvNCw0LbQvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTF0c2RMdmsyNWJEOEZTRFlUWFhueXBSMjlna1B0eFhzL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4OVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQsNGA0YLQsNC90ZbRjyDQlNCw0LLQuNC0LCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JUu0JLQsNCz0L3QtdGALtCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCAgIDIpINCgLtCS0LDQvdC00LDQu9C7Licn0JLQvtC00L7RgdC/0LDQtCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW1yRVNZWklpUDFpV2VuR2laRFVJT2IwdXNDSkswZFQ4L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4YVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQutC+0YDQvtGF0L7QtNGM0LrQviDQhNCy0LPQtdC90ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiAnJ9CG0LLQsNGB0Ywg0LPRgNCw0ZQg0L3QsCDRh9C10LvRjNC+JycsIDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0KLQvtC60LDRgtCwJycg0YHRliDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVpZjBaX01pQVFWcHpiY3pWU2pqYnZoMWdVeGVfRTNYL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4YlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQvtC70L7QvdC10L3QutC+INCQ0L3QvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCSLtCa0L7RgdC10L3QutC+LiAnJ9Cf0LXRgtGA0YPRiNC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0Q3hwNFViWkZaZUZNcnc2RFlOaTlWWUhZU3ZZd05RSS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0L7Qu9C+0L3QtdC90LrQviDQkNC90L3QsCwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQpC4g0JHRg9GA0LPQvNGO0LvQu9C10YAuICcn0JHQsNC70LDQtNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRU9INnpod293NGFRWmZKZXMyOEx4aUlCc2g1SGJmR3UvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzhkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC+0YDQvtC60LAg0JzQsNGA0ZbRjywgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JQu0KbQuNC/0L7Qu9GWLiDQn9GA0LXQu9GO0LTRltGPINGC0LAg0YTRg9Cz0LAg0YDQtSDQvNGW0L3QvtGALCAyKdCaLtCT0YPRgNC70ZbRgi4gJyfQqNGC0L7RgNC8JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdGZwX2dCUloxZmxqLUxHcWRlNkVkeFFtS1RsZXAwalAvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzhlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodGC0LXRhtGO0Log0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDEyINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QlNC10LHRjtGB0YHRli4gJydEb2N0b3IgR3JhZHVzIGFkIFBhcm5hc3VtJycsIDIp0KQu0KjQvtC/0LXQvS4gJyfQktCw0LvRjNGBJycg4oSWOVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6eEpXeUNtczdrWmhzcE5CQWx6YWNVbkFMVzhFSkFNNy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0YLQvtGA0L7QttGD0Log0KHRgtCw0L3RltGB0LvQsNCyLCAxMiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlS7Qk9GA0ZbQsy4gJyfQn9C+0LXRgtC40YfQvdCwINC60LDRgNGC0LjQvdC60LAnJyDihJYxLCAyKdCQLtCa0L7RgS3QkNC90LDRgtC+0LvRjNGB0YzQutC40LkuICcn0J/QvtC70L7QvdC40L3QsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJ0SzB2VXJBb0lsR2JVSjVIYVVHYlFQbDF6Vm1US0tKL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5MFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQutCw0YfQtdC90LrQviDQnNCw0LnRjywgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIuINCQLiDQnNC+0YbQsNGA0YIuINCh0L7QvdCw0YLQsCAxNiDQmiA1NDUs0IbRhy47IDIp0IYu0KjQsNC80L4uJycg0JLQtdGB0L3Rj9C90LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW02WnNWYXJOUHJjZnltTzNCa3VtZEt4TEp5QlR4eDUtL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5MVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KPQvdCz0YPRgNGP0L0g0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDEyINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J4u0JPRgNC40LHQvtGU0LTQvtCyLiDQktCw0LvRjNGBLCAgICAgICAgICAyKdCcLtCh0ZbQu9GM0LLQsNC90YHRjNC60LjQuS4gJyfQodGC0YDRltC80LrQuNC5INC/0L7RgtGW0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF2MkxSVkRoRkoyelhOXzV3VnhBY2g3WDhsMFdROHJPZy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0YDRh9C10L3QutC+INCE0LLQs9C10L3RltGPLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCbLtCR0LXRgtGF0L7QstC10L0uICcn0JHQsNCz0LDRgtC10LvRjCcnLCDRgtCyLjExOVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFaUEhHUURBeWZ0b0FXMGFLT1Qyc25mYThNamdhbGNaUS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0YDRh9C10L3QutC+INCE0LLQs9C10L3RltGPLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0JHRltC70LDRiC4nJ9Ch0LrQtdGA0YbQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWgxaXNHd3ZlVzF1aVczVTJ4ZU8yV1d1Rnh2U1N2US1ML3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5NFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KTQtdC00L7RgtC+0LLQsCDQmtCw0YLQtdGA0LjQvdCwLCAxMiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEpINChLiDQkdC+0YDRgtC60LXQstC40YcuJyfQldGC0Y7QtCcnINGE0LAg0LTRltGU0Lcg0LzRltC90L7RgCwgMikg0KQu0KjQvtC/0LXQvS4gJyfQndC+0LrRgtGO0YDQvScn0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWVRQlh5NmtoTGNpNGZKTkc4QmFDTTFaRkxrS2owTlJ3L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5NVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KTQtdC00YfRg9C6INCQ0LvRltC90LAsIDExINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLiDQlNGW0LDQsdC10LvQu9GWLiDQodC+0L3QsNGC0LjQvdCwIOKEljEsINCG0IbQhi7RhzsgMinQlNC2LiDQm9Cw0YHRgi4nJyDQodCw0LzQvtGC0L3RltC5INC/0LDRgdGC0YPRhScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWpyRmJ2ZGdHMk5sVS1iNDE2LXVSMGJpckRyVy1QbklIL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5NlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KTQtdC00Y7QuiDQktC+0LvQvtC00LjQvNC40YAsIDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmi7QnC7QktC10LHQtdGALtCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGAOyAyKdCeLtCT0L7QvdGH0LDRgNGD0LouICcn0JfQtdC70LXQvdC40LknJyDRltC3INC30LHRltGA0LrQuCAnJ9CS0LXRgdC10LvQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSF9Jdzg5eGpmMW8yN1B0UF9uZVFJNzhCeVA2NXlFdlkvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzk3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpdC+0YMg0JbRg9C5LCAxMiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQny7Qhi7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9CW0L7QstGC0LXQvdGMJycsIDIp0JUu0JLQtdCy0YDQuNC6LiAnJ9CT0LDQvdC00LfRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVhad1dYdDZoUUFTdVlmdFNOcjVzVFBFcnN0RlVWNThSL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5OFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KfQuNC2INCd0ZbQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JPQsNC50LTQvSDQodC+0L3QsNGC0LAg4oSWNCwg0IbRhzsgMinQmy7QlNGM0Y/QutC+0L3QtdC90LrQvi4gJyfQn9GA0L7QsdCw0YfQtdC90L3RjyDRgyDQvNCw0LzQuCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFJVXIwaC1ONTI5MEI2S2FJbVhrSkhtU0Rpa19VYXdlL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5OVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KfRltC00LXRgNCwINCh0LDQvNGD0LXQu9GMINCj0LzQtdGFLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkgINCfLtCn0LDQudC60L7QstGB0YzQutC40LkuICcn0KHRgtCw0YDQvtCy0LjQvdC90LAg0YTRgNCw0L3RhtGD0LfRjNC60LAg0L/RltGB0LXQvdGM0LrQsCcnLiAyKSDQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuJyfQmtC70L7Rg9C90LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwTFlBbVJCWHd6SW4xeDNYSGh2THJlX0FOWkpUMnA4dy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOWFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCo0LDRgtCw0LvQvtCy0LAg0IbQu9C+0L3QsCwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQuINCT0ZbQu9C70LXRgC4gJyfQnNCw0LvQtdC90YzQutC1INGA0L7QvdC00L4nJzsgMinQki4g0JrQvtGB0LXQvdC60L4uICcn0JLQsNC70YzRgScnINGB0ZYg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFVZzU2Y2JZMUNVQmhPMS10WmZ1Y1JBdUFIYklGS3o5Yy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOWJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCo0LXQstGH0LXQvdC60L4g0JzQsNGA0LPQsNGA0LjRgtCwLCAxMCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQsNC70LDQvdC00ZbQvS4g0JLQsNGA0ZbQsNGG0ZbRlywgICAgICAgICAgMinQoi7QkdGA0LDRg9C9LiAnJ9Ci0LDQvdC10YbRjCDQstGW0YLRgNGDJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcGtCQnFmUy1wbUZ4YjVuTmRBY2g5V1hVcEdxc1V4YTgvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzljXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQqNC10L/QtdGC0YzQutC+INCe0LvQtdC60YHQsNC90LTRgCwgMTEg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQpC7QqNC+0L/QtdC9LiDQnNCw0LfRg9GA0LrQsCzRgtCyLjY3IOKEliA0LCAyKdCVLtCT0YDRltCzLiAnJ9Ci0LDQvdC10YbRjCDRltC3INCZ0L7Qu9GM0YHRgtC10YDQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZiaFZqV3JVaXRUby0tODNJNUZXTnlkUXJQQzNZR3lSL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5ZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KjRg9C80YHRjNC60LAg0J3QsNC00ZbRjywgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLicn0KLQtdC80L3QsCDQutGW0LzQvdCw0YLQsCcnLCAyKdCSLtCd0LXRg9Cz0LDRgdGW0LzQvtCyLtCh0LrQtdGA0YbQvlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrNjYtV3J5NjNTOHg3dDQ4R1dValkwZTZPMXhxZVVvdC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzOWVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCQ0YDRg9GC0Y7QvdGP0L0g0JvRltC00LAsIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg4oSWMjAsINCG0YcuOyAyKdCbLtCo0YPQutCw0LnQu9C+Licn0ITQvNC10LvRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUJqNTY4Y25SZERaTUtyTVlmTFQ4a0NiSG00eWZYYjJrL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTM5ZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JHQsNC30LjQu9GO0Log0J3QsNGC0LDQu9GW0Y8sIDE2INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQry7QodGW0LHQtdC70ZbRg9GBLiDQn9GA0LXQu9GO0LTRltGPINC70Y8g0LzRltC90L7RgCwyKdCGLtCR0LXRgNC60L7QstC40YcuINCf0YDQtdC70Y7QtNGW0Y8g0YTQsCDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUdhV2VaYktjNlNpSXVkaVlRVkJnRnhhaU9POVNFc2tBL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JHRltC70L7Qs9GD0LEg0JDQvdGC0L7QvSwgMTMg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy7QkdC10YLRhdC+0LLQtdC9LiDQm9C10LPQutCwINGB0L7QvdCw0YLQsCDRhNCwINC80ZbQvdC+0YAsINCGINGHLlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmSFVtdE1XT2pHTjlwNXhhU3JjSU92UUV1LWtvVEdhVC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCR0ZbQu9C+0LPRg9CxINCQ0L3RgtC+0L0sIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0J4u0KHRgtGA0L7Qui4gJyfQnNGW0YHRj9GH0L3QsCDRgNCw0L/RgdC+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZnFuTk9Gdk5uVlVjSTFMVVotVHFnRnpDbDVYRkVfc2kvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2EyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkdGW0YDRg9C6INCi0LDQvNGW0LvQsCwgMTQg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli7QodC+0L3QsNGC0LjQvdCwLCDRgtCyLjI24oSWMywgMinQry7QodGW0LHQtdC70ZbRg9GBLiAnJ9Cv0LvQuNC90LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0X0IyNkxQeXpRamtfYUJaeEdGV0lxOFJ6NktSQ0JuWC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCR0L7RgNC+0LLRltC60L7QstCwINCE0LvQuNC30LDQstC10YLQsCwgMTUg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCcLtCR0L7QsdC10YAuICcn0JTRltCw0LzQsNC90YLQvtCy0LAg0YDQsNC/0YHQvtC00ZbRjycnLCAyKdCkLtCh0LDQuS4gJyfQp9C+0YDQvdCwINC30LXQvNC70Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwTzFGR3FCLUs2dHRoOHBQUk1CQ2FsX3JzY2VTTXgyMC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCR0YPRgNGD0YXRltC90LAg0JrQsNGC0LXRgNC40L3QsCwgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCZLtCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDQvNGWINC80ZbQvdC+0YAsINCG0YcuLCAyKSDQoS7QndGW0LrRltGC0ZbQvS4nJ9Cd0LDRgdC/0ZbQsicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJwTEg2M1N6TlRIZU15WEhrN3JDaGVzd1NjS3U5X2NIL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQsNGI0YPRgNGW0L3QsCDQki4sIDEzINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JIu0JrQvtGB0LXQvdC60L4uICcn0J/QvtC10LzQsC3Qm9C10LPQtdC90LTQsCcnLCAyKSDQni7QodCw0YDQsNGC0YHRjNC60LjQuS4nJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXk5a3VzZ3RxWGdJZ2ZGYzE2bF81cXZnRl9KeTYydlg3L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhNlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQuNGI0L3QtdCy0YHRjNC60LAg0JDQvdC90LAsIDEzINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JYuINCR0ZbQt9C1Licn0JTQt9C40LPQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVlOLTJ5cDFvY1JWRTFSZFhxMkw3c2o5cV9BOHl2NVBPL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQuNGI0L3QtdCy0YHRjNC60LAg0JDQvdC90LAsIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0JvQsNCy0LDQu9C70LUuICcn0JzQtdGC0LXQu9C40LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2MXRGcVRGSm9qYTJPVkR2SEtUdElXUGpOUS0yTGZ4MS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYThcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0LXRgNCw0YHQuNC80YfRg9C6INCc0ZbQu9GU0L3QsCwgMTUg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC7QotCw0YDQsNCy0LXRgNC00ZbRlNCyLiAnJ9Ch0L/QvtCz0LDQtCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUFvMHdPeDUwVWNLTGFYOGdwRTNXOXQ2NURDNktwaHJNL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQtdGA0LDRgdC40LzRh9GD0Log0JzRltC70ZTQvdCwLCAxNSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCeLtCR0ZbQu9Cw0YguJyfQotCw0L3QtdGG0Ywg0LvRj9C70YzQvtC6JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeG5iZmpCbXpjbE40LXRsNnQ5RUdEbTN5akxHandwUjUvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9C+0YDQtNGW0ZTQvdC60L4g0ITQu9C40LfQsNCy0LXRgtCwLCAxOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUu0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDRgNC1INC80ZbQvdC+0YAsINCU0KLQmi3QhiwgMinQoS7QkdC+0YDRgtC60LXQstC40YcuINCf0YDQtdC70Y7QtNGW0Y8g0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW94QmU2TjNhbHRGcDNVa3RGNUZkR1lGcmRYeUhESFdmL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPRgNC10YnQsNC6INCc0LDRgNGW0Y8sIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCn0LXRgNC90ZYuINCV0YLRjtC0INC70Y8g0LzQsNC20L7RgDsgMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4nJ9CV0LvQtdCz0ZbRh9C90LjQuSDQv9GA0LXQu9GO0LQnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJd3VMcmRQYWt4SDFmNlpQZm13N2Q3dkdjaEtqb1U2bS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0LXQudC90LXQs9CwINCa0LDRgNGW0L3QsCwgMTQg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLtCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQsCDihJYxNCwg0IYg0YcuOyAyKSDQoS7QltC00LDQvdC+0LIuICcn0J/RgNC10LvRjtC0JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYzVpV0M5YjVKM1R3M09XVERLU3dNOTVDRlRGQmx5NHQvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNGP0YfRg9C6INCX0L7RgNGP0L3QsCwgMTMg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Cg0LDQvdC+0LonJywgMinQnS7QndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4gJyfQmtC+0LvQvtC80LjQudC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTc1ZySUZSZml0THZ6TTM3LVVXbmZHTmNzajA3T3VfMi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0YnRg9C6INCa0LDRgtC10YDQuNC90LAsIDE1INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0Jou0KfQtdGA0L3Rli4g0JXRgtGO0LQg4oSWMSzRgtCyLjc0MFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuc2NxUzVlMXBVd3RkSU9TT0llWEFWSFJHakZ1XzNNbi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0YnRg9C6INCa0LDRgtC10YDQuNC90LAsIDE1INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC7QqNC+0L/QtdC9Licn0JvQsNGA0LPQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVvS2VTcjdCSWVMdzBLc2pDdHAxREVESl84WGdneG5xL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0IbQstCw0L3QvtGH0LrQviDQkNC90YLQvtC90ZbQvdCwLCAxMyDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YAg0JTQotCaLdCGLCAyKSDQmi7Qp9C10YDQvdGWLiDQldGC0Y7QtCDihJY2INGC0LIuNzQwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXVUcU9SSkl4STY1dUtxNC0yUnFPWG5WdVhqb1FQS2tTL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQsNGA0LXQu9GW0L3QsCDQmtGA0ZbRgdGC0ZbQvdCwLCAxMyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEuINCR0LDRhS7Qn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINGA0LUg0LzRltC90L7RgCwg0JTQotCaLdCG0IZcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRm1oVzJPbDl0bC1mVjdST2F0ejNtRW5iMUMwVndBYngvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2IyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtCw0YDQtdC70ZbQvdCwINCa0YDRltGB0YLRltC90LAsIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JAuINCc0L7RhtCw0YDRgi4g0KHQvtC90LDRgtCwIOKEljgsINCG0YcuXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWpGdDB6a25HYTh2dlh4RFJLUW81eDFZZHpjci1JeEhSL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiM1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQsNGB0YzQutGW0LIg0JDQvdC00YDRltC5LCAxNCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCQLtCb0LXRiNCz0L7RgNC9LiDQldGC0Y7QtCDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNHVLWlVHN2wxUkV3RGtYa3ZSNmZZQmpRaVRQWkMza28vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2I0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtCw0YHRjNC60ZbQsiDQkNC90LTRgNGW0LksIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0Jou0JTQtdCx0Y7RgdGB0ZYuICcn0JzRltGB0Y/Rh9C90LUg0YHRj9C50LLQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNQTkxJOFZ2RmhLenBSd045LWlCUnVUZGRQZkp1VWUtL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQuNGA0LjQu9C+0LLQsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTMg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQoi7QkdGA0LDRg9C9LiAnJ9Co0YLQvtGA0LwsINGJ0L4g0L3QsNCx0LvQuNC20LDRlNGC0YzRgdGPJycsIDIpINCfLtCX0LDRhdCw0YDQvtCyLiAnJ9Cg0L7QvdC00L4t0LPQsNC70L7QvycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVdIai0taGFZbkU3cFd0ZkhCb3lwWG5obTdpMGluc3ZHL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiNlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtC90LTRgNCw0YLRjtC6INCQ0LvRltC90LAsIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQni7QlNGO0LHRjtC6LiDQktCw0YDRltCw0YbRltGXLCAyKSDQni7QkdGW0LvQsNGILicn0KDQvtC30LTRg9C8JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUndmU1F0VGZ3V3BMRHpZeUdmbUZ5T0tkeV9Tcks3U1ovcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2I3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0YHQtdC90LrQviDQkNC70ZbRgdCwLCAxMyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JAu0JrQsNGA0LDQvNCw0L3QvtCyLiAnJ9CX0YDRg9C50L3QvtCy0LDQvdC40Lkg0YXRgNCw0LwnJywgMinQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4g0J/RgNC10LvRjtC00ZbRjyDihJY3LCDRgtCyLjIzXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMS02a1lydFF1SFpOazVDaEFhV0x2N0lSWnprMjJXZGRoL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGH0YPQsdC10Lkg0K/RgNC+0YHQu9Cw0LIsIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQntCx0YAuINCELtCS0LXQstGA0LjQutCwLicn0JzQvtC70LTQsNCy0YHRjNC60ZYg0L3QsNGB0L/RltCy0LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5S2pLSGZJLXVpajZqM21OQ1laMjZMTFpNb0JiWWs5ci9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7Rh9GD0LHQtdC5INCv0YDQvtGB0LvQsNCyLCAxNCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCkLtCa0YPQu9Cw0YMuINCh0L7QvdCw0YLQuNC90LAg4oSWNTVcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUjdId1hwTGJPMXRpejNLek1nMzV0NE4zQm14N0FCT0wvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2JhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtGD0LvRltC60L7QstGB0YzQutCwINCa0LDRgtC10YDQuNC90LAsIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmS7QoS7QkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0YTQsCDQtNGW0ZTQtyDQvNCw0LbQvtGALCDQlNCi0Jot0IYsIDIpINChLtCR0L7RgNGC0LrQtdCy0LjRhy4g0JXRgtGO0LQg4oSWOSwg0YLQsi4xNVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6UWpzcUdwV3FXWWtlalBZTl9URy1FMG1NQThjU2otci9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDQutCw0YDQtdCy0LjRhyDQndCw0YLQsNC70ZbRjywgMTUg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDRgNC1INC80ZbQvdC+0YAsINCU0KLQmi3QhiwgMinQni7QkdC+0YDQtNGO0LPQvtCy0LAuICcn0KPQutGA0LDRl9C90YHRjNC60LjQuSDRgNC+0LzQsNC90YEnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpclZCVlMwV0R1ZldaQzJZRUI1N3VVTUxXYnc4QkxuUi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDQu9GP0YDRh9GD0Log0ITQu9GW0LfQsNCy0LXRgtCwLCAxMyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLiDQldGC0Y7QtCDihJY5LCDRgtCyLjE1LCAyKdCkLtCo0L7Qv9C10L0uJyfQk9GD0LvRj9C90LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9tMGhmVmdyYS1WU3g2WVhoSmJwWndMUmJlMGE4QkUtL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0L3QsNGB0Y7QuiDQotCw0YDQsNGBLCAxMyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J8u0JfQsNGF0LDRgNC+0LIuICcn0KLQvtC60LDRgtCwLdC/0YDQtdC70Y7QtNGW0Y8nJywgMikg0JUu0JPRgNGW0LMuICcn0J3QvtC60YLRjtGA0L0nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFnZ2h3eUgyQXgtQWVWdWVsYlNXc1Mwb0lvQXhTX3VKRC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCe0YHQu9Cw0LwgINCE0LvQuNC30LDQstC10YLQsCwgMTQg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQm9GO0YLQuNC5Jycg0ZbQtyDRhtC40LrQu9GDJyfQn9C+0YDQuCDRgNC+0LrRgycnLCAgICAgMikg0J0u0JvQsNCz0L7QtNGO0LMuICcn0KLQsNC90LPQviDQvNGA0ZbQuScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW1xNC1aQllabWxuR1B6SlkxalJfUVZyMEd6NzVhTWxYL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/QsNC90ZbQvNCw0Ygg0IbRgNC40L3QsCwgMTUg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCZLtCT0LDQudC00L0u0KHQvtC90LDRgtCwINC00L4g0LzQsNC20L7RgCAo4oSWNTApLCDQhiDRhy47IDIpINChLtCg0LDRhdC80LDQvdGW0L3QvtCyLicn0JzRg9C30LjRh9C90LjQuSDQvNC+0LzQtdC90YInJywg0YLQsi4xNiDihJY0XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWhfS1FfV3B2bWpaRnNYRTRYVF9NZGYyM3NrNEs5R1RzL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/QtdGC0YDRg9GB0Ywg0J3QsNGC0LDQu9GW0Y8sIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCb0ZbRgdGCLicn0KDQvtC80LDQvdGBJycsICAgICAyKdCVLtCT0ZbQu9C70L7Qui4nJ9CS0LDQu9GM0YEt0LXRgtGO0LQnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPMTVfQ3Vqd3R0YUYxQnhYZ1c4NDR3NkFCVVFrdWpmYi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0YDQuNGJ0LXQv9CwINCQ0L3QvdCwLCAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jwu0KjQvNGW0YLRhi4g0JTQttCw0LfQvtCy0LAg0ZbQvdCy0LXQvdGG0ZbRjyDihJYxMywgIDIpINCeLtCU0LXQstGW0YEuJyfQqdCw0YHQu9C40LLQuNC5INC00LXQvdGMJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSktNSWx1bjNSZWhFUnFLYVNIcGw2U0o2ZXl1dXEzYVcvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2MyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9GA0L7QutC+0L/Rh9GD0Log0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDE3INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JLQtdGA0LzQtdC90LjRhy4gJyfQp9C+0YDQvdC+0LHRgNC40LLRhtGWJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRk5MN2U2cWg4U09LbFV4TW9SdEE3clNZOE5oYW5sWC0vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2MzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9GA0L7QutC+0L/Rh9GD0Log0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDE3INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0KQu0KjQv9C40L3QtNC70LXRgC4g0KHQvtC90LDRgtC40L3QsCzQhtCG0IYg0YcuXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUtHTUNjTjZfQldQZGl3enJSSXVBM05keFVlSmJ3STFqL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjNFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/Rg9GH0LrQviDQodC+0YTRltGPLCAxM9GA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC4g0JTQstC+0YDQttCw0LouINCV0YLRjtC0IDIgKDIt0Lkg0LfQvtGI0LjRgiksIDIp0JIuINCS0LXRgNC80LXQvdC40YcuICcn0KfQvtGA0L3QvtCx0YDQuNCy0YbRlicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTRXZnNGdjRBbjJGYlZfdUZqaHFSRUk4Ny1JZnpRVWI4L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDQsNC00LrQvtCy0YHRjNC60LAg0JDQu9GW0L3QsCwgMTMg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JPRgNGW0LMuINCV0YLRjtC0INC/0LDQvCfRj9GC0ZYg0KQu0KjQvtC/0LXQvdCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV9hQk44SmdybUZtVmZ1VllXNHMwbGVOTll4ZlA1OVNvL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjNlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDQsNC00LrQvtCy0YHRjNC60LAg0JDQu9GW0L3QsCwgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQpC7Qm9GW0YHRgi4gJyfQodGD0LzQvdC40Lkg0YHRgtC10L8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuMm1TYVBOd3JWamxjUEFvaFZpWXJvMjRXemlrdEIwai9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0LjQsdC60ZbQvdCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxNSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JwuINCi0LXRgNC10YnRg9C6LiAnJ9Ck0YPQs9CwIExvY2tkb3duJyc7IDIp0Jwu0JHQvtCx0LXRgC4nJ9Ce0L/RltCy0L3RltGH0L3QsCDRgNCw0L/RgdC+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xc1BWRUIyVkl0X29EWk0wcG1CVVE1alVvVUJOaXZUd2UvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQoNGD0YHRgdGDINCT0LDQvdC90LAsIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCTLtCS0L7Qu9C70LXQvdCz0LDRg9C/0YIuICcn0KXQsNGA0LDQutGC0LXRgNC90LAg0L8n0ZTRgdCwINGDINGE0L7RgNC80ZYg0LXRgtGO0LTQsCcnLCAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9CV0LvQtdCz0ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFFZUZpVVhfQXZSY1JNRy00aEJBM2k4YzQ1RXNaSDltL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDRg9GJ0LjQvdGB0YzQutCwINCa0YHQtdC90ZbRjywgMTQg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCVLtCT0YDRltCzLiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMDcySk53dkVtNkNkdUFfR2VQc0FCdTVfWWs2TTAyekgvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQoNGD0YnQuNC90YHRjNC60LAg0JrRgdC10L3RltGPLCAxNCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDQtNC+INC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTkRrX2pLTzVTSGJuc2FYQVRBMS1Zd2dLZTRiQW1JZG4vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCy0LjQvdGG0LjRhtGM0LrQsCDQldC80ZbQu9GW0Y8sIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0LLQsNGB0L3QtdCy0YHRjNC60LjQuS4nJ9CU0YPQvNC60LAnJzsgMinQlC7QmtGA0LDQvNC10YAuICcn0KLQsNC90YbRjtGO0YfQuNC5INGB0LrRgNC40L/QsNC70YwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhbGd6X291a1J4VDJrUEFGeVhvWC1RaklBMzRwSUNjbS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2NcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LLQuNGA0LjQtNGO0Log0JTQtdC90LjRgSwgMTYg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPIOKEljEyLCAyKdCTLtCT0LDQu9C40L3RltC9LiAnJ9CQ0YDRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNDZHRmdIYVhMM3hIVkZady1ockhyeGs0OTc3bHJOZ2gvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC10LvRltCy0LDQvdC+0LLQsCDQkNC90L3QsCwgMTQg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0JXQu9C10LPRltGH0L3QuNC5INC/0YDQtdC70Y7QtCcnINGB0ZYg0LzRltC90L7RgCwgMinQnC7QlNCy0L7RgNC20LDQui4nJ9CU0LbQsNC30L7QstC40Lkg0LXRgtGO0LQnJyDihJY2ICgyINC30L7RiNC40YIpXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUp1Y050TzFEOTNrcUw4d29KYmtfQkppRGpkZ0d4c1E2L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQtdC80LXQvdC+0LIg0IbQstCw0L0sIDE1INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0JTQvtCz0LAuICcn0KHQvtC90LXRgicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUwwVV9Ib3VLUlA0eTNnUFpiVkxrenVteVlEMmV6RTJEL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQtdC80LXQvdC+0LIg0IbQstCw0L0sIDE1INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0JzQvtGIZdC7ZdGBLiBF0YLRjtC0IOKEljgs0YLQsi43MFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfZndZM3JrcGNJbFdqYzFSeV9ZdGlodS1vd1dwMm1nay9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LjQvNC+0L3QtdC90LrQviDQotCw0LzRltC70LAsIDEzINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtCwIOKEljE5INGC0LIuNDksINCGINGH0LDRgdGC0LjQvdCwLCAyKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkgLicn0J/RltC00YHQvdGW0LbQvdC40LonJyDQtyDRhtC40LrQu9GDICcn0J/QvtGA0Lgg0YDQvtC60YMnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFQbUVqZ09WMllZWmlSSVVCcFRESUhqdXItbHpSX2Zsdi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0L3RltCz0YPRgCDQkNC90L3QsCwgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JHQpdCw0LLQsNGI0ZYuICcn0KjRgtC+0YDQvCcnLCAyKdCkLtCh0LDQuS4g0JLQsNGA0ZbQsNGG0ZbRl1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFobV94REhPWlR6VUNTNFVaSXNvN01IWjNpYmt2QUliYi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0LXRgNC90L7QstCwINCa0YHQtdC90ZbRjywgMTQg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQhi7QkdC10YDQutC+0LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPIOKEljEwLCAyKdCVLtCT0YDRltCzLiAnJ9Cf0L7RhdGW0LQg0LPQvdC+0LzRltCyJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xakpvWThrZHplVUtsNXpVNWdMZTVkdThsaEdhbEJJWUIvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2QzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotC60LDRh9GD0Log0JLRltC60YLQvtGA0ZbRjywgIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQpC4g0JzQtdC90LTQtdC70YzRgdC+0L0uICAnJ9Cf0ZbRgdC90Y8g0LHQtdC3INGB0LvRltCyJycsIDIpINCSLiDQk9GW0LvQu9C+0LogICcn0JLQsNC70YzRgS3QtdGC0Y7QtCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUtpNUMtdGFuanh5Mk15N2taNmtXZ1lFV01BT0VZRmM5L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkNFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLRgNCw0YfRg9C6INCe0LvQtdC60YHQsNC90LTRgCwgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCfLiDQl9Cw0YXQsNGA0L7Qsi4gICcn0KDQvtC90LTQvi3Qs9Cw0LvQvtC/JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOERsTjFiNEsxc1hyZHZ2YjNBOHBIbUpGdlh3YnpZcmQvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotGA0LDRh9GD0Log0J7Qu9C10LrRgdCw0L3QtNGALCAxMyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCULtCk0ZbQu9GM0LQuICcn0J3QvtC60YLRjtGA0L0nJyDihJY1XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUwzSnhvV1ByNmp4TTVRM3B4TzBCQlgyVTRVaUZuRV9IL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkNlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KTQtdC00L7QvdGO0Log0J7Qu9C10LrRgdCw0L3QtNGALCAxMyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg4oSWMjMsINGE0LAg0LzQsNC20L7RgCwg0IbRhy47IDIp0Jku0KEu0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwIOKEljIzLCDQlNCi0Jot0IZcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaTJmdU9QVk1xUWZJTkNUMlpKYlRKWGNjejVBZmJfaDUvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpdCy0L7RgdGC0L7QstCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxMyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7Qm9GW0YHRgi7QrtC90LDRhtGM0LrQuNC5INC10YLRjtC0IOKEljIsIDIp0J4u0JrQvtC30LDRgNC10L3QutC+LdCQLtCa0L7RgS3QkNC90LDRgtC+0LvRjNGB0YzQutC40LkuICcn0J7QuSDRgtC4LCDQtNGW0LLRh9C40L3Qviwg0Lcg0LPQvtGA0ZbRhdCwINC30LXRgNC90Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHbnNBWnN1Z2RxQkxMNmhLQ0dsbGVBOFpLX3FUMThGai9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCl0YDQsNC80LXQvdC60L7QstCwINCQ0L3QsNGB0YLQsNGB0ZbRjywgMTMg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0L7RgNC+0LLRltGG0LjQvS4nJ9Cg0YPRgdCw0LvQvtC90YzQutCwJycsIDIp0Jwu0KHQutC+0YDQuNC6Licn0JbQsNGA0YLRltCy0LvQuNCy0LAg0L8n0ZTRgdCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQzB1U3BlU3liZmRhSVhZbG1Zd01yWjVKVXNkYjdSYjkvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpdC10LvQvNCw0L0g0JLRltC+0LvQtdGC0LAsIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCj0JPRltC70LvQvtC6Licn0J/Rg9GA0YXQsNGO0YfQuCDQsiDRhdC80LDRgNC60LDRhScnLCAyKdCSLtCl0L7QtNC+0YguJyfQp9C10YDQstC+0L3QsCDRiNCw0L/QvtGH0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXp1eUVHdDNjdlozc1ZqS25BM0NKVFpWTDJ2RVZnWFd5L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KjQuNCx0LDQvdC+0LLQsCDQktCw0YDQstCw0YDQsCwgMTMg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC7QqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDihJYyLCDRgtCyLjlcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcjFqVVJGS0M1NTV3S01SN0NsU3ltdFRHX0RXd3ZndlovcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2RiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQqNC40LHQsNC90L7QstCwINCS0LDRgNCy0LDRgNCwLCAxMyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINChLtCR0L7RgNGC0LrQtdCy0LjRhy7QldGC0Y7QtCDihJY3LCDRgtCyLjI5XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUtUVVlQM2dXbjRQVFRHRzFZX19GS3JJMXM1R2tYQm9PL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNkY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JDQvdGC0L7QvdGO0Log0JzQsNGA0ZbRjywgMjEg0YDRltC6XCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jwu0JzQtdGC0L3QtdGALiAnJ9CU0LLRliDQutCw0LfQutC4JycsIDIp0IYu0KjQsNC80L4uICcn0KLQvtC60LDRgtCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFBRlZFRzNNM2dVMXlJYUljNVluY1JoVUlBbHdmOEFWai9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNkZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JHQvtCx0YDRltGI0L7QstCwINCG0L3QtdGB0LAsIDE2INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSkg0Jku0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwg0IYg0YcuOyAgIDIpINChLtCf0YDQvtC60L7RhCfRlNCyLiAnJ9Ch0LDRgNC60LDQt9C8Jycs0YLQsi4xNyDihJYxXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOUpIdUVTUVZITTZicHVwUHN2ZFVuNGVsUVJiZ08yM2UvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZGVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCR0Y/QvdC+0LLQsCDQlNCw0YDQuNC90LAsIDE2INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9LCDRgtCyLjI34oSWMiwgICAgICAyKdCULtCX0LDQtNC+0YAuINCV0YLRjtC0INC00L4g0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMS1DQmNlSEViS2dlMzJYNk5EMUZfekZWUS0yUmI0NFl3L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2RmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktC+0LfQvdGO0Log0JDQvdCz0LXQu9GW0L3QsCwgMTcg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K8u0KHRgtC10L/QvtCy0LjQuS4g0J/RgNC10LvRjtC00ZbRjywgICAgICAgMinQry7QodGW0LHQtdC70ZbRg9GBLiDQldGC0Y7QtFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXk3UUh0R3VrSm9vY1MwQl9kaXd6SnUtVlFZOFdCOW9wL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2UwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9GD0Log0KHQvtGE0ZbRjywgMTYg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4gJyfQk9GD0LzQvtGA0LXRgdC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtQUVRfdVR4YUlsYWxxeF9hYXBTcGlkMlNaZ1A3anE2L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2UxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9GD0Log0KHQvtGE0ZbRjywgMTYg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQnC4g0JvQuNGB0LXQvdC60L4uICcn0JbRg9GA0LHQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTnVoZGxPcVhlUHI4ZXhkTXAwZ1hUQWw2RmZrZ2tEdU4vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0YPQu9C+0LLQsCDQkNC90LPQtdC70ZbQvdCwLCAxOCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQuINCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9INGC0LIuNDgg4oSWMSwgICAgIDIp0J8uINCh0LDQvdC60LDQvS4g0KLQvtC60LDRgtCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xem5oOVJVLXBDcDNySHhxeVZ1UDQ0RDRDa1ltNTlHak4vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0LDQvdC+0LLRgdGM0LrQsCDQntC70YzQs9CwLCAxNyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QkdCw0YDQstGW0L3RgdGM0LrQuNC5INCf0YDQtdC70Y7QtNGW0Y8g4oSWNCAnJ9Cl0L7RgNCw0LsnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVlMZDJGUDVJeERuZUljT01XZ1dUZ0NmdWJCT1lKUVByL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2U0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNCw0L3QvtCy0YHRjNC60LAg0J7Qu9GM0LPQsCwgMTcg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCaLtCb0Y/QtNC+0LIg0J/RgNC10LvRjtC00ZbRjywg0YLQsi4zOSDihJY0XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xd29nVlp2OFdWeVF0TEZzb3B3YVJCeDFSUU94bHpDRkkvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0YPQtNC90LjQuiDQlNCw0YAn0Y8sIDE3INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JHQsNGA0LLRltC90YHRjNC60LjQuS4nJ9Cb0LjRgdGC0L7QuiDQtyDQsNC70YzQsdC+0LzQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbF9IRTNyME81dXNqT0hjTnVNcE5EWWdfZzZkMlMzNXQvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0YPQtNC90LjQuiDQlNCw0YAn0Y8sIDE3INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0JTQtdCx0Y7RgdGB0ZYuICcnINCg0L7QvNCw0L3RgtC40YfQvdC40Lkg0LLQsNC70YzRgScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcUxncTlBZkQ2WVhDeVBReUZlamx5WjhCT051U29OXzQvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0YDRjtC60L7QstCwINCc0LDRgNGW0Y8sIDE1INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QkdC+0YDRgtC60LXQstC40YcuICcn0J/RgNC40LzRhdC4INC80L7RgNGPJycsIDIp0KQu0KjQvtC/0LXQvS7QldGC0Y7QtCDRgtCyLjEwIOKEljRcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEtY2JvM0JaMUVQTlltNk5TMWVDTW1fMkhUekhKN0Jlay9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrRg9C70ZbRiCDQn9C+0LvRltC90LAsIDE1INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlS7Qk9GA0ZbQsy4nJ9Ca0L7Qu9C40YHQutC+0LLQsCcnLCAyKdCGLtCf0LDQtNC10YDQtdCy0YHRjNC60LjQuS4gJyfQodC60LXRgNGG0LjQvdC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOYW1WVkZmQWRSZmFGdUExdUtqbHQ5UUlXZ01pU0J5Ni9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzRg9C30LjRh9C10L3QutC+INCc0LDRgNGW0Y8sIDE5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg4oSWMzEsIDHRhy47IDIp0KQu0KjQvtC/0LXQvS7QldGC0Y7QtCzRgtCyLjEwIOKEljVcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPLWFoZllKTmJGZjVmU093U1NwZmZJV1dwbmlCdWJLOC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J7Qu9GW0LnQvdC40Log0J7Qu9C10LrRgdCw0L3QtNGALCAxOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQli7QkdGW0LfQtS3Qki7Qk9C+0YDQvtCy0ZbRhi4g0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGC0LXQvNGDINC3INC+0L/QtdGA0LggJyfQmtCw0YDQvNC10L0nJywgMinQmy7QoNC10LLRg9GG0YzQutC40LkuINCf0YDQtdC70Y7QtNGW0Y8g0YTQsCDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xM0p5bFBkRFdnVno2UVNIUkdWSnQ3RmhkYVJlbENIU0QvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LzQuNC6INCQ0L3QvdCwLCAxNyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiDQldGC0Y7QtC3QutCw0YDRgtC40L3QsCDRgtCyLjMzIOKEljUsINGB0L7Qu9GMINC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrN29rQnV5TXNGYVJ0NEd3d1hVU2dZQ2g1RGRZNk1OOS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQvNC40Log0JDQvdC90LAsIDE3INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuIDMyIOKEljEyLCDRgdC+0LvRjCDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTFlISFZLdVVJaXNhZEUyZm16d1l6bXdzUy1Vd1Z4VlIvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0ZbRhdC+0L3QvtC6INCE0LPQvtGALCAxNyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QkdC+0YDRgtC60LXQstC40YcuJyfQodC60LXQu9GWINGD0YnQtdC70LjQvdC4INCj0Yct0JrQvtGIJycg0Lcg0YHRjtGX0YLQuCAnJ9Ca0YDQuNC80YHRjNC60ZYg0L3QsNGA0LjRgdC4Jycu0YLQsi44LCAyKdCkLtCb0ZbRgdGCLtCi0YDQsNC90YHRhtC10L3QtNC10L3RgtC90LjQuSDQtdGC0Y7QtCDihJYxMCwg0YTQsCDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeG4zVGZOSDZHRkJCUW8xdlpaTm5SUlZxYnRqR0d1ZzIvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCk0LDRidC10LLRgdGM0LrQuNC5INCi0LDRgNCw0YFcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4gJyfQldGC0Y7QtC3QutCw0YDRgtC40L3QsCcnLCDRgtCyLjMzICg1KVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWVxVFBYbF9SaFpRT2RWci1saFVRbWxPTThjb0M2Rm9LL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpNCw0YnQtdCy0YHRjNC60LjQuSDQotCw0YDQsNGBXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0KDQtdCy0YPRhtGM0LrQuNC5LiDQn9GA0LXQu9GO0LTRltGPLCDRgtCyLjQgKDIpXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLV9ib01ub1luazc0eER6UXk2UWxDcVZ4SVAzajRzSHgvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCk0LXRgdC40Log0J3QsNC30LDRgNGW0LksIDE2INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4nJ0x5cmljYSBOb3ZhJycs0YLQsi41OSDihJYzLDQ7IDIp0KQu0JvRltGB0YIu0KLRgNCw0L3RgdGG0LXQvdC00LXQvdGC0L3QuNC5INC10YLRjtC0IOKEljggJyfQlNC40LrQtSDQv9C+0LvRjtCy0LDQvdC90Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWMwc2o0QU11RHhIQXBtR1Q5V1NobWpKSGJFSFJ6SmRDL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2YxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQrtC30LvQvtCy0LAg0JvRjtCx0L7QsiwgMTcg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKSDQmi7QlNC10LHRjtGB0YHRli4gJyfQkNGA0LDQsdC10YHQutCwJyfihJYxLCAyKSDQmS7QkdGA0LDQvNGBLicn0IbQvdGC0LXRgNC80LXRhtGG0L4nJywg0YLQsi4xMTcg4oSWMlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUxBREluV3BtLWpoYzFGYlJ1ZGdxd0NNR3R6WFFEQk1TL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2YyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQl9Cw0ZTRhtGMINCc0LDRgNC40L3QsFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQodC60L7RgNC40LouJyfQktCw0LvRjNGBJycg0Lcg0J/QsNGA0YLQuNGC0Lgg4oSWNVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFtbFp6blpib3hoenhFQlRKNGdVbUV0RTBKWWdRZ2RoL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2YzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQl9Cw0ZTRhtGMINCc0LDRgNC40L3QsFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCfLtCn0LDQudC60L7QstGB0YzQutC40LkuICcn0JTRg9C80LrQsCcnLCDRgtCyLjU5XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUGFVcC1hcVFkQ3FCdDM1NjYyeU53SmtoYU5PQVhOX2gvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCb0L7Qs9Cy0LjQvdC+0LLRgdGM0LrQuNC5INCE0LLQs9C10L3RltC5XCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JQu0J/RgNC40YLRgdC60LXRgC4gJyfQkdC70Y7QtyDQn9GW0LrQsNGB0YHQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZTJfNGlzUXpsdWNMUjdrQlpYLUNIeGdxWXJCeEpSWncvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCb0L7Qs9Cy0LjQvdC+0LLRgdGM0LrQuNC5INCE0LLQs9C10L3RltC5XCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0J/RgNC+0LrQvtGEJ9GU0LIuINCh0L7QvdCw0YLQsCDihJYzLCDRgtCyLjI4XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRExoVDlZd1I1STljWnh6ZE5vZTIyRndTOGpwSTRZVnMvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LjQutC40YLRjtC6INCQ0L3QsNGB0YLQsNGB0ZbRj1wiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCcLtCg0LDQutC+0LIuICcn0JrQvtC90YbQtdGA0YLQvdC40Lkg0LXRgtGO0LQnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUM4YTZUUFJNMmNhUWZUT0E2ekdIdnVJakdTb0w3QzFiL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC40LrQuNGC0Y7QuiDQkNC90LDRgdGC0LDRgdGW0Y9cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0Jku0KEu0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINC00L4g0LzRltC90L7RgCwg0JTQotCaIC3QhtCGXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xd3JxZGJfa2UyS2NoX0NmQmNtTlJIMk01ODBQdFpRQTEvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCd0LDQt9Cw0YDQtdC90LrQviDQmtGB0LXQvdGW0Y9cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QktC+0LvQutC+0LLQsC4gJyfQndCw0YHRgtGA0L7RlycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xT0E4cnZONnd3ZHBPVnkxRFZEdDF6cS00cGtlaVNyM3gvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCd0LDQt9Cw0YDQtdC90LrQviDQmtGB0LXQvdGW0Y9cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QkdCw0YUuINCQ0LvQtdC80LDQvdC00LBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwcXRVUldkM2Fhc2NxMmd3Tkh4TS1GRVR5UUhMQjh0RC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQtdGA0L7QsiDQktC70LDQtNC40YHQu9Cw0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLiDQkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0LTQviDQvNGW0L3QvtGALCDQlNCi0Jot0IbQhiwgMinQpC7QqNC+0L/QtdC9LiDQkdCw0LvQsNC00LAg4oSWMSwg0YLQsi4yM1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWF0bjV5aUVjWGdqVm5GS2ZNNFFXQVVTNHpfVVZUSl9xL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ZiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotCw0YDQsNGB0L7QsiDQktC70LDQtNC40YHQu9Cw0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CV0YLRjtC0LdC60LDRgNGC0LjQvdCwJycsINGC0LIuMzkg4oSWOSwgMinQpC7QqNC+0L/QtdC9LiAnJ9CR0LDQu9Cw0LTQsCcnLCDRgtCyLjIzIOKEljFcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5TlpfdEV5ME8yblJYakNsdGRfdmRXTDNTTXVCTmFDTS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPRgNC10LHQtdC90Y7QuiDQky7Qni5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCf0YDQvtC60L7RhNGM0LXQsi4g0KHQvtC90LDRgtCwIOKEljIs0IYg0YcuOzIpICAg0KQu0JvRltGB0YIuJyfQldGC0Y7QtCDQt9CwINC60LDQv9GA0LjRgdCw0LzQuCDQn9Cw0LPQsNC90ZbQvdGWJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTaFVZSVlQOW5nb1FaZWhtQ2J6UDVGM2JKQUtGaDNzTi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtC90LTRgNCw0YLRjtC6INCcLtCeLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCgLtCo0YPQvNCw0L0uICcn0KDQvtC80LDQvdGBJycsINGC0LIuMjgsIDIp0JIu0JrQvtGB0LXQvdC60L4uICcn0JrRg9GA0LDQvdGC0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZPYjQxUHNtcVdPNG55T0RrT2RvTVQ0U3NQcDRIWDl4L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ZlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQntC/0LDQvdCw0YHQtdC90LrQviDQkC7Qni4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4g0J/RgNC10LvRjtC00ZbRjyDRgdC+0LvRjCDQtNGW0ZTQtyDQvNGW0L3QvtGALCAyKdCSLtCk0ZbQu9GW0L/QtdC90LrQvi4g0KLQvtC60LDRgtCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVkxYRUx1WmNJNlFpMmdybHdhVS11RXdsTHYxZVNFa1gvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufV07XHJcblxyXG5sZXQgY29uY2VydG1hc3RlcnMgPSBbXHJcbiAgICB7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjEzZmZhYXNkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQqNC10LLQtdC70YzQvtCy0LAg0ITQu9GW0LfQsNCy0LXRgtCwLCAyMCDRgNC+0LrRltCyLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCfLtCn0LDQudC60L7QstGB0YzQutC40LkuINCQ0YDRltGPINCb0LXQvdGB0YzQutC+0LPQviwgMikg0JMu0KXQsNC30LDQvdC+0LLQsC4gXFxcIiDQo9C30LTQvtCy0LYg0LLRg9C70LjRhtGWINGF0L7QtNGDINGPXFxcIlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0NXWDBlUlBUQ1lZXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmYWFzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQl9Cw0LrQsNC70Y7QttC90LAg0J4u0JFcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQky7QktC10L3Rj9Cy0YHRjNC60LjQuS4g0JrQvtC90YbQtdGA0YLQvdC40Lkg0L/QvtC70L7QvdC10Lcg0YDQtSDQvNCw0LbQvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvczNjbFhMVDM0aFlcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjEzZmZhYXMxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQl9Cw0LrQsNC70Y7QttC90LAg0J4u0JFcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQli7QnNCw0YHQvdC1LlxcXCLQoNC+0LfQtNGD0LxcXFwiXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvZ0R5VUNiYW5lQmtcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjEzZmZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7QsdC30LDRgCDQndGW0LrQvtC70YwsIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC7QmtGA0LXQudGB0LvQtdGALicn0JzQsNC70LXQvdGM0LrQuNC5INCS0ZbQtNC10L3RgdGM0LrQuNC5INC80LDRgNGIJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrdVNSMFZtT01pcUlqOVlSMHUzbHZPenE0Skc1YUxZOC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDAwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0LHQt9Cw0YAg0J3RltC60L7Qu9GMLCAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0JXQu9GM0LPQsNGALicn0KHQsNC70Y7RgiDQutC+0YXQsNC90L3RjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMWdJN1hsal9TTFFxbDJQaTZFVEFoU0FaVEtMTWprQm4vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQsNCx0L4g0J3QtdGB0YLQvtGALCAxMCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrRgNC+0LvQuy4gJyfQn9C+0LvRjNC60LAg0LLRltGB0LvRjtGH0LrQsCcnLCAyKdCSLtCm0LjQsdGW0L0o0L/QtdGA0LXQutC7LtCQLtCm0LDRgNC10L3QutC+KS4gJyfQm9C40YHRgtC+0Log0Lcg0LDQu9GM0LHQvtC80LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTRQUjVldnJVSVJhUzFWRlV2dTBzNjlITUg3eFMzV2lJL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0ITQstCz0LXQvdGW0Y8sIDkg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy7QkdC10YLRhdC+0LLQtdC9LiAnJ9CR0LDQsdCw0LonJyzQvtCx0YAuINCQLiDQqNGD0LLQsNC70L7QstCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaXIyYVJLY284Mk53elIyRlFINkFwWlZIUVpZcjBMN3kvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwM1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQhNCy0LPQtdC90ZbRjywgOSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCR0LXRhi4gJyfQn9C+0LTRltC70YzRgdGM0LrRliDQstC40LrRgNGD0YLQsNGB0LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXFKUTlBSVdqNDhwSlRNQldmbzNoN3o2SmxLSkg5ODBuL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0YLQsNGA0YbQtdCyINCR0LXQvdC20LDQvNGW0L0sIDExINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JYu0JzQsNGB0YHQvdC1LiAnJ9Cg0L7Qt9C00YPQvCcnOyAyKdCVLtCg0LjQsdC60ZbQvS4gJyfQpNC+0YDQvNGD0LvQsCAxJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMNmJ4RHlzTjB5MkdEU05uUlhxR0VGYkhSN2VTLWl4cy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktC70LDRgdGO0Log0J3QsNC30LDRgCwgMTgg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCU0L7QvdC+0YLRli4g0JDRgNGW0Y8nJ08gZGVsIG1pbyBhbWF0byBiZW4nJywyKdCVLtCT0YDRltCzLNCTLtClLiDQkNC90LTQtdGA0YHQtdC9ICcnSmVnIGVsc2tlciBkaWcnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTJfTUZQVTM5YnRKUUt2U3QyUll6amlVMEhhWXNhNE9nL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCU0Y/Rh9C10Log0IbQvtCw0L3QvdCwLCAxN9GA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QkC7QnNC+0YbQsNGA0YIu0JDRgNGW0Y8nJ1JpZGVudGUgbGEgY2FsbWEnJywgMinQpC7QndCw0LTQtdC90LXQvdC60L4sINCGLtCk0YDQsNC90LrQvi7QoNC+0LzQsNC90YEgJyfQp9C+0LPQviDRj9Cy0LvRj9GU0YjRgdGPINC80LXQvdGWINGDINGB0L3RlicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRVFiUUtiV2l2Q2ItZ09Ra2NjSUNMNUFQUWpnV2xlOXcvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQstCw0YjQsCDQr9C90LAsIDE2INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtCa0LLQsNC90YYuINCh0L7QvdCw0YLQsCDRgNC1INC80LDQttC+0YAsINCGLdCG0IYg0YcuOyAyKdCSLtCf0L7Qv9C/LiAnJ9Cg0YPRgdGB0LrQuNC5INCy0LXRh9C10YAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9wTDQxbUxIMTBCbnIxZU15ek9FeHN3RkpvVFpfOGNTL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7Qu9C+0LTRltC5INCQ0L3RgtC+0L0sIDE4INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiDQoNC+0LzQsNC90YEnJ9CT0L7RgNC90LjQvNC4INGC0LjRhdC+INC70LXRgtC10LvQsCDQtNGD0YjQsCDQvdC10LHQtdGB0LDQvNC4JycsIDIp0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuICcn0JXQu9C10LPRltGPJycs0YLQsi4z4oSWMSwg0L7QsdGA0L7QsdC60LAg0LTQu9GPINCy0ZbQvtC70L7QvdGH0LXQu9GWINGC0LAg0YQt0L3QvlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWxRSXpET2lacC1FZFhseTEwU1ZtNGRpT2o1V0NTazNaL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7QvdGO0YjQtdC6INCh0L7RhNGW0Y8sIDIxINGA0ZbQulwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCi0LDQutGC0LDQutGW0YjQstGW0LvRli4g0KHQvtC90LDRgtCwINC00LvRjyDRhNC70LXQudGC0Lgg0ZYg0YTQvtGA0YLQtdC/0ZbQsNC90L4uXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSFhFLVdibFUwLUh5d2dWekN1blFuaVFVQ1VOWEdsTk4vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtC90Y7RiNC10Log0KHQvtGE0ZbRjywgMjEg0YDRltC6IFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCkLtCa0L7QvNC70LXQsi4gJyfQnNC10LvQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNHE3OFhLcGRGZzY2VlNXa0FacTBWZVJ1S2FUY0pVcHUvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/Rh9C10LvRltC90YbQtdCy0LAg0JDQtNGA0ZbQsNC90LAsIDE1INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCc0L7RhtCw0YDRgi4g0JDRgNGW0Y8g0JHQu9C+0L3QtNGF0LXQvSDQtyDQvtC/0LXRgNC4JyfQktC40LrRgNCw0LTQtdC90L3RjyDRltC3INCh0LXRgNCw0LvRjycnLCAyKdCgLtCT0LvRltGU0YAuJyfQkiDQv9C+0YDRi9Cy0LUg0L3QtdC20L3QvtGB0YLQuCDRgdC10YDQtNC10YfQvdC+0LknJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTdtUlZ4VjA2djVNdjZfUDNDMTgzb01nT04tUl91LXFPL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCk0LXRgdC40Log0J3QsNC30LDRgNGW0LksIDE2INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlNC2LtCf0YPRh9GH0ZbQvdGWLiDQkNGA0ZbRjyDQotC+0YHQutC4OyAyKdCcLtC00LUg0KTQsNC70YzRjy4nJ9Cl0L7RgtCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFCSk5zVHA0V0R4WmJBZEFuak1MUDNoYkQ2M1QyZUl3WS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQr9GA0L7RiNC10L3QutC+INCS0LDQu9C10YDRltGPLCAxOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QodGC0LXRhtC10L3QutC+LiAnJ9Ch0L7RgtC+0Y/Qu9CwINGPINGWINGB0LvRg9GF0LDQu9CwINCy0LXRgdC90YMnJzsgMinQki7QktC70LDRgdC+0LIuINCh0LrQtdGA0YbQviDQtNC70Y8g0LTQvtC80YDQuCDRgtCwINGE0L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU91RGxhY0RiM2k5NHhOeGtvd2stanNOa3R4dVFLNzFML3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7Qt9Cw0Log0IbRgNC40L3QsFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCELtCR0L7Qt9C30LAuJyfQlNC40YLRj9GH0ZYg0LzRgNGW0ZcnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBzb3lPSXIxN09DeU5fR2hSVV9xN0lwUzRIV3dIV1VCL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7Qt9Cw0Log0IbRgNC40L3QsFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIifQndGW0Ycg0Y/QutCwINC80ZbRgdGP0YfQvdCwJycsINC+0LHRgC4g0K4u0J7RgdGC0YDQvtCy0YHRjNC60L7Qs9C+IFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVRKS1FGRW0zYTN3emlZdkkzUWZpaEd4elYyVTVRSDJuL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LjQutC40YLRjtC6INCQ0L3QsNGB0YLQsNGB0ZbRjyBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCR0LDQutC70LDQvdC+0LIuICcn0JrQvtC90YbQtdGA0YLRltC90L4nJywgICAgICAyKdCXLtCR0LDQs9GW0YDQvtCyLiAnJ9Cg0L7QvNCw0L3RgScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xajhfbXZaRUdUZ1lJMExGR1dGb0xiUUFnQ0hwSTVDMFovcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQsNCyJ9GO0Log0JLQu9Cw0YHRgtCwXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QkC4g0JzQvtGG0LDRgNGCLiDQmtC+0L3RhtC10YDRgiDQtNC70Y8g0YTQsNCz0L7RgtCwINC3INC+0YDQutC10YHRgtGA0L7QvCDRgdGWINCx0LXQvNC+0LvRjCDQvNCw0LbQvtGALCDQhtGHLjsgMinQkC7QotCw0L3RgdC80LDQvS7QodC+0L3QsNGC0LjQvdCwINC00LvRjyDRhNCw0LPQvtGC0LAg0ZYg0YTQvtGA0YLQtdC/0ZbQsNC90L4s0IbQhtCG0YcuXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMzBhWk8xbnhWNEU4SFg3aHhXYU52VlQ0YmZna2h4NE0vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQsNGB0Y7QuiDQrtC70ZbRj1wiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JMu0KTQvtGA0LUuICcn0J/RgNC+0LHRg9C00LbQtdC90L3RjycnLCAyKSDQkS7QkdCw0YDRgtC+0LouICcn0KjRltGB0YLRjCDRgNGD0LzRg9C90YHRjNC60LjRhSDRgtCw0L3RhtGW0LInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9kczN0dlVEWFpkbzF5ZWRJVlhZY2M5TW43N2JqaDI1L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90L7QstCwINCiLtCSLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCVLtCh0LXQstC10YDQvS4gJyfQn9C+0LvRjNGB0YzQutC40Lkg0YLQsNC90LXRhtGMJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4WHR2T1NBdW52NTZSZkF4Z1YxcTdtNGlLYTA5c1dIMS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC+0LLQsCDQoi7Qki5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QotCw0LzQsNGA0LjQvSAnJ9Ch0YLQsNGA0L7QstC40L3QvdC40Lkg0LPQvtCx0LXQu9C10L0nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTQ5dmxNMDdHZDhTOUN6NHREWjJLeUtrZ3VKenlCMXVCL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0LDRh9C40Log0J4u0JAuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoC7Qk9C70ZbRlNGALicn0KDQvtC80LDQvdGBJycsIDIp0J4u0KbQuNCz0LDQvdC60L7Qsi4nJ9CG0L3RgtGA0L7QtNGD0LrRhtGW0Y8g0YLQsCDQp9Cw0YDQtNCw0YgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5nczg1cXBFT0RFdjY3YTgtZGFKeFpvSDZLbzdTVVdrL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0YDQuNGG0ZbQsiDQni7QnC5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLiDQmtGA0LXQudGB0LvQtdGALicn0JzQsNC70LXQvdGM0LrQuNC5INCy0ZbQtNC10L3RgdGM0LrQuNC5INC80LDRgNGIJycsIDIp0JsuINCg0LXQstGD0YbRjNC60LjQuS4gJyfQhtC90YLQtdGA0LzQtdGG0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5Ya3liUFpIUE9XV1V6QkVEX0tLZUdGM2tPMkVjYWJqL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0ZbRgNGH0LDQvdC+0LLQsCDQhi7Qki4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QktGW0LTQvNC+0L3RgtC1LicnUGFyIHppbG8gdW4gcmFpYm8gcGFzYWt1JycsIDIp0JPRg9Cx0LDRgNC10L3QutC+INCSLiDQmtC+0L3RhtC10YDRgiDQtNC70Y8g0YTQu9C10LnRgtC4INC3INC60LDQvNC10YDQvdC40Lwg0L7RgNC60LXRgdGC0YDQvtC8LNGC0LIuMTBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6cE1qQ2F1VXBiSmR1ZldYZmI1T2ZtN1A5c0FZai1pUC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC10LrRg9GFINCeLtCSLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0IYu0JLQuNC80LXRgC4gJyfQk9GD0YbRg9C70YzRgdGM0LrQsCDRgNCw0L/RgdC+0LTRltGPJycsIDIp0KPQutGALtC90LDRgC4g0YLQsNC90LXRhtGMINCyINC+0LHRgC7Qki7QodC+0LvQvtC90YHRjNC60L7Qs9C+ICcn0JLQtdGH0L7RgNC90LjRhtGWJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFkZlB4MTVXUUtIZlBWdE1QV1dBQXc5c3k5VVl3NVMxZS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9C+0LHQvtC00LAg0JsuINCcLiwgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmy7QkdC10YLRhdC+0LLQtdC9LCDQoi7QqNC10LLRh9C10L3QutC+LiAnJ9CX0L7RgNC1INC80L7RjyDQstC10YfRltGA0L3Rj9GPJycsIDIp0JvQtdC80LrRltCy0YHRjNC60LAg0L3QsNGA0L7QtNC90LAg0L/RltGB0L3RjyAnJ9CSINGC0LXQvNC90YMg0L3RltGH0LrRgyDRg9Cx0L7Rh9C4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwZ1pvNTNYNkVoSHdFTXBYS3dwQjJ0VzJfaXJWbzI5MC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDFhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9GO0LHRh9C10L3QutC+INCcLtChLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS7QkdCw0YUuINCa0L7QvdGG0LXRgNGCINC00LvRjyDRgdC60YDQuNC/0LrQuCDQtyDQvtGA0LrQtdGB0YLRgNC+0Lwg0LvRjyDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xd2ZodWl0WEwyTXd0WWRyVUhJa1ZkTXhRWnBodDZqTmwvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JvRjtCx0YfQtdC90LrQviDQnC7QoS5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnS7QodGC0LXRhtGO0L0uICAgICcn0JHQvtC70LXRgNC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFiSFdVcmlxS3ZTVG5WbkltNDdtbUxlZFNpME5oLVhRcy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDFjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC40YXQsNC50LvQvtCy0LAg0Jwu0JIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAu0KHQvtC70YLQsNC9LiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFb0VTMm1UcldDeTlDUWNxZDlxdTM2NloxdHo2SXBSUS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgICAgIFwiaWRcIjoge1xyXG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjEzZmZhYXNkYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm5hbWVcIjogXCLQnNC40YXQsNC50LvQvtCy0LAg0Jwu0JIuXCIsXHJcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQotCw0LzQsNGA0LjQvS4gXFxcItCh0YLQsNGA0L7QstC40L3QvdC40Lkg0LPQvtCx0LXQu9C10L1cXFwiXCIsXHJcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXU0eEowdks2ZGVSMlhKd0dMWEZoNnNCUmVQdnhHVU5yL3ByZXZpZXdcIixcclxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbiAgICB9LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzRj9C70YzQutGW0L3QsCDQnS7Qni5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQlNC2LtCS0ZbQu9GM0Y/QvNGBLiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpTV9FRjBWeDktdzREUzZIUl9aSFJKLW1xSndBLUZHcC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDFlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNGP0LvRjNC60ZbQvdCwINCdLtCeLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCm0LjQvdGG0LDQtNC30LUuICcn0KHQsNGH0ZbQtNCw0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTU5ZGpTcnpJMUF2TDVwa0NsMHZuWURzSFFMVG5kNWxvL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCd0ZbQutGW0YLRltC90LAg0IYu0KAuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JEu0JvRj9GC0L7RiNC40L3RgdGM0LrQuNC5LiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5UXlPMFE2NVd2SG52WTI4eEJsM3NoVy1IdGR1NDIzOS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDIwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQndGW0LrRltGC0ZbQvdCwINCGLtCgLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCh0LsuINCQLtCcJ9GP0YHRgtC60ZbQstGB0YzQutC+0LPQviwg0LzRg9C3LtCSLtCS0LXRgNC80LXQvdC40YfQsCAnJ9Cf0ZbQtNC60YDRg9GH0YMg0Y8g0YfQvtGA0L3RltGXINCy0YPRgdCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1XzdVUUR1T0NEcUpKajFxNWxoRUZQRW94ZF9QVTNqWS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDIxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCw0ZTQvdC60L4g0KIu0K4uIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCWLtCc0LDRgdGB0L3QtS4gJyfQoNC+0LfQtNGD0LwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUpsQW9ZLUFBSkV5SS1ySVJEQ3U3VW55d3h2cldFQkJ3L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LDRlNC90LrQviDQoi7Qri4sIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCiLtCn0YPQv9Cw0LouICcn0JLQtdGB0L3Rj9C90LjQuSDRgNC+0Lot0L0t0YDQvtC70LsnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVQ1LUlVTlV1UW1VdkZWV1lsWTZTQVZlai1USXFtYnJxL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LDQstGH0YPQuiDQoi7Qhi4gIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JTQti7QktGW0LvRjNGP0LzRgSwg0LDRgNCw0L3Qti7QkC7QotC10L/Qu9C40YbRjNC60L7Rly4nJ9Ca0L7Qu9C40YHQutC+0LLQsCDQtNC70Y8g0LDQvdCz0LXQu9CwJycsIDIp0JIu0JrQvtC30LvQvtCyLNC/0LXRgNC10LrQuy4g0LTQu9GPINC00L7QvNGA0Lgg0IQu0JbRg9C60L7QstCwLiAnJ9CfJ9GU0YHQsCDRgyDRgdGC0LjQu9GWINGE0LvQsNC80LXQvdC60L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTdUZ2l1b2dpdnNoM3h3akZYaTVhMW9SVS1va2tQOTYwL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0IYu0K4uXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCo0YPQvNCw0LrQvtCy0LAuICcn0KLQsNC90LPQviDQldCy0ZbRgtC4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExQ2t6aVJ2WUp2bmlXN2NpYTd5OUVrSTg1c25MSnc3eC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCGLtCuLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCSLtCT0L7QvNC+0LvRj9C60LAuICcn0IbRgdC/0LDQvdGB0YzQutC40Lkg0YLQsNC90LXRhtGMJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpT1VKTjIxQnZEZHpzTDBvUDBhdHZzRW1vcWdVZHBZQy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC80L7Qu9GP0L3RltC90L7QstCwINChLtCcLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCU0LLQvtGA0LbQsNC6LiDQmtC+0L3RhtC10YDRgiDQtNC70Y8g0YHQutGA0LjQv9C60Lgg0LvRjyDQvNGW0L3QvtGALCDQhiDRhy47IDIp0Jwu0KHQutC+0YDQuNC6LiAnJ9Ca0LDRgNC/0LDRgtGB0YzQutCwINGA0LDQv9GB0L7QtNGW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXRsc3JNa1FwMFVWcTB5d3RKMDFMcEhLUHNtRk9wSG5PL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0YLQsNGA0LjQvdGB0YzQutCwINCcLtCQLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCo0LjQvdC60LDRgNC10L3QutC+LtCS0LDRgNGW0LDRhtGW0Zc7IDIp0JUu0JHQvtGG0YbQsC4nJ9CQ0YDRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMc1d6Vl9MdDF6MGdHWFVMU2Vnb3Vja1k5Ulpyb0c3aC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotGA0LXQv9Cw0Log0Jwu0IYuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQli7QlNC10LzQtdGA0YHRgdC80LDQvS4g0KTQsNC90YLQsNC30ZbRjywgMinQny7QhtGC0YPRgNGA0LDQu9GM0LTQtS4gJyfQnNCw0LvQtdC90YzQutC40Lkg0YfQsNGA0LTQsNGIJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUTVNLSHBFY21NM0s3aGlaenlZM2c0S184TXRIYkg5TC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhNGA0YzQvtC80ZbQvdCwINCeLtCTLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC7QlNGA0LXQvNC70Y7Qs9CwLiDQn9C+0LXQvNCwLdGA0LDQv9GB0L7QtNGW0Y8sIDIpINChLtCe0YDRhNC10ZTQsi4nJ9CS0LXRgdC90Y/QvdC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVk2T0tVT29KYjFqdTNWelM0RkN0TzRndUJMSEQ5MTBQL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MmFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0LDQtNGD0Log0KIu0K4uXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Jou0Jwu0JLQtdCx0LXRgC7QmtC+0L3RhtC10YDRgiDQtNC70Y8g0LrQu9Cw0YDQvdC10YLQsCDihJYxLNCGINGHLjsgMikg0K8u0JzQtdC00LjQvdGM0YguINCg0L7QvNCw0L3RgVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtXQkhZVVlSbVhwbTVCQ0dXOWJudDh5OXJpeGdQUVo0L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MmJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCd0L7QstGW0LrQvtCy0LAg0Jwu0JwuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J7QsdGALiDQlC7Ql9Cw0LTQvtGA0LAuICcn0KHQtdGA0LXQtCDRgdC10LvQsCDQtNC40YfQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwYVdWbE9lM0Ytc3NRaFRWcWtGbmc4R0pLR0pFd1U4MC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDJjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQndC+0LLRltC60L7QstCwINCcLtCcLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQny7Qhi7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0JfQsNCx0YvRgtGMINGC0LDQuiDRgdC60L7RgNC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0dzVNTlUtNWZ1WFFvU09IcFd0YUd2R2paeGNmTUFmbS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDJkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC40YDQvtGC0LAg0J4u0JwuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QmtGD0LTRgNGP0LLRhtC10LIuICcn0J7QtNC40L0g0LTQtdC90Ywg0Lcg0LbQuNGC0YLRjyDQtNGP0YLQu9CwJycsIDIp0J4u0JHQtdGGLicn0KPQutGA0LDRl9C90YHRjNC60LUg0ZbQvdGC0LXRgNC80LXRhtC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTZWpCMWlkX1BVN1hnLXc1ZnpLVXZKMEVvT25Gc0RNQy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn1dO1xyXG5cclxubXlDYXJkcyA9IG15Q2FyZHMuY29uY2F0KGNvbmNlcnRtYXN0ZXJzKTtcclxuXHJcbmxldCBlbnNlbWJsZSA9IFt7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0MzdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JbRg9GA0LDQstC10LvRjCDQoS4sINCQ0YDRgtC10LzQtdC90LrQviDQoS4pXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQhtGB0L/QsNC90YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJywgMinQntCx0YAu0Jwu0J/QvtC/0L7QstCwLiAnJ9CE0LLRgNC10LnRgdGM0LrRliDQvNC+0YLQuNCy0LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUt2Y0VFN3FQUzByYU9DcWQ4c2FNRUhvLXkwVURJcENoL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDM4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgICjQn9C40LvQuNC/0YfRg9C6INCdLiwg0JrQsNCy0YPQvSDQhC4pXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JIu0JDQu9C10LrRgdC10ZTQsi4nJyDQndCwINC/0YDQvtCz0YPQu9GP0L3RhtGWJycsIDIp0J4u0J/QtdGC0YDQvtCy0LAuICcn0KbQuNGA0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5FTG90d3FBejlDN2QwOUc0TlZCVnZiUnlLTDk1OHJzL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDM5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgICjQoNCw0LTQutC+0LLRgdGM0LrQsCDQkC4sINCa0YPQt9GM0LzQuNGHKS4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAu0KjQvdGW0YLQutC1LiAnJ9Co0LjQvdC10LvRjCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTTRwYXpOSV9UeXYyc0RNVzlvQjlRZW0zNkk1RFJadVIvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0M2FcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCg0LDQtNC60L7QstGB0YzQutCwINCQLiwg0JrRg9C30YzQvNC40YcpLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0J3QsNGD0LzQtdC90LrQvi4nJ9Cn0LDRgSDQstC10LvQuNC60LjRhSDQvtGH0ZbQutGD0LLQsNC90YwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUxCT2Vfd0ZsQ195enRfRmZrUmJDOC05MGNWdTNzdFZPL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgICjQodGW0LrQvtGA0LAg0KAuINCn0LXRgNC10L/Rg9GJ0LDQuiDQnC4pLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCd0LDRg9C80LXQvdC60L4uICcn0JrQvtC70L7QvNC40LnQutCwJycsIDIp0JUu0JPRgNGW0LMt0JMu0KTRltGA0YLQuNGHLicn0KLQsNC90LXRhtGMINCQ0L3RltGC0YDQuCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xT1JUenctcGxlaFF2QUFPaW5PcmRxbkh0blVfb0NaajUvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0M2NcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAnJ015Y3JhZnQnJyAo0ITRgNC80L7Qu9C10L3QutC+INCULiwg0KjQuNCx0LDQvdC+0LLQsCDQki4pIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0KHQutC+0YDQuNC6LiAnJ9Cc0LXQu9C+0LTRltGPJycsICAgICAgICAgMinQni7QpdGA0L7QvNGD0YjQuNC9LiAnJ9CU0YDRg9C60LDRgNGB0YzQutCwINC80LDRiNC40L3QutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFBdXZvNDRhQllURzN2S3hzVDJoUUQwaG1rZzFFZGxhNy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQkdC+0L3QtNCw0YDQtdC90LrQviDQnC4sINCh0LvRltC90YfQtdC90LrQviDQri4pIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCh0LXQutGA0LXRgi4nJ9Cf0YDQvtCz0YPQu9GP0L3QutCwINCU0L7QsdC10YDQvNCw0L3QsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMVFTQWRrd24zaXU1NGtSM2h4bmgzSGcwQ196cFAtWlUvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0M2VcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JHQvtC90LTQsNGA0LXQvdC60L4g0JwuLCDQodC70ZbQvdGH0LXQvdC60L4g0K4uKSBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LicnINCG0YLQsNC70ZbQudGB0YzQutCwINC/0ZbRgdC10L3RjNC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVpULTN1Q3J6YkdKdE1jMG9Md3RnSnFUb3J6OWpEWWVzL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCS0LDRiNGD0YDRltC90LAg0JIuLCDQhNC20L7QvdC60L7QsiDQkC4pLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCTLtCR0ZTQu9C+0LIuJyfQo9GA0LDRgdGW0LzQsCDRliDQp9Cw0YDRltCy0L3QsCDQp9C10YDQtdC/0LDRhdCwJycsIDIp0J4uINCf0L7Qu9GM0L7QstC40LkuICcn0J/QvtC00L7RgNC+0LYg0LIg0JDQu9GM0L/QuCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xakNodk1CckR3eXhLazNBSkVFQ1NCRTdZX2tDTFJoOHMvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JPQtdC80LHQuNGG0YzQutCwINCeLiwg0JrRg9C30LvQviDQmi4pLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0KXQvtCy0LDRgNC0LiAnJ9Cn0LDRgNC70YzRgdGC0L7QvScnLCAyKdCU0LYuINCo0ZbRgNGW0L3Qsy4gJyfQmtC+0LvQuNGB0LrQvtCy0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXRMTlZsaHVyWlVkSHg0NE1jaFM0cW0yNTFlUzM5cm9RL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCU0LXRgNGP0LHRltC90LAg0KEuINGC0LAg0JLQsNGB0LjQu9GM0ZTQstCwINCSLikuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QlNGW0LDQsdC10LvQu9GWLiDQodC+0L3QsNGC0LAg0YDQtSDQvNCw0LbQvtGALCAyKdCbLtCo0YPQutCw0LnQu9C+LiAnJ9CT0YPQvNC+0YDQtdGB0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeUpRQmZnN2NfQm9RcVhNbUFZcU5ZUUNuWXRhd1o5VG8vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrRgNC40YjRgtCw0LvQvtCy0LjRhyDQnC4sINCa0YDQuNGI0YLQsNC70L7QstC40Ycg0IYuKSBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQlNC2LtCT0LXRgNGI0LLRltC9LiAnJ0NsYXAgeW91IGhhbmQnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU1BSmVCVm5mdEVkaGNpbzQ3bkRuVWdjakdHVHdLOENqL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0YDQuNGI0YLQsNC70L7QstC40Ycg0JwuLCDQmtGA0LjRiNGC0LDQu9C+0LLQuNGHINCGLilcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIn0JrQvtC70Y/QtNC60LAnJywg0L7QsdGALiDQni7Ql9Cw0LrQsNC70Y7QttC90L7Rl1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXBxeFlaVHZGeXJyajZkVHBUNThVVVBTT1BITS1oWnRlL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQ0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCb0LDQvdGB0YzQutC40Lkg0IQuLCDQm9Cw0L3RgdGM0LrQsCDQni4pXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlS7Qk9GA0ZbQsy4g0JDRgNGW0Y8g0ZbQtyDRgdGO0ZfRgtC4ICcn0Jcg0YfQsNGB0ZbQsiDQpdC+0LvRjNCx0LXRgNCz0LAnJywgMinQki7Qn9GC0YPRiNC60ZbQvS4gJyfQkdGA0LXQvdGE0L7RgNC00YHRjNC60LAg0LLRltC00YzQvNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE4T1VzQ0dRQnMzSWhsWDZpdC1zM1R4dW8wN00zTnMwSC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0NVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQodC40LzQvtC90LXQvdC60L4g0KIuLCDQpNC10LTQuNC90LAg0JAuKVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCU0LYu0JPQtdGA0YjQstGW0L0uJyfQmtC+0YXQsNC90LjQuSDQvNGW0LknJzsgMikg0J8u0JzQvtGA0ZbQsC4gJyfQnNCw0L3Rg9C10YInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWhWZWtoOF81TU9VSkRnSnRYSThpNEdCZFJRd0NBZWt0L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQ2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCh0LrQvtC/0LXRhtGMINCQLiwg0JzRg9GA0LfQsNC6INCuLikuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCiLtCe0YHRgtC10L0uJyfQotCw0L3QtdGG0Ywg0LvRj9C70YzQvtC6JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFRnp5aWp1d0FGTmo4di1UbHJhaUlfUGt1SEdxWDk0RS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0N1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQodC60L7Qv9C10YbRjCDQkC4g0JzRg9GA0LfQsNC6INCuLikgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCW0YPQu9GM0ZTQstCwLicn0J/RgNC+0LPRg9C70Y/QvdC60LAg0Lcg0YLQsNGC0L7QvCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVlpyMlYtSHY4TUlGOEtXZ1pHZkpBeXVFRTdtYXFXb3AvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KLRgNC+0YbQtdC90LrQviDQkC4sINCv0LrRg9C90ZbQvdCwINCeLtCSLilcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCcLtCS0LXQsdC10YAuINCh0L7QvdCw0YLQsCDQtNC+INC80LDQttC+0YAsINCGINGHLjsgMinQkC7QmtC+0LzQu9GW0LrQvtCy0LAuICcn0KHQv9C+0LPQsNC0JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhWU5COGpIMEp5NFNQM3VmQWNlUS1tSjI5bFByX3JUdy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0OVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQpNGW0LvRltC/0L7QsiDQhi4sINCc0LDRgNGH0LXQvdC60L4g0JsuKVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLicn0JbQsNGA0YInJyAyKdCcLtCb0LXQvtC90YLQvtCy0LjRhy4nJ9Cp0LXQtNGA0LjQuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcGhXVHlJSmI3RnpxTlFGZVVxRTV4MWxZRlo1OVd1Z3ovcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KXQtdC70LzQsNC9INCSLiwg0KXQtdC70LzQsNC9INCSLilcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCjLtCT0ZbQu9C70L7Qui4nJ9Cd0LAg0L/QsNGA0LjQt9GM0LrQvtC80YMg0LHRg9C70YzQstCw0YDRlicnLCAyKdCdLtCh0LzRltGA0L3QvtCy0LAuJyfQkdGA0LDQt9C40LvRjNGB0YzQutC40Lkg0LrQsNGA0L3QsNCy0LDQuycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN2MzMkNJMG1fa05KWFprckhrWFFlNTJUZGZIV1BsNk8vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQutCy0LDRgNGC0LXRgiAnJ1Nmb3J6YW5kbycnLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQni7QptC40LPQsNC90LrQvtCyLiAnJ9Ci0YPRgdGC0LXQvycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVVFrWjExVUdWbHFoUjNzcmFkcGJvUXBLOUVFeWFpcW8vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQutCy0LDRgNGC0LXRgiAnJ1Nmb3J6YW5kbycnLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQk9GA0ZbQsy4nJ9CSINC/0LXRh9C10YDRliDQs9GW0YDRgdGM0LrQvtCz0L4g0LrQvtGA0L7Qu9GPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTVExudDhJVTVubFktRzFkcWZiS3VSYTFCX1o4VFNrWS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0ZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQktC40YXRgNC40YHRgiDQnC4sINCk0ZTQtNC+0YHRlNGU0LIg0J0uKVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0J/RgNC+0LrQvtGEJ9GU0LIuINCc0LDRgNGILCAyKdCSLtCb0Y7RgtC+0YHQu9Cw0LLRgdGM0LrQuNC5LiDQktCw0YDRltCw0YbRltGXINC90LAg0YLQtdC80YMg0J/QsNCz0LDQvdGW0L3RllwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW56UkhYSkt0QWJkeDdQd2JCNWQ0WEZHeEJOY3RwTkVrL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCS0ZbRgtGO0Log0JIsINCR0LXRgNC10LfQvtCy0YHRjNC60LAg0IQuKVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JHQsNGFICjQktGW0LLQsNC70YzQtNGWKS4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINC+0YDQs9Cw0L3QsCDQu9GPINC80ZbQvdC+0YAsIDIp0JAu0J8n0Y/RhtC+0LvQu9CwLiAnJ9Cb0ZbQsdC10YDRgtCw0L3Qs9C+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuZjAxRWY2T1ZPeUxBSlVVakJZeUlLTnMzTVplX1BGdi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0ZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQkdC+0YDQvtCy0LXRhtGMINCeLiwg0ZbQu9GO0YHRgtGA0LDRgtC+0YApXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEu0JHQsNGFLicn0JDRgNGW0Y8nJyAoJyfQodGC0YDQsNGB0YLRliDQt9CwINCc0LDRgtCy0ZbRlNC8JycpXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSDFha1FVZFI3UUtSTzRQM2hEWTZfdFp0bWRTcmswSjEvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JHQvtGA0L7QstC10YbRjCDQni4s0ZbQu9GO0YHRgtGA0LDRgtC+0YApLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi7QntGA0YQuJyfQnizQpNC+0YDRgtGD0L3QvicnICgnJ9Ca0LDRgNC80ZbQvdCwINCR0YPRgNCw0L3QsCcnKVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlrT0lCVGRJS0tRWjZuWFZnUGlaSDNZOG15Y1dwd0J5L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDUxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0LvQuNC80LXQvdC60L4g0JwuLCDQlNGW0L7RgNC00ZbRlNCy0LAg0JwuKVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CS0L7QutCw0LvRltC3JycsIDIp0JQu0JzRltC50L4uJyfQkdGA0LDQt9C40LvRjNGU0YDQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdTgxZEFBdGxEb2ZxNHBueUR0WWctU3hHQjRqR0Izc0UvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQvtC30LDQuiDQhi4sINCi0LDRlNGALdCj0LvRjNGP0L3QvtCy0LAg0JouKS4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiQS4gINCfJ9GP0YbRhtC+0LvQsC4gJyfQm9GW0LHQtdGA0YLQsNC90LPQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeTZZcUZ0QlBHTWxYekVRTDh1dTNCTDRVa3JNemU0amIvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQvtC30LDQuiDQhi4g0YLQsCDQotCw0ZTRgC3Qo9C70YzRj9C90L7QstCwINCaLikuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQk9GA0ZbQsy4gJyfQndC+0YDQstC10LbRgdGM0LrQuNC5INGC0LDQvdC10YbRjCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVHRmaTRtN1Axb3VOSkVIRFhpSm5hN1gzYmVRUHpyZnUvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQvtGB0YLQtdGH0LrQviDQkC4sINCa0L7QvdC00YDQsNGC0Y7QuiDQnC4gKS5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0Jou0JTQtdCx0Y7RgdGB0ZYuICcn0KMg0YfQvtCy0L3RlicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaFJXekNMWElVVTZYcERXWjNFaXNJN1E1TlpIekRkaW8vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQvtGB0YLQtdGH0LrQviDQkC4sINCa0L7QvdC00YDQsNGC0Y7QuiDQnC4pLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCuLtCS0LXRgdC90Y/Qui4gJyfQmtCw0YDQu9GB0L7QvScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQTMxVnJSNWQ1ZFhUOGtRV3ROeUdreGZ5N2JLSTVNRFUvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JzQsNGG0ZbRlNCy0YHRjNCwINCcLiwg0J/QsNC/0ZbRlNCy0LAg0JouKS4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QnNC10YLQvdC10YAuJyfQoNC+0YHRltC50YHRjNC60LjQuSDRhdC+0YDQvtCy0L7QtCcnLCAyKdCQLtCfJ9GP0YbRhtC+0LvQsC4nJ9CS0LXQu9C40LrQtSDRgtCw0L3Qs9C+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2QW5nc2FzR3VBc2hvRFp5ZzlpZGxqQjh4b01EdjR2Qy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1N1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICAo0JrQsNGB0Y/QvdC10L3QutC+INCeLtCSLiwg0JPQvtGA0LTRltGU0L3QutC+INCGLtCeLikgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JAu0JHQsNCx0LDQtNC20LDQvdGP0L0uICcn0J3QvtC60YLRjtGA0L0nJywgMinQri4g0KnRg9GA0L7QstGB0YzQutC40LkuICcn0JPRg9C80L7RgNC40YHRgtC40YfQvdC40Lkg0YLQsNC90LXRhtGMJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfU1hBRlFEd19CbTRZSy1xY3k2WHM0a0ZvVzRIM0RhSS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1OFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICcn0JXQu9C10LPRltGPJydcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQnC7QodC60L7RgNC40LouICcn0JzQtdC70L7QtNGW0Y8nJywgMinQmy7QmtCw0YDQv9C10L3QutC+Licn0JLRltC90L7Rh9C+0Log0YPQu9GO0LHQu9C10L3QuNGFINC80LXQu9C+0LTRltC5JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFja1p3MEhzc2l5RWRiU1NIQnFPeWF3cVNmdEFrMXdVai9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1OVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQk9GA0LjQs9C+0YAn0ZTQstCwINCTLtCQLiAsINCv0LrRg9C90ZbQvdCwINCeLtCSLilcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCo0YPQsdC10YDRgi4nJ9CS0ZbQudGB0YzQutC+0LLQuNC5INC80LDRgNGIJycgMinQkC7QmtC+0LzQu9GW0LrQvtCy0LAuICcn0J3QsCDQvNCw0YHQutCw0YDQsNC00ZYnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVDYUpfcVlVYXB5TS1IQmhydVdiLWg3SUZ5U3FrX3NVL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDVhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0L7RgdC10L3QutC+INCeLtCSLiwg0JrQsNGB0YPQvNC+0LLQsCDQni7QlC4pLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAuINCm0YTQsNGB0LzQsNC9LiAnJ9Cb0ZbRgNC40YfQvdC40Lkg0LLQsNC70YzRgScnLCAyKdCcLtCc0ZbQvdC60L7Qsi4gJyfQodGC0LDRgNC40Lkg0YDQvtGP0LvRjCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xekdPS3VueElvSGQzVWo1Rkh2ZFd5Ti1ydldGN242Vi0vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQutCy0LDRgNGC0LXRgiAgKNCS0LDRgdC10L3QutC+INChLiwg0JLQsNGB0LXQvdC60L4g0JwuLCDQpdCw0LLQsNC70LrQviDQoi4s0JHQuNGH0LrQvtCyJ9GP0Log0JouKS4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QktGW0LLQsNC70YzQtNGWLicn0JfQuNC80LAnJzsgMinQpC7QnNC10YDQuifRjtGA0LAuJyfQkdC+0LPQtdC80L3QsCDRgNCw0L/RgdC+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFCOTZuRUMzdktZUmQ4T2dUWGdQaVZWWDhWQi1NU1NkWS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1Y1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC60LLQsNGA0YLQtdGCICcnQUxMQSBCUkVWRScnLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCGLtCh0YLRgNCw0LLRltC90YHRjNC60LjQuS7QpNGA0LDQs9C80LXQvdGCINGW0Lcg0LHQsNC70LXRgtGDICcn0J/QtdGC0YDRg9GI0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYmlmVzhPQnYxRTYxcWQxODRFYUpqc3ZPdHJYclJya1YvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQutCy0LDRgNGC0LXRgiAnJ0FMTEEgQlJFVkUnJy5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi7Qk9GD0YDQu9GW0YLRgi4nJ9CS0ZbQtNC10L3RgdGM0LrQuNC5INCy0LDQu9GM0YEnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVFqQnJLV1RrQ2JpUzlFajVrNHBIYkhSRHNOMkQxY2FNL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDVlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjCAnJ9CV0JrQodCf0KDQldCh0IbQrycnLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCd0LDRg9C80LXQvdC60L4uIDEpJyfQp9Cw0YHQuCDQstC10LvQuNC60LjRhSDRgdC/0L7QtNGW0LLQsNC90YwnJywgMinQkC7QnyfRj9GG0YbQvtC70LAuICcn0JvRltCx0LXRgNGC0LDQvdCz0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlVbFlLcklLc0oxaW51Q3FBT1MwTVk0THFHcm1jcF9rL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDVmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LrQstCw0YDRgtC10YIgKNCp0YPQutGW0L3QsCDQni4s0KHQtdGA0LTRjtC6INCTLiwg0KjQsNC/0L7QstCw0Lsg0J4uLCDQnNCw0LrRgdC40LzQtdC90LrQviDQki4pXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jsu0JvQsNCy0ZbQvdGM0Y/Qui4nJ9CT0LDQu9C+0L8t0LzQsNGA0YgnJzsgMinQky7Qk9GD0YDQu9GW0YIuINCd0L7QutGC0Y7RgNC9XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSVliTklDMkV4Nk54eE04eW1iQ3RMMm11UEFRNFJoTWcvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NjBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQsNC90YHQsNC80LHQu9GMICgg0KHQvNC40Log0Jsu0K4uLNCo0LXQutC10LvRjCDQni7Qni4pLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0JPRg9Cw0YHRgtCw0LLRltC90L4uICcn0KDQvtC80LDQvdGBJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFkSEJ6bkRtcEUtMHZXeXJ5TWY4NlhDa0ZiOHNQX0hZXy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ2MVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INCw0L3RgdCw0LzQsdC70YwgKNCh0LzQuNC6INCbLtCuLiwg0KjQtdC60LXQu9GMINCeLtCeLikuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCm0YTQsNGB0LzQsNC9Licn0KHQvdGW0LbQuNC90LrQuCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOVBUZS1KX2NTNkRUU082aVpGaXhnYjVnNFp4cGF6UlQvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufV07XHJcblxyXG5teUNhcmRzID0gbXlDYXJkcy5jb25jYXQoZW5zZW1ibGUpO1xyXG5cclxuLyoqIENPREUgKiovXHJcbmZ1bmN0aW9uIGZpbG1SZWR1Y2VyKHN0YXRlID0ge2NhcmRDb3VudDogbXlDYXJkcy5sZW5ndGgsIGNhcmRzOiBteUNhcmRzLCBpc0RhdGFJblBsYWNlOiB0cnVlLCBlcnJvcjogXCJcIn0sIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0lORk9fUEFHRSc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgY2FyZHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0FMTCc6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPiDQo9GB0ZYg0LLRltC00LXQvlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBteUNhcmRzLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbXlDYXJkcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ2dyb3VwLTEnOlxyXG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQuZ3JvdXAgPT09IGdyb3VwMSkuc2xpY2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkcyxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdncm91cC0yJzpcclxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzMSA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5ncm91cCA9PT0gZ3JvdXAyKS5zbGljZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZHM6IG5ld0NhcmRzMSxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzMS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnZ3JvdXAtMyc6XHJcbiAgICAgICAgICAgIGxldCBuZXdDYXJkczIgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQuZ3JvdXAgPT09IGdyb3VwMykuc2xpY2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkczIsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkczIubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdTRUFSQ0gnOlxyXG4gICAgICAgICAgICBsZXQgcSA9IGFjdGlvbi5xdWVyeS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgPiDQn9C+0YjRg9C6OiAke3F9YCk7XHJcbiAgICAgICAgICAgIGxldCBuZXdDYXJkczMgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYXJkTmFtZSA9IGNhcmQubmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvb2wgPSAoY2FyZE5hbWUuc3RhcnRzV2l0aChxKSB8fCBjYXJkTmFtZS5pbmNsdWRlcyhxKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGVzdGluZyAke2NhcmROYW1lfSBvbiBxdWVyeSAke3F9LCByZXN1bHQgaXMgJHtib29sfWApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkczMsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkczMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ0VSUk9SJzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYD4g0J/QvtC80LjQu9C60LBgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ubXNnLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiAxLFxyXG4gICAgICAgICAgICAgICAgY2FyZHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbXlDYXJkcyxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG15Q2FyZHMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2FyZFN0b3JlID0gY3JlYXRlU3RvcmUoZmlsbVJlZHVjZXIpO1xyXG5cclxuY2FyZFN0b3JlLnN1YnNjcmliZSgoKSA9PlxyXG4gICAgY29uc29sZS5sb2coXCJGaWxtc1N0b3JlIHN0YXRlIHdhcyBjaGFuZ2VkLCBudW1iZXIgb2YgY2FyZHM6IFwiICsgY2FyZFN0b3JlLmdldFN0YXRlKCkuY2FyZENvdW50KVxyXG4pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=