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
    this.props.actions.hideModal(); // eslint-disable-line react/destructuring-assignment
  }

  render() {
    const { display, title, content } = this.props;
    return (
      <div className="modal-container">
        {display && <Modal title={title} content={content} onDismissClick={this.closeModal} />}
      </div>
    );
  }
}

ModalContainer.propTypes = {
  actions: PropTypes.shape({
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
  }).isRequired,
  display: PropTypes.bool.isRequired,
  title: PropTypes.string,
  content: PropTypes.string
};

ModalContainer.defaultProps = {
  title: 'Modal',
  content: 'Modal'
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ showModal, hideModal }, dispatch)
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
