import React from 'react';
import { NativeBaseProvider } from 'native-base';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './navigation';
import { useColorScheme } from 'react-native';
import AuthContext from './contexts/Auth';

export default function App() {
  const colorScheme = useColorScheme();
  const [userToken, setUserToken] = React.useState(null);
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex:1}}>
          <AuthContext.Provider value={{ userToken, setUserToken }}>
            <Navigation colorScheme={colorScheme}/>
          </AuthContext.Provider>
          <ExpoStatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}



