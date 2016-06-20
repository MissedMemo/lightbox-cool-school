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

    let error = this.props.error;
    let images = this.props.images;

    if( error ) {
      return this.message(
        `Server Error - ${error.message}`,
        `reason: ${error.reason}`,
        true
      );
    }

    else if( images ) {
      return images.length > 0 ?
             null : // hide message area, so that images can be displayed!
             this.message( 'No matches found.', 'Try searching... scary clowns?' );
    }

    else return this.message(
      'Please enter a search condition', 'May we suggest... gorillas?'
    );
  }
  
};

// Note: same-name methods eliminates need to specify state or object key!
function mapStateToProps({images,error}) {
  return { images, error };
};

export default connect( mapStateToProps )(MessagePanel);