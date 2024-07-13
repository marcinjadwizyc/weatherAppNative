import { Colors, FontStyles } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		alignSelf: 'flex-start',
		paddingHorizontal: 24,
		paddingVertical: 12,
		backgroundColor: Colors.BLUE,
		borderRadius: 12,
	},
	text: {
		lineHeight: 20,
		...FontStyles.regularSmall,
	},
});
