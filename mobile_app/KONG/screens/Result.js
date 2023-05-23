import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Result({ navigation }) {
  return (
    <View  style={styles.container}>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default Result;
