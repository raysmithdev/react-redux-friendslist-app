const uid = () => Math.random().toString(34).slice(2);

export const addFriend = (name) => {
  return {
    type: 'ADD_FRIEND',
    payload: {
      id: uid(),
      name: name
    }
  };
}
