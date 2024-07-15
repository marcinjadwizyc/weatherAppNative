import { ApiResponse } from './types';

const mainUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.EXPO_PUBLIC_API_KEY}&units=metric`;

const getWeatherData = async (url: string) => {
	const response = await fetch(url);
	const data = (await response.json()) as ApiResponse;

	return data;
};

export const getWeatherDataByText = (location: string) => {
	const url = mainUrl + `&q=${location}`;

	return getWeatherData(url);
};

export const getWeatherDataByLocation = (lat: number, lon: number) => {
	const url = mainUrl + `&lat=${lat}&lon=${lon}`;

	return getWeatherData(url);
};
