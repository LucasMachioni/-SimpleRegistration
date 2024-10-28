import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './MyInputStyle'

//import { styles } from './styles';

export function MyInput() {
  return (
    <View>

        <Text style= {{fontWeight: 'bold',}} >NOME</Text>
        <TextInput style={styles.inputContainer} placeholder='Insira seu nome' />

        <Text style= {{fontWeight: 'bold',}} >E-MAIL</Text>
        <TextInput style={styles.inputContainer} keyboardType ='email-address' placeholder='Digite seu melhor e-mail' />

        <Text style= {{fontWeight: 'bold',}} >CPF</Text>
        <TextInput style={styles.inputContainer} keyboardType = 'number-pad' placeholder='Digite seu CPF' />

        <Text style= {{fontWeight: 'bold',}} >APRESENTAÇÃO</Text>
        <TextInput style={styles.inputFour} placeholder='Conte sobre você' multiline={true} numberOfLines={8}/>

    </View>
  );
}