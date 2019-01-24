import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNotification } from 'actions/notificationActions';
import Button from 'components/Button';

const ButtonsPage = props => {
	const randomNotification = () => {
		const types = ['primary', 'link', 'info', 'success', 'warning', 'danger'];
		const notificationType = types[Math.floor(Math.random() * types.length)];
		const { addNotification } = props.actions;
		const d = new Date().toString();
		addNotification({
			type: notificationType,
			title: notificationType.toUpperCase(),
			message: ` ${d} Cupim frankfurter turducken, ham ground round bacon leberkas. Bacon ipsum dolor amet brisket jowl sirloin turducken, shank meatball swine filet mignon.`
		});
	};

	return (
		<div>
			<h2>Buttons</h2>
			<p>
				T-bone andouille cow beef ribs boudin, ball tip ribeye tail turkey shank pig picanha. Prosciutto capicola beef
				brisket tail sirloin meatloaf frankfurter. Rump spare ribs turducken kielbasa tenderloin flank, jowl drumstick
				tail jerky corned beef ham. Chuck rump pork andouille, meatball buffalo tongue venison. Pork belly tail salami
				turducken short ribs swine landjaeger beef turkey buffalo drumstick shank meatball jerky.
			</p>
			<Button label="Default"/>
			<Button type="success" label="Success"/>
			<Button type="error" label="Error"/>
			<Button type="warning" label="Warning"/>
			<Button label="Notification" onClick={randomNotification} />
		</div>
	);
};

ButtonsPage.propTypes = {
	actions: PropTypes.shape({
		addNotification: PropTypes.func.isRequired
	}).isRequired
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({ addNotification }, dispatch)
});

export default connect(null, mapDispatchToProps)(ButtonsPage);
