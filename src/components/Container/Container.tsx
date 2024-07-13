import { Fragment, ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './Container.styles';
import { StatusBar } from 'expo-status-bar';
import { useThemeContext } from '@context';
import { Colors, themeStyles } from '@styles';
import { Button } from '../Button';
import { useNavigation, useRoute } from '@react-navigation/native';

interface ContainerProps {
	children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
	const { theme, toggleTheme } = useThemeContext();
	const { goBack } = useNavigation();
	const route = useRoute();

	const isThemeLight = theme === 'light';

	return (
		<Fragment>
			<View style={[styles.container, themeStyles[`background_${theme}`]]}>
				<View style={styles.header}>
					{route.name !== 'Homepage' && <Button onPress={goBack}>Back</Button>}
					<Pressable style={styles.themeToggle} onPress={toggleTheme}>
						<Feather
							name={isThemeLight ? 'moon' : 'sun'}
							color={isThemeLight ? Colors.BLACK : Colors.WHITE}
							size={32}
						/>
					</Pressable>
				</View>
				<View style={styles.content}>{children}</View>
			</View>
			<StatusBar style={isThemeLight ? 'dark' : 'light'} />
		</Fragment>
	);
};
