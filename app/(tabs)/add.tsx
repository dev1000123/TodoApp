import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import {addStyles} from "../../styles/styles"
import {Todo,TodoList} from "../../structure"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
const styles = addStyles
export default function AboutScreen() {
  const [CurrTodo,setCurrTodo] = useState('')
  const [TodoList,setTodoList] = useState<TodoList>({
    todos:[]
  })
  const sync = async ()=>{
    await AsyncStorage.setItem("todos",JSON.stringify(TodoList))
  }
  useEffect(()=>{
    sync()
    // console.log(TodoList)
  },[TodoList])
  useEffect(()=>{
    AsyncStorage.getItem("todos").then((items)=>{
      if (items!==null){
        setTodoList(JSON.parse(items))
      }
  })},[])
  const handleChange = (text:string)=>{
    setCurrTodo(text)
  }
  const handleComplete = ()=>{
    const newTodo:Todo={
      Label:CurrTodo,
      id:Date.now(),
      completed:false
    }
    setTodoList({...TodoList,todos:[...TodoList.todos,newTodo]})
    setCurrTodo('')
    console.log(JSON.stringify(TodoList))
   
  }
  return (
    <View style={styles.container}>
      <TextInput onChangeText={handleChange} placeholder='Write label' style={styles.text} placeholderTextColor="#fff" value={CurrTodo}></TextInput>
      <Button onPress={handleComplete} title='test'/>
    </View>
  );
} 

