import { useAppContext } from '@context';
import { Colors, themeStyles } from '@styles';
import { TextInput, View } from 'react-native';

import { IconButton } from '../IconButton';
import { styles } from './SearchInput.styles';

export interface SearchInputProps {
	value: string;
	onChangeText: (value: string) => void;
	onSearchPress: () => void;
	onLocationPress: () => void;
}

export const SearchInput = ({ value, onChangeText, onSearchPress, onLocationPress }: SearchInputProps) => {
	const { theme } = useAppContext();

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
				<IconButton name='magnifying-glass' variant='solid' onPress={onSearchPress} />
				<IconButton name='location-dot' variant='solid' onPress={onLocationPress} />
			</View>
		</View>
	);
};
