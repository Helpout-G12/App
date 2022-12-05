import { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { TText, TView } from '../components/utils/Themed';

export default function About() {
	const [data, setData] = useState([
		'Lokesh Chandak',
		'Sanjana Dhopte',
		'Shreyash Rane',
		'Siddhi Taori',
		'Tejaswini Rakhonde'
	]);

	return (
		<TView style={styles.container}>
			<TText style={styles.description}>
				We are a team of 5 students from the Shri Sant Gajanan Maharaj College of Engineering, Shegaon, Maharashtra, India.
			</TText>
			<FlatList
				data={data}
				renderItem={({ item, index }) => <TText style={styles.item}>{index + 1}. {item}</TText>}
			/>
		</TView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	description: {
		margin: 20,
		marginVertical:8,
		paddingHorizontal: 20,
		fontSize: 16,
	},
	item: {
		padding: 10,
		backgroundColor: "rgba(255, 255, 255, 0.2)",
		borderRadius: 10,
		marginVertical: 8,
		fontSize: 18,
		height: 44,
		// ADD ANIMATION

	},
});