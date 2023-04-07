import { View, Text, Box, Image, Button, ScrollView, Heading, Center } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColors } from "../hooks/useColors";
import { useEffect, useState } from "react";
import moment from "moment";

import bg1 from "../assets/images/bg1.png";
import { Calendar } from "react-native-calendars";

import Selectmood from "../components/selectmood";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function MoodTrackerScreen({ navigation }) {
  const colors = useColors();
  const today = new Date().toDateString();

  const [moodSelectorOpen, setMoodSelectorOpen] = useState(false);
  const [mood, setMood] = useState(null);
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    fetch("https://lokeshc2.me/moods")
      .then((res) => res.json())
      .then((data) => setMoods(data))
      .catch((err) => console.log(err));

    setInterval(() => {
      fetch("https://lokeshc2.me/moods")
        .then((res) => res.json())
        .then((data) => setMoods(data))
        .catch((err) => console.log(err));
    }, 10000);
  }, []);

  useEffect(() => {
    // post mood to db
    if (mood) {
      fetch("https://lokeshc2.me/moods", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: mood.text,
          score: mood.score,
          time: mood.time
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
    }
  }, [mood]);

  return (
    <SafeAreaView>
      <Selectmood
        open={moodSelectorOpen}
        close={() => setMoodSelectorOpen(false)}
        setMood={setMood}
      />
      <ScrollView p={2}>
        <View flexDir={"column"} bg={"#d8eaf7"}>
          {(!mood) && <>
            <View borderTopRadius={10} ml={3} p={1}>
              <Image source={bg1} alt="background" />
            </View>
            <Text ml={5} color={"gray.600"}>
              {today}
            </Text>
            <Text fontSize="3xl" ml={4} fontWeight="bold" color={colors.text}>
              Check In
            </Text>
            <Text ml={5} mb={4} fontSize={15} color={"gray.600"}>
              Pause and Ponder your State of Mind
            </Text>
          </>}
          {mood && <>
            <FontAwesomeIcon icon={mood.icon} size={50} color={mood.color} style={{ alignSelf: "center" }} />
            <Center>
              <Text fontSize="xl" ml={4} fontWeight="bold" color={colors.text}>
                You're feeling {mood.text}
              </Text>
            </Center>
          </>}
          <Button width="90%" mx={"auto"} mb={4} onPress={() => setMoodSelectorOpen(true)}>
            <Text fontSize="lg" color="white">
              What are you feeling?
            </Text>
          </Button>
        </View>

        <Calendar initialDate={new Date().toDateString()}
          markedDates={{
            // sum the score of all moods on a day and color the day accordingly
            [today]: { selected: true, selectedColor: colors.primary },
            ...moods.reduce((acc, mood) => {
              const date = moment(mood.time).format("YYYY-MM-DD");
              if (acc[date]) {
                if (acc[date].score) {
                  acc[date].score += mood.score;
                } else {
                  acc[date].score = mood.score;
                }
              } else {
                acc[date] = { score: mood.score };
              }
              return acc;
            }, {}),
          }}
        />
        <View>
          <Heading ml={4} mt={4} mb={2} color={colors.text}>
            Your Moods
          </Heading>
          <ScrollView p={2}>
            {moods.length === 0 ?
              <Text mx={'auto'} color={colors.text}>
                No moods to show
              </Text>
              : moods.map((mood, i) => (
                <Box
                  key={i}
                  p={4}
                  my={2}
                  mx={4}
                  bg={colors.card}
                  borderRadius={10}
                  shadow={2}
                >
                  <Text fontSize="lg" color={colors.text}>
                    {mood.text}
                  </Text>
                  <Text fontSize="sm" color={colors.text}>
                    {mood.time}
                  </Text>
                </Box>
              ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
