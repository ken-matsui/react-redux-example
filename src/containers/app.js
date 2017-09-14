//import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app'
import { increment, decrement } from '../actions/app'

// グローバルなstateから必要な値をとってきて、コンポーネントのthis.propsとしてセット
// 今回はいずれにしろstateのプロパティには{count}しか無いため、stateをまるごと返す
function mapStateToProps(state_) {
	return state_
}

// clickでactionを飛ばす(そのまま値を流す)
function mapDispatchToProps(dispatch_) {
	return {
		plusClick: () => { dispatch_(increment()) },
		minusClick: () => { dispatch_(decrement()) },
	}
}

//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)