import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./component/Hello";
ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);

/**
 * 
 * mini sample
 * 
 */
//1 fetch(ajax) & function import
import {fetchResponse} from "./minisample/TestAjax";
fetchResponse();

//2 prop
import { Basic } from "./component/Basic";
ReactDOM.render(
    <Basic value="1" />,
    document.getElementById("basic")
);

//3 state
import { Basic2 } from "./component/Basic2";
ReactDOM.render(
    <Basic2 />,
    document.getElementById("basic2")
);

//3 state & prop
import { Basic3 } from "./component/Basic3";
ReactDOM.render(
    <Basic3 value="test" />,
    document.getElementById("basic3")
);

//4 compornent + compornent
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

//4 compornent + compornent

import { LabelGroup } from "./component/LabelGroup";
ReactDOM.render(
    <LabelGroup />,
    document.getElementById("group1")
);

//５ compornent + compornent
import { LabelGroup2 } from "./component/LabelGroup2";
ReactDOM.render(
    <LabelGroup2 />,
    document.getElementById("group2")
);
/**
 * 
 * mini sample
 * 
 */



