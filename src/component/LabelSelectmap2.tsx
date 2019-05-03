import * as React from "react";
//import * as PropTypes from 'prop-types';

interface IProps{
    //ButtonLabel: any;
    data: string[];
    slidestatus: any;
    slidestatusfunc: any; // PropTypes.func　が使えない
}
interface State{
}
export class LabelSelectmap2 extends React.Component<IProps,State>{

    public state: State={
        //slidestatus: 0,
    }

    
    handleClick(a :any){
        //console.log(a);
        //this.state.slidestatus = 1;
         
        return this.props.slidestatusfunc({slidestatus: a});
    }
    

    public render(){

        //https://qiita.com/koba04/items/a4d23245d246c53cd49d
        // key　について
        //<button className="text" data-int={value.next} key={index} onClick={()=>{this.props.slidestatusfunc(value.next)}}>

        const ButtonLabel = this.props.data.map((value :any, index :any) => {
            return (
                
                <button className="text" data-int={value.next} key={index} onClick={()=>{ this.handleClick(value.next);}}>
                    {value.title}{this.props.slidestatus}
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