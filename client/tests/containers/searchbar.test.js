import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import sinon from 'sinon';

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

test.skip( 'SearchBar: submitting queries...', assert => {

  const onSearchStub = sinon.spy();
  const wrapper = shallow( <SearchBar /> );

  assert.test( '- should submit a query when button is clicked', assert => {
    wrapper.find('input').simulate( 'change', { target: {value: 'abc'} } );
    console.log( wrapper.debug() );
    wrapper.find('button').simulate('click');
    assert.equal( onSearchStub.calledOnce, true );
  });

  //- should submit a query when `enter` key is pressed'

});