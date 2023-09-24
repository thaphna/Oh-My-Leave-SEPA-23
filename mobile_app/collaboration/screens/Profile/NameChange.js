import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function NameChange({ navigation, route }) {

  const [newName, setNewName] = useState(route.params.currentName);

  const handleNameChange = () => {
    if (newName.trim() === "") {
      Alert.alert("Invalid Name", "Name cannot be empty!");
      return;
    }
    // Navigating back to the Profile page with the updated name
    navigation.navigate('Profile', { updatedName: newName });
    Alert.alert("Success!", "Name has been updated.");
  };

  return (
    <View style={styles.container}>
      <TextInput 
        value={newName} 
        onChangeText={setNewName} 
        placeholder="Enter new name"
        style={styles.input} 
      />
      <Button title="Update Name" onPress={handleNameChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16
  }
});
