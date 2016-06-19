import React, {Component} from 'react';

export default ({data}) => {
  console.log(data)
  return <div className='image-tile'>
    {data.caption}
  </div>
};