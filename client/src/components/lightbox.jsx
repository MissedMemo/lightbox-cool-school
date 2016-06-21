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
    this.setMargins = this.setMargins.bind(this);
    this.displayImage = this.displayImage.bind(this);
    this.imageClickHandler = this.imageClickHandler.bind(this);

    // ONE listener for ALL image clicks
    document.body.addEventListener( 'click', this.imageClickHandler, false );

    this.state = {
      visible: false,
      wantMargins: !!props.margins
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

  setMargins( lightbox ) {
    /*
     ref is UNDEFINED on componentDidMount etc., so we access it
     during initial actual render -- note that it becomes undefined
     AGAIN when we render null to close the overlay.
    */
    var margins = this.props.margins.split(' ');
    lightbox.style.top = margins[0];
    lightbox.style.right = margins[1];
    lightbox.style.bottom = margins[2];
    lightbox.style.left = margins[3];
    this.setState({wantMargins: false});
  }

  render() {
    return this.state.visible ? <div className='overlay'>
      <div className='lightbox'
        ref={ lightbox => this.state.wantMargins && this.setMargins(lightbox) }>
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