import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loremIpsum } from 'lorem-ipsum';
import { addNotification } from 'actions/notificationActions';
import { showModal } from 'actions/modalActions';
import Button from 'components/Button';
import Drop from 'components/Drop';
import { getNotification } from '../../utils';

const ButtonsPage = props => {
  const displayRandomNotification = () => {
    props.actions.addNotification(getNotification());
  };

  const displayModal = () => {
    props.actions.showModal({
      title: 'THIS IS A MODAL',
      content: loremIpsum({
        count: 4,
        units: 'sentences',
        sentenceLowerBound: 4,
        sentenceUpperBound: 8
      })
    });
  };

  /* eslint-disable no-console */
  return (
    <div>
      <div className="uk-inline">
        <Button label="Default" onClick={() => console.log('default')} />
        <Drop mode="click">You clicked the default button.</Drop>
      </div>
      <div className="uk-inline">
        <Button category="primary" label="Primary" onClick={() => console.log('primary')} />
        <Drop mode="click">
          <button className="uk-drop-close uk-align-right" type="button" data-uk-close="true" />
          <p>You clicked the primary button.</p>
        </Drop>
      </div>
      <div className="uk-inline">
        <Button category="secondary" label="Secondary" onClick={() => console.log('secondary')} />
        <Drop mode="hover">You hovered over the secondary button.</Drop>
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
