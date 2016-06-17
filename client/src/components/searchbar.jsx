import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    }

    this.onEditText = this.onEditText.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onEditText(e) {
    this.setState({ searchText: e.target.value })
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log('submitting...');
    //this.props.getImages( this.state.searchText );
  }

  render() {
    return (
      <form className='search-form' onSubmit={ this.onFormSubmit } >
        <input type='text'
          placeholder='enter image search conditions...'
          onChange={ this.onEditText }
          value={ this.state.searchText }
        />
        <button type='submit' disabled={ !this.state.searchText }>
          Find
        </button>
      </form>
    );
  }
};

export default SearchBar;