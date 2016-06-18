import { SEARCH_IMAGES } from '../actions/action-types';

export default function( state = null, action ) {
  switch ( action.type ) {
  case SEARCH_IMAGES:
    return action.payload;
  }
  return state;
}