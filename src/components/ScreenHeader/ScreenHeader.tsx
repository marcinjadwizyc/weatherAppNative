import { useThemeContext } from '@context';
import { Screens } from '@navigator/screens';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { styles } from './ScreenHeader.styles';

export const ScreenHeader = () => {
	const { theme, toggleTheme } = useThemeContext();
	const { goBack } = useNavigation();
	const route = useRoute();

	const isNotHomepage = route.name !== Screens.HOMEPAGE;

	return (
		<View style={styles.container}>
			{isNotHomepage && <IconButton name='arrow-left' onPress={goBack} />}
			<View style={styles.icons}>
				<IconButton name={theme === 'light' ? 'moon' : 'sun'} onPress={toggleTheme} />
			</View>
		</View>
	);
};
