import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNotification } from 'actions/notificationActions';
import { showModal } from 'actions/modalActions';
import { getRandomSample } from '../../utils';
import content from 'data/content.json';
import {
	Button,
	Content,
	Counter
} from 'components/';

const ButtonsPage = props => {
	const randomNotification = () => {
		const types = ['primary', 'link', 'info', 'success', 'warning', 'danger'];
		const notificationType = types[Math.floor(Math.random() * types.length)];
		const d = new Date().toString();
		props.actions.addNotification({
			type: notificationType,
			title: notificationType.toUpperCase(),
			message: `${d} ${getRandomSample(content.text, 2).join(' ')}`
		});
	};

	const showModal = () => {
		props.actions.showModal({
			title: 'THIS IS A MODAL',
			content: getRandomSample(content.text, 2).join(' ')
		});
	};

	return (
		<div>
			<Content title="Buttons" />
			<Button label="Default" />
			<Button type="success" label="Success" />
			<Button type="error" label="Error" />
			<Button type="warning" label="Warning" />
			<Button label="Notification" onClick={randomNotification} />
			<Button label="Modal" onClick={showModal} />
			<br />
			<Counter />
		</div>
	);
};

ButtonsPage.propTypes = {
	actions: PropTypes.shape({
		addNotification: PropTypes.func.isRequired,
		showModal: PropTypes.func.isRequired
	}).isRequired
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({ addNotification, showModal }, dispatch)
});

export default connect(null, mapDispatchToProps)(ButtonsPage);
