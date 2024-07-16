import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoriteLocations, Homepage, WeatherDetails } from '@screens';

import { Screens, StackParamList } from './screens';

const Stack = createNativeStackNavigator<StackParamList>();

export const StackNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName={Screens.HOMEPAGE}
			screenOptions={{
				headerShown: false,
				animation: 'none',
			}}
		>
			<Stack.Screen name={Screens.HOMEPAGE} component={Homepage} />
			<Stack.Screen name={Screens.WEATHER_DETAILS} component={WeatherDetails} />
			<Stack.Screen name={Screens.FAVORITE_LOCATIONS} component={FavoriteLocations} />
		</Stack.Navigator>
	);
};
