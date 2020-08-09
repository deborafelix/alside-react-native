import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import AppStack from './src/routes/Stack';
import {ContextProvider} from './src/contexts';
const App = () => {
  return (
    <NavigationContainer>
      <ContextProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#eff1f3" />
        <SafeAreaView style={{flex: 1}}>
          <AppStack />
        </SafeAreaView>
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
