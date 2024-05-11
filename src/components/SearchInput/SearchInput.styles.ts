import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";
import { Fonts } from "../../utils/fonts";

export const searchInputStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginRight: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontFamily: Fonts.OUTFIT_REGULAR,
    color: Colors.WHITE,
    fontSize: 18,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.WHITE,
    borderRadius: 12,
  },
});
