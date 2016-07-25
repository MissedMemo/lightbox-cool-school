import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../../src/components/app';
import Header from '../../src/components/header';
import SearchBar from '../../src/containers/searchbar';


describe( 'Main page header...', () => {

  it( 'should contain a nested SearchBar child component', () => {
    const wrapper = shallow( <App /> );
    const header = wrapper.find( Header );
    expect( header.find( SearchBar ) ).to.exist;
  });

  it( 'should display passed branding text', () => {
    const brandingText = 'Branded!';
    const wrapper = shallow( <Header text={ brandingText } /> );
    expect( wrapper.find( '.branding' ).text() ).to.equal(brandingText);
  });

});
