import { StyleSheet, Text, View , TextInput , Button } from 'react-native'
import React , {useState} from 'react'

const Connexion = ({navigation}) => {
 
    const [login , setLogin] = useState("")
    const [password , setPassword] = useState("")
  return (
    <View>
      <TextInput placeholder='login' style={styles.input} value={login} onChangeText={(text) => setLogin(text)}/>
      <TextInput secureTextEntry={true} placeholder='password' style={styles.input} value={password} onChangeText={(text) => setPassword(text)}/>
      <Button onPress={() => {}} title="connexion"  style={styles.bouton} color="blue"/>
      <Button  style={styles.bouton} onPress={() => navigation.navigate("creer-compte" , {query : login})} title="créer un compte" />
    </View>
  )
}

export default Connexion

const styles = StyleSheet.create({
    input : {
        borderWidth : 2,
        padding : 10 ,
        borderColor : "black",
        backgroundColor : "white",
        marginBottom : 10
    },
    bouton : {
      color : "red",
      borderColor : "black",
      borderWidth : 5,
      margin : 10 
    }
})