import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {tailwind} from '../lib/tailwind';

const ImagePopup = ({image, close}) => (
    <TouchableOpacity
        onPress={close}
        style={tailwind('absolute z-50 w-full h-full bg-gray-900 bg-opacity-90 items-center justify-center')}>
        <Image style={tailwind('w-full flex-1')} resizeMode='contain' source={{uri: image}}/>
    </TouchableOpacity>
);

export default ImagePopup;