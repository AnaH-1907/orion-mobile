import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import { StatusBar } from 'expo-status-bar';
import Exams from './components/Exams';
import Shell from './components/Shell';
import Home from './components/Home';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';
import LegalNotice from './components/LegalNotice';
import React from 'react';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Shell" component={Shell} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Exams" component={Exams} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="SignIn" options={{ title: 'Me connecter' }} component={SignIn} />
                <Stack.Screen name="CreateAccount" options={{ title: 'Créer un compte' }} component={CreateAccount} />
                <Stack.Screen name="LegalNotice" options={{ title: 'Mentions légales' }} component={LegalNotice} />
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
};

export default App;