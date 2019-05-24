import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./component/Hello";

import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import App from './containers/app';

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("hello")
);

const store = configureStore();

ReactDOM.render(
  //ストアを作ってproviderに渡す。
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);