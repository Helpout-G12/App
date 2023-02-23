import { StyleSheet } from 'react-native';
import { MoodTracker } from '../components/UI/MoodTracker';
import { TText, TView } from '../components/utils/Themed';
import { RootTabScreenProps } from '../types';

export default function MoodTrackerScreen({ navigation }) {
  return (
    <TView style={styles.container}>
      <MoodTracker />
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
