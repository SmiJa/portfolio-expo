import { StyleSheet, Text, View, Image } from 'react-native';
import Me from './../assets/images/profile2.png';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Profile() {


	return (
		<View style={styles.profile}>
			<View style={styles.header}>
				<View style={styles.summaryWrap}>
					<Text style={styles.summaryH1}>Personal Summary</Text>
					<Text>As a paid apprentice working with React and React Native I have worked on some amazing projects. I'm a self motivated front-end developer that thrives on learning new technologies.</Text>
				</View>
			</View>
			
			<View>
				<Text style={styles.skills}>Skills</Text>
				<Text>HTML 5, CSS 3, JavaScript, React, Bootstrap, Git, npm, Pthon</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
		padding: 15,
		borderColor: '#ecb939',
		borderStyle: 'solid',
		borderBottomWidth: 3,
		minHeight: 250,
  },
	header: {
		flexDirection: 'row',
	},
	summaryWrap: {
		flex: 1,
		flexWrap: 'wrap',
	},
	summaryH1: {
		fontWeight: "700",
		fontSize: 30,
		alignSelf: 'flex-start',
		flex: 1,
		flexWrap: 'wrap',
	},
	skills: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 20,
	},
	icon: {
		flex: 1,
		paddingRight: 5,
		paddingLeft: 5,
	},
});