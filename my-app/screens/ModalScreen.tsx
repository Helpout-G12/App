import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import AboutUs from './AboutScreen';
import { TText, TView } from '../components/utils/Themed';

export default function ModalScreen() {
  return (
    <TView style={styles.container}>
      <AboutUs />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </TView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
