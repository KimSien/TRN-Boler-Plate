import * as React from "react";

import { LabelText } from "./LabelText";
import { LabelSelectmap } from "./LabelSelectmap";



export class LabelGroup extends React.Component{

    public render(){
        const selections = ['選択１', '選択２', '選択３', '選択４'];
        const question = "質問の問題";

        const buttons = "質問の問題";
        
        return (
         <div className="parents">
            <LabelText myQuestion={question} />
            <LabelSelectmap data={selections} />

            <LabelText myQuestion={buttons} />

        </div>
    );
    }

}

