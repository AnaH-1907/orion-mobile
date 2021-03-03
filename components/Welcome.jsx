import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { tailwind } from '../lib/tailwind'
import { getColor } from 'tailwind-rn';

const Welcome = ({ navigation }) => {

    return (
        <View style={tailwind("flex h-full  bg-white  justify-center items-center  px-6  pt-20")}>
            <View style={tailwind("pb-6 ")}>
                <Ionicons name="planet" size={220} color="black" />
            </View>

            < View style={tailwind("flex flex-col space-x-4 w-9/12 pb-8")} >
                <TouchableOpacity
                    style={tailwind("bg-black  rounded-sm p-4  py-3 px-6 ")}
                    onPress={() => navigation.navigate('SignIn')}
                    title="Learn More"
                    color="#1f061f"
                    accessibilityLabel="Learn more about this purple button"
                >
                    <Text style={tailwind("text-white text-center")}>
                        CONNEXION
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={tailwind("flex flex-col   space-x-4 w-9/12 pb-8 ")}>
                <TouchableOpacity
                    style={tailwind("bg-white border border-black  rounded-sm py-3 px-6")}
                    onPress={() => navigation.navigate('CreateAccount')}
                    title="Créer mon compte"
                    accessibilityLabel="Learn more about this purple button"
                >
                    <Text style={tailwind("text-black text-center")}>
                        Créer mon compte
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={tailwind("")}
                onPress={() => navigation.navigate("LegalNotice")}
            >
                Mentions légales
            </Text>
        </View >
    );
};



export default Welcome;