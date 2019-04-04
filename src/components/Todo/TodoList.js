import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodoItem } from 'actions/todoActions';
import TodoItem from './TodoItem';
import './TodoList.scss';

const TodoList = ({ items, toggle }) => (
  <div className="todo-list">
    <ul>
      {items.map(item => (
        <TodoItem key={item.id} {...item} onClick={() => toggle(item.id)} />
      ))}
    </ul>
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
  toggle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.todo
});

const mapsDispatchToProps = dispatch => ({
  toggle: id => dispatch(toggleTodoItem(id))
});

export default connect(mapStateToProps, mapsDispatchToProps)(TodoList);
