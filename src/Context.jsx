// Context.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser, password, setPassword }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
