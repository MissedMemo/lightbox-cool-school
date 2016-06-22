import React, {Component} from 'react';

export default ({ data, index }) => {

  return <div className='image-tile'>
    <img
      src={ data.urlThumnail }
      data-imageurl={ data.urlFullSize }
      data-caption={ data.caption }
      data-index={ index }
    />
  </div>
};
