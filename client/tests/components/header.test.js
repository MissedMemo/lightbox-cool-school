import React from 'react';
import test from 'tape';
import {shallow} from 'enzyme';

import App from '../../src/components/app';
import Header from '../../src/components/header';
import SearchBar from '../../src/containers/searchbar';

test( 'Main page header...', assert => {

  assert.test( '  - should contain a nested SearchBar child component', assert => {
    assert.plan(1);
    const wrapper = shallow( <App /> );
    const header = wrapper.find( Header );
    assert.equal( header.find( SearchBar ).length, 1 );
  });

  assert.test( '  - should display passed branding text', assert => {
    assert.plan(1);
    const brandingText = 'Branded!';
    const wrapper = shallow( <Header text={ brandingText } /> );
    assert.equal( wrapper.find( '.branding' ).text(), brandingText );
  });

});
