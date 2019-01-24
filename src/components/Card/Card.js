import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ fullname, title, avatar }) => (
	<div className="card">
		<div className="card-avatar">
			<img src={`/assets/images/avatars/${avatar}.png`} />
		</div>
		<div className="card-fullname">{fullname}</div>
		<div className="card-title">{title}</div>
	</div>
);

Card.propTypes = {
	fullname: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	avatar: PropTypes.string
};

Card.defaultProps = {
	avatar: 'generic'
};

export default Card;
