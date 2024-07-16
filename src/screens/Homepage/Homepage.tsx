import { Button, Container, SearchInput } from '@components';
import { useAppContext } from '@context';
import { Screens } from '@navigator/screens';
import { useNavigation } from '@react-navigation/native';
import { themeStyles } from '@styles';
import { asCelcius, capitalize, getWeatherDataByCity, getWeatherDataByLocation } from '@utils';
import * as Location from 'expo-location';
import { Fragment, useState } from 'react';
import { Text, View } from 'react-native';

import { styles } from './Homepage.styles';

export const Homepage = () => {
	const { currentWeatherData, setCurrentWeatherData, theme } = useAppContext();
	const { navigate } = useNavigation();
	const fontClass = themeStyles[`font_${theme}`];

	const [currentLocation, setCurrentLocation] = useState('');

	const handleNavigateToDetails = () => {
		if (currentWeatherData) {
			navigate(Screens.WEATHER_DETAILS, { name: currentWeatherData.name });
		}
	};

	const handleSearchByText = async () => {
		const data = await getWeatherDataByCity(currentLocation);

		setCurrentLocation(data.name);
		setCurrentWeatherData(data);
	};

	const handleSearchByLocation = async () => {
		const {
			coords: { latitude, longitude },
		} = await Location.getCurrentPositionAsync();

		const data = await getWeatherDataByLocation(latitude, longitude);

		setCurrentLocation(data.name);
		setCurrentWeatherData(data);
	};

	const getContent = () => {
		if (!currentWeatherData) {
			return <Text style={[styles.info, fontClass]}>Search location to see the weather data</Text>;
		}

		if (currentWeatherData.cod !== 200) {
			return <Text style={[styles.info, fontClass]}>Couldn't find the location, please try again</Text>;
		}

		return (
			<Fragment>
				<Text style={[styles.city, fontClass]}>{currentWeatherData.name}</Text>
				<Text style={[styles.temp, fontClass]}>{asCelcius(currentWeatherData.main.temp)}</Text>
				<Text style={[styles.description, fontClass]}>
					{capitalize(currentWeatherData.weather[0].description)}
				</Text>
				<Button onPress={handleNavigateToDetails}>See More</Button>
			</Fragment>
		);
	};

	return (
		<Container>
			<SearchInput
				value={currentLocation}
				onChangeText={setCurrentLocation}
				onSearchPress={handleSearchByText}
				onLocationPress={handleSearchByLocation}
			/>
			<View style={styles.content}>{getContent()}</View>
		</Container>
	);
};
