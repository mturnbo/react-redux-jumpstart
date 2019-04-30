import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Container.scss';

const Container = ({ size, children }) => {
  const containerClass = classNames({
    'jumpstart-container': true,
    'jumpstart-container-xsmall': size === 'xsmall',
    'jumpstart-container-small': size === 'small',
    'jumpstart-container-medium': size === 'medium',
    'jumpstart-container-large': size === 'large',
    'jumpstart-container-xlarge': size === 'xlarge'
  });

  return (
    <div className={containerClass}>
      {children}
    </div>
  );
};

Container.propTypes = {
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'expand']).isRequired,
  children: PropTypes.node.isRequired
};

export default Container;
