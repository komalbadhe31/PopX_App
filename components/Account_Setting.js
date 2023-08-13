import { Text, SafeAreaView, StyleSheet,View,Image } from 'react-native';
import {useState} from "react";
import AsyncStorage from '@react-native-community/async-storage';


export default  Account_Setting =({route})=> {

  return (
    <SafeAreaView style={styles.container}>
    <View style={{flexDirection:'row'}}>

      <Image
        style={styles.imgStyle}
        source={require('../assets/user.jpg')}
      />
    <Image
        style={styles.imgStyle1}
        source={require('../assets/edit.jpg')}
      />
    <View style={{flexDirection:'column', marginLeft:20}}>
    <Text>{route.params.name} </Text>
    <Text>{route.params.email} </Text>
    </View>
    </View>
    <Text style={{marginTop:30}}> Loren Ipsum Dolor Sit Amet, Counsetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft:20,
    padding: 8,
  },
  imgStyle:{
    height:60,
    width:60,
  },
    imgStyle1:{
    height:20,
    width:20,
    marginTop:35,
    marginLeft:-10

  },


});
