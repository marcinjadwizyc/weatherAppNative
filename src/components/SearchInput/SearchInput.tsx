import { useThemeContext } from '@context';
import { Colors, themeStyles } from '@styles';
import { TextInput, View } from 'react-native';

import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { styles } from './SearchInput.styles';

export interface SearchInputProps {
	value: string;
	onChangeText: (value: string) => void;
	onPress: () => void;
}

export const SearchInput = ({ value, onChangeText, onPress }: SearchInputProps) => {
	const { theme } = useThemeContext();

	return (
		<View style={styles.container}>
			<TextInput
				value={value}
				onChangeText={onChangeText}
				style={[styles.input, themeStyles[`border_${theme}`], themeStyles[`font_${theme}`]]}
				placeholder='Location...'
				placeholderTextColor={theme === 'light' ? Colors.BLACK : Colors.WHITE}
			/>
			<View style={styles.buttons}>
				<IconButton name='magnifying-glass' variant='solid' onPress={onPress} />
				<IconButton name='location-dot' variant='solid' onPress={onPress} />
			</View>
		</View>
	);
};
