import {View, Text, TextInput, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import { tailwind } from '../lib/tailwind';
import { FontAwesome } from '@expo/vector-icons';
import { Card } from 'react-native-elements';

const exams = [
    {img: "asset:/linux_logo.png", title: "Quiz Linux", creation: "Créer il y a 21 jours", totalQ: "20 questions"},
    {img: "asset:/lreact_logo.png", title: "Quiz React", creation: "Créer il y a 24 jours", totalQ: "15 questions"},
];

const Exams = () => {

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
                <FontAwesome name="search" size={24} color="black" style={tailwind('p-10')}/>
                <TextInput style={tailwind('flex-1 ml-4 w-full')}
                    onChangeText={(t) => setInput(t)}
                    value={input} />
            </View>

            <ScrollView>

                {
                    filtered.map((exam, index) => {
                        return(

                            <View style={tailwind('pb-2 items-center m-8')} key={index}>
                                <Card containerStyle={tailwind('border-2 rounded-lg')}>
                                    <Card.Image source={{uri: exam.img}} style={tailwind('h-56 w-72')} />
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
