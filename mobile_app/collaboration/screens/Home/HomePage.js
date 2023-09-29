import React from 'react';
import { StyleSheet, View, Button, ImageBackground, Text, Image, Alert, Pressable, useWindowDimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import NavBarHome from '../navBar/NavBarHome';
import { CameraModeEnum } from '../../common/CameraModeEnum';
export default function HomePage({ navigation }) {
  const pressHandlerHomePage = () => {
    navigation.navigate("HomePage");
  };

  const pressHandlerCameraPage = () => {
    navigation.navigate("CameraPage");
  };

  const pressHandlerProfile = () => {
    navigation.navigate('Profile');
  };
  const pressHandlerSettings = () => {
    navigation.navigate('Settings');
  };
  const pressHandlerHealth = () => {
    navigation.navigate('CameraFeature', { cameraMode: CameraModeEnum.HealthCheck });
  };
  const pressHandlerCollection = () => {
    navigation.navigate('Collection');
  };


  return (
    <ImageBackground source={require('../../assets/GreenBackground.png')} style={styles.background}>
      <View style={styles.mainContent}>
        <TouchableOpacity onPress={pressHandlerSettings}>
          <View style={styles.settingBox}>
            <Image source={require('../../assets/settings.png')} style={styles.settings} />
          </View>
        </TouchableOpacity>

        <View style={styles.contents}>
          <View style={styles.collection}>
            <Text style={styles.title}>Collection</Text>
            <TouchableOpacity onPress={pressHandlerCollection}>
              <View style={styles.partBox}>
                <Image style={styles.collectionImage} source={require('../../assets/collectionLeaf.png')} />
                <Text style={[styles.subtitle, styles.body]}>Date : 15 / 04 /23</Text>
              </View>
            </TouchableOpacity>


            <View style={styles.health}>
              <Text style={styles.title}>Health Diagnosis</Text>
              <TouchableOpacity onPress={pressHandlerHealth}>
                <View style={styles.partBox}>
                  <Image style={styles.healthImage} source={require('../../assets/healthLeaf.png')} />
                  <Text style={[styles.subtitle, styles.body]}>Check Health</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <NavBarHome navigation={navigation} />
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
  },
  mainContent: {
    flex: 1
  },
  contents: {
  },


  subtitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 15,
  },


  title: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 10
  },

  body: {
    marginLeft: 8
  },

  partBox: {
    backgroundColor: '#D9D9D9',
    width: 358,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },

  collectionImage: {
    width: 100,
    height: 68,
    marginLeft: 10,
  },

  health: {
    marginBottom: 205,
    marginTop: 8
  },

  healthImage: {
    width: 100,
    height: 80,
    marginLeft: 10,
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





});