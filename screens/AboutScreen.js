import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from 'native-base';

export default function About() {
	const data = [
		'Lokesh Chandak',
		'Sanjana Dhopte',
		'Shreyash Rane',
		'Siddhi Taori',
		'Tejaswini Rakhonde'
	];

	return (
		<View style={styles.container}>
			<Text style={styles.description}>
				We are a team of 5 students from the Shri Sant Gajanan Maharaj College of Engineering, Shegaon, Maharashtra, India.
			</Text>
			<FlatList
				data={data}
				renderItem={({ item, index }) =>
					<Text style={styles.item}>{index + 1}. {item}</Text>
				}
			/>
		</View>
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
		marginVertical: 8,
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