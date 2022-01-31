import { StyleSheet, Text, View } from 'react-native';

export default function Resume() {
	return (
		<View style={styles.resume}>
			<Text style={styles.resumeHead}>Career</Text>
			<View style={styles.job}>
				<Text><Text style={styles.employer}>React Apprentice | </Text> Sep 2020 - Current</Text>
				<Text>AlphaWorks (subsidiary of BitWise Industries)</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
  resume: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
		padding: 15,
		maxHeight: 600,
  },
	resumeHead: {
		fontWeight: "700",
		fontSize: 30,
		alignSelf: 'flex-start',
	},
	job: {
		alignSelf: 'flex-start',
		paddingTop: 5,
		paddingBottom: 20,
	},
	employer: {
		fontWeight: 'bold',
	}
});