const INITIAL_STATE = {
	count: 0
}

// actionに応じてstate変更
export default function reducer(state_ = INITIAL_STATE, action_) {
	switch(action_.type) {
		case 'INCREMENT': {
			return { count: state_.count + action_.count }
		}
		case 'DECREMENT': {
			return { count: state_.count - action_.count }
		}
		default: {
			return state_
		}
	}
}