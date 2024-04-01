import { useReducer } from 'react';

interface Auth {
  isLoggedIn: boolean
}

const initialArgs: Auth = {
  isLoggedIn: localStorage.getItem('token') ? Boolean(localStorage.getItem('token')) : false,
};

const reducer = (state: Auth, action: Auth) => {
  return { ...state, ...action };
}

const useAuth = () => {
  const [state, setState] = useReducer(reducer, initialArgs);

  const setLoginUser = () => {
    localStorage.setItem('token', 'true');
    setState({ ...state, isLoggedIn: true });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setState({ ...state, isLoggedIn: false });
  };

  return {
    setLoginUser,
    logout,
    ...state,
  };
};

export default useAuth;
