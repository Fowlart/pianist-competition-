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
  color: lawngreen;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all;
`;
const FilmInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  height: 10%;
  text-align: center;
`;
const IframeBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].iframe`
  width: ${props => props.width};
  height: 480px;
  border: solid gold 3px;
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilmInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["FaBookOpen"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, composition)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BsFillPersonFill"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, name))));
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




const Div = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  text-align: center;
  background-color: black;
  background-image: url("${_1163023_png__WEBPACK_IMPORTED_MODULE_3__["default"]}");
  height: 900px;
`;
const A = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a`
  font-family: "Segoe UI", serif;
  font-style: oblique;
  font-weight: 800;
  margin-top: 20px;
  font-size: 20px;
  color: lawngreen;
  transition: all ease;
  text-decoration: none;

  :hover {
    color: darkred;
  }
`;
const InfoPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://drive.google.com/file/d/1qdyL0mXafowI888sPJLyM7yuhYJNR70b/view?usp=sharing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), "\u0421\u043A\u043B\u0430\u0434 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0439\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u0456\u0442\u0435\u0442\u0443 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://drive.google.com/file/d/1ka7GuVc0mhHzR5jq1qhTCHnlNa0HcXmB/view?usp=sharing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://drive.google.com/file/d/16sz0uu564Bl7l9Y-bqMO_-gLPqTuDBYC/view?usp=sharing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), "\u0411\u0440\u043E\u0448\u0443\u0440\u0430"));
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
    key: card.id
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
  transition: all ease;
  color: lawngreen;

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

const group1 = `Переможці номінації "Фортепіано соло"`;
const group2 = `Переможці номінації "Фортепіанний ансамбль"`;
const group3 = `Переможці номінації "Концертмейстер"`;
const myCards = [{
  id: "card-1",
  name: "Семіков А.С",
  composition: 'Тестова увертюра Бетховена "Качка жовта в озері тонула"',
  videoUrl: "https://drive.google.com/file/d/1Yj8s78Bjlhc63ngiqBprZiMPI74GhN0G/preview",
  group: group1
}, {
  id: "card-2",
  name: "Буцяк З.І",
  composition: 'Тестова увертюра Бетховена "Качка жовта в озері тонула"',
  videoUrl: "https://drive.google.com/file/d/1Yj8s78Bjlhc63ngiqBprZiMPI74GhN0G/preview",
  group: group2
}, {
  id: "card-3",
  name: "Іванова Т.Л",
  composition: "Тестова увертюра Бетховена 'Качка жовта в озері тонула'",
  videoUrl: "https://drive.google.com/file/d/1Yj8s78Bjlhc63ngiqBprZiMPI74GhN0G/preview",
  group: group3
}, {
  id: "card-4",
  name: "Кузіна Т.Л",
  composition: "Тестова увертюра Бетховена 'Качка жовта в озері тонула'",
  videoUrl: "https://drive.google.com/file/d/1Yj8s78Bjlhc63ngiqBprZiMPI74GhN0G/preview",
  group: group3
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
      console.log(`> Пошук`);
      let newCards3 = myCards.filter(card => card.name.toLowerCase().startsWith(action.query.toLowerCase())).slice();
      return {
        cards: newCards3,
        isDataInPlace: true,
        cardCount: newCards3.length,
        error: ""
      };

    case 'ERROR':
      console.log(`> Помилка`);
      return { ...state,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzExNjMwMjMucG5nIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZm9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVndWxhckhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzdWx0c0ZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnMuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL0NhcmRTdG9yZS5qc3giXSwibmFtZXMiOlsiQXBwIiwiY2FyZFN0b3JlIiwiRmlsbVdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJGaWxtSW5mbyIsIklmcmFtZUJveCIsImlmcmFtZSIsInByb3BzIiwid2lkdGgiLCJDYXJkIiwiaGVpZ2h0IiwidXNlV2luZG93RGltZW5zaW9ucyIsImNhbGN1bGF0ZWRXaWR0aCIsInNldENhbGN1bGF0ZWRXaWR0aCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibmFtZSIsImNvbXBvc2l0aW9uIiwidmlkZW9VcmwiLCJEaXYiLCJsb2dvIiwiQSIsImEiLCJJbmZvUGFnZSIsIk1haW5TZWN0aW9uRmxleCIsIk1haW5TZWN0aW9uIiwiY2FyZHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiaXNEYXRhSW5QbGFjZSIsImNhcmRDb3VudCIsInNlY3Rpb25zRm9yRmlsdGVyIiwibWFwIiwiY2FyZCIsImlkIiwiQnV0dG9uIiwiaW5wdXQiLCJJbnB1dCIsImlucHV0Q29sb3IiLCJJbnB1dFN0eWxlIiwiSW5wdXRXcmFwZXIiLCJTdHlsZWRTcGFuIiwic3BhbiIsIkVycm9yIiwiV2FybiIsIlJlZ3VsYXJIZWFkZXIiLCJzZWFyY2hGaWVsZCIsInVzZVJlZiIsImVycm9yIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZXIiLCJzdHIiLCJTdHJpbmciLCJjdXJyZW50IiwidmFsdWUiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInR5cGUiLCJtc2ciLCJxdWVyeSIsImhhbmRsZUtleVByZXNzIiwiZXZlbnQiLCJrZXkiLCJGaWx0ZXJDb250YWluZXIiLCJGaWx0ZXJTZWN0aW9uIiwiRGl2VGhpbkxpbmUiLCJTdHlsZWRSZXN1bHRzRmlsdGVyV3JhcHBlciIsImdyb3dfMCIsImtleWZyYW1lcyIsImxlZnQiLCJncm93XzEiLCJUaGluTGluZUlubmVyRGl2IiwiYW5pbWF0aW9uIiwiUmVzdWx0c0ZpbHRlciIsInNlY3Rpb25zIiwicmVkTGluZVdpZHRoIiwic2V0UmVkTGluZVdpZHRoIiwicmVkTGluZUxlZnQiLCJzZXRSZWRMaW5lTGVmdCIsInNldEFuaW1hdGlvbiIsIm1hcmtlZFNlY3Rpb25SZWYiLCJyZVJlbmRlclJlZExpbiIsInRhcmdldCIsImN1cnJlbnRTZWN0aW9uV2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjdXJyZW50U2VjdGlvbkxlZnQiLCJjb3VudGVyIiwib25GaWx0ZXJTZWN0aW9uQ2xpY2siLCJzZWxlY3RlZFNlY3Rpb24iLCJzZWxlY3RlZFNlY3Rpb25TdHJpbmciLCJzZWN0aW9uIiwiY29uc29sZSIsImxvZyIsInJlbmRlckluZm9QYWdlIiwicmVuZGVyZWRTZWN0aW9ucyIsImUiLCJnZXRXaW5kb3dEaW1lbnNpb25zIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwid2luZG93Iiwid2luZG93RGltZW5zaW9ucyIsInNldFdpbmRvd0RpbWVuc2lvbnMiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdyb3VwMSIsImdyb3VwMiIsImdyb3VwMyIsIm15Q2FyZHMiLCJncm91cCIsImZpbG1SZWR1Y2VyIiwiYWN0aW9uIiwibmV3Q2FyZHMiLCJmaWx0ZXIiLCJzbGljZSIsIm5ld0NhcmRzMSIsIm5ld0NhcmRzMiIsIm5ld0NhcmRzMyIsInRvTG93ZXJDYXNlIiwic3RhcnRzV2l0aCIsImNyZWF0ZVN0b3JlIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJB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Q0g3RixhQUFLLEVBQUVnRyxTQURKO0FBRUg3RixxQkFBYSxFQUFFLElBRlo7QUFHSEMsaUJBQVMsRUFBRTRGLFNBQVMsQ0FBQ2xFLE1BSGxCO0FBSUhSLGFBQUssRUFBRTtBQUpKLE9BQVA7O0FBTUosU0FBSyxPQUFMO0FBQ0k0QyxhQUFPLENBQUNDLEdBQVIsQ0FBYSxXQUFiO0FBQ0EsYUFBTyxFQUNKLEdBQUdqRSxLQURDO0FBRUhvQixhQUFLLEVBQUNvRSxNQUFNLENBQUN6RDtBQUZWLE9BQVA7O0FBSUo7QUFDSSxhQUFPO0FBQ0hqQyxhQUFLLEVBQUV1RixPQURKO0FBRUhwRixxQkFBYSxFQUFFLElBRlo7QUFHSEMsaUJBQVMsRUFBRW1GLE9BQU8sQ0FBQ3pELE1BSGhCO0FBSUhSLGFBQUssRUFBQztBQUpILE9BQVA7QUF4RFI7QUErREg7O0FBRU0sTUFBTWhELFNBQVMsR0FBRzZILHlEQUFXLENBQUNWLFdBQUQsQ0FBN0I7QUFFUG5ILFNBQVMsQ0FBQzhILFNBQVYsQ0FBb0IsTUFDaEJsQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvREFBb0Q3RixTQUFTLENBQUMrSCxRQUFWLEdBQXFCakcsU0FBckYsQ0FESixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzeFwiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy8xMTYzMDIzLnBuZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TWFpblNlY3Rpb259IGZyb20gJy4vY29tcG9uZW50cy9NYWluU2VjdGlvbic7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2NhcmRTdG9yZX0gZnJvbSBcIi4vc3RvcmUvQ2FyZFN0b3JlXCI7XHJcbmltcG9ydCB7UmVndWxhckhlYWRlcn0gZnJvbSBcIi4vY29tcG9uZW50cy9SZWd1bGFySGVhZGVyXCI7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cclxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtjYXJkU3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgPE1haW5TZWN0aW9uLz5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICA8L1JlYWN0LlN0cmljdE1vZGU+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0JzRmlsbFBlcnNvbkZpbGwsIEZhQm9va09wZW59IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuXHJcbmNvbnN0IEZpbG1XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogbGF3bmdyZWVuO1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHRyYW5zaXRpb246IGFsbDtcclxuYDtcclxuXHJcbmNvbnN0IEZpbG1JbmZvID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgSWZyYW1lQm94ID0gc3R5bGVkLmlmcmFtZWBcclxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XHJcbiAgaGVpZ2h0OiA0ODBweDtcclxuICBib3JkZXI6IHNvbGlkIGdvbGQgM3B4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICBjb25zdCBbY2FsY3VsYXRlZFdpZHRoLCBzZXRDYWxjdWxhdGVkV2lkdGhdID0gdXNlU3RhdGUoNjQwKTtcclxuXHJcbiAgICAvL2hhbmRsaW5nIHJlc2l6ZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAod2lkdGg8NzAwKSBzZXRDYWxjdWxhdGVkV2lkdGgod2lkdGggLSA1MCk7XHJcbiAgICAgICAgZWxzZSBzZXRDYWxjdWxhdGVkV2lkdGgoNjQwKTtcclxuICAgIH0sIFt3aWR0aF0pO1xyXG5cclxuICAgIGNvbnN0IFtuYW1lLF0gPSB1c2VTdGF0ZShwcm9wcy5uYW1lKTtcclxuICAgIGNvbnN0IFtjb21wb3NpdGlvbixdID0gdXNlU3RhdGUocHJvcHMuY29tcG9zaXRpb24pO1xyXG4gICAgY29uc3QgW3ZpZGVvVXJsLF0gPSB1c2VTdGF0ZShwcm9wcy52aWRlb1VybCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmlsbVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxJZnJhbWVCb3ggc3JjPXt2aWRlb1VybH0gd2lkdGg9e2NhbGN1bGF0ZWRXaWR0aH0vPlxyXG4gICAgICAgICAgICA8RmlsbUluZm8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj48RmFCb29rT3Blbi8+PGk+e2NvbXBvc2l0aW9ufTwvaT48L3NwYW4+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjxCc0ZpbGxQZXJzb25GaWxsLz48Yj57bmFtZX08L2I+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L0ZpbG1JbmZvPlxyXG4gICAgICAgIDwvRmlsbVdyYXBwZXI+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCaUxpbmtFeHRlcm5hbH0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vMTE2MzAyMy5wbmdcIjtcclxuXHJcbmNvbnN0IERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7bG9nb31cIik7XHJcbiAgaGVpZ2h0OiA5MDBweDtcclxuYDtcclxuXHJcbmNvbnN0IEEgPSBzdHlsZWQuYWBcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IGxhd25ncmVlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogZGFya3JlZDtcclxuICB9XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9QYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8RGl2PlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8QSBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcWR5TDBtWGFmb3dJODg4c1BKTHlNN3l1aFlKTlI3MGIvdmlldz91c3A9c2hhcmluZ1wiPjxCaUxpbmtFeHRlcm5hbC8+XHJcbiAgICAgICAgICAgINCh0LrQu9Cw0LQg0L7RgNCz0LDQvdGW0LfQsNGG0ZbQudC90L7Qs9C+INC60L7QvNGW0YLQtdGC0YMgPC9BPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrYTdHdVZjMG1oSHpSNWpxMXFoVENIbmxOYTBIY1htQi92aWV3P3VzcD1zaGFyaW5nXCI+PEJpTGlua0V4dGVybmFsLz7Qn9C+0LvQvtC20LXQvdC90Y88L0E+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPEEgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZzejB1dTU2NEJsN2w5WS1icU1PXy1nTFBxVHVEQllDL3ZpZXc/dXNwPXNoYXJpbmdcIj48QmlMaW5rRXh0ZXJuYWwvPtCR0YDQvtGI0YPRgNCwPC9BPlxyXG4gICAgPC9EaXY+KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7UmVzdWx0c0ZpbHRlcn0gZnJvbSBcIi4vUmVzdWx0c0ZpbHRlclwiO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7UmVndWxhckhlYWRlcn0gZnJvbSBcIi4vUmVndWxhckhlYWRlclwiO1xyXG5pbXBvcnQge0luZm9QYWdlfSBmcm9tIFwiLi9JbmZvUGFnZVwiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vMTE2MzAyMy5wbmdcIjtcclxuXHJcbmNvbnN0IE1haW5TZWN0aW9uRmxleCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtsb2dvfVwiKTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluU2VjdGlvbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjYXJkcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhcmRzKTtcclxuICAgIGNvbnN0IGlzRGF0YUluUGxhY2UgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5pc0RhdGFJblBsYWNlKTtcclxuICAgIGNvbnN0IGNhcmRDb3VudCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhcmRDb3VudCk7XHJcbiAgICBjb25zdCBzZWN0aW9uc0ZvckZpbHRlciA9IFtg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImAsIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFwiYCwgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCa0L7QvdGG0LXRgNGC0LzQtdC50YHRgtC10YBcImAsYNCj0YHRliDQstGW0LTQtdC+YCxg0J/RgNC+INC60L7QvdC60YPRgNGBYF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8UmVndWxhckhlYWRlciBjYXJkQ291bnQ9e2NhcmRDb3VudH0vPlxyXG4gICAgICAgICAgICA8UmVzdWx0c0ZpbHRlciBzZWN0aW9ucz17c2VjdGlvbnNGb3JGaWx0ZXJ9Lz5cclxuICAgICAgICAgICAge2lzRGF0YUluUGxhY2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8TWFpblNlY3Rpb25GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXJkcy5tYXAoY2FyZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjYXJkLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1VybD17Y2FyZC52aWRlb1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvc2l0aW9uPXtjYXJkLmNvbXBvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXJkLmlkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9PC9NYWluU2VjdGlvbkZsZXg+KSA6ICg8SW5mb1BhZ2UvPil9PC8+KTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtBaU91dGxpbmVGaWxlU2VhcmNoLCBIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zXCI7XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuaW5wdXRgXHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgd2lkdGg6IDE1JTtcclxuIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gIH1gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaW5wdXRDb2xvciB8fCBcInBhbGV2aW9sZXRyZWRcIn07XHJcbmA7XHJcblxyXG5cclxuY29uc3QgSW5wdXRTdHlsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRXcmFwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuYFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuYDtcclxuXHJcbmNvbnN0IEVycm9yID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtgXHJcblxyXG5jb25zdCBXYXJuID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogeWVsbG93O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtgXHJcblxyXG5leHBvcnQgY29uc3QgUmVndWxhckhlYWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaEZpZWxkID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmVycm9yKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHtoZWlnaHQsIHdpZHRofSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xyXG4gICAgICAgIGxldCBzdHIgPSBTdHJpbmcoc2VhcmNoRmllbGQuY3VycmVudC52YWx1ZSk7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPCAzIHx8IHN0ci5pbmNsdWRlcyhcIiBcIikpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiRVJST1JcIiwgbXNnOiBcItCR0YPQtNCx0Ywg0LvQsNGB0LrQsCDQstCy0LXQtNGW0YLRjCDQsdGW0LvRjNGI0LUgMyDRgdC40LzQstC+0LvRltCyINGWINC90LUg0LLQuNC60L7RgNC40YHRgtC+0LLRg9C50YLQtSDQv9GA0L7QsdGW0LtcIn0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIlNFQVJDSFwiLCBxdWVyeTogc3RyfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBoYW5kbGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPElucHV0V3JhcGVyPlxyXG4gICAgICAgICAgICAgICAgPElucHV0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4+PEFpT3V0bGluZUZpbGVTZWFyY2gvPtCf0L7RiNGD0Log0LLRltC00LXQviDQv9C+INC/0YDRltC30LLQuNGJ0YMg0YPRh9Cw0YHQvdC40LrQsCA8L1N0eWxlZFNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfSByZWY9e3NlYXJjaEZpZWxkfSB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTRltGC0Ywg0L/RgNGW0LfQstC40YnQtSDRg9GH0LDRgdC90LjQutCwLi4uXCIgaW5wdXRDb2xvcj1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cItCf0L7RiNGD0LpcIiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17aGFuZGxlcn0vPlxyXG4gICAgICAgICAgICA8L0lucHV0V3JhcGVyPlxyXG4gICAgICAgICAgICB7ZXJyb3IgIT09IFwiXCIgPyA8RXJyb3I+PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz57ZXJyb3J9PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz48L0Vycm9yPiA6IG51bGx9XHJcbiAgICAgICAgICAgIHtwcm9wcy5jYXJkQ291bnQgPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgPFdhcm4+PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz7QstGW0LTQtdC+INC90LUg0LfQvdCw0LnQtNC10L3RljxIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZS8+PC9XYXJuPiA6IG51bGx9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCwge2tleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtGYUZvbGRlciwgRmFVbml2ZXJzaXR5fSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XHJcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi9ob29rcy9Vc2VXaW5kb3dEaW1lbnNpb25zXCI7XHJcblxyXG5jb25zdCBGaWx0ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO2A7XHJcblxyXG5jb25zdCBGaWx0ZXJTZWN0aW9uID0gc3R5bGVkKEZpbHRlckNvbnRhaW5lcilgXHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZTtcclxuICBjb2xvcjogbGF3bmdyZWVuO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IGRhcmtyZWQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRGl2VGhpbkxpbmUgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogZ3JheSBzb2xpZCAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBoZWlnaHQ6IDIlO1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IGdyb3dfMCA9IGtleWZyYW1lc2BcclxuICAwJSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XHJcbiAgfVxyXG4gIDAlIHtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy5sZWZ0fTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBncm93XzEgPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xyXG4gIH1cclxuICAwJSB7XHJcbiAgICBsZWZ0OiAxcHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH07XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFRoaW5MaW5lSW5uZXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcclxuICBsZWZ0OiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IHJlZCBzb2xpZCAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGhlaWdodDogMSU7XHJcbiAgYW5pbWF0aW9uOiAke3Byb3BzID0+IChwcm9wcy5hbmltYXRpb24gJSAyID09PSAwKSA/IGdyb3dfMCA6IGdyb3dfMX0gMC41cyBsaW5lYXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUmVzdWx0c0ZpbHRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzZWN0aW9ucyxdID0gdXNlU3RhdGUocHJvcHMuc2VjdGlvbnMpO1xyXG5cclxuICAgIGNvbnN0IFtyZWRMaW5lV2lkdGgsIHNldFJlZExpbmVXaWR0aF0gPSB1c2VTdGF0ZShcIjEwcHhcIik7XHJcbiAgICBjb25zdCBbcmVkTGluZUxlZnQsIHNldFJlZExpbmVMZWZ0XSA9IHVzZVN0YXRlKFwiMTBweFwiKTtcclxuICAgIGNvbnN0IFthbmltYXRpb24sIHNldEFuaW1hdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHtoZWlnaHQsIHdpZHRofSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcclxuICAgIGNvbnN0IG1hcmtlZFNlY3Rpb25SZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgICAvL2hhbmRsaW5nIHJlZExpbmUgb24gcmVzaXplXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJlUmVuZGVyUmVkTGluKHt0YXJnZXQ6bWFya2VkU2VjdGlvblJlZi5jdXJyZW50fSlcclxuICAgIH0sIFt3aWR0aF0pO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBmdW5jdGlvbiByZVJlbmRlclJlZExpbihldmVudCkge1xyXG4gICAgICAgIG1hcmtlZFNlY3Rpb25SZWYuY3VycmVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBsZXQgY3VycmVudFNlY3Rpb25XaWR0aCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgICAgICBsZXQgY3VycmVudFNlY3Rpb25MZWZ0ID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSAxMDtcclxuICAgICAgICBzZXRSZWRMaW5lV2lkdGgoY3VycmVudFNlY3Rpb25XaWR0aCArIFwicHhcIik7XHJcbiAgICAgICAgc2V0UmVkTGluZUxlZnQoY3VycmVudFNlY3Rpb25MZWZ0ICsgXCJweFwiKTtcclxuICAgICAgICBsZXQgY291bnRlciA9IGFuaW1hdGlvbiArIDE7XHJcbiAgICAgICAgc2V0QW5pbWF0aW9uKGNvdW50ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uRmlsdGVyU2VjdGlvbkNsaWNrKHNlbGVjdGVkU2VjdGlvbiwgZXZlbnQpIHtcclxuICAgICAgICByZVJlbmRlclJlZExpbihldmVudCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU2VjdGlvblN0cmluZyA9IHNlbGVjdGVkU2VjdGlvbi5zZWN0aW9uO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkU2VjdGlvblN0cmluZyk7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZFNlY3Rpb25TdHJpbmcpIHtcclxuICAgICAgICAgICAgY2FzZSBg0KPRgdGWINCy0ZbQtNC10L5gOlxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiQUxMXCJ9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlwiYDpcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTFcIn0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQsNC90YHQsNC80LHQu9GMXCJgOlxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZ3JvdXAtMlwifSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFwiYDpcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTNcIn0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlckluZm9QYWdlKGV2ZW50KSB7XHJcbiAgICAgICAgcmVSZW5kZXJSZWRMaW4oZXZlbnQpO1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIklORk9fUEFHRVwifSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlbmRlcmVkU2VjdGlvbnMgPSBzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcclxuICAgICAgICBzZWN0aW9uID09PSBcItCf0YDQviDQutC+0L3QutGD0YDRgVwiID9cclxuICAgICAgICAgICAgPEZpbHRlclNlY3Rpb24gIG9uQ2xpY2s9e3JlbmRlckluZm9QYWdlfSBrZXk9e3NlY3Rpb259PiA8RmFVbml2ZXJzaXR5Lz57c2VjdGlvbn0gPC9GaWx0ZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICA6IDxGaWx0ZXJTZWN0aW9uICByZWY9e21hcmtlZFNlY3Rpb25SZWZ9IG9uQ2xpY2s9eyhlKSA9PiBvbkZpbHRlclNlY3Rpb25DbGljayh7c2VjdGlvbn0sIGUpfSBrZXk9e3NlY3Rpb259PiA8RmFGb2xkZXIvPntzZWN0aW9ufTwvRmlsdGVyU2VjdGlvbj5cclxuICAgICkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckNvbnRhaW5lciBjaGlsZHJlbj17cmVuZGVyZWRTZWN0aW9uc30vPlxyXG4gICAgICAgICAgICA8L1N0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyPlxyXG4gICAgICAgICAgICA8RGl2VGhpbkxpbmU+PFRoaW5MaW5lSW5uZXJEaXYgd2lkdGg9e3JlZExpbmVXaWR0aH0gbGVmdD17cmVkTGluZUxlZnR9IGFuaW1hdGlvbj17YW5pbWF0aW9ufS8+PC9EaXZUaGluTGluZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kb3dEaW1lbnNpb25zKCkge1xyXG4gICAgY29uc3QgeyBpbm5lcldpZHRoOiB3aWR0aCwgaW5uZXJIZWlnaHQ6IGhlaWdodCB9ID0gd2luZG93O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHRcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVdpbmRvd0RpbWVuc2lvbnMoKSB7XHJcbiAgICBjb25zdCBbd2luZG93RGltZW5zaW9ucywgc2V0V2luZG93RGltZW5zaW9uc10gPSB1c2VTdGF0ZShnZXRXaW5kb3dEaW1lbnNpb25zKCkpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICAgICAgICBzZXRXaW5kb3dEaW1lbnNpb25zKGdldFdpbmRvd0RpbWVuc2lvbnMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHdpbmRvd0RpbWVuc2lvbnM7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XHJcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXJnZXQnKSk7XHJcbiIsImltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J1xyXG5cclxuY29uc3QgZ3JvdXAxID0gYNCf0LXRgNC10LzQvtC20YbRliDQvdC+0LzRltC90LDRhtGW0ZcgXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlwiYDtcclxuY29uc3QgZ3JvdXAyID0gYNCf0LXRgNC10LzQvtC20YbRliDQvdC+0LzRltC90LDRhtGW0ZcgXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFwiYDtcclxuY29uc3QgZ3JvdXAzID0gYNCf0LXRgNC10LzQvtC20YbRliDQvdC+0LzRltC90LDRhtGW0ZcgXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXCJgO1xyXG5cclxuY29uc3QgbXlDYXJkcyA9IFt7XHJcbiAgICBpZDogXCJjYXJkLTFcIixcclxuICAgIG5hbWU6IFwi0KHQtdC80ZbQutC+0LIg0JAu0KFcIixcclxuICAgIGNvbXBvc2l0aW9uOiAn0KLQtdGB0YLQvtCy0LAg0YPQstC10YDRgtGO0YDQsCDQkdC10YLRhdC+0LLQtdC90LAgXCLQmtCw0YfQutCwINC20L7QstGC0LAg0LIg0L7Qt9C10YDRliDRgtC+0L3Rg9C70LBcIicsXHJcbiAgICB2aWRlb1VybDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZajhzNzhCamxoYzYzbmdpcUJwclppTVBJNzRHaE4wRy9wcmV2aWV3XCIsXHJcbiAgICBncm91cDogZ3JvdXAxXHJcbn0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiY2FyZC0yXCIsXHJcbiAgICAgICAgbmFtZTogXCLQkdGD0YbRj9C6INCXLtCGXCIsXHJcbiAgICAgICAgY29tcG9zaXRpb246ICfQotC10YHRgtC+0LLQsCDRg9Cy0LXRgNGC0Y7RgNCwINCR0LXRgtGF0L7QstC10L3QsCBcItCa0LDRh9C60LAg0LbQvtCy0YLQsCDQsiDQvtC30LXRgNGWINGC0L7QvdGD0LvQsFwiJyxcclxuICAgICAgICB2aWRlb1VybDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZajhzNzhCamxoYzYzbmdpcUJwclppTVBJNzRHaE4wRy9wcmV2aWV3XCIsXHJcbiAgICAgICAgZ3JvdXA6IGdyb3VwMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJjYXJkLTNcIixcclxuICAgICAgICBuYW1lOiBcItCG0LLQsNC90L7QstCwINCiLtCbXCIsXHJcbiAgICAgICAgY29tcG9zaXRpb246IFwi0KLQtdGB0YLQvtCy0LAg0YPQstC10YDRgtGO0YDQsCDQkdC10YLRhdC+0LLQtdC90LAgJ9Ca0LDRh9C60LAg0LbQvtCy0YLQsCDQsiDQvtC30LXRgNGWINGC0L7QvdGD0LvQsCdcIixcclxuICAgICAgICB2aWRlb1VybDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZajhzNzhCamxoYzYzbmdpcUJwclppTVBJNzRHaE4wRy9wcmV2aWV3XCIsXHJcbiAgICAgICAgZ3JvdXA6IGdyb3VwM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJjYXJkLTRcIixcclxuICAgICAgICBuYW1lOiBcItCa0YPQt9GW0L3QsCDQoi7Qm1wiLFxyXG4gICAgICAgIGNvbXBvc2l0aW9uOiBcItCi0LXRgdGC0L7QstCwINGD0LLQtdGA0YLRjtGA0LAg0JHQtdGC0YXQvtCy0LXQvdCwICfQmtCw0YfQutCwINC20L7QstGC0LAg0LIg0L7Qt9C10YDRliDRgtC+0L3Rg9C70LAnXCIsXHJcbiAgICAgICAgdmlkZW9Vcmw6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWWo4czc4QmpsaGM2M25naXFCcHJaaU1QSTc0R2hOMEcvcHJldmlld1wiLFxyXG4gICAgICAgIGdyb3VwOiBncm91cDNcclxuICAgIH1dO1xyXG5cclxuZnVuY3Rpb24gZmlsbVJlZHVjZXIoc3RhdGUgPSB7Y2FyZENvdW50OiBteUNhcmRzLmxlbmd0aCwgY2FyZHM6IG15Q2FyZHMsIGlzRGF0YUluUGxhY2U6IHRydWUsIGVycm9yOlwiXCJ9LCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdJTkZPX1BBR0UnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiAtMSxcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBbXSxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdBTEwnOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4g0KPRgdGWINCy0ZbQtNC10L5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbXlDYXJkcyxcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG15Q2FyZHMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdncm91cC0xJzpcclxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDEpLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnZ3JvdXAtMic6XHJcbiAgICAgICAgICAgIGxldCBuZXdDYXJkczEgPSAgbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDIpLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMxLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHMxLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdncm91cC0zJzpcclxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzMiA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5ncm91cCA9PT0gZ3JvdXAzKS5zbGljZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZHM6IG5ld0NhcmRzMixcclxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzMi5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ1NFQVJDSCc6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGA+INCf0L7RiNGD0LpgKTtcclxuICAgICAgICAgICAgbGV0IG5ld0NhcmRzMyA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChhY3Rpb24ucXVlcnkudG9Mb3dlckNhc2UoKSkpLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMzLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbmV3Q2FyZHMzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdFUlJPUic6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGA+INCf0L7QvNC40LvQutCwYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6YWN0aW9uLm1zZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBteUNhcmRzLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbXlDYXJkcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjpcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNhcmRTdG9yZSA9IGNyZWF0ZVN0b3JlKGZpbG1SZWR1Y2VyKTtcclxuXHJcbmNhcmRTdG9yZS5zdWJzY3JpYmUoKCkgPT5cclxuICAgIGNvbnNvbGUubG9nKFwiRmlsbXNTdG9yZSBzdGF0ZSB3YXMgY2hhbmdlZCwgbnVtYmVyIG9mIGNhcmRzOiBcIiArIGNhcmRTdG9yZS5nZXRTdGF0ZSgpLmNhcmRDb3VudClcclxuKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9