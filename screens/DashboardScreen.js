import { Text, View, Box, Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { useColors } from '../hooks/useColors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle'
import { TouchableHighlight } from 'react-native-gesture-handler'

export default function DashboardScreen() {
  const colors = useColors()
  const navigation = useNavigation()

  return (
    <View flex={1} bg={colors.background}>
      <Box flex={1} bg={colors.background} alignItems="center" justifyContent="center">
        <Text color={colors.contrast} fontSize="2xl" fontWeight="bold">
          Welcome to the Dashboard
        </Text>
        <Button
          mt={4}
          bg={colors.primaryLight}
          _text={{ color: colors.contrast }}
          onPress={() => navigation.navigate('About')}
          startIcon={<FontAwesomeIcon icon={faInfoCircle} color={colors.contrast} size={20} />}
        >
          <Text fontSize="md">About</Text>
        </Button>
      </Box>
    </View>
  )
}

