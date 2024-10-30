import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setUser({ role: 'admin', username });
      navigate('/dashboard');
      return true;
    } else if (username === 'user' && password === 'user') {
      setUser({ role: 'user', username });
      navigate('/feedback');
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);