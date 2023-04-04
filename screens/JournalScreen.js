import { StyleSheet } from 'react-native';
import { button,Text, View } from 'native-base';
import react from "react";
import { faCalendar } from '@fortawesome/free-regular-svg-icons/faCalendar';


import {Button,Center} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color} from "react-native-reanimated";
export default function JournalScreen() {
  return (
    
   
          <View style={styles.container}>
            <TouchableOpacity activeOpacity={1.6} style={styles.button}>
              <Button>
            <Text color={"Brown.500"} borderColor={"white"} fontSize={"4xl"}>
              date:6-04-2023
            </Text>
            </Button>
            <Button>
            <Text color={"black.300"} borderColor={"black"} fontSize={"4xl"}>
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
