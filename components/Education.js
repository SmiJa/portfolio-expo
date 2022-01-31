import { StyleSheet, Text, View } from 'react-native';

export default function Education() {
	return (
		<View style={styles.educationWrap}>
			<Text style={styles.educationHead}>Education</Text>
			<View style={styles.education}>
				<Text><Text style={styles.school}>BitWise Industries - Workforce Training | </Text>Aug-Sep 2021</Text>
				<Text>Training covered JavaScript</Text>
			</View>
			<View style={styles.education}>
				<Text><Text style={styles.school}>Clovis Community College | </Text>July 2020</Text>
				<Text>Associates of Art in Two Dimensional Art</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
  educationWrap: {
    flex: 1,
		padding: 15,
		borderColor: '#ecb939',
		borderStyle: 'double',
		borderBottomWidth: 5,
		minHeight: 200,
  },
	educationHead: {
		fontWeight: "700",
		fontSize: 30,
		alignSelf: 'flex-start',
	},
	education: {
		alignSelf: 'flex-start',
		paddingTop: 5,
		paddingBottom: 20,
	},
	school: {
		fontWeight: 'bold',
	}
});