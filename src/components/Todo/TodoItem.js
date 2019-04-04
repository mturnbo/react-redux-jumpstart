import React from 'react';
import PropTypes from 'prop-types';
import Dismiss from 'components/Dismiss';
import './TodoItem.scss';

const TodoItem = ({ text, complete, toggle, remove }) => (
  <div role="listitem" className={complete ? 'todo-item complete' : 'todo-item'} onClick={toggle}>
    {text}
    <Dismiss dismissCallback={remove} />
  </div>
);

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

export default TodoItem;
