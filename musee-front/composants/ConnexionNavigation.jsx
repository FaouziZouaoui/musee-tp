import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Connexion from "./Connexion"
import CreerCompte from "./CreerCompte"

const Stack = createNativeStackNavigator()

const ConnexionNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ 
        headerShown : false
    }}>
        <Stack.Screen name="connexion" component={Connexion} />
        <Stack.Screen name="creer-compte" component={CreerCompte} />
    </Stack.Navigator>
  )
}

export default ConnexionNavigation