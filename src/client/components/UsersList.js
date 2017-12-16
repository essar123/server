import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  rendersUser() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  render() {
    return (
      <div>
        List of users:
        <ul>{this.rendersUser()}</ul>
      </div>
    )
  }
}

export const loadData = (store) => {
  return store.dispatch(fetchUsers());
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, {fetchUsers})(UsersList);
