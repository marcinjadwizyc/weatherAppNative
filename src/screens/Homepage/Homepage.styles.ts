import { StyleSheet } from "react-native";
import { Fonts } from "../../utils/fonts";
import { Colors } from "../../utils/colors";

export const homepageStyles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 24,
  },
  city: {
    fontFamily: Fonts.OUTFIT_REGULAR,
    fontSize: 32,
    color: Colors.WHITE,
  },
  temp: {
    marginTop: 12,
    marginBottom: 6,
    fontFamily: Fonts.OUTFIT_BOLD,
    fontSize: 50,
    color: Colors.WHITE,
  },
  description: {
    marginBottom: 24,
    fontFamily: Fonts.OUTFIT_REGULAR,
    fontSize: 24,
    color: Colors.WHITE,
  },
  info: {
    fontFamily: Fonts.OUTFIT_REGULAR,
    fontSize: 18,
    color: Colors.WHITE,
    textAlign: "center",
  },
});
