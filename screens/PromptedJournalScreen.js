import { StyleSheet } from 'react-native';
import { button, Heading, Text, View } from 'native-base';
import React from "react";
import { Button, Center, Box } from "native-base";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useColors } from '../hooks/useColors';

export default function JournalScreen() {
  const color = useColors()
  const ddate = new Date();
  return (
    <View style={styles.container}>
      <Text>Date : {ddate.toDateString()} </Text>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={1.6} style={styles.button}>
          <Box><Heading>Write something today</Heading></Box>
          <Button>
              List 5 things you are grateful for today.
          </Button>
          <Button>
              How do you draw strength from loved ones?
          </Button>
          <Button>
              When do you feel more happy?
          </Button>
          <Button>
              With whom do you feel more comfortable?
          </Button>
          <Button>
              What was one moment of joy or beauty you experienced today?
          </Button>
          <Button>
              I get anxious when _______________
          </Button>
          <Button>
              Write a letter of forgiveness to yourself.
          </Button>
          <Button>
              what was your favorite moment of the day?
          </Button>
        </TouchableOpacity>
      </View>
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
    marginVertical: 15,
    height: 5,
    width: '90%',
  },
});
