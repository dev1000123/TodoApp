import { Text, View,StyleSheet } from "react-native";
import {} from "@expo-google-fonts/inter"






const HomeView=()=>{
  return(
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.title}>ToDo <Text style={{fontFamily:"Inter-Medium",fontSize:14}}>Prototype</Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default HomeView