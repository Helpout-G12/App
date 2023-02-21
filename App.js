import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Login from './Screens/Login';

import styles from './styles';

const AuthContext = React.createContext();

export default function App() {
  const [userToken, setUserToken] = React.useState(null);
  return (
    <AuthContext.Provider value={userToken}>
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Login setter={setUserToken} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </GestureHandlerRootView>
    </AuthContext.Provider>
  );
}


