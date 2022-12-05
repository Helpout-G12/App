import { StyleSheet } from 'react-native';

import { TText, TView } from '../utils/Themed';

export default function AboutUs() {
	return (
		<TView>
			<TView style={styles.getStartedContainer}>
				<TText
					style={styles.getStartedText}
					lightColor="rgba(0,0,0,0.8)"
					darkColor="rgba(255,255,255,0.8)">
					We are a team of 5 students from the Shri Sant Gajanan Maharaj College of Engineering, Shegaon, Maharashtra, India.
				</TText>
			</TView>
		</TView>
	);
}

const styles = StyleSheet.create({
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	codeHighlightContainer: {
		borderRadius: 3,
		paddingHorizontal: 4,
	},
	getStartedText: {
		fontSize: 17,
		lineHeight: 24,
		textAlign: 'center',
	},
	helpContainer: {
		marginTop: 15,
		marginHorizontal: 20,
		alignItems: 'center',
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		textAlign: 'center',
	},
});
