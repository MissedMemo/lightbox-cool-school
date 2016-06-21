import React, {Component} from 'react';

/*
 Implement as a straight React component (no Redux), with
 the fewest possible dependencies on the underlying client,
 in preparation to make this an installable npm module.
*/

class LightBox extends Component {

  constructor(props) {
    super(props);

    this.displayOverlay = this.displayOverlay.bind(this);
    this.displayImage = this.displayImage.bind(this);
    this.imageClickHandler = this.imageClickHandler.bind(this);

    // ONE listener for ALL image clicks
    document.body.addEventListener( 'click', this.imageClickHandler, false );

    this.state = {
      visible: false
    }
  }

  imageClickHandler( e ) {
    // We only care about images explicitly tagged as 'lightboxable'
    if( e.target.className === 'lightboxable' ) {
      this.displayOverlay(true)
      document.body.classList.add('disable-scrolling');
      this.displayImage( +e.target.dataset.index );
      e.stopPropagation();
    }
  }

  displayOverlay( visible ) {
    this.setState({ visible });
  }

  displayImage( index ) {
    console.log('display image #', index );
  }

  render() {
    return this.state.visible ? <div className='overlay'>
      <div className='lightbox'>
        <a href='#'
           className='close-button'
           onClick={ () => this.displayOverlay(false) }>
           X
        </a>
      </div>
    </div> : null;
  }
  
}

export default LightBox;