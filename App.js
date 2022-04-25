import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SeachScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Business Screen" component={SearchScreen} /> 
      <Stack.Screen name="Results Show" component={ResultShowScreen} />
    </Stack.Navigator>
  )
}

export default () => (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
)