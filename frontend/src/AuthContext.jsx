import React, { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (username, password) => {
    await axios.post('http://localhost:5000/api/auth/signup', { username, password });
  };

  const login = async (username, password) => {
    const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
    setUser(response.data.token); // Save token or user details as needed
  };

  return (
    <AuthContext.Provider value={{ user, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
