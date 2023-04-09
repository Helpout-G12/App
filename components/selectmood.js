import { Modal, Text, Button, Flex, Pressable } from "native-base";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import emotions from "../constants/Emotions"

const Selectmood = ({ open, close, setMood }) => {
  const [selectedEmotion, setSelectedEmotion] = React.useState(null);

  return (
    <Modal isOpen={open} onClose={close} size="xl">
      <Modal.Content>
        <Modal.CloseButton></Modal.CloseButton>
        <Modal.Header>What are you feeling today?</Modal.Header>
        <Modal.Body>
          <Flex flexDir={"row"} flexWrap={"wrap"}>
            {emotions.map((emotion, i) =>
              <Pressable
                key={i}
                p={3}
                background={() => { selectedEmotion === emotion ? "gray.200" : "white" }}
                flexGrow={1}
                flexBasis="33%"
                onPress={(e) => setSelectedEmotion(emotion)}
                alignItems={"center"}
                borderRadius={10}
              >
                <FontAwesomeIcon
                  icon={emotion.icon}
                  size={40}
                  color={emotion.color}
                />
                <Text>{emotion.text}</Text>
              </Pressable>
            )
            }
          </Flex>
          <Button width="90%" mx={"auto"} mb={4}
            onPress={() => {
              setMood({
                ...selectedEmotion,
                time: new Date(),
              })
              close();
            }} >
            <Text fontSize="lg" color="white">
              {selectedEmotion ? selectedEmotion.text : "Select an emotion"}
            </Text>
          </Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default Selectmood;
