import React, {Component} from 'react';

class SearchBar extends Component {

  render() {
    return <form className='search-form'>
      <input type='text'
        placeholder='enter image search conditions...'
        // value set to local state...
      />
      <button type='submit'>Find</button>
    </form>;
  }
};

export default SearchBar;