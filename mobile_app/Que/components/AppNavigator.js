import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Gallery from './Gallery'; // Import your Gallery component
import BottomSheet from './BottomSheet'; // Import your BottomSheet component

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomSheet" component={BottomSheet} />
      <Stack.Screen name="Gallery" component={Gallery} />
    </Stack.Navigator>
  );
};

export default AppNavigator;