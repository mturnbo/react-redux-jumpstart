import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNotification } from 'actions/notificationActions';
import { showModal } from 'actions/modalActions';
import {
  Button,
  Content,
  Counter
} from 'components/';
import { getRandomContent, getNotification } from '../../utils';

const ButtonsPage = props => {
  const displayRandomNotification = () => {
    props.actions.addNotification(getNotification());
  };

  const displayModal = () => {
    props.actions.showModal({
      title: 'THIS IS A MODAL',
      content: getRandomContent(2)
    });
  };

  /* eslint-disable no-console */
  return (
    <div>
      <Content title="Buttons" />
      <Button label="Default" onClick={() => console.log('default')} />
      <Button category="success" label="Success" onClick={() => console.log('success')} />
      <Button category="error" label="Error" onClick={() => console.log('error')} />
      <Button category="warning" label="Warning" onClick={() => console.log('warning')} />
      <Button label="Notification" onClick={displayRandomNotification} />
      <Button label="Modal" onClick={displayModal} />
      <br />
      <Counter />
    </div>
  );
  /* eslint-enable no-console */
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
