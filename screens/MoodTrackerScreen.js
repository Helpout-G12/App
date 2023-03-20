import { View, Text, Box, Image } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColors } from '../hooks/useColors';

import bg1 from '../assets/images/bg1.png';

export default function MoodTrackerScreen({ navigation }) {
  const colors = useColors()
  return (
    <SafeAreaView>
      <View>
        <View flexDir={"column"} bg={"#d8eaf7"} borderRadius={20} m={3}>
          <View borderRadius={15} bg={colors.primary} m={5} mb={1}>
            <Image source={bg1} alt="background" />
          </View>
          <Text fontSize="3xl" ml={4} fontWeight="bold" color={colors.text}>Check In</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}