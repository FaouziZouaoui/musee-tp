import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Accueil from "./composants/Accueil"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ConnexionNavigation from './composants/ConnexionNavigation';
const Menu = createBottomTabNavigator()

import "react-native-gesture-handler"

// rdv 13h40 
export default function App() {

  const profil = {
    nom : "Faouzi" ,
    isConnected : true   
  }


  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Menu.Navigator screenOptions={{
        tabBarActiveBackgroundColor : "#eee",
        tabBarStyle : { borderColor : "blue" , borderWidth : 3 },
        tabBarShowLabel : false
      }}>
        <Menu.Screen name="ACCUEIL" component={Accueil} 
          options={{
            tabBarIcon : function(){
              return <MaterialCommunityIcons name="home" color="black" size={40} />
            }
          }} />


            <Menu.Screen name="connexion-menu" component={ ConnexionNavigation } options={{
              tabBarIcon : function(){
                return <MaterialCommunityIcons name="account" color="black" size={40} />
              },
              title : `Bienvenu ${profil.nom}`
            }}/>

         
       </Menu.Navigator>

      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor : "white",
    borderWidth : 5
  },
});
