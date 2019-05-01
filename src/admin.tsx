import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./component/Hello";

let num :number;

num = 1;
console.log(num);

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);