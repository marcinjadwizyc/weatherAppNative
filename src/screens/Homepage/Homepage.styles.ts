import { FontStyles } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	content: {
		flex: 1,
		alignItems: 'flex-start',
		marginTop: 16,
	},
	city: {
		...FontStyles.regularLarge,
	},
	temp: {
		...FontStyles.boldLarge,
	},
	description: {
		marginBottom: 16,
		...FontStyles.regularMedium,
	},
	info: {
		textAlign: 'center',
		...FontStyles.regularSmall,
	},
});
