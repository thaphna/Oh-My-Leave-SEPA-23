import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet, Text, ImageBackground } from 'react-native';
import * as FS from "expo-file-system";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Upload({navigation, route}) {
  const { imageUri } = route.params; // Retrieve the image URI passed as a parameter

  useEffect(() => {
    console.log("upload page")
    //console.log(imageUri)

    const uploadImageForPrediction = async (storeKey, setValue) => {
      //get saved model name. If none selected yet, default to something
      selectedModelName = null 

      try {
        const savedValue = await AsyncStorage.getItem(storeKey)
        if(savedValue === null) {
          await AsyncStorage.setItem(storeKey, setValue)
          selectedModelName = setValue
        }          
        else {
          selectedModelName = savedValue
        }
      } catch (e) {
        console.error("Failed to initialise settings. " + e)
      }

      console.log("get saved  " + selectedModelName) 

      //replace below url with the actual EC2 url
      let url = "https://16e7-121-200-5-225.ngrok-free.app/predict-plant";
      let content_type = "image/jpeg";
  
      let response = await FS.uploadAsync(url, imageUri, {
        headers: {
          "content-type": content_type,
          "model": selectedModelName
        },
        httpMethod: "POST",
        uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
      });

      navigation.navigate('Result', { resultBody: JSON.parse(response.body) });
    };

    uploadImageForPrediction('SelectedModel', 'summer');


  }, [navigation]);

  return (
    <ImageBackground source={require('../assets/GreenBackground.png')} style={styles.background}>
      <View style={styles.centered}>
        <Image source={require('../assets/leave.png')} style={styles.logo}/>
        
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large"/>
        </View>
        <Text style={styles.text}>
          Loading...</Text>
      </View>
    </ImageBackground>

  );
}

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
    marginTop: 180,
    marginBottom: 35,  
  },
  loaderContainer: {
    transform: [{ scale: 2 }], 
  },
  text: {
    marginTop: 35,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
  },


});

