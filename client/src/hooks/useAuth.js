import  Axios  from "axios";
import React, { useState, useEffect, useContext, createContext } from "react";
import { useLocalStorage } from "react-use";


const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser, removeUser] = useLocalStorage('user_auth_state');
  
  const login = (username, password, context) => {
    
    Axios.post(`http://localhost:3020/auth/${context}/login`,
     {username, password})
     .then(res => res.data)
     .then(data => setUser(data));
  };
  
  const logout = () => removeUser();
  
  return {
    user,
    login,
    logout,
  };
}
