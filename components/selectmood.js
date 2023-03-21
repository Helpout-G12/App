import { Modal, Text, Button, SimpleGrid, Box, View } from "native-base";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngry,
  faFaceAngry,
  faFaceFlushed,
  faFaceGrin,
  faFaceKiss,
  faFaceLaugh,
  faFaceSadCry,
  faFaceSmile,
} from "@fortawesome/free-regular-svg-icons";
import { faFaceDizzy, faFaceSurprise } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";

const Selectmood = ({ open, hideMoodSelector }) => {
  const emotions = [
    {
      icon: faFaceAngry,
      color: "#454545",
      text: "Angry"
    },
    {
      icon: faFaceDizzy,
      color: "#454545",
      text: "Dizzy"
    },
    {
      icon: faFaceFlushed,
      color: "#454545",
      text: "Flushed"
    },
    {
      icon: faFaceGrin,
      color: "#454545",
      text: "Grin"
    },
    {
      icon: faFaceKiss,
      color: "#454545",
      text: "SuperHappy"
    },
    {
      icon: faFaceLaugh,
      color: "#454545",
      text: "Laugh"
    },
    {
      icon: faFaceSadCry,
      color: "#454545",
      text: "Sadcry"
    },
    {
      icon: faFaceSmile,
      color: "#454545",
      text: "Smile"
    },
    {
      icon: faFaceSurprise,
      color: "#454545",
      text: "Surprise"
    }
  ];

  return (
    <Modal isOpen={open} onClose={hideMoodSelector} size="xl">
      <Modal.Content>
        <Modal.CloseButton></Modal.CloseButton>
        <Modal.Header>Test</Modal.Header>
        <Modal.Body>
          <Text>What are you feeling today?</Text>
          <Box display={"flex"} flexDir={"row"} flexWrap={"wrap"}>
            {emotions.map((emotion) => {
              return (
                <View p={3}>
                  <FontAwesomeIcon icon={emotion.icon} size={40} color={emotion.color} />
                  <Text>{emotion.text}</Text>
                </View>
              );
            })}
            {/* <View>
              <FontAwesomeIcon icon={} size={40} color={"#454545"} />
              <Text>Angry</Text>
            </View>
            <View>
              <FontAwesomeIcon icon={} size={40} color={"#454545"} />
              <Text>Numb</Text>
            </View>
            <View>
              <FontAwesomeIcon icon={faFaceGrin} size={40} color={"#454545"} />
              <Text>Happy</Text>
            </View>
            <View>
              <FontAwesomeIcon
                icon={faFaceFlushed}
                size={40}
                color={"#454545"}
              />
              <Text>Weird</Text>
            </View>
            <View>
              <FontAwesomeIcon icon={faFaceKiss} size={40} color={"#400045"} />
              <Text>Kisses</Text>
            </View>
            <View>
              <FontAwesomeIcon icon={faFaceLaugh} size={40} color={"#454"} />
              <Text>Laugh</Text>
            </View>
            <View>
              <FontAwesomeIcon icon={faFaceSmile} size={40} color={"#ff0545"} />
              <Text>Smile</Text>
            </View> */}
          </Box>
          <Button width="90%" mx={"auto"} mb={4}>
            <Text fontSize="lg" color="white">
              Continue
            </Text>
          </Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default Selectmood;
