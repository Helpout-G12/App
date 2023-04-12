/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Text, FormControl, Button, Flex, Progress, ScrollView, VStack, Input } from 'native-base';
import { useColors } from "../../hooks/useColors";

export default function ThoughtForm({ currentThought, setEditMode }) {
  const color = useColors()
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  console.warn(currentThought, "td79")

  const [dateTime, setDateTime] = useState(currentThought?.date || new Date())
  const [situation, setSituation] = useState(currentThought?.situation || "")
  const [thought, setThought] = useState(currentThought?.thought || "")
  const [thoughtRating, setThoughtRating] = useState(currentThought?.thought_rating || 0)
  const [emotions, setEmotions] = useState(currentThought?.emotions || "")
  const [behaviours, setBehaviours] = useState(currentThought?.behaviours || "")
  const [evidenceFor, setEvidenceFor] = useState(currentThought?.evidence_for || "")
  const [evidenceAgainst, setEvidenceAgainst] = useState(currentThought?.evidence_against || "")
  const [balancedThought, setBalancedThought] = useState(currentThought?.balanced_thought || "")
  const [balancedRating, setBalancedRating] = useState(currentThought?.balanced_rating || 0)

  const formCompleted = thought && situation && dateTime && thoughtRating && emotions && behaviours && evidenceFor && evidenceAgainst && balancedThought && balancedRating

  const newThought = {
    date: dateTime,
    situation,
    thought,
    thought_rating: thoughtRating,
    emotions,
    behaviours,
    evidence_for: evidenceFor,
    evidence_against: evidenceAgainst,
    balanced_thought: balancedThought,
    balanced_rating: balancedRating,
  }

  const postNewThought = async () => {
    return await fetch(`${process.env.REACT_APP_API_URI}/thoughts`, {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(newThought),
    }).then((res) => res.json());
  };

  const updateThought = async () => {
    return await fetch(`${process.env.REACT_APP_API_URI}/thoughts/${currentThought._id}`, {
      headers: { "content-type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(formData),
    }).then((res) => res.json());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formCompleted && currentThought) {
      updateThought();
      setEditMode(false);
    } else if (formCompleted) {
      postNewThought();
      setEditMode(false);
    } else {
      alert("Please complete the form");
    }
  };

  return (
    <>
      <Flex basis={{ base: "100%", md: "50%" }} p={5} bg={'coolGray.50'} borderRadius={10} shadow={5}>
        <ScrollView>
          <VStack space={5}>
            <FormControl>
              <FormControl.Label>
                <Text>When did this thought occur?</Text>
              </FormControl.Label>
              <Button onPress={() => setDatePickerVisible(true)} textAlign={"left"}>{dateTime.toDateString() || "Pick a date"}</Button>
              {datePickerVisible && <DateTimePicker
                onChange={(e, selectedDate) => { e.type === 'set' && setDateTime(selectedDate); setDatePickerVisible(false) }}
                value={dateTime || new Date()}
              />}
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text>What was the thought?</Text>
              </FormControl.Label>
              <Input
                value={thought}
                onChangeText={(text) => setThought(text)}
                placeholder="Thought"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text>What was the situation?</Text>
              </FormControl.Label>
              <Input
                value={situation}
                onChangeText={(text) => setSituation(text)}
                placeholder="Situation"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text>How true do you think this thought is?</Text>
              </FormControl.Label>
              <Input
                value={thoughtRating}
                onChangeText={(text) => setThoughtRating(text)}
                placeholder="Thought Rating"
              />

            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text>What was your strongest emotion?</Text>
              </FormControl.Label>
              <Input
                value={emotions}
                onChangeText={(text) => setEmotions(text)}
                placeholder="Emotions"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text>What behaviours did this thought trigger?</Text>
              </FormControl.Label>
              <Input
                value={behaviours}
                onChangeText={(text) => setBehaviours(text)}
                placeholder="Behaviours"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text>What evidence is there that your thought is true?</Text>
              </FormControl.Label>
              <Input
                value={evidenceFor}
                onChangeText={(text) => setEvidenceFor(text)}
                placeholder="Evidence For"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text>What evidence is there that your thought is false?</Text>
              </FormControl.Label>
              <Input
                value={evidenceAgainst}
                onChangeText={(text) => setEvidenceAgainst(text)}
                placeholder="Evidence Against"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text>Weighing the evidence for and against, what is a more balanced thought?</Text>
              </FormControl.Label>
              <Input
                value={balancedThought}
                onChangeText={(text) => setBalancedThought(text)}
                placeholder="Balanced Thought"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text>How true do you think this new balanced thought is?</Text>
              </FormControl.Label>
              <Input
                value={balancedRating}
                onChangeText={(text) => setBalancedRating(text)}
                placeholder="Balanced Rating"
              />
            </FormControl>
            <Button onPress={handleSubmit}>
              <Text>Submit</Text>
            </Button>
          </VStack>
        </ScrollView>
      </Flex >
    </>
  );
};
