import { StyleSheet } from 'react-native';
import { button, Text, View } from 'native-base';
import React from "react";
import { Button, Center } from "native-base";
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
          <Button>
            <Text style={{ color: "Yellow", borderColor: "white", marginbottom: "8", fontSize: 25 }}>
              Prompted Journal
            </Text>
          </Button>
          <Button>
            <Text color={color.text} borderColor={"black"} fontSize={"4xl"}>
              List 5 things you are grateful for today.
            </Text>
          </Button>
          <Button>
            <Text color={"purple.300"} borderColor={"black"} fontSize={"4xl"}>
              How do you draw strength from loved ones?
            </Text>
          </Button>
          <Button>
            <Text color={"black.300"} borderColor={"black"} fontSize={"4xl"}>
              When do you feel more happy?
            </Text>
          </Button>
          <Button>
            <Text color={"purple.300"} borderColor={"black"} fontSize={"4xl"}>
              With whom do you feel more comfortable?
            </Text>
          </Button>
          <Button>
            <Text color={"black.300"} borderColor={"black"} fontSize={"4xl"}>
              What was one moment of joy or beauty you experienced today?
            </Text>
          </Button>
          <Button>
            <Text color={"purple.300"} borderColor={"black"} fontSize={"4xl"}>
              I get anxious when _______________
            </Text>
          </Button>
          <Button>
            <Text color={"black.300"} borderColor={"black"} fontSize={"4xl"}>
              Write a letter of forgiveness to yourself.
            </Text>
          </Button>
          <Button>
            <Text color={"purple.300"} borderColor={"black"} fontSize={"4xl"}>
              what was your favorite moment of the day?
            </Text>
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
