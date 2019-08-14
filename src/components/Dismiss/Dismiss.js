import React from 'react';
import PropTypes from 'prop-types';
import { getTransitionEvent } from '../../utils';
import './Dismiss.scss';

const containerClass = '.dismiss-effect';

const Dismiss = ({ dismissCallback, effect }) => {
  const dismiss = e => {
    const container = e.target.closest(containerClass);
    const transitionEvent = getTransitionEvent(container);
    container.addEventListener(transitionEvent, dismissCallback, false);
    effect === 'slideUp' && container.classList.add('transition-height-hidden');
    effect === 'fadeout' && container.classList.add('transition-fadeout');
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
  effect: 'slideUp'
};

export default Dismiss;
