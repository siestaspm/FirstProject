import React, {useState, useEffect} from 'react';
import {CommonActions} from '@react-navigation/native';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  BackHandler,
  Alert,
} from 'react-native';
import {styles} from '../Styles/MainStyle';
import {API_BASE_URL} from '../utils/varConsts';
import axios from 'axios';
const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const backAction = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const handleLoginPress = async () => {
    try {
      const endpoint = `${API_BASE_URL}/auth/login`;
        const inputData = {
          username: username,
          password: password,
        };
      const response = await axios.post(endpoint, inputData);
      console.log(JSON.stringify(response, null, 2));
      if (response.status === 200 && typeof response.data === 'object') {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'ProfileScreen'}],
          }),
        );
      }
    } catch (er) {
      console.log(er);
      Alert.alert('Something went wrong. Please try again');
    }
  };

  const handleRegisterPress = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://www.bootdey.com/img/Content/avatar/avatar5.png',
          }}
          style={styles.logo}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={text => setUsername(text)}
            value={username}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button1} onPress={handleLoginPress}>
          <Text style={styles.buttonText1}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={handleRegisterPress}>
          <Text style={styles.buttonText1}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
