import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image,Pressable} from 'react-native';
import {useState} from "react";
import {TextInput,RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

export default Registration = ({ navigation }) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company_name, setCompanyName] = useState('');
  const [agency, setAgency] = useState('');

  const [storedName, setStoredName] = useState('');
  const [storedPhone, setStoredPhone] = useState('');
  const [storedEmail, setStoredEmail] = useState('');
  const [storedPassword, setStoredPassword] = useState('');
  const [storedCompanyName, setStoredCompanyName] = useState('');
  const [storedAgency, setStoredAgency] = useState('');

  const storeValue = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      setStoredName(name);
      setName('');

      await AsyncStorage.setItem('phone', phone);
      setStoredPhone(phone);
      setPhone('');

      await AsyncStorage.setItem('email', email);
      setStoredEmail(email);
      setEmail('');

      await AsyncStorage.setItem('password', password);
      setStoredPassword(password);
      setPassword('');

      await AsyncStorage.setItem('company_name', company_name);
      setStoredCompanyName(company_name);
      setCompanyName('');

      await AsyncStorage.setItem('agency', checked);
      setStoredAgency(checked);
      setAgency('');

      console.log('Value stored successfully.');
    } catch (error) {
      console.error('Error storing value:', error);
    }
  };

  const [checked, setChecked] = useState('first');

  return (
    <View>
    <View>
    <Text style={{marginTop:50,fontSize:24,fontWeight:'bold',textAlign:'left'}}> Create your </Text>
    <Text style={{fontSize:24,fontWeight:'bold',textAlign:'left'}}> PopX account</Text>
    </View>

    
     <TextInput
        label = "Full Name" 
        mode = 'outlined'
        style={[styles.textBoxes,{marginTop:20}]}
        value={name}
        onChangeText={text => setName(text)}
        >
        
      </TextInput>

      <TextInput
        label = "Phone number" 
        keyboardType="numeric"
        mode = 'outlined'
        style={styles.textBoxes}
        value={phone}
        onChangeText={text => setPhone(text)}>
      </TextInput>

      <TextInput
        label = "Email address" 
        mode = 'outlined'
        style={styles.textBoxes}
        value={email}
        onChangeText={text => setEmail(text)}>
      </TextInput>

      <TextInput
        label = "Password" 
        mode = 'outlined'
        secureTextEntry={true}
        style={styles.textBoxes}
        value={password}
        onChangeText={text => setPassword(text)}>
      </TextInput>

      <TextInput
        label = "Company name" 
        mode = 'outlined'
        style={styles.textBoxes}
        value={company_name}
        onChangeText={text => setCompanyName(text)}
        >
      </TextInput>

   

<Text style={{marginTop:5,marginLeft:7}}> Are you an Agency? </Text>
    <View style ={{flexDirection:'row', justifyContent: 'left', alignItems:'left'}}>
      <RadioButton
        value="first"
        color ="blue"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text style={{marginTop:9}}> Yes </Text>
      <RadioButton
        value="second"
        color ="blue"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text style={{marginTop:9}}> No </Text>
      </View>

        <TouchableOpacity
        onPress={() => 
          {
            storeValue();
            navigation.navigate('Login', { name: 'Login' })
          }}
          style={styles.customBtnBG}
          >
          <Text style={styles.customBtnText}>Create Account</Text>
        </TouchableOpacity>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
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
 marginTop:70,
 borderRadius:5
 },
  bottomView: {
    width: '100%',
    position: 'absolute', 
    bottom: 0, 
  },
  textBoxes: { 
      width: '95%',
     fontSize: 13,
     height: 45,
     marginTop:5,
     activeBorderColor:'black',
     activeValueColor:'black',
     borderRadius:15,
     alignSelf:'center'
   } ,
});
