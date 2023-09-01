import { Button, StyleSheet, Text, View, TouchableOpacity,Image, ImageBackground } from 'react-native';
import MyBottomSheet from './MyBottomSheet.js';
import RBSheet from 'react-native-raw-bottom-sheet'


export default function CollectionPage(){

    return(
        <View style={styles.container}>      
        
            <TouchableOpacity style={{ width: 100, height: 50, backgroundColor: '#B1F2B3', borderRadius:5, marginTop: 70,marginBottom: 30, marginRight: 250 ,justifyContent: 'center', alignItems: 'center'  }} >     
                <Text style={{fontWeight: 'bold'}}>BACK</Text>
            </TouchableOpacity> 
            <View style={{ flexDirection: 'row', marginRight:160, marginBottom:45, alignContent:"center"}}>
                <Image source={require('../assets/icon.png')}  />
                <Text style={{fontWeight: 'bold'}}>User Name</Text>
            </View>

            <View style={{ flexDirection: 'row'}}>        
                <Text style={{fontWeight: 'bold', fontSize:25, marginRight:160}}>Collections</Text>
                <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#B1F2B3', borderRadius:10, justifyContent: 'center', alignItems: 'center' }}> 
                <Text style={{fontWeight: 'bold', size: 50}}>+</Text>
                </TouchableOpacity>
            </View>
            <MyBottomSheet/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  