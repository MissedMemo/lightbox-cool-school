import React, {Component} from 'react';
import {connect} from 'react-redux';


class MessagePanel extends Component {

  message( line1, line2, isError ) {
    return <div className='message-container'>
      <span className={ isError ? 'error' : null }>{ line1 }</span>
      <span>{ line2 }</span>
    </div>
  }

  render() {

    let images = this.props.images;

    if( !images ) {
      return this.message( 'Please enter a search condition', 'May we suggest... gorillas?' );
    }

    else if( images.length === 0 ) {
      return this.message( 'No matches found.', 'Try searching... scary clowns?' );
    }

    else return null;
  }
  
};

// Note: same-name methods eliminates need to specify state or object key!
function mapStateToProps({images}) {
  return { images };
};

export default connect( mapStateToProps )(MessagePanel);