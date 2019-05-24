//import React from 'react';
import * as React from "react"; 

interface PROPS{
    fuga: any;
    Increment_Click: any;
    Decrement_Click: any;
}

interface STATES{}

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