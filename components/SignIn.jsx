import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { tailwind } from '../lib/tailwind'
import { getColor } from 'tailwind-rn';

const SignIn = ({ navigation }) => {

    const [valueEmail, setValueEmail] = React.useState('');
    const [valuePassword, setValuePassword] = React.useState('');
    const [error, setError] = React.useState(false);

    const confirmAccount = () => {
        if (valueEmail === 'test@gmail.com' && valuePassword === "test") { //mock value
            navigation.navigate('Welcome')
        } else {
            setError(true)
        }
    }

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
    }, [error])

    return (
        <View style={tailwind("flex bg-white h-full  justify-center items-center  px-6 pt-24  ")}>
            <View style={tailwind("pb-8 w-full")}>
                {
                    error &&
                    <Text
                        style={tailwind("bg-red-100 text-center border border-red-400 text-red-700 px-4 py-3 rounded relative")}
                    >
                        Try again with the  right credentials ;)
                    </Text>
                }
                <TextInput
                    style={tailwind("px-3 py-3 text-gray-700 relative bg-white bg-white rounded text-sm border-b w-full")}
                    placeholder="Email"
                    onChangeText={text => setValueEmail(text)}
                    value={valueEmail}
                />
                <TextInput
                    style={tailwind("px-3 py-3 text-gray-700 relative bg-white bg-white rounded text-sm border-b w-full")}
                    placeholder="Mot de passe"
                    onChangeText={text => setValuePassword(text)}
                    value={valuePassword}
                />
            </View>
            <View style={tailwind("flex justify-between items-center pb-8 w-full h-2/3")}>
                <TouchableOpacity
                    style={tailwind("bg-black rounded-sm p-4  pt-6 w-9/12 ")}
                    onPress={confirmAccount} //need others pages
                    title="Learn ddd"
                    color={getColor('blue-500')}
                    accessibilityLabel="Learn more about this purple button"
                >
                    <Text
                        style={tailwind("text-white text-center")}
                    >
                        Valider
                    </Text>
                </TouchableOpacity>
                <Text
                    onPress={() => navigation.navigate("Welcome")}
                >
                    Mot de passe oublié ?
                </Text>
            </View>
        </View>

    );
};

export default SignIn;