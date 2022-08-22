import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeTabNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import  { SwiperComponent } from './SwiperScreen';
import LoginApp1 from './LoginApp1';
import CartScreen from './CartScreen';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={SwiperComponent} />

      {/* <Tab.Screen name="Settings" component={ScreenA} />
      <Tab.Screen name="Downloads" component={ScreenB} /> */}
      <Tab.Screen name="CartScreen" component={CartScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginApp1} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
