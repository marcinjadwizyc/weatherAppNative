import OpenWeatherMap from 'openweathermap-ts';

const api = new OpenWeatherMap({
	apiKey: process.env.EXPO_PUBLIC_API_KEY as string,
	units: 'metric',
});

export const getWeatherDataByCity = async (location: string) => {
	const data = await api.getCurrentWeatherByCityName({
		cityName: location,
	});

	return data;
};

export const getWeatherDataByLocation = async (lat: number, lon: number) => {
	const data = await api.getCurrentWeatherByGeoCoordinates(lat, lon);

	return data;
};

export const getWeatherForecastByCity = async (location: string) => {
	const rawData = await api.getThreeHourForecastByCityName({
		cityName: location,
	});

	const regex = /12:00:00/;
	const filteredList = rawData.list.filter(el => el.dt_txt.match(regex)); // Return only one timestamp for each day

	return {
		...rawData,
		list: filteredList,
	};
};
