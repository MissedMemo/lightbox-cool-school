import * as id from '../actions/action-types';


export function searchSuccessReducer( state = null, action ) {
  switch ( action.type ) {
    case id.SEARCH_IMAGES_SUCCESS:
      return action.payload;
  }
  return state;
}

export function searchErrorReducer( state = null, action ) {
  switch ( action.type ) {
    case id.SEARCH_IMAGES_ERROR:
      return action.payload;
  }

  return state;
}