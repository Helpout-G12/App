import React from 'react'
import { TextInput, View } from 'react-native'

import styles from '../styles';

function Login() {
  return (
    <View style={styles.container}>
        <Text>Login</Text>
        <TextInput style={styles.input} placeholder="Email"  />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
    </View>
  )
}

export default Login