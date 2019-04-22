import React from 'react';
import PropTypes from 'prop-types';
import './Parallax.scss';

const Parallax = ({ bgy, image, children }) => (
  <div
    className="uk-height-medium uk-background-cover uk-light uk-flex jumpstart-parallax"
    uk-parallax={`bgy: ${bgy};`}
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical jumpstart-parallax-text">
      {children}
    </div>
  </div>
);

Parallax.propTypes = {
  bgy: PropTypes.number,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

Parallax.defaultProps = {
  bgy: -200
};

export default Parallax;
