import { List, Map } from 'immutable';

const init = List([]);

export default (friends=init, action) => {
  switch(action.type) {
    case 'ADD_FRIEND':
      return friends.push(Map(action.payload));
    default:
      return friends;
  }
}
