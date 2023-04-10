import React from 'react'
import { View, Text, Button, FlatList, Box, Stack } from 'native-base'
import ThoughtForm from '../components/ThoughtForm'
import { color } from 'react-native-reanimated'


function ThoughtCard({ thought, edit }) {
  return (
    //Make a beautiful card here
    <View flex={1} justifyContent="center" alignItems="center">
      <Box bg={color.background} w="90%" p={4} my={5} rounded="lg">
        
        
        <Button onPress={edit}>Edit</Button>
      </Box>
    </View>
  )
}



export default function ThoughtDiary({ navigation }) {

  const [thoughts, setThoughts] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [currentThought, setCurrentThought] = useState(null)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/thoughts`)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
  }, [])

  return (
    <SafeAreaView>
      {editMode ? (
        <ThoughtForm props={{ currentThought, setCurrentThought, setEditMode }} />
      ) : (
        <View flex={1} justifyContent="center" alignItems="center">
          <Button onPress={() => setEditMode(true) && setCurrentThought(null)}>New Thought</Button>
          <FlatList data={thoughts} renderItem={({ item }) => <ThoughtCard thought={item} edit={() => setEditMode(true) && setCurrentThought(item)} />} />
        </View>
      )}
    </SafeAreaView >
  )
}