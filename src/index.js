import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Called from './component/Called';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Called />
  </>
);
