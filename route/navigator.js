import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MyBottomSheet from "../screens/MyBottomSheet";
import CollectionPage from "../screens/CollectionPage";
import Gallery from "../screens/Gallery";
import openPicker from "../screens/openPicker";

const Stack = createStackNavigator();

function Navigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="CollectionPage" component={CollectionPage} options={{ headerShown: false }} />
          <Stack.Screen name="MyBottomSheet" component={MyBottomSheet} options={{ headerShown: false }} />
          <Stack.Screen name="Gallery" component={Gallery} options={{ headerShown: false }} />
          <Stack.Screen name="openPicker" component={openPicker} options={{ headerShown: false }} />

       </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigator;