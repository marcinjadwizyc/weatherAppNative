import { ReactNode } from 'react';
import { View } from 'react-native';

import { styles } from './Container.styles';

interface ContainerProps {
	children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>{children}</View>
		</View>
	);
};
