import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal, hideModal } from 'actions/modalActions';
import Modal from './Modal';

class ModalContainer extends React.Component {
	constructor(props) {
		super(props);
		this.closeModal = this.closeModal.bind(this);
	}

	closeModal() {
		this.props.actions.hideModal();
	}

	render() {
		return (
			<div className="modal-container">
				{this.props.modalProps.display && <Modal title={this.props.modalProps.title} content={this.props.modalProps.content} onDismissClick={this.closeModal} />}
			</div>
		);
	}
}

ModalContainer.propTypes = {
	actions: PropTypes.shape({
		showModal: PropTypes.func.isRequired,
		hideModal: PropTypes.func.isRequired
	}).isRequired,
	modalProps: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({ showModal, hideModal }, dispatch)
});

const mapStateToProps = state => ({
	modalProps: state.modal
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
