import { Text, TouchableOpacity } from "react-native";
import { buttonStyles } from "./Button.styles";

interface ButtonProps {
  onPress: () => void;
  children: string;
}

export const Button = ({ onPress, children }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles.container}>
      <Text style={buttonStyles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
