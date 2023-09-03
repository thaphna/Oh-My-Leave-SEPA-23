import React from 'react';
import { StyleSheet,View, Button, ImageBackground, Text, Image, Alert, Pressable, useWindowDimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { CameraModeEnum } from '../common/CameraModeEnum';

export default function HomePage({navigation}){
   const pressHandlerHomePage = () => {
    navigation.navigate('HomePage');
  };

  const pressHandlerCameraPage = () => {
      navigation.navigate('CameraPage');
  };

  const pressHandlerProfile = () => {
      navigation.navigate('Profile');
  };

  const pressHandlerSettings = () => {
    navigation.navigate('Settings');
  };

  const pressHandlerHealthCheckPage = () => {
    navigation.navigate('CameraFeature', { cameraMode: CameraModeEnum.HealthCheck });
  };

  return (
    <ImageBackground source={require('../assets/GreenBackground.png')} style={styles.background}>
      <TouchableOpacity onPress={pressHandlerSettings}>
          <View style={styles.cube}>
              <Image source={require('../assets/settings.png')} style={styles.settings}/>  
          </View>            
      </TouchableOpacity>
      
      <View style={styles.mainBody}>
        <View style={styles.collection}>
          <Text style={styles.subtitle}>Collection</Text>
          <View style={styles.partBox}>
            <Image style={styles.smallImage} source={require('../assets/collectionLeaf.png')}  />  
            <Text style={[styles.subtitle, styles.body]}>Date : 15 / 04 /23</Text>
          </View>
      
          <Text style={styles.subtitle}>Health Diagnosis</Text>
          <TouchableOpacity onPress={pressHandlerHealthCheckPage}>
            <View style={styles.partBox}>
              <Image style={styles.smallImage} source={require('../assets/healthLeaf.png')}  />  
              <Text style={[styles.subtitle, styles.body]}>Check Health</Text>
            </View>
          </TouchableOpacity>
        </View> 
      </View>

    
      <View style={styles.bar}>          
          <View style={styles.shape}>
            <TouchableOpacity onPress={pressHandlerHomePage}>
                <Image source={require('../assets/home.png')} style={styles.home}/>
            </TouchableOpacity>  
            <Text style={styles.name}>Home</Text>
          </View>
          <TouchableOpacity onPress={pressHandlerCameraPage}>
            <Image source={require('../assets/camera.png')} style={styles.camera1}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={pressHandlerProfile}>
            <Image source={require('../assets/profile.png')} style={styles.profile}/>
          </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
  },
  body:{
    marginLeft: 8
  },
  partBox:{
    backgroundColor: '#D9D9D9',
    height: 79,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  collection: {
    marginBottom: 8
  },
  health: {
    marginBottom: 205,
    marginTop: 8
  },
  smallImage: {
    width: 79,
    height: 62,
    marginLeft: 10,
  },
  mainBody: {
    marginLeft: 30
  },
  background: {
    flex: 1,
    resizeMode: 'stretch',
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  circle: {
    width: 200, 
    height: 200,
    borderRadius: 100, 
    backgroundColor: '#D9D9D9',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  camera: {
    width: 120,
    height: 100,
    alignSelf: 'center'
  },
  cube: {
    width: 40,
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 50,
    marginEnd: 20,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  settings: {
    width: 25,
    height: 25,
    alignSelf: 'center'
  },
  bar: {
    width: '100%',
    height: 80,
    backgroundColor: '#008000',
    marginTop: '200%',
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  shape: {
    width: 120, 
    height: 120,
    borderRadius: 60, 
    backgroundColor: '#008000',
    bottom: 5,
    marginLeft: -30,
    marginRight: 20
  },
  camera1: {
    width: 55,
    height: 45,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 33,
    marginTop: 75,
    position: 'absolute'
  },
  profile: {
    width: 50,
    height: 50,
    marginRight: 0,
    marginLeft: 55
  },
  home: {
    width: 50,
    height: 50,
    marginTop: 15,
    alignSelf: 'center'
  }
});