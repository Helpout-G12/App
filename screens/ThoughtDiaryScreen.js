import { View, Text, Button } from "native-base";
import { StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import ThoughtScreen from "./ThoughtScreen";
import { useState } from "react";

export default function ThoughtDiaryScreen({ navigation }) {
  const [open, setopen] = useState(false);
  const showThoughtRecorder = () => {
    setopen(true);
  };

  const hideThoughtRecorder = () => {
    setopen(false);
  };
  const handleClick = () => {
    showThoughtRecorder();
    navigation.navigate("ThoughtScreen");
  };

  return (
    <SafeAreaView>
      <ThoughtScreen
        open={open}
        hideThoughtRecorder={hideThoughtRecorder}
      ></ThoughtScreen>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.95} style={styles.button} />
        <Button onPress={showThoughtRecorder}>
          <Text style={{ color: "white", fontSize: 20 }}>
            Enter a Thought Record
          </Text>
        </Button>
        <Button>
          <Text style={{ color: "white", fontSize: 20 }}>
            See earlier records
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
    fontSize: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    maxWidth: 350,
  },
});
