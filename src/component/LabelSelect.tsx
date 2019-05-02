import * as React from "react";

interface IProps{
    ButtonLabel: string;
}

export class LabelSelect extends React.Component<IProps>{

    public render(){
        const ButtonLabel = this.props.ButtonLabel;
        return(
            <button className="text">
                {ButtonLabel}
            </button>
        );
    }

}