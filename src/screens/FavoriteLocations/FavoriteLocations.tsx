import { Container } from '@components';
import { useAppContext } from '@context';
import { Screens } from '@navigator/screens';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Pressable, Text, View } from 'react-native';

export const FavoriteLocations = () => {
	const { favoriteLocations } = useAppContext();
	const { navigate } = useNavigation();

	const handleNavigateToDetails = (name: string) => {
		navigate(Screens.WEATHER_DETAILS, { location: name });
	};

	return (
		<Container>
			<FlatList
				data={favoriteLocations}
				keyExtractor={el => el.id.toString()}
				renderItem={({ item }) => (
					<Pressable onPress={() => handleNavigateToDetails(item.location)}>
						<Text>{item.location}</Text>
					</Pressable>
				)}
			/>
		</Container>
	);
};
