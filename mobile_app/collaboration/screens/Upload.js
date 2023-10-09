import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet, Text, ImageBackground, Platform } from 'react-native';
import * as FS from "expo-file-system";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CameraModeEnum } from '../common/CameraModeEnum';

export default function Upload({navigation, route}) {
  const { imageUri } = route.params; // Retrieve the image URI passed as a parameter
  const { cameraMode } = route.params; 
  
  //replace below url with the actual EC2 url
  const url = "https://ee10-121-200-5-225.ngrok-free.app/"
  const content_type = "image/jpeg";

  useEffect(() => {
    console.log("upload page")
    //console.log(imageUri)
    console.log("image url " + imageUri)
    console.log("camera mode " + cameraMode)

    const uploadImageForPrediction = async (storeKey, setValue) => {
      //get saved model name. If none selected yet, default to something
      let selectedModelName = null 

      if (Platform.OS !== 'ios' && Platform.OS !== 'android') {
        selectedModelName = 'spring' 
      }
      else {
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
      }

      let fullUrl = url + "predict-plant";

      if (Platform.OS !== 'ios' && Platform.OS !== 'android') {
        fullUrl = fullUrl += '-pc'

        let response = await fetch(fullUrl, {
          method: 'POST',
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "model": selectedModelName
          },
          body: JSON.stringify({
            img: imageUri
          })
        });

        let jsonResult = await response.json()
        console.log(jsonResult)
        navigation.navigate('Result', { resultBody: jsonResult, imageUri: imageUri });
      }
      else {
        let response = await FS.uploadAsync(fullUrl, imageUri, {
          headers: {
            "content-type": content_type,
            "model": selectedModelName
          },
          httpMethod: "POST",
          uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
        });

        console.log(JSON.parse(response.body))
        navigation.navigate('Result', { resultBody: JSON.parse(response.body), imageUri: imageUri });
      }
    };

    const uploadImageForHealthCheck = async () => {
      let fullUrl = url + "health-check";
      
      if (Platform.OS !== 'ios' && Platform.OS !== 'android') {
        fullUrl = fullUrl += '-pc'

        let response = await fetch(fullUrl, {
          method: 'POST',
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "model": "health"
          },
          body: JSON.stringify({
            img: imageUri
          })
        });
  
        let jsonResult = await response.json()
        console.log(jsonResult)
        navigation.navigate('HealthResult', { resultBody: jsonResult, imageUri: imageUri });
      }
      else {
        let response = await FS.uploadAsync(fullUrl, imageUri, {
          headers: {
            "content-type": content_type,
            "model": "health"
          },
          httpMethod: "POST",
          uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
        });
  
        console.log(response.body)
        navigation.navigate('HealthResult', { resultBody: JSON.parse(response.body), imageUri: imageUri });
      }      
    };
    
    if (cameraMode === CameraModeEnum.Prediction) {
      uploadImageForPrediction('SelectedModel', 'summer');
    }
    else {
      uploadImageForHealthCheck();
    }
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

