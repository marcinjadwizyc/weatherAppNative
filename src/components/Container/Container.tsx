import { useThemeContext } from '@context';
import { themeStyles } from '@styles';
import { StatusBar } from 'expo-status-bar';
import { Fragment, ReactNode } from 'react';
import { View } from 'react-native';

import { ScreenHeader } from '../ScreenHeader';
import { styles } from './Container.styles';

interface ContainerProps {
	children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
	const { theme } = useThemeContext();

	return (
		<Fragment>
			<View style={[styles.container, themeStyles[`background_${theme}`]]}>
				<ScreenHeader />
				<View style={styles.content}>{children}</View>
			</View>
			<StatusBar style={theme === 'light' ? 'dark' : 'light'} />
		</Fragment>
	);
};
