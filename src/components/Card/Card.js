import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({
  fullname, title, bio, avatar
}) => (
  <div className="card">
    <div className="card-avatar">
      <img src={`/assets/images/avatars/${avatar}.png`} alt={fullname} />
    </div>
    <div className="card-fullname">{fullname}</div>
    <div className="card-title">{title}</div>
    <div className="card-bio">{bio}</div>
  </div>
);

Card.propTypes = {
  fullname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bio: PropTypes.string,
  avatar: PropTypes.string
};

Card.defaultProps = {
  avatar: 'user-generic',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bacon ipsum dolor amet porchetta bacon salami chuck chicken.'
};

export default Card;
