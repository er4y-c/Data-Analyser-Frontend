/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState(undefined);

  const router = useRouter();

  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('user-info');
    setUser(null);
    router.replace('/auth/login');
  };

  useEffect(() => {
    const token = Cookies.get('token');

    if (!token &&
      router.pathname !== '/auth/login'
    ) {
       router.replace('/auth/login');
    }

    if (token && token !== 'undefined') {
      console.log('token', token);
      const decodedToken = jwtDecode(token);
      if (decodedToken && decodedToken.exp > Date.now() / 1000) {
        setUser(decodedToken?.user);
      } else {
        logout();
      }
    }
  }, []);

  const context = {
    user,
    setUser,
    router,
    logout,
    loginError,
    setLoginError,
  }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
