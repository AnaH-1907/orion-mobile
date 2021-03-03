import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
    return (
        <View style={styles.mainContainer}>
          <Ionicons style={styles.settingsIcon} name="settings-sharp" size={24} color="black" />
          <View style={styles.profile}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://i.pravatar.cc/100?u=orangedurand',
              }}
            />
            <Text style={styles.name}>Orange Durand</Text>
            <Text style={styles.connect}>connecté il y a 10 heures</Text>
          </View>
          <View style={styles.infos}>
            <View style={styles.info}>
              <MaterialIcons name="comment" size={24} color="black" />
              <View style={styles.detailsContainer}>
                <Text style={styles.details}>147</Text>
                <Text style={styles.details}>messages</Text>
              </View>
            </View>
            <View style={styles.infoTouch}>
              <Entypo name="star" size={24} color="black" />
              <View style={styles.detailsContainer}>
                <Text style={styles.details}>17</Text>
                <Text style={styles.details}>étoiles</Text>
              </View>
            </View>
            <View style={styles.info}>
              <MaterialIcons name="stars" size={24} color="black" />
              <View style={styles.detailsContainer}>
                <Text style={styles.details}>8</Text>
                <Text style={styles.details}>badges</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.textButton}>Editer mon profil</Text>
          </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  settingsIcon: {
    alignSelf: 'flex-end',
    margin: 20,
  },
  profile: {
    marginTop: 20,
    marginBottom: 50,
    alignItems: 'center',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'grey',
  },
  name: {
    margin: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  connect: {
    fontWeight: '400',
    fontSize: 12,
    color: 'grey',
  },
  infos: {
    flexDirection: 'row',
  },
  infoTouch: {
    alignItems: 'center',
    width: 100,
    margin: 2,
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  info: {
    alignItems: 'center',
    width: 100,
    margin: 2,
    padding: 20,
    borderRadius: 5,
  },
  detailsContainer: {
    marginTop: 20,
  },
  details: {
    width: 70,
    textAlign: 'center',
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    width: 300,
    height: 60,
    marginTop: 80,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: '300',
  }
});

export default Profile;