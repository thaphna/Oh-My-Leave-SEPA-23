import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Navigator from "./collaboration/navigation/navigator";
import ConfirmPicture from "./collaboration/screens/ConfirmPicture";
import Upload from "./collaboration/screens/Upload";

function App(){
  return (
    <Navigator/>
    )
}

export default App;