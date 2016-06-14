import React, {Component} from 'react';
import {connect} from 'react-redux';


class SearchResults extends Component {

  renderList( searchResults ) {
    return searchResults.map( image => <li>{ image.caption }</li> );
  }
  
  render() {
    return <ul>
      { this.renderList( this.props.results ) }
    </ul>
  }
};

function mapStateToProps(state) {
  return {
    results: state.results
  };
};

export default connect( mapStateToProps )(SearchResults);