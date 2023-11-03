// import React from 'react'

import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Index from './Pages/Home';
import Login from './Pages/Login';

export const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/Home" element={<Index/>}/>  
        <Route path="/login" element={<Login/>}/>    
    </Routes>
    </BrowserRouter>

    </>
  )
}


export default Router;
