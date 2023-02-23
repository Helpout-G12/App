import React from 'react';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, SafeAreaProvider } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const AuthContext = React.createContext();

export default function App() {
  const [userToken, setUserToken] = React.useState(null);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <GestureHandlerRootView>
          <SafeAreaView>
            <SafeAreaProvider>
              <AuthContext.Provider value={{userToken, setUserToken}}>
                <Navigation />
              </AuthContext.Provider>
            </SafeAreaProvider>
          </SafeAreaView>
          <ExpoStatusBar style="auto" />
        </GestureHandlerRootView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}



