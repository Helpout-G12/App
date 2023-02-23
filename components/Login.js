import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

import styles from '../styles';

function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType={'email-address'}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", }}>
        <Button title="Login" style={{ flex: 1, margin: 5 }} />
        <Button title="Register" style={{ flex: 1, margin: 5 }} />
      </View>
    </View>
  )
}

export default Login

const s = StyleSheet.create({
  container: {
  },
  flexRow: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  button: {
    padding: 8,
    borderRadius: 4,
    margin: 8,
  },
  primary: {
    backgroundColor: 'blue',
  },
  secondary: {
    backgroundColor: 'green',
  },
  tertiary: {
    backgroundColor: 'red',
  },
});