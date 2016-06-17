import {combineReducers} from 'redux';
import ImageSearchReducer from './reducer-image-search';

const rootReducer = combineReducers({
  results: ImageSearchReducer
});

export default rootReducer;