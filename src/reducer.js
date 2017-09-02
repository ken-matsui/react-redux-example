// 初期ステート設定
const INITIAL_STATE = {
  fuga: 0
}

// actionに応じてステート変更
export default function reducer(state_ = INITIAL_STATE, action_) {
  switch(action_.type) {
    case 'INCREMENT': {
      return { fuga: state_.fuga + 1 }
    }
    case 'DECREMENT': {
    	return { fuga: state_.fuga - 1 }
    }
    default:
      return state_
  }
}