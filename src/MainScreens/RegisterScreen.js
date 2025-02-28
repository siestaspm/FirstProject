import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  BackHandler,
} from 'react-native';
import {styles} from '../Styles/MainStyle';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

  const handleRegisterPress = () => {
    navigation.navigate('LoginScreen');
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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={text => setConfirmPassword(text)}
            value={confirmPassword}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button1} onPress={handleRegisterPress}>
          <Text style={styles.buttonText1}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
