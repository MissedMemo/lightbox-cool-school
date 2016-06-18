import React, {Component} from 'react';
import {connect} from 'react-redux';

import ImageTile from '../components/image-tile';


class SearchResults extends Component {

  renderItems( searchResults ) {
    return searchResults.map( item => <ImageTile data={ item } /> );
    /* Would explicit <ul> & <li> improve performance, due to 'key'? */
  }

  renderMessage( line1, line2 ) {
    return <div className="message-area">
      <p className="primary">{ line1 }</p>
      <p className="secondary">{ line2 }</p>
    </div>;
  }
  
  render() {

    if( !this.props.results ) { // initial, empty state
      return this.renderMessage(
        'Please enter a search condition',
        'May we suggest... kittens?'
      );
    }

    else if( this.props.results.length === 0 ) {
      return this.renderMessage(
        'Found no results matching those conditions',
        'May we suggest... gorillas?'
      );
    }

    else return <div className='results-container'>
      { this.renderItems( this.props.results ) }
    </div>;
  }
};

// Note: same-name methods eliminates need to specify state or object key!
function mapStateToProps({results}) {
  return { results };
};

export default connect( mapStateToProps )(SearchResults);