// import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup';

// import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CertificateProvider } from './components/CertificateContext';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Home1 from './components/Home1';

function App() {
  return (
    <div >
    <CertificateProvider>
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/home1' element={<Home1/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>


        </Routes>
      </Router>
      </CertificateProvider>
    </div>
  );
}

export default App;
