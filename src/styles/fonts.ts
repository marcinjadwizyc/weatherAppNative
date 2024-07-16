enum Fonts {
	OUTFIT_REGULAR = 'Outfit_400Regular',
	OUTFIT_BOLD = 'Outfit_800ExtraBold',
}

export const FontStyles = {
	regularSmall: {
		fontFamily: Fonts.OUTFIT_REGULAR,
		fontSize: 18,
		lineHeight: 27,
	},
	regularMedium: {
		fontFamily: Fonts.OUTFIT_REGULAR,
		fontSize: 24,
		lineHeight: 36,
	},
	regularLarge: {
		fontFamily: Fonts.OUTFIT_REGULAR,
		fontSize: 32,
		lineHeight: 48,
	},
	boldSmall: {
		fontFamily: Fonts.OUTFIT_BOLD,
		fontSize: 24,
		lineHeight: 36,
	},
	boldLarge: {
		fontFamily: Fonts.OUTFIT_BOLD,
		fontSize: 50,
		lineHeight: 75,
	},
};
