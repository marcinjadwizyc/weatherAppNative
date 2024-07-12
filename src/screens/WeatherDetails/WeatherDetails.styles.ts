import { StyleSheet } from "react-native";
import { Colors, FontStyles } from "@utils";

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  cityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  city: {
    ...FontStyles.regularLarge,
  },
  temp: {
    marginTop: 12,
    marginBottom: 32,
    ...FontStyles.boldLarge,
  },
  extraInfoContainer: {
    flexDirection: "row",
    backgroundColor: Colors.BACKGROUND_CARD_DARK,
    borderRadius: 24,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 24,
  },
});
