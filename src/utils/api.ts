import OpenWeatherMap from 'openweathermap-ts';

const api = new OpenWeatherMap({
	apiKey: process.env.EXPO_PUBLIC_API_KEY as string,
	units: 'metric',
});

export const getWeatherDataByCity = (location: string) => {
	return api.getCurrentWeatherByCityName({
		cityName: location,
	});
};

export const getWeatherDataByLocation = (lat: number, lon: number) => {
	return api.getCurrentWeatherByGeoCoordinates(lat, lon);
};

export const getWeatherForecastByCity = async (location: string) => {
	const rawData = await api.getThreeHourForecastByCityName({
		cityName: location,
	});

	const regex = /12:00:00/;

	const filteredList = rawData.list.filter(el => el.dt_txt.match(regex));

	return {
		...rawData,
		list: filteredList,
	};
};
