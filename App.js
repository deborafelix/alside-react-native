import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import NewUser from './src/screens/NewUser';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#eff1f3" />
      <SafeAreaView style={{flex: 1}}>
        <NewUser />
      </SafeAreaView>
    </>
  );
};

export default App;
