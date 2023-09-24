import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, ImageBackground, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import NavBarProfile from '../navBar/NavBarProfile';

export default function Profile({ navigation, route }) {

  const pressHandlerHomePage = () => {
    navigation.navigate('HomePage');
  };

  const pressHandlerCameraPage = () => {
    navigation.navigate('CameraPage');
  };

  const pressHandlerProfile = () => {
    navigation.navigate('Profile');
  };

  const pressHandlerSettings = () => {
    navigation.navigate('Settings');
  };

  const pressHandlerNameChange = () => {
    navigation.navigate('NameChange', { currentName: name });
  };
  
  const [name, setName] = useState('User');
  useEffect(() => {
    if (route.params?.updatedName) {
      setName(route.params.updatedName);
    }
  }, [route.params?.updatedName]);


  return (
    <ImageBackground source={require('../../assets/GreenBackground.png')} style={styles.background}>

      <View style={styles.mainContent}>
        <TouchableOpacity onPress={pressHandlerSettings}>
          <View style={styles.settingBox}>
            <Image source={require('../../assets/settings.png')} style={styles.settings} />
          </View>
        </TouchableOpacity>

        <View style={styles.profileContainer}>
          <View>
                <Image source={require('../../assets/usericon.png')} style={styles.profilePic} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.profileText}>Welcome Back !</Text>
            <View style={styles.textNameMofidifier}>
              <Text style={styles.profileName}>{name}</Text>
              <TouchableOpacity onPress={pressHandlerNameChange} style={styles.colorCircleEdit}>
                <Image source={require('../../assets/edit.png')} style={styles.edit} />
              </TouchableOpacity>
            </View>
            <Text style={styles.profileDetect}>Dectect: 1</Text>
          </View>
        </View>
        <Text style={styles.profileTitle}>Quiz</Text>

        <View style={styles.centerContainer}>
          <View style={styles.rectContainer}>
            <View style={styles.squareShape}>
              <Image source={require('../../assets/quiz.png')} style={styles.quiz}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textScore}>Score: 0</Text>
              <Text style={styles.textAttempt}>Attempt: 0</Text>
            </View>
          </View>
        </View>

      </View>

      {/*new Navigation Bar*/}
      <NavBarProfile navigation={navigation}/>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  background: {
    flex: 1,
    resizeMode: "stretch",
  },
  mainContent: {
    flex: 1,

  },


  settingBox: {
    width: 40,
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 80,
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

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },

  profilePic: {
    width: 180,
    height: 180,
    borderRadius: 100, 

  },

  textNameMofidifier: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  colorCircleEdit: {
    width: 15,
    height: 15,
    borderRadius: 100, 
    backgroundColor: 'black', 
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  edit: {
    resizeMode: 'contain',
  },

  profileText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  profileName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  profileDetect: {
    fontSize: 15,
  },

  profileTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 25,
  },

  centerContainer: {
    justifyContent: 'center',   
    alignItems: 'center',       
  },
  rectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    marginTop: 10,
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    width: 360,
    height: 110,
  },



  squareShape: {
    width: 110,
    height: 90,
    backgroundColor: '#d3d3d3',  
    marginRight: 20, 
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
  },

  textScore: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  textAttempt: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  quiz: {
    width: 70,
    height: 70,
    marginLeft: 20,
  },

});
