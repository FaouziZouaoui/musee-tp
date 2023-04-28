import { StyleSheet, Text, View , Button , TextInput } from 'react-native'
import React, { useState } from 'react'

const CreerCompte = ({navigation , route}) => {
  const [email , setLogin] = useState("")
    const [password , setPassword] = useState("")
    function submit(){
      fetch("http://10.0.2.2:4000/user",{
        method : "POST",
        body : JSON.stringify({
          "email" : email,
          "password" : password,
          "role" : "redacteur"
        }),
        headers : {"content-type" : "application/json"}
      })
      .then(reponse=>reponse.json())
      .then(data => console.log(data))
    } 
  return (
    <View>
      <TextInput placeholder='email' style={styles.input} value={email} onChangeText={(text) => setLogin(text)}/>
      <TextInput secureTextEntry={true} placeholder='password' style={styles.input} value={password} onChangeText={(text) => setPassword(text)}/>
      <Button onPress={ submit } color="blue" title="valider" />
      <Button onPress={ () => navigation.goBack()} color="red" title="annuler" />
    </View>
  )
}

export default CreerCompte

const styles = StyleSheet.create({
    input : {
        borderWidth : 1,
        padding : 10 ,
        borderColor : "black",
        backgroundColor : "white",
        marginBottom : 10
    }
})