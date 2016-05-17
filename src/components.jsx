import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import TextField from 'material-ui/TextField';
import Styles from './style.css';


export const Friend = (props) => {
  const { friend, onDelete } = props;

  const onRemove = (id) => {
    console.log(id);
  };

  return (
    <div>
      <List>
         <ListItem primaryText={friend.name} />
       </List>
    </div>
  );
}

export const FriendsList = (props) => {
  const { friends, addFriend } = props;

  const onSubmit = (event) => {
    const input = event.target;
    const name = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = name.length > 0;

    if(isEnterKey && isLongEnough) {
      input.value = '';
      addFriend(name);
    }
  };

  return (
    <div>
      <div className="container">
        <TextField
          hintText="Add a new friend"
          onKeyDown={onSubmit}
        />
      </div>
      {friends.map(f => (
          <Friend key={f.get('id')} friend={f.toJS()} />
      ))}
    </div>
  );
}
