import { useThemeContext } from '@context';
import { Feather } from '@expo/vector-icons';
import { Screens } from '@navigator/screens';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Colors } from '@styles';
import { TouchableOpacity, View } from 'react-native';

import { Button } from '../Button';
import { styles } from './ScreenHeader.styles';

export const ScreenHeader = () => {
	const { theme, toggleTheme } = useThemeContext();
	const { goBack } = useNavigation();
	const route = useRoute();

	const isThemeLight = theme === 'light';
	const isNotHomepage = route.name !== Screens.HOMEPAGE;

	return (
		<View style={styles.container}>
			{isNotHomepage && <Button onPress={goBack}>Back</Button>}
			<TouchableOpacity style={styles.themeToggle} onPress={toggleTheme}>
				<Feather
					name={isThemeLight ? 'moon' : 'sun'}
					color={isThemeLight ? Colors.BLACK : Colors.WHITE}
					size={34}
				/>
			</TouchableOpacity>
		</View>
	);
};
