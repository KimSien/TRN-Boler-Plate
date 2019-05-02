import * as React from "react";

import { LabelText } from "./LabelText";
import { LabelSelectmap } from "./LabelSelectmap";
import {fetchResponse2} from "../minisample/TestAjax2";


interface STATE{
    question: string;
}

interface PROPS{
}



export class LabelGroup2 extends React.Component<{},STATE,PROPS>{

    public state: STATE = {
        question: "question start"    
    }
    
    componentDidMount(){
        //https://qiita.com/u_dapon/items/4609a72aab5f469485d9
        /*
        this.setState({
            question : "change question desu"
        });
        */
        return fetch('/data/db2.json')
        .then( res => {
        return res.json();
        } )
        .then( res => {
        
        this.setState({
            question : res.todos[0].title
            //question : "change question desu"
        });

    })


    }

    public render(){
        const selections = ['選択１', '選択２', '選択３', '選択４'];
        //const question = "質問の問題";

        const buttons = "質問の問題";
        
        return (
         <div className="parents">
            <LabelText myQuestion={this.state.question} />
            <LabelSelectmap data={selections} />

            <LabelText myQuestion={buttons} />

        </div>
    );
    }

}

