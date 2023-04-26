import { StyleSheet, Text, View , TouchableWithoutFeedback , Button } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Profil = ({navigation}) => {
  return (
    <View style={styles.box}>
      <Text  style={styles.titre}>Profil</Text>
      {/** https://pictogrammers.com/library/mdi/ */}
      <TouchableWithoutFeedback onPress={() => alert("coucou")}>
        <MaterialCommunityIcons size={50} color="red" name="account"/>
      </TouchableWithoutFeedback>
      <Button onPress={() => { navigation.navigate("modifPass") }} title="modifier mot de passe" />
    </View>
  )
}

export default Profil

const styles = StyleSheet.create({
    box : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titre : {
        fontSize : 30,
    }
})

// export 
// export default 