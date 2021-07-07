import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ScheduledListScreen from './src/screens/ScheduledListScreen';
import UnscheduledListScreen from './src/screens/UnscheduledListScreen';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="InspectionListScreen"
      activeColor="#ffca4d"
      inactiveColor="#babbbe"
      barStyle={{ backgroundColor: '#2a2b30' }}
      style={{ fontSize: 25,  fontWeight: 'bold', margin: 0}}
    >
      <Tab.Screen
        name="Scheduled"
        component={ScheduledListScreen}
        options={{
          tabBarLabel: 'SCHEDULED'
        }}
      />
      <Tab.Screen
        name="UnScheduled"
        component={UnscheduledListScreen}
        options={{
          tabBarLabel: 'UNSCHEDULED'
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

