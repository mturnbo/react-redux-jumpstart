import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideModal } from 'actions/modalActions';
import Modal from './Modal';

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.hide(); // eslint-disable-line react/destructuring-assignment
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
  display: PropTypes.bool.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  hide: PropTypes.func.isRequired
};

ModalContainer.defaultProps = {
  title: 'Modal',
  content: 'Modal'
};

const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(hideModal())
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
