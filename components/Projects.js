import { StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Projects() {
	return (
		<View style={styles.projectsWrap}>
			<Text style={styles.projectsHead}>Projects</Text>
			<Text style={styles.projectsSummary}>These are the projects I have worked on.</Text>

			<View>
				<View style={styles.project}>
					<Text style={styles.projectTitle}>Shopping List</Text>
					<Text style={styles.projectDescription}>The Shopping List app is a great way to make lists in the command line. This app was a fun way to learn about creating files and working with lists in Python.</Text>
					<Text style={styles.projectTech}>Built with: Python</Text>
					<TouchableOpacity style={styles.ghBtn} onPress={() => {Linking.openURL('https://github.com/SmiJa/Shopping_List')}}>
						<Text style={styles.ghText}><FontAwesome5 name="github" size={16} color="#cdcdcd" />View on GitHub</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.project}>
					<Text style={styles.projectTitle}>Haunted House Game</Text>
					<Text style={styles.projectDescription}>This project was a team effort from concept to deployment. The team that worked on this got great experience in routing in React.js</Text>
					<Text style={styles.projectTech}>React, CSS3</Text>
					<TouchableOpacity  style={styles.tryBtn} onPress={() => {Linking.openURL('https://luceroweb.github.io/haunted-house-game/#/')}}>
						<Text style={styles.tryProject}>Try the project</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.ghBtn} onPress={() => {Linking.openURL('https://github.com/luceroweb/haunted-house-game')}}>
						<Text style={styles.ghText}><FontAwesome5 name="github" size={16} color="#cdcdcd" />View on GitHub</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.project}>
					<Text style={styles.projectTitle}>Ask the Magic Box</Text>
					<Text style={styles.projectDescription}>This project was an opportunity to work with array's and random selection of an item in an array.</Text>
					<Text style={styles.projectTech}>Built with: HTML5, CSS3, JavaScript</Text>
					<TouchableOpacity  style={styles.tryBtn} onPress={() => {Linking.openURL('https://smija.github.io/magicEightBall/')}}>
						<Text style={styles.tryProject}>Try the project</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.ghBtn} onPress={() => {Linking.openURL('https://github.com/SmiJa/magicEightBall')}}>
						<Text style={styles.ghText}><FontAwesome5 name="github" size={16} color="#cdcdcd" />View on GitHub</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.project}>
					<Text style={styles.projectTitle}>Decidr</Text>
					<Text style={styles.projectDescription}>Learned a lot on working with handling state and user input in this app.</Text>
					<Text style={styles.projectTech}>Built with: React</Text>
					<TouchableOpacity  style={styles.tryBtn} onPress={() => {Linking.openURL('https://smija.github.io/decidr/')}}>
						<Text style={styles.tryProject}>Try the project</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.ghBtn} onPress={() => {Linking.openURL('https://github.com/SmiJa/decidr')}}>
						<Text style={styles.ghText}><FontAwesome5 name="github" size={16} color="#cdcdcd" />View on GitHub</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.project}>
					<Text style={styles.projectTitle}>Password Generator</Text>
					<Text style={styles.projectDescription}>Learned about how to work with user selectable options and random generation.</Text>
					<Text style={styles.projectTech}>Built with: HTML5, CSS3, JavaScript</Text>
					<TouchableOpacity  style={styles.tryBtn} onPress={() => {Linking.openURL('https://blissful-hodgkin-10badc.netlify.app/')}}>
						<Text style={styles.tryProject}>Try the project</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.ghBtn} onPress={() => {Linking.openURL('https://github.com/SmiJa/passwordGenerator')}}>
						<Text style={styles.ghText}><FontAwesome5 name="github" size={16} color="#cdcdcd" />View on GitHub</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.project}>
					<Text style={styles.projectTitle}>Rock, Paper, Scissors</Text>
					<Text style={styles.projectDescription}>Just a fun game project.</Text>
					<Text style={styles.projectTech}>Built with: HTML5, CSS3, JavaScript</Text>
					<TouchableOpacity  style={styles.tryBtn} onPress={() => {Linking.openURL('https://objective-panini-185d08.netlify.app/')}}>
						<Text style={styles.tryProject}>Try the project</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.ghBtn} onPress={() => {Linking.openURL('https://github.com/SmiJa/Rock_Paper_Scissors')}}>
						<Text style={styles.ghText}><FontAwesome5 name="github" size={16} color="#cdcdcd" />View on GitHub</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.project}>
					<Text style={styles.projectTitle}>E-Card</Text>
					<Text style={styles.projectDescription}>This project provides an E-Card for a user to send to a loved one. It has a form for the user to fill out a greeting and message to the person they have chosen to email it to.</Text>
					<Text style={styles.projectTech}>Built with: React</Text>
					<TouchableOpacity  style={styles.tryBtn} onPress={() => {Linking.openURL('https://smija.github.io/ecard/')}}>
						<Text style={styles.tryProject}>Try the project</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.ghBtn} onPress={() => {Linking.openURL('https://smija.github.io/ecard/')}}>
						<Text style={styles.ghText}><FontAwesome5 name="github" size={16} color="#cdcdcd" />View on GitHub</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
  projectsWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
		padding: 15,
		minHeight: 1600,
		borderColor: '#ecb939',
		borderStyle: 'double',
		borderBottomWidth: 5,
  },
	projectsHead: {
		fontWeight: "700",
		fontSize: 30,
		alignSelf: 'flex-start',
	},
	projectsSummary: {
		alignSelf: 'flex-start',
		marginBottom: 20,
	},
	project: {
		backgroundColor: '#372e29',
		padding: 10,
		borderRadius: 5,
		marginBottom: 10
	},
	projectTitle: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#fdf9ee',
	},
	projectDescription: {
		color: '#fdf9ee',
		marginBottom: 10,
	},
	projectTech: {
		marginBottom: 10,
		color: '#fdf9ee',
	},
	tryBtn: {
		borderRadius: 5,
		backgroundColor: '#ecb939',
		padding: 10,
		marginBottom: 10,
	},
	tryProject: {
		alignSelf: 'center',
		fontWeight: 'bold',
	},
	ghBtn: {
		borderRadius: 5,
		backgroundColor: '#000',
		padding: 10,
	},
	ghText: {
		alignSelf: 'center',
		color: '#cdcdcd',
		fontWeight: 'bold',
	}
});