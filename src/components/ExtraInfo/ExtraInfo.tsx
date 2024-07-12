import { Text, View } from 'react-native';

import { styles } from './ExtraInfo.styles';

interface ExtraInfoProps {
	value: string;
	description: string;
}

export const ExtraInfo = ({ value, description }: ExtraInfoProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.value}>{value}</Text>
			<Text style={styles.description}>{description}</Text>
		</View>
	);
};
