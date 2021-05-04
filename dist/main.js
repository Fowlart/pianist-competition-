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
/* harmony import */ var _components_HeadersComponents_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HeadersComponents/Header */ "./src/components/HeadersComponents/Header.jsx");
/* harmony import */ var _screens_MainSection_MainSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/MainSection/MainSection */ "./src/screens/MainSection/MainSection.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_CardStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/CardStore */ "./src/store/CardStore.jsx");
/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! miragejs */ "./node_modules/miragejs/dist/mirage-esm.js");





 //Example: fake API

Object(miragejs__WEBPACK_IMPORTED_MODULE_5__["createServer"])({
  routes() {
    this.get("/api/films", () => [{
      id: "card-1",
      name: "Артур Семіков",
      composition: 'Тестова увертюра Бетховена "Качка жовта в озері тонула"',
      videoUrl: "https://drive.google.com/file/d/1ZS9fdW8I1lxX9lHHEXPobc576x_XShTX/preview"
    }, {
      id: "card-2",
      name: "Артур Семіков",
      composition: 'Тестова увертюра Бетховена "Качка жовта в озері тонула"',
      videoUrl: "https://drive.google.com/file/d/1ZS9fdW8I1lxX9lHHEXPobc576x_XShTX/preview"
    }, {
      id: "card-3",
      name: "Артур Семіков",
      composition: "Тестова увертюра Бетховена 'Качка жовта в озері тонула'",
      videoUrl: "https://drive.google.com/file/d/1ZS9fdW8I1lxX9lHHEXPobc576x_XShTX/preview"
    }]);
  }

});

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: _store_CardStore__WEBPACK_IMPORTED_MODULE_4__["cardStore"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeadersComponents_Header__WEBPACK_IMPORTED_MODULE_1__["Header"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens_MainSection_MainSection__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/api_client/apiClient.jsx":
/*!**************************************!*\
  !*** ./src/api_client/apiClient.jsx ***!
  \**************************************/
/*! exports provided: fetchMovies, fetchMoviesFiltered */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMovies", function() { return fetchMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMoviesFiltered", function() { return fetchMoviesFiltered; });
function fetchMovies() {
  const fetchFilms = (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const fetchFilmsUrl = "http://localhost:8000/api/films";
    fetch(fetchFilmsUrl, requestOptions).then(body => body.json()).then(films => {
      dispatch({
        type: 'ADD_INITIAL_DATA',
        payload: films,
        isDataInPlace: true
      }); // Check the updated store state after dispatching

      const allFilms = getState().films;
      console.log(allFilms);
    });
  };

  return fetchFilms;
}
function fetchMoviesFiltered(filteredSection) {
  const fetchFilmsFiltered = (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const fetchFilmsUrl = "http://localhost:8000/api/films";
    fetch(fetchFilmsUrl, requestOptions).then(body => body.json()).then(films => {
      let filteredFilms = films.filter(film => film.genre === filteredSection);
      dispatch({
        type: 'ADD_INITIAL_DATA',
        payload: filteredFilms,
        isDataInPlace: true
      });
    });
  };

  return fetchFilmsFiltered;
}

/***/ }),

/***/ "./src/components/HeadersComponents/Header.jsx":
/*!*****************************************************!*\
  !*** ./src/components/HeadersComponents/Header.jsx ***!
  \*****************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RegularHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegularHeader */ "./src/components/HeadersComponents/RegularHeader.jsx");


const Header = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegularHeader__WEBPACK_IMPORTED_MODULE_1__["RegularHeader"], null);
};

/***/ }),

/***/ "./src/components/HeadersComponents/RegularHeader.jsx":
/*!************************************************************!*\
  !*** ./src/components/HeadersComponents/RegularHeader.jsx ***!
  \************************************************************/
/*! exports provided: RegularHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularHeader", function() { return RegularHeader; });
/* harmony import */ var _UI_Input_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/Input.styled */ "./src/components/UI/Input.styled.jsx");
/* harmony import */ var _UI_Button_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Button.styled */ "./src/components/UI/Button.styled.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");





const InputStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  font-size: large;
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const InputWraper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  height: 60px;
  background-color: #232323;
`;
const StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span`
  color: white;
`;
const RegularHeader = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputWraper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputStyle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledSpan, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_4__["AiOutlineFileSearch"], null), "\u041F\u043E\u0448\u0443\u043A \u0432\u0456\u0434\u0435\u043E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_UI_Input_styled__WEBPACK_IMPORTED_MODULE_0__["default"], {
    type: "text",
    placeholder: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0441\u043B\u043E\u0432\u043E \u0434\u043B\u044F \u043F\u043E\u0448\u0443\u043A\u0443...",
    inputColor: "black"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_UI_Button_styled__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "submit",
    value: "\u041F\u043E\u0448\u0443\u043A"
  })));
};

/***/ }),

/***/ "./src/components/MainSectionComponents/Card.jsx":
/*!*******************************************************!*\
  !*** ./src/components/MainSectionComponents/Card.jsx ***!
  \*******************************************************/
/*! exports provided: FilmWrapper, FilmInfo, Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmWrapper", function() { return FilmWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmInfo", function() { return FilmInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");



const FilmWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  font-size: 19px;
  font-family: "Segoe UI", serif;
  font-stretch: ultra-expanded;
  color: black;
    // background-image: url("${props => props.img}");
  width: 650px;
  height: 520px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between`;
const FilmInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Card = props => {
  const [name] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.name);
  const [composition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.composition);
  const [videoUrl] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.videoUrl);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilmWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    src: videoUrl,
    width: "640",
    height: "480"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilmInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BsFillPersonFill"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["FaBookOpen"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, composition))));
};

/***/ }),

/***/ "./src/components/MainSectionComponents/ResultsFilter.jsx":
/*!****************************************************************!*\
  !*** ./src/components/MainSectionComponents/ResultsFilter.jsx ***!
  \****************************************************************/
/*! exports provided: ResultsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsFilter", function() { return ResultsFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _api_client_apiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api_client/apiClient */ "./src/api_client/apiClient.jsx");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");





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
    color: red;
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
  border: solid 0px #232323;
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
const StyledSelect = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].select`
  color: white;
  background-color: #232323;
  font-size: 15px;
  font-family: "Segoe UI", serif;
`;
const StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  position: relative;
  font-size: 15px;
  font-family: "Segoe UI", serif;
  color: gray;
  margin-top: 4%;
  margin-right: 30px;
`;
const SortingOptionsHolder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const ResultsFilter = props => {
  const [sections] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.sections);
  const refToContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const selectedSortOption = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const [redLineWidth, setRedLineWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("10px");
  const [redLineLeft, setRedLineLeft] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("10px");
  const [animation, setAnimation] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const films = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.films);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  function onFilterSectionClick(selectedSection, event) {
    let currentSectionWidth = event.target.getBoundingClientRect().width;
    let currentSectionLeft = event.target.getBoundingClientRect().left - 10;
    setRedLineWidth(currentSectionWidth + "px");
    setRedLineLeft(currentSectionLeft + "px");
    let counter = animation + 1;
    setAnimation(counter);
    let selectedGenreString = selectedSection.section.toLowerCase();
    const fetchFilms = Object(_api_client_apiClient__WEBPACK_IMPORTED_MODULE_3__["fetchMovies"])();
    const fetchFilmsFiltered = Object(_api_client_apiClient__WEBPACK_IMPORTED_MODULE_3__["fetchMoviesFiltered"])(selectedSection);

    if (selectedGenreString === "усі відео") {
      dispatch(fetchFilms);
    } else {
      dispatch(fetchFilmsFiltered);
    }
  }

  let renderedSections = sections.map(section => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilterSection, {
    onClick: event => {
      onFilterSectionClick({
        section
      }, event);
    },
    key: section,
    keyForSearch: section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_4__["FaFolder"], null), section));

  function styledSelectChangeHandler() {
    switch (selectedSortOption.current.value) {
      case 'RELEASE DATE':
        console.log('RELEASE DATE sorting...');
        let newFilms1 = films.sort((a, b) => {
          if (a.release < b.release) {
            return 1;
          }

          if (a.release > b.release) {
            return -1;
          }

          return 0;
        }).slice();
        dispatch({
          type: "ADD_INITIAL_DATA",
          payload: newFilms1,
          isDataInPlace: true
        });
        return;

      case 'ALPHABETICAL':
        console.log('ALPHABETICAL sorting...');
        let newFilms2 = films.sort((a, b) => {
          let nameA = a.name.toUpperCase(); // ignore upper and lowercase

          let nameB = b.name.toUpperCase();

          if (nameA < nameB) {
            return -1;
          }

          if (nameA > nameB) {
            return 1;
          }

          return 0;
        }).slice();
        dispatch({
          type: "ADD_INITIAL_DATA",
          payload: newFilms2,
          isDataInPlace: true
        });
        return;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledResultsFilterWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilterContainer, {
    ref: refToContainer,
    children: renderedSections
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SortingOptionsHolder, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSpan, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_4__["AiOutlineFilter"], null), "\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSelect, {
    id: "language-selector",
    name: "language",
    ref: selectedSortOption,
    onChange: styledSelectChangeHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "RELEASE DATE"
  }, "\u0414\u0430\u0442\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "ALPHABETICAL"
  }, "\u0410\u043B\u0444\u0430\u0432\u0456\u0442")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DivThinLine, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThinLineInnerDiv, {
    width: redLineWidth,
    left: redLineLeft,
    animation: animation
  })));
};

/***/ }),

/***/ "./src/components/UI/Button.styled.jsx":
/*!*********************************************!*\
  !*** ./src/components/UI/Button.styled.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input`
font-size: medium;
width: 20%;
height: 90%;
background-color: red;
color: white;
transition: all 0.5s;
:hover {
  color: darkred;
}`;
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/UI/Input.styled.jsx":
/*!********************************************!*\
  !*** ./src/components/UI/Input.styled.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input`
  font-size: medium;
  flex-direction: column;
  color: ${props => props.inputColor || "palevioletred"};
  `;
/* harmony default export */ __webpack_exports__["default"] = (Input);

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

/***/ "./src/screens/MainSection/MainSection.jsx":
/*!*************************************************!*\
  !*** ./src/screens/MainSection/MainSection.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_MainSectionComponents_ResultsFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MainSectionComponents/ResultsFilter */ "./src/components/MainSectionComponents/ResultsFilter.jsx");
/* harmony import */ var _components_MainSectionComponents_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MainSectionComponents/Card */ "./src/components/MainSectionComponents/Card.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _api_client_apiClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api_client/apiClient */ "./src/api_client/apiClient.jsx");






const MainSectionFlex = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: bisque;
`;
const fetchFilms = Object(_api_client_apiClient__WEBPACK_IMPORTED_MODULE_5__["fetchMovies"])();

const MainSection = () => {
  //example: the way to retrieve data from redux store
  const films = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.films); //example: the way to get dispatcher for redux

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  let sectionsForFilter = ['Усі відео', 'Переможці номінації "Фортепіано соло"', 'Переможці номінації "Фортепіанний ансамбль"', 'Переможці номінації "Концертмейстер"'];

  function deleteCard(cardId) {
    dispatch({
      type: "REMOVE_FILM",
      filmId: cardId
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainSectionComponents_ResultsFilter__WEBPACK_IMPORTED_MODULE_2__["ResultsFilter"], {
    sections: sectionsForFilter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainSectionFlex, null, films.map(card => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainSectionComponents_Card__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    deleteCardHandler: deleteCard,
    name: card.name,
    videoUrl: card.videoUrl,
    composition: card.composition,
    key: card.id
  }))));
};

const OopsDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  background-color: black;
  color: red;
  text-align: center;`;

const OopsText = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OopsDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, " Oops, something went wrong ... We are doing our best to fix the issue ! "));
};

const ErrorBoundaryMainSection = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const isDataInPlace = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.isDataInPlace);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(fetchFilms);
  }, []);
  return isDataInPlace ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainSection, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OopsText, null);
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundaryMainSection);

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

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */

function filmReducer(state = {
  filmCount: 0,
  films: [],
  isDataInPlace: false
}, action) {
  switch (action.type) {
    case 'ADD_INITIAL_DATA':
      return { ...state,
        filmCount: action.payload.length,
        films: action.payload,
        isDataInPlace: action.isDataInPlace
      };

    default:
      return state;
  }
}

const asyncFunctionMiddleware = filmsStore => next => action => {
  // If the "action" is actually a function instead...
  if (typeof action === 'function') {
    // then call the function and pass `dispatch` and `getState` as arguments
    return action(filmsStore.dispatch, filmsStore.getState);
  } // Otherwise, it's a normal action - send it onwards


  return next(action);
};

const middlewareEnhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(asyncFunctionMiddleware); // Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

const cardStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(filmReducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(middlewareEnhancer, window.devToolsExtension ? window.devToolsExtension() : f => f)); // You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

cardStore.subscribe(() => console.log("FilmsStore state was changed, number of cards: " + cardStore.getState().filmCount));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaV9jbGllbnQvYXBpQ2xpZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXJzQ29tcG9uZW50cy9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlcnNDb21wb25lbnRzL1JlZ3VsYXJIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5TZWN0aW9uQ29tcG9uZW50cy9DYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbkNvbXBvbmVudHMvUmVzdWx0c0ZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uLnN0eWxlZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvSW5wdXQuc3R5bGVkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL01haW5TZWN0aW9uL01haW5TZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvQ2FyZFN0b3JlLmpzeCJdLCJuYW1lcyI6WyJjcmVhdGVTZXJ2ZXIiLCJyb3V0ZXMiLCJnZXQiLCJpZCIsIm5hbWUiLCJjb21wb3NpdGlvbiIsInZpZGVvVXJsIiwiQXBwIiwiY2FyZFN0b3JlIiwiZmV0Y2hNb3ZpZXMiLCJmZXRjaEZpbG1zIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwicmVkaXJlY3QiLCJmZXRjaEZpbG1zVXJsIiwiZmV0Y2giLCJ0aGVuIiwiYm9keSIsImpzb24iLCJmaWxtcyIsInR5cGUiLCJwYXlsb2FkIiwiaXNEYXRhSW5QbGFjZSIsImFsbEZpbG1zIiwiY29uc29sZSIsImxvZyIsImZldGNoTW92aWVzRmlsdGVyZWQiLCJmaWx0ZXJlZFNlY3Rpb24iLCJmZXRjaEZpbG1zRmlsdGVyZWQiLCJmaWx0ZXJlZEZpbG1zIiwiZmlsdGVyIiwiZmlsbSIsImdlbnJlIiwiSGVhZGVyIiwiSW5wdXRTdHlsZSIsInN0eWxlZCIsImRpdiIsIklucHV0V3JhcGVyIiwiU3R5bGVkU3BhbiIsInNwYW4iLCJSZWd1bGFySGVhZGVyIiwiRmlsbVdyYXBwZXIiLCJwcm9wcyIsImltZyIsIkZpbG1JbmZvIiwiQ2FyZCIsInVzZVN0YXRlIiwiRmlsdGVyQ29udGFpbmVyIiwiRmlsdGVyU2VjdGlvbiIsIkRpdlRoaW5MaW5lIiwiU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXIiLCJncm93XzAiLCJrZXlmcmFtZXMiLCJ3aWR0aCIsImxlZnQiLCJncm93XzEiLCJUaGluTGluZUlubmVyRGl2IiwiYW5pbWF0aW9uIiwiU3R5bGVkU2VsZWN0Iiwic2VsZWN0IiwiU29ydGluZ09wdGlvbnNIb2xkZXIiLCJSZXN1bHRzRmlsdGVyIiwic2VjdGlvbnMiLCJyZWZUb0NvbnRhaW5lciIsInVzZVJlZiIsInNlbGVjdGVkU29ydE9wdGlvbiIsInJlZExpbmVXaWR0aCIsInNldFJlZExpbmVXaWR0aCIsInJlZExpbmVMZWZ0Iiwic2V0UmVkTGluZUxlZnQiLCJzZXRBbmltYXRpb24iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlRGlzcGF0Y2giLCJvbkZpbHRlclNlY3Rpb25DbGljayIsInNlbGVjdGVkU2VjdGlvbiIsImV2ZW50IiwiY3VycmVudFNlY3Rpb25XaWR0aCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImN1cnJlbnRTZWN0aW9uTGVmdCIsImNvdW50ZXIiLCJzZWxlY3RlZEdlbnJlU3RyaW5nIiwic2VjdGlvbiIsInRvTG93ZXJDYXNlIiwicmVuZGVyZWRTZWN0aW9ucyIsIm1hcCIsInN0eWxlZFNlbGVjdENoYW5nZUhhbmRsZXIiLCJjdXJyZW50IiwidmFsdWUiLCJuZXdGaWxtczEiLCJzb3J0IiwiYSIsImIiLCJyZWxlYXNlIiwic2xpY2UiLCJuZXdGaWxtczIiLCJuYW1lQSIsInRvVXBwZXJDYXNlIiwibmFtZUIiLCJCdXR0b24iLCJpbnB1dCIsIklucHV0IiwiaW5wdXRDb2xvciIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk1haW5TZWN0aW9uRmxleCIsIk1haW5TZWN0aW9uIiwic2VjdGlvbnNGb3JGaWx0ZXIiLCJkZWxldGVDYXJkIiwiY2FyZElkIiwiZmlsbUlkIiwiY2FyZCIsIk9vcHNEaXYiLCJPb3BzVGV4dCIsIkVycm9yQm91bmRhcnlNYWluU2VjdGlvbiIsInVzZUVmZmVjdCIsImZpbG1SZWR1Y2VyIiwiZmlsbUNvdW50IiwiYWN0aW9uIiwibGVuZ3RoIiwiYXN5bmNGdW5jdGlvbk1pZGRsZXdhcmUiLCJmaWxtc1N0b3JlIiwibmV4dCIsIm1pZGRsZXdhcmVFbmhhbmNlciIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZSIsIndpbmRvdyIsImRldlRvb2xzRXh0ZW5zaW9uIiwiZiIsInN1YnNjcmliZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUFVLElBQUlDLElBQUksSUFBSUosTUFBTSxJQUFJO0FBQzVEO0FBQ0EsTUFBSSxPQUFPQSxNQUFQLEtBQWtCLFVBQXRCLEVBQWtDO0FBQzlCO0FBQ0EsV0FBT0EsTUFBTSxDQUFDRyxVQUFVLENBQUNuSCxRQUFaLEVBQXNCbUgsVUFBVSxDQUFDbEgsUUFBakMsQ0FBYjtBQUNILEdBTDJELENBTTVEOzs7QUFDQSxTQUFPbUgsSUFBSSxDQUFDSixNQUFELENBQVg7QUFDSCxDQVJEOztBQVVBLE1BQU1LLGtCQUFrQixHQUFHQyw2REFBZSxDQUFDSix1QkFBRCxDQUExQyxDLENBR0E7QUFDQTs7QUFDTyxNQUFNckgsU0FBUyxHQUFHMEgseURBQVcsQ0FBQ1QsV0FBRCxFQUFjVSxxREFBTyxDQUFDSCxrQkFBRCxFQUNyREksTUFBTSxDQUFDQyxpQkFBUCxHQUEyQkQsTUFBTSxDQUFDQyxpQkFBUCxFQUEzQixHQUF3REMsQ0FBQyxJQUFJQSxDQURSLENBQXJCLENBQTdCLEMsQ0FHUDtBQUNBO0FBQ0E7O0FBQ0E5SCxTQUFTLENBQUMrSCxTQUFWLENBQW9CLE1BQ2hCN0csT0FBTyxDQUFDQyxHQUFSLENBQVksb0RBQW9EbkIsU0FBUyxDQUFDSSxRQUFWLEdBQXFCOEcsU0FBckYsQ0FESixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzeFwiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtIZWFkZXJ9IGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXJzQ29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgRXJyb3JCb3VuZGFyeU1haW5TZWN0aW9uIGZyb20gJy4vc2NyZWVucy9NYWluU2VjdGlvbi9NYWluU2VjdGlvbic7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2NhcmRTdG9yZX0gZnJvbSBcIi4vc3RvcmUvQ2FyZFN0b3JlXCI7XHJcbmltcG9ydCB7Y3JlYXRlU2VydmVyfSBmcm9tIFwibWlyYWdlanNcIjtcclxuXHJcbi8vRXhhbXBsZTogZmFrZSBBUElcclxuY3JlYXRlU2VydmVyKHtcclxuICAgIHJvdXRlcygpIHtcclxuICAgICAgICB0aGlzLmdldChcIi9hcGkvZmlsbXNcIiwgKCkgPT4gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJjYXJkLTFcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwi0JDRgNGC0YPRgCDQodC10LzRltC60L7QslwiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9zaXRpb246ICfQotC10YHRgtC+0LLQsCDRg9Cy0LXRgNGC0Y7RgNCwINCR0LXRgtGF0L7QstC10L3QsCBcItCa0LDRh9C60LAg0LbQvtCy0YLQsCDQsiDQvtC30LXRgNGWINGC0L7QvdGD0LvQsFwiJyxcclxuICAgICAgICAgICAgICAgIHZpZGVvVXJsOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVpTOWZkVzhJMWx4WDlsSEhFWFBvYmM1NzZ4X1hTaFRYL3ByZXZpZXdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJjYXJkLTJcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwi0JDRgNGC0YPRgCDQodC10LzRltC60L7QslwiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9zaXRpb246ICfQotC10YHRgtC+0LLQsCDRg9Cy0LXRgNGC0Y7RgNCwINCR0LXRgtGF0L7QstC10L3QsCBcItCa0LDRh9C60LAg0LbQvtCy0YLQsCDQsiDQvtC30LXRgNGWINGC0L7QvdGD0LvQsFwiJyxcclxuICAgICAgICAgICAgICAgIHZpZGVvVXJsOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVpTOWZkVzhJMWx4WDlsSEhFWFBvYmM1NzZ4X1hTaFRYL3ByZXZpZXdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJjYXJkLTNcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwi0JDRgNGC0YPRgCDQodC10LzRltC60L7QslwiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9zaXRpb246IFwi0KLQtdGB0YLQvtCy0LAg0YPQstC10YDRgtGO0YDQsCDQkdC10YLRhdC+0LLQtdC90LAgJ9Ca0LDRh9C60LAg0LbQvtCy0YLQsCDQsiDQvtC30LXRgNGWINGC0L7QvdGD0LvQsCdcIixcclxuICAgICAgICAgICAgICAgIHZpZGVvVXJsOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVpTOWZkVzhJMWx4WDlsSEhFWFBvYmM1NzZ4X1hTaFRYL3ByZXZpZXdcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSlcclxuICAgIH0sXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e2NhcmRTdG9yZX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgICAgIDxFcnJvckJvdW5kYXJ5TWFpblNlY3Rpb24vPlxyXG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1vdmllcygpIHtcclxuICAgIGNvbnN0IGZldGNoRmlsbXMgPSAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGZldGNoRmlsbXNVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZmlsbXNcIjtcclxuXHJcbiAgICAgICAgZmV0Y2goZmV0Y2hGaWxtc1VybCwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKGJvZHkgPT4gYm9keS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGZpbG1zID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX0lOSVRJQUxfREFUQScsIHBheWxvYWQ6IGZpbG1zLCBpc0RhdGFJblBsYWNlOiB0cnVlfSlcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIHRoZSB1cGRhdGVkIHN0b3JlIHN0YXRlIGFmdGVyIGRpc3BhdGNoaW5nXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxGaWxtcyA9IGdldFN0YXRlKCkuZmlsbXM7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxGaWxtcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmZXRjaEZpbG1zO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hNb3ZpZXNGaWx0ZXJlZChmaWx0ZXJlZFNlY3Rpb24pIHtcclxuICAgIGNvbnN0IGZldGNoRmlsbXNGaWx0ZXJlZCA9IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZmV0Y2hGaWxtc1VybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9maWxtc1wiO1xyXG5cclxuICAgICAgICBmZXRjaChmZXRjaEZpbG1zVXJsLCByZXF1ZXN0T3B0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4oYm9keSA9PiBib2R5Lmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZmlsbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkRmlsbXMgPSBmaWxtcy5maWx0ZXIoZmlsbSA9PiBmaWxtLmdlbnJlID09PSBmaWx0ZXJlZFNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRERfSU5JVElBTF9EQVRBJywgcGF5bG9hZDogZmlsdGVyZWRGaWxtcywgaXNEYXRhSW5QbGFjZTogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmZXRjaEZpbG1zRmlsdGVyZWQ7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1JlZ3VsYXJIZWFkZXJ9IGZyb20gXCIuL1JlZ3VsYXJIZWFkZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVndWxhckhlYWRlci8+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgSW5wdXQgZnJvbSBcIi4uL1VJL0lucHV0LnN0eWxlZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b24uc3R5bGVkXCI7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtBaU91dGxpbmVGaWxlU2VhcmNofSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XHJcblxyXG5jb25zdCBJbnB1dFN0eWxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNjAlO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRXcmFwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogd2hpdGU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUmVndWxhckhlYWRlciA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxJbnB1dFdyYXBlcj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuPjxBaU91dGxpbmVGaWxlU2VhcmNoLz7Qn9C+0YjRg9C6INCy0ZbQtNC10L48L1N0eWxlZFNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNGW0YLRjCDRgdC70L7QstC+INC00LvRjyDQv9C+0YjRg9C60YMuLi5cIiBpbnB1dENvbG9yPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cItCf0L7RiNGD0LpcIi8+XHJcbiAgICAgICAgICAgIDwvSW5wdXRXcmFwZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0JzRmlsbFBlcnNvbkZpbGwsIEZhQm9va09wZW4sIEZhTGVhbnB1Yn0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZpbG1XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XHJcbiAgZm9udC1zdHJldGNoOiB1bHRyYS1leHBhbmRlZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke3Byb3BzID0+IChwcm9wcy5pbWcpfVwiKTtcclxuICB3aWR0aDogNjUwcHg7XHJcbiAgaGVpZ2h0OiA1MjBweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRmlsbUluZm8gPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbmFtZSxdID0gdXNlU3RhdGUocHJvcHMubmFtZSk7XHJcbiAgICBjb25zdCBbY29tcG9zaXRpb24sXSA9IHVzZVN0YXRlKHByb3BzLmNvbXBvc2l0aW9uKTtcclxuICAgIGNvbnN0IFt2aWRlb1VybCxdID0gdXNlU3RhdGUocHJvcHMudmlkZW9VcmwpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZpbG1XcmFwcGVyPlxyXG5cclxuICAgICAgICAgICAgPGlmcmFtZSBzcmM9e3ZpZGVvVXJsfSB3aWR0aD1cIjY0MFwiIGhlaWdodD1cIjQ4MFwiPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICA8RmlsbUluZm8+PHNwYW4+PEJzRmlsbFBlcnNvbkZpbGwvPjxiPntuYW1lfTwvYj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj48RmFCb29rT3Blbi8+PGk+e2NvbXBvc2l0aW9ufTwvaT48L3NwYW4+PC9GaWxtSW5mbz5cclxuICAgICAgICA8L0ZpbG1XcmFwcGVyPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCwge2tleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtmZXRjaE1vdmllcywgZmV0Y2hNb3ZpZXNGaWx0ZXJlZH0gZnJvbSBcIi4uLy4uL2FwaV9jbGllbnQvYXBpQ2xpZW50XCI7XHJcbmltcG9ydCB7QWlPdXRsaW5lRmlsdGVyLCBGYUZvbGRlcn0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xyXG5cclxuY29uc3QgRmlsdGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtgO1xyXG5cclxuY29uc3QgRmlsdGVyU2VjdGlvbiA9IHN0eWxlZChGaWx0ZXJDb250YWluZXIpYFxyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2U7XHJcbiAgY29sb3I6IGxhd25ncmVlbjtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRGl2VGhpbkxpbmUgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogZ3JheSBzb2xpZCAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBoZWlnaHQ6IDIlO1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XHJcbiAgYm9yZGVyOiBzb2xpZCAwcHggIzIzMjMyMztcclxuYDtcclxuXHJcbmNvbnN0IGdyb3dfMCA9IGtleWZyYW1lc2BcclxuICAwJSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XHJcbiAgfVxyXG4gIDAlIHtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy5sZWZ0fTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBncm93XzEgPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xyXG4gIH1cclxuICAwJSB7XHJcbiAgICBsZWZ0OiAxcHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH07XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFRoaW5MaW5lSW5uZXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcclxuICBsZWZ0OiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IHJlZCBzb2xpZCAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGhlaWdodDogMSU7XHJcbiAgYW5pbWF0aW9uOiAke3Byb3BzID0+IChwcm9wcy5hbmltYXRpb24gJSAyID09PSAwKSA/IGdyb3dfMCA6IGdyb3dfMX0gMC41cyBsaW5lYXI7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRTZWxlY3QgPSBzdHlsZWQuc2VsZWN0YFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxuYDtcclxuXHJcbmNvbnN0IFNvcnRpbmdPcHRpb25zSG9sZGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUmVzdWx0c0ZpbHRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzZWN0aW9ucyxdID0gdXNlU3RhdGUocHJvcHMuc2VjdGlvbnMpO1xyXG5cclxuICAgIGNvbnN0IHJlZlRvQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZFNvcnRPcHRpb24gPSB1c2VSZWYoKTtcclxuXHJcbiAgICBjb25zdCBbcmVkTGluZVdpZHRoLCBzZXRSZWRMaW5lV2lkdGhdID0gdXNlU3RhdGUoXCIxMHB4XCIpO1xyXG4gICAgY29uc3QgW3JlZExpbmVMZWZ0LCBzZXRSZWRMaW5lTGVmdF0gPSB1c2VTdGF0ZShcIjEwcHhcIik7XHJcbiAgICBjb25zdCBbYW5pbWF0aW9uLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgZmlsbXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5maWxtcyk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gb25GaWx0ZXJTZWN0aW9uQ2xpY2soc2VsZWN0ZWRTZWN0aW9uLCBldmVudCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50U2VjdGlvbldpZHRoID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgIGxldCBjdXJyZW50U2VjdGlvbkxlZnQgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC0xMDtcclxuICAgICAgICBzZXRSZWRMaW5lV2lkdGgoY3VycmVudFNlY3Rpb25XaWR0aCtcInB4XCIpO1xyXG4gICAgICAgIHNldFJlZExpbmVMZWZ0KGN1cnJlbnRTZWN0aW9uTGVmdCtcInB4XCIpO1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gYW5pbWF0aW9uKzE7XHJcbiAgICAgICAgc2V0QW5pbWF0aW9uKGNvdW50ZXIpO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZEdlbnJlU3RyaW5nID0gc2VsZWN0ZWRTZWN0aW9uLnNlY3Rpb24udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBmZXRjaEZpbG1zID0gZmV0Y2hNb3ZpZXMoKTtcclxuICAgICAgICBjb25zdCBmZXRjaEZpbG1zRmlsdGVyZWQgPSBmZXRjaE1vdmllc0ZpbHRlcmVkKHNlbGVjdGVkU2VjdGlvbik7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkR2VucmVTdHJpbmcgPT09IFwi0YPRgdGWINCy0ZbQtNC10L5cIikge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaEZpbG1zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaEZpbG1zRmlsdGVyZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVuZGVyZWRTZWN0aW9ucyA9IHNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxyXG4gICAgICA8RmlsdGVyU2VjdGlvbiBvbkNsaWNrPXsoZXZlbnQpID0+IHtvbkZpbHRlclNlY3Rpb25DbGljayh7c2VjdGlvbn0sZXZlbnQpfX0ga2V5PXtzZWN0aW9ufSBrZXlGb3JTZWFyY2g9e3NlY3Rpb259PjxGYUZvbGRlci8+e3NlY3Rpb259PC9GaWx0ZXJTZWN0aW9uPlxyXG4gICAgKSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3R5bGVkU2VsZWN0Q2hhbmdlSGFuZGxlcigpIHtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkU29ydE9wdGlvbi5jdXJyZW50LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ1JFTEVBU0UgREFURSc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUkVMRUFTRSBEQVRFIHNvcnRpbmcuLi4nKTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdGaWxtczEgPSBmaWxtcy5zb3J0KChhLGIpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhLnJlbGVhc2UgPCBiLnJlbGVhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhLnJlbGVhc2U+IGIucmVsZWFzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgfSkuc2xpY2UoKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOlwiQUREX0lOSVRJQUxfREFUQVwiLCBwYXlsb2FkOiBuZXdGaWxtczEsIGlzRGF0YUluUGxhY2U6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjYXNlICdBTFBIQUJFVElDQUwnOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FMUEhBQkVUSUNBTCBzb3J0aW5nLi4uJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3RmlsbXMyID0gZmlsbXMuc29ydCgoYSxiKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZUEgPSBhLm5hbWUudG9VcHBlckNhc2UoKTsgLy8gaWdub3JlIHVwcGVyIGFuZCBsb3dlcmNhc2VcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZUIgPSBiLm5hbWUudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUEgPCBuYW1lQikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIH0pLnNsaWNlKCk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTpcIkFERF9JTklUSUFMX0RBVEFcIiwgcGF5bG9hZDogbmV3RmlsbXMyLCBpc0RhdGFJblBsYWNlOiB0cnVlfSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8RmlsdGVyQ29udGFpbmVyIHJlZj17cmVmVG9Db250YWluZXJ9IGNoaWxkcmVuPXtyZW5kZXJlZFNlY3Rpb25zfS8+XHJcbiAgICAgICAgICAgICAgICA8U29ydGluZ09wdGlvbnNIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4+PEFpT3V0bGluZUZpbHRlci8+0KHQvtGA0YLRg9Cy0LDQvdC90Y88L1N0eWxlZFNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNlbGVjdCBpZD1cImxhbmd1YWdlLXNlbGVjdG9yXCIgbmFtZT1cImxhbmd1YWdlXCIgcmVmPXtzZWxlY3RlZFNvcnRPcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c3R5bGVkU2VsZWN0Q2hhbmdlSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSRUxFQVNFIERBVEVcIj7QlNCw0YLQsDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUxQSEFCRVRJQ0FMXCI+0JDQu9GE0LDQstGW0YI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZFNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvU29ydGluZ09wdGlvbnNIb2xkZXI+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxEaXZUaGluTGluZT48VGhpbkxpbmVJbm5lckRpdiB3aWR0aD17cmVkTGluZVdpZHRofSBsZWZ0PXtyZWRMaW5lTGVmdH0gYW5pbWF0aW9uPXthbmltYXRpb259Lz48L0RpdlRoaW5MaW5lPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5pbnB1dGBcclxuZm9udC1zaXplOiBtZWRpdW07XHJcbndpZHRoOiAyMCU7XHJcbmhlaWdodDogOTAlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbmNvbG9yOiB3aGl0ZTtcclxudHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbjpob3ZlciB7XHJcbiAgY29sb3I6IGRhcmtyZWQ7XHJcbn1gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaW5wdXRDb2xvciB8fCBcInBhbGV2aW9sZXRyZWRcIn07XHJcbiAgYDtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgSW5wdXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XHJcblJlYWN0RE9NLnJlbmRlcig8QXBwPjwvQXBwPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldCcpKTtcclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7UmVzdWx0c0ZpbHRlcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpblNlY3Rpb25Db21wb25lbnRzL1Jlc3VsdHNGaWx0ZXJcIjtcclxuaW1wb3J0IHtDYXJkfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluU2VjdGlvbkNvbXBvbmVudHMvQ2FyZFwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7ZmV0Y2hNb3ZpZXN9IGZyb20gXCIuLi8uLi9hcGlfY2xpZW50L2FwaUNsaWVudFwiO1xyXG5cclxuY29uc3QgTWFpblNlY3Rpb25GbGV4ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuYDtcclxuXHJcblxyXG5jb25zdCBmZXRjaEZpbG1zID0gZmV0Y2hNb3ZpZXMoKTtcclxuXHJcbmNvbnN0IE1haW5TZWN0aW9uID0gKCkgPT4ge1xyXG5cclxuICAgIC8vZXhhbXBsZTogdGhlIHdheSB0byByZXRyaWV2ZSBkYXRhIGZyb20gcmVkdXggc3RvcmVcclxuICAgIGNvbnN0IGZpbG1zID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZmlsbXMpO1xyXG5cclxuICAgIC8vZXhhbXBsZTogdGhlIHdheSB0byBnZXQgZGlzcGF0Y2hlciBmb3IgcmVkdXhcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgbGV0IHNlY3Rpb25zRm9yRmlsdGVyID0gWyfQo9GB0ZYg0LLRltC00LXQvicsJ9Cf0LXRgNC10LzQvtC20YbRliDQvdC+0LzRltC90LDRhtGW0ZcgXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlwiJywgJ9Cf0LXRgNC10LzQvtC20YbRliDQvdC+0LzRltC90LDRhtGW0ZcgXCLQpNC+0YDRgtC10L/RltCw0L3QvdC40Lkg0LDQvdGB0LDQvNCx0LvRjFwiJywgJ9Cf0LXRgNC10LzQvtC20YbRliDQvdC+0LzRltC90LDRhtGW0ZcgXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXCInXTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVDYXJkKGNhcmRJZCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIlJFTU9WRV9GSUxNXCIsIGZpbG1JZDogY2FyZElkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8UmVzdWx0c0ZpbHRlciBzZWN0aW9ucz17c2VjdGlvbnNGb3JGaWx0ZXJ9Lz5cclxuICAgICAgICAgICAgPE1haW5TZWN0aW9uRmxleD5cclxuXHJcbiAgICAgICAgICAgICAgICB7ZmlsbXMubWFwKGNhcmQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGRlbGV0ZUNhcmRIYW5kbGVyPXtkZWxldGVDYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2NhcmQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1VybD17Y2FyZC52aWRlb1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb3NpdGlvbj17Y2FyZC5jb21wb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NhcmQuaWR9Lz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPC9NYWluU2VjdGlvbkZsZXg+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgT29wc0RpdiA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7YDtcclxuXHJcblxyXG5jb25zdCBPb3BzVGV4dCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE9vcHNEaXY+XHJcbiAgICAgICAgICAgIDwgaDI+IE9vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIC4uLiBXZSBhcmUgZG9pbmcgb3VyIGJlc3QgdG8gZml4IHRoZSBpc3N1ZSAhIDwgL2gyPlxyXG4gICAgICAgIDwvT29wc0Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBFcnJvckJvdW5kYXJ5TWFpblNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBpc0RhdGFJblBsYWNlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuaXNEYXRhSW5QbGFjZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaEZpbG1zKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIHJldHVybiBpc0RhdGFJblBsYWNlID9cclxuICAgICAgICA8TWFpblNlY3Rpb24vPiA6IDxPb3BzVGV4dC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3VuZGFyeU1haW5TZWN0aW9uO1xyXG4iLCJpbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgYSByZWR1Y2VyIC0gYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgY3VycmVudCBzdGF0ZSB2YWx1ZSBhbmQgYW5cclxuICogYWN0aW9uIG9iamVjdCBkZXNjcmliaW5nIFwid2hhdCBoYXBwZW5lZFwiLCBhbmQgcmV0dXJucyBhIG5ldyBzdGF0ZSB2YWx1ZS5cclxuICogQSByZWR1Y2VyJ3MgZnVuY3Rpb24gc2lnbmF0dXJlIGlzOiAoc3RhdGUsIGFjdGlvbikgPT4gbmV3U3RhdGVcclxuICpcclxuICogVGhlIFJlZHV4IHN0YXRlIHNob3VsZCBjb250YWluIG9ubHkgcGxhaW4gSlMgb2JqZWN0cywgYXJyYXlzLCBhbmQgcHJpbWl0aXZlcy5cclxuICogVGhlIHJvb3Qgc3RhdGUgdmFsdWUgaXMgdXN1YWxseSBhbiBvYmplY3QuICBJdCdzIGltcG9ydGFudCB0aGF0IHlvdSBzaG91bGRcclxuICogbm90IG11dGF0ZSB0aGUgc3RhdGUgb2JqZWN0LCBidXQgcmV0dXJuIGEgbmV3IG9iamVjdCBpZiB0aGUgc3RhdGUgY2hhbmdlcy5cclxuICpcclxuICogWW91IGNhbiB1c2UgYW55IGNvbmRpdGlvbmFsIGxvZ2ljIHlvdSB3YW50IGluIGEgcmVkdWNlci4gSW4gdGhpcyBleGFtcGxlLFxyXG4gKiB3ZSB1c2UgYSBzd2l0Y2ggc3RhdGVtZW50LCBidXQgaXQncyBub3QgcmVxdWlyZWQuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gZmlsbVJlZHVjZXIoc3RhdGUgPSB7ZmlsbUNvdW50OiAwLCBmaWxtczogW10saXNEYXRhSW5QbGFjZTogZmFsc2V9LCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdBRERfSU5JVElBTF9EQVRBJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZmlsbUNvdW50OiBhY3Rpb24ucGF5bG9hZC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBmaWxtczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiBhY3Rpb24uaXNEYXRhSW5QbGFjZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFzeW5jRnVuY3Rpb25NaWRkbGV3YXJlID0gZmlsbXNTdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XHJcbiAgICAvLyBJZiB0aGUgXCJhY3Rpb25cIiBpcyBhY3R1YWxseSBhIGZ1bmN0aW9uIGluc3RlYWQuLi5cclxuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgLy8gdGhlbiBjYWxsIHRoZSBmdW5jdGlvbiBhbmQgcGFzcyBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIGFzIGFyZ3VtZW50c1xyXG4gICAgICAgIHJldHVybiBhY3Rpb24oZmlsbXNTdG9yZS5kaXNwYXRjaCwgZmlsbXNTdG9yZS5nZXRTdGF0ZSlcclxuICAgIH1cclxuICAgIC8vIE90aGVyd2lzZSwgaXQncyBhIG5vcm1hbCBhY3Rpb24gLSBzZW5kIGl0IG9ud2FyZHNcclxuICAgIHJldHVybiBuZXh0KGFjdGlvbilcclxufVxyXG5cclxuY29uc3QgbWlkZGxld2FyZUVuaGFuY2VyID0gYXBwbHlNaWRkbGV3YXJlKGFzeW5jRnVuY3Rpb25NaWRkbGV3YXJlKTtcclxuXHJcblxyXG4vLyBDcmVhdGUgYSBSZWR1eCBzdG9yZSBob2xkaW5nIHRoZSBzdGF0ZSBvZiB5b3VyIGFwcC5cclxuLy8gSXRzIEFQSSBpcyB7IHN1YnNjcmliZSwgZGlzcGF0Y2gsIGdldFN0YXRlIH0uXHJcbmV4cG9ydCBjb25zdCBjYXJkU3RvcmUgPSBjcmVhdGVTdG9yZShmaWxtUmVkdWNlciwgY29tcG9zZShtaWRkbGV3YXJlRW5oYW5jZXIsXHJcbiAgICB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gPyB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24oKSA6IGYgPT4gZikpO1xyXG5cclxuLy8gWW91IGNhbiB1c2Ugc3Vic2NyaWJlKCkgdG8gdXBkYXRlIHRoZSBVSSBpbiByZXNwb25zZSB0byBzdGF0ZSBjaGFuZ2VzLlxyXG4vLyBOb3JtYWxseSB5b3UnZCB1c2UgYSB2aWV3IGJpbmRpbmcgbGlicmFyeSAoZS5nLiBSZWFjdCBSZWR1eCkgcmF0aGVyIHRoYW4gc3Vic2NyaWJlKCkgZGlyZWN0bHkuXHJcbi8vIFRoZXJlIG1heSBiZSBhZGRpdGlvbmFsIHVzZSBjYXNlcyB3aGVyZSBpdCdzIGhlbHBmdWwgdG8gc3Vic2NyaWJlIGFzIHdlbGwuXHJcbmNhcmRTdG9yZS5zdWJzY3JpYmUoKCkgPT5cclxuICAgIGNvbnNvbGUubG9nKFwiRmlsbXNTdG9yZSBzdGF0ZSB3YXMgY2hhbmdlZCwgbnVtYmVyIG9mIGNhcmRzOiBcIiArIGNhcmRTdG9yZS5nZXRTdGF0ZSgpLmZpbG1Db3VudClcclxuKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9