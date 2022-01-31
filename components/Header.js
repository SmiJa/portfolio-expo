import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {
	return (
		<View style={styles.header}>
			
			<Text style={styles.h1}>Jason Smith</Text>
		</View>
	);
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#372e29',
    alignItems: 'center',
    justifyContent: 'center',
		padding: 10,
		width: '100%',
		maxHeight: 70,
		borderColor: '#ecb939',
		borderStyle: 'solid',
		borderBottomWidth: 3,
  },
	h1: {
		fontWeight: "700",
		fontSize: 38,
		color: '#f0c75e',
	},
});