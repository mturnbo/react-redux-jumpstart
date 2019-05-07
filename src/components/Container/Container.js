import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Container.scss';

const Container = ({ size, children }) => {
  const containerClass = classNames({
    jumpstart__container: true,
    'jumpstart__container-xsmall': size === 'xsmall',
    'jumpstart__container-small': size === 'small',
    'jumpstart__container-medium': size === 'medium',
    'jumpstart__container-large': size === 'large',
    'jumpstart__container-xlarge': size === 'xlarge'
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
