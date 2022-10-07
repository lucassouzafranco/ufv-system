import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global';
import App from './App';
import Cookies from './components/Cookies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Cookies/>
    <GlobalStyle/>
  </React.StrictMode>
);
