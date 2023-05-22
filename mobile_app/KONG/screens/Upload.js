// pages/Loading.js

import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet, Text } from 'react-native';

function Loading({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Result');
    }, 3000); // 2 seconds
  }, [navigation]);

  return (
    <View style={styles.centered}>
      <Image
        source={require('../assets/leave.png')}  // Replace this with your logo image path
        style={styles.logo}
      />
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large"/>
      </View>
      <Text style={styles.text}>
        Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250, // Larger logo
    height: 250, // Larger logo
    marginBottom: 20,  // More space between the logo and the ActivityIndicator
  },
  loaderContainer: {
    transform: [{ scale: 2 }], // This will scale the size of the ActivityIndicator
  },
  text: {
    marginTop: 25,
  }


});

export default Loading;
