import { StyleSheet } from 'react-native';

import { Text, View } from 'native-base';

export default function JournalScreen() {
  return (
    <View style={styles.container}>
      {/* TODO make the Journal */}
    </View>
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
