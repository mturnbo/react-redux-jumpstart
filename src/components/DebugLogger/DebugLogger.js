import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearLog } from 'actions/debugLogActions';
import Button from 'components/Button';
import './DebugLogger.scss';

const DebugLogger = ({ debugLog, clear }) => (
  <div className="jumpstart-debug-logger">
    <div className="jumpstart-debug-logger-items">
      {debugLog.map(item => (
        <div className="item" key={item.id}>
          {item.logDate}
          {' '}
-
          {' '}
          {item.msg}
        </div>
      ))}
    </div>
    <div>
      <Button category="secondary" onClick={clear} label="Clear" />
    </div>
  </div>
);

DebugLogger.propTypes = {
  debugLog: PropTypes.arrayOf(PropTypes.string).isRequired,
  clear: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ debugLog: state.debugLog });

const mapDispatchToProps = dispatch => ({
  clearLog: () => dispatch(clearLog)
});

export default connect(mapStateToProps, mapDispatchToProps)(DebugLogger);
