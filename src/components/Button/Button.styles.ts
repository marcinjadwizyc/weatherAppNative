import { StyleSheet } from "react-native";
import { Fonts } from "../../utils/fonts";
import { Colors } from "../../utils/colors";

export const buttonStyles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: Colors.TEAL,
    borderRadius: 12,
  },
  text: {
    fontFamily: Fonts.OUTFIT_REGULAR,
    fontSize: 18,
    color: Colors.WHITE,
    lineHeight: 20,
  },
});
