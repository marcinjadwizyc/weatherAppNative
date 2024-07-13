import { FontStyles } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	value: {
		marginBottom: 6,
		...FontStyles.boldSmall,
	},
	description: {
		...FontStyles.regularSmall,
	},
});
