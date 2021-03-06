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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/group2.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/LabelGroup4.tsx":
/*!***************************************!*\
  !*** ./src/component/LabelGroup4.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const LabelText_1 = __webpack_require__(/*! ./LabelText */ "./src/component/LabelText.tsx");
const LabelSelectmap3_1 = __webpack_require__(/*! ./LabelSelectmap3 */ "./src/component/LabelSelectmap3.tsx");
class LabelGroup4 extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            questions: [{ title: "question start", select: [{ title: "test" }] }],
            slidestatus: 0
        };
    }
    componentDidMount() {
        return fetch('/data/db3.json')
            .then(res => {
            return res.json();
        })
            .then(res => {
            this.setState({
                questions: res.todos,
                slidestatus: 1
            });
        });
    }
    handleChangeState(a) {
        console.log(a);
        this.setState(a);
        /*
        this.setState({
            slidestatus: 2
        });
        */
    }
    render() {
        const buttons = "質問の問題";
        const a = this.state.slidestatus;
        const PackBlock = React.createElement("div", { className: "text", "data-button": this.state.slidestatus },
            React.createElement(LabelText_1.LabelText, { myQuestion: this.state.questions[this.state.slidestatus].title }),
            React.createElement(LabelSelectmap3_1.LabelSelectmap3, { data: this.state.questions[this.state.slidestatus].select, slidestatus: this.state.slidestatus, slidestatusfunc: (a) => { this.handleChangeState(a); } }),
            this.state.slidestatus);
        return (React.createElement("div", { className: "parents" }, PackBlock));
    }
}
exports.LabelGroup4 = LabelGroup4;


/***/ }),

/***/ "./src/component/LabelSelectmap3.tsx":
/*!*******************************************!*\
  !*** ./src/component/LabelSelectmap3.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class LabelSelectmap3 extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
        //slidestatus: 0,
        };
    }
    handleClick(a) {
        //console.log(a);
        //this.state.slidestatus = 1;
        return this.props.slidestatusfunc({ slidestatus: a });
    }
    render() {
        const ButtonLabel = this.props.data.map((value, index) => {
            return (React.createElement("button", { className: "text", "data-int": value.next, key: index, onClick: () => { this.handleClick(value.next); } },
                value.title,
                this.props.slidestatus));
        });
        return (React.createElement("li", null, ButtonLabel));
    }
}
exports.LabelSelectmap3 = LabelSelectmap3;


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

/***/ "./src/group2.tsx":
/*!************************!*\
  !*** ./src/group2.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
//５ compornent + compornent
const LabelGroup4_1 = __webpack_require__(/*! ./component/LabelGroup4 */ "./src/component/LabelGroup4.tsx");
ReactDOM.render(React.createElement(LabelGroup4_1.LabelGroup4, null), document.getElementById("group"));
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
//# sourceMappingURL=group2.js.map