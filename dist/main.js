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
  font-size: 35px;
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
let fortepianoSolo = [{
  "videoUrl": "https://www.youtube.com/embed/uc6Nk6AIwj0",
  "composition": "1) Ф. Шопен. Вальс, тв. 64 №1; 2) М. Дремлюга Скерцо ля мінор",
  "name": "Азізов Андрій, 20.12.2010 р. н.",
  "id": {
    "$oid": "1714330154.9052775"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/0CLVoa-6NzI",
  "composition": "Ф. Шопен. «Grande Valse Briliante», тв. 34 №2",
  "name": "Бекірова Каміла, 04.07.2009 р. н.",
  "id": {
    "$oid": "1714330154.905289"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/1b9Y-0CALT4",
  "composition": "Б. Фільц. «Лемківська пісня» №1",
  "name": "Бекірова Каміла, 04.07.2009 р. н.",
  "id": {
    "$oid": "1714330154.905291"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/lkfT1io-GoE",
  "composition": "Л. Бетховен. «До Елізи»",
  "name": "Галан Ірина, 17.05.2010 р. н.",
  "id": {
    "$oid": "1714330154.9052923"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/_QFB5lFlMOM",
  "composition": "М. Шентюрк. «Вальс кульбабок»",
  "name": "Галан Ірина, 17.05.2010 р. н.",
  "id": {
    "$oid": "1714330154.905295"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/NiGByNPHDKI",
  "composition": "1) С. Борткевич Прелюд №1, тв.6 мі бемоль мінор; 2) Р. Шуман «Порив»",
  "name": "Гасратов Олексій, 24.08.2010 р. н.",
  "id": {
    "$oid": "1714330154.9052958"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/ZVtn2ALICo0",
  "composition": "Л. Шукайло. «Багатель» №5",
  "name": "Гиря Андрій, 23.05.2008 р. н.",
  "id": {
    "$oid": "1714330154.905297"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/DLJExdjRxjg",
  "composition": "Е. Гріг. «Імпровізація»",
  "name": "Гиря Андрій, 23.05.2008 р. н.",
  "id": {
    "$oid": "1714330154.9052982"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/pme9z2_UpTw",
  "composition": "Й.С. Бах. Прелюдія та фуга ре мінор, ДТК-І",
  "name": "Данько Анастасія, 02.10.2006 р. н.",
  "id": {
    "$oid": "1714330154.9052992"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/BXion9gLU8g",
  "composition": "Я. Степовий. Прелюдія № 19",
  "name": "Данько Анастасія, 02.10.2006 р. н.",
  "id": {
    "$oid": "1714330154.9053004"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/4sRjv3uvnQs",
  "composition": "1) Л. Шитте. Сонатина ре мажор; 2) М. Кароль-Шехместер. «Танець падаючого листя»",
  "name": "Доренська Анжела, 25.01.2009 р. н.",
  "id": {
    "$oid": "1714330154.9053016"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/Mu-pBYdtoXY",
  "composition": "Ф. Мендельсон. «Пісня без слів»",
  "name": "Дудич Ольга, 14.10.2009 р. н.",
  "id": {
    "$oid": "1714330154.9053025"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/NMl5mCYes08",
  "composition": "Е. Брилін. Токката",
  "name": "Дудич Ольга, 14.10.2009 р. н.",
  "id": {
    "$oid": "1714330154.9053035"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/FEzwltq3FUM",
  "composition": "Л. Ревуцький, «Пісня»",
  "name": "Завадська Аріна, 06.06.2009 р. н.",
  "id": {
    "$oid": "1714330154.9053047"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/nntUu5p7yJE",
  "composition": "Й. Гайдн. Соната  мі мінор, 1 частина",
  "name": "Завадська Аріна, 06.06.2009 р. н.",
  "id": {
    "$oid": "1714330154.9053056"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/WFr3mJpsj_w",
  "composition": "Ф. Мендельсон, аранж. К. Ланге. «Осіння пісня»",
  "name": "Ільчук Еліза, 19.09.2010 р. н.",
  "id": {
    "$oid": "1714330154.9053075"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/5UbHctle6fw",
  "composition": "В. Ширинський. Вальс",
  "name": "Ільчук Еліза, 19.09.2010 р. н.",
  "id": {
    "$oid": "1714330154.905309"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/2y8cdGqJQpg",
  "composition": "1) Й.С. Бах. Прелюдія та фуга до мінор, ДТК-І; 2) Ф. Шопен. Етюд, тв. 25 №2",
  "name": "Кадубець Єва, 01.10.2008 р. н.",
  "id": {
    "$oid": "1714330154.90531"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/d0772PfOlKQ",
  "composition": "В. Кос-Анатольський. Сюїта «Сині гори», 1 ч.",
  "name": "Король Єлизавета, 09.08.2010 р. н.",
  "id": {
    "$oid": "1714330154.9053109"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/S49KqU2vwps",
  "composition": "Б. Річардс. «Щебетання птахів»",
  "name": "Король Єлизавета, 09.08.2010 р. н.",
  "id": {
    "$oid": "1714330154.905312"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/lt3uhGik2XQ",
  "composition": "Я. Івановс. «Ялинка»",
  "name": "Кривицька Олександра, 05.11.2008 р. н.",
  "id": {
    "$oid": "1714330154.905313"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/C_Hd-V2_paw",
  "composition": "К. Вік. «Полонез» до мажор",
  "name": "Кривицька Олександра, 05.11.2008 р. н.",
  "id": {
    "$oid": "1714330154.905314"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/CCVLOri4tS0",
  "composition": "1) Л.В. Бетховен. Соната №20, 1 частина; 2) Б. Фільц. «Закарпатська новелета»",
  "name": "Кузьмич Ярина, 17.09.2009 р. н.",
  "id": {
    "$oid": "1714330154.9053152"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/u5wNqPzSENY",
  "composition": "1) М. Степаненко. «Прелюдія» ля мінор; 2) Українська народна пісня «Цвіте терен» в обр. О. Саратського",
  "name": "Кутас Віталій, 22.12.2010 р. н.",
  "id": {
    "$oid": "1714330154.905316"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/f7TEnZSyHX4",
  "composition": "Й. С. Бах. Маленька прелюдія №5",
  "name": "Липка Андрій, 14.12.2010 р. н.",
  "id": {
    "$oid": "1714330154.905317"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/qFq-mBtOrlo",
  "composition": "Ю. Щуровський. «Токката»",
  "name": "Липка Андрій, 14.12.2010 р. н.",
  "id": {
    "$oid": "1714330154.9053195"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/tCH3Xe_vPBM",
  "composition": "1) В. А. Моцарт. Соната  фа мажор, 1 частина; 2) Н. Нижанківський. Вальс",
  "name": "Люзович Анастасія, 10.08.2008 р. н.",
  "id": {
    "$oid": "1714330154.9053206"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/V_ptA1jOGRY",
  "composition": "Д. Чімароза. Соната сі бемоль мажор",
  "name": "Мельникова Ангеліна, 10.12.2009 р. н.",
  "id": {
    "$oid": "1714330154.9053233"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/yPfrZ-IeDp0",
  "composition": "Л. Шукайло. Інтермецо",
  "name": "Мельникова Ангеліна, 10.12.2009 р. н.",
  "id": {
    "$oid": "1714330154.9053242"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/296ztCyyCXs",
  "composition": "Т. Задор. «Концертний етюд» до мінор",
  "name": "Мих Роксоляна, 23.03.2008 р. н.",
  "id": {
    "$oid": "1714330154.9053254"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/W3Vrvk6hzoo",
  "composition": "Ф.К. Моцарт. Варіації на тему української народної пісні «У сусіда хата   біла»",
  "name": "Мих Роксоляна, 23.03.2008 р. н.",
  "id": {
    "$oid": "1714330154.9053264"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/ExnKDp__Gu0",
  "composition": "1) Й. Гайдн. Соната фа мажор, 1 частина; 2) Ф. Якименко. «Елегія» соль мінор.",
  "name": "Міськів Максим, 24.08.2009 р. н.",
  "id": {
    "$oid": "1714330154.9053295"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/egoFvF3qmy0",
  "composition": "Й. С. Бах. Триголосна інвенція фа мажор",
  "name": "Мозгова Надія, 11.12.2009 р. н.",
  "id": {
    "$oid": "1714330154.9053307"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/40vWFMz2LvQ",
  "composition": "Пєсканов. Прелюдія «Ukraine»",
  "name": "Мозгова Надія, 11.12.2009 р. н.",
  "id": {
    "$oid": "1714330154.9053316"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/1jqHIl_CVWM",
  "composition": "К. Славицький. «Два етюди»",
  "name": "Остапенко Аліна, 10.02.2011 р. н.",
  "id": {
    "$oid": "1714330154.9053328"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/CoCqKQLqxV0",
  "composition": "М. Климовський. «Їхав козак за Дунай», обр. Р. Савицького",
  "name": "Остапенко Аліна, 10.02.2011 р. н.",
  "id": {
    "$oid": "1714330154.9053338"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/rhvUHg04f3Q",
  "composition": "Я. Ваньхаль. Соната ля мажор",
  "name": "Рудаєва Анна, 03.12.2009 р. н.",
  "id": {
    "$oid": "1714330154.9053347"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/Sv1-u5Qs5LM",
  "composition": "О. Тимошенко. «Музична історія»",
  "name": "Рудаєва Анна, 03.12.2009 р. н.",
  "id": {
    "$oid": "1714330154.905336"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/yIw18mLv_x8",
  "composition": "Л. Бетховен. Соната №1, 1 частина",
  "name": "Саврай Катерина, 04.07.2009 р. н.",
  "id": {
    "$oid": "1714330154.9053383"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/VLItoQbZVRQ",
  "composition": "І. Шамо. Токата",
  "name": "Саврай Катерина, 04.07.2009 р. н.",
  "id": {
    "$oid": "1714330154.9053395"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/K5L5zvmpXzo",
  "composition": "1) Й.С. Бах. Прелюдія та фуга ре мінор, ДТК-І; 2) К. Віленський. Українська народна пісня «Не питай, чого в мене заплакані очі»",
  "name": "Савченко Матвій, 17.01.2010 р. н.",
  "id": {
    "$oid": "1714330154.9053404"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/DTK_E8HyKoQ",
  "composition": "О. Рогоза. «Етюд»",
  "name": "Саква Валерія, 13.03.2010 р. н.",
  "id": {
    "$oid": "1714330154.9053414"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/8WYftbznJJ4",
  "composition": "Р. Лісова. «Ноктюрн»",
  "name": "Саква Валерія, 13.03.2010 р. н.",
  "id": {
    "$oid": "1714330154.9053426"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/t8hiK1RyXlg",
  "composition": "Н. Нижанківський. Інтермецо",
  "name": "Сілецька Дар'я, 30.09.2010 р. н.",
  "id": {
    "$oid": "1714330154.9053435"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/VaiUvt2qdo8",
  "composition": "Ф. Мендельсон. «Фантазія-каприз», тв. 16 №2",
  "name": "Сілецька Дар'я, 30.09.2010 р. н.",
  "id": {
    "$oid": "1714330154.9053445"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/NS_4kJZgdeE",
  "composition": "1) І. Беркович. Токата мінор; 2) Ф. Шопен. Вальс сі мінор",
  "name": "Скороходько Євгенія, 24.07.2010 р. н.",
  "id": {
    "$oid": "1714330154.9053452"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/PssGJW1xTr4",
  "composition": "1) І. Карабиць. Прелюдії №1 та 22 з циклу «24 Прелюдії для фортепіано»; 2) І. Шамо. «Трійка»",
  "name": "Смірнова Євгенія, 03.03.2012 р. н.",
  "id": {
    "$oid": "1714330154.9053464"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/ItfMH-Qk0q0",
  "composition": "1) Ф. Шопен. Ноктюрн, тв. 9 №2; 2) П. Захаров. Концертний експромт на тему української різдвяної колядки «Щедрик»",
  "name": "Тимофєєва Дар'я, 11.04.2011 р. н.",
  "id": {
    "$oid": "1714330154.9053473"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/2gPHDgiEvFs",
  "composition": "1) Й. Гайдн. Соната ре мажор, 1 частина; 2) М. Лисенко. «Елегія»",
  "name": "Федина Марія-Анна, 27.08.2010 р. н.",
  "id": {
    "$oid": "1714330154.9053483"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/b7Pc4bMI5FY",
  "composition": "1) С. Борткевич. Етюд, тв.29 №7 «Le mysterieux inconnu»; 2) Ф. Шопен. «Фантазія-Експромт»",
  "name": "Федотова Катерина, 20.04.2011 р. н.",
  "id": {
    "$oid": "1714330154.9053495"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/Yb57s7Hy2-c",
  "composition": "М. Шентюрк. «Сльози»",
  "name": "Чорна Ганна, 21.12.2009 р. н.",
  "id": {
    "$oid": "1714330154.9053516"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/wEMiDrG3uzs",
  "composition": "М. Дремлюга. Скерцо",
  "name": "Чорна Ганна, 21.12.2009 р. н.",
  "id": {
    "$oid": "1714330154.905353"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/U7QKfDkvMb4",
  "composition": "1) Б. Лятошинський. «Ой, у полі три криниченьки», тв. 36 №1 2) Є. Дзюба. Прелюдія «Нескореним»",
  "name": "Шерстій Тарас Ігорович, 14.04.2008 р. н.",
  "id": {
    "$oid": "1714330154.905354"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/X5qLh7idkyE",
  "composition": "Г. Ф. Телеман. Фуга соль мінор",
  "name": "Юрчук Анастасія, 21.10.2009 р. н.",
  "id": {
    "$oid": "1714330154.905355"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/96k7wR2bgrQ",
  "composition": "А. Кос-Анатольський. Коломийка з «Буковинської сюїти»",
  "name": "Юрчук Анастасія, 21.10.2009 р. н.",
  "id": {
    "$oid": "1714330154.905356"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/Ko89yxMk44s",
  "composition": "І. Шамо. «Веснянка»",
  "name": "Якименко Єлизавета, 23.10.2010 р. н.",
  "id": {
    "$oid": "1714330154.905357"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/embed/wQXf343Jei4",
  "composition": "В. Клова. «Прелюдія»",
  "name": "Якименко Єлизавета, 23.10.2010 р. н.",
  "id": {
    "$oid": "1714330154.9053578"
  },
  "group": "Номінація \"Фортепіано соло\""
}];

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5mb1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5TZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWd1bGFySGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZXN1bHRzRmlsdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLXBhZ2UtaW1ncy9Qb3N0ZXJfMjAyNF91YS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3MvanVkZ2VzXzIwMjMuanBlZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZnMtcGFnZS1pbWdzL3Jmcy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnMuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL0FkZGl0aW9uYWxJbnN0cnVtZW50cy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL0FyY2hpdmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9DYXJkU3RvcmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9Db25jZXJ0bWFzdGVycy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL0Vuc2VtYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvRm9ydGVwaWFub1NvbG8uanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIlN0cmljdE1vZGUiLCJQcm92aWRlciIsInN0b3JlIiwiY2FyZFN0b3JlIiwiTWFpblNlY3Rpb24iLCJGaWxtV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZpbG1JbmZvIiwiSWZyYW1lQm94IiwiaWZyYW1lIiwicHJvcHMiLCJ3aWR0aCIsIkJ1dHRvbiIsImJ1dHRvbiIsIkNhcmQiLCJoZWlnaHQiLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwiY2FsY3VsYXRlZFdpZHRoIiwic2V0Q2FsY3VsYXRlZFdpZHRoIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJuYW1lIiwiY29tcG9zaXRpb24iLCJ2aWRlb1VybCIsInNob3dJZnJhbWUiLCJzZXRTaG93SWZyYW1lIiwib3BlblZpZGVvQnV0dG9uTmFtZSIsInNldE9wZW5WaWRlb0J1dHRvbk5hbWUiLCJvcGVuVmlkZW9IYW5kbGVyIiwiQnNGaWxsUGVyc29uRmlsbCIsIkZhQm9va09wZW4iLCJvbkNsaWNrIiwidmFsdWUiLCJzcmMiLCJMaW5rQ29udGFpbmVyIiwiV3JhcHBlciIsIkEiLCJhIiwiUCIsIlBvc3RlciIsIlBvc3RlckltZyIsImltZyIsImltZ1VybCIsIkluZm9QYWdlMiIsImhyZWYiLCJCaUxpbmtFeHRlcm5hbCIsInBvc3Rlcl8yIiwiSW5mb1BhZ2UiLCJwb3N0ZXJfMSIsImp1ZGdlc18yMDIzIiwiQ29tbW9uV3JhcHBlciIsIk1haW5TZWN0aW9uRmxleCIsImNhcmRzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImlzRGF0YUluUGxhY2UiLCJjYXJkQ291bnQiLCJzZWN0aW9uc0ZvckZpbHRlciIsImluZm9QYWdlIiwiRnJhZ21lbnQiLCJSZWd1bGFySGVhZGVyIiwiUmVzdWx0c0ZpbHRlciIsInNlY3Rpb25zIiwibWFwIiwiY2FyZCIsImtleSIsImlkIiwiJG9pZCIsIklucHV0IiwiaW5wdXQiLCJpbnB1dENvbG9yIiwiSW5wdXRTdHlsZSIsIklucHV0V3JhcGVyIiwiU3R5bGVkU3BhbiIsInNwYW4iLCJFcnJvciIsIldhcm4iLCJzZWFyY2hGaWVsZCIsInVzZVJlZiIsImVycm9yIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZXIiLCJzdHIiLCJTdHJpbmciLCJjdXJyZW50IiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJ0eXBlIiwibXNnIiwicXVlcnkiLCJoYW5kbGVLZXlQcmVzcyIsImV2ZW50IiwiQWlPdXRsaW5lRmlsZVNlYXJjaCIsIm9uS2V5UHJlc3MiLCJyZWYiLCJwbGFjZWhvbGRlciIsIkhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlIiwiRmlsdGVyQ29udGFpbmVyIiwiRmlsdGVyU2VjdGlvbiIsIkRpdlRoaW5MaW5lIiwiU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXIiLCJncm93XzAiLCJrZXlmcmFtZXMiLCJsZWZ0IiwiZ3Jvd18xIiwiVGhpbkxpbmVJbm5lckRpdiIsImFuaW1hdGlvbiIsInJlZExpbmVXaWR0aCIsInNldFJlZExpbmVXaWR0aCIsInJlZExpbmVMZWZ0Iiwic2V0UmVkTGluZUxlZnQiLCJzZXRBbmltYXRpb24iLCJtYXJrZWRTZWN0aW9uUmVmIiwicmVSZW5kZXJSZWRMaW4iLCJ0YXJnZXQiLCJjdXJyZW50U2VjdGlvbldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY3VycmVudFNlY3Rpb25MZWZ0IiwiY291bnRlciIsIm9uRmlsdGVyU2VjdGlvbkNsaWNrIiwic2VsZWN0ZWRTZWN0aW9uIiwic2VsZWN0ZWRTZWN0aW9uU3RyaW5nIiwic2VjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJJbmZvUGFnZSIsInJlbmRlcmVkU2VjdGlvbnMiLCJzZWMiLCJGYVVuaXZlcnNpdHkiLCJlIiwiRmFGb2xkZXIiLCJjaGlsZHJlbiIsImdldFdpbmRvd0RpbWVuc2lvbnMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aW5kb3ciLCJ3aW5kb3dEaW1lbnNpb25zIiwic2V0V2luZG93RGltZW5zaW9ucyIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkaXRpb25hbEluc3RydW1lbnRzIiwibXlDYXJkcyIsImNvbmNlcnRtYXN0ZXJzIiwiZW5zZW1ibGUiLCJlbnNlbWJsZXMiLCJjb25jZXJ0bWFzdGVyc18yIiwiZm9ydGVwaWFub1NvbG8iLCJhcmNoaXZlIiwiY29uY2F0IiwiZ3JvdXAxIiwiZ3JvdXAyIiwiZ3JvdXAzIiwiZ3JvdXA0IiwiZmlsbVJlZHVjZXIiLCJhY3Rpb24iLCJhcmNoaXZlQ2FyZHMiLCJmaWx0ZXIiLCJncm91cCIsInNsaWNlIiwibmV3Q2FyZHMiLCJuZXdDYXJkczEiLCJuZXdDYXJkczIiLCJuZXdDYXJkczQiLCJxIiwidG9Mb3dlckNhc2UiLCJuZXdDYXJkczMiLCJjYXJkTmFtZSIsImJvb2wiLCJzdGFydHNXaXRoIiwiY3JlYXRlU3RvcmUiLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2SkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQzJCO0FBQ2hCO0FBQ087QUFFNUMsU0FBU0EsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQ0lDLDRDQUFBLENBQUFDLGFBQUEsQ0FBQ0QsNENBQUssQ0FBQ0UsVUFBVSxxQkFDYkYsNENBQUEsQ0FBQUMsYUFBQSxDQUFDRSxvREFBUTtJQUFDQyxLQUFLLEVBQUVDLDBEQUFTQTtFQUFDLGdCQUN2QkwsNENBQUEsQ0FBQUMsYUFBQSxDQUFDSyxtRUFBVyxNQUFDLENBQ1AsQ0FDSSxDQUFDO0FBRTNCO0FBRWVQLGtFQUFHLEU7Ozs7Ozs7Ozs7OztBQ2ZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBQ1Y7QUFDd0M7QUFDaEI7QUFFL0QsTUFBTVEsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxHQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRUQsTUFBTUMsUUFBUSxHQUFHRix5REFBTSxDQUFDQyxHQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBR0QsTUFBTUUsU0FBUyxHQUFHSCx5REFBTSxDQUFDSSxNQUFPO0FBQ2hDLFdBQVdDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFNO0FBQ2hDO0FBQ0E7QUFDQSxDQUFDO0FBRU0sTUFBTUMsTUFBTSxHQUFHUCx5REFBTSxDQUFDUSxNQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFFRyxNQUFNQyxJQUFJLEdBQUlKLEtBQUssSUFBSztFQUUzQixNQUFNO0lBQUNLLE1BQU07SUFBRUo7RUFBSyxDQUFDLEdBQUdLLDBFQUFtQixDQUFDLENBQUM7RUFDN0MsTUFBTSxDQUFDQyxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdDLHNEQUFRLENBQUMsR0FBRyxDQUFDOztFQUUzRDtFQUNBQyx1REFBUyxDQUFDLE1BQU07SUFDWixJQUFJVCxLQUFLLEdBQUcsSUFBSSxFQUFFTyxrQkFBa0IsQ0FBQ1AsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQzVDTyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7RUFDaEMsQ0FBQyxFQUFFLENBQUNQLEtBQUssQ0FBQyxDQUFDO0VBRVgsTUFBTSxDQUFDVSxJQUFJLENBQUUsR0FBR0Ysc0RBQVEsQ0FBQ1QsS0FBSyxDQUFDVyxJQUFJLENBQUM7RUFDcEMsTUFBTSxDQUFDQyxXQUFXLENBQUUsR0FBR0gsc0RBQVEsQ0FBQ1QsS0FBSyxDQUFDWSxXQUFXLENBQUM7RUFDbEQsTUFBTSxDQUFDQyxRQUFRLENBQUUsR0FBR0osc0RBQVEsQ0FBQ1QsS0FBSyxDQUFDYSxRQUFRLENBQUM7RUFDNUMsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHTixzREFBUSxDQUFDLEtBQUssQ0FBQztFQUNuRCxNQUFNLENBQUNPLG1CQUFtQixFQUFFQyxzQkFBc0IsQ0FBQyxHQUFHUixzREFBUSxDQUFDLGdCQUFnQixDQUFDO0VBRWhGLE1BQU1TLGdCQUFnQixHQUFHQSxDQUFBLEtBQU07SUFDM0JILGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7SUFDMUIsSUFBSUEsVUFBVSxFQUFFO01BQ1pHLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDO0lBQzVDLENBQUMsTUFBTTtNQUNIQSxzQkFBc0IsQ0FBQyxlQUFlLENBQUM7SUFDM0M7RUFDSixDQUFDO0VBRUQsb0JBQ0k5Qiw0Q0FBQSxDQUFBQyxhQUFBLENBQUNNLFdBQVcscUJBQ1JQLDRDQUFBLENBQUFDLGFBQUEsQ0FBQ1MsUUFBUSxxQkFDTFYsNENBQUEsQ0FBQUMsYUFBQSw0QkFBTUQsNENBQUEsQ0FBQUMsYUFBQSxDQUFDK0IsZ0VBQWdCLE1BQUMsQ0FBQyxLQUFDLGVBQUFoQyw0Q0FBQSxDQUFBQyxhQUFBLFlBQUl1QixJQUFRLENBQU8sQ0FBQyxlQUM5Q3hCLDRDQUFBLENBQUFDLGFBQUEsV0FBSSxDQUFDLGVBQ0xELDRDQUFBLENBQUFDLGFBQUEsNEJBQU1ELDRDQUFBLENBQUFDLGFBQUEsQ0FBQ2dDLDBEQUFVLE1BQUMsQ0FBQyxLQUFDLEVBQUNSLFdBQWtCLENBQUMsZUFDeEN6Qiw0Q0FBQSxDQUFBQyxhQUFBLFdBQUksQ0FBQyxlQUNMRCw0Q0FBQSxDQUFBQyxhQUFBLENBQUNjLE1BQU07SUFBQ21CLE9BQU8sRUFBRUgsZ0JBQWlCO0lBQUNJLEtBQUssRUFBRU47RUFBb0IsR0FBRUEsbUJBQTRCLENBQUMsZUFDN0Y3Qiw0Q0FBQSxDQUFBQyxhQUFBLFdBQUksQ0FBQyxFQUNKMEIsVUFBVSxnQkFBRzNCLDRDQUFBLENBQUFDLGFBQUEsQ0FBQ1UsU0FBUztJQUFDeUIsR0FBRyxFQUFFVixRQUFTO0lBQUNaLEtBQUssRUFBRU07RUFBZ0IsQ0FBQyxDQUFDLEdBQUcsSUFDOUQsQ0FDRCxDQUFDO0FBRXRCLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDeEZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNiO0FBQ3FDO0FBQ0g7QUFDYjtBQUNZO0FBRXBELE1BQU1pQixhQUFhLEdBQUc3Qix5REFBTSxDQUFDQyxHQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFFTSxNQUFNNkIsT0FBTyxHQUFHOUIseURBQU0sQ0FBQ0MsR0FBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRUQsTUFBTThCLENBQUMsR0FBRy9CLHlEQUFNLENBQUNnQyxDQUFFO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUVELE1BQU1DLENBQUMsR0FBR2pDLHlEQUFNLENBQUNDLEdBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFFRCxNQUFNaUMsTUFBTSxHQUFJN0IsS0FBSyxJQUFLO0VBRXRCLE1BQU04QixTQUFTLEdBQUduQyx5REFBTSxDQUFDb0MsR0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0VBRUQsb0JBQVE1Qyw0Q0FBQSxDQUFBQyxhQUFBLENBQUMwQyxTQUFTO0lBQUNQLEdBQUcsRUFBRXZCLEtBQUssQ0FBQ2dDO0VBQU8sQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFFTSxNQUFNQyxTQUFTLEdBQUdBLENBQUEsS0FBTTtFQUMzQixvQkFBUTlDLDRDQUFBLENBQUFDLGFBQUEsQ0FBQ3FDLE9BQU8scUJBQ1J0Qyw0Q0FBQSxDQUFBQyxhQUFBLENBQUNvQyxhQUFhLHFCQUNWckMsNENBQUEsQ0FBQUMsYUFBQSxDQUFDc0MsQ0FBQztJQUFDUSxJQUFJLEVBQUM7RUFBcUksZ0JBQ3pJL0MsNENBQUEsQ0FBQUMsYUFBQSxDQUFDK0MsOERBQWMsTUFBQyxDQUFDLHlSQUEyRCxDQUNyRSxDQUFDLGVBQ2hCaEQsNENBQUEsQ0FBQUMsYUFBQSxXQUFJLENBQUMsZUFDTEQsNENBQUEsQ0FBQUMsYUFBQSxDQUFDd0MsQ0FBQyxRQUFDLGtLQUFpQyxDQUFDLGVBQ3JDekMsNENBQUEsQ0FBQUMsYUFBQSxXQUFJLENBQUMsZUFDTEQsNENBQUEsQ0FBQUMsYUFBQSxDQUFDeUMsTUFBTTtJQUFDRyxNQUFNLEVBQUVJLDZEQUFRQTtFQUFDLENBQUMsQ0FDckIsQ0FBQztBQUVsQixDQUFDO0FBR00sTUFBTUMsUUFBUSxHQUFHQSxDQUFBLEtBQU07RUFDMUIsb0JBQVFsRCw0Q0FBQSxDQUFBQyxhQUFBLENBQUNxQyxPQUFPLHFCQUNSdEMsNENBQUEsQ0FBQUMsYUFBQSxDQUFDb0MsYUFBYSxxQkFDVnJDLDRDQUFBLENBQUFDLGFBQUEsQ0FBQ3NDLENBQUM7SUFBQ1EsSUFBSSxFQUFDO0VBQXdJLGdCQUM1SS9DLDRDQUFBLENBQUFDLGFBQUEsQ0FBQytDLDhEQUFjLE1BQUMsQ0FBQywyREFBYSxDQUFDLGVBQ25DaEQsNENBQUEsQ0FBQUMsYUFBQSxDQUFDc0MsQ0FBQztJQUFDUSxJQUFJLEVBQUM7RUFBcUksZ0JBQ3pJL0MsNENBQUEsQ0FBQUMsYUFBQSxDQUFDK0MsOERBQWMsTUFBQyxDQUFDLHNMQUFvQyxDQUM5QyxDQUFDLGVBQ2hCaEQsNENBQUEsQ0FBQUMsYUFBQSxXQUFJLENBQUMsZUFDTEQsNENBQUEsQ0FBQUMsYUFBQSxDQUFDd0MsQ0FBQyxRQUFDLG9DQUFZLENBQUMsZUFDaEJ6Qyw0Q0FBQSxDQUFBQyxhQUFBLFdBQUksQ0FBQyxlQUNMRCw0Q0FBQSxDQUFBQyxhQUFBLENBQUN5QyxNQUFNO0lBQUNHLE1BQU0sRUFBRU0seUVBQVFBO0VBQUMsQ0FBQyxDQUFDLGVBQzNCbkQsNENBQUEsQ0FBQUMsYUFBQSxDQUFDd0MsQ0FBQyxRQUFDLHlEQUFhLENBQUMsZUFDakJ6Qyw0Q0FBQSxDQUFBQyxhQUFBLFdBQUksQ0FBQyxlQUNMRCw0Q0FBQSxDQUFBQyxhQUFBLENBQUN5QyxNQUFNO0lBQUNHLE1BQU0sRUFBRU8sdUVBQVdBO0VBQUMsQ0FBQyxDQUN4QixDQUFDO0FBRWxCLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDbEdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ2E7QUFDTztBQUNsQjtBQUNZO0FBQ007QUFDQztBQUUvQyxNQUFNQyxhQUFhLEdBQUc3Qyx5REFBTSxDQUFDQyxHQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUVELE1BQU02QyxlQUFlLEdBQUc5Qyx5REFBTSxDQUFDQyxHQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUVNLE1BQU1ILFdBQVcsR0FBR0EsQ0FBQSxLQUFNO0VBRTdCLE1BQU1pRCxLQUFLLEdBQUdDLCtEQUFXLENBQUNDLEtBQUssSUFBSUEsS0FBSyxDQUFDRixLQUFLLENBQUM7RUFDL0MsTUFBTUcsYUFBYSxHQUFHRiwrREFBVyxDQUFDQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsYUFBYSxDQUFDO0VBQy9ELE1BQU1DLFNBQVMsR0FBR0gsK0RBQVcsQ0FBQ0MsS0FBSyxJQUFJQSxLQUFLLENBQUNFLFNBQVMsQ0FBQztFQUN2RCxNQUFNQyxpQkFBaUIsR0FBRyxDQUNyQixlQUFjLEVBQ2QsNkJBQTRCLEVBQzVCLG1DQUFrQyxFQUNsQyxnREFBK0MsRUFDL0MsNEJBQTJCLEVBQzNCLGFBQVksRUFDYixnQ0FBZ0MsQ0FBQztFQUVyQyxJQUFJQyxRQUFRLEdBQUlGLFNBQVMsS0FBRyxDQUFDLENBQUMsZ0JBQUUzRCw0Q0FBQSxDQUFBQyxhQUFBLENBQUNpRCxrREFBUSxNQUFDLENBQUMsZ0JBQUNsRCw0Q0FBQSxDQUFBQyxhQUFBLENBQUM2QyxtREFBUyxNQUFDLENBQUM7RUFFeEQsb0JBQ0k5Qyw0Q0FBQSxDQUFBQyxhQUFBLENBQUFELDRDQUFBLENBQUE4RCxRQUFBLHFCQUNJOUQsNENBQUEsQ0FBQUMsYUFBQSxDQUFDOEQsNERBQWE7SUFBQ0osU0FBUyxFQUFFQTtFQUFVLENBQUMsQ0FBQyxlQUN0QzNELDRDQUFBLENBQUFDLGFBQUEsQ0FBQytELDREQUFhO0lBQUNDLFFBQVEsRUFBRUw7RUFBa0IsQ0FBQyxDQUFDLEVBQzVDRixhQUFhLGdCQUNWMUQsNENBQUEsQ0FBQUMsYUFBQSxDQUFDb0QsYUFBYSxxQkFDZHJELDRDQUFBLENBQUFDLGFBQUEsQ0FBQ3FELGVBQWUsUUFDWEMsS0FBSyxDQUFDVyxHQUFHLENBQUNDLElBQUksaUJBQ1huRSw0Q0FBQSxDQUFBQyxhQUFBLENBQUNnQiwwQ0FBSTtJQUNETyxJQUFJLEVBQUUyQyxJQUFJLENBQUMzQyxJQUFLO0lBQ2hCRSxRQUFRLEVBQUV5QyxJQUFJLENBQUN6QyxRQUFTO0lBQ3hCRCxXQUFXLEVBQUUwQyxJQUFJLENBQUMxQyxXQUFZO0lBQzlCMkMsR0FBRyxFQUFFRCxJQUFJLENBQUNFLEVBQUUsQ0FBQ0M7RUFBSyxDQUFDLENBQzFCLENBQW1CLENBQWdCLENBQUMsR0FBSVQsUUFBVyxDQUFDO0FBQ3pFLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDcEREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUNHO0FBQ3lDO0FBQzNCO0FBQ1U7QUFFeEQsTUFBTTlDLE1BQU0sR0FBR1AseURBQU0sQ0FBQ0MsR0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFFSixNQUFNOEQsS0FBSyxHQUFHL0QseURBQU0sQ0FBQ2dFLEtBQU07QUFDM0I7QUFDQTtBQUNBLFdBQVczRCxLQUFLLElBQUlBLEtBQUssQ0FBQzRELFVBQVUsSUFBSSxlQUFnQjtBQUN4RCxDQUFDO0FBR0QsTUFBTUMsVUFBVSxHQUFHbEUseURBQU0sQ0FBQ0MsR0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUVELE1BQU1rRSxXQUFXLEdBQUduRSx5REFBTSxDQUFDQyxHQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUVELE1BQU1tRSxVQUFVLEdBQUdwRSx5REFBTSxDQUFDcUUsSUFBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRUQsTUFBTUMsS0FBSyxHQUFHdEUseURBQU0sQ0FBQ0MsR0FBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFFdEIsTUFBTXNFLElBQUksR0FBR3ZFLHlEQUFNLENBQUNDLEdBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBRWYsTUFBTXNELGFBQWEsR0FBSWxELEtBQUssSUFBSztFQUVwQyxNQUFNbUUsV0FBVyxHQUFHQyxvREFBTSxDQUFDLENBQUM7RUFDNUIsTUFBTUMsS0FBSyxHQUFHMUIsK0RBQVcsQ0FBQ0MsS0FBSyxJQUFJQSxLQUFLLENBQUN5QixLQUFLLENBQUM7RUFDL0MsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxDQUFDLENBQUM7RUFDOUIsTUFBTTtJQUFDbEUsTUFBTTtJQUFFSjtFQUFLLENBQUMsR0FBR0ssMEVBQW1CLENBQUMsQ0FBQztFQUU3QyxTQUFTa0UsT0FBT0EsQ0FBQSxFQUFHO0lBQ2YsSUFBSUMsR0FBRyxHQUFHQyxNQUFNLENBQUNQLFdBQVcsQ0FBQ1EsT0FBTyxDQUFDckQsS0FBSyxDQUFDO0lBQzNDLElBQUltRCxHQUFHLENBQUNHLE1BQU0sR0FBRyxDQUFDLElBQUlILEdBQUcsQ0FBQ0ksUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO01BQ3JDUCxRQUFRLENBQUM7UUFBQ1EsSUFBSSxFQUFFLE9BQU87UUFBRUMsR0FBRyxFQUFFO01BQWlFLENBQUMsQ0FBQztJQUNyRyxDQUFDLE1BQU07TUFDSFQsUUFBUSxDQUFDO1FBQUNRLElBQUksRUFBRSxRQUFRO1FBQUVFLEtBQUssRUFBRVA7TUFBRyxDQUFDLENBQUM7SUFDMUM7RUFDSjtFQUVBLFNBQVNRLGNBQWNBLENBQUNDLEtBQUssRUFBRTtJQUMzQixJQUFJQSxLQUFLLENBQUMzQixHQUFHLEtBQUssT0FBTyxFQUFFO01BQ3ZCaUIsT0FBTyxDQUFDLENBQUM7SUFDYjtFQUNKO0VBRUEsb0JBQ0lyRiw0Q0FBQSxDQUFBQyxhQUFBLENBQUFELDRDQUFBLENBQUE4RCxRQUFBLHFCQUNJOUQsNENBQUEsQ0FBQUMsYUFBQSxDQUFDMEUsV0FBVyxxQkFDUjNFLDRDQUFBLENBQUFDLGFBQUEsQ0FBQ3lFLFVBQVUscUJBQ1AxRSw0Q0FBQSxDQUFBQyxhQUFBLENBQUMyRSxVQUFVLHFCQUFDNUUsNENBQUEsQ0FBQUMsYUFBQSxDQUFDK0YsbUVBQW1CLE1BQUMsQ0FBQyxpTEFBNkMsQ0FBQyxlQUNoRmhHLDRDQUFBLENBQUFDLGFBQUEsQ0FBQ3NFLEtBQUs7SUFBQzBCLFVBQVUsRUFBRUgsY0FBZTtJQUFDSSxHQUFHLEVBQUVsQixXQUFZO0lBQUNXLElBQUksRUFBQyxNQUFNO0lBQ3pEUSxXQUFXLEVBQUMsaUpBQThCO0lBQUMxQixVQUFVLEVBQUM7RUFBTyxDQUFDLENBQzdELENBQUMsZUFDYnpFLDRDQUFBLENBQUFDLGFBQUEsQ0FBQ2MsTUFBTTtJQUFDb0IsS0FBSyxFQUFDLEVBQUU7SUFBQ0QsT0FBTyxFQUFFbUQ7RUFBUSxHQUFDLGdDQUFhLENBQ3ZDLENBQUMsRUFDYkgsS0FBSyxLQUFLLEVBQUUsZ0JBQUdsRiw0Q0FBQSxDQUFBQyxhQUFBLENBQUM2RSxLQUFLLHFCQUFDOUUsNENBQUEsQ0FBQUMsYUFBQSxDQUFDbUcsMEVBQTBCLE1BQUMsQ0FBQyxFQUFDbEIsS0FBSyxlQUFDbEYsNENBQUEsQ0FBQUMsYUFBQSxDQUFDbUcsMEVBQTBCLE1BQUMsQ0FBUSxDQUFDLEdBQUcsSUFBSSxFQUN0R3ZGLEtBQUssQ0FBQzhDLFNBQVMsS0FBSyxDQUFDLGdCQUNsQjNELDRDQUFBLENBQUFDLGFBQUEsQ0FBQzhFLElBQUkscUJBQUMvRSw0Q0FBQSxDQUFBQyxhQUFBLENBQUNtRywwRUFBMEIsTUFBQyxDQUFDLGdHQUFpQixlQUFBcEcsNENBQUEsQ0FBQUMsYUFBQSxDQUFDbUcsMEVBQTBCLE1BQUMsQ0FBTyxDQUFDLEdBQUcsSUFDakcsQ0FBQztBQUVYLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDbkdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUQ7QUFDTDtBQUNDO0FBQ0U7QUFDUTtBQUUvRCxNQUFNQyxlQUFlLEdBQUc3Rix5REFBTSxDQUFDQyxHQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUVuQixNQUFNNkYsYUFBYSxHQUFHOUYsaUVBQU0sQ0FBQzZGLGVBQWUsQ0FBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFFTSxNQUFNRSxXQUFXLEdBQUcvRix5REFBTSxDQUFDQyxHQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRU0sTUFBTStGLDBCQUEwQixHQUFHaEcseURBQU0sQ0FBQ0MsR0FBSTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRUQsTUFBTWdHLE1BQU0sR0FBR0MsMkRBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhN0YsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWFELEtBQUssSUFBSUEsS0FBSyxDQUFDOEYsSUFBSztBQUNqQztBQUNBLENBQUM7QUFFRCxNQUFNQyxNQUFNLEdBQUdGLDJEQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTdGLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhRCxLQUFLLElBQUlBLEtBQUssQ0FBQzhGLElBQUs7QUFDakM7QUFDQSxDQUFDO0FBR00sTUFBTUUsZ0JBQWdCLEdBQUdyRyx5REFBTSxDQUFDQyxHQUFJO0FBQzNDLFdBQVdJLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFNO0FBQ2hDLFVBQVVELEtBQUssSUFBSUEsS0FBSyxDQUFDOEYsSUFBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU5RixLQUFLLElBQUtBLEtBQUssQ0FBQ2lHLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFJTCxNQUFNLEdBQUdHLE1BQU87QUFDdEUsQ0FBQztBQUVNLE1BQU01QyxhQUFhLEdBQUluRCxLQUFLLElBQUs7RUFFcEMsTUFBTSxDQUFDb0QsUUFBUSxDQUFFLEdBQUczQyxzREFBUSxDQUFDVCxLQUFLLENBQUNvRCxRQUFRLENBQUM7RUFFNUMsTUFBTSxDQUFDOEMsWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBRzFGLHNEQUFRLENBQUMsTUFBTSxDQUFDO0VBQ3hELE1BQU0sQ0FBQzJGLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUc1RixzREFBUSxDQUFDLE1BQU0sQ0FBQztFQUN0RCxNQUFNLENBQUN3RixTQUFTLEVBQUVLLFlBQVksQ0FBQyxHQUFHN0Ysc0RBQVEsQ0FBQyxDQUFDLENBQUM7RUFDN0MsTUFBTTtJQUFDSixNQUFNO0lBQUVKO0VBQUssQ0FBQyxHQUFHSywwRUFBbUIsQ0FBQyxDQUFDO0VBQzdDLE1BQU1pRyxnQkFBZ0IsR0FBR25DLG9EQUFNLENBQUMsQ0FBQzs7RUFFakM7RUFDQTFELHVEQUFTLENBQUMsTUFBTTtJQUNaOEYsY0FBYyxDQUFDO01BQUNDLE1BQU0sRUFBQ0YsZ0JBQWdCLENBQUM1QjtJQUFPLENBQUMsQ0FBQztFQUNyRCxDQUFDLEVBQUUsQ0FBQzFFLEtBQUssQ0FBQyxDQUFDO0VBRVgsTUFBTXFFLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQyxDQUFDO0VBRTlCLFNBQVNpQyxjQUFjQSxDQUFDdEIsS0FBSyxFQUFFO0lBQzNCcUIsZ0JBQWdCLENBQUM1QixPQUFPLEdBQUdPLEtBQUssQ0FBQ3VCLE1BQU07SUFDdkMsSUFBSUMsbUJBQW1CLEdBQUd4QixLQUFLLENBQUN1QixNQUFNLENBQUNFLHFCQUFxQixDQUFDLENBQUMsQ0FBQzFHLEtBQUs7SUFDcEUsSUFBSTJHLGtCQUFrQixHQUFHMUIsS0FBSyxDQUFDdUIsTUFBTSxDQUFDRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUNiLElBQUksR0FBRyxFQUFFO0lBQ3ZFSyxlQUFlLENBQUNPLG1CQUFtQixHQUFHLElBQUksQ0FBQztJQUMzQ0wsY0FBYyxDQUFDTyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDekMsSUFBSUMsT0FBTyxHQUFHWixTQUFTLEdBQUcsQ0FBQztJQUMzQkssWUFBWSxDQUFDTyxPQUFPLENBQUM7RUFDekI7RUFFQSxTQUFTQyxvQkFBb0JBLENBQUNDLGVBQWUsRUFBRTdCLEtBQUssRUFBRTtJQUNsRHNCLGNBQWMsQ0FBQ3RCLEtBQUssQ0FBQztJQUNyQixJQUFJOEIscUJBQXFCLEdBQUdELGVBQWUsQ0FBQ0UsT0FBTztJQUNuREMsT0FBTyxDQUFDQyxHQUFHLENBQUNILHFCQUFxQixDQUFDO0lBQ2xDLFFBQVFBLHFCQUFxQjtNQUN6QixLQUFNLCtCQUE4QjtRQUNoQzFDLFFBQVEsQ0FBQztVQUFDUSxJQUFJLEVBQUU7UUFBVSxDQUFDLENBQUM7UUFDNUI7TUFDSixLQUFNLGVBQWM7UUFDaEJSLFFBQVEsQ0FBQztVQUFDUSxJQUFJLEVBQUU7UUFBUyxDQUFDLENBQUM7UUFDM0I7TUFDSixLQUFNLDZCQUE0QjtRQUM5QlIsUUFBUSxDQUFDO1VBQUNRLElBQUksRUFBRTtRQUFTLENBQUMsQ0FBQztRQUMzQjtNQUNKLEtBQU0sbUNBQWtDO1FBQ3BDUixRQUFRLENBQUM7VUFBQ1EsSUFBSSxFQUFFO1FBQVMsQ0FBQyxDQUFDO1FBQzNCO01BQ0osS0FBTSxnREFBK0M7UUFDakRSLFFBQVEsQ0FBQztVQUFDUSxJQUFJLEVBQUU7UUFBUyxDQUFDLENBQUM7UUFDM0I7TUFDSixLQUFNLDRCQUEyQjtRQUM3QlIsUUFBUSxDQUFDO1VBQUNRLElBQUksRUFBRTtRQUFTLENBQUMsQ0FBQztRQUMzQjtJQUNSO0VBQ0o7RUFFQSxTQUFTc0MsY0FBY0EsQ0FBQ0gsT0FBTyxFQUFFO0lBQzdCLElBQUlBLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBRyxnQ0FBZ0MsRUFBQztNQUM5Q1QsY0FBYyxDQUFDUyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDMUIzQyxRQUFRLENBQUM7UUFBQ1EsSUFBSSxFQUFFO01BQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsTUFDSTtNQUNEMEIsY0FBYyxDQUFDUyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDMUIzQyxRQUFRLENBQUM7UUFBQ1EsSUFBSSxFQUFFO01BQVcsQ0FBQyxDQUFDO0lBQ2pDO0VBQ0o7RUFFQSxJQUFJdUMsZ0JBQWdCLEdBQUdqRSxRQUFRLENBQUNDLEdBQUcsQ0FBRTRELE9BQU8sSUFDeENBLE9BQU8sS0FBSyxhQUFhLElBQUlBLE9BQU8sS0FBSyxnQ0FBZ0MsZ0JBQ3JFOUgsNENBQUEsQ0FBQUMsYUFBQSxDQUFDcUcsYUFBYTtJQUFFcEUsT0FBTyxFQUFFQSxDQUFBLEtBQUs7TUFDMUIsSUFBSWlHLEdBQUcsR0FBRyxDQUFDTCxPQUFPLEVBQUMvQixLQUFLLENBQUM7TUFDekJrQyxjQUFjLENBQUNFLEdBQUcsQ0FBQztJQUV2QixDQUFFO0lBQUMvRCxHQUFHLEVBQUUwRDtFQUFRLEdBQUMsR0FBQyxlQUFBOUgsNENBQUEsQ0FBQUMsYUFBQSxDQUFDbUksNERBQVksTUFBQyxDQUFDLEVBQUNOLE9BQXVCLENBQUMsZ0JBQ3hEOUgsNENBQUEsQ0FBQUMsYUFBQSxDQUFDcUcsYUFBYTtJQUFFSixHQUFHLEVBQUVrQixnQkFBaUI7SUFBQ2xGLE9BQU8sRUFBRW1HLENBQUMsSUFBSVYsb0JBQW9CLENBQUM7TUFBQ0c7SUFBTyxDQUFDLEVBQUVPLENBQUMsQ0FBRTtJQUFDakUsR0FBRyxFQUFFMEQ7RUFBUSxHQUFDLEdBQUMsZUFBQTlILDRDQUFBLENBQUFDLGFBQUEsQ0FBQ3FJLHdEQUFRLE1BQUMsQ0FBQyxFQUFDUixPQUF1QixDQUNwSixDQUFDO0VBRUYsb0JBQ0k5SCw0Q0FBQSxDQUFBQyxhQUFBLENBQUFELDRDQUFBLENBQUE4RCxRQUFBLHFCQUNJOUQsNENBQUEsQ0FBQUMsYUFBQSxDQUFDdUcsMEJBQTBCLHFCQUN2QnhHLDRDQUFBLENBQUFDLGFBQUEsQ0FBQ29HLGVBQWU7SUFBQ2tDLFFBQVEsRUFBRUw7RUFBaUIsQ0FBQyxDQUNyQixDQUFDLGVBQzdCbEksNENBQUEsQ0FBQUMsYUFBQSxDQUFDc0csV0FBVyxxQkFBQ3ZHLDRDQUFBLENBQUFDLGFBQUEsQ0FBQzRHLGdCQUFnQjtJQUFDL0YsS0FBSyxFQUFFaUcsWUFBYTtJQUFDSixJQUFJLEVBQUVNLFdBQVk7SUFBQ0gsU0FBUyxFQUFFQTtFQUFVLENBQUMsQ0FBYyxDQUM3RyxDQUFDO0FBRVgsQ0FBQyxDOzs7Ozs7Ozs7OztBQ3hLRCxVQUFVLHFCQUF1Qix5REFBeUQsZ0JBQWdCLGdFQUFnRSxjOzs7Ozs7Ozs7OztBQ0ExSyxVQUFVLHFCQUF1Qix1REFBdUQsZ0JBQWdCLGlFQUFpRSxjOzs7Ozs7Ozs7OztBQ0F6SyxVQUFVLHFCQUF1Qiw4Q0FBOEMsZ0JBQWdCLGdFQUFnRSxjOzs7Ozs7Ozs7Ozs7QUNBL0o7QUFBQTtBQUFBO0FBQUE7QUFBNEM7QUFFNUMsU0FBUzBCLG1CQUFtQkEsQ0FBQSxFQUFHO0VBQzNCLE1BQU07SUFBRUMsVUFBVSxFQUFFM0gsS0FBSztJQUFFNEgsV0FBVyxFQUFFeEg7RUFBTyxDQUFDLEdBQUd5SCxNQUFNO0VBQ3pELE9BQU87SUFDSDdILEtBQUs7SUFDTEk7RUFDSixDQUFDO0FBQ0w7QUFFZSxTQUFTQyxtQkFBbUJBLENBQUEsRUFBRztFQUMxQyxNQUFNLENBQUN5SCxnQkFBZ0IsRUFBRUMsbUJBQW1CLENBQUMsR0FBR3ZILHNEQUFRLENBQUNrSCxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7RUFFL0VqSCx1REFBUyxDQUFDLE1BQU07SUFDWixTQUFTdUgsWUFBWUEsQ0FBQSxFQUFHO01BQ3BCRCxtQkFBbUIsQ0FBQ0wsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQzlDO0lBRUFHLE1BQU0sQ0FBQ0ksZ0JBQWdCLENBQUMsUUFBUSxFQUFFRCxZQUFZLENBQUM7SUFDL0MsT0FBTyxNQUFNSCxNQUFNLENBQUNLLG1CQUFtQixDQUFDLFFBQVEsRUFBRUYsWUFBWSxDQUFDO0VBQ25FLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixPQUFPRixnQkFBZ0I7QUFDM0IsQzs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNPO0FBQ1Q7QUFDeEJLLGdEQUFRLENBQUNDLE1BQU0sZUFBQ2xKLDRDQUFBLENBQUFDLGFBQUEsQ0FBQ0YsNENBQUcsTUFBQyxDQUFDLEVBQUVvSixRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNIMUQ7QUFBQTtBQUFPLElBQUlDLHFCQUFxQixHQUFHLEVBQUUsQzs7Ozs7Ozs7Ozs7O0FDQXJDO0FBQUE7QUFBQSxJQUFJQyxPQUFPLEdBQUcsQ0FDVjtFQUNJLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLGFBQWEsRUFBRSx5REFBeUQ7RUFDeEUsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDRCQUE0QjtFQUNwQyxhQUFhLEVBQUUsMEJBQTBCO0VBQ3pDLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsYUFBYSxFQUFFLDZCQUE2QjtFQUM1QyxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLGFBQWEsRUFBRSxtRUFBbUU7RUFDbEYsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDZCQUE2QjtFQUNyQyxhQUFhLEVBQUUscURBQXFEO0VBQ3BFLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsYUFBYSxFQUFFLGdFQUFnRTtFQUMvRSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsaUNBQWlDO0VBQ3pDLGFBQWEsRUFBRSxzREFBc0Q7RUFDckUsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDRCQUE0QjtFQUNwQyxhQUFhLEVBQUUsZ0RBQWdEO0VBQy9ELFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx1QkFBdUI7RUFDL0IsYUFBYSxFQUFFLCtEQUErRDtFQUM5RSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLGFBQWEsRUFBRSwwREFBMEQ7RUFDekUsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDBCQUEwQjtFQUNsQyxhQUFhLEVBQUUsMERBQTBEO0VBQ3pFLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx5QkFBeUI7RUFDakMsYUFBYSxFQUFFLDREQUE0RDtFQUMzRSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLGFBQWEsRUFBRSx1Q0FBdUM7RUFDdEQsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHFCQUFxQjtFQUM3QixhQUFhLEVBQUUsb0VBQW9FO0VBQ25GLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw4QkFBOEI7RUFDdEMsYUFBYSxFQUFFLHVEQUF1RDtFQUN0RSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsd0JBQXdCO0VBQ2hDLGFBQWEsRUFBRSw4Q0FBOEM7RUFDN0QsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHdCQUF3QjtFQUNoQyxhQUFhLEVBQUUsNEJBQTRCO0VBQzNDLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwwQkFBMEI7RUFDbEMsYUFBYSxFQUFFLG1FQUFtRTtFQUNsRixVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNEJBQTRCO0VBQ3BDLGFBQWEsRUFBRSw0REFBNEQ7RUFDM0UsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDZCQUE2QjtFQUNyQyxhQUFhLEVBQUUsa0VBQWtFO0VBQ2pGLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsYUFBYSxFQUFFLHlCQUF5QjtFQUN4QyxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLGFBQWEsRUFBRSw2QkFBNkI7RUFDNUMsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLCtCQUErQjtFQUN2QyxhQUFhLEVBQUUscURBQXFEO0VBQ3BFLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx3QkFBd0I7RUFDaEMsYUFBYSxFQUFFLG9FQUFvRTtFQUNuRixVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsd0JBQXdCO0VBQ2hDLGFBQWEsRUFBRSxvRUFBb0U7RUFDbkYsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHlCQUF5QjtFQUNqQyxhQUFhLEVBQUUseUVBQXlFO0VBQ3hGLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsYUFBYSxFQUFFLHdFQUF3RTtFQUN2RixVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsd0JBQXdCO0VBQ2hDLGFBQWEsRUFBRSxtQ0FBbUM7RUFDbEQsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHlCQUF5QjtFQUNqQyxhQUFhLEVBQUUsNEJBQTRCO0VBQzNDLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwyQkFBMkI7RUFDbkMsYUFBYSxFQUFFLG9DQUFvQztFQUNuRCxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMEJBQTBCO0VBQ2xDLGFBQWEsRUFBRSx1QkFBdUI7RUFDdEMsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxhQUFhLEVBQUUsK0RBQStEO0VBQzlFLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwyQkFBMkI7RUFDbkMsYUFBYSxFQUFFLHlCQUF5QjtFQUN4QyxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNEJBQTRCO0VBQ3BDLGFBQWEsRUFBRSw0QkFBNEI7RUFDM0MsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDBCQUEwQjtFQUNsQyxhQUFhLEVBQUUsMEVBQTBFO0VBQ3pGLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxzQkFBc0I7RUFDOUIsYUFBYSxFQUFFLCtEQUErRDtFQUM5RSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLGFBQWEsRUFBRSx3REFBd0Q7RUFDdkUsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHlCQUF5QjtFQUNqQyxhQUFhLEVBQUUsOEVBQThFO0VBQzdGLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwyQkFBMkI7RUFDbkMsYUFBYSxFQUFFLGdFQUFnRTtFQUMvRSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMEJBQTBCO0VBQ2xDLGFBQWEsRUFBRSx5REFBeUQ7RUFDeEUsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHlCQUF5QjtFQUNqQyxhQUFhLEVBQUUsMkVBQTJFO0VBQzFGLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx3QkFBd0I7RUFDaEMsYUFBYSxFQUFFLHFFQUFxRTtFQUNwRixVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMEJBQTBCO0VBQ2xDLGFBQWEsRUFBRSx5REFBeUQ7RUFDeEUsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHdCQUF3QjtFQUNoQyxhQUFhLEVBQUUsOERBQThEO0VBQzdFLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsYUFBYSxFQUFFLHlFQUF5RTtFQUN4RixVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMkJBQTJCO0VBQ25DLGFBQWEsRUFBRSwwQkFBMEI7RUFDekMsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDBCQUEwQjtFQUNsQyxhQUFhLEVBQUUsa0NBQWtDO0VBQ2pELFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwwQkFBMEI7RUFDbEMsYUFBYSxFQUFFLG1FQUFtRTtFQUNsRixVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMkJBQTJCO0VBQ25DLGFBQWEsRUFBRSxpRUFBaUU7RUFDaEYsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDJCQUEyQjtFQUNuQyxhQUFhLEVBQUUsMERBQTBEO0VBQ3pFLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsYUFBYSxFQUFFLDZEQUE2RDtFQUM1RSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsdUJBQXVCO0VBQy9CLGFBQWEsRUFBRSxnRkFBZ0Y7RUFDL0YsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHdCQUF3QjtFQUNoQyxhQUFhLEVBQUUsMkVBQTJFO0VBQzFGLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwwQkFBMEI7RUFDbEMsYUFBYSxFQUFFLDREQUE0RDtFQUMzRSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMkJBQTJCO0VBQ25DLGFBQWEsRUFBRSxtRUFBbUU7RUFDbEYsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHlCQUF5QjtFQUNqQyxhQUFhLEVBQUUsbUVBQW1FO0VBQ2xGLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwwQkFBMEI7RUFDbEMsYUFBYSxFQUFFLDZEQUE2RDtFQUM1RSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMkJBQTJCO0VBQ25DLGFBQWEsRUFBRSw4REFBOEQ7RUFDN0UsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHdCQUF3QjtFQUNoQyxhQUFhLEVBQUUsNERBQTREO0VBQzNFLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxzQkFBc0I7RUFDOUIsYUFBYSxFQUFFLDJEQUEyRDtFQUMxRSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMEJBQTBCO0VBQ2xDLGFBQWEsRUFBRSxvRUFBb0U7RUFDbkYsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLG9CQUFvQjtFQUM1QixhQUFhLEVBQUUsZ0ZBQWdGO0VBQy9GLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsYUFBYSxFQUFFLGlFQUFpRTtFQUNoRixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNEJBQTRCO0VBQ3BDLGFBQWEsRUFBRSw4QkFBOEI7RUFDN0MsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDRCQUE0QjtFQUNwQyxhQUFhLEVBQUUsMkJBQTJCO0VBQzFDLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsYUFBYSxFQUFFLGlFQUFpRTtFQUNoRixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsd0JBQXdCO0VBQ2hDLGFBQWEsRUFBRSxvRUFBb0U7RUFDbkYsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxhQUFhLEVBQUUsK0RBQStEO0VBQzlFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw4QkFBOEI7RUFDdEMsYUFBYSxFQUFFLGdEQUFnRDtFQUMvRCxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLGFBQWEsRUFBRSxnQ0FBZ0M7RUFDL0MsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxhQUFhLEVBQUUsMkJBQTJCO0VBQzFDLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsYUFBYSxFQUFFLHVFQUF1RTtFQUN0RixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNEJBQTRCO0VBQ3BDLGFBQWEsRUFBRSw4QkFBOEI7RUFDN0MsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxhQUFhLEVBQUUsNkRBQTZEO0VBQzVFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwwQkFBMEI7RUFDbEMsYUFBYSxFQUFFLG9EQUFvRDtFQUNuRSxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLGFBQWEsRUFBRSw0RUFBNEU7RUFDM0YsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDJCQUEyQjtFQUNuQyxhQUFhLEVBQUUsNERBQTREO0VBQzNFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx3QkFBd0I7RUFDaEMsYUFBYSxFQUFFLDJGQUEyRjtFQUMxRyxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLGFBQWEsRUFBRSxzREFBc0Q7RUFDckUsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxhQUFhLEVBQUUsaUJBQWlCO0VBQ2hDLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsYUFBYSxFQUFFLG9EQUFvRDtFQUNuRSxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsd0JBQXdCO0VBQ2hDLGFBQWEsRUFBRSx3REFBd0Q7RUFDdkUsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxhQUFhLEVBQUUsZ0VBQWdFO0VBQy9FLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx5QkFBeUI7RUFDakMsYUFBYSxFQUFFLDRCQUE0QjtFQUMzQyxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUseUJBQXlCO0VBQ2pDLGFBQWEsRUFBRSxvQkFBb0I7RUFDbkMsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHNCQUFzQjtFQUM5QixhQUFhLEVBQUUseURBQXlEO0VBQ3hFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwyQkFBMkI7RUFDbkMsYUFBYSxFQUFFLDRCQUE0QjtFQUMzQyxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUseUJBQXlCO0VBQ2pDLGFBQWEsRUFBRSxvQ0FBb0M7RUFDbkQsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDBCQUEwQjtFQUNsQyxhQUFhLEVBQUUsNkVBQTZFO0VBQzVGLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx5QkFBeUI7RUFDakMsYUFBYSxFQUFFLHVFQUF1RTtFQUN0RixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLGFBQWEsRUFBRSx5QkFBeUI7RUFDeEMsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDRCQUE0QjtFQUNwQyxhQUFhLEVBQUUseUJBQXlCO0VBQ3hDLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsYUFBYSxFQUFFLDhEQUE4RDtFQUM3RSxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNEJBQTRCO0VBQ3BDLGFBQWEsRUFBRSwwREFBMEQ7RUFDekUsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDBCQUEwQjtFQUNsQyxhQUFhLEVBQUUsMkVBQTJFO0VBQzFGLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx1QkFBdUI7RUFDL0IsYUFBYSxFQUFFLG1FQUFtRTtFQUNsRixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLGFBQWEsRUFBRSxnRUFBZ0U7RUFDL0UsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGdDQUFnQztFQUN4QyxhQUFhLEVBQUUsbUVBQW1FO0VBQ2xGLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx3QkFBd0I7RUFDaEMsYUFBYSxFQUFFLDBEQUEwRDtFQUN6RSxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLGFBQWEsRUFBRSw4REFBOEQ7RUFDN0UsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDZCQUE2QjtFQUNyQyxhQUFhLEVBQUUsbUNBQW1DO0VBQ2xELFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw4QkFBOEI7RUFDdEMsYUFBYSxFQUFFLDBCQUEwQjtFQUN6QyxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUseUJBQXlCO0VBQ2pDLGFBQWEsRUFBRSx1RUFBdUU7RUFDdEYsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDZCQUE2QjtFQUNyQyxhQUFhLEVBQUUsb0NBQW9DO0VBQ25ELFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw4QkFBOEI7RUFDdEMsYUFBYSxFQUFFLDRCQUE0QjtFQUMzQyxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLGFBQWEsRUFBRSw0REFBNEQ7RUFDM0UsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHlCQUF5QjtFQUNqQyxhQUFhLEVBQUUsMkRBQTJEO0VBQzFFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwyQkFBMkI7RUFDbkMsYUFBYSxFQUFFLDJFQUEyRTtFQUMxRixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLGFBQWEsRUFBRSx1Q0FBdUM7RUFDdEQsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxhQUFhLEVBQUUsOEJBQThCO0VBQzdDLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxzQkFBc0I7RUFDOUIsYUFBYSxFQUFFLHVEQUF1RDtFQUN0RSxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMEJBQTBCO0VBQ2xDLGFBQWEsRUFBRSwyREFBMkQ7RUFDMUUsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGtDQUFrQztFQUMxQyxhQUFhLEVBQUUsMkVBQTJFO0VBQzFGLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx1Q0FBdUM7RUFDL0MsYUFBYSxFQUFFLHFFQUFxRTtFQUNwRixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNEJBQTRCO0VBQ3BDLGFBQWEsRUFBRSwrRUFBK0U7RUFDOUYsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDJCQUEyQjtFQUNuQyxhQUFhLEVBQUUseURBQXlEO0VBQ3hFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsYUFBYSxFQUFFLHNEQUFzRDtFQUNyRSxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMEJBQTBCO0VBQ2xDLGFBQWEsRUFBRSxtRUFBbUU7RUFDbEYsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDRCQUE0QjtFQUNwQyxhQUFhLEVBQUUsNERBQTREO0VBQzNFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsYUFBYSxFQUFFLGtCQUFrQjtFQUNqQyxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNEJBQTRCO0VBQ3BDLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDJCQUEyQjtFQUNuQyxhQUFhLEVBQUUsOERBQThEO0VBQzdFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsYUFBYSxFQUFFLHVEQUF1RDtFQUN0RSxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsd0JBQXdCO0VBQ2hDLGFBQWEsRUFBRSw4REFBOEQ7RUFDN0UsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxhQUFhLEVBQUUsaUNBQWlDO0VBQ2hELFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsYUFBYSxFQUFFLGdDQUFnQztFQUMvQyxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMkJBQTJCO0VBQ25DLGFBQWEsRUFBRSxvREFBb0Q7RUFDbkUsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDJCQUEyQjtFQUNuQyxhQUFhLEVBQUUsa0RBQWtEO0VBQ2pFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsYUFBYSxFQUFFLGlFQUFpRTtFQUNoRixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUseUJBQXlCO0VBQ2pDLGFBQWEsRUFBRSwwREFBMEQ7RUFDekUsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDJCQUEyQjtFQUNuQyxhQUFhLEVBQUUsMEZBQTBGO0VBQ3pHLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwwQkFBMEI7RUFDbEMsYUFBYSxFQUFFLG9FQUFvRTtFQUNuRixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMEJBQTBCO0VBQ2xDLGFBQWEsRUFBRSw0REFBNEQ7RUFDM0UsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGdDQUFnQztFQUN4QyxhQUFhLEVBQUUsaUZBQWlGO0VBQ2hHLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwyQkFBMkI7RUFDbkMsYUFBYSxFQUFFLHlCQUF5QjtFQUN4QyxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMEJBQTBCO0VBQ2xDLGFBQWEsRUFBRSw0QkFBNEI7RUFDM0MsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHdCQUF3QjtFQUNoQyxhQUFhLEVBQUUsOERBQThEO0VBQzdFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw4QkFBOEI7RUFDdEMsYUFBYSxFQUFFLHFFQUFxRTtFQUNwRixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLGFBQWEsRUFBRSx3RUFBd0U7RUFDdkYsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHlCQUF5QjtFQUNqQyxhQUFhLEVBQUUsNkRBQTZEO0VBQzVFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsYUFBYSxFQUFFLHNFQUFzRTtFQUNyRixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLGFBQWEsRUFBRSxtQ0FBbUM7RUFDbEQsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxhQUFhLEVBQUUsb0JBQW9CO0VBQ25DLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsYUFBYSxFQUFFLCtFQUErRTtFQUM5RixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsd0JBQXdCO0VBQ2hDLGFBQWEsRUFBRSxvRUFBb0U7RUFDbkYsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDJCQUEyQjtFQUNuQyxhQUFhLEVBQUUsaUZBQWlGO0VBQ2hHLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxtQkFBbUI7RUFDM0IsYUFBYSxFQUFFLHdEQUF3RDtFQUN2RSxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUscUJBQXFCO0VBQzdCLGFBQWEsRUFBRSxnRUFBZ0U7RUFDL0UsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLCtCQUErQjtFQUN2QyxhQUFhLEVBQUUscUZBQXFGO0VBQ3BHLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwwQkFBMEI7RUFDbEMsYUFBYSxFQUFFLG1FQUFtRTtFQUNsRixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLGFBQWEsRUFBRSw4REFBOEQ7RUFDN0UsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLCtCQUErQjtFQUN2QyxhQUFhLEVBQUUsa0VBQWtFO0VBQ2pGLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx5QkFBeUI7RUFDakMsYUFBYSxFQUFFLHdEQUF3RDtFQUN2RSxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUseUJBQXlCO0VBQ2pDLGFBQWEsRUFBRSxvREFBb0Q7RUFDbkUsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDJCQUEyQjtFQUNuQyxhQUFhLEVBQUUsdUVBQXVFO0VBQ3RGLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwwQkFBMEI7RUFDbEMsYUFBYSxFQUFFLHlDQUF5QztFQUN4RCxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUseUJBQXlCO0VBQ2pDLGFBQWEsRUFBRSxnQ0FBZ0M7RUFDL0MsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHdCQUF3QjtFQUNoQyxhQUFhLEVBQUUseURBQXlEO0VBQ3hFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsYUFBYSxFQUFFLCtEQUErRDtFQUM5RSxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLGFBQWEsRUFBRSwyREFBMkQ7RUFDMUUsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHdCQUF3QjtFQUNoQyxhQUFhLEVBQUUsZ0VBQWdFO0VBQy9FLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsYUFBYSxFQUFFLG1CQUFtQjtFQUNsQyxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMkJBQTJCO0VBQ25DLGFBQWEsRUFBRSx5QkFBeUI7RUFDeEMsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxhQUFhLEVBQUUsMkJBQTJCO0VBQzFDLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsYUFBYSxFQUFFLDRCQUE0QjtFQUMzQyxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLGFBQWEsRUFBRSxrRkFBa0Y7RUFDakcsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHdCQUF3QjtFQUNoQyxhQUFhLEVBQUUsK0RBQStEO0VBQzlFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwwQkFBMEI7RUFDbEMsYUFBYSxFQUFFLDBEQUEwRDtFQUN6RSxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUseUJBQXlCO0VBQ2pDLGFBQWEsRUFBRSw2REFBNkQ7RUFDNUUsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHlCQUF5QjtFQUNqQyxhQUFhLEVBQUUsMEJBQTBCO0VBQ3pDLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx5QkFBeUI7RUFDakMsYUFBYSxFQUFFLG1CQUFtQjtFQUNsQyxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLGFBQWEsRUFBRSw2RUFBNkU7RUFDNUYsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDZCQUE2QjtFQUNyQyxhQUFhLEVBQUUsMkNBQTJDO0VBQzFELFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsYUFBYSxFQUFFLDhCQUE4QjtFQUM3QyxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMkJBQTJCO0VBQ25DLGFBQWEsRUFBRSwrQkFBK0I7RUFDOUMsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDBCQUEwQjtFQUNsQyxhQUFhLEVBQUUsK0JBQStCO0VBQzlDLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsYUFBYSxFQUFFLHVFQUF1RTtFQUN0RixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMkJBQTJCO0VBQ25DLGFBQWEsRUFBRSw2Q0FBNkM7RUFDNUQsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHlCQUF5QjtFQUNqQyxhQUFhLEVBQUUsMEVBQTBFO0VBQ3pGLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwyQkFBMkI7RUFDbkMsYUFBYSxFQUFFLHVDQUF1QztFQUN0RCxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNEJBQTRCO0VBQ3BDLGFBQWEsRUFBRSx1QkFBdUI7RUFDdEMsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGdDQUFnQztFQUN4QyxhQUFhLEVBQUUsa0ZBQWtGO0VBQ2pHLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw4QkFBOEI7RUFDdEMsYUFBYSxFQUFFLG1GQUFtRjtFQUNsRyxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLGFBQWEsRUFBRSxzREFBc0Q7RUFDckUsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDBCQUEwQjtFQUNsQyxhQUFhLEVBQUUsMkRBQTJEO0VBQzFFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsYUFBYSxFQUFFLG9GQUFvRjtFQUNuRyxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUseUJBQXlCO0VBQ2pDLGFBQWEsRUFBRSx1RkFBdUY7RUFDdEcsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDJCQUEyQjtFQUNuQyxhQUFhLEVBQUUsb0RBQW9EO0VBQ25FLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx3QkFBd0I7RUFDaEMsYUFBYSxFQUFFLGlFQUFpRTtFQUNoRixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsZ0NBQWdDO0VBQ3hDLGFBQWEsRUFBRSw4QkFBOEI7RUFDN0MsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGdDQUFnQztFQUN4QyxhQUFhLEVBQUUsOEJBQThCO0VBQzdDLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx1QkFBdUI7RUFDL0IsYUFBYSxFQUFFLGtFQUFrRTtFQUNqRixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLGFBQWEsRUFBRSxnQ0FBZ0M7RUFDL0MsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDRCQUE0QjtFQUNwQyxhQUFhLEVBQUUsMEJBQTBCO0VBQ3pDLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw4QkFBOEI7RUFDdEMsYUFBYSxFQUFFLG9FQUFvRTtFQUNuRixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsdUJBQXVCO0VBQy9CLGFBQWEsRUFBRSxpRkFBaUY7RUFDaEcsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDRCQUE0QjtFQUNwQyxhQUFhLEVBQUUscUJBQXFCO0VBQ3BDLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsYUFBYSxFQUFFLHlDQUF5QztFQUN4RCxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLGFBQWEsRUFBRSxnRUFBZ0U7RUFDL0UsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDBCQUEwQjtFQUNsQyxhQUFhLEVBQUUsMkRBQTJEO0VBQzFFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwyQkFBMkI7RUFDbkMsYUFBYSxFQUFFLDJGQUEyRjtFQUMxRyxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUseUJBQXlCO0VBQ2pDLGFBQWEsRUFBRSxtQkFBbUI7RUFDbEMsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHlCQUF5QjtFQUNqQyxhQUFhLEVBQUUsMEJBQTBCO0VBQ3pDLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsYUFBYSxFQUFFLG1HQUFtRztFQUNsSCxVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsdUJBQXVCO0VBQy9CLGFBQWEsRUFBRSx5Q0FBeUM7RUFDeEQsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDJCQUEyQjtFQUNuQyxhQUFhLEVBQUUseURBQXlEO0VBQ3hFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsYUFBYSxFQUFFLHFFQUFxRTtFQUNwRixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNEJBQTRCO0VBQ3BDLGFBQWEsRUFBRSw4QkFBOEI7RUFDN0MsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDRCQUE0QjtFQUNwQyxhQUFhLEVBQUUsMEJBQTBCO0VBQ3pDLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsYUFBYSxFQUFFLDZFQUE2RTtFQUM1RixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLGFBQWEsRUFBRSxpR0FBaUc7RUFDaEgsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxhQUFhLEVBQUUsK0RBQStEO0VBQzlFLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwwQkFBMEI7RUFDbEMsYUFBYSxFQUFFLGlFQUFpRTtFQUNoRixVQUFVLEVBQUUsNkVBQTZFO0VBQ3pGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLGFBQWEsRUFBRSwyQkFBMkI7RUFDMUMsVUFBVSxFQUFFLDZFQUE2RTtFQUN6RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDRCQUE0QjtFQUNwQyxhQUFhLEVBQUUsNkJBQTZCO0VBQzVDLFVBQVUsRUFBRSw2RUFBNkU7RUFDekYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx1QkFBdUI7RUFDL0IsYUFBYSxFQUFFLGtEQUFrRDtFQUNqRSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMkJBQTJCO0VBQ25DLGFBQWEsRUFBRSw0RUFBNEU7RUFDM0YsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHlCQUF5QjtFQUNqQyxhQUFhLEVBQUUsNERBQTREO0VBQzNFLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwyQkFBMkI7RUFDbkMsYUFBYSxFQUFFLGtEQUFrRDtFQUNqRSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUscUJBQXFCO0VBQzdCLGFBQWEsRUFBRSw4QkFBOEI7RUFDN0MsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHFCQUFxQjtFQUM3QixhQUFhLEVBQUUsd0JBQXdCO0VBQ3ZDLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsYUFBYSxFQUFFLHVEQUF1RDtFQUN0RSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNEJBQTRCO0VBQ3BDLGFBQWEsRUFBRSxzQ0FBc0M7RUFDckQsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDJCQUEyQjtFQUNuQyxhQUFhLEVBQUUsNEJBQTRCO0VBQzNDLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx3QkFBd0I7RUFDaEMsYUFBYSxFQUFFLHFDQUFxQztFQUNwRCxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUseUJBQXlCO0VBQ2pDLGFBQWEsRUFBRSxtQ0FBbUM7RUFDbEQsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDBCQUEwQjtFQUNsQyxhQUFhLEVBQUUseURBQXlEO0VBQ3hFLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx5QkFBeUI7RUFDakMsYUFBYSxFQUFFLHdEQUF3RDtFQUN2RSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNEJBQTRCO0VBQ3BDLGFBQWEsRUFBRSxxREFBcUQ7RUFDcEUsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDZCQUE2QjtFQUNyQyxhQUFhLEVBQUUsZ0dBQWdHO0VBQy9HLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxzQkFBc0I7RUFDOUIsYUFBYSxFQUFFLGlEQUFpRDtFQUNoRSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsc0JBQXNCO0VBQzlCLGFBQWEsRUFBRSxxREFBcUQ7RUFDcEUsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHdCQUF3QjtFQUNoQyxhQUFhLEVBQUUsc0hBQXNIO0VBQ3JJLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxrQkFBa0I7RUFDMUIsYUFBYSxFQUFFLDJDQUEyQztFQUMxRCxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsa0JBQWtCO0VBQzFCLGFBQWEsRUFBRSxpQ0FBaUM7RUFDaEQsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHlCQUF5QjtFQUNqQyxhQUFhLEVBQUUsK0ZBQStGO0VBQzlHLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx3QkFBd0I7RUFDaEMsYUFBYSxFQUFFLHFFQUFxRTtFQUNwRixVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsY0FBYztFQUN0QixhQUFhLEVBQUUsa0NBQWtDO0VBQ2pELFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxjQUFjO0VBQ3RCLGFBQWEsRUFBRSxpQ0FBaUM7RUFDaEQsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHVCQUF1QjtFQUMvQixhQUFhLEVBQUUsOEJBQThCO0VBQzdDLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx1QkFBdUI7RUFDL0IsYUFBYSxFQUFFLCtCQUErQjtFQUM5QyxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsbUJBQW1CO0VBQzNCLGFBQWEsRUFBRSw4QkFBOEI7RUFDN0MsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLG1CQUFtQjtFQUMzQixhQUFhLEVBQUUsNkNBQTZDO0VBQzVELFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxrQkFBa0I7RUFDMUIsYUFBYSxFQUFFLHdCQUF3QjtFQUN2QyxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsa0JBQWtCO0VBQzFCLGFBQWEsRUFBRSxpQkFBaUI7RUFDaEMsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGlCQUFpQjtFQUN6QixhQUFhLEVBQUUsMkVBQTJFO0VBQzFGLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxtQkFBbUI7RUFDM0IsYUFBYSxFQUFFLDZFQUE2RTtFQUM1RixVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsZUFBZTtFQUN2QixhQUFhLEVBQUUsMEVBQTBFO0VBQ3pGLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxpQkFBaUI7RUFDekIsYUFBYSxFQUFFLHdEQUF3RDtFQUN2RSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsa0JBQWtCO0VBQzFCLGFBQWEsRUFBRSxpRUFBaUU7RUFDaEYsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLENBQ0o7QUFFRCxJQUFJQyxjQUFjLEdBQUcsQ0FDakI7RUFDSSxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGdDQUFnQztFQUN4QyxhQUFhLEVBQUUsNEVBQTRFO0VBQzNGLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxlQUFlO0VBQ3ZCLGFBQWEsRUFBRSwyQ0FBMkM7RUFDMUQsVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGVBQWU7RUFDdkIsYUFBYSxFQUFFLG9CQUFvQjtFQUNuQyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUseUJBQXlCO0VBQ2pDLGFBQWEsRUFBRSwwQ0FBMEM7RUFDekQsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHlCQUF5QjtFQUNqQyxhQUFhLEVBQUUsNEJBQTRCO0VBQzNDLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx3QkFBd0I7RUFDaEMsYUFBYSxFQUFFLG1GQUFtRjtFQUNsRyxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsNEJBQTRCO0VBQ3BDLGFBQWEsRUFBRSx3Q0FBd0M7RUFDdkQsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDRCQUE0QjtFQUNwQyxhQUFhLEVBQUUsaUNBQWlDO0VBQ2hELFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsYUFBYSxFQUFFLG9EQUFvRDtFQUNuRSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUseUJBQXlCO0VBQ2pDLGFBQWEsRUFBRSxtRkFBbUY7RUFDbEcsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHdCQUF3QjtFQUNoQyxhQUFhLEVBQUUsb0dBQW9HO0VBQ25ILFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxxQkFBcUI7RUFDN0IsYUFBYSxFQUFFLGtFQUFrRTtFQUNqRixVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUseUJBQXlCO0VBQ2pDLGFBQWEsRUFBRSxrSUFBa0k7RUFDakosVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHVCQUF1QjtFQUMvQixhQUFhLEVBQUUsaURBQWlEO0VBQ2hFLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx3QkFBd0I7RUFDaEMsYUFBYSxFQUFFLHVCQUF1QjtFQUN0QyxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLGFBQWEsRUFBRSxzR0FBc0c7RUFDckgsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDBCQUEwQjtFQUNsQyxhQUFhLEVBQUUsaURBQWlEO0VBQ2hFLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsYUFBYSxFQUFFLGtGQUFrRjtFQUNqRyxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsYUFBYTtFQUNyQixhQUFhLEVBQUUseUJBQXlCO0VBQ3hDLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxhQUFhO0VBQ3JCLGFBQWEsRUFBRSwwQ0FBMEM7RUFDekQsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLG9CQUFvQjtFQUM1QixhQUFhLEVBQUUsNERBQTREO0VBQzNFLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxlQUFlO0VBQ3ZCLGFBQWEsRUFBRSx3SEFBd0g7RUFDdkksVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLFlBQVk7RUFDcEIsYUFBYSxFQUFFLHFFQUFxRTtFQUNwRixVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsY0FBYztFQUN0QixhQUFhLEVBQUUsZ0NBQWdDO0VBQy9DLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxjQUFjO0VBQ3RCLGFBQWEsRUFBRSxtQ0FBbUM7RUFDbEQsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLFlBQVk7RUFDcEIsYUFBYSxFQUFFLDhEQUE4RDtFQUM3RSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsYUFBYTtFQUNyQixhQUFhLEVBQUUsNEVBQTRFO0VBQzNGLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxpQkFBaUI7RUFDekIsYUFBYSxFQUFFLHlHQUF5RztFQUN4SCxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsWUFBWTtFQUNwQixhQUFhLEVBQUUseUZBQXlGO0VBQ3hHLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxnQkFBZ0I7RUFDeEIsYUFBYSxFQUFFLHFHQUFxRztFQUNwSCxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsZ0JBQWdCO0VBQ3hCLGFBQWEsRUFBRSxtREFBbUQ7RUFDbEUsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGVBQWU7RUFDdkIsYUFBYSxFQUFFLHlCQUF5QjtFQUN4QyxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsZ0JBQWdCO0VBQ3hCLGFBQWEsRUFBRSx1QkFBdUI7RUFDdEMsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGdCQUFnQjtFQUN4QixhQUFhLEVBQUUscUNBQXFDO0VBQ3BELFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxlQUFlO0VBQ3ZCLGFBQWEsRUFBRSx5QkFBeUI7RUFDeEMsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGVBQWU7RUFDdkIsYUFBYSxFQUFFLHlCQUF5QjtFQUN4QyxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsZUFBZTtFQUN2QixhQUFhLEVBQUUsNkJBQTZCO0VBQzVDLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxlQUFlO0VBQ3ZCLGFBQWEsRUFBRSxrRUFBa0U7RUFDakYsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGNBQWM7RUFDdEIsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsZUFBZTtFQUN2QixhQUFhLEVBQUUsa0NBQWtDO0VBQ2pELFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxlQUFlO0VBQ3ZCLGFBQWEsRUFBRSw4SEFBOEg7RUFDN0ksVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGVBQWU7RUFDdkIsYUFBYSxFQUFFLDhCQUE4QjtFQUM3QyxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsZUFBZTtFQUN2QixhQUFhLEVBQUUsbUNBQW1DO0VBQ2xELFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxtQkFBbUI7RUFDM0IsYUFBYSxFQUFFLHNGQUFzRjtFQUNyRyxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsa0JBQWtCO0VBQzFCLGFBQWEsRUFBRSw2Q0FBNkM7RUFDNUQsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLGFBQWE7RUFDckIsYUFBYSxFQUFFLGdFQUFnRTtFQUMvRSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsZ0JBQWdCO0VBQ3hCLGFBQWEsRUFBRSx5REFBeUQ7RUFDeEUsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLFlBQVk7RUFDcEIsYUFBYSxFQUFFLGlFQUFpRTtFQUNoRixVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsZUFBZTtFQUN2QixhQUFhLEVBQUUscUNBQXFDO0VBQ3BELFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxnQkFBZ0I7RUFDeEIsYUFBYSxFQUFFLHNDQUFzQztFQUNyRCxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsYUFBYTtFQUNyQixhQUFhLEVBQUUsOEVBQThFO0VBQzdGLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxDQUFDO0FBRU4sSUFBSUMsUUFBUSxHQUFHLENBQ1g7RUFDSSxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHdDQUF3QztFQUNoRCxhQUFhLEVBQUUsNkVBQTZFO0VBQzVGLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxxQ0FBcUM7RUFDN0MsYUFBYSxFQUFFLHlEQUF5RDtFQUN4RSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsd0NBQXdDO0VBQ2hELGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHdDQUF3QztFQUNoRCxhQUFhLEVBQUUsdUNBQXVDO0VBQ3RELFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx3Q0FBd0M7RUFDaEQsYUFBYSxFQUFFLGtFQUFrRTtFQUNqRixVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUscURBQXFEO0VBQzdELGFBQWEsRUFBRSx1RUFBdUU7RUFDdEYsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDJDQUEyQztFQUNuRCxhQUFhLEVBQUUsbUNBQW1DO0VBQ2xELFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwyQ0FBMkM7RUFDbkQsYUFBYSxFQUFFLHdDQUF3QztFQUN2RCxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsdUNBQXVDO0VBQy9DLGFBQWEsRUFBRSwrRUFBK0U7RUFDOUYsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHNDQUFzQztFQUM5QyxhQUFhLEVBQUUsd0RBQXdEO0VBQ3ZFLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwyQ0FBMkM7RUFDbkQsYUFBYSxFQUFFLDJEQUEyRDtFQUMxRSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsOENBQThDO0VBQ3RELGFBQWEsRUFBRSwrQkFBK0I7RUFDOUMsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDZDQUE2QztFQUNyRCxhQUFhLEVBQUUsK0JBQStCO0VBQzlDLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxzQ0FBc0M7RUFDOUMsYUFBYSxFQUFFLHFGQUFxRjtFQUNwRyxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsc0NBQXNDO0VBQzlDLGFBQWEsRUFBRSx1REFBdUQ7RUFDdEUsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHNDQUFzQztFQUM5QyxhQUFhLEVBQUUsMkJBQTJCO0VBQzFDLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxvQ0FBb0M7RUFDNUMsYUFBYSxFQUFFLG1DQUFtQztFQUNsRCxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsd0NBQXdDO0VBQ2hELGFBQWEsRUFBRSwrREFBK0Q7RUFDOUUsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHNDQUFzQztFQUM5QyxhQUFhLEVBQUUsNkNBQTZDO0VBQzVELFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxtQ0FBbUM7RUFDM0MsYUFBYSxFQUFFLCtFQUErRTtFQUM5RixVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLGFBQWEsRUFBRSx5QkFBeUI7RUFDeEMsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxhQUFhLEVBQUUsdUNBQXVDO0VBQ3RELFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSxzQ0FBc0M7RUFDOUMsYUFBYSxFQUFFLG1FQUFtRTtFQUNsRixVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsc0NBQXNDO0VBQzlDLGFBQWEsRUFBRSwrRUFBK0U7RUFDOUYsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHNDQUFzQztFQUM5QyxhQUFhLEVBQUUsMkNBQTJDO0VBQzFELFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx1Q0FBdUM7RUFDL0MsYUFBYSxFQUFFLDBDQUEwQztFQUN6RCxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsd0NBQXdDO0VBQ2hELGFBQWEsRUFBRSx1REFBdUQ7RUFDdEUsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDJDQUEyQztFQUNuRCxhQUFhLEVBQUUsOEJBQThCO0VBQzdDLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw2Q0FBNkM7RUFDckQsYUFBYSxFQUFFLGlDQUFpQztFQUNoRCxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMENBQTBDO0VBQ2xELGFBQWEsRUFBRSwyQkFBMkI7RUFDMUMsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHlDQUF5QztFQUNqRCxhQUFhLEVBQUUsdUJBQXVCO0VBQ3RDLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx5Q0FBeUM7RUFDakQsYUFBYSxFQUFFLGtFQUFrRTtFQUNqRixVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsK0NBQStDO0VBQ3ZELGFBQWEsRUFBRSx5RUFBeUU7RUFDeEYsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHVCQUF1QjtFQUMvQixhQUFhLEVBQUUsc0VBQXNFO0VBQ3JGLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSw2Q0FBNkM7RUFDckQsYUFBYSxFQUFFLGdFQUFnRTtFQUMvRSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMkNBQTJDO0VBQ25ELGFBQWEsRUFBRSxnRUFBZ0U7RUFDL0UsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLG9FQUFvRTtFQUM1RSxhQUFhLEVBQUUsMERBQTBEO0VBQ3pFLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsYUFBYSxFQUFFLGdEQUFnRDtFQUMvRCxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLGFBQWEsRUFBRSxnQ0FBZ0M7RUFDL0MsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLHNDQUFzQztFQUM5QyxhQUFhLEVBQUUsd0VBQXdFO0VBQ3ZGLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUFFO0VBQ0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE1BQU0sRUFBRSx1RUFBdUU7RUFDL0UsYUFBYSxFQUFFLG1EQUFtRDtFQUNsRSxVQUFVLEVBQUUsMkVBQTJFO0VBQ3ZGLE9BQU8sRUFBRTtBQUNiLENBQUMsRUFBRTtFQUNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxNQUFNLEVBQUUsMkNBQTJDO0VBQ25ELGFBQWEsRUFBRSwyQkFBMkI7RUFDMUMsVUFBVSxFQUFFLDJFQUEyRTtFQUN2RixPQUFPLEVBQUU7QUFDYixDQUFDLEVBQUU7RUFDQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsTUFBTSxFQUFFLDJDQUEyQztFQUNuRCxhQUFhLEVBQUUsd0JBQXdCO0VBQ3ZDLFVBQVUsRUFBRSwyRUFBMkU7RUFDdkYsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxDQUNKO0FBRUQsSUFBSUMsU0FBUyxHQUFHLENBQ1o7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSwwRkFBMEY7RUFDekcsTUFBTSxFQUFFLDBEQUEwRDtFQUNsRSxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsdUlBQXVJO0VBQ3RKLE1BQU0sRUFBRSxrREFBa0Q7RUFDMUQsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLDZFQUE2RTtFQUM1RixNQUFNLEVBQUUsbURBQW1EO0VBQzNELElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSw2REFBNkQ7RUFDNUUsTUFBTSxFQUFFLCtFQUErRTtFQUN2RixJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsc0RBQXNEO0VBQ3JFLE1BQU0sRUFBRSwrRUFBK0U7RUFDdkYsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLDREQUE0RDtFQUMzRSxNQUFNLEVBQUUsbUVBQW1FO0VBQzNFLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSw4Q0FBOEM7RUFDN0QsTUFBTSxFQUFFLG1FQUFtRTtFQUMzRSxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsaUNBQWlDO0VBQ2hELE1BQU0sRUFBRSxtRUFBbUU7RUFDM0UsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsQ0FDSjtBQUVELElBQUlDLGdCQUFnQixHQUFHLENBQ25CO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsMkNBQTJDO0VBQzFELE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLDBEQUEwRDtFQUN6RSxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSwyQkFBMkI7RUFDMUMsTUFBTSxFQUFFLHNDQUFzQztFQUM5QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsd0JBQXdCO0VBQ3ZDLE1BQU0sRUFBRSxzQ0FBc0M7RUFDOUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLDBDQUEwQztFQUN6RCxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSx3Q0FBd0M7RUFDdkQsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsc0ZBQXNGO0VBQ3JHLE1BQU0sRUFBRSxvQ0FBb0M7RUFDNUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLDhFQUE4RTtFQUM3RixNQUFNLEVBQUUsb0NBQW9DO0VBQzVDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSw2QkFBNkI7RUFDNUMsTUFBTSxFQUFFLG9DQUFvQztFQUM1QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsdUZBQXVGO0VBQ3RHLE1BQU0sRUFBRSxxQ0FBcUM7RUFDN0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLCtFQUErRTtFQUM5RixNQUFNLEVBQUUsbUNBQW1DO0VBQzNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSxpSkFBaUo7RUFDaEssTUFBTSxFQUFFLCtCQUErQjtFQUN2QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsMEZBQTBGO0VBQ3pHLE1BQU0sRUFBRSxzQ0FBc0M7RUFDOUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLG1EQUFtRDtFQUNsRSxNQUFNLEVBQUUsa0NBQWtDO0VBQzFDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSxrQkFBa0I7RUFDakMsTUFBTSxFQUFFLGtDQUFrQztFQUMxQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsd0lBQXdJO0VBQ3ZKLE1BQU0sRUFBRSxtQ0FBbUM7RUFDM0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLG9FQUFvRTtFQUNuRixNQUFNLEVBQUUscUNBQXFDO0VBQzdDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSw0Q0FBNEM7RUFDM0QsTUFBTSxFQUFFLHVDQUF1QztFQUMvQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsaURBQWlEO0VBQ2hFLE1BQU0sRUFBRSx1Q0FBdUM7RUFDL0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLHlIQUF5SDtFQUN4SSxNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSx3REFBd0Q7RUFDdkUsTUFBTSxFQUFFLDBCQUEwQjtFQUNsQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsbUdBQW1HO0VBQ2xILE1BQU0sRUFBRSwyQkFBMkI7RUFDbkMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLDREQUE0RDtFQUMzRSxNQUFNLEVBQUUscUJBQXFCO0VBQzdCLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSwyREFBMkQ7RUFDMUUsTUFBTSxFQUFFLHFCQUFxQjtFQUM3QixJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLDRDQUE0QztFQUN4RCxhQUFhLEVBQUUsNklBQTZJO0VBQzVKLE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLHVEQUF1RDtFQUN0RSxNQUFNLEVBQUUsd0JBQXdCO0VBQ2hDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSw4Q0FBOEM7RUFDN0QsTUFBTSxFQUFFLHdCQUF3QjtFQUNoQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxDQUNKO0FBRUQsSUFBSUMsY0FBYyxHQUFHLENBQ2pCO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsMENBQTBDO0VBQ3pELE1BQU0sRUFBRSxrQ0FBa0M7RUFDMUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLG1EQUFtRDtFQUNsRSxNQUFNLEVBQUUsa0NBQWtDO0VBQzFDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSwyQkFBMkI7RUFDMUMsTUFBTSxFQUFFLDZCQUE2QjtFQUNyQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsaUNBQWlDO0VBQ2hELE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHdDQUF3QztFQUN2RCxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw2Q0FBNkM7RUFDNUQsTUFBTSxFQUFFLCtCQUErQjtFQUN2QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLE1BQU0sRUFBRSxzQ0FBc0M7RUFDOUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDBCQUEwQjtFQUN6QyxNQUFNLEVBQUUsc0NBQXNDO0VBQzlDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxrREFBa0Q7RUFDakUsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsd0JBQXdCO0VBQ3ZDLE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDBCQUEwQjtFQUN6QyxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSwwREFBMEQ7RUFDekUsTUFBTSxFQUFFLDZCQUE2QjtFQUNyQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsdUdBQXVHO0VBQ3RILE1BQU0sRUFBRSxtQ0FBbUM7RUFDM0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHVCQUF1QjtFQUN0QyxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsb0RBQW9EO0VBQ25FLE1BQU0sRUFBRSx1Q0FBdUM7RUFDL0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDJCQUEyQjtFQUMxQyxNQUFNLEVBQUUsdUNBQXVDO0VBQy9DLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw0Q0FBNEM7RUFDM0QsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsbUZBQW1GO0VBQ2xHLE1BQU0sRUFBRSw4QkFBOEI7RUFDdEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHlCQUF5QjtFQUN4QyxNQUFNLEVBQUUsb0NBQW9DO0VBQzVDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsTUFBTSxFQUFFLG9DQUFvQztFQUM1QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsZ0NBQWdDO0VBQy9DLE1BQU0sRUFBRSxxQ0FBcUM7RUFDN0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDJCQUEyQjtFQUMxQyxNQUFNLEVBQUUscUNBQXFDO0VBQzdDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSx3Q0FBd0M7RUFDdkQsTUFBTSxFQUFFLG1DQUFtQztFQUMzQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsb0NBQW9DO0VBQ25ELE1BQU0sRUFBRSxtQ0FBbUM7RUFDM0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDZDQUE2QztFQUM1RCxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw4QkFBOEI7RUFDN0MsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsMENBQTBDO0VBQ3pELE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDZCQUE2QjtFQUM1QyxNQUFNLEVBQUUsaUNBQWlDO0VBQ3pDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSwwQkFBMEI7RUFDekMsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsbUNBQW1DO0VBQ2xELE1BQU0sRUFBRSxtQ0FBbUM7RUFDM0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLCtDQUErQztFQUM5RCxNQUFNLEVBQUUsbUNBQW1DO0VBQzNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSw2R0FBNkc7RUFDNUgsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsNkJBQTZCO0VBQzVDLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGtGQUFrRjtFQUNqRyxNQUFNLEVBQUUsa0NBQWtDO0VBQzFDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxzRUFBc0U7RUFDckYsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsOEVBQThFO0VBQzdGLE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGdFQUFnRTtFQUMvRSxNQUFNLEVBQUUsa0NBQWtDO0VBQzFDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxvSUFBb0k7RUFDbkosTUFBTSxFQUFFLHdDQUF3QztFQUNoRCxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsb0ZBQW9GO0VBQ25HLE1BQU0sRUFBRSwwQ0FBMEM7RUFDbEQsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLCtCQUErQjtFQUM5QyxNQUFNLEVBQUUsZ0NBQWdDO0VBQ3hDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw4QkFBOEI7RUFDN0MsTUFBTSxFQUFFLGdDQUFnQztFQUN4QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsaUNBQWlDO0VBQ2hELE1BQU0sRUFBRSxtQ0FBbUM7RUFDM0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDZCQUE2QjtFQUM1QyxNQUFNLEVBQUUsbUNBQW1DO0VBQzNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw2QkFBNkI7RUFDNUMsTUFBTSxFQUFFLDZCQUE2QjtFQUNyQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsdUJBQXVCO0VBQ3RDLE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHlCQUF5QjtFQUN4QyxNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSwwQkFBMEI7RUFDekMsTUFBTSxFQUFFLDRCQUE0QjtFQUNwQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUseUJBQXlCO0VBQ3hDLE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDhCQUE4QjtFQUM3QyxNQUFNLEVBQUUsbUNBQW1DO0VBQzNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw2QkFBNkI7RUFDNUMsTUFBTSxFQUFFLG1DQUFtQztFQUMzQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsdUJBQXVCO0VBQ3RDLE1BQU0sRUFBRSxtQ0FBbUM7RUFDM0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGtDQUFrQztFQUNqRCxNQUFNLEVBQUUscUNBQXFDO0VBQzdDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxpRUFBaUU7RUFDaEYsTUFBTSxFQUFFLHFDQUFxQztFQUM3QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsb0RBQW9EO0VBQ25FLE1BQU0sRUFBRSx1Q0FBdUM7RUFDL0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLG1GQUFtRjtFQUNsRyxNQUFNLEVBQUUsbUNBQW1DO0VBQzNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw2QkFBNkI7RUFDNUMsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUscUJBQXFCO0VBQ3BDLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLGtDQUFrQztFQUNqRCxNQUFNLEVBQUUsb0NBQW9DO0VBQzVDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSxnQ0FBZ0M7RUFDL0MsTUFBTSxFQUFFLG9DQUFvQztFQUM1QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsZ0RBQWdEO0VBQy9ELE1BQU0sRUFBRSxrQ0FBa0M7RUFDMUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHlCQUF5QjtFQUN4QyxNQUFNLEVBQUUsc0NBQXNDO0VBQzlDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSwyQkFBMkI7RUFDMUMsTUFBTSxFQUFFLHNDQUFzQztFQUM5QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDhDQUE4QztFQUM3RCxNQUFNLEVBQUUsaUNBQWlDO0VBQ3pDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSwwREFBMEQ7RUFDekUsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsZ0ZBQWdGO0VBQy9GLE1BQU0sRUFBRSw4QkFBOEI7RUFDdEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLG9EQUFvRDtFQUNuRSxNQUFNLEVBQUUsbUNBQW1DO0VBQzNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxvRkFBb0Y7RUFDbkcsTUFBTSxFQUFFLHlDQUF5QztFQUNqRCxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsNkRBQTZEO0VBQzVFLE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGlFQUFpRTtFQUNoRixNQUFNLEVBQUUsbUNBQW1DO0VBQzNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSx3Q0FBd0M7RUFDdkQsTUFBTSxFQUFFLG1DQUFtQztFQUMzQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsd0RBQXdEO0VBQ3ZFLE1BQU0sRUFBRSxtQ0FBbUM7RUFDM0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHNFQUFzRTtFQUNyRixNQUFNLEVBQUUsa0NBQWtDO0VBQzFDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxtRkFBbUY7RUFDbEcsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsaUNBQWlDO0VBQ2hELE1BQU0sRUFBRSxxQ0FBcUM7RUFDN0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDZCQUE2QjtFQUM1QyxNQUFNLEVBQUUscUNBQXFDO0VBQzdDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxtRUFBbUU7RUFDbEYsTUFBTSxFQUFFLCtCQUErQjtFQUN2QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUseUJBQXlCO0VBQ3hDLE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGtDQUFrQztFQUNqRCxNQUFNLEVBQUUsa0NBQWtDO0VBQzFDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSwwQ0FBMEM7RUFDekQsTUFBTSxFQUFFLGtDQUFrQztFQUMxQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUscUJBQXFCO0VBQ3BDLE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLG1DQUFtQztFQUNsRCxNQUFNLEVBQUUsZ0NBQWdDO0VBQ3hDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSx1QkFBdUI7RUFDdEMsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsd0JBQXdCO0VBQ3ZDLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGlFQUFpRTtFQUNoRixNQUFNLEVBQUUscUNBQXFDO0VBQzdDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSx5QkFBeUI7RUFDeEMsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsb0JBQW9CO0VBQ25DLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGlJQUFpSTtFQUNoSixNQUFNLEVBQUUsb0NBQW9DO0VBQzVDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxzQ0FBc0M7RUFDckQsTUFBTSxFQUFFLHFDQUFxQztFQUM3QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUseUJBQXlCO0VBQ3hDLE1BQU0sRUFBRSxxQ0FBcUM7RUFDN0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLDhGQUE4RjtFQUM3RyxNQUFNLEVBQUUsZ0NBQWdDO0VBQ3hDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxpQ0FBaUM7RUFDaEQsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLE1BQU0sRUFBRSw4QkFBOEI7RUFDdEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLHFCQUFxQjtFQUNwQyxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSx5QkFBeUI7RUFDeEMsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsMkVBQTJFO0VBQzFGLE1BQU0sRUFBRSwyQkFBMkI7RUFDbkMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDRCQUE0QjtFQUMzQyxNQUFNLEVBQUUsZ0NBQWdDO0VBQ3hDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxnQ0FBZ0M7RUFDL0MsTUFBTSxFQUFFLGdDQUFnQztFQUN4QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsc0VBQXNFO0VBQ3JGLE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHNDQUFzQztFQUNyRCxNQUFNLEVBQUUscUNBQXFDO0VBQzdDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw2QkFBNkI7RUFDNUMsTUFBTSxFQUFFLHFDQUFxQztFQUM3QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsNkJBQTZCO0VBQzVDLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHlCQUF5QjtFQUN4QyxNQUFNLEVBQUUsaUNBQWlDO0VBQ3pDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSx5Q0FBeUM7RUFDeEQsTUFBTSxFQUFFLDZCQUE2QjtFQUNyQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsNkJBQTZCO0VBQzVDLE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDZCQUE2QjtFQUM1QyxNQUFNLEVBQUUsa0RBQWtEO0VBQzFELElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw2QkFBNkI7RUFDNUMsTUFBTSxFQUFFLGtEQUFrRDtFQUMxRCxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsa0NBQWtDO0VBQ2pELE1BQU0sRUFBRSxvQ0FBb0M7RUFDNUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDhCQUE4QjtFQUM3QyxNQUFNLEVBQUUsb0NBQW9DO0VBQzVDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxrQ0FBa0M7RUFDakQsTUFBTSxFQUFFLGtDQUFrQztFQUMxQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsb0JBQW9CO0VBQ25DLE1BQU0sRUFBRSxrQ0FBa0M7RUFDMUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHlGQUF5RjtFQUN4RyxNQUFNLEVBQUUsa0NBQWtDO0VBQzFDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSx5Q0FBeUM7RUFDeEQsTUFBTSxFQUFFLCtCQUErQjtFQUN2QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsMkJBQTJCO0VBQzFDLE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLCtFQUErRTtFQUM5RixNQUFNLEVBQUUsa0NBQWtDO0VBQzFDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSwrQkFBK0I7RUFDOUMsTUFBTSxFQUFFLG9DQUFvQztFQUM1QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsaUVBQWlFO0VBQ2hGLE1BQU0sRUFBRSxvQ0FBb0M7RUFDNUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLG1CQUFtQjtFQUNsQyxNQUFNLEVBQUUsaUNBQWlDO0VBQ3pDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSwrQkFBK0I7RUFDOUMsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsNEJBQTRCO0VBQzNDLE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDBDQUEwQztFQUN6RCxNQUFNLEVBQUUsZ0NBQWdDO0VBQ3hDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxpQ0FBaUM7RUFDaEQsTUFBTSxFQUFFLG9DQUFvQztFQUM1QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsZ0NBQWdDO0VBQy9DLE1BQU0sRUFBRSxvQ0FBb0M7RUFDNUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDhCQUE4QjtFQUM3QyxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw2QkFBNkI7RUFDNUMsTUFBTSxFQUFFLCtCQUErQjtFQUN2QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUscUNBQXFDO0VBQ3BELE1BQU0sRUFBRSxrQ0FBa0M7RUFDMUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDJCQUEyQjtFQUMxQyxNQUFNLEVBQUUsa0NBQWtDO0VBQzFDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSxvREFBb0Q7RUFDbkUsTUFBTSxFQUFFLHNDQUFzQztFQUM5QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsNkJBQTZCO0VBQzVDLE1BQU0sRUFBRSxtQ0FBbUM7RUFDM0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLDJIQUEySDtFQUMxSSxNQUFNLEVBQUUsbUNBQW1DO0VBQzNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSx3QkFBd0I7RUFDdkMsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsdUJBQXVCO0VBQ3RDLE1BQU0sRUFBRSw4QkFBOEI7RUFDdEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDZDQUE2QztFQUM1RCxNQUFNLEVBQUUsb0NBQW9DO0VBQzVDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsTUFBTSxFQUFFLG9DQUFvQztFQUM1QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsd0JBQXdCO0VBQ3ZDLE1BQU0sRUFBRSxvQ0FBb0M7RUFDNUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGlDQUFpQztFQUNoRCxNQUFNLEVBQUUsb0NBQW9DO0VBQzVDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw4REFBOEQ7RUFDN0UsTUFBTSxFQUFFLDZCQUE2QjtFQUNyQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsc0NBQXNDO0VBQ3JELE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGdDQUFnQztFQUMvQyxNQUFNLEVBQUUsZ0NBQWdDO0VBQ3hDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSwwQkFBMEI7RUFDekMsTUFBTSxFQUFFLDZCQUE2QjtFQUNyQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUscUJBQXFCO0VBQ3BDLE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHdDQUF3QztFQUN2RCxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSx5QkFBeUI7RUFDeEMsTUFBTSxFQUFFLCtCQUErQjtFQUN2QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsOEJBQThCO0VBQzdDLE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHNDQUFzQztFQUNyRCxNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSw4RUFBOEU7RUFDN0YsTUFBTSxFQUFFLHFDQUFxQztFQUM3QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsa0VBQWtFO0VBQ2pGLE1BQU0sRUFBRSx3Q0FBd0M7RUFDaEQsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHdIQUF3SDtFQUN2SSxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxpRUFBaUU7RUFDaEYsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsOEVBQThFO0VBQzdGLE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGtIQUFrSDtFQUNqSSxNQUFNLEVBQUUseUNBQXlDO0VBQ2pELElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSwyQkFBMkI7RUFDMUMsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsa0VBQWtFO0VBQ2pGLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGtGQUFrRjtFQUNqRyxNQUFNLEVBQUUsb0NBQW9DO0VBQzVDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw4QkFBOEI7RUFDN0MsTUFBTSxFQUFFLG9DQUFvQztFQUM1QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsb0NBQW9DO0VBQ25ELE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGdDQUFnQztFQUMvQyxNQUFNLEVBQUUsZ0NBQWdDO0VBQ3hDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxpQ0FBaUM7RUFDaEQsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUscUJBQXFCO0VBQ3BDLE1BQU0sRUFBRSw4QkFBOEI7RUFDdEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLCtCQUErQjtFQUM5QyxNQUFNLEVBQUUsc0NBQXNDO0VBQzlDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxvQ0FBb0M7RUFDbkQsTUFBTSxFQUFFLHNDQUFzQztFQUM5QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsbUVBQW1FO0VBQ2xGLE1BQU0sRUFBRSxxQ0FBcUM7RUFDN0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLG1CQUFtQjtFQUNsQyxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxpQ0FBaUM7RUFDaEQsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsbUJBQW1CO0VBQ2xDLE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHFCQUFxQjtFQUNwQyxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxvQ0FBb0M7RUFDbkQsTUFBTSxFQUFFLDZCQUE2QjtFQUNyQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsZ0NBQWdDO0VBQy9DLE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGdFQUFnRTtFQUMvRSxNQUFNLEVBQUUsbUNBQW1DO0VBQzNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxrQ0FBa0M7RUFDakQsTUFBTSxFQUFFLG1DQUFtQztFQUMzQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsMEJBQTBCO0VBQ3pDLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGlDQUFpQztFQUNoRCxNQUFNLEVBQUUsaUNBQWlDO0VBQ3pDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxrRUFBa0U7RUFDakYsTUFBTSxFQUFFLGdDQUFnQztFQUN4QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUseUNBQXlDO0VBQ3hELE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGdDQUFnQztFQUMvQyxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw4QkFBOEI7RUFDN0MsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsa0VBQWtFO0VBQ2pGLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDRDQUE0QztFQUMzRCxNQUFNLEVBQUUseUNBQXlDO0VBQ2pELElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSwrQkFBK0I7RUFDOUMsTUFBTSxFQUFFLHlDQUF5QztFQUNqRCxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsa0ZBQWtGO0VBQ2pHLE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGdDQUFnQztFQUMvQyxNQUFNLEVBQUUsa0NBQWtDO0VBQzFDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSx5QkFBeUI7RUFDeEMsTUFBTSxFQUFFLGtDQUFrQztFQUMxQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsd0RBQXdEO0VBQ3ZFLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGdDQUFnQztFQUMvQyxNQUFNLEVBQUUsaUNBQWlDO0VBQ3pDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw4Q0FBOEM7RUFDN0QsTUFBTSxFQUFFLG9DQUFvQztFQUM1QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsOEJBQThCO0VBQzdDLE1BQU0sRUFBRSxvQ0FBb0M7RUFDNUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGlGQUFpRjtFQUNoRyxNQUFNLEVBQUUscUNBQXFDO0VBQzdDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxzQ0FBc0M7RUFDckQsTUFBTSxFQUFFLHVDQUF1QztFQUMvQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsbUJBQW1CO0VBQ2xDLE1BQU0sRUFBRSx1Q0FBdUM7RUFDL0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDhCQUE4QjtFQUM3QyxNQUFNLEVBQUUsdUNBQXVDO0VBQy9DLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSx1Q0FBdUM7RUFDdEQsTUFBTSxFQUFFLHVDQUF1QztFQUMvQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUseUNBQXlDO0VBQ3hELE1BQU0sRUFBRSxzQ0FBc0M7RUFDOUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDRFQUE0RTtFQUMzRixNQUFNLEVBQUUsc0NBQXNDO0VBQzlDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSx3REFBd0Q7RUFDdkUsTUFBTSxFQUFFLG1DQUFtQztFQUMzQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsOERBQThEO0VBQzdFLE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHVHQUF1RztFQUN0SCxNQUFNLEVBQUUsb0NBQW9DO0VBQzVDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSx1RUFBdUU7RUFDdEYsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsK0JBQStCO0VBQzlDLE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSx1REFBdUQ7RUFDdEUsTUFBTSxFQUFFLHFEQUFxRDtFQUM3RCxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsNEJBQTRCO0VBQzNDLE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxNQUFNLEVBQUUsZ0NBQWdDO0VBQ3hDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUscUJBQXFCO0VBQ3BDLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHdDQUF3QztFQUN2RCxNQUFNLEVBQUUsbUNBQW1DO0VBQzNDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSx5QkFBeUI7RUFDeEMsTUFBTSxFQUFFLG1DQUFtQztFQUMzQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsb0NBQW9DO0VBQ25ELE1BQU0sRUFBRSw4QkFBOEI7RUFDdEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDRDQUE0QztFQUMzRCxNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxxREFBcUQ7RUFDcEUsTUFBTSxFQUFFLCtCQUErQjtFQUN2QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsNENBQTRDO0VBQzNELE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHdCQUF3QjtFQUN2QyxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsOEJBQThCO0VBQzdDLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDJFQUEyRTtFQUMxRixNQUFNLEVBQUUsdUNBQXVDO0VBQy9DLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw4Q0FBOEM7RUFDN0QsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsNkJBQTZCO0VBQzVDLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDRDQUE0QztFQUMzRCxNQUFNLEVBQUUsZ0NBQWdDO0VBQ3hDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw2REFBNkQ7RUFDNUUsTUFBTSxFQUFFLGdDQUFnQztFQUN4QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsZ0NBQWdDO0VBQy9DLE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGdCQUFnQjtFQUMvQixNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSwwREFBMEQ7RUFDekUsTUFBTSxFQUFFLHFDQUFxQztFQUM3QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsc0NBQXNDO0VBQ3JELE1BQU0sRUFBRSxxQ0FBcUM7RUFDN0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLCtEQUErRDtFQUM5RSxNQUFNLEVBQUUsNEJBQTRCO0VBQ3BDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw4Q0FBOEM7RUFDN0QsTUFBTSxFQUFFLG1DQUFtQztFQUMzQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsa0NBQWtDO0VBQ2pELE1BQU0sRUFBRSxtQ0FBbUM7RUFDM0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDhDQUE4QztFQUM3RCxNQUFNLEVBQUUsZ0NBQWdDO0VBQ3hDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxzQ0FBc0M7RUFDckQsTUFBTSxFQUFFLGdDQUFnQztFQUN4QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsd0JBQXdCO0VBQ3ZDLE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDhCQUE4QjtFQUM3QyxNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxxRkFBcUY7RUFDcEcsTUFBTSxFQUFFLG1DQUFtQztFQUMzQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsOEJBQThCO0VBQzdDLE1BQU0sRUFBRSxrQ0FBa0M7RUFDMUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGtDQUFrQztFQUNqRCxNQUFNLEVBQUUsa0NBQWtDO0VBQzFDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSx5R0FBeUc7RUFDeEgsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsNkRBQTZEO0VBQzVFLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJO0VBQ0EsVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsNkJBQTZCO0VBQzVDLE1BQU0sRUFBRSxtQ0FBbUM7RUFDM0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGlHQUFpRztFQUNoSCxNQUFNLEVBQUUsZ0NBQWdDO0VBQ3hDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw2QkFBNkI7RUFDNUMsTUFBTSxFQUFFLGdDQUFnQztFQUN4QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsc0RBQXNEO0VBQ3JFLE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLCtEQUErRDtFQUM5RSxNQUFNLEVBQUUscUNBQXFDO0VBQzdDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxtQ0FBbUM7RUFDbEQsTUFBTSxFQUFFLGtDQUFrQztFQUMxQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsbUNBQW1DO0VBQ2xELE1BQU0sRUFBRSxrQ0FBa0M7RUFDMUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHVGQUF1RjtFQUN0RyxNQUFNLEVBQUUsb0NBQW9DO0VBQzVDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxvRUFBb0U7RUFDbkYsTUFBTSxFQUFFLDZCQUE2QjtFQUNyQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsbUdBQW1HO0VBQ2xILE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDRFQUE0RTtFQUMzRixNQUFNLEVBQUUsb0NBQW9DO0VBQzVDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSx3RUFBd0U7RUFDdkYsTUFBTSxFQUFFLG1DQUFtQztFQUMzQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsd0ZBQXdGO0VBQ3ZHLE1BQU0sRUFBRSxtQ0FBbUM7RUFDM0MsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDRCQUE0QjtFQUMzQyxNQUFNLEVBQUUseUJBQXlCO0VBQ2pDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxpQ0FBaUM7RUFDaEQsTUFBTSxFQUFFLHlCQUF5QjtFQUNqQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsd0dBQXdHO0VBQ3ZILE1BQU0sRUFBRSxrQ0FBa0M7RUFDMUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLGtFQUFrRTtFQUNqRixNQUFNLEVBQUUsa0NBQWtDO0VBQzFDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSw4QkFBOEI7RUFDN0MsTUFBTSxFQUFFLGtDQUFrQztFQUMxQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsZ0NBQWdDO0VBQy9DLE1BQU0sRUFBRSxrQ0FBa0M7RUFDMUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDBFQUEwRTtFQUN6RixNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxtQ0FBbUM7RUFDbEQsTUFBTSxFQUFFLGVBQWU7RUFDdkIsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDZCQUE2QjtFQUM1QyxNQUFNLEVBQUUsZUFBZTtFQUN2QixJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsNkZBQTZGO0VBQzVHLE1BQU0sRUFBRSxtQkFBbUI7RUFDM0IsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLG9FQUFvRTtFQUNuRixNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSx5QkFBeUI7RUFDeEMsTUFBTSxFQUFFLGtDQUFrQztFQUMxQyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsZ0NBQWdDO0VBQy9DLE1BQU0sRUFBRSxrQ0FBa0M7RUFDMUMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsQ0FDSjtBQUVELElBQUlOLHFCQUFxQixHQUFHLENBQ3hCO0VBQ0ksVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsNkJBQTZCO0VBQzVDLE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHlCQUF5QjtFQUN4QyxNQUFNLEVBQUUsZ0NBQWdDO0VBQ3hDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSwwQkFBMEI7RUFDekMsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUseUNBQXlDO0VBQ3hELE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLDBCQUEwQjtFQUN6QyxNQUFNLEVBQUUsaUNBQWlDO0VBQ3pDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLEVBQ0Q7RUFDSSxVQUFVLEVBQUUsdUNBQXVDO0VBQ25ELGFBQWEsRUFBRSxpQ0FBaUM7RUFDaEQsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDRixNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxFQUNEO0VBQ0ksVUFBVSxFQUFFLHVDQUF1QztFQUNuRCxhQUFhLEVBQUUsMEJBQTBCO0VBQ3pDLE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsSUFBSSxFQUFFO0lBQ0YsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNiLENBQUMsRUFDRDtFQUNJLFVBQVUsRUFBRSx1Q0FBdUM7RUFDbkQsYUFBYSxFQUFFLHNDQUFzQztFQUNyRCxNQUFNLEVBQUUsNkJBQTZCO0VBQ3JDLElBQUksRUFBRTtJQUNGLE1BQU0sRUFBRTtFQUNaLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDYixDQUFDLENBQ0o7QUFFTSxJQUFJTyxPQUFPLEdBQUdOLE9BQU8sQ0FDdkJPLE1BQU0sQ0FBQ04sY0FBYyxDQUFDLENBQ3RCTSxNQUFNLENBQUNMLFFBQVEsQ0FBQyxDQUNoQkssTUFBTSxDQUFDSixTQUFTLENBQUMsQ0FDakJJLE1BQU0sQ0FBQ0gsZ0JBQWdCLENBQUMsQ0FDeEJHLE1BQU0sQ0FBQ0YsY0FBYyxDQUFDLENBQ3RCRSxNQUFNLENBQUNSLHFCQUFxQixDQUFDLEM7Ozs7Ozs7Ozs7OztBQy80S2xDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDQztBQUNjO0FBQ1g7QUFDeUI7QUFDZDtBQUVoRCxNQUFNUyxNQUFNLEdBQUksNkJBQTRCO0FBQzVDLE1BQU1DLE1BQU0sR0FBSSxtQ0FBa0M7QUFDbEQsTUFBTUMsTUFBTSxHQUFJLGdEQUErQztBQUMvRCxNQUFNQyxNQUFNLEdBQUksNEJBQTJCO0FBRTNDLElBQUlYLE9BQU8sR0FBR00sZ0RBQU87QUFDckJOLE9BQU8sR0FBR0EsT0FBTyxDQUFDTyxNQUFNLENBQUNGLDhEQUFjLENBQUMsQ0FBQ0UsTUFBTSxDQUFDSixtREFBUyxDQUFDLENBQUNJLE1BQU0sQ0FBQ1IsNEVBQXFCLENBQUMsQ0FBQ1EsTUFBTSxDQUFDTiw4REFBYyxDQUFDOztBQUUvRztBQUNBLFNBQVNXLFdBQVdBLENBQUN6RyxLQUFLLEdBQUc7RUFBQ0UsU0FBUyxFQUFFMkYsT0FBTyxDQUFDN0QsTUFBTTtFQUFFbEMsS0FBSyxFQUFFK0YsT0FBTztFQUFFNUYsYUFBYSxFQUFFLElBQUk7RUFBRXdCLEtBQUssRUFBRTtBQUFFLENBQUMsRUFBRWlGLE1BQU0sRUFBRTtFQUM5RyxRQUFRQSxNQUFNLENBQUN4RSxJQUFJO0lBQ2YsS0FBSyxVQUFVO01BQ1gsT0FBTztRQUNIaEMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNiSixLQUFLLEVBQUUsRUFBRTtRQUNURyxhQUFhLEVBQUUsS0FBSztRQUNwQndCLEtBQUssRUFBRTtNQUNYLENBQUM7SUFDTCxLQUFLLFdBQVc7TUFDWixPQUFPO1FBQ0h2QixTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2JKLEtBQUssRUFBRSxFQUFFO1FBQ1RHLGFBQWEsRUFBRSxLQUFLO1FBQ3BCd0IsS0FBSyxFQUFFO01BQ1gsQ0FBQztJQUNMLEtBQUssU0FBUztNQUNWNkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO01BQ3RCLElBQUlvQyxZQUFZLEdBQUdkLE9BQU8sQ0FBQ2UsTUFBTSxDQUFDbEcsSUFBSSxJQUFJQSxJQUFJLENBQUNtRyxLQUFLLEtBQUssT0FBTyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDO01BQ3pFLE9BQU87UUFDSGhILEtBQUssRUFBRTZHLFlBQVk7UUFDbkIxRyxhQUFhLEVBQUUsSUFBSTtRQUNuQkMsU0FBUyxFQUFFMkYsT0FBTyxDQUFDN0QsTUFBTTtRQUN6QlAsS0FBSyxFQUFFO01BQ1gsQ0FBQztJQUNMLEtBQUssS0FBSztNQUNONkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO01BQzFCLE9BQU87UUFDSHpFLEtBQUssRUFBRStGLE9BQU87UUFDZDVGLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxTQUFTLEVBQUUyRixPQUFPLENBQUM3RCxNQUFNO1FBQ3pCUCxLQUFLLEVBQUU7TUFDWCxDQUFDO0lBQ0wsS0FBSyxTQUFTO01BQ1YsSUFBSXNGLFFBQVEsR0FBR2xCLE9BQU8sQ0FBQ2UsTUFBTSxDQUFDbEcsSUFBSSxJQUFJQSxJQUFJLENBQUNtRyxLQUFLLEtBQUtSLE1BQU0sQ0FBQyxDQUFDUyxLQUFLLENBQUMsQ0FBQztNQUNwRSxPQUFPO1FBQ0hoSCxLQUFLLEVBQUVpSCxRQUFRO1FBQ2Y5RyxhQUFhLEVBQUUsSUFBSTtRQUNuQkMsU0FBUyxFQUFFNkcsUUFBUSxDQUFDL0UsTUFBTTtRQUMxQlAsS0FBSyxFQUFFO01BQ1gsQ0FBQztJQUNMLEtBQUssU0FBUztNQUNWLElBQUl1RixTQUFTLEdBQUduQixPQUFPLENBQUNlLE1BQU0sQ0FBQ2xHLElBQUksSUFBSUEsSUFBSSxDQUFDbUcsS0FBSyxLQUFLUCxNQUFNLENBQUMsQ0FBQ1EsS0FBSyxDQUFDLENBQUM7TUFDckUsT0FBTztRQUNIaEgsS0FBSyxFQUFFa0gsU0FBUztRQUNoQi9HLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxTQUFTLEVBQUU4RyxTQUFTLENBQUNoRixNQUFNO1FBQzNCUCxLQUFLLEVBQUU7TUFDWCxDQUFDO0lBQ0wsS0FBSyxTQUFTO01BQ1YsSUFBSXdGLFNBQVMsR0FBR3BCLE9BQU8sQ0FBQ2UsTUFBTSxDQUFDbEcsSUFBSSxJQUFJQSxJQUFJLENBQUNtRyxLQUFLLEtBQUtOLE1BQU0sQ0FBQyxDQUFDTyxLQUFLLENBQUMsQ0FBQztNQUNyRSxPQUFPO1FBQ0hoSCxLQUFLLEVBQUVtSCxTQUFTO1FBQ2hCaEgsYUFBYSxFQUFFLElBQUk7UUFDbkJDLFNBQVMsRUFBRStHLFNBQVMsQ0FBQ2pGLE1BQU07UUFDM0JQLEtBQUssRUFBRTtNQUNYLENBQUM7SUFDTCxLQUFLLFNBQVM7TUFDVixJQUFJeUYsU0FBUyxHQUFHckIsT0FBTyxDQUFDZSxNQUFNLENBQUNsRyxJQUFJLElBQUlBLElBQUksQ0FBQ21HLEtBQUssS0FBS0wsTUFBTSxDQUFDLENBQUNNLEtBQUssQ0FBQyxDQUFDO01BQ3JFLE9BQU87UUFDSGhILEtBQUssRUFBRW9ILFNBQVM7UUFDaEJqSCxhQUFhLEVBQUUsSUFBSTtRQUNuQkMsU0FBUyxFQUFFZ0gsU0FBUyxDQUFDbEYsTUFBTTtRQUMzQlAsS0FBSyxFQUFFO01BQ1gsQ0FBQztJQUNMLEtBQUssUUFBUTtNQUNULElBQUkwRixDQUFDLEdBQUdULE1BQU0sQ0FBQ3RFLEtBQUssQ0FBQ2dGLFdBQVcsQ0FBQyxDQUFDO01BQ2xDOUMsT0FBTyxDQUFDQyxHQUFHLENBQUUsWUFBVzRDLENBQUUsRUFBQyxDQUFDO01BQzVCLElBQUlFLFNBQVMsR0FBR3hCLE9BQU8sQ0FBQ2UsTUFBTSxDQUFDbEcsSUFBSSxJQUFJO1FBQ25DLElBQUk0RyxRQUFRLEdBQUc1RyxJQUFJLENBQUMzQyxJQUFJLENBQUNxSixXQUFXLENBQUMsQ0FBQztRQUN0QyxJQUFJRyxJQUFJLEdBQUlELFFBQVEsQ0FBQ0UsVUFBVSxDQUFDTCxDQUFDLENBQUMsSUFBSUcsUUFBUSxDQUFDckYsUUFBUSxDQUFDa0YsQ0FBQyxDQUFFO1FBQzNEN0MsT0FBTyxDQUFDQyxHQUFHLENBQUUsV0FBVStDLFFBQVMsYUFBWUgsQ0FBRSxlQUFjSSxJQUFLLEVBQUMsQ0FBQztRQUNuRSxPQUFPQSxJQUFJO01BQ2YsQ0FBQyxDQUFDO01BQ0YsT0FBTztRQUNILEdBQUd2SCxLQUFLO1FBQ1JGLEtBQUssRUFBRXVILFNBQVM7UUFDaEJwSCxhQUFhLEVBQUUsSUFBSTtRQUNuQkMsU0FBUyxFQUFFbUgsU0FBUyxDQUFDckYsTUFBTTtRQUMzQlAsS0FBSyxFQUFFO01BQ1gsQ0FBQztJQUNMLEtBQUssT0FBTztNQUNSNkMsT0FBTyxDQUFDQyxHQUFHLENBQUUsV0FBVSxDQUFDO01BQ3hCLE9BQU87UUFDSDlDLEtBQUssRUFBRWlGLE1BQU0sQ0FBQ3ZFLEdBQUc7UUFDakJqQyxTQUFTLEVBQUUsQ0FBQztRQUNaSixLQUFLLEVBQUUsRUFBRTtRQUNURyxhQUFhLEVBQUU7TUFDbkIsQ0FBQztJQUNMO01BQ0ksT0FBTztRQUNISCxLQUFLLEVBQUVnRyw4REFBYztRQUNyQjdGLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxTQUFTLEVBQUU0Riw4REFBYyxDQUFDOUQsTUFBTTtRQUNoQ1AsS0FBSyxFQUFFO01BQ1gsQ0FBQztFQUNUO0FBQ0o7QUFFTyxNQUFNN0UsU0FBUyxHQUFHNksseURBQVcsQ0FBQ2hCLFdBQVcsQ0FBQztBQUVqRDdKLFNBQVMsQ0FBQzhLLFNBQVMsQ0FBQyxNQUNoQnBELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlEQUFpRCxHQUFHM0gsU0FBUyxDQUFDK0ssUUFBUSxDQUFDLENBQUMsQ0FBQ3pILFNBQVMsQ0FDbEcsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUN2SEQ7QUFBQTtBQUFPLElBQUk0RixjQUFjLEdBQUcsRUFBRSxDOzs7Ozs7Ozs7Ozs7QUNBOUI7QUFBQTtBQUFPLElBQUlFLFNBQVMsR0FBRyxFQUFFLEM7Ozs7Ozs7Ozs7OztBQ0F6QjtBQUFBO0FBQU8sSUFBSUUsY0FBYyxHQUFHLENBQ3pCO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsK0RBQStEO0VBQzlFLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLCtDQUErQztFQUM5RCxNQUFNLEVBQUUsbUNBQW1DO0VBQzNDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSxpQ0FBaUM7RUFDaEQsTUFBTSxFQUFFLG1DQUFtQztFQUMzQyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUseUJBQXlCO0VBQ3hDLE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLCtCQUErQjtFQUM5QyxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSxzRUFBc0U7RUFDckYsTUFBTSxFQUFFLG9DQUFvQztFQUM1QyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsMkJBQTJCO0VBQzFDLE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLHlCQUF5QjtFQUN4QyxNQUFNLEVBQUUsK0JBQStCO0VBQ3ZDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSw0Q0FBNEM7RUFDM0QsTUFBTSxFQUFFLG9DQUFvQztFQUM1QyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsNEJBQTRCO0VBQzNDLE1BQU0sRUFBRSxvQ0FBb0M7RUFDNUMsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLGtGQUFrRjtFQUNqRyxNQUFNLEVBQUUsb0NBQW9DO0VBQzVDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSxpQ0FBaUM7RUFDaEQsTUFBTSxFQUFFLCtCQUErQjtFQUN2QyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsb0JBQW9CO0VBQ25DLE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLHVCQUF1QjtFQUN0QyxNQUFNLEVBQUUsbUNBQW1DO0VBQzNDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSx1Q0FBdUM7RUFDdEQsTUFBTSxFQUFFLG1DQUFtQztFQUMzQyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsZ0RBQWdEO0VBQy9ELE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxNQUFNLEVBQUUsZ0NBQWdDO0VBQ3hDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSw2RUFBNkU7RUFDNUYsTUFBTSxFQUFFLGdDQUFnQztFQUN4QyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsOENBQThDO0VBQzdELE1BQU0sRUFBRSxvQ0FBb0M7RUFDNUMsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLGdDQUFnQztFQUMvQyxNQUFNLEVBQUUsb0NBQW9DO0VBQzVDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsTUFBTSxFQUFFLHdDQUF3QztFQUNoRCxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsNEJBQTRCO0VBQzNDLE1BQU0sRUFBRSx3Q0FBd0M7RUFDaEQsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLCtFQUErRTtFQUM5RixNQUFNLEVBQUUsaUNBQWlDO0VBQ3pDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSx3R0FBd0c7RUFDdkgsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsaUNBQWlDO0VBQ2hELE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLDBCQUEwQjtFQUN6QyxNQUFNLEVBQUUsZ0NBQWdDO0VBQ3hDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSwwRUFBMEU7RUFDekYsTUFBTSxFQUFFLHFDQUFxQztFQUM3QyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUscUNBQXFDO0VBQ3BELE1BQU0sRUFBRSx1Q0FBdUM7RUFDL0MsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLHVCQUF1QjtFQUN0QyxNQUFNLEVBQUUsdUNBQXVDO0VBQy9DLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSxzQ0FBc0M7RUFDckQsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsaUZBQWlGO0VBQ2hHLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLCtFQUErRTtFQUM5RixNQUFNLEVBQUUsa0NBQWtDO0VBQzFDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSx5Q0FBeUM7RUFDeEQsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsOEJBQThCO0VBQzdDLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLDRCQUE0QjtFQUMzQyxNQUFNLEVBQUUsbUNBQW1DO0VBQzNDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSwyREFBMkQ7RUFDMUUsTUFBTSxFQUFFLG1DQUFtQztFQUMzQyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsOEJBQThCO0VBQzdDLE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLGlDQUFpQztFQUNoRCxNQUFNLEVBQUUsZ0NBQWdDO0VBQ3hDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSxtQ0FBbUM7RUFDbEQsTUFBTSxFQUFFLG1DQUFtQztFQUMzQyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsaUJBQWlCO0VBQ2hDLE1BQU0sRUFBRSxtQ0FBbUM7RUFDM0MsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLGlJQUFpSTtFQUNoSixNQUFNLEVBQUUsbUNBQW1DO0VBQzNDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSxtQkFBbUI7RUFDbEMsTUFBTSxFQUFFLGlDQUFpQztFQUN6QyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLDZCQUE2QjtFQUM1QyxNQUFNLEVBQUUsa0NBQWtDO0VBQzFDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSw2Q0FBNkM7RUFDNUQsTUFBTSxFQUFFLGtDQUFrQztFQUMxQyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsMkRBQTJEO0VBQzFFLE1BQU0sRUFBRSx1Q0FBdUM7RUFDL0MsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLDhGQUE4RjtFQUM3RyxNQUFNLEVBQUUsb0NBQW9DO0VBQzVDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSxtSEFBbUg7RUFDbEksTUFBTSxFQUFFLG1DQUFtQztFQUMzQyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsa0VBQWtFO0VBQ2pGLE1BQU0sRUFBRSxxQ0FBcUM7RUFDN0MsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLDJGQUEyRjtFQUMxRyxNQUFNLEVBQUUscUNBQXFDO0VBQzdDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsTUFBTSxFQUFFLCtCQUErQjtFQUN2QyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUscUJBQXFCO0VBQ3BDLE1BQU0sRUFBRSwrQkFBK0I7RUFDdkMsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLGdHQUFnRztFQUMvRyxNQUFNLEVBQUUsMENBQTBDO0VBQ2xELElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSxnQ0FBZ0M7RUFDL0MsTUFBTSxFQUFFLG1DQUFtQztFQUMzQyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxFQUNEO0VBQ0csVUFBVSxFQUFFLDJDQUEyQztFQUN2RCxhQUFhLEVBQUUsdURBQXVEO0VBQ3RFLE1BQU0sRUFBRSxtQ0FBbUM7RUFDM0MsSUFBSSxFQUFFO0lBQ0gsTUFBTSxFQUFFO0VBQ1gsQ0FBQztFQUNELE9BQU8sRUFBRTtBQUNaLENBQUMsRUFDRDtFQUNHLFVBQVUsRUFBRSwyQ0FBMkM7RUFDdkQsYUFBYSxFQUFFLHFCQUFxQjtFQUNwQyxNQUFNLEVBQUUsc0NBQXNDO0VBQzlDLElBQUksRUFBRTtJQUNILE1BQU0sRUFBRTtFQUNYLENBQUM7RUFDRCxPQUFPLEVBQUU7QUFDWixDQUFDLEVBQ0Q7RUFDRyxVQUFVLEVBQUUsMkNBQTJDO0VBQ3ZELGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsTUFBTSxFQUFFLHNDQUFzQztFQUM5QyxJQUFJLEVBQUU7SUFDSCxNQUFNLEVBQUU7RUFDWCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0FBQ1osQ0FBQyxDQUNILEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanN4XCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtNYWluU2VjdGlvbn0gZnJvbSAnLi9jb21wb25lbnRzL01haW5TZWN0aW9uJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtjYXJkU3RvcmV9IGZyb20gXCIuL3N0b3JlL0NhcmRTdG9yZVwiO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e2NhcmRTdG9yZX0+XG4gICAgICAgICAgICAgICAgPE1haW5TZWN0aW9uLz5cbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge0FpRmlsbFBsYXlTcXVhcmUsIEJzRmlsbFBlcnNvbkZpbGwsIEZhQm9va09wZW59IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zXCI7XG5cbmNvbnN0IEZpbG1XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ0p1cmEnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgRmlsbUluZm8gPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxuYDtcblxuXG5jb25zdCBJZnJhbWVCb3ggPSBzdHlsZWQuaWZyYW1lYFxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XG4gIGhlaWdodDogNDgwcHg7XG4gIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIEBrZXlmcmFtZXMgaG9yaXpvbnRhbC1zaGFraW5nIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB9XG4gICAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgfVxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KSB9XG4gICAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgfVxuICB9XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogJ0p1cmEnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICA6aG92ZXIge1xuICAgIGFuaW1hdGlvbjogaG9yaXpvbnRhbC1zaGFraW5nIDAuNXMgaW5maW5pdGU7XG4gIH1gO1xuXG5leHBvcnQgY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3Qge2hlaWdodCwgd2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuICAgIGNvbnN0IFtjYWxjdWxhdGVkV2lkdGgsIHNldENhbGN1bGF0ZWRXaWR0aF0gPSB1c2VTdGF0ZSg2NDApO1xuXG4gICAgLy9oYW5kbGluZyByZXNpemVcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAod2lkdGggPCAxMDAwKSBzZXRDYWxjdWxhdGVkV2lkdGgod2lkdGggLSA1MCk7XG4gICAgICAgIGVsc2Ugc2V0Q2FsY3VsYXRlZFdpZHRoKDY0MCk7XG4gICAgfSwgW3dpZHRoXSk7XG5cbiAgICBjb25zdCBbbmFtZSxdID0gdXNlU3RhdGUocHJvcHMubmFtZSk7XG4gICAgY29uc3QgW2NvbXBvc2l0aW9uLF0gPSB1c2VTdGF0ZShwcm9wcy5jb21wb3NpdGlvbik7XG4gICAgY29uc3QgW3ZpZGVvVXJsLF0gPSB1c2VTdGF0ZShwcm9wcy52aWRlb1VybCk7XG4gICAgY29uc3QgW3Nob3dJZnJhbWUsIHNldFNob3dJZnJhbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGVuVmlkZW9CdXR0b25OYW1lLCBzZXRPcGVuVmlkZW9CdXR0b25OYW1lXSA9IHVzZVN0YXRlKFwi0JLRltC00LrRgNC40YLQuCDQstGW0LTQtdC+XCIpO1xuXG4gICAgY29uc3Qgb3BlblZpZGVvSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd0lmcmFtZSghc2hvd0lmcmFtZSk7XG4gICAgICAgIGlmIChzaG93SWZyYW1lKSB7XG4gICAgICAgICAgICBzZXRPcGVuVmlkZW9CdXR0b25OYW1lKFwi0JLRltC00LrRgNC40YLQuCDQstGW0LTQtdC+XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0T3BlblZpZGVvQnV0dG9uTmFtZShcItCX0LDQutGA0LjRgtC4INCy0ZbQtNC10L5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RmlsbVdyYXBwZXI+XG4gICAgICAgICAgICA8RmlsbUluZm8+XG4gICAgICAgICAgICAgICAgPHNwYW4+PEJzRmlsbFBlcnNvbkZpbGwvPiA8Yj57bmFtZX08L2I+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPHNwYW4+PEZhQm9va09wZW4vPiB7Y29tcG9zaXRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvcGVuVmlkZW9IYW5kbGVyfSB2YWx1ZT17b3BlblZpZGVvQnV0dG9uTmFtZX0+e29wZW5WaWRlb0J1dHRvbk5hbWV9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICB7c2hvd0lmcmFtZSA/IDxJZnJhbWVCb3ggc3JjPXt2aWRlb1VybH0gd2lkdGg9e2NhbGN1bGF0ZWRXaWR0aH0vPiA6IG51bGx9XG4gICAgICAgICAgICA8L0ZpbG1JbmZvPlxuICAgICAgICA8L0ZpbG1XcmFwcGVyPlxuICAgICk7XG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCaUxpbmtFeHRlcm5hbCwgR2lQb2RpdW1XaW5uZXJ9IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcbmltcG9ydCBqdWRnZXNfMjAyMyBmcm9tICBcIi4vaW5mby1wYWdlLWltZ3MvanVkZ2VzXzIwMjMuanBlZ1wiXG5pbXBvcnQgcG9zdGVyXzIgZnJvbSBcIi4vcmZzLXBhZ2UtaW1ncy9yZnMucG5nXCI7XG5pbXBvcnQgcG9zdGVyXzEgZnJvbSBcIi4vaW5mby1wYWdlLWltZ3MvUG9zdGVyXzIwMjRfdWEucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBMaW5rQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgQSA9IHN0eWxlZC5hYFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6IGRhcmtibHVlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuXG4gIDpob3ZlciB7XG4gICAgY29sb3I6IGRhcmtyZWQ7XG4gIH1cbmA7XG5cbmNvbnN0IFAgPSBzdHlsZWQuZGl2YFxuICBAa2V5ZnJhbWVzIGhvcml6b250YWwtc2hha2luZyB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgfVxuICAgIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpIH1cbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCkgfVxuICAgIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpIH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIH1cbiAgfVxuICAgIFxuICBtYXJnaW4tdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6ICdKdXJhJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IGRhcmtyZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgOmhvdmVye1xuICAgIGFuaW1hdGlvbjogaG9yaXpvbnRhbC1zaGFraW5nIDAuNXMgaW5maW5pdGU7XG4gIH1cbmA7XG5cbmNvbnN0IFBvc3RlciA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgUG9zdGVySW1nID0gc3R5bGVkLmltZ2BcbiAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDEwcHggcmdiYSgxMDAsIDAsIDAsIDAuNSkpO1xuICAgIGA7XG5cbiAgICByZXR1cm4gKDxQb3N0ZXJJbWcgc3JjPXtwcm9wcy5pbWdVcmx9Lz4pO1xufVxuXG5leHBvcnQgY29uc3QgSW5mb1BhZ2UyID0gKCkgPT4ge1xuICAgIHJldHVybiAoPFdyYXBwZXI+XG4gICAgICAgICAgICA8TGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8QSBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xX24wbkJWUnc3Y1Q4LXpSX0NLQlExWjhqbHR5LWN5SUovZWRpdD91c3A9c2hhcmluZyZvdWlkPTExMzg4MzkyMTI5OTE0NDQ0OTA1MyZydHBvZj10cnVlJnNkPXRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJpTGlua0V4dGVybmFsLz4g0KPRh9Cw0YHQvdC40LrQuCDQv9GA0L7QtdC60YLRgyDCq9Cg0ZbQstC90LXQvdGB0YzQutGWINGE0L7RgNGC0LXQv9GW0LDQvdC90ZYg0YHRgtGD0LTRltGWzIjCuyAyMDIzIDwvQT5cbiAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8UD7Ql9Cw0L/RgNC+0YjRg9GU0LzQviDQtNC+INGD0YfQsNGB0YLRliDRgyDQv9GA0L7QtdC60YLRljwvUD5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8UG9zdGVyIGltZ1VybD17cG9zdGVyXzJ9Lz5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG59XG5cblxuZXhwb3J0IGNvbnN0IEluZm9QYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiAoPFdyYXBwZXI+XG4gICAgICAgICAgICA8TGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8QSBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xMURDbWhYSlJqZ1E0UHBBUVVuaUw3ZTZCclRXc3FBdDIvZWRpdD91c3A9ZHJpdmVfbGluayZvdWlkPTExMzg4MzkyMTI5OTE0NDQ0OTA1MyZydHBvZj10cnVlJnNkPXRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJpTGlua0V4dGVybmFsLz4g0J/QvtC70L7QttC10L3QvdGPPC9BPlxuICAgICAgICAgICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFPRDBJa01nUUJaWC1lYkJRZnpzOFgybUwxaEpQb01Mcy9lZGl0P3VzcD1zaGFyaW5nJm91aWQ9MTEzODgzOTIxMjk5MTQ0NDQ5MDUzJnJ0cG9mPXRydWUmc2Q9dHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmlMaW5rRXh0ZXJuYWwvPiDQntGA0LPQsNC90ZbQt9Cw0YbRltC50L3QuNC5INC60L7QvNGW0YLQtdGCINC60L7QvdC60YPRgNGB0YMgPC9BPlxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxQPtCQ0YTRltGI0LAodWEpPC9QPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxQb3N0ZXIgaW1nVXJsPXtwb3N0ZXJfMX0vPlxuICAgICAgICAgICAgPFA+0KHQutC70LDQtCDQttGD0YDRljwvUD5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8UG9zdGVyIGltZ1VybD17anVkZ2VzXzIwMjN9Lz5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtSZXN1bHRzRmlsdGVyfSBmcm9tIFwiLi9SZXN1bHRzRmlsdGVyXCI7XG5pbXBvcnQge0NhcmR9IGZyb20gXCIuL0NhcmRcIjtcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtSZWd1bGFySGVhZGVyfSBmcm9tIFwiLi9SZWd1bGFySGVhZGVyXCI7XG5pbXBvcnQge0luZm9QYWdlLCBJbmZvUGFnZTJ9IGZyb20gXCIuL0luZm9QYWdlXCI7XG5cbmNvbnN0IENvbW1vbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBib3JkZXI6IDZweCBzb2xpZCAjMzMzO1xuICBtYXJnaW46IDIwcHg7XG5gO1xuXG5jb25zdCBNYWluU2VjdGlvbkZsZXggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1haW5TZWN0aW9uID0gKCkgPT4ge1xuXG4gICAgY29uc3QgY2FyZHMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXJkcyk7XG4gICAgY29uc3QgaXNEYXRhSW5QbGFjZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmlzRGF0YUluUGxhY2UpO1xuICAgIGNvbnN0IGNhcmRDb3VudCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhcmRDb3VudCk7XG4gICAgY29uc3Qgc2VjdGlvbnNGb3JGaWx0ZXIgPSBbXG4gICAgICAgIGDQkNGA0YXRltCy0L3RliDQstGW0LTQtdC+YCxcbiAgICAgICAgYNCd0L7QvNGW0L3QsNGG0ZbRjyDCq9Ck0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+wrtgLFxuICAgICAgICBg0J3QvtC80ZbQvdCw0YbRltGPIMKr0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YzCu2AsXG4gICAgICAgIGDQndC+0LzRltC90LDRhtGW0Y8gwqvQlNC+0LTQsNGC0LrQvtCy0LjQuSDRltC90YHRgtGA0YPQvNC10L3RgiAo0YTQvtGA0YLQtdC/0ZbQsNC90L4pwrtgLFxuICAgICAgICBg0J3QvtC80ZbQvdCw0YbRltGPIMKr0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgMK7YCxcbiAgICAgICAgYNCf0YDQviDQutC+0L3QutGD0YDRgWAsXG4gICAgICAgIFwi0KDRltCy0L3QtdC90YHRjNC60ZYg0YTQvtGA0YLQtdC/0ZbQsNC90L3QvdGWINGB0YLRg9C00ZbRl1wiXTtcblxuICAgIGxldCBpbmZvUGFnZSA9IChjYXJkQ291bnQ9PT0tMSk/PEluZm9QYWdlLz46PEluZm9QYWdlMi8+XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFJlZ3VsYXJIZWFkZXIgY2FyZENvdW50PXtjYXJkQ291bnR9Lz5cbiAgICAgICAgICAgIDxSZXN1bHRzRmlsdGVyIHNlY3Rpb25zPXtzZWN0aW9uc0ZvckZpbHRlcn0vPlxuICAgICAgICAgICAge2lzRGF0YUluUGxhY2UgPyAoXG4gICAgICAgICAgICAgICAgPENvbW1vbldyYXBwZXI+XG4gICAgICAgICAgICAgICAgPE1haW5TZWN0aW9uRmxleD5cbiAgICAgICAgICAgICAgICAgICAge2NhcmRzLm1hcChjYXJkID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y2FyZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvVXJsPXtjYXJkLnZpZGVvVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvc2l0aW9uPXtjYXJkLmNvbXBvc2l0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2FyZC5pZC4kb2lkfS8+XG4gICAgICAgICAgICAgICAgICAgICkpfTwvTWFpblNlY3Rpb25GbGV4PjwvQ29tbW9uV3JhcHBlcj4pIDogaW5mb1BhZ2V9PC8+KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7QWlPdXRsaW5lRmlsZVNlYXJjaCwgSGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGV9IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLXRvcDogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XG4gIHdpZHRoOiAxNSU7XG4gIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuXG4gIDpob3ZlciB7XG4gICAgYm9yZGVyOiBzb2xpZCBkYXJrcmVkIDJweDtcbiAgICBjb2xvcjogZGFya3JlZDtcbiAgfWA7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICBmb250LXNpemU6IDE1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmlucHV0Q29sb3IgfHwgXCJwYWxldmlvbGV0cmVkXCJ9O1xuYDtcblxuXG5jb25zdCBJbnB1dFN0eWxlID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDUwJTtcbmA7XG5cbmNvbnN0IElucHV0V3JhcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDYwcHg7XG5gO1xuXG5jb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcbmA7XG5cbmNvbnN0IEVycm9yID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7YFxuXG5jb25zdCBXYXJuID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTdweDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogeWVsbG93O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7YFxuXG5leHBvcnQgY29uc3QgUmVndWxhckhlYWRlciA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3Qgc2VhcmNoRmllbGQgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmVycm9yKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3Qge2hlaWdodCwgd2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgbGV0IHN0ciA9IFN0cmluZyhzZWFyY2hGaWVsZC5jdXJyZW50LnZhbHVlKTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPCAzIHx8IHN0ci5pbmNsdWRlcyhcIiBcIikpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIkVSUk9SXCIsIG1zZzogXCLQkdGD0LTRjCDQu9Cw0YHQutCwINCy0LLQtdC00ZbRgtGMINCx0ZbQu9GM0YjQtSAzINGB0LjQvNCy0L7Qu9GW0LIg0ZYg0L3QtSDQstC40LrQvtGA0LjRgdGC0L7QstGD0LnRgtC1INC/0YDQvtCx0ZbQu1wifSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJTRUFSQ0hcIiwgcXVlcnk6IHN0cn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxJbnB1dFdyYXBlcj5cbiAgICAgICAgICAgICAgICA8SW5wdXRTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4+PEFpT3V0bGluZUZpbGVTZWFyY2gvPtCf0L7RiNGD0Log0LLRltC00LXQviDQv9C+INC/0YDRltC30LLQuNGJ0YMg0YPRh9Cw0YHQvdC40LrQsCA8L1N0eWxlZFNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc30gcmVmPXtzZWFyY2hGaWVsZH0gdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNGW0YLRjCDQv9GA0ZbQt9Cy0LjRidC1INGD0YfQsNGB0L3QuNC60LAuLi5cIiBpbnB1dENvbG9yPVwiYmxhY2tcIi8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dFN0eWxlPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCJcIiBvbkNsaWNrPXtoYW5kbGVyfT7Qn9C+0YjRg9C6PC9CdXR0b24+XG4gICAgICAgICAgICA8L0lucHV0V3JhcGVyPlxuICAgICAgICAgICAge2Vycm9yICE9PSBcIlwiID8gPEVycm9yPjxIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZS8+e2Vycm9yfTxIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZS8+PC9FcnJvcj4gOiBudWxsfVxuICAgICAgICAgICAge3Byb3BzLmNhcmRDb3VudCA9PT0gMCA/XG4gICAgICAgICAgICAgICAgPFdhcm4+PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz7QstGW0LTQtdC+INC90LUg0LfQvdCw0LnQtNC10L3RljxIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZS8+PC9XYXJuPiA6IG51bGx9XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7RmFGb2xkZXIsIEZhVW5pdmVyc2l0eX0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcblxuY29uc3QgRmlsdGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XG4gIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtgO1xuXG5jb25zdCBGaWx0ZXJTZWN0aW9uID0gc3R5bGVkKEZpbHRlckNvbnRhaW5lcilgXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiAxNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xuICA6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBkYXJrcmVkO1xuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMTBweDtcbiAgICBcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERpdlRoaW5MaW5lID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogZ3JheSBzb2xpZCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGhlaWdodDogMiU7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuYDtcblxuY29uc3QgZ3Jvd18wID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICB9XG4gIDAlIHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH07XG4gIH1cbmA7XG5cbmNvbnN0IGdyb3dfMSA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcbiAgfVxuICAwJSB7XG4gICAgbGVmdDogMXB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xuICB9XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBUaGluTGluZUlubmVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICBsZWZ0OiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogcmVkIHNvbGlkIDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBoZWlnaHQ6IDElO1xuICBhbmltYXRpb246ICR7cHJvcHMgPT4gKHByb3BzLmFuaW1hdGlvbiAlIDIgPT09IDApID8gZ3Jvd18wIDogZ3Jvd18xfSAwLjVzIGxpbmVhcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBSZXN1bHRzRmlsdGVyID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBbc2VjdGlvbnMsXSA9IHVzZVN0YXRlKHByb3BzLnNlY3Rpb25zKTtcblxuICAgIGNvbnN0IFtyZWRMaW5lV2lkdGgsIHNldFJlZExpbmVXaWR0aF0gPSB1c2VTdGF0ZShcIjEwcHhcIik7XG4gICAgY29uc3QgW3JlZExpbmVMZWZ0LCBzZXRSZWRMaW5lTGVmdF0gPSB1c2VTdGF0ZShcIjEwcHhcIik7XG4gICAgY29uc3QgW2FuaW1hdGlvbiwgc2V0QW5pbWF0aW9uXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHtoZWlnaHQsIHdpZHRofSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgICBjb25zdCBtYXJrZWRTZWN0aW9uUmVmID0gdXNlUmVmKCk7XG5cbiAgICAvL2hhbmRsaW5nIHJlZExpbmUgb24gcmVzaXplXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVSZW5kZXJSZWRMaW4oe3RhcmdldDptYXJrZWRTZWN0aW9uUmVmLmN1cnJlbnR9KVxuICAgIH0sIFt3aWR0aF0pO1xuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gICAgZnVuY3Rpb24gcmVSZW5kZXJSZWRMaW4oZXZlbnQpIHtcbiAgICAgICAgbWFya2VkU2VjdGlvblJlZi5jdXJyZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBsZXQgY3VycmVudFNlY3Rpb25XaWR0aCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgbGV0IGN1cnJlbnRTZWN0aW9uTGVmdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gMTA7XG4gICAgICAgIHNldFJlZExpbmVXaWR0aChjdXJyZW50U2VjdGlvbldpZHRoICsgXCJweFwiKTtcbiAgICAgICAgc2V0UmVkTGluZUxlZnQoY3VycmVudFNlY3Rpb25MZWZ0ICsgXCJweFwiKTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBhbmltYXRpb24gKyAxO1xuICAgICAgICBzZXRBbmltYXRpb24oY291bnRlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25GaWx0ZXJTZWN0aW9uQ2xpY2soc2VsZWN0ZWRTZWN0aW9uLCBldmVudCkge1xuICAgICAgICByZVJlbmRlclJlZExpbihldmVudCk7XG4gICAgICAgIGxldCBzZWxlY3RlZFNlY3Rpb25TdHJpbmcgPSBzZWxlY3RlZFNlY3Rpb24uc2VjdGlvbjtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRTZWN0aW9uU3RyaW5nKTtcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZFNlY3Rpb25TdHJpbmcpIHtcbiAgICAgICAgICAgIGNhc2UgYNCg0ZbQstC90LXQvdGB0YzQutGWINGE0L7RgNGC0LXQv9GW0LDQvdC90ZYg0YHRgtGD0LTRltGXYDpcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJSRlNfUEFHRVwifSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGDQkNGA0YXRltCy0L3RliDQstGW0LTQtdC+YDpcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJBUkNISVZFXCJ9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYNCd0L7QvNGW0L3QsNGG0ZbRjyDCq9Ck0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+wrtgOlxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTFcIn0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBg0J3QvtC80ZbQvdCw0YbRltGPIMKr0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YzCu2A6XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZ3JvdXAtMlwifSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGDQndC+0LzRltC90LDRhtGW0Y8gwqvQlNC+0LTQsNGC0LrQvtCy0LjQuSDRltC90YHRgtGA0YPQvNC10L3RgiAo0YTQvtGA0YLQtdC/0ZbQsNC90L4pwrtgOlxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTNcIn0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBg0J3QvtC80ZbQvdCw0YbRltGPIMKr0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgMK7YDpcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJncm91cC00XCJ9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckluZm9QYWdlKHNlY3Rpb24pIHtcbiAgICAgICAgaWYgKHNlY3Rpb25bMF09PT1cItCg0ZbQstC90LXQvdGB0YzQutGWINGE0L7RgNGC0LXQv9GW0LDQvdC90L3RliDRgdGC0YPQtNGW0ZdcIil7XG4gICAgICAgICAgICByZVJlbmRlclJlZExpbihzZWN0aW9uWzFdKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIlJGU19QQUdFXCJ9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlUmVuZGVyUmVkTGluKHNlY3Rpb25bMV0pO1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiSU5GT19QQUdFXCJ9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCByZW5kZXJlZFNlY3Rpb25zID0gc2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgIHNlY3Rpb24gPT09IFwi0J/RgNC+INC60L7QvdC60YPRgNGBXCIgfHwgc2VjdGlvbiA9PT0gXCLQoNGW0LLQvdC10L3RgdGM0LrRliDRhNC+0YDRgtC10L/RltCw0L3QvdC90ZYg0YHRgtGD0LTRltGXXCI/XG4gICAgICAgICAgICA8RmlsdGVyU2VjdGlvbiAgb25DbGljaz17KCk9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNlYyA9IFtzZWN0aW9uLGV2ZW50XVxuICAgICAgICAgICAgICAgIHJlbmRlckluZm9QYWdlKHNlYylcblxuICAgICAgICAgICAgfX0ga2V5PXtzZWN0aW9ufT4gPEZhVW5pdmVyc2l0eS8+e3NlY3Rpb259PC9GaWx0ZXJTZWN0aW9uPlxuICAgICAgICAgICAgOiA8RmlsdGVyU2VjdGlvbiAgcmVmPXttYXJrZWRTZWN0aW9uUmVmfSBvbkNsaWNrPXtlID0+IG9uRmlsdGVyU2VjdGlvbkNsaWNrKHtzZWN0aW9ufSwgZSl9IGtleT17c2VjdGlvbn0+IDxGYUZvbGRlci8+e3NlY3Rpb259PC9GaWx0ZXJTZWN0aW9uPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxTdHlsZWRSZXN1bHRzRmlsdGVyV3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8RmlsdGVyQ29udGFpbmVyIGNoaWxkcmVuPXtyZW5kZXJlZFNlY3Rpb25zfS8+XG4gICAgICAgICAgICA8L1N0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyPlxuICAgICAgICAgICAgPERpdlRoaW5MaW5lPjxUaGluTGluZUlubmVyRGl2IHdpZHRoPXtyZWRMaW5lV2lkdGh9IGxlZnQ9e3JlZExpbmVMZWZ0fSBhbmltYXRpb249e2FuaW1hdGlvbn0vPjwvRGl2VGhpbkxpbmU+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuIiwidmFyIHNyYyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJQb3N0ZXJfMjAyNF91YS1jMzczYzlhNmZiMjY0ZDMzN2Y2NGYyMmY5NzVlY2Q3Zi5wbmdcIjttb2R1bGUuZXhwb3J0cz17c3JjOnNyYyx3aWR0aDoyMzM5LGhlaWdodDozMzA4LGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiLCJ2YXIgc3JjID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImp1ZGdlc18yMDIzLWE3ODYzOGY1OTlhOTQ3Y2I1Yjk4ZGI5ZjA4ZTMzNjAzLmpwZWdcIjttb2R1bGUuZXhwb3J0cz17c3JjOnNyYyx3aWR0aDozNjAwLGhlaWdodDo1MDg0LGZvcm1hdDpcImpwZWdcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07IiwidmFyIHNyYyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJyZnMtMjNhOWZmNDIzYjY1NmU0ZjdhMWJkNDJkYTk2NDM2OWYucG5nXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6MjcwMCxoZWlnaHQ6MzkwMCxmb3JtYXQ6XCJwbmdcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gZ2V0V2luZG93RGltZW5zaW9ucygpIHtcbiAgICBjb25zdCB7IGlubmVyV2lkdGg6IHdpZHRoLCBpbm5lckhlaWdodDogaGVpZ2h0IH0gPSB3aW5kb3c7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gICAgY29uc3QgW3dpbmRvd0RpbWVuc2lvbnMsIHNldFdpbmRvd0RpbWVuc2lvbnNdID0gdXNlU3RhdGUoZ2V0V2luZG93RGltZW5zaW9ucygpKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgICAgICAgIHNldFdpbmRvd0RpbWVuc2lvbnMoZ2V0V2luZG93RGltZW5zaW9ucygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHdpbmRvd0RpbWVuc2lvbnM7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldCcpKTtcblxuIiwiZXhwb3J0IGxldCBhZGRpdGlvbmFsSW5zdHJ1bWVudHMgPSBbXSIsImxldCBteUNhcmRzID0gW1xuICAgIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMDdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkNCz0YDQsNGC0ZbQvdCwINCh0YLQsNC90ZbRgdC70LDQsiwgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7Qk9C70ZbQvdC60LAuICcn0J/QvtGH0YPRgtGC0Y8nJywgICAgICAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Ci0LDQvdC+0LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOTR5dF9zS0M1RXQzcjQ5ekNFUnNkQlplRFFnWS1HX2kvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LDQu9GW0LPRg9GA0LAg0JLQsNGA0LLQsNGA0LAsIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLtCb0LXQvNGW0YjQutC+LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjNmhUSXFEbC1jQUYzQnIzbDFjMnV3cUZac0xWU1BUdi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzA5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQsNC70ZbQs9GD0YDQsCDQktCw0YDQstCw0YDQsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIu0JzQsNC60YHRltC80L7Qsi4gJyfQl9Cw0LTQt9C10YDQutCw0LvQu9GPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTVZcjZReG00cnN0RE9NVTJ2R241SndxNVZmVXBOMlNEL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktCw0YHQuNC70LXQstGB0YzQutCwINCl0YDQuNGB0YLQuNC90LAsNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCT0ZbQu9C70L7Qui4nJ9Ch0LDQvNC+0YLQvdGPINCx0LDQu9GM0L3QsCDQt9Cw0LvQsCcnLCAgIDIp0KIu0KDQvtGB0YLQuNC80LDRiNC10L3QutC+Licn0KfQsNC60LvRg9C9JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUd0eFVLdVVrTEtBbmg1b0NmOUZsdWlVVFFvSkNUYk1NL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0LvQuNC90LXRhtGMINCe0LvQtdC60YHQsNC90LTRgCwgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCa0L7Qu9C+0LTRg9CxLiAnJ9CQ0YDQutCw0L0nJywyKdCkLtCg0LjQsdGW0YbRjNC60LjQuS4gJyfQoNC10LPQvtGC0YPRiNC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX0NPUGVQendkZ1M3VV9PakV4T3B2OG5vejFtaVRlOGMvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LDQu9Cw0LPQsNC9INCa0LDRgtC10YDQuNC90LAsIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuINCi0LXQvNCwINC3INCy0LDRgNGW0LDRhtGW0Y/QvNC4LCAyKdCTLtCa0YPRiNC90LDRgNC10L3QutC+LiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9CbFVmWFdxbGg1dURzREZDWGJIZ2M3WEdpQUpHYkxIL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C10YDQsNGB0LjQvNC10L3QutC+INCe0LvQtdC60YHQsNC90LTRgNCwLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCSLtCg0LDRh9C60L7QstGB0YzQutC40LkuINCi0L7QutCw0YLQuNC90LAuIDIp0JIu0JrQvtGB0LXQvdC60L4uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xREduc1NRR2xCdThYX29EUHQzWUt0S21pVnpWLUczcUovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0L7Qu9C+0LTQvtCy0YHRjNC60LAg0KHQvtGE0ZbRjywgNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCGLtCS0LDQvdGF0LDQu9GMLtCg0L7QvdC00L4sIDIp0Jwu0JTRgNC10LzQu9GO0LPQsC4nJ9CS0LXRgdC10LvQsCDQs9GA0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMkt1dGotb3dwc3I4aGVscm1fa0ZaaDF5UXdNakVDN0EvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0L7Qu9GD0LEg0JDQu9GW0L3QsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwg0IbRhy4sIDIp0JEu0JTQstCw0YDRltC+0L3QsNGBLiDQn9GA0LXQu9GO0LTRltGPXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1d2hLTUtkSlpJaFJ6bk0zVlU1bVRxRXVLeHhUZXNhTy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzEwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNC40LPQvtGAJ9GU0LLQsCDQmtCw0YLQtdGA0LjQvdCwLCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0KDQsNC90L7QuicnLCAgIDIp0IYu0JrQvtGA0L7Qu9GM0LrQvtCy0LAuJyfQk9C+0YDQvtCx0YfQuNC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFpTXY1THdZVjltMnd6LVNKTUdueGZVcUlSVDlNX0V3L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNCw0L3RjtC6INCE0LvQuNC30LDQstC10YLQsCwgNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCb0Y7QsdCw0YDRgdGM0LrQuNC5Licn0KLQsNC90YbRjtCy0LDQu9GM0L3QsCcnLCAyKSDQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuINCS0LDQu9GM0YFcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXZUa19tQUJfRUNoOVZEd1I2RU1hc1kxeTIxS1dyU1lIL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNGA0L7Qs9Cw0L0gINCc0ZbQu9Cw0L3QsCwgNSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCc0LDQudGU0YAuICcn0JLQtdGB0LXQu9CwINCz0YDQsCcnLCAyKdCULtCR0LDRiNGC0LXQudC9LiAnJ9CS0LDQu9GM0YEg0YHQu9C+0L3QtdC90Y/RgicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYYjBnSWdGeUNuTHVDeGpuNWtsYWVRMExsOURza1JQei9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzEzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRgNC+0LfQtNC+0LLQsCDQhNC70LjQt9Cw0LLQtdGC0LAsIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLtCc0LXQvdGD0LXRgi4gMinQky7QmtC70LDRgdGB0LXQvS4g0J/QvtC70YzQutCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyNV8xOHBSN0JMeERTREVuTUQ3ckhOR2pSOXppRWlHbi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JfQsdGW0YAg0JzQsNGA0ZbRjywgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCT0LXQtNGW0LrQtS4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsICAgINCGINGHLiwgMinQoC7QqNGD0LzQsNC9Licn0J/QtdGA0YjQsCDQstGC0YDQsNGC0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xXzdxbjNmVHV0ZEtHY0dkYmd2MTNyS29rSjhqeGdrM2EvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90YzQutGW0LIg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QlNGW0LDQsdC10LvQu9GWLiDQodC60LXRgNGG0L4sICAyKdCeLtCT0LXQtNGW0LrQtS4gJyfQnNCw0LvQtdC90YzQutCwINC/J9GU0YHQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF2WWVWa1JhVjFtYjMzdUoxREdNcjIwcW9pa0ZDcjlBeS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjtC6INCc0LDRgNGW0LDQvCwgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QnNCw0LnQutCw0L/QsNGALiAnJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINGB0L7Qu9GMINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJSbExNSmpvV3dUVnVwN192Vk1ENEQzbmwyWS1sc3BPL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JzQsNGA0ZbQsNC8LCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QmtC40YDQtdC50LrQvi4gJyfQodGC0YDQuNCxLdGB0LrQvtC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUltcFBxOW5jYk1oNVQxU2NBSGZEbXo1N0JEbExaQ0YyL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMThcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtGB0YPQv9C+0LLQsCDQkNC70ZbRgdGW0Y8sIDgg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0KDQtdC50L3QtdC60LUuICcn0JPQsNCy0L7RgicnLCAyKdCZLtChLtCR0LDRhS4gJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDQtNC+INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBnOUNDSm9YUnplRzhDaUZoZ25FQnpUUUJMSVdEYW5BL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0LLQsNC70LXQvdC60L4g0JLQsNGA0LLQsNGA0LAsIDgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7Qk9C10YLQsNC70L7QstCwLicn0KDQsNC90L7QuiDQsiDQu9GW0YHRlicnLCAgMinQki7Qn9C+0LTQstCw0LvQsC4gJyfQmtCw0L/RgNC40LfRg9C70Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUzM4X29FQ09CbzdLR0RWMWF6SlV4M3pPWXdnUUVRSVYvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7RgNC10L3RltCy0YHRjNC60LAg0JTQsNGAJ9GPLCA5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCgLtCS0LDQvdC00LDQuy4nJ9CS0L7QtNC+0LPRgNCw0LknJywgICAgICAgICAyKdCfLtCX0LDRhdCw0YDQvtCyLicn0JfQvdCw0LnQvtC80LjQuSDRgdC40LvRg9C10YInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOUNBelBDYVdyQU5fU1d6YUpGZEVweFBJT1F3LXJmTFUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7RgdGC0LXQvdC60L4g0K/RgNC+0YHQu9Cw0LLQsCwgNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JrQvtGB0LXQvdC60L4uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQ2RkWWNveWdUY3RvYWJHUUY3cFQycG9SdkN1cFZHX2MvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7RgdGC0LXQvdC60L4g0K/RgNC+0YHQu9Cw0LLQsCwgNyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JnRlNC90YHQtdC9Licn0KfQsNGA0ZbQstC90LjQuSDRgtCw0L3QvtC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXVCMjliVFBFaVlkdWdKZkxPWmw0U1FHckZZOW5RcHItL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9Cw0YLQutC+0LLRgdGM0LrQsCDQhNC70LjQt9Cw0LLQtdGC0LAsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtC+0YHQtdC90LrQvi4g0JLQsNC70YzRgSwgICAgMinQni7Qk9GA0LXRh9Cw0L3RltC90L7Qsi4nJ9Cc0ZbQuSDQutC+0L3QuNC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZZQXctcTdmOEY5SkJQbWZuOHRFa3BKVDgxSjdFYWhBL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9GW0YjQvNCw0L0g0JTQsNGA0LjQvdCwLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0J/QvtC00LLQsNC70LAuJyfQnNCw0YDRiC3Qs9GA0L7RgtC10YHQuicnLCAgICAgICAgICAyKdChLtCc0LDQudC60LDQv9Cw0YAuICcn0JrQvtC70LjRgdC60L7QstCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5zV3ozVFIwU0tpVHRjTkNBSmUwNTliaGhGb210X05FL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LPQvtC70LAg0KHQvtGE0ZbRjywgOCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQry7QkdC+0LHQsNC70ZbQui4nJ9Ch0LLRj9GC0LrQvtCy0LAg0L/QvtC70YzQutCwJyc7IDIp0IYu0JHQtdGA0LrQvtCy0LjRhy4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFndUF4czVnX3diR3ZfdHdxaXlwbzBlOEZIT3d1bS1JaC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzIwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNC30YPRgNC10L3QutC+INCc0LDQudGPLCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JwuINCR0L7QsdC10YAuICcn0JDQs9C10L3RgiDQpScnLCAgICAgICAgICAyKdCGLtCG0L7RgNC00LDQvS4gJyfQn9C+0LvRjtCy0LDQvdC90Y8g0L3QsCDQvNC10YLQtdC70LjQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUllMVdDUXBnUHVMWWRLTnhWR3VMa2VJVm5ZSk5aSjlUL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0YDRh9C10L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4nJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINC00L4g0LzRltC90L7RgCwgMinQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0JHQsNCx0LAg0K/Qs9CwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVpKbzRHVUxaOXNmY1V1QXBGNWp5b0hJVVZfSUtBVnJnL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0YDRh9GD0Log0JzQsNC60YHQuNC8LCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQpC4g0KjQv9GW0L3QtNC70LXRgC4g0KHQvtC90LDRgtC40L3QsCwg0YLQsi4xNTcg4oSWNFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xc0M3TVVqY2tucm5aWlo1aGZNQ1hiU3ZzMzZLQTNwcFYvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDRgNGH0YPQuiDQnNCw0LrRgdC40LwsIDgg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQk9GW0LvQu9C+0LouICcn0JrQsNC/0YDRltGH0ZbRlNGC0YLQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZZEFpaHZBUWtDVDhiYnlXNDRwUWkyaVpobVgxYzNLei9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQvtGC0YPQt9C60LjQvdCwINCb0ZbQtNGW0Y8sIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCR0ZbQu9Cw0YfQtdC90LrQvi4gJyfQo9C60YDQsNGX0L3RgdGM0LrQuNC5INGC0LDQvdC+0LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYnBPOWRIQWNiUDhLbGFXVF8xblhYUWlaZWJ1RDhGMHAvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0L7RgtGD0LfQutC40L3QsCDQm9GW0LTRltGPLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QnNC+0YbQsNGA0YIuICcn0JzQtdC90YPQtdGCJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNfbXhBVTY1VnZ2dmZpUG9SUXNjS1Iwb1VEV3BIRFF0L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQndC+0LLQvtGB0ZbQu9GM0YHRjNC60LAg0JrQsNGC0LXRgNC40L3QsCwgNyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwINGC0LIuMzYsINCGLdCG0IbQhtGHLiwgMinQhi7QkdC10YDQutC+0LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZNzJDRkxPTVBpYndUVVBnV09tc1FIM1lKUHZpQmpEYS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qu9GM0YXQvtCy0YHRjNC60LAg0JDQvdGW0YLQsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0IYu0J/QsNCy0LvRltC6LiAnJ9Ch0L3RltC20LjQvdC60LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcnMtVmdGTW5JWVpWbTlrT2pOaDZGVGxfUDBDQURSQjEvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCe0LvRjNGF0L7QstGB0YzQutCwINCQ0L3RltGC0LAsIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCdLiDQmtCw0YDQv9C10L3QutC+LiDQldGC0Y7QtCDRgdGWINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtTM0JxUXc0LW1zTW96bk8zTnpfaVdjNXl0bEpPRlRtL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQntGB0YLQsNC/0YfRg9C6INCa0LDRgNGW0L3QsC4gOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCT0ZbQu9C70L7QuiAnJ9CU0LfQstGW0L3QvtGH0LrQuCcnLCAyKdCGLtCl0YPRgtC+0YDRj9C90YHRjNC60LjQuS4gJyfQktC+0LPQvdGW0LLQvtGH0LrQsC3RgdGC0YDQuNCx0YPQvdGW0LLQvtGH0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2UkFjTjJPNmt1bktaQUZyYmdCSHNFTmlaZzlpS3M0Ry9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7RhdGA0ZbQvSDQr9GA0LXQvNCwLCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4gJyfQndC+0LLQtdC70LAnJywgICAgICAyKdChLtCc0LDQudC60LDQv9Cw0YAuJyfQotC+0LrQsNGC0LjQvdCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXp3MUpLMEo0ZDhIay16bmJ2LTVvRG5hLXFMM2N3UkVQL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMmJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0LLQu9C10L3QutC+INCh0YLQtdGE0LDQvdGW0Y8sIDcg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JvRjtCx0LDRgNGB0YzQutC40LkuICcn0J/RltGB0L3RjycnLDIpINCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4nJ9Ca0LvQvtGD0L3QuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJbW53SmoyRGVxei1USmZ2WEFDQ3JacGlaTlQzQm5LSC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNC90YzQutC+0LLQsCDQkNC90L3QsCwgOCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuICcn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0LTQviDQvNGW0L3QvtGALCAgICAgICAgMinQmy7QqNGD0LrQsNC50LvQvi4gJyfQhtC90YLQtdGA0LzQtdGG0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeXJBSHI2aTE3TlNoUDVxYUltUG5XeC14SlFqQ01NeTIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDRgNGE0YzQvtC90L7QsiDQlNC80LjRgtGA0L4sIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QktC70LDQtNC40LrRltC90LAt0JHQsNGH0LjQvdGB0YzQutCwLicn0KnQvtGB0Ywg0YHRg9C80L3QtScnLCAyKdCeLtCT0LXQtNGW0LrQtS4gJyfQotCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTkRkdzU3UnNybUxyRV95V1NHMHVGSlhFaldjR3FHbVIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0L7Qs9C+0YDRlNC70L7QsiDQkNGA0YLQtdC8LCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiAnJ9Cc0LXQvdGD0LXRgicnLCAyKdCdLtCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuZTg2aU0tTlVzNk5jaW9Cc3ZVamZRYTZNbjdjU0FSNy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/Rg9C30LDQvdC+0LLQsCDQnNCw0YDRltGPLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KMuINCT0ZbQu9C70L7Qui4gJyfQmtC+0YDQvtC70ZbQstGB0YzQutC40Lkg0LzQtdC90YPQtdGCJycsIDIp0IYu0IbQvtGA0LTQsNC9LiDCq9Cf0L7Qu9GO0LLQsNC90L3RjyDQvdCwINC80LXRgtC10LvQuNC60LDCu1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xT0dTX2Zxekp2YkI3YU5QcmV4d3FESzV4MGxzLTIwQ0MvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LXQt9C90ZbQuiDQotC10YLRj9C90LAsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QotC+0YDQvtC/0L7QstCwLiDQktCw0YDRltCw0YbRltGXLCAgICAgMinQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuICcn0JzQsNC70LXQvdGM0LrQuNC5INC20L7QvdCz0LvQtdGAJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhHeE5UVHRXcmhkT3U2WTdHdWVVQWdHWHZqb0xsTUJsL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNC40LHQsNC6INCQ0L3QsNGB0YLQsNGB0ZbRjywgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKS7QnNC10LvQsNGA0YLRltC9Licn0KDQsNC90L7QuicnLCAyKdCcLtCc0LDQudGU0YAuJyfQndC10LfQstC40YfQsNC50L3QsCDQv9GA0LjQs9C+0LTQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1em1WcUZWbm5RYUlHWDdvM0gtN3ROZTBrcDFaaVV2UC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzMyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDRltC/0L3QuNC5INCR0L7Qs9C00LDQvSwgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQhi4g0JHQtdGA0LrQvtCy0LjRhy4g0JLQsNGA0ZbQsNGG0ZbRlywgICAgIDIp0JQuINCg0L7Rg9C70ZYuJyfQkiDQutGA0LDRl9C90ZYg0LPQvdC+0LzRltCyJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVFscjFfLXBGQWxMSWl4S2toeDItWnh4RVlaaEFaOVo3L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNC+0LzQsNC90YfQtdC90LrQviDQldC70LjRgdC10LksIDgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Kgu0JPRg9C90L4uJyfQnNCw0YDRiCDQvNCw0YDRltC+0L3QtdGC0L7QuicnLCAgIDIpINCeLtCT0YDQtdGH0LDQvdGW0L3QvtCyLicn0J3QtdC30LLQuNGH0LDQudC90LAg0L/RgNC40LPQvtC00LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaUktempxNFFpbURMOVRMRTVCUll1cm11QUwxNmZTY1UvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQudGH0YPQuiDQr9GA0L7RgdC70LDQstCwLCA5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi4g0JzQsNC60YHQuNC80L7Qsi4nJ9CR0LDQsdCwINCv0LPQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYNUM3a2ZOZDNRbG9abDBUQXZOX0FRaDAtcVh0cFNTQi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNC50YfRg9C6INCv0YDQvtGB0LvQsNCy0LAsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCaLtCg0L7Qu9C70ZbQvS4gJycg0KjQvtC60L7Qu9Cw0LTQvdC1INC/0LXRh9C40LLQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2dlltX0VkRHhfLTNCUkhKTXlEMzVrM29DNEYydFY1Ni9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRltGC0YjQsNGU0LLQsCDQl9Cw0YDQtdC80LAsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YA7IDIp0Jou0KHQu9C+0L3RltC80YHRjNC60LjQuS4gJyfQlNGO0LnQvNC+0LLQvtGH0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFINmVkUXRzUnAwX3djdU9ZUkFFaDFsZmZSejBUWHRpYi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQhNCy0LPQtdC90ZbRjywgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0LLQsNGB0L3QtdCy0YHRjNC60LjQuS4nJ9CU0YPQvNC60LAnJywgMinQlC7QkNC70LXQutGB0LDQvdC00LXRgC4gJyfQl9C40LzQvtCy0LAg0YDQsNC/0YHQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2TFc5RWVzUFBzMVNUaTZrUXBReGRFSnprM1BnbkhZai9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRgtGA0LjQudGB0YzQutCwINCQ0LzQtdC70ZbRjywgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQki7QmtC+0YHQtdC90LrQvi4nJ9CU0L7RidC40LonJzsgICAgICAyKdCeLtCR0ZbQu9Cw0YfQtdC90LrQvi4gJyfQldC60YHQv9GA0L7QvNGCJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBoOU9OUkcyVDQydnhBbFd5NEFTUDBxZ2E4SVUwMnJ2L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodGC0YPQtNC30LjQvdGB0YzQutCwINCE0LvQuNC30LDQstC10YLQsCwgNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy4g0JzQvtGG0LDRgNGCLiAnJ9Cc0LXQvdGD0LXRgicnLCAgICAyKdCjLiDQk9GW0LvQu9C+0LouICcn0J7RgdGW0L3QvdGW0Lkg0LXRgdC60ZbQtycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWZHNPYnViOVowRTdaTTFRWU1zZnFrYWxqbm5MUTJqZS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRg9GF0LDQvSDQlNGW0LDQvdCwLCA4INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCo0YPQutCw0LnQu9C+LtCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRgtC10LzRgyDQki7QqNCw0ZfQvdGB0YzQutC+0LPQvjsgMinQoC7QpNGD0YfRgS4nJ9Cc0LDQu9C10L3RjNC60LUg0YDQvtC30LHQuNGC0LUg0YHQtdGA0YbQtScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHdTV1Y29DR0ZoeUVuTWgzLUlEVUotdUYwVHVqMzdVWi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQtdGA0L8n0Y/QuiDQkNCw0YDQvtC9LCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCGLtCR0LXRgNC60L7QstC40YcuINCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRg9C60YDQsNGX0L3RgdGM0LrRgyDRgtC10LzRgzsgMinQoi7QntGB0YLQtdC9LiAnJ9Cc0LDQu9C10L3RjNC60LjQuSDQtdC70YzRhCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFadFFiTkJCZ0dtT3pNV25uSEFGLTdfQ0JzWGszTHctMi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQuNC80YfQtdC90LrQviDQndCw0LTRltGPLCA4INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCo0YLQvtCz0LDRgNC10L3QutC+LiAnJ9Cc0LXRgtC10LvQuNC6JycsIDIp0JIu0JPRltC70LvQvtC6LiAnJ9Cc0ZbRgdGP0YfQvdC1INGB0Y/QudCy0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUFM5QUdIeUVEcXN0anFBMU1pRWJUa3A1ajFVdVNockcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0ZbRidC10L3QutC+INCS0LXRgNC+0L3RltC60LAsIDcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuICcn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0LTQviDQvNGW0L3QvtGALCAyKdCbLiDQqNGD0LrQsNC50LvQvi4g0JLQsNGA0ZbQsNGG0ZbRl1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRnRyajlrNWpoRHhWaTV1ZmhYWTNUSGt3T0s4WTEySG0vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0L7QtNC+0YDQvtCy0LAg0JTQsNGP0L3QsCwgNiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCR0LDRgNCy0ZbQvdGB0YzQutC40LkuICcn0JfQsNC50YfQuNC6JycsICAgICAgICAgIDIp0Jwu0JvRjtCx0LDRgNGB0YzQutC40LkuICcn0J/Qu9GP0YHQvtCy0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUEF6SUJ0akcwTmZxYXpVSTI1SHNSckZWWGpMeXoyQmkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0L7QvdGW0ZTQstC40Ycg0JrRgdC10L3RltGPLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0KHQv9GW0LvRltC+0YLRli4nJ9CT0YPRhtGD0LvRj9GC0LAnJywgICAyKdCSLtCT0ZbQu9C70L7Qui4nJ9CjINGB0YLQsNGA0L7QvNGDINCS0ZbQtNC90ZYnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMTl3M3duSE1wNlhOV1NLS3I5VkpJb1lqVklQOU1sQU8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0Y7RgtGM0LrQviDQktC+0LvQvtC00LjQvNC40YAsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QmtGD0LvQsNGDLtCh0L7QvdCw0YLQuNC90LAsINGC0LIuNTUg4oSWMywgMinQoC7Qm9GW0YHQvtCy0LAuJyfQktC10YHQtdC70LjQuSDQvdCw0YHRgtGA0ZbQuScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFiZy1ISzdMcDNVd2pHazNNSVRUZEQ5ZVE3ckZkaHgxSC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzQxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdGB0LXQvdC60L4g0JDQvdC90LAsIDgg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JPQtdC00ZbQutC1LtCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCAgMinQki7Qk9Cw0LLRgNC40LvRltC9LiAnJ9Ca0LDQv9GA0ZbRh9GH0ZbQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFanJxOFpFWEJKcV9BTmZBaVktNWpLSDdSczU4Zkx1Qy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzQyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfQvtGA0L3QtdC5INCv0L3QsCwgNyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC4g0JXQutGI0YLQtdC50L0uICcn0JrQsNC/0YDQuNC3INCz0L3QvtC80ZbQsicnOyAgMinQoS7QrtGE0LXRgNC+0LIuICcn0J3QvtC60YLRjtGA0L0nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZzZiQjdhcVdwdHc1bExuQWlYa2xPRnBRbDRYME5MS2ovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LrRg9GA0LrQviDQotC40LzQvtGE0ZbQuSwgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNC+0L/QtdC9LiAnJ9CS0LDQu9GM0YEnJyDQu9GPINC80ZbQvdC+0YAsICAgICAyKdCbLtCo0YPQutCw0LnQu9C+LiAnJ9CS0LXRgdC10LvQsCDQvNC+0LfQsNGX0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFlSko0NFpiZ1RyVVRkSC10QlBLR3ljMUtfMHJyeWo0Xy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzQ0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0K7RgNGH0YPQuiDQr9C90LAsIDcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JwuINCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAsINGC0LIuMzYg4oSWMSwg0IYg0YcuLDIp0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4gJyfQktGA0LDQvdGW0YjQvdGPINC80L7Qu9C40YLQstCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9QVXVIMnF6YVFVTHlwdnV5M002US1mN3Z2aFpsQW54L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNDVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkNC80ZbRhdCw0LvQsNC60ZbQvtCw0ZQg0ITQvNC10LvRjNGP0L0sIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0JHRltC70LDRh9C10L3QutC+Licn0J7RgdGW0L3QvdGW0Lkg0LXRgdC60ZbQtycnLCAyKdCcLtCa0LDRgNC80ZbQvdGB0YzQutC40LkuICcn0JPRg9C80L7RgNC10YHQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6ZnFreUc2QnBaM18xWFhkZl9GVllPV0ZtcGFraldXUC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCQ0L3RgtC+0L3RjtC6INCS0LDRgNCy0LDRgNCwLCAxMiDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0J/Qu9C10LnRlNC70YwuINCh0L7QvdCw0YLQuNC90LAg0YDQtSDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xREplSGYzZkF1WjU1UGY2NW1NQXR3MlBjdDk2ZGZhLXQvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNDdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkNC90YLQvtC90Y7QuiDQktCw0YDQstCw0YDQsCwgMTIg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCc0LDQudC60LDQv9Cw0YAuJyfQkiDQutC+0LLQsNC70YzQvdGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsWHlLdXdNX0pneFlabDZlV2tBc2VVNnZOYVd6N3BZei9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LDQsdGH0LDQvdGW0Log0JDQvdC00YDRltC5LCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlC7Qp9C40LzQsNGA0L7Qt9CwLiDQodC+0L3QsNGC0LjQvdCwINGB0L7Qu9GMINC80LDQttC+0YAuIDIp0K4u0JHRltC70LrQvtCy0YHRjNC60LjQuS4gJyfQoNC+0LfQtNGD0LzQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVUhBc05LamNKaUJneEFkSUxPc2pERVJKS1FNemVxN0EvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNDlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdCw0LvRg9GC0LAg0JDQu9GW0L3QsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEpINCVLtCT0YDRltCzLiAnJ9Ci0LDQvdC10YbRjCDQtyDQmdC+0LvRjNGB0YLQtdGA0LAnJywgMinQmy7Ql9Cw0LHQsNGA0LAuJyfQndGW0Ycg0Y/QutCwINC80ZbRgdGP0YfQvdCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvWEdGM200MUstUU44WTEtV19qODVEclRqa2s4OHNRWC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LDRgdC40YHRgtCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQpC7QqNC+0L/QtdC9LiDQktCw0LvRjNGBLCDRgtCyLjY0IOKEljEsIDIp0KEu0JHQvtGA0YLQutC10LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPLCDRgtCyLjYg4oSWMVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXNQV1pTUG40VU1KVmRmejczZ3JhRHdkd0l4eVhnakJZL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzRiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHRltC70ZbQvdC60LXQstC40Ycg0J3QsNGC0LDQu9GW0Y8sIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLtCb0LjRgdC10L3QutC+LiDQldC70LXQs9GW0Y8sMinQmi7Qp9C10YDQvdGWLiDQldGC0Y7QtCDihJYxINGC0LIuNzQwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQVJfV1cwQ0ZTU0NYelZBZnJIWHV3QkFELV9RQzhqNlcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGD0LvRjNC60L7QstGB0YzQutCwINCc0LDRgNC40L3QsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCULtCn0ZbQvNCw0YDQvtC30LAuINCh0L7QvdCw0YLQsCDRgdC+0LvRjCDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYm94ZHRnQWRoQklKZHRjeGR6blpIUC1xNWZhcWE1UUsvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGD0LvRjNC60L7QstGB0YzQutCwINCc0LDRgNC40L3QsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0JPQsNCx0LXQuy4gJyfQlNC10YDQtdCy0L4g0LbQuNGC0YLRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZlhaNk5kc042dTc4dEk2ZXJLRWpYMm9mZXNIQjJlYmgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktCw0LrRg9C70LXQvdC60L4g0JDRgNGW0L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLtCR0LXRgNC60L7QstC40YcuINCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRgtC10LzRgyDQs9GA0YPQt9C40L3RgdGM0LrQvtGXINC90LDRgNC+0LTQvdC+0Zcg0L/RltGB0L3RliAnJ9Ch0LLRltGC0LvRj9GH0L7QuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQ2R0WG9WempFbDFZcVZDZEJ5eEtzWmRxRWpmdDFoczYvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktCw0LrRg9C70LXQvdC60L4g0JDRgNGW0L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCU0LbQvtC/0LvRltC9Licn0JDRgNGC0LjRgdGCINC10YHRgtGA0LDQtNC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHbnRpWXZMekhyVVhJc1dEZmRIcDQwLXR0NXlZdWlncS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LDRgdC40LvRjNGU0LLQsCDQktC10YDQvtC90ZbQutCwLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCgLtCT0LvRltGU0YAuINCf0YDQtdC70Y7QtNGW0Y8g0LTQviDQvNGW0L3QvtGAOzIp0KEu0JTQttC10YDQsdCw0YjRj9C9LiAnJ9Co0LLQuNC00LrQuNC5INGA0YPRhScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUUJndGRodzJJUWVUSDZRRVluS0xHQmFsWDBLMnVwTjQvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0LnRgtC10L3QutC+INCb0ZbQu9GW0Y8sIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLiDQqNGD0LrQsNC50LvQvi4nJ9Cf0L7QvdGWJycsIDIp0J4u0KDQuNCx0LDQu9C+0LLQsC4gJyfQndC10L/QvtGB0LjQtNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEtTF9rSkh1MVBwa1BHUkNKX0VmeEZMQmJtYzhmT093cS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7QudGH0LXQvdC60L4g0JLQu9Cw0LTQuNGB0LvQsNCyLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSkg0Jku0KEu0JHQsNGFLtCU0LLQvtCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YTQsCDQvNCw0LbQvtGAOyAyKdCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9INC00L4g0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXd1NWtsWEdHN0JoMmZQbFIzWWJlTWxTS1pCVDhQUm5OL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzUzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQvtGJ0LjQvdGB0YzQutC40Lkg0IbQu9C70Y8sIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JUu0JPRgNGW0LMuINCd0L7QutGC0Y7RgNC9LCAyKdCcLtCg0LjQvNGB0YzQutC40Lkt0JrQvtGA0YHQsNC60L7Qsi4gJyfQn9C+0LvRltGCINC00LbQvNC10LvRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN2xiUzBMOTU2YU5aOUQwR1RJLXAtazM5ejRscGVoQzcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9Cw0LvQtdGH0LXQsiDQhtCy0LDQvSwgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0J7QsdGALiDQky7QkdC10Lcn0Y/Qt9C40YfQvdC+0LPQvi4gJyfQndGW0Ycg0Y/QutCwINC80ZbRgdGP0YfQvdCwJycsIDIp0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4gJyfQndC10LDQv9C+0LvRltGC0LDQvdGB0YzQutCwINC/0ZbRgdC10L3RjNC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTQtWjgydllrVkYxeDJOcG5xSzFfeGhBZjJiV3VhUFFWL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQsNC80LfQsNC70ZbRlNCy0LAg0JfQtdC50L3QsNCxLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkdGW0LvQvtGA0YPRgS4g0L3QsNGALtC/0ZbRgdC90Y8gJyfQkdGD0LvRjNCx0LAnJywg0L7QsdGALtCULtCb0YzQstCwLdCa0L7QvNC/0LDQvdGW0LnRhtGPXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZFFxR0ZwaE9HbzBWcEdvVWQ0ejRVM2VuOUxUYzE5cGsvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9Cw0LzQt9Cw0LvRltGU0LLQsCDQl9C10LnQvdCw0LEsIDEyINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7Qk9Cw0LnQtNC9LiDQnNC10L3Rg9C10YJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFXd184MDBKUHZINjlZdGpPTkVDSkg4VnRaX2Vaa2t5ay9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0ZbQu9GW0L3QsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QnNC+0YbQsNGA0YLQkNGA0ZbRjzsgMinQlC7Qk9GA0LDQtNC10YHQutGWLicn0JzQvtGA0L7Qt9C40LLQvi4g0KDQtdCz0YLQsNC50LwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWYzSzUwR1Zjdzhrc2RZZ1JNeFY2MWFkUkFGSDVQS013L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQvtGA0LDQuSDQr9GA0L7RgdC70LDQsiwxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCh0LrQvtGA0LjQuiAnJ9Cc0LXQu9C+0LTRltGPJycsICAgICAgICAgMikg0J8u0JHQsNC30LDQu9CwLiAnJ9Cf0L7RgtGW0LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVDYm43eFB2RWJySENwTVRobkNJajVRdGduNnJWU19mL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQvtGG0YPQu9C10L3QutC+INCS0ZbQutGC0L7RgNGW0Y8sIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JHQsNGFLiDQlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINC70Y8g0LzRltC90L7RgCwgMikg0KQu0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0g4oSWMjFcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3MUlDTV83R2hyYW8xUk42dWcwWExvUk5KS29iYVJHUS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPQutCw0YHRj9C9INCb0ZbQsNC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLtCl0LDRh9Cw0YLRg9GA0Y/QvS4gXFxcItCQ0L3QtNCw0L3RgtGW0L3QvlxcXCJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEySWRBZlNpX3dhVTZsck5mVXZQMkgweDBXTzc4YU1HYS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVhYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPQutCw0YHRj9C9INCb0ZbQsNC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLtCl0LXQu9C70LXRgC4g0KHQvtC90LDRgtC40L3QsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWt0T1ZDM1RSX0FFNHVSYkc2Mk94TktWam9OSnFpdVBtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzViXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRg9C70Y/RlNCy0LAg0ITQstCwLCAxMdGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J8uINCX0LDRhdCw0YDQvtCyLicn0JXQu9C10LPRltGPJycsIDIpINCTLtCS0LDQu9C70LXQvdCz0LDRg9C/0YIuICcn0KHQutC10YDRhtC40L3QvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcmJjbTdGX0JmQWVxTUV6ZlFoWjZmRjNZMjFhN3JZc3cvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GD0YLQvdC40LogINCa0ZbRgNC10L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLtCo0ZbRgtGC0LUuJyfQotCw0L3QtdGG0YwgINCz0L3QvtC80ZbQsicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbmlEcU5pQ0p1M0NMUzNFRzVCV0h1Ql9BcTd2NDVSczMvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GD0YLQvdC40Log0JrRltGA0LXQvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0J4u0KHQvtC70L7QstGP0L3QtdC90LrQvi4nJ9Cf0L7QvdGWINCx0ZbQu9GPINGG0LjRgNC60YMnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWg3cTBZYVlpeTZBNnM2QnB3X1R4dHpyd3dTX0F6OUx4L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTQvtGA0L7RiNC10L3QutC+INCu0LvRltGPLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC4g0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCwg0YLQsi4zNiDihJY2LCDQhiDRhzsgMikg0IYu0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjywg0YLQsi40NiDihJYxNVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUdsRkNMQzN4XzF0WkNPZm1OaE4wbTRUMFBPSllCVGpOL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRg9C00ZbQvSDQlNC80LjRgtGA0L4sIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQuNC90LAg0YHQvtC70Ywg0LzQsNC20L7RgCzQhi3QhtCGINGHLjsgMinQoS7Qn9GA0L7QutC+0YQn0ZTQsi4gJyfQmtCw0LfQvtGH0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeGJtNHgtVmZ6SHp1ekI0alRoYnNQaDhJYUNhOTR0dEIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhNGA0LzQvtC70LXQvdC60L4g0JTQsNGA0LjQvdCwLCAxMiDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEuINCR0LDRhS4g0JDRgNGW0Y8g0YDQtSDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdTdNNkNYaXlzVWZKdXU2TS1BdkI3NzRXZW4wQW51Wk4vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhNGA0LzQvtC70LXQvdC60L4g0JTQsNGA0LjQvdCwLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JHRltC70LDRiC4gJyfQkdCw0YDQutCw0YDQvtC70LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWhPUmY0dVZ2b1c1NHBUQ3hnSzJ6SW1neFl4SDQ3WW9vL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzYyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JfQsNCz0LDRlNCy0YHRjNC60LAg0KHQvtGE0ZbRjywgMTIg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JrQu9Cw0YHRgdC10L0gJyfQnNGD0LfQuNGH0L3QuNC5INC10YHQutGW0LcnJ+KEljEsIDIp0J4u0JrQuNC80LvQuNC6Licn0JvQtdC+0L3RgtC+0LLRltCw0L3QsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdzFUUGg5SlhzQWplX0twRTlRUHA1SXYwRXVqbXZqRy0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC90ZbQutC+0LLQsCDQnNCw0YDRltGPLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCc0L7RhtCw0YDRgi4g0KHQvtC90LDRgtCwIOKEljE2LCDQhiDRh9Cw0YHRgtC40L3QsCwgIDIp0J4u0JPRgNC40LHQvtGU0LTQvtCyLiDQktCw0LvRjNGBXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWDF2aHNUSVBrSTV6aXMyMkpIT1h4UVVEZE9CZTlBOUcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JLRltGA0YHQsNCy0ZbRjywxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCl0L7QtNC+0YguJyfQp9C10YDQstC+0L3QsCDRiNCw0L/QvtGH0LrQsCcnLCAyKdCGLtCp0LXRgNCx0LDQutC+0LIuJyfQldC70LXQs9GW0Y8g0LrQuNGX0LLRgdGM0LrQuNGFINC/0LDQs9C+0YDQsdGW0LInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU03STFRSmJGa1dCUUh3SzFsSEtveW9FMzBsLVdjMTJtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IfQstC20LXQvdC60L4g0JDQtNCwLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYu0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALCAyKdCcLtCh0LrQvtGA0LjQui4gJyfQndCw0YDQvtC00L3QuNC5INGC0LDQvdC10YbRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa3BtNmswTUN0dWpnN3NQSDlkY29kWTBrejFCckdFWDkvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0LzQsNC90YfQuCDQhNC70LjQt9Cw0LLQtdGC0LAsIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQsNC70ZbRgdGC0YDQsNGC0L7Qsi4nJ9Ca0L7QvdC40Log0JPQvtGA0LHQvtC60L7QvdC40LonJywgMinQri7QktC10YHQvdGP0LouICcn0J3RltC20L3RltGB0YLRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbWxXYUxZc0Q4ZmtCUUhnZHJYLVJmTkNrZDZ3UnJQa08vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0YDQsNGI0LrQtdCy0LjRhyDQpdGA0LjRgdGC0LjQvdCwLCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YDQtSDQvNGW0L3QvtGALCAyKdCcLtCU0YDQtdC80LvRjtCz0LAuICcn0KHQutC10YDRhtC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFQkdoTklwdEpTZWkwR1pMS3BzZnlhSWhpM1VhZTBjSC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0ZbRhtC10YDQsCDQkNC70ZbQvdCwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCU0LXQsdGO0YHRgdGWICcn0KDQvtC80LDQvdGC0LjRh9C90LjQuSDQstCw0LvRjNGBJycsIDIp0JEu0KTRltC70YzRhi4gJyfQodC60LXRgNGG0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5vdnNvZ193NTJwekdrZkoyaFp4aWh2MzNDMmNTZjBKL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtGA0L7Qu9GMINCE0LvRltC30LDQstC10YLQsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQn9GW0YHQvdGPINC20LDQudCy0L7RgNC+0L3QutCwJyc7IDIp0Jsu0KjRg9C60LDQudC70L4uINCf0YDQtdC70Y7QtNGW0Y9cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrYnJHbDhfSWhmcW5qa3ZUdm9XaDc5bWdtOXBRNWtUSi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7RgtC70Y/RgNC10LLRgdGM0LrQsCDQrtC70ZbRjywgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCZLiDQk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg0YHQvtC70Ywg0LzQsNC20L7RgCwg0IbRhy5cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGQVdISEtRNW94MEVUSkx2dXJyUmdaMmRPbTF2dEZrZS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7RgtC70Y/RgNC10LLRgdGM0LrQsCDQrtC70ZbRjywgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIifQk9Cw0L3QtNC30Y8nJywg0L7QsdGALtCEINCS0LXQstGA0LjQutCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa0l2ZHN2SXJ4ZW84MTZkLV9NVjVuYmJjci1hT1poRXAvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YLQvtCy0LAg0JzQsNGA0ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0JrQu9GO0YfQsNGA0YzQvtCyLicn0KjRg9GA0LDQu9GUJycsIDIp0KQu0JzQtdC90LTQtdC70YzRgdC+0L0uJyfQn9GW0YHQvdGPINCx0LXQtyDRgdC70ZbQsicnLCDRgtCyLjE5IOKEljJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZMWNXXzJaaXdCRU4wWWMxS3JXV25jWDM3NnpnYUQ1Qi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YDQuNCy0L7QsdCw0LHQutC+INCa0YHQtdC90ZbRjywgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCbLtCo0YPQutCw0LnQu9C+LiAnJ9CS0LXRgdC90Y/QvdGWICDQutGA0LDQv9C70LjQvdC60LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWRJSmdrTElPMmU3bGNOcHVBUmp4bXVkdzAzeGpuYzMyL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRgNC40LLQvtCx0LDQsdC60L4g0JrRgdC10L3RltGPLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J0u0JrQsNGA0L/QtdC90LrQvi4g0JXRgtGO0LQgINGA0LUg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUI0LUViUllPLWJjQ2pmdXBwZUhYU2h2NURRenVpOWhBL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRg9GC0LrQvtCy0YHRjNC60LAg0JvQsNGA0LjRgdCwLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQlS7Qk9GA0ZbQsy4gJyfQndC+0LrRgtGO0YDQvScnLCDRgtCyLjU0IOKEljQsIDIp0KIu0JrRg9C70ZbRlNCyLiAnJ9Cb0LXQt9Cz0ZbQvdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFjbVFCZHNtMmVwd1pTX21VSngzZ3AxVzU4Mlp5V2Q3L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzcwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0Jtp0LfQvtCz0YPQsSDQkNGA0YHQtdC9LCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCTLtCh0LDRgdGM0LrQvi4nJ9Cg0LXQs9GC0LDQudC8JycsIDIp0J8u0JfQsNGF0LDRgNC+0LIuJyfQodGC0LDRgNC+0LLQuNC90L3QsCDQsdCw0LvQsNC00LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFTRmtXRnZXbl9VR05KSzdjN1oxTGxKMk5hc005S3NnL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzcxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQsNC90YHRjNC60LjQuSDQhNCy0LPQtdC9LCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0KDQsNC90LrQvtCy0LAg0LzQvtC70LjRgtCy0LAnJywg0YLQsi4zOSwgMinQhi7QkdC10YDQutC+0LLQuNGHLiDQotC+0LrQsNGC0LAg0LvRjyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVm5QRkxzNXhIQ3QwVEwyc2QxRTlXV3loVEI4a0dUdWgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C10LLQsNC90LTRltCy0YHRjNC60LAg0JzQsNGA0YLQsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLtCR0LDRgNCy0ZbQvdGB0YzQutC40LkuICcn0KPQutGA0LDRl9C90YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZWanhBZUIzZE96SnBBVERYeUktMUFCdFJpemp6am9kL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzczXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQtdCy0LDQvdC00ZbQstGB0YzQutCwINCc0LDRgNGC0LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQry4g0KHRltCx0LXQu9GW0YPRgS4g0JXRgtGO0LQg0YLQsi4gNzYg4oSWMlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMThLN3JnUnpqQ3FaLV81RVdyMEVvRTVKbG5UeWhnWlM0L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQtdC30LAg0JDQvdC90LAsIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQpC7QqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDihJYyMCwgMinQny7Ql9Cw0YXQsNGA0L7Qsi4gJyfQoNC+0L3QtNC+LdCz0LDQu9C+0L8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVR3ZjJzSjNfOUFyM29PVG1aV0t2NnE4U01hOWZHYS1wL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQuNC60L7QstCwINCS0LDRgNCy0LDRgNCwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQki7Qk9GW0LvQu9C+0LouJydCaWxsIGJhaWxleScnLCAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Co0LDRgNC80LDQvdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWRFNUxjZlYtVDhRaExYaUFmbjhzeExFTWVjdmdTLWhPL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvRltC70ZbQuiDQnNCw0YDRltGPLdCc0LDQs9C00LDQu9C40L3QsCwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0KjQvtC/0LXQvS4gJyfQkNGA0LrRg9GIINC3INCw0LvRjNCx0L7QvNCwJycg0LzRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwgMinQnC7QmtC+0LvQtdGB0YHQsC4gJyfQodC60LXRgNGG0LjQvdC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFxdGljZHVBUVFtNzJOY3k4ZS1zdDZua2pxd0JyRlNUZS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDQutCw0YDQtdCy0LjRhyDQkNC90LTRgNGW0Lkt0J7Qu9C10LrRgdCw0L3QtNGALCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YDQtSDQvNCw0LbQvtGALCAyKdCaLtCn0LXRgNC90ZYuINCV0YLRjtC0IOKEljUsINGC0LIuMjk5XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaVZ1QlBmdzRIbmNQSmtKbjJ5TlpadzhVWGxVWEpIVmMvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0YbRltCx0L7RgNGB0YzQutCwINCQ0L3QvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmS4g0JHQsNGFLiDQlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGB0ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YAsICAgIDIpINCkLiDQr9C60LjQvNC10L3QutC+LiAnJ9CV0LvQtdCz0ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU3JZdHRKRmRpenN1QmUweU5zS3JORGdKVVBfQWloYU4vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC10LvRjNC90LjQuiDQnNC40YXQsNC50LvQviwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLiDRgdC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwgMinQki7QmtC+0YHQtdC90LrQvi4gJyfQlNC+0YnQuNC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjMHBXakdvZ0RhRVlDUkNza3pjcTlWZFVsSHktaHNoRy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LXRgNC60YPQu9C+0LLQsCDQnNCw0YDRltGPLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JQu0KfRltC80LDRgNC+0LfQsC7QodC+0L3QsNGC0LAg0YHQvtC70Ywg0LzQsNC20L7RgDsgMikg0JwuINCW0LXRgNCx0ZbQvS4g0JLQsNC70YzRgVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWo1cEVEN3dRM0FIUDBwTng5Vk80UHA4ZHJpbDlhTXpmL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNCz0LDQu9GO0Log0KDRltCw0L3QvdCwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnLCAgIDIp0JIu0JPRltC70LvQvtC6Licn0JrQsNGA0L3QsNCy0LDQuyDQsiDQoNGW0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXA1U01PZUJhVXowanpYOEEwbDZYNE45eXZ0d0cwdzhtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNGA0LPQvtGA0L7QtCDQktGB0LXQstC+0LvQvtC0LDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0JrRg9C70LDRgy4g0KHQvtC90LDRgtC40L3QsCDRhNCwINC80LDQttC+0YAs0IYg0YcuOyAyKdCcLtCb0LjRgdC10L3QutC+LiAnJ9CV0LvQtdCz0ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa3B4c3VSSm5sM3Q2NGxiTzh2aVZnZkdzd19hTWtSU20vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC+0YDQvtC30L7QstCwINCi0LXRgtGP0L3QsCwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtCR0LXQvdC00LAu0KHQvtC90LDRgtC40L3QsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTV1NG9LNHVJdjkyM0JiaHdIdVF4YzJrYjJ6VzRESW1HL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdkZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0L7RgNC+0LfQvtCy0LAg0KLQtdGC0Y/QvdCwLCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0KjQtdCy0YfQtdC90LrQviBcXFwi0JLQtdGH0ZbRgFxcXCJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGeS1MMDRFQWZjcTdJMWJScHg1cEU4bHlkSUJ5VDNTRi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0YPQvdGC0Y/QvSDQndCw0YLQsNC70ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuINCi0LXQvNCwINC3INCy0LDRgNGW0LDRhtGW0Y/QvNC4LCAgICAgICAyKdCbLtCo0LjRgtGC0LUuJyfQhtGB0LrRgNC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWak5IY1dXZ3RtYmFrVVhtcGMzaDdmaG9ONWdwczlSVi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3ZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCe0LHQvtGA0LrRltC90LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDExINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JUu0JPRgNGW0LMuJyfQnNC10LvQvtC00ZbRjycnLCAgICAyKdCbLtCo0YPQutCw0LnQu9C+LiAnJ9CR0LDQs9Cw0YLQtdC70YwnJyDihJY1XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xY2gyd3Z6eHRSN0VSMi02aURMVWd2Q0FxdVVpdjhkVmYvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C10L3QtNGO0YAg0KHQvtGE0ZbRjywgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J4u0JTQsNGA0LPQvtC80LjQttGB0YzQutC40LkuJyfQktCw0LvRjNGBJycsIDIp0Jwu0KHQutC+0YDQuNC6Licn0J3QsNGA0L7QtNC90LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXNERzZ3bmdwS0hjTVNPYU9pX1lsVUdrdWNhZEJBcEJKL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzgxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QtdGA0LXRgtGP0YLRjNC60L4g0JDQvdCw0YHRgtCw0YHRltGPLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0JPRgNGW0LMuICcn0KLQsNC90LXRhtGMINGW0Lcg0JnQvtC70YzRgdGC0LXRgNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwX0xndi1mTE9kM3lQQW1ObVdDZDhZTjNsU3dYSExLRy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LXRgNC10YLRj9GC0YzQutC+INCQ0L3QsNGB0YLQsNGB0ZbRjywgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jwu0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCDihJY0LCDRgtCyLjM2XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xM3dzSS1zc1RQeDllYTBxWkhGWXN2c1AybnVQYlNESjcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C+0LfQvdGP0Log0JLQtdC90ZbQsNC80ZbQvSwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JQu0J/Rg9C70LXQvdC6LiDQodGC0LDQutC60LDRgtC+LiAyKSDQmy7QkdC10YLRhdC+0LLQtdC9LiDQktC10YHQtdC70LAt0YHRg9C80L3QsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXZzYmMyR3ZIWUFyZ2dQNTctWjV3RmxHd2NoTXBOcDNFL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RgNC+0LrQvtC/0Y7QuiDQnNCw0YDQuNC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCGLtCR0ZbQu9Cw0YfQtdC90LrQvi4g0JXQutGB0L/RgNC+0LzRgi4gMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQsNC90LXRhtGMXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUW45RFFMMk5ISmVPZkdIREhZd2F1WjYydmlucmZsQXkvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNC10YjQtdGC0L3RltC60L7QstCwINCb0Y7QtNC80LjQu9CwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQni7QkdGW0LvQsNGH0LXQvdC60L4uJyfQntGB0ZbQvdC90ZbQuSDQtdGB0LrRltC3JycsIDIp0J4u0J/QvtC70YzQvtCy0LjQuS4nJ9Cf0L7Qu9GM0LrQsC3QsdCw0LHQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfWGZDSzhGSzFGTG14YmtFQjhWVGRmYTk5MHFKN3hSQS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0L7RgtCw0YAg0JrQsNGA0ZbQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0JHQsNGA0LrQsNGA0L7Qu9CwJycsIDIpINCULtCf0LXRiNC10YLRgtGWLiAnJ9Cf0YDQtdGB0YLQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN01GLTB6NnVBa21LV2xwWXlTV0dIOHNiT2laLS1uOUovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LLRh9C10L3QutC+INCc0LDRgtCy0ZbQuSwgMTHRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmy7QkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LAg0LzRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwg0IYg0YcuLCAyKdCGLtCp0LXRgNCx0LDQutC+0LIuICcnINCV0LvQtdCz0ZbRjyDQutC40ZfQstGB0YzQutC40YUg0L/QsNCz0L7RgNCx0ZbQsicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSl9IUWs2SVMyUFpQWlVQOXVZT1A2d2tRdFIzb3BvNkIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LrQstCwINCS0LDQu9C10YDRltGPLCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7Qm9Cw0L3RgdC10LLQuNGHLicn0J/RgNC10LvRjtC00ZbRjycnLCAyKdCcLtCU0LLQvtGA0LbQsNC6LiAnJ9CU0LbQsNC30L7QstC40Lkg0LXRgtGO0LQnJyDQu9GPINC80LDQttC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExdHNkTHZrMjViRDhGU0RZVFhYbnlwUjI5Z2tQdHhYcy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDRgNGC0LDQvdGW0Y8g0JTQsNCy0LjQtCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JUu0JLQsNCz0L3QtdGALtCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCAgIDIpINCgLtCS0LDQvdC00LDQu9C7Licn0JLQvtC00L7RgdC/0LDQtCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbXJFU1laSWlQMWlXZW5HaVpEVUlPYjB1c0NKSzBkVDgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC60L7RgNC+0YXQvtC00YzQutC+INCE0LLQs9C10L3RltGPLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4gJyfQhtCy0LDRgdGMINCz0YDQsNGUINC90LAg0YfQtdC70YzQvicnLCAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Ci0L7QutCw0YLQsCcnINGB0ZYg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVpZjBaX01pQVFWcHpiY3pWU2pqYnZoMWdVeGVfRTNYL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzhiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvtC70L7QvdC10L3QutC+INCQ0L3QvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIu0JrQvtGB0LXQvdC60L4uICcn0J/QtdGC0YDRg9GI0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdEN4cDRVYlpGWmVGTXJ3NkRZTmk5VllIWVN2WXdOUUkvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC+0LvQvtC90LXQvdC60L4g0JDQvdC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQpC4g0JHRg9GA0LPQvNGO0LvQu9C10YAuICcn0JHQsNC70LDQtNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFT0g2emh3b3c0YVFaZkplczI4THhpSUJzaDVIYmZHdS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0L7RgNC+0LrQsCDQnNCw0YDRltGPLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCULtCm0LjQv9C+0LvRli4g0J/RgNC10LvRjtC00ZbRjyDRgtCwINGE0YPQs9CwINGA0LUg0LzRltC90L7RgCwgMinQmi7Qk9GD0YDQu9GW0YIuICcn0KjRgtC+0YDQvCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdGZwX2dCUloxZmxqLUxHcWRlNkVkeFFtS1RsZXAwalAvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodGC0LXRhtGO0Log0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDEyINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCU0LXQsdGO0YHRgdGWLiAnJ0RvY3RvciBHcmFkdXMgYWQgUGFybmFzdW0nJywgMinQpC7QqNC+0L/QtdC9LiAnJ9CS0LDQu9GM0YEnJyDihJY5XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xenhKV3lDbXM3a1poc3BOQkFsemFjVW5BTFc4RUpBTTcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodGC0L7RgNC+0LbRg9C6INCh0YLQsNC90ZbRgdC70LDQsiwgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlS7Qk9GA0ZbQsy4gJyfQn9C+0LXRgtC40YfQvdCwINC60LDRgNGC0LjQvdC60LAnJyDihJYxLCAyKdCQLtCa0L7RgS3QkNC90LDRgtC+0LvRjNGB0YzQutC40LkuICcn0J/QvtC70L7QvdC40L3QsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcnRLMHZVckFvSWxHYlVKNUhhVUdiUVBsMXpWbVRLS0ovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotC60LDRh9C10L3QutC+INCc0LDQudGPLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLiDQkC4g0JzQvtGG0LDRgNGCLiDQodC+0L3QsNGC0LAgMTYg0JogNTQ1LNCG0YcuOyAyKdCGLtCo0LDQvNC+LicnINCS0LXRgdC90Y/QvdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW02WnNWYXJOUHJjZnltTzNCa3VtZEt4TEp5QlR4eDUtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzkxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KPQvdCz0YPRgNGP0L0g0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDEyINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQni7Qk9GA0LjQsdC+0ZTQtNC+0LIuINCS0LDQu9GM0YEsICAgICAgICAgIDIp0Jwu0KHRltC70YzQstCw0L3RgdGM0LrQuNC5LiAnJ9Ch0YLRgNGW0LzQutC40Lkg0L/QvtGC0ZbQuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdjJMUlZEaEZKMnpYTl81d1Z4QWNoN1g4bDBXUThyT2cvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTQvtGA0YfQtdC90LrQviDQhNCy0LPQtdC90ZbRjywgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCbLtCR0LXRgtGF0L7QstC10L0uICcn0JHQsNCz0LDRgtC10LvRjCcnLCDRgtCyLjExOVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVpQSEdRREF5ZnRvQVcwYUtPVDJzbmZhOE1qZ2FsY1pRL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzkzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00L7RgNGH0LXQvdC60L4g0ITQstCz0LXQvdGW0Y8sIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCR0ZbQu9Cw0YguJyfQodC60LXRgNGG0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWgxaXNHd3ZlVzF1aVczVTJ4ZU8yV1d1Rnh2U1N2US1ML3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzk0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00L7RgtC+0LLQsCDQmtCw0YLQtdGA0LjQvdCwLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSkg0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4nJ9CV0YLRjtC0Jycg0YTQsCDQtNGW0ZTQtyDQvNGW0L3QvtGALCAyKSDQpC7QqNC+0L/QtdC9LiAnJ9Cd0L7QutGC0Y7RgNC9JyfQtNC+INC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFlUUJYeTZraExjaTRmSk5HOEJhQ00xWkZMa0tqME5Sdy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNGH0YPQuiDQkNC70ZbQvdCwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLiDQlNGW0LDQsdC10LvQu9GWLiDQodC+0L3QsNGC0LjQvdCwIOKEljEsINCG0IbQhi7RhzsgMinQlNC2LiDQm9Cw0YHRgi4nJyDQodCw0LzQvtGC0L3RltC5INC/0LDRgdGC0YPRhScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xanJGYnZkZ0cyTmxVLWI0MTYtdVIwYmlyRHJXLVBuSUgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTRjtC6INCS0L7Qu9C+0LTQuNC80LjRgCwgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jou0Jwu0JLQtdCx0LXRgC7QodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgDsgMinQni7Qk9C+0L3Rh9Cw0YDRg9C6LiAnJ9CX0LXQu9C10L3QuNC5Jycg0ZbQtyDQt9Cx0ZbRgNC60LggJyfQktC10YHQtdC70LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSF9Jdzg5eGpmMW8yN1B0UF9uZVFJNzhCeVA2NXlFdlkvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpdC+0YMg0JbRg9C5LCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCfLtCGLtCn0LDQudC60L7QstGB0YzQutC40LkuICcn0JbQvtCy0YLQtdC90YwnJywgMinQlS7QktC10LLRgNC40LouICcn0JPQsNC90LTQt9GPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYWndXWHQ2aFFBU3VZZnRTTnI1c1RQRXJzdEZVVjU4Ui9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCn0LjQtiDQndGW0L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JPQsNC50LTQvSDQodC+0L3QsNGC0LAg4oSWNCwg0IbRhzsgMinQmy7QlNGM0Y/QutC+0L3QtdC90LrQvi4gJyfQn9GA0L7QsdCw0YfQtdC90L3RjyDRgyDQvNCw0LzQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYUlVcjBoLU41MjkwQjZLYUltWGtKSG1TRGlrX1Vhd2UvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQp9GW0LTQtdGA0LAg0KHQsNC80YPQtdC70Ywg0KPQvNC10YUsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpICDQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9Ch0YLQsNGA0L7QstC40L3QvdCwINGE0YDQsNC90YbRg9C30YzQutCwINC/0ZbRgdC10L3RjNC60LAnJy4gMikg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5Licn0JrQu9C+0YPQvdC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwTFlBbVJCWHd6SW4xeDNYSGh2THJlX0FOWkpUMnA4dy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LDRgtCw0LvQvtCy0LAg0IbQu9C+0L3QsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC4g0JPRltC70LvQtdGALiAnJ9Cc0LDQu9C10L3RjNC60LUg0YDQvtC90LTQvicnOyAyKdCSLiDQmtC+0YHQtdC90LrQvi4gJyfQktCw0LvRjNGBJycg0YHRliDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVWc1NmNiWTFDVUJoTzEtdFpmdWNSQXVBSGJJRkt6OWMvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOWJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQqNC10LLRh9C10L3QutC+INCc0LDRgNCz0LDRgNC40YLQsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQsNC70LDQvdC00ZbQvS4g0JLQsNGA0ZbQsNGG0ZbRlywgICAgICAgICAgMinQoi7QkdGA0LDRg9C9LiAnJ9Ci0LDQvdC10YbRjCDQstGW0YLRgNGDJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwa0JCcWZTLXBtRnhiNW5OZEFjaDlXWFVwR3FzVXhhOC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5Y1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LXQv9C10YLRjNC60L4g0J7Qu9C10LrRgdCw0L3QtNGALCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KQu0KjQvtC/0LXQvS4g0JzQsNC30YPRgNC60LAs0YLQsi42NyDihJYgNCwgMinQlS7Qk9GA0ZbQsy4gJyfQotCw0L3QtdGG0Ywg0ZbQtyDQmdC+0LvRjNGB0YLQtdGA0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZiaFZqV3JVaXRUby0tODNJNUZXTnlkUXJQQzNZR3lSL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzlkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjRg9C80YHRjNC60LAg0J3QsNC00ZbRjywgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QkdC+0YDRgtC60LXQstC40YcuJyfQotC10LzQvdCwINC60ZbQvNC90LDRgtCwJycsIDIp0JIu0J3QtdGD0LPQsNGB0ZbQvNC+0LIu0KHQutC10YDRhtC+XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xazY2LVdyeTYzUzh4N3Q0OEdXVWpZMGU2TzF4cWVVb3QvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzOWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkNGA0YPRgtGO0L3Rj9C9INCb0ZbQtNCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg4oSWMjAsINCG0YcuOyAyKdCbLtCo0YPQutCw0LnQu9C+Licn0ITQvNC10LvRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQmo1NjhjblJkRFpNS3JNWWZMVDhrQ2JIbTR5ZlhiMmsvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzOWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdCw0LfQuNC70Y7QuiDQndCw0YLQsNC70ZbRjywgMTYg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0K8u0KHRltCx0LXQu9GW0YPRgS4g0J/RgNC10LvRjtC00ZbRjyDQu9GPINC80ZbQvdC+0YAsMinQhi7QkdC10YDQutC+0LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPINGE0LAg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUdhV2VaYktjNlNpSXVkaVlRVkJnRnhhaU9POVNFc2tBL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2EwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHRltC70L7Qs9GD0LEg0JDQvdGC0L7QvSwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLtCR0LXRgtGF0L7QstC10L0uINCb0LXQs9C60LAg0YHQvtC90LDRgtCwINGE0LAg0LzRltC90L7RgCwg0IYg0YcuXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZkhVbXRNV09qR045cDV4YVNyY0lPdlFFdS1rb1RHYVQvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGW0LvQvtCz0YPQsSDQkNC90YLQvtC9LCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0J4u0KHRgtGA0L7Qui4gJyfQnNGW0YHRj9GH0L3QsCDRgNCw0L/RgdC+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmcW5OT0Z2Tm5WVWNJMUxVWi1UcWdGekNsNVhGRV9zaS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0ZbRgNGD0Log0KLQsNC80ZbQu9CwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYu0KHQvtC90LDRgtC40L3QsCwg0YLQsi4yNuKEljMsIDIp0K8u0KHRltCx0LXQu9GW0YPRgS4gJyfQr9C70LjQvdCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0X0IyNkxQeXpRamtfYUJaeEdGV0lxOFJ6NktSQ0JuWC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0L7RgNC+0LLRltC60L7QstCwINCE0LvQuNC30LDQstC10YLQsCwgMTUg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Jwu0JHQvtCx0LXRgC4gJyfQlNGW0LDQvNCw0L3RgtC+0LLQsCDRgNCw0L/RgdC+0LTRltGPJycsIDIp0KQu0KHQsNC5LiAnJ9Cn0L7RgNC90LAg0LfQtdC80LvRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcE8xRkdxQi1LNnR0aDhwUFJNQkNhbF9yc2NlU014MjAvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGD0YDRg9GF0ZbQvdCwINCa0LDRgtC10YDQuNC90LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCZLtCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDQvNGWINC80ZbQvdC+0YAsINCG0YcuLCAyKSDQoS7QndGW0LrRltGC0ZbQvS4nJ9Cd0LDRgdC/0ZbQsicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcnBMSDYzU3pOVEhlTXlYSGs3ckNoZXN3U2NLdTlfY0gvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktCw0YjRg9GA0ZbQvdCwINCSLiwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCSLtCa0L7RgdC10L3QutC+LiAnJ9Cf0L7QtdC80LAt0JvQtdCz0LXQvdC00LAnJywgMikg0J4u0KHQsNGA0LDRgtGB0YzQutC40LkuJyfQmtC+0LvQvtC80LjQudC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXk5a3VzZ3RxWGdJZ2ZGYzE2bF81cXZnRl9KeTYydlg3L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQuNGI0L3QtdCy0YHRjNC60LAg0JDQvdC90LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQli4g0JHRltC30LUuJyfQlNC30LjQs9CwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZTi0yeXAxb2NSVkUxUmRYcTJMN3NqOXFfQTh5djVQTy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LjRiNC90LXQstGB0YzQutCwINCQ0L3QvdCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0JvQsNCy0LDQu9C70LUuICcn0JzQtdGC0LXQu9C40LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTYxdEZxVEZKb2phMk9WRHZIS1R0SVdQak5RLTJMZngxL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQtdGA0LDRgdC40LzRh9GD0Log0JzRltC70ZTQvdCwLCAxNSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jwu0KLQsNGA0LDQstC10YDQtNGW0ZTQsi4gJyfQodC/0L7Qs9Cw0LQnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUFvMHdPeDUwVWNLTGFYOGdwRTNXOXQ2NURDNktwaHJNL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQtdGA0LDRgdC40LzRh9GD0Log0JzRltC70ZTQvdCwLCAxNSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0J4u0JHRltC70LDRiC4nJ9Ci0LDQvdC10YbRjCDQu9GP0LvRjNC+0LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhuYmZqQm16Y2xONC10bDZ0OUVHRG0zeWpMR2p3cFI1L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQvtGA0LTRltGU0L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgMTkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUu0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDRgNC1INC80ZbQvdC+0YAsINCU0KLQmi3QhiwgMinQoS7QkdC+0YDRgtC60LXQstC40YcuINCf0YDQtdC70Y7QtNGW0Y8g0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb3hCZTZOM2FsdEZwM1VrdEY1RmRHWUZyZFh5SERIV2YvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0LXRidCw0Log0JzQsNGA0ZbRjywgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7Qp9C10YDQvdGWLiDQldGC0Y7QtCDQu9GPINC80LDQttC+0YA7IDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuJyfQldC70LXQs9GW0YfQvdC40Lkg0L/RgNC10LvRjtC0JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJd3VMcmRQYWt4SDFmNlpQZm13N2Q3dkdjaEtqb1U2bS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LXQudC90LXQs9CwINCa0LDRgNGW0L3QsCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtCwIOKEljE0LCDQhiDRhy47IDIpINChLtCW0LTQsNC90L7Qsi4gJyfQn9GA0LXQu9GO0LQnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWM1aVdDOWI1SjNUdzNPV1RES1N3TTk1Q0ZURkJseTR0L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRj9GH0YPQuiDQl9C+0YDRj9C90LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Cg0LDQvdC+0LonJywgMinQnS7QndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4gJyfQmtC+0LvQvtC80LjQudC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNzVnJJRlJmaXRMdnpNMzctVVduZkdOY3NqMDdPdV8yL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbRidGD0Log0JrQsNGC0LXRgNC40L3QsCwgMTUg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCaLtCn0LXRgNC90ZYuINCV0YLRjtC0IOKEljEs0YLQsi43NDBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuc2NxUzVlMXBVd3RkSU9TT0llWEFWSFJHakZ1XzNNbi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0YnRg9C6INCa0LDRgtC10YDQuNC90LAsIDE1INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLtCo0L7Qv9C10L0uJyfQm9Cw0YDQs9C+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFb0tlU3I3QkllTHcwS3NqQ3RwMURFREpfOFhnZ3hucS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90L7Rh9C60L4g0JDQvdGC0L7QvdGW0L3QsCwgMTMg0YDQvtC60ZbQsi5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YAg0JTQotCaLdCGLCAyKSDQmi7Qp9C10YDQvdGWLiDQldGC0Y7QtCDihJY2INGC0LIuNzQwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdVRxT1JKSXhJNjV1S3E0LTJScU9YblZ1WGpvUVBLa1MvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0YDQtdC70ZbQvdCwINCa0YDRltGB0YLRltC90LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUu0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDRgNC1INC80ZbQvdC+0YAsINCU0KLQmi3QhtCGXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRm1oVzJPbDl0bC1mVjdST2F0ejNtRW5iMUMwVndBYngvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0YDQtdC70ZbQvdCwINCa0YDRltGB0YLRltC90LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QkC4g0JzQvtGG0LDRgNGCLiDQodC+0L3QsNGC0LAg4oSWOCwg0IbRhy5cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqRnQwemtuR2E4dnZYeERSS1FvNXgxWWR6Y3ItSXhIUi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDRgdGM0LrRltCyINCQ0L3QtNGA0ZbQuSwgMTQg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLtCb0LXRiNCz0L7RgNC9LiDQldGC0Y7QtCDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0dUtaVUc3bDFSRXdEa1hrdlI2ZllCalFpVFBaQzNrby9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDRgdGM0LrRltCyINCQ0L3QtNGA0ZbQuSwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCaLtCU0LXQsdGO0YHRgdGWLiAnJ9Cc0ZbRgdGP0YfQvdC1INGB0Y/QudCy0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNQTkxJOFZ2RmhLenBSd045LWlCUnVUZGRQZkp1VWUtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2I1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQuNGA0LjQu9C+0LLQsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCiLtCR0YDQsNGD0L0uICcn0KjRgtC+0YDQvCwg0YnQviDQvdCw0LHQu9C40LbQsNGU0YLRjNGB0Y8nJywgMikg0J8u0JfQsNGF0LDRgNC+0LIuICcn0KDQvtC90LTQvi3Qs9Cw0LvQvtC/JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFXSGotLWhhWW5FN3BXdGZIQm95cFhuaG03aTBpbnN2Ry9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QvdC00YDQsNGC0Y7QuiDQkNC70ZbQvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQni7QlNGO0LHRjtC6LiDQktCw0YDRltCw0YbRltGXLCAyKSDQni7QkdGW0LvQsNGILicn0KDQvtC30LTRg9C8JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFSd2ZTUXRUZndXcExEell5R2ZtRnlPS2R5X1NySzdTWi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7RgdC10L3QutC+INCQ0LvRltGB0LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCQLtCa0LDRgNCw0LzQsNC90L7Qsi4gJyfQl9GA0YPQudC90L7QstCw0L3QuNC5INGF0YDQsNC8JycsIDIp0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuINCf0YDQtdC70Y7QtNGW0Y8g4oSWNywg0YLQsi4yM1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMS02a1lydFF1SFpOazVDaEFhV0x2N0lSWnprMjJXZGRoL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2I4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtGH0YPQsdC10Lkg0K/RgNC+0YHQu9Cw0LIsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCe0LHRgC4g0IQu0JLQtdCy0YDQuNC60LAuJyfQnNC+0LvQtNCw0LLRgdGM0LrRliDQvdCw0YHQv9GW0LLQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOUtqS0hmSS11aWo2ajNtTkNZWjI2TExaTW9CYllrOXIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YfRg9Cx0LXQuSDQr9GA0L7RgdC70LDQsiwgMTQg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLtCa0YPQu9Cw0YMuINCh0L7QvdCw0YLQuNC90LAg4oSWNTVcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFSN0h3WHBMYk8xdGl6M0t6TWczNXQ0TjNCbXg3QUJPTC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YPQu9GW0LrQvtCy0YHRjNC60LAg0JrQsNGC0LXRgNC40L3QsCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jku0KEu0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINGE0LAg0LTRltGU0Lcg0LzQsNC20L7RgCwg0JTQotCaLdCGLCAyKSDQoS7QkdC+0YDRgtC60LXQstC40YcuINCV0YLRjtC0IOKEljksINGC0LIuMTVcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6UWpzcUdwV3FXWWtlalBZTl9URy1FMG1NQThjU2otci9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDQutCw0YDQtdCy0LjRhyDQndCw0YLQsNC70ZbRjywgMTUg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINGA0LUg0LzRltC90L7RgCwg0JTQotCaLdCGLCAyKdCeLtCR0L7RgNC00Y7Qs9C+0LLQsC4gJyfQo9C60YDQsNGX0L3RgdGM0LrQuNC5INGA0L7QvNCw0L3RgScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaXJWQlZTMFdEdWZXWkMyWUVCNTd1VU1MV2J3OEJMblIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LvRj9GA0YfRg9C6INCE0LvRltC30LDQstC10YLQsCwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLiDQldGC0Y7QtCDihJY5LCDRgtCyLjE1LCAyKdCkLtCo0L7Qv9C10L0uJyfQk9GD0LvRj9C90LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb20waGZWZ3JhLVZTeDZZWGhKYnBad0xSYmUwYThCRS0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQntC/0LDQvdCw0YHRjtC6INCi0LDRgNCw0YEsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCfLtCX0LDRhdCw0YDQvtCyLiAnJ9Ci0L7QutCw0YLQsC3Qv9GA0LXQu9GO0LTRltGPJycsIDIpINCVLtCT0YDRltCzLiAnJ9Cd0L7QutGC0Y7RgNC9JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFnZ2h3eUgyQXgtQWVWdWVsYlNXc1Mwb0lvQXhTX3VKRC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCe0YHQu9Cw0LwgINCE0LvQuNC30LDQstC10YLQsCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJ9Cb0Y7RgtC40LknJyDRltC3INGG0LjQutC70YMnJ9Cf0L7RgNC4INGA0L7QutGDJycsICAgICAyKSDQnS7Qm9Cw0LPQvtC00Y7Qsy4gJyfQotCw0L3Qs9C+INC80YDRltC5JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFtcTQtWkJZWm1sbkdQekpZMWpSX1FWcjBHejc1YU1sWC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDQvdGW0LzQsNGIINCG0YDQuNC90LAsIDE1INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCZLtCT0LDQudC00L0u0KHQvtC90LDRgtCwINC00L4g0LzQsNC20L7RgCAo4oSWNTApLCDQhiDRhy47IDIpINChLtCg0LDRhdC80LDQvdGW0L3QvtCyLicn0JzRg9C30LjRh9C90LjQuSDQvNC+0LzQtdC90YInJywg0YLQsi4xNiDihJY0XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaF9LUV9XcHZtalpGc1hFNFhUX01kZjIzc2s0SzlHVHMvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C10YLRgNGD0YHRjCDQndCw0YLQsNC70ZbRjywgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7Qm9GW0YHRgi4nJ9Cg0L7QvNCw0L3RgScnLCAgICAgMinQlS7Qk9GW0LvQu9C+0LouJyfQktCw0LvRjNGBLdC10YLRjtC0JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPMTVfQ3Vqd3R0YUYxQnhYZ1c4NDR3NkFCVVFrdWpmYi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YDQuNGJ0LXQv9CwINCQ0L3QvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC7QqNC80ZbRgtGGLiDQlNC20LDQt9C+0LLQsCDRltC90LLQtdC90YbRltGPIOKEljEzLCAgMikg0J4u0JTQtdCy0ZbRgS4nJ9Cp0LDRgdC70LjQstC40Lkg0LTQtdC90YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUpLTUlsdW4zUmVoRVJxS2FTSHBsNlNKNmV5dXVxM2FXL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2MyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RgNC+0LrQvtC/0YfRg9C6INCe0LvQtdC60YHQsNC90LTRgNCwLCAxNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JLQtdGA0LzQtdC90LjRhy4gJyfQp9C+0YDQvdC+0LHRgNC40LLRhtGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGTkw3ZTZxaDhTT0tsVXhNb1J0QTdyU1k4TmhhbmxYLS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YDQvtC60L7Qv9GH0YPQuiDQntC70LXQutGB0LDQvdC00YDQsCwgMTcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCkLtCo0L/QuNC90LTQu9C10YAuINCh0L7QvdCw0YLQuNC90LAs0IbQhtCGINGHLlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUtHTUNjTjZfQldQZGl3enJSSXVBM05keFVlSmJ3STFqL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/Rg9GH0LrQviDQodC+0YTRltGPLCAxM9GA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLiDQlNCy0L7RgNC20LDQui4g0JXRgtGO0LQgMiAoMi3QuSDQt9C+0YjQuNGCKSwgMinQki4g0JLQtdGA0LzQtdC90LjRhy4gJyfQp9C+0YDQvdC+0LHRgNC40LLRhtGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0V2ZzRnY0QW4yRmJWX3VGamhxUkVJODctSWZ6UVViOC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LDQtNC60L7QstGB0YzQutCwINCQ0LvRltC90LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JPRgNGW0LMuINCV0YLRjtC0INC/0LDQvCfRj9GC0ZYg0KQu0KjQvtC/0LXQvdCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX2FCTjhKZ3JtRm1WZnVWWVc0czBsZU5OWXhmUDU5U28vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNCw0LTQutC+0LLRgdGM0LrQsCDQkNC70ZbQvdCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0KQu0JvRltGB0YIuICcn0KHRg9C80L3QuNC5INGB0YLQtdC/JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuMm1TYVBOd3JWamxjUEFvaFZpWXJvMjRXemlrdEIwai9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LjQsdC60ZbQvdCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxNSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC4g0KLQtdGA0LXRidGD0LouICcn0KTRg9Cz0LAgTG9ja2Rvd24nJzsgMinQnC7QkdC+0LHQtdGALicn0J7Qv9GW0LLQvdGW0YfQvdCwINGA0LDQv9GB0L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXNQVkVCMlZJdF9vRFpNMHBtQlVRNWpVb1VCTml2VHdlL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDRg9GB0YHRgyDQk9Cw0L3QvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCTLtCS0L7Qu9C70LXQvdCz0LDRg9C/0YIuICcn0KXQsNGA0LDQutGC0LXRgNC90LAg0L8n0ZTRgdCwINGDINGE0L7RgNC80ZYg0LXRgtGO0LTQsCcnLCAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9CV0LvQtdCz0ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYUVlRmlVWF9BdlJjUk1HLTRoQkEzaThjNDVFc1pIOW0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNGD0YnQuNC90YHRjNC60LAg0JrRgdC10L3RltGPLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS7Qk9GA0ZbQsy4gJyfQnNC10LvQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMDcySk53dkVtNkNkdUFfR2VQc0FCdTVfWWs2TTAyekgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2FcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNGD0YnQuNC90YHRjNC60LAg0JrRgdC10L3RltGPLCAxNCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEuINCR0LDRhS4nJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINC00L4g0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5Ea19qS081U0hibnNhWEFUQTEtWXdnS2U0YkFtSWRuL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQstC40L3RhtC40YbRjNC60LAg0JXQvNGW0LvRltGPLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0LLQsNGB0L3QtdCy0YHRjNC60LjQuS4nJ9CU0YPQvNC60LAnJzsgMinQlC7QmtGA0LDQvNC10YAuICcn0KLQsNC90YbRjtGO0YfQuNC5INGB0LrRgNC40L/QsNC70YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFsZ3pfb3VrUnhUMmtQQUZ5WG9YLVFqSUEzNHBJQ2NtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQstC40YDQuNC00Y7QuiDQlNC10L3QuNGBLCAxNiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4g0KLRgNC40LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDihJYxMiwgMinQky7Qk9Cw0LvQuNC90ZbQvS4gJyfQkNGA0ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNDZHRmdIYVhMM3hIVkZady1ockhyeGs0OTc3bHJOZ2gvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC10LvRltCy0LDQvdC+0LLQsCDQkNC90L3QsCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQldC70LXQs9GW0YfQvdC40Lkg0L/RgNC10LvRjtC0Jycg0YHRliDQvNGW0L3QvtGALCAyKdCcLtCU0LLQvtGA0LbQsNC6Licn0JTQttCw0LfQvtCy0LjQuSDQtdGC0Y7QtCcnIOKEljYgKDIg0LfQvtGI0LjRgilcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFKdWNOdE8xRDkza3FMOHdvSmJrX0JKaURqZGdHeHNRNi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LXQvNC10L3QvtCyINCG0LLQsNC9LCAxNSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0JTQvtCz0LAuICcn0KHQvtC90LXRgicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTDBVX0hvdUtSUDR5M2dQWmJWTGt6dW15WUQyZXpFMkQvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2ZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC10LzQtdC90L7QsiDQhtCy0LDQvSwgMTUg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLtCc0L7RiGXQu2XRgS4gRdGC0Y7QtCDihJY4LNGC0LIuNzBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfZndZM3JrcGNJbFdqYzFSeV9ZdGlodS1vd1dwMm1nay9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LjQvNC+0L3QtdC90LrQviDQotCw0LzRltC70LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy7QkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LAg4oSWMTkg0YLQsi40OSwg0IYg0YfQsNGB0YLQuNC90LAsIDIp0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuSAuJyfQn9GW0LTRgdC90ZbQttC90LjQuicnINC3INGG0LjQutC70YMgJyfQn9C+0YDQuCDRgNC+0LrRgycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUG1FamdPVjJZWVppUklVQnBURElIanVyLWx6Ul9mbHYvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC90ZbQs9GD0YAg0JDQvdC90LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JHQpdCw0LLQsNGI0ZYuICcn0KjRgtC+0YDQvCcnLCAyKdCkLtCh0LDQuS4g0JLQsNGA0ZbQsNGG0ZbRl1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWhtX3hESE9aVHpVQ1M0VVpJc283TUhaM2lia3ZBSWJiL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2QyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQtdGA0L3QvtCy0LAg0JrRgdC10L3RltGPLCAxNCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0IYu0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjyDihJYxMCwgMinQlS7Qk9GA0ZbQsy4gJyfQn9C+0YXRltC0INCz0L3QvtC80ZbQsicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xakpvWThrZHplVUtsNXpVNWdMZTVkdThsaEdhbEJJWUIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotC60LDRh9GD0Log0JLRltC60YLQvtGA0ZbRjywgIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCkLiDQnNC10L3QtNC10LvRjNGB0L7QvS4gICcn0J/RltGB0L3RjyDQsdC10Lcg0YHQu9GW0LInJywgMikg0JIuINCT0ZbQu9C70L7QuiAgJyfQktCw0LvRjNGBLdC10YLRjtC0JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFLaTVDLXRhbmp4eTJNeTdrWjZrV2dZRVdNQU9FWUZjOS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0YDQsNGH0YPQuiDQntC70LXQutGB0LDQvdC00YAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCfLiDQl9Cw0YXQsNGA0L7Qsi4gICcn0KDQvtC90LTQvi3Qs9Cw0LvQvtC/JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE4RGxOMWI0SzFzWHJkdnZiM0E4cEhtSkZ2WHdiellyZC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0YDQsNGH0YPQuiDQntC70LXQutGB0LDQvdC00YAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQlC7QpNGW0LvRjNC0LiAnJ9Cd0L7QutGC0Y7RgNC9Jycg4oSWNVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUwzSnhvV1ByNmp4TTVRM3B4TzBCQlgyVTRVaUZuRV9IL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00L7QvdGO0Log0J7Qu9C10LrRgdCw0L3QtNGALCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDihJYyMywg0YTQsCDQvNCw0LbQvtGALCDQhtGHLjsgMinQmS7QoS7QkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg4oSWMjMsINCU0KLQmi3QhlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWkyZnVPUFZNcVFmSU5DVDJaSmJUSlhjY3o1QWZiX2g1L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXQstC+0YHRgtC+0LLQsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7Qm9GW0YHRgi7QrtC90LDRhtGM0LrQuNC5INC10YLRjtC0IOKEljIsIDIp0J4u0JrQvtC30LDRgNC10L3QutC+LdCQLtCa0L7RgS3QkNC90LDRgtC+0LvRjNGB0YzQutC40LkuICcn0J7QuSDRgtC4LCDQtNGW0LLRh9C40L3Qviwg0Lcg0LPQvtGA0ZbRhdCwINC30LXRgNC90Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUduc0Fac3VnZHFCTEw2aEtDR2xsZUE4WktfcVQxOEZqL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXRgNCw0LzQtdC90LrQvtCy0LAg0JDQvdCw0YHRgtCw0YHRltGPLCAxMyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtC+0YDQvtCy0ZbRhtC40L0uJyfQoNGD0YHQsNC70L7QvdGM0LrQsCcnLCAyKdCcLtCh0LrQvtGA0LjQui4nJ9CW0LDRgNGC0ZbQstC70LjQstCwINC/J9GU0YHQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQzB1U3BlU3liZmRhSVhZbG1Zd01yWjVKVXNkYjdSYjkvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpdC10LvQvNCw0L0g0JLRltC+0LvQtdGC0LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KPQk9GW0LvQu9C+0LouJyfQn9GD0YDRhdCw0Y7Rh9C4INCyINGF0LzQsNGA0LrQsNGFJycsIDIp0JIu0KXQvtC00L7RiC4nJ9Cn0LXRgNCy0L7QvdCwINGI0LDQv9C+0YfQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6dXlFR3QzY3ZaM3NWaktuQTNDSlRaVkwydkVWZ1hXeS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LjQsdCw0L3QvtCy0LAg0JLQsNGA0LLQsNGA0LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC7QqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDihJYyLCDRgtCyLjlcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyMWpVUkZLQzU1NXdLTVI3Q2xTeW10VEdfRFd3dmd2Wi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LjQsdCw0L3QvtCy0LAg0JLQsNGA0LLQsNGA0LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQoS7QkdC+0YDRgtC60LXQstC40Ycu0JXRgtGO0LQg4oSWNywg0YLQsi4yOVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUtUVVlQM2dXbjRQVFRHRzFZX19GS3JJMXM1R2tYQm9PL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2RjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JDQvdGC0L7QvdGO0Log0JzQsNGA0ZbRjywgMjEg0YDRltC6XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC7QnNC10YLQvdC10YAuICcn0JTQstGWINC60LDQt9C60LgnJywgMinQhi7QqNCw0LzQvi4gJyfQotC+0LrQsNGC0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQUZWRUczTTNnVTF5SWFJYzVZbmNSaFVJQWx3ZjhBVmovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNkZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0L7QsdGA0ZbRiNC+0LLQsCDQhtC90LXRgdCwLCAxNiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSkg0Jku0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwg0IYg0YcuOyAgIDIpINChLtCf0YDQvtC60L7RhCfRlNCyLiAnJ9Ch0LDRgNC60LDQt9C8Jycs0YLQsi4xNyDihJYxXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5Skh1RVNRVkhNNmJwdXBQc3ZkVW40ZWxRUmJnTzIzZS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2RlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHRj9C90L7QstCwINCU0LDRgNC40L3QsCwgMTYg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSwg0YLQsi4yN+KEljIsICAgICAgMinQlC7Ql9Cw0LTQvtGALiDQldGC0Y7QtCDQtNC+INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMS1DQmNlSEViS2dlMzJYNk5EMUZfekZWUS0yUmI0NFl3L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0LfQvdGO0Log0JDQvdCz0LXQu9GW0L3QsCwgMTcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQry7QodGC0LXQv9C+0LLQuNC5LiDQn9GA0LXQu9GO0LTRltGPLCAgICAgICAyKdCvLtCh0ZbQsdC10LvRltGD0YEuINCV0YLRjtC0XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5N1FIdEd1a0pvb2NTMEJfZGl3ekp1LVZRWThXQjlvcC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2UwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRg9C6INCh0L7RhNGW0Y8sIDE2INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4gJyfQk9GD0LzQvtGA0LXRgdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa1BRVF91VHhhSWxhbHF4X2FhcFNwaWQyU1pnUDdqcTYvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPQuiDQodC+0YTRltGPLCAxNiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JwuINCb0LjRgdC10L3QutC+LiAnJ9CW0YPRgNCx0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTnVoZGxPcVhlUHI4ZXhkTXAwZ1hUQWw2RmZrZ2tEdU4vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPQu9C+0LLQsCDQkNC90LPQtdC70ZbQvdCwLCAxOCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC4g0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0g0YLQsi40OCDihJYxLCAgICAgMinQny4g0KHQsNC90LrQsNC9LiDQotC+0LrQsNGC0LBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpuaDlSVS1wQ3Azckh4cXlWdVA0NEQ0Q2tZbTU5R2pOL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNCw0L3QvtCy0YHRjNC60LAg0J7Qu9GM0LPQsCwgMTcg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QkdCw0YDQstGW0L3RgdGM0LrQuNC5INCf0YDQtdC70Y7QtNGW0Y8g4oSWNCAnJ9Cl0L7RgNCw0LsnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWUxkMkZQNUl4RG5lSWNPTVdnV1RnQ2Z1YkJPWUpRUHIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LDQvdC+0LLRgdGM0LrQsCDQntC70YzQs9CwLCAxNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi7Qm9GP0LTQvtCyINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuMzkg4oSWNFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xd29nVlp2OFdWeVF0TEZzb3B3YVJCeDFSUU94bHpDRkkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCU0YPQtNC90LjQuiDQlNCw0YAn0Y8sIDE3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QkdCw0YDQstGW0L3RgdGM0LrQuNC5Licn0JvQuNGB0YLQvtC6INC3INCw0LvRjNCx0L7QvNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWxfSEUzcjBPNXVzak9IY051TXBORFlnX2c2ZDJTMzV0L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNGD0LTQvdC40Log0JTQsNGAJ9GPLCAxNyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0JTQtdCx0Y7RgdGB0ZYuICcnINCg0L7QvNCw0L3RgtC40YfQvdC40Lkg0LLQsNC70YzRgScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFxTGdxOUFmRDZZWEN5UFF5RmVqbHlaOEJPTnVTb05fNC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2U3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRgNGO0LrQvtCy0LAg0JzQsNGA0ZbRjywgMTUg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLiAnJ9Cf0YDQuNC80YXQuCDQvNC+0YDRjycnLCAyKdCkLtCo0L7Qv9C10L0u0JXRgtGO0LQg0YLQsi4xMCDihJY0XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEtY2JvM0JaMUVQTlltNk5TMWVDTW1fMkhUekhKN0Jlay9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2U4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRg9C70ZbRiCDQn9C+0LvRltC90LAsIDE1INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCVLtCT0YDRltCzLicn0JrQvtC70LjRgdC60L7QstCwJycsIDIp0IYu0J/QsNC00LXRgNC10LLRgdGM0LrQuNC5LiAnJ9Ch0LrQtdGA0YbQuNC90L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTmFtVlZGZkFkUmZhRnVBMXVLamx0OVFJV2dNaVNCeTYvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0YPQt9C40YfQtdC90LrQviDQnNCw0YDRltGPLCAxOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg4oSWMzEsIDHRhy47IDIp0KQu0KjQvtC/0LXQvS7QldGC0Y7QtCzRgtCyLjEwIOKEljVcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU8tYWhmWUpOYkZmNWZTT3dTU3BmZklXV3BuaUJ1Yks4L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQntC70ZbQudC90LjQuiDQntC70LXQutGB0LDQvdC00YAsIDE4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JYu0JHRltC30LUt0JIu0JPQvtGA0L7QstGW0YYuINCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRgtC10LzRgyDQtyDQvtC/0LXRgNC4ICcn0JrQsNGA0LzQtdC9JycsIDIp0Jsu0KDQtdCy0YPRhtGM0LrQuNC5LiDQn9GA0LXQu9GO0LTRltGPINGE0LAg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xM0p5bFBkRFdnVno2UVNIUkdWSnQ3RmhkYVJlbENIU0QvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzQuNC6INCQ0L3QvdCwLCAxNyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuINCV0YLRjtC0LdC60LDRgNGC0LjQvdCwINGC0LIuMzMg4oSWNSwg0YHQvtC70Ywg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xazdva0J1eU1zRmFSdDRHd3dYVVNnWUNoNURkWTZNTjkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzQuNC6INCQ0L3QvdCwLCAxNyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuIDMyIOKEljEyLCDRgdC+0LvRjCDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMWUhIVkt1VUlpc2FkRTJmbXp3WXptd3NTLVV3VnhWUi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLRltGF0L7QvdC+0Log0ITQs9C+0YAsIDE3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLicn0KHQutC10LvRliDRg9GJ0LXQu9C40L3QuCDQo9GHLdCa0L7RiCcnINC3INGB0Y7Rl9GC0LggJyfQmtGA0LjQvNGB0YzQutGWINC90LDRgNC40YHQuCcnLtGC0LIuOCwgMinQpC7Qm9GW0YHRgi7QotGA0LDQvdGB0YbQtdC90LTQtdC90YLQvdC40Lkg0LXRgtGO0LQg4oSWMTAsINGE0LAg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeG4zVGZOSDZHRkJCUW8xdlpaTm5SUlZxYnRqR0d1ZzIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LDRidC10LLRgdGM0LrQuNC5INCi0LDRgNCw0YFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CV0YLRjtC0LdC60LDRgNGC0LjQvdCwJycsINGC0LIuMzMgKDUpXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFlcVRQWGxfUmhaUU9kVnItbGhVUW1sT004Y29DNkZvSy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQsNGJ0LXQstGB0YzQutC40Lkg0KLQsNGA0LDRgVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0KDQtdCy0YPRhtGM0LrQuNC5LiDQn9GA0LXQu9GO0LTRltGPLCDRgtCyLjQgKDIpXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEtX2JvTW5vWW5rNzR4RHpReTZRbENxVnhJUDNqNHNIeC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2YwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdGB0LjQuiDQndCw0LfQsNGA0ZbQuSwgMTYg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QkdC+0YDRgtC60LXQstC40YcuJydMeXJpY2EgTm92YScnLNGC0LIuNTkg4oSWMyw0OyAyKdCkLtCb0ZbRgdGCLtCi0YDQsNC90YHRhtC10L3QtNC10L3RgtC90LjQuSDQtdGC0Y7QtCDihJY4ICcn0JTQuNC60LUg0L/QvtC70Y7QstCw0L3QvdGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWMwc2o0QU11RHhIQXBtR1Q5V1NobWpKSGJFSFJ6SmRDL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQrtC30LvQvtCy0LAg0JvRjtCx0L7QsiwgMTcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEpINCaLtCU0LXQsdGO0YHRgdGWLiAnJ9CQ0YDQsNCx0LXRgdC60LAnJ+KEljEsIDIpINCZLtCR0YDQsNC80YEuJyfQhtC90YLQtdGA0LzQtdGG0YbQvicnLCDRgtCyLjExNyDihJYyXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMQURJbldwbS1qaGMxRmJSdWRncXdDTUd0elhRREJNUy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2YyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JfQsNGU0YbRjCDQnNCw0YDQuNC90LBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQodC60L7RgNC40LouJyfQktCw0LvRjNGBJycg0Lcg0J/QsNGA0YLQuNGC0Lgg4oSWNVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMW1sWnpuWmJveGh6eEVCVEo0Z1VtRXRFMEpZZ1FnZGgvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCX0LDRlNGG0Ywg0JzQsNGA0LjQvdCwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9CU0YPQvNC60LAnJywg0YLQsi41OVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUGFVcC1hcVFkQ3FCdDM1NjYyeU53SmtoYU5PQVhOX2gvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0L7Qs9Cy0LjQvdC+0LLRgdGM0LrQuNC5INCE0LLQs9C10L3RltC5XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlC7Qn9GA0LjRgtGB0LrQtdGALiAnJ9CR0LvRjtC3INCf0ZbQutCw0YHRgdC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWUyXzRpc1F6bHVjTFI3a0JaWC1DSHhncVlyQnhKUlp3L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C+0LPQstC40L3QvtCy0YHRjNC60LjQuSDQhNCy0LPQtdC90ZbQuVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0J/RgNC+0LrQvtGEJ9GU0LIuINCh0L7QvdCw0YLQsCDihJYzLCDRgtCyLjI4XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFETGhUOVl3UjVJOWNaeHpkTm9lMjJGd1M4anBJNFlWcy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNC60LjRgtGO0Log0JDQvdCw0YHRgtCw0YHRltGPXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC7QoNCw0LrQvtCyLiAnJ9Ca0L7QvdGG0LXRgNGC0L3QuNC5INC10YLRjtC0JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUM4YTZUUFJNMmNhUWZUT0E2ekdIdnVJakdTb0w3QzFiL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC40LrQuNGC0Y7QuiDQkNC90LDRgdGC0LDRgdGW0Y9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmS7QoS7QkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0LTQviDQvNGW0L3QvtGALCDQlNCi0JogLdCG0IZcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXdycWRiX2tlMktjaF9DZkJjbU5SSDJNNTgwUHRaUUExL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQndCw0LfQsNGA0LXQvdC60L4g0JrRgdC10L3RltGPXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QktC+0LvQutC+0LLQsC4gJyfQndCw0YHRgtGA0L7RlycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPQThydk42d3dkcE9WeTFEVkR0MXpxLTRwa2VpU3IzeC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J3QsNC30LDRgNC10L3QutC+INCa0YHQtdC90ZbRj1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JHQsNGFLiDQkNC70LXQvNCw0L3QtNCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwcXRVUldkM2Fhc2NxMmd3Tkh4TS1GRVR5UUhMQjh0RC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ZhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQtdGA0L7QsiDQktC70LDQtNC40YHQu9Cw0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEuINCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDQtNC+INC80ZbQvdC+0YAsINCU0KLQmi3QhtCGLCAyKdCkLtCo0L7Qv9C10L0uINCR0LDQu9Cw0LTQsCDihJYxLCDRgtCyLjIzXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhdG41eWlFY1hnalZuRktmTTRRV0FVUzR6X1VWVEpfcS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ZiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQsNGA0LDRgdC+0LIg0JLQu9Cw0LTQuNGB0LvQsNCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CV0YLRjtC0LdC60LDRgNGC0LjQvdCwJycsINGC0LIuMzkg4oSWOSwgMinQpC7QqNC+0L/QtdC9LiAnJ9CR0LDQu9Cw0LTQsCcnLCDRgtCyLjIzIOKEljFcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlOWl90RXkwTzJuUlhqQ2x0ZF92ZFdMM1NNdUJOYUNNL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0LXQsdC10L3RjtC6INCTLtCeLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7Qn9GA0L7QutC+0YTRjNC10LIuINCh0L7QvdCw0YLQsCDihJYyLNCGINGHLjsyKSAgINCkLtCb0ZbRgdGCLicn0JXRgtGO0LQg0LfQsCDQutCw0L/RgNC40YHQsNC80Lgg0J/QsNCz0LDQvdGW0L3RlicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTaFVZSVlQOW5nb1FaZWhtQ2J6UDVGM2JKQUtGaDNzTi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ZkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtC90LTRgNCw0YLRjtC6INCcLtCeLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KAu0KjRg9C80LDQvS4gJyfQoNC+0LzQsNC90YEnJywg0YLQsi4yOCwgMinQki7QmtC+0YHQtdC90LrQvi4gJyfQmtGD0YDQsNC90YLQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGT2I0MVBzbXFXTzRueU9Ea09kb01UNFNzUHA0SFg5eC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ZlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0L3QsNGB0LXQvdC60L4g0JAu0J4uIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4g0J/RgNC10LvRjtC00ZbRjyDRgdC+0LvRjCDQtNGW0ZTQtyDQvNGW0L3QvtGALCAyKdCSLtCk0ZbQu9GW0L/QtdC90LrQvi4g0KLQvtC60LDRgtCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWTFhFTHVaY0k2UWkyZ3Jsd2FVLXVFd2xMdjFlU0VrWC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9XG5dO1xuXG5sZXQgY29uY2VydG1hc3RlcnMgPSBbXG4gICAge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTNmZmFhc2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQqNC10LLQtdC70YzQvtCy0LAg0ITQu9GW0LfQsNCy0LXRgtCwLCAyMCDRgNC+0LrRltCyLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4g0JDRgNGW0Y8g0JvQtdC90YHRjNC60L7Qs9C+LCAyKSDQky7QpdCw0LfQsNC90L7QstCwLiBcXFwiINCj0LfQtNC+0LLQtiDQstGD0LvQuNGG0ZYg0YXQvtC00YMg0Y9cXFwiXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9DV1gwZVJQVENZWVwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTNmZmFhc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCX0LDQutCw0LvRjtC20L3QsCDQni7QkVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JMu0JLQtdC90Y/QstGB0YzQutC40LkuINCa0L7QvdGG0LXRgNGC0L3QuNC5INC/0L7Qu9C+0L3QtdC3INGA0LUg0LzQsNC20L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvczNjbFhMVDM0aFlcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjEzZmZhYXMxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JfQsNC60LDQu9GO0LbQvdCwINCeLtCRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQli7QnNCw0YHQvdC1LlxcXCLQoNC+0LfQtNGD0LxcXFwiXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9nRHlVQ2JhbmVCa1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTNmZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QsdC30LDRgCDQndGW0LrQvtC70YwsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLtCa0YDQtdC50YHQu9C10YAuJyfQnNCw0LvQtdC90YzQutC40Lkg0JLRltC00LXQvdGB0YzQutC40Lkg0LzQsNGA0YgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa3VTUjBWbU9NaXFJajlZUjB1M2x2T3pxNEpHNWFMWTgvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QsdC30LDRgCDQndGW0LrQvtC70YwsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLtCV0LvRjNCz0LDRgC4nJ9Ch0LDQu9GO0YIg0LrQvtGF0LDQvdC90Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMWdJN1hsal9TTFFxbDJQaTZFVEFoU0FaVEtMTWprQm4vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQsdC+INCd0LXRgdGC0L7RgCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrRgNC+0LvQuy4gJyfQn9C+0LvRjNC60LAg0LLRltGB0LvRjtGH0LrQsCcnLCAyKdCSLtCm0LjQsdGW0L0o0L/QtdGA0LXQutC7LtCQLtCm0LDRgNC10L3QutC+KS4gJyfQm9C40YHRgtC+0Log0Lcg0LDQu9GM0LHQvtC80LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNFBSNWV2clVJUmFTMVZGVXZ1MHM2OUhNSDd4UzNXaUkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0ITQstCz0LXQvdGW0Y8sIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLtCR0LXRgtGF0L7QstC10L0uICcn0JHQsNCx0LDQuicnLNC+0LHRgC4g0JAuINCo0YPQstCw0LvQvtCy0LBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlyMmFSS2NvODJOd3pSMkZRSDZBcFpWSFFaWXIwTDd5L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCE0LLQs9C10L3RltGPLCA5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QkdC10YYuICcn0J/QvtC00ZbQu9GM0YHRjNC60ZYg0LLQuNC60YDRg9GC0LDRgdC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXFKUTlBSVdqNDhwSlRNQldmbzNoN3o2SmxLSkg5ODBuL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodGC0LDRgNGG0LXQsiDQkdC10L3QttCw0LzRltC9LCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JYu0JzQsNGB0YHQvdC1LiAnJ9Cg0L7Qt9C00YPQvCcnOyAyKdCVLtCg0LjQsdC60ZbQvS4gJyfQpNC+0YDQvNGD0LvQsCAxJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUw2YnhEeXNOMHkyR0RTTm5SWHFHRUZiSFI3ZVMtaXhzL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktC70LDRgdGO0Log0J3QsNC30LDRgCwgMTgg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JTQvtC90L7RgtGWLiDQkNGA0ZbRjycnTyBkZWwgbWlvIGFtYXRvIGJlbicnLDIp0JUu0JPRgNGW0LMs0JMu0KUuINCQ0L3QtNC10YDRgdC10L0gJydKZWcgZWxza2VyIGRpZycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEyX01GUFUzOWJ0SlFLdlN0MlJZemppVTBIYVlzYTRPZy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRj9GH0LXQuiDQhtC+0LDQvdC90LAsIDE30YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JAu0JzQvtGG0LDRgNGCLtCQ0YDRltGPJydSaWRlbnRlIGxhIGNhbG1hJycsIDIp0KQu0J3QsNC00LXQvdC10L3QutC+LCDQhi7QpNGA0LDQvdC60L4u0KDQvtC80LDQvdGBICcn0KfQvtCz0L4g0Y/QstC70Y/RlNGI0YHRjyDQvNC10L3RliDRgyDRgdC90ZYnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRVFiUUtiV2l2Q2ItZ09Ra2NjSUNMNUFQUWpnV2xlOXcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LLQsNGI0LAg0K/QvdCwLCAxNiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtCa0LLQsNC90YYuINCh0L7QvdCw0YLQsCDRgNC1INC80LDQttC+0YAsINCGLdCG0IYg0YcuOyAyKdCSLtCf0L7Qv9C/LiAnJ9Cg0YPRgdGB0LrQuNC5INCy0LXRh9C10YAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb3BMNDFtTEgxMEJucjFlTXl6T0V4c3dGSm9UWl84Y1MvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7Qu9C+0LTRltC5INCQ0L3RgtC+0L0sIDE4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCfLtCn0LDQudC60L7QstGB0YzQutC40LkuINCg0L7QvNCw0L3RgScn0JPQvtGA0L3QuNC80Lgg0YLQuNGF0L4g0LvQtdGC0LXQu9CwINC00YPRiNCwINC90LXQsdC10YHQsNC80LgnJywgMinQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4gJyfQldC70LXQs9GW0Y8nJyzRgtCyLjPihJYxLCDQvtCx0YDQvtCx0LrQsCDQtNC70Y8g0LLRltC+0LvQvtC90YfQtdC70ZYg0YLQsCDRhC3QvdC+XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsUUl6RE9pWnAtRWRYbHkxMFNWbTRkaU9qNVdDU2szWi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtC90Y7RiNC10Log0KHQvtGE0ZbRjywgMjEg0YDRltC6XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QotCw0LrRgtCw0LrRltGI0LLRltC70ZYuINCh0L7QvdCw0YLQsCDQtNC70Y8g0YTQu9C10LnRgtC4INGWINGE0L7RgNGC0LXQv9GW0LDQvdC+LlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSFhFLVdibFUwLUh5d2dWekN1blFuaVFVQ1VOWEdsTk4vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QvdGO0YjQtdC6INCh0L7RhNGW0Y8sIDIxINGA0ZbQuiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLtCa0L7QvNC70LXQsi4gJyfQnNC10LvQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0cTc4WEtwZEZnNjZWU1drQVpxMFZlUnVLYVRjSlVwdS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/Rh9C10LvRltC90YbQtdCy0LAg0JDQtNGA0ZbQsNC90LAsIDE1INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JzQvtGG0LDRgNGCLiDQkNGA0ZbRjyDQkdC70L7QvdC00YXQtdC9INC3INC+0L/QtdGA0LgnJ9CS0LjQutGA0LDQtNC10L3QvdGPINGW0Lcg0KHQtdGA0LDQu9GPJycsIDIp0KAu0JPQu9GW0ZTRgC4nJ9CSINC/0L7RgNGL0LLQtSDQvdC10LbQvdC+0YHRgtC4INGB0LXRgNC00LXRh9C90L7QuScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3bVJWeFYwNnY1TXY2X1AzQzE4M29NZ09OLVJfdS1xTy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdGB0LjQuiDQndCw0LfQsNGA0ZbQuSwgMTYg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JTQti7Qn9GD0YfRh9GW0L3Rli4g0JDRgNGW0Y8g0KLQvtGB0LrQuDsgMinQnC7QtNC1INCk0LDQu9GM0Y8uJyfQpdC+0YLQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFCSk5zVHA0V0R4WmJBZEFuak1MUDNoYkQ2M1QyZUl3WS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0K/RgNC+0YjQtdC90LrQviDQktCw0LvQtdGA0ZbRjywgMTkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QodGC0LXRhtC10L3QutC+LiAnJ9Ch0L7RgtC+0Y/Qu9CwINGPINGWINGB0LvRg9GF0LDQu9CwINCy0LXRgdC90YMnJzsgMinQki7QktC70LDRgdC+0LIuINCh0LrQtdGA0YbQviDQtNC70Y8g0LTQvtC80YDQuCDRgtCwINGE0L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xT3VEbGFjRGIzaTk0eE54a293ay1qc05rdHh1UUs3MUwvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7Qt9Cw0Log0IbRgNC40L3QsFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IQu0JHQvtC30LfQsC4nJ9CU0LjRgtGP0YfRliDQvNGA0ZbRlycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFQc295T0lyMTdPQ3lOX0doUlVfcTdJcFM0SFd3SFdVQi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtC30LDQuiDQhtGA0LjQvdCwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIn0J3RltGHINGP0LrQsCDQvNGW0YHRj9GH0L3QsCcnLCDQvtCx0YAuINCuLtCe0YHRgtGA0L7QstGB0YzQutC+0LPQviBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVRKS1FGRW0zYTN3emlZdkkzUWZpaEd4elYyVTVRSDJuL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC40LrQuNGC0Y7QuiDQkNC90LDRgdGC0LDRgdGW0Y8gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCR0LDQutC70LDQvdC+0LIuICcn0JrQvtC90YbQtdGA0YLRltC90L4nJywgICAgICAyKdCXLtCR0LDQs9GW0YDQvtCyLiAnJ9Cg0L7QvNCw0L3RgScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqOF9tdlpFR1RnWUkwTEZHV0ZvTGJRQWdDSHBJNUMwWi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNCyJ9GO0Log0JLQu9Cw0YHRgtCwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCQLiDQnNC+0YbQsNGA0YIuINCa0L7QvdGG0LXRgNGCINC00LvRjyDRhNCw0LPQvtGC0LAg0Lcg0L7RgNC60LXRgdGC0YDQvtC8INGB0ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YAsINCG0YcuOyAyKdCQLtCi0LDQvdGB0LzQsNC9LtCh0L7QvdCw0YLQuNC90LAg0LTQu9GPINGE0LDQs9C+0YLQsCDRliDRhNC+0YDRgtC10L/RltCw0L3QvizQhtCG0IbRhy5cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTMwYVpPMW54VjRFOEhYN2h4V2FOdlZUNGJmZ2toeDRNL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0YHRjtC6INCu0LvRltGPXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCTLtCk0L7RgNC1LiAnJ9Cf0YDQvtCx0YPQtNC20LXQvdC90Y8nJywgMikg0JEu0JHQsNGA0YLQvtC6LiAnJ9Co0ZbRgdGC0Ywg0YDRg9C80YPQvdGB0YzQutC40YUg0YLQsNC90YbRltCyJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9kczN0dlVEWFpkbzF5ZWRJVlhZY2M5TW43N2JqaDI1L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC+0LLQsCDQoi7Qki5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLtCh0LXQstC10YDQvS4gJyfQn9C+0LvRjNGB0YzQutC40Lkg0YLQsNC90LXRhtGMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhYdHZPU0F1bnY1NlJmQXhnVjFxN200aUthMDlzV0gxL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC+0LLQsCDQoi7Qki5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLtCi0LDQvNCw0YDQuNC9ICcn0KHRgtCw0YDQvtCy0LjQvdC90LjQuSDQs9C+0LHQtdC70LXQvScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0OXZsTTA3R2Q4UzlDejR0RFoyS3lLa2d1Snp5QjF1Qi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQsNGH0LjQuiDQni7QkC5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KAu0JPQu9GW0ZTRgC4nJ9Cg0L7QvNCw0L3RgScnLCAyKdCeLtCm0LjQs9Cw0L3QutC+0LIuJyfQhtC90YLRgNC+0LTRg9C60YbRltGPINGC0LAg0KfQsNGA0LTQsNGIJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5nczg1cXBFT0RFdjY3YTgtZGFKeFpvSDZLbzdTVVdrL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0LjRhtGW0LIg0J4u0JwuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLiDQmtGA0LXQudGB0LvQtdGALicn0JzQsNC70LXQvdGM0LrQuNC5INCy0ZbQtNC10L3RgdGM0LrQuNC5INC80LDRgNGIJycsIDIp0JsuINCg0LXQstGD0YbRjNC60LjQuS4gJyfQhtC90YLQtdGA0LzQtdGG0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xblhreWJQWkhQT1dXVXpCRURfS0tlR0Yza08yRWNhYmovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0ZbRgNGH0LDQvdC+0LLQsCDQhi7Qki4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCS0ZbQtNC80L7QvdGC0LUuJydQYXIgemlsbyB1biByYWlibyBwYXNha3UnJywgMinQk9GD0LHQsNGA0LXQvdC60L4g0JIuINCa0L7QvdGG0LXRgNGCINC00LvRjyDRhNC70LXQudGC0Lgg0Lcg0LrQsNC80LXRgNC90LjQvCDQvtGA0LrQtdGB0YLRgNC+0Lws0YLQsi4xMFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xenBNakNhdVVwYkpkdWZXWGZiNU9mbTdQOXNBWWotaVAvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LXQutGD0YUg0J4u0JIuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCGLtCS0LjQvNC10YAuICcn0JPRg9GG0YPQu9GM0YHRjNC60LAg0YDQsNC/0YHQvtC00ZbRjycnLCAyKdCj0LrRgC7QvdCw0YAuINGC0LDQvdC10YbRjCDQsiDQvtCx0YAu0JIu0KHQvtC70L7QvdGB0YzQutC+0LPQviAnJ9CS0LXRh9C+0YDQvdC40YbRlicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFkZlB4MTVXUUtIZlBWdE1QV1dBQXc5c3k5VVl3NVMxZS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQvtCx0L7QtNCwINCbLiDQnC4sIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmy7QkdC10YLRhdC+0LLQtdC9LCDQoi7QqNC10LLRh9C10L3QutC+LiAnJ9CX0L7RgNC1INC80L7RjyDQstC10YfRltGA0L3Rj9GPJycsIDIp0JvQtdC80LrRltCy0YHRjNC60LAg0L3QsNGA0L7QtNC90LAg0L/RltGB0L3RjyAnJ9CSINGC0LXQvNC90YMg0L3RltGH0LrRgyDRg9Cx0L7Rh9C4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBnWm81M1g2RWhId0VNcFhLd3BCMnRXMl9pclZvMjkwL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9GO0LHRh9C10L3QutC+INCcLtChLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLtCR0LDRhS4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINGB0LrRgNC40L/QutC4INC3INC+0YDQutC10YHRgtGA0L7QvCDQu9GPINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXdmaHVpdFhMMk13dFlkclVISWtWZE14UVpwaHQ2ak5sL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9GO0LHRh9C10L3QutC+INCcLtChLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J0u0KHRgtC10YbRjtC9LiAgICAnJ9CR0L7Qu9C10YDQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFiSFdVcmlxS3ZTVG5WbkltNDdtbUxlZFNpME5oLVhRcy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDFjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNGF0LDQudC70L7QstCwINCcLtCSLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAu0KHQvtC70YLQsNC9LiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVvRVMybVRyV0N5OUNRY3FkOXF1MzY2WjF0ejZJcFJRL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjEzZmZhYXNkYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LjRhdCw0LnQu9C+0LLQsCDQnC7Qki5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQotCw0LzQsNGA0LjQvS4gXFxcItCh0YLQsNGA0L7QstC40L3QvdC40Lkg0LPQvtCx0LXQu9C10L1cXFwiXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1NHhKMHZLNmRlUjJYSndHTFhGaDZzQlJlUHZ4R1VOci9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDFkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzRj9C70YzQutGW0L3QsCDQnS7Qni5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCU0LYu0JLRltC70YzRj9C80YEuICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaU1fRUYwVng5LXc0RFM2SFJfWkhSSi1tcUp3QS1GR3AvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0Y/Qu9GM0LrRltC90LAg0J0u0J4uXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QptC40L3RhtCw0LTQt9C1LiAnJ9Ch0LDRh9GW0LTQsNC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTU5ZGpTcnpJMUF2TDVwa0NsMHZuWURzSFFMVG5kNWxvL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQndGW0LrRltGC0ZbQvdCwINCGLtCgLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JEu0JvRj9GC0L7RiNC40L3RgdGM0LrQuNC5LiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXlReU8wUTY1V3ZIbnZZMjh4Qmwzc2hXLUh0ZHU0MjM5L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQndGW0LrRltGC0ZbQvdCwINCGLtCgLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KHQuy4g0JAu0Jwn0Y/RgdGC0LrRltCy0YHRjNC60L7Qs9C+LCDQvNGD0Lcu0JIu0JLQtdGA0LzQtdC90LjRh9CwICcn0J/RltC00LrRgNGD0YfRgyDRjyDRh9C+0YDQvdGW0Zcg0LLRg9GB0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdV83VVFEdU9DRHFKSmoxcTVsaEVGUEVveGRfUFUzalkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDRlNC90LrQviDQoi7Qri4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQli7QnNCw0YHRgdC90LUuICcn0KDQvtC30LTRg9C8JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUpsQW9ZLUFBSkV5SS1ySVJEQ3U3VW55d3h2cldFQkJ3L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0ZTQvdC60L4g0KIu0K4uLCBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCiLtCn0YPQv9Cw0LouICcn0JLQtdGB0L3Rj9C90LjQuSDRgNC+0Lot0L0t0YDQvtC70LsnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVDUtSVVOVXVRbVV2RlZXWWxZNlNBVmVqLVRJcW1icnEvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQstGH0YPQuiDQoi7Qhi4gIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlNC2LtCS0ZbQu9GM0Y/QvNGBLCDQsNGA0LDQvdC2LtCQLtCi0LXQv9C70LjRhtGM0LrQvtGXLicn0JrQvtC70LjRgdC60L7QstCwINC00LvRjyDQsNC90LPQtdC70LAnJywgMinQki7QmtC+0LfQu9C+0LIs0L/QtdGA0LXQutC7LiDQtNC70Y8g0LTQvtC80YDQuCDQhC7QltGD0LrQvtCy0LAuICcn0J8n0ZTRgdCwINGDINGB0YLQuNC70ZYg0YTQu9Cw0LzQtdC90LrQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3VGdpdW9naXZzaDN4d2pGWGk1YTFvUlUtb2trUDk2MC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQhi7Qri5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLiDQqNGD0LzQsNC60L7QstCwLiAnJ9Ci0LDQvdCz0L4g0JXQstGW0YLQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExQ2t6aVJ2WUp2bmlXN2NpYTd5OUVrSTg1c25MSnc3eC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQhi7Qri5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLtCT0L7QvNC+0LvRj9C60LAuICcn0IbRgdC/0LDQvdGB0YzQutC40Lkg0YLQsNC90LXRhtGMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlPVUpOMjFCdkRkenNMMG9QMGF0dnNFbW9xZ1VkcFlDL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80L7Qu9GP0L3RltC90L7QstCwINChLtCcLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JTQstC+0YDQttCw0LouINCa0L7QvdGG0LXRgNGCINC00LvRjyDRgdC60YDQuNC/0LrQuCDQu9GPINC80ZbQvdC+0YAsINCGINGHLjsgMinQnC7QodC60L7RgNC40LouICcn0JrQsNGA0L/QsNGC0YHRjNC60LAg0YDQsNC/0YHQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0bHNyTWtRcDBVVnEweXd0SjAxTHBIS1BzbUZPcEhuTy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRgtCw0YDQuNC90YHRjNC60LAg0Jwu0JAuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqNC40L3QutCw0YDQtdC90LrQvi7QktCw0YDRltCw0YbRltGXOyAyKdCVLtCR0L7RhtGG0LAuJyfQkNGA0ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMc1d6Vl9MdDF6MGdHWFVMU2Vnb3Vja1k5Ulpyb0c3aC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLRgNC10L/QsNC6INCcLtCGLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQli7QlNC10LzQtdGA0YHRgdC80LDQvS4g0KTQsNC90YLQsNC30ZbRjywgMinQny7QhtGC0YPRgNGA0LDQu9GM0LTQtS4gJyfQnNCw0LvQtdC90YzQutC40Lkg0YfQsNGA0LTQsNGIJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVRNU0tIcEVjbU0zSzdoaVp6eVkzZzRLXzhNdEhiSDlML3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhNGA0YzQvtC80ZbQvdCwINCeLtCTLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLtCU0YDQtdC80LvRjtCz0LAuINCf0L7QtdC80LAt0YDQsNC/0YHQvtC00ZbRjywgMikg0KEu0J7RgNGE0LXRlNCyLicn0JLQtdGB0L3Rj9C90LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZNk9LVU9vSmIxanUzVnpTNEZDdE80Z3VCTEhEOTEwUC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDJhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNC00YPQuiDQoi7Qri5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCaLtCcLtCS0LXQsdC10YAu0JrQvtC90YbQtdGA0YIg0LTQu9GPINC60LvQsNGA0L3QtdGC0LAg4oSWMSzQhiDRhy47IDIpINCvLtCc0LXQtNC40L3RjNGILiDQoNC+0LzQsNC90YFcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtXQkhZVVlSbVhwbTVCQ0dXOWJudDh5OXJpeGdQUVo0L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MmJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQndC+0LLRltC60L7QstCwINCcLtCcLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J7QsdGALiDQlC7Ql9Cw0LTQvtGA0LAuICcn0KHQtdGA0LXQtCDRgdC10LvQsCDQtNC40YfQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBhV1ZsT2UzRi1zc1FoVFZxa0ZuZzhHSktHSkV3VTgwL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MmNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQndC+0LLRltC60L7QstCwINCcLtCcLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCfLtCGLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQl9Cw0LHRi9GC0Ywg0YLQsNC6INGB0LrQvtGA0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdHc1TU5VLTVmdVhRb1NPSHBXdGFHdkdqWnhjZk1BZm0vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LjRgNC+0YLQsCDQni7QnC5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0JrRg9C00YDRj9Cy0YbQtdCyLiAnJ9Ce0LTQuNC9INC00LXQvdGMINC3INC20LjRgtGC0Y8g0LTRj9GC0LvQsCcnLCAyKdCeLtCR0LXRhi4nJ9Cj0LrRgNCw0ZfQvdGB0YzQutC1INGW0L3RgtC10YDQvNC10YbQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTZWpCMWlkX1BVN1hnLXc1ZnpLVXZKMEVvT25Gc0RNQy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9XTtcblxubGV0IGVuc2VtYmxlID0gW1xuICAgIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0MzdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCW0YPRgNCw0LLQtdC70Ywg0KEuLCDQkNGA0YLQtdC80LXQvdC60L4g0KEuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQhtGB0L/QsNC90YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJywgMinQntCx0YAu0Jwu0J/QvtC/0L7QstCwLiAnJ9CE0LLRgNC10LnRgdGM0LrRliDQvNC+0YLQuNCy0LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xS3ZjRUU3cVBTMHJhT0NxZDhzYU1FSG8teTBVRElwQ2gvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCf0LjQu9C40L/Rh9GD0Log0J0uLCDQmtCw0LLRg9C9INCELilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCSLtCQ0LvQtdC60YHQtdGU0LIuJycg0J3QsCDQv9GA0L7Qs9GD0LvRj9C90YbRlicnLCAyKdCeLtCf0LXRgtGA0L7QstCwLiAnJ9Cm0LjRgNC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5FTG90d3FBejlDN2QwOUc0TlZCVnZiUnlLTDk1OHJzL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0MzlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgICjQoNCw0LTQutC+0LLRgdGM0LrQsCDQkC4sINCa0YPQt9GM0LzQuNGHKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC7QqNC90ZbRgtC60LUuICcn0KjQuNC90LXQu9GMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU00cGF6TklfVHl2MnNETVc5b0I5UWVtMzZJNURSWnVSL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0M2FcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgICjQoNCw0LTQutC+0LLRgdGM0LrQsCDQkC4sINCa0YPQt9GM0LzQuNGHKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0J3QsNGD0LzQtdC90LrQvi4nJ9Cn0LDRgSDQstC10LvQuNC60LjRhSDQvtGH0ZbQutGD0LLQsNC90YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTEJPZV93RmxDX3l6dF9GZmtSYkM4LTkwY1Z1M3N0Vk8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCh0ZbQutC+0YDQsCDQoC4g0KfQtdGA0LXQv9GD0YnQsNC6INCcLikuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QndCw0YPQvNC10L3QutC+LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnLCAyKdCVLtCT0YDRltCzLdCTLtCk0ZbRgNGC0LjRhy4nJ9Ci0LDQvdC10YbRjCDQkNC90ZbRgtGA0LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xT1JUenctcGxlaFF2QUFPaW5PcmRxbkh0blVfb0NaajUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAnJ015Y3JhZnQnJyAo0ITRgNC80L7Qu9C10L3QutC+INCULiwg0KjQuNCx0LDQvdC+0LLQsCDQki4pIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QodC60L7RgNC40LouICcn0JzQtdC70L7QtNGW0Y8nJywgICAgICAgICAyKdCeLtCl0YDQvtC80YPRiNC40L0uICcn0JTRgNGD0LrQsNGA0YHRjNC60LAg0LzQsNGI0LjQvdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQXV2bzQ0YUJZVEczdkt4c1QyaFFEMGhta2cxRWRsYTcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JHQvtC90LTQsNGA0LXQvdC60L4g0JwuLCDQodC70ZbQvdGH0LXQvdC60L4g0K4uKSBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCh0LXQutGA0LXRgi4nJ9Cf0YDQvtCz0YPQu9GP0L3QutCwINCU0L7QsdC10YDQvNCw0L3QsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExUVNBZGt3bjNpdTU0a1IzaHhuaDNIZzBDX3pwUC1aVS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQkdC+0L3QtNCw0YDQtdC90LrQviDQnC4sINCh0LvRltC90YfQtdC90LrQviDQri4pIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJyDQhtGC0LDQu9GW0LnRgdGM0LrQsCDQv9GW0YHQtdC90YzQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVpULTN1Q3J6YkdKdE1jMG9Md3RnSnFUb3J6OWpEWWVzL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0M2ZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCS0LDRiNGD0YDRltC90LAg0JIuLCDQhNC20L7QvdC60L7QsiDQkC4pLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JMu0JHRlNC70L7Qsi4nJ9Cj0YDQsNGB0ZbQvNCwINGWINCn0LDRgNGW0LLQvdCwINCn0LXRgNC10L/QsNGF0LAnJywgMinQni4g0J/QvtC70YzQvtCy0LjQuS4gJyfQn9C+0LTQvtGA0L7QtiDQsiDQkNC70YzQv9C4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWpDaHZNQnJEd3l4S2szQUpFRUNTQkU3WV9rQ0xSaDhzL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCT0LXQvNCx0LjRhtGM0LrQsCDQni4sINCa0YPQt9C70L4g0JouKS5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0KXQvtCy0LDRgNC0LiAnJ9Cn0LDRgNC70YzRgdGC0L7QvScnLCAyKdCU0LYuINCo0ZbRgNGW0L3Qsy4gJyfQmtC+0LvQuNGB0LrQvtCy0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdExOVmxodXJaVWRIeDQ0TWNoUzRxbTI1MWVTMzlyb1EvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JTQtdGA0Y/QsdGW0L3QsCDQoS4g0YLQsCDQktCw0YHQuNC70YzRlNCy0LAg0JIuKS5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JTRltCw0LHQtdC70LvRli4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwgMinQmy7QqNGD0LrQsNC50LvQvi4gJyfQk9GD0LzQvtGA0LXRgdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeUpRQmZnN2NfQm9RcVhNbUFZcU5ZUUNuWXRhd1o5VG8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrRgNC40YjRgtCw0LvQvtCy0LjRhyDQnC4sINCa0YDQuNGI0YLQsNC70L7QstC40Ycg0IYuKSBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCU0LYu0JPQtdGA0YjQstGW0L0uICcnQ2xhcCB5b3UgaGFuZCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFNQUplQlZuZnRFZGhjaW80N25EblVnY2pHR1R3SzhDai9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtGA0LjRiNGC0LDQu9C+0LLQuNGHINCcLiwg0JrRgNC40YjRgtCw0LvQvtCy0LjRhyDQhi4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIn0JrQvtC70Y/QtNC60LAnJywg0L7QsdGALiDQni7Ql9Cw0LrQsNC70Y7QttC90L7Rl1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcHF4WVpUdkZ5cnJqNmRUcFQ1OFVVUFNPUEhNLWhadGUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JvQsNC90YHRjNC60LjQuSDQhC4sINCb0LDQvdGB0YzQutCwINCeLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JUu0JPRgNGW0LMuINCQ0YDRltGPINGW0Lcg0YHRjtGX0YLQuCAnJ9CXINGH0LDRgdGW0LIg0KXQvtC70YzQsdC10YDQs9CwJycsIDIp0JIu0J/RgtGD0YjQutGW0L0uICcn0JHRgNC10L3RhNC+0YDQtNGB0YzQutCwINCy0ZbQtNGM0LzQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE4T1VzQ0dRQnMzSWhsWDZpdC1zM1R4dW8wN00zTnMwSC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQ1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQodC40LzQvtC90LXQvdC60L4g0KIuLCDQpNC10LTQuNC90LAg0JAuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JTQti7Qk9C10YDRiNCy0ZbQvS4nJ9Ca0L7RhdCw0L3QuNC5INC80ZbQuScnOyAyKSDQny7QnNC+0YDRltCwLiAnJ9Cc0LDQvdGD0LXRgicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoVmVraDhfNU1PVUpEZ0p0WEk4aTRHQmRSUXdDQWVrdC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQ2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQodC60L7Qv9C10YbRjCDQkC4sINCc0YPRgNC30LDQuiDQri4pLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCiLtCe0YHRgtC10L0uJyfQotCw0L3QtdGG0Ywg0LvRj9C70YzQvtC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVGenlpanV3QUZOajh2LVRscmFpSV9Qa3VIR3FYOTRFL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCh0LrQvtC/0LXRhtGMINCQLiDQnNGD0YDQt9Cw0Log0K4uKSBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQltGD0LvRjNGU0LLQsC4nJ9Cf0YDQvtCz0YPQu9GP0L3QutCwINC3INGC0LDRgtC+0LwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVlpyMlYtSHY4TUlGOEtXZ1pHZkpBeXVFRTdtYXFXb3AvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KLRgNC+0YbQtdC90LrQviDQkC4sINCv0LrRg9C90ZbQvdCwINCeLtCSLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0Jwu0JLQtdCx0LXRgC4g0KHQvtC90LDRgtCwINC00L4g0LzQsNC20L7RgCwg0IYg0YcuOyAyKdCQLtCa0L7QvNC70ZbQutC+0LLQsC4gJyfQodC/0L7Qs9Cw0LQnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYVlOQjhqSDBKeTRTUDN1ZkFjZVEtbUoyOWxQcl9yVHcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KTRltC70ZbQv9C+0LIg0IYuLCDQnNCw0YDRh9C10L3QutC+INCbLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLicn0JbQsNGA0YInJyAyKdCcLtCb0LXQvtC90YLQvtCy0LjRhy4nJ9Cp0LXQtNGA0LjQuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwaFdUeUlKYjdGenFOUUZlVXFFNXgxbFlGWjU5V3Vnei9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQpdC10LvQvNCw0L0g0JIuLCDQpdC10LvQvNCw0L0g0JIuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoy7Qk9GW0LvQu9C+0LouJyfQndCwINC/0LDRgNC40LfRjNC60L7QvNGDINCx0YPQu9GM0LLQsNGA0ZYnJywgMinQnS7QodC80ZbRgNC90L7QstCwLicn0JHRgNCw0LfQuNC70YzRgdGM0LrQuNC5INC60LDRgNC90LDQstCw0LsnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN2MzMkNJMG1fa05KWFprckhrWFFlNTJUZGZIV1BsNk8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQutCy0LDRgNGC0LXRgiAnJ1Nmb3J6YW5kbycnLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCeLtCm0LjQs9Cw0L3QutC+0LIuICcn0KLRg9GB0YLQtdC/JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVRa1oxMVVHVmxxaFIzc3JhZHBib1FwSzlFRXlhaXFvL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgJydTZm9yemFuZG8nJy5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQk9GA0ZbQsy4nJ9CSINC/0LXRh9C10YDRliDQs9GW0YDRgdGM0LrQvtCz0L4g0LrQvtGA0L7Qu9GPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNUTG50OElVNW5sWS1HMWRxZmJLdVJhMUJfWjhUU2tZL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCS0LjRhdGA0LjRgdGCINCcLiwg0KTRlNC00L7RgdGU0ZTQsiDQnS4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCf0YDQvtC60L7RhCfRlNCyLiDQnNCw0YDRiCwgMinQki7Qm9GO0YLQvtGB0LvQsNCy0YHRjNC60LjQuS4g0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGC0LXQvNGDINCf0LDQs9Cw0L3RltC90ZZcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW56UkhYSkt0QWJkeDdQd2JCNWQ0WEZHeEJOY3RwTkVrL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCS0ZbRgtGO0Log0JIsINCR0LXRgNC10LfQvtCy0YHRjNC60LAg0IQuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QkdCw0YUgKNCS0ZbQstCw0LvRjNC00ZYpLiDQmtC+0L3RhtC10YDRgiDQtNC70Y8g0L7RgNCz0LDQvdCwINC70Y8g0LzRltC90L7RgCwgMinQkC7QnyfRj9GG0L7Qu9C70LAuICcn0JvRltCx0LXRgNGC0LDQvdCz0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbmYwMUVmNk9WT3lMQUpVVWpCWXlJS05zM01aZV9QRnYvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0ZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JHQvtGA0L7QstC10YbRjCDQni4sINGW0LvRjtGB0YLRgNCw0YLQvtGAKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEu0JHQsNGFLicn0JDRgNGW0Y8nJyAoJyfQodGC0YDQsNGB0YLRliDQt9CwINCc0LDRgtCy0ZbRlNC8JycpXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFIMWFrUVVkUjdRS1JPNFAzaERZNl90WnRtZFNyazBKMS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDUwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQkdC+0YDQvtCy0LXRhtGMINCeLizRltC70Y7RgdGC0YDQsNGC0L7RgCkuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0J7RgNGELicn0J4s0KTQvtGA0YLRg9C90L4nJyAoJyfQmtCw0YDQvNGW0L3QsCDQkdGD0YDQsNC90LAnJylcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlrT0lCVGRJS0tRWjZuWFZnUGlaSDNZOG15Y1dwd0J5L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0LvQuNC80LXQvdC60L4g0JwuLCDQlNGW0L7RgNC00ZbRlNCy0LAg0JwuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuICcn0JLQvtC60LDQu9GW0LcnJywgMinQlC7QnNGW0LnQvi4nJ9CR0YDQsNC30LjQu9GM0ZTRgNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXU4MWRBQXRsRG9mcTRwbnlEdFlnLVN4R0I0akdCM3NFL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0L7Qt9Cw0Log0IYuLCDQotCw0ZTRgC3Qo9C70YzRj9C90L7QstCwINCaLikuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiQS4gINCfJ9GP0YbRhtC+0LvQsC4gJyfQm9GW0LHQtdGA0YLQsNC90LPQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5NllxRnRCUEdNbFh6RVFMOHV1M0JMNFVrck16ZTRqYi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDUzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC+0LfQsNC6INCGLiDRgtCwINCi0LDRlNGALdCj0LvRjNGP0L3QvtCy0LAg0JouKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JPRgNGW0LMuICcn0J3QvtGA0LLQtdC20YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVHRmaTRtN1Axb3VOSkVIRFhpSm5hN1gzYmVRUHpyZnUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQvtGB0YLQtdGH0LrQviDQkC4sINCa0L7QvdC00YDQsNGC0Y7QuiDQnC4gKS5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQmi7QlNC10LHRjtGB0YHRli4gJyfQoyDRh9C+0LLQvdGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWhSV3pDTFhJVVU2WHBEV1ozRWlzSTdRNU5aSHpEZGlvL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0L7RgdGC0LXRh9C60L4g0JAuLCDQmtC+0L3QtNGA0LDRgtGO0Log0JwuKS5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCuLtCS0LXRgdC90Y/Qui4gJyfQmtCw0YDQu9GB0L7QvScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFBMzFWclI1ZDVkWFQ4a1FXdE55R2t4Znk3YktJNU1EVS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQnNCw0YbRltGU0LLRgdGM0LAg0JwuLCDQn9Cw0L/RltGU0LLQsCDQmi4pLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JzQtdGC0L3QtdGALicn0KDQvtGB0ZbQudGB0YzQutC40Lkg0YXQvtGA0L7QstC+0LQnJywgMinQkC7QnyfRj9GG0YbQvtC70LAuJyfQktC10LvQuNC60LUg0YLQsNC90LPQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2QW5nc2FzR3VBc2hvRFp5ZzlpZGxqQjh4b01EdjR2Qy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICAo0JrQsNGB0Y/QvdC10L3QutC+INCeLtCSLiwg0JPQvtGA0LTRltGU0L3QutC+INCGLtCeLikgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQkC7QkdCw0LHQsNC00LbQsNC90Y/QvS4gJyfQndC+0LrRgtGO0YDQvScnLCAyKdCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQk9GD0LzQvtGA0LjRgdGC0LjRh9C90LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX1NYQUZRRHdfQm00WUstcWN5NlhzNGtGb1c0SDNEYUkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAnJ9CV0LvQtdCz0ZbRjycnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQnC7QodC60L7RgNC40LouICcn0JzQtdC70L7QtNGW0Y8nJywgMinQmy7QmtCw0YDQv9C10L3QutC+Licn0JLRltC90L7Rh9C+0Log0YPQu9GO0LHQu9C10L3QuNGFINC80LXQu9C+0LTRltC5JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWNrWncwSHNzaXlFZGJTU0hCcU95YXdxU2Z0QWsxd1VqL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCT0YDQuNCz0L7RgCfRlNCy0LAg0JMu0JAuICwg0K/QutGD0L3RltC90LAg0J4u0JIuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNGD0LHQtdGA0YIuJyfQktGW0LnRgdGM0LrQvtCy0LjQuSDQvNCw0YDRiCcnIDIp0JAu0JrQvtC80LvRltC60L7QstCwLiAnJ9Cd0LAg0LzQsNGB0LrQsNGA0LDQtNGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVDYUpfcVlVYXB5TS1IQmhydVdiLWg3SUZ5U3FrX3NVL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0L7RgdC10L3QutC+INCeLtCSLiwg0JrQsNGB0YPQvNC+0LLQsCDQni7QlC4pLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC4g0KbRhNCw0YHQvNCw0L0uICcn0JvRltGA0LjRh9C90LjQuSDQstCw0LvRjNGBJycsIDIp0Jwu0JzRltC90LrQvtCyLiAnJ9Ch0YLQsNGA0LjQuSDRgNC+0Y/Qu9GMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpHT0t1bnhJb0hkM1VqNUZIdmRXeU4tcnZXRjduNlYtL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgICjQktCw0YHQtdC90LrQviDQoS4sINCS0LDRgdC10L3QutC+INCcLiwg0KXQsNCy0LDQu9C60L4g0KIuLNCR0LjRh9C60L7QsifRj9C6INCaLikuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QktGW0LLQsNC70YzQtNGWLicn0JfQuNC80LAnJzsgMinQpC7QnNC10YDQuifRjtGA0LAuJyfQkdC+0LPQtdC80L3QsCDRgNCw0L/RgdC+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUI5Nm5FQzN2S1lSZDhPZ1RYZ1BpVlZYOFZCLU1TU2RZL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgJydBTExBIEJSRVZFJycuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QodGC0YDQsNCy0ZbQvdGB0YzQutC40Lku0KTRgNCw0LPQvNC10L3RgiDRltC3INCx0LDQu9C10YLRgyAnJ9Cf0LXRgtGA0YPRiNC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYmlmVzhPQnYxRTYxcWQxODRFYUpqc3ZPdHJYclJya1YvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQutCy0LDRgNGC0LXRgiAnJ0FMTEEgQlJFVkUnJy5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLtCT0YPRgNC70ZbRgtGCLicn0JLRltC00LXQvdGB0YzQutC40Lkg0LLQsNC70YzRgScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFRakJyS1dUa0NiaVM5RWo1azRwSGJIUkRzTjJEMWNhTS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDVlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YwgJyfQldCa0KHQn9Cg0JXQodCG0K8nJy5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCd0LDRg9C80LXQvdC60L4uIDEpJyfQp9Cw0YHQuCDQstC10LvQuNC60LjRhSDRgdC/0L7QtNGW0LLQsNC90YwnJywgMinQkC7QnyfRj9GG0YbQvtC70LAuICcn0JvRltCx0LXRgNGC0LDQvdCz0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaVVsWUtySUtzSjFpbnVDcUFPUzBNWTRMcUdybWNwX2svcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1ZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQutCy0LDRgNGC0LXRgiAo0KnRg9C60ZbQvdCwINCeLizQodC10YDQtNGO0Log0JMuLCDQqNCw0L/QvtCy0LDQuyDQni4sINCc0LDQutGB0LjQvNC10L3QutC+INCSLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLtCb0LDQstGW0L3RjNGP0LouJyfQk9Cw0LvQvtC/LdC80LDRgNGIJyc7IDIp0JMu0JPRg9GA0LvRltGCLiDQndC+0LrRgtGO0YDQvVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSVliTklDMkV4Nk54eE04eW1iQ3RMMm11UEFRNFJoTWcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ2MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQsNC90YHQsNC80LHQu9GMICgg0KHQvNC40Log0Jsu0K4uLNCo0LXQutC10LvRjCDQni7Qni4pLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQk9GD0LDRgdGC0LDQstGW0L3Qvi4gJyfQoNC+0LzQsNC90YEnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZEhCem5EbXBFLTB2V3lyeU1mODZYQ2tGYjhzUF9IWV8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ2MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQsNC90YHQsNC80LHQu9GMICjQodC80LjQuiDQmy7Qri4sINCo0LXQutC10LvRjCDQni7Qni4pLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCm0YTQsNGB0LzQsNC9Licn0KHQvdGW0LbQuNC90LrQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5UFRlLUpfY1M2RFRTTzZpWkZpeGdiNWc0WnhwYXpSVC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9XG5dO1xuXG5sZXQgZW5zZW1ibGVzID0gW1xuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1E0N3dBMDdmY3c4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQkC4g0JrQvtC80LvRltC60L7QstCwLiDCq9Cg0L7Qui3QtNGA0LDQudCywrsg0Lcg0YbQuNC60LvRgyDCq9CG0L3RgtC10YDQstCw0LvRltGPwrs7IDIuINCQLiDQmtC+0LzQu9GW0LrQvtCy0LAuIMKr0JzRltC90Y/Qu9C60LAt0L/QvtCy0YLQvtGA0Y/Qu9C60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LTRg9C10YIg0YMg0YHQutC70LDQtNGWINCQ0L3RgtC+0L3QvtCy0L7RlyDQny4g0YLQsCDQmtC+0LzQu9GW0LrQvtCy0L7RlyDQni5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1NjA2NDU3NDUxNzcyNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3R1UWdDX24tZFhzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQny4g0KjQvtC70YzRhi3QnC4g0JrQsNC90LrQtS4g0KTQsNC90YLQsNC30ZbRjyDQvdCwINGC0LXQvNGDINGD0LrRgNCw0ZfQvdGB0YzQutC+0Zcg0L3QsNGA0L7QtNC90L7RlyDQv9GW0YHQvdGWIMKr0JLQtdGA0YXQvtCy0LjQvdCwwrs7IDIuINCcLiDQodC60L7RgNC40LouINCf0LDRgNCw0YTRgNCw0Lcg0L3QsCDRgtC10LzRgyDQmy4g0JHQtdGC0YXQvtCy0LXQvdCwIMKr0JTQviDQldC70ZbQt9C4wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INC00YPQtdGCINGDINGB0LrQu9Cw0LTRliDQnNCw0LvRj9GA0YfRg9C6INCELiDRgtCwINCc0L7RhSDQnS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1NjA2NDU3NDY3MDY0MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0VVUkc2QS0xY29vXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQpC4g0KjRg9Cx0LXRgNGCLiDCq9Cd0ZbQvNC10YbRjNC60LjQuSDRgtCw0L3QtdGG0YzCuzsgMi4g0JAuINCU0LLQvtGA0LbQsNC6LiDCq9Ch0LvQvtCyXFx1MjAxOdGP0L3RgdGM0LrQuNC5INGC0LDQvdC10YbRjMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQtNGD0LXRgiDRgyDRgdC60LvQsNC00ZYg0K/Qs9C+0LTQutC4INCeLiDRgtCwINCv0LPQvtC00LrQuCDQoC5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1NjA2NDU3NDcxMjQxOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0lHaHBtVTRLcGdFXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC4g0JvQsNCy0ZbQvdGM0Y/Qui4gwqvQnNCw0YDRiC3Qs9Cw0LvQvtC/INC00LvRjyDQstC+0YHRjNC80Lgg0YDRg9C6INGC0LAg0L7QtNC40L3QvtC60L7Qs9C+INGA0L7Rj9C70Y7Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LrQstCw0YDRgtC10YIg0YMg0YHQutC70LDQtNGWINCU0YPQsSDQnS4sINCi0LrQsNGH0LXQvdC60L4g0JAuLCDQl9Cw0LvQuNCy0LDQtNC90L7Qs9C+INCgLiwg0JzQtdC90YbQtdC70Ywg0JAuXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNTYwNjQ1NzQ3NTk5MDRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC81VUZWWXN6QXJmY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCc0LDQutCw0YDQvtCyLiDCq9Cj0YDQvtGH0LjRgdGC0LAg0L/RgNC10LvRjtC00ZbRj8K7LCDQv9C10YDQtdC60LvQsNC0INCcLiDQk9C+0YLQu9GW0LHQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LrQstCw0YDRgtC10YIg0YMg0YHQutC70LDQtNGWINCU0YPQsSDQnS4sINCi0LrQsNGH0LXQvdC60L4g0JAuLCDQl9Cw0LvQuNCy0LDQtNC90L7Qs9C+INCgLiwg0JzQtdC90YbQtdC70Ywg0JAuXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNTYwNjQ1NzQ3OTgwMjFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC81aTE1QWE5cGxoOFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCh0LrQvtGA0LjQui4gwqvQnNC10LvQvtC00ZbRj8K7LCDRgtGA0LDQvdGB0LrRgNC40L/RhtGW0Y8g0J4uINCo0LXQstGH0LXQvdC60L4t0JzRltGF0LDQu9C+0LLRgdGM0LrQvlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LTRg9C10YIg0YMg0YHQutC70LDQtNGWINCT0YDQuNCz0L7RgFxcdTIwMTnRlNCy0L7RlyDQky7QkCAu0YLQsCDQr9C60YPQvdGW0L3QvtGXINCeLtCSLlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjU2MDY0NTc0ODI5Nzc2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvMWRjbUM3Rk0xZ29cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQmtCw0L3QutC1LiDCq9Cf0L7Qv9GD0YDRliDQtyDQv9GW0YHQtdC90Ywg0LLRltC50YHRjNC60L7QstC+0LPQviDRh9Cw0YHRg8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQtNGD0LXRgiDRgyDRgdC60LvQsNC00ZYg0JPRgNC40LPQvtGAXFx1MjAxOdGU0LLQvtGXINCTLtCQIC7RgtCwINCv0LrRg9C90ZbQvdC+0Zcg0J4u0JIuXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNTYwNjQ1NzQ4NjAyNTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8wc3BvY0VqSHppTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCh0LrQvtGA0LjQui4gwqvQn9GA0LjRlNC80L3QsCDQv9GA0L7Qs9GD0LvRj9C90LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQtNGD0LXRgiDCq9CV0LrRgdC/0YDQtdGB0ZbRj8K7INGDINGB0LrQu9Cw0LTRliDQk9Cw0L3RjtC6INCGLiDRgtCwINCf0LvQvtGC0L3RltC60L7QstC+0Zcg0JsuXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNTYwNjQ1NzQ4OTc4MDVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfVxuXVxuXG5sZXQgY29uY2VydG1hc3RlcnNfMiA9IFtcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC84LWFxUldzdGZKc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JzRg9C3LiDQhi4g0KjQsNC80L4sINGB0LsuINCULiDQm9GD0YbQtdC90LrQvi4gwqvQmtC40ZTQstC1INC80ZbQucK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LjQt9CwINCE0LLQs9C10L3RltC5LCAxNC4wOS4yMDA2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI1MzYyNTUzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvaXRacXRYbEVQVm9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQkdGA0LDQvNGBLiDCq9Cj0LPQvtGA0YHRjNC60LjQuSDRgtCw0L3QtdGG0YzCuyDQvNGWINC80ZbQvdC+0YAgKNC/0LXRgNC10LrQu9Cw0LQg0LTQu9GPINC90LDRjylcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQuNC30LAg0ITQstCz0LXQvdGW0LksIDE0LjA5LjIwMDYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjU0NTI1MjFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9PNkptZGZGMDBhSVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCE0LvRjNGH0LDQvdGW0L3QvtCyLiDCq9Ce0LksINC70Y7Qu9GWwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQtdC70YzQvdC40YfRg9C6INCQ0L3QsNGB0YLQsNGB0ZbRjywgMTkuMTEuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIyMzY2NjEyNTUxMTM2NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzVHTWJYeUltbFFNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki7QhNC70YzRh9Cw0L3RltC90L7Qsi7Cq9Ci0LXRgNC10LzQvtC6wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQtdC70YzQvdC40YfRg9C6INCQ0L3QsNGB0YLQsNGB0ZbRjywgMTkuMTEuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIyMzY2NjEyNTU1ODkxOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2kwOFp2REVqNVNNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoC4g0JvQvtCy0LvQsNC90LQuIMKrIFNvbmcgZnJvbSBhIFNlY3JldCBHYXJkZW7Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQoNGD0YHRgdGDINCT0LDQvdC90LAsIDI1LjEwLjIwMDYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjU2MTI5NThcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9yQzlxeUZ0Yl81VVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiDQmtC+0LvQvtC80LjQudC60LAg0YHQvtC70Ywg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQoNGD0YHRgdGDINCT0LDQvdC90LAsIDI1LjEwLjIwMDYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjU2NTM2MjlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9UYzYxS3JOaWtxc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JwuINCS0LXRgNC80LXQvdC40YcuIMKr0KfQvtGA0L3QvtCx0YDQuNCy0YbRlsK7OyAyLiDQry4g0JHQsNGA0L3QuNGHLiDCq9CT0YPRhtGD0LvQutCwINCa0YHQtdC90Y/CuyAo0L/QtdGA0LXQutC70LDQtCDQkC4g0KHQtdC80LXQvdC10L3QutC+KVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTQvtGC0L7QstCwINCa0LDRgtC10YDQuNC90LAsIDIwLjA0LjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjU3MDMxNTFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8tbDE1bkhiS2YwSVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KPQutGA0LDRl9C90YHRjNC60LAg0L3QsNGA0L7QtNC90LAg0L/RltGB0L3RjyDQsiDQvtCx0YDQvtCx0YbRliDQkC4g0JrQvtGBLdCQ0L3QsNGC0L7Qu9GM0YHRjNC60L7Qs9C+IMKr0KfQvtGC0LjRgNC4INCy0L7Qu9C4INC/0LDRgdGDINGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JDQu9C10LnQvdGW0LrQvtCyINCc0LjRhdCw0LnQu9C+LCAzMC4wNi4yMDA1INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI1NzQ0NDAyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvZ2h4T0hhRUJrUG9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQm9GW0YHRgi4gwqtPaCBxdWFuZCBqZSBkb3JzwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JDQu9C10LnQvdGW0LrQvtCyINCc0LjRhdCw0LnQu9C+LCAzMC4wNi4yMDA1INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI1Nzk5NDUyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvWFBkUnBTTHZQNEFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCcLiDQnNCw0L3Qs9GW0L3Rli4gwqtFeGVjdWl2ZcK7OyAyLiDQlNC2LiDQoNC+0YHRgdGW0L3Rli4g0JDRgNGW0Y8g0JHQtdGA0YLQuCDQtyDQvtC/0LXRgNC4IMKr0KHQtdCy0ZbQu9GM0YHRjNC60LjQuSDRhtC40YDRg9C70YzQvdC40LrCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkNC70LXQutGB0ZbQudGH0YPQuiDQktCw0LvQtdGA0ZbRjywgMTQuMDMuMjAwNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIyMzY2NjEyNTg0MzA3N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1VCTFotTHd0MnA4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS4g0JPQsNC50LTQvS4gwqvQodCy0ZbRgtC70LjQuSDQv9C+0LPQu9GP0LTCuzsgMi4g0JzRg9C3LiDQni4g0JHRltC70LDRiNCwLCDRgdC7LiDQki4g0K7RhdC40LzQvtCy0LjRh9CwLiDCq9CW0YPRgNCw0LLQutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNGD0YjQutC+INCQ0L3QsNGB0YLQsNGB0ZbRjywgMTguMDEuMjAwNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIyMzY2NjEyNTkwMDQyNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0VpODFmdHJSSXEwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQnNGD0LcuINCTLiDQkNC70YfQtdCy0YHRjNC60L7Qs9C+LCDRgdC7LiDQpS4g0JDQu9GH0LXQstGB0YzQutC+0ZcuIMKr0JTRg9GI0LAgXFx1MjAxMyDRgdC1INC60L7QvdCy0LDQu9GW0Y8g0L3RltC20L3QsMK7LCDRgtCyLiA0LCDihJY0OyAyLiDQny4g0JzQsNGB0LrQsNC90YzRly4g0KDQvtC80LDQvdGBINCh0LDQvdGC0YPRhtGG0Lgg0Lcg0L7Qv9C10YDQuCDCq9Ch0ZbQu9GM0YHRjNC60LAg0YfQtdGB0YLRjMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCE0YDQvtGI0LXQvdC60L4g0ITQstCwLCAxNi4xMS4yMDA2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI1OTY2ODY2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvVktrcjFPVVdYUjBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCfLiDQnNCw0YHQutCw0L3RjNGXLiDQoNC+0LzQsNC90YEg0KHQsNC90YLRg9GG0YbQuCAg0Lcg0L7Qv9C10YDQuCDCq9Ch0ZbQu9GM0YHRjNC60LAg0YfQtdGB0YLRjMK7OyAyLiDQni4g0JHRltC70LDRiC4gwqvQndGW0LrQvtC80YMg0L3QtSDQutCw0LbQuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDRiNGC0LXQu9GP0L0g0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDExLjAyLjIwMDQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjYwMDkyMDJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9TZkJ4UFFFSGgwZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiWXVraWtvIElzb211cmEuIMKrVGhlIHN0cmVldCB3aGVyZSB0aGUgd2luZCBsaXZlc8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LXQvSDQkNC5IChEZW5nIEFpKSwgMjYuMDEuMTk5N9GALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI2MDYyNDQxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQveHF2NmdEOHZpRmNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIlFpYW4gTGVpLiDCq1dpc2jCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQlNC10L0g0JDQuSAoRGVuZyBBaSksIDI2LjAxLjE5OTfRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIyMzY2NjEyNjA5MzQ5MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2VLbjhSdkZVWXIwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0KHQvtC90LXQstC40YbRjNC60LjQuS4g0KbQuNC60Lsg0L/RltGB0LXQvdGMINC90LAg0LLRltGA0YjRliDQhi7QpNGA0LDQvdC60LAgwqvQl9GW0LJcXHUyMDE50Y/Qu9C1INC70LjRgdGC0Y/CuzogwqvQndC10L/QtdGA0LXRhdGW0LTQvdC40Lwg0LzRg9GA0L7QvMK7LCDCq9Ci0LLQvtGXINC+0YfRlsK7LCDCq9Cl0L7RhyDRgtC4INC90LUg0LHRg9C00LXRiCDQutCy0ZbRgtC60L7RjiDRhtCy0ZbRgdGC0LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C+0LvRltGJ0YPQuiDQmtCw0YLQtdGA0LjQvdCwLCAxMS4wMS4xOTk4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI2MTU3MTU1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvamd1OTNOa3I2aWdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLiDQktCw0LnQvdC10L0uINCg0LDQv9GB0L7QtNGW0Y8g0LTQu9GPINGB0LDQutGB0L7RhNC+0L3RgyDRliDRhNC+0YDRgtC10L/RltCw0L3Qviwg0IYsINCG0IYsINCG0IbQhiDRh9Cw0YHRgtC40L3QuFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LJcXHUyMDE50Y7QuiDQktC70LDRgdGC0LAsIDE2LjA3LjIwMDEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjYyMDEwNDFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9HSE9VU2h6MXoxWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCc0L7RhtCw0YDRgi4g0JDRgNGW0Y8g0JDRgdC/0LDQt9GW0Zcg0Lcg0L7Qv9C10YDQuCDCq9Cc0ZbRgtGA0ZbQtNCw0YLCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LvRgtC40LrQvtCy0LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDE4LjA0LjE5OTgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjYyNDI4MjVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9PX291eG03aWVSY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JzRg9C3LiDQkS4g0KTRltC70YzRhiwg0YHQuy4g0IYuINCk0YDQsNC90LrQsC4gwqvQryDQvdC1INGC0LXQsdC1INC70Y7QsdC70Y7Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LvRgtC40LrQvtCy0LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDE4LjA0LjE5OTgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjYyNjc2MTRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9ZdTIwSWxJaHhNZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS7Qri4g0JzQtdC50YLRg9GBLiDQkNGA0ZbRjyDQkNC90L3QuCDQtyDQvtC/0LXRgNC4IMKr0KPQutGA0LDQtNC10L3QtSDRidCw0YHRgtGPwrs7IDIu0JzRg9C3LiDQki4g0JHQsNGA0LLRltC90YHRjNC60L7Qs9C+LCDRgdC7LiDQoi4g0KjQtdCy0YfQtdC90LrQvtCwLiDCq9Ce0LksINC70Y7Qu9GWLCDQu9GO0LvRliwg0LzQvtGPINC00LjRgtC40L3QvsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDRgdGO0Log0K7Qu9GW0Y8sIDE1LjA2LjIwMDAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjYzMDI3NTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9EcjlsZ09ZbzV3d1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JwuINCh0LrQvtGA0LjQui4g0JXQu9C10LPRltGPOyAyLiDQlS4g0KHQtdCy0LXRgNC9LiDCq9Cf0L7Qu9GM0YHRjNC60LjQuSDRgtCw0L3QtdGG0YzCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC40YHQtdC70YzQvtCy0LAg0IbRgNC40L3QsCDQhtCz0L7RgNGW0LLQvdCwXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMjM2NjYxMjYzMjgwNjlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9wUlYyX2dfY09Tc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0J4uINCh0LDQvdC00LvQtdGALiDCq9Cc0YDRltGPwrs7IDIuINCj0LrRgNCw0ZfQvdGB0YzQutCwINC90LDRgNC+0LTQvdCwINC/0ZbRgdC90Y8g0LIg0L7QsdGA0L7QsdGG0ZYg0J4uINCd0LDQutC+0L3QtdGH0L3QvtCz0L4gwqvQh9GF0LDQsiDQutC+0LfQsNC6INC30LAg0JTRg9C90LDQucK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCd0ZbQutGW0YLRltC90LAg0IbRgNC40L3QsCDQoNGD0YHQu9Cw0L3RltCy0L3QsFwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI2MzYyNDY5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvUmJPYWl2YzV1LWNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLiDQktCw0LnQvdC10L0uINCg0LDQv9GB0L7QtNGW0Y8g0LTQu9GPINGB0LDQutGB0L7RhNC+0L3QsCDRgtCwINGE0L7RgNGC0LXQv9GW0LDQvdC+LCDQhiDRh9Cw0YHRgtC40L3QsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80LjQuiDQm9Cw0YDQuNGB0LAg0K7RgNGW0ZfQstC90LBcIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIyMzY2NjEyNjQyNzI1NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2xHUFpuTTVDaGJZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQny4g0JrRgNC10YHRgtC+0L0uINCh0L7QvdCw0YLQsCDQtNC70Y8g0YHQsNC60YHQvtGE0L7QvdCwINC3INGE0L7RgNGC0LXQv9GW0LDQvdC+LCDQhtCGINGH0LDRgdGC0LjQvdCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzQuNC6INCb0LDRgNC40YHQsCDQrtGA0ZbRl9Cy0L3QsFwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI2NTM1MTg5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvUm1OVGpqcHBJOGs3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmi7QnC4g0JLQtdCx0LXRgC4g0JrQvtC90YbQtdGA0YIg4oSWMiDQtNC70Y8g0LrQu9Cw0YDQvdC10YLQsCDQtyDQvtGA0LrQtdGB0YLRgNC+0Lwg0LzRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwg0YLQsi4gNzQsINCGINGH0LDRgdGC0LjQvdCwOyAyLiDQkS4g0JrQvtCy0LDRhy4gwqtJY2ggaGVncnVzc2UgU2llLCBIZWVyIEpvaGFubiBTdHJhdXNzwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQtdGC0Y7Qs9CwINCQ0L3QtNGA0ZbQuSDQodGC0LDQvdGW0YHQu9Cw0LLQvtCy0LjRh1wiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI2NjAzMTQzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvVk80OHVvenpqTllcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQn9GD0LvQtdC90LouINCh0L7QvdCw0YLQsCDQtNC70Y8g0YTQu9C10LnRgtC4INC5INGE0L7RgNGC0LXQv9GW0LDQvdC+LCDQhtCGINGH0LDRgdGC0LjQvdCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0L7QvNGH0YPQuiDQkNC90L3QsCDQktGW0LrRgtC+0YDRltCy0L3QsFwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI2NjMwMDk0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvOG9yLUpWalp5c01cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQkdC+0LfQt9CwLiDCq9CQ0LPRgNC10YHRgtC40LTCuyDQtNC70Y8g0YTQu9C10LnRgtC4INC5INGE0L7RgNGC0LXQv9GW0LDQvdC+XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0L7QvNGH0YPQuiDQkNC90L3QsCDQktGW0LrRgtC+0YDRltCy0L3QsFwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjIzNjY2MTI2NjU1ODE2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH1cbl1cblxubGV0IGZvcnRlcGlhbm9Tb2xvID0gW1xuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvVkh0WXY2WG8yOEVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQlNCw0LzQutC+0LzQsS4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsINCGINGH0LDRgdGC0LjQvdCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LDRiNC40YDQtdC90LrQviDQlNGW0LDQvdCwLCAxMi4xMC4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQwNTI2ODgyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9pNjNiWEh5S1dvQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCo0LXQvdGC0Y7RgNC6ICjQotC10YDQtdGJ0YPQuikuIMKr0JzQtdC90YPQtdGCINCz0YDQsNGG0ZbQudC90L7RlyDQsdCw0LvQtdGA0LjQvdC4wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQsNGI0LjRgNC10L3QutC+INCU0ZbQsNC90LAsIDEyLjEwLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDA2MTA0NzNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzZFZFMyRzBWSGNnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS4g0JHQsNGFLiDQnNC10L3Rg9C10YIg0YHQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0LLQuiDQkNGA0YLRg9GALCAyMC4xMC4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQwNjcyMTM0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9MRlM1cmpsRmYzUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCW0LXRgNCx0ZbQvS4gwqvQo9C60YDQsNGX0L3RgdGM0LrQuNC5INGC0LDQvdC10YbRjMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7QstC6INCQ0YDRgtGD0YAsIDIwLjEwLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDA3MjAxNTdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3FUeG56UXFGUlpZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS4g0JHQsNGFLiDCq9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRj8K7INGB0L7Qu9GMINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JbQuNGC0LDRgNGO0Log0JrRltGA0LAsIDEwLjA5LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDA3ODIyMzhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2NSYnM5RE8tTTU4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC4g0KXRg9GC0L7RgNGP0L3RgdGM0LrQuNC5LiDCq9CS0L7Qs9C90ZbQstC+0YfQutCwLdGB0YLRgNC40LHRg9C90ZbQstC+0YfQutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JbQuNGC0LDRgNGO0Log0JrRltGA0LAsIDEwLjA5LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDA4OTAzNjhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2Fub2hlcVF3X1ZvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0KjRg9C60LDQudC70L4uIMKr0JvQtdCx0ZbQtNGMwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQuNGB0LXQu9GM0L7QstCwINCE0LvQuNC30LDQstC10YLQsCwgMTEuMDEuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MDkzMzU2NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvV25aWTZuOUNuXzRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQk9C10LTRltC60LUuINCV0YLRjtC0INC00L4g0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC40YHQtdC70YzQvtCy0LAg0ITQu9C40LfQsNCy0LXRgtCwLCAxMS4wMS4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQwOTc1MzI2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8waU1vYWUyamFwb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEuINCc0LDQudC60LDQv9Cw0YAuIMKr0JIg0LrRg9C30L3RlsK7OyDQkS4g0KTRgNC10LQuIMKr0KLQsNC90LXRhtGMINC10LvRjNGE0ZbQssK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YDQsNCy0YfRg9C6INCc0ZbQu9Cw0L3QsCwgMDkuMDEuMjAxNSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTAzNDAzOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvUlV4Wkk0aTlLZ2NcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCfLiDQl9Cw0YXQsNGA0L7Qsi4gwqvQmtCw0YDRg9GB0LXQu9GMwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvRltC/0LrQsNC9INCQ0LvRltC90LAsIDEwLjEwLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDEwNzkyNjlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0NXdDlDSkpsamY0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkS4g0KTRltC70YzRhi4gwqvQlNGA0LXQstC90Y8g0LrQsNC30LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCb0ZbQv9C60LDQvSDQkNC70ZbQvdCwLCAxMC4xMC4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQxMTM3OTA2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9sMkJ1akNNNHlka1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K8uINCR0L7QsdCw0LvRltC6LiDCq9CW0YPRgNCw0LLQu9C40L3QsCDQv9GW0YHQvdGPwrs7INCSLiDQkdCw0YDQstGW0L3RgdGM0LrQuNC5LiDCq9Ch0L7QvdC10YfQutC+wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvRj9GI0LjQuiDQkNC90L3QsCwgMTYuMDYuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTIwNjgyOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvT2FBZDBIT0FFdFlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuIMKr0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPwrsg0LTQviDQvNGW0L3QvtGAOyDQoS4g0JHQvtGA0YLQutC10LLQuNGHLiDCq9CjINGB0LrQu9C10L/RltC90L3RlsK7OyDQmi4g0KfQtdGA0L3Rli4g0JXRgtGO0LQg0YDQtSDQvNCw0LbQvtGALCDRgtCyLiAzOTlcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNGA0YPRidCw0Log0JLQtdGA0L7QvdGW0LrQsCwgMjIuMDcuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTI5MzA2OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvSXRhNXk5eWJVMjhcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LjQvdCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LjRgtGO0Log0JDRgNGB0LXQvSwgMjcuMDYuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTM2MDc3MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvc0p2M1BaOFJ0UzhcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQmtC+0YHQtdC90LrQvi4g0KHQutC10YDRhtC40L3QvlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC40YLRjtC6INCQ0YDRgdC10L0sIDI3LjA2LjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDE0NTI4ODZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3hQSnZVc0hidGtZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JLQtdGA0LHQuNGG0YzQutC40LksINCw0YDQsNC90LYuINCeLiDQqNCw0LLQsNGA0LTQsNC60LAuIMKr0JPRltC80L0g0KPQutGA0LDRl9C90LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntC30ZbQvdC60L7QstGB0YzQutCwINCS0ZbQutGC0L7RgNGW0Y8sIDIyLjA3LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDE1MjAyMTZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1VBOGF1R1FCZzZRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQri4g0KnRg9GA0L7QstGB0YzQutC40LkuIMKr0KjQsNGA0LzQsNC90LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0LfRltC90LrQvtCy0YHRjNC60LAg0JLRltC60YLQvtGA0ZbRjywgMjIuMDcuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTU2NzE0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvbUF1Y1BJN1ZtSDBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQoNC10LnQvdC10LrQtS4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALCDQhiDRh9Cw0YHRgtC40L3QsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntGB0LjQutCwINCg0L7QvNCw0L0sIDI1LjA2LjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDE2MDczNDVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzFhRzdYeWxkei1FXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQo9C60YDQsNGX0L3RgdGM0LrQsCDQvdCw0YDQvtC00L3QsCDQv9GW0YHQvdGPINCyINC+0LHRgNC+0LHRhtGWINCTLiDQkdC10LdcXHUyMDE50Y/Qt9C40YfQvdC+0LPQviDCq9CH0YXQsNCyINC60L7Qt9Cw0Log0L3QsCDQstGW0LnQvdC+0L3RjNC60YPCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntGB0LjQutCwINCg0L7QvNCw0L0sIDI1LjA2LjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDE2NDg5NTZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL19XZEdmU0lteUY0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQri4g0JfRg9Cx0LDQuSDCq9CR0LDQsdGD0YHRjyDQr9Cz0YPRgdGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7RgdGC0LDQv9GH0YPQuiDQmtCw0YLQtdGA0LjQvdCwLCAxMS4wOC4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQxNzMwNzAwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9NMG54cWlYZGZ6b1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCT0ZbQu9C70L7Qui4g0KHQsNGA0LDQsdCw0L3QtNCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0YHRgtCw0L/Rh9GD0Log0JrQsNGC0LXRgNC40L3QsCwgMTEuMDguMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MTc5ODA5MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTVMzaklwb0lGWTRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLiDQoNC+0YPQu9GWLiDCq9Ca0LjRgtCw0LnRgdGM0LrQuNC5INGF0LvQvtC/0YfQuNC6wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNGA0YXQvtC80LXQvdC60L4g0ITQstCz0LXQvdGW0Y8sIDA4LjA0LjIwMTYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDE4NDEzNjFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzBuNXl5ejBGOWtnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0KjQuNGC0YLQtS4gwqvQndCwINGB0LrQtdC50YLQsdC+0YDQtNGWwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNGA0YXQvtC80LXQvdC60L4g0ITQstCz0LXQvdGW0Y8sIDA4LjA0LjIwMTYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDE4ODcxMzFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL05YMlZhZlN3SFNBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQny4g0JfQsNGF0LDRgNC+0LIuIMKr0KLQsNC90LXRhtGMINC80LDQu9C10L3RjNC60LjRhSDQt9GW0YDQvtGH0L7QusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0ZbRgdC+0YbRjNC60LAg0KHQvtC70L7QvNGW0Y8sIDI5LjAzLjIwMTYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDE5MjYxNDJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2p4X296WXNMNUVRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0IbQvtGA0LTQsNC9LiDCq9Cf0L7Qu9GO0LLQsNC90L3RjyDQvdCwINC80LXRgtC10LvQuNC60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GW0YHQvtGG0YzQutCwINCh0L7Qu9C+0LzRltGPLCAyOS4wMy4yMDE2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQxOTY5MDI1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC90T2VRVC1VSUttQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCo0LXQvdGC0Y7RgNC6ICjQotC10YDQtdGJ0YPQuikuIMKr0JPRgNCw0LnQu9C40LLQtSDQt9Cw0LnRh9C10L3Rj9GC0LrQvsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YDQuNC80LDQuiDQrtC70ZbRjywgMDIuMDMuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjAwMzYzN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvbE40WnY0OHdQbllcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQk9GW0LvQu9C+0LouIMKrRHJpZnRpbmcgY2xvdWRzwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RgNC40LzQsNC6INCu0LvRltGPLCAwMi4wMy4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyMDMzNDUwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC91TFEwWXN0X1Q0WVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCQ0L3QtNGA0LUuINCh0L7QvdCw0YLQuNC90LAg0YHQvtC70Ywg0LzQsNC20L7RgCwg0IYg0YfQsNGB0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNC00L7QstC90ZbQuiDQldGB0YTRltGALCAyNS4wNi4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyMDc1MTQyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC92YVhPajc0R2pKTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCV0LrRiNGC0LXQudC9LiDCq9Ca0LDQv9GA0LjQtyDQs9C90L7QvNGW0LLCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LTQvtCy0L3RltC6INCV0YHRhNGW0YAsIDI1LjA2LjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDIxMTI4MjVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzFSSzV2eU50TGV3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoC4g0KjRg9C80LDQvS4gwqvQn9C10YDRiNCwINCy0YLRgNCw0YLQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQtNC+0LLQvdGW0Log0JXRgdGE0ZbRgCwgMjUuMDYuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjE3MjIzM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvQklJb01vR2ptQ1FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCvLiDQkdC+0LHQsNC70ZbQui4gwqvQotCw0LrQuNC5INGH0YPQtNC+0LLQuNC5INCy0LXRh9GW0YDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodC10LzQtdC90YfRg9C6INCS0LXRgNC+0L3RltC60LAsMzAuMTEuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjIyNzgwNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvR1FaR0ZSNzVGbFlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQlNCw0LzQutC+0LzQsS4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsINCG0IYs0IbQhtCGINGH0LDRgdGC0LjQvdC4XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LXQvNC10L3Rh9GD0Log0JLQtdGA0L7QvdGW0LrQsCwzMC4xMS4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyMjcxMjczXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvZGtPQ2hDZE5tQ1FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQn9C+0LvRj9C90YHRjNC60LjQuS4gwqvQmtCy0ZbRgtC10L3RjC4g0JLRltGC0LXRgNC10YbRjCDQv9C+0LLRltGP0LLCuyDQtyDRhtC40LrQu9GDIMKr0J/QvtGA0Lgg0YDQvtC60YMuIDEyINC/XFx1MjAxOdGU0YEg0LTQu9GPINGE0L7RgNGC0LXQv9GW0LDQvdC+INCyINC00LbQsNC30L7QstC40YUg0YLQvtC90LDRhcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0JDQu9GW0YHQsCwgMTIuMDEuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjM1NjA3N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1VLd3dTOXNpTDQwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0KfQtdGA0L3Rli4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQkNC70ZbRgdCwLCAxMi4wMS4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyNDE5MjMxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8zNmxXd3ZOWG5Da1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JsuINCo0YPQutCw0LnQu9C+LiDQn9GA0LXQu9GO0LTRltGPINC00L4g0LzQsNC20L7RgDsg0JsuINCR0LXRgtGF0L7QstC10L0uIDIuINCh0L7QvdCw0YLQuNC90LAg0YHQvtC70Ywg0LzQsNC20L7RgCwg0IYg0YfQsNGB0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQtdC/0LvQuNGG0YzQutCwINCX0LvQsNGC0LAsIDA1LjA0LjIwMTUg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDI0NzU5MjFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1JKZlhKWWpCM3NzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQhi4g0JrRg9C70LDRgy4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALCDQhiDRh9Cw0YHRgtC40L3QsDsgMi4g0JIuINCT0ZbQu9C70L7Qui4gwqvQmtC+0LvRltCx0YDRlsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0LrQsNGH0LXQvdC60L4g0JTRltCw0L3QsCwgMjAuMDguMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjUyOTIyNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvU0RBMzZOUW1vQzRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCcLiDQqNC10L3RgtGO0YDQuiAo0KLQtdGA0LXRidGD0LopLiDCq9Cc0LDQu9C10L3RjNC60LAg0YHQtdGA0LXQvdCw0LTQsMK7OyAyLiDQnC4g0JXQutGI0YLQsNC50L0uIMKr0JrQsNC/0YDQuNC3INCz0L3QvtC80ZbQssK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0YPRgNC40Log0JDQvdC90LAsIDA3LjExLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDI1NzMwMDlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzl6QmlpY21hSU8wXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQri4g0KnRg9GA0L7QstGB0YzQutC40LkuINCi0LDQvdC10YbRjDsgMi4g0KQuINCo0YPQsdC10YDRgi4g0KHQutC10YDRhtC+INGB0ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KPQtNC+0LQg0JTQsNGAXFx1MjAxOdGPLCAwMy4wMS4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyNjE4MzU2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9qWnVzbUpZc2RrUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KPQutGA0LDRl9C90YHRjNC60LAg0L3QsNGA0L7QtNC90LAg0L/RltGB0L3RjyDCq9Cd0LDQtCDRgNGW0YfQutC+0Y4g0LHQtdGA0LXQttC60L7QvMK7LCDQv9C10YDQtdC60LvQsNC0ICDQhi4g0JHQtdGA0LrQvtCy0LjRh9CwINC30LAg0L7QsdGA0L7QsdC60L7RjiDQnC4g0JvQtdC+0L3RgtC+0LLQuNGH0LA7IDIuINCe0LHRgC4g0JEuINCo0LjQv9GC0YPRgNCwLiDQmtC+0LvQvtC80LjQudC60LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXQsNC70LDQvNC10LnQtNCwINCb0YPQulxcdTIwMTnRj9C9LCAwOS4wNy4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyNjY5Mjg0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9wd3RHYkZMWjY5Z1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0IYuINCR0LXRgNC60L7QstC40YcuINCa0L7QvdGG0LXRgNGCINC00LvRjyDRhNC+0YDRgtC10L/RltCw0L3QviDihJYyLCDQhtCGINGH0LDRgdGC0LjQvdCwOyAyLiDQmy4g0IbQstCw0L3RjtGI0LjQvdCwLiDCq9Ca0LDRgNCw0LzQtdC70YzCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCIyNC5cXHTQpdC+0LxcXHUyMDE50Y/QuiDQktCw0YDQstCw0YDQsCwxOC4wMy4yMDE2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyNzE5NTcwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9JUUdYNlZkaUs3c1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J7QsdGA0L7QsdC60LAg0JEuINCo0LjQv9GC0YPRgNCwLiDQmtC+0LvQvtC80LjQudC60LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfRg9C70LrRltC90LAg0J3QsNC00ZbRjywgMTcuMDUuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0Mjc2NDI1N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvd3VUbDJlRGplV3dcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQktGW0LvRgtC+0L0uINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCn0YPQu9C60ZbQvdCwINCd0LDQtNGW0Y8sIDE3LjA1LjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDI3OTY5MDlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0ZUMXRaZFAyVmJjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JHRltC70LDRh9C10L3QutC+LiDQldC60YHQv9GA0L7QvNGCINGE0LAg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQqNCw0LzQuNC90LAg0JzQsNGA0LPQsNGA0LjRgtCwLCAwOC4wMS4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyODM1NDkyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9ody1jQXZUOUhCQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8uINCX0LDRhdCw0YDQvtCy0LAuIMKr0JbQsNGA0YIt0YHRg9Cy0LXQvdGW0YDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQqNCw0LzQuNC90LAg0JzQsNGA0LPQsNGA0LjRgtCwLCAwOC4wMS4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQyODcxNDk5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9WN3l0SG11M3BDY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEuINCR0LDRhS4g0JzQtdC90YPQtdGCINGB0L7Qu9GMINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQv9Cw0Log0JTQtdC90LjRgSwgMjYuMDkuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MjkxMjE0NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvU3ZvV1Fka2NGTU1cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLiDQkdC+0YDRgtC60LXQstC40YcuIMKr0JrQvtC30LDQusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCo0L/QsNC6INCU0LXQvdC40YEsIDI2LjA5LjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDI5NTEyODVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3V0SmFfQTdHUHRvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0KjRltGC0YLQtS4g0JXRgtGO0LQg0LTQviDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCo0L/QsNC6INCU0LXQvdC40YEsIDI2LjA5LjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDI5OTc1MTRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0xUWWNOOHdFempRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JPQtdC00ZbQutC1LiDQldGC0Y7QtCDQtNC+INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0K7Qt9Cy0LDQuiDQhNCy0LAsIDE0LjA2LjIwMTUg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDMwMzQyOTBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2VyUW1QeTZHb3hRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0JrQvtGA0LXQvdC10LLRgdGM0LrQsC4gwqvQlNC+0YnQuNC6wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0K7Qt9Cy0LDQuiDQhNCy0LAsIDE0LjA2LjIwMTUg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDMwNzAzNTFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0VVSURXUWlLcGNZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0JLRltC70YLQvtC9LiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQr9C60LjQvNGH0YPQuiDQmtCw0YDQvtC70ZbQvdCwLCAxNS4xMi4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzMTI3MzczXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9hVHRXNUJDV1h4OFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCo0LjRgtGC0LUuINCc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRj1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQr9C60LjQvNGH0YPQuiDQmtCw0YDQvtC70ZbQvdCwLCAxNS4xMi4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzMTY0MTc0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9KaldnOVZWb0FqZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JTQti4g0JHQsNGB0YLRjNGU0L0uIMKr0JHQtNC20L7Qu9CwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0K/QutC40LzRh9GD0Log0JrQsNGA0L7Qu9GW0L3QsCwgMTUuMTIuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzIwNjUzMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvOWFHZUZWb2MwellcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCULiDQp9GW0LzQsNGA0L7Qt9CwLiDQodC+0L3QsNGC0LAg4oSWMTUsIDIg0LfQvtGI0LjRglwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkNCz0YDQsNGC0ZbQvdCwINCh0YLQsNC90ZbRgdC70LDQsiwgMjQuMDguMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzI0OTk4NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTlc0UTNod2tkQ1lcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQodC60L7RgNC40LouIMKr0JbQsNGA0YLRltCy0LvQuNCy0LAg0L9cXHUyMDE50ZTRgdCwwrsg0Lcg0YbQuNC60LvRgyDCq9CXINC00LjRgtGP0YfQvtCz0L4g0LDQu9GM0LHQvtC80YPCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkNCz0YDQsNGC0ZbQvdCwINCh0YLQsNC90ZbRgdC70LDQsiwgMjQuMDguMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzMwODY5OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvS1Npc1pUeVdWNGNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCRLiDQpNGW0LvRjNGGLiDCq9Cb0ZbRgNC40YfQvdC40Lkg0L/RgNC10LvRjtC0wrs7IDIuINCuLiDQqNCw0LzQvi4g0KLQvtC60LDRgtCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCQ0YDRgtGM0L7QvNC+0LLQsCDQlNCw0YBcXHUyMDE50Y8sIDI2LjA2LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDMzNDk0ODFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL21wRU1jeEw5Z1lVXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS7QoS4g0JHQsNGFLiDQkNGA0ZbRjyDQtyDCq9Ck0YDQsNC90YbRg9C30YzQutC+0Zcg0YHRjtGX0YLQuMK7INC00L4g0LzRltC90L7RgDsgMi4g0JAuINCa0L7Qu9C+0LzRltGU0YbRjC4gwqvQk9GA0LAt0LLQtdGB0L3Rj9C90LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LDQutCw0ZTQstC40Ycg0KLQuNC80L7RhNGW0LksIDAxLjAxLjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDMzOTQ0ODJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLy1JS2lacUx6ZEJzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnS4g0J3QuNC20LDQvdC60ZbQstGB0YzQutC40LkuINCa0L7Qu9C+0LzQuNC50LrQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdCw0YnRltC5INCS0ZbQutGC0L7RgNGW0Y8sIDExLjA2LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDM0MzgxMjlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1FXY2szTjVmOFdNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0JHRjtGA0LPQvNGO0LvQu9C10YAuINCV0YLRjtC0XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LDRidGW0Lkg0JLRltC60YLQvtGA0ZbRjywgMTEuMDYuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzQ2OTkzNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1Z5bElab0s4aEw0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQny4g0KfQsNC50LrQvtCy0YHRjNC60LjQuS4gwqvQpdCy0L7RgNC+0LHQsCDQu9GP0LvRjNC60LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdC10LfRgdC80L7Qu9GM0L3QsCDQl9C+0YDRj9C90LAsIDIyLjEwLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDM1MDM1NzJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC90eG0ySkI5Q2hVZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCc0ZbRlNGALiDCq0Rvd25yaWdodCBIYXBweSBSYWfCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdC10LfRgdC80L7Qu9GM0L3QsCDQl9C+0YDRj9C90LAsIDIyLjEwLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDM1NDQ2OTRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0NzYUJFdElWTVp3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JPQtdGA0LDRgdC40LzQtdC90LrQvi4gwqvQnNC+0YDQtcK7OyAyLiDQnS4g0KLQvtGA0L7Qv9C+0LLQsC4g0KLQvtC60LDRgtCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LXRgNC10LfRgdGM0LrQsCDQm9GO0LHQvtCyLCAyNS4xMC4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQzNTkxMjgyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC92aGVjcnJ5U0c3VVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K4uINCp0YPRgNC+0LLRgdGM0LrQuNC5LiDQhtC90LLQtdC90YbRltGPXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0L7QvdC00LDRgNGH0YPQuiDQnNC40YDQvtGB0LvQsNCy0LAsIDE4LjA0LjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDM2MzE3NTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3NRUE1rVG5iTTFnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQli4g0JrQvtC70L7QtNGD0LEuINCV0YLRjtC0LdC60LDRgNGC0LjQvdC60LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQvtC90LTQsNGA0YfRg9C6INCc0LjRgNC+0YHQu9Cw0LLQsCwgMTguMDQuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzY4MDYzOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMVFPZ01MeTR6akFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQotC40LzQvtGI0LXQvdC60L4uINCV0LvQtdCz0ZbRj1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0LvQvtGJ0YPQuiDQldC80ZbQu9GW0Y8sIDE5LjA2LjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDM3MjIyODFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1ZlVXhfYkJJQUNFXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi4g0J/QtdGC0YDQuNC90LXQvdC60L4sINC+0LHRgNC+0LHQutCwINCcLiDQqNC10L3RgtGO0YDQui4gwqvQo9C60YDQsNGX0L3QsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7Qu9C+0YnRg9C6INCV0LzRltC70ZbRjywgMTkuMDYuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0Mzc2NDgzM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvYThwd09oU3B1c3NcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4g0JPQvtC/0LDQujsgMi4g0JwuINCo0LXQvdGC0Y7RgNC6ICjQotC10YDQtdGJ0YPQuikuINCR0LDQu9Cw0LTQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9Cw0LLRgNC40LvRjtC6INCh0L7RhNGW0Y8sIDI5LjA2LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDM4MTA4MjJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2dSaEE2YkNGbGJRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmy4g0KjRg9C60LDQudC70L4gKNCi0LXRgNC10YnRg9C6KS4g0J/RgNC10LvRjtC00ZbRjzsgMi4g0JwuINCo0LXQvdGC0Y7RgNC6ICjQotC10YDQtdGJ0YPQuikuIMKr0KLQsNC90LXRhtGMINC60YPQu9GM0LHQsNCx0L7QusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LDQu9Cw0L0g0IbRgNC40L3QsCwgMTcuMDUuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0Mzg1NDI3MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvU3lzR3Z1Yy1BSW9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINChLiDQkdC+0YDRgtC60LXQstC40YcuIMKr0JzRgNGW0Y/CuzsgMi4g0JUuINCT0YDRltCzLiDCq9Ch0LXRgNGG0LUg0L/QvtC10YLQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LDRgdGA0LDRgtC+0LIg0J7Qu9C10LrRgdGW0LksIDI0LjA4LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDM4OTM4MzJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2FLM2phQlNEdDQ4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS7QoS4g0JHQsNGFLiDQlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINC00L4g0LzQsNC20L7RgDsgMi4g0JwuINCc0L7RiNC60L7QstGB0YzQutC40LkuINCV0YLRjtC0INGB0ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQtdGA0LDRgdC40LzQtdC90LrQviDQntC70LXQutGB0LDQvdC00YDQsCwgMDEuMDYuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0MzkzOTE1NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvbF80NElfN1JTVGtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCRLiDQpNGW0LvRjNGGLiDCq9Cc0LXQu9Cw0L3RhdC+0LvRltC50L3QuNC5INCy0LDQu9GM0YHCuzsgMi4g0JsuINCG0LLQsNC90LXQvdC60L4uIMKr0JTQvtGJ0LjQusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LvQsNC00LrQsCDQlNCw0YDQuNC90LAsIDMxLjAxLjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDM5OTI0MDFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2xPVGNCaW15bWZZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS7QoS4g0JHQsNGFLiDQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8g0YDQtSDQvNGW0L3QvtGAOyAyLiDQpC4g0KjQvtC/0LXQvS4gQ2FudGFiaWxlXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LvQvtCy0LDRhtGM0LrQsCDQn9C+0LvRltC90LAsIDE1LjEyLjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDQwMzcwMjRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL09FNXlRV3RGV3E0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLiDQlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINC70Y8g0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0LjQs9C+0YDQtdC90LrQviDQnNCw0YDRltGPLCAxMy4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ0MDc2NTU1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8weTZVbW4ySjdId1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCi0LXRgNC10YnRg9C6ICjQqNC10L3RgtGO0YDQuikuIMKr0J/RgNC+0LHRg9C00LbQtdC90L3Rj8K7INC3INGG0LjQutC70YMgwqtDb250cmVnb8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDQuNCz0L7RgNC10L3QutC+INCc0LDRgNGW0Y8sIDEzLjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDQ4NDMzMTRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3g4ejVXQXdRYVhzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmy4g0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtCwIOKEljIwLCDRgtCyLjQ5LCDQhiDRh9Cw0YHRgtC40L3QsDsgMi4g0J4uINCR0ZbQu9Cw0YguINCR0LDRgNC60LDRgNC+0LvQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQlNC10LnQvdC10LrQsCDQodC+0LvQvtC80ZbRjywgMTkuMDUuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NDg5ODM2NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvWUpUUmZNbHF3S0VcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCkLiDQmtGD0LvQsNGDLiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwg0YLQsi41NSwg0IYg0YfQsNGB0YLQuNC90LA7IDIuINCbLiDQktC+0LvQvtGI0LjQvdCwLiDCq9CX0LjQvNC+0LLQuNC5INGA0LDQvdC+0LrCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQlNC40YjQu9C10LLQuNC5INCE0LLQs9C10L0sIDMwLjAxLjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDQ5NDYxMjdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2JRNWtWdXV1YTJ3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS4g0JvRjtC00LrQtdCy0LjRhy4gwqvQodGC0LDRgNC+0LLQuNC90L3QsCDQv9GW0YHQvdGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0ITRgNC10LPQsCDQnNCw0YBcXHUyMDE50Y/QvdCwLCAwNC4wOC4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ0OTgzMzQzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9SaWxRRGtnejFYZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCc0L7RgNC00LDRgdC+0LIuIMKr0JTQsNCy0L3QuNC8INC00LDQstC90L7Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQhNGA0LXQs9CwINCc0LDRgFxcdTIwMTnRj9C90LAsIDA0LjA4LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDUwMTQ5MzlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3ZDdUg3ckZ0QUxjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0IbQstCw0L3QtdC90LrQvi4g0KTQsNC90YLQsNC30ZbRjyDQvdCwINGC0LXQvNGDINGD0LrRgNCw0ZfQvdGB0YzQutC+0Zcg0L3QsNGA0L7QtNC90L7RlyDQv9GW0YHQvdGWIMKr0JPQsNC90LTQt9GPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JbQtdCz0LDQu9C+INCd0LDQtNGW0Y8sIDE2LjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDUwNTAxMTZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2xGaE9UV0duUXBzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkS4g0KTRltC70YzRhi4gwqvQodGD0LzQvdCwINC/0ZbRgdC90Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQltC10LPQsNC70L4g0J3QsNC00ZbRjywgMTYuMDkuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTE5OTEzNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvVXRoSXYtTHdQcDhcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCvLiDQkdC+0LHQsNC70ZbQui4gwqvQkdGD0YDRhdC70LjQstC40Lkg0LLQvtC00L7RgdC/0LDQtMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQktGW0YDRgdCw0LLRltGPLCAwNS4wNy4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1MjQzODgzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9NQXZvUUFsMXE2WVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCp0LXRgNCx0LDQutC+0LIuIMKr0JXQu9C10LPRltGPINC60LjRl9Cy0YHRjNC60LjRhSDQv9Cw0LPQvtGA0LHRltCywrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjtC6INCS0ZbRgNGB0LDQstGW0Y8sIDA1LjA3LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDUyODAyNjhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzNLc01Gb1oyUXpFXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JPRltC70LvQvtC6LiDQpNC70LDQvNC10L3Qs9C+XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQnNCw0YDRltCw0LwsIDAyLjA0LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDUzMDYzMzdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLy1NZVBFcFhsZlZVXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjyDihJY1INGA0LUg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JzQsNGA0ZbQsNC8LCAwMi4wNC4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1MzM1Nzc0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9laE1JOVVmV3luVVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCa0YPQu9Cw0YMuINCh0L7QvdCw0YLQuNC90LAg4oSWMVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0L3RhtC10YAg0JHQvtCz0LTQsNC90LAsIDEwLjAxLjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDUzODMwMDlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2VnQ2V2b0laeHo0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JfQsNCy0LDQtNGB0YzQutC40LkuIMKr0KjRg9C80LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDQvdGG0LXRgCDQkdC+0LPQtNCw0L3QsCwgMTAuMDEuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTQxNjk1M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvS3BmX0w0N3pqWGtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCSLiDQmtCy0LDRgdC90LXQstGB0YzQutC40LkuIMKr0JTRg9C80LrQsMK7OyAyLiDQlS4g0JPRgNGW0LMuIMKr0J/QvtC10YLQuNGH0L3QsCDQutCw0YDRgtC40L3QutCwwrsg4oSWMVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC70ZbQvNC+0LLQuNGHINCE0LvQuNC30LDQstC10YLQsCwgMTIuMTAuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTQ1NzgxMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvUWo4cGhzV2FEa3NcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCuINCp0YPRgNC+0LLRgdGM0LrQuNC5LCDQkdCw0YDQutCw0YDQvtC70LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtCy0LDQu9GM0YfRg9C6INCQ0L3QvdCwLCAxNC4xMS4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1NDg3NDM5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9PdS1Od1VGVTM1MFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JMuINCh0LDRgdGM0LrQvi4g0KDQtdCz0YLQsNC50LxcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtCy0LDQu9GM0YfRg9C6INCQ0L3QvdCwLCAxNC4xMS4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1NTEzNjk4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9TNk5ZS09PZEdNQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KPQutGA0LDRl9C90YHRjNC60LAg0L3QsNGA0L7QtNC90LAg0L/RltGB0L3RliDQsiDQvtCx0YDQvtCx0YbRliDQoS4g0JrQu9C40LzQvtCy0YHRjNC60L7Qs9C+IMKr0IfRhdCw0LIgICAg0LrQvtC30LDQuiDQt9CwINCU0YPQvdCw0LnCuzsgMi4g0KIuINCf0LXRgtGA0LjQvdC10L3QutC+LCDQvtCx0YDQvtCx0LrQsCDQnC4g0KjQtdC90YLRjtGA0LouIMKr0KPQutGA0LDRl9C90LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0LvQtdGB0L3QuNGH0LXQvdC60L4g0JzQsNGA0LosIDI1LjA1LjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDU1NTkzOTNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1czaElVb0tZN1o0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KjQtdC90YLRjtGA0LogKNCi0LXRgNC10YnRg9C6KS4gwqvQktCw0LvRjNGBLdC60LDQv9GA0LjRgcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QvdC00YDQsNGC0Y7QuiDQktC10YDQvtC90ZbQutCwLCAxNC4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1NTg4MzY1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9mZVVMTVdvenpxb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCc0LDQudGU0YAuIMKr0KTQsNGA0LHQuCDQvtGB0LXQvdGWwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtC90LTRgNCw0YLRjtC6INCS0LXRgNC+0L3RltC60LAsIDE0LjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDU2MTYzOTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9aMlo3VzBJZlBxa1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0Jku0KEuINCR0LDRhS4g0JDQu9C10LzQsNC90LTQsCDQtyDCq9Ck0YDQsNC90YbRg9C30YzQutC+0Zcg0YHRjtGX0YLQuMK7INC80ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YA7IDIuINCcLiDQm9C40YHQtdC90LrQvi4g0JzQsNC30YPRgNC60LAg0LTQviDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7RhtC40YDRltC5INCQ0YDRltC90LAsIDIwLjA4LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDU2NTY0NDRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzd6NlNUeURvb3dnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0KjRg9C60LDQudC70L4uINCc0LDRgNGIINC3INGB0Y7Rl9GC0LggwqvQptC40YDQusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YDQuNGI0YLQsNC70Ywg0K/QvSwgMjEuMDYuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTY5ODk3NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvQlJKN3F3ZjF1emNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLiDQodC+0YHQvdGW0L3QsC4gwqvQlNGA0LDQutC+0L3Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGA0LjRiNGC0LDQu9GMINCv0L0sIDIxLjA2LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDU3Mjk1MjZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9lUERDdzFEbENRZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCv0LrQvtCy0YfRg9C6LiDQn9C+0LvQvtC90LXQt1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGD0LvQuNC6INCe0LvQtdGB0Y8sIDE2LjAxLjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDU3NTg5NzRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC95SmczS0t2WUxpZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCR0LXRgtGF0L7QstC10L0uIMKr0JTQviDQldC70ZbQt9C4wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRg9C70LjQuiDQntC70LXRgdGPLCAxNi4wMS4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ1Nzg5NTgzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9TWVpYYjhZOGRTUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0Jku0KEuINCR0LDRhS4g0KLRgNC40LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDRgNC1INC80LDQttC+0YA7IDIuINCkLiDQqNC+0L/QtdC9LiDQnNCw0LfRg9GA0LrQsCwg0YLQsi42NyDihJYyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCb0LDRiSDQndCw0L3QsCwgMDEuMTEuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTgyNDE0MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvckxpZjE3bjlQbWtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCgLiDQk9C70ZbRlNGALiDCq9CV0YHQutGW0LfCuyDRgNC1INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQtdCz0LrQuNC5INCc0LDQutGB0LjQvCwgMTcuMDguMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTkxNzI5M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvQVptZ2dwenpIVkVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQlNC10LHRjtGB0YHRli4gwqvQnNCw0LvQtdC90YzQutC1INC90LXQs9GA0LXQvdGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQtdCz0LrQuNC5INCc0LDQutGB0LjQvCwgMTcuMDguMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NTk2MjYwOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMWtTR3NCQVUzOXdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCSLiDQnNC+0YbQsNGA0YIuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCDQhiDRh9Cw0YHRgtC40L3QsDsgMi4g0JIuINCo0YPQutCw0LnQu9C+LiDQhtC90YLQtdGA0LzQtdGG0L5cIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNC30LXQv9CwINCh0L7RhNGW0Y8sIDMwLjAzLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDU5OTY0MDhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzA4S282OGlNRlowXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkS4g0KTRltC70YzRhi4gwqvQl9Cw0LrQsNGA0L/QsNGC0YHRjNC60LAg0L3QvtCy0LXQu9C10YLQsMK7IOKEljJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNC60YHRjtGC0LjQvdGB0YzQutCwINCd0LDQtNGW0Y8sIDEwLjA4LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDYwMjQ4MTRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3RiUkdyMDA4U2hnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JPRltC70LvQvtC6LiDCq9Ca0LDRgNC90LDQstCw0Lsg0LIg0KDRltC+wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNC60YHRjtGC0LjQvdGB0YzQutCwINCd0LDQtNGW0Y8sIDEwLjA4LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDYwNTk2NTNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzdQNUs3N01jaExNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0KjRg9C60LDQudC70L4uIMKr0JrQvtGC0LjQuiDRliDQvNC40YjQutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzRlNC90Ywg0JDQvdCw0YHRgtCw0YHRltGPLCAwOC4wMy4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2MDg2MDIxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8zakpDdlYxYi05Z1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCRXFx1MjAxOdGU0LvRjC4g0KHQvtC90LDRgtC40L3QsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNGU0L3RjCDQkNC90LDRgdGC0LDRgdGW0Y8sIDA4LjAzLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDYxMDkwMTNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1BDclJXSGZOZkpjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JTQstC+0YDQttCw0LosIMKr0JTQttCw0LfQvtCy0LjQuSDQtdGC0Y7QtMK7IOKEljIg0LTQviDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCd0ZbRiNC/0LDQuyDQhNCy0LAsIDA5LjA1LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDYxMzk4NzhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2htMEdxVGQ4Y25nXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JvQvtCz0ZbQvS4gwqvQm9GW0YDQuNGH0L3QuNC5INC/0YDQtdC70Y7QtMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCd0ZbRiNC/0LDQuyDQhNCy0LAsIDA5LjA1LjIwMTAg0YAu0L1cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjE3MjI5M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvRldzY0N6Y3NWbFFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQldC60YjRgtC10LnQvS4gwqvQmtCw0L/RgNC40Lcg0LPQvdC+0LzRltCywrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qu9GW0LnQvdC40Log0JzQuNC60LjRgtCwLCAzMS4xMi4yMDExINGALtC9LiAoMiDRgNGW0Log0L3QsNCy0YfQsNC90L3RjylcIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjIwMzQ1NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvd3JfWnYySmdILWNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLiDQndC+0LLRltC60L7QstCwLiDCq9CT0L7RgdGC0YDQuNC5INGA0LjRgtC8wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qu9GW0LnQvdC40Log0JzQuNC60LjRgtCwLCAzMS4xMi4yMDExINGALtC9LiAoMiDRgNGW0Log0L3QsNCy0YfQsNC90L3RjylcIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjI0MzYxMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvX3F4QnlNbXNGd29cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCa0LjQvNC70LjQui4gwqvQnNGW0L3RltCw0YLRjtGA0L3QsCDQm9C10L7QvdGC0L7QstGW0LDQvdCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7RgdGC0LDQv9GH0YPQuiDQpdGA0LjRgdGC0LjQvdCwLCAxOC4wOC4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2MjcyMzc4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9DMGVtQmJGWUlTMFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JouINCT0LDRgNC00LXQu9GMLiDCq1BvciB1bmEgY2FiZXphwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7RgdGC0LDQv9GH0YPQuiDQpdGA0LjRgdGC0LjQvdCwLCAxOC4wOC4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2MzI5MTEwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9nTDJwTVZZTllHTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JouINCd0ZbQu9GM0YHQtdC9LiDCq9CT0L7QtNC40L3QvdC40Log0Lcg0LzRg9C30LjQutC+0Y7Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0L3Rh9C10L3QutC+INCX0L7RgNGP0L3QsCwgMDUuMDIuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjM2MjM4MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvRHFOWEtYUnZOMXNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCgLiDQk9C70ZbRlNGALiDQn9GA0LXQu9GO0LTRltGPXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDQvdGH0LXQvdC60L4g0JfQvtGA0Y/QvdCwLCAwNS4wMi4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2Mzg5OTA1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9xMmRwRzJleEtHY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0Jku0KEuINCR0LDRhS4g0KLRgNC40LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDihJYxMTsgMi4g0JUuINCT0YDRltCzLiDQldGC0Y7QtCwg0YLQsi4gNzMg4oSWNSAo0L/QsNC8XFx1MjAxOdGP0YLRliDQqNC+0L/QtdC90LApXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDRgdC10L3Rh9GD0Log0JrQsNGA0ZbQvdCwLCAwMi4wMy4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2NDM5MjQ3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9QcXdHc084dFU3VVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JMuINCo0YLRjNC+0LvRjNGG0LXQu9GMLdCZLiDQkdCw0YUuINCc0LXQvdGD0LXRgiDRgdC+0LvRjCDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDRgdC60LDRgCDQndCw0YLQsNC9LCAwNy4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2NDcyMTg3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC93RXBNakNXaTg0d1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCo0LjRgtGC0LUuIMKr0KLQsNC90LXRhtGMINCz0L3QvtC80ZbQssK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDRgdC60LDRgCDQndCw0YLQsNC9LCAwNy4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2NDk2MTIxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC82dXZsdVd2UTljWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0K4uINCg0LXQvNC10LfQtdC90LrQvi4gwqvQoNCw0L3QvtC6INCyINGC0YPQvNCw0L3Rliwg0L/RgtCw0YXQuCDQvdCw0LQg0LzQvtGA0LXQvMK7OyAyLiDQoi4g0J7RgdGC0LXQvS4gwqvQodC+0L0g0LvRj9C70YzQutC4wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/Qu9C40YHRjtC6INCS0LXRgNC+0L3RltC60LAsIDIxLjEwLjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY1MjY1NDlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0NUMU81ejZUX0NjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0JrRg9C70LDRgy4g0JLQsNGA0ZbQsNGG0ZbRlyDRgdC+0LvRjCDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0L7QtNC70LXQstGB0YzQutCwINCa0LDRgNC40L3QsCwgMjcuMDcuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjU1NjIwM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvYmp3d1dkTC1QeEVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQktC10YDQsdC40YbRjNC60LjQuSAsINC+0LHRgC4g0LTQu9GPINGELdC90L4g0JEuINCo0LjQv9GC0YPRgNCwIMKr0KnQtSDQvdC1INCy0LzQtdGA0LvQsCDQo9C60YDQsNGX0L3QuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0L7QtNC70LXQstGB0YzQutCwINCa0LDRgNC40L3QsCwgMjcuMDcuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjYwMzY4NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvb1BVY3pXcEdUNElcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCULiDQptC40L/QvtC70ZYuINCk0LXQs9C10YLQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GA0L7QtNCw0L3Rh9GD0Log0KHQvtC90Y8sIDA5LjA0LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY2MzA0OTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1VPRG5YRU5KUDdnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JHRltC70LDRh9C10L3QutC+LiDCq9CU0L7RidC+0LLQuNC5INGA0LDQvdC+0LrCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GA0L7QtNCw0L3Rh9GD0Log0KHQvtC90Y8sIDA5LjA0LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY2NTY5ODJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3YzUnlJaWhuTTg0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0KfQtdGA0L3Rli4g0JXRgtGO0LQg4oSWMjEsINGC0LIuMjk5XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LDQs9C+0LfQsCDQmtCw0YDQuNC90LAsIDE1LjA3LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY2ODY1ODdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzJKRFA2WmI2U0U4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS4g0JvQvtC30LHRltC9LiDQmtC+0L3RhtC10YDRgtC90LjQuSDQstCw0LvRjNGBIMKr0J3QsNCx0LvQuNC20LXQvdC90Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQoNCw0LPQvtC30LAg0JrQsNGA0LjQvdCwLCAxNS4wNy4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2NzE3NDA2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9kR0hGb2lhZlJFd1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCR0ZbQu9Cw0YfQtdC90LrQviwg0KHQvtC90LDRgtC40L3QsCDRgNC1INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQvtC80LDQvdC+0LLQsCDQmtCw0YLQtdGA0LjQvdCwLCAxNC4wNy4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2NzQzNDExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9TQm5lbE9WMmlJa1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCo0LXQvdGC0Y7RgNC6ICjQotC10YDQtdGJ0YPQuikuINCV0LrRgdC/0YDQvtC80YJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQvtC80LDQvdC+0LLQsCDQmtCw0YLQtdGA0LjQvdCwLCAxNC4wNy4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2NzY2NTc1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9JQm9IUkI0NnBIUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCT0LXQtNGW0LrQtS4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRlNGA0LPRlNGU0LLQsCDQr9C90LAsIDI1LjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY4MDIwMTZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2dVZ3NYd1pVQ2hNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JLQvtC70YzRhC4gwqvQm9GW0YLQvdGW0Lkg0LLRltGC0LXRgNC10YbRjMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0ZTRgNCz0ZTRlNCy0LAg0K/QvdCwLCAyNS4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2ODMwOTA2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9Ba2hKWktJbEJpVVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCo0L/RltC90LTQu9C10YAuINCh0L7QvdCw0YLQuNC90LAg4oSWMSwg0IYg0YfQsNGB0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRltC70YzQutC+0LLRgdGM0LrQsCDQhNCy0LAsIDI4LjA3LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDY4NTQ1MzRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1RZd0xTcWQtYU9RXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQri4g0KnRg9GA0L7QstGB0YzQutC40LkuIMKr0KjQsNGA0LzQsNC90LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0ZbQu9GM0LrQvtCy0YHRjNC60LAg0ITQstCwLCAyOC4wNy4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ2ODgwMzczXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdkpQdklzRXZmcWdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQoNC10LLRg9GG0YzQutC40LkuINCf0ZbRgdC90Y8yLiDQmi4g0KfQtdGA0L3Rli4g0JXRgtGO0LQsINGC0LIuIDIxOSwg4oSWMTVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQutC+0YDQvtGF0L7QtNGM0LrQviDQhNCy0LPQtdC90ZbRjywgMjQuMDcuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NjkwNzI2NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1lhZ2UyS0ZFb0xzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0JvRltGB0YIuIMKr0K7QvdCw0YbRjNC60LjQuSDQtdGC0Y7QtMK7IOKEljFcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQhNCy0LPQtdC90ZbRjywgMDMuMDMuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0Njk0NDYyOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3dRWHRXTXk2U3J3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JvQsNGB0YLQvtCy0LXRhtGM0LrQuNC5LiDCq9CGINC30LDQtNC30LLQvtC90LjQu9C4INC00LfQstC+0L3QuCBcXHUyMDI2wrsgIOKEljUg0Lcg0YbQuNC60LvRgyDCqzEyINCg0LDRhtGW0L7QvdCw0LvRjNC90LjRhSDQtdGB0LrRltC30ZbQsiDQsiDQtNC+0LTQtdC60LDRhNC+0L3QvdGW0Lkg0YLQtdGF0L3RltGG0ZYg0LTQu9GPINGE0L7RgNGC0LXQv9GW0LDQvdC+wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQhNCy0LPQtdC90ZbRjywgMDMuMDMuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0Njk4MjA5MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvVHIyOEg2NlZlWWtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCWLi3QnC4g0JDRgNC90L4uIMKrUmVuZ2FpbmXCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodGD0YXQsNC9INCU0ZbQsNC90LAsIDA1LjEyLjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDcwMDU1NjlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3k3MFp3S19ZRGVrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQky4g0JrQu9Cw0YHRgdC10L0uIMKr0JLQsNC70YzRgdC40LrCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodGD0YXQsNC9INCU0ZbQsNC90LAsIDA1LjEyLjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDcwMzA3NzNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL29nN0hlRU92ZGd3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQky4g0JHQtdC3XFx1MjAxOdGP0LfQuNGH0L3QuNC5LiDCq9Ce0LksINGDINCy0LjRiNC90LXQstC+0LzRgyDRgdCw0LTRg8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0LDRgNCw0YHRjtC6INCE0LvQuNC30LDQstC10YLQsCwgMjAuMDIuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzA2NDUxNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvNURjaVJ3elNPTFlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCuLiDQktC10YHQvdGP0LouIMKr0JrQsNC30L7Rh9C60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotCw0YDQsNGB0Y7QuiDQhNC70LjQt9Cw0LLQtdGC0LAsIDIwLjAyLjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDcwODM2OTJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzNXR1dBNnF5MW5NXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0JLQvtC70LrQvtCyLiDCq9Cf0ZbQtCDQtNC+0YnQtdC8wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00L7RgNC+0LLQsCDQktGW0LrRgtC+0YDRltGPLCAwNy4wMS4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ3MTA0MTUxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9uc0M3eVBQcXFlTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIuINCl0LDRgdC70ZbQvdCz0LXRgC4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00L7RgNC+0LLQsCDQktGW0LrRgtC+0YDRltGPLCAwNy4wMS4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ3MTI2OTk5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9yREx4dk5fS1BEUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCR0YPRgNCz0LzRjtC70LvQtdGALiDCq9CS0LXRgdC90Y/QvdC40Lkg0LrQsNC/0ZbQtsK7OyAyLiDQri4g0KnRg9GA0L7QstGB0YzQutC40LkuINCi0LDQvdC10YbRjFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTRjtC6INCT0LvRltCxLCAwNS4wNy4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ3MTU0NzM2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9oTGU4R2cySF9MOFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JMuINCR0LXQt1xcdTIwMTnRj9C30LjRh9C90LjQuS4gwqvQoNGD0YHQsNC70L7QvdGM0LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCl0LLQvtGB0YLQvtCy0LAg0JLRltGA0LAsIDI3LjA0LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDcxNzg4MzVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2Z5ZHhKMUNBOE1BXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIyLiDQmy4g0IbQstCw0L3QtdC90LrQvi4gwqvQkdCw0LHRg9GB0Y8t0K/Qs9GD0YHRj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCl0LLQvtGB0YLQvtCy0LAg0JLRltGA0LAsIDI3LjA0LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDcyMTIyNTJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1lvTWZNYXRHa2h3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS4g0JPQsNC50LTQvS4g0KDQvtC90LTQviDQtNC+INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXQvtC80ZbQuiDQmtGW0YDQsCwgMTIuMDMuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzIzODk4OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvWWZKdV93c1dnNjhcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQkdGW0LvQsNGH0LXQvdC60L4uINCS0LDQu9GM0YFcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXQvtC80ZbQuiDQmtGW0YDQsCwgMTIuMDMuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzI1NjY0MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvbFV6MHpNaEJrQ01cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCTLtCkLiDQk9C10L3QtNC10LvRjC4g0KHQvtC90LDRgtC40L3QsCDRgdGWINCx0LXQvNC+0LvRjCDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCn0LXRgNC90Y/QuiDQnNCw0YDRltGPLCAyNi4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ3MjgyODc4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9OSi1SaVZvNVpha1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCb0LDQt9Cw0YDQtdC90LrQvi4g0JrQvtC70L7QvNC40LnQutC4XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCn0LXRgNC90Y/QuiDQnNCw0YDRltGPLCAyNi4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ3MzAyNTI0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9oSHhpa0ZiWnRGQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCo0L7Qv9C10L0uINCf0L7Qu9C+0L3QtdC3INGB0L7Qu9GMINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfQvtGA0L3QtdC5INCv0L3QsCwgMDkuMTAuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzMyNDYyNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvd2xQZVU5dW9CQnNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LjQvdCwINC80ZYg0LHQtdC80L7Qu9GMINC80LDQttC+XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCn0L7RgNC90LXQuSDQr9C90LAsIDA5LjEwLjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDczNDcwNjFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9XMFhjMjR4UWowSVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0Jku0KEuINCR0LDRhS4g0JTQstC+0LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDQu9GPINC80ZbQvdC+0YA7IDIuINCfLiDQl9Cw0YXQsNGA0L7QstCwLiDCq9CS0L/QtdGA0YjQtSDQvdCwINCw0YDQtdC90ZbCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQr9C60LjQvNC10L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgMjMuMTAuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzM3NjA3NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvQ0dMb2tPQnNneXdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCcLiDQm9C40YHQtdC90LrQvi4gwqvQodGD0LzQvdC40Lkg0YHQv9GW0LLCuzsgMi4g0JAuINCl0LDRh9Cw0YLRg9GA0Y/QvS4gwqvQnNGD0LfQuNGH0L3QsCDQutCw0YDRgtC40L3QsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCv0LzQv9C+0LvRjNGB0YzQutCwINCU0LDRgFxcdTIwMTnRjywgMTQuMDYuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0NzM5ODUwMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQveXpKRjEtWUlBczRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCkLiDQnNC10L3QtNC10LvRjNGB0L7QvS4gwqvQn9GW0YHQvdGPINCx0LXQtyDRgdC70ZbQssK7LCDRgtCyLjMwOyAyLiDQmy4g0JfQsNCx0LDRgNCwLiDQpNCw0L3RgtCw0LfRltGPINC90LAg0YLQtdC80YMg0YPQutGA0LDRl9C90YHRjNC60L7RlyDQvdCw0YDQvtC00L3QvtGXINC/0ZbRgdC90ZYgwqvQndGW0Ycg0Y/QutCwINC80ZbRgdGP0YfQvdCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JDQutGW0LzQvtCy0LAg0JrRltGA0LAsIDMxLjAxLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDgyMzM3MzNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3NwX3V0azdTZXhzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS4g0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwg0IYg0YfQsNGB0YLQuNC90LA7IDIuINCGLiDQqNCw0LzQvi4gwqvQktC10YHQvdGP0L3QutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQvtC60L7RhyDQkNGA0YLQtdC8LCAyMS4wOS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ4MjczODM0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9ySFNnMHFZRTRFb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0Jku0KEuINCR0LDRhS4g0JDQu9C10LzQsNC90LTQsCDQtyDQn9Cw0YDRgtC40YLQuCDQtNC+INC80ZbQvdC+0YA7IDIuINCkLiDQqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQvtGA0LXQudC60L4g0KDQvtC80LDQvSwgMTEuMDEuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0ODI5OTMxOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvcV9lQWc4MHhDOFVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLtChLiDQkdCw0YUuINCl0L7RgNCw0Lsg0Lcg0LrQsNC90YLQsNGC0Lgg4oSWMTQ3IMKrSmVzdXMgYmxlaWJldCBtZWluZSBGcmV1ZGXCuzsgMi4g0IYuINCo0LDQvNC+LiDQn9GA0LXQu9GO0LTRltGPIOKEljggwqtBbmRhbnRlLCBRdWFzaSBjYW1wYW5hwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQtdGA0LfRg9C9LdCg0L7Qu9GW0L3Qs9C10YAg0KLQtdGA0LXQt9CwLCAwOS4xMC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ4MzIwODg2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8xT1h5TFJRZnkxQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCo0ZbRgtGC0LUuINCV0YLRjtC0IOKEljIyLCDRgtCyLjY4XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LXRgNC80LDQvdGO0Log0KHQvtGE0ZbRjywgMjEuMTIuMjAwNyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0ODMzODUwNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvQ1J1Y3JVTVFjOVFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCj0LrRgNCw0ZfQvdGB0YzQutCwINC90LDRgNC+0LTQvdCwINC/0ZbRgdC90Y8g0LIg0L7QsdGA0L7QsdGG0ZYg0J4uINCh0LDRgNCw0YLRgdGM0LrQvtCz0L4gwqvQptCy0ZbRgtC1ICDRgtC10YDQtdC9wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQtdGA0LzQsNC90Y7QuiDQodC+0YTRltGPLCAyMS4xMi4yMDA3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ4MzY0MDc5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8tV0NDRzdwc0x1c1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KPQutGA0LDRl9C90YHRjNC60LAg0L3QsNGA0L7QtNC90LAg0L/RltGB0L3RjyDQsiDQvtCx0YDQvtCx0YbRliDQky4g0JHQtdC3XFx1MjAxOdGP0LfQuNGH0L3QvtCz0L4gwqvQntC5LCDRgyAgINCy0LjRiNC90LXQstC+0LzRgyDRgdCw0LTRg8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0L7QvNGW0LvQutC+INCQ0L3QsNGB0YLQsNGB0ZbRjywgMDguMDMuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0ODQyNzQ0M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvUEZ0cjdyd2d2cElcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQmtGD0LvQsNGDLCDQodC+0L3QsNGC0LjQvdCwIOKEljEsINGC0LIuMjBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQvtC80ZbQu9C60L4g0JDQvdCw0YHRgtCw0YHRltGPLCAwOC4wMy4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ4NDQ5MTE4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC84SEJWQnNUYkNoY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9ICDQvNGWINCx0LXQvNC+0LvRjCDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDQtdGB0YzQutC+INCc0LDRgNGW0Y8sIDIyLjA2LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDg0NjkwNzVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3B6d0xlSlhWZ25zXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JHRltC70LDRiC4gwqvQk9GD0YbRg9C70YzRgdGM0LrQsCDQv9C40YHQsNC90LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDQtdGB0YzQutC+INCc0LDRgNGW0Y8sIDIyLjA2LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDg1OTE2NTNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2VrdG5Dbkw2eUdVXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JzQvtGI0LrQvtCy0YHRjNC60LjQuS4g0JXRgtGO0LQg4oSWNiwg0YLQsi4gNzJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNC40L3QuNC6INCU0ZbQsNC90LAsIDE5LjAuMjAwNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0ODYyMzQ4MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQva0ZDV1hfbVZ0UTRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQmtC+0LfQsNGA0LXQvdC60L4uINCS0LDQu9GM0YFcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNC40L3QuNC6INCU0ZbQsNC90LAsIDE5LjAuMjAwNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0ODY5NzcxMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvSktxR0xWSkJzTGtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCULiDQqdC40YDQuNGG0Y8uIMKr0KPQutGA0LDRl9C90YHRjNC60LjQuSDQtdGC0Y7QtMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDRg9GI0LrQvtCy0YHRjNC60LAg0JLQsNC70LXRgNGW0Y8sIDE3LjAxLjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDg4MTYxMDNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0dPaFBhX0FHeHVvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0IbQstCw0L3QtdC90LrQvi4gwqvQldC5INCb0Y7Qu9GWINC20LUg0LzRliwg0LvRjtC70Y7Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0YPRiNC60L7QstGB0YzQutCwINCS0LDQu9C10YDRltGPLCAxNy4wMS4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ4ODY1Mzk2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9OYTFBcW9nR1pXY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0Jku0KEuINCR0LDRhS4g0KLRgNC40LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDRgNC1INC80ZbQvdC+0YA7IDIuINCGLiDQqNCw0LzQvi4gwqvQktC10YHQvdGP0L3QutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRltC00LXQvdC60L4g0JTQsNGAXFx1MjAxOdGPLCAyMC4wNS4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ4OTQ0NTE4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9OTWw1bUNZZXMwOFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCR0YDQuNC70ZbQvS4g0KLQvtC60LDRgtCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0YPQtNC40Ycg0J7Qu9GM0LPQsCwgMTQuMTAuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTAxNDg0NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTXUtcEJZZHRvWFlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQnNC10L3QtNC10LvRjNGB0L7QvS4gwqvQn9GW0YHQvdGPINCx0LXQtyDRgdC70ZbQssK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0YPQtNC40Ycg0J7Qu9GM0LPQsCwgMTQuMTAuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTA0ODI2MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvamZycmYwLXV6UWdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQlNGO0LHRjtC6LiDCq9CU0LfQuNKR0LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQhNGA0L7RiNC60ZbQvdCwINCQ0L3QvdCwLCAwOC4xMS4yMDA40YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDk0ODg0MjhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzM2dFBfcUxFWmtRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0JvRltGB0YIuIMKr0JLRgtGW0YXQsMK7IOKEljJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0ITRgNC+0YjQutGW0L3QsCDQkNC90L3QsCwgMDguMTEuMjAwONGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5NTIwNzIwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8yU3BrSUNkNHdHZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCR0L7RgNC00Y7Qs9C+0LLQsC4gwqvQo9C60YDQsNGX0L3RgdGM0LrQuNC5INGA0L7QvNCw0L3RgcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCW0LDRgNGW0Lkg0KHQvtGE0ZbRjywgMTguMDguMjAwOdGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5NTM3ODY3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9NUTA4aHZWR0ZBd1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCa0L7Qu9C10YHRgdCwLiDQmtC+0LvQvtC80LjQudC60LAg0YTQsCDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCW0LDRgNGW0Lkg0KHQvtGE0ZbRjywgMTguMDguMjAwOdGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5NTc0NDExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8yUy0ySUdhSWxUTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KUuINCQ0LvRjNGE0LLQtdC9LiDCq9Ch0L7QvdGP0YfQvdGWINC30LDQudGH0LjQutC4wrsg0Lcg0YbQuNC60LvRgyDCq9Ca0LDRgNGC0LjQvdC60Lgg0KjRhdC10YDCuyzRgtCyLjE3IOKEljFcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNC90YHRjNC60LAg0JDQvdCw0YHRgtCw0YHRltGPLCAyMy4wNy4yMDA50YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDk1OTQ2MTVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0xHNGEyb3VFNHo0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQry4g0JHQvtCx0LDQu9GW0LouIMKr0JHRg9GA0YXQu9C40LLQuNC5INCy0L7QtNC+0YHQv9Cw0LTCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0L3RgdGM0LrQsCDQkNC90LDRgdGC0LDRgdGW0Y8sIDIzLjA3LjIwMDnRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTYxMTA0NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvWUtlS2tEUExqeVFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCTLiDQm9GW0YXQvdC10YAuINCg0L7QvdC00L4gwqvQktC00L7QvNCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNGC0L7Qu9C40Log0JTQsNGA0LjQvdCwLCAwMS4wOS4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5NjMxNTU4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC82M0ZMR2FZeFNIQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCc0LDQudGU0YAuIMKr0IbQvdC00ZbQsNC90YHRjNC60LAg0YHQtdGA0LXQvdCw0LTQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDRgtC+0LvQuNC6INCU0LDRgNC40L3QsCwgMDEuMDkuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTY1NzQxOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvY0R5bnpYLU9QWWtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLiDQp9C10YDQvdC10YbRjNC60LjQuSwg0LDRgNCw0L3Qti4g0J4uINCo0LDQstCw0YDQtNCw0LrQsC7Cuy4g0J7QuSwg0YMg0LvRg9C30ZYg0YfQtdGA0LLQvtC90LAg0LrQsNC70LjQvdCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRltGB0LDRgNC10YbRjCDQhtCy0LDQvSwgMjQuMDQuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTY4MjE4NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZnRGdkxYVFgyOVVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQlNCy0L7RgNC20LDQui4gwqvQlNC20LDQt9C+0LLQuNC5INC10YLRjtC0wrsg4oSWMSDQtNC+INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRltGB0LDRgNC10YbRjCDQhtCy0LDQvSwgMjQuMDQuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTcwMTM1NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTkhUQnYxakdCY1lcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLiDQmtC+0YDQtdC70LvRli4g0KHQsNGA0LDQsdCw0L3QtNCwINC80ZYg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGW0YfRg9C6INCg0L7QvNCw0L0sIDI5LjEwLjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDk3MTg2ODZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2FaT1RXTjdMMGowXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0JzQvtGF0L3QsNGH0LXQstCwLiDCq9Cb0ZbRgtC90ZbQuSDQstC10YfRltGAwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRltGH0YPQuiDQoNC+0LzQsNC9LCAyOS4xMC4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODQ5NzQwNTYxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8wQVVOSHQ1Mi0zVVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KEuINCW0LTQsNC90L7Qsi4g0J/RgNC10LvRjtC0OyAyLiDQkC4g0JHQsNCx0LDQtNC20LDQvdGP0L0uIMKr0JLQsNCz0LDRgNGI0LDQv9Cw0YLRgdGM0LrQuNC5INGC0LDQvdC10YbRjMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LvRltC80L7QstC40Ycg0JTQsNCy0LjQtCwgMDkuMDcuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTc3ODM0OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvUUhkclFrelVUelVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQqNC10L3RgtGO0YDQuiAo0KLQtdGA0LXRidGD0LopLiDQoNCw0L/RgdC+0LTRltGPIMKr0JTQviDRgdCy0ZbRgtC70LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0L/QuNGH0LXQvdGB0YzQutCwINCU0LDRgFxcdTIwMTnRjywgMzAuMDQuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTgwMTIzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTk1xeDJvVV92ZnNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQqNC10L3RgtGO0LogKNCi0LXRgNC10YnRg9C6KS4gwqvQodC70YzQvtC30LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0L/QuNGH0LXQvdGB0YzQutCwINCU0LDRgFxcdTIwMTnRjywgMzAuMDQuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTgxODc5OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvLWozeEQweTloaVlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLtChLiDQkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0LTQviDQvNGW0L3QvtGALCDQlNCi0Jot0IY7IDIuINCkLiDQqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRgNCw0LLRh9GD0Log0JzQsNGA0ZbRjywgMTQuMDYuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg0OTg2NTU2OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvUVg5MzZZWmU3Sk1cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQkdGW0LvQsNGILiDCq9CT0YPRhtGD0LvRjNGB0YzQutCwINC/0LjRgdCw0L3QutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRgNGD0YLQtdC90LrQviDQlNCw0YDQuNC90LAsIDEwLjExLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDk4OTc5OTdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0ZtRGtWdlVNUnlNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi4g0JDRhNCw0L3QsNGB0LXQvdC60L4uIMKr0JvQtdCx0ZbQtNGMwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRgNGD0YLQtdC90LrQviDQlNCw0YDQuNC90LAsIDEwLjExLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NDk5MjE0NzBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3BNMTUwcWRCQU1nXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0KjQsNC80L4uIMKr0JLQtdGB0L3Rj9C90LjQuSDQtNC+0YnCuyDRltC3INGG0LjQutC70YMgwqvQk9GD0YbRg9C70YzRgdGM0LrRliDQsNC60LLQsNGA0LXQu9GWwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQtdCy0YfRg9C6INCi0LjQvNC+0YTRltC5LCAxOS4xMS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwMDUzNzQ5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9kX3BmZ2JjbzM1SVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCR0LXRgNC60L7QstC40YcuINCf0YDQtdC70Y7QtNGW0Y8g0LzRliDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCb0LXQstGH0YPQuiDQotC40LzQvtGE0ZbQuSwgMTkuMTEuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDEwODI1MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvNTlHV1Y1X3ItcXdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCTLiDQk9C10L3QtNC10LvRjC3Qri4g0KXQsNC70YzQstC+0YDRgdC10L0uINCf0LDRgdCw0LrQsNC70ZbRjyDQu9GPINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNCz0LTQuNGB0Y7QuiDQktGW0LrRgtC+0YDRltGPLCAyMy4xMC4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwMTM5ODEwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9mcG1hSFpnNDZEZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCU0YDQtdC80LvRjtCz0LAuIMKr0JvRltGA0LjRh9C90LAg0L/RltGB0L3Rj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDQs9C00LjRgdGO0Log0JLRltC60YLQvtGA0ZbRjywgMjMuMTAuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDE1NzExMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvU29fNnExbXZsY2NcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCbLiDQqNGD0LrQsNC50LvQvi4gwqvQotC+0LrQsNGC0LAt0JrQsNC80L/QsNC90LDCuzsgMi4g0KQuINCo0L7Qv9C10L0uIMKr0KTQsNC90YLQsNC30ZbRjy3QtdC60YHQv9GA0L7QvNGCwrsg0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDQu9GP0YDRh9GD0Log0ITQu9GW0LfQsNCy0LXRgtCwLCAyNC4wOC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwMTc3MzQ2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC90Y0RWbW4tQTBjc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JkuINCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDQvNGWINC80ZbQvdC+0YAsINCGINGH0LDRgdGC0LjQvdCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDRgNGC0LjQvdC40YjQuNC9INCS0LvQsNC00LjRgdC70LDQsiwgMDguMDYuMjAwNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDIyNTk1NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvSG5EcURmaHZZVGdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQm9C40YEuIMKr0JvQtdCz0LXQvdC00LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0YDRgtC40L3QuNGI0LjQvSDQktC70LDQtNC40YHQu9Cw0LIsIDA4LjA2LjIwMDYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTAyNjMyMDhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL21mbzhYNURRZE00XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS4g0JHQvtGA0YLQutC10LLQuNGHLiDQldGC0Y7QtCwg0YLQsi4xNSDihJY5XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDRhdC90ZbRhtGM0LrQsCDQktC70LDQtNC40YHQu9Cw0LLQsCwgMDMuMTEuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDMzMDI4NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvX21IYnhZalhWdW9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCdLiDQndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4g0JLQsNC70YzRgSDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNGF0L3RltGG0YzQutCwINCS0LvQsNC00LjRgdC70LDQstCwLCAwMy4xMS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwMzU1ODI1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9EWUF5UERqZUREb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JkuINChLiDQkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YDQtSDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LXRidC10YDRj9C60L7QsiDQmtC+0YHRgtGP0L3RgtC40L0sIDA4LjA4LjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTAzNzU0MTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzFCSkFyQ3YzOV9BXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS4g0JHQvtGA0YLQutC10LLQuNGHLiDCq9Cf0YDQvtCz0YPQu9GP0L3QutCwINCQ0LvRg9C/0LrQvtGOLdCh0YXRltC00L3QsCDRltC00LjQu9GW0Y/CuyDQtyDRhtC40LrQu9GDIMKr0JrRgNC40LzRgdGM0LrRliDQtdGB0LrRltC30LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC10YnQtdGA0Y/QutC+0LIg0JrQvtGB0YLRj9C90YLQuNC9LCAwOC4wOC4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNDExODY4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC85eC15TDJuTFRhY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCo0L7Qv9C10L0uINCS0LDQu9GM0YEsINGC0LIuIDY5IOKEljI7IDIuINCcLiDQm9C40YHQtdC90LrQvi4g0JXQutGB0L/RgNC+0LzRglwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNGW0YHQtdGA0YPQuiDQnNCw0YDRltCw0L3QvdCwLCAxOS4wOC4yMDA3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNDMwNjEwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9NZDh0eVFFUDNJZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JsuINCg0LXQstGD0YbRjNC60LjQuS4g0J/RltGB0L3RjzsgMi4g0IYuINCc0L7RhdC90LDRh9C+0LLQsC4g0JXRgtGO0LQt0LrQsNGA0YLQuNC90LAgwqvQnNC+0YDQtcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0L7RhSDQndCw0LTRltGPLCAwMS4xMC4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNDQ3NjQ2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9STzR4S2Z0enJ4OFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JkuINCT0LDQudC00L0uIMKr0KPQs9C+0YDRgdGM0LrQtSDRgNC+0L3QtNC+wrsg0LcgwqvQpNC+0YDRgtC10L/RltCw0L3QvdC+0LPQviDRgtGA0ZbQvsK7INGB0L7Qu9GMINC80LDQttC+0YA7IDIuINCGLiDQkdC10YDQutC+0LLQuNGHLiDQn9GA0LXQu9GO0LQg0YTQsCDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0L/QsNC90LDRgdGO0Log0JrQsNGA0L7Qu9GW0L3QsCwgMDUuMDcuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDQ4MzI4OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvYTl3SzhNeFg5ek1cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCkLiDQqNC+0L/QtdC9LiDQpNCw0L3RgtCw0LfRltGPLdC10LrRgdC/0YDQvtC80YIg0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAOyAyLiDQkC4g0KXQsNGH0LDRgtGD0YDRj9C9LiDQotC+0LrQsNGC0LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0L3QsNGB0Y7QuiDQotCw0YDQsNGBLCAxMy4xMC4yMDA3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNTIxODk1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9wSlNheVlYSlF6NFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K4uINCp0YPRgNC+0LLRgdGM0LrQuNC5LiDCq9Ce0YHRltC90L3RjyDQv9GW0YHQvdGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0YDRj9C6INCG0YDQuNC90LAsIDMwLjA0LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA1NDEwMTVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2RET3A4TTdiRGFrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQky4g0JPQtdC90LTQtdC70YwuINCa0LDQv9GA0LjRh9GW0L5cIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0YDRj9C6INCG0YDQuNC90LAsIDMwLjA0LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA1NTc0NDBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL193bk01NjV2V2I4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQly4g0KTRltCx0ZbRhS4g0J/QvtC10LzQsDsgMi7Qmi4g0JTQtdCx0Y7RgdGB0ZYuIMKr0JvRj9C70YzQutC+0LLQuNC5INC60LXQui3Rg9C+0LrCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntGB0YLQsNC/0LXQvdC60L4g0JDQvdC90LAsIDI2LjA4LjIwMDkg0YAu0L0uICgyLdC40Lkg0YDRltC6INC90LDQstGH0LDQvdC90Y8pXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA1NzM5NzFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3RJQkhaTVZiNk9vXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0KfQtdGA0L3Rli4g0JXRgtGO0LQg4oSWMTUsINGC0LIuMjk5XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDQvdGH0LXQvdC60L4g0KHQvtGE0ZbRjywgMDguMC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNjE0MzQzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9tR1B0VVVkcjRRb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCo0LDQvNC+LiDCq9CT0YPQvNC+0YDQtdGB0LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDQvdGH0LXQvdC60L4g0KHQvtGE0ZbRjywgMDguMC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNjM2NjA0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9xZmM4dGY2bk0xWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCf0YDQsNGG0Y7Qui4gwqvQndCw0LLQtdGB0L3RlsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LvQtdGI0LrQviDQhtCz0L3QsNGC0ZbQuSwgMjMuMTAuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDY0OTM3OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvRVRsQ1ZKWjVzOVFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQm9GW0YHRgi4gwqvQktGC0ZbRhdCwwrsg4oSWMlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C70LXRiNC60L4g0IbQs9C90LDRgtGW0LksIDIzLjEwLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA2NjQxMTFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLy1WM3QyZm1TdmZRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINC80ZYg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQoNCw0LTQutC+0LLRgdGM0LrQsCDQkNC70ZbQvdCwLCAzMC4wNy4yMDE3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNjc5NjIxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9DXzZBeG56Mk9NQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUuINCT0YDRltCzLiDCq9CG0LzQv9GA0L7QstGW0LfQsNGG0ZbRj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LDQtNC60L7QstGB0YzQutCwINCQ0LvRltC90LAsIDMwLjA3LjIwMTcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA3MDUxODBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0Q1eEJINVR1aDNRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0K/QutC40LzQtdC90LrQvi4gwqvQnNGA0ZbRlyDQvdCwINCx0LXRgNC10LfRliDQvNC+0YDRj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LXQtNGM0LrQsCDQn9C+0LvRltC90LAsMTYuMTIuMjAwOdGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNzIzMDUwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9nd0lXYkxYQzY3a1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JMuINCR0LXQt1xcdTIwMTnRj9C30LjRh9C90LjQuS4g0JXRgtGO0LQg4oSWMTcgwqvQkdGD0YDQtdCy0ZbRgdC90LjQusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LXQtNGM0LrQsCDQn9C+0LvRltC90LAsMTYuMTIuMjAwOdGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNzQ2MTAyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC82Y1M2aG5SOHJLZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCa0YPQu9Cw0YMuINCh0L7QvdCw0YLQuNC90LAg4oSWMSwg0YLQsi42MDsgMi4g0JouINCS0ZbQui4g0J/QvtC70L7QvdC10LdcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQvtCx0YPQu9GP0Log0JzQuNC60L7Qu9CwLDA0LjA1LjIwMTDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDc2Njc4MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvUEk5OEdWZDlnS3NcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuINCU0LLQvtCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g4oSWOCwg0YTQsCDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0YPQv9CwINCQ0LvRjNCx0LXRgNGCLCAzMS4wNS4yMDA3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwNzk2MzkyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC92SFpRQjl1S3dGc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCd0LXQttC40LPQsNC5LiDCq9Cf0YDQvtGF0LDQvdC90Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQoNGD0L/QsCDQkNC70YzQsdC10YDRgiwgMzEuMDUuMjAwNyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDgxMzQ2MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2lyWTRkYmJLZEE4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KHQutC+0YDQuNC6LiDCq9Cc0LXQu9C+0LTRltGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNCy0YDQsNC5INCa0LDRgtC10YDQuNC90LAsIDA0LjA3LjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDgzMDgxOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0pqb1p3Z1dVeUdNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0JHQtdGA0LrQvtCy0LjRhy4g0KLQvtC60LDRgtCwINC70Y8g0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LLRgNCw0Lkg0JrQsNGC0LXRgNC40L3QsCwgMDQuMDcuMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwODMwODExOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvWXY5WXZzMGZkM0VcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCaLiDQm9Cw0LLQsNC70LvQtS4g0JrQvtC90YbQtdGA0YLQvdC40Lkg0LXRgtGO0LQgwqvQnNC10YLQtdC70LjQusK7OyAyLiDQhi4g0JHQtdGA0LrQvtCy0LjRhy4g0KLQvtC60LDRgtCwINC70Y8g0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodC70L7QsdC+0LTRj9C90Y7QuiDQnNCw0YDQs9Cw0YDQuNGC0LAsIDIyLjA5LjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA4NDQyNzlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3hSTWtMV0JiVmNBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JzQvtGG0LDRgNGCLiDQodC+0L3QsNGC0LAg0YHRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwg0IYg0YfQsNGB0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQutCw0YfQtdC90LrQviDQkNC80ZbQvdCwLCAwMy4wMy4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwODYzMjE1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC94TnI0cW1ORkF2b1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8uINCX0LDRhdCw0YDQvtCyLiDQotC+0LrQsNGC0LAt0L/RgNC10LvRjtC00ZbRj1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotC60LDRh9C10L3QutC+INCQ0LzRltC90LAsIDAzLjAzLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTA4NzY4ODNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2dGRTFGMUh5N0dRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QkS4g0JLQsNC90YXQsNC70YwuIEFsbGVncm8g0ZbQtyDQodC+0L3QsNGC0LjQvdC4INC70Y8g0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotGA0L7RhtC10L3QutC+INCQ0L3QvdCwLCAxMi4wNi4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwODkwNzUwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9FemJiQVJrc1hsRVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCa0L7QvNC70ZbQutC+0LLQsC4gwqvQnNCw0YjQuNC90LAg0YfQsNGB0YPCuyAo0IbQvdCy0LXQvdGG0ZbRjyDQtyDRhtC40LrQu9GDIMKr0IbQvdGC0LXRgNCy0LDQu9GW0Y/CuylcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLRgNC+0YbQtdC90LrQviDQkNC90L3QsCwgMTIuMDYuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDkwNDU0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvQmtvTGV0SlNNSmdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LjQvdCwINGE0LAg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotGD0YDRh9C40Log0KHQvtGE0ZbRjywgMTguMDUuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDkyMjgzMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvMDVVbFdLaFR0NThcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQk9GA0ZbQsy4g0JLQsNC70YzRgVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotGD0YDRh9C40Log0KHQvtGE0ZbRjywgMTguMDUuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDk0NjEwMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQveU5vdno2VUhUWTBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQktC10YDQvNC10L3QuNGHLCDQvtCx0YDQvtCx0LrQsCDQky4g0JHQtdC3XFx1MjAxOdGP0LfQuNGH0L3QvtCz0L4uIMKr0KfQvtGA0L3QvtCx0YDQuNCy0YbRlsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0YDQtdC90LrQviDQhNC70LjQt9Cw0LLQtdGC0LAsIDAuMDkuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MDk1OTE1NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvbElxdEZ0bXFYZ3dcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwIOKEljMsINGB0L7Qu9GMINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00L7RgNC10L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgMC4wOS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUwOTcyNDgxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9CZnRrSmF5eFVXVVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JsuINCh0YPRhdC+0YnQtdGU0LLQsC4g0JXRgtGO0LQ7IDIuINCeLiDQmtC40LzQu9C40LouIMKr0JzRltC90ZbQsNGC0Y7RgNC90LAg0JvQtdC+0L3RgtC+0LLRltCw0L3QsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCn0LzQtdC70Y7QuiDQkNC90L3QsCwyMi4wNS4yMDA50YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTEwMTk5NzFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzFUS0NncldBandBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINGB0L7Qu9GMINC80ZbQvdC+0YAg0Lcg0JTQotCaLdCGXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LXQstGH0YPQuiDQndGW0LrQvtC70LXRgtGC0LAsIDI2LjA0LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE0MTYzNzZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC93Z2Nfa0xJSWk2Z1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4g0JXRgtGO0LQg0YTQsCDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LXQstGH0YPQuiDQndGW0LrQvtC70LXRgtGC0LAsIDI2LjA0LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE0MzkxMDlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzI3TVJKc1pVdWZBXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINGB0L7Qu9GMINC80ZbQvdC+0YAg0Lcg0JTQotCaLdCGXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCv0L3Rh9GD0Log0JLQsNC70LXRgNGW0Y8sIDEwLjA2LjIwMDcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE0NTA4ODBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3RyRlBBMUp4eGFzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS4g0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwg0IYg0YfQsNGB0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0K/QvdGH0YPQuiDQktCw0LvQtdGA0ZbRjywgMTAuMDYuMjAwNyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTQ2NzY3OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQveGJKdHhlMlM2MDBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQk9GA0ZbQsy4gwqvQodC10YDRhtC1INC/0L7QtdGC0LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGW0LvQsCDQmtGB0LXQvdGW0Y8sIDE1LjAxLjIwMDUg0YAu0L1cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTQ3Nzk0NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvME5feFYzVTVHODBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLiDQmtGA0LDQvNC10YAuINCV0YLRjtC0IOKEljUsINC70Y8g0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGW0LvQsCDQmtGB0LXQvdGW0Y8sIDE1LjAxLjIwMDUg0YAu0L1cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTQ5MTk4MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvZ2NMNUliWGl4U0VcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCkLiDQqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDihJYyLCDRgtCyLiA5OyAyLiDQkC4g0KjRgtC+0LPQsNGA0LXQvdC60L4uINCf0L7QtdC80LAgKNC/0YDQuNGB0LLRj9GH0YPRlNGC0YzRgdGPINCcLtCiLiDQmtC+0LvRj9C00ZYpXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0L7QvdC00LDRgNC10L3QutC+INCU0LXQvdC40YEsIDI4LjAxLjIwMDYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE1MDQ5NDJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3dZOVdEaWhfbnZjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JvQuNGB0LXQvdC60L4uIMKr0J/RltGB0L3RjyDQsdC10Lcg0YHQu9GW0LLCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0YDQvtC90YbQvtCy0LAg0JTRltCw0L3QsCwgMjUuMDIuMjAwNSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTU4NDU4OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvRFh2d3NPQmFtSmNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQnNC10L3QtNC10LvRjNGB0L7QvS4gwqvQpNCw0L3RgtCw0LfRltGPLdC60LDQv9GA0LjRgcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7RgNC+0L3RhtC+0LLQsCDQlNGW0LDQvdCwLCAyNS4wMi4yMDA1INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNjEyNDQ2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9wRTdQOU0xaVhSb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JEuINCb0Y/RgtC+0YjQuNC90YHRjNC60LjQuS4g0J/RgNC10LvRjtC00ZbRjyDRgtCyLjQ0IOKEljQ7IDIuINCkLtCb0ZbRgdGCLsKr0JbQtdC90LXQstGB0YzQutGWINC00LfQstC+0L3QuMK7INC3INGG0LjQutC70YMgwqvQoNC+0LrQuCDQvNCw0L3QtNGA0ZbQstC+0LouINCo0LLQtdC50YbQsNGA0ZbRj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDRg9GI0LrQviDQkNC90LDRgdGC0LDRgdGW0Y8sIDE4LjAxLjIwMDZcIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTYyODI3OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvSkhxYWpwNVlQcWdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCaLiDQlNC10LHRjtGB0YHRli4g0JDRgNCw0LHQtdGB0LrQsCDihJYyOyAyLiDQoS4g0JHQvtGA0YLQutC10LLQuNGHLiDQldGC0Y7QtCDihJYyLCDRgtCyLjE1XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPQu9GC0YPRgNGP0L0g0J/QvtC70ZbQvdCwLCAxMS4xMC4yMDA2INGALtC9XCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE2NDEzMTRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIC8vIDxpZnJhbWUgd2lkdGg9XCI0NjlcIiBoZWlnaHQ9XCIyNjRcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9VRWlXY0ZSY1BSd1wiIHRpdGxlPVwi0JwuINCa0L7Qu9C10YHRgdCwICZxdW90O9Ci0YDQuCDQutC+0LvQvtC80LjQudC60LgmcXVvdDsuXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9VRWlXY0ZSY1BSd1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCa0L7Qu9C10YHRgdCwLiDCq9Ci0YDQuCDQutC+0LvQvtC80LjQudC60LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQlNCw0YjQtdCy0YHRjNC60LAg0JDQu9GM0L7QvdCwLCAwNC4wNC4yMDA1INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNjUxMDc2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9MWE83N2NxckNZd1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JIuINCa0L7RgdC10L3QutC+LiDQldGC0Y7QtCDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YAsINGC0LIuODsgMi4g0KAuINCo0YPQvNCw0L0uIMKr0J/QvtGA0LjQssK7INGW0Lcg0YbQuNC60LvRgyDCq9Ck0LDQvdGC0LDRgdGC0LjRh9C90ZYg0L9cXHUyMDE50ZTRgdC4wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JbQtdC70Y/Qt9C60L4g0KHQvtGE0ZbRjywgMzAuMDkuMjAwNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTY2ODM3M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQva0NVeGotOVJFM2dcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQqNC+0L/QtdC9LiDQn9C+0LvQvtC90LXQtyDihJYxLCDRgtCyLjQwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCd0LDQt9Cw0YDRg9C6INCG0YDQuNC90LAsIDMwLjA0LjIwMDQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE2Nzc4MDdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1JqMFR3ZDdOY3c0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JrQvtC70LXRgdGB0LAuIMKr0JrQvtC90YLRgNCw0YHRgtC4wrsg0Lcg0YbQuNC60LvRgyDCq9Ca0LDRgNGC0LjQvdC4INCT0YPRhtGD0LvRjNGJ0LjQvdC4wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J3QsNC30LDRgNGD0Log0IbRgNC40L3QsCwgMzAuMDQuMjAwNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTY5MTY4NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvTm1XTlZzOFFLd0FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCkLiDQqNC+0L/QtdC9LiDQn9C+0LvQvtC90LXQtywg0YLQsi40MCDihJYyOyAyLiDQpC4g0KjQvtC/0LXQvS4g0JrQvtC70LjRgdC60L7QstCwLCDRgtCyLjU3XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0YfQutGD0YDQtdC90LrQviDQkNC90LbQtdC70ZbQutCwLCAwMi4xMC4yMDA0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNzA0MDAyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9ZZlU2R2FSZFAyQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCo0L7Qv9C10L0uINCf0L7Qu9C+0L3QtdC3INGB0L7Qu9GMINC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNGB0YLRg9GI0L7QuiDQlNCw0YDQuNC90LAsIDA3LjAyLjIwMDcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE3MjAxODFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL193QjBnSV9zTnlZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JHQsNGA0LLRltC90YHRjNC60LjQuS4g0J/RgNC10LvRjtC00ZbRjyDRhNCwINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNGB0YLRg9GI0L7QuiDQlNCw0YDQuNC90LAsIDA3LjAyLjIwMDcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE3MzEwMzhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL1dLcjZZWUM3clF3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQkC4g0JrQvtC70L7QvNGW0ZTRhtGMLiDQldGC0Y7QtC3QtdC60YHQv9GA0L7QvNGCINC70Y8g0LHQtdC80L7Qu9GMINC80LDQttC+0YAsINGC0LIuMjsgMi4g0KQuINCo0L7Qv9C10L0uINCf0L7Qu9C+0L3QtdC3IOKEljEsINGC0LIuIDI2XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0L7QsdC60L4g0JDQvdC90LAt0JTQsNGA0LjQvdCwLCAyMi4xMi4yMDAzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNzQzOTQyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9wNlJLQWl3NXhEc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JUuINCT0YDRltCzLiDCq9CXINGO0L3QuNGFINC00L3RltCywrssINGC0LIuNjU7IDIuINCkLiDQqNGD0LHQtdGA0YIuINCV0LrRgdC/0YDQvtC80YIg4oSWMiwg0YLQsi45MFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotC40LzRh9GD0Log0JDQvdGPLCAwNy4wOC4yMDA2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxNzYyMzA0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9rS1lqZWhNY3gwRVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KAuINCo0YPQvNCw0L0uIMKr0JLRltC00LXQvdGB0YzQutC40Lkg0LrQsNGA0L3QsNCy0LDQu8K7LCDRgtCyLjI2OiDQhi4gQWxsZWdybzsgMi4g0K4uINCG0YnQtdC90LrQvi4g0J/RgNC10LvRjtC00ZbRjyDihJYxNCDQvNGWINCx0LXQvNC+0LvRjCDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0YPRgNGB0YzQutCwINCc0LDRgNGW0Y8sIDExLjA0LjIwMDUg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE3ODIxNDRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzJETzlvXzNPSHdFXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQoC4g0KjRg9C80LDQvS4g0J3QvtCy0LXQu9C10YLRgtCwIOKEljEsINGC0LIuMjE7IDIuINChLiDQqNCw0LzRltC90LDQtC4g0JrRgNC10L7Qu9GM0YHRjNC60LjQuSDRgtCw0L3QtdGG0YwsINGC0LIuOTRcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTRltC70ZbQvNC+0L3Rh9GD0Log0JXRgNC90LXRgdGCLCAyMC4wMi4yMDA1INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxODA1NDQ4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9uWUlERnFVbHowSVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JsuINCg0LXQstGD0YbRjNC60LjQuS4g0J/RgNC10LvRjtC00ZbRjyDRgdGWINCx0LXQvNC+0LvRjCDQvNGW0L3QvtGAOyAyLiDQmi4g0JTQtdCx0Y7RgdGB0ZYuINCU0LLRliDQsNGA0LDQsdC10YHQutC4XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCl0YDQuNC/0LrQviDQhNC70LjQt9Cw0LLQtdGC0LAsIDE5LjA3LjIwMDYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE4Mjc5NDhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0MyMlNMZ1dBRGVjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQlS4g0JPRgNGW0LMuINCG0LzQv9GA0L7QstGW0LfQsNGG0ZbRjyDQvdCwINC00LLRliDQvdC+0YDQstC10LfRjNC60ZYg0L3QsNGA0L7QtNC90ZYg0L/RltGB0L3Rliwg0YLQsi4yOTsgMi4g0JouINCU0LXRjtGB0YHRli4g0JXRgtGO0LQg4oSWMTFcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQvtC00L3QsNGA0YfRg9C6INCG0LLQsNC90L3QsCwgMTkuMDEuMjAwNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTg0NDM0N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQva3V3Rk5iODN3R01cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCv0L0g0KHRltCx0LXQu9GW0YPRgS4g0JXRgtGO0LQg0LvRjyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LXQvSDQkNC5LCAyNi4wMS4xOTk3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxODYwNTcwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC85WFFJcHppdG05RVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjyDihJYzLCDRgtCyLjNcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTQtdC9INCQ0LksIDI2LjAxLjE5OTcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE4NzMzNzVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLzB6VUFfMmlrMlVrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmy4g0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtCwIOKEljI0LCDRgtCyLiA3ODsgMi4g0JwuINCb0LjRgdC10L3QutC+LiDQoNCw0L/RgdC+0LTRltGPINC90LAg0YPQutGA0LDRl9C90YHRjNC60ZYg0YLQtdC80LggwqvQlNGD0LzQutCwLdGI0YPQvNC60LDCuywg0YLQsi4xOCDihJYyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YPRh9C10YDRj9Cy0LAg0JzQsNGA0LjQvdCwLCAxNy4wOC4yMDAwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxODg4NTExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC90c3FSZV9ZTmlSa1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JwuINCh0LrQvtGA0LjQui4g0JDRgNGW0Y8g0Lcg0J/QsNGA0YLQuNGC0Lgg4oSWNTsgMi4g0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4g0JXRgtGO0LQsINGC0LIuMTUg4oSWOVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0YLQstGW0LnRh9GD0Log0IbRgNC40L3QsCwgMjcuMDUuMjAwMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTkwMTkzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvUXc4SHd0UVl2SkFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQkdGA0LDQvNGBLiDQoNCw0L/RgdC+0LTRltGPIOKEljIsINGC0LIuNzlcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RgNC40YHQsNC60LDRgNGDINCd0LDQtNGW0Y8sIDE0LjAyLjIwMDIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE5MTU3ODBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL2RPQVFLbl9ZQkFjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JrQvtGB0LXQvdC60L4uINCV0YLRjtC0INGE0LAg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GA0LjRgdCw0LrQsNGA0YMg0J3QsNC00ZbRjywgMTQuMDIuMjAwMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTkzMTk1MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvT3BwdlFITm1hQWNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQqNGD0LHQtdGA0YIuINCa0LvQsNCy0ZbRgNGI0YLRjtC6LCBEIDk0NiDihJYxIEFsbGVncm8gYXNzYWksIOKEljIgQWxsZWdyZXR0bywg4oSWMyBBbGxlZ3LQvlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0YHRjtC6INCu0LvRltGPLCAxNS4wNi4yMDAwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxOTQ0OTI4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9pZEVaQUFTcVZJRVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCT0LDQvdGW0YbRjNC60LjQuS4gwqvQo9GA0L7Rh9C40YHRgtC40Lkg0L/QvtC70L7QvdC10LfCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQndGW0LrRltGC0ZbQvdCwINCGLtCgLlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxOTU1NDg1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC93SFd6Y09ib2tGZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCv0LrRg9GI0LXQvdC60L4uIMKr0KHRltC90LXQvNCw0YLQvtCz0YDQsNGEwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J3RltC60ZbRgtGW0L3QsCDQhi7QoC5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTk2NjgyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvRThNV1N2TEl3VVVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCaLiDQlNC10LHRjtGB0YHRli4gwqvQnNGW0YHRj9GH0L3QtSDRgdGP0LnQstC+wrs7IDIuINCaLiDQkdCw0LTQtdC70YzRgiwg0LDRgNCw0L3Qti4g0JQuINCg0LDQtNC90LjRh9CwLiDCq9Cf0ZbRgNCw0YLQuCDQmtCw0YDQuNCx0YHRjNC60L7Qs9C+INC80L7RgNGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQtdCy0LDRgdGC0YzRj9C90L7QstCwINCeLtCELlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxOTg4MTg4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8zNk9Hd2RFb3hqMFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0Jkg0KEuINCR0LDRhS4g0JTQstC+0LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDRgdC+0LvRjCDQvNGW0L3QvtGAOyAyLiDQhiAg0JHQtdGA0LrQvtCy0LjRhy4g0JLQsNC70YzRgVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YbRjtC6INCc0LDRgNGW0Y8sIDE3LjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNDk0NjM4NTE5ODgxODgzNDVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC80TXEtcEhkV0E1QVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCh0YLQtdC/0LDQvdC10L3QutC+LiDQktCw0YDRltCw0YbRltGXXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPRgNGB0YzQutCwINCT0LvQsNGE0ZbRgNCwLCAyMi4wNi4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjQ5NDYzODUxOTg4MTg4MzQyZWQ1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvczlDNVBzU3RKRndcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCR0LDRgNCy0ZbQvdGB0YzQutC40LkuINCj0LrRgNCw0ZfQvdGB0YzQutC40Lkg0YLQsNC90L7QulwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GD0YDRgdGM0LrQsCDQk9C70LDRhNGW0YDQsCwgMjIuMDYuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI0OTQ2Mzg1MTk4OGZmMTg4MzQ1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH1cbl1cblxubGV0IGFkZGl0aW9uYWxJbnN0cnVtZW50cyA9IFtcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9ZdnROWmJwSlFRb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCT0ZbQu9C70L7Qui4gwqtBIGxpdmVseSBkYW5jZcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7QudGC0L7QstC40Ycg0IbQu9C70Y8sIDA5LjA4LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNTgyNDM0NDEzMTMwMjFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0JfMWEtaTZpYXZvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JDQudGA0L7QvS4gwqtMZXMgRW1icnVuc8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7QudGC0L7QstC40Ycg0IbQu9C70Y8sIDA5LjA4LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNTgyNDM0NDE0MzM4MjRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL0FucTd3YWhFLUJvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JzQvtGA0LTQsNGB0L7Qsi4gwqvQkdGD0LPRli3QktGD0LPRlsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90L7QstCwINCV0LzRltC70ZbRjywgMjQuMTIuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1ODI0MzQ0MTQ5MDMzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvcXlwQnZOaVlUMVVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQqNC10L3RgtGO0YDQuiAo0KLQtdGA0LXRidGD0LopLiDCq9Cc0LDQu9C10L3RjNC60LAg0LXQu9C10LPRltGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3QvtCy0LAg0JXQvNGW0LvRltGPLCAyNC4xMi4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjU4MjQzNDQxNTYwMjAyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9NWWV5dlg3b2Zlb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIuINCR0YDQsNGD0L0uIMKr0KLQsNC90LXRhtGMINCy0ZbRgtGA0YPCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0YbRjtC6INCR0L7Qs9GD0YHQu9Cw0LLQsCwgMTEuMDQuMjAwOCDRgC7QvVwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjU4MjQzNDQxNjU5MDI4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC9EWDVEOTR1T3JCa1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JQuINCh0YLQsNGA0YjQuNC90ZbQvS4gwqvQnNC+0LzQtdC90YIg0L3QsNGB0L7Qu9C+0LTQuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDRhtGO0Log0JHQvtCz0YPRgdC70LDQstCwLCAxMS4wNC4yMDA4INGALtC9XCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNTgyNDM0NDE3MDE1NTZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL2VtYmVkL3lVSERtRU93NVUwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLiDQkdGD0YDRgNC1INGB0ZYg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C10YLRgNCw0Ygg0JDQvdC90LAsIDE4LjExLjIwMDMg0YAu0L1cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI1ODI0MzQ0MTc0NjIxMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvSUVZSVNTWndXQ0FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQk9GA0ZbQsy4gwqvQoyDQv9C10YfQtdGA0ZYg0LPRltGA0YHRjNC60L7Qs9C+INC60L7RgNC+0LvRj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LXRgtGA0LDRiCDQkNC90L3QsCwgMTguMTEuMjAwMyDRgC7QvVwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjU4MjQzNDQxNzk3NTk5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH1cbl1cblxuZXhwb3J0IGxldCBhcmNoaXZlID0gbXlDYXJkc1xuICAgIC5jb25jYXQoY29uY2VydG1hc3RlcnMpXG4gICAgLmNvbmNhdChlbnNlbWJsZSlcbiAgICAuY29uY2F0KGVuc2VtYmxlcylcbiAgICAuY29uY2F0KGNvbmNlcnRtYXN0ZXJzXzIpXG4gICAgLmNvbmNhdChmb3J0ZXBpYW5vU29sbylcbiAgICAuY29uY2F0KGFkZGl0aW9uYWxJbnN0cnVtZW50cykiLCJpbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7YXJjaGl2ZX0gZnJvbSBcIi4vQXJjaGl2ZVwiO1xuaW1wb3J0IHtmb3J0ZXBpYW5vU29sb30gZnJvbSBcIi4vRm9ydGVwaWFub1NvbG9cIjtcbmltcG9ydCB7ZW5zZW1ibGVzfSBmcm9tIFwiLi9FbnNlbWJsZVwiO1xuaW1wb3J0IHthZGRpdGlvbmFsSW5zdHJ1bWVudHN9IGZyb20gXCIuL0FkZGl0aW9uYWxJbnN0cnVtZW50c1wiO1xuaW1wb3J0IHtjb25jZXJ0bWFzdGVyc30gZnJvbSBcIi4vQ29uY2VydG1hc3RlcnNcIjtcblxuY29uc3QgZ3JvdXAxID0gYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XCJgO1xuY29uc3QgZ3JvdXAyID0gYNCd0L7QvNGW0L3QsNGG0ZbRjyDCq9Ck0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMwrtgO1xuY29uc3QgZ3JvdXAzID0gYNCd0L7QvNGW0L3QsNGG0ZbRjyDCq9CU0L7QtNCw0YLQutC+0LLQuNC5INGW0L3RgdGC0YDRg9C80LXQvdGCICjRhNC+0YDRgtC10L/RltCw0L3QvinCu2A7XG5jb25zdCBncm91cDQgPSBg0J3QvtC80ZbQvdCw0YbRltGPIMKr0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgMK7YDtcblxubGV0IG15Q2FyZHMgPSBhcmNoaXZlO1xubXlDYXJkcyA9IG15Q2FyZHMuY29uY2F0KGZvcnRlcGlhbm9Tb2xvKS5jb25jYXQoZW5zZW1ibGVzKS5jb25jYXQoYWRkaXRpb25hbEluc3RydW1lbnRzKS5jb25jYXQoY29uY2VydG1hc3RlcnMpXG5cbi8qKiBDT0RFICoqL1xuZnVuY3Rpb24gZmlsbVJlZHVjZXIoc3RhdGUgPSB7Y2FyZENvdW50OiBteUNhcmRzLmxlbmd0aCwgY2FyZHM6IG15Q2FyZHMsIGlzRGF0YUluUGxhY2U6IHRydWUsIGVycm9yOiBcIlwifSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdSRlNfUEFHRSc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogLTIsXG4gICAgICAgICAgICAgICAgY2FyZHM6IFtdLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdJTkZPX1BBR0UnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IC0xLFxuICAgICAgICAgICAgICAgIGNhcmRzOiBbXSxcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnQVJDSElWRSc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4g0JDRgNGF0ZbQslwiKTtcbiAgICAgICAgICAgIGxldCBhcmNoaXZlQ2FyZHMgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQuZ3JvdXAgPT09IFwi0LDRgNGF0ZbQslwiKS5zbGljZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXJkczogYXJjaGl2ZUNhcmRzLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBteUNhcmRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnQUxMJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPiDQo9GB0ZYg0LLRltC00LXQvlwiKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZHM6IG15Q2FyZHMsXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG15Q2FyZHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdncm91cC0xJzpcbiAgICAgICAgICAgIGxldCBuZXdDYXJkcyA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5ncm91cCA9PT0gZ3JvdXAxKS5zbGljZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMsXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlICdncm91cC0yJzpcbiAgICAgICAgICAgIGxldCBuZXdDYXJkczEgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQuZ3JvdXAgPT09IGdyb3VwMikuc2xpY2UoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZHM6IG5ld0NhcmRzMSxcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHMxLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlICdncm91cC0zJzpcbiAgICAgICAgICAgIGxldCBuZXdDYXJkczIgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQuZ3JvdXAgPT09IGdyb3VwMykuc2xpY2UoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZHM6IG5ld0NhcmRzMixcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHMyLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnZ3JvdXAtNCc6XG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHM0ID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDQpLnNsaWNlKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkczQsXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzNC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1NFQVJDSCc6XG4gICAgICAgICAgICBsZXQgcSA9IGFjdGlvbi5xdWVyeS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYD4g0J/QvtGI0YPQujogJHtxfWApO1xuICAgICAgICAgICAgbGV0IG5ld0NhcmRzMyA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjYXJkTmFtZSA9IGNhcmQubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGxldCBib29sID0gKGNhcmROYW1lLnN0YXJ0c1dpdGgocSkgfHwgY2FyZE5hbWUuaW5jbHVkZXMocSkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUZXN0aW5nICR7Y2FyZE5hbWV9IG9uIHF1ZXJ5ICR7cX0sIHJlc3VsdCBpcyAke2Jvb2x9YClcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMzLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkczMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0VSUk9SJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGA+INCf0L7QvNC40LvQutCwYCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ubXNnLFxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogMSxcbiAgICAgICAgICAgICAgICBjYXJkczogW10sXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZHM6IGNvbmNlcnRtYXN0ZXJzLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBjb25jZXJ0bWFzdGVycy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBjYXJkU3RvcmUgPSBjcmVhdGVTdG9yZShmaWxtUmVkdWNlcik7XG5cbmNhcmRTdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICBjb25zb2xlLmxvZyhcIkZpbG1zU3RvcmUgc3RhdGUgd2FzIGNoYW5nZWQsIG51bWJlciBvZiBjYXJkczogXCIgKyBjYXJkU3RvcmUuZ2V0U3RhdGUoKS5jYXJkQ291bnQpXG4pO1xuXG5cblxuXG5cbiIsImV4cG9ydCBsZXQgY29uY2VydG1hc3RlcnMgPSBbXSIsImV4cG9ydCBsZXQgZW5zZW1ibGVzID0gW10iLCJleHBvcnQgbGV0IGZvcnRlcGlhbm9Tb2xvID0gW1xuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3VjNk5rNkFJd2owXCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KQuINCo0L7Qv9C10L0uINCS0LDQu9GM0YEsINGC0LIuIDY0IOKEljE7IDIpINCcLiDQlNGA0LXQvNC70Y7Qs9CwINCh0LrQtdGA0YbQviDQu9GPINC80ZbQvdC+0YBcIixcbiAgICAgIFwibmFtZVwiOiBcItCQ0LfRltC30L7QsiDQkNC90LTRgNGW0LksIDIwLjEyLjIwMTAg0YAuINC9LlwiLFxuICAgICAgXCJpZFwiOiB7XG4gICAgICAgICBcIiRvaWRcIjogXCIxNzE0MzMwMTU0LjkwNTI3NzVcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzBDTFZvYS02TnpJXCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCo0L7Qv9C10L0uIMKrR3JhbmRlIFZhbHNlIEJyaWxpYW50ZcK7LCDRgtCyLiAzNCDihJYyXCIsXG4gICAgICBcIm5hbWVcIjogXCLQkdC10LrRltGA0L7QstCwINCa0LDQvNGW0LvQsCwgMDQuMDcuMjAwOSDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1Mjg5XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8xYjlZLTBDQUxUNFwiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCRLiDQpNGW0LvRjNGGLiDCq9Cb0LXQvNC60ZbQstGB0YzQutCwINC/0ZbRgdC90Y/CuyDihJYxXCIsXG4gICAgICBcIm5hbWVcIjogXCLQkdC10LrRltGA0L7QstCwINCa0LDQvNGW0LvQsCwgMDQuMDcuMjAwOSDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MjkxXCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9sa2ZUMWlvLUdvRVwiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQkdC10YLRhdC+0LLQtdC9LiDCq9CU0L4g0JXQu9GW0LfQuMK7XCIsXG4gICAgICBcIm5hbWVcIjogXCLQk9Cw0LvQsNC9INCG0YDQuNC90LAsIDE3LjA1LjIwMTAg0YAuINC9LlwiLFxuICAgICAgXCJpZFwiOiB7XG4gICAgICAgICBcIiRvaWRcIjogXCIxNzE0MzMwMTU0LjkwNTI5MjNcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL19RRkI1bEZsTU9NXCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCo0LXQvdGC0Y7RgNC6LiDCq9CS0LDQu9GM0YEg0LrRg9C70YzQsdCw0LHQvtC6wrtcIixcbiAgICAgIFwibmFtZVwiOiBcItCT0LDQu9Cw0L0g0IbRgNC40L3QsCwgMTcuMDUuMjAxMCDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1Mjk1XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9OaUdCeU5QSERLSVwiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINChLiDQkdC+0YDRgtC60LXQstC40Ycg0J/RgNC10LvRjtC0IOKEljEsINGC0LIuNiDQvNGWINCx0LXQvNC+0LvRjCDQvNGW0L3QvtGAOyAyKSDQoC4g0KjRg9C80LDQvSDCq9Cf0L7RgNC40LLCu1wiLFxuICAgICAgXCJuYW1lXCI6IFwi0JPQsNGB0YDQsNGC0L7QsiDQntC70LXQutGB0ZbQuSwgMjQuMDguMjAxMCDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1Mjk1OFwiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvWlZ0bjJBTElDbzBcIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0KjRg9C60LDQudC70L4uIMKr0JHQsNCz0LDRgtC10LvRjMK7IOKEljVcIixcbiAgICAgIFwibmFtZVwiOiBcItCT0LjRgNGPINCQ0L3QtNGA0ZbQuSwgMjMuMDUuMjAwOCDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1Mjk3XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9ETEpFeGRqUnhqZ1wiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQk9GA0ZbQsy4gwqvQhtC80L/RgNC+0LLRltC30LDRhtGW0Y/Cu1wiLFxuICAgICAgXCJuYW1lXCI6IFwi0JPQuNGA0Y8g0JDQvdC00YDRltC5LCAyMy4wNS4yMDA4INGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUyOTgyXCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9wbWU5ejJfVXBUd1wiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0YLQsCDRhNGD0LPQsCDRgNC1INC80ZbQvdC+0YAsINCU0KLQmi3QhlwiLFxuICAgICAgXCJuYW1lXCI6IFwi0JTQsNC90YzQutC+INCQ0L3QsNGB0YLQsNGB0ZbRjywgMDIuMTAuMjAwNiDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1Mjk5MlwiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvQlhpb245Z0xVOGdcIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQry4g0KHRgtC10L/QvtCy0LjQuS4g0J/RgNC10LvRjtC00ZbRjyDihJYgMTlcIixcbiAgICAgIFwibmFtZVwiOiBcItCU0LDQvdGM0LrQviDQkNC90LDRgdGC0LDRgdGW0Y8sIDAyLjEwLjIwMDYg0YAuINC9LlwiLFxuICAgICAgXCJpZFwiOiB7XG4gICAgICAgICBcIiRvaWRcIjogXCIxNzE0MzMwMTU0LjkwNTMwMDRcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzRzUmp2M3V2blFzXCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JsuINCo0LjRgtGC0LUuINCh0L7QvdCw0YLQuNC90LAg0YDQtSDQvNCw0LbQvtGAOyAyKSDQnC4g0JrQsNGA0L7Qu9GMLdCo0LXRhdC80LXRgdGC0LXRgC4gwqvQotCw0L3QtdGG0Ywg0L/QsNC00LDRjtGH0L7Qs9C+INC70LjRgdGC0Y/Cu1wiLFxuICAgICAgXCJuYW1lXCI6IFwi0JTQvtGA0LXQvdGB0YzQutCwINCQ0L3QttC10LvQsCwgMjUuMDEuMjAwOSDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MzAxNlwiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvTXUtcEJZZHRvWFlcIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0JzQtdC90LTQtdC70YzRgdC+0L0uIMKr0J/RltGB0L3RjyDQsdC10Lcg0YHQu9GW0LLCu1wiLFxuICAgICAgXCJuYW1lXCI6IFwi0JTRg9C00LjRhyDQntC70YzQs9CwLCAxNC4xMC4yMDA5INGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzMDI1XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9OTWw1bUNZZXMwOFwiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQkdGA0LjQu9GW0L0uINCi0L7QutC60LDRgtCwXCIsXG4gICAgICBcIm5hbWVcIjogXCLQlNGD0LTQuNGHINCe0LvRjNCz0LAsIDE0LjEwLjIwMDkg0YAuINC9LlwiLFxuICAgICAgXCJpZFwiOiB7XG4gICAgICAgICBcIiRvaWRcIjogXCIxNzE0MzMwMTU0LjkwNTMwMzVcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0ZFendsdHEzRlVNXCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCg0LXQstGD0YbRjNC60LjQuSwgwqvQn9GW0YHQvdGPwrtcIixcbiAgICAgIFwibmFtZVwiOiBcItCX0LDQstCw0LTRgdGM0LrQsCDQkNGA0ZbQvdCwLCAwNi4wNi4yMDA5INGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzMDQ3XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9ubnRVdTVwN3lKRVwiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAgINC80ZYg0LzRltC90L7RgCwgMSDRh9Cw0YHRgtC40L3QsFwiLFxuICAgICAgXCJuYW1lXCI6IFwi0JfQsNCy0LDQtNGB0YzQutCwINCQ0YDRltC90LAsIDA2LjA2LjIwMDkg0YAuINC9LlwiLFxuICAgICAgXCJpZFwiOiB7XG4gICAgICAgICBcIiRvaWRcIjogXCIxNzE0MzMwMTU0LjkwNTMwNTZcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1dGcjNtSnBzal93XCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCc0LXQvdC00LXQu9GM0YHQvtC9LCDQsNGA0LDQvdC2LiDQmi4g0JvQsNC90LPQtS4gwqvQntGB0ZbQvdC90Y8g0L/RltGB0L3Rj8K7XCIsXG4gICAgICBcIm5hbWVcIjogXCLQhtC70YzRh9GD0Log0JXQu9GW0LfQsCwgMTkuMDkuMjAxMCDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MzA3NVwiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvNVViSGN0bGU2ZndcIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0KjQuNGA0LjQvdGB0YzQutC40LkuINCS0LDQu9GM0YFcIixcbiAgICAgIFwibmFtZVwiOiBcItCG0LvRjNGH0YPQuiDQldC70ZbQt9CwLCAxOS4wOS4yMDEwINGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzMDlcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzJ5OGNkR3FKUXBnXCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jku0KEuINCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRgtCwINGE0YPQs9CwINC00L4g0LzRltC90L7RgCwg0JTQotCaLdCGOyAyKSDQpC4g0KjQvtC/0LXQvS4g0JXRgtGO0LQsINGC0LIuIDI1IOKEljJcIixcbiAgICAgIFwibmFtZVwiOiBcItCa0LDQtNGD0LHQtdGG0Ywg0ITQstCwLCAwMS4xMC4yMDA4INGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzMVwiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvZDA3NzJQZk9sS1FcIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JrQvtGBLdCQ0L3QsNGC0L7Qu9GM0YHRjNC60LjQuS4g0KHRjtGX0YLQsCDCq9Ch0LjQvdGWINCz0L7RgNC4wrssIDEg0YcuXCIsXG4gICAgICBcIm5hbWVcIjogXCLQmtC+0YDQvtC70Ywg0ITQu9C40LfQsNCy0LXRgtCwLCAwOS4wOC4yMDEwINGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzMTA5XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9TNDlLcVUydndwc1wiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCRLiDQoNGW0YfQsNGA0LTRgS4gwqvQqdC10LHQtdGC0LDQvdC90Y8g0L/RgtCw0YXRltCywrtcIixcbiAgICAgIFwibmFtZVwiOiBcItCa0L7RgNC+0LvRjCDQhNC70LjQt9Cw0LLQtdGC0LAsIDA5LjA4LjIwMTAg0YAuINC9LlwiLFxuICAgICAgXCJpZFwiOiB7XG4gICAgICAgICBcIiRvaWRcIjogXCIxNzE0MzMwMTU0LjkwNTMxMlwiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvbHQzdWhHaWsyWFFcIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQry4g0IbQstCw0L3QvtCy0YEuIMKr0K/Qu9C40L3QutCwwrtcIixcbiAgICAgIFwibmFtZVwiOiBcItCa0YDQuNCy0LjRhtGM0LrQsCDQntC70LXQutGB0LDQvdC00YDQsCwgMDUuMTEuMjAwOCDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MzEzXCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9DX0hkLVYyX3Bhd1wiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQktGW0LouIMKr0J/QvtC70L7QvdC10LfCuyDQtNC+INC80LDQttC+0YBcIixcbiAgICAgIFwibmFtZVwiOiBcItCa0YDQuNCy0LjRhtGM0LrQsCDQntC70LXQutGB0LDQvdC00YDQsCwgMDUuMTEuMjAwOCDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MzE0XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9DQ1ZMT3JpNHRTMFwiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLtCSLiDQkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LAg4oSWMjAsIDEg0YfQsNGB0YLQuNC90LA7IDIpINCRLiDQpNGW0LvRjNGGLiDCq9CX0LDQutCw0YDQv9Cw0YLRgdGM0LrQsCDQvdC+0LLQtdC70LXRgtCwwrtcIixcbiAgICAgIFwibmFtZVwiOiBcItCa0YPQt9GM0LzQuNGHINCv0YDQuNC90LAsIDE3LjA5LjIwMDkg0YAuINC9LlwiLFxuICAgICAgXCJpZFwiOiB7XG4gICAgICAgICBcIiRvaWRcIjogXCIxNzE0MzMwMTU0LjkwNTMxNTJcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3U1d05xUHpTRU5ZXCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JwuINCh0YLQtdC/0LDQvdC10L3QutC+LiDCq9Cf0YDQtdC70Y7QtNGW0Y/CuyDQu9GPINC80ZbQvdC+0YA7IDIpINCj0LrRgNCw0ZfQvdGB0YzQutCwINC90LDRgNC+0LTQvdCwINC/0ZbRgdC90Y8gwqvQptCy0ZbRgtC1INGC0LXRgNC10L3CuyDQsiDQvtCx0YAuINCeLiDQodCw0YDQsNGC0YHRjNC60L7Qs9C+XCIsXG4gICAgICBcIm5hbWVcIjogXCLQmtGD0YLQsNGBINCS0ZbRgtCw0LvRltC5LCAyMi4xMi4yMDEwINGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzMTZcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2Y3VEVuWlN5SFg0XCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JkuINChLiDQkdCw0YUuINCc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjyDihJY1XCIsXG4gICAgICBcIm5hbWVcIjogXCLQm9C40L/QutCwINCQ0L3QtNGA0ZbQuSwgMTQuMTIuMjAxMCDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MzE3XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9xRnEtbUJ0T3Jsb1wiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4gwqvQotC+0LrQutCw0YLQsMK7XCIsXG4gICAgICBcIm5hbWVcIjogXCLQm9C40L/QutCwINCQ0L3QtNGA0ZbQuSwgMTQuMTIuMjAxMCDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MzE5NVwiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdENIM1hlX3ZQQk1cIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQki4g0JAuINCc0L7RhtCw0YDRgi4g0KHQvtC90LDRgtCwICDRhNCwINC80LDQttC+0YAsIDEg0YfQsNGB0YLQuNC90LA7IDIpINCdLiDQndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4g0JLQsNC70YzRgVwiLFxuICAgICAgXCJuYW1lXCI6IFwi0JvRjtC30L7QstC40Ycg0JDQvdCw0YHRgtCw0YHRltGPLCAxMC4wOC4yMDA4INGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzMjA2XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9WX3B0QTFqT0dSWVwiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCULiDQp9GW0LzQsNGA0L7Qt9CwLiDQodC+0L3QsNGC0LAg0YHRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgICAgXCJuYW1lXCI6IFwi0JzQtdC70YzQvdC40LrQvtCy0LAg0JDQvdCz0LXQu9GW0L3QsCwgMTAuMTIuMjAwOSDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MzIzM1wiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQveVBmclotSWVEcDBcIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0KjRg9C60LDQudC70L4uINCG0L3RgtC10YDQvNC10YbQvlwiLFxuICAgICAgXCJuYW1lXCI6IFwi0JzQtdC70YzQvdC40LrQvtCy0LAg0JDQvdCz0LXQu9GW0L3QsCwgMTAuMTIuMjAwOSDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MzI0MlwiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvMjk2enRDeXlDWHNcIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi4g0JfQsNC00L7RgC4gwqvQmtC+0L3RhtC10YDRgtC90LjQuSDQtdGC0Y7QtMK7INC00L4g0LzRltC90L7RgFwiLFxuICAgICAgXCJuYW1lXCI6IFwi0JzQuNGFINCg0L7QutGB0L7Qu9GP0L3QsCwgMjMuMDMuMjAwOCDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MzI1NFwiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvVzNWcnZrNmh6b29cIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC7Qmi4g0JzQvtGG0LDRgNGCLiDQktCw0YDRltCw0YbRltGXINC90LAg0YLQtdC80YMg0YPQutGA0LDRl9C90YHRjNC60L7RlyDQvdCw0YDQvtC00L3QvtGXINC/0ZbRgdC90ZYgwqvQoyDRgdGD0YHRltC00LAg0YXQsNGC0LAgICDQsdGW0LvQsMK7XCIsXG4gICAgICBcIm5hbWVcIjogXCLQnNC40YUg0KDQvtC60YHQvtC70Y/QvdCwLCAyMy4wMy4yMDA4INGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzMjY0XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9FeG5LRHBfX0d1MFwiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCZLiDQk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg0YTQsCDQvNCw0LbQvtGALCAxINGH0LDRgdGC0LjQvdCwOyAyKSDQpC4g0K/QutC40LzQtdC90LrQvi4gwqvQldC70LXQs9GW0Y/CuyDRgdC+0LvRjCDQvNGW0L3QvtGALlwiLFxuICAgICAgXCJuYW1lXCI6IFwi0JzRltGB0YzQutGW0LIg0JzQsNC60YHQuNC8LCAyNC4wOC4yMDA5INGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzMjk1XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9lZ29GdkYzcW15MFwiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQoS4g0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGE0LAg0LzQsNC20L7RgFwiLFxuICAgICAgXCJuYW1lXCI6IFwi0JzQvtC30LPQvtCy0LAg0J3QsNC00ZbRjywgMTEuMTIuMjAwOSDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MzMwN1wiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvNDB2V0ZNejJMdlFcIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQn9GU0YHQutCw0L3QvtCyLiDQn9GA0LXQu9GO0LTRltGPIMKrVWtyYWluZcK7XCIsXG4gICAgICBcIm5hbWVcIjogXCLQnNC+0LfQs9C+0LLQsCDQndCw0LTRltGPLCAxMS4xMi4yMDA5INGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzMzE2XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8xanFISWxfQ1ZXTVwiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQodC70LDQstC40YbRjNC60LjQuS4gwqvQlNCy0LAg0LXRgtGO0LTQuMK7XCIsXG4gICAgICBcIm5hbWVcIjogXCLQntGB0YLQsNC/0LXQvdC60L4g0JDQu9GW0L3QsCwgMTAuMDIuMjAxMSDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MzMyOFwiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvQ29DcUtRTHF4VjBcIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JrQu9C40LzQvtCy0YHRjNC60LjQuS4gwqvQh9GF0LDQsiDQutC+0LfQsNC6INC30LAg0JTRg9C90LDQucK7LCDQvtCx0YAuINCgLiDQodCw0LLQuNGG0YzQutC+0LPQvlwiLFxuICAgICAgXCJuYW1lXCI6IFwi0J7RgdGC0LDQv9C10L3QutC+INCQ0LvRltC90LAsIDEwLjAyLjIwMTEg0YAuINC9LlwiLFxuICAgICAgXCJpZFwiOiB7XG4gICAgICAgICBcIiRvaWRcIjogXCIxNzE0MzMwMTU0LjkwNTMzMzhcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3JodlVIZzA0ZjNRXCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K8uINCS0LDQvdGM0YXQsNC70YwuINCh0L7QvdCw0YLQsCDQu9GPINC80LDQttC+0YBcIixcbiAgICAgIFwibmFtZVwiOiBcItCg0YPQtNCw0ZTQstCwINCQ0L3QvdCwLCAwMy4xMi4yMDA5INGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzMzQ3XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9TdjEtdTVRczVMTVwiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQotC40LzQvtGI0LXQvdC60L4uIMKr0JzRg9C30LjRh9C90LAg0ZbRgdGC0L7RgNGW0Y/Cu1wiLFxuICAgICAgXCJuYW1lXCI6IFwi0KDRg9C00LDRlNCy0LAg0JDQvdC90LAsIDAzLjEyLjIwMDkg0YAuINC9LlwiLFxuICAgICAgXCJpZFwiOiB7XG4gICAgICAgICBcIiRvaWRcIjogXCIxNzE0MzMwMTU0LjkwNTMzNlwiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQveUl3MThtTHZfeDhcIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtCwIOKEljEsIDEg0YfQsNGB0YLQuNC90LBcIixcbiAgICAgIFwibmFtZVwiOiBcItCh0LDQstGA0LDQuSDQmtCw0YLQtdGA0LjQvdCwLCAwNC4wNy4yMDA5INGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzMzgzXCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9WTEl0b1FiWlZSUVwiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLiDQqNCw0LzQvi4g0KLQvtC60LDRgtCwXCIsXG4gICAgICBcIm5hbWVcIjogXCLQodCw0LLRgNCw0Lkg0JrQsNGC0LXRgNC40L3QsCwgMDQuMDcuMjAwOSDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MzM5NVwiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvSzVMNXp2bXBYem9cIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmS7QoS4g0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGC0LAg0YTRg9Cz0LAg0YDQtSDQvNGW0L3QvtGALCDQlNCi0Jot0IY7IDIpINCaLiDQktGW0LvQtdC90YHRjNC60LjQuS4g0KPQutGA0LDRl9C90YHRjNC60LAg0L3QsNGA0L7QtNC90LAg0L/RltGB0L3RjyDCq9Cd0LUg0L/QuNGC0LDQuSwg0YfQvtCz0L4g0LIg0LzQtdC90LUg0LfQsNC/0LvQsNC60LDQvdGWINC+0YfRlsK7XCIsXG4gICAgICBcIm5hbWVcIjogXCLQodCw0LLRh9C10L3QutC+INCc0LDRgtCy0ZbQuSwgMTcuMDEuMjAxMCDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MzQwNFwiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvRFRLX0U4SHlLb1FcIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0KDQvtCz0L7Qt9CwLiDCq9CV0YLRjtC0wrtcIixcbiAgICAgIFwibmFtZVwiOiBcItCh0LDQutCy0LAg0JLQsNC70LXRgNGW0Y8sIDEzLjAzLjIwMTAg0YAuINC9LlwiLFxuICAgICAgXCJpZFwiOiB7XG4gICAgICAgICBcIiRvaWRcIjogXCIxNzE0MzMwMTU0LjkwNTM0MTRcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzhXWWZ0YnpuSko0XCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KAuINCb0ZbRgdC+0LLQsC4gwqvQndC+0LrRgtGO0YDQvcK7XCIsXG4gICAgICBcIm5hbWVcIjogXCLQodCw0LrQstCwINCS0LDQu9C10YDRltGPLCAxMy4wMy4yMDEwINGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzNDI2XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC90OGhpSzFSeVhsZ1wiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCdLiDQndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4g0IbQvdGC0LXRgNC80LXRhtC+XCIsXG4gICAgICBcIm5hbWVcIjogXCLQodGW0LvQtdGG0YzQutCwINCU0LDRgCfRjywgMzAuMDkuMjAxMCDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MzQzNVwiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvVmFpVXZ0MnFkbzhcIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0JzQtdC90LTQtdC70YzRgdC+0L0uIMKr0KTQsNC90YLQsNC30ZbRjy3QutCw0L/RgNC40LfCuywg0YLQsi4gMTYg4oSWMlwiLFxuICAgICAgXCJuYW1lXCI6IFwi0KHRltC70LXRhtGM0LrQsCDQlNCw0YAn0Y8sIDMwLjA5LjIwMTAg0YAuINC9LlwiLFxuICAgICAgXCJpZFwiOiB7XG4gICAgICAgICBcIiRvaWRcIjogXCIxNzE0MzMwMTU0LjkwNTM0NDVcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL05TXzRrSlpnZGVFXCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0IYuINCR0LXRgNC60L7QstC40YcuINCi0L7QutCw0YLQsCDQvNGW0L3QvtGAOyAyKSDQpC4g0KjQvtC/0LXQvS4g0JLQsNC70YzRgSDRgdGWINC80ZbQvdC+0YBcIixcbiAgICAgIFwibmFtZVwiOiBcItCh0LrQvtGA0L7RhdC+0LTRjNC60L4g0ITQstCz0LXQvdGW0Y8sIDI0LjA3LjIwMTAg0YAuINC9LlwiLFxuICAgICAgXCJpZFwiOiB7XG4gICAgICAgICBcIiRvaWRcIjogXCIxNzE0MzMwMTU0LjkwNTM0NTJcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1Bzc0dKVzF4VHI0XCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0IYuINCa0LDRgNCw0LHQuNGG0YwuINCf0YDQtdC70Y7QtNGW0Zcg4oSWMSDRgtCwIDIyINC3INGG0LjQutC70YMgwqsyNCDQn9GA0LXQu9GO0LTRltGXINC00LvRjyDRhNC+0YDRgtC10L/RltCw0L3QvsK7OyAyKSDQhi4g0KjQsNC80L4uIMKr0KLRgNGW0LnQutCwwrtcIixcbiAgICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0ITQstCz0LXQvdGW0Y8sIDAzLjAzLjIwMTIg0YAuINC9LlwiLFxuICAgICAgXCJpZFwiOiB7XG4gICAgICAgICBcIiRvaWRcIjogXCIxNzE0MzMwMTU0LjkwNTM0NjRcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0l0Zk1ILVFrMHEwXCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KQuINCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9LCDRgtCyLiA5IOKEljI7IDIpINCfLiDQl9Cw0YXQsNGA0L7Qsi4g0JrQvtC90YbQtdGA0YLQvdC40Lkg0LXQutGB0L/RgNC+0LzRgiDQvdCwINGC0LXQvNGDINGD0LrRgNCw0ZfQvdGB0YzQutC+0Zcg0YDRltC30LTQstGP0L3QvtGXINC60L7Qu9GP0LTQutC4IMKr0KnQtdC00YDQuNC6wrtcIixcbiAgICAgIFwibmFtZVwiOiBcItCi0LjQvNC+0YTRlNGU0LLQsCDQlNCw0YAn0Y8sIDExLjA0LjIwMTEg0YAuINC9LlwiLFxuICAgICAgXCJpZFwiOiB7XG4gICAgICAgICBcIiRvaWRcIjogXCIxNzE0MzMwMTU0LjkwNTM0NzNcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzJnUEhEZ2lFdkZzXCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JkuINCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDRgNC1INC80LDQttC+0YAsIDEg0YfQsNGB0YLQuNC90LA7IDIpINCcLiDQm9C40YHQtdC90LrQvi4gwqvQldC70LXQs9GW0Y/Cu1wiLFxuICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00LjQvdCwINCc0LDRgNGW0Y8t0JDQvdC90LAsIDI3LjA4LjIwMTAg0YAuINC9LlwiLFxuICAgICAgXCJpZFwiOiB7XG4gICAgICAgICBcIiRvaWRcIjogXCIxNzE0MzMwMTU0LjkwNTM0ODNcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2I3UGM0Yk1JNUZZXCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4g0JXRgtGO0LQsINGC0LIuMjkg4oSWNyDCq0xlIG15c3RlcmlldXggaW5jb25udcK7OyAyKSDQpC4g0KjQvtC/0LXQvS4gwqvQpNCw0L3RgtCw0LfRltGPLdCV0LrRgdC/0YDQvtC80YLCu1wiLFxuICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00L7RgtC+0LLQsCDQmtCw0YLQtdGA0LjQvdCwLCAyMC4wNC4yMDExINGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzNDk1XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9ZYjU3czdIeTItY1wiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQqNC10L3RgtGO0YDQui4gwqvQodC70YzQvtC30LjCu1wiLFxuICAgICAgXCJuYW1lXCI6IFwi0KfQvtGA0L3QsCDQk9Cw0L3QvdCwLCAyMS4xMi4yMDA5INGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzNTE2XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC93RU1pRHJHM3V6c1wiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQlNGA0LXQvNC70Y7Qs9CwLiDQodC60LXRgNGG0L5cIixcbiAgICAgIFwibmFtZVwiOiBcItCn0L7RgNC90LAg0JPQsNC90L3QsCwgMjEuMTIuMjAwOSDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MzUzXCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9VN1FLZkRrdk1iNFwiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCRLiDQm9GP0YLQvtGI0LjQvdGB0YzQutC40LkuIMKr0J7QuSwg0YMg0L/QvtC70ZYg0YLRgNC4INC60YDQuNC90LjRh9C10L3RjNC60LjCuywg0YLQsi4gMzYg4oSWMSAyKSDQhC4g0JTQt9GO0LHQsC4g0J/RgNC10LvRjtC00ZbRjyDCq9Cd0LXRgdC60L7RgNC10L3QuNC8wrtcIixcbiAgICAgIFwibmFtZVwiOiBcItCo0LXRgNGB0YLRltC5INCi0LDRgNCw0YEg0IbQs9C+0YDQvtCy0LjRhywgMTQuMDQuMjAwOCDRgC4g0L0uXCIsXG4gICAgICBcImlkXCI6IHtcbiAgICAgICAgIFwiJG9pZFwiOiBcIjE3MTQzMzAxNTQuOTA1MzU0XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfSxcbiAgIHtcbiAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9YNXFMaDdpZGt5RVwiLFxuICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCTLiDQpC4g0KLQtdC70LXQvNCw0L0uINCk0YPQs9CwINGB0L7Qu9GMINC80ZbQvdC+0YBcIixcbiAgICAgIFwibmFtZVwiOiBcItCu0YDRh9GD0Log0JDQvdCw0YHRgtCw0YHRltGPLCAyMS4xMC4yMDA5INGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzNTVcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzk2azd3UjJiZ3JRXCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCa0L7RgS3QkNC90LDRgtC+0LvRjNGB0YzQutC40LkuINCa0L7Qu9C+0LzQuNC50LrQsCDQtyDCq9CR0YPQutC+0LLQuNC90YHRjNC60L7RlyDRgdGO0ZfRgtC4wrtcIixcbiAgICAgIFwibmFtZVwiOiBcItCu0YDRh9GD0Log0JDQvdCw0YHRgtCw0YHRltGPLCAyMS4xMC4yMDA5INGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzNTZcIlxuICAgICAgfSxcbiAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICB9LFxuICAge1xuICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0tvODl5eE1rNDRzXCIsXG4gICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCo0LDQvNC+LiDCq9CS0LXRgdC90Y/QvdC60LDCu1wiLFxuICAgICAgXCJuYW1lXCI6IFwi0K/QutC40LzQtdC90LrQviDQhNC70LjQt9Cw0LLQtdGC0LAsIDIzLjEwLjIwMTAg0YAuINC9LlwiLFxuICAgICAgXCJpZFwiOiB7XG4gICAgICAgICBcIiRvaWRcIjogXCIxNzE0MzMwMTU0LjkwNTM1N1wiXG4gICAgICB9LFxuICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgIH0sXG4gICB7XG4gICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvd1FYZjM0M0plaTRcIixcbiAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JrQu9C+0LLQsC4gwqvQn9GA0LXQu9GO0LTRltGPwrtcIixcbiAgICAgIFwibmFtZVwiOiBcItCv0LrQuNC80LXQvdC60L4g0ITQu9C40LfQsNCy0LXRgtCwLCAyMy4xMC4yMDEwINGALiDQvS5cIixcbiAgICAgIFwiaWRcIjoge1xuICAgICAgICAgXCIkb2lkXCI6IFwiMTcxNDMzMDE1NC45MDUzNTc4XCJcbiAgICAgIH0sXG4gICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgfVxuXVxuIl0sInNvdXJjZVJvb3QiOiIifQ==