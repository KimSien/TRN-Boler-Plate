import * as React from "react";
//import * as PropTypes from 'prop-types';

interface IProps{
    data: string[];
    slidestatus: any;
    slidestatusfunc: any; // PropTypes.func　が使えない
}
interface State{
}
export class LabelSelectmap3 extends React.Component<IProps,State>{

    public state: State={
        //slidestatus: 0,
    }

    
    handleClick(a :any){
        //console.log(a);
        //this.state.slidestatus = 1;
         
        return this.props.slidestatusfunc({slidestatus: a});
    }
    

    public render(){

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