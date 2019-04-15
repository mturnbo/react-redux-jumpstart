import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const List = ({ items, modifier }) => {
  const listClass = classNames({
    'uk-list': true,
    'uk-list-bullet': modifier === 'bullet',
    'uk-list-divider': modifier === 'divider',
    'uk-list-striped': modifier === 'striped'
  });

  /* eslint-disable react/no-array-index-key */
  return (
    <ul className={listClass}>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  modifier: PropTypes.string
};

List.defaultProps = {
  modifier: null
};

export default List;
