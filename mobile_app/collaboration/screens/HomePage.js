import React from 'react';
import BottomNavigation from './../../Kayla/BottomNavigation';
import styles from './../../Kayla/styles'; 

import { View, Button, ImageBackground, Text, Image, Alert, Pressable, useWindowDimensions, SafeAreaView, TouchableOpacity } from 'react-native';

export default function HomePage({navigation}){
    const pressHandlerCameraPage = () => {
        navigation.navigate('CameraPage');

    };

    const size = useWindowDimensions();
    const width = size.width;
    const height = size.height;
    return (
        <ImageBackground source={require('../assets/GreenBackground.png')} style={styles.image}>
      
        <Pressable 
          onPress={() => console.log("Settings button pressed")}
          style={( { pressed } ) => { return { opacity: pressed ? 0.4 : 1 }}}>
          <Image style={styles.gearSettings} source={require('../assets/settings.png')} alt= {'Alternate text'} />  
        </Pressable>
        
        <View style={styles.banner}>
          <Pressable 
            onPress={() => console.log("Profile button pressed")}
            style={( { pressed } ) => {return { opacity: pressed ? 0.4 : 1 }}}>
            <Image style={styles.profileIcon} source={require('../assets/usericon.png')} alt= {'Alternate text'} />  
          </Pressable>
          <Text style={styles.title}>User</Text>
        </View>
        
        <View style={styles.mainBody}>
          <View style={styles.collection}>
            <Text style={styles.subtitle}>Collection</Text>
            <View style={styles.partBox}>
              <Image style={styles.smallImage} source={require('../assets/collectionLeaf.png')}  />  
              <Text style={[styles.subtitle, styles.body]}>Date : 15 / 04 /23</Text>
            </View>
        
          <View style={styles.health}>
            <Text style={styles.subtitle}>Health Diagnosis</Text>
            <View style={styles.partBox}>
              <Image style={styles.smallImage} source={require('../assets/healthLeaf.png')}  />  
            <Text style={[styles.subtitle, styles.body]}>Check Health</Text>
            </View>
          </View>
          </View> 
        </View>
    
    
        <View style={[styles.fixToText, styles.moveBottom]}>
          <BottomNavigation onPress={() => console.log("YAY")}  />
        </View>
    
      </ImageBackground>
    );

};
