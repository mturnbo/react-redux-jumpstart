import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodoItem } from 'actions/todoActions';
import './AddTodo.scss';

const AddTodo = ({ add }) => {
  let input;

  return (
    <div className="jumpstart-add-todo">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          add(input.value);
          input.value = '';
        }}
      >
        <input className="uk-input" ref={node => (input = node)} placeholder="Add Todo" />
        <button className="uk-button uk-button-primary uk-button-small uk-align-right" type="submit">Add Todo</button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  add: PropTypes.func.isRequired
};

const mapsDispatchToProps = dispatch => ({
  add: (text) => dispatch(addTodoItem(text))
});

export default connect(null, mapsDispatchToProps)(AddTodo);
