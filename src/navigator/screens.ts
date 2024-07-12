export enum Screens {
	HOMEPAGE = 'Homepage',
	WEATHER_DETAILS = 'WeatherDetails',
}

export type StackParamList = {
	[Screens.HOMEPAGE]: undefined;
	[Screens.WEATHER_DETAILS]: undefined;
};
