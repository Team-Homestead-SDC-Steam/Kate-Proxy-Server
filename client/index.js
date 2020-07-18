import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './GlobalStyle';
import WebsiteBase from './components/WebsiteBase';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <WebsiteBase />
  </React.Fragment>,
  document.getElementById('root')
);
