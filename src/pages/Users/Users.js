import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchUserAction from '@/services/fetchUser';
import {
  getUsers,
  getUserPending,
  getUserError
} from '@/store/reducers/userReducer';
import UserCard from '@/components/Card/UserCard';

class UserPage extends React.Component {
  componentWillMount() {
    if (this.props.match.params.id) {
      const { fetchUser } = this.props;
      fetchUser(this.props.match.params.id);
    }
  }

  render() {
    const { users, pending, error } = this.props;
    if (pending) {
      return <div><h3>Loading...</h3></div>;
    }
    if (users.length === 0) {
      return <div><h3>No users found</h3></div>;
    }
    return (
      <div>
        <h2>Users</h2>
        {users && users.map(user => <UserCard {...user} />)}
        {error && <p>{error}</p>}
      </div>
    );
  }
}

UserPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      username: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      website: PropTypes.string
    }),
  ).isRequired,
  pending: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  fetchUser: PropTypes.func.isRequired
};

UserPage.defaultProps = {
  error: null
};

const mapStateToProps = state => ({
  users: getUsers(state.users),
  pending: getUserPending(state.users),
  error: getUserError(state.users),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser: fetchUserAction
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
