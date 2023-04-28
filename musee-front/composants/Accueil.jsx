import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';

const Accueil = () => {
  const [resultats , setResultats] = useState([]);



    useEffect(function(){
        fetch("http://10.0.2.2:4000/all")
        .then(reponse => reponse.json())
        .then(data => {setResultats(data);}); 
    } , [])

  return (
    <View style={styles.box}>
            { 
                <FlatList 
                    data={resultats}
                    renderItem={ ({item}) => <View style={styles.espace}>
                        <Image source={{ uri : item.image , width: 350, height : 200 }}/>
                        <Text style={styles.titre}>{ item.nom }</Text>
                        <Text>{ item.description } </Text>
                    </View>}
                    keyExtractor={item => item._id}
                />
            }
    </View>
  )
}
export default Accueil

const styles = StyleSheet.create({
    box : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 20
        
    },
    titre : {
        fontSize : 30,
    }
})