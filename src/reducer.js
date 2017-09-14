// 初期ステート設定
const INITIAL_STATE = {
	count: 0
}

// actionに応じてステート変更
export default function reducer(state_ = INITIAL_STATE, action_) {
	switch(action_.type) {
		case 'INCREMENT': {
			return { count: state_.count + 1 }
		}
		case 'DECREMENT': {
			return { count: state_.count - 1 }
		}
		default: {
			return state_
		}
	}
}