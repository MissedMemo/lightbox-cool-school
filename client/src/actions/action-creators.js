import * as id from './action-types';

export function getImages( searchTerms ) {

  const results = fakeAjaxRequest( searchTerms );

  return {
    type: id.SEARCH_IMAGES,
    payload: results
  };
}

function fakeAjaxRequest() {
  var results = [];
  for( var i = 0; i < 40; i++ ) {
    results.push( { caption: `image${ i + 1 }` } );
  }
  return results;
}