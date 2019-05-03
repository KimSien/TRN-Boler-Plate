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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/group.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/LabelGroup3.tsx":
/*!***************************************!*\
  !*** ./src/component/LabelGroup3.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const LabelText_1 = __webpack_require__(/*! ./LabelText */ "./src/component/LabelText.tsx");
const LabelSelectmap2_1 = __webpack_require__(/*! ./LabelSelectmap2 */ "./src/component/LabelSelectmap2.tsx");
class LabelGroup3 extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            questions: [{ title: "question start", select: [{ title: "test" }] }],
            slidestatus: 0
            //questions: [{ title: "question start",select:[{title: "test"}]}]
        };
    }
    componentDidMount() {
        //https://qiita.com/u_dapon/items/4609a72aab5f469485d9
        //https://qiita.com/yumaeda/items/9f5111fe7597037efb57
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
    handleChangeState() {
        console.log("click handlechangeState");
        this.setState({
            slidestatus: 0
        });
    }
    render() {
        const buttons = "質問の問題";
        /*
        const PackBlock = this.state.questions.map((value :any, index :any) => {
            console.log(value);
            return (
                <div className="text" data-button={index}>
                    <LabelText myQuestion={value.title} />
                    <LabelSelectmap2 data={value.select} />
                    {this.state.slidestatus}
                </div>
            );
        });
        */
        // 親子 state変更
        // https://qiita.com/w-tdon/items/7b0f72a3b0a3e0708741
        const PackBlock = React.createElement("div", { className: "text", "data-button": this.state.slidestatus },
            React.createElement(LabelText_1.LabelText, { myQuestion: this.state.questions[this.state.slidestatus].title }),
            React.createElement(LabelSelectmap2_1.LabelSelectmap2, { data: this.state.questions[this.state.slidestatus].select, slidestatus: () => { this.handleChangeState(); } }),
            this.state.slidestatus);
        return (React.createElement("div", { className: "parents" }, PackBlock));
    }
}
exports.LabelGroup3 = LabelGroup3;


/***/ }),

/***/ "./src/component/LabelSelectmap2.tsx":
/*!*******************************************!*\
  !*** ./src/component/LabelSelectmap2.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class LabelSelectmap2 extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            slidestatus: 0,
        };
    }
    handleClick() {
        console.log("click button");
        //this.state.slidestatus = 1;
        return this.props.slidestatus();
    }
    render() {
        //https://qiita.com/koba04/items/a4d23245d246c53cd49d
        // key　について
        const ButtonLabel = this.props.data.map((value, index) => {
            return (React.createElement("button", { className: "text", key: index, onClick: () => { this.handleClick(); } }, value.title));
        });
        return (React.createElement("li", null, ButtonLabel));
    }
}
exports.LabelSelectmap2 = LabelSelectmap2;


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

/***/ "./src/group.tsx":
/*!***********************!*\
  !*** ./src/group.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
//５ compornent + compornent
const LabelGroup3_1 = __webpack_require__(/*! ./component/LabelGroup3 */ "./src/component/LabelGroup3.tsx");
ReactDOM.render(React.createElement(LabelGroup3_1.LabelGroup3, null), document.getElementById("group"));
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
//# sourceMappingURL=group.js.map