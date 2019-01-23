import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ clicked: true });
	}

	render() {
		return (
			<button className={"btn " + this.props.type} onClick={this.props.onClick || this.handleClick}>{this.props.label}</button>
		);
	}
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func
};

Button.defaultProps = {
	type: 'default',
	label: 'Click'
};

export default Button;
