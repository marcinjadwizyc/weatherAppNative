import { RouteProp } from '@react-navigation/native';

export enum Screens {
	HOMEPAGE = 'Homepage',
	WEATHER_DETAILS = 'WeatherDetails',
	FAVORITE_LOCATIONS = 'FavoriteLocations',
}

export type StackParamList = {
	[Screens.HOMEPAGE]: undefined;
	[Screens.WEATHER_DETAILS]: {
		name: string;
	};
	[Screens.FAVORITE_LOCATIONS]: undefined;
};

export type WeatherDetailsRouteProp = RouteProp<StackParamList, Screens.WEATHER_DETAILS>;
