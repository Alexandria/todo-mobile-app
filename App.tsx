import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NativeBaseProvider, Box } from 'native-base'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { CompletedScreen } from './src/screens/CompletedScreen';
import { TodoScreen } from './src/screens/TodoScreen';

const MyTheme = {
  dark: false,
  colors: {
    primary: '#f98284',
    background: '#FFFAFA',
    card: 'white',
    text: 'white',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    navigator: "green"
  },
};


const Tab = createMaterialTopTabNavigator()

export default function App() {
  return (
   <NativeBaseProvider>
        <View style={styles.box}></View>
        <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
          screenOptions={{ tabBarStyle: {backgroundColor:"#28282E"}}}
        >
        <Tab.Screen name="Todo" component={TodoScreen} />
        <Tab.Screen name="Completed" component={CompletedScreen} />
      </Tab.Navigator>
        </NavigationContainer>
   </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
   height:25
  }
});
