import { StyleSheet, Text, View } from 'react-native';

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
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		padding: 10,
		maxHeight: 600,
		width: '100%',
		maxHeight: 80,
  },
h1: {
		fontWeight: 700,
		fontSize: 40,
		color: '#cdcdcd',
	}
});