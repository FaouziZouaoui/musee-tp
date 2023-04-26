import { StyleSheet, Text, View , Button , TextInput } from 'react-native'
import React from 'react'

const CreerCompte = ({navigation , route}) => {
  return (
    <View>
      <Text>CreerCompte</Text>
      <Text>{ JSON.stringify(route.params.query) } </Text>
      <TextInput placeholder='email' style={styles.input} value={route.params.query}/>
      <Button onPress={ () => navigation.goBack() } color="red" title="annuler" />
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