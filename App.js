import React, { useState } from 'react';
import { 
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/header';
import TodoLI from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App(){
  const [todol, setTodol] = useState([
    { text:'item 1', key: '1'},
    { text:'item 2', key: '2'},
    { text:'item 3', key: '3'},
    { text:'item 4', key: '4'},
    { text:'item 5', key: '5'},
  ]);
  const[alertMssg, setAlertMssg] = useState(' ');
  const pressHandler = (key) => {
    setTodol((prevTodol) => {
      return prevTodol.filter(todol => todol.key != key)
    });
  }

  const submitHandler = (text) => {
    if(text.length <= 3){
      setAlertMssg('Todo must be 4 or more chars long');
    }
    else{
      setAlertMssg(' ');
      setTodol((prevTodol) => {
        return [
          { text: text, key: Math.random().toString()},
          ...prevTodol
        ]
      });
    }
  }

  return(
    <TouchableWithoutFeedback onPress={() => (Keyboard.dismiss())}>
      <View style={ styles.base }>
        <Header />
        <View style={ styles.form }>
          <AddTodo submitHandler={submitHandler}/>
          <Text style={ styles.alert }>{ alertMssg }</Text>
          <View style={ styles.list }>
            <FlatList 
              data={todol}
              renderItem={({ item }) => (
              <TodoLI item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  base:{
    flex: 1,
    backgroundColor: 'black',
  },
  form:{
    flex: 1,
    padding: 40,
  },
  list:{
    marginTop: 20,
    flex: 1,
  },
  alert:{
    textAlign: "center",
    color: 'coral',
    fontSize: 16,
    fontFamily: 'courier new',
    fontWeight: 'bold',
  },
});