import { StyleSheet } from "react-native";
import { FontStyles } from "../../utils";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  value: {
    marginBottom: 6,
    ...FontStyles.boldSmall,
  },
  description: {
    ...FontStyles.regularSmall,
  },
});
