import { Button, Container, SearchInput } from '@components';
import { useAppContext, useThemeContext } from '@context';
import { Screens } from '@navigator/screens';
import { useNavigation } from '@react-navigation/native';
import { themeStyles } from '@styles';
import { capitalize, getWeatherDataByCity, getWeatherDataByLocation } from '@utils';
import * as Location from 'expo-location';
import { Fragment } from 'react';
import { Text, View } from 'react-native';

import { styles } from './Homepage.styles';

export const Homepage = () => {
	const { currentLocation, setCurrentLocation, locationData, setLocationData } = useAppContext();
	const { navigate } = useNavigation();
	const { theme } = useThemeContext();

	const fontClass = themeStyles[`font_${theme}`];

	const handleSeeMorePress = () => navigate(Screens.WEATHER_DETAILS);

	const handleSearchByText = async () => {
		const data = await getWeatherDataByCity(currentLocation);

		setLocationData(data);
	};

	const handleSearchByLocation = async () => {
		const {
			coords: { latitude, longitude },
		} = await Location.getCurrentPositionAsync();

		const data = await getWeatherDataByLocation(latitude, longitude);

		setLocationData(data);
		setCurrentLocation(data.name);
	};

	const getContent = () => {
		if (!locationData) {
			return <Text style={[styles.info, fontClass]}>Search location to see the weather data</Text>;
		}

		if (locationData.cod !== 200) {
			return <Text style={[styles.info, fontClass]}>Couldn't find the location, please try again</Text>;
		} else {
			return (
				<Fragment>
					<Text style={[styles.city, fontClass]}>{locationData.name}</Text>
					<Text style={[styles.temp, fontClass]}>{locationData.main.temp.toFixed()}&deg;C</Text>
					<Text style={[styles.description, fontClass]}>
						{capitalize(locationData.weather[0].description)}
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
