import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddTodo({submitHandler}){
const [text, setText] = useState('');

const changeHandler = (val) =>{
    setText(val);
}

    return(
        <View style={styles.base}>
            <TextInput 
                placeHolder='New todo...'
                onChangeText={changeHandler}
                style={ styles.inp }
            />
            <TouchableOpacity onPress={() => submitHandler(text)}>
                <Text style={styles.addButton}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    base:{
        flexDirection: "row",
        backgroundColor: 'white',
        borderRadius: 30,
    },
    inp :{
        paddingLeft: 20,
        fontSize: 20,
        fontFamily: 'courier new',
        width: 281,
    },
    addButton:{
        width: 50,
        textAlign: 'center',
        borderRadius: 30,
        fontSize: 40,
    }
});