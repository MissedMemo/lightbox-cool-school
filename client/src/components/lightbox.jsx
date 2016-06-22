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
    this.imageClickHandler = this.imageClickHandler.bind(this);
    this.buildImageList = this.buildImageList.bind(this);

    // ONE listener for ALL image clicks
    document.body.addEventListener( 'click', this.imageClickHandler, false );

    this.state = {
      visible: false,
      wantMargins: !!props.margins,
      imageList: [],
      currentImage: null
    }
  }

  imageClickHandler( e ) {

    // Ignore clicks on elements not tagged with lightbox attributes

    if( e.target.dataset.imageurl ) {
      this.displayOverlay(true);
      document.body.classList.add('disable-scrolling');
      this.setState({ imageList: this.buildImageList(e.target) });
      console.log('imageList is:', this.state.imageList );
      e.stopPropagation();
    }
  }

  displayOverlay( visible ) {
    this.setState({ visible });
  }

  buildImageList( node ) {

    let list = [];

    let lightboxImage = {
      url: node.dataset.imageurl,
      caption: node.dataset.caption,
      index: node.dataset.index
    }
    list.push( lightboxImage );

    return list;
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

    console.log( this.state );
    let image = this.state.imageList[ this.state.currentImage ];

    return this.state.visible ? <div className='overlay'>
      <div className='lightbox'
        ref={ lightbox => this.state.wantMargins && this.setMargins(lightbox) }>
        <a href='#'
           className='close-button'
           onClick={ () => this.displayOverlay(false) }>
           X
        </a>
        <div className='image-area'>
          <button className='nav-arrow arrow-previous'>&lsaquo;</button>
          <button className='nav-arrow arrow-next'>&rsaquo;</button>
        </div>
        <div className='caption-bar'>
          <span>{ image ? image.caption: '(no caption)' }</span>
        </div>
      </div>
    </div> : null;
  }
  
}

export default LightBox;