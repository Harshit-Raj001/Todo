import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TodoLI({ item, pressHandler }){
  return(
    <TouchableOpacity onPress={() =>   pressHandler(item.key)}>
      <Text style={ styles.txtBase }>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  txtBase:{
    color: 'white',
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 30,
    padding: 16,
    marginTop: 10,
    fontFamily: 'courier new',
    fontSize: 20,
  }
});