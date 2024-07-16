import { useAppContext } from '@context';
import { themeStyles } from '@styles';
import { Text, View } from 'react-native';

import { styles } from './ExtraInfo.styles';

interface ExtraInfoProps {
	value: string;
	description: string;
}

export const ExtraInfo = ({ value, description }: ExtraInfoProps) => {
	const { theme } = useAppContext();

	const fontStyle = themeStyles[`font_${theme}`];

	return (
		<View style={styles.container}>
			<Text style={[styles.value, fontStyle]}>{value}</Text>
			<Text style={[styles.description, fontStyle]}>{description}</Text>
		</View>
	);
};
