import { connect } from 'react-redux';
import * as components from './components.jsx';
import { addFriend } from './actions';

export const FriendsList = connect(
  function mapStateToProps(state) {
    return { friends: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addFriend: name => dispatch(addFriend(name))
    };
  }
)(components.FriendsList);
