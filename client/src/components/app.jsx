import React from 'react';

import Header from './header';
import SettingsPanel from './settings-panel';
import SearchBar from '../containers/searchbar';
import SearchResults from '../containers/search-results';
import MessagePanel from '../containers/message-panel';

import LightBox from './lightbox'; // reference this from an npm lib later!

export default () => <div className='app'>
  <Header text='Perfect Image' >
    <SearchBar />
  </Header>
  <div className='main'>
    <SettingsPanel />
    <SearchResults />
    <MessagePanel />
  </div>
  <LightBox observe='images-container' />
</div>;
