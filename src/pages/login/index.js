import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { styles } from './styles'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Entypo';


export default function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {}
  })

  function handleSignIn(data) {
    console.log(data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}
      accessible={false}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/login.png')}
          style={styles.ImageBackground}>

          <Animatable.Image
            animation={'bounceInDown'}
            duration={1500}
            source={require('../../assets/logo.png')}
            style={styles.logoHome}
            resizeMode='contain' />

          <View style={styles.input}>
            <Icon name='account' size={26} color={'#fff'} style={styles.icon} />
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Email ou CPF"
                  placeholderTextColor={'white'}
                  style={styles.btninput}
                  onChangeText={onChange}
                  onBlur={onBlur} // chamado quando o Textinput é tocado
                  value={value}
                />
              )}
            />
          </View>

          <View style={styles.input}>
            <Icon name='lock' size={23} color={'#fff'} style={styles.icon1} />
            <Controller
              control={control}
              name="senha"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Password  "
                  placeholderTextColor={'white'}
                  style={styles.btninput}
                  onChangeText={onChange}
                  secureTextEntry={true}
                  onBlur={onBlur} // chamado quando o Textinput é tocado 
                  value={value}
                />
              )}
            />

          </View>


          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(handleSignIn)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <StatusBar style="auto" />
        </ImageBackground>

      </View>
    </TouchableWithoutFeedback>

  )
}



