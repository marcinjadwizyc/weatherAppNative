import { FontStyles } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	content: {
		flex: 1,
		marginTop: 24,
	},
	city: {
		...FontStyles.regularLarge,
	},
	temp: {
		marginTop: 12,
		marginBottom: 6,
		...FontStyles.boldLarge,
	},
	description: {
		marginBottom: 24,
		...FontStyles.regularMedium,
	},
	info: {
		textAlign: 'center',
		...FontStyles.regularSmall,
	},
});
