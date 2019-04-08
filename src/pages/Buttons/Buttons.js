import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNotification } from 'actions/notificationActions';
import { showModal } from 'actions/modalActions';
import content from 'data/content.json';
import Button from 'components/Button';
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
      <div className="uk-inline">
        <Button label="Default" onClick={() => console.log('default')} />
        <div data-uk-drop="mode: click">
          <div className="uk-card uk-card-body uk-card-default">You clicked the default button.</div>
        </div>
      </div>
      <div className="uk-inline">
        <Button category="primary" label="Primary" onClick={() => console.log('primary')} />
        <div data-uk-drop="mode: click">
          <div className="uk-card uk-card-body uk-card-default">You clicked the primary button.</div>
        </div>
      </div>
      <div className="uk-inline">
        <Button category="secondary" label="Secondary" onClick={() => console.log('secondary')} />
        <div data-uk-drop="mode: hover">
          <div className="uk-card uk-card-body uk-card-default">You hovered over the secondary button.</div>
        </div>
      </div>
      <Button category="danger" label="Danger" onClick={() => console.log('danger')} />
      <Button category="primary" label="Notification" onClick={displayRandomNotification} />
      <Button category="secondary" label="Modal" onClick={displayModal} />
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
