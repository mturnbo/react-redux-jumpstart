import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Container = ({ size, children }) => {
  const containerClass = classNames({
    'uk-container': true,
    'uk-container-xsmall': size === 'xsmall',
    'uk-container-small': size === 'small',
    'uk-container-large': size === 'large',
    'uk-container-expand': size === 'expand'
  });

  return (
    <div className={containerClass}>
      {children}
    </div>
  );
};

Container.propTypes = {
  size: PropTypes.oneOf(['xsmall', 'small', 'large', 'expand']),
  children: PropTypes.node.isRequired
};

Container.defaultProps = {
  size: 'expand'
};

export default Container;
