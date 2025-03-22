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
    marginBottom:15
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
  textBox: {
    color: '#fff',
    textAlign: 'center',
    borderColor:"#fff",
    borderWidth:2,
    borderRadius:15,
    marginBottom:15,
    fontSize:18,
    fontFamily:"Inter-Medium",
    width:"80%",
    marginLeft:"10%"
  },
  add:{
    width:"80%",
    marginLeft:"10%",
    flexDirection:"column",
    justifyContent:"center",
    backgroundColor:"#6405eb",
    height:30,
    borderRadius:20,
    borderColor:"#000",
    borderWidth:2
  },
  addText:{
    textAlign:"center",
    color:"#fff",
    fontFamily:"Inter-Black"
  }
})
