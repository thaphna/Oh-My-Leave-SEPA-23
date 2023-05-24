import React from 'react';
//import './Button.css'; //
import BottomNavigation from './BottomNavigation';

import { View, Button, ImageBackground, Text, Image, Alert, Pressable, useWindowDimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles.js'; // Update the path if necessary

function clickMe(){
    alert('Youclicked me');
}

const HomePage = () => {
  ;//const {height, width, scale, fontScale} = useWindowDimensions();
  const size = useWindowDimensions();
  const width = size.width;
  const height = size.height;
  return (
 
    <SafeAreaView style={styles.container}> 
    <View style={styles.container}>

    <ImageBackground source={require('./images/GreenBackground.png')} resizeMode="cover" style={styles.image}>
  
    
    <view>
    <Pressable 
      onPress={() => console.log("Settings button pressed")}
      style={( { pressed } ) => {
        return { opacity: pressed ? 0.4 : 1 }
      }}>
      <Image style={styles.gearSettings} source={require('./images/settings.png')} alt= {'Alternate text'} />  
      </Pressable>
    </view>

  
    <View style={styles.banner}>
      <Pressable 
      onPress={() => console.log("Profile button pressed")}
      style={( { pressed } ) => {
        return { opacity: pressed ? 0.4 : 1 }
      }}>
      <Image style={styles.profileIcon} source={require('./images/usericon.png')} alt= {'Alternate text'} />  
      </Pressable>
      <Text style={styles.title}>Kong</Text>
    </View>
    
    <View style={styles.mainBody}>
      <View style={styles.collection}>
        <Text style={styles.subtitle}>Collection</Text>

        <View style={styles.partBox}>
        <Image style={styles.smallImage} source={require('./images/collectionLeaf.png')}  />  
        <Text style={styles.subtitle}>Date : 15 / 04 /23</Text>
        </View>
    

      <View style={styles.health}>
        <Text style={styles.subtitle}>Health Diagnosis</Text>

        <View style={styles.partBox}>
        <Image style={styles.smallImage} source={require('./images/healthLeaf.png')}  />  
        <Text style={styles.subtitle}>Check Health</Text>
        </View>
      </View>
      </View> 

    </View>



    <view>
    <View style={styles.fixToText}>
      <View style={{backgroundColor: 'green', flex: 0.3}} />
      <BottomNavigation onPress={() => console.log("YAY")}  />
      </View>
    </view>
    </ImageBackground>

  </View>
  </SafeAreaView>
  );
}

export default HomePage;