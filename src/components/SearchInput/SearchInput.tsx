import { TextInput, View } from "react-native";
import { Button } from "../Button";
import { searchInputStyles } from "./SearchInput.styles";
import { Colors } from "../../utils/colors";

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
    <View style={searchInputStyles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={searchInputStyles.input}
        placeholder="Location..."
        placeholderTextColor={Colors.WHITE}
      />
      <Button onPress={onPress}>Search</Button>
    </View>
  );
};
