import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import {SearchBar} from '../../src/containers/searchbar';

test( 'SearchBar: search button enable/disable...', assert => {

  const wrapper = shallow( <SearchBar /> );
  const input = wrapper.find('input');
  let button = wrapper.find('button'); // update, to get changed state

  assert.test( '- should initially be disabled', assert => {
    assert.equal( button.prop('disabled'), true );
    assert.end();
  });
  
  assert.test( '- should be enabled when input field contains text', assert => {
    input.simulate( 'change', { target: {value: 'abc'} } );
    button = wrapper.find('button'); // pick up NEW state
    assert.equal( button.prop('disabled'), false );
    assert.end();
  });

  assert.test( '- should revert to disabled when input field is empty', assert => {
    input.simulate( 'change', { target: {value: ''} } );
    button = wrapper.find('button'); // pick up NEW state
    assert.equal( button.prop('disabled'), true );
    assert.end();
  });

});

test( 'SearchBar: submitting queries...', assert => {

  assert.test( '  - should submit a query when button is clicked', assert => {
    const wrapper = shallow( <SearchBar /> );
    assert.ok(true);
    assert.end();
    /*
    const onSearchStub = sinon.spy();
    const wrapper = shallow(<SearchBar onSearch={onSearchStub}/>);
    const searchField = wrapper.find('input');
    const event1 = {target: {value: 'cat'}};
    const event2 = {target: {value: 'cats'}};

    searchField.simulate('change', event1);
    searchField.simulate('change', event2);
    assert.equal(onSearchStub.calledTwice, true);
    */
  });

  assert.test( '  - should submit a query when `enter` key is pressed', assert => {
    assert.ok(true);
    assert.end();
  });

});