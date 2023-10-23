import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DialCodePage from '../DialCodePage/DialCodePage';
import HomePage from '../HomePage/HomePage';
import './Main.scss';

const Main = () => {   
  return( 
  <div className="main">  
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/add-number" element={<DialCodePage />}/>
        <Route path="/success" element={<DialCodePage />}/>
        <Route path="*" element={<h1>Page Not Found</h1>}/>
      </Routes> 
  </div>);
};
export default Main;
