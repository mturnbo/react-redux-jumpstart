import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loremIpsum } from 'lorem-ipsum';
import { showModal } from 'actions/modalActions';
import { appendLog } from 'actions/debugLogActions';
import Button from 'components/Button';
import Drop from 'components/Drop';
import { getNotification } from '../../utils';
import { useNotificationValue } from 'components/Notification/Notification.context';

const ButtonsPage = props => {
  const [{ notifications }, dispatch] = useNotificationValue();
  const displayRandomNotification = () => {
    props.addNotification(getNotification());
    props.appendLog('displayed notification');
  };

  const displayModal = () => {
    props.showModal({
      title: 'THIS IS A MODAL',
      content: loremIpsum({
        count: 4,
        units: 'sentences',
        sentenceLowerBound: 4,
        sentenceUpperBound: 8
      })
    });
    props.appendLog('displayed modal');
  };

  return (
    <div>
      <div className="uk-inline">
        <Button label="Default" onClick={() => props.appendLog('default button clicked')} />
        <Drop mode="click">You clicked the default button.</Drop>
      </div>
      <div className="uk-inline">
        <Button category="primary" label="Primary" onClick={() => props.appendLog('primary button clicked')} />
        <Drop mode="click">
          <button className="uk-drop-close uk-align-right" type="button" data-uk-close="true" />
          <p>You clicked the primary button.</p>
        </Drop>
      </div>
      <div className="uk-inline">
        <Button category="secondary" label="Secondary" onClick={() => props.appendLog('secondary button clicked')} />
        <Drop mode="hover">You hovered over the secondary button.</Drop>
      </div>
      <Button category="danger" label="Danger" onClick={() => props.appendLog('danger button clicked')} />
      <Button category="primary" label="Notification" />
      <Button category="secondary" label="Modal" onClick={displayModal} />
    </div>
  );
};

ButtonsPage.propTypes = {
  addNotification: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  appendLog: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addNotification: notification => dispatch(addNotification(notification)),
  showModal: modal => dispatch(showModal(modal)),
  appendLog: msg => dispatch(appendLog(msg))
});

export default connect(null, mapDispatchToProps)(ButtonsPage);
