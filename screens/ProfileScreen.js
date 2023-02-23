import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <SignIn />
      <SignUp />
    </View>
  )
}

function SignUp() {
  return (
    <View style={{ ...styles.button, ...styles.signup }}>
      <Text style={{ ...styles.title, ...styles.signup }}>Sign Up</Text>
    </View>
  )
}

function SignIn() {
  return (
    <View style={{ ...styles.button, ...styles.signin }}>
      <Text style={{ ...styles.title, ...styles.signin }}>Sign In</Text>
    </View>
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

