import { StyleSheet } from 'react-native';


   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#F5F5F5',
       width: 390,
     },
     image: {
      flex: 1,
      justifyContent: 'center',
      height: 744,
     },
     title: {
       fontSize: 17,
       fontWeight: 'bold',
       alignItems: 'flex-start'
     },
     subtitle: {
       fontSize: 18,
       color: 'black',
       fontWeight: 'bold',
     },
     fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    gearSettings: {
      width: 44,
      height: 44,
      alignSelf: 'right',
      marginTop: 16,
      marginBottom: 10
    },
    profileIcon:{
      width: 74,
      height: 74
    },
    bottomNavIcons:{
      width: 55,
      height: 55,
    },
    bottomNavBox:{
      backgroundColor: 'green',
      width: 390,
      height: 82,
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    partBox:{
      backgroundColor: '#D9D9D9',
      width: 358,
      height: 79,
      flexDirection: 'row',
      alignItems: 'center',
    },
    banner: {
      marginBottom: 49,
      marginLeft: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },
    collection: {
      marginBottom: 8
    },
    health: {
      marginBottom: 205,
      marginTop: 8
    },
    smallImage:{
      width: 79,
      height: 62,
      marginLeft: 10,
    },
    mainBody:{
      alignItems: 'center',
      wdith: 358,
    }
      
   });

   export default styles;