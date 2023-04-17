import React, { useState, useEffect } from 'react'
import { View, Text, Button, FlatList, Flex, Box, Stack, Row, Spacer } from 'native-base'
import ThoughtForm from '../components/ThoughtForm'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColors } from '../hooks/useColors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil'


function ThoughtCard({ thought, edit }) {
  const color = useColors()
  return (
    //Make a beautiful card here
    <View flex={1} justifyContent="center" alignItems="center">
      <Flex bg={color.background} w='full' p={3} m={2} rounded="lg">
        <Row justifyContent="space-between">
          <Text fontSize="sm" color={'gray.500'}>{thought.date}</Text>
          <Text fontSize="sm" color={'gray.500'}>{thought.thought_rating}</Text>
        </Row>
        <Row>
          <Text>{thought.thought}</Text>
        </Row>
        <Row justifyContent="flex-end">
          <Button leftIcon={<FontAwesomeIcon icon={faPencil} size={10} />} onPress={edit}>Edit</Button>
        </Row>
      </Flex>
    </View>
  )
}



export default function ThoughtDiary({ navigation }) {
  const color = useColors()

  const [thoughts, setThoughts] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [currentThought, setCurrentThought] = useState(null)

  const getThoughts = () => fetch('https://lokeshc2.me/thoughts')
    .then((res) => res.json())
    .then((data) => setThoughts(data))
    .catch((err) => console.warn(err, "td46"))

  useEffect(() => {
    getThoughts()
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