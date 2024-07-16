import { useAppContext } from '@context';
import { FontAwesome6 } from '@expo/vector-icons';
import { Colors } from '@styles';
import { TouchableOpacity } from 'react-native';

import { styles } from './IconButton.styles';

interface IconButtonProps {
	name: string;
	label: string;
	variant?: 'solid' | 'default';
	onPress: () => void;
}

export const IconButton = ({ name, label, variant = 'default', onPress }: IconButtonProps) => {
	const { theme } = useAppContext();

	const getIconColor = () => {
		if (variant === 'solid') {
			return Colors.WHITE;
		}

		return theme === 'light' ? Colors.BLACK : Colors.WHITE;
	};

	return (
		<TouchableOpacity
			style={[styles.button, styles[`button_${variant}`]]}
			accessibilityLabel={label}
			onPress={onPress}
		>
			<FontAwesome6 name={name} color={getIconColor()} size={variant === 'default' ? 32 : 24} />
		</TouchableOpacity>
	);
};
