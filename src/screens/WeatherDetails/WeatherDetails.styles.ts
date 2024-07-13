import { Colors, FontStyles } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-start',
	},
	cityContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	city: {
		...FontStyles.regularLarge,
	},
	temp: {
		...FontStyles.boldLarge,
	},
	extraInfoContainer: {
		width: '100%',
		flexDirection: 'row',
		borderRadius: 24,
		justifyContent: 'space-between',
		paddingHorizontal: 24,
		paddingVertical: 12,
		marginBottom: 24,
	},
});
