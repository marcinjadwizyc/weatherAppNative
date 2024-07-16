import { Button, Container, ExtraInfo } from '@components';
import { useAppContext } from '@context';
import { WeatherDetailsRouteProp } from '@navigator/screens';
import { useRoute } from '@react-navigation/native';
import { themeStyles } from '@styles';
import { asCelcius, getWeatherDataByCity, getWeatherForecastByCity } from '@utils';
import { CurrentResponse, ThreeHourResponse } from 'openweathermap-ts/dist/types';
import { Fragment, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { styles } from './WeatherDetails.styles';

export const WeatherDetails = () => {
	const { favoriteLocations, setFavoriteLocations } = useAppContext();
	const { theme } = useAppContext();
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
					id: current.id,
					name: current.name,
				},
			]);
		}
	};

	const handleGetcurrent = async () => {
		const { name } = params;

		const currentData = await getWeatherDataByCity(name);
		const forecastData = await getWeatherForecastByCity(name);

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
						<Text style={[styles.temp, fontClass]}>{asCelcius(current.main.temp)}</Text>
					</View>
					<View style={[styles.cardContainer, themeStyles[`card_${theme}`]]}>
						<ExtraInfo value={asCelcius(current.main.feels_like)} description='Feels like' />
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
											<Text style={[styles.forecastTemp, themeStyles[`font_${theme}`]]}>
												{asCelcius(item.main.temp)}
											</Text>
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
