import React, {Component} from 'react';

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
    return <div className='message-container'>
      <span className={ this.state.isError ? 'error' : null }>
        { this.state.line1 }
      </span>
      <span>
        { this.state.line2 }
      </span>
    </div>
  }
  
};

export default MessagePanel;