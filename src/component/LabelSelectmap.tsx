import * as React from "react";

interface IProps{
    //ButtonLabel: any;
    data: string[];
}
interface State{

}
export class LabelSelectmap extends React.Component<IProps,State>{

    public render(){

        const ButtonLabel = this.props.data.map((value :any, index :any) => {
            return (
                <button className="text" data-button={index}>
                    {value}
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