import React, {Component} from 'react';
import {connect} from 'react-redux';


class MessagePanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      line1: 'Please enter a search condition',
      line2: 'May we suggest... gorillas?',
      isError: false
    }
  }

  render() {
    return this.props.images ? null : <div className='message-container'>
      <span className={ this.state.isError ? 'error' : null }>
        { this.state.line1 }
      </span>
      <span>
        { this.state.line2 }
      </span>
    </div>
  }
  
};

// Note: same-name methods eliminates need to specify state or object key!
function mapStateToProps({images}) {
  return { images };
};

export default connect( mapStateToProps )(MessagePanel);