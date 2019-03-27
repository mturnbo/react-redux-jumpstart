import React from 'react';
import PropTypes from 'prop-types';
import { fadeOut, slideUp } from '../../utils';
import './Dismiss.scss';

const Dismiss = ({ dismissCallback, effect }) => {
  const dismiss = (e) => {
    const containerClass = '.dismiss-effect';
    if (containerClass) {
      if (effect === 'slideUp') {
        slideUp(e, containerClass).then(dismissCallback);
      } else {
        fadeOut(e, containerClass).then(dismissCallback);
      }
    } else {
      dismissCallback();
    }
  };

  return (
    <button type="button" className="dismiss" aria-label="dismiss" onClick={dismiss} />
  );
};

Dismiss.propTypes = {
  dismissCallback: PropTypes.func.isRequired,
  effect: PropTypes.string
};

Dismiss.defaultProps = {
  effect: 'slideUp'
};

export default Dismiss;
