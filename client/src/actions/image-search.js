import { SEARCH_IMAGES_SUCCESS, SEARCH_IMAGES_ERROR } from './action-types';
import axios from 'axios';


export function searchImages( searchTerms ) {

  return function(dispatch) {

    if( searchTerms === 'TEST' ) {
      let imageData = queryLoremPixelAPI( 'cats' );
      dispatch( successAction( imageData ) );
    }
    else if( searchTerms === 'TEST-EMPTY' ) {
      dispatch( successAction([]) );
    }

    else queryGoogleSearchAPI( searchTerms )
      .then((response) => {
        let imageData = extractValidItems( response.data );
        dispatch( successAction( imageData ) );
      })
      .catch((err) => {
        console.log('error!:', err );
        let errorDetails = extractErrorDetails( err.data );
        dispatch( errorAction( errorDetails) );
      });
  };
}

function queryLoremPixelAPI( searchTerm ) {
  
  let numImages = 35;
  let imageData = [];

  while( numImages-- ) {

    // Random height & width between 100-300px
    let imageHeight = Math.floor(Math.random() * 200) + 100;
    let imageWidth = Math.floor(Math.random() * 200) + 100;

    let randomImageUrl = `http://lorempixel.com/${imageHeight}/${imageWidth}/${searchTerm}`;
    
    imageData.push({
      urlThumnail: randomImageUrl,
      urlFullSize: randomImageUrl,
      caption: 'fake image caption'
    });
  }

  return imageData;
}

function queryGoogleSearchAPI( searchTerms ) {

  const query = 'https://www.googleapis.com/customsearch/v1?'
              + 'key=AIzaSyDRNg12al500nvBg4w9vXxHxqMt4iVPgLA'
              + '&cx=013785967554816369765:m8ndxwd7vzw'
              + '&safe=medium'
              + '&q=' + searchTerms;

  return axios.get( query );
}


function successAction( imageData ) {
  return {
    type: SEARCH_IMAGES_SUCCESS,
    payload: imageData
  };
}


function errorAction( error ) {
  return {
    type: SEARCH_IMAGES_ERROR,
    payload: error
  };
}


function extractValidItems( results ) {

  let imageData = [];

  if( results.searchInformation.totalResults > 0 ) {

    results.items.forEach( function( item ) {

      let image = extractImageData( item.pagemap );

      if( image ) {
        image.caption = item.title;
        imageData.push( image );
      }
    });
  }

  return imageData;
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


function extractErrorDetails( errorData ) {

  let details = errorData.error.errors[0];
  
  return {
    message: details.message,
    reason: details.reason
  };
}