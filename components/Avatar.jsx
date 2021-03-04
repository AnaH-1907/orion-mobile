import React, { useState, useEffect } from 'react';
import {Image, View, Platform, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-community/async-storage";

export default function Avatar({avatar}) {

  const [image, setImage] = useState(avatar);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const saveValueFunction = async () => {
    try {
      await AsyncStorage.setItem(
        'image',
        image
      );
    } catch (error) {
      // Error saving data
    }
  };

  const getValueFunction = async () => {
    try {
      const value = await AsyncStorage.getItem('image');
      if (value !== null) {
        // We have data!!
        setImage(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  useEffect(() => {
    getValueFunction();
  }, []);

  return (
    <View style={styles.profile}>
      {image &&
        <TouchableWithoutFeedback
          onPress={pickImage}
        >
          <Image
            source={{ uri: image }}
            style={styles.avatar}
            onLoad={saveValueFunction}
          />
        </TouchableWithoutFeedback>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    marginTop: 10,
    marginBottom: 50,
    alignItems: 'center',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'grey',
  },
});
