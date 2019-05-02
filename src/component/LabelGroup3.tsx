import * as React from "react";

import { LabelText } from "./LabelText";
import { LabelSelectmap2 } from "./LabelSelectmap2";
//import {fetchResponse2} from "../minisample/TestAjax2";


interface STATE{
    questions: any;
}

interface PROPS{
}



export class LabelGroup3 extends React.Component<{},STATE,PROPS>{

    public state :STATE = {
        questions: [{ title: "question start",select:[{title: "test"}]}]
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
            questions : res.todos
        });
        })

    }

    public render(){
        //const selections = ['選択１', '選択２', '選択３', '選択４'];
        //const question = "質問の問題";

        const buttons = "質問の問題";
        
        const PackBlock = this.state.questions.map((value :any, index :any) => {
            console.log(value);
            return (
                <div className="text" data-button={index}>
                    <LabelText myQuestion={value.title} />
                    <LabelSelectmap2 data={value.select} />
                </div>
            );
        });


        return (
         <div className="parents">
            
            {PackBlock}

        </div>
    );
    }

}

