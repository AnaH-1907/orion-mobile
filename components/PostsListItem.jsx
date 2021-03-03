import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Feather, FontAwesome} from '@expo/vector-icons';
import {getColor, tailwind} from '../lib/tailwind';
import moment from 'moment';
import React from 'react';

const PostsListItem = ({post, navigation}) => {

    const {content, image, stars, author, createdAt, children} = post;

    return (
        <TouchableOpacity
            style={tailwind('px-4 py-6 border-t border-gray-200')}
            onPress={() => navigation.push('Post', {post})}>

            <View style={tailwind('flex-row items-center justify-between')}>
                <View style={tailwind('flex-row items-center')}>

                    <Image style={tailwind('w-8 h-8 rounded-full mr-2')}
                           source={{uri: `https://i.pravatar.cc/100?u=${author.name}`}}/>
                    <View>
                        <Text style={tailwind('text-gray-800 font-bold')}>{author.name}</Text>
                        <Text style={tailwind('text-gray-500 text-xs')}>{moment(createdAt).fromNow()}</Text>
                    </View>
                </View>
                <Feather name="more-vertical" size={24} color={getColor('gray-400')}/>
            </View>

            <View style={tailwind('py-4 pl-10')}>
                <Text style={tailwind('text-gray-800 leading-5')}>{content}</Text>
            </View>

            {
                !!image &&
                <View style={tailwind('pl-10')}>
                    <Image style={tailwind('w-full h-64 rounded mb-6')} source={{uri: image}}/>
                </View>
            }

            <View style={tailwind('flex-row justify-between pl-10')}>
                <View style={tailwind('flex-row justify-between mr-10')}>
                    <FontAwesome name="comment-o" size={20} color={getColor('gray-400')}/>
                    <Text style={tailwind('ml-2')}>{children.length}</Text>
                </View>
                <View style={tailwind('flex-row justify-between')}>
                    <FontAwesome name="star-o" size={20} color={getColor('gray-400')}/>
                    <Text style={tailwind('ml-2')}>{stars}</Text>
                </View>
                <View style={tailwind('flex-row flex-grow justify-end')}>
                    <FontAwesome name="send-o" size={20} color={getColor('gray-400')}/>
                </View>
            </View>

        </TouchableOpacity>
    )
};

export default PostsListItem;