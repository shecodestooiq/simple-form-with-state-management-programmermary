import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Loginpage';
import UserInfoPage from './UserPageInfo';
import UserContext from './Context';

function App() {
  const [user , setUser] = useState()
 return(
  <div>
     <UserContext.Provider value={{user , setUser}}>
    <Router>
      <Routes>
       
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path='userinfo' element={<UserInfoPage/>}></Route>
        
      </Routes>
    </Router>
    </UserContext.Provider>
    {/* <LoginPage/>
    <UserInfoPage/> */}
  </div>
 )
}

export default App;
