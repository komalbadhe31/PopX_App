import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image,Pressable} from 'react-native';
import {useState} from "react";
import {TextInput,RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

export default Login = ({ navigation }) => {

  const [checked, setChecked] = useState('first');
  const [storedEmail, setStoredEmail] = useState('');
  const [storedPassword, setStoredPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  const retrieveValue = async () => {
    try {
      const retrievedEmail = await AsyncStorage.getItem('email');
      const retrievedPassword = await AsyncStorage.getItem('password');
      const retrievedName = await AsyncStorage.getItem('name');

      if (retrievedEmail !== null && retrievedPassword !== null && retrievedName != null) {
        setStoredEmail(retrievedEmail);
        setStoredPassword(retrievedPassword);
        setName(retrievedName);
        console.log('Value retrieved successfully:', retrievedEmail);
      } else {
        console.log('No value found in AsyncStorage.');
      }

      if(email == retrievedEmail && password == retrievedPassword)
      {
        navigation.navigate('Account_Setting', {name:name, email: email  })
      }
      else
      {
        alert('Invalid Credentials...!');
      }

      
    } catch (error) {
      console.error('Error retrieving value:', error);
    }
  };

  return (
    <View>
    <View>
    <Text style={{marginTop:50,fontSize:24,fontWeight:'bold',textAlign:'left'}}> Signin to your </Text>
    <Text style={{fontSize:24,fontWeight:'bold',textAlign:'left'}}> PopX account</Text>
    </View>


    <TextInput
        label = "Email" 
        mode = 'outlined'
        style={[styles.textBoxes, {marginTop:20}]}
        value={email}
        onChangeText={text => setEmail(text)}
        >
      </TextInput>

      <TextInput
        label = "Password" 
        secureTextEntry={true}
        mode = 'outlined'
        style={styles.textBoxes}
        value={password}
        onChangeText={text => setPassword(text)}>
      </TextInput>

      <TouchableOpacity
      onPress={() => {
        retrieveValue(); 
      }}
      style={styles.customBtnBG}>
      <Text style={styles.customBtnText}>Login</Text>
    </TouchableOpacity>  


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },

 customBtnText: {
     fontSize: 16,
     padding:10,
     fontWeight: '400',
     color: "#fff",
     textAlign:'center'
 },
  customBtnBG: {
    width : '95%',
    height: 40,
    alignSelf:'center',
    backgroundColor:'blue',
    marginTop:15,
    borderRadius:5
  },
  bottomView: {
    width: '100%',
    position: 'absolute', 
    bottom: 0, 
  },
  textBoxes: { 
      width: '95%',
     fontSize: 12,
     activeBorderColor:'black',
     activeValueColor:'black',
     borderRadius:15,
     alignSelf:'center'
   } ,
});
