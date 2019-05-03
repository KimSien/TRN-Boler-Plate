import * as React from "react";
//import * as PropTypes from 'prop-types';

interface IProps{
    //ButtonLabel: any;
    data: string[];
    slidestatus: any; // PropTypes.func　が使えない
}
interface State{
}
export class LabelSelectmap2 extends React.Component<IProps,State>{

    public state: State={
        slidestatus: 0,
    }

    handleClick(){
        console.log("click button");
        //this.state.slidestatus = 1;
        return this.props.slidestatus();
    }

    public render(){

        //https://qiita.com/koba04/items/a4d23245d246c53cd49d
        // key　について

        const ButtonLabel = this.props.data.map((value :any, index :any) => {
            return (
                <button className="text" key={index} onClick={()=>{this.handleClick();}}>
                    {value.title}
                </button>
            );
        });

        return (
            <li>
            {ButtonLabel}
            </li>
        )
    }

}