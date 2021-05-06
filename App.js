import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Pedidos from './screens/Pedidos';
import Cadastro from './screens/Cadastro';

const Stack = createStackNavigator();

const App = () =>
  (React$Node = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: true,
            }}>
            <Stack.Screen name="Mc lanche infeliz" component={Pedidos} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  });

export default App;