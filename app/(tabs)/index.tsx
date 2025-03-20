import { Text, View, StyleSheet,TouchableOpacity, FlatList } from 'react-native';
import { Link, useNavigation } from 'expo-router'; 
import {homepageStyles} from "../../styles/styles"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from 'react';
import {Todo,TodoList} from "../../structure"

const styles = homepageStyles
export default function Index() {
  const nav = useNavigation()

  const [TodoList,setTodoList] = useState<TodoList>({
    todos:[]
  })
  useEffect(() => {
    const foci = nav.addListener('focus', () => {
      AsyncStorage.getItem("todos").then((items)=>{
        if (items!==null){
          setTodoList(JSON.parse(items))
        }
      })
    });

    return foci;
  }, [nav]);
  useEffect(()=>{
  AsyncStorage.getItem("todos").then((items)=>{
    if (items!==null){
      setTodoList(JSON.parse(items))
    }
  })},[])
  const sync = async ()=>{
    await AsyncStorage.setItem("todos",JSON.stringify(TodoList))
  }
  useEffect(()=>{
    sync()
    // console.log(AsyncStorage.getItem("todos"))
  },[TodoList])
  const handleComplete = (id:number)=>{
    const newTodos = TodoList.todos.map((item)=>
      item.id===id?{...item,completed:!item.completed}:item
    )
    setTodoList({...TodoList,todos:newTodos})
  }
  const renderItem = ({item}:{item:Todo})=>(
    <TouchableOpacity onPress={()=>handleComplete(item.id)}>
      <Text style={item.completed?styles.completed:styles.incomplete}>{item.Label}</Text>
    </TouchableOpacity>
  )
  return(
    <View style={styles.container}>
      <FlatList 
      data={TodoList.todos}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id.toString()}
      />
    </View>
  )
}


