import React, {Component} from 'react';
import {connect} from 'react-redux';


class SearchResults extends Component {

  fakeGUID( baseString ) {
    return baseString + new Date().getTime();
  }

  renderList( searchResults ) {
    return searchResults.map( image => <li key={ this.fakeGUID(image.caption) }>
      { image.caption }
    </li> );
  }
  
  render() {
    return <div className='results-container'>
      <ul>{ this.renderList( this.props.results ) }</ul>
    </div>
  }
};

function mapStateToProps(state) {
  return {
    results: state.results
  };
};

export default connect( mapStateToProps )(SearchResults);