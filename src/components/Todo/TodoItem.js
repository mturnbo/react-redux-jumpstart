import React from 'react';
import PropTypes from 'prop-types';
import Dismiss from 'components/Dismiss';
import './TodoItem.scss';
import classNames from 'classnames';

const TodoItem = ({ text, complete, toggle, remove }) => {
  const todoClass = classNames({
    'todo-item': true,
    complete
  });

  return (
    <div role="listitem" className={todoClass} onClick={toggle}>
      {text}
      <Dismiss dismissCallback={remove} />
    </div>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

export default TodoItem;
