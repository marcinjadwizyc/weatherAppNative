import { Container } from '@components';
import { useAppContext } from '@context';
import { Screens } from '@navigator/screens';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Pressable, Text } from 'react-native';

export const FavoriteLocations = () => {
	const { favoriteLocations } = useAppContext();
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
					<Pressable onPress={() => handleNavigateToDetails(item.name)}>
						<Text>{item.name}</Text>
					</Pressable>
				)}
			/>
		</Container>
	);
};
