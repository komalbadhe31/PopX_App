import {SafeAreaView, StyleSheet, View, Text,TouchableOpacity} from 'react-native';

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.containerMain}>
        <View style={styles.bottomView}>
        <View style={styles.txtStyle}>
          <Text style={{fontSize:20,fontWeight:'bold'}}> Welcome to PopX </Text>
          <Text style={{color:'#161616'}}> Lorem ipsum dolor sit amet, </Text>
          <Text style={{color:'#161616'}}> consectetur adipiscing elit,</Text>
        </View>

        <TouchableOpacity
          style={[styles.customBtnBG, {backgroundColor :'#6211C8', marginTop:10,borderRadius:5 }]}
             onPress={() => navigation.navigate('Registration', { name: 'Registration' })}>
          <Text style={styles.customBtnText}>Create Account</Text>
        </TouchableOpacity>   

        <TouchableOpacity
          style={[styles.customBtnBG, {backgroundColor :'#c2a9fa', marginTop:10,borderRadius:5,}]}
          onPress={() => navigation.navigate('Login', { name: 'Login' })}>
          <Text style={styles.customBtnText}>Already Registeres? Login</Text>
        </TouchableOpacity>   

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
  bottomView: {
    width: '100%',
    position: 'absolute', 
    bottom: 0,
    marginBottom:50 
  },
  txtStyle:{
    textAlign:'left',
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
  },
});
export default Dashboard;