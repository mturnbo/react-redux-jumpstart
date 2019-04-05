import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodoItem } from 'actions/todoActions';
import Button from 'components/Button';
import './AddTodo.scss';

const AddTodo = ({ add }) => {
  let input;

  return (
    <div className="add-todo">
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
        <input ref={node => (input = node)} />
        <Button type="submit" label="Add Todo" onClick={null} />
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
