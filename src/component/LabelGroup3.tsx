import * as React from "react";

import * as PropTypes from 'prop-types';


import { LabelText } from "./LabelText";
import { LabelSelectmap2 } from "./LabelSelectmap2";
//import {fetchResponse2} from "../minisample/TestAjax2";

interface STATE{
    questions: any;
    slidestatus: any;
}

interface PROPS{
}

export class LabelGroup3 extends React.Component<{},STATE,PROPS>{

    public state :STATE = {
        questions: [{ title: "question start",select:[{title: "test"}]}],
        slidestatus: 0
        //questions: [{ title: "question start",select:[{title: "test"}]}]
    }

        
    componentDidMount(){
        //https://qiita.com/u_dapon/items/4609a72aab5f469485d9
        //https://qiita.com/yumaeda/items/9f5111fe7597037efb57

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
        //console.log("click handlechangeState");
        
        console.log(a);
        //this.state.slidestatus = a;
 
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

        /*
        const PackBlock = this.state.questions.map((value :any, index :any) => {
            console.log(value);
            return (
                <div className="text" data-button={index}>
                    <LabelText myQuestion={value.title} />
                    <LabelSelectmap2 data={value.select} />
                    {this.state.slidestatus}
                </div>
            );
        });
        */

        //const a = this.state.slidestatus;

        // 親子 state変更
        // https://qiita.com/w-tdon/items/7b0f72a3b0a3e0708741

        // http://shibe23.hatenablog.com/entry/2018/07/29/233005

//        <LabelSelectmap2 data={this.state.questions[this.state.slidestatus].select} slidestatus={()=>{this.handleChangeState(a)}} />

       const PackBlock = 
            <div className="text" data-button={this.state.slidestatus}>
                <LabelText myQuestion={this.state.questions[this.state.slidestatus].title} />
                <LabelSelectmap2 data={this.state.questions[this.state.slidestatus].select} slidestatus={this.state.slidestatus} slidestatusfunc={ (a :any)=>{this.handleChangeState(a);}} />

                {this.state.slidestatus}
            </div>


        return (
         <div className="parents">
            {PackBlock}
        </div>
    );
    }

}

