import React from 'react';

import Header from './header';
import SearchBar from './searchbar';


export default () => <div className='app'>
  <Header text='Perfect Image' >
    <SearchBar />
  </Header>
  <div className='main'>
  </div>
</div>;
