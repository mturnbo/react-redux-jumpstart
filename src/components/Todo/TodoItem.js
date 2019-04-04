import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ text, complete, onClick }) => (
  <li className={complete ? 'todo-item complete' : 'todo-item'} onClick={onClick}>{text}</li>
);

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default TodoItem;
