import { Text, TouchableOpacity } from 'react-native';

import { styles } from './Button.styles';

interface ButtonProps {
	onPress: () => void;
	children: string;
}

export const Button = ({ onPress, children }: ButtonProps) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Text style={styles.text}>{children}</Text>
		</TouchableOpacity>
	);
};
