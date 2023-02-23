import { StyleSheet } from 'react-native';
import { Button, Text, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect } from 'react';
import AuthContext from '../contexts/Auth';

export default function Login() {
  const navigation = useNavigation();
  const { userToken, setUserToken } = useContext(AuthContext)
  useEffect(() => {
		if (userToken) {
			navigation.navigate('Root')
		}
	}, [userToken])
  return (
    <View style={styles.container}>
      <SignIn onPress={() => setUserToken(3)} />
      <SignUp />
      <Button
        onPress={() => navigation.navigate('Root')}
        m={3} ml={'auto'}
      >
        <Text>Go to Dashboard</Text>
      </Button>
    </View>
  )
}

function SignUp({ onPress }) {
  return (
    <Button onPress={onPress} my={3} mx={'auto'}>
      <Text>Sign Up</Text>
    </Button>
  )
}

function SignIn({onPress}) {
  return (
    <Button onPress={onPress} m={3} mr={'auto'}>
      <Text>Sign In</Text>
    </Button>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    maxWidth: 200,
    margin: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  signup: {
    backgroundColor: 'white',
    color: 'blue',
  },
  signin: {
    backgroundColor: 'blue',
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

