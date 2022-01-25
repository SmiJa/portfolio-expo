import { StyleSheet, Text, View } from 'react-native';

export default function Resume() {
	return (
		<View style={styles.resume}>
			<Text style={styles.resumeHead}>Resume</Text>
			<Text>As a paid apprentice working with React and React Native I have worked on some amazing projects. I'm a self motivated front-end developer that thrives on learning new technologies.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
  resume: {
    flex: 1,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
		borderRadius: 5,
		padding: 15,
		maxHeight: 600,
		marginTop: 20,
		marginBottom: 20,
  },
	resumeHead: {
		fontWeight: 700,
		fontSize: 30,
		alignSelf: 'flex-start',
	}
});