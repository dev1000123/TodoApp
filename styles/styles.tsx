import { StyleSheet } from "react-native";

export const homepageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  completed:{
    textDecorationLine:'line-through',
    color:"#fff",
    fontSize:20,
    textAlign:"center",
    fontFamily:"Inter-Medium"
  },
  incomplete:{
    color:"#fff",
    fontSize:20,
    textAlign:"center",
    fontFamily:"Inter-Medium"
  },
  TodoTray:{
    width:382,
    height:60,
    backgroundColor:"#212121",
    flexDirection:"column",
    justifyContent:"center",
    borderRadius:20,
  },
  Todo:{
    marginLeft:15,
    flexDirection:"row",
    height:"auto",
    
    
  }
})
export const addStyles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#1a1a1a',
    alignContent:'center'
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  },
})
