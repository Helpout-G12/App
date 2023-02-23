import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text color={"blue.300"} borderColor={"black"} fontSize={"3xl"}>
        This is a testing modal screen
      </Text>
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