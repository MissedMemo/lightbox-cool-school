import React, {Component} from 'react';

/*
 Implement as a straight React component (no Redux), with
 the fewest possible dependencies on the underlying client,
 in preparation to make this an installable npm module.
*/

class LightBox extends Component {

  constructor(props) {
    super(props);

    this.display = this.display.bind(this);

    this.state = {
      visible: true
    }
  }

  display( visible ) {
    this.setState({ visible });
  }

  render() {
    return this.state.visible ? <div className='overlay'>
      <div className='lightbox'>
        <a href='#' className='close-button' onClick={ () => this.display(false) }>X</a>
      </div>
    </div> : null;
  }
  
}

export default LightBox;