import { Colors } from '@styles';
import { TextInput, View } from 'react-native';

import { Button } from '../Button';
import { styles } from './SearchInput.styles';

export interface SearchInputProps {
	value: string;
	onChangeText: (value: string) => void;
	onPress: () => void;
}

export const SearchInput = ({ value, onChangeText, onPress }: SearchInputProps) => {
	return (
		<View style={styles.container}>
			<TextInput
				value={value}
				onChangeText={onChangeText}
				style={styles.input}
				placeholder='Location...'
				placeholderTextColor={Colors.WHITE}
			/>
			<Button onPress={onPress}>Search</Button>
		</View>
	);
};
