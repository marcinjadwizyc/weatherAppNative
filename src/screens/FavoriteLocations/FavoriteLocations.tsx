import { Container } from '@components';
import { useAppContext } from '@context';
import { FlatList, Text, View } from 'react-native';

export const FavoriteLocations = () => {
	const { favoriteLocations } = useAppContext();
	return (
		<Container>
			<FlatList
				data={favoriteLocations}
				renderItem={({ item }) => (
					<View>
						<Text>{item}</Text>
					</View>
				)}
			/>
		</Container>
	);
};
