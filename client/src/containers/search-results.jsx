import React, {Component} from 'react';
import {connect} from 'react-redux';

import ImageTile from '../components/image-tile';


class SearchResults extends Component {

  renderItems( searchResults ) {
    return searchResults.map( item => <ImageTile data={ item } /> );
    /* Would explicit <ul> & <li> improve performance, due to 'key'? */
  }
  
  render() {
    return <div className='results-container'>
      { this.renderItems( this.props.results ) }
    </div>;
  }
};

// Note: same-name methods eliminates need to specify state or object key!
function mapStateToProps({results}) {
  return { results };
};

export default connect( mapStateToProps )(SearchResults);