import React from 'react';
import { View, Image, Text } from 'react-native';
import logoHome from '../../../assets/arm-wrestling.png';
import { StyleSheet } from 'react-native';

export function Logo() {
  return (
    <>
    <Text
    style={styles.containerText}
    >Faça parte da comunidade
    </Text>

    <Image
    style={styles.containerLogo}
    source={logoHome}
    />
    </>
  );
}


export const styles = StyleSheet.create({
  containerLogo: {
    resizeMode: 'contain',
    height: 200,
    marginTop: 50,
  },

  containerText: {
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#dfe3ee',
    marginTop: 50,
  }
});
