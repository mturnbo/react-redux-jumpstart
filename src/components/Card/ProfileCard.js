import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const ProfileCard = ({ fullname, title, bio, avatar }) => {
  const cardProps = {
    type: 'default',
    size: 'small',
    title: fullname,
    subTitle: title,
    content: bio,
    topImage: `/assets/images/avatars/${avatar}.png`
  };

  return (
    <Card {...cardProps} />
  );
};

ProfileCard.propTypes = {
  fullname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  avatar: PropTypes.string
};

ProfileCard.defaultProps = {
  avatar: 'generic'
};

export default ProfileCard;
