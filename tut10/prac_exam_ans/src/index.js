import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import './index.css';
import Make24 from './pages/Make24';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/make_24' element={<Make24 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
