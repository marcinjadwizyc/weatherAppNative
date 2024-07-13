import { FontStyles } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	value: {
		...FontStyles.boldSmall,
	},
	description: {
		...FontStyles.regularSmall,
	},
});
