import React, { ReactDOM } from 'react';
import { View, Button } from 'react-native';
import { useState } from 'react';
import { styles } from './ButtonStyle';

interface buttonProps {
  action: () => void;
  theTitle: string
}

export function MyButton ({action, theTitle} : buttonProps) {

  return (
    <View style={styles.buttonContainer}>

        <Button onPress={action} title={theTitle} />

    </View>
  );
}