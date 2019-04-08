import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({ type, size, title, content, footer }) => {
  const cardClass = classNames({
    'uk-card': true,
    'uk-card-body': true,
    'uk-card-small': size === 'small',
    'uk-card-large': size === 'large',
    'uk-card-default': type === 'default',
    'uk-card-primary': type === 'primary',
    'uk-card-secondary': type === 'secondary'
  });

  return (
    <div className={cardClass}>
      <div className="uk-card-header">
        <h3 className="uk-card-title">{title}</h3>
      </div>
      <p>{content}</p>
      {footer && <div className="uk-card-footer">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  footer: PropTypes.string
};

Card.defaultProps = {
  type: 'default',
  size: 'small',
  footer: null
};

export default Card;
