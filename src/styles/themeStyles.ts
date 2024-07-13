import { StyleSheet } from 'react-native';

import { Colors } from './colors';

export const themeStyles = StyleSheet.create({
	font_light: {
		color: Colors.BLACK,
	},
	font_dark: {
		color: Colors.WHITE,
	},
	background_light: {
		backgroundColor: Colors.BACKGROUND_LIGHT,
	},
	background_dark: {
		backgroundColor: Colors.BACKGROUND_DARK,
	},
	card_light: {
		backgroundColor: Colors.BACKGROUND_CARD_LIGHT,
	},
	card_dark: {
		backgroundColor: Colors.BACKGROUND_CARD_DARK,
	},
	border_light: {
		borderColor: Colors.BLACK,
	},
	border_dark: {
		borderColor: Colors.WHITE,
	},
});
