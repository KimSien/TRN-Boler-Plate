import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./component/Hello";


//https://qiita.com/IzumiSy/items/b7d8a96eacd2cd8ad510
// react redux typescript
// https://qiita.com/toshi1127/items/37924faba5d57f397905
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import App from './containers/app';


ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);

const store = configureStore();

ReactDOM.render(
  //ストアを作ってproviderに渡す。
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);