import * as id from './action-types';
import axios from 'axios';


export function searchImages( searchTerms ) {

  //const results = fakeAjaxRequest( searchTerms );
  var query = 'https://www.googleapis.com/customsearch/v1?'
            + 'key=AIzaSyDRNg12al500nvBg4w9vXxHxqMt4iVPgLA'
            + '&cx=013785967554816369765:m8ndxwd7vzw'
            + '&safe=medium'
            + '&q=' + searchTerms;

  return function(dispatch) {
    axios.get( query )
      .then((response) => {
        dispatch( createSuccessAction(response) );
      })
      .catch((err) => {
        dispatch( createErrorAction(err) );
      });
  };

}

function createSuccessAction( searchResults ) {
  return {
    type: id.SEARCH_IMAGES_SUCCESS,
    payload: [ 'image1', 'image2', 'image3' ] //searchResults
  };
}

function createErrorAction( error ) {
  return {
    type: id.SEARCH_IMAGES_FAILED,
    payload: error
  };
}

function fakeAjaxRequest( searchTerms ) {
  
  var results = [];

  if( searchTerms !== 'NO_RESULTS' ) {
    for( var i = 0; i < 40; i++ ) {
      results.push( { caption: `image${ i + 1 }` } );
    }
  }
  
  return results;
}

