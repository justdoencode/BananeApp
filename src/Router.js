
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./pages/auth/Login/Login";
import Sign from "./pages/auth/Sign/Sign";

import FlashMessage from "react-native-flash-message";
import Messages from "./pages/Messages/Messages";
import colors from "./styles/colors";

import auth from "@react-native-firebase/auth"
import Button from "./components/Button/Button"



const Stack=createNativeStackNavigator();
const Router = () =>{

  const [userSession,setUserSession]=useState();

  useEffect(()=>{
    auth().onAuthStateChanged(user=>{
      setUserSession(!!user)
    })
  },[])
  
  const AuthStack = () =>{
    return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
          
          <Stack.Screen name="LoginPage" component={Login}/>
          <Stack.Screen name="SignPage" component={Sign}/>
          
        </Stack.Navigator>
    )
  }
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {
          !userSession ?(
            <Stack.Screen name="AuthStack" component={AuthStack}/>
            
          ):(

            <Stack.Screen name="MessagesPage" component={Messages} options={{
                headerShown:true,
                title:"dertler",
                headerTitleAlign:"center",
                headerTitleStyle:{color:colors.darkgreen},
                headerRight:()=>(<Button text="ÇIKIŞ" onPress={()=>auth().signOut()}/>)
              }}/>
          )
        }
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}

export default Router;