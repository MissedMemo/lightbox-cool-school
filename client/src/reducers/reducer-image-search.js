import * as id from '../actions/action-types';


export default function( state = null, action ) {

  switch ( action.type ) {

    case id.SEARCH_IMAGES_SUCCESS:
      return action.payload;

    case id.SEARCH_IMAGES_ERROR:
      return action.payload;
  }

  return state;
}