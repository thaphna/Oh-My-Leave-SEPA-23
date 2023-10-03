import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import * as ImagePicker from 'expo-image-picker';
// import openPicker from './openPicker';

export default function MyBottomSheet({navigation}) {
  const bottomSheetRef = useRef(null);
  const galleryRef = useRef(null);
  const [image, setImage] = useState(null);
  const [selectImage, setselectImage] = useState('')

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };    

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // setselectImage(response.assets[0].uri);

      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });  
    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const openPicker = () =>{
    // navigation.ImagePicker.openPicker()
    navigation.navigate('openPicker');
  }
    

  return (
 
    <View style={{flex: 1, flexDirection:'column'}}>     

      <View style= {{flex:1, flexDirection:'row', justifyContent:'center'}}>
        <Text style={{fontWeight: 'bold', fontSize:25, marginRight:150}}>Collections</Text> 
        <TouchableOpacity 
          onPress={openBottomSheet}        
          style={{ width: 50, height: 50, backgroundColor: '#B1F2B3',
          borderRadius: 10, justifyContent: 'center',alignItems: 'center'}}> 
          <Text style={{fontWeight: 'bold', size: 50}}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={{ width: 10, height:10, flexDirection:'column', marginBottom:550, marginLeft: 30}} >
        {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 , borderRadius: 10 }} />}
      </View>

      <RBSheet
        ref={bottomSheetRef}
        height={300}        
        openDuration={250}
        closeOnDragDown={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#008000',
          },
        }}
      >          
      {/* Content of the bottom sheet */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius:20, marginRight: 80, justifyContent: 'center', alignItems: 'center'}} > 
            <Image source={require('../assets/camera.png')} style={{ width: 50, height: 50}} />
            <Text style={{fontWeight: 'bold'}}>Camera</Text>
          </TouchableOpacity>
  
          <TouchableOpacity 
            onPress={() => {
              pickImage()          
            }}
            style={{ 
              width: 100, 
              height: 100, backgroundColor: 'white', 
              borderRadius:20, justifyContent: 'center', alignItems: 'center' }}> 
            <Image source={require('../assets/gallery.png')} 
            style={{ width: 50, height: 50}} />
            <Text style={{fontWeight: 'bold'}}>Gallery</Text>
                        
          </TouchableOpacity> 
        </View>          
      </View>
      </RBSheet>
    </View>
      
    
  );
};

// export default MyBottomSheet();