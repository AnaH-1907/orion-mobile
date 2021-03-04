import {View, Text} from 'react-native';
import React from 'react';
import { tailwind } from '../lib/tailwind';

const AddQuizz = () => {
    return (
        <>
            <View style={tailwind('h-20 pb-2 bg-gray-200 items-center justify-end')}>
                <Text style={tailwind('font-medium text-lg text-gray-800')}>Ajouter un quiz</Text>
            </View>
        </>
    );
};

export default AddQuizz;