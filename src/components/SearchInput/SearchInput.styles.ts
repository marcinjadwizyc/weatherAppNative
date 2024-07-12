import { StyleSheet } from "react-native";
import { Colors, FontStyles } from "@utils";

export const styles = StyleSheet.create({
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
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.WHITE,
    borderRadius: 12,
    ...FontStyles.regularSmall,
  },
});
