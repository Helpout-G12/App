import { View, Text, Box, Image, Button, ScrollView } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColors } from "../hooks/useColors";
import { useState, useRef, useEffect } from "react";

import bg1 from "../assets/images/bg1.png";
import { Calendar } from "react-native-calendars";

import Selectmood from "../components/selectmood";

export default function MoodTrackerScreen({ navigation }) {
  const colors = useColors();
  const ddate = new Date();

  const [open, setopen] = useState(false);

  const showMoodSelector = () => {
    setopen(true);
  };

  const hideMoodSelector = () => {
    setopen(false);
  };

  const myRef = useRef({});
  useEffect(() => {
    const styleObj = {

      borderWidth: 4,
      borderRadius: 4,
      borderColor: "#22D3EE",
    };
    myRef.current.setNativeProps({
      style: styleObj,
    });
  }, [myRef]);
  

  return (
    <SafeAreaView>
      <Selectmood open={open} hideMoodSelector={hideMoodSelector}></Selectmood>
      <ScrollView>
        <View flexDir={"column"} bg={"#d8eaf7"} borderRadius={20} m={3}>
          <View borderRadius={15} bg={colors.primary} m={5} mb={1}>
            <Image source={bg1} alt="background" />
          </View>
          <Text ml={5} color={"gray.600"}>
            {ddate.toDateString()}
          </Text>
          <Text fontSize="3xl" ml={4} fontWeight="bold" color={colors.text}>
            Check In
          </Text>
          <Text ml={5} mb={4} fontSize={15} color={"gray.600"}>
            Pause and Ponder your State of Mind
          </Text>
          <Button width="90%" mx={"auto"} mb={4} onPress={showMoodSelector}>
            <Text fontSize="lg" color="white">
              What are you feeling?
            </Text>
          </Button>
        </View>

        <Calendar initialDate={new Date().toDateString()} 
        
        markingType={'period'}
        markedDates={{
          '2023-04-20': {textColor: 'blue'},
          '2023-04-22': {startingDay: true, color: 'red', textColor: 'pink'},
          '2023-04-23': {color: 'orange', textColor: 'pink', marked: true, disabled: true},
          '2023-04-24': {selected: true, endingDay: true, color: 'yellow', textColor: 'blue'},
          '2023-04-04': {disabled: true, startingDay: true, color: 'green', endingDay: true},
          '2023-04-07': {disabled: true, color: 'red', marked: true}
        }}
       
        />
        <View>
          <Box
            width="100%"
            bg="primary.500"
            p="4"
            mt="2.5"
            shadow={2}
            _text={{
              fontSize: "md",
              fontWeight: "bold",
              color: "white",
            }}
            ref={myRef}
          >
            Here will be today's mood
          </Box>
         <Box
         width="100%"
            bg="primary.500"
            p="4"
            mt="2.5"
            shadow={2}
            _text={{
              fontSize: "md",
              fontWeight: "bold",
              color: "white",
            }}
            ref={myRef}
          >
            Here will be yesterday's mood
         </Box>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
