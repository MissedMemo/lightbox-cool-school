import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import RootReducer from './reducers/combined-reducers';
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

render(
  <Provider store={ createStoreWithMiddleware(RootReducer) } >
    <App />
  </Provider>,
  document.getElementById('root')
);
