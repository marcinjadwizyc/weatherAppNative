import { Container } from '@components';
import { useAppContext } from '@context';
import { Screens } from '@navigator/screens';
import { useNavigation } from '@react-navigation/native';
import { themeStyles } from '@styles';
import { FlatList, Pressable, Text } from 'react-native';

import { styles } from './FavoriteLocation.styles';

export const FavoriteLocations = () => {
	const { favoriteLocations, theme } = useAppContext();
	const { navigate } = useNavigation();

	const handleNavigateToDetails = (name: string) => {
		navigate(Screens.WEATHER_DETAILS, { name: name });
	};

	return (
		<Container>
			<FlatList
				data={favoriteLocations}
				keyExtractor={el => el.id.toString()}
				renderItem={({ item }) => (
					<Pressable
						style={[styles.item, themeStyles[`card_${theme}`], themeStyles[`border_${theme}`]]}
						onPress={() => handleNavigateToDetails(item.name)}
					>
						<Text style={[styles.text, themeStyles[`font_${theme}`]]}>{item.name}</Text>
					</Pressable>
				)}
			/>
		</Container>
	);
};
