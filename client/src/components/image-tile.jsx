import React, {Component} from 'react';

export default ({ url, index }) => {
  return <div className='image-tile'>
    <img src={ url } data-index={ index } />
  </div>
};
