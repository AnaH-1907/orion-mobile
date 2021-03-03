import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { tailwind } from '../lib/tailwind'
import { getColor } from 'tailwind-rn';

const CreateAccount = () => {
  const [valueEmail, setValueEmail] = React.useState('');
  const [error, setError] = React.useState(false);

  function validateEmail() {
    let value = valueEmail
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  }

  const saveEmail = () => {
    if (validateEmail(valueEmail)) {
      navigation.navigate('Welcome')
    } else {
      setError(true)
    }

  }

  return (
    <View style={tailwind("flex bg-white h-full justify-center items-center  ")} >
      {
        error &&
        <Text
          style={tailwind("bg-red-100 text-center border border-red-400 text-red-700 px-4 py-3 rounded relative w-3/4")}
        >
          Please enter a valid email
        </Text>
      }
      <TextInput
        style={tailwind("px-3 py-3 text-gray-700 relative bg-white  rounded text-sm border-b w-3/4")}
        placeholder="Email"
        onChangeText={text => setValueEmail(text)}
        value={valueEmail}
      />

      <TouchableOpacity
        style={tailwind("bg-black rounded-sm p-4 border-b-2 mt-8 w-9/12")}
        onPress={saveEmail} //need others pages
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
    </View>
  );
};

export default CreateAccount;