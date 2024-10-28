import React from 'react';
import { View, Text } from 'react-native';
import { MyInput } from '../../components/input/MyInput'
import { styles } from './MyFormStyle'

//import { styles } from './styles';

export function MyForm() {
  return (
    <View style={styles.formContainer}>
        <MyInput />
    </View>
  );
}