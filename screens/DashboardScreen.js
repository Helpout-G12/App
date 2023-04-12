import { Text, View, Box, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useColors } from "../hooks/useColors";
import { Calendar } from "react-native-calendars";
import moment from "moment";

export default function DashboardScreen() {
  const colors = useColors();
  const today = new Date().toDateString();

  return (
    <View flex={1} bg={colors.background}>
      <Box
        flex={1}
        bg={colors.background}
        alignItems="center"
        justifyContent="center"
      >
        <Text color={colors.contrast} fontSize="2xl" fontWeight="bold">
          Welcome to the Dashboard
        </Text>
        <Calendar initialDate={new Date().toDateString()}
          markedDates={{
            // sum the score of all moods on a day and color the day accordingly
            [today]: { selected: true, selectedColor: colors.primary },
            // ...moods.reduce((acc, mood) => {
            //   const date = moment(mood.time).format("YYYY-MM-DD");
            //   if (acc[date]) {
            //     if (acc[date].score) {
            //       acc[date].score += mood.score;
            //     } else {
            //       acc[date].score = mood.score;
            //     }
            //   } else {
            //     acc[date] = { score: mood.score };
            //   }
            //   return acc;
            // }, {}),
          }}
        />
      </Box>
    </View>
  );
}
