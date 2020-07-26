import React from 'react';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import RecordDetail from './screens/RecordDetail';

import { AppStyles as styles } from './styles/styles';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Stack.Navigator 
      initialRouteName="Overall"
      headerMode="none"
    >
      <Stack.Screen name="Overall" component={Dashboard}/>
      <Stack.Screen name="Detail" component={RecordDetail} />
    </Stack.Navigator>
  )
}
 
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Dashboard"
        barStyle={styles.navigator} 
        activeColor='#FF958F' 
        inactiveColor='#989898'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            const icons = {
              Dashboard: 'home',
              Profile: 'user',
            }

            return <Feather name={icons[route.name]} size={23} color={color}/>
        }})
        }
      >
        <Tab.Screen name="Dashboard" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
