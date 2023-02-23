import {useContext, useEffect} from 'react'
import AuthContext from "../contexts/Auth";
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
	const navigation = useNavigation()
	const { userToken, setUserToken } = useContext(AuthContext)
	useEffect(() => {
		if (!userToken) {
			navigation.navigate('Login')
		}
	}, [userToken])
  return (
		<View>
			<Text>Profile Screen</Text>
			<Button title="Logout" onPress={() => setUserToken(null)} />
		</View>
	)
}

export default ProfileScreen

const styles = StyleSheet.create({})