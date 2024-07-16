import { Button, Container, SearchInput } from '@components';
import { useAppContext } from '@context';
import { Screens } from '@navigator/screens';
import { useNavigation } from '@react-navigation/native';
import { themeStyles } from '@styles';
import { asCelcius, capitalize, getWeatherDataByCity, getWeatherDataByLocation } from '@utils';
import * as Location from 'expo-location';
import { CurrentResponse } from 'openweathermap-ts/dist/types';
import { Fragment, useState } from 'react';
import { Text, View } from 'react-native';

import { styles } from './Homepage.styles';

export const Homepage = () => {
	const { navigate } = useNavigation();
	const { theme } = useAppContext();

	const [currentLocation, setCurrentLocation] = useState('');
	const [currentLocationData, setcurrentLocationData] = useState<CurrentResponse | undefined>();

	const fontClass = themeStyles[`font_${theme}`];

	const handleSeeMorePress = () => navigate(Screens.WEATHER_DETAILS, { name: currentLocation });

	const handleSearchByText = async () => {
		const data = await getWeatherDataByCity(currentLocation);

		setcurrentLocationData(data);
		setCurrentLocation(data.name);
	};

	const handleSearchByLocation = async () => {
		const {
			coords: { latitude, longitude },
		} = await Location.getCurrentPositionAsync();

		const data = await getWeatherDataByLocation(latitude, longitude);

		setcurrentLocationData(data);
		setCurrentLocation(data.name);
	};

	const getContent = () => {
		if (!currentLocationData) {
			return <Text style={[styles.info, fontClass]}>Search location to see the weather data</Text>;
		}

		if (currentLocationData.cod !== 200) {
			return <Text style={[styles.info, fontClass]}>Couldn't find the location, please try again</Text>;
		} else {
			return (
				<Fragment>
					<Text style={[styles.city, fontClass]}>{currentLocationData.name}</Text>
					<Text style={[styles.temp, fontClass]}>{asCelcius(currentLocationData.main.temp)}</Text>
					<Text style={[styles.description, fontClass]}>
						{capitalize(currentLocationData.weather[0].description)}
					</Text>
					<Button onPress={handleSeeMorePress}>See More</Button>
				</Fragment>
			);
		}
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
