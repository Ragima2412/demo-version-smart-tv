import React from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import DialCodePage from '../../layout/DialCodePage/DialCodePage';
import HomePage from '../../layout/HomePage/HomePage';

import './Main.scss';

const Main = () => {
  return( 
  <div className="main">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/add-number" element={<DialCodePage />}/>
        <Route path="*" element={<h1>Page Not Found</h1>}/>
      </Routes>
    </Router>
  </div>);
};
export default Main;
