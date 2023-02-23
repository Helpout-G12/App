import React from 'react';
import { NativeBaseProvider } from 'native-base';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './navigation';

const AuthContext = React.createContext();

export default function App() {
  const [userToken, setUserToken] = React.useState(null);
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex:1}}>
          <AuthContext.Provider value={{ userToken, setUserToken }}>
            <Navigation />
          </AuthContext.Provider>
          <ExpoStatusBar style="auto" />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}



