import { Modal, Text, Button, SimpleGrid, Box, View, Flex } from "native-base";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngry,
  faFaceAngry,
  faFaceFlushed,
  faFaceFrown,
  faFaceGrin,
  faFaceKiss,
  faFaceLaugh,
  faFaceSadCry,
  faFaceSmile,
} from "@fortawesome/free-regular-svg-icons";
import { faFaceDizzy, faFaceSurprise } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

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
      text: "Pleasant"
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
    ,
    {
      icon: faFaceFrown,
      color: "#454545",
      text: "Frown"
    }
    ,
    {
      icon: faFacebook,
      color: "#454545",
      text: "Surprise"
    }
    ,
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
          <Flex flexDir={"row"} flexWrap={"wrap"}>
            {emotions.map((emotion) => {
              return (
                <Flex p={3} flexWrap={"wrap"} alignItems={"center"} flexGrow={1}>
                  <FontAwesomeIcon icon={emotion.icon} size={40} color={emotion.color} />
                  <Text>{emotion.text}</Text>
                </Flex>
              );
            })}
          </Flex>
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
