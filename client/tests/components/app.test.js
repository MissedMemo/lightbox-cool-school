import React from 'react';
import test from 'tape';
import {shallow} from 'enzyme';

import App from '../../src/components/app';
import Header from '../../src/components/header';

test( 'Main layout...', assert => {

  assert.test( '  - should display a fat header', assert => {
    assert.plan(1);
    const node = shallow( <App /> );
    assert.equal( node.find( Header ).length, 1 );
  });

});