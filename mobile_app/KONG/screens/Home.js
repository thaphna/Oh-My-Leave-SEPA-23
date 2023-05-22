import React from 'react';
import { View, Button, StyleSheet} from 'react-native';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Upload an Image" onPress={() => navigation.navigate('Upload')} />
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
export default Home;
