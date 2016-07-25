import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Test for contained views using exported default connect, NOT exported class!
import App from '../../src/components/app';
import Header from '../../src/components/header';
import SettingsPanel from '../../src/components/settings-panel';
import SearchResults from '../../src/containers/search-results';
import MessagePanel from '../../src/containers/message-panel';
import LightBox from '../../src/components/lightbox';

describe( 'Main Layout...', () => {

  it( 'should contain a fat header', () => {
    const wrapper = shallow( <App /> );
    expect( wrapper.find( Header ) ).to.exist;
  });

  it( 'should contain a settings panel', () => {
    const wrapper = shallow( <App /> );
    expect( wrapper.find( SettingsPanel ) ).to.exist;
  });

  it( 'should contain a search results area', () => {
    const wrapper = shallow( <App /> );
    expect( wrapper.find( SearchResults ) ).to.exist;
  });

  it( 'should contain a message panel', () => {
    const wrapper = shallow( <App /> );
    expect( wrapper.find( MessagePanel ) ).to.exist;
  });

  it( 'should contain a LightBox!', () => {
    const wrapper = shallow( <App /> );
    expect( wrapper.find( LightBox ) ).to.exist;
  });
  
});
