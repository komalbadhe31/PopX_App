import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Registration from './components/Registration';
import Account_Setting from './components/Account_Setting'
import Dashboard from './components/Dashboard'



const Stack = createStackNavigator();
const App = () => {
   return (
      <NavigationContainer  independent={true}>
      <Stack.Navigator
      initialRouteName="Dashboard"
            screenOptions={{
               headerTitleAlign: 'center',
               headerShown:false,
               headerStyle: {
                 backgroundColor: 'thistle',
               },
               headerTintColor: '#fff',
             }}>


  <Stack.Screen  
         name="Dashboard" 
         component={Dashboard} 
		 options={{ title: 'Dashboard' }}/>

	  <Stack.Screen 
         name="Login" 
         component={Login} 
         options={{ title: 'Login', headerLeft: null }} />

      <Stack.Screen 
         name="Registration" 
         component={Registration} 
         options={{ title: 'Registration' }} />

      <Stack.Screen  
         name="Account_Setting" 
         component={Account_Setting} 
		 options={{ title: 'Account Setting', headerShown:true,headerLeft:null,
       headerTitleAlign: 'left',
       headerStyle: {
         backgroundColor: 'white',
       }, 
       headerTitleStyle: {
         color: 'black'
       }}}/>


	  
      </Stack.Navigator>
      </NavigationContainer>
   );
};

export default App;