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

var src = __webpack_require__.p + "1163023-6d687835ae2e2a0d6a89e888a694807d.png";module.exports={src:src,width:3840,height:2160,format:"png",toString:function(){return src;}};

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
  font-size: 30px;
  font-family: 'Jura', sans-serif;
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
  font-family: 'Jura', sans-serif;
  font-size: 30px;
  padding-top: 10px;
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
  }, openVideoButtonName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), showIframe ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IframeBox, {
    src: videoUrl,
    width: calculatedWidth
  }) : null));
};

/***/ }),

/***/ "./src/components/InfoPage.jsx":
/*!*************************************!*\
  !*** ./src/components/InfoPage.jsx ***!
  \*************************************/
/*! exports provided: LinkContainer, InfoPage2, InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkContainer", function() { return LinkContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage2", function() { return InfoPage2; });
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
/* harmony import */ var _rfs_page_imgs_rfs_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rfs-page-imgs/rfs.png */ "./src/components/rfs-page-imgs/rfs.png");
/* harmony import */ var _rfs_page_imgs_rfs_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_rfs_page_imgs_rfs_png__WEBPACK_IMPORTED_MODULE_12__);













const LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
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
  const TextSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
      font-family: 'Jura', sans-serif;
      background-color: black;
      color: white;
      box-shadow: darkslategray;
      margin-top: 10px;
      margin-bottom: 80px;
      margin-left: 80px;
      margin-right: 80px;
      font-weight: 1000;
      text-align: center;
      font-size: 25px;
      border-radius: 25px;
    `;
  const Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
      margin-top: 20px;
      margin-left: 10%;
      left: 40px;
      width: 210px;
      height: 290px;
      border-radius: 25px;
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
  flex-direction: column;
`;
const A = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a`
  text-align: center;
  font-family: "Segoe UI", serif;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 35px;
  font-size: 25px;
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
  font-weight: 600;
  color: white;
  text-align: center;
`;

const Poster = props => {
  const PosterImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
      margin-top: 2%;
      margin-right: 5%;
      margin-left: 5%;
      margin-bottom: 5%;
      border-radius: 25px;
      filter: drop-shadow(0 0 10px rgba(100, 0, 0, 0.5));
    `;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PosterImg, {
    src: props.imgUrl
  });
};

const InfoPage2 = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://docs.google.com/document/d/1_n0nBVRw7cT8-zR_CKBQ1Z8jlty-cyIJ/edit?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), " \u0423\u0447\u0430\u0441\u043D\u0438\u043A\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0443 \xAB\u0420\u0456\u0432\u043D\u0435\u043D\u0441\u044C\u043A\u0456 \u0444\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043D\u0456 \u0441\u0442\u0443\u0434\u0456\u0456\u0308\xBB 2023 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, null, "\u0417\u0430\u043F\u0440\u043E\u0448\u0443\u0454\u043C\u043E \u0434\u043E \u0443\u0447\u0430\u0441\u0442\u0456 \u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0456"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Poster, {
    imgUrl: _rfs_page_imgs_rfs_png__WEBPACK_IMPORTED_MODULE_12___default.a
  }));
};
const InfoPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://docs.google.com/document/d/1auoJ8rWsFopRwbNWrEph_DF6BaofMZah/edit?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["GiPodiumWinner"], null), " \u041B\u0430\u0443\u0440\u0435\u0430\u0442\u0438 2021 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://docs.google.com/document/d/1ka7GuVc0mhHzR5jq1qhTCHnlNa0HcXmB/edit?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), " \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://docs.google.com/document/d/1qdyL0mXafowI888sPJLyM7yuhYJNR70b/edit?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), " \u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043A\u043E\u043C\u0456\u0442\u0435\u0442 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0443 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, null, "\u0421\u043A\u043B\u0430\u0434 \u0436\u0443\u0440\u0456"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PersonInfoSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Person, {
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
  const sectionsForFilter = [`Номінація "Фортепіано соло"`, `Номінація "Фортепіанний ансамбль"`, `Номінація "Концертмейстер"`, `Усі відео`, `Про конкурс`, "Рівненські фортепіаннні студії"];
  let infoPage = cardCount === -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoPage__WEBPACK_IMPORTED_MODULE_6__["InfoPage"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoPage__WEBPACK_IMPORTED_MODULE_6__["InfoPage2"], null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommonWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegularHeader__WEBPACK_IMPORTED_MODULE_5__["RegularHeader"], {
    cardCount: cardCount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResultsFilter__WEBPACK_IMPORTED_MODULE_2__["ResultsFilter"], {
    sections: sectionsForFilter
  }), isDataInPlace ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainSectionFlex, null, cards.map(card => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    name: card.name,
    videoUrl: card.videoUrl,
    composition: card.composition,
    key: card.id.$oid
  }))) : infoPage);
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
  font-size: 25px;
  font-family: "Segoe UI", serif;
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
  font-size: 25px;
  font-family: "Segoe UI", serif;
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
/*! exports provided: DivThinLine, StyledResultsFilterWrapper, ThinLineInnerDiv, ResultsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivThinLine", function() { return DivThinLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledResultsFilterWrapper", function() { return StyledResultsFilterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThinLineInnerDiv", function() { return ThinLineInnerDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsFilter", function() { return ResultsFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var _hooks_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/UseWindowDimensions */ "./src/hooks/UseWindowDimensions.jsx");





const FilterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  font-size: 25px;
  font-family: "Segoe UI", serif;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-top: 26px;
  flex-wrap: wrap;`;
const FilterSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterContainer)`
  align-self: center;
  margin: 14px;
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
      case `Рівненські фортепіанні студії`:
        dispatch({
          type: "RFS_PAGE"
        });
        break;

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

  function renderInfoPage(section) {
    if (section[0] === "Рівненські фортепіаннні студії") {
      reRenderRedLin(section[1]);
      dispatch({
        type: "RFS_PAGE"
      });
    } else {
      reRenderRedLin(section[1]);
      dispatch({
        type: "INFO_PAGE"
      });
    }
  }

  let renderedSections = sections.map(section => section === "Про конкурс" || section === "Рівненські фортепіаннні студії" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilterSection, {
    onClick: () => {
      let sec = [section, event];
      renderInfoPage(sec);
    },
    key: section
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_3__["FaUniversity"], null), section) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilterSection, {
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

var src = __webpack_require__.p + "Марцева-1-571033b1ad511365c445369bec1e1f62.png";module.exports={src:src,width:276,height:444,format:"png",toString:function(){return src;}};

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

/***/ "./src/components/rfs-page-imgs/rfs.png":
/*!**********************************************!*\
  !*** ./src/components/rfs-page-imgs/rfs.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "rfs-23a9ff423b656e4f7a1bd42da964369f.png";module.exports={src:src,width:2700,height:3900,format:"png",toString:function(){return src;}};

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
myCards = myCards.concat(concertmasters);
myCards = myCards.concat(ensemble);
/** CODE **/

function filmReducer(state = {
  cardCount: myCards.length,
  cards: myCards,
  isDataInPlace: true,
  error: ""
}, action) {
  switch (action.type) {
    case 'RFS_PAGE':
      return {
        cardCount: -2,
        cards: [],
        isDataInPlace: false,
        error: ""
      };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzExNjMwMjMucG5nIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZm9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVndWxhckhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzdWx0c0ZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0IbQstCw0L3QvtCy0LAg0Jsu0IYucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CS0LjRiNC90LXQstGB0YzQutCwLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0JfQsNGF0L7QtNGP0LrRltC9LTEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL9Ca0YPQt9C90ZTRhtC+0LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QnNCw0YDRhtC10LLQsC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy/QntGB0YLQsNC/0YfRg9C6INCcLiDQnC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3Mv0KDQsNC50YIg0IYu0KEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Jmcy1wYWdlLWltZ3MvcmZzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvVXNlV2luZG93RGltZW5zaW9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvQ2FyZFN0b3JlLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJjYXJkU3RvcmUiLCJGaWxtV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZpbG1JbmZvIiwiSWZyYW1lQm94IiwiaWZyYW1lIiwicHJvcHMiLCJ3aWR0aCIsIkJ1dHRvbiIsImJ1dHRvbiIsIkNhcmQiLCJoZWlnaHQiLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwiY2FsY3VsYXRlZFdpZHRoIiwic2V0Q2FsY3VsYXRlZFdpZHRoIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJuYW1lIiwiY29tcG9zaXRpb24iLCJ2aWRlb1VybCIsInNob3dJZnJhbWUiLCJzZXRTaG93SWZyYW1lIiwib3BlblZpZGVvQnV0dG9uTmFtZSIsInNldE9wZW5WaWRlb0J1dHRvbk5hbWUiLCJvcGVuVmlkZW9IYW5kbGVyIiwiTGlua0NvbnRhaW5lciIsIldyYXBwZXIiLCJsb2dvIiwiUGVyc29uSW5mb1NlY3Rpb24iLCJQZXJzb24iLCJUZXh0U2VjdGlvbiIsIkltYWdlIiwiaW1nIiwiaW1nVXJsIiwidGV4dCIsIkRpdiIsIkRpdjEiLCJBIiwiYSIsIkExIiwiUCIsIlBvc3RlciIsIlBvc3RlckltZyIsIkluZm9QYWdlMiIsInBvc3Rlcl8yIiwiSW5mb1BhZ2UiLCJwZXJzb24yIiwicGVyc29uMSIsInBlcnNvbjQiLCJwZXJzb241IiwicGVyc29uNyIsInBlcnNvbjgiLCJwZXJzb24zIiwicGVyc29uNiIsIkNvbW1vbldyYXBwZXIiLCJNYWluU2VjdGlvbkZsZXgiLCJNYWluU2VjdGlvbiIsImNhcmRzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImlzRGF0YUluUGxhY2UiLCJjYXJkQ291bnQiLCJzZWN0aW9uc0ZvckZpbHRlciIsImluZm9QYWdlIiwibWFwIiwiY2FyZCIsImlkIiwiJG9pZCIsIklucHV0IiwiaW5wdXQiLCJpbnB1dENvbG9yIiwiSW5wdXRTdHlsZSIsIklucHV0V3JhcGVyIiwiU3R5bGVkU3BhbiIsInNwYW4iLCJFcnJvciIsIldhcm4iLCJSZWd1bGFySGVhZGVyIiwic2VhcmNoRmllbGQiLCJ1c2VSZWYiLCJlcnJvciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJoYW5kbGVyIiwic3RyIiwiU3RyaW5nIiwiY3VycmVudCIsInZhbHVlIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJ0eXBlIiwibXNnIiwicXVlcnkiLCJoYW5kbGVLZXlQcmVzcyIsImV2ZW50Iiwia2V5IiwiRmlsdGVyQ29udGFpbmVyIiwiRmlsdGVyU2VjdGlvbiIsIkRpdlRoaW5MaW5lIiwiU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXIiLCJncm93XzAiLCJrZXlmcmFtZXMiLCJsZWZ0IiwiZ3Jvd18xIiwiVGhpbkxpbmVJbm5lckRpdiIsImFuaW1hdGlvbiIsIlJlc3VsdHNGaWx0ZXIiLCJzZWN0aW9ucyIsInJlZExpbmVXaWR0aCIsInNldFJlZExpbmVXaWR0aCIsInJlZExpbmVMZWZ0Iiwic2V0UmVkTGluZUxlZnQiLCJzZXRBbmltYXRpb24iLCJtYXJrZWRTZWN0aW9uUmVmIiwicmVSZW5kZXJSZWRMaW4iLCJ0YXJnZXQiLCJjdXJyZW50U2VjdGlvbldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY3VycmVudFNlY3Rpb25MZWZ0IiwiY291bnRlciIsIm9uRmlsdGVyU2VjdGlvbkNsaWNrIiwic2VsZWN0ZWRTZWN0aW9uIiwic2VsZWN0ZWRTZWN0aW9uU3RyaW5nIiwic2VjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJJbmZvUGFnZSIsInJlbmRlcmVkU2VjdGlvbnMiLCJzZWMiLCJlIiwiZ2V0V2luZG93RGltZW5zaW9ucyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIndpbmRvdyIsIndpbmRvd0RpbWVuc2lvbnMiLCJzZXRXaW5kb3dEaW1lbnNpb25zIiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJncm91cDEiLCJncm91cDIiLCJncm91cDMiLCJteUNhcmRzIiwiY29uY2VydG1hc3RlcnMiLCJlbnNlbWJsZSIsImNvbmNhdCIsImZpbG1SZWR1Y2VyIiwiYWN0aW9uIiwibmV3Q2FyZHMiLCJmaWx0ZXIiLCJncm91cCIsInNsaWNlIiwibmV3Q2FyZHMxIiwibmV3Q2FyZHMyIiwicSIsInRvTG93ZXJDYXNlIiwibmV3Q2FyZHMzIiwiY2FyZE5hbWUiLCJib29sIiwic3RhcnRzV2l0aCIsImNyZWF0ZVN0b3JlIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FB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YWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanN4XCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgc3JjID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjExNjMwMjMtNmQ2ODc4MzVhZTJlMmEwZDZhODllODg4YTY5NDgwN2QucG5nXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6Mzg0MCxoZWlnaHQ6MjE2MCxmb3JtYXQ6XCJwbmdcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TWFpblNlY3Rpb259IGZyb20gJy4vY29tcG9uZW50cy9NYWluU2VjdGlvbic7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7Y2FyZFN0b3JlfSBmcm9tIFwiLi9zdG9yZS9DYXJkU3RvcmVcIjtcblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtjYXJkU3RvcmV9PlxuICAgICAgICAgICAgICAgIDxNYWluU2VjdGlvbi8+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtBaUZpbGxQbGF5U3F1YXJlLCBCc0ZpbGxQZXJzb25GaWxsLCBGYUJvb2tPcGVufSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vaG9va3MvVXNlV2luZG93RGltZW5zaW9uc1wiO1xuXG5jb25zdCBGaWxtV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6ICdKdXJhJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEZpbG1JbmZvID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuXG5jb25zdCBJZnJhbWVCb3ggPSBzdHlsZWQuaWZyYW1lYFxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XG4gIGhlaWdodDogNDgwcHg7XG4gIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogJ0p1cmEnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICA6aG92ZXIge1xuICAgIGNvbG9yOiBkYXJrcmVkO1xuICB9YDtcblxuZXhwb3J0IGNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IHtoZWlnaHQsIHdpZHRofSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgICBjb25zdCBbY2FsY3VsYXRlZFdpZHRoLCBzZXRDYWxjdWxhdGVkV2lkdGhdID0gdXNlU3RhdGUoNjQwKTtcblxuICAgIC8vaGFuZGxpbmcgcmVzaXplXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHdpZHRoIDwgMTAwMCkgc2V0Q2FsY3VsYXRlZFdpZHRoKHdpZHRoIC0gNTApO1xuICAgICAgICBlbHNlIHNldENhbGN1bGF0ZWRXaWR0aCg2NDApO1xuICAgIH0sIFt3aWR0aF0pO1xuXG4gICAgY29uc3QgW25hbWUsXSA9IHVzZVN0YXRlKHByb3BzLm5hbWUpO1xuICAgIGNvbnN0IFtjb21wb3NpdGlvbixdID0gdXNlU3RhdGUocHJvcHMuY29tcG9zaXRpb24pO1xuICAgIGNvbnN0IFt2aWRlb1VybCxdID0gdXNlU3RhdGUocHJvcHMudmlkZW9VcmwpO1xuICAgIGNvbnN0IFtzaG93SWZyYW1lLCBzZXRTaG93SWZyYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbb3BlblZpZGVvQnV0dG9uTmFtZSwgc2V0T3BlblZpZGVvQnV0dG9uTmFtZV0gPSB1c2VTdGF0ZShcItCS0ZbQtNC60YDQuNGC0Lgg0LLRltC00LXQvlwiKTtcblxuICAgIGNvbnN0IG9wZW5WaWRlb0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIHNldFNob3dJZnJhbWUoIXNob3dJZnJhbWUpO1xuICAgICAgICBpZiAoc2hvd0lmcmFtZSkge1xuICAgICAgICAgICAgc2V0T3BlblZpZGVvQnV0dG9uTmFtZShcItCS0ZbQtNC60YDQuNGC0Lgg0LLRltC00LXQvlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldE9wZW5WaWRlb0J1dHRvbk5hbWUoXCLQl9Cw0LrRgNC40YLQuCDQstGW0LTQtdC+XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZpbG1XcmFwcGVyPlxuICAgICAgICAgICAgPEZpbG1JbmZvPlxuICAgICAgICAgICAgICAgIDxzcGFuPjxCc0ZpbGxQZXJzb25GaWxsLz4gPGI+e25hbWV9PC9iPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxzcGFuPjxGYUJvb2tPcGVuLz4ge2NvbXBvc2l0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b3BlblZpZGVvSGFuZGxlcn0gdmFsdWU9e29wZW5WaWRlb0J1dHRvbk5hbWV9PntvcGVuVmlkZW9CdXR0b25OYW1lfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAge3Nob3dJZnJhbWUgPyA8SWZyYW1lQm94IHNyYz17dmlkZW9Vcmx9IHdpZHRoPXtjYWxjdWxhdGVkV2lkdGh9Lz4gOiBudWxsfVxuICAgICAgICAgICAgPC9GaWxtSW5mbz5cbiAgICAgICAgPC9GaWxtV3JhcHBlcj5cbiAgICApO1xufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QmlMaW5rRXh0ZXJuYWwsIEdpUG9kaXVtV2lubmVyfSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vMTE2MzAyMy5wbmdcIjtcbmltcG9ydCBwZXJzb24xIGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9CX0LDQutC+0L/QtdGG0YwtMS5wbmdcIjtcbmltcG9ydCBwZXJzb24yIGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9Ca0YPQt9C90ZTRhtC+0LLQsC0xLnBuZ1wiO1xuaW1wb3J0IHBlcnNvbjMgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0IbQstCw0L3QvtCy0LAg0Jsu0IYucG5nXCI7XG5pbXBvcnQgcGVyc29uNCBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy/QoNCw0LnRgiDQhi7QoS5wbmdcIjtcbmltcG9ydCBwZXJzb241IGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9Ce0YHRgtCw0L/Rh9GD0Log0JwuINCcLnBuZ1wiO1xuaW1wb3J0IHBlcnNvbjYgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0JzQsNGA0YbQtdCy0LAtMS5wbmdcIjtcbmltcG9ydCBwZXJzb243IGZyb20gXCIuL2luZm8tcGFnZS1pbWdzL9CX0LDRhdC+0LTRj9C60ZbQvS0xLnBuZ1wiO1xuaW1wb3J0IHBlcnNvbjggZnJvbSBcIi4vaW5mby1wYWdlLWltZ3Mv0JLQuNGI0L3QtdCy0YHRjNC60LAtMS5wbmdcIjtcbmltcG9ydCBwb3N0ZXJfMiBmcm9tIFwiLi9yZnMtcGFnZS1pbWdzL3Jmcy5wbmdcIjtcblxuZXhwb3J0IGNvbnN0IExpbmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke2xvZ299XCIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFBlcnNvbkluZm9TZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cblxuY29uc3QgUGVyc29uID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBUZXh0U2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gICAgICBmb250LWZhbWlseTogJ0p1cmEnLCBzYW5zLXNlcmlmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiBkYXJrc2xhdGVncmF5O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogODBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBgO1xuXG4gICAgY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICBsZWZ0OiA0MHB4O1xuICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgaGVpZ2h0OiAyOTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYDtcblxuXG4gICAgcmV0dXJuICg8PjxJbWFnZSBzcmM9e3Byb3BzLmltZ1VybH0vPjxUZXh0U2VjdGlvbj57cHJvcHMudGV4dH08L1RleHRTZWN0aW9uPjwvPik7XG5cbn1cblxuY29uc3QgRGl2ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gO1xuXG5jb25zdCBEaXYxID0gc3R5bGVkKERpdilgXG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3QgQSA9IHN0eWxlZC5hYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMzVweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG5cbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogZGFya3JlZDtcbiAgfVxuYDtcblxuY29uc3QgQTEgPSBzdHlsZWQoQSlgXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAzMHB4O1xuYDtcblxuY29uc3QgUCA9IHN0eWxlZC5kaXZgXG4gIGxlZnQ6IDQwMHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFBvc3RlciA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgUG9zdGVySW1nID0gc3R5bGVkLmltZ2BcbiAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDEwcHggcmdiYSgxMDAsIDAsIDAsIDAuNSkpO1xuICAgIGA7XG5cbiAgICByZXR1cm4gKDxQb3N0ZXJJbWcgc3JjPXtwcm9wcy5pbWdVcmx9Lz4pO1xufVxuXG5leHBvcnQgY29uc3QgSW5mb1BhZ2UyID0gKCkgPT4ge1xuICAgIHJldHVybiAoPFdyYXBwZXI+XG4gICAgICAgICAgICA8TGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8QSBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xX24wbkJWUnc3Y1Q4LXpSX0NLQlExWjhqbHR5LWN5SUovZWRpdD91c3A9c2hhcmluZyZvdWlkPTExMzg4MzkyMTI5OTE0NDQ0OTA1MyZydHBvZj10cnVlJnNkPXRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJpTGlua0V4dGVybmFsLz4g0KPRh9Cw0YHQvdC40LrQuCDQv9GA0L7QtdC60YLRgyDCq9Cg0ZbQstC90LXQvdGB0YzQutGWINGE0L7RgNGC0LXQv9GW0LDQvdC90ZYg0YHRgtGD0LTRltGWzIjCuyAyMDIzIDwvQT5cbiAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8UD7Ql9Cw0L/RgNC+0YjRg9GU0LzQviDQtNC+INGD0YfQsNGB0YLRliDRgyDQv9GA0L7QtdC60YLRljwvUD5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8UG9zdGVyIGltZ1VybD17cG9zdGVyXzJ9Lz5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG59XG5cblxuZXhwb3J0IGNvbnN0IEluZm9QYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiAoPFdyYXBwZXI+XG4gICAgICAgICAgICA8TGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8QSBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xYXVvSjhyV3NGb3BSd2JOV3JFcGhfREY2QmFvZk1aYWgvZWRpdD91c3A9c2hhcmluZyZvdWlkPTExMzg4MzkyMTI5OTE0NDQ0OTA1MyZydHBvZj10cnVlJnNkPXRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEdpUG9kaXVtV2lubmVyLz4g0JvQsNGD0YDQtdCw0YLQuCAyMDIxIDwvQT5cbiAgICAgICAgICAgICAgICA8QSBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xa2E3R3VWYzBtaEh6UjVqcTFxaFRDSG5sTmEwSGNYbUIvZWRpdD91c3A9c2hhcmluZyZvdWlkPTExMzg4MzkyMTI5OTE0NDQ0OTA1MyZydHBvZj10cnVlJnNkPXRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJpTGlua0V4dGVybmFsLz4g0J/QvtC70L7QttC10L3QvdGPPC9BPlxuICAgICAgICAgICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFxZHlMMG1YYWZvd0k4ODhzUEpMeU03eXVoWUpOUjcwYi9lZGl0P3VzcD1zaGFyaW5nJm91aWQ9MTEzODgzOTIxMjk5MTQ0NDQ5MDUzJnJ0cG9mPXRydWUmc2Q9dHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmlMaW5rRXh0ZXJuYWwvPiDQntGA0LPQsNC90ZbQt9Cw0YbRltC50L3QuNC5INC60L7QvNGW0YLQtdGCINC60L7QvdC60YPRgNGB0YMgPC9BPlxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxQPtCh0LrQu9Cw0LQg0LbRg9GA0ZY8L1A+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPFBlcnNvbkluZm9TZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb24yfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17YNCa0YPQt9C90ZTRhtC+0LLQsCDQni7Qni4tINCz0L7Qu9C+0LLQsCDQttGD0YDRliwg0LTQvtC60YLQvtGAINGE0ZbQu9C+0YHQvtGE0ZbRlywg0LrQsNC90LTQuNC00LDRgiDQv9C10LTQsNCz0L7Qs9GW0YfQvdC40YUg0L3QsNGD0LosINC/0YDQvtGE0LXRgdC+0YAg0LrQsNGE0LXQtNGA0LggIFxuICAgICAgICAgICAgICAgICAgICDQvNGD0LfQuNGH0L3Qvi0g0ZbQvdGB0YLRgNGD0LzQtdC90YLQsNC70YzQvdC+0LPQviDQstC40LrQvtC90LDQstGB0YLQstCwINCl0LDRgNC60ZbQstGB0YzQutC+0LPQviDQndCw0YbRltC+0L3QsNC70YzQvdC+0LPQviDQv9C10LTQsNCz0L7Qs9GW0YfQvdC+0LPQviDRg9C90ZbQstC10YDRgdC40YLQtdGC0YMg0ZbQvNC10L3RliBcbiAgICAgICAgICAgICAgICAgICAg0JMu0KHQutC+0LLQvtGA0L7QtNC4LCDQt9Cw0YHQu9GD0LbQtdC90LjQuSDQtNGW0Y/RhyDQvNC40YHRgtC10YbRgtCyINCj0LrRgNCw0ZfQvdC4LCAgXCLQktGW0LTQvNGW0L3QvdC40Log0L7RgdCy0ZbRgtC4INCj0LrRgNCw0ZfQvdC4XCIsINCy0ZbQtNC30L3QsNGH0LXQvdCwINC+0YDQtNC10L3QvtC8IFxuICAgICAgICAgICAgICAgICAgICDQnNGW0L3RltGB0YLQtdGA0YHRgtCy0LAg0LrRg9C70YzRgtGD0YDQuCAg0KPQutGA0LDRl9C90LggXCLQl9CwINC00L7RgdGP0LPQvdC10L3QvdGPINCyINGA0L7Qt9Cy0LjRgtC60YMgINC60YPQu9GM0YLRg9GA0LggINGWINC80LjRgdGC0LXRhtGC0LIgXCIsINGB0LXQutGA0LXRgtCw0YAgXG4gICAgICAgICAgICAgICAgICAgINCd0LDRhtGW0L7QvdCw0LvRjNC90L7RlyDQstGB0LXRg9C60YDQsNGX0L3RgdGM0LrQvtGXINC80YPQt9C40YfQvdC+0Zcg0YHQv9GW0LvQutC4LCDQs9C+0LvQvtCy0LAg0JDRgdC+0YbRltCw0YbRltGXINC/0ZbQsNC90ZbRgdGC0ZbQsiAg0J3QsNGG0ZbQvtC90LDQu9GM0L3QvtGXICDQstGB0LXRg9C60YDQsNGX0L3RgdGM0LrQvtGXIFxuICAgICAgICAgICAgICAgICAgICDQvNGD0LfQuNGH0L3QvtGXINGB0L/RltC70LrQuCwgINC/0YDQtdC30LjQtNC10L3RgiDQkNGB0L7RhtGW0LDRhtGW0Zcg0L/RltCw0L3RltGB0YLRltCyLdC/0LXQtNCw0LPQvtCz0ZbQsiDQo9C60YDQsNGX0L3QuChcIkVQVEFcIiBVa3JhaW5lKSwg0JLRltGG0LUtINC/0YDQtdC30LjQtNC10L3RgiAgXG4gICAgICAgICAgICAgICAgICAgINCQ0YHQvtGG0ZbQsNGG0ZbRlyDQv9GW0LDQvdGW0YHRgtGW0LIt0L/QtdC00LDQs9C+0LPRltCyINCE0LLRgNC+0L/QuCBcIkVQVEFcIiBMb25kb24pYH0vPlxuXG4gICAgICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjF9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwi0JfQsNC60L7Qv9C10YbRjCDQmy7QoS4tINCz0L7Qu9C+0LLQsCDQttGD0YDRliwg0LfQsNGB0LvRg9C20LXQvdC40LkgINC00ZbRj9GHINC80LjRgdGC0LXRhtGC0LIg0KPQutGA0LDRl9C90LgsINCy0LjQutC70LDQtNCw0Yct0LzQtdGC0L7QtNC40YHRgiDQm9GM0LLRltCy0YHRjNC60L7Qs9C+XG4gICAgICAgICAgICAgICAgICAgINC00LXRgNC20LDQstC90L7Qs9C+INC80YPQt9C40YfQvdC+0LPQviDQu9GW0YbQtdGOINGW0LzQtdC90ZYg0KEuINCa0YDRg9GI0LXQu9GM0L3QuNGG0YzQutC+0ZcsINC/0L7Rh9C10YHQvdC40Lkg0LDQvNCx0LDRgdCw0LTQvtGAINC80YPQt9C40YfQvdC+0ZcgINC60YPQu9GM0YLRg9GA0LggINCf0L7Qu9GM0YnRllwiLz5cblxuICAgICAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb240fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cItCg0LDQudGCINCGLtChLiwg0LrQsNC90LTQuNC00LDRgiDQv9C10LTQsNCz0L7Qs9GW0YfQvdC40YUg0L3QsNGD0LosICDQvdCw0YPQutC+0LLQuNC5INGB0L/RltCy0YDQvtCx0ZbRgtC90LjQuiDQu9Cw0LHQvtGA0LDRgtC+0YDRltGXINC10YHRgtC10YLQuNGH0L3QvtCz0L4g0LLQuNGF0L7QstCw0L3QvdGPXG4gICAgICAgICAgICAgICAgICAgINGC0LAg0LzQuNGB0YLQtdGG0YzQutC+0ZcgINC+0YHQstGW0YLQuCAg0IbQvdGB0YLQuNGC0YPRgtGDICDQv9GA0L7QsdC70LXQvCDQstC40YXQvtCy0LDQvdC90Y8gINCd0LDRhtGW0L7QvdCw0LvRjNC90L7RlyAg0LDQutCw0LTQtdC80ZbRlyAg0L/QtdC00LDQs9C+0LPRltGH0L3QuNGFICDQvdCw0YPQuiDQo9C60YDQsNGX0L3QuFwiLz5cblxuICAgICAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb241fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cItCe0YHRgtCw0L/Rh9GD0Log0JwuINCcLiwg0LTQvtGG0LXQvdGCINC60LDRhNC10LTRgNC4ICDQs9GA0Lgg0L3QsCAg0LzRg9C30LjRh9C90LjRhSDRltC90YHRgtGA0YPQvNC10L3RgtCw0YUg0IbQvdGB0YLQuNGC0YPRgtGDICDQvNC40YHRgtC10YbRgtCyICDQoNCU0JPQo1wiLz5cblxuICAgICAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb243fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cItCX0LDRhdC+0LTRj9C60ZbQvSDQni7Qki4sINC00L7RhtC10L3RgiDQutCw0YTQtdC00YDQuCDQtdGB0YLRgNCw0LTQvdC+0Zcg0LzRg9C30LjQutC4INCG0L3RgdGC0LjRgtGD0YLRgyAg0LzQuNGB0YLQtdGG0YLQsiAg0KDQlNCT0KNcIi8+XG5cbiAgICAgICAgICAgICAgICA8UGVyc29uIGltZ1VybD17cGVyc29uOH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9J9CS0LjRiNC90LXQstGB0YzQutCwINCGLtCfLiwg0LLQuNC60LvQsNC00LDRhyDQstC40YnQvtGXINC60LDRgtC10LPQvtGA0ZbRlywg0LPQvtC70L7QstCwINGG0LjQutC70L7QstC+0Zcg0LrQvtC80ZbRgdGW0ZcgXCLQpNC+0YDRgtC10L/RltCw0L3QvlwiXG4gICAgICAgICAgICAgICAgICAgINCg0ZbQstC90LXQvdGB0YzQutC+0LPQviDQvNGD0LfQuNGH0L3QvtCz0L4g0YTQsNGF0L7QstC+0LPQviDQutC+0LvQtdC00LbRgyDQoNCU0JPQoycvPlxuXG4gICAgICAgICAgICAgICAgPFBlcnNvbiBpbWdVcmw9e3BlcnNvbjN9IHRleHQ9e2DQhtCy0LDQvdC+0LLQsCDQmy7Qhi4sINCy0LjQutC70LDQtNCw0Ycg0L/QtdGA0YjQvtGXINC60LDRgtC10LPQvtGA0ZbRlyDQmtCXIFwi0JvRg9GG0YzQutCwINC80YPQt9C40YfQvdCwICDRiNC60L7Qu9CwIDNcImB9Lz5cblxuICAgICAgICAgICAgICAgIDxQZXJzb24gaW1nVXJsPXtwZXJzb242fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cItCc0LDRgNGG0LXQstCwINCWLtCfLiwg0YHRgtCw0YDRiNC40Lkg0LLQuNC60LvQsNC00LDRhywg0LfQsNCy0ZbQtNGD0Y7Rh9CwINGE0L7RgNGC0LXQv9GW0LDQvdC90LjQvCDQstGW0LTQtNGW0LvQvtC8INCg0ZbQstC90LXQvdGB0YzQutC+0Zcg0LTQuNGC0Y/Rh9C+0Zcg0LzRg9C30LjRh9C90L7RlyDRiNC60L7Qu9C4IOKEljEg0ZbQvNC10L3RliDQnC4g0JvQuNGB0LXQvdC60LBcIi8+XG4gICAgICAgICAgICA8L1BlcnNvbkluZm9TZWN0aW9uPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1Jlc3VsdHNGaWx0ZXJ9IGZyb20gXCIuL1Jlc3VsdHNGaWx0ZXJcIjtcbmltcG9ydCB7Q2FyZH0gZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1JlZ3VsYXJIZWFkZXJ9IGZyb20gXCIuL1JlZ3VsYXJIZWFkZXJcIjtcbmltcG9ydCB7SW5mb1BhZ2UsIEluZm9QYWdlMn0gZnJvbSBcIi4vSW5mb1BhZ2VcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8xMTYzMDIzLnBuZ1wiO1xuXG5jb25zdCBDb21tb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtsb2dvfVwiKTtcbiAgbWluLWhlaWdodDogMTAwMHB4O1xuYDtcblxuY29uc3QgTWFpblNlY3Rpb25GbGV4ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBNYWluU2VjdGlvbiA9ICgpID0+IHtcblxuICAgIGNvbnN0IGNhcmRzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2FyZHMpO1xuICAgIGNvbnN0IGlzRGF0YUluUGxhY2UgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5pc0RhdGFJblBsYWNlKTtcbiAgICBjb25zdCBjYXJkQ291bnQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXJkQ291bnQpO1xuICAgIGNvbnN0IHNlY3Rpb25zRm9yRmlsdGVyID0gW1xuICAgICAgICBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImAsXG4gICAgICAgIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFwiYCxcbiAgICAgICAgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcImAsXG4gICAgICAgIGDQo9GB0ZYg0LLRltC00LXQvmAsXG4gICAgICAgIGDQn9GA0L4g0LrQvtC90LrRg9GA0YFgLFxuICAgICAgICBcItCg0ZbQstC90LXQvdGB0YzQutGWINGE0L7RgNGC0LXQv9GW0LDQvdC90L3RliDRgdGC0YPQtNGW0ZdcIl07XG5cbiAgICBsZXQgaW5mb1BhZ2UgPSAoY2FyZENvdW50PT09LTEpPzxJbmZvUGFnZS8+OjxJbmZvUGFnZTIvPlxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbW1vbldyYXBwZXI+XG4gICAgICAgICAgICA8UmVndWxhckhlYWRlciBjYXJkQ291bnQ9e2NhcmRDb3VudH0vPlxuICAgICAgICAgICAgPFJlc3VsdHNGaWx0ZXIgc2VjdGlvbnM9e3NlY3Rpb25zRm9yRmlsdGVyfS8+XG4gICAgICAgICAgICB7aXNEYXRhSW5QbGFjZSA/IChcbiAgICAgICAgICAgICAgICA8TWFpblNlY3Rpb25GbGV4PlxuICAgICAgICAgICAgICAgICAgICB7Y2FyZHMubWFwKGNhcmQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjYXJkLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9Vcmw9e2NhcmQudmlkZW9Vcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9zaXRpb249e2NhcmQuY29tcG9zaXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXJkLmlkLiRvaWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgKSl9PC9NYWluU2VjdGlvbkZsZXg+KSA6IGluZm9QYWdlfTwvQ29tbW9uV3JhcHBlcj4pO1xufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtBaU91dGxpbmVGaWxlU2VhcmNoLCBIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcbiAgd2lkdGg6IDE1JTtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG5cbiAgOmhvdmVyIHtcbiAgICBib3JkZXI6IHNvbGlkIGRhcmtyZWQgMnB4O1xuICAgIGNvbG9yOiBkYXJrcmVkO1xuICB9YDtcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaW5wdXRDb2xvciB8fCBcInBhbGV2aW9sZXRyZWRcIn07XG5gO1xuXG5cbmNvbnN0IElucHV0U3R5bGUgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNTAlO1xuYDtcblxuY29uc3QgSW5wdXRXcmFwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNjBweDtcbmA7XG5cbmNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xuYDtcblxuY29uc3QgRXJyb3IgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxN3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtgXG5cbmNvbnN0IFdhcm4gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxN3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtgXG5cbmV4cG9ydCBjb25zdCBSZWd1bGFySGVhZGVyID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBzZWFyY2hGaWVsZCA9IHVzZVJlZigpO1xuICAgIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZXJyb3IpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICBsZXQgc3RyID0gU3RyaW5nKHNlYXJjaEZpZWxkLmN1cnJlbnQudmFsdWUpO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA8IDMgfHwgc3RyLmluY2x1ZGVzKFwiIFwiKSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiRVJST1JcIiwgbXNnOiBcItCR0YPQtNGMINC70LDRgdC60LAg0LLQstC10LTRltGC0Ywg0LHRltC70YzRiNC1IDMg0YHQuNC80LLQvtC70ZbQsiDRliDQvdC1INCy0LjQutC+0YDQuNGB0YLQvtCy0YPQudGC0LUg0L/RgNC+0LHRltC7XCJ9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIlNFQVJDSFwiLCBxdWVyeTogc3RyfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPElucHV0V3JhcGVyPlxuICAgICAgICAgICAgICAgIDxJbnB1dFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3Bhbj48QWlPdXRsaW5lRmlsZVNlYXJjaC8+0J/QvtGI0YPQuiDQstGW0LTQtdC+INC/0L4g0L/RgNGW0LfQstC40YnRgyDRg9GH0LDRgdC90LjQutCwIDwvU3R5bGVkU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfSByZWY9e3NlYXJjaEZpZWxkfSB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00ZbRgtGMINC/0YDRltC30LLQuNGJ0LUg0YPRh9Cw0YHQvdC40LrQsC4uLlwiIGlucHV0Q29sb3I9XCJibGFja1wiLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0U3R5bGU+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIlwiIG9uQ2xpY2s9e2hhbmRsZXJ9PtCf0L7RiNGD0Lo8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvSW5wdXRXcmFwZXI+XG4gICAgICAgICAgICB7ZXJyb3IgIT09IFwiXCIgPyA8RXJyb3I+PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz57ZXJyb3J9PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz48L0Vycm9yPiA6IG51bGx9XG4gICAgICAgICAgICB7cHJvcHMuY2FyZENvdW50ID09PSAwID9cbiAgICAgICAgICAgICAgICA8V2Fybj48SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPtCy0ZbQtNC10L4g0L3QtSDQt9C90LDQudC00LXQvdGWPEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz48L1dhcm4+IDogbnVsbH1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtGYUZvbGRlciwgRmFVbml2ZXJzaXR5fSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vaG9va3MvVXNlV2luZG93RGltZW5zaW9uc1wiO1xuXG5jb25zdCBGaWx0ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7YDtcblxuY29uc3QgRmlsdGVyU2VjdGlvbiA9IHN0eWxlZChGaWx0ZXJDb250YWluZXIpYFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbjogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogZGFya3JlZDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERpdlRoaW5MaW5lID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogZ3JheSBzb2xpZCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGhlaWdodDogMiU7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuYDtcblxuY29uc3QgZ3Jvd18wID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICB9XG4gIDAlIHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH07XG4gIH1cbmA7XG5cbmNvbnN0IGdyb3dfMSA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcbiAgfVxuICAwJSB7XG4gICAgbGVmdDogMXB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xuICB9XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBUaGluTGluZUlubmVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICBsZWZ0OiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogcmVkIHNvbGlkIDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBoZWlnaHQ6IDElO1xuICBhbmltYXRpb246ICR7cHJvcHMgPT4gKHByb3BzLmFuaW1hdGlvbiAlIDIgPT09IDApID8gZ3Jvd18wIDogZ3Jvd18xfSAwLjVzIGxpbmVhcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBSZXN1bHRzRmlsdGVyID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBbc2VjdGlvbnMsXSA9IHVzZVN0YXRlKHByb3BzLnNlY3Rpb25zKTtcblxuICAgIGNvbnN0IFtyZWRMaW5lV2lkdGgsIHNldFJlZExpbmVXaWR0aF0gPSB1c2VTdGF0ZShcIjEwcHhcIik7XG4gICAgY29uc3QgW3JlZExpbmVMZWZ0LCBzZXRSZWRMaW5lTGVmdF0gPSB1c2VTdGF0ZShcIjEwcHhcIik7XG4gICAgY29uc3QgW2FuaW1hdGlvbiwgc2V0QW5pbWF0aW9uXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHtoZWlnaHQsIHdpZHRofSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgICBjb25zdCBtYXJrZWRTZWN0aW9uUmVmID0gdXNlUmVmKCk7XG5cbiAgICAvL2hhbmRsaW5nIHJlZExpbmUgb24gcmVzaXplXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVSZW5kZXJSZWRMaW4oe3RhcmdldDptYXJrZWRTZWN0aW9uUmVmLmN1cnJlbnR9KVxuICAgIH0sIFt3aWR0aF0pO1xuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gICAgZnVuY3Rpb24gcmVSZW5kZXJSZWRMaW4oZXZlbnQpIHtcbiAgICAgICAgbWFya2VkU2VjdGlvblJlZi5jdXJyZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBsZXQgY3VycmVudFNlY3Rpb25XaWR0aCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgbGV0IGN1cnJlbnRTZWN0aW9uTGVmdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gMTA7XG4gICAgICAgIHNldFJlZExpbmVXaWR0aChjdXJyZW50U2VjdGlvbldpZHRoICsgXCJweFwiKTtcbiAgICAgICAgc2V0UmVkTGluZUxlZnQoY3VycmVudFNlY3Rpb25MZWZ0ICsgXCJweFwiKTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBhbmltYXRpb24gKyAxO1xuICAgICAgICBzZXRBbmltYXRpb24oY291bnRlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25GaWx0ZXJTZWN0aW9uQ2xpY2soc2VsZWN0ZWRTZWN0aW9uLCBldmVudCkge1xuICAgICAgICByZVJlbmRlclJlZExpbihldmVudCk7XG4gICAgICAgIGxldCBzZWxlY3RlZFNlY3Rpb25TdHJpbmcgPSBzZWxlY3RlZFNlY3Rpb24uc2VjdGlvbjtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRTZWN0aW9uU3RyaW5nKTtcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZFNlY3Rpb25TdHJpbmcpIHtcbiAgICAgICAgICAgIGNhc2UgYNCg0ZbQstC90LXQvdGB0YzQutGWINGE0L7RgNGC0LXQv9GW0LDQvdC90ZYg0YHRgtGD0LTRltGXYDpcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJSRlNfUEFHRVwifSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGDQo9GB0ZYg0LLRltC00LXQvmA6XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiQUxMXCJ9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XCJgOlxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTFcIn0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcImA6XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZ3JvdXAtMlwifSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXCJgOlxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTNcIn0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVySW5mb1BhZ2Uoc2VjdGlvbikge1xuICAgICAgICBpZiAoc2VjdGlvblswXT09PVwi0KDRltCy0L3QtdC90YHRjNC60ZYg0YTQvtGA0YLQtdC/0ZbQsNC90L3QvdGWINGB0YLRg9C00ZbRl1wiKXtcbiAgICAgICAgICAgIHJlUmVuZGVyUmVkTGluKHNlY3Rpb25bMV0pO1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiUkZTX1BBR0VcIn0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVSZW5kZXJSZWRMaW4oc2VjdGlvblsxXSk7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJJTkZPX1BBR0VcIn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlbmRlcmVkU2VjdGlvbnMgPSBzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgc2VjdGlvbiA9PT0gXCLQn9GA0L4g0LrQvtC90LrRg9GA0YFcIiB8fCBzZWN0aW9uID09PSBcItCg0ZbQstC90LXQvdGB0YzQutGWINGE0L7RgNGC0LXQv9GW0LDQvdC90L3RliDRgdGC0YPQtNGW0ZdcIj9cbiAgICAgICAgICAgIDxGaWx0ZXJTZWN0aW9uICBvbkNsaWNrPXsoKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2VjID0gW3NlY3Rpb24sZXZlbnRdXG4gICAgICAgICAgICAgICAgcmVuZGVySW5mb1BhZ2Uoc2VjKVxuXG4gICAgICAgICAgICB9fSBrZXk9e3NlY3Rpb259PiA8RmFVbml2ZXJzaXR5Lz57c2VjdGlvbn08L0ZpbHRlclNlY3Rpb24+XG4gICAgICAgICAgICA6IDxGaWx0ZXJTZWN0aW9uICByZWY9e21hcmtlZFNlY3Rpb25SZWZ9IG9uQ2xpY2s9e2UgPT4gb25GaWx0ZXJTZWN0aW9uQ2xpY2soe3NlY3Rpb259LCBlKX0ga2V5PXtzZWN0aW9ufT4gPEZhRm9sZGVyLz57c2VjdGlvbn08L0ZpbHRlclNlY3Rpb24+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxGaWx0ZXJDb250YWluZXIgY2hpbGRyZW49e3JlbmRlcmVkU2VjdGlvbnN9Lz5cbiAgICAgICAgICAgIDwvU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXI+XG4gICAgICAgICAgICA8RGl2VGhpbkxpbmU+PFRoaW5MaW5lSW5uZXJEaXYgd2lkdGg9e3JlZExpbmVXaWR0aH0gbGVmdD17cmVkTGluZUxlZnR9IGFuaW1hdGlvbj17YW5pbWF0aW9ufS8+PC9EaXZUaGluTGluZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG4iLCJ2YXIgc3JjID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcItCG0LLQsNC90L7QstCwINCbLtCGLTZmZGQ3ZWJlMjZiMThjZjlkZGEyYzg4NGFhNjYxYThlLnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjI2MSxoZWlnaHQ6NDMxLGZvcm1hdDpcImpwZWdcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07IiwidmFyIHNyYyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCLQktC40YjQvdC10LLRgdGM0LrQsC0xLTUzYTk3YjQ2NzQxYzE0ZTViZDAzZjRjNGVlZWZkYjIyLnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjUwMCxoZWlnaHQ6NTAwLGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiLCJ2YXIgc3JjID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcItCX0LDQutC+0L/QtdGG0YwtMS01YTM4NjgwY2NkNjJjNmM2YzEzMDAwZTFkMjAwMjdkMC5wbmdcIjttb2R1bGUuZXhwb3J0cz17c3JjOnNyYyx3aWR0aDoyODIsaGVpZ2h0OjUwMCxmb3JtYXQ6XCJwbmdcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07IiwidmFyIHNyYyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCLQl9Cw0YXQvtC00Y/QutGW0L0tMS02NjExN2QxMGE2NmY2M2JjYmQxYWFkNzA5NWUxOGJmOS5wbmdcIjttb2R1bGUuZXhwb3J0cz17c3JjOnNyYyx3aWR0aDozMDQsaGVpZ2h0OjUwMCxmb3JtYXQ6XCJwbmdcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07IiwidmFyIHNyYyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCLQmtGD0LfQvdGU0YbQvtCy0LAtMS1kZGFjZjdhMmU2MzYzZTUxNGY1NjM3ZjRiYjMyZWNhZC5wbmdcIjttb2R1bGUuZXhwb3J0cz17c3JjOnNyYyx3aWR0aDozNjksaGVpZ2h0OjUwMCxmb3JtYXQ6XCJwbmdcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07IiwidmFyIHNyYyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCLQnNCw0YDRhtC10LLQsC0xLTU3MTAzM2IxYWQ1MTEzNjVjNDQ1MzY5YmVjMWUxZjYyLnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjI3NixoZWlnaHQ6NDQ0LGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiLCJ2YXIgc3JjID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcItCe0YHRgtCw0L/Rh9GD0Log0JwuINCcLWIyMTA1MzNjNjgzMWVjNjM4OTE3NjY0MDdjYTIwMTdhLnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjQzMyxoZWlnaHQ6NTc3LGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiLCJ2YXIgc3JjID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcItCg0LDQudGCINCGLtChLWIyMTkyZGRjM2NjZDg4ZGZmZTk1NTVkZTI1MDFmMTg4LnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjUwMSxoZWlnaHQ6NDk4LGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiLCJ2YXIgc3JjID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInJmcy0yM2E5ZmY0MjNiNjU2ZTRmN2ExYmQ0MmRhOTY0MzY5Zi5wbmdcIjttb2R1bGUuZXhwb3J0cz17c3JjOnNyYyx3aWR0aDoyNzAwLGhlaWdodDozOTAwLGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBnZXRXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIGNvbnN0IHsgaW5uZXJXaWR0aDogd2lkdGgsIGlubmVySGVpZ2h0OiBoZWlnaHQgfSA9IHdpbmRvdztcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2luZG93RGltZW5zaW9ucygpIHtcbiAgICBjb25zdCBbd2luZG93RGltZW5zaW9ucywgc2V0V2luZG93RGltZW5zaW9uc10gPSB1c2VTdGF0ZShnZXRXaW5kb3dEaW1lbnNpb25zKCkpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgICAgICAgc2V0V2luZG93RGltZW5zaW9ucyhnZXRXaW5kb3dEaW1lbnNpb25zKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gd2luZG93RGltZW5zaW9ucztcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0JykpO1xuXG4iLCJpbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCdcblxuY29uc3QgZ3JvdXAxID0gYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XCJgO1xuY29uc3QgZ3JvdXAyID0gYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXCJgO1xuY29uc3QgZ3JvdXAzID0gYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcImA7XG5cbmxldCBteUNhcmRzID0gW1xuICAgIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzA3XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCQ0LPRgNCw0YLRltC90LAg0KHRgtCw0L3RltGB0LvQsNCyLCA5INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JPQu9GW0L3QutCwLiAnJ9Cf0L7Rh9GD0YLRgtGPJycsICAgICAgMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQotCw0L3QvtC6JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOTR5dF9zS0M1RXQzcjQ5ekNFUnNkQlplRFFnWS1HX2kvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwOFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQktCw0LvRltCz0YPRgNCwINCS0LDRgNCy0LDRgNCwLCA5INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCcLtCb0LXQvNGW0YjQutC+LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWM2aFRJcURsLWNBRjNCcjNsMWMydXdxRlpzTFZTUFR2L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMDlcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JLQsNC70ZbQs9GD0YDQsCDQktCw0YDQstCw0YDQsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi7QnNCw0LrRgdGW0LzQvtCyLiAnJ9CX0LDQtNC30LXRgNC60LDQu9C70Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE1WXI2UXhtNHJzdERPTVUydkduNUp3cTVWZlVwTjJTRC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzBhXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCS0LDRgdC40LvQtdCy0YHRjNC60LAg0KXRgNC40YHRgtC40L3QsCw3INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7Qk9GW0LvQu9C+0LouJyfQodCw0LzQvtGC0L3RjyDQsdCw0LvRjNC90LAg0LfQsNC70LAnJywgICAyKdCiLtCg0L7RgdGC0LjQvNCw0YjQtdC90LrQvi4nJ9Cn0LDQutC70YPQvScnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUd0eFVLdVVrTEtBbmg1b0NmOUZsdWlVVFFvSkNUYk1NL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JLQvtC70LjQvdC10YbRjCDQntC70LXQutGB0LDQvdC00YAsIDgg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCa0L7Qu9C+0LTRg9CxLiAnJ9CQ0YDQutCw0L0nJywyKdCkLtCg0LjQsdGW0YbRjNC60LjQuS4gJyfQoNC10LPQvtGC0YPRiNC60LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfQ09QZVB6d2RnUzdVX09qRXhPcHY4bm96MW1pVGU4Yy9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzBjXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCT0LDQu9Cw0LPQsNC9INCa0LDRgtC10YDQuNC90LAsIDkg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQtdC80LAg0Lcg0LLQsNGA0ZbQsNGG0ZbRj9C80LgsIDIp0JMu0JrRg9GI0L3QsNGA0LXQvdC60L4uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvQmxVZlhXcWxoNXVEc0RGQ1hiSGdjN1hHaUFKR2JMSC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzBkXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCT0LXRgNCw0YHQuNC80LXQvdC60L4g0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDkg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQki7QoNCw0YfQutC+0LLRgdGM0LrQuNC5LiDQotC+0LrQsNGC0LjQvdCwLiAyKdCSLtCa0L7RgdC10L3QutC+LiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xREduc1NRR2xCdThYX29EUHQzWUt0S21pVnpWLUczcUovcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwZVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQk9C+0LvQvtC00L7QstGB0YzQutCwINCh0L7RhNGW0Y8sIDcg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCGLtCS0LDQvdGF0LDQu9GMLtCg0L7QvdC00L4sIDIp0Jwu0JTRgNC10LzQu9GO0LPQsC4nJ9CS0LXRgdC10LvQsCDQs9GA0LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEyS3V0ai1vd3BzcjhoZWxybV9rRlpoMXlRd01qRUM3QS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzBmXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCT0L7Qu9GD0LEg0JDQu9GW0L3QsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCDQhtGHLiwgMinQkS7QlNCy0LDRgNGW0L7QvdCw0YEuINCf0YDQtdC70Y7QtNGW0Y9cIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdXdoS01LZEpaSWhSem5NM1ZVNW1UcUV1S3h4VGVzYU8vcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxMFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQk9GA0LjQs9C+0YAn0ZTQstCwINCa0LDRgtC10YDQuNC90LAsIDgg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Cg0LDQvdC+0LonJywgICAyKdCGLtCa0L7RgNC+0LvRjNC60L7QstCwLicn0JPQvtGA0L7QsdGH0LjQuicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFpTXY1THdZVjltMnd6LVNKTUdueGZVcUlSVDlNX0V3L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JTQsNC90Y7QuiDQhNC70LjQt9Cw0LLQtdGC0LAsIDcg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCb0Y7QsdCw0YDRgdGM0LrQuNC5Licn0KLQsNC90YbRjtCy0LDQu9GM0L3QsCcnLCAyKSDQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuINCS0LDQu9GM0YFcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdlRrX21BQl9FQ2g5VkR3UjZFTWFzWTF5MjFLV3JTWUgvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxMlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQlNGA0L7Qs9Cw0L0gINCc0ZbQu9Cw0L3QsCwgNSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JzQsNC50ZTRgC4gJyfQktC10YHQtdC70LAg0LPRgNCwJycsIDIp0JQu0JHQsNGI0YLQtdC50L0uICcn0JLQsNC70YzRgSDRgdC70L7QvdC10L3Rj9GCJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWGIwZ0lnRnlDbkx1Q3hqbjVrbGFlUTBMbDlEc2tSUHovcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxM1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQlNGA0L7Qt9C00L7QstCwINCE0LvQuNC30LDQstC10YLQsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS7QnNC10L3Rg9C10YIuIDIp0JMu0JrQu9Cw0YHRgdC10L0uINCf0L7Qu9GM0LrQsFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyNV8xOHBSN0JMeERTREVuTUQ3ckhOR2pSOXppRWlHbi9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE0XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCX0LHRltGAINCc0LDRgNGW0Y8sIDgg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCT0LXQtNGW0LrQtS4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsICAgINCGINGHLiwgMinQoC7QqNGD0LzQsNC9Licn0J/QtdGA0YjQsCDQstGC0YDQsNGC0LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfN3FuM2ZUdXRkS0djR2RiZ3YxM3JLb2tKOGp4Z2szYS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE1XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCG0LLQsNC90YzQutGW0LIg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDkg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCU0ZbQsNCx0LXQu9C70ZYuINCh0LrQtdGA0YbQviwgIDIp0J4u0JPQtdC00ZbQutC1LiAnJ9Cc0LDQu9C10L3RjNC60LAg0L8n0ZTRgdCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdlllVmtSYVYxbWIzM3VKMURHTXIyMHFvaWtGQ3I5QXkvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxNlwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JzQsNGA0ZbQsNC8LCA4INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0JzQsNC50LrQsNC/0LDRgC4gJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDRgdC+0LvRjCDQvNGW0L3QvtGAXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJSbExNSmpvV3dUVnVwN192Vk1ENEQzbmwyWS1sc3BPL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTdcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjtC6INCc0LDRgNGW0LDQvCwgOCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QmtC40YDQtdC50LrQvi4gJyfQodGC0YDQuNCxLdGB0LrQvtC6JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSW1wUHE5bmNiTWg1VDFTY0FIZkRtejU3QkRsTFpDRjIvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxOFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQhtGB0YPQv9C+0LLQsCDQkNC70ZbRgdGW0Y8sIDgg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QoNC10LnQvdC10LrQtS4gJyfQk9Cw0LLQvtGCJycsIDIp0Jku0KEu0JHQsNGFLiAnJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINC00L4g0LzRltC90L7RgFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwZzlDQ0pvWFJ6ZUc4Q2lGaGduRUJ6VFFCTElXRGFuQS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE5XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0L7QstCw0LvQtdC90LrQviDQktCw0YDQstCw0YDQsCwgOCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0JPQtdGC0LDQu9C+0LLQsC4nJ9Cg0LDQvdC+0Log0LIg0LvRltGB0ZYnJywgIDIp0JIu0J/QvtC00LLQsNC70LAuICcn0JrQsNC/0YDQuNC30YPQu9GPJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUzM4X29FQ09CbzdLR0RWMWF6SlV4M3pPWXdnUUVRSVYvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxYVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQmtC+0YDQtdC90ZbQstGB0YzQutCwINCU0LDRgCfRjywgOSDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCgLtCS0LDQvdC00LDQuy4nJ9CS0L7QtNC+0LPRgNCw0LknJywgICAgICAgICAyKdCfLtCX0LDRhdCw0YDQvtCyLicn0JfQvdCw0LnQvtC80LjQuSDRgdC40LvRg9C10YInJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5Q0F6UENhV3JBTl9TV3phSkZkRXB4UElPUXctcmZMVS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzFiXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCa0L7RgdGC0LXQvdC60L4g0K/RgNC+0YHQu9Cw0LLQsCwgNyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QmtC+0YHQtdC90LrQvi4gJyfQnNC10LvQvtC00ZbRjycnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNkZFljb3lnVGN0b2FiR1FGN3BUMnBvUnZDdXBWR19jL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWNcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JrQvtGB0YLQtdC90LrQviDQr9GA0L7RgdC70LDQstCwLCA3INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtCZ0ZTQvdGB0LXQvS4nJ9Cn0LDRgNGW0LLQvdC40Lkg0YLQsNC90L7QuicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXVCMjliVFBFaVlkdWdKZkxPWmw0U1FHckZZOW5RcHItL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JvQsNGC0LrQvtCy0YHRjNC60LAg0ITQu9C40LfQsNCy0LXRgtCwLCA5INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtC+0YHQtdC90LrQvi4g0JLQsNC70YzRgSwgICAgMinQni7Qk9GA0LXRh9Cw0L3RltC90L7Qsi4nJ9Cc0ZbQuSDQutC+0L3QuNC6JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNllBdy1xN2Y4RjlKQlBtZm44dEVrcEpUODFKN0VhaEEvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxZVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQm9GW0YjQvNCw0L0g0JTQsNGA0LjQvdCwLCA5INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7Qn9C+0LTQstCw0LvQsC4nJ9Cc0LDRgNGILdCz0YDQvtGC0LXRgdC6JycsICAgICAgICAgIDIp0KEu0JzQsNC50LrQsNC/0LDRgC4gJyfQmtC+0LvQuNGB0LrQvtCy0LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOc1d6M1RSMFNLaVR0Y05DQUplMDU5YmhoRm9tdF9ORS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzFmXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCc0LDQs9C+0LvQsCDQodC+0YTRltGPLCA4INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K8u0JHQvtCx0LDQu9GW0LouJyfQodCy0Y/RgtC60L7QstCwINC/0L7Qu9GM0LrQsCcnOyAyKdCGLtCR0LXRgNC60L7QstC40YcuINCh0L7QvdCw0YLQuNC90LAg0YHQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFndUF4czVnX3diR3ZfdHdxaXlwbzBlOEZIT3d1bS1JaC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzIwXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCc0LDQt9GD0YDQtdC90LrQviDQnNCw0LnRjywgOCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JwuINCR0L7QsdC10YAuICcn0JDQs9C10L3RgiDQpScnLCAgICAgICAgICAyKdCGLtCG0L7RgNC00LDQvS4gJyfQn9C+0LvRjtCy0LDQvdC90Y8g0L3QsCDQvNC10YLQtdC70LjQutCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSWUxV0NRcGdQdUxZZEtOeFZHdUxrZUlWbllKTlpKOVQvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyMVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQnNCw0YDRh9C10L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLicn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0LTQviDQvNGW0L3QvtGALCAyKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQkdCw0LHQsCDQr9Cz0LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFaSm80R1VMWjlzZmNVdUFwRjVqeW9ISVVWX0lLQVZyZy9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzIyXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCc0LDRgNGH0YPQuiDQnNCw0LrRgdC40LwsIDgg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0KQuINCo0L/RltC90LTQu9C10YAuINCh0L7QvdCw0YLQuNC90LAsINGC0LIuMTU3IOKEljRcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xc0M3TVVqY2tucm5aWlo1aGZNQ1hiU3ZzMzZLQTNwcFYvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyM1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQnNCw0YDRh9GD0Log0JzQsNC60YHQuNC8LCA4INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQk9GW0LvQu9C+0LouICcn0JrQsNC/0YDRltGH0ZbRlNGC0YLQvicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVlkQWlodkFRa0NUOGJieVc0NHBRaTJpWmhtWDFjM0t6L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JzQvtGC0YPQt9C60LjQvdCwINCb0ZbQtNGW0Y8sIDkg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0JHRltC70LDRh9C10L3QutC+LiAnJ9Cj0LrRgNCw0ZfQvdGB0YzQutC40Lkg0YLQsNC90L7QuicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJwTzlkSEFjYlA4S2xhV1RfMW5YWFFpWmVidUQ4RjBwL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjVcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JzQvtGC0YPQt9C60LjQvdCwINCb0ZbQtNGW0Y8sIDkg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JzQvtGG0LDRgNGCLiAnJ9Cc0LXQvdGD0LXRgicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNfbXhBVTY1VnZ2dmZpUG9SUXNjS1Iwb1VEV3BIRFF0L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J3QvtCy0L7RgdGW0LvRjNGB0YzQutCwINCa0LDRgtC10YDQuNC90LAsIDcg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwINGC0LIuMzYsINCGLdCG0IbQhtGHLiwgMinQhi7QkdC10YDQutC+0LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVk3MkNGTE9NUGlid1RVUGdXT21zUUgzWUpQdmlCakRhL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjdcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J7Qu9GM0YXQvtCy0YHRjNC60LAg0JDQvdGW0YLQsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQhi7Qn9Cw0LLQu9GW0LouICcn0KHQvdGW0LbQuNC90LrQuCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJzLVZnRk1uSVlaVm05a09qTmg2RlRsX1AwQ0FEUkIxL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjhcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J7Qu9GM0YXQvtCy0YHRjNC60LAg0JDQvdGW0YLQsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQnS4g0JrQsNGA0L/QtdC90LrQvi4g0JXRgtGO0LQg0YHRliDQvNGW0L3QvtGAXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtTM0JxUXc0LW1zTW96bk8zTnpfaVdjNXl0bEpPRlRtL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjlcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J7RgdGC0LDQv9GH0YPQuiDQmtCw0YDRltC90LAuIDgg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCT0ZbQu9C70L7QuiAnJ9CU0LfQstGW0L3QvtGH0LrQuCcnLCAyKdCGLtCl0YPRgtC+0YDRj9C90YHRjNC60LjQuS4gJyfQktC+0LPQvdGW0LLQvtGH0LrQsC3RgdGC0YDQuNCx0YPQvdGW0LLQvtGH0LrQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZSQWNOMk82a3VuS1pBRnJiZ0JIc0VOaVpnOWlLczRHL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMmFcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J7RhdGA0ZbQvSDQr9GA0LXQvNCwLCA4INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5LiAnJ9Cd0L7QstC10LvQsCcnLCAgICAgIDIp0KEu0JzQsNC50LrQsNC/0LDRgC4nJ9Ci0L7QutCw0YLQuNC90LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6dzFKSzBKNGQ4SGstem5idi01b0RuYS1xTDNjd1JFUC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJiXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCf0LDQstC70LXQvdC60L4g0KHRgtC10YTQsNC90ZbRjywgNyDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCb0Y7QsdCw0YDRgdGM0LrQuNC5LiAnJ9Cf0ZbRgdC90Y8nJywyKSDQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuJyfQmtC70L7Rg9C90LgnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJbW53SmoyRGVxei1USmZ2WEFDQ3JacGlaTlQzQm5LSC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJjXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCf0LDQvdGM0LrQvtCy0LAg0JDQvdC90LAsIDgg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuICcn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0LTQviDQvNGW0L3QvtGALCAgICAgICAgMinQmy7QqNGD0LrQsNC50LvQvi4gJyfQhtC90YLQtdGA0LzQtdGG0L4nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5ckFIcjZpMTdOU2hQNXFhSW1Qbld4LXhKUWpDTU15Mi9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJkXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCf0LDRgNGE0YzQvtC90L7QsiDQlNC80LjRgtGA0L4sIDkg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCS0LvQsNC00LjQutGW0L3QsC3QkdCw0YfQuNC90YHRjNC60LAuJyfQqdC+0YHRjCDRgdGD0LzQvdC1JycsIDIp0J4u0JPQtdC00ZbQutC1LiAnJ9Ci0LDQvdC10YbRjCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5EZHc1N1Jzcm1MckVfeVdTRzB1RkpYRWpXY0dxR21SL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMmVcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0J/QvtCz0L7RgNGU0LvQvtCyINCQ0YDRgtC10LwsIDkg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4gJyfQnNC10L3Rg9C10YInJywgMinQnS7QndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4gJyfQmtC+0LvQvtC80LjQudC60LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuZTg2aU0tTlVzNk5jaW9Cc3ZVamZRYTZNbjdjU0FSNy9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJmXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCf0YPQt9Cw0L3QvtCy0LAg0JzQsNGA0ZbRjywgOSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KMuINCT0ZbQu9C70L7Qui4gJyfQmtC+0YDQvtC70ZbQstGB0YzQutC40Lkg0LzQtdC90YPQtdGCJycsIDIp0IYu0IbQvtGA0LTQsNC9LiDCq9Cf0L7Qu9GO0LLQsNC90L3RjyDQvdCwINC80LXRgtC10LvQuNC60LDCu1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPR1NfZnF6SnZiQjdhTlByZXh3cURLNXgwbHMtMjBDQy9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzMwXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCg0LXQt9C90ZbQuiDQotC10YLRj9C90LAsIDkg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCi0L7RgNC+0L/QvtCy0LAuINCS0LDRgNGW0LDRhtGW0ZcsICAgICAyKdCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4gJyfQnNCw0LvQtdC90YzQutC40Lkg0LbQvtC90LPQu9C10YAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4R3hOVFR0V3JoZE91Nlk3R3VlVUFnR1h2am9MbE1CbC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzMxXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCg0LjQsdCw0Log0JDQvdCw0YHRgtCw0YHRltGPLCA4INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSku0JzQtdC70LDRgNGC0ZbQvS4nJ9Cg0LDQvdC+0LonJywgMinQnC7QnNCw0LnRlNGALicn0J3QtdC30LLQuNGH0LDQudC90LAg0L/RgNC40LPQvtC00LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1em1WcUZWbm5RYUlHWDdvM0gtN3ROZTBrcDFaaVV2UC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzMyXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCg0ZbQv9C90LjQuSDQkdC+0LPQtNCw0L0sIDgg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQhi4g0JHQtdGA0LrQvtCy0LjRhy4g0JLQsNGA0ZbQsNGG0ZbRlywgICAgIDIp0JQuINCg0L7Rg9C70ZYuJyfQkiDQutGA0LDRl9C90ZYg0LPQvdC+0LzRltCyJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUWxyMV8tcEZBbExJaXhLa2h4Mi1aeHhFWVpoQVo5WjcvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzM1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQoNC+0LzQsNC90YfQtdC90LrQviDQldC70LjRgdC10LksIDgg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQqC7Qk9GD0L3Qvi4nJ9Cc0LDRgNGIINC80LDRgNGW0L7QvdC10YLQvtC6JycsICAgMikg0J4u0JPRgNC10YfQsNC90ZbQvdC+0LIuJyfQndC10LfQstC40YfQsNC50L3QsCDQv9GA0LjQs9C+0LTQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlJLXpqcTRRaW1ETDlUTEU1QlJZdXJtdUFMMTZmU2NVL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KHQsNC50YfRg9C6INCv0YDQvtGB0LvQsNCy0LAsIDkg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIuINCc0LDQutGB0LjQvNC+0LIuJyfQkdCw0LHQsCDQr9Cz0LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYNUM3a2ZOZDNRbG9abDBUQXZOX0FRaDAtcVh0cFNTQi9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM1XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCh0LDQudGH0YPQuiDQr9GA0L7RgdC70LDQstCwLCA5INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCaLtCg0L7Qu9C70ZbQvS4gJycg0KjQvtC60L7Qu9Cw0LTQvdC1INC/0LXRh9C40LLQvicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZ2WW1fRWREeF8tM0JSSEpNeUQzNWszb0M0RjJ0VjU2L3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KHRltGC0YjQsNGU0LLQsCDQl9Cw0YDQtdC80LAsIDkg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy7QkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgDsgMinQmi7QodC70L7QvdGW0LzRgdGM0LrQuNC5LiAnJ9CU0Y7QudC80L7QstC+0YfQutCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSDZlZFF0c1JwMF93Y3VPWVJBRWgxbGZmUnowVFh0aWIvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzN1wiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCE0LLQs9C10L3RltGPLCA5INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtCy0LDRgdC90LXQstGB0YzQutC40LkuJyfQlNGD0LzQutCwJycsIDIp0JQu0JDQu9C10LrRgdCw0L3QtNC10YAuICcn0JfQuNC80L7QstCwINGA0LDQv9GB0L7QtNGW0Y8nJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2TFc5RWVzUFBzMVNUaTZrUXBReGRFSnprM1BnbkhZai9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM4XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCh0YLRgNC40LnRgdGM0LrQsCDQkNC80LXQu9GW0Y8sIDgg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQki7QmtC+0YHQtdC90LrQvi4nJ9CU0L7RidC40LonJzsgICAgICAyKdCeLtCR0ZbQu9Cw0YfQtdC90LrQvi4gJyfQldC60YHQv9GA0L7QvNGCJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMGg5T05SRzJUNDJ2eEFsV3k0QVNQMHFnYThJVTAycnYvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzOVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodGC0YPQtNC30LjQvdGB0YzQutCwINCE0LvQuNC30LDQstC10YLQsCwgNyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLiDQnNC+0YbQsNGA0YIuICcn0JzQtdC90YPQtdGCJycsICAgIDIp0KMuINCT0ZbQu9C70L7Qui4gJyfQntGB0ZbQvdC90ZbQuSDQtdGB0LrRltC3JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVmRzT2J1YjlaMEU3Wk0xUVlNc2Zxa2Fsam5uTFEyamUvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzYVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQodGD0YXQsNC9INCU0ZbQsNC90LAsIDgg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmy7QqNGD0LrQsNC50LvQvi7QktCw0YDRltCw0YbRltGXINC90LAg0YLQtdC80YMg0JIu0KjQsNGX0L3RgdGM0LrQvtCz0L47IDIp0KAu0KTRg9GH0YEuJyfQnNCw0LvQtdC90YzQutC1INGA0L7Qt9Cx0LjRgtC1INGB0LXRgNGG0LUnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHdTV1Y29DR0ZoeUVuTWgzLUlEVUotdUYwVHVqMzdVWi9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNiXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCi0LXRgNC/J9GP0Log0JDQsNGA0L7QvSwgOSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCGLtCR0LXRgNC60L7QstC40YcuINCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRg9C60YDQsNGX0L3RgdGM0LrRgyDRgtC10LzRgzsgMinQoi7QntGB0YLQtdC9LiAnJ9Cc0LDQu9C10L3RjNC60LjQuSDQtdC70YzRhCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVp0UWJOQkJnR21Pek1Xbm5IQUYtN19DQnNYazNMdy0yL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzM2NcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KLQuNC80YfQtdC90LrQviDQndCw0LTRltGPLCA4INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0KjRgtC+0LPQsNGA0LXQvdC60L4uICcn0JzQtdGC0LXQu9C40LonJywgMinQki7Qk9GW0LvQu9C+0LouICcn0JzRltGB0Y/Rh9C90LUg0YHRj9C50LLQvicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBTOUFHSHlFRHFzdGpxQTFNaUViVGtwNWoxVXVTaHJHL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzM2RcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KLRltGJ0LXQvdC60L4g0JLQtdGA0L7QvdGW0LrQsCwgNyDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiAnJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINC00L4g0LzRltC90L7RgCwgMinQmy4g0KjRg9C60LDQudC70L4uINCS0LDRgNGW0LDRhtGW0ZdcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRnRyajlrNWpoRHhWaTV1ZmhYWTNUSGt3T0s4WTEySG0vcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzZVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQotC+0LTQvtGA0L7QstCwINCU0LDRj9C90LAsIDYg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCR0LDRgNCy0ZbQvdGB0YzQutC40LkuICcn0JfQsNC50YfQuNC6JycsICAgICAgICAgIDIp0Jwu0JvRjtCx0LDRgNGB0YzQutC40LkuICcn0J/Qu9GP0YHQvtCy0LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFQQXpJQnRqRzBOZnFhelVJMjVIc1JyRlZYakx5ejJCaS9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNmXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCi0L7QvdGW0ZTQstC40Ycg0JrRgdC10L3RltGPLCA5INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QodC/0ZbQu9GW0L7RgtGWLicn0JPRg9GG0YPQu9GP0YLQsCcnLCAgIDIp0JIu0JPRltC70LvQvtC6Licn0KMg0YHRgtCw0YDQvtC80YMg0JLRltC00L3RlicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTE5dzN3bkhNcDZYTldTS0tyOVZKSW9ZalZJUDlNbEFPL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzNDBcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KLRjtGC0YzQutC+INCS0L7Qu9C+0LTQuNC80LjRgCwgOSDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0JrRg9C70LDRgy7QodC+0L3QsNGC0LjQvdCwLCDRgtCyLjU1IOKEljMsIDIp0KAu0JvRltGB0L7QstCwLicn0JLQtdGB0LXQu9C40Lkg0L3QsNGB0YLRgNGW0LknJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFiZy1ISzdMcDNVd2pHazNNSVRUZEQ5ZVE3ckZkaHgxSC9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzQxXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCk0LXRgdC10L3QutC+INCQ0L3QvdCwLCA4INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JPQtdC00ZbQutC1LtCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCAgMinQki7Qk9Cw0LLRgNC40LvRltC9LiAnJ9Ca0LDQv9GA0ZbRh9GH0ZbQvicnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVqcnE4WkVYQkpxX0FOZkFpWS01aktIN1JzNThmTHVDL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzNDJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KfQvtGA0L3QtdC5INCv0L3QsCwgNyDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLiDQldC60YjRgtC10LnQvS4gJyfQmtCw0L/RgNC40Lcg0LPQvdC+0LzRltCyJyc7ICAyKdChLtCu0YTQtdGA0L7Qsi4gJyfQndC+0LrRgtGO0YDQvScnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWc2YkI3YXFXcHR3NWxMbkFpWGtsT0ZwUWw0WDBOTEtqL3ByZXZpZXdcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzNDNcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0KjQutGD0YDQutC+INCi0LjQvNC+0YTRltC5LCA5INGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0KjQvtC/0LXQvS4gJyfQktCw0LvRjNGBJycg0LvRjyDQvNGW0L3QvtGALCAgICAgMinQmy7QqNGD0LrQsNC50LvQvi4gJyfQktC10YHQtdC70LAg0LzQvtC30LDRl9C60LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFlSko0NFpiZ1RyVVRkSC10QlBLR3ljMUtfMHJyeWo0Xy9wcmV2aWV3XCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzQ0XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCu0YDRh9GD0Log0K/QvdCwLCA3INGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JwuINCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAsINGC0LIuMzYg4oSWMSwg0IYg0YcuLDIp0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4gJyfQktGA0LDQvdGW0YjQvdGPINC80L7Qu9C40YLQstCwJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb1BVdUgycXphUVVMeXB2dXkzTTZRLWY3dnZoWmxBbngvcHJldmlld1wiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0NVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQkNC80ZbRhdCw0LvQsNC60ZbQvtCw0ZQg0ITQvNC10LvRjNGP0L0sIDEwINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QkdGW0LvQsNGH0LXQvdC60L4uJyfQntGB0ZbQvdC90ZbQuSDQtdGB0LrRltC3JycsIDIp0Jwu0JrQsNGA0LzRltC90YHRjNC60LjQuS4gJyfQk9GD0LzQvtGA0LXRgdC60LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xemZxa3lHNkJwWjNfMVhYZGZfRlZZT1dGbXBha2pXV1AvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNDZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JDQvdGC0L7QvdGO0Log0JLQsNGA0LLQsNGA0LAsIDEyINGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItCGLtCf0LvQtdC50ZTQu9GMLiDQodC+0L3QsNGC0LjQvdCwINGA0LUg0LzQsNC20L7RgFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xREplSGYzZkF1WjU1UGY2NW1NQXR3MlBjdDk2ZGZhLXQvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNDdcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JDQvdGC0L7QvdGO0Log0JLQsNGA0LLQsNGA0LAsIDEyINGA0L7QutGW0LIgXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCc0LDQudC60LDQv9Cw0YAuJyfQkiDQutC+0LLQsNC70YzQvdGWJydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWxYeUt1d01fSmd4WVpsNmVXa0FzZVU2dk5hV3o3cFl6L3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzQ4XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCR0LDQsdGH0LDQvdGW0Log0JDQvdC00YDRltC5LCAxMCDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCULtCn0LjQvNCw0YDQvtC30LAuINCh0L7QvdCw0YLQuNC90LAg0YHQvtC70Ywg0LzQsNC20L7RgC4gMinQri7QkdGW0LvQutC+0LLRgdGM0LrQuNC5LiAnJ9Cg0L7Qt9C00YPQvNC4JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVIQXNOS2pjSmlCZ3hBZElMT3NqREVSSktRTXplcTdBL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzQ5XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCR0LDQu9GD0YLQsCDQkNC70ZbQvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKSDQlS7Qk9GA0ZbQsy4gJyfQotCw0L3QtdGG0Ywg0Lcg0JnQvtC70YzRgdGC0LXRgNCwJycsIDIp0Jsu0JfQsNCx0LDRgNCwLicn0J3RltGHINGP0LrQsCDQvNGW0YHRj9GH0L3QsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvWEdGM200MUstUU44WTEtV19qODVEclRqa2s4OHNRWC9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0YVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQkdCw0YHQuNGB0YLQsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTIg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQpC7QqNC+0L/QtdC9LiDQktCw0LvRjNGBLCDRgtCyLjY0IOKEljEsIDIp0KEu0JHQvtGA0YLQutC10LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPLCDRgtCyLjYg4oSWMVwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xc1BXWlNQbjRVTUpWZGZ6NzNncmFEd2R3SXh5WGdqQlkvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JHRltC70ZbQvdC60LXQstC40Ycg0J3QsNGC0LDQu9GW0Y8sIDEyINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jwu0JvQuNGB0LXQvdC60L4uINCV0LvQtdCz0ZbRjywyKdCaLtCn0LXRgNC90ZYuINCV0YLRjtC0IOKEljEg0YLQsi43NDBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUFSX1dXMENGU1NDWHpWQWZySFh1d0JBRC1fUUM4ajZXL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzRjXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCR0YPQu9GM0LrQvtCy0YHRjNC60LAg0JzQsNGA0LjQvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIiDQlC7Qp9GW0LzQsNGA0L7Qt9CwLiDQodC+0L3QsNGC0LAg0YHQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYm94ZHRnQWRoQklKZHRjeGR6blpIUC1xNWZhcWE1UUsvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGRcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JHRg9C70YzQutC+0LLRgdGM0LrQsCDQnNCw0YDQuNC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0JPQsNCx0LXQuy4gJyfQlNC10YDQtdCy0L4g0LbQuNGC0YLRjycnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmWFo2TmRzTjZ1Nzh0STZlcktFalgyb2Zlc0hCMmViaC9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0ZVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQktCw0LrRg9C70LXQvdC60L4g0JDRgNGW0L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0JHQtdGA0LrQvtCy0LjRhy4g0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGC0LXQvNGDINCz0YDRg9C30LjQvdGB0YzQutC+0Zcg0L3QsNGA0L7QtNC90L7RlyDQv9GW0YHQvdGWICcn0KHQstGW0YLQu9GP0YfQvtC6JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNkdFhvVnpqRWwxWXFWQ2RCeXhLc1pkcUVqZnQxaHM2L3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzRmXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCS0LDQutGD0LvQtdC90LrQviDQkNGA0ZbQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QlNC20L7Qv9C70ZbQvS4nJ9CQ0YDRgtC40YHRgiDQtdGB0YLRgNCw0LTQuCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHbnRpWXZMekhyVVhJc1dEZmRIcDQwLXR0NXlZdWlncS9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1MFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQktCw0YHQuNC70YzRlNCy0LAg0JLQtdGA0L7QvdGW0LrQsCwgMTIg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCgLtCT0LvRltGU0YAuINCf0YDQtdC70Y7QtNGW0Y8g0LTQviDQvNGW0L3QvtGAOzIp0KEu0JTQttC10YDQsdCw0YjRj9C9LiAnJ9Co0LLQuNC00LrQuNC5INGA0YPRhScnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFRQmd0ZGh3MklRZVRINlFFWW5LTEdCYWxYMEsydXBONC9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1MVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQktC+0LnRgtC10L3QutC+INCb0ZbQu9GW0Y8sIDEwINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JsuINCo0YPQutCw0LnQu9C+Licn0J/QvtC90ZYnJywgMinQni7QoNC40LHQsNC70L7QstCwLiAnJ9Cd0LXQv9C+0YHQuNC00LAnJ1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLUxfa0pIdTFQcGtQR1JDSl9FZnhGTEJibWM4Zk9Pd3EvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTJcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JLQvtC50YfQtdC90LrQviDQktC70LDQtNC40YHQu9Cw0LIsIDExINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEpINCZLtChLtCR0LDRhS7QlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGE0LAg0LzQsNC20L7RgDsgMinQpC7QqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXd1NWtsWEdHN0JoMmZQbFIzWWJlTWxTS1pCVDhQUm5OL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzUzXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCS0L7RidC40L3RgdGM0LrQuNC5INCG0LvQu9GPLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JUu0JPRgNGW0LMuINCd0L7QutGC0Y7RgNC9LCAyKdCcLtCg0LjQvNGB0YzQutC40Lkt0JrQvtGA0YHQsNC60L7Qsi4gJyfQn9C+0LvRltGCINC00LbQvNC10LvRjycnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3bGJTMEw5NTZhTlo5RDBHVEktcC1rMzl6NGxwZWhDNy9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1NFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQk9Cw0LvQtdGH0LXQsiDQhtCy0LDQvSwgMTEg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQntCx0YAuINCTLtCR0LXQtyfRj9C30LjRh9C90L7Qs9C+LiAnJ9Cd0ZbRhyDRj9C60LAg0LzRltGB0Y/Rh9C90LAnJywgMinQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9Cd0LXQsNC/0L7Qu9GW0YLQsNC90YHRjNC60LAg0L/RltGB0LXQvdGM0LrQsCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0LVo4MnZZa1ZGMXgyTnBucUsxX3hoQWYyYld1YVBRVi9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1NVwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQk9Cw0LzQt9Cw0LvRltGU0LLQsCDQl9C10LnQvdCw0LEsIDEyINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JHRltC70L7RgNGD0YEuINC90LDRgC7Qv9GW0YHQvdGPICcn0JHRg9C70YzQsdCwJycsINC+0LHRgC7QlC7Qm9GM0LLQsC3QmtC+0LzQv9Cw0L3RltC50YbRj1wiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZFFxR0ZwaE9HbzBWcEdvVWQ0ejRVM2VuOUxUYzE5cGsvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSwge1xuICAgIFwiaWRcIjoge1xuICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTZcIlxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwi0JPQsNC80LfQsNC70ZbRlNCy0LAg0JfQtdC50L3QsNCxLCAxMiDRgNC+0LrRltCyIFwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7Qk9Cw0LnQtNC9LiDQnNC10L3Rg9C10YJcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVd3XzgwMEpQdkg2OVl0ak9ORUNKSDhWdFpfZVpra3lrL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU3XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCT0ZbQu9GW0L3QsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTEg0YDQvtC60ZbQslwiLFxuICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCc0L7RhtCw0YDRgtCQ0YDRltGPOyAyKdCULtCT0YDQsNC00LXRgdC60ZYuJyfQnNC+0YDQvtC30LjQstC+LiDQoNC10LPRgtCw0LnQvCcnXCIsXG4gICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmM0s1MEdWY3c4a3NkWWdSTXhWNjFhZFJBRkg1UEtNdy9wcmV2aWV3IFwiLFxuICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG59LCB7XG4gICAgXCJpZFwiOiB7XG4gICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1OFwiXG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCLQk9C+0YDQsNC5INCv0YDQvtGB0LvQsNCyLDEyINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QodC60L7RgNC40LogJyfQnNC10LvQvtC00ZbRjycnLCAgICAgICAgIDIpINCfLtCR0LDQt9Cw0LvQsC4gJyfQn9C+0YLRltC6JydcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVDYm43eFB2RWJySENwTVRobkNJajVRdGduNnJWU19mL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU5XCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCT0L7RhtGD0LvQtdC90LrQviDQktGW0LrRgtC+0YDRltGPLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JHQsNGFLiDQlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINC70Y8g0LzRltC90L7RgCwgMikg0KQu0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0g4oSWMjFcIixcbiAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTcxSUNNXzdHaHJhbzFSTjZ1ZzBYTG9STkpLb2JhUkdRL3ByZXZpZXcgXCIsXG4gICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbn0sIHtcbiAgICBcImlkXCI6IHtcbiAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVhXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiBcItCT0YPQutCw0YHRj9C9INCb0ZbQsNC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAu0KXQsNGH0LDRgtGD0YDRj9C9LiBcXFwi0JDQvdC00LDQvdGC0ZbQvdC+XFxcIlwiLFxuICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMklkQWZTaV93YVU2bHJOZlV2UDJIMHgwV083OGFNR2EvcHJldmlldyBcIixcbiAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxufSxcbiAgICB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVhYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPQutCw0YHRj9C9INCb0ZbQsNC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLtCl0LXQu9C70LXRgC4g0KHQvtC90LDRgtC40L3QsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWt0T1ZDM1RSX0FFNHVSYkc2Mk94TktWam9OSnFpdVBtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPQu9GP0ZTQstCwINCE0LLQsCwgMTHRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCfLiDQl9Cw0YXQsNGA0L7Qsi4nJ9CV0LvQtdCz0ZbRjycnLCAyKSDQky7QktCw0LvQu9C10L3Qs9Cw0YPQv9GCLiAnJ9Ch0LrQtdGA0YbQuNC90L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJiY203Rl9CZkFlcU1FemZRaFo2ZkYzWTIxYTdyWXN3L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1Y1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPRgtC90LjQuiAg0JrRltGA0LXQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0KjRltGC0YLQtS4nJ9Ci0LDQvdC10YbRjCAg0LPQvdC+0LzRltCyJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuaURxTmlDSnUzQ0xTM0VHNUJXSHVCX0FxN3Y0NVJzMy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GD0YLQvdC40Log0JrRltGA0LXQvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0J4u0KHQvtC70L7QstGP0L3QtdC90LrQvi4nJ9Cf0L7QvdGWINCx0ZbQu9GPINGG0LjRgNC60YMnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWg3cTBZYVlpeTZBNnM2QnB3X1R4dHpyd3dTX0F6OUx4L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCU0L7RgNC+0YjQtdC90LrQviDQrtC70ZbRjywgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JwuINCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAsINGC0LIuMzYg4oSWNiwg0IYg0Yc7IDIpINCGLtCR0LXRgNC60L7QstC40YcuINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuNDYg4oSWMTVcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHbEZDTEMzeF8xdFpDT2ZtTmhOMG00VDBQT0pZQlRqTi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNGD0LTRltC9INCU0LzQuNGC0YDQviwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALNCGLdCG0IYg0YcuOyAyKdChLtCf0YDQvtC60L7RhCfRlNCyLiAnJ9Ca0LDQt9C+0YfQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4Ym00eC1WZnpIenV6QjRqVGhic1BoOElhQ2E5NHR0Qi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhNGA0LzQvtC70LXQvdC60L4g0JTQsNGA0LjQvdCwLCAxMiDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEuINCR0LDRhS4g0JDRgNGW0Y8g0YDQtSDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdTdNNkNYaXlzVWZKdXU2TS1BdkI3NzRXZW4wQW51Wk4vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzYxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0ITRgNC80L7Qu9C10L3QutC+INCU0LDRgNC40L3QsCwgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCR0ZbQu9Cw0YguICcn0JHQsNGA0LrQsNGA0L7Qu9CwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoT1JmNHVWdm9XNTRwVEN4Z0syekltZ3hZeEg0N1lvby9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQl9Cw0LPQsNGU0LLRgdGM0LrQsCDQodC+0YTRltGPLCAxMiDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QmtC70LDRgdGB0LXQvSAnJ9Cc0YPQt9C40YfQvdC40Lkg0LXRgdC60ZbQtycn4oSWMSwgMinQni7QmtC40LzQu9C40LouJyfQm9C10L7QvdGC0L7QstGW0LDQvdCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF3MVRQaDlKWHNBamVfS3BFOVFQcDVJdjBFdWptdmpHLS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC90ZbQutC+0LLQsCDQnNCw0YDRltGPLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCc0L7RhtCw0YDRgi4g0KHQvtC90LDRgtCwIOKEljE2LCDQhiDRh9Cw0YHRgtC40L3QsCwgIDIp0J4u0JPRgNC40LHQvtGU0LTQvtCyLiDQktCw0LvRjNGBXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWDF2aHNUSVBrSTV6aXMyMkpIT1h4UVVEZE9CZTlBOUcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjtC6INCS0ZbRgNGB0LDQstGW0Y8sMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QpdC+0LTQvtGILicn0KfQtdGA0LLQvtC90LAg0YjQsNC/0L7Rh9C60LAnJywgMinQhi7QqdC10YDQsdCw0LrQvtCyLicn0JXQu9C10LPRltGPINC60LjRl9Cy0YHRjNC60LjRhSDQv9Cw0LPQvtGA0LHRltCyJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFNN0kxUUpiRmtXQlFId0sxbEhLb3lvRTMwbC1XYzEybS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQh9Cy0LbQtdC90LrQviDQkNC00LAsIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli7QodC+0L3QsNGC0LjQvdCwINGB0L7Qu9GMINC80LDQttC+0YAsIDIp0Jwu0KHQutC+0YDQuNC6LiAnJ9Cd0LDRgNC+0LTQvdC40Lkg0YLQsNC90LXRhtGMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrcG02azBNQ3R1amc3c1BIOWRjb2RZMGt6MUJyR0VYOS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0LzQsNC90YfQuCDQhNC70LjQt9Cw0LLQtdGC0LAsIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQsNC70ZbRgdGC0YDQsNGC0L7Qsi4nJ9Ca0L7QvdC40Log0JPQvtGA0LHQvtC60L7QvdC40LonJywgMinQri7QktC10YHQvdGP0LouICcn0J3RltC20L3RltGB0YLRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbWxXYUxZc0Q4ZmtCUUhnZHJYLVJmTkNrZDZ3UnJQa08vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNGA0LDRiNC60LXQstC40Ycg0KXRgNC40YHRgtC40L3QsCwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGA0LUg0LzRltC90L7RgCwgMinQnC7QlNGA0LXQvNC70Y7Qs9CwLiAnJ9Ch0LrQtdGA0YbQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRUJHaE5JcHRKU2VpMEdaTEtwc2Z5YUloaTNVYWUwY0gvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRltGG0LXRgNCwINCQ0LvRltC90LAsIDExINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0JTQtdCx0Y7RgdGB0ZYgJyfQoNC+0LzQsNC90YLQuNGH0L3QuNC5INCy0LDQu9GM0YEnJywgMinQkS7QpNGW0LvRjNGGLiAnJ9Ch0LrQtdGA0YbQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTm92c29nX3c1MnB6R2tmSjJoWnhpaHYzM0MyY1NmMEovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtGA0L7Qu9GMINCE0LvRltC30LDQstC10YLQsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQn9GW0YHQvdGPINC20LDQudCy0L7RgNC+0L3QutCwJyc7IDIp0Jsu0KjRg9C60LDQudC70L4uINCf0YDQtdC70Y7QtNGW0Y9cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrYnJHbDhfSWhmcW5qa3ZUdm9XaDc5bWdtOXBRNWtUSi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YLQu9GP0YDQtdCy0YHRjNC60LAg0K7Qu9GW0Y8sIDExINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmS4g0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINGB0L7Qu9GMINC80LDQttC+0YAsINCG0YcuXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRkFXSEhLUTVveDBFVEpMdnVyclJnWjJkT20xdnRGa2UvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtGC0LvRj9GA0LXQstGB0YzQutCwINCu0LvRltGPLCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiJ9CT0LDQvdC00LfRjycnLCDQvtCx0YAu0IQg0JLQtdCy0YDQuNC60LBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrSXZkc3ZJcnhlbzgxNmQtX01WNW5iYmNyLWFPWmhFcC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YLQvtCy0LAg0JzQsNGA0ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0JrQu9GO0YfQsNGA0YzQvtCyLicn0KjRg9GA0LDQu9GUJycsIDIp0KQu0JzQtdC90LTQtdC70YzRgdC+0L0uJyfQn9GW0YHQvdGPINCx0LXQtyDRgdC70ZbQsicnLCDRgtCyLjE5IOKEljJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZMWNXXzJaaXdCRU4wWWMxS3JXV25jWDM3NnpnYUQ1Qi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGA0LjQstC+0LHQsNCx0LrQviDQmtGB0LXQvdGW0Y8sIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmy7QqNGD0LrQsNC50LvQvi4gJyfQktC10YHQvdGP0L3RliAg0LrRgNCw0L/Qu9C40L3QutC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFkSUpna0xJTzJlN2xjTnB1QVJqeG11ZHcwM3hqbmMzMi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGA0LjQstC+0LHQsNCx0LrQviDQmtGB0LXQvdGW0Y8sIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnS7QmtCw0YDQv9C10L3QutC+LiDQldGC0Y7QtCAg0YDQtSDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQjQtRWJSWU8tYmNDamZ1cHBlSFhTaHY1RFF6dWk5aEEvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRg9GC0LrQvtCy0YHRjNC60LAg0JvQsNGA0LjRgdCwLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQlS7Qk9GA0ZbQsy4gJyfQndC+0LrRgtGO0YDQvScnLCDRgtCyLjU0IOKEljQsIDIp0KIu0JrRg9C70ZbRlNCyLiAnJ9Cb0LXQt9Cz0ZbQvdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFjbVFCZHNtMmVwd1pTX21VSngzZ3AxVzU4Mlp5V2Q3L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCbadC30L7Qs9GD0LEg0JDRgNGB0LXQvSwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQky7QodCw0YHRjNC60L4uJyfQoNC10LPRgtCw0LnQvCcnLCAyKdCfLtCX0LDRhdCw0YDQvtCyLicn0KHRgtCw0YDQvtCy0LjQvdC90LAg0LHQsNC70LDQtNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExU0ZrV0Z2V25fVUdOSks3YzdaMUxsSjJOYXNNOUtzZy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9Cw0L3RgdGM0LrQuNC5INCE0LLQs9C10L0sIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQoNCw0L3QutC+0LLQsCDQvNC+0LvQuNGC0LLQsCcnLCDRgtCyLjM5LCAyKdCGLtCR0LXRgNC60L7QstC40YcuINCi0L7QutCw0YLQsCDQu9GPINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWblBGTHM1eEhDdDBUTDJzZDFFOVdXeWhUQjhrR1R1aC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C10LLQsNC90LTRltCy0YHRjNC60LAg0JzQsNGA0YLQsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLtCR0LDRgNCy0ZbQvdGB0YzQutC40LkuICcn0KPQutGA0LDRl9C90YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZWanhBZUIzZE96SnBBVERYeUktMUFCdFJpemp6am9kL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0LXQstCw0L3QtNGW0LLRgdGM0LrQsCDQnNCw0YDRgtCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0K8uINCh0ZbQsdC10LvRltGD0YEuINCV0YLRjtC0INGC0LIuIDc2IOKEljJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE4SzdyZ1J6akNxWi1fNUVXcjBFb0U1SmxuVHloZ1pTNC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C10LfQsCDQkNC90L3QsCwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9IOKEljIwLCAyKdCfLtCX0LDRhdCw0YDQvtCyLiAnJ9Cg0L7QvdC00L4t0LPQsNC70L7QvycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVHdmMnNKM185QXIzb09UbVpXS3Y2cThTTWE5ZkdhLXAvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQuNC60L7QstCwINCS0LDRgNCy0LDRgNCwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQki7Qk9GW0LvQu9C+0LouJydCaWxsIGJhaWxleScnLCAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Co0LDRgNC80LDQvdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWRFNUxjZlYtVDhRaExYaUFmbjhzeExFTWVjdmdTLWhPL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0ZbQu9GW0Log0JzQsNGA0ZbRjy3QnNCw0LPQtNCw0LvQuNC90LAsIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCo0L7Qv9C10L0uICcn0JDRgNC60YPRiCDQtyDQsNC70YzQsdC+0LzQsCcnINC80ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YAsIDIp0Jwu0JrQvtC70LXRgdGB0LAuICcn0KHQutC10YDRhtC40L3QvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcXRpY2R1QVFRbTcyTmN5OGUtc3Q2bmtqcXdCckZTVGUvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNC60LDRgNC10LLQuNGHINCQ0L3QtNGA0ZbQuS3QntC70LXQutGB0LDQvdC00YAsIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4g0KLRgNC40LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDRgNC1INC80LDQttC+0YAsIDIp0Jou0KfQtdGA0L3Rli4g0JXRgtGO0LQg4oSWNSwg0YLQsi4yOTlcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpVnVCUGZ3NEhuY1BKa0puMnlOWlp3OFVYbFVYSkhWYy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0YbRltCx0L7RgNGB0YzQutCwINCQ0L3QvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmS4g0JHQsNGFLiDQlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGB0ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YAsICAgIDIpINCkLiDQr9C60LjQvNC10L3QutC+LiAnJ9CV0LvQtdCz0ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU3JZdHRKRmRpenN1QmUweU5zS3JORGdKVVBfQWloYU4vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQtdC70YzQvdC40Log0JzQuNGF0LDQudC70L4sIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli4g0YHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsIDIp0JIu0JrQvtGB0LXQvdC60L4uICcn0JTQvtGJ0LjQuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYzBwV2pHb2dEYUVZQ1JDc2t6Y3E5VmRVbEh5LWhzaEcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQtdGA0LrRg9C70L7QstCwINCc0LDRgNGW0Y8sIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQlC7Qp9GW0LzQsNGA0L7Qt9CwLtCh0L7QvdCw0YLQsCDRgdC+0LvRjCDQvNCw0LbQvtGAOyAyKSDQnC4g0JbQtdGA0LHRltC9LiDQktCw0LvRjNGBXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xajVwRUQ3d1EzQUhQMHBOeDlWTzRQcDhkcmlsOWFNemYvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNCz0LDQu9GO0Log0KDRltCw0L3QvdCwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnLCAgIDIp0JIu0JPRltC70LvQvtC6Licn0JrQsNGA0L3QsNCy0LDQuyDQsiDQoNGW0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXA1U01PZUJhVXowanpYOEEwbDZYNE45eXZ0d0cwdzhtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3Y1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LjRgNCz0L7RgNC+0LQg0JLRgdC10LLQvtC70L7QtCwxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCa0YPQu9Cw0YMuINCh0L7QvdCw0YLQuNC90LAg0YTQsCDQvNCw0LbQvtGALNCGINGHLjsgMinQnC7Qm9C40YHQtdC90LrQvi4gJyfQldC70LXQs9GW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtweHN1UkpubDN0NjRsYk84dmlWZ2ZHc3dfYU1rUlNtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0L7RgNC+0LfQvtCy0LAg0KLQtdGC0Y/QvdCwLCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JHQtdC90LTQsC7QodC+0L3QsNGC0LjQvdCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNXU0b0s0dUl2OTIzQmJod0h1UXhjMmtiMnpXNERJbUcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdkZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0L7RgNC+0LfQvtCy0LAg0KLQtdGC0Y/QvdCwLCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0KjQtdCy0YfQtdC90LrQviBcXFwi0JLQtdGH0ZbRgFxcXCJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGeS1MMDRFQWZjcTdJMWJScHg1cEU4bHlkSUJ5VDNTRi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2VcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNGD0L3RgtGP0L0g0J3QsNGC0LDQu9GW0Y8sIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiDQotC10LzQsCDQtyDQstCw0YDRltCw0YbRltGP0LzQuCwgICAgICAgMinQmy7QqNC40YLRgtC1Licn0IbRgdC60YDQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVmpOSGNXV2d0bWJha1VYbXBjM2g3ZmhvTjVncHM5UlYvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7QsdC+0YDQutGW0L3QsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlS7Qk9GA0ZbQsy4nJ9Cc0LXQu9C+0LTRltGPJycsICAgIDIp0Jsu0KjRg9C60LDQudC70L4uICcn0JHQsNCz0LDRgtC10LvRjCcnIOKEljVcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjaDJ3dnp4dFI3RVIyLTZpRExVZ3ZDQXF1VWl2OGRWZi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C10L3QtNGO0YAg0KHQvtGE0ZbRjywgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J4u0JTQsNGA0LPQvtC80LjQttGB0YzQutC40LkuJyfQktCw0LvRjNGBJycsIDIp0Jwu0KHQutC+0YDQuNC6Licn0J3QsNGA0L7QtNC90LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXNERzZ3bmdwS0hjTVNPYU9pX1lsVUdrdWNhZEJBcEJKL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LXRgNC10YLRj9GC0YzQutC+INCQ0L3QsNGB0YLQsNGB0ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLtCT0YDRltCzLiAnJ9Ci0LDQvdC10YbRjCDRltC3INCZ0L7Qu9GM0YHRgtC10YDQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMF9MZ3YtZkxPZDN5UEFtTm1XQ2Q4WU4zbFN3WEhMS0cvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzgyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QtdGA0LXRgtGP0YLRjNC60L4g0JDQvdCw0YHRgtCw0YHRltGPLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC7QmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwIOKEljQsINGC0LIuMzZcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEzd3NJLXNzVFB4OWVhMHFaSEZZc3ZzUDJudVBiU0RKNy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C+0LfQvdGP0Log0JLQtdC90ZbQsNC80ZbQvSwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JQu0J/Rg9C70LXQvdC6LiDQodGC0LDQutC60LDRgtC+LiAyKSDQmy7QkdC10YLRhdC+0LLQtdC9LiDQktC10YHQtdC70LAt0YHRg9C80L3QsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXZzYmMyR3ZIWUFyZ2dQNTctWjV3RmxHd2NoTXBOcDNFL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YDQvtC60L7Qv9GO0Log0JzQsNGA0LjQvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQhi7QkdGW0LvQsNGH0LXQvdC60L4uINCV0LrRgdC/0YDQvtC80YIuIDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuINCi0LDQvdC10YbRjFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVFuOURRTDJOSEplT2ZHSERIWXdhdVo2MnZpbnJmbEF5L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LXRiNC10YLQvdGW0LrQvtCy0LAg0JvRjtC00LzQuNC70LAsIDExINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCeLtCR0ZbQu9Cw0YfQtdC90LrQvi4nJ9Ce0YHRltC90L3RltC5INC10YHQutGW0LcnJywgMinQni7Qn9C+0LvRjNC+0LLQuNC5Licn0J/QvtC70YzQutCwLdCx0LDQsdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV9YZkNLOEZLMUZMbXhia0VCOFZUZGZhOTkwcUo3eFJBL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0L7RgtCw0YAg0JrQsNGA0ZbQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0JHQsNGA0LrQsNGA0L7Qu9CwJycsIDIpINCULtCf0LXRiNC10YLRgtGWLiAnJ9Cf0YDQtdGB0YLQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN01GLTB6NnVBa21LV2xwWXlTV0dIOHNiT2laLS1uOUovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNCy0YfQtdC90LrQviDQnNCw0YLQstGW0LksIDEx0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtCwINC80ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YAsINCGINGHLiwgMinQhi7QqdC10YDQsdCw0LrQvtCyLiAnJyDQldC70LXQs9GW0Y8g0LrQuNGX0LLRgdGM0LrQuNGFINC/0LDQs9C+0YDQsdGW0LInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUpfSFFrNklTMlBaUFpVUDl1WU9QNndrUXRSM29wbzZCL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQutCy0LAg0JLQsNC70LXRgNGW0Y8sIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCb0LDQvdGB0LXQstC40YcuJyfQn9GA0LXQu9GO0LTRltGPJycsIDIp0Jwu0JTQstC+0YDQttCw0LouICcn0JTQttCw0LfQvtCy0LjQuSDQtdGC0Y7QtCcnINC70Y8g0LzQsNC20L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTF0c2RMdmsyNWJEOEZTRFlUWFhueXBSMjlna1B0eFhzL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDRgNGC0LDQvdGW0Y8g0JTQsNCy0LjQtCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JUu0JLQsNCz0L3QtdGALtCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCAgIDIpINCgLtCS0LDQvdC00LDQu9C7Licn0JLQvtC00L7RgdC/0LDQtCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbXJFU1laSWlQMWlXZW5HaVpEVUlPYjB1c0NKSzBkVDgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzhhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQutC+0YDQvtGF0L7QtNGM0LrQviDQhNCy0LPQtdC90ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J0u0J3QuNC20LDQvdC60ZbQstGB0YzQutC40LkuICcn0IbQstCw0YHRjCDQs9GA0LDRlCDQvdCwINGH0LXQu9GM0L4nJywgMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQotC+0LrQsNGC0LAnJyDRgdGWINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFaWYwWl9NaUFRVnB6YmN6VlNqamJ2aDFnVXhlX0UzWC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC+0LvQvtC90LXQvdC60L4g0JDQvdC90LAsIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki7QmtC+0YHQtdC90LrQvi4gJyfQn9C10YLRgNGD0YjQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0Q3hwNFViWkZaZUZNcnc2RFlOaTlWWUhZU3ZZd05RSS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC+0LvQvtC90LXQvdC60L4g0JDQvdC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQpC4g0JHRg9GA0LPQvNGO0LvQu9C10YAuICcn0JHQsNC70LDQtNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFT0g2emh3b3c0YVFaZkplczI4THhpSUJzaDVIYmZHdS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC+0YDQvtC60LAg0JzQsNGA0ZbRjywgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlC7QptC40L/QvtC70ZYuINCf0YDQtdC70Y7QtNGW0Y8g0YLQsCDRhNGD0LPQsCDRgNC1INC80ZbQvdC+0YAsIDIp0Jou0JPRg9GA0LvRltGCLiAnJ9Co0YLQvtGA0LwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXRmcF9nQlJaMWZsai1MR3FkZTZFZHhRbUtUbGVwMGpQL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0YLQtdGG0Y7QuiDQntC70LXQutGB0LDQvdC00YDQsCwgMTIg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0JTQtdCx0Y7RgdGB0ZYuICcnRG9jdG9yIEdyYWR1cyBhZCBQYXJuYXN1bScnLCAyKdCkLtCo0L7Qv9C10L0uICcn0JLQsNC70YzRgScnIOKEljlcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6eEpXeUNtczdrWmhzcE5CQWx6YWNVbkFMVzhFSkFNNy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodGC0L7RgNC+0LbRg9C6INCh0YLQsNC90ZbRgdC70LDQsiwgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlS7Qk9GA0ZbQsy4gJyfQn9C+0LXRgtC40YfQvdCwINC60LDRgNGC0LjQvdC60LAnJyDihJYxLCAyKdCQLtCa0L7RgS3QkNC90LDRgtC+0LvRjNGB0YzQutC40LkuICcn0J/QvtC70L7QvdC40L3QsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcnRLMHZVckFvSWxHYlVKNUhhVUdiUVBsMXpWbVRLS0ovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzkwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQutCw0YfQtdC90LrQviDQnNCw0LnRjywgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki4g0JAuINCc0L7RhtCw0YDRgi4g0KHQvtC90LDRgtCwIDE2INCaIDU0NSzQhtGHLjsgMinQhi7QqNCw0LzQvi4nJyDQktC10YHQvdGP0L3QutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFtNlpzVmFyTlByY2Z5bU8zQmt1bWRLeExKeUJUeHg1LS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQo9C90LPRg9GA0Y/QvSDQntC70LXQutGB0LDQvdC00YDQsCwgMTIg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCeLtCT0YDQuNCx0L7RlNC00L7Qsi4g0JLQsNC70YzRgSwgICAgICAgICAgMinQnC7QodGW0LvRjNCy0LDQvdGB0YzQutC40LkuICcn0KHRgtGA0ZbQvNC60LjQuSDQv9C+0YLRltC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF2MkxSVkRoRkoyelhOXzV3VnhBY2g3WDhsMFdROHJPZy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTQvtGA0YfQtdC90LrQviDQhNCy0LPQtdC90ZbRjywgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCbLtCR0LXRgtGF0L7QstC10L0uICcn0JHQsNCz0LDRgtC10LvRjCcnLCDRgtCyLjExOVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVpQSEdRREF5ZnRvQVcwYUtPVDJzbmZhOE1qZ2FsY1pRL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0YDRh9C10L3QutC+INCE0LLQs9C10L3RltGPLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QkdGW0LvQsNGILicn0KHQutC10YDRhtC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoMWlzR3d2ZVcxdWlXM1UyeGVPMldXdUZ4dlNTdlEtTC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTQvtGC0L7QstCwINCa0LDRgtC10YDQuNC90LAsIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKSDQoS4g0JHQvtGA0YLQutC10LLQuNGHLicn0JXRgtGO0LQnJyDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YAsIDIpINCkLtCo0L7Qv9C10L0uICcn0J3QvtC60YLRjtGA0L0nJ9C00L4g0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWVRQlh5NmtoTGNpNGZKTkc4QmFDTTFaRkxrS2owTlJ3L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNGH0YPQuiDQkNC70ZbQvdCwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLiDQlNGW0LDQsdC10LvQu9GWLiDQodC+0L3QsNGC0LjQvdCwIOKEljEsINCG0IbQhi7RhzsgMinQlNC2LiDQm9Cw0YHRgi4nJyDQodCw0LzQvtGC0L3RltC5INC/0LDRgdGC0YPRhScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xanJGYnZkZ0cyTmxVLWI0MTYtdVIwYmlyRHJXLVBuSUgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzk2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00Y7QuiDQktC+0LvQvtC00LjQvNC40YAsIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCaLtCcLtCS0LXQsdC10YAu0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YA7IDIp0J4u0JPQvtC90YfQsNGA0YPQui4gJyfQl9C10LvQtdC90LjQuScnINGW0Lcg0LfQsdGW0YDQutC4ICcn0JLQtdGB0LXQu9C60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUhfSXc4OXhqZjFvMjdQdFBfbmVRSTc4QnlQNjV5RXZZL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCl0L7RgyDQltGD0LksIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J8u0IYu0KfQsNC50LrQvtCy0YHRjNC60LjQuS4gJyfQltC+0LLRgtC10L3RjCcnLCAyKdCVLtCS0LXQstGA0LjQui4gJyfQk9Cw0L3QtNC30Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVhad1dYdDZoUUFTdVlmdFNOcjVzVFBFcnN0RlVWNThSL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCn0LjQtiDQndGW0L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JPQsNC50LTQvSDQodC+0L3QsNGC0LAg4oSWNCwg0IbRhzsgMinQmy7QlNGM0Y/QutC+0L3QtdC90LrQvi4gJyfQn9GA0L7QsdCw0YfQtdC90L3RjyDRgyDQvNCw0LzQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYUlVcjBoLU41MjkwQjZLYUltWGtKSG1TRGlrX1Vhd2UvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzk5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfRltC00LXRgNCwINCh0LDQvNGD0LXQu9GMINCj0LzQtdGFLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSAg0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4gJyfQodGC0LDRgNC+0LLQuNC90L3QsCDRhNGA0LDQvdGG0YPQt9GM0LrQsCDQv9GW0YHQtdC90YzQutCwJycuIDIpINCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4nJ9Ca0LvQvtGD0L3QuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcExZQW1SQlh3ekluMXgzWEhodkxyZV9BTlpKVDJwOHcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzlhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQsNGC0LDQu9C+0LLQsCDQhtC70L7QvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLiDQk9GW0LvQu9C10YAuICcn0JzQsNC70LXQvdGM0LrQtSDRgNC+0L3QtNC+Jyc7IDIp0JIuINCa0L7RgdC10L3QutC+LiAnJ9CS0LDQu9GM0YEnJyDRgdGWINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFVZzU2Y2JZMUNVQmhPMS10WmZ1Y1JBdUFIYklGS3o5Yy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOWJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQqNC10LLRh9C10L3QutC+INCc0LDRgNCz0LDRgNC40YLQsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQsNC70LDQvdC00ZbQvS4g0JLQsNGA0ZbQsNGG0ZbRlywgICAgICAgICAgMinQoi7QkdGA0LDRg9C9LiAnJ9Ci0LDQvdC10YbRjCDQstGW0YLRgNGDJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwa0JCcWZTLXBtRnhiNW5OZEFjaDlXWFVwR3FzVXhhOC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOWNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQqNC10L/QtdGC0YzQutC+INCe0LvQtdC60YHQsNC90LTRgCwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCkLtCo0L7Qv9C10L0uINCc0LDQt9GD0YDQutCwLNGC0LIuNjcg4oSWIDQsIDIp0JUu0JPRgNGW0LMuICcn0KLQsNC90LXRhtGMINGW0Lcg0JnQvtC70YzRgdGC0LXRgNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWYmhWaldyVWl0VG8tLTgzSTVGV055ZFFyUEMzWUd5Ui9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOWRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQqNGD0LzRgdGM0LrQsCDQndCw0LTRltGPLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4nJ9Ci0LXQvNC90LAg0LrRltC80L3QsNGC0LAnJywgMinQki7QndC10YPQs9Cw0YHRltC80L7Qsi7QodC60LXRgNGG0L5cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrNjYtV3J5NjNTOHg3dDQ4R1dValkwZTZPMXhxZVVvdC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzOWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkNGA0YPRgtGO0L3Rj9C9INCb0ZbQtNCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg4oSWMjAsINCG0YcuOyAyKdCbLtCo0YPQutCw0LnQu9C+Licn0ITQvNC10LvRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQmo1NjhjblJkRFpNS3JNWWZMVDhrQ2JIbTR5ZlhiMmsvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxMzlmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQsNC30LjQu9GO0Log0J3QsNGC0LDQu9GW0Y8sIDE2INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCvLtCh0ZbQsdC10LvRltGD0YEuINCf0YDQtdC70Y7QtNGW0Y8g0LvRjyDQvNGW0L3QvtGALDIp0IYu0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjyDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHYVdlWmJLYzZTaUl1ZGlZUVZCZ0Z4YWlPTzlTRXNrQS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGW0LvQvtCz0YPQsSDQkNC90YLQvtC9LCAxMyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0JvQtdCz0LrQsCDRgdC+0L3QsNGC0LAg0YTQsCDQvNGW0L3QvtGALCDQhiDRhy5cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmSFVtdE1XT2pHTjlwNXhhU3JjSU92UUV1LWtvVEdhVC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGW0LvQvtCz0YPQsSDQkNC90YLQvtC9LCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0J4u0KHRgtGA0L7Qui4gJyfQnNGW0YHRj9GH0L3QsCDRgNCw0L/RgdC+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmcW5OT0Z2Tm5WVWNJMUxVWi1UcWdGekNsNVhGRV9zaS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGW0YDRg9C6INCi0LDQvNGW0LvQsCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLtCh0L7QvdCw0YLQuNC90LAsINGC0LIuMjbihJYzLCAyKdCvLtCh0ZbQsdC10LvRltGD0YEuICcn0K/Qu9C40L3QsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNF9CMjZMUHl6UWprX2FCWnhHRldJcThSejZLUkNCblgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2EzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQvtGA0L7QstGW0LrQvtCy0LAg0ITQu9C40LfQsNCy0LXRgtCwLCAxNSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQnC7QkdC+0LHQtdGALiAnJ9CU0ZbQsNC80LDQvdGC0L7QstCwINGA0LDQv9GB0L7QtNGW0Y8nJywgMinQpC7QodCw0LkuICcn0KfQvtGA0L3QsCDQt9C10LzQu9GPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwTzFGR3FCLUs2dHRoOHBQUk1CQ2FsX3JzY2VTTXgyMC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGD0YDRg9GF0ZbQvdCwINCa0LDRgtC10YDQuNC90LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCZLtCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDQvNGWINC80ZbQvdC+0YAsINCG0YcuLCAyKSDQoS7QndGW0LrRltGC0ZbQvS4nJ9Cd0LDRgdC/0ZbQsicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcnBMSDYzU3pOVEhlTXlYSGs3ckNoZXN3U2NLdTlfY0gvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQsNGI0YPRgNGW0L3QsCDQki4sIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQki7QmtC+0YHQtdC90LrQvi4gJyfQn9C+0LXQvNCwLdCb0LXQs9C10L3QtNCwJycsIDIpINCeLtCh0LDRgNCw0YLRgdGM0LrQuNC5Licn0JrQvtC70L7QvNC40LnQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5OWt1c2d0cVhnSWdmRmMxNmxfNXF2Z0ZfSnk2MnZYNy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktC40YjQvdC10LLRgdGM0LrQsCDQkNC90L3QsCwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCWLiDQkdGW0LfQtS4nJ9CU0LfQuNCz0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVlOLTJ5cDFvY1JWRTFSZFhxMkw3c2o5cV9BOHl2NVBPL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LjRiNC90LXQstGB0YzQutCwINCQ0L3QvdCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0JvQsNCy0LDQu9C70LUuICcn0JzQtdGC0LXQu9C40LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTYxdEZxVEZKb2phMk9WRHZIS1R0SVdQak5RLTJMZngxL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LXRgNCw0YHQuNC80YfRg9C6INCc0ZbQu9GU0L3QsCwgMTUg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLtCi0LDRgNCw0LLQtdGA0LTRltGU0LIuICcn0KHQv9C+0LPQsNC0JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFBbzB3T3g1MFVjS0xhWDhncEUzVzl0NjVEQzZLcGhyTS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C10YDQsNGB0LjQvNGH0YPQuiDQnNGW0LvRlNC90LAsIDE1INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQni7QkdGW0LvQsNGILicn0KLQsNC90LXRhtGMINC70Y/Qu9GM0L7QuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeG5iZmpCbXpjbE40LXRsNnQ5RUdEbTN5akxHandwUjUvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQvtGA0LTRltGU0L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgMTkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUu0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDRgNC1INC80ZbQvdC+0YAsINCU0KLQmi3QhiwgMinQoS7QkdC+0YDRgtC60LXQstC40YcuINCf0YDQtdC70Y7QtNGW0Y8g0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb3hCZTZOM2FsdEZwM1VrdEY1RmRHWUZyZFh5SERIV2YvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNC10YnQsNC6INCc0LDRgNGW0Y8sIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0KfQtdGA0L3Rli4g0JXRgtGO0LQg0LvRjyDQvNCw0LbQvtGAOyAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5Licn0JXQu9C10LPRltGH0L3QuNC5INC/0YDQtdC70Y7QtCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSXd1THJkUGFreEgxZjZaUGZtdzdkN3ZHY2hLam9VNm0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTQtdC50L3QtdCz0LAg0JrQsNGA0ZbQvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy7QkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LAg4oSWMTQsINCGINGHLjsgMikg0KEu0JbQtNCw0L3QvtCyLiAnJ9Cf0YDQtdC70Y7QtCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYzVpV0M5YjVKM1R3M09XVERLU3dNOTVDRlRGQmx5NHQvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRj9GH0YPQuiDQl9C+0YDRj9C90LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Cg0LDQvdC+0LonJywgMinQnS7QndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4gJyfQmtC+0LvQvtC80LjQudC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNzVnJJRlJmaXRMdnpNMzctVVduZkdOY3NqMDdPdV8yL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0YnRg9C6INCa0LDRgtC10YDQuNC90LAsIDE1INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmi7Qp9C10YDQvdGWLiDQldGC0Y7QtCDihJYxLNGC0LIuNzQwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbnNjcVM1ZTFwVXd0ZElPU09JZVhBVkhSR2pGdV8zTW4vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbRidGD0Log0JrQsNGC0LXRgNC40L3QsCwgMTUg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQu0KjQvtC/0LXQvS4nJ9Cb0LDRgNCz0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVvS2VTcjdCSWVMdzBLc2pDdHAxREVESl84WGdneG5xL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90L7Rh9C60L4g0JDQvdGC0L7QvdGW0L3QsCwgMTMg0YDQvtC60ZbQsi5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YAg0JTQotCaLdCGLCAyKSDQmi7Qp9C10YDQvdGWLiDQldGC0Y7QtCDihJY2INGC0LIuNzQwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdVRxT1JKSXhJNjV1S3E0LTJScU9YblZ1WGpvUVBLa1MvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2IxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNGA0LXQu9GW0L3QsCDQmtGA0ZbRgdGC0ZbQvdCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLtCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0YDQtSDQvNGW0L3QvtGALCDQlNCi0Jot0IbQhlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZtaFcyT2w5dGwtZlY3Uk9hdHozbUVuYjFDMFZ3QWJ4L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDRgNC10LvRltC90LAg0JrRgNGW0YHRgtGW0L3QsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCQLiDQnNC+0YbQsNGA0YIuINCh0L7QvdCw0YLQsCDihJY4LCDQhtGHLlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWpGdDB6a25HYTh2dlh4RFJLUW81eDFZZHpjci1JeEhSL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDRgdGM0LrRltCyINCQ0L3QtNGA0ZbQuSwgMTQg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLtCb0LXRiNCz0L7RgNC9LiDQldGC0Y7QtCDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0dUtaVUc3bDFSRXdEa1hrdlI2ZllCalFpVFBaQzNrby9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0YHRjNC60ZbQsiDQkNC90LTRgNGW0LksIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmi7QlNC10LHRjtGB0YHRli4gJyfQnNGW0YHRj9GH0L3QtSDRgdGP0LnQstC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTUE5MSThWdkZoS3pwUndOOS1pQlJ1VGRkUGZKdVVlLS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC40YDQuNC70L7QstCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxMyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KIu0JHRgNCw0YPQvS4gJyfQqNGC0L7RgNC8LCDRidC+INC90LDQsdC70LjQttCw0ZTRgtGM0YHRjycnLCAyKSDQny7Ql9Cw0YXQsNGA0L7Qsi4gJyfQoNC+0L3QtNC+LdCz0LDQu9C+0L8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVdIai0taGFZbkU3cFd0ZkhCb3lwWG5obTdpMGluc3ZHL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QvdC00YDQsNGC0Y7QuiDQkNC70ZbQvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQni7QlNGO0LHRjtC6LiDQktCw0YDRltCw0YbRltGXLCAyKSDQni7QkdGW0LvQsNGILicn0KDQvtC30LTRg9C8JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFSd2ZTUXRUZndXcExEell5R2ZtRnlPS2R5X1NySzdTWi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YHQtdC90LrQviDQkNC70ZbRgdCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQkC7QmtCw0YDQsNC80LDQvdC+0LIuICcn0JfRgNGD0LnQvdC+0LLQsNC90LjQuSDRhdGA0LDQvCcnLCAyKdChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiDQn9GA0LXQu9GO0LTRltGPIOKEljcsINGC0LIuMjNcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEtNmtZcnRRdUhaTms1Q2hBYVdMdjdJUlp6azIyV2RkaC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YfRg9Cx0LXQuSDQr9GA0L7RgdC70LDQsiwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J7QsdGALiDQhC7QktC10LLRgNC40LrQsC4nJ9Cc0L7Qu9C00LDQstGB0YzQutGWINC90LDRgdC/0ZbQstC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5S2pLSGZJLXVpajZqM21OQ1laMjZMTFpNb0JiWWs5ci9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YfRg9Cx0LXQuSDQr9GA0L7RgdC70LDQsiwgMTQg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLtCa0YPQu9Cw0YMuINCh0L7QvdCw0YLQuNC90LAg4oSWNTVcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFSN0h3WHBMYk8xdGl6M0t6TWczNXQ0TjNCbXg3QUJPTC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGD0LvRltC60L7QstGB0YzQutCwINCa0LDRgtC10YDQuNC90LAsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDRhNCwINC00ZbRlNC3INC80LDQttC+0YAsINCU0KLQmi3QhiwgMikg0KEu0JHQvtGA0YLQutC10LLQuNGHLiDQldGC0Y7QtCDihJY5LCDRgtCyLjE1XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xelFqc3FHcFdxV1lrZWpQWU5fVEctRTBtTUE4Y1NqLXIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2JiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNC60LDRgNC10LLQuNGHINCd0LDRgtCw0LvRltGPLCAxNSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0YDQtSDQvNGW0L3QvtGALCDQlNCi0Jot0IYsIDIp0J4u0JHQvtGA0LTRjtCz0L7QstCwLiAnJ9Cj0LrRgNCw0ZfQvdGB0YzQutC40Lkg0YDQvtC80LDQvdGBJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpclZCVlMwV0R1ZldaQzJZRUI1N3VVTUxXYnc4QkxuUi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LvRj9GA0YfRg9C6INCE0LvRltC30LDQstC10YLQsCwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLiDQldGC0Y7QtCDihJY5LCDRgtCyLjE1LCAyKdCkLtCo0L7Qv9C10L0uJyfQk9GD0LvRj9C90LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb20waGZWZ3JhLVZTeDZZWGhKYnBad0xSYmUwYThCRS0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2JkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0L3QsNGB0Y7QuiDQotCw0YDQsNGBLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQny7Ql9Cw0YXQsNGA0L7Qsi4gJyfQotC+0LrQsNGC0LAt0L/RgNC10LvRjtC00ZbRjycnLCAyKSDQlS7Qk9GA0ZbQsy4gJyfQndC+0LrRgtGO0YDQvScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZ2dod3lIMkF4LUFlVnVlbGJTV3NTMG9Jb0F4U191SkQvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2JlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7RgdC70LDQvCAg0ITQu9C40LfQsNCy0LXRgtCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0JvRjtGC0LjQuScnINGW0Lcg0YbQuNC60LvRgycn0J/QvtGA0Lgg0YDQvtC60YMnJywgICAgIDIpINCdLtCb0LDQs9C+0LTRjtCzLiAnJ9Ci0LDQvdCz0L4g0LzRgNGW0LknJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW1xNC1aQllabWxuR1B6SlkxalJfUVZyMEd6NzVhTWxYL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDQvdGW0LzQsNGIINCG0YDQuNC90LAsIDE1INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCZLtCT0LDQudC00L0u0KHQvtC90LDRgtCwINC00L4g0LzQsNC20L7RgCAo4oSWNTApLCDQhiDRhy47IDIpINChLtCg0LDRhdC80LDQvdGW0L3QvtCyLicn0JzRg9C30LjRh9C90LjQuSDQvNC+0LzQtdC90YInJywg0YLQsi4xNiDihJY0XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaF9LUV9XcHZtalpGc1hFNFhUX01kZjIzc2s0SzlHVHMvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2MwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QtdGC0YDRg9GB0Ywg0J3QsNGC0LDQu9GW0Y8sIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0JvRltGB0YIuJyfQoNC+0LzQsNC90YEnJywgICAgIDIp0JUu0JPRltC70LvQvtC6Licn0JLQsNC70YzRgS3QtdGC0Y7QtCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTzE1X0N1and0dGFGMUJ4WGdXODQ0dzZBQlVRa3VqZmIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2MxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RgNC40YnQtdC/0LAg0JDQvdC90LAsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLtCo0LzRltGC0YYuINCU0LbQsNC30L7QstCwINGW0L3QstC10L3RhtGW0Y8g4oSWMTMsICAyKSDQni7QlNC10LLRltGBLicn0KnQsNGB0LvQuNCy0LjQuSDQtNC10L3RjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSktNSWx1bjNSZWhFUnFLYVNIcGw2U0o2ZXl1dXEzYVcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2MyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RgNC+0LrQvtC/0YfRg9C6INCe0LvQtdC60YHQsNC90LTRgNCwLCAxNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JLQtdGA0LzQtdC90LjRhy4gJyfQp9C+0YDQvdC+0LHRgNC40LLRhtGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGTkw3ZTZxaDhTT0tsVXhNb1J0QTdyU1k4TmhhbmxYLS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GA0L7QutC+0L/Rh9GD0Log0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDE3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQpC7QqNC/0LjQvdC00LvQtdGALiDQodC+0L3QsNGC0LjQvdCwLNCG0IbQhiDRhy5cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFLR01DY042X0JXUGRpd3pyUkl1QTNOZHhVZUpid0kxai9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GD0YfQutC+INCh0L7RhNGW0Y8sIDEz0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JwuINCU0LLQvtGA0LbQsNC6LiDQldGC0Y7QtCAyICgyLdC5INC30L7RiNC40YIpLCAyKdCSLiDQktC10YDQvNC10L3QuNGHLiAnJ9Cn0L7RgNC90L7QsdGA0LjQstGG0ZYnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTRXZnNGdjRBbjJGYlZfdUZqaHFSRUk4Ny1JZnpRVWI4L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LDQtNC60L7QstGB0YzQutCwINCQ0LvRltC90LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JPRgNGW0LMuINCV0YLRjtC0INC/0LDQvCfRj9GC0ZYg0KQu0KjQvtC/0LXQvdCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX2FCTjhKZ3JtRm1WZnVWWVc0czBsZU5OWXhmUDU5U28vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQsNC00LrQvtCy0YHRjNC60LAg0JDQu9GW0L3QsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCkLtCb0ZbRgdGCLiAnJ9Ch0YPQvNC90LjQuSDRgdGC0LXQvycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbjJtU2FQTndyVmpsY1BBb2hWaVlybzI0V3ppa3RCMGovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQuNCx0LrRltC90LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDE1INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLiDQotC10YDQtdGJ0YPQui4gJyfQpNGD0LPQsCBMb2NrZG93bicnOyAyKdCcLtCR0L7QsdC10YAuJyfQntC/0ZbQstC90ZbRh9C90LAg0YDQsNC/0YHQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xc1BWRUIyVkl0X29EWk0wcG1CVVE1alVvVUJOaXZUd2UvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDRg9GB0YHRgyDQk9Cw0L3QvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCTLtCS0L7Qu9C70LXQvdCz0LDRg9C/0YIuICcn0KXQsNGA0LDQutGC0LXRgNC90LAg0L8n0ZTRgdCwINGDINGE0L7RgNC80ZYg0LXRgtGO0LTQsCcnLCAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9CV0LvQtdCz0ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYUVlRmlVWF9BdlJjUk1HLTRoQkEzaThjNDVFc1pIOW0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDRg9GJ0LjQvdGB0YzQutCwINCa0YHQtdC90ZbRjywgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0JPRgNGW0LMuICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTA3MkpOd3ZFbTZDZHVBX0dlUHNBQnU1X1lrNk0wMnpIL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0YPRidC40L3RgdGM0LrQsCDQmtGB0LXQvdGW0Y8sIDE0INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLicn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0LTQviDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTkRrX2pLTzVTSGJuc2FYQVRBMS1Zd2dLZTRiQW1JZG4vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQstC40L3RhtC40YbRjNC60LAg0JXQvNGW0LvRltGPLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0LLQsNGB0L3QtdCy0YHRjNC60LjQuS4nJ9CU0YPQvNC60LAnJzsgMinQlC7QmtGA0LDQvNC10YAuICcn0KLQsNC90YbRjtGO0YfQuNC5INGB0LrRgNC40L/QsNC70YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFsZ3pfb3VrUnhUMmtQQUZ5WG9YLVFqSUEzNHBJQ2NtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LLQuNGA0LjQtNGO0Log0JTQtdC90LjRgSwgMTYg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g4oSWMTIsIDIp0JMu0JPQsNC70LjQvdGW0L0uICcn0JDRgNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTQ2R0ZnSGFYTDN4SFZGWnctaHJIcnhrNDk3N2xyTmdoL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LXQu9GW0LLQsNC90L7QstCwINCQ0L3QvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9CV0LvQtdCz0ZbRh9C90LjQuSDQv9GA0LXQu9GO0LQnJyDRgdGWINC80ZbQvdC+0YAsIDIp0Jwu0JTQstC+0YDQttCw0LouJyfQlNC20LDQt9C+0LLQuNC5INC10YLRjtC0Jycg4oSWNiAoMiDQt9C+0YjQuNGCKVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUp1Y050TzFEOTNrcUw4d29KYmtfQkppRGpkZ0d4c1E2L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LXQvNC10L3QvtCyINCG0LLQsNC9LCAxNSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0JTQvtCz0LAuICcn0KHQvtC90LXRgicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTDBVX0hvdUtSUDR5M2dQWmJWTGt6dW15WUQyZXpFMkQvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQtdC80LXQvdC+0LIg0IbQstCw0L0sIDE1INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QnNC+0Yhl0Ltl0YEuIEXRgtGO0LQg4oSWOCzRgtCyLjcwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX2Z3WTNya3BjSWxXamMxUnlfWXRpaHUtb3dXcDJtZ2svcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2QwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQuNC80L7QvdC10L3QutC+INCi0LDQvNGW0LvQsCwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLtCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQsCDihJYxOSDRgtCyLjQ5LCDQhiDRh9Cw0YHRgtC40L3QsCwgMinQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5IC4nJ9Cf0ZbQtNGB0L3RltC20L3QuNC6Jycg0Lcg0YbQuNC60LvRgyAnJ9Cf0L7RgNC4INGA0L7QutGDJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFQbUVqZ09WMllZWmlSSVVCcFRESUhqdXItbHpSX2Zsdi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC90ZbQs9GD0YAg0JDQvdC90LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JHQpdCw0LLQsNGI0ZYuICcn0KjRgtC+0YDQvCcnLCAyKdCkLtCh0LDQuS4g0JLQsNGA0ZbQsNGG0ZbRl1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWhtX3hESE9aVHpVQ1M0VVpJc283TUhaM2lia3ZBSWJiL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0LXRgNC90L7QstCwINCa0YHQtdC90ZbRjywgMTQg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCGLtCR0LXRgNC60L7QstC40YcuINCf0YDQtdC70Y7QtNGW0Y8g4oSWMTAsIDIp0JUu0JPRgNGW0LMuICcn0J/QvtGF0ZbQtCDQs9C90L7QvNGW0LInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWpKb1k4a2R6ZVVLbDV6VTVnTGU1ZHU4bGhHYWxCSVlCL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0LrQsNGH0YPQuiDQktGW0LrRgtC+0YDRltGPLCAgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KQuINCc0LXQvdC00LXQu9GM0YHQvtC9LiAgJyfQn9GW0YHQvdGPINCx0LXQtyDRgdC70ZbQsicnLCAyKSDQki4g0JPRltC70LvQvtC6ICAnJ9CS0LDQu9GM0YEt0LXRgtGO0LQnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUtpNUMtdGFuanh5Mk15N2taNmtXZ1lFV01BT0VZRmM5L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0YDQsNGH0YPQuiDQntC70LXQutGB0LDQvdC00YAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCfLiDQl9Cw0YXQsNGA0L7Qsi4gICcn0KDQvtC90LTQvi3Qs9Cw0LvQvtC/JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE4RGxOMWI0SzFzWHJkdnZiM0E4cEhtSkZ2WHdiellyZC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotGA0LDRh9GD0Log0J7Qu9C10LrRgdCw0L3QtNGALCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JQu0KTRltC70YzQtC4gJyfQndC+0LrRgtGO0YDQvScnIOKEljVcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMM0p4b1dQcjZqeE01UTNweE8wQkJYMlU0VWlGbkVfSC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTQvtC90Y7QuiDQntC70LXQutGB0LDQvdC00YAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwIOKEljIzLCDRhNCwINC80LDQttC+0YAsINCG0YcuOyAyKdCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDihJYyMywg0JTQotCaLdCGXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaTJmdU9QVk1xUWZJTkNUMlpKYlRKWGNjejVBZmJfaDUvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXQstC+0YHRgtC+0LLQsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7Qm9GW0YHRgi7QrtC90LDRhtGM0LrQuNC5INC10YLRjtC0IOKEljIsIDIp0J4u0JrQvtC30LDRgNC10L3QutC+LdCQLtCa0L7RgS3QkNC90LDRgtC+0LvRjNGB0YzQutC40LkuICcn0J7QuSDRgtC4LCDQtNGW0LLRh9C40L3Qviwg0Lcg0LPQvtGA0ZbRhdCwINC30LXRgNC90Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUduc0Fac3VnZHFCTEw2aEtDR2xsZUE4WktfcVQxOEZqL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCl0YDQsNC80LXQvdC60L7QstCwINCQ0L3QsNGB0YLQsNGB0ZbRjywgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQvtGA0L7QstGW0YbQuNC9Licn0KDRg9GB0LDQu9C+0L3RjNC60LAnJywgMinQnC7QodC60L7RgNC40LouJyfQltCw0YDRgtGW0LLQu9C40LLQsCDQvyfRlNGB0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUMwdVNwZVN5YmZkYUlYWWxtWXdNclo1SlVzZGI3UmI5L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCl0LXQu9C80LDQvSDQktGW0L7Qu9C10YLQsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQo9CT0ZbQu9C70L7Qui4nJ9Cf0YPRgNGF0LDRjtGH0Lgg0LIg0YXQvNCw0YDQutCw0YUnJywgMinQki7QpdC+0LTQvtGILicn0KfQtdGA0LLQvtC90LAg0YjQsNC/0L7Rh9C60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXp1eUVHdDNjdlozc1ZqS25BM0NKVFpWTDJ2RVZnWFd5L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LjQsdCw0L3QvtCy0LAg0JLQsNGA0LLQsNGA0LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC7QqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDihJYyLCDRgtCyLjlcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyMWpVUkZLQzU1NXdLTVI3Q2xTeW10VEdfRFd3dmd2Wi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZGJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQqNC40LHQsNC90L7QstCwINCS0LDRgNCy0LDRgNCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0KEu0JHQvtGA0YLQutC10LLQuNGHLtCV0YLRjtC0IOKEljcsINGC0LIuMjlcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFLVFVZUDNnV240UFRUR0cxWV9fRktySTFzNUdrWEJvTy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZGNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkNC90YLQvtC90Y7QuiDQnNCw0YDRltGPLCAyMSDRgNGW0LpcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLtCc0LXRgtC90LXRgC4gJyfQlNCy0ZYg0LrQsNC30LrQuCcnLCAyKdCGLtCo0LDQvNC+LiAnJ9Ci0L7QutCw0YLQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFBRlZFRzNNM2dVMXlJYUljNVluY1JoVUlBbHdmOEFWai9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNkZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0L7QsdGA0ZbRiNC+0LLQsCDQhtC90LXRgdCwLCAxNiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSkg0Jku0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwg0IYg0YcuOyAgIDIpINChLtCf0YDQvtC60L7RhCfRlNCyLiAnJ9Ch0LDRgNC60LDQt9C8Jycs0YLQsi4xNyDihJYxXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5Skh1RVNRVkhNNmJwdXBQc3ZkVW40ZWxRUmJnTzIzZS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNkZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0Y/QvdC+0LLQsCDQlNCw0YDQuNC90LAsIDE2INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0sINGC0LIuMjfihJYyLCAgICAgIDIp0JQu0JfQsNC00L7RgC4g0JXRgtGO0LQg0LTQviDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEtQ0JjZUhFYktnZTMyWDZORDFGX3pGVlEtMlJiNDRZdy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNkZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7Qt9C90Y7QuiDQkNC90LPQtdC70ZbQvdCwLCAxNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCvLtCh0YLQtdC/0L7QstC40LkuINCf0YDQtdC70Y7QtNGW0Y8sICAgICAgIDIp0K8u0KHRltCx0LXQu9GW0YPRgS4g0JXRgtGO0LRcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXk3UUh0R3VrSm9vY1MwQl9kaXd6SnUtVlFZOFdCOW9wL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2UwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRg9C6INCh0L7RhNGW0Y8sIDE2INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4gJyfQk9GD0LzQvtGA0LXRgdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa1BRVF91VHhhSWxhbHF4X2FhcFNwaWQyU1pnUDdqcTYvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GD0Log0KHQvtGE0ZbRjywgMTYg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCcLiDQm9C40YHQtdC90LrQvi4gJyfQltGD0YDQsdCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU51aGRsT3FYZVByOGV4ZE1wMGdYVEFsNkZma2drRHVOL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2UyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRg9C70L7QstCwINCQ0L3Qs9C10LvRltC90LAsIDE4INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLiDQqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDRgtCyLjQ4IOKEljEsICAgICAyKdCfLiDQodCw0L3QutCw0L0uINCi0L7QutCw0YLQsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xem5oOVJVLXBDcDNySHhxeVZ1UDQ0RDRDa1ltNTlHak4vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNCw0L3QvtCy0YHRjNC60LAg0J7Qu9GM0LPQsCwgMTcg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QkdCw0YDQstGW0L3RgdGM0LrQuNC5INCf0YDQtdC70Y7QtNGW0Y8g4oSWNCAnJ9Cl0L7RgNCw0LsnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWUxkMkZQNUl4RG5lSWNPTVdnV1RnQ2Z1YkJPWUpRUHIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNCw0L3QvtCy0YHRjNC60LAg0J7Qu9GM0LPQsCwgMTcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0JvRj9C00L7QsiDQn9GA0LXQu9GO0LTRltGPLCDRgtCyLjM5IOKEljRcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXdvZ1ZadjhXVnlRdExGc29wd2FSQngxUlFPeGx6Q0ZJL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2U1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRg9C00L3QuNC6INCU0LDRgCfRjywgMTcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCR0LDRgNCy0ZbQvdGB0YzQutC40LkuJyfQm9C40YHRgtC+0Log0Lcg0LDQu9GM0LHQvtC80LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbF9IRTNyME81dXNqT0hjTnVNcE5EWWdfZzZkMlMzNXQvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNGD0LTQvdC40Log0JTQsNGAJ9GPLCAxNyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0JTQtdCx0Y7RgdGB0ZYuICcnINCg0L7QvNCw0L3RgtC40YfQvdC40Lkg0LLQsNC70YzRgScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFxTGdxOUFmRDZZWEN5UFF5RmVqbHlaOEJPTnVTb05fNC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YDRjtC60L7QstCwINCc0LDRgNGW0Y8sIDE1INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4gJyfQn9GA0LjQvNGF0Lgg0LzQvtGA0Y8nJywgMinQpC7QqNC+0L/QtdC9LtCV0YLRjtC0INGC0LIuMTAg4oSWNFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLWNibzNCWjFFUE5ZbTZOUzFlQ01tXzJIVHpISjdCZWsvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZThcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGD0LvRltGIINCf0L7Qu9GW0L3QsCwgMTUg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JUu0JPRgNGW0LMuJyfQmtC+0LvQuNGB0LrQvtCy0LAnJywgMinQhi7Qn9Cw0LTQtdGA0LXQstGB0YzQutC40LkuICcn0KHQutC10YDRhtC40L3QvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOYW1WVkZmQWRSZmFGdUExdUtqbHQ5UUlXZ01pU0J5Ni9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0YPQt9C40YfQtdC90LrQviDQnNCw0YDRltGPLCAxOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg4oSWMzEsIDHRhy47IDIp0KQu0KjQvtC/0LXQvS7QldGC0Y7QtCzRgtCyLjEwIOKEljVcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU8tYWhmWUpOYkZmNWZTT3dTU3BmZklXV3BuaUJ1Yks4L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qu9GW0LnQvdC40Log0J7Qu9C10LrRgdCw0L3QtNGALCAxOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCWLtCR0ZbQt9C1LdCSLtCT0L7RgNC+0LLRltGGLiDQktCw0YDRltCw0YbRltGXINC90LAg0YLQtdC80YMg0Lcg0L7Qv9C10YDQuCAnJ9Ca0LDRgNC80LXQvScnLCAyKdCbLtCg0LXQstGD0YbRjNC60LjQuS4g0J/RgNC10LvRjtC00ZbRjyDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTNKeWxQZERXZ1Z6NlFTSFJHVkp0N0ZoZGFSZWxDSFNEL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ViXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNC40Log0JDQvdC90LAsIDE3INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4g0JXRgtGO0LQt0LrQsNGA0YLQuNC90LAg0YLQsi4zMyDihJY1LCDRgdC+0LvRjCDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrN29rQnV5TXNGYVJ0NEd3d1hVU2dZQ2g1RGRZNk1OOS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzQuNC6INCQ0L3QvdCwLCAxNyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuIDMyIOKEljEyLCDRgdC+0LvRjCDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMWUhIVkt1VUlpc2FkRTJmbXp3WXptd3NTLVV3VnhWUi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0ZbRhdC+0L3QvtC6INCE0LPQvtGALCAxNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4nJ9Ch0LrQtdC70ZYg0YPRidC10LvQuNC90Lgg0KPRhy3QmtC+0YgnJyDQtyDRgdGO0ZfRgtC4ICcn0JrRgNC40LzRgdGM0LrRliDQvdCw0YDQuNGB0LgnJy7RgtCyLjgsIDIp0KQu0JvRltGB0YIu0KLRgNCw0L3RgdGG0LXQvdC00LXQvdGC0L3QuNC5INC10YLRjtC0IOKEljEwLCDRhNCwINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhuM1RmTkg2R0ZCQlFvMXZaWk5uUlJWcWJ0akdHdWcyL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQsNGJ0LXQstGB0YzQutC40Lkg0KLQsNGA0LDRgVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuICcn0JXRgtGO0LQt0LrQsNGA0YLQuNC90LAnJywg0YLQsi4zMyAoNSlcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWVxVFBYbF9SaFpRT2RWci1saFVRbWxPTThjb0M2Rm9LL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQsNGJ0LXQstGB0YzQutC40Lkg0KLQsNGA0LDRgVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0KDQtdCy0YPRhtGM0LrQuNC5LiDQn9GA0LXQu9GO0LTRltGPLCDRgtCyLjQgKDIpXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEtX2JvTW5vWW5rNzR4RHpReTZRbENxVnhJUDNqNHNIeC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXRgdC40Log0J3QsNC30LDRgNGW0LksIDE2INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLicnTHlyaWNhIE5vdmEnJyzRgtCyLjU5IOKEljMsNDsgMinQpC7Qm9GW0YHRgi7QotGA0LDQvdGB0YbQtdC90LTQtdC90YLQvdC40Lkg0LXRgtGO0LQg4oSWOCAnJ9CU0LjQutC1INC/0L7Qu9GO0LLQsNC90L3RjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjMHNqNEFNdUR4SEFwbUdUOVdTaG1qSkhiRUhSekpkQy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCu0LfQu9C+0LLQsCDQm9GO0LHQvtCyLCAxNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSkg0Jou0JTQtdCx0Y7RgdGB0ZYuICcn0JDRgNCw0LHQtdGB0LrQsCcn4oSWMSwgMikg0Jku0JHRgNCw0LzRgS4nJ9CG0L3RgtC10YDQvNC10YbRhtC+JycsINGC0LIuMTE3IOKEljJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUxBREluV3BtLWpoYzFGYlJ1ZGdxd0NNR3R6WFFEQk1TL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2YyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JfQsNGU0YbRjCDQnNCw0YDQuNC90LBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQodC60L7RgNC40LouJyfQktCw0LvRjNGBJycg0Lcg0J/QsNGA0YLQuNGC0Lgg4oSWNVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMW1sWnpuWmJveGh6eEVCVEo0Z1VtRXRFMEpZZ1FnZGgvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQl9Cw0ZTRhtGMINCc0LDRgNC40L3QsFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4gJyfQlNGD0LzQutCwJycsINGC0LIuNTlcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBhVXAtYXFRZENxQnQzNTY2MnlOd0praGFOT0FYTl9oL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQvtCz0LLQuNC90L7QstGB0YzQutC40Lkg0ITQstCz0LXQvdGW0LlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCULtCf0YDQuNGC0YHQutC10YAuICcn0JHQu9GO0Lcg0J/RltC60LDRgdGB0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZTJfNGlzUXpsdWNMUjdrQlpYLUNIeGdxWXJCeEpSWncvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C+0LPQstC40L3QvtCy0YHRjNC60LjQuSDQhNCy0LPQtdC90ZbQuVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0J/RgNC+0LrQvtGEJ9GU0LIuINCh0L7QvdCw0YLQsCDihJYzLCDRgtCyLjI4XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFETGhUOVl3UjVJOWNaeHpkTm9lMjJGd1M4anBJNFlWcy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LjQutC40YLRjtC6INCQ0L3QsNGB0YLQsNGB0ZbRj1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jwu0KDQsNC60L7Qsi4gJyfQmtC+0L3RhtC10YDRgtC90LjQuSDQtdGC0Y7QtCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDOGE2VFBSTTJjYVFmVE9BNnpHSHZ1SWpHU29MN0MxYi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LjQutC40YLRjtC6INCQ0L3QsNGB0YLQsNGB0ZbRj1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDQtNC+INC80ZbQvdC+0YAsINCU0KLQmiAt0IbQhlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xd3JxZGJfa2UyS2NoX0NmQmNtTlJIMk01ODBQdFpRQTEvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQndCw0LfQsNGA0LXQvdC60L4g0JrRgdC10L3RltGPXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QktC+0LvQutC+0LLQsC4gJyfQndCw0YHRgtGA0L7RlycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPQThydk42d3dkcE9WeTFEVkR0MXpxLTRwa2VpU3IzeC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCd0LDQt9Cw0YDQtdC90LrQviDQmtGB0LXQvdGW0Y9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtCR0LDRhS4g0JDQu9C10LzQsNC90LTQsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMHF0VVJXZDNhYXNjcTJnd05IeE0tRkVUeVFITEI4dEQvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC10YDQvtCyINCS0LvQsNC00LjRgdC70LDQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS4g0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINC00L4g0LzRltC90L7RgCwg0JTQotCaLdCG0IYsIDIp0KQu0KjQvtC/0LXQvS4g0JHQsNC70LDQtNCwIOKEljEsINGC0LIuMjNcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWF0bjV5aUVjWGdqVm5GS2ZNNFFXQVVTNHpfVVZUSl9xL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ZiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQsNGA0LDRgdC+0LIg0JLQu9Cw0LTQuNGB0LvQsNCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CV0YLRjtC0LdC60LDRgNGC0LjQvdCwJycsINGC0LIuMzkg4oSWOSwgMinQpC7QqNC+0L/QtdC9LiAnJ9CR0LDQu9Cw0LTQsCcnLCDRgtCyLjIzIOKEljFcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlOWl90RXkwTzJuUlhqQ2x0ZF92ZFdMM1NNdUJOYUNNL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ZjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNC10LHQtdC90Y7QuiDQky7Qni5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0J/RgNC+0LrQvtGE0YzQtdCyLiDQodC+0L3QsNGC0LAg4oSWMizQhiDRhy47MikgICDQpC7Qm9GW0YHRgi4nJ9CV0YLRjtC0INC30LAg0LrQsNC/0YDQuNGB0LDQvNC4INCf0LDQs9Cw0L3RltC90ZYnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU2hVWUlZUDluZ29RWmVobUNielA1RjNiSkFLRmgzc04vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0L3QtNGA0LDRgtGO0Log0Jwu0J4uIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoC7QqNGD0LzQsNC9LiAnJ9Cg0L7QvNCw0L3RgScnLCDRgtCyLjI4LCAyKdCSLtCa0L7RgdC10L3QutC+LiAnJ9Ca0YPRgNCw0L3RgtCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZPYjQxUHNtcVdPNG55T0RrT2RvTVQ0U3NQcDRIWDl4L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ZlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0L3QsNGB0LXQvdC60L4g0JAu0J4uIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4g0J/RgNC10LvRjtC00ZbRjyDRgdC+0LvRjCDQtNGW0ZTQtyDQvNGW0L3QvtGALCAyKdCSLtCk0ZbQu9GW0L/QtdC90LrQvi4g0KLQvtC60LDRgtCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWTFhFTHVaY0k2UWkyZ3Jsd2FVLXVFd2xMdjFlU0VrWC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfVxuICAgIF07XG5cbmxldCBjb25jZXJ0bWFzdGVycyA9IFtcbiAgICB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmYWFzZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LXQstC10LvRjNC+0LLQsCDQhNC70ZbQt9Cw0LLQtdGC0LAsIDIwINGA0L7QutGW0LIuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiDQkNGA0ZbRjyDQm9C10L3RgdGM0LrQvtCz0L4sIDIpINCTLtCl0LDQt9Cw0L3QvtCy0LAuIFxcXCIg0KPQt9C00L7QstC2INCy0YPQu9C40YbRliDRhdC+0LTRgyDRj1xcXCJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0NXWDBlUlBUQ1lZXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmYWFzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JfQsNC60LDQu9GO0LbQvdCwINCeLtCRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQky7QktC10L3Rj9Cy0YHRjNC60LjQuS4g0JrQvtC90YbQtdGA0YLQvdC40Lkg0L/QvtC70L7QvdC10Lcg0YDQtSDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9zM2NsWExUMzRoWVwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTNmZmFhczFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQl9Cw0LrQsNC70Y7QttC90LAg0J4u0JFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCWLtCc0LDRgdC90LUuXFxcItCg0L7Qt9C00YPQvFxcXCJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2dEeVVDYmFuZUJrXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtCx0LfQsNGAINCd0ZbQutC+0LvRjCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQu0JrRgNC10LnRgdC70LXRgC4nJ9Cc0LDQu9C10L3RjNC60LjQuSDQktGW0LTQtdC90YHRjNC60LjQuSDQvNCw0YDRiCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrdVNSMFZtT01pcUlqOVlSMHUzbHZPenE0Skc1YUxZOC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDAwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtCx0LfQsNGAINCd0ZbQutC+0LvRjCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0JXQu9GM0LPQsNGALicn0KHQsNC70Y7RgiDQutC+0YXQsNC90L3RjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExZ0k3WGxqX1NMUXFsMlBpNkVUQWhTQVpUS0xNamtCbi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDAxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNCx0L4g0J3QtdGB0YLQvtGALCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtGA0L7Qu9C7LiAnJ9Cf0L7Qu9GM0LrQsCDQstGW0YHQu9GO0YfQutCwJycsIDIp0JIu0KbQuNCx0ZbQvSjQv9C10YDQtdC60Lsu0JAu0KbQsNGA0LXQvdC60L4pLiAnJ9Cb0LjRgdGC0L7QuiDQtyDQsNC70YzQsdC+0LzQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0UFI1ZXZyVUlSYVMxVkZVdnUwczY5SE1IN3hTM1dpSS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDAyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQhNCy0LPQtdC90ZbRjywgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0JHQtdGC0YXQvtCy0LXQvS4gJyfQkdCw0LHQsNC6Jycs0L7QsdGALiDQkC4g0KjRg9Cy0LDQu9C+0LLQsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaXIyYVJLY284Mk53elIyRlFINkFwWlZIUVpZcjBMN3kvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0ITQstCz0LXQvdGW0Y8sIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCR0LXRhi4gJyfQn9C+0LTRltC70YzRgdGM0LrRliDQstC40LrRgNGD0YLQsNGB0LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcUpROUFJV2o0OHBKVE1CV2ZvM2g3ejZKbEtKSDk4MG4vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0YLQsNGA0YbQtdCyINCR0LXQvdC20LDQvNGW0L0sIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQli7QnNCw0YHRgdC90LUuICcn0KDQvtC30LTRg9C8Jyc7IDIp0JUu0KDQuNCx0LrRltC9LiAnJ9Ck0L7RgNC80YPQu9CwIDEnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTDZieER5c04weTJHRFNOblJYcUdFRmJIUjdlUy1peHMvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LvQsNGB0Y7QuiDQndCw0LfQsNGALCAxOCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QlNC+0L3QvtGC0ZYuINCQ0YDRltGPJydPIGRlbCBtaW8gYW1hdG8gYmVuJycsMinQlS7Qk9GA0ZbQsyzQky7QpS4g0JDQvdC00LXRgNGB0LXQvSAnJ0plZyBlbHNrZXIgZGlnJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTJfTUZQVTM5YnRKUUt2U3QyUll6amlVMEhhWXNhNE9nL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNGP0YfQtdC6INCG0L7QsNC90L3QsCwgMTfRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QkC7QnNC+0YbQsNGA0YIu0JDRgNGW0Y8nJ1JpZGVudGUgbGEgY2FsbWEnJywgMinQpC7QndCw0LTQtdC90LXQvdC60L4sINCGLtCk0YDQsNC90LrQvi7QoNC+0LzQsNC90YEgJyfQp9C+0LPQviDRj9Cy0LvRj9GU0YjRgdGPINC80LXQvdGWINGDINGB0L3RlicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFUWJRS2JXaXZDYi1nT1FrY2NJQ0w1QVBRamdXbGU5dy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQstCw0YjQsCDQr9C90LAsIDE2INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JrQstCw0L3Rhi4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwg0IYt0IbQhiDRhy47IDIp0JIu0J/QvtC/0L8uICcn0KDRg9GB0YHQutC40Lkg0LLQtdGH0LXRgCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvcEw0MW1MSDEwQm5yMWVNeXpPRXhzd0ZKb1RaXzhjUy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtC70L7QtNGW0Lkg0JDQvdGC0L7QvSwgMTgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4g0KDQvtC80LDQvdGBJyfQk9C+0YDQvdC40LzQuCDRgtC40YXQviDQu9C10YLQtdC70LAg0LTRg9GI0LAg0L3QtdCx0LXRgdCw0LzQuCcnLCAyKdChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CV0LvQtdCz0ZbRjycnLNGC0LIuM+KEljEsINC+0LHRgNC+0LHQutCwINC00LvRjyDQstGW0L7Qu9C+0L3Rh9C10LvRliDRgtCwINGELdC90L5cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWxRSXpET2lacC1FZFhseTEwU1ZtNGRpT2o1V0NTazNaL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0L3RjtGI0LXQuiDQodC+0YTRltGPLCAyMSDRgNGW0LpcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCi0LDQutGC0LDQutGW0YjQstGW0LvRli4g0KHQvtC90LDRgtCwINC00LvRjyDRhNC70LXQudGC0Lgg0ZYg0YTQvtGA0YLQtdC/0ZbQsNC90L4uXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFIWEUtV2JsVTAtSHl3Z1Z6Q3VuUW5pUVVDVU5YR2xOTi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtC90Y7RiNC10Log0KHQvtGE0ZbRjywgMjEg0YDRltC6IFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQu0JrQvtC80LvQtdCyLiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTRxNzhYS3BkRmc2NlZTV2tBWnEwVmVSdUthVGNKVXB1L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GH0LXQu9GW0L3RhtC10LLQsCDQkNC00YDRltCw0L3QsCwgMTUg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QnNC+0YbQsNGA0YIuINCQ0YDRltGPINCR0LvQvtC90LTRhdC10L0g0Lcg0L7Qv9C10YDQuCcn0JLQuNC60YDQsNC00LXQvdC90Y8g0ZbQtyDQodC10YDQsNC70Y8nJywgMinQoC7Qk9C70ZbRlNGALicn0JIg0L/QvtGA0YvQstC1INC90LXQttC90L7RgdGC0Lgg0YHQtdGA0LTQtdGH0L3QvtC5JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTdtUlZ4VjA2djVNdjZfUDNDMTgzb01nT04tUl91LXFPL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10YHQuNC6INCd0LDQt9Cw0YDRltC5LCAxNiDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlNC2LtCf0YPRh9GH0ZbQvdGWLiDQkNGA0ZbRjyDQotC+0YHQutC4OyAyKdCcLtC00LUg0KTQsNC70YzRjy4nJ9Cl0L7RgtCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUJKTnNUcDRXRHhaYkFkQW5qTUxQM2hiRDYzVDJlSXdZL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQr9GA0L7RiNC10L3QutC+INCS0LDQu9C10YDRltGPLCAxOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCh0YLQtdGG0LXQvdC60L4uICcn0KHQvtGC0L7Rj9C70LAg0Y8g0ZYg0YHQu9GD0YXQsNC70LAg0LLQtdGB0L3RgycnOyAyKdCSLtCS0LvQsNGB0L7Qsi4g0KHQutC10YDRhtC+INC00LvRjyDQtNC+0LzRgNC4INGC0LAg0YTQvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPdURsYWNEYjNpOTR4Tnhrb3drLWpzTmt0eHVRSzcxTC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtC30LDQuiDQhtGA0LjQvdCwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhC7QkdC+0LfQt9CwLicn0JTQuNGC0Y/Rh9GWINC80YDRltGXJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBzb3lPSXIxN09DeU5fR2hSVV9xN0lwUzRIV3dIV1VCL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0LfQsNC6INCG0YDQuNC90LBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIifQndGW0Ycg0Y/QutCwINC80ZbRgdGP0YfQvdCwJycsINC+0LHRgC4g0K4u0J7RgdGC0YDQvtCy0YHRjNC60L7Qs9C+IFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVEpLUUZFbTNhM3d6aVl2STNRZmloR3h6VjJVNVFIMm4vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LjQutC40YLRjtC6INCQ0L3QsNGB0YLQsNGB0ZbRjyBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J0u0JHQsNC60LvQsNC90L7Qsi4gJyfQmtC+0L3RhtC10YDRgtGW0L3QvicnLCAgICAgIDIp0Jcu0JHQsNCz0ZbRgNC+0LIuICcn0KDQvtC80LDQvdGBJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWo4X212WkVHVGdZSTBMRkdXRm9MYlFBZ0NIcEk1QzBaL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LIn0Y7QuiDQktC70LDRgdGC0LBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JAuINCc0L7RhtCw0YDRgi4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINGE0LDQs9C+0YLQsCDQtyDQvtGA0LrQtdGB0YLRgNC+0Lwg0YHRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwg0IbRhy47IDIp0JAu0KLQsNC90YHQvNCw0L0u0KHQvtC90LDRgtC40L3QsCDQtNC70Y8g0YTQsNCz0L7RgtCwINGWINGE0L7RgNGC0LXQv9GW0LDQvdC+LNCG0IbQhtGHLlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMzBhWk8xbnhWNEU4SFg3aHhXYU52VlQ0YmZna2h4NE0vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDRgdGO0Log0K7Qu9GW0Y9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JMu0KTQvtGA0LUuICcn0J/RgNC+0LHRg9C00LbQtdC90L3RjycnLCAyKSDQkS7QkdCw0YDRgtC+0LouICcn0KjRltGB0YLRjCDRgNGD0LzRg9C90YHRjNC60LjRhSDRgtCw0L3RhtGW0LInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb2RzM3R2VURYWmRvMXllZElWWFljYzlNbjc3YmpoMjUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90L7QstCwINCiLtCSLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0KHQtdCy0LXRgNC9LiAnJ9Cf0L7Qu9GM0YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeFh0dk9TQXVudjU2UmZBeGdWMXE3bTRpS2EwOXNXSDEvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90L7QstCwINCiLtCSLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0KLQsNC80LDRgNC40L0gJyfQodGC0LDRgNC+0LLQuNC90L3QuNC5INCz0L7QsdC10LvQtdC9JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTQ5dmxNMDdHZDhTOUN6NHREWjJLeUtrZ3VKenlCMXVCL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9Cw0YfQuNC6INCeLtCQLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoC7Qk9C70ZbRlNGALicn0KDQvtC80LDQvdGBJycsIDIp0J4u0KbQuNCz0LDQvdC60L7Qsi4nJ9CG0L3RgtGA0L7QtNGD0LrRhtGW0Y8g0YLQsCDQp9Cw0YDQtNCw0YgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTmdzODVxcEVPREV2NjdhOC1kYUp4Wm9INktvN1NVV2svcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDQuNGG0ZbQsiDQni7QnC5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQuINCa0YDQtdC50YHQu9C10YAuJyfQnNCw0LvQtdC90YzQutC40Lkg0LLRltC00LXQvdGB0YzQutC40Lkg0LzQsNGA0YgnJywgMinQmy4g0KDQtdCy0YPRhtGM0LrQuNC5LiAnJ9CG0L3RgtC10YDQvNC10YbQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuWGt5YlBaSFBPV1dVekJFRF9LS2VHRjNrTzJFY2Fiai9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRltGA0YfQsNC90L7QstCwINCGLtCSLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JLRltC00LzQvtC90YLQtS4nJ1BhciB6aWxvIHVuIHJhaWJvIHBhc2FrdScnLCAyKdCT0YPQsdCw0YDQtdC90LrQviDQki4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINGE0LvQtdC50YLQuCDQtyDQutCw0LzQtdGA0L3QuNC8INC+0YDQutC10YHRgtGA0L7QvCzRgtCyLjEwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6cE1qQ2F1VXBiSmR1ZldYZmI1T2ZtN1A5c0FZai1pUC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQtdC60YPRhSDQni7Qki5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0IYu0JLQuNC80LXRgC4gJyfQk9GD0YbRg9C70YzRgdGM0LrQsCDRgNCw0L/RgdC+0LTRltGPJycsIDIp0KPQutGALtC90LDRgC4g0YLQsNC90LXRhtGMINCyINC+0LHRgC7Qki7QodC+0LvQvtC90YHRjNC60L7Qs9C+ICcn0JLQtdGH0L7RgNC90LjRhtGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWRmUHgxNVdRS0hmUFZ0TVBXV0FBdzlzeTlVWXc1UzFlL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C+0LHQvtC00LAg0JsuINCcLiwgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCR0LXRgtGF0L7QstC10L0sINCiLtCo0LXQstGH0LXQvdC60L4uICcn0JfQvtGA0LUg0LzQvtGPINCy0LXRh9GW0YDQvdGP0Y8nJywgMinQm9C10LzQutGW0LLRgdGM0LrQsCDQvdCw0YDQvtC00L3QsCDQv9GW0YHQvdGPICcn0JIg0YLQtdC80L3RgyDQvdGW0YfQutGDINGD0LHQvtGH0LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMGdabzUzWDZFaEh3RU1wWEt3cEIydFcyX2lyVm8yOTAvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0Y7QsdGH0LXQvdC60L4g0Jwu0KEuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEu0JHQsNGFLiDQmtC+0L3RhtC10YDRgiDQtNC70Y8g0YHQutGA0LjQv9C60Lgg0Lcg0L7RgNC60LXRgdGC0YDQvtC8INC70Y8g0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xd2ZodWl0WEwyTXd0WWRyVUhJa1ZkTXhRWnBodDZqTmwvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0Y7QsdGH0LXQvdC60L4g0Jwu0KEuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnS7QodGC0LXRhtGO0L0uICAgICcn0JHQvtC70LXRgNC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJIV1VyaXFLdlNUblZuSW00N21tTGVkU2kwTmgtWFFzL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC40YXQsNC50LvQvtCy0LAg0Jwu0JIuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC7QodC+0LvRgtCw0L0uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRW9FUzJtVHJXQ3k5Q1FjcWQ5cXUzNjZaMXR6NklwUlEvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTNmZmFhc2RhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNGF0LDQudC70L7QstCwINCcLtCSLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JkuINCi0LDQvNCw0YDQuNC9LiBcXFwi0KHRgtCw0YDQvtCy0LjQvdC90LjQuSDQs9C+0LHQtdC70LXQvVxcXCJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXU0eEowdks2ZGVSMlhKd0dMWEZoNnNCUmVQdnhHVU5yL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNGP0LvRjNC60ZbQvdCwINCdLtCeLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JTQti7QktGW0LvRjNGP0LzRgS4gJyfQnNC10LvQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpTV9FRjBWeDktdzREUzZIUl9aSFJKLW1xSndBLUZHcC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDFlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzRj9C70YzQutGW0L3QsCDQnS7Qni5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCm0LjQvdGG0LDQtNC30LUuICcn0KHQsNGH0ZbQtNCw0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNTlkalNyekkxQXZMNXBrQ2wwdm5ZRHNIUUxUbmQ1bG8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCd0ZbQutGW0YLRltC90LAg0IYu0KAuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkS7Qm9GP0YLQvtGI0LjQvdGB0YzQutC40LkuICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeVF5TzBRNjVXdkhudlkyOHhCbDNzaFctSHRkdTQyMzkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCd0ZbQutGW0YLRltC90LAg0IYu0KAuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQodC7LiDQkC7QnCfRj9GB0YLQutGW0LLRgdGM0LrQvtCz0L4sINC80YPQty7Qki7QktC10YDQvNC10L3QuNGH0LAgJyfQn9GW0LTQutGA0YPRh9GDINGPINGH0L7RgNC90ZbRlyDQstGD0YHQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1XzdVUUR1T0NEcUpKajFxNWxoRUZQRW94ZF9QVTNqWS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDIxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNGU0L3QutC+INCiLtCuLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCWLtCc0LDRgdGB0L3QtS4gJyfQoNC+0LfQtNGD0LwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSmxBb1ktQUFKRXlJLXJJUkRDdTdVbnl3eHZyV0VCQncvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDRlNC90LrQviDQoi7Qri4sIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIu0KfRg9C/0LDQui4gJyfQktC10YHQvdGP0L3QuNC5INGA0L7Qui3QvS3RgNC+0LvQuycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUNS1JVU5VdVFtVXZGVldZbFk2U0FWZWotVElxbWJycS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDIzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNCy0YfRg9C6INCiLtCGLiAgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCU0LYu0JLRltC70YzRj9C80YEsINCw0YDQsNC90LYu0JAu0KLQtdC/0LvQuNGG0YzQutC+0ZcuJyfQmtC+0LvQuNGB0LrQvtCy0LAg0LTQu9GPINCw0L3Qs9C10LvQsCcnLCAyKdCSLtCa0L7Qt9C70L7QsizQv9C10YDQtdC60LsuINC00LvRjyDQtNC+0LzRgNC4INCELtCW0YPQutC+0LLQsC4gJyfQnyfRlNGB0LAg0YMg0YHRgtC40LvRliDRhNC70LDQvNC10L3QutC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTdUZ2l1b2dpdnNoM3h3akZYaTVhMW9SVS1va2tQOTYwL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCGLtCuLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCo0YPQvNCw0LrQvtCy0LAuICcn0KLQsNC90LPQviDQldCy0ZbRgtC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFDa3ppUnZZSnZuaVc3Y2lhN3k5RWtJODVzbkxKdzd4L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCGLtCuLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIu0JPQvtC80L7Qu9GP0LrQsC4gJyfQhtGB0L/QsNC90YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaU9VSk4yMUJ2RGR6c0wwb1AwYXR2c0Vtb3FnVWRwWUMvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzQvtC70Y/QvdGW0L3QvtCy0LAg0KEu0JwuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QlNCy0L7RgNC20LDQui4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINGB0LrRgNC40L/QutC4INC70Y8g0LzRltC90L7RgCwg0IYg0YcuOyAyKdCcLtCh0LrQvtGA0LjQui4gJyfQmtCw0YDQv9Cw0YLRgdGM0LrQsCDRgNCw0L/RgdC+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXRsc3JNa1FwMFVWcTB5d3RKMDFMcEhLUHNtRk9wSG5PL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodGC0LDRgNC40L3RgdGM0LrQsCDQnC7QkC4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCo0LjQvdC60LDRgNC10L3QutC+LtCS0LDRgNGW0LDRhtGW0Zc7IDIp0JUu0JHQvtGG0YbQsC4nJ9CQ0YDRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUxzV3pWX0x0MXowZ0dYVUxTZWdvdWNrWTlSWnJvRzdoL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotGA0LXQv9Cw0Log0Jwu0IYuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCWLtCU0LXQvNC10YDRgdGB0LzQsNC9LiDQpNCw0L3RgtCw0LfRltGPLCAyKdCfLtCG0YLRg9GA0YDQsNC70YzQtNC1LiAnJ9Cc0LDQu9C10L3RjNC60LjQuSDRh9Cw0YDQtNCw0YgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVE1TS0hwRWNtTTNLN2hpWnp5WTNnNEtfOE10SGJIOUwvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCE0YDRjNC+0LzRltC90LAg0J4u0JMuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jwu0JTRgNC10LzQu9GO0LPQsC4g0J/QvtC10LzQsC3RgNCw0L/RgdC+0LTRltGPLCAyKSDQoS7QntGA0YTQtdGU0LIuJyfQktC10YHQvdGP0L3QutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVk2T0tVT29KYjFqdTNWelM0RkN0TzRndUJMSEQ5MTBQL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MmFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0LTRg9C6INCiLtCuLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Jou0Jwu0JLQtdCx0LXRgC7QmtC+0L3RhtC10YDRgiDQtNC70Y8g0LrQu9Cw0YDQvdC10YLQsCDihJYxLNCGINGHLjsgMikg0K8u0JzQtdC00LjQvdGM0YguINCg0L7QvNCw0L3RgVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa1dCSFlVWVJtWHBtNUJDR1c5Ym50OHk5cml4Z1BRWjQvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCd0L7QstGW0LrQvtCy0LAg0Jwu0JwuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQntCx0YAuINCULtCX0LDQtNC+0YDQsC4gJyfQodC10YDQtdC0INGB0LXQu9CwINC00LjRh9C60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMGFXVmxPZTNGLXNzUWhUVnFrRm5nOEdKS0dKRXdVODAvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCd0L7QstGW0LrQvtCy0LAg0Jwu0JwuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8u0IYu0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJ9CX0LDQsdGL0YLRjCDRgtCw0Log0YHQutC+0YDQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0dzVNTlUtNWZ1WFFvU09IcFd0YUd2R2paeGNmTUFmbS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDJkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQuNGA0L7RgtCwINCeLtCcLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QmtGD0LTRgNGP0LLRhtC10LIuICcn0J7QtNC40L0g0LTQtdC90Ywg0Lcg0LbQuNGC0YLRjyDQtNGP0YLQu9CwJycsIDIp0J4u0JHQtdGGLicn0KPQutGA0LDRl9C90YHRjNC60LUg0ZbQvdGC0LXRgNC80LXRhtC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNlakIxaWRfUFU3WGctdzVmektVdkowRW9PbkZzRE1DL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFxcXCJcIlxuICAgIH1dO1xuXG5sZXQgZW5zZW1ibGUgPSBbXG4gICAge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JbRg9GA0LDQstC10LvRjCDQoS4sINCQ0YDRgtC10LzQtdC90LrQviDQoS4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9CG0YHQv9Cw0L3RgdGM0LrQuNC5INGC0LDQvdC10YbRjCcnLCAyKdCe0LHRgC7QnC7Qn9C+0L/QvtCy0LAuICcn0ITQstGA0LXQudGB0YzQutGWINC80L7RgtC40LLQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFLdmNFRTdxUFMwcmFPQ3FkOHNhTUVIby15MFVESXBDaC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCf0LjQu9C40L/Rh9GD0Log0J0uLCDQmtCw0LLRg9C9INCELilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCSLtCQ0LvQtdC60YHQtdGU0LIuJycg0J3QsCDQv9GA0L7Qs9GD0LvRj9C90YbRlicnLCAyKdCeLtCf0LXRgtGA0L7QstCwLiAnJ9Cm0LjRgNC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5FTG90d3FBejlDN2QwOUc0TlZCVnZiUnlLTDk1OHJzL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDM5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICAo0KDQsNC00LrQvtCy0YHRjNC60LAg0JAuLCDQmtGD0LfRjNC80LjRhykuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAu0KjQvdGW0YLQutC1LiAnJ9Co0LjQvdC10LvRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFNNHBhek5JX1R5djJzRE1XOW9COVFlbTM2STVEUlp1Ui9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCg0LDQtNC60L7QstGB0YzQutCwINCQLiwg0JrRg9C30YzQvNC40YcpLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQndCw0YPQvNC10L3QutC+Licn0KfQsNGBINCy0LXQu9C40LrQuNGFINC+0YfRltC60YPQstCw0L3RjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMQk9lX3dGbENfeXp0X0Zma1JiQzgtOTBjVnUzc3RWTy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCh0ZbQutC+0YDQsCDQoC4g0KfQtdGA0LXQv9GD0YnQsNC6INCcLikuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QndCw0YPQvNC10L3QutC+LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnLCAyKdCVLtCT0YDRltCzLdCTLtCk0ZbRgNGC0LjRhy4nJ9Ci0LDQvdC10YbRjCDQkNC90ZbRgtGA0LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xT1JUenctcGxlaFF2QUFPaW5PcmRxbkh0blVfb0NaajUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0M2NcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgJydNeWNyYWZ0JycgKNCE0YDQvNC+0LvQtdC90LrQviDQlC4sINCo0LjQsdCw0L3QvtCy0LAg0JIuKSBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0KHQutC+0YDQuNC6LiAnJ9Cc0LXQu9C+0LTRltGPJycsICAgICAgICAgMinQni7QpdGA0L7QvNGD0YjQuNC9LiAnJ9CU0YDRg9C60LDRgNGB0YzQutCwINC80LDRiNC40L3QutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUF1dm80NGFCWVRHM3ZLeHNUMmhRRDBobWtnMUVkbGE3L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQkdC+0L3QtNCw0YDQtdC90LrQviDQnC4sINCh0LvRltC90YfQtdC90LrQviDQri4pIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0KHQtdC60YDQtdGCLicn0J/RgNC+0LPRg9C70Y/QvdC60LAg0JTQvtCx0LXRgNC80LDQvdCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFRU0Fka3duM2l1NTRrUjNoeG5oM0hnMENfenBQLVpVL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQkdC+0L3QtNCw0YDQtdC90LrQviDQnC4sINCh0LvRltC90YfQtdC90LrQviDQri4pIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJyDQhtGC0LDQu9GW0LnRgdGM0LrQsCDQv9GW0YHQtdC90YzQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVpULTN1Q3J6YkdKdE1jMG9Md3RnSnFUb3J6OWpEWWVzL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQktCw0YjRg9GA0ZbQvdCwINCSLiwg0ITQttC+0L3QutC+0LIg0JAuKS5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCTLtCR0ZTQu9C+0LIuJyfQo9GA0LDRgdGW0LzQsCDRliDQp9Cw0YDRltCy0L3QsCDQp9C10YDQtdC/0LDRhdCwJycsIDIp0J4uINCf0L7Qu9GM0L7QstC40LkuICcn0J/QvtC00L7RgNC+0LYg0LIg0JDQu9GM0L/QuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqQ2h2TUJyRHd5eEtrM0FKRUVDU0JFN1lfa0NMUmg4cy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JPQtdC80LHQuNGG0YzQutCwINCeLiwg0JrRg9C30LvQviDQmi4pLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QpdC+0LLQsNGA0LQuICcn0KfQsNGA0LvRjNGB0YLQvtC9JycsIDIp0JTQti4g0KjRltGA0ZbQvdCzLiAnJ9Ca0L7Qu9C40YHQutC+0LLQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0TE5WbGh1clpVZEh4NDRNY2hTNHFtMjUxZVMzOXJvUS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JTQtdGA0Y/QsdGW0L3QsCDQoS4g0YLQsCDQktCw0YHQuNC70YzRlNCy0LAg0JIuKS5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JTRltCw0LHQtdC70LvRli4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwgMinQmy7QqNGD0LrQsNC50LvQvi4gJyfQk9GD0LzQvtGA0LXRgdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeUpRQmZnN2NfQm9RcVhNbUFZcU5ZUUNuWXRhd1o5VG8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0YDQuNGI0YLQsNC70L7QstC40Ycg0JwuLCDQmtGA0LjRiNGC0LDQu9C+0LLQuNGHINCGLikgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlNC2LtCT0LXRgNGI0LLRltC9LiAnJ0NsYXAgeW91IGhhbmQnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTUFKZUJWbmZ0RWRoY2lvNDduRG5VZ2NqR0dUd0s4Q2ovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0YDQuNGI0YLQsNC70L7QstC40Ycg0JwuLCDQmtGA0LjRiNGC0LDQu9C+0LLQuNGHINCGLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIifQmtC+0LvRj9C00LrQsCcnLCDQvtCx0YAuINCeLtCX0LDQutCw0LvRjtC20L3QvtGXXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwcXhZWlR2Rnlycmo2ZFRwVDU4VVVQU09QSE0taFp0ZS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JvQsNC90YHRjNC60LjQuSDQhC4sINCb0LDQvdGB0YzQutCwINCeLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JUu0JPRgNGW0LMuINCQ0YDRltGPINGW0Lcg0YHRjtGX0YLQuCAnJ9CXINGH0LDRgdGW0LIg0KXQvtC70YzQsdC10YDQs9CwJycsIDIp0JIu0J/RgtGD0YjQutGW0L0uICcn0JHRgNC10L3RhNC+0YDQtNGB0YzQutCwINCy0ZbQtNGM0LzQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE4T1VzQ0dRQnMzSWhsWDZpdC1zM1R4dW8wN00zTnMwSC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KHQuNC80L7QvdC10L3QutC+INCiLiwg0KTQtdC00LjQvdCwINCQLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCU0LYu0JPQtdGA0YjQstGW0L0uJyfQmtC+0YXQsNC90LjQuSDQvNGW0LknJzsgMikg0J8u0JzQvtGA0ZbQsC4gJyfQnNCw0L3Rg9C10YInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaFZla2g4XzVNT1VKRGdKdFhJOGk0R0JkUlF3Q0Fla3QvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCh0LrQvtC/0LXRhtGMINCQLiwg0JzRg9GA0LfQsNC6INCuLikuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIu0J7RgdGC0LXQvS4nJ9Ci0LDQvdC10YbRjCDQu9GP0LvRjNC+0LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRUZ6eWlqdXdBRk5qOHYtVGxyYWlJX1BrdUhHcVg5NEUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCh0LrQvtC/0LXRhtGMINCQLiDQnNGD0YDQt9Cw0Log0K4uKSBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQltGD0LvRjNGU0LLQsC4nJ9Cf0YDQvtCz0YPQu9GP0L3QutCwINC3INGC0LDRgtC+0LwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVlpyMlYtSHY4TUlGOEtXZ1pHZkpBeXVFRTdtYXFXb3AvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCi0YDQvtGG0LXQvdC60L4g0JAuLCDQr9C60YPQvdGW0L3QsCDQni7Qki4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCcLtCS0LXQsdC10YAuINCh0L7QvdCw0YLQsCDQtNC+INC80LDQttC+0YAsINCGINGHLjsgMinQkC7QmtC+0LzQu9GW0LrQvtCy0LAuICcn0KHQv9C+0LPQsNC0JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFZTkI4akgwSnk0U1AzdWZBY2VRLW1KMjlsUHJfclR3L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQ5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQpNGW0LvRltC/0L7QsiDQhi4sINCc0LDRgNGH0LXQvdC60L4g0JsuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuJyfQltCw0YDRgicnIDIp0Jwu0JvQtdC+0L3RgtC+0LLQuNGHLicn0KnQtdC00YDQuNC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXBoV1R5SUpiN0Z6cU5RRmVVcUU1eDFsWUZaNTlXdWd6L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQpdC10LvQvNCw0L0g0JIuLCDQpdC10LvQvNCw0L0g0JIuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoy7Qk9GW0LvQu9C+0LouJyfQndCwINC/0LDRgNC40LfRjNC60L7QvNGDINCx0YPQu9GM0LLQsNGA0ZYnJywgMinQnS7QodC80ZbRgNC90L7QstCwLicn0JHRgNCw0LfQuNC70YzRgdGM0LrQuNC5INC60LDRgNC90LDQstCw0LsnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN2MzMkNJMG1fa05KWFprckhrWFFlNTJUZGZIV1BsNk8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgJydTZm9yemFuZG8nJy5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQni7QptC40LPQsNC90LrQvtCyLiAnJ9Ci0YPRgdGC0LXQvycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFVUWtaMTFVR1ZscWhSM3NyYWRwYm9RcEs5RUV5YWlxby9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0Y1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQutCy0LDRgNGC0LXRgiAnJ1Nmb3J6YW5kbycnLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCT0YDRltCzLicn0JIg0L/QtdGH0LXRgNGWINCz0ZbRgNGB0YzQutC+0LPQviDQutC+0YDQvtC70Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU1RMbnQ4SVU1bmxZLUcxZHFmYkt1UmExQl9aOFRTa1kvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCS0LjRhdGA0LjRgdGCINCcLiwg0KTRlNC00L7RgdGU0ZTQsiDQnS4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCf0YDQvtC60L7RhCfRlNCyLiDQnNCw0YDRiCwgMinQki7Qm9GO0YLQvtGB0LvQsNCy0YHRjNC60LjQuS4g0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGC0LXQvNGDINCf0LDQs9Cw0L3RltC90ZZcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW56UkhYSkt0QWJkeDdQd2JCNWQ0WEZHeEJOY3RwTkVrL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQktGW0YLRjtC6INCSLCDQkdC10YDQtdC30L7QstGB0YzQutCwINCELilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JHQsNGFICjQktGW0LLQsNC70YzQtNGWKS4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINC+0YDQs9Cw0L3QsCDQu9GPINC80ZbQvdC+0YAsIDIp0JAu0J8n0Y/RhtC+0LvQu9CwLiAnJ9Cb0ZbQsdC10YDRgtCw0L3Qs9C+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5mMDFFZjZPVk95TEFKVVVqQll5SUtOczNNWmVfUEZ2L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQkdC+0YDQvtCy0LXRhtGMINCeLiwg0ZbQu9GO0YHRgtGA0LDRgtC+0YApXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS7QkdCw0YUuJyfQkNGA0ZbRjycnICgnJ9Ch0YLRgNCw0YHRgtGWINC30LAg0JzQsNGC0LLRltGU0LwnJylcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUgxYWtRVWRSN1FLUk80UDNoRFk2X3RadG1kU3JrMEoxL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDUwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQkdC+0YDQvtCy0LXRhtGMINCeLizRltC70Y7RgdGC0YDQsNGC0L7RgCkuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0J7RgNGELicn0J4s0KTQvtGA0YLRg9C90L4nJyAoJyfQmtCw0YDQvNGW0L3QsCDQkdGD0YDQsNC90LAnJylcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlrT0lCVGRJS0tRWjZuWFZnUGlaSDNZOG15Y1dwd0J5L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDUxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC70LjQvNC10L3QutC+INCcLiwg0JTRltC+0YDQtNGW0ZTQstCwINCcLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CS0L7QutCw0LvRltC3JycsIDIp0JQu0JzRltC50L4uJyfQkdGA0LDQt9C40LvRjNGU0YDQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1ODFkQUF0bERvZnE0cG55RHRZZy1TeEdCNGpHQjNzRS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQvtC30LDQuiDQhi4sINCi0LDRlNGALdCj0LvRjNGP0L3QvtCy0LAg0JouKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCJBLiAg0J8n0Y/RhtGG0L7Qu9CwLiAnJ9Cb0ZbQsdC10YDRgtCw0L3Qs9C+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXk2WXFGdEJQR01sWHpFUUw4dXUzQkw0VWtyTXplNGpiL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDUzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC+0LfQsNC6INCGLiDRgtCwINCi0LDRlNGALdCj0LvRjNGP0L3QvtCy0LAg0JouKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JPRgNGW0LMuICcn0J3QvtGA0LLQtdC20YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVHRmaTRtN1Axb3VOSkVIRFhpSm5hN1gzYmVRUHpyZnUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0L7RgdGC0LXRh9C60L4g0JAuLCDQmtC+0L3QtNGA0LDRgtGO0Log0JwuICkuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0Jou0JTQtdCx0Y7RgdGB0ZYuICcn0KMg0YfQvtCy0L3RlicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoUld6Q0xYSVVVNlhwRFdaM0Vpc0k3UTVOWkh6RGRpby9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQvtGB0YLQtdGH0LrQviDQkC4sINCa0L7QvdC00YDQsNGC0Y7QuiDQnC4pLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K4u0JLQtdGB0L3Rj9C6LiAnJ9Ca0LDRgNC70YHQvtC9JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUEzMVZyUjVkNWRYVDhrUVd0TnlHa3hmeTdiS0k1TURVL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQnNCw0YbRltGU0LLRgdGM0LAg0JwuLCDQn9Cw0L/RltGU0LLQsCDQmi4pLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JzQtdGC0L3QtdGALicn0KDQvtGB0ZbQudGB0YzQutC40Lkg0YXQvtGA0L7QstC+0LQnJywgMinQkC7QnyfRj9GG0YbQvtC70LAuJyfQktC10LvQuNC60LUg0YLQsNC90LPQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2QW5nc2FzR3VBc2hvRFp5ZzlpZGxqQjh4b01EdjR2Qy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCa0LDRgdGP0L3QtdC90LrQviDQni7Qki4sINCT0L7RgNC00ZbRlNC90LrQviDQhi7Qni4pIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JAu0JHQsNCx0LDQtNC20LDQvdGP0L0uICcn0J3QvtC60YLRjtGA0L0nJywgMinQri4g0KnRg9GA0L7QstGB0YzQutC40LkuICcn0JPRg9C80L7RgNC40YHRgtC40YfQvdC40Lkg0YLQsNC90LXRhtGMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV9TWEFGUUR3X0JtNFlLLXFjeTZYczRrRm9XNEgzRGFJL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICcn0JXQu9C10LPRltGPJydcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCcLtCh0LrQvtGA0LjQui4gJyfQnNC10LvQvtC00ZbRjycnLCAyKdCbLtCa0LDRgNC/0LXQvdC60L4uJyfQktGW0L3QvtGH0L7QuiDRg9C70Y7QsdC70LXQvdC40YUg0LzQtdC70L7QtNGW0LknJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xY2tadzBIc3NpeUVkYlNTSEJxT3lhd3FTZnRBazF3VWovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCT0YDQuNCz0L7RgCfRlNCy0LAg0JMu0JAuICwg0K/QutGD0L3RltC90LAg0J4u0JIuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNGD0LHQtdGA0YIuJyfQktGW0LnRgdGM0LrQvtCy0LjQuSDQvNCw0YDRiCcnIDIp0JAu0JrQvtC80LvRltC60L7QstCwLiAnJ9Cd0LAg0LzQsNGB0LrQsNGA0LDQtNGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVDYUpfcVlVYXB5TS1IQmhydVdiLWg3SUZ5U3FrX3NVL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDVhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC+0YHQtdC90LrQviDQni7Qki4sINCa0LDRgdGD0LzQvtCy0LAg0J4u0JQuKS5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAuINCm0YTQsNGB0LzQsNC9LiAnJ9Cb0ZbRgNC40YfQvdC40Lkg0LLQsNC70YzRgScnLCAyKdCcLtCc0ZbQvdC60L7Qsi4gJyfQodGC0LDRgNC40Lkg0YDQvtGP0LvRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6R09LdW54SW9IZDNVajVGSHZkV3lOLXJ2V0Y3bjZWLS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQutCy0LDRgNGC0LXRgiAgKNCS0LDRgdC10L3QutC+INChLiwg0JLQsNGB0LXQvdC60L4g0JwuLCDQpdCw0LLQsNC70LrQviDQoi4s0JHQuNGH0LrQvtCyJ9GP0Log0JouKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCS0ZbQstCw0LvRjNC00ZYuJyfQl9C40LzQsCcnOyAyKdCkLtCc0LXRgNC6J9GO0YDQsC4nJ9CR0L7Qs9C10LzQvdCwINGA0LDQv9GB0L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQjk2bkVDM3ZLWVJkOE9nVFhnUGlWVlg4VkItTVNTZFkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgJydBTExBIEJSRVZFJycuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QodGC0YDQsNCy0ZbQvdGB0YzQutC40Lku0KTRgNCw0LPQvNC10L3RgiDRltC3INCx0LDQu9C10YLRgyAnJ9Cf0LXRgtGA0YPRiNC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYmlmVzhPQnYxRTYxcWQxODRFYUpqc3ZPdHJYclJya1YvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgJydBTExBIEJSRVZFJycuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi7Qk9GD0YDQu9GW0YLRgi4nJ9CS0ZbQtNC10L3RgdGM0LrQuNC5INCy0LDQu9GM0YEnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUWpCcktXVGtDYmlTOUVqNWs0cEhiSFJEc04yRDFjYU0vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjCAnJ9CV0JrQodCf0KDQldCh0IbQrycnLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0J3QsNGD0LzQtdC90LrQvi4gMSknJ9Cn0LDRgdC4INCy0LXQu9C40LrQuNGFINGB0L/QvtC00ZbQstCw0L3RjCcnLCAyKdCQLtCfJ9GP0YbRhtC+0LvQsC4gJyfQm9GW0LHQtdGA0YLQsNC90LPQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpVWxZS3JJS3NKMWludUNxQU9TME1ZNExxR3JtY3Bfay9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXFxcIlwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1ZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQutCy0LDRgNGC0LXRgiAo0KnRg9C60ZbQvdCwINCeLizQodC10YDQtNGO0Log0JMuLCDQqNCw0L/QvtCy0LDQuyDQni4sINCc0LDQutGB0LjQvNC10L3QutC+INCSLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLtCb0LDQstGW0L3RjNGP0LouJyfQk9Cw0LvQvtC/LdC80LDRgNGIJyc7IDIp0JMu0JPRg9GA0LvRltGCLiDQndC+0LrRgtGO0YDQvVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSVliTklDMkV4Nk54eE04eW1iQ3RMMm11UEFRNFJoTWcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFxcXCJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NjBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjCAoINCh0LzQuNC6INCbLtCuLizQqNC10LrQtdC70Ywg0J4u0J4uKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0JPRg9Cw0YHRgtCw0LLRltC90L4uICcn0KDQvtC80LDQvdGBJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWRIQnpuRG1wRS0wdld5cnlNZjg2WENrRmI4c1BfSFlfL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDYxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INCw0L3RgdCw0LzQsdC70YwgKNCh0LzQuNC6INCbLtCuLiwg0KjQtdC60LXQu9GMINCeLtCeLikuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0KbRhNCw0YHQvNCw0L0uJyfQodC90ZbQttC40L3QutC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlQVGUtSl9jUzZEVFNPNmlaRml4Z2I1ZzRaeHBhelJUL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcXFwiXCJcbiAgICB9XG5dO1xuXG5teUNhcmRzID0gbXlDYXJkcy5jb25jYXQoY29uY2VydG1hc3RlcnMpO1xuXG5teUNhcmRzID0gbXlDYXJkcy5jb25jYXQoZW5zZW1ibGUpO1xuXG4vKiogQ09ERSAqKi9cbmZ1bmN0aW9uIGZpbG1SZWR1Y2VyKHN0YXRlID0ge2NhcmRDb3VudDogbXlDYXJkcy5sZW5ndGgsIGNhcmRzOiBteUNhcmRzLCBpc0RhdGFJblBsYWNlOiB0cnVlLCBlcnJvcjogXCJcIn0sIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnUkZTX1BBR0UnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IC0yLFxuICAgICAgICAgICAgICAgIGNhcmRzOiBbXSxcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnSU5GT19QQUdFJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiAtMSxcbiAgICAgICAgICAgICAgICBjYXJkczogW10sXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ0FMTCc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4g0KPRgdGWINCy0ZbQtNC10L5cIik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRzOiBteUNhcmRzLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBteUNhcmRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnZ3JvdXAtMSc6XG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQuZ3JvdXAgPT09IGdyb3VwMSkuc2xpY2UoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZHM6IG5ld0NhcmRzLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnZ3JvdXAtMic6XG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMxID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDIpLnNsaWNlKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkczEsXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzMS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnZ3JvdXAtMyc6XG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMyID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDMpLnNsaWNlKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkczIsXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzMi5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1NFQVJDSCc6XG4gICAgICAgICAgICBsZXQgcSA9IGFjdGlvbi5xdWVyeS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYD4g0J/QvtGI0YPQujogJHtxfWApO1xuICAgICAgICAgICAgbGV0IG5ld0NhcmRzMyA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjYXJkTmFtZSA9IGNhcmQubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGxldCBib29sID0gKGNhcmROYW1lLnN0YXJ0c1dpdGgocSkgfHwgY2FyZE5hbWUuaW5jbHVkZXMocSkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUZXN0aW5nICR7Y2FyZE5hbWV9IG9uIHF1ZXJ5ICR7cX0sIHJlc3VsdCBpcyAke2Jvb2x9YClcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMzLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkczMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0VSUk9SJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGA+INCf0L7QvNC40LvQutCwYCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ubXNnLFxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogMSxcbiAgICAgICAgICAgICAgICBjYXJkczogW10sXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZHM6IG15Q2FyZHMsXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG15Q2FyZHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY2FyZFN0b3JlID0gY3JlYXRlU3RvcmUoZmlsbVJlZHVjZXIpO1xuXG5jYXJkU3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgY29uc29sZS5sb2coXCJGaWxtc1N0b3JlIHN0YXRlIHdhcyBjaGFuZ2VkLCBudW1iZXIgb2YgY2FyZHM6IFwiICsgY2FyZFN0b3JlLmdldFN0YXRlKCkuY2FyZENvdW50KVxuKTtcblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9