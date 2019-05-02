// prop & state

import * as React from "react";

interface IState {
    myNameIs: string,
}

  
export class Basic2 extends React.Component<{},IState>{

    /*
    constructor(props :any){
        super(props);
        this.state={
            value: null,
        };
    }
    */
    public state: IState = {
        myNameIs: 'namedesu',

    }

    public render(){
        return(
            <button className="square" onClick={() => alert('click')}>
            {this.state.myNameIs}
            </button>
        );
    }

}