import {combineReducers} from 'redux';
import { searchSuccessReducer, searchErrorReducer } from './reducer-image-search';

const rootReducer = combineReducers({
  images: searchSuccessReducer,
  error: searchErrorReducer
});

export default rootReducer;