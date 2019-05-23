import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ id, username, name, email, address, phone, company }) => {
  const avatar = '/assets/images/avatars/user-generic.png';

  return (
    <div className="uk-card uk-card-body" data-id={id}>
      <div className="uk-card-media-top"><img src={avatar} alt={username} /></div>
      <div className="uk-card-header">
        <h3 className="uk-card-title  uk-margin-remove-bottom">{name}</h3>
        <p className="uk-text-meta uk-margin-remove-top">{company.name}</p>
      </div>
      <div className="uk-card-body">
        {address.street}<br />
        {address.city}<br />
        {address.zipcode}<br />
        {phone}<br />
        {email}<br />
      </div>
      <div className="uk-card-footer">{company.bs}</div>
    </div>
  );
};

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string
  }).isRequired,
  phone: PropTypes.string.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string,
    bs: PropTypes.string
  }).isRequired
};

export default UserCard;
