/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/test.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/Hello.tsx":
/*!*********************************!*\
  !*** ./src/component/Hello.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.Hello = (props) => React.createElement("h1", null,
    "Hello from ",
    props.compiler,
    " and ",
    props.framework,
    "!");


/***/ }),

/***/ "./src/component/LabelGroup2.tsx":
/*!***************************************!*\
  !*** ./src/component/LabelGroup2.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const LabelText_1 = __webpack_require__(/*! ./LabelText */ "./src/component/LabelText.tsx");
const LabelSelectmap_1 = __webpack_require__(/*! ./LabelSelectmap */ "./src/component/LabelSelectmap.tsx");
class LabelGroup2 extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            questions: [{ title: "question start" }]
        };
    }
    componentDidMount() {
        //https://qiita.com/u_dapon/items/4609a72aab5f469485d9
        /*
        this.setState({
            question : "change question desu"
        });
        */
        return fetch('/data/db2.json')
            .then(res => {
            return res.json();
        })
            .then(res => {
            this.setState({
                questions: res.todos
                //question : "change question desu"
            });
        });
    }
    render() {
        const selections = ['選択１', '選択２', '選択３', '選択４'];
        //const question = "質問の問題";
        const buttons = "質問の問題";
        const PackBlock = this.state.questions.map((value, index) => {
            console.log(value);
            return (React.createElement("div", { className: "text", "data-button": index },
                React.createElement(LabelText_1.LabelText, { myQuestion: value.title }),
                React.createElement(LabelSelectmap_1.LabelSelectmap, { data: selections }),
                React.createElement(LabelText_1.LabelText, { myQuestion: buttons })));
        });
        return (React.createElement("div", { className: "parents" }, PackBlock));
    }
}
exports.LabelGroup2 = LabelGroup2;


/***/ }),

/***/ "./src/component/LabelSelectmap.tsx":
/*!******************************************!*\
  !*** ./src/component/LabelSelectmap.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class LabelSelectmap extends React.Component {
    render() {
        const ButtonLabel = this.props.data.map((value, index) => {
            return (React.createElement("button", { className: "text", "data-button": index }, value));
        });
        return (React.createElement("li", null, ButtonLabel));
    }
}
exports.LabelSelectmap = LabelSelectmap;


/***/ }),

/***/ "./src/component/LabelText.tsx":
/*!*************************************!*\
  !*** ./src/component/LabelText.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class LabelText extends React.Component {
    render() {
        const myQuestion = this.props.myQuestion;
        return (React.createElement("div", { className: "text" }, myQuestion));
    }
}
exports.LabelText = LabelText;


/***/ }),

/***/ "./src/test.tsx":
/*!**********************!*\
  !*** ./src/test.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const Hello_1 = __webpack_require__(/*! ./component/Hello */ "./src/component/Hello.tsx");
ReactDOM.render(React.createElement(Hello_1.Hello, { compiler: "TypeScript", framework: "React" }), document.getElementById("example"));
/**
 *
 * mini sample
 *
 */
//1 fetch(ajax) & function import
//import {fetchResponse} from "./minisample/TestAjax";
//fetchResponse();
//2 prop
/*
import { Basic } from "./component/Basic";
ReactDOM.render(
    <Basic value="1" />,
    document.getElementById("basic")
);
*/
//3 state
/*
import { Basic2 } from "./component/Basic2";
ReactDOM.render(
    <Basic2 />,
    document.getElementById("basic2")
);
*/
//3 state & prop
/*
import { Basic3 } from "./component/Basic3";
ReactDOM.render(
    <Basic3 value="test" />,
    document.getElementById("basic3")
);
*/
//4 compornent + compornent
/*
import { LabelText } from "./component/LabelText";
ReactDOM.render(
    <LabelText myQuestion="test" />,
    document.getElementById("test1")
);

import { LabelSelect } from "./component/LabelSelect";
ReactDOM.render(
    <LabelSelect ButtonLabel="test" />,
    document.getElementById("test2")
);
*/
//4 compornent + compornent
/*
import { LabelGroup } from "./component/LabelGroup";
ReactDOM.render(
    <LabelGroup />,
    document.getElementById("group1")
);
*/
//５ compornent + compornent
const LabelGroup2_1 = __webpack_require__(/*! ./component/LabelGroup2 */ "./src/component/LabelGroup2.tsx");
ReactDOM.render(React.createElement(LabelGroup2_1.LabelGroup2, null), document.getElementById("group2"));
/**
 *
 * mini sample
 *
 */


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=test.js.map