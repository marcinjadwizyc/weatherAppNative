import { Button, Container, ExtraInfo } from '@components';
import { useAppContext, useThemeContext } from '@context';
import { themeStyles } from '@styles';
import { getWeatherForecastByCity } from '@utils';
import { ThreeHourResponse } from 'openweathermap-ts/dist/types';
import { Fragment, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { styles } from './WeatherDetails.styles';

export const WeatherDetails = () => {
	const { currentLocation, favoriteLocations, setFavoriteLocations, locationData } = useAppContext();
	const { theme } = useThemeContext();

	const [forecast, setForecast] = useState<ThreeHourResponse | undefined>();

	const fontClass = themeStyles[`font_${theme}`];

	const isFavoriteLocation = favoriteLocations.includes(locationData?.name as string);

	const handleMakeFavoritePress = () => {
		if (locationData) {
			setFavoriteLocations(prevState => [...prevState, locationData.name]);
		}
	};

	const handleGetWeatherForecast = async () => {
		const data = await getWeatherForecastByCity(currentLocation);

		setForecast(data);
	};

	useEffect(() => {
		handleGetWeatherForecast();
	}, []);

	return (
		<Container>
			{locationData && (
				<View style={styles.container}>
					<View>
						<Text style={[styles.city, fontClass]}>{locationData.name}</Text>
						<Text style={[styles.temp, fontClass]}>{locationData.main.temp.toFixed()}&deg;C</Text>
					</View>
					<View style={[styles.cardContainer, themeStyles[`card_${theme}`]]}>
						<ExtraInfo
							value={`${locationData.main.feels_like.toFixed()}\u00B0C`}
							description='Feels like'
						/>
						<ExtraInfo value={`${locationData.main.humidity}%`} description='Humidity' />
						<ExtraInfo value={`${locationData.main.pressure} hpa`} description='Pressure' />
					</View>
					<View style={styles.forecastContainer}>
						{forecast?.list ? (
							<Fragment>
								<Text style={[styles.forecastTitle, themeStyles[`font_${theme}`]]}>
									Five Day Temperature Forecast:
								</Text>
								<View style={[styles.cardContainer, themeStyles[`card_${theme}`]]}>
									<FlatList
										data={forecast.list}
										keyExtractor={el => el.dt.toString()}
										renderItem={({ item }) => (
											<Text
												style={[styles.forecastTemp, themeStyles[`font_${theme}`]]}
											>{`${item.main.temp.toFixed()}\u00B0C`}</Text>
										)}
										horizontal
										contentContainerStyle={styles.forecastTempContainer}
									/>
								</View>
							</Fragment>
						) : (
							<ActivityIndicator />
						)}
					</View>
					{!isFavoriteLocation && <Button onPress={handleMakeFavoritePress}>Make Favorite</Button>}
				</View>
			)}
		</Container>
	);
};
