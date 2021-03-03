import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import {StatusBar} from 'expo-status-bar';
import Exams from './components/Exams';
import Shell from './components/Shell';
import Post from './components/Post';
import Home from './components/Home';
import React from 'react';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Shell' screenOptions={{headerShown: false}}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Shell" component={Shell} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Post" component={Post} />
                <Stack.Screen name="Exams" component={Exams} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
            <StatusBar style="auto"/>
        </NavigationContainer>
    );
};

export default App;