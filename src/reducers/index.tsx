// 初期ステート設定
const initialState = {
    fuga: 0
  }
  
  // actionに応じてステート変更
  export default function reducer(state = initialState, action :any) {
    switch (action.type) {
      case 'INCREMENT': {
        return { fuga: state.fuga + 1 }
      }
      case 'DECREMENT': {
        return { fuga: state.fuga - 1 }
      }
      default:
        return state
    }
  }