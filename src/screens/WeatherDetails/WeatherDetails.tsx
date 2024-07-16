import { Button, Container, ExtraInfo } from '@components';
import { useAppContext } from '@context';
import { WeatherDetailsRouteProp } from '@navigator/screens';
import { useRoute } from '@react-navigation/native';
import { themeStyles } from '@styles';
import { asCelcius, formatDate, getWeatherDataByCity, getWeatherForecastByCity } from '@utils';
import { CurrentResponse, ThreeHourResponse } from 'openweathermap-ts/dist/types';
import { Fragment, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { styles } from './WeatherDetails.styles';

export const WeatherDetails = () => {
	const { favoriteLocations, setFavoriteLocations, theme } = useAppContext();
	const { params } = useRoute<WeatherDetailsRouteProp>();
	const fontClass = themeStyles[`font_${theme}`];

	const [isLoading, setIsLoading] = useState(false);
	const [currentWeatherData, setCurrentWeatherData] = useState<CurrentResponse | undefined>();
	const [foreacstWeatherData, setForecastWeatherData] = useState<ThreeHourResponse | undefined>();

	const isFavoriteLocation = favoriteLocations.some(el => el.id === currentWeatherData?.id);

	const handleMakeFavoritePress = () => {
		if (currentWeatherData) {
			setFavoriteLocations(prevState => [
				...prevState,
				{
					id: currentWeatherData.id,
					name: currentWeatherData.name,
				},
			]);
		}
	};

	const handleGetWeatherData = async () => {
		setIsLoading(true);

		const { name } = params;

		const currentWeatherDataResponse = await getWeatherDataByCity(name);
		const forecastWeatherDataResponse = await getWeatherForecastByCity(name);

		setCurrentWeatherData(currentWeatherDataResponse);
		setForecastWeatherData(forecastWeatherDataResponse);

		setIsLoading(false);
	};

	useEffect(() => {
		handleGetWeatherData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params]);

	if (isLoading) {
		return (
			<Container>
				<ActivityIndicator size={48} />
			</Container>
		);
	}

	return (
		<Container>
			{currentWeatherData && (
				<View style={styles.container}>
					<View>
						<Text style={[styles.city, fontClass]}>{currentWeatherData.name}</Text>
						<Text style={[styles.temp, fontClass]}>{asCelcius(currentWeatherData.main.temp)}</Text>
					</View>
					<View style={[styles.cardContainer, themeStyles[`card_${theme}`]]}>
						<ExtraInfo value={asCelcius(currentWeatherData.main.feels_like)} description='Feels like' />
						<ExtraInfo value={`${currentWeatherData.main.humidity}%`} description='Humidity' />
						<ExtraInfo value={`${currentWeatherData.main.pressure} hpa`} description='Pressure' />
					</View>
					<View style={styles.forecastContainer}>
						{foreacstWeatherData?.list ? (
							<Fragment>
								<Text style={[styles.forecastTitle, fontClass]}>Five Day Forecast:</Text>
								<View style={[styles.cardContainer, themeStyles[`card_${theme}`]]}>
									<FlatList
										data={foreacstWeatherData.list}
										keyExtractor={el => el.dt.toString()}
										renderItem={({ item }) => (
											<View style={styles.forecastContent}>
												<Text style={[styles.forecastDate, fontClass]}>
													{formatDate(item.dt_txt)}
												</Text>
												<Text style={[styles.forecastTemp, fontClass]}>
													{asCelcius(item.main.temp)}
												</Text>
											</View>
										)}
										horizontal
										contentContainerStyle={styles.forecastTempContainer}
									/>
								</View>
							</Fragment>
						) : undefined}
					</View>
					{!isFavoriteLocation && <Button onPress={handleMakeFavoritePress}>Make Favorite</Button>}
				</View>
			)}
		</Container>
	);
};
