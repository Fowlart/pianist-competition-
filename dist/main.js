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

var src = __webpack_require__.p + "1163023-f7415761843a2d3e377fbf813b622160.png";module.exports={src:src,width:1200,height:628,format:"png",toString:function(){return src;}};

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
  font-size: 20px;
  font-family: 'Jura', sans-serif;
  font-weight: 700;
  color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  justify-content: center;
`;
const FilmInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  text-align: left;
  transition: all 0.5s;
  :hover {
    background-color: black;
  }
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
  font-size: 20px;
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
/* harmony import */ var _info_page_imgs_judges_2023_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-page-imgs/judges_2023.jpeg */ "./src/components/info-page-imgs/judges_2023.jpeg");
/* harmony import */ var _info_page_imgs_judges_2023_jpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_info_page_imgs_judges_2023_jpeg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _rfs_page_imgs_rfs_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rfs-page-imgs/rfs.png */ "./src/components/rfs-page-imgs/rfs.png");
/* harmony import */ var _rfs_page_imgs_rfs_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_rfs_page_imgs_rfs_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _info_page_imgs_Poster_2023_ua_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-page-imgs/Poster_2023_ua.png */ "./src/components/info-page-imgs/Poster_2023_ua.png");
/* harmony import */ var _info_page_imgs_Poster_2023_ua_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_info_page_imgs_Poster_2023_ua_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _info_page_imgs_poster_2023_en_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info-page-imgs/poster_2023_en.png */ "./src/components/info-page-imgs/poster_2023_en.png");
/* harmony import */ var _info_page_imgs_poster_2023_en_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_info_page_imgs_poster_2023_en_png__WEBPACK_IMPORTED_MODULE_7__);








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
    imgUrl: _rfs_page_imgs_rfs_png__WEBPACK_IMPORTED_MODULE_5___default.a
  }));
};
const InfoPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://docs.google.com/document/d/1auoJ8rWsFopRwbNWrEph_DF6BaofMZah/edit?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["GiPodiumWinner"], null), " \u041B\u0430\u0443\u0440\u0435\u0430\u0442\u0438 2021 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://docs.google.com/document/d/1bb9IOUE7IL996NHuLs2qntV2ZS7SNb8h/edit?usp=share_link&ouid=113883921299144449053&rtpof=true&sd=true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), " \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://docs.google.com/document/d/156ZGNdnMajHEzjfjrG7bD_-3v9R1GH4w/edit?usp=share_link&ouid=113883921299144449053&rtpof=true&sd=true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), " \u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043A\u043E\u043C\u0456\u0442\u0435\u0442 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0443 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, null, "\u0410\u0444\u0456\u0448\u0430(ua)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Poster, {
    imgUrl: _info_page_imgs_Poster_2023_ua_png__WEBPACK_IMPORTED_MODULE_6___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, null, "\u0410\u0444\u0456\u0448\u0430(eng)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Poster, {
    imgUrl: _info_page_imgs_poster_2023_en_png__WEBPACK_IMPORTED_MODULE_7___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, null, "\u0421\u043A\u043B\u0430\u0434 \u0436\u0443\u0440\u0456"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Poster, {
    imgUrl: _info_page_imgs_judges_2023_jpeg__WEBPACK_IMPORTED_MODULE_4___default.a
  }));
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
  const sectionsForFilter = [`Архівні відео`, `Номінація "Фортепіано соло"`, `Номінація "Фортепіанний ансамбль"`, `Номінація «Додатковий інструмент (фортепіано)»`, `Про конкурс`, "Рівненські фортепіаннні студії"];
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

      case `Архівні відео`:
        dispatch({
          type: "ARCHIVE"
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

      case `Номінація «Додатковий інструмент (фортепіано)»`:
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

/***/ "./src/components/info-page-imgs/Poster_2023_ua.png":
/*!**********************************************************!*\
  !*** ./src/components/info-page-imgs/Poster_2023_ua.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "Poster_2023_ua-1d16c9288f08c7f4ed571474f60680d7.png";module.exports={src:src,width:2339,height:3308,format:"png",toString:function(){return src;}};

/***/ }),

/***/ "./src/components/info-page-imgs/judges_2023.jpeg":
/*!********************************************************!*\
  !*** ./src/components/info-page-imgs/judges_2023.jpeg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "judges_2023-a78638f599a947cb5b98db9f08e33603.jpeg";module.exports={src:src,width:3600,height:5084,format:"jpeg",toString:function(){return src;}};

/***/ }),

/***/ "./src/components/info-page-imgs/poster_2023_en.png":
/*!**********************************************************!*\
  !*** ./src/components/info-page-imgs/poster_2023_en.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "poster_2023_en-0df79305f73a71c8e1f195c484ccbb5c.png";module.exports={src:src,width:2339,height:3308,format:"png",toString:function(){return src;}};

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

/***/ "./src/store/AdditionalInstruments.jsx":
/*!*********************************************!*\
  !*** ./src/store/AdditionalInstruments.jsx ***!
  \*********************************************/
/*! exports provided: additionalInstruments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "additionalInstruments", function() { return additionalInstruments; });
let additionalInstruments = [{
  "videoUrl": "https://www.youtube.com/embed/YvtNZbpJQQo",
  "composition": "В. Гіллок. «A lively dance»",
  "name": "Войтович Ілля, 09.08.2013 р.н.",
  "id": {
    "$oid": "58243441313021"
  },
  "group": "Номінація «Додатковий інструмент (фортепіано)»"
}, {
  "videoUrl": "https://youtube.com/embed/B_1a-i6iavo",
  "composition": "М. Айрон. «Les Embruns»",
  "name": "Войтович Ілля, 09.08.2013 р.н.",
  "id": {
    "$oid": "58243441433824"
  },
  "group": "Номінація «Додатковий інструмент (фортепіано)»"
}, {
  "videoUrl": "https://youtube.com/embed/Anq7wahE-Bo",
  "composition": "М. Мордасов. «Бугі-Вугі»",
  "name": "Іванова Емілія, 24.12.2014 р.н.",
  "id": {
    "$oid": "58243441490338"
  },
  "group": "Номінація «Додатковий інструмент (фортепіано)»"
}, {
  "videoUrl": "https://youtube.com/embed/qypBvNiYT1U",
  "composition": "М. Шентюрк (Терещук). «Маленька елегія»",
  "name": "Іванова Емілія, 24.12.2014 р.н.",
  "id": {
    "$oid": "58243441560202"
  },
  "group": "Номінація «Додатковий інструмент (фортепіано)»"
}, {
  "videoUrl": "https://youtube.com/embed/MYeyvX7ofeo",
  "composition": "Т. Браун. «Танець вітру»",
  "name": "Пацюк Богуслава, 11.04.2008 р.н",
  "id": {
    "$oid": "58243441659028"
  },
  "group": "Номінація «Додатковий інструмент (фортепіано)»"
}, {
  "videoUrl": "https://youtube.com/embed/DX5D94uOrBk",
  "composition": "Д. Старшинін. «Момент насолоди»",
  "name": "Пацюк Богуслава, 11.04.2008 р.н",
  "id": {
    "$oid": "58243441701556"
  },
  "group": "Номінація «Додатковий інструмент (фортепіано)»"
}, {
  "videoUrl": "https://youtube.com/embed/yUHDmEOw5U0",
  "composition": "Й.С. Бах. Бурре сі мінор",
  "name": "Петраш Анна, 18.11.2003 р.н",
  "id": {
    "$oid": "58243441746212"
  },
  "group": "Номінація «Додатковий інструмент (фортепіано)»"
}, {
  "videoUrl": "https://youtube.com/embed/IEYISSZwWCA",
  "composition": "Е. Гріг. «У печері гірського короля»",
  "name": "Петраш Анна, 18.11.2003 р.н",
  "id": {
    "$oid": "58243441797599"
  },
  "group": "Номінація «Додатковий інструмент (фортепіано)»"
}];

/***/ }),

/***/ "./src/store/Archive.jsx":
/*!*******************************!*\
  !*** ./src/store/Archive.jsx ***!
  \*******************************/
/*! exports provided: archive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "archive", function() { return archive; });
let myCards = [{
  "id": {
    "$oid": "609853dc683dda47f8b61307"
  },
  "name": "Агратіна Станіслав, 9 років ",
  "composition": "1)М.Глінка. ''Почуття'',      2)Ю.Щуровський. ''Танок''",
  "videoUrl": "https://drive.google.com/file/d/194yt_sKC5Et3r49zCERsdBZeDQgY-G_i/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61308"
  },
  "name": "Валігура Варвара, 9 років ",
  "composition": "М.Лемішко. ''Коломийка''",
  "videoUrl": "https://drive.google.com/file/d/1c6hTIqDl-cAF3Br3l1c2uwqFZsLVSPTv/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61309"
  },
  "name": "Валігура Варвара, 9 років ",
  "composition": "Т.Максімов. ''Задзеркалля''",
  "videoUrl": "https://drive.google.com/file/d/15Yr6Qxm4rstDOMU2vGn5Jwq5VfUpN2SD/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130a"
  },
  "name": "Василевська Христина,7 років",
  "composition": "1)В.Гіллок.''Самотня бальна зала'',   2)Т.Ростимашенко.''Чаклун''",
  "videoUrl": "https://drive.google.com/file/d/1GtxUKuUkLKAnh5oCf9FluiUTQoJCTbMM/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130b"
  },
  "name": "Волинець Олександр, 8 років",
  "composition": "1)Л.Колодуб. ''Аркан'',2)Ф.Рибіцький. ''Реготушка''",
  "videoUrl": "https://drive.google.com/file/d/1_COPePzwdgS7U_OjExOpv8noz1miTe8c/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130c"
  },
  "name": "Галаган Катерина, 9 років ",
  "composition": "1)Ю.Щуровський. Тема з варіаціями, 2)Г.Кушнаренко. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1oBlUfXWqlh5uDsDFCXbHgc7XGiAJGbLH/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130d"
  },
  "name": "Герасименко Олександра, 9 років",
  "composition": " 1)В.Рачковський. Токатина. 2)В.Косенко. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1DGnsSQGlBu8X_oDPt3YKtKmiVzV-G3qJ/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130e"
  },
  "name": "Голодовська Софія, 7 років",
  "composition": "1)І.Ванхаль.Рондо, 2)М.Дремлюга.''Весела гра''",
  "videoUrl": "https://drive.google.com/file/d/12Kutj-owpsr8helrm_kFZh1yQwMjEC7A/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130f"
  },
  "name": "Голуб Аліна, 9 років ",
  "composition": "1)М.Клементі. Сонатина до мажор, Іч., 2)Б.Дваріонас. Прелюдія",
  "videoUrl": "https://drive.google.com/file/d/1uwhKMKdJZIhRznM3VU5mTqEuKxxTesaO/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61310"
  },
  "name": "Григор'єва Катерина, 8 років",
  "composition": "1)Ю.Щуровський. ''Ранок'',   2)І.Королькова.''Горобчик''",
  "videoUrl": "https://drive.google.com/file/d/1aiMv5LwYV9m2wz-SJMGnxfUqIRT9M_Ew/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61311"
  },
  "name": "Данюк Єлизавета, 7 років",
  "composition": "1)М.Любарський.''Танцювальна'', 2) Д.Кабалевський. Вальс",
  "videoUrl": "https://drive.google.com/file/d/1vTk_mAB_ECh9VDwR6EMasY1y21KWrSYH/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61312"
  },
  "name": "Дроган  Мілана, 5 років",
  "composition": "1)М.Майєр. ''Весела гра'', 2)Д.Баштейн. ''Вальс слоненят''",
  "videoUrl": "https://drive.google.com/file/d/1Xb0gIgFyCnLuCxjn5klaeQ0Ll9DskRPz/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61313"
  },
  "name": "Дроздова Єлизавета, 9 років ",
  "composition": "1)Й.С.Бах.Менует. 2)Г.Классен. Полька",
  "videoUrl": "https://drive.google.com/file/d/1r5_18pR7BLxDSDEnMD7rHNGjR9ziEiGn/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61314"
  },
  "name": "Збір Марія, 8 років",
  "composition": "1)О.Гедіке. Сонатина до мажор,    І ч., 2)Р.Шуман.''Перша втрата''",
  "videoUrl": "https://drive.google.com/file/d/1_7qn3fTutdKGcGdbgv13rKokJ8jxgk3a/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61315"
  },
  "name": "Іваньків Олександра, 9 років",
  "composition": "1)А.Діабеллі. Скерцо,  2)О.Гедіке. ''Маленька п'єса''",
  "videoUrl": "https://drive.google.com/file/d/1vYeVkRaV1mb33uJ1DGMr20qoikFCr9Ay/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61316"
  },
  "name": "Іванюк Маріам, 8 років",
  "composition": "С.Майкапар. ''Маленька прелюдія'' соль мінор",
  "videoUrl": "https://drive.google.com/file/d/1rRlLMJjoWwTVup7_vVMD4D3nl2Y-lspO/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61317"
  },
  "name": "Іванюк Маріам, 8 років",
  "composition": " В.Кирейко. ''Стриб-скок''",
  "videoUrl": "https://drive.google.com/file/d/1ImpPq9ncbMh5T1ScAHfDmz57BDlLZCF2/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61318"
  },
  "name": "Ісупова Алісія, 8 років ",
  "composition": "1)К.Рейнеке. ''Гавот'', 2)Й.С.Бах. ''Маленька прелюдія'' до мінор",
  "videoUrl": "https://drive.google.com/file/d/10g9CCJoXRzeG8CiFhgnEBzTQBLIWDanA/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61319"
  },
  "name": "Коваленко Варвара, 8 років",
  "composition": "1)О.Геталова.''Ранок в лісі'',  2)В.Подвала. ''Капризуля''",
  "videoUrl": "https://drive.google.com/file/d/1S38_oECOBo7KGDV1azJUx3zOYwgQEQIV/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131a"
  },
  "name": "Коренівська Дар'я, 9 років ",
  "composition": "1)Р.Вандал.''Водограй'',         2)П.Захаров.''Знайомий силует''",
  "videoUrl": "https://drive.google.com/file/d/19CAzPCaWrAN_SWzaJFdEpxPIOQw-rfLU/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131b"
  },
  "name": "Костенко Ярослава, 7 років",
  "composition": " В.Косенко. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1CddYcoygTctoabGQF7pT2poRvCupVG_c/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131c"
  },
  "name": "Костенко Ярослава, 7 років ",
  "composition": "Й.Йєнсен.''Чарівний танок''",
  "videoUrl": "https://drive.google.com/file/d/1uB29bTPEiYdugJfLOZl4SQGrFY9nQpr-/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131d"
  },
  "name": "Латковська Єлизавета, 9 років",
  "composition": "1)В.Косенко. Вальс,    2)О.Гречанінов.''Мій коник''",
  "videoUrl": "https://drive.google.com/file/d/16YAw-q7f8F9JBPmfn8tEkpJT81J7EahA/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131e"
  },
  "name": "Лішман Дарина, 9 років",
  "composition": "1)В.Подвала.''Марш-гротеск'',          2)С.Майкапар. ''Колискова''",
  "videoUrl": "https://drive.google.com/file/d/1NsWz3TR0SKiTtcNCAJe059bhhFomt_NE/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131f"
  },
  "name": "Магола Софія, 8 років ",
  "composition": "1)Я.Бобалік.''Святкова полька''; 2)І.Беркович. Сонатина соль мажор",
  "videoUrl": "https://drive.google.com/file/d/1guAxs5g_wbGv_twqiypo0e8FHOwum-Ih/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61320"
  },
  "name": "Мазуренко Майя, 8 років",
  "composition": "1)М. Бобер. ''Агент Х'',          2)І.Іордан. ''Полювання на метелика''",
  "videoUrl": "https://drive.google.com/file/d/1Ie1WCQpgPuLYdKNxVGuLkeIVnYJNZJ9T/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61321"
  },
  "name": "Марченко Єлизавета, 9 років",
  "composition": "1)Й.С.Бах.''Маленька прелюдія'' до мінор, 2)П.Чайковський.''Баба Яга''",
  "videoUrl": "https://drive.google.com/file/d/1ZJo4GULZ9sfcUuApF5jyoHIUV_IKAVrg/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61322"
  },
  "name": "Марчук Максим, 8 років",
  "composition": " Ф. Шпіндлер. Сонатина, тв.157 №4",
  "videoUrl": "https://drive.google.com/file/d/1sC7MUjcknrnZZZ5hfMCXbSvs36KA3ppV/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61323"
  },
  "name": "Марчук Максим, 8 років ",
  "composition": "В. Гіллок. ''Капрічієтто''",
  "videoUrl": "https://drive.google.com/file/d/1YdAihvAQkCT8bbyW44pQi2iZhmX1c3Kz/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61324"
  },
  "name": "Мотузкина Лідія, 9 років ",
  "composition": "О.Білаченко. ''Український танок''",
  "videoUrl": "https://drive.google.com/file/d/1bpO9dHAcbP8KlaWT_1nXXQiZebuD8F0p/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61325"
  },
  "name": "Мотузкина Лідія, 9 років",
  "composition": " В.Моцарт. ''Менует''",
  "videoUrl": "https://drive.google.com/file/d/1C_mxAU65VvvvfiPoRQscKR0oUDWpHDQt/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61326"
  },
  "name": "Новосільська Катерина, 7 років ",
  "composition": "1)М.Клементі. Сонатина тв.36, І-ІІІч., 2)І.Беркович. Прелюдія",
  "videoUrl": "https://drive.google.com/file/d/1Y72CFLOMPibwTUPgWOmsQH3YJPviBjDa/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61327"
  },
  "name": "Ольховська Аніта, 9 років",
  "composition": " І.Павлік. ''Сніжинки''",
  "videoUrl": "https://drive.google.com/file/d/1rs-VgFMnIYZVm9kOjNh6FTl_P0CADRB1/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61328"
  },
  "name": "Ольховська Аніта, 9 років ",
  "composition": "Н. Карпенко. Етюд сі мінор",
  "videoUrl": "https://drive.google.com/file/d/1kS3BqQw4-msMoznO3Nz_iWc5ytlJOFTm/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61329"
  },
  "name": "Остапчук Каріна. 8 років",
  "composition": "1)В.Гіллок ''Дзвіночки'', 2)І.Хуторянський. ''Вогнівочка-стрибунівочка''",
  "videoUrl": "https://drive.google.com/file/d/16RAcN2O6kunKZAFrbgBHsENiZg9iKs4G/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132a"
  },
  "name": "Охрін Ярема, 8 років",
  "composition": "1) Д.Кабалевський. ''Новела'',      2)С.Майкапар.''Токатина''",
  "videoUrl": "https://drive.google.com/file/d/1zw1JK0J4d8Hk-znbv-5oDna-qL3cwREP/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132b"
  },
  "name": "Павленко Стефанія, 7 років ",
  "composition": "1)М.Любарський. ''Пісня'',2) Д.Кабалевський.''Клоуни''",
  "videoUrl": "https://drive.google.com/file/d/1ImnwJj2Deqz-TJfvXACCrZpiZNT3BnKH/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132c"
  },
  "name": "Панькова Анна, 8 років ",
  "composition": "1)Й.С.Бах. ''Маленька прелюдія'' до мінор,        2)Л.Шукайло. ''Інтермецо''",
  "videoUrl": "https://drive.google.com/file/d/1yrAHr6i17NShP5qaImPnWx-xJQjCMMy2/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132d"
  },
  "name": "Парфьонов Дмитро, 9 років",
  "composition": "1)Н.Владикіна-Бачинська.''Щось сумне'', 2)О.Гедіке. ''Танець''",
  "videoUrl": "https://drive.google.com/file/d/1NDdw57RsrmLrE_yWSG0uFJXEjWcGqGmR/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132e"
  },
  "name": "Погорєлов Артем, 9 років",
  "composition": "1)Й.С.Бах. ''Менует'', 2)Н.Нижанківський. ''Коломийка''",
  "videoUrl": "https://drive.google.com/file/d/1ne86iM-NUs6NcioBsvUjfQa6Mn7cSAR7/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132f"
  },
  "name": "Пузанова Марія, 9 років",
  "composition": "1)У. Гіллок. ''Королівський менует'', 2)І.Іордан. «Полювання на метелика»",
  "videoUrl": "https://drive.google.com/file/d/1OGS_fqzJvbB7aNPrexwqDK5x0ls-20CC/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61330"
  },
  "name": "Резнік Тетяна, 9 років",
  "composition": "1)Н.Торопова. Варіації,     2)Д.Кабалевський. ''Маленький жонглер''",
  "videoUrl": "https://drive.google.com/file/d/1xGxNTTtWrhdOu6Y7GueUAgGXvjoLlMBl/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61331"
  },
  "name": "Рибак Анастасія, 8 років",
  "composition": "1).Мелартін.''Ранок'', 2)М.Майєр.''Незвичайна пригода''",
  "videoUrl": "https://drive.google.com/file/d/1uzmVqFVnnQaIGX7o3H-7tNe0kp1ZiUvP/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61332"
  },
  "name": "Ріпний Богдан, 8 років",
  "composition": " 1)І. Беркович. Варіації,     2)Д. Роулі.''В країні гномів''",
  "videoUrl": "https://drive.google.com/file/d/1Qlr1_-pFAlLIixKkhx2-ZxxEYZhAZ9Z7/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61333"
  },
  "name": "Романченко Елисей, 8 років",
  "composition": " 1)Ш.Гуно.''Марш маріонеток'',   2) О.Гречанінов.''Незвичайна пригода''",
  "videoUrl": "https://drive.google.com/file/d/1iI-zjq4QimDL9TLE5BRYurmuAL16fScU/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61334"
  },
  "name": "Сайчук Ярослава, 9 років ",
  "composition": "Т. Максимов.''Баба Яга''",
  "videoUrl": "https://drive.google.com/file/d/1X5C7kfNd3QloZl0TAvN_AQh0-qXtpSSB/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61335"
  },
  "name": "Сайчук Ярослава, 9 років",
  "composition": " К.Роллін. '' Шоколадне печиво''",
  "videoUrl": "https://drive.google.com/file/d/16vYm_EdDx_-3BRHJMyD35k3oC4F2tV56/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61336"
  },
  "name": "Сітшаєва Зарема, 9 років",
  "composition": "1) Л.Бетховен. Сонатина до мажор; 2)К.Слонімський. ''Дюймовочка''",
  "videoUrl": "https://drive.google.com/file/d/1H6edQtsRp0_wcuOYRAEh1lffRz0TXtib/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61337"
  },
  "name": "Смірнова Євгенія, 9 років",
  "composition": "1)В.Квасневський.''Думка'', 2)Д.Александер. ''Зимова рапсодія''",
  "videoUrl": "https://drive.google.com/file/d/16LW9EesPPs1STi6kQpQxdEJzk3PgnHYj/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61338"
  },
  "name": "Стрийська Амелія, 8 років",
  "composition": " 1)В.Косенко.''Дощик'';      2)О.Білаченко. ''Експромт''",
  "videoUrl": "https://drive.google.com/file/d/10h9ONRG2T42vxAlWy4ASP0qga8IU02rv/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61339"
  },
  "name": "Студзинська Єлизавета, 7 років",
  "composition": "1) Л. Моцарт. ''Менует'',    2)У. Гіллок. ''Осінній ескіз''",
  "videoUrl": "https://drive.google.com/file/d/1VdsObub9Z0E7ZM1QYMsfqkaljnnLQ2je/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133a"
  },
  "name": "Сухан Діана, 8 років ",
  "composition": "1)Л.Шукайло.Варіації на тему В.Шаїнського; 2)Р.Фучс.''Маленьке розбите серце''",
  "videoUrl": "https://drive.google.com/file/d/1Gu5ucoCGFhyEnMh3-IDUJ-uF0Tuj37UZ/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133b"
  },
  "name": "Терп'як Аарон, 9 років",
  "composition": "1) І.Беркович. Варіації на українську тему; 2)Т.Остен. ''Маленький ельф''",
  "videoUrl": "https://drive.google.com/file/d/1ZtQbNBBgGmOzMWnnHAF-7_CBsXk3Lw-2/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133c"
  },
  "name": "Тимченко Надія, 8 років ",
  "composition": "1)А.Штогаренко. ''Метелик'', 2)В.Гіллок. ''Місячне сяйво''",
  "videoUrl": "https://drive.google.com/file/d/1PS9AGHyEDqstjqA1MiEbTkp5j1UuShrG/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133d"
  },
  "name": "Тіщенко Вероніка, 7 років",
  "composition": "1)Й.С.Бах. ''Маленька прелюдія'' до мінор, 2)Л. Шукайло. Варіації",
  "videoUrl": "https://drive.google.com/file/d/1Ftrj9k5jhDxVi5ufhXY3THkwOK8Y12Hm/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133e"
  },
  "name": "Тодорова Даяна, 6 років",
  "composition": "1)В.Барвінський. ''Зайчик'',          2)М.Любарський. ''Плясова''",
  "videoUrl": "https://drive.google.com/file/d/1PAzIBtjG0NfqazUI25HsRrFVXjLyz2Bi/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133f"
  },
  "name": "Тонієвич Ксенія, 9 років",
  "composition": "1)О.Спіліоті.''Гуцулята'',   2)В.Гіллок.''У старому Відні''",
  "videoUrl": "https://drive.google.com/file/d/119w3wnHMp6XNWSKKr9VJIoYjVIP9MlAO/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61340"
  },
  "name": "Тютько Володимир, 9 років",
  "composition": "1)Ф.Кулау.Сонатина, тв.55 №3, 2)Р.Лісова.''Веселий настрій''",
  "videoUrl": "https://drive.google.com/file/d/1bg-HK7Lp3UwjGk3MITTdD9eQ7rFdhx1H/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61341"
  },
  "name": "Фесенко Анна, 8 років ",
  "composition": "1)А.Гедіке.Сонатина до мажор,  2)В.Гаврилін. ''Капріччіо''",
  "videoUrl": "https://drive.google.com/file/d/1Ejrq8ZEXBJq_ANfAiY-5jKH7Rs58fLuC/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61342"
  },
  "name": "Чорней Яна, 7 років ",
  "composition": "1)М. Екштейн. ''Каприз гномів'';  2)С.Юферов. ''Ноктюрн''",
  "videoUrl": "https://drive.google.com/file/d/1g6bB7aqWptw5lLnAiXklOFpQl4X0NLKj/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61343"
  },
  "name": "Шкурко Тимофій, 9 років ",
  "composition": "1)Ф.Шопен. ''Вальс'' ля мінор,     2)Л.Шукайло. ''Весела мозаїка''",
  "videoUrl": "https://drive.google.com/file/d/1eJJ44ZbgTrUTdH-tBPKGyc1K_0rryj4_/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61344"
  },
  "name": "Юрчук Яна, 7 років",
  "composition": " 1)М. Клементі. Сонатина, тв.36 №1, І ч.,2)П.Чайковський. ''Вранішня молитва''",
  "videoUrl": "https://drive.google.com/file/d/1oPUuH2qzaQULypvuy3M6Q-f7vvhZlAnx/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61345"
  },
  "name": "Аміхалакіоає Ємельян, 10 років",
  "composition": "1)О.Білаченко.''Осінній ескіз'', 2)М.Кармінський. ''Гумореска''",
  "videoUrl": " https://drive.google.com/file/d/1zfqkyG6BpZ3_1XXdf_FVYOWFmpakjWWP/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61346"
  },
  "name": "Антонюк Варвара, 12 років ",
  "composition": "І.Плейєль. Сонатина ре мажор",
  "videoUrl": " https://drive.google.com/file/d/1DJeHf3fAuZ55Pf65mMAtw2Pct96dfa-t/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61347"
  },
  "name": "Антонюк Варвара, 12 років ",
  "composition": "С.Майкапар.''В ковальні''",
  "videoUrl": " https://drive.google.com/file/d/1lXyKuwM_JgxYZl6eWkAseU6vNaWz7pYz/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61348"
  },
  "name": "Бабчанік Андрій, 10 років ",
  "composition": "1)Д.Чимароза. Сонатина соль мажор. 2)Ю.Білковський. ''Роздуми''",
  "videoUrl": " https://drive.google.com/file/d/1UHAsNKjcJiBgxAdILOsjDERJKQMzeq7A/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61349"
  },
  "name": "Балута Аліна, 10 років",
  "composition": " 1) Е.Гріг. ''Танець з Йольстера'', 2)Л.Забара.''Ніч яка місячна''",
  "videoUrl": " https://drive.google.com/file/d/1oXGF3m41K-QN8Y1-W_j85DrTjkk88sQX/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134a"
  },
  "name": "Басиста Олександра, 12 років",
  "composition": " 1)Ф.Шопен. Вальс, тв.64 №1, 2)С.Борткевич. Прелюдія, тв.6 №1",
  "videoUrl": " https://drive.google.com/file/d/1sPWZSPn4UMJVdfz73graDwdwIxyXgjBY/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134b"
  },
  "name": "Білінкевич Наталія, 12 років",
  "composition": "1) М.Лисенко. Елегія,2)К.Черні. Етюд №1 тв.740",
  "videoUrl": " https://drive.google.com/file/d/1AR_WW0CFSSCXzVAfrHXuwBAD-_QC8j6W/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134c"
  },
  "name": "Бульковська Марина, 10 років",
  "composition": " Д.Чімароза. Соната соль мажор",
  "videoUrl": " https://drive.google.com/file/d/1boxdtgAdhBIJdtcxdznZHP-q5faqa5QK/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134d"
  },
  "name": "Бульковська Марина, 10 років",
  "composition": "К.Габел. ''Дерево життя''",
  "videoUrl": " https://drive.google.com/file/d/1fXZ6NdsN6u78tI6erKEjX2ofesHB2ebh/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134e"
  },
  "name": "Вакуленко Аріна, 10 років ",
  "composition": "І.Беркович. Варіації на тему грузинської народної пісні ''Світлячок''",
  "videoUrl": " https://drive.google.com/file/d/1CdtXoVzjEl1YqVCdByxKsZdqEjft1hs6/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134f"
  },
  "name": "Вакуленко Аріна, 10 років ",
  "composition": "С.Джоплін.''Артист естради''",
  "videoUrl": " https://drive.google.com/file/d/1GntiYvLzHrUXIsWDfdHp40-tt5yYuigq/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61350"
  },
  "name": "Васильєва Вероніка, 12 років",
  "composition": "1)Р.Глієр. Прелюдія до мінор;2)С.Джербашян. ''Швидкий рух''",
  "videoUrl": " https://drive.google.com/file/d/1QBgtdhw2IQeTH6QEYnKLGBalX0K2upN4/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61351"
  },
  "name": "Войтенко Лілія, 10 років",
  "composition": "1) Л. Шукайло.''Поні'', 2)О.Рибалова. ''Непосида''",
  "videoUrl": " https://drive.google.com/file/d/1-L_kJHu1PpkPGRCJ_EfxFLBbmc8fOOwq/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61352"
  },
  "name": "Войченко Владислав, 11 років",
  "composition": " 1) Й.С.Бах.Двоголосна інвенція фа мажор; 2)Ф.Шопен. Ноктюрн до дієз мінор",
  "videoUrl": " https://drive.google.com/file/d/1wu5klXGG7Bh2fPlR3YbeMlSKZBT8PRnN/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61353"
  },
  "name": "Вощинський Ілля, 12 років",
  "composition": "1)Е.Гріг. Ноктюрн, 2)М.Римський-Корсаков. ''Політ джмеля''",
  "videoUrl": " https://drive.google.com/file/d/17lbS0L956aNZ9D0GTI-p-k39z4lpehC7/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61354"
  },
  "name": "Галечев Іван, 11 років",
  "composition": " 1)Обр. Г.Без'язичного. ''Ніч яка місячна'', 2)П.Чайковський. ''Неаполітанська пісенька''",
  "videoUrl": " https://drive.google.com/file/d/14-Z82vYkVF1x2NpnqK1_xhAf2bWuaPQV/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61355"
  },
  "name": "Гамзалієва Зейнаб, 12 років",
  "composition": "Білорус. нар.пісня ''Бульба'', обр.Д.Льва-Компанійця",
  "videoUrl": " https://drive.google.com/file/d/1dQqGFphOGo0VpGoUd4z4U3en9LTc19pk/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61356"
  },
  "name": "Гамзалієва Зейнаб, 12 років ",
  "composition": "Й.Гайдн. Менует",
  "videoUrl": " https://drive.google.com/file/d/1Ww_800JPvH69YtjONECJH8VtZ_eZkkyk/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61357"
  },
  "name": "Гіліна Олександра, 11 років",
  "composition": "1)В.МоцартАрія; 2)Д.Градескі.''Морозиво. Регтайм''",
  "videoUrl": " https://drive.google.com/file/d/1f3K50GVcw8ksdYgRMxV61adRAFH5PKMw/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61358"
  },
  "name": "Горай Ярослав,12 років",
  "composition": "1)М.Скорик ''Мелодія'',         2) П.Базала. ''Потік''",
  "videoUrl": " https://drive.google.com/file/d/1UCbn7xPvEbrHCpMThnCIj5Qtgn6rVS_f/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61359"
  },
  "name": "Гоцуленко Вікторія, 12 років",
  "composition": "1)Й.Бах. Двоголосна інвенція ля мінор, 2) Ф.Шопен. Ноктюрн №21",
  "videoUrl": " https://drive.google.com/file/d/171ICM_7Ghrao1RN6ug0XLoRNJKobaRGQ/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135a"
  },
  "name": "Гукасян Ліана, 10 років",
  "composition": "А.Хачатурян. \"Андантіно\"",
  "videoUrl": " https://drive.google.com/file/d/12IdAfSi_waU6lrNfUvP2H0x0WO78aMGa/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135aa"
  },
  "name": "Гукасян Ліана, 10 років",
  "composition": "Л.Хеллер. Сонатина",
  "videoUrl": " https://drive.google.com/file/d/1ktOVC3TR_AE4uRbG62OxNKVjoNJqiuPm/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135b"
  },
  "name": "Гуляєва Єва, 11років",
  "composition": "1)П. Захаров.''Елегія'', 2) Г.Валленгаупт. ''Скерцино''",
  "videoUrl": " https://drive.google.com/file/d/1rbcm7F_BfAeqMEzfQhZ6fF3Y21a7rYsw/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135c"
  },
  "name": "Гутник  Кірена, 10 років ",
  "composition": "Л.Шітте.''Танець  гномів''",
  "videoUrl": " https://drive.google.com/file/d/1niDqNiCJu3CLS3EG5BWHuB_Aq7v45Rs3/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135d"
  },
  "name": "Гутник Кірена, 10 років",
  "composition": " О.Соловяненко.''Поні біля цирку''",
  "videoUrl": " https://drive.google.com/file/d/1h7q0YaYiy6A6s6Bpw_TxtzrwwS_Az9Lx/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135e"
  },
  "name": "Дорошенко Юлія, 10 років",
  "composition": "1) М. Клементі. Сонатина, тв.36 №6, І ч; 2) І.Беркович. Прелюдія, тв.46 №15",
  "videoUrl": " https://drive.google.com/file/d/1GlFCLC3x_1tZCOfmNhN0m4T0POJYBTjN/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135f"
  },
  "name": "Дудін Дмитро, 11 років ",
  "composition": "1)Л.Бетховен. Сонатина соль мажор,І-ІІ ч.; 2)С.Прокоф'єв. ''Казочка''",
  "videoUrl": " https://drive.google.com/file/d/1xbm4x-VfzHzuzB4jThbsPh8IaCa94ttB/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61360"
  },
  "name": "Єрмоленко Дарина, 12 років ",
  "composition": "Й.С. Бах. Арія ре мажор",
  "videoUrl": " https://drive.google.com/file/d/1u7M6CXiysUfJuu6M-AvB774Wen0AnuZN/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61361"
  },
  "name": "Єрмоленко Дарина, 12 років",
  "composition": "О. Білаш. ''Баркарола''",
  "videoUrl": " https://drive.google.com/file/d/1hORf4uVvoW54pTCxgK2zImgxYxH47Yoo/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61362"
  },
  "name": "Загаєвська Софія, 12 років ",
  "composition": "1)А.Классен ''Музичний ескіз''№1, 2)О.Кимлик.''Леонтовіана''",
  "videoUrl": " https://drive.google.com/file/d/1w1TPh9JXsAje_KpE9QPp5Iv0EujmvjG-/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61363"
  },
  "name": "Іваннікова Марія, 11 років",
  "composition": "1)В.Моцарт. Соната №16, І частина,  2)О.Грибоєдов. Вальс",
  "videoUrl": " https://drive.google.com/file/d/1X1vhsTIPkI5zis22JHOXxQUDdOBe9A9G/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61364"
  },
  "name": "Іванюк Вірсавія,10 років",
  "composition": "1)О.Ходош.''Червона шапочка'', 2)І.Щербаков.''Елегія київських пагорбів''",
  "videoUrl": " https://drive.google.com/file/d/1M7I1QJbFkWBQHwK1lHKoyoE30l-Wc12m/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61365"
  },
  "name": "Ївженко Ада, 12 років",
  "composition": "1)М.Клементі.Сонатина соль мажор, 2)М.Скорик. ''Народний танець''",
  "videoUrl": " https://drive.google.com/file/d/1kpm6k0MCtujg7sPH9dcodY0kz1BrGEX9/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61366"
  },
  "name": "Каманчи Єлизавета, 12 років",
  "composition": "1)В.Калістратов.''Коник Горбоконик'', 2)Ю.Весняк. ''Ніжність''",
  "videoUrl": " https://drive.google.com/file/d/1mlWaLYsD8fkBQHgdrX-RfNCkd6wRrPkO/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61367"
  },
  "name": "Карашкевич Христина, 11 років ",
  "composition": "1)Й.С.Бах. Триголосна інвенція ре мінор, 2)М.Дремлюга. ''Скерцо''",
  "videoUrl": " https://drive.google.com/file/d/1EBGhNIptJSei0GZLKpsfyaIhi3Uae0cH/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61368"
  },
  "name": "Кіцера Аліна, 11 років",
  "composition": "1)К.Дебюссі ''Романтичний вальс'', 2)Б.Фільц. ''Скерцо''",
  "videoUrl": " https://drive.google.com/file/d/1Novsog_w52pzGkfJ2hZxihv33C2cSf0J/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61369"
  },
  "name": "Король Єлізавета, 10 років ",
  "composition": "1) П.Чайковський.''Пісня жайворонка''; 2)Л.Шукайло. Прелюдія",
  "videoUrl": " https://drive.google.com/file/d/1kbrGl8_IhfqnjkvTvoWh79mgm9pQ5kTJ/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136a"
  },
  "name": "Котляревська Юлія, 11 років",
  "composition": " Й. Гайдн. Соната соль мажор, Іч.",
  "videoUrl": " https://drive.google.com/file/d/1FAWHHKQ5ox0ETJLvurrRgZ2dOm1vtFke/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136b"
  },
  "name": "Котляревська Юлія, 11 років ",
  "composition": "'Гандзя'', обр.Є Веврика",
  "videoUrl": " https://drive.google.com/file/d/1kIvdsvIrxeo816d-_MV5nbbcr-aOZhEp/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136c"
  },
  "name": "Котова Марія, 10 років ",
  "composition": "1)О.Ключарьов.''Шуралє'', 2)Ф.Мендельсон.''Пісня без слів'', тв.19 №2",
  "videoUrl": " https://drive.google.com/file/d/1Y1cW_2ZiwBEN0Yc1KrWWncX376zgaD5B/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136d"
  },
  "name": "Кривобабко Ксенія, 10 років",
  "composition": " Л.Шукайло. ''Весняні  краплинки''",
  "videoUrl": " https://drive.google.com/file/d/1dIJgkLIO2e7lcNpuARjxmudw03xjnc32/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136e"
  },
  "name": "Кривобабко Ксенія, 10 років ",
  "composition": "Н.Карпенко. Етюд  ре мінор",
  "videoUrl": " https://drive.google.com/file/d/1B4-EbRYO-bcCjfuppeHXShv5DQzui9hA/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136f"
  },
  "name": "Кутковська Лариса, 12 років",
  "composition": " 1)Е.Гріг. ''Ноктюрн'', тв.54 №4, 2)Т.Кулієв. ''Лезгінка''",
  "videoUrl": " https://drive.google.com/file/d/11cmQBdsm2epwZS_mUJx3gp1W582ZyWd7/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61370"
  },
  "name": "Лiзогуб Арсен, 10 років",
  "composition": "1)Г.Сасько.''Регтайм'', 2)П.Захаров.''Старовинна балада''",
  "videoUrl": " https://drive.google.com/file/d/11SFkWFvWn_UGNJK7c7Z1LlJ2NasM9Ksg/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61371"
  },
  "name": "Ланський Євген, 10 років ",
  "composition": "1)П.Чайковський.''Ранкова молитва'', тв.39, 2)І.Беркович. Токата ля мінор",
  "videoUrl": " https://drive.google.com/file/d/1VnPFLs5xHCt0TL2sd1E9WWyhTB8kGTuh/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61372"
  },
  "name": "Левандівська Марта, 10 років ",
  "composition": "В.Барвінський. ''Український танець''",
  "videoUrl": " https://drive.google.com/file/d/1FVjxAeB3dOzJpATDXyI-1ABtRizjzjod/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61373"
  },
  "name": "Левандівська Марта, 10 років",
  "composition": " Я. Сібеліус. Етюд тв. 76 №2",
  "videoUrl": " https://drive.google.com/file/d/18K7rgRzjCqZ-_5EWr0EoE5JlnTyhgZS4/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61374"
  },
  "name": "Леза Анна, 11 років ",
  "composition": "1) Ф.Шопен. Ноктюрн №20, 2)П.Захаров. ''Рондо-галоп''",
  "videoUrl": " https://drive.google.com/file/d/1Twf2sJ3_9Ar3oOTmZWKv6q8SMa9fGa-p/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61375"
  },
  "name": "Ликова Варвара, 11 років",
  "composition": "1) В.Гіллок.''Bill bailey'', 2)Ю.Щуровський. ''Шарманка''",
  "videoUrl": " https://drive.google.com/file/d/1dE5LcfV-T8QhLXiAfn8sxLEMecvgS-hO/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61376"
  },
  "name": "Лілік Марія-Магдалина, 11 років ",
  "composition": "1)Ф.Шопен. ''Аркуш з альбома'' мі бемоль мажор, 2)М.Колесса. ''Скерцино''",
  "videoUrl": " https://drive.google.com/file/d/1qticduAQQm72Ncy8e-st6nkjqwBrFSTe/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61377"
  },
  "name": "Макаревич Андрій-Олександр, 11 років ",
  "composition": "1)Й.С.Бах. Триголосна інвенція ре мажор, 2)К.Черні. Етюд №5, тв.299",
  "videoUrl": " https://drive.google.com/file/d/1iVuBPfw4HncPJkJn2yNZZw8UXlUXJHVc/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61378"
  },
  "name": "Маціборська Анна, 10 років",
  "composition": "1) Й. Бах. Двоголосна інвенція сі бемоль мажор,    2) Ф. Якименко. ''Елегія''",
  "videoUrl": " https://drive.google.com/file/d/1SrYttJFdizsuBe0yNsKrNDgJUP_AihaN/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61379"
  },
  "name": "Мельник Михайло, 10 років",
  "composition": "1)М.Клементі. сонатина до мажор, 2)В.Косенко. ''Дощик''",
  "videoUrl": " https://drive.google.com/file/d/1c0pWjGogDaEYCRCskzcq9VdUlHy-hshG/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137a"
  },
  "name": "Меркулова Марія, 10 років ",
  "composition": "1) Д.Чімароза.Соната соль мажор; 2) М. Жербін. Вальс",
  "videoUrl": " https://drive.google.com/file/d/1j5pED7wQ3AHP0pNx9VO4Pp8dril9aMzf/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137b"
  },
  "name": "Мигалюк Ріанна, 11 років",
  "composition": "1)Н.Нижанківський. ''Коломийка'',   2)В.Гіллок.''Карнавал в Ріо''",
  "videoUrl": " https://drive.google.com/file/d/1p5SMOeBaUz0jzX8A0l6X4N9yvtwG0w8m/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137c"
  },
  "name": "Миргород Всеволод,12 років",
  "composition": "1)Ф.Кулау. Сонатина фа мажор,І ч.; 2)М.Лисенко. ''Елегія''",
  "videoUrl": " https://drive.google.com/file/d/1kpxsuRJnl3t64lbO8viVgfGsw_aMkRSm/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137d"
  },
  "name": "Морозова Тетяна, 11 років ",
  "composition": "Й.Бенда.Сонатина",
  "videoUrl": " https://drive.google.com/file/d/15u4oK4uIv923BbhwHuQxc2kb2zW4DImG/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137dd"
  },
  "name": "Морозова Тетяна, 11 років ",
  "composition": "С.Шевченко \"Вечір\"",
  "videoUrl": " https://drive.google.com/file/d/1Fy-L04EAfcq7I1bRpx5pE8lydIByT3SF/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137e"
  },
  "name": "Мунтян Наталія, 10 років ",
  "composition": "1)Ю.Щуровський. Тема з варіаціями,       2)Л.Шитте.''Іскри''",
  "videoUrl": " https://drive.google.com/file/d/1VjNHcWWgtmbakUXmpc3h7fhoN5gps9RV/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137f"
  },
  "name": "Оборкіна Олександра, 11 років",
  "composition": "1)Е.Гріг.''Мелодія'',    2)Л.Шукайло. ''Багатель'' №5",
  "videoUrl": " https://drive.google.com/file/d/1ch2wvzxtR7ER2-6iDLUgvCAquUiv8dVf/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61380"
  },
  "name": "Пендюр Софія, 11 років",
  "composition": "1) О.Даргомижський.''Вальс'', 2)М.Скорик.''Народний танець''",
  "videoUrl": " https://drive.google.com/file/d/1sDG6wngpKHcMSOaOi_YlUGkucadBApBJ/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61381"
  },
  "name": "Перетятько Анастасія, 10 років ",
  "composition": "Е.Гріг. ''Танець із Йольстера''",
  "videoUrl": " https://drive.google.com/file/d/10_Lgv-fLOd3yPAmNmWCd8YN3lSwXHLKG/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61382"
  },
  "name": "Перетятько Анастасія, 10 років",
  "composition": "М.Клементі. Сонатина №4, тв.36",
  "videoUrl": " https://drive.google.com/file/d/13wsI-ssTPx9ea0qZHFYsvsP2nuPbSDJ7/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61383"
  },
  "name": "Позняк Веніамін, 10 років",
  "composition": "1) Д.Пуленк. Стаккато. 2) Л.Бетховен. Весела-сумна",
  "videoUrl": " https://drive.google.com/file/d/1vsbc2GvHYArggP57-Z5wFlGwchMpNp3E/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61384"
  },
  "name": "Прокопюк Марина, 10 років",
  "composition": " 1)І.Білаченко. Експромт. 2)Ю.Щуровський. Танець",
  "videoUrl": " https://drive.google.com/file/d/1Qn9DQL2NHJeOfGHDHYwauZ62vinrflAy/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61385"
  },
  "name": "Решетнікова Людмила, 11 років",
  "composition": " 1)О.Білаченко.''Осінній ескіз'', 2)О.Польовий.''Полька-бабка''",
  "videoUrl": " https://drive.google.com/file/d/1_XfCK8FK1FLmxbkEB8VTdfa990qJ7xRA/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61386"
  },
  "name": "Ротар Каріна, 10 років ",
  "composition": "1) Ю.Щуровський. ''Баркарола'', 2) Д.Пешетті. ''Престо''",
  "videoUrl": " https://drive.google.com/file/d/17MF-0z6uAkmKWlpYySWGH8sbOiZ--n9J/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61387"
  },
  "name": "Савченко Матвій, 11років ",
  "composition": "1)Л.Бетховен. Соната мі бемоль мажор, І ч., 2)І.Щербаков. '' Елегія київських пагорбів''",
  "videoUrl": " https://drive.google.com/file/d/1J_HQk6IS2PZPZUP9uYOP6wkQtR3opo6B/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61388"
  },
  "name": "Саква Валерія, 11 років ",
  "composition": "1)М.Лансевич.''Прелюдія'', 2)М.Дворжак. ''Джазовий етюд'' ля мажор",
  "videoUrl": " https://drive.google.com/file/d/11tsdLvk25bD8FSDYTXXnypR29gkPtxXs/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61389"
  },
  "name": "Сартанія Давид, 10 років",
  "composition": " 1)Е.Вагнер.Сонатина до мажор,   2) Р.Вандалл.''Водоспад''",
  "videoUrl": " https://drive.google.com/file/d/1mrESYZIiP1iWenGiZDUIOb0usCJK0dT8/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138a"
  },
  "name": "Скороходько Євгенія, 10 років ",
  "composition": "1)Н.Нижанківський. ''Івась грає на чельо'', 2)Ю.Щуровський. ''Токата'' сі мінор",
  "videoUrl": " https://drive.google.com/file/d/1Eif0Z_MiAQVpzbczVSjjbvh1gUxe_E3X/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138b"
  },
  "name": "Солоненко Анна, 10 років ",
  "composition": "В.Косенко. ''Петрушка''",
  "videoUrl": " https://drive.google.com/file/d/1tCxp4UbZFZeFMrw6DYNi9VYHYSvYwNQI/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138c"
  },
  "name": "Солоненко Анна, 10 років",
  "composition": " Ф. Бургмюллер. ''Балада''",
  "videoUrl": " https://drive.google.com/file/d/1EOH6zhwow4aQZfJes28LxiIBsh5HbfGu/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138d"
  },
  "name": "Сорока Марія, 13 років",
  "composition": "1)Д.Циполі. Прелюдія та фуга ре мінор, 2)К.Гурліт. ''Шторм''",
  "videoUrl": " https://drive.google.com/file/d/1tfp_gBRZ1flj-LGqde6EdxQmKTlep0jP/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138e"
  },
  "name": "Стецюк Олександра, 12 років ",
  "composition": "1)К.Дебюссі. ''Doctor Gradus ad Parnasum'', 2)Ф.Шопен. ''Вальс'' №9",
  "videoUrl": " https://drive.google.com/file/d/1zxJWyCms7kZhspNBAlzacUnALW8EJAM7/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138f"
  },
  "name": "Сторожук Станіслав, 12 років",
  "composition": "1)Е.Гріг. ''Поетична картинка'' №1, 2)А.Кос-Анатольський. ''Полонина''",
  "videoUrl": " https://drive.google.com/file/d/1rtK0vUrAoIlGbUJ5HaUGbQPl1zVmTKKJ/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61390"
  },
  "name": "Ткаченко Майя, 12 років",
  "composition": "1)В. А. Моцарт. Соната 16 К 545,Іч.; 2)І.Шамо.'' Веснянка''",
  "videoUrl": " https://drive.google.com/file/d/1m6ZsVarNPrcfymO3BkumdKxLJyBTxx5-/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61391"
  },
  "name": "Унгурян Олександра, 12 років ",
  "composition": "1) О.Грибоєдов. Вальс,          2)М.Сільванський. ''Стрімкий потік''",
  "videoUrl": " https://drive.google.com/file/d/1v2LRVDhFJ2zXN_5wVxAch7X8l0WQ8rOg/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61392"
  },
  "name": "Федорченко Євгенія, 10 років",
  "composition": " Л.Бетховен. ''Багатель'', тв.119",
  "videoUrl": " https://drive.google.com/file/d/1ZPHGQDAyftoAW0aKOT2snfa8MjgalcZQ/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61393"
  },
  "name": "Федорченко Євгенія, 10 років",
  "composition": "О.Білаш.''Скерцо''",
  "videoUrl": " https://drive.google.com/file/d/1h1isGwveW1uiW3U2xeO2WWuFxvSSvQ-L/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61394"
  },
  "name": "Федотова Катерина, 12 років",
  "composition": " 1) С. Борткевич.''Етюд'' фа дієз мінор, 2) Ф.Шопен. ''Ноктюрн''до дієз мінор",
  "videoUrl": " https://drive.google.com/file/d/1eQBXy6khLci4fJNG8BaCM1ZFLkKj0NRw/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61395"
  },
  "name": "Федчук Аліна, 11 років",
  "composition": "1)А. Діабеллі. Сонатина №1, ІІІ.ч; 2)Дж. Ласт.'' Самотній пастух''",
  "videoUrl": " https://drive.google.com/file/d/1jrFbvdgG2NlU-b416-uR0birDrW-PnIH/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61396"
  },
  "name": "Федюк Володимир, 12 років",
  "composition": "1) К.М.Вебер.Сонатина до мажор; 2)О.Гончарук. ''Зелений'' із збірки ''Веселка''",
  "videoUrl": " https://drive.google.com/file/d/1H_Iw89xjf1o27PtP_neQI78ByP65yEvY/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61397"
  },
  "name": "Хоу Жуй, 12 років",
  "composition": "1)П.І.Чайковський. ''Жовтень'', 2)Е.Веврик. ''Гандзя''",
  "videoUrl": " https://drive.google.com/file/d/1XZwWXt6hQASuYftSNr5sTPErstFUV58R/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61398"
  },
  "name": "Чиж Ніна, 10 років ",
  "composition": "1)Й.Гайдн Соната №4, Іч; 2)Л.Дьяконенко. ''Пробачення у мами''",
  "videoUrl": " https://drive.google.com/file/d/1aIUr0h-N5290B6KaImXkJHmSDik_Uawe/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61399"
  },
  "name": "Чідера Самуель Умех, 10 років",
  "composition": "1)  П.Чайковський. ''Старовинна французька пісенька''. 2) Д.Кабалевський.''Клоуни''",
  "videoUrl": " https://drive.google.com/file/d/1pLYAmRBXwzIn1x3XHhvLre_ANZJT2p8w/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6139a"
  },
  "name": "Шаталова Ілона, 10 років",
  "composition": "1)Ф. Гіллер. ''Маленьке рондо''; 2)В. Косенко. ''Вальс'' сі мінор",
  "videoUrl": " https://drive.google.com/file/d/1Ug56cbY1CUBhO1-tZfucRAuAHbIFKz9c/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6139b"
  },
  "name": "Шевченко Маргарита, 10 років ",
  "composition": "1)С.Баландін. Варіації,          2)Т.Браун. ''Танець вітру''",
  "videoUrl": " https://drive.google.com/file/d/1pkBBqfS-pmFxb5nNdAch9WXUpGqsUxa8/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6139c"
  },
  "name": "Шепетько Олександр, 11 років ",
  "composition": "1) Ф.Шопен. Мазурка,тв.67 № 4, 2)Е.Гріг. ''Танець із Йольстера''",
  "videoUrl": " https://drive.google.com/file/d/1VbhVjWrUitTo--83I5FWNydQrPC3YGyR/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6139d"
  },
  "name": "Шумська Надія, 12 років",
  "composition": "1)С.Борткевич.''Темна кімната'', 2)В.Неугасімов.Скерцо",
  "videoUrl": " https://drive.google.com/file/d/1k66-Wry63S8x7t48GWUjY0e6O1xqeUot/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b6139e"
  },
  "name": "Арутюнян Ліда, 14 років",
  "composition": " 1)Й.Гайдн. Соната №20, Іч.; 2)Л.Шукайло.''Ємеля''",
  "videoUrl": " https://drive.google.com/file/d/1Bj568cnRdDZMKrMYfLT8kCbHm4yfXb2k/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b6139f"
  },
  "name": "Базилюк Наталія, 16 років",
  "composition": " 1)Я.Сібеліус. Прелюдія ля мінор,2)І.Беркович. Прелюдія фа дієз мінор",
  "videoUrl": " https://drive.google.com/file/d/1GaWeZbKc6SiIudiYQVBgFxaiOO9SEskA/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a0"
  },
  "name": "Білогуб Антон, 13 років ",
  "composition": "Л.Бетховен. Легка соната фа мінор, І ч.",
  "videoUrl": " https://drive.google.com/file/d/1fHUmtMWOjGN9p5xaSrcIOvQEu-koTGaT/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a1"
  },
  "name": "Білогуб Антон, 13 років",
  "composition": " О.Строк. ''Місячна рапсодія''",
  "videoUrl": " https://drive.google.com/file/d/1fqnNOFvNnVUcI1LUZ-TqgFzCl5XFE_si/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a2"
  },
  "name": "Бірук Таміла, 14 років",
  "composition": "1)М.Клементі.Сонатина, тв.26№3, 2)Я.Сібеліус. ''Ялина''",
  "videoUrl": " https://drive.google.com/file/d/14_B26LPyzQjk_aBZxGFWIq8Rz6KRCBnX/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a3"
  },
  "name": "Боровікова Єлизавета, 15 років",
  "composition": " 1)М.Бобер. ''Діамантова рапсодія'', 2)Ф.Сай. ''Чорна земля''",
  "videoUrl": " https://drive.google.com/file/d/1pO1FGqB-K6tth8pPRMBCal_rsceSMx20/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a4"
  },
  "name": "Бурухіна Катерина, 13 років",
  "composition": "1) Й.Гайдн. Соната мі мінор, Іч., 2) С.Нікітін.''Наспів''",
  "videoUrl": " https://drive.google.com/file/d/1rpLH63SzNTHeMyXHk7rCheswScKu9_cH/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a5"
  },
  "name": "Вашуріна В., 13 років ",
  "composition": "1) В.Косенко. ''Поема-Легенда'', 2) О.Саратський.''Коломийка''",
  "videoUrl": " https://drive.google.com/file/d/1y9kusgtqXgIgfFc16l_5qvgF_Jy62vX7/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a6"
  },
  "name": "Вишневська Анна, 13 років ",
  "composition": "Ж. Бізе.''Дзига''",
  "videoUrl": " https://drive.google.com/file/d/1YN-2yp1ocRVE1RdXq2L7sj9q_A8yv5PO/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a7"
  },
  "name": "Вишневська Анна, 13 років",
  "composition": "К. Лавалле. ''Метелик''",
  "videoUrl": " https://drive.google.com/file/d/161tFqTFJoja2OVDvHKTtIWPjNQ-2Lfx1/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a8"
  },
  "name": "Герасимчук Мілєна, 15 років ",
  "composition": "М.Таравердієв. ''Спогад''",
  "videoUrl": " https://drive.google.com/file/d/1Ao0wOx50UcKLaX8gpE3W9t65DC6KphrM/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a9"
  },
  "name": "Герасимчук Мілєна, 15 років",
  "composition": " О.Білаш.''Танець ляльок''",
  "videoUrl": " https://drive.google.com/file/d/1xnbfjBmzclN4-tl6t9EGDm3yjLGjwpR5/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613aa"
  },
  "name": "Гордієнко Єлизавета, 19 років",
  "composition": "1)Й.С.Бах.Прелюдія і фуга ре мінор, ДТК-І, 2)С.Борткевич. Прелюдія до дієз мінор",
  "videoUrl": " https://drive.google.com/file/d/1oxBe6N3altFp3UktF5FdGYFrdXyHDHWf/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ab"
  },
  "name": "Грещак Марія, 14 років",
  "composition": "1)К.Черні. Етюд ля мажор; 2)Ю.Щуровський.''Елегічний прелюд''",
  "videoUrl": " https://drive.google.com/file/d/1IwuLrdPakxH1f6ZPfmw7d7vGchKjoU6m/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ac"
  },
  "name": "Дейнега Каріна, 14 років",
  "composition": "1) Л.Бетховен. Соната №14, І ч.; 2) С.Жданов. ''Прелюд''",
  "videoUrl": " https://drive.google.com/file/d/1c5iWC9b5J3Tw3OWTDKSwM95CFTFBly4t/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ad"
  },
  "name": "Дячук Зоряна, 13 років ",
  "composition": "1)Ю.Щуровський. ''Ранок'', 2)Н.Нижанківський. ''Коломийка''",
  "videoUrl": " https://drive.google.com/file/d/1SsVrIFRfitLvzM37-UWnfGNcsj07Ou_2/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ae"
  },
  "name": "Іщук Катерина, 15 років",
  "composition": " К.Черні. Етюд №1,тв.740",
  "videoUrl": " https://drive.google.com/file/d/1nscqS5e1pUwtdIOSOIeXAVHRGjFu_3Mn/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613af"
  },
  "name": "Іщук Катерина, 15 років",
  "composition": "Ф.Шопен.''Ларго''",
  "videoUrl": " https://drive.google.com/file/d/1EoKeSr7BIeLw0KsjCtp1DEDJ_8Xggxnq/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b0"
  },
  "name": "Іваночко Антоніна, 13 років.",
  "composition": " 1)Й.С.Бах. Прелюдія і фуга до дієз мінор ДТК-І, 2) К.Черні. Етюд №6 тв.740",
  "videoUrl": " https://drive.google.com/file/d/1uTqORJIxI65uKq4-2RqOXnVuXjoQPKkS/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b1"
  },
  "name": "Кареліна Крістіна, 13 років",
  "composition": "Й.С. Бах.Прелюдія і фуга ре мінор, ДТК-ІІ",
  "videoUrl": " https://drive.google.com/file/d/1FmhW2Ol9tl-fV7ROatz3mEnb1C0VwAbx/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b2"
  },
  "name": "Кареліна Крістіна, 13 років",
  "composition": " В.А. Моцарт. Соната №8, Іч.",
  "videoUrl": " https://drive.google.com/file/d/1jFt0zknGa8vvXxDRKQo5x1Ydzcr-IxHR/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b3"
  },
  "name": "Каськів Андрій, 14 років ",
  "composition": "А.Лешгорн. Етюд фа дієз мінор",
  "videoUrl": " https://drive.google.com/file/d/14uKZUG7l1REwDkXkvR6fYBjQiTPZC3ko/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b4"
  },
  "name": "Каськів Андрій, 14 років",
  "composition": " К.Дебюссі. ''Місячне сяйво''",
  "videoUrl": " https://drive.google.com/file/d/1SPNLI8VvFhKzpRwN9-iBRuTddPfJuUe-/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b5"
  },
  "name": "Кирилова Олександра, 13 років ",
  "composition": "1) Т.Браун. ''Шторм, що наближається'', 2) П.Захаров. ''Рондо-галоп''",
  "videoUrl": " https://drive.google.com/file/d/1WHj--haYnE7pWtfHBoypXnhm7i0insvG/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b6"
  },
  "name": "Кондратюк Аліна, 14 років",
  "composition": "1) О.Дюбюк. Варіації, 2) О.Білаш.''Роздум''",
  "videoUrl": " https://drive.google.com/file/d/1RwfSQtTfwWpLDzYyGfmFyOKdy_SrK7SZ/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b7"
  },
  "name": "Косенко Аліса, 13 років",
  "composition": "1) А.Караманов. ''Зруйнований храм'', 2)С.Рахманінов. Прелюдія №7, тв.23",
  "videoUrl": " https://drive.google.com/file/d/1-6kYrtQuHZNk5ChAaWLv7IRZzk22Wddh/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b8"
  },
  "name": "Кочубей Ярослав, 14 років",
  "composition": "Обр. Є.Веврика.''Молдавські наспіви''",
  "videoUrl": " https://drive.google.com/file/d/19KjKHfI-uij6j3mNCYZ26LLZMoBbYk9r/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b9"
  },
  "name": "Кочубей Ярослав, 14 років ",
  "composition": "Ф.Кулау. Сонатина №55",
  "videoUrl": " https://drive.google.com/file/d/1R7HwXpLbO1tiz3KzMg35t4N3Bmx7ABOL/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ba"
  },
  "name": "Куліковська Катерина, 14 років",
  "composition": "1) Й.С.Бах. Прелюдія і фуга фа дієз мажор, ДТК-І, 2) С.Борткевич. Етюд №9, тв.15",
  "videoUrl": " https://drive.google.com/file/d/1zQjsqGpWqWYkejPYN_TG-E0mMA8cSj-r/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613bb"
  },
  "name": "Макаревич Наталія, 15 років ",
  "composition": "1)Й.С.Бах. Прелюдія і фуга ре мінор, ДТК-І, 2)О.Бордюгова. ''Український романс''",
  "videoUrl": " https://drive.google.com/file/d/1irVBVS0WDufWZC2YEB57uUMLWbw8BLnR/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613bc"
  },
  "name": "Малярчук Єлізавета, 13 років ",
  "composition": "1)С.Борткевич. Етюд №9, тв.15, 2)Ф.Шопен.''Гулянка''",
  "videoUrl": " https://drive.google.com/file/d/1om0hfVgra-VSx6YXhJbpZwLRbe0a8BE-/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613bd"
  },
  "name": "Опанасюк Тарас, 13 років",
  "composition": "1) П.Захаров. ''Токата-прелюдія'', 2) Е.Гріг. ''Ноктюрн''",
  "videoUrl": " https://drive.google.com/file/d/1gghwyH2Ax-AeVuelbSWsS0oIoAxS_uJD/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613be"
  },
  "name": "Ослам  Єлизавета, 14 років",
  "composition": "1) П.Чайковський.''Лютий'' із циклу''Пори року'',     2) Н.Лагодюг. ''Танго мрій''",
  "videoUrl": " https://drive.google.com/file/d/1mq4-ZBYZmlnGPzJY1jR_QVr0Gz75aMlX/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613bf"
  },
  "name": "Панімаш Ірина, 15 років",
  "composition": "1) Й.Гайдн.Соната до мажор (№50), І ч.; 2) С.Рахманінов.''Музичний момент'', тв.16 №4",
  "videoUrl": " https://drive.google.com/file/d/1h_KQ_WpvmjZFsXE4XT_Mdf23sk4K9GTs/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c0"
  },
  "name": "Петрусь Наталія, 13 років",
  "composition": "1)Ф.Ліст.''Романс'',     2)Е.Гіллок.''Вальс-етюд''",
  "videoUrl": " https://drive.google.com/file/d/1O15_CujwttaF1BxXgW844w6ABUQkujfb/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c1"
  },
  "name": "Прищепа Анна, 14 років",
  "composition": "1) М.Шмітц. Джазова інвенція №13,  2) О.Девіс.''Щасливий день''",
  "videoUrl": " https://drive.google.com/file/d/1JKMIlun3RehERqKaSHpl6SJ6eyuuq3aW/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c2"
  },
  "name": "Прокопчук Олександра, 17 років",
  "composition": " В.Верменич. ''Чорнобривці''",
  "videoUrl": " https://drive.google.com/file/d/1FNL7e6qh8SOKlUxMoRtA7rSY8NhanlX-/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c3"
  },
  "name": "Прокопчук Олександра, 17 років",
  "composition": " Ф.Шпиндлер. Сонатина,ІІІ ч.",
  "videoUrl": " https://drive.google.com/file/d/1KGMCcN6_BWPdiwzrRIuA3NdxUeJbwI1j/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c4"
  },
  "name": "Пучко Софія, 13років ",
  "composition": "1)М. Дворжак. Етюд 2 (2-й зошит), 2)В. Верменич. ''Чорнобривці''",
  "videoUrl": " https://drive.google.com/file/d/14WfsFv4An2FbV_uFjhqREI87-IfzQUb8/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c5"
  },
  "name": "Радковська Аліна, 13 років ",
  "composition": "Е. Гріг. Етюд пам'яті Ф.Шопена",
  "videoUrl": " https://drive.google.com/file/d/1_aBN8JgrmFmVfuVYW4s0leNNYxfP59So/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c6"
  },
  "name": "Радковська Аліна, 13 років",
  "composition": " Ф.Ліст. ''Сумний степ''",
  "videoUrl": " https://drive.google.com/file/d/1n2mSaPNwrVjlcPAohViYro24WziktB0j/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c7"
  },
  "name": "Рибкіна Олександра, 15 років",
  "composition": "1) М. Терещук. ''Фуга Lockdown''; 2)М.Бобер.''Опівнічна рапсодія''",
  "videoUrl": " https://drive.google.com/file/d/1sPVEB2VIt_oDZM0pmBUQ5jUoUBNivTwe/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c8"
  },
  "name": "Руссу Ганна, 14 років",
  "composition": "1)Г.Волленгаупт. ''Характерна п'єса у формі етюда'', 2)Ю.Щуровський. ''Елегія''",
  "videoUrl": " https://drive.google.com/file/d/1aEeFiUX_AvRcRMG-4hBA3i8c45EsZH9m/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c9"
  },
  "name": "Рущинська Ксенія, 14 років",
  "composition": "Е.Гріг. ''Мелодія''",
  "videoUrl": " https://drive.google.com/file/d/1072JNwvEm6CduA_GePsABu5_Yk6M02zH/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ca"
  },
  "name": "Рущинська Ксенія, 14 років ",
  "composition": "Й.С. Бах.''Маленька прелюдія'' до мінор",
  "videoUrl": " https://drive.google.com/file/d/1NDk_jKO5SHbnsaXATA1-YwgKe4bAmIdn/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613cb"
  },
  "name": "Свинцицька Емілія, 14 років",
  "composition": "1)В.Квасневський.''Думка''; 2)Д.Крамер. ''Танцюючий скрипаль''",
  "videoUrl": " https://drive.google.com/file/d/1algz_oukRxT2kPAFyXoX-QjIA34pICcm/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613cc"
  },
  "name": "Свиридюк Денис, 16 років",
  "composition": "1)Й.С.Бах. Триголосна інвенція №12, 2)Г.Галинін. ''Арія''",
  "videoUrl": " https://drive.google.com/file/d/146GFgHaXL3xHVFZw-hrHrxk4977lrNgh/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613cd"
  },
  "name": "Селіванова Анна, 14 років",
  "composition": "1)Ю.Щуровський. ''Елегічний прелюд'' сі мінор, 2)М.Дворжак.''Джазовий етюд'' №6 (2 зошит)",
  "videoUrl": " https://drive.google.com/file/d/1JucNtO1D93kqL8woJbk_BJiDjdgGxsQ6/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ce"
  },
  "name": "Семенов Іван, 15 років ",
  "composition": "Е.Дога. ''Сонет''",
  "videoUrl": " https://drive.google.com/file/d/1L0U_HouKRP4y3gPZbVLkzumyYD2ezE2D/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613cf"
  },
  "name": "Семенов Іван, 15 років ",
  "composition": "І.Мошeлeс. Eтюд №8,тв.70",
  "videoUrl": " https://drive.google.com/file/d/1_fwY3rkpcIlWjc1Ry_Ytihu-owWp2mgk/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d0"
  },
  "name": "Симоненко Таміла, 13 років ",
  "composition": "1) Л.Бетховен. Соната №19 тв.49, І частина, 2)П.Чайковський .''Підсніжник'' з циклу ''Пори року''",
  "videoUrl": " https://drive.google.com/file/d/1PmEjgOV2YYZiRIUBpTDIHjur-lzR_flv/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d1"
  },
  "name": "Снігур Анна, 13 років",
  "composition": "1)БХаваші. ''Шторм'', 2)Ф.Сай. Варіації",
  "videoUrl": " https://drive.google.com/file/d/1hm_xDHOZTzUCS4UZIso7MHZ3ibkvAIbb/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d2"
  },
  "name": "Тернова Ксенія, 14 років ",
  "composition": "1) І.Беркович. Прелюдія №10, 2)Е.Гріг. ''Похід гномів''",
  "videoUrl": " https://drive.google.com/file/d/1jJoY8kdzeUKl5zU5gLe5du8lhGalBIYB/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d3"
  },
  "name": "Ткачук Вікторія,  14 років",
  "composition": "1) Ф. Мендельсон.  ''Пісня без слів'', 2) В. Гіллок  ''Вальс-етюд''",
  "videoUrl": " https://drive.google.com/file/d/1Ki5C-tanjxy2My7kZ6kWgYEWMAOEYFc9/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d4"
  },
  "name": "Трачук Олександр, 13 років",
  "composition": "П. Захаров.  ''Рондо-галоп''",
  "videoUrl": " https://drive.google.com/file/d/18DlN1b4K1sXrdvvb3A8pHmJFvXwbzYrd/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d5"
  },
  "name": "Трачук Олександр, 13 років",
  "composition": " Д.Фільд. ''Ноктюрн'' №5",
  "videoUrl": " https://drive.google.com/file/d/1L3JxoWPr6jxM5Q3pxO0BBX2U4UiFnE_H/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d6"
  },
  "name": "Федонюк Олександр, 13 років",
  "composition": "1)Й.Гайдн. Соната №23, фа мажор, Іч.; 2)Й.С.Бах. Прелюдія і фуга №23, ДТК-І",
  "videoUrl": " https://drive.google.com/file/d/1i2fuOPVMqQfINCT2ZJbTJXccz5Afb_h5/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d7"
  },
  "name": "Хвостова Олександра, 13 років",
  "composition": "1)Ф.Ліст.Юнацький етюд №2, 2)О.Козаренко-А.Кос-Анатольський. ''Ой ти, дівчино, з горіха зерня''",
  "videoUrl": " https://drive.google.com/file/d/1GnsAZsugdqBLL6hKCGlleA8ZK_qT18Fj/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d8"
  },
  "name": "Храменкова Анастасія, 13 років ",
  "composition": "1)В.Коровіцин.''Русалонька'', 2)М.Скорик.''Жартівлива п'єса''",
  "videoUrl": " https://drive.google.com/file/d/1C0uSpeSybfdaIXYlmYwMrZ5JUsdb7Rb9/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d9"
  },
  "name": "Хелман Віолета, 13 років",
  "composition": "1)УГіллок.''Пурхаючи в хмарках'', 2)В.Ходош.''Червона шапочка''",
  "videoUrl": " https://drive.google.com/file/d/1zuyEGt3cvZ3sVjKnA3CJTZVL2vEVgXWy/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613da"
  },
  "name": "Шибанова Варвара, 13 років ",
  "composition": "Ф.Шопен. Ноктюрн №2, тв.9",
  "videoUrl": " https://drive.google.com/file/d/1r1jURFKC555wKMR7ClSymtTG_DWwvgvZ/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613db"
  },
  "name": "Шибанова Варвара, 13 років",
  "composition": " С.Борткевич.Етюд №7, тв.29",
  "videoUrl": " https://drive.google.com/file/d/1KTUYP3gWn4PTTGG1Y__FKrI1s5GkXBoO/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613dc"
  },
  "name": "Антонюк Марія, 21 рік",
  "composition": "1) М.Метнер. ''Дві казки'', 2)І.Шамо. ''Токата''",
  "videoUrl": "https://drive.google.com/file/d/1AFVEG3M3gU1yIaIc5YncRhUIAlwf8AVj/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613dd"
  },
  "name": "Бобрішова Інеса, 16 років",
  "composition": " 1) Й.Гайдн. Соната ре мажор, І ч.;   2) С.Прокоф'єв. ''Сарказм'',тв.17 №1",
  "videoUrl": "https://drive.google.com/file/d/19JHuESQVHM6bpupPsvdUn4elQRbgO23e/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613de"
  },
  "name": "Бянова Дарина, 16 років",
  "composition": "1)Ф.Шопен. Ноктюрн, тв.27№2,      2)Д.Задор. Етюд до мінор",
  "videoUrl": "https://drive.google.com/file/d/1-CBceHEbKge32X6ND1F_zFVQ-2Rb44Yw/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613df"
  },
  "name": "Вознюк Ангеліна, 17 років",
  "composition": "1)Я.Степовий. Прелюдія,       2)Я.Сібеліус. Етюд",
  "videoUrl": "https://drive.google.com/file/d/1y7QHtGukJoocS0B_diwzJu-VQY8WB9op/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e0"
  },
  "name": "Гук Софія, 16 років",
  "composition": " С.Рахманінов. ''Гумореска''",
  "videoUrl": "https://drive.google.com/file/d/1kPQT_uTxaIlalqx_aapSpid2SZgP7jq6/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e1"
  },
  "name": "Гук Софія, 16 років",
  "composition": " М. Лисенко. ''Журба''",
  "videoUrl": "https://drive.google.com/file/d/1NuhdlOqXePr8exdMp0gXTAl6FfkgkDuN/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e2"
  },
  "name": "Гулова Ангеліна, 18 років ",
  "composition": "1)Ф. Шопен. Ноктюрн тв.48 №1,     2)П. Санкан. Токата",
  "videoUrl": "https://drive.google.com/file/d/1znh9RU-pCp3rHxqyVuP44D4CkYm59GjN/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e3"
  },
  "name": "Дановська Ольга, 17 років ",
  "composition": " В.Барвінський Прелюдія №4 ''Хорал''",
  "videoUrl": "https://drive.google.com/file/d/1YLd2FP5IxDneIcOMWgWTgCfubBOYJQPr/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e4"
  },
  "name": "Дановська Ольга, 17 років",
  "composition": "К.Лядов Прелюдія, тв.39 №4",
  "videoUrl": "https://drive.google.com/file/d/1wogVZv8WVyQtLFsopwaRBx1RQOxlzCFI/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e5"
  },
  "name": "Дудник Дар'я, 17 років",
  "composition": " В.Барвінський.''Листок з альбома''",
  "videoUrl": "https://drive.google.com/file/d/1l_HE3r0O5usjOHcNuMpNDYg_g6d2S35t/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e6"
  },
  "name": "Дудник Дар'я, 17 років ",
  "composition": "К.Дебюссі. '' Романтичний вальс''",
  "videoUrl": "https://drive.google.com/file/d/1qLgq9AfD6YXCyPQyFejlyZ8BONuSoN_4/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e7"
  },
  "name": "Крюкова Марія, 15 років ",
  "composition": "1)С.Борткевич. ''Примхи моря'', 2)Ф.Шопен.Етюд тв.10 №4",
  "videoUrl": "https://drive.google.com/file/d/1-cbo3BZ1EPNYm6NS1eCMm_2HTzHJ7Bek/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e8"
  },
  "name": "Куліш Поліна, 15 років ",
  "composition": "1)Е.Гріг.''Колискова'', 2)І.Падеревський. ''Скерцино''",
  "videoUrl": "https://drive.google.com/file/d/1NamVVFfAdRfaFuA1uKjlt9QIWgMiSBy6/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e9"
  },
  "name": "Музиченко Марія, 19 років ",
  "composition": "1)Й.Гайдн. Соната №31, 1ч.; 2)Ф.Шопен.Етюд,тв.10 №5",
  "videoUrl": "https://drive.google.com/file/d/1O-ahfYJNbFf5fSOwSSpffIWWpniBubK8/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613ea"
  },
  "name": "Олійник Олександр, 18 років",
  "composition": "1)Ж.Бізе-В.Горовіц. Варіації на тему з опери ''Кармен'', 2)Л.Ревуцький. Прелюдія фа дієз мінор",
  "videoUrl": "https://drive.google.com/file/d/13JylPdDWgVz6QSHRGVJt7FhdaRelCHSD/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613eb"
  },
  "name": "Смик Анна, 17 років ",
  "composition": "С.Рахманінов. Етюд-картина тв.33 №5, соль мінор",
  "videoUrl": "https://drive.google.com/file/d/1k7okBuyMsFaRt4GwwXUSgYCh5DdY6MN9/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613ec"
  },
  "name": "Смик Анна, 17 років ",
  "composition": "С.Рахманінов. Прелюдія, тв. 32 №12, соль дієз мінор",
  "videoUrl": "https://drive.google.com/file/d/1LYHHVKuUIisadE2fmzwYzmwsS-UwVxVR/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613ed"
  },
  "name": "Тіхонок Єгор, 17 років",
  "composition": "1)С.Борткевич.''Скелі ущелини Уч-Кош'' з сюїти ''Кримські нариси''.тв.8, 2)Ф.Ліст.Трансцендентний етюд №10, фа мінор",
  "videoUrl": "https://drive.google.com/file/d/1xn3TfNH6GFBBQo1vZZNnRRVqbtjGGug2/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613ee"
  },
  "name": "Фащевський Тарас",
  "composition": "С.Рахманінов. ''Етюд-картина'', тв.33 (5)",
  "videoUrl": "https://drive.google.com/file/d/1eqTPXl_RhZQOdVr-lhUQmlOM8coC6FoK/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613ef"
  },
  "name": "Фащевський Тарас",
  "composition": "Л.Ревуцький. Прелюдія, тв.4 (2)",
  "videoUrl": "https://drive.google.com/file/d/1-_boMnoYnk74xDzQy6QlCqVxIP3j4sHx/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f0"
  },
  "name": "Фесик Назарій, 16 років",
  "composition": "1)С.Борткевич.''Lyrica Nova'',тв.59 №3,4; 2)Ф.Ліст.Трансцендентний етюд №8 ''Дике полювання''",
  "videoUrl": "https://drive.google.com/file/d/1c0sj4AMuDxHApmGT9WShmjJHbEHRzJdC/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f1"
  },
  "name": "Юзлова Любов, 17 років",
  "composition": " 1) К.Дебюссі. ''Арабеска''№1, 2) Й.Брамс.''Інтермеццо'', тв.117 №2",
  "videoUrl": "https://drive.google.com/file/d/1LADInWpm-jhc1FbRudgqwCMGtzXQDBMS/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f2"
  },
  "name": "Заєць Марина",
  "composition": "М. Скорик.''Вальс'' з Партити №5",
  "videoUrl": "https://drive.google.com/file/d/11mlZznZboxhzxEBTJ4gUmEtE0JYgQgdh/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f3"
  },
  "name": "Заєць Марина",
  "composition": "П.Чайковський. ''Думка'', тв.59",
  "videoUrl": "https://drive.google.com/file/d/1PaUp-aqQdCqBt35662yNwJkhaNOAXN_h/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f4"
  },
  "name": "Логвиновський Євгеній",
  "composition": "Д.Притскер. ''Блюз Пікассо''",
  "videoUrl": "https://drive.google.com/file/d/1e2_4isQzlucLR7kBZX-CHxgqYrBxJRZw/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f5"
  },
  "name": "Логвиновський Євгеній",
  "composition": "С.Прокоф'єв. Соната №3, тв.28",
  "videoUrl": "https://drive.google.com/file/d/1DLhT9YwR5I9cZxzdNoe22FwS8jpI4YVs/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f6"
  },
  "name": "Микитюк Анастасія",
  "composition": "М.Раков. ''Концертний етюд''",
  "videoUrl": "https://drive.google.com/file/d/1C8a6TPRM2caQfTOA6zGHvuIjGSoL7C1b/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f7"
  },
  "name": "Микитюк Анастасія",
  "composition": " Й.С.Бах. Прелюдія і фуга до мінор, ДТК -ІІ",
  "videoUrl": "https://drive.google.com/file/d/1wrqdb_ke2Kch_CfBcmNRH2M580PtZQA1/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f8"
  },
  "name": "Назаренко Ксенія",
  "composition": "І.Волкова. ''Настрої''",
  "videoUrl": "https://drive.google.com/file/d/1OA8rvN6wwdpOVy1DVDt1zq-4pkeiSr3x/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f9"
  },
  "name": "Назаренко Ксенія",
  "composition": "Й.Бах. Алеманда",
  "videoUrl": "https://drive.google.com/file/d/10qtURWd3aascq2gwNHxM-FETyQHLB8tD/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613fa"
  },
  "name": "Серов Владислав",
  "composition": "1)Й.С. Бах. Прелюдія і фуга до мінор, ДТК-ІІ, 2)Ф.Шопен. Балада №1, тв.23",
  "videoUrl": "https://drive.google.com/file/d/1atn5yiEcXgjVnFKfM4QWAUS4z_UVTJ_q/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613fb"
  },
  "name": "Тарасов Владислав",
  "composition": "1)С.Рахманінов. ''Етюд-картина'', тв.39 №9, 2)Ф.Шопен. ''Балада'', тв.23 №1",
  "videoUrl": "https://drive.google.com/file/d/19NZ_tEy0O2nRXjCltd_vdWL3SMuBNaCM/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613fc"
  },
  "name": "Гребенюк Г.О.",
  "composition": "1)С.Прокофьев. Соната №2,І ч.;2)   Ф.Ліст.''Етюд за каприсами Паганіні''",
  "videoUrl": "https://drive.google.com/file/d/1ShUYIYP9ngoQZehmCbzP5F3bJAKFh3sN/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613fd"
  },
  "name": "Кондратюк М.О. ",
  "composition": "1)Р.Шуман. ''Романс'', тв.28, 2)В.Косенко. ''Куранта''",
  "videoUrl": "https://drive.google.com/file/d/1FOb41PsmqWO4nyODkOdoMT4SsPp4HX9x/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613fe"
  },
  "name": "Опанасенко А.О. ",
  "composition": "1)С.Рахманінов. Прелюдія соль дієз мінор, 2)В.Філіпенко. Токата",
  "videoUrl": "https://drive.google.com/file/d/1VLXELuZcI6Qi2grlwaU-uEwlLv1eSEkX/preview",
  "group": "архів"
}];
let concertmasters = [{
  "id": {
    "$oid": "6098c8f6683dda47f8b613ffaasd"
  },
  "name": "Шевельова Єлізавета, 20 років.",
  "composition": "1) П.Чайковський. Арія Ленського, 2) Г.Хазанова. \" Уздовж вулиці ходу я\"",
  "videoUrl": "https://www.youtube.com/embed/CWX0eRPTCYY",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b613ffaas"
  },
  "name": "Закалюжна О.Б",
  "composition": "Г.Венявський. Концертний полонез ре мажор",
  "videoUrl": "https://www.youtube.com/embed/s3clXLT34hY",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b613ffaas1"
  },
  "name": "Закалюжна О.Б",
  "composition": "Ж.Масне.\"Роздум\"",
  "videoUrl": "https://www.youtube.com/embed/gDyUCbaneBk",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b613ff"
  },
  "name": "Кобзар Ніколь, 14 років",
  "composition": "Ф.Крейслер.''Маленький Віденський марш''",
  "videoUrl": "https://drive.google.com/file/d/1kuSR0VmOMiqIj9YR0u3lvOzq4JG5aLY8/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61400"
  },
  "name": "Кобзар Ніколь, 14 років",
  "composition": "Е.Ельгар.''Салют кохання''",
  "videoUrl": "https://drive.google.com/file/d/11gI7Xlj_SLQql2Pi6ETAhSAZTKLMjkBn/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61401"
  },
  "name": "Сабо Нестор, 10 років ",
  "composition": "1)В.Кролл. ''Полька віслючка'', 2)В.Цибін(перекл.А.Царенко). ''Листок з альбома''",
  "videoUrl": "https://drive.google.com/file/d/14PR5evrUIRaS1VFUvu0s69HMH7xS3WiI/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61402"
  },
  "name": "Смірнова Євгенія, 9 років ",
  "composition": "Л.Бетховен. ''Бабак'',обр. А. Шувалова",
  "videoUrl": "https://drive.google.com/file/d/1ir2aRKco82NwzR2FQH6ApZVHQZYr0L7y/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61403"
  },
  "name": "Смірнова Євгенія, 9 років ",
  "composition": "О.Бец. ''Подільські викрутаси''",
  "videoUrl": "https://drive.google.com/file/d/1qJQ9AIWj48pJTMBWfo3h7z6JlKJH980n/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61404"
  },
  "name": "Старцев Бенжамін, 11 років ",
  "composition": "1) Ж.Массне. ''Роздум''; 2)Е.Рибкін. ''Формула 1''",
  "videoUrl": "https://drive.google.com/file/d/1L6bxDysN0y2GDSNnRXqGEFbHR7eS-ixs/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61405"
  },
  "name": "Власюк Назар, 18 років ",
  "composition": "1)С.Доноті. Арія''O del mio amato ben'',2)Е.Гріг,Г.Х. Андерсен ''Jeg elsker dig''",
  "videoUrl": "https://drive.google.com/file/d/12_MFPU39btJQKvSt2RYzjiU0HaYsa4Og/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61406"
  },
  "name": "Дячек Іоанна, 17років ",
  "composition": "1)В.А.Моцарт.Арія''Ridente la calma'', 2)Ф.Надененко, І.Франко.Романс ''Чого являєшся мені у сні''",
  "videoUrl": "https://drive.google.com/file/d/1EQbQKbWivCb-gOQkccICL5APQjgWle9w/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61407"
  },
  "name": "Кваша Яна, 16 років",
  "composition": "1)Й.Кванц. Соната ре мажор, І-ІІ ч.; 2)В.Попп. ''Русский вечер''",
  "videoUrl": "https://drive.google.com/file/d/1opL41mLH10Bnr1eMyzOExswFJoTZ_8cS/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61408"
  },
  "name": "Колодій Антон, 18 років",
  "composition": "1) П.Чайковський. Романс''Горними тихо летела душа небесами'', 2)С.Рахманінов. ''Елегія'',тв.3№1, обробка для віолончелі та ф-но",
  "videoUrl": "https://drive.google.com/file/d/1lQIzDOiZp-EdXly10SVm4diOj5WCSk3Z/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61409"
  },
  "name": "Конюшек Софія, 21 рік",
  "composition": "О.Тактакішвілі. Соната для флейти і фортепіано.",
  "videoUrl": "https://drive.google.com/file/d/1HXE-WblU0-HywgVzCunQniQUCUNXGlNN/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140a"
  },
  "name": "Конюшек Софія, 21 рік ",
  "composition": "Ф.Комлев. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/14q78XKpdFg66VSWkAZq0VeRuKaTcJUpu/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140b"
  },
  "name": "Пчелінцева Адріана, 15 років",
  "composition": "1)В.Моцарт. Арія Блондхен з опери''Викрадення із Сераля'', 2)Р.Глієр.''В порыве нежности сердечной''",
  "videoUrl": "https://drive.google.com/file/d/17mRVxV06v5Mv6_P3C183oMgON-R_u-qO/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140c"
  },
  "name": "Фесик Назарій, 16 років ",
  "composition": "1)Дж.Пуччіні. Арія Тоски; 2)М.де Фалья.''Хота''",
  "videoUrl": "https://drive.google.com/file/d/1BJNsTp4WDxZbAdAnjMLP3hbD63T2eIwY/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140d"
  },
  "name": "Ярошенко Валерія, 19 років",
  "composition": "1)К.Стеценко. ''Сотояла я і слухала весну''; 2)В.Власов. Скерцо для домри та фор",
  "videoUrl": "https://drive.google.com/file/d/1OuDlacDb3i94xNxkowk-jsNktxuQK71L/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140e"
  },
  "name": "Козак Ірина",
  "composition": "Є.Бозза.''Дитячі мрії''",
  "videoUrl": "https://drive.google.com/file/d/1PsoyOIr17OCyN_GhRU_q7IpS4HWwHWUB/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140f"
  },
  "name": "Козак Ірина",
  "composition": "'Ніч яка місячна'', обр. Ю.Островського ",
  "videoUrl": "https://drive.google.com/file/d/1TJKQFEm3a3wziYvI3QfihGxzV2U5QH2n/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61410"
  },
  "name": "Микитюк Анастасія ",
  "composition": "1)Н.Бакланов. ''Концертіно'',      2)З.Багіров. ''Романс''",
  "videoUrl": "https://drive.google.com/file/d/1j8_mvZEGTgYI0LFGWFoLbQAgCHpI5C0Z/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61411"
  },
  "name": "Сав'юк Власта",
  "composition": "1)В.А. Моцарт. Концерт для фагота з оркестром сі бемоль мажор, Іч.; 2)А.Тансман.Сонатина для фагота і фортепіано,ІІІч.",
  "videoUrl": "https://drive.google.com/file/d/130aZO1nxV4E8HX7hxWaNvVT4bfgkhx4M/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61412"
  },
  "name": "Сасюк Юлія",
  "composition": "1)Г.Форе. ''Пробудження'', 2) Б.Барток. ''Шість румунських танців''",
  "videoUrl": "https://drive.google.com/file/d/1ods3tvUDXZdo1yedIVXYcc9Mn77bjh25/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61413"
  },
  "name": "Іванова Т.В.",
  "composition": "Е.Северн. ''Польський танець''",
  "videoUrl": "https://drive.google.com/file/d/1xXtvOSAunv56RfAxgV1q7m4iKa09sWH1/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61414"
  },
  "name": "Іванова Т.В.",
  "composition": "І.Тамарин ''Старовинний гобелен''",
  "videoUrl": "https://drive.google.com/file/d/149vlM07Gd8S9Cz4tDZ2KyKkguJzyB1uB/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61415"
  },
  "name": "Гачик О.А.",
  "composition": "1)Р.Глієр.''Романс'', 2)О.Циганков.''Інтродукція та Чардаш''",
  "videoUrl": "https://drive.google.com/file/d/1Ngs85qpEODEv67a8-daJxZoH6Ko7SUWk/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61416"
  },
  "name": "Гриців О.М.",
  "composition": "1)Ф. Крейслер.''Маленький віденський марш'', 2)Л. Ревуцький. ''Інтермецо''",
  "videoUrl": "https://drive.google.com/file/d/1nXkybPZHPOWWUzBED_KKeGF3kO2Ecabj/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61417"
  },
  "name": "Кірчанова І.В. ",
  "composition": "1)М.Відмонте.''Par zilo un raibo pasaku'', 2)Губаренко В. Концерт для флейти з камерним оркестром,тв.10",
  "videoUrl": "https://drive.google.com/file/d/1zpMjCauUpbJdufWXfb5Ofm7P9sAYj-iP/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61418"
  },
  "name": "Кекух О.В.",
  "composition": "1)І.Вимер. ''Гуцульська рапсодія'', 2)Укр.нар. танець в обр.В.Солонського ''Вечорниці''",
  "videoUrl": "https://drive.google.com/file/d/1dfPx15WQKHfPVtMPWWAAw9sy9UYw5S1e/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61419"
  },
  "name": "Лобода Л. М., ",
  "composition": "1)Л.Бетховен, Т.Шевченко. ''Зоре моя вечірняя'', 2)Лемківська народна пісня ''В темну нічку убочи''",
  "videoUrl": "https://drive.google.com/file/d/10gZo53X6EhHwEMpXKwpB2tW2_irVo290/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141a"
  },
  "name": "Любченко М.С. ",
  "composition": "Й.С.Бах. Концерт для скрипки з оркестром ля мінор",
  "videoUrl": "https://drive.google.com/file/d/1wfhuitXL2MwtYdrUHIkVdMxQZpht6jNl/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141b"
  },
  "name": "Любченко М.С.",
  "composition": "Н.Стецюн.    ''Болеро''",
  "videoUrl": "https://drive.google.com/file/d/1bHWUriqKvSTnVnIm47mmLedSi0Nh-XQs/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141c"
  },
  "name": "Михайлова М.В.",
  "composition": "А.Солтан. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1EoES2mTrWCy9CQcqd9qu366Z1tz6IpRQ/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b613ffaasda"
  },
  "name": "Михайлова М.В.",
  "composition": "Й. Тамарин. \"Старовинний гобелен\"",
  "videoUrl": "https://drive.google.com/file/d/1u4xJ0vK6deR2XJwGLXFh6sBRePvxGUNr/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141d"
  },
  "name": "Мялькіна Н.О.",
  "composition": "Дж.Вільямс. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1iM_EF0Vx9-w4DS6HR_ZHRJ-mqJwA-FGp/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141e"
  },
  "name": "Мялькіна Н.О.",
  "composition": "С.Цинцадзе. ''Сачідао''",
  "videoUrl": "https://drive.google.com/file/d/159djSrzI1AvL5pkCl0vnYDsHQLTnd5lo/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141f"
  },
  "name": "Нікітіна І.Р.",
  "composition": "Б.Лятошинський. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1yQyO0Q65WvHnvY28xBl3shW-Htdu4239/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61420"
  },
  "name": "Нікітіна І.Р.",
  "composition": "Сл. А.М'ястківського, муз.В.Верменича ''Підкручу я чорнії вуса''",
  "videoUrl": "https://drive.google.com/file/d/1u_7UQDuOCDqJJj1q5lhEFPEoxd_PU3jY/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61421"
  },
  "name": "Саєнко Т.Ю. ",
  "composition": "Ж.Массне. ''Роздум''",
  "videoUrl": "https://drive.google.com/file/d/1JlAoY-AAJEyI-rIRDCu7UnywxvrWEBBw/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61422"
  },
  "name": "Саєнко Т.Ю., ",
  "composition": "Т.Чупак. ''Весняний рок-н-ролл''",
  "videoUrl": "https://drive.google.com/file/d/1T5-IUNUuQmUvFVWYlY6SAVej-TIqmbrq/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61423"
  },
  "name": "Савчук Т.І.  ",
  "composition": "1)Дж.Вільямс, аранж.А.Теплицької.''Колискова для ангела'', 2)В.Козлов,перекл. для домри Є.Жукова. ''П'єса у стилі фламенко''",
  "videoUrl": "https://drive.google.com/file/d/17Tgiuogivsh3xwjFXi5a1oRU-okkP960/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61424"
  },
  "name": "Смірнова І.Ю.",
  "composition": "А. Шумакова. ''Танго Евіти''",
  "videoUrl": "https://drive.google.com/file/d/11CkziRvYJvniW7cia7y9EkI85snLJw7x/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61425"
  },
  "name": "Смірнова І.Ю.",
  "composition": "В.Гомоляка. ''Іспанський танець''",
  "videoUrl": "https://drive.google.com/file/d/1iOUJN21BvDdzsL0oP0atvsEmoqgUdpYC/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61426"
  },
  "name": "Смолянінова С.М. ",
  "composition": "1)А.Дворжак. Концерт для скрипки ля мінор, І ч.; 2)М.Скорик. ''Карпатська рапсодія''",
  "videoUrl": "https://drive.google.com/file/d/1tlsrMkQp0UVq0ywtJ01LpHKPsmFOpHnO/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61427"
  },
  "name": "Старинська М.А. ",
  "composition": "1)Ю.Шинкаренко.Варіації; 2)Е.Боцца.''Арія''",
  "videoUrl": "https://drive.google.com/file/d/1LsWzV_Lt1z0gGXULSegouckY9RZroG7h/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61428"
  },
  "name": "Трепак М.І.",
  "composition": "1)Ж.Демерссман. Фантазія, 2)П.Ітурральде. ''Маленький чардаш''",
  "videoUrl": "https://drive.google.com/file/d/1TMSKHpEcmM3K7hiZzyY3g4K_8MtHbH9L/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61429"
  },
  "name": "Єрьоміна О.Г. ",
  "composition": "1) М.Дремлюга. Поема-рапсодія, 2) С.Орфеєв.''Веснянка''",
  "videoUrl": "https://drive.google.com/file/d/1Y6OKUOoJb1ju3VzS4FCtO4guBLHD910P/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6142a"
  },
  "name": "Кадук Т.Ю.",
  "composition": " 1)К.М.Вебер.Концерт для кларнета №1,І ч.; 2) Я.Мединьш. Романс",
  "videoUrl": "https://drive.google.com/file/d/1kWBHYUYRmXpm5BCGW9bnt8y9rixgPQZ4/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6142b"
  },
  "name": "Новікова М.М.",
  "composition": "Обр. Д.Задора. ''Серед села дичка''",
  "videoUrl": "https://drive.google.com/file/d/10aWVlOe3F-ssQhTVqkFng8GJKGJEwU80/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6142c"
  },
  "name": "Новікова М.М. ",
  "composition": "П.І.Чайковський.''Забыть так скоро''",
  "videoUrl": "https://drive.google.com/file/d/1tw5MNU-5fuXQoSOHpWtaGvGjZxcfMAfm/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6142d"
  },
  "name": "Сирота О.М.",
  "composition": "1)К.Кудрявцев. ''Один день з життя дятла'', 2)О.Бец.''Українське інтермецо''",
  "videoUrl": "https://drive.google.com/file/d/1SejB1id_PU7Xg-w5fzKUvJ0EoOnFsDMC/preview",
  "group": "архів"
}];
let ensemble = [{
  "id": {
    "$oid": "6098d647683dda47f8b61437"
  },
  "name": "Ф-ний дует (Журавель С., Артеменко С.)",
  "composition": "1)Ю.Щуровський. ''Іспанський танець'', 2)Обр.М.Попова. ''Єврейські мотиви''",
  "videoUrl": "https://drive.google.com/file/d/1KvcEE7qPS0raOCqd8saMEHo-y0UDIpCh/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61438"
  },
  "name": "Ф-ний дует  (Пилипчук Н., Кавун Є.)",
  "composition": "1) В.Алексеєв.'' На прогулянці'', 2)О.Петрова. ''Цирк''",
  "videoUrl": "https://drive.google.com/file/d/1nELotwqAz9C7d09G4NVBVvbRyKL958rs/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61439"
  },
  "name": "Ф-ний дует  (Радковська А., Кузьмич). ",
  "composition": "А.Шнітке. ''Шинель''",
  "videoUrl": "https://drive.google.com/file/d/1M4pazNI_Tyv2sDMW9oB9Qem36I5DRZuR/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143a"
  },
  "name": "Ф-ний дует  (Радковська А., Кузьмич). ",
  "composition": "О. Науменко.''Час великих очікувань''",
  "videoUrl": "https://drive.google.com/file/d/1LBOe_wFlC_yzt_FfkRbC8-90cVu3stVO/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143b"
  },
  "name": "Ф-ний дует  (Сікора Р. Черепущак М.). ",
  "composition": "1)О.Науменко. ''Коломийка'', 2)Е.Гріг-Г.Фіртич.''Танець Анітри''",
  "videoUrl": "https://drive.google.com/file/d/1ORTzw-plehQvAAOinOrdqnHtnU_oCZj5/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143c"
  },
  "name": "Ф-ний дует ''Mycraft'' (Єрмоленко Д., Шибанова В.) ",
  "composition": "1)М.Скорик. ''Мелодія'',         2)О.Хромушин. ''Друкарська машинка''",
  "videoUrl": "https://drive.google.com/file/d/1Auvo44aBYTG3vKxsT2hQD0hmkg1Edla7/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143d"
  },
  "name": "Ф-ний дует (Бондаренко М., Слінченко Ю.) ",
  "composition": "О.Секрет.''Прогулянка Добермана''",
  "videoUrl": "https://drive.google.com/file/d/11QSAdkwn3iu54kR3hxnh3Hg0C_zpP-ZU/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143e"
  },
  "name": "Ф-ний дует (Бондаренко М., Слінченко Ю.) ",
  "composition": "П.Чайковський.'' Італійська пісенька''",
  "videoUrl": "https://drive.google.com/file/d/1ZT-3uCrzbGJtMc0oLwtgJqTorz9jDYes/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143f"
  },
  "name": "Ф-ний дует (Вашуріна В., Єжонков А.).",
  "composition": "1) Г.Бєлов.''Урасіма і Чарівна Черепаха'', 2)О. Польовий. ''Подорож в Альпи''",
  "videoUrl": "https://drive.google.com/file/d/1jChvMBrDwyxKk3AJEECSBE7Y_kCLRh8s/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61440"
  },
  "name": "Ф-ний дует (Гембицька О., Кузло К.).",
  "composition": "1)К.Ховард. ''Чарльстон'', 2)Дж. Шірінг. ''Колискова''",
  "videoUrl": "https://drive.google.com/file/d/1tLNVlhurZUdHx44MchS4qm251eS39roQ/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61441"
  },
  "name": "Ф-ний дует (Дерябіна С. та Васильєва В.).",
  "composition": "1)А.Діабеллі. Соната ре мажор, 2)Л.Шукайло. ''Гумореска''",
  "videoUrl": "https://drive.google.com/file/d/1yJQBfg7c_BoQqXMmAYqNYQCnYtawZ9To/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61442"
  },
  "name": "Ф-ний дует (Кришталович М., Кришталович І.) ",
  "composition": "Дж.Гершвін. ''Clap you hand''",
  "videoUrl": "https://drive.google.com/file/d/1MAJeBVnftEdhcio47nDnUgcjGGTwK8Cj/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61443"
  },
  "name": "Ф-ний дует (Кришталович М., Кришталович І.)",
  "composition": "'Колядка'', обр. О.Закалюжної",
  "videoUrl": "https://drive.google.com/file/d/1pqxYZTvFyrrj6dTpT58UUPSOPHM-hZte/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61444"
  },
  "name": "Ф-ний дует (Ланський Є., Ланська О.)",
  "composition": "1)Е.Гріг. Арія із сюїти ''З часів Хольберга'', 2)В.Птушкін. ''Бренфордська відьма''",
  "videoUrl": "https://drive.google.com/file/d/18OUsCGQBs3IhlX6it-s3Txuo07M3Ns0H/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61445"
  },
  "name": "Ф-ний дует (Симоненко Т., Федина А.)",
  "composition": "1) Дж.Гершвін.''Коханий мій''; 2) П.Моріа. ''Манует''",
  "videoUrl": "https://drive.google.com/file/d/1hVekh8_5MOUJDgJtXI8i4GBdRQwCAekt/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61446"
  },
  "name": "Ф-ний дует (Скопець А., Мурзак Ю.). ",
  "composition": "Т.Остен.''Танець ляльок''",
  "videoUrl": "https://drive.google.com/file/d/1EFzyijuwAFNj8v-TlraiI_PkuHGqX94E/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61447"
  },
  "name": "Ф-ний дует (Скопець А. Мурзак Ю.) ",
  "composition": "Л. Жульєва.''Прогулянка з татом''",
  "videoUrl": "https://drive.google.com/file/d/1VZr2V-Hv8MIF8KWgZGfJAyuEE7maqWop/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61448"
  },
  "name": "Ф-ний дует (Троценко А., Якуніна О.В.)",
  "composition": "1)К.М.Вебер. Соната до мажор, І ч.; 2)А.Комлікова. ''Спогад''",
  "videoUrl": "https://drive.google.com/file/d/1aYNB8jH0Jy4SP3ufAceQ-mJ29lPr_rTw/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61449"
  },
  "name": "Ф-ний дует (Філіпов І., Марченко Л.)",
  "composition": "1)Й.С.Бах.''Жарт'' 2)М.Леонтович.''Щедрик''",
  "videoUrl": "https://drive.google.com/file/d/1phWTyIJb7FzqNQFeUqE5x1lYFZ59Wugz/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144a"
  },
  "name": "Ф-ний дует (Хелман В., Хелман В.)",
  "composition": "1)У.Гіллок.''На паризькому бульварі'', 2)Н.Смірнова.''Бразильський карнавал''",
  "videoUrl": "https://drive.google.com/file/d/17c32CI0m_kNJXZkrHkXQe52TdfHWPl6O/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144b"
  },
  "name": "Ф-ний квартет ''Sforzando''.",
  "composition": " О.Циганков. ''Тустеп''",
  "videoUrl": "https://drive.google.com/file/d/1UQkZ11UGVlqhR3sradpboQpK9EEyaiqo/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144c"
  },
  "name": "Ф-ний квартет ''Sforzando''.",
  "composition": "Е. Гріг.''В печері гірського короля''",
  "videoUrl": "https://drive.google.com/file/d/1STLnt8IU5nlY-G1dqfbKuRa1B_Z8TSkY/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144d"
  },
  "name": "Ф-ний дует (Вихрист М., Фєдосєєв Н.)",
  "composition": "1)С.Прокоф'єв. Марш, 2)В.Лютославський. Варіації на тему Паганіні",
  "videoUrl": "https://drive.google.com/file/d/1nzRHXJKtAbdx7PwbB5d4XFGxBNctpNEk/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144e"
  },
  "name": "Ф-ний дует (Вітюк В, Березовська Є.)",
  "composition": "1)Й.Бах (Вівальді). Концерт для органа ля мінор, 2)А.П'яцолла. ''Лібертанго''",
  "videoUrl": "https://drive.google.com/file/d/1nf01Ef6OVOyLAJUUjBYyIKNs3MZe_PFv/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144f"
  },
  "name": "Ф-ний дует (Боровець О., ілюстратор)",
  "composition": "Й.С.Бах.''Арія'' (''Страсті за Матвієм'')",
  "videoUrl": "https://drive.google.com/file/d/1H1akQUdR7QKRO4P3hDY6_tZtmdSrk0J1/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61450"
  },
  "name": "Ф-ний дует (Боровець О.,ілюстратор). ",
  "composition": "К.Орф.''О,Фортуно'' (''Карміна Бурана'')",
  "videoUrl": "https://drive.google.com/file/d/19kOIBTdIKKQZ6nXVgPiZH3Y8mycWpwBy/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61451"
  },
  "name": "Ф-ний дует (Клименко М., Діордієва М.)",
  "composition": "1) С.Рахманінов. ''Вокаліз'', 2)Д.Мійо.''Бразильєра''",
  "videoUrl": "https://drive.google.com/file/d/1u81dAAtlDofq4pnyDtYg-SxGB4jGB3sE/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61452"
  },
  "name": "Ф-ний дует (Козак І., Таєр-Ульянова К.). ",
  "composition": "A.  П'яццола. ''Лібертанго''",
  "videoUrl": "https://drive.google.com/file/d/1y6YqFtBPGMlXzEQL8uu3BL4UkrMze4jb/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61453"
  },
  "name": "Ф-ний дует (Козак І. та Таєр-Ульянова К.). ",
  "composition": "Е. Гріг. ''Норвежський танець''",
  "videoUrl": "https://drive.google.com/file/d/1Ttfi4m7P1ouNJEHDXiJna7X3beQPzrfu/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61454"
  },
  "name": "Ф-ний дует (Костечко А., Кондратюк М. ).",
  "composition": "М. К.Дебюссі. ''У човні''",
  "videoUrl": "https://drive.google.com/file/d/1hRWzCLXIUU6XpDWZ3EisI7Q5NZHzDdio/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61455"
  },
  "name": "Ф-ний дует (Костечко А., Кондратюк М.).",
  "composition": "Ю.Весняк. ''Карлсон''",
  "videoUrl": "https://drive.google.com/file/d/1A31VrR5d5dXT8kQWtNyGkxfy7bKI5MDU/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61456"
  },
  "name": "Ф-ний дует (Мацієвсьа М., Папієва К.). ",
  "composition": "1)М.Метнер.''Російський хоровод'', 2)А.П'яццола.''Велике танго''",
  "videoUrl": "https://drive.google.com/file/d/16AngsasGuAshoDZyg9idljB8xoMDv4vC/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61457"
  },
  "name": "Ф-ний дует  (Касяненко О.В., Гордієнко І.О.) ",
  "composition": "1) А.Бабаджанян. ''Ноктюрн'', 2)Ю. Щуровський. ''Гумористичний танець''",
  "videoUrl": "https://drive.google.com/file/d/1_SXAFQDw_Bm4YK-qcy6Xs4kFoW4H3DaI/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61458"
  },
  "name": "Ф-ний дует ''Елегія''",
  "composition": " 1)М.Скорик. ''Мелодія'', 2)Л.Карпенко.''Віночок улюблених мелодій''",
  "videoUrl": "https://drive.google.com/file/d/1ckZw0HssiyEdbSSHBqOyawqSftAk1wUj/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61459"
  },
  "name": "Ф-ний дует (Григор'єва Г.А. , Якуніна О.В.)",
  "composition": "1)Ф.Шуберт.''Військовий марш'' 2)А.Комлікова. ''На маскараді''",
  "videoUrl": "https://drive.google.com/file/d/1UCaJ_qYUapyM-HBhruWb-h7IFySqk_sU/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145a"
  },
  "name": "Ф-ний дует (Косенко О.В., Касумова О.Д.).",
  "composition": "1)А. Цфасман. ''Ліричний вальс'', 2)М.Мінков. ''Старий рояль''",
  "videoUrl": "https://drive.google.com/file/d/1zGOKunxIoHd3Uj5FHvdWyN-rvWF7n6V-/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145b"
  },
  "name": "Ф-ний квартет  (Васенко С., Васенко М., Хавалко Т.,Бичков'як К.). ",
  "composition": "1)А.Вівальді.''Зима''; 2)Ф.Мерк'юра.''Богемна рапсодія''",
  "videoUrl": "https://drive.google.com/file/d/1B96nEC3vKYRd8OgTXgPiVVX8VB-MSSdY/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145c"
  },
  "name": "Ф-ний квартет ''ALLA BREVE''.",
  "composition": "І.Стравінський.Фрагмент із балету ''Петрушка''",
  "videoUrl": "https://drive.google.com/file/d/1bifW8OBv1E61qd184EaJjsvOtrXrRrkV/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145d"
  },
  "name": "Ф-ний квартет ''ALLA BREVE''.",
  "composition": "К.Гурлітт.''Віденський вальс''",
  "videoUrl": "https://drive.google.com/file/d/1QjBrKWTkCbiS9Ej5k4pHbHRDsN2D1caM/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145e"
  },
  "name": "Фортепіанний ансамбль ''ЕКСПРЕСІЯ''.",
  "composition": "О.Науменко. 1)''Часи великих сподівань'', 2)А.П'яццола. ''Лібертанго''",
  "videoUrl": "https://drive.google.com/file/d/1iUlYKrIKsJ1inuCqAOS0MY4LqGrmcp_k/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145f"
  },
  "name": "Фортепіанний квартет (Щукіна О.,Сердюк Г., Шаповал О., Максименко В.)",
  "composition": "1) Л.Лавіньяк.''Галоп-марш''; 2)Г.Гурліт. Ноктюрн",
  "videoUrl": "https://drive.google.com/file/d/1IYbNIC2Ex6NxxM8ymbCtL2muPAQ4RhMg/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61460"
  },
  "name": "Ф-ний ансамбль ( Смик Л.Ю.,Шекель О.О.). ",
  "composition": "К. Гуаставіно. ''Романс''",
  "videoUrl": "https://drive.google.com/file/d/1dHBznDmpE-0vWyryMf86XCkFb8sP_HY_/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61461"
  },
  "name": "Ф-ний ансамбль (Смик Л.Ю., Шекель О.О.). ",
  "composition": "О.Цфасман.''Сніжинки''",
  "videoUrl": "https://drive.google.com/file/d/19PTe-J_cS6DTSO6iZFixgb5g4ZxpazRT/preview",
  "group": "архів"
}];
let archive = myCards.concat(concertmasters).concat(ensemble);

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
/* harmony import */ var _Archive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Archive */ "./src/store/Archive.jsx");
/* harmony import */ var _FortepianoSolo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FortepianoSolo */ "./src/store/FortepianoSolo.jsx");
/* harmony import */ var _Ensemble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ensemble */ "./src/store/Ensemble.jsx");
/* harmony import */ var _AdditionalInstruments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AdditionalInstruments */ "./src/store/AdditionalInstruments.jsx");





const group1 = `Номінація "Фортепіано соло"`;
const group2 = `Номінація «Фортепіанний ансамбль»`;
const group3 = `Номінація «Додатковий інструмент (фортепіано)»`;
let myCards = _Archive__WEBPACK_IMPORTED_MODULE_1__["archive"];
myCards = myCards.concat(_FortepianoSolo__WEBPACK_IMPORTED_MODULE_2__["fortepianoSolo"]).concat(_Ensemble__WEBPACK_IMPORTED_MODULE_3__["ensembles"]).concat(_AdditionalInstruments__WEBPACK_IMPORTED_MODULE_4__["additionalInstruments"]);
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

    case 'ARCHIVE':
      console.log("> Архів");
      let archiveCards = myCards.filter(card => card.group === "архів").slice();
      return {
        cards: archiveCards,
        isDataInPlace: true,
        cardCount: myCards.length,
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
        cards: _AdditionalInstruments__WEBPACK_IMPORTED_MODULE_4__["additionalInstruments"],
        isDataInPlace: true,
        cardCount: _AdditionalInstruments__WEBPACK_IMPORTED_MODULE_4__["additionalInstruments"].length,
        error: ""
      };
  }
}

const cardStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(filmReducer);
cardStore.subscribe(() => console.log("FilmsStore state was changed, number of cards: " + cardStore.getState().cardCount));

/***/ }),

/***/ "./src/store/Ensemble.jsx":
/*!********************************!*\
  !*** ./src/store/Ensemble.jsx ***!
  \********************************/
/*! exports provided: ensembles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensembles", function() { return ensembles; });
let ensembles = [{
  "videoUrl": "https://www.youtube.com/embed/Q47wA07fcw8",
  "composition": "1. А. Комлікова. «Рок-драйв» з циклу «Інтервалія»; 2. А. Комлікова. «Мінялка-повторялка»",
  "name": "Фортепіанний дует у складі Антонової П. та Комлікової О.",
  "id": {
    "$oid": "56064574517725"
  },
  "group": "Номінація «Фортепіанний ансамбль»"
}, {
  "videoUrl": "https://www.youtube.com/embed/tuQgC_n-dXs",
  "composition": "1. П. Шольц-М. Канке. Фантазія на тему української народної пісні «Верховина»; 2. М. Скорик. Парафраз на тему Л. Бетховена «До Елізи»",
  "name": "Фортепіанний дует у складі Малярчук Є. та Мох Н.",
  "id": {
    "$oid": "56064574670641"
  },
  "group": "Номінація «Фортепіанний ансамбль»"
}, {
  "videoUrl": "https://www.youtube.com/embed/EURG6A-1coo",
  "composition": "1. Ф. Шуберт. «Німецький танець»; 2. А. Дворжак. «Слов\u2019янський танець»",
  "name": "Фортепіанний дует у складі Ягодки О. та Ягодки Р.",
  "id": {
    "$oid": "56064574712419"
  },
  "group": "Номінація «Фортепіанний ансамбль»"
}, {
  "videoUrl": "https://www.youtube.com/embed/IGhpmU4KpgE",
  "composition": "А. Лавіньяк. «Марш-галоп для восьми рук та одинокого роялю»",
  "name": "Фортепіанний квартет у складі Дуб Н., Ткаченко А., Заливадного Р., Менцель А.",
  "id": {
    "$oid": "56064574759904"
  },
  "group": "Номінація «Фортепіанний ансамбль»"
}, {
  "videoUrl": "https://www.youtube.com/embed/5UFVYszArfc",
  "composition": "Е. Макаров. «Урочиста прелюдія», переклад М. Готліба",
  "name": "Фортепіанний квартет у складі Дуб Н., Ткаченко А., Заливадного Р., Менцель А.",
  "id": {
    "$oid": "56064574798021"
  },
  "group": "Номінація «Фортепіанний ансамбль»"
}, {
  "videoUrl": "https://www.youtube.com/embed/5i15Aa9plh8",
  "composition": "М. Скорик. «Мелодія», транскрипція О. Шевченко-Міхаловсько",
  "name": "Фортепіанний дует у складі Григор\u2019євої Г.А .та Якуніної О.В.",
  "id": {
    "$oid": "56064574829776"
  },
  "group": "Номінація «Фортепіанний ансамбль»"
}, {
  "videoUrl": "https://www.youtube.com/embed/1dcmC7FM1go",
  "composition": "М. Канке. «Попурі з пісень військового часу»",
  "name": "Фортепіанний дует у складі Григор\u2019євої Г.А .та Якуніної О.В.",
  "id": {
    "$oid": "56064574860259"
  },
  "group": "Номінація «Фортепіанний ансамбль»"
}, {
  "videoUrl": "https://www.youtube.com/embed/0spocEjHziM",
  "composition": "М. Скорик. «Приємна прогулянка»",
  "name": "Фортепіанний дует «Експресія» у складі Ганюк І. та Плотнікової Л.",
  "id": {
    "$oid": "56064574897805"
  },
  "group": "Номінація «Фортепіанний ансамбль»"
}];

/***/ }),

/***/ "./src/store/FortepianoSolo.jsx":
/*!**************************************!*\
  !*** ./src/store/FortepianoSolo.jsx ***!
  \**************************************/
/*! exports provided: fortepianoSolo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fortepianoSolo", function() { return fortepianoSolo; });
let fortepianoSolo = [{
  "videoUrl": "https://youtube.com/embed/VHtYv6Xo28E",
  "composition": "В. Дамкомб. Сонатина до мажор, І частина",
  "name": "Ваширенко Діана, 12.10.2013 р.н.",
  "id": {
    "$oid": "49463840526882"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/i63bXHyKWoA",
  "composition": "М. Шентюрк (Терещук). «Менует граційної балерини»",
  "name": "Ваширенко Діана, 12.10.2013 р.н.",
  "id": {
    "$oid": "49463840610473"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/6EdS2G0VHcg",
  "composition": "Й. Бах. Менует соль мажор",
  "name": "Вовк Артур, 20.10.2014 р.н.",
  "id": {
    "$oid": "49463840672134"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/LFS5rjlFf3Q",
  "composition": "М. Жербін. «Український танець»",
  "name": "Вовк Артур, 20.10.2014 р.н.",
  "id": {
    "$oid": "49463840720157"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/qTxnzQqFRZY",
  "composition": "Й. Бах. «Маленька прелюдія» соль мінор",
  "name": "Житарюк Кіра, 10.09.2013 р.н.",
  "id": {
    "$oid": "49463840782238"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/cRbs9DO-M58",
  "composition": "А. Хуторянський. «Вогнівочка-стрибунівочка»",
  "name": "Житарюк Кіра, 10.09.2013 р.н.",
  "id": {
    "$oid": "49463840890368"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/anoheqQw_Vo",
  "composition": "Л. Шукайло. «Лебідь»",
  "name": "Кисельова Єлизавета, 11.01.2014 р.н.",
  "id": {
    "$oid": "49463840933566"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/WnZY6n9Cn_4",
  "composition": "О. Гедіке. Етюд до мажор",
  "name": "Кисельова Єлизавета, 11.01.2014 р.н.",
  "id": {
    "$oid": "49463840975326"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/0iMoae2japo",
  "composition": "С. Майкапар. «В кузні»; Б. Фред. «Танець ельфів»",
  "name": "Кравчук Мілана, 09.01.2015 р.н.",
  "id": {
    "$oid": "49463841034039"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/RUxZI4i9Kgc",
  "composition": "П. Захаров. «Карусель»",
  "name": "Ліпкан Аліна, 10.10.2014 р.н.",
  "id": {
    "$oid": "49463841079269"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/CWt9CJJljf4",
  "composition": "Б. Фільц. «Древня казка»",
  "name": "Ліпкан Аліна, 10.10.2014 р.н.",
  "id": {
    "$oid": "49463841137906"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/l2BujCM4ydk",
  "composition": "Я. Бобалік. «Журавлина пісня»; В. Барвінський. «Сонечко»",
  "name": "Ляшик Анна, 16.06.2013 р.н.",
  "id": {
    "$oid": "49463841206829"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/OaAd0HOAEtY",
  "composition": "Й.С. Бах. «Маленька прелюдія» до мінор; С. Борткевич. «У склепінні»; К. Черні. Етюд ре мажор, тв. 399",
  "name": "Марущак Вероніка, 22.07.2013 р.н.",
  "id": {
    "$oid": "49463841293069"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/Ita5y9ybU28",
  "composition": "Л. Бетховен. Сонатина",
  "name": "Митюк Арсен, 27.06.2014 р.н.",
  "id": {
    "$oid": "49463841360772"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/sJv3PZ8RtS8",
  "composition": "В. Косенко. Скерцино",
  "name": "Митюк Арсен, 27.06.2014 р.н.",
  "id": {
    "$oid": "49463841452886"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/xPJvUsHbtkY",
  "composition": "М. Вербицький, аранж. О. Шавардака. «Гімн України»",
  "name": "Озінковська Вікторія, 22.07.2013 р.н.",
  "id": {
    "$oid": "49463841520216"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/UA8auGQBg6Q",
  "composition": "Ю. Щуровський. «Шарманка»",
  "name": "Озінковська Вікторія, 22.07.2013 р.н.",
  "id": {
    "$oid": "49463841567148"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/mAucPI7VmH0",
  "composition": "К. Рейнеке. Сонатина соль мажор, І частина",
  "name": "Осика Роман, 25.06.2014 р.н.",
  "id": {
    "$oid": "49463841607345"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/1aG7Xyldz-E",
  "composition": "Українська народна пісня в обробці Г. Без\u2019язичного «Їхав козак на війноньку»",
  "name": "Осика Роман, 25.06.2014 р.н.",
  "id": {
    "$oid": "49463841648956"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/_WdGfSImyF4",
  "composition": "Ю. Зубай «Бабуся Ягуся»",
  "name": "Остапчук Катерина, 11.08.2013 р.н.",
  "id": {
    "$oid": "49463841730700"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/M0nxqiXdfzo",
  "composition": "В. Гіллок. Сарабанда",
  "name": "Остапчук Катерина, 11.08.2013 р.н.",
  "id": {
    "$oid": "49463841798090"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/MS3jIpoIFY4",
  "composition": "А. Роулі. «Китайський хлопчик»",
  "name": "Пархоменко Євгенія, 08.04.2016 р.н.",
  "id": {
    "$oid": "49463841841361"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/0n5yyz0F9kg",
  "composition": "Л. Шитте. «На скейтборді»",
  "name": "Пархоменко Євгенія, 08.04.2016 р.н.",
  "id": {
    "$oid": "49463841887131"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/NX2VafSwHSA",
  "composition": "П. Захаров. «Танець маленьких зірочок»",
  "name": "Пісоцька Соломія, 29.03.2016 р.н.",
  "id": {
    "$oid": "49463841926142"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/jx_ozYsL5EQ",
  "composition": "І. Іордан. «Полювання на метелика»",
  "name": "Пісоцька Соломія, 29.03.2016 р.н.",
  "id": {
    "$oid": "49463841969025"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/tOeQT-UIKmA",
  "composition": "М. Шентюрк (Терещук). «Грайливе зайченятко»",
  "name": "Примак Юлія, 02.03.2014 р.н.",
  "id": {
    "$oid": "49463842003637"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/lN4Zv48wPnY",
  "composition": "В. Гіллок. «Drifting clouds»",
  "name": "Примак Юлія, 02.03.2014 р.н.",
  "id": {
    "$oid": "49463842033450"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/uLQ0Yst_T4Y",
  "composition": "А. Андре. Сонатина соль мажор, І частина",
  "name": "Садовнік Есфір, 25.06.2014 р.н.",
  "id": {
    "$oid": "49463842075142"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/vaXOj74GjJM",
  "composition": "М. Екштейн. «Каприз гномів»",
  "name": "Садовнік Есфір, 25.06.2014 р.н.",
  "id": {
    "$oid": "49463842112825"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/1RK5vyNtLew",
  "composition": "Р. Шуман. «Перша втрата»",
  "name": "Садовнік Есфір, 25.06.2014 р.н.",
  "id": {
    "$oid": "49463842172233"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/BIIoMoGjmCQ",
  "composition": "Я. Бобалік. «Такий чудовий вечір»",
  "name": "Семенчук Вероніка,30.11.2013 р.н.",
  "id": {
    "$oid": "49463842227805"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/GQZGFR75FlY",
  "composition": "В. Дамкомб. Сонатина до мажор, ІІ,ІІІ частини",
  "name": "Семенчук Вероніка,30.11.2013 р.н.",
  "id": {
    "$oid": "49463842271273"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/dkOChCdNmCQ",
  "composition": "В. Полянський. «Квітень. Вітерець повіяв» з циклу «Пори року. 12 п\u2019єс для фортепіано в джазових тонах»",
  "name": "Смірнова Аліса, 12.01.2014 р.н.",
  "id": {
    "$oid": "49463842356077"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/UKwwS9siL40",
  "composition": "К. Черні. Сонатина до мажор",
  "name": "Смірнова Аліса, 12.01.2014 р.н.",
  "id": {
    "$oid": "49463842419231"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/36lWwvNXnCk",
  "composition": "1. Л. Шукайло. Прелюдія до мажор; Л. Бетховен. 2. Сонатина соль мажор, І частина",
  "name": "Теплицька Злата, 05.04.2015 р.н.",
  "id": {
    "$oid": "49463842475921"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/RJfXJYjB3ss",
  "composition": "1. І. Кулау. Сонатина соль мажор, І частина; 2. В. Гіллок. «Колібрі»",
  "name": "Ткаченко Діана, 20.08.2013 р.н.",
  "id": {
    "$oid": "49463842529226"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/SDA36NQmoC4",
  "composition": "1. М. Шентюрк (Терещук). «Маленька серенада»; 2. М. Екштайн. «Каприз гномів»",
  "name": "Турик Анна, 07.11.2013 р.н.",
  "id": {
    "$oid": "49463842573009"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/9zBiicmaIO0",
  "composition": "1. Ю. Щуровський. Танець; 2. Ф. Шуберт. Скерцо сі бемоль мажор",
  "name": "Удод Дар\u2019я, 03.01.2014 р.н.",
  "id": {
    "$oid": "49463842618356"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/jZusmJYsdkQ",
  "composition": "1. Українська народна пісня «Над річкою бережком», переклад  І. Берковича за обробкою М. Леонтовича; 2. Обр. Б. Шиптура. Коломийка",
  "name": "Халамейда Лук\u2019ян, 09.07.2014 р.н.",
  "id": {
    "$oid": "49463842669284"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/pwtGbFLZ69g",
  "composition": "1. І. Беркович. Концерт для фортепіано №2, ІІ частина; 2. Л. Іванюшина. «Карамель»",
  "name": "24.\tХом\u2019як Варвара,18.03.2016 р.н.",
  "id": {
    "$oid": "49463842719570"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/IQGX6VdiK7s",
  "composition": "Обробка Б. Шиптура. Коломийка",
  "name": "Чулкіна Надія, 17.05.2014 р.н.",
  "id": {
    "$oid": "49463842764257"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/wuTl2eDjeWw",
  "composition": "К. Вілтон. Сонатина до мажор",
  "name": "Чулкіна Надія, 17.05.2014 р.н.",
  "id": {
    "$oid": "49463842796909"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/FT1tZdP2Vbc",
  "composition": "О. Білаченко. Експромт фа мінор",
  "name": "Шамина Маргарита, 08.01.2014 р.н.",
  "id": {
    "$oid": "49463842835492"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/hw-cAvT9HBA",
  "composition": "П. Захарова. «Жарт-сувенір»",
  "name": "Шамина Маргарита, 08.01.2014 р.н.",
  "id": {
    "$oid": "49463842871499"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/V7ytHmu3pCc",
  "composition": "Й.С. Бах. Менует соль мажор",
  "name": "Шпак Денис, 26.09.2014 р.н.",
  "id": {
    "$oid": "49463842912144"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/SvoWQdkcFMM",
  "composition": "С. Борткевич. «Козак»",
  "name": "Шпак Денис, 26.09.2014 р.н.",
  "id": {
    "$oid": "49463842951285"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/utJa_A7GPto",
  "composition": "Л. Шітте. Етюд до мажор",
  "name": "Шпак Денис, 26.09.2014 р.н.",
  "id": {
    "$oid": "49463842997514"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/LTYcN8wEzjQ",
  "composition": "О. Гедіке. Етюд до мажор",
  "name": "Юзвак Єва, 14.06.2015 р.н.",
  "id": {
    "$oid": "49463843034290"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/erQmPy6GoxQ",
  "composition": "І. Кореневська. «Дощик»",
  "name": "Юзвак Єва, 14.06.2015 р.н.",
  "id": {
    "$oid": "49463843070351"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/EUIDWQiKpcY",
  "composition": "К. Вілтон. Сонатина до мажор",
  "name": "Якимчук Кароліна, 15.12.2013 р.н.",
  "id": {
    "$oid": "49463843127373"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/aTtW5BCWXx8",
  "composition": "Л. Шитте. Маленька прелюдія",
  "name": "Якимчук Кароліна, 15.12.2013 р.н.",
  "id": {
    "$oid": "49463843164174"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/JjWg9VVoAjg",
  "composition": "Дж. Бастьєн. «Бджола»",
  "name": "Якимчук Кароліна, 15.12.2013 р.н.",
  "id": {
    "$oid": "49463843206531"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/9aGeFVoc0zY",
  "composition": "Д. Чімароза. Соната №15, 2 зошит",
  "name": "Агратіна Станіслав, 24.08.2011 р.н.",
  "id": {
    "$oid": "49463843249986"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/NW4Q3hwkdCY",
  "composition": "М. Скорик. «Жартівлива п\u2019єса» з циклу «З дитячого альбому»",
  "name": "Агратіна Станіслав, 24.08.2011 р.н.",
  "id": {
    "$oid": "49463843308698"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/KSisZTyWV4c",
  "composition": "1. Б. Фільц. «Ліричний прелюд»; 2. Ю. Шамо. Токата",
  "name": "Артьомова Дар\u2019я, 26.06.2010 р.н.",
  "id": {
    "$oid": "49463843349481"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/mpEMcxL9gYU",
  "composition": "1. Й.С. Бах. Арія з «Французької сюїти» до мінор; 2. А. Коломієць. «Гра-веснянка»",
  "name": "Бакаєвич Тимофій, 01.01.2012 р.н.",
  "id": {
    "$oid": "49463843394482"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/-IKiZqLzdBs",
  "composition": "Н. Нижанківський. Коломийка",
  "name": "Бащій Вікторія, 11.06.2012 р.н.",
  "id": {
    "$oid": "49463843438129"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/QWck3N5f8WM",
  "composition": "Ф. Бюргмюллер. Етюд",
  "name": "Бащій Вікторія, 11.06.2012 р.н.",
  "id": {
    "$oid": "49463843469935"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/VylIZoK8hL4",
  "composition": "П. Чайковський. «Хвороба ляльки»",
  "name": "Безсмольна Зоряна, 22.10.2013 р.н.",
  "id": {
    "$oid": "49463843503572"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/txm2JB9ChUg",
  "composition": "М. Мієр. «Downright Happy Rag»",
  "name": "Безсмольна Зоряна, 22.10.2013 р.н.",
  "id": {
    "$oid": "49463843544694"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/CsaBEtIVMZw",
  "composition": "О. Герасименко. «Море»; 2. Н. Торопова. Токата",
  "name": "Березська Любов, 25.10.2012 р.н.",
  "id": {
    "$oid": "49463843591282"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/vhecrrySG7U",
  "composition": "Ю. Щуровський. Інвенція",
  "name": "Бондарчук Мирослава, 18.04.2011 р.н.",
  "id": {
    "$oid": "49463843631759"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/sQPMkTnbM1g",
  "composition": "Ж. Колодуб. Етюд-картинка",
  "name": "Бондарчук Мирослава, 18.04.2011 р.н.",
  "id": {
    "$oid": "49463843680639"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/1QOgMLy4zjA",
  "composition": "О. Тимошенко. Елегія",
  "name": "Волощук Емілія, 19.06.2011 р.н.",
  "id": {
    "$oid": "49463843722281"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/VeUx_bBIACE",
  "composition": "Т. Петриненко, обробка М. Шентюрк. «Україна»",
  "name": "Волощук Емілія, 19.06.2011 р.н.",
  "id": {
    "$oid": "49463843764833"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/a8pwOhSpuss",
  "composition": "1. Ю. Щуровський. Гопак; 2. М. Шентюрк (Терещук). Балада",
  "name": "Гаврилюк Софія, 29.06.2012 р.н.",
  "id": {
    "$oid": "49463843810822"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/gRhA6bCFlbQ",
  "composition": "1. Л. Шукайло (Терещук). Прелюдія; 2. М. Шентюрк (Терещук). «Танець кульбабок»",
  "name": "Галан Ірина, 17.05.2010 р.н.",
  "id": {
    "$oid": "49463843854271"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/SysGvuc-AIo",
  "composition": "1. С. Борткевич. «Мрія»; 2. Е. Гріг. «Серце поета»",
  "name": "Гасратов Олексій, 24.08.2010 р.н.",
  "id": {
    "$oid": "49463843893832"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/aK3jaBSDt48",
  "composition": "1. Й.С. Бах. Двоголосна інвенція до мажор; 2. М. Мошковський. Етюд сі бемоль мажор",
  "name": "Герасименко Олександра, 01.06.2011 р.н.",
  "id": {
    "$oid": "49463843939155"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/l_44I_7RSTk",
  "composition": "1. Б. Фільц. «Меланхолійний вальс»; 2. Л. Іваненко. «Дощик»",
  "name": "Гладка Дарина, 31.01.2012 р.н.",
  "id": {
    "$oid": "49463843992401"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/lOTcBimymfY",
  "composition": "1. Й.С. Бах. Маленька прелюдія ре мінор; 2. Ф. Шопен. Cantabile",
  "name": "Гловацька Поліна, 15.12.2010 р.н.",
  "id": {
    "$oid": "49463844037024"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/OE5yQWtFWq4",
  "composition": "Й.С. Бах. Двоголосна інвенція ля мінор",
  "name": "Григоренко Марія, 13.09.2012 р.н.",
  "id": {
    "$oid": "49463844076555"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/0y6Umn2J7Hw",
  "composition": "М. Терещук (Шентюрк). «Пробудження» з циклу «Contrego»",
  "name": "Григоренко Марія, 13.09.2012 р.н.",
  "id": {
    "$oid": "49463844843314"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/x8z5WAwQaXs",
  "composition": "1. Л. Бетховен. Соната №20, тв.49, І частина; 2. О. Білаш. Баркарола",
  "name": "Дейнека Соломія, 19.05.2011 р.н.",
  "id": {
    "$oid": "49463844898365"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/YJTRfMlqwKE",
  "composition": "1. Ф. Кулау. Сонатина до мажор, тв.55, І частина; 2. Л. Волошина. «Зимовий ранок»",
  "name": "Дишлевий Євген, 30.01.2011 р.н.",
  "id": {
    "$oid": "49463844946127"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/bQ5kVuuua2w",
  "composition": "С. Людкевич. «Старовинна пісня»",
  "name": "Єрега Мар\u2019яна, 04.08.2012 р.н.",
  "id": {
    "$oid": "49463844983343"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/RilQDkgz1Xg",
  "composition": "М. Мордасов. «Давним давно»",
  "name": "Єрега Мар\u2019яна, 04.08.2012 р.н.",
  "id": {
    "$oid": "49463845014939"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/vCuH7rFtALc",
  "composition": "Л. Іваненко. Фантазія на тему української народної пісні «Гандзя»",
  "name": "Жегало Надія, 16.09.2012 р.н.",
  "id": {
    "$oid": "49463845050116"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/lFhOTWGnQps",
  "composition": "Б. Фільц. «Сумна пісня»",
  "name": "Жегало Надія, 16.09.2012 р.н.",
  "id": {
    "$oid": "49463845199135"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/UthIv-LwPp8",
  "composition": "Я. Бобалік. «Бурхливий водоспад»",
  "name": "Іванюк Вірсавія, 05.07.2010 р.н.",
  "id": {
    "$oid": "49463845243883"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/MAvoQAl1q6Y",
  "composition": "І. Щербаков. «Елегія київських пагорбів»",
  "name": "Іванюк Вірсавія, 05.07.2010 р.н.",
  "id": {
    "$oid": "49463845280268"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/3KsMFoZ2QzE",
  "composition": "В. Гіллок. Фламенго",
  "name": "Іванюк Маріам, 02.04.2013 р.н.",
  "id": {
    "$oid": "49463845306337"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/-MePEpXlfVU",
  "composition": "І. Беркович. Прелюдія №5 ре мажор",
  "name": "Іванюк Маріам, 02.04.2013 р.н.",
  "id": {
    "$oid": "49463845335774"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/ehMI9UfWynU",
  "composition": "Ф. Кулау. Сонатина №1",
  "name": "Канцер Богдана, 10.01.2012 р.н.",
  "id": {
    "$oid": "49463845383009"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/egCevoIZxz4",
  "composition": "М. Завадський. «Шумка»",
  "name": "Канцер Богдана, 10.01.2012 р.н.",
  "id": {
    "$oid": "49463845416953"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/Kpf_L47zjXk",
  "composition": "1. В. Квасневський. «Думка»; 2. Е. Гріг. «Поетична картинка» №1",
  "name": "Клімович Єлизавета, 12.10.2011 р.н.",
  "id": {
    "$oid": "49463845457811"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/Qj8phsWaDks",
  "composition": "Ю Щуровський, Баркарола",
  "name": "Ковальчук Анна, 14.11.2010 р.н.",
  "id": {
    "$oid": "49463845487439"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/Ou-NwUFU350",
  "composition": "Г. Сасько. Регтайм",
  "name": "Ковальчук Анна, 14.11.2010 р.н.",
  "id": {
    "$oid": "49463845513698"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/S6NYKOOdGMA",
  "composition": "1. Українська народна пісні в обробці С. Климовського «Їхав    козак за Дунай»; 2. Т. Петриненко, обробка М. Шентюрк. «Україна»",
  "name": "Колесниченко Марк, 25.05.2011 р.н.",
  "id": {
    "$oid": "49463845559393"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/W3hIUoKY7Z4",
  "composition": "М. Шентюрк (Терещук). «Вальс-каприс»",
  "name": "Кондратюк Вероніка, 14.09.2012 р.н.",
  "id": {
    "$oid": "49463845588365"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/feULMWozzqo",
  "composition": "М. Майєр. «Фарби осені»",
  "name": "Кондратюк Вероніка, 14.09.2012 р.н.",
  "id": {
    "$oid": "49463845616399"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/Z2Z7W0IfPqk",
  "composition": "1. Й.С. Бах. Алеманда з «Французької сюїти» мі бемоль мажор; 2. М. Лисенко. Мазурка до мінор",
  "name": "Коцирій Аріна, 20.08.2010 р.н.",
  "id": {
    "$oid": "49463845656444"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/7z6STyDoowg",
  "composition": "Л. Шукайло. Марш з сюїти «Цирк»",
  "name": "Кришталь Ян, 21.06.2012 р.н.",
  "id": {
    "$oid": "49463845698974"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/BRJ7qwf1uzc",
  "composition": "С. Сосніна. «Дракон»",
  "name": "Кришталь Ян, 21.06.2012 р.н.",
  "id": {
    "$oid": "49463845729526"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/ePDCw1DlCQg",
  "composition": "О. Яковчук. Полонез",
  "name": "Кулик Олеся, 16.01.2011 р.н.",
  "id": {
    "$oid": "49463845758974"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/yJg3KKvYLig",
  "composition": "Л. Бетховен. «До Елізи»",
  "name": "Кулик Олеся, 16.01.2011 р.н.",
  "id": {
    "$oid": "49463845789583"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/SYZXb8Y8dSQ",
  "composition": "1. Й.С. Бах. Триголосна інвенція ре мажор; 2. Ф. Шопен. Мазурка, тв.67 №2",
  "name": "Лащ Нана, 01.11.2010 р.н.",
  "id": {
    "$oid": "49463845824140"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/rLif17n9Pmk",
  "composition": "Р. Глієр. «Ескіз» ре мажор",
  "name": "Легкий Максим, 17.08.2011 р.н.",
  "id": {
    "$oid": "49463845917293"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/AZmggpzzHVE",
  "composition": "К. Дебюссі. «Маленьке негреня»",
  "name": "Легкий Максим, 17.08.2011 р.н.",
  "id": {
    "$oid": "49463845962608"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/1kSGsBAU39w",
  "composition": "1. В. Моцарт. Сонатина до мажор, І частина; 2. В. Шукайло. Інтермецо",
  "name": "Мазепа Софія, 30.03.2013 р.н.",
  "id": {
    "$oid": "49463845996408"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/08Ko68iMFZ0",
  "composition": "Б. Фільц. «Закарпатська новелета» №2",
  "name": "Максютинська Надія, 10.08.2010 р.н.",
  "id": {
    "$oid": "49463846024814"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/tbRGr008Shg",
  "composition": "В. Гіллок. «Карнавал в Ріо»",
  "name": "Максютинська Надія, 10.08.2010 р.н.",
  "id": {
    "$oid": "49463846059653"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/7P5K77MchLM",
  "composition": "Л. Шукайло. «Котик і мишка»",
  "name": "Мєнь Анастасія, 08.03.2013 р.н.",
  "id": {
    "$oid": "49463846086021"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/3jJCvV1b-9g",
  "composition": "А. Б\u2019єль. Сонатина",
  "name": "Мєнь Анастасія, 08.03.2013 р.н.",
  "id": {
    "$oid": "49463846109013"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/PCrRWHfNfJc",
  "composition": "М. Дворжак, «Джазовий етюд» №2 до мажор",
  "name": "Нішпал Єва, 09.05.2010 р.н.",
  "id": {
    "$oid": "49463846139878"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/hm0GqTd8cng",
  "composition": "В. Логін. «Ліричний прелюд»",
  "name": "Нішпал Єва, 09.05.2010 р.н",
  "id": {
    "$oid": "49463846172293"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/FWscCzcsVlQ",
  "composition": "М. Екштейн. «Каприз гномів»",
  "name": "Олійник Микита, 31.12.2011 р.н. (2 рік навчання)",
  "id": {
    "$oid": "49463846203455"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/wr_Zv2JgH-c",
  "composition": "І. Новікова. «Гострий ритм»",
  "name": "Олійник Микита, 31.12.2011 р.н. (2 рік навчання)",
  "id": {
    "$oid": "49463846243612"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/_qxByMmsFwo",
  "composition": "Кимлик. «Мініатюрна Леонтовіана»",
  "name": "Остапчук Христина, 18.08.2011 р.н.",
  "id": {
    "$oid": "49463846272378"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/C0emBbFYIS0",
  "composition": "К. Гардель. «Por una cabeza»",
  "name": "Остапчук Христина, 18.08.2011 р.н.",
  "id": {
    "$oid": "49463846329110"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/gL2pMVYNYGM",
  "composition": "К. Нільсен. «Годинник з музикою»",
  "name": "Панченко Зоряна, 05.02.2013 р.н.",
  "id": {
    "$oid": "49463846362381"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/DqNXKXRvN1s",
  "composition": "Р. Глієр. Прелюдія",
  "name": "Панченко Зоряна, 05.02.2013 р.н.",
  "id": {
    "$oid": "49463846389905"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/q2dpG2exKGc",
  "composition": "1. Й.С. Бах. Триголосна інвенція №11; 2. Е. Гріг. Етюд, тв. 73 №5 (пам\u2019яті Шопена)",
  "name": "Пасенчук Каріна, 02.03.2011 р.н.",
  "id": {
    "$oid": "49463846439247"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/PqwGsO8tU7U",
  "composition": "Г. Штьольцель-Й. Бах. Менует соль мінор",
  "name": "Паскар Натан, 07.09.2012 р.н.",
  "id": {
    "$oid": "49463846472187"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/wEpMjCWi84w",
  "composition": "Л. Шитте. «Танець гномів»",
  "name": "Паскар Натан, 07.09.2012 р.н.",
  "id": {
    "$oid": "49463846496121"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/6uvluWvQ9cY",
  "composition": "1. Ю. Ремезенко. «Ранок в тумані, птахи над морем»; 2. Т. Остен. «Сон ляльки»",
  "name": "Плисюк Вероніка, 21.10.2011 р.н.",
  "id": {
    "$oid": "49463846526549"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/CT1O5z6T_Cc",
  "composition": "Ф. Кулау. Варіації соль мажор",
  "name": "Подлевська Карина, 27.07.2010 р.н.",
  "id": {
    "$oid": "49463846556203"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/bjwwWdL-PxE",
  "composition": "М. Вербицький , обр. для ф-но Б. Шиптура «Ще не вмерла України»",
  "name": "Подлевська Карина, 27.07.2010 р.н.",
  "id": {
    "$oid": "49463846603685"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/oPUczWpGT4I",
  "composition": "Д. Циполі. Фегета",
  "name": "Проданчук Соня, 09.04.2013 р.н.",
  "id": {
    "$oid": "49463846630499"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/UODnXENJP7g",
  "composition": "О. Білаченко. «Дощовий ранок»",
  "name": "Проданчук Соня, 09.04.2013 р.н.",
  "id": {
    "$oid": "49463846656982"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/v3RyIihnM84",
  "composition": "К. Черні. Етюд №21, тв.299",
  "name": "Рагоза Карина, 15.07.2010 р.н.",
  "id": {
    "$oid": "49463846686587"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/2JDP6Zb6SE8",
  "composition": "С. Лозбін. Концертний вальс «Наближення»",
  "name": "Рагоза Карина, 15.07.2010 р.н.",
  "id": {
    "$oid": "49463846717406"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/dGHFoiafREw",
  "composition": "О. Білаченко, Сонатина ре мажор",
  "name": "Романова Катерина, 14.07.2011 р.н.",
  "id": {
    "$oid": "49463846743411"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/SBnelOV2iIk",
  "composition": "М. Шентюрк (Терещук). Експромт",
  "name": "Романова Катерина, 14.07.2011 р.н.",
  "id": {
    "$oid": "49463846766575"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/IBoHRB46pHQ",
  "composition": "О. Гедіке. Сонатина до мажор",
  "name": "Сєргєєва Яна, 25.09.2012 р.н.",
  "id": {
    "$oid": "49463846802016"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/gUgsXwZUChM",
  "composition": "Е. Вольф. «Літній вітерець»",
  "name": "Сєргєєва Яна, 25.09.2012 р.н.",
  "id": {
    "$oid": "49463846830906"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/AkhJZKIlBiU",
  "composition": "Ф. Шпіндлер. Сонатина №1, І частина",
  "name": "Сільковська Єва, 28.07.2012 р.н.",
  "id": {
    "$oid": "49463846854534"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/TYwLSqd-aOQ",
  "composition": "Ю. Щуровський. «Шарманка»",
  "name": "Сільковська Єва, 28.07.2012 р.н.",
  "id": {
    "$oid": "49463846880373"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/vJPvIsEvfqg",
  "composition": "Л. Ревуцький. Пісня2. К. Черні. Етюд, тв. 219, №15",
  "name": "Скороходько Євгенія, 24.07.2010 р.н.",
  "id": {
    "$oid": "49463846907266"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/Yage2KFEoLs",
  "composition": "Ф. Ліст. «Юнацький етюд» №1",
  "name": "Смірнова Євгенія, 03.03.2012 р.н.",
  "id": {
    "$oid": "49463846944629"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/wQXtWMy6Srw",
  "composition": "М. Ластовецький. «І задзвонили дзвони \u2026»  №5 з циклу «12 Раціональних ескізів в додекафонній техніці для фортепіано»",
  "name": "Смірнова Євгенія, 03.03.2012 р.н.",
  "id": {
    "$oid": "49463846982092"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/Tr28H66VeYk",
  "composition": "Ж.-М. Арно. «Rengaine»",
  "name": "Сухан Діана, 05.12.2012 р.н.",
  "id": {
    "$oid": "49463847005569"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/y70ZwK_YDek",
  "composition": "Г. Классен. «Вальсик»",
  "name": "Сухан Діана, 05.12.2012 р.н.",
  "id": {
    "$oid": "49463847030773"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/og7HeEOvdgw",
  "composition": "Г. Без\u2019язичний. «Ой, у вишневому саду»",
  "name": "Тарасюк Єлизавета, 20.02.2012 р.н.",
  "id": {
    "$oid": "49463847064515"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/5DciRwzSOLY",
  "composition": "Ю. Весняк. «Казочка»",
  "name": "Тарасюк Єлизавета, 20.02.2012 р.н.",
  "id": {
    "$oid": "49463847083692"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/3WGWA6qy1nM",
  "composition": "І. Волков. «Під дощем»",
  "name": "Федорова Вікторія, 07.01.2013 р.н.",
  "id": {
    "$oid": "49463847104151"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/nsC7yPPqqeM",
  "composition": "Т. Хаслінгер. Сонатина до мажор",
  "name": "Федорова Вікторія, 07.01.2013 р.н.",
  "id": {
    "$oid": "49463847126999"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/rDLxvN_KPDQ",
  "composition": "1. Ф. Бургмюллер. «Весняний капіж»; 2. Ю. Щуровський. Танець",
  "name": "Федюк Гліб, 05.07.2012 р.н.",
  "id": {
    "$oid": "49463847154736"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/hLe8Gg2H_L8",
  "composition": "1. Г. Без\u2019язичний. «Русалонька»",
  "name": "Хвостова Віра, 27.04.2013 р.н.",
  "id": {
    "$oid": "49463847178835"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/fydxJ1CA8MA",
  "composition": "2. Л. Іваненко. «Бабуся-Ягуся»",
  "name": "Хвостова Віра, 27.04.2013 р.н.",
  "id": {
    "$oid": "49463847212252"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/YoMfMatGkhw",
  "composition": "Й. Гайдн. Рондо до мажор",
  "name": "Хомік Кіра, 12.03.2011 р.н.",
  "id": {
    "$oid": "49463847238988"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/YfJu_wsWg68",
  "composition": "О. Білаченко. Вальс",
  "name": "Хомік Кіра, 12.03.2011 р.н.",
  "id": {
    "$oid": "49463847256641"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/lUz0zMhBkCM",
  "composition": "Г.Ф. Гендель. Сонатина сі бемоль мажор",
  "name": "Черняк Марія, 26.09.2012 р.н.",
  "id": {
    "$oid": "49463847282878"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/NJ-RiVo5Zak",
  "composition": "А. Лазаренко. Коломийки",
  "name": "Черняк Марія, 26.09.2012 р.н.",
  "id": {
    "$oid": "49463847302524"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/hHxikFbZtFA",
  "composition": "Ф. Шопен. Полонез соль мінор",
  "name": "Чорней Яна, 09.10.2010 р.н.",
  "id": {
    "$oid": "49463847324625"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/wlPeU9uoBBs",
  "composition": "Л. Бетховен. Сонатина мі бемоль мажо",
  "name": "Чорней Яна, 09.10.2010 р.н.",
  "id": {
    "$oid": "49463847347061"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/W0Xc24xQj0I",
  "composition": "1. Й.С. Бах. Двоголосна інвенція ля мінор; 2. П. Захарова. «Вперше на арені»",
  "name": "Якименко Єлизавета, 23.10.2010 р.н.",
  "id": {
    "$oid": "49463847376076"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/CGLokOBsgyw",
  "composition": "1. М. Лисенко. «Сумний спів»; 2. А. Хачатурян. «Музична картина»",
  "name": "Ямпольська Дар\u2019я, 14.06.2010 р.н.",
  "id": {
    "$oid": "49463847398502"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/yzJF1-YIAs4",
  "composition": "1. Ф. Мендельсон. «Пісня без слів», тв.30; 2. Л. Забара. Фантазія на тему української народної пісні «Ніч яка місячна»",
  "name": "Акімова Кіра, 31.01.2009 р.н.",
  "id": {
    "$oid": "49463848233733"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/sp_utk7Sexs",
  "composition": "1. Й. Гайдн. Соната ре мажор, І частина; 2. І. Шамо. «Веснянка»",
  "name": "Бокоч Артем, 21.09.2008 р.н.",
  "id": {
    "$oid": "49463848273834"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/rHSg0qYE4Eo",
  "composition": "1. Й.С. Бах. Алеманда з Партити до мінор; 2. Ф. Шопен. Ноктюрн до дієз мінор",
  "name": "Борейко Роман, 11.01.2010 р.н.",
  "id": {
    "$oid": "49463848299319"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/q_eAg80xC8U",
  "composition": "1. Й.С. Бах. Хорал з кантати №147 «Jesus bleibet meine Freude»; 2. І. Шамо. Прелюдія №8 «Andante, Quasi campana»",
  "name": "Верзун-Ролінгер Тереза, 09.10.2009 р.н.",
  "id": {
    "$oid": "49463848320886"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/1OXyLRQfy1A",
  "composition": "Л. Шітте. Етюд №22, тв.68",
  "name": "Германюк Софія, 21.12.2007 р.н.",
  "id": {
    "$oid": "49463848338505"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/CRucrUMQc9Q",
  "composition": "Українська народна пісня в обробці О. Саратського «Цвіте  терен»",
  "name": "Германюк Софія, 21.12.2007 р.н.",
  "id": {
    "$oid": "49463848364079"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/-WCCG7psLus",
  "composition": "Українська народна пісня в обробці Г. Без\u2019язичного «Ой, у   вишневому саду»",
  "name": "Гомілко Анастасія, 08.03.2008 р.н.",
  "id": {
    "$oid": "49463848427443"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/PFtr7rwgvpI",
  "composition": "Ф. Кулау, Сонатина №1, тв.20",
  "name": "Гомілко Анастасія, 08.03.2008 р.н.",
  "id": {
    "$oid": "49463848449118"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/8HBVBsTbChc",
  "composition": "Ф. Шопен. Ноктюрн  мі бемоль мажор",
  "name": "Гресько Марія, 22.06.2009 р.н.",
  "id": {
    "$oid": "49463848469075"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/pzwLeJXVgns",
  "composition": "О. Білаш. «Гуцульська писанка»",
  "name": "Гресько Марія, 22.06.2009 р.н.",
  "id": {
    "$oid": "49463848591653"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/ektnCnL6yGU",
  "composition": "М. Мошковський. Етюд №6, тв. 72",
  "name": "Гриник Діана, 19.0.2006 р.н.",
  "id": {
    "$oid": "49463848623482"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/kFCWX_mVtQ4",
  "composition": "О. Козаренко. Вальс",
  "name": "Гриник Діана, 19.0.2006 р.н.",
  "id": {
    "$oid": "49463848697711"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/JKqGLVJBsLk",
  "composition": "Д. Щириця. «Український етюд»",
  "name": "Грушковська Валерія, 17.01.2010 р.н.",
  "id": {
    "$oid": "49463848816103"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/GOhPa_AGxuo",
  "composition": "Л. Іваненко. «Ей Люлі же мі, люлю»",
  "name": "Грушковська Валерія, 17.01.2010 р.н.",
  "id": {
    "$oid": "49463848865396"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/Na1AqogGZWc",
  "composition": "1. Й.С. Бах. Триголосна інвенція ре мінор; 2. І. Шамо. «Веснянка»",
  "name": "Діденко Дар\u2019я, 20.05.2009 р.н.",
  "id": {
    "$oid": "49463848944518"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/NMl5mCYes08",
  "composition": "Е. Брилін. Токата",
  "name": "Дудич Ольга, 14.10.2009 р.н.",
  "id": {
    "$oid": "49463849014844"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/Mu-pBYdtoXY",
  "composition": "Ф. Мендельсон. «Пісня без слів»",
  "name": "Дудич Ольга, 14.10.2009 р.н.",
  "id": {
    "$oid": "49463849048260"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/jfrrf0-uzQg",
  "composition": "О. Дюбюк. «Дзиґа»",
  "name": "Єрошкіна Анна, 08.11.2008р.н.",
  "id": {
    "$oid": "49463849488428"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/36tP_qLEZkQ",
  "composition": "Ф. Ліст. «Втіха» №2",
  "name": "Єрошкіна Анна, 08.11.2008р.н.",
  "id": {
    "$oid": "49463849520720"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/2SpkICd4wGg",
  "composition": "О. Бордюгова. «Український романс»",
  "name": "Жарій Софія, 18.08.2009р.н.",
  "id": {
    "$oid": "49463849537867"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/MQ08hvVGFAw",
  "composition": "М. Колесса. Коломийка фа мінор",
  "name": "Жарій Софія, 18.08.2009р.н.",
  "id": {
    "$oid": "49463849574411"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/2S-2IGaIlTM",
  "composition": "Х. Альфвен. «Сонячні зайчики» з циклу «Картинки Шхер»,тв.17 №1",
  "name": "Канська Анастасія, 23.07.2009р.н.",
  "id": {
    "$oid": "49463849594615"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/LG4a2ouE4z4",
  "composition": "Я. Бобалік. «Бурхливий водоспад»",
  "name": "Канська Анастасія, 23.07.2009р.н.",
  "id": {
    "$oid": "49463849611045"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/YKeKkDPLjyQ",
  "composition": "Г. Ліхнер. Рондо «Вдома»",
  "name": "Католик Дарина, 01.09.2009 р.н.",
  "id": {
    "$oid": "49463849631558"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/63FLGaYxSHA",
  "composition": "М. Майєр. «Індіанська серенада»",
  "name": "Католик Дарина, 01.09.2009 р.н.",
  "id": {
    "$oid": "49463849657419"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/cDynzX-OPYk",
  "composition": "С. Чернецький, аранж. О. Шавардака.». Ой, у лузі червона калина»",
  "name": "Кісарець Іван, 24.04.2009 р.н.",
  "id": {
    "$oid": "49463849682185"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/ftFvLXTX29U",
  "composition": "М. Дворжак. «Джазовий етюд» №1 до мажор",
  "name": "Кісарець Іван, 24.04.2009 р.н.",
  "id": {
    "$oid": "49463849701356"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/NHTBv1jGBcY",
  "composition": "А. Кореллі. Сарабанда мі мінор",
  "name": "Кічук Роман, 29.10.2008 р.н.",
  "id": {
    "$oid": "49463849718686"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/aZOTWN7L0j0",
  "composition": "І. Мохначева. «Літній вечір»",
  "name": "Кічук Роман, 29.10.2008 р.н.",
  "id": {
    "$oid": "49463849740561"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/0AUNHt52-3U",
  "composition": "1. С. Жданов. Прелюд; 2. А. Бабаджанян. «Вагаршапатський танець»",
  "name": "Клімович Давид, 09.07.2009 р.н.",
  "id": {
    "$oid": "49463849778349"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/QHdrQkzUTzU",
  "composition": "М. Шентюрк (Терещук). Рапсодія «До світла»",
  "name": "Копиченська Дар\u2019я, 30.04.2009 р.н.",
  "id": {
    "$oid": "49463849801238"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/NMqx2oU_vfs",
  "composition": "М. Шентюк (Терещук). «Сльози»",
  "name": "Копиченська Дар\u2019я, 30.04.2009 р.н.",
  "id": {
    "$oid": "49463849818798"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/-j3xD0y9hiY",
  "composition": "1. Й.С. Бах. Прелюдія і фуга до мінор, ДТК-І; 2. Ф. Шопен. Ноктюрн до дієз мінор",
  "name": "Кравчук Марія, 14.06.2008 р.н.",
  "id": {
    "$oid": "49463849865569"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/QX936YZe7JM",
  "composition": "О. Білаш. «Гуцульська писанка»",
  "name": "Крутенко Дарина, 10.11.2009 р.н.",
  "id": {
    "$oid": "49463849897997"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/FmDkVvUMRyM",
  "composition": "Т. Афанасенко. «Лебідь»",
  "name": "Крутенко Дарина, 10.11.2009 р.н.",
  "id": {
    "$oid": "49463849921470"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/pM150qdBAMg",
  "composition": "І. Шамо. «Весняний дощ» із циклу «Гуцульські акварелі»",
  "name": "Левчук Тимофій, 19.11.2008 р.н.",
  "id": {
    "$oid": "49463850053749"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/d_pfgbco35I",
  "composition": "І. Беркович. Прелюдія мі мажор",
  "name": "Левчук Тимофій, 19.11.2008 р.н.",
  "id": {
    "$oid": "49463850108252"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/59GWV5_r-qw",
  "composition": "Г. Гендель-Ю. Хальворсен. Пасакалія ля мінор",
  "name": "Магдисюк Вікторія, 23.10.2008 р.н.",
  "id": {
    "$oid": "49463850139810"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/fpmaHZg46Dg",
  "composition": "М. Дремлюга. «Лірична пісня»",
  "name": "Магдисюк Вікторія, 23.10.2008 р.н.",
  "id": {
    "$oid": "49463850157110"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/So_6q1mvlcc",
  "composition": "1. Л. Шукайло. «Токата-Кампана»; 2. Ф. Шопен. «Фантазія-експромт» до дієз мінор",
  "name": "Малярчук Єлізавета, 24.08.2009 р.н.",
  "id": {
    "$oid": "49463850177346"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/tcDVmn-A0cs",
  "composition": "Й. Гайдн. Соната мі мінор, І частина",
  "name": "Мартинишин Владислав, 08.06.2006 р.н.",
  "id": {
    "$oid": "49463850225956"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/HnDqDfhvYTg",
  "composition": "О. Лис. «Легенда»",
  "name": "Мартинишин Владислав, 08.06.2006 р.н.",
  "id": {
    "$oid": "49463850263208"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/mfo8X5DQdM4",
  "composition": "С. Борткевич. Етюд, тв.15 №9",
  "name": "Махніцька Владислава, 03.11.2008 р.н.",
  "id": {
    "$oid": "49463850330285"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/_mHbxYjXVuo",
  "composition": "Н. Нижанківський. Вальс до дієз мінор",
  "name": "Махніцька Владислава, 03.11.2008 р.н.",
  "id": {
    "$oid": "49463850355825"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/DYAyPDjeDDo",
  "composition": "Й. С. Бах. Триголосна інвенція ре мажор",
  "name": "Мещеряков Костянтин, 08.08.2008 р.н.",
  "id": {
    "$oid": "49463850375419"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/1BJArCv39_A",
  "composition": "С. Борткевич. «Прогулянка Алупкою-Східна ідилія» з циклу «Кримські ескізи»",
  "name": "Мещеряков Костянтин, 08.08.2008 р.н.",
  "id": {
    "$oid": "49463850411868"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/9x-yL2nLTac",
  "composition": "1. Ф. Шопен. Вальс, тв. 69 №2; 2. М. Лисенко. Експромт",
  "name": "Місерук Маріанна, 19.08.2007 р.н.",
  "id": {
    "$oid": "49463850430610"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/Md8tyQEP3Ig",
  "composition": "1. Л. Ревуцький. Пісня; 2. І. Мохначова. Етюд-картина «Море»",
  "name": "Мох Надія, 01.10.2008 р.н.",
  "id": {
    "$oid": "49463850447646"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/RO4xKftzrx8",
  "composition": "1. Й. Гайдн. «Угорське рондо» з «Фортепіанного тріо» соль мажор; 2. І. Беркович. Прелюд фа дієз мінор",
  "name": "Опанасюк Кароліна, 05.07.2009 р.н.",
  "id": {
    "$oid": "49463850483288"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/a9wK8MxX9zM",
  "composition": "1. Ф. Шопен. Фантазія-експромт до дієз мінор; 2. А. Хачатурян. Токата",
  "name": "Опанасюк Тарас, 13.10.2007 р.н.",
  "id": {
    "$oid": "49463850521895"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/pJSayYXJQz4",
  "composition": "Ю. Щуровський. «Осіння пісня»",
  "name": "Опаряк Ірина, 30.04.2009 р.н.",
  "id": {
    "$oid": "49463850541015"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/dDOp8M7bDak",
  "composition": "Г. Гендель. Капричіо",
  "name": "Опаряк Ірина, 30.04.2009 р.н.",
  "id": {
    "$oid": "49463850557440"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/_wnM565vWb8",
  "composition": "1. З. Фібіх. Поема; 2.К. Дебюссі. «Ляльковий кек-уок»",
  "name": "Остапенко Анна, 26.08.2009 р.н. (2-ий рік навчання)",
  "id": {
    "$oid": "49463850573971"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/tIBHZMVb6Oo",
  "composition": "К. Черні. Етюд №15, тв.299",
  "name": "Панченко Софія, 08.0.2009 р.н.",
  "id": {
    "$oid": "49463850614343"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/mGPtUUdr4Qo",
  "composition": "І. Шамо. «Гумореска»",
  "name": "Панченко Софія, 08.0.2009 р.н.",
  "id": {
    "$oid": "49463850636604"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/qfc8tf6nM1Y",
  "composition": "В. Працюк. «Навесні»",
  "name": "Плешко Ігнатій, 23.10.2009 р.н.",
  "id": {
    "$oid": "49463850649379"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/ETlCVJZ5s9Q",
  "composition": "Ф. Ліст. «Втіха» №2",
  "name": "Плешко Ігнатій, 23.10.2009 р.н.",
  "id": {
    "$oid": "49463850664111"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/-V3t2fmSvfQ",
  "composition": "Й.С. Бах. Триголосна інвенція мі мінор",
  "name": "Радковська Аліна, 30.07.2017 р.н.",
  "id": {
    "$oid": "49463850679621"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/C_6Axnz2OMA",
  "composition": "Е. Гріг. «Імпровізація»",
  "name": "Радковська Аліна, 30.07.2017 р.н.",
  "id": {
    "$oid": "49463850705180"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/D5xBH5Tuh3Q",
  "composition": "Ф. Якименко. «Мрії на березі моря»",
  "name": "Редька Поліна,16.12.2009р.н.",
  "id": {
    "$oid": "49463850723050"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/gwIWbLXC67k",
  "composition": "Г. Без\u2019язичний. Етюд №17 «Буревісник»",
  "name": "Редька Поліна,16.12.2009р.н.",
  "id": {
    "$oid": "49463850746102"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/6cS6hnR8rKg",
  "composition": "1. Ф. Кулау. Сонатина №1, тв.60; 2. К. Вік. Полонез",
  "name": "Робуляк Микола,04.05.2010р.н.",
  "id": {
    "$oid": "49463850766781"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/PI98GVd9gKs",
  "composition": "Й.С. Бах. Двоголосна інвенція №8, фа мажор",
  "name": "Рупа Альберт, 31.05.2007 р.н.",
  "id": {
    "$oid": "49463850796392"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/vHZQB9uKwFs",
  "composition": "О. Нежигай. «Прохання»",
  "name": "Рупа Альберт, 31.05.2007 р.н.",
  "id": {
    "$oid": "49463850813462"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/irY4dbbKdA8",
  "composition": "М. Скорик. «Мелодія»",
  "name": "Саврай Катерина, 04.07.009 р.н.",
  "id": {
    "$oid": "49463850830819"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/JjoZwgWUyGM",
  "composition": "І. Беркович. Токата ля мінор",
  "name": "Саврай Катерина, 04.07.009 р.н.",
  "id": {
    "$oid": "494638508308119"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/Yv9Yvs0fd3E",
  "composition": "1. К. Лавалле. Концертний етюд «Метелик»; 2. І. Беркович. Токата ля мінор",
  "name": "Слободянюк Маргарита, 22.09.2008 р.н.",
  "id": {
    "$oid": "49463850844279"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/xRMkLWBbVcA",
  "composition": "В. Моцарт. Соната сі бемоль мажор, І частина",
  "name": "Ткаченко Аміна, 03.03.2009 р.н.",
  "id": {
    "$oid": "49463850863215"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/xNr4qmNFAvo",
  "composition": "П. Захаров. Токата-прелюдія",
  "name": "Ткаченко Аміна, 03.03.2009 р.н.",
  "id": {
    "$oid": "49463850876883"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/gFE1F1Hy7GQ",
  "composition": "Й.Б. Ванхаль. Allegro із Сонатини ля мажор",
  "name": "Троценко Анна, 12.06.2008 р.н.",
  "id": {
    "$oid": "49463850890750"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/EzbbARksXlE",
  "composition": "А. Комлікова. «Машина часу» (Інвенція з циклу «Інтервалія»)",
  "name": "Троценко Анна, 12.06.2008 р.н.",
  "id": {
    "$oid": "49463850904548"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/BkoLetJSMJg",
  "composition": "Л. Бетховен. Сонатина фа мажор",
  "name": "Турчик Софія, 18.05.2009 р.н.",
  "id": {
    "$oid": "49463850922831"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/05UlWKhTt58",
  "composition": "Е. Гріг. Вальс",
  "name": "Турчик Софія, 18.05.2009 р.н.",
  "id": {
    "$oid": "49463850946101"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/yNovz6UHTY0",
  "composition": "В. Верменич, обробка Г. Без\u2019язичного. «Чорнобривці»",
  "name": "Федоренко Єлизавета, 0.09.2008 р.н.",
  "id": {
    "$oid": "49463850959154"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/lIqtFtmqXgw",
  "composition": "М. Клементі. Сонатина №3, соль мажор",
  "name": "Федоренко Єлизавета, 0.09.2008 р.н.",
  "id": {
    "$oid": "49463850972481"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/BftkJayxUWU",
  "composition": "1. Л. Сухощеєва. Етюд; 2. О. Кимлик. «Мініатюрна Леонтовіана»",
  "name": "Чмелюк Анна,22.05.2009р.н.",
  "id": {
    "$oid": "49463851019971"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/1TKCgrWAjwA",
  "composition": "Й.С. Бах. Прелюдія і фуга соль мінор з ДТК-І",
  "name": "Шевчук Ніколетта, 26.04.2009 р.н.",
  "id": {
    "$oid": "49463851416376"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/wgc_kLIIi6g",
  "composition": "С. Борткевич. Етюд фа дієз мінор",
  "name": "Шевчук Ніколетта, 26.04.2009 р.н.",
  "id": {
    "$oid": "49463851439109"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/27MRJsZUufA",
  "composition": "Й.С. Бах. Прелюдія і фуга соль мінор з ДТК-І",
  "name": "Янчук Валерія, 10.06.2007 р.н.",
  "id": {
    "$oid": "49463851450880"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/trFPA1Jxxas",
  "composition": "Й. Гайдн. Соната ре мажор, І частина",
  "name": "Янчук Валерія, 10.06.2007 р.н.",
  "id": {
    "$oid": "49463851467678"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/xbJtxe2S600",
  "composition": "Е. Гріг. «Серце поета»",
  "name": "Біла Ксенія, 15.01.2005 р.н",
  "id": {
    "$oid": "49463851477944"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/0N_xV3U5G80",
  "composition": "І. Крамер. Етюд №5, ля мінор",
  "name": "Біла Ксенія, 15.01.2005 р.н",
  "id": {
    "$oid": "49463851491981"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/gcL5IbXixSE",
  "composition": "1. Ф. Шопен. Ноктюрн №2, тв. 9; 2. А. Штогаренко. Поема (присвячується М.Т. Коляді)",
  "name": "Бондаренко Денис, 28.01.2006 р.н.",
  "id": {
    "$oid": "49463851504942"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/wY9WDih_nvc",
  "composition": "М. Лисенко. «Пісня без слів»",
  "name": "Воронцова Діана, 25.02.2005 р.н.",
  "id": {
    "$oid": "49463851584588"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/DXvwsOBamJc",
  "composition": "Ф. Мендельсон. «Фантазія-каприс»",
  "name": "Воронцова Діана, 25.02.2005 р.н.",
  "id": {
    "$oid": "49463851612446"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/pE7P9M1iXRo",
  "composition": "1. Б. Лятошинський. Прелюдія тв.44 №4; 2. Ф.Ліст.«Женевські дзвони» з циклу «Роки мандрівок. Швейцарія»",
  "name": "Грушко Анастасія, 18.01.2006",
  "id": {
    "$oid": "49463851628278"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/JHqajp5YPqg",
  "composition": "1. К. Дебюссі. Арабеска №2; 2. С. Борткевич. Етюд №2, тв.15",
  "name": "Гултурян Поліна, 11.10.2006 р.н",
  "id": {
    "$oid": "49463851641314"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  // <iframe width="469" height="264" src="https://www.youtube.com/embed/UEiWcFRcPRw" title="М. Колесса &quot;Три коломийки&quot;." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  "videoUrl": "https://www.youtube.com/embed/UEiWcFRcPRw",
  "composition": "М. Колесса. «Три коломийки»",
  "name": "Дашевська Альона, 04.04.2005 р.н.",
  "id": {
    "$oid": "49463851651076"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/LXO77cqrCYw",
  "composition": "1. В. Косенко. Етюд фа дієз мінор, тв.8; 2. Р. Шуман. «Порив» із циклу «Фантастичні п\u2019єси»",
  "name": "Желязко Софія, 30.09.2006 р.н.",
  "id": {
    "$oid": "49463851668373"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/kCUxj-9RE3g",
  "composition": "Ф. Шопен. Полонез №1, тв.40",
  "name": "Назарук Ірина, 30.04.2004 р.н.",
  "id": {
    "$oid": "49463851677807"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/Rj0Twd7Ncw4",
  "composition": "М. Колесса. «Контрасти» з циклу «Картини Гуцульщини»",
  "name": "Назарук Ірина, 30.04.2004 р.н.",
  "id": {
    "$oid": "49463851691686"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/NmWNVs8QKwA",
  "composition": "1. Ф. Шопен. Полонез, тв.40 №2; 2. Ф. Шопен. Колискова, тв.57",
  "name": "Очкуренко Анжеліка, 02.10.2004 р.н.",
  "id": {
    "$oid": "49463851704002"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/YfU6GaRdP2A",
  "composition": "Ф. Шопен. Полонез соль дієз мінор",
  "name": "Пастушок Дарина, 07.02.2007 р.н.",
  "id": {
    "$oid": "49463851720181"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/_wB0gI_sNyY",
  "composition": "В. Барвінський. Прелюдія фа мажор",
  "name": "Пастушок Дарина, 07.02.2007 р.н.",
  "id": {
    "$oid": "49463851731038"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/WKr6YYC7rQw",
  "composition": "1. А. Коломієць. Етюд-експромт ля бемоль мажор, тв.2; 2. Ф. Шопен. Полонез №1, тв. 26",
  "name": "Собко Анна-Дарина, 22.12.2003 р.н.",
  "id": {
    "$oid": "49463851743942"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/p6RKAiw5xDs",
  "composition": "1. Е. Гріг. «З юних днів», тв.65; 2. Ф. Шуберт. Експромт №2, тв.90",
  "name": "Тимчук Аня, 07.08.2006 р.н.",
  "id": {
    "$oid": "49463851762304"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/kKYjehMcx0E",
  "composition": "1. Р. Шуман. «Віденський карнавал», тв.26: І. Allegro; 2. Ю. Іщенко. Прелюдія №14 мі бемоль мінор",
  "name": "Турська Марія, 11.04.2005 р.н.",
  "id": {
    "$oid": "49463851782144"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/2DO9o_3OHwE",
  "composition": "1. Р. Шуман. Новелетта №1, тв.21; 2. С. Шамінад. Креольський танець, тв.94",
  "name": "Філімончук Ернест, 20.02.2005 р.н.",
  "id": {
    "$oid": "49463851805448"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/nYIDFqUlz0I",
  "composition": "1. Л. Ревуцький. Прелюдія сі бемоль мінор; 2. К. Дебюссі. Дві арабески",
  "name": "Хрипко Єлизавета, 19.07.2006 р.н.",
  "id": {
    "$oid": "49463851827948"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/C22SLgWADec",
  "composition": "1. Е. Гріг. Імпровізація на дві норвезькі народні пісні, тв.29; 2. К. Деюссі. Етюд №11",
  "name": "Боднарчук Іванна, 19.01.2004 р.н.",
  "id": {
    "$oid": "49463851844347"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/kuwFNb83wGM",
  "composition": "Ян Сібеліус. Етюд ля мінор",
  "name": "Ден Ай, 26.01.1997 р.н.",
  "id": {
    "$oid": "49463851860570"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/9XQIpzitm9E",
  "composition": "С. Борткевич. Прелюдія №3, тв.3",
  "name": "Ден Ай, 26.01.1997 р.н.",
  "id": {
    "$oid": "49463851873375"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/0zUA_2ik2Uk",
  "composition": "1. Л. Бетховен. Соната №24, тв. 78; 2. М. Лисенко. Рапсодія на українські теми «Думка-шумка», тв.18 №2",
  "name": "Кучерява Марина, 17.08.2000 р.н.",
  "id": {
    "$oid": "49463851888511"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/tsqRe_YNiRk",
  "composition": "1. М. Скорик. Арія з Партити №5; 2. С. Борткевич. Етюд, тв.15 №9",
  "name": "Матвійчук Ірина, 27.05.2003 р.н.",
  "id": {
    "$oid": "49463851901938"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/Qw8HwtQYvJA",
  "composition": "Й. Брамс. Рапсодія №2, тв.79",
  "name": "Присакару Надія, 14.02.2002 р.н.",
  "id": {
    "$oid": "49463851915780"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/dOAQKn_YBAc",
  "composition": "В. Косенко. Етюд фа дієз мінор",
  "name": "Присакару Надія, 14.02.2002 р.н.",
  "id": {
    "$oid": "49463851931951"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/OppvQHNmaAc",
  "composition": "Ф. Шуберт. Клавірштюк, D 946 №1 Allegro assai, №2 Allegretto, №3 Allegrо",
  "name": "Сасюк Юлія, 15.06.2000 р.н.",
  "id": {
    "$oid": "49463851944928"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/idEZAASqVIE",
  "composition": "Ф. Ганіцький. «Урочистий полонез»",
  "name": "Нікітіна І.Р.",
  "id": {
    "$oid": "49463851955485"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/wHWzcObokFg",
  "composition": "І. Якушенко. «Сінематограф»",
  "name": "Нікітіна І.Р.",
  "id": {
    "$oid": "49463851966823"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/embed/E8MWSvLIwUU",
  "composition": "1. К. Дебюссі. «Місячне сяйво»; 2. К. Бадельт, аранж. Д. Раднича. «Пірати Карибського моря»",
  "name": "Севастьянова О.Є.",
  "id": {
    "$oid": "49463851988188"
  },
  "group": "Номінація \"Фортепіано соло\""
}];

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzExNjMwMjMucG5nIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZm9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVndWxhckhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzdWx0c0ZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3MvUG9zdGVyXzIwMjNfdWEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL2p1ZGdlc18yMDIzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3MvcG9zdGVyXzIwMjNfZW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Jmcy1wYWdlLWltZ3MvcmZzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvVXNlV2luZG93RGltZW5zaW9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvQWRkaXRpb25hbEluc3RydW1lbnRzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvQXJjaGl2ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL0NhcmRTdG9yZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL0Vuc2VtYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvRm9ydGVwaWFub1NvbG8uanN4Il0sIm5hbWVzIjpbIkFwcCIsImNhcmRTdG9yZSIsIkZpbG1XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiRmlsbUluZm8iLCJJZnJhbWVCb3giLCJpZnJhbWUiLCJwcm9wcyIsIndpZHRoIiwiQnV0dG9uIiwiYnV0dG9uIiwiQ2FyZCIsImhlaWdodCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJjYWxjdWxhdGVkV2lkdGgiLCJzZXRDYWxjdWxhdGVkV2lkdGgiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm5hbWUiLCJjb21wb3NpdGlvbiIsInZpZGVvVXJsIiwic2hvd0lmcmFtZSIsInNldFNob3dJZnJhbWUiLCJvcGVuVmlkZW9CdXR0b25OYW1lIiwic2V0T3BlblZpZGVvQnV0dG9uTmFtZSIsIm9wZW5WaWRlb0hhbmRsZXIiLCJMaW5rQ29udGFpbmVyIiwiV3JhcHBlciIsImxvZ28iLCJQZXJzb25JbmZvU2VjdGlvbiIsIlBlcnNvbiIsIlRleHRTZWN0aW9uIiwiSW1hZ2UiLCJpbWciLCJpbWdVcmwiLCJ0ZXh0IiwiRGl2IiwiRGl2MSIsIkEiLCJhIiwiQTEiLCJQIiwiUG9zdGVyIiwiUG9zdGVySW1nIiwiSW5mb1BhZ2UyIiwicG9zdGVyXzIiLCJJbmZvUGFnZSIsInBvc3Rlcl8xIiwicG9zdGVyXzMiLCJqdWRnZXNfMjAyMyIsIkNvbW1vbldyYXBwZXIiLCJNYWluU2VjdGlvbkZsZXgiLCJNYWluU2VjdGlvbiIsImNhcmRzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImlzRGF0YUluUGxhY2UiLCJjYXJkQ291bnQiLCJzZWN0aW9uc0ZvckZpbHRlciIsImluZm9QYWdlIiwibWFwIiwiY2FyZCIsImlkIiwiJG9pZCIsIklucHV0IiwiaW5wdXQiLCJpbnB1dENvbG9yIiwiSW5wdXRTdHlsZSIsIklucHV0V3JhcGVyIiwiU3R5bGVkU3BhbiIsInNwYW4iLCJFcnJvciIsIldhcm4iLCJSZWd1bGFySGVhZGVyIiwic2VhcmNoRmllbGQiLCJ1c2VSZWYiLCJlcnJvciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJoYW5kbGVyIiwic3RyIiwiU3RyaW5nIiwiY3VycmVudCIsInZhbHVlIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJ0eXBlIiwibXNnIiwicXVlcnkiLCJoYW5kbGVLZXlQcmVzcyIsImV2ZW50Iiwia2V5IiwiRmlsdGVyQ29udGFpbmVyIiwiRmlsdGVyU2VjdGlvbiIsIkRpdlRoaW5MaW5lIiwiU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXIiLCJncm93XzAiLCJrZXlmcmFtZXMiLCJsZWZ0IiwiZ3Jvd18xIiwiVGhpbkxpbmVJbm5lckRpdiIsImFuaW1hdGlvbiIsIlJlc3VsdHNGaWx0ZXIiLCJzZWN0aW9ucyIsInJlZExpbmVXaWR0aCIsInNldFJlZExpbmVXaWR0aCIsInJlZExpbmVMZWZ0Iiwic2V0UmVkTGluZUxlZnQiLCJzZXRBbmltYXRpb24iLCJtYXJrZWRTZWN0aW9uUmVmIiwicmVSZW5kZXJSZWRMaW4iLCJ0YXJnZXQiLCJjdXJyZW50U2VjdGlvbldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY3VycmVudFNlY3Rpb25MZWZ0IiwiY291bnRlciIsIm9uRmlsdGVyU2VjdGlvbkNsaWNrIiwic2VsZWN0ZWRTZWN0aW9uIiwic2VsZWN0ZWRTZWN0aW9uU3RyaW5nIiwic2VjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJJbmZvUGFnZSIsInJlbmRlcmVkU2VjdGlvbnMiLCJzZWMiLCJlIiwiZ2V0V2luZG93RGltZW5zaW9ucyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIndpbmRvdyIsIndpbmRvd0RpbWVuc2lvbnMiLCJzZXRXaW5kb3dEaW1lbnNpb25zIiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRpdGlvbmFsSW5zdHJ1bWVudHMiLCJteUNhcmRzIiwiY29uY2VydG1hc3RlcnMiLCJlbnNlbWJsZSIsImFyY2hpdmUiLCJjb25jYXQiLCJncm91cDEiLCJncm91cDIiLCJncm91cDMiLCJmb3J0ZXBpYW5vU29sbyIsImVuc2VtYmxlcyIsImZpbG1SZWR1Y2VyIiwiYWN0aW9uIiwiYXJjaGl2ZUNhcmRzIiwiZmlsdGVyIiwiZ3JvdXAiLCJzbGljZSIsIm5ld0NhcmRzIiwibmV3Q2FyZHMxIiwibmV3Q2FyZHMyIiwicSIsInRvTG93ZXJDYXNlIiwibmV3Q2FyZHMzIiwiY2FyZE5hbWUiLCJib29sIiwic3RhcnRzV2l0aCIsImNyZWF0ZVN0b3JlIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN2SkEsVUFBVSxxQkFBdUIsa0RBQWtELGdCQUFnQiwrREFBK0QsYzs7Ozs7Ozs7Ozs7O0FDQWxLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEdBQVQsR0FBZTtBQUNYLHNCQUNJLDJEQUFDLDRDQUFELENBQU8sVUFBUCxxQkFDSSwyREFBQyxvREFBRDtBQUFVLFNBQUssRUFBRUMsMERBQVNBO0FBQTFCLGtCQUNJLDJEQUFDLG1FQUFELE9BREosQ0FESixDQURKO0FBT0g7O0FBRWNELGtFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1FLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FUQTtBQVdBLE1BQU1DLFFBQVEsR0FBR0YseURBQU0sQ0FBQ0MsR0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTtBQVNBLE1BQU1FLFNBQVMsR0FBR0gseURBQU0sQ0FBQ0ksTUFBTztBQUNoQyxXQUFXQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTTtBQUNoQztBQUNBO0FBQ0EsQ0FKQTtBQU1PLE1BQU1DLE1BQU0sR0FBR1AseURBQU0sQ0FBQ1EsTUFBTztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFUTztBQVdBLE1BQU1DLElBQUksR0FBSUosS0FBRCxJQUFXO0FBRTNCLFFBQU07QUFBQ0ssVUFBRDtBQUFTSjtBQUFULE1BQWtCSywwRUFBbUIsRUFBM0M7QUFDQSxRQUFNLENBQUNDLGVBQUQsRUFBa0JDLGtCQUFsQixJQUF3Q0Msc0RBQVEsQ0FBQyxHQUFELENBQXRELENBSDJCLENBSzNCOztBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDWixRQUFJVCxLQUFLLEdBQUcsSUFBWixFQUFrQk8sa0JBQWtCLENBQUNQLEtBQUssR0FBRyxFQUFULENBQWxCLENBQWxCLEtBQ0tPLGtCQUFrQixDQUFDLEdBQUQsQ0FBbEI7QUFDUixHQUhRLEVBR04sQ0FBQ1AsS0FBRCxDQUhNLENBQVQ7QUFLQSxRQUFNLENBQUNVLElBQUQsSUFBVUYsc0RBQVEsQ0FBQ1QsS0FBSyxDQUFDVyxJQUFQLENBQXhCO0FBQ0EsUUFBTSxDQUFDQyxXQUFELElBQWlCSCxzREFBUSxDQUFDVCxLQUFLLENBQUNZLFdBQVAsQ0FBL0I7QUFDQSxRQUFNLENBQUNDLFFBQUQsSUFBY0osc0RBQVEsQ0FBQ1QsS0FBSyxDQUFDYSxRQUFQLENBQTVCO0FBQ0EsUUFBTSxDQUFDQyxVQUFELEVBQWFDLGFBQWIsSUFBOEJOLHNEQUFRLENBQUMsS0FBRCxDQUE1QztBQUNBLFFBQU0sQ0FBQ08sbUJBQUQsRUFBc0JDLHNCQUF0QixJQUFnRFIsc0RBQVEsQ0FBQyxnQkFBRCxDQUE5RDs7QUFFQSxRQUFNUyxnQkFBZ0IsR0FBRyxNQUFNO0FBQzNCSCxpQkFBYSxDQUFDLENBQUNELFVBQUYsQ0FBYjs7QUFDQSxRQUFJQSxVQUFKLEVBQWdCO0FBQ1pHLDRCQUFzQixDQUFDLGdCQUFELENBQXRCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hBLDRCQUFzQixDQUFDLGVBQUQsQ0FBdEI7QUFDSDtBQUNKLEdBUEQ7O0FBU0Esc0JBQ0ksMkRBQUMsV0FBRCxxQkFDSSwyREFBQyxRQUFELHFCQUNJLHNGQUFNLDJEQUFDLGdFQUFELE9BQU4sb0JBQTBCLHNFQUFJTixJQUFKLENBQTFCLENBREosZUFFSSxzRUFGSixlQUdJLHNGQUFNLDJEQUFDLDBEQUFELE9BQU4sT0FBcUJDLFdBQXJCLENBSEosZUFJSSxzRUFKSixlQUtJLDJEQUFDLE1BQUQ7QUFBUSxXQUFPLEVBQUVNLGdCQUFqQjtBQUFtQyxTQUFLLEVBQUVGO0FBQTFDLEtBQWdFQSxtQkFBaEUsQ0FMSixlQU1JLHNFQU5KLEVBT0tGLFVBQVUsZ0JBQUcsMkRBQUMsU0FBRDtBQUFXLE9BQUcsRUFBRUQsUUFBaEI7QUFBMEIsU0FBSyxFQUFFTjtBQUFqQyxJQUFILEdBQXlELElBUHhFLENBREosQ0FESjtBQWFILENBdkNNLEM7Ozs7Ozs7Ozs7OztBQzFDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTVksYUFBYSxHQUFHeEIseURBQU0sQ0FBQ0MsR0FBSTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxDQUpPO0FBTVAsTUFBTXdCLE9BQU8sR0FBR3pCLHlEQUFNLENBQUNDLEdBQUk7QUFDM0IsMkJBQTJCeUIsbURBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsQ0FMQTtBQU9BLE1BQU1DLGlCQUFpQixHQUFHM0IseURBQU0sQ0FBQ0MsR0FBSTtBQUNyQztBQUNBO0FBQ0EsQ0FIQTs7QUFNQSxNQUFNMkIsTUFBTSxHQUFJdkIsS0FBRCxJQUFXO0FBRXRCLFFBQU13QixXQUFXLEdBQUc3Qix5REFBTSxDQUFDQyxHQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBYkk7QUFlQSxRQUFNNkIsS0FBSyxHQUFHOUIseURBQU0sQ0FBQytCLEdBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FQSTtBQVVBLHNCQUFRLHFJQUFFLDJEQUFDLEtBQUQ7QUFBTyxPQUFHLEVBQUUxQixLQUFLLENBQUMyQjtBQUFsQixJQUFGLGVBQTZCLDJEQUFDLFdBQUQsUUFBYzNCLEtBQUssQ0FBQzRCLElBQXBCLENBQTdCLENBQVI7QUFFSCxDQTdCRDs7QUErQkEsTUFBTUMsR0FBRyxHQUFHbEMseURBQU0sQ0FBQ0MsR0FBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBBO0FBU0EsTUFBTWtDLElBQUksR0FBR25DLGlFQUFNLENBQUNrQyxHQUFELENBQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxBO0FBT0EsTUFBTUUsQ0FBQyxHQUFHcEMseURBQU0sQ0FBQ3FDLENBQUU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWRBO0FBZ0JBLE1BQU1DLEVBQUUsR0FBR3RDLGlFQUFNLENBQUNvQyxDQUFELENBQUk7QUFDckI7QUFDQTtBQUNBLENBSEE7QUFLQSxNQUFNRyxDQUFDLEdBQUd2Qyx5REFBTSxDQUFDQyxHQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEE7O0FBU0EsTUFBTXVDLE1BQU0sR0FBSW5DLEtBQUQsSUFBVztBQUV0QixRQUFNb0MsU0FBUyxHQUFHekMseURBQU0sQ0FBQytCLEdBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FQSTtBQVNBLHNCQUFRLDJEQUFDLFNBQUQ7QUFBVyxPQUFHLEVBQUUxQixLQUFLLENBQUMyQjtBQUF0QixJQUFSO0FBQ0gsQ0FaRDs7QUFjTyxNQUFNVSxTQUFTLEdBQUcsTUFBTTtBQUMzQixzQkFBUSwyREFBQyxPQUFELHFCQUNBLDJEQUFDLGFBQUQscUJBQ0ksMkRBQUMsQ0FBRDtBQUFHLFFBQUksRUFBQztBQUFSLGtCQUNJLDJEQUFDLDhEQUFELE9BREosMFJBREosQ0FEQSxlQUtBLHNFQUxBLGVBTUEsMkRBQUMsQ0FBRCwyS0FOQSxlQU9BLHNFQVBBLGVBUUEsMkRBQUMsTUFBRDtBQUFRLFVBQU0sRUFBRUMsNkRBQVFBO0FBQXhCLElBUkEsQ0FBUjtBQVdILENBWk07QUFlQSxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUMxQixzQkFBUSwyREFBQyxPQUFELHFCQUNBLDJEQUFDLGFBQUQscUJBQ0ksMkRBQUMsQ0FBRDtBQUFHLFFBQUksRUFBQztBQUFSLGtCQUNJLDJEQUFDLDhEQUFELE9BREosNERBREosZUFHSSwyREFBQyxDQUFEO0FBQUcsUUFBSSxFQUFDO0FBQVIsa0JBQ0ksMkRBQUMsOERBQUQsT0FESiw0REFISixlQUtJLDJEQUFDLENBQUQ7QUFBRyxRQUFJLEVBQUM7QUFBUixrQkFDSSwyREFBQyw4REFBRCxPQURKLHVMQUxKLENBREEsZUFTQSxzRUFUQSxlQVVBLDJEQUFDLENBQUQsNkNBVkEsZUFXQSxzRUFYQSxlQVlBLDJEQUFDLE1BQUQ7QUFBUSxVQUFNLEVBQUVDLHlFQUFRQTtBQUF4QixJQVpBLGVBYUEsMkRBQUMsQ0FBRCw4Q0FiQSxlQWNBLHNFQWRBLGVBZUEsMkRBQUMsTUFBRDtBQUFRLFVBQU0sRUFBRUMseUVBQVFBO0FBQXhCLElBZkEsZUFnQkEsc0VBaEJBLGVBaUJBLDJEQUFDLENBQUQsa0VBakJBLGVBa0JBLHNFQWxCQSxlQW1CQSwyREFBQyxNQUFEO0FBQVEsVUFBTSxFQUFFQyx1RUFBV0E7QUFBM0IsSUFuQkEsQ0FBUjtBQXNCSCxDQXZCTSxDOzs7Ozs7Ozs7Ozs7QUN0SVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1DLGFBQWEsR0FBR2hELHlEQUFNLENBQUNDLEdBQUk7QUFDakMsMkJBQTJCeUIsbURBQUs7QUFDaEM7QUFDQSxDQUhBO0FBS0EsTUFBTXVCLGVBQWUsR0FBR2pELHlEQUFNLENBQUNDLEdBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxBO0FBT08sTUFBTWlELFdBQVcsR0FBRyxNQUFNO0FBRTdCLFFBQU1DLEtBQUssR0FBR0MsK0RBQVcsQ0FBQ0MsS0FBSyxJQUFJQSxLQUFLLENBQUNGLEtBQWhCLENBQXpCO0FBQ0EsUUFBTUcsYUFBYSxHQUFHRiwrREFBVyxDQUFDQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsYUFBaEIsQ0FBakM7QUFDQSxRQUFNQyxTQUFTLEdBQUdILCtEQUFXLENBQUNDLEtBQUssSUFBSUEsS0FBSyxDQUFDRSxTQUFoQixDQUE3QjtBQUNBLFFBQU1DLGlCQUFpQixHQUFHLENBQ3JCLGVBRHFCLEVBRXJCLDZCQUZxQixFQUdyQixtQ0FIcUIsRUFJckIsZ0RBSnFCLEVBS3JCLGFBTHFCLEVBTXRCLGdDQU5zQixDQUExQjtBQVFBLE1BQUlDLFFBQVEsR0FBSUYsU0FBUyxLQUFHLENBQUMsQ0FBZCxnQkFBaUIsMkRBQUMsa0RBQUQsT0FBakIsZ0JBQTZCLDJEQUFDLG1EQUFELE9BQTVDO0FBRUEsc0JBQ0ksMkRBQUMsYUFBRCxxQkFDSSwyREFBQyw0REFBRDtBQUFlLGFBQVMsRUFBRUE7QUFBMUIsSUFESixlQUVJLDJEQUFDLDREQUFEO0FBQWUsWUFBUSxFQUFFQztBQUF6QixJQUZKLEVBR0tGLGFBQWEsZ0JBQ1YsMkRBQUMsZUFBRCxRQUNLSCxLQUFLLENBQUNPLEdBQU4sQ0FBVUMsSUFBSSxpQkFDWCwyREFBQywwQ0FBRDtBQUNJLFFBQUksRUFBRUEsSUFBSSxDQUFDM0MsSUFEZjtBQUVJLFlBQVEsRUFBRTJDLElBQUksQ0FBQ3pDLFFBRm5CO0FBR0ksZUFBVyxFQUFFeUMsSUFBSSxDQUFDMUMsV0FIdEI7QUFJSSxPQUFHLEVBQUUwQyxJQUFJLENBQUNDLEVBQUwsQ0FBUUM7QUFKakIsSUFESCxDQURMLENBRFUsR0FRbUJKLFFBWHJDLENBREo7QUFhSCxDQTVCTSxDOzs7Ozs7Ozs7Ozs7QUNyQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1sRCxNQUFNLEdBQUdQLHlEQUFNLENBQUNDLEdBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQWRPO0FBZ0JQLE1BQU02RCxLQUFLLEdBQUc5RCx5REFBTSxDQUFDK0QsS0FBTTtBQUMzQjtBQUNBO0FBQ0EsV0FBVzFELEtBQUssSUFBSUEsS0FBSyxDQUFDMkQsVUFBTixJQUFvQixlQUFnQjtBQUN4RCxDQUpBO0FBT0EsTUFBTUMsVUFBVSxHQUFHakUseURBQU0sQ0FBQ0MsR0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTtBQVFBLE1BQU1pRSxXQUFXLEdBQUdsRSx5REFBTSxDQUFDQyxHQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMQTtBQU9BLE1BQU1rRSxVQUFVLEdBQUduRSx5REFBTSxDQUFDb0UsSUFBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxDQUpBO0FBTUEsTUFBTUMsS0FBSyxHQUFHckUseURBQU0sQ0FBQ0MsR0FBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxzQkFKQTtBQU1BLE1BQU1xRSxJQUFJLEdBQUd0RSx5REFBTSxDQUFDQyxHQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLHNCQUpBO0FBTU8sTUFBTXNFLGFBQWEsR0FBSWxFLEtBQUQsSUFBVztBQUVwQyxRQUFNbUUsV0FBVyxHQUFHQyxvREFBTSxFQUExQjtBQUNBLFFBQU1DLEtBQUssR0FBR3RCLCtEQUFXLENBQUNDLEtBQUssSUFBSUEsS0FBSyxDQUFDcUIsS0FBaEIsQ0FBekI7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTTtBQUFDbEUsVUFBRDtBQUFTSjtBQUFULE1BQWtCSywwRUFBbUIsRUFBM0M7O0FBRUEsV0FBU2tFLE9BQVQsR0FBbUI7QUFDZixRQUFJQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ1AsV0FBVyxDQUFDUSxPQUFaLENBQW9CQyxLQUFyQixDQUFoQjs7QUFDQSxRQUFJSCxHQUFHLENBQUNJLE1BQUosR0FBYSxDQUFiLElBQWtCSixHQUFHLENBQUNLLFFBQUosQ0FBYSxHQUFiLENBQXRCLEVBQXlDO0FBQ3JDUixjQUFRLENBQUM7QUFBQ1MsWUFBSSxFQUFFLE9BQVA7QUFBZ0JDLFdBQUcsRUFBRTtBQUFyQixPQUFELENBQVI7QUFDSCxLQUZELE1BRU87QUFDSFYsY0FBUSxDQUFDO0FBQUNTLFlBQUksRUFBRSxRQUFQO0FBQWlCRSxhQUFLLEVBQUVSO0FBQXhCLE9BQUQsQ0FBUjtBQUNIO0FBQ0o7O0FBRUQsV0FBU1MsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDM0IsUUFBSUEsS0FBSyxDQUFDQyxHQUFOLEtBQWMsT0FBbEIsRUFBMkI7QUFDdkJaLGFBQU87QUFDVjtBQUNKOztBQUVELHNCQUNJLHFJQUNJLDJEQUFDLFdBQUQscUJBQ0ksMkRBQUMsVUFBRCxxQkFDSSwyREFBQyxVQUFELHFCQUFZLDJEQUFDLG1FQUFELE9BQVosa0xBREosZUFFSSwyREFBQyxLQUFEO0FBQU8sY0FBVSxFQUFFVSxjQUFuQjtBQUFtQyxPQUFHLEVBQUVmLFdBQXhDO0FBQXFELFFBQUksRUFBQyxNQUExRDtBQUNPLGVBQVcsRUFBQyxpSkFEbkI7QUFDa0QsY0FBVSxFQUFDO0FBRDdELElBRkosQ0FESixlQU1JLDJEQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUMsRUFBZDtBQUFpQixXQUFPLEVBQUVLO0FBQTFCLHNDQU5KLENBREosRUFTS0gsS0FBSyxLQUFLLEVBQVYsZ0JBQWUsMkRBQUMsS0FBRCxxQkFBTywyREFBQywwRUFBRCxPQUFQLEVBQXFDQSxLQUFyQyxlQUEyQywyREFBQywwRUFBRCxPQUEzQyxDQUFmLEdBQWtHLElBVHZHLEVBVUtyRSxLQUFLLENBQUNrRCxTQUFOLEtBQW9CLENBQXBCLGdCQUNHLDJEQUFDLElBQUQscUJBQU0sMkRBQUMsMEVBQUQsT0FBTiwrR0FBb0QsMkRBQUMsMEVBQUQsT0FBcEQsQ0FESCxHQUM4RixJQVhuRyxDQURKO0FBZUgsQ0FyQ00sQzs7Ozs7Ozs7Ozs7O0FDOURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTW1DLGVBQWUsR0FBRzFGLHlEQUFNLENBQUNDLEdBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFSQTtBQVVBLE1BQU0wRixhQUFhLEdBQUczRixpRUFBTSxDQUFDMEYsZUFBRCxDQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUkE7QUFVTyxNQUFNRSxXQUFXLEdBQUc1Rix5REFBTSxDQUFDQyxHQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5PO0FBUUEsTUFBTTRGLDBCQUEwQixHQUFHN0YseURBQU0sQ0FBQ0MsR0FBSTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxDQUpPO0FBTVAsTUFBTTZGLE1BQU0sR0FBR0MsMkRBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhMUYsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWFELEtBQUssSUFBSUEsS0FBSyxDQUFDMkYsSUFBSztBQUNqQztBQUNBLENBYkE7QUFlQSxNQUFNQyxNQUFNLEdBQUdGLDJEQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTFGLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhRCxLQUFLLElBQUlBLEtBQUssQ0FBQzJGLElBQUs7QUFDakM7QUFDQSxDQWJBO0FBZ0JPLE1BQU1FLGdCQUFnQixHQUFHbEcseURBQU0sQ0FBQ0MsR0FBSTtBQUMzQyxXQUFXSSxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTTtBQUNoQyxVQUFVRCxLQUFLLElBQUlBLEtBQUssQ0FBQzJGLElBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlM0YsS0FBSyxJQUFLQSxLQUFLLENBQUM4RixTQUFOLEdBQWtCLENBQWxCLEtBQXdCLENBQXpCLEdBQThCTCxNQUE5QixHQUF1Q0csTUFBTztBQUN0RSxDQVJPO0FBVUEsTUFBTUcsYUFBYSxHQUFJL0YsS0FBRCxJQUFXO0FBRXBDLFFBQU0sQ0FBQ2dHLFFBQUQsSUFBY3ZGLHNEQUFRLENBQUNULEtBQUssQ0FBQ2dHLFFBQVAsQ0FBNUI7QUFFQSxRQUFNLENBQUNDLFlBQUQsRUFBZUMsZUFBZixJQUFrQ3pGLHNEQUFRLENBQUMsTUFBRCxDQUFoRDtBQUNBLFFBQU0sQ0FBQzBGLFdBQUQsRUFBY0MsY0FBZCxJQUFnQzNGLHNEQUFRLENBQUMsTUFBRCxDQUE5QztBQUNBLFFBQU0sQ0FBQ3FGLFNBQUQsRUFBWU8sWUFBWixJQUE0QjVGLHNEQUFRLENBQUMsQ0FBRCxDQUExQztBQUNBLFFBQU07QUFBQ0osVUFBRDtBQUFTSjtBQUFULE1BQWtCSywwRUFBbUIsRUFBM0M7QUFDQSxRQUFNZ0csZ0JBQWdCLEdBQUdsQyxvREFBTSxFQUEvQixDQVJvQyxDQVVwQzs7QUFDQTFELHlEQUFTLENBQUMsTUFBTTtBQUNaNkYsa0JBQWMsQ0FBQztBQUFDQyxZQUFNLEVBQUNGLGdCQUFnQixDQUFDM0I7QUFBekIsS0FBRCxDQUFkO0FBQ0gsR0FGUSxFQUVOLENBQUMxRSxLQUFELENBRk0sQ0FBVDtBQUlBLFFBQU1xRSxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUVBLFdBQVNnQyxjQUFULENBQXdCcEIsS0FBeEIsRUFBK0I7QUFDM0JtQixvQkFBZ0IsQ0FBQzNCLE9BQWpCLEdBQTJCUSxLQUFLLENBQUNxQixNQUFqQztBQUNBLFFBQUlDLG1CQUFtQixHQUFHdEIsS0FBSyxDQUFDcUIsTUFBTixDQUFhRSxxQkFBYixHQUFxQ3pHLEtBQS9EO0FBQ0EsUUFBSTBHLGtCQUFrQixHQUFHeEIsS0FBSyxDQUFDcUIsTUFBTixDQUFhRSxxQkFBYixHQUFxQ2YsSUFBckMsR0FBNEMsRUFBckU7QUFDQU8sbUJBQWUsQ0FBQ08sbUJBQW1CLEdBQUcsSUFBdkIsQ0FBZjtBQUNBTCxrQkFBYyxDQUFDTyxrQkFBa0IsR0FBRyxJQUF0QixDQUFkO0FBQ0EsUUFBSUMsT0FBTyxHQUFHZCxTQUFTLEdBQUcsQ0FBMUI7QUFDQU8sZ0JBQVksQ0FBQ08sT0FBRCxDQUFaO0FBQ0g7O0FBRUQsV0FBU0Msb0JBQVQsQ0FBOEJDLGVBQTlCLEVBQStDM0IsS0FBL0MsRUFBc0Q7QUFDbERvQixrQkFBYyxDQUFDcEIsS0FBRCxDQUFkO0FBQ0EsUUFBSTRCLHFCQUFxQixHQUFHRCxlQUFlLENBQUNFLE9BQTVDO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxxQkFBWjs7QUFDQSxZQUFRQSxxQkFBUjtBQUNJLFdBQU0sK0JBQU47QUFDSXpDLGdCQUFRLENBQUM7QUFBQ1MsY0FBSSxFQUFFO0FBQVAsU0FBRCxDQUFSO0FBQ0E7O0FBQ0osV0FBTSxlQUFOO0FBQ0lULGdCQUFRLENBQUM7QUFBQ1MsY0FBSSxFQUFFO0FBQVAsU0FBRCxDQUFSO0FBQ0E7O0FBQ0osV0FBTSw2QkFBTjtBQUNJVCxnQkFBUSxDQUFDO0FBQUNTLGNBQUksRUFBRTtBQUFQLFNBQUQsQ0FBUjtBQUNBOztBQUNKLFdBQU0sbUNBQU47QUFDSVQsZ0JBQVEsQ0FBQztBQUFDUyxjQUFJLEVBQUU7QUFBUCxTQUFELENBQVI7QUFDQTs7QUFDSixXQUFNLGdEQUFOO0FBQ0lULGdCQUFRLENBQUM7QUFBQ1MsY0FBSSxFQUFFO0FBQVAsU0FBRCxDQUFSO0FBQ0E7QUFmUjtBQWlCSDs7QUFFRCxXQUFTb0MsY0FBVCxDQUF3QkgsT0FBeEIsRUFBaUM7QUFDN0IsUUFBSUEsT0FBTyxDQUFDLENBQUQsQ0FBUCxLQUFhLGdDQUFqQixFQUFrRDtBQUM5Q1Qsb0JBQWMsQ0FBQ1MsT0FBTyxDQUFDLENBQUQsQ0FBUixDQUFkO0FBQ0ExQyxjQUFRLENBQUM7QUFBQ1MsWUFBSSxFQUFFO0FBQVAsT0FBRCxDQUFSO0FBQ0gsS0FIRCxNQUlLO0FBQ0R3QixvQkFBYyxDQUFDUyxPQUFPLENBQUMsQ0FBRCxDQUFSLENBQWQ7QUFDQTFDLGNBQVEsQ0FBQztBQUFDUyxZQUFJLEVBQUU7QUFBUCxPQUFELENBQVI7QUFDSDtBQUNKOztBQUVELE1BQUlxQyxnQkFBZ0IsR0FBR3BCLFFBQVEsQ0FBQzNDLEdBQVQsQ0FBYzJELE9BQUQsSUFDaENBLE9BQU8sS0FBSyxhQUFaLElBQTZCQSxPQUFPLEtBQUssZ0NBQXpDLGdCQUNJLDJEQUFDLGFBQUQ7QUFBZ0IsV0FBTyxFQUFFLE1BQUs7QUFDMUIsVUFBSUssR0FBRyxHQUFHLENBQUNMLE9BQUQsRUFBUzdCLEtBQVQsQ0FBVjtBQUNBZ0Msb0JBQWMsQ0FBQ0UsR0FBRCxDQUFkO0FBRUgsS0FKRDtBQUlHLE9BQUcsRUFBRUw7QUFKUix1QkFJa0IsMkRBQUMsNERBQUQsT0FKbEIsRUFJa0NBLE9BSmxDLENBREosZ0JBTU0sMkRBQUMsYUFBRDtBQUFnQixPQUFHLEVBQUVWLGdCQUFyQjtBQUF1QyxXQUFPLEVBQUVnQixDQUFDLElBQUlULG9CQUFvQixDQUFDO0FBQUNHO0FBQUQsS0FBRCxFQUFZTSxDQUFaLENBQXpFO0FBQXlGLE9BQUcsRUFBRU47QUFBOUYsdUJBQXdHLDJEQUFDLHdEQUFELE9BQXhHLEVBQW9IQSxPQUFwSCxDQVBhLENBQXZCO0FBVUEsc0JBQ0kscUlBQ0ksMkRBQUMsMEJBQUQscUJBQ0ksMkRBQUMsZUFBRDtBQUFpQixZQUFRLEVBQUVJO0FBQTNCLElBREosQ0FESixlQUlJLDJEQUFDLFdBQUQscUJBQWEsMkRBQUMsZ0JBQUQ7QUFBa0IsU0FBSyxFQUFFbkIsWUFBekI7QUFBdUMsUUFBSSxFQUFFRSxXQUE3QztBQUEwRCxhQUFTLEVBQUVMO0FBQXJFLElBQWIsQ0FKSixDQURKO0FBUUgsQ0EvRU0sQzs7Ozs7Ozs7Ozs7QUNqRlAsVUFBVSxxQkFBdUIseURBQXlELGdCQUFnQixnRUFBZ0UsYzs7Ozs7Ozs7Ozs7QUNBMUssVUFBVSxxQkFBdUIsdURBQXVELGdCQUFnQixpRUFBaUUsYzs7Ozs7Ozs7Ozs7QUNBekssVUFBVSxxQkFBdUIseURBQXlELGdCQUFnQixnRUFBZ0UsYzs7Ozs7Ozs7Ozs7QUNBMUssVUFBVSxxQkFBdUIsOENBQThDLGdCQUFnQixnRUFBZ0UsYzs7Ozs7Ozs7Ozs7O0FDQS9KO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU3lCLG1CQUFULEdBQStCO0FBQzNCLFFBQU07QUFBRUMsY0FBVSxFQUFFdkgsS0FBZDtBQUFxQndILGVBQVcsRUFBRXBIO0FBQWxDLE1BQTZDcUgsTUFBbkQ7QUFDQSxTQUFPO0FBQ0h6SCxTQURHO0FBRUhJO0FBRkcsR0FBUDtBQUlIOztBQUVjLFNBQVNDLG1CQUFULEdBQStCO0FBQzFDLFFBQU0sQ0FBQ3FILGdCQUFELEVBQW1CQyxtQkFBbkIsSUFBMENuSCxzREFBUSxDQUFDOEcsbUJBQW1CLEVBQXBCLENBQXhEO0FBRUE3Ryx5REFBUyxDQUFDLE1BQU07QUFDWixhQUFTbUgsWUFBVCxHQUF3QjtBQUNwQkQseUJBQW1CLENBQUNMLG1CQUFtQixFQUFwQixDQUFuQjtBQUNIOztBQUVERyxVQUFNLENBQUNJLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRCxZQUFsQztBQUNBLFdBQU8sTUFBTUgsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0YsWUFBckMsQ0FBYjtBQUNILEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxTQUFPRixnQkFBUDtBQUNILEM7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQUssZ0RBQVEsQ0FBQ0MsTUFBVCxlQUFnQiwyREFBQyw0Q0FBRCxPQUFoQixFQUF3QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQXhCLEU7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBTyxJQUFJQyxxQkFBcUIsR0FBRyxDQUMvQjtBQUNJLGNBQVksMkNBRGhCO0FBRUksaUJBQWUsNkJBRm5CO0FBR0ksVUFBUSxnQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQUQrQixFQVUvQjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUseUJBRm5CO0FBR0ksVUFBUSxnQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQVYrQixFQW1CL0I7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDBCQUZuQjtBQUdJLFVBQVEsaUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FuQitCLEVBNEIvQjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUseUNBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTVCK0IsRUFxQy9CO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSwwQkFGbkI7QUFHSSxVQUFRLGlDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBckMrQixFQThDL0I7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGlDQUZuQjtBQUdJLFVBQVEsaUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E5QytCLEVBdUQvQjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsMEJBRm5CO0FBR0ksVUFBUSw2QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXZEK0IsRUFnRS9CO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxzQ0FGbkI7QUFHSSxVQUFRLDZCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBaEUrQixDQUE1QixDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0FBQUEsSUFBSUMsT0FBTyxHQUFHLENBQ1Y7QUFDSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFY7QUFJSSxVQUFRLDhCQUpaO0FBS0ksaUJBQWUseURBTG5CO0FBTUksY0FBWSwyRUFOaEI7QUFPSSxXQUFTO0FBUGIsQ0FEVSxFQVNQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw0QkFKVDtBQUtDLGlCQUFlLDBCQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FUTyxFQWlCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNEJBSlQ7QUFLQyxpQkFBZSw2QkFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBakJPLEVBeUJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw4QkFKVDtBQUtDLGlCQUFlLG1FQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6Qk8sRUFpQ1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDZCQUpUO0FBS0MsaUJBQWUscURBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpDTyxFQXlDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNEJBSlQ7QUFLQyxpQkFBZSxnRUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBekNPLEVBaURQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxpQ0FKVDtBQUtDLGlCQUFlLHNEQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqRE8sRUF5RFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDRCQUpUO0FBS0MsaUJBQWUsZ0RBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpETyxFQWlFUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsdUJBSlQ7QUFLQyxpQkFBZSwrREFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBakVPLEVBeUVQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw4QkFKVDtBQUtDLGlCQUFlLDBEQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6RU8sRUFpRlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDBCQUpUO0FBS0MsaUJBQWUsMERBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpGTyxFQXlGUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEseUJBSlQ7QUFLQyxpQkFBZSw0REFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBekZPLEVBaUdQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw4QkFKVDtBQUtDLGlCQUFlLHVDQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqR08sRUF5R1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHFCQUpUO0FBS0MsaUJBQWUsb0VBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpHTyxFQWlIUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsOEJBSlQ7QUFLQyxpQkFBZSx1REFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBakhPLEVBeUhQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx3QkFKVDtBQUtDLGlCQUFlLDhDQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6SE8sRUFpSVA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHdCQUpUO0FBS0MsaUJBQWUsNEJBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpJTyxFQXlJUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMEJBSlQ7QUFLQyxpQkFBZSxtRUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBeklPLEVBaUpQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw0QkFKVDtBQUtDLGlCQUFlLDREQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqSk8sRUF5SlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDZCQUpUO0FBS0MsaUJBQWUsa0VBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpKTyxFQWlLUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNEJBSlQ7QUFLQyxpQkFBZSx5QkFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBaktPLEVBeUtQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw2QkFKVDtBQUtDLGlCQUFlLDZCQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6S08sRUFpTFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLCtCQUpUO0FBS0MsaUJBQWUscURBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpMTyxFQXlMUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsd0JBSlQ7QUFLQyxpQkFBZSxvRUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBekxPLEVBaU1QO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx3QkFKVDtBQUtDLGlCQUFlLG9FQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqTU8sRUF5TVA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHlCQUpUO0FBS0MsaUJBQWUseUVBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpNTyxFQWlOUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNkJBSlQ7QUFLQyxpQkFBZSx3RUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBak5PLEVBeU5QO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx3QkFKVDtBQUtDLGlCQUFlLG1DQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6Tk8sRUFpT1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHlCQUpUO0FBS0MsaUJBQWUsNEJBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpPTyxFQXlPUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMkJBSlQ7QUFLQyxpQkFBZSxvQ0FMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBek9PLEVBaVBQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwwQkFKVDtBQUtDLGlCQUFlLHVCQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqUE8sRUF5UFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGlDQUpUO0FBS0MsaUJBQWUsK0RBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpQTyxFQWlRUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMkJBSlQ7QUFLQyxpQkFBZSx5QkFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBalFPLEVBeVFQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw0QkFKVDtBQUtDLGlCQUFlLDRCQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6UU8sRUFpUlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDBCQUpUO0FBS0MsaUJBQWUsMEVBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpSTyxFQXlSUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsc0JBSlQ7QUFLQyxpQkFBZSwrREFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBelJPLEVBaVNQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw2QkFKVDtBQUtDLGlCQUFlLHdEQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqU08sRUF5U1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHlCQUpUO0FBS0MsaUJBQWUsOEVBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpTTyxFQWlUUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMkJBSlQ7QUFLQyxpQkFBZSxnRUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBalRPLEVBeVRQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwwQkFKVDtBQUtDLGlCQUFlLHlEQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6VE8sRUFpVVA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHlCQUpUO0FBS0MsaUJBQWUsMkVBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpVTyxFQXlVUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsd0JBSlQ7QUFLQyxpQkFBZSxxRUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBelVPLEVBaVZQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwwQkFKVDtBQUtDLGlCQUFlLHlEQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqVk8sRUF5VlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHdCQUpUO0FBS0MsaUJBQWUsOERBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpWTyxFQWlXUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNEJBSlQ7QUFLQyxpQkFBZSx5RUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBaldPLEVBeVdQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwyQkFKVDtBQUtDLGlCQUFlLDBCQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6V08sRUFpWFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDBCQUpUO0FBS0MsaUJBQWUsa0NBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpYTyxFQXlYUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMEJBSlQ7QUFLQyxpQkFBZSxtRUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBelhPLEVBaVlQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwyQkFKVDtBQUtDLGlCQUFlLGlFQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqWU8sRUF5WVA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDJCQUpUO0FBS0MsaUJBQWUsMERBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpZTyxFQWlaUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsZ0NBSlQ7QUFLQyxpQkFBZSw2REFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBalpPLEVBeVpQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx1QkFKVDtBQUtDLGlCQUFlLGdGQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6Wk8sRUFpYVA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHdCQUpUO0FBS0MsaUJBQWUsMkVBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWphTyxFQXlhUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMEJBSlQ7QUFLQyxpQkFBZSw0REFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBemFPLEVBaWJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwyQkFKVDtBQUtDLGlCQUFlLG1FQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqYk8sRUF5YlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHlCQUpUO0FBS0MsaUJBQWUsbUVBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpiTyxFQWljUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMEJBSlQ7QUFLQyxpQkFBZSw2REFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBamNPLEVBeWNQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwyQkFKVDtBQUtDLGlCQUFlLDhEQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6Y08sRUFpZFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHdCQUpUO0FBS0MsaUJBQWUsNERBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpkTyxFQXlkUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsc0JBSlQ7QUFLQyxpQkFBZSwyREFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBemRPLEVBaWVQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwwQkFKVDtBQUtDLGlCQUFlLG9FQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqZU8sRUF5ZVA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLG9CQUpUO0FBS0MsaUJBQWUsZ0ZBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXplTyxFQWlmUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsZ0NBSlQ7QUFLQyxpQkFBZSxpRUFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBamZPLEVBeWZQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw0QkFKVDtBQUtDLGlCQUFlLDhCQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6Zk8sRUFpZ0JQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw0QkFKVDtBQUtDLGlCQUFlLDJCQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqZ0JPLEVBeWdCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNEJBSlQ7QUFLQyxpQkFBZSxpRUFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBemdCTyxFQWloQlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHdCQUpUO0FBS0MsaUJBQWUsb0VBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWpoQk8sRUF5aEJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw4QkFKVDtBQUtDLGlCQUFlLCtEQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6aEJPLEVBaWlCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsOEJBSlQ7QUFLQyxpQkFBZSxnREFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBamlCTyxFQXlpQlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDhCQUpUO0FBS0MsaUJBQWUsZ0NBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQXppQk8sRUFpakJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw4QkFKVDtBQUtDLGlCQUFlLDJCQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqakJPLEVBeWpCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNEJBSlQ7QUFLQyxpQkFBZSx1RUFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBempCTyxFQWlrQlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDRCQUpUO0FBS0MsaUJBQWUsOEJBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWprQk8sRUF5a0JQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw4QkFKVDtBQUtDLGlCQUFlLDZEQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6a0JPLEVBaWxCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMEJBSlQ7QUFLQyxpQkFBZSxvREFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBamxCTyxFQXlsQlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDhCQUpUO0FBS0MsaUJBQWUsNEVBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQXpsQk8sRUFpbUJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwyQkFKVDtBQUtDLGlCQUFlLDREQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqbUJPLEVBeW1CUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsd0JBSlQ7QUFLQyxpQkFBZSwyRkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBem1CTyxFQWluQlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDZCQUpUO0FBS0MsaUJBQWUsc0RBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWpuQk8sRUF5bkJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw4QkFKVDtBQUtDLGlCQUFlLGlCQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6bkJPLEVBaW9CUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNkJBSlQ7QUFLQyxpQkFBZSxvREFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBam9CTyxFQXlvQlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHdCQUpUO0FBS0MsaUJBQWUsd0RBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQXpvQk8sRUFpcEJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw4QkFKVDtBQUtDLGlCQUFlLGdFQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqcEJPLEVBeXBCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEseUJBSlQ7QUFLQyxpQkFBZSw0QkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBenBCTyxFQWtxQlY7QUFDSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFY7QUFJSSxVQUFRLHlCQUpaO0FBS0ksaUJBQWUsb0JBTG5CO0FBTUksY0FBWSw2RUFOaEI7QUFPSSxXQUFTO0FBUGIsQ0FscUJVLEVBMHFCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsc0JBSlQ7QUFLQyxpQkFBZSx5REFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMXFCTyxFQWtyQlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDJCQUpUO0FBS0MsaUJBQWUsNEJBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWxyQk8sRUEwckJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx5QkFKVDtBQUtDLGlCQUFlLG9DQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExckJPLEVBa3NCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMEJBSlQ7QUFLQyxpQkFBZSw2RUFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbHNCTyxFQTBzQlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHlCQUpUO0FBS0MsaUJBQWUsdUVBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTFzQk8sRUFrdEJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw2QkFKVDtBQUtDLGlCQUFlLHlCQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsdEJPLEVBMHRCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNEJBSlQ7QUFLQyxpQkFBZSx5QkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMXRCTyxFQWt1QlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDZCQUpUO0FBS0MsaUJBQWUsOERBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWx1Qk8sRUEwdUJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw0QkFKVDtBQUtDLGlCQUFlLDBEQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExdUJPLEVBa3ZCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMEJBSlQ7QUFLQyxpQkFBZSwyRUFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbHZCTyxFQTB2QlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHVCQUpUO0FBS0MsaUJBQWUsbUVBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTF2Qk8sRUFrd0JQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw2QkFKVDtBQUtDLGlCQUFlLGdFQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0Fsd0JPLEVBMHdCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsZ0NBSlQ7QUFLQyxpQkFBZSxtRUFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMXdCTyxFQWt4QlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHdCQUpUO0FBS0MsaUJBQWUsMERBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWx4Qk8sRUEweEJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw2QkFKVDtBQUtDLGlCQUFlLDhEQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExeEJPLEVBa3lCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNkJBSlQ7QUFLQyxpQkFBZSxtQ0FMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbHlCTyxFQTB5QlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDhCQUpUO0FBS0MsaUJBQWUsMEJBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTF5Qk8sRUFrekJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx5QkFKVDtBQUtDLGlCQUFlLHVFQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsekJPLEVBMHpCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNkJBSlQ7QUFLQyxpQkFBZSxvQ0FMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMXpCTyxFQWswQlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDhCQUpUO0FBS0MsaUJBQWUsNEJBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWwwQk8sRUEwMEJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw2QkFKVDtBQUtDLGlCQUFlLDREQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExMEJPLEVBazFCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEseUJBSlQ7QUFLQyxpQkFBZSwyREFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbDFCTyxFQTAxQlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDJCQUpUO0FBS0MsaUJBQWUsMkVBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTExQk8sRUFrMkJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwrQkFKVDtBQUtDLGlCQUFlLHVDQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsMkJPLEVBMDJCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsOEJBSlQ7QUFLQyxpQkFBZSw4QkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMTJCTyxFQWszQlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHNCQUpUO0FBS0MsaUJBQWUsdURBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWwzQk8sRUEwM0JQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwwQkFKVDtBQUtDLGlCQUFlLDJEQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExM0JPLEVBazRCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsa0NBSlQ7QUFLQyxpQkFBZSwyRUFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbDRCTyxFQTA0QlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHVDQUpUO0FBS0MsaUJBQWUscUVBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTE0Qk8sRUFrNUJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw0QkFKVDtBQUtDLGlCQUFlLCtFQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsNUJPLEVBMDVCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMkJBSlQ7QUFLQyxpQkFBZSx5REFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMTVCTyxFQWs2QlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDRCQUpUO0FBS0MsaUJBQWUsc0RBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWw2Qk8sRUEwNkJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwwQkFKVDtBQUtDLGlCQUFlLG1FQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExNkJPLEVBazdCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNEJBSlQ7QUFLQyxpQkFBZSw0REFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbDdCTyxFQTA3QlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDRCQUpUO0FBS0MsaUJBQWUsa0JBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTE3Qk8sRUFrOEJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw0QkFKVDtBQUtDLGlCQUFlLHNCQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsOEJPLEVBMDhCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMkJBSlQ7QUFLQyxpQkFBZSw4REFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMThCTyxFQWs5QlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLCtCQUpUO0FBS0MsaUJBQWUsdURBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWw5Qk8sRUEwOUJQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx3QkFKVDtBQUtDLGlCQUFlLDhEQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExOUJPLEVBaytCUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsaUNBSlQ7QUFLQyxpQkFBZSxpQ0FMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbCtCTyxFQTArQlA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGdDQUpUO0FBS0MsaUJBQWUsZ0NBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTErQk8sRUFrL0JQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwyQkFKVDtBQUtDLGlCQUFlLG9EQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsL0JPLEVBMC9CUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMkJBSlQ7QUFLQyxpQkFBZSxrREFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMS9CTyxFQWtnQ1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLCtCQUpUO0FBS0MsaUJBQWUsaUVBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWxnQ08sRUEwZ0NQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx5QkFKVDtBQUtDLGlCQUFlLDBEQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExZ0NPLEVBa2hDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMkJBSlQ7QUFLQyxpQkFBZSwwRkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbGhDTyxFQTBoQ1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDBCQUpUO0FBS0MsaUJBQWUsb0VBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTFoQ08sRUFraUNQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwwQkFKVDtBQUtDLGlCQUFlLDREQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsaUNPLEVBMGlDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsZ0NBSlQ7QUFLQyxpQkFBZSxpRkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMWlDTyxFQWtqQ1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDJCQUpUO0FBS0MsaUJBQWUseUJBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWxqQ08sRUEwakNQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwwQkFKVDtBQUtDLGlCQUFlLDRCQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExakNPLEVBa2tDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsd0JBSlQ7QUFLQyxpQkFBZSw4REFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbGtDTyxFQTBrQ1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDhCQUpUO0FBS0MsaUJBQWUscUVBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTFrQ08sRUFrbENQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw4QkFKVDtBQUtDLGlCQUFlLHdFQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsbENPLEVBMGxDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEseUJBSlQ7QUFLQyxpQkFBZSw2REFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMWxDTyxFQWttQ1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLCtCQUpUO0FBS0MsaUJBQWUsc0VBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWxtQ08sRUEwbUNQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw4QkFKVDtBQUtDLGlCQUFlLG1DQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExbUNPLEVBa25DUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsOEJBSlQ7QUFLQyxpQkFBZSxvQkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbG5DTyxFQTBuQ1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDZCQUpUO0FBS0MsaUJBQWUsK0VBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTFuQ08sRUFrb0NQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx3QkFKVDtBQUtDLGlCQUFlLG9FQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0Fsb0NPLEVBMG9DUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMkJBSlQ7QUFLQyxpQkFBZSxpRkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMW9DTyxFQWtwQ1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLG1CQUpUO0FBS0MsaUJBQWUsd0RBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWxwQ08sRUEwcENQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxxQkFKVDtBQUtDLGlCQUFlLGdFQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExcENPLEVBa3FDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsK0JBSlQ7QUFLQyxpQkFBZSxxRkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbHFDTyxFQTBxQ1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDBCQUpUO0FBS0MsaUJBQWUsbUVBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTFxQ08sRUFrckNQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwrQkFKVDtBQUtDLGlCQUFlLDhEQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsckNPLEVBMHJDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsK0JBSlQ7QUFLQyxpQkFBZSxrRUFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMXJDTyxFQWtzQ1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHlCQUpUO0FBS0MsaUJBQWUsd0RBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWxzQ08sRUEwc0NQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx5QkFKVDtBQUtDLGlCQUFlLG9EQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0Exc0NPLEVBa3RDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMkJBSlQ7QUFLQyxpQkFBZSx1RUFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbHRDTyxFQTB0Q1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDBCQUpUO0FBS0MsaUJBQWUseUNBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTF0Q08sRUFrdUNQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx5QkFKVDtBQUtDLGlCQUFlLGdDQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsdUNPLEVBMHVDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsd0JBSlQ7QUFLQyxpQkFBZSx5REFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMXVDTyxFQWt2Q1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGdDQUpUO0FBS0MsaUJBQWUsK0RBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWx2Q08sRUEwdkNQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw2QkFKVDtBQUtDLGlCQUFlLDJEQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExdkNPLEVBa3dDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsd0JBSlQ7QUFLQyxpQkFBZSxnRUFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbHdDTyxFQTB3Q1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDRCQUpUO0FBS0MsaUJBQWUsbUJBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTF3Q08sRUFreENQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwyQkFKVDtBQUtDLGlCQUFlLHlCQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FseENPLEVBMHhDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsOEJBSlQ7QUFLQyxpQkFBZSwyQkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMXhDTyxFQWt5Q1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDZCQUpUO0FBS0MsaUJBQWUsNEJBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWx5Q08sRUEweUNQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwrQkFKVDtBQUtDLGlCQUFlLGtGQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExeUNPLEVBa3pDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsd0JBSlQ7QUFLQyxpQkFBZSwrREFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbHpDTyxFQTB6Q1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDBCQUpUO0FBS0MsaUJBQWUsMERBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTF6Q08sRUFrMENQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx5QkFKVDtBQUtDLGlCQUFlLDZEQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsMENPLEVBMDBDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEseUJBSlQ7QUFLQyxpQkFBZSwwQkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMTBDTyxFQWsxQ1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHlCQUpUO0FBS0MsaUJBQWUsbUJBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWwxQ08sRUEwMUNQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw4QkFKVDtBQUtDLGlCQUFlLDZFQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExMUNPLEVBazJDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNkJBSlQ7QUFLQyxpQkFBZSwyQ0FMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbDJDTyxFQTAyQ1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDZCQUpUO0FBS0MsaUJBQWUsOEJBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTEyQ08sRUFrM0NQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwyQkFKVDtBQUtDLGlCQUFlLCtCQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsM0NPLEVBMDNDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMEJBSlQ7QUFLQyxpQkFBZSwrQkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMTNDTyxFQWs0Q1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGdDQUpUO0FBS0MsaUJBQWUsdUVBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWw0Q08sRUEwNENQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwyQkFKVDtBQUtDLGlCQUFlLDZDQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExNENPLEVBazVDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEseUJBSlQ7QUFLQyxpQkFBZSwwRUFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbDVDTyxFQTA1Q1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDJCQUpUO0FBS0MsaUJBQWUsdUNBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTE1Q08sRUFrNkNQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw0QkFKVDtBQUtDLGlCQUFlLHVCQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsNkNPLEVBMDZDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsZ0NBSlQ7QUFLQyxpQkFBZSxrRkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMTZDTyxFQWs3Q1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDhCQUpUO0FBS0MsaUJBQWUsbUZBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWw3Q08sRUEwN0NQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwrQkFKVDtBQUtDLGlCQUFlLHNEQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExN0NPLEVBazhDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMEJBSlQ7QUFLQyxpQkFBZSwyREFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbDhDTyxFQTA4Q1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDRCQUpUO0FBS0MsaUJBQWUsb0ZBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTE4Q08sRUFrOUNQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx5QkFKVDtBQUtDLGlCQUFlLHVGQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsOUNPLEVBMDlDUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMkJBSlQ7QUFLQyxpQkFBZSxvREFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMTlDTyxFQWsrQ1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHdCQUpUO0FBS0MsaUJBQWUsaUVBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWwrQ08sRUEwK0NQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxnQ0FKVDtBQUtDLGlCQUFlLDhCQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExK0NPLEVBay9DUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsZ0NBSlQ7QUFLQyxpQkFBZSw4QkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbC9DTyxFQTAvQ1A7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHVCQUpUO0FBS0MsaUJBQWUsa0VBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTEvQ08sRUFrZ0RQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw2QkFKVDtBQUtDLGlCQUFlLGdDQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsZ0RPLEVBMGdEUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNEJBSlQ7QUFLQyxpQkFBZSwwQkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMWdETyxFQWtoRFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDhCQUpUO0FBS0MsaUJBQWUsb0VBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWxoRE8sRUEwaERQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx1QkFKVDtBQUtDLGlCQUFlLGlGQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExaERPLEVBa2lEUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNEJBSlQ7QUFLQyxpQkFBZSxxQkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbGlETyxFQTBpRFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDZCQUpUO0FBS0MsaUJBQWUseUNBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTFpRE8sRUFrakRQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw2QkFKVDtBQUtDLGlCQUFlLGdFQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsakRPLEVBMGpEUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMEJBSlQ7QUFLQyxpQkFBZSwyREFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMWpETyxFQWtrRFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDJCQUpUO0FBS0MsaUJBQWUsMkZBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWxrRE8sRUEwa0RQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx5QkFKVDtBQUtDLGlCQUFlLG1CQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0Exa0RPLEVBa2xEUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEseUJBSlQ7QUFLQyxpQkFBZSwwQkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbGxETyxFQTBsRFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDZCQUpUO0FBS0MsaUJBQWUsbUdBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTFsRE8sRUFrbURQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx1QkFKVDtBQUtDLGlCQUFlLHlDQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsbURPLEVBMG1EUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMkJBSlQ7QUFLQyxpQkFBZSx5REFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMW1ETyxFQWtuRFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDRCQUpUO0FBS0MsaUJBQWUscUVBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWxuRE8sRUEwbkRQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw0QkFKVDtBQUtDLGlCQUFlLDhCQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExbkRPLEVBa29EUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNEJBSlQ7QUFLQyxpQkFBZSwwQkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbG9ETyxFQTBvRFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDZCQUpUO0FBS0MsaUJBQWUsNkVBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQTFvRE8sRUFrcERQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwrQkFKVDtBQUtDLGlCQUFlLGlHQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FscERPLEVBMHBEUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsaUNBSlQ7QUFLQyxpQkFBZSwrREFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBMXBETyxFQWtxRFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDBCQUpUO0FBS0MsaUJBQWUsaUVBTGhCO0FBTUMsY0FBWSw2RUFOYjtBQU9DLFdBQVM7QUFQVixDQWxxRE8sRUEwcURQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw2QkFKVDtBQUtDLGlCQUFlLDJCQUxoQjtBQU1DLGNBQVksNkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExcURPLEVBa3JEUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNEJBSlQ7QUFLQyxpQkFBZSw2QkFMaEI7QUFNQyxjQUFZLDZFQU5iO0FBT0MsV0FBUztBQVBWLENBbHJETyxFQTByRFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHVCQUpUO0FBS0MsaUJBQWUsa0RBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQTFyRE8sRUFrc0RQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwyQkFKVDtBQUtDLGlCQUFlLDRFQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0Fsc0RPLEVBMHNEUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEseUJBSlQ7QUFLQyxpQkFBZSw0REFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBMXNETyxFQWt0RFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDJCQUpUO0FBS0MsaUJBQWUsa0RBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWx0RE8sRUEwdERQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxxQkFKVDtBQUtDLGlCQUFlLDhCQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExdERPLEVBa3VEUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEscUJBSlQ7QUFLQyxpQkFBZSx3QkFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBbHVETyxFQTB1RFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDRCQUpUO0FBS0MsaUJBQWUsdURBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQTF1RE8sRUFrdkRQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw0QkFKVDtBQUtDLGlCQUFlLHNDQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsdkRPLEVBMHZEUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMkJBSlQ7QUFLQyxpQkFBZSw0QkFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBMXZETyxFQWt3RFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHdCQUpUO0FBS0MsaUJBQWUscUNBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWx3RE8sRUEwd0RQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx5QkFKVDtBQUtDLGlCQUFlLG1DQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0Exd0RPLEVBa3hEUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMEJBSlQ7QUFLQyxpQkFBZSx5REFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBbHhETyxFQTB4RFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHlCQUpUO0FBS0MsaUJBQWUsd0RBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQTF4RE8sRUFreURQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw0QkFKVDtBQUtDLGlCQUFlLHFEQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FseURPLEVBMHlEUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNkJBSlQ7QUFLQyxpQkFBZSxnR0FMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBMXlETyxFQWt6RFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHNCQUpUO0FBS0MsaUJBQWUsaURBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWx6RE8sRUEwekRQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxzQkFKVDtBQUtDLGlCQUFlLHFEQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExekRPLEVBazBEUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsd0JBSlQ7QUFLQyxpQkFBZSxzSEFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBbDBETyxFQTAwRFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGtCQUpUO0FBS0MsaUJBQWUsMkNBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQTEwRE8sRUFrMURQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxrQkFKVDtBQUtDLGlCQUFlLGlDQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsMURPLEVBMDFEUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEseUJBSlQ7QUFLQyxpQkFBZSwrRkFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBMTFETyxFQWsyRFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHdCQUpUO0FBS0MsaUJBQWUscUVBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWwyRE8sRUEwMkRQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxjQUpUO0FBS0MsaUJBQWUsa0NBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQTEyRE8sRUFrM0RQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxjQUpUO0FBS0MsaUJBQWUsaUNBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWwzRE8sRUEwM0RQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx1QkFKVDtBQUtDLGlCQUFlLDhCQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExM0RPLEVBazREUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsdUJBSlQ7QUFLQyxpQkFBZSwrQkFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBbDRETyxFQTA0RFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLG1CQUpUO0FBS0MsaUJBQWUsOEJBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQTE0RE8sRUFrNURQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxtQkFKVDtBQUtDLGlCQUFlLDZDQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FsNURPLEVBMDVEUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsa0JBSlQ7QUFLQyxpQkFBZSx3QkFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBMTVETyxFQWs2RFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGtCQUpUO0FBS0MsaUJBQWUsaUJBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWw2RE8sRUEwNkRQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxpQkFKVDtBQUtDLGlCQUFlLDJFQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExNkRPLEVBazdEUDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsbUJBSlQ7QUFLQyxpQkFBZSw2RUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBbDdETyxFQTA3RFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGVBSlQ7QUFLQyxpQkFBZSwwRUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBMTdETyxFQWs4RFA7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGlCQUpUO0FBS0MsaUJBQWUsd0RBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWw4RE8sRUEwOERQO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxrQkFKVDtBQUtDLGlCQUFlLGlFQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0ExOERPLENBQWQ7QUFxOURBLElBQUlDLGNBQWMsR0FBRyxDQUNqQjtBQUNJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEVjtBQUlJLFVBQVEsZ0NBSlo7QUFLSSxpQkFBZSw0RUFMbkI7QUFNSSxjQUFZLDJDQU5oQjtBQU9JLFdBQVM7QUFQYixDQURpQixFQVNkO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxlQUpUO0FBS0MsaUJBQWUsMkNBTGhCO0FBTUMsY0FBWSwyQ0FOYjtBQU9DLFdBQVM7QUFQVixDQVRjLEVBaUJkO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxlQUpUO0FBS0MsaUJBQWUsb0JBTGhCO0FBTUMsY0FBWSwyQ0FOYjtBQU9DLFdBQVM7QUFQVixDQWpCYyxFQXlCZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEseUJBSlQ7QUFLQyxpQkFBZSwwQ0FMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBekJjLEVBaUNkO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx5QkFKVDtBQUtDLGlCQUFlLDRCQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqQ2MsRUF5Q2Q7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHdCQUpUO0FBS0MsaUJBQWUsbUZBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpDYyxFQWlEZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsNEJBSlQ7QUFLQyxpQkFBZSx3Q0FMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBakRjLEVBeURkO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw0QkFKVDtBQUtDLGlCQUFlLGlDQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6RGMsRUFpRWQ7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDZCQUpUO0FBS0MsaUJBQWUsb0RBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpFYyxFQXlFZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEseUJBSlQ7QUFLQyxpQkFBZSxtRkFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBekVjLEVBaUZkO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx3QkFKVDtBQUtDLGlCQUFlLG9HQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqRmMsRUF5RmQ7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHFCQUpUO0FBS0MsaUJBQWUsa0VBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpGYyxFQWlHZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEseUJBSlQ7QUFLQyxpQkFBZSxrSUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBakdjLEVBeUdkO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx1QkFKVDtBQUtDLGlCQUFlLGlEQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6R2MsRUFpSGQ7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHdCQUpUO0FBS0MsaUJBQWUsdUJBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpIYyxFQXlIZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsOEJBSlQ7QUFLQyxpQkFBZSxzR0FMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBekhjLEVBaUlkO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwwQkFKVDtBQUtDLGlCQUFlLGlEQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqSWMsRUF5SWQ7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDRCQUpUO0FBS0MsaUJBQWUsa0ZBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpJYyxFQWlKZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsYUFKVDtBQUtDLGlCQUFlLHlCQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqSmMsRUF5SmQ7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGFBSlQ7QUFLQyxpQkFBZSwwQ0FMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBekpjLEVBaUtkO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxvQkFKVDtBQUtDLGlCQUFlLDREQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqS2MsRUF5S2Q7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGVBSlQ7QUFLQyxpQkFBZSx3SEFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBektjLEVBaUxkO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxZQUpUO0FBS0MsaUJBQWUscUVBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpMYyxFQXlMZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsY0FKVDtBQUtDLGlCQUFlLGdDQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6TGMsRUFpTWQ7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGNBSlQ7QUFLQyxpQkFBZSxtQ0FMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBak1jLEVBeU1kO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxZQUpUO0FBS0MsaUJBQWUsOERBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpNYyxFQWlOZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsYUFKVDtBQUtDLGlCQUFlLDRFQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqTmMsRUF5TmQ7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGlCQUpUO0FBS0MsaUJBQWUseUdBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpOYyxFQWlPZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsWUFKVDtBQUtDLGlCQUFlLHlGQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqT2MsRUF5T2Q7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGdCQUpUO0FBS0MsaUJBQWUscUdBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpPYyxFQWlQZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsZ0JBSlQ7QUFLQyxpQkFBZSxtREFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBalBjLEVBeVBkO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxlQUpUO0FBS0MsaUJBQWUseUJBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpQYyxFQWlRZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsZ0JBSlQ7QUFLQyxpQkFBZSx1QkFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBalFjLEVBeVFkO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxnQkFKVDtBQUtDLGlCQUFlLHFDQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6UWMsRUFpUmQ7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGVBSlQ7QUFLQyxpQkFBZSx5QkFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBalJjLEVBeVJkO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxlQUpUO0FBS0MsaUJBQWUseUJBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpSYyxFQWlTZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsZUFKVDtBQUtDLGlCQUFlLDZCQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqU2MsRUF5U2Q7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGVBSlQ7QUFLQyxpQkFBZSxrRUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBelNjLEVBaVRkO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxjQUpUO0FBS0MsaUJBQWUsc0JBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpUYyxFQXlUZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsZUFKVDtBQUtDLGlCQUFlLGtDQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6VGMsRUFpVWQ7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGVBSlQ7QUFLQyxpQkFBZSw4SEFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBalVjLEVBeVVkO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxlQUpUO0FBS0MsaUJBQWUsOEJBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpVYyxFQWlWZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsZUFKVDtBQUtDLGlCQUFlLG1DQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqVmMsRUF5VmQ7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLG1CQUpUO0FBS0MsaUJBQWUsc0ZBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpWYyxFQWlXZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsa0JBSlQ7QUFLQyxpQkFBZSw2Q0FMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBaldjLEVBeVdkO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxhQUpUO0FBS0MsaUJBQWUsZ0VBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpXYyxFQWlYZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsZ0JBSlQ7QUFLQyxpQkFBZSx5REFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBalhjLEVBeVhkO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxZQUpUO0FBS0MsaUJBQWUsaUVBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpYYyxFQWlZZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsZUFKVDtBQUtDLGlCQUFlLHFDQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqWWMsRUF5WWQ7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLGdCQUpUO0FBS0MsaUJBQWUsc0NBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpZYyxFQWlaZDtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsYUFKVDtBQUtDLGlCQUFlLDhFQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqWmMsQ0FBckI7QUEyWkEsSUFBSUMsUUFBUSxHQUFHLENBQ1g7QUFDSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFY7QUFJSSxVQUFRLHdDQUpaO0FBS0ksaUJBQWUsNkVBTG5CO0FBTUksY0FBWSwyRUFOaEI7QUFPSSxXQUFTO0FBUGIsQ0FEVyxFQVNSO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxxQ0FKVDtBQUtDLGlCQUFlLHlEQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FUUSxFQWlCUjtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsd0NBSlQ7QUFLQyxpQkFBZSxzQkFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBakJRLEVBeUJSO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx3Q0FKVDtBQUtDLGlCQUFlLHVDQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6QlEsRUFpQ1I7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHdDQUpUO0FBS0MsaUJBQWUsa0VBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpDUSxFQXlDUjtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEscURBSlQ7QUFLQyxpQkFBZSx1RUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBekNRLEVBaURSO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwyQ0FKVDtBQUtDLGlCQUFlLG1DQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqRFEsRUF5RFI7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDJDQUpUO0FBS0MsaUJBQWUsd0NBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpEUSxFQWlFUjtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsdUNBSlQ7QUFLQyxpQkFBZSwrRUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBakVRLEVBeUVSO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxzQ0FKVDtBQUtDLGlCQUFlLHdEQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6RVEsRUFpRlI7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDJDQUpUO0FBS0MsaUJBQWUsMkRBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpGUSxFQXlGUjtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsOENBSlQ7QUFLQyxpQkFBZSwrQkFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBekZRLEVBaUdSO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw2Q0FKVDtBQUtDLGlCQUFlLCtCQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqR1EsRUF5R1I7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHNDQUpUO0FBS0MsaUJBQWUscUZBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpHUSxFQWlIUjtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsc0NBSlQ7QUFLQyxpQkFBZSx1REFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBakhRLEVBeUhSO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxzQ0FKVDtBQUtDLGlCQUFlLDJCQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6SFEsRUFpSVI7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLG9DQUpUO0FBS0MsaUJBQWUsbUNBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpJUSxFQXlJUjtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsd0NBSlQ7QUFLQyxpQkFBZSwrREFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBeklRLEVBaUpSO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxzQ0FKVDtBQUtDLGlCQUFlLDZDQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqSlEsRUF5SlI7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLG1DQUpUO0FBS0MsaUJBQWUsK0VBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpKUSxFQWlLUjtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsOEJBSlQ7QUFLQyxpQkFBZSx5QkFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBaktRLEVBeUtSO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSw4QkFKVDtBQUtDLGlCQUFlLHVDQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6S1EsRUFpTFI7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHNDQUpUO0FBS0MsaUJBQWUsbUVBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpMUSxFQXlMUjtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsc0NBSlQ7QUFLQyxpQkFBZSwrRUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBekxRLEVBaU1SO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxzQ0FKVDtBQUtDLGlCQUFlLDJDQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqTVEsRUF5TVI7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHVDQUpUO0FBS0MsaUJBQWUsMENBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpNUSxFQWlOUjtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsd0NBSlQ7QUFLQyxpQkFBZSx1REFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBak5RLEVBeU5SO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwyQ0FKVDtBQUtDLGlCQUFlLDhCQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6TlEsRUFpT1I7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDZDQUpUO0FBS0MsaUJBQWUsaUNBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpPUSxFQXlPUjtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMENBSlQ7QUFLQyxpQkFBZSwyQkFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBek9RLEVBaVBSO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx5Q0FKVDtBQUtDLGlCQUFlLHVCQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqUFEsRUF5UFI7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHlDQUpUO0FBS0MsaUJBQWUsa0VBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpQUSxFQWlRUjtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsK0NBSlQ7QUFLQyxpQkFBZSx5RUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBalFRLEVBeVFSO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSx1QkFKVDtBQUtDLGlCQUFlLHNFQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6UVEsRUFpUlI7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLDZDQUpUO0FBS0MsaUJBQWUsZ0VBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpSUSxFQXlSUjtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMkNBSlQ7QUFLQyxpQkFBZSxnRUFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBelJRLEVBaVNSO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxvRUFKVDtBQUtDLGlCQUFlLDBEQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqU1EsRUF5U1I7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLCtCQUpUO0FBS0MsaUJBQWUsZ0RBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQXpTUSxFQWlUUjtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsK0JBSlQ7QUFLQyxpQkFBZSxnQ0FMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBalRRLEVBeVRSO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSxzQ0FKVDtBQUtDLGlCQUFlLHdFQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0F6VFEsRUFpVVI7QUFDQyxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBRFA7QUFJQyxVQUFRLHVFQUpUO0FBS0MsaUJBQWUsbURBTGhCO0FBTUMsY0FBWSwyRUFOYjtBQU9DLFdBQVM7QUFQVixDQWpVUSxFQXlVUjtBQUNDLFFBQU07QUFDRixZQUFRO0FBRE4sR0FEUDtBQUlDLFVBQVEsMkNBSlQ7QUFLQyxpQkFBZSwyQkFMaEI7QUFNQyxjQUFZLDJFQU5iO0FBT0MsV0FBUztBQVBWLENBelVRLEVBaVZSO0FBQ0MsUUFBTTtBQUNGLFlBQVE7QUFETixHQURQO0FBSUMsVUFBUSwyQ0FKVDtBQUtDLGlCQUFlLHdCQUxoQjtBQU1DLGNBQVksMkVBTmI7QUFPQyxXQUFTO0FBUFYsQ0FqVlEsQ0FBZjtBQTRWTyxJQUFJQyxPQUFPLEdBQUdILE9BQU8sQ0FBQ0ksTUFBUixDQUFlSCxjQUFmLEVBQStCRyxNQUEvQixDQUFzQ0YsUUFBdEMsQ0FBZCxDOzs7Ozs7Ozs7Ozs7QUM1c0ZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1HLE1BQU0sR0FBSSw2QkFBaEI7QUFDQSxNQUFNQyxNQUFNLEdBQUksbUNBQWhCO0FBQ0EsTUFBTUMsTUFBTSxHQUFJLGdEQUFoQjtBQUVBLElBQUlQLE9BQU8sR0FBR0csZ0RBQWQ7QUFDQUgsT0FBTyxHQUFHQSxPQUFPLENBQUNJLE1BQVIsQ0FBZUksOERBQWYsRUFBK0JKLE1BQS9CLENBQXNDSyxtREFBdEMsRUFBaURMLE1BQWpELENBQXdETCw0RUFBeEQsQ0FBVjtBQUVBOztBQUNBLFNBQVNXLFdBQVQsQ0FBcUIvRixLQUFLLEdBQUc7QUFBQ0UsV0FBUyxFQUFFbUYsT0FBTyxDQUFDeEQsTUFBcEI7QUFBNEIvQixPQUFLLEVBQUV1RixPQUFuQztBQUE0Q3BGLGVBQWEsRUFBRSxJQUEzRDtBQUFpRW9CLE9BQUssRUFBRTtBQUF4RSxDQUE3QixFQUEwRzJFLE1BQTFHLEVBQWtIO0FBQzlHLFVBQVFBLE1BQU0sQ0FBQ2pFLElBQWY7QUFDSSxTQUFLLFVBQUw7QUFDSSxhQUFPO0FBQ0g3QixpQkFBUyxFQUFFLENBQUMsQ0FEVDtBQUVISixhQUFLLEVBQUUsRUFGSjtBQUdIRyxxQkFBYSxFQUFFLEtBSFo7QUFJSG9CLGFBQUssRUFBRTtBQUpKLE9BQVA7O0FBTUosU0FBSyxXQUFMO0FBQ0ksYUFBTztBQUNIbkIsaUJBQVMsRUFBRSxDQUFDLENBRFQ7QUFFSEosYUFBSyxFQUFFLEVBRko7QUFHSEcscUJBQWEsRUFBRSxLQUhaO0FBSUhvQixhQUFLLEVBQUU7QUFKSixPQUFQOztBQU1KLFNBQUssU0FBTDtBQUNJNEMsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBLFVBQUkrQixZQUFZLEdBQUdaLE9BQU8sQ0FBQ2EsTUFBUixDQUFlNUYsSUFBSSxJQUFJQSxJQUFJLENBQUM2RixLQUFMLEtBQWUsT0FBdEMsRUFBK0NDLEtBQS9DLEVBQW5CO0FBQ0EsYUFBTztBQUNIdEcsYUFBSyxFQUFFbUcsWUFESjtBQUVIaEcscUJBQWEsRUFBRSxJQUZaO0FBR0hDLGlCQUFTLEVBQUVtRixPQUFPLENBQUN4RCxNQUhoQjtBQUlIUixhQUFLLEVBQUU7QUFKSixPQUFQOztBQU1KLFNBQUssS0FBTDtBQUNJNEMsYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBLGFBQU87QUFDSHBFLGFBQUssRUFBRXVGLE9BREo7QUFFSHBGLHFCQUFhLEVBQUUsSUFGWjtBQUdIQyxpQkFBUyxFQUFFbUYsT0FBTyxDQUFDeEQsTUFIaEI7QUFJSFIsYUFBSyxFQUFFO0FBSkosT0FBUDs7QUFNSixTQUFLLFNBQUw7QUFDSSxVQUFJZ0YsUUFBUSxHQUFHaEIsT0FBTyxDQUFDYSxNQUFSLENBQWU1RixJQUFJLElBQUlBLElBQUksQ0FBQzZGLEtBQUwsS0FBZVQsTUFBdEMsRUFBOENVLEtBQTlDLEVBQWY7QUFDQSxhQUFPO0FBQ0h0RyxhQUFLLEVBQUV1RyxRQURKO0FBRUhwRyxxQkFBYSxFQUFFLElBRlo7QUFHSEMsaUJBQVMsRUFBRW1HLFFBQVEsQ0FBQ3hFLE1BSGpCO0FBSUhSLGFBQUssRUFBRTtBQUpKLE9BQVA7O0FBTUosU0FBSyxTQUFMO0FBQ0ksVUFBSWlGLFNBQVMsR0FBR2pCLE9BQU8sQ0FBQ2EsTUFBUixDQUFlNUYsSUFBSSxJQUFJQSxJQUFJLENBQUM2RixLQUFMLEtBQWVSLE1BQXRDLEVBQThDUyxLQUE5QyxFQUFoQjtBQUNBLGFBQU87QUFDSHRHLGFBQUssRUFBRXdHLFNBREo7QUFFSHJHLHFCQUFhLEVBQUUsSUFGWjtBQUdIQyxpQkFBUyxFQUFFb0csU0FBUyxDQUFDekUsTUFIbEI7QUFJSFIsYUFBSyxFQUFFO0FBSkosT0FBUDs7QUFNSixTQUFLLFNBQUw7QUFDSSxVQUFJa0YsU0FBUyxHQUFHbEIsT0FBTyxDQUFDYSxNQUFSLENBQWU1RixJQUFJLElBQUlBLElBQUksQ0FBQzZGLEtBQUwsS0FBZVAsTUFBdEMsRUFBOENRLEtBQTlDLEVBQWhCO0FBQ0EsYUFBTztBQUNIdEcsYUFBSyxFQUFFeUcsU0FESjtBQUVIdEcscUJBQWEsRUFBRSxJQUZaO0FBR0hDLGlCQUFTLEVBQUVxRyxTQUFTLENBQUMxRSxNQUhsQjtBQUlIUixhQUFLLEVBQUU7QUFKSixPQUFQOztBQU1KLFNBQUssUUFBTDtBQUNJLFVBQUltRixDQUFDLEdBQUdSLE1BQU0sQ0FBQy9ELEtBQVAsQ0FBYXdFLFdBQWIsRUFBUjtBQUNBeEMsYUFBTyxDQUFDQyxHQUFSLENBQWEsWUFBV3NDLENBQUUsRUFBMUI7QUFDQSxVQUFJRSxTQUFTLEdBQUdyQixPQUFPLENBQUNhLE1BQVIsQ0FBZTVGLElBQUksSUFBSTtBQUNuQyxZQUFJcUcsUUFBUSxHQUFHckcsSUFBSSxDQUFDM0MsSUFBTCxDQUFVOEksV0FBVixFQUFmO0FBQ0EsWUFBSUcsSUFBSSxHQUFJRCxRQUFRLENBQUNFLFVBQVQsQ0FBb0JMLENBQXBCLEtBQTBCRyxRQUFRLENBQUM3RSxRQUFULENBQWtCMEUsQ0FBbEIsQ0FBdEM7QUFDQXZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFhLFdBQVV5QyxRQUFTLGFBQVlILENBQUUsZUFBY0ksSUFBSyxFQUFqRTtBQUNBLGVBQU9BLElBQVA7QUFDSCxPQUxlLENBQWhCO0FBTUEsYUFBTyxFQUNILEdBQUc1RyxLQURBO0FBRUhGLGFBQUssRUFBRTRHLFNBRko7QUFHSHpHLHFCQUFhLEVBQUUsSUFIWjtBQUlIQyxpQkFBUyxFQUFFd0csU0FBUyxDQUFDN0UsTUFKbEI7QUFLSFIsYUFBSyxFQUFFO0FBTEosT0FBUDs7QUFPSixTQUFLLE9BQUw7QUFDSTRDLGFBQU8sQ0FBQ0MsR0FBUixDQUFhLFdBQWI7QUFDQSxhQUFPO0FBQ0g3QyxhQUFLLEVBQUUyRSxNQUFNLENBQUNoRSxHQURYO0FBRUg5QixpQkFBUyxFQUFFLENBRlI7QUFHSEosYUFBSyxFQUFFLEVBSEo7QUFJSEcscUJBQWEsRUFBRTtBQUpaLE9BQVA7O0FBTUo7QUFDSSxhQUFPO0FBQ0hILGFBQUssRUFBRXNGLDRFQURKO0FBRUhuRixxQkFBYSxFQUFFLElBRlo7QUFHSEMsaUJBQVMsRUFBRWtGLDRFQUFxQixDQUFDdkQsTUFIOUI7QUFJSFIsYUFBSyxFQUFFO0FBSkosT0FBUDtBQWpGUjtBQXdGSDs7QUFFTSxNQUFNNUUsU0FBUyxHQUFHcUsseURBQVcsQ0FBQ2YsV0FBRCxDQUE3QjtBQUVQdEosU0FBUyxDQUFDc0ssU0FBVixDQUFvQixNQUNoQjlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9EQUFvRHpILFNBQVMsQ0FBQ3VLLFFBQVYsR0FBcUI5RyxTQUFyRixDQURKLEU7Ozs7Ozs7Ozs7OztBQzNHQTtBQUFBO0FBQU8sSUFBSTRGLFNBQVMsR0FBRyxDQUNuQjtBQUNJLGNBQVksMkNBRGhCO0FBRUksaUJBQWUsMEZBRm5CO0FBR0ksVUFBUSwwREFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQURtQixFQVVuQjtBQUNJLGNBQVksMkNBRGhCO0FBRUksaUJBQWUsdUlBRm5CO0FBR0ksVUFBUSxrREFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQVZtQixFQW1CbkI7QUFDSSxjQUFZLDJDQURoQjtBQUVJLGlCQUFlLDZFQUZuQjtBQUdJLFVBQVEsbURBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FuQm1CLEVBNEJuQjtBQUNJLGNBQVksMkNBRGhCO0FBRUksaUJBQWUsNkRBRm5CO0FBR0ksVUFBUSwrRUFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTVCbUIsRUFxQ25CO0FBQ0ksY0FBWSwyQ0FEaEI7QUFFSSxpQkFBZSxzREFGbkI7QUFHSSxVQUFRLCtFQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBckNtQixFQThDbkI7QUFDSSxjQUFZLDJDQURoQjtBQUVJLGlCQUFlLDREQUZuQjtBQUdJLFVBQVEsbUVBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E5Q21CLEVBdURuQjtBQUNJLGNBQVksMkNBRGhCO0FBRUksaUJBQWUsOENBRm5CO0FBR0ksVUFBUSxtRUFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXZEbUIsRUFnRW5CO0FBQ0ksY0FBWSwyQ0FEaEI7QUFFSSxpQkFBZSxpQ0FGbkI7QUFHSSxVQUFRLG1FQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBaEVtQixDQUFoQixDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0FBQU8sSUFBSUQsY0FBYyxHQUFHLENBQ3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSwwQ0FGbkI7QUFHSSxVQUFRLGtDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBRHdCLEVBVXhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxtREFGbkI7QUFHSSxVQUFRLGtDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBVndCLEVBbUJ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsMkJBRm5CO0FBR0ksVUFBUSw2QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQW5Cd0IsRUE0QnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxpQ0FGbkI7QUFHSSxVQUFRLDZCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBNUJ3QixFQXFDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHdDQUZuQjtBQUdJLFVBQVEsK0JBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FyQ3dCLEVBOEN4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsNkNBRm5CO0FBR0ksVUFBUSwrQkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTlDd0IsRUF1RHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxzQkFGbkI7QUFHSSxVQUFRLHNDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBdkR3QixFQWdFeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDBCQUZuQjtBQUdJLFVBQVEsc0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FoRXdCLEVBeUV4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsa0RBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXpFd0IsRUFrRnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx3QkFGbkI7QUFHSSxVQUFRLCtCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBbEZ3QixFQTJGeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDBCQUZuQjtBQUdJLFVBQVEsK0JBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0EzRndCLEVBb0d4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsMERBRm5CO0FBR0ksVUFBUSw2QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXBHd0IsRUE2R3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx1R0FGbkI7QUFHSSxVQUFRLG1DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBN0d3QixFQXNIeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHVCQUZuQjtBQUdJLFVBQVEsOEJBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F0SHdCLEVBK0h4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsc0JBRm5CO0FBR0ksVUFBUSw4QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQS9Id0IsRUF3SXhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxvREFGbkI7QUFHSSxVQUFRLHVDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBeEl3QixFQWlKeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDJCQUZuQjtBQUdJLFVBQVEsdUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FqSndCLEVBMEp4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsNENBRm5CO0FBR0ksVUFBUSw4QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTFKd0IsRUFtS3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxtRkFGbkI7QUFHSSxVQUFRLDhCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBbkt3QixFQTRLeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHlCQUZuQjtBQUdJLFVBQVEsb0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E1S3dCLEVBcUx4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsc0JBRm5CO0FBR0ksVUFBUSxvQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXJMd0IsRUE4THhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxnQ0FGbkI7QUFHSSxVQUFRLHFDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBOUx3QixFQXVNeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDJCQUZuQjtBQUdJLFVBQVEscUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F2TXdCLEVBZ054QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsd0NBRm5CO0FBR0ksVUFBUSxtQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQWhOd0IsRUF5TnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxvQ0FGbkI7QUFHSSxVQUFRLG1DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBek53QixFQWtPeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDZDQUZuQjtBQUdJLFVBQVEsOEJBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FsT3dCLEVBMk94QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsOEJBRm5CO0FBR0ksVUFBUSw4QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTNPd0IsRUFvUHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSwwQ0FGbkI7QUFHSSxVQUFRLGlDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBcFB3QixFQTZQeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDZCQUZuQjtBQUdJLFVBQVEsaUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E3UHdCLEVBc1F4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsMEJBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXRRd0IsRUErUXhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxtQ0FGbkI7QUFHSSxVQUFRLG1DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBL1F3QixFQXdSeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLCtDQUZuQjtBQUdJLFVBQVEsbUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F4UndCLEVBaVN4QjtBQUNJLGNBQVksMkNBRGhCO0FBRUksaUJBQWUsNkdBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQWpTd0IsRUEwU3hCO0FBQ0ksY0FBWSwyQ0FEaEI7QUFFSSxpQkFBZSw2QkFGbkI7QUFHSSxVQUFRLGlDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBMVN3QixFQW1UeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGtGQUZuQjtBQUdJLFVBQVEsa0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FuVHdCLEVBNFR4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsc0VBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTVUd0IsRUFxVXhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSw4RUFGbkI7QUFHSSxVQUFRLDZCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBclV3QixFQThVeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGdFQUZuQjtBQUdJLFVBQVEsa0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E5VXdCLEVBdVZ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsb0lBRm5CO0FBR0ksVUFBUSx3Q0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXZWd0IsRUFnV3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxvRkFGbkI7QUFHSSxVQUFRLDBDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBaFd3QixFQXlXeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLCtCQUZuQjtBQUdJLFVBQVEsZ0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F6V3dCLEVBa1h4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsOEJBRm5CO0FBR0ksVUFBUSxnQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQWxYd0IsRUEyWHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxpQ0FGbkI7QUFHSSxVQUFRLG1DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBM1h3QixFQW9ZeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDZCQUZuQjtBQUdJLFVBQVEsbUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FwWXdCLEVBNll4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsNkJBRm5CO0FBR0ksVUFBUSw2QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTdZd0IsRUFzWnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx1QkFGbkI7QUFHSSxVQUFRLDZCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBdFp3QixFQStaeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHlCQUZuQjtBQUdJLFVBQVEsNkJBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0EvWndCLEVBd2F4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsMEJBRm5CO0FBR0ksVUFBUSw0QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXhhd0IsRUFpYnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx5QkFGbkI7QUFHSSxVQUFRLDRCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBamJ3QixFQTBieEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDhCQUZuQjtBQUdJLFVBQVEsbUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0ExYndCLEVBbWN4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsNkJBRm5CO0FBR0ksVUFBUSxtQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQW5jd0IsRUE0Y3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx1QkFGbkI7QUFHSSxVQUFRLG1DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBNWN3QixFQXFkeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGtDQUZuQjtBQUdJLFVBQVEscUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FyZHdCLEVBOGR4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsaUVBRm5CO0FBR0ksVUFBUSxxQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTlkd0IsRUF1ZXhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxvREFGbkI7QUFHSSxVQUFRLHVDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBdmV3QixFQWdmeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLG1GQUZuQjtBQUdJLFVBQVEsbUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FoZndCLEVBeWZ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsNkJBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXpmd0IsRUFrZ0J4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUscUJBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQWxnQndCLEVBMmdCeEI7QUFDSSxjQUFZLDJDQURoQjtBQUVJLGlCQUFlLGtDQUZuQjtBQUdJLFVBQVEsb0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0EzZ0J3QixFQW9oQnhCO0FBQ0ksY0FBWSwyQ0FEaEI7QUFFSSxpQkFBZSxnQ0FGbkI7QUFHSSxVQUFRLG9DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBcGhCd0IsRUE2aEJ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsZ0RBRm5CO0FBR0ksVUFBUSxrQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTdoQndCLEVBc2lCeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHlCQUZuQjtBQUdJLFVBQVEsc0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F0aUJ3QixFQStpQnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSwyQkFGbkI7QUFHSSxVQUFRLHNDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBL2lCd0IsRUF3akJ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsc0JBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXhqQndCLEVBaWtCeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDhDQUZuQjtBQUdJLFVBQVEsaUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0Fqa0J3QixFQTBrQnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSwwREFGbkI7QUFHSSxVQUFRLGlDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBMWtCd0IsRUFtbEJ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsZ0ZBRm5CO0FBR0ksVUFBUSw4QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQW5sQndCLEVBNGxCeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLG9EQUZuQjtBQUdJLFVBQVEsbUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E1bEJ3QixFQXFtQnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxvRkFGbkI7QUFHSSxVQUFRLHlDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBcm1Cd0IsRUE4bUJ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsNkRBRm5CO0FBR0ksVUFBUSxnQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTltQndCLEVBdW5CeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGlFQUZuQjtBQUdJLFVBQVEsbUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F2bkJ3QixFQWdvQnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx3Q0FGbkI7QUFHSSxVQUFRLG1DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBaG9Cd0IsRUF5b0J4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsd0RBRm5CO0FBR0ksVUFBUSxtQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXpvQndCLEVBa3BCeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHNFQUZuQjtBQUdJLFVBQVEsa0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FscEJ3QixFQTJwQnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxtRkFGbkI7QUFHSSxVQUFRLGlDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBM3BCd0IsRUFvcUJ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsaUNBRm5CO0FBR0ksVUFBUSxxQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXBxQndCLEVBNnFCeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDZCQUZuQjtBQUdJLFVBQVEscUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E3cUJ3QixFQXNyQnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxtRUFGbkI7QUFHSSxVQUFRLCtCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBdHJCd0IsRUErckJ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUseUJBRm5CO0FBR0ksVUFBUSwrQkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQS9yQndCLEVBd3NCeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGtDQUZuQjtBQUdJLFVBQVEsa0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F4c0J3QixFQWl0QnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSwwQ0FGbkI7QUFHSSxVQUFRLGtDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBanRCd0IsRUEwdEJ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUscUJBRm5CO0FBR0ksVUFBUSxnQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTF0QndCLEVBbXVCeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLG1DQUZuQjtBQUdJLFVBQVEsZ0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FudUJ3QixFQTR1QnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx1QkFGbkI7QUFHSSxVQUFRLGlDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBNXVCd0IsRUFxdkJ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsd0JBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXJ2QndCLEVBOHZCeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGlFQUZuQjtBQUdJLFVBQVEscUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E5dkJ3QixFQXV3QnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx5QkFGbkI7QUFHSSxVQUFRLGlDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBdndCd0IsRUFneEJ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsb0JBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQWh4QndCLEVBeXhCeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGlJQUZuQjtBQUdJLFVBQVEsb0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F6eEJ3QixFQWt5QnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxzQ0FGbkI7QUFHSSxVQUFRLHFDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBbHlCd0IsRUEyeUJ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUseUJBRm5CO0FBR0ksVUFBUSxxQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTN5QndCLEVBb3pCeEI7QUFDSSxjQUFZLDJDQURoQjtBQUVJLGlCQUFlLDhGQUZuQjtBQUdJLFVBQVEsZ0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FwekJ3QixFQTZ6QnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxpQ0FGbkI7QUFHSSxVQUFRLDhCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBN3pCd0IsRUFzMEJ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsc0JBRm5CO0FBR0ksVUFBUSw4QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXQwQndCLEVBKzBCeEI7QUFDSSxjQUFZLDJDQURoQjtBQUVJLGlCQUFlLHFCQUZuQjtBQUdJLFVBQVEsOEJBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0EvMEJ3QixFQXcxQnhCO0FBQ0ksY0FBWSwyQ0FEaEI7QUFFSSxpQkFBZSx5QkFGbkI7QUFHSSxVQUFRLDhCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBeDFCd0IsRUFpMkJ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsMkVBRm5CO0FBR0ksVUFBUSwyQkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQWoyQndCLEVBMDJCeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDRCQUZuQjtBQUdJLFVBQVEsZ0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0ExMkJ3QixFQW0zQnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxnQ0FGbkI7QUFHSSxVQUFRLGdDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBbjNCd0IsRUE0M0J4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsc0VBRm5CO0FBR0ksVUFBUSwrQkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTUzQndCLEVBcTRCeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHNDQUZuQjtBQUdJLFVBQVEscUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FyNEJ3QixFQTg0QnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSw2QkFGbkI7QUFHSSxVQUFRLHFDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBOTRCd0IsRUF1NUJ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsNkJBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXY1QndCLEVBZzZCeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHlCQUZuQjtBQUdJLFVBQVEsaUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FoNkJ3QixFQXk2QnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx5Q0FGbkI7QUFHSSxVQUFRLDZCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBejZCd0IsRUFrN0J4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsNkJBRm5CO0FBR0ksVUFBUSw0QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQWw3QndCLEVBMjdCeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDZCQUZuQjtBQUdJLFVBQVEsa0RBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0EzN0J3QixFQW84QnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSw2QkFGbkI7QUFHSSxVQUFRLGtEQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBcDhCd0IsRUE2OEJ4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsa0NBRm5CO0FBR0ksVUFBUSxvQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTc4QndCLEVBczlCeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDhCQUZuQjtBQUdJLFVBQVEsb0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F0OUJ3QixFQSs5QnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxrQ0FGbkI7QUFHSSxVQUFRLGtDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBLzlCd0IsRUF3K0J4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsb0JBRm5CO0FBR0ksVUFBUSxrQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXgrQndCLEVBaS9CeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHlGQUZuQjtBQUdJLFVBQVEsa0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FqL0J3QixFQTAvQnhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx5Q0FGbkI7QUFHSSxVQUFRLCtCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBMS9Cd0IsRUFtZ0N4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsMkJBRm5CO0FBR0ksVUFBUSwrQkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQW5nQ3dCLEVBNGdDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLCtFQUZuQjtBQUdJLFVBQVEsa0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E1Z0N3QixFQXFoQ3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSwrQkFGbkI7QUFHSSxVQUFRLG9DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBcmhDd0IsRUE4aEN4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsaUVBRm5CO0FBR0ksVUFBUSxvQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTloQ3dCLEVBdWlDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLG1CQUZuQjtBQUdJLFVBQVEsaUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F2aUN3QixFQWdqQ3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSwrQkFGbkI7QUFHSSxVQUFRLGlDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBaGpDd0IsRUF5akN4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsNEJBRm5CO0FBR0ksVUFBUSxnQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXpqQ3dCLEVBa2tDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDBDQUZuQjtBQUdJLFVBQVEsZ0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0Fsa0N3QixFQTJrQ3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxpQ0FGbkI7QUFHSSxVQUFRLG9DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBM2tDd0IsRUFvbEN4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsZ0NBRm5CO0FBR0ksVUFBUSxvQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXBsQ3dCLEVBNmxDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDhCQUZuQjtBQUdJLFVBQVEsK0JBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E3bEN3QixFQXNtQ3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSw2QkFGbkI7QUFHSSxVQUFRLCtCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBdG1Dd0IsRUErbUN4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUscUNBRm5CO0FBR0ksVUFBUSxrQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQS9tQ3dCLEVBd25DeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDJCQUZuQjtBQUdJLFVBQVEsa0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F4bkN3QixFQWlvQ3hCO0FBQ0ksY0FBWSwyQ0FEaEI7QUFFSSxpQkFBZSxvREFGbkI7QUFHSSxVQUFRLHNDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBam9Dd0IsRUEwb0N4QjtBQUNJLGNBQVksMkNBRGhCO0FBRUksaUJBQWUsNkJBRm5CO0FBR0ksVUFBUSxtQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTFvQ3dCLEVBbXBDeEI7QUFDSSxjQUFZLDJDQURoQjtBQUVJLGlCQUFlLDJIQUZuQjtBQUdJLFVBQVEsbUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FucEN3QixFQTRwQ3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx3QkFGbkI7QUFHSSxVQUFRLDhCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBNXBDd0IsRUFxcUN4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsdUJBRm5CO0FBR0ksVUFBUSw4QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXJxQ3dCLEVBOHFDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDZDQUZuQjtBQUdJLFVBQVEsb0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E5cUN3QixFQXVyQ3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxzQkFGbkI7QUFHSSxVQUFRLG9DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBdnJDd0IsRUFnc0N4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsd0JBRm5CO0FBR0ksVUFBUSxvQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQWhzQ3dCLEVBeXNDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGlDQUZuQjtBQUdJLFVBQVEsb0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F6c0N3QixFQWt0Q3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSw4REFGbkI7QUFHSSxVQUFRLDZCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBbHRDd0IsRUEydEN4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsc0NBRm5CO0FBR0ksVUFBUSxnQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTN0Q3dCLEVBb3VDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGdDQUZuQjtBQUdJLFVBQVEsZ0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FwdUN3QixFQTZ1Q3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSwwQkFGbkI7QUFHSSxVQUFRLDZCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBN3VDd0IsRUFzdkN4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUscUJBRm5CO0FBR0ksVUFBUSw2QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXR2Q3dCLEVBK3ZDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHdDQUZuQjtBQUdJLFVBQVEsK0JBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0EvdkN3QixFQXd3Q3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx5QkFGbkI7QUFHSSxVQUFRLCtCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBeHdDd0IsRUFpeEN4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsOEJBRm5CO0FBR0ksVUFBUSw2QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQWp4Q3dCLEVBMHhDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHNDQUZuQjtBQUdJLFVBQVEsNkJBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0ExeEN3QixFQW15Q3hCO0FBQ0ksY0FBWSwyQ0FEaEI7QUFFSSxpQkFBZSw4RUFGbkI7QUFHSSxVQUFRLHFDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBbnlDd0IsRUE0eUN4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsa0VBRm5CO0FBR0ksVUFBUSx3Q0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTV5Q3dCLEVBcXpDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHdIQUZuQjtBQUdJLFVBQVEsK0JBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FyekN3QixFQTh6Q3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxpRUFGbkI7QUFHSSxVQUFRLDhCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBOXpDd0IsRUF1MEN4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsOEVBRm5CO0FBR0ksVUFBUSxnQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXYwQ3dCLEVBZzFDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGtIQUZuQjtBQUdJLFVBQVEseUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FoMUN3QixFQXkxQ3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSwyQkFGbkI7QUFHSSxVQUFRLGlDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBejFDd0IsRUFrMkN4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsa0VBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQWwyQ3dCLEVBMjJDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGtGQUZuQjtBQUdJLFVBQVEsb0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0EzMkN3QixFQW8zQ3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSw4QkFGbkI7QUFHSSxVQUFRLG9DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBcDNDd0IsRUE2M0N4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsb0NBRm5CO0FBR0ksVUFBUSxnQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTczQ3dCLEVBczRDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGdDQUZuQjtBQUdJLFVBQVEsZ0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F0NEN3QixFQSs0Q3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxpQ0FGbkI7QUFHSSxVQUFRLDhCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBLzRDd0IsRUF3NUN4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUscUJBRm5CO0FBR0ksVUFBUSw4QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXg1Q3dCLEVBaTZDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLCtCQUZuQjtBQUdJLFVBQVEsc0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FqNkN3QixFQTA2Q3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxvQ0FGbkI7QUFHSSxVQUFRLHNDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBMTZDd0IsRUFtN0N4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsbUVBRm5CO0FBR0ksVUFBUSxxQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQW43Q3dCLEVBNDdDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLG1CQUZuQjtBQUdJLFVBQVEsOEJBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E1N0N3QixFQXE4Q3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxpQ0FGbkI7QUFHSSxVQUFRLDhCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBcjhDd0IsRUE4OEN4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsbUJBRm5CO0FBR0ksVUFBUSwrQkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTk4Q3dCLEVBdTlDeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHFCQUZuQjtBQUdJLFVBQVEsK0JBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F2OUN3QixFQWcrQ3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxvQ0FGbkI7QUFHSSxVQUFRLDZCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBaCtDd0IsRUF5K0N4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsZ0NBRm5CO0FBR0ksVUFBUSw2QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXorQ3dCLEVBay9DeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGdFQUZuQjtBQUdJLFVBQVEsbUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FsL0N3QixFQTIvQ3hCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxrQ0FGbkI7QUFHSSxVQUFRLG1DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBMy9Dd0IsRUFvZ0R4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsMEJBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXBnRHdCLEVBNmdEeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGlDQUZuQjtBQUdJLFVBQVEsaUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E3Z0R3QixFQXNoRHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxrRUFGbkI7QUFHSSxVQUFRLGdDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBdGhEd0IsRUEraER4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUseUNBRm5CO0FBR0ksVUFBUSxnQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQS9oRHdCLEVBd2lEeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGdDQUZuQjtBQUdJLFVBQVEsOEJBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F4aUR3QixFQWlqRHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSw4QkFGbkI7QUFHSSxVQUFRLDhCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBampEd0IsRUEwakR4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsa0VBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTFqRHdCLEVBbWtEeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDRDQUZuQjtBQUdJLFVBQVEseUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0Fua0R3QixFQTRrRHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSwrQkFGbkI7QUFHSSxVQUFRLHlDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBNWtEd0IsRUFxbER4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsa0ZBRm5CO0FBR0ksVUFBUSxnQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXJsRHdCLEVBOGxEeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGdDQUZuQjtBQUdJLFVBQVEsa0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E5bER3QixFQXVtRHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx5QkFGbkI7QUFHSSxVQUFRLGtDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBdm1Ed0IsRUFnbkR4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsd0RBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQWhuRHdCLEVBeW5EeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGdDQUZuQjtBQUdJLFVBQVEsaUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F6bkR3QixFQWtvRHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSw4Q0FGbkI7QUFHSSxVQUFRLG9DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBbG9Ed0IsRUEyb0R4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsOEJBRm5CO0FBR0ksVUFBUSxvQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTNvRHdCLEVBb3BEeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGlGQUZuQjtBQUdJLFVBQVEscUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FwcER3QixFQTZwRHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxzQ0FGbkI7QUFHSSxVQUFRLHVDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBN3BEd0IsRUFzcUR4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsbUJBRm5CO0FBR0ksVUFBUSx1Q0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXRxRHdCLEVBK3FEeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDhCQUZuQjtBQUdJLFVBQVEsdUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0EvcUR3QixFQXdyRHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx1Q0FGbkI7QUFHSSxVQUFRLHVDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBeHJEd0IsRUFpc0R4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUseUNBRm5CO0FBR0ksVUFBUSxzQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQWpzRHdCLEVBMHNEeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDRFQUZuQjtBQUdJLFVBQVEsc0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0Exc0R3QixFQW10RHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx3REFGbkI7QUFHSSxVQUFRLG1DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBbnREd0IsRUE0dER4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsOERBRm5CO0FBR0ksVUFBUSw0QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTV0RHdCLEVBcXVEeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHVHQUZuQjtBQUdJLFVBQVEsb0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FydUR3QixFQTh1RHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx1RUFGbkI7QUFHSSxVQUFRLGlDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBOXVEd0IsRUF1dkR4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsK0JBRm5CO0FBR0ksVUFBUSwrQkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXZ2RHdCLEVBZ3dEeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHNCQUZuQjtBQUdJLFVBQVEsK0JBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0Fod0R3QixFQXl3RHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx1REFGbkI7QUFHSSxVQUFRLHFEQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBendEd0IsRUFreER4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsNEJBRm5CO0FBR0ksVUFBUSxnQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQWx4RHdCLEVBMnhEeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHNCQUZuQjtBQUdJLFVBQVEsZ0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0EzeER3QixFQW95RHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxzQkFGbkI7QUFHSSxVQUFRLGlDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBcHlEd0IsRUE2eUR4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUscUJBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTd5RHdCLEVBc3pEeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHdDQUZuQjtBQUdJLFVBQVEsbUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F0ekR3QixFQSt6RHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx5QkFGbkI7QUFHSSxVQUFRLG1DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBL3pEd0IsRUF3MER4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsb0NBRm5CO0FBR0ksVUFBUSw4QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXgwRHdCLEVBaTFEeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDRDQUZuQjtBQUdJLFVBQVEsOEJBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FqMUR3QixFQTAxRHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxxREFGbkI7QUFHSSxVQUFRLCtCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBMTFEd0IsRUFtMkR4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsNENBRm5CO0FBR0ksVUFBUSwrQkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQW4yRHdCLEVBNDJEeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHdCQUZuQjtBQUdJLFVBQVEsK0JBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E1MkR3QixFQXEzRHhCO0FBQ0ksY0FBWSwyQ0FEaEI7QUFFSSxpQkFBZSxzQkFGbkI7QUFHSSxVQUFRLGlDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBcjNEd0IsRUE4M0R4QjtBQUNJLGNBQVksMkNBRGhCO0FBRUksaUJBQWUsOEJBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTkzRHdCLEVBdTREeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDJFQUZuQjtBQUdJLFVBQVEsdUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F2NER3QixFQWc1RHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSw4Q0FGbkI7QUFHSSxVQUFRLGlDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBaDVEd0IsRUF5NUR4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsNkJBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXo1RHdCLEVBazZEeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDRDQUZuQjtBQUdJLFVBQVEsZ0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FsNkR3QixFQTI2RHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSw2REFGbkI7QUFHSSxVQUFRLGdDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBMzZEd0IsRUFvN0R4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsZ0NBRm5CO0FBR0ksVUFBUSwrQkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXA3RHdCLEVBNjdEeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGdCQUZuQjtBQUdJLFVBQVEsK0JBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E3N0R3QixFQXM4RHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSwwREFGbkI7QUFHSSxVQUFRLHFDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBdDhEd0IsRUErOER4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsc0NBRm5CO0FBR0ksVUFBUSxxQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQS84RHdCLEVBdzlEeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLCtEQUZuQjtBQUdJLFVBQVEsNEJBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F4OUR3QixFQWkrRHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSw4Q0FGbkI7QUFHSSxVQUFRLG1DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBaitEd0IsRUEwK0R4QjtBQUNJLGNBQVksMkNBRGhCO0FBRUksaUJBQWUsa0NBRm5CO0FBR0ksVUFBUSxtQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTErRHdCLEVBbS9EeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDhDQUZuQjtBQUdJLFVBQVEsZ0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FuL0R3QixFQTQvRHhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxzQ0FGbkI7QUFHSSxVQUFRLGdDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBNS9Ed0IsRUFxZ0V4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsd0JBRm5CO0FBR0ksVUFBUSw2QkFIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXJnRXdCLEVBOGdFeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDhCQUZuQjtBQUdJLFVBQVEsNkJBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E5Z0V3QixFQXVoRXhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxxRkFGbkI7QUFHSSxVQUFRLG1DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBdmhFd0IsRUFnaUV4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsOEJBRm5CO0FBR0ksVUFBUSxrQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQWhpRXdCLEVBeWlFeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGtDQUZuQjtBQUdJLFVBQVEsa0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F6aUV3QixFQWtqRXhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx5R0FGbkI7QUFHSSxVQUFRLDhCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBbGpFd0IsRUEyakV4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsNkRBRm5CO0FBR0ksVUFBUSxpQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTNqRXdCLEVBb2tFeEI7QUFDSTtBQUNBLGNBQVksMkNBRmhCO0FBR0ksaUJBQWUsNkJBSG5CO0FBSUksVUFBUSxtQ0FKWjtBQUtJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FMVjtBQVFJLFdBQVM7QUFSYixDQXBrRXdCLEVBOGtFeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGlHQUZuQjtBQUdJLFVBQVEsZ0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0E5a0V3QixFQXVsRXhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSw2QkFGbkI7QUFHSSxVQUFRLGdDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBdmxFd0IsRUFnbUV4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsc0RBRm5CO0FBR0ksVUFBUSxnQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQWhtRXdCLEVBeW1FeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLCtEQUZuQjtBQUdJLFVBQVEscUNBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F6bUV3QixFQWtuRXhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxtQ0FGbkI7QUFHSSxVQUFRLGtDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBbG5Fd0IsRUEybkV4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsbUNBRm5CO0FBR0ksVUFBUSxrQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTNuRXdCLEVBb29FeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLHVGQUZuQjtBQUdJLFVBQVEsb0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0Fwb0V3QixFQTZvRXhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxvRUFGbkI7QUFHSSxVQUFRLDZCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBN29Fd0IsRUFzcEV4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsbUdBRm5CO0FBR0ksVUFBUSxnQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXRwRXdCLEVBK3BFeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDRFQUZuQjtBQUdJLFVBQVEsb0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0EvcEV3QixFQXdxRXhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSx3RUFGbkI7QUFHSSxVQUFRLG1DQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBeHFFd0IsRUFpckV4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsd0ZBRm5CO0FBR0ksVUFBUSxtQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQWpyRXdCLEVBMHJFeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDRCQUZuQjtBQUdJLFVBQVEseUJBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0ExckV3QixFQW1zRXhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxpQ0FGbkI7QUFHSSxVQUFRLHlCQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBbnNFd0IsRUE0c0V4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsd0dBRm5CO0FBR0ksVUFBUSxrQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQTVzRXdCLEVBcXRFeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLGtFQUZuQjtBQUdJLFVBQVEsa0NBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FydEV3QixFQTh0RXhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSw4QkFGbkI7QUFHSSxVQUFRLGtDQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBOXRFd0IsRUF1dUV4QjtBQUNJLGNBQVksdUNBRGhCO0FBRUksaUJBQWUsZ0NBRm5CO0FBR0ksVUFBUSxrQ0FIWjtBQUlJLFFBQU07QUFDRixZQUFRO0FBRE4sR0FKVjtBQU9JLFdBQVM7QUFQYixDQXZ1RXdCLEVBZ3ZFeEI7QUFDSSxjQUFZLHVDQURoQjtBQUVJLGlCQUFlLDBFQUZuQjtBQUdJLFVBQVEsNkJBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0FodkV3QixFQXl2RXhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSxtQ0FGbkI7QUFHSSxVQUFRLGVBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0F6dkV3QixFQWt3RXhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSw2QkFGbkI7QUFHSSxVQUFRLGVBSFo7QUFJSSxRQUFNO0FBQ0YsWUFBUTtBQUROLEdBSlY7QUFPSSxXQUFTO0FBUGIsQ0Fsd0V3QixFQTJ3RXhCO0FBQ0ksY0FBWSx1Q0FEaEI7QUFFSSxpQkFBZSw2RkFGbkI7QUFHSSxVQUFRLG1CQUhaO0FBSUksUUFBTTtBQUNGLFlBQVE7QUFETixHQUpWO0FBT0ksV0FBUztBQVBiLENBM3dFd0IsQ0FBckIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc3hcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBzcmMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTE2MzAyMy1mNzQxNTc2MTg0M2EyZDNlMzc3ZmJmODEzYjYyMjE2MC5wbmdcIjttb2R1bGUuZXhwb3J0cz17c3JjOnNyYyx3aWR0aDoxMjAwLGhlaWdodDo2MjgsZm9ybWF0OlwicG5nXCIsdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gc3JjO319OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge01haW5TZWN0aW9ufSBmcm9tICcuL2NvbXBvbmVudHMvTWFpblNlY3Rpb24nO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge2NhcmRTdG9yZX0gZnJvbSBcIi4vc3RvcmUvQ2FyZFN0b3JlXCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17Y2FyZFN0b3JlfT5cbiAgICAgICAgICAgICAgICA8TWFpblNlY3Rpb24vPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7QWlGaWxsUGxheVNxdWFyZSwgQnNGaWxsUGVyc29uRmlsbCwgRmFCb29rT3Blbn0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcblxuY29uc3QgRmlsbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCBGaWxtSW5mbyA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG5gO1xuXG5cbmNvbnN0IElmcmFtZUJveCA9IHN0eWxlZC5pZnJhbWVgXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcbiAgaGVpZ2h0OiA0ODBweDtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIDpob3ZlciB7XG4gICAgY29sb3I6IGRhcmtyZWQ7XG4gIH1gO1xuXG5leHBvcnQgY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3Qge2hlaWdodCwgd2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuICAgIGNvbnN0IFtjYWxjdWxhdGVkV2lkdGgsIHNldENhbGN1bGF0ZWRXaWR0aF0gPSB1c2VTdGF0ZSg2NDApO1xuXG4gICAgLy9oYW5kbGluZyByZXNpemVcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAod2lkdGggPCAxMDAwKSBzZXRDYWxjdWxhdGVkV2lkdGgod2lkdGggLSA1MCk7XG4gICAgICAgIGVsc2Ugc2V0Q2FsY3VsYXRlZFdpZHRoKDY0MCk7XG4gICAgfSwgW3dpZHRoXSk7XG5cbiAgICBjb25zdCBbbmFtZSxdID0gdXNlU3RhdGUocHJvcHMubmFtZSk7XG4gICAgY29uc3QgW2NvbXBvc2l0aW9uLF0gPSB1c2VTdGF0ZShwcm9wcy5jb21wb3NpdGlvbik7XG4gICAgY29uc3QgW3ZpZGVvVXJsLF0gPSB1c2VTdGF0ZShwcm9wcy52aWRlb1VybCk7XG4gICAgY29uc3QgW3Nob3dJZnJhbWUsIHNldFNob3dJZnJhbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGVuVmlkZW9CdXR0b25OYW1lLCBzZXRPcGVuVmlkZW9CdXR0b25OYW1lXSA9IHVzZVN0YXRlKFwi0JLRltC00LrRgNC40YLQuCDQstGW0LTQtdC+XCIpO1xuXG4gICAgY29uc3Qgb3BlblZpZGVvSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd0lmcmFtZSghc2hvd0lmcmFtZSk7XG4gICAgICAgIGlmIChzaG93SWZyYW1lKSB7XG4gICAgICAgICAgICBzZXRPcGVuVmlkZW9CdXR0b25OYW1lKFwi0JLRltC00LrRgNC40YLQuCDQstGW0LTQtdC+XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0T3BlblZpZGVvQnV0dG9uTmFtZShcItCX0LDQutGA0LjRgtC4INCy0ZbQtNC10L5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RmlsbVdyYXBwZXI+XG4gICAgICAgICAgICA8RmlsbUluZm8+XG4gICAgICAgICAgICAgICAgPHNwYW4+PEJzRmlsbFBlcnNvbkZpbGwvPiA8Yj57bmFtZX08L2I+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPHNwYW4+PEZhQm9va09wZW4vPiB7Y29tcG9zaXRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvcGVuVmlkZW9IYW5kbGVyfSB2YWx1ZT17b3BlblZpZGVvQnV0dG9uTmFtZX0+e29wZW5WaWRlb0J1dHRvbk5hbWV9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICB7c2hvd0lmcmFtZSA/IDxJZnJhbWVCb3ggc3JjPXt2aWRlb1VybH0gd2lkdGg9e2NhbGN1bGF0ZWRXaWR0aH0vPiA6IG51bGx9XG4gICAgICAgICAgICA8L0ZpbG1JbmZvPlxuICAgICAgICA8L0ZpbG1XcmFwcGVyPlxuICAgICk7XG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCaUxpbmtFeHRlcm5hbCwgR2lQb2RpdW1XaW5uZXJ9IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8xMTYzMDIzLnBuZ1wiO1xuaW1wb3J0IGp1ZGdlc18yMDIzIGZyb20gIFwiLi9pbmZvLXBhZ2UtaW1ncy9qdWRnZXNfMjAyMy5qcGVnXCJcbmltcG9ydCBwb3N0ZXJfMiBmcm9tIFwiLi9yZnMtcGFnZS1pbWdzL3Jmcy5wbmdcIjtcbmltcG9ydCBwb3N0ZXJfMSBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy9Qb3N0ZXJfMjAyM191YS5wbmdcIjtcbmltcG9ydCBwb3N0ZXJfMyBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy9wb3N0ZXJfMjAyM19lbi5wbmdcIlxuXG5leHBvcnQgY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7bG9nb31cIik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgUGVyc29uSW5mb1NlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuXG5jb25zdCBQZXJzb24gPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IFRleHRTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgICAgIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IGRhcmtzbGF0ZWdyYXk7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGA7XG5cbiAgICBjb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgIGxlZnQ6IDQwcHg7XG4gICAgICB3aWR0aDogMjEwcHg7XG4gICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBgO1xuXG5cbiAgICByZXR1cm4gKDw+PEltYWdlIHNyYz17cHJvcHMuaW1nVXJsfS8+PFRleHRTZWN0aW9uPntwcm9wcy50ZXh0fTwvVGV4dFNlY3Rpb24+PC8+KTtcblxufVxuXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbmA7XG5cbmNvbnN0IERpdjEgPSBzdHlsZWQoRGl2KWBcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gO1xuXG5jb25zdCBBID0gc3R5bGVkLmFgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcblxuICA6aG92ZXIge1xuICAgIGNvbG9yOiBkYXJrcmVkO1xuICB9XG5gO1xuXG5jb25zdCBBMSA9IHN0eWxlZChBKWBcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDMwcHg7XG5gO1xuXG5jb25zdCBQID0gc3R5bGVkLmRpdmBcbiAgbGVmdDogNDAwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuY29uc3QgUG9zdGVyID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBQb3N0ZXJJbWcgPSBzdHlsZWQuaW1nYFxuICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTBweCByZ2JhKDEwMCwgMCwgMCwgMC41KSk7XG4gICAgYDtcblxuICAgIHJldHVybiAoPFBvc3RlckltZyBzcmM9e3Byb3BzLmltZ1VybH0vPik7XG59XG5cbmV4cG9ydCBjb25zdCBJbmZvUGFnZTIgPSAoKSA9PiB7XG4gICAgcmV0dXJuICg8V3JhcHBlcj5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFfbjBuQlZSdzdjVDgtelJfQ0tCUTFaOGpsdHktY3lJSi9lZGl0P3VzcD1zaGFyaW5nJm91aWQ9MTEzODgzOTIxMjk5MTQ0NDQ5MDUzJnJ0cG9mPXRydWUmc2Q9dHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmlMaW5rRXh0ZXJuYWwvPiDQo9GH0LDRgdC90LjQutC4INC/0YDQvtC10LrRgtGDIMKr0KDRltCy0L3QtdC90YHRjNC60ZYg0YTQvtGA0YLQtdC/0ZbQsNC90L3RliDRgdGC0YPQtNGW0ZbMiMK7IDIwMjMgPC9BPlxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxQPtCX0LDQv9GA0L7RiNGD0ZTQvNC+INC00L4g0YPRh9Cw0YHRgtGWINGDINC/0YDQvtC10LrRgtGWPC9QPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxQb3N0ZXIgaW1nVXJsPXtwb3N0ZXJfMn0vPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbn1cblxuXG5leHBvcnQgY29uc3QgSW5mb1BhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuICg8V3JhcHBlcj5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFhdW9KOHJXc0ZvcFJ3Yk5XckVwaF9ERjZCYW9mTVphaC9lZGl0P3VzcD1zaGFyaW5nJm91aWQ9MTEzODgzOTIxMjk5MTQ0NDQ5MDUzJnJ0cG9mPXRydWUmc2Q9dHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8R2lQb2RpdW1XaW5uZXIvPiDQm9Cw0YPRgNC10LDRgtC4IDIwMjEgPC9BPlxuICAgICAgICAgICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFiYjlJT1VFN0lMOTk2Tkh1THMycW50VjJaUzdTTmI4aC9lZGl0P3VzcD1zaGFyZV9saW5rJm91aWQ9MTEzODgzOTIxMjk5MTQ0NDQ5MDUzJnJ0cG9mPXRydWUmc2Q9dHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmlMaW5rRXh0ZXJuYWwvPiDQn9C+0LvQvtC20LXQvdC90Y88L0E+XG4gICAgICAgICAgICAgICAgPEEgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMTU2WkdOZG5NYWpIRXpqZmpyRzdiRF8tM3Y5UjFHSDR3L2VkaXQ/dXNwPXNoYXJlX2xpbmsmb3VpZD0xMTM4ODM5MjEyOTkxNDQ0NDkwNTMmcnRwb2Y9dHJ1ZSZzZD10cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCaUxpbmtFeHRlcm5hbC8+INCe0YDQs9Cw0L3RltC30LDRhtGW0LnQvdC40Lkg0LrQvtC80ZbRgtC10YIg0LrQvtC90LrRg9GA0YHRgyA8L0E+XG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPFA+0JDRhNGW0YjQsCh1YSk8L1A+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPFBvc3RlciBpbWdVcmw9e3Bvc3Rlcl8xfS8+XG4gICAgICAgICAgICA8UD7QkNGE0ZbRiNCwKGVuZyk8L1A+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPFBvc3RlciBpbWdVcmw9e3Bvc3Rlcl8zfS8+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPFA+0KHQutC70LDQtCDQttGD0YDRljwvUD5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8UG9zdGVyIGltZ1VybD17anVkZ2VzXzIwMjN9Lz5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtSZXN1bHRzRmlsdGVyfSBmcm9tIFwiLi9SZXN1bHRzRmlsdGVyXCI7XG5pbXBvcnQge0NhcmR9IGZyb20gXCIuL0NhcmRcIjtcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtSZWd1bGFySGVhZGVyfSBmcm9tIFwiLi9SZWd1bGFySGVhZGVyXCI7XG5pbXBvcnQge0luZm9QYWdlLCBJbmZvUGFnZTJ9IGZyb20gXCIuL0luZm9QYWdlXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vMTE2MzAyMy5wbmdcIjtcblxuY29uc3QgQ29tbW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7bG9nb31cIik7XG4gIG1pbi1oZWlnaHQ6IDEwMDBweDtcbmA7XG5cbmNvbnN0IE1haW5TZWN0aW9uRmxleCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgTWFpblNlY3Rpb24gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjYXJkcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhcmRzKTtcbiAgICBjb25zdCBpc0RhdGFJblBsYWNlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuaXNEYXRhSW5QbGFjZSk7XG4gICAgY29uc3QgY2FyZENvdW50ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2FyZENvdW50KTtcbiAgICBjb25zdCBzZWN0aW9uc0ZvckZpbHRlciA9IFtcbiAgICAgICAgYNCQ0YDRhdGW0LLQvdGWINCy0ZbQtNC10L5gLFxuICAgICAgICBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImAsXG4gICAgICAgIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFwiYCxcbiAgICAgICAgYNCd0L7QvNGW0L3QsNGG0ZbRjyDCq9CU0L7QtNCw0YLQutC+0LLQuNC5INGW0L3RgdGC0YDRg9C80LXQvdGCICjRhNC+0YDRgtC10L/RltCw0L3QvinCu2AsXG4gICAgICAgIGDQn9GA0L4g0LrQvtC90LrRg9GA0YFgLFxuICAgICAgICBcItCg0ZbQstC90LXQvdGB0YzQutGWINGE0L7RgNGC0LXQv9GW0LDQvdC90L3RliDRgdGC0YPQtNGW0ZdcIl07XG5cbiAgICBsZXQgaW5mb1BhZ2UgPSAoY2FyZENvdW50PT09LTEpPzxJbmZvUGFnZS8+OjxJbmZvUGFnZTIvPlxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbW1vbldyYXBwZXI+XG4gICAgICAgICAgICA8UmVndWxhckhlYWRlciBjYXJkQ291bnQ9e2NhcmRDb3VudH0vPlxuICAgICAgICAgICAgPFJlc3VsdHNGaWx0ZXIgc2VjdGlvbnM9e3NlY3Rpb25zRm9yRmlsdGVyfS8+XG4gICAgICAgICAgICB7aXNEYXRhSW5QbGFjZSA/IChcbiAgICAgICAgICAgICAgICA8TWFpblNlY3Rpb25GbGV4PlxuICAgICAgICAgICAgICAgICAgICB7Y2FyZHMubWFwKGNhcmQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjYXJkLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9Vcmw9e2NhcmQudmlkZW9Vcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9zaXRpb249e2NhcmQuY29tcG9zaXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXJkLmlkLiRvaWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgKSl9PC9NYWluU2VjdGlvbkZsZXg+KSA6IGluZm9QYWdlfTwvQ29tbW9uV3JhcHBlcj4pO1xufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtBaU91dGxpbmVGaWxlU2VhcmNoLCBIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcbiAgd2lkdGg6IDE1JTtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG5cbiAgOmhvdmVyIHtcbiAgICBib3JkZXI6IHNvbGlkIGRhcmtyZWQgMnB4O1xuICAgIGNvbG9yOiBkYXJrcmVkO1xuICB9YDtcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaW5wdXRDb2xvciB8fCBcInBhbGV2aW9sZXRyZWRcIn07XG5gO1xuXG5cbmNvbnN0IElucHV0U3R5bGUgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNTAlO1xuYDtcblxuY29uc3QgSW5wdXRXcmFwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNjBweDtcbmA7XG5cbmNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xuYDtcblxuY29uc3QgRXJyb3IgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxN3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtgXG5cbmNvbnN0IFdhcm4gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxN3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtgXG5cbmV4cG9ydCBjb25zdCBSZWd1bGFySGVhZGVyID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBzZWFyY2hGaWVsZCA9IHVzZVJlZigpO1xuICAgIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZXJyb3IpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICBsZXQgc3RyID0gU3RyaW5nKHNlYXJjaEZpZWxkLmN1cnJlbnQudmFsdWUpO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA8IDMgfHwgc3RyLmluY2x1ZGVzKFwiIFwiKSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiRVJST1JcIiwgbXNnOiBcItCR0YPQtNGMINC70LDRgdC60LAg0LLQstC10LTRltGC0Ywg0LHRltC70YzRiNC1IDMg0YHQuNC80LLQvtC70ZbQsiDRliDQvdC1INCy0LjQutC+0YDQuNGB0YLQvtCy0YPQudGC0LUg0L/RgNC+0LHRltC7XCJ9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIlNFQVJDSFwiLCBxdWVyeTogc3RyfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPElucHV0V3JhcGVyPlxuICAgICAgICAgICAgICAgIDxJbnB1dFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3Bhbj48QWlPdXRsaW5lRmlsZVNlYXJjaC8+0J/QvtGI0YPQuiDQstGW0LTQtdC+INC/0L4g0L/RgNGW0LfQstC40YnRgyDRg9GH0LDRgdC90LjQutCwIDwvU3R5bGVkU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfSByZWY9e3NlYXJjaEZpZWxkfSB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00ZbRgtGMINC/0YDRltC30LLQuNGJ0LUg0YPRh9Cw0YHQvdC40LrQsC4uLlwiIGlucHV0Q29sb3I9XCJibGFja1wiLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0U3R5bGU+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIlwiIG9uQ2xpY2s9e2hhbmRsZXJ9PtCf0L7RiNGD0Lo8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvSW5wdXRXcmFwZXI+XG4gICAgICAgICAgICB7ZXJyb3IgIT09IFwiXCIgPyA8RXJyb3I+PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz57ZXJyb3J9PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz48L0Vycm9yPiA6IG51bGx9XG4gICAgICAgICAgICB7cHJvcHMuY2FyZENvdW50ID09PSAwID9cbiAgICAgICAgICAgICAgICA8V2Fybj48SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPtCy0ZbQtNC10L4g0L3QtSDQt9C90LDQudC00LXQvdGWPEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz48L1dhcm4+IDogbnVsbH1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtGYUZvbGRlciwgRmFVbml2ZXJzaXR5fSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vaG9va3MvVXNlV2luZG93RGltZW5zaW9uc1wiO1xuXG5jb25zdCBGaWx0ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7YDtcblxuY29uc3QgRmlsdGVyU2VjdGlvbiA9IHN0eWxlZChGaWx0ZXJDb250YWluZXIpYFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbjogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogZGFya3JlZDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERpdlRoaW5MaW5lID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogZ3JheSBzb2xpZCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGhlaWdodDogMiU7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuYDtcblxuY29uc3QgZ3Jvd18wID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICB9XG4gIDAlIHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH07XG4gIH1cbmA7XG5cbmNvbnN0IGdyb3dfMSA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcbiAgfVxuICAwJSB7XG4gICAgbGVmdDogMXB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xuICB9XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBUaGluTGluZUlubmVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICBsZWZ0OiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogcmVkIHNvbGlkIDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBoZWlnaHQ6IDElO1xuICBhbmltYXRpb246ICR7cHJvcHMgPT4gKHByb3BzLmFuaW1hdGlvbiAlIDIgPT09IDApID8gZ3Jvd18wIDogZ3Jvd18xfSAwLjVzIGxpbmVhcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBSZXN1bHRzRmlsdGVyID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBbc2VjdGlvbnMsXSA9IHVzZVN0YXRlKHByb3BzLnNlY3Rpb25zKTtcblxuICAgIGNvbnN0IFtyZWRMaW5lV2lkdGgsIHNldFJlZExpbmVXaWR0aF0gPSB1c2VTdGF0ZShcIjEwcHhcIik7XG4gICAgY29uc3QgW3JlZExpbmVMZWZ0LCBzZXRSZWRMaW5lTGVmdF0gPSB1c2VTdGF0ZShcIjEwcHhcIik7XG4gICAgY29uc3QgW2FuaW1hdGlvbiwgc2V0QW5pbWF0aW9uXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHtoZWlnaHQsIHdpZHRofSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgICBjb25zdCBtYXJrZWRTZWN0aW9uUmVmID0gdXNlUmVmKCk7XG5cbiAgICAvL2hhbmRsaW5nIHJlZExpbmUgb24gcmVzaXplXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVSZW5kZXJSZWRMaW4oe3RhcmdldDptYXJrZWRTZWN0aW9uUmVmLmN1cnJlbnR9KVxuICAgIH0sIFt3aWR0aF0pO1xuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gICAgZnVuY3Rpb24gcmVSZW5kZXJSZWRMaW4oZXZlbnQpIHtcbiAgICAgICAgbWFya2VkU2VjdGlvblJlZi5jdXJyZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBsZXQgY3VycmVudFNlY3Rpb25XaWR0aCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgbGV0IGN1cnJlbnRTZWN0aW9uTGVmdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gMTA7XG4gICAgICAgIHNldFJlZExpbmVXaWR0aChjdXJyZW50U2VjdGlvbldpZHRoICsgXCJweFwiKTtcbiAgICAgICAgc2V0UmVkTGluZUxlZnQoY3VycmVudFNlY3Rpb25MZWZ0ICsgXCJweFwiKTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBhbmltYXRpb24gKyAxO1xuICAgICAgICBzZXRBbmltYXRpb24oY291bnRlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25GaWx0ZXJTZWN0aW9uQ2xpY2soc2VsZWN0ZWRTZWN0aW9uLCBldmVudCkge1xuICAgICAgICByZVJlbmRlclJlZExpbihldmVudCk7XG4gICAgICAgIGxldCBzZWxlY3RlZFNlY3Rpb25TdHJpbmcgPSBzZWxlY3RlZFNlY3Rpb24uc2VjdGlvbjtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRTZWN0aW9uU3RyaW5nKTtcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZFNlY3Rpb25TdHJpbmcpIHtcbiAgICAgICAgICAgIGNhc2UgYNCg0ZbQstC90LXQvdGB0YzQutGWINGE0L7RgNGC0LXQv9GW0LDQvdC90ZYg0YHRgtGD0LTRltGXYDpcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJSRlNfUEFHRVwifSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGDQkNGA0YXRltCy0L3RliDQstGW0LTQtdC+YDpcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJBUkNISVZFXCJ9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XCJgOlxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTFcIn0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcImA6XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZ3JvdXAtMlwifSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGDQndC+0LzRltC90LDRhtGW0Y8gwqvQlNC+0LTQsNGC0LrQvtCy0LjQuSDRltC90YHRgtGA0YPQvNC10L3RgiAo0YTQvtGA0YLQtdC/0ZbQsNC90L4pwrtgOlxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTNcIn0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVySW5mb1BhZ2Uoc2VjdGlvbikge1xuICAgICAgICBpZiAoc2VjdGlvblswXT09PVwi0KDRltCy0L3QtdC90YHRjNC60ZYg0YTQvtGA0YLQtdC/0ZbQsNC90L3QvdGWINGB0YLRg9C00ZbRl1wiKXtcbiAgICAgICAgICAgIHJlUmVuZGVyUmVkTGluKHNlY3Rpb25bMV0pO1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiUkZTX1BBR0VcIn0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVSZW5kZXJSZWRMaW4oc2VjdGlvblsxXSk7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJJTkZPX1BBR0VcIn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlbmRlcmVkU2VjdGlvbnMgPSBzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgc2VjdGlvbiA9PT0gXCLQn9GA0L4g0LrQvtC90LrRg9GA0YFcIiB8fCBzZWN0aW9uID09PSBcItCg0ZbQstC90LXQvdGB0YzQutGWINGE0L7RgNGC0LXQv9GW0LDQvdC90L3RliDRgdGC0YPQtNGW0ZdcIj9cbiAgICAgICAgICAgIDxGaWx0ZXJTZWN0aW9uICBvbkNsaWNrPXsoKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2VjID0gW3NlY3Rpb24sZXZlbnRdXG4gICAgICAgICAgICAgICAgcmVuZGVySW5mb1BhZ2Uoc2VjKVxuXG4gICAgICAgICAgICB9fSBrZXk9e3NlY3Rpb259PiA8RmFVbml2ZXJzaXR5Lz57c2VjdGlvbn08L0ZpbHRlclNlY3Rpb24+XG4gICAgICAgICAgICA6IDxGaWx0ZXJTZWN0aW9uICByZWY9e21hcmtlZFNlY3Rpb25SZWZ9IG9uQ2xpY2s9e2UgPT4gb25GaWx0ZXJTZWN0aW9uQ2xpY2soe3NlY3Rpb259LCBlKX0ga2V5PXtzZWN0aW9ufT4gPEZhRm9sZGVyLz57c2VjdGlvbn08L0ZpbHRlclNlY3Rpb24+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxGaWx0ZXJDb250YWluZXIgY2hpbGRyZW49e3JlbmRlcmVkU2VjdGlvbnN9Lz5cbiAgICAgICAgICAgIDwvU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXI+XG4gICAgICAgICAgICA8RGl2VGhpbkxpbmU+PFRoaW5MaW5lSW5uZXJEaXYgd2lkdGg9e3JlZExpbmVXaWR0aH0gbGVmdD17cmVkTGluZUxlZnR9IGFuaW1hdGlvbj17YW5pbWF0aW9ufS8+PC9EaXZUaGluTGluZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG4iLCJ2YXIgc3JjID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIlBvc3Rlcl8yMDIzX3VhLTFkMTZjOTI4OGYwOGM3ZjRlZDU3MTQ3NGY2MDY4MGQ3LnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjIzMzksaGVpZ2h0OjMzMDgsZm9ybWF0OlwicG5nXCIsdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gc3JjO319OyIsInZhciBzcmMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwianVkZ2VzXzIwMjMtYTc4NjM4ZjU5OWE5NDdjYjViOThkYjlmMDhlMzM2MDMuanBlZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjM2MDAsaGVpZ2h0OjUwODQsZm9ybWF0OlwianBlZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiLCJ2YXIgc3JjID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInBvc3Rlcl8yMDIzX2VuLTBkZjc5MzA1ZjczYTcxYzhlMWYxOTVjNDg0Y2NiYjVjLnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjIzMzksaGVpZ2h0OjMzMDgsZm9ybWF0OlwicG5nXCIsdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gc3JjO319OyIsInZhciBzcmMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicmZzLTIzYTlmZjQyM2I2NTZlNGY3YTFiZDQyZGE5NjQzNjlmLnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjI3MDAsaGVpZ2h0OjM5MDAsZm9ybWF0OlwicG5nXCIsdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gc3JjO319OyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIGdldFdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gICAgY29uc3QgeyBpbm5lcldpZHRoOiB3aWR0aCwgaW5uZXJIZWlnaHQ6IGhlaWdodCB9ID0gd2luZG93O1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIGNvbnN0IFt3aW5kb3dEaW1lbnNpb25zLCBzZXRXaW5kb3dEaW1lbnNpb25zXSA9IHVzZVN0YXRlKGdldFdpbmRvd0RpbWVuc2lvbnMoKSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgICAgICAgICBzZXRXaW5kb3dEaW1lbnNpb25zKGdldFdpbmRvd0RpbWVuc2lvbnMoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB3aW5kb3dEaW1lbnNpb25zO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXJnZXQnKSk7XG5cbiIsImV4cG9ydCBsZXQgYWRkaXRpb25hbEluc3RydW1lbnRzID0gW1xuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1l2dE5aYnBKUVFvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JPRltC70LvQvtC6LiDCq0EgbGl2ZWx5IGRhbmNlwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQvtC50YLQvtCy0LjRhyDQhtC70LvRjywgMDkuMDguMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1ODI0MzQ0MTMxMzAyMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gwqvQlNC+0LTQsNGC0LrQvtCy0LjQuSDRltC90YHRgtGA0YPQvNC10L3RgiAo0YTQvtGA0YLQtdC/0ZbQsNC90L4pwrtcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9CXzFhLWk2aWF2b1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCQ0LnRgNC+0L0uIMKrTGVzIEVtYnJ1bnPCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0LnRgtC+0LLQuNGHINCG0LvQu9GPLCAwOS4wOC4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjU4MjQzNDQxNDMzODI0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyDCq9CU0L7QtNCw0YLQutC+0LLQuNC5INGW0L3RgdGC0YDRg9C80LXQvdGCICjRhNC+0YDRgtC10L/RltCw0L3QvinCu1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0FucTd3YWhFLUJvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JzQvtGA0LTQsNGB0L7Qsi4gwqvQkdGD0LPRli3QktGD0LPRlsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90L7QstCwINCV0LzRltC70ZbRjywgMjQuMTIuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1ODI0MzQ0MTQ5MDMzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gwqvQlNC+0LTQsNGC0LrQvtCy0LjQuSDRltC90YHRgtGA0YPQvNC10L3RgiAo0YTQvtGA0YLQtdC/0ZbQsNC90L4pwrtcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9xeXBCdk5pWVQxVVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCo0LXQvdGC0Y7RgNC6ICjQotC10YDQtdGJ0YPQuikuIMKr0JzQsNC70LXQvdGM0LrQsCDQtdC70LXQs9GW0Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC+0LLQsCDQldC80ZbQu9GW0Y8sIDI0LjEyLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNTgyNDM0NDE1NjAyMDJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIMKr0JTQvtC00LDRgtC60L7QstC40Lkg0ZbQvdGB0YLRgNGD0LzQtdC90YIgKNGE0L7RgNGC0LXQv9GW0LDQvdC+KcK7XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTVlleXZYN29mZW9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCiLiDQkdGA0LDRg9C9LiDCq9Ci0LDQvdC10YbRjCDQstGW0YLRgNGDwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNGG0Y7QuiDQkdC+0LPRg9GB0LvQsNCy0LAsIDExLjA0LjIwMDgg0YAu0L1cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1ODI0MzQ0MTY1OTAyOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gwqvQlNC+0LTQsNGC0LrQvtCy0LjQuSDRltC90YHRgtGA0YPQvNC10L3RgiAo0YTQvtGA0YLQtdC/0ZbQsNC90L4pwrtcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9EWDVEOTR1T3JCa1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JQuINCh0YLQsNGA0YjQuNC90ZbQvS4gwqvQnNC+0LzQtdC90YIg0L3QsNGB0L7Qu9C+0LTQuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDRhtGO0Log0JHQvtCz0YPRgdC70LDQstCwLCAxMS4wNC4yMDA4INGALtC9XCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNTgyNDM0NDE3MDE1NTZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIMKr0JTQvtC00LDRgtC60L7QstC40Lkg0ZbQvdGB0YLRgNGD0LzQtdC90YIgKNGE0L7RgNGC0LXQv9GW0LDQvdC+KcK7XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQveVVIRG1FT3c1VTBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuINCR0YPRgNGA0LUg0YHRliDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LXRgtGA0LDRiCDQkNC90L3QsCwgMTguMTEuMjAwMyDRgC7QvVwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjU4MjQzNDQxNzQ2MjEyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyDCq9CU0L7QtNCw0YLQutC+0LLQuNC5INGW0L3RgdGC0YDRg9C80LXQvdGCICjRhNC+0YDRgtC10L/RltCw0L3QvinCu1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0lFWUlTU1p3V0NBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JPRgNGW0LMuIMKr0KMg0L/QtdGH0LXRgNGWINCz0ZbRgNGB0YzQutC+0LPQviDQutC+0YDQvtC70Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C10YLRgNCw0Ygg0JDQvdC90LAsIDE4LjExLjIwMDMg0YAu0L1cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1ODI0MzQ0MTc5NzU5OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gwqvQlNC+0LTQsNGC0LrQvtCy0LjQuSDRltC90YHRgtGA0YPQvNC10L3RgiAo0YTQvtGA0YLQtdC/0ZbQsNC90L4pwrtcIlxuICAgIH1cbl0iLCJsZXQgbXlDYXJkcyA9IFtcbiAgICB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzA3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JDQs9GA0LDRgtGW0L3QsCDQodGC0LDQvdGW0YHQu9Cw0LIsIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JPQu9GW0L3QutCwLiAnJ9Cf0L7Rh9GD0YLRgtGPJycsICAgICAgMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQotCw0L3QvtC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTk0eXRfc0tDNUV0M3I0OXpDRVJzZEJaZURRZ1ktR19pL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMDhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktCw0LvRltCz0YPRgNCwINCS0LDRgNCy0LDRgNCwLCA5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC7Qm9C10LzRltGI0LrQvi4gJyfQmtC+0LvQvtC80LjQudC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYzZoVElxRGwtY0FGM0JyM2wxYzJ1d3FGWnNMVlNQVHYvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LDQu9GW0LPRg9GA0LAg0JLQsNGA0LLQsNGA0LAsIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCiLtCc0LDQutGB0ZbQvNC+0LIuICcn0JfQsNC00LfQtdGA0LrQsNC70LvRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE1WXI2UXhtNHJzdERPTVUydkduNUp3cTVWZlVwTjJTRC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzBhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQsNGB0LjQu9C10LLRgdGM0LrQsCDQpdGA0LjRgdGC0LjQvdCwLDcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7Qk9GW0LvQu9C+0LouJyfQodCw0LzQvtGC0L3RjyDQsdCw0LvRjNC90LAg0LfQsNC70LAnJywgICAyKdCiLtCg0L7RgdGC0LjQvNCw0YjQtdC90LrQvi4nJ9Cn0LDQutC70YPQvScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHdHhVS3VVa0xLQW5oNW9DZjlGbHVpVVRRb0pDVGJNTS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzBiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQvtC70LjQvdC10YbRjCDQntC70LXQutGB0LDQvdC00YAsIDgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmy7QmtC+0LvQvtC00YPQsS4gJyfQkNGA0LrQsNC9JycsMinQpC7QoNC40LHRltGG0YzQutC40LkuICcn0KDQtdCz0L7RgtGD0YjQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV9DT1BlUHp3ZGdTN1VfT2pFeE9wdjhub3oxbWlUZThjL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9Cw0LvQsNCz0LDQvSDQmtCw0YLQtdGA0LjQvdCwLCA5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiDQotC10LzQsCDQtyDQstCw0YDRltCw0YbRltGP0LzQuCwgMinQky7QmtGD0YjQvdCw0YDQtdC90LrQvi4gJyfQnNC10LvQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvQmxVZlhXcWxoNXVEc0RGQ1hiSGdjN1hHaUFKR2JMSC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzBkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQtdGA0LDRgdC40LzQtdC90LrQviDQntC70LXQutGB0LDQvdC00YDQsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQki7QoNCw0YfQutC+0LLRgdGM0LrQuNC5LiDQotC+0LrQsNGC0LjQvdCwLiAyKdCSLtCa0L7RgdC10L3QutC+LiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMURHbnNTUUdsQnU4WF9vRFB0M1lLdEttaVZ6Vi1HM3FKL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C+0LvQvtC00L7QstGB0YzQutCwINCh0L7RhNGW0Y8sIDcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQhi7QktCw0L3RhdCw0LvRjC7QoNC+0L3QtNC+LCAyKdCcLtCU0YDQtdC80LvRjtCz0LAuJyfQktC10YHQtdC70LAg0LPRgNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTJLdXRqLW93cHNyOGhlbHJtX2tGWmgxeVF3TWpFQzdBL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C+0LvRg9CxINCQ0LvRltC90LAsIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsINCG0YcuLCAyKdCRLtCU0LLQsNGA0ZbQvtC90LDRgS4g0J/RgNC10LvRjtC00ZbRj1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdXdoS01LZEpaSWhSem5NM1ZVNW1UcUV1S3h4VGVzYU8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDQuNCz0L7RgCfRlNCy0LAg0JrQsNGC0LXRgNC40L3QsCwgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Cg0LDQvdC+0LonJywgICAyKdCGLtCa0L7RgNC+0LvRjNC60L7QstCwLicn0JPQvtGA0L7QsdGH0LjQuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhaU12NUx3WVY5bTJ3ei1TSk1HbnhmVXFJUlQ5TV9Fdy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTQsNC90Y7QuiDQhNC70LjQt9Cw0LLQtdGC0LAsIDcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7Qm9GO0LHQsNGA0YHRjNC60LjQuS4nJ9Ci0LDQvdGG0Y7QstCw0LvRjNC90LAnJywgMikg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5LiDQktCw0LvRjNGBXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF2VGtfbUFCX0VDaDlWRHdSNkVNYXNZMXkyMUtXclNZSC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzEyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRgNC+0LPQsNC9ICDQnNGW0LvQsNC90LAsIDUg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QnNCw0LnRlNGALiAnJ9CS0LXRgdC10LvQsCDQs9GA0LAnJywgMinQlC7QkdCw0YjRgtC10LnQvS4gJyfQktCw0LvRjNGBINGB0LvQvtC90LXQvdGP0YInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWGIwZ0lnRnlDbkx1Q3hqbjVrbGFlUTBMbDlEc2tSUHovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCU0YDQvtC30LTQvtCy0LAg0ITQu9C40LfQsNCy0LXRgtCwLCA5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS7QnNC10L3Rg9C10YIuIDIp0JMu0JrQu9Cw0YHRgdC10L0uINCf0L7Qu9GM0LrQsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcjVfMThwUjdCTHhEU0RFbk1EN3JITkdqUjl6aUVpR24vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCX0LHRltGAINCc0LDRgNGW0Y8sIDgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7Qk9C10LTRltC60LUuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCAgICDQhiDRhy4sIDIp0KAu0KjRg9C80LDQvS4nJ9Cf0LXRgNGI0LAg0LLRgtGA0LDRgtCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV83cW4zZlR1dGRLR2NHZGJndjEzcktva0o4anhnazNhL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGM0LrRltCyINCe0LvQtdC60YHQsNC90LTRgNCwLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JTRltCw0LHQtdC70LvRli4g0KHQutC10YDRhtC+LCAgMinQni7Qk9C10LTRltC60LUuICcn0JzQsNC70LXQvdGM0LrQsCDQvyfRlNGB0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdlllVmtSYVYxbWIzM3VKMURHTXIyMHFvaWtGQ3I5QXkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQnNCw0YDRltCw0LwsIDgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0JzQsNC50LrQsNC/0LDRgC4gJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDRgdC+0LvRjCDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyUmxMTUpqb1d3VFZ1cDdfdlZNRDREM25sMlktbHNwTy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjtC6INCc0LDRgNGW0LDQvCwgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JrQuNGA0LXQudC60L4uICcn0KHRgtGA0LjQsS3RgdC60L7QuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJbXBQcTluY2JNaDVUMVNjQUhmRG16NTdCRGxMWkNGMi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbRgdGD0L/QvtCy0LAg0JDQu9GW0YHRltGPLCA4INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCg0LXQudC90LXQutC1LiAnJ9CT0LDQstC+0YInJywgMinQmS7QoS7QkdCw0YUuICcn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0LTQviDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwZzlDQ0pvWFJ6ZUc4Q2lGaGduRUJ6VFFCTElXRGFuQS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtCy0LDQu9C10L3QutC+INCS0LDRgNCy0LDRgNCwLCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0JPQtdGC0LDQu9C+0LLQsC4nJ9Cg0LDQvdC+0Log0LIg0LvRltGB0ZYnJywgIDIp0JIu0J/QvtC00LLQsNC70LAuICcn0JrQsNC/0YDQuNC30YPQu9GPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVMzOF9vRUNPQm83S0dEVjFhekpVeDN6T1l3Z1FFUUlWL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YDQtdC90ZbQstGB0YzQutCwINCU0LDRgCfRjywgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoC7QktCw0L3QtNCw0LsuJyfQktC+0LTQvtCz0YDQsNC5JycsICAgICAgICAgMinQny7Ql9Cw0YXQsNGA0L7Qsi4nJ9CX0L3QsNC50L7QvNC40Lkg0YHQuNC70YPQtdGCJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlDQXpQQ2FXckFOX1NXemFKRmRFcHhQSU9Rdy1yZkxVL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YHRgtC10L3QutC+INCv0YDQvtGB0LvQsNCy0LAsIDcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCa0L7RgdC10L3QutC+LiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNkZFljb3lnVGN0b2FiR1FGN3BUMnBvUnZDdXBWR19jL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YHRgtC10L3QutC+INCv0YDQvtGB0LvQsNCy0LAsIDcg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtCZ0ZTQvdGB0LXQvS4nJ9Cn0LDRgNGW0LLQvdC40Lkg0YLQsNC90L7QuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1QjI5YlRQRWlZZHVnSmZMT1psNFNRR3JGWTluUXByLS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzFkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQsNGC0LrQvtCy0YHRjNC60LAg0ITQu9C40LfQsNCy0LXRgtCwLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQvtGB0LXQvdC60L4uINCS0LDQu9GM0YEsICAgIDIp0J4u0JPRgNC10YfQsNC90ZbQvdC+0LIuJyfQnNGW0Lkg0LrQvtC90LjQuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2WUF3LXE3ZjhGOUpCUG1mbjh0RWtwSlQ4MUo3RWFoQS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzFlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvRltGI0LzQsNC9INCU0LDRgNC40L3QsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCf0L7QtNCy0LDQu9CwLicn0JzQsNGA0Ygt0LPRgNC+0YLQtdGB0LonJywgICAgICAgICAgMinQoS7QnNCw0LnQutCw0L/QsNGALiAnJ9Ca0L7Qu9C40YHQutC+0LLQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOc1d6M1RSMFNLaVR0Y05DQUplMDU5YmhoRm9tdF9ORS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzFmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNCz0L7Qu9CwINCh0L7RhNGW0Y8sIDgg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K8u0JHQvtCx0LDQu9GW0LouJyfQodCy0Y/RgtC60L7QstCwINC/0L7Qu9GM0LrQsCcnOyAyKdCGLtCR0LXRgNC60L7QstC40YcuINCh0L7QvdCw0YLQuNC90LAg0YHQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZ3VBeHM1Z193Ykd2X3R3cWl5cG8wZThGSE93dW0tSWgvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDQt9GD0YDQtdC90LrQviDQnNCw0LnRjywgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLiDQkdC+0LHQtdGALiAnJ9CQ0LPQtdC90YIg0KUnJywgICAgICAgICAgMinQhi7QhtC+0YDQtNCw0L0uICcn0J/QvtC70Y7QstCw0L3QvdGPINC90LAg0LzQtdGC0LXQu9C40LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJZTFXQ1FwZ1B1TFlkS054Vkd1TGtlSVZuWUpOWko5VC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzIxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNGA0YfQtdC90LrQviDQhNC70LjQt9Cw0LLQtdGC0LAsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDQtNC+INC80ZbQvdC+0YAsIDIp0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJ9CR0LDQsdCwINCv0LPQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFaSm80R1VMWjlzZmNVdUFwRjVqeW9ISVVWX0lLQVZyZy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzIyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNGA0YfRg9C6INCc0LDQutGB0LjQvCwgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0KQuINCo0L/RltC90LTQu9C10YAuINCh0L7QvdCw0YLQuNC90LAsINGC0LIuMTU3IOKEljRcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXNDN01VamNrbnJuWlpaNWhmTUNYYlN2czM2S0EzcHBWL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0YDRh9GD0Log0JzQsNC60YHQuNC8LCA4INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JPRltC70LvQvtC6LiAnJ9Ca0LDQv9GA0ZbRh9GW0ZTRgtGC0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWWRBaWh2QVFrQ1Q4YmJ5VzQ0cFFpMmlaaG1YMWMzS3ovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0L7RgtGD0LfQutC40L3QsCDQm9GW0LTRltGPLCA5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QkdGW0LvQsNGH0LXQvdC60L4uICcn0KPQutGA0LDRl9C90YHRjNC60LjQuSDRgtCw0L3QvtC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJwTzlkSEFjYlA4S2xhV1RfMW5YWFFpWmVidUQ4RjBwL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC+0YLRg9C30LrQuNC90LAg0JvRltC00ZbRjywgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JzQvtGG0LDRgNGCLiAnJ9Cc0LXQvdGD0LXRgicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDX214QVU2NVZ2dnZmaVBvUlFzY0tSMG9VRFdwSERRdC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J3QvtCy0L7RgdGW0LvRjNGB0YzQutCwINCa0LDRgtC10YDQuNC90LAsIDcg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCDRgtCyLjM2LCDQhi3QhtCG0IbRhy4sIDIp0IYu0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRj1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWTcyQ0ZMT01QaWJ3VFVQZ1dPbXNRSDNZSlB2aUJqRGEvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCe0LvRjNGF0L7QstGB0YzQutCwINCQ0L3RltGC0LAsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCGLtCf0LDQstC70ZbQui4gJyfQodC90ZbQttC40L3QutC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJzLVZnRk1uSVlaVm05a09qTmg2RlRsX1AwQ0FEUkIxL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQntC70YzRhdC+0LLRgdGM0LrQsCDQkNC90ZbRgtCwLCA5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnS4g0JrQsNGA0L/QtdC90LrQvi4g0JXRgtGO0LQg0YHRliDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrUzNCcVF3NC1tc01vem5PM056X2lXYzV5dGxKT0ZUbS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7RgdGC0LDQv9GH0YPQuiDQmtCw0YDRltC90LAuIDgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7Qk9GW0LvQu9C+0LogJyfQlNC30LLRltC90L7Rh9C60LgnJywgMinQhi7QpdGD0YLQvtGA0Y/QvdGB0YzQutC40LkuICcn0JLQvtCz0L3RltCy0L7Rh9C60LAt0YHRgtGA0LjQsdGD0L3RltCy0L7Rh9C60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNlJBY04yTzZrdW5LWkFGcmJnQkhzRU5pWmc5aUtzNEcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCe0YXRgNGW0L0g0K/RgNC10LzQsCwgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuICcn0J3QvtCy0LXQu9CwJycsICAgICAgMinQoS7QnNCw0LnQutCw0L/QsNGALicn0KLQvtC60LDRgtC40L3QsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6dzFKSzBKNGQ4SGstem5idi01b0RuYS1xTDNjd1JFUC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNCy0LvQtdC90LrQviDQodGC0LXRhNCw0L3RltGPLCA3INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCb0Y7QsdCw0YDRgdGM0LrQuNC5LiAnJ9Cf0ZbRgdC90Y8nJywyKSDQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuJyfQmtC70L7Rg9C90LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSW1ud0pqMkRlcXotVEpmdlhBQ0NyWnBpWk5UM0JuS0gvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDQvdGM0LrQvtCy0LAg0JDQvdC90LAsIDgg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiAnJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINC00L4g0LzRltC90L7RgCwgICAgICAgIDIp0Jsu0KjRg9C60LDQudC70L4uICcn0IbQvdGC0LXRgNC80LXRhtC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXlyQUhyNmkxN05TaFA1cWFJbVBuV3gteEpRakNNTXkyL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMmRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0YDRhNGM0L7QvdC+0LIg0JTQvNC40YLRgNC+LCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J0u0JLQu9Cw0LTQuNC60ZbQvdCwLdCR0LDRh9C40L3RgdGM0LrQsC4nJ9Cp0L7RgdGMINGB0YPQvNC90LUnJywgMinQni7Qk9C10LTRltC60LUuICcn0KLQsNC90LXRhtGMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5EZHc1N1Jzcm1MckVfeVdTRzB1RkpYRWpXY0dxR21SL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMmVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C+0LPQvtGA0ZTQu9C+0LIg0JDRgNGC0LXQvCwgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4gJyfQnNC10L3Rg9C10YInJywgMinQnS7QndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4gJyfQmtC+0LvQvtC80LjQudC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbmU4NmlNLU5VczZOY2lvQnN2VWpmUWE2TW43Y1NBUjcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YPQt9Cw0L3QvtCy0LAg0JzQsNGA0ZbRjywgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCjLiDQk9GW0LvQu9C+0LouICcn0JrQvtGA0L7Qu9GW0LLRgdGM0LrQuNC5INC80LXQvdGD0LXRgicnLCAyKdCGLtCG0L7RgNC00LDQvS4gwqvQn9C+0LvRjtCy0LDQvdC90Y8g0L3QsCDQvNC10YLQtdC70LjQutCwwrtcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU9HU19mcXpKdmJCN2FOUHJleHdxREs1eDBscy0yMENDL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNC10LfQvdGW0Log0KLQtdGC0Y/QvdCwLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J0u0KLQvtGA0L7Qv9C+0LLQsC4g0JLQsNGA0ZbQsNGG0ZbRlywgICAgIDIp0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5LiAnJ9Cc0LDQu9C10L3RjNC60LjQuSDQttC+0L3Qs9C70LXRgCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4R3hOVFR0V3JoZE91Nlk3R3VlVUFnR1h2am9MbE1CbC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzMxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQuNCx0LDQuiDQkNC90LDRgdGC0LDRgdGW0Y8sIDgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSku0JzQtdC70LDRgNGC0ZbQvS4nJ9Cg0LDQvdC+0LonJywgMinQnC7QnNCw0LnRlNGALicn0J3QtdC30LLQuNGH0LDQudC90LAg0L/RgNC40LPQvtC00LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdXptVnFGVm5uUWFJR1g3bzNILTd0TmUwa3AxWmlVdlAvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0ZbQv9C90LjQuSDQkdC+0LPQtNCw0L0sIDgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0IYuINCR0LXRgNC60L7QstC40YcuINCS0LDRgNGW0LDRhtGW0ZcsICAgICAyKdCULiDQoNC+0YPQu9GWLicn0JIg0LrRgNCw0ZfQvdGWINCz0L3QvtC80ZbQsicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFRbHIxXy1wRkFsTElpeEtraHgyLVp4eEVZWmhBWjlaNy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzMzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQvtC80LDQvdGH0LXQvdC60L4g0JXQu9C40YHQtdC5LCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCoLtCT0YPQvdC+Licn0JzQsNGA0Ygg0LzQsNGA0ZbQvtC90LXRgtC+0LonJywgICAyKSDQni7Qk9GA0LXRh9Cw0L3RltC90L7Qsi4nJ9Cd0LXQt9Cy0LjRh9Cw0LnQvdCwINC/0YDQuNCz0L7QtNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlJLXpqcTRRaW1ETDlUTEU1QlJZdXJtdUFMMTZmU2NVL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LnRh9GD0Log0K/RgNC+0YHQu9Cw0LLQsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIuINCc0LDQutGB0LjQvNC+0LIuJyfQkdCw0LHQsCDQr9Cz0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWDVDN2tmTmQzUWxvWmwwVEF2Tl9BUWgwLXFYdHBTU0IvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQudGH0YPQuiDQr9GA0L7RgdC70LDQstCwLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmi7QoNC+0LvQu9GW0L0uICcnINCo0L7QutC+0LvQsNC00L3QtSDQv9C10YfQuNCy0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNnZZbV9FZER4Xy0zQlJISk15RDM1azNvQzRGMnRWNTYvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0ZbRgtGI0LDRlNCy0LAg0JfQsNGA0LXQvNCwLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLtCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGAOyAyKdCaLtCh0LvQvtC90ZbQvNGB0YzQutC40LkuICcn0JTRjtC50LzQvtCy0L7Rh9C60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSDZlZFF0c1JwMF93Y3VPWVJBRWgxbGZmUnowVFh0aWIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0ITQstCz0LXQvdGW0Y8sIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtCy0LDRgdC90LXQstGB0YzQutC40LkuJyfQlNGD0LzQutCwJycsIDIp0JQu0JDQu9C10LrRgdCw0L3QtNC10YAuICcn0JfQuNC80L7QstCwINGA0LDQv9GB0L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNkxXOUVlc1BQczFTVGk2a1FwUXhkRUp6azNQZ25IWWovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0YLRgNC40LnRgdGM0LrQsCDQkNC80LXQu9GW0Y8sIDgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JIu0JrQvtGB0LXQvdC60L4uJyfQlNC+0YnQuNC6Jyc7ICAgICAgMinQni7QkdGW0LvQsNGH0LXQvdC60L4uICcn0JXQutGB0L/RgNC+0LzRgicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwaDlPTlJHMlQ0MnZ4QWxXeTRBU1AwcWdhOElVMDJydi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRgtGD0LTQt9C40L3RgdGM0LrQsCDQhNC70LjQt9Cw0LLQtdGC0LAsIDcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JsuINCc0L7RhtCw0YDRgi4gJyfQnNC10L3Rg9C10YInJywgICAgMinQoy4g0JPRltC70LvQvtC6LiAnJ9Ce0YHRltC90L3RltC5INC10YHQutGW0LcnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVmRzT2J1YjlaMEU3Wk0xUVlNc2Zxa2Fsam5uTFEyamUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0YPRhdCw0L0g0JTRltCw0L3QsCwgOCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmy7QqNGD0LrQsNC50LvQvi7QktCw0YDRltCw0YbRltGXINC90LAg0YLQtdC80YMg0JIu0KjQsNGX0L3RgdGM0LrQvtCz0L47IDIp0KAu0KTRg9GH0YEuJyfQnNCw0LvQtdC90YzQutC1INGA0L7Qt9Cx0LjRgtC1INGB0LXRgNGG0LUnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR3U1dWNvQ0dGaHlFbk1oMy1JRFVKLXVGMFR1ajM3VVovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0LXRgNC/J9GP0Log0JDQsNGA0L7QvSwgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQhi7QkdC10YDQutC+0LLQuNGHLiDQktCw0YDRltCw0YbRltGXINC90LAg0YPQutGA0LDRl9C90YHRjNC60YMg0YLQtdC80YM7IDIp0KIu0J7RgdGC0LXQvS4gJyfQnNCw0LvQtdC90YzQutC40Lkg0LXQu9GM0YQnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWnRRYk5CQmdHbU96TVdubkhBRi03X0NCc1hrM0x3LTIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0LjQvNGH0LXQvdC60L4g0J3QsNC00ZbRjywgOCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QqNGC0L7Qs9Cw0YDQtdC90LrQvi4gJyfQnNC10YLQtdC70LjQuicnLCAyKdCSLtCT0ZbQu9C70L7Qui4gJyfQnNGW0YHRj9GH0L3QtSDRgdGP0LnQstC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBTOUFHSHlFRHFzdGpxQTFNaUViVGtwNWoxVXVTaHJHL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzM2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotGW0YnQtdC90LrQviDQktC10YDQvtC90ZbQutCwLCA3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiAnJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINC00L4g0LzRltC90L7RgCwgMinQmy4g0KjRg9C60LDQudC70L4uINCS0LDRgNGW0LDRhtGW0ZdcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZ0cmo5azVqaER4Vmk1dWZoWFkzVEhrd09LOFkxMkhtL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzM2VcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotC+0LTQvtGA0L7QstCwINCU0LDRj9C90LAsIDYg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QkdCw0YDQstGW0L3RgdGM0LrQuNC5LiAnJ9CX0LDQudGH0LjQuicnLCAgICAgICAgICAyKdCcLtCb0Y7QsdCw0YDRgdGM0LrQuNC5LiAnJ9Cf0LvRj9GB0L7QstCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBBeklCdGpHME5mcWF6VUkyNUhzUnJGVlhqTHl6MkJpL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzM2ZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotC+0L3RltGU0LLQuNGHINCa0YHQtdC90ZbRjywgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCh0L/RltC70ZbQvtGC0ZYuJyfQk9GD0YbRg9C70Y/RgtCwJycsICAgMinQki7Qk9GW0LvQu9C+0LouJyfQoyDRgdGC0LDRgNC+0LzRgyDQktGW0LTQvdGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTE5dzN3bkhNcDZYTldTS0tyOVZKSW9ZalZJUDlNbEFPL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzNDBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotGO0YLRjNC60L4g0JLQvtC70L7QtNC40LzQuNGALCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0JrRg9C70LDRgy7QodC+0L3QsNGC0LjQvdCwLCDRgtCyLjU1IOKEljMsIDIp0KAu0JvRltGB0L7QstCwLicn0JLQtdGB0LXQu9C40Lkg0L3QsNGB0YLRgNGW0LknJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYmctSEs3THAzVXdqR2szTUlUVGREOWVRN3JGZGh4MUgvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXRgdC10L3QutC+INCQ0L3QvdCwLCA4INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCT0LXQtNGW0LrQtS7QodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwgIDIp0JIu0JPQsNCy0YDQuNC70ZbQvS4gJyfQmtCw0L/RgNGW0YfRh9GW0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRWpycThaRVhCSnFfQU5mQWlZLTVqS0g3UnM1OGZMdUMvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCn0L7RgNC90LXQuSDQr9C90LAsIDcg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JwuINCV0LrRiNGC0LXQudC9LiAnJ9Ca0LDQv9GA0LjQtyDQs9C90L7QvNGW0LInJzsgIDIp0KEu0K7RhNC10YDQvtCyLiAnJ9Cd0L7QutGC0Y7RgNC9JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWc2YkI3YXFXcHR3NWxMbkFpWGtsT0ZwUWw0WDBOTEtqL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzNDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQqNC60YPRgNC60L4g0KLQuNC80L7RhNGW0LksIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0KjQvtC/0LXQvS4gJyfQktCw0LvRjNGBJycg0LvRjyDQvNGW0L3QvtGALCAgICAgMinQmy7QqNGD0LrQsNC50LvQvi4gJyfQktC10YHQtdC70LAg0LzQvtC30LDRl9C60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZUpKNDRaYmdUclVUZEgtdEJQS0d5YzFLXzBycnlqNF8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCu0YDRh9GD0Log0K/QvdCwLCA3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCcLiDQmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwLCDRgtCyLjM2IOKEljEsINCGINGHLiwyKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuICcn0JLRgNCw0L3RltGI0L3RjyDQvNC+0LvQuNGC0LLQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvUFV1SDJxemFRVUx5cHZ1eTNNNlEtZjd2dmhabEFueC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzQ1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JDQvNGW0YXQsNC70LDQutGW0L7QsNGUINCE0LzQtdC70YzRj9C9LCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCR0ZbQu9Cw0YfQtdC90LrQvi4nJ9Ce0YHRltC90L3RltC5INC10YHQutGW0LcnJywgMinQnC7QmtCw0YDQvNGW0L3RgdGM0LrQuNC5LiAnJ9CT0YPQvNC+0YDQtdGB0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xemZxa3lHNkJwWjNfMVhYZGZfRlZZT1dGbXBha2pXV1AvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNDZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkNC90YLQvtC90Y7QuiDQktCw0YDQstCw0YDQsCwgMTIg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLtCf0LvQtdC50ZTQu9GMLiDQodC+0L3QsNGC0LjQvdCwINGA0LUg0LzQsNC20L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMURKZUhmM2ZBdVo1NVBmNjVtTUF0dzJQY3Q5NmRmYS10L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzQ3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JDQvdGC0L7QvdGO0Log0JLQsNGA0LLQsNGA0LAsIDEyINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QnNCw0LnQutCw0L/QsNGALicn0JIg0LrQvtCy0LDQu9GM0L3RlicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbFh5S3V3TV9KZ3hZWmw2ZVdrQXNlVTZ2TmFXejdwWXovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNDhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdCw0LHRh9Cw0L3RltC6INCQ0L3QtNGA0ZbQuSwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JQu0KfQuNC80LDRgNC+0LfQsC4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALiAyKdCuLtCR0ZbQu9C60L7QstGB0YzQutC40LkuICcn0KDQvtC30LTRg9C80LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVIQXNOS2pjSmlCZ3hBZElMT3NqREVSSktRTXplcTdBL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzQ5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQsNC70YPRgtCwINCQ0LvRltC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKSDQlS7Qk9GA0ZbQsy4gJyfQotCw0L3QtdGG0Ywg0Lcg0JnQvtC70YzRgdGC0LXRgNCwJycsIDIp0Jsu0JfQsNCx0LDRgNCwLicn0J3RltGHINGP0LrQsCDQvNGW0YHRj9GH0L3QsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb1hHRjNtNDFLLVFOOFkxLVdfajg1RHJUamtrODhzUVgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdCw0YHQuNGB0YLQsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0KQu0KjQvtC/0LXQvS4g0JLQsNC70YzRgSwg0YLQsi42NCDihJYxLCAyKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjywg0YLQsi42IOKEljFcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFzUFdaU1BuNFVNSlZkZno3M2dyYUR3ZHdJeHlYZ2pCWS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0ZbQu9GW0L3QutC10LLQuNGHINCd0LDRgtCw0LvRltGPLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC7Qm9C40YHQtdC90LrQvi4g0JXQu9C10LPRltGPLDIp0Jou0KfQtdGA0L3Rli4g0JXRgtGO0LQg4oSWMSDRgtCyLjc0MFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUFSX1dXMENGU1NDWHpWQWZySFh1d0JBRC1fUUM4ajZXL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzRjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHRg9C70YzQutC+0LLRgdGM0LrQsCDQnNCw0YDQuNC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQlC7Qp9GW0LzQsNGA0L7Qt9CwLiDQodC+0L3QsNGC0LAg0YHQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJveGR0Z0FkaEJJSmR0Y3hkem5aSFAtcTVmYXFhNVFLL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzRkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHRg9C70YzQutC+0LLRgdGM0LrQsCDQnNCw0YDQuNC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLtCT0LDQsdC10LsuICcn0JTQtdGA0LXQstC+INC20LjRgtGC0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWZYWjZOZHNONnU3OHRJNmVyS0VqWDJvZmVzSEIyZWJoL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzRlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQsNC60YPQu9C10L3QutC+INCQ0YDRltC90LAsIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QkdC10YDQutC+0LLQuNGHLiDQktCw0YDRltCw0YbRltGXINC90LAg0YLQtdC80YMg0LPRgNGD0LfQuNC90YHRjNC60L7RlyDQvdCw0YDQvtC00L3QvtGXINC/0ZbRgdC90ZYgJyfQodCy0ZbRgtC70Y/Rh9C+0LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNkdFhvVnpqRWwxWXFWQ2RCeXhLc1pkcUVqZnQxaHM2L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzRmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQsNC60YPQu9C10L3QutC+INCQ0YDRltC90LAsIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QlNC20L7Qv9C70ZbQvS4nJ9CQ0YDRgtC40YHRgiDQtdGB0YLRgNCw0LTQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR250aVl2THpIclVYSXNXRGZkSHA0MC10dDV5WXVpZ3EvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktCw0YHQuNC70YzRlNCy0LAg0JLQtdGA0L7QvdGW0LrQsCwgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoC7Qk9C70ZbRlNGALiDQn9GA0LXQu9GO0LTRltGPINC00L4g0LzRltC90L7RgDsyKdChLtCU0LbQtdGA0LHQsNGI0Y/QvS4gJyfQqNCy0LjQtNC60LjQuSDRgNGD0YUnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVFCZ3RkaHcySVFlVEg2UUVZbktMR0JhbFgwSzJ1cE40L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzUxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQvtC50YLQtdC90LrQviDQm9GW0LvRltGPLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy4g0KjRg9C60LDQudC70L4uJyfQn9C+0L3RlicnLCAyKdCeLtCg0LjQsdCw0LvQvtCy0LAuICcn0J3QtdC/0L7RgdC40LTQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLUxfa0pIdTFQcGtQR1JDSl9FZnhGTEJibWM4Zk9Pd3EvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0LnRh9C10L3QutC+INCS0LvQsNC00LjRgdC70LDQsiwgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEpINCZLtChLtCR0LDRhS7QlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGE0LAg0LzQsNC20L7RgDsgMinQpC7QqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF3dTVrbFhHRzdCaDJmUGxSM1liZU1sU0taQlQ4UFJuTi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7RidC40L3RgdGM0LrQuNC5INCG0LvQu9GPLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCVLtCT0YDRltCzLiDQndC+0LrRgtGO0YDQvSwgMinQnC7QoNC40LzRgdGM0LrQuNC5LdCa0L7RgNGB0LDQutC+0LIuICcn0J/QvtC70ZbRgiDQtNC20LzQtdC70Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTdsYlMwTDk1NmFOWjlEMEdUSS1wLWszOXo0bHBlaEM3L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQsNC70LXRh9C10LIg0IbQstCw0L0sIDExINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCe0LHRgC4g0JMu0JHQtdC3J9GP0LfQuNGH0L3QvtCz0L4uICcn0J3RltGHINGP0LrQsCDQvNGW0YHRj9GH0L3QsCcnLCAyKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuICcn0J3QtdCw0L/QvtC70ZbRgtCw0L3RgdGM0LrQsCDQv9GW0YHQtdC90YzQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0LVo4MnZZa1ZGMXgyTnBucUsxX3hoQWYyYld1YVBRVi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LDQvNC30LDQu9GW0ZTQstCwINCX0LXQudC90LDQsSwgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JHRltC70L7RgNGD0YEuINC90LDRgC7Qv9GW0YHQvdGPICcn0JHRg9C70YzQsdCwJycsINC+0LHRgC7QlC7Qm9GM0LLQsC3QmtC+0LzQv9Cw0L3RltC50YbRj1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWRRcUdGcGhPR28wVnBHb1VkNHo0VTNlbjlMVGMxOXBrL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQsNC80LfQsNC70ZbRlNCy0LAg0JfQtdC50L3QsNCxLCAxMiDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JPQsNC50LTQvS4g0JzQtdC90YPQtdGCXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xV3dfODAwSlB2SDY5WXRqT05FQ0pIOFZ0Wl9lWmtreWsvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GW0LvRltC90LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDExINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JzQvtGG0LDRgNGC0JDRgNGW0Y87IDIp0JQu0JPRgNCw0LTQtdGB0LrRli4nJ9Cc0L7RgNC+0LfQuNCy0L4uINCg0LXQs9GC0LDQudC8JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmM0s1MEdWY3c4a3NkWWdSTXhWNjFhZFJBRkg1UEtNdy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0L7RgNCw0Lkg0K/RgNC+0YHQu9Cw0LIsMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QodC60L7RgNC40LogJyfQnNC10LvQvtC00ZbRjycnLCAgICAgICAgIDIpINCfLtCR0LDQt9Cw0LvQsC4gJyfQn9C+0YLRltC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFVQ2JuN3hQdkVickhDcE1UaG5DSWo1UXRnbjZyVlNfZi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0L7RhtGD0LvQtdC90LrQviDQktGW0LrRgtC+0YDRltGPLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtCR0LDRhS4g0JTQstC+0LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDQu9GPINC80ZbQvdC+0YAsIDIpINCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9IOKEljIxXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNzFJQ01fN0docmFvMVJONnVnMFhMb1JOSktvYmFSR1EvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GD0LrQsNGB0Y/QvSDQm9GW0LDQvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC7QpdCw0YfQsNGC0YPRgNGP0L0uIFxcXCLQkNC90LTQsNC90YLRltC90L5cXFwiXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMklkQWZTaV93YVU2bHJOZlV2UDJIMHgwV083OGFNR2EvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1YWFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GD0LrQsNGB0Y/QvSDQm9GW0LDQvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy7QpdC10LvQu9C10YAuINCh0L7QvdCw0YLQuNC90LBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrdE9WQzNUUl9BRTR1UmJHNjJPeE5LVmpvTkpxaXVQbS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPQu9GP0ZTQstCwINCE0LLQsCwgMTHRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCfLiDQl9Cw0YXQsNGA0L7Qsi4nJ9CV0LvQtdCz0ZbRjycnLCAyKSDQky7QktCw0LvQu9C10L3Qs9Cw0YPQv9GCLiAnJ9Ch0LrQtdGA0YbQuNC90L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJiY203Rl9CZkFlcU1FemZRaFo2ZkYzWTIxYTdyWXN3L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRg9GC0L3QuNC6ICDQmtGW0YDQtdC90LAsIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy7QqNGW0YLRgtC1Licn0KLQsNC90LXRhtGMICDQs9C90L7QvNGW0LInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5pRHFOaUNKdTNDTFMzRUc1QldIdUJfQXE3djQ1UnMzL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRg9GC0L3QuNC6INCa0ZbRgNC10L3QsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCeLtCh0L7Qu9C+0LLRj9C90LXQvdC60L4uJyfQn9C+0L3RliDQsdGW0LvRjyDRhtC40YDQutGDJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoN3EwWWFZaXk2QTZzNkJwd19UeHR6cnd3U19BejlMeC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCU0L7RgNC+0YjQtdC90LrQviDQrtC70ZbRjywgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JwuINCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAsINGC0LIuMzYg4oSWNiwg0IYg0Yc7IDIpINCGLtCR0LXRgNC60L7QstC40YcuINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuNDYg4oSWMTVcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHbEZDTEMzeF8xdFpDT2ZtTmhOMG00VDBQT0pZQlRqTi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1ZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCU0YPQtNGW0L0g0JTQvNC40YLRgNC+LCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmy7QkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LjQvdCwINGB0L7Qu9GMINC80LDQttC+0YAs0IYt0IbQhiDRhy47IDIp0KEu0J/RgNC+0LrQvtGEJ9GU0LIuICcn0JrQsNC30L7Rh9C60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhibTR4LVZmekh6dXpCNGpUaGJzUGg4SWFDYTk0dHRCL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzYwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0ITRgNC80L7Qu9C10L3QutC+INCU0LDRgNC40L3QsCwgMTIg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuINCQ0YDRltGPINGA0LUg0LzQsNC20L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXU3TTZDWGl5c1VmSnV1Nk0tQXZCNzc0V2VuMEFudVpOL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzYxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0ITRgNC80L7Qu9C10L3QutC+INCU0LDRgNC40L3QsCwgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCR0ZbQu9Cw0YguICcn0JHQsNGA0LrQsNGA0L7Qu9CwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoT1JmNHVWdm9XNTRwVEN4Z0syekltZ3hZeEg0N1lvby9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCX0LDQs9Cw0ZTQstGB0YzQutCwINCh0L7RhNGW0Y8sIDEyINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCa0LvQsNGB0YHQtdC9ICcn0JzRg9C30LjRh9C90LjQuSDQtdGB0LrRltC3JyfihJYxLCAyKdCeLtCa0LjQvNC70LjQui4nJ9Cb0LXQvtC90YLQvtCy0ZbQsNC90LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXcxVFBoOUpYc0FqZV9LcEU5UVBwNUl2MEV1am12akctL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzYzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3QvdGW0LrQvtCy0LAg0JzQsNGA0ZbRjywgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QnNC+0YbQsNGA0YIuINCh0L7QvdCw0YLQsCDihJYxNiwg0IYg0YfQsNGB0YLQuNC90LAsICAyKdCeLtCT0YDQuNCx0L7RlNC00L7Qsi4g0JLQsNC70YzRgVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVgxdmhzVElQa0k1emlzMjJKSE9YeFFVRGRPQmU5QTlHL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjtC6INCS0ZbRgNGB0LDQstGW0Y8sMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QpdC+0LTQvtGILicn0KfQtdGA0LLQvtC90LAg0YjQsNC/0L7Rh9C60LAnJywgMinQhi7QqdC10YDQsdCw0LrQvtCyLicn0JXQu9C10LPRltGPINC60LjRl9Cy0YHRjNC60LjRhSDQv9Cw0LPQvtGA0LHRltCyJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFNN0kxUUpiRmtXQlFId0sxbEhLb3lvRTMwbC1XYzEybS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCH0LLQttC10L3QutC+INCQ0LTQsCwgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLtCh0L7QvdCw0YLQuNC90LAg0YHQvtC70Ywg0LzQsNC20L7RgCwgMinQnC7QodC60L7RgNC40LouICcn0J3QsNGA0L7QtNC90LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtwbTZrME1DdHVqZzdzUEg5ZGNvZFkwa3oxQnJHRVg5L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNC80LDQvdGH0Lgg0ITQu9C40LfQsNCy0LXRgtCwLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0LDQu9GW0YHRgtGA0LDRgtC+0LIuJyfQmtC+0L3QuNC6INCT0L7RgNCx0L7QutC+0L3QuNC6JycsIDIp0K4u0JLQtdGB0L3Rj9C6LiAnJ9Cd0ZbQttC90ZbRgdGC0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW1sV2FMWXNEOGZrQlFIZ2RyWC1SZk5Da2Q2d1JyUGtPL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNGA0LDRiNC60LXQstC40Ycg0KXRgNC40YHRgtC40L3QsCwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGA0LUg0LzRltC90L7RgCwgMinQnC7QlNGA0LXQvNC70Y7Qs9CwLiAnJ9Ch0LrQtdGA0YbQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRUJHaE5JcHRKU2VpMEdaTEtwc2Z5YUloaTNVYWUwY0gvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGW0YbQtdGA0LAg0JDQu9GW0L3QsCwgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QlNC10LHRjtGB0YHRliAnJ9Cg0L7QvNCw0L3RgtC40YfQvdC40Lkg0LLQsNC70YzRgScnLCAyKdCRLtCk0ZbQu9GM0YYuICcn0KHQutC10YDRhtC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOb3Zzb2dfdzUycHpHa2ZKMmhaeGlodjMzQzJjU2YwSi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7RgNC+0LvRjCDQhNC70ZbQt9Cw0LLQtdGC0LAsIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0J/RltGB0L3RjyDQttCw0LnQstC+0YDQvtC90LrQsCcnOyAyKdCbLtCo0YPQutCw0LnQu9C+LiDQn9GA0LXQu9GO0LTRltGPXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa2JyR2w4X0loZnFuamt2VHZvV2g3OW1nbTlwUTVrVEovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YLQu9GP0YDQtdCy0YHRjNC60LAg0K7Qu9GW0Y8sIDExINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmS4g0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINGB0L7Qu9GMINC80LDQttC+0YAsINCG0YcuXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRkFXSEhLUTVveDBFVEpMdnVyclJnWjJkT20xdnRGa2UvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YLQu9GP0YDQtdCy0YHRjNC60LAg0K7Qu9GW0Y8sIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIn0JPQsNC90LTQt9GPJycsINC+0LHRgC7QhCDQktC10LLRgNC40LrQsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtJdmRzdklyeGVvODE2ZC1fTVY1bmJiY3ItYU9aaEVwL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtGC0L7QstCwINCc0LDRgNGW0Y8sIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCa0LvRjtGH0LDRgNGM0L7Qsi4nJ9Co0YPRgNCw0LvRlCcnLCAyKdCkLtCc0LXQvdC00LXQu9GM0YHQvtC9Licn0J/RltGB0L3RjyDQsdC10Lcg0YHQu9GW0LInJywg0YLQsi4xOSDihJYyXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWTFjV18yWml3QkVOMFljMUtyV1duY1gzNzZ6Z2FENUIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGA0LjQstC+0LHQsNCx0LrQviDQmtGB0LXQvdGW0Y8sIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmy7QqNGD0LrQsNC50LvQvi4gJyfQktC10YHQvdGP0L3RliAg0LrRgNCw0L/Qu9C40L3QutC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFkSUpna0xJTzJlN2xjTnB1QVJqeG11ZHcwM3hqbmMzMi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YDQuNCy0L7QsdCw0LHQutC+INCa0YHQtdC90ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCdLtCa0LDRgNC/0LXQvdC60L4uINCV0YLRjtC0ICDRgNC1INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFCNC1FYlJZTy1iY0NqZnVwcGVIWFNodjVEUXp1aTloQS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2ZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YPRgtC60L7QstGB0YzQutCwINCb0LDRgNC40YHQsCwgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JUu0JPRgNGW0LMuICcn0J3QvtC60YLRjtGA0L0nJywg0YLQsi41NCDihJY0LCAyKdCiLtCa0YPQu9GW0ZTQsi4gJyfQm9C10LfQs9GW0L3QutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExY21RQmRzbTJlcHdaU19tVUp4M2dwMVc1ODJaeVdkNy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCbadC30L7Qs9GD0LEg0JDRgNGB0LXQvSwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQky7QodCw0YHRjNC60L4uJyfQoNC10LPRgtCw0LnQvCcnLCAyKdCfLtCX0LDRhdCw0YDQvtCyLicn0KHRgtCw0YDQvtCy0LjQvdC90LAg0LHQsNC70LDQtNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExU0ZrV0Z2V25fVUdOSks3YzdaMUxsSjJOYXNNOUtzZy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0LDQvdGB0YzQutC40Lkg0ITQstCz0LXQvSwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJ9Cg0LDQvdC60L7QstCwINC80L7Qu9C40YLQstCwJycsINGC0LIuMzksIDIp0IYu0JHQtdGA0LrQvtCy0LjRhy4g0KLQvtC60LDRgtCwINC70Y8g0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZuUEZMczV4SEN0MFRMMnNkMUU5V1d5aFRCOGtHVHVoL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzcyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQtdCy0LDQvdC00ZbQstGB0YzQutCwINCc0LDRgNGC0LAsIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki7QkdCw0YDQstGW0L3RgdGM0LrQuNC5LiAnJ9Cj0LrRgNCw0ZfQvdGB0YzQutC40Lkg0YLQsNC90LXRhtGMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGVmp4QWVCM2RPekpwQVREWHlJLTFBQnRSaXpqempvZC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0LXQstCw0L3QtNGW0LLRgdGM0LrQsCDQnNCw0YDRgtCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0K8uINCh0ZbQsdC10LvRltGD0YEuINCV0YLRjtC0INGC0LIuIDc2IOKEljJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE4SzdyZ1J6akNxWi1fNUVXcjBFb0U1SmxuVHloZ1pTNC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0LXQt9CwINCQ0L3QvdCwLCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KQu0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0g4oSWMjAsIDIp0J8u0JfQsNGF0LDRgNC+0LIuICcn0KDQvtC90LTQvi3Qs9Cw0LvQvtC/JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUd2Yyc0ozXzlBcjNvT1RtWldLdjZxOFNNYTlmR2EtcC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0LjQutC+0LLQsCDQktCw0YDQstCw0YDQsCwgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JIu0JPRltC70LvQvtC6LicnQmlsbCBiYWlsZXknJywgMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQqNCw0YDQvNCw0L3QutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFkRTVMY2ZWLVQ4UWhMWGlBZm44c3hMRU1lY3ZnUy1oTy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0ZbQu9GW0Log0JzQsNGA0ZbRjy3QnNCw0LPQtNCw0LvQuNC90LAsIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCo0L7Qv9C10L0uICcn0JDRgNC60YPRiCDQtyDQsNC70YzQsdC+0LzQsCcnINC80ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YAsIDIp0Jwu0JrQvtC70LXRgdGB0LAuICcn0KHQutC10YDRhtC40L3QvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcXRpY2R1QVFRbTcyTmN5OGUtc3Q2bmtqcXdCckZTVGUvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LrQsNGA0LXQstC40Ycg0JDQvdC00YDRltC5LdCe0LvQtdC60YHQsNC90LTRgCwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGA0LUg0LzQsNC20L7RgCwgMinQmi7Qp9C10YDQvdGWLiDQldGC0Y7QtCDihJY1LCDRgtCyLjI5OVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlWdUJQZnc0SG5jUEprSm4yeU5aWnc4VVhsVVhKSFZjL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNGG0ZbQsdC+0YDRgdGM0LrQsCDQkNC90L3QsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JkuINCR0LDRhS4g0JTQstC+0LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDRgdGWINCx0LXQvNC+0LvRjCDQvNCw0LbQvtGALCAgICAyKSDQpC4g0K/QutC40LzQtdC90LrQvi4gJyfQldC70LXQs9GW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNyWXR0SkZkaXpzdUJlMHlOc0tyTkRnSlVQX0FpaGFOL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQtdC70YzQvdC40Log0JzQuNGF0LDQudC70L4sIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli4g0YHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsIDIp0JIu0JrQvtGB0LXQvdC60L4uICcn0JTQvtGJ0LjQuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYzBwV2pHb2dEYUVZQ1JDc2t6Y3E5VmRVbEh5LWhzaEcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2FcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC10YDQutGD0LvQvtCy0LAg0JzQsNGA0ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCULtCn0ZbQvNCw0YDQvtC30LAu0KHQvtC90LDRgtCwINGB0L7Qu9GMINC80LDQttC+0YA7IDIpINCcLiDQltC10YDQsdGW0L0uINCS0LDQu9GM0YFcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqNXBFRDd3UTNBSFAwcE54OVZPNFBwOGRyaWw5YU16Zi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LjQs9Cw0LvRjtC6INCg0ZbQsNC90L3QsCwgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4gJyfQmtC+0LvQvtC80LjQudC60LAnJywgICAyKdCSLtCT0ZbQu9C70L7Qui4nJ9Ca0LDRgNC90LDQstCw0Lsg0LIg0KDRltC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwNVNNT2VCYVV6MGp6WDhBMGw2WDROOXl2dHdHMHc4bS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3Y1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LjRgNCz0L7RgNC+0LQg0JLRgdC10LLQvtC70L7QtCwxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCa0YPQu9Cw0YMuINCh0L7QvdCw0YLQuNC90LAg0YTQsCDQvNCw0LbQvtGALNCGINGHLjsgMinQnC7Qm9C40YHQtdC90LrQvi4gJyfQldC70LXQs9GW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtweHN1UkpubDN0NjRsYk84dmlWZ2ZHc3dfYU1rUlNtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQvtGA0L7Qt9C+0LLQsCDQotC10YLRj9C90LAsIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QkdC10L3QtNCwLtCh0L7QvdCw0YLQuNC90LBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE1dTRvSzR1SXY5MjNCYmh3SHVReGMya2Iyelc0REltRy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3ZGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC+0YDQvtC30L7QstCwINCi0LXRgtGP0L3QsCwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCo0LXQstGH0LXQvdC60L4gXFxcItCS0LXRh9GW0YBcXFwiXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRnktTDA0RUFmY3E3STFiUnB4NXBFOGx5ZElCeVQzU0YvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2VcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNGD0L3RgtGP0L0g0J3QsNGC0LDQu9GW0Y8sIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiDQotC10LzQsCDQtyDQstCw0YDRltCw0YbRltGP0LzQuCwgICAgICAgMinQmy7QqNC40YLRgtC1Licn0IbRgdC60YDQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVmpOSGNXV2d0bWJha1VYbXBjM2g3ZmhvTjVncHM5UlYvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2ZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQntCx0L7RgNC60ZbQvdCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCVLtCT0YDRltCzLicn0JzQtdC70L7QtNGW0Y8nJywgICAgMinQmy7QqNGD0LrQsNC50LvQvi4gJyfQkdCw0LPQsNGC0LXQu9GMJycg4oSWNVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWNoMnd2enh0UjdFUjItNmlETFVndkNBcXVVaXY4ZFZmL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzgwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QtdC90LTRjtGAINCh0L7RhNGW0Y8sIDExINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCeLtCU0LDRgNCz0L7QvNC40LbRgdGM0LrQuNC5Licn0JLQsNC70YzRgScnLCAyKdCcLtCh0LrQvtGA0LjQui4nJ9Cd0LDRgNC+0LTQvdC40Lkg0YLQsNC90LXRhtGMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFzREc2d25ncEtIY01TT2FPaV9ZbFVHa3VjYWRCQXBCSi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LXRgNC10YLRj9GC0YzQutC+INCQ0L3QsNGB0YLQsNGB0ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLtCT0YDRltCzLiAnJ9Ci0LDQvdC10YbRjCDRltC3INCZ0L7Qu9GM0YHRgtC10YDQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMF9MZ3YtZkxPZDN5UEFtTm1XQ2Q4WU4zbFN3WEhMS0cvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C10YDQtdGC0Y/RgtGM0LrQviDQkNC90LDRgdGC0LDRgdGW0Y8sIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLtCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAg4oSWNCwg0YLQsi4zNlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTN3c0ktc3NUUHg5ZWEwcVpIRllzdnNQMm51UGJTREo3L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzgzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QvtC30L3Rj9C6INCS0LXQvdGW0LDQvNGW0L0sIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCULtCf0YPQu9C10L3Qui4g0KHRgtCw0LrQutCw0YLQvi4gMikg0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0JLQtdGB0LXQu9CwLdGB0YPQvNC90LBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF2c2JjMkd2SFlBcmdnUDU3LVo1d0ZsR3djaE1wTnAzRS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YDQvtC60L7Qv9GO0Log0JzQsNGA0LjQvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQhi7QkdGW0LvQsNGH0LXQvdC60L4uINCV0LrRgdC/0YDQvtC80YIuIDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuINCi0LDQvdC10YbRjFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVFuOURRTDJOSEplT2ZHSERIWXdhdVo2MnZpbnJmbEF5L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQtdGI0LXRgtC90ZbQutC+0LLQsCDQm9GO0LTQvNC40LvQsCwgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0J4u0JHRltC70LDRh9C10L3QutC+Licn0J7RgdGW0L3QvdGW0Lkg0LXRgdC60ZbQtycnLCAyKdCeLtCf0L7Qu9GM0L7QstC40LkuJyfQn9C+0LvRjNC60LAt0LHQsNCx0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX1hmQ0s4RksxRkxteGJrRUI4VlRkZmE5OTBxSjd4UkEvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNC+0YLQsNGAINCa0LDRgNGW0L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9CR0LDRgNC60LDRgNC+0LvQsCcnLCAyKSDQlC7Qn9C10YjQtdGC0YLRli4gJyfQn9GA0LXRgdGC0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTdNRi0wejZ1QWttS1dscFl5U1dHSDhzYk9pWi0tbjlKL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNCy0YfQtdC90LrQviDQnNCw0YLQstGW0LksIDEx0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtCwINC80ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YAsINCGINGHLiwgMinQhi7QqdC10YDQsdCw0LrQvtCyLiAnJyDQldC70LXQs9GW0Y8g0LrQuNGX0LLRgdGM0LrQuNGFINC/0LDQs9C+0YDQsdGW0LInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUpfSFFrNklTMlBaUFpVUDl1WU9QNndrUXRSM29wbzZCL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNC60LLQsCDQktCw0LvQtdGA0ZbRjywgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JvQsNC90YHQtdCy0LjRhy4nJ9Cf0YDQtdC70Y7QtNGW0Y8nJywgMinQnC7QlNCy0L7RgNC20LDQui4gJyfQlNC20LDQt9C+0LLQuNC5INC10YLRjtC0Jycg0LvRjyDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMXRzZEx2azI1YkQ4RlNEWVRYWG55cFIyOWdrUHR4WHMvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0YDRgtCw0L3RltGPINCU0LDQstC40LQsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCVLtCS0LDQs9C90LXRgC7QodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwgICAyKSDQoC7QktCw0L3QtNCw0LvQuy4nJ9CS0L7QtNC+0YHQv9Cw0LQnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW1yRVNZWklpUDFpV2VuR2laRFVJT2IwdXNDSkswZFQ4L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzhhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQutC+0YDQvtGF0L7QtNGM0LrQviDQhNCy0LPQtdC90ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J0u0J3QuNC20LDQvdC60ZbQstGB0YzQutC40LkuICcn0IbQstCw0YHRjCDQs9GA0LDRlCDQvdCwINGH0LXQu9GM0L4nJywgMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQotC+0LrQsNGC0LAnJyDRgdGWINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFaWYwWl9NaUFRVnB6YmN6VlNqamJ2aDFnVXhlX0UzWC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0L7Qu9C+0L3QtdC90LrQviDQkNC90L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLtCa0L7RgdC10L3QutC+LiAnJ9Cf0LXRgtGA0YPRiNC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXRDeHA0VWJaRlplRk1ydzZEWU5pOVZZSFlTdll3TlFJL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzhjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvtC70L7QvdC10L3QutC+INCQ0L3QvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0KQuINCR0YPRgNCz0LzRjtC70LvQtdGALiAnJ9CR0LDQu9Cw0LTQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRU9INnpod293NGFRWmZKZXMyOEx4aUlCc2g1SGJmR3UvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC+0YDQvtC60LAg0JzQsNGA0ZbRjywgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlC7QptC40L/QvtC70ZYuINCf0YDQtdC70Y7QtNGW0Y8g0YLQsCDRhNGD0LPQsCDRgNC1INC80ZbQvdC+0YAsIDIp0Jou0JPRg9GA0LvRltGCLiAnJ9Co0YLQvtGA0LwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXRmcF9nQlJaMWZsai1MR3FkZTZFZHhRbUtUbGVwMGpQL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzhlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRgtC10YbRjtC6INCe0LvQtdC60YHQsNC90LTRgNCwLCAxMiDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QlNC10LHRjtGB0YHRli4gJydEb2N0b3IgR3JhZHVzIGFkIFBhcm5hc3VtJycsIDIp0KQu0KjQvtC/0LXQvS4gJyfQktCw0LvRjNGBJycg4oSWOVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXp4Sld5Q21zN2taaHNwTkJBbHphY1VuQUxXOEVKQU03L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzhmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRgtC+0YDQvtC20YPQuiDQodGC0LDQvdGW0YHQu9Cw0LIsIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JUu0JPRgNGW0LMuICcn0J/QvtC10YLQuNGH0L3QsCDQutCw0YDRgtC40L3QutCwJycg4oSWMSwgMinQkC7QmtC+0YEt0JDQvdCw0YLQvtC70YzRgdGM0LrQuNC5LiAnJ9Cf0L7Qu9C+0L3QuNC90LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJ0SzB2VXJBb0lsR2JVSjVIYVVHYlFQbDF6Vm1US0tKL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzkwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQutCw0YfQtdC90LrQviDQnNCw0LnRjywgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki4g0JAuINCc0L7RhtCw0YDRgi4g0KHQvtC90LDRgtCwIDE2INCaIDU0NSzQhtGHLjsgMinQhi7QqNCw0LzQvi4nJyDQktC10YHQvdGP0L3QutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFtNlpzVmFyTlByY2Z5bU8zQmt1bWRLeExKeUJUeHg1LS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCj0L3Qs9GD0YDRj9C9INCe0LvQtdC60YHQsNC90LTRgNCwLCAxMiDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J4u0JPRgNC40LHQvtGU0LTQvtCyLiDQktCw0LvRjNGBLCAgICAgICAgICAyKdCcLtCh0ZbQu9GM0LLQsNC90YHRjNC60LjQuS4gJyfQodGC0YDRltC80LrQuNC5INC/0L7RgtGW0LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXYyTFJWRGhGSjJ6WE5fNXdWeEFjaDdYOGwwV1E4ck9nL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzkyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00L7RgNGH0LXQvdC60L4g0ITQstCz0LXQvdGW0Y8sIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmy7QkdC10YLRhdC+0LLQtdC9LiAnJ9CR0LDQs9Cw0YLQtdC70YwnJywg0YLQsi4xMTlcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFaUEhHUURBeWZ0b0FXMGFLT1Qyc25mYThNamdhbGNaUS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0YDRh9C10L3QutC+INCE0LLQs9C10L3RltGPLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QkdGW0LvQsNGILicn0KHQutC10YDRhtC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoMWlzR3d2ZVcxdWlXM1UyeGVPMldXdUZ4dlNTdlEtTC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0YLQvtCy0LAg0JrQsNGC0LXRgNC40L3QsCwgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEpINChLiDQkdC+0YDRgtC60LXQstC40YcuJyfQldGC0Y7QtCcnINGE0LAg0LTRltGU0Lcg0LzRltC90L7RgCwgMikg0KQu0KjQvtC/0LXQvS4gJyfQndC+0LrRgtGO0YDQvScn0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZVFCWHk2a2hMY2k0ZkpORzhCYUNNMVpGTGtLajBOUncvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTRh9GD0Log0JDQu9GW0L3QsCwgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC4g0JTRltCw0LHQtdC70LvRli4g0KHQvtC90LDRgtC40L3QsCDihJYxLCDQhtCG0IYu0Yc7IDIp0JTQti4g0JvQsNGB0YIuJycg0KHQsNC80L7RgtC90ZbQuSDQv9Cw0YHRgtGD0YUnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWpyRmJ2ZGdHMk5sVS1iNDE2LXVSMGJpckRyVy1QbklIL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzk2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00Y7QuiDQktC+0LvQvtC00LjQvNC40YAsIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCaLtCcLtCS0LXQsdC10YAu0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YA7IDIp0J4u0JPQvtC90YfQsNGA0YPQui4gJyfQl9C10LvQtdC90LjQuScnINGW0Lcg0LfQsdGW0YDQutC4ICcn0JLQtdGB0LXQu9C60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUhfSXc4OXhqZjFvMjdQdFBfbmVRSTc4QnlQNjV5RXZZL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzk3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXQvtGDINCW0YPQuSwgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQny7Qhi7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9CW0L7QstGC0LXQvdGMJycsIDIp0JUu0JLQtdCy0YDQuNC6LiAnJ9CT0LDQvdC00LfRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWFp3V1h0NmhRQVN1WWZ0U05yNXNUUEVyc3RGVVY1OFIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOThcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQp9C40LYg0J3RltC90LAsIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtCT0LDQudC00L0g0KHQvtC90LDRgtCwIOKEljQsINCG0Yc7IDIp0Jsu0JTRjNGP0LrQvtC90LXQvdC60L4uICcn0J/RgNC+0LHQsNGH0LXQvdC90Y8g0YMg0LzQsNC80LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFJVXIwaC1ONTI5MEI2S2FJbVhrSkhtU0Rpa19VYXdlL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzk5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfRltC00LXRgNCwINCh0LDQvNGD0LXQu9GMINCj0LzQtdGFLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSAg0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4gJyfQodGC0LDRgNC+0LLQuNC90L3QsCDRhNGA0LDQvdGG0YPQt9GM0LrQsCDQv9GW0YHQtdC90YzQutCwJycuIDIpINCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4nJ9Ca0LvQvtGD0L3QuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcExZQW1SQlh3ekluMXgzWEhodkxyZV9BTlpKVDJwOHcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOWFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQqNCw0YLQsNC70L7QstCwINCG0LvQvtC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQuINCT0ZbQu9C70LXRgC4gJyfQnNCw0LvQtdC90YzQutC1INGA0L7QvdC00L4nJzsgMinQki4g0JrQvtGB0LXQvdC60L4uICcn0JLQsNC70YzRgScnINGB0ZYg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVnNTZjYlkxQ1VCaE8xLXRaZnVjUkF1QUhiSUZLejljL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzliXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQtdCy0YfQtdC90LrQviDQnNCw0YDQs9Cw0YDQuNGC0LAsIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCR0LDQu9Cw0L3QtNGW0L0uINCS0LDRgNGW0LDRhtGW0ZcsICAgICAgICAgIDIp0KIu0JHRgNCw0YPQvS4gJyfQotCw0L3QtdGG0Ywg0LLRltGC0YDRgycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcGtCQnFmUy1wbUZ4YjVuTmRBY2g5V1hVcEdxc1V4YTgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOWNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQqNC10L/QtdGC0YzQutC+INCe0LvQtdC60YHQsNC90LTRgCwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCkLtCo0L7Qv9C10L0uINCc0LDQt9GD0YDQutCwLNGC0LIuNjcg4oSWIDQsIDIp0JUu0JPRgNGW0LMuICcn0KLQsNC90LXRhtGMINGW0Lcg0JnQvtC70YzRgdGC0LXRgNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWYmhWaldyVWl0VG8tLTgzSTVGV055ZFFyUEMzWUd5Ui9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCo0YPQvNGB0YzQutCwINCd0LDQtNGW0Y8sIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLicn0KLQtdC80L3QsCDQutGW0LzQvdCw0YLQsCcnLCAyKdCSLtCd0LXRg9Cz0LDRgdGW0LzQvtCyLtCh0LrQtdGA0YbQvlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWs2Ni1Xcnk2M1M4eDd0NDhHV1VqWTBlNk8xeHFlVW90L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxMzllXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JDRgNGD0YLRjtC90Y/QvSDQm9GW0LTQsCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Jku0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwIOKEljIwLCDQhtGHLjsgMinQmy7QqNGD0LrQsNC50LvQvi4nJ9CE0LzQtdC70Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUJqNTY4Y25SZERaTUtyTVlmTFQ4a0NiSG00eWZYYjJrL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxMzlmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQsNC30LjQu9GO0Log0J3QsNGC0LDQu9GW0Y8sIDE2INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCvLtCh0ZbQsdC10LvRltGD0YEuINCf0YDQtdC70Y7QtNGW0Y8g0LvRjyDQvNGW0L3QvtGALDIp0IYu0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjyDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHYVdlWmJLYzZTaUl1ZGlZUVZCZ0Z4YWlPTzlTRXNrQS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0ZbQu9C+0LPRg9CxINCQ0L3RgtC+0L0sIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy7QkdC10YLRhdC+0LLQtdC9LiDQm9C10LPQutCwINGB0L7QvdCw0YLQsCDRhNCwINC80ZbQvdC+0YAsINCGINGHLlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWZIVW10TVdPakdOOXA1eGFTcmNJT3ZRRXUta29UR2FUL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2ExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHRltC70L7Qs9GD0LEg0JDQvdGC0L7QvSwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCeLtCh0YLRgNC+0LouICcn0JzRltGB0Y/Rh9C90LAg0YDQsNC/0YHQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZnFuTk9Gdk5uVlVjSTFMVVotVHFnRnpDbDVYRkVfc2kvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGW0YDRg9C6INCi0LDQvNGW0LvQsCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLtCh0L7QvdCw0YLQuNC90LAsINGC0LIuMjbihJYzLCAyKdCvLtCh0ZbQsdC10LvRltGD0YEuICcn0K/Qu9C40L3QsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNF9CMjZMUHl6UWprX2FCWnhHRldJcThSejZLUkNCblgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdC+0YDQvtCy0ZbQutC+0LLQsCDQhNC70LjQt9Cw0LLQtdGC0LAsIDE1INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCcLtCR0L7QsdC10YAuICcn0JTRltCw0LzQsNC90YLQvtCy0LAg0YDQsNC/0YHQvtC00ZbRjycnLCAyKdCkLtCh0LDQuS4gJyfQp9C+0YDQvdCwINC30LXQvNC70Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXBPMUZHcUItSzZ0dGg4cFBSTUJDYWxfcnNjZVNNeDIwL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHRg9GA0YPRhdGW0L3QsCDQmtCw0YLQtdGA0LjQvdCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg0LzRliDQvNGW0L3QvtGALCDQhtGHLiwgMikg0KEu0J3RltC60ZbRgtGW0L0uJyfQndCw0YHQv9GW0LInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJwTEg2M1N6TlRIZU15WEhrN3JDaGVzd1NjS3U5X2NIL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQsNGI0YPRgNGW0L3QsCDQki4sIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQki7QmtC+0YHQtdC90LrQvi4gJyfQn9C+0LXQvNCwLdCb0LXQs9C10L3QtNCwJycsIDIpINCeLtCh0LDRgNCw0YLRgdGM0LrQuNC5Licn0JrQvtC70L7QvNC40LnQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5OWt1c2d0cVhnSWdmRmMxNmxfNXF2Z0ZfSnk2MnZYNy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LjRiNC90LXQstGB0YzQutCwINCQ0L3QvdCwLCAxMyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JYuINCR0ZbQt9C1Licn0JTQt9C40LPQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWU4tMnlwMW9jUlZFMVJkWHEyTDdzajlxX0E4eXY1UE8vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktC40YjQvdC10LLRgdGM0LrQsCDQkNC90L3QsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JouINCb0LDQstCw0LvQu9C1LiAnJ9Cc0LXRgtC10LvQuNC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2MXRGcVRGSm9qYTJPVkR2SEtUdElXUGpOUS0yTGZ4MS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LXRgNCw0YHQuNC80YfRg9C6INCc0ZbQu9GU0L3QsCwgMTUg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLtCi0LDRgNCw0LLQtdGA0LTRltGU0LIuICcn0KHQv9C+0LPQsNC0JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFBbzB3T3g1MFVjS0xhWDhncEUzVzl0NjVEQzZLcGhyTS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LXRgNCw0YHQuNC80YfRg9C6INCc0ZbQu9GU0L3QsCwgMTUg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCeLtCR0ZbQu9Cw0YguJyfQotCw0L3QtdGG0Ywg0LvRj9C70YzQvtC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4bmJmakJtemNsTjQtdGw2dDlFR0RtM3lqTEdqd3BSNS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0L7RgNC00ZbRlNC90LrQviDQhNC70LjQt9Cw0LLQtdGC0LAsIDE5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLtCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0YDQtSDQvNGW0L3QvtGALCDQlNCi0Jot0IYsIDIp0KEu0JHQvtGA0YLQutC10LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPINC00L4g0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW94QmU2TjNhbHRGcDNVa3RGNUZkR1lGcmRYeUhESFdmL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNC10YnQsNC6INCc0LDRgNGW0Y8sIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0KfQtdGA0L3Rli4g0JXRgtGO0LQg0LvRjyDQvNCw0LbQvtGAOyAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5Licn0JXQu9C10LPRltGH0L3QuNC5INC/0YDQtdC70Y7QtCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSXd1THJkUGFreEgxZjZaUGZtdzdkN3ZHY2hLam9VNm0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNC10LnQvdC10LPQsCDQmtCw0YDRltC90LAsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLtCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQsCDihJYxNCwg0IYg0YcuOyAyKSDQoS7QltC00LDQvdC+0LIuICcn0J/RgNC10LvRjtC0JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjNWlXQzliNUozVHczT1dUREtTd005NUNGVEZCbHk0dC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCU0Y/Rh9GD0Log0JfQvtGA0Y/QvdCwLCAxMyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQoNCw0L3QvtC6JycsIDIp0J0u0J3QuNC20LDQvdC60ZbQstGB0YzQutC40LkuICcn0JrQvtC70L7QvNC40LnQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTc1ZySUZSZml0THZ6TTM3LVVXbmZHTmNzajA3T3VfMi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0YnRg9C6INCa0LDRgtC10YDQuNC90LAsIDE1INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmi7Qp9C10YDQvdGWLiDQldGC0Y7QtCDihJYxLNGC0LIuNzQwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbnNjcVM1ZTFwVXd0ZElPU09JZVhBVkhSR2pGdV8zTW4vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtGJ0YPQuiDQmtCw0YLQtdGA0LjQvdCwLCAxNSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC7QqNC+0L/QtdC9Licn0JvQsNGA0LPQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRW9LZVNyN0JJZUx3MEtzakN0cDFERURKXzhYZ2d4bnEvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC+0YfQutC+INCQ0L3RgtC+0L3RltC90LAsIDEzINGA0L7QutGW0LIuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQmS7QoS7QkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAINCU0KLQmi3QhiwgMikg0Jou0KfQtdGA0L3Rli4g0JXRgtGO0LQg4oSWNiDRgtCyLjc0MFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXVUcU9SSkl4STY1dUtxNC0yUnFPWG5WdVhqb1FQS2tTL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2IxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNGA0LXQu9GW0L3QsCDQmtGA0ZbRgdGC0ZbQvdCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLtCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0YDQtSDQvNGW0L3QvtGALCDQlNCi0Jot0IbQhlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZtaFcyT2w5dGwtZlY3Uk9hdHozbUVuYjFDMFZ3QWJ4L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2IyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNGA0LXQu9GW0L3QsCDQmtGA0ZbRgdGC0ZbQvdCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JAuINCc0L7RhtCw0YDRgi4g0KHQvtC90LDRgtCwIOKEljgsINCG0YcuXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xakZ0MHprbkdhOHZ2WHhEUktRbzV4MVlkemNyLUl4SFIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0YHRjNC60ZbQsiDQkNC90LTRgNGW0LksIDE0INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC7Qm9C10YjQs9C+0YDQvS4g0JXRgtGO0LQg0YTQsCDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNHVLWlVHN2wxUkV3RGtYa3ZSNmZZQmpRaVRQWkMza28vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0YHRjNC60ZbQsiDQkNC90LTRgNGW0LksIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmi7QlNC10LHRjtGB0YHRli4gJyfQnNGW0YHRj9GH0L3QtSDRgdGP0LnQstC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTUE5MSThWdkZoS3pwUndOOS1pQlJ1VGRkUGZKdVVlLS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LjRgNC40LvQvtCy0LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQoi7QkdGA0LDRg9C9LiAnJ9Co0YLQvtGA0LwsINGJ0L4g0L3QsNCx0LvQuNC20LDRlNGC0YzRgdGPJycsIDIpINCfLtCX0LDRhdCw0YDQvtCyLiAnJ9Cg0L7QvdC00L4t0LPQsNC70L7QvycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xV0hqLS1oYVluRTdwV3RmSEJveXBYbmhtN2kwaW5zdkcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0L3QtNGA0LDRgtGO0Log0JDQu9GW0L3QsCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J4u0JTRjtCx0Y7Qui4g0JLQsNGA0ZbQsNGG0ZbRlywgMikg0J4u0JHRltC70LDRiC4nJ9Cg0L7Qt9C00YPQvCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUndmU1F0VGZ3V3BMRHpZeUdmbUZ5T0tkeV9Tcks3U1ovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YHQtdC90LrQviDQkNC70ZbRgdCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQkC7QmtCw0YDQsNC80LDQvdC+0LIuICcn0JfRgNGD0LnQvdC+0LLQsNC90LjQuSDRhdGA0LDQvCcnLCAyKdChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiDQn9GA0LXQu9GO0LTRltGPIOKEljcsINGC0LIuMjNcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEtNmtZcnRRdUhaTms1Q2hBYVdMdjdJUlp6azIyV2RkaC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7Rh9GD0LHQtdC5INCv0YDQvtGB0LvQsNCyLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQntCx0YAuINCELtCS0LXQstGA0LjQutCwLicn0JzQvtC70LTQsNCy0YHRjNC60ZYg0L3QsNGB0L/RltCy0LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlLaktIZkktdWlqNmozbU5DWVoyNkxMWk1vQmJZazlyL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2I5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtGH0YPQsdC10Lkg0K/RgNC+0YHQu9Cw0LIsIDE0INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC7QmtGD0LvQsNGDLiDQodC+0L3QsNGC0LjQvdCwIOKEljU1XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUjdId1hwTGJPMXRpejNLek1nMzV0NE4zQm14N0FCT0wvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGD0LvRltC60L7QstGB0YzQutCwINCa0LDRgtC10YDQuNC90LAsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDRhNCwINC00ZbRlNC3INC80LDQttC+0YAsINCU0KLQmi3QhiwgMikg0KEu0JHQvtGA0YLQutC10LLQuNGHLiDQldGC0Y7QtCDihJY5LCDRgtCyLjE1XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xelFqc3FHcFdxV1lrZWpQWU5fVEctRTBtTUE4Y1NqLXIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LrQsNGA0LXQstC40Ycg0J3QsNGC0LDQu9GW0Y8sIDE1INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDRgNC1INC80ZbQvdC+0YAsINCU0KLQmi3QhiwgMinQni7QkdC+0YDQtNGO0LPQvtCy0LAuICcn0KPQutGA0LDRl9C90YHRjNC60LjQuSDRgNC+0LzQsNC90YEnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlyVkJWUzBXRHVmV1pDMllFQjU3dVVNTFdidzhCTG5SL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2JjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNC70Y/RgNGH0YPQuiDQhNC70ZbQt9Cw0LLQtdGC0LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4g0JXRgtGO0LQg4oSWOSwg0YLQsi4xNSwgMinQpC7QqNC+0L/QtdC9Licn0JPRg9C70Y/QvdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9tMGhmVmdyYS1WU3g2WVhoSmJwWndMUmJlMGE4QkUtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2JkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0L3QsNGB0Y7QuiDQotCw0YDQsNGBLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQny7Ql9Cw0YXQsNGA0L7Qsi4gJyfQotC+0LrQsNGC0LAt0L/RgNC10LvRjtC00ZbRjycnLCAyKSDQlS7Qk9GA0ZbQsy4gJyfQndC+0LrRgtGO0YDQvScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZ2dod3lIMkF4LUFlVnVlbGJTV3NTMG9Jb0F4U191SkQvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQntGB0LvQsNC8ICDQhNC70LjQt9Cw0LLQtdGC0LAsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQm9GO0YLQuNC5Jycg0ZbQtyDRhtC40LrQu9GDJyfQn9C+0YDQuCDRgNC+0LrRgycnLCAgICAgMikg0J0u0JvQsNCz0L7QtNGO0LMuICcn0KLQsNC90LPQviDQvNGA0ZbQuScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbXE0LVpCWVptbG5HUHpKWTFqUl9RVnIwR3o3NWFNbFgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0L3RltC80LDRiCDQhtGA0LjQvdCwLCAxNSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmS7Qk9Cw0LnQtNC9LtCh0L7QvdCw0YLQsCDQtNC+INC80LDQttC+0YAgKOKEljUwKSwg0IYg0YcuOyAyKSDQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4nJ9Cc0YPQt9C40YfQvdC40Lkg0LzQvtC80LXQvdGCJycsINGC0LIuMTYg4oSWNFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWhfS1FfV3B2bWpaRnNYRTRYVF9NZGYyM3NrNEs5R1RzL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2MwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QtdGC0YDRg9GB0Ywg0J3QsNGC0LDQu9GW0Y8sIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0JvRltGB0YIuJyfQoNC+0LzQsNC90YEnJywgICAgIDIp0JUu0JPRltC70LvQvtC6Licn0JLQsNC70YzRgS3QtdGC0Y7QtCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTzE1X0N1and0dGFGMUJ4WGdXODQ0dzZBQlVRa3VqZmIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GA0LjRidC10L/QsCDQkNC90L3QsCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jwu0KjQvNGW0YLRhi4g0JTQttCw0LfQvtCy0LAg0ZbQvdCy0LXQvdGG0ZbRjyDihJYxMywgIDIpINCeLtCU0LXQstGW0YEuJyfQqdCw0YHQu9C40LLQuNC5INC00LXQvdGMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFKS01JbHVuM1JlaEVScUthU0hwbDZTSjZleXV1cTNhVy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YDQvtC60L7Qv9GH0YPQuiDQntC70LXQutGB0LDQvdC00YDQsCwgMTcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCS0LXRgNC80LXQvdC40YcuICcn0KfQvtGA0L3QvtCx0YDQuNCy0YbRlicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRk5MN2U2cWg4U09LbFV4TW9SdEE3clNZOE5oYW5sWC0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GA0L7QutC+0L/Rh9GD0Log0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDE3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQpC7QqNC/0LjQvdC00LvQtdGALiDQodC+0L3QsNGC0LjQvdCwLNCG0IbQhiDRhy5cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFLR01DY042X0JXUGRpd3pyUkl1QTNOZHhVZUpid0kxai9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YPRh9C60L4g0KHQvtGE0ZbRjywgMTPRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC4g0JTQstC+0YDQttCw0LouINCV0YLRjtC0IDIgKDIt0Lkg0LfQvtGI0LjRgiksIDIp0JIuINCS0LXRgNC80LXQvdC40YcuICcn0KfQvtGA0L3QvtCx0YDQuNCy0YbRlicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNFdmc0Z2NEFuMkZiVl91RmpocVJFSTg3LUlmelFVYjgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNCw0LTQutC+0LLRgdGM0LrQsCDQkNC70ZbQvdCwLCAxMyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCT0YDRltCzLiDQldGC0Y7QtCDQv9Cw0Lwn0Y/RgtGWINCkLtCo0L7Qv9C10L3QsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV9hQk44SmdybUZtVmZ1VllXNHMwbGVOTll4ZlA1OVNvL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQsNC00LrQvtCy0YHRjNC60LAg0JDQu9GW0L3QsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCkLtCb0ZbRgdGCLiAnJ9Ch0YPQvNC90LjQuSDRgdGC0LXQvycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbjJtU2FQTndyVmpsY1BBb2hWaVlybzI0V3ppa3RCMGovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNC40LHQutGW0L3QsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTUg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JwuINCi0LXRgNC10YnRg9C6LiAnJ9Ck0YPQs9CwIExvY2tkb3duJyc7IDIp0Jwu0JHQvtCx0LXRgC4nJ9Ce0L/RltCy0L3RltGH0L3QsCDRgNCw0L/RgdC+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFzUFZFQjJWSXRfb0RaTTBwbUJVUTVqVW9VQk5pdlR3ZS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0YPRgdGB0YMg0JPQsNC90L3QsCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQky7QktC+0LvQu9C10L3Qs9Cw0YPQv9GCLiAnJ9Cl0LDRgNCw0LrRgtC10YDQvdCwINC/J9GU0YHQsCDRgyDRhNC+0YDQvNGWINC10YLRjtC00LAnJywgMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQldC70LXQs9GW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFFZUZpVVhfQXZSY1JNRy00aEJBM2k4YzQ1RXNaSDltL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDRg9GJ0LjQvdGB0YzQutCwINCa0YHQtdC90ZbRjywgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0JPRgNGW0LMuICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTA3MkpOd3ZFbTZDZHVBX0dlUHNBQnU1X1lrNk0wMnpIL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDRg9GJ0LjQvdGB0YzQutCwINCa0YHQtdC90ZbRjywgMTQg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDQtNC+INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFORGtfaktPNVNIYm5zYVhBVEExLVl3Z0tlNGJBbUlkbi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LLQuNC90YbQuNGG0YzQutCwINCV0LzRltC70ZbRjywgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtCy0LDRgdC90LXQstGB0YzQutC40LkuJyfQlNGD0LzQutCwJyc7IDIp0JQu0JrRgNCw0LzQtdGALiAnJ9Ci0LDQvdGG0Y7RjtGH0LjQuSDRgdC60YDQuNC/0LDQu9GMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhbGd6X291a1J4VDJrUEFGeVhvWC1RaklBMzRwSUNjbS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LLQuNGA0LjQtNGO0Log0JTQtdC90LjRgSwgMTYg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g4oSWMTIsIDIp0JMu0JPQsNC70LjQvdGW0L0uICcn0JDRgNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTQ2R0ZnSGFYTDN4SFZGWnctaHJIcnhrNDk3N2xyTmdoL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQtdC70ZbQstCw0L3QvtCy0LAg0JDQvdC90LAsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0JXQu9C10LPRltGH0L3QuNC5INC/0YDQtdC70Y7QtCcnINGB0ZYg0LzRltC90L7RgCwgMinQnC7QlNCy0L7RgNC20LDQui4nJ9CU0LbQsNC30L7QstC40Lkg0LXRgtGO0LQnJyDihJY2ICgyINC30L7RiNC40YIpXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSnVjTnRPMUQ5M2txTDh3b0pia19CSmlEamRnR3hzUTYvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2VcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC10LzQtdC90L7QsiDQhtCy0LDQvSwgMTUg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLtCU0L7Qs9CwLiAnJ9Ch0L7QvdC10YInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUwwVV9Ib3VLUlA0eTNnUFpiVkxrenVteVlEMmV6RTJEL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQtdC80LXQvdC+0LIg0IbQstCw0L0sIDE1INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QnNC+0Yhl0Ltl0YEuIEXRgtGO0LQg4oSWOCzRgtCyLjcwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX2Z3WTNya3BjSWxXamMxUnlfWXRpaHUtb3dXcDJtZ2svcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC40LzQvtC90LXQvdC60L4g0KLQsNC80ZbQu9CwLCAxMyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtCwIOKEljE5INGC0LIuNDksINCGINGH0LDRgdGC0LjQvdCwLCAyKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkgLicn0J/RltC00YHQvdGW0LbQvdC40LonJyDQtyDRhtC40LrQu9GDICcn0J/QvtGA0Lgg0YDQvtC60YMnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBtRWpnT1YyWVlaaVJJVUJwVERJSGp1ci1selJfZmx2L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2QxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvdGW0LPRg9GAINCQ0L3QvdCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCR0KXQsNCy0LDRiNGWLiAnJ9Co0YLQvtGA0LwnJywgMinQpC7QodCw0LkuINCS0LDRgNGW0LDRhtGW0ZdcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFobV94REhPWlR6VUNTNFVaSXNvN01IWjNpYmt2QUliYi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0LXRgNC90L7QstCwINCa0YHQtdC90ZbRjywgMTQg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCGLtCR0LXRgNC60L7QstC40YcuINCf0YDQtdC70Y7QtNGW0Y8g4oSWMTAsIDIp0JUu0JPRgNGW0LMuICcn0J/QvtGF0ZbQtCDQs9C90L7QvNGW0LInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWpKb1k4a2R6ZVVLbDV6VTVnTGU1ZHU4bGhHYWxCSVlCL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2QzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQutCw0YfRg9C6INCS0ZbQutGC0L7RgNGW0Y8sICAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQpC4g0JzQtdC90LTQtdC70YzRgdC+0L0uICAnJ9Cf0ZbRgdC90Y8g0LHQtdC3INGB0LvRltCyJycsIDIpINCSLiDQk9GW0LvQu9C+0LogICcn0JLQsNC70YzRgS3QtdGC0Y7QtCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xS2k1Qy10YW5qeHkyTXk3a1o2a1dnWUVXTUFPRVlGYzkvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotGA0LDRh9GD0Log0J7Qu9C10LrRgdCw0L3QtNGALCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQny4g0JfQsNGF0LDRgNC+0LIuICAnJ9Cg0L7QvdC00L4t0LPQsNC70L7QvycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOERsTjFiNEsxc1hyZHZ2YjNBOHBIbUpGdlh3YnpZcmQvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotGA0LDRh9GD0Log0J7Qu9C10LrRgdCw0L3QtNGALCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JQu0KTRltC70YzQtC4gJyfQndC+0LrRgtGO0YDQvScnIOKEljVcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMM0p4b1dQcjZqeE01UTNweE8wQkJYMlU0VWlGbkVfSC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0L3RjtC6INCe0LvQtdC60YHQsNC90LTRgCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg4oSWMjMsINGE0LAg0LzQsNC20L7RgCwg0IbRhy47IDIp0Jku0KEu0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwIOKEljIzLCDQlNCi0Jot0IZcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpMmZ1T1BWTXFRZklOQ1QyWkpiVEpYY2N6NUFmYl9oNS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCl0LLQvtGB0YLQvtCy0LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0JvRltGB0YIu0K7QvdCw0YbRjNC60LjQuSDQtdGC0Y7QtCDihJYyLCAyKdCeLtCa0L7Qt9Cw0YDQtdC90LrQvi3QkC7QmtC+0YEt0JDQvdCw0YLQvtC70YzRgdGM0LrQuNC5LiAnJ9Ce0Lkg0YLQuCwg0LTRltCy0YfQuNC90L4sINC3INCz0L7RgNGW0YXQsCDQt9C10YDQvdGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHbnNBWnN1Z2RxQkxMNmhLQ0dsbGVBOFpLX3FUMThGai9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCl0YDQsNC80LXQvdC60L7QstCwINCQ0L3QsNGB0YLQsNGB0ZbRjywgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQvtGA0L7QstGW0YbQuNC9Licn0KDRg9GB0LDQu9C+0L3RjNC60LAnJywgMinQnC7QodC60L7RgNC40LouJyfQltCw0YDRgtGW0LLQu9C40LLQsCDQvyfRlNGB0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUMwdVNwZVN5YmZkYUlYWWxtWXdNclo1SlVzZGI3UmI5L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXQtdC70LzQsNC9INCS0ZbQvtC70LXRgtCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCj0JPRltC70LvQvtC6Licn0J/Rg9GA0YXQsNGO0YfQuCDQsiDRhdC80LDRgNC60LDRhScnLCAyKdCSLtCl0L7QtNC+0YguJyfQp9C10YDQstC+0L3QsCDRiNCw0L/QvtGH0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xenV5RUd0M2N2WjNzVmpLbkEzQ0pUWlZMMnZFVmdYV3kvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZGFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQqNC40LHQsNC90L7QstCwINCS0LDRgNCy0LDRgNCwLCAxMyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQu0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0g4oSWMiwg0YLQsi45XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcjFqVVJGS0M1NTV3S01SN0NsU3ltdFRHX0RXd3ZndlovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZGJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQqNC40LHQsNC90L7QstCwINCS0LDRgNCy0LDRgNCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0KEu0JHQvtGA0YLQutC10LLQuNGHLtCV0YLRjtC0IOKEljcsINGC0LIuMjlcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFLVFVZUDNnV240UFRUR0cxWV9fRktySTFzNUdrWEJvTy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNkY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCQ0L3RgtC+0L3RjtC6INCc0LDRgNGW0Y8sIDIxINGA0ZbQulwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jwu0JzQtdGC0L3QtdGALiAnJ9CU0LLRliDQutCw0LfQutC4JycsIDIp0IYu0KjQsNC80L4uICcn0KLQvtC60LDRgtCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUFGVkVHM00zZ1UxeUlhSWM1WW5jUmhVSUFsd2Y4QVZqL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdC+0LHRgNGW0YjQvtCy0LAg0IbQvdC10YHQsCwgMTYg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEpINCZLtCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDRgNC1INC80LDQttC+0YAsINCGINGHLjsgICAyKSDQoS7Qn9GA0L7QutC+0YQn0ZTQsi4gJyfQodCw0YDQutCw0LfQvCcnLNGC0LIuMTcg4oSWMVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOUpIdUVTUVZITTZicHVwUHN2ZFVuNGVsUVJiZ08yM2UvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNkZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0Y/QvdC+0LLQsCDQlNCw0YDQuNC90LAsIDE2INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0sINGC0LIuMjfihJYyLCAgICAgIDIp0JQu0JfQsNC00L7RgC4g0JXRgtGO0LQg0LTQviDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEtQ0JjZUhFYktnZTMyWDZORDFGX3pGVlEtMlJiNDRZdy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2RmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQvtC30L3RjtC6INCQ0L3Qs9C10LvRltC90LAsIDE3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K8u0KHRgtC10L/QvtCy0LjQuS4g0J/RgNC10LvRjtC00ZbRjywgICAgICAgMinQry7QodGW0LHQtdC70ZbRg9GBLiDQldGC0Y7QtFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeTdRSHRHdWtKb29jUzBCX2Rpd3pKdS1WUVk4V0I5b3AvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPQuiDQodC+0YTRltGPLCAxNiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuICcn0JPRg9C80L7RgNC10YHQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtQUVRfdVR4YUlsYWxxeF9hYXBTcGlkMlNaZ1A3anE2L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GD0Log0KHQvtGE0ZbRjywgMTYg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCcLiDQm9C40YHQtdC90LrQvi4gJyfQltGD0YDQsdCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU51aGRsT3FYZVByOGV4ZE1wMGdYVEFsNkZma2drRHVOL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GD0LvQvtCy0LAg0JDQvdCz0LXQu9GW0L3QsCwgMTgg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQuINCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9INGC0LIuNDgg4oSWMSwgICAgIDIp0J8uINCh0LDQvdC60LDQvS4g0KLQvtC60LDRgtCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6bmg5UlUtcENwM3JIeHF5VnVQNDRENENrWW01OUdqTi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2UzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTQsNC90L7QstGB0YzQutCwINCe0LvRjNCz0LAsIDE3INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JHQsNGA0LLRltC90YHRjNC60LjQuSDQn9GA0LXQu9GO0LTRltGPIOKEljQgJyfQpdC+0YDQsNC7JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVlMZDJGUDVJeERuZUljT01XZ1dUZ0NmdWJCT1lKUVByL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNCw0L3QvtCy0YHRjNC60LAg0J7Qu9GM0LPQsCwgMTcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0JvRj9C00L7QsiDQn9GA0LXQu9GO0LTRltGPLCDRgtCyLjM5IOKEljRcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXdvZ1ZadjhXVnlRdExGc29wd2FSQngxUlFPeGx6Q0ZJL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNGD0LTQvdC40Log0JTQsNGAJ9GPLCAxNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JHQsNGA0LLRltC90YHRjNC60LjQuS4nJ9Cb0LjRgdGC0L7QuiDQtyDQsNC70YzQsdC+0LzQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsX0hFM3IwTzV1c2pPSGNOdU1wTkRZZ19nNmQyUzM1dC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2U2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRg9C00L3QuNC6INCU0LDRgCfRjywgMTcg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLtCU0LXQsdGO0YHRgdGWLiAnJyDQoNC+0LzQsNC90YLQuNGH0L3QuNC5INCy0LDQu9GM0YEnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcUxncTlBZkQ2WVhDeVBReUZlamx5WjhCT051U29OXzQvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YDRjtC60L7QstCwINCc0LDRgNGW0Y8sIDE1INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4gJyfQn9GA0LjQvNGF0Lgg0LzQvtGA0Y8nJywgMinQpC7QqNC+0L/QtdC9LtCV0YLRjtC0INGC0LIuMTAg4oSWNFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLWNibzNCWjFFUE5ZbTZOUzFlQ01tXzJIVHpISjdCZWsvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YPQu9GW0Ygg0J/QvtC70ZbQvdCwLCAxNSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlS7Qk9GA0ZbQsy4nJ9Ca0L7Qu9C40YHQutC+0LLQsCcnLCAyKdCGLtCf0LDQtNC10YDQtdCy0YHRjNC60LjQuS4gJyfQodC60LXRgNGG0LjQvdC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5hbVZWRmZBZFJmYUZ1QTF1S2psdDlRSVdnTWlTQnk2L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNGD0LfQuNGH0LXQvdC60L4g0JzQsNGA0ZbRjywgMTkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwIOKEljMxLCAx0YcuOyAyKdCkLtCo0L7Qv9C10L0u0JXRgtGO0LQs0YLQsi4xMCDihJY1XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPLWFoZllKTmJGZjVmU093U1NwZmZJV1dwbmlCdWJLOC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qu9GW0LnQvdC40Log0J7Qu9C10LrRgdCw0L3QtNGALCAxOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCWLtCR0ZbQt9C1LdCSLtCT0L7RgNC+0LLRltGGLiDQktCw0YDRltCw0YbRltGXINC90LAg0YLQtdC80YMg0Lcg0L7Qv9C10YDQuCAnJ9Ca0LDRgNC80LXQvScnLCAyKdCbLtCg0LXQstGD0YbRjNC60LjQuS4g0J/RgNC10LvRjtC00ZbRjyDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTNKeWxQZERXZ1Z6NlFTSFJHVkp0N0ZoZGFSZWxDSFNEL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80LjQuiDQkNC90L3QsCwgMTcg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiDQldGC0Y7QtC3QutCw0YDRgtC40L3QsCDRgtCyLjMzIOKEljUsINGB0L7Qu9GMINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWs3b2tCdXlNc0ZhUnQ0R3d3WFVTZ1lDaDVEZFk2TU45L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80LjQuiDQkNC90L3QsCwgMTcg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiDQn9GA0LXQu9GO0LTRltGPLCDRgtCyLiAzMiDihJYxMiwg0YHQvtC70Ywg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTFlISFZLdVVJaXNhZEUyZm16d1l6bXdzUy1Vd1Z4VlIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0ZbRhdC+0L3QvtC6INCE0LPQvtGALCAxNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4nJ9Ch0LrQtdC70ZYg0YPRidC10LvQuNC90Lgg0KPRhy3QmtC+0YgnJyDQtyDRgdGO0ZfRgtC4ICcn0JrRgNC40LzRgdGM0LrRliDQvdCw0YDQuNGB0LgnJy7RgtCyLjgsIDIp0KQu0JvRltGB0YIu0KLRgNCw0L3RgdGG0LXQvdC00LXQvdGC0L3QuNC5INC10YLRjtC0IOKEljEwLCDRhNCwINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhuM1RmTkg2R0ZCQlFvMXZaWk5uUlJWcWJ0akdHdWcyL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNCw0YnQtdCy0YHRjNC60LjQuSDQotCw0YDQsNGBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4gJyfQldGC0Y7QtC3QutCw0YDRgtC40L3QsCcnLCDRgtCyLjMzICg1KVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZXFUUFhsX1JoWlFPZFZyLWxoVVFtbE9NOGNvQzZGb0svcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LDRidC10LLRgdGM0LrQuNC5INCi0LDRgNCw0YFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLtCg0LXQstGD0YbRjNC60LjQuS4g0J/RgNC10LvRjtC00ZbRjywg0YLQsi40ICgyKVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLV9ib01ub1luazc0eER6UXk2UWxDcVZ4SVAzajRzSHgvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXRgdC40Log0J3QsNC30LDRgNGW0LksIDE2INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLicnTHlyaWNhIE5vdmEnJyzRgtCyLjU5IOKEljMsNDsgMinQpC7Qm9GW0YHRgi7QotGA0LDQvdGB0YbQtdC90LTQtdC90YLQvdC40Lkg0LXRgtGO0LQg4oSWOCAnJ9CU0LjQutC1INC/0L7Qu9GO0LLQsNC90L3RjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjMHNqNEFNdUR4SEFwbUdUOVdTaG1qSkhiRUhSekpkQy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2YxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0K7Qt9C70L7QstCwINCb0Y7QsdC+0LIsIDE3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKSDQmi7QlNC10LHRjtGB0YHRli4gJyfQkNGA0LDQsdC10YHQutCwJyfihJYxLCAyKSDQmS7QkdGA0LDQvNGBLicn0IbQvdGC0LXRgNC80LXRhtGG0L4nJywg0YLQsi4xMTcg4oSWMlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTEFESW5XcG0tamhjMUZiUnVkZ3F3Q01HdHpYUURCTVMvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCX0LDRlNGG0Ywg0JzQsNGA0LjQvdCwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KHQutC+0YDQuNC6Licn0JLQsNC70YzRgScnINC3INCf0LDRgNGC0LjRgtC4IOKEljVcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFtbFp6blpib3hoenhFQlRKNGdVbUV0RTBKWWdRZ2RoL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQl9Cw0ZTRhtGMINCc0LDRgNC40L3QsFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4gJyfQlNGD0LzQutCwJycsINGC0LIuNTlcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBhVXAtYXFRZENxQnQzNTY2MnlOd0praGFOT0FYTl9oL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C+0LPQstC40L3QvtCy0YHRjNC60LjQuSDQhNCy0LPQtdC90ZbQuVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JQu0J/RgNC40YLRgdC60LXRgC4gJyfQkdC70Y7QtyDQn9GW0LrQsNGB0YHQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFlMl80aXNRemx1Y0xSN2tCWlgtQ0h4Z3FZckJ4SlJady9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQvtCz0LLQuNC90L7QstGB0YzQutC40Lkg0ITQstCz0LXQvdGW0LlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCf0YDQvtC60L7RhCfRlNCyLiDQodC+0L3QsNGC0LAg4oSWMywg0YLQsi4yOFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRExoVDlZd1I1STljWnh6ZE5vZTIyRndTOGpwSTRZVnMvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LjQutC40YLRjtC6INCQ0L3QsNGB0YLQsNGB0ZbRj1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jwu0KDQsNC60L7Qsi4gJyfQmtC+0L3RhtC10YDRgtC90LjQuSDQtdGC0Y7QtCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDOGE2VFBSTTJjYVFmVE9BNnpHSHZ1SWpHU29MN0MxYi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNC60LjRgtGO0Log0JDQvdCw0YHRgtCw0YHRltGPXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0Jku0KEu0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINC00L4g0LzRltC90L7RgCwg0JTQotCaIC3QhtCGXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF3cnFkYl9rZTJLY2hfQ2ZCY21OUkgyTTU4MFB0WlFBMS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J3QsNC30LDRgNC10L3QutC+INCa0YHQtdC90ZbRj1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0JLQvtC70LrQvtCy0LAuICcn0J3QsNGB0YLRgNC+0ZcnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xT0E4cnZONnd3ZHBPVnkxRFZEdDF6cS00cGtlaVNyM3gvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCd0LDQt9Cw0YDQtdC90LrQviDQmtGB0LXQvdGW0Y9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtCR0LDRhS4g0JDQu9C10LzQsNC90LTQsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMHF0VVJXZDNhYXNjcTJnd05IeE0tRkVUeVFITEI4dEQvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LXRgNC+0LIg0JLQu9Cw0LTQuNGB0LvQsNCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLiDQkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0LTQviDQvNGW0L3QvtGALCDQlNCi0Jot0IbQhiwgMinQpC7QqNC+0L/QtdC9LiDQkdCw0LvQsNC00LAg4oSWMSwg0YLQsi4yM1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYXRuNXlpRWNYZ2pWbkZLZk00UVdBVVM0el9VVlRKX3EvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0LDRgNCw0YHQvtCyINCS0LvQsNC00LjRgdC70LDQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4gJyfQldGC0Y7QtC3QutCw0YDRgtC40L3QsCcnLCDRgtCyLjM5IOKEljksIDIp0KQu0KjQvtC/0LXQvS4gJyfQkdCw0LvQsNC00LAnJywg0YLQsi4yMyDihJYxXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5TlpfdEV5ME8yblJYakNsdGRfdmRXTDNTTXVCTmFDTS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ZjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNC10LHQtdC90Y7QuiDQky7Qni5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0J/RgNC+0LrQvtGE0YzQtdCyLiDQodC+0L3QsNGC0LAg4oSWMizQhiDRhy47MikgICDQpC7Qm9GW0YHRgi4nJ9CV0YLRjtC0INC30LAg0LrQsNC/0YDQuNGB0LDQvNC4INCf0LDQs9Cw0L3RltC90ZYnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU2hVWUlZUDluZ29RWmVobUNielA1RjNiSkFLRmgzc04vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QvdC00YDQsNGC0Y7QuiDQnC7Qni4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCgLtCo0YPQvNCw0L0uICcn0KDQvtC80LDQvdGBJycsINGC0LIuMjgsIDIp0JIu0JrQvtGB0LXQvdC60L4uICcn0JrRg9GA0LDQvdGC0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRk9iNDFQc21xV080bnlPRGtPZG9NVDRTc1BwNEhYOXgvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCe0L/QsNC90LDRgdC10L3QutC+INCQLtCeLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuINCf0YDQtdC70Y7QtNGW0Y8g0YHQvtC70Ywg0LTRltGU0Lcg0LzRltC90L7RgCwgMinQki7QpNGW0LvRltC/0LXQvdC60L4uINCi0L7QutCw0YLQsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVkxYRUx1WmNJNlFpMmdybHdhVS11RXdsTHYxZVNFa1gvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfVxuXTtcblxubGV0IGNvbmNlcnRtYXN0ZXJzID0gW1xuICAgIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjEzZmZhYXNkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQtdCy0LXQu9GM0L7QstCwINCE0LvRltC30LDQstC10YLQsCwgMjAg0YDQvtC60ZbQsi5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCfLtCn0LDQudC60L7QstGB0YzQutC40LkuINCQ0YDRltGPINCb0LXQvdGB0YzQutC+0LPQviwgMikg0JMu0KXQsNC30LDQvdC+0LLQsC4gXFxcIiDQo9C30LTQvtCy0LYg0LLRg9C70LjRhtGWINGF0L7QtNGDINGPXFxcIlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvQ1dYMGVSUFRDWVlcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjEzZmZhYXNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQl9Cw0LrQsNC70Y7QttC90LAg0J4u0JFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCTLtCS0LXQvdGP0LLRgdGM0LrQuNC5LiDQmtC+0L3RhtC10YDRgtC90LjQuSDQv9C+0LvQvtC90LXQtyDRgNC1INC80LDQttC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3MzY2xYTFQzNGhZXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmYWFzMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCX0LDQutCw0LvRjtC20L3QsCDQni7QkVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JYu0JzQsNGB0L3QtS5cXFwi0KDQvtC30LTRg9C8XFxcIlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvZ0R5VUNiYW5lQmtcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjEzZmZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0LHQt9Cw0YAg0J3RltC60L7Qu9GMLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC7QmtGA0LXQudGB0LvQtdGALicn0JzQsNC70LXQvdGM0LrQuNC5INCS0ZbQtNC10L3RgdGM0LrQuNC5INC80LDRgNGIJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWt1U1IwVm1PTWlxSWo5WVIwdTNsdk96cTRKRzVhTFk4L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0LHQt9Cw0YAg0J3RltC60L7Qu9GMLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS7QldC70YzQs9Cw0YAuJyfQodCw0LvRjtGCINC60L7RhdCw0L3QvdGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFnSTdYbGpfU0xRcWwyUGk2RVRBaFNBWlRLTE1qa0JuL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LHQviDQndC10YHRgtC+0YAsIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0YDQvtC70LsuICcn0J/QvtC70YzQutCwINCy0ZbRgdC70Y7Rh9C60LAnJywgMinQki7QptC40LHRltC9KNC/0LXRgNC10LrQuy7QkC7QptCw0YDQtdC90LrQvikuICcn0JvQuNGB0YLQvtC6INC3INCw0LvRjNCx0L7QvNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTRQUjVldnJVSVJhUzFWRlV2dTBzNjlITUg3eFMzV2lJL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCE0LLQs9C10L3RltGPLCA5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy7QkdC10YLRhdC+0LLQtdC9LiAnJ9CR0LDQsdCw0LonJyzQvtCx0YAuINCQLiDQqNGD0LLQsNC70L7QstCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpcjJhUktjbzgyTnd6UjJGUUg2QXBaVkhRWllyMEw3eS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQhNCy0LPQtdC90ZbRjywgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0JHQtdGGLiAnJ9Cf0L7QtNGW0LvRjNGB0YzQutGWINCy0LjQutGA0YPRgtCw0YHQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFxSlE5QUlXajQ4cEpUTUJXZm8zaDd6NkpsS0pIOTgwbi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRgtCw0YDRhtC10LIg0JHQtdC90LbQsNC80ZbQvSwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCWLtCc0LDRgdGB0L3QtS4gJyfQoNC+0LfQtNGD0LwnJzsgMinQlS7QoNC40LHQutGW0L0uICcn0KTQvtGA0LzRg9C70LAgMScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMNmJ4RHlzTjB5MkdEU05uUlhxR0VGYkhSN2VTLWl4cy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQu9Cw0YHRjtC6INCd0LDQt9Cw0YAsIDE4INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCU0L7QvdC+0YLRli4g0JDRgNGW0Y8nJ08gZGVsIG1pbyBhbWF0byBiZW4nJywyKdCVLtCT0YDRltCzLNCTLtClLiDQkNC90LTQtdGA0YHQtdC9ICcnSmVnIGVsc2tlciBkaWcnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMl9NRlBVMzlidEpRS3ZTdDJSWXpqaVUwSGFZc2E0T2cvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCU0Y/Rh9C10Log0IbQvtCw0L3QvdCwLCAxN9GA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCQLtCc0L7RhtCw0YDRgi7QkNGA0ZbRjycnUmlkZW50ZSBsYSBjYWxtYScnLCAyKdCkLtCd0LDQtNC10L3QtdC90LrQviwg0IYu0KTRgNCw0L3QutC+LtCg0L7QvNCw0L3RgSAnJ9Cn0L7Qs9C+INGP0LLQu9GP0ZTRiNGB0Y8g0LzQtdC90ZYg0YMg0YHQvdGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVRYlFLYldpdkNiLWdPUWtjY0lDTDVBUFFqZ1dsZTl3L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCy0LDRiNCwINCv0L3QsCwgMTYg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QmtCy0LDQvdGGLiDQodC+0L3QsNGC0LAg0YDQtSDQvNCw0LbQvtGALCDQhi3QhtCGINGHLjsgMinQki7Qn9C+0L/Qvy4gJyfQoNGD0YHRgdC60LjQuSDQstC10YfQtdGAJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9wTDQxbUxIMTBCbnIxZU15ek9FeHN3RkpvVFpfOGNTL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0LvQvtC00ZbQuSDQkNC90YLQvtC9LCAxOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiDQoNC+0LzQsNC90YEnJ9CT0L7RgNC90LjQvNC4INGC0LjRhdC+INC70LXRgtC10LvQsCDQtNGD0YjQsCDQvdC10LHQtdGB0LDQvNC4JycsIDIp0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuICcn0JXQu9C10LPRltGPJycs0YLQsi4z4oSWMSwg0L7QsdGA0L7QsdC60LAg0LTQu9GPINCy0ZbQvtC70L7QvdGH0LXQu9GWINGC0LAg0YQt0L3QvlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbFFJekRPaVpwLUVkWGx5MTBTVm00ZGlPajVXQ1NrM1ovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QvdGO0YjQtdC6INCh0L7RhNGW0Y8sIDIxINGA0ZbQulwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0KLQsNC60YLQsNC60ZbRiNCy0ZbQu9GWLiDQodC+0L3QsNGC0LAg0LTQu9GPINGE0LvQtdC50YLQuCDRliDRhNC+0YDRgtC10L/RltCw0L3Qvi5cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUhYRS1XYmxVMC1IeXdnVnpDdW5RbmlRVUNVTlhHbE5OL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0L3RjtGI0LXQuiDQodC+0YTRltGPLCAyMSDRgNGW0LogXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC7QmtC+0LzQu9C10LIuICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNHE3OFhLcGRGZzY2VlNXa0FacTBWZVJ1S2FUY0pVcHUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YfQtdC70ZbQvdGG0LXQstCwINCQ0LTRgNGW0LDQvdCwLCAxNSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCc0L7RhtCw0YDRgi4g0JDRgNGW0Y8g0JHQu9C+0L3QtNGF0LXQvSDQtyDQvtC/0LXRgNC4JyfQktC40LrRgNCw0LTQtdC90L3RjyDRltC3INCh0LXRgNCw0LvRjycnLCAyKdCgLtCT0LvRltGU0YAuJyfQkiDQv9C+0YDRi9Cy0LUg0L3QtdC20L3QvtGB0YLQuCDRgdC10YDQtNC10YfQvdC+0LknJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN21SVnhWMDZ2NU12Nl9QM0MxODNvTWdPTi1SX3UtcU8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXRgdC40Log0J3QsNC30LDRgNGW0LksIDE2INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCU0LYu0J/Rg9GH0YfRltC90ZYuINCQ0YDRltGPINCi0L7RgdC60Lg7IDIp0Jwu0LTQtSDQpNCw0LvRjNGPLicn0KXQvtGC0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQkpOc1RwNFdEeFpiQWRBbmpNTFAzaGJENjNUMmVJd1kvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCv0YDQvtGI0LXQvdC60L4g0JLQsNC70LXRgNGW0Y8sIDE5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0KHRgtC10YbQtdC90LrQvi4gJyfQodC+0YLQvtGP0LvQsCDRjyDRliDRgdC70YPRhdCw0LvQsCDQstC10YHQvdGDJyc7IDIp0JIu0JLQu9Cw0YHQvtCyLiDQodC60LXRgNGG0L4g0LTQu9GPINC00L7QvNGA0Lgg0YLQsCDRhNC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU91RGxhY0RiM2k5NHhOeGtvd2stanNOa3R4dVFLNzFML3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0LfQsNC6INCG0YDQuNC90LBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCELtCR0L7Qt9C30LAuJyfQlNC40YLRj9GH0ZYg0LzRgNGW0ZcnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUHNveU9JcjE3T0N5Tl9HaFJVX3E3SXBTNEhXd0hXVUIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7Qt9Cw0Log0IbRgNC40L3QsFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiJ9Cd0ZbRhyDRj9C60LAg0LzRltGB0Y/Rh9C90LAnJywg0L7QsdGALiDQri7QntGB0YLRgNC+0LLRgdGM0LrQvtCz0L4gXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUSktRRkVtM2Ezd3ppWXZJM1FmaWhHeHpWMlU1UUgybi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDEwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNC60LjRgtGO0Log0JDQvdCw0YHRgtCw0YHRltGPIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QkdCw0LrQu9Cw0L3QvtCyLiAnJ9Ca0L7QvdGG0LXRgNGC0ZbQvdC+JycsICAgICAgMinQly7QkdCw0LPRltGA0L7Qsi4gJyfQoNC+0LzQsNC90YEnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xajhfbXZaRUdUZ1lJMExGR1dGb0xiUUFnQ0hwSTVDMFovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQsifRjtC6INCS0LvQsNGB0YLQsFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QkC4g0JzQvtGG0LDRgNGCLiDQmtC+0L3RhtC10YDRgiDQtNC70Y8g0YTQsNCz0L7RgtCwINC3INC+0YDQutC10YHRgtGA0L7QvCDRgdGWINCx0LXQvNC+0LvRjCDQvNCw0LbQvtGALCDQhtGHLjsgMinQkC7QotCw0L3RgdC80LDQvS7QodC+0L3QsNGC0LjQvdCwINC00LvRjyDRhNCw0LPQvtGC0LAg0ZYg0YTQvtGA0YLQtdC/0ZbQsNC90L4s0IbQhtCG0YcuXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEzMGFaTzFueFY0RThIWDdoeFdhTnZWVDRiZmdraHg0TS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDEyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNGB0Y7QuiDQrtC70ZbRj1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQky7QpNC+0YDQtS4gJyfQn9GA0L7QsdGD0LTQttC10L3QvdGPJycsIDIpINCRLtCR0LDRgNGC0L7Qui4gJyfQqNGW0YHRgtGMINGA0YPQvNGD0L3RgdGM0LrQuNGFINGC0LDQvdGG0ZbQsicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvZHMzdHZVRFhaZG8xeWVkSVZYWWNjOU1uNzdiamgyNS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDEzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3QvtCy0LAg0KIu0JIuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS7QodC10LLQtdGA0L0uICcn0J/QvtC70YzRgdGM0LrQuNC5INGC0LDQvdC10YbRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4WHR2T1NBdW52NTZSZkF4Z1YxcTdtNGlLYTA5c1dIMS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3QvtCy0LAg0KIu0JIuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QotCw0LzQsNGA0LjQvSAnJ9Ch0YLQsNGA0L7QstC40L3QvdC40Lkg0LPQvtCx0LXQu9C10L0nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNDl2bE0wN0dkOFM5Q3o0dERaMkt5S2tndUp6eUIxdUIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LDRh9C40Log0J4u0JAuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCgLtCT0LvRltGU0YAuJyfQoNC+0LzQsNC90YEnJywgMinQni7QptC40LPQsNC90LrQvtCyLicn0IbQvdGC0YDQvtC00YPQutGG0ZbRjyDRgtCwINCn0LDRgNC00LDRiCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOZ3M4NXFwRU9ERXY2N2E4LWRhSnhab0g2S283U1VXay9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNC40YbRltCyINCeLtCcLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC4g0JrRgNC10LnRgdC70LXRgC4nJ9Cc0LDQu9C10L3RjNC60LjQuSDQstGW0LTQtdC90YHRjNC60LjQuSDQvNCw0YDRiCcnLCAyKdCbLiDQoNC10LLRg9GG0YzQutC40LkuICcn0IbQvdGC0LXRgNC80LXRhtC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5Ya3liUFpIUE9XV1V6QkVEX0tLZUdGM2tPMkVjYWJqL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGW0YDRh9Cw0L3QvtCy0LAg0IYu0JIuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QktGW0LTQvNC+0L3RgtC1LicnUGFyIHppbG8gdW4gcmFpYm8gcGFzYWt1JycsIDIp0JPRg9Cx0LDRgNC10L3QutC+INCSLiDQmtC+0L3RhtC10YDRgiDQtNC70Y8g0YTQu9C10LnRgtC4INC3INC60LDQvNC10YDQvdC40Lwg0L7RgNC60LXRgdGC0YDQvtC8LNGC0LIuMTBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpwTWpDYXVVcGJKZHVmV1hmYjVPZm03UDlzQVlqLWlQL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MThcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC10LrRg9GFINCeLtCSLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQhi7QktC40LzQtdGALiAnJ9CT0YPRhtGD0LvRjNGB0YzQutCwINGA0LDQv9GB0L7QtNGW0Y8nJywgMinQo9C60YAu0L3QsNGALiDRgtCw0L3QtdGG0Ywg0LIg0L7QsdGALtCSLtCh0L7Qu9C+0L3RgdGM0LrQvtCz0L4gJyfQktC10YfQvtGA0L3QuNGG0ZYnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZGZQeDE1V1FLSGZQVnRNUFdXQUF3OXN5OVVZdzVTMWUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0L7QsdC+0LTQsCDQmy4g0JwuLCBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0JHQtdGC0YXQvtCy0LXQvSwg0KIu0KjQtdCy0YfQtdC90LrQvi4gJyfQl9C+0YDQtSDQvNC+0Y8g0LLQtdGH0ZbRgNC90Y/RjycnLCAyKdCb0LXQvNC60ZbQstGB0YzQutCwINC90LDRgNC+0LTQvdCwINC/0ZbRgdC90Y8gJyfQkiDRgtC10LzQvdGDINC90ZbRh9C60YMg0YPQsdC+0YfQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwZ1pvNTNYNkVoSHdFTXBYS3dwQjJ0VzJfaXJWbzI5MC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDFhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvRjtCx0YfQtdC90LrQviDQnC7QoS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS7QkdCw0YUuINCa0L7QvdGG0LXRgNGCINC00LvRjyDRgdC60YDQuNC/0LrQuCDQtyDQvtGA0LrQtdGB0YLRgNC+0Lwg0LvRjyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF3Zmh1aXRYTDJNd3RZZHJVSElrVmRNeFFacGh0NmpObC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDFiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvRjtCx0YfQtdC90LrQviDQnC7QoS5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCdLtCh0YLQtdGG0Y7QvS4gICAgJyfQkdC+0LvQtdGA0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYkhXVXJpcUt2U1RuVm5JbTQ3bW1MZWRTaTBOaC1YUXMvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LjRhdCw0LnQu9C+0LLQsCDQnC7Qki5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLtCh0L7Qu9GC0LDQvS4gJyfQnNC10LvQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFb0VTMm1UcldDeTlDUWNxZDlxdTM2NloxdHo2SXBSUS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmYWFzZGFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC40YXQsNC50LvQvtCy0LAg0Jwu0JIuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS4g0KLQsNC80LDRgNC40L0uIFxcXCLQodGC0LDRgNC+0LLQuNC90L3QuNC5INCz0L7QsdC10LvQtdC9XFxcIlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdTR4SjB2SzZkZVIyWEp3R0xYRmg2c0JSZVB2eEdVTnIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0Y/Qu9GM0LrRltC90LAg0J0u0J4uXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlNC2LtCS0ZbQu9GM0Y/QvNGBLiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlNX0VGMFZ4OS13NERTNkhSX1pIUkotbXFKd0EtRkdwL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNGP0LvRjNC60ZbQvdCwINCdLtCeLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0KbQuNC90YbQsNC00LfQtS4gJyfQodCw0YfRltC00LDQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE1OWRqU3J6STFBdkw1cGtDbDB2bllEc0hRTFRuZDVsby9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDFmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J3RltC60ZbRgtGW0L3QsCDQhi7QoC5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCRLtCb0Y/RgtC+0YjQuNC90YHRjNC60LjQuS4gJyfQnNC10LvQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5UXlPMFE2NVd2SG52WTI4eEJsM3NoVy1IdGR1NDIzOS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDIwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J3RltC60ZbRgtGW0L3QsCDQhi7QoC5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCh0LsuINCQLtCcJ9GP0YHRgtC60ZbQstGB0YzQutC+0LPQviwg0LzRg9C3LtCSLtCS0LXRgNC80LXQvdC40YfQsCAnJ9Cf0ZbQtNC60YDRg9GH0YMg0Y8g0YfQvtGA0L3RltGXINCy0YPRgdCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXVfN1VRRHVPQ0RxSkpqMXE1bGhFRlBFb3hkX1BVM2pZL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0ZTQvdC60L4g0KIu0K4uIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JYu0JzQsNGB0YHQvdC1LiAnJ9Cg0L7Qt9C00YPQvCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFKbEFvWS1BQUpFeUktcklSREN1N1VueXd4dnJXRUJCdy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDIyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNGU0L3QutC+INCiLtCuLiwgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi7Qp9GD0L/QsNC6LiAnJ9CS0LXRgdC90Y/QvdC40Lkg0YDQvtC6LdC9LdGA0L7Qu9C7JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVQ1LUlVTlV1UW1VdkZWV1lsWTZTQVZlai1USXFtYnJxL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LLRh9GD0Log0KIu0IYuICBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JTQti7QktGW0LvRjNGP0LzRgSwg0LDRgNCw0L3Qti7QkC7QotC10L/Qu9C40YbRjNC60L7Rly4nJ9Ca0L7Qu9C40YHQutC+0LLQsCDQtNC70Y8g0LDQvdCz0LXQu9CwJycsIDIp0JIu0JrQvtC30LvQvtCyLNC/0LXRgNC10LrQuy4g0LTQu9GPINC00L7QvNGA0Lgg0IQu0JbRg9C60L7QstCwLiAnJ9CfJ9GU0YHQsCDRgyDRgdGC0LjQu9GWINGE0LvQsNC80LXQvdC60L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN1RnaXVvZ2l2c2gzeHdqRlhpNWExb1JVLW9ra1A5NjAvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0IYu0K4uXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC4g0KjRg9C80LDQutC+0LLQsC4gJyfQotCw0L3Qs9C+INCV0LLRltGC0LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMUNremlSdllKdm5pVzdjaWE3eTlFa0k4NXNuTEp3N3gvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0IYu0K4uXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki7Qk9C+0LzQvtC70Y/QutCwLiAnJ9CG0YHQv9Cw0L3RgdGM0LrQuNC5INGC0LDQvdC10YbRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpT1VKTjIxQnZEZHpzTDBvUDBhdHZzRW1vcWdVZHBZQy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNC+0LvRj9C90ZbQvdC+0LLQsCDQoS7QnC4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCU0LLQvtGA0LbQsNC6LiDQmtC+0L3RhtC10YDRgiDQtNC70Y8g0YHQutGA0LjQv9C60Lgg0LvRjyDQvNGW0L3QvtGALCDQhiDRhy47IDIp0Jwu0KHQutC+0YDQuNC6LiAnJ9Ca0LDRgNC/0LDRgtGB0YzQutCwINGA0LDQv9GB0L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdGxzck1rUXAwVVZxMHl3dEowMUxwSEtQc21GT3BIbk8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0YLQsNGA0LjQvdGB0YzQutCwINCcLtCQLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KjQuNC90LrQsNGA0LXQvdC60L4u0JLQsNGA0ZbQsNGG0ZbRlzsgMinQlS7QkdC+0YbRhtCwLicn0JDRgNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTHNXelZfTHQxejBnR1hVTFNlZ291Y2tZOVJacm9HN2gvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0YDQtdC/0LDQuiDQnC7Qhi5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JYu0JTQtdC80LXRgNGB0YHQvNCw0L0uINCk0LDQvdGC0LDQt9GW0Y8sIDIp0J8u0IbRgtGD0YDRgNCw0LvRjNC00LUuICcn0JzQsNC70LXQvdGM0LrQuNC5INGH0LDRgNC00LDRiCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUTVNLSHBFY21NM0s3aGlaenlZM2c0S184TXRIYkg5TC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0ITRgNGM0L7QvNGW0L3QsCDQni7Qky4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC7QlNGA0LXQvNC70Y7Qs9CwLiDQn9C+0LXQvNCwLdGA0LDQv9GB0L7QtNGW0Y8sIDIpINChLtCe0YDRhNC10ZTQsi4nJ9CS0LXRgdC90Y/QvdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWTZPS1VPb0piMWp1M1Z6UzRGQ3RPNGd1QkxIRDkxMFAvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDQtNGD0Log0KIu0K4uXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQmi7QnC7QktC10LHQtdGALtCa0L7QvdGG0LXRgNGCINC00LvRjyDQutC70LDRgNC90LXRgtCwIOKEljEs0IYg0YcuOyAyKSDQry7QnNC10LTQuNC90YzRiC4g0KDQvtC80LDQvdGBXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrV0JIWVVZUm1YcG01QkNHVzlibnQ4eTlyaXhnUFFaNC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDJiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J3QvtCy0ZbQutC+0LLQsCDQnC7QnC5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCe0LHRgC4g0JQu0JfQsNC00L7RgNCwLiAnJ9Ch0LXRgNC10LQg0YHQtdC70LAg0LTQuNGH0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwYVdWbE9lM0Ytc3NRaFRWcWtGbmc4R0pLR0pFd1U4MC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDJjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J3QvtCy0ZbQutC+0LLQsCDQnC7QnC4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQny7Qhi7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0JfQsNCx0YvRgtGMINGC0LDQuiDRgdC60L7RgNC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXR3NU1OVS01ZnVYUW9TT0hwV3RhR3ZHalp4Y2ZNQWZtL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MmRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC40YDQvtGC0LAg0J4u0JwuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCa0YPQtNGA0Y/QstGG0LXQsi4gJyfQntC00LjQvSDQtNC10L3RjCDQtyDQttC40YLRgtGPINC00Y/RgtC70LAnJywgMinQni7QkdC10YYuJyfQo9C60YDQsNGX0L3RgdGM0LrQtSDRltC90YLQtdGA0LzQtdGG0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU2VqQjFpZF9QVTdYZy13NWZ6S1V2SjBFb09uRnNETUMvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfV07XG5cbmxldCBlbnNlbWJsZSA9IFtcbiAgICB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDM3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQltGD0YDQsNCy0LXQu9GMINChLiwg0JDRgNGC0LXQvNC10L3QutC+INChLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0IbRgdC/0LDQvdGB0YzQutC40Lkg0YLQsNC90LXRhtGMJycsIDIp0J7QsdGALtCcLtCf0L7Qv9C+0LLQsC4gJyfQhNCy0YDQtdC50YHRjNC60ZYg0LzQvtGC0LjQstC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUt2Y0VFN3FQUzByYU9DcWQ4c2FNRUhvLXkwVURJcENoL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0MzhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgICjQn9C40LvQuNC/0YfRg9C6INCdLiwg0JrQsNCy0YPQvSDQhC4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQki7QkNC70LXQutGB0LXRlNCyLicnINCd0LAg0L/RgNC+0LPRg9C70Y/QvdGG0ZYnJywgMinQni7Qn9C10YLRgNC+0LLQsC4gJyfQptC40YDQuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuRUxvdHdxQXo5QzdkMDlHNE5WQlZ2YlJ5S0w5NThycy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDM5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICAo0KDQsNC00LrQvtCy0YHRjNC60LAg0JAuLCDQmtGD0LfRjNC80LjRhykuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAu0KjQvdGW0YLQutC1LiAnJ9Co0LjQvdC10LvRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFNNHBhek5JX1R5djJzRE1XOW9COVFlbTM2STVEUlp1Ui9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICAo0KDQsNC00LrQvtCy0YHRjNC60LAg0JAuLCDQmtGD0LfRjNC80LjRhykuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCd0LDRg9C80LXQvdC60L4uJyfQp9Cw0YEg0LLQtdC70LjQutC40YUg0L7Rh9GW0LrRg9Cy0LDQvdGMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUxCT2Vfd0ZsQ195enRfRmZrUmJDOC05MGNWdTNzdFZPL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0M2JcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgICjQodGW0LrQvtGA0LAg0KAuINCn0LXRgNC10L/Rg9GJ0LDQuiDQnC4pLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0J3QsNGD0LzQtdC90LrQvi4gJyfQmtC+0LvQvtC80LjQudC60LAnJywgMinQlS7Qk9GA0ZbQsy3Qky7QpNGW0YDRgtC40YcuJyfQotCw0L3QtdGG0Ywg0JDQvdGW0YLRgNC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU9SVHp3LXBsZWhRdkFBT2luT3JkcW5IdG5VX29DWmo1L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0M2NcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgJydNeWNyYWZ0JycgKNCE0YDQvNC+0LvQtdC90LrQviDQlC4sINCo0LjQsdCw0L3QvtCy0LAg0JIuKSBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0KHQutC+0YDQuNC6LiAnJ9Cc0LXQu9C+0LTRltGPJycsICAgICAgICAgMinQni7QpdGA0L7QvNGD0YjQuNC9LiAnJ9CU0YDRg9C60LDRgNGB0YzQutCwINC80LDRiNC40L3QutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUF1dm80NGFCWVRHM3ZLeHNUMmhRRDBobWtnMUVkbGE3L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0M2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCR0L7QvdC00LDRgNC10L3QutC+INCcLiwg0KHQu9GW0L3Rh9C10L3QutC+INCuLikgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QodC10LrRgNC10YIuJyfQn9GA0L7Qs9GD0LvRj9C90LrQsCDQlNC+0LHQtdGA0LzQsNC90LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMVFTQWRrd24zaXU1NGtSM2h4bmgzSGcwQ196cFAtWlUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JHQvtC90LTQsNGA0LXQvdC60L4g0JwuLCDQodC70ZbQvdGH0LXQvdC60L4g0K4uKSBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJycg0IbRgtCw0LvRltC50YHRjNC60LAg0L/RltGB0LXQvdGM0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFaVC0zdUNyemJHSnRNYzBvTHd0Z0pxVG9yejlqRFllcy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQktCw0YjRg9GA0ZbQvdCwINCSLiwg0ITQttC+0L3QutC+0LIg0JAuKS5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCTLtCR0ZTQu9C+0LIuJyfQo9GA0LDRgdGW0LzQsCDRliDQp9Cw0YDRltCy0L3QsCDQp9C10YDQtdC/0LDRhdCwJycsIDIp0J4uINCf0L7Qu9GM0L7QstC40LkuICcn0J/QvtC00L7RgNC+0LYg0LIg0JDQu9GM0L/QuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqQ2h2TUJyRHd5eEtrM0FKRUVDU0JFN1lfa0NMUmg4cy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQk9C10LzQsdC40YbRjNC60LAg0J4uLCDQmtGD0LfQu9C+INCaLikuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCl0L7QstCw0YDQtC4gJyfQp9Cw0YDQu9GM0YHRgtC+0L0nJywgMinQlNC2LiDQqNGW0YDRltC90LMuICcn0JrQvtC70LjRgdC60L7QstCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXRMTlZsaHVyWlVkSHg0NE1jaFM0cW0yNTFlUzM5cm9RL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCU0LXRgNGP0LHRltC90LAg0KEuINGC0LAg0JLQsNGB0LjQu9GM0ZTQstCwINCSLikuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCU0ZbQsNCx0LXQu9C70ZYuINCh0L7QvdCw0YLQsCDRgNC1INC80LDQttC+0YAsIDIp0Jsu0KjRg9C60LDQudC70L4uICcn0JPRg9C80L7RgNC10YHQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXlKUUJmZzdjX0JvUXFYTW1BWXFOWVFDbll0YXdaOVRvL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0YDQuNGI0YLQsNC70L7QstC40Ycg0JwuLCDQmtGA0LjRiNGC0LDQu9C+0LLQuNGHINCGLikgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlNC2LtCT0LXRgNGI0LLRltC9LiAnJ0NsYXAgeW91IGhhbmQnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTUFKZUJWbmZ0RWRoY2lvNDduRG5VZ2NqR0dUd0s4Q2ovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrRgNC40YjRgtCw0LvQvtCy0LjRhyDQnC4sINCa0YDQuNGI0YLQsNC70L7QstC40Ycg0IYuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiJ9Ca0L7Qu9GP0LTQutCwJycsINC+0LHRgC4g0J4u0JfQsNC60LDQu9GO0LbQvdC+0ZdcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXBxeFlaVHZGeXJyajZkVHBUNThVVVBTT1BITS1oWnRlL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCb0LDQvdGB0YzQutC40Lkg0IQuLCDQm9Cw0L3RgdGM0LrQsCDQni4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCVLtCT0YDRltCzLiDQkNGA0ZbRjyDRltC3INGB0Y7Rl9GC0LggJyfQlyDRh9Cw0YHRltCyINCl0L7Qu9GM0LHQtdGA0LPQsCcnLCAyKdCSLtCf0YLRg9GI0LrRltC9LiAnJ9CR0YDQtdC90YTQvtGA0LTRgdGM0LrQsCDQstGW0LTRjNC80LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOE9Vc0NHUUJzM0lobFg2aXQtczNUeHVvMDdNM05zMEgvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KHQuNC80L7QvdC10L3QutC+INCiLiwg0KTQtdC00LjQvdCwINCQLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCU0LYu0JPQtdGA0YjQstGW0L0uJyfQmtC+0YXQsNC90LjQuSDQvNGW0LknJzsgMikg0J8u0JzQvtGA0ZbQsC4gJyfQnNCw0L3Rg9C10YInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaFZla2g4XzVNT1VKRGdKdFhJOGk0R0JkUlF3Q0Fla3QvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KHQutC+0L/QtdGG0Ywg0JAuLCDQnNGD0YDQt9Cw0Log0K4uKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi7QntGB0YLQtdC9Licn0KLQsNC90LXRhtGMINC70Y/Qu9GM0L7QuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFRnp5aWp1d0FGTmo4di1UbHJhaUlfUGt1SEdxWDk0RS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQ3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQodC60L7Qv9C10YbRjCDQkC4g0JzRg9GA0LfQsNC6INCuLikgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0JbRg9C70YzRlNCy0LAuJyfQn9GA0L7Qs9GD0LvRj9C90LrQsCDQtyDRgtCw0YLQvtC8JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZacjJWLUh2OE1JRjhLV2daR2ZKQXl1RUU3bWFxV29wL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCi0YDQvtGG0LXQvdC60L4g0JAuLCDQr9C60YPQvdGW0L3QsCDQni7Qki4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCcLtCS0LXQsdC10YAuINCh0L7QvdCw0YLQsCDQtNC+INC80LDQttC+0YAsINCGINGHLjsgMinQkC7QmtC+0LzQu9GW0LrQvtCy0LAuICcn0KHQv9C+0LPQsNC0JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFZTkI4akgwSnk0U1AzdWZBY2VRLW1KMjlsUHJfclR3L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCk0ZbQu9GW0L/QvtCyINCGLiwg0JzQsNGA0YfQtdC90LrQviDQmy4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4nJ9CW0LDRgNGCJycgMinQnC7Qm9C10L7QvdGC0L7QstC40YcuJyfQqdC10LTRgNC40LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcGhXVHlJSmI3RnpxTlFGZVVxRTV4MWxZRlo1OVd1Z3ovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KXQtdC70LzQsNC9INCSLiwg0KXQtdC70LzQsNC9INCSLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KMu0JPRltC70LvQvtC6Licn0J3QsCDQv9Cw0YDQuNC30YzQutC+0LzRgyDQsdGD0LvRjNCy0LDRgNGWJycsIDIp0J0u0KHQvNGW0YDQvdC+0LLQsC4nJ9CR0YDQsNC30LjQu9GM0YHRjNC60LjQuSDQutCw0YDQvdCw0LLQsNC7JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTdjMzJDSTBtX2tOSlhaa3JIa1hRZTUyVGRmSFdQbDZPL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgJydTZm9yemFuZG8nJy5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQni7QptC40LPQsNC90LrQvtCyLiAnJ9Ci0YPRgdGC0LXQvycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFVUWtaMTFVR1ZscWhSM3NyYWRwYm9RcEs5RUV5YWlxby9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC60LLQsNGA0YLQtdGCICcnU2ZvcnphbmRvJycuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JPRgNGW0LMuJyfQkiDQv9C10YfQtdGA0ZYg0LPRltGA0YHRjNC60L7Qs9C+INC60L7RgNC+0LvRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTVExudDhJVTVubFktRzFkcWZiS3VSYTFCX1o4VFNrWS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQktC40YXRgNC40YHRgiDQnC4sINCk0ZTQtNC+0YHRlNGU0LIg0J0uKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7Qn9GA0L7QutC+0YQn0ZTQsi4g0JzQsNGA0YgsIDIp0JIu0JvRjtGC0L7RgdC70LDQstGB0YzQutC40LkuINCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRgtC10LzRgyDQn9Cw0LPQsNC90ZbQvdGWXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuelJIWEpLdEFiZHg3UHdiQjVkNFhGR3hCTmN0cE5Fay9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQktGW0YLRjtC6INCSLCDQkdC10YDQtdC30L7QstGB0YzQutCwINCELilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JHQsNGFICjQktGW0LLQsNC70YzQtNGWKS4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINC+0YDQs9Cw0L3QsCDQu9GPINC80ZbQvdC+0YAsIDIp0JAu0J8n0Y/RhtC+0LvQu9CwLiAnJ9Cb0ZbQsdC10YDRgtCw0L3Qs9C+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5mMDFFZjZPVk95TEFKVVVqQll5SUtOczNNWmVfUEZ2L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCR0L7RgNC+0LLQtdGG0Ywg0J4uLCDRltC70Y7RgdGC0YDQsNGC0L7RgClcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLtCR0LDRhS4nJ9CQ0YDRltGPJycgKCcn0KHRgtGA0LDRgdGC0ZYg0LfQsCDQnNCw0YLQstGW0ZTQvCcnKVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSDFha1FVZFI3UUtSTzRQM2hEWTZfdFp0bWRTcmswSjEvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JHQvtGA0L7QstC10YbRjCDQni4s0ZbQu9GO0YHRgtGA0LDRgtC+0YApLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLtCe0YDRhC4nJ9CeLNCk0L7RgNGC0YPQvdC+JycgKCcn0JrQsNGA0LzRltC90LAg0JHRg9GA0LDQvdCwJycpXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5a09JQlRkSUtLUVo2blhWZ1BpWkgzWThteWNXcHdCeS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDUxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC70LjQvNC10L3QutC+INCcLiwg0JTRltC+0YDQtNGW0ZTQstCwINCcLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CS0L7QutCw0LvRltC3JycsIDIp0JQu0JzRltC50L4uJyfQkdGA0LDQt9C40LvRjNGU0YDQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1ODFkQUF0bERvZnE0cG55RHRZZy1TeEdCNGpHQjNzRS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDUyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC+0LfQsNC6INCGLiwg0KLQsNGU0YAt0KPQu9GM0Y/QvdC+0LLQsCDQmi4pLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIkEuICDQnyfRj9GG0YbQvtC70LAuICcn0JvRltCx0LXRgNGC0LDQvdCz0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeTZZcUZ0QlBHTWxYekVRTDh1dTNCTDRVa3JNemU0amIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQvtC30LDQuiDQhi4g0YLQsCDQotCw0ZTRgC3Qo9C70YzRj9C90L7QstCwINCaLikuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCT0YDRltCzLiAnJ9Cd0L7RgNCy0LXQttGB0YzQutC40Lkg0YLQsNC90LXRhtGMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVR0Zmk0bTdQMW91TkpFSERYaUpuYTdYM2JlUVB6cmZ1L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0L7RgdGC0LXRh9C60L4g0JAuLCDQmtC+0L3QtNGA0LDRgtGO0Log0JwuICkuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0Jou0JTQtdCx0Y7RgdGB0ZYuICcn0KMg0YfQvtCy0L3RlicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoUld6Q0xYSVVVNlhwRFdaM0Vpc0k3UTVOWkh6RGRpby9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC+0YHRgtC10YfQutC+INCQLiwg0JrQvtC90LTRgNCw0YLRjtC6INCcLikuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQri7QktC10YHQvdGP0LouICcn0JrQsNGA0LvRgdC+0L0nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQTMxVnJSNWQ1ZFhUOGtRV3ROeUdreGZ5N2JLSTVNRFUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JzQsNGG0ZbRlNCy0YHRjNCwINCcLiwg0J/QsNC/0ZbRlNCy0LAg0JouKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCc0LXRgtC90LXRgC4nJ9Cg0L7RgdGW0LnRgdGM0LrQuNC5INGF0L7RgNC+0LLQvtC0JycsIDIp0JAu0J8n0Y/RhtGG0L7Qu9CwLicn0JLQtdC70LjQutC1INGC0LDQvdCz0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNkFuZ3Nhc0d1QXNob0RaeWc5aWRsakI4eG9NRHY0dkMvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCa0LDRgdGP0L3QtdC90LrQviDQni7Qki4sINCT0L7RgNC00ZbRlNC90LrQviDQhi7Qni4pIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JAu0JHQsNCx0LDQtNC20LDQvdGP0L0uICcn0J3QvtC60YLRjtGA0L0nJywgMinQri4g0KnRg9GA0L7QstGB0YzQutC40LkuICcn0JPRg9C80L7RgNC40YHRgtC40YfQvdC40Lkg0YLQsNC90LXRhtGMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV9TWEFGUUR3X0JtNFlLLXFjeTZYczRrRm9XNEgzRGFJL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NThcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgJyfQldC70LXQs9GW0Y8nJ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Jwu0KHQutC+0YDQuNC6LiAnJ9Cc0LXQu9C+0LTRltGPJycsIDIp0Jsu0JrQsNGA0L/QtdC90LrQvi4nJ9CS0ZbQvdC+0YfQvtC6INGD0LvRjtCx0LvQtdC90LjRhSDQvNC10LvQvtC00ZbQuScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFja1p3MEhzc2l5RWRiU1NIQnFPeWF3cVNmdEFrMXdVai9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQk9GA0LjQs9C+0YAn0ZTQstCwINCTLtCQLiAsINCv0LrRg9C90ZbQvdCwINCeLtCSLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0KjRg9Cx0LXRgNGCLicn0JLRltC50YHRjNC60L7QstC40Lkg0LzQsNGA0YgnJyAyKdCQLtCa0L7QvNC70ZbQutC+0LLQsC4gJyfQndCwINC80LDRgdC60LDRgNCw0LTRlicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFVQ2FKX3FZVWFweU0tSEJocnVXYi1oN0lGeVNxa19zVS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDVhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC+0YHQtdC90LrQviDQni7Qki4sINCa0LDRgdGD0LzQvtCy0LAg0J4u0JQuKS5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAuINCm0YTQsNGB0LzQsNC9LiAnJ9Cb0ZbRgNC40YfQvdC40Lkg0LLQsNC70YzRgScnLCAyKdCcLtCc0ZbQvdC60L7Qsi4gJyfQodGC0LDRgNC40Lkg0YDQvtGP0LvRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6R09LdW54SW9IZDNVajVGSHZkV3lOLXJ2V0Y3bjZWLS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDViXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC60LLQsNGA0YLQtdGCICAo0JLQsNGB0LXQvdC60L4g0KEuLCDQktCw0YHQtdC90LrQviDQnC4sINCl0LDQstCw0LvQutC+INCiLizQkdC40YfQutC+0LIn0Y/QuiDQmi4pLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JLRltCy0LDQu9GM0LTRli4nJ9CX0LjQvNCwJyc7IDIp0KQu0JzQtdGA0Lon0Y7RgNCwLicn0JHQvtCz0LXQvNC90LAg0YDQsNC/0YHQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFCOTZuRUMzdktZUmQ4T2dUWGdQaVZWWDhWQi1NU1NkWS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDVjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC60LLQsNGA0YLQtdGCICcnQUxMQSBCUkVWRScnLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0KHRgtGA0LDQstGW0L3RgdGM0LrQuNC5LtCk0YDQsNCz0LzQtdC90YIg0ZbQtyDQsdCw0LvQtdGC0YMgJyfQn9C10YLRgNGD0YjQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJpZlc4T0J2MUU2MXFkMTg0RWFKanN2T3RyWHJScmtWL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgJydBTExBIEJSRVZFJycuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi7Qk9GD0YDQu9GW0YLRgi4nJ9CS0ZbQtNC10L3RgdGM0LrQuNC5INCy0LDQu9GM0YEnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUWpCcktXVGtDYmlTOUVqNWs0cEhiSFJEc04yRDFjYU0vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMICcn0JXQmtCh0J/QoNCV0KHQhtCvJycuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QndCw0YPQvNC10L3QutC+LiAxKScn0KfQsNGB0Lgg0LLQtdC70LjQutC40YUg0YHQv9C+0LTRltCy0LDQvdGMJycsIDIp0JAu0J8n0Y/RhtGG0L7Qu9CwLiAnJ9Cb0ZbQsdC10YDRgtCw0L3Qs9C+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlVbFlLcklLc0oxaW51Q3FBT1MwTVk0THFHcm1jcF9rL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LrQstCw0YDRgtC10YIgKNCp0YPQutGW0L3QsCDQni4s0KHQtdGA0LTRjtC6INCTLiwg0KjQsNC/0L7QstCw0Lsg0J4uLCDQnNCw0LrRgdC40LzQtdC90LrQviDQki4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy7Qm9Cw0LLRltC90YzRj9C6Licn0JPQsNC70L7Qvy3QvNCw0YDRiCcnOyAyKdCTLtCT0YPRgNC70ZbRgi4g0J3QvtC60YLRjtGA0L1cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUlZYk5JQzJFeDZOeHhNOHltYkN0TDJtdVBBUTRSaE1nL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NjBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjCAoINCh0LzQuNC6INCbLtCuLizQqNC10LrQtdC70Ywg0J4u0J4uKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0JPRg9Cw0YHRgtCw0LLRltC90L4uICcn0KDQvtC80LDQvdGBJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWRIQnpuRG1wRS0wdld5cnlNZjg2WENrRmI4c1BfSFlfL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NjFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjCAo0KHQvNC40Log0Jsu0K4uLCDQqNC10LrQtdC70Ywg0J4u0J4uKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QptGE0LDRgdC80LDQvS4nJ9Ch0L3RltC20LjQvdC60LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOVBUZS1KX2NTNkRUU082aVpGaXhnYjVnNFp4cGF6UlQvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfVxuXTtcblxuZXhwb3J0IGxldCBhcmNoaXZlID0gbXlDYXJkcy5jb25jYXQoY29uY2VydG1hc3RlcnMpLmNvbmNhdChlbnNlbWJsZSkiLCJpbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7YXJjaGl2ZX0gZnJvbSBcIi4vQXJjaGl2ZVwiO1xuaW1wb3J0IHtmb3J0ZXBpYW5vU29sb30gZnJvbSBcIi4vRm9ydGVwaWFub1NvbG9cIjtcbmltcG9ydCB7ZW5zZW1ibGVzfSBmcm9tIFwiLi9FbnNlbWJsZVwiO1xuaW1wb3J0IHthZGRpdGlvbmFsSW5zdHJ1bWVudHN9IGZyb20gXCIuL0FkZGl0aW9uYWxJbnN0cnVtZW50c1wiO1xuXG5jb25zdCBncm91cDEgPSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImA7XG5jb25zdCBncm91cDIgPSBg0J3QvtC80ZbQvdCw0YbRltGPIMKr0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YzCu2A7XG5jb25zdCBncm91cDMgPSBg0J3QvtC80ZbQvdCw0YbRltGPIMKr0JTQvtC00LDRgtC60L7QstC40Lkg0ZbQvdGB0YLRgNGD0LzQtdC90YIgKNGE0L7RgNGC0LXQv9GW0LDQvdC+KcK7YDtcblxubGV0IG15Q2FyZHMgPSBhcmNoaXZlO1xubXlDYXJkcyA9IG15Q2FyZHMuY29uY2F0KGZvcnRlcGlhbm9Tb2xvKS5jb25jYXQoZW5zZW1ibGVzKS5jb25jYXQoYWRkaXRpb25hbEluc3RydW1lbnRzKVxuXG4vKiogQ09ERSAqKi9cbmZ1bmN0aW9uIGZpbG1SZWR1Y2VyKHN0YXRlID0ge2NhcmRDb3VudDogbXlDYXJkcy5sZW5ndGgsIGNhcmRzOiBteUNhcmRzLCBpc0RhdGFJblBsYWNlOiB0cnVlLCBlcnJvcjogXCJcIn0sIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnUkZTX1BBR0UnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IC0yLFxuICAgICAgICAgICAgICAgIGNhcmRzOiBbXSxcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnSU5GT19QQUdFJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiAtMSxcbiAgICAgICAgICAgICAgICBjYXJkczogW10sXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ0FSQ0hJVkUnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI+INCQ0YDRhdGW0LJcIik7XG4gICAgICAgICAgICBsZXQgYXJjaGl2ZUNhcmRzID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBcItCw0YDRhdGW0LJcIikuc2xpY2UoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZHM6IGFyY2hpdmVDYXJkcyxcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbXlDYXJkcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ0FMTCc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4g0KPRgdGWINCy0ZbQtNC10L5cIik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRzOiBteUNhcmRzLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBteUNhcmRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnZ3JvdXAtMSc6XG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQuZ3JvdXAgPT09IGdyb3VwMSkuc2xpY2UoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZHM6IG5ld0NhcmRzLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnZ3JvdXAtMic6XG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMxID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDIpLnNsaWNlKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkczEsXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzMS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnZ3JvdXAtMyc6XG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMyID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDMpLnNsaWNlKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkczIsXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzMi5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1NFQVJDSCc6XG4gICAgICAgICAgICBsZXQgcSA9IGFjdGlvbi5xdWVyeS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYD4g0J/QvtGI0YPQujogJHtxfWApO1xuICAgICAgICAgICAgbGV0IG5ld0NhcmRzMyA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjYXJkTmFtZSA9IGNhcmQubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGxldCBib29sID0gKGNhcmROYW1lLnN0YXJ0c1dpdGgocSkgfHwgY2FyZE5hbWUuaW5jbHVkZXMocSkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUZXN0aW5nICR7Y2FyZE5hbWV9IG9uIHF1ZXJ5ICR7cX0sIHJlc3VsdCBpcyAke2Jvb2x9YClcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMzLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkczMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0VSUk9SJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGA+INCf0L7QvNC40LvQutCwYCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ubXNnLFxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogMSxcbiAgICAgICAgICAgICAgICBjYXJkczogW10sXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZHM6IGFkZGl0aW9uYWxJbnN0cnVtZW50cyxcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogYWRkaXRpb25hbEluc3RydW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxuICAgICAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNhcmRTdG9yZSA9IGNyZWF0ZVN0b3JlKGZpbG1SZWR1Y2VyKTtcblxuY2FyZFN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgIGNvbnNvbGUubG9nKFwiRmlsbXNTdG9yZSBzdGF0ZSB3YXMgY2hhbmdlZCwgbnVtYmVyIG9mIGNhcmRzOiBcIiArIGNhcmRTdG9yZS5nZXRTdGF0ZSgpLmNhcmRDb3VudClcbik7XG5cblxuXG5cblxuIiwiZXhwb3J0IGxldCBlbnNlbWJsZXMgPSBbXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvUTQ3d0EwN2ZjdzhcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCQLiDQmtC+0LzQu9GW0LrQvtCy0LAuIMKr0KDQvtC6LdC00YDQsNC50LLCuyDQtyDRhtC40LrQu9GDIMKr0IbQvdGC0LXRgNCy0LDQu9GW0Y/CuzsgMi4g0JAuINCa0L7QvNC70ZbQutC+0LLQsC4gwqvQnNGW0L3Rj9C70LrQsC3Qv9C+0LLRgtC+0YDRj9C70LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQtNGD0LXRgiDRgyDRgdC60LvQsNC00ZYg0JDQvdGC0L7QvdC+0LLQvtGXINCfLiDRgtCwINCa0L7QvNC70ZbQutC+0LLQvtGXINCeLlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjU2MDY0NTc0NTE3NzI1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyDCq9Ck0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMwrtcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdHVRZ0Nfbi1kWHNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCfLiDQqNC+0LvRjNGGLdCcLiDQmtCw0L3QutC1LiDQpNCw0L3RgtCw0LfRltGPINC90LAg0YLQtdC80YMg0YPQutGA0LDRl9C90YHRjNC60L7RlyDQvdCw0YDQvtC00L3QvtGXINC/0ZbRgdC90ZYgwqvQktC10YDRhdC+0LLQuNC90LDCuzsgMi4g0JwuINCh0LrQvtGA0LjQui4g0J/QsNGA0LDRhNGA0LDQtyDQvdCwINGC0LXQvNGDINCbLiDQkdC10YLRhdC+0LLQtdC90LAgwqvQlNC+INCV0LvRltC30LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LTRg9C10YIg0YMg0YHQutC70LDQtNGWINCc0LDQu9GP0YDRh9GD0Log0IQuINGC0LAg0JzQvtGFINCdLlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjU2MDY0NTc0NjcwNjQxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyDCq9Ck0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMwrtcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvRVVSRzZBLTFjb29cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCkLiDQqNGD0LHQtdGA0YIuIMKr0J3RltC80LXRhtGM0LrQuNC5INGC0LDQvdC10YbRjMK7OyAyLiDQkC4g0JTQstC+0YDQttCw0LouIMKr0KHQu9C+0LJcXHUyMDE50Y/QvdGB0YzQutC40Lkg0YLQsNC90LXRhtGMwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INC00YPQtdGCINGDINGB0LrQu9Cw0LTRliDQr9Cz0L7QtNC60Lgg0J4uINGC0LAg0K/Qs9C+0LTQutC4INCgLlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjU2MDY0NTc0NzEyNDE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyDCq9Ck0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMwrtcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvSUdocG1VNEtwZ0VcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLiDQm9Cw0LLRltC90YzRj9C6LiDCq9Cc0LDRgNGILdCz0LDQu9C+0L8g0LTQu9GPINCy0L7RgdGM0LzQuCDRgNGD0Log0YLQsCDQvtC00LjQvdC+0LrQvtCz0L4g0YDQvtGP0LvRjsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQutCy0LDRgNGC0LXRgiDRgyDRgdC60LvQsNC00ZYg0JTRg9CxINCdLiwg0KLQutCw0YfQtdC90LrQviDQkC4sINCX0LDQu9C40LLQsNC00L3QvtCz0L4g0KAuLCDQnNC10L3RhtC10LvRjCDQkC5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1NjA2NDU3NDc1OTkwNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gwqvQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjMK7XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzVVRlZZc3pBcmZjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JzQsNC60LDRgNC+0LIuIMKr0KPRgNC+0YfQuNGB0YLQsCDQv9GA0LXQu9GO0LTRltGPwrssINC/0LXRgNC10LrQu9Cw0LQg0JwuINCT0L7RgtC70ZbQsdCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQutCy0LDRgNGC0LXRgiDRgyDRgdC60LvQsNC00ZYg0JTRg9CxINCdLiwg0KLQutCw0YfQtdC90LrQviDQkC4sINCX0LDQu9C40LLQsNC00L3QvtCz0L4g0KAuLCDQnNC10L3RhtC10LvRjCDQkC5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1NjA2NDU3NDc5ODAyMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gwqvQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjMK7XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzVpMTVBYTlwbGg4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KHQutC+0YDQuNC6LiDCq9Cc0LXQu9C+0LTRltGPwrssINGC0YDQsNC90YHQutGA0LjQv9GG0ZbRjyDQni4g0KjQtdCy0YfQtdC90LrQvi3QnNGW0YXQsNC70L7QstGB0YzQutC+XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQtNGD0LXRgiDRgyDRgdC60LvQsNC00ZYg0JPRgNC40LPQvtGAXFx1MjAxOdGU0LLQvtGXINCTLtCQIC7RgtCwINCv0LrRg9C90ZbQvdC+0Zcg0J4u0JIuXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNTYwNjQ1NzQ4Mjk3NzZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIMKr0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YzCu1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8xZGNtQzdGTTFnb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCa0LDQvdC60LUuIMKr0J/QvtC/0YPRgNGWINC3INC/0ZbRgdC10L3RjCDQstGW0LnRgdGM0LrQvtCy0L7Qs9C+INGH0LDRgdGDwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INC00YPQtdGCINGDINGB0LrQu9Cw0LTRliDQk9GA0LjQs9C+0YBcXHUyMDE50ZTQstC+0Zcg0JMu0JAgLtGC0LAg0K/QutGD0L3RltC90L7RlyDQni7Qki5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1NjA2NDU3NDg2MDI1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gwqvQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjMK7XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzBzcG9jRWpIemlNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KHQutC+0YDQuNC6LiDCq9Cf0YDQuNGU0LzQvdCwINC/0YDQvtCz0YPQu9GP0L3QutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INC00YPQtdGCIMKr0JXQutGB0L/RgNC10YHRltGPwrsg0YMg0YHQutC70LDQtNGWINCT0LDQvdGO0Log0IYuINGC0LAg0J/Qu9C+0YLQvdGW0LrQvtCy0L7RlyDQmy5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1NjA2NDU3NDg5NzgwNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gwqvQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjMK7XCJcbiAgICB9XG5dIiwiZXhwb3J0IGxldCBmb3J0ZXBpYW5vU29sbyA9IFtcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1ZIdFl2NlhvMjhFXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JTQsNC80LrQvtC80LEuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCDQhiDRh9Cw0YHRgtC40L3QsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQktCw0YjQuNGA0LXQvdC60L4g0JTRltCw0L3QsCwgMTIuMTAuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MDUyNjg4MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2k2M2JYSHlLV29BXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KjQtdC90YLRjtGA0LogKNCi0LXRgNC10YnRg9C6KS4gwqvQnNC10L3Rg9C10YIg0LPRgNCw0YbRltC50L3QvtGXINCx0LDQu9C10YDQuNC90LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQktCw0YjQuNGA0LXQvdC60L4g0JTRltCw0L3QsCwgMTIuMTAuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MDYxMDQ3M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzZFZFMyRzBWSGNnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS4g0JHQsNGFLiDQnNC10L3Rg9C10YIg0YHQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0LLQuiDQkNGA0YLRg9GALCAyMC4xMC4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQwNjcyMTM0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTEZTNXJqbEZmM1FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQltC10YDQsdGW0L0uIMKr0KPQutGA0LDRl9C90YHRjNC60LjQuSDRgtCw0L3QtdGG0YzCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0LLQuiDQkNGA0YLRg9GALCAyMC4xMC4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQwNzIwMTU3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvcVR4bnpRcUZSWllcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQkdCw0YUuIMKr0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPwrsg0YHQvtC70Ywg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQltC40YLQsNGA0Y7QuiDQmtGW0YDQsCwgMTAuMDkuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MDc4MjIzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2NSYnM5RE8tTTU4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC4g0KXRg9GC0L7RgNGP0L3RgdGM0LrQuNC5LiDCq9CS0L7Qs9C90ZbQstC+0YfQutCwLdGB0YLRgNC40LHRg9C90ZbQstC+0YfQutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JbQuNGC0LDRgNGO0Log0JrRltGA0LAsIDEwLjA5LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDA4OTAzNjhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9hbm9oZXFRd19Wb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCo0YPQutCw0LnQu9C+LiDCq9Cb0LXQsdGW0LTRjMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LjRgdC10LvRjNC+0LLQsCDQhNC70LjQt9Cw0LLQtdGC0LAsIDExLjAxLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDA5MzM1NjZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9XblpZNm45Q25fNFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCT0LXQtNGW0LrQtS4g0JXRgtGO0LQg0LTQviDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LjRgdC10LvRjNC+0LLQsCDQhNC70LjQt9Cw0LLQtdGC0LAsIDExLjAxLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDA5NzUzMjZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8waU1vYWUyamFwb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEuINCc0LDQudC60LDQv9Cw0YAuIMKr0JIg0LrRg9C30L3RlsK7OyDQkS4g0KTRgNC10LQuIMKr0KLQsNC90LXRhtGMINC10LvRjNGE0ZbQssK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YDQsNCy0YfRg9C6INCc0ZbQu9Cw0L3QsCwgMDkuMDEuMjAxNSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTAzNDAzOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1JVeFpJNGk5S2djXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQny4g0JfQsNGF0LDRgNC+0LIuIMKr0JrQsNGA0YPRgdC10LvRjMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCb0ZbQv9C60LDQvSDQkNC70ZbQvdCwLCAxMC4xMC4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQxMDc5MjY5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvQ1d0OUNKSmxqZjRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCRLiDQpNGW0LvRjNGGLiDCq9CU0YDQtdCy0L3RjyDQutCw0LfQutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvRltC/0LrQsNC9INCQ0LvRltC90LAsIDEwLjEwLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDExMzc5MDZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9sMkJ1akNNNHlka1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K8uINCR0L7QsdCw0LvRltC6LiDCq9CW0YPRgNCw0LLQu9C40L3QsCDQv9GW0YHQvdGPwrs7INCSLiDQkdCw0YDQstGW0L3RgdGM0LrQuNC5LiDCq9Ch0L7QvdC10YfQutC+wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvRj9GI0LjQuiDQkNC90L3QsCwgMTYuMDYuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTIwNjgyOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL09hQWQwSE9BRXRZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLiDCq9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRj8K7INC00L4g0LzRltC90L7RgDsg0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4gwqvQoyDRgdC60LvQtdC/0ZbQvdC90ZbCuzsg0JouINCn0LXRgNC90ZYuINCV0YLRjtC0INGA0LUg0LzQsNC20L7RgCwg0YLQsi4gMzk5XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDRgNGD0YnQsNC6INCS0LXRgNC+0L3RltC60LAsIDIyLjA3LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDEyOTMwNjlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9JdGE1eTl5YlUyOFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNGC0Y7QuiDQkNGA0YHQtdC9LCAyNy4wNi4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQxMzYwNzcyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvc0p2M1BaOFJ0UzhcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQmtC+0YHQtdC90LrQvi4g0KHQutC10YDRhtC40L3QvlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC40YLRjtC6INCQ0YDRgdC10L0sIDI3LjA2LjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDE0NTI4ODZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC94UEp2VXNIYnRrWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCS0LXRgNCx0LjRhtGM0LrQuNC5LCDQsNGA0LDQvdC2LiDQni4g0KjQsNCy0LDRgNC00LDQutCwLiDCq9CT0ZbQvNC9INCj0LrRgNCw0ZfQvdC4wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qt9GW0L3QutC+0LLRgdGM0LrQsCDQktGW0LrRgtC+0YDRltGPLCAyMi4wNy4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQxNTIwMjE2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvVUE4YXVHUUJnNlFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4gwqvQqNCw0YDQvNCw0L3QutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qt9GW0L3QutC+0LLRgdGM0LrQsCDQktGW0LrRgtC+0YDRltGPLCAyMi4wNy4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQxNTY3MTQ4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvbUF1Y1BJN1ZtSDBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQoNC10LnQvdC10LrQtS4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALCDQhiDRh9Cw0YHRgtC40L3QsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntGB0LjQutCwINCg0L7QvNCw0L0sIDI1LjA2LjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDE2MDczNDVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8xYUc3WHlsZHotRVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KPQutGA0LDRl9C90YHRjNC60LAg0L3QsNGA0L7QtNC90LAg0L/RltGB0L3RjyDQsiDQvtCx0YDQvtCx0YbRliDQky4g0JHQtdC3XFx1MjAxOdGP0LfQuNGH0L3QvtCz0L4gwqvQh9GF0LDQsiDQutC+0LfQsNC6INC90LAg0LLRltC50L3QvtC90YzQutGDwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7RgdC40LrQsCDQoNC+0LzQsNC9LCAyNS4wNi4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQxNjQ4OTU2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvX1dkR2ZTSW15RjRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCuLiDQl9GD0LHQsNC5IMKr0JHQsNCx0YPRgdGPINCv0LPRg9GB0Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntGB0YLQsNC/0YfRg9C6INCa0LDRgtC10YDQuNC90LAsIDExLjA4LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDE3MzA3MDBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9NMG54cWlYZGZ6b1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCT0ZbQu9C70L7Qui4g0KHQsNGA0LDQsdCw0L3QtNCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0YHRgtCw0L/Rh9GD0Log0JrQsNGC0LXRgNC40L3QsCwgMTEuMDguMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTc5ODA5MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL01TM2pJcG9JRlk0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC4g0KDQvtGD0LvRli4gwqvQmtC40YLQsNC50YHRjNC60LjQuSDRhdC70L7Qv9GH0LjQusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDRgNGF0L7QvNC10L3QutC+INCE0LLQs9C10L3RltGPLCAwOC4wNC4yMDE2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQxODQxMzYxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMG41eXl6MEY5a2dcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQqNC40YLRgtC1LiDCq9Cd0LAg0YHQutC10LnRgtCx0L7RgNC00ZbCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0YDRhdC+0LzQtdC90LrQviDQhNCy0LPQtdC90ZbRjywgMDguMDQuMjAxNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTg4NzEzMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL05YMlZhZlN3SFNBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQny4g0JfQsNGF0LDRgNC+0LIuIMKr0KLQsNC90LXRhtGMINC80LDQu9C10L3RjNC60LjRhSDQt9GW0YDQvtGH0L7QusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0ZbRgdC+0YbRjNC60LAg0KHQvtC70L7QvNGW0Y8sIDI5LjAzLjIwMTYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDE5MjYxNDJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9qeF9vellzTDVFUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCG0L7RgNC00LDQvS4gwqvQn9C+0LvRjtCy0LDQvdC90Y8g0L3QsCDQvNC10YLQtdC70LjQutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RltGB0L7RhtGM0LrQsCDQodC+0LvQvtC80ZbRjywgMjkuMDMuMjAxNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTk2OTAyNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3RPZVFULVVJS21BXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KjQtdC90YLRjtGA0LogKNCi0LXRgNC10YnRg9C6KS4gwqvQk9GA0LDQudC70LjQstC1INC30LDQudGH0LXQvdGP0YLQutC+wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RgNC40LzQsNC6INCu0LvRltGPLCAwMi4wMy4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyMDAzNjM3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvbE40WnY0OHdQbllcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQk9GW0LvQu9C+0LouIMKrRHJpZnRpbmcgY2xvdWRzwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RgNC40LzQsNC6INCu0LvRltGPLCAwMi4wMy4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyMDMzNDUwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvdUxRMFlzdF9UNFlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLiDQkNC90LTRgNC1LiDQodC+0L3QsNGC0LjQvdCwINGB0L7Qu9GMINC80LDQttC+0YAsINCGINGH0LDRgdGC0LjQvdCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQtNC+0LLQvdGW0Log0JXRgdGE0ZbRgCwgMjUuMDYuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjA3NTE0MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3ZhWE9qNzRHakpNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JXQutGI0YLQtdC50L0uIMKr0JrQsNC/0YDQuNC3INCz0L3QvtC80ZbQssK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQtNC+0LLQvdGW0Log0JXRgdGE0ZbRgCwgMjUuMDYuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjExMjgyNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzFSSzV2eU50TGV3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoC4g0KjRg9C80LDQvS4gwqvQn9C10YDRiNCwINCy0YLRgNCw0YLQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQtNC+0LLQvdGW0Log0JXRgdGE0ZbRgCwgMjUuMDYuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjE3MjIzM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0JJSW9Nb0dqbUNRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQry4g0JHQvtCx0LDQu9GW0LouIMKr0KLQsNC60LjQuSDRh9GD0LTQvtCy0LjQuSDQstC10YfRltGAwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQtdC80LXQvdGH0YPQuiDQktC10YDQvtC90ZbQutCwLDMwLjExLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDIyMjc4MDVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9HUVpHRlI3NUZsWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCU0LDQvNC60L7QvNCxLiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwg0IbQhizQhtCG0IYg0YfQsNGB0YLQuNC90LhcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQtdC80LXQvdGH0YPQuiDQktC10YDQvtC90ZbQutCwLDMwLjExLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDIyNzEyNzNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvZGtPQ2hDZE5tQ1FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQn9C+0LvRj9C90YHRjNC60LjQuS4gwqvQmtCy0ZbRgtC10L3RjC4g0JLRltGC0LXRgNC10YbRjCDQv9C+0LLRltGP0LLCuyDQtyDRhtC40LrQu9GDIMKr0J/QvtGA0Lgg0YDQvtC60YMuIDEyINC/XFx1MjAxOdGU0YEg0LTQu9GPINGE0L7RgNGC0LXQv9GW0LDQvdC+INCyINC00LbQsNC30L7QstC40YUg0YLQvtC90LDRhcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0JDQu9GW0YHQsCwgMTIuMDEuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjM1NjA3N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9VS3d3UzlzaUw0MFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JouINCn0LXRgNC90ZYuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0JDQu9GW0YHQsCwgMTIuMDEuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjQxOTIzMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzM2bFd3dk5YbkNrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmy4g0KjRg9C60LDQudC70L4uINCf0YDQtdC70Y7QtNGW0Y8g0LTQviDQvNCw0LbQvtGAOyDQmy4g0JHQtdGC0YXQvtCy0LXQvS4gMi4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALCDQhiDRh9Cw0YHRgtC40L3QsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotC10L/Qu9C40YbRjNC60LAg0JfQu9Cw0YLQsCwgMDUuMDQuMjAxNSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjQ3NTkyMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1JKZlhKWWpCM3NzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQhi4g0JrRg9C70LDRgy4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALCDQhiDRh9Cw0YHRgtC40L3QsDsgMi4g0JIuINCT0ZbQu9C70L7Qui4gwqvQmtC+0LvRltCx0YDRlsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0LrQsNGH0LXQvdC60L4g0JTRltCw0L3QsCwgMjAuMDguMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjUyOTIyNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1NEQTM2TlFtb0M0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQnC4g0KjQtdC90YLRjtGA0LogKNCi0LXRgNC10YnRg9C6KS4gwqvQnNCw0LvQtdC90YzQutCwINGB0LXRgNC10L3QsNC00LDCuzsgMi4g0JwuINCV0LrRiNGC0LDQudC9LiDCq9Ca0LDQv9GA0LjQtyDQs9C90L7QvNGW0LLCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotGD0YDQuNC6INCQ0L3QvdCwLCAwNy4xMS4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyNTczMDA5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvOXpCaWljbWFJTzBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQsNC90LXRhtGMOyAyLiDQpC4g0KjRg9Cx0LXRgNGCLiDQodC60LXRgNGG0L4g0YHRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQo9C00L7QtCDQlNCw0YBcXHUyMDE50Y8sIDAzLjAxLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDI2MTgzNTZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9qWnVzbUpZc2RrUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KPQutGA0LDRl9C90YHRjNC60LAg0L3QsNGA0L7QtNC90LAg0L/RltGB0L3RjyDCq9Cd0LDQtCDRgNGW0YfQutC+0Y4g0LHQtdGA0LXQttC60L7QvMK7LCDQv9C10YDQtdC60LvQsNC0ICDQhi4g0JHQtdGA0LrQvtCy0LjRh9CwINC30LAg0L7QsdGA0L7QsdC60L7RjiDQnC4g0JvQtdC+0L3RgtC+0LLQuNGH0LA7IDIuINCe0LHRgC4g0JEuINCo0LjQv9GC0YPRgNCwLiDQmtC+0LvQvtC80LjQudC60LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXQsNC70LDQvNC10LnQtNCwINCb0YPQulxcdTIwMTnRj9C9LCAwOS4wNy4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyNjY5Mjg0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvcHd0R2JGTFo2OWdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCGLiDQkdC10YDQutC+0LLQuNGHLiDQmtC+0L3RhtC10YDRgiDQtNC70Y8g0YTQvtGA0YLQtdC/0ZbQsNC90L4g4oSWMiwg0IbQhiDRh9Cw0YHRgtC40L3QsDsgMi4g0JsuINCG0LLQsNC90Y7RiNC40L3QsC4gwqvQmtCw0YDQsNC80LXQu9GMwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQuXFx00KXQvtC8XFx1MjAxOdGP0Log0JLQsNGA0LLQsNGA0LAsMTguMDMuMjAxNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjcxOTU3MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0lRR1g2VmRpSzdzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQntCx0YDQvtCx0LrQsCDQkS4g0KjQuNC/0YLRg9GA0LAuINCa0L7Qu9C+0LzQuNC50LrQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQp9GD0LvQutGW0L3QsCDQndCw0LTRltGPLCAxNy4wNS4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyNzY0MjU3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvd3VUbDJlRGplV3dcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQktGW0LvRgtC+0L0uINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCn0YPQu9C60ZbQvdCwINCd0LDQtNGW0Y8sIDE3LjA1LjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDI3OTY5MDlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9GVDF0WmRQMlZiY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCR0ZbQu9Cw0YfQtdC90LrQvi4g0JXQutGB0L/RgNC+0LzRgiDRhNCwINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQsNC80LjQvdCwINCc0LDRgNCz0LDRgNC40YLQsCwgMDguMDEuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjgzNTQ5MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2h3LWNBdlQ5SEJBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQny4g0JfQsNGF0LDRgNC+0LLQsC4gwqvQltCw0YDRgi3RgdGD0LLQtdC90ZbRgMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LDQvNC40L3QsCDQnNCw0YDQs9Cw0YDQuNGC0LAsIDA4LjAxLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDI4NzE0OTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9WN3l0SG11M3BDY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEuINCR0LDRhS4g0JzQtdC90YPQtdGCINGB0L7Qu9GMINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQv9Cw0Log0JTQtdC90LjRgSwgMjYuMDkuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjkxMjE0NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1N2b1dRZGtjRk1NXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS4g0JHQvtGA0YLQutC10LLQuNGHLiDCq9Ca0L7Qt9Cw0LrCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQqNC/0LDQuiDQlNC10L3QuNGBLCAyNi4wOS4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyOTUxMjg1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvdXRKYV9BN0dQdG9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQqNGW0YLRgtC1LiDQldGC0Y7QtCDQtNC+INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQv9Cw0Log0JTQtdC90LjRgSwgMjYuMDkuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0Mjk5NzUxNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0xUWWNOOHdFempRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JPQtdC00ZbQutC1LiDQldGC0Y7QtCDQtNC+INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0K7Qt9Cy0LDQuiDQhNCy0LAsIDE0LjA2LjIwMTUg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDMwMzQyOTBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9lclFtUHk2R294UVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCa0L7RgNC10L3QtdCy0YHRjNC60LAuIMKr0JTQvtGJ0LjQusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCu0LfQstCw0Log0ITQstCwLCAxNC4wNi4yMDE1INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzMDcwMzUxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvRVVJRFdRaUtwY1lcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQktGW0LvRgtC+0L0uINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCv0LrQuNC80YfRg9C6INCa0LDRgNC+0LvRltC90LAsIDE1LjEyLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDMxMjczNzNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9hVHRXNUJDV1h4OFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCo0LjRgtGC0LUuINCc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRj1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQr9C60LjQvNGH0YPQuiDQmtCw0YDQvtC70ZbQvdCwLCAxNS4xMi4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzMTY0MTc0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvSmpXZzlWVm9BamdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCU0LYuINCR0LDRgdGC0YzRlNC9LiDCq9CR0LTQttC+0LvQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCv0LrQuNC80YfRg9C6INCa0LDRgNC+0LvRltC90LAsIDE1LjEyLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDMyMDY1MzFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC85YUdlRlZvYzB6WVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JQuINCn0ZbQvNCw0YDQvtC30LAuINCh0L7QvdCw0YLQsCDihJYxNSwgMiDQt9C+0YjQuNGCXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCQ0LPRgNCw0YLRltC90LAg0KHRgtCw0L3RltGB0LvQsNCyLCAyNC4wOC4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzMjQ5OTg2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTlc0UTNod2tkQ1lcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQodC60L7RgNC40LouIMKr0JbQsNGA0YLRltCy0LvQuNCy0LAg0L9cXHUyMDE50ZTRgdCwwrsg0Lcg0YbQuNC60LvRgyDCq9CXINC00LjRgtGP0YfQvtCz0L4g0LDQu9GM0LHQvtC80YPCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkNCz0YDQsNGC0ZbQvdCwINCh0YLQsNC90ZbRgdC70LDQsiwgMjQuMDguMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzMwODY5OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0tTaXNaVHlXVjRjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQkS4g0KTRltC70YzRhi4gwqvQm9GW0YDQuNGH0L3QuNC5INC/0YDQtdC70Y7QtMK7OyAyLiDQri4g0KjQsNC80L4uINCi0L7QutCw0YLQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkNGA0YLRjNC+0LzQvtCy0LAg0JTQsNGAXFx1MjAxOdGPLCAyNi4wNi4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzMzQ5NDgxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvbXBFTWN4TDlnWVVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLtChLiDQkdCw0YUuINCQ0YDRltGPINC3IMKr0KTRgNCw0L3RhtGD0LfRjNC60L7RlyDRgdGO0ZfRgtC4wrsg0LTQviDQvNGW0L3QvtGAOyAyLiDQkC4g0JrQvtC70L7QvNGW0ZTRhtGMLiDCq9CT0YDQsC3QstC10YHQvdGP0L3QutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQsNC60LDRlNCy0LjRhyDQotC40LzQvtGE0ZbQuSwgMDEuMDEuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzM5NDQ4MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLy1JS2lacUx6ZEJzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnS4g0J3QuNC20LDQvdC60ZbQstGB0YzQutC40LkuINCa0L7Qu9C+0LzQuNC50LrQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdCw0YnRltC5INCS0ZbQutGC0L7RgNGW0Y8sIDExLjA2LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDM0MzgxMjlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9RV2NrM041ZjhXTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCR0Y7RgNCz0LzRjtC70LvQtdGALiDQldGC0Y7QtFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdCw0YnRltC5INCS0ZbQutGC0L7RgNGW0Y8sIDExLjA2LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDM0Njk5MzVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvVnlsSVpvSzhoTDRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCfLiDQp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiDCq9Cl0LLQvtGA0L7QsdCwINC70Y/Qu9GM0LrQuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LXQt9GB0LzQvtC70YzQvdCwINCX0L7RgNGP0L3QsCwgMjIuMTAuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzUwMzU3MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC90eG0ySkI5Q2hVZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCc0ZbRlNGALiDCq0Rvd25yaWdodCBIYXBweSBSYWfCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdC10LfRgdC80L7Qu9GM0L3QsCDQl9C+0YDRj9C90LAsIDIyLjEwLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDM1NDQ2OTRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9Dc2FCRXRJVk1ad1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCT0LXRgNCw0YHQuNC80LXQvdC60L4uIMKr0JzQvtGA0LXCuzsgMi4g0J0uINCi0L7RgNC+0L/QvtCy0LAuINCi0L7QutCw0YLQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdC10YDQtdC30YHRjNC60LAg0JvRjtCx0L7QsiwgMjUuMTAuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzU5MTI4MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3ZoZWNycnlTRzdVXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQri4g0KnRg9GA0L7QstGB0YzQutC40LkuINCG0L3QstC10L3RhtGW0Y9cIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQvtC90LTQsNGA0YfRg9C6INCc0LjRgNC+0YHQu9Cw0LLQsCwgMTguMDQuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzYzMTc1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3NRUE1rVG5iTTFnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQli4g0JrQvtC70L7QtNGD0LEuINCV0YLRjtC0LdC60LDRgNGC0LjQvdC60LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQvtC90LTQsNGA0YfRg9C6INCc0LjRgNC+0YHQu9Cw0LLQsCwgMTguMDQuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzY4MDYzOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzFRT2dNTHk0empBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0KLQuNC80L7RiNC10L3QutC+LiDQldC70LXQs9GW0Y9cIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQvtC70L7RidGD0Log0JXQvNGW0LvRltGPLCAxOS4wNi4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzNzIyMjgxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvVmVVeF9iQklBQ0VcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCiLiDQn9C10YLRgNC40L3QtdC90LrQviwg0L7QsdGA0L7QsdC60LAg0JwuINCo0LXQvdGC0Y7RgNC6LiDCq9Cj0LrRgNCw0ZfQvdCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQvtC70L7RidGD0Log0JXQvNGW0LvRltGPLCAxOS4wNi4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzNzY0ODMzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvYThwd09oU3B1c3NcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4g0JPQvtC/0LDQujsgMi4g0JwuINCo0LXQvdGC0Y7RgNC6ICjQotC10YDQtdGJ0YPQuikuINCR0LDQu9Cw0LTQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9Cw0LLRgNC40LvRjtC6INCh0L7RhNGW0Y8sIDI5LjA2LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDM4MTA4MjJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9nUmhBNmJDRmxiUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JsuINCo0YPQutCw0LnQu9C+ICjQotC10YDQtdGJ0YPQuikuINCf0YDQtdC70Y7QtNGW0Y87IDIuINCcLiDQqNC10L3RgtGO0YDQuiAo0KLQtdGA0LXRidGD0LopLiDCq9Ci0LDQvdC10YbRjCDQutGD0LvRjNCx0LDQsdC+0LrCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9Cw0LvQsNC9INCG0YDQuNC90LAsIDE3LjA1LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDM4NTQyNzFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9TeXNHdnVjLUFJb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4gwqvQnNGA0ZbRj8K7OyAyLiDQlS4g0JPRgNGW0LMuIMKr0KHQtdGA0YbQtSDQv9C+0LXRgtCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQsNGB0YDQsNGC0L7QsiDQntC70LXQutGB0ZbQuSwgMjQuMDguMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0Mzg5MzgzMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2FLM2phQlNEdDQ4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS7QoS4g0JHQsNGFLiDQlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINC00L4g0LzQsNC20L7RgDsgMi4g0JwuINCc0L7RiNC60L7QstGB0YzQutC40LkuINCV0YLRjtC0INGB0ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQtdGA0LDRgdC40LzQtdC90LrQviDQntC70LXQutGB0LDQvdC00YDQsCwgMDEuMDYuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzkzOTE1NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2xfNDRJXzdSU1RrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQkS4g0KTRltC70YzRhi4gwqvQnNC10LvQsNC90YXQvtC70ZbQudC90LjQuSDQstCw0LvRjNGBwrs7IDIuINCbLiDQhtCy0LDQvdC10L3QutC+LiDCq9CU0L7RidC40LrCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C70LDQtNC60LAg0JTQsNGA0LjQvdCwLCAzMS4wMS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzOTkyNDAxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvbE9UY0JpbXltZllcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLtChLiDQkdCw0YUuINCc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjyDRgNC1INC80ZbQvdC+0YA7IDIuINCkLiDQqNC+0L/QtdC9LiBDYW50YWJpbGVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQu9C+0LLQsNGG0YzQutCwINCf0L7Qu9GW0L3QsCwgMTUuMTIuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NDAzNzAyNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL09FNXlRV3RGV3E0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLiDQlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINC70Y8g0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0LjQs9C+0YDQtdC90LrQviDQnNCw0YDRltGPLCAxMy4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ0MDc2NTU1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMHk2VW1uMko3SHdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQotC10YDQtdGJ0YPQuiAo0KjQtdC90YLRjtGA0LopLiDCq9Cf0YDQvtCx0YPQtNC20LXQvdC90Y/CuyDQtyDRhtC40LrQu9GDIMKrQ29udHJlZ2/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0LjQs9C+0YDQtdC90LrQviDQnNCw0YDRltGPLCAxMy4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ0ODQzMzE0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQveDh6NVdBd1FhWHNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCbLiDQkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LAg4oSWMjAsINGC0LIuNDksINCGINGH0LDRgdGC0LjQvdCwOyAyLiDQni4g0JHRltC70LDRiC4g0JHQsNGA0LrQsNGA0L7Qu9CwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LXQudC90LXQutCwINCh0L7Qu9C+0LzRltGPLCAxOS4wNS4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ0ODk4MzY1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvWUpUUmZNbHF3S0VcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCkLiDQmtGD0LvQsNGDLiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwg0YLQsi41NSwg0IYg0YfQsNGB0YLQuNC90LA7IDIuINCbLiDQktC+0LvQvtGI0LjQvdCwLiDCq9CX0LjQvNC+0LLQuNC5INGA0LDQvdC+0LrCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQlNC40YjQu9C10LLQuNC5INCE0LLQs9C10L0sIDMwLjAxLjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDQ5NDYxMjdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9iUTVrVnV1dWEyd1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEuINCb0Y7QtNC60LXQstC40YcuIMKr0KHRgtCw0YDQvtCy0LjQvdC90LAg0L/RltGB0L3Rj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCE0YDQtdCz0LAg0JzQsNGAXFx1MjAxOdGP0L3QsCwgMDQuMDguMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NDk4MzM0M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1JpbFFEa2d6MVhnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JzQvtGA0LTQsNGB0L7Qsi4gwqvQlNCw0LLQvdC40Lwg0LTQsNCy0L3QvsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCE0YDQtdCz0LAg0JzQsNGAXFx1MjAxOdGP0L3QsCwgMDQuMDguMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTAxNDkzOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3ZDdUg3ckZ0QUxjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0IbQstCw0L3QtdC90LrQvi4g0KTQsNC90YLQsNC30ZbRjyDQvdCwINGC0LXQvNGDINGD0LrRgNCw0ZfQvdGB0YzQutC+0Zcg0L3QsNGA0L7QtNC90L7RlyDQv9GW0YHQvdGWIMKr0JPQsNC90LTQt9GPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JbQtdCz0LDQu9C+INCd0LDQtNGW0Y8sIDE2LjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDUwNTAxMTZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9sRmhPVFdHblFwc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JEuINCk0ZbQu9GM0YYuIMKr0KHRg9C80L3QsCDQv9GW0YHQvdGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JbQtdCz0LDQu9C+INCd0LDQtNGW0Y8sIDE2LjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDUxOTkxMzVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9VdGhJdi1Md1BwOFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K8uINCR0L7QsdCw0LvRltC6LiDCq9CR0YPRgNGF0LvQuNCy0LjQuSDQstC+0LTQvtGB0L/QsNC0wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjtC6INCS0ZbRgNGB0LDQstGW0Y8sIDA1LjA3LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDUyNDM4ODNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9NQXZvUUFsMXE2WVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCp0LXRgNCx0LDQutC+0LIuIMKr0JXQu9C10LPRltGPINC60LjRl9Cy0YHRjNC60LjRhSDQv9Cw0LPQvtGA0LHRltCywrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjtC6INCS0ZbRgNGB0LDQstGW0Y8sIDA1LjA3LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDUyODAyNjhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8zS3NNRm9aMlF6RVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCT0ZbQu9C70L7Qui4g0KTQu9Cw0LzQtdC90LPQvlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JzQsNGA0ZbQsNC8LCAwMi4wNC4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1MzA2MzM3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvLU1lUEVwWGxmVlVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLiDQkdC10YDQutC+0LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPIOKEljUg0YDQtSDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQnNCw0YDRltCw0LwsIDAyLjA0LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDUzMzU3NzRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9laE1JOVVmV3luVVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCa0YPQu9Cw0YMuINCh0L7QvdCw0YLQuNC90LAg4oSWMVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0L3RhtC10YAg0JHQvtCz0LTQsNC90LAsIDEwLjAxLjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDUzODMwMDlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9lZ0Nldm9JWnh6NFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCX0LDQstCw0LTRgdGM0LrQuNC5LiDCq9Co0YPQvNC60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0L3RhtC10YAg0JHQvtCz0LTQsNC90LAsIDEwLjAxLjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDU0MTY5NTNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9LcGZfTDQ3empYa1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JIuINCa0LLQsNGB0L3QtdCy0YHRjNC60LjQuS4gwqvQlNGD0LzQutCwwrs7IDIuINCVLiDQk9GA0ZbQsy4gwqvQn9C+0LXRgtC40YfQvdCwINC60LDRgNGC0LjQvdC60LDCuyDihJYxXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LvRltC80L7QstC40Ycg0ITQu9C40LfQsNCy0LXRgtCwLCAxMi4xMC4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1NDU3ODExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvUWo4cGhzV2FEa3NcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCuINCp0YPRgNC+0LLRgdGM0LrQuNC5LCDQkdCw0YDQutCw0YDQvtC70LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtCy0LDQu9GM0YfRg9C6INCQ0L3QvdCwLCAxNC4xMS4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1NDg3NDM5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvT3UtTndVRlUzNTBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCTLiDQodCw0YHRjNC60L4uINCg0LXQs9GC0LDQudC8XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QstCw0LvRjNGH0YPQuiDQkNC90L3QsCwgMTQuMTEuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTUxMzY5OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1M2TllLT09kR01BXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQo9C60YDQsNGX0L3RgdGM0LrQsCDQvdCw0YDQvtC00L3QsCDQv9GW0YHQvdGWINCyINC+0LHRgNC+0LHRhtGWINChLiDQmtC70LjQvNC+0LLRgdGM0LrQvtCz0L4gwqvQh9GF0LDQsiAgICDQutC+0LfQsNC6INC30LAg0JTRg9C90LDQucK7OyAyLiDQoi4g0J/QtdGC0YDQuNC90LXQvdC60L4sINC+0LHRgNC+0LHQutCwINCcLiDQqNC10L3RgtGO0YDQui4gwqvQo9C60YDQsNGX0L3QsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7Qu9C10YHQvdC40YfQtdC90LrQviDQnNCw0YDQuiwgMjUuMDUuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTU1OTM5M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1czaElVb0tZN1o0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KjQtdC90YLRjtGA0LogKNCi0LXRgNC10YnRg9C6KS4gwqvQktCw0LvRjNGBLdC60LDQv9GA0LjRgcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QvdC00YDQsNGC0Y7QuiDQktC10YDQvtC90ZbQutCwLCAxNC4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1NTg4MzY1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZmVVTE1Xb3p6cW9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQnNCw0LnRlNGALiDCq9Ck0LDRgNCx0Lgg0L7RgdC10L3RlsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QvdC00YDQsNGC0Y7QuiDQktC10YDQvtC90ZbQutCwLCAxNC4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1NjE2Mzk5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1oyWjdXMElmUHFrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS7QoS4g0JHQsNGFLiDQkNC70LXQvNCw0L3QtNCwINC3IMKr0KTRgNCw0L3RhtGD0LfRjNC60L7RlyDRgdGO0ZfRgtC4wrsg0LzRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgDsgMi4g0JwuINCb0LjRgdC10L3QutC+LiDQnNCw0LfRg9GA0LrQsCDQtNC+INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtGG0LjRgNGW0Lkg0JDRgNGW0L3QsCwgMjAuMDguMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTY1NjQ0NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzd6NlNUeURvb3dnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0KjRg9C60LDQudC70L4uINCc0LDRgNGIINC3INGB0Y7Rl9GC0LggwqvQptC40YDQusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YDQuNGI0YLQsNC70Ywg0K/QvSwgMjEuMDYuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTY5ODk3NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0JSSjdxd2YxdXpjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS4g0KHQvtGB0L3RltC90LAuIMKr0JTRgNCw0LrQvtC9wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRgNC40YjRgtCw0LvRjCDQr9C9LCAyMS4wNi4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1NzI5NTI2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2VQREN3MURsQ1FnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0K/QutC+0LLRh9GD0LouINCf0L7Qu9C+0L3QtdC3XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YPQu9C40Log0J7Qu9C10YHRjywgMTYuMDEuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTc1ODk3NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC95SmczS0t2WUxpZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCR0LXRgtGF0L7QstC10L0uIMKr0JTQviDQldC70ZbQt9C4wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRg9C70LjQuiDQntC70LXRgdGPLCAxNi4wMS4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1Nzg5NTgzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvU1laWGI4WThkU1FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLtChLiDQkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YDQtSDQvNCw0LbQvtGAOyAyLiDQpC4g0KjQvtC/0LXQvS4g0JzQsNC30YPRgNC60LAsINGC0LIuNjcg4oSWMlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQm9Cw0Ykg0J3QsNC90LAsIDAxLjExLjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDU4MjQxNDBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9yTGlmMTduOVBta1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KAuINCT0LvRltGU0YAuIMKr0JXRgdC60ZbQt8K7INGA0LUg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C10LPQutC40Lkg0JzQsNC60YHQuNC8LCAxNy4wOC4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1OTE3MjkzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvQVptZ2dwenpIVkVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQlNC10LHRjtGB0YHRli4gwqvQnNCw0LvQtdC90YzQutC1INC90LXQs9GA0LXQvdGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQtdCz0LrQuNC5INCc0LDQutGB0LjQvCwgMTcuMDguMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTk2MjYwOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzFrU0dzQkFVMzl3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQki4g0JzQvtGG0LDRgNGCLiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwg0IYg0YfQsNGB0YLQuNC90LA7IDIuINCSLiDQqNGD0LrQsNC50LvQvi4g0IbQvdGC0LXRgNC80LXRhtC+XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDQt9C10L/QsCDQodC+0YTRltGPLCAzMC4wMy4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1OTk2NDA4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMDhLbzY4aU1GWjBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCRLiDQpNGW0LvRjNGGLiDCq9CX0LDQutCw0YDQv9Cw0YLRgdGM0LrQsCDQvdC+0LLQtdC70LXRgtCwwrsg4oSWMlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LrRgdGO0YLQuNC90YHRjNC60LAg0J3QsNC00ZbRjywgMTAuMDguMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjAyNDgxNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3RiUkdyMDA4U2hnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JPRltC70LvQvtC6LiDCq9Ca0LDRgNC90LDQstCw0Lsg0LIg0KDRltC+wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNC60YHRjtGC0LjQvdGB0YzQutCwINCd0LDQtNGW0Y8sIDEwLjA4LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDYwNTk2NTNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC83UDVLNzdNY2hMTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCo0YPQutCw0LnQu9C+LiDCq9Ca0L7RgtC40Log0ZYg0LzQuNGI0LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0ZTQvdGMINCQ0L3QsNGB0YLQsNGB0ZbRjywgMDguMDMuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjA4NjAyMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzNqSkN2VjFiLTlnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC4g0JFcXHUyMDE50ZTQu9GMLiDQodC+0L3QsNGC0LjQvdCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0ZTQvdGMINCQ0L3QsNGB0YLQsNGB0ZbRjywgMDguMDMuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjEwOTAxM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1BDclJXSGZOZkpjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JTQstC+0YDQttCw0LosIMKr0JTQttCw0LfQvtCy0LjQuSDQtdGC0Y7QtMK7IOKEljIg0LTQviDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCd0ZbRiNC/0LDQuyDQhNCy0LAsIDA5LjA1LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDYxMzk4NzhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9obTBHcVRkOGNuZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCb0L7Qs9GW0L0uIMKr0JvRltGA0LjRh9C90LjQuSDQv9GA0LXQu9GO0LTCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQndGW0YjQv9Cw0Lsg0ITQstCwLCAwOS4wNS4yMDEwINGALtC9XCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDYxNzIyOTNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9GV3NjQ3pjc1ZsUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCV0LrRiNGC0LXQudC9LiDCq9Ca0LDQv9GA0LjQtyDQs9C90L7QvNGW0LLCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntC70ZbQudC90LjQuiDQnNC40LrQuNGC0LAsIDMxLjEyLjIwMTEg0YAu0L0uICgyINGA0ZbQuiDQvdCw0LLRh9Cw0L3QvdGPKVwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2MjAzNDU1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvd3JfWnYySmdILWNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLiDQndC+0LLRltC60L7QstCwLiDCq9CT0L7RgdGC0YDQuNC5INGA0LjRgtC8wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qu9GW0LnQvdC40Log0JzQuNC60LjRgtCwLCAzMS4xMi4yMDExINGALtC9LiAoMiDRgNGW0Log0L3QsNCy0YfQsNC90L3RjylcIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjI0MzYxMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL19xeEJ5TW1zRndvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmtC40LzQu9C40LouIMKr0JzRltC90ZbQsNGC0Y7RgNC90LAg0JvQtdC+0L3RgtC+0LLRltCw0L3QsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0YHRgtCw0L/Rh9GD0Log0KXRgNC40YHRgtC40L3QsCwgMTguMDguMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjI3MjM3OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0MwZW1CYkZZSVMwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0JPQsNGA0LTQtdC70YwuIMKrUG9yIHVuYSBjYWJlemHCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntGB0YLQsNC/0YfRg9C6INCl0YDQuNGB0YLQuNC90LAsIDE4LjA4LjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDYzMjkxMTBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9nTDJwTVZZTllHTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JouINCd0ZbQu9GM0YHQtdC9LiDCq9CT0L7QtNC40L3QvdC40Log0Lcg0LzRg9C30LjQutC+0Y7Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0L3Rh9C10L3QutC+INCX0L7RgNGP0L3QsCwgMDUuMDIuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjM2MjM4MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0RxTlhLWFJ2TjFzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoC4g0JPQu9GW0ZTRgC4g0J/RgNC10LvRjtC00ZbRj1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0L3Rh9C10L3QutC+INCX0L7RgNGP0L3QsCwgMDUuMDIuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjM4OTkwNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3EyZHBHMmV4S0djXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS7QoS4g0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPIOKEljExOyAyLiDQlS4g0JPRgNGW0LMuINCV0YLRjtC0LCDRgtCyLiA3MyDihJY1ICjQv9Cw0LxcXHUyMDE50Y/RgtGWINCo0L7Qv9C10L3QsClcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNGB0LXQvdGH0YPQuiDQmtCw0YDRltC90LAsIDAyLjAzLjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY0MzkyNDdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9QcXdHc084dFU3VVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JMuINCo0YLRjNC+0LvRjNGG0LXQu9GMLdCZLiDQkdCw0YUuINCc0LXQvdGD0LXRgiDRgdC+0LvRjCDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDRgdC60LDRgCDQndCw0YLQsNC9LCAwNy4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2NDcyMTg3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvd0VwTWpDV2k4NHdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQqNC40YLRgtC1LiDCq9Ci0LDQvdC10YbRjCDQs9C90L7QvNGW0LLCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0YHQutCw0YAg0J3QsNGC0LDQvSwgMDcuMDkuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjQ5NjEyMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzZ1dmx1V3ZROWNZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQri4g0KDQtdC80LXQt9C10L3QutC+LiDCq9Cg0LDQvdC+0Log0LIg0YLRg9C80LDQvdGWLCDQv9GC0LDRhdC4INC90LDQtCDQvNC+0YDQtdC8wrs7IDIuINCiLiDQntGB0YLQtdC9LiDCq9Ch0L7QvSDQu9GP0LvRjNC60LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C70LjRgdGO0Log0JLQtdGA0L7QvdGW0LrQsCwgMjEuMTAuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjUyNjU0OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0NUMU81ejZUX0NjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0JrRg9C70LDRgy4g0JLQsNGA0ZbQsNGG0ZbRlyDRgdC+0LvRjCDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0L7QtNC70LXQstGB0YzQutCwINCa0LDRgNC40L3QsCwgMjcuMDcuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjU1NjIwM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2Jqd3dXZEwtUHhFXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JLQtdGA0LHQuNGG0YzQutC40LkgLCDQvtCx0YAuINC00LvRjyDRhC3QvdC+INCRLiDQqNC40L/RgtGD0YDQsCDCq9Cp0LUg0L3QtSDQstC80LXRgNC70LAg0KPQutGA0LDRl9C90LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C+0LTQu9C10LLRgdGM0LrQsCDQmtCw0YDQuNC90LAsIDI3LjA3LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY2MDM2ODVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9vUFVjeldwR1Q0SVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JQuINCm0LjQv9C+0LvRli4g0KTQtdCz0LXRgtCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YDQvtC00LDQvdGH0YPQuiDQodC+0L3RjywgMDkuMDQuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjYzMDQ5OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1VPRG5YRU5KUDdnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JHRltC70LDRh9C10L3QutC+LiDCq9CU0L7RidC+0LLQuNC5INGA0LDQvdC+0LrCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GA0L7QtNCw0L3Rh9GD0Log0KHQvtC90Y8sIDA5LjA0LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY2NTY5ODJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC92M1J5SWlobk04NFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JouINCn0LXRgNC90ZYuINCV0YLRjtC0IOKEljIxLCDRgtCyLjI5OVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQoNCw0LPQvtC30LAg0JrQsNGA0LjQvdCwLCAxNS4wNy4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2Njg2NTg3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMkpEUDZaYjZTRThcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLiDQm9C+0LfQsdGW0L0uINCa0L7QvdGG0LXRgNGC0L3QuNC5INCy0LDQu9GM0YEgwqvQndCw0LHQu9C40LbQtdC90L3Rj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LDQs9C+0LfQsCDQmtCw0YDQuNC90LAsIDE1LjA3LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY3MTc0MDZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9kR0hGb2lhZlJFd1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCR0ZbQu9Cw0YfQtdC90LrQviwg0KHQvtC90LDRgtC40L3QsCDRgNC1INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQvtC80LDQvdC+0LLQsCDQmtCw0YLQtdGA0LjQvdCwLCAxNC4wNy4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2NzQzNDExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvU0JuZWxPVjJpSWtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQqNC10L3RgtGO0YDQuiAo0KLQtdGA0LXRidGD0LopLiDQldC60YHQv9GA0L7QvNGCXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0L7QvNCw0L3QvtCy0LAg0JrQsNGC0LXRgNC40L3QsCwgMTQuMDcuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0Njc2NjU3NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0lCb0hSQjQ2cEhRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JPQtdC00ZbQutC1LiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodGU0YDQs9GU0ZTQstCwINCv0L3QsCwgMjUuMDkuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjgwMjAxNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2dVZ3NYd1pVQ2hNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JLQvtC70YzRhC4gwqvQm9GW0YLQvdGW0Lkg0LLRltGC0LXRgNC10YbRjMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0ZTRgNCz0ZTRlNCy0LAg0K/QvdCwLCAyNS4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2ODMwOTA2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvQWtoSlpLSWxCaVVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQqNC/0ZbQvdC00LvQtdGALiDQodC+0L3QsNGC0LjQvdCwIOKEljEsINCGINGH0LDRgdGC0LjQvdCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0ZbQu9GM0LrQvtCy0YHRjNC60LAg0ITQstCwLCAyOC4wNy4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2ODU0NTM0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvVFl3TFNxZC1hT1FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4gwqvQqNCw0YDQvNCw0L3QutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRltC70YzQutC+0LLRgdGM0LrQsCDQhNCy0LAsIDI4LjA3LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY4ODAzNzNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdkpQdklzRXZmcWdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQoNC10LLRg9GG0YzQutC40LkuINCf0ZbRgdC90Y8yLiDQmi4g0KfQtdGA0L3Rli4g0JXRgtGO0LQsINGC0LIuIDIxOSwg4oSWMTVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQutC+0YDQvtGF0L7QtNGM0LrQviDQhNCy0LPQtdC90ZbRjywgMjQuMDcuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjkwNzI2NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9ZYWdlMktGRW9Mc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCb0ZbRgdGCLiDCq9Cu0L3QsNGG0YzQutC40Lkg0LXRgtGO0LTCuyDihJYxXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0ITQstCz0LXQvdGW0Y8sIDAzLjAzLjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY5NDQ2MjlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvd1FYdFdNeTZTcndcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQm9Cw0YHRgtC+0LLQtdGG0YzQutC40LkuIMKr0IYg0LfQsNC00LfQstC+0L3QuNC70Lgg0LTQt9Cy0L7QvdC4IFxcdTIwMjbCuyAg4oSWNSDQtyDRhtC40LrQu9GDIMKrMTIg0KDQsNGG0ZbQvtC90LDQu9GM0L3QuNGFINC10YHQutGW0LfRltCyINCyINC00L7QtNC10LrQsNGE0L7QvdC90ZbQuSDRgtC10YXQvdGW0YbRliDQtNC70Y8g0YTQvtGA0YLQtdC/0ZbQsNC90L7Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCE0LLQs9C10L3RltGPLCAwMy4wMy4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2OTgyMDkyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvVHIyOEg2NlZlWWtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCWLi3QnC4g0JDRgNC90L4uIMKrUmVuZ2FpbmXCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodGD0YXQsNC9INCU0ZbQsNC90LAsIDA1LjEyLjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDcwMDU1NjlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC95NzBad0tfWURla1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JMuINCa0LvQsNGB0YHQtdC9LiDCq9CS0LDQu9GM0YHQuNC6wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRg9GF0LDQvSDQlNGW0LDQvdCwLCAwNS4xMi4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ3MDMwNzczXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvb2c3SGVFT3ZkZ3dcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCTLiDQkdC10LdcXHUyMDE50Y/Qt9C40YfQvdC40LkuIMKr0J7QuSwg0YMg0LLQuNGI0L3QtdCy0L7QvNGDINGB0LDQtNGDwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQsNGA0LDRgdGO0Log0ITQu9C40LfQsNCy0LXRgtCwLCAyMC4wMi4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ3MDY0NTE1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvNURjaVJ3elNPTFlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCuLiDQktC10YHQvdGP0LouIMKr0JrQsNC30L7Rh9C60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotCw0YDQsNGB0Y7QuiDQhNC70LjQt9Cw0LLQtdGC0LAsIDIwLjAyLjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDcwODM2OTJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8zV0dXQTZxeTFuTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCS0L7Qu9C60L7Qsi4gwqvQn9GW0LQg0LTQvtGJ0LXQvMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0YDQvtCy0LAg0JLRltC60YLQvtGA0ZbRjywgMDcuMDEuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzEwNDE1MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL25zQzd5UFBxcWVNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi4g0KXQsNGB0LvRltC90LPQtdGALiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTQvtGA0L7QstCwINCS0ZbQutGC0L7RgNGW0Y8sIDA3LjAxLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDcxMjY5OTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9yREx4dk5fS1BEUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCR0YPRgNCz0LzRjtC70LvQtdGALiDCq9CS0LXRgdC90Y/QvdC40Lkg0LrQsNC/0ZbQtsK7OyAyLiDQri4g0KnRg9GA0L7QstGB0YzQutC40LkuINCi0LDQvdC10YbRjFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTRjtC6INCT0LvRltCxLCAwNS4wNy4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ3MTU0NzM2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvaExlOEdnMkhfTDhcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCTLiDQkdC10LdcXHUyMDE50Y/Qt9C40YfQvdC40LkuIMKr0KDRg9GB0LDQu9C+0L3RjNC60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpdCy0L7RgdGC0L7QstCwINCS0ZbRgNCwLCAyNy4wNC4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ3MTc4ODM1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZnlkeEoxQ0E4TUFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjIuINCbLiDQhtCy0LDQvdC10L3QutC+LiDCq9CR0LDQsdGD0YHRjy3Qr9Cz0YPRgdGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXQstC+0YHRgtC+0LLQsCDQktGW0YDQsCwgMjcuMDQuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzIxMjI1MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1lvTWZNYXRHa2h3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS4g0JPQsNC50LTQvS4g0KDQvtC90LTQviDQtNC+INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXQvtC80ZbQuiDQmtGW0YDQsCwgMTIuMDMuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzIzODk4OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1lmSnVfd3NXZzY4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JHRltC70LDRh9C10L3QutC+LiDQktCw0LvRjNGBXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCl0L7QvNGW0Log0JrRltGA0LAsIDEyLjAzLjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDcyNTY2NDFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9sVXowek1oQmtDTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JMu0KQuINCT0LXQvdC00LXQu9GMLiDQodC+0L3QsNGC0LjQvdCwINGB0ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfQtdGA0L3Rj9C6INCc0LDRgNGW0Y8sIDI2LjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDcyODI4NzhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9OSi1SaVZvNVpha1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCb0LDQt9Cw0YDQtdC90LrQvi4g0JrQvtC70L7QvNC40LnQutC4XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCn0LXRgNC90Y/QuiDQnNCw0YDRltGPLCAyNi4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ3MzAyNTI0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvaEh4aWtGYlp0RkFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQqNC+0L/QtdC9LiDQn9C+0LvQvtC90LXQtyDRgdC+0LvRjCDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCn0L7RgNC90LXQuSDQr9C90LAsIDA5LjEwLjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDczMjQ2MjVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC93bFBlVTl1b0JCc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQuNC90LAg0LzRliDQsdC10LzQvtC70Ywg0LzQsNC20L5cIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfQvtGA0L3QtdC5INCv0L3QsCwgMDkuMTAuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzM0NzA2MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9XMFhjMjR4UWowSVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0Jku0KEuINCR0LDRhS4g0JTQstC+0LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDQu9GPINC80ZbQvdC+0YA7IDIuINCfLiDQl9Cw0YXQsNGA0L7QstCwLiDCq9CS0L/QtdGA0YjQtSDQvdCwINCw0YDQtdC90ZbCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQr9C60LjQvNC10L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgMjMuMTAuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzM3NjA3NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0NHTG9rT0JzZ3l3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQnC4g0JvQuNGB0LXQvdC60L4uIMKr0KHRg9C80L3QuNC5INGB0L/RltCywrs7IDIuINCQLiDQpdCw0YfQsNGC0YPRgNGP0L0uIMKr0JzRg9C30LjRh9C90LAg0LrQsNGA0YLQuNC90LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQr9C80L/QvtC70YzRgdGM0LrQsCDQlNCw0YBcXHUyMDE50Y8sIDE0LjA2LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDczOTg1MDJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC95ekpGMS1ZSUFzNFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCc0LXQvdC00LXQu9GM0YHQvtC9LiDCq9Cf0ZbRgdC90Y8g0LHQtdC3INGB0LvRltCywrssINGC0LIuMzA7IDIuINCbLiDQl9Cw0LHQsNGA0LAuINCk0LDQvdGC0LDQt9GW0Y8g0L3QsCDRgtC10LzRgyDRg9C60YDQsNGX0L3RgdGM0LrQvtGXINC90LDRgNC+0LTQvdC+0Zcg0L/RltGB0L3RliDCq9Cd0ZbRhyDRj9C60LAg0LzRltGB0Y/Rh9C90LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkNC60ZbQvNC+0LLQsCDQmtGW0YDQsCwgMzEuMDEuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0ODIzMzczM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3NwX3V0azdTZXhzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS4g0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwg0IYg0YfQsNGB0YLQuNC90LA7IDIuINCGLiDQqNCw0LzQvi4gwqvQktC10YHQvdGP0L3QutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQvtC60L7RhyDQkNGA0YLQtdC8LCAyMS4wOS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ4MjczODM0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvckhTZzBxWUU0RW9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLtChLiDQkdCw0YUuINCQ0LvQtdC80LDQvdC00LAg0Lcg0J/QsNGA0YLQuNGC0Lgg0LTQviDQvNGW0L3QvtGAOyAyLiDQpC4g0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0g0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0L7RgNC10LnQutC+INCg0L7QvNCw0L0sIDExLjAxLjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDgyOTkzMTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9xX2VBZzgweEM4VVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0Jku0KEuINCR0LDRhS4g0KXQvtGA0LDQuyDQtyDQutCw0L3RgtCw0YLQuCDihJYxNDcgwqtKZXN1cyBibGVpYmV0IG1laW5lIEZyZXVkZcK7OyAyLiDQhi4g0KjQsNC80L4uINCf0YDQtdC70Y7QtNGW0Y8g4oSWOCDCq0FuZGFudGUsIFF1YXNpIGNhbXBhbmHCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQktC10YDQt9GD0L0t0KDQvtC70ZbQvdCz0LXRgCDQotC10YDQtdC30LAsIDA5LjEwLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDgzMjA4ODZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8xT1h5TFJRZnkxQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCo0ZbRgtGC0LUuINCV0YLRjtC0IOKEljIyLCDRgtCyLjY4XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LXRgNC80LDQvdGO0Log0KHQvtGE0ZbRjywgMjEuMTIuMjAwNyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0ODMzODUwNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0NSdWNyVU1RYzlRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQo9C60YDQsNGX0L3RgdGM0LrQsCDQvdCw0YDQvtC00L3QsCDQv9GW0YHQvdGPINCyINC+0LHRgNC+0LHRhtGWINCeLiDQodCw0YDQsNGC0YHRjNC60L7Qs9C+IMKr0KbQstGW0YLQtSAg0YLQtdGA0LXQvcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LXRgNC80LDQvdGO0Log0KHQvtGE0ZbRjywgMjEuMTIuMjAwNyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0ODM2NDA3OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLy1XQ0NHN3BzTHVzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQo9C60YDQsNGX0L3RgdGM0LrQsCDQvdCw0YDQvtC00L3QsCDQv9GW0YHQvdGPINCyINC+0LHRgNC+0LHRhtGWINCTLiDQkdC10LdcXHUyMDE50Y/Qt9C40YfQvdC+0LPQviDCq9Ce0LksINGDICAg0LLQuNGI0L3QtdCy0L7QvNGDINGB0LDQtNGDwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQvtC80ZbQu9C60L4g0JDQvdCw0YHRgtCw0YHRltGPLCAwOC4wMy4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ4NDI3NDQzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvUEZ0cjdyd2d2cElcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQmtGD0LvQsNGDLCDQodC+0L3QsNGC0LjQvdCwIOKEljEsINGC0LIuMjBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQvtC80ZbQu9C60L4g0JDQvdCw0YHRgtCw0YHRltGPLCAwOC4wMy4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ4NDQ5MTE4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvOEhCVkJzVGJDaGNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSAg0LzRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0LXRgdGM0LrQviDQnNCw0YDRltGPLCAyMi4wNi4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ4NDY5MDc1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvcHp3TGVKWFZnbnNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQkdGW0LvQsNGILiDCq9CT0YPRhtGD0LvRjNGB0YzQutCwINC/0LjRgdCw0L3QutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNC10YHRjNC60L4g0JzQsNGA0ZbRjywgMjIuMDYuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0ODU5MTY1M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2VrdG5Dbkw2eUdVXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JzQvtGI0LrQvtCy0YHRjNC60LjQuS4g0JXRgtGO0LQg4oSWNiwg0YLQsi4gNzJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNC40L3QuNC6INCU0ZbQsNC90LAsIDE5LjAuMjAwNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0ODYyMzQ4MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2tGQ1dYX21WdFE0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JrQvtC30LDRgNC10L3QutC+LiDQktCw0LvRjNGBXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDQuNC90LjQuiDQlNGW0LDQvdCwLCAxOS4wLjIwMDYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDg2OTc3MTFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9KS3FHTFZKQnNMa1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JQuINCp0LjRgNC40YbRjy4gwqvQo9C60YDQsNGX0L3RgdGM0LrQuNC5INC10YLRjtC0wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNGD0YjQutC+0LLRgdGM0LrQsCDQktCw0LvQtdGA0ZbRjywgMTcuMDEuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0ODgxNjEwM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0dPaFBhX0FHeHVvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0IbQstCw0L3QtdC90LrQvi4gwqvQldC5INCb0Y7Qu9GWINC20LUg0LzRliwg0LvRjtC70Y7Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0YPRiNC60L7QstGB0YzQutCwINCS0LDQu9C10YDRltGPLCAxNy4wMS4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ4ODY1Mzk2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTmExQXFvZ0daV2NcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLtChLiDQkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YDQtSDQvNGW0L3QvtGAOyAyLiDQhi4g0KjQsNC80L4uIMKr0JLQtdGB0L3Rj9C90LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0ZbQtNC10L3QutC+INCU0LDRgFxcdTIwMTnRjywgMjAuMDUuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0ODk0NDUxOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL05NbDVtQ1llczA4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JHRgNC40LvRltC9LiDQotC+0LrQsNGC0LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRg9C00LjRhyDQntC70YzQs9CwLCAxNC4xMC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5MDE0ODQ0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTXUtcEJZZHRvWFlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQnNC10L3QtNC10LvRjNGB0L7QvS4gwqvQn9GW0YHQvdGPINCx0LXQtyDRgdC70ZbQssK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0YPQtNC40Ycg0J7Qu9GM0LPQsCwgMTQuMTAuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTA0ODI2MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2pmcnJmMC11elFnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JTRjtCx0Y7Qui4gwqvQlNC30LjSkdCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0ITRgNC+0YjQutGW0L3QsCDQkNC90L3QsCwgMDguMTEuMjAwONGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5NDg4NDI4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMzZ0UF9xTEVaa1FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQm9GW0YHRgi4gwqvQktGC0ZbRhdCwwrsg4oSWMlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQhNGA0L7RiNC60ZbQvdCwINCQ0L3QvdCwLCAwOC4xMS4yMDA40YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDk1MjA3MjBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8yU3BrSUNkNHdHZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCR0L7RgNC00Y7Qs9C+0LLQsC4gwqvQo9C60YDQsNGX0L3RgdGM0LrQuNC5INGA0L7QvNCw0L3RgcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCW0LDRgNGW0Lkg0KHQvtGE0ZbRjywgMTguMDguMjAwOdGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5NTM3ODY3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTVEwOGh2VkdGQXdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQmtC+0LvQtdGB0YHQsC4g0JrQvtC70L7QvNC40LnQutCwINGE0LAg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQltCw0YDRltC5INCh0L7RhNGW0Y8sIDE4LjA4LjIwMDnRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTU3NDQxMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzJTLTJJR2FJbFRNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpS4g0JDQu9GM0YTQstC10L0uIMKr0KHQvtC90Y/Rh9C90ZYg0LfQsNC50YfQuNC60LjCuyDQtyDRhtC40LrQu9GDIMKr0JrQsNGA0YLQuNC90LrQuCDQqNGF0LXRgMK7LNGC0LIuMTcg4oSWMVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0L3RgdGM0LrQsCDQkNC90LDRgdGC0LDRgdGW0Y8sIDIzLjA3LjIwMDnRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTU5NDYxNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0xHNGEyb3VFNHo0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQry4g0JHQvtCx0LDQu9GW0LouIMKr0JHRg9GA0YXQu9C40LLQuNC5INCy0L7QtNC+0YHQv9Cw0LTCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0L3RgdGM0LrQsCDQkNC90LDRgdGC0LDRgdGW0Y8sIDIzLjA3LjIwMDnRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTYxMTA0NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1lLZUtrRFBManlRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQky4g0JvRltGF0L3QtdGALiDQoNC+0L3QtNC+IMKr0JLQtNC+0LzQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDRgtC+0LvQuNC6INCU0LDRgNC40L3QsCwgMDEuMDkuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTYzMTU1OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzYzRkxHYVl4U0hBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JzQsNC50ZTRgC4gwqvQhtC90LTRltCw0L3RgdGM0LrQsCDRgdC10YDQtdC90LDQtNCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNGC0L7Qu9C40Log0JTQsNGA0LjQvdCwLCAwMS4wOS4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5NjU3NDE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvY0R5bnpYLU9QWWtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLiDQp9C10YDQvdC10YbRjNC60LjQuSwg0LDRgNCw0L3Qti4g0J4uINCo0LDQstCw0YDQtNCw0LrQsC7Cuy4g0J7QuSwg0YMg0LvRg9C30ZYg0YfQtdGA0LLQvtC90LAg0LrQsNC70LjQvdCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRltGB0LDRgNC10YbRjCDQhtCy0LDQvSwgMjQuMDQuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTY4MjE4NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2Z0RnZMWFRYMjlVXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JTQstC+0YDQttCw0LouIMKr0JTQttCw0LfQvtCy0LjQuSDQtdGC0Y7QtMK7IOKEljEg0LTQviDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0ZbRgdCw0YDQtdGG0Ywg0IbQstCw0L0sIDI0LjA0LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDk3MDEzNTZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9OSFRCdjFqR0JjWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCa0L7RgNC10LvQu9GWLiDQodCw0YDQsNCx0LDQvdC00LAg0LzRliDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0ZbRh9GD0Log0KDQvtC80LDQvSwgMjkuMTAuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTcxODY4NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2FaT1RXTjdMMGowXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0JzQvtGF0L3QsNGH0LXQstCwLiDCq9Cb0ZbRgtC90ZbQuSDQstC10YfRltGAwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRltGH0YPQuiDQoNC+0LzQsNC9LCAyOS4xMC4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5NzQwNTYxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMEFVTkh0NTItM1VcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINChLiDQltC00LDQvdC+0LIuINCf0YDQtdC70Y7QtDsgMi4g0JAuINCR0LDQsdCw0LTQttCw0L3Rj9C9LiDCq9CS0LDQs9Cw0YDRiNCw0L/QsNGC0YHRjNC60LjQuSDRgtCw0L3QtdGG0YzCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC70ZbQvNC+0LLQuNGHINCU0LDQstC40LQsIDA5LjA3LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDk3NzgzNDlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9RSGRyUWt6VVR6VVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCo0LXQvdGC0Y7RgNC6ICjQotC10YDQtdGJ0YPQuikuINCg0LDQv9GB0L7QtNGW0Y8gwqvQlNC+INGB0LLRltGC0LvQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7Qv9C40YfQtdC90YHRjNC60LAg0JTQsNGAXFx1MjAxOdGPLCAzMC4wNC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5ODAxMjM4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTk1xeDJvVV92ZnNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQqNC10L3RgtGO0LogKNCi0LXRgNC10YnRg9C6KS4gwqvQodC70YzQvtC30LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0L/QuNGH0LXQvdGB0YzQutCwINCU0LDRgFxcdTIwMTnRjywgMzAuMDQuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTgxODc5OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLy1qM3hEMHk5aGlZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS7QoS4g0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINC00L4g0LzRltC90L7RgCwg0JTQotCaLdCGOyAyLiDQpC4g0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0g0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YDQsNCy0YfRg9C6INCc0LDRgNGW0Y8sIDE0LjA2LjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDk4NjU1NjlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9RWDkzNllaZTdKTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCR0ZbQu9Cw0YguIMKr0JPRg9GG0YPQu9GM0YHRjNC60LAg0L/QuNGB0LDQvdC60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGA0YPRgtC10L3QutC+INCU0LDRgNC40L3QsCwgMTAuMTEuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTg5Nzk5N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0ZtRGtWdlVNUnlNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi4g0JDRhNCw0L3QsNGB0LXQvdC60L4uIMKr0JvQtdCx0ZbQtNGMwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRgNGD0YLQtdC90LrQviDQlNCw0YDQuNC90LAsIDEwLjExLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDk5MjE0NzBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9wTTE1MHFkQkFNZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCo0LDQvNC+LiDCq9CS0LXRgdC90Y/QvdC40Lkg0LTQvtGJwrsg0ZbQtyDRhtC40LrQu9GDIMKr0JPRg9GG0YPQu9GM0YHRjNC60ZYg0LDQutCy0LDRgNC10LvRlsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCb0LXQstGH0YPQuiDQotC40LzQvtGE0ZbQuSwgMTkuMTEuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDA1Mzc0OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2RfcGZnYmNvMzVJXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjyDQvNGWINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQtdCy0YfRg9C6INCi0LjQvNC+0YTRltC5LCAxOS4xMS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwMTA4MjUyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvNTlHV1Y1X3ItcXdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCTLiDQk9C10L3QtNC10LvRjC3Qri4g0KXQsNC70YzQstC+0YDRgdC10L0uINCf0LDRgdCw0LrQsNC70ZbRjyDQu9GPINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNCz0LTQuNGB0Y7QuiDQktGW0LrRgtC+0YDRltGPLCAyMy4xMC4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwMTM5ODEwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZnBtYUhaZzQ2RGdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQlNGA0LXQvNC70Y7Qs9CwLiDCq9Cb0ZbRgNC40YfQvdCwINC/0ZbRgdC90Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LPQtNC40YHRjtC6INCS0ZbQutGC0L7RgNGW0Y8sIDIzLjEwLjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTAxNTcxMTBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9Tb182cTFtdmxjY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JsuINCo0YPQutCw0LnQu9C+LiDCq9Ci0L7QutCw0YLQsC3QmtCw0LzQv9Cw0L3QsMK7OyAyLiDQpC4g0KjQvtC/0LXQvS4gwqvQpNCw0L3RgtCw0LfRltGPLdC10LrRgdC/0YDQvtC80YLCuyDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNC70Y/RgNGH0YPQuiDQhNC70ZbQt9Cw0LLQtdGC0LAsIDI0LjA4LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTAxNzczNDZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC90Y0RWbW4tQTBjc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JkuINCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDQvNGWINC80ZbQvdC+0YAsINCGINGH0LDRgdGC0LjQvdCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDRgNGC0LjQvdC40YjQuNC9INCS0LvQsNC00LjRgdC70LDQsiwgMDguMDYuMjAwNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDIyNTk1NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0huRHFEZmh2WVRnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JvQuNGBLiDCq9Cb0LXQs9C10L3QtNCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNGA0YLQuNC90LjRiNC40L0g0JLQu9Cw0LTQuNGB0LvQsNCyLCAwOC4wNi4yMDA2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwMjYzMjA4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvbWZvOFg1RFFkTTRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLiDQkdC+0YDRgtC60LXQstC40YcuINCV0YLRjtC0LCDRgtCyLjE1IOKEljlcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNGF0L3RltGG0YzQutCwINCS0LvQsNC00LjRgdC70LDQstCwLCAwMy4xMS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwMzMwMjg1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvX21IYnhZalhWdW9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCdLiDQndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4g0JLQsNC70YzRgSDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNGF0L3RltGG0YzQutCwINCS0LvQsNC00LjRgdC70LDQstCwLCAwMy4xMS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwMzU1ODI1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvRFlBeVBEamVERG9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQoS4g0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGA0LUg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC10YnQtdGA0Y/QutC+0LIg0JrQvtGB0YLRj9C90YLQuNC9LCAwOC4wOC4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwMzc1NDE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMUJKQXJDdjM5X0FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLiDQkdC+0YDRgtC60LXQstC40YcuIMKr0J/RgNC+0LPRg9C70Y/QvdC60LAg0JDQu9GD0L/QutC+0Y4t0KHRhdGW0LTQvdCwINGW0LTQuNC70ZbRj8K7INC3INGG0LjQutC70YMgwqvQmtGA0LjQvNGB0YzQutGWINC10YHQutGW0LfQuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LXRidC10YDRj9C60L7QsiDQmtC+0YHRgtGP0L3RgtC40L0sIDA4LjA4LjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA0MTE4NjhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC85eC15TDJuTFRhY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCo0L7Qv9C10L0uINCS0LDQu9GM0YEsINGC0LIuIDY5IOKEljI7IDIuINCcLiDQm9C40YHQtdC90LrQvi4g0JXQutGB0L/RgNC+0LzRglwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNGW0YHQtdGA0YPQuiDQnNCw0YDRltCw0L3QvdCwLCAxOS4wOC4yMDA3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNDMwNjEwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTWQ4dHlRRVAzSWdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCbLiDQoNC10LLRg9GG0YzQutC40LkuINCf0ZbRgdC90Y87IDIuINCGLiDQnNC+0YXQvdCw0YfQvtCy0LAuINCV0YLRjtC0LdC60LDRgNGC0LjQvdCwIMKr0JzQvtGA0LXCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC+0YUg0J3QsNC00ZbRjywgMDEuMTAuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDQ0NzY0NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1JPNHhLZnR6cng4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS4g0JPQsNC50LTQvS4gwqvQo9Cz0L7RgNGB0YzQutC1INGA0L7QvdC00L7CuyDQtyDCq9Ck0L7RgNGC0LXQv9GW0LDQvdC90L7Qs9C+INGC0YDRltC+wrsg0YHQvtC70Ywg0LzQsNC20L7RgDsgMi4g0IYuINCR0LXRgNC60L7QstC40YcuINCf0YDQtdC70Y7QtCDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0L3QsNGB0Y7QuiDQmtCw0YDQvtC70ZbQvdCwLCAwNS4wNy4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNDgzMjg4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvYTl3SzhNeFg5ek1cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCkLiDQqNC+0L/QtdC9LiDQpNCw0L3RgtCw0LfRltGPLdC10LrRgdC/0YDQvtC80YIg0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAOyAyLiDQkC4g0KXQsNGH0LDRgtGD0YDRj9C9LiDQotC+0LrQsNGC0LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0L3QsNGB0Y7QuiDQotCw0YDQsNGBLCAxMy4xMC4yMDA3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNTIxODk1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvcEpTYXlZWEpRejRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4gwqvQntGB0ZbQvdC90Y8g0L/RltGB0L3Rj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0L/QsNGA0Y/QuiDQhtGA0LjQvdCwLCAzMC4wNC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNTQxMDE1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZERPcDhNN2JEYWtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCTLiDQk9C10L3QtNC10LvRjC4g0JrQsNC/0YDQuNGH0ZbQvlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntC/0LDRgNGP0Log0IbRgNC40L3QsCwgMzAuMDQuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDU1NzQ0MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL193bk01NjV2V2I4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQly4g0KTRltCx0ZbRhS4g0J/QvtC10LzQsDsgMi7Qmi4g0JTQtdCx0Y7RgdGB0ZYuIMKr0JvRj9C70YzQutC+0LLQuNC5INC60LXQui3Rg9C+0LrCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntGB0YLQsNC/0LXQvdC60L4g0JDQvdC90LAsIDI2LjA4LjIwMDkg0YAu0L0uICgyLdC40Lkg0YDRltC6INC90LDQstGH0LDQvdC90Y8pXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA1NzM5NzFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC90SUJIWk1WYjZPb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JouINCn0LXRgNC90ZYuINCV0YLRjtC0IOKEljE1LCDRgtCyLjI5OVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0L3Rh9C10L3QutC+INCh0L7RhNGW0Y8sIDA4LjAuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDYxNDM0M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL21HUHRVVWRyNFFvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0KjQsNC80L4uIMKr0JPRg9C80L7RgNC10YHQutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNC90YfQtdC90LrQviDQodC+0YTRltGPLCAwOC4wLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA2MzY2MDRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9xZmM4dGY2bk0xWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCf0YDQsNGG0Y7Qui4gwqvQndCw0LLQtdGB0L3RlsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LvQtdGI0LrQviDQhtCz0L3QsNGC0ZbQuSwgMjMuMTAuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDY0OTM3OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0VUbENWSlo1czlRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0JvRltGB0YIuIMKr0JLRgtGW0YXQsMK7IOKEljJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/Qu9C10YjQutC+INCG0LPQvdCw0YLRltC5LCAyMy4xMC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNjY0MTExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvLVYzdDJmbVN2ZlFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0LzRliDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LDQtNC60L7QstGB0YzQutCwINCQ0LvRltC90LAsIDMwLjA3LjIwMTcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA2Nzk2MjFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9DXzZBeG56Mk9NQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCT0YDRltCzLiDCq9CG0LzQv9GA0L7QstGW0LfQsNGG0ZbRj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LDQtNC60L7QstGB0YzQutCwINCQ0LvRltC90LAsIDMwLjA3LjIwMTcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA3MDUxODBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9ENXhCSDVUdWgzUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCv0LrQuNC80LXQvdC60L4uIMKr0JzRgNGW0Zcg0L3QsCDQsdC10YDQtdC30ZYg0LzQvtGA0Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQoNC10LTRjNC60LAg0J/QvtC70ZbQvdCwLDE2LjEyLjIwMDnRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDcyMzA1MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2d3SVdiTFhDNjdrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQky4g0JHQtdC3XFx1MjAxOdGP0LfQuNGH0L3QuNC5LiDQldGC0Y7QtCDihJYxNyDCq9CR0YPRgNC10LLRltGB0L3QuNC6wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQtdC00YzQutCwINCf0L7Qu9GW0L3QsCwxNi4xMi4yMDA50YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA3NDYxMDJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC82Y1M2aG5SOHJLZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCa0YPQu9Cw0YMuINCh0L7QvdCw0YLQuNC90LAg4oSWMSwg0YLQsi42MDsgMi4g0JouINCS0ZbQui4g0J/QvtC70L7QvdC10LdcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQvtCx0YPQu9GP0Log0JzQuNC60L7Qu9CwLDA0LjA1LjIwMTDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDc2Njc4MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1BJOThHVmQ5Z0tzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLiDQlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPIOKEljgsINGE0LAg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQoNGD0L/QsCDQkNC70YzQsdC10YDRgiwgMzEuMDUuMjAwNyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDc5NjM5MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3ZIWlFCOXVLd0ZzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0J3QtdC20LjQs9Cw0LkuIMKr0J/RgNC+0YXQsNC90L3Rj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0YPQv9CwINCQ0LvRjNCx0LXRgNGCLCAzMS4wNS4yMDA3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwODEzNDYyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2lyWTRkYmJLZEE4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KHQutC+0YDQuNC6LiDCq9Cc0LXQu9C+0LTRltGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNCy0YDQsNC5INCa0LDRgtC10YDQuNC90LAsIDA0LjA3LjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDgzMDgxOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9Kam9ad2dXVXlHTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCR0LXRgNC60L7QstC40YcuINCi0L7QutCw0YLQsCDQu9GPINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNCy0YDQsNC5INCa0LDRgtC10YDQuNC90LAsIDA0LjA3LjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDgzMDgxMTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9ZdjlZdnMwZmQzRVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JouINCb0LDQstCw0LvQu9C1LiDQmtC+0L3RhtC10YDRgtC90LjQuSDQtdGC0Y7QtCDCq9Cc0LXRgtC10LvQuNC6wrs7IDIuINCGLiDQkdC10YDQutC+0LLQuNGHLiDQotC+0LrQsNGC0LAg0LvRjyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LvQvtCx0L7QtNGP0L3RjtC6INCc0LDRgNCz0LDRgNC40YLQsCwgMjIuMDkuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDg0NDI3OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3hSTWtMV0JiVmNBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JzQvtGG0LDRgNGCLiDQodC+0L3QsNGC0LAg0YHRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwg0IYg0YfQsNGB0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQutCw0YfQtdC90LrQviDQkNC80ZbQvdCwLCAwMy4wMy4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwODYzMjE1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQveE5yNHFtTkZBdm9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCfLiDQl9Cw0YXQsNGA0L7Qsi4g0KLQvtC60LDRgtCwLdC/0YDQtdC70Y7QtNGW0Y9cIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQutCw0YfQtdC90LrQviDQkNC80ZbQvdCwLCAwMy4wMy4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwODc2ODgzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZ0ZFMUYxSHk3R1FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtCRLiDQktCw0L3RhdCw0LvRjC4gQWxsZWdybyDRltC3INCh0L7QvdCw0YLQuNC90Lgg0LvRjyDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0YDQvtGG0LXQvdC60L4g0JDQvdC90LAsIDEyLjA2LjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA4OTA3NTBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9FemJiQVJrc1hsRVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCa0L7QvNC70ZbQutC+0LLQsC4gwqvQnNCw0YjQuNC90LAg0YfQsNGB0YPCuyAo0IbQvdCy0LXQvdGG0ZbRjyDQtyDRhtC40LrQu9GDIMKr0IbQvdGC0LXRgNCy0LDQu9GW0Y/CuylcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLRgNC+0YbQtdC90LrQviDQkNC90L3QsCwgMTIuMDYuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDkwNDU0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0Jrb0xldEpTTUpnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtC40L3QsCDRhNCwINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLRg9GA0YfQuNC6INCh0L7RhNGW0Y8sIDE4LjA1LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA5MjI4MzFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8wNVVsV0toVHQ1OFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCT0YDRltCzLiDQktCw0LvRjNGBXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0YPRgNGH0LjQuiDQodC+0YTRltGPLCAxOC4wNS4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwOTQ2MTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQveU5vdno2VUhUWTBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQktC10YDQvNC10L3QuNGHLCDQvtCx0YDQvtCx0LrQsCDQky4g0JHQtdC3XFx1MjAxOdGP0LfQuNGH0L3QvtCz0L4uIMKr0KfQvtGA0L3QvtCx0YDQuNCy0YbRlsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0YDQtdC90LrQviDQhNC70LjQt9Cw0LLQtdGC0LAsIDAuMDkuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDk1OTE1NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2xJcXRGdG1xWGd3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCDihJYzLCDRgdC+0LvRjCDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0YDQtdC90LrQviDQhNC70LjQt9Cw0LLQtdGC0LAsIDAuMDkuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDk3MjQ4MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0JmdGtKYXl4VVdVXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmy4g0KHRg9GF0L7RidC10ZTQstCwLiDQldGC0Y7QtDsgMi4g0J4uINCa0LjQvNC70LjQui4gwqvQnNGW0L3RltCw0YLRjtGA0L3QsCDQm9C10L7QvdGC0L7QstGW0LDQvdCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfQvNC10LvRjtC6INCQ0L3QvdCwLDIyLjA1LjIwMDnRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTAxOTk3MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzFUS0NncldBandBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINGB0L7Qu9GMINC80ZbQvdC+0YAg0Lcg0JTQotCaLdCGXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LXQstGH0YPQuiDQndGW0LrQvtC70LXRgtGC0LAsIDI2LjA0LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE0MTYzNzZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvd2djX2tMSUlpNmdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLiDQkdC+0YDRgtC60LXQstC40YcuINCV0YLRjtC0INGE0LAg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQqNC10LLRh9GD0Log0J3RltC60L7Qu9C10YLRgtCwLCAyNi4wNC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNDM5MTA5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMjdNUkpzWlV1ZkFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0YHQvtC70Ywg0LzRltC90L7RgCDQtyDQlNCi0Jot0IZcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0K/QvdGH0YPQuiDQktCw0LvQtdGA0ZbRjywgMTAuMDYuMjAwNyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTQ1MDg4MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3RyRlBBMUp4eGFzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS4g0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwg0IYg0YfQsNGB0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0K/QvdGH0YPQuiDQktCw0LvQtdGA0ZbRjywgMTAuMDYuMjAwNyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTQ2NzY3OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3hiSnR4ZTJTNjAwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JPRgNGW0LMuIMKr0KHQtdGA0YbQtSDQv9C+0LXRgtCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHRltC70LAg0JrRgdC10L3RltGPLCAxNS4wMS4yMDA1INGALtC9XCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE0Nzc5NDRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8wTl94VjNVNUc4MFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCa0YDQsNC80LXRgC4g0JXRgtGO0LQg4oSWNSwg0LvRjyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0ZbQu9CwINCa0YHQtdC90ZbRjywgMTUuMDEuMjAwNSDRgC7QvVwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNDkxOTgxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZ2NMNUliWGl4U0VcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCkLiDQqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDihJYyLCDRgtCyLiA5OyAyLiDQkC4g0KjRgtC+0LPQsNGA0LXQvdC60L4uINCf0L7QtdC80LAgKNC/0YDQuNGB0LLRj9GH0YPRlNGC0YzRgdGPINCcLtCiLiDQmtC+0LvRj9C00ZYpXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0L7QvdC00LDRgNC10L3QutC+INCU0LXQvdC40YEsIDI4LjAxLjIwMDYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE1MDQ5NDJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC93WTlXRGloX252Y1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCb0LjRgdC10L3QutC+LiDCq9Cf0ZbRgdC90Y8g0LHQtdC3INGB0LvRltCywrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQvtGA0L7QvdGG0L7QstCwINCU0ZbQsNC90LAsIDI1LjAyLjIwMDUg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE1ODQ1ODhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9EWHZ3c09CYW1KY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCc0LXQvdC00LXQu9GM0YHQvtC9LiDCq9Ck0LDQvdGC0LDQt9GW0Y8t0LrQsNC/0YDQuNGBwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQvtGA0L7QvdGG0L7QstCwINCU0ZbQsNC90LAsIDI1LjAyLjIwMDUg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE2MTI0NDZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9wRTdQOU0xaVhSb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JEuINCb0Y/RgtC+0YjQuNC90YHRjNC60LjQuS4g0J/RgNC10LvRjtC00ZbRjyDRgtCyLjQ0IOKEljQ7IDIuINCkLtCb0ZbRgdGCLsKr0JbQtdC90LXQstGB0YzQutGWINC00LfQstC+0L3QuMK7INC3INGG0LjQutC70YMgwqvQoNC+0LrQuCDQvNCw0L3QtNGA0ZbQstC+0LouINCo0LLQtdC50YbQsNGA0ZbRj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDRg9GI0LrQviDQkNC90LDRgdGC0LDRgdGW0Y8sIDE4LjAxLjIwMDZcIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTYyODI3OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0pIcWFqcDVZUHFnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmi4g0JTQtdCx0Y7RgdGB0ZYuINCQ0YDQsNCx0LXRgdC60LAg4oSWMjsgMi4g0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4g0JXRgtGO0LQg4oSWMiwg0YLQsi4xNVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GD0LvRgtGD0YDRj9C9INCf0L7Qu9GW0L3QsCwgMTEuMTAuMjAwNiDRgC7QvVwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNjQxMzE0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgLy8gPGlmcmFtZSB3aWR0aD1cIjQ2OVwiIGhlaWdodD1cIjI2NFwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1VFaVdjRlJjUFJ3XCIgdGl0bGU9XCLQnC4g0JrQvtC70LXRgdGB0LAgJnF1b3Q70KLRgNC4INC60L7Qu9C+0LzQuNC50LrQuCZxdW90Oy5cIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1VFaVdjRlJjUFJ3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JrQvtC70LXRgdGB0LAuIMKr0KLRgNC4INC60L7Qu9C+0LzQuNC50LrQuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LDRiNC10LLRgdGM0LrQsCDQkNC70YzQvtC90LAsIDA0LjA0LjIwMDUg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE2NTEwNzZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9MWE83N2NxckNZd1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JIuINCa0L7RgdC10L3QutC+LiDQldGC0Y7QtCDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YAsINGC0LIuODsgMi4g0KAuINCo0YPQvNCw0L0uIMKr0J/QvtGA0LjQssK7INGW0Lcg0YbQuNC60LvRgyDCq9Ck0LDQvdGC0LDRgdGC0LjRh9C90ZYg0L9cXHUyMDE50ZTRgdC4wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JbQtdC70Y/Qt9C60L4g0KHQvtGE0ZbRjywgMzAuMDkuMjAwNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTY2ODM3M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2tDVXhqLTlSRTNnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0KjQvtC/0LXQvS4g0J/QvtC70L7QvdC10Lcg4oSWMSwg0YLQsi40MFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQndCw0LfQsNGA0YPQuiDQhtGA0LjQvdCwLCAzMC4wNC4yMDA0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNjc3ODA3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvUmowVHdkN05jdzRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQmtC+0LvQtdGB0YHQsC4gwqvQmtC+0L3RgtGA0LDRgdGC0LjCuyDQtyDRhtC40LrQu9GDIMKr0JrQsNGA0YLQuNC90Lgg0JPRg9GG0YPQu9GM0YnQuNC90LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQndCw0LfQsNGA0YPQuiDQhtGA0LjQvdCwLCAzMC4wNC4yMDA0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNjkxNjg2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTm1XTlZzOFFLd0FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCkLiDQqNC+0L/QtdC9LiDQn9C+0LvQvtC90LXQtywg0YLQsi40MCDihJYyOyAyLiDQpC4g0KjQvtC/0LXQvS4g0JrQvtC70LjRgdC60L7QstCwLCDRgtCyLjU3XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0YfQutGD0YDQtdC90LrQviDQkNC90LbQtdC70ZbQutCwLCAwMi4xMC4yMDA0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNzA0MDAyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvWWZVNkdhUmRQMkFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQqNC+0L/QtdC9LiDQn9C+0LvQvtC90LXQtyDRgdC+0LvRjCDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDRgdGC0YPRiNC+0Log0JTQsNGA0LjQvdCwLCAwNy4wMi4yMDA3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNzIwMTgxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvX3dCMGdJX3NOeVlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQkdCw0YDQstGW0L3RgdGM0LrQuNC5LiDQn9GA0LXQu9GO0LTRltGPINGE0LAg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0YHRgtGD0YjQvtC6INCU0LDRgNC40L3QsCwgMDcuMDIuMjAwNyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTczMTAzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1dLcjZZWUM3clF3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQkC4g0JrQvtC70L7QvNGW0ZTRhtGMLiDQldGC0Y7QtC3QtdC60YHQv9GA0L7QvNGCINC70Y8g0LHQtdC80L7Qu9GMINC80LDQttC+0YAsINGC0LIuMjsgMi4g0KQuINCo0L7Qv9C10L0uINCf0L7Qu9C+0L3QtdC3IOKEljEsINGC0LIuIDI2XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0L7QsdC60L4g0JDQvdC90LAt0JTQsNGA0LjQvdCwLCAyMi4xMi4yMDAzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNzQzOTQyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvcDZSS0FpdzV4RHNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCVLiDQk9GA0ZbQsy4gwqvQlyDRjtC90LjRhSDQtNC90ZbQssK7LCDRgtCyLjY1OyAyLiDQpC4g0KjRg9Cx0LXRgNGCLiDQldC60YHQv9GA0L7QvNGCIOKEljIsINGC0LIuOTBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQuNC80YfRg9C6INCQ0L3RjywgMDcuMDguMjAwNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTc2MjMwNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2tLWWplaE1jeDBFXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQoC4g0KjRg9C80LDQvS4gwqvQktGW0LTQtdC90YHRjNC60LjQuSDQutCw0YDQvdCw0LLQsNC7wrssINGC0LIuMjY6INCGLiBBbGxlZ3JvOyAyLiDQri4g0IbRidC10L3QutC+LiDQn9GA0LXQu9GO0LTRltGPIOKEljE0INC80ZYg0LHQtdC80L7Qu9GMINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLRg9GA0YHRjNC60LAg0JzQsNGA0ZbRjywgMTEuMDQuMjAwNSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTc4MjE0NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzJETzlvXzNPSHdFXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQoC4g0KjRg9C80LDQvS4g0J3QvtCy0LXQu9C10YLRgtCwIOKEljEsINGC0LIuMjE7IDIuINChLiDQqNCw0LzRltC90LDQtC4g0JrRgNC10L7Qu9GM0YHRjNC60LjQuSDRgtCw0L3QtdGG0YwsINGC0LIuOTRcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTRltC70ZbQvNC+0L3Rh9GD0Log0JXRgNC90LXRgdGCLCAyMC4wMi4yMDA1INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxODA1NDQ4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvbllJREZxVWx6MElcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCbLiDQoNC10LLRg9GG0YzQutC40LkuINCf0YDQtdC70Y7QtNGW0Y8g0YHRliDQsdC10LzQvtC70Ywg0LzRltC90L7RgDsgMi4g0JouINCU0LXQsdGO0YHRgdGWLiDQlNCy0ZYg0LDRgNCw0LHQtdGB0LrQuFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpdGA0LjQv9C60L4g0ITQu9C40LfQsNCy0LXRgtCwLCAxOS4wNy4yMDA2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxODI3OTQ4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvQzIyU0xnV0FEZWNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCVLiDQk9GA0ZbQsy4g0IbQvNC/0YDQvtCy0ZbQt9Cw0YbRltGPINC90LAg0LTQstGWINC90L7RgNCy0LXQt9GM0LrRliDQvdCw0YDQvtC00L3RliDQv9GW0YHQvdGWLCDRgtCyLjI5OyAyLiDQmi4g0JTQtdGO0YHRgdGWLiDQldGC0Y7QtCDihJYxMVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdC+0LTQvdCw0YDRh9GD0Log0IbQstCw0L3QvdCwLCAxOS4wMS4yMDA0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxODQ0MzQ3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQva3V3Rk5iODN3R01cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCv0L0g0KHRltCx0LXQu9GW0YPRgS4g0JXRgtGO0LQg0LvRjyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LXQvSDQkNC5LCAyNi4wMS4xOTk3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxODYwNTcwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvOVhRSXB6aXRtOUVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLiDQkdC+0YDRgtC60LXQstC40YcuINCf0YDQtdC70Y7QtNGW0Y8g4oSWMywg0YLQsi4zXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LXQvSDQkNC5LCAyNi4wMS4xOTk3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxODczMzc1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMHpVQV8yaWsyVWtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCbLiDQkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LAg4oSWMjQsINGC0LIuIDc4OyAyLiDQnC4g0JvQuNGB0LXQvdC60L4uINCg0LDQv9GB0L7QtNGW0Y8g0L3QsCDRg9C60YDQsNGX0L3RgdGM0LrRliDRgtC10LzQuCDCq9CU0YPQvNC60LAt0YjRg9C80LrQsMK7LCDRgtCyLjE4IOKEljJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRg9GH0LXRgNGP0LLQsCDQnNCw0YDQuNC90LAsIDE3LjA4LjIwMDAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE4ODg1MTFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC90c3FSZV9ZTmlSa1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JwuINCh0LrQvtGA0LjQui4g0JDRgNGW0Y8g0Lcg0J/QsNGA0YLQuNGC0Lgg4oSWNTsgMi4g0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4g0JXRgtGO0LQsINGC0LIuMTUg4oSWOVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0YLQstGW0LnRh9GD0Log0IbRgNC40L3QsCwgMjcuMDUuMjAwMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTkwMTkzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1F3OEh3dFFZdkpBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS4g0JHRgNCw0LzRgS4g0KDQsNC/0YHQvtC00ZbRjyDihJYyLCDRgtCyLjc5XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YDQuNGB0LDQutCw0YDRgyDQndCw0LTRltGPLCAxNC4wMi4yMDAyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxOTE1NzgwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZE9BUUtuX1lCQWNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQmtC+0YHQtdC90LrQvi4g0JXRgtGO0LQg0YTQsCDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YDQuNGB0LDQutCw0YDRgyDQndCw0LTRltGPLCAxNC4wMi4yMDAyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxOTMxOTUxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvT3BwdlFITm1hQWNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQqNGD0LHQtdGA0YIuINCa0LvQsNCy0ZbRgNGI0YLRjtC6LCBEIDk0NiDihJYxIEFsbGVncm8gYXNzYWksIOKEljIgQWxsZWdyZXR0bywg4oSWMyBBbGxlZ3LQvlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0YHRjtC6INCu0LvRltGPLCAxNS4wNi4yMDAwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxOTQ0OTI4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvaWRFWkFBU3FWSUVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQk9Cw0L3RltGG0YzQutC40LkuIMKr0KPRgNC+0YfQuNGB0YLQuNC5INC/0L7Qu9C+0L3QtdC3wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J3RltC60ZbRgtGW0L3QsCDQhi7QoC5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTk1NTQ4NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3dIV3pjT2Jva0ZnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0K/QutGD0YjQtdC90LrQvi4gwqvQodGW0L3QtdC80LDRgtC+0LPRgNCw0YTCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQndGW0LrRltGC0ZbQvdCwINCGLtCgLlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxOTY2ODIzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvRThNV1N2TEl3VVVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCaLiDQlNC10LHRjtGB0YHRli4gwqvQnNGW0YHRj9GH0L3QtSDRgdGP0LnQstC+wrs7IDIuINCaLiDQkdCw0LTQtdC70YzRgiwg0LDRgNCw0L3Qti4g0JQuINCg0LDQtNC90LjRh9CwLiDCq9Cf0ZbRgNCw0YLQuCDQmtCw0YDQuNCx0YHRjNC60L7Qs9C+INC80L7RgNGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQtdCy0LDRgdGC0YzRj9C90L7QstCwINCeLtCELlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxOTg4MTg4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9XG5dIl0sInNvdXJjZVJvb3QiOiIifQ==