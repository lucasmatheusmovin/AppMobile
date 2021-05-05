/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Button, ScrollView, TextInput, FlatList, StyleSheet, StatusBar} from 'react-native';

import {createStore} from 'redux';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import Table from './Table.js';
//import List from './Lista/List.js';




const Stack = createStackNavigator ();

const Tela1 = (props) => {
  const irTela2 = () => {
  const navigation = props.navigation;
  navigation.replace('Tela2');
  };
  return (
    <FlatList data={id}
    renderItem = {( {id}) =>
  <Text>{id.key}</Text>
  
  }
    >



    </FlatList>


  )}


  const DATA = [
    {
      id:{obj},
      title: 'First Item',
    },
    {
      id: {},
      title: '2° item',
    },
    {
      id: {},
      title: '3° item',
    },
  ];





const style = StyleSheet.create ({
  BordaDLista: {
    flex : 1,
    backgroundColor: "blue",
    border: '4',

  },
}
);
   











  const Tela2 = (props) => {
    const irTela1 = () => {
    const navigation = props.navigation;
    navigation.push('Tela1');
    };
    return (
    <ScrollView >
    <View>

    
    <Text> Tela 2 </Text>
    <Text> Tela 2 </Text>
    <Button title="voltar tela 1 " onPress={irTela1}></Button>
    </View> 
  

    </ScrollView>
     );
  };

//   aqui pega o testo escrito em outra tela , nome do cliente em uma parte do story
// 
  const getText = () => {
    const state = store.getState();
    return state.text;

  };

  return (
    <View>
      <Text style={{fontSize: 20}}> Tela 2</Text>
      <Text style={{fontSize: 20}}>{'Cliente' +getText()} </Text>

    </View>


  )





const App = () => {
return(
  
<NavigationContainer>
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
}}>
   <Stack.Screen name="Tela1" component={Tela1} />
    <Stack.Screen name="Tela2" component={Tela2} /> 
<Stack.Screen name = 'List' componente={List} />
    


</Stack.Navigator>
</NavigationContainer>

   );

};

export default App;