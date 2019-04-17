import React from 'react';
import PropTypes from 'prop-types';

const Drop = ({ mode, children }) => (
  <div data-uk-drop={`mode: ${mode}`}>
    <div className="uk-card uk-card-body uk-card-default">
      {children}
    </div>
  </div>
);

Drop.propTypes = {
  mode: PropTypes.oneOf(['click', 'hover']),
  children: PropTypes.node.isRequired
};

Drop.defaultProps = {
  mode: 'hover'
};

export default Drop;
