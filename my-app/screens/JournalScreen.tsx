import { StyleSheet } from 'react-native';

import { TText, TView } from '../components/utils/Themed';

export default function JournalScreen() {
  return (
    <TView style={styles.container}>
      {/* TODO make the Journal */}
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
