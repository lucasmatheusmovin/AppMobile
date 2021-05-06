import React, { Component } from 'react';
import { Button, StyleSheet, Text,  ScrollView, TextInput, View, Keyboard, TouchableOpacity } from 'react-native';

export default class CadastroScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nome"
                    maxLength={20}
                    onBlur={Keyboard.dismiss}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Mesa"
                    maxLength={20}
                    onBlur={Keyboard.dismiss}
                />
                <TouchableOpacity style={styles.enviarButton}>
                    <Text style={styles.enviarButtonText}>Lanches</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.enviarButton}>
            <Text style={styles.enviarButtonText}>Enviar</Text>
        </TouchableOpacity>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  inputContainer: {
    paddingTop: 15,
    borderColor: '#FF0000',
  },
  textInput: {
    borderColor: '#FF0000',
    backgroundColor: '#FFFF00',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  enviarButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#FF0000',
    padding: 15,
    margin: 5
  },
  enviarButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  }
});