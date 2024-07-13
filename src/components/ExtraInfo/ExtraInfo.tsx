import { useThemeContext } from '@context';
import { themeStyles } from '@styles';
import { Text, View } from 'react-native';

import { styles } from './ExtraInfo.styles';

interface ExtraInfoProps {
	value: string;
	description: string;
}

export const ExtraInfo = ({ value, description }: ExtraInfoProps) => {
	const { theme } = useThemeContext();

	return (
		<View style={styles.container}>
			<Text style={[styles.value, themeStyles[`font_${theme}`]]}>{value}</Text>
			<Text style={[styles.description, themeStyles[`font_${theme}`]]}>{description}</Text>
		</View>
	);
};
