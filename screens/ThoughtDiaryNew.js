import React, { useState, useEffect } from 'react'
import { View, Text, Button, FlatList, Box, Stack, Row, Spacer } from 'native-base'
import ThoughtForm from '../components/ThoughtForm'
import { color } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColors } from '../hooks/useColors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil'


function ThoughtCard({ thought, edit }) {
  return (
    //Make a beautiful card here
    <View flex={1} justifyContent="center" alignItems="center">
      <Box bg={color.background} w="90%" p={4} my={5} rounded="lg">
        <Row justifyContent="space-between">
          <Text fontSize="sm" color={'gray.500'}>{thought.date}</Text>
          <Text fontSize="sm" color={'gray.500'}>{thought.thought_rating}</Text>
        </Row>
        <Row>
          <Text size={'md'}>{thought.thought}</Text>
        </Row>
        <Row justifyContent="space-between">
          <Spacer />
          <Button leftIcon={<FontAwesomeIcon icon={faPencil} size={'xs'} />} onPress={edit}>Edit</Button>
        </Row>
      </Box>
    </View>
  )
}



export default function ThoughtDiary({ navigation }) {
  const color = useColors()

  const [thoughts, setThoughts] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [currentThought, setCurrentThought] = useState(null)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/thoughts`)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .catch((err) => console.warn(err, "td46"))
  }, [])

  return (
    <SafeAreaView>
      {editMode ? (
        <ThoughtForm currentThought={currentThought} setEditMode={setEditMode} />
      ) : (
        <Box alignItems="center">
          <Button m={1} onPress={() => setEditMode(true) && setCurrentThought(null)}>New Thought</Button>
          <FlatList data={thoughts} renderItem={({ item }) => <ThoughtCard thought={item} edit={() => setEditMode(true) && setCurrentThought(item)} />} />
        </Box>
      )}
    </SafeAreaView >
  )
}