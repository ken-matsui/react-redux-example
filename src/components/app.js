import React from 'react';
import Buttons from './buttons';
import Num from './num';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Num num={ this.props.count } />
				<Buttons plusClick={ () => this.props.plusClick(1) } minusClick={ () => this.props.minusClick(1) } />
			</div>
		);
	}
}