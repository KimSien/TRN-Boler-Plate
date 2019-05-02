import * as React from "react";

interface IProps{
    myQuestion: string;
}

export class LabelText extends React.Component<IProps>{

    public render(){
        const myQuestion = this.props.myQuestion;
        return(
            <div className="text">
                {myQuestion}
            </div>
        );
    }

}