import { StyleSheet } from "react-native";

import { Fonts } from "../../utils/fonts";
import { Colors } from "../../utils/colors";

export const weatherDetialsStyles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  cityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  city: {
    fontFamily: Fonts.OUTFIT_REGULAR,
    fontSize: 32,
    color: Colors.WHITE,
  },
  temp: {
    marginTop: 12,
    marginBottom: 32,
    fontFamily: Fonts.OUTFIT_BOLD,
    fontSize: 50,
    color: Colors.WHITE,
  },
  extraInfoContainer: {
    flexDirection: "row",
    backgroundColor: Colors.BLACK_OPACITY,
    borderRadius: 24,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 6,
    marginBottom: 24,
  },
  extraInfoSection: {
    alignItems: "center",
  },
  extraInfoValue: {
    marginBottom: 6,
    fontFamily: Fonts.OUTFIT_BOLD,
    fontSize: 24,
    color: Colors.WHITE,
  },
  extraInfoDescription: {
    fontFamily: Fonts.OUTFIT_REGULAR,
    fontSize: 18,
    color: Colors.WHITE,
  },
});
