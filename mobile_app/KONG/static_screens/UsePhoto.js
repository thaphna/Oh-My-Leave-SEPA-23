import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function UsePhoto({navigation}){
    const pressHandlerCamera = () => {
      navigation.navigate('CameraTakingPicture');
     };

     const pressHandlerUpload = () => {
      navigation.navigate('Upload');
    };

  return (
    <View>
    <View style={{width: '100%', height: 120, backgroundColor: 'black'}}></View>
    <Image
    source={require('../assets/upload.png')} 
    style={styles.upload}
  />
     <View style={{width: '100%', height:150, backgroundColor: 'black'}}>
     <TouchableOpacity onPress={pressHandlerCamera}>
        <Text style={styles.text}>Retake</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={pressHandlerUpload}>
   <Text style={styles.text2}>Use Photo</Text>
   </TouchableOpacity>

   </View>
  </View>

  );
};

const styles = StyleSheet.create({
    upload: {
        width: '100%', 
        height: 630,     
      },

    text2: {
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginTop: 50,
      fontSize: 15,
      marginLeft: 50,
      position: 'absolute',
    },
    text: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 50,
        fontSize: 15,
        marginLeft: 325,
        position: 'absolute',
      },




});



