import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Ionicons'

export default function Home() {

  const navigation = useNavigation();
  
  return (

    <View style={styles.container}>

      <ImageBackground
        source={require('../../assets/home.png')}
        style={styles.ImageBackground}
      >
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logoHome}
        />
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Register') }>
          <Text style={styles.buttonText}>Fazer seu cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={(styles.button, styles.buttonLog)} onPress={ () => navigation.navigate('Login') }>
          <Text style={(styles.buttonText, styles.buttonTextLog)}>Fazer login</Text>
        </TouchableOpacity>

        <View style={styles.containerIcons}>
          <Icon style={styles.Icons} name="logo-instagram" size={28} color='#FFF'/>
          <Icon style={styles.Icons} name="logo-facebook" size={28} color='#FFF'/>
          <Icon style={styles.Icons} name="logo-linkedin" size={28} color='#FFF'/>
          <Icon style={styles.Icons} name="logo-google" size={28} color='#FFF'/>
          <Icon style={styles.Icons} name="logo-apple" size={28} color='#FFF'/>
        </View>

        <StatusBar style="auto" />
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  ImageBackground:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoHome:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '30%',
    marginBottom: 15
  },
  button:{
    marginBottom: 20,
    width: '65%',
    height: 40,
    backgroundColor: 'transparent',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFF'
  },
  buttonLog:{
    width: '65%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    fontWeight: 'bold',
    color: '#FFF'
  },
  buttonTextLog:{
    fontWeight: 'bold',
    color: '#003565'
  },
  containerIcons:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 38,
    marginBottom: 150
  },
  Icons:{
    margin: 8,
  }
});
