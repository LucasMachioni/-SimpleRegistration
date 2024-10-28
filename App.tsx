import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { useState } from 'react'
import { Home } from './src/screens/home/Home'
import { Logo } from './src/components/logo/Logo';
import { MyButton } from './src/components/button/MyButton';
import { MyForm } from './src/screens/form/MyForm';
import { teste } from './src/screens/home/Style';

export default function App() {

  const [showSecondScreen, setShowSecondScreen] = useState(true);

  function changeScreen () {
    setShowSecondScreen((prevState) => !prevState);
  }

  return (
    <View style={teste.homeContainer}>
    {showSecondScreen ? (

    <View style={styles.container}>
      <Home/>
      <MyButton action={changeScreen} theTitle='Clique para se cadastrar' />
      <StatusBar style="auto" />
    </View>

    ) : (

      <View>
      <MyForm/>
      <MyButton action={changeScreen} theTitle='Concluído' />
      </View>

    )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b5998',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 95,
    paddingTop: 95,
  },
});
