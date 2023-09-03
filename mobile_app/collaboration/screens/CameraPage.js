import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

export default function CameraPage({navigation}){
    const pressHandlerTakingPicture = () => {
        navigation.navigate('CameraFeature');
    };

    const pressHandlerHomePage = () => {
        navigation.navigate('HomePage');
    };

    const pressHandlerSelf = () => {
        navigation.navigate('CameraPage');
    };

    const pressHandlerProfile = () => {
        navigation.navigate('Profile');
    };

    const pressHandlerSettings = () => {
        navigation.navigate('Settings');
    }

  return (
    <ImageBackground source={require('../assets/GreenBackground.png')} style={styles.background}>
        <TouchableOpacity onPress={pressHandlerSettings}>
            <View style={styles.cube}>
                <Image source={require('../assets/settings.png')} style={styles.settings}/>  
            </View>            
        </TouchableOpacity>
        <Image source={require('../assets/leave.png')} style={styles.logo}/>
        <TouchableOpacity onPress={pressHandlerTakingPicture}>
            <View style={styles.circle}>
                <Image source={require('../assets/camera.png')} style={styles.camera}/>  
            </View>            
        </TouchableOpacity>

    
        <View style={styles.bar}>   
            <TouchableOpacity onPress={pressHandlerHomePage}>
                <Image source={require('../assets/home.png')} style={styles.home}/>
            </TouchableOpacity>        
            <View style={styles.shape}>
                <TouchableOpacity onPress={pressHandlerSelf}>
                    <Image source={require('../assets/camera.png')} style={styles.camera1}/>
                </TouchableOpacity>
                <Text style={styles.name}>Camera</Text>
            </View>
            <TouchableOpacity onPress={pressHandlerProfile}>
                <Image source={require('../assets/profile.png')} style={styles.profile}/>
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
        alignSelf: 'center',
        bottom: 5
    },
    camera1: {
        width: 70,
        height: 55,
        marginLeft: 25,
        marginTop: 15,
        position: 'absolute'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: 75,
        position: 'absolute'
    },
    profile: {
        width: 50,
        height: 50,
        marginLeft: 25,
        alignSelf: 'flex-end'
    },
    home: {
        width: 45,
        height: 45,
        marginRight: 25,
        alignSelf: 'flex-start'
    },
});



