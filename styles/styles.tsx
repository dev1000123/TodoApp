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
    fontSize:16
  },
  incomplete:{
    color:"#fff",
    fontSize:19
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
