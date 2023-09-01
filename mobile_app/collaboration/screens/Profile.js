import React from 'react';
import { StyleSheet,View, Button, ImageBackground, Text, Image, Alert, Pressable, useWindowDimensions, SafeAreaView, TouchableOpacity } from 'react-native';

export default function Profile({navigation}){

   const pressHandlerHomePage = () => {
    navigation.navigate('HomePage');
  };

  const pressHandlerCameraPage = () => {
      navigation.navigate('CameraPage');
  };
  const pressHandlerProfile = () => {
    navigation.navigate('Profile');
};


    return (
      <ImageBackground source={require('../assets/GreenBackground.png')} style={styles.background}>
          <View style={styles.cube} />
          <Image source={require('../assets/settings.png')} style={styles.settings} /> 

          <View style={styles.bar}>           
            <View style={styles.shape}>
                <TouchableOpacity onPress={pressHandlerProfile}>
                    <Image source={require('../assets/profile.png')} style={styles.profile}/>
                </TouchableOpacity>
                <Text style={styles.name}>Profile</Text>
            </View>
            <TouchableOpacity onPress={pressHandlerCameraPage}>
                <Image source={require('../assets/camera.png')} style={styles.camera1}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressHandlerHomePage}>
                <Image source={require('../assets/home.png')} style={styles.home}/>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    );
};


const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
  },
  background: {
      flex: 1,
      resizeMode: 'stretch',
  },
  
  cube: {
    width: 40,
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginLeft: 350,
    marginTop: 50,
    position: 'absolute'
},
settings: {
    width: 25,
    height: 25,
    marginLeft: 357,
    marginTop: 57,
    position: 'absolute'
},
shape: {
  width: 120, 
  height: 120,
  borderRadius: 60, 
  backgroundColor: '#008000',
  alignSelf: 'center',
  bottom: 5,
  position: 'absolute'
},
bar: {
  width: '100%',
  height: 80,
  backgroundColor: '#008000',
  marginTop: '200%',
  bottom: 0,
  position: 'absolute'
},
shape: {
  width: 120, 
  height: 120,
  borderRadius: 60, 
  backgroundColor: '#008000',
  bottom: 5,
  position: 'absolute',
  marginLeft: 280,
},
profile: {
  width: 70,
  height: 70,
  marginLeft: 25,
  marginTop: 20,
  position: 'absolute'
},
name: {
  fontSize: 20,
  fontWeight: 'bold',
  marginLeft: 33,
  marginTop: 85,
  position: 'absolute'
},
home: {
  width: 50,
  height: 50,
  alignSelf: 'left',
  marginTop: 10,
  position: 'absolute',
  marginLeft: 60,
},
camera1: {
  width: 55,
  height: 45,
  alignSelf: 'center',
  marginTop: 13,
  position: 'absolute'
},


});
