import { List, Map } from 'immutable';

const init = List([]);

export default (friends=init, action) => {
  switch(action.type) {
    case 'ADD_FRIEND':
      return friends.push(Map(action.payload));
    case 'REMOVE_FRIEND':
        return [
          ...friends.slice(0, action.id),
          ...friends.slice(action.id + 1)
        ];
    default:
      return friends;
  }
}
