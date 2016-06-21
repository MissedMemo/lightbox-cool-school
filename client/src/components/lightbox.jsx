import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/*
 Implement as a straight React component (no Redux), with
 the fewest possible dependencies on the underlying client,
 in preparation to make this an installable npm module.
*/

class LightBox extends Component {

  constructor(props) {
    super(props);

    this.display = this.display.bind(this);
    this.imageClickHandler = this.imageClickHandler.bind(this);

    // ONE listener to handle ALL image clicks
    document.body.addEventListener( 'click', this.imageClickHandler, false );

    this.state = {
      visible: false
    }
  }


  imageClickHandler( e ) {
    if( e.target.className === 'lightboxable' ) {
      this.display(true)
      document.body.classList.add('disable-scrolling');
      //displayImage( +e.target.dataset.index );
      e.stopPropagation();
    }
  }


  componentDidMount() {

    
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