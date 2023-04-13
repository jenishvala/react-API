import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import App from './App';
import Called from './component/Called';
import Data from './component/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import Login from './component/Login';
import Error from './component/Error';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route excat path='/' element={<Login />}></Route>
      <Route excat path="/data/:id" element={<Data />}></Route>
      <Route excat path="/call" element={<Called />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  </BrowserRouter>
);
