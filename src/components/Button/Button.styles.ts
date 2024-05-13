import { StyleSheet } from "react-native";
import { Colors, FontStyles } from "../../utils";

export const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: Colors.TEAL,
    borderRadius: 12,
  },
  text: {
    lineHeight: 20,
    ...FontStyles.regularSmall,
  },
});
