import { Button, Container, SearchInput } from '@components';
import { useAppContext, useThemeContext } from '@context';
import { Screens } from '@navigator/screens';
import { useNavigation } from '@react-navigation/native';
import { ApiResponse, capitalize } from '@utils';
import { Fragment } from 'react';
import { Text, View } from 'react-native';

import { styles } from './Homepage.styles';
import { themeStyles } from '@styles';

export const Homepage = () => {
	const { currentLocation, setCurrentLocation, locationData, setLocationData } = useAppContext();
	const { navigate } = useNavigation();
	const { theme } = useThemeContext();

	const fontClass = themeStyles[`font_${theme}`];

	const handleSeeMorePress = () => navigate(Screens.WEATHER_DETAILS);

	const handleGetLocationData = async () => {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&appid=${process.env.EXPO_PUBLIC_API_KEY}&units=metric`;

		const response = await fetch(url);
		const data = (await response.json()) as ApiResponse;

		setLocationData(data);
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
			<SearchInput value={currentLocation} onChangeText={setCurrentLocation} onPress={handleGetLocationData} />
			<View style={styles.content}>{getContent()}</View>
		</Container>
	);
};
