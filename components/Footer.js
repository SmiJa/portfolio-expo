import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Footer() {
	return (
		<View style={styles.header}>
			<TouchableOpacity
      onPress={() => {Linking.openURL('https://github.com/SmiJa')}}
      >
        <Text style={styles.h1}>My Github</Text>
      </TouchableOpacity>
			
		</View>
	);
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
		padding: 10,
		width: '100%',
		maxHeight: 50,
    backgroundColor: '#372e29',
		borderColor: '#ecb939',
		borderStyle: 'solid',
		borderTopWidth: 3,
  },
	h1: {
		fontWeight: "700",
		fontSize: 24,
		color: '#cdcdcd',
	},
});