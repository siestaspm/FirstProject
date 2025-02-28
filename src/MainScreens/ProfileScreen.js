import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {styles} from '../Styles/MainStyle';
import {API_BASE_URL} from '../utils/varConsts';
import axios from 'axios';
const ProfileScreen = ({navigation}) => {
  const [user, setUser] = useState([]);
  const [reviews, setReviews] = useState(0);
  const backAction = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () =>
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'WelcomeScreen'}],
            }),
          ),
      },
    ]);
    return true;
  };

  useEffect(() => {
    generateUser();
    setReviews(Math.floor(Math.random() * 5) + 1);
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const generateUser = async () => {
    try {
      const randomDigit = Math.floor(Math.random() * 10) + 1;
      const endpoint = `${API_BASE_URL}/users/${randomDigit}`;
      const response = await axios.get(endpoint);
      if (typeof response.data === 'object' && response.status === 200) {
        setReviews(Math.floor(Math.random() * 5) + 1);
        setUser(response.data);
      }
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>User Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>
          {user.name?.firstname} {user.name?.lastname}
        </Text>
        <Text style={styles.profileAge}>Employee</Text>
        <TouchableOpacity style={styles.friendButton} onPress={generateUser}>
          <Text style={styles.friendButtonText}>Generate a new user</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.infoTitle, {textAlign: 'center'}]}>User info</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>{user.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Phone</Text>
          <Text style={styles.infoValue}>{user?.phone}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Reviews</Text>
          <View style={styles.ratingContainer}>
            {Array.from({length: 5}).map((_, index) => (
              <Text key={index} style={styles.star}>
                {index < reviews ? '★' : '☆'}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
