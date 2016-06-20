import * as id from '../actions/action-types';


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