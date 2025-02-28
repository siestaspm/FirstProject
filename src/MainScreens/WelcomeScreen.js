import React, {useEffect} from 'react';
import {View, Image, TouchableOpacity, Text, BackHandler} from 'react-native';
import {styles} from '../Styles/MainStyle';

const WelcomeScreen = ({navigation}) => {
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

  const handlePress = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Awesome App!</Text>
        <Image
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'}}
          style={styles.image}
        />
        <Text style={styles.desc}>
          {'Please log in to continue\n to the awesommess'}
        </Text>
      </View>
      <View style={styles.inAppContainer}>
        <TouchableOpacity
          style={[styles.button, styles.inapp, {width: 280}]}
          onPress={handlePress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.facebook, {marginRight: 10}]}
          onPress={handlePress}>
          <Text style={styles.buttonText}>Login with facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.google]}
          onPress={handlePress}>
          <Text style={styles.buttonText}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
