/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import TextForm from "./TextForm";
import NumberForm from "./NumberForm";
import DateForm from "./DateForm";
import TimeForm from "./TimeForm";
import ThoughtsFormData from "../../constants/ThoughtsFormData";
import { View, Text, FormControl, Button, Container, Progress, ScrollView, VStack } from 'native-base';
import { useColors } from "../../hooks/useColors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ThoughtForm({ currentThought, setter, setEditMode }) {
  const color = useColors()
  const [formStep, setFormStep] = useState(1);
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

  const handleFormType = (type) => {
    switch (type) {
      case "text":
        return (
          <TextForm
            questionText={ThoughtsFormData[formStep - 1].questionText}
            placeholderText={ThoughtsFormData[formStep - 1].placeholderText}
            onChange={onChange}
            input={input}
          />
        );
      case "number":
        return (
          <NumberForm
            questionText={ThoughtsFormData[formStep - 1].questionText}
            placeholderText={ThoughtsFormData[formStep - 1].placeholderText}
            onChange={onChange}
            input={input}
          />
        );
      case "date":
        return (
          <DateForm
            questionText={ThoughtsFormData[formStep - 1].questionText}
            placeholderText={ThoughtsFormData[formStep - 1].placeholderText}
            onChange={onChange}
            input={input}
          />
        );
      case "time":
        return (
          <TimeForm
            questionText={ThoughtsFormData[formStep - 1].questionText}
            placeholderText={ThoughtsFormData[formStep - 1].placeholderText}
            onChange={onChange}
            input={input}
          />
        );
      default:
        return <Text>Incorrect form type</Text>;
    }
  };

  return (
    <SafeAreaView>
      <Flex basis={{ base: "100%", md: "50%" }} p={5} bg={'coolGray.50'} borderRadius={10} shadow={5}>
        <ScrollView>
          <VStack space={5}>
            <FormControl onSubmit={handleSubmit}>
              {handleFormType(ThoughtsFormData[formStep - 1].type)}
              <Text className="text-start mb-1">{`Step ${formStep} of ${ThoughtsFormData.length}`}</Text>
              <Progress value={currentProgress} mb={5} bg={'coolGray.300'} _filledTrack={color.primary} />
              <View aria-label="Button group for navigating new thought form">
                {/* Hide the previous button if rendering the first form step */}
                {formStep !== 1 && (
                  <Button
                    className="me-1 shadow-none"
                    id="form-button-previous"
                    variant="outline-secondary"
                    onClick={(e) => {
                      handleChange();
                      previousStep(e);
                    }}
                  >
                    Previous
                  </Button>
                )}
                {/* Hide the next button if rendering the last form step */}
                {ThoughtsFormData.length !== formStep ? (
                  <Button
                    className="shadow-none"
                    id="form-button-next"
                    variant="outline-primary"
                    onClick={(e) => {
                      handleChange();
                      nextStep(e);
                    }}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    type="submit"
                    id="form-button-submit"
                    className="shadow-none"
                  >
                    {currentThought ? "Update" : "Submit"}
                  </Button>
                )}
              </View>
            </FormControl>
          </VStack>
        </ScrollView>
      </Flex>
      <Text>
        Click <a href="/newThought">here</a> to log another thought, or
        click <a href="/diary">here</a> to view your diary
      </Text>
    </SafeAreaView>
  );
};
