import { StyleSheet, TextInput } from "react-native";
import { Modal, View, Text, Button } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons/faBorderNone";

//import styles from "./styles/ThoughtScreen.css";
const ThoughtRecord = ({ open, hideThoughtRecorder }) => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [isHovered, setIsHovered] = React.useState(false);

  const ddate = new Date();

  return (
    <SafeAreaView>
      <Modal isOpen={open} onClose={hideThoughtRecorder} size="xl">
        <Modal.Content>
          <Modal.CloseButton></Modal.CloseButton>
          <Modal.Header>Thought Record</Modal.Header>
          <Modal.Body>
            <Text style={styles.text}>Date : {ddate.toDateString()}</Text>
            {/* Day ,date ,Situation,Thoughts, Feelings, Alternative Thoughts, New feelings */}
            <Text style={styles.text}>Situation</Text>
            <TextInput
              label="situation"
              style={[styles.input, isHovered && styles.inputHover]}
              onChangeText={onChangeText}
              value={text}
              multiline={true}
              onFocus={() => setIsHovered(true)}
              onBlur={() => setIsHovered(false)}
              placeholder="What were you doing?
               What led to the unpleasant emotion? 
             What distressing physical sensations did you have?"
            />
            <Text style={styles.text}>Automatic Thoughts (ATs)</Text>
            <TextInput
              label="ATs"
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              multiline={true}
              placeholder=" What thought/s or image/s went through your mind?
              How much did you believe the thought at the time (0-100%)?"
            />
            <Text style={styles.text}>Emotions</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              multiline={true}
              placeholder="What emotion/s did you feel at the time?
             How intense was the emotion (0-100%)?"
            />
            <Text style={styles.text}>Alternative Thoughts</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              multiline={true}
              placeholder="Which thinking styles did you engage in?
 How much do you believe each response (0-100%)?"
            />
            <Text style={styles.text}>Outcome</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              multiline={true}
              placeholder="How much do you now believe your ATs (0-100%)?
             What emotion/s do you now feel? At what intensity?"
            />
            <Button>
              <Text>Save</Text>
            </Button>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 100,
    lineHeight: 28,
    borderWidth: 2,
    borderColor: "transparent",
    borderBottomColor: "#777",
    paddingTop: 4,
    paddingBottom: 4,
    // outline: "none",
    color: "#0d0c22",
  },
  text: {
    fontWeight: 10,
    fontSize: 15,
    marginTop: 10,
    marginBottom: 4,
  },
  // .input {
  //   height: 80;
  //   line-height: 28px;
  //   border: 2px solid transparent;
  //   border-bottom-color: #777;
  //   padding: 0.2rem 0;
  //   outline: none;
  //   background-color: transparent;
  //   color: #0d0c22;
  //   transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  // }
});

export default ThoughtRecord;
