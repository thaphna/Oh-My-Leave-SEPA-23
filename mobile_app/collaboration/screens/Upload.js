import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet, Text, ImageBackground } from 'react-native';

export default function Upload({navigation}) {
  useEffect(() => {
    setTimeout(() => { navigation.navigate('Result'); }, 3000); }, [navigation]);

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

