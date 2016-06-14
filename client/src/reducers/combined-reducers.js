import {combineReducers} from 'redux';
import SearchResultsReducer from './reducer-search-results';

const rootReducer = combineReducers({
  results: SearchResultsReducer
});

export default rootReducer;