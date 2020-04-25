import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header(){
  return(
    <View style={ styles.headerBase }>
      <Text style={ styles.txtBase }>Todo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBase: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  txtBase: {
    color: 'white',
    paddingVertical: 10,
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  }
});