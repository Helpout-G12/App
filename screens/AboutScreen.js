import React from 'react';
import { useColors } from '../hooks/useColors';
import { Box, Text, View, FlatList } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
  const colors = useColors()
  const data = [
    'Lokesh Chandak',
    'Sanjana Dhopte',
    'Shreyash Rane',
    'Siddhi Taori',
    'Tejaswini Rakhonde'
  ];

  return (
    <SafeAreaView>
      <View alignItems="center" justifyContent="center">
        <Text fontSize="sm" fontWeight="bold" color={"blue.300"} borderColor={"black"}>
          We are a team of 5 students from the Shri Sant Gajanan Maharaj College of Engineering, Shegaon, Maharashtra, India.
        </Text>
        <FlatList
          data={data}
          renderItem={({ item, index }) =>
            <Box bg={colors.background} p={4} my={2} borderRadius={10}>
              <Text>{index + 1}. {item}</Text>
            </Box>
          }
        />
      </View>
    </SafeAreaView>
  );
}