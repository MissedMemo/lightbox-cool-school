import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import RootReducer from './reducers/combined-reducers';
import App from './components/app';

render(
  <Provider store={ createStore(RootReducer) } >
    <App />
  </Provider>,
  document.getElementById('root')
);
