import { SEARCH_IMAGES_SUCCESS, SEARCH_IMAGES_ERROR } from './action-types';
import axios from 'axios';


export function searchImages( searchTerms ) {

  //const results = fakeAjaxRequest( searchTerms );
  const query = 'https://www.googleapis.com/customsearch/v1?'
              + 'key=AIzaSyDRNg12al500nvBg4w9vXxHxqMt4iVPgLA'
              + '&cx=013785967554816369765:m8ndxwd7vzw'
              + '&safe=medium'
              + '&q=' + searchTerms;

  return function(dispatch) {
    axios.get( query )
      .then((response) => {
        dispatch( createSuccessAction(response.data) );
      })
      .catch((err) => {
        dispatch( createErrorAction(err) );
      });
  };

}


function createSuccessAction( searchResults ) {
  return {
    type: SEARCH_IMAGES_SUCCESS,
    payload: extractValidItems( searchResults )
  };
}


function createErrorAction( error ) {
  return {
    type: SEARCH_IMAGES_ERROR,
    payload: error
  };
}


function extractValidItems( results ) {

  let validItems = [];

  if( results.searchInformation.totalResults > 0 ) {

    results.items.forEach( function( item ) {

      let image = extractImageData( item.pagemap );

      if( image ) {
        image.caption = item.title;
        validItems.push( image );
      }
    });
  }

  return validItems;
}


function extractImageData( data ) {
  // keep it simple for now, but we could get fancy,
  // substituting full-size image for missing thumbnail & vis-versa...
  if( data && data.cse_thumbnail && data.cse_image ) {
    return {
      urlThumnail: data.cse_thumbnail[0].src,
      urlFullSize: data.cse_image[0].src
    };
  }
}


function fakeAjaxRequest( searchTerms ) {
  
  let results = [];

  if( searchTerms !== 'NO_RESULTS' ) {
    for( let i = 0; i < 40; i++ ) {
      results.push( { caption: `image${ i + 1 }` } );
    }
  }
  
  return results;
}

