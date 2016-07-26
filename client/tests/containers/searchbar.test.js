//import '../setup'; // must precede ref to React!
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import {SearchBar} from '../../src/containers/searchbar';


describe( 'SearchBar...', function() {

  describe( 'button enable/disable:', function() {

    const wrapper = shallow( <SearchBar /> );
    const input = wrapper.find('input');
    let button = wrapper.find('button'); // not const, to enable state change

    it( 'should initially display button as disabled', () => {
      expect( button.prop('disabled') ).to.be.true;
    });

    it( 'should display button as enabled when input field contains text', () => {
      input.simulate( 'change', { target: {value: 'abc'} } );
      button = wrapper.find('button'); // pick up NEW state
      expect( button.prop('disabled') ).to.be.false;
    });

    it( 'should revert to disabled when input field is empty', () => {
      input.simulate( 'change', { target: {value: ''} } );
      button = wrapper.find('button'); // NEW state
      expect( button.prop('disabled') ).to.be.true;
    });

  });

  describe( 'submitting queries:', function() {

    it( 'should submit a query when button is clicked' );
    it( 'should submit a query when `enter` key is pressed' );

    /*
    it( 'should submit a query when button is clicked', function() {

      const wrapper = shallow( <SearchBar /> );
      let form = wrapper.find('form');
      console.log( form.debug() );
      const onSearchStub = sinon.spy( form, 'onSubmit' );

      wrapper.find('input').simulate( 'change', { target: {value: 'abc'} } );
      wrapper.find('button').simulate('click');
      expect( onSearchStub.calledOnce ).to.be.true;
    });
    */

    /*
    it( 'should submit a query when button is clicked', function() {

      const onSearchStub = sinon.spy();
      const wrapper = shallow( <SearchBar onSubmit={ onSearchStub } /> );
      wrapper.find('input').simulate( 'change', { target: {value: 'abc'} } );
      wrapper.find('button').simulate('click');
      //console.log( wrapper.debug() );
      expect( onSearchStub.calledOnce ).to.be.true;
    });
    */
  });

});
