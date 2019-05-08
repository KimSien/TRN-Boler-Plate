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
 * createRef利用
 * https://the2g.com/2796
 * 
 */
import * as React from "react";
import * as ReactDom from "react-dom";

import {Provider,connect} from 'react-redux';
import {createStore} from "redux";


/**
 * 
 */
interface CPROPRS{
    data: string[];
}
interface CSTATE{
    //questions: any
}
class ChildApp extends React.Component<any,CPROPRS,CSTATE>{

    //public state: CSTATE={}


    public render(){
        
        const CHDOM = this.props.data.map((v :any,i :any)=>{
            return (
                <span key={i} >
                title is {v.title}
                </span>
            );
        });
     
    //const CHDOM = <div>test</div>

        
        return (
            <li>
            {CHDOM}
            </li>
        )
    }

}





/**
 * component
 */
interface PROPS{
    fuga: any;
    o_click: any;
    //questions: any;
}
interface STATE{
    questions :any;
}
class AppComponent extends React.Component<any,STATE,PROPS>{
    
    //https://tech-1natsu.hatenablog.com/entry/2018/08/15/213540
    private textInput = React.createRef<HTMLInputElement>()

    /*
    public state :STATE={  
        questions: [{ title: "question start",select:[{title: "test"}]}]
    }
    */

    public state :STATE={
        questions: []
    }

    render(){

        return(
            <div>
                <ChildApp data={this.state.questions} />
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

        
        return fetch('/data/db3.json')
        .then( res => {
            return res.json();
        })
        .then( res=> {
            this.setState({
                questions : res.todos
            });
        })
        
        

        /*this.setState({
            questions: [
                {
                    title: "test"
                }
            ]
        });
        */
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

        return Object.assign({}, state, {
            fuga: "saisyo",
            questions: [{ title: "question start",select:[{title: "test"}]}]
        });

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

