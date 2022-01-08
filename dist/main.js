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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "1163023-1cd932611f091113c2fe5ddd898f560e.png";module.exports={src:src,width:3840,height:2160,format:"jpeg",toString:function(){return src;}};

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
/* harmony import */ var _1163023_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_1163023_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-page-imgs/Закопець-1.png */ "./src/components/info-page-imgs/Закопець-1.png");
/* harmony import */ var _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-page-imgs/Кузнєцова-1.png */ "./src/components/info-page-imgs/Кузнєцова-1.png");
/* harmony import */ var _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-page-imgs/Іванова Л.І.png */ "./src/components/info-page-imgs/Іванова Л.І.png");
/* harmony import */ var _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_info_page_imgs_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info-page-imgs/Райт І.С.png */ "./src/components/info-page-imgs/Райт І.С.png");
/* harmony import */ var _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_info_page_imgs_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info-page-imgs/Остапчук М. М.png */ "./src/components/info-page-imgs/Остапчук М. М.png");
/* harmony import */ var _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_info_page_imgs_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./info-page-imgs/Марцева-1.png */ "./src/components/info-page-imgs/Марцева-1.png");
/* harmony import */ var _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./info-page-imgs/Заходякін-1.png */ "./src/components/info-page-imgs/Заходякін-1.png");
/* harmony import */ var _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./info-page-imgs/Вишневська-1.png */ "./src/components/info-page-imgs/Вишневська-1.png");
/* harmony import */ var _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_11__);












const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  background-image: url("${_1163023_png__WEBPACK_IMPORTED_MODULE_3___default.a}");
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
      justify-content: flex-start;
    `;
  const TextSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
      color: white;
      margin-top: 10px;
      margin-bottom: 80px;
      margin-left: 80px;
      margin-right: 80px;
      font-family: "Segoe UI", serif;
      font-weight: 1000;
      text-align: center;
      font-size: 20px;
    `;
  const Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
      margin-top: 20px;
      margin-right: 30%;
      margin-left: 30%;
      border: solid white 2px;
    `;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Image, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["GiPodiumWinner"], null), " \u041B\u0410\u0423\u0420\u0415\u0410\u0422\u0418 \xAB\u0412\u0421\u0415\u0423\u041A\u0420\u0410\u0407\u041D\u0421\u042C\u041A\u041E\u0413\u041E \u041A\u041E\u041D\u041A\u0423\u0420\u0421\u0423 \u041F\u0406\u0410\u041D\u0406\u0421\u0422\u0406\u0412. \u0420\u0406\u0412\u041D\u0415-2021\xBB  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["GiPodiumWinner"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://drive.google.com/file/d/1ka7GuVc0mhHzR5jq1qhTCHnlNa0HcXmB/view?usp=sharing"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://drive.google.com/file/d/1qdyL0mXafowI888sPJLyM7yuhYJNR70b/view?usp=sharing"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), "\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043A\u043E\u043C\u0456\u0442\u0435\u0442 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0443 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://drive.google.com/file/d/16sz0uu564Bl7l9Y-bqMO_-gLPqTuDBYC/view?usp=sharing"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), "\u0410\u0444\u0456\u0448\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, null, "\u0421\u043A\u043B\u0430\u0434 \u0436\u0443\u0440\u0456:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PersonInfoSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    text: `Кузнєцова О.О.- голова журі, доктор філософії, кандидат педагогічних наук, професор кафедри  
                    музично- інструментального виконавства Харківського Національного педагогічного університету імені 
                    Г.Сковороди, заслужений діяч мистецтв України,  "Відмінник освіти України", відзначена орденом 
                    Міністерства культури  України "За досягнення в розвитку  культури  і мистецтв ", секретар 
                    Національної всеукраїнської музичної спілки, голова Асоціації піаністів  Національної  всеукраїнської 
                    музичної спілки,  президент Асоціації піаністів-педагогів України("EPTA" Ukraine), Віце- президент  
                    Асоціації піаністів-педагогів Європи "EPTA" London)`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    text: "\u0417\u0430\u043A\u043E\u043F\u0435\u0446\u044C \u041B.\u0421.- \u0433\u043E\u043B\u043E\u0432\u0430 \u0436\u0443\u0440\u0456, \u0437\u0430\u0441\u043B\u0443\u0436\u0435\u043D\u0438\u0439  \u0434\u0456\u044F\u0447 \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0438, \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447-\u043C\u0435\u0442\u043E\u0434\u0438\u0441\u0442 \u041B\u044C\u0432\u0456\u0432\u0441\u044C\u043A\u043E\u0433\u043E \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u043E\u0433\u043E \u043C\u0443\u0437\u0438\u0447\u043D\u043E\u0433\u043E \u043B\u0456\u0446\u0435\u044E \u0456\u043C\u0435\u043D\u0456 \u0421. \u041A\u0440\u0443\u0448\u0435\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u043E\u0457, \u043F\u043E\u0447\u0435\u0441\u043D\u0438\u0439 \u0430\u043C\u0431\u0430\u0441\u0430\u0434\u043E\u0440 \u043C\u0443\u0437\u0438\u0447\u043D\u043E\u0457  \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0438  \u041F\u043E\u043B\u044C\u0449\u0456"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    text: "\u0420\u0430\u0439\u0442 \u0406.\u0421., \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442 \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0456\u0447\u043D\u0438\u0445 \u043D\u0430\u0443\u043A,  \u043D\u0430\u0443\u043A\u043E\u0432\u0438\u0439 \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0456\u0457 \u0435\u0441\u0442\u0435\u0442\u0438\u0447\u043D\u043E\u0433\u043E \u0432\u0438\u0445\u043E\u0432\u0430\u043D\u043D\u044F \u0442\u0430 \u043C\u0438\u0441\u0442\u0435\u0446\u044C\u043A\u043E\u0457  \u043E\u0441\u0432\u0456\u0442\u0438  \u0406\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0443  \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0432\u0438\u0445\u043E\u0432\u0430\u043D\u043D\u044F  \u041D\u0430\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0457  \u0430\u043A\u0430\u0434\u0435\u043C\u0456\u0457  \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0456\u0447\u043D\u0438\u0445  \u043D\u0430\u0443\u043A \u0423\u043A\u0440\u0430\u0457\u043D\u0438"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    text: "\u041E\u0441\u0442\u0430\u043F\u0447\u0443\u043A \u041C. \u041C., \u0434\u043E\u0446\u0435\u043D\u0442 \u043A\u0430\u0444\u0435\u0434\u0440\u0438  \u0433\u0440\u0438 \u043D\u0430  \u043C\u0443\u0437\u0438\u0447\u043D\u0438\u0445 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0445 \u0406\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0443  \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432  \u0420\u0414\u0413\u0423"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    text: "\u0417\u0430\u0445\u043E\u0434\u044F\u043A\u0456\u043D \u041E.\u0412., \u0434\u043E\u0446\u0435\u043D\u0442 \u043A\u0430\u0444\u0435\u0434\u0440\u0438 \u0435\u0441\u0442\u0440\u0430\u0434\u043D\u043E\u0457 \u043C\u0443\u0437\u0438\u043A\u0438 \u0406\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0443  \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432  \u0420\u0414\u0413\u0423"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    text: "\u0412\u0438\u0448\u043D\u0435\u0432\u0441\u044C\u043A\u0430 \u0406.\u041F., \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447 \u0432\u0438\u0449\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457, \u0433\u043E\u043B\u043E\u0432\u0430 \u0446\u0438\u043A\u043B\u043E\u0432\u043E\u0457 \u043A\u043E\u043C\u0456\u0441\u0456\u0457 \"\u0424\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043E\" \u0420\u0456\u0432\u043D\u0435\u043D\u0441\u044C\u043A\u043E\u0433\u043E \u043C\u0443\u0437\u0438\u0447\u043D\u043E\u0433\u043E \u0444\u0430\u0445\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043B\u0435\u0434\u0436\u0443 \u0420\u0414\u0413\u0423"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    text: `Іванова Л.І., викладач першої категорії КЗ "Луцька музична  школа 3"`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
    imgUrl: _info_page_imgs_1_png__WEBPACK_IMPORTED_MODULE_9___default.a,
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
/* harmony import */ var _1163023_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_1163023_png__WEBPACK_IMPORTED_MODULE_7__);








const CommonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  background-image: url("${_1163023_png__WEBPACK_IMPORTED_MODULE_7___default.a}");
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
  const sectionsForFilter = [`Рівненські фортепіанні студії`, `Номінація "Фортепіано соло"`, `Номінація "Фортепіанний ансамбль"`, `Номінація "Концертмейстер"`, `Усі відео`, `Про конкурс`];
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
        msg: "Будь ласка введіть більше 3 символів і не використовуйте пробіл"
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "Іванова Л.І-6fdd7ebe26b18cf9dda2c884aa661a8e.png";module.exports={src:src,width:261,height:431,format:"jpeg",toString:function(){return src;}};

/***/ }),

/***/ "./src/components/info-page-imgs/Вишневська-1.png":
/*!********************************************************!*\
  !*** ./src/components/info-page-imgs/Вишневська-1.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "Вишневська-1-53a97b46741c14e5bd03f4c4eeefdb22.png";module.exports={src:src,width:500,height:500,format:"png",toString:function(){return src;}};

/***/ }),

/***/ "./src/components/info-page-imgs/Закопець-1.png":
/*!******************************************************!*\
  !*** ./src/components/info-page-imgs/Закопець-1.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "Закопець-1-5a38680ccd62c6c6c13000e1d20027d0.png";module.exports={src:src,width:282,height:500,format:"png",toString:function(){return src;}};

/***/ }),

/***/ "./src/components/info-page-imgs/Заходякін-1.png":
/*!*******************************************************!*\
  !*** ./src/components/info-page-imgs/Заходякін-1.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "Заходякін-1-66117d10a66f63bcbd1aad7095e18bf9.png";module.exports={src:src,width:304,height:500,format:"png",toString:function(){return src;}};

/***/ }),

/***/ "./src/components/info-page-imgs/Кузнєцова-1.png":
/*!*******************************************************!*\
  !*** ./src/components/info-page-imgs/Кузнєцова-1.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "Кузнєцова-1-ddacf7a2e6363e514f5637f4bb32ecad.png";module.exports={src:src,width:369,height:500,format:"png",toString:function(){return src;}};

/***/ }),

/***/ "./src/components/info-page-imgs/Марцева-1.png":
/*!*****************************************************!*\
  !*** ./src/components/info-page-imgs/Марцева-1.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "Марцева-1-d5fe5ea8cb83c16485f97f84a993a6d3.png";module.exports={src:src,width:281,height:500,format:"png",toString:function(){return src;}};

/***/ }),

/***/ "./src/components/info-page-imgs/Остапчук М. М.png":
/*!*********************************************************!*\
  !*** ./src/components/info-page-imgs/Остапчук М. М.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "Остапчук М. М-b210533c6831ec63891766407ca2017a.png";module.exports={src:src,width:433,height:577,format:"png",toString:function(){return src;}};

/***/ }),

/***/ "./src/components/info-page-imgs/Райт І.С.png":
/*!****************************************************!*\
  !*** ./src/components/info-page-imgs/Райт І.С.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "Райт І.С-b2192ddc3ccd88dffe9555de2501f188.png";module.exports={src:src,width:501,height:498,format:"png",toString:function(){return src;}};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzExNjMwMjMucG5nIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZm9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVndWxhckhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzdWx0c0ZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0IbQstCw0L3QvtCy0LAg0Jsu0IYucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CS0LjRiNC90LXQstGB0YzQutCwLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0JfQsNGF0L7QtNGP0LrRltC9LTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9Ca0YPQt9C90ZTRhtC+0LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QnNCw0YDRhtC10LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QntGB0YLQsNC/0YfRg9C6INCcLiDQnC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0KDQsNC50YIg0IYu0KEucG5nIiwid2VicGFjazovLy8uL3NyYy9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9DYXJkU3RvcmUuanN4Il0sIm5hbWVzIjpbIkFwcCIsImNhcmRTdG9yZSIsIkZpbG1XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiRmlsbUluZm8iLCJJZnJhbWVCb3giLCJpZnJhbWUiLCJwcm9wcyIsIndpZHRoIiwiQnV0dG9uIiwiYnV0dG9uIiwiQ2FyZCIsImhlaWdodCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJjYWxjdWxhdGVkV2lkdGgiLCJzZXRDYWxjdWxhdGVkV2lkdGgiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm5hbWUiLCJjb21wb3NpdGlvbiIsInZpZGVvVXJsIiwic2hvd0lmcmFtZSIsInNldFNob3dJZnJhbWUiLCJvcGVuVmlkZW9CdXR0b25OYW1lIiwic2V0T3BlblZpZGVvQnV0dG9uTmFtZSIsIm9wZW5WaWRlb0hhbmRsZXIiLCJXcmFwcGVyIiwibG9nbyIsIlBlcnNvbkluZm9TZWN0aW9uIiwiUGVyc29uIiwiQ29udGFpbmVyIiwiVGV4dFNlY3Rpb24iLCJJbWFnZSIsImltZyIsImltZ1VybCIsInRleHQiLCJEaXYiLCJEaXYxIiwiQSIsImEiLCJBMSIsIlAiLCJJbmZvUGFnZSIsInBlcnNvbjIiLCJwZXJzb24xIiwicGVyc29uNCIsInBlcnNvbjUiLCJwZXJzb243IiwicGVyc29uOCIsInBlcnNvbjMiLCJwZXJzb242IiwiQ29tbW9uV3JhcHBlciIsIk1haW5TZWN0aW9uRmxleCIsIk1haW5TZWN0aW9uIiwiY2FyZHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiaXNEYXRhSW5QbGFjZSIsImNhcmRDb3VudCIsInNlY3Rpb25zRm9yRmlsdGVyIiwibWFwIiwiY2FyZCIsImlkIiwiJG9pZCIsIklucHV0IiwiaW5wdXQiLCJpbnB1dENvbG9yIiwiSW5wdXRTdHlsZSIsIklucHV0V3JhcGVyIiwiU3R5bGVkU3BhbiIsInNwYW4iLCJFcnJvciIsIldhcm4iLCJSZWd1bGFySGVhZGVyIiwic2VhcmNoRmllbGQiLCJ1c2VSZWYiLCJlcnJvciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJoYW5kbGVyIiwic3RyIiwiU3RyaW5nIiwiY3VycmVudCIsInZhbHVlIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJ0eXBlIiwibXNnIiwicXVlcnkiLCJoYW5kbGVLZXlQcmVzcyIsImV2ZW50Iiwia2V5IiwiRmlsdGVyQ29udGFpbmVyIiwiRmlsdGVyU2VjdGlvbiIsIkRpdlRoaW5MaW5lIiwiU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXIiLCJncm93XzAiLCJrZXlmcmFtZXMiLCJsZWZ0IiwiZ3Jvd18xIiwiVGhpbkxpbmVJbm5lckRpdiIsImFuaW1hdGlvbiIsIlJlc3VsdHNGaWx0ZXIiLCJzZWN0aW9ucyIsInJlZExpbmVXaWR0aCIsInNldFJlZExpbmVXaWR0aCIsInJlZExpbmVMZWZ0Iiwic2V0UmVkTGluZUxlZnQiLCJzZXRBbmltYXRpb24iLCJtYXJrZWRTZWN0aW9uUmVmIiwicmVSZW5kZXJSZWRMaW4iLCJ0YXJnZXQiLCJjdXJyZW50U2VjdGlvbldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY3VycmVudFNlY3Rpb25MZWZ0IiwiY291bnRlciIsIm9uRmlsdGVyU2VjdGlvbkNsaWNrIiwic2VsZWN0ZWRTZWN0aW9uIiwic2VsZWN0ZWRTZWN0aW9uU3RyaW5nIiwic2VjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJJbmZvUGFnZSIsInJlbmRlcmVkU2VjdGlvbnMiLCJlIiwiZ2V0V2luZG93RGltZW5zaW9ucyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIndpbmRvdyIsIndpbmRvd0RpbWVuc2lvbnMiLCJzZXRXaW5kb3dEaW1lbnNpb25zIiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJncm91cDEiLCJncm91cDIiLCJncm91cDMiLCJteUNhcmRzIiwiY29uY2VydG1hc3RlcnMiLCJjb25jYXQiLCJlbnNlbWJsZSIsImZpbG1SZWR1Y2VyIiwiYWN0aW9uIiwibmV3Q2FyZHMiLCJmaWx0ZXIiLCJncm91cCIsInNsaWNlIiwibmV3Q2FyZHMxIiwibmV3Q2FyZHMyIiwicSIsInRvTG93ZXJDYXNlIiwibmV3Q2FyZHMzIiwiY2FyZE5hbWUiLCJib29sIiwic3RhcnRzV2l0aCIsImNyZWF0ZVN0b3JlIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Es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QWxCLENBQXRDO0FBQ0FqQyxlQUFPLENBQUNDLEdBQVIsQ0FBYSxXQUFVbUMsUUFBUyxhQUFZSCxDQUFFLGVBQWNJLElBQUssRUFBakU7QUFDQSxlQUFPQSxJQUFQO0FBQ0gsT0FMZSxDQUFoQjtBQU1BLGFBQU8sRUFDSCxHQUFHckcsS0FEQTtBQUVIRixhQUFLLEVBQUVxRyxTQUZKO0FBR0hsRyxxQkFBYSxFQUFFLElBSFo7QUFJSEMsaUJBQVMsRUFBRWlHLFNBQVMsQ0FBQ3ZFLE1BSmxCO0FBS0hSLGFBQUssRUFBRTtBQUxKLE9BQVA7O0FBT0osU0FBSyxPQUFMO0FBQ0k0QyxhQUFPLENBQUNDLEdBQVIsQ0FBYSxXQUFiO0FBQ0EsYUFBTztBQUNIN0MsYUFBSyxFQUFFc0UsTUFBTSxDQUFDM0QsR0FEWDtBQUVIN0IsaUJBQVMsRUFBRSxDQUZSO0FBR0hKLGFBQUssRUFBRSxFQUhKO0FBSUhHLHFCQUFhLEVBQUU7QUFKWixPQUFQOztBQU1KO0FBQ0ksYUFBTztBQUNISCxhQUFLLEVBQUV1RixPQURKO0FBRUhwRixxQkFBYSxFQUFFLElBRlo7QUFHSEMsaUJBQVMsRUFBRW1GLE9BQU8sQ0FBQ3pELE1BSGhCO0FBSUhSLGFBQUssRUFBRTtBQUpKLE9BQVA7QUFqRVI7QUF3RUg7O0FBRU0sTUFBTTVFLFNBQVMsR0FBRytKLHlEQUFXLENBQUNkLFdBQUQsQ0FBN0I7QUFFUGpKLFNBQVMsQ0FBQ2dLLFNBQVYsQ0FBb0IsTUFDaEJ4QyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvREFBb0R6SCxTQUFTLENBQUNpSyxRQUFWLEdBQXFCdkcsU0FBckYsQ0FESixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzeFwiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIHNyYyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxMTYzMDIzLTFjZDkzMjYxMWYwOTExMTNjMmZlNWRkZDg5OGY1NjBlLnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjM4NDAsaGVpZ2h0OjIxNjAsZm9ybWF0OlwianBlZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtNYWluU2VjdGlvbn0gZnJvbSAnLi9jb21wb25lbnRzL01haW5TZWN0aW9uJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtjYXJkU3RvcmV9IGZyb20gXCIuL3N0b3JlL0NhcmRTdG9yZVwiO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17Y2FyZFN0b3JlfT5cbiAgICAgICAgICAgICAgICA8TWFpblNlY3Rpb24vPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7QWlGaWxsUGxheVNxdWFyZSwgQnNGaWxsUGVyc29uRmlsbCwgRmFCb29rT3Blbn0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcblxuY29uc3QgRmlsbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgRmlsbUluZm8gPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5cbmNvbnN0IElmcmFtZUJveCA9IHN0eWxlZC5pZnJhbWVgXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcbiAgaGVpZ2h0OiA0ODBweDtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogZGFya3JlZDtcbiAgfWA7XG5cbmV4cG9ydCBjb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG4gICAgY29uc3QgW2NhbGN1bGF0ZWRXaWR0aCwgc2V0Q2FsY3VsYXRlZFdpZHRoXSA9IHVzZVN0YXRlKDY0MCk7XG5cbiAgICAvL2hhbmRsaW5nIHJlc2l6ZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh3aWR0aCA8IDEwMDApIHNldENhbGN1bGF0ZWRXaWR0aCh3aWR0aCAtIDUwKTtcbiAgICAgICAgZWxzZSBzZXRDYWxjdWxhdGVkV2lkdGgoNjQwKTtcbiAgICB9LCBbd2lkdGhdKTtcblxuICAgIGNvbnN0IFtuYW1lLF0gPSB1c2VTdGF0ZShwcm9wcy5uYW1lKTtcbiAgICBjb25zdCBbY29tcG9zaXRpb24sXSA9IHVzZVN0YXRlKHByb3BzLmNvbXBvc2l0aW9uKTtcbiAgICBjb25zdCBbdmlkZW9VcmwsXSA9IHVzZVN0YXRlKHByb3BzLnZpZGVvVXJsKTtcbiAgICBjb25zdCBbc2hvd0lmcmFtZSwgc2V0U2hvd0lmcmFtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW29wZW5WaWRlb0J1dHRvbk5hbWUsIHNldE9wZW5WaWRlb0J1dHRvbk5hbWVdID0gdXNlU3RhdGUoXCLQktGW0LTQutGA0LjRgtC4INCy0ZbQtNC10L5cIik7XG5cbiAgICBjb25zdCBvcGVuVmlkZW9IYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBzZXRTaG93SWZyYW1lKCFzaG93SWZyYW1lKTtcbiAgICAgICAgaWYgKHNob3dJZnJhbWUpIHtcbiAgICAgICAgICAgIHNldE9wZW5WaWRlb0J1dHRvbk5hbWUoXCLQktGW0LTQutGA0LjRgtC4INCy0ZbQtNC10L5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRPcGVuVmlkZW9CdXR0b25OYW1lKFwi0JfQsNC60YDQuNGC0Lgg0LLRltC00LXQvlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGaWxtV3JhcHBlcj5cbiAgICAgICAgICAgIDxGaWxtSW5mbz5cbiAgICAgICAgICAgICAgICA8c3Bhbj48QnNGaWxsUGVyc29uRmlsbC8+IDxiPntuYW1lfTwvYj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj48RmFCb29rT3Blbi8+IHtjb21wb3NpdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29wZW5WaWRlb0hhbmRsZXJ9IHZhbHVlPXtvcGVuVmlkZW9CdXR0b25OYW1lfT48QWlGaWxsUGxheVNxdWFyZS8+PC9CdXR0b24+PHNwYW4+e29wZW5WaWRlb0J1dHRvbk5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAge3Nob3dJZnJhbWUgPyA8SWZyYW1lQm94IHNyYz17dmlkZW9Vcmx9IHdpZHRoPXtjYWxjdWxhdGVkV2lkdGh9Lz4gOiBudWxsfVxuICAgICAgICAgICAgPC9GaWxtSW5mbz5cbiAgICAgICAgPC9GaWxtV3JhcHBlcj5cbiAgICApO1xufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QmlMaW5rRXh0ZXJuYWwsIEdpUG9kaXVtV2lubmVyfSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vMTE2MzAyMy5wbmdcIjtcbmltcG9ydCBwZXJzb24xIGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmdcIjtcbmltcG9ydCBwZXJzb24yIGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9Ca0YPQt9C90ZTRhtC+0LLQsC0xLnBuZ1wiO1xuaW1wb3J0IHBlcnNvbjMgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0IbQstCw0L3QvtCy0LAg0Jsu0IYucG5nXCI7XG5pbXBvcnQgcGVyc29uNCBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/QoNCw0LnRgiDQhi7QoS5wbmdcIjtcbmltcG9ydCBwZXJzb241IGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9Ce0YHRgtCw0L/Rh9GD0Log0JwuINCcLnBuZ1wiO1xuaW1wb3J0IHBlcnNvbjYgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0JzQsNGA0YbQtdCy0LAtMS5wbmdcIjtcbmltcG9ydCBwZXJzb243IGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9CX0LDRhdC+0LTRj9C60ZbQvS0xLnBuZ1wiO1xuaW1wb3J0IHBlcnNvbjggZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0JLQuNGI0L3QtdCy0YHRjNC60LAtMS5wbmdcIjtcblxuXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke2xvZ299XCIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFBlcnNvbkluZm9TZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cblxuY29uc3QgUGVyc29uID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYDtcblxuICAgIGNvbnN0IFRleHRTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG4gICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGA7XG5cbiAgICBjb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzMCU7XG4gICAgICBtYXJnaW4tbGVmdDogMzAlO1xuICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XG4gICAgYDtcblxuXG4gICAgcmV0dXJuICg8PjxJbWFnZSBzcmM9e3Byb3BzLmltZ1VybH0vPjxUZXh0U2VjdGlvbj57cHJvcHMudGV4dH08L1RleHRTZWN0aW9uPjwvPik7XG5cbn1cblxuY29uc3QgRGl2ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gO1xuXG5jb25zdCBEaXYxID0gc3R5bGVkKERpdilgXG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5gO1xuXG5jb25zdCBBID0gc3R5bGVkLmFgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuXG4gIDpob3ZlciB7XG4gICAgY29sb3I6IGRhcmtyZWQ7XG4gIH1cbmA7XG5cbmNvbnN0IEExID0gc3R5bGVkKEEpYFxuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMzBweDtcbmA7XG5cbmNvbnN0IFAgPSBzdHlsZWQuZGl2YFxuICBsZWZ0OiA0MDBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBJbmZvUGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKDxXcmFwcGVyPjxEaXYxPlxuICAgICAgICA8QTEgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWF1b0o4cldzRm9wUndiTldyRXBoX0RGNkJhb2ZNWmFoL3ZpZXc/dXNwPXNoYXJpbmdcIj5cbiAgICAgICAgICAgIDxHaVBvZGl1bVdpbm5lci8+INCb0JDQo9Cg0JXQkNCi0JggwqvQktCh0JXQo9Ca0KDQkNCH0J3QodCs0JrQntCT0J4g0JrQntCd0JrQo9Cg0KHQoyDQn9CG0JDQndCG0KHQotCG0JIuINCg0IbQktCd0JUtMjAyMcK7ICA8R2lQb2RpdW1XaW5uZXIvPjwvQTE+XG4gICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrYTdHdVZjMG1oSHpSNWpxMXFoVENIbmxOYTBIY1htQi92aWV3P3VzcD1zaGFyaW5nXCI+IDxCaUxpbmtFeHRlcm5hbC8+0J/QvtC70L7QttC10L3QvdGPPC9BPlxuICAgICAgICA8QSBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcWR5TDBtWGFmb3dJODg4c1BKTHlNN3l1aFlKTlI3MGIvdmlldz91c3A9c2hhcmluZ1wiPiA8QmlMaW5rRXh0ZXJuYWwvPlxuICAgICAgICAgICAg0J7RgNCz0LDQvdGW0LfQsNGG0ZbQudC90LjQuSDQutC+0LzRltGC0LXRgiDQutC+0L3QutGD0YDRgdGDIDwvQT5cbiAgICAgICAgPEEgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZzejB1dTU2NEJsN2w5WS1icU1PXy1nTFBxVHVEQllDL3ZpZXc/dXNwPXNoYXJpbmdcIj4gPEJpTGlua0V4dGVybmFsLz7QkNGE0ZbRiNCwPC9BPlxuICAgIDwvRGl2MT5cbiAgICAgICAgPFA+0KHQutC70LDQtCDQttGD0YDRljo8L1A+XG4gICAgICAgIDxQZXJzb25JbmZvU2VjdGlvbj5cbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb24yfVxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtg0JrRg9C30L3RlNGG0L7QstCwINCeLtCeLi0g0LPQvtC70L7QstCwINC20YPRgNGWLCDQtNC+0LrRgtC+0YAg0YTRltC70L7RgdC+0YTRltGXLCDQutCw0L3QtNC40LTQsNGCINC/0LXQtNCw0LPQvtCz0ZbRh9C90LjRhSDQvdCw0YPQuiwg0L/RgNC+0YTQtdGB0L7RgCDQutCw0YTQtdC00YDQuCAgXG4gICAgICAgICAgICAgICAgICAgINC80YPQt9C40YfQvdC+LSDRltC90YHRgtGA0YPQvNC10L3RgtCw0LvRjNC90L7Qs9C+INCy0LjQutC+0L3QsNCy0YHRgtCy0LAg0KXQsNGA0LrRltCy0YHRjNC60L7Qs9C+INCd0LDRhtGW0L7QvdCw0LvRjNC90L7Qs9C+INC/0LXQtNCw0LPQvtCz0ZbRh9C90L7Qs9C+INGD0L3RltCy0LXRgNGB0LjRgtC10YLRgyDRltC80LXQvdGWIFxuICAgICAgICAgICAgICAgICAgICDQky7QodC60L7QstC+0YDQvtC00LgsINC30LDRgdC70YPQttC10L3QuNC5INC00ZbRj9GHINC80LjRgdGC0LXRhtGC0LIg0KPQutGA0LDRl9C90LgsICBcItCS0ZbQtNC80ZbQvdC90LjQuiDQvtGB0LLRltGC0Lgg0KPQutGA0LDRl9C90LhcIiwg0LLRltC00LfQvdCw0YfQtdC90LAg0L7RgNC00LXQvdC+0LwgXG4gICAgICAgICAgICAgICAgICAgINCc0ZbQvdGW0YHRgtC10YDRgdGC0LLQsCDQutGD0LvRjNGC0YPRgNC4ICDQo9C60YDQsNGX0L3QuCBcItCX0LAg0LTQvtGB0Y/Qs9C90LXQvdC90Y8g0LIg0YDQvtC30LLQuNGC0LrRgyAg0LrRg9C70YzRgtGD0YDQuCAg0ZYg0LzQuNGB0YLQtdGG0YLQsiBcIiwg0YHQtdC60YDQtdGC0LDRgCBcbiAgICAgICAgICAgICAgICAgICAg0J3QsNGG0ZbQvtC90LDQu9GM0L3QvtGXINCy0YHQtdGD0LrRgNCw0ZfQvdGB0YzQutC+0Zcg0LzRg9C30LjRh9C90L7RlyDRgdC/0ZbQu9C60LgsINCz0L7Qu9C+0LLQsCDQkNGB0L7RhtGW0LDRhtGW0Zcg0L/RltCw0L3RltGB0YLRltCyICDQndCw0YbRltC+0L3QsNC70YzQvdC+0ZcgINCy0YHQtdGD0LrRgNCw0ZfQvdGB0YzQutC+0ZcgXG4gICAgICAgICAgICAgICAgICAgINC80YPQt9C40YfQvdC+0Zcg0YHQv9GW0LvQutC4LCAg0L/RgNC10LfQuNC00LXQvdGCINCQ0YHQvtGG0ZbQsNGG0ZbRlyDQv9GW0LDQvdGW0YHRgtGW0LIt0L/QtdC00LDQs9C+0LPRltCyINCj0LrRgNCw0ZfQvdC4KFwiRVBUQVwiIFVrcmFpbmUpLCDQktGW0YbQtS0g0L/RgNC10LfQuNC00LXQvdGCICBcbiAgICAgICAgICAgICAgICAgICAg0JDRgdC+0YbRltCw0YbRltGXINC/0ZbQsNC90ZbRgdGC0ZbQsi3Qv9C10LTQsNCz0L7Qs9GW0LIg0ITQstGA0L7Qv9C4IFwiRVBUQVwiIExvbmRvbilgfS8+XG5cbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb24xfVxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwi0JfQsNC60L7Qv9C10YbRjCDQmy7QoS4tINCz0L7Qu9C+0LLQsCDQttGD0YDRliwg0LfQsNGB0LvRg9C20LXQvdC40LkgINC00ZbRj9GHINC80LjRgdGC0LXRhtGC0LIg0KPQutGA0LDRl9C90LgsINCy0LjQutC70LDQtNCw0Yct0LzQtdGC0L7QtNC40YHRgiDQm9GM0LLRltCy0YHRjNC60L7Qs9C+XG4gICAgICAgICAgICAgICAgICAgINC00LXRgNC20LDQstC90L7Qs9C+INC80YPQt9C40YfQvdC+0LPQviDQu9GW0YbQtdGOINGW0LzQtdC90ZYg0KEuINCa0YDRg9GI0LXQu9GM0L3QuNGG0YzQutC+0ZcsINC/0L7Rh9C10YHQvdC40Lkg0LDQvNCx0LDRgdCw0LTQvtGAINC80YPQt9C40YfQvdC+0ZcgINC60YPQu9GM0YLRg9GA0LggINCf0L7Qu9GM0YnRllwiLz5cblxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjR9XG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCLQoNCw0LnRgiDQhi7QoS4sINC60LDQvdC00LjQtNCw0YIg0L/QtdC00LDQs9C+0LPRltGH0L3QuNGFINC90LDRg9C6LCAg0L3QsNGD0LrQvtCy0LjQuSDRgdC/0ZbQstGA0L7QsdGW0YLQvdC40Log0LvQsNCx0L7RgNCw0YLQvtGA0ZbRlyDQtdGB0YLQtdGC0LjRh9C90L7Qs9C+INCy0LjRhdC+0LLQsNC90L3Rj1xuICAgICAgICAgICAgICAgICAgICDRgtCwINC80LjRgdGC0LXRhtGM0LrQvtGXICDQvtGB0LLRltGC0LggINCG0L3RgdGC0LjRgtGD0YLRgyAg0L/RgNC+0LHQu9C10Lwg0LLQuNGF0L7QstCw0L3QvdGPICDQndCw0YbRltC+0L3QsNC70YzQvdC+0ZcgINCw0LrQsNC00LXQvNGW0ZcgINC/0LXQtNCw0LPQvtCz0ZbRh9C90LjRhSAg0L3QsNGD0Log0KPQutGA0LDRl9C90LhcIi8+XG5cbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb241fVxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwi0J7RgdGC0LDQv9GH0YPQuiDQnC4g0JwuLCDQtNC+0YbQtdC90YIg0LrQsNGE0LXQtNGA0LggINCz0YDQuCDQvdCwICDQvNGD0LfQuNGH0L3QuNGFINGW0L3RgdGC0YDRg9C80LXQvdGC0LDRhSDQhtC90YHRgtC40YLRg9GC0YMgINC80LjRgdGC0LXRhtGC0LIgINCg0JTQk9CjXCIvPlxuXG4gICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uN30gdGV4dD1cItCX0LDRhdC+0LTRj9C60ZbQvSDQni7Qki4sINC00L7RhtC10L3RgiDQutCw0YTQtdC00YDQuCDQtdGB0YLRgNCw0LTQvdC+0Zcg0LzRg9C30LjQutC4INCG0L3RgdGC0LjRgtGD0YLRgyAg0LzQuNGB0YLQtdGG0YLQsiAg0KDQlNCT0KNcIi8+XG5cbiAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb244fVxuICAgICAgICAgICAgICAgICAgICB0ZXh0PSfQktC40YjQvdC10LLRgdGM0LrQsCDQhi7Qny4sINCy0LjQutC70LDQtNCw0Ycg0LLQuNGJ0L7RlyDQutCw0YLQtdCz0L7RgNGW0ZcsINCz0L7Qu9C+0LLQsCDRhtC40LrQu9C+0LLQvtGXINC60L7QvNGW0YHRltGXIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L5cIlxuICAgICAgICAgICAgICAgICAgICDQoNGW0LLQvdC10L3RgdGM0LrQvtCz0L4g0LzRg9C30LjRh9C90L7Qs9C+INGE0LDRhdC+0LLQvtCz0L4g0LrQvtC70LXQtNC20YMg0KDQlNCT0KMnLz5cblxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjN9IHRleHQ9e2DQhtCy0LDQvdC+0LLQsCDQmy7Qhi4sINCy0LjQutC70LDQtNCw0Ycg0L/QtdGA0YjQvtGXINC60LDRgtC10LPQvtGA0ZbRlyDQmtCXIFwi0JvRg9GG0YzQutCwINC80YPQt9C40YfQvdCwICDRiNC60L7Qu9CwIDNcImB9Lz5cblxuICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjZ9XG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCLQnNCw0YDRhtC10LLQsCDQli7Qny4sINGB0YLQsNGA0YjQuNC5INCy0LjQutC70LDQtNCw0YcsINC30LDQstGW0LTRg9GO0YfQsCDRhNC+0YDRgtC10L/RltCw0L3QvdC40Lwg0LLRltC00LTRltC70L7QvCDQoNGW0LLQvdC10L3RgdGM0LrQvtGXINC00LjRgtGP0YfQvtGXINC80YPQt9C40YfQvdC+0Zcg0YjQutC+0LvQuCDihJYxINGW0LzQtdC90ZYg0JwuINCb0LjRgdC10L3QutCwXCIvPlxuICAgICAgICA8L1BlcnNvbkluZm9TZWN0aW9uPlxuICAgIDwvV3JhcHBlcj4pO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7UmVzdWx0c0ZpbHRlcn0gZnJvbSBcIi4vUmVzdWx0c0ZpbHRlclwiO1xuaW1wb3J0IHtDYXJkfSBmcm9tIFwiLi9DYXJkXCI7XG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7UmVndWxhckhlYWRlcn0gZnJvbSBcIi4vUmVndWxhckhlYWRlclwiO1xuaW1wb3J0IHtJbmZvUGFnZX0gZnJvbSBcIi4vSW5mb1BhZ2VcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8xMTYzMDIzLnBuZ1wiO1xuXG5jb25zdCBDb21tb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtsb2dvfVwiKTtcbiAgbWluLWhlaWdodDogMTAwMHB4O1xuYDtcblxuY29uc3QgTWFpblNlY3Rpb25GbGV4ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBNYWluU2VjdGlvbiA9ICgpID0+IHtcblxuICAgIGNvbnN0IGNhcmRzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2FyZHMpO1xuICAgIGNvbnN0IGlzRGF0YUluUGxhY2UgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5pc0RhdGFJblBsYWNlKTtcbiAgICBjb25zdCBjYXJkQ291bnQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXJkQ291bnQpO1xuICAgIGNvbnN0IHNlY3Rpb25zRm9yRmlsdGVyID0gW1xuICAgICAgICBg0KDRltCy0L3QtdC90YHRjNC60ZYg0YTQvtGA0YLQtdC/0ZbQsNC90L3RliDRgdGC0YPQtNGW0ZdgLFxuICAgICAgICBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImAsXG4gICAgICAgIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFwiYCxcbiAgICAgICAgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcImAsXG4gICAgICAgIGDQo9GB0ZYg0LLRltC00LXQvmAsXG4gICAgICAgIGDQn9GA0L4g0LrQvtC90LrRg9GA0YFgXTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb21tb25XcmFwcGVyPlxuICAgICAgICAgICAgPFJlZ3VsYXJIZWFkZXIgY2FyZENvdW50PXtjYXJkQ291bnR9Lz5cbiAgICAgICAgICAgIDxSZXN1bHRzRmlsdGVyIHNlY3Rpb25zPXtzZWN0aW9uc0ZvckZpbHRlcn0vPlxuICAgICAgICAgICAge2lzRGF0YUluUGxhY2UgPyAoXG4gICAgICAgICAgICAgICAgPE1haW5TZWN0aW9uRmxleD5cbiAgICAgICAgICAgICAgICAgICAge2NhcmRzLm1hcChjYXJkID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y2FyZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvVXJsPXtjYXJkLnZpZGVvVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvc2l0aW9uPXtjYXJkLmNvbXBvc2l0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2FyZC5pZC4kb2lkfS8+XG4gICAgICAgICAgICAgICAgICAgICkpfTwvTWFpblNlY3Rpb25GbGV4PikgOiAoPEluZm9QYWdlLz4pfTwvQ29tbW9uV3JhcHBlcj4pO1xufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtBaU91dGxpbmVGaWxlU2VhcmNoLCBIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aWR0aDogMTUlO1xuICBib3JkZXI6IHNvbGlkIHdoaXRlIDJweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcblxuICA6aG92ZXIge1xuICAgIGJvcmRlcjogc29saWQgZGFya3JlZCAycHg7XG4gICAgY29sb3I6IGRhcmtyZWQ7XG4gIH1gO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5pbnB1dENvbG9yIHx8IFwicGFsZXZpb2xldHJlZFwifTtcbmA7XG5cblxuY29uc3QgSW5wdXRTdHlsZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA1MCU7XG5gO1xuXG5jb25zdCBJbnB1dFdyYXBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA2MHB4O1xuYDtcblxuY29uc3QgU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogd2hpdGU7XG5gO1xuXG5jb25zdCBFcnJvciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDE3cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO2BcblxuY29uc3QgV2FybiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDE3cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHllbGxvdztcbiAgdGV4dC1hbGlnbjogY2VudGVyO2BcblxuZXhwb3J0IGNvbnN0IFJlZ3VsYXJIZWFkZXIgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IHNlYXJjaEZpZWxkID0gdXNlUmVmKCk7XG4gICAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5lcnJvcik7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHtoZWlnaHQsIHdpZHRofSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgIGxldCBzdHIgPSBTdHJpbmcoc2VhcmNoRmllbGQuY3VycmVudC52YWx1ZSk7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoIDwgMyB8fCBzdHIuaW5jbHVkZXMoXCIgXCIpKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJFUlJPUlwiLCBtc2c6IFwi0JHRg9C00Ywg0LvQsNGB0LrQsCDQstCy0LXQtNGW0YLRjCDQsdGW0LvRjNGI0LUgMyDRgdC40LzQstC+0LvRltCyINGWINC90LUg0LLQuNC60L7RgNC40YHRgtC+0LLRg9C50YLQtSDQv9GA0L7QsdGW0LtcIn0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiU0VBUkNIXCIsIHF1ZXJ5OiBzdHJ9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SW5wdXRXcmFwZXI+XG4gICAgICAgICAgICAgICAgPElucHV0U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuPjxBaU91dGxpbmVGaWxlU2VhcmNoLz7Qn9C+0YjRg9C6INCy0ZbQtNC10L4g0L/QviDQv9GA0ZbQt9Cy0LjRidGDINGD0YfQsNGB0L3QuNC60LAgPC9TdHlsZWRTcGFuPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9IHJlZj17c2VhcmNoRmllbGR9IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTRltGC0Ywg0L/RgNGW0LfQstC40YnQtSDRg9GH0LDRgdC90LjQutCwLi4uXCIgaW5wdXRDb2xvcj1cImJsYWNrXCIvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRTdHlsZT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiXCIgb25DbGljaz17aGFuZGxlcn0+0J/QvtGI0YPQujwvQnV0dG9uPlxuICAgICAgICAgICAgPC9JbnB1dFdyYXBlcj5cbiAgICAgICAgICAgIHtlcnJvciAhPT0gXCJcIiA/IDxFcnJvcj48SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPntlcnJvcn08SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPjwvRXJyb3I+IDogbnVsbH1cbiAgICAgICAgICAgIHtwcm9wcy5jYXJkQ291bnQgPT09IDAgP1xuICAgICAgICAgICAgICAgIDxXYXJuPjxIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZS8+0LLRltC00LXQviDQvdC1INC30L3QsNC50LTQtdC90ZY8SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPjwvV2Fybj4gOiBudWxsfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwge2tleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge0ZhRm9sZGVyLCBGYVVuaXZlcnNpdHl9IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zXCI7XG5cbmNvbnN0IEZpbHRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtgO1xuXG5jb25zdCBGaWx0ZXJTZWN0aW9uID0gc3R5bGVkKEZpbHRlckNvbnRhaW5lcilgXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICA6aG92ZXIge1xuICAgIGNvbG9yOiBkYXJrcmVkO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRGl2VGhpbkxpbmUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBncmF5IHNvbGlkIDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgaGVpZ2h0OiAyJTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2U7XG5gO1xuXG5jb25zdCBTdHlsZWRSZXN1bHRzRmlsdGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbmA7XG5cbmNvbnN0IGdyb3dfMCA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcbiAgfVxuICAwJSB7XG4gICAgbGVmdDogMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xuICB9XG5gO1xuXG5jb25zdCBncm93XzEgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XG4gIH1cbiAgMCUge1xuICAgIGxlZnQ6IDFweDtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy5sZWZ0fTtcbiAgfVxuYDtcblxuXG5leHBvcnQgY29uc3QgVGhpbkxpbmVJbm5lckRpdiA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcbiAgbGVmdDogJHtwcm9wcyA9PiBwcm9wcy5sZWZ0fTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IHJlZCBzb2xpZCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgaGVpZ2h0OiAxJTtcbiAgYW5pbWF0aW9uOiAke3Byb3BzID0+IChwcm9wcy5hbmltYXRpb24gJSAyID09PSAwKSA/IGdyb3dfMCA6IGdyb3dfMX0gMC41cyBsaW5lYXI7XG5gO1xuXG5leHBvcnQgY29uc3QgUmVzdWx0c0ZpbHRlciA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgW3NlY3Rpb25zLF0gPSB1c2VTdGF0ZShwcm9wcy5zZWN0aW9ucyk7XG5cbiAgICBjb25zdCBbcmVkTGluZVdpZHRoLCBzZXRSZWRMaW5lV2lkdGhdID0gdXNlU3RhdGUoXCIxMHB4XCIpO1xuICAgIGNvbnN0IFtyZWRMaW5lTGVmdCwgc2V0UmVkTGluZUxlZnRdID0gdXNlU3RhdGUoXCIxMHB4XCIpO1xuICAgIGNvbnN0IFthbmltYXRpb24sIHNldEFuaW1hdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG4gICAgY29uc3QgbWFya2VkU2VjdGlvblJlZiA9IHVzZVJlZigpO1xuXG4gICAgLy9oYW5kbGluZyByZWRMaW5lIG9uIHJlc2l6ZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJlUmVuZGVyUmVkTGluKHt0YXJnZXQ6bWFya2VkU2VjdGlvblJlZi5jdXJyZW50fSlcbiAgICB9LCBbd2lkdGhdKTtcblxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIGZ1bmN0aW9uIHJlUmVuZGVyUmVkTGluKGV2ZW50KSB7XG4gICAgICAgIG1hcmtlZFNlY3Rpb25SZWYuY3VycmVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbGV0IGN1cnJlbnRTZWN0aW9uV2lkdGggPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIGxldCBjdXJyZW50U2VjdGlvbkxlZnQgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIDEwO1xuICAgICAgICBzZXRSZWRMaW5lV2lkdGgoY3VycmVudFNlY3Rpb25XaWR0aCArIFwicHhcIik7XG4gICAgICAgIHNldFJlZExpbmVMZWZ0KGN1cnJlbnRTZWN0aW9uTGVmdCArIFwicHhcIik7XG4gICAgICAgIGxldCBjb3VudGVyID0gYW5pbWF0aW9uICsgMTtcbiAgICAgICAgc2V0QW5pbWF0aW9uKGNvdW50ZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRmlsdGVyU2VjdGlvbkNsaWNrKHNlbGVjdGVkU2VjdGlvbiwgZXZlbnQpIHtcbiAgICAgICAgcmVSZW5kZXJSZWRMaW4oZXZlbnQpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRTZWN0aW9uU3RyaW5nID0gc2VsZWN0ZWRTZWN0aW9uLnNlY3Rpb247XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkU2VjdGlvblN0cmluZyk7XG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRTZWN0aW9uU3RyaW5nKSB7XG4gICAgICAgICAgICBjYXNlIGDQo9GB0ZYg0LLRltC00LXQvmA6XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiQUxMXCJ9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XCJgOlxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTFcIn0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcImA6XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZ3JvdXAtMlwifSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXCJgOlxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTNcIn0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVySW5mb1BhZ2UoZXZlbnQpIHtcbiAgICAgICAgcmVSZW5kZXJSZWRMaW4oZXZlbnQpO1xuICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJJTkZPX1BBR0VcIn0pO1xuICAgIH1cblxuICAgIGxldCByZW5kZXJlZFNlY3Rpb25zID0gc2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgIHNlY3Rpb24gPT09IFwi0J/RgNC+INC60L7QvdC60YPRgNGBXCIgP1xuICAgICAgICAgICAgPEZpbHRlclNlY3Rpb24gIG9uQ2xpY2s9e3JlbmRlckluZm9QYWdlfSBrZXk9e3NlY3Rpb259PiA8RmFVbml2ZXJzaXR5Lz57c2VjdGlvbn0gPC9GaWx0ZXJTZWN0aW9uPlxuICAgICAgICAgICAgOiA8RmlsdGVyU2VjdGlvbiAgcmVmPXttYXJrZWRTZWN0aW9uUmVmfSBvbkNsaWNrPXtlID0+IG9uRmlsdGVyU2VjdGlvbkNsaWNrKHtzZWN0aW9ufSwgZSl9IGtleT17c2VjdGlvbn0+IDxGYUZvbGRlci8+e3NlY3Rpb259PC9GaWx0ZXJTZWN0aW9uPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxTdHlsZWRSZXN1bHRzRmlsdGVyV3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8RmlsdGVyQ29udGFpbmVyIGNoaWxkcmVuPXtyZW5kZXJlZFNlY3Rpb25zfS8+XG4gICAgICAgICAgICA8L1N0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyPlxuICAgICAgICAgICAgPERpdlRoaW5MaW5lPjxUaGluTGluZUlubmVyRGl2IHdpZHRoPXtyZWRMaW5lV2lkdGh9IGxlZnQ9e3JlZExpbmVMZWZ0fSBhbmltYXRpb249e2FuaW1hdGlvbn0vPjwvRGl2VGhpbkxpbmU+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuIiwidmFyIHNyYyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCLQhtCy0LDQvdC+0LLQsCDQmy7Qhi02ZmRkN2ViZTI2YjE4Y2Y5ZGRhMmM4ODRhYTY2MWE4ZS5wbmdcIjttb2R1bGUuZXhwb3J0cz17c3JjOnNyYyx3aWR0aDoyNjEsaGVpZ2h0OjQzMSxmb3JtYXQ6XCJqcGVnXCIsdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gc3JjO319OyIsInZhciBzcmMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwi0JLQuNGI0L3QtdCy0YHRjNC60LAtMS01M2E5N2I0Njc0MWMxNGU1YmQwM2Y0YzRlZWVmZGIyMi5wbmdcIjttb2R1bGUuZXhwb3J0cz17c3JjOnNyYyx3aWR0aDo1MDAsaGVpZ2h0OjUwMCxmb3JtYXQ6XCJwbmdcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07IiwidmFyIHNyYyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCLQl9Cw0LrQvtC/0LXRhtGMLTEtNWEzODY4MGNjZDYyYzZjNmMxMzAwMGUxZDIwMDI3ZDAucG5nXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6MjgyLGhlaWdodDo1MDAsZm9ybWF0OlwicG5nXCIsdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gc3JjO319OyIsInZhciBzcmMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwi0JfQsNGF0L7QtNGP0LrRltC9LTEtNjYxMTdkMTBhNjZmNjNiY2JkMWFhZDcwOTVlMThiZjkucG5nXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6MzA0LGhlaWdodDo1MDAsZm9ybWF0OlwicG5nXCIsdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gc3JjO319OyIsInZhciBzcmMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwi0JrRg9C30L3RlNGG0L7QstCwLTEtZGRhY2Y3YTJlNjM2M2U1MTRmNTYzN2Y0YmIzMmVjYWQucG5nXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6MzY5LGhlaWdodDo1MDAsZm9ybWF0OlwicG5nXCIsdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gc3JjO319OyIsInZhciBzcmMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwi0JzQsNGA0YbQtdCy0LAtMS1kNWZlNWVhOGNiODNjMTY0ODVmOTdmODRhOTkzYTZkMy5wbmdcIjttb2R1bGUuZXhwb3J0cz17c3JjOnNyYyx3aWR0aDoyODEsaGVpZ2h0OjUwMCxmb3JtYXQ6XCJwbmdcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07IiwidmFyIHNyYyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCLQntGB0YLQsNC/0YfRg9C6INCcLiDQnC1iMjEwNTMzYzY4MzFlYzYzODkxNzY2NDA3Y2EyMDE3YS5wbmdcIjttb2R1bGUuZXhwb3J0cz17c3JjOnNyYyx3aWR0aDo0MzMsaGVpZ2h0OjU3Nyxmb3JtYXQ6XCJwbmdcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07IiwidmFyIHNyYyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCLQoNCw0LnRgiDQhi7QoS1iMjE5MmRkYzNjY2Q4OGRmZmU5NTU1ZGUyNTAxZjE4OC5wbmdcIjttb2R1bGUuZXhwb3J0cz17c3JjOnNyYyx3aWR0aDo1MDEsaGVpZ2h0OjQ5OCxmb3JtYXQ6XCJwbmdcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gZ2V0V2luZG93RGltZW5zaW9ucygpIHtcbiAgICBjb25zdCB7IGlubmVyV2lkdGg6IHdpZHRoLCBpbm5lckhlaWdodDogaGVpZ2h0IH0gPSB3aW5kb3c7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gICAgY29uc3QgW3dpbmRvd0RpbWVuc2lvbnMsIHNldFdpbmRvd0RpbWVuc2lvbnNdID0gdXNlU3RhdGUoZ2V0V2luZG93RGltZW5zaW9ucygpKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgICAgICAgIHNldFdpbmRvd0RpbWVuc2lvbnMoZ2V0V2luZG93RGltZW5zaW9ucygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHdpbmRvd0RpbWVuc2lvbnM7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldCcpKTtcbiIsImltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J1xuXG5jb25zdCBncm91cDEgPSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImA7XG5jb25zdCBncm91cDIgPSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcImA7XG5jb25zdCBncm91cDMgPSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFwiYDtcblxubGV0IG15Q2FyZHMgPSBbe1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMDdcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JDQs9GA0LDRgtGW0L3QsCDQodGC0LDQvdGW0YHQu9Cw0LIsIDkg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7Qk9C70ZbQvdC60LAuICcn0J/QvtGH0YPRgtGC0Y8nJywgICAgICAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Ci0LDQvdC+0LonJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5NHl0X3NLQzVFdDNyNDl6Q0VSc2RCWmVEUWdZLUdfaS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMDhcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JLQsNC70ZbQs9GD0YDQsCDQktCw0YDQstCw0YDQsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC7Qm9C10LzRltGI0LrQvi4gJyfQmtC+0LvQvtC80LjQudC60LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjNmhUSXFEbC1jQUYzQnIzbDFjMnV3cUZac0xWU1BUdi9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMDlcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JLQsNC70ZbQs9GD0YDQsCDQktCw0YDQstCw0YDQsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi7QnNCw0LrRgdGW0LzQvtCyLiAnJ9CX0LDQtNC30LXRgNC60LDQu9C70Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE1WXI2UXhtNHJzdERPTVUydkduNUp3cTVWZlVwTjJTRC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JLQsNGB0LjQu9C10LLRgdGM0LrQsCDQpdGA0LjRgdGC0LjQvdCwLDcg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCT0ZbQu9C70L7Qui4nJ9Ch0LDQvNC+0YLQvdGPINCx0LDQu9GM0L3QsCDQt9Cw0LvQsCcnLCAgIDIp0KIu0KDQvtGB0YLQuNC80LDRiNC10L3QutC+Licn0KfQsNC60LvRg9C9JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR3R4VUt1VWtMS0FuaDVvQ2Y5Rmx1aVVUUW9KQ1RiTU0vcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzBiXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCS0L7Qu9C40L3QtdGG0Ywg0J7Qu9C10LrRgdCw0L3QtNGALCA4INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmy7QmtC+0LvQvtC00YPQsS4gJyfQkNGA0LrQsNC9JycsMinQpC7QoNC40LHRltGG0YzQutC40LkuICcn0KDQtdCz0L7RgtGD0YjQutCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX0NPUGVQendkZ1M3VV9PakV4T3B2OG5vejFtaVRlOGMvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzBjXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCT0LDQu9Cw0LPQsNC9INCa0LDRgtC10YDQuNC90LAsIDkg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQtdC80LAg0Lcg0LLQsNGA0ZbQsNGG0ZbRj9C80LgsIDIp0JMu0JrRg9GI0L3QsNGA0LXQvdC60L4uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvQmxVZlhXcWxoNXVEc0RGQ1hiSGdjN1hHaUFKR2JMSC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JPQtdGA0LDRgdC40LzQtdC90LrQviDQntC70LXQutGB0LDQvdC00YDQsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCSLtCg0LDRh9C60L7QstGB0YzQutC40LkuINCi0L7QutCw0YLQuNC90LAuIDIp0JIu0JrQvtGB0LXQvdC60L4uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFER25zU1FHbEJ1OFhfb0RQdDNZS3RLbWlWelYtRzNxSi9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGVcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JPQvtC70L7QtNC+0LLRgdGM0LrQsCDQodC+0YTRltGPLCA3INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQhi7QktCw0L3RhdCw0LvRjC7QoNC+0L3QtNC+LCAyKdCcLtCU0YDQtdC80LvRjtCz0LAuJyfQktC10YHQtdC70LAg0LPRgNCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMkt1dGotb3dwc3I4aGVscm1fa0ZaaDF5UXdNakVDN0EvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzBmXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCT0L7Qu9GD0LEg0JDQu9GW0L3QsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCDQhtGHLiwgMinQkS7QlNCy0LDRgNGW0L7QvdCw0YEuINCf0YDQtdC70Y7QtNGW0Y9cIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdXdoS01LZEpaSWhSem5NM1ZVNW1UcUV1S3h4VGVzYU8vcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzEwXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCT0YDQuNCz0L7RgCfRlNCy0LAg0JrQsNGC0LXRgNC40L3QsCwgOCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0KDQsNC90L7QuicnLCAgIDIp0IYu0JrQvtGA0L7Qu9GM0LrQvtCy0LAuJyfQk9C+0YDQvtCx0YfQuNC6JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYWlNdjVMd1lWOW0yd3otU0pNR254ZlVxSVJUOU1fRXcvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzExXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCU0LDQvdGO0Log0ITQu9C40LfQsNCy0LXRgtCwLCA3INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7Qm9GO0LHQsNGA0YHRjNC60LjQuS4nJ9Ci0LDQvdGG0Y7QstCw0LvRjNC90LAnJywgMikg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5LiDQktCw0LvRjNGBXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXZUa19tQUJfRUNoOVZEd1I2RU1hc1kxeTIxS1dyU1lIL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxMlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQlNGA0L7Qs9Cw0L0gINCc0ZbQu9Cw0L3QsCwgNSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JzQsNC50ZTRgC4gJyfQktC10YHQtdC70LAg0LPRgNCwJycsIDIp0JQu0JHQsNGI0YLQtdC50L0uICcn0JLQsNC70YzRgSDRgdC70L7QvdC10L3Rj9GCJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWGIwZ0lnRnlDbkx1Q3hqbjVrbGFlUTBMbDlEc2tSUHovcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzEzXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCU0YDQvtC30LTQvtCy0LAg0ITQu9C40LfQsNCy0LXRgtCwLCA5INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLtCc0LXQvdGD0LXRgi4gMinQky7QmtC70LDRgdGB0LXQvS4g0J/QvtC70YzQutCwXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXI1XzE4cFI3Qkx4RFNERW5NRDdySE5HalI5emlFaUduL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxNFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQl9Cx0ZbRgCDQnNCw0YDRltGPLCA4INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7Qk9C10LTRltC60LUuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCAgICDQhiDRhy4sIDIp0KAu0KjRg9C80LDQvS4nJ9Cf0LXRgNGI0LAg0LLRgtGA0LDRgtCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xXzdxbjNmVHV0ZEtHY0dkYmd2MTNyS29rSjhqeGdrM2EvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE1XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90YzQutGW0LIg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDkg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCU0ZbQsNCx0LXQu9C70ZYuINCh0LrQtdGA0YbQviwgIDIp0J4u0JPQtdC00ZbQutC1LiAnJ9Cc0LDQu9C10L3RjNC60LAg0L8n0ZTRgdCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdlllVmtSYVYxbWIzM3VKMURHTXIyMHFvaWtGQ3I5QXkvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE2XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQnNCw0YDRltCw0LwsIDgg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QnNCw0LnQutCw0L/QsNGALiAnJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINGB0L7Qu9GMINC80ZbQvdC+0YBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xclJsTE1Kam9Xd1RWdXA3X3ZWTUQ0RDNubDJZLWxzcE8vcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE3XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQnNCw0YDRltCw0LwsIDgg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JrQuNGA0LXQudC60L4uICcn0KHRgtGA0LjQsS3RgdC60L7QuicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUltcFBxOW5jYk1oNVQxU2NBSGZEbXo1N0JEbExaQ0YyL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxOFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQhtGB0YPQv9C+0LLQsCDQkNC70ZbRgdGW0Y8sIDgg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QoNC10LnQvdC10LrQtS4gJyfQk9Cw0LLQvtGCJycsIDIp0Jku0KEu0JHQsNGFLiAnJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINC00L4g0LzRltC90L7RgFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwZzlDQ0pvWFJ6ZUc4Q2lGaGduRUJ6VFFCTElXRGFuQS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTlcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JrQvtCy0LDQu9C10L3QutC+INCS0LDRgNCy0LDRgNCwLCA4INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7Qk9C10YLQsNC70L7QstCwLicn0KDQsNC90L7QuiDQsiDQu9GW0YHRlicnLCAgMinQki7Qn9C+0LTQstCw0LvQsC4gJyfQmtCw0L/RgNC40LfRg9C70Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTMzhfb0VDT0JvN0tHRFYxYXpKVXgzek9Zd2dRRVFJVi9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGA0LXQvdGW0LLRgdGM0LrQsCDQlNCw0YAn0Y8sIDkg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoC7QktCw0L3QtNCw0LsuJyfQktC+0LTQvtCz0YDQsNC5JycsICAgICAgICAgMinQny7Ql9Cw0YXQsNGA0L7Qsi4nJ9CX0L3QsNC50L7QvNC40Lkg0YHQuNC70YPQtdGCJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOUNBelBDYVdyQU5fU1d6YUpGZEVweFBJT1F3LXJmTFUvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzFiXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0L7RgdGC0LXQvdC60L4g0K/RgNC+0YHQu9Cw0LLQsCwgNyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QmtC+0YHQtdC90LrQvi4gJyfQnNC10LvQvtC00ZbRjycnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNkZFljb3lnVGN0b2FiR1FGN3BUMnBvUnZDdXBWR19jL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxY1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQmtC+0YHRgtC10L3QutC+INCv0YDQvtGB0LvQsNCy0LAsIDcg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JnRlNC90YHQtdC9Licn0KfQsNGA0ZbQstC90LjQuSDRgtCw0L3QvtC6JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdUIyOWJUUEVpWWR1Z0pmTE9abDRTUUdyRlk5blFwci0vcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzFkXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCb0LDRgtC60L7QstGB0YzQutCwINCE0LvQuNC30LDQstC10YLQsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQvtGB0LXQvdC60L4uINCS0LDQu9GM0YEsICAgIDIp0J4u0JPRgNC10YfQsNC90ZbQvdC+0LIuJyfQnNGW0Lkg0LrQvtC90LjQuicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZZQXctcTdmOEY5SkJQbWZuOHRFa3BKVDgxSjdFYWhBL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxZVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQm9GW0YjQvNCw0L0g0JTQsNGA0LjQvdCwLCA5INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7Qn9C+0LTQstCw0LvQsC4nJ9Cc0LDRgNGILdCz0YDQvtGC0LXRgdC6JycsICAgICAgICAgIDIp0KEu0JzQsNC50LrQsNC/0LDRgC4gJyfQmtC+0LvQuNGB0LrQvtCy0LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOc1d6M1RSMFNLaVR0Y05DQUplMDU5YmhoRm9tdF9ORS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JzQsNCz0L7Qu9CwINCh0L7RhNGW0Y8sIDgg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQry7QkdC+0LHQsNC70ZbQui4nJ9Ch0LLRj9GC0LrQvtCy0LAg0L/QvtC70YzQutCwJyc7IDIp0IYu0JHQtdGA0LrQvtCy0LjRhy4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGAXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWd1QXhzNWdfd2JHdl90d3FpeXBvMGU4RkhPd3VtLUloL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyMFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQnNCw0LfRg9GA0LXQvdC60L4g0JzQsNC50Y8sIDgg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLiDQkdC+0LHQtdGALiAnJ9CQ0LPQtdC90YIg0KUnJywgICAgICAgICAgMinQhi7QhtC+0YDQtNCw0L0uICcn0J/QvtC70Y7QstCw0L3QvdGPINC90LAg0LzQtdGC0LXQu9C40LrQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUllMVdDUXBnUHVMWWRLTnhWR3VMa2VJVm5ZSk5aSjlUL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyMVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQnNCw0YDRh9C10L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLicn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0LTQviDQvNGW0L3QvtGALCAyKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQkdCw0LHQsCDQr9Cz0LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFaSm80R1VMWjlzZmNVdUFwRjVqeW9ISVVWX0lLQVZyZy9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JzQsNGA0YfRg9C6INCc0LDQutGB0LjQvCwgOCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQpC4g0KjQv9GW0L3QtNC70LXRgC4g0KHQvtC90LDRgtC40L3QsCwg0YLQsi4xNTcg4oSWNFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFzQzdNVWpja25yblpaWjVoZk1DWGJTdnMzNktBM3BwVi9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjNcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JzQsNGA0YfRg9C6INCc0LDQutGB0LjQvCwgOCDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JPRltC70LvQvtC6LiAnJ9Ca0LDQv9GA0ZbRh9GW0ZTRgtGC0L4nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZZEFpaHZBUWtDVDhiYnlXNDRwUWkyaVpobVgxYzNLei9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JzQvtGC0YPQt9C60LjQvdCwINCb0ZbQtNGW0Y8sIDkg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0JHRltC70LDRh9C10L3QutC+LiAnJ9Cj0LrRgNCw0ZfQvdGB0YzQutC40Lkg0YLQsNC90L7QuicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJwTzlkSEFjYlA4S2xhV1RfMW5YWFFpWmVidUQ4RjBwL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyNVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQnNC+0YLRg9C30LrQuNC90LAg0JvRltC00ZbRjywgOSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QnNC+0YbQsNGA0YIuICcn0JzQtdC90YPQtdGCJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQ19teEFVNjVWdnZ2ZmlQb1JRc2NLUjBvVURXcEhEUXQvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI2XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCd0L7QstC+0YHRltC70YzRgdGM0LrQsCDQmtCw0YLQtdGA0LjQvdCwLCA3INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCDRgtCyLjM2LCDQhi3QhtCG0IbRhy4sIDIp0IYu0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRj1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZNzJDRkxPTVBpYndUVVBnV09tc1FIM1lKUHZpQmpEYS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjdcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J7Qu9GM0YXQvtCy0YHRjNC60LAg0JDQvdGW0YLQsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQhi7Qn9Cw0LLQu9GW0LouICcn0KHQvdGW0LbQuNC90LrQuCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJzLVZnRk1uSVlaVm05a09qTmg2RlRsX1AwQ0FEUkIxL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyOFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQntC70YzRhdC+0LLRgdGM0LrQsCDQkNC90ZbRgtCwLCA5INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCdLiDQmtCw0YDQv9C10L3QutC+LiDQldGC0Y7QtCDRgdGWINC80ZbQvdC+0YBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa1MzQnFRdzQtbXNNb3puTzNOel9pV2M1eXRsSk9GVG0vcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI5XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCe0YHRgtCw0L/Rh9GD0Log0JrQsNGA0ZbQvdCwLiA4INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7Qk9GW0LvQu9C+0LogJyfQlNC30LLRltC90L7Rh9C60LgnJywgMinQhi7QpdGD0YLQvtGA0Y/QvdGB0YzQutC40LkuICcn0JLQvtCz0L3RltCy0L7Rh9C60LAt0YHRgtGA0LjQsdGD0L3RltCy0L7Rh9C60LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2UkFjTjJPNmt1bktaQUZyYmdCSHNFTmlaZzlpS3M0Ry9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMmFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J7RhdGA0ZbQvSDQr9GA0LXQvNCwLCA4INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5LiAnJ9Cd0L7QstC10LvQsCcnLCAgICAgIDIp0KEu0JzQsNC50LrQsNC/0LDRgC4nJ9Ci0L7QutCw0YLQuNC90LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6dzFKSzBKNGQ4SGstem5idi01b0RuYS1xTDNjd1JFUC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMmJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J/QsNCy0LvQtdC90LrQviDQodGC0LXRhNCw0L3RltGPLCA3INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JvRjtCx0LDRgNGB0YzQutC40LkuICcn0J/RltGB0L3RjycnLDIpINCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4nJ9Ca0LvQvtGD0L3QuCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUltbndKajJEZXF6LVRKZnZYQUNDclpwaVpOVDNCbktIL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyY1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQn9Cw0L3RjNC60L7QstCwINCQ0L3QvdCwLCA4INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiAnJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINC00L4g0LzRltC90L7RgCwgICAgICAgIDIp0Jsu0KjRg9C60LDQudC70L4uICcn0IbQvdGC0LXRgNC80LXRhtC+JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeXJBSHI2aTE3TlNoUDVxYUltUG5XeC14SlFqQ01NeTIvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJkXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCf0LDRgNGE0YzQvtC90L7QsiDQlNC80LjRgtGA0L4sIDkg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCS0LvQsNC00LjQutGW0L3QsC3QkdCw0YfQuNC90YHRjNC60LAuJyfQqdC+0YHRjCDRgdGD0LzQvdC1JycsIDIp0J4u0JPQtdC00ZbQutC1LiAnJ9Ci0LDQvdC10YbRjCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5EZHc1N1Jzcm1MckVfeVdTRzB1RkpYRWpXY0dxR21SL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyZVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQn9C+0LPQvtGA0ZTQu9C+0LIg0JDRgNGC0LXQvCwgOSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiAnJ9Cc0LXQvdGD0LXRgicnLCAyKdCdLtCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5lODZpTS1OVXM2TmNpb0JzdlVqZlFhNk1uN2NTQVI3L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyZlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQn9GD0LfQsNC90L7QstCwINCc0LDRgNGW0Y8sIDkg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCjLiDQk9GW0LvQu9C+0LouICcn0JrQvtGA0L7Qu9GW0LLRgdGM0LrQuNC5INC80LXQvdGD0LXRgicnLCAyKdCGLtCG0L7RgNC00LDQvS4gwqvQn9C+0LvRjtCy0LDQvdC90Y8g0L3QsCDQvNC10YLQtdC70LjQutCwwrtcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xT0dTX2Zxekp2YkI3YU5QcmV4d3FESzV4MGxzLTIwQ0MvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzMwXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCg0LXQt9C90ZbQuiDQotC10YLRj9C90LAsIDkg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCi0L7RgNC+0L/QvtCy0LAuINCS0LDRgNGW0LDRhtGW0ZcsICAgICAyKdCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4gJyfQnNCw0LvQtdC90YzQutC40Lkg0LbQvtC90LPQu9C10YAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4R3hOVFR0V3JoZE91Nlk3R3VlVUFnR1h2am9MbE1CbC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KDQuNCx0LDQuiDQkNC90LDRgdGC0LDRgdGW0Y8sIDgg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKS7QnNC10LvQsNGA0YLRltC9Licn0KDQsNC90L7QuicnLCAyKdCcLtCc0LDQudGU0YAuJyfQndC10LfQstC40YfQsNC50L3QsCDQv9GA0LjQs9C+0LTQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXV6bVZxRlZublFhSUdYN28zSC03dE5lMGtwMVppVXZQL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzMlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQoNGW0L/QvdC40Lkg0JHQvtCz0LTQsNC9LCA4INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0IYuINCR0LXRgNC60L7QstC40YcuINCS0LDRgNGW0LDRhtGW0ZcsICAgICAyKdCULiDQoNC+0YPQu9GWLicn0JIg0LrRgNCw0ZfQvdGWINCz0L3QvtC80ZbQsicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVFscjFfLXBGQWxMSWl4S2toeDItWnh4RVlaaEFaOVo3L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzM1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQoNC+0LzQsNC90YfQtdC90LrQviDQldC70LjRgdC10LksIDgg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQqC7Qk9GD0L3Qvi4nJ9Cc0LDRgNGIINC80LDRgNGW0L7QvdC10YLQvtC6JycsICAgMikg0J4u0JPRgNC10YfQsNC90ZbQvdC+0LIuJyfQndC10LfQstC40YfQsNC50L3QsCDQv9GA0LjQs9C+0LTQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlJLXpqcTRRaW1ETDlUTEU1QlJZdXJtdUFMMTZmU2NVL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzNFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodCw0LnRh9GD0Log0K/RgNC+0YHQu9Cw0LLQsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi4g0JzQsNC60YHQuNC80L7Qsi4nJ9CR0LDQsdCwINCv0LPQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVg1QzdrZk5kM1Fsb1psMFRBdk5fQVFoMC1xWHRwU1NCL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzNVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodCw0LnRh9GD0Log0K/RgNC+0YHQu9Cw0LLQsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmi7QoNC+0LvQu9GW0L0uICcnINCo0L7QutC+0LvQsNC00L3QtSDQv9C10YfQuNCy0L4nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2dlltX0VkRHhfLTNCUkhKTXlEMzVrM29DNEYydFY1Ni9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KHRltGC0YjQsNGU0LLQsCDQl9Cw0YDQtdC80LAsIDkg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy7QkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgDsgMinQmi7QodC70L7QvdGW0LzRgdGM0LrQuNC5LiAnJ9CU0Y7QudC80L7QstC+0YfQutCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSDZlZFF0c1JwMF93Y3VPWVJBRWgxbGZmUnowVFh0aWIvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM3XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0ITQstCz0LXQvdGW0Y8sIDkg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0LLQsNGB0L3QtdCy0YHRjNC60LjQuS4nJ9CU0YPQvNC60LAnJywgMinQlC7QkNC70LXQutGB0LDQvdC00LXRgC4gJyfQl9C40LzQvtCy0LAg0YDQsNC/0YHQvtC00ZbRjycnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZMVzlFZXNQUHMxU1RpNmtRcFF4ZEVKemszUGduSFlqL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzOFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodGC0YDQuNC50YHRjNC60LAg0JDQvNC10LvRltGPLCA4INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JIu0JrQvtGB0LXQvdC60L4uJyfQlNC+0YnQuNC6Jyc7ICAgICAgMinQni7QkdGW0LvQsNGH0LXQvdC60L4uICcn0JXQutGB0L/RgNC+0LzRgicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBoOU9OUkcyVDQydnhBbFd5NEFTUDBxZ2E4SVUwMnJ2L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzOVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodGC0YPQtNC30LjQvdGB0YzQutCwINCE0LvQuNC30LDQstC10YLQsCwgNyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLiDQnNC+0YbQsNGA0YIuICcn0JzQtdC90YPQtdGCJycsICAgIDIp0KMuINCT0ZbQu9C70L7Qui4gJyfQntGB0ZbQvdC90ZbQuSDQtdGB0LrRltC3JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVmRzT2J1YjlaMEU3Wk0xUVlNc2Zxa2Fsam5uTFEyamUvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNhXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCh0YPRhdCw0L0g0JTRltCw0L3QsCwgOCDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCo0YPQutCw0LnQu9C+LtCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRgtC10LzRgyDQki7QqNCw0ZfQvdGB0YzQutC+0LPQvjsgMinQoC7QpNGD0YfRgS4nJ9Cc0LDQu9C10L3RjNC60LUg0YDQvtC30LHQuNGC0LUg0YHQtdGA0YbQtScnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUd1NXVjb0NHRmh5RW5NaDMtSURVSi11RjBUdWozN1VaL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzYlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQotC10YDQvyfRj9C6INCQ0LDRgNC+0L0sIDkg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQhi7QkdC10YDQutC+0LLQuNGHLiDQktCw0YDRltCw0YbRltGXINC90LAg0YPQutGA0LDRl9C90YHRjNC60YMg0YLQtdC80YM7IDIp0KIu0J7RgdGC0LXQvS4gJyfQnNCw0LvQtdC90YzQutC40Lkg0LXQu9GM0YQnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFadFFiTkJCZ0dtT3pNV25uSEFGLTdfQ0JzWGszTHctMi9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzM2NcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KLQuNC80YfQtdC90LrQviDQndCw0LTRltGPLCA4INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0KjRgtC+0LPQsNGA0LXQvdC60L4uICcn0JzQtdGC0LXQu9C40LonJywgMinQki7Qk9GW0LvQu9C+0LouICcn0JzRltGB0Y/Rh9C90LUg0YHRj9C50LLQvicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBTOUFHSHlFRHFzdGpxQTFNaUViVGtwNWoxVXVTaHJHL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzZFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQotGW0YnQtdC90LrQviDQktC10YDQvtC90ZbQutCwLCA3INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuICcn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0LTQviDQvNGW0L3QvtGALCAyKdCbLiDQqNGD0LrQsNC50LvQvi4g0JLQsNGA0ZbQsNGG0ZbRl1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGdHJqOWs1amhEeFZpNXVmaFhZM1RIa3dPSzhZMTJIbS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzM2VcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KLQvtC00L7RgNC+0LLQsCDQlNCw0Y/QvdCwLCA2INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QkdCw0YDQstGW0L3RgdGM0LrQuNC5LiAnJ9CX0LDQudGH0LjQuicnLCAgICAgICAgICAyKdCcLtCb0Y7QsdCw0YDRgdGM0LrQuNC5LiAnJ9Cf0LvRj9GB0L7QstCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUEF6SUJ0akcwTmZxYXpVSTI1SHNSckZWWGpMeXoyQmkvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNmXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCi0L7QvdGW0ZTQstC40Ycg0JrRgdC10L3RltGPLCA5INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QodC/0ZbQu9GW0L7RgtGWLicn0JPRg9GG0YPQu9GP0YLQsCcnLCAgIDIp0JIu0JPRltC70LvQvtC6Licn0KMg0YHRgtCw0YDQvtC80YMg0JLRltC00L3RlicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTE5dzN3bkhNcDZYTldTS0tyOVZKSW9ZalZJUDlNbEFPL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0MFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQotGO0YLRjNC60L4g0JLQvtC70L7QtNC40LzQuNGALCA5INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QmtGD0LvQsNGDLtCh0L7QvdCw0YLQuNC90LAsINGC0LIuNTUg4oSWMywgMinQoC7Qm9GW0YHQvtCy0LAuJyfQktC10YHQtdC70LjQuSDQvdCw0YHRgtGA0ZbQuScnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJnLUhLN0xwM1V3akdrM01JVFRkRDllUTdyRmRoeDFIL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0MVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpNC10YHQtdC90LrQviDQkNC90L3QsCwgOCDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCT0LXQtNGW0LrQtS7QodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwgIDIp0JIu0JPQsNCy0YDQuNC70ZbQvS4gJyfQmtCw0L/RgNGW0YfRh9GW0L4nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFanJxOFpFWEJKcV9BTmZBaVktNWpLSDdSczU4Zkx1Qy9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzNDJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KfQvtGA0L3QtdC5INCv0L3QsCwgNyDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLiDQldC60YjRgtC10LnQvS4gJyfQmtCw0L/RgNC40Lcg0LPQvdC+0LzRltCyJyc7ICAyKdChLtCu0YTQtdGA0L7Qsi4gJyfQndC+0LrRgtGO0YDQvScnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWc2YkI3YXFXcHR3NWxMbkFpWGtsT0ZwUWw0WDBOTEtqL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0M1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQqNC60YPRgNC60L4g0KLQuNC80L7RhNGW0LksIDkg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNC+0L/QtdC9LiAnJ9CS0LDQu9GM0YEnJyDQu9GPINC80ZbQvdC+0YAsICAgICAyKdCbLtCo0YPQutCw0LnQu9C+LiAnJ9CS0LXRgdC10LvQsCDQvNC+0LfQsNGX0LrQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWVKSjQ0WmJnVHJVVGRILXRCUEtHeWMxS18wcnJ5ajRfL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0NFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQrtGA0YfRg9C6INCv0L3QsCwgNyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCcLiDQmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwLCDRgtCyLjM2IOKEljEsINCGINGHLiwyKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuICcn0JLRgNCw0L3RltGI0L3RjyDQvNC+0LvQuNGC0LLQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9QVXVIMnF6YVFVTHlwdnV5M002US1mN3Z2aFpsQW54L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0NVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQkNC80ZbRhdCw0LvQsNC60ZbQvtCw0ZQg0ITQvNC10LvRjNGP0L0sIDEwINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QkdGW0LvQsNGH0LXQvdC60L4uJyfQntGB0ZbQvdC90ZbQuSDQtdGB0LrRltC3JycsIDIp0Jwu0JrQsNGA0LzRltC90YHRjNC60LjQuS4gJyfQk9GD0LzQvtGA0LXRgdC60LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xemZxa3lHNkJwWjNfMVhYZGZfRlZZT1dGbXBha2pXV1AvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0NlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQkNC90YLQvtC90Y7QuiDQktCw0YDQstCw0YDQsCwgMTIg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0J/Qu9C10LnRlNC70YwuINCh0L7QvdCw0YLQuNC90LAg0YDQtSDQvNCw0LbQvtGAXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFESmVIZjNmQXVaNTVQZjY1bU1BdHcyUGN0OTZkZmEtdC9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzQ3XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCQ0L3RgtC+0L3RjtC6INCS0LDRgNCy0LDRgNCwLCAxMiDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QnNCw0LnQutCw0L/QsNGALicn0JIg0LrQvtCy0LDQu9GM0L3RlicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsWHlLdXdNX0pneFlabDZlV2tBc2VVNnZOYVd6N3BZei9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzQ4XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCR0LDQsdGH0LDQvdGW0Log0JDQvdC00YDRltC5LCAxMCDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCULtCn0LjQvNCw0YDQvtC30LAuINCh0L7QvdCw0YLQuNC90LAg0YHQvtC70Ywg0LzQsNC20L7RgC4gMinQri7QkdGW0LvQutC+0LLRgdGM0LrQuNC5LiAnJ9Cg0L7Qt9C00YPQvNC4JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVIQXNOS2pjSmlCZ3hBZElMT3NqREVSSktRTXplcTdBL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNDlcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JHQsNC70YPRgtCwINCQ0LvRltC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEpINCVLtCT0YDRltCzLiAnJ9Ci0LDQvdC10YbRjCDQtyDQmdC+0LvRjNGB0YLQtdGA0LAnJywgMinQmy7Ql9Cw0LHQsNGA0LAuJyfQndGW0Ycg0Y/QutCwINC80ZbRgdGP0YfQvdCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9YR0YzbTQxSy1RTjhZMS1XX2o4NURyVGprazg4c1FYL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JHQsNGB0LjRgdGC0LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDEyINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0KQu0KjQvtC/0LXQvS4g0JLQsNC70YzRgSwg0YLQsi42NCDihJYxLCAyKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjywg0YLQsi42IOKEljFcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXNQV1pTUG40VU1KVmRmejczZ3JhRHdkd0l4eVhnakJZL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JHRltC70ZbQvdC60LXQstC40Ycg0J3QsNGC0LDQu9GW0Y8sIDEyINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jwu0JvQuNGB0LXQvdC60L4uINCV0LvQtdCz0ZbRjywyKdCaLtCn0LXRgNC90ZYuINCV0YLRjtC0IOKEljEg0YLQsi43NDBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUFSX1dXMENGU1NDWHpWQWZySFh1d0JBRC1fUUM4ajZXL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGNcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JHRg9C70YzQutC+0LLRgdGM0LrQsCDQnNCw0YDQuNC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCULtCn0ZbQvNCw0YDQvtC30LAuINCh0L7QvdCw0YLQsCDRgdC+0LvRjCDQvNCw0LbQvtGAXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFib3hkdGdBZGhCSUpkdGN4ZHpuWkhQLXE1ZmFxYTVRSy9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzRkXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCR0YPQu9GM0LrQvtCy0YHRjNC60LAg0JzQsNGA0LjQvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCaLtCT0LDQsdC10LsuICcn0JTQtdGA0LXQstC+INC20LjRgtGC0Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZlhaNk5kc042dTc4dEk2ZXJLRWpYMm9mZXNIQjJlYmgvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0ZVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQktCw0LrRg9C70LXQvdC60L4g0JDRgNGW0L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0JHQtdGA0LrQvtCy0LjRhy4g0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGC0LXQvNGDINCz0YDRg9C30LjQvdGB0YzQutC+0Zcg0L3QsNGA0L7QtNC90L7RlyDQv9GW0YHQvdGWICcn0KHQstGW0YLQu9GP0YfQvtC6JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNkdFhvVnpqRWwxWXFWQ2RCeXhLc1pkcUVqZnQxaHM2L3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JLQsNC60YPQu9C10L3QutC+INCQ0YDRltC90LAsIDEwINGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCU0LbQvtC/0LvRltC9Licn0JDRgNGC0LjRgdGCINC10YHRgtGA0LDQtNC4JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUdudGlZdkx6SHJVWElzV0RmZEhwNDAtdHQ1eVl1aWdxL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTBcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JLQsNGB0LjQu9GM0ZTQstCwINCS0LXRgNC+0L3RltC60LAsIDEyINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoC7Qk9C70ZbRlNGALiDQn9GA0LXQu9GO0LTRltGPINC00L4g0LzRltC90L7RgDsyKdChLtCU0LbQtdGA0LHQsNGI0Y/QvS4gJyfQqNCy0LjQtNC60LjQuSDRgNGD0YUnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUUJndGRodzJJUWVUSDZRRVluS0xHQmFsWDBLMnVwTjQvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1MVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQktC+0LnRgtC10L3QutC+INCb0ZbQu9GW0Y8sIDEwINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JsuINCo0YPQutCw0LnQu9C+Licn0J/QvtC90ZYnJywgMinQni7QoNC40LHQsNC70L7QstCwLiAnJ9Cd0LXQv9C+0YHQuNC00LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLUxfa0pIdTFQcGtQR1JDSl9FZnhGTEJibWM4Zk9Pd3EvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1MlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQktC+0LnRh9C10L3QutC+INCS0LvQsNC00LjRgdC70LDQsiwgMTEg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSkg0Jku0KEu0JHQsNGFLtCU0LLQvtCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YTQsCDQvNCw0LbQvtGAOyAyKdCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9INC00L4g0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xd3U1a2xYR0c3QmgyZlBsUjNZYmVNbFNLWkJUOFBSbk4vcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1M1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQktC+0YnQuNC90YHRjNC60LjQuSDQhtC70LvRjywgMTIg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCVLtCT0YDRltCzLiDQndC+0LrRgtGO0YDQvSwgMinQnC7QoNC40LzRgdGM0LrQuNC5LdCa0L7RgNGB0LDQutC+0LIuICcn0J/QvtC70ZbRgiDQtNC20LzQtdC70Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN2xiUzBMOTU2YU5aOUQwR1RJLXAtazM5ejRscGVoQzcvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1NFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQk9Cw0LvQtdGH0LXQsiDQhtCy0LDQvSwgMTEg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQntCx0YAuINCTLtCR0LXQtyfRj9C30LjRh9C90L7Qs9C+LiAnJ9Cd0ZbRhyDRj9C60LAg0LzRltGB0Y/Rh9C90LAnJywgMinQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9Cd0LXQsNC/0L7Qu9GW0YLQsNC90YHRjNC60LAg0L/RltGB0LXQvdGM0LrQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0LVo4MnZZa1ZGMXgyTnBucUsxX3hoQWYyYld1YVBRVi9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU1XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCT0LDQvNC30LDQu9GW0ZTQstCwINCX0LXQudC90LDQsSwgMTIg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQkdGW0LvQvtGA0YPRgS4g0L3QsNGALtC/0ZbRgdC90Y8gJyfQkdGD0LvRjNCx0LAnJywg0L7QsdGALtCULtCb0YzQstCwLdCa0L7QvNC/0LDQvdGW0LnRhtGPXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFkUXFHRnBoT0dvMFZwR29VZDR6NFUzZW45TFRjMTlway9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU2XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCT0LDQvNC30LDQu9GW0ZTQstCwINCX0LXQudC90LDQsSwgMTIg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JPQsNC50LTQvS4g0JzQtdC90YPQtdGCXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFXd184MDBKUHZINjlZdGpPTkVDSkg4VnRaX2Vaa2t5ay9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU3XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCT0ZbQu9GW0L3QsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTEg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCc0L7RhtCw0YDRgtCQ0YDRltGPOyAyKdCULtCT0YDQsNC00LXRgdC60ZYuJyfQnNC+0YDQvtC30LjQstC+LiDQoNC10LPRgtCw0LnQvCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmM0s1MEdWY3c4a3NkWWdSTXhWNjFhZFJBRkg1UEtNdy9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU4XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCT0L7RgNCw0Lkg0K/RgNC+0YHQu9Cw0LIsMTIg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCh0LrQvtGA0LjQuiAnJ9Cc0LXQu9C+0LTRltGPJycsICAgICAgICAgMikg0J8u0JHQsNC30LDQu9CwLiAnJ9Cf0L7RgtGW0LonJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVUNibjd4UHZFYnJIQ3BNVGhuQ0lqNVF0Z242clZTX2YvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1OVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQk9C+0YbRg9C70LXQvdC60L4g0JLRltC60YLQvtGA0ZbRjywgMTIg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtCR0LDRhS4g0JTQstC+0LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDQu9GPINC80ZbQvdC+0YAsIDIpINCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9IOKEljIxXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3MUlDTV83R2hyYW8xUk42dWcwWExvUk5KS29iYVJHUS9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVhXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCT0YPQutCw0YHRj9C9INCb0ZbQsNC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAu0KXQsNGH0LDRgtGD0YDRj9C9LiBcXFwi0JDQvdC00LDQvdGC0ZbQvdC+XFxcIlwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMklkQWZTaV93YVU2bHJOZlV2UDJIMHgwV083OGFNR2EvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSxcbiAgICB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVhYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPQutCw0YHRj9C9INCb0ZbQsNC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLtCl0LXQu9C70LXRgC4g0KHQvtC90LDRgtC40L3QsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWt0T1ZDM1RSX0FFNHVSYkc2Mk94TktWam9OSnFpdVBtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1YlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQk9GD0LvRj9GU0LLQsCDQhNCy0LAsIDEx0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCfLiDQl9Cw0YXQsNGA0L7Qsi4nJ9CV0LvQtdCz0ZbRjycnLCAyKSDQky7QktCw0LvQu9C10L3Qs9Cw0YPQv9GCLiAnJ9Ch0LrQtdGA0YbQuNC90L4nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcmJjbTdGX0JmQWVxTUV6ZlFoWjZmRjNZMjFhN3JZc3cvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1Y1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQk9GD0YLQvdC40LogINCa0ZbRgNC10L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0KjRltGC0YLQtS4nJ9Ci0LDQvdC10YbRjCAg0LPQvdC+0LzRltCyJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5pRHFOaUNKdTNDTFMzRUc1QldIdUJfQXE3djQ1UnMzL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JPRg9GC0L3QuNC6INCa0ZbRgNC10L3QsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0J4u0KHQvtC70L7QstGP0L3QtdC90LrQvi4nJ9Cf0L7QvdGWINCx0ZbQu9GPINGG0LjRgNC60YMnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaDdxMFlhWWl5NkE2czZCcHdfVHh0enJ3d1NfQXo5THgvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1ZVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQlNC+0YDQvtGI0LXQvdC60L4g0K7Qu9GW0Y8sIDEwINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JwuINCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAsINGC0LIuMzYg4oSWNiwg0IYg0Yc7IDIpINCGLtCR0LXRgNC60L7QstC40YcuINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuNDYg4oSWMTVcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUdsRkNMQzN4XzF0WkNPZm1OaE4wbTRUMFBPSllCVGpOL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JTRg9C00ZbQvSDQlNC80LjRgtGA0L4sIDExINGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALNCGLdCG0IYg0YcuOyAyKdChLtCf0YDQvtC60L7RhCfRlNCyLiAnJ9Ca0LDQt9C+0YfQutCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhibTR4LVZmekh6dXpCNGpUaGJzUGg4SWFDYTk0dHRCL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjBcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0ITRgNC80L7Qu9C10L3QutC+INCU0LDRgNC40L3QsCwgMTIg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEuINCR0LDRhS4g0JDRgNGW0Y8g0YDQtSDQvNCw0LbQvtGAXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1N002Q1hpeXNVZkp1dTZNLUF2Qjc3NFdlbjBBbnVaTi9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzYxXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCE0YDQvNC+0LvQtdC90LrQviDQlNCw0YDQuNC90LAsIDEyINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCR0ZbQu9Cw0YguICcn0JHQsNGA0LrQsNGA0L7Qu9CwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWhPUmY0dVZ2b1c1NHBUQ3hnSzJ6SW1neFl4SDQ3WW9vL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JfQsNCz0LDRlNCy0YHRjNC60LAg0KHQvtGE0ZbRjywgMTIg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QmtC70LDRgdGB0LXQvSAnJ9Cc0YPQt9C40YfQvdC40Lkg0LXRgdC60ZbQtycn4oSWMSwgMinQni7QmtC40LzQu9C40LouJyfQm9C10L7QvdGC0L7QstGW0LDQvdCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXcxVFBoOUpYc0FqZV9LcEU5UVBwNUl2MEV1am12akctL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjNcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0IbQstCw0L3QvdGW0LrQvtCy0LAg0JzQsNGA0ZbRjywgMTEg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCc0L7RhtCw0YDRgi4g0KHQvtC90LDRgtCwIOKEljE2LCDQhiDRh9Cw0YHRgtC40L3QsCwgIDIp0J4u0JPRgNC40LHQvtGU0LTQvtCyLiDQktCw0LvRjNGBXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYMXZoc1RJUGtJNXppczIySkhPWHhRVURkT0JlOUE5Ry9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY0XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQktGW0YDRgdCw0LLRltGPLDEwINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QpdC+0LTQvtGILicn0KfQtdGA0LLQvtC90LAg0YjQsNC/0L7Rh9C60LAnJywgMinQhi7QqdC10YDQsdCw0LrQvtCyLicn0JXQu9C10LPRltGPINC60LjRl9Cy0YHRjNC60LjRhSDQv9Cw0LPQvtGA0LHRltCyJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU03STFRSmJGa1dCUUh3SzFsSEtveW9FMzBsLVdjMTJtL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjVcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0IfQstC20LXQvdC60L4g0JDQtNCwLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli7QodC+0L3QsNGC0LjQvdCwINGB0L7Qu9GMINC80LDQttC+0YAsIDIp0Jwu0KHQutC+0YDQuNC6LiAnJ9Cd0LDRgNC+0LTQvdC40Lkg0YLQsNC90LXRhtGMJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtwbTZrME1DdHVqZzdzUEg5ZGNvZFkwa3oxQnJHRVg5L3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JrQsNC80LDQvdGH0Lgg0ITQu9C40LfQsNCy0LXRgtCwLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQsNC70ZbRgdGC0YDQsNGC0L7Qsi4nJ9Ca0L7QvdC40Log0JPQvtGA0LHQvtC60L7QvdC40LonJywgMinQri7QktC10YHQvdGP0LouICcn0J3RltC20L3RltGB0YLRjCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFtbFdhTFlzRDhma0JRSGdkclgtUmZOQ2tkNndSclBrTy9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY3XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0LDRgNCw0YjQutC10LLQuNGHINCl0YDQuNGB0YLQuNC90LAsIDExINGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGA0LUg0LzRltC90L7RgCwgMinQnC7QlNGA0LXQvNC70Y7Qs9CwLiAnJ9Ch0LrQtdGA0YbQvicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFQkdoTklwdEpTZWkwR1pMS3BzZnlhSWhpM1VhZTBjSC9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY4XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0ZbRhtC10YDQsCDQkNC70ZbQvdCwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0JTQtdCx0Y7RgdGB0ZYgJyfQoNC+0LzQsNC90YLQuNGH0L3QuNC5INCy0LDQu9GM0YEnJywgMinQkS7QpNGW0LvRjNGGLiAnJ9Ch0LrQtdGA0YbQvicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOb3Zzb2dfdzUycHpHa2ZKMmhaeGlodjMzQzJjU2YwSi9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY5XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0L7RgNC+0LvRjCDQhNC70ZbQt9Cw0LLQtdGC0LAsIDEwINGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQn9GW0YHQvdGPINC20LDQudCy0L7RgNC+0L3QutCwJyc7IDIp0Jsu0KjRg9C60LDQudC70L4uINCf0YDQtdC70Y7QtNGW0Y9cIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtickdsOF9JaGZxbmprdlR2b1doNzltZ205cFE1a1RKL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGC0LvRj9GA0LXQstGB0YzQutCwINCu0LvRltGPLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmS4g0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINGB0L7Qu9GMINC80LDQttC+0YAsINCG0YcuXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGQVdISEtRNW94MEVUSkx2dXJyUmdaMmRPbTF2dEZrZS9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZiXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0L7RgtC70Y/RgNC10LLRgdGM0LrQsCDQrtC70ZbRjywgMTEg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiJ9CT0LDQvdC00LfRjycnLCDQvtCx0YAu0IQg0JLQtdCy0YDQuNC60LBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtJdmRzdklyeGVvODE2ZC1fTVY1bmJiY3ItYU9aaEVwL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmNcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGC0L7QstCwINCc0LDRgNGW0Y8sIDEwINGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0JrQu9GO0YfQsNGA0YzQvtCyLicn0KjRg9GA0LDQu9GUJycsIDIp0KQu0JzQtdC90LTQtdC70YzRgdC+0L0uJyfQn9GW0YHQvdGPINCx0LXQtyDRgdC70ZbQsicnLCDRgtCyLjE5IOKEljJcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVkxY1dfMlppd0JFTjBZYzFLcldXbmNYMzc2emdhRDVCL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JrRgNC40LLQvtCx0LDQsdC60L4g0JrRgdC10L3RltGPLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmy7QqNGD0LrQsNC50LvQvi4gJyfQktC10YHQvdGP0L3RliAg0LrRgNCw0L/Qu9C40L3QutC4JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWRJSmdrTElPMmU3bGNOcHVBUmp4bXVkdzAzeGpuYzMyL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmVcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JrRgNC40LLQvtCx0LDQsdC60L4g0JrRgdC10L3RltGPLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnS7QmtCw0YDQv9C10L3QutC+LiDQldGC0Y7QtCAg0YDQtSDQvNGW0L3QvtGAXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFCNC1FYlJZTy1iY0NqZnVwcGVIWFNodjVEUXp1aTloQS9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZmXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0YPRgtC60L7QstGB0YzQutCwINCb0LDRgNC40YHQsCwgMTIg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQlS7Qk9GA0ZbQsy4gJyfQndC+0LrRgtGO0YDQvScnLCDRgtCyLjU0IOKEljQsIDIp0KIu0JrRg9C70ZbRlNCyLiAnJ9Cb0LXQt9Cz0ZbQvdC60LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMWNtUUJkc20yZXB3WlNfbVVKeDNncDFXNTgyWnlXZDcvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3MFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQm2nQt9C+0LPRg9CxINCQ0YDRgdC10L0sIDEwINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQky7QodCw0YHRjNC60L4uJyfQoNC10LPRgtCw0LnQvCcnLCAyKdCfLtCX0LDRhdCw0YDQvtCyLicn0KHRgtCw0YDQvtCy0LjQvdC90LAg0LHQsNC70LDQtNCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFTRmtXRnZXbl9VR05KSzdjN1oxTGxKMk5hc005S3NnL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JvQsNC90YHRjNC60LjQuSDQhNCy0LPQtdC9LCAxMCDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQoNCw0L3QutC+0LLQsCDQvNC+0LvQuNGC0LLQsCcnLCDRgtCyLjM5LCAyKdCGLtCR0LXRgNC60L7QstC40YcuINCi0L7QutCw0YLQsCDQu9GPINC80ZbQvdC+0YBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZuUEZMczV4SEN0MFRMMnNkMUU5V1d5aFRCOGtHVHVoL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JvQtdCy0LDQvdC00ZbQstGB0YzQutCwINCc0LDRgNGC0LAsIDEwINGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCSLtCR0LDRgNCy0ZbQvdGB0YzQutC40LkuICcn0KPQutGA0LDRl9C90YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRlZqeEFlQjNkT3pKcEFURFh5SS0xQUJ0Uml6anpqb2QvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3M1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQm9C10LLQsNC90LTRltCy0YHRjNC60LAg0JzQsNGA0YLQsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0K8uINCh0ZbQsdC10LvRltGD0YEuINCV0YLRjtC0INGC0LIuIDc2IOKEljJcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMThLN3JnUnpqQ3FaLV81RVdyMEVvRTVKbG5UeWhnWlM0L3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JvQtdC30LAg0JDQvdC90LAsIDExINGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9IOKEljIwLCAyKdCfLtCX0LDRhdCw0YDQvtCyLiAnJ9Cg0L7QvdC00L4t0LPQsNC70L7QvycnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUd2Yyc0ozXzlBcjNvT1RtWldLdjZxOFNNYTlmR2EtcC9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc1XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCb0LjQutC+0LLQsCDQktCw0YDQstCw0YDQsCwgMTEg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQki7Qk9GW0LvQu9C+0LouJydCaWxsIGJhaWxleScnLCAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Co0LDRgNC80LDQvdC60LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZEU1TGNmVi1UOFFoTFhpQWZuOHN4TEVNZWN2Z1MtaE8vcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3NlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQm9GW0LvRltC6INCc0LDRgNGW0Y8t0JzQsNCz0LTQsNC70LjQvdCwLCAxMSDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCo0L7Qv9C10L0uICcn0JDRgNC60YPRiCDQtyDQsNC70YzQsdC+0LzQsCcnINC80ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YAsIDIp0Jwu0JrQvtC70LXRgdGB0LAuICcn0KHQutC10YDRhtC40L3QvicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFxdGljZHVBUVFtNzJOY3k4ZS1zdDZua2pxd0JyRlNUZS9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc3XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCc0LDQutCw0YDQtdCy0LjRhyDQkNC90LTRgNGW0Lkt0J7Qu9C10LrRgdCw0L3QtNGALCAxMSDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4g0KLRgNC40LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDRgNC1INC80LDQttC+0YAsIDIp0Jou0KfQtdGA0L3Rli4g0JXRgtGO0LQg4oSWNSwg0YLQsi4yOTlcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlWdUJQZnc0SG5jUEprSm4yeU5aWnc4VVhsVVhKSFZjL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzhcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JzQsNGG0ZbQsdC+0YDRgdGM0LrQsCDQkNC90L3QsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmS4g0JHQsNGFLiDQlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGB0ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YAsICAgIDIpINCkLiDQr9C60LjQvNC10L3QutC+LiAnJ9CV0LvQtdCz0ZbRjycnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTcll0dEpGZGl6c3VCZTB5TnNLck5EZ0pVUF9BaWhhTi9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc5XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCc0LXQu9GM0L3QuNC6INCc0LjRhdCw0LnQu9C+LCAxMCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli4g0YHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsIDIp0JIu0JrQvtGB0LXQvdC60L4uICcn0JTQvtGJ0LjQuicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjMHBXakdvZ0RhRVlDUkNza3pjcTlWZFVsSHktaHNoRy9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdhXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCc0LXRgNC60YPQu9C+0LLQsCDQnNCw0YDRltGPLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQlC7Qp9GW0LzQsNGA0L7Qt9CwLtCh0L7QvdCw0YLQsCDRgdC+0LvRjCDQvNCw0LbQvtGAOyAyKSDQnC4g0JbQtdGA0LHRltC9LiDQktCw0LvRjNGBXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqNXBFRDd3UTNBSFAwcE54OVZPNFBwOGRyaWw5YU16Zi9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdiXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCc0LjQs9Cw0LvRjtC6INCg0ZbQsNC90L3QsCwgMTEg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnLCAgIDIp0JIu0JPRltC70LvQvtC6Licn0JrQsNGA0L3QsNCy0LDQuyDQsiDQoNGW0L4nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcDVTTU9lQmFVejBqelg4QTBsNlg0Tjl5dnR3RzB3OG0vcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3Y1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQnNC40YDQs9C+0YDQvtC0INCS0YHQtdCy0L7Qu9C+0LQsMTIg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCa0YPQu9Cw0YMuINCh0L7QvdCw0YLQuNC90LAg0YTQsCDQvNCw0LbQvtGALNCGINGHLjsgMinQnC7Qm9C40YHQtdC90LrQvi4gJyfQldC70LXQs9GW0Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa3B4c3VSSm5sM3Q2NGxiTzh2aVZnZkdzd19hTWtSU20vcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3ZFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQnNC+0YDQvtC30L7QstCwINCi0LXRgtGP0L3QsCwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JHQtdC90LTQsC7QodC+0L3QsNGC0LjQvdCwXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE1dTRvSzR1SXY5MjNCYmh3SHVReGMya2Iyelc0REltRy9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2RkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQvtGA0L7Qt9C+0LLQsCDQotC10YLRj9C90LAsIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QqNC10LLRh9C10L3QutC+IFxcXCLQktC10YfRltGAXFxcIlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZ5LUwwNEVBZmNxN0kxYlJweDVwRThseWRJQnlUM1NGL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3ZVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQnNGD0L3RgtGP0L0g0J3QsNGC0LDQu9GW0Y8sIDEwINGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuINCi0LXQvNCwINC3INCy0LDRgNGW0LDRhtGW0Y/QvNC4LCAgICAgICAyKdCbLtCo0LjRgtGC0LUuJyfQhtGB0LrRgNC4JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZqTkhjV1dndG1iYWtVWG1wYzNoN2Zob041Z3BzOVJWL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2ZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J7QsdC+0YDQutGW0L3QsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTEg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCVLtCT0YDRltCzLicn0JzQtdC70L7QtNGW0Y8nJywgICAgMinQmy7QqNGD0LrQsNC50LvQvi4gJyfQkdCw0LPQsNGC0LXQu9GMJycg4oSWNVwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xY2gyd3Z6eHRSN0VSMi02aURMVWd2Q0FxdVVpdjhkVmYvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4MFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQn9C10L3QtNGO0YAg0KHQvtGE0ZbRjywgMTEg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQni7QlNCw0YDQs9C+0LzQuNC20YHRjNC60LjQuS4nJ9CS0LDQu9GM0YEnJywgMinQnC7QodC60L7RgNC40LouJyfQndCw0YDQvtC00L3QuNC5INGC0LDQvdC10YbRjCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFzREc2d25ncEtIY01TT2FPaV9ZbFVHa3VjYWRCQXBCSi9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzgxXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCf0LXRgNC10YLRj9GC0YzQutC+INCQ0L3QsNGB0YLQsNGB0ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0JPRgNGW0LMuICcn0KLQsNC90LXRhtGMINGW0Lcg0JnQvtC70YzRgdGC0LXRgNCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBfTGd2LWZMT2QzeVBBbU5tV0NkOFlOM2xTd1hITEtHL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J/QtdGA0LXRgtGP0YLRjNC60L4g0JDQvdCw0YHRgtCw0YHRltGPLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCcLtCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAg4oSWNCwg0YLQsi4zNlwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xM3dzSS1zc1RQeDllYTBxWkhGWXN2c1AybnVQYlNESjcvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4M1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQn9C+0LfQvdGP0Log0JLQtdC90ZbQsNC80ZbQvSwgMTAg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQlC7Qn9GD0LvQtdC90LouINCh0YLQsNC60LrQsNGC0L4uIDIpINCbLtCR0LXRgtGF0L7QstC10L0uINCS0LXRgdC10LvQsC3RgdGD0LzQvdCwXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF2c2JjMkd2SFlBcmdnUDU3LVo1d0ZsR3djaE1wTnAzRS9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg0XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCf0YDQvtC60L7Qv9GO0Log0JzQsNGA0LjQvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCGLtCR0ZbQu9Cw0YfQtdC90LrQvi4g0JXQutGB0L/RgNC+0LzRgi4gMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQsNC90LXRhtGMXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFRbjlEUUwyTkhKZU9mR0hESFl3YXVaNjJ2aW5yZmxBeS9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg1XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCg0LXRiNC10YLQvdGW0LrQvtCy0LAg0JvRjtC00LzQuNC70LAsIDExINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0J4u0JHRltC70LDRh9C10L3QutC+Licn0J7RgdGW0L3QvdGW0Lkg0LXRgdC60ZbQtycnLCAyKdCeLtCf0L7Qu9GM0L7QstC40LkuJyfQn9C+0LvRjNC60LAt0LHQsNCx0LrQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfWGZDSzhGSzFGTG14YmtFQjhWVGRmYTk5MHFKN3hSQS9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg2XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCg0L7RgtCw0YAg0JrQsNGA0ZbQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQkdCw0YDQutCw0YDQvtC70LAnJywgMikg0JQu0J/QtdGI0LXRgtGC0ZYuICcn0J/RgNC10YHRgtC+JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTdNRi0wejZ1QWttS1dscFl5U1dHSDhzYk9pWi0tbjlKL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODdcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KHQsNCy0YfQtdC90LrQviDQnNCw0YLQstGW0LksIDEx0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmy7QkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LAg0LzRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwg0IYg0YcuLCAyKdCGLtCp0LXRgNCx0LDQutC+0LIuICcnINCV0LvQtdCz0ZbRjyDQutC40ZfQstGB0YzQutC40YUg0L/QsNCz0L7RgNCx0ZbQsicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFKX0hRazZJUzJQWlBaVVA5dVlPUDZ3a1F0UjNvcG82Qi9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg4XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCh0LDQutCy0LAg0JLQsNC70LXRgNGW0Y8sIDExINGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JvQsNC90YHQtdCy0LjRhy4nJ9Cf0YDQtdC70Y7QtNGW0Y8nJywgMinQnC7QlNCy0L7RgNC20LDQui4gJyfQlNC20LDQt9C+0LLQuNC5INC10YLRjtC0Jycg0LvRjyDQvNCw0LbQvtGAXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExdHNkTHZrMjViRDhGU0RZVFhYbnlwUjI5Z2tQdHhYcy9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg5XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCh0LDRgNGC0LDQvdGW0Y8g0JTQsNCy0LjQtCwgMTAg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQlS7QktCw0LPQvdC10YAu0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsICAgMikg0KAu0JLQsNC90LTQsNC70LsuJyfQktC+0LTQvtGB0L/QsNC0JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW1yRVNZWklpUDFpV2VuR2laRFVJT2IwdXNDSkswZFQ4L3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KHQutC+0YDQvtGF0L7QtNGM0LrQviDQhNCy0LPQtdC90ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4gJyfQhtCy0LDRgdGMINCz0YDQsNGUINC90LAg0YfQtdC70YzQvicnLCAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Ci0L7QutCw0YLQsCcnINGB0ZYg0LzRltC90L7RgFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRWlmMFpfTWlBUVZwemJjelZTampidmgxZ1V4ZV9FM1gvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4YlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodC+0LvQvtC90LXQvdC60L4g0JDQvdC90LAsIDEwINGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCSLtCa0L7RgdC10L3QutC+LiAnJ9Cf0LXRgtGA0YPRiNC60LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdEN4cDRVYlpGWmVGTXJ3NkRZTmk5VllIWVN2WXdOUUkvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4Y1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodC+0LvQvtC90LXQvdC60L4g0JDQvdC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCkLiDQkdGD0YDQs9C80Y7Qu9C70LXRgC4gJyfQkdCw0LvQsNC00LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRU9INnpod293NGFRWmZKZXMyOEx4aUlCc2g1SGJmR3UvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4ZFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodC+0YDQvtC60LAg0JzQsNGA0ZbRjywgMTMg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCULtCm0LjQv9C+0LvRli4g0J/RgNC10LvRjtC00ZbRjyDRgtCwINGE0YPQs9CwINGA0LUg0LzRltC90L7RgCwgMinQmi7Qk9GD0YDQu9GW0YIuICcn0KjRgtC+0YDQvCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0ZnBfZ0JSWjFmbGotTEdxZGU2RWR4UW1LVGxlcDBqUC9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzhlXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCh0YLQtdGG0Y7QuiDQntC70LXQutGB0LDQvdC00YDQsCwgMTIg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QlNC10LHRjtGB0YHRli4gJydEb2N0b3IgR3JhZHVzIGFkIFBhcm5hc3VtJycsIDIp0KQu0KjQvtC/0LXQvS4gJyfQktCw0LvRjNGBJycg4oSWOVwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xenhKV3lDbXM3a1poc3BOQkFsemFjVW5BTFc4RUpBTTcvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4ZlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodGC0L7RgNC+0LbRg9C6INCh0YLQsNC90ZbRgdC70LDQsiwgMTIg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCVLtCT0YDRltCzLiAnJ9Cf0L7QtdGC0LjRh9C90LAg0LrQsNGA0YLQuNC90LrQsCcnIOKEljEsIDIp0JAu0JrQvtGBLdCQ0L3QsNGC0L7Qu9GM0YHRjNC60LjQuS4gJyfQn9C+0LvQvtC90LjQvdCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJ0SzB2VXJBb0lsR2JVSjVIYVVHYlFQbDF6Vm1US0tKL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTBcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KLQutCw0YfQtdC90LrQviDQnNCw0LnRjywgMTIg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLiDQkC4g0JzQvtGG0LDRgNGCLiDQodC+0L3QsNGC0LAgMTYg0JogNTQ1LNCG0YcuOyAyKdCGLtCo0LDQvNC+LicnINCS0LXRgdC90Y/QvdC60LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbTZac1Zhck5QcmNmeW1PM0JrdW1kS3hMSnlCVHh4NS0vcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5MVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQo9C90LPRg9GA0Y/QvSDQntC70LXQutGB0LDQvdC00YDQsCwgMTIg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J4u0JPRgNC40LHQvtGU0LTQvtCyLiDQktCw0LvRjNGBLCAgICAgICAgICAyKdCcLtCh0ZbQu9GM0LLQsNC90YHRjNC60LjQuS4gJyfQodGC0YDRltC80LrQuNC5INC/0L7RgtGW0LonJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdjJMUlZEaEZKMnpYTl81d1Z4QWNoN1g4bDBXUThyT2cvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5MlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpNC10LTQvtGA0YfQtdC90LrQviDQhNCy0LPQtdC90ZbRjywgMTAg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0Jsu0JHQtdGC0YXQvtCy0LXQvS4gJyfQkdCw0LPQsNGC0LXQu9GMJycsINGC0LIuMTE5XCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFaUEhHUURBeWZ0b0FXMGFLT1Qyc25mYThNamdhbGNaUS9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzkzXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0YDRh9C10L3QutC+INCE0LLQs9C10L3RltGPLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCR0ZbQu9Cw0YguJyfQodC60LXRgNGG0L4nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaDFpc0d3dmVXMXVpVzNVMnhlTzJXV3VGeHZTU3ZRLUwvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5NFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpNC10LTQvtGC0L7QstCwINCa0LDRgtC10YDQuNC90LAsIDEyINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEpINChLiDQkdC+0YDRgtC60LXQstC40YcuJyfQldGC0Y7QtCcnINGE0LAg0LTRltGU0Lcg0LzRltC90L7RgCwgMikg0KQu0KjQvtC/0LXQvS4gJyfQndC+0LrRgtGO0YDQvScn0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFlUUJYeTZraExjaTRmSk5HOEJhQ00xWkZMa0tqME5Sdy9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzk1XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCk0LXQtNGH0YPQuiDQkNC70ZbQvdCwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAuINCU0ZbQsNCx0LXQu9C70ZYuINCh0L7QvdCw0YLQuNC90LAg4oSWMSwg0IbQhtCGLtGHOyAyKdCU0LYuINCb0LDRgdGCLicnINCh0LDQvNC+0YLQvdGW0Lkg0L/QsNGB0YLRg9GFJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWpyRmJ2ZGdHMk5sVS1iNDE2LXVSMGJpckRyVy1QbklIL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KTQtdC00Y7QuiDQktC+0LvQvtC00LjQvNC40YAsIDEyINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jou0Jwu0JLQtdCx0LXRgC7QodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgDsgMinQni7Qk9C+0L3Rh9Cw0YDRg9C6LiAnJ9CX0LXQu9C10L3QuNC5Jycg0ZbQtyDQt9Cx0ZbRgNC60LggJyfQktC10YHQtdC70LrQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFIX0l3ODl4amYxbzI3UHRQX25lUUk3OEJ5UDY1eUV2WS9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzk3XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCl0L7RgyDQltGD0LksIDEyINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQny7Qhi7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9CW0L7QstGC0LXQvdGMJycsIDIp0JUu0JLQtdCy0YDQuNC6LiAnJ9CT0LDQvdC00LfRjycnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYWndXWHQ2aFFBU3VZZnRTTnI1c1RQRXJzdEZVVjU4Ui9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzk4XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCn0LjQtiDQndGW0L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7Qk9Cw0LnQtNC9INCh0L7QvdCw0YLQsCDihJY0LCDQhtGHOyAyKdCbLtCU0YzRj9C60L7QvdC10L3QutC+LiAnJ9Cf0YDQvtCx0LDRh9C10L3QvdGPINGDINC80LDQvNC4JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFJVXIwaC1ONTI5MEI2S2FJbVhrSkhtU0Rpa19VYXdlL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTlcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KfRltC00LXRgNCwINCh0LDQvNGD0LXQu9GMINCj0LzQtdGFLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpICDQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9Ch0YLQsNGA0L7QstC40L3QvdCwINGE0YDQsNC90YbRg9C30YzQutCwINC/0ZbRgdC10L3RjNC60LAnJy4gMikg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5Licn0JrQu9C+0YPQvdC4JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXBMWUFtUkJYd3pJbjF4M1hIaHZMcmVfQU5aSlQycDh3L3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOWFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KjQsNGC0LDQu9C+0LLQsCDQhtC70L7QvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQuINCT0ZbQu9C70LXRgC4gJyfQnNCw0LvQtdC90YzQutC1INGA0L7QvdC00L4nJzsgMinQki4g0JrQvtGB0LXQvdC60L4uICcn0JLQsNC70YzRgScnINGB0ZYg0LzRltC90L7RgFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVWc1NmNiWTFDVUJoTzEtdFpmdWNSQXVBSGJJRkt6OWMvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5YlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQqNC10LLRh9C10L3QutC+INCc0LDRgNCz0LDRgNC40YLQsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QkdCw0LvQsNC90LTRltC9LiDQktCw0YDRltCw0YbRltGXLCAgICAgICAgICAyKdCiLtCR0YDQsNGD0L0uICcn0KLQsNC90LXRhtGMINCy0ZbRgtGA0YMnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcGtCQnFmUy1wbUZ4YjVuTmRBY2g5V1hVcEdxc1V4YTgvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5Y1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQqNC10L/QtdGC0YzQutC+INCe0LvQtdC60YHQsNC90LTRgCwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KQu0KjQvtC/0LXQvS4g0JzQsNC30YPRgNC60LAs0YLQsi42NyDihJYgNCwgMinQlS7Qk9GA0ZbQsy4gJyfQotCw0L3QtdGG0Ywg0ZbQtyDQmdC+0LvRjNGB0YLQtdGA0LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVmJoVmpXclVpdFRvLS04M0k1RldOeWRRclBDM1lHeVIvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5ZFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQqNGD0LzRgdGM0LrQsCDQndCw0LTRltGPLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLicn0KLQtdC80L3QsCDQutGW0LzQvdCw0YLQsCcnLCAyKdCSLtCd0LXRg9Cz0LDRgdGW0LzQvtCyLtCh0LrQtdGA0YbQvlwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xazY2LVdyeTYzUzh4N3Q0OEdXVWpZMGU2TzF4cWVVb3QvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTM5ZVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQkNGA0YPRgtGO0L3Rj9C9INCb0ZbQtNCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCZLtCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDihJYyMCwg0IbRhy47IDIp0Jsu0KjRg9C60LDQudC70L4uJyfQhNC80LXQu9GPJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUJqNTY4Y25SZERaTUtyTVlmTFQ4a0NiSG00eWZYYjJrL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzOWZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JHQsNC30LjQu9GO0Log0J3QsNGC0LDQu9GW0Y8sIDE2INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0K8u0KHRltCx0LXQu9GW0YPRgS4g0J/RgNC10LvRjtC00ZbRjyDQu9GPINC80ZbQvdC+0YAsMinQhi7QkdC10YDQutC+0LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPINGE0LAg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR2FXZVpiS2M2U2lJdWRpWVFWQmdGeGFpT085U0Vza0EvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhMFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQkdGW0LvQvtCz0YPQsSDQkNC90YLQvtC9LCAxMyDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy7QkdC10YLRhdC+0LLQtdC9LiDQm9C10LPQutCwINGB0L7QvdCw0YLQsCDRhNCwINC80ZbQvdC+0YAsINCGINGHLlwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZkhVbXRNV09qR045cDV4YVNyY0lPdlFFdS1rb1RHYVQvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhMVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQkdGW0LvQvtCz0YPQsSDQkNC90YLQvtC9LCAxMyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQni7QodGC0YDQvtC6LiAnJ9Cc0ZbRgdGP0YfQvdCwINGA0LDQv9GB0L7QtNGW0Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZnFuTk9Gdk5uVlVjSTFMVVotVHFnRnpDbDVYRkVfc2kvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhMlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQkdGW0YDRg9C6INCi0LDQvNGW0LvQsCwgMTQg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYu0KHQvtC90LDRgtC40L3QsCwg0YLQsi4yNuKEljMsIDIp0K8u0KHRltCx0LXQu9GW0YPRgS4gJyfQr9C70LjQvdCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTRfQjI2TFB5elFqa19hQlp4R0ZXSXE4Uno2S1JDQm5YL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTNcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JHQvtGA0L7QstGW0LrQvtCy0LAg0ITQu9C40LfQsNCy0LXRgtCwLCAxNSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCcLtCR0L7QsdC10YAuICcn0JTRltCw0LzQsNC90YLQvtCy0LAg0YDQsNC/0YHQvtC00ZbRjycnLCAyKdCkLtCh0LDQuS4gJyfQp9C+0YDQvdCwINC30LXQvNC70Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcE8xRkdxQi1LNnR0aDhwUFJNQkNhbF9yc2NlU014MjAvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhNFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQkdGD0YDRg9GF0ZbQvdCwINCa0LDRgtC10YDQuNC90LAsIDEzINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jku0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINC80ZYg0LzRltC90L7RgCwg0IbRhy4sIDIpINChLtCd0ZbQutGW0YLRltC9Licn0J3QsNGB0L/RltCyJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJwTEg2M1N6TlRIZU15WEhrN3JDaGVzd1NjS3U5X2NIL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTVcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JLQsNGI0YPRgNGW0L3QsCDQki4sIDEzINGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCSLtCa0L7RgdC10L3QutC+LiAnJ9Cf0L7QtdC80LAt0JvQtdCz0LXQvdC00LAnJywgMikg0J4u0KHQsNGA0LDRgtGB0YzQutC40LkuJyfQmtC+0LvQvtC80LjQudC60LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeTlrdXNndHFYZ0lnZkZjMTZsXzVxdmdGX0p5NjJ2WDcvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhNlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQktC40YjQvdC10LLRgdGM0LrQsCDQkNC90L3QsCwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JYuINCR0ZbQt9C1Licn0JTQt9C40LPQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZTi0yeXAxb2NSVkUxUmRYcTJMN3NqOXFfQTh5djVQTy9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E3XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCS0LjRiNC90LXQstGB0YzQutCwINCQ0L3QvdCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQm9Cw0LLQsNC70LvQtS4gJyfQnNC10YLQtdC70LjQuicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2MXRGcVRGSm9qYTJPVkR2SEtUdElXUGpOUS0yTGZ4MS9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E4XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCT0LXRgNCw0YHQuNC80YfRg9C6INCc0ZbQu9GU0L3QsCwgMTUg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jwu0KLQsNGA0LDQstC10YDQtNGW0ZTQsi4gJyfQodC/0L7Qs9Cw0LQnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQW8wd094NTBVY0tMYVg4Z3BFM1c5dDY1REM2S3Bock0vcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhOVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQk9C10YDQsNGB0LjQvNGH0YPQuiDQnNGW0LvRlNC90LAsIDE1INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCeLtCR0ZbQu9Cw0YguJyfQotCw0L3QtdGG0Ywg0LvRj9C70YzQvtC6JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhuYmZqQm16Y2xONC10bDZ0OUVHRG0zeWpMR2p3cFI1L3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JPQvtGA0LTRltGU0L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgMTkg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS7Qn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINGA0LUg0LzRltC90L7RgCwg0JTQotCaLdCGLCAyKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjyDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW94QmU2TjNhbHRGcDNVa3RGNUZkR1lGcmRYeUhESFdmL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JPRgNC10YnQsNC6INCc0LDRgNGW0Y8sIDE0INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7Qp9C10YDQvdGWLiDQldGC0Y7QtCDQu9GPINC80LDQttC+0YA7IDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuJyfQldC70LXQs9GW0YfQvdC40Lkg0L/RgNC10LvRjtC0JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUl3dUxyZFBha3hIMWY2WlBmbXc3ZDd2R2NoS2pvVTZtL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWNcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JTQtdC50L3QtdCz0LAg0JrQsNGA0ZbQvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLtCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQsCDihJYxNCwg0IYg0YcuOyAyKSDQoS7QltC00LDQvdC+0LIuICcn0J/RgNC10LvRjtC0JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWM1aVdDOWI1SjNUdzNPV1RES1N3TTk1Q0ZURkJseTR0L3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JTRj9GH0YPQuiDQl9C+0YDRj9C90LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0KDQsNC90L7QuicnLCAyKdCdLtCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTc1ZySUZSZml0THZ6TTM3LVVXbmZHTmNzajA3T3VfMi9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FlXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCG0YnRg9C6INCa0LDRgtC10YDQuNC90LAsIDE1INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCaLtCn0LXRgNC90ZYuINCV0YLRjtC0IOKEljEs0YLQsi43NDBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5zY3FTNWUxcFV3dGRJT1NPSWVYQVZIUkdqRnVfM01uL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0IbRidGD0Log0JrQsNGC0LXRgNC40L3QsCwgMTUg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC7QqNC+0L/QtdC9Licn0JvQsNGA0LPQvicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFb0tlU3I3QkllTHcwS3NqQ3RwMURFREpfOFhnZ3hucS9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2IwXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90L7Rh9C60L4g0JDQvdGC0L7QvdGW0L3QsCwgMTMg0YDQvtC60ZbQsi5cIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Jku0KEu0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINC00L4g0LTRltGU0Lcg0LzRltC90L7RgCDQlNCi0Jot0IYsIDIpINCaLtCn0LXRgNC90ZYuINCV0YLRjtC0IOKEljYg0YLQsi43NDBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXVUcU9SSkl4STY1dUtxNC0yUnFPWG5WdVhqb1FQS2tTL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JrQsNGA0LXQu9GW0L3QsCDQmtGA0ZbRgdGC0ZbQvdCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUu0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDRgNC1INC80ZbQvdC+0YAsINCU0KLQmi3QhtCGXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGbWhXMk9sOXRsLWZWN1JPYXR6M21FbmIxQzBWd0FieC9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2IyXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0LDRgNC10LvRltC90LAg0JrRgNGW0YHRgtGW0L3QsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JAuINCc0L7RhtCw0YDRgi4g0KHQvtC90LDRgtCwIOKEljgsINCG0YcuXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqRnQwemtuR2E4dnZYeERSS1FvNXgxWWR6Y3ItSXhIUi9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2IzXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0LDRgdGM0LrRltCyINCQ0L3QtNGA0ZbQuSwgMTQg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAu0JvQtdGI0LPQvtGA0L0uINCV0YLRjtC0INGE0LAg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNHVLWlVHN2wxUkV3RGtYa3ZSNmZZQmpRaVRQWkMza28vcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiNFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQmtCw0YHRjNC60ZbQsiDQkNC90LTRgNGW0LksIDE0INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCaLtCU0LXQsdGO0YHRgdGWLiAnJ9Cc0ZbRgdGP0YfQvdC1INGB0Y/QudCy0L4nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU1BOTEk4VnZGaEt6cFJ3TjktaUJSdVRkZFBmSnVVZS0vcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiNVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQmtC40YDQuNC70L7QstCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxMyDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQoi7QkdGA0LDRg9C9LiAnJ9Co0YLQvtGA0LwsINGJ0L4g0L3QsNCx0LvQuNC20LDRlNGC0YzRgdGPJycsIDIpINCfLtCX0LDRhdCw0YDQvtCyLiAnJ9Cg0L7QvdC00L4t0LPQsNC70L7QvycnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFXSGotLWhhWW5FN3BXdGZIQm95cFhuaG03aTBpbnN2Ry9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2I2XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0L7QvdC00YDQsNGC0Y7QuiDQkNC70ZbQvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCeLtCU0Y7QsdGO0LouINCS0LDRgNGW0LDRhtGW0ZcsIDIpINCeLtCR0ZbQu9Cw0YguJyfQoNC+0LfQtNGD0LwnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUndmU1F0VGZ3V3BMRHpZeUdmbUZ5T0tkeV9Tcks3U1ovcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiN1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQmtC+0YHQtdC90LrQviDQkNC70ZbRgdCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCQLtCa0LDRgNCw0LzQsNC90L7Qsi4gJyfQl9GA0YPQudC90L7QstCw0L3QuNC5INGF0YDQsNC8JycsIDIp0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuINCf0YDQtdC70Y7QtNGW0Y8g4oSWNywg0YLQsi4yM1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLTZrWXJ0UXVIWk5rNUNoQWFXTHY3SVJaemsyMldkZGgvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiOFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQmtC+0YfRg9Cx0LXQuSDQr9GA0L7RgdC70LDQsiwgMTQg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQntCx0YAuINCELtCS0LXQstGA0LjQutCwLicn0JzQvtC70LTQsNCy0YHRjNC60ZYg0L3QsNGB0L/RltCy0LgnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOUtqS0hmSS11aWo2ajNtTkNZWjI2TExaTW9CYllrOXIvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiOVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQmtC+0YfRg9Cx0LXQuSDQr9GA0L7RgdC70LDQsiwgMTQg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQu0JrRg9C70LDRgy4g0KHQvtC90LDRgtC40L3QsCDihJY1NVwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUjdId1hwTGJPMXRpejNLek1nMzV0NE4zQm14N0FCT0wvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiYVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQmtGD0LvRltC60L7QstGB0YzQutCwINCa0LDRgtC10YDQuNC90LAsIDE0INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jku0KEu0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINGE0LAg0LTRltGU0Lcg0LzQsNC20L7RgCwg0JTQotCaLdCGLCAyKSDQoS7QkdC+0YDRgtC60LXQstC40YcuINCV0YLRjtC0IOKEljksINGC0LIuMTVcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpRanNxR3BXcVdZa2VqUFlOX1RHLUUwbU1BOGNTai1yL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JzQsNC60LDRgNC10LLQuNGHINCd0LDRgtCw0LvRltGPLCAxNSDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDRgNC1INC80ZbQvdC+0YAsINCU0KLQmi3QhiwgMinQni7QkdC+0YDQtNGO0LPQvtCy0LAuICcn0KPQutGA0LDRl9C90YHRjNC60LjQuSDRgNC+0LzQsNC90YEnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaXJWQlZTMFdEdWZXWkMyWUVCNTd1VU1MV2J3OEJMblIvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiY1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQnNCw0LvRj9GA0YfRg9C6INCE0LvRltC30LDQstC10YLQsCwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QkdC+0YDRgtC60LXQstC40YcuINCV0YLRjtC0IOKEljksINGC0LIuMTUsIDIp0KQu0KjQvtC/0LXQvS4nJ9CT0YPQu9GP0L3QutCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9tMGhmVmdyYS1WU3g2WVhoSmJwWndMUmJlMGE4QkUtL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0L3QsNGB0Y7QuiDQotCw0YDQsNGBLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCfLtCX0LDRhdCw0YDQvtCyLiAnJ9Ci0L7QutCw0YLQsC3Qv9GA0LXQu9GO0LTRltGPJycsIDIpINCVLtCT0YDRltCzLiAnJ9Cd0L7QutGC0Y7RgNC9JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWdnaHd5SDJBeC1BZVZ1ZWxiU1dzUzBvSW9BeFNfdUpEL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmVcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J7RgdC70LDQvCAg0ITQu9C40LfQsNCy0LXRgtCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQm9GO0YLQuNC5Jycg0ZbQtyDRhtC40LrQu9GDJyfQn9C+0YDQuCDRgNC+0LrRgycnLCAgICAgMikg0J0u0JvQsNCz0L7QtNGO0LMuICcn0KLQsNC90LPQviDQvNGA0ZbQuScnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFtcTQtWkJZWm1sbkdQekpZMWpSX1FWcjBHejc1YU1sWC9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2JmXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCf0LDQvdGW0LzQsNGIINCG0YDQuNC90LAsIDE1INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jku0JPQsNC50LTQvS7QodC+0L3QsNGC0LAg0LTQviDQvNCw0LbQvtGAICjihJY1MCksINCGINGHLjsgMikg0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuJyfQnNGD0LfQuNGH0L3QuNC5INC80L7QvNC10L3RgicnLCDRgtCyLjE2IOKEljRcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWhfS1FfV3B2bWpaRnNYRTRYVF9NZGYyM3NrNEs5R1RzL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzBcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J/QtdGC0YDRg9GB0Ywg0J3QsNGC0LDQu9GW0Y8sIDEzINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7Qm9GW0YHRgi4nJ9Cg0L7QvNCw0L3RgScnLCAgICAgMinQlS7Qk9GW0LvQu9C+0LouJyfQktCw0LvRjNGBLdC10YLRjtC0JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU8xNV9DdWp3dHRhRjFCeFhnVzg0NHc2QUJVUWt1amZiL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J/RgNC40YnQtdC/0LAg0JDQvdC90LAsIDE0INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jwu0KjQvNGW0YLRhi4g0JTQttCw0LfQvtCy0LAg0ZbQvdCy0LXQvdGG0ZbRjyDihJYxMywgIDIpINCeLtCU0LXQstGW0YEuJyfQqdCw0YHQu9C40LLQuNC5INC00LXQvdGMJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUpLTUlsdW4zUmVoRVJxS2FTSHBsNlNKNmV5dXVxM2FXL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J/RgNC+0LrQvtC/0YfRg9C6INCe0LvQtdC60YHQsNC90LTRgNCwLCAxNyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QktC10YDQvNC10L3QuNGHLiAnJ9Cn0L7RgNC90L7QsdGA0LjQstGG0ZYnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRk5MN2U2cWg4U09LbFV4TW9SdEE3clNZOE5oYW5sWC0vcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjM1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQn9GA0L7QutC+0L/Rh9GD0Log0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDE3INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCkLtCo0L/QuNC90LTQu9C10YAuINCh0L7QvdCw0YLQuNC90LAs0IbQhtCGINGHLlwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xS0dNQ2NONl9CV1BkaXd6clJJdUEzTmR4VWVKYndJMWovcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjNFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQn9GD0YfQutC+INCh0L7RhNGW0Y8sIDEz0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC4g0JTQstC+0YDQttCw0LouINCV0YLRjtC0IDIgKDIt0Lkg0LfQvtGI0LjRgiksIDIp0JIuINCS0LXRgNC80LXQvdC40YcuICcn0KfQvtGA0L3QvtCx0YDQuNCy0YbRlicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0V2ZzRnY0QW4yRmJWX3VGamhxUkVJODctSWZ6UVViOC9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M1XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCg0LDQtNC60L7QstGB0YzQutCwINCQ0LvRltC90LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQk9GA0ZbQsy4g0JXRgtGO0LQg0L/QsNC8J9GP0YLRliDQpC7QqNC+0L/QtdC90LBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV9hQk44SmdybUZtVmZ1VllXNHMwbGVOTll4ZlA1OVNvL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KDQsNC00LrQvtCy0YHRjNC60LAg0JDQu9GW0L3QsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0KQu0JvRltGB0YIuICcn0KHRg9C80L3QuNC5INGB0YLQtdC/JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW4ybVNhUE53clZqbGNQQW9oVmlZcm8yNFd6aWt0QjBqL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzdcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KDQuNCx0LrRltC90LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDE1INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JwuINCi0LXRgNC10YnRg9C6LiAnJ9Ck0YPQs9CwIExvY2tkb3duJyc7IDIp0Jwu0JHQvtCx0LXRgC4nJ9Ce0L/RltCy0L3RltGH0L3QsCDRgNCw0L/RgdC+0LTRltGPJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXNQVkVCMlZJdF9vRFpNMHBtQlVRNWpVb1VCTml2VHdlL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzhcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KDRg9GB0YHRgyDQk9Cw0L3QvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JMu0JLQvtC70LvQtdC90LPQsNGD0L/Rgi4gJyfQpdCw0YDQsNC60YLQtdGA0L3QsCDQvyfRlNGB0LAg0YMg0YTQvtGA0LzRliDQtdGC0Y7QtNCwJycsIDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0JXQu9C10LPRltGPJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFFZUZpVVhfQXZSY1JNRy00aEJBM2k4YzQ1RXNaSDltL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzlcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KDRg9GJ0LjQvdGB0YzQutCwINCa0YHQtdC90ZbRjywgMTQg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS7Qk9GA0ZbQsy4gJyfQnNC10LvQvtC00ZbRjycnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwNzJKTnd2RW02Q2R1QV9HZVBzQUJ1NV9ZazZNMDJ6SC9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NhXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCg0YPRidC40L3RgdGM0LrQsCDQmtGB0LXQvdGW0Y8sIDE0INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDQtNC+INC80ZbQvdC+0YBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5Ea19qS081U0hibnNhWEFUQTEtWXdnS2U0YkFtSWRuL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2JcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KHQstC40L3RhtC40YbRjNC60LAg0JXQvNGW0LvRltGPLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQstCw0YHQvdC10LLRgdGM0LrQuNC5Licn0JTRg9C80LrQsCcnOyAyKdCULtCa0YDQsNC80LXRgC4gJyfQotCw0L3RhtGO0Y7Rh9C40Lkg0YHQutGA0LjQv9Cw0LvRjCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhbGd6X291a1J4VDJrUEFGeVhvWC1RaklBMzRwSUNjbS9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NjXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCh0LLQuNGA0LjQtNGO0Log0JTQtdC90LjRgSwgMTYg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4g0KLRgNC40LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDihJYxMiwgMinQky7Qk9Cw0LvQuNC90ZbQvS4gJyfQkNGA0ZbRjycnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0NkdGZ0hhWEwzeEhWRlp3LWhySHJ4azQ5Nzdsck5naC9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NkXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCh0LXQu9GW0LLQsNC90L7QstCwINCQ0L3QvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0JXQu9C10LPRltGH0L3QuNC5INC/0YDQtdC70Y7QtCcnINGB0ZYg0LzRltC90L7RgCwgMinQnC7QlNCy0L7RgNC20LDQui4nJ9CU0LbQsNC30L7QstC40Lkg0LXRgtGO0LQnJyDihJY2ICgyINC30L7RiNC40YIpXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFKdWNOdE8xRDkza3FMOHdvSmJrX0JKaURqZGdHeHNRNi9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NlXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCh0LXQvNC10L3QvtCyINCG0LLQsNC9LCAxNSDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS7QlNC+0LPQsC4gJyfQodC+0L3QtdGCJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUwwVV9Ib3VLUlA0eTNnUFpiVkxrenVteVlEMmV6RTJEL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2ZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KHQtdC80LXQvdC+0LIg0IbQstCw0L0sIDE1INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCGLtCc0L7RiGXQu2XRgS4gRdGC0Y7QtCDihJY4LNGC0LIuNzBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV9md1kzcmtwY0lsV2pjMVJ5X1l0aWh1LW93V3AybWdrL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDBcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KHQuNC80L7QvdC10L3QutC+INCi0LDQvNGW0LvQsCwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtCwIOKEljE5INGC0LIuNDksINCGINGH0LDRgdGC0LjQvdCwLCAyKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkgLicn0J/RltC00YHQvdGW0LbQvdC40LonJyDQtyDRhtC40LrQu9GDICcn0J/QvtGA0Lgg0YDQvtC60YMnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUG1FamdPVjJZWVppUklVQnBURElIanVyLWx6Ul9mbHYvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkMVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodC90ZbQs9GD0YAg0JDQvdC90LAsIDEzINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkdCl0LDQstCw0YjRli4gJyfQqNGC0L7RgNC8JycsIDIp0KQu0KHQsNC5LiDQktCw0YDRltCw0YbRltGXXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFobV94REhPWlR6VUNTNFVaSXNvN01IWjNpYmt2QUliYi9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2QyXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCi0LXRgNC90L7QstCwINCa0YHQtdC90ZbRjywgMTQg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0IYu0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjyDihJYxMCwgMinQlS7Qk9GA0ZbQsy4gJyfQn9C+0YXRltC0INCz0L3QvtC80ZbQsicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqSm9ZOGtkemVVS2w1elU1Z0xlNWR1OGxoR2FsQklZQi9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2QzXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCi0LrQsNGH0YPQuiDQktGW0LrRgtC+0YDRltGPLCAgMTQg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQpC4g0JzQtdC90LTQtdC70YzRgdC+0L0uICAnJ9Cf0ZbRgdC90Y8g0LHQtdC3INGB0LvRltCyJycsIDIpINCSLiDQk9GW0LvQu9C+0LogICcn0JLQsNC70YzRgS3QtdGC0Y7QtCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFLaTVDLXRhbmp4eTJNeTdrWjZrV2dZRVdNQU9FWUZjOS9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q0XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCi0YDQsNGH0YPQuiDQntC70LXQutGB0LDQvdC00YAsIDEzINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8uINCX0LDRhdCw0YDQvtCyLiAgJyfQoNC+0L3QtNC+LdCz0LDQu9C+0L8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOERsTjFiNEsxc1hyZHZ2YjNBOHBIbUpGdlh3YnpZcmQvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkNVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQotGA0LDRh9GD0Log0J7Qu9C10LrRgdCw0L3QtNGALCAxMyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQlC7QpNGW0LvRjNC0LiAnJ9Cd0L7QutGC0Y7RgNC9Jycg4oSWNVwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTDNKeG9XUHI2anhNNVEzcHhPMEJCWDJVNFVpRm5FX0gvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkNlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpNC10LTQvtC90Y7QuiDQntC70LXQutGB0LDQvdC00YAsIDEzINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg4oSWMjMsINGE0LAg0LzQsNC20L7RgCwg0IbRhy47IDIp0Jku0KEu0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwIOKEljIzLCDQlNCi0Jot0IZcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWkyZnVPUFZNcVFmSU5DVDJaSmJUSlhjY3o1QWZiX2g1L3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDdcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KXQstC+0YHRgtC+0LLQsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCb0ZbRgdGCLtCu0L3QsNGG0YzQutC40Lkg0LXRgtGO0LQg4oSWMiwgMinQni7QmtC+0LfQsNGA0LXQvdC60L4t0JAu0JrQvtGBLdCQ0L3QsNGC0L7Qu9GM0YHRjNC60LjQuS4gJyfQntC5INGC0LgsINC00ZbQstGH0LjQvdC+LCDQtyDQs9C+0YDRltGF0LAg0LfQtdGA0L3RjycnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHbnNBWnN1Z2RxQkxMNmhLQ0dsbGVBOFpLX3FUMThGai9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q4XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCl0YDQsNC80LXQvdC60L7QstCwINCQ0L3QsNGB0YLQsNGB0ZbRjywgMTMg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtC+0YDQvtCy0ZbRhtC40L0uJyfQoNGD0YHQsNC70L7QvdGM0LrQsCcnLCAyKdCcLtCh0LrQvtGA0LjQui4nJ9CW0LDRgNGC0ZbQstC70LjQstCwINC/J9GU0YHQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDMHVTcGVTeWJmZGFJWFlsbVl3TXJaNUpVc2RiN1JiOS9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q5XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCl0LXQu9C80LDQvSDQktGW0L7Qu9C10YLQsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCj0JPRltC70LvQvtC6Licn0J/Rg9GA0YXQsNGO0YfQuCDQsiDRhdC80LDRgNC60LDRhScnLCAyKdCSLtCl0L7QtNC+0YguJyfQp9C10YDQstC+0L3QsCDRiNCw0L/QvtGH0LrQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6dXlFR3QzY3ZaM3NWaktuQTNDSlRaVkwydkVWZ1hXeS9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2RhXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCo0LjQsdCw0L3QvtCy0LAg0JLQsNGA0LLQsNGA0LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9IOKEljIsINGC0LIuOVwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcjFqVVJGS0M1NTV3S01SN0NsU3ltdFRHX0RXd3ZndlovcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkYlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQqNC40LHQsNC90L7QstCwINCS0LDRgNCy0LDRgNCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQoS7QkdC+0YDRgtC60LXQstC40Ycu0JXRgtGO0LQg4oSWNywg0YLQsi4yOVwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xS1RVWVAzZ1duNFBUVEdHMVlfX0ZLckkxczVHa1hCb08vcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNkY1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQkNC90YLQvtC90Y7QuiDQnNCw0YDRltGPLCAyMSDRgNGW0LpcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jwu0JzQtdGC0L3QtdGALiAnJ9CU0LLRliDQutCw0LfQutC4JycsIDIp0IYu0KjQsNC80L4uICcn0KLQvtC60LDRgtCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQUZWRUczTTNnVTF5SWFJYzVZbmNSaFVJQWx3ZjhBVmovcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2RkXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCR0L7QsdGA0ZbRiNC+0LLQsCDQhtC90LXRgdCwLCAxNiDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKSDQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg0YDQtSDQvNCw0LbQvtGALCDQhiDRhy47ICAgMikg0KEu0J/RgNC+0LrQvtGEJ9GU0LIuICcn0KHQsNGA0LrQsNC30LwnJyzRgtCyLjE3IOKEljFcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOUpIdUVTUVZITTZicHVwUHN2ZFVuNGVsUVJiZ08yM2UvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2RlXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCR0Y/QvdC+0LLQsCDQlNCw0YDQuNC90LAsIDE2INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSwg0YLQsi4yN+KEljIsICAgICAgMinQlC7Ql9Cw0LTQvtGALiDQldGC0Y7QtCDQtNC+INC80ZbQvdC+0YBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLUNCY2VIRWJLZ2UzMlg2TkQxRl96RlZRLTJSYjQ0WXcvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2RmXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCS0L7Qt9C90Y7QuiDQkNC90LPQtdC70ZbQvdCwLCAxNyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K8u0KHRgtC10L/QvtCy0LjQuS4g0J/RgNC10LvRjtC00ZbRjywgICAgICAgMinQry7QodGW0LHQtdC70ZbRg9GBLiDQldGC0Y7QtFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5N1FIdEd1a0pvb2NTMEJfZGl3ekp1LVZRWThXQjlvcC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTBcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JPRg9C6INCh0L7RhNGW0Y8sIDE2INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CT0YPQvNC+0YDQtdGB0LrQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtQUVRfdVR4YUlsYWxxeF9hYXBTcGlkMlNaZ1A3anE2L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlMVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQk9GD0Log0KHQvtGE0ZbRjywgMTYg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JwuINCb0LjRgdC10L3QutC+LiAnJ9CW0YPRgNCx0LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOdWhkbE9xWGVQcjhleGRNcDBnWFRBbDZGZmtna0R1Ti9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JPRg9C70L7QstCwINCQ0L3Qs9C10LvRltC90LAsIDE4INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQuINCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9INGC0LIuNDgg4oSWMSwgICAgIDIp0J8uINCh0LDQvdC60LDQvS4g0KLQvtC60LDRgtCwXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpuaDlSVS1wQ3Azckh4cXlWdVA0NEQ0Q2tZbTU5R2pOL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlM1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQlNCw0L3QvtCy0YHRjNC60LAg0J7Qu9GM0LPQsCwgMTcg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCR0LDRgNCy0ZbQvdGB0YzQutC40Lkg0J/RgNC10LvRjtC00ZbRjyDihJY0ICcn0KXQvtGA0LDQuycnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVlMZDJGUDVJeERuZUljT01XZ1dUZ0NmdWJCT1lKUVByL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlNFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQlNCw0L3QvtCy0YHRjNC60LAg0J7Qu9GM0LPQsCwgMTcg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi7Qm9GP0LTQvtCyINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuMzkg4oSWNFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF3b2dWWnY4V1Z5UXRMRnNvcHdhUkJ4MVJRT3hsekNGSS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTVcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JTRg9C00L3QuNC6INCU0LDRgCfRjywgMTcg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JHQsNGA0LLRltC90YHRjNC60LjQuS4nJ9Cb0LjRgdGC0L7QuiDQtyDQsNC70YzQsdC+0LzQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWxfSEUzcjBPNXVzak9IY051TXBORFlnX2c2ZDJTMzV0L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlNlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQlNGD0LTQvdC40Log0JTQsNGAJ9GPLCAxNyDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi7QlNC10LHRjtGB0YHRli4gJycg0KDQvtC80LDQvdGC0LjRh9C90LjQuSDQstCw0LvRjNGBJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcUxncTlBZkQ2WVhDeVBReUZlamx5WjhCT051U29OXzQvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2U3XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0YDRjtC60L7QstCwINCc0LDRgNGW0Y8sIDE1INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLiAnJ9Cf0YDQuNC80YXQuCDQvNC+0YDRjycnLCAyKdCkLtCo0L7Qv9C10L0u0JXRgtGO0LQg0YLQsi4xMCDihJY0XCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMS1jYm8zQloxRVBOWW02TlMxZUNNbV8ySFR6SEo3QmVrL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlOFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQmtGD0LvRltGIINCf0L7Qu9GW0L3QsCwgMTUg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlS7Qk9GA0ZbQsy4nJ9Ca0L7Qu9C40YHQutC+0LLQsCcnLCAyKdCGLtCf0LDQtNC10YDQtdCy0YHRjNC60LjQuS4gJyfQodC60LXRgNGG0LjQvdC+JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTmFtVlZGZkFkUmZhRnVBMXVLamx0OVFJV2dNaVNCeTYvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2U5XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCc0YPQt9C40YfQtdC90LrQviDQnNCw0YDRltGPLCAxOSDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDihJYzMSwgMdGHLjsgMinQpC7QqNC+0L/QtdC9LtCV0YLRjtC0LNGC0LIuMTAg4oSWNVwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPLWFoZllKTmJGZjVmU093U1NwZmZJV1dwbmlCdWJLOC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J7Qu9GW0LnQvdC40Log0J7Qu9C10LrRgdCw0L3QtNGALCAxOCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JYu0JHRltC30LUt0JIu0JPQvtGA0L7QstGW0YYuINCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRgtC10LzRgyDQtyDQvtC/0LXRgNC4ICcn0JrQsNGA0LzQtdC9JycsIDIp0Jsu0KDQtdCy0YPRhtGM0LrQuNC5LiDQn9GA0LXQu9GO0LTRltGPINGE0LAg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEzSnlsUGREV2dWejZRU0hSR1ZKdDdGaGRhUmVsQ0hTRC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KHQvNC40Log0JDQvdC90LAsIDE3INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiDQldGC0Y7QtC3QutCw0YDRgtC40L3QsCDRgtCyLjMzIOKEljUsINGB0L7Qu9GMINC80ZbQvdC+0YBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xazdva0J1eU1zRmFSdDRHd3dYVVNnWUNoNURkWTZNTjkvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VjXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCh0LzQuNC6INCQ0L3QvdCwLCAxNyDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4g0J/RgNC10LvRjtC00ZbRjywg0YLQsi4gMzIg4oSWMTIsINGB0L7Qu9GMINC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTFlISFZLdVVJaXNhZEUyZm16d1l6bXdzUy1Vd1Z4VlIvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VkXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCi0ZbRhdC+0L3QvtC6INCE0LPQvtGALCAxNyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLicn0KHQutC10LvRliDRg9GJ0LXQu9C40L3QuCDQo9GHLdCa0L7RiCcnINC3INGB0Y7Rl9GC0LggJyfQmtGA0LjQvNGB0YzQutGWINC90LDRgNC40YHQuCcnLtGC0LIuOCwgMinQpC7Qm9GW0YHRgi7QotGA0LDQvdGB0YbQtdC90LTQtdC90YLQvdC40Lkg0LXRgtGO0LQg4oSWMTAsINGE0LAg0LzRltC90L7RgFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4bjNUZk5INkdGQkJRbzF2WlpOblJSVnFidGpHR3VnMi9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWVcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KTQsNGJ0LXQstGB0YzQutC40Lkg0KLQsNGA0LDRgVwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4gJyfQldGC0Y7QtC3QutCw0YDRgtC40L3QsCcnLCDRgtCyLjMzICg1KVwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFlcVRQWGxfUmhaUU9kVnItbGhVUW1sT004Y29DNkZvSy9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KTQsNGJ0LXQstGB0YzQutC40Lkg0KLQsNGA0LDRgVwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy7QoNC10LLRg9GG0YzQutC40LkuINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuNCAoMilcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLV9ib01ub1luazc0eER6UXk2UWxDcVZ4SVAzajRzSHgvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2YwXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCk0LXRgdC40Log0J3QsNC30LDRgNGW0LksIDE2INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QkdC+0YDRgtC60LXQstC40YcuJydMeXJpY2EgTm92YScnLNGC0LIuNTkg4oSWMyw0OyAyKdCkLtCb0ZbRgdGCLtCi0YDQsNC90YHRhtC10L3QtNC10L3RgtC90LjQuSDQtdGC0Y7QtCDihJY4ICcn0JTQuNC60LUg0L/QvtC70Y7QstCw0L3QvdGPJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYzBzajRBTXVEeEhBcG1HVDlXU2htakpIYkVIUnpKZEMvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2YxXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCu0LfQu9C+0LLQsCDQm9GO0LHQvtCyLCAxNyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKSDQmi7QlNC10LHRjtGB0YHRli4gJyfQkNGA0LDQsdC10YHQutCwJyfihJYxLCAyKSDQmS7QkdGA0LDQvNGBLicn0IbQvdGC0LXRgNC80LXRhtGG0L4nJywg0YLQsi4xMTcg4oSWMlwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMQURJbldwbS1qaGMxRmJSdWRncXdDTUd0elhRREJNUy9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JfQsNGU0YbRjCDQnNCw0YDQuNC90LBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCh0LrQvtGA0LjQui4nJ9CS0LDQu9GM0YEnJyDQtyDQn9Cw0YDRgtC40YLQuCDihJY1XCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFtbFp6blpib3hoenhFQlRKNGdVbUV0RTBKWWdRZ2RoL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmM1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQl9Cw0ZTRhtGMINCc0LDRgNC40L3QsFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9CU0YPQvNC60LAnJywg0YLQsi41OVwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFQYVVwLWFxUWRDcUJ0MzU2NjJ5TndKa2hhTk9BWE5faC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JvQvtCz0LLQuNC90L7QstGB0YzQutC40Lkg0ITQstCz0LXQvdGW0LlcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JQu0J/RgNC40YLRgdC60LXRgC4gJyfQkdC70Y7QtyDQn9GW0LrQsNGB0YHQvicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWUyXzRpc1F6bHVjTFI3a0JaWC1DSHhncVlyQnhKUlp3L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmNVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQm9C+0LPQstC40L3QvtCy0YHRjNC60LjQuSDQhNCy0LPQtdC90ZbQuVwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7Qn9GA0L7QutC+0YQn0ZTQsi4g0KHQvtC90LDRgtCwIOKEljMsINGC0LIuMjhcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRExoVDlZd1I1STljWnh6ZE5vZTIyRndTOGpwSTRZVnMvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y2XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCc0LjQutC40YLRjtC6INCQ0L3QsNGB0YLQsNGB0ZbRj1wiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC7QoNCw0LrQvtCyLiAnJ9Ca0L7QvdGG0LXRgNGC0L3QuNC5INC10YLRjtC0JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQzhhNlRQUk0yY2FRZlRPQTZ6R0h2dUlqR1NvTDdDMWIvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y3XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCc0LjQutC40YLRjtC6INCQ0L3QsNGB0YLQsNGB0ZbRj1wiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0Jku0KEu0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINC00L4g0LzRltC90L7RgCwg0JTQotCaIC3QhtCGXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXdycWRiX2tlMktjaF9DZkJjbU5SSDJNNTgwUHRaUUExL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmOFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQndCw0LfQsNGA0LXQvdC60L4g0JrRgdC10L3RltGPXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCGLtCS0L7Qu9C60L7QstCwLiAnJ9Cd0LDRgdGC0YDQvtGXJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xT0E4cnZONnd3ZHBPVnkxRFZEdDF6cS00cGtlaVNyM3gvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y5XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCd0LDQt9Cw0YDQtdC90LrQviDQmtGB0LXQvdGW0Y9cIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JHQsNGFLiDQkNC70LXQvNCw0L3QtNCwXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBxdFVSV2QzYWFzY3EyZ3dOSHhNLUZFVHlRSExCOHREL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmYVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodC10YDQvtCyINCS0LvQsNC00LjRgdC70LDQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLiDQkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0LTQviDQvNGW0L3QvtGALCDQlNCi0Jot0IbQhiwgMinQpC7QqNC+0L/QtdC9LiDQkdCw0LvQsNC00LAg4oSWMSwg0YLQsi4yM1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhdG41eWlFY1hnalZuRktmTTRRV0FVUzR6X1VWVEpfcS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KLQsNGA0LDRgdC+0LIg0JLQu9Cw0LTQuNGB0LvQsNCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuICcn0JXRgtGO0LQt0LrQsNGA0YLQuNC90LAnJywg0YLQsi4zOSDihJY5LCAyKdCkLtCo0L7Qv9C10L0uICcn0JHQsNC70LDQtNCwJycsINGC0LIuMjMg4oSWMVwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5TlpfdEV5ME8yblJYakNsdGRfdmRXTDNTTXVCTmFDTS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmNcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JPRgNC10LHQtdC90Y7QuiDQky7Qni5cIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7Qn9GA0L7QutC+0YTRjNC10LIuINCh0L7QvdCw0YLQsCDihJYyLNCGINGHLjsyKSAgINCkLtCb0ZbRgdGCLicn0JXRgtGO0LQg0LfQsCDQutCw0L/RgNC40YHQsNC80Lgg0J/QsNCz0LDQvdGW0L3RlicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNoVVlJWVA5bmdvUVplaG1DYnpQNUYzYkpBS0ZoM3NOL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmZFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQmtC+0L3QtNGA0LDRgtGO0Log0Jwu0J4uIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCgLtCo0YPQvNCw0L0uICcn0KDQvtC80LDQvdGBJycsINGC0LIuMjgsIDIp0JIu0JrQvtGB0LXQvdC60L4uICcn0JrRg9GA0LDQvdGC0LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGT2I0MVBzbXFXTzRueU9Ea09kb01UNFNzUHA0SFg5eC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmVcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0L3QsNGB0LXQvdC60L4g0JAu0J4uIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiDQn9GA0LXQu9GO0LTRltGPINGB0L7Qu9GMINC00ZbRlNC3INC80ZbQvdC+0YAsIDIp0JIu0KTRltC70ZbQv9C10L3QutC+LiDQotC+0LrQsNGC0LBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVkxYRUx1WmNJNlFpMmdybHdhVS11RXdsTHYxZVNFa1gvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59XTtcblxubGV0IGNvbmNlcnRtYXN0ZXJzID0gW1xuICAgIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmYWFzZFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQqNC10LLQtdC70YzQvtCy0LAg0ITQu9GW0LfQsNCy0LXRgtCwLCAyMCDRgNC+0LrRltCyLlwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiDQkNGA0ZbRjyDQm9C10L3RgdGM0LrQvtCz0L4sIDIpINCTLtCl0LDQt9Cw0L3QvtCy0LAuIFxcXCIg0KPQt9C00L7QstC2INCy0YPQu9C40YbRliDRhdC+0LTRgyDRj1xcXCJcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvQ1dYMGVSUFRDWVlcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmYWFzXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCX0LDQutCw0LvRjtC20L3QsCDQni7QkVwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQky7QktC10L3Rj9Cy0YHRjNC60LjQuS4g0JrQvtC90YbQtdGA0YLQvdC40Lkg0L/QvtC70L7QvdC10Lcg0YDQtSDQvNCw0LbQvtGAXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3MzY2xYTFQzNGhZXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTNmZmFhczFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JfQsNC60LDQu9GO0LbQvdCwINCeLtCRXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCWLtCc0LDRgdC90LUuXFxcItCg0L7Qt9C00YPQvFxcXCJcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvZ0R5VUNiYW5lQmtcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0L7QsdC30LDRgCDQndGW0LrQvtC70YwsIDE0INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQu0JrRgNC10LnRgdC70LXRgC4nJ9Cc0LDQu9C10L3RjNC60LjQuSDQktGW0LTQtdC90YHRjNC60LjQuSDQvNCw0YDRiCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWt1U1IwVm1PTWlxSWo5WVIwdTNsdk96cTRKRzVhTFk4L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDAwXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0L7QsdC30LDRgCDQndGW0LrQvtC70YwsIDE0INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0JXQu9GM0LPQsNGALicn0KHQsNC70Y7RgiDQutC+0YXQsNC90L3RjycnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFnSTdYbGpfU0xRcWwyUGk2RVRBaFNBWlRLTE1qa0JuL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDAxXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCh0LDQsdC+INCd0LXRgdGC0L7RgCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtGA0L7Qu9C7LiAnJ9Cf0L7Qu9GM0LrQsCDQstGW0YHQu9GO0YfQutCwJycsIDIp0JIu0KbQuNCx0ZbQvSjQv9C10YDQtdC60Lsu0JAu0KbQsNGA0LXQvdC60L4pLiAnJ9Cb0LjRgdGC0L7QuiDQtyDQsNC70YzQsdC+0LzQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTRQUjVldnJVSVJhUzFWRlV2dTBzNjlITUg3eFMzV2lJL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDAyXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0ITQstCz0LXQvdGW0Y8sIDkg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0JHQtdGC0YXQvtCy0LXQvS4gJyfQkdCw0LHQsNC6Jycs0L7QsdGALiDQkC4g0KjRg9Cy0LDQu9C+0LLQsFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpcjJhUktjbzgyTnd6UjJGUUg2QXBaVkhRWllyMEw3eS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwM1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCE0LLQs9C10L3RltGPLCA5INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCR0LXRhi4gJyfQn9C+0LTRltC70YzRgdGM0LrRliDQstC40LrRgNGD0YLQsNGB0LgnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFxSlE5QUlXajQ4cEpUTUJXZm8zaDd6NkpsS0pIOTgwbi9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwNFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodGC0LDRgNGG0LXQsiDQkdC10L3QttCw0LzRltC9LCAxMSDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQli7QnNCw0YHRgdC90LUuICcn0KDQvtC30LTRg9C8Jyc7IDIp0JUu0KDQuNCx0LrRltC9LiAnJ9Ck0L7RgNC80YPQu9CwIDEnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMNmJ4RHlzTjB5MkdEU05uUlhxR0VGYkhSN2VTLWl4cy9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwNVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQktC70LDRgdGO0Log0J3QsNC30LDRgCwgMTgg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QlNC+0L3QvtGC0ZYuINCQ0YDRltGPJydPIGRlbCBtaW8gYW1hdG8gYmVuJycsMinQlS7Qk9GA0ZbQsyzQky7QpS4g0JDQvdC00LXRgNGB0LXQvSAnJ0plZyBlbHNrZXIgZGlnJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMl9NRlBVMzlidEpRS3ZTdDJSWXpqaVUwSGFZc2E0T2cvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JTRj9GH0LXQuiDQhtC+0LDQvdC90LAsIDE30YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QkC7QnNC+0YbQsNGA0YIu0JDRgNGW0Y8nJ1JpZGVudGUgbGEgY2FsbWEnJywgMinQpC7QndCw0LTQtdC90LXQvdC60L4sINCGLtCk0YDQsNC90LrQvi7QoNC+0LzQsNC90YEgJyfQp9C+0LPQviDRj9Cy0LvRj9GU0YjRgdGPINC80LXQvdGWINGDINGB0L3RlicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVRYlFLYldpdkNiLWdPUWtjY0lDTDVBUFFqZ1dsZTl3L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA3XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0LLQsNGI0LAg0K/QvdCwLCAxNiDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JrQstCw0L3Rhi4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwg0IYt0IbQhiDRhy47IDIp0JIu0J/QvtC/0L8uICcn0KDRg9GB0YHQutC40Lkg0LLQtdGH0LXRgCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9wTDQxbUxIMTBCbnIxZU15ek9FeHN3RkpvVFpfOGNTL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA4XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0L7Qu9C+0LTRltC5INCQ0L3RgtC+0L0sIDE4INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4g0KDQvtC80LDQvdGBJyfQk9C+0YDQvdC40LzQuCDRgtC40YXQviDQu9C10YLQtdC70LAg0LTRg9GI0LAg0L3QtdCx0LXRgdCw0LzQuCcnLCAyKdChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CV0LvQtdCz0ZbRjycnLNGC0LIuM+KEljEsINC+0LHRgNC+0LHQutCwINC00LvRjyDQstGW0L7Qu9C+0L3Rh9C10LvRliDRgtCwINGELdC90L5cIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbFFJekRPaVpwLUVkWGx5MTBTVm00ZGlPajVXQ1NrM1ovcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDlcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JrQvtC90Y7RiNC10Log0KHQvtGE0ZbRjywgMjEg0YDRltC6XCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCi0LDQutGC0LDQutGW0YjQstGW0LvRli4g0KHQvtC90LDRgtCwINC00LvRjyDRhNC70LXQudGC0Lgg0ZYg0YTQvtGA0YLQtdC/0ZbQsNC90L4uXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUhYRS1XYmxVMC1IeXdnVnpDdW5RbmlRVUNVTlhHbE5OL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBhXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0L7QvdGO0YjQtdC6INCh0L7RhNGW0Y8sIDIxINGA0ZbQuiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQu0JrQvtC80LvQtdCyLiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNHE3OFhLcGRGZzY2VlNXa0FacTBWZVJ1S2FUY0pVcHUvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J/Rh9C10LvRltC90YbQtdCy0LAg0JDQtNGA0ZbQsNC90LAsIDE1INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QnNC+0YbQsNGA0YIuINCQ0YDRltGPINCR0LvQvtC90LTRhdC10L0g0Lcg0L7Qv9C10YDQuCcn0JLQuNC60YDQsNC00LXQvdC90Y8g0ZbQtyDQodC10YDQsNC70Y8nJywgMinQoC7Qk9C70ZbRlNGALicn0JIg0L/QvtGA0YvQstC1INC90LXQttC90L7RgdGC0Lgg0YHQtdGA0LTQtdGH0L3QvtC5JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN21SVnhWMDZ2NU12Nl9QM0MxODNvTWdPTi1SX3UtcU8vcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGNcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KTQtdGB0LjQuiDQndCw0LfQsNGA0ZbQuSwgMTYg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlNC2LtCf0YPRh9GH0ZbQvdGWLiDQkNGA0ZbRjyDQotC+0YHQutC4OyAyKdCcLtC00LUg0KTQsNC70YzRjy4nJ9Cl0L7RgtCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQkpOc1RwNFdEeFpiQWRBbmpNTFAzaGJENjNUMmVJd1kvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0K/RgNC+0YjQtdC90LrQviDQktCw0LvQtdGA0ZbRjywgMTkg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCh0YLQtdGG0LXQvdC60L4uICcn0KHQvtGC0L7Rj9C70LAg0Y8g0ZYg0YHQu9GD0YXQsNC70LAg0LLQtdGB0L3RgycnOyAyKdCSLtCS0LvQsNGB0L7Qsi4g0KHQutC10YDRhtC+INC00LvRjyDQtNC+0LzRgNC4INGC0LAg0YTQvtGAXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU91RGxhY0RiM2k5NHhOeGtvd2stanNOa3R4dVFLNzFML3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBlXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0L7Qt9Cw0Log0IbRgNC40L3QsFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQhC7QkdC+0LfQt9CwLicn0JTQuNGC0Y/Rh9GWINC80YDRltGXJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUHNveU9JcjE3T0N5Tl9HaFJVX3E3SXBTNEhXd0hXVUIvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JrQvtC30LDQuiDQhtGA0LjQvdCwXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIifQndGW0Ycg0Y/QutCwINC80ZbRgdGP0YfQvdCwJycsINC+0LHRgC4g0K4u0J7RgdGC0YDQvtCy0YHRjNC60L7Qs9C+IFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUSktRRkVtM2Ezd3ppWXZJM1FmaWhHeHpWMlU1UUgybi9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxMFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQnNC40LrQuNGC0Y7QuiDQkNC90LDRgdGC0LDRgdGW0Y8gXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J0u0JHQsNC60LvQsNC90L7Qsi4gJyfQmtC+0L3RhtC10YDRgtGW0L3QvicnLCAgICAgIDIp0Jcu0JHQsNCz0ZbRgNC+0LIuICcn0KDQvtC80LDQvdGBJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xajhfbXZaRUdUZ1lJMExGR1dGb0xiUUFnQ0hwSTVDMFovcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KHQsNCyJ9GO0Log0JLQu9Cw0YHRgtCwXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JAuINCc0L7RhtCw0YDRgi4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINGE0LDQs9C+0YLQsCDQtyDQvtGA0LrQtdGB0YLRgNC+0Lwg0YHRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwg0IbRhy47IDIp0JAu0KLQsNC90YHQvNCw0L0u0KHQvtC90LDRgtC40L3QsCDQtNC70Y8g0YTQsNCz0L7RgtCwINGWINGE0L7RgNGC0LXQv9GW0LDQvdC+LNCG0IbQhtGHLlwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEzMGFaTzFueFY0RThIWDdoeFdhTnZWVDRiZmdraHg0TS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxMlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodCw0YHRjtC6INCu0LvRltGPXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JMu0KTQvtGA0LUuICcn0J/RgNC+0LHRg9C00LbQtdC90L3RjycnLCAyKSDQkS7QkdCw0YDRgtC+0LouICcn0KjRltGB0YLRjCDRgNGD0LzRg9C90YHRjNC60LjRhSDRgtCw0L3RhtGW0LInJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvZHMzdHZVRFhaZG8xeWVkSVZYWWNjOU1uNzdiamgyNS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxM1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC+0LLQsCDQoi7Qki5cIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0KHQtdCy0LXRgNC9LiAnJ9Cf0L7Qu9GM0YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4WHR2T1NBdW52NTZSZkF4Z1YxcTdtNGlLYTA5c1dIMS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxNFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC+0LLQsCDQoi7Qki5cIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0KLQsNC80LDRgNC40L0gJyfQodGC0LDRgNC+0LLQuNC90L3QuNC5INCz0L7QsdC10LvQtdC9JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNDl2bE0wN0dkOFM5Q3o0dERaMkt5S2tndUp6eUIxdUIvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTVcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JPQsNGH0LjQuiDQni7QkC5cIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoC7Qk9C70ZbRlNGALicn0KDQvtC80LDQvdGBJycsIDIp0J4u0KbQuNCz0LDQvdC60L7Qsi4nJ9CG0L3RgtGA0L7QtNGD0LrRhtGW0Y8g0YLQsCDQp9Cw0YDQtNCw0YgnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOZ3M4NXFwRU9ERXY2N2E4LWRhSnhab0g2S283U1VXay9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxNlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQk9GA0LjRhtGW0LIg0J4u0JwuXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQuINCa0YDQtdC50YHQu9C10YAuJyfQnNCw0LvQtdC90YzQutC40Lkg0LLRltC00LXQvdGB0YzQutC40Lkg0LzQsNGA0YgnJywgMinQmy4g0KDQtdCy0YPRhtGM0LrQuNC5LiAnJ9CG0L3RgtC10YDQvNC10YbQvicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5Ya3liUFpIUE9XV1V6QkVEX0tLZUdGM2tPMkVjYWJqL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE3XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0ZbRgNGH0LDQvdC+0LLQsCDQhi7Qki4gXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JLRltC00LzQvtC90YLQtS4nJ1BhciB6aWxvIHVuIHJhaWJvIHBhc2FrdScnLCAyKdCT0YPQsdCw0YDQtdC90LrQviDQki4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINGE0LvQtdC50YLQuCDQtyDQutCw0LzQtdGA0L3QuNC8INC+0YDQutC10YHRgtGA0L7QvCzRgtCyLjEwXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpwTWpDYXVVcGJKZHVmV1hmYjVPZm03UDlzQVlqLWlQL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE4XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0LXQutGD0YUg0J4u0JIuXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0IYu0JLQuNC80LXRgC4gJyfQk9GD0YbRg9C70YzRgdGM0LrQsCDRgNCw0L/RgdC+0LTRltGPJycsIDIp0KPQutGALtC90LDRgC4g0YLQsNC90LXRhtGMINCyINC+0LHRgC7Qki7QodC+0LvQvtC90YHRjNC60L7Qs9C+ICcn0JLQtdGH0L7RgNC90LjRhtGWJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZGZQeDE1V1FLSGZQVnRNUFdXQUF3OXN5OVVZdzVTMWUvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTlcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JvQvtCx0L7QtNCwINCbLiDQnC4sIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCR0LXRgtGF0L7QstC10L0sINCiLtCo0LXQstGH0LXQvdC60L4uICcn0JfQvtGA0LUg0LzQvtGPINCy0LXRh9GW0YDQvdGP0Y8nJywgMinQm9C10LzQutGW0LLRgdGM0LrQsCDQvdCw0YDQvtC00L3QsCDQv9GW0YHQvdGPICcn0JIg0YLQtdC80L3RgyDQvdGW0YfQutGDINGD0LHQvtGH0LgnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwZ1pvNTNYNkVoSHdFTXBYS3dwQjJ0VzJfaXJWbzI5MC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxYVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQm9GO0LHRh9C10L3QutC+INCcLtChLiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEu0JHQsNGFLiDQmtC+0L3RhtC10YDRgiDQtNC70Y8g0YHQutGA0LjQv9C60Lgg0Lcg0L7RgNC60LXRgdGC0YDQvtC8INC70Y8g0LzRltC90L7RgFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF3Zmh1aXRYTDJNd3RZZHJVSElrVmRNeFFacGh0NmpObC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxYlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQm9GO0LHRh9C10L3QutC+INCcLtChLlwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnS7QodGC0LXRhtGO0L0uICAgICcn0JHQvtC70LXRgNC+JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYkhXVXJpcUt2U1RuVm5JbTQ3bW1MZWRTaTBOaC1YUXMvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWNcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JzQuNGF0LDQudC70L7QstCwINCcLtCSLlwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC7QodC+0LvRgtCw0L0uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFb0VTMm1UcldDeTlDUWNxZDlxdTM2NloxdHo2SXBSUS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmYWFzZGFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC40YXQsNC50LvQvtCy0LAg0Jwu0JIuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS4g0KLQsNC80LDRgNC40L0uIFxcXCLQodGC0LDRgNC+0LLQuNC90L3QuNC5INCz0L7QsdC10LvQtdC9XFxcIlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdTR4SjB2SzZkZVIyWEp3R0xYRmg2c0JSZVB2eEdVTnIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxZFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQnNGP0LvRjNC60ZbQvdCwINCdLtCeLlwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQlNC2LtCS0ZbQu9GM0Y/QvNGBLiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaU1fRUYwVng5LXc0RFM2SFJfWkhSSi1tcUp3QS1GR3AvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWVcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JzRj9C70YzQutGW0L3QsCDQnS7Qni5cIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0KbQuNC90YbQsNC00LfQtS4gJyfQodCw0YfRltC00LDQvicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTU5ZGpTcnpJMUF2TDVwa0NsMHZuWURzSFFMVG5kNWxvL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDFmXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCd0ZbQutGW0YLRltC90LAg0IYu0KAuXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCRLtCb0Y/RgtC+0YjQuNC90YHRjNC60LjQuS4gJyfQnNC10LvQvtC00ZbRjycnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXlReU8wUTY1V3ZIbnZZMjh4Qmwzc2hXLUh0ZHU0MjM5L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDIwXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCd0ZbQutGW0YLRltC90LAg0IYu0KAuXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCh0LsuINCQLtCcJ9GP0YHRgtC60ZbQstGB0YzQutC+0LPQviwg0LzRg9C3LtCSLtCS0LXRgNC80LXQvdC40YfQsCAnJ9Cf0ZbQtNC60YDRg9GH0YMg0Y8g0YfQvtGA0L3RltGXINCy0YPRgdCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdV83VVFEdU9DRHFKSmoxcTVsaEVGUEVveGRfUFUzalkvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KHQsNGU0L3QutC+INCiLtCuLiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JYu0JzQsNGB0YHQvdC1LiAnJ9Cg0L7Qt9C00YPQvCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUpsQW9ZLUFBSkV5SS1ySVJEQ3U3VW55d3h2cldFQkJ3L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDIyXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCh0LDRlNC90LrQviDQoi7Qri4sIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi7Qp9GD0L/QsNC6LiAnJ9CS0LXRgdC90Y/QvdC40Lkg0YDQvtC6LdC9LdGA0L7Qu9C7JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVDUtSVVOVXVRbVV2RlZXWWxZNlNBVmVqLVRJcW1icnEvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjNcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KHQsNCy0YfRg9C6INCiLtCGLiAgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JTQti7QktGW0LvRjNGP0LzRgSwg0LDRgNCw0L3Qti7QkC7QotC10L/Qu9C40YbRjNC60L7Rly4nJ9Ca0L7Qu9C40YHQutC+0LLQsCDQtNC70Y8g0LDQvdCz0LXQu9CwJycsIDIp0JIu0JrQvtC30LvQvtCyLNC/0LXRgNC10LrQuy4g0LTQu9GPINC00L7QvNGA0Lgg0IQu0JbRg9C60L7QstCwLiAnJ9CfJ9GU0YHQsCDRgyDRgdGC0LjQu9GWINGE0LvQsNC80LXQvdC60L4nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3VGdpdW9naXZzaDN4d2pGWGk1YTFvUlUtb2trUDk2MC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyNFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCGLtCuLlwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC4g0KjRg9C80LDQutC+0LLQsC4gJyfQotCw0L3Qs9C+INCV0LLRltGC0LgnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExQ2t6aVJ2WUp2bmlXN2NpYTd5OUVrSTg1c25MSnc3eC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyNVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCGLtCuLlwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQki7Qk9C+0LzQvtC70Y/QutCwLiAnJ9CG0YHQv9Cw0L3RgdGM0LrQuNC5INGC0LDQvdC10YbRjCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlPVUpOMjFCdkRkenNMMG9QMGF0dnNFbW9xZ1VkcFlDL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI2XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCh0LzQvtC70Y/QvdGW0L3QvtCy0LAg0KEu0JwuIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCU0LLQvtGA0LbQsNC6LiDQmtC+0L3RhtC10YDRgiDQtNC70Y8g0YHQutGA0LjQv9C60Lgg0LvRjyDQvNGW0L3QvtGALCDQhiDRhy47IDIp0Jwu0KHQutC+0YDQuNC6LiAnJ9Ca0LDRgNC/0LDRgtGB0YzQutCwINGA0LDQv9GB0L7QtNGW0Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0bHNyTWtRcDBVVnEweXd0SjAxTHBIS1BzbUZPcEhuTy9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyN1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodGC0LDRgNC40L3RgdGM0LrQsCDQnC7QkC4gXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KjQuNC90LrQsNGA0LXQvdC60L4u0JLQsNGA0ZbQsNGG0ZbRlzsgMinQlS7QkdC+0YbRhtCwLicn0JDRgNGW0Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMc1d6Vl9MdDF6MGdHWFVMU2Vnb3Vja1k5Ulpyb0c3aC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyOFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQotGA0LXQv9Cw0Log0Jwu0IYuXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JYu0JTQtdC80LXRgNGB0YHQvNCw0L0uINCk0LDQvdGC0LDQt9GW0Y8sIDIp0J8u0IbRgtGD0YDRgNCw0LvRjNC00LUuICcn0JzQsNC70LXQvdGM0LrQuNC5INGH0LDRgNC00LDRiCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVRNU0tIcEVjbU0zSzdoaVp6eVkzZzRLXzhNdEhiSDlML3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI5XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCE0YDRjNC+0LzRltC90LAg0J4u0JMuIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC7QlNGA0LXQvNC70Y7Qs9CwLiDQn9C+0LXQvNCwLdGA0LDQv9GB0L7QtNGW0Y8sIDIpINChLtCe0YDRhNC10ZTQsi4nJ9CS0LXRgdC90Y/QvdC60LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZNk9LVU9vSmIxanUzVnpTNEZDdE80Z3VCTEhEOTEwUC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyYVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQmtCw0LTRg9C6INCiLtCuLlwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQmi7QnC7QktC10LHQtdGALtCa0L7QvdGG0LXRgNGCINC00LvRjyDQutC70LDRgNC90LXRgtCwIOKEljEs0IYg0YcuOyAyKSDQry7QnNC10LTQuNC90YzRiC4g0KDQvtC80LDQvdGBXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtXQkhZVVlSbVhwbTVCQ0dXOWJudDh5OXJpeGdQUVo0L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDJiXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCd0L7QstGW0LrQvtCy0LAg0Jwu0JwuXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCe0LHRgC4g0JQu0JfQsNC00L7RgNCwLiAnJ9Ch0LXRgNC10LQg0YHQtdC70LAg0LTQuNGH0LrQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBhV1ZsT2UzRi1zc1FoVFZxa0ZuZzhHSktHSkV3VTgwL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDJjXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCd0L7QstGW0LrQvtCy0LAg0Jwu0JwuIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQny7Qhi7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0JfQsNCx0YvRgtGMINGC0LDQuiDRgdC60L7RgNC+JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdHc1TU5VLTVmdVhRb1NPSHBXdGFHdkdqWnhjZk1BZm0vcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MmRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KHQuNGA0L7RgtCwINCeLtCcLlwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCa0YPQtNGA0Y/QstGG0LXQsi4gJyfQntC00LjQvSDQtNC10L3RjCDQtyDQttC40YLRgtGPINC00Y/RgtC70LAnJywgMinQni7QkdC10YYuJyfQo9C60YDQsNGX0L3RgdGM0LrQtSDRltC90YLQtdGA0LzQtdGG0L4nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTZWpCMWlkX1BVN1hnLXc1ZnpLVXZKMEVvT25Gc0RNQy9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxufV07XG5cbm15Q2FyZHMgPSBteUNhcmRzLmNvbmNhdChjb25jZXJ0bWFzdGVycyk7XG5cbmxldCBlbnNlbWJsZSA9IFt7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzN1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCW0YPRgNCw0LLQtdC70Ywg0KEuLCDQkNGA0YLQtdC80LXQvdC60L4g0KEuKVwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9CG0YHQv9Cw0L3RgdGM0LrQuNC5INGC0LDQvdC10YbRjCcnLCAyKdCe0LHRgC7QnC7Qn9C+0L/QvtCy0LAuICcn0ITQstGA0LXQudGB0YzQutGWINC80L7RgtC40LLQuCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUt2Y0VFN3FQUzByYU9DcWQ4c2FNRUhvLXkwVURJcENoL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzOFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgICjQn9C40LvQuNC/0YfRg9C6INCdLiwg0JrQsNCy0YPQvSDQhC4pXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCSLtCQ0LvQtdC60YHQtdGU0LIuJycg0J3QsCDQv9GA0L7Qs9GD0LvRj9C90YbRlicnLCAyKdCeLtCf0LXRgtGA0L7QstCwLiAnJ9Cm0LjRgNC6JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbkVMb3R3cUF6OUM3ZDA5RzROVkJWdmJSeUtMOTU4cnMvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDM5XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCg0LDQtNC60L7QstGB0YzQutCwINCQLiwg0JrRg9C30YzQvNC40YcpLiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAu0KjQvdGW0YLQutC1LiAnJ9Co0LjQvdC10LvRjCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU00cGF6TklfVHl2MnNETVc5b0I5UWVtMzZJNURSWnVSL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzYVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgICjQoNCw0LTQutC+0LLRgdGM0LrQsCDQkC4sINCa0YPQt9GM0LzQuNGHKS4gXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQndCw0YPQvNC10L3QutC+Licn0KfQsNGBINCy0LXQu9C40LrQuNGFINC+0YfRltC60YPQstCw0L3RjCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUxCT2Vfd0ZsQ195enRfRmZrUmJDOC05MGNWdTNzdFZPL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzYlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgICjQodGW0LrQvtGA0LAg0KAuINCn0LXRgNC10L/Rg9GJ0LDQuiDQnC4pLiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QndCw0YPQvNC10L3QutC+LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnLCAyKdCVLtCT0YDRltCzLdCTLtCk0ZbRgNGC0LjRhy4nJ9Ci0LDQvdC10YbRjCDQkNC90ZbRgtGA0LgnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPUlR6dy1wbGVoUXZBQU9pbk9yZHFuSHRuVV9vQ1pqNS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0M2NcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICcnTXljcmFmdCcnICjQhNGA0LzQvtC70LXQvdC60L4g0JQuLCDQqNC40LHQsNC90L7QstCwINCSLikgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0KHQutC+0YDQuNC6LiAnJ9Cc0LXQu9C+0LTRltGPJycsICAgICAgICAgMinQni7QpdGA0L7QvNGD0YjQuNC9LiAnJ9CU0YDRg9C60LDRgNGB0YzQutCwINC80LDRiNC40L3QutCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQXV2bzQ0YUJZVEczdkt4c1QyaFFEMGhta2cxRWRsYTcvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNkXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JHQvtC90LTQsNGA0LXQvdC60L4g0JwuLCDQodC70ZbQvdGH0LXQvdC60L4g0K4uKSBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0KHQtdC60YDQtdGCLicn0J/RgNC+0LPRg9C70Y/QvdC60LAg0JTQvtCx0LXRgNC80LDQvdCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMVFTQWRrd24zaXU1NGtSM2h4bmgzSGcwQ196cFAtWlUvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNlXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JHQvtC90LTQsNGA0LXQvdC60L4g0JwuLCDQodC70ZbQvdGH0LXQvdC60L4g0K4uKSBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJyDQhtGC0LDQu9GW0LnRgdGM0LrQsCDQv9GW0YHQtdC90YzQutCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWlQtM3VDcnpiR0p0TWMwb0x3dGdKcVRvcno5akRZZXMvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNmXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JLQsNGI0YPRgNGW0L3QsCDQki4sINCE0LbQvtC90LrQvtCyINCQLikuXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCTLtCR0ZTQu9C+0LIuJyfQo9GA0LDRgdGW0LzQsCDRliDQp9Cw0YDRltCy0L3QsCDQp9C10YDQtdC/0LDRhdCwJycsIDIp0J4uINCf0L7Qu9GM0L7QstC40LkuICcn0J/QvtC00L7RgNC+0LYg0LIg0JDQu9GM0L/QuCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWpDaHZNQnJEd3l4S2szQUpFRUNTQkU3WV9rQ0xSaDhzL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0MFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCT0LXQvNCx0LjRhtGM0LrQsCDQni4sINCa0YPQt9C70L4g0JouKS5cIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QpdC+0LLQsNGA0LQuICcn0KfQsNGA0LvRjNGB0YLQvtC9JycsIDIp0JTQti4g0KjRltGA0ZbQvdCzLiAnJ9Ca0L7Qu9C40YHQutC+0LLQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXRMTlZsaHVyWlVkSHg0NE1jaFM0cW0yNTFlUzM5cm9RL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0MVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCU0LXRgNGP0LHRltC90LAg0KEuINGC0LAg0JLQsNGB0LjQu9GM0ZTQstCwINCSLikuXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JTRltCw0LHQtdC70LvRli4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwgMinQmy7QqNGD0LrQsNC50LvQvi4gJyfQk9GD0LzQvtGA0LXRgdC60LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5SlFCZmc3Y19Cb1FxWE1tQVlxTllRQ25ZdGF3WjlUby9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtGA0LjRiNGC0LDQu9C+0LLQuNGHINCcLiwg0JrRgNC40YjRgtCw0LvQvtCy0LjRhyDQhi4pIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQlNC2LtCT0LXRgNGI0LLRltC9LiAnJ0NsYXAgeW91IGhhbmQnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFNQUplQlZuZnRFZGhjaW80N25EblVnY2pHR1R3SzhDai9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDNcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtGA0LjRiNGC0LDQu9C+0LLQuNGHINCcLiwg0JrRgNC40YjRgtCw0LvQvtCy0LjRhyDQhi4pXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIifQmtC+0LvRj9C00LrQsCcnLCDQvtCx0YAuINCeLtCX0LDQutCw0LvRjtC20L3QvtGXXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXBxeFlaVHZGeXJyajZkVHBUNThVVVBTT1BITS1oWnRlL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0NFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCb0LDQvdGB0YzQutC40Lkg0IQuLCDQm9Cw0L3RgdGM0LrQsCDQni4pXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JUu0JPRgNGW0LMuINCQ0YDRltGPINGW0Lcg0YHRjtGX0YLQuCAnJ9CXINGH0LDRgdGW0LIg0KXQvtC70YzQsdC10YDQs9CwJycsIDIp0JIu0J/RgtGD0YjQutGW0L0uICcn0JHRgNC10L3RhNC+0YDQtNGB0YzQutCwINCy0ZbQtNGM0LzQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMThPVXNDR1FCczNJaGxYNml0LXMzVHh1bzA3TTNOczBIL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0NVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCh0LjQvNC+0L3QtdC90LrQviDQoi4sINCk0LXQtNC40L3QsCDQkC4pXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCU0LYu0JPQtdGA0YjQstGW0L0uJyfQmtC+0YXQsNC90LjQuSDQvNGW0LknJzsgMikg0J8u0JzQvtGA0ZbQsC4gJyfQnNCw0L3Rg9C10YInJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoVmVraDhfNU1PVUpEZ0p0WEk4aTRHQmRSUXdDQWVrdC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQodC60L7Qv9C10YbRjCDQkC4sINCc0YPRgNC30LDQuiDQri4pLiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIu0J7RgdGC0LXQvS4nJ9Ci0LDQvdC10YbRjCDQu9GP0LvRjNC+0LonJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFRnp5aWp1d0FGTmo4di1UbHJhaUlfUGt1SEdxWDk0RS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDdcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQodC60L7Qv9C10YbRjCDQkC4g0JzRg9GA0LfQsNC6INCuLikgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQltGD0LvRjNGU0LLQsC4nJ9Cf0YDQvtCz0YPQu9GP0L3QutCwINC3INGC0LDRgtC+0LwnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWWnIyVi1IdjhNSUY4S1dnWkdmSkF5dUVFN21hcVdvcC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDhcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQotGA0L7RhtC10L3QutC+INCQLiwg0K/QutGD0L3RltC90LAg0J4u0JIuKVwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCcLtCS0LXQsdC10YAuINCh0L7QvdCw0YLQsCDQtNC+INC80LDQttC+0YAsINCGINGHLjsgMinQkC7QmtC+0LzQu9GW0LrQvtCy0LAuICcn0KHQv9C+0LPQsNC0JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYVlOQjhqSDBKeTRTUDN1ZkFjZVEtbUoyOWxQcl9yVHcvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQ5XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KTRltC70ZbQv9C+0LIg0IYuLCDQnNCw0YDRh9C10L3QutC+INCbLilcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuJyfQltCw0YDRgicnIDIp0Jwu0JvQtdC+0L3RgtC+0LLQuNGHLicn0KnQtdC00YDQuNC6JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcGhXVHlJSmI3RnpxTlFGZVVxRTV4MWxZRlo1OVd1Z3ovcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRhXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KXQtdC70LzQsNC9INCSLiwg0KXQtdC70LzQsNC9INCSLilcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoy7Qk9GW0LvQu9C+0LouJyfQndCwINC/0LDRgNC40LfRjNC60L7QvNGDINCx0YPQu9GM0LLQsNGA0ZYnJywgMinQnS7QodC80ZbRgNC90L7QstCwLicn0JHRgNCw0LfQuNC70YzRgdGM0LrQuNC5INC60LDRgNC90LDQstCw0LsnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3YzMyQ0kwbV9rTkpYWmtySGtYUWU1MlRkZkhXUGw2Ty9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC60LLQsNGA0YLQtdGCICcnU2ZvcnphbmRvJycuXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQni7QptC40LPQsNC90LrQvtCyLiAnJ9Ci0YPRgdGC0LXQvycnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVRa1oxMVVHVmxxaFIzc3JhZHBib1FwSzlFRXlhaXFvL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0Y1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgJydTZm9yemFuZG8nJy5cIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCT0YDRltCzLicn0JIg0L/QtdGH0LXRgNGWINCz0ZbRgNGB0YzQutC+0LPQviDQutC+0YDQvtC70Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTVExudDhJVTVubFktRzFkcWZiS3VSYTFCX1o4VFNrWS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQktC40YXRgNC40YHRgiDQnC4sINCk0ZTQtNC+0YHRlNGU0LIg0J0uKVwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCf0YDQvtC60L7RhCfRlNCyLiDQnNCw0YDRiCwgMinQki7Qm9GO0YLQvtGB0LvQsNCy0YHRjNC60LjQuS4g0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGC0LXQvNGDINCf0LDQs9Cw0L3RltC90ZZcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbnpSSFhKS3RBYmR4N1B3YkI1ZDRYRkd4Qk5jdHBORWsvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRlXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JLRltGC0Y7QuiDQkiwg0JHQtdGA0LXQt9C+0LLRgdGM0LrQsCDQhC4pXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JHQsNGFICjQktGW0LLQsNC70YzQtNGWKS4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINC+0YDQs9Cw0L3QsCDQu9GPINC80ZbQvdC+0YAsIDIp0JAu0J8n0Y/RhtC+0LvQu9CwLiAnJ9Cb0ZbQsdC10YDRgtCw0L3Qs9C+JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbmYwMUVmNk9WT3lMQUpVVWpCWXlJS05zM01aZV9QRnYvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRmXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JHQvtGA0L7QstC10YbRjCDQni4sINGW0LvRjtGB0YLRgNCw0YLQvtGAKVwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS7QkdCw0YUuJyfQkNGA0ZbRjycnICgnJ9Ch0YLRgNCw0YHRgtGWINC30LAg0JzQsNGC0LLRltGU0LwnJylcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSDFha1FVZFI3UUtSTzRQM2hEWTZfdFp0bWRTcmswSjEvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDUwXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JHQvtGA0L7QstC10YbRjCDQni4s0ZbQu9GO0YHRgtGA0LDRgtC+0YApLiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0J7RgNGELicn0J4s0KTQvtGA0YLRg9C90L4nJyAoJyfQmtCw0YDQvNGW0L3QsCDQkdGD0YDQsNC90LAnJylcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOWtPSUJUZElLS1FaNm5YVmdQaVpIM1k4bXljV3B3QnkvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDUxXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQu9C40LzQtdC90LrQviDQnC4sINCU0ZbQvtGA0LTRltGU0LLQsCDQnC4pXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CS0L7QutCw0LvRltC3JycsIDIp0JQu0JzRltC50L4uJyfQkdGA0LDQt9C40LvRjNGU0YDQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXU4MWRBQXRsRG9mcTRwbnlEdFlnLVN4R0I0akdCM3NFL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1MlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0L7Qt9Cw0Log0IYuLCDQotCw0ZTRgC3Qo9C70YzRj9C90L7QstCwINCaLikuIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCJBLiAg0J8n0Y/RhtGG0L7Qu9CwLiAnJ9Cb0ZbQsdC10YDRgtCw0L3Qs9C+JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeTZZcUZ0QlBHTWxYekVRTDh1dTNCTDRVa3JNemU0amIvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDUzXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQvtC30LDQuiDQhi4g0YLQsCDQotCw0ZTRgC3Qo9C70YzRj9C90L7QstCwINCaLikuIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JPRgNGW0LMuICcn0J3QvtGA0LLQtdC20YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUdGZpNG03UDFvdU5KRUhEWGlKbmE3WDNiZVFQenJmdS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC+0YHRgtC10YfQutC+INCQLiwg0JrQvtC90LTRgNCw0YLRjtC6INCcLiApLlwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0Jou0JTQtdCx0Y7RgdGB0ZYuICcn0KMg0YfQvtCy0L3RlicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWhSV3pDTFhJVVU2WHBEV1ozRWlzSTdRNU5aSHpEZGlvL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1NVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0L7RgdGC0LXRh9C60L4g0JAuLCDQmtC+0L3QtNGA0LDRgtGO0Log0JwuKS5cIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K4u0JLQtdGB0L3Rj9C6LiAnJ9Ca0LDRgNC70YHQvtC9JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQTMxVnJSNWQ1ZFhUOGtRV3ROeUdreGZ5N2JLSTVNRFUvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU2XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JzQsNGG0ZbRlNCy0YHRjNCwINCcLiwg0J/QsNC/0ZbRlNCy0LAg0JouKS4gXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JzQtdGC0L3QtdGALicn0KDQvtGB0ZbQudGB0YzQutC40Lkg0YXQvtGA0L7QstC+0LQnJywgMinQkC7QnyfRj9GG0YbQvtC70LAuJyfQktC10LvQuNC60LUg0YLQsNC90LPQvicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZBbmdzYXNHdUFzaG9EWnlnOWlkbGpCOHhvTUR2NHZDL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1N1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgICjQmtCw0YHRj9C90LXQvdC60L4g0J4u0JIuLCDQk9C+0YDQtNGW0ZTQvdC60L4g0IYu0J4uKSBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JAu0JHQsNCx0LDQtNC20LDQvdGP0L0uICcn0J3QvtC60YLRjtGA0L0nJywgMinQri4g0KnRg9GA0L7QstGB0YzQutC40LkuICcn0JPRg9C80L7RgNC40YHRgtC40YfQvdC40Lkg0YLQsNC90LXRhtGMJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX1NYQUZRRHdfQm00WUstcWN5NlhzNGtGb1c0SDNEYUkvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU4XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAnJ9CV0LvQtdCz0ZbRjycnXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCcLtCh0LrQvtGA0LjQui4gJyfQnNC10LvQvtC00ZbRjycnLCAyKdCbLtCa0LDRgNC/0LXQvdC60L4uJyfQktGW0L3QvtGH0L7QuiDRg9C70Y7QsdC70LXQvdC40YUg0LzQtdC70L7QtNGW0LknJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFja1p3MEhzc2l5RWRiU1NIQnFPeWF3cVNmdEFrMXdVai9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTlcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQk9GA0LjQs9C+0YAn0ZTQstCwINCTLtCQLiAsINCv0LrRg9C90ZbQvdCwINCeLtCSLilcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNGD0LHQtdGA0YIuJyfQktGW0LnRgdGM0LrQvtCy0LjQuSDQvNCw0YDRiCcnIDIp0JAu0JrQvtC80LvRltC60L7QstCwLiAnJ9Cd0LAg0LzQsNGB0LrQsNGA0LDQtNGWJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVUNhSl9xWVVhcHlNLUhCaHJ1V2ItaDdJRnlTcWtfc1UvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDVhXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQvtGB0LXQvdC60L4g0J4u0JIuLCDQmtCw0YHRg9C80L7QstCwINCeLtCULikuXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAuINCm0YTQsNGB0LzQsNC9LiAnJ9Cb0ZbRgNC40YfQvdC40Lkg0LLQsNC70YzRgScnLCAyKdCcLtCc0ZbQvdC60L7Qsi4gJyfQodGC0LDRgNC40Lkg0YDQvtGP0LvRjCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpHT0t1bnhJb0hkM1VqNUZIdmRXeU4tcnZXRjduNlYtL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1YlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgICjQktCw0YHQtdC90LrQviDQoS4sINCS0LDRgdC10L3QutC+INCcLiwg0KXQsNCy0LDQu9C60L4g0KIuLNCR0LjRh9C60L7QsifRj9C6INCaLikuIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCS0ZbQstCw0LvRjNC00ZYuJyfQl9C40LzQsCcnOyAyKdCkLtCc0LXRgNC6J9GO0YDQsC4nJ9CR0L7Qs9C10LzQvdCwINGA0LDQv9GB0L7QtNGW0Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFCOTZuRUMzdktZUmQ4T2dUWGdQaVZWWDhWQi1NU1NkWS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWNcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC60LLQsNGA0YLQtdGCICcnQUxMQSBCUkVWRScnLlwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QodGC0YDQsNCy0ZbQvdGB0YzQutC40Lku0KTRgNCw0LPQvNC10L3RgiDRltC3INCx0LDQu9C10YLRgyAnJ9Cf0LXRgtGA0YPRiNC60LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFiaWZXOE9CdjFFNjFxZDE4NEVhSmpzdk90clhyUnJrVi9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC60LLQsNGA0YLQtdGCICcnQUxMQSBCUkVWRScnLlwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi7Qk9GD0YDQu9GW0YLRgi4nJ9CS0ZbQtNC10L3RgdGM0LrQuNC5INCy0LDQu9GM0YEnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFRakJyS1dUa0NiaVM5RWo1azRwSGJIUkRzTjJEMWNhTS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWVcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YwgJyfQldCa0KHQn9Cg0JXQodCG0K8nJy5cIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0J3QsNGD0LzQtdC90LrQvi4gMSknJ9Cn0LDRgdC4INCy0LXQu9C40LrQuNGFINGB0L/QvtC00ZbQstCw0L3RjCcnLCAyKdCQLtCfJ9GP0YbRhtC+0LvQsC4gJyfQm9GW0LHQtdGA0YLQsNC90LPQvicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlVbFlLcklLc0oxaW51Q3FBT1MwTVk0THFHcm1jcF9rL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxufSx7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1ZlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LrQstCw0YDRgtC10YIgKNCp0YPQutGW0L3QsCDQni4s0KHQtdGA0LTRjtC6INCTLiwg0KjQsNC/0L7QstCw0Lsg0J4uLCDQnNCw0LrRgdC40LzQtdC90LrQviDQki4pXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLtCb0LDQstGW0L3RjNGP0LouJyfQk9Cw0LvQvtC/LdC80LDRgNGIJyc7IDIp0JMu0JPRg9GA0LvRltGCLiDQndC+0LrRgtGO0YDQvVwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJWWJOSUMyRXg2Tnh4TTh5bWJDdEwybXVQQVE0UmhNZy9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbn0se1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NjBcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INCw0L3RgdCw0LzQsdC70YwgKCDQodC80LjQuiDQmy7Qri4s0KjQtdC60LXQu9GMINCeLtCeLikuIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0JPRg9Cw0YHRgtCw0LLRltC90L4uICcn0KDQvtC80LDQvdGBJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZEhCem5EbXBFLTB2V3lyeU1mODZYQ2tGYjhzUF9IWV8vcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG59LHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDYxXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQsNC90YHQsNC80LHQu9GMICjQodC80LjQuiDQmy7Qri4sINCo0LXQutC10LvRjCDQni7Qni4pLiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0KbRhNCw0YHQvNCw0L0uJyfQodC90ZbQttC40L3QutC4JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOVBUZS1KX2NTNkRUU082aVpGaXhnYjVnNFp4cGF6UlQvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG59XTtcblxubXlDYXJkcyA9IG15Q2FyZHMuY29uY2F0KGVuc2VtYmxlKTtcblxuLyoqIENPREUgKiovXG5mdW5jdGlvbiBmaWxtUmVkdWNlcihzdGF0ZSA9IHtjYXJkQ291bnQ6IG15Q2FyZHMubGVuZ3RoLCBjYXJkczogbXlDYXJkcywgaXNEYXRhSW5QbGFjZTogdHJ1ZSwgZXJyb3I6IFwiXCJ9LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0lORk9fUEFHRSc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogLTEsXG4gICAgICAgICAgICAgICAgY2FyZHM6IFtdLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdBTEwnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI+INCj0YHRliDQstGW0LTQtdC+XCIpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXJkczogbXlDYXJkcyxcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbXlDYXJkcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ2dyb3VwLTEnOlxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDEpLnNsaWNlKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkcyxcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2dyb3VwLTInOlxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzMSA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5ncm91cCA9PT0gZ3JvdXAyKS5zbGljZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMxLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkczEubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2dyb3VwLTMnOlxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzMiA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5ncm91cCA9PT0gZ3JvdXAzKS5zbGljZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMyLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkczIubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlICdTRUFSQ0gnOlxuICAgICAgICAgICAgbGV0IHEgPSBhY3Rpb24ucXVlcnkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGA+INCf0L7RiNGD0Lo6ICR7cX1gKTtcbiAgICAgICAgICAgIGxldCBuZXdDYXJkczMgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY2FyZE5hbWUgPSBjYXJkLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgYm9vbCA9IChjYXJkTmFtZS5zdGFydHNXaXRoKHEpIHx8IGNhcmROYW1lLmluY2x1ZGVzKHEpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGVzdGluZyAke2NhcmROYW1lfSBvbiBxdWVyeSAke3F9LCByZXN1bHQgaXMgJHtib29sfWApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2w7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY2FyZHM6IG5ld0NhcmRzMyxcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHMzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlICdFUlJPUic6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgPiDQn9C+0LzQuNC70LrQsGApO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLm1zZyxcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IDEsXG4gICAgICAgICAgICAgICAgY2FyZHM6IFtdLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRzOiBteUNhcmRzLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBteUNhcmRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxuICAgICAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNhcmRTdG9yZSA9IGNyZWF0ZVN0b3JlKGZpbG1SZWR1Y2VyKTtcblxuY2FyZFN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgIGNvbnNvbGUubG9nKFwiRmlsbXNTdG9yZSBzdGF0ZSB3YXMgY2hhbmdlZCwgbnVtYmVyIG9mIGNhcmRzOiBcIiArIGNhcmRTdG9yZS5nZXRTdGF0ZSgpLmNhcmRDb3VudClcbik7XG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==