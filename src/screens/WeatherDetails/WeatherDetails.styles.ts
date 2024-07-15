import { FontStyles } from '@styles';
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
	cardContainer: {
		width: '100%',
		flexDirection: 'row',
		borderRadius: 24,
		justifyContent: 'space-between',
		paddingHorizontal: 24,
		paddingVertical: 12,
		marginBottom: 24,
	},
	forecastContainer: {
		width: '100%',
		alignItems: 'center',
	},
	forecastTitle: {
		fontSize: 18,
		marginBottom: 12,
	},
	forecastTempContainer: {
		flex: 1,
		justifyContent: 'space-between',
	},
	forecastTemp: {
		fontSize: 18,
	},
});
