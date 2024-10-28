import React from 'react';
import { View } from 'react-native';
import { Logo } from '../../components/logo/Logo'
 
import { styles } from './Style';
import { MyButton } from '../../components/button/MyButton';

export function Home() {
  return (
    <View style={styles.homeContainer}>
      <Logo />
    </View>
  );
}