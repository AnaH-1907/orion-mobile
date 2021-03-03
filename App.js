import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import {StatusBar} from 'expo-status-bar';
import Exams from './components/Exams';
import Shell from './components/Shell';
import Home from './components/Home';
import React from 'react';

const Stack = createStackNavigator();

const App = () => {
    return (
      
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Shell'>
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
                <Stack.Screen name="Shell" component={Shell} options={{ headerShown: false }}/>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                <Stack.Screen name="Exams" component={Exams} options={{ headerShown: false }}/>
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
            </Stack.Navigator>
            <StatusBar style="auto"/>
        </NavigationContainer>
      
    );
};

export default App;