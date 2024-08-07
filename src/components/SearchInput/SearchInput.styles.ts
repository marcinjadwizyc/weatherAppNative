import { FontStyles } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	input: {
		flex: 1,
		marginRight: 12,
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: 12,
		...FontStyles.regularSmall,
	},
	buttons: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
});
