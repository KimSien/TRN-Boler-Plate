// prop only

import * as React from "react";

interface IProps{
    value: string;
}

export class Basic extends React.Component<IProps>{

    /*
    constructor(props :any){
        super(props);
        this.state={
            value: null,
        };
    }
    */

    public render(){
        const value= this.props.value;
        return(
            <button className="square" onClick={() => alert('click')}>
                {value}
            </button>
        );
    }

}