import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Navigator from "./collaboration/navigation/navigator";
import Profile from "./collaboration/screens/Profile";
import CameraTakingPicture from "./collaboration/screens/CameraTakingPicture";
import CameraPage from "./collaboration/screens/CameraPage";

function App(){
  return (
    <Navigator/>
    )
}

export default App;