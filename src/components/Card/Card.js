import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({ type, size, title, subTitle, content, footer, topImage }) => {
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
      {topImage && <div className="uk-card-media-top"><img src={topImage} alt={title} /></div>}
      <div className="uk-card-header">
        <h3 className="uk-card-title  uk-margin-remove-bottom">{title}</h3>
        {subTitle && <p className="uk-text-meta uk-margin-remove-top">{subTitle}</p>}
      </div>
      <div className="uk-card-body">
        <p>{content}</p>
      </div>
      {footer && <div className="uk-card-footer">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  content: PropTypes.string.isRequired,
  footer: PropTypes.string,
  topImage: PropTypes.string
};

Card.defaultProps = {
  type: 'default',
  size: 'small',
  subTitle: null,
  footer: null,
  topImage: null
};

export default Card;
