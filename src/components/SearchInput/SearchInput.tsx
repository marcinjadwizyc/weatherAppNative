import { useThemeContext } from '@context';
import { Colors, themeStyles } from '@styles';
import { TextInput, View } from 'react-native';

import { Button } from '../Button';
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
			<Button onPress={onPress}>Search</Button>
		</View>
	);
};
