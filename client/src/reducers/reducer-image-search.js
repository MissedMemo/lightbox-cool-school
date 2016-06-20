import * as id from '../actions/action-types';

/*
 Note: success and error conditions are mutually-exclusive! Ok for now,
 but other ways to handle this include a third, combined reducer etc.
 see: https://github.com/reactjs/redux/issues/749
*/

export function searchSuccessReducer( state = null, action ) {
  switch ( action.type ) {
    case id.SEARCH_IMAGES_SUCCESS:
      return action.payload;
    case id.SEARCH_IMAGES_ERROR:
      return null;
  }
  return state;
}

export function searchErrorReducer( state = null, action ) {
  switch ( action.type ) {
    case id.SEARCH_IMAGES_SUCCESS:
      return null;
    case id.SEARCH_IMAGES_ERROR:
      return action.payload;
  }

  return state;
}