import {
  fetchUserPending,
  fetchUserSuccess,
  fetchUserError
} from '../store/actions/userActions';
import store from '../store';

const userExists = id => {
  const state = store.getState();
  return state.users.data.filter(user => user.id === parseInt(id, 10)).length > 0;
};

function fetchUser(id) {
  return dispatch => {
    if (userExists(id)) {
      dispatch(fetchUserError('DUPLICATE USER'));
    }
    dispatch(fetchUserPending());
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchUserSuccess(res));
      })
      .catch(error => {
        dispatch(fetchUserError(error));
      });
  };
}

export default fetchUser;
