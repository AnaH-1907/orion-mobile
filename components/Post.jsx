import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Feather, FontAwesome, Ionicons} from '@expo/vector-icons';
import {getColor, tailwind} from '../lib/tailwind';
import PostsListItem from './PostsListItem';
import ImagePopup from './ImagePopup';
import React, {useState} from 'react';
import moment from 'moment';

const Post = ({navigation, route}) => {

    const {post} = route.params;
    const {content, createdAt, image, stars, children, author} = post;

    const [showImage, setShowImage] = useState(false);
    const toggleShowImage = () => setShowImage(v => !v);

    const Original = () => (
        <View style={tailwind('px-4 py-6')}>
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

            <View style={tailwind('py-4')}>
                <Text style={tailwind('text-xl text-gray-800 leading-7')}>{content}</Text>
            </View>

            {
                !!image &&
                <TouchableOpacity onPress={toggleShowImage}>
                    <Image style={tailwind('w-full h-72 rounded mb-6')} source={{uri: image}}/>
                </TouchableOpacity>
            }

            <View style={tailwind('border-t border-b border-gray-200 py-4 flex-row mb-6')}>
                <Text style={tailwind('mr-10')}>{children.length || '0'} commentaires</Text>
                <Text>{stars.length || '0'} étoiles</Text>
            </View>

            <View style={tailwind('flex-row justify-between')}>
                <View style={tailwind('flex-row justify-between')}>
                    <FontAwesome name="comment-o" size={20} color={getColor('gray-400')}/>
                    <Text style={tailwind('ml-2')}>Commenter</Text>
                </View>
                <View style={tailwind('flex-row justify-between')}>
                    <FontAwesome name="star-o" size={20} color={getColor('gray-400')}/>
                    <Text style={tailwind('ml-2')}>J'aime</Text>
                </View>
                <View style={tailwind('flex-row justify-between')}>
                    <FontAwesome name="send-o" size={20} color={getColor('gray-400')}/>
                    <Text style={tailwind('ml-2')}>Partager</Text>
                </View>
            </View>

        </View>
    )

    return (
        <View style={tailwind('bg-white h-full')}>

            {
                showImage &&
                <ImagePopup image={image} close={toggleShowImage}/>
            }

            <View style={tailwind('h-20 pb-2 bg-gray-100 items-center justify-end shadow-sm')}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={tailwind('absolute left-0 bottom-0 pb-2 px-4')}>
                    <Ionicons name='arrow-back-outline' size={24} color={getColor('gray-400')}/>
                </TouchableOpacity>
                <Text style={tailwind('font-medium text-lg text-gray-800')}>Discussion</Text>
            </View>

            <FlatList
                data={post.children}
                ListHeaderComponent={<Original/>}
                keyExtractor={(post, i) => i.toString()}
                renderItem={({item}) => <PostsListItem post={item} navigation={navigation}/>}/>

        </View>
    );
}
;

export default Post;