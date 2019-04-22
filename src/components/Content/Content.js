import React from 'react';
import PropTypes from 'prop-types';
import './Content.scss';

const Content = ({ title, text }) => (
  <div className="jumpstart-content">
    {title && <h1 className="uk-heading-divider">{title}</h1>}
    <div className="text">{text}</div>
  </div>
);

Content.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired
};

Content.defaultProps = {
  title: null
};

export default Content;
