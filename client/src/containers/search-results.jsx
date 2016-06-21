import React, {Component} from 'react';
import {connect} from 'react-redux';

import ImageTile from '../components/image-tile';


class SearchResults extends Component {

  renderable( imageList ) {
    return imageList && imageList.length > 0;
  }

  renderImages( images ) {
    return images.map( image => <ImageTile url={ image.urlThumnail } index={0} /> );
    /* Q: Would explicit <ul> & <li> reduce amount of rendering, due to 'key'? */
  }

  render() {
    return this.renderable(this.props.images) ?
      <div className='images-container'>
        { this.renderImages( this.props.images ) }
      </div> : null;
  }
};

// Note: same-name methods eliminates need to specify state or object key!
function mapStateToProps({images}) {
  return { images };
};

export default connect( mapStateToProps )(SearchResults);