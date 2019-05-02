// prop & state
// https://stackoverflow.com/questions/52249390/property-xyz-does-not-exist-on-type-readonly-children-reactnode-rea


import * as React from "react";

interface IProps{
    value: string;
}

interface IState {
    myNameIs: string,
}

  
export class Basic3 extends React.Component<IProps,IState>{


    public state: IState = {
        myNameIs: 'namedesu',

    }

    public render(){
        const value = this.props.value;
        return(
            <div>
            this is {this.state.myNameIs}
            <button className="square" onClick={() => alert('click')}>
                {value}
            </button>
            </div>
        );
    }

}