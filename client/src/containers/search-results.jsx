import React, {Component} from 'react';
import {connect} from 'react-redux';

import ImageTile from '../components/image-tile';
import HelpfulPrompt from '../components/helpful-prompt';


class SearchResults extends Component {

  renderResults( searchResults ) {
    return searchResults.map( item => <ImageTile data={ item } /> );
    /* Would explicit <ul> & <li> improve performance, due to 'key'? */
  }

  render() {

    if( !this.props.results ) { // initial, empty state
      return <HelpfulPrompt
        line1='Please enter a search condition'
        line2='May we suggest... robot kittens?'
      />;
    }

    else if( this.props.results.length === 0 ) {
      return <HelpfulPrompt
        line1='No results found...'
        line2='May we suggest... gorillas?'
        isError={true}
      />;
    }

    else return <div className='results-container'>
      { this.renderResults( this.props.results ) }
    </div>;
  }
};

// Note: same-name methods eliminates need to specify state or object key!
function mapStateToProps({results}) {
  return { results };
};

export default connect( mapStateToProps )(SearchResults);