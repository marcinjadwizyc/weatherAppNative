import { Colors } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	button: {
		height: 44,
		width: 44,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button_default: {},
	button_solid: {
		borderRadius: 12,
		backgroundColor: Colors.BLUE,
	},
});
