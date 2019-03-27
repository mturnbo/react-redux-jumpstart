import React from 'react';
import PropTypes from 'prop-types';
import Dismiss from 'components/Dismiss';
import './Modal.scss';

const Modal = ({
  title, content, onDismissClick
}) => (
  <div className="modal">
    <div className="modal-overlay" />
    <div className="modal-popup">
      <Dismiss dismissCallback={onDismissClick} />
      <div className="modal-title">{title}</div>
      <div className="modal-content">
        {content}
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDismissClick: PropTypes.func.isRequired
};

export default Modal;
