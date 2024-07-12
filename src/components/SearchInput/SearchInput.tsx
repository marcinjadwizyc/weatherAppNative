import { TextInput, View } from "react-native";
import { Button } from "../Button";
import { styles } from "./SearchInput.styles";
import { Colors } from "@utils";

interface SearchInputProps {
  value: string;
  onChangeText: (value: string) => void;
  onPress: () => void;
}

export const SearchInput = ({
  value,
  onChangeText,
  onPress,
}: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder="Location..."
        placeholderTextColor={Colors.WHITE}
      />
      <Button onPress={onPress}>Search</Button>
    </View>
  );
};
