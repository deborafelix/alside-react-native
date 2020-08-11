import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CompanyFeed from '../screens/CompanyFeed';
import MyEvents from '../screens/MyEvents';
import Feed from '../screens/Feed';
import InfoEvent from '../screens/InfoEvent';
import OnBoard from '../screens/OnBoard';
import WelcomeUser from '../screens/WelcomeUser';
import WelcomeCompany from '../screens/WelcomeCompany';
import NewUser from '../screens/NewUser';
import NewCompany from '../screens/NewCompany';
import NewEvent from '../screens/NewEvent';
import LoginUser from '../screens/LoginUser';
import LoginCompany from '../screens/LoginCompany';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoard"
        component={OnBoard}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="NewEvent"
        component={NewEvent}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="WelcomeUser"
        component={WelcomeUser}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="WelcomeCompany"
        component={WelcomeCompany}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="NewUser"
        component={NewUser}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="NewCompany"
        component={NewCompany}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="LoginUser"
        component={LoginUser}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="LoginCompany"
        component={LoginCompany}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="MyEvents"
        component={MyEvents}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="CompanyFeed"
        component={CompanyFeed}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="InfoEvent"
        component={InfoEvent}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
}
