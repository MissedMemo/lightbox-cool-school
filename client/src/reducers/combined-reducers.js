import {combineReducers} from 'redux';
import ImageSearchReducer from './reducer-image-search';

const rootReducer = combineReducers({
  images: ImageSearchReducer
});

export default rootReducer;