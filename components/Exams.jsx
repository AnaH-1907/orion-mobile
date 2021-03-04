import {View, Text, TextInput, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import { tailwind, getColor } from '../lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons'; 

//warning de la console à cause du require des image: pour des images d'internet et pas images en assets

const exams = [
    {img: require('../images/linux_logo.jpg'), title: "Quiz Linux", creation: "Créer il y a 21 jours", totalQ: "20 questions"},
    {img: require('../images/react_logo.jpg'), title: "Quiz React", creation: "Créer il y a 24 jours", totalQ: "15 questions"},
];

const Exams = ({navigation}) => {

    const [input, setInput] = useState("");
    const [filtered, setFiltered] = useState(exams);

    useEffect(() => {
        setFiltered(
            exams.filter((i) => 
            {
                return i.title.toLowerCase().match(input.toLowerCase());
            })
        )
      },[input]);

    return (
        <>
            <View style={tailwind('h-20 pb-2 bg-gray-200 items-center justify-end')}>
                <Text style={tailwind('font-medium text-lg text-gray-800')}>Exam</Text>
            </View>

            <View style={tailwind('m-4 bg-gray-200 rounded-full h-12 items-center flex-row px-4')}>
                <Ionicons name="search" size={24} color={getColor('gray-400')}/>
                <TextInput style={tailwind('flex-1 ml-4 w-full')}
                    onChangeText={(t) => setInput(t)}
                    value={input} />
            </View>

            <TouchableOpacity 
            style={tailwind('rounded-full h-16 w-16 flex items-center justify-center bg-gray-700 absolute bottom-0 right-0 z-40 mb-2 mr-2')}
            onPress={() => {navigation.push('add-quizz')}}
            >
                <FontAwesome5 name="plus" size={32} color="white" />
            </TouchableOpacity>

            <ScrollView>

                {
                    filtered.map((exam, index) => {
                        return(

                            <View style={tailwind('pb-2 items-center')} key={index}>
                                <Card containerStyle={tailwind('border-2 rounded-lg')}>
                                    <Image source={exam.img} style={tailwind('h-56 w-72')}/>
                                    <Text style={tailwind('mt-3 p-2 font-medium text-xl')}>{exam.title}</Text>
                                    <View style={tailwind('flex-row items-center')}>
                                        <Text style={tailwind('p-2')}>{exam.creation}</Text>
                                        <Text style={tailwind('p-2')}>{exam.totalQ}</Text>
                                    </View>
                                </Card>
                            </View>

                        )
                    })
                }

            </ScrollView> 

        </>
    );
};

export default Exams;
