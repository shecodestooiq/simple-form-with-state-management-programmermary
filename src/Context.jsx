// Context.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(0);

  return (
    <UserContext.Provider value={{ user , setUser , password , setPassword , age , setAge }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
