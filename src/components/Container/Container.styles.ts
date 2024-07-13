import { Colors } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.BACKGROUND_DARK,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 60,
		marginTop: 50,
		marginBottom: 8,
		paddingHorizontal: 16,
	},
	themeToggle: {
		marginLeft: 'auto',
	},
	content: {
		flex: 1,
		paddingHorizontal: 16,
	},
});
