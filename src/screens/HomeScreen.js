import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToVideoScreen = () => {
    navigation.navigate('VideoPlayer');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Email"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => goToVideoScreen()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    borderRadius: 5,
    width: '75%',
    height: 50,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'flex-start',
  },
  TextInput: {
    height: 50,
    padding: 10,
    marginLeft: 10,
  },
  loginBtn: {
    width: '50%',
    borderRadius: 25,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    borderColor: 'black',
    borderWidth: 1,
  },
});
