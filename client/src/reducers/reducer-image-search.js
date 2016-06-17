import { SEARCH_IMAGES } from '../actions/action-types';

export default function( state = [], action ) {
  switch ( action.type ) {
  case SEARCH_IMAGES:
    return action.payload;
  }
  return state;
}