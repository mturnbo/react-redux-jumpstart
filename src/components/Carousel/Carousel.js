/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';

// TODO: Make nav icons display
const Carousel = ({ images }) => (
  <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" data-uk-slider="true">
    <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
      {images.map(image => <li><img src={image} alt="" /></li>)}
    </ul>
    <a
      className="uk-position-center-left uk-position-small"
      href="#"
      data-uk-slidenav-previous
      data-uk-slider-item="previous"
    />
    <a
      className="uk-position-center-right uk-position-small"
      href="#"
      data-uk-slidenav-next
      data-uk-slider-item="next"
    />
  </div>
);

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired
};

export default Carousel;
