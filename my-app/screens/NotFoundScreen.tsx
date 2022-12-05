import { StyleSheet, TouchableOpacity } from 'react-native';

import { TText, TView } from '../components/utils/Themed';
import { RootStackScreenProps } from '../types';

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <TView style={styles.container}>
      <TText style={styles.title}>This screen doesn't exist.</TText>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <TText style={styles.linkText}>Go to home screen!</TText>
      </TouchableOpacity>
    </TView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
