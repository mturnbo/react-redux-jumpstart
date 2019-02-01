import React from 'react';
import PropTypes from 'prop-types';
import { fadeOut, slideUp} from '../../utils';
import './Dismiss.scss';

const Dismiss = ({ dismissCallback, effect='slideUp' }) => {
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
		<button className="dismiss" aria-label="dismiss" onClick={dismiss}></button>
	);
};

Dismiss.propTypes = {
	dismissCallback: PropTypes.func.isRequired
};

export default Dismiss;
