import React from 'react';
import { 
  Routes,
  Route
 } from 'react-router-dom'

import Home from './home';
import Aboutus from './about';


function Xrouters() {
    return (
       <Routes>
          <Route  path='/' element={<Home />} />  
          <Route path='/about' element={<Aboutus />} />
      </Routes>
    );
}

export default Xrouters;