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
  @keyframes horizontal-shaking {
    0% { transform: translateX(0) }
    25% { transform: translateX(5px) }
    50% { transform: translateX(-5px) }
    75% { transform: translateX(5px) }
    100% { transform: translateX(0) }
  }
  color: white;
  transition: all 0.5s;
  background-color: black;
  font-family: 'Jura', sans-serif;
  font-size: 20px;
  padding-top: 10px;
  :hover {
    animation: horizontal-shaking 0.5s infinite;
  }`;
const Card = props => {
  const {
    height,
    width
  } = Object(_hooks_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [calculatedWidth, setCalculatedWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(640);

  //handling resize
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
/*! exports provided: LinkContainer, Wrapper, InfoPage2, InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkContainer", function() { return LinkContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage2", function() { return InfoPage2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var _info_page_imgs_judges_2023_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-page-imgs/judges_2023.jpeg */ "./src/components/info-page-imgs/judges_2023.jpeg");
/* harmony import */ var _info_page_imgs_judges_2023_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_info_page_imgs_judges_2023_jpeg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rfs_page_imgs_rfs_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rfs-page-imgs/rfs.png */ "./src/components/rfs-page-imgs/rfs.png");
/* harmony import */ var _rfs_page_imgs_rfs_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_rfs_page_imgs_rfs_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _info_page_imgs_Poster_2024_ua_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-page-imgs/Poster_2024_ua.png */ "./src/components/info-page-imgs/Poster_2024_ua.png");
/* harmony import */ var _info_page_imgs_Poster_2024_ua_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_info_page_imgs_Poster_2024_ua_png__WEBPACK_IMPORTED_MODULE_5__);






const LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const A = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a`
  text-align: left;
  font-family: "Segoe UI", serif;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 35px;
  font-size: 35px;
  color: darkblue;
  text-decoration: none;
  transition: all 0.5s;

  :hover {
    color: darkred;
  }
`;
const P = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  @keyframes horizontal-shaking {
    0% { transform: translateX(0) }
    25% { transform: translateX(5px) }
    50% { transform: translateX(-5px) }
    75% { transform: translateX(5px) }
    100% { transform: translateX(0) }
  }
    
  margin-top: 2px;
  font-size: 40px;
  font-family: 'Jura', sans-serif;
  font-weight: 600;
  color: darkred;
  text-align: center;
  :hover{
    animation: horizontal-shaking 0.5s infinite;
  }
`;
const Poster = props => {
  const PosterImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
      margin: 5px;
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
    imgUrl: _rfs_page_imgs_rfs_png__WEBPACK_IMPORTED_MODULE_4___default.a
  }));
};
const InfoPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://docs.google.com/document/d/11DCmhXJRjgQ4PpAQUniL7e6BrTWsqAt2/edit?usp=drive_link&ouid=113883921299144449053&rtpof=true&sd=true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), " \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://docs.google.com/document/d/1OD0IkMgQBZX-ebBQfzs8X2mL1hJPoMLs/edit?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), " \u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043A\u043E\u043C\u0456\u0442\u0435\u0442 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0443 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, null, "\u0410\u0444\u0456\u0448\u0430(ua)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Poster, {
    imgUrl: _info_page_imgs_Poster_2024_ua_png__WEBPACK_IMPORTED_MODULE_5___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, null, "\u0421\u043A\u043B\u0430\u0434 \u0436\u0443\u0440\u0456"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Poster, {
    imgUrl: _info_page_imgs_judges_2023_jpeg__WEBPACK_IMPORTED_MODULE_3___default.a
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







const CommonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  background-color: black;
  background-size: contain;
  border: 6px solid #333;
  margin: 20px;
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
  const sectionsForFilter = [`Архівні відео`, `Номінація «Фортепіано соло»`, `Номінація «Фортепіанний ансамбль»`, `Номінація «Додатковий інструмент (фортепіано)»`, `Номінація «Концертмейстер»`, `Про конкурс`, "Рівненські фортепіаннні студії"];
  let infoPage = cardCount === -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoPage__WEBPACK_IMPORTED_MODULE_6__["InfoPage"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoPage__WEBPACK_IMPORTED_MODULE_6__["InfoPage2"], null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegularHeader__WEBPACK_IMPORTED_MODULE_5__["RegularHeader"], {
    cardCount: cardCount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResultsFilter__WEBPACK_IMPORTED_MODULE_2__["ResultsFilter"], {
    sections: sectionsForFilter
  }), isDataInPlace ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommonWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainSectionFlex, null, cards.map(card => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    name: card.name,
    videoUrl: card.videoUrl,
    composition: card.composition,
    key: card.id.$oid
  })))) : infoPage);
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
  background-color: black;
  font-size: 25px;
  transition: all 0.6s;
  font-family: 'Jura', sans-serif;
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
  transition: all 0.6s;
  :hover {
    text-decoration-line: underline;
    text-decoration-color: darkred;
    text-underline-offset: 10px;
    
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
  const markedSectionRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  //handling redLine on resize
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
      case `Номінація «Фортепіано соло»`:
        dispatch({
          type: "group-1"
        });
        break;
      case `Номінація «Фортепіанний ансамбль»`:
        dispatch({
          type: "group-2"
        });
        break;
      case `Номінація «Додатковий інструмент (фортепіано)»`:
        dispatch({
          type: "group-3"
        });
        break;
      case `Номінація «Концертмейстер»`:
        dispatch({
          type: "group-4"
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

/***/ "./src/components/info-page-imgs/Poster_2024_ua.png":
/*!**********************************************************!*\
  !*** ./src/components/info-page-imgs/Poster_2024_ua.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "Poster_2024_ua-c373c9a6fb264d337f64f22f975ecd7f.png";module.exports={src:src,width:2339,height:3308,format:"png",toString:function(){return src;}};

/***/ }),

/***/ "./src/components/info-page-imgs/judges_2023.jpeg":
/*!********************************************************!*\
  !*** ./src/components/info-page-imgs/judges_2023.jpeg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "judges_2023-a78638f599a947cb5b98db9f08e33603.jpeg";module.exports={src:src,width:3600,height:5084,format:"jpeg",toString:function(){return src;}};

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
let additionalInstruments = [];

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
let ensembles = [{
  "videoUrl": "https://www.youtube.com/embed/Q47wA07fcw8",
  "composition": "1. А. Комлікова. «Рок-драйв» з циклу «Інтервалія»; 2. А. Комлікова. «Мінялка-повторялка»",
  "name": "Фортепіанний дует у складі Антонової П. та Комлікової О.",
  "id": {
    "$oid": "56064574517725"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/tuQgC_n-dXs",
  "composition": "1. П. Шольц-М. Канке. Фантазія на тему української народної пісні «Верховина»; 2. М. Скорик. Парафраз на тему Л. Бетховена «До Елізи»",
  "name": "Фортепіанний дует у складі Малярчук Є. та Мох Н.",
  "id": {
    "$oid": "56064574670641"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/EURG6A-1coo",
  "composition": "1. Ф. Шуберт. «Німецький танець»; 2. А. Дворжак. «Слов\u2019янський танець»",
  "name": "Фортепіанний дует у складі Ягодки О. та Ягодки Р.",
  "id": {
    "$oid": "56064574712419"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/IGhpmU4KpgE",
  "composition": "А. Лавіньяк. «Марш-галоп для восьми рук та одинокого роялю»",
  "name": "Фортепіанний квартет у складі Дуб Н., Ткаченко А., Заливадного Р., Менцель А.",
  "id": {
    "$oid": "56064574759904"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/5UFVYszArfc",
  "composition": "Е. Макаров. «Урочиста прелюдія», переклад М. Готліба",
  "name": "Фортепіанний квартет у складі Дуб Н., Ткаченко А., Заливадного Р., Менцель А.",
  "id": {
    "$oid": "56064574798021"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/5i15Aa9plh8",
  "composition": "М. Скорик. «Мелодія», транскрипція О. Шевченко-Міхаловсько",
  "name": "Фортепіанний дует у складі Григор\u2019євої Г.А .та Якуніної О.В.",
  "id": {
    "$oid": "56064574829776"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/1dcmC7FM1go",
  "composition": "М. Канке. «Попурі з пісень військового часу»",
  "name": "Фортепіанний дует у складі Григор\u2019євої Г.А .та Якуніної О.В.",
  "id": {
    "$oid": "56064574860259"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/0spocEjHziM",
  "composition": "М. Скорик. «Приємна прогулянка»",
  "name": "Фортепіанний дует «Експресія» у складі Ганюк І. та Плотнікової Л.",
  "id": {
    "$oid": "56064574897805"
  },
  "group": "архів"
}];
let concertmasters_2 = [{
  "videoUrl": "https://www.youtube.com/embed/8-aqRWstfJs",
  "composition": "Муз. І. Шамо, сл. Д. Луценко. «Києве мій»",
  "name": "Гиза Євгеній, 14.09.2006 р.н.",
  "id": {
    "$oid": "23666125362553"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/itZqtXlEPVo",
  "composition": "Й. Брамс. «Угорський танець» мі мінор (переклад для ная)",
  "name": "Гиза Євгеній, 14.09.2006 р.н.",
  "id": {
    "$oid": "23666125452521"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/O6JmdfF00aI",
  "composition": "В. Єльчанінов. «Ой, люлі»",
  "name": "Мельничук Анастасія, 19.11.2008 р.н.",
  "id": {
    "$oid": "23666125511366"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/5GMbXyImlQM",
  "composition": "В.Єльчанінов.«Теремок»",
  "name": "Мельничук Анастасія, 19.11.2008 р.н.",
  "id": {
    "$oid": "23666125558919"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/i08ZvDEj5SM",
  "composition": "Р. Ловланд. « Song from a Secret Garden»",
  "name": "Руссу Ганна, 25.10.2006 р.н.",
  "id": {
    "$oid": "23666125612958"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/rC9qyFtb_5U",
  "composition": "О. Нижанківський. Коломийка соль мінор",
  "name": "Руссу Ганна, 25.10.2006 р.н.",
  "id": {
    "$oid": "23666125653629"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/Tc61KrNikqs",
  "composition": "1. М. Верменич. «Чорнобривці»; 2. Я. Барнич. «Гуцулка Ксеня» (переклад А. Семененко)",
  "name": "Федотова Катерина, 20.04.2011 р.н.",
  "id": {
    "$oid": "23666125703151"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/-l15nHbKf0I",
  "composition": "Українська народна пісня в обробці А. Кос-Анатольського «Чотири воли пасу я»",
  "name": "Алейніков Михайло, 30.06.2005 р.н.",
  "id": {
    "$oid": "23666125744402"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/ghxOHaEBkPo",
  "composition": "Ф. Ліст. «Oh quand je dors»",
  "name": "Алейніков Михайло, 30.06.2005 р.н.",
  "id": {
    "$oid": "23666125799452"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/XPdRpSLvP4A",
  "composition": "1. М. Мангіні. «Execuive»; 2. Дж. Россіні. Арія Берти з опери «Севільський цирульник»",
  "name": "Алексійчук Валерія, 14.03.2004 р.н.",
  "id": {
    "$oid": "23666125843077"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/UBLZ-Lwt2p8",
  "composition": "1. Й. Гайдн. «Світлий погляд»; 2. Муз. О. Білаша, сл. В. Юхимовича. «Журавка»",
  "name": "Грушко Анастасія, 18.01.2006 р.н.",
  "id": {
    "$oid": "23666125900425"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/Ei81ftrRIq0",
  "composition": "1. Муз. Г. Алчевського, сл. Х. Алчевської. «Душа \u2013 се конвалія ніжна», тв. 4, №4; 2. П. Масканьї. Романс Сантуцци з опери «Сільська честь»",
  "name": "Єрошенко Єва, 16.11.2006 р.н.",
  "id": {
    "$oid": "23666125966866"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/VKkr1OUWXR0",
  "composition": "1. П. Масканьї. Романс Сантуцци  з опери «Сільська честь»; 2. О. Білаш. «Нікому не кажи»",
  "name": "Каштелян Олександра, 11.02.2004 р.н.",
  "id": {
    "$oid": "23666126009202"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/SfBxPQEHh0g",
  "composition": "Yukiko Isomura. «The street where the wind lives»",
  "name": "Ден Ай (Deng Ai), 26.01.1997р.н.",
  "id": {
    "$oid": "23666126062441"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/xqv6gD8viFc",
  "composition": "Qian Lei. «Wish»",
  "name": "Ден Ай (Deng Ai), 26.01.1997р.н.",
  "id": {
    "$oid": "23666126093490"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/eKn8RvFUYr0",
  "composition": "І. Соневицький. Цикл пісень на вірші І.Франка «Зів\u2019яле листя»: «Неперехідним муром», «Твої очі», «Хоч ти не будеш квіткою цвісти»",
  "name": "Поліщук Катерина, 11.01.1998 р.н.",
  "id": {
    "$oid": "23666126157155"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/jgu93Nkr6ig",
  "composition": "А. Вайнен. Рапсодія для саксофону і фортепіано, І, ІІ, ІІІ частини",
  "name": "Сав\u2019юк Власта, 16.07.2001 р.н.",
  "id": {
    "$oid": "23666126201041"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/GHOUShz1z1Y",
  "composition": "В. Моцарт. Арія Аспазії з опери «Мітрідат»",
  "name": "Салтикова Олександра, 18.04.1998 р.н.",
  "id": {
    "$oid": "23666126242825"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/O_ouxm7ieRc",
  "composition": "Муз. Б. Фільц, сл. І. Франка. «Я не тебе люблю»",
  "name": "Салтикова Олександра, 18.04.1998 р.н.",
  "id": {
    "$oid": "23666126267614"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/Yu20IlIhxMg",
  "composition": "1.Ю. Мейтус. Арія Анни з опери «Украдене щастя»; 2.Муз. В. Барвінського, сл. Т. Шевченкоа. «Ой, люлі, люлі, моя дитино»",
  "name": "Сасюк Юлія, 15.06.2000 р.н.",
  "id": {
    "$oid": "23666126302759"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/Dr9lgOYo5ww",
  "composition": "1. М. Скорик. Елегія; 2. Е. Северн. «Польський танець»",
  "name": "Кисельова Ірина Ігорівна",
  "id": {
    "$oid": "23666126328069"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/pRV2_g_cOSs",
  "composition": "1. О. Сандлер. «Мрія»; 2. Українська народна пісня в обробці О. Наконечного «Їхав козак за Дунай»",
  "name": "Нікітіна Ірина Русланівна",
  "id": {
    "$oid": "23666126362469"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/RbOaivc5u-c",
  "composition": "А. Вайнен. Рапсодія для саксофона та фортепіано, І частина",
  "name": "Смик Лариса Юріївна",
  "id": {
    "$oid": "23666126427256"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/lGPZnM5ChbY",
  "composition": "П. Крестон. Соната для саксофона з фортепіано, ІІ частина",
  "name": "Смик Лариса Юріївна",
  "id": {
    "$oid": "23666126535189"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/RmNTjjppI8k7",
  "composition": "1. К.М. Вебер. Концерт №2 для кларнета з оркестром мі бемоль мажор, тв. 74, І частина; 2. Б. Ковач. «Ich hegrusse Sie, Heer Johann Strauss»",
  "name": "Бетюга Андрій Станіславович",
  "id": {
    "$oid": "23666126603143"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/VO48uozzjNY",
  "composition": "Ф. Пуленк. Соната для флейти й фортепіано, ІІ частина",
  "name": "Томчук Анна Вікторівна",
  "id": {
    "$oid": "23666126630094"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/8or-JVjZysM",
  "composition": "Е. Бозза. «Агрестид» для флейти й фортепіано",
  "name": "Томчук Анна Вікторівна",
  "id": {
    "$oid": "23666126655816"
  },
  "group": "архів"
}];
let fortepianoSolo = [{
  "videoUrl": "https://youtube.com/embed/VHtYv6Xo28E",
  "composition": "В. Дамкомб. Сонатина до мажор, І частина",
  "name": "Ваширенко Діана, 12.10.2013 р.н.",
  "id": {
    "$oid": "49463840526882"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/i63bXHyKWoA",
  "composition": "М. Шентюрк (Терещук). «Менует граційної балерини»",
  "name": "Ваширенко Діана, 12.10.2013 р.н.",
  "id": {
    "$oid": "49463840610473"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/6EdS2G0VHcg",
  "composition": "Й. Бах. Менует соль мажор",
  "name": "Вовк Артур, 20.10.2014 р.н.",
  "id": {
    "$oid": "49463840672134"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/LFS5rjlFf3Q",
  "composition": "М. Жербін. «Український танець»",
  "name": "Вовк Артур, 20.10.2014 р.н.",
  "id": {
    "$oid": "49463840720157"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/qTxnzQqFRZY",
  "composition": "Й. Бах. «Маленька прелюдія» соль мінор",
  "name": "Житарюк Кіра, 10.09.2013 р.н.",
  "id": {
    "$oid": "49463840782238"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/cRbs9DO-M58",
  "composition": "А. Хуторянський. «Вогнівочка-стрибунівочка»",
  "name": "Житарюк Кіра, 10.09.2013 р.н.",
  "id": {
    "$oid": "49463840890368"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/anoheqQw_Vo",
  "composition": "Л. Шукайло. «Лебідь»",
  "name": "Кисельова Єлизавета, 11.01.2014 р.н.",
  "id": {
    "$oid": "49463840933566"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/WnZY6n9Cn_4",
  "composition": "О. Гедіке. Етюд до мажор",
  "name": "Кисельова Єлизавета, 11.01.2014 р.н.",
  "id": {
    "$oid": "49463840975326"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/0iMoae2japo",
  "composition": "С. Майкапар. «В кузні»; Б. Фред. «Танець ельфів»",
  "name": "Кравчук Мілана, 09.01.2015 р.н.",
  "id": {
    "$oid": "49463841034039"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/RUxZI4i9Kgc",
  "composition": "П. Захаров. «Карусель»",
  "name": "Ліпкан Аліна, 10.10.2014 р.н.",
  "id": {
    "$oid": "49463841079269"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/CWt9CJJljf4",
  "composition": "Б. Фільц. «Древня казка»",
  "name": "Ліпкан Аліна, 10.10.2014 р.н.",
  "id": {
    "$oid": "49463841137906"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/l2BujCM4ydk",
  "composition": "Я. Бобалік. «Журавлина пісня»; В. Барвінський. «Сонечко»",
  "name": "Ляшик Анна, 16.06.2013 р.н.",
  "id": {
    "$oid": "49463841206829"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/OaAd0HOAEtY",
  "composition": "Й.С. Бах. «Маленька прелюдія» до мінор; С. Борткевич. «У склепінні»; К. Черні. Етюд ре мажор, тв. 399",
  "name": "Марущак Вероніка, 22.07.2013 р.н.",
  "id": {
    "$oid": "49463841293069"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/Ita5y9ybU28",
  "composition": "Л. Бетховен. Сонатина",
  "name": "Митюк Арсен, 27.06.2014 р.н.",
  "id": {
    "$oid": "49463841360772"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/sJv3PZ8RtS8",
  "composition": "В. Косенко. Скерцино",
  "name": "Митюк Арсен, 27.06.2014 р.н.",
  "id": {
    "$oid": "49463841452886"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/xPJvUsHbtkY",
  "composition": "М. Вербицький, аранж. О. Шавардака. «Гімн України»",
  "name": "Озінковська Вікторія, 22.07.2013 р.н.",
  "id": {
    "$oid": "49463841520216"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/UA8auGQBg6Q",
  "composition": "Ю. Щуровський. «Шарманка»",
  "name": "Озінковська Вікторія, 22.07.2013 р.н.",
  "id": {
    "$oid": "49463841567148"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/mAucPI7VmH0",
  "composition": "К. Рейнеке. Сонатина соль мажор, І частина",
  "name": "Осика Роман, 25.06.2014 р.н.",
  "id": {
    "$oid": "49463841607345"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/1aG7Xyldz-E",
  "composition": "Українська народна пісня в обробці Г. Без\u2019язичного «Їхав козак на війноньку»",
  "name": "Осика Роман, 25.06.2014 р.н.",
  "id": {
    "$oid": "49463841648956"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/_WdGfSImyF4",
  "composition": "Ю. Зубай «Бабуся Ягуся»",
  "name": "Остапчук Катерина, 11.08.2013 р.н.",
  "id": {
    "$oid": "49463841730700"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/M0nxqiXdfzo",
  "composition": "В. Гіллок. Сарабанда",
  "name": "Остапчук Катерина, 11.08.2013 р.н.",
  "id": {
    "$oid": "49463841798090"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/MS3jIpoIFY4",
  "composition": "А. Роулі. «Китайський хлопчик»",
  "name": "Пархоменко Євгенія, 08.04.2016 р.н.",
  "id": {
    "$oid": "49463841841361"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/0n5yyz0F9kg",
  "composition": "Л. Шитте. «На скейтборді»",
  "name": "Пархоменко Євгенія, 08.04.2016 р.н.",
  "id": {
    "$oid": "49463841887131"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/NX2VafSwHSA",
  "composition": "П. Захаров. «Танець маленьких зірочок»",
  "name": "Пісоцька Соломія, 29.03.2016 р.н.",
  "id": {
    "$oid": "49463841926142"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/jx_ozYsL5EQ",
  "composition": "І. Іордан. «Полювання на метелика»",
  "name": "Пісоцька Соломія, 29.03.2016 р.н.",
  "id": {
    "$oid": "49463841969025"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/tOeQT-UIKmA",
  "composition": "М. Шентюрк (Терещук). «Грайливе зайченятко»",
  "name": "Примак Юлія, 02.03.2014 р.н.",
  "id": {
    "$oid": "49463842003637"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/lN4Zv48wPnY",
  "composition": "В. Гіллок. «Drifting clouds»",
  "name": "Примак Юлія, 02.03.2014 р.н.",
  "id": {
    "$oid": "49463842033450"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/uLQ0Yst_T4Y",
  "composition": "А. Андре. Сонатина соль мажор, І частина",
  "name": "Садовнік Есфір, 25.06.2014 р.н.",
  "id": {
    "$oid": "49463842075142"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/vaXOj74GjJM",
  "composition": "М. Екштейн. «Каприз гномів»",
  "name": "Садовнік Есфір, 25.06.2014 р.н.",
  "id": {
    "$oid": "49463842112825"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/1RK5vyNtLew",
  "composition": "Р. Шуман. «Перша втрата»",
  "name": "Садовнік Есфір, 25.06.2014 р.н.",
  "id": {
    "$oid": "49463842172233"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/BIIoMoGjmCQ",
  "composition": "Я. Бобалік. «Такий чудовий вечір»",
  "name": "Семенчук Вероніка,30.11.2013 р.н.",
  "id": {
    "$oid": "49463842227805"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/GQZGFR75FlY",
  "composition": "В. Дамкомб. Сонатина до мажор, ІІ,ІІІ частини",
  "name": "Семенчук Вероніка,30.11.2013 р.н.",
  "id": {
    "$oid": "49463842271273"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/dkOChCdNmCQ",
  "composition": "В. Полянський. «Квітень. Вітерець повіяв» з циклу «Пори року. 12 п\u2019єс для фортепіано в джазових тонах»",
  "name": "Смірнова Аліса, 12.01.2014 р.н.",
  "id": {
    "$oid": "49463842356077"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/UKwwS9siL40",
  "composition": "К. Черні. Сонатина до мажор",
  "name": "Смірнова Аліса, 12.01.2014 р.н.",
  "id": {
    "$oid": "49463842419231"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/36lWwvNXnCk",
  "composition": "1. Л. Шукайло. Прелюдія до мажор; Л. Бетховен. 2. Сонатина соль мажор, І частина",
  "name": "Теплицька Злата, 05.04.2015 р.н.",
  "id": {
    "$oid": "49463842475921"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/RJfXJYjB3ss",
  "composition": "1. І. Кулау. Сонатина соль мажор, І частина; 2. В. Гіллок. «Колібрі»",
  "name": "Ткаченко Діана, 20.08.2013 р.н.",
  "id": {
    "$oid": "49463842529226"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/SDA36NQmoC4",
  "composition": "1. М. Шентюрк (Терещук). «Маленька серенада»; 2. М. Екштайн. «Каприз гномів»",
  "name": "Турик Анна, 07.11.2013 р.н.",
  "id": {
    "$oid": "49463842573009"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/9zBiicmaIO0",
  "composition": "1. Ю. Щуровський. Танець; 2. Ф. Шуберт. Скерцо сі бемоль мажор",
  "name": "Удод Дар\u2019я, 03.01.2014 р.н.",
  "id": {
    "$oid": "49463842618356"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/jZusmJYsdkQ",
  "composition": "1. Українська народна пісня «Над річкою бережком», переклад  І. Берковича за обробкою М. Леонтовича; 2. Обр. Б. Шиптура. Коломийка",
  "name": "Халамейда Лук\u2019ян, 09.07.2014 р.н.",
  "id": {
    "$oid": "49463842669284"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/pwtGbFLZ69g",
  "composition": "1. І. Беркович. Концерт для фортепіано №2, ІІ частина; 2. Л. Іванюшина. «Карамель»",
  "name": "24.\tХом\u2019як Варвара,18.03.2016 р.н.",
  "id": {
    "$oid": "49463842719570"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/IQGX6VdiK7s",
  "composition": "Обробка Б. Шиптура. Коломийка",
  "name": "Чулкіна Надія, 17.05.2014 р.н.",
  "id": {
    "$oid": "49463842764257"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/wuTl2eDjeWw",
  "composition": "К. Вілтон. Сонатина до мажор",
  "name": "Чулкіна Надія, 17.05.2014 р.н.",
  "id": {
    "$oid": "49463842796909"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/FT1tZdP2Vbc",
  "composition": "О. Білаченко. Експромт фа мінор",
  "name": "Шамина Маргарита, 08.01.2014 р.н.",
  "id": {
    "$oid": "49463842835492"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/hw-cAvT9HBA",
  "composition": "П. Захарова. «Жарт-сувенір»",
  "name": "Шамина Маргарита, 08.01.2014 р.н.",
  "id": {
    "$oid": "49463842871499"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/V7ytHmu3pCc",
  "composition": "Й.С. Бах. Менует соль мажор",
  "name": "Шпак Денис, 26.09.2014 р.н.",
  "id": {
    "$oid": "49463842912144"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/SvoWQdkcFMM",
  "composition": "С. Борткевич. «Козак»",
  "name": "Шпак Денис, 26.09.2014 р.н.",
  "id": {
    "$oid": "49463842951285"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/utJa_A7GPto",
  "composition": "Л. Шітте. Етюд до мажор",
  "name": "Шпак Денис, 26.09.2014 р.н.",
  "id": {
    "$oid": "49463842997514"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/LTYcN8wEzjQ",
  "composition": "О. Гедіке. Етюд до мажор",
  "name": "Юзвак Єва, 14.06.2015 р.н.",
  "id": {
    "$oid": "49463843034290"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/erQmPy6GoxQ",
  "composition": "І. Кореневська. «Дощик»",
  "name": "Юзвак Єва, 14.06.2015 р.н.",
  "id": {
    "$oid": "49463843070351"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/EUIDWQiKpcY",
  "composition": "К. Вілтон. Сонатина до мажор",
  "name": "Якимчук Кароліна, 15.12.2013 р.н.",
  "id": {
    "$oid": "49463843127373"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/aTtW5BCWXx8",
  "composition": "Л. Шитте. Маленька прелюдія",
  "name": "Якимчук Кароліна, 15.12.2013 р.н.",
  "id": {
    "$oid": "49463843164174"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/JjWg9VVoAjg",
  "composition": "Дж. Бастьєн. «Бджола»",
  "name": "Якимчук Кароліна, 15.12.2013 р.н.",
  "id": {
    "$oid": "49463843206531"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/9aGeFVoc0zY",
  "composition": "Д. Чімароза. Соната №15, 2 зошит",
  "name": "Агратіна Станіслав, 24.08.2011 р.н.",
  "id": {
    "$oid": "49463843249986"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/NW4Q3hwkdCY",
  "composition": "М. Скорик. «Жартівлива п\u2019єса» з циклу «З дитячого альбому»",
  "name": "Агратіна Станіслав, 24.08.2011 р.н.",
  "id": {
    "$oid": "49463843308698"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/KSisZTyWV4c",
  "composition": "1. Б. Фільц. «Ліричний прелюд»; 2. Ю. Шамо. Токата",
  "name": "Артьомова Дар\u2019я, 26.06.2010 р.н.",
  "id": {
    "$oid": "49463843349481"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/mpEMcxL9gYU",
  "composition": "1. Й.С. Бах. Арія з «Французької сюїти» до мінор; 2. А. Коломієць. «Гра-веснянка»",
  "name": "Бакаєвич Тимофій, 01.01.2012 р.н.",
  "id": {
    "$oid": "49463843394482"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/-IKiZqLzdBs",
  "composition": "Н. Нижанківський. Коломийка",
  "name": "Бащій Вікторія, 11.06.2012 р.н.",
  "id": {
    "$oid": "49463843438129"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/QWck3N5f8WM",
  "composition": "Ф. Бюргмюллер. Етюд",
  "name": "Бащій Вікторія, 11.06.2012 р.н.",
  "id": {
    "$oid": "49463843469935"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/VylIZoK8hL4",
  "composition": "П. Чайковський. «Хвороба ляльки»",
  "name": "Безсмольна Зоряна, 22.10.2013 р.н.",
  "id": {
    "$oid": "49463843503572"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/txm2JB9ChUg",
  "composition": "М. Мієр. «Downright Happy Rag»",
  "name": "Безсмольна Зоряна, 22.10.2013 р.н.",
  "id": {
    "$oid": "49463843544694"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/CsaBEtIVMZw",
  "composition": "О. Герасименко. «Море»; 2. Н. Торопова. Токата",
  "name": "Березська Любов, 25.10.2012 р.н.",
  "id": {
    "$oid": "49463843591282"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/vhecrrySG7U",
  "composition": "Ю. Щуровський. Інвенція",
  "name": "Бондарчук Мирослава, 18.04.2011 р.н.",
  "id": {
    "$oid": "49463843631759"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/sQPMkTnbM1g",
  "composition": "Ж. Колодуб. Етюд-картинка",
  "name": "Бондарчук Мирослава, 18.04.2011 р.н.",
  "id": {
    "$oid": "49463843680639"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/1QOgMLy4zjA",
  "composition": "О. Тимошенко. Елегія",
  "name": "Волощук Емілія, 19.06.2011 р.н.",
  "id": {
    "$oid": "49463843722281"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/VeUx_bBIACE",
  "composition": "Т. Петриненко, обробка М. Шентюрк. «Україна»",
  "name": "Волощук Емілія, 19.06.2011 р.н.",
  "id": {
    "$oid": "49463843764833"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/a8pwOhSpuss",
  "composition": "1. Ю. Щуровський. Гопак; 2. М. Шентюрк (Терещук). Балада",
  "name": "Гаврилюк Софія, 29.06.2012 р.н.",
  "id": {
    "$oid": "49463843810822"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/gRhA6bCFlbQ",
  "composition": "1. Л. Шукайло (Терещук). Прелюдія; 2. М. Шентюрк (Терещук). «Танець кульбабок»",
  "name": "Галан Ірина, 17.05.2010 р.н.",
  "id": {
    "$oid": "49463843854271"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/SysGvuc-AIo",
  "composition": "1. С. Борткевич. «Мрія»; 2. Е. Гріг. «Серце поета»",
  "name": "Гасратов Олексій, 24.08.2010 р.н.",
  "id": {
    "$oid": "49463843893832"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/aK3jaBSDt48",
  "composition": "1. Й.С. Бах. Двоголосна інвенція до мажор; 2. М. Мошковський. Етюд сі бемоль мажор",
  "name": "Герасименко Олександра, 01.06.2011 р.н.",
  "id": {
    "$oid": "49463843939155"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/l_44I_7RSTk",
  "composition": "1. Б. Фільц. «Меланхолійний вальс»; 2. Л. Іваненко. «Дощик»",
  "name": "Гладка Дарина, 31.01.2012 р.н.",
  "id": {
    "$oid": "49463843992401"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/lOTcBimymfY",
  "composition": "1. Й.С. Бах. Маленька прелюдія ре мінор; 2. Ф. Шопен. Cantabile",
  "name": "Гловацька Поліна, 15.12.2010 р.н.",
  "id": {
    "$oid": "49463844037024"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/OE5yQWtFWq4",
  "composition": "Й.С. Бах. Двоголосна інвенція ля мінор",
  "name": "Григоренко Марія, 13.09.2012 р.н.",
  "id": {
    "$oid": "49463844076555"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/0y6Umn2J7Hw",
  "composition": "М. Терещук (Шентюрк). «Пробудження» з циклу «Contrego»",
  "name": "Григоренко Марія, 13.09.2012 р.н.",
  "id": {
    "$oid": "49463844843314"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/x8z5WAwQaXs",
  "composition": "1. Л. Бетховен. Соната №20, тв.49, І частина; 2. О. Білаш. Баркарола",
  "name": "Дейнека Соломія, 19.05.2011 р.н.",
  "id": {
    "$oid": "49463844898365"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/YJTRfMlqwKE",
  "composition": "1. Ф. Кулау. Сонатина до мажор, тв.55, І частина; 2. Л. Волошина. «Зимовий ранок»",
  "name": "Дишлевий Євген, 30.01.2011 р.н.",
  "id": {
    "$oid": "49463844946127"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/bQ5kVuuua2w",
  "composition": "С. Людкевич. «Старовинна пісня»",
  "name": "Єрега Мар\u2019яна, 04.08.2012 р.н.",
  "id": {
    "$oid": "49463844983343"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/RilQDkgz1Xg",
  "composition": "М. Мордасов. «Давним давно»",
  "name": "Єрега Мар\u2019яна, 04.08.2012 р.н.",
  "id": {
    "$oid": "49463845014939"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/vCuH7rFtALc",
  "composition": "Л. Іваненко. Фантазія на тему української народної пісні «Гандзя»",
  "name": "Жегало Надія, 16.09.2012 р.н.",
  "id": {
    "$oid": "49463845050116"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/lFhOTWGnQps",
  "composition": "Б. Фільц. «Сумна пісня»",
  "name": "Жегало Надія, 16.09.2012 р.н.",
  "id": {
    "$oid": "49463845199135"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/UthIv-LwPp8",
  "composition": "Я. Бобалік. «Бурхливий водоспад»",
  "name": "Іванюк Вірсавія, 05.07.2010 р.н.",
  "id": {
    "$oid": "49463845243883"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/MAvoQAl1q6Y",
  "composition": "І. Щербаков. «Елегія київських пагорбів»",
  "name": "Іванюк Вірсавія, 05.07.2010 р.н.",
  "id": {
    "$oid": "49463845280268"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/3KsMFoZ2QzE",
  "composition": "В. Гіллок. Фламенго",
  "name": "Іванюк Маріам, 02.04.2013 р.н.",
  "id": {
    "$oid": "49463845306337"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/-MePEpXlfVU",
  "composition": "І. Беркович. Прелюдія №5 ре мажор",
  "name": "Іванюк Маріам, 02.04.2013 р.н.",
  "id": {
    "$oid": "49463845335774"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/ehMI9UfWynU",
  "composition": "Ф. Кулау. Сонатина №1",
  "name": "Канцер Богдана, 10.01.2012 р.н.",
  "id": {
    "$oid": "49463845383009"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/egCevoIZxz4",
  "composition": "М. Завадський. «Шумка»",
  "name": "Канцер Богдана, 10.01.2012 р.н.",
  "id": {
    "$oid": "49463845416953"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/Kpf_L47zjXk",
  "composition": "1. В. Квасневський. «Думка»; 2. Е. Гріг. «Поетична картинка» №1",
  "name": "Клімович Єлизавета, 12.10.2011 р.н.",
  "id": {
    "$oid": "49463845457811"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/Qj8phsWaDks",
  "composition": "Ю Щуровський, Баркарола",
  "name": "Ковальчук Анна, 14.11.2010 р.н.",
  "id": {
    "$oid": "49463845487439"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/Ou-NwUFU350",
  "composition": "Г. Сасько. Регтайм",
  "name": "Ковальчук Анна, 14.11.2010 р.н.",
  "id": {
    "$oid": "49463845513698"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/S6NYKOOdGMA",
  "composition": "1. Українська народна пісні в обробці С. Климовського «Їхав    козак за Дунай»; 2. Т. Петриненко, обробка М. Шентюрк. «Україна»",
  "name": "Колесниченко Марк, 25.05.2011 р.н.",
  "id": {
    "$oid": "49463845559393"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/W3hIUoKY7Z4",
  "composition": "М. Шентюрк (Терещук). «Вальс-каприс»",
  "name": "Кондратюк Вероніка, 14.09.2012 р.н.",
  "id": {
    "$oid": "49463845588365"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/feULMWozzqo",
  "composition": "М. Майєр. «Фарби осені»",
  "name": "Кондратюк Вероніка, 14.09.2012 р.н.",
  "id": {
    "$oid": "49463845616399"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/Z2Z7W0IfPqk",
  "composition": "1. Й.С. Бах. Алеманда з «Французької сюїти» мі бемоль мажор; 2. М. Лисенко. Мазурка до мінор",
  "name": "Коцирій Аріна, 20.08.2010 р.н.",
  "id": {
    "$oid": "49463845656444"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/7z6STyDoowg",
  "composition": "Л. Шукайло. Марш з сюїти «Цирк»",
  "name": "Кришталь Ян, 21.06.2012 р.н.",
  "id": {
    "$oid": "49463845698974"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/BRJ7qwf1uzc",
  "composition": "С. Сосніна. «Дракон»",
  "name": "Кришталь Ян, 21.06.2012 р.н.",
  "id": {
    "$oid": "49463845729526"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/ePDCw1DlCQg",
  "composition": "О. Яковчук. Полонез",
  "name": "Кулик Олеся, 16.01.2011 р.н.",
  "id": {
    "$oid": "49463845758974"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/yJg3KKvYLig",
  "composition": "Л. Бетховен. «До Елізи»",
  "name": "Кулик Олеся, 16.01.2011 р.н.",
  "id": {
    "$oid": "49463845789583"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/SYZXb8Y8dSQ",
  "composition": "1. Й.С. Бах. Триголосна інвенція ре мажор; 2. Ф. Шопен. Мазурка, тв.67 №2",
  "name": "Лащ Нана, 01.11.2010 р.н.",
  "id": {
    "$oid": "49463845824140"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/rLif17n9Pmk",
  "composition": "Р. Глієр. «Ескіз» ре мажор",
  "name": "Легкий Максим, 17.08.2011 р.н.",
  "id": {
    "$oid": "49463845917293"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/AZmggpzzHVE",
  "composition": "К. Дебюссі. «Маленьке негреня»",
  "name": "Легкий Максим, 17.08.2011 р.н.",
  "id": {
    "$oid": "49463845962608"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/1kSGsBAU39w",
  "composition": "1. В. Моцарт. Сонатина до мажор, І частина; 2. В. Шукайло. Інтермецо",
  "name": "Мазепа Софія, 30.03.2013 р.н.",
  "id": {
    "$oid": "49463845996408"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/08Ko68iMFZ0",
  "composition": "Б. Фільц. «Закарпатська новелета» №2",
  "name": "Максютинська Надія, 10.08.2010 р.н.",
  "id": {
    "$oid": "49463846024814"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/tbRGr008Shg",
  "composition": "В. Гіллок. «Карнавал в Ріо»",
  "name": "Максютинська Надія, 10.08.2010 р.н.",
  "id": {
    "$oid": "49463846059653"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/7P5K77MchLM",
  "composition": "Л. Шукайло. «Котик і мишка»",
  "name": "Мєнь Анастасія, 08.03.2013 р.н.",
  "id": {
    "$oid": "49463846086021"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/3jJCvV1b-9g",
  "composition": "А. Б\u2019єль. Сонатина",
  "name": "Мєнь Анастасія, 08.03.2013 р.н.",
  "id": {
    "$oid": "49463846109013"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/PCrRWHfNfJc",
  "composition": "М. Дворжак, «Джазовий етюд» №2 до мажор",
  "name": "Нішпал Єва, 09.05.2010 р.н.",
  "id": {
    "$oid": "49463846139878"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/hm0GqTd8cng",
  "composition": "В. Логін. «Ліричний прелюд»",
  "name": "Нішпал Єва, 09.05.2010 р.н",
  "id": {
    "$oid": "49463846172293"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/FWscCzcsVlQ",
  "composition": "М. Екштейн. «Каприз гномів»",
  "name": "Олійник Микита, 31.12.2011 р.н. (2 рік навчання)",
  "id": {
    "$oid": "49463846203455"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/wr_Zv2JgH-c",
  "composition": "І. Новікова. «Гострий ритм»",
  "name": "Олійник Микита, 31.12.2011 р.н. (2 рік навчання)",
  "id": {
    "$oid": "49463846243612"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/_qxByMmsFwo",
  "composition": "Кимлик. «Мініатюрна Леонтовіана»",
  "name": "Остапчук Христина, 18.08.2011 р.н.",
  "id": {
    "$oid": "49463846272378"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/C0emBbFYIS0",
  "composition": "К. Гардель. «Por una cabeza»",
  "name": "Остапчук Христина, 18.08.2011 р.н.",
  "id": {
    "$oid": "49463846329110"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/gL2pMVYNYGM",
  "composition": "К. Нільсен. «Годинник з музикою»",
  "name": "Панченко Зоряна, 05.02.2013 р.н.",
  "id": {
    "$oid": "49463846362381"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/DqNXKXRvN1s",
  "composition": "Р. Глієр. Прелюдія",
  "name": "Панченко Зоряна, 05.02.2013 р.н.",
  "id": {
    "$oid": "49463846389905"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/q2dpG2exKGc",
  "composition": "1. Й.С. Бах. Триголосна інвенція №11; 2. Е. Гріг. Етюд, тв. 73 №5 (пам\u2019яті Шопена)",
  "name": "Пасенчук Каріна, 02.03.2011 р.н.",
  "id": {
    "$oid": "49463846439247"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/PqwGsO8tU7U",
  "composition": "Г. Штьольцель-Й. Бах. Менует соль мінор",
  "name": "Паскар Натан, 07.09.2012 р.н.",
  "id": {
    "$oid": "49463846472187"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/wEpMjCWi84w",
  "composition": "Л. Шитте. «Танець гномів»",
  "name": "Паскар Натан, 07.09.2012 р.н.",
  "id": {
    "$oid": "49463846496121"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/6uvluWvQ9cY",
  "composition": "1. Ю. Ремезенко. «Ранок в тумані, птахи над морем»; 2. Т. Остен. «Сон ляльки»",
  "name": "Плисюк Вероніка, 21.10.2011 р.н.",
  "id": {
    "$oid": "49463846526549"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/CT1O5z6T_Cc",
  "composition": "Ф. Кулау. Варіації соль мажор",
  "name": "Подлевська Карина, 27.07.2010 р.н.",
  "id": {
    "$oid": "49463846556203"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/bjwwWdL-PxE",
  "composition": "М. Вербицький , обр. для ф-но Б. Шиптура «Ще не вмерла України»",
  "name": "Подлевська Карина, 27.07.2010 р.н.",
  "id": {
    "$oid": "49463846603685"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/oPUczWpGT4I",
  "composition": "Д. Циполі. Фегета",
  "name": "Проданчук Соня, 09.04.2013 р.н.",
  "id": {
    "$oid": "49463846630499"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/UODnXENJP7g",
  "composition": "О. Білаченко. «Дощовий ранок»",
  "name": "Проданчук Соня, 09.04.2013 р.н.",
  "id": {
    "$oid": "49463846656982"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/v3RyIihnM84",
  "composition": "К. Черні. Етюд №21, тв.299",
  "name": "Рагоза Карина, 15.07.2010 р.н.",
  "id": {
    "$oid": "49463846686587"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/2JDP6Zb6SE8",
  "composition": "С. Лозбін. Концертний вальс «Наближення»",
  "name": "Рагоза Карина, 15.07.2010 р.н.",
  "id": {
    "$oid": "49463846717406"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/dGHFoiafREw",
  "composition": "О. Білаченко, Сонатина ре мажор",
  "name": "Романова Катерина, 14.07.2011 р.н.",
  "id": {
    "$oid": "49463846743411"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/SBnelOV2iIk",
  "composition": "М. Шентюрк (Терещук). Експромт",
  "name": "Романова Катерина, 14.07.2011 р.н.",
  "id": {
    "$oid": "49463846766575"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/IBoHRB46pHQ",
  "composition": "О. Гедіке. Сонатина до мажор",
  "name": "Сєргєєва Яна, 25.09.2012 р.н.",
  "id": {
    "$oid": "49463846802016"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/gUgsXwZUChM",
  "composition": "Е. Вольф. «Літній вітерець»",
  "name": "Сєргєєва Яна, 25.09.2012 р.н.",
  "id": {
    "$oid": "49463846830906"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/AkhJZKIlBiU",
  "composition": "Ф. Шпіндлер. Сонатина №1, І частина",
  "name": "Сільковська Єва, 28.07.2012 р.н.",
  "id": {
    "$oid": "49463846854534"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/TYwLSqd-aOQ",
  "composition": "Ю. Щуровський. «Шарманка»",
  "name": "Сільковська Єва, 28.07.2012 р.н.",
  "id": {
    "$oid": "49463846880373"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/vJPvIsEvfqg",
  "composition": "Л. Ревуцький. Пісня2. К. Черні. Етюд, тв. 219, №15",
  "name": "Скороходько Євгенія, 24.07.2010 р.н.",
  "id": {
    "$oid": "49463846907266"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/Yage2KFEoLs",
  "composition": "Ф. Ліст. «Юнацький етюд» №1",
  "name": "Смірнова Євгенія, 03.03.2012 р.н.",
  "id": {
    "$oid": "49463846944629"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/wQXtWMy6Srw",
  "composition": "М. Ластовецький. «І задзвонили дзвони \u2026»  №5 з циклу «12 Раціональних ескізів в додекафонній техніці для фортепіано»",
  "name": "Смірнова Євгенія, 03.03.2012 р.н.",
  "id": {
    "$oid": "49463846982092"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/Tr28H66VeYk",
  "composition": "Ж.-М. Арно. «Rengaine»",
  "name": "Сухан Діана, 05.12.2012 р.н.",
  "id": {
    "$oid": "49463847005569"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/y70ZwK_YDek",
  "composition": "Г. Классен. «Вальсик»",
  "name": "Сухан Діана, 05.12.2012 р.н.",
  "id": {
    "$oid": "49463847030773"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/og7HeEOvdgw",
  "composition": "Г. Без\u2019язичний. «Ой, у вишневому саду»",
  "name": "Тарасюк Єлизавета, 20.02.2012 р.н.",
  "id": {
    "$oid": "49463847064515"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/5DciRwzSOLY",
  "composition": "Ю. Весняк. «Казочка»",
  "name": "Тарасюк Єлизавета, 20.02.2012 р.н.",
  "id": {
    "$oid": "49463847083692"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/3WGWA6qy1nM",
  "composition": "І. Волков. «Під дощем»",
  "name": "Федорова Вікторія, 07.01.2013 р.н.",
  "id": {
    "$oid": "49463847104151"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/nsC7yPPqqeM",
  "composition": "Т. Хаслінгер. Сонатина до мажор",
  "name": "Федорова Вікторія, 07.01.2013 р.н.",
  "id": {
    "$oid": "49463847126999"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/rDLxvN_KPDQ",
  "composition": "1. Ф. Бургмюллер. «Весняний капіж»; 2. Ю. Щуровський. Танець",
  "name": "Федюк Гліб, 05.07.2012 р.н.",
  "id": {
    "$oid": "49463847154736"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/hLe8Gg2H_L8",
  "composition": "1. Г. Без\u2019язичний. «Русалонька»",
  "name": "Хвостова Віра, 27.04.2013 р.н.",
  "id": {
    "$oid": "49463847178835"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/fydxJ1CA8MA",
  "composition": "2. Л. Іваненко. «Бабуся-Ягуся»",
  "name": "Хвостова Віра, 27.04.2013 р.н.",
  "id": {
    "$oid": "49463847212252"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/YoMfMatGkhw",
  "composition": "Й. Гайдн. Рондо до мажор",
  "name": "Хомік Кіра, 12.03.2011 р.н.",
  "id": {
    "$oid": "49463847238988"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/YfJu_wsWg68",
  "composition": "О. Білаченко. Вальс",
  "name": "Хомік Кіра, 12.03.2011 р.н.",
  "id": {
    "$oid": "49463847256641"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/lUz0zMhBkCM",
  "composition": "Г.Ф. Гендель. Сонатина сі бемоль мажор",
  "name": "Черняк Марія, 26.09.2012 р.н.",
  "id": {
    "$oid": "49463847282878"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/NJ-RiVo5Zak",
  "composition": "А. Лазаренко. Коломийки",
  "name": "Черняк Марія, 26.09.2012 р.н.",
  "id": {
    "$oid": "49463847302524"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/hHxikFbZtFA",
  "composition": "Ф. Шопен. Полонез соль мінор",
  "name": "Чорней Яна, 09.10.2010 р.н.",
  "id": {
    "$oid": "49463847324625"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/wlPeU9uoBBs",
  "composition": "Л. Бетховен. Сонатина мі бемоль мажо",
  "name": "Чорней Яна, 09.10.2010 р.н.",
  "id": {
    "$oid": "49463847347061"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/W0Xc24xQj0I",
  "composition": "1. Й.С. Бах. Двоголосна інвенція ля мінор; 2. П. Захарова. «Вперше на арені»",
  "name": "Якименко Єлизавета, 23.10.2010 р.н.",
  "id": {
    "$oid": "49463847376076"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/CGLokOBsgyw",
  "composition": "1. М. Лисенко. «Сумний спів»; 2. А. Хачатурян. «Музична картина»",
  "name": "Ямпольська Дар\u2019я, 14.06.2010 р.н.",
  "id": {
    "$oid": "49463847398502"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/yzJF1-YIAs4",
  "composition": "1. Ф. Мендельсон. «Пісня без слів», тв.30; 2. Л. Забара. Фантазія на тему української народної пісні «Ніч яка місячна»",
  "name": "Акімова Кіра, 31.01.2009 р.н.",
  "id": {
    "$oid": "49463848233733"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/sp_utk7Sexs",
  "composition": "1. Й. Гайдн. Соната ре мажор, І частина; 2. І. Шамо. «Веснянка»",
  "name": "Бокоч Артем, 21.09.2008 р.н.",
  "id": {
    "$oid": "49463848273834"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/rHSg0qYE4Eo",
  "composition": "1. Й.С. Бах. Алеманда з Партити до мінор; 2. Ф. Шопен. Ноктюрн до дієз мінор",
  "name": "Борейко Роман, 11.01.2010 р.н.",
  "id": {
    "$oid": "49463848299319"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/q_eAg80xC8U",
  "composition": "1. Й.С. Бах. Хорал з кантати №147 «Jesus bleibet meine Freude»; 2. І. Шамо. Прелюдія №8 «Andante, Quasi campana»",
  "name": "Верзун-Ролінгер Тереза, 09.10.2009 р.н.",
  "id": {
    "$oid": "49463848320886"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/1OXyLRQfy1A",
  "composition": "Л. Шітте. Етюд №22, тв.68",
  "name": "Германюк Софія, 21.12.2007 р.н.",
  "id": {
    "$oid": "49463848338505"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/CRucrUMQc9Q",
  "composition": "Українська народна пісня в обробці О. Саратського «Цвіте  терен»",
  "name": "Германюк Софія, 21.12.2007 р.н.",
  "id": {
    "$oid": "49463848364079"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/-WCCG7psLus",
  "composition": "Українська народна пісня в обробці Г. Без\u2019язичного «Ой, у   вишневому саду»",
  "name": "Гомілко Анастасія, 08.03.2008 р.н.",
  "id": {
    "$oid": "49463848427443"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/PFtr7rwgvpI",
  "composition": "Ф. Кулау, Сонатина №1, тв.20",
  "name": "Гомілко Анастасія, 08.03.2008 р.н.",
  "id": {
    "$oid": "49463848449118"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/8HBVBsTbChc",
  "composition": "Ф. Шопен. Ноктюрн  мі бемоль мажор",
  "name": "Гресько Марія, 22.06.2009 р.н.",
  "id": {
    "$oid": "49463848469075"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/pzwLeJXVgns",
  "composition": "О. Білаш. «Гуцульська писанка»",
  "name": "Гресько Марія, 22.06.2009 р.н.",
  "id": {
    "$oid": "49463848591653"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/ektnCnL6yGU",
  "composition": "М. Мошковський. Етюд №6, тв. 72",
  "name": "Гриник Діана, 19.0.2006 р.н.",
  "id": {
    "$oid": "49463848623482"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/kFCWX_mVtQ4",
  "composition": "О. Козаренко. Вальс",
  "name": "Гриник Діана, 19.0.2006 р.н.",
  "id": {
    "$oid": "49463848697711"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/JKqGLVJBsLk",
  "composition": "Д. Щириця. «Український етюд»",
  "name": "Грушковська Валерія, 17.01.2010 р.н.",
  "id": {
    "$oid": "49463848816103"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/GOhPa_AGxuo",
  "composition": "Л. Іваненко. «Ей Люлі же мі, люлю»",
  "name": "Грушковська Валерія, 17.01.2010 р.н.",
  "id": {
    "$oid": "49463848865396"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/Na1AqogGZWc",
  "composition": "1. Й.С. Бах. Триголосна інвенція ре мінор; 2. І. Шамо. «Веснянка»",
  "name": "Діденко Дар\u2019я, 20.05.2009 р.н.",
  "id": {
    "$oid": "49463848944518"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/NMl5mCYes08",
  "composition": "Е. Брилін. Токата",
  "name": "Дудич Ольга, 14.10.2009 р.н.",
  "id": {
    "$oid": "49463849014844"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/Mu-pBYdtoXY",
  "composition": "Ф. Мендельсон. «Пісня без слів»",
  "name": "Дудич Ольга, 14.10.2009 р.н.",
  "id": {
    "$oid": "49463849048260"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/jfrrf0-uzQg",
  "composition": "О. Дюбюк. «Дзиґа»",
  "name": "Єрошкіна Анна, 08.11.2008р.н.",
  "id": {
    "$oid": "49463849488428"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/36tP_qLEZkQ",
  "composition": "Ф. Ліст. «Втіха» №2",
  "name": "Єрошкіна Анна, 08.11.2008р.н.",
  "id": {
    "$oid": "49463849520720"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/2SpkICd4wGg",
  "composition": "О. Бордюгова. «Український романс»",
  "name": "Жарій Софія, 18.08.2009р.н.",
  "id": {
    "$oid": "49463849537867"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/MQ08hvVGFAw",
  "composition": "М. Колесса. Коломийка фа мінор",
  "name": "Жарій Софія, 18.08.2009р.н.",
  "id": {
    "$oid": "49463849574411"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/2S-2IGaIlTM",
  "composition": "Х. Альфвен. «Сонячні зайчики» з циклу «Картинки Шхер»,тв.17 №1",
  "name": "Канська Анастасія, 23.07.2009р.н.",
  "id": {
    "$oid": "49463849594615"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/LG4a2ouE4z4",
  "composition": "Я. Бобалік. «Бурхливий водоспад»",
  "name": "Канська Анастасія, 23.07.2009р.н.",
  "id": {
    "$oid": "49463849611045"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/YKeKkDPLjyQ",
  "composition": "Г. Ліхнер. Рондо «Вдома»",
  "name": "Католик Дарина, 01.09.2009 р.н.",
  "id": {
    "$oid": "49463849631558"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/63FLGaYxSHA",
  "composition": "М. Майєр. «Індіанська серенада»",
  "name": "Католик Дарина, 01.09.2009 р.н.",
  "id": {
    "$oid": "49463849657419"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/cDynzX-OPYk",
  "composition": "С. Чернецький, аранж. О. Шавардака.». Ой, у лузі червона калина»",
  "name": "Кісарець Іван, 24.04.2009 р.н.",
  "id": {
    "$oid": "49463849682185"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/ftFvLXTX29U",
  "composition": "М. Дворжак. «Джазовий етюд» №1 до мажор",
  "name": "Кісарець Іван, 24.04.2009 р.н.",
  "id": {
    "$oid": "49463849701356"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/NHTBv1jGBcY",
  "composition": "А. Кореллі. Сарабанда мі мінор",
  "name": "Кічук Роман, 29.10.2008 р.н.",
  "id": {
    "$oid": "49463849718686"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/aZOTWN7L0j0",
  "composition": "І. Мохначева. «Літній вечір»",
  "name": "Кічук Роман, 29.10.2008 р.н.",
  "id": {
    "$oid": "49463849740561"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/0AUNHt52-3U",
  "composition": "1. С. Жданов. Прелюд; 2. А. Бабаджанян. «Вагаршапатський танець»",
  "name": "Клімович Давид, 09.07.2009 р.н.",
  "id": {
    "$oid": "49463849778349"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/QHdrQkzUTzU",
  "composition": "М. Шентюрк (Терещук). Рапсодія «До світла»",
  "name": "Копиченська Дар\u2019я, 30.04.2009 р.н.",
  "id": {
    "$oid": "49463849801238"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/NMqx2oU_vfs",
  "composition": "М. Шентюк (Терещук). «Сльози»",
  "name": "Копиченська Дар\u2019я, 30.04.2009 р.н.",
  "id": {
    "$oid": "49463849818798"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/-j3xD0y9hiY",
  "composition": "1. Й.С. Бах. Прелюдія і фуга до мінор, ДТК-І; 2. Ф. Шопен. Ноктюрн до дієз мінор",
  "name": "Кравчук Марія, 14.06.2008 р.н.",
  "id": {
    "$oid": "49463849865569"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/QX936YZe7JM",
  "composition": "О. Білаш. «Гуцульська писанка»",
  "name": "Крутенко Дарина, 10.11.2009 р.н.",
  "id": {
    "$oid": "49463849897997"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/FmDkVvUMRyM",
  "composition": "Т. Афанасенко. «Лебідь»",
  "name": "Крутенко Дарина, 10.11.2009 р.н.",
  "id": {
    "$oid": "49463849921470"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/pM150qdBAMg",
  "composition": "І. Шамо. «Весняний дощ» із циклу «Гуцульські акварелі»",
  "name": "Левчук Тимофій, 19.11.2008 р.н.",
  "id": {
    "$oid": "49463850053749"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/d_pfgbco35I",
  "composition": "І. Беркович. Прелюдія мі мажор",
  "name": "Левчук Тимофій, 19.11.2008 р.н.",
  "id": {
    "$oid": "49463850108252"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/59GWV5_r-qw",
  "composition": "Г. Гендель-Ю. Хальворсен. Пасакалія ля мінор",
  "name": "Магдисюк Вікторія, 23.10.2008 р.н.",
  "id": {
    "$oid": "49463850139810"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/fpmaHZg46Dg",
  "composition": "М. Дремлюга. «Лірична пісня»",
  "name": "Магдисюк Вікторія, 23.10.2008 р.н.",
  "id": {
    "$oid": "49463850157110"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/So_6q1mvlcc",
  "composition": "1. Л. Шукайло. «Токата-Кампана»; 2. Ф. Шопен. «Фантазія-експромт» до дієз мінор",
  "name": "Малярчук Єлізавета, 24.08.2009 р.н.",
  "id": {
    "$oid": "49463850177346"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/tcDVmn-A0cs",
  "composition": "Й. Гайдн. Соната мі мінор, І частина",
  "name": "Мартинишин Владислав, 08.06.2006 р.н.",
  "id": {
    "$oid": "49463850225956"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/HnDqDfhvYTg",
  "composition": "О. Лис. «Легенда»",
  "name": "Мартинишин Владислав, 08.06.2006 р.н.",
  "id": {
    "$oid": "49463850263208"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/mfo8X5DQdM4",
  "composition": "С. Борткевич. Етюд, тв.15 №9",
  "name": "Махніцька Владислава, 03.11.2008 р.н.",
  "id": {
    "$oid": "49463850330285"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/_mHbxYjXVuo",
  "composition": "Н. Нижанківський. Вальс до дієз мінор",
  "name": "Махніцька Владислава, 03.11.2008 р.н.",
  "id": {
    "$oid": "49463850355825"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/DYAyPDjeDDo",
  "composition": "Й. С. Бах. Триголосна інвенція ре мажор",
  "name": "Мещеряков Костянтин, 08.08.2008 р.н.",
  "id": {
    "$oid": "49463850375419"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/1BJArCv39_A",
  "composition": "С. Борткевич. «Прогулянка Алупкою-Східна ідилія» з циклу «Кримські ескізи»",
  "name": "Мещеряков Костянтин, 08.08.2008 р.н.",
  "id": {
    "$oid": "49463850411868"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/9x-yL2nLTac",
  "composition": "1. Ф. Шопен. Вальс, тв. 69 №2; 2. М. Лисенко. Експромт",
  "name": "Місерук Маріанна, 19.08.2007 р.н.",
  "id": {
    "$oid": "49463850430610"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/Md8tyQEP3Ig",
  "composition": "1. Л. Ревуцький. Пісня; 2. І. Мохначова. Етюд-картина «Море»",
  "name": "Мох Надія, 01.10.2008 р.н.",
  "id": {
    "$oid": "49463850447646"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/RO4xKftzrx8",
  "composition": "1. Й. Гайдн. «Угорське рондо» з «Фортепіанного тріо» соль мажор; 2. І. Беркович. Прелюд фа дієз мінор",
  "name": "Опанасюк Кароліна, 05.07.2009 р.н.",
  "id": {
    "$oid": "49463850483288"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/a9wK8MxX9zM",
  "composition": "1. Ф. Шопен. Фантазія-експромт до дієз мінор; 2. А. Хачатурян. Токата",
  "name": "Опанасюк Тарас, 13.10.2007 р.н.",
  "id": {
    "$oid": "49463850521895"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/pJSayYXJQz4",
  "composition": "Ю. Щуровський. «Осіння пісня»",
  "name": "Опаряк Ірина, 30.04.2009 р.н.",
  "id": {
    "$oid": "49463850541015"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/dDOp8M7bDak",
  "composition": "Г. Гендель. Капричіо",
  "name": "Опаряк Ірина, 30.04.2009 р.н.",
  "id": {
    "$oid": "49463850557440"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/_wnM565vWb8",
  "composition": "1. З. Фібіх. Поема; 2.К. Дебюссі. «Ляльковий кек-уок»",
  "name": "Остапенко Анна, 26.08.2009 р.н. (2-ий рік навчання)",
  "id": {
    "$oid": "49463850573971"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/tIBHZMVb6Oo",
  "composition": "К. Черні. Етюд №15, тв.299",
  "name": "Панченко Софія, 08.0.2009 р.н.",
  "id": {
    "$oid": "49463850614343"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/mGPtUUdr4Qo",
  "composition": "І. Шамо. «Гумореска»",
  "name": "Панченко Софія, 08.0.2009 р.н.",
  "id": {
    "$oid": "49463850636604"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/qfc8tf6nM1Y",
  "composition": "В. Працюк. «Навесні»",
  "name": "Плешко Ігнатій, 23.10.2009 р.н.",
  "id": {
    "$oid": "49463850649379"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/ETlCVJZ5s9Q",
  "composition": "Ф. Ліст. «Втіха» №2",
  "name": "Плешко Ігнатій, 23.10.2009 р.н.",
  "id": {
    "$oid": "49463850664111"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/-V3t2fmSvfQ",
  "composition": "Й.С. Бах. Триголосна інвенція мі мінор",
  "name": "Радковська Аліна, 30.07.2017 р.н.",
  "id": {
    "$oid": "49463850679621"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/C_6Axnz2OMA",
  "composition": "Е. Гріг. «Імпровізація»",
  "name": "Радковська Аліна, 30.07.2017 р.н.",
  "id": {
    "$oid": "49463850705180"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/D5xBH5Tuh3Q",
  "composition": "Ф. Якименко. «Мрії на березі моря»",
  "name": "Редька Поліна,16.12.2009р.н.",
  "id": {
    "$oid": "49463850723050"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/gwIWbLXC67k",
  "composition": "Г. Без\u2019язичний. Етюд №17 «Буревісник»",
  "name": "Редька Поліна,16.12.2009р.н.",
  "id": {
    "$oid": "49463850746102"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/6cS6hnR8rKg",
  "composition": "1. Ф. Кулау. Сонатина №1, тв.60; 2. К. Вік. Полонез",
  "name": "Робуляк Микола,04.05.2010р.н.",
  "id": {
    "$oid": "49463850766781"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/PI98GVd9gKs",
  "composition": "Й.С. Бах. Двоголосна інвенція №8, фа мажор",
  "name": "Рупа Альберт, 31.05.2007 р.н.",
  "id": {
    "$oid": "49463850796392"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/vHZQB9uKwFs",
  "composition": "О. Нежигай. «Прохання»",
  "name": "Рупа Альберт, 31.05.2007 р.н.",
  "id": {
    "$oid": "49463850813462"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/irY4dbbKdA8",
  "composition": "М. Скорик. «Мелодія»",
  "name": "Саврай Катерина, 04.07.009 р.н.",
  "id": {
    "$oid": "49463850830819"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/JjoZwgWUyGM",
  "composition": "І. Беркович. Токата ля мінор",
  "name": "Саврай Катерина, 04.07.009 р.н.",
  "id": {
    "$oid": "494638508308119"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/Yv9Yvs0fd3E",
  "composition": "1. К. Лавалле. Концертний етюд «Метелик»; 2. І. Беркович. Токата ля мінор",
  "name": "Слободянюк Маргарита, 22.09.2008 р.н.",
  "id": {
    "$oid": "49463850844279"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/xRMkLWBbVcA",
  "composition": "В. Моцарт. Соната сі бемоль мажор, І частина",
  "name": "Ткаченко Аміна, 03.03.2009 р.н.",
  "id": {
    "$oid": "49463850863215"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/xNr4qmNFAvo",
  "composition": "П. Захаров. Токата-прелюдія",
  "name": "Ткаченко Аміна, 03.03.2009 р.н.",
  "id": {
    "$oid": "49463850876883"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/gFE1F1Hy7GQ",
  "composition": "Й.Б. Ванхаль. Allegro із Сонатини ля мажор",
  "name": "Троценко Анна, 12.06.2008 р.н.",
  "id": {
    "$oid": "49463850890750"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/EzbbARksXlE",
  "composition": "А. Комлікова. «Машина часу» (Інвенція з циклу «Інтервалія»)",
  "name": "Троценко Анна, 12.06.2008 р.н.",
  "id": {
    "$oid": "49463850904548"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/BkoLetJSMJg",
  "composition": "Л. Бетховен. Сонатина фа мажор",
  "name": "Турчик Софія, 18.05.2009 р.н.",
  "id": {
    "$oid": "49463850922831"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/05UlWKhTt58",
  "composition": "Е. Гріг. Вальс",
  "name": "Турчик Софія, 18.05.2009 р.н.",
  "id": {
    "$oid": "49463850946101"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/yNovz6UHTY0",
  "composition": "В. Верменич, обробка Г. Без\u2019язичного. «Чорнобривці»",
  "name": "Федоренко Єлизавета, 0.09.2008 р.н.",
  "id": {
    "$oid": "49463850959154"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/lIqtFtmqXgw",
  "composition": "М. Клементі. Сонатина №3, соль мажор",
  "name": "Федоренко Єлизавета, 0.09.2008 р.н.",
  "id": {
    "$oid": "49463850972481"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/BftkJayxUWU",
  "composition": "1. Л. Сухощеєва. Етюд; 2. О. Кимлик. «Мініатюрна Леонтовіана»",
  "name": "Чмелюк Анна,22.05.2009р.н.",
  "id": {
    "$oid": "49463851019971"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/1TKCgrWAjwA",
  "composition": "Й.С. Бах. Прелюдія і фуга соль мінор з ДТК-І",
  "name": "Шевчук Ніколетта, 26.04.2009 р.н.",
  "id": {
    "$oid": "49463851416376"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/wgc_kLIIi6g",
  "composition": "С. Борткевич. Етюд фа дієз мінор",
  "name": "Шевчук Ніколетта, 26.04.2009 р.н.",
  "id": {
    "$oid": "49463851439109"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/27MRJsZUufA",
  "composition": "Й.С. Бах. Прелюдія і фуга соль мінор з ДТК-І",
  "name": "Янчук Валерія, 10.06.2007 р.н.",
  "id": {
    "$oid": "49463851450880"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/trFPA1Jxxas",
  "composition": "Й. Гайдн. Соната ре мажор, І частина",
  "name": "Янчук Валерія, 10.06.2007 р.н.",
  "id": {
    "$oid": "49463851467678"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/xbJtxe2S600",
  "composition": "Е. Гріг. «Серце поета»",
  "name": "Біла Ксенія, 15.01.2005 р.н",
  "id": {
    "$oid": "49463851477944"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/0N_xV3U5G80",
  "composition": "І. Крамер. Етюд №5, ля мінор",
  "name": "Біла Ксенія, 15.01.2005 р.н",
  "id": {
    "$oid": "49463851491981"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/gcL5IbXixSE",
  "composition": "1. Ф. Шопен. Ноктюрн №2, тв. 9; 2. А. Штогаренко. Поема (присвячується М.Т. Коляді)",
  "name": "Бондаренко Денис, 28.01.2006 р.н.",
  "id": {
    "$oid": "49463851504942"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/wY9WDih_nvc",
  "composition": "М. Лисенко. «Пісня без слів»",
  "name": "Воронцова Діана, 25.02.2005 р.н.",
  "id": {
    "$oid": "49463851584588"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/DXvwsOBamJc",
  "composition": "Ф. Мендельсон. «Фантазія-каприс»",
  "name": "Воронцова Діана, 25.02.2005 р.н.",
  "id": {
    "$oid": "49463851612446"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/pE7P9M1iXRo",
  "composition": "1. Б. Лятошинський. Прелюдія тв.44 №4; 2. Ф.Ліст.«Женевські дзвони» з циклу «Роки мандрівок. Швейцарія»",
  "name": "Грушко Анастасія, 18.01.2006",
  "id": {
    "$oid": "49463851628278"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/JHqajp5YPqg",
  "composition": "1. К. Дебюссі. Арабеска №2; 2. С. Борткевич. Етюд №2, тв.15",
  "name": "Гултурян Поліна, 11.10.2006 р.н",
  "id": {
    "$oid": "49463851641314"
  },
  "group": "архів"
}, {
  // <iframe width="469" height="264" src="https://www.youtube.com/embed/UEiWcFRcPRw" title="М. Колесса &quot;Три коломийки&quot;." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  "videoUrl": "https://www.youtube.com/embed/UEiWcFRcPRw",
  "composition": "М. Колесса. «Три коломийки»",
  "name": "Дашевська Альона, 04.04.2005 р.н.",
  "id": {
    "$oid": "49463851651076"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/LXO77cqrCYw",
  "composition": "1. В. Косенко. Етюд фа дієз мінор, тв.8; 2. Р. Шуман. «Порив» із циклу «Фантастичні п\u2019єси»",
  "name": "Желязко Софія, 30.09.2006 р.н.",
  "id": {
    "$oid": "49463851668373"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/kCUxj-9RE3g",
  "composition": "Ф. Шопен. Полонез №1, тв.40",
  "name": "Назарук Ірина, 30.04.2004 р.н.",
  "id": {
    "$oid": "49463851677807"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/Rj0Twd7Ncw4",
  "composition": "М. Колесса. «Контрасти» з циклу «Картини Гуцульщини»",
  "name": "Назарук Ірина, 30.04.2004 р.н.",
  "id": {
    "$oid": "49463851691686"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/NmWNVs8QKwA",
  "composition": "1. Ф. Шопен. Полонез, тв.40 №2; 2. Ф. Шопен. Колискова, тв.57",
  "name": "Очкуренко Анжеліка, 02.10.2004 р.н.",
  "id": {
    "$oid": "49463851704002"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/YfU6GaRdP2A",
  "composition": "Ф. Шопен. Полонез соль дієз мінор",
  "name": "Пастушок Дарина, 07.02.2007 р.н.",
  "id": {
    "$oid": "49463851720181"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/_wB0gI_sNyY",
  "composition": "В. Барвінський. Прелюдія фа мажор",
  "name": "Пастушок Дарина, 07.02.2007 р.н.",
  "id": {
    "$oid": "49463851731038"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/WKr6YYC7rQw",
  "composition": "1. А. Коломієць. Етюд-експромт ля бемоль мажор, тв.2; 2. Ф. Шопен. Полонез №1, тв. 26",
  "name": "Собко Анна-Дарина, 22.12.2003 р.н.",
  "id": {
    "$oid": "49463851743942"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/p6RKAiw5xDs",
  "composition": "1. Е. Гріг. «З юних днів», тв.65; 2. Ф. Шуберт. Експромт №2, тв.90",
  "name": "Тимчук Аня, 07.08.2006 р.н.",
  "id": {
    "$oid": "49463851762304"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/kKYjehMcx0E",
  "composition": "1. Р. Шуман. «Віденський карнавал», тв.26: І. Allegro; 2. Ю. Іщенко. Прелюдія №14 мі бемоль мінор",
  "name": "Турська Марія, 11.04.2005 р.н.",
  "id": {
    "$oid": "49463851782144"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/2DO9o_3OHwE",
  "composition": "1. Р. Шуман. Новелетта №1, тв.21; 2. С. Шамінад. Креольський танець, тв.94",
  "name": "Філімончук Ернест, 20.02.2005 р.н.",
  "id": {
    "$oid": "49463851805448"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/nYIDFqUlz0I",
  "composition": "1. Л. Ревуцький. Прелюдія сі бемоль мінор; 2. К. Дебюссі. Дві арабески",
  "name": "Хрипко Єлизавета, 19.07.2006 р.н.",
  "id": {
    "$oid": "49463851827948"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/C22SLgWADec",
  "composition": "1. Е. Гріг. Імпровізація на дві норвезькі народні пісні, тв.29; 2. К. Деюссі. Етюд №11",
  "name": "Боднарчук Іванна, 19.01.2004 р.н.",
  "id": {
    "$oid": "49463851844347"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/kuwFNb83wGM",
  "composition": "Ян Сібеліус. Етюд ля мінор",
  "name": "Ден Ай, 26.01.1997 р.н.",
  "id": {
    "$oid": "49463851860570"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/9XQIpzitm9E",
  "composition": "С. Борткевич. Прелюдія №3, тв.3",
  "name": "Ден Ай, 26.01.1997 р.н.",
  "id": {
    "$oid": "49463851873375"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/0zUA_2ik2Uk",
  "composition": "1. Л. Бетховен. Соната №24, тв. 78; 2. М. Лисенко. Рапсодія на українські теми «Думка-шумка», тв.18 №2",
  "name": "Кучерява Марина, 17.08.2000 р.н.",
  "id": {
    "$oid": "49463851888511"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/tsqRe_YNiRk",
  "composition": "1. М. Скорик. Арія з Партити №5; 2. С. Борткевич. Етюд, тв.15 №9",
  "name": "Матвійчук Ірина, 27.05.2003 р.н.",
  "id": {
    "$oid": "49463851901938"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/Qw8HwtQYvJA",
  "composition": "Й. Брамс. Рапсодія №2, тв.79",
  "name": "Присакару Надія, 14.02.2002 р.н.",
  "id": {
    "$oid": "49463851915780"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/dOAQKn_YBAc",
  "composition": "В. Косенко. Етюд фа дієз мінор",
  "name": "Присакару Надія, 14.02.2002 р.н.",
  "id": {
    "$oid": "49463851931951"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/OppvQHNmaAc",
  "composition": "Ф. Шуберт. Клавірштюк, D 946 №1 Allegro assai, №2 Allegretto, №3 Allegrо",
  "name": "Сасюк Юлія, 15.06.2000 р.н.",
  "id": {
    "$oid": "49463851944928"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/idEZAASqVIE",
  "composition": "Ф. Ганіцький. «Урочистий полонез»",
  "name": "Нікітіна І.Р.",
  "id": {
    "$oid": "49463851955485"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/wHWzcObokFg",
  "composition": "І. Якушенко. «Сінематограф»",
  "name": "Нікітіна І.Р.",
  "id": {
    "$oid": "49463851966823"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/E8MWSvLIwUU",
  "composition": "1. К. Дебюссі. «Місячне сяйво»; 2. К. Бадельт, аранж. Д. Раднича. «Пірати Карибського моря»",
  "name": "Севастьянова О.Є.",
  "id": {
    "$oid": "49463851988188"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/36OGwdEoxj0",
  "composition": "1. Й С. Бах. Двоголосна інвенція соль мінор; 2. І  Беркович. Вальс",
  "name": "Коцюк Марія, 17.09.2012 р.н.",
  "id": {
    "$oid": "49463851988188345"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/4Mq-pHdWA5A",
  "composition": "М. Степаненко. Варіації",
  "name": "Гурська Глафіра, 22.06.2012 р.н.",
  "id": {
    "$oid": "49463851988188342ed5"
  },
  "group": "архів"
}, {
  "videoUrl": "https://www.youtube.com/embed/s9C5PsStJFw",
  "composition": "Барвінський. Український танок",
  "name": "Гурська Глафіра, 22.06.2012 р.н.",
  "id": {
    "$oid": "49463851988ff188345"
  },
  "group": "архів"
}];
let additionalInstruments = [{
  "videoUrl": "https://www.youtube.com/embed/YvtNZbpJQQo",
  "composition": "В. Гіллок. «A lively dance»",
  "name": "Войтович Ілля, 09.08.2013 р.н.",
  "id": {
    "$oid": "58243441313021"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/B_1a-i6iavo",
  "composition": "М. Айрон. «Les Embruns»",
  "name": "Войтович Ілля, 09.08.2013 р.н.",
  "id": {
    "$oid": "58243441433824"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/Anq7wahE-Bo",
  "composition": "М. Мордасов. «Бугі-Вугі»",
  "name": "Іванова Емілія, 24.12.2014 р.н.",
  "id": {
    "$oid": "58243441490338"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/qypBvNiYT1U",
  "composition": "М. Шентюрк (Терещук). «Маленька елегія»",
  "name": "Іванова Емілія, 24.12.2014 р.н.",
  "id": {
    "$oid": "58243441560202"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/MYeyvX7ofeo",
  "composition": "Т. Браун. «Танець вітру»",
  "name": "Пацюк Богуслава, 11.04.2008 р.н",
  "id": {
    "$oid": "58243441659028"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/DX5D94uOrBk",
  "composition": "Д. Старшинін. «Момент насолоди»",
  "name": "Пацюк Богуслава, 11.04.2008 р.н",
  "id": {
    "$oid": "58243441701556"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/yUHDmEOw5U0",
  "composition": "Й.С. Бах. Бурре сі мінор",
  "name": "Петраш Анна, 18.11.2003 р.н",
  "id": {
    "$oid": "58243441746212"
  },
  "group": "архів"
}, {
  "videoUrl": "https://youtube.com/embed/IEYISSZwWCA",
  "composition": "Е. Гріг. «У печері гірського короля»",
  "name": "Петраш Анна, 18.11.2003 р.н",
  "id": {
    "$oid": "58243441797599"
  },
  "group": "архів"
}];
let archive = myCards.concat(concertmasters).concat(ensemble).concat(ensembles).concat(concertmasters_2).concat(fortepianoSolo).concat(additionalInstruments);

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
/* harmony import */ var _Concertmasters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Concertmasters */ "./src/store/Concertmasters.jsx");






const group1 = `Номінація "Фортепіано соло"`;
const group2 = `Номінація «Фортепіанний ансамбль»`;
const group3 = `Номінація «Додатковий інструмент (фортепіано)»`;
const group4 = `Номінація «Концертмейстер»`;
let myCards = _Archive__WEBPACK_IMPORTED_MODULE_1__["archive"];
myCards = myCards.concat(_FortepianoSolo__WEBPACK_IMPORTED_MODULE_2__["fortepianoSolo"]).concat(_Ensemble__WEBPACK_IMPORTED_MODULE_3__["ensembles"]).concat(_AdditionalInstruments__WEBPACK_IMPORTED_MODULE_4__["additionalInstruments"]).concat(_Concertmasters__WEBPACK_IMPORTED_MODULE_5__["concertmasters"]);

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
    case 'group-4':
      let newCards4 = myCards.filter(card => card.group === group4).slice();
      return {
        cards: newCards4,
        isDataInPlace: true,
        cardCount: newCards4.length,
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
      return {
        ...state,
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
        cards: _Concertmasters__WEBPACK_IMPORTED_MODULE_5__["concertmasters"],
        isDataInPlace: true,
        cardCount: _Concertmasters__WEBPACK_IMPORTED_MODULE_5__["concertmasters"].length,
        error: ""
      };
  }
}
const cardStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(filmReducer);
cardStore.subscribe(() => console.log("FilmsStore state was changed, number of cards: " + cardStore.getState().cardCount));

/***/ }),

/***/ "./src/store/Concertmasters.jsx":
/*!**************************************!*\
  !*** ./src/store/Concertmasters.jsx ***!
  \**************************************/
/*! exports provided: concertmasters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concertmasters", function() { return concertmasters; });
let concertmasters = [];

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
let ensembles = [];

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
let fortepianoSolo = [];

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5mb1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5TZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWd1bGFySGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZXN1bHRzRmlsdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy9Qb3N0ZXJfMjAyNF91YS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3MvanVkZ2VzXzIwMjMuanBlZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZnMtcGFnZS1pbWdzL3Jmcy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnMuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL0FkZGl0aW9uYWxJbnN0cnVtZW50cy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL0FyY2hpdmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9DYXJkU3RvcmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9Db25jZXJ0bWFzdGVycy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL0Vuc2VtYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvRm9ydGVwaWFub1NvbG8uanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIlN0cmljdE1vZGUiLCJQcm92aWRlciIsInN0b3JlIiwiY2FyZFN0b3JlIiwiTWFpblNlY3Rpb24iLCJGaWxtV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZpbG1JbmZvIiwiSWZyYW1lQm94IiwiaWZyYW1lIiwicHJvcHMiLCJ3aWR0aCIsIkJ1dHRvbiIsImJ1dHRvbiIsIkNhcmQiLCJoZWlnaHQiLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwiY2FsY3VsYXRlZFdpZHRoIiwic2V0Q2FsY3VsYXRlZFdpZHRoIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJuYW1lIiwiY29tcG9zaXRpb24iLCJ2aWRlb1VybCIsInNob3dJZnJhbWUiLCJzZXRTaG93SWZyYW1lIiwib3BlblZpZGVvQnV0dG9uTmFtZSIsInNldE9wZW5WaWRlb0J1dHRvbk5hbWUiLCJvcGVuVmlkZW9IYW5kbGVyIiwiQnNGaWxsUGVyc29uRmlsbCIsIkZhQm9va09wZW4iLCJvbkNsaWNrIiwidmFsdWUiLCJzcmMiLCJMaW5rQ29udGFpbmVyIiwiV3JhcHBlciIsIkEiLCJhIiwiUCIsIlBvc3RlciIsIlBvc3RlckltZyIsImltZyIsImltZ1VybCIsIkluZm9QYWdlMiIsImhyZWYiLCJCaUxpbmtFeHRlcm5hbCIsInBvc3Rlcl8yIiwiSW5mb1BhZ2UiLCJwb3N0ZXJfMSIsImp1ZGdlc18yMDIzIiwiQ29tbW9uV3JhcHBlciIsIk1haW5TZWN0aW9uRmxleCIsImNhcmRzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImlzRGF0YUluUGxhY2UiLCJjYXJkQ291bnQiLCJzZWN0aW9uc0ZvckZpbHRlciIsImluZm9QYWdlIiwiRnJhZ21lbnQiLCJSZWd1bGFySGVhZGVyIiwiUmVzdWx0c0ZpbHRlciIsInNlY3Rpb25zIiwibWFwIiwiY2FyZCIsImtleSIsImlkIiwiJG9pZCIsIklucHV0IiwiaW5wdXQiLCJpbnB1dENvbG9yIiwiSW5wdXRTdHlsZSIsIklucHV0V3JhcGVyIiwiU3R5bGVkU3BhbiIsInNwYW4iLCJFcnJvciIsIldhcm4iLCJzZWFyY2hGaWVsZCIsInVzZVJlZiIsImVycm9yIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZXIiLCJzdHIiLCJTdHJpbmciLCJjdXJyZW50IiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJ0eXBlIiwibXNnIiwicXVlcnkiLCJoYW5kbGVLZXlQcmVzcyIsImV2ZW50IiwiQWlPdXRsaW5lRmlsZVNlYXJjaCIsIm9uS2V5UHJlc3MiLCJyZWYiLCJwbGFjZWhvbGRlciIsIkhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlIiwiRmlsdGVyQ29udGFpbmVyIiwiRmlsdGVyU2VjdGlvbiIsIkRpdlRoaW5MaW5lIiwiU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXIiLCJncm93XzAiLCJrZXlmcmFtZXMiLCJsZWZ0IiwiZ3Jvd18xIiwiVGhpbkxpbmVJbm5lckRpdiIsImFuaW1hdGlvbiIsInJlZExpbmVXaWR0aCIsInNldFJlZExpbmVXaWR0aCIsInJlZExpbmVMZWZ0Iiwic2V0UmVkTGluZUxlZnQiLCJzZXRBbmltYXRpb24iLCJtYXJrZWRTZWN0aW9uUmVmIiwicmVSZW5kZXJSZWRMaW4iLCJ0YXJnZXQiLCJjdXJyZW50U2VjdGlvbldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY3VycmVudFNlY3Rpb25MZWZ0IiwiY291bnRlciIsIm9uRmlsdGVyU2VjdGlvbkNsaWNrIiwic2VsZWN0ZWRTZWN0aW9uIiwic2VsZWN0ZWRTZWN0aW9uU3RyaW5nIiwic2VjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJJbmZvUGFnZSIsInJlbmRlcmVkU2VjdGlvbnMiLCJzZWMiLCJGYVVuaXZlcnNpdHkiLCJlIiwiRmFGb2xkZXIiLCJjaGlsZHJlbiIsImdldFdpbmRvd0RpbWVuc2lvbnMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aW5kb3ciLCJ3aW5kb3dEaW1lbnNpb25zIiwic2V0V2luZG93RGltZW5zaW9ucyIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkaXRpb25hbEluc3RydW1lbnRzIiwibXlDYXJkcyIsImNvbmNlcnRtYXN0ZXJzIiwiZW5zZW1ibGUiLCJlbnNlbWJsZXMiLCJjb25jZXJ0bWFzdGVyc18yIiwiZm9ydGVwaWFub1NvbG8iLCJhcmNoaXZlIiwiY29uY2F0IiwiZ3JvdXAxIiwiZ3JvdXAyIiwiZ3JvdXAzIiwiZ3JvdXA0IiwiZmlsbVJlZHVjZXIiLCJhY3Rpb24iLCJhcmNoaXZlQ2FyZHMiLCJmaWx0ZXIiLCJncm91cCIsInNsaWNlIiwibmV3Q2FyZHMiLCJuZXdDYXJkczEiLCJuZXdDYXJkczIiLCJuZXdDYXJkczQiLCJxIiwidG9Mb3dlckNhc2UiLCJuZXdDYXJkczMiLCJjYXJkTmFtZSIsImJvb2wiLCJzdGFydHNXaXRoIiwiY3JlYXRlU3RvcmUiLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtR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SixLQUFLLEVBQUUsRUFBRTtRQUNURyxhQUFhLEVBQUU7TUFDbkIsQ0FBQztJQUNMO01BQ0ksT0FBTztRQUNISCxLQUFLLEVBQUVnRyw4REFBYztRQUNyQjdGLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxTQUFTLEVBQUU0Riw4REFBYyxDQUFDOUQsTUFBTTtRQUNoQ1AsS0FBSyxFQUFFO01BQ1gsQ0FBQztFQUNUO0FBQ0o7QUFFTyxNQUFNN0UsU0FBUyxHQUFHNksseURBQVcsQ0FBQ2hCLFdBQVcsQ0FBQztBQUVqRDdKLFNBQVMsQ0FBQzhLLFNBQVMsQ0FBQyxNQUNoQnBELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlEQUFpRCxHQUFHM0gsU0FBUyxDQUFDK0ssUUFBUSxDQUFDLENBQUMsQ0FBQ3pILFNBQVMsQ0FDbEcsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUN2SEQ7QUFBQTtBQUFPLElBQUk0RixjQUFjLEdBQUcsRUFBRSxDOzs7Ozs7Ozs7Ozs7QUNBOUI7QUFBQTtBQUFPLElBQUlFLFNBQVMsR0FBRyxFQUFFLEM7Ozs7Ozs7Ozs7OztBQ0F6QjtBQUFBO0FBQU8sSUFBSUUsY0FBYyxHQUFHLEVBQUUsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc3hcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge01haW5TZWN0aW9ufSBmcm9tICcuL2NvbXBvbmVudHMvTWFpblNlY3Rpb24nO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge2NhcmRTdG9yZX0gZnJvbSBcIi4vc3RvcmUvQ2FyZFN0b3JlXCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17Y2FyZFN0b3JlfT5cbiAgICAgICAgICAgICAgICA8TWFpblNlY3Rpb24vPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7QWlGaWxsUGxheVNxdWFyZSwgQnNGaWxsUGVyc29uRmlsbCwgRmFCb29rT3Blbn0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcblxuY29uc3QgRmlsbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCBGaWxtSW5mbyA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG5gO1xuXG5cbmNvbnN0IElmcmFtZUJveCA9IHN0eWxlZC5pZnJhbWVgXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcbiAgaGVpZ2h0OiA0ODBweDtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgQGtleWZyYW1lcyBob3Jpem9udGFsLXNoYWtpbmcge1xuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIH1cbiAgICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSB9XG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpIH1cbiAgICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB9XG4gIH1cbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIDpob3ZlciB7XG4gICAgYW5pbWF0aW9uOiBob3Jpem9udGFsLXNoYWtpbmcgMC41cyBpbmZpbml0ZTtcbiAgfWA7XG5cbmV4cG9ydCBjb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG4gICAgY29uc3QgW2NhbGN1bGF0ZWRXaWR0aCwgc2V0Q2FsY3VsYXRlZFdpZHRoXSA9IHVzZVN0YXRlKDY0MCk7XG5cbiAgICAvL2hhbmRsaW5nIHJlc2l6ZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh3aWR0aCA8IDEwMDApIHNldENhbGN1bGF0ZWRXaWR0aCh3aWR0aCAtIDUwKTtcbiAgICAgICAgZWxzZSBzZXRDYWxjdWxhdGVkV2lkdGgoNjQwKTtcbiAgICB9LCBbd2lkdGhdKTtcblxuICAgIGNvbnN0IFtuYW1lLF0gPSB1c2VTdGF0ZShwcm9wcy5uYW1lKTtcbiAgICBjb25zdCBbY29tcG9zaXRpb24sXSA9IHVzZVN0YXRlKHByb3BzLmNvbXBvc2l0aW9uKTtcbiAgICBjb25zdCBbdmlkZW9VcmwsXSA9IHVzZVN0YXRlKHByb3BzLnZpZGVvVXJsKTtcbiAgICBjb25zdCBbc2hvd0lmcmFtZSwgc2V0U2hvd0lmcmFtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW29wZW5WaWRlb0J1dHRvbk5hbWUsIHNldE9wZW5WaWRlb0J1dHRvbk5hbWVdID0gdXNlU3RhdGUoXCLQktGW0LTQutGA0LjRgtC4INCy0ZbQtNC10L5cIik7XG5cbiAgICBjb25zdCBvcGVuVmlkZW9IYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBzZXRTaG93SWZyYW1lKCFzaG93SWZyYW1lKTtcbiAgICAgICAgaWYgKHNob3dJZnJhbWUpIHtcbiAgICAgICAgICAgIHNldE9wZW5WaWRlb0J1dHRvbk5hbWUoXCLQktGW0LTQutGA0LjRgtC4INCy0ZbQtNC10L5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRPcGVuVmlkZW9CdXR0b25OYW1lKFwi0JfQsNC60YDQuNGC0Lgg0LLRltC00LXQvlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGaWxtV3JhcHBlcj5cbiAgICAgICAgICAgIDxGaWxtSW5mbz5cbiAgICAgICAgICAgICAgICA8c3Bhbj48QnNGaWxsUGVyc29uRmlsbC8+IDxiPntuYW1lfTwvYj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj48RmFCb29rT3Blbi8+IHtjb21wb3NpdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29wZW5WaWRlb0hhbmRsZXJ9IHZhbHVlPXtvcGVuVmlkZW9CdXR0b25OYW1lfT57b3BlblZpZGVvQnV0dG9uTmFtZX08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIHtzaG93SWZyYW1lID8gPElmcmFtZUJveCBzcmM9e3ZpZGVvVXJsfSB3aWR0aD17Y2FsY3VsYXRlZFdpZHRofS8+IDogbnVsbH1cbiAgICAgICAgICAgIDwvRmlsbUluZm8+XG4gICAgICAgIDwvRmlsbVdyYXBwZXI+XG4gICAgKTtcbn1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0JpTGlua0V4dGVybmFsLCBHaVBvZGl1bVdpbm5lcn0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xuaW1wb3J0IGp1ZGdlc18yMDIzIGZyb20gIFwiLi9pbmZvLXBhZ2UtaW1ncy9qdWRnZXNfMjAyMy5qcGVnXCJcbmltcG9ydCBwb3N0ZXJfMiBmcm9tIFwiLi9yZnMtcGFnZS1pbWdzL3Jmcy5wbmdcIjtcbmltcG9ydCBwb3N0ZXJfMSBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy9Qb3N0ZXJfMjAyNF91YS5wbmdcIjtcblxuZXhwb3J0IGNvbnN0IExpbmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCBBID0gc3R5bGVkLmFgXG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMzVweDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogZGFya2JsdWU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG5cbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogZGFya3JlZDtcbiAgfVxuYDtcblxuY29uc3QgUCA9IHN0eWxlZC5kaXZgXG4gIEBrZXlmcmFtZXMgaG9yaXpvbnRhbC1zaGFraW5nIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB9XG4gICAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgfVxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KSB9XG4gICAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgfVxuICB9XG4gICAgXG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LWZhbWlseTogJ0p1cmEnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogZGFya3JlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICA6aG92ZXJ7XG4gICAgYW5pbWF0aW9uOiBob3Jpem9udGFsLXNoYWtpbmcgMC41cyBpbmZpbml0ZTtcbiAgfVxuYDtcblxuY29uc3QgUG9zdGVyID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBQb3N0ZXJJbWcgPSBzdHlsZWQuaW1nYFxuICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTBweCByZ2JhKDEwMCwgMCwgMCwgMC41KSk7XG4gICAgYDtcblxuICAgIHJldHVybiAoPFBvc3RlckltZyBzcmM9e3Byb3BzLmltZ1VybH0vPik7XG59XG5cbmV4cG9ydCBjb25zdCBJbmZvUGFnZTIgPSAoKSA9PiB7XG4gICAgcmV0dXJuICg8V3JhcHBlcj5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFfbjBuQlZSdzdjVDgtelJfQ0tCUTFaOGpsdHktY3lJSi9lZGl0P3VzcD1zaGFyaW5nJm91aWQ9MTEzODgzOTIxMjk5MTQ0NDQ5MDUzJnJ0cG9mPXRydWUmc2Q9dHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmlMaW5rRXh0ZXJuYWwvPiDQo9GH0LDRgdC90LjQutC4INC/0YDQvtC10LrRgtGDIMKr0KDRltCy0L3QtdC90YHRjNC60ZYg0YTQvtGA0YLQtdC/0ZbQsNC90L3RliDRgdGC0YPQtNGW0ZbMiMK7IDIwMjMgPC9BPlxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxQPtCX0LDQv9GA0L7RiNGD0ZTQvNC+INC00L4g0YPRh9Cw0YHRgtGWINGDINC/0YDQvtC10LrRgtGWPC9QPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxQb3N0ZXIgaW1nVXJsPXtwb3N0ZXJfMn0vPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbn1cblxuXG5leHBvcnQgY29uc3QgSW5mb1BhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuICg8V3JhcHBlcj5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzExRENtaFhKUmpnUTRQcEFRVW5pTDdlNkJyVFdzcUF0Mi9lZGl0P3VzcD1kcml2ZV9saW5rJm91aWQ9MTEzODgzOTIxMjk5MTQ0NDQ5MDUzJnJ0cG9mPXRydWUmc2Q9dHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmlMaW5rRXh0ZXJuYWwvPiDQn9C+0LvQvtC20LXQvdC90Y88L0E+XG4gICAgICAgICAgICAgICAgPEEgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMU9EMElrTWdRQlpYLWViQlFmenM4WDJtTDFoSlBvTUxzL2VkaXQ/dXNwPXNoYXJpbmcmb3VpZD0xMTM4ODM5MjEyOTkxNDQ0NDkwNTMmcnRwb2Y9dHJ1ZSZzZD10cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCaUxpbmtFeHRlcm5hbC8+INCe0YDQs9Cw0L3RltC30LDRhtGW0LnQvdC40Lkg0LrQvtC80ZbRgtC10YIg0LrQvtC90LrRg9GA0YHRgyA8L0E+XG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPFA+0JDRhNGW0YjQsCh1YSk8L1A+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPFBvc3RlciBpbWdVcmw9e3Bvc3Rlcl8xfS8+XG4gICAgICAgICAgICA8UD7QodC60LvQsNC0INC20YPRgNGWPC9QPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxQb3N0ZXIgaW1nVXJsPXtqdWRnZXNfMjAyM30vPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1Jlc3VsdHNGaWx0ZXJ9IGZyb20gXCIuL1Jlc3VsdHNGaWx0ZXJcIjtcbmltcG9ydCB7Q2FyZH0gZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1JlZ3VsYXJIZWFkZXJ9IGZyb20gXCIuL1JlZ3VsYXJIZWFkZXJcIjtcbmltcG9ydCB7SW5mb1BhZ2UsIEluZm9QYWdlMn0gZnJvbSBcIi4vSW5mb1BhZ2VcIjtcblxuY29uc3QgQ29tbW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJvcmRlcjogNnB4IHNvbGlkICMzMzM7XG4gIG1hcmdpbjogMjBweDtcbmA7XG5cbmNvbnN0IE1haW5TZWN0aW9uRmxleCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgTWFpblNlY3Rpb24gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjYXJkcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhcmRzKTtcbiAgICBjb25zdCBpc0RhdGFJblBsYWNlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuaXNEYXRhSW5QbGFjZSk7XG4gICAgY29uc3QgY2FyZENvdW50ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2FyZENvdW50KTtcbiAgICBjb25zdCBzZWN0aW9uc0ZvckZpbHRlciA9IFtcbiAgICAgICAgYNCQ0YDRhdGW0LLQvdGWINCy0ZbQtNC10L5gLFxuICAgICAgICBg0J3QvtC80ZbQvdCw0YbRltGPIMKr0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L7Cu2AsXG4gICAgICAgIGDQndC+0LzRltC90LDRhtGW0Y8gwqvQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjMK7YCxcbiAgICAgICAgYNCd0L7QvNGW0L3QsNGG0ZbRjyDCq9CU0L7QtNCw0YLQutC+0LLQuNC5INGW0L3RgdGC0YDRg9C80LXQvdGCICjRhNC+0YDRgtC10L/RltCw0L3QvinCu2AsXG4gICAgICAgIGDQndC+0LzRltC90LDRhtGW0Y8gwqvQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAwrtgLFxuICAgICAgICBg0J/RgNC+INC60L7QvdC60YPRgNGBYCxcbiAgICAgICAgXCLQoNGW0LLQvdC10L3RgdGM0LrRliDRhNC+0YDRgtC10L/RltCw0L3QvdC90ZYg0YHRgtGD0LTRltGXXCJdO1xuXG4gICAgbGV0IGluZm9QYWdlID0gKGNhcmRDb3VudD09PS0xKT88SW5mb1BhZ2UvPjo8SW5mb1BhZ2UyLz5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UmVndWxhckhlYWRlciBjYXJkQ291bnQ9e2NhcmRDb3VudH0vPlxuICAgICAgICAgICAgPFJlc3VsdHNGaWx0ZXIgc2VjdGlvbnM9e3NlY3Rpb25zRm9yRmlsdGVyfS8+XG4gICAgICAgICAgICB7aXNEYXRhSW5QbGFjZSA/IChcbiAgICAgICAgICAgICAgICA8Q29tbW9uV3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8TWFpblNlY3Rpb25GbGV4PlxuICAgICAgICAgICAgICAgICAgICB7Y2FyZHMubWFwKGNhcmQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjYXJkLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9Vcmw9e2NhcmQudmlkZW9Vcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9zaXRpb249e2NhcmQuY29tcG9zaXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXJkLmlkLiRvaWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgKSl9PC9NYWluU2VjdGlvbkZsZXg+PC9Db21tb25XcmFwcGVyPikgOiBpbmZvUGFnZX08Lz4pO1xufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtBaU91dGxpbmVGaWxlU2VhcmNoLCBIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcbiAgd2lkdGg6IDE1JTtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG5cbiAgOmhvdmVyIHtcbiAgICBib3JkZXI6IHNvbGlkIGRhcmtyZWQgMnB4O1xuICAgIGNvbG9yOiBkYXJrcmVkO1xuICB9YDtcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaW5wdXRDb2xvciB8fCBcInBhbGV2aW9sZXRyZWRcIn07XG5gO1xuXG5cbmNvbnN0IElucHV0U3R5bGUgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNTAlO1xuYDtcblxuY29uc3QgSW5wdXRXcmFwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNjBweDtcbmA7XG5cbmNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xuYDtcblxuY29uc3QgRXJyb3IgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxN3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtgXG5cbmNvbnN0IFdhcm4gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxN3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtgXG5cbmV4cG9ydCBjb25zdCBSZWd1bGFySGVhZGVyID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBzZWFyY2hGaWVsZCA9IHVzZVJlZigpO1xuICAgIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZXJyb3IpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICBsZXQgc3RyID0gU3RyaW5nKHNlYXJjaEZpZWxkLmN1cnJlbnQudmFsdWUpO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA8IDMgfHwgc3RyLmluY2x1ZGVzKFwiIFwiKSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiRVJST1JcIiwgbXNnOiBcItCR0YPQtNGMINC70LDRgdC60LAg0LLQstC10LTRltGC0Ywg0LHRltC70YzRiNC1IDMg0YHQuNC80LLQvtC70ZbQsiDRliDQvdC1INCy0LjQutC+0YDQuNGB0YLQvtCy0YPQudGC0LUg0L/RgNC+0LHRltC7XCJ9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIlNFQVJDSFwiLCBxdWVyeTogc3RyfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPElucHV0V3JhcGVyPlxuICAgICAgICAgICAgICAgIDxJbnB1dFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3Bhbj48QWlPdXRsaW5lRmlsZVNlYXJjaC8+0J/QvtGI0YPQuiDQstGW0LTQtdC+INC/0L4g0L/RgNGW0LfQstC40YnRgyDRg9GH0LDRgdC90LjQutCwIDwvU3R5bGVkU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfSByZWY9e3NlYXJjaEZpZWxkfSB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00ZbRgtGMINC/0YDRltC30LLQuNGJ0LUg0YPRh9Cw0YHQvdC40LrQsC4uLlwiIGlucHV0Q29sb3I9XCJibGFja1wiLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0U3R5bGU+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIlwiIG9uQ2xpY2s9e2hhbmRsZXJ9PtCf0L7RiNGD0Lo8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvSW5wdXRXcmFwZXI+XG4gICAgICAgICAgICB7ZXJyb3IgIT09IFwiXCIgPyA8RXJyb3I+PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz57ZXJyb3J9PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz48L0Vycm9yPiA6IG51bGx9XG4gICAgICAgICAgICB7cHJvcHMuY2FyZENvdW50ID09PSAwID9cbiAgICAgICAgICAgICAgICA8V2Fybj48SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPtCy0ZbQtNC10L4g0L3QtSDQt9C90LDQudC00LXQvdGWPEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz48L1dhcm4+IDogbnVsbH1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtGYUZvbGRlciwgRmFVbml2ZXJzaXR5fSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vaG9va3MvVXNlV2luZG93RGltZW5zaW9uc1wiO1xuXG5jb25zdCBGaWx0ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbiAgZm9udC1mYW1pbHk6ICdKdXJhJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjZweDtcbiAgZmxleC13cmFwOiB3cmFwO2A7XG5cbmNvbnN0IEZpbHRlclNlY3Rpb24gPSBzdHlsZWQoRmlsdGVyQ29udGFpbmVyKWBcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XG4gIDpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGRhcmtyZWQ7XG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAxMHB4O1xuICAgIFxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRGl2VGhpbkxpbmUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBncmF5IHNvbGlkIDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgaGVpZ2h0OiAyJTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2U7XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDE1cHg7XG5gO1xuXG5jb25zdCBncm93XzAgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XG4gIH1cbiAgMCUge1xuICAgIGxlZnQ6IDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy5sZWZ0fTtcbiAgfVxuYDtcblxuY29uc3QgZ3Jvd18xID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICB9XG4gIDAlIHtcbiAgICBsZWZ0OiAxcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH07XG4gIH1cbmA7XG5cblxuZXhwb3J0IGNvbnN0IFRoaW5MaW5lSW5uZXJEaXYgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XG4gIGxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGhlaWdodDogMSU7XG4gIGFuaW1hdGlvbjogJHtwcm9wcyA9PiAocHJvcHMuYW5pbWF0aW9uICUgMiA9PT0gMCkgPyBncm93XzAgOiBncm93XzF9IDAuNXMgbGluZWFyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFJlc3VsdHNGaWx0ZXIgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IFtzZWN0aW9ucyxdID0gdXNlU3RhdGUocHJvcHMuc2VjdGlvbnMpO1xuXG4gICAgY29uc3QgW3JlZExpbmVXaWR0aCwgc2V0UmVkTGluZVdpZHRoXSA9IHVzZVN0YXRlKFwiMTBweFwiKTtcbiAgICBjb25zdCBbcmVkTGluZUxlZnQsIHNldFJlZExpbmVMZWZ0XSA9IHVzZVN0YXRlKFwiMTBweFwiKTtcbiAgICBjb25zdCBbYW5pbWF0aW9uLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3Qge2hlaWdodCwgd2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuICAgIGNvbnN0IG1hcmtlZFNlY3Rpb25SZWYgPSB1c2VSZWYoKTtcblxuICAgIC8vaGFuZGxpbmcgcmVkTGluZSBvbiByZXNpemVcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZVJlbmRlclJlZExpbih7dGFyZ2V0Om1hcmtlZFNlY3Rpb25SZWYuY3VycmVudH0pXG4gICAgfSwgW3dpZHRoXSk7XG5cbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgICBmdW5jdGlvbiByZVJlbmRlclJlZExpbihldmVudCkge1xuICAgICAgICBtYXJrZWRTZWN0aW9uUmVmLmN1cnJlbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGxldCBjdXJyZW50U2VjdGlvbldpZHRoID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBsZXQgY3VycmVudFNlY3Rpb25MZWZ0ID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSAxMDtcbiAgICAgICAgc2V0UmVkTGluZVdpZHRoKGN1cnJlbnRTZWN0aW9uV2lkdGggKyBcInB4XCIpO1xuICAgICAgICBzZXRSZWRMaW5lTGVmdChjdXJyZW50U2VjdGlvbkxlZnQgKyBcInB4XCIpO1xuICAgICAgICBsZXQgY291bnRlciA9IGFuaW1hdGlvbiArIDE7XG4gICAgICAgIHNldEFuaW1hdGlvbihjb3VudGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZpbHRlclNlY3Rpb25DbGljayhzZWxlY3RlZFNlY3Rpb24sIGV2ZW50KSB7XG4gICAgICAgIHJlUmVuZGVyUmVkTGluKGV2ZW50KTtcbiAgICAgICAgbGV0IHNlbGVjdGVkU2VjdGlvblN0cmluZyA9IHNlbGVjdGVkU2VjdGlvbi5zZWN0aW9uO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFNlY3Rpb25TdHJpbmcpO1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkU2VjdGlvblN0cmluZykge1xuICAgICAgICAgICAgY2FzZSBg0KDRltCy0L3QtdC90YHRjNC60ZYg0YTQvtGA0YLQtdC/0ZbQsNC90L3RliDRgdGC0YPQtNGW0ZdgOlxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIlJGU19QQUdFXCJ9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYNCQ0YDRhdGW0LLQvdGWINCy0ZbQtNC10L5gOlxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIkFSQ0hJVkVcIn0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBg0J3QvtC80ZbQvdCw0YbRltGPIMKr0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L7Cu2A6XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZ3JvdXAtMVwifSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGDQndC+0LzRltC90LDRhtGW0Y8gwqvQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjMK7YDpcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJncm91cC0yXCJ9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYNCd0L7QvNGW0L3QsNGG0ZbRjyDCq9CU0L7QtNCw0YLQutC+0LLQuNC5INGW0L3RgdGC0YDRg9C80LXQvdGCICjRhNC+0YDRgtC10L/RltCw0L3QvinCu2A6XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZ3JvdXAtM1wifSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGDQndC+0LzRltC90LDRhtGW0Y8gwqvQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAwrtgOlxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTRcIn0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVySW5mb1BhZ2Uoc2VjdGlvbikge1xuICAgICAgICBpZiAoc2VjdGlvblswXT09PVwi0KDRltCy0L3QtdC90YHRjNC60ZYg0YTQvtGA0YLQtdC/0ZbQsNC90L3QvdGWINGB0YLRg9C00ZbRl1wiKXtcbiAgICAgICAgICAgIHJlUmVuZGVyUmVkTGluKHNlY3Rpb25bMV0pO1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiUkZTX1BBR0VcIn0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVSZW5kZXJSZWRMaW4oc2VjdGlvblsxXSk7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJJTkZPX1BBR0VcIn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlbmRlcmVkU2VjdGlvbnMgPSBzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgc2VjdGlvbiA9PT0gXCLQn9GA0L4g0LrQvtC90LrRg9GA0YFcIiB8fCBzZWN0aW9uID09PSBcItCg0ZbQstC90LXQvdGB0YzQutGWINGE0L7RgNGC0LXQv9GW0LDQvdC90L3RliDRgdGC0YPQtNGW0ZdcIj9cbiAgICAgICAgICAgIDxGaWx0ZXJTZWN0aW9uICBvbkNsaWNrPXsoKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2VjID0gW3NlY3Rpb24sZXZlbnRdXG4gICAgICAgICAgICAgICAgcmVuZGVySW5mb1BhZ2Uoc2VjKVxuXG4gICAgICAgICAgICB9fSBrZXk9e3NlY3Rpb259PiA8RmFVbml2ZXJzaXR5Lz57c2VjdGlvbn08L0ZpbHRlclNlY3Rpb24+XG4gICAgICAgICAgICA6IDxGaWx0ZXJTZWN0aW9uICByZWY9e21hcmtlZFNlY3Rpb25SZWZ9IG9uQ2xpY2s9e2UgPT4gb25GaWx0ZXJTZWN0aW9uQ2xpY2soe3NlY3Rpb259LCBlKX0ga2V5PXtzZWN0aW9ufT4gPEZhRm9sZGVyLz57c2VjdGlvbn08L0ZpbHRlclNlY3Rpb24+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxGaWx0ZXJDb250YWluZXIgY2hpbGRyZW49e3JlbmRlcmVkU2VjdGlvbnN9Lz5cbiAgICAgICAgICAgIDwvU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXI+XG4gICAgICAgICAgICA8RGl2VGhpbkxpbmU+PFRoaW5MaW5lSW5uZXJEaXYgd2lkdGg9e3JlZExpbmVXaWR0aH0gbGVmdD17cmVkTGluZUxlZnR9IGFuaW1hdGlvbj17YW5pbWF0aW9ufS8+PC9EaXZUaGluTGluZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG4iLCJ2YXIgc3JjID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIlBvc3Rlcl8yMDI0X3VhLWMzNzNjOWE2ZmIyNjRkMzM3ZjY0ZjIyZjk3NWVjZDdmLnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjIzMzksaGVpZ2h0OjMzMDgsZm9ybWF0OlwicG5nXCIsdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gc3JjO319OyIsInZhciBzcmMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwianVkZ2VzXzIwMjMtYTc4NjM4ZjU5OWE5NDdjYjViOThkYjlmMDhlMzM2MDMuanBlZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjM2MDAsaGVpZ2h0OjUwODQsZm9ybWF0OlwianBlZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiLCJ2YXIgc3JjID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInJmcy0yM2E5ZmY0MjNiNjU2ZTRmN2ExYmQ0MmRhOTY0MzY5Zi5wbmdcIjttb2R1bGUuZXhwb3J0cz17c3JjOnNyYyx3aWR0aDoyNzAwLGhlaWdodDozOTAwLGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBnZXRXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIGNvbnN0IHsgaW5uZXJXaWR0aDogd2lkdGgsIGlubmVySGVpZ2h0OiBoZWlnaHQgfSA9IHdpbmRvdztcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2luZG93RGltZW5zaW9ucygpIHtcbiAgICBjb25zdCBbd2luZG93RGltZW5zaW9ucywgc2V0V2luZG93RGltZW5zaW9uc10gPSB1c2VTdGF0ZShnZXRXaW5kb3dEaW1lbnNpb25zKCkpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgICAgICAgc2V0V2luZG93RGltZW5zaW9ucyhnZXRXaW5kb3dEaW1lbnNpb25zKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gd2luZG93RGltZW5zaW9ucztcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0JykpO1xuXG4iLCJleHBvcnQgbGV0IGFkZGl0aW9uYWxJbnN0cnVtZW50cyA9IFtdIiwibGV0IG15Q2FyZHMgPSBbXG4gICAge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCQ0LPRgNCw0YLRltC90LAg0KHRgtCw0L3RltGB0LvQsNCyLCA5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCT0LvRltC90LrQsC4gJyfQn9C+0YfRg9GC0YLRjycnLCAgICAgIDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0KLQsNC90L7QuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5NHl0X3NLQzVFdDNyNDl6Q0VSc2RCWmVEUWdZLUdfaS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzA4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQsNC70ZbQs9GD0YDQsCDQktCw0YDQstCw0YDQsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jwu0JvQtdC80ZbRiNC60L4uICcn0JrQvtC70L7QvNC40LnQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWM2aFRJcURsLWNBRjNCcjNsMWMydXdxRlpzTFZTUFR2L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMDlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktCw0LvRltCz0YPRgNCwINCS0LDRgNCy0LDRgNCwLCA5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi7QnNCw0LrRgdGW0LzQvtCyLiAnJ9CX0LDQtNC30LXRgNC60LDQu9C70Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNVlyNlF4bTRyc3RET01VMnZHbjVKd3E1VmZVcE4yU0QvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LDRgdC40LvQtdCy0YHRjNC60LAg0KXRgNC40YHRgtC40L3QsCw3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JPRltC70LvQvtC6Licn0KHQsNC80L7RgtC90Y8g0LHQsNC70YzQvdCwINC30LDQu9CwJycsICAgMinQoi7QoNC+0YHRgtC40LzQsNGI0LXQvdC60L4uJyfQp9Cw0LrQu9GD0L0nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR3R4VUt1VWtMS0FuaDVvQ2Y5Rmx1aVVUUW9KQ1RiTU0vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7Qu9C40L3QtdGG0Ywg0J7Qu9C10LrRgdCw0L3QtNGALCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0JrQvtC70L7QtNGD0LEuICcn0JDRgNC60LDQvScnLDIp0KQu0KDQuNCx0ZbRhtGM0LrQuNC5LiAnJ9Cg0LXQs9C+0YLRg9GI0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfQ09QZVB6d2RnUzdVX09qRXhPcHY4bm96MW1pVGU4Yy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzBjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQsNC70LDQs9Cw0L0g0JrQsNGC0LXRgNC40L3QsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQtdC80LAg0Lcg0LLQsNGA0ZbQsNGG0ZbRj9C80LgsIDIp0JMu0JrRg9GI0L3QsNGA0LXQvdC60L4uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb0JsVWZYV3FsaDV1RHNERkNYYkhnYzdYR2lBSkdiTEgvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LXRgNCw0YHQuNC80LXQvdC60L4g0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JIu0KDQsNGH0LrQvtCy0YHRjNC60LjQuS4g0KLQvtC60LDRgtC40L3QsC4gMinQki7QmtC+0YHQtdC90LrQvi4gJyfQnNC10LvQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFER25zU1FHbEJ1OFhfb0RQdDNZS3RLbWlWelYtRzNxSi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzBlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQvtC70L7QtNC+0LLRgdGM0LrQsCDQodC+0YTRltGPLCA3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0IYu0JLQsNC90YXQsNC70Ywu0KDQvtC90LTQviwgMinQnC7QlNGA0LXQvNC70Y7Qs9CwLicn0JLQtdGB0LXQu9CwINCz0YDQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEyS3V0ai1vd3BzcjhoZWxybV9rRlpoMXlRd01qRUM3QS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzBmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQvtC70YPQsSDQkNC70ZbQvdCwLCA5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCDQhtGHLiwgMinQkS7QlNCy0LDRgNGW0L7QvdCw0YEuINCf0YDQtdC70Y7QtNGW0Y9cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXV3aEtNS2RKWkloUnpuTTNWVTVtVHFFdUt4eFRlc2FPL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0LjQs9C+0YAn0ZTQstCwINCa0LDRgtC10YDQuNC90LAsIDgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQoNCw0L3QvtC6JycsICAgMinQhi7QmtC+0YDQvtC70YzQutC+0LLQsC4nJ9CT0L7RgNC+0LHRh9C40LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYWlNdjVMd1lWOW0yd3otU0pNR254ZlVxSVJUOU1fRXcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LDQvdGO0Log0ITQu9C40LfQsNCy0LXRgtCwLCA3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JvRjtCx0LDRgNGB0YzQutC40LkuJyfQotCw0L3RhtGO0LLQsNC70YzQvdCwJycsIDIpINCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4g0JLQsNC70YzRgVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdlRrX21BQl9FQ2g5VkR3UjZFTWFzWTF5MjFLV3JTWUgvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCU0YDQvtCz0LDQvSAg0JzRltC70LDQvdCwLCA1INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JzQsNC50ZTRgC4gJyfQktC10YHQtdC70LAg0LPRgNCwJycsIDIp0JQu0JHQsNGI0YLQtdC50L0uICcn0JLQsNC70YzRgSDRgdC70L7QvdC10L3Rj9GCJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVhiMGdJZ0Z5Q25MdUN4am41a2xhZVEwTGw5RHNrUlB6L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNGA0L7Qt9C00L7QstCwINCE0LvQuNC30LDQstC10YLQsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUu0JzQtdC90YPQtdGCLiAyKdCTLtCa0LvQsNGB0YHQtdC9LiDQn9C+0LvRjNC60LBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXI1XzE4cFI3Qkx4RFNERW5NRDdySE5HalI5emlFaUduL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQl9Cx0ZbRgCDQnNCw0YDRltGPLCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0JPQtdC00ZbQutC1LiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwgICAg0IYg0YcuLCAyKdCgLtCo0YPQvNCw0L0uJyfQn9C10YDRiNCwINCy0YLRgNCw0YLQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfN3FuM2ZUdXRkS0djR2RiZ3YxM3JLb2tKOGp4Z2szYS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjNC60ZbQsiDQntC70LXQutGB0LDQvdC00YDQsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCU0ZbQsNCx0LXQu9C70ZYuINCh0LrQtdGA0YbQviwgIDIp0J4u0JPQtdC00ZbQutC1LiAnJ9Cc0LDQu9C10L3RjNC60LAg0L8n0ZTRgdCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXZZZVZrUmFWMW1iMzN1SjFER01yMjBxb2lrRkNyOUF5L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JzQsNGA0ZbQsNC8LCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCc0LDQudC60LDQv9Cw0YAuICcn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0YHQvtC70Ywg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xclJsTE1Kam9Xd1RWdXA3X3ZWTUQ0RDNubDJZLWxzcE8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQnNCw0YDRltCw0LwsIDgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCa0LjRgNC10LnQutC+LiAnJ9Ch0YLRgNC40LEt0YHQutC+0LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSW1wUHE5bmNiTWg1VDFTY0FIZkRtejU3QkRsTFpDRjIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0YHRg9C/0L7QstCwINCQ0LvRltGB0ZbRjywgOCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QoNC10LnQvdC10LrQtS4gJyfQk9Cw0LLQvtGCJycsIDIp0Jku0KEu0JHQsNGFLiAnJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINC00L4g0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMGc5Q0NKb1hSemVHOENpRmhnbkVCelRRQkxJV0RhbkEvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QstCw0LvQtdC90LrQviDQktCw0YDQstCw0YDQsCwgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCT0LXRgtCw0LvQvtCy0LAuJyfQoNCw0L3QvtC6INCyINC70ZbRgdGWJycsICAyKdCSLtCf0L7QtNCy0LDQu9CwLiAnJ9Ca0LDQv9GA0LjQt9GD0LvRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTMzhfb0VDT0JvN0tHRFYxYXpKVXgzek9Zd2dRRVFJVi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzFhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtGA0LXQvdGW0LLRgdGM0LrQsCDQlNCw0YAn0Y8sIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KAu0JLQsNC90LTQsNC7Licn0JLQvtC00L7Qs9GA0LDQuScnLCAgICAgICAgIDIp0J8u0JfQsNGF0LDRgNC+0LIuJyfQl9C90LDQudC+0LzQuNC5INGB0LjQu9GD0LXRgicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5Q0F6UENhV3JBTl9TV3phSkZkRXB4UElPUXctcmZMVS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzFiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtGB0YLQtdC90LrQviDQr9GA0L7RgdC70LDQstCwLCA3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QmtC+0YHQtdC90LrQvi4gJyfQnNC10LvQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDZGRZY295Z1RjdG9hYkdRRjdwVDJwb1J2Q3VwVkdfYy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzFjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtGB0YLQtdC90LrQviDQr9GA0L7RgdC70LDQstCwLCA3INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QmdGU0L3RgdC10L0uJyfQp9Cw0YDRltCy0L3QuNC5INGC0LDQvdC+0LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdUIyOWJUUEVpWWR1Z0pmTE9abDRTUUdyRlk5blFwci0vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0LDRgtC60L7QstGB0YzQutCwINCE0LvQuNC30LDQstC10YLQsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0L7RgdC10L3QutC+LiDQktCw0LvRjNGBLCAgICAyKdCeLtCT0YDQtdGH0LDQvdGW0L3QvtCyLicn0JzRltC5INC60L7QvdC40LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNllBdy1xN2Y4RjlKQlBtZm44dEVrcEpUODFKN0VhaEEvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0ZbRiNC80LDQvSDQlNCw0YDQuNC90LAsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7Qn9C+0LTQstCw0LvQsC4nJ9Cc0LDRgNGILdCz0YDQvtGC0LXRgdC6JycsICAgICAgICAgIDIp0KEu0JzQsNC50LrQsNC/0LDRgC4gJyfQmtC+0LvQuNGB0LrQvtCy0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTnNXejNUUjBTS2lUdGNOQ0FKZTA1OWJoaEZvbXRfTkUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDQs9C+0LvQsCDQodC+0YTRltGPLCA4INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCvLtCR0L7QsdCw0LvRltC6Licn0KHQstGP0YLQutC+0LLQsCDQv9C+0LvRjNC60LAnJzsgMinQhi7QkdC10YDQutC+0LLQuNGHLiDQodC+0L3QsNGC0LjQvdCwINGB0L7Qu9GMINC80LDQttC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWd1QXhzNWdfd2JHdl90d3FpeXBvMGU4RkhPd3VtLUloL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LfRg9GA0LXQvdC60L4g0JzQsNC50Y8sIDgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC4g0JHQvtCx0LXRgC4gJyfQkNCz0LXQvdGCINClJycsICAgICAgICAgIDIp0IYu0IbQvtGA0LTQsNC9LiAnJ9Cf0L7Qu9GO0LLQsNC90L3RjyDQvdCwINC80LXRgtC10LvQuNC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSWUxV0NRcGdQdUxZZEtOeFZHdUxrZUlWbllKTlpKOVQvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDRgNGH0LXQvdC60L4g0ITQu9C40LfQsNCy0LXRgtCwLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLicn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0LTQviDQvNGW0L3QvtGALCAyKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQkdCw0LHQsCDQr9Cz0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWkpvNEdVTFo5c2ZjVXVBcEY1anlvSElVVl9JS0FWcmcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDRgNGH0YPQuiDQnNCw0LrRgdC40LwsIDgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCkLiDQqNC/0ZbQvdC00LvQtdGALiDQodC+0L3QsNGC0LjQvdCwLCDRgtCyLjE1NyDihJY0XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFzQzdNVWpja25yblpaWjVoZk1DWGJTdnMzNktBM3BwVi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzIzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNGA0YfRg9C6INCc0LDQutGB0LjQvCwgOCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCT0ZbQu9C70L7Qui4gJyfQmtCw0L/RgNGW0YfRltGU0YLRgtC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVlkQWlodkFRa0NUOGJieVc0NHBRaTJpWmhtWDFjM0t6L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC+0YLRg9C30LrQuNC90LAg0JvRltC00ZbRjywgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0JHRltC70LDRh9C10L3QutC+LiAnJ9Cj0LrRgNCw0ZfQvdGB0YzQutC40Lkg0YLQsNC90L7QuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFicE85ZEhBY2JQOEtsYVdUXzFuWFhRaVplYnVEOEYwcC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQvtGC0YPQt9C60LjQvdCwINCb0ZbQtNGW0Y8sIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCc0L7RhtCw0YDRgi4gJyfQnNC10L3Rg9C10YInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQ19teEFVNjVWdnZ2ZmlQb1JRc2NLUjBvVURXcEhEUXQvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCd0L7QstC+0YHRltC70YzRgdGM0LrQsCDQmtCw0YLQtdGA0LjQvdCwLCA3INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAg0YLQsi4zNiwg0IYt0IbQhtCG0YcuLCAyKdCGLtCR0LXRgNC60L7QstC40YcuINCf0YDQtdC70Y7QtNGW0Y9cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVk3MkNGTE9NUGlid1RVUGdXT21zUUgzWUpQdmlCakRhL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQntC70YzRhdC+0LLRgdGM0LrQsCDQkNC90ZbRgtCwLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQhi7Qn9Cw0LLQu9GW0LouICcn0KHQvdGW0LbQuNC90LrQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFycy1WZ0ZNbklZWlZtOWtPak5oNkZUbF9QMENBRFJCMS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qu9GM0YXQvtCy0YHRjNC60LAg0JDQvdGW0YLQsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J0uINCa0LDRgNC/0LXQvdC60L4uINCV0YLRjtC0INGB0ZYg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa1MzQnFRdzQtbXNNb3puTzNOel9pV2M1eXRsSk9GVG0vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCe0YHRgtCw0L/Rh9GD0Log0JrQsNGA0ZbQvdCwLiA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JPRltC70LvQvtC6ICcn0JTQt9Cy0ZbQvdC+0YfQutC4JycsIDIp0IYu0KXRg9GC0L7RgNGP0L3RgdGM0LrQuNC5LiAnJ9CS0L7Qs9C90ZbQstC+0YfQutCwLdGB0YLRgNC40LHRg9C90ZbQstC+0YfQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZSQWNOMk82a3VuS1pBRnJiZ0JIc0VOaVpnOWlLczRHL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMmFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQntGF0YDRltC9INCv0YDQtdC80LAsIDgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5LiAnJ9Cd0L7QstC10LvQsCcnLCAgICAgIDIp0KEu0JzQsNC50LrQsNC/0LDRgC4nJ9Ci0L7QutCw0YLQuNC90LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xencxSkswSjRkOEhrLXpuYnYtNW9EbmEtcUwzY3dSRVAvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDQstC70LXQvdC60L4g0KHRgtC10YTQsNC90ZbRjywgNyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7Qm9GO0LHQsNGA0YHRjNC60LjQuS4gJyfQn9GW0YHQvdGPJycsMikg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5Licn0JrQu9C+0YPQvdC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUltbndKajJEZXF6LVRKZnZYQUNDclpwaVpOVDNCbktIL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMmNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0L3RjNC60L7QstCwINCQ0L3QvdCwLCA4INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4gJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDQtNC+INC80ZbQvdC+0YAsICAgICAgICAyKdCbLtCo0YPQutCw0LnQu9C+LiAnJ9CG0L3RgtC10YDQvNC10YbQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5ckFIcjZpMTdOU2hQNXFhSW1Qbld4LXhKUWpDTU15Mi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNGA0YTRjNC+0L3QvtCyINCU0LzQuNGC0YDQviwgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCS0LvQsNC00LjQutGW0L3QsC3QkdCw0YfQuNC90YHRjNC60LAuJyfQqdC+0YHRjCDRgdGD0LzQvdC1JycsIDIp0J4u0JPQtdC00ZbQutC1LiAnJ9Ci0LDQvdC10YbRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFORGR3NTdSc3JtTHJFX3lXU0cwdUZKWEVqV2NHcUdtUi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QvtCz0L7RgNGU0LvQvtCyINCQ0YDRgtC10LwsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuICcn0JzQtdC90YPQtdGCJycsIDIp0J0u0J3QuNC20LDQvdC60ZbQstGB0YzQutC40LkuICcn0JrQvtC70L7QvNC40LnQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5lODZpTS1OVXM2TmNpb0JzdlVqZlFhNk1uN2NTQVI3L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMmZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GD0LfQsNC90L7QstCwINCc0LDRgNGW0Y8sIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoy4g0JPRltC70LvQvtC6LiAnJ9Ca0L7RgNC+0LvRltCy0YHRjNC60LjQuSDQvNC10L3Rg9C10YInJywgMinQhi7QhtC+0YDQtNCw0L0uIMKr0J/QvtC70Y7QstCw0L3QvdGPINC90LAg0LzQtdGC0LXQu9C40LrQsMK7XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPR1NfZnF6SnZiQjdhTlByZXh3cURLNXgwbHMtMjBDQy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzMwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQtdC30L3RltC6INCi0LXRgtGP0L3QsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCi0L7RgNC+0L/QvtCy0LAuINCS0LDRgNGW0LDRhtGW0ZcsICAgICAyKdCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4gJyfQnNCw0LvQtdC90YzQutC40Lkg0LbQvtC90LPQu9C10YAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeEd4TlRUdFdyaGRPdTZZN0d1ZVVBZ0dYdmpvTGxNQmwvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LjQsdCw0Log0JDQvdCw0YHRgtCw0YHRltGPLCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpLtCc0LXQu9Cw0YDRgtGW0L0uJyfQoNCw0L3QvtC6JycsIDIp0Jwu0JzQsNC50ZTRgC4nJ9Cd0LXQt9Cy0LjRh9Cw0LnQvdCwINC/0YDQuNCz0L7QtNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXV6bVZxRlZublFhSUdYN28zSC03dE5lMGtwMVppVXZQL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNGW0L/QvdC40Lkg0JHQvtCz0LTQsNC9LCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCGLiDQkdC10YDQutC+0LLQuNGHLiDQktCw0YDRltCw0YbRltGXLCAgICAgMinQlC4g0KDQvtGD0LvRli4nJ9CSINC60YDQsNGX0L3RliDQs9C90L7QvNGW0LInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUWxyMV8tcEZBbExJaXhLa2h4Mi1aeHhFWVpoQVo5WjcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0L7QvNCw0L3Rh9C10L3QutC+INCV0LvQuNGB0LXQuSwgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQqC7Qk9GD0L3Qvi4nJ9Cc0LDRgNGIINC80LDRgNGW0L7QvdC10YLQvtC6JycsICAgMikg0J4u0JPRgNC10YfQsNC90ZbQvdC+0LIuJyfQndC10LfQstC40YfQsNC50L3QsCDQv9GA0LjQs9C+0LTQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpSS16anE0UWltREw5VExFNUJSWXVybXVBTDE2ZlNjVS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNC50YfRg9C6INCv0YDQvtGB0LvQsNCy0LAsIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCiLiDQnNCw0LrRgdC40LzQvtCyLicn0JHQsNCx0LAg0K/Qs9CwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVg1QzdrZk5kM1Fsb1psMFRBdk5fQVFoMC1xWHRwU1NCL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LnRh9GD0Log0K/RgNC+0YHQu9Cw0LLQsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0Jou0KDQvtC70LvRltC9LiAnJyDQqNC+0LrQvtC70LDQtNC90LUg0L/QtdGH0LjQstC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZ2WW1fRWREeF8tM0JSSEpNeUQzNWszb0M0RjJ0VjU2L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodGW0YLRiNCw0ZTQstCwINCX0LDRgNC10LzQsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy7QkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgDsgMinQmi7QodC70L7QvdGW0LzRgdGM0LrQuNC5LiAnJ9CU0Y7QudC80L7QstC+0YfQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUg2ZWRRdHNScDBfd2N1T1lSQUVoMWxmZlJ6MFRYdGliL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCE0LLQs9C10L3RltGPLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQstCw0YHQvdC10LLRgdGM0LrQuNC5Licn0JTRg9C80LrQsCcnLCAyKdCULtCQ0LvQtdC60YHQsNC90LTQtdGALiAnJ9CX0LjQvNC+0LLQsCDRgNCw0L/RgdC+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZMVzlFZXNQUHMxU1RpNmtRcFF4ZEVKemszUGduSFlqL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodGC0YDQuNC50YHRjNC60LAg0JDQvNC10LvRltGPLCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCSLtCa0L7RgdC10L3QutC+Licn0JTQvtGJ0LjQuicnOyAgICAgIDIp0J4u0JHRltC70LDRh9C10L3QutC+LiAnJ9CV0LrRgdC/0YDQvtC80YInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMGg5T05SRzJUNDJ2eEFsV3k0QVNQMHFnYThJVTAycnYvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0YLRg9C00LfQuNC90YHRjNC60LAg0ITQu9C40LfQsNCy0LXRgtCwLCA3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLiDQnNC+0YbQsNGA0YIuICcn0JzQtdC90YPQtdGCJycsICAgIDIp0KMuINCT0ZbQu9C70L7Qui4gJyfQntGB0ZbQvdC90ZbQuSDQtdGB0LrRltC3JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZkc09idWI5WjBFN1pNMVFZTXNmcWthbGpubkxRMmplL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzM2FcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodGD0YXQsNC9INCU0ZbQsNC90LAsIDgg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0KjRg9C60LDQudC70L4u0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGC0LXQvNGDINCSLtCo0LDRl9C90YHRjNC60L7Qs9C+OyAyKdCgLtCk0YPRh9GBLicn0JzQsNC70LXQvdGM0LrQtSDRgNC+0LfQsdC40YLQtSDRgdC10YDRhtC1JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUd1NXVjb0NHRmh5RW5NaDMtSURVSi11RjBUdWozN1VaL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzM2JcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotC10YDQvyfRj9C6INCQ0LDRgNC+0L0sIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0IYu0JHQtdGA0LrQvtCy0LjRhy4g0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGD0LrRgNCw0ZfQvdGB0YzQutGDINGC0LXQvNGDOyAyKdCiLtCe0YHRgtC10L0uICcn0JzQsNC70LXQvdGM0LrQuNC5INC10LvRjNGEJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVp0UWJOQkJnR21Pek1Xbm5IQUYtN19DQnNYazNMdy0yL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzM2NcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotC40LzRh9C10L3QutC+INCd0LDQtNGW0Y8sIDgg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0KjRgtC+0LPQsNGA0LXQvdC60L4uICcn0JzQtdGC0LXQu9C40LonJywgMinQki7Qk9GW0LvQu9C+0LouICcn0JzRltGB0Y/Rh9C90LUg0YHRj9C50LLQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFQUzlBR0h5RURxc3RqcUExTWlFYlRrcDVqMVV1U2hyRy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLRltGJ0LXQvdC60L4g0JLQtdGA0L7QvdGW0LrQsCwgNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4gJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDQtNC+INC80ZbQvdC+0YAsIDIp0JsuINCo0YPQutCw0LnQu9C+LiDQktCw0YDRltCw0YbRltGXXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGdHJqOWs1amhEeFZpNXVmaFhZM1RIa3dPSzhZMTJIbS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQvtC00L7RgNC+0LLQsCDQlNCw0Y/QvdCwLCA2INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JHQsNGA0LLRltC90YHRjNC60LjQuS4gJyfQl9Cw0LnRh9C40LonJywgICAgICAgICAgMinQnC7Qm9GO0LHQsNGA0YHRjNC60LjQuS4gJyfQn9C70Y/RgdC+0LLQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFQQXpJQnRqRzBOZnFhelVJMjVIc1JyRlZYakx5ejJCaS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQvtC90ZbRlNCy0LjRhyDQmtGB0LXQvdGW0Y8sIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QodC/0ZbQu9GW0L7RgtGWLicn0JPRg9GG0YPQu9GP0YLQsCcnLCAgIDIp0JIu0JPRltC70LvQvtC6Licn0KMg0YHRgtCw0YDQvtC80YMg0JLRltC00L3RlicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExOXczd25ITXA2WE5XU0tLcjlWSklvWWpWSVA5TWxBTy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzQwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLRjtGC0YzQutC+INCS0L7Qu9C+0LTQuNC80LjRgCwgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCa0YPQu9Cw0YMu0KHQvtC90LDRgtC40L3QsCwg0YLQsi41NSDihJYzLCAyKdCgLtCb0ZbRgdC+0LLQsC4nJ9CS0LXRgdC10LvQuNC5INC90LDRgdGC0YDRltC5JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJnLUhLN0xwM1V3akdrM01JVFRkRDllUTdyRmRoeDFIL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzNDFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10YHQtdC90LrQviDQkNC90L3QsCwgOCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7Qk9C10LTRltC60LUu0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsICAyKdCSLtCT0LDQstGA0LjQu9GW0L0uICcn0JrQsNC/0YDRltGH0YfRltC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVqcnE4WkVYQkpxX0FOZkFpWS01aktIN1JzNThmTHVDL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzNDJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQp9C+0YDQvdC10Lkg0K/QvdCwLCA3INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLiDQldC60YjRgtC10LnQvS4gJyfQmtCw0L/RgNC40Lcg0LPQvdC+0LzRltCyJyc7ICAyKdChLtCu0YTQtdGA0L7Qsi4gJyfQndC+0LrRgtGO0YDQvScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFnNmJCN2FxV3B0dzVsTG5BaVhrbE9GcFFsNFgwTkxLai9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzQzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQutGD0YDQutC+INCi0LjQvNC+0YTRltC5LCA5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCo0L7Qv9C10L0uICcn0JLQsNC70YzRgScnINC70Y8g0LzRltC90L7RgCwgICAgIDIp0Jsu0KjRg9C60LDQudC70L4uICcn0JLQtdGB0LXQu9CwINC80L7Qt9Cw0ZfQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWVKSjQ0WmJnVHJVVGRILXRCUEtHeWMxS18wcnJ5ajRfL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzNDRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQrtGA0YfRg9C6INCv0L3QsCwgNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQnC4g0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCwg0YLQsi4zNiDihJYxLCDQhiDRhy4sMinQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9CS0YDQsNC90ZbRiNC90Y8g0LzQvtC70LjRgtCy0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb1BVdUgycXphUVVMeXB2dXkzTTZRLWY3dnZoWmxBbngvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCQ0LzRltGF0LDQu9Cw0LrRltC+0LDRlCDQhNC80LXQu9GM0Y/QvSwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QkdGW0LvQsNGH0LXQvdC60L4uJyfQntGB0ZbQvdC90ZbQuSDQtdGB0LrRltC3JycsIDIp0Jwu0JrQsNGA0LzRltC90YHRjNC60LjQuS4gJyfQk9GD0LzQvtGA0LXRgdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpmcWt5RzZCcFozXzFYWGRmX0ZWWU9XRm1wYWtqV1dQL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzQ2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JDQvdGC0L7QvdGO0Log0JLQsNGA0LLQsNGA0LAsIDEyINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7Qn9C70LXQudGU0LvRjC4g0KHQvtC90LDRgtC40L3QsCDRgNC1INC80LDQttC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFESmVIZjNmQXVaNTVQZjY1bU1BdHcyUGN0OTZkZmEtdC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCQ0L3RgtC+0L3RjtC6INCS0LDRgNCy0LDRgNCwLCAxMiDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0JzQsNC50LrQsNC/0LDRgC4nJ9CSINC60L7QstCw0LvRjNC90ZYnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWxYeUt1d01fSmd4WVpsNmVXa0FzZVU2dk5hV3o3cFl6L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzQ4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQsNCx0YfQsNC90ZbQuiDQkNC90LTRgNGW0LksIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCULtCn0LjQvNCw0YDQvtC30LAuINCh0L7QvdCw0YLQuNC90LAg0YHQvtC70Ywg0LzQsNC20L7RgC4gMinQri7QkdGW0LvQutC+0LLRgdGM0LrQuNC5LiAnJ9Cg0L7Qt9C00YPQvNC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFVSEFzTktqY0ppQmd4QWRJTE9zakRFUkpLUU16ZXE3QS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LDQu9GD0YLQsCDQkNC70ZbQvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSkg0JUu0JPRgNGW0LMuICcn0KLQsNC90LXRhtGMINC3INCZ0L7Qu9GM0YHRgtC10YDQsCcnLCAyKdCbLtCX0LDQsdCw0YDQsC4nJ9Cd0ZbRhyDRj9C60LAg0LzRltGB0Y/Rh9C90LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9YR0YzbTQxSy1RTjhZMS1XX2o4NURyVGprazg4c1FYL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzRhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQsNGB0LjRgdGC0LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCkLtCo0L7Qv9C10L0uINCS0LDQu9GM0YEsINGC0LIuNjQg4oSWMSwgMinQoS7QkdC+0YDRgtC60LXQstC40YcuINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuNiDihJYxXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xc1BXWlNQbjRVTUpWZGZ6NzNncmFEd2R3SXh5WGdqQlkvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGW0LvRltC90LrQtdCy0LjRhyDQndCw0YLQsNC70ZbRjywgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jwu0JvQuNGB0LXQvdC60L4uINCV0LvQtdCz0ZbRjywyKdCaLtCn0LXRgNC90ZYuINCV0YLRjtC0IOKEljEg0YLQsi43NDBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFBUl9XVzBDRlNTQ1h6VkFmckhYdXdCQUQtX1FDOGo2Vy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0Y1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0YPQu9GM0LrQvtCy0YHRjNC60LAg0JzQsNGA0LjQvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JQu0KfRltC80LDRgNC+0LfQsC4g0KHQvtC90LDRgtCwINGB0L7Qu9GMINC80LDQttC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFib3hkdGdBZGhCSUpkdGN4ZHpuWkhQLXE1ZmFxYTVRSy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0YPQu9GM0LrQvtCy0YHRjNC60LAg0JzQsNGA0LjQvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi7Qk9Cw0LHQtdC7LiAnJ9CU0LXRgNC10LLQviDQttC40YLRgtGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmWFo2TmRzTjZ1Nzh0STZlcktFalgyb2Zlc0hCMmViaC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LDQutGD0LvQtdC90LrQviDQkNGA0ZbQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0JHQtdGA0LrQvtCy0LjRhy4g0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGC0LXQvNGDINCz0YDRg9C30LjQvdGB0YzQutC+0Zcg0L3QsNGA0L7QtNC90L7RlyDQv9GW0YHQvdGWICcn0KHQstGW0YLQu9GP0YfQvtC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDZHRYb1Z6akVsMVlxVkNkQnl4S3NaZHFFamZ0MWhzNi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0ZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LDQutGD0LvQtdC90LrQviDQkNGA0ZbQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0JTQttC+0L/Qu9GW0L0uJyfQkNGA0YLQuNGB0YIg0LXRgdGC0YDQsNC00LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUdudGlZdkx6SHJVWElzV0RmZEhwNDAtdHQ1eVl1aWdxL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzUwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQsNGB0LjQu9GM0ZTQstCwINCS0LXRgNC+0L3RltC60LAsIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KAu0JPQu9GW0ZTRgC4g0J/RgNC10LvRjtC00ZbRjyDQtNC+INC80ZbQvdC+0YA7MinQoS7QlNC20LXRgNCx0LDRiNGP0L0uICcn0KjQstC40LTQutC40Lkg0YDRg9GFJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFRQmd0ZGh3MklRZVRINlFFWW5LTEdCYWxYMEsydXBONC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7QudGC0LXQvdC60L4g0JvRltC70ZbRjywgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JsuINCo0YPQutCw0LnQu9C+Licn0J/QvtC90ZYnJywgMinQni7QoNC40LHQsNC70L7QstCwLiAnJ9Cd0LXQv9C+0YHQuNC00LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMS1MX2tKSHUxUHBrUEdSQ0pfRWZ4RkxCYm1jOGZPT3dxL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzUyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQvtC50YfQtdC90LrQviDQktC70LDQtNC40YHQu9Cw0LIsIDExINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKSDQmS7QoS7QkdCw0YUu0JTQstC+0LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDRhNCwINC80LDQttC+0YA7IDIp0KQu0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0g0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xd3U1a2xYR0c3QmgyZlBsUjNZYmVNbFNLWkJUOFBSbk4vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0YnQuNC90YHRjNC60LjQuSDQhtC70LvRjywgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlS7Qk9GA0ZbQsy4g0J3QvtC60YLRjtGA0L0sIDIp0Jwu0KDQuNC80YHRjNC60LjQuS3QmtC+0YDRgdCw0LrQvtCyLiAnJ9Cf0L7Qu9GW0YIg0LTQttC80LXQu9GPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3bGJTMEw5NTZhTlo5RDBHVEktcC1rMzl6NGxwZWhDNy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LDQu9C10YfQtdCyINCG0LLQsNC9LCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQntCx0YAuINCTLtCR0LXQtyfRj9C30LjRh9C90L7Qs9C+LiAnJ9Cd0ZbRhyDRj9C60LAg0LzRltGB0Y/Rh9C90LAnJywgMinQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9Cd0LXQsNC/0L7Qu9GW0YLQsNC90YHRjNC60LAg0L/RltGB0LXQvdGM0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNC1aODJ2WWtWRjF4Mk5wbnFLMV94aEFmMmJXdWFQUVYvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9Cw0LzQt9Cw0LvRltGU0LLQsCDQl9C10LnQvdCw0LEsIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCR0ZbQu9C+0YDRg9GBLiDQvdCw0YAu0L/RltGB0L3RjyAnJ9CR0YPQu9GM0LHQsCcnLCDQvtCx0YAu0JQu0JvRjNCy0LAt0JrQvtC80L/QsNC90ZbQudGG0Y9cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFkUXFHRnBoT0dvMFZwR29VZDR6NFUzZW45TFRjMTlway9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LDQvNC30LDQu9GW0ZTQstCwINCX0LXQudC90LDQsSwgMTIg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtCT0LDQudC00L0uINCc0LXQvdGD0LXRglwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVd3XzgwMEpQdkg2OVl0ak9ORUNKSDhWdFpfZVpra3lrL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRltC70ZbQvdCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCc0L7RhtCw0YDRgtCQ0YDRltGPOyAyKdCULtCT0YDQsNC00LXRgdC60ZYuJyfQnNC+0YDQvtC30LjQstC+LiDQoNC10LPRgtCw0LnQvCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZjNLNTBHVmN3OGtzZFlnUk14VjYxYWRSQUZINVBLTXcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNThcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C+0YDQsNC5INCv0YDQvtGB0LvQsNCyLDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0KHQutC+0YDQuNC6ICcn0JzQtdC70L7QtNGW0Y8nJywgICAgICAgICAyKSDQny7QkdCw0LfQsNC70LAuICcn0J/QvtGC0ZbQuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVUNibjd4UHZFYnJIQ3BNVGhuQ0lqNVF0Z242clZTX2YvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C+0YbRg9C70LXQvdC60L4g0JLRltC60YLQvtGA0ZbRjywgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QkdCw0YUuINCU0LLQvtCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0LvRjyDQvNGW0L3QvtGALCAyKSDQpC7QqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDihJYyMVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTcxSUNNXzdHaHJhbzFSTjZ1ZzBYTG9STkpLb2JhUkdRL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRg9C60LDRgdGP0L0g0JvRltCw0L3QsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAu0KXQsNGH0LDRgtGD0YDRj9C9LiBcXFwi0JDQvdC00LDQvdGC0ZbQvdC+XFxcIlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTJJZEFmU2lfd2FVNmxyTmZVdlAySDB4MFdPNzhhTUdhL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWFhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRg9C60LDRgdGP0L0g0JvRltCw0L3QsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0KXQtdC70LvQtdGALiDQodC+0L3QsNGC0LjQvdCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa3RPVkMzVFJfQUU0dVJiRzYyT3hOS1Zqb05KcWl1UG0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GD0LvRj9GU0LLQsCDQhNCy0LAsIDEx0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQny4g0JfQsNGF0LDRgNC+0LIuJyfQldC70LXQs9GW0Y8nJywgMikg0JMu0JLQsNC70LvQtdC90LPQsNGD0L/Rgi4gJyfQodC60LXRgNGG0LjQvdC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyYmNtN0ZfQmZBZXFNRXpmUWhaNmZGM1kyMWE3cllzdy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1Y1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPRgtC90LjQuiAg0JrRltGA0LXQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0KjRltGC0YLQtS4nJ9Ci0LDQvdC10YbRjCAg0LPQvdC+0LzRltCyJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuaURxTmlDSnUzQ0xTM0VHNUJXSHVCX0FxN3Y0NVJzMy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPRgtC90LjQuiDQmtGW0YDQtdC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQni7QodC+0LvQvtCy0Y/QvdC10L3QutC+Licn0J/QvtC90ZYg0LHRltC70Y8g0YbQuNGA0LrRgycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaDdxMFlhWWl5NkE2czZCcHdfVHh0enJ3d1NfQXo5THgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNC+0YDQvtGI0LXQvdC60L4g0K7Qu9GW0Y8sIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLiDQmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwLCDRgtCyLjM2IOKEljYsINCGINGHOyAyKSDQhi7QkdC10YDQutC+0LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPLCDRgtCyLjQ2IOKEljE1XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR2xGQ0xDM3hfMXRaQ09mbU5oTjBtNFQwUE9KWUJUak4vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNGD0LTRltC9INCU0LzQuNGC0YDQviwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALNCGLdCG0IYg0YcuOyAyKdChLtCf0YDQvtC60L7RhCfRlNCyLiAnJ9Ca0LDQt9C+0YfQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4Ym00eC1WZnpIenV6QjRqVGhic1BoOElhQ2E5NHR0Qi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCE0YDQvNC+0LvQtdC90LrQviDQlNCw0YDQuNC90LAsIDEyINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLiDQkNGA0ZbRjyDRgNC1INC80LDQttC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1N002Q1hpeXNVZkp1dTZNLUF2Qjc3NFdlbjBBbnVaTi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCE0YDQvNC+0LvQtdC90LrQviDQlNCw0YDQuNC90LAsIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQkdGW0LvQsNGILiAnJ9CR0LDRgNC60LDRgNC+0LvQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaE9SZjR1VnZvVzU0cFRDeGdLMnpJbWd4WXhINDdZb28vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQl9Cw0LPQsNGU0LLRgdGM0LrQsCDQodC+0YTRltGPLCAxMiDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QmtC70LDRgdGB0LXQvSAnJ9Cc0YPQt9C40YfQvdC40Lkg0LXRgdC60ZbQtycn4oSWMSwgMinQni7QmtC40LzQu9C40LouJyfQm9C10L7QvdGC0L7QstGW0LDQvdCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF3MVRQaDlKWHNBamVfS3BFOVFQcDVJdjBFdWptdmpHLS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90L3RltC60L7QstCwINCc0LDRgNGW0Y8sIDExINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JzQvtGG0LDRgNGCLiDQodC+0L3QsNGC0LAg4oSWMTYsINCGINGH0LDRgdGC0LjQvdCwLCAgMinQni7Qk9GA0LjQsdC+0ZTQtNC+0LIuINCS0LDQu9GM0YFcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYMXZoc1RJUGtJNXppczIySkhPWHhRVURkT0JlOUE5Ry9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQktGW0YDRgdCw0LLRltGPLDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0KXQvtC00L7RiC4nJ9Cn0LXRgNCy0L7QvdCwINGI0LDQv9C+0YfQutCwJycsIDIp0IYu0KnQtdGA0LHQsNC60L7Qsi4nJ9CV0LvQtdCz0ZbRjyDQutC40ZfQstGB0YzQutC40YUg0L/QsNCz0L7RgNCx0ZbQsicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTTdJMVFKYkZrV0JRSHdLMWxIS295b0UzMGwtV2MxMm0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQh9Cy0LbQtdC90LrQviDQkNC00LAsIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli7QodC+0L3QsNGC0LjQvdCwINGB0L7Qu9GMINC80LDQttC+0YAsIDIp0Jwu0KHQutC+0YDQuNC6LiAnJ9Cd0LDRgNC+0LTQvdC40Lkg0YLQsNC90LXRhtGMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrcG02azBNQ3R1amc3c1BIOWRjb2RZMGt6MUJyR0VYOS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDQvNCw0L3Rh9C4INCE0LvQuNC30LDQstC10YLQsCwgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtCw0LvRltGB0YLRgNCw0YLQvtCyLicn0JrQvtC90LjQuiDQk9C+0YDQsdC+0LrQvtC90LjQuicnLCAyKdCuLtCS0LXRgdC90Y/Qui4gJyfQndGW0LbQvdGW0YHRgtGMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFtbFdhTFlzRDhma0JRSGdkclgtUmZOQ2tkNndSclBrTy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDRgNCw0YjQutC10LLQuNGHINCl0YDQuNGB0YLQuNC90LAsIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4g0KLRgNC40LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDRgNC1INC80ZbQvdC+0YAsIDIp0Jwu0JTRgNC10LzQu9GO0LPQsC4gJyfQodC60LXRgNGG0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVCR2hOSXB0SlNlaTBHWkxLcHNmeWFJaGkzVWFlMGNIL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRltGG0LXRgNCwINCQ0LvRltC90LAsIDExINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0JTQtdCx0Y7RgdGB0ZYgJyfQoNC+0LzQsNC90YLQuNGH0L3QuNC5INCy0LDQu9GM0YEnJywgMinQkS7QpNGW0LvRjNGGLiAnJ9Ch0LrQtdGA0YbQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTm92c29nX3c1MnB6R2tmSjJoWnhpaHYzM0MyY1NmMEovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YDQvtC70Ywg0ITQu9GW0LfQsNCy0LXRgtCwLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJ9Cf0ZbRgdC90Y8g0LbQsNC50LLQvtGA0L7QvdC60LAnJzsgMinQmy7QqNGD0LrQsNC50LvQvi4g0J/RgNC10LvRjtC00ZbRj1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtickdsOF9JaGZxbmprdlR2b1doNzltZ205cFE1a1RKL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtGC0LvRj9GA0LXQstGB0YzQutCwINCu0LvRltGPLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JkuINCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDRgdC+0LvRjCDQvNCw0LbQvtGALCDQhtGHLlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZBV0hIS1E1b3gwRVRKTHZ1cnJSZ1oyZE9tMXZ0RmtlL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtGC0LvRj9GA0LXQstGB0YzQutCwINCu0LvRltGPLCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiJ9CT0LDQvdC00LfRjycnLCDQvtCx0YAu0IQg0JLQtdCy0YDQuNC60LBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrSXZkc3ZJcnhlbzgxNmQtX01WNW5iYmNyLWFPWmhFcC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2Y1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7RgtC+0LLQsCDQnNCw0YDRltGPLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QmtC70Y7Rh9Cw0YDRjNC+0LIuJyfQqNGD0YDQsNC70ZQnJywgMinQpC7QnNC10L3QtNC10LvRjNGB0L7QvS4nJ9Cf0ZbRgdC90Y8g0LHQtdC3INGB0LvRltCyJycsINGC0LIuMTkg4oSWMlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVkxY1dfMlppd0JFTjBZYzFLcldXbmNYMzc2emdhRDVCL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRgNC40LLQvtCx0LDQsdC60L4g0JrRgdC10L3RltGPLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0Jsu0KjRg9C60LDQudC70L4uICcn0JLQtdGB0L3Rj9C90ZYgINC60YDQsNC/0LvQuNC90LrQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZElKZ2tMSU8yZTdsY05wdUFSanhtdWR3MDN4am5jMzIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGA0LjQstC+0LHQsNCx0LrQviDQmtGB0LXQvdGW0Y8sIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnS7QmtCw0YDQv9C10L3QutC+LiDQldGC0Y7QtCAg0YDQtSDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQjQtRWJSWU8tYmNDamZ1cHBlSFhTaHY1RFF6dWk5aEEvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGD0YLQutC+0LLRgdGM0LrQsCDQm9Cw0YDQuNGB0LAsIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCVLtCT0YDRltCzLiAnJ9Cd0L7QutGC0Y7RgNC9JycsINGC0LIuNTQg4oSWNCwgMinQoi7QmtGD0LvRltGU0LIuICcn0JvQtdC30LPRltC90LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMWNtUUJkc20yZXB3WlNfbVVKeDNncDFXNTgyWnlXZDcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm2nQt9C+0LPRg9CxINCQ0YDRgdC10L0sIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JMu0KHQsNGB0YzQutC+Licn0KDQtdCz0YLQsNC50LwnJywgMinQny7Ql9Cw0YXQsNGA0L7Qsi4nJ9Ch0YLQsNGA0L7QstC40L3QvdCwINCx0LDQu9Cw0LTQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMVNGa1dGdlduX1VHTkpLN2M3WjFMbEoyTmFzTTlLc2cvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9Cw0L3RgdGM0LrQuNC5INCE0LLQs9C10L0sIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQoNCw0L3QutC+0LLQsCDQvNC+0LvQuNGC0LLQsCcnLCDRgtCyLjM5LCAyKdCGLtCR0LXRgNC60L7QstC40YcuINCi0L7QutCw0YLQsCDQu9GPINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWblBGTHM1eEhDdDBUTDJzZDFFOVdXeWhUQjhrR1R1aC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0LXQstCw0L3QtNGW0LLRgdGM0LrQsCDQnNCw0YDRgtCwLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIu0JHQsNGA0LLRltC90YHRjNC60LjQuS4gJyfQo9C60YDQsNGX0L3RgdGM0LrQuNC5INGC0LDQvdC10YbRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRlZqeEFlQjNkT3pKcEFURFh5SS0xQUJ0Uml6anpqb2QvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C10LLQsNC90LTRltCy0YHRjNC60LAg0JzQsNGA0YLQsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCvLiDQodGW0LHQtdC70ZbRg9GBLiDQldGC0Y7QtCDRgtCyLiA3NiDihJYyXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOEs3cmdSempDcVotXzVFV3IwRW9FNUpsblR5aGdaUzQvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C10LfQsCDQkNC90L3QsCwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9IOKEljIwLCAyKdCfLtCX0LDRhdCw0YDQvtCyLiAnJ9Cg0L7QvdC00L4t0LPQsNC70L7QvycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVHdmMnNKM185QXIzb09UbVpXS3Y2cThTTWE5ZkdhLXAvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C40LrQvtCy0LAg0JLQsNGA0LLQsNGA0LAsIDExINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCSLtCT0ZbQu9C70L7Qui4nJ0JpbGwgYmFpbGV5JycsIDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0KjQsNGA0LzQsNC90LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZEU1TGNmVi1UOFFoTFhpQWZuOHN4TEVNZWN2Z1MtaE8vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9GW0LvRltC6INCc0LDRgNGW0Y8t0JzQsNCz0LTQsNC70LjQvdCwLCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNC+0L/QtdC9LiAnJ9CQ0YDQutGD0Ygg0Lcg0LDQu9GM0LHQvtC80LAnJyDQvNGWINCx0LXQvNC+0LvRjCDQvNCw0LbQvtGALCAyKdCcLtCa0L7Qu9C10YHRgdCwLiAnJ9Ch0LrQtdGA0YbQuNC90L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXF0aWNkdUFRUW03Mk5jeThlLXN0Nm5ranF3QnJGU1RlL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNC60LDRgNC10LLQuNGHINCQ0L3QtNGA0ZbQuS3QntC70LXQutGB0LDQvdC00YAsIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4g0KLRgNC40LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDRgNC1INC80LDQttC+0YAsIDIp0Jou0KfQtdGA0L3Rli4g0JXRgtGO0LQg4oSWNSwg0YLQsi4yOTlcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpVnVCUGZ3NEhuY1BKa0puMnlOWlp3OFVYbFVYSkhWYy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDRhtGW0LHQvtGA0YHRjNC60LAg0JDQvdC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCZLiDQkdCw0YUuINCU0LLQvtCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YHRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwgICAgMikg0KQuINCv0LrQuNC80LXQvdC60L4uICcn0JXQu9C10LPRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTcll0dEpGZGl6c3VCZTB5TnNLck5EZ0pVUF9BaWhhTi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LXQu9GM0L3QuNC6INCc0LjRhdCw0LnQu9C+LCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYuINGB0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCAyKdCSLtCa0L7RgdC10L3QutC+LiAnJ9CU0L7RidC40LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWMwcFdqR29nRGFFWUNSQ3NremNxOVZkVWxIeS1oc2hHL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQtdGA0LrRg9C70L7QstCwINCc0LDRgNGW0Y8sIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQlC7Qp9GW0LzQsNGA0L7Qt9CwLtCh0L7QvdCw0YLQsCDRgdC+0LvRjCDQvNCw0LbQvtGAOyAyKSDQnC4g0JbQtdGA0LHRltC9LiDQktCw0LvRjNGBXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xajVwRUQ3d1EzQUhQMHBOeDlWTzRQcDhkcmlsOWFNemYvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2JcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC40LPQsNC70Y7QuiDQoNGW0LDQvdC90LAsIDExINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J0u0J3QuNC20LDQvdC60ZbQstGB0YzQutC40LkuICcn0JrQvtC70L7QvNC40LnQutCwJycsICAgMinQki7Qk9GW0LvQu9C+0LouJyfQmtCw0YDQvdCw0LLQsNC7INCyINCg0ZbQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcDVTTU9lQmFVejBqelg4QTBsNlg0Tjl5dnR3RzB3OG0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2NcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC40YDQs9C+0YDQvtC0INCS0YHQtdCy0L7Qu9C+0LQsMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QmtGD0LvQsNGDLiDQodC+0L3QsNGC0LjQvdCwINGE0LAg0LzQsNC20L7RgCzQhiDRhy47IDIp0Jwu0JvQuNGB0LXQvdC60L4uICcn0JXQu9C10LPRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrcHhzdVJKbmwzdDY0bGJPOHZpVmdmR3N3X2FNa1JTbS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0L7RgNC+0LfQvtCy0LAg0KLQtdGC0Y/QvdCwLCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JHQtdC90LTQsC7QodC+0L3QsNGC0LjQvdCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNXU0b0s0dUl2OTIzQmJod0h1UXhjMmtiMnpXNERJbUcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2RkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQvtGA0L7Qt9C+0LLQsCDQotC10YLRj9C90LAsIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QqNC10LLRh9C10L3QutC+IFxcXCLQktC10YfRltGAXFxcIlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZ5LUwwNEVBZmNxN0kxYlJweDVwRThseWRJQnlUM1NGL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzRg9C90YLRj9C9INCd0LDRgtCw0LvRltGPLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQtdC80LAg0Lcg0LLQsNGA0ZbQsNGG0ZbRj9C80LgsICAgICAgIDIp0Jsu0KjQuNGC0YLQtS4nJ9CG0YHQutGA0LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZqTkhjV1dndG1iYWtVWG1wYzNoN2Zob041Z3BzOVJWL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7QsdC+0YDQutGW0L3QsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlS7Qk9GA0ZbQsy4nJ9Cc0LXQu9C+0LTRltGPJycsICAgIDIp0Jsu0KjRg9C60LDQudC70L4uICcn0JHQsNCz0LDRgtC10LvRjCcnIOKEljVcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjaDJ3dnp4dFI3RVIyLTZpRExVZ3ZDQXF1VWl2OGRWZi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LXQvdC00Y7RgCDQodC+0YTRltGPLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQni7QlNCw0YDQs9C+0LzQuNC20YHRjNC60LjQuS4nJ9CS0LDQu9GM0YEnJywgMinQnC7QodC60L7RgNC40LouJyfQndCw0YDQvtC00L3QuNC5INGC0LDQvdC10YbRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xc0RHNnduZ3BLSGNNU09hT2lfWWxVR2t1Y2FkQkFwQkovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C10YDQtdGC0Y/RgtGM0LrQviDQkNC90LDRgdGC0LDRgdGW0Y8sIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS7Qk9GA0ZbQsy4gJyfQotCw0L3QtdGG0Ywg0ZbQtyDQmdC+0LvRjNGB0YLQtdGA0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBfTGd2LWZMT2QzeVBBbU5tV0NkOFlOM2xTd1hITEtHL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzgyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QtdGA0LXRgtGP0YLRjNC60L4g0JDQvdCw0YHRgtCw0YHRltGPLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC7QmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwIOKEljQsINGC0LIuMzZcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEzd3NJLXNzVFB4OWVhMHFaSEZZc3ZzUDJudVBiU0RKNy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0L7Qt9C90Y/QuiDQktC10L3RltCw0LzRltC9LCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQlC7Qn9GD0LvQtdC90LouINCh0YLQsNC60LrQsNGC0L4uIDIpINCbLtCR0LXRgtGF0L7QstC10L0uINCS0LXRgdC10LvQsC3RgdGD0LzQvdCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdnNiYzJHdkhZQXJnZ1A1Ny1aNXdGbEd3Y2hNcE5wM0UvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GA0L7QutC+0L/RjtC6INCc0LDRgNC40L3QsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0IYu0JHRltC70LDRh9C10L3QutC+LiDQldC60YHQv9GA0L7QvNGCLiAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiDQotCw0L3QtdGG0YxcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFRbjlEUUwyTkhKZU9mR0hESFl3YXVaNjJ2aW5yZmxBeS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LXRiNC10YLQvdGW0LrQvtCy0LAg0JvRjtC00LzQuNC70LAsIDExINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCeLtCR0ZbQu9Cw0YfQtdC90LrQvi4nJ9Ce0YHRltC90L3RltC5INC10YHQutGW0LcnJywgMinQni7Qn9C+0LvRjNC+0LLQuNC5Licn0J/QvtC70YzQutCwLdCx0LDQsdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV9YZkNLOEZLMUZMbXhia0VCOFZUZGZhOTkwcUo3eFJBL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQvtGC0LDRgCDQmtCw0YDRltC90LAsIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQkdCw0YDQutCw0YDQvtC70LAnJywgMikg0JQu0J/QtdGI0LXRgtGC0ZYuICcn0J/RgNC10YHRgtC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3TUYtMHo2dUFrbUtXbHBZeVNXR0g4c2JPaVotLW45Si9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQstGH0LXQvdC60L4g0JzQsNGC0LLRltC5LCAxMdGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQsCDQvNGWINCx0LXQvNC+0LvRjCDQvNCw0LbQvtGALCDQhiDRhy4sIDIp0IYu0KnQtdGA0LHQsNC60L7Qsi4gJycg0JXQu9C10LPRltGPINC60LjRl9Cy0YHRjNC60LjRhSDQv9Cw0LPQvtGA0LHRltCyJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFKX0hRazZJUzJQWlBaVVA5dVlPUDZ3a1F0UjNvcG82Qi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQutCy0LAg0JLQsNC70LXRgNGW0Y8sIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCb0LDQvdGB0LXQstC40YcuJyfQn9GA0LXQu9GO0LTRltGPJycsIDIp0Jwu0JTQstC+0YDQttCw0LouICcn0JTQttCw0LfQvtCy0LjQuSDQtdGC0Y7QtCcnINC70Y8g0LzQsNC20L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTF0c2RMdmsyNWJEOEZTRFlUWFhueXBSMjlna1B0eFhzL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNGA0YLQsNC90ZbRjyDQlNCw0LLQuNC0LCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQlS7QktCw0LPQvdC10YAu0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsICAgMikg0KAu0JLQsNC90LTQsNC70LsuJyfQktC+0LTQvtGB0L/QsNC0JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFtckVTWVpJaVAxaVdlbkdpWkRVSU9iMHVzQ0pLMGRUOC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LrQvtGA0L7RhdC+0LTRjNC60L4g0ITQstCz0LXQvdGW0Y8sIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiAnJ9CG0LLQsNGB0Ywg0LPRgNCw0ZQg0L3QsCDRh9C10LvRjNC+JycsIDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0KLQvtC60LDRgtCwJycg0YHRliDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRWlmMFpfTWlBUVZwemJjelZTampidmgxZ1V4ZV9FM1gvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC+0LvQvtC90LXQvdC60L4g0JDQvdC90LAsIDEwINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki7QmtC+0YHQtdC90LrQvi4gJyfQn9C10YLRgNGD0YjQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0Q3hwNFViWkZaZUZNcnc2RFlOaTlWWUhZU3ZZd05RSS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4Y1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0L7Qu9C+0L3QtdC90LrQviDQkNC90L3QsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCkLiDQkdGD0YDQs9C80Y7Qu9C70LXRgC4gJyfQkdCw0LvQsNC00LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVPSDZ6aHdvdzRhUVpmSmVzMjhMeGlJQnNoNUhiZkd1L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzhkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvtGA0L7QutCwINCc0LDRgNGW0Y8sIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JQu0KbQuNC/0L7Qu9GWLiDQn9GA0LXQu9GO0LTRltGPINGC0LAg0YTRg9Cz0LAg0YDQtSDQvNGW0L3QvtGALCAyKdCaLtCT0YPRgNC70ZbRgi4gJyfQqNGC0L7RgNC8JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0ZnBfZ0JSWjFmbGotTEdxZGU2RWR4UW1LVGxlcDBqUC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0YLQtdGG0Y7QuiDQntC70LXQutGB0LDQvdC00YDQsCwgMTIg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0JTQtdCx0Y7RgdGB0ZYuICcnRG9jdG9yIEdyYWR1cyBhZCBQYXJuYXN1bScnLCAyKdCkLtCo0L7Qv9C10L0uICcn0JLQsNC70YzRgScnIOKEljlcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6eEpXeUNtczdrWmhzcE5CQWx6YWNVbkFMVzhFSkFNNy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4ZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0YLQvtGA0L7QttGD0Log0KHRgtCw0L3RltGB0LvQsNCyLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCVLtCT0YDRltCzLiAnJ9Cf0L7QtdGC0LjRh9C90LAg0LrQsNGA0YLQuNC90LrQsCcnIOKEljEsIDIp0JAu0JrQvtGBLdCQ0L3QsNGC0L7Qu9GM0YHRjNC60LjQuS4gJyfQn9C+0LvQvtC90LjQvdCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFydEswdlVyQW9JbEdiVUo1SGFVR2JRUGwxelZtVEtLSi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0LrQsNGH0LXQvdC60L4g0JzQsNC50Y8sIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIuINCQLiDQnNC+0YbQsNGA0YIuINCh0L7QvdCw0YLQsCAxNiDQmiA1NDUs0IbRhy47IDIp0IYu0KjQsNC80L4uJycg0JLQtdGB0L3Rj9C90LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbTZac1Zhck5QcmNmeW1PM0JrdW1kS3hMSnlCVHh4NS0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQo9C90LPRg9GA0Y/QvSDQntC70LXQutGB0LDQvdC00YDQsCwgMTIg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCeLtCT0YDQuNCx0L7RlNC00L7Qsi4g0JLQsNC70YzRgSwgICAgICAgICAgMinQnC7QodGW0LvRjNCy0LDQvdGB0YzQutC40LkuICcn0KHRgtGA0ZbQvNC60LjQuSDQv9C+0YLRltC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF2MkxSVkRoRkoyelhOXzV3VnhBY2g3WDhsMFdROHJPZy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0YDRh9C10L3QutC+INCE0LLQs9C10L3RltGPLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0Jsu0JHQtdGC0YXQvtCy0LXQvS4gJyfQkdCw0LPQsNGC0LXQu9GMJycsINGC0LIuMTE5XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWlBIR1FEQXlmdG9BVzBhS09UMnNuZmE4TWpnYWxjWlEvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTQvtGA0YfQtdC90LrQviDQhNCy0LPQtdC90ZbRjywgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0JHRltC70LDRiC4nJ9Ch0LrQtdGA0YbQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaDFpc0d3dmVXMXVpVzNVMnhlTzJXV3VGeHZTU3ZRLUwvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTQvtGC0L7QstCwINCa0LDRgtC10YDQuNC90LAsIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKSDQoS4g0JHQvtGA0YLQutC10LLQuNGHLicn0JXRgtGO0LQnJyDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YAsIDIpINCkLtCo0L7Qv9C10L0uICcn0J3QvtC60YLRjtGA0L0nJ9C00L4g0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWVRQlh5NmtoTGNpNGZKTkc4QmFDTTFaRkxrS2owTlJ3L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzk1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00YfRg9C6INCQ0LvRltC90LAsIDExINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAuINCU0ZbQsNCx0LXQu9C70ZYuINCh0L7QvdCw0YLQuNC90LAg4oSWMSwg0IbQhtCGLtGHOyAyKdCU0LYuINCb0LDRgdGCLicnINCh0LDQvNC+0YLQvdGW0Lkg0L/QsNGB0YLRg9GFJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqckZidmRnRzJObFUtYjQxNi11UjBiaXJEclctUG5JSC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNGO0Log0JLQvtC70L7QtNC40LzQuNGALCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmi7QnC7QktC10LHQtdGALtCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGAOyAyKdCeLtCT0L7QvdGH0LDRgNGD0LouICcn0JfQtdC70LXQvdC40LknJyDRltC3INC30LHRltGA0LrQuCAnJ9CS0LXRgdC10LvQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFIX0l3ODl4amYxbzI3UHRQX25lUUk3OEJ5UDY1eUV2WS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCl0L7RgyDQltGD0LksIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J8u0IYu0KfQsNC50LrQvtCy0YHRjNC60LjQuS4gJyfQltC+0LLRgtC10L3RjCcnLCAyKdCVLtCS0LXQstGA0LjQui4gJyfQk9Cw0L3QtNC30Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVhad1dYdDZoUUFTdVlmdFNOcjVzVFBFcnN0RlVWNThSL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzk4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfQuNC2INCd0ZbQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7Qk9Cw0LnQtNC9INCh0L7QvdCw0YLQsCDihJY0LCDQhtGHOyAyKdCbLtCU0YzRj9C60L7QvdC10L3QutC+LiAnJ9Cf0YDQvtCx0LDRh9C10L3QvdGPINGDINC80LDQvNC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhSVVyMGgtTjUyOTBCNkthSW1Ya0pIbVNEaWtfVWF3ZS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCn0ZbQtNC10YDQsCDQodCw0LzRg9C10LvRjCDQo9C80LXRhSwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkgINCfLtCn0LDQudC60L7QstGB0YzQutC40LkuICcn0KHRgtCw0YDQvtCy0LjQvdC90LAg0YTRgNCw0L3RhtGD0LfRjNC60LAg0L/RltGB0LXQvdGM0LrQsCcnLiAyKSDQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuJyfQmtC70L7Rg9C90LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXBMWUFtUkJYd3pJbjF4M1hIaHZMcmVfQU5aSlQycDh3L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzlhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQsNGC0LDQu9C+0LLQsCDQhtC70L7QvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLiDQk9GW0LvQu9C10YAuICcn0JzQsNC70LXQvdGM0LrQtSDRgNC+0L3QtNC+Jyc7IDIp0JIuINCa0L7RgdC10L3QutC+LiAnJ9CS0LDQu9GM0YEnJyDRgdGWINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFVZzU2Y2JZMUNVQmhPMS10WmZ1Y1JBdUFIYklGS3o5Yy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LXQstGH0LXQvdC60L4g0JzQsNGA0LPQsNGA0LjRgtCwLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QkdCw0LvQsNC90LTRltC9LiDQktCw0YDRltCw0YbRltGXLCAgICAgICAgICAyKdCiLtCR0YDQsNGD0L0uICcn0KLQsNC90LXRhtGMINCy0ZbRgtGA0YMnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXBrQkJxZlMtcG1GeGI1bk5kQWNoOVdYVXBHcXNVeGE4L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzljXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQtdC/0LXRgtGM0LrQviDQntC70LXQutGB0LDQvdC00YAsIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQpC7QqNC+0L/QtdC9LiDQnNCw0LfRg9GA0LrQsCzRgtCyLjY3IOKEliA0LCAyKdCVLtCT0YDRltCzLiAnJ9Ci0LDQvdC10YbRjCDRltC3INCZ0L7Qu9GM0YHRgtC10YDQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVmJoVmpXclVpdFRvLS04M0k1RldOeWRRclBDM1lHeVIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOWRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQqNGD0LzRgdGM0LrQsCDQndCw0LTRltGPLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4nJ9Ci0LXQvNC90LAg0LrRltC80L3QsNGC0LAnJywgMinQki7QndC10YPQs9Cw0YHRltC80L7Qsi7QodC60LXRgNGG0L5cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrNjYtV3J5NjNTOHg3dDQ4R1dValkwZTZPMXhxZVVvdC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTM5ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCQ0YDRg9GC0Y7QvdGP0L0g0JvRltC00LAsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCZLtCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDihJYyMCwg0IbRhy47IDIp0Jsu0KjRg9C60LDQudC70L4uJyfQhNC80LXQu9GPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFCajU2OGNuUmREWk1Lck1ZZkxUOGtDYkhtNHlmWGIyay9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTM5ZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LDQt9C40LvRjtC6INCd0LDRgtCw0LvRltGPLCAxNiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQry7QodGW0LHQtdC70ZbRg9GBLiDQn9GA0LXQu9GO0LTRltGPINC70Y8g0LzRltC90L7RgCwyKdCGLtCR0LXRgNC60L7QstC40YcuINCf0YDQtdC70Y7QtNGW0Y8g0YTQsCDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR2FXZVpiS2M2U2lJdWRpWVFWQmdGeGFpT085U0Vza0EvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGW0LvQvtCz0YPQsSDQkNC90YLQvtC9LCAxMyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0JvQtdCz0LrQsCDRgdC+0L3QsNGC0LAg0YTQsCDQvNGW0L3QvtGALCDQhiDRhy5cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmSFVtdE1XT2pHTjlwNXhhU3JjSU92UUV1LWtvVEdhVC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0ZbQu9C+0LPRg9CxINCQ0L3RgtC+0L0sIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQni7QodGC0YDQvtC6LiAnJ9Cc0ZbRgdGP0YfQvdCwINGA0LDQv9GB0L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWZxbk5PRnZOblZVY0kxTFVaLVRxZ0Z6Q2w1WEZFX3NpL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2EyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHRltGA0YPQuiDQotCw0LzRltC70LAsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JrQu9C10LzQtdC90YLRli7QodC+0L3QsNGC0LjQvdCwLCDRgtCyLjI24oSWMywgMinQry7QodGW0LHQtdC70ZbRg9GBLiAnJ9Cv0LvQuNC90LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTRfQjI2TFB5elFqa19hQlp4R0ZXSXE4Uno2S1JDQm5YL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2EzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQvtGA0L7QstGW0LrQvtCy0LAg0ITQu9C40LfQsNCy0LXRgtCwLCAxNSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQnC7QkdC+0LHQtdGALiAnJ9CU0ZbQsNC80LDQvdGC0L7QstCwINGA0LDQv9GB0L7QtNGW0Y8nJywgMinQpC7QodCw0LkuICcn0KfQvtGA0L3QsCDQt9C10LzQu9GPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwTzFGR3FCLUs2dHRoOHBQUk1CQ2FsX3JzY2VTTXgyMC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0YPRgNGD0YXRltC90LAg0JrQsNGC0LXRgNC40L3QsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jku0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINC80ZYg0LzRltC90L7RgCwg0IbRhy4sIDIpINChLtCd0ZbQutGW0YLRltC9Licn0J3QsNGB0L/RltCyJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFycExINjNTek5USGVNeVhIazdyQ2hlc3dTY0t1OV9jSC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LDRiNGD0YDRltC90LAg0JIuLCAxMyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JIu0JrQvtGB0LXQvdC60L4uICcn0J/QvtC10LzQsC3Qm9C10LPQtdC90LTQsCcnLCAyKSDQni7QodCw0YDQsNGC0YHRjNC60LjQuS4nJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeTlrdXNndHFYZ0lnZkZjMTZsXzVxdmdGX0p5NjJ2WDcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktC40YjQvdC10LLRgdGM0LrQsCDQkNC90L3QsCwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCWLiDQkdGW0LfQtS4nJ9CU0LfQuNCz0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVlOLTJ5cDFvY1JWRTFSZFhxMkw3c2o5cV9BOHl2NVBPL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQuNGI0L3QtdCy0YHRjNC60LAg0JDQvdC90LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQm9Cw0LLQsNC70LvQtS4gJyfQnNC10YLQtdC70LjQuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNjF0RnFURkpvamEyT1ZEdkhLVHRJV1BqTlEtMkxmeDEvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYThcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C10YDQsNGB0LjQvNGH0YPQuiDQnNGW0LvRlNC90LAsIDE1INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC7QotCw0YDQsNCy0LXRgNC00ZbRlNCyLiAnJ9Ch0L/QvtCz0LDQtCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQW8wd094NTBVY0tMYVg4Z3BFM1c5dDY1REM2S3Bock0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C10YDQsNGB0LjQvNGH0YPQuiDQnNGW0LvRlNC90LAsIDE1INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQni7QkdGW0LvQsNGILicn0KLQsNC90LXRhtGMINC70Y/Qu9GM0L7QuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeG5iZmpCbXpjbE40LXRsNnQ5RUdEbTN5akxHandwUjUvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C+0YDQtNGW0ZTQvdC60L4g0ITQu9C40LfQsNCy0LXRgtCwLCAxOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS7Qn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINGA0LUg0LzRltC90L7RgCwg0JTQotCaLdCGLCAyKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjyDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFveEJlNk4zYWx0RnAzVWt0RjVGZEdZRnJkWHlIREhXZi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDQtdGJ0LDQuiDQnNCw0YDRltGPLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCn0LXRgNC90ZYuINCV0YLRjtC0INC70Y8g0LzQsNC20L7RgDsgMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4nJ9CV0LvQtdCz0ZbRh9C90LjQuSDQv9GA0LXQu9GO0LQnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUl3dUxyZFBha3hIMWY2WlBmbXc3ZDd2R2NoS2pvVTZtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTQtdC50L3QtdCz0LAg0JrQsNGA0ZbQvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy7QkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LAg4oSWMTQsINCGINGHLjsgMikg0KEu0JbQtNCw0L3QvtCyLiAnJ9Cf0YDQtdC70Y7QtCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYzVpV0M5YjVKM1R3M09XVERLU3dNOTVDRlRGQmx5NHQvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNGP0YfRg9C6INCX0L7RgNGP0L3QsCwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0KDQsNC90L7QuicnLCAyKdCdLtCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU3NWcklGUmZpdEx2ek0zNy1VV25mR05jc2owN091XzIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtGJ0YPQuiDQmtCw0YLQtdGA0LjQvdCwLCAxNSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0Jou0KfQtdGA0L3Rli4g0JXRgtGO0LQg4oSWMSzRgtCyLjc0MFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5zY3FTNWUxcFV3dGRJT1NPSWVYQVZIUkdqRnVfM01uL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbRidGD0Log0JrQsNGC0LXRgNC40L3QsCwgMTUg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQu0KjQvtC/0LXQvS4nJ9Cb0LDRgNCz0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVvS2VTcjdCSWVMdzBLc2pDdHAxREVESl84WGdneG5xL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2IwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3QvtGH0LrQviDQkNC90YLQvtC90ZbQvdCwLCAxMyDRgNC+0LrRltCyLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Jku0KEu0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINC00L4g0LTRltGU0Lcg0LzRltC90L7RgCDQlNCi0Jot0IYsIDIpINCaLtCn0LXRgNC90ZYuINCV0YLRjtC0IOKEljYg0YLQsi43NDBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1VHFPUkpJeEk2NXVLcTQtMlJxT1huVnVYam9RUEtrUy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDRgNC10LvRltC90LAg0JrRgNGW0YHRgtGW0L3QsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEuINCR0LDRhS7Qn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINGA0LUg0LzRltC90L7RgCwg0JTQotCaLdCG0IZcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGbWhXMk9sOXRsLWZWN1JPYXR6M21FbmIxQzBWd0FieC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDRgNC10LvRltC90LAg0JrRgNGW0YHRgtGW0L3QsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCQLiDQnNC+0YbQsNGA0YIuINCh0L7QvdCw0YLQsCDihJY4LCDQhtGHLlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWpGdDB6a25HYTh2dlh4RFJLUW81eDFZZHpjci1JeEhSL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2IzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNGB0YzQutGW0LIg0JDQvdC00YDRltC5LCAxNCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAu0JvQtdGI0LPQvtGA0L0uINCV0YLRjtC0INGE0LAg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTR1S1pVRzdsMVJFd0RrWGt2UjZmWUJqUWlUUFpDM2tvL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2I0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNGB0YzQutGW0LIg0JDQvdC00YDRltC5LCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0Jou0JTQtdCx0Y7RgdGB0ZYuICcn0JzRltGB0Y/Rh9C90LUg0YHRj9C50LLQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU1BOTEk4VnZGaEt6cFJ3TjktaUJSdVRkZFBmSnVVZS0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC40YDQuNC70L7QstCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxMyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KIu0JHRgNCw0YPQvS4gJyfQqNGC0L7RgNC8LCDRidC+INC90LDQsdC70LjQttCw0ZTRgtGM0YHRjycnLCAyKSDQny7Ql9Cw0YXQsNGA0L7Qsi4gJyfQoNC+0L3QtNC+LdCz0LDQu9C+0L8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVdIai0taGFZbkU3cFd0ZkhCb3lwWG5obTdpMGluc3ZHL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2I2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtC90LTRgNCw0YLRjtC6INCQ0LvRltC90LAsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCeLtCU0Y7QsdGO0LouINCS0LDRgNGW0LDRhtGW0ZcsIDIpINCeLtCR0ZbQu9Cw0YguJyfQoNC+0LfQtNGD0LwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVJ3ZlNRdFRmd1dwTER6WXlHZm1GeU9LZHlfU3JLN1NaL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2I3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtGB0LXQvdC60L4g0JDQu9GW0YHQsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JAu0JrQsNGA0LDQvNCw0L3QvtCyLiAnJ9CX0YDRg9C50L3QvtCy0LDQvdC40Lkg0YXRgNCw0LwnJywgMinQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4g0J/RgNC10LvRjtC00ZbRjyDihJY3LCDRgtCyLjIzXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLTZrWXJ0UXVIWk5rNUNoQWFXTHY3SVJaemsyMldkZGgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YfRg9Cx0LXQuSDQr9GA0L7RgdC70LDQsiwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J7QsdGALiDQhC7QktC10LLRgNC40LrQsC4nJ9Cc0L7Qu9C00LDQstGB0YzQutGWINC90LDRgdC/0ZbQstC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5S2pLSGZJLXVpajZqM21OQ1laMjZMTFpNb0JiWWs5ci9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7Rh9GD0LHQtdC5INCv0YDQvtGB0LvQsNCyLCAxNCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQu0JrRg9C70LDRgy4g0KHQvtC90LDRgtC40L3QsCDihJY1NVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVI3SHdYcExiTzF0aXozS3pNZzM1dDROM0JteDdBQk9ML3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2JhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRg9C70ZbQutC+0LLRgdGM0LrQsCDQmtCw0YLQtdGA0LjQvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmS7QoS7QkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0YTQsCDQtNGW0ZTQtyDQvNCw0LbQvtGALCDQlNCi0Jot0IYsIDIpINChLtCR0L7RgNGC0LrQtdCy0LjRhy4g0JXRgtGO0LQg4oSWOSwg0YLQsi4xNVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpRanNxR3BXcVdZa2VqUFlOX1RHLUUwbU1BOGNTai1yL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2JiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNC60LDRgNC10LLQuNGHINCd0LDRgtCw0LvRltGPLCAxNSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0YDQtSDQvNGW0L3QvtGALCDQlNCi0Jot0IYsIDIp0J4u0JHQvtGA0LTRjtCz0L7QstCwLiAnJ9Cj0LrRgNCw0ZfQvdGB0YzQutC40Lkg0YDQvtC80LDQvdGBJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpclZCVlMwV0R1ZldaQzJZRUI1N3VVTUxXYnc4QkxuUi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDQu9GP0YDRh9GD0Log0ITQu9GW0LfQsNCy0LXRgtCwLCAxMyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QkdC+0YDRgtC60LXQstC40YcuINCV0YLRjtC0IOKEljksINGC0LIuMTUsIDIp0KQu0KjQvtC/0LXQvS4nJ9CT0YPQu9GP0L3QutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvbTBoZlZncmEtVlN4NllYaEpicFp3TFJiZTBhOEJFLS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCe0L/QsNC90LDRgdGO0Log0KLQsNGA0LDRgSwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J8u0JfQsNGF0LDRgNC+0LIuICcn0KLQvtC60LDRgtCwLdC/0YDQtdC70Y7QtNGW0Y8nJywgMikg0JUu0JPRgNGW0LMuICcn0J3QvtC60YLRjtGA0L0nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWdnaHd5SDJBeC1BZVZ1ZWxiU1dzUzBvSW9BeFNfdUpEL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2JlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7RgdC70LDQvCAg0ITQu9C40LfQsNCy0LXRgtCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0JvRjtGC0LjQuScnINGW0Lcg0YbQuNC60LvRgycn0J/QvtGA0Lgg0YDQvtC60YMnJywgICAgIDIpINCdLtCb0LDQs9C+0LTRjtCzLiAnJ9Ci0LDQvdCz0L4g0LzRgNGW0LknJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW1xNC1aQllabWxuR1B6SlkxalJfUVZyMEd6NzVhTWxYL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2JmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNC90ZbQvNCw0Ygg0IbRgNC40L3QsCwgMTUg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jku0JPQsNC50LTQvS7QodC+0L3QsNGC0LAg0LTQviDQvNCw0LbQvtGAICjihJY1MCksINCGINGHLjsgMikg0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuJyfQnNGD0LfQuNGH0L3QuNC5INC80L7QvNC10L3RgicnLCDRgtCyLjE2IOKEljRcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoX0tRX1dwdm1qWkZzWEU0WFRfTWRmMjNzazRLOUdUcy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LXRgtGA0YPRgdGMINCd0LDRgtCw0LvRltGPLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCb0ZbRgdGCLicn0KDQvtC80LDQvdGBJycsICAgICAyKdCVLtCT0ZbQu9C70L7Qui4nJ9CS0LDQu9GM0YEt0LXRgtGO0LQnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU8xNV9DdWp3dHRhRjFCeFhnVzg0NHc2QUJVUWt1amZiL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2MxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RgNC40YnQtdC/0LAg0JDQvdC90LAsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLtCo0LzRltGC0YYuINCU0LbQsNC30L7QstCwINGW0L3QstC10L3RhtGW0Y8g4oSWMTMsICAyKSDQni7QlNC10LLRltGBLicn0KnQsNGB0LvQuNCy0LjQuSDQtNC10L3RjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSktNSWx1bjNSZWhFUnFLYVNIcGw2U0o2ZXl1dXEzYVcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GA0L7QutC+0L/Rh9GD0Log0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDE3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QktC10YDQvNC10L3QuNGHLiAnJ9Cn0L7RgNC90L7QsdGA0LjQstGG0ZYnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZOTDdlNnFoOFNPS2xVeE1vUnRBN3JTWThOaGFubFgtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2MzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RgNC+0LrQvtC/0YfRg9C6INCe0LvQtdC60YHQsNC90LTRgNCwLCAxNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0KQu0KjQv9C40L3QtNC70LXRgC4g0KHQvtC90LDRgtC40L3QsCzQhtCG0IYg0YcuXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xS0dNQ2NONl9CV1BkaXd6clJJdUEzTmR4VWVKYndJMWovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GD0YfQutC+INCh0L7RhNGW0Y8sIDEz0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JwuINCU0LLQvtGA0LbQsNC6LiDQldGC0Y7QtCAyICgyLdC5INC30L7RiNC40YIpLCAyKdCSLiDQktC10YDQvNC10L3QuNGHLiAnJ9Cn0L7RgNC90L7QsdGA0LjQstGG0ZYnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTRXZnNGdjRBbjJGYlZfdUZqaHFSRUk4Ny1JZnpRVWI4L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQsNC00LrQvtCy0YHRjNC60LAg0JDQu9GW0L3QsCwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQk9GA0ZbQsy4g0JXRgtGO0LQg0L/QsNC8J9GP0YLRliDQpC7QqNC+0L/QtdC90LBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfYUJOOEpncm1GbVZmdVZZVzRzMGxlTk5ZeGZQNTlTby9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LDQtNC60L7QstGB0YzQutCwINCQ0LvRltC90LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQpC7Qm9GW0YHRgi4gJyfQodGD0LzQvdC40Lkg0YHRgtC10L8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW4ybVNhUE53clZqbGNQQW9oVmlZcm8yNFd6aWt0QjBqL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQuNCx0LrRltC90LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDE1INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLiDQotC10YDQtdGJ0YPQui4gJyfQpNGD0LPQsCBMb2NrZG93bicnOyAyKdCcLtCR0L7QsdC10YAuJyfQntC/0ZbQstC90ZbRh9C90LAg0YDQsNC/0YHQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xc1BWRUIyVkl0X29EWk0wcG1CVVE1alVvVUJOaXZUd2UvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNGD0YHRgdGDINCT0LDQvdC90LAsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JMu0JLQvtC70LvQtdC90LPQsNGD0L/Rgi4gJyfQpdCw0YDQsNC60YLQtdGA0L3QsCDQvyfRlNGB0LAg0YMg0YTQvtGA0LzRliDQtdGC0Y7QtNCwJycsIDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0JXQu9C10LPRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhRWVGaVVYX0F2UmNSTUctNGhCQTNpOGM0NUVzWkg5bS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0YPRidC40L3RgdGM0LrQsCDQmtGB0LXQvdGW0Y8sIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLtCT0YDRltCzLiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwNzJKTnd2RW02Q2R1QV9HZVBzQUJ1NV9ZazZNMDJ6SC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0YPRidC40L3RgdGM0LrQsCDQmtGB0LXQvdGW0Y8sIDE0INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLicn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0LTQviDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTkRrX2pLTzVTSGJuc2FYQVRBMS1Zd2dLZTRiQW1JZG4vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2JcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCy0LjQvdGG0LjRhtGM0LrQsCDQldC80ZbQu9GW0Y8sIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQstCw0YHQvdC10LLRgdGM0LrQuNC5Licn0JTRg9C80LrQsCcnOyAyKdCULtCa0YDQsNC80LXRgC4gJyfQotCw0L3RhtGO0Y7Rh9C40Lkg0YHQutGA0LjQv9Cw0LvRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYWxnel9vdWtSeFQya1BBRnlYb1gtUWpJQTM0cElDY20vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2NcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCy0LjRgNC40LTRjtC6INCU0LXQvdC40YEsIDE2INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPIOKEljEyLCAyKdCTLtCT0LDQu9C40L3RltC9LiAnJ9CQ0YDRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0NkdGZ0hhWEwzeEhWRlp3LWhySHJ4azQ5Nzdsck5naC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LXQu9GW0LLQsNC90L7QstCwINCQ0L3QvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9CV0LvQtdCz0ZbRh9C90LjQuSDQv9GA0LXQu9GO0LQnJyDRgdGWINC80ZbQvdC+0YAsIDIp0Jwu0JTQstC+0YDQttCw0LouJyfQlNC20LDQt9C+0LLQuNC5INC10YLRjtC0Jycg4oSWNiAoMiDQt9C+0YjQuNGCKVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUp1Y050TzFEOTNrcUw4d29KYmtfQkppRGpkZ0d4c1E2L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQtdC80LXQvdC+0LIg0IbQstCw0L0sIDE1INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS7QlNC+0LPQsC4gJyfQodC+0L3QtdGCJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMMFVfSG91S1JQNHkzZ1BaYlZMa3p1bXlZRDJlekUyRC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LXQvNC10L3QvtCyINCG0LLQsNC9LCAxNSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0JzQvtGIZdC7ZdGBLiBF0YLRjtC0IOKEljgs0YLQsi43MFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMV9md1kzcmtwY0lsV2pjMVJ5X1l0aWh1LW93V3AybWdrL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2QwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQuNC80L7QvdC10L3QutC+INCi0LDQvNGW0LvQsCwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLtCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQsCDihJYxOSDRgtCyLjQ5LCDQhiDRh9Cw0YHRgtC40L3QsCwgMinQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5IC4nJ9Cf0ZbQtNGB0L3RltC20L3QuNC6Jycg0Lcg0YbQuNC60LvRgyAnJ9Cf0L7RgNC4INGA0L7QutGDJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFQbUVqZ09WMllZWmlSSVVCcFRESUhqdXItbHpSX2Zsdi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0L3RltCz0YPRgCDQkNC90L3QsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkdCl0LDQstCw0YjRli4gJyfQqNGC0L7RgNC8JycsIDIp0KQu0KHQsNC5LiDQktCw0YDRltCw0YbRltGXXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaG1feERIT1pUelVDUzRVWklzbzdNSFozaWJrdkFJYmIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotC10YDQvdC+0LLQsCDQmtGB0LXQvdGW0Y8sIDE0INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQhi7QkdC10YDQutC+0LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPIOKEljEwLCAyKdCVLtCT0YDRltCzLiAnJ9Cf0L7RhdGW0LQg0LPQvdC+0LzRltCyJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqSm9ZOGtkemVVS2w1elU1Z0xlNWR1OGxoR2FsQklZQi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0LrQsNGH0YPQuiDQktGW0LrRgtC+0YDRltGPLCAgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KQuINCc0LXQvdC00LXQu9GM0YHQvtC9LiAgJyfQn9GW0YHQvdGPINCx0LXQtyDRgdC70ZbQsicnLCAyKSDQki4g0JPRltC70LvQvtC6ICAnJ9CS0LDQu9GM0YEt0LXRgtGO0LQnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUtpNUMtdGFuanh5Mk15N2taNmtXZ1lFV01BT0VZRmM5L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLRgNCw0YfRg9C6INCe0LvQtdC60YHQsNC90LTRgCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8uINCX0LDRhdCw0YDQvtCyLiAgJyfQoNC+0L3QtNC+LdCz0LDQu9C+0L8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMThEbE4xYjRLMXNYcmR2dmIzQThwSG1KRnZYd2J6WXJkL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLRgNCw0YfRg9C6INCe0LvQtdC60YHQsNC90LTRgCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCULtCk0ZbQu9GM0LQuICcn0J3QvtC60YLRjtGA0L0nJyDihJY1XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTDNKeG9XUHI2anhNNVEzcHhPMEJCWDJVNFVpRm5FX0gvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTQvtC90Y7QuiDQntC70LXQutGB0LDQvdC00YAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwIOKEljIzLCDRhNCwINC80LDQttC+0YAsINCG0YcuOyAyKdCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDihJYyMywg0JTQotCaLdCGXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaTJmdU9QVk1xUWZJTkNUMlpKYlRKWGNjejVBZmJfaDUvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpdCy0L7RgdGC0L7QstCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCb0ZbRgdGCLtCu0L3QsNGG0YzQutC40Lkg0LXRgtGO0LQg4oSWMiwgMinQni7QmtC+0LfQsNGA0LXQvdC60L4t0JAu0JrQvtGBLdCQ0L3QsNGC0L7Qu9GM0YHRjNC60LjQuS4gJyfQntC5INGC0LgsINC00ZbQstGH0LjQvdC+LCDQtyDQs9C+0YDRltGF0LAg0LfQtdGA0L3RjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR25zQVpzdWdkcUJMTDZoS0NHbGxlQThaS19xVDE4RmovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpdGA0LDQvNC10L3QutC+0LLQsCDQkNC90LDRgdGC0LDRgdGW0Y8sIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0L7RgNC+0LLRltGG0LjQvS4nJ9Cg0YPRgdCw0LvQvtC90YzQutCwJycsIDIp0Jwu0KHQutC+0YDQuNC6Licn0JbQsNGA0YLRltCy0LvQuNCy0LAg0L8n0ZTRgdCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDMHVTcGVTeWJmZGFJWFlsbVl3TXJaNUpVc2RiN1JiOS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCl0LXQu9C80LDQvSDQktGW0L7Qu9C10YLQsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQo9CT0ZbQu9C70L7Qui4nJ9Cf0YPRgNGF0LDRjtGH0Lgg0LIg0YXQvNCw0YDQutCw0YUnJywgMinQki7QpdC+0LTQvtGILicn0KfQtdGA0LLQvtC90LAg0YjQsNC/0L7Rh9C60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXp1eUVHdDNjdlozc1ZqS25BM0NKVFpWTDJ2RVZnWFd5L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2RhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQuNCx0LDQvdC+0LLQsCDQktCw0YDQstCw0YDQsCwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9IOKEljIsINGC0LIuOVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXIxalVSRktDNTU1d0tNUjdDbFN5bXRUR19EV3d2Z3ZaL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2RiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQuNCx0LDQvdC+0LLQsCDQktCw0YDQstCw0YDQsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINChLtCR0L7RgNGC0LrQtdCy0LjRhy7QldGC0Y7QtCDihJY3LCDRgtCyLjI5XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xS1RVWVAzZ1duNFBUVEdHMVlfX0ZLckkxczVHa1hCb08vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZGNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkNC90YLQvtC90Y7QuiDQnNCw0YDRltGPLCAyMSDRgNGW0LpcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLtCc0LXRgtC90LXRgC4gJyfQlNCy0ZYg0LrQsNC30LrQuCcnLCAyKdCGLtCo0LDQvNC+LiAnJ9Ci0L7QutCw0YLQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFBRlZFRzNNM2dVMXlJYUljNVluY1JoVUlBbHdmOEFWai9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2RkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQvtCx0YDRltGI0L7QstCwINCG0L3QtdGB0LAsIDE2INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKSDQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg0YDQtSDQvNCw0LbQvtGALCDQhiDRhy47ICAgMikg0KEu0J/RgNC+0LrQvtGEJ9GU0LIuICcn0KHQsNGA0LrQsNC30LwnJyzRgtCyLjE3IOKEljFcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlKSHVFU1FWSE02YnB1cFBzdmRVbjRlbFFSYmdPMjNlL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZGVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGP0L3QvtCy0LAg0JTQsNGA0LjQvdCwLCAxNiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9LCDRgtCyLjI34oSWMiwgICAgICAyKdCULtCX0LDQtNC+0YAuINCV0YLRjtC0INC00L4g0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xLUNCY2VIRWJLZ2UzMlg2TkQxRl96RlZRLTJSYjQ0WXcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNkZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7Qt9C90Y7QuiDQkNC90LPQtdC70ZbQvdCwLCAxNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCvLtCh0YLQtdC/0L7QstC40LkuINCf0YDQtdC70Y7QtNGW0Y8sICAgICAgIDIp0K8u0KHRltCx0LXQu9GW0YPRgS4g0JXRgtGO0LRcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXk3UUh0R3VrSm9vY1MwQl9kaXd6SnUtVlFZOFdCOW9wL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GD0Log0KHQvtGE0ZbRjywgMTYg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CT0YPQvNC+0YDQtdGB0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrUFFUX3VUeGFJbGFscXhfYWFwU3BpZDJTWmdQN2pxNi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2UxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRg9C6INCh0L7RhNGW0Y8sIDE2INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQnC4g0JvQuNGB0LXQvdC60L4uICcn0JbRg9GA0LHQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOdWhkbE9xWGVQcjhleGRNcDBnWFRBbDZGZmtna0R1Ti9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2UyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRg9C70L7QstCwINCQ0L3Qs9C10LvRltC90LAsIDE4INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLiDQqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDRgtCyLjQ4IOKEljEsICAgICAyKdCfLiDQodCw0L3QutCw0L0uINCi0L7QutCw0YLQsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xem5oOVJVLXBDcDNySHhxeVZ1UDQ0RDRDa1ltNTlHak4vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LDQvdC+0LLRgdGM0LrQsCDQntC70YzQs9CwLCAxNyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCR0LDRgNCy0ZbQvdGB0YzQutC40Lkg0J/RgNC10LvRjtC00ZbRjyDihJY0ICcn0KXQvtGA0LDQuycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZTGQyRlA1SXhEbmVJY09NV2dXVGdDZnViQk9ZSlFQci9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2U0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTQsNC90L7QstGB0YzQutCwINCe0LvRjNCz0LAsIDE3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLtCb0Y/QtNC+0LIg0J/RgNC10LvRjtC00ZbRjywg0YLQsi4zOSDihJY0XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF3b2dWWnY4V1Z5UXRMRnNvcHdhUkJ4MVJRT3hsekNGSS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2U1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRg9C00L3QuNC6INCU0LDRgCfRjywgMTcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCSLtCR0LDRgNCy0ZbQvdGB0YzQutC40LkuJyfQm9C40YHRgtC+0Log0Lcg0LDQu9GM0LHQvtC80LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbF9IRTNyME81dXNqT0hjTnVNcE5EWWdfZzZkMlMzNXQvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCU0YPQtNC90LjQuiDQlNCw0YAn0Y8sIDE3INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi7QlNC10LHRjtGB0YHRli4gJycg0KDQvtC80LDQvdGC0LjRh9C90LjQuSDQstCw0LvRjNGBJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXFMZ3E5QWZENllYQ3lQUXlGZWpseVo4Qk9OdVNvTl80L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGA0Y7QutC+0LLQsCDQnNCw0YDRltGPLCAxNSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QkdC+0YDRgtC60LXQstC40YcuICcn0J/RgNC40LzRhdC4INC80L7RgNGPJycsIDIp0KQu0KjQvtC/0LXQvS7QldGC0Y7QtCDRgtCyLjEwIOKEljRcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMS1jYm8zQloxRVBOWW02TlMxZUNNbV8ySFR6SEo3QmVrL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZThcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGD0LvRltGIINCf0L7Qu9GW0L3QsCwgMTUg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JUu0JPRgNGW0LMuJyfQmtC+0LvQuNGB0LrQvtCy0LAnJywgMinQhi7Qn9Cw0LTQtdGA0LXQstGB0YzQutC40LkuICcn0KHQutC10YDRhtC40L3QvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOYW1WVkZmQWRSZmFGdUExdUtqbHQ5UUlXZ01pU0J5Ni9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2U5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzRg9C30LjRh9C10L3QutC+INCc0LDRgNGW0Y8sIDE5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDihJYzMSwgMdGHLjsgMinQpC7QqNC+0L/QtdC9LtCV0YLRjtC0LNGC0LIuMTAg4oSWNVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTy1haGZZSk5iRmY1ZlNPd1NTcGZmSVdXcG5pQnViSzgvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCe0LvRltC50L3QuNC6INCe0LvQtdC60YHQsNC90LTRgCwgMTgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQli7QkdGW0LfQtS3Qki7Qk9C+0YDQvtCy0ZbRhi4g0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGC0LXQvNGDINC3INC+0L/QtdGA0LggJyfQmtCw0YDQvNC10L0nJywgMinQmy7QoNC10LLRg9GG0YzQutC40LkuINCf0YDQtdC70Y7QtNGW0Y8g0YTQsCDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEzSnlsUGREV2dWejZRU0hSR1ZKdDdGaGRhUmVsQ0hTRC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ViXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNC40Log0JDQvdC90LAsIDE3INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4g0JXRgtGO0LQt0LrQsNGA0YLQuNC90LAg0YLQsi4zMyDihJY1LCDRgdC+0LvRjCDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrN29rQnV5TXNGYVJ0NEd3d1hVU2dZQ2g1RGRZNk1OOS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNC40Log0JDQvdC90LAsIDE3INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4g0J/RgNC10LvRjtC00ZbRjywg0YLQsi4gMzIg4oSWMTIsINGB0L7Qu9GMINC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUxZSEhWS3VVSWlzYWRFMmZtendZem13c1MtVXdWeFZSL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotGW0YXQvtC90L7QuiDQhNCz0L7RgCwgMTcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QkdC+0YDRgtC60LXQstC40YcuJyfQodC60LXQu9GWINGD0YnQtdC70LjQvdC4INCj0Yct0JrQvtGIJycg0Lcg0YHRjtGX0YLQuCAnJ9Ca0YDQuNC80YHRjNC60ZYg0L3QsNGA0LjRgdC4Jycu0YLQsi44LCAyKdCkLtCb0ZbRgdGCLtCi0YDQsNC90YHRhtC10L3QtNC10L3RgtC90LjQuSDQtdGC0Y7QtCDihJYxMCwg0YTQsCDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4bjNUZk5INkdGQkJRbzF2WlpOblJSVnFidGpHR3VnMi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQsNGJ0LXQstGB0YzQutC40Lkg0KLQsNGA0LDRgVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuICcn0JXRgtGO0LQt0LrQsNGA0YLQuNC90LAnJywg0YLQsi4zMyAoNSlcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWVxVFBYbF9SaFpRT2RWci1saFVRbWxPTThjb0M2Rm9LL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNCw0YnQtdCy0YHRjNC60LjQuSDQotCw0YDQsNGBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy7QoNC10LLRg9GG0YzQutC40LkuINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuNCAoMilcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMS1fYm9Nbm9Zbms3NHhEelF5NlFsQ3FWeElQM2o0c0h4L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10YHQuNC6INCd0LDQt9Cw0YDRltC5LCAxNiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCR0L7RgNGC0LrQtdCy0LjRhy4nJ0x5cmljYSBOb3ZhJycs0YLQsi41OSDihJYzLDQ7IDIp0KQu0JvRltGB0YIu0KLRgNCw0L3RgdGG0LXQvdC00LXQvdGC0L3QuNC5INC10YLRjtC0IOKEljggJyfQlNC40LrQtSDQv9C+0LvRjtCy0LDQvdC90Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYzBzajRBTXVEeEhBcG1HVDlXU2htakpIYkVIUnpKZEMvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCu0LfQu9C+0LLQsCDQm9GO0LHQvtCyLCAxNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSkg0Jou0JTQtdCx0Y7RgdGB0ZYuICcn0JDRgNCw0LHQtdGB0LrQsCcn4oSWMSwgMikg0Jku0JHRgNCw0LzRgS4nJ9CG0L3RgtC10YDQvNC10YbRhtC+JycsINGC0LIuMTE3IOKEljJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUxBREluV3BtLWpoYzFGYlJ1ZGdxd0NNR3R6WFFEQk1TL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQl9Cw0ZTRhtGMINCc0LDRgNC40L3QsFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCh0LrQvtGA0LjQui4nJ9CS0LDQu9GM0YEnJyDQtyDQn9Cw0YDRgtC40YLQuCDihJY1XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExbWxaem5aYm94aHp4RUJUSjRnVW1FdEUwSllnUWdkaC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2YzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JfQsNGU0YbRjCDQnNCw0YDQuNC90LBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCfLtCn0LDQudC60L7QstGB0YzQutC40LkuICcn0JTRg9C80LrQsCcnLCDRgtCyLjU5XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFQYVVwLWFxUWRDcUJ0MzU2NjJ5TndKa2hhTk9BWE5faC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQvtCz0LLQuNC90L7QstGB0YzQutC40Lkg0ITQstCz0LXQvdGW0LlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCULtCf0YDQuNGC0YHQutC10YAuICcn0JHQu9GO0Lcg0J/RltC60LDRgdGB0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZTJfNGlzUXpsdWNMUjdrQlpYLUNIeGdxWXJCeEpSWncvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0L7Qs9Cy0LjQvdC+0LLRgdGM0LrQuNC5INCE0LLQs9C10L3RltC5XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7Qn9GA0L7QutC+0YQn0ZTQsi4g0KHQvtC90LDRgtCwIOKEljMsINGC0LIuMjhcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMURMaFQ5WXdSNUk5Y1p4emROb2UyMkZ3UzhqcEk0WVZzL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC40LrQuNGC0Y7QuiDQkNC90LDRgdGC0LDRgdGW0Y9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLtCg0LDQutC+0LIuICcn0JrQvtC90YbQtdGA0YLQvdC40Lkg0LXRgtGO0LQnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQzhhNlRQUk0yY2FRZlRPQTZ6R0h2dUlqR1NvTDdDMWIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LjQutC40YLRjtC6INCQ0L3QsNGB0YLQsNGB0ZbRj1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDQtNC+INC80ZbQvdC+0YAsINCU0KLQmiAt0IbQhlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xd3JxZGJfa2UyS2NoX0NmQmNtTlJIMk01ODBQdFpRQTEvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCd0LDQt9Cw0YDQtdC90LrQviDQmtGB0LXQvdGW0Y9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLtCS0L7Qu9C60L7QstCwLiAnJ9Cd0LDRgdGC0YDQvtGXJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU9BOHJ2TjZ3d2RwT1Z5MURWRHQxenEtNHBrZWlTcjN4L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQndCw0LfQsNGA0LXQvdC60L4g0JrRgdC10L3RltGPXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QkdCw0YUuINCQ0LvQtdC80LDQvdC00LBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBxdFVSV2QzYWFzY3EyZ3dOSHhNLUZFVHlRSExCOHREL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC10YDQvtCyINCS0LvQsNC00LjRgdC70LDQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS4g0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINC00L4g0LzRltC90L7RgCwg0JTQotCaLdCG0IYsIDIp0KQu0KjQvtC/0LXQvS4g0JHQsNC70LDQtNCwIOKEljEsINGC0LIuMjNcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWF0bjV5aUVjWGdqVm5GS2ZNNFFXQVVTNHpfVVZUSl9xL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotCw0YDQsNGB0L7QsiDQktC70LDQtNC40YHQu9Cw0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuICcn0JXRgtGO0LQt0LrQsNGA0YLQuNC90LAnJywg0YLQsi4zOSDihJY5LCAyKdCkLtCo0L7Qv9C10L0uICcn0JHQsNC70LDQtNCwJycsINGC0LIuMjMg4oSWMVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOU5aX3RFeTBPMm5SWGpDbHRkX3ZkV0wzU011Qk5hQ00vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDQtdCx0LXQvdGO0Log0JMu0J4uXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCf0YDQvtC60L7RhNGM0LXQsi4g0KHQvtC90LDRgtCwIOKEljIs0IYg0YcuOzIpICAg0KQu0JvRltGB0YIuJyfQldGC0Y7QtCDQt9CwINC60LDQv9GA0LjRgdCw0LzQuCDQn9Cw0LPQsNC90ZbQvdGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNoVVlJWVA5bmdvUVplaG1DYnpQNUYzYkpBS0ZoM3NOL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0L3QtNGA0LDRgtGO0Log0Jwu0J4uIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoC7QqNGD0LzQsNC9LiAnJ9Cg0L7QvNCw0L3RgScnLCDRgtCyLjI4LCAyKdCSLtCa0L7RgdC10L3QutC+LiAnJ9Ca0YPRgNCw0L3RgtCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZPYjQxUHNtcVdPNG55T0RrT2RvTVQ0U3NQcDRIWDl4L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQntC/0LDQvdCw0YHQtdC90LrQviDQkC7Qni4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiDQn9GA0LXQu9GO0LTRltGPINGB0L7Qu9GMINC00ZbRlNC3INC80ZbQvdC+0YAsIDIp0JIu0KTRltC70ZbQv9C10L3QutC+LiDQotC+0LrQsNGC0LBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZMWEVMdVpjSTZRaTJncmx3YVUtdUV3bEx2MWVTRWtYL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH1cbl07XG5cbmxldCBjb25jZXJ0bWFzdGVycyA9IFtcbiAgICB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmYWFzZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LXQstC10LvRjNC+0LLQsCDQhNC70ZbQt9Cw0LLQtdGC0LAsIDIwINGA0L7QutGW0LIuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiDQkNGA0ZbRjyDQm9C10L3RgdGM0LrQvtCz0L4sIDIpINCTLtCl0LDQt9Cw0L3QvtCy0LAuIFxcXCIg0KPQt9C00L7QstC2INCy0YPQu9C40YbRliDRhdC+0LTRgyDRj1xcXCJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0NXWDBlUlBUQ1lZXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmYWFzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JfQsNC60LDQu9GO0LbQvdCwINCeLtCRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQky7QktC10L3Rj9Cy0YHRjNC60LjQuS4g0JrQvtC90YbQtdGA0YLQvdC40Lkg0L/QvtC70L7QvdC10Lcg0YDQtSDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9zM2NsWExUMzRoWVwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTNmZmFhczFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQl9Cw0LrQsNC70Y7QttC90LAg0J4u0JFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCWLtCc0LDRgdC90LUuXFxcItCg0L7Qt9C00YPQvFxcXCJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2dEeVVDYmFuZUJrXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxM2ZmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtCx0LfQsNGAINCd0ZbQutC+0LvRjCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQu0JrRgNC10LnRgdC70LXRgC4nJ9Cc0LDQu9C10L3RjNC60LjQuSDQktGW0LTQtdC90YHRjNC60LjQuSDQvNCw0YDRiCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrdVNSMFZtT01pcUlqOVlSMHUzbHZPenE0Skc1YUxZOC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDAwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtCx0LfQsNGAINCd0ZbQutC+0LvRjCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0JXQu9GM0LPQsNGALicn0KHQsNC70Y7RgiDQutC+0YXQsNC90L3RjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExZ0k3WGxqX1NMUXFsMlBpNkVUQWhTQVpUS0xNamtCbi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDAxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNCx0L4g0J3QtdGB0YLQvtGALCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtGA0L7Qu9C7LiAnJ9Cf0L7Qu9GM0LrQsCDQstGW0YHQu9GO0YfQutCwJycsIDIp0JIu0KbQuNCx0ZbQvSjQv9C10YDQtdC60Lsu0JAu0KbQsNGA0LXQvdC60L4pLiAnJ9Cb0LjRgdGC0L7QuiDQtyDQsNC70YzQsdC+0LzQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0UFI1ZXZyVUlSYVMxVkZVdnUwczY5SE1IN3hTM1dpSS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDAyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQhNCy0LPQtdC90ZbRjywgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0JHQtdGC0YXQvtCy0LXQvS4gJyfQkdCw0LHQsNC6Jycs0L7QsdGALiDQkC4g0KjRg9Cy0LDQu9C+0LLQsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaXIyYVJLY284Mk53elIyRlFINkFwWlZIUVpZcjBMN3kvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0ITQstCz0LXQvdGW0Y8sIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCR0LXRhi4gJyfQn9C+0LTRltC70YzRgdGM0LrRliDQstC40LrRgNGD0YLQsNGB0LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcUpROUFJV2o0OHBKVE1CV2ZvM2g3ejZKbEtKSDk4MG4vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0YLQsNGA0YbQtdCyINCR0LXQvdC20LDQvNGW0L0sIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQli7QnNCw0YHRgdC90LUuICcn0KDQvtC30LTRg9C8Jyc7IDIp0JUu0KDQuNCx0LrRltC9LiAnJ9Ck0L7RgNC80YPQu9CwIDEnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTDZieER5c04weTJHRFNOblJYcUdFRmJIUjdlUy1peHMvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LvQsNGB0Y7QuiDQndCw0LfQsNGALCAxOCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QlNC+0L3QvtGC0ZYuINCQ0YDRltGPJydPIGRlbCBtaW8gYW1hdG8gYmVuJycsMinQlS7Qk9GA0ZbQsyzQky7QpS4g0JDQvdC00LXRgNGB0LXQvSAnJ0plZyBlbHNrZXIgZGlnJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTJfTUZQVTM5YnRKUUt2U3QyUll6amlVMEhhWXNhNE9nL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNGP0YfQtdC6INCG0L7QsNC90L3QsCwgMTfRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QkC7QnNC+0YbQsNGA0YIu0JDRgNGW0Y8nJ1JpZGVudGUgbGEgY2FsbWEnJywgMinQpC7QndCw0LTQtdC90LXQvdC60L4sINCGLtCk0YDQsNC90LrQvi7QoNC+0LzQsNC90YEgJyfQp9C+0LPQviDRj9Cy0LvRj9GU0YjRgdGPINC80LXQvdGWINGDINGB0L3RlicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFUWJRS2JXaXZDYi1nT1FrY2NJQ0w1QVBRamdXbGU5dy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQstCw0YjQsCDQr9C90LAsIDE2INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JrQstCw0L3Rhi4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwg0IYt0IbQhiDRhy47IDIp0JIu0J/QvtC/0L8uICcn0KDRg9GB0YHQutC40Lkg0LLQtdGH0LXRgCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvcEw0MW1MSDEwQm5yMWVNeXpPRXhzd0ZKb1RaXzhjUy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtC70L7QtNGW0Lkg0JDQvdGC0L7QvSwgMTgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4g0KDQvtC80LDQvdGBJyfQk9C+0YDQvdC40LzQuCDRgtC40YXQviDQu9C10YLQtdC70LAg0LTRg9GI0LAg0L3QtdCx0LXRgdCw0LzQuCcnLCAyKdChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CV0LvQtdCz0ZbRjycnLNGC0LIuM+KEljEsINC+0LHRgNC+0LHQutCwINC00LvRjyDQstGW0L7Qu9C+0L3Rh9C10LvRliDRgtCwINGELdC90L5cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWxRSXpET2lacC1FZFhseTEwU1ZtNGRpT2o1V0NTazNaL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0L3RjtGI0LXQuiDQodC+0YTRltGPLCAyMSDRgNGW0LpcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCi0LDQutGC0LDQutGW0YjQstGW0LvRli4g0KHQvtC90LDRgtCwINC00LvRjyDRhNC70LXQudGC0Lgg0ZYg0YTQvtGA0YLQtdC/0ZbQsNC90L4uXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFIWEUtV2JsVTAtSHl3Z1Z6Q3VuUW5pUVVDVU5YR2xOTi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtC90Y7RiNC10Log0KHQvtGE0ZbRjywgMjEg0YDRltC6IFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQu0JrQvtC80LvQtdCyLiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTRxNzhYS3BkRmc2NlZTV2tBWnEwVmVSdUthVGNKVXB1L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GH0LXQu9GW0L3RhtC10LLQsCDQkNC00YDRltCw0L3QsCwgMTUg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QnNC+0YbQsNGA0YIuINCQ0YDRltGPINCR0LvQvtC90LTRhdC10L0g0Lcg0L7Qv9C10YDQuCcn0JLQuNC60YDQsNC00LXQvdC90Y8g0ZbQtyDQodC10YDQsNC70Y8nJywgMinQoC7Qk9C70ZbRlNGALicn0JIg0L/QvtGA0YvQstC1INC90LXQttC90L7RgdGC0Lgg0YHQtdGA0LTQtdGH0L3QvtC5JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTdtUlZ4VjA2djVNdjZfUDNDMTgzb01nT04tUl91LXFPL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10YHQuNC6INCd0LDQt9Cw0YDRltC5LCAxNiDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlNC2LtCf0YPRh9GH0ZbQvdGWLiDQkNGA0ZbRjyDQotC+0YHQutC4OyAyKdCcLtC00LUg0KTQsNC70YzRjy4nJ9Cl0L7RgtCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUJKTnNUcDRXRHhaYkFkQW5qTUxQM2hiRDYzVDJlSXdZL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQr9GA0L7RiNC10L3QutC+INCS0LDQu9C10YDRltGPLCAxOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCh0YLQtdGG0LXQvdC60L4uICcn0KHQvtGC0L7Rj9C70LAg0Y8g0ZYg0YHQu9GD0YXQsNC70LAg0LLQtdGB0L3RgycnOyAyKdCSLtCS0LvQsNGB0L7Qsi4g0KHQutC10YDRhtC+INC00LvRjyDQtNC+0LzRgNC4INGC0LAg0YTQvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPdURsYWNEYjNpOTR4Tnhrb3drLWpzTmt0eHVRSzcxTC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtC30LDQuiDQhtGA0LjQvdCwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhC7QkdC+0LfQt9CwLicn0JTQuNGC0Y/Rh9GWINC80YDRltGXJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVBzb3lPSXIxN09DeU5fR2hSVV9xN0lwUzRIV3dIV1VCL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0LfQsNC6INCG0YDQuNC90LBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIifQndGW0Ycg0Y/QutCwINC80ZbRgdGP0YfQvdCwJycsINC+0LHRgC4g0K4u0J7RgdGC0YDQvtCy0YHRjNC60L7Qs9C+IFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVEpLUUZFbTNhM3d6aVl2STNRZmloR3h6VjJVNVFIMm4vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LjQutC40YLRjtC6INCQ0L3QsNGB0YLQsNGB0ZbRjyBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J0u0JHQsNC60LvQsNC90L7Qsi4gJyfQmtC+0L3RhtC10YDRgtGW0L3QvicnLCAgICAgIDIp0Jcu0JHQsNCz0ZbRgNC+0LIuICcn0KDQvtC80LDQvdGBJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWo4X212WkVHVGdZSTBMRkdXRm9MYlFBZ0NIcEk1QzBaL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LIn0Y7QuiDQktC70LDRgdGC0LBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JAuINCc0L7RhtCw0YDRgi4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINGE0LDQs9C+0YLQsCDQtyDQvtGA0LrQtdGB0YLRgNC+0Lwg0YHRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwg0IbRhy47IDIp0JAu0KLQsNC90YHQvNCw0L0u0KHQvtC90LDRgtC40L3QsCDQtNC70Y8g0YTQsNCz0L7RgtCwINGWINGE0L7RgNGC0LXQv9GW0LDQvdC+LNCG0IbQhtGHLlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMzBhWk8xbnhWNEU4SFg3aHhXYU52VlQ0YmZna2h4NE0vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDRgdGO0Log0K7Qu9GW0Y9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JMu0KTQvtGA0LUuICcn0J/RgNC+0LHRg9C00LbQtdC90L3RjycnLCAyKSDQkS7QkdCw0YDRgtC+0LouICcn0KjRltGB0YLRjCDRgNGD0LzRg9C90YHRjNC60LjRhSDRgtCw0L3RhtGW0LInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb2RzM3R2VURYWmRvMXllZElWWFljYzlNbjc3YmpoMjUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90L7QstCwINCiLtCSLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0KHQtdCy0LXRgNC9LiAnJ9Cf0L7Qu9GM0YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeFh0dk9TQXVudjU2UmZBeGdWMXE3bTRpS2EwOXNXSDEvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90L7QstCwINCiLtCSLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0KLQsNC80LDRgNC40L0gJyfQodGC0LDRgNC+0LLQuNC90L3QuNC5INCz0L7QsdC10LvQtdC9JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTQ5dmxNMDdHZDhTOUN6NHREWjJLeUtrZ3VKenlCMXVCL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9Cw0YfQuNC6INCeLtCQLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoC7Qk9C70ZbRlNGALicn0KDQvtC80LDQvdGBJycsIDIp0J4u0KbQuNCz0LDQvdC60L7Qsi4nJ9CG0L3RgtGA0L7QtNGD0LrRhtGW0Y8g0YLQsCDQp9Cw0YDQtNCw0YgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTmdzODVxcEVPREV2NjdhOC1kYUp4Wm9INktvN1NVV2svcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDQuNGG0ZbQsiDQni7QnC5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQuINCa0YDQtdC50YHQu9C10YAuJyfQnNCw0LvQtdC90YzQutC40Lkg0LLRltC00LXQvdGB0YzQutC40Lkg0LzQsNGA0YgnJywgMinQmy4g0KDQtdCy0YPRhtGM0LrQuNC5LiAnJ9CG0L3RgtC10YDQvNC10YbQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuWGt5YlBaSFBPV1dVekJFRF9LS2VHRjNrTzJFY2Fiai9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRltGA0YfQsNC90L7QstCwINCGLtCSLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JLRltC00LzQvtC90YLQtS4nJ1BhciB6aWxvIHVuIHJhaWJvIHBhc2FrdScnLCAyKdCT0YPQsdCw0YDQtdC90LrQviDQki4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINGE0LvQtdC50YLQuCDQtyDQutCw0LzQtdGA0L3QuNC8INC+0YDQutC10YHRgtGA0L7QvCzRgtCyLjEwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6cE1qQ2F1VXBiSmR1ZldYZmI1T2ZtN1A5c0FZai1pUC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQtdC60YPRhSDQni7Qki5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0IYu0JLQuNC80LXRgC4gJyfQk9GD0YbRg9C70YzRgdGM0LrQsCDRgNCw0L/RgdC+0LTRltGPJycsIDIp0KPQutGALtC90LDRgC4g0YLQsNC90LXRhtGMINCyINC+0LHRgC7Qki7QodC+0LvQvtC90YHRjNC60L7Qs9C+ICcn0JLQtdGH0L7RgNC90LjRhtGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWRmUHgxNVdRS0hmUFZ0TVBXV0FBdzlzeTlVWXc1UzFlL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C+0LHQvtC00LAg0JsuINCcLiwgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCR0LXRgtGF0L7QstC10L0sINCiLtCo0LXQstGH0LXQvdC60L4uICcn0JfQvtGA0LUg0LzQvtGPINCy0LXRh9GW0YDQvdGP0Y8nJywgMinQm9C10LzQutGW0LLRgdGM0LrQsCDQvdCw0YDQvtC00L3QsCDQv9GW0YHQvdGPICcn0JIg0YLQtdC80L3RgyDQvdGW0YfQutGDINGD0LHQvtGH0LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMGdabzUzWDZFaEh3RU1wWEt3cEIydFcyX2lyVm8yOTAvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0Y7QsdGH0LXQvdC60L4g0Jwu0KEuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEu0JHQsNGFLiDQmtC+0L3RhtC10YDRgiDQtNC70Y8g0YHQutGA0LjQv9C60Lgg0Lcg0L7RgNC60LXRgdGC0YDQvtC8INC70Y8g0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xd2ZodWl0WEwyTXd0WWRyVUhJa1ZkTXhRWnBodDZqTmwvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0Y7QsdGH0LXQvdC60L4g0Jwu0KEuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnS7QodGC0LXRhtGO0L0uICAgICcn0JHQvtC70LXRgNC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWJIV1VyaXFLdlNUblZuSW00N21tTGVkU2kwTmgtWFFzL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC40YXQsNC50LvQvtCy0LAg0Jwu0JIuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC7QodC+0LvRgtCw0L0uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRW9FUzJtVHJXQ3k5Q1FjcWQ5cXUzNjZaMXR6NklwUlEvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTNmZmFhc2RhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNGF0LDQudC70L7QstCwINCcLtCSLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JkuINCi0LDQvNCw0YDQuNC9LiBcXFwi0KHRgtCw0YDQvtCy0LjQvdC90LjQuSDQs9C+0LHQtdC70LXQvVxcXCJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXU0eEowdks2ZGVSMlhKd0dMWEZoNnNCUmVQdnhHVU5yL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNGP0LvRjNC60ZbQvdCwINCdLtCeLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JTQti7QktGW0LvRjNGP0LzRgS4gJyfQnNC10LvQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpTV9FRjBWeDktdzREUzZIUl9aSFJKLW1xSndBLUZHcC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDFlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzRj9C70YzQutGW0L3QsCDQnS7Qni5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCm0LjQvdGG0LDQtNC30LUuICcn0KHQsNGH0ZbQtNCw0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNTlkalNyekkxQXZMNXBrQ2wwdm5ZRHNIUUxUbmQ1bG8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCd0ZbQutGW0YLRltC90LAg0IYu0KAuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkS7Qm9GP0YLQvtGI0LjQvdGB0YzQutC40LkuICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeVF5TzBRNjVXdkhudlkyOHhCbDNzaFctSHRkdTQyMzkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCd0ZbQutGW0YLRltC90LAg0IYu0KAuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQodC7LiDQkC7QnCfRj9GB0YLQutGW0LLRgdGM0LrQvtCz0L4sINC80YPQty7Qki7QktC10YDQvNC10L3QuNGH0LAgJyfQn9GW0LTQutGA0YPRh9GDINGPINGH0L7RgNC90ZbRlyDQstGD0YHQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1XzdVUUR1T0NEcUpKajFxNWxoRUZQRW94ZF9QVTNqWS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDIxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNGU0L3QutC+INCiLtCuLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCWLtCc0LDRgdGB0L3QtS4gJyfQoNC+0LfQtNGD0LwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSmxBb1ktQUFKRXlJLXJJUkRDdTdVbnl3eHZyV0VCQncvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDRlNC90LrQviDQoi7Qri4sIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIu0KfRg9C/0LDQui4gJyfQktC10YHQvdGP0L3QuNC5INGA0L7Qui3QvS3RgNC+0LvQuycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUNS1JVU5VdVFtVXZGVldZbFk2U0FWZWotVElxbWJycS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDIzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNCy0YfRg9C6INCiLtCGLiAgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCU0LYu0JLRltC70YzRj9C80YEsINCw0YDQsNC90LYu0JAu0KLQtdC/0LvQuNGG0YzQutC+0ZcuJyfQmtC+0LvQuNGB0LrQvtCy0LAg0LTQu9GPINCw0L3Qs9C10LvQsCcnLCAyKdCSLtCa0L7Qt9C70L7QsizQv9C10YDQtdC60LsuINC00LvRjyDQtNC+0LzRgNC4INCELtCW0YPQutC+0LLQsC4gJyfQnyfRlNGB0LAg0YMg0YHRgtC40LvRliDRhNC70LDQvNC10L3QutC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTdUZ2l1b2dpdnNoM3h3akZYaTVhMW9SVS1va2tQOTYwL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCGLtCuLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCo0YPQvNCw0LrQvtCy0LAuICcn0KLQsNC90LPQviDQldCy0ZbRgtC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFDa3ppUnZZSnZuaVc3Y2lhN3k5RWtJODVzbkxKdzd4L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCGLtCuLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIu0JPQvtC80L7Qu9GP0LrQsC4gJyfQhtGB0L/QsNC90YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaU9VSk4yMUJ2RGR6c0wwb1AwYXR2c0Vtb3FnVWRwWUMvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzQvtC70Y/QvdGW0L3QvtCy0LAg0KEu0JwuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QlNCy0L7RgNC20LDQui4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINGB0LrRgNC40L/QutC4INC70Y8g0LzRltC90L7RgCwg0IYg0YcuOyAyKdCcLtCh0LrQvtGA0LjQui4gJyfQmtCw0YDQv9Cw0YLRgdGM0LrQsCDRgNCw0L/RgdC+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXRsc3JNa1FwMFVWcTB5d3RKMDFMcEhLUHNtRk9wSG5PL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodGC0LDRgNC40L3RgdGM0LrQsCDQnC7QkC4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCo0LjQvdC60LDRgNC10L3QutC+LtCS0LDRgNGW0LDRhtGW0Zc7IDIp0JUu0JHQvtGG0YbQsC4nJ9CQ0YDRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUxzV3pWX0x0MXowZ0dYVUxTZWdvdWNrWTlSWnJvRzdoL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotGA0LXQv9Cw0Log0Jwu0IYuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCWLtCU0LXQvNC10YDRgdGB0LzQsNC9LiDQpNCw0L3RgtCw0LfRltGPLCAyKdCfLtCG0YLRg9GA0YDQsNC70YzQtNC1LiAnJ9Cc0LDQu9C10L3RjNC60LjQuSDRh9Cw0YDQtNCw0YgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVE1TS0hwRWNtTTNLN2hpWnp5WTNnNEtfOE10SGJIOUwvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCE0YDRjNC+0LzRltC90LAg0J4u0JMuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jwu0JTRgNC10LzQu9GO0LPQsC4g0J/QvtC10LzQsC3RgNCw0L/RgdC+0LTRltGPLCAyKSDQoS7QntGA0YTQtdGU0LIuJyfQktC10YHQvdGP0L3QutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVk2T0tVT29KYjFqdTNWelM0RkN0TzRndUJMSEQ5MTBQL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MmFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0LTRg9C6INCiLtCuLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Jou0Jwu0JLQtdCx0LXRgC7QmtC+0L3RhtC10YDRgiDQtNC70Y8g0LrQu9Cw0YDQvdC10YLQsCDihJYxLNCGINGHLjsgMikg0K8u0JzQtdC00LjQvdGM0YguINCg0L7QvNCw0L3RgVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa1dCSFlVWVJtWHBtNUJDR1c5Ym50OHk5cml4Z1BRWjQvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCd0L7QstGW0LrQvtCy0LAg0Jwu0JwuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQntCx0YAuINCULtCX0LDQtNC+0YDQsC4gJyfQodC10YDQtdC0INGB0LXQu9CwINC00LjRh9C60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMGFXVmxPZTNGLXNzUWhUVnFrRm5nOEdKS0dKRXdVODAvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCd0L7QstGW0LrQvtCy0LAg0Jwu0JwuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8u0IYu0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJ9CX0LDQsdGL0YLRjCDRgtCw0Log0YHQutC+0YDQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0dzVNTlUtNWZ1WFFvU09IcFd0YUd2R2paeGNmTUFmbS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDJkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQuNGA0L7RgtCwINCeLtCcLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QmtGD0LTRgNGP0LLRhtC10LIuICcn0J7QtNC40L0g0LTQtdC90Ywg0Lcg0LbQuNGC0YLRjyDQtNGP0YLQu9CwJycsIDIp0J4u0JHQtdGGLicn0KPQutGA0LDRl9C90YHRjNC60LUg0ZbQvdGC0LXRgNC80LXRhtC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNlakIxaWRfUFU3WGctdzVmektVdkowRW9PbkZzRE1DL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH1dO1xuXG5sZXQgZW5zZW1ibGUgPSBbXG4gICAge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JbRg9GA0LDQstC10LvRjCDQoS4sINCQ0YDRgtC10LzQtdC90LrQviDQoS4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9CG0YHQv9Cw0L3RgdGM0LrQuNC5INGC0LDQvdC10YbRjCcnLCAyKdCe0LHRgC7QnC7Qn9C+0L/QvtCy0LAuICcn0ITQstGA0LXQudGB0YzQutGWINC80L7RgtC40LLQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFLdmNFRTdxUFMwcmFPQ3FkOHNhTUVIby15MFVESXBDaC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDM4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICAo0J/QuNC70LjQv9GH0YPQuiDQnS4sINCa0LDQstGD0L0g0IQuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JIu0JDQu9C10LrRgdC10ZTQsi4nJyDQndCwINC/0YDQvtCz0YPQu9GP0L3RhtGWJycsIDIp0J4u0J/QtdGC0YDQvtCy0LAuICcn0KbQuNGA0LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbkVMb3R3cUF6OUM3ZDA5RzROVkJWdmJSeUtMOTU4cnMvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCg0LDQtNC60L7QstGB0YzQutCwINCQLiwg0JrRg9C30YzQvNC40YcpLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLtCo0L3RltGC0LrQtS4gJyfQqNC40L3QtdC70YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTTRwYXpOSV9UeXYyc0RNVzlvQjlRZW0zNkk1RFJadVIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCg0LDQtNC60L7QstGB0YzQutCwINCQLiwg0JrRg9C30YzQvNC40YcpLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQndCw0YPQvNC10L3QutC+Licn0KfQsNGBINCy0LXQu9C40LrQuNGFINC+0YfRltC60YPQstCw0L3RjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMQk9lX3dGbENfeXp0X0Zma1JiQzgtOTBjVnUzc3RWTy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICAo0KHRltC60L7RgNCwINCgLiDQp9C10YDQtdC/0YPRidCw0Log0JwuKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCd0LDRg9C80LXQvdC60L4uICcn0JrQvtC70L7QvNC40LnQutCwJycsIDIp0JUu0JPRgNGW0LMt0JMu0KTRltGA0YLQuNGHLicn0KLQsNC90LXRhtGMINCQ0L3RltGC0YDQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPUlR6dy1wbGVoUXZBQU9pbk9yZHFuSHRuVV9vQ1pqNS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICcnTXljcmFmdCcnICjQhNGA0LzQvtC70LXQvdC60L4g0JQuLCDQqNC40LHQsNC90L7QstCwINCSLikgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCh0LrQvtGA0LjQui4gJyfQnNC10LvQvtC00ZbRjycnLCAgICAgICAgIDIp0J4u0KXRgNC+0LzRg9GI0LjQvS4gJyfQlNGA0YPQutCw0YDRgdGM0LrQsCDQvNCw0YjQuNC90LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFBdXZvNDRhQllURzN2S3hzVDJoUUQwaG1rZzFFZGxhNy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQkdC+0L3QtNCw0YDQtdC90LrQviDQnC4sINCh0LvRltC90YfQtdC90LrQviDQri4pIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0KHQtdC60YDQtdGCLicn0J/RgNC+0LPRg9C70Y/QvdC60LAg0JTQvtCx0LXRgNC80LDQvdCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFRU0Fka3duM2l1NTRrUjNoeG5oM0hnMENfenBQLVpVL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0M2VcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCR0L7QvdC00LDRgNC10L3QutC+INCcLiwg0KHQu9GW0L3Rh9C10L3QutC+INCuLikgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LicnINCG0YLQsNC70ZbQudGB0YzQutCwINC/0ZbRgdC10L3RjNC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWlQtM3VDcnpiR0p0TWMwb0x3dGdKcVRvcno5akRZZXMvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JLQsNGI0YPRgNGW0L3QsCDQki4sINCE0LbQvtC90LrQvtCyINCQLikuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQky7QkdGU0LvQvtCyLicn0KPRgNCw0YHRltC80LAg0ZYg0KfQsNGA0ZbQstC90LAg0KfQtdGA0LXQv9Cw0YXQsCcnLCAyKdCeLiDQn9C+0LvRjNC+0LLQuNC5LiAnJ9Cf0L7QtNC+0YDQvtC2INCyINCQ0LvRjNC/0LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xakNodk1CckR3eXhLazNBSkVFQ1NCRTdZX2tDTFJoOHMvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JPQtdC80LHQuNGG0YzQutCwINCeLiwg0JrRg9C30LvQviDQmi4pLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QpdC+0LLQsNGA0LQuICcn0KfQsNGA0LvRjNGB0YLQvtC9JycsIDIp0JTQti4g0KjRltGA0ZbQvdCzLiAnJ9Ca0L7Qu9C40YHQutC+0LLQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0TE5WbGh1clpVZEh4NDRNY2hTNHFtMjUxZVMzOXJvUS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQlNC10YDRj9Cx0ZbQvdCwINChLiDRgtCwINCS0LDRgdC40LvRjNGU0LLQsCDQki4pLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QlNGW0LDQsdC10LvQu9GWLiDQodC+0L3QsNGC0LAg0YDQtSDQvNCw0LbQvtGALCAyKdCbLtCo0YPQutCw0LnQu9C+LiAnJ9CT0YPQvNC+0YDQtdGB0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5SlFCZmc3Y19Cb1FxWE1tQVlxTllRQ25ZdGF3WjlUby9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtGA0LjRiNGC0LDQu9C+0LLQuNGHINCcLiwg0JrRgNC40YjRgtCw0LvQvtCy0LjRhyDQhi4pIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JTQti7Qk9C10YDRiNCy0ZbQvS4gJydDbGFwIHlvdSBoYW5kJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU1BSmVCVm5mdEVkaGNpbzQ3bkRuVWdjakdHVHdLOENqL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0YDQuNGI0YLQsNC70L7QstC40Ycg0JwuLCDQmtGA0LjRiNGC0LDQu9C+0LLQuNGHINCGLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIifQmtC+0LvRj9C00LrQsCcnLCDQvtCx0YAuINCeLtCX0LDQutCw0LvRjtC20L3QvtGXXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwcXhZWlR2Rnlycmo2ZFRwVDU4VVVQU09QSE0taFp0ZS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQ0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQm9Cw0L3RgdGM0LrQuNC5INCELiwg0JvQsNC90YHRjNC60LAg0J4uKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlS7Qk9GA0ZbQsy4g0JDRgNGW0Y8g0ZbQtyDRgdGO0ZfRgtC4ICcn0Jcg0YfQsNGB0ZbQsiDQpdC+0LvRjNCx0LXRgNCz0LAnJywgMinQki7Qn9GC0YPRiNC60ZbQvS4gJyfQkdGA0LXQvdGE0L7RgNC00YHRjNC60LAg0LLRltC00YzQvNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMThPVXNDR1FCczNJaGxYNml0LXMzVHh1bzA3TTNOczBIL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCh0LjQvNC+0L3QtdC90LrQviDQoi4sINCk0LXQtNC40L3QsCDQkC4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQlNC2LtCT0LXRgNGI0LLRltC9Licn0JrQvtGF0LDQvdC40Lkg0LzRltC5Jyc7IDIpINCfLtCc0L7RgNGW0LAuICcn0JzQsNC90YPQtdGCJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWhWZWtoOF81TU9VSkRnSnRYSThpNEdCZFJRd0NBZWt0L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCh0LrQvtC/0LXRhtGMINCQLiwg0JzRg9GA0LfQsNC6INCuLikuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIu0J7RgdGC0LXQvS4nJ9Ci0LDQvdC10YbRjCDQu9GP0LvRjNC+0LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRUZ6eWlqdXdBRk5qOHYtVGxyYWlJX1BrdUhHcVg5NEUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KHQutC+0L/QtdGG0Ywg0JAuINCc0YPRgNC30LDQuiDQri4pIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCW0YPQu9GM0ZTQstCwLicn0J/RgNC+0LPRg9C70Y/QvdC60LAg0Lcg0YLQsNGC0L7QvCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWWnIyVi1IdjhNSUY4S1dnWkdmSkF5dUVFN21hcVdvcC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQ4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQotGA0L7RhtC10L3QutC+INCQLiwg0K/QutGD0L3RltC90LAg0J4u0JIuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QnC7QktC10LHQtdGALiDQodC+0L3QsNGC0LAg0LTQviDQvNCw0LbQvtGALCDQhiDRhy47IDIp0JAu0JrQvtC80LvRltC60L7QstCwLiAnJ9Ch0L/QvtCz0LDQtCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhWU5COGpIMEp5NFNQM3VmQWNlUS1tSjI5bFByX3JUdy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQ5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQpNGW0LvRltC/0L7QsiDQhi4sINCc0LDRgNGH0LXQvdC60L4g0JsuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuJyfQltCw0YDRgicnIDIp0Jwu0JvQtdC+0L3RgtC+0LLQuNGHLicn0KnQtdC00YDQuNC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXBoV1R5SUpiN0Z6cU5RRmVVcUU1eDFsWUZaNTlXdWd6L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCl0LXQu9C80LDQvSDQki4sINCl0LXQu9C80LDQvSDQki4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCjLtCT0ZbQu9C70L7Qui4nJ9Cd0LAg0L/QsNGA0LjQt9GM0LrQvtC80YMg0LHRg9C70YzQstCw0YDRlicnLCAyKdCdLtCh0LzRltGA0L3QvtCy0LAuJyfQkdGA0LDQt9C40LvRjNGB0YzQutC40Lkg0LrQsNGA0L3QsNCy0LDQuycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3YzMyQ0kwbV9rTkpYWmtySGtYUWU1MlRkZkhXUGw2Ty9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC60LLQsNGA0YLQtdGCICcnU2ZvcnphbmRvJycuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0J4u0KbQuNCz0LDQvdC60L7Qsi4gJyfQotGD0YHRgtC10L8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVVFrWjExVUdWbHFoUjNzcmFkcGJvUXBLOUVFeWFpcW8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0Y1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQutCy0LDRgNGC0LXRgiAnJ1Nmb3J6YW5kbycnLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCT0YDRltCzLicn0JIg0L/QtdGH0LXRgNGWINCz0ZbRgNGB0YzQutC+0LPQviDQutC+0YDQvtC70Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU1RMbnQ4SVU1bmxZLUcxZHFmYkt1UmExQl9aOFRTa1kvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JLQuNGF0YDQuNGB0YIg0JwuLCDQpNGU0LTQvtGB0ZTRlNCyINCdLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0J/RgNC+0LrQvtGEJ9GU0LIuINCc0LDRgNGILCAyKdCSLtCb0Y7RgtC+0YHQu9Cw0LLRgdGM0LrQuNC5LiDQktCw0YDRltCw0YbRltGXINC90LAg0YLQtdC80YMg0J/QsNCz0LDQvdGW0L3RllwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbnpSSFhKS3RBYmR4N1B3YkI1ZDRYRkd4Qk5jdHBORWsvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JLRltGC0Y7QuiDQkiwg0JHQtdGA0LXQt9C+0LLRgdGM0LrQsCDQhC4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtCR0LDRhSAo0JLRltCy0LDQu9GM0LTRlikuINCa0L7QvdGG0LXRgNGCINC00LvRjyDQvtGA0LPQsNC90LAg0LvRjyDQvNGW0L3QvtGALCAyKdCQLtCfJ9GP0YbQvtC70LvQsC4gJyfQm9GW0LHQtdGA0YLQsNC90LPQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuZjAxRWY2T1ZPeUxBSlVVakJZeUlLTnMzTVplX1BGdi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQkdC+0YDQvtCy0LXRhtGMINCeLiwg0ZbQu9GO0YHRgtGA0LDRgtC+0YApXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS7QkdCw0YUuJyfQkNGA0ZbRjycnICgnJ9Ch0YLRgNCw0YHRgtGWINC30LAg0JzQsNGC0LLRltGU0LwnJylcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUgxYWtRVWRSN1FLUk80UDNoRFk2X3RadG1kU3JrMEoxL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCR0L7RgNC+0LLQtdGG0Ywg0J4uLNGW0LvRjtGB0YLRgNCw0YLQvtGAKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi7QntGA0YQuJyfQnizQpNC+0YDRgtGD0L3QvicnICgnJ9Ca0LDRgNC80ZbQvdCwINCR0YPRgNCw0L3QsCcnKVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOWtPSUJUZElLS1FaNm5YVmdQaVpIM1k4bXljV3B3QnkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQu9C40LzQtdC90LrQviDQnC4sINCU0ZbQvtGA0LTRltGU0LLQsCDQnC4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4gJyfQktC+0LrQsNC70ZbQtycnLCAyKdCULtCc0ZbQudC+Licn0JHRgNCw0LfQuNC70YzRlNGA0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdTgxZEFBdGxEb2ZxNHBueUR0WWctU3hHQjRqR0Izc0UvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQvtC30LDQuiDQhi4sINCi0LDRlNGALdCj0LvRjNGP0L3QvtCy0LAg0JouKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCJBLiAg0J8n0Y/RhtGG0L7Qu9CwLiAnJ9Cb0ZbQsdC10YDRgtCw0L3Qs9C+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXk2WXFGdEJQR01sWHpFUUw4dXUzQkw0VWtyTXplNGpiL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0L7Qt9Cw0Log0IYuINGC0LAg0KLQsNGU0YAt0KPQu9GM0Y/QvdC+0LLQsCDQmi4pLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQk9GA0ZbQsy4gJyfQndC+0YDQstC10LbRgdGM0LrQuNC5INGC0LDQvdC10YbRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUdGZpNG03UDFvdU5KRUhEWGlKbmE3WDNiZVFQenJmdS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC+0YHRgtC10YfQutC+INCQLiwg0JrQvtC90LTRgNCw0YLRjtC6INCcLiApLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCaLtCU0LXQsdGO0YHRgdGWLiAnJ9CjINGH0L7QstC90ZYnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaFJXekNMWElVVTZYcERXWjNFaXNJN1E1TlpIekRkaW8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQvtGB0YLQtdGH0LrQviDQkC4sINCa0L7QvdC00YDQsNGC0Y7QuiDQnC4pLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K4u0JLQtdGB0L3Rj9C6LiAnJ9Ca0LDRgNC70YHQvtC9JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUEzMVZyUjVkNWRYVDhrUVd0TnlHa3hmeTdiS0k1TURVL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCc0LDRhtGW0ZTQstGB0YzQsCDQnC4sINCf0LDQv9GW0ZTQstCwINCaLikuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QnNC10YLQvdC10YAuJyfQoNC+0YHRltC50YHRjNC60LjQuSDRhdC+0YDQvtCy0L7QtCcnLCAyKdCQLtCfJ9GP0YbRhtC+0LvQsC4nJ9CS0LXQu9C40LrQtSDRgtCw0L3Qs9C+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZBbmdzYXNHdUFzaG9EWnlnOWlkbGpCOHhvTUR2NHZDL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgICjQmtCw0YHRj9C90LXQvdC60L4g0J4u0JIuLCDQk9C+0YDQtNGW0ZTQvdC60L4g0IYu0J4uKSBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCQLtCR0LDQsdCw0LTQttCw0L3Rj9C9LiAnJ9Cd0L7QutGC0Y7RgNC9JycsIDIp0K4uINCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9CT0YPQvNC+0YDQuNGB0YLQuNGH0L3QuNC5INGC0LDQvdC10YbRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfU1hBRlFEd19CbTRZSy1xY3k2WHM0a0ZvVzRIM0RhSS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICcn0JXQu9C10LPRltGPJydcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCcLtCh0LrQvtGA0LjQui4gJyfQnNC10LvQvtC00ZbRjycnLCAyKdCbLtCa0LDRgNC/0LXQvdC60L4uJyfQktGW0L3QvtGH0L7QuiDRg9C70Y7QsdC70LXQvdC40YUg0LzQtdC70L7QtNGW0LknJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xY2tadzBIc3NpeUVkYlNTSEJxT3lhd3FTZnRBazF3VWovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JPRgNC40LPQvtGAJ9GU0LLQsCDQky7QkC4gLCDQr9C60YPQvdGW0L3QsCDQni7Qki4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLtCo0YPQsdC10YDRgi4nJ9CS0ZbQudGB0YzQutC+0LLQuNC5INC80LDRgNGIJycgMinQkC7QmtC+0LzQu9GW0LrQvtCy0LAuICcn0J3QsCDQvNCw0YHQutCw0YDQsNC00ZYnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVUNhSl9xWVVhcHlNLUhCaHJ1V2ItaDdJRnlTcWtfc1UvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQvtGB0LXQvdC60L4g0J4u0JIuLCDQmtCw0YHRg9C80L7QstCwINCeLtCULikuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLiDQptGE0LDRgdC80LDQvS4gJyfQm9GW0YDQuNGH0L3QuNC5INCy0LDQu9GM0YEnJywgMinQnC7QnNGW0L3QutC+0LIuICcn0KHRgtCw0YDQuNC5INGA0L7Rj9C70YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xekdPS3VueElvSGQzVWo1Rkh2ZFd5Ti1ydldGN242Vi0vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQutCy0LDRgNGC0LXRgiAgKNCS0LDRgdC10L3QutC+INChLiwg0JLQsNGB0LXQvdC60L4g0JwuLCDQpdCw0LLQsNC70LrQviDQoi4s0JHQuNGH0LrQvtCyJ9GP0Log0JouKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCS0ZbQstCw0LvRjNC00ZYuJyfQl9C40LzQsCcnOyAyKdCkLtCc0LXRgNC6J9GO0YDQsC4nJ9CR0L7Qs9C10LzQvdCwINGA0LDQv9GB0L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQjk2bkVDM3ZLWVJkOE9nVFhnUGlWVlg4VkItTVNTZFkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1Y1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQutCy0LDRgNGC0LXRgiAnJ0FMTEEgQlJFVkUnJy5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLtCh0YLRgNCw0LLRltC90YHRjNC60LjQuS7QpNGA0LDQs9C80LXQvdGCINGW0Lcg0LHQsNC70LXRgtGDICcn0J/QtdGC0YDRg9GI0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFiaWZXOE9CdjFFNjFxZDE4NEVhSmpzdk90clhyUnJrVi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDVkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC60LLQsNGA0YLQtdGCICcnQUxMQSBCUkVWRScnLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0JPRg9GA0LvRltGC0YIuJyfQktGW0LTQtdC90YHRjNC60LjQuSDQstCw0LvRjNGBJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVFqQnJLV1RrQ2JpUzlFajVrNHBIYkhSRHNOMkQxY2FNL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjCAnJ9CV0JrQodCf0KDQldCh0IbQrycnLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0J3QsNGD0LzQtdC90LrQvi4gMSknJ9Cn0LDRgdC4INCy0LXQu9C40LrQuNGFINGB0L/QvtC00ZbQstCw0L3RjCcnLCAyKdCQLtCfJ9GP0YbRhtC+0LvQsC4gJyfQm9GW0LHQtdGA0YLQsNC90LPQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpVWxZS3JJS3NKMWludUNxQU9TME1ZNExxR3JtY3Bfay9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDVmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INC60LLQsNGA0YLQtdGCICjQqdGD0LrRltC90LAg0J4uLNCh0LXRgNC00Y7QuiDQky4sINCo0LDQv9C+0LLQsNC7INCeLiwg0JzQsNC60YHQuNC80LXQvdC60L4g0JIuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jsu0JvQsNCy0ZbQvdGM0Y/Qui4nJ9CT0LDQu9C+0L8t0LzQsNGA0YgnJzsgMinQky7Qk9GD0YDQu9GW0YIuINCd0L7QutGC0Y7RgNC9XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJWWJOSUMyRXg2Tnh4TTh5bWJDdEwybXVQQVE0UmhNZy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDYwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INCw0L3RgdCw0LzQsdC70YwgKCDQodC80LjQuiDQmy7Qri4s0KjQtdC60LXQu9GMINCeLtCeLikuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JouINCT0YPQsNGB0YLQsNCy0ZbQvdC+LiAnJ9Cg0L7QvNCw0L3RgScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFkSEJ6bkRtcEUtMHZXeXJ5TWY4NlhDa0ZiOHNQX0hZXy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDYxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INCw0L3RgdCw0LzQsdC70YwgKNCh0LzQuNC6INCbLtCuLiwg0KjQtdC60LXQu9GMINCeLtCeLikuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4u0KbRhNCw0YHQvNCw0L0uJyfQodC90ZbQttC40L3QutC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlQVGUtSl9jUzZEVFNPNmlaRml4Z2I1ZzRaeHBhelJUL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH1cbl07XG5cbmxldCBlbnNlbWJsZXMgPSBbXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvUTQ3d0EwN2ZjdzhcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCQLiDQmtC+0LzQu9GW0LrQvtCy0LAuIMKr0KDQvtC6LdC00YDQsNC50LLCuyDQtyDRhtC40LrQu9GDIMKr0IbQvdGC0LXRgNCy0LDQu9GW0Y/CuzsgMi4g0JAuINCa0L7QvNC70ZbQutC+0LLQsC4gwqvQnNGW0L3Rj9C70LrQsC3Qv9C+0LLRgtC+0YDRj9C70LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQtNGD0LXRgiDRgyDRgdC60LvQsNC00ZYg0JDQvdGC0L7QvdC+0LLQvtGXINCfLiDRgtCwINCa0L7QvNC70ZbQutC+0LLQvtGXINCeLlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjU2MDY0NTc0NTE3NzI1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdHVRZ0Nfbi1kWHNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCfLiDQqNC+0LvRjNGGLdCcLiDQmtCw0L3QutC1LiDQpNCw0L3RgtCw0LfRltGPINC90LAg0YLQtdC80YMg0YPQutGA0LDRl9C90YHRjNC60L7RlyDQvdCw0YDQvtC00L3QvtGXINC/0ZbRgdC90ZYgwqvQktC10YDRhdC+0LLQuNC90LDCuzsgMi4g0JwuINCh0LrQvtGA0LjQui4g0J/QsNGA0LDRhNGA0LDQtyDQvdCwINGC0LXQvNGDINCbLiDQkdC10YLRhdC+0LLQtdC90LAgwqvQlNC+INCV0LvRltC30LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LTRg9C10YIg0YMg0YHQutC70LDQtNGWINCc0LDQu9GP0YDRh9GD0Log0IQuINGC0LAg0JzQvtGFINCdLlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjU2MDY0NTc0NjcwNjQxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvRVVSRzZBLTFjb29cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCkLiDQqNGD0LHQtdGA0YIuIMKr0J3RltC80LXRhtGM0LrQuNC5INGC0LDQvdC10YbRjMK7OyAyLiDQkC4g0JTQstC+0YDQttCw0LouIMKr0KHQu9C+0LJcXHUyMDE50Y/QvdGB0YzQutC40Lkg0YLQsNC90LXRhtGMwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INC00YPQtdGCINGDINGB0LrQu9Cw0LTRliDQr9Cz0L7QtNC60Lgg0J4uINGC0LAg0K/Qs9C+0LTQutC4INCgLlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjU2MDY0NTc0NzEyNDE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvSUdocG1VNEtwZ0VcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLiDQm9Cw0LLRltC90YzRj9C6LiDCq9Cc0LDRgNGILdCz0LDQu9C+0L8g0LTQu9GPINCy0L7RgdGM0LzQuCDRgNGD0Log0YLQsCDQvtC00LjQvdC+0LrQvtCz0L4g0YDQvtGP0LvRjsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQutCy0LDRgNGC0LXRgiDRgyDRgdC60LvQsNC00ZYg0JTRg9CxINCdLiwg0KLQutCw0YfQtdC90LrQviDQkC4sINCX0LDQu9C40LLQsNC00L3QvtCz0L4g0KAuLCDQnNC10L3RhtC10LvRjCDQkC5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1NjA2NDU3NDc1OTkwNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzVVRlZZc3pBcmZjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JzQsNC60LDRgNC+0LIuIMKr0KPRgNC+0YfQuNGB0YLQsCDQv9GA0LXQu9GO0LTRltGPwrssINC/0LXRgNC10LrQu9Cw0LQg0JwuINCT0L7RgtC70ZbQsdCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQutCy0LDRgNGC0LXRgiDRgyDRgdC60LvQsNC00ZYg0JTRg9CxINCdLiwg0KLQutCw0YfQtdC90LrQviDQkC4sINCX0LDQu9C40LLQsNC00L3QvtCz0L4g0KAuLCDQnNC10L3RhtC10LvRjCDQkC5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1NjA2NDU3NDc5ODAyMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzVpMTVBYTlwbGg4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KHQutC+0YDQuNC6LiDCq9Cc0LXQu9C+0LTRltGPwrssINGC0YDQsNC90YHQutGA0LjQv9GG0ZbRjyDQni4g0KjQtdCy0YfQtdC90LrQvi3QnNGW0YXQsNC70L7QstGB0YzQutC+XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQtNGD0LXRgiDRgyDRgdC60LvQsNC00ZYg0JPRgNC40LPQvtGAXFx1MjAxOdGU0LLQvtGXINCTLtCQIC7RgtCwINCv0LrRg9C90ZbQvdC+0Zcg0J4u0JIuXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNTYwNjQ1NzQ4Mjk3NzZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8xZGNtQzdGTTFnb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCa0LDQvdC60LUuIMKr0J/QvtC/0YPRgNGWINC3INC/0ZbRgdC10L3RjCDQstGW0LnRgdGM0LrQvtCy0L7Qs9C+INGH0LDRgdGDwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INC00YPQtdGCINGDINGB0LrQu9Cw0LTRliDQk9GA0LjQs9C+0YBcXHUyMDE50ZTQstC+0Zcg0JMu0JAgLtGC0LAg0K/QutGD0L3RltC90L7RlyDQni7Qki5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1NjA2NDU3NDg2MDI1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzBzcG9jRWpIemlNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KHQutC+0YDQuNC6LiDCq9Cf0YDQuNGU0LzQvdCwINC/0YDQvtCz0YPQu9GP0L3QutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INC00YPQtdGCIMKr0JXQutGB0L/RgNC10YHRltGPwrsg0YMg0YHQutC70LDQtNGWINCT0LDQvdGO0Log0IYuINGC0LAg0J/Qu9C+0YLQvdGW0LrQvtCy0L7RlyDQmy5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1NjA2NDU3NDg5NzgwNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9XG5dXG5cbmxldCBjb25jZXJ0bWFzdGVyc18yID0gW1xuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzgtYXFSV3N0ZkpzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnNGD0LcuINCGLiDQqNCw0LzQviwg0YHQuy4g0JQuINCb0YPRhtC10L3QutC+LiDCq9Ca0LjRlNCy0LUg0LzRltC5wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQuNC30LAg0ITQstCz0LXQvdGW0LksIDE0LjA5LjIwMDYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjUzNjI1NTNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9pdFpxdFhsRVBWb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JkuINCR0YDQsNC80YEuIMKr0KPQs9C+0YDRgdGM0LrQuNC5INGC0LDQvdC10YbRjMK7INC80ZYg0LzRltC90L7RgCAo0L/QtdGA0LXQutC70LDQtCDQtNC70Y8g0L3QsNGPKVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C40LfQsCDQhNCy0LPQtdC90ZbQuSwgMTQuMDkuMjAwNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIyMzY2NjEyNTQ1MjUyMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL082Sm1kZkYwMGFJXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0ITQu9GM0YfQsNC90ZbQvdC+0LIuIMKr0J7QuSwg0LvRjtC70ZbCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC10LvRjNC90LjRh9GD0Log0JDQvdCw0YHRgtCw0YHRltGPLCAxOS4xMS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI1NTExMzY2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvNUdNYlh5SW1sUU1cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLtCE0LvRjNGH0LDQvdGW0L3QvtCyLsKr0KLQtdGA0LXQvNC+0LrCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC10LvRjNC90LjRh9GD0Log0JDQvdCw0YHRgtCw0YHRltGPLCAxOS4xMS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI1NTU4OTE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvaTA4WnZERWo1U01cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCgLiDQm9C+0LLQu9Cw0L3QtC4gwqsgU29uZyBmcm9tIGEgU2VjcmV0IEdhcmRlbsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0YPRgdGB0YMg0JPQsNC90L3QsCwgMjUuMTAuMjAwNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIyMzY2NjEyNTYxMjk1OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3JDOXF5RnRiXzVVXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0J3QuNC20LDQvdC60ZbQstGB0YzQutC40LkuINCa0L7Qu9C+0LzQuNC50LrQsCDRgdC+0LvRjCDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0YPRgdGB0YMg0JPQsNC90L3QsCwgMjUuMTAuMjAwNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIyMzY2NjEyNTY1MzYyOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1RjNjFLck5pa3FzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQnC4g0JLQtdGA0LzQtdC90LjRhy4gwqvQp9C+0YDQvdC+0LHRgNC40LLRhtGWwrs7IDIuINCvLiDQkdCw0YDQvdC40YcuIMKr0JPRg9GG0YPQu9C60LAg0JrRgdC10L3Rj8K7ICjQv9C10YDQtdC60LvQsNC0INCQLiDQodC10LzQtdC90LXQvdC60L4pXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0YLQvtCy0LAg0JrQsNGC0LXRgNC40L3QsCwgMjAuMDQuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIyMzY2NjEyNTcwMzE1MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLy1sMTVuSGJLZjBJXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQo9C60YDQsNGX0L3RgdGM0LrQsCDQvdCw0YDQvtC00L3QsCDQv9GW0YHQvdGPINCyINC+0LHRgNC+0LHRhtGWINCQLiDQmtC+0YEt0JDQvdCw0YLQvtC70YzRgdGM0LrQvtCz0L4gwqvQp9C+0YLQuNGA0Lgg0LLQvtC70Lgg0L/QsNGB0YMg0Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkNC70LXQudC90ZbQutC+0LIg0JzQuNGF0LDQudC70L4sIDMwLjA2LjIwMDUg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjU3NDQ0MDJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9naHhPSGFFQmtQb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCb0ZbRgdGCLiDCq09oIHF1YW5kIGplIGRvcnPCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkNC70LXQudC90ZbQutC+0LIg0JzQuNGF0LDQudC70L4sIDMwLjA2LjIwMDUg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjU3OTk0NTJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9YUGRScFNMdlA0QVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JwuINCc0LDQvdCz0ZbQvdGWLiDCq0V4ZWN1aXZlwrs7IDIuINCU0LYuINCg0L7RgdGB0ZbQvdGWLiDQkNGA0ZbRjyDQkdC10YDRgtC4INC3INC+0L/QtdGA0LggwqvQodC10LLRltC70YzRgdGM0LrQuNC5INGG0LjRgNGD0LvRjNC90LjQusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCQ0LvQtdC60YHRltC50YfRg9C6INCS0LDQu9C10YDRltGPLCAxNC4wMy4yMDA0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI1ODQzMDc3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvVUJMWi1Md3QycDhcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLiDQk9Cw0LnQtNC9LiDCq9Ch0LLRltGC0LvQuNC5INC/0L7Qs9C70Y/QtMK7OyAyLiDQnNGD0LcuINCeLiDQkdGW0LvQsNGI0LAsINGB0LsuINCSLiDQrtGF0LjQvNC+0LLQuNGH0LAuIMKr0JbRg9GA0LDQstC60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0YPRiNC60L4g0JDQvdCw0YHRgtCw0YHRltGPLCAxOC4wMS4yMDA2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI1OTAwNDI1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvRWk4MWZ0clJJcTBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCc0YPQty4g0JMuINCQ0LvRh9C10LLRgdGM0LrQvtCz0L4sINGB0LsuINClLiDQkNC70YfQtdCy0YHRjNC60L7Rly4gwqvQlNGD0YjQsCBcXHUyMDEzINGB0LUg0LrQvtC90LLQsNC70ZbRjyDQvdGW0LbQvdCwwrssINGC0LIuIDQsIOKEljQ7IDIuINCfLiDQnNCw0YHQutCw0L3RjNGXLiDQoNC+0LzQsNC90YEg0KHQsNC90YLRg9GG0YbQuCDQtyDQvtC/0LXRgNC4IMKr0KHRltC70YzRgdGM0LrQsCDRh9C10YHRgtGMwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0ITRgNC+0YjQtdC90LrQviDQhNCy0LAsIDE2LjExLjIwMDYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjU5NjY4NjZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9WS2tyMU9VV1hSMFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0J8uINCc0LDRgdC60LDQvdGM0ZcuINCg0L7QvNCw0L3RgSDQodCw0L3RgtGD0YbRhtC4ICDQtyDQvtC/0LXRgNC4IMKr0KHRltC70YzRgdGM0LrQsCDRh9C10YHRgtGMwrs7IDIuINCeLiDQkdGW0LvQsNGILiDCq9Cd0ZbQutC+0LzRgyDQvdC1INC60LDQttC4wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNGI0YLQtdC70Y/QvSDQntC70LXQutGB0LDQvdC00YDQsCwgMTEuMDIuMjAwNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIyMzY2NjEyNjAwOTIwMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1NmQnhQUUVIaDBnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCJZdWtpa28gSXNvbXVyYS4gwqtUaGUgc3RyZWV0IHdoZXJlIHRoZSB3aW5kIGxpdmVzwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTQtdC9INCQ0LkgKERlbmcgQWkpLCAyNi4wMS4xOTk30YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjYwNjI0NDFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC94cXY2Z0Q4dmlGY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiUWlhbiBMZWkuIMKrV2lzaMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LXQvSDQkNC5IChEZW5nIEFpKSwgMjYuMDEuMTk5N9GALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI2MDkzNDkwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvZUtuOFJ2RlVZcjBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLiDQodC+0L3QtdCy0LjRhtGM0LrQuNC5LiDQptC40LrQuyDQv9GW0YHQtdC90Ywg0L3QsCDQstGW0YDRiNGWINCGLtCk0YDQsNC90LrQsCDCq9CX0ZbQslxcdTIwMTnRj9C70LUg0LvQuNGB0YLRj8K7OiDCq9Cd0LXQv9C10YDQtdGF0ZbQtNC90LjQvCDQvNGD0YDQvtC8wrssIMKr0KLQstC+0Zcg0L7Rh9GWwrssIMKr0KXQvtGHINGC0Lgg0L3QtSDQsdGD0LTQtdGIINC60LLRltGC0LrQvtGOINGG0LLRltGB0YLQuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0L7Qu9GW0YnRg9C6INCa0LDRgtC10YDQuNC90LAsIDExLjAxLjE5OTgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjYxNTcxNTVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9qZ3U5M05rcjZpZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCS0LDQudC90LXQvS4g0KDQsNC/0YHQvtC00ZbRjyDQtNC70Y8g0YHQsNC60YHQvtGE0L7QvdGDINGWINGE0L7RgNGC0LXQv9GW0LDQvdC+LCDQhiwg0IbQhiwg0IbQhtCGINGH0LDRgdGC0LjQvdC4XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQslxcdTIwMTnRjtC6INCS0LvQsNGB0YLQsCwgMTYuMDcuMjAwMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIyMzY2NjEyNjIwMTA0MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0dIT1VTaHoxejFZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JzQvtGG0LDRgNGCLiDQkNGA0ZbRjyDQkNGB0L/QsNC30ZbRlyDQtyDQvtC/0LXRgNC4IMKr0JzRltGC0YDRltC00LDRgsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQu9GC0LjQutC+0LLQsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTguMDQuMTk5OCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIyMzY2NjEyNjI0MjgyNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL09fb3V4bTdpZVJjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnNGD0LcuINCRLiDQpNGW0LvRjNGGLCDRgdC7LiDQhi4g0KTRgNCw0L3QutCwLiDCq9CvINC90LUg0YLQtdCx0LUg0LvRjtCx0LvRjsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQu9GC0LjQutC+0LLQsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTguMDQuMTk5OCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIyMzY2NjEyNjI2NzYxNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1l1MjBJbEloeE1nXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLtCuLiDQnNC10LnRgtGD0YEuINCQ0YDRltGPINCQ0L3QvdC4INC3INC+0L/QtdGA0LggwqvQo9C60YDQsNC00LXQvdC1INGJ0LDRgdGC0Y/CuzsgMi7QnNGD0LcuINCSLiDQkdCw0YDQstGW0L3RgdGM0LrQvtCz0L4sINGB0LsuINCiLiDQqNC10LLRh9C10L3QutC+0LAuIMKr0J7QuSwg0LvRjtC70ZYsINC70Y7Qu9GWLCDQvNC+0Y8g0LTQuNGC0LjQvdC+wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNGB0Y7QuiDQrtC70ZbRjywgMTUuMDYuMjAwMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIyMzY2NjEyNjMwMjc1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0RyOWxnT1lvNXd3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQnC4g0KHQutC+0YDQuNC6LiDQldC70LXQs9GW0Y87IDIuINCVLiDQodC10LLQtdGA0L0uIMKr0J/QvtC70YzRgdGM0LrQuNC5INGC0LDQvdC10YbRjMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LjRgdC10LvRjNC+0LLQsCDQhtGA0LjQvdCwINCG0LPQvtGA0ZbQstC90LBcIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIyMzY2NjEyNjMyODA2OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3BSVjJfZ19jT1NzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQni4g0KHQsNC90LTQu9C10YAuIMKr0JzRgNGW0Y/CuzsgMi4g0KPQutGA0LDRl9C90YHRjNC60LAg0L3QsNGA0L7QtNC90LAg0L/RltGB0L3RjyDQsiDQvtCx0YDQvtCx0YbRliDQni4g0J3QsNC60L7QvdC10YfQvdC+0LPQviDCq9CH0YXQsNCyINC60L7Qt9Cw0Log0LfQsCDQlNGD0L3QsNC5wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J3RltC60ZbRgtGW0L3QsCDQhtGA0LjQvdCwINCg0YPRgdC70LDQvdGW0LLQvdCwXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjYzNjI0NjlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9SYk9haXZjNXUtY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCS0LDQudC90LXQvS4g0KDQsNC/0YHQvtC00ZbRjyDQtNC70Y8g0YHQsNC60YHQvtGE0L7QvdCwINGC0LAg0YTQvtGA0YLQtdC/0ZbQsNC90L4sINCGINGH0LDRgdGC0LjQvdCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzQuNC6INCb0LDRgNC40YHQsCDQrtGA0ZbRl9Cy0L3QsFwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI2NDI3MjU2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvbEdQWm5NNUNoYllcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCfLiDQmtGA0LXRgdGC0L7QvS4g0KHQvtC90LDRgtCwINC00LvRjyDRgdCw0LrRgdC+0YTQvtC90LAg0Lcg0YTQvtGA0YLQtdC/0ZbQsNC90L4sINCG0IYg0YfQsNGB0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNC40Log0JvQsNGA0LjRgdCwINCu0YDRltGX0LLQvdCwXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjY1MzUxODlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9SbU5UampwcEk4azdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCaLtCcLiDQktC10LHQtdGALiDQmtC+0L3RhtC10YDRgiDihJYyINC00LvRjyDQutC70LDRgNC90LXRgtCwINC3INC+0YDQutC10YHRgtGA0L7QvCDQvNGWINCx0LXQvNC+0LvRjCDQvNCw0LbQvtGALCDRgtCyLiA3NCwg0IYg0YfQsNGB0YLQuNC90LA7IDIuINCRLiDQmtC+0LLQsNGHLiDCq0ljaCBoZWdydXNzZSBTaWUsIEhlZXIgSm9oYW5uIFN0cmF1c3PCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdC10YLRjtCz0LAg0JDQvdC00YDRltC5INCh0YLQsNC90ZbRgdC70LDQstC+0LLQuNGHXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjY2MDMxNDNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9WTzQ4dW96empOWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCf0YPQu9C10L3Qui4g0KHQvtC90LDRgtCwINC00LvRjyDRhNC70LXQudGC0Lgg0Lkg0YTQvtGA0YLQtdC/0ZbQsNC90L4sINCG0IYg0YfQsNGB0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQvtC80YfRg9C6INCQ0L3QvdCwINCS0ZbQutGC0L7RgNGW0LLQvdCwXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjY2MzAwOTRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC84b3ItSlZqWnlzTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCR0L7Qt9C30LAuIMKr0JDQs9GA0LXRgdGC0LjQtMK7INC00LvRjyDRhNC70LXQudGC0Lgg0Lkg0YTQvtGA0YLQtdC/0ZbQsNC90L5cIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQvtC80YfRg9C6INCQ0L3QvdCwINCS0ZbQutGC0L7RgNGW0LLQvdCwXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjY2NTU4MTZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfVxuXVxuXG5sZXQgZm9ydGVwaWFub1NvbG8gPSBbXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9WSHRZdjZYbzI4RVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCU0LDQvNC60L7QvNCxLiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwg0IYg0YfQsNGB0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQsNGI0LjRgNC10L3QutC+INCU0ZbQsNC90LAsIDEyLjEwLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDA1MjY4ODJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2k2M2JYSHlLV29BXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KjQtdC90YLRjtGA0LogKNCi0LXRgNC10YnRg9C6KS4gwqvQnNC10L3Rg9C10YIg0LPRgNCw0YbRltC50L3QvtGXINCx0LDQu9C10YDQuNC90LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQktCw0YjQuNGA0LXQvdC60L4g0JTRltCw0L3QsCwgMTIuMTAuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MDYxMDQ3M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvNkVkUzJHMFZIY2dcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQkdCw0YUuINCc0LXQvdGD0LXRgiDRgdC+0LvRjCDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7QstC6INCQ0YDRgtGD0YAsIDIwLjEwLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDA2NzIxMzRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0xGUzVyamxGZjNRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JbQtdGA0LHRltC9LiDCq9Cj0LrRgNCw0ZfQvdGB0YzQutC40Lkg0YLQsNC90LXRhtGMwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQvtCy0Log0JDRgNGC0YPRgCwgMjAuMTAuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MDcyMDE1N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvcVR4bnpRcUZSWllcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQkdCw0YUuIMKr0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPwrsg0YHQvtC70Ywg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQltC40YLQsNGA0Y7QuiDQmtGW0YDQsCwgMTAuMDkuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MDc4MjIzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvY1JiczlETy1NNThcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLiDQpdGD0YLQvtGA0Y/QvdGB0YzQutC40LkuIMKr0JLQvtCz0L3RltCy0L7Rh9C60LAt0YHRgtGA0LjQsdGD0L3RltCy0L7Rh9C60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQltC40YLQsNGA0Y7QuiDQmtGW0YDQsCwgMTAuMDkuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MDg5MDM2OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvYW5vaGVxUXdfVm9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQqNGD0LrQsNC50LvQvi4gwqvQm9C10LHRltC00YzCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC40YHQtdC70YzQvtCy0LAg0ITQu9C40LfQsNCy0LXRgtCwLCAxMS4wMS4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQwOTMzNTY2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9XblpZNm45Q25fNFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCT0LXQtNGW0LrQtS4g0JXRgtGO0LQg0LTQviDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LjRgdC10LvRjNC+0LLQsCDQhNC70LjQt9Cw0LLQtdGC0LAsIDExLjAxLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDA5NzUzMjZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzBpTW9hZTJqYXBvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS4g0JzQsNC50LrQsNC/0LDRgC4gwqvQkiDQutGD0LfQvdGWwrs7INCRLiDQpNGA0LXQtC4gwqvQotCw0L3QtdGG0Ywg0LXQu9GM0YTRltCywrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRgNCw0LLRh9GD0Log0JzRltC70LDQvdCwLCAwOS4wMS4yMDE1INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQxMDM0MDM5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9SVXhaSTRpOUtnY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8uINCX0LDRhdCw0YDQvtCyLiDCq9Ca0LDRgNGD0YHQtdC70YzCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQm9GW0L/QutCw0L0g0JDQu9GW0L3QsCwgMTAuMTAuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTA3OTI2OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvQ1d0OUNKSmxqZjRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCRLiDQpNGW0LvRjNGGLiDCq9CU0YDQtdCy0L3RjyDQutCw0LfQutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvRltC/0LrQsNC9INCQ0LvRltC90LAsIDEwLjEwLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDExMzc5MDZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2wyQnVqQ000eWRrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQry4g0JHQvtCx0LDQu9GW0LouIMKr0JbRg9GA0LDQstC70LjQvdCwINC/0ZbRgdC90Y/Cuzsg0JIuINCR0LDRgNCy0ZbQvdGB0YzQutC40LkuIMKr0KHQvtC90LXRh9C60L7Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQm9GP0YjQuNC6INCQ0L3QvdCwLCAxNi4wNi4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQxMjA2ODI5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9PYUFkMEhPQUV0WVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEuINCR0LDRhS4gwqvQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y/CuyDQtNC+INC80ZbQvdC+0YA7INChLiDQkdC+0YDRgtC60LXQstC40YcuIMKr0KMg0YHQutC70LXQv9GW0L3QvdGWwrs7INCaLiDQp9C10YDQvdGWLiDQldGC0Y7QtCDRgNC1INC80LDQttC+0YAsINGC0LIuIDM5OVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0YDRg9GJ0LDQuiDQktC10YDQvtC90ZbQutCwLCAyMi4wNy4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQxMjkzMDY5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9JdGE1eTl5YlUyOFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNGC0Y7QuiDQkNGA0YHQtdC9LCAyNy4wNi4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQxMzYwNzcyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9zSnYzUFo4UnRTOFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCa0L7RgdC10L3QutC+LiDQodC60LXRgNGG0LjQvdC+XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LjRgtGO0Log0JDRgNGB0LXQvSwgMjcuMDYuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTQ1Mjg4NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQveFBKdlVzSGJ0a1lcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQktC10YDQsdC40YbRjNC60LjQuSwg0LDRgNCw0L3Qti4g0J4uINCo0LDQstCw0YDQtNCw0LrQsC4gwqvQk9GW0LzQvSDQo9C60YDQsNGX0L3QuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0LfRltC90LrQvtCy0YHRjNC60LAg0JLRltC60YLQvtGA0ZbRjywgMjIuMDcuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTUyMDIxNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvVUE4YXVHUUJnNlFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4gwqvQqNCw0YDQvNCw0L3QutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qt9GW0L3QutC+0LLRgdGM0LrQsCDQktGW0LrRgtC+0YDRltGPLCAyMi4wNy4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQxNTY3MTQ4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9tQXVjUEk3Vm1IMFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JouINCg0LXQudC90LXQutC1LiDQodC+0L3QsNGC0LjQvdCwINGB0L7Qu9GMINC80LDQttC+0YAsINCGINGH0LDRgdGC0LjQvdCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0YHQuNC60LAg0KDQvtC80LDQvSwgMjUuMDYuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTYwNzM0NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMWFHN1h5bGR6LUVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCj0LrRgNCw0ZfQvdGB0YzQutCwINC90LDRgNC+0LTQvdCwINC/0ZbRgdC90Y8g0LIg0L7QsdGA0L7QsdGG0ZYg0JMuINCR0LXQt1xcdTIwMTnRj9C30LjRh9C90L7Qs9C+IMKr0IfRhdCw0LIg0LrQvtC30LDQuiDQvdCwINCy0ZbQudC90L7QvdGM0LrRg8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0YHQuNC60LAg0KDQvtC80LDQvSwgMjUuMDYuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTY0ODk1NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvX1dkR2ZTSW15RjRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCuLiDQl9GD0LHQsNC5IMKr0JHQsNCx0YPRgdGPINCv0LPRg9GB0Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntGB0YLQsNC/0YfRg9C6INCa0LDRgtC10YDQuNC90LAsIDExLjA4LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDE3MzA3MDBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL00wbnhxaVhkZnpvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JPRltC70LvQvtC6LiDQodCw0YDQsNCx0LDQvdC00LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7RgdGC0LDQv9GH0YPQuiDQmtCw0YLQtdGA0LjQvdCwLCAxMS4wOC4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQxNzk4MDkwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9NUzNqSXBvSUZZNFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCg0L7Rg9C70ZYuIMKr0JrQuNGC0LDQudGB0YzQutC40Lkg0YXQu9C+0L/Rh9C40LrCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0YDRhdC+0LzQtdC90LrQviDQhNCy0LPQtdC90ZbRjywgMDguMDQuMjAxNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTg0MTM2MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMG41eXl6MEY5a2dcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQqNC40YLRgtC1LiDCq9Cd0LAg0YHQutC10LnRgtCx0L7RgNC00ZbCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0YDRhdC+0LzQtdC90LrQviDQhNCy0LPQtdC90ZbRjywgMDguMDQuMjAxNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTg4NzEzMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTlgyVmFmU3dIU0FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCfLiDQl9Cw0YXQsNGA0L7Qsi4gwqvQotCw0L3QtdGG0Ywg0LzQsNC70LXQvdGM0LrQuNGFINC30ZbRgNC+0YfQvtC6wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RltGB0L7RhtGM0LrQsCDQodC+0LvQvtC80ZbRjywgMjkuMDMuMjAxNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTkyNjE0MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvanhfb3pZc0w1RVFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLiDQhtC+0YDQtNCw0L0uIMKr0J/QvtC70Y7QstCw0L3QvdGPINC90LAg0LzQtdGC0LXQu9C40LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0ZbRgdC+0YbRjNC60LAg0KHQvtC70L7QvNGW0Y8sIDI5LjAzLjIwMTYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDE5NjkwMjVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3RPZVFULVVJS21BXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KjQtdC90YLRjtGA0LogKNCi0LXRgNC10YnRg9C6KS4gwqvQk9GA0LDQudC70LjQstC1INC30LDQudGH0LXQvdGP0YLQutC+wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RgNC40LzQsNC6INCu0LvRltGPLCAwMi4wMy4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyMDAzNjM3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9sTjRadjQ4d1BuWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCT0ZbQu9C70L7Qui4gwqtEcmlmdGluZyBjbG91ZHPCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GA0LjQvNCw0Log0K7Qu9GW0Y8sIDAyLjAzLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDIwMzM0NTBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3VMUTBZc3RfVDRZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC4g0JDQvdC00YDQtS4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALCDQhiDRh9Cw0YHRgtC40L3QsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LTQvtCy0L3RltC6INCV0YHRhNGW0YAsIDI1LjA2LjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDIwNzUxNDJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3ZhWE9qNzRHakpNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JXQutGI0YLQtdC50L0uIMKr0JrQsNC/0YDQuNC3INCz0L3QvtC80ZbQssK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQtNC+0LLQvdGW0Log0JXRgdGE0ZbRgCwgMjUuMDYuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjExMjgyNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMVJLNXZ5TnRMZXdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCgLiDQqNGD0LzQsNC9LiDCq9Cf0LXRgNGI0LAg0LLRgtGA0LDRgtCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNC00L7QstC90ZbQuiDQldGB0YTRltGALCAyNS4wNi4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyMTcyMjMzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9CSUlvTW9Ham1DUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K8uINCR0L7QsdCw0LvRltC6LiDCq9Ci0LDQutC40Lkg0YfRg9C00L7QstC40Lkg0LLQtdGH0ZbRgMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LXQvNC10L3Rh9GD0Log0JLQtdGA0L7QvdGW0LrQsCwzMC4xMS4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyMjI3ODA1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9HUVpHRlI3NUZsWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCU0LDQvNC60L7QvNCxLiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwg0IbQhizQhtCG0IYg0YfQsNGB0YLQuNC90LhcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQtdC80LXQvdGH0YPQuiDQktC10YDQvtC90ZbQutCwLDMwLjExLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDIyNzEyNzNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9ka09DaENkTm1DUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCf0L7Qu9GP0L3RgdGM0LrQuNC5LiDCq9Ca0LLRltGC0LXQvdGMLiDQktGW0YLQtdGA0LXRhtGMINC/0L7QstGW0Y/QssK7INC3INGG0LjQutC70YMgwqvQn9C+0YDQuCDRgNC+0LrRgy4gMTIg0L9cXHUyMDE50ZTRgSDQtNC70Y8g0YTQvtGA0YLQtdC/0ZbQsNC90L4g0LIg0LTQttCw0LfQvtCy0LjRhSDRgtC+0L3QsNGFwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQkNC70ZbRgdCwLCAxMi4wMS4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyMzU2MDc3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvVUt3d1M5c2lMNDBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQp9C10YDQvdGWLiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCQ0LvRltGB0LAsIDEyLjAxLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDI0MTkyMzFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzM2bFd3dk5YbkNrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmy4g0KjRg9C60LDQudC70L4uINCf0YDQtdC70Y7QtNGW0Y8g0LTQviDQvNCw0LbQvtGAOyDQmy4g0JHQtdGC0YXQvtCy0LXQvS4gMi4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALCDQhiDRh9Cw0YHRgtC40L3QsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotC10L/Qu9C40YbRjNC60LAg0JfQu9Cw0YLQsCwgMDUuMDQuMjAxNSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjQ3NTkyMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvUkpmWEpZakIzc3NcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCGLiDQmtGD0LvQsNGDLiDQodC+0L3QsNGC0LjQvdCwINGB0L7Qu9GMINC80LDQttC+0YAsINCGINGH0LDRgdGC0LjQvdCwOyAyLiDQki4g0JPRltC70LvQvtC6LiDCq9Ca0L7Qu9GW0LHRgNGWwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQutCw0YfQtdC90LrQviDQlNGW0LDQvdCwLCAyMC4wOC4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyNTI5MjI2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9TREEzNk5RbW9DNFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JwuINCo0LXQvdGC0Y7RgNC6ICjQotC10YDQtdGJ0YPQuikuIMKr0JzQsNC70LXQvdGM0LrQsCDRgdC10YDQtdC90LDQtNCwwrs7IDIuINCcLiDQldC60YjRgtCw0LnQvS4gwqvQmtCw0L/RgNC40Lcg0LPQvdC+0LzRltCywrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLRg9GA0LjQuiDQkNC90L3QsCwgMDcuMTEuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjU3MzAwOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvOXpCaWljbWFJTzBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQsNC90LXRhtGMOyAyLiDQpC4g0KjRg9Cx0LXRgNGCLiDQodC60LXRgNGG0L4g0YHRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQo9C00L7QtCDQlNCw0YBcXHUyMDE50Y8sIDAzLjAxLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDI2MTgzNTZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2padXNtSllzZGtRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQo9C60YDQsNGX0L3RgdGM0LrQsCDQvdCw0YDQvtC00L3QsCDQv9GW0YHQvdGPIMKr0J3QsNC0INGA0ZbRh9C60L7RjiDQsdC10YDQtdC20LrQvtC8wrssINC/0LXRgNC10LrQu9Cw0LQgINCGLiDQkdC10YDQutC+0LLQuNGH0LAg0LfQsCDQvtCx0YDQvtCx0LrQvtGOINCcLiDQm9C10L7QvdGC0L7QstC40YfQsDsgMi4g0J7QsdGALiDQkS4g0KjQuNC/0YLRg9GA0LAuINCa0L7Qu9C+0LzQuNC50LrQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpdCw0LvQsNC80LXQudC00LAg0JvRg9C6XFx1MjAxOdGP0L0sIDA5LjA3LjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDI2NjkyODRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3B3dEdiRkxaNjlnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQhi4g0JHQtdGA0LrQvtCy0LjRhy4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINGE0L7RgNGC0LXQv9GW0LDQvdC+IOKEljIsINCG0IYg0YfQsNGB0YLQuNC90LA7IDIuINCbLiDQhtCy0LDQvdGO0YjQuNC90LAuIMKr0JrQsNGA0LDQvNC10LvRjMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcIjI0LlxcdNCl0L7QvFxcdTIwMTnRj9C6INCS0LDRgNCy0LDRgNCwLDE4LjAzLjIwMTYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDI3MTk1NzBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0lRR1g2VmRpSzdzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQntCx0YDQvtCx0LrQsCDQkS4g0KjQuNC/0YLRg9GA0LAuINCa0L7Qu9C+0LzQuNC50LrQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQp9GD0LvQutGW0L3QsCDQndCw0LTRltGPLCAxNy4wNS4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyNzY0MjU3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC93dVRsMmVEamVXd1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JouINCS0ZbQu9GC0L7QvS4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfRg9C70LrRltC90LAg0J3QsNC00ZbRjywgMTcuMDUuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0Mjc5NjkwOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvRlQxdFpkUDJWYmNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQkdGW0LvQsNGH0LXQvdC60L4uINCV0LrRgdC/0YDQvtC80YIg0YTQsCDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LDQvNC40L3QsCDQnNCw0YDQs9Cw0YDQuNGC0LAsIDA4LjAxLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDI4MzU0OTJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2h3LWNBdlQ5SEJBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQny4g0JfQsNGF0LDRgNC+0LLQsC4gwqvQltCw0YDRgi3RgdGD0LLQtdC90ZbRgMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LDQvNC40L3QsCDQnNCw0YDQs9Cw0YDQuNGC0LAsIDA4LjAxLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDI4NzE0OTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1Y3eXRIbXUzcENjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLiDQnNC10L3Rg9C10YIg0YHQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQqNC/0LDQuiDQlNC10L3QuNGBLCAyNi4wOS4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyOTEyMTQ0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9Tdm9XUWRrY0ZNTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4gwqvQmtC+0LfQsNC6wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQv9Cw0Log0JTQtdC90LjRgSwgMjYuMDkuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0Mjk1MTI4NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvdXRKYV9BN0dQdG9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQqNGW0YLRgtC1LiDQldGC0Y7QtCDQtNC+INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQv9Cw0Log0JTQtdC90LjRgSwgMjYuMDkuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0Mjk5NzUxNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTFRZY044d0V6alFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQk9C10LTRltC60LUuINCV0YLRjtC0INC00L4g0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQrtC30LLQsNC6INCE0LLQsCwgMTQuMDYuMjAxNSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzAzNDI5MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZXJRbVB5NkdveFFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLiDQmtC+0YDQtdC90LXQstGB0YzQutCwLiDCq9CU0L7RidC40LrCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQrtC30LLQsNC6INCE0LLQsCwgMTQuMDYuMjAxNSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzA3MDM1MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvRVVJRFdRaUtwY1lcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQktGW0LvRgtC+0L0uINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCv0LrQuNC80YfRg9C6INCa0LDRgNC+0LvRltC90LAsIDE1LjEyLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDMxMjczNzNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2FUdFc1QkNXWHg4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0KjQuNGC0YLQtS4g0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCv0LrQuNC80YfRg9C6INCa0LDRgNC+0LvRltC90LAsIDE1LjEyLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDMxNjQxNzRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0pqV2c5VlZvQWpnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlNC2LiDQkdCw0YHRgtGM0ZTQvS4gwqvQkdC00LbQvtC70LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQr9C60LjQvNGH0YPQuiDQmtCw0YDQvtC70ZbQvdCwLCAxNS4xMi4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzMjA2NTMxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC85YUdlRlZvYzB6WVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JQuINCn0ZbQvNCw0YDQvtC30LAuINCh0L7QvdCw0YLQsCDihJYxNSwgMiDQt9C+0YjQuNGCXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCQ0LPRgNCw0YLRltC90LAg0KHRgtCw0L3RltGB0LvQsNCyLCAyNC4wOC4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzMjQ5OTg2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9OVzRRM2h3a2RDWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCh0LrQvtGA0LjQui4gwqvQltCw0YDRgtGW0LLQu9C40LLQsCDQv1xcdTIwMTnRlNGB0LDCuyDQtyDRhtC40LrQu9GDIMKr0Jcg0LTQuNGC0Y/Rh9C+0LPQviDQsNC70YzQsdC+0LzRg8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCQ0LPRgNCw0YLRltC90LAg0KHRgtCw0L3RltGB0LvQsNCyLCAyNC4wOC4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzMzA4Njk4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9LU2lzWlR5V1Y0Y1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JEuINCk0ZbQu9GM0YYuIMKr0JvRltGA0LjRh9C90LjQuSDQv9GA0LXQu9GO0LTCuzsgMi4g0K4uINCo0LDQvNC+LiDQotC+0LrQsNGC0LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JDRgNGC0YzQvtC80L7QstCwINCU0LDRgFxcdTIwMTnRjywgMjYuMDYuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzM0OTQ4MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvbXBFTWN4TDlnWVVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLtChLiDQkdCw0YUuINCQ0YDRltGPINC3IMKr0KTRgNCw0L3RhtGD0LfRjNC60L7RlyDRgdGO0ZfRgtC4wrsg0LTQviDQvNGW0L3QvtGAOyAyLiDQkC4g0JrQvtC70L7QvNGW0ZTRhtGMLiDCq9CT0YDQsC3QstC10YHQvdGP0L3QutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQsNC60LDRlNCy0LjRhyDQotC40LzQvtGE0ZbQuSwgMDEuMDEuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzM5NDQ4MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvLUlLaVpxTHpkQnNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCdLiDQndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4g0JrQvtC70L7QvNC40LnQutCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LDRidGW0Lkg0JLRltC60YLQvtGA0ZbRjywgMTEuMDYuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzQzODEyOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvUVdjazNONWY4V01cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQkdGO0YDQs9C80Y7Qu9C70LXRgC4g0JXRgtGO0LRcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQsNGJ0ZbQuSDQktGW0LrRgtC+0YDRltGPLCAxMS4wNi4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzNDY5OTM1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvVnlsSVpvSzhoTDRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCfLiDQp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiDCq9Cl0LLQvtGA0L7QsdCwINC70Y/Qu9GM0LrQuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LXQt9GB0LzQvtC70YzQvdCwINCX0L7RgNGP0L3QsCwgMjIuMTAuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzUwMzU3MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3R4bTJKQjlDaFVnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JzRltGU0YAuIMKrRG93bnJpZ2h0IEhhcHB5IFJhZ8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LXQt9GB0LzQvtC70YzQvdCwINCX0L7RgNGP0L3QsCwgMjIuMTAuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzU0NDY5NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvQ3NhQkV0SVZNWndcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQk9C10YDQsNGB0LjQvNC10L3QutC+LiDCq9Cc0L7RgNC1wrs7IDIuINCdLiDQotC+0YDQvtC/0L7QstCwLiDQotC+0LrQsNGC0LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQtdGA0LXQt9GB0YzQutCwINCb0Y7QsdC+0LIsIDI1LjEwLjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDM1OTEyODJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3ZoZWNycnlTRzdVXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQri4g0KnRg9GA0L7QstGB0YzQutC40LkuINCG0L3QstC10L3RhtGW0Y9cIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQvtC90LTQsNGA0YfRg9C6INCc0LjRgNC+0YHQu9Cw0LLQsCwgMTguMDQuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzYzMTc1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvc1FQTWtUbmJNMWdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCWLiDQmtC+0LvQvtC00YPQsS4g0JXRgtGO0LQt0LrQsNGA0YLQuNC90LrQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdC+0L3QtNCw0YDRh9GD0Log0JzQuNGA0L7RgdC70LDQstCwLCAxOC4wNC4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzNjgwNjM5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8xUU9nTUx5NHpqQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCi0LjQvNC+0YjQtdC90LrQvi4g0JXQu9C10LPRltGPXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7Qu9C+0YnRg9C6INCV0LzRltC70ZbRjywgMTkuMDYuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzcyMjI4MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvVmVVeF9iQklBQ0VcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCiLiDQn9C10YLRgNC40L3QtdC90LrQviwg0L7QsdGA0L7QsdC60LAg0JwuINCo0LXQvdGC0Y7RgNC6LiDCq9Cj0LrRgNCw0ZfQvdCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQvtC70L7RidGD0Log0JXQvNGW0LvRltGPLCAxOS4wNi4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzNzY0ODMzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9hOHB3T2hTcHVzc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0K4uINCp0YPRgNC+0LLRgdGM0LrQuNC5LiDQk9C+0L/QsNC6OyAyLiDQnC4g0KjQtdC90YLRjtGA0LogKNCi0LXRgNC10YnRg9C6KS4g0JHQsNC70LDQtNCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LDQstGA0LjQu9GO0Log0KHQvtGE0ZbRjywgMjkuMDYuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzgxMDgyMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZ1JoQTZiQ0ZsYlFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCbLiDQqNGD0LrQsNC50LvQviAo0KLQtdGA0LXRidGD0LopLiDQn9GA0LXQu9GO0LTRltGPOyAyLiDQnC4g0KjQtdC90YLRjtGA0LogKNCi0LXRgNC10YnRg9C6KS4gwqvQotCw0L3QtdGG0Ywg0LrRg9C70YzQsdCw0LHQvtC6wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQsNC70LDQvSDQhtGA0LjQvdCwLCAxNy4wNS4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzODU0MjcxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9TeXNHdnVjLUFJb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4gwqvQnNGA0ZbRj8K7OyAyLiDQlS4g0JPRgNGW0LMuIMKr0KHQtdGA0YbQtSDQv9C+0LXRgtCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQsNGB0YDQsNGC0L7QsiDQntC70LXQutGB0ZbQuSwgMjQuMDguMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0Mzg5MzgzMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvYUszamFCU0R0NDhcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLtChLiDQkdCw0YUuINCU0LLQvtCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0LTQviDQvNCw0LbQvtGAOyAyLiDQnC4g0JzQvtGI0LrQvtCy0YHRjNC60LjQuS4g0JXRgtGO0LQg0YHRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C10YDQsNGB0LjQvNC10L3QutC+INCe0LvQtdC60YHQsNC90LTRgNCwLCAwMS4wNi4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzOTM5MTU1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9sXzQ0SV83UlNUa1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JEuINCk0ZbQu9GM0YYuIMKr0JzQtdC70LDQvdGF0L7Qu9GW0LnQvdC40Lkg0LLQsNC70YzRgcK7OyAyLiDQmy4g0IbQstCw0L3QtdC90LrQvi4gwqvQlNC+0YnQuNC6wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQu9Cw0LTQutCwINCU0LDRgNC40L3QsCwgMzEuMDEuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0Mzk5MjQwMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvbE9UY0JpbXltZllcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLtChLiDQkdCw0YUuINCc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjyDRgNC1INC80ZbQvdC+0YA7IDIuINCkLiDQqNC+0L/QtdC9LiBDYW50YWJpbGVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQu9C+0LLQsNGG0YzQutCwINCf0L7Qu9GW0L3QsCwgMTUuMTIuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NDAzNzAyNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvT0U1eVFXdEZXcTRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuINCU0LLQvtCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0LvRjyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDQuNCz0L7RgNC10L3QutC+INCc0LDRgNGW0Y8sIDEzLjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDQwNzY1NTVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzB5NlVtbjJKN0h3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KLQtdGA0LXRidGD0LogKNCo0LXQvdGC0Y7RgNC6KS4gwqvQn9GA0L7QsdGD0LTQttC10L3QvdGPwrsg0Lcg0YbQuNC60LvRgyDCq0NvbnRyZWdvwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNC40LPQvtGA0LXQvdC60L4g0JzQsNGA0ZbRjywgMTMuMDkuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NDg0MzMxNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQveDh6NVdBd1FhWHNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCbLiDQkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LAg4oSWMjAsINGC0LIuNDksINCGINGH0LDRgdGC0LjQvdCwOyAyLiDQni4g0JHRltC70LDRiC4g0JHQsNGA0LrQsNGA0L7Qu9CwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LXQudC90LXQutCwINCh0L7Qu9C+0LzRltGPLCAxOS4wNS4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ0ODk4MzY1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9ZSlRSZk1scXdLRVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCa0YPQu9Cw0YMuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCDRgtCyLjU1LCDQhiDRh9Cw0YHRgtC40L3QsDsgMi4g0JsuINCS0L7Qu9C+0YjQuNC90LAuIMKr0JfQuNC80L7QstC40Lkg0YDQsNC90L7QusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LjRiNC70LXQstC40Lkg0ITQstCz0LXQvSwgMzAuMDEuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NDk0NjEyN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvYlE1a1Z1dXVhMndcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLiDQm9GO0LTQutC10LLQuNGHLiDCq9Ch0YLQsNGA0L7QstC40L3QvdCwINC/0ZbRgdC90Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQhNGA0LXQs9CwINCc0LDRgFxcdTIwMTnRj9C90LAsIDA0LjA4LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDQ5ODMzNDNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1JpbFFEa2d6MVhnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JzQvtGA0LTQsNGB0L7Qsi4gwqvQlNCw0LLQvdC40Lwg0LTQsNCy0L3QvsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCE0YDQtdCz0LAg0JzQsNGAXFx1MjAxOdGP0L3QsCwgMDQuMDguMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTAxNDkzOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvdkN1SDdyRnRBTGNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQhtCy0LDQvdC10L3QutC+LiDQpNCw0L3RgtCw0LfRltGPINC90LAg0YLQtdC80YMg0YPQutGA0LDRl9C90YHRjNC60L7RlyDQvdCw0YDQvtC00L3QvtGXINC/0ZbRgdC90ZYgwqvQk9Cw0L3QtNC30Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQltC10LPQsNC70L4g0J3QsNC00ZbRjywgMTYuMDkuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTA1MDExNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvbEZoT1RXR25RcHNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCRLiDQpNGW0LvRjNGGLiDCq9Ch0YPQvNC90LAg0L/RltGB0L3Rj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCW0LXQs9Cw0LvQviDQndCw0LTRltGPLCAxNi4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1MTk5MTM1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9VdGhJdi1Md1BwOFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K8uINCR0L7QsdCw0LvRltC6LiDCq9CR0YPRgNGF0LvQuNCy0LjQuSDQstC+0LTQvtGB0L/QsNC0wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjtC6INCS0ZbRgNGB0LDQstGW0Y8sIDA1LjA3LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDUyNDM4ODNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL01Bdm9RQWwxcTZZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0KnQtdGA0LHQsNC60L7Qsi4gwqvQldC70LXQs9GW0Y8g0LrQuNGX0LLRgdGM0LrQuNGFINC/0LDQs9C+0YDQsdGW0LLCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JLRltGA0YHQsNCy0ZbRjywgMDUuMDcuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTI4MDI2OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvM0tzTUZvWjJRekVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQk9GW0LvQu9C+0LouINCk0LvQsNC80LXQvdCz0L5cIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjtC6INCc0LDRgNGW0LDQvCwgMDIuMDQuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTMwNjMzN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvLU1lUEVwWGxmVlVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLiDQkdC10YDQutC+0LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPIOKEljUg0YDQtSDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQnNCw0YDRltCw0LwsIDAyLjA0LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDUzMzU3NzRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2VoTUk5VWZXeW5VXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0JrRg9C70LDRgy4g0KHQvtC90LDRgtC40L3QsCDihJYxXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDQvdGG0LXRgCDQkdC+0LPQtNCw0L3QsCwgMTAuMDEuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTM4MzAwOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZWdDZXZvSVp4ejRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQl9Cw0LLQsNC00YHRjNC60LjQuS4gwqvQqNGD0LzQutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNC90YbQtdGAINCR0L7Qs9C00LDQvdCwLCAxMC4wMS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1NDE2OTUzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9LcGZfTDQ3empYa1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JIuINCa0LLQsNGB0L3QtdCy0YHRjNC60LjQuS4gwqvQlNGD0LzQutCwwrs7IDIuINCVLiDQk9GA0ZbQsy4gwqvQn9C+0LXRgtC40YfQvdCwINC60LDRgNGC0LjQvdC60LDCuyDihJYxXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LvRltC80L7QstC40Ycg0ITQu9C40LfQsNCy0LXRgtCwLCAxMi4xMC4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1NDU3ODExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9RajhwaHNXYURrc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K4g0KnRg9GA0L7QstGB0YzQutC40LksINCR0LDRgNC60LDRgNC+0LvQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0LLQsNC70YzRh9GD0Log0JDQvdC90LAsIDE0LjExLjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDU0ODc0MzlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL091LU53VUZVMzUwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQky4g0KHQsNGB0YzQutC+LiDQoNC10LPRgtCw0LnQvFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0LLQsNC70YzRh9GD0Log0JDQvdC90LAsIDE0LjExLjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDU1MTM2OThcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1M2TllLT09kR01BXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQo9C60YDQsNGX0L3RgdGM0LrQsCDQvdCw0YDQvtC00L3QsCDQv9GW0YHQvdGWINCyINC+0LHRgNC+0LHRhtGWINChLiDQmtC70LjQvNC+0LLRgdGM0LrQvtCz0L4gwqvQh9GF0LDQsiAgICDQutC+0LfQsNC6INC30LAg0JTRg9C90LDQucK7OyAyLiDQoi4g0J/QtdGC0YDQuNC90LXQvdC60L4sINC+0LHRgNC+0LHQutCwINCcLiDQqNC10L3RgtGO0YDQui4gwqvQo9C60YDQsNGX0L3QsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7Qu9C10YHQvdC40YfQtdC90LrQviDQnNCw0YDQuiwgMjUuMDUuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTU1OTM5M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvVzNoSVVvS1k3WjRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQqNC10L3RgtGO0YDQuiAo0KLQtdGA0LXRidGD0LopLiDCq9CS0LDQu9GM0YEt0LrQsNC/0YDQuNGBwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtC90LTRgNCw0YLRjtC6INCS0LXRgNC+0L3RltC60LAsIDE0LjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDU1ODgzNjVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2ZlVUxNV296enFvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JzQsNC50ZTRgC4gwqvQpNCw0YDQsdC4INC+0YHQtdC90ZbCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0L3QtNGA0LDRgtGO0Log0JLQtdGA0L7QvdGW0LrQsCwgMTQuMDkuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTYxNjM5OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1oyWjdXMElmUHFrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS7QoS4g0JHQsNGFLiDQkNC70LXQvNCw0L3QtNCwINC3IMKr0KTRgNCw0L3RhtGD0LfRjNC60L7RlyDRgdGO0ZfRgtC4wrsg0LzRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgDsgMi4g0JwuINCb0LjRgdC10L3QutC+LiDQnNCw0LfRg9GA0LrQsCDQtNC+INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtGG0LjRgNGW0Lkg0JDRgNGW0L3QsCwgMjAuMDguMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTY1NjQ0NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvN3o2U1R5RG9vd2dcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQqNGD0LrQsNC50LvQvi4g0JzQsNGA0Ygg0Lcg0YHRjtGX0YLQuCDCq9Cm0LjRgNC6wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRgNC40YjRgtCw0LvRjCDQr9C9LCAyMS4wNi4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1Njk4OTc0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9CUko3cXdmMXV6Y1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEuINCh0L7RgdC90ZbQvdCwLiDCq9CU0YDQsNC60L7QvcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YDQuNGI0YLQsNC70Ywg0K/QvSwgMjEuMDYuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTcyOTUyNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2VQREN3MURsQ1FnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0K/QutC+0LLRh9GD0LouINCf0L7Qu9C+0L3QtdC3XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YPQu9C40Log0J7Qu9C10YHRjywgMTYuMDEuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTc1ODk3NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3lKZzNLS3ZZTGlnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0JHQtdGC0YXQvtCy0LXQvS4gwqvQlNC+INCV0LvRltC30LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGD0LvQuNC6INCe0LvQtdGB0Y8sIDE2LjAxLjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDU3ODk1ODNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1NZWlhiOFk4ZFNRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS7QoS4g0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGA0LUg0LzQsNC20L7RgDsgMi4g0KQuINCo0L7Qv9C10L0uINCc0LDQt9GD0YDQutCwLCDRgtCyLjY3IOKEljJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQsNGJINCd0LDQvdCwLCAwMS4xMS4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1ODI0MTQwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9yTGlmMTduOVBta1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KAuINCT0LvRltGU0YAuIMKr0JXRgdC60ZbQt8K7INGA0LUg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C10LPQutC40Lkg0JzQsNC60YHQuNC8LCAxNy4wOC4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1OTE3MjkzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9BWm1nZ3B6ekhWRVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JouINCU0LXQsdGO0YHRgdGWLiDCq9Cc0LDQu9C10L3RjNC60LUg0L3QtdCz0YDQtdC90Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C10LPQutC40Lkg0JzQsNC60YHQuNC8LCAxNy4wOC4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1OTYyNjA4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8xa1NHc0JBVTM5d1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JIuINCc0L7RhtCw0YDRgi4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsINCGINGH0LDRgdGC0LjQvdCwOyAyLiDQki4g0KjRg9C60LDQudC70L4uINCG0L3RgtC10YDQvNC10YbQvlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LfQtdC/0LAg0KHQvtGE0ZbRjywgMzAuMDMuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTk5NjQwOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMDhLbzY4aU1GWjBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCRLiDQpNGW0LvRjNGGLiDCq9CX0LDQutCw0YDQv9Cw0YLRgdGM0LrQsCDQvdC+0LLQtdC70LXRgtCwwrsg4oSWMlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LrRgdGO0YLQuNC90YHRjNC60LAg0J3QsNC00ZbRjywgMTAuMDguMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjAyNDgxNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvdGJSR3IwMDhTaGdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQk9GW0LvQu9C+0LouIMKr0JrQsNGA0L3QsNCy0LDQuyDQsiDQoNGW0L7Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LrRgdGO0YLQuNC90YHRjNC60LAg0J3QsNC00ZbRjywgMTAuMDguMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjA1OTY1M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvN1A1Szc3TWNoTE1cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQqNGD0LrQsNC50LvQvi4gwqvQmtC+0YLQuNC6INGWINC80LjRiNC60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNGU0L3RjCDQkNC90LDRgdGC0LDRgdGW0Y8sIDA4LjAzLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDYwODYwMjFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzNqSkN2VjFiLTlnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC4g0JFcXHUyMDE50ZTQu9GMLiDQodC+0L3QsNGC0LjQvdCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0ZTQvdGMINCQ0L3QsNGB0YLQsNGB0ZbRjywgMDguMDMuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjEwOTAxM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvUENyUldIZk5mSmNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQlNCy0L7RgNC20LDQuiwgwqvQlNC20LDQt9C+0LLQuNC5INC10YLRjtC0wrsg4oSWMiDQtNC+INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J3RltGI0L/QsNC7INCE0LLQsCwgMDkuMDUuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjEzOTg3OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvaG0wR3FUZDhjbmdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQm9C+0LPRltC9LiDCq9Cb0ZbRgNC40YfQvdC40Lkg0L/RgNC10LvRjtC0wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J3RltGI0L/QsNC7INCE0LLQsCwgMDkuMDUuMjAxMCDRgC7QvVwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2MTcyMjkzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9GV3NjQ3pjc1ZsUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCV0LrRiNGC0LXQudC9LiDCq9Ca0LDQv9GA0LjQtyDQs9C90L7QvNGW0LLCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntC70ZbQudC90LjQuiDQnNC40LrQuNGC0LAsIDMxLjEyLjIwMTEg0YAu0L0uICgyINGA0ZbQuiDQvdCw0LLRh9Cw0L3QvdGPKVwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2MjAzNDU1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC93cl9adjJKZ0gtY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCd0L7QstGW0LrQvtCy0LAuIMKr0JPQvtGB0YLRgNC40Lkg0YDQuNGC0LzCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntC70ZbQudC90LjQuiDQnNC40LrQuNGC0LAsIDMxLjEyLjIwMTEg0YAu0L0uICgyINGA0ZbQuiDQvdCw0LLRh9Cw0L3QvdGPKVwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2MjQzNjEyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9fcXhCeU1tc0Z3b1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JrQuNC80LvQuNC6LiDCq9Cc0ZbQvdGW0LDRgtGO0YDQvdCwINCb0LXQvtC90YLQvtCy0ZbQsNC90LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntGB0YLQsNC/0YfRg9C6INCl0YDQuNGB0YLQuNC90LAsIDE4LjA4LjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDYyNzIzNzhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0MwZW1CYkZZSVMwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0JPQsNGA0LTQtdC70YwuIMKrUG9yIHVuYSBjYWJlemHCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntGB0YLQsNC/0YfRg9C6INCl0YDQuNGB0YLQuNC90LAsIDE4LjA4LjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDYzMjkxMTBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2dMMnBNVllOWUdNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0J3RltC70YzRgdC10L0uIMKr0JPQvtC00LjQvdC90LjQuiDQtyDQvNGD0LfQuNC60L7RjsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDQvdGH0LXQvdC60L4g0JfQvtGA0Y/QvdCwLCAwNS4wMi4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2MzYyMzgxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9EcU5YS1hSdk4xc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KAuINCT0LvRltGU0YAuINCf0YDQtdC70Y7QtNGW0Y9cIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNC90YfQtdC90LrQviDQl9C+0YDRj9C90LAsIDA1LjAyLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDYzODk5MDVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3EyZHBHMmV4S0djXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS7QoS4g0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPIOKEljExOyAyLiDQlS4g0JPRgNGW0LMuINCV0YLRjtC0LCDRgtCyLiA3MyDihJY1ICjQv9Cw0LxcXHUyMDE50Y/RgtGWINCo0L7Qv9C10L3QsClcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNGB0LXQvdGH0YPQuiDQmtCw0YDRltC90LAsIDAyLjAzLjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY0MzkyNDdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1Bxd0dzTzh0VTdVXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQky4g0KjRgtGM0L7Qu9GM0YbQtdC70Ywt0JkuINCR0LDRhS4g0JzQtdC90YPQtdGCINGB0L7Qu9GMINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNGB0LrQsNGAINCd0LDRgtCw0L0sIDA3LjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY0NzIxODdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3dFcE1qQ1dpODR3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0KjQuNGC0YLQtS4gwqvQotCw0L3QtdGG0Ywg0LPQvdC+0LzRltCywrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNGB0LrQsNGAINCd0LDRgtCw0L0sIDA3LjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY0OTYxMjFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzZ1dmx1V3ZROWNZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQri4g0KDQtdC80LXQt9C10L3QutC+LiDCq9Cg0LDQvdC+0Log0LIg0YLRg9C80LDQvdGWLCDQv9GC0LDRhdC4INC90LDQtCDQvNC+0YDQtdC8wrs7IDIuINCiLiDQntGB0YLQtdC9LiDCq9Ch0L7QvSDQu9GP0LvRjNC60LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C70LjRgdGO0Log0JLQtdGA0L7QvdGW0LrQsCwgMjEuMTAuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjUyNjU0OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvQ1QxTzV6NlRfQ2NcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQmtGD0LvQsNGDLiDQktCw0YDRltCw0YbRltGXINGB0L7Qu9GMINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QvtC00LvQtdCy0YHRjNC60LAg0JrQsNGA0LjQvdCwLCAyNy4wNy4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2NTU2MjAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9iand3V2RMLVB4RVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCS0LXRgNCx0LjRhtGM0LrQuNC5ICwg0L7QsdGALiDQtNC70Y8g0YQt0L3QviDQkS4g0KjQuNC/0YLRg9GA0LAgwqvQqdC1INC90LUg0LLQvNC10YDQu9CwINCj0LrRgNCw0ZfQvdC4wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QvtC00LvQtdCy0YHRjNC60LAg0JrQsNGA0LjQvdCwLCAyNy4wNy4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2NjAzNjg1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9vUFVjeldwR1Q0SVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JQuINCm0LjQv9C+0LvRli4g0KTQtdCz0LXRgtCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YDQvtC00LDQvdGH0YPQuiDQodC+0L3RjywgMDkuMDQuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjYzMDQ5OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvVU9EblhFTkpQN2dcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQkdGW0LvQsNGH0LXQvdC60L4uIMKr0JTQvtGJ0L7QstC40Lkg0YDQsNC90L7QusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YDQvtC00LDQvdGH0YPQuiDQodC+0L3RjywgMDkuMDQuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjY1Njk4MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvdjNSeUlpaG5NODRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQp9C10YDQvdGWLiDQldGC0Y7QtCDihJYyMSwg0YLQsi4yOTlcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQsNCz0L7Qt9CwINCa0LDRgNC40L3QsCwgMTUuMDcuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjY4NjU4N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMkpEUDZaYjZTRThcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLiDQm9C+0LfQsdGW0L0uINCa0L7QvdGG0LXRgNGC0L3QuNC5INCy0LDQu9GM0YEgwqvQndCw0LHQu9C40LbQtdC90L3Rj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LDQs9C+0LfQsCDQmtCw0YDQuNC90LAsIDE1LjA3LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY3MTc0MDZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2RHSEZvaWFmUkV3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JHRltC70LDRh9C10L3QutC+LCDQodC+0L3QsNGC0LjQvdCwINGA0LUg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQoNC+0LzQsNC90L7QstCwINCa0LDRgtC10YDQuNC90LAsIDE0LjA3LjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY3NDM0MTFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1NCbmVsT1YyaUlrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KjQtdC90YLRjtGA0LogKNCi0LXRgNC10YnRg9C6KS4g0JXQutGB0L/RgNC+0LzRglwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQoNC+0LzQsNC90L7QstCwINCa0LDRgtC10YDQuNC90LAsIDE0LjA3LjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY3NjY1NzVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0lCb0hSQjQ2cEhRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JPQtdC00ZbQutC1LiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodGU0YDQs9GU0ZTQstCwINCv0L3QsCwgMjUuMDkuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjgwMjAxNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZ1Vnc1h3WlVDaE1cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQktC+0LvRjNGELiDCq9Cb0ZbRgtC90ZbQuSDQstGW0YLQtdGA0LXRhtGMwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRlNGA0LPRlNGU0LLQsCDQr9C90LAsIDI1LjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY4MzA5MDZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0FraEpaS0lsQmlVXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0KjQv9GW0L3QtNC70LXRgC4g0KHQvtC90LDRgtC40L3QsCDihJYxLCDQhiDRh9Cw0YHRgtC40L3QsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodGW0LvRjNC60L7QstGB0YzQutCwINCE0LLQsCwgMjguMDcuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0Njg1NDUzNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvVFl3TFNxZC1hT1FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4gwqvQqNCw0YDQvNCw0L3QutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRltC70YzQutC+0LLRgdGM0LrQsCDQhNCy0LAsIDI4LjA3LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY4ODAzNzNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC92SlB2SXNFdmZxZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCg0LXQstGD0YbRjNC60LjQuS4g0J/RltGB0L3RjzIuINCaLiDQp9C10YDQvdGWLiDQldGC0Y7QtCwg0YLQsi4gMjE5LCDihJYxNVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodC60L7RgNC+0YXQvtC00YzQutC+INCE0LLQs9C10L3RltGPLCAyNC4wNy4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2OTA3MjY2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvWWFnZTJLRkVvTHNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQm9GW0YHRgi4gwqvQrtC90LDRhtGM0LrQuNC5INC10YLRjtC0wrsg4oSWMVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCE0LLQs9C10L3RltGPLCAwMy4wMy4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2OTQ0NjI5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvd1FYdFdNeTZTcndcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQm9Cw0YHRgtC+0LLQtdGG0YzQutC40LkuIMKr0IYg0LfQsNC00LfQstC+0L3QuNC70Lgg0LTQt9Cy0L7QvdC4IFxcdTIwMjbCuyAg4oSWNSDQtyDRhtC40LrQu9GDIMKrMTIg0KDQsNGG0ZbQvtC90LDQu9GM0L3QuNGFINC10YHQutGW0LfRltCyINCyINC00L7QtNC10LrQsNGE0L7QvdC90ZbQuSDRgtC10YXQvdGW0YbRliDQtNC70Y8g0YTQvtGA0YLQtdC/0ZbQsNC90L7Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCE0LLQs9C10L3RltGPLCAwMy4wMy4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2OTgyMDkyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9UcjI4SDY2VmVZa1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JYuLdCcLiDQkNGA0L3Qvi4gwqtSZW5nYWluZcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0YPRhdCw0L0g0JTRltCw0L3QsCwgMDUuMTIuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzAwNTU2OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQveTcwWndLX1lEZWtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCTLiDQmtC70LDRgdGB0LXQvS4gwqvQktCw0LvRjNGB0LjQusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0YPRhdCw0L0g0JTRltCw0L3QsCwgMDUuMTIuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzAzMDc3M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvb2c3SGVFT3ZkZ3dcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCTLiDQkdC10LdcXHUyMDE50Y/Qt9C40YfQvdC40LkuIMKr0J7QuSwg0YMg0LLQuNGI0L3QtdCy0L7QvNGDINGB0LDQtNGDwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQsNGA0LDRgdGO0Log0ITQu9C40LfQsNCy0LXRgtCwLCAyMC4wMi4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ3MDY0NTE1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC81RGNpUnd6U09MWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K4uINCS0LXRgdC90Y/Qui4gwqvQmtCw0LfQvtGH0LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0LDRgNCw0YHRjtC6INCE0LvQuNC30LDQstC10YLQsCwgMjAuMDIuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzA4MzY5MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvM1dHV0E2cXkxbk1cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLiDQktC+0LvQutC+0LIuIMKr0J/RltC0INC00L7RidC10LzCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTQvtGA0L7QstCwINCS0ZbQutGC0L7RgNGW0Y8sIDA3LjAxLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDcxMDQxNTFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL25zQzd5UFBxcWVNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi4g0KXQsNGB0LvRltC90LPQtdGALiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTQvtGA0L7QstCwINCS0ZbQutGC0L7RgNGW0Y8sIDA3LjAxLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDcxMjY5OTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3JETHh2Tl9LUERRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQpC4g0JHRg9GA0LPQvNGO0LvQu9C10YAuIMKr0JLQtdGB0L3Rj9C90LjQuSDQutCw0L/RltC2wrs7IDIuINCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQsNC90LXRhtGMXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNGO0Log0JPQu9GW0LEsIDA1LjA3LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDcxNTQ3MzZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2hMZThHZzJIX0w4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQky4g0JHQtdC3XFx1MjAxOdGP0LfQuNGH0L3QuNC5LiDCq9Cg0YPRgdCw0LvQvtC90YzQutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXQstC+0YHRgtC+0LLQsCDQktGW0YDQsCwgMjcuMDQuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzE3ODgzNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZnlkeEoxQ0E4TUFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjIuINCbLiDQhtCy0LDQvdC10L3QutC+LiDCq9CR0LDQsdGD0YHRjy3Qr9Cz0YPRgdGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXQstC+0YHRgtC+0LLQsCDQktGW0YDQsCwgMjcuMDQuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzIxMjI1MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvWW9NZk1hdEdraHdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQk9Cw0LnQtNC9LiDQoNC+0L3QtNC+INC00L4g0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpdC+0LzRltC6INCa0ZbRgNCwLCAxMi4wMy4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ3MjM4OTg4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9ZZkp1X3dzV2c2OFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCR0ZbQu9Cw0YfQtdC90LrQvi4g0JLQsNC70YzRgVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpdC+0LzRltC6INCa0ZbRgNCwLCAxMi4wMy4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ3MjU2NjQxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9sVXowek1oQmtDTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JMu0KQuINCT0LXQvdC00LXQu9GMLiDQodC+0L3QsNGC0LjQvdCwINGB0ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfQtdGA0L3Rj9C6INCc0LDRgNGW0Y8sIDI2LjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDcyODI4NzhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL05KLVJpVm81WmFrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC4g0JvQsNC30LDRgNC10L3QutC+LiDQmtC+0LvQvtC80LjQudC60LhcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfQtdGA0L3Rj9C6INCc0LDRgNGW0Y8sIDI2LjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDczMDI1MjRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2hIeGlrRmJadEZBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0KjQvtC/0LXQvS4g0J/QvtC70L7QvdC10Lcg0YHQvtC70Ywg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQp9C+0YDQvdC10Lkg0K/QvdCwLCAwOS4xMC4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ3MzI0NjI1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC93bFBlVTl1b0JCc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQuNC90LAg0LzRliDQsdC10LzQvtC70Ywg0LzQsNC20L5cIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfQvtGA0L3QtdC5INCv0L3QsCwgMDkuMTAuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzM0NzA2MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1cwWGMyNHhRajBJXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS7QoS4g0JHQsNGFLiDQlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINC70Y8g0LzRltC90L7RgDsgMi4g0J8uINCX0LDRhdCw0YDQvtCy0LAuIMKr0JLQv9C10YDRiNC1INC90LAg0LDRgNC10L3RlsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCv0LrQuNC80LXQvdC60L4g0ITQu9C40LfQsNCy0LXRgtCwLCAyMy4xMC4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ3Mzc2MDc2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9DR0xva09Cc2d5d1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JwuINCb0LjRgdC10L3QutC+LiDCq9Ch0YPQvNC90LjQuSDRgdC/0ZbQssK7OyAyLiDQkC4g0KXQsNGH0LDRgtGD0YDRj9C9LiDCq9Cc0YPQt9C40YfQvdCwINC60LDRgNGC0LjQvdCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0K/QvNC/0L7Qu9GM0YHRjNC60LAg0JTQsNGAXFx1MjAxOdGPLCAxNC4wNi4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ3Mzk4NTAyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC95ekpGMS1ZSUFzNFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCc0LXQvdC00LXQu9GM0YHQvtC9LiDCq9Cf0ZbRgdC90Y8g0LHQtdC3INGB0LvRltCywrssINGC0LIuMzA7IDIuINCbLiDQl9Cw0LHQsNGA0LAuINCk0LDQvdGC0LDQt9GW0Y8g0L3QsCDRgtC10LzRgyDRg9C60YDQsNGX0L3RgdGM0LrQvtGXINC90LDRgNC+0LTQvdC+0Zcg0L/RltGB0L3RliDCq9Cd0ZbRhyDRj9C60LAg0LzRltGB0Y/Rh9C90LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkNC60ZbQvNC+0LLQsCDQmtGW0YDQsCwgMzEuMDEuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0ODIzMzczM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvc3BfdXRrN1NleHNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLiDQk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg0YDQtSDQvNCw0LbQvtGALCDQhiDRh9Cw0YHRgtC40L3QsDsgMi4g0IYuINCo0LDQvNC+LiDCq9CS0LXRgdC90Y/QvdC60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdC+0LrQvtGHINCQ0YDRgtC10LwsIDIxLjA5LjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDgyNzM4MzRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3JIU2cwcVlFNEVvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS7QoS4g0JHQsNGFLiDQkNC70LXQvNCw0L3QtNCwINC3INCf0LDRgNGC0LjRgtC4INC00L4g0LzRltC90L7RgDsgMi4g0KQuINCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9INC00L4g0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdC+0YDQtdC50LrQviDQoNC+0LzQsNC9LCAxMS4wMS4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ4Mjk5MzE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9xX2VBZzgweEM4VVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0Jku0KEuINCR0LDRhS4g0KXQvtGA0LDQuyDQtyDQutCw0L3RgtCw0YLQuCDihJYxNDcgwqtKZXN1cyBibGVpYmV0IG1laW5lIEZyZXVkZcK7OyAyLiDQhi4g0KjQsNC80L4uINCf0YDQtdC70Y7QtNGW0Y8g4oSWOCDCq0FuZGFudGUsIFF1YXNpIGNhbXBhbmHCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQktC10YDQt9GD0L0t0KDQvtC70ZbQvdCz0LXRgCDQotC10YDQtdC30LAsIDA5LjEwLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDgzMjA4ODZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzFPWHlMUlFmeTFBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0KjRltGC0YLQtS4g0JXRgtGO0LQg4oSWMjIsINGC0LIuNjhcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQtdGA0LzQsNC90Y7QuiDQodC+0YTRltGPLCAyMS4xMi4yMDA3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ4MzM4NTA1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9DUnVjclVNUWM5UVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KPQutGA0LDRl9C90YHRjNC60LAg0L3QsNGA0L7QtNC90LAg0L/RltGB0L3RjyDQsiDQvtCx0YDQvtCx0YbRliDQni4g0KHQsNGA0LDRgtGB0YzQutC+0LPQviDCq9Cm0LLRltGC0LUgINGC0LXRgNC10L3Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C10YDQvNCw0L3RjtC6INCh0L7RhNGW0Y8sIDIxLjEyLjIwMDcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDgzNjQwNzlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLy1XQ0NHN3BzTHVzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQo9C60YDQsNGX0L3RgdGM0LrQsCDQvdCw0YDQvtC00L3QsCDQv9GW0YHQvdGPINCyINC+0LHRgNC+0LHRhtGWINCTLiDQkdC10LdcXHUyMDE50Y/Qt9C40YfQvdC+0LPQviDCq9Ce0LksINGDICAg0LLQuNGI0L3QtdCy0L7QvNGDINGB0LDQtNGDwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQvtC80ZbQu9C60L4g0JDQvdCw0YHRgtCw0YHRltGPLCAwOC4wMy4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ4NDI3NDQzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9QRnRyN3J3Z3ZwSVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCa0YPQu9Cw0YMsINCh0L7QvdCw0YLQuNC90LAg4oSWMSwg0YLQsi4yMFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C+0LzRltC70LrQviDQkNC90LDRgdGC0LDRgdGW0Y8sIDA4LjAzLjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDg0NDkxMThcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzhIQlZCc1RiQ2hjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0gINC80ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNC10YHRjNC60L4g0JzQsNGA0ZbRjywgMjIuMDYuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0ODQ2OTA3NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvcHp3TGVKWFZnbnNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQkdGW0LvQsNGILiDCq9CT0YPRhtGD0LvRjNGB0YzQutCwINC/0LjRgdCw0L3QutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNC10YHRjNC60L4g0JzQsNGA0ZbRjywgMjIuMDYuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0ODU5MTY1M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZWt0bkNuTDZ5R1VcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQnNC+0YjQutC+0LLRgdGM0LrQuNC5LiDQldGC0Y7QtCDihJY2LCDRgtCyLiA3MlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0LjQvdC40Log0JTRltCw0L3QsCwgMTkuMC4yMDA2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ4NjIzNDgyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9rRkNXWF9tVnRRNFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCa0L7Qt9Cw0YDQtdC90LrQvi4g0JLQsNC70YzRgVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0LjQvdC40Log0JTRltCw0L3QsCwgMTkuMC4yMDA2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ4Njk3NzExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9KS3FHTFZKQnNMa1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JQuINCp0LjRgNC40YbRjy4gwqvQo9C60YDQsNGX0L3RgdGM0LrQuNC5INC10YLRjtC0wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNGD0YjQutC+0LLRgdGM0LrQsCDQktCw0LvQtdGA0ZbRjywgMTcuMDEuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0ODgxNjEwM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvR09oUGFfQUd4dW9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQhtCy0LDQvdC10L3QutC+LiDCq9CV0Lkg0JvRjtC70ZYg0LbQtSDQvNGWLCDQu9GO0LvRjsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDRg9GI0LrQvtCy0YHRjNC60LAg0JLQsNC70LXRgNGW0Y8sIDE3LjAxLjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDg4NjUzOTZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL05hMUFxb2dHWldjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS7QoS4g0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGA0LUg0LzRltC90L7RgDsgMi4g0IYuINCo0LDQvNC+LiDCq9CS0LXRgdC90Y/QvdC60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQlNGW0LTQtdC90LrQviDQlNCw0YBcXHUyMDE50Y8sIDIwLjA1LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDg5NDQ1MThcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL05NbDVtQ1llczA4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JHRgNC40LvRltC9LiDQotC+0LrQsNGC0LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRg9C00LjRhyDQntC70YzQs9CwLCAxNC4xMC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5MDE0ODQ0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9NdS1wQllkdG9YWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCc0LXQvdC00LXQu9GM0YHQvtC9LiDCq9Cf0ZbRgdC90Y8g0LHQtdC3INGB0LvRltCywrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRg9C00LjRhyDQntC70YzQs9CwLCAxNC4xMC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5MDQ4MjYwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9qZnJyZjAtdXpRZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCU0Y7QsdGO0LouIMKr0JTQt9C40pHQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCE0YDQvtGI0LrRltC90LAg0JDQvdC90LAsIDA4LjExLjIwMDjRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTQ4ODQyOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMzZ0UF9xTEVaa1FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQm9GW0YHRgi4gwqvQktGC0ZbRhdCwwrsg4oSWMlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQhNGA0L7RiNC60ZbQvdCwINCQ0L3QvdCwLCAwOC4xMS4yMDA40YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDk1MjA3MjBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzJTcGtJQ2Q0d0dnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JHQvtGA0LTRjtCz0L7QstCwLiDCq9Cj0LrRgNCw0ZfQvdGB0YzQutC40Lkg0YDQvtC80LDQvdGBwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JbQsNGA0ZbQuSDQodC+0YTRltGPLCAxOC4wOC4yMDA50YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDk1Mzc4NjdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL01RMDhodlZHRkF3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JrQvtC70LXRgdGB0LAuINCa0L7Qu9C+0LzQuNC50LrQsCDRhNCwINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JbQsNGA0ZbQuSDQodC+0YTRltGPLCAxOC4wOC4yMDA50YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDk1NzQ0MTFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzJTLTJJR2FJbFRNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpS4g0JDQu9GM0YTQstC10L0uIMKr0KHQvtC90Y/Rh9C90ZYg0LfQsNC50YfQuNC60LjCuyDQtyDRhtC40LrQu9GDIMKr0JrQsNGA0YLQuNC90LrQuCDQqNGF0LXRgMK7LNGC0LIuMTcg4oSWMVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0L3RgdGM0LrQsCDQkNC90LDRgdGC0LDRgdGW0Y8sIDIzLjA3LjIwMDnRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTU5NDYxNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTEc0YTJvdUU0ejRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCvLiDQkdC+0LHQsNC70ZbQui4gwqvQkdGD0YDRhdC70LjQstC40Lkg0LLQvtC00L7RgdC/0LDQtMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDQvdGB0YzQutCwINCQ0L3QsNGB0YLQsNGB0ZbRjywgMjMuMDcuMjAwOdGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5NjExMDQ1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9ZS2VLa0RQTGp5UVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JMuINCb0ZbRhdC90LXRgC4g0KDQvtC90LTQviDCq9CS0LTQvtC80LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0YLQvtC70LjQuiDQlNCw0YDQuNC90LAsIDAxLjA5LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDk2MzE1NThcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzYzRkxHYVl4U0hBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JzQsNC50ZTRgC4gwqvQhtC90LTRltCw0L3RgdGM0LrQsCDRgdC10YDQtdC90LDQtNCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNGC0L7Qu9C40Log0JTQsNGA0LjQvdCwLCAwMS4wOS4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5NjU3NDE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9jRHluelgtT1BZa1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEuINCn0LXRgNC90LXRhtGM0LrQuNC5LCDQsNGA0LDQvdC2LiDQni4g0KjQsNCy0LDRgNC00LDQutCwLsK7LiDQntC5LCDRgyDQu9GD0LfRliDRh9C10YDQstC+0L3QsCDQutCw0LvQuNC90LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGW0YHQsNGA0LXRhtGMINCG0LLQsNC9LCAyNC4wNC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5NjgyMTg1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9mdEZ2TFhUWDI5VVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCU0LLQvtGA0LbQsNC6LiDCq9CU0LbQsNC30L7QstC40Lkg0LXRgtGO0LTCuyDihJYxINC00L4g0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGW0YHQsNGA0LXRhtGMINCG0LLQsNC9LCAyNC4wNC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5NzAxMzU2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9OSFRCdjFqR0JjWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCa0L7RgNC10LvQu9GWLiDQodCw0YDQsNCx0LDQvdC00LAg0LzRliDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0ZbRh9GD0Log0KDQvtC80LDQvSwgMjkuMTAuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTcxODY4NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvYVpPVFdON0wwajBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLiDQnNC+0YXQvdCw0YfQtdCy0LAuIMKr0JvRltGC0L3RltC5INCy0LXRh9GW0YDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGW0YfRg9C6INCg0L7QvNCw0L0sIDI5LjEwLjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDk3NDA1NjFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzBBVU5IdDUyLTNVXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQoS4g0JbQtNCw0L3QvtCyLiDQn9GA0LXQu9GO0LQ7IDIuINCQLiDQkdCw0LHQsNC00LbQsNC90Y/QvS4gwqvQktCw0LPQsNGA0YjQsNC/0LDRgtGB0YzQutC40Lkg0YLQsNC90LXRhtGMwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQu9GW0LzQvtCy0LjRhyDQlNCw0LLQuNC0LCAwOS4wNy4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5Nzc4MzQ5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9RSGRyUWt6VVR6VVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCo0LXQvdGC0Y7RgNC6ICjQotC10YDQtdGJ0YPQuikuINCg0LDQv9GB0L7QtNGW0Y8gwqvQlNC+INGB0LLRltGC0LvQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7Qv9C40YfQtdC90YHRjNC60LAg0JTQsNGAXFx1MjAxOdGPLCAzMC4wNC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5ODAxMjM4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9OTXF4Mm9VX3Zmc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCo0LXQvdGC0Y7QuiAo0KLQtdGA0LXRidGD0LopLiDCq9Ch0LvRjNC+0LfQuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7Qv9C40YfQtdC90YHRjNC60LAg0JTQsNGAXFx1MjAxOdGPLCAzMC4wNC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5ODE4Nzk4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8tajN4RDB5OWhpWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0Jku0KEuINCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDQtNC+INC80ZbQvdC+0YAsINCU0KLQmi3QhjsgMi4g0KQuINCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9INC00L4g0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGA0LDQstGH0YPQuiDQnNCw0YDRltGPLCAxNC4wNi4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5ODY1NTY5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9RWDkzNllaZTdKTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCR0ZbQu9Cw0YguIMKr0JPRg9GG0YPQu9GM0YHRjNC60LAg0L/QuNGB0LDQvdC60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGA0YPRgtC10L3QutC+INCU0LDRgNC40L3QsCwgMTAuMTEuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTg5Nzk5N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvRm1Ea1Z2VU1SeU1cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCiLiDQkNGE0LDQvdCw0YHQtdC90LrQvi4gwqvQm9C10LHRltC00YzCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGA0YPRgtC10L3QutC+INCU0LDRgNC40L3QsCwgMTAuMTEuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTkyMTQ3MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvcE0xNTBxZEJBTWdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLiDQqNCw0LzQvi4gwqvQktC10YHQvdGP0L3QuNC5INC00L7RicK7INGW0Lcg0YbQuNC60LvRgyDCq9CT0YPRhtGD0LvRjNGB0YzQutGWINCw0LrQstCw0YDQtdC70ZbCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C10LLRh9GD0Log0KLQuNC80L7RhNGW0LksIDE5LjExLjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTAwNTM3NDlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2RfcGZnYmNvMzVJXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjyDQvNGWINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQtdCy0YfRg9C6INCi0LjQvNC+0YTRltC5LCAxOS4xMS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwMTA4MjUyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC81OUdXVjVfci1xd1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JMuINCT0LXQvdC00LXQu9GMLdCuLiDQpdCw0LvRjNCy0L7RgNGB0LXQvS4g0J/QsNGB0LDQutCw0LvRltGPINC70Y8g0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LPQtNC40YHRjtC6INCS0ZbQutGC0L7RgNGW0Y8sIDIzLjEwLjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTAxMzk4MTBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2ZwbWFIWmc0NkRnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JTRgNC10LzQu9GO0LPQsC4gwqvQm9GW0YDQuNGH0L3QsCDQv9GW0YHQvdGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNCz0LTQuNGB0Y7QuiDQktGW0LrRgtC+0YDRltGPLCAyMy4xMC4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwMTU3MTEwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9Tb182cTFtdmxjY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JsuINCo0YPQutCw0LnQu9C+LiDCq9Ci0L7QutCw0YLQsC3QmtCw0LzQv9Cw0L3QsMK7OyAyLiDQpC4g0KjQvtC/0LXQvS4gwqvQpNCw0L3RgtCw0LfRltGPLdC10LrRgdC/0YDQvtC80YLCuyDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNC70Y/RgNGH0YPQuiDQhNC70ZbQt9Cw0LLQtdGC0LAsIDI0LjA4LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTAxNzczNDZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3RjRFZtbi1BMGNzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS4g0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINC80ZYg0LzRltC90L7RgCwg0IYg0YfQsNGB0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNGA0YLQuNC90LjRiNC40L0g0JLQu9Cw0LTQuNGB0LvQsNCyLCAwOC4wNi4yMDA2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwMjI1OTU2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9IbkRxRGZodllUZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCb0LjRgS4gwqvQm9C10LPQtdC90LTQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDRgNGC0LjQvdC40YjQuNC9INCS0LvQsNC00LjRgdC70LDQsiwgMDguMDYuMjAwNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDI2MzIwOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvbWZvOFg1RFFkTTRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLiDQkdC+0YDRgtC60LXQstC40YcuINCV0YLRjtC0LCDRgtCyLjE1IOKEljlcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNGF0L3RltGG0YzQutCwINCS0LvQsNC00LjRgdC70LDQstCwLCAwMy4xMS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwMzMwMjg1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9fbUhieFlqWFZ1b1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J0uINCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiDQktCw0LvRjNGBINC00L4g0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0YXQvdGW0YbRjNC60LAg0JLQu9Cw0LTQuNGB0LvQsNCy0LAsIDAzLjExLjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTAzNTU4MjVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0RZQXlQRGplRERvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS4g0KEuINCR0LDRhS4g0KLRgNC40LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDRgNC1INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQtdGJ0LXRgNGP0LrQvtCyINCa0L7RgdGC0Y/QvdGC0LjQvSwgMDguMDguMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDM3NTQxOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMUJKQXJDdjM5X0FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLiDQkdC+0YDRgtC60LXQstC40YcuIMKr0J/RgNC+0LPRg9C70Y/QvdC60LAg0JDQu9GD0L/QutC+0Y4t0KHRhdGW0LTQvdCwINGW0LTQuNC70ZbRj8K7INC3INGG0LjQutC70YMgwqvQmtGA0LjQvNGB0YzQutGWINC10YHQutGW0LfQuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LXRidC10YDRj9C60L7QsiDQmtC+0YHRgtGP0L3RgtC40L0sIDA4LjA4LjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA0MTE4NjhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzl4LXlMMm5MVGFjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQpC4g0KjQvtC/0LXQvS4g0JLQsNC70YzRgSwg0YLQsi4gNjkg4oSWMjsgMi4g0JwuINCb0LjRgdC10L3QutC+LiDQldC60YHQv9GA0L7QvNGCXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0ZbRgdC10YDRg9C6INCc0LDRgNGW0LDQvdC90LAsIDE5LjA4LjIwMDcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA0MzA2MTBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL01kOHR5UUVQM0lnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmy4g0KDQtdCy0YPRhtGM0LrQuNC5LiDQn9GW0YHQvdGPOyAyLiDQhi4g0JzQvtGF0L3QsNGH0L7QstCwLiDQldGC0Y7QtC3QutCw0YDRgtC40L3QsCDCq9Cc0L7RgNC1wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQvtGFINCd0LDQtNGW0Y8sIDAxLjEwLjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA0NDc2NDZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1JPNHhLZnR6cng4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS4g0JPQsNC50LTQvS4gwqvQo9Cz0L7RgNGB0YzQutC1INGA0L7QvdC00L7CuyDQtyDCq9Ck0L7RgNGC0LXQv9GW0LDQvdC90L7Qs9C+INGC0YDRltC+wrsg0YHQvtC70Ywg0LzQsNC20L7RgDsgMi4g0IYuINCR0LXRgNC60L7QstC40YcuINCf0YDQtdC70Y7QtCDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0L3QsNGB0Y7QuiDQmtCw0YDQvtC70ZbQvdCwLCAwNS4wNy4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNDgzMjg4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9hOXdLOE14WDl6TVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCo0L7Qv9C10L0uINCk0LDQvdGC0LDQt9GW0Y8t0LXQutGB0L/RgNC+0LzRgiDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YA7IDIuINCQLiDQpdCw0YfQsNGC0YPRgNGP0L0uINCi0L7QutCw0YLQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntC/0LDQvdCw0YHRjtC6INCi0LDRgNCw0YEsIDEzLjEwLjIwMDcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA1MjE4OTVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3BKU2F5WVhKUXo0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQri4g0KnRg9GA0L7QstGB0YzQutC40LkuIMKr0J7RgdGW0L3QvdGPINC/0ZbRgdC90Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntC/0LDRgNGP0Log0IbRgNC40L3QsCwgMzAuMDQuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDU0MTAxNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZERPcDhNN2JEYWtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCTLiDQk9C10L3QtNC10LvRjC4g0JrQsNC/0YDQuNGH0ZbQvlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntC/0LDRgNGP0Log0IbRgNC40L3QsCwgMzAuMDQuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDU1NzQ0MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvX3duTTU2NXZXYjhcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCXLiDQpNGW0LHRltGFLiDQn9C+0LXQvNCwOyAyLtCaLiDQlNC10LHRjtGB0YHRli4gwqvQm9GP0LvRjNC60L7QstC40Lkg0LrQtdC6LdGD0L7QusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0YHRgtCw0L/QtdC90LrQviDQkNC90L3QsCwgMjYuMDguMjAwOSDRgC7QvS4gKDIt0LjQuSDRgNGW0Log0L3QsNCy0YfQsNC90L3RjylcIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDU3Mzk3MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvdElCSFpNVmI2T29cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQp9C10YDQvdGWLiDQldGC0Y7QtCDihJYxNSwg0YLQsi4yOTlcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNC90YfQtdC90LrQviDQodC+0YTRltGPLCAwOC4wLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA2MTQzNDNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL21HUHRVVWRyNFFvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0KjQsNC80L4uIMKr0JPRg9C80L7RgNC10YHQutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNC90YfQtdC90LrQviDQodC+0YTRltGPLCAwOC4wLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA2MzY2MDRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3FmYzh0ZjZuTTFZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0J/RgNCw0YbRjtC6LiDCq9Cd0LDQstC10YHQvdGWwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/Qu9C10YjQutC+INCG0LPQvdCw0YLRltC5LCAyMy4xMC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNjQ5Mzc5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9FVGxDVkpaNXM5UVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCb0ZbRgdGCLiDCq9CS0YLRltGF0LDCuyDihJYyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LvQtdGI0LrQviDQhtCz0L3QsNGC0ZbQuSwgMjMuMTAuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDY2NDExMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvLVYzdDJmbVN2ZlFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0LzRliDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LDQtNC60L7QstGB0YzQutCwINCQ0LvRltC90LAsIDMwLjA3LjIwMTcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA2Nzk2MjFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0NfNkF4bnoyT01BXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JPRgNGW0LMuIMKr0IbQvNC/0YDQvtCy0ZbQt9Cw0YbRltGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQsNC00LrQvtCy0YHRjNC60LAg0JDQu9GW0L3QsCwgMzAuMDcuMjAxNyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDcwNTE4MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvRDV4Qkg1VHVoM1FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQr9C60LjQvNC10L3QutC+LiDCq9Cc0YDRltGXINC90LAg0LHQtdGA0LXQt9GWINC80L7RgNGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQtdC00YzQutCwINCf0L7Qu9GW0L3QsCwxNi4xMi4yMDA50YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA3MjMwNTBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2d3SVdiTFhDNjdrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQky4g0JHQtdC3XFx1MjAxOdGP0LfQuNGH0L3QuNC5LiDQldGC0Y7QtCDihJYxNyDCq9CR0YPRgNC10LLRltGB0L3QuNC6wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQtdC00YzQutCwINCf0L7Qu9GW0L3QsCwxNi4xMi4yMDA50YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA3NDYxMDJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzZjUzZoblI4cktnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQpC4g0JrRg9C70LDRgy4g0KHQvtC90LDRgtC40L3QsCDihJYxLCDRgtCyLjYwOyAyLiDQmi4g0JLRltC6LiDQn9C+0LvQvtC90LXQt1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQoNC+0LHRg9C70Y/QuiDQnNC40LrQvtC70LAsMDQuMDUuMjAxMNGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNzY2NzgxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9QSTk4R1ZkOWdLc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEuINCR0LDRhS4g0JTQstC+0LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDihJY4LCDRhNCwINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDRg9C/0LAg0JDQu9GM0LHQtdGA0YIsIDMxLjA1LjIwMDcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA3OTYzOTJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3ZIWlFCOXVLd0ZzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0J3QtdC20LjQs9Cw0LkuIMKr0J/RgNC+0YXQsNC90L3Rj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0YPQv9CwINCQ0LvRjNCx0LXRgNGCLCAzMS4wNS4yMDA3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwODEzNDYyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvaXJZNGRiYktkQThcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQodC60L7RgNC40LouIMKr0JzQtdC70L7QtNGW0Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LLRgNCw0Lkg0JrQsNGC0LXRgNC40L3QsCwgMDQuMDcuMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwODMwODE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvSmpvWndnV1V5R01cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLiDQkdC10YDQutC+0LLQuNGHLiDQotC+0LrQsNGC0LAg0LvRjyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQstGA0LDQuSDQmtCw0YLQtdGA0LjQvdCwLCAwNC4wNy4wMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA4MzA4MTE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9ZdjlZdnMwZmQzRVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JouINCb0LDQstCw0LvQu9C1LiDQmtC+0L3RhtC10YDRgtC90LjQuSDQtdGC0Y7QtCDCq9Cc0LXRgtC10LvQuNC6wrs7IDIuINCGLiDQkdC10YDQutC+0LLQuNGHLiDQotC+0LrQsNGC0LAg0LvRjyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LvQvtCx0L7QtNGP0L3RjtC6INCc0LDRgNCz0LDRgNC40YLQsCwgMjIuMDkuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDg0NDI3OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQveFJNa0xXQmJWY0FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQnNC+0YbQsNGA0YIuINCh0L7QvdCw0YLQsCDRgdGWINCx0LXQvNC+0LvRjCDQvNCw0LbQvtGALCDQhiDRh9Cw0YHRgtC40L3QsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotC60LDRh9C10L3QutC+INCQ0LzRltC90LAsIDAzLjAzLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA4NjMyMTVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3hOcjRxbU5GQXZvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQny4g0JfQsNGF0LDRgNC+0LIuINCi0L7QutCw0YLQsC3Qv9GA0LXQu9GO0LTRltGPXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0LrQsNGH0LXQvdC60L4g0JDQvNGW0L3QsCwgMDMuMDMuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDg3Njg4M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZ0ZFMUYxSHk3R1FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtCRLiDQktCw0L3RhdCw0LvRjC4gQWxsZWdybyDRltC3INCh0L7QvdCw0YLQuNC90Lgg0LvRjyDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0YDQvtGG0LXQvdC60L4g0JDQvdC90LAsIDEyLjA2LjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA4OTA3NTBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0V6YmJBUmtzWGxFXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC4g0JrQvtC80LvRltC60L7QstCwLiDCq9Cc0LDRiNC40L3QsCDRh9Cw0YHRg8K7ICjQhtC90LLQtdC90YbRltGPINC3INGG0LjQutC70YMgwqvQhtC90YLQtdGA0LLQsNC70ZbRj8K7KVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotGA0L7RhtC10L3QutC+INCQ0L3QvdCwLCAxMi4wNi4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwOTA0NTQ4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9Ca29MZXRKU01KZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQuNC90LAg0YTQsCDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0YPRgNGH0LjQuiDQodC+0YTRltGPLCAxOC4wNS4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwOTIyODMxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8wNVVsV0toVHQ1OFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCT0YDRltCzLiDQktCw0LvRjNGBXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0YPRgNGH0LjQuiDQodC+0YTRltGPLCAxOC4wNS4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwOTQ2MTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC95Tm92ejZVSFRZMFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCS0LXRgNC80LXQvdC40YcsINC+0LHRgNC+0LHQutCwINCTLiDQkdC10LdcXHUyMDE50Y/Qt9C40YfQvdC+0LPQvi4gwqvQp9C+0YDQvdC+0LHRgNC40LLRhtGWwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00L7RgNC10L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgMC4wOS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwOTU5MTU0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9sSXF0RnRtcVhnd1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAg4oSWMywg0YHQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTQvtGA0LXQvdC60L4g0ITQu9C40LfQsNCy0LXRgtCwLCAwLjA5LjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA5NzI0ODFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0JmdGtKYXl4VVdVXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmy4g0KHRg9GF0L7RidC10ZTQstCwLiDQldGC0Y7QtDsgMi4g0J4uINCa0LjQvNC70LjQui4gwqvQnNGW0L3RltCw0YLRjtGA0L3QsCDQm9C10L7QvdGC0L7QstGW0LDQvdCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfQvNC10LvRjtC6INCQ0L3QvdCwLDIyLjA1LjIwMDnRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTAxOTk3MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMVRLQ2dyV0Fqd0FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0YHQvtC70Ywg0LzRltC90L7RgCDQtyDQlNCi0Jot0IZcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQtdCy0YfRg9C6INCd0ZbQutC+0LvQtdGC0YLQsCwgMjYuMDQuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTQxNjM3NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3dnY19rTElJaTZnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS4g0JHQvtGA0YLQutC10LLQuNGHLiDQldGC0Y7QtCDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQtdCy0YfRg9C6INCd0ZbQutC+0LvQtdGC0YLQsCwgMjYuMDQuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTQzOTEwOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMjdNUkpzWlV1ZkFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0YHQvtC70Ywg0LzRltC90L7RgCDQtyDQlNCi0Jot0IZcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0K/QvdGH0YPQuiDQktCw0LvQtdGA0ZbRjywgMTAuMDYuMjAwNyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTQ1MDg4MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvdHJGUEExSnh4YXNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg0YDQtSDQvNCw0LbQvtGALCDQhiDRh9Cw0YHRgtC40L3QsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQr9C90YfRg9C6INCS0LDQu9C10YDRltGPLCAxMC4wNi4yMDA3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNDY3Njc4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC94Ykp0eGUyUzYwMFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCT0YDRltCzLiDCq9Ch0LXRgNGG0LUg0L/QvtC10YLQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0ZbQu9CwINCa0YHQtdC90ZbRjywgMTUuMDEuMjAwNSDRgC7QvVwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNDc3OTQ0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8wTl94VjNVNUc4MFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCa0YDQsNC80LXRgC4g0JXRgtGO0LQg4oSWNSwg0LvRjyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0ZbQu9CwINCa0YHQtdC90ZbRjywgMTUuMDEuMjAwNSDRgC7QvVwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNDkxOTgxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9nY0w1SWJYaXhTRVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9IOKEljIsINGC0LIuIDk7IDIuINCQLiDQqNGC0L7Qs9Cw0YDQtdC90LrQvi4g0J/QvtC10LzQsCAo0L/RgNC40YHQstGP0YfRg9GU0YLRjNGB0Y8g0Jwu0KIuINCa0L7Qu9GP0LTRlilcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQvtC90LTQsNGA0LXQvdC60L4g0JTQtdC90LjRgSwgMjguMDEuMjAwNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTUwNDk0MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvd1k5V0RpaF9udmNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQm9C40YHQtdC90LrQvi4gwqvQn9GW0YHQvdGPINCx0LXQtyDRgdC70ZbQssK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7RgNC+0L3RhtC+0LLQsCDQlNGW0LDQvdCwLCAyNS4wMi4yMDA1INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNTg0NTg4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9EWHZ3c09CYW1KY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCc0LXQvdC00LXQu9GM0YHQvtC9LiDCq9Ck0LDQvdGC0LDQt9GW0Y8t0LrQsNC/0YDQuNGBwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQvtGA0L7QvdGG0L7QstCwINCU0ZbQsNC90LAsIDI1LjAyLjIwMDUg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE2MTI0NDZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3BFN1A5TTFpWFJvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQkS4g0JvRj9GC0L7RiNC40L3RgdGM0LrQuNC5LiDQn9GA0LXQu9GO0LTRltGPINGC0LIuNDQg4oSWNDsgMi4g0KQu0JvRltGB0YIuwqvQltC10L3QtdCy0YHRjNC60ZYg0LTQt9Cy0L7QvdC4wrsg0Lcg0YbQuNC60LvRgyDCq9Cg0L7QutC4INC80LDQvdC00YDRltCy0L7Qui4g0KjQstC10LnRhtCw0YDRltGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNGD0YjQutC+INCQ0L3QsNGB0YLQsNGB0ZbRjywgMTguMDEuMjAwNlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNjI4Mjc4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9KSHFhanA1WVBxZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JouINCU0LXQsdGO0YHRgdGWLiDQkNGA0LDQsdC10YHQutCwIOKEljI7IDIuINChLiDQkdC+0YDRgtC60LXQstC40YcuINCV0YLRjtC0IOKEljIsINGC0LIuMTVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRg9C70YLRg9GA0Y/QvSDQn9C+0LvRltC90LAsIDExLjEwLjIwMDYg0YAu0L1cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTY0MTMxNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgLy8gPGlmcmFtZSB3aWR0aD1cIjQ2OVwiIGhlaWdodD1cIjI2NFwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1VFaVdjRlJjUFJ3XCIgdGl0bGU9XCLQnC4g0JrQvtC70LXRgdGB0LAgJnF1b3Q70KLRgNC4INC60L7Qu9C+0LzQuNC50LrQuCZxdW90Oy5cIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1VFaVdjRlJjUFJ3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JrQvtC70LXRgdGB0LAuIMKr0KLRgNC4INC60L7Qu9C+0LzQuNC50LrQuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LDRiNC10LLRgdGM0LrQsCDQkNC70YzQvtC90LAsIDA0LjA0LjIwMDUg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE2NTEwNzZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0xYTzc3Y3FyQ1l3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQki4g0JrQvtGB0LXQvdC60L4uINCV0YLRjtC0INGE0LAg0LTRltGU0Lcg0LzRltC90L7RgCwg0YLQsi44OyAyLiDQoC4g0KjRg9C80LDQvS4gwqvQn9C+0YDQuNCywrsg0ZbQtyDRhtC40LrQu9GDIMKr0KTQsNC90YLQsNGB0YLQuNGH0L3RliDQv1xcdTIwMTnRlNGB0LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQltC10LvRj9C30LrQviDQodC+0YTRltGPLCAzMC4wOS4yMDA2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNjY4MzczXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9rQ1V4ai05UkUzZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCo0L7Qv9C10L0uINCf0L7Qu9C+0L3QtdC3IOKEljEsINGC0LIuNDBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J3QsNC30LDRgNGD0Log0IbRgNC40L3QsCwgMzAuMDQuMjAwNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTY3NzgwN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvUmowVHdkN05jdzRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQmtC+0LvQtdGB0YHQsC4gwqvQmtC+0L3RgtGA0LDRgdGC0LjCuyDQtyDRhtC40LrQu9GDIMKr0JrQsNGA0YLQuNC90Lgg0JPRg9GG0YPQu9GM0YnQuNC90LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQndCw0LfQsNGA0YPQuiDQhtGA0LjQvdCwLCAzMC4wNC4yMDA0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNjkxNjg2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9ObVdOVnM4UUt3QVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCo0L7Qv9C10L0uINCf0L7Qu9C+0L3QtdC3LCDRgtCyLjQwIOKEljI7IDIuINCkLiDQqNC+0L/QtdC9LiDQmtC+0LvQuNGB0LrQvtCy0LAsINGC0LIuNTdcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Rh9C60YPRgNC10L3QutC+INCQ0L3QttC10LvRltC60LAsIDAyLjEwLjIwMDQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE3MDQwMDJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1lmVTZHYVJkUDJBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0KjQvtC/0LXQvS4g0J/QvtC70L7QvdC10Lcg0YHQvtC70Ywg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0YHRgtGD0YjQvtC6INCU0LDRgNC40L3QsCwgMDcuMDIuMjAwNyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTcyMDE4MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvX3dCMGdJX3NOeVlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQkdCw0YDQstGW0L3RgdGM0LrQuNC5LiDQn9GA0LXQu9GO0LTRltGPINGE0LAg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0YHRgtGD0YjQvtC6INCU0LDRgNC40L3QsCwgMDcuMDIuMjAwNyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTczMTAzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvV0tyNllZQzdyUXdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCQLiDQmtC+0LvQvtC80ZbRlNGG0YwuINCV0YLRjtC0LdC10LrRgdC/0YDQvtC80YIg0LvRjyDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwg0YLQsi4yOyAyLiDQpC4g0KjQvtC/0LXQvS4g0J/QvtC70L7QvdC10Lcg4oSWMSwg0YLQsi4gMjZcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvtCx0LrQviDQkNC90L3QsC3QlNCw0YDQuNC90LAsIDIyLjEyLjIwMDMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE3NDM5NDJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3A2UktBaXc1eERzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQlS4g0JPRgNGW0LMuIMKr0Jcg0Y7QvdC40YUg0LTQvdGW0LLCuywg0YLQsi42NTsgMi4g0KQuINCo0YPQsdC10YDRgi4g0JXQutGB0L/RgNC+0LzRgiDihJYyLCDRgtCyLjkwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0LjQvNGH0YPQuiDQkNC90Y8sIDA3LjA4LjIwMDYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE3NjIzMDRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2tLWWplaE1jeDBFXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQoC4g0KjRg9C80LDQvS4gwqvQktGW0LTQtdC90YHRjNC60LjQuSDQutCw0YDQvdCw0LLQsNC7wrssINGC0LIuMjY6INCGLiBBbGxlZ3JvOyAyLiDQri4g0IbRidC10L3QutC+LiDQn9GA0LXQu9GO0LTRltGPIOKEljE0INC80ZYg0LHQtdC80L7Qu9GMINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLRg9GA0YHRjNC60LAg0JzQsNGA0ZbRjywgMTEuMDQuMjAwNSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTc4MjE0NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMkRPOW9fM09Id0VcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCgLiDQqNGD0LzQsNC9LiDQndC+0LLQtdC70LXRgtGC0LAg4oSWMSwg0YLQsi4yMTsgMi4g0KEuINCo0LDQvNGW0L3QsNC0LiDQmtGA0LXQvtC70YzRgdGM0LrQuNC5INGC0LDQvdC10YbRjCwg0YLQsi45NFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpNGW0LvRltC80L7QvdGH0YPQuiDQldGA0L3QtdGB0YIsIDIwLjAyLjIwMDUg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE4MDU0NDhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL25ZSURGcVVsejBJXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmy4g0KDQtdCy0YPRhtGM0LrQuNC5LiDQn9GA0LXQu9GO0LTRltGPINGB0ZYg0LHQtdC80L7Qu9GMINC80ZbQvdC+0YA7IDIuINCaLiDQlNC10LHRjtGB0YHRli4g0JTQstGWINCw0YDQsNCx0LXRgdC60LhcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXRgNC40L/QutC+INCE0LvQuNC30LDQstC10YLQsCwgMTkuMDcuMjAwNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTgyNzk0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvQzIyU0xnV0FEZWNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCVLiDQk9GA0ZbQsy4g0IbQvNC/0YDQvtCy0ZbQt9Cw0YbRltGPINC90LAg0LTQstGWINC90L7RgNCy0LXQt9GM0LrRliDQvdCw0YDQvtC00L3RliDQv9GW0YHQvdGWLCDRgtCyLjI5OyAyLiDQmi4g0JTQtdGO0YHRgdGWLiDQldGC0Y7QtCDihJYxMVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdC+0LTQvdCw0YDRh9GD0Log0IbQstCw0L3QvdCwLCAxOS4wMS4yMDA0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxODQ0MzQ3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9rdXdGTmI4M3dHTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K/QvSDQodGW0LHQtdC70ZbRg9GBLiDQldGC0Y7QtCDQu9GPINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTQtdC9INCQ0LksIDI2LjAxLjE5OTcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE4NjA1NzBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzlYUUlweml0bTlFXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS4g0JHQvtGA0YLQutC10LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPIOKEljMsINGC0LIuM1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQlNC10L0g0JDQuSwgMjYuMDEuMTk5NyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTg3MzM3NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMHpVQV8yaWsyVWtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCbLiDQkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LAg4oSWMjQsINGC0LIuIDc4OyAyLiDQnC4g0JvQuNGB0LXQvdC60L4uINCg0LDQv9GB0L7QtNGW0Y8g0L3QsCDRg9C60YDQsNGX0L3RgdGM0LrRliDRgtC10LzQuCDCq9CU0YPQvNC60LAt0YjRg9C80LrQsMK7LCDRgtCyLjE4IOKEljJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRg9GH0LXRgNGP0LLQsCDQnNCw0YDQuNC90LAsIDE3LjA4LjIwMDAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE4ODg1MTFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3RzcVJlX1lOaVJrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQnC4g0KHQutC+0YDQuNC6LiDQkNGA0ZbRjyDQtyDQn9Cw0YDRgtC40YLQuCDihJY1OyAyLiDQoS4g0JHQvtGA0YLQutC10LLQuNGHLiDQldGC0Y7QtCwg0YLQsi4xNSDihJY5XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDRgtCy0ZbQudGH0YPQuiDQhtGA0LjQvdCwLCAyNy4wNS4yMDAzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxOTAxOTM4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9RdzhId3RRWXZKQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JkuINCR0YDQsNC80YEuINCg0LDQv9GB0L7QtNGW0Y8g4oSWMiwg0YLQsi43OVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GA0LjRgdCw0LrQsNGA0YMg0J3QsNC00ZbRjywgMTQuMDIuMjAwMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTkxNTc4MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZE9BUUtuX1lCQWNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQmtC+0YHQtdC90LrQvi4g0JXRgtGO0LQg0YTQsCDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YDQuNGB0LDQutCw0YDRgyDQndCw0LTRltGPLCAxNC4wMi4yMDAyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxOTMxOTUxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9PcHB2UUhObWFBY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCo0YPQsdC10YDRgi4g0JrQu9Cw0LLRltGA0YjRgtGO0LosIEQgOTQ2IOKEljEgQWxsZWdybyBhc3NhaSwg4oSWMiBBbGxlZ3JldHRvLCDihJYzIEFsbGVnctC+XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDRgdGO0Log0K7Qu9GW0Y8sIDE1LjA2LjIwMDAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE5NDQ5MjhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2lkRVpBQVNxVklFXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0JPQsNC90ZbRhtGM0LrQuNC5LiDCq9Cj0YDQvtGH0LjRgdGC0LjQuSDQv9C+0LvQvtC90LXQt8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCd0ZbQutGW0YLRltC90LAg0IYu0KAuXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE5NTU0ODVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3dIV3pjT2Jva0ZnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0K/QutGD0YjQtdC90LrQvi4gwqvQodGW0L3QtdC80LDRgtC+0LPRgNCw0YTCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQndGW0LrRltGC0ZbQvdCwINCGLtCgLlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxOTY2ODIzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9FOE1XU3ZMSXdVVVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JouINCU0LXQsdGO0YHRgdGWLiDCq9Cc0ZbRgdGP0YfQvdC1INGB0Y/QudCy0L7CuzsgMi4g0JouINCR0LDQtNC10LvRjNGCLCDQsNGA0LDQvdC2LiDQlC4g0KDQsNC00L3QuNGH0LAuIMKr0J/RltGA0LDRgtC4INCa0LDRgNC40LHRgdGM0LrQvtCz0L4g0LzQvtGA0Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodC10LLQsNGB0YLRjNGP0L3QvtCy0LAg0J4u0IQuXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE5ODgxODhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzM2T0d3ZEVveGowXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmSDQoS4g0JHQsNGFLiDQlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGB0L7Qu9GMINC80ZbQvdC+0YA7IDIuINCGICDQkdC10YDQutC+0LLQuNGHLiDQktCw0LvRjNGBXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7RhtGO0Log0JzQsNGA0ZbRjywgMTcuMDkuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTk4ODE4ODM0NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzRNcS1wSGRXQTVBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KHRgtC10L/QsNC90LXQvdC60L4uINCS0LDRgNGW0LDRhtGW0ZdcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRg9GA0YHRjNC60LAg0JPQu9Cw0YTRltGA0LAsIDIyLjA2LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE5ODgxODgzNDJlZDVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9zOUM1UHNTdEpGd1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JHQsNGA0LLRltC90YHRjNC60LjQuS4g0KPQutGA0LDRl9C90YHRjNC60LjQuSDRgtCw0L3QvtC6XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPRgNGB0YzQutCwINCT0LvQsNGE0ZbRgNCwLCAyMi4wNi4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxOTg4ZmYxODgzNDVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfVxuXVxuXG5sZXQgYWRkaXRpb25hbEluc3RydW1lbnRzID0gW1xuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1l2dE5aYnBKUVFvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JPRltC70LvQvtC6LiDCq0EgbGl2ZWx5IGRhbmNlwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQvtC50YLQvtCy0LjRhyDQhtC70LvRjywgMDkuMDguMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1ODI0MzQ0MTMxMzAyMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvQl8xYS1pNmlhdm9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQkNC50YDQvtC9LiDCq0xlcyBFbWJydW5zwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQvtC50YLQvtCy0LjRhyDQhtC70LvRjywgMDkuMDguMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1ODI0MzQ0MTQzMzgyNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvQW5xN3dhaEUtQm9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQnNC+0YDQtNCw0YHQvtCyLiDCq9CR0YPQs9GWLdCS0YPQs9GWwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3QvtCy0LAg0JXQvNGW0LvRltGPLCAyNC4xMi4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjU4MjQzNDQxNDkwMzM4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9xeXBCdk5pWVQxVVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCo0LXQvdGC0Y7RgNC6ICjQotC10YDQtdGJ0YPQuikuIMKr0JzQsNC70LXQvdGM0LrQsCDQtdC70LXQs9GW0Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC+0LLQsCDQldC80ZbQu9GW0Y8sIDI0LjEyLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNTgyNDM0NDE1NjAyMDJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL01ZZXl2WDdvZmVvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi4g0JHRgNCw0YPQvS4gwqvQotCw0L3QtdGG0Ywg0LLRltGC0YDRg8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDRhtGO0Log0JHQvtCz0YPRgdC70LDQstCwLCAxMS4wNC4yMDA4INGALtC9XCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNTgyNDM0NDE2NTkwMjhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0RYNUQ5NHVPckJrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlC4g0KHRgtCw0YDRiNC40L3RltC9LiDCq9Cc0L7QvNC10L3RgiDQvdCw0YHQvtC70L7QtNC4wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNGG0Y7QuiDQkdC+0LPRg9GB0LvQsNCy0LAsIDExLjA0LjIwMDgg0YAu0L1cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1ODI0MzQ0MTcwMTU1NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQveVVIRG1FT3c1VTBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuINCR0YPRgNGA0LUg0YHRliDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LXRgtGA0LDRiCDQkNC90L3QsCwgMTguMTEuMjAwMyDRgC7QvVwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjU4MjQzNDQxNzQ2MjEyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9JRVlJU1Nad1dDQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCT0YDRltCzLiDCq9CjINC/0LXRh9C10YDRliDQs9GW0YDRgdGM0LrQvtCz0L4g0LrQvtGA0L7Qu9GPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QtdGC0YDQsNGIINCQ0L3QvdCwLCAxOC4xMS4yMDAzINGALtC9XCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNTgyNDM0NDE3OTc1OTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfVxuXVxuXG5leHBvcnQgbGV0IGFyY2hpdmUgPSBteUNhcmRzXG4gICAgLmNvbmNhdChjb25jZXJ0bWFzdGVycylcbiAgICAuY29uY2F0KGVuc2VtYmxlKVxuICAgIC5jb25jYXQoZW5zZW1ibGVzKVxuICAgIC5jb25jYXQoY29uY2VydG1hc3RlcnNfMilcbiAgICAuY29uY2F0KGZvcnRlcGlhbm9Tb2xvKVxuICAgIC5jb25jYXQoYWRkaXRpb25hbEluc3RydW1lbnRzKSIsImltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHthcmNoaXZlfSBmcm9tIFwiLi9BcmNoaXZlXCI7XG5pbXBvcnQge2ZvcnRlcGlhbm9Tb2xvfSBmcm9tIFwiLi9Gb3J0ZXBpYW5vU29sb1wiO1xuaW1wb3J0IHtlbnNlbWJsZXN9IGZyb20gXCIuL0Vuc2VtYmxlXCI7XG5pbXBvcnQge2FkZGl0aW9uYWxJbnN0cnVtZW50c30gZnJvbSBcIi4vQWRkaXRpb25hbEluc3RydW1lbnRzXCI7XG5pbXBvcnQge2NvbmNlcnRtYXN0ZXJzfSBmcm9tIFwiLi9Db25jZXJ0bWFzdGVyc1wiO1xuXG5jb25zdCBncm91cDEgPSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImA7XG5jb25zdCBncm91cDIgPSBg0J3QvtC80ZbQvdCw0YbRltGPIMKr0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YzCu2A7XG5jb25zdCBncm91cDMgPSBg0J3QvtC80ZbQvdCw0YbRltGPIMKr0JTQvtC00LDRgtC60L7QstC40Lkg0ZbQvdGB0YLRgNGD0LzQtdC90YIgKNGE0L7RgNGC0LXQv9GW0LDQvdC+KcK7YDtcbmNvbnN0IGdyb3VwNCA9IGDQndC+0LzRltC90LDRhtGW0Y8gwqvQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAwrtgO1xuXG5sZXQgbXlDYXJkcyA9IGFyY2hpdmU7XG5teUNhcmRzID0gbXlDYXJkcy5jb25jYXQoZm9ydGVwaWFub1NvbG8pLmNvbmNhdChlbnNlbWJsZXMpLmNvbmNhdChhZGRpdGlvbmFsSW5zdHJ1bWVudHMpLmNvbmNhdChjb25jZXJ0bWFzdGVycylcblxuLyoqIENPREUgKiovXG5mdW5jdGlvbiBmaWxtUmVkdWNlcihzdGF0ZSA9IHtjYXJkQ291bnQ6IG15Q2FyZHMubGVuZ3RoLCBjYXJkczogbXlDYXJkcywgaXNEYXRhSW5QbGFjZTogdHJ1ZSwgZXJyb3I6IFwiXCJ9LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ1JGU19QQUdFJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiAtMixcbiAgICAgICAgICAgICAgICBjYXJkczogW10sXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ0lORk9fUEFHRSc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogLTEsXG4gICAgICAgICAgICAgICAgY2FyZHM6IFtdLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdBUkNISVZFJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPiDQkNGA0YXRltCyXCIpO1xuICAgICAgICAgICAgbGV0IGFyY2hpdmVDYXJkcyA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5ncm91cCA9PT0gXCLQsNGA0YXRltCyXCIpLnNsaWNlKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRzOiBhcmNoaXZlQ2FyZHMsXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG15Q2FyZHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdBTEwnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI+INCj0YHRliDQstGW0LTQtdC+XCIpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXJkczogbXlDYXJkcyxcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbXlDYXJkcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ2dyb3VwLTEnOlxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDEpLnNsaWNlKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkcyxcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2dyb3VwLTInOlxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzMSA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5ncm91cCA9PT0gZ3JvdXAyKS5zbGljZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMxLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkczEubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2dyb3VwLTMnOlxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzMiA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5ncm91cCA9PT0gZ3JvdXAzKS5zbGljZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMyLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkczIubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlICdncm91cC00JzpcbiAgICAgICAgICAgIGxldCBuZXdDYXJkczQgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQuZ3JvdXAgPT09IGdyb3VwNCkuc2xpY2UoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZHM6IG5ld0NhcmRzNCxcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHM0Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnU0VBUkNIJzpcbiAgICAgICAgICAgIGxldCBxID0gYWN0aW9uLnF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgPiDQn9C+0YjRg9C6OiAke3F9YCk7XG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMzID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNhcmROYW1lID0gY2FyZC5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGJvb2wgPSAoY2FyZE5hbWUuc3RhcnRzV2l0aChxKSB8fCBjYXJkTmFtZS5pbmNsdWRlcyhxKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRlc3RpbmcgJHtjYXJkTmFtZX0gb24gcXVlcnkgJHtxfSwgcmVzdWx0IGlzICR7Ym9vbH1gKVxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkczMsXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzMy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnRVJST1InOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYD4g0J/QvtC80LjQu9C60LBgKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5tc2csXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiAxLFxuICAgICAgICAgICAgICAgIGNhcmRzOiBbXSxcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXJkczogY29uY2VydG1hc3RlcnMsXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IGNvbmNlcnRtYXN0ZXJzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxuICAgICAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNhcmRTdG9yZSA9IGNyZWF0ZVN0b3JlKGZpbG1SZWR1Y2VyKTtcblxuY2FyZFN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgIGNvbnNvbGUubG9nKFwiRmlsbXNTdG9yZSBzdGF0ZSB3YXMgY2hhbmdlZCwgbnVtYmVyIG9mIGNhcmRzOiBcIiArIGNhcmRTdG9yZS5nZXRTdGF0ZSgpLmNhcmRDb3VudClcbik7XG5cblxuXG5cblxuIiwiZXhwb3J0IGxldCBjb25jZXJ0bWFzdGVycyA9IFtdIiwiZXhwb3J0IGxldCBlbnNlbWJsZXMgPSBbXSIsImV4cG9ydCBsZXQgZm9ydGVwaWFub1NvbG8gPSBbXSJdLCJzb3VyY2VSb290IjoiIn0=