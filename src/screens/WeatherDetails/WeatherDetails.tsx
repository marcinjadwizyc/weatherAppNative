import { Button, Container, ExtraInfo } from '@components';
import { useAppContext, useThemeContext } from '@context';
import { WeatherDetailsRouteProp } from '@navigator/screens';
import { useRoute } from '@react-navigation/native';
import { themeStyles } from '@styles';
import { getWeatherDataByCity, getWeatherForecastByCity } from '@utils';
import { CurrentResponse, ThreeHourResponse } from 'openweathermap-ts/dist/types';
import { Fragment, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { styles } from './WeatherDetails.styles';

export const WeatherDetails = () => {
	const { favoriteLocations, setFavoriteLocations } = useAppContext();
	const { theme } = useThemeContext();
	const { params } = useRoute<WeatherDetailsRouteProp>();

	const [current, setCurrent] = useState<CurrentResponse | undefined>();
	const [forecast, setForecast] = useState<ThreeHourResponse | undefined>();

	const fontClass = themeStyles[`font_${theme}`];

	const isFavoriteLocation = favoriteLocations.some(el => el.id === current?.id);

	const handleMakeFavoritePress = () => {
		if (current) {
			setFavoriteLocations(prevState => [
				...prevState,
				{
					location: current.name,
					id: current.id,
				},
			]);
		}
	};

	const handleGetcurrent = async () => {
		const { location } = params;

		const currentData = await getWeatherDataByCity(location);
		const forecastData = await getWeatherForecastByCity(location);

		setCurrent(currentData);
		setForecast(forecastData);
	};

	useEffect(() => {
		handleGetcurrent();
	}, []);

	return (
		<Container>
			{current && (
				<View style={styles.container}>
					<View>
						<Text style={[styles.city, fontClass]}>{current.name}</Text>
						<Text style={[styles.temp, fontClass]}>{current.main.temp.toFixed()}&deg;C</Text>
					</View>
					<View style={[styles.cardContainer, themeStyles[`card_${theme}`]]}>
						<ExtraInfo value={`${current.main.feels_like.toFixed()}\u00B0C`} description='Feels like' />
						<ExtraInfo value={`${current.main.humidity}%`} description='Humidity' />
						<ExtraInfo value={`${current.main.pressure} hpa`} description='Pressure' />
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
