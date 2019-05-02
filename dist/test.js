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

/***/ "./src/component/Basic.tsx":
/*!*********************************!*\
  !*** ./src/component/Basic.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// prop only
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class Basic extends React.Component {
    /*
    constructor(props :any){
        super(props);
        this.state={
            value: null,
        };
    }
    */
    render() {
        const value = this.props.value;
        return (React.createElement("button", { className: "square", onClick: () => alert('click') }, value));
    }
}
exports.Basic = Basic;


/***/ }),

/***/ "./src/component/Basic2.tsx":
/*!**********************************!*\
  !*** ./src/component/Basic2.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// prop & state
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class Basic2 extends React.Component {
    constructor() {
        super(...arguments);
        /*
        constructor(props :any){
            super(props);
            this.state={
                value: null,
            };
        }
        */
        this.state = {
            myNameIs: 'namedesu',
        };
    }
    render() {
        return (React.createElement("button", { className: "square", onClick: () => alert('click') }, this.state.myNameIs));
    }
}
exports.Basic2 = Basic2;


/***/ }),

/***/ "./src/component/Basic3.tsx":
/*!**********************************!*\
  !*** ./src/component/Basic3.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// prop & state
// https://stackoverflow.com/questions/52249390/property-xyz-does-not-exist-on-type-readonly-children-reactnode-rea
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class Basic3 extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            myNameIs: 'namedesu',
        };
    }
    render() {
        const value = this.props.value;
        return (React.createElement("div", null,
            "this is ",
            this.state.myNameIs,
            React.createElement("button", { className: "square", onClick: () => alert('click') }, value)));
    }
}
exports.Basic3 = Basic3;


/***/ }),

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

/***/ "./src/component/LabelGroup.tsx":
/*!**************************************!*\
  !*** ./src/component/LabelGroup.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const LabelText_1 = __webpack_require__(/*! ./LabelText */ "./src/component/LabelText.tsx");
const LabelSelectmap_1 = __webpack_require__(/*! ./LabelSelectmap */ "./src/component/LabelSelectmap.tsx");
class LabelGroup extends React.Component {
    render() {
        const selections = ['選択１', '選択２', '選択３', '選択４'];
        const question = "質問の問題";
        const buttons = "質問の問題";
        return (React.createElement("div", { className: "parents" },
            React.createElement(LabelText_1.LabelText, { myQuestion: question }),
            React.createElement(LabelSelectmap_1.LabelSelectmap, { data: selections }),
            React.createElement(LabelText_1.LabelText, { myQuestion: buttons })));
    }
}
exports.LabelGroup = LabelGroup;


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
            question: "question start"
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
                question: res.todos[0].title
                //question : "change question desu"
            });
        });
    }
    render() {
        const selections = ['選択１', '選択２', '選択３', '選択４'];
        //const question = "質問の問題";
        const buttons = "質問の問題";
        return (React.createElement("div", { className: "parents" },
            React.createElement(LabelText_1.LabelText, { myQuestion: this.state.question }),
            React.createElement(LabelSelectmap_1.LabelSelectmap, { data: selections }),
            React.createElement(LabelText_1.LabelText, { myQuestion: buttons })));
    }
}
exports.LabelGroup2 = LabelGroup2;


/***/ }),

/***/ "./src/component/LabelSelect.tsx":
/*!***************************************!*\
  !*** ./src/component/LabelSelect.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class LabelSelect extends React.Component {
    render() {
        const ButtonLabel = this.props.ButtonLabel;
        return (React.createElement("button", { className: "text" }, ButtonLabel));
    }
}
exports.LabelSelect = LabelSelect;


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

/***/ "./src/minisample/TestAjax.tsx":
/*!*************************************!*\
  !*** ./src/minisample/TestAjax.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// refs
// https://www.yoheim.net/blog.php?q=20170107
Object.defineProperty(exports, "__esModule", { value: true });
function fetchResponse() {
    fetch('/data/db.json')
        .then(res => {
        //console.log(res.json());   
        //console.log(1);     
        return res.json();
    })
        .then(res => {
        console.log(2);
        console.log(res);
        console.log(res.todos[0]);
        /*this.setState({
          todo : res
        });
        */
    });
}
exports.fetchResponse = fetchResponse;
//fetchResponse();


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
const TestAjax_1 = __webpack_require__(/*! ./minisample/TestAjax */ "./src/minisample/TestAjax.tsx");
TestAjax_1.fetchResponse();
//2 prop
const Basic_1 = __webpack_require__(/*! ./component/Basic */ "./src/component/Basic.tsx");
ReactDOM.render(React.createElement(Basic_1.Basic, { value: "1" }), document.getElementById("basic"));
//3 state
const Basic2_1 = __webpack_require__(/*! ./component/Basic2 */ "./src/component/Basic2.tsx");
ReactDOM.render(React.createElement(Basic2_1.Basic2, null), document.getElementById("basic2"));
//3 state & prop
const Basic3_1 = __webpack_require__(/*! ./component/Basic3 */ "./src/component/Basic3.tsx");
ReactDOM.render(React.createElement(Basic3_1.Basic3, { value: "test" }), document.getElementById("basic3"));
//4 compornent + compornent
const LabelText_1 = __webpack_require__(/*! ./component/LabelText */ "./src/component/LabelText.tsx");
ReactDOM.render(React.createElement(LabelText_1.LabelText, { myQuestion: "test" }), document.getElementById("test1"));
const LabelSelect_1 = __webpack_require__(/*! ./component/LabelSelect */ "./src/component/LabelSelect.tsx");
ReactDOM.render(React.createElement(LabelSelect_1.LabelSelect, { ButtonLabel: "test" }), document.getElementById("test2"));
//4 compornent + compornent
const LabelGroup_1 = __webpack_require__(/*! ./component/LabelGroup */ "./src/component/LabelGroup.tsx");
ReactDOM.render(React.createElement(LabelGroup_1.LabelGroup, null), document.getElementById("group1"));
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