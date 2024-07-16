import { FontStyles } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	item: {
		marginBottom: 12,
		borderStyle: 'solid',
		borderWidth: 1,
		paddingVertical: 4,
		paddingHorizontal: 12,
		borderRadius: 12,
		alignItems: 'center',
	},
	text: {
		...FontStyles.boldSmall,
	},
});
