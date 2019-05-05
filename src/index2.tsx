/**
 * 最小 React Redux Typescript
 * 
 * 
 * https://laboradian.com/minimal-codes-of-react-redux/
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

    render(){

        return(
            <div>
                <span>{this.props.fuga}</span>
                <button onClick={ ()=>{this.props.dom_o_click(); } }>OnClick</button>
            </div>
        );
    }
}

/**
 * Action
 */
const Action = {
    action_o_click: ()=>{
        return {type: 'O_CLICK'}
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
        dom_o_click: ()=>{dispatch(Action.action_o_click())}
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
        case 'O_CLICK':{
            return {fuga: "test"}
        }
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

