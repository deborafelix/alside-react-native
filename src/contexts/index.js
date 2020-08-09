import React, {useState, createContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  token: null,
  signed: false,
  user: {
    email: '',
    name: '',
    imgUrl: null,
  },
};

const Context = createContext(initialState);

export const ContextProvider = ({children}) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState(initialState.user);

  //   const getToken = async () => {
  //     try {
  //       if (!token) {
  //         const savedToken = await AsyncStorage.getItem('token');
  //         if (!savedToken) {
  //           return;
  //         }
  //         return savedToken;
  //       }
  //       return token;
  //     } catch (err) {}
  //   };

  //   const verifyLogin = async () => {
  //     const savedToken = await getToken();
  //     if (savedToken) {
  //       try {
  //         const user = await auth.restoreSession(savedToken);
  //         setLogedInfo(savedToken, user);
  //       } catch (err) {}
  //     }
  //   };

  const signIn = async (tmpUser, auth) => {
    try {
      const {token, user} = await auth(tmpUser);
      setLogedInfo(token, user);
    } catch (err) {
      console.log(err);
    }
  };

  const setLogedInfo = async (newToken, user) => {
    try {
      await AsyncStorage.setItem('token', newToken);
      setToken(newToken);
      setUser((prev) => ({...prev, ...user}));
    } catch (err) {}
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setToken(false);
      setUser(initialState.user);
    } catch (err) {}
  };

  return (
    <Context.Provider
      value={{
        token,
        signed: !!token,
        signIn,
        user,
        signOut,
      }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
