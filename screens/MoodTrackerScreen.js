import { StyleSheet } from 'react-native';
// import { MoodTracker } from '../components/UI/MoodTracker';
import { View } from 'native-base';

export default function MoodTrackerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <MoodTracker /> */}
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
