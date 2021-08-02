import React from 'react';
import ReactDOM from 'react-dom';
import {App, Header, Footer} from './components/App.jsx'
ReactDOM.render(
  <div>
    <Header />
    <App />
    <Footer />
  </div>,
  document.getElementById('root')
);