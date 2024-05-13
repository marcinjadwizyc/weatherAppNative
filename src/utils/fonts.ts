import { Colors } from "./colors";

export enum Fonts {
  OUTFIT_REGULAR = "Outfit_400Regular",
  OUTFIT_BOLD = "Outfit_800ExtraBold",
}

export const FontStyles = {
  regularSmall: {
    fontFamily: Fonts.OUTFIT_REGULAR,
    color: Colors.WHITE,
    fontSize: 18,
  },
  regularMedium: {
    fontFamily: Fonts.OUTFIT_REGULAR,
    fontSize: 24,
    color: Colors.WHITE,
  },
  regularLarge: {
    fontFamily: Fonts.OUTFIT_REGULAR,
    fontSize: 32,
    color: Colors.WHITE,
  },
  boldSmall: {
    fontFamily: Fonts.OUTFIT_BOLD,
    fontSize: 24,
    color: Colors.WHITE,
  },
  boldLarge: {
    fontFamily: Fonts.OUTFIT_BOLD,
    fontSize: 50,
    color: Colors.WHITE,
  },
};
