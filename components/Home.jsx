import {FlatList, Text, TextInput, View} from 'react-native';
import {getColor, tailwind} from '../lib/tailwind';
import React, {useEffect, useState} from 'react';
import {Ionicons} from '@expo/vector-icons';
import PostsListItem from './PostsListItem';
import posts from '../data/posts';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

const Search = ({setFiltered}) => {

    const [search, setSearch] = useState('');

    useEffect(() => {
        setFiltered(posts.filter(item => {
            const regexp = new RegExp(search.toLowerCase(), 'g');
            return item.content.toLowerCase().match(regexp)
                || item.author.name.toLowerCase().match(regexp)
        }));
    }, [search]);

    return (
        <View style={tailwind('m-4 bg-gray-100 rounded-full h-12 items-center flex-row px-4')}>
            <Ionicons name="search" size={24} color={getColor('gray-400')}/>
            <TextInput
                value={search}
                placeholder='Rechercher'
                onChangeText={value => setSearch(value)}
                style={tailwind('flex-1 ml-4 w-full')}/>
        </View>
    );
}

const Home = ({navigation}) => {

    const [filtered, setFiltered] = useState(posts);

    return (
        <View style={tailwind('bg-white h-full')}>

            <View style={tailwind('h-20 pb-2 bg-gray-100 items-center justify-end shadow-sm')}>
                <Text style={tailwind('font-medium text-lg text-gray-800')}>Fil de discussions</Text>
            </View>

            <FlatList
                data={filtered}
                keyExtractor={(post, i) => i.toString()}
                ListHeaderComponent={<Search setFiltered={setFiltered}/>}
                renderItem={({item}) => <PostsListItem post={item} navigation={navigation}/>}/>

        </View>
    );
};

export default Home;