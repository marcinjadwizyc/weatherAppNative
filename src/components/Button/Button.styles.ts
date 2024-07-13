import { Colors, FontStyles } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		paddingVertical: 12,
		backgroundColor: Colors.BLUE,
		borderRadius: 12,
	},
	text: {
		color: Colors.WHITE,
		...FontStyles.regularSmall,
		lineHeight: 20,
	},
});
