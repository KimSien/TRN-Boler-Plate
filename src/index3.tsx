/**
 * 最小 React Redux Typescript
 * 
 * 
 * https://laboradian.com/minimal-codes-of-react-redux/
 * 
 * 
 * bind text
 * 
 * https://qiita.com/enshi/items/19b1924b72f8c2ffd1eb
 * 
 */
import * as React from "react";
import * as ReactDom from "react-dom";

import {Provider,connect} from 'react-redux';
import {createStore} from "redux";


/**
 * component
 */
interface PROPS{
    fuga: any;
    o_click: any;
}
interface STATE{}
class AppComponent extends React.Component<any,PROPS,STATE>{
    
    //https://tech-1natsu.hatenablog.com/entry/2018/08/15/213540
    private textInput = React.createRef<HTMLInputElement>()

    render(){

        return(
            <div>
                <span>{this.props.fuga}</span>
                <input
                type="text"
                ref={this.textInput} />
                
                <button onClick={ ()=>{this.props.dom_o_click(this.textInput.current.value); } }>OnClick</button>

            </div>
        );
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

}

/**
 * Action
 */
const Action = {
    action_o_click: (inspect :any)=>{
        return {
            type: 'O_CLICK',
            inspect
        }
    }
}
/**
 * container
 */
const App = (()=>{

    const mapStateProps = (state :any)=>{
        return state
    }
    const mapDispatchToProps = (dispatch :any)=>{
        
        return {
        dom_o_click: (a :any)=>{
            //console.log();
            let value = a;

            dispatch(Action.action_o_click(value))
        }
        }
    }

    return connect(
        mapStateProps,
        mapDispatchToProps
    )(AppComponent);


})();




/**
 * reducer
 */
const initialState ={
    fuga: 0
}
function reducer(state=initialState,action :any){
    switch(action.type){
        case 'O_CLICK':
         /* {
            return {fuga: "test"}
        }*/
        let t = action.inspect;
        return Object.assign({}, state, {
            fuga: t
        });

        default:
        return state
    }
}

/**
 * createstore
 */
const store = createStore(reducer);

ReactDom.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);

