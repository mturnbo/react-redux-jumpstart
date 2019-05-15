import React from 'react';
import PropTypes from 'prop-types';

const Accordian = ({ items }) => (
  <div>
    <ul data-uk-accordion>
      {items.map(item => (
        <li>
          <a className="uk-accordion-title" href="#">{item.title}</a>
          <div className="uk-accordion-content">{item.content}</div>
        </li>
      ))}
    </ul>
  </div>
);

Accordian.propTypes = {
  items: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};

export default Accordian;
