import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import CameraPage from "../screens/Camera/CameraPage";
import Upload from "../screens/Upload";
import HomePage from '../screens/Home/HomePage';
import Result from '../screens/Camera/Result';
import Profile from '../screens/Profile/Profile';
import NameChange from '../screens/Profile/NameChange';
import CameraFeature from '../screens/CameraFeature';
import Settings from '../screens/Settings';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import HealthResult from '../screens/HealthResult';
import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import HealthResult from '../screens/Home/HealthResult';
import Collection from '../screens/Home/Collection';
const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
<Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />

      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />


        <Stack.Screen name="CameraPage" component={CameraPage} options={{ headerShown: false }} />
       
        <Stack.Screen name="CameraFeature" component={CameraFeature} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false}}/>
        <Stack.Screen name="Result" component={Result} options={{ headerShown: false}}/>
        <Stack.Screen name="Upload" component={Upload} options={{ headerShown: false}}/>
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false}}/>
        <Stack.Screen name="NameChange" component={NameChange} options={{ headerShown: false}}/>
        <Stack.Screen name="Collection" component={Collection} options={{ headerShown: false}}/>
        <Stack.Screen name="HealthResult" component={HealthResult} options={{ headerShown: false}}/>
        <Stack.Screen name="CollectionPage" component={CollectionPage} options={{ headerShown: false }} />
        <Stack.Screen name="MyBottomSheet" component={MyBottomSheet} options={{ headerShown: false }} />
        <Stack.Screen name="openPicker" component={openPicker} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;