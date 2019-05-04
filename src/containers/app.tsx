//import React from 'react'
import * as React from "react";

import { connect } from 'react-redux';
import App from '../component/app';
import AppActions from '../actions/action';

function mapStateToProps(state :any){
  return state
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch :any) {
  return {
    Increment_Click: () => { dispatch(AppActions.increment()) },
    Decrement_Click: () => { dispatch(AppActions.decrement())}
  }
}

export default connect(//これが子コンポーネントで使える要素（props）
  mapStateToProps,
  mapDispatchToProps
)(App)