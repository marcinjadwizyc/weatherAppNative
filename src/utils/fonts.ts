import { Colors } from './colors';

export enum Fonts {
	OUTFIT_REGULAR = 'Outfit_400Regular',
	OUTFIT_BOLD = 'Outfit_800ExtraBold',
}

const regularBaseFont = {
	fontFamily: Fonts.OUTFIT_REGULAR,
	color: Colors.WHITE,
};

const boldBaseFont = {
	fontFamily: Fonts.OUTFIT_BOLD,
	color: Colors.WHITE,
};

export const FontStyles = {
	regularSmall: {
		fontSize: 18,
		...regularBaseFont,
	},
	regularMedium: {
		fontSize: 24,
		...regularBaseFont,
	},
	regularLarge: {
		fontSize: 32,
		...regularBaseFont,
	},
	boldSmall: {
		fontSize: 24,
		...boldBaseFont,
	},
	boldLarge: {
		fontSize: 50,
		...boldBaseFont,
	},
};
