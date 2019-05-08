import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideModal as hideModalAction } from 'actions/modalActions';
import Modal from './Modal';

const ModalContainer = ({ display, title, content, hideModal }) => (
  <div className="jumpstart-modal-container">
    {display && <Modal title={title} content={content} onDismissClick={hideModal} />}
  </div>
);

ModalContainer.propTypes = {
  display: PropTypes.bool.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
	hideModal: PropTypes.func.isRequired
};

ModalContainer.defaultProps = {
  title: 'Modal',
  content: 'Modal'
};

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModalAction())
});

const mapStateToProps = state => {
  const { display, title, content } = state.modal;
  return {
    display,
    title,
    content
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
