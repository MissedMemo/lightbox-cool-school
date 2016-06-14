import React from 'react';
import SearchResults from '../containers/search-results';

export default ({greeting}) => <div>
  <h1>{greeting}</h1>
  <SearchResults />
</div>;
