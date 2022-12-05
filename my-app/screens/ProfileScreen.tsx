import { StyleSheet, Text } from 'react-native';
import { TText, TView } from '../components/utils/Themed';

export default function Profile() {
    return (
        <TView style={styles.container}>
            <SignIn />
            <SignUp />
        </TView>
    )
}

function SignUp() {
    return (
        <TView style={{ ...styles.button, ...styles.signup }}>
            <Text style={{ ...styles.title, ...styles.signup }}>Sign Up</Text>
        </TView>
    )
}

function SignIn() {
    return (
        <TView style={{ ...styles.button, ...styles.signin }}>
            <Text style={{ ...styles.title, ...styles.signin }}>Sign In</Text>
        </TView>
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
        margin: 20,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,

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

