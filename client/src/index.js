import React from 'react';
import {render} from 'react-dom';

const App = ({greeting}) => <div>{ greeting } </div>;

render(
  <App greeting='Hello, LightBox!' />,
  document.getElementById('root')
);
