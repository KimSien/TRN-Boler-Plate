//import React from 'react';
import * as React from "react"; 

interface PROPS{
    fuga: any;
    Increment_Click: any;
    Decrement_Click: any;
}

interface STATES{}

//reduxやactionsをimportしていない。→ 必要なモノは親から全てprops経由で受け取っている
// https://stackoverflow.com/questions/53851828/ts2740-type-is-missing-the-following-properties-from-readonlymyinterface-error
export default class App extends React.Component<any,PROPS,STATES>{


    render() {
    
    return (
        <div>
          <span>{this.props.fuga}</span><br/>
          <button onClick={ () => this.props.Increment_Click() }>＊増加＊</button>
          <button onClick={ () => this.props.Decrement_Click() }>＊減少＊</button>
        </div>
    );
  }
}