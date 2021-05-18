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
const A1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(A)`
  font-style: normal;
  font-size: 30px;
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div1, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A1, {
    href: "https://drive.google.com/file/d/1auoJ8rWsFopRwbNWrEph_DF6BaofMZah/view?usp=sharing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["GiPodiumWinner"], null), " \u041B\u0410\u0423\u0420\u0415\u0422\u0418 \xAB\u0412\u0421\u0415\u0423\u041A\u0420\u0410\u0407\u041D\u0421\u042C\u041A\u041E\u0413\u041E \u041A\u041E\u041D\u041A\u0423\u0420\u0421\u0423 \u041F\u0406\u0410\u041D\u0406\u0421\u0422\u0406\u0412. \u0420\u0406\u0412\u041D\u0415-2021\xBB  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["GiPodiumWinner"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzExNjMwMjMucG5nIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZm9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVndWxhckhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzdWx0c0ZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0IbQstCw0L3QvtCy0LAg0Jsu0IYucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CS0LjRiNC90LXQstGB0YzQutCwLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0JfQsNGF0L7QtNGP0LrRltC9LTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9Ca0YPQt9C90ZTRhtC+0LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QnNCw0YDRhtC10LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QntGB0YLQsNC/0YfRg9C6INCcLiDQnC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0KDQsNC50YIg0IYu0KEucG5nIiwid2VicGFjazovLy8uL3NyYy9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9DYXJkU3RvcmUuanN4Il0sIm5hbWVzIjpbIkFwcCIsImNhcmRTdG9yZSIsIkZpbG1XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiRmlsbUluZm8iLCJJZnJhbWVCb3giLCJpZnJhbWUiLCJwcm9wcyIsIndpZHRoIiwiQnV0dG9uIiwiYnV0dG9uIiwiQ2FyZCIsImhlaWdodCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJjYWxjdWxhdGVkV2lkdGgiLCJzZXRDYWxjdWxhdGVkV2lkdGgiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm5hbWUiLCJjb21wb3NpdGlvbiIsInZpZGVvVXJsIiwic2hvd0lmcmFtZSIsInNldFNob3dJZnJhbWUiLCJvcGVuVmlkZW9CdXR0b25OYW1lIiwic2V0T3BlblZpZGVvQnV0dG9uTmFtZSIsIm9wZW5WaWRlb0hhbmRsZXIiLCJXcmFwcGVyIiwibG9nbyIsIlBlcnNvbkluZm9TZWN0aW9uIiwiUGVyc29uIiwiQ29udGFpbmVyIiwiVGV4dFNlY3Rpb24iLCJJbWFnZSIsImltZyIsImltZ1VybCIsInRleHQiLCJEaXYiLCJEaXYxIiwiQSIsImEiLCJBMSIsIlAiLCJJbmZvUGFnZSIsInBlcnNvbjIiLCJwZXJzb24xIiwicGVyc29uNCIsInBlcnNvbjUiLCJwZXJzb243IiwicGVyc29uOCIsInBlcnNvbjMiLCJwZXJzb242IiwiQ29tbW9uV3JhcHBlciIsIk1haW5TZWN0aW9uRmxleCIsIk1haW5TZWN0aW9uIiwiY2FyZHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiaXNEYXRhSW5QbGFjZSIsImNhcmRDb3VudCIsInNlY3Rpb25zRm9yRmlsdGVyIiwibWFwIiwiY2FyZCIsImlkIiwiJG9pZCIsIklucHV0IiwiaW5wdXQiLCJpbnB1dENvbG9yIiwiSW5wdXRTdHlsZSIsIklucHV0V3JhcGVyIiwiU3R5bGVkU3BhbiIsInNwYW4iLCJFcnJvciIsIldhcm4iLCJSZWd1bGFySGVhZGVyIiwic2VhcmNoRmllbGQiLCJ1c2VSZWYiLCJlcnJvciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJoYW5kbGVyIiwic3RyIiwiU3RyaW5nIiwiY3VycmVudCIsInZhbHVlIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJ0eXBlIiwibXNnIiwicXVlcnkiLCJoYW5kbGVLZXlQcmVzcyIsImV2ZW50Iiwia2V5IiwiRmlsdGVyQ29udGFpbmVyIiwiRmlsdGVyU2VjdGlvbiIsIkRpdlRoaW5MaW5lIiwiU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXIiLCJncm93XzAiLCJrZXlmcmFtZXMiLCJsZWZ0IiwiZ3Jvd18xIiwiVGhpbkxpbmVJbm5lckRpdiIsImFuaW1hdGlvbiIsIlJlc3VsdHNGaWx0ZXIiLCJzZWN0aW9ucyIsInJlZExpbmVXaWR0aCIsInNldFJlZExpbmVXaWR0aCIsInJlZExpbmVMZWZ0Iiwic2V0UmVkTGluZUxlZnQiLCJzZXRBbmltYXRpb24iLCJtYXJrZWRTZWN0aW9uUmVmIiwicmVSZW5kZXJSZWRMaW4iLCJ0YXJnZXQiLCJjdXJyZW50U2VjdGlvbldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY3VycmVudFNlY3Rpb25MZWZ0IiwiY291bnRlciIsIm9uRmlsdGVyU2VjdGlvbkNsaWNrIiwic2VsZWN0ZWRTZWN0aW9uIiwic2VsZWN0ZWRTZWN0aW9uU3RyaW5nIiwic2VjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJJbmZvUGFnZSIsInJlbmRlcmVkU2VjdGlvbnMiLCJlIiwiZ2V0V2luZG93RGltZW5zaW9ucyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIndpbmRvdyIsIndpbmRvd0RpbWVuc2lvbnMiLCJzZXRXaW5kb3dEaW1lbnNpb25zIiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJncm91cDEiLCJncm91cDIiLCJncm91cDMiLCJteUNhcmRzIiwiY29uY2VydG1hc3RlcnMiLCJjb25jYXQiLCJlbnNlbWJsZSIsImZpbG1SZWR1Y2VyIiwiYWN0aW9uIiwibmV3Q2FyZHMiLCJmaWx0ZXIiLCJncm91cCIsInNsaWNlIiwibmV3Q2FyZHMxIiwibmV3Q2FyZHMyIiwicSIsInRvTG93ZXJDYXNlIiwibmV3Q2FyZHMzIiwiY2FyZE5hbWUiLCJib29sIiwic3RhcnRzV2l0aCIsImNyZWF0ZVN0b3JlIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Es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YSxFQUFFLElBSFo7QUFJSEMsaUJBQVMsRUFBRWlHLFNBQVMsQ0FBQ3ZFLE1BSmxCO0FBS0hSLGFBQUssRUFBRTtBQUxKLE9BQVA7O0FBT0osU0FBSyxPQUFMO0FBQ0k0QyxhQUFPLENBQUNDLEdBQVIsQ0FBYSxXQUFiO0FBQ0EsYUFBTztBQUNIN0MsYUFBSyxFQUFFc0UsTUFBTSxDQUFDM0QsR0FEWDtBQUVIN0IsaUJBQVMsRUFBRSxDQUZSO0FBR0hKLGFBQUssRUFBRSxFQUhKO0FBSUhHLHFCQUFhLEVBQUU7QUFKWixPQUFQOztBQU1KO0FBQ0ksYUFBTztBQUNISCxhQUFLLEVBQUV1RixPQURKO0FBRUhwRixxQkFBYSxFQUFFLElBRlo7QUFHSEMsaUJBQVMsRUFBRW1GLE9BQU8sQ0FBQ3pELE1BSGhCO0FBSUhSLGFBQUssRUFBRTtBQUpKLE9BQVA7QUFqRVI7QUF3RUg7O0FBRU0sTUFBTTVFLFNBQVMsR0FBRytKLHlEQUFXLENBQUNkLFdBQUQsQ0FBN0I7QUFFUGpKLFNBQVMsQ0FBQ2dLLFNBQVYsQ0FBb0IsTUFDaEJ4QyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvREFBb0R6SCxTQUFTLENBQUNpSyxRQUFWLEdBQXFCdkcsU0FBckYsQ0FESixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzeFwiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy8xMTYzMDIzLnBuZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TWFpblNlY3Rpb259IGZyb20gJy4vY29tcG9uZW50cy9NYWluU2VjdGlvbic7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2NhcmRTdG9yZX0gZnJvbSBcIi4vc3RvcmUvQ2FyZFN0b3JlXCI7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cclxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtjYXJkU3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgPE1haW5TZWN0aW9uLz5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICA8L1JlYWN0LlN0cmljdE1vZGU+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0FpRmlsbFBsYXlTcXVhcmUsIEJzRmlsbFBlcnNvbkZpbGwsIEZhQm9va09wZW59IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuXHJcbmNvbnN0IEZpbG1XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBGaWxtSW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IElmcmFtZUJveCA9IHN0eWxlZC5pZnJhbWVgXHJcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xyXG4gIGhlaWdodDogNDgwcHg7XHJcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gIH1gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICBjb25zdCBbY2FsY3VsYXRlZFdpZHRoLCBzZXRDYWxjdWxhdGVkV2lkdGhdID0gdXNlU3RhdGUoNjQwKTtcclxuXHJcbiAgICAvL2hhbmRsaW5nIHJlc2l6ZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAod2lkdGggPCAxMDAwKSBzZXRDYWxjdWxhdGVkV2lkdGgod2lkdGggLSA1MCk7XHJcbiAgICAgICAgZWxzZSBzZXRDYWxjdWxhdGVkV2lkdGgoNjQwKTtcclxuICAgIH0sIFt3aWR0aF0pO1xyXG5cclxuICAgIGNvbnN0IFtuYW1lLF0gPSB1c2VTdGF0ZShwcm9wcy5uYW1lKTtcclxuICAgIGNvbnN0IFtjb21wb3NpdGlvbixdID0gdXNlU3RhdGUocHJvcHMuY29tcG9zaXRpb24pO1xyXG4gICAgY29uc3QgW3ZpZGVvVXJsLF0gPSB1c2VTdGF0ZShwcm9wcy52aWRlb1VybCk7XHJcbiAgICBjb25zdCBbc2hvd0lmcmFtZSwgc2V0U2hvd0lmcmFtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BlblZpZGVvQnV0dG9uTmFtZSwgc2V0T3BlblZpZGVvQnV0dG9uTmFtZV0gPSB1c2VTdGF0ZShcItCS0ZbQtNC60YDQuNGC0Lgg0LLRltC00LXQvlwiKTtcclxuXHJcbiAgICBjb25zdCBvcGVuVmlkZW9IYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dJZnJhbWUoIXNob3dJZnJhbWUpO1xyXG4gICAgICAgIGlmIChzaG93SWZyYW1lKSB7XHJcbiAgICAgICAgICAgIHNldE9wZW5WaWRlb0J1dHRvbk5hbWUoXCLQktGW0LTQutGA0LjRgtC4INCy0ZbQtNC10L5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T3BlblZpZGVvQnV0dG9uTmFtZShcItCX0LDQutGA0LjRgtC4INCy0ZbQtNC10L5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZpbG1XcmFwcGVyPlxyXG4gICAgICAgICAgICA8RmlsbUluZm8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj48QnNGaWxsUGVyc29uRmlsbC8+IDxiPntuYW1lfTwvYj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PEZhQm9va09wZW4vPiB7Y29tcG9zaXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b3BlblZpZGVvSGFuZGxlcn0gdmFsdWU9e29wZW5WaWRlb0J1dHRvbk5hbWV9PjxBaUZpbGxQbGF5U3F1YXJlLz48L0J1dHRvbj48c3Bhbj57b3BlblZpZGVvQnV0dG9uTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAge3Nob3dJZnJhbWUgPyA8SWZyYW1lQm94IHNyYz17dmlkZW9Vcmx9IHdpZHRoPXtjYWxjdWxhdGVkV2lkdGh9Lz4gOiBudWxsfVxyXG4gICAgICAgICAgICA8L0ZpbG1JbmZvPlxyXG4gICAgICAgIDwvRmlsbVdyYXBwZXI+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCaUxpbmtFeHRlcm5hbCwgR2lQb2RpdW1XaW5uZXJ9IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLzExNjMwMjMucG5nXCI7XHJcbmltcG9ydCBwZXJzb24xIGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjIgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0JrRg9C30L3RlNGG0L7QstCwLTEucG5nXCI7XHJcbmltcG9ydCBwZXJzb24zIGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9CG0LLQsNC90L7QstCwINCbLtCGLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uNCBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/QoNCw0LnRgiDQhi7QoS5wbmdcIjtcclxuaW1wb3J0IHBlcnNvbjUgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0J7RgdGC0LDQv9GH0YPQuiDQnC4g0JwucG5nXCI7XHJcbmltcG9ydCBwZXJzb242IGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9Cc0LDRgNGG0LXQstCwLTEucG5nXCI7XHJcbmltcG9ydCBwZXJzb243IGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9CX0LDRhdC+0LTRj9C60ZbQvS0xLnBuZ1wiO1xyXG5pbXBvcnQgcGVyc29uOCBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/QktC40YjQvdC10LLRgdGM0LrQsC0xLnBuZ1wiO1xyXG5cclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7bG9nb31cIik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgUGVyc29uSW5mb1NlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcblxyXG5jb25zdCBQZXJzb24gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGA7XHJcblxyXG4gICAgY29uc3QgVGV4dFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogODUwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XHJcbiAgICBgO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKDxDb250YWluZXI+PEltYWdlIHNyYz17cHJvcHMuaW1nVXJsfS8+PFRleHRTZWN0aW9uPntwcm9wcy50ZXh0fTwvVGV4dFNlY3Rpb24+PC9Db250YWluZXI+KTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5gO1xyXG5cclxuY29uc3QgRGl2MSA9IHN0eWxlZChEaXYpYFxyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmA7XHJcblxyXG5jb25zdCBBID0gc3R5bGVkLmFgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IGRhcmtyZWQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQTEgPSBzdHlsZWQoQSlgXHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuYDtcclxuXHJcbmNvbnN0IFAgPSBzdHlsZWQuZGl2YFxyXG4gIGxlZnQ6IDQwMHB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSW5mb1BhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxXcmFwcGVyPjxEaXYxPlxyXG4gICAgICAgIDxBMSBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYXVvSjhyV3NGb3BSd2JOV3JFcGhfREY2QmFvZk1aYWgvdmlldz91c3A9c2hhcmluZ1wiPlxyXG4gICAgICAgICAgICA8R2lQb2RpdW1XaW5uZXIvPiDQm9CQ0KPQoNCV0KLQmCDCq9CS0KHQldCj0JrQoNCQ0IfQndCh0KzQmtCe0JPQniDQmtCe0J3QmtCj0KDQodCjINCf0IbQkNCd0IbQodCi0IbQki4g0KDQhtCS0J3QlS0yMDIxwrsgIDxHaVBvZGl1bVdpbm5lci8+PC9BMT5cclxuICAgICAgICA8QSBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa2E3R3VWYzBtaEh6UjVqcTFxaFRDSG5sTmEwSGNYbUIvdmlldz91c3A9c2hhcmluZ1wiPiA8QmlMaW5rRXh0ZXJuYWwvPtCf0L7Qu9C+0LbQtdC90L3RjzwvQT5cclxuICAgICAgICA8QSBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcWR5TDBtWGFmb3dJODg4c1BKTHlNN3l1aFlKTlI3MGIvdmlldz91c3A9c2hhcmluZ1wiPiA8QmlMaW5rRXh0ZXJuYWwvPlxyXG4gICAgICAgICAgICDQntGA0LPQsNC90ZbQt9Cw0YbRltC50L3QuNC5INC60L7QvNGW0YLQtdGCINC60L7QvdC60YPRgNGB0YMgPC9BPlxyXG4gICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2c3owdXU1NjRCbDdsOVktYnFNT18tZ0xQcVR1REJZQy92aWV3P3VzcD1zaGFyaW5nXCI+IDxCaUxpbmtFeHRlcm5hbC8+0JDRhNGW0YjQsDwvQT5cclxuICAgIDwvRGl2MT5cclxuICAgICAgICA8UD7QodC60LvQsNC0INC20YPRgNGWOjwvUD5cclxuICAgICAgICA8UGVyc29uSW5mb1NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb24yfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e2DQmtGD0LfQvdGU0YbQvtCy0LAg0J4u0J4uLSDQs9C+0LvQvtCy0LAg0LbRg9GA0ZYsINC00L7QutGC0L7RgCDRhNGW0LvQvtGB0L7RhNGW0ZcsINC60LDQvdC00LjQtNCw0YIg0L/QtdC00LDQs9C+0LPRltGH0L3QuNGFINC90LDRg9C6LCDQv9GA0L7RhNC10YHQvtGAINC60LDRhNC10LTRgNC4ICBcclxuICAgICAgICAgICAgICAgICAgICDQvNGD0LfQuNGH0L3Qvi0g0ZbQvdGB0YLRgNGD0LzQtdC90YLQsNC70YzQvdC+0LPQviDQstC40LrQvtC90LDQstGB0YLQstCwINCl0LDRgNC60ZbQstGB0YzQutC+0LPQviDQndCw0YbRltC+0L3QsNC70YzQvdC+0LPQviDQv9C10LTQsNCz0L7Qs9GW0YfQvdC+0LPQviDRg9C90ZbQstC10YDRgdC40YLQtdGC0YMg0ZbQvNC10L3RliBcclxuICAgICAgICAgICAgICAgICAgICDQky7QodC60L7QstC+0YDQvtC00LgsINC30LDRgdC70YPQttC10L3QuNC5INC00ZbRj9GHINC80LjRgdGC0LXRhtGC0LIg0KPQutGA0LDRl9C90LgsICBcItCS0ZbQtNC80ZbQvdC90LjQuiDQvtGB0LLRltGC0Lgg0KPQutGA0LDRl9C90LhcIiwg0LLRltC00LfQvdCw0YfQtdC90LAg0L7RgNC00LXQvdC+0LwgXHJcbiAgICAgICAgICAgICAgICAgICAg0JzRltC90ZbRgdGC0LXRgNGB0YLQstCwINC60YPQu9GM0YLRg9GA0LggINCj0LrRgNCw0ZfQvdC4IFwi0JfQsCDQtNC+0YHRj9Cz0L3QtdC90L3RjyDQsiDRgNC+0LfQstC40YLQutGDICDQutGD0LvRjNGC0YPRgNC4ICDRliDQvNC40YHRgtC10YbRgtCyIFwiLCDRgdC10LrRgNC10YLQsNGAIFxyXG4gICAgICAgICAgICAgICAgICAgINCd0LDRhtGW0L7QvdCw0LvRjNC90L7RlyDQstGB0LXRg9C60YDQsNGX0L3RgdGM0LrQvtGXINC80YPQt9C40YfQvdC+0Zcg0YHQv9GW0LvQutC4LCDQs9C+0LvQvtCy0LAg0JDRgdC+0YbRltCw0YbRltGXINC/0ZbQsNC90ZbRgdGC0ZbQsiAg0J3QsNGG0ZbQvtC90LDQu9GM0L3QvtGXICDQstGB0LXRg9C60YDQsNGX0L3RgdGM0LrQvtGXIFxyXG4gICAgICAgICAgICAgICAgICAgINC80YPQt9C40YfQvdC+0Zcg0YHQv9GW0LvQutC4LCAg0L/RgNC10LfQuNC00LXQvdGCINCQ0YHQvtGG0ZbQsNGG0ZbRlyDQv9GW0LDQvdGW0YHRgtGW0LIt0L/QtdC00LDQs9C+0LPRltCyINCj0LrRgNCw0ZfQvdC4KFwiRVBUQVwiIFVrcmFpbmUpLCDQktGW0YbQtS0g0L/RgNC10LfQuNC00LXQvdGCICBcclxuICAgICAgICAgICAgICAgICAgICDQkNGB0L7RhtGW0LDRhtGW0Zcg0L/RltCw0L3RltGB0YLRltCyLdC/0LXQtNCw0LPQvtCz0ZbQsiDQhNCy0YDQvtC/0LggXCJFUFRBXCIgTG9uZG9uKWB9Lz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb24xfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCLQl9Cw0LrQvtC/0LXRhtGMINCbLtChLi0g0LPQvtC70L7QstCwINC20YPRgNGWLCDQt9Cw0YHQu9GD0LbQtdC90LjQuSAg0LTRltGP0Ycg0LzQuNGB0YLQtdGG0YLQsiDQo9C60YDQsNGX0L3QuCwg0LLQuNC60LvQsNC00LDRhy3QvNC10YLQvtC00LjRgdGCINCb0YzQstGW0LLRgdGM0LrQvtCz0L5cclxuICAgICAgICAgICAgICAgICAgICDQtNC10YDQttCw0LLQvdC+0LPQviDQvNGD0LfQuNGH0L3QvtCz0L4g0LvRltGG0LXRjiDRltC80LXQvdGWINChLiDQmtGA0YPRiNC10LvRjNC90LjRhtGM0LrQvtGXLCDQv9C+0YfQtdGB0L3QuNC5INCw0LzQsdCw0YHQsNC00L7RgCDQvNGD0LfQuNGH0L3QvtGXICDQutGD0LvRjNGC0YPRgNC4ICDQn9C+0LvRjNGJ0ZZcIi8+XHJcblxyXG4gICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uNH1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwi0KDQsNC50YIg0IYu0KEuLCDQutCw0L3QtNC40LTQsNGCINC/0LXQtNCw0LPQvtCz0ZbRh9C90LjRhSDQvdCw0YPQuiwgINC90LDRg9C60L7QstC40Lkg0YHQv9GW0LLRgNC+0LHRltGC0L3QuNC6INC70LDQsdC+0YDQsNGC0L7RgNGW0Zcg0LXRgdGC0LXRgtC40YfQvdC+0LPQviDQstC40YXQvtCy0LDQvdC90Y9cclxuICAgICAgICAgICAgICAgICAgICDRgtCwINC80LjRgdGC0LXRhtGM0LrQvtGXICDQvtGB0LLRltGC0LggINCG0L3RgdGC0LjRgtGD0YLRgyAg0L/RgNC+0LHQu9C10Lwg0LLQuNGF0L7QstCw0L3QvdGPICDQndCw0YbRltC+0L3QsNC70YzQvdC+0ZcgINCw0LrQsNC00LXQvNGW0ZcgINC/0LXQtNCw0LPQvtCz0ZbRh9C90LjRhSAg0L3QsNGD0Log0KPQutGA0LDRl9C90LhcIi8+XHJcblxyXG4gICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uNX1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwi0J7RgdGC0LDQv9GH0YPQuiDQnC4g0JwuLCDQtNC+0YbQtdC90YIg0LrQsNGE0LXQtNGA0LggINCz0YDQuCDQvdCwICDQvNGD0LfQuNGH0L3QuNGFINGW0L3RgdGC0YDRg9C80LXQvdGC0LDRhSDQhtC90YHRgtC40YLRg9GC0YMgINC80LjRgdGC0LXRhtGC0LIgINCg0JTQk9CjXCIvPlxyXG5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjd9IHRleHQ9XCLQl9Cw0YXQvtC00Y/QutGW0L0g0J4u0JIuLCDQtNC+0YbQtdC90YIg0LrQsNGE0LXQtNGA0Lgg0LXRgdGC0YDQsNC00L3QvtGXINC80YPQt9C40LrQuCDQhtC90YHRgtC40YLRg9GC0YMgINC80LjRgdGC0LXRhtGC0LIgINCg0JTQk9CjXCIvPlxyXG5cclxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjh9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD0n0JLQuNGI0L3QtdCy0YHRjNC60LAg0IYu0J8uLCDQstC40LrQu9Cw0LTQsNGHINCy0LjRidC+0Zcg0LrQsNGC0LXQs9C+0YDRltGXLCDQs9C+0LvQvtCy0LAg0YbQuNC60LvQvtCy0L7RlyDQutC+0LzRltGB0ZbRlyBcItCk0L7RgNGC0LXQv9GW0LDQvdC+XCJcclxuICAgICAgICAgICAgICAgICAgICDQoNGW0LLQvdC10L3RgdGM0LrQvtCz0L4g0LzRg9C30LjRh9C90L7Qs9C+INGE0LDRhdC+0LLQvtCz0L4g0LrQvtC70LXQtNC20YMg0KDQlNCT0KMnLz5cclxuXHJcbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb24zfSB0ZXh0PXtg0IbQstCw0L3QvtCy0LAg0Jsu0IYuLCDQstC40LrQu9Cw0LTQsNGHINC/0LXRgNGI0L7RlyDQutCw0YLQtdCz0L7RgNGW0Zcg0JrQlyBcItCb0YPRhtGM0LrQsCDQvNGD0LfQuNGH0L3QsCAg0YjQutC+0LvQsCAzXCJgfS8+XHJcblxyXG4gICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uNn1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwi0JzQsNGA0YbQtdCy0LAg0JYu0J8uLCDRgdGC0LDRgNGI0LjQuSDQstC40LrQu9Cw0LTQsNGHLCDQt9Cw0LLRltC00YPRjtGH0LAg0YTQvtGA0YLQtdC/0ZbQsNC90L3QuNC8INCy0ZbQtNC00ZbQu9C+0Lwg0KDRltCy0L3QtdC90YHRjNC60L7RlyDQtNC40YLRj9GH0L7RlyDQvNGD0LfQuNGH0L3QvtGXINGI0LrQvtC70Lgg4oSWMSDRltC80LXQvdGWINCcLiDQm9C40YHQtdC90LrQsFwiLz5cclxuICAgICAgICA8L1BlcnNvbkluZm9TZWN0aW9uPlxyXG4gICAgPC9XcmFwcGVyPik7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1Jlc3VsdHNGaWx0ZXJ9IGZyb20gXCIuL1Jlc3VsdHNGaWx0ZXJcIjtcclxuaW1wb3J0IHtDYXJkfSBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1JlZ3VsYXJIZWFkZXJ9IGZyb20gXCIuL1JlZ3VsYXJIZWFkZXJcIjtcclxuaW1wb3J0IHtJbmZvUGFnZX0gZnJvbSBcIi4vSW5mb1BhZ2VcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLzExNjMwMjMucG5nXCI7XHJcblxyXG5jb25zdCBDb21tb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke2xvZ299XCIpO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMDBweDtcclxuYDtcclxuXHJcbmNvbnN0IE1haW5TZWN0aW9uRmxleCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluU2VjdGlvbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjYXJkcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhcmRzKTtcclxuICAgIGNvbnN0IGlzRGF0YUluUGxhY2UgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5pc0RhdGFJblBsYWNlKTtcclxuICAgIGNvbnN0IGNhcmRDb3VudCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhcmRDb3VudCk7XHJcbiAgICBjb25zdCBzZWN0aW9uc0ZvckZpbHRlciA9IFtg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImAsIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFwiYCwgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcImAsYNCj0YHRliDQstGW0LTQtdC+YCxg0J/RgNC+INC60L7QvdC60YPRgNGBYF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29tbW9uV3JhcHBlcj5cclxuICAgICAgICAgICAgPFJlZ3VsYXJIZWFkZXIgY2FyZENvdW50PXtjYXJkQ291bnR9Lz5cclxuICAgICAgICAgICAgPFJlc3VsdHNGaWx0ZXIgc2VjdGlvbnM9e3NlY3Rpb25zRm9yRmlsdGVyfS8+XHJcbiAgICAgICAgICAgIHtpc0RhdGFJblBsYWNlID8gKFxyXG4gICAgICAgICAgICAgICAgPE1haW5TZWN0aW9uRmxleD5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FyZHMubWFwKGNhcmQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y2FyZC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9Vcmw9e2NhcmQudmlkZW9Vcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb3NpdGlvbj17Y2FyZC5jb21wb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2FyZC5pZC4kb2lkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9PC9NYWluU2VjdGlvbkZsZXg+KSA6ICg8SW5mb1BhZ2UvPil9PC9Db21tb25XcmFwcGVyPik7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7QWlPdXRsaW5lRmlsZVNlYXJjaCwgSGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGV9IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vaG9va3MvVXNlV2luZG93RGltZW5zaW9uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgd2lkdGg6IDE1JTtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlIDJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBib3JkZXI6IHNvbGlkIGRhcmtyZWQgMnB4O1xyXG4gICAgY29sb3I6IGRhcmtyZWQ7XHJcbiAgfWA7XHJcblxyXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5pbnB1dENvbG9yIHx8IFwicGFsZXZpb2xldHJlZFwifTtcclxuYDtcclxuXHJcblxyXG5jb25zdCBJbnB1dFN0eWxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dFdyYXBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDYwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW5gXHJcbiAgY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5cclxuY29uc3QgRXJyb3IgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO2BcclxuXHJcbmNvbnN0IFdhcm4gPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO2BcclxuXHJcbmV4cG9ydCBjb25zdCBSZWd1bGFySGVhZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoRmllbGQgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZXJyb3IpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge2hlaWdodCwgd2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IFN0cmluZyhzZWFyY2hGaWVsZC5jdXJyZW50LnZhbHVlKTtcclxuICAgICAgICBpZiAoc3RyLmxlbmd0aCA8IDMgfHwgc3RyLmluY2x1ZGVzKFwiIFwiKSkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJFUlJPUlwiLCBtc2c6IFwi0JHRg9C00LHRjCDQu9Cw0YHQutCwINCy0LLQtdC00ZbRgtGMINCx0ZbQu9GM0YjQtSAzINGB0LjQvNCy0L7Qu9GW0LIg0ZYg0L3QtSDQstC40LrQvtGA0LjRgdGC0L7QstGD0LnRgtC1INC/0YDQvtCx0ZbQu1wifSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiU0VBUkNIXCIsIHF1ZXJ5OiBzdHJ9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SW5wdXRXcmFwZXI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3Bhbj48QWlPdXRsaW5lRmlsZVNlYXJjaC8+0J/QvtGI0YPQuiDQstGW0LTQtdC+INC/0L4g0L/RgNGW0LfQstC40YnRgyDRg9GH0LDRgdC90LjQutCwIDwvU3R5bGVkU3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9IHJlZj17c2VhcmNoRmllbGR9IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNGW0YLRjCDQv9GA0ZbQt9Cy0LjRidC1INGD0YfQsNGB0L3QuNC60LAuLi5cIiBpbnB1dENvbG9yPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiXCIgb25DbGljaz17aGFuZGxlcn0+0J/QvtGI0YPQujwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0lucHV0V3JhcGVyPlxyXG4gICAgICAgICAgICB7ZXJyb3IgIT09IFwiXCIgPyA8RXJyb3I+PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz57ZXJyb3J9PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz48L0Vycm9yPiA6IG51bGx9XHJcbiAgICAgICAgICAgIHtwcm9wcy5jYXJkQ291bnQgPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgPFdhcm4+PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz7QstGW0LTQtdC+INC90LUg0LfQvdCw0LnQtNC10L3RljxIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZS8+PC9XYXJuPiA6IG51bGx9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCwge2tleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtGYUZvbGRlciwgRmFVbml2ZXJzaXR5fSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XHJcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zXCI7XHJcblxyXG5jb25zdCBGaWx0ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtgO1xyXG5cclxuY29uc3QgRmlsdGVyU2VjdGlvbiA9IHN0eWxlZChGaWx0ZXJDb250YWluZXIpYFxyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogZGFya3JlZDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGl2VGhpbkxpbmUgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogZ3JheSBzb2xpZCAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBoZWlnaHQ6IDIlO1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBncm93XzAgPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xyXG4gIH1cclxuICAwJSB7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ3Jvd18xID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcclxuICB9XHJcbiAgMCUge1xyXG4gICAgbGVmdDogMXB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVGhpbkxpbmVJbm5lckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xyXG4gIGxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogcmVkIHNvbGlkIDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgaGVpZ2h0OiAxJTtcclxuICBhbmltYXRpb246ICR7cHJvcHMgPT4gKHByb3BzLmFuaW1hdGlvbiAlIDIgPT09IDApID8gZ3Jvd18wIDogZ3Jvd18xfSAwLjVzIGxpbmVhcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXN1bHRzRmlsdGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3NlY3Rpb25zLF0gPSB1c2VTdGF0ZShwcm9wcy5zZWN0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgW3JlZExpbmVXaWR0aCwgc2V0UmVkTGluZVdpZHRoXSA9IHVzZVN0YXRlKFwiMTBweFwiKTtcclxuICAgIGNvbnN0IFtyZWRMaW5lTGVmdCwgc2V0UmVkTGluZUxlZnRdID0gdXNlU3RhdGUoXCIxMHB4XCIpO1xyXG4gICAgY29uc3QgW2FuaW1hdGlvbiwgc2V0QW5pbWF0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qge2hlaWdodCwgd2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xyXG4gICAgY29uc3QgbWFya2VkU2VjdGlvblJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIC8vaGFuZGxpbmcgcmVkTGluZSBvbiByZXNpemVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcmVSZW5kZXJSZWRMaW4oe3RhcmdldDptYXJrZWRTZWN0aW9uUmVmLmN1cnJlbnR9KVxyXG4gICAgfSwgW3dpZHRoXSk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlUmVuZGVyUmVkTGluKGV2ZW50KSB7XHJcbiAgICAgICAgbWFya2VkU2VjdGlvblJlZi5jdXJyZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGxldCBjdXJyZW50U2VjdGlvbldpZHRoID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgIGxldCBjdXJyZW50U2VjdGlvbkxlZnQgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIDEwO1xyXG4gICAgICAgIHNldFJlZExpbmVXaWR0aChjdXJyZW50U2VjdGlvbldpZHRoICsgXCJweFwiKTtcclxuICAgICAgICBzZXRSZWRMaW5lTGVmdChjdXJyZW50U2VjdGlvbkxlZnQgKyBcInB4XCIpO1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gYW5pbWF0aW9uICsgMTtcclxuICAgICAgICBzZXRBbmltYXRpb24oY291bnRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25GaWx0ZXJTZWN0aW9uQ2xpY2soc2VsZWN0ZWRTZWN0aW9uLCBldmVudCkge1xyXG4gICAgICAgIHJlUmVuZGVyUmVkTGluKGV2ZW50KTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRTZWN0aW9uU3RyaW5nID0gc2VsZWN0ZWRTZWN0aW9uLnNlY3Rpb247XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRTZWN0aW9uU3RyaW5nKTtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkU2VjdGlvblN0cmluZykge1xyXG4gICAgICAgICAgICBjYXNlIGDQo9GB0ZYg0LLRltC00LXQvmA6XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJBTExcIn0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XCJgOlxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZ3JvdXAtMVwifSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcImA6XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJncm91cC0yXCJ9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXCJgOlxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZ3JvdXAtM1wifSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVySW5mb1BhZ2UoZXZlbnQpIHtcclxuICAgICAgICByZVJlbmRlclJlZExpbihldmVudCk7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiSU5GT19QQUdFXCJ9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVuZGVyZWRTZWN0aW9ucyA9IHNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxyXG4gICAgICAgIHNlY3Rpb24gPT09IFwi0J/RgNC+INC60L7QvdC60YPRgNGBXCIgP1xyXG4gICAgICAgICAgICA8RmlsdGVyU2VjdGlvbiAgb25DbGljaz17cmVuZGVySW5mb1BhZ2V9IGtleT17c2VjdGlvbn0+IDxGYVVuaXZlcnNpdHkvPntzZWN0aW9ufSA8L0ZpbHRlclNlY3Rpb24+XHJcbiAgICAgICAgICAgIDogPEZpbHRlclNlY3Rpb24gIHJlZj17bWFya2VkU2VjdGlvblJlZn0gb25DbGljaz17KGUpID0+IG9uRmlsdGVyU2VjdGlvbkNsaWNrKHtzZWN0aW9ufSwgZSl9IGtleT17c2VjdGlvbn0+IDxGYUZvbGRlci8+e3NlY3Rpb259PC9GaWx0ZXJTZWN0aW9uPlxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyQ29udGFpbmVyIGNoaWxkcmVuPXtyZW5kZXJlZFNlY3Rpb25zfS8+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxEaXZUaGluTGluZT48VGhpbkxpbmVJbm5lckRpdiB3aWR0aD17cmVkTGluZVdpZHRofSBsZWZ0PXtyZWRMaW5lTGVmdH0gYW5pbWF0aW9uPXthbmltYXRpb259Lz48L0RpdlRoaW5MaW5lPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/QhtCy0LDQvdC+0LLQsCDQmy7Qhi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9CS0LjRiNC90LXQstGB0YzQutCwLTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/Ql9Cw0LrQvtC/0LXRhtGMLTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy/Ql9Cw0YXQvtC00Y/QutGW0L0tMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9Ca0YPQt9C90ZTRhtC+0LLQsC0xLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0JzQsNGA0YbQtdCy0LAtMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL9Ce0YHRgtCw0L/Rh9GD0Log0JwuINCcLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMv0KDQsNC50YIg0IYu0KEucG5nXCI7IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIGdldFdpbmRvd0RpbWVuc2lvbnMoKSB7XHJcbiAgICBjb25zdCB7IGlubmVyV2lkdGg6IHdpZHRoLCBpbm5lckhlaWdodDogaGVpZ2h0IH0gPSB3aW5kb3c7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2luZG93RGltZW5zaW9ucygpIHtcclxuICAgIGNvbnN0IFt3aW5kb3dEaW1lbnNpb25zLCBzZXRXaW5kb3dEaW1lbnNpb25zXSA9IHVzZVN0YXRlKGdldFdpbmRvd0RpbWVuc2lvbnMoKSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgICAgICAgIHNldFdpbmRvd0RpbWVuc2lvbnMoZ2V0V2luZG93RGltZW5zaW9ucygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gd2luZG93RGltZW5zaW9ucztcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldCcpKTtcclxuIiwiaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnXHJcblxyXG5jb25zdCBncm91cDEgPSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImA7XHJcbmNvbnN0IGdyb3VwMiA9IGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFwiYDtcclxuY29uc3QgZ3JvdXAzID0gYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcImA7XHJcblxyXG5sZXQgbXlDYXJkcyA9IFt7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMDdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCQ0LPRgNCw0YLRltC90LAg0KHRgtCw0L3RltGB0LvQsNCyLCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7Qk9C70ZbQvdC60LAuICcn0J/QvtGH0YPRgtGC0Y8nJywgICAgICAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Ci0LDQvdC+0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTk0eXRfc0tDNUV0M3I0OXpDRVJzZEJaZURRZ1ktR19pL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzA4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktCw0LvRltCz0YPRgNCwINCS0LDRgNCy0LDRgNCwLCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jwu0JvQtdC80ZbRiNC60L4uICcn0JrQvtC70L7QvNC40LnQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjNmhUSXFEbC1jQUYzQnIzbDFjMnV3cUZac0xWU1BUdi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQsNC70ZbQs9GD0YDQsCDQktCw0YDQstCw0YDQsCwgOSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCiLtCc0LDQutGB0ZbQvNC+0LIuICcn0JfQsNC00LfQtdGA0LrQsNC70LvRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNVlyNlF4bTRyc3RET01VMnZHbjVKd3E1VmZVcE4yU0QvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0LDRgdC40LvQtdCy0YHRjNC60LAg0KXRgNC40YHRgtC40L3QsCw3INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCT0ZbQu9C70L7Qui4nJ9Ch0LDQvNC+0YLQvdGPINCx0LDQu9GM0L3QsCDQt9Cw0LvQsCcnLCAgIDIp0KIu0KDQvtGB0YLQuNC80LDRiNC10L3QutC+Licn0KfQsNC60LvRg9C9JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHdHhVS3VVa0xLQW5oNW9DZjlGbHVpVVRRb0pDVGJNTS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQvtC70LjQvdC10YbRjCDQntC70LXQutGB0LDQvdC00YAsIDgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0JrQvtC70L7QtNGD0LEuICcn0JDRgNC60LDQvScnLDIp0KQu0KDQuNCx0ZbRhtGM0LrQuNC5LiAnJ9Cg0LXQs9C+0YLRg9GI0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX0NPUGVQendkZ1M3VV9PakV4T3B2OG5vejFtaVRlOGMvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0LDQu9Cw0LPQsNC9INCa0LDRgtC10YDQuNC90LAsIDkg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiDQotC10LzQsCDQtyDQstCw0YDRltCw0YbRltGP0LzQuCwgMinQky7QmtGD0YjQvdCw0YDQtdC90LrQvi4gJyfQnNC10LvQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb0JsVWZYV3FsaDV1RHNERkNYYkhnYzdYR2lBSkdiTEgvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0LXRgNCw0YHQuNC80LXQvdC60L4g0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCSLtCg0LDRh9C60L7QstGB0YzQutC40LkuINCi0L7QutCw0YLQuNC90LAuIDIp0JIu0JrQvtGB0LXQvdC60L4uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMURHbnNTUUdsQnU4WF9vRFB0M1lLdEttaVZ6Vi1HM3FKL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzBlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9C+0LvQvtC00L7QstGB0YzQutCwINCh0L7RhNGW0Y8sIDcg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0IYu0JLQsNC90YXQsNC70Ywu0KDQvtC90LTQviwgMinQnC7QlNGA0LXQvNC70Y7Qs9CwLicn0JLQtdGB0LXQu9CwINCz0YDQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMkt1dGotb3dwc3I4aGVscm1fa0ZaaDF5UXdNakVDN0EvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0L7Qu9GD0LEg0JDQu9GW0L3QsCwgOSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsINCG0YcuLCAyKdCRLtCU0LLQsNGA0ZbQvtC90LDRgS4g0J/RgNC10LvRjtC00ZbRj1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXV3aEtNS2RKWkloUnpuTTNWVTVtVHFFdUt4eFRlc2FPL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzEwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9GA0LjQs9C+0YAn0ZTQstCwINCa0LDRgtC10YDQuNC90LAsIDgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0KDQsNC90L7QuicnLCAgIDIp0IYu0JrQvtGA0L7Qu9GM0LrQvtCy0LAuJyfQk9C+0YDQvtCx0YfQuNC6JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhaU12NUx3WVY5bTJ3ei1TSk1HbnhmVXFJUlQ5TV9Fdy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JTQsNC90Y7QuiDQhNC70LjQt9Cw0LLQtdGC0LAsIDcg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JvRjtCx0LDRgNGB0YzQutC40LkuJyfQotCw0L3RhtGO0LLQsNC70YzQvdCwJycsIDIpINCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4g0JLQsNC70YzRgVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXZUa19tQUJfRUNoOVZEd1I2RU1hc1kxeTIxS1dyU1lIL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzEyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNGA0L7Qs9Cw0L0gINCc0ZbQu9Cw0L3QsCwgNSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QnNCw0LnRlNGALiAnJ9CS0LXRgdC10LvQsCDQs9GA0LAnJywgMinQlC7QkdCw0YjRgtC10LnQvS4gJyfQktCw0LvRjNGBINGB0LvQvtC90LXQvdGP0YInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVhiMGdJZ0Z5Q25MdUN4am41a2xhZVEwTGw5RHNrUlB6L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzEzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNGA0L7Qt9C00L7QstCwINCE0LvQuNC30LDQstC10YLQsCwgOSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLtCc0LXQvdGD0LXRgi4gMinQky7QmtC70LDRgdGB0LXQvS4g0J/QvtC70YzQutCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcjVfMThwUjdCTHhEU0RFbk1EN3JITkdqUjl6aUVpR24vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCX0LHRltGAINCc0LDRgNGW0Y8sIDgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0JPQtdC00ZbQutC1LiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwgICAg0IYg0YcuLCAyKdCgLtCo0YPQvNCw0L0uJyfQn9C10YDRiNCwINCy0YLRgNCw0YLQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xXzdxbjNmVHV0ZEtHY0dkYmd2MTNyS29rSjhqeGdrM2EvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90YzQutGW0LIg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JTRltCw0LHQtdC70LvRli4g0KHQutC10YDRhtC+LCAgMinQni7Qk9C10LTRltC60LUuICcn0JzQsNC70LXQvdGM0LrQsCDQvyfRlNGB0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXZZZVZrUmFWMW1iMzN1SjFER01yMjBxb2lrRkNyOUF5L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JzQsNGA0ZbQsNC8LCA4INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QnNCw0LnQutCw0L/QsNGALiAnJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINGB0L7Qu9GMINC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyUmxMTUpqb1d3VFZ1cDdfdlZNRDREM25sMlktbHNwTy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjtC6INCc0LDRgNGW0LDQvCwgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCa0LjRgNC10LnQutC+LiAnJ9Ch0YLRgNC40LEt0YHQutC+0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUltcFBxOW5jYk1oNVQxU2NBSGZEbXo1N0JEbExaQ0YyL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtGB0YPQv9C+0LLQsCDQkNC70ZbRgdGW0Y8sIDgg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCg0LXQudC90LXQutC1LiAnJ9CT0LDQstC+0YInJywgMinQmS7QoS7QkdCw0YUuICcn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0LTQviDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMGc5Q0NKb1hSemVHOENpRmhnbkVCelRRQkxJV0RhbkEvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7QstCw0LvQtdC90LrQviDQktCw0YDQstCw0YDQsCwgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7Qk9C10YLQsNC70L7QstCwLicn0KDQsNC90L7QuiDQsiDQu9GW0YHRlicnLCAgMinQki7Qn9C+0LTQstCw0LvQsC4gJyfQmtCw0L/RgNC40LfRg9C70Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVMzOF9vRUNPQm83S0dEVjFhekpVeDN6T1l3Z1FFUUlWL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzFhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0YDQtdC90ZbQstGB0YzQutCwINCU0LDRgCfRjywgOSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KAu0JLQsNC90LTQsNC7Licn0JLQvtC00L7Qs9GA0LDQuScnLCAgICAgICAgIDIp0J8u0JfQsNGF0LDRgNC+0LIuJyfQl9C90LDQudC+0LzQuNC5INGB0LjQu9GD0LXRgicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOUNBelBDYVdyQU5fU1d6YUpGZEVweFBJT1F3LXJmTFUvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7RgdGC0LXQvdC60L4g0K/RgNC+0YHQu9Cw0LLQsCwgNyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCa0L7RgdC10L3QutC+LiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDZGRZY295Z1RjdG9hYkdRRjdwVDJwb1J2Q3VwVkdfYy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGB0YLQtdC90LrQviDQr9GA0L7RgdC70LDQstCwLCA3INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JnRlNC90YHQtdC9Licn0KfQsNGA0ZbQstC90LjQuSDRgtCw0L3QvtC6JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1QjI5YlRQRWlZZHVnSmZMT1psNFNRR3JGWTluUXByLS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JvQsNGC0LrQvtCy0YHRjNC60LAg0ITQu9C40LfQsNCy0LXRgtCwLCA5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0L7RgdC10L3QutC+LiDQktCw0LvRjNGBLCAgICAyKdCeLtCT0YDQtdGH0LDQvdGW0L3QvtCyLicn0JzRltC5INC60L7QvdC40LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZZQXctcTdmOEY5SkJQbWZuOHRFa3BKVDgxSjdFYWhBL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzFlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9GW0YjQvNCw0L0g0JTQsNGA0LjQvdCwLCA5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCf0L7QtNCy0LDQu9CwLicn0JzQsNGA0Ygt0LPRgNC+0YLQtdGB0LonJywgICAgICAgICAgMinQoS7QnNCw0LnQutCw0L/QsNGALiAnJ9Ca0L7Qu9C40YHQutC+0LLQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTnNXejNUUjBTS2lUdGNOQ0FKZTA1OWJoaEZvbXRfTkUvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDQs9C+0LvQsCDQodC+0YTRltGPLCA4INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQry7QkdC+0LHQsNC70ZbQui4nJ9Ch0LLRj9GC0LrQvtCy0LAg0L/QvtC70YzQutCwJyc7IDIp0IYu0JHQtdGA0LrQvtCy0LjRhy4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZ3VBeHM1Z193Ykd2X3R3cWl5cG8wZThGSE93dW0tSWgvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDQt9GD0YDQtdC90LrQviDQnNCw0LnRjywgOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC4g0JHQvtCx0LXRgC4gJyfQkNCz0LXQvdGCINClJycsICAgICAgICAgIDIp0IYu0IbQvtGA0LTQsNC9LiAnJ9Cf0L7Qu9GO0LLQsNC90L3RjyDQvdCwINC80LXRgtC10LvQuNC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUllMVdDUXBnUHVMWWRLTnhWR3VMa2VJVm5ZSk5aSjlUL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzIxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNCw0YDRh9C10L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDQtNC+INC80ZbQvdC+0YAsIDIp0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJ9CR0LDQsdCwINCv0LPQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWkpvNEdVTFo5c2ZjVXVBcEY1anlvSElVVl9JS0FWcmcvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LDRgNGH0YPQuiDQnNCw0LrRgdC40LwsIDgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQpC4g0KjQv9GW0L3QtNC70LXRgC4g0KHQvtC90LDRgtC40L3QsCwg0YLQsi4xNTcg4oSWNFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXNDN01VamNrbnJuWlpaNWhmTUNYYlN2czM2S0EzcHBWL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzIzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNCw0YDRh9GD0Log0JzQsNC60YHQuNC8LCA4INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCT0ZbQu9C70L7Qui4gJyfQmtCw0L/RgNGW0YfRltGU0YLRgtC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZZEFpaHZBUWtDVDhiYnlXNDRwUWkyaVpobVgxYzNLei9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyNFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQvtGC0YPQt9C60LjQvdCwINCb0ZbQtNGW0Y8sIDkg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QkdGW0LvQsNGH0LXQvdC60L4uICcn0KPQutGA0LDRl9C90YHRjNC60LjQuSDRgtCw0L3QvtC6JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFicE85ZEhBY2JQOEtsYVdUXzFuWFhRaVplYnVEOEYwcC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQvtGC0YPQt9C60LjQvdCwINCb0ZbQtNGW0Y8sIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QnNC+0YbQsNGA0YIuICcn0JzQtdC90YPQtdGCJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDX214QVU2NVZ2dnZmaVBvUlFzY0tSMG9VRFdwSERRdC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyNlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J3QvtCy0L7RgdGW0LvRjNGB0YzQutCwINCa0LDRgtC10YDQuNC90LAsIDcg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAg0YLQsi4zNiwg0IYt0IbQhtCG0YcuLCAyKdCGLtCR0LXRgNC60L7QstC40YcuINCf0YDQtdC70Y7QtNGW0Y9cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZNzJDRkxPTVBpYndUVVBnV09tc1FIM1lKUHZpQmpEYS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J7Qu9GM0YXQvtCy0YHRjNC60LAg0JDQvdGW0YLQsCwgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCGLtCf0LDQstC70ZbQui4gJyfQodC90ZbQttC40L3QutC4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFycy1WZ0ZNbklZWlZtOWtPak5oNkZUbF9QMENBRFJCMS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J7Qu9GM0YXQvtCy0YHRjNC60LAg0JDQvdGW0YLQsCwgOSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCdLiDQmtCw0YDQv9C10L3QutC+LiDQldGC0Y7QtCDRgdGWINC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrUzNCcVF3NC1tc01vem5PM056X2lXYzV5dGxKT0ZUbS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J7RgdGC0LDQv9GH0YPQuiDQmtCw0YDRltC90LAuIDgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JPRltC70LvQvtC6ICcn0JTQt9Cy0ZbQvdC+0YfQutC4JycsIDIp0IYu0KXRg9GC0L7RgNGP0L3RgdGM0LrQuNC5LiAnJ9CS0L7Qs9C90ZbQstC+0YfQutCwLdGB0YLRgNC40LHRg9C90ZbQstC+0YfQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2UkFjTjJPNmt1bktaQUZyYmdCSHNFTmlaZzlpS3M0Ry9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J7RhdGA0ZbQvSDQr9GA0LXQvNCwLCA4INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuICcn0J3QvtCy0LXQu9CwJycsICAgICAgMinQoS7QnNCw0LnQutCw0L/QsNGALicn0KLQvtC60LDRgtC40L3QsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xencxSkswSjRkOEhrLXpuYnYtNW9EbmEtcUwzY3dSRVAvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMmJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0LDQstC70LXQvdC60L4g0KHRgtC10YTQsNC90ZbRjywgNyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JvRjtCx0LDRgNGB0YzQutC40LkuICcn0J/RltGB0L3RjycnLDIpINCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4nJ9Ca0LvQvtGD0L3QuCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSW1ud0pqMkRlcXotVEpmdlhBQ0NyWnBpWk5UM0JuS0gvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMmNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0LDQvdGM0LrQvtCy0LAg0JDQvdC90LAsIDgg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4gJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDQtNC+INC80ZbQvdC+0YAsICAgICAgICAyKdCbLtCo0YPQutCw0LnQu9C+LiAnJ9CG0L3RgtC10YDQvNC10YbQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeXJBSHI2aTE3TlNoUDVxYUltUG5XeC14SlFqQ01NeTIvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMmRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0LDRgNGE0YzQvtC90L7QsiDQlNC80LjRgtGA0L4sIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J0u0JLQu9Cw0LTQuNC60ZbQvdCwLdCR0LDRh9C40L3RgdGM0LrQsC4nJ9Cp0L7RgdGMINGB0YPQvNC90LUnJywgMinQni7Qk9C10LTRltC60LUuICcn0KLQsNC90LXRhtGMJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFORGR3NTdSc3JtTHJFX3lXU0cwdUZKWEVqV2NHcUdtUi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/QvtCz0L7RgNGU0LvQvtCyINCQ0YDRgtC10LwsIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiAnJ9Cc0LXQvdGD0LXRgicnLCAyKdCdLtCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbmU4NmlNLU5VczZOY2lvQnN2VWpmUWE2TW43Y1NBUjcvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMmZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0YPQt9Cw0L3QvtCy0LAg0JzQsNGA0ZbRjywgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoy4g0JPRltC70LvQvtC6LiAnJ9Ca0L7RgNC+0LvRltCy0YHRjNC60LjQuSDQvNC10L3Rg9C10YInJywgMinQhi7QhtC+0YDQtNCw0L0uIMKr0J/QvtC70Y7QstCw0L3QvdGPINC90LAg0LzQtdGC0LXQu9C40LrQsMK7XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xT0dTX2Zxekp2YkI3YU5QcmV4d3FESzV4MGxzLTIwQ0MvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0LXQt9C90ZbQuiDQotC10YLRj9C90LAsIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J0u0KLQvtGA0L7Qv9C+0LLQsC4g0JLQsNGA0ZbQsNGG0ZbRlywgICAgIDIp0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5LiAnJ9Cc0LDQu9C10L3RjNC60LjQuSDQttC+0L3Qs9C70LXRgCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeEd4TlRUdFdyaGRPdTZZN0d1ZVVBZ0dYdmpvTGxNQmwvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0LjQsdCw0Log0JDQvdCw0YHRgtCw0YHRltGPLCA4INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKS7QnNC10LvQsNGA0YLRltC9Licn0KDQsNC90L7QuicnLCAyKdCcLtCc0LDQudGU0YAuJyfQndC10LfQstC40YfQsNC50L3QsCDQv9GA0LjQs9C+0LTQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdXptVnFGVm5uUWFJR1g3bzNILTd0TmUwa3AxWmlVdlAvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0ZbQv9C90LjQuSDQkdC+0LPQtNCw0L0sIDgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCGLiDQkdC10YDQutC+0LLQuNGHLiDQktCw0YDRltCw0YbRltGXLCAgICAgMinQlC4g0KDQvtGD0LvRli4nJ9CSINC60YDQsNGX0L3RliDQs9C90L7QvNGW0LInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVFscjFfLXBGQWxMSWl4S2toeDItWnh4RVlaaEFaOVo3L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzMzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQoNC+0LzQsNC90YfQtdC90LrQviDQldC70LjRgdC10LksIDgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCoLtCT0YPQvdC+Licn0JzQsNGA0Ygg0LzQsNGA0ZbQvtC90LXRgtC+0LonJywgICAyKSDQni7Qk9GA0LXRh9Cw0L3RltC90L7Qsi4nJ9Cd0LXQt9Cy0LjRh9Cw0LnQvdCwINC/0YDQuNCz0L7QtNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpSS16anE0UWltREw5VExFNUJSWXVybXVBTDE2ZlNjVS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzNFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQsNC50YfRg9C6INCv0YDQvtGB0LvQsNCy0LAsIDkg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi4g0JzQsNC60YHQuNC80L7Qsi4nJ9CR0LDQsdCwINCv0LPQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWDVDN2tmTmQzUWxvWmwwVEF2Tl9BUWgwLXFYdHBTU0IvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LDQudGH0YPQuiDQr9GA0L7RgdC70LDQstCwLCA5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0Jou0KDQvtC70LvRltC9LiAnJyDQqNC+0LrQvtC70LDQtNC90LUg0L/QtdGH0LjQstC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2dlltX0VkRHhfLTNCUkhKTXlEMzVrM29DNEYydFY1Ni9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzNlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHRltGC0YjQsNGU0LLQsCDQl9Cw0YDQtdC80LAsIDkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLtCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGAOyAyKdCaLtCh0LvQvtC90ZbQvNGB0YzQutC40LkuICcn0JTRjtC50LzQvtCy0L7Rh9C60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUg2ZWRRdHNScDBfd2N1T1lSQUVoMWxmZlJ6MFRYdGliL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCE0LLQs9C10L3RltGPLCA5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0LLQsNGB0L3QtdCy0YHRjNC60LjQuS4nJ9CU0YPQvNC60LAnJywgMinQlC7QkNC70LXQutGB0LDQvdC00LXRgC4gJyfQl9C40LzQvtCy0LAg0YDQsNC/0YHQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNkxXOUVlc1BQczFTVGk2a1FwUXhkRUp6azNQZ25IWWovcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0YLRgNC40LnRgdGM0LrQsCDQkNC80LXQu9GW0Y8sIDgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCSLtCa0L7RgdC10L3QutC+Licn0JTQvtGJ0LjQuicnOyAgICAgIDIp0J4u0JHRltC70LDRh9C10L3QutC+LiAnJ9CV0LrRgdC/0YDQvtC80YInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBoOU9OUkcyVDQydnhBbFd5NEFTUDBxZ2E4SVUwMnJ2L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodGC0YPQtNC30LjQvdGB0YzQutCwINCE0LvQuNC30LDQstC10YLQsCwgNyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JsuINCc0L7RhtCw0YDRgi4gJyfQnNC10L3Rg9C10YInJywgICAgMinQoy4g0JPRltC70LvQvtC6LiAnJ9Ce0YHRltC90L3RltC5INC10YHQutGW0LcnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZkc09idWI5WjBFN1pNMVFZTXNmcWthbGpubkxRMmplL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodGD0YXQsNC9INCU0ZbQsNC90LAsIDgg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCo0YPQutCw0LnQu9C+LtCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRgtC10LzRgyDQki7QqNCw0ZfQvdGB0YzQutC+0LPQvjsgMinQoC7QpNGD0YfRgS4nJ9Cc0LDQu9C10L3RjNC60LUg0YDQvtC30LHQuNGC0LUg0YHQtdGA0YbQtScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR3U1dWNvQ0dGaHlFbk1oMy1JRFVKLXVGMFR1ajM3VVovcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzM2JcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0LXRgNC/J9GP0Log0JDQsNGA0L7QvSwgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0IYu0JHQtdGA0LrQvtCy0LjRhy4g0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGD0LrRgNCw0ZfQvdGB0YzQutGDINGC0LXQvNGDOyAyKdCiLtCe0YHRgtC10L0uICcn0JzQsNC70LXQvdGM0LrQuNC5INC10LvRjNGEJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFadFFiTkJCZ0dtT3pNV25uSEFGLTdfQ0JzWGszTHctMi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQuNC80YfQtdC90LrQviDQndCw0LTRltGPLCA4INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QqNGC0L7Qs9Cw0YDQtdC90LrQvi4gJyfQnNC10YLQtdC70LjQuicnLCAyKdCSLtCT0ZbQu9C70L7Qui4gJyfQnNGW0YHRj9GH0L3QtSDRgdGP0LnQstC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFQUzlBR0h5RURxc3RqcUExTWlFYlRrcDVqMVV1U2hyRy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLRltGJ0LXQvdC60L4g0JLQtdGA0L7QvdGW0LrQsCwgNyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuICcn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0LTQviDQvNGW0L3QvtGALCAyKdCbLiDQqNGD0LrQsNC50LvQvi4g0JLQsNGA0ZbQsNGG0ZbRl1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZ0cmo5azVqaER4Vmk1dWZoWFkzVEhrd09LOFkxMkhtL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotC+0LTQvtGA0L7QstCwINCU0LDRj9C90LAsIDYg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JHQsNGA0LLRltC90YHRjNC60LjQuS4gJyfQl9Cw0LnRh9C40LonJywgICAgICAgICAgMinQnC7Qm9GO0LHQsNGA0YHRjNC60LjQuS4gJyfQn9C70Y/RgdC+0LLQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUEF6SUJ0akcwTmZxYXpVSTI1SHNSckZWWGpMeXoyQmkvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzM2ZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0L7QvdGW0ZTQstC40Ycg0JrRgdC10L3RltGPLCA5INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCh0L/RltC70ZbQvtGC0ZYuJyfQk9GD0YbRg9C70Y/RgtCwJycsICAgMinQki7Qk9GW0LvQu9C+0LouJyfQoyDRgdGC0LDRgNC+0LzRgyDQktGW0LTQvdGWJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExOXczd25ITXA2WE5XU0tLcjlWSklvWWpWSVA5TWxBTy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0MFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLRjtGC0YzQutC+INCS0L7Qu9C+0LTQuNC80LjRgCwgOSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QmtGD0LvQsNGDLtCh0L7QvdCw0YLQuNC90LAsINGC0LIuNTUg4oSWMywgMinQoC7Qm9GW0YHQvtCy0LAuJyfQktC10YHQtdC70LjQuSDQvdCw0YHRgtGA0ZbQuScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYmctSEs3THAzVXdqR2szTUlUVGREOWVRN3JGZGh4MUgvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzNDFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCk0LXRgdC10L3QutC+INCQ0L3QvdCwLCA4INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7Qk9C10LTRltC60LUu0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsICAyKdCSLtCT0LDQstGA0LjQu9GW0L0uICcn0JrQsNC/0YDRltGH0YfRltC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFanJxOFpFWEJKcV9BTmZBaVktNWpLSDdSczU4Zkx1Qy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0MlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KfQvtGA0L3QtdC5INCv0L3QsCwgNyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JwuINCV0LrRiNGC0LXQudC9LiAnJ9Ca0LDQv9GA0LjQtyDQs9C90L7QvNGW0LInJzsgIDIp0KEu0K7RhNC10YDQvtCyLiAnJ9Cd0L7QutGC0Y7RgNC9JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFnNmJCN2FxV3B0dzVsTG5BaVhrbE9GcFFsNFgwTkxLai9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0M1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KjQutGD0YDQutC+INCi0LjQvNC+0YTRltC5LCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNC+0L/QtdC9LiAnJ9CS0LDQu9GM0YEnJyDQu9GPINC80ZbQvdC+0YAsICAgICAyKdCbLtCo0YPQutCw0LnQu9C+LiAnJ9CS0LXRgdC10LvQsCDQvNC+0LfQsNGX0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZUpKNDRaYmdUclVUZEgtdEJQS0d5YzFLXzBycnlqNF8vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzNDRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCu0YDRh9GD0Log0K/QvdCwLCA3INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQnC4g0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCwg0YLQsi4zNiDihJYxLCDQhiDRhy4sMinQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9CS0YDQsNC90ZbRiNC90Y8g0LzQvtC70LjRgtCy0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9QVXVIMnF6YVFVTHlwdnV5M002US1mN3Z2aFpsQW54L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzQ1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkNC80ZbRhdCw0LvQsNC60ZbQvtCw0ZQg0ITQvNC10LvRjNGP0L0sIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCR0ZbQu9Cw0YfQtdC90LrQvi4nJ9Ce0YHRltC90L3RltC5INC10YHQutGW0LcnJywgMinQnC7QmtCw0YDQvNGW0L3RgdGM0LrQuNC5LiAnJ9CT0YPQvNC+0YDQtdGB0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpmcWt5RzZCcFozXzFYWGRmX0ZWWU9XRm1wYWtqV1dQL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0NlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JDQvdGC0L7QvdGO0Log0JLQsNGA0LLQsNGA0LAsIDEyINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0J/Qu9C10LnRlNC70YwuINCh0L7QvdCw0YLQuNC90LAg0YDQtSDQvNCw0LbQvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMURKZUhmM2ZBdVo1NVBmNjVtTUF0dzJQY3Q5NmRmYS10L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0N1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JDQvdGC0L7QvdGO0Log0JLQsNGA0LLQsNGA0LAsIDEyINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0JzQsNC50LrQsNC/0LDRgC4nJ9CSINC60L7QstCw0LvRjNC90ZYnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsWHlLdXdNX0pneFlabDZlV2tBc2VVNnZOYVd6N3BZei9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNDhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCR0LDQsdGH0LDQvdGW0Log0JDQvdC00YDRltC5LCAxMCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JQu0KfQuNC80LDRgNC+0LfQsC4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALiAyKdCuLtCR0ZbQu9C60L7QstGB0YzQutC40LkuICcn0KDQvtC30LTRg9C80LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFVSEFzTktqY0ppQmd4QWRJTE9zakRFUkpLUU16ZXE3QS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNDlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCR0LDQu9GD0YLQsCDQkNC70ZbQvdCwLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEpINCVLtCT0YDRltCzLiAnJ9Ci0LDQvdC10YbRjCDQtyDQmdC+0LvRjNGB0YLQtdGA0LAnJywgMinQmy7Ql9Cw0LHQsNGA0LAuJyfQndGW0Ycg0Y/QutCwINC80ZbRgdGP0YfQvdCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb1hHRjNtNDFLLVFOOFkxLVdfajg1RHJUamtrODhzUVgvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzRhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkdCw0YHQuNGB0YLQsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCkLtCo0L7Qv9C10L0uINCS0LDQu9GM0YEsINGC0LIuNjQg4oSWMSwgMinQoS7QkdC+0YDRgtC60LXQstC40YcuINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuNiDihJYxXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXNQV1pTUG40VU1KVmRmejczZ3JhRHdkd0l4eVhnakJZL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0YlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JHRltC70ZbQvdC60LXQstC40Ycg0J3QsNGC0LDQu9GW0Y8sIDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC7Qm9C40YHQtdC90LrQvi4g0JXQu9C10LPRltGPLDIp0Jou0KfQtdGA0L3Rli4g0JXRgtGO0LQg4oSWMSDRgtCyLjc0MFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFBUl9XVzBDRlNTQ1h6VkFmckhYdXdCQUQtX1FDOGo2Vy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCR0YPQu9GM0LrQvtCy0YHRjNC60LAg0JzQsNGA0LjQvdCwLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCULtCn0ZbQvNCw0YDQvtC30LAuINCh0L7QvdCw0YLQsCDRgdC+0LvRjCDQvNCw0LbQvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJveGR0Z0FkaEJJSmR0Y3hkem5aSFAtcTVmYXFhNVFLL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0ZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JHRg9C70YzQutC+0LLRgdGM0LrQsCDQnNCw0YDQuNC90LAsIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi7Qk9Cw0LHQtdC7LiAnJ9CU0LXRgNC10LLQviDQttC40YLRgtGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZlhaNk5kc042dTc4dEk2ZXJLRWpYMm9mZXNIQjJlYmgvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzRlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktCw0LrRg9C70LXQvdC60L4g0JDRgNGW0L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QkdC10YDQutC+0LLQuNGHLiDQktCw0YDRltCw0YbRltGXINC90LAg0YLQtdC80YMg0LPRgNGD0LfQuNC90YHRjNC60L7RlyDQvdCw0YDQvtC00L3QvtGXINC/0ZbRgdC90ZYgJyfQodCy0ZbRgtC70Y/Rh9C+0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDZHRYb1Z6akVsMVlxVkNkQnl4S3NaZHFFamZ0MWhzNi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0LDQutGD0LvQtdC90LrQviDQkNGA0ZbQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCU0LbQvtC/0LvRltC9Licn0JDRgNGC0LjRgdGCINC10YHRgtGA0LDQtNC4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR250aVl2THpIclVYSXNXRGZkSHA0MC10dDV5WXVpZ3EvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzUwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktCw0YHQuNC70YzRlNCy0LAg0JLQtdGA0L7QvdGW0LrQsCwgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KAu0JPQu9GW0ZTRgC4g0J/RgNC10LvRjtC00ZbRjyDQtNC+INC80ZbQvdC+0YA7MinQoS7QlNC20LXRgNCx0LDRiNGP0L0uICcn0KjQstC40LTQutC40Lkg0YDRg9GFJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUUJndGRodzJJUWVUSDZRRVluS0xHQmFsWDBLMnVwTjQvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzUxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQktC+0LnRgtC10L3QutC+INCb0ZbQu9GW0Y8sIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy4g0KjRg9C60LDQudC70L4uJyfQn9C+0L3RlicnLCAyKdCeLtCg0LjQsdCw0LvQvtCy0LAuICcn0J3QtdC/0L7RgdC40LTQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMS1MX2tKSHUxUHBrUEdSQ0pfRWZ4RkxCYm1jOGZPT3dxL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1MlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQvtC50YfQtdC90LrQviDQktC70LDQtNC40YHQu9Cw0LIsIDExINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSkg0Jku0KEu0JHQsNGFLtCU0LLQvtCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YTQsCDQvNCw0LbQvtGAOyAyKdCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9INC00L4g0LTRltGU0Lcg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF3dTVrbFhHRzdCaDJmUGxSM1liZU1sU0taQlQ4UFJuTi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0L7RidC40L3RgdGM0LrQuNC5INCG0LvQu9GPLCAxMiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlS7Qk9GA0ZbQsy4g0J3QvtC60YLRjtGA0L0sIDIp0Jwu0KDQuNC80YHRjNC60LjQuS3QmtC+0YDRgdCw0LrQvtCyLiAnJ9Cf0L7Qu9GW0YIg0LTQttC80LXQu9GPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN2xiUzBMOTU2YU5aOUQwR1RJLXAtazM5ejRscGVoQzcvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9Cw0LvQtdGH0LXQsiDQhtCy0LDQvSwgMTEg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCe0LHRgC4g0JMu0JHQtdC3J9GP0LfQuNGH0L3QvtCz0L4uICcn0J3RltGHINGP0LrQsCDQvNGW0YHRj9GH0L3QsCcnLCAyKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuICcn0J3QtdCw0L/QvtC70ZbRgtCw0L3RgdGM0LrQsCDQv9GW0YHQtdC90YzQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNC1aODJ2WWtWRjF4Mk5wbnFLMV94aEFmMmJXdWFQUVYvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9Cw0LzQt9Cw0LvRltGU0LLQsCDQl9C10LnQvdCw0LEsIDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQkdGW0LvQvtGA0YPRgS4g0L3QsNGALtC/0ZbRgdC90Y8gJyfQkdGD0LvRjNCx0LAnJywg0L7QsdGALtCULtCb0YzQstCwLdCa0L7QvNC/0LDQvdGW0LnRhtGPXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWRRcUdGcGhPR28wVnBHb1VkNHo0VTNlbjlMVGMxOXBrL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1NlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQsNC80LfQsNC70ZbRlNCy0LAg0JfQtdC50L3QsNCxLCAxMiDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtCT0LDQudC00L0uINCc0LXQvdGD0LXRglwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFXd184MDBKUHZINjlZdGpPTkVDSkg4VnRaX2Vaa2t5ay9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0ZbQu9GW0L3QsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTEg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JzQvtGG0LDRgNGC0JDRgNGW0Y87IDIp0JQu0JPRgNCw0LTQtdGB0LrRli4nJ9Cc0L7RgNC+0LfQuNCy0L4uINCg0LXQs9GC0LDQudC8JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZjNLNTBHVmN3OGtzZFlnUk14VjYxYWRSQUZINVBLTXcvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9C+0YDQsNC5INCv0YDQvtGB0LvQsNCyLDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCh0LrQvtGA0LjQuiAnJ9Cc0LXQu9C+0LTRltGPJycsICAgICAgICAgMikg0J8u0JHQsNC30LDQu9CwLiAnJ9Cf0L7RgtGW0LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFVQ2JuN3hQdkVickhDcE1UaG5DSWo1UXRnbjZyVlNfZi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0L7RhtGD0LvQtdC90LrQviDQktGW0LrRgtC+0YDRltGPLCAxMiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QkdCw0YUuINCU0LLQvtCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0LvRjyDQvNGW0L3QvtGALCAyKSDQpC7QqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDihJYyMVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3MUlDTV83R2hyYW8xUk42dWcwWExvUk5KS29iYVJHUS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0YPQutCw0YHRj9C9INCb0ZbQsNC90LAsIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC7QpdCw0YfQsNGC0YPRgNGP0L0uIFxcXCLQkNC90LTQsNC90YLRltC90L5cXFwiXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTJJZEFmU2lfd2FVNmxyTmZVdlAySDB4MFdPNzhhTUdhL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LFxyXG4gICAge1xyXG4gICAgICAgIFwiaWRcIjoge1xyXG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWFhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPQutCw0YHRj9C9INCb0ZbQsNC90LAsIDEwINGA0L7QutGW0LJcIixcclxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0KXQtdC70LvQtdGALiDQodC+0L3QsNGC0LjQvdCwXCIsXHJcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrdE9WQzNUUl9BRTR1UmJHNjJPeE5LVmpvTkpxaXVQbS9wcmV2aWV3IFwiLFxyXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbiAgICB9LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1YlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPRg9C70Y/RlNCy0LAg0ITQstCwLCAxMdGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCfLiDQl9Cw0YXQsNGA0L7Qsi4nJ9CV0LvQtdCz0ZbRjycnLCAyKSDQky7QktCw0LvQu9C10L3Qs9Cw0YPQv9GCLiAnJ9Ch0LrQtdGA0YbQuNC90L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyYmNtN0ZfQmZBZXFNRXpmUWhaNmZGM1kyMWE3cllzdy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0YPRgtC90LjQuiAg0JrRltGA0LXQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCbLtCo0ZbRgtGC0LUuJyfQotCw0L3QtdGG0YwgINCz0L3QvtC80ZbQsicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5pRHFOaUNKdTNDTFMzRUc1QldIdUJfQXE3djQ1UnMzL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1ZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPRg9GC0L3QuNC6INCa0ZbRgNC10L3QsCwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQni7QodC+0LvQvtCy0Y/QvdC10L3QutC+Licn0J/QvtC90ZYg0LHRltC70Y8g0YbQuNGA0LrRgycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWg3cTBZYVlpeTZBNnM2QnB3X1R4dHpyd3dTX0F6OUx4L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1ZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JTQvtGA0L7RiNC10L3QutC+INCu0LvRltGPLCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JwuINCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAsINGC0LIuMzYg4oSWNiwg0IYg0Yc7IDIpINCGLtCR0LXRgNC60L7QstC40YcuINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuNDYg4oSWMTVcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR2xGQ0xDM3hfMXRaQ09mbU5oTjBtNFQwUE9KWUJUak4vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNGD0LTRltC9INCU0LzQuNGC0YDQviwgMTEg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQuNC90LAg0YHQvtC70Ywg0LzQsNC20L7RgCzQhi3QhtCGINGHLjsgMinQoS7Qn9GA0L7QutC+0YQn0ZTQsi4gJyfQmtCw0LfQvtGH0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhibTR4LVZmekh6dXpCNGpUaGJzUGg4SWFDYTk0dHRCL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2MFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0ITRgNC80L7Qu9C10L3QutC+INCU0LDRgNC40L3QsCwgMTIg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLiDQkNGA0ZbRjyDRgNC1INC80LDQttC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdTdNNkNYaXlzVWZKdXU2TS1BdkI3NzRXZW4wQW51Wk4vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzYxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhNGA0LzQvtC70LXQvdC60L4g0JTQsNGA0LjQvdCwLCAxMiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCR0ZbQu9Cw0YguICcn0JHQsNGA0LrQsNGA0L7Qu9CwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaE9SZjR1VnZvVzU0cFRDeGdLMnpJbWd4WXhINDdZb28vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzYyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQl9Cw0LPQsNGU0LLRgdGM0LrQsCDQodC+0YTRltGPLCAxMiDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JrQu9Cw0YHRgdC10L0gJyfQnNGD0LfQuNGH0L3QuNC5INC10YHQutGW0LcnJ+KEljEsIDIp0J4u0JrQuNC80LvQuNC6Licn0JvQtdC+0L3RgtC+0LLRltCw0L3QsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXcxVFBoOUpYc0FqZV9LcEU5UVBwNUl2MEV1am12akctL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2M1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0IbQstCw0L3QvdGW0LrQvtCy0LAg0JzQsNGA0ZbRjywgMTEg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JzQvtGG0LDRgNGCLiDQodC+0L3QsNGC0LAg4oSWMTYsINCGINGH0LDRgdGC0LjQvdCwLCAgMinQni7Qk9GA0LjQsdC+0ZTQtNC+0LIuINCS0LDQu9GM0YFcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWDF2aHNUSVBrSTV6aXMyMkpIT1h4UVVEZE9CZTlBOUcvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JLRltGA0YHQsNCy0ZbRjywxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QpdC+0LTQvtGILicn0KfQtdGA0LLQvtC90LAg0YjQsNC/0L7Rh9C60LAnJywgMinQhi7QqdC10YDQsdCw0LrQvtCyLicn0JXQu9C10LPRltGPINC60LjRl9Cy0YHRjNC60LjRhSDQv9Cw0LPQvtGA0LHRltCyJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTTdJMVFKYkZrV0JRSHdLMWxIS295b0UzMGwtV2MxMm0vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQh9Cy0LbQtdC90LrQviDQkNC00LAsIDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYu0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALCAyKdCcLtCh0LrQvtGA0LjQui4gJyfQndCw0YDQvtC00L3QuNC5INGC0LDQvdC10YbRjCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtwbTZrME1DdHVqZzdzUEg5ZGNvZFkwa3oxQnJHRVg5L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2NlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQsNC80LDQvdGH0Lgg0ITQu9C40LfQsNCy0LXRgtCwLCAxMiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtCw0LvRltGB0YLRgNCw0YLQvtCyLicn0JrQvtC90LjQuiDQk9C+0YDQsdC+0LrQvtC90LjQuicnLCAyKdCuLtCS0LXRgdC90Y/Qui4gJyfQndGW0LbQvdGW0YHRgtGMJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbWxXYUxZc0Q4ZmtCUUhnZHJYLVJmTkNrZDZ3UnJQa08vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtCw0YDQsNGI0LrQtdCy0LjRhyDQpdGA0LjRgdGC0LjQvdCwLCAxMSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGA0LUg0LzRltC90L7RgCwgMinQnC7QlNGA0LXQvNC70Y7Qs9CwLiAnJ9Ch0LrQtdGA0YbQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVCR2hOSXB0SlNlaTBHWkxLcHNmeWFJaGkzVWFlMGNIL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2OFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrRltGG0LXRgNCwINCQ0LvRltC90LAsIDExINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCU0LXQsdGO0YHRgdGWICcn0KDQvtC80LDQvdGC0LjRh9C90LjQuSDQstCw0LvRjNGBJycsIDIp0JEu0KTRltC70YzRhi4gJyfQodC60LXRgNGG0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOb3Zzb2dfdzUycHpHa2ZKMmhaeGlodjMzQzJjU2YwSi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7RgNC+0LvRjCDQhNC70ZbQt9Cw0LLQtdGC0LAsIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJ9Cf0ZbRgdC90Y8g0LbQsNC50LLQvtGA0L7QvdC60LAnJzsgMinQmy7QqNGD0LrQsNC50LvQvi4g0J/RgNC10LvRjtC00ZbRj1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrYnJHbDhfSWhmcW5qa3ZUdm9XaDc5bWdtOXBRNWtUSi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7RgtC70Y/RgNC10LLRgdGM0LrQsCDQrtC70ZbRjywgMTEg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmS4g0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINGB0L7Qu9GMINC80LDQttC+0YAsINCG0YcuXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZBV0hIS1E1b3gwRVRKTHZ1cnJSZ1oyZE9tMXZ0RmtlL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2YlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGC0LvRj9GA0LXQstGB0YzQutCwINCu0LvRltGPLCAxMSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIifQk9Cw0L3QtNC30Y8nJywg0L7QsdGALtCEINCS0LXQstGA0LjQutCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtJdmRzdklyeGVvODE2ZC1fTVY1bmJiY3ItYU9aaEVwL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2Y1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGC0L7QstCwINCc0LDRgNGW0Y8sIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QmtC70Y7Rh9Cw0YDRjNC+0LIuJyfQqNGD0YDQsNC70ZQnJywgMinQpC7QnNC10L3QtNC10LvRjNGB0L7QvS4nJ9Cf0ZbRgdC90Y8g0LHQtdC3INGB0LvRltCyJycsINGC0LIuMTkg4oSWMlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZMWNXXzJaaXdCRU4wWWMxS3JXV25jWDM3NnpnYUQ1Qi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0YDQuNCy0L7QsdCw0LHQutC+INCa0YHQtdC90ZbRjywgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmy7QqNGD0LrQsNC50LvQvi4gJyfQktC10YHQvdGP0L3RliAg0LrRgNCw0L/Qu9C40L3QutC4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZElKZ2tMSU8yZTdsY05wdUFSanhtdWR3MDN4am5jMzIvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtGA0LjQstC+0LHQsNCx0LrQviDQmtGB0LXQvdGW0Y8sIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J0u0JrQsNGA0L/QtdC90LrQvi4g0JXRgtGO0LQgINGA0LUg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFCNC1FYlJZTy1iY0NqZnVwcGVIWFNodjVEUXp1aTloQS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0YPRgtC60L7QstGB0YzQutCwINCb0LDRgNC40YHQsCwgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCVLtCT0YDRltCzLiAnJ9Cd0L7QutGC0Y7RgNC9JycsINGC0LIuNTQg4oSWNCwgMinQoi7QmtGD0LvRltGU0LIuICcn0JvQtdC30LPRltC90LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFjbVFCZHNtMmVwd1pTX21VSngzZ3AxVzU4Mlp5V2Q3L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3MFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0Jtp0LfQvtCz0YPQsSDQkNGA0YHQtdC9LCAxMCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQky7QodCw0YHRjNC60L4uJyfQoNC10LPRgtCw0LnQvCcnLCAyKdCfLtCX0LDRhdCw0YDQvtCyLicn0KHRgtCw0YDQvtCy0LjQvdC90LAg0LHQsNC70LDQtNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMVNGa1dGdlduX1VHTkpLN2M3WjFMbEoyTmFzTTlLc2cvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzcxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9Cw0L3RgdGM0LrQuNC5INCE0LLQs9C10L0sIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0KDQsNC90LrQvtCy0LAg0LzQvtC70LjRgtCy0LAnJywg0YLQsi4zOSwgMinQhi7QkdC10YDQutC+0LLQuNGHLiDQotC+0LrQsNGC0LAg0LvRjyDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZuUEZMczV4SEN0MFRMMnNkMUU5V1d5aFRCOGtHVHVoL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3MlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JvQtdCy0LDQvdC00ZbQstGB0YzQutCwINCc0LDRgNGC0LAsIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIu0JHQsNGA0LLRltC90YHRjNC60LjQuS4gJyfQo9C60YDQsNGX0L3RgdGM0LrQuNC5INGC0LDQvdC10YbRjCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZWanhBZUIzZE96SnBBVERYeUktMUFCdFJpemp6am9kL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3M1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JvQtdCy0LDQvdC00ZbQstGB0YzQutCwINCc0LDRgNGC0LAsIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0K8uINCh0ZbQsdC10LvRltGD0YEuINCV0YLRjtC0INGC0LIuIDc2IOKEljJcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOEs3cmdSempDcVotXzVFV3IwRW9FNUpsblR5aGdaUzQvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9C10LfQsCDQkNC90L3QsCwgMTEg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQpC7QqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDihJYyMCwgMinQny7Ql9Cw0YXQsNGA0L7Qsi4gJyfQoNC+0L3QtNC+LdCz0LDQu9C+0L8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUd2Yyc0ozXzlBcjNvT1RtWldLdjZxOFNNYTlmR2EtcC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCb0LjQutC+0LLQsCDQktCw0YDQstCw0YDQsCwgMTEg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCSLtCT0ZbQu9C70L7Qui4nJ0JpbGwgYmFpbGV5JycsIDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0KjQsNGA0LzQsNC90LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWRFNUxjZlYtVDhRaExYaUFmbjhzeExFTWVjdmdTLWhPL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3NlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JvRltC70ZbQuiDQnNCw0YDRltGPLdCc0LDQs9C00LDQu9C40L3QsCwgMTEg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCo0L7Qv9C10L0uICcn0JDRgNC60YPRiCDQtyDQsNC70YzQsdC+0LzQsCcnINC80ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YAsIDIp0Jwu0JrQvtC70LXRgdGB0LAuICcn0KHQutC10YDRhtC40L3QvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXF0aWNkdUFRUW03Mk5jeThlLXN0Nm5ranF3QnJGU1RlL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3N1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNC60LDRgNC10LLQuNGHINCQ0L3QtNGA0ZbQuS3QntC70LXQutGB0LDQvdC00YAsIDExINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YDQtSDQvNCw0LbQvtGALCAyKdCaLtCn0LXRgNC90ZYuINCV0YLRjtC0IOKEljUsINGC0LIuMjk5XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlWdUJQZnc0SG5jUEprSm4yeU5aWnc4VVhsVVhKSFZjL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3OFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQsNGG0ZbQsdC+0YDRgdGM0LrQsCDQkNC90L3QsCwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCZLiDQkdCw0YUuINCU0LLQvtCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YHRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwgICAgMikg0KQuINCv0LrQuNC80LXQvdC60L4uICcn0JXQu9C10LPRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU3JZdHRKRmRpenN1QmUweU5zS3JORGdKVVBfQWloYU4vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC10LvRjNC90LjQuiDQnNC40YXQsNC50LvQviwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli4g0YHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsIDIp0JIu0JrQvtGB0LXQvdC60L4uICcn0JTQvtGJ0LjQuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWMwcFdqR29nRGFFWUNSQ3NremNxOVZkVWxIeS1oc2hHL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3YVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQtdGA0LrRg9C70L7QstCwINCc0LDRgNGW0Y8sIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JQu0KfRltC80LDRgNC+0LfQsC7QodC+0L3QsNGC0LAg0YHQvtC70Ywg0LzQsNC20L7RgDsgMikg0JwuINCW0LXRgNCx0ZbQvS4g0JLQsNC70YzRgVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqNXBFRDd3UTNBSFAwcE54OVZPNFBwOGRyaWw5YU16Zi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2JcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0LjQs9Cw0LvRjtC6INCg0ZbQsNC90L3QsCwgMTEg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J0u0J3QuNC20LDQvdC60ZbQstGB0YzQutC40LkuICcn0JrQvtC70L7QvNC40LnQutCwJycsICAgMinQki7Qk9GW0LvQu9C+0LouJyfQmtCw0YDQvdCw0LLQsNC7INCyINCg0ZbQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXA1U01PZUJhVXowanpYOEEwbDZYNE45eXZ0d0cwdzhtL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3Y1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQuNGA0LPQvtGA0L7QtCDQktGB0LXQstC+0LvQvtC0LDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCa0YPQu9Cw0YMuINCh0L7QvdCw0YLQuNC90LAg0YTQsCDQvNCw0LbQvtGALNCGINGHLjsgMinQnC7Qm9C40YHQtdC90LrQvi4gJyfQldC70LXQs9GW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrcHhzdVJKbmwzdDY0bGJPOHZpVmdmR3N3X2FNa1JTbS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2RcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0L7RgNC+0LfQvtCy0LAg0KLQtdGC0Y/QvdCwLCAxMSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtCR0LXQvdC00LAu0KHQvtC90LDRgtC40L3QsFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE1dTRvSzR1SXY5MjNCYmh3SHVReGMya2Iyelc0REltRy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICAgICAgXCJpZFwiOiB7XHJcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3ZGRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQvtGA0L7Qt9C+0LLQsCDQotC10YLRj9C90LAsIDExINGA0L7QutGW0LIgXCIsXHJcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCo0LXQstGH0LXQvdC60L4gXFxcItCS0LXRh9GW0YBcXFwiXCIsXHJcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGeS1MMDRFQWZjcTdJMWJScHg1cEU4bHlkSUJ5VDNTRi9wcmV2aWV3IFwiLFxyXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbiAgICB9LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3ZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzRg9C90YLRj9C9INCd0LDRgtCw0LvRltGPLCAxMCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuINCi0LXQvNCwINC3INCy0LDRgNGW0LDRhtGW0Y/QvNC4LCAgICAgICAyKdCbLtCo0LjRgtGC0LUuJyfQhtGB0LrRgNC4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVmpOSGNXV2d0bWJha1VYbXBjM2g3ZmhvTjVncHM5UlYvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQntCx0L7RgNC60ZbQvdCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlS7Qk9GA0ZbQsy4nJ9Cc0LXQu9C+0LTRltGPJycsICAgIDIp0Jsu0KjRg9C60LDQudC70L4uICcn0JHQsNCz0LDRgtC10LvRjCcnIOKEljVcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xY2gyd3Z6eHRSN0VSMi02aURMVWd2Q0FxdVVpdjhkVmYvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzgwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9C10L3QtNGO0YAg0KHQvtGE0ZbRjywgMTEg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCeLtCU0LDRgNCz0L7QvNC40LbRgdGM0LrQuNC5Licn0JLQsNC70YzRgScnLCAyKdCcLtCh0LrQvtGA0LjQui4nJ9Cd0LDRgNC+0LTQvdC40Lkg0YLQsNC90LXRhtGMJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xc0RHNnduZ3BLSGNNU09hT2lfWWxVR2t1Y2FkQkFwQkovcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzgxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9C10YDQtdGC0Y/RgtGM0LrQviDQkNC90LDRgdGC0LDRgdGW0Y8sIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0JPRgNGW0LMuICcn0KLQsNC90LXRhtGMINGW0Lcg0JnQvtC70YzRgdGC0LXRgNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMF9MZ3YtZkxPZDN5UEFtTm1XQ2Q4WU4zbFN3WEhMS0cvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzgyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9C10YDQtdGC0Y/RgtGM0LrQviDQkNC90LDRgdGC0LDRgdGW0Y8sIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC7QmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwIOKEljQsINGC0LIuMzZcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xM3dzSS1zc1RQeDllYTBxWkhGWXN2c1AybnVQYlNESjcvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzgzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9C+0LfQvdGP0Log0JLQtdC90ZbQsNC80ZbQvSwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCULtCf0YPQu9C10L3Qui4g0KHRgtCw0LrQutCw0YLQvi4gMikg0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0JLQtdGB0LXQu9CwLdGB0YPQvNC90LBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdnNiYzJHdkhZQXJnZ1A1Ny1aNXdGbEd3Y2hNcE5wM0UvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9GA0L7QutC+0L/RjtC6INCc0LDRgNC40L3QsCwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCGLtCR0ZbQu9Cw0YfQtdC90LrQvi4g0JXQutGB0L/RgNC+0LzRgi4gMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQsNC90LXRhtGMXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVFuOURRTDJOSEplT2ZHSERIWXdhdVo2MnZpbnJmbEF5L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4NVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDQtdGI0LXRgtC90ZbQutC+0LLQsCDQm9GO0LTQvNC40LvQsCwgMTEg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCeLtCR0ZbQu9Cw0YfQtdC90LrQvi4nJ9Ce0YHRltC90L3RltC5INC10YHQutGW0LcnJywgMinQni7Qn9C+0LvRjNC+0LLQuNC5Licn0J/QvtC70YzQutCwLdCx0LDQsdC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfWGZDSzhGSzFGTG14YmtFQjhWVGRmYTk5MHFKN3hSQS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0L7RgtCw0YAg0JrQsNGA0ZbQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9CR0LDRgNC60LDRgNC+0LvQsCcnLCAyKSDQlC7Qn9C10YjQtdGC0YLRli4gJyfQn9GA0LXRgdGC0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3TUYtMHo2dUFrbUtXbHBZeVNXR0g4c2JPaVotLW45Si9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LDQstGH0LXQvdC60L4g0JzQsNGC0LLRltC5LCAxMdGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmy7QkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LAg0LzRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwg0IYg0YcuLCAyKdCGLtCp0LXRgNCx0LDQutC+0LIuICcnINCV0LvQtdCz0ZbRjyDQutC40ZfQstGB0YzQutC40YUg0L/QsNCz0L7RgNCx0ZbQsicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUpfSFFrNklTMlBaUFpVUDl1WU9QNndrUXRSM29wbzZCL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4OFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQsNC60LLQsCDQktCw0LvQtdGA0ZbRjywgMTEg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCb0LDQvdGB0LXQstC40YcuJyfQn9GA0LXQu9GO0LTRltGPJycsIDIp0Jwu0JTQstC+0YDQttCw0LouICcn0JTQttCw0LfQvtCy0LjQuSDQtdGC0Y7QtCcnINC70Y8g0LzQsNC20L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExdHNkTHZrMjViRDhGU0RZVFhYbnlwUjI5Z2tQdHhYcy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LDRgNGC0LDQvdGW0Y8g0JTQsNCy0LjQtCwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCVLtCS0LDQs9C90LXRgC7QodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwgICAyKSDQoC7QktCw0L3QtNCw0LvQuy4nJ9CS0L7QtNC+0YHQv9Cw0LQnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFtckVTWVpJaVAxaVdlbkdpWkRVSU9iMHVzQ0pLMGRUOC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LrQvtGA0L7RhdC+0LTRjNC60L4g0ITQstCz0LXQvdGW0Y8sIDEwINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4gJyfQhtCy0LDRgdGMINCz0YDQsNGUINC90LAg0YfQtdC70YzQvicnLCAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Ci0L7QutCw0YLQsCcnINGB0ZYg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFaWYwWl9NaUFRVnB6YmN6VlNqamJ2aDFnVXhlX0UzWC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0L7Qu9C+0L3QtdC90LrQviDQkNC90L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQki7QmtC+0YHQtdC90LrQvi4gJyfQn9C10YLRgNGD0YjQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdEN4cDRVYlpGWmVGTXJ3NkRZTmk5VllIWVN2WXdOUUkvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzhjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC+0LvQvtC90LXQvdC60L4g0JDQvdC90LAsIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0KQuINCR0YPRgNCz0LzRjtC70LvQtdGALiAnJ9CR0LDQu9Cw0LTQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVPSDZ6aHdvdzRhUVpmSmVzMjhMeGlJQnNoNUhiZkd1L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4ZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQvtGA0L7QutCwINCc0LDRgNGW0Y8sIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCULtCm0LjQv9C+0LvRli4g0J/RgNC10LvRjtC00ZbRjyDRgtCwINGE0YPQs9CwINGA0LUg0LzRltC90L7RgCwgMinQmi7Qk9GD0YDQu9GW0YIuICcn0KjRgtC+0YDQvCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXRmcF9nQlJaMWZsai1MR3FkZTZFZHhRbUtUbGVwMGpQL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4ZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHRgtC10YbRjtC6INCe0LvQtdC60YHQsNC90LTRgNCwLCAxMiDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0JTQtdCx0Y7RgdGB0ZYuICcnRG9jdG9yIEdyYWR1cyBhZCBQYXJuYXN1bScnLCAyKdCkLtCo0L7Qv9C10L0uICcn0JLQsNC70YzRgScnIOKEljlcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xenhKV3lDbXM3a1poc3BOQkFsemFjVW5BTFc4RUpBTTcvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzhmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodGC0L7RgNC+0LbRg9C6INCh0YLQsNC90ZbRgdC70LDQsiwgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JUu0JPRgNGW0LMuICcn0J/QvtC10YLQuNGH0L3QsCDQutCw0YDRgtC40L3QutCwJycg4oSWMSwgMinQkC7QmtC+0YEt0JDQvdCw0YLQvtC70YzRgdGM0LrQuNC5LiAnJ9Cf0L7Qu9C+0L3QuNC90LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFydEswdlVyQW9JbEdiVUo1SGFVR2JRUGwxelZtVEtLSi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0LrQsNGH0LXQvdC60L4g0JzQsNC50Y8sIDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLiDQkC4g0JzQvtGG0LDRgNGCLiDQodC+0L3QsNGC0LAgMTYg0JogNTQ1LNCG0YcuOyAyKdCGLtCo0LDQvNC+LicnINCS0LXRgdC90Y/QvdC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFtNlpzVmFyTlByY2Z5bU8zQmt1bWRLeExKeUJUeHg1LS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCj0L3Qs9GD0YDRj9C9INCe0LvQtdC60YHQsNC90LTRgNCwLCAxMiDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCeLtCT0YDQuNCx0L7RlNC00L7Qsi4g0JLQsNC70YzRgSwgICAgICAgICAgMinQnC7QodGW0LvRjNCy0LDQvdGB0YzQutC40LkuICcn0KHRgtGA0ZbQvNC60LjQuSDQv9C+0YLRltC6JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdjJMUlZEaEZKMnpYTl81d1Z4QWNoN1g4bDBXUThyT2cvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzkyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpNC10LTQvtGA0YfQtdC90LrQviDQhNCy0LPQtdC90ZbRjywgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmy7QkdC10YLRhdC+0LLQtdC9LiAnJ9CR0LDQs9Cw0YLQtdC70YwnJywg0YLQsi4xMTlcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWlBIR1FEQXlmdG9BVzBhS09UMnNuZmE4TWpnYWxjWlEvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzkzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpNC10LTQvtGA0YfQtdC90LrQviDQhNCy0LPQtdC90ZbRjywgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCR0ZbQu9Cw0YguJyfQodC60LXRgNGG0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoMWlzR3d2ZVcxdWlXM1UyeGVPMldXdUZ4dlNTdlEtTC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0YLQvtCy0LAg0JrQsNGC0LXRgNC40L3QsCwgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKSDQoS4g0JHQvtGA0YLQutC10LLQuNGHLicn0JXRgtGO0LQnJyDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YAsIDIpINCkLtCo0L7Qv9C10L0uICcn0J3QvtC60YLRjtGA0L0nJ9C00L4g0LTRltGU0Lcg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFlUUJYeTZraExjaTRmSk5HOEJhQ00xWkZMa0tqME5Sdy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCk0LXQtNGH0YPQuiDQkNC70ZbQvdCwLCAxMSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC4g0JTRltCw0LHQtdC70LvRli4g0KHQvtC90LDRgtC40L3QsCDihJYxLCDQhtCG0IYu0Yc7IDIp0JTQti4g0JvQsNGB0YIuJycg0KHQsNC80L7RgtC90ZbQuSDQv9Cw0YHRgtGD0YUnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqckZidmRnRzJObFUtYjQxNi11UjBiaXJEclctUG5JSC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCk0LXQtNGO0Log0JLQvtC70L7QtNC40LzQuNGALCAxMiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jou0Jwu0JLQtdCx0LXRgC7QodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgDsgMinQni7Qk9C+0L3Rh9Cw0YDRg9C6LiAnJ9CX0LXQu9C10L3QuNC5Jycg0ZbQtyDQt9Cx0ZbRgNC60LggJyfQktC10YHQtdC70LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUhfSXc4OXhqZjFvMjdQdFBfbmVRSTc4QnlQNjV5RXZZL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5N1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KXQvtGDINCW0YPQuSwgMTIg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J8u0IYu0KfQsNC50LrQvtCy0YHRjNC60LjQuS4gJyfQltC+0LLRgtC10L3RjCcnLCAyKdCVLtCS0LXQstGA0LjQui4gJyfQk9Cw0L3QtNC30Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYWndXWHQ2aFFBU3VZZnRTTnI1c1RQRXJzdEZVVjU4Ui9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOThcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCn0LjQtiDQndGW0L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtCT0LDQudC00L0g0KHQvtC90LDRgtCwIOKEljQsINCG0Yc7IDIp0Jsu0JTRjNGP0LrQvtC90LXQvdC60L4uICcn0J/RgNC+0LHQsNGH0LXQvdC90Y8g0YMg0LzQsNC80LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhSVVyMGgtTjUyOTBCNkthSW1Ya0pIbVNEaWtfVWF3ZS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCn0ZbQtNC10YDQsCDQodCw0LzRg9C10LvRjCDQo9C80LXRhSwgMTAg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpICDQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9Ch0YLQsNGA0L7QstC40L3QvdCwINGE0YDQsNC90YbRg9C30YzQutCwINC/0ZbRgdC10L3RjNC60LAnJy4gMikg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5Licn0JrQu9C+0YPQvdC4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcExZQW1SQlh3ekluMXgzWEhodkxyZV9BTlpKVDJwOHcvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzlhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQqNCw0YLQsNC70L7QstCwINCG0LvQvtC90LAsIDEwINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLiDQk9GW0LvQu9C10YAuICcn0JzQsNC70LXQvdGM0LrQtSDRgNC+0L3QtNC+Jyc7IDIp0JIuINCa0L7RgdC10L3QutC+LiAnJ9CS0LDQu9GM0YEnJyDRgdGWINC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVWc1NmNiWTFDVUJoTzEtdFpmdWNSQXVBSGJJRkt6OWMvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzliXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQqNC10LLRh9C10L3QutC+INCc0LDRgNCz0LDRgNC40YLQsCwgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCR0LDQu9Cw0L3QtNGW0L0uINCS0LDRgNGW0LDRhtGW0ZcsICAgICAgICAgIDIp0KIu0JHRgNCw0YPQvS4gJyfQotCw0L3QtdGG0Ywg0LLRltGC0YDRgycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXBrQkJxZlMtcG1GeGI1bk5kQWNoOVdYVXBHcXNVeGE4L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5Y1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KjQtdC/0LXRgtGM0LrQviDQntC70LXQutGB0LDQvdC00YAsIDExINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KQu0KjQvtC/0LXQvS4g0JzQsNC30YPRgNC60LAs0YLQsi42NyDihJYgNCwgMinQlS7Qk9GA0ZbQsy4gJyfQotCw0L3QtdGG0Ywg0ZbQtyDQmdC+0LvRjNGB0YLQtdGA0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWYmhWaldyVWl0VG8tLTgzSTVGV055ZFFyUEMzWUd5Ui9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOWRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCo0YPQvNGB0YzQutCwINCd0LDQtNGW0Y8sIDEyINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4nJ9Ci0LXQvNC90LAg0LrRltC80L3QsNGC0LAnJywgMinQki7QndC10YPQs9Cw0YHRltC80L7Qsi7QodC60LXRgNGG0L5cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xazY2LVdyeTYzUzh4N3Q0OEdXVWpZMGU2TzF4cWVVb3QvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxMzllXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkNGA0YPRgtGO0L3Rj9C9INCb0ZbQtNCwLCAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Jku0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwIOKEljIwLCDQhtGHLjsgMinQmy7QqNGD0LrQsNC50LvQvi4nJ9CE0LzQtdC70Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFCajU2OGNuUmREWk1Lck1ZZkxUOGtDYkhtNHlmWGIyay9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzOWZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCR0LDQt9C40LvRjtC6INCd0LDRgtCw0LvRltGPLCAxNiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0K8u0KHRltCx0LXQu9GW0YPRgS4g0J/RgNC10LvRjtC00ZbRjyDQu9GPINC80ZbQvdC+0YAsMinQhi7QkdC10YDQutC+0LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPINGE0LAg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHYVdlWmJLYzZTaUl1ZGlZUVZCZ0Z4YWlPTzlTRXNrQS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCR0ZbQu9C+0LPRg9CxINCQ0L3RgtC+0L0sIDEzINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0JvQtdCz0LrQsCDRgdC+0L3QsNGC0LAg0YTQsCDQvNGW0L3QvtGALCDQhiDRhy5cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZkhVbXRNV09qR045cDV4YVNyY0lPdlFFdS1rb1RHYVQvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2ExXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkdGW0LvQvtCz0YPQsSDQkNC90YLQvtC9LCAxMyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCeLtCh0YLRgNC+0LouICcn0JzRltGB0Y/Rh9C90LAg0YDQsNC/0YHQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWZxbk5PRnZOblZVY0kxTFVaLVRxZ0Z6Q2w1WEZFX3NpL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JHRltGA0YPQuiDQotCw0LzRltC70LAsIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYu0KHQvtC90LDRgtC40L3QsCwg0YLQsi4yNuKEljMsIDIp0K8u0KHRltCx0LXQu9GW0YPRgS4gJyfQr9C70LjQvdCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNF9CMjZMUHl6UWprX2FCWnhHRldJcThSejZLUkNCblgvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2EzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkdC+0YDQvtCy0ZbQutC+0LLQsCDQhNC70LjQt9Cw0LLQtdGC0LAsIDE1INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQnC7QkdC+0LHQtdGALiAnJ9CU0ZbQsNC80LDQvdGC0L7QstCwINGA0LDQv9GB0L7QtNGW0Y8nJywgMinQpC7QodCw0LkuICcn0KfQvtGA0L3QsCDQt9C10LzQu9GPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcE8xRkdxQi1LNnR0aDhwUFJNQkNhbF9yc2NlU014MjAvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkdGD0YDRg9GF0ZbQvdCwINCa0LDRgtC10YDQuNC90LAsIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg0LzRliDQvNGW0L3QvtGALCDQhtGHLiwgMikg0KEu0J3RltC60ZbRgtGW0L0uJyfQndCw0YHQv9GW0LInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFycExINjNTek5USGVNeVhIazdyQ2hlc3dTY0t1OV9jSC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0LDRiNGD0YDRltC90LAg0JIuLCAxMyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCSLtCa0L7RgdC10L3QutC+LiAnJ9Cf0L7QtdC80LAt0JvQtdCz0LXQvdC00LAnJywgMikg0J4u0KHQsNGA0LDRgtGB0YzQutC40LkuJyfQmtC+0LvQvtC80LjQudC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5OWt1c2d0cVhnSWdmRmMxNmxfNXF2Z0ZfSnk2MnZYNy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0LjRiNC90LXQstGB0YzQutCwINCQ0L3QvdCwLCAxMyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCWLiDQkdGW0LfQtS4nJ9CU0LfQuNCz0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZTi0yeXAxb2NSVkUxUmRYcTJMN3NqOXFfQTh5djVQTy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCS0LjRiNC90LXQstGB0YzQutCwINCQ0L3QvdCwLCAxMyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JouINCb0LDQstCw0LvQu9C1LiAnJ9Cc0LXRgtC10LvQuNC6JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNjF0RnFURkpvamEyT1ZEdkhLVHRJV1BqTlEtMkxmeDEvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9C10YDQsNGB0LjQvNGH0YPQuiDQnNGW0LvRlNC90LAsIDE1INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jwu0KLQsNGA0LDQstC10YDQtNGW0ZTQsi4gJyfQodC/0L7Qs9Cw0LQnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFBbzB3T3g1MFVjS0xhWDhncEUzVzl0NjVEQzZLcGhyTS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0LXRgNCw0YHQuNC80YfRg9C6INCc0ZbQu9GU0L3QsCwgMTUg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQni7QkdGW0LvQsNGILicn0KLQsNC90LXRhtGMINC70Y/Qu9GM0L7QuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhuYmZqQm16Y2xONC10bDZ0OUVHRG0zeWpMR2p3cFI1L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPQvtGA0LTRltGU0L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgMTkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLtCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0YDQtSDQvNGW0L3QvtGALCDQlNCi0Jot0IYsIDIp0KEu0JHQvtGA0YLQutC10LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPINC00L4g0LTRltGU0Lcg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFveEJlNk4zYWx0RnAzVWt0RjVGZEdZRnJkWHlIREhXZi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0YDQtdGJ0LDQuiDQnNCw0YDRltGPLCAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7Qp9C10YDQvdGWLiDQldGC0Y7QtCDQu9GPINC80LDQttC+0YA7IDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuJyfQldC70LXQs9GW0YfQvdC40Lkg0L/RgNC10LvRjtC0JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSXd1THJkUGFreEgxZjZaUGZtdzdkN3ZHY2hLam9VNm0vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNC10LnQvdC10LPQsCDQmtCw0YDRltC90LAsIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy7QkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LAg4oSWMTQsINCGINGHLjsgMikg0KEu0JbQtNCw0L3QvtCyLiAnJ9Cf0YDQtdC70Y7QtCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWM1aVdDOWI1SjNUdzNPV1RES1N3TTk1Q0ZURkJseTR0L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JTRj9GH0YPQuiDQl9C+0YDRj9C90LAsIDEzINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQoNCw0L3QvtC6JycsIDIp0J0u0J3QuNC20LDQvdC60ZbQstGB0YzQutC40LkuICcn0JrQvtC70L7QvNC40LnQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU3NWcklGUmZpdEx2ek0zNy1VV25mR05jc2owN091XzIvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtGJ0YPQuiDQmtCw0YLQtdGA0LjQvdCwLCAxNSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCaLtCn0LXRgNC90ZYuINCV0YLRjtC0IOKEljEs0YLQsi43NDBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbnNjcVM1ZTFwVXd0ZElPU09JZVhBVkhSR2pGdV8zTW4vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtGJ0YPQuiDQmtCw0YLQtdGA0LjQvdCwLCAxNSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQu0KjQvtC/0LXQvS4nJ9Cb0LDRgNCz0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFb0tlU3I3QkllTHcwS3NqQ3RwMURFREpfOFhnZ3hucS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90L7Rh9C60L4g0JDQvdGC0L7QvdGW0L3QsCwgMTMg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQmS7QoS7QkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAINCU0KLQmi3QhiwgMikg0Jou0KfQtdGA0L3Rli4g0JXRgtGO0LQg4oSWNiDRgtCyLjc0MFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1VHFPUkpJeEk2NXVLcTQtMlJxT1huVnVYam9RUEtrUy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0LDRgNC10LvRltC90LAg0JrRgNGW0YHRgtGW0L3QsCwgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUu0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDRgNC1INC80ZbQvdC+0YAsINCU0KLQmi3QhtCGXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZtaFcyT2w5dGwtZlY3Uk9hdHozbUVuYjFDMFZ3QWJ4L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQsNGA0LXQu9GW0L3QsCDQmtGA0ZbRgdGC0ZbQvdCwLCAxMyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCQLiDQnNC+0YbQsNGA0YIuINCh0L7QvdCw0YLQsCDihJY4LCDQhtGHLlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqRnQwemtuR2E4dnZYeERSS1FvNXgxWWR6Y3ItSXhIUi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0LDRgdGM0LrRltCyINCQ0L3QtNGA0ZbQuSwgMTQg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC7Qm9C10YjQs9C+0YDQvS4g0JXRgtGO0LQg0YTQsCDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTR1S1pVRzdsMVJFd0RrWGt2UjZmWUJqUWlUUFpDM2tvL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiNFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQsNGB0YzQutGW0LIg0JDQvdC00YDRltC5LCAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCaLtCU0LXQsdGO0YHRgdGWLiAnJ9Cc0ZbRgdGP0YfQvdC1INGB0Y/QudCy0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTUE5MSThWdkZoS3pwUndOOS1pQlJ1VGRkUGZKdVVlLS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0LjRgNC40LvQvtCy0LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDEzINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KIu0JHRgNCw0YPQvS4gJyfQqNGC0L7RgNC8LCDRidC+INC90LDQsdC70LjQttCw0ZTRgtGM0YHRjycnLCAyKSDQny7Ql9Cw0YXQsNGA0L7Qsi4gJyfQoNC+0L3QtNC+LdCz0LDQu9C+0L8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFXSGotLWhhWW5FN3BXdGZIQm95cFhuaG03aTBpbnN2Ry9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7QvdC00YDQsNGC0Y7QuiDQkNC70ZbQvdCwLCAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J4u0JTRjtCx0Y7Qui4g0JLQsNGA0ZbQsNGG0ZbRlywgMikg0J4u0JHRltC70LDRiC4nJ9Cg0L7Qt9C00YPQvCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVJ3ZlNRdFRmd1dwTER6WXlHZm1GeU9LZHlfU3JLN1NaL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGB0LXQvdC60L4g0JDQu9GW0YHQsCwgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCQLtCa0LDRgNCw0LzQsNC90L7Qsi4gJyfQl9GA0YPQudC90L7QstCw0L3QuNC5INGF0YDQsNC8JycsIDIp0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuINCf0YDQtdC70Y7QtNGW0Y8g4oSWNywg0YLQsi4yM1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEtNmtZcnRRdUhaTms1Q2hBYVdMdjdJUlp6azIyV2RkaC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjhcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7Rh9GD0LHQtdC5INCv0YDQvtGB0LvQsNCyLCAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J7QsdGALiDQhC7QktC10LLRgNC40LrQsC4nJ9Cc0L7Qu9C00LDQstGB0YzQutGWINC90LDRgdC/0ZbQstC4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOUtqS0hmSS11aWo2ajNtTkNZWjI2TExaTW9CYllrOXIvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2I5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0YfRg9Cx0LXQuSDQr9GA0L7RgdC70LDQsiwgMTQg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC7QmtGD0LvQsNGDLiDQodC+0L3QsNGC0LjQvdCwIOKEljU1XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVI3SHdYcExiTzF0aXozS3pNZzM1dDROM0JteDdBQk9ML3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrRg9C70ZbQutC+0LLRgdGM0LrQsCDQmtCw0YLQtdGA0LjQvdCwLCAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jku0KEu0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINGE0LAg0LTRltGU0Lcg0LzQsNC20L7RgCwg0JTQotCaLdCGLCAyKSDQoS7QkdC+0YDRgtC60LXQstC40YcuINCV0YLRjtC0IOKEljksINGC0LIuMTVcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xelFqc3FHcFdxV1lrZWpQWU5fVEctRTBtTUE4Y1NqLXIvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2JiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNCw0LrQsNGA0LXQstC40Ycg0J3QsNGC0LDQu9GW0Y8sIDE1INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0YDQtSDQvNGW0L3QvtGALCDQlNCi0Jot0IYsIDIp0J4u0JHQvtGA0LTRjtCz0L7QstCwLiAnJ9Cj0LrRgNCw0ZfQvdGB0YzQutC40Lkg0YDQvtC80LDQvdGBJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaXJWQlZTMFdEdWZXWkMyWUVCNTd1VU1MV2J3OEJMblIvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2JjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNCw0LvRj9GA0YfRg9C6INCE0LvRltC30LDQstC10YLQsCwgMTMg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4g0JXRgtGO0LQg4oSWOSwg0YLQsi4xNSwgMinQpC7QqNC+0L/QtdC9Licn0JPRg9C70Y/QvdC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvbTBoZlZncmEtVlN4NllYaEpicFp3TFJiZTBhOEJFLS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCe0L/QsNC90LDRgdGO0Log0KLQsNGA0LDRgSwgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCfLtCX0LDRhdCw0YDQvtCyLiAnJ9Ci0L7QutCw0YLQsC3Qv9GA0LXQu9GO0LTRltGPJycsIDIpINCVLtCT0YDRltCzLiAnJ9Cd0L7QutGC0Y7RgNC9JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZ2dod3lIMkF4LUFlVnVlbGJTV3NTMG9Jb0F4U191SkQvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2JlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQntGB0LvQsNC8ICDQhNC70LjQt9Cw0LLQtdGC0LAsIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0JvRjtGC0LjQuScnINGW0Lcg0YbQuNC60LvRgycn0J/QvtGA0Lgg0YDQvtC60YMnJywgICAgIDIpINCdLtCb0LDQs9C+0LTRjtCzLiAnJ9Ci0LDQvdCz0L4g0LzRgNGW0LknJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFtcTQtWkJZWm1sbkdQekpZMWpSX1FWcjBHejc1YU1sWC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0LDQvdGW0LzQsNGIINCG0YDQuNC90LAsIDE1INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmS7Qk9Cw0LnQtNC9LtCh0L7QvdCw0YLQsCDQtNC+INC80LDQttC+0YAgKOKEljUwKSwg0IYg0YcuOyAyKSDQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4nJ9Cc0YPQt9C40YfQvdC40Lkg0LzQvtC80LXQvdGCJycsINGC0LIuMTYg4oSWNFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoX0tRX1dwdm1qWkZzWEU0WFRfTWRmMjNzazRLOUdUcy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzBcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0LXRgtGA0YPRgdGMINCd0LDRgtCw0LvRltGPLCAxMyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7Qm9GW0YHRgi4nJ9Cg0L7QvNCw0L3RgScnLCAgICAgMinQlS7Qk9GW0LvQu9C+0LouJyfQktCw0LvRjNGBLdC10YLRjtC0JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTzE1X0N1and0dGFGMUJ4WGdXODQ0dzZBQlVRa3VqZmIvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2MxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQn9GA0LjRidC10L/QsCDQkNC90L3QsCwgMTQg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLtCo0LzRltGC0YYuINCU0LbQsNC30L7QstCwINGW0L3QstC10L3RhtGW0Y8g4oSWMTMsICAyKSDQni7QlNC10LLRltGBLicn0KnQsNGB0LvQuNCy0LjQuSDQtNC10L3RjCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUpLTUlsdW4zUmVoRVJxS2FTSHBsNlNKNmV5dXVxM2FXL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/RgNC+0LrQvtC/0YfRg9C6INCe0LvQtdC60YHQsNC90LTRgNCwLCAxNyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCS0LXRgNC80LXQvdC40YcuICcn0KfQvtGA0L3QvtCx0YDQuNCy0YbRlicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZOTDdlNnFoOFNPS2xVeE1vUnRBN3JTWThOaGFubFgtL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjM1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J/RgNC+0LrQvtC/0YfRg9C6INCe0LvQtdC60YHQsNC90LTRgNCwLCAxNyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCkLtCo0L/QuNC90LTQu9C10YAuINCh0L7QvdCw0YLQuNC90LAs0IbQhtCGINGHLlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFLR01DY042X0JXUGRpd3pyUkl1QTNOZHhVZUpid0kxai9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0YPRh9C60L4g0KHQvtGE0ZbRjywgMTPRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JwuINCU0LLQvtGA0LbQsNC6LiDQldGC0Y7QtCAyICgyLdC5INC30L7RiNC40YIpLCAyKdCSLiDQktC10YDQvNC10L3QuNGHLiAnJ9Cn0L7RgNC90L7QsdGA0LjQstGG0ZYnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0V2ZzRnY0QW4yRmJWX3VGamhxUkVJODctSWZ6UVViOC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0LDQtNC60L7QstGB0YzQutCwINCQ0LvRltC90LAsIDEzINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCT0YDRltCzLiDQldGC0Y7QtCDQv9Cw0Lwn0Y/RgtGWINCkLtCo0L7Qv9C10L3QsFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfYUJOOEpncm1GbVZmdVZZVzRzMGxlTk5ZeGZQNTlTby9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0LDQtNC60L7QstGB0YzQutCwINCQ0LvRltC90LAsIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0KQu0JvRltGB0YIuICcn0KHRg9C80L3QuNC5INGB0YLQtdC/JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbjJtU2FQTndyVmpsY1BBb2hWaVlybzI0V3ppa3RCMGovcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQoNC40LHQutGW0L3QsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTUg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLiDQotC10YDQtdGJ0YPQui4gJyfQpNGD0LPQsCBMb2NrZG93bicnOyAyKdCcLtCR0L7QsdC10YAuJyfQntC/0ZbQstC90ZbRh9C90LAg0YDQsNC/0YHQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXNQVkVCMlZJdF9vRFpNMHBtQlVRNWpVb1VCTml2VHdlL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDRg9GB0YHRgyDQk9Cw0L3QvdCwLCAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQky7QktC+0LvQu9C10L3Qs9Cw0YPQv9GCLiAnJ9Cl0LDRgNCw0LrRgtC10YDQvdCwINC/J9GU0YHQsCDRgyDRhNC+0YDQvNGWINC10YLRjtC00LAnJywgMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQldC70LXQs9GW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhRWVGaVVYX0F2UmNSTUctNGhCQTNpOGM0NUVzWkg5bS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCg0YPRidC40L3RgdGM0LrQsCDQmtGB0LXQvdGW0Y8sIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS7Qk9GA0ZbQsy4gJyfQnNC10LvQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTA3MkpOd3ZFbTZDZHVBX0dlUHNBQnU1X1lrNk0wMnpIL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KDRg9GJ0LjQvdGB0YzQutCwINCa0YHQtdC90ZbRjywgMTQg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLicn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0LTQviDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5Ea19qS081U0hibnNhWEFUQTEtWXdnS2U0YkFtSWRuL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQstC40L3RhtC40YbRjNC60LAg0JXQvNGW0LvRltGPLCAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtCy0LDRgdC90LXQstGB0YzQutC40LkuJyfQlNGD0LzQutCwJyc7IDIp0JQu0JrRgNCw0LzQtdGALiAnJ9Ci0LDQvdGG0Y7RjtGH0LjQuSDRgdC60YDQuNC/0LDQu9GMJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYWxnel9vdWtSeFQya1BBRnlYb1gtUWpJQTM0cElDY20vcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCy0LjRgNC40LTRjtC6INCU0LXQvdC40YEsIDE2INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4g0KLRgNC40LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDihJYxMiwgMinQky7Qk9Cw0LvQuNC90ZbQvS4gJyfQkNGA0ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTQ2R0ZnSGFYTDN4SFZGWnctaHJIcnhrNDk3N2xyTmdoL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQtdC70ZbQstCw0L3QvtCy0LAg0JDQvdC90LAsIDE0INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9CV0LvQtdCz0ZbRh9C90LjQuSDQv9GA0LXQu9GO0LQnJyDRgdGWINC80ZbQvdC+0YAsIDIp0Jwu0JTQstC+0YDQttCw0LouJyfQlNC20LDQt9C+0LLQuNC5INC10YLRjtC0Jycg4oSWNiAoMiDQt9C+0YjQuNGCKVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFKdWNOdE8xRDkza3FMOHdvSmJrX0JKaURqZGdHeHNRNi9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2VcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LXQvNC10L3QvtCyINCG0LLQsNC9LCAxNSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCVLtCU0L7Qs9CwLiAnJ9Ch0L7QvdC10YInJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMMFVfSG91S1JQNHkzZ1BaYlZMa3p1bXlZRDJlekUyRC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2ZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LXQvNC10L3QvtCyINCG0LLQsNC9LCAxNSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCGLtCc0L7RiGXQu2XRgS4gRdGC0Y7QtCDihJY4LNGC0LIuNzBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX2Z3WTNya3BjSWxXamMxUnlfWXRpaHUtb3dXcDJtZ2svcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2QwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC40LzQvtC90LXQvdC60L4g0KLQsNC80ZbQu9CwLCAxMyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLtCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQsCDihJYxOSDRgtCyLjQ5LCDQhiDRh9Cw0YHRgtC40L3QsCwgMinQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5IC4nJ9Cf0ZbQtNGB0L3RltC20L3QuNC6Jycg0Lcg0YbQuNC60LvRgyAnJ9Cf0L7RgNC4INGA0L7QutGDJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUG1FamdPVjJZWVppUklVQnBURElIanVyLWx6Ul9mbHYvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2QxXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC90ZbQs9GD0YAg0JDQvdC90LAsIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCR0KXQsNCy0LDRiNGWLiAnJ9Co0YLQvtGA0LwnJywgMinQpC7QodCw0LkuINCS0LDRgNGW0LDRhtGW0ZdcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaG1feERIT1pUelVDUzRVWklzbzdNSFozaWJrdkFJYmIvcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2QyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotC10YDQvdC+0LLQsCDQmtGB0LXQvdGW0Y8sIDE0INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0IYu0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjyDihJYxMCwgMinQlS7Qk9GA0ZbQsy4gJyfQn9C+0YXRltC0INCz0L3QvtC80ZbQsicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWpKb1k4a2R6ZVVLbDV6VTVnTGU1ZHU4bGhHYWxCSVlCL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkM1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQutCw0YfRg9C6INCS0ZbQutGC0L7RgNGW0Y8sICAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KQuINCc0LXQvdC00LXQu9GM0YHQvtC9LiAgJyfQn9GW0YHQvdGPINCx0LXQtyDRgdC70ZbQsicnLCAyKSDQki4g0JPRltC70LvQvtC6ICAnJ9CS0LDQu9GM0YEt0LXRgtGO0LQnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFLaTVDLXRhbmp4eTJNeTdrWjZrV2dZRVdNQU9FWUZjOS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCi0YDQsNGH0YPQuiDQntC70LXQutGB0LDQvdC00YAsIDEzINGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQny4g0JfQsNGF0LDRgNC+0LIuICAnJ9Cg0L7QvdC00L4t0LPQsNC70L7QvycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMThEbE4xYjRLMXNYcmR2dmIzQThwSG1KRnZYd2J6WXJkL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLRgNCw0YfRg9C6INCe0LvQtdC60YHQsNC90LTRgCwgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQlC7QpNGW0LvRjNC0LiAnJ9Cd0L7QutGC0Y7RgNC9Jycg4oSWNVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMM0p4b1dQcjZqeE01UTNweE8wQkJYMlU0VWlGbkVfSC9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0L3RjtC6INCe0LvQtdC60YHQsNC90LTRgCwgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwIOKEljIzLCDRhNCwINC80LDQttC+0YAsINCG0YcuOyAyKdCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDihJYyMywg0JTQotCaLdCGXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWkyZnVPUFZNcVFmSU5DVDJaSmJUSlhjY3o1QWZiX2g1L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KXQstC+0YHRgtC+0LLQsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0JvRltGB0YIu0K7QvdCw0YbRjNC60LjQuSDQtdGC0Y7QtCDihJYyLCAyKdCeLtCa0L7Qt9Cw0YDQtdC90LrQvi3QkC7QmtC+0YEt0JDQvdCw0YLQvtC70YzRgdGM0LrQuNC5LiAnJ9Ce0Lkg0YLQuCwg0LTRltCy0YfQuNC90L4sINC3INCz0L7RgNGW0YXQsCDQt9C10YDQvdGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR25zQVpzdWdkcUJMTDZoS0NHbGxlQThaS19xVDE4RmovcHJldmlldyBcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpdGA0LDQvNC10L3QutC+0LLQsCDQkNC90LDRgdGC0LDRgdGW0Y8sIDEzINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtC+0YDQvtCy0ZbRhtC40L0uJyfQoNGD0YHQsNC70L7QvdGM0LrQsCcnLCAyKdCcLtCh0LrQvtGA0LjQui4nJ9CW0LDRgNGC0ZbQstC70LjQstCwINC/J9GU0YHQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUMwdVNwZVN5YmZkYUlYWWxtWXdNclo1SlVzZGI3UmI5L3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KXQtdC70LzQsNC9INCS0ZbQvtC70LXRgtCwLCAxMyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQo9CT0ZbQu9C70L7Qui4nJ9Cf0YPRgNGF0LDRjtGH0Lgg0LIg0YXQvNCw0YDQutCw0YUnJywgMinQki7QpdC+0LTQvtGILicn0KfQtdGA0LLQvtC90LAg0YjQsNC/0L7Rh9C60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6dXlFR3QzY3ZaM3NWaktuQTNDSlRaVkwydkVWZ1hXeS9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZGFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCo0LjQsdCw0L3QvtCy0LAg0JLQsNGA0LLQsNGA0LAsIDEzINGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQu0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0g4oSWMiwg0YLQsi45XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXIxalVSRktDNTU1d0tNUjdDbFN5bXRUR19EV3d2Z3ZaL3ByZXZpZXcgXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KjQuNCx0LDQvdC+0LLQsCDQktCw0YDQstCw0YDQsCwgMTMg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQoS7QkdC+0YDRgtC60LXQstC40Ycu0JXRgtGO0LQg4oSWNywg0YLQsi4yOVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFLVFVZUDNnV240UFRUR0cxWV9fRktySTFzNUdrWEJvTy9wcmV2aWV3IFwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZGNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCQ0L3RgtC+0L3RjtC6INCc0LDRgNGW0Y8sIDIxINGA0ZbQulwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLtCc0LXRgtC90LXRgC4gJyfQlNCy0ZYg0LrQsNC30LrQuCcnLCAyKdCGLtCo0LDQvNC+LiAnJ9Ci0L7QutCw0YLQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQUZWRUczTTNnVTF5SWFJYzVZbmNSaFVJQWx3ZjhBVmovcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZGRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCR0L7QsdGA0ZbRiNC+0LLQsCDQhtC90LXRgdCwLCAxNiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEpINCZLtCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDRgNC1INC80LDQttC+0YAsINCGINGHLjsgICAyKSDQoS7Qn9GA0L7QutC+0YQn0ZTQsi4gJyfQodCw0YDQutCw0LfQvCcnLNGC0LIuMTcg4oSWMVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlKSHVFU1FWSE02YnB1cFBzdmRVbjRlbFFSYmdPMjNlL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2RlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQkdGP0L3QvtCy0LAg0JTQsNGA0LjQvdCwLCAxNiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSwg0YLQsi4yN+KEljIsICAgICAgMinQlC7Ql9Cw0LTQvtGALiDQldGC0Y7QtCDQtNC+INC80ZbQvdC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEtQ0JjZUhFYktnZTMyWDZORDFGX3pGVlEtMlJiNDRZdy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNkZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQvtC30L3RjtC6INCQ0L3Qs9C10LvRltC90LAsIDE3INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCvLtCh0YLQtdC/0L7QstC40LkuINCf0YDQtdC70Y7QtNGW0Y8sICAgICAgIDIp0K8u0KHRltCx0LXQu9GW0YPRgS4g0JXRgtGO0LRcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5N1FIdEd1a0pvb2NTMEJfZGl3ekp1LVZRWThXQjlvcC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPRg9C6INCh0L7RhNGW0Y8sIDE2INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuICcn0JPRg9C80L7RgNC10YHQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrUFFUX3VUeGFJbGFscXhfYWFwU3BpZDJTWmdQN2pxNi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JPRg9C6INCh0L7RhNGW0Y8sIDE2INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JwuINCb0LjRgdC10L3QutC+LiAnJ9CW0YPRgNCx0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU51aGRsT3FYZVByOGV4ZE1wMGdYVEFsNkZma2drRHVOL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2UyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9GD0LvQvtCy0LAg0JDQvdCz0LXQu9GW0L3QsCwgMTgg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLiDQqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDRgtCyLjQ4IOKEljEsICAgICAyKdCfLiDQodCw0L3QutCw0L0uINCi0L7QutCw0YLQsFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpuaDlSVS1wQ3Azckh4cXlWdVA0NEQ0Q2tZbTU5R2pOL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2UzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNCw0L3QvtCy0YHRjNC60LAg0J7Qu9GM0LPQsCwgMTcg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JHQsNGA0LLRltC90YHRjNC60LjQuSDQn9GA0LXQu9GO0LTRltGPIOKEljQgJyfQpdC+0YDQsNC7JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZTGQyRlA1SXhEbmVJY09NV2dXVGdDZnViQk9ZSlFQci9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlNFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JTQsNC90L7QstGB0YzQutCwINCe0LvRjNCz0LAsIDE3INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi7Qm9GP0LTQvtCyINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuMzkg4oSWNFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXdvZ1ZadjhXVnlRdExGc29wd2FSQngxUlFPeGx6Q0ZJL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2U1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNGD0LTQvdC40Log0JTQsNGAJ9GPLCAxNyDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCR0LDRgNCy0ZbQvdGB0YzQutC40LkuJyfQm9C40YHRgtC+0Log0Lcg0LDQu9GM0LHQvtC80LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWxfSEUzcjBPNXVzak9IY051TXBORFlnX2c2ZDJTMzV0L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2U2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNGD0LTQvdC40Log0JTQsNGAJ9GPLCAxNyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCaLtCU0LXQsdGO0YHRgdGWLiAnJyDQoNC+0LzQsNC90YLQuNGH0L3QuNC5INCy0LDQu9GM0YEnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXFMZ3E5QWZENllYQ3lQUXlGZWpseVo4Qk9OdVNvTl80L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2U3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtGA0Y7QutC+0LLQsCDQnNCw0YDRltGPLCAxNSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLiAnJ9Cf0YDQuNC80YXQuCDQvNC+0YDRjycnLCAyKdCkLtCo0L7Qv9C10L0u0JXRgtGO0LQg0YLQsi4xMCDihJY0XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLWNibzNCWjFFUE5ZbTZOUzFlQ01tXzJIVHpISjdCZWsvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZThcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0YPQu9GW0Ygg0J/QvtC70ZbQvdCwLCAxNSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JUu0JPRgNGW0LMuJyfQmtC+0LvQuNGB0LrQvtCy0LAnJywgMinQhi7Qn9Cw0LTQtdGA0LXQstGB0YzQutC40LkuICcn0KHQutC10YDRhtC40L3QvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTmFtVlZGZkFkUmZhRnVBMXVLamx0OVFJV2dNaVNCeTYvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0YPQt9C40YfQtdC90LrQviDQnNCw0YDRltGPLCAxOSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwIOKEljMxLCAx0YcuOyAyKdCkLtCo0L7Qv9C10L0u0JXRgtGO0LQs0YLQsi4xMCDihJY1XCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTy1haGZZSk5iRmY1ZlNPd1NTcGZmSVdXcG5pQnViSzgvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCe0LvRltC50L3QuNC6INCe0LvQtdC60YHQsNC90LTRgCwgMTgg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JYu0JHRltC30LUt0JIu0JPQvtGA0L7QstGW0YYuINCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRgtC10LzRgyDQtyDQvtC/0LXRgNC4ICcn0JrQsNGA0LzQtdC9JycsIDIp0Jsu0KDQtdCy0YPRhtGM0LrQuNC5LiDQn9GA0LXQu9GO0LTRltGPINGE0LAg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTNKeWxQZERXZ1Z6NlFTSFJHVkp0N0ZoZGFSZWxDSFNEL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ViXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC80LjQuiDQkNC90L3QsCwgMTcg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4g0JXRgtGO0LQt0LrQsNGA0YLQuNC90LAg0YLQsi4zMyDihJY1LCDRgdC+0LvRjCDQvNGW0L3QvtGAXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xazdva0J1eU1zRmFSdDRHd3dYVVNnWUNoNURkWTZNTjkvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LzQuNC6INCQ0L3QvdCwLCAxNyDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiDQn9GA0LXQu9GO0LTRltGPLCDRgtCyLiAzMiDihJYxMiwg0YHQvtC70Ywg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUxZSEhWS3VVSWlzYWRFMmZtendZem13c1MtVXdWeFZSL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQotGW0YXQvtC90L7QuiDQhNCz0L7RgCwgMTcg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLicn0KHQutC10LvRliDRg9GJ0LXQu9C40L3QuCDQo9GHLdCa0L7RiCcnINC3INGB0Y7Rl9GC0LggJyfQmtGA0LjQvNGB0YzQutGWINC90LDRgNC40YHQuCcnLtGC0LIuOCwgMinQpC7Qm9GW0YHRgi7QotGA0LDQvdGB0YbQtdC90LTQtdC90YLQvdC40Lkg0LXRgtGO0LQg4oSWMTAsINGE0LAg0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhuM1RmTkg2R0ZCQlFvMXZaWk5uUlJWcWJ0akdHdWcyL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpNCw0YnQtdCy0YHRjNC60LjQuSDQotCw0YDQsNGBXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuICcn0JXRgtGO0LQt0LrQsNGA0YLQuNC90LAnJywg0YLQsi4zMyAoNSlcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFlcVRQWGxfUmhaUU9kVnItbGhVUW1sT004Y29DNkZvSy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KTQsNGJ0LXQstGB0YzQutC40Lkg0KLQsNGA0LDRgVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCbLtCg0LXQstGD0YbRjNC60LjQuS4g0J/RgNC10LvRjtC00ZbRjywg0YLQsi40ICgyKVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMS1fYm9Nbm9Zbms3NHhEelF5NlFsQ3FWeElQM2o0c0h4L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2YwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpNC10YHQuNC6INCd0LDQt9Cw0YDRltC5LCAxNiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QkdC+0YDRgtC60LXQstC40YcuJydMeXJpY2EgTm92YScnLNGC0LIuNTkg4oSWMyw0OyAyKdCkLtCb0ZbRgdGCLtCi0YDQsNC90YHRhtC10L3QtNC10L3RgtC90LjQuSDQtdGC0Y7QtCDihJY4ICcn0JTQuNC60LUg0L/QvtC70Y7QstCw0L3QvdGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjMHNqNEFNdUR4SEFwbUdUOVdTaG1qSkhiRUhSekpkQy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0K7Qt9C70L7QstCwINCb0Y7QsdC+0LIsIDE3INGA0L7QutGW0LJcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSkg0Jou0JTQtdCx0Y7RgdGB0ZYuICcn0JDRgNCw0LHQtdGB0LrQsCcn4oSWMSwgMikg0Jku0JHRgNCw0LzRgS4nJ9CG0L3RgtC10YDQvNC10YbRhtC+JycsINGC0LIuMTE3IOKEljJcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMQURJbldwbS1qaGMxRmJSdWRncXdDTUd0elhRREJNUy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmMlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JfQsNGU0YbRjCDQnNCw0YDQuNC90LBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KHQutC+0YDQuNC6Licn0JLQsNC70YzRgScnINC3INCf0LDRgNGC0LjRgtC4IOKEljVcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExbWxaem5aYm94aHp4RUJUSjRnVW1FdEUwSllnUWdkaC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmM1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JfQsNGU0YbRjCDQnNCw0YDQuNC90LBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9CU0YPQvNC60LAnJywg0YLQsi41OVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBhVXAtYXFRZENxQnQzNTY2MnlOd0praGFOT0FYTl9oL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9C+0LPQstC40L3QvtCy0YHRjNC60LjQuSDQhNCy0LPQtdC90ZbQuVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCULtCf0YDQuNGC0YHQutC10YAuICcn0JHQu9GO0Lcg0J/RltC60LDRgdGB0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWUyXzRpc1F6bHVjTFI3a0JaWC1DSHhncVlyQnhKUlp3L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQm9C+0LPQstC40L3QvtCy0YHRjNC60LjQuSDQhNCy0LPQtdC90ZbQuVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCf0YDQvtC60L7RhCfRlNCyLiDQodC+0L3QsNGC0LAg4oSWMywg0YLQsi4yOFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMURMaFQ5WXdSNUk5Y1p4emROb2UyMkZ3UzhqcEk0WVZzL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC40LrQuNGC0Y7QuiDQkNC90LDRgdGC0LDRgdGW0Y9cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC7QoNCw0LrQvtCyLiAnJ9Ca0L7QvdGG0LXRgNGC0L3QuNC5INC10YLRjtC0JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDOGE2VFBSTTJjYVFmVE9BNnpHSHZ1SWpHU29MN0MxYi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmN1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQuNC60LjRgtGO0Log0JDQvdCw0YHRgtCw0YHRltGPXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDQtNC+INC80ZbQvdC+0YAsINCU0KLQmiAt0IbQhlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXdycWRiX2tlMktjaF9DZkJjbU5SSDJNNTgwUHRaUUExL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQndCw0LfQsNGA0LXQvdC60L4g0JrRgdC10L3RltGPXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0JLQvtC70LrQvtCy0LAuICcn0J3QsNGB0YLRgNC+0ZcnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU9BOHJ2TjZ3d2RwT1Z5MURWRHQxenEtNHBrZWlTcjN4L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQndCw0LfQsNGA0LXQvdC60L4g0JrRgdC10L3RltGPXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JHQsNGFLiDQkNC70LXQvNCw0L3QtNCwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMHF0VVJXZDNhYXNjcTJnd05IeE0tRkVUeVFITEI4dEQvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LXRgNC+0LIg0JLQu9Cw0LTQuNGB0LvQsNCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS4g0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINC00L4g0LzRltC90L7RgCwg0JTQotCaLdCG0IYsIDIp0KQu0KjQvtC/0LXQvS4g0JHQsNC70LDQtNCwIOKEljEsINGC0LIuMjNcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhdG41eWlFY1hnalZuRktmTTRRV0FVUzR6X1VWVEpfcS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLQsNGA0LDRgdC+0LIg0JLQu9Cw0LTQuNGB0LvQsNCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4gJyfQldGC0Y7QtC3QutCw0YDRgtC40L3QsCcnLCDRgtCyLjM5IOKEljksIDIp0KQu0KjQvtC/0LXQvS4gJyfQkdCw0LvQsNC00LAnJywg0YLQsi4yMyDihJYxXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOU5aX3RFeTBPMm5SWGpDbHRkX3ZkV0wzU011Qk5hQ00vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCT0YDQtdCx0LXQvdGO0Log0JMu0J4uXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7Qn9GA0L7QutC+0YTRjNC10LIuINCh0L7QvdCw0YLQsCDihJYyLNCGINGHLjsyKSAgINCkLtCb0ZbRgdGCLicn0JXRgtGO0LQg0LfQsCDQutCw0L/RgNC40YHQsNC80Lgg0J/QsNCz0LDQvdGW0L3RlicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU2hVWUlZUDluZ29RWmVobUNielA1RjNiSkFLRmgzc04vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7QvdC00YDQsNGC0Y7QuiDQnC7Qni4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoC7QqNGD0LzQsNC9LiAnJ9Cg0L7QvNCw0L3RgScnLCDRgtCyLjI4LCAyKdCSLtCa0L7RgdC10L3QutC+LiAnJ9Ca0YPRgNCw0L3RgtCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGT2I0MVBzbXFXTzRueU9Ea09kb01UNFNzUHA0SFg5eC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0L3QsNGB0LXQvdC60L4g0JAu0J4uIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuINCf0YDQtdC70Y7QtNGW0Y8g0YHQvtC70Ywg0LTRltGU0Lcg0LzRltC90L7RgCwgMinQki7QpNGW0LvRltC/0LXQvdC60L4uINCi0L7QutCw0YLQsFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZMWEVMdVpjSTZRaTJncmx3YVUtdUV3bEx2MWVTRWtYL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXHJcbn1dO1xyXG5cclxubGV0IGNvbmNlcnRtYXN0ZXJzID0gW1xyXG4gICAge1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmYWFzZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KjQtdCy0LXQu9GM0L7QstCwINCE0LvRltC30LDQstC10YLQsCwgMjAg0YDQvtC60ZbQsi5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiDQkNGA0ZbRjyDQm9C10L3RgdGM0LrQvtCz0L4sIDIpINCTLtCl0LDQt9Cw0L3QvtCy0LAuIFxcXCIg0KPQt9C00L7QstC2INCy0YPQu9C40YbRliDRhdC+0LTRgyDRj1xcXCJcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9DV1gwZVJQVENZWVwiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTNmZmFhc1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JfQsNC60LDQu9GO0LbQvdCwINCeLtCRXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JMu0JLQtdC90Y/QstGB0YzQutC40LkuINCa0L7QvdGG0LXRgNGC0L3QuNC5INC/0L7Qu9C+0L3QtdC3INGA0LUg0LzQsNC20L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3MzY2xYTFQzNGhZXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmYWFzMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JfQsNC60LDQu9GO0LbQvdCwINCeLtCRXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JYu0JzQsNGB0L3QtS5cXFwi0KDQvtC30LTRg9C8XFxcIlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2dEeVVDYmFuZUJrXCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0LHQt9Cw0YAg0J3RltC60L7Qu9GMLCAxNCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQu0JrRgNC10LnRgdC70LXRgC4nJ9Cc0LDQu9C10L3RjNC60LjQuSDQktGW0LTQtdC90YHRjNC60LjQuSDQvNCw0YDRiCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa3VTUjBWbU9NaXFJajlZUjB1M2x2T3pxNEpHNWFMWTgvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtCx0LfQsNGAINCd0ZbQutC+0LvRjCwgMTQg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCVLtCV0LvRjNCz0LDRgC4nJ9Ch0LDQu9GO0YIg0LrQvtGF0LDQvdC90Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFnSTdYbGpfU0xRcWwyUGk2RVRBaFNBWlRLTE1qa0JuL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LDQsdC+INCd0LXRgdGC0L7RgCwgMTAg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0YDQvtC70LsuICcn0J/QvtC70YzQutCwINCy0ZbRgdC70Y7Rh9C60LAnJywgMinQki7QptC40LHRltC9KNC/0LXRgNC10LrQuy7QkC7QptCw0YDQtdC90LrQvikuICcn0JvQuNGB0YLQvtC6INC3INCw0LvRjNCx0L7QvNCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0UFI1ZXZyVUlSYVMxVkZVdnUwczY5SE1IN3hTM1dpSS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDAyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCE0LLQs9C10L3RltGPLCA5INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0JHQtdGC0YXQvtCy0LXQvS4gJyfQkdCw0LHQsNC6Jycs0L7QsdGALiDQkC4g0KjRg9Cy0LDQu9C+0LLQsFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlyMmFSS2NvODJOd3pSMkZRSDZBcFpWSFFaWXIwTDd5L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0ITQstCz0LXQvdGW0Y8sIDkg0YDQvtC60ZbQsiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QkdC10YYuICcn0J/QvtC00ZbQu9GM0YHRjNC60ZYg0LLQuNC60YDRg9GC0LDRgdC4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFxSlE5QUlXajQ4cEpUTUJXZm8zaDd6NkpsS0pIOTgwbi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodGC0LDRgNGG0LXQsiDQkdC10L3QttCw0LzRltC9LCAxMSDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCWLtCc0LDRgdGB0L3QtS4gJyfQoNC+0LfQtNGD0LwnJzsgMinQlS7QoNC40LHQutGW0L0uICcn0KTQvtGA0LzRg9C70LAgMScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTDZieER5c04weTJHRFNOblJYcUdFRmJIUjdlUy1peHMvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JLQu9Cw0YHRjtC6INCd0LDQt9Cw0YAsIDE4INGA0L7QutGW0LIgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QlNC+0L3QvtGC0ZYuINCQ0YDRltGPJydPIGRlbCBtaW8gYW1hdG8gYmVuJycsMinQlS7Qk9GA0ZbQsyzQky7QpS4g0JDQvdC00LXRgNGB0LXQvSAnJ0plZyBlbHNrZXIgZGlnJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEyX01GUFUzOWJ0SlFLdlN0MlJZemppVTBIYVlzYTRPZy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQlNGP0YfQtdC6INCG0L7QsNC90L3QsCwgMTfRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JAu0JzQvtGG0LDRgNGCLtCQ0YDRltGPJydSaWRlbnRlIGxhIGNhbG1hJycsIDIp0KQu0J3QsNC00LXQvdC10L3QutC+LCDQhi7QpNGA0LDQvdC60L4u0KDQvtC80LDQvdGBICcn0KfQvtCz0L4g0Y/QstC70Y/RlNGI0YHRjyDQvNC10L3RliDRgyDRgdC90ZYnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVRYlFLYldpdkNiLWdPUWtjY0lDTDVBUFFqZ1dsZTl3L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0LLQsNGI0LAg0K/QvdCwLCAxNiDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QmtCy0LDQvdGGLiDQodC+0L3QsNGC0LAg0YDQtSDQvNCw0LbQvtGALCDQhi3QhtCGINGHLjsgMinQki7Qn9C+0L/Qvy4gJyfQoNGD0YHRgdC60LjQuSDQstC10YfQtdGAJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvcEw0MW1MSDEwQm5yMWVNeXpPRXhzd0ZKb1RaXzhjUy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0LvQvtC00ZbQuSDQkNC90YLQvtC9LCAxOCDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4g0KDQvtC80LDQvdGBJyfQk9C+0YDQvdC40LzQuCDRgtC40YXQviDQu9C10YLQtdC70LAg0LTRg9GI0LAg0L3QtdCx0LXRgdCw0LzQuCcnLCAyKdChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CV0LvQtdCz0ZbRjycnLNGC0LIuM+KEljEsINC+0LHRgNC+0LHQutCwINC00LvRjyDQstGW0L7Qu9C+0L3Rh9C10LvRliDRgtCwINGELdC90L5cIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsUUl6RE9pWnAtRWRYbHkxMFNWbTRkaU9qNVdDU2szWi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA5XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0L3RjtGI0LXQuiDQodC+0YTRltGPLCAyMSDRgNGW0LpcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QotCw0LrRgtCw0LrRltGI0LLRltC70ZYuINCh0L7QvdCw0YLQsCDQtNC70Y8g0YTQu9C10LnRgtC4INGWINGE0L7RgNGC0LXQv9GW0LDQvdC+LlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUhYRS1XYmxVMC1IeXdnVnpDdW5RbmlRVUNVTlhHbE5OL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCa0L7QvdGO0YjQtdC6INCh0L7RhNGW0Y8sIDIxINGA0ZbQuiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC7QmtC+0LzQu9C10LIuICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTRxNzhYS3BkRmc2NlZTV2tBWnEwVmVSdUthVGNKVXB1L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCf0YfQtdC70ZbQvdGG0LXQstCwINCQ0LTRgNGW0LDQvdCwLCAxNSDRgNC+0LrRltCyXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QnNC+0YbQsNGA0YIuINCQ0YDRltGPINCR0LvQvtC90LTRhdC10L0g0Lcg0L7Qv9C10YDQuCcn0JLQuNC60YDQsNC00LXQvdC90Y8g0ZbQtyDQodC10YDQsNC70Y8nJywgMinQoC7Qk9C70ZbRlNGALicn0JIg0L/QvtGA0YvQstC1INC90LXQttC90L7RgdGC0Lgg0YHQtdGA0LTQtdGH0L3QvtC5JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3bVJWeFYwNnY1TXY2X1AzQzE4M29NZ09OLVJfdS1xTy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpNC10YHQuNC6INCd0LDQt9Cw0YDRltC5LCAxNiDRgNC+0LrRltCyIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JTQti7Qn9GD0YfRh9GW0L3Rli4g0JDRgNGW0Y8g0KLQvtGB0LrQuDsgMinQnC7QtNC1INCk0LDQu9GM0Y8uJyfQpdC+0YLQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQkpOc1RwNFdEeFpiQWRBbmpNTFAzaGJENjNUMmVJd1kvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0K/RgNC+0YjQtdC90LrQviDQktCw0LvQtdGA0ZbRjywgMTkg0YDQvtC60ZbQslwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0KHRgtC10YbQtdC90LrQvi4gJyfQodC+0YLQvtGP0LvQsCDRjyDRliDRgdC70YPRhdCw0LvQsCDQstC10YHQvdGDJyc7IDIp0JIu0JLQu9Cw0YHQvtCyLiDQodC60LXRgNGG0L4g0LTQu9GPINC00L7QvNGA0Lgg0YLQsCDRhNC+0YBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPdURsYWNEYjNpOTR4Tnhrb3drLWpzTmt0eHVRSzcxTC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0LfQsNC6INCG0YDQuNC90LBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQhC7QkdC+0LfQt9CwLicn0JTQuNGC0Y/Rh9GWINC80YDRltGXJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFQc295T0lyMTdPQ3lOX0doUlVfcTdJcFM0SFd3SFdVQi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtC+0LfQsNC6INCG0YDQuNC90LBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIn0J3RltGHINGP0LrQsCDQvNGW0YHRj9GH0L3QsCcnLCDQvtCx0YAuINCuLtCe0YHRgtGA0L7QstGB0YzQutC+0LPQviBcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUSktRRkVtM2Ezd3ppWXZJM1FmaWhHeHpWMlU1UUgybi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDEwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQnNC40LrQuNGC0Y7QuiDQkNC90LDRgdGC0LDRgdGW0Y8gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QkdCw0LrQu9Cw0L3QvtCyLiAnJ9Ca0L7QvdGG0LXRgNGC0ZbQvdC+JycsICAgICAgMinQly7QkdCw0LPRltGA0L7Qsi4gJyfQoNC+0LzQsNC90YEnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWo4X212WkVHVGdZSTBMRkdXRm9MYlFBZ0NIcEk1QzBaL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LDQsifRjtC6INCS0LvQsNGB0YLQsFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JAuINCc0L7RhtCw0YDRgi4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINGE0LDQs9C+0YLQsCDQtyDQvtGA0LrQtdGB0YLRgNC+0Lwg0YHRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwg0IbRhy47IDIp0JAu0KLQsNC90YHQvNCw0L0u0KHQvtC90LDRgtC40L3QsCDQtNC70Y8g0YTQsNCz0L7RgtCwINGWINGE0L7RgNGC0LXQv9GW0LDQvdC+LNCG0IbQhtGHLlwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTMwYVpPMW54VjRFOEhYN2h4V2FOdlZUNGJmZ2toeDRNL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCh0LDRgdGO0Log0K7Qu9GW0Y9cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCTLtCk0L7RgNC1LiAnJ9Cf0YDQvtCx0YPQtNC20LXQvdC90Y8nJywgMikg0JEu0JHQsNGA0YLQvtC6LiAnJ9Co0ZbRgdGC0Ywg0YDRg9C80YPQvdGB0YzQutC40YUg0YLQsNC90YbRltCyJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvZHMzdHZVRFhaZG8xeWVkSVZYWWNjOU1uNzdiamgyNS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDEzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC+0LLQsCDQoi7Qki5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS7QodC10LLQtdGA0L0uICcn0J/QvtC70YzRgdGM0LrQuNC5INGC0LDQvdC10YbRjCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeFh0dk9TQXVudjU2UmZBeGdWMXE3bTRpS2EwOXNXSDEvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxNFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0IbQstCw0L3QvtCy0LAg0KIu0JIuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0KLQsNC80LDRgNC40L0gJyfQodGC0LDRgNC+0LLQuNC90L3QuNC5INCz0L7QsdC10LvQtdC9JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0OXZsTTA3R2Q4UzlDejR0RFoyS3lLa2d1Snp5QjF1Qi9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9Cw0YfQuNC6INCeLtCQLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KAu0JPQu9GW0ZTRgC4nJ9Cg0L7QvNCw0L3RgScnLCAyKdCeLtCm0LjQs9Cw0L3QutC+0LIuJyfQhtC90YLRgNC+0LTRg9C60YbRltGPINGC0LAg0KfQsNGA0LTQsNGIJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOZ3M4NXFwRU9ERXY2N2E4LWRhSnhab0g2S283U1VXay9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQk9GA0LjRhtGW0LIg0J4u0JwuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC4g0JrRgNC10LnRgdC70LXRgC4nJ9Cc0LDQu9C10L3RjNC60LjQuSDQstGW0LTQtdC90YHRjNC60LjQuSDQvNCw0YDRiCcnLCAyKdCbLiDQoNC10LLRg9GG0YzQutC40LkuICcn0IbQvdGC0LXRgNC80LXRhtC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuWGt5YlBaSFBPV1dVekJFRF9LS2VHRjNrTzJFY2Fiai9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtGW0YDRh9Cw0L3QvtCy0LAg0IYu0JIuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JLRltC00LzQvtC90YLQtS4nJ1BhciB6aWxvIHVuIHJhaWJvIHBhc2FrdScnLCAyKdCT0YPQsdCw0YDQtdC90LrQviDQki4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINGE0LvQtdC50YLQuCDQtyDQutCw0LzQtdGA0L3QuNC8INC+0YDQutC10YHRgtGA0L7QvCzRgtCyLjEwXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xenBNakNhdVVwYkpkdWZXWGZiNU9mbTdQOXNBWWotaVAvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQtdC60YPRhSDQni7Qki5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCGLtCS0LjQvNC10YAuICcn0JPRg9GG0YPQu9GM0YHRjNC60LAg0YDQsNC/0YHQvtC00ZbRjycnLCAyKdCj0LrRgC7QvdCw0YAuINGC0LDQvdC10YbRjCDQsiDQvtCx0YAu0JIu0KHQvtC70L7QvdGB0YzQutC+0LPQviAnJ9CS0LXRh9C+0YDQvdC40YbRlicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZGZQeDE1V1FLSGZQVnRNUFdXQUF3OXN5OVVZdzVTMWUvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JvQvtCx0L7QtNCwINCbLiDQnC4sIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0JHQtdGC0YXQvtCy0LXQvSwg0KIu0KjQtdCy0YfQtdC90LrQvi4gJyfQl9C+0YDQtSDQvNC+0Y8g0LLQtdGH0ZbRgNC90Y/RjycnLCAyKdCb0LXQvNC60ZbQstGB0YzQutCwINC90LDRgNC+0LTQvdCwINC/0ZbRgdC90Y8gJyfQkiDRgtC10LzQvdGDINC90ZbRh9C60YMg0YPQsdC+0YfQuCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMGdabzUzWDZFaEh3RU1wWEt3cEIydFcyX2lyVm8yOTAvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxYVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JvRjtCx0YfQtdC90LrQviDQnC7QoS4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEu0JHQsNGFLiDQmtC+0L3RhtC10YDRgiDQtNC70Y8g0YHQutGA0LjQv9C60Lgg0Lcg0L7RgNC60LXRgdGC0YDQvtC8INC70Y8g0LzRltC90L7RgFwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXdmaHVpdFhMMk13dFlkclVISWtWZE14UVpwaHQ2ak5sL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWJcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCb0Y7QsdGH0LXQvdC60L4g0Jwu0KEuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J0u0KHRgtC10YbRjtC9LiAgICAnJ9CR0L7Qu9C10YDQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYkhXVXJpcUt2U1RuVm5JbTQ3bW1MZWRTaTBOaC1YUXMvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzQuNGF0LDQudC70L7QstCwINCcLtCSLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCQLtCh0L7Qu9GC0LDQvS4gJyfQnNC10LvQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRW9FUzJtVHJXQ3k5Q1FjcWQ5cXUzNjZaMXR6NklwUlEvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgICAgICBcImlkXCI6IHtcclxuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmYWFzZGFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNGF0LDQudC70L7QstCwINCcLtCSLlwiLFxyXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS4g0KLQsNC80LDRgNC40L0uIFxcXCLQodGC0LDRgNC+0LLQuNC90L3QuNC5INCz0L7QsdC10LvQtdC9XFxcIlwiLFxyXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1NHhKMHZLNmRlUjJYSndHTFhGaDZzQlJlUHZ4R1VOci9wcmV2aWV3XCIsXHJcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG4gICAgfSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCc0Y/Qu9GM0LrRltC90LAg0J0u0J4uXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JTQti7QktGW0LvRjNGP0LzRgS4gJyfQnNC10LvQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaU1fRUYwVng5LXc0RFM2SFJfWkhSSi1tcUp3QS1GR3AvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0JzRj9C70YzQutGW0L3QsCDQnS7Qni5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QptC40L3RhtCw0LTQt9C1LiAnJ9Ch0LDRh9GW0LTQsNC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE1OWRqU3J6STFBdkw1cGtDbDB2bllEc0hRTFRuZDVsby9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDFmXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQndGW0LrRltGC0ZbQvdCwINCGLtCgLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCRLtCb0Y/RgtC+0YjQuNC90YHRjNC60LjQuS4gJyfQnNC10LvQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeVF5TzBRNjVXdkhudlkyOHhCbDNzaFctSHRkdTQyMzkvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyMFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J3RltC60ZbRgtGW0L3QsCDQhi7QoC5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQodC7LiDQkC7QnCfRj9GB0YLQutGW0LLRgdGM0LrQvtCz0L4sINC80YPQty7Qki7QktC10YDQvNC10L3QuNGH0LAgJyfQn9GW0LTQutGA0YPRh9GDINGPINGH0L7RgNC90ZbRlyDQstGD0YHQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdV83VVFEdU9DRHFKSmoxcTVsaEVGUEVveGRfUFUzalkvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyMVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQsNGU0L3QutC+INCiLtCuLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQli7QnNCw0YHRgdC90LUuICcn0KDQvtC30LTRg9C8JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFKbEFvWS1BQUpFeUktcklSREN1N1VueXd4dnJXRUJCdy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDIyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCw0ZTQvdC60L4g0KIu0K4uLCBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi7Qp9GD0L/QsNC6LiAnJ9CS0LXRgdC90Y/QvdC40Lkg0YDQvtC6LdC9LdGA0L7Qu9C7JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUNS1JVU5VdVFtVXZGVldZbFk2U0FWZWotVElxbWJycS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDIzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodCw0LLRh9GD0Log0KIu0IYuICBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCU0LYu0JLRltC70YzRj9C80YEsINCw0YDQsNC90LYu0JAu0KLQtdC/0LvQuNGG0YzQutC+0ZcuJyfQmtC+0LvQuNGB0LrQvtCy0LAg0LTQu9GPINCw0L3Qs9C10LvQsCcnLCAyKdCSLtCa0L7Qt9C70L7QsizQv9C10YDQtdC60LsuINC00LvRjyDQtNC+0LzRgNC4INCELtCW0YPQutC+0LLQsC4gJyfQnyfRlNGB0LAg0YMg0YHRgtC40LvRliDRhNC70LDQvNC10L3QutC+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3VGdpdW9naXZzaDN4d2pGWGk1YTFvUlUtb2trUDk2MC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCGLtCuLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCQLiDQqNGD0LzQsNC60L7QstCwLiAnJ9Ci0LDQvdCz0L4g0JXQstGW0YLQuCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMUNremlSdllKdm5pVzdjaWE3eTlFa0k4NXNuTEp3N3gvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyNVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQhi7Qri5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQki7Qk9C+0LzQvtC70Y/QutCwLiAnJ9CG0YHQv9Cw0L3RgdGM0LrQuNC5INGC0LDQvdC10YbRjCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaU9VSk4yMUJ2RGR6c0wwb1AwYXR2c0Vtb3FnVWRwWUMvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyNlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQvNC+0LvRj9C90ZbQvdC+0LLQsCDQoS7QnC4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QlNCy0L7RgNC20LDQui4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINGB0LrRgNC40L/QutC4INC70Y8g0LzRltC90L7RgCwg0IYg0YcuOyAyKdCcLtCh0LrQvtGA0LjQui4gJyfQmtCw0YDQv9Cw0YLRgdGM0LrQsCDRgNCw0L/RgdC+0LTRltGPJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0bHNyTWtRcDBVVnEweXd0SjAxTHBIS1BzbUZPcEhuTy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQodGC0LDRgNC40L3RgdGM0LrQsCDQnC7QkC4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqNC40L3QutCw0YDQtdC90LrQvi7QktCw0YDRltCw0YbRltGXOyAyKdCVLtCR0L7RhtGG0LAuJyfQkNGA0ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTHNXelZfTHQxejBnR1hVTFNlZ291Y2tZOVJacm9HN2gvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KLRgNC10L/QsNC6INCcLtCGLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JYu0JTQtdC80LXRgNGB0YHQvNCw0L0uINCk0LDQvdGC0LDQt9GW0Y8sIDIp0J8u0IbRgtGD0YDRgNCw0LvRjNC00LUuICcn0JzQsNC70LXQvdGM0LrQuNC5INGH0LDRgNC00LDRiCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVE1TS0hwRWNtTTNLN2hpWnp5WTNnNEtfOE10SGJIOUwvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0ITRgNGM0L7QvNGW0L3QsCDQni7Qky4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jwu0JTRgNC10LzQu9GO0LPQsC4g0J/QvtC10LzQsC3RgNCw0L/RgdC+0LTRltGPLCAyKSDQoS7QntGA0YTQtdGU0LIuJyfQktC10YHQvdGP0L3QutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZNk9LVU9vSmIxanUzVnpTNEZDdE80Z3VCTEhEOTEwUC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDJhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQmtCw0LTRg9C6INCiLtCuLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCaLtCcLtCS0LXQsdC10YAu0JrQvtC90YbQtdGA0YIg0LTQu9GPINC60LvQsNGA0L3QtdGC0LAg4oSWMSzQhiDRhy47IDIpINCvLtCc0LXQtNC40L3RjNGILiDQoNC+0LzQsNC90YFcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrV0JIWVVZUm1YcG01QkNHVzlibnQ4eTlyaXhnUFFaNC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDJiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQndC+0LLRltC60L7QstCwINCcLtCcLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCe0LHRgC4g0JQu0JfQsNC00L7RgNCwLiAnJ9Ch0LXRgNC10LQg0YHQtdC70LAg0LTQuNGH0LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMGFXVmxPZTNGLXNzUWhUVnFrRm5nOEdKS0dKRXdVODAvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyY1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0J3QvtCy0ZbQutC+0LLQsCDQnC7QnC4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8u0IYu0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJ9CX0LDQsdGL0YLRjCDRgtCw0Log0YHQutC+0YDQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdHc1TU5VLTVmdVhRb1NPSHBXdGFHdkdqWnhjZk1BZm0vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyZFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KHQuNGA0L7RgtCwINCeLtCcLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0JrRg9C00YDRj9Cy0YbQtdCyLiAnJ9Ce0LTQuNC9INC00LXQvdGMINC3INC20LjRgtGC0Y8g0LTRj9GC0LvQsCcnLCAyKdCeLtCR0LXRhi4nJ9Cj0LrRgNCw0ZfQvdGB0YzQutC1INGW0L3RgtC10YDQvNC10YbQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU2VqQjFpZF9QVTdYZy13NWZ6S1V2SjBFb09uRnNETUMvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxyXG59XTtcclxuXHJcbm15Q2FyZHMgPSBteUNhcmRzLmNvbmNhdChjb25jZXJ0bWFzdGVycyk7XHJcblxyXG5sZXQgZW5zZW1ibGUgPSBbe1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDM3XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCW0YPRgNCw0LLQtdC70Ywg0KEuLCDQkNGA0YLQtdC80LXQvdC60L4g0KEuKVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0IbRgdC/0LDQvdGB0YzQutC40Lkg0YLQsNC90LXRhtGMJycsIDIp0J7QsdGALtCcLtCf0L7Qv9C+0LLQsC4gJyfQhNCy0YDQtdC50YHRjNC60ZYg0LzQvtGC0LjQstC4JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFLdmNFRTdxUFMwcmFPQ3FkOHNhTUVIby15MFVESXBDaC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzOFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICAo0J/QuNC70LjQv9GH0YPQuiDQnS4sINCa0LDQstGD0L0g0IQuKVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCSLtCQ0LvQtdC60YHQtdGU0LIuJycg0J3QsCDQv9GA0L7Qs9GD0LvRj9C90YbRlicnLCAyKdCeLtCf0LXRgtGA0L7QstCwLiAnJ9Cm0LjRgNC6JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuRUxvdHdxQXo5QzdkMDlHNE5WQlZ2YlJ5S0w5NThycy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzOVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICAo0KDQsNC00LrQvtCy0YHRjNC60LAg0JAuLCDQmtGD0LfRjNC80LjRhykuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCQLtCo0L3RltGC0LrQtS4gJyfQqNC40L3QtdC70YwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU00cGF6TklfVHl2MnNETVc5b0I5UWVtMzZJNURSWnVSL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgICjQoNCw0LTQutC+0LLRgdGM0LrQsCDQkC4sINCa0YPQt9GM0LzQuNGHKS4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCd0LDRg9C80LXQvdC60L4uJyfQp9Cw0YEg0LLQtdC70LjQutC40YUg0L7Rh9GW0LrRg9Cy0LDQvdGMJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMQk9lX3dGbENfeXp0X0Zma1JiQzgtOTBjVnUzc3RWTy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzYlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICAo0KHRltC60L7RgNCwINCgLiDQp9C10YDQtdC/0YPRidCw0Log0JwuKS4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QndCw0YPQvNC10L3QutC+LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnLCAyKdCVLtCT0YDRltCzLdCTLtCk0ZbRgNGC0LjRhy4nJ9Ci0LDQvdC10YbRjCDQkNC90ZbRgtGA0LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU9SVHp3LXBsZWhRdkFBT2luT3JkcW5IdG5VX29DWmo1L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgJydNeWNyYWZ0JycgKNCE0YDQvNC+0LvQtdC90LrQviDQlC4sINCo0LjQsdCw0L3QvtCy0LAg0JIuKSBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCh0LrQvtGA0LjQui4gJyfQnNC10LvQvtC00ZbRjycnLCAgICAgICAgIDIp0J4u0KXRgNC+0LzRg9GI0LjQvS4gJyfQlNGA0YPQutCw0YDRgdGM0LrQsCDQvNCw0YjQuNC90LrQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQXV2bzQ0YUJZVEczdkt4c1QyaFFEMGhta2cxRWRsYTcvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0M2RcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JHQvtC90LTQsNGA0LXQvdC60L4g0JwuLCDQodC70ZbQvdGH0LXQvdC60L4g0K4uKSBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QodC10LrRgNC10YIuJyfQn9GA0L7Qs9GD0LvRj9C90LrQsCDQlNC+0LHQtdGA0LzQsNC90LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFRU0Fka3duM2l1NTRrUjNoeG5oM0hnMENfenBQLVpVL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNlXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCR0L7QvdC00LDRgNC10L3QutC+INCcLiwg0KHQu9GW0L3Rh9C10L3QutC+INCuLikgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJyDQhtGC0LDQu9GW0LnRgdGM0LrQsCDQv9GW0YHQtdC90YzQutCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFaVC0zdUNyemJHSnRNYzBvTHd0Z0pxVG9yejlqRFllcy9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQktCw0YjRg9GA0ZbQvdCwINCSLiwg0ITQttC+0L3QutC+0LIg0JAuKS5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQky7QkdGU0LvQvtCyLicn0KPRgNCw0YHRltC80LAg0ZYg0KfQsNGA0ZbQstC90LAg0KfQtdGA0LXQv9Cw0YXQsCcnLCAyKdCeLiDQn9C+0LvRjNC+0LLQuNC5LiAnJ9Cf0L7QtNC+0YDQvtC2INCyINCQ0LvRjNC/0LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWpDaHZNQnJEd3l4S2szQUpFRUNTQkU3WV9rQ0xSaDhzL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCT0LXQvNCx0LjRhtGM0LrQsCDQni4sINCa0YPQt9C70L4g0JouKS5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCl0L7QstCw0YDQtC4gJyfQp9Cw0YDQu9GM0YHRgtC+0L0nJywgMinQlNC2LiDQqNGW0YDRltC90LMuICcn0JrQvtC70LjRgdC60L7QstCwJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0TE5WbGh1clpVZEh4NDRNY2hTNHFtMjUxZVMzOXJvUS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0MVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQlNC10YDRj9Cx0ZbQvdCwINChLiDRgtCwINCS0LDRgdC40LvRjNGU0LLQsCDQki4pLlwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JTRltCw0LHQtdC70LvRli4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwgMinQmy7QqNGD0LrQsNC50LvQvi4gJyfQk9GD0LzQvtGA0LXRgdC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXlKUUJmZzdjX0JvUXFYTW1BWXFOWVFDbll0YXdaOVRvL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0YDQuNGI0YLQsNC70L7QstC40Ycg0JwuLCDQmtGA0LjRiNGC0LDQu9C+0LLQuNGHINCGLikgXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JTQti7Qk9C10YDRiNCy0ZbQvS4gJydDbGFwIHlvdSBoYW5kJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFNQUplQlZuZnRFZGhjaW80N25EblVnY2pHR1R3SzhDai9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0M1wiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtGA0LjRiNGC0LDQu9C+0LLQuNGHINCcLiwg0JrRgNC40YjRgtCw0LvQvtCy0LjRhyDQhi4pXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiJ9Ca0L7Qu9GP0LTQutCwJycsINC+0LHRgC4g0J4u0JfQsNC60LDQu9GO0LbQvdC+0ZdcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwcXhZWlR2Rnlycmo2ZFRwVDU4VVVQU09QSE0taFp0ZS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0NFwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQm9Cw0L3RgdGM0LrQuNC5INCELiwg0JvQsNC90YHRjNC60LAg0J4uKVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JUu0JPRgNGW0LMuINCQ0YDRltGPINGW0Lcg0YHRjtGX0YLQuCAnJ9CXINGH0LDRgdGW0LIg0KXQvtC70YzQsdC10YDQs9CwJycsIDIp0JIu0J/RgtGD0YjQutGW0L0uICcn0JHRgNC10L3RhNC+0YDQtNGB0YzQutCwINCy0ZbQtNGM0LzQsCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOE9Vc0NHUUJzM0lobFg2aXQtczNUeHVvMDdNM05zMEgvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDVcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KHQuNC80L7QvdC10L3QutC+INCiLiwg0KTQtdC00LjQvdCwINCQLilcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQlNC2LtCT0LXRgNGI0LLRltC9Licn0JrQvtGF0LDQvdC40Lkg0LzRltC5Jyc7IDIpINCfLtCc0L7RgNGW0LAuICcn0JzQsNC90YPQtdGCJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoVmVraDhfNU1PVUpEZ0p0WEk4aTRHQmRSUXdDQWVrdC9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0NlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQodC60L7Qv9C10YbRjCDQkC4sINCc0YPRgNC30LDQuiDQri4pLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi7QntGB0YLQtdC9Licn0KLQsNC90LXRhtGMINC70Y/Qu9GM0L7QuicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRUZ6eWlqdXdBRk5qOHYtVGxyYWlJX1BrdUhHcVg5NEUvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KHQutC+0L/QtdGG0Ywg0JAuINCc0YPRgNC30LDQuiDQri4pIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQltGD0LvRjNGU0LLQsC4nJ9Cf0YDQvtCz0YPQu9GP0L3QutCwINC3INGC0LDRgtC+0LwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZacjJWLUh2OE1JRjhLV2daR2ZKQXl1RUU3bWFxV29wL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQ4XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCi0YDQvtGG0LXQvdC60L4g0JAuLCDQr9C60YPQvdGW0L3QsCDQni7Qki4pXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QnC7QktC10LHQtdGALiDQodC+0L3QsNGC0LAg0LTQviDQvNCw0LbQvtGALCDQhiDRhy47IDIp0JAu0JrQvtC80LvRltC60L7QstCwLiAnJ9Ch0L/QvtCz0LDQtCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYVlOQjhqSDBKeTRTUDN1ZkFjZVEtbUoyOWxQcl9yVHcvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KTRltC70ZbQv9C+0LIg0IYuLCDQnNCw0YDRh9C10L3QutC+INCbLilcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4nJ9CW0LDRgNGCJycgMinQnC7Qm9C10L7QvdGC0L7QstC40YcuJyfQqdC10LTRgNC40LonJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXBoV1R5SUpiN0Z6cU5RRmVVcUU1eDFsWUZaNTlXdWd6L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRhXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCl0LXQu9C80LDQvSDQki4sINCl0LXQu9C80LDQvSDQki4pXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoy7Qk9GW0LvQu9C+0LouJyfQndCwINC/0LDRgNC40LfRjNC60L7QvNGDINCx0YPQu9GM0LLQsNGA0ZYnJywgMinQnS7QodC80ZbRgNC90L7QstCwLicn0JHRgNCw0LfQuNC70YzRgdGM0LrQuNC5INC60LDRgNC90LDQstCw0LsnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTdjMzJDSTBtX2tOSlhaa3JIa1hRZTUyVGRmSFdQbDZPL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRiXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgJydTZm9yemFuZG8nJy5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0J4u0KbQuNCz0LDQvdC60L7Qsi4gJyfQotGD0YHRgtC10L8nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVRa1oxMVVHVmxxaFIzc3JhZHBib1FwSzlFRXlhaXFvL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRjXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgJydTZm9yemFuZG8nJy5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JPRgNGW0LMuJyfQkiDQv9C10YfQtdGA0ZYg0LPRltGA0YHRjNC60L7Qs9C+INC60L7RgNC+0LvRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU1RMbnQ4SVU1bmxZLUcxZHFmYkt1UmExQl9aOFRTa1kvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGRcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JLQuNGF0YDQuNGB0YIg0JwuLCDQpNGU0LTQvtGB0ZTRlNCyINCdLilcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCf0YDQvtC60L7RhCfRlNCyLiDQnNCw0YDRiCwgMinQki7Qm9GO0YLQvtGB0LvQsNCy0YHRjNC60LjQuS4g0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGC0LXQvNGDINCf0LDQs9Cw0L3RltC90ZZcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuelJIWEpLdEFiZHg3UHdiQjVkNFhGR3hCTmN0cE5Fay9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0ZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQktGW0YLRjtC6INCSLCDQkdC10YDQtdC30L7QstGB0YzQutCwINCELilcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtCR0LDRhSAo0JLRltCy0LDQu9GM0LTRlikuINCa0L7QvdGG0LXRgNGCINC00LvRjyDQvtGA0LPQsNC90LAg0LvRjyDQvNGW0L3QvtGALCAyKdCQLtCfJ9GP0YbQvtC70LvQsC4gJyfQm9GW0LHQtdGA0YLQsNC90LPQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbmYwMUVmNk9WT3lMQUpVVWpCWXlJS05zM01aZV9QRnYvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGZcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JHQvtGA0L7QstC10YbRjCDQni4sINGW0LvRjtGB0YLRgNCw0YLQvtGAKVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLtCR0LDRhS4nJ9CQ0YDRltGPJycgKCcn0KHRgtGA0LDRgdGC0ZYg0LfQsCDQnNCw0YLQstGW0ZTQvCcnKVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUgxYWtRVWRSN1FLUk80UDNoRFk2X3RadG1kU3JrMEoxL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDUwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCR0L7RgNC+0LLQtdGG0Ywg0J4uLNGW0LvRjtGB0YLRgNCw0YLQvtGAKS4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0J7RgNGELicn0J4s0KTQvtGA0YLRg9C90L4nJyAoJyfQmtCw0YDQvNGW0L3QsCDQkdGD0YDQsNC90LAnJylcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5a09JQlRkSUtLUVo2blhWZ1BpWkgzWThteWNXcHdCeS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1MVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC70LjQvNC10L3QutC+INCcLiwg0JTRltC+0YDQtNGW0ZTQstCwINCcLilcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4gJyfQktC+0LrQsNC70ZbQtycnLCAyKdCULtCc0ZbQudC+Licn0JHRgNCw0LfQuNC70YzRlNGA0LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXU4MWRBQXRsRG9mcTRwbnlEdFlnLVN4R0I0akdCM3NFL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDUyXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0L7Qt9Cw0Log0IYuLCDQotCw0ZTRgC3Qo9C70YzRj9C90L7QstCwINCaLikuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIkEuICDQnyfRj9GG0YbQvtC70LAuICcn0JvRltCx0LXRgNGC0LDQvdCz0L4nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXk2WXFGdEJQR01sWHpFUUw4dXUzQkw0VWtyTXplNGpiL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDUzXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0L7Qt9Cw0Log0IYuINGC0LAg0KLQsNGU0YAt0KPQu9GM0Y/QvdC+0LLQsCDQmi4pLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JPRgNGW0LMuICcn0J3QvtGA0LLQtdC20YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVR0Zmk0bTdQMW91TkpFSERYaUpuYTdYM2JlUVB6cmZ1L3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU0XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0L7RgdGC0LXRh9C60L4g0JAuLCDQmtC+0L3QtNGA0LDRgtGO0Log0JwuICkuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCaLtCU0LXQsdGO0YHRgdGWLiAnJ9CjINGH0L7QstC90ZYnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWhSV3pDTFhJVVU2WHBEV1ozRWlzSTdRNU5aSHpEZGlvL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU1XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0L7RgdGC0LXRh9C60L4g0JAuLCDQmtC+0L3QtNGA0LDRgtGO0Log0JwuKS5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQri7QktC10YHQvdGP0LouICcn0JrQsNGA0LvRgdC+0L0nJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUEzMVZyUjVkNWRYVDhrUVd0TnlHa3hmeTdiS0k1TURVL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU2XCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCc0LDRhtGW0ZTQstGB0YzQsCDQnC4sINCf0LDQv9GW0ZTQstCwINCaLikuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JzQtdGC0L3QtdGALicn0KDQvtGB0ZbQudGB0YzQutC40Lkg0YXQvtGA0L7QstC+0LQnJywgMinQkC7QnyfRj9GG0YbQvtC70LAuJyfQktC10LvQuNC60LUg0YLQsNC90LPQvicnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNkFuZ3Nhc0d1QXNob0RaeWc5aWRsakI4eG9NRHY0dkMvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTdcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCa0LDRgdGP0L3QtdC90LrQviDQni7Qki4sINCT0L7RgNC00ZbRlNC90LrQviDQhi7Qni4pIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCQLtCR0LDQsdCw0LTQttCw0L3Rj9C9LiAnJ9Cd0L7QutGC0Y7RgNC9JycsIDIp0K4uINCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9CT0YPQvNC+0YDQuNGB0YLQuNGH0L3QuNC5INGC0LDQvdC10YbRjCcnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX1NYQUZRRHdfQm00WUstcWN5NlhzNGtGb1c0SDNEYUkvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NThcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAnJ9CV0LvQtdCz0ZbRjycnXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Jwu0KHQutC+0YDQuNC6LiAnJ9Cc0LXQu9C+0LTRltGPJycsIDIp0Jsu0JrQsNGA0L/QtdC90LrQvi4nJ9CS0ZbQvdC+0YfQvtC6INGD0LvRjtCx0LvQtdC90LjRhSDQvNC10LvQvtC00ZbQuScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xY2tadzBIc3NpeUVkYlNTSEJxT3lhd3FTZnRBazF3VWovcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTlcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JPRgNC40LPQvtGAJ9GU0LLQsCDQky7QkC4gLCDQr9C60YPQvdGW0L3QsCDQni7Qki4pXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNGD0LHQtdGA0YIuJyfQktGW0LnRgdGM0LrQvtCy0LjQuSDQvNCw0YDRiCcnIDIp0JAu0JrQvtC80LvRltC60L7QstCwLiAnJ9Cd0LAg0LzQsNGB0LrQsNGA0LDQtNGWJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFVQ2FKX3FZVWFweU0tSEJocnVXYi1oN0lGeVNxa19zVS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1YVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC+0YHQtdC90LrQviDQni7Qki4sINCa0LDRgdGD0LzQvtCy0LAg0J4u0JQuKS5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLiDQptGE0LDRgdC80LDQvS4gJyfQm9GW0YDQuNGH0L3QuNC5INCy0LDQu9GM0YEnJywgMinQnC7QnNGW0L3QutC+0LIuICcn0KHRgtCw0YDQuNC5INGA0L7Rj9C70YwnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpHT0t1bnhJb0hkM1VqNUZIdmRXeU4tcnZXRjduNlYtL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDViXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgICjQktCw0YHQtdC90LrQviDQoS4sINCS0LDRgdC10L3QutC+INCcLiwg0KXQsNCy0LDQu9C60L4g0KIuLNCR0LjRh9C60L7QsifRj9C6INCaLikuIFwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JLRltCy0LDQu9GM0LTRli4nJ9CX0LjQvNCwJyc7IDIp0KQu0JzQtdGA0Lon0Y7RgNCwLicn0JHQvtCz0LXQvNC90LAg0YDQsNC/0YHQvtC00ZbRjycnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQjk2bkVDM3ZLWVJkOE9nVFhnUGlWVlg4VkItTVNTZFkvcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWNcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQutCy0LDRgNGC0LXRgiAnJ0FMTEEgQlJFVkUnJy5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QodGC0YDQsNCy0ZbQvdGB0YzQutC40Lku0KTRgNCw0LPQvNC10L3RgiDRltC3INCx0LDQu9C10YLRgyAnJ9Cf0LXRgtGA0YPRiNC60LAnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJpZlc4T0J2MUU2MXFkMTg0RWFKanN2T3RyWHJScmtWL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDVkXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgJydBTExBIEJSRVZFJycuXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0JPRg9GA0LvRltGC0YIuJyfQktGW0LTQtdC90YHRjNC60LjQuSDQstCw0LvRjNGBJydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFRakJyS1dUa0NiaVM5RWo1azRwSGJIUkRzTjJEMWNhTS9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1ZVwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YwgJyfQldCa0KHQn9Cg0JXQodCG0K8nJy5cIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QndCw0YPQvNC10L3QutC+LiAxKScn0KfQsNGB0Lgg0LLQtdC70LjQutC40YUg0YHQv9C+0LTRltCy0LDQvdGMJycsIDIp0JAu0J8n0Y/RhtGG0L7Qu9CwLiAnJ9Cb0ZbQsdC10YDRgtCw0L3Qs9C+JydcIixcclxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpVWxZS3JJS3NKMWludUNxQU9TME1ZNExxR3JtY3Bfay9wcmV2aWV3XCIsXHJcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxyXG59LHtcclxuICAgIFwiaWRcIjoge1xyXG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1ZlwiXHJcbiAgICB9LFxyXG4gICAgXCJuYW1lXCI6IFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INC60LLQsNGA0YLQtdGCICjQqdGD0LrRltC90LAg0J4uLNCh0LXRgNC00Y7QuiDQky4sINCo0LDQv9C+0LLQsNC7INCeLiwg0JzQsNC60YHQuNC80LXQvdC60L4g0JIuKVwiLFxyXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLtCb0LDQstGW0L3RjNGP0LouJyfQk9Cw0LvQvtC/LdC80LDRgNGIJyc7IDIp0JMu0JPRg9GA0LvRltGCLiDQndC+0LrRgtGO0YDQvVwiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUlZYk5JQzJFeDZOeHhNOHltYkN0TDJtdVBBUTRSaE1nL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn0se1xyXG4gICAgXCJpZFwiOiB7XHJcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDYwXCJcclxuICAgIH0sXHJcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjCAoINCh0LzQuNC6INCbLtCuLizQqNC10LrQtdC70Ywg0J4u0J4uKS4gXCIsXHJcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JouINCT0YPQsNGB0YLQsNCy0ZbQvdC+LiAnJ9Cg0L7QvNCw0L3RgScnXCIsXHJcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZEhCem5EbXBFLTB2V3lyeU1mODZYQ2tGYjhzUF9IWV8vcHJldmlld1wiLFxyXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcclxufSx7XHJcbiAgICBcImlkXCI6IHtcclxuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NjFcIlxyXG4gICAgfSxcclxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQsNC90YHQsNC80LHQu9GMICjQodC80LjQuiDQmy7Qri4sINCo0LXQutC10LvRjCDQni7Qni4pLiBcIixcclxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QptGE0LDRgdC80LDQvS4nJ9Ch0L3RltC20LjQvdC60LgnJ1wiLFxyXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlQVGUtSl9jUzZEVFNPNmlaRml4Z2I1ZzRaeHBhelJUL3ByZXZpZXdcIixcclxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXHJcbn1dO1xyXG5cclxubXlDYXJkcyA9IG15Q2FyZHMuY29uY2F0KGVuc2VtYmxlKTtcclxuXHJcbi8qKiBDT0RFICoqL1xyXG5mdW5jdGlvbiBmaWxtUmVkdWNlcihzdGF0ZSA9IHtjYXJkQ291bnQ6IG15Q2FyZHMubGVuZ3RoLCBjYXJkczogbXlDYXJkcywgaXNEYXRhSW5QbGFjZTogdHJ1ZSwgZXJyb3I6IFwiXCJ9LCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdJTkZPX1BBR0UnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiAtMSxcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBbXSxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdBTEwnOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4g0KPRgdGWINCy0ZbQtNC10L5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbXlDYXJkcyxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG15Q2FyZHMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdncm91cC0xJzpcclxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDEpLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnZ3JvdXAtMic6XHJcbiAgICAgICAgICAgIGxldCBuZXdDYXJkczEgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQuZ3JvdXAgPT09IGdyb3VwMikuc2xpY2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkczEsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkczEubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2dyb3VwLTMnOlxyXG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMyID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDMpLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMyLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHMyLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnU0VBUkNIJzpcclxuICAgICAgICAgICAgbGV0IHEgPSBhY3Rpb24ucXVlcnkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYD4g0J/QvtGI0YPQujogJHtxfWApO1xyXG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMzID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FyZE5hbWUgPSBjYXJkLm5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIGxldCBib29sID0gKGNhcmROYW1lLnN0YXJ0c1dpdGgocSkgfHwgY2FyZE5hbWUuaW5jbHVkZXMocSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRlc3RpbmcgJHtjYXJkTmFtZX0gb24gcXVlcnkgJHtxfSwgcmVzdWx0IGlzICR7Ym9vbH1gKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2w7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMzLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHMzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdFUlJPUic6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGA+INCf0L7QvNC40LvQutCwYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLm1zZyxcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogMSxcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBbXSxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZHM6IG15Q2FyZHMsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBteUNhcmRzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNhcmRTdG9yZSA9IGNyZWF0ZVN0b3JlKGZpbG1SZWR1Y2VyKTtcclxuXHJcbmNhcmRTdG9yZS5zdWJzY3JpYmUoKCkgPT5cclxuICAgIGNvbnNvbGUubG9nKFwiRmlsbXNTdG9yZSBzdGF0ZSB3YXMgY2hhbmdlZCwgbnVtYmVyIG9mIGNhcmRzOiBcIiArIGNhcmRTdG9yZS5nZXRTdGF0ZSgpLmNhcmRDb3VudClcclxuKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9