import * as React from "react";

import { LabelText } from "./LabelText";
import { LabelSelectmap3 } from "./LabelSelectmap3";

interface STATE{
    questions: any;
    slidestatus: any;
}

interface PROPS{
}

export class LabelGroup4 extends React.Component<{},STATE,PROPS>{

    public state :STATE = {
        questions: [{ title: "question start",select:[{title: "test"}]}],
        slidestatus: 0
    }

        
    componentDidMount(){

        return fetch('/data/db3.json')
        .then( res => {
        return res.json();
        } )
        .then( res => {
        
        this.setState({
            questions : res.todos,
            slidestatus: 1
        });
        })

    }


    handleChangeState(a? :any){
        console.log(a);
        this.setState(a);
        /*
        this.setState({
            slidestatus: 2
        });
        */
        
    }

    public render(){
        
        const buttons = "質問の問題";

        const a = this.state.slidestatus;

       const PackBlock = 
            <div className="text" data-button={this.state.slidestatus}>
                <LabelText myQuestion={this.state.questions[this.state.slidestatus].title} />
                <LabelSelectmap3 data={this.state.questions[this.state.slidestatus].select} slidestatus={this.state.slidestatus} slidestatusfunc={ (a :any)=>{this.handleChangeState(a);}} />

                {this.state.slidestatus}
            </div>


        return (
         <div className="parents">
            {PackBlock}
        </div>
    );
    }

}

