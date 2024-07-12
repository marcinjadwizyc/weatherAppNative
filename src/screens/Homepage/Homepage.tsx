import { Button, Container, SearchInput } from '@components';
import { useAppContext } from '@context';
import { useNavigation } from '@react-navigation/native';
import { ApiResponse, capitalize, Screens } from '@utils';
import { Fragment } from 'react';
import { Text, View } from 'react-native';

import { styles } from './Homepage.styles';

export const Homepage = () => {
	const { currentLocation, setCurrentLocation, locationData, setLocationData } = useAppContext();
	const { navigate } = useNavigation();

	const handleSeeMorePress = () => navigate(Screens.WEATHER_DETAILS);

	const handleGetLocationData = async () => {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&appid=${process.env.EXPO_PUBLIC_API_KEY}&units=metric`;

		const response = await fetch(url);
		const data = (await response.json()) as ApiResponse;

		setLocationData(data);
	};

	const getContent = () => {
		if (!locationData) {
			return <Text style={styles.info}>Search location to see the weather data</Text>;
		}

		if (locationData.cod !== 200) {
			return <Text style={styles.info}>Couldn't find the location, please try again</Text>;
		} else {
			return (
				<Fragment>
					<Text style={styles.city}>{locationData.name}</Text>
					<Text style={styles.temp}>{locationData.main.temp.toFixed()}&deg;C</Text>
					<Text style={styles.description}>{capitalize(locationData.weather[0].description)}</Text>
					<Button onPress={handleSeeMorePress}>Check Weather Details</Button>
				</Fragment>
			);
		}
	};

	return (
		<Container>
			<SearchInput value={currentLocation} onChangeText={setCurrentLocation} onPress={handleGetLocationData} />
			<View style={styles.content}>{getContent()}</View>
		</Container>
	);
};
