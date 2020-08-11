import React, {useState, createContext} from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

const initialState = {
  token: null,
  signed: false,
  selectedDate: moment(Date.now()),
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
  const [selectedDate, setSelectedDate] = useState(initialState.selectedDate);

  const signIn = async (tmpUser, auth) => {
    try {
      const {token, user} = await auth(tmpUser);
      setLogedInfo(token, user);
    } catch (err) {
      console.log(err);
    }
  };

  const setLogedInfo = (newToken, user) => {
    try {
      setToken(newToken);
      setUser((prev) => ({...prev, ...user}));
    } catch (err) {}
  };

  const signOut = () => {
    try {
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
        selectedDate,
        setSelectedDate,
      }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
