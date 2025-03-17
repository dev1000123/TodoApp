import { Text, View,StyleSheet } from "react-native";
import {} from "@expo-google-fonts/inter"
import {homepageStyles} from "../styles/styles"
import {} from "react-native-paper"
import {createMaterialBottomTabNavigator} from "react-native-paper/react-navigation"

const styles = homepageStyles







const HomeView=()=>{
  return(
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.title}>ToDo <Text style={{fontFamily:"Inter-Medium",fontSize:14}}>Prototype</Text></Text>
      </View>
    </View>
  )
}



export default HomeView