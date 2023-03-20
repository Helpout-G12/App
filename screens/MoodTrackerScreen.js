import { View, Text, Box, Image, Button } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColors } from '../hooks/useColors';

import bg1 from '../assets/images/bg1.png';
import { Calendar } from 'react-native-calendars';

export default function MoodTrackerScreen({ navigation }) {
  const colors = useColors()
  const ddate = new Date();

  return (
    <SafeAreaView>
      <View>
        <View flexDir={"column"} bg={"#d8eaf7"} borderRadius={20} m={3}>
          <View borderRadius={15} bg={colors.primary} m={5} mb={1}>
            <Image source={bg1} alt="background" />
          </View>
          <Text ml={5} color={"gray.600"}>{ddate.toDateString()}</Text>
          <Text fontSize="3xl" ml={4} fontWeight="bold" color={colors.text}>Check In</Text>
          <Text ml={5} mb={4} fontSize={15} color={"gray.600"}>Pause and Ponder your State of Mind</Text>
          <Button width='90%' mx={"auto"} mb={4}>
            <Text fontSize='lg' color='white'>What are you feeling?</Text>
          </Button>
        </View>

        <Calendar initialDate={(new Date()).toDateString()} />
      </View>
    </SafeAreaView>
  );
}