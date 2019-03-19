import React from 'react';
import PropTypes from 'prop-types';
import './Popup.scss';

class Popup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: true,
		}
	}

	render() {
		return (
			<div className="popup dismiss-effect">
				<button className="dismiss" aria-label="dismiss" onClick={dismiss}></button>
				{this.props.children}
			</div>
		);
	}

}

Notification.propTypes = {
	visible: PropTypes.bool
};

export default Popup;




