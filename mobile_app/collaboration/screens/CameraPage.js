import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

export default function CameraPage({navigation}){
    const pressHandlerTakingPicture = () => {
      navigation.navigate('CameraTakingPicture');
     };

     const pressHandlerHomePage = () => {
      navigation.navigate('HomePage');
    };

    const pressHandlerSelf = () => {
        navigation.navigate('CameraPage');
    };

  return (
    <ImageBackground source={require('../assets/GreenBackground.png')} style={styles.background}>
        <View style={styles.cube} />
        <Image source={require('../assets/settings.png')} style={styles.settings} /> 
        <Image source={require('../assets/leave.png')} style={styles.logo}/>
        <TouchableOpacity onPress={pressHandlerTakingPicture}>
            <View style={styles.circle} />
            <Image source={require('../assets/camera.png')} style={styles.camera}/>  
        </TouchableOpacity>

    
        <View style={styles.bar}>           
            <View style={styles.shape}>
                <TouchableOpacity onPress={pressHandlerSelf}>
                    <Image source={require('../assets/camera.png')} style={styles.camera1}/>
                </TouchableOpacity>
                <Text style={styles.name}>Camera</Text>
            </View>
            <TouchableOpacity onPress={pressHandlerHomePage}>
                <Image source={require('../assets/home.png')} style={styles.home}/>
            </TouchableOpacity>
            <Image source={require('../assets/profile.png')} style={styles.profile}/>
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
    logo: {
        width: 250,
        height: 250,
        marginLeft: 85,
        marginTop: 100,
        position: 'absolute'
    },
    circle: {
        width: 200, 
        height: 200,
        borderRadius: 100, 
        backgroundColor: '#D9D9D9',
        marginLeft: 110,
        marginTop: 340,
        position: 'absolute'
    },
    camera: {
        width: 120,
        height: 100,
        marginLeft: 150,
        marginTop: 385, 
        position: 'absolute'      
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
        alignSelf: 'center',
        bottom: 5,
        position: 'absolute'
    },
    camera1: {
        width: 70,
        height: 55,
        marginLeft: 25,
        marginTop: 30,
        position: 'absolute'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: 85,
        position: 'absolute'
    },
    profile: {
        width: 50,
        height: 50,
        marginLeft: 310,
        marginTop: 10,
        position: 'absolute'
    },
    home: {
        width: 45,
        height: 45,
        marginLeft: 60,
        marginTop: 10,
        position: 'absolute'
    },



});



