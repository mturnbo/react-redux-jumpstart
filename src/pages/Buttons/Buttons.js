import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNotification } from 'actions/notificationActions';
import { showModal } from 'actions/modalActions';
import content from 'data/content.json';
import {
  Button,
  Content,
  Counter
} from 'components/';
import { getRandomSample, getNotification } from '../../utils';

const ButtonsPage = props => {
  const displayRandomNotification = () => {
    props.actions.addNotification(getNotification());
  };

  const displayModal = () => {
    props.actions.showModal({
      title: 'THIS IS A MODAL',
      content: getRandomSample(content.text, 2).join(' ')
    });
  };

  /* eslint-disable no-console */
  return (
    <div>
      <Content title="Buttons" />
      <Button label="Default" onClick={() => console.log('default')} />
      <Button category="primary" label="Primary" onClick={() => console.log('primary')} />
      <Button category="secondary" label="Secondary" onClick={() => console.log('secondary')} />
      <Button category="danger" label="Danger" onClick={() => console.log('danger')} />
      <Button category="primary" label="Notification" onClick={displayRandomNotification} />
      <Button category="secondary" label="Modal" onClick={displayModal} />
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
