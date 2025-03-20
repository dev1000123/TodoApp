import { Text, View, StyleSheet,TouchableOpacity, FlatList } from 'react-native';
import { Link, useNavigation } from 'expo-router'; 
import {homepageStyles} from "../../styles/styles"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from 'react';
import {Todo,TodoList} from "../../structure"
import Ionicons from '@expo/vector-icons/Ionicons';

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
    if (TodoList.todos.length>0){ 
      await AsyncStorage.setItem("todos",JSON.stringify(TodoList))
      console.log("changed")
      }
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
  const handleDelete = (id:number)=>{
    const list:Todo[] = []
    TodoList.todos.map((item)=>
    {
      if (item.id !==id){
        list.push(item)
      }
      
    }
    )
    setTodoList({...TodoList,todos:list})
  }
  const renderItem = ({item}:{item:Todo})=>(
    <TouchableOpacity onPress={()=>handleComplete(item.id)} onLongPress={()=>handleDelete(item.id)} style={styles.TodoTray} >
      <View style={styles.Todo}>
        <Ionicons name={!item.completed?"checkmark-sharp":"close-sharp"} size={28} style={{marginRight:10}} color={"#fff"}/>
        <Text style={item.completed?styles.completed:styles.incomplete}>{item.Label}</Text>
      </View>
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


