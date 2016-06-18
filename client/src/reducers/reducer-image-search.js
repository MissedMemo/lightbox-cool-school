import { SEARCH_IMAGES_SUCCESS } from '../actions/action-types';

export default function( state = null, action ) {
  switch ( action.type ) {
  case SEARCH_IMAGES_SUCCESS:
    return action.payload;
  }
  return state;
}