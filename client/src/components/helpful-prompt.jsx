import React from 'react';

export default ({line1,line2, isError}) => <div className="message-area">
  <p className="primary {isError? 'error': null }">{ line1 }</p>
  <p className="secondary">{ line2 }</p>
</div>;