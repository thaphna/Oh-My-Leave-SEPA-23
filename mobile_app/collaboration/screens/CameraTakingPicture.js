import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

export default function CameraTakingPicture({navigation}){
     const pressHandlerCameraPage = () => {
      navigation.navigate('CameraPage');
    };

    const pressHandlerConfirmPage = () => {
        navigation.navigate('ConfirmPicture');
    };

  return (
    <ImageBackground style={styles.background}>
        <Image source={require('../assets/leave1.jpg')} style={styles.leave}/>

    <TouchableOpacity onPress={pressHandlerConfirmPage}>
        <View style={styles.circle1}>
            <View style={styles.circle2}>
               <View style={styles.circle3}/>
            </View>
        </View>
    </TouchableOpacity>

        <Text style={styles.text1}>PHOTO</Text>
    
    <TouchableOpacity onPress={pressHandlerCameraPage}>
      <Text style={styles.text2}>Cancel</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={pressHandlerConfirmPage}>
      <Image source={require('../assets/gallery.png')} style={styles.gallery}/>
    </TouchableOpacity>

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
        backgroundColor: '#000000',
    },
    leave: {
        width: '100%',
        height: '75%',
        marginTop: 45,
    },
    circle1: {
        width: 80, 
        height: 80,
        borderRadius: 50, 
        backgroundColor: '#FFFFFF',
        marginTop: 65,
        marginLeft: 165,
        position:'absolute',
    },
    circle2: {
        width: 70, 
        height: 70,
        borderRadius: 40, 
        backgroundColor: '#000000',
        marginTop: 5,
        marginLeft: 5,

    },
    circle3: {
        width: 60, 
        height: 60,
        borderRadius: 30, 
        backgroundColor: '#FFFFFF',
        marginTop: 5,
        marginLeft: 5,
    },
    text1: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 178,
        marginTop: '180%',
        position:'absolute',
    },
    text2: {
        color: '#FFFFFF',
        fontSize: 15,
        marginLeft: 60,
        marginTop: 85,
        position:'absolute',
    },
    gallery: {
        height: 50,
        width: 50,
        position: 'absolute',
        marginLeft: 310,
        marginTop: 70,
    },
    


    



});



