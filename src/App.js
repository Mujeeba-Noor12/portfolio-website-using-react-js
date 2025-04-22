

import React from 'react';
import { Routes, Route } from "react-router-dom";
import './tailwind-output.css'; 
import './index.css';
import Particles from "react-tsparticles";
import particlesConfig from './utils/Particles';  
import Home from './container/Home.js';
import About from './container/About.js';

import Skills from './container/Skills.js';
import Contact from './container/Contact.js';
import Portfolio from './container/Portfolio.js';
import Navbar from './Components/Navbar.js';


const App = () => {
  return (
   
    <div style={{position:'relative'}}>
      
      
      <Particles id='particle' options={particlesConfig} />
      <Navbar />
      
     
      
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
    
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default App;

