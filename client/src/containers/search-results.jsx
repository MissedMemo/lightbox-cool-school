import React, {Component} from 'react';
import {connect} from 'react-redux';

import ImageTile from '../components/image-tile';


class SearchResults extends Component {

  renderImages( searchResults ) {
    return searchResults.map( item => <ImageTile url={ item.urlThumnail } index={0} /> );
    /* Q: Would explicit <ul> & <li> reduce rendering, due to 'key'? */
  }

  render() {
    return this.props.results ? <div className='results-container'>
      { this.renderImages( this.props.results ) }
    </div> : null;
  }
};

// Note: same-name methods eliminates need to specify state or object key!
function mapStateToProps({results}) {
  return { results };
};

export default connect( mapStateToProps )(SearchResults);