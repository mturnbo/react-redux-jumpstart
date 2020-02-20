import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Dismiss from '@/components/Dismiss';
import './TodoItem.scss';

const TodoItem = ({ text, complete, toggle, remove }) => {
  const todoClass = classNames({
    'jumpstart-todo-item': true,
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
