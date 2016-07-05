import React from 'react';
import test from 'tape';
import {shallow} from 'enzyme';

import App from '../../src/components/app';
import Header from '../../src/components/header';
import SettingsPanel from '../../src/components/settings-panel';
import SearchResults from '../../src/containers/search-results';
import MessagePanel from '../../src/containers/message-panel';
import LightBox from '../../src/components/lightbox';

test( 'Main layout...', assert => {

  assert.test( '  - should contain a fat header', assert => {
    assert.plan(1);
    const node = shallow( <App /> );
    assert.equal( node.find( Header ).length, 1 );
  });

  assert.test( '  - should contain a settings panel', assert => {
    assert.plan(1);
    const node = shallow( <App /> );
    assert.equal( node.find( SettingsPanel ).length, 1 );
  });

  assert.test( '  - should contain a search results area', assert => {
    assert.plan(1);
    const node = shallow( <App /> );
    assert.equal( node.find( SearchResults ).length, 1 );
  });

  assert.test( '  - should contain a message panel', assert => {
    assert.plan(1);
    const node = shallow( <App /> );
    assert.equal( node.find( MessagePanel ).length, 1 );
  });

  assert.test( '  - should contain a LightBox!', assert => {
    assert.plan(1);
    const node = shallow( <App /> );
    assert.equal( node.find( LightBox ).length, 1 );
  });

});