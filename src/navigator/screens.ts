export enum Screens {
	HOMEPAGE = 'Homepage',
	WEATHER_DETAILS = 'WeatherDetails',
	FAVORITE_LOCATIONS = 'FavoriteLocations',
}

export type StackParamList = {
	[Screens.HOMEPAGE]: undefined;
	[Screens.WEATHER_DETAILS]: undefined;
	[Screens.FAVORITE_LOCATIONS]: undefined;
};
