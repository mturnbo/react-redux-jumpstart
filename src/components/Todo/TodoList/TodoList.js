import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodoItem, removeTodoItem } from 'actions/todoActions';
import TodoItem from '../TodoItem/TodoItem';
import AddTodo from '../AddTodo/AddTodo';
import './TodoList.scss';

const TodoList = ({ items, toggle, remove }) => (
  <div className="jumpstart-todo-list">
    <h2>Todo List</h2>
    <hr />
    <AddTodo />
    {items.map(item => (
      <TodoItem
        {...item}
        toggle={() => toggle(item.id)}
        remove={() => remove(item.id)}
        key={item.id}
      />
    ))}
  </div>
);

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  toggle: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.todo
});

const mapsDispatchToProps = dispatch => ({
  toggle: id => dispatch(toggleTodoItem(id)),
  remove: id => dispatch(removeTodoItem(id))
});

export default connect(mapStateToProps, mapsDispatchToProps)(TodoList);
