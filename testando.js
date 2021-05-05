/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, SafeAreaView,  Text, Button, ScrollView, TextInput, FlatList, StyleSheet, StatusBar} from 'react-native';

import {createStore} from 'redux';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import Table from './Table.js';
//import List from './Lista/List.js';



const DATA = [
  {
    id: {},
    Cliente: 'First Item :',
    Mesa: '10',
    Lanches: '',


  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    Cliente: 'Second Item',
    Mesa: '10',
    Lanches: '',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    Cliente: 'Third Item',
    Mesa: '10',
  Lanches: '',
  },
];


const DATA_2 = [
  {
    id: '122543453453',
    Cliente: 'First Item :',
    Mesa: '10',
    Lanches: '',


  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    Cliente: 'Second Item',
    Mesa: '10',
    Lanches: '',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    Cliente: 'Third Item',
    Mesa: '10',
  Lanches: '',
  },
];



const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.Titulo}>{title}</Text>
  </View>
);




const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.Titulo} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      
    </SafeAreaView>,
    <View style ={style.segundaBloco}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </View>
  );
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

segundaBloco:{// é o bloco pra fazer os flex de baixo
  backgroundColor: 'blue',
  marginTop: 50,

},


  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  Titulo: {
    fontSize: 20,
  },
});

export default App;



