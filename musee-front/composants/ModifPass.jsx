import { StyleSheet, Text, View , TextInput , Button } from 'react-native'
import React from 'react'

const ModifPass = ({navigation}) => {
  return (
    <View style={styles.box}>
      <Text>ModifPass</Text>
      <TextInput placeholder='changer password' />
      <Button onPress={() => navigation.goBack()}  title='retour en arriere' color="purple"/>
    </View>
  )
}

export default ModifPass

const styles = StyleSheet.create({
    box : {
        flex : 1,
        justifyContent: "center",
        alignItems : "center"
    }
})