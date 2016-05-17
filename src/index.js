import React from 'react';
import { render } from 'react-dom';
import { FriendsList } from './containers';
import { List, Map } from 'immutable';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

const store = createStore(reducer);

render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
        <FriendsList />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
