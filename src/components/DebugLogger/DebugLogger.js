import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearLog } from '@/store/actions/debugLogActions';
import Button from '@/components/Button';
import './DebugLogger.scss';

const DebugLogger = ({ debugLog, clear }) => (
  <div className="jumpstart-debug-logger">
    <div className="jumpstart-debug-logger-items">
      <div className="jumpstart-debug-logger-title">DEBUG LOG</div>
      {debugLog.map(item => (
        <div className="item" key={item.id}>
          <span className="item-date">{item.logDate}</span>
          <span className="item-msg">{item.msg}</span>
        </div>
      ))}
    </div>
    <div>
      <Button
        category="secondary"
        colors={{ background: '#FF9700', text: '#000000' }}
        onClick={clear}
        label="Clear"
        icon="trash"
      />
    </div>
  </div>
);

DebugLogger.propTypes = {
  debugLog: PropTypes.arrayOf(PropTypes.string).isRequired,
  clear: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ debugLog: state.debugLog });

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clearLog())
});

export default connect(mapStateToProps, mapDispatchToProps)(DebugLogger);
