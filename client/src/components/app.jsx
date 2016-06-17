import React from 'react';

import Header from './header';
import SettingsPanel from './settings-panel';
import SearchBar from '../containers/searchbar';
import SearchResults from '../containers/search-results';

export default () => <div className='app'>
  <Header text='Perfect Image' >
    <SearchBar />
  </Header>
  <div className='main'>
    <SettingsPanel />
    <SearchResults />
  </div>
</div>;
