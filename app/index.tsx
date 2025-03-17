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
  container:{
    backgroundColor:"#161616",
    flex:1
  },
  topbar:{
    flexDirection:"column",
    height:'10%',
    backgroundColor:"#242424",
    justifyContent:"center"
  },
  title:{
    color: "#FFFFFF",
    fontFamily: "Inter-Black",
    fontSize:16,
    marginLeft:10
  }
})

export default HomeView