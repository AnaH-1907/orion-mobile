import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Exams from './Exams';
import Home from './Home';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const Shell = () => {
    return (
        <Tab.Navigator tabBarOptions={{ showLabel: false }}>
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="earth" size={24} color="black" />),
            }}/>
            <Tab.Screen 
                name="Exams" 
                component={Exams}
                options={{ tabBarIcon: ({ color, size }) => (<FontAwesome name="check-circle" size={24} color="black" />),
            }}/>
            <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{ tabBarIcon: ({ color, size }) => (<FontAwesome name="user-circle" size={24} color="black" />),
            }}/>
        </Tab.Navigator>
    )
};

export default Shell;

