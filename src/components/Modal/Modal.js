import React from 'react';
import PropTypes from 'prop-types';
import Dismiss from 'components/Dismiss';
import './Modal.scss';

const Modal = ({ display, title, content, onDismissClick }) => {
	return (
		<div className={"modal-container " + display}>
			<div className="modal-overlay"></div>
			<div className="modal-popup">
				<Dismiss onClick={onDismissClick} />
				<div className="modal-title">{title}</div>
				<div className="modal-content">
					{content}
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	display: PropTypes.string,
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	onDismissClick: PropTypes.func.isRequired
};

export default Modal;
