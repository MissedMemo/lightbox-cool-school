import React, {Component} from 'react';
import {connect} from 'react-redux';

import ImageTile from '../components/image-tile';
import HelpfulPrompt from '../components/helpful-prompt';


class SearchResults extends Component {

  renderResults( searchResults ) {
    return searchResults.map( item => <ImageTile data={ item } /> );
    /* Would explicit <ul> & <li> improve performance, due to 'key'? */
  }

  renderMessage( matchNotFound ) {
    return matchNotFound ? <div>
      <span className='error'>No results found...</span><br/>
      <span>May we suggest... gorillas?</span>
    </div> : <div>
      <span>Please enter a search condition</span><br/>
      <span>May we suggest... robot kittens?</span>
    </div>;
  }

  render() {

    if( this.props.results && this.props.results.length > 0 ) {
      return <div className='results-container'>
        { this.renderResults( this.props.results ) }
      </div>;
    } else {
      return <div className='message-container'>
        { this.renderMessage( this.props.results ) }
      </div>;
    }

  }
};

// Note: same-name methods eliminates need to specify state or object key!
function mapStateToProps({results}) {
  return { results };
};

export default connect( mapStateToProps )(SearchResults);