import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './Loginpage';
import UserInfoPage from './UserPageInfo';
import UserContext from './Context';
import { UserProvider } from './Context';

function App() {
  return(
<div className='app'>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<UserProvider><LoginPage/></UserProvider>}></Route>
    <Route path='/UserPageInfo' element={<UserProvider><UserInfoPage/></UserProvider>}></Route>
  </Routes>
  </BrowserRouter>
</div>
  )
}

export default App;
