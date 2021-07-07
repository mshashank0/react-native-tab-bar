import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ScheduledListScreen from './src/screens/ScheduledListScreen';
import UnscheduledListScreen from './src/screens/UnscheduledListScreen';
import InspectionDetailsScreen from './src/screens/InspectionDetailsScreen';

const Stack = createStackNavigator();

const ScheduledStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScheduledList" component={ScheduledListScreen} />
      <Stack.Screen name="InspectionDetails" component={InspectionDetailsScreen} />
    </Stack.Navigator>
  );
}

const UnScheduledStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UnScheduledList" component={UnscheduledListScreen} />
      <Stack.Screen name="InspectionDetails" component={InspectionDetailsScreen} />
    </Stack.Navigator>
  );
}

// const ScheduledTab = createStackNavigator(
//   {
//     ScheduledList: ScheduledListScreen,
//     InspectionDetails: InspectionDetailsScreen ,
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#2a2b30',
//       },
//       headerTintColor: '#fff',
//       title: 'Inspections',
     
//     },
//   }
// );
 
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
        component={ScheduledStackNavigator}
        options={{
          tabBarLabel: 'SCHEDULED'
        }}
      />
      <Tab.Screen
        name="UnScheduled"
        component={UnScheduledStackNavigator}
        options={{
          tabBarLabel: 'UNSCHEDULED'
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
