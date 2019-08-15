import React from 'react';
import PropTypes from 'prop-types';
import { getCSSEvent } from '../../utils';
import './Dismiss.scss';

const containerClass = '.dismiss-effect';

const Dismiss = ({ dismissCallback, effect }) => {
  const dismiss = e => {
    if (effect === 'none') {
      dismissCallback();
    } else {
      const container = e.target.closest(containerClass);
      const transitionEvent = getCSSEvent('transition', container);
      container.addEventListener(transitionEvent, dismissCallback, false);
      effect === 'slideUp' && container.classList.add('transition-height-hidden');
      effect === 'fadeOut' && container.classList.add('transition-fadeout');
    }
  };

  return (
    <button type="button" className="jumpstart-dismiss" aria-label="dismiss" onClick={dismiss} />
  );
};

Dismiss.propTypes = {
  dismissCallback: PropTypes.func.isRequired,
  effect: PropTypes.string
};

Dismiss.defaultProps = {
  effect: 'none'
};

export default Dismiss;
