import { useAppContext } from '@context';
import { Screens } from '@navigator/screens';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import { IconButton } from '../IconButton';
import { styles } from './ScreenHeader.styles';

export const ScreenHeader = () => {
	const { theme, toggleTheme } = useAppContext();
	const { goBack, navigate } = useNavigation();
	const { name } = useRoute();

	const isNotHomepage = name !== Screens.HOMEPAGE;

	const handleGoToFavorites = () => navigate(Screens.FAVORITE_LOCATIONS);

	return (
		<View style={styles.container}>
			{isNotHomepage && <IconButton name='arrow-left' label='Go Back' onPress={goBack} />}
			<View style={styles.icons}>
				<IconButton name='heart' label='Go to Favorites' onPress={handleGoToFavorites} />
				<IconButton name={theme === 'light' ? 'moon' : 'sun'} label='Toggle Theme' onPress={toggleTheme} />
			</View>
		</View>
	);
};
